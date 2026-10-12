import { fireEvent, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import type { DemoEntry, OnboardingView } from '~/lib/view/records'
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

describe('LandingPage', () => {
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
    fireEvent.click(screen.getByRole('button', { name: 'Manga chapter' }))

    expect(screen.getByRole('slider')).toHaveValue('4')
    expect(screen.getByText('Roronoa Zoro')).toBeInTheDocument()
  })

  it('draws the reader’s arc for a reader with a bookmark', () => {
    renderWithProviders(
      <LandingPage
        landing={{
          home: {
            before: false,
            cast: [],
            point: { mode: 'episode', episode: 650 },
            saga,
            stories: [],
          },
        }}
      />,
      { bookmark: { mode: 'episode', episode: 650 } },
    )

    expect(
      screen.getByRole('heading', { level: 1, name: 'Dressrosa' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Episode 650')).toBeInTheDocument()
    expect(screen.queryByRole('slider')).not.toBeInTheDocument()
  })
})
