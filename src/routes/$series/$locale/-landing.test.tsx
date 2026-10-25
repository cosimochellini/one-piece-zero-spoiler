import { fireEvent, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import { expireCookie, parseCookieHeader } from '~/lib/cookies'
import { ONE_PIECE_BOOKMARK } from '~/lib/progress/series'
import {
  dismissWelcome,
  markWelcome,
  welcomeOwed,
} from '~/lib/progress/welcome'
import type { DemoEntry, HomeView, OnboardingView } from '~/lib/view/records'
import { coveredRecord, drawing, waypoint } from '~/test/fixtures'
import { renderWithProviders } from '~/test/providers'

import { LandingPage } from './-landing'

const saga = waypoint({ name: 'Dressrosa', summary: 'The toy kingdom.' })

/** A gate at one episode and the chapter beside it. */
function at(episode: number): {
  revealedAtChapter: number
  revealedAtEpisode: number
} {
  return { revealedAtEpisode: episode, revealedAtChapter: episode * 2 }
}

function entry(over: Partial<DemoEntry>): DemoEntry {
  return {
    id: 'entry',
    kind: 'character',
    name: 'Entry',
    ...at(1),
    drawings: [{ ...at(1), value: drawing() }],
    affiliation: [],
    epithet: [],
    bounty: [],
    ...over,
  }
}

const zoro = entry({
  id: 'roronoa-zoro',
  name: 'Roronoa Zoro',
  ...at(2),
  drawings: [{ ...at(2), value: drawing('green') }],
  affiliation: [
    { ...at(2), value: 'Pirate hunter on his own account' },
    { ...at(3), value: 'Straw Hat Pirates' },
  ],
})

function onboarding(over: Partial<OnboardingView> = {}): OnboardingView {
  return {
    arcs: [entry({ id: 'romance-dawn', kind: 'arc', name: 'Romance Dawn' })],
    cast: [zoro],
    places: [],
    chapterAt: [2, 4, 6],
    fogged: 900,
    start: null,
    tail: [coveredRecord()],
    ...over,
  }
}

function cookies(): Map<string, string> {
  return parseCookieHeader(document.cookie)
}

const home: HomeView = {
  before: false,
  cast: [],
  filler: null,
  point: { mode: 'episode', episode: 650 },
  saga,
  stories: [],
}

describe('LandingPage', () => {
  afterEach(() => {
    expireCookie(ONE_PIECE_BOOKMARK.cookie)
    expireCookie(ONE_PIECE_BOOKMARK.trialCookie)
    dismissWelcome()
  })

  it('opens a card on a trial at the dial’s point, saving nothing', () => {
    renderWithProviders(<LandingPage landing={{ onboarding: onboarding() }} />)

    fireEvent.change(screen.getByRole('slider'), { target: { value: '2' } })
    fireEvent.click(screen.getByRole('link', { name: /Roronoa Zoro/u }))

    expect(cookies().get(ONE_PIECE_BOOKMARK.trialCookie)).toBe('2')
    expect(cookies().has(ONE_PIECE_BOOKMARK.cookie)).toBe(false)
  })

  it('saves the dial’s point and owes the welcome', () => {
    renderWithProviders(<LandingPage landing={{ onboarding: onboarding() }} />)

    fireEvent.change(screen.getByRole('slider'), { target: { value: '3' } })
    fireEvent.click(screen.getByRole('button', { name: 'I’m here' }))

    expect(cookies().get(ONE_PIECE_BOOKMARK.cookie)).toBe('3')
    expect(welcomeOwed()).toBe(true)
  })

  it('shows the welcome once on the home page, until it is closed', () => {
    markWelcome()
    renderWithProviders(<LandingPage landing={{ home }} />, {
      bookmark: { mode: 'episode', episode: 650 },
    })

    expect(
      screen.getByRole('heading', { name: 'What you can do now' }),
    ).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Close' }))

    expect(
      screen.queryByRole('heading', { name: 'What you can do now' }),
    ).not.toBeInTheDocument()
  })

  it('wakes East Blue up as the dial moves, for a visitor with no bookmark', () => {
    renderWithProviders(<LandingPage landing={{ onboarding: onboarding() }} />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'The One Piece wiki without spoilers',
      }),
    ).toBeInTheDocument()
    expect(screen.getAllByText('Romance Dawn')).toHaveLength(2)
    expect(screen.queryByText('Roronoa Zoro')).not.toBeInTheDocument()
    expect(screen.getByText('Under fog until episode 2')).toBeInTheDocument()

    const dial = screen.getByRole('slider', { name: 'Point in the story' })
    fireEvent.change(dial, { target: { value: '2' } })

    expect(screen.getByText('Roronoa Zoro')).toBeInTheDocument()
    expect(
      screen.getByText('Pirate hunter on his own account'),
    ).toBeInTheDocument()

    fireEvent.change(dial, { target: { value: '3' } })

    expect(screen.getByText('Straw Hat Pirates')).toBeInTheDocument()
    expect(screen.getByText('900 more entries', { exact: false })).toBeVisible()
    expect(screen.getByText('Anime or manga?')).toBeInTheDocument()
  })

  it('starts the dial at the trial point', () => {
    renderWithProviders(
      <LandingPage
        landing={{
          onboarding: onboarding({ start: { mode: 'episode', episode: 3 } }),
        }}
      />,
    )

    expect(screen.getByRole('slider')).toHaveValue('3')
    expect(screen.getByText('Straw Hat Pirates')).toBeInTheDocument()
  })

  it('switches the dial to chapters without moving the story forward', () => {
    renderWithProviders(<LandingPage landing={{ onboarding: onboarding() }} />)

    fireEvent.change(screen.getByRole('slider'), { target: { value: '2' } })
    fireEvent.click(screen.getByRole('button', { name: 'Chapter' }))

    expect(screen.getByRole('slider')).toHaveValue('4')
    expect(screen.getByText('Roronoa Zoro')).toBeInTheDocument()
  })

  it('draws the reader’s arc for a reader with a bookmark', () => {
    renderWithProviders(<LandingPage landing={{ home }} />, {
      bookmark: { mode: 'episode', episode: 650 },
    })

    expect(
      screen.getByRole('heading', { level: 1, name: 'Dressrosa' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Episode 650')).toBeInTheDocument()
    expect(screen.queryByRole('slider')).not.toBeInTheDocument()
  })

  it('warns of filler close ahead, with a link to the filler guide', () => {
    renderWithProviders(
      <LandingPage
        landing={{
          home: {
            ...home,
            filler: {
              cells: [
                { episode: 52, kind: null },
                { episode: 53, kind: null },
                { episode: 54, kind: 'filler' },
              ],
              here: 52,
              inRun: null,
              next: { first: 54, last: 60, distance: 2 },
            },
          },
        }}
      />,
      { bookmark: { mode: 'episode', episode: 52 } },
    )

    expect(
      screen.getByRole('heading', { name: 'Watch out for filler' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        'The next filler is 2 episodes away. Next run to skip: EP 54–60.',
      ),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: 'EP 54. Filler' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /See all filler/u }),
    ).toHaveAttribute('href', '/one-piece/en/filler')
  })

  it('says where the canon picks up inside a run, in season codes', () => {
    renderWithProviders(
      <LandingPage
        landing={{
          home: {
            ...home,
            point: { mode: 'season', season: 5, episode: 1 },
            filler: {
              cells: [
                { episode: 131, kind: 'filler' },
                { episode: 132, kind: 'filler' },
              ],
              here: 131,
              inRun: { resume: 144, distance: 13 },
              next: { first: 196, last: 206, distance: 65 },
            },
          },
        }}
      />,
      { bookmark: { mode: 'season', season: 5, episode: 1 } },
    )

    expect(
      screen.getByText(
        'You are in a filler run. The canon picks up again at S06E01, 13 episodes away.',
      ),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: 'S05E01. Filler. your bookmark' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('listitem', { current: 'step' })).toHaveTextContent(
      'S05E01',
    )
  })

  it('has no filler warning with none ahead', () => {
    renderWithProviders(<LandingPage landing={{ home }} />, {
      bookmark: { mode: 'episode', episode: 650 },
    })

    expect(
      screen.queryByRole('heading', { name: 'Watch out for filler' }),
    ).not.toBeInTheDocument()
  })
})
