import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import type { BookSection } from '~/data/characters'
import type { Entity } from '~/data/types'
import { ep, renderWithProviders } from '~/test/providers'

import { CharacterGrid } from './CharacterGrid'

const entries: readonly Entity[] = [
  {
    id: 'monkey-d-luffy',
    kind: 'character',
    revealedAtEpisode: 1,
    revealedAtChapter: 1,
    name: { it: 'Monkey D. Rufy', en: 'Monkey D. Luffy' },
    summary: { it: 'x', en: 'x' },
    visual: { art: 'monkey-d-luffy', tint: 'red' },
  },
  {
    id: 'nami',
    kind: 'character',
    revealedAtEpisode: 5,
    revealedAtChapter: 5,
    name: { it: 'Nami', en: 'Nami' },
    summary: { it: 'x', en: 'x' },
    visual: { art: 'nami', tint: 'orange' },
  },
  {
    id: 'nico-robin',
    kind: 'character',
    revealedAtEpisode: 130,
    revealedAtChapter: 130,
    name: { it: 'Nico Robin', en: 'Nico Robin' },
    summary: { it: 'x', en: 'x' },
    visual: { art: 'nico-robin', tint: 'violet' },
  },
]

const arc: Entity = {
  id: 'east-blue',
  kind: 'arc',
  revealedAtEpisode: 1,
  revealedAtChapter: 1,
  name: { it: 'Saga del East Blue', en: 'East Blue Saga' },
  summary: { it: 'x', en: 'x' },
  visual: { art: 'east-blue', tint: 'ivory' },
}

const lateArc: Entity = {
  id: 'alabasta',
  kind: 'arc',
  revealedAtEpisode: 92,
  revealedAtChapter: 92,
  name: { it: 'Saga di Alabasta', en: 'Alabasta Saga' },
  summary: { it: 'x', en: 'x' },
  visual: { art: 'alabasta', tint: 'sand' },
}

// Luffy and Nami on the first shelf, Robin alone on a covered one.
const sections: readonly BookSection[] = [
  { arc, characters: entries.slice(0, 2) },
  { arc: lateArc, characters: entries.slice(2) },
]

function book(episode: number | null, locale: 'en' | 'it' = 'en') {
  const bookmark = episode === null ? null : ep(episode)
  return renderWithProviders(
    <CharacterGrid
      featured={entries}
      sections={sections}
      bookmark={bookmark}
    />,
    { bookmark, locale },
  )
}

function fogBand(): HTMLElement {
  return screen.getByRole('region', { name: /^\d+ under fog$/u })
}

function shelf(name: RegExp): HTMLElement {
  return screen.getByRole('region', { name })
}

describe('CharacterGrid', () => {
  it('lists the open characters as links to their pages and fogs the rest', () => {
    book(10)

    // Once as a crest and once as a tile on the East Blue shelf.
    for (const link of screen.getAllByRole('link', {
      name: /Monkey D\. Luffy/u,
    })) {
      expect(link).toHaveAttribute('href', '/en/characters/monkey-d-luffy')
    }
    expect(screen.getAllByRole('link', { name: /Nami/u })).toHaveLength(2)
    // Robin is under fog: no link a keyboard can reach, one card in the band.
    expect(
      screen.queryByRole('link', { name: /Nico Robin/u }),
    ).not.toBeInTheDocument()
    expect(fogBand()).toHaveTextContent('1 under fog')
    // The covered name is not in the DOM at all, only its episode is.
    expect(within(fogBand()).queryByText('Nico Robin')).not.toBeInTheDocument()
    expect(within(fogBand()).getByText('Spoiler')).toBeInTheDocument()
    expect(fogBand().querySelectorAll('svg svg')).toHaveLength(0)
    expect(within(fogBand()).getByText('Episode 130')).toBeVisible()
  })

  it('orders the shelves by the unit the reader counts in', () => {
    // A chapter bookmark: the East Blue shelf (chapter 1) still comes before
    // the Alabasta one (chapter 92 in this fixture), and both are on the page.
    const chapter = { mode: 'chapter', chapter: 200 } as const
    renderWithProviders(
      <CharacterGrid
        featured={entries}
        sections={sections}
        bookmark={chapter}
      />,
      { bookmark: chapter },
    )

    const headings = screen
      .getAllByRole('heading', { level: 3 })
      .map((heading) => heading.textContent)
    expect(headings.indexOf('East Blue Saga')).toBeLessThan(
      headings.indexOf('Alabasta Saga'),
    )
  })

  it('shelves the tiles by arc and veils the heading of a covered shelf', () => {
    book(10)

    const eastBlue = shelf(/East Blue Saga/u)
    expect(within(eastBlue).getByText('From episode 1')).toBeVisible()
    expect(within(eastBlue).getByText('2 characters')).toBeVisible()
    expect(within(eastBlue).getAllByRole('link')).toHaveLength(2)

    // The Alabasta shelf is covered with everyone on it: no arc name, no
    // link, no drawing, and its one tile says only the episode.
    const covered = shelf(/An arc under fog/u)
    expect(screen.queryByText('Alabasta Saga')).not.toBeInTheDocument()
    expect(within(covered).queryByRole('link')).not.toBeInTheDocument()
    expect(covered.querySelectorAll('path')).toHaveLength(0)
    expect(within(covered).getByText('Episode 130')).toBeVisible()
  })

  it('filters the open characters as the reader types, and marks the match', async () => {
    const user = userEvent.setup()
    book(10)

    await user.type(screen.getByRole('searchbox'), 'nam')

    expect(screen.getAllByRole('link', { name: /Nami/u })).toHaveLength(2)
    expect(
      screen.queryByRole('link', { name: /Luffy/u }),
    ).not.toBeInTheDocument()
    for (const mark of screen.getAllByText('Nam')) {
      expect(mark.tagName).toBe('MARK')
    }
  })

  it('never lets the fog answer a search', async () => {
    const user = userEvent.setup()
    book(10)

    await user.type(screen.getByRole('searchbox'), 'robin')

    // The covered card and the covered shelf are still there and unchanged;
    // the open results are empty, and the page says so in the reader's words.
    expect(within(fogBand()).queryByText('Nico Robin')).not.toBeInTheDocument()
    expect(fogBand()).toHaveTextContent('1 under fog')
    expect(shelf(/An arc under fog/u)).toBeInTheDocument()
    // The East Blue shelf has nothing open that matches and nothing covered,
    // so during a search it is left out rather than shown empty.
    expect(
      screen.queryByRole('region', { name: /East Blue Saga/u }),
    ).not.toBeInTheDocument()
    expect(
      await screen.findByText('No open character is called “robin”.'),
    ).toBeInTheDocument()
  })

  it('announces the count once the typing has settled', async () => {
    const user = userEvent.setup()
    book(10)

    await user.type(screen.getByRole('searchbox'), 'na')
    // Not yet: the announcement waits 250ms after the last keystroke, so a
    // screen reader hears one count and not one per letter.
    expect(screen.getByText('2 of 2 open characters shown')).toBeVisible()

    expect(
      await screen.findByText('1 of 2 open characters shown'),
    ).toBeVisible()
  })

  it('clears the search from the button beside the field', async () => {
    const user = userEvent.setup()
    book(10)

    const field = screen.getByRole('searchbox')
    // Hidden until there is something to clear, but its slot is reserved.
    expect(
      screen.queryByRole('button', { name: 'Clear the search' }),
    ).not.toBeInTheDocument()
    await user.type(field, 'nami')
    await user.click(screen.getByRole('button', { name: 'Clear the search' }))

    expect(field).toHaveValue('')
    expect(screen.getAllByRole('link', { name: /Luffy/u })).toHaveLength(2)
  })

  it('says so when nothing is under fog', () => {
    book(1200)

    expect(
      screen.getByText('Nothing is under fog. Every character is open to you.'),
    ).toBeInTheDocument()
  })

  it('speaks the active locale', () => {
    book(null, 'it')

    expect(screen.getByLabelText('Trova un personaggio')).toBeInTheDocument()
    expect(screen.getByText('3 nella nebbia')).toBeInTheDocument()
  })
})
