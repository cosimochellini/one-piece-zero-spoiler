import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import type { Locale } from '~/i18n/locales'
import type {
  CoveredRecord,
  SearchableCharacter,
  ShelfView,
} from '~/lib/view/records'
import {
  shelf as aShelf,
  at,
  coveredRecord,
  coveredSlot,
  openSlot,
  peekPending,
  record,
  searchable,
} from '~/test/fixtures'
import { renderWithProviders } from '~/test/providers'

import { CharacterGrid } from './CharacterGrid'

const luffy = searchable({
  id: 'monkey-d-luffy',
  name: 'Monkey D. Luffy',
  folded: 'monkey d. luffy',
  aliases: ['monkey d. rufy'],
  ...at(1),
})
const nami = searchable({
  id: 'nami',
  name: 'Nami',
  folded: 'nami',
  aliases: [],
  ...at(5),
})
const robinCovered = coveredRecord({ ...at(130) })

const eastBlueArc = record({
  id: 'east-blue',
  kind: 'arc',
  name: 'East Blue Saga',
  ...at(1),
})

const eastBlue: ShelfView = aShelf({
  arc: openSlot(eastBlueArc),
  total: 2,
  open: [luffy, nami],
  covered: [],
})
const alabasta: ShelfView = aShelf({
  arc: coveredSlot({ kind: 'arc', ...at(92) }),
  total: 1,
  open: [],
  covered: [robinCovered],
})

/** The signal book, with the shelves already here rather than streaming. */
function book({
  featuredCovered = [robinCovered],
  featuredOpen = [luffy, nami],
  locale = 'en',
  shelves = [eastBlue, alabasta],
}: {
  readonly featuredCovered?: readonly CoveredRecord[]
  readonly featuredOpen?: readonly SearchableCharacter[]
  readonly locale?: Locale
  readonly shelves?: readonly ShelfView[]
} = {}): void {
  renderWithProviders(
    <CharacterGrid
      featuredCovered={featuredCovered}
      featuredOpen={featuredOpen}
      peek={peekPending()}
      shelfCount={shelves.length}
      shelves={shelves}
    />,
    { locale },
  )
}

/**
 * Shelves that never arrive, so the pending state is the one under test. The
 * settled case passes the array instead: `use()` does not resume under jsdom
 * inside an `act` scope.
 */
async function onTheirWay(): Promise<readonly ShelfView[]> {
  return new Promise(() => {
    // Never settles.
  })
}

function fogBand(): HTMLElement {
  return screen.getByRole('region', { name: /^\d+ under fog$/u })
}

function shelf(name: RegExp): HTMLElement {
  return screen.getByRole('region', { name })
}

describe('CharacterGrid', () => {
  it('lists the open characters as links to their pages and fogs the rest', () => {
    book()

    // Once as a crest and once as a tile on the East Blue shelf.
    const links = screen.getAllByRole('link', { name: /Monkey D\. Luffy/u })

    for (const link of links) {
      expect(link).toHaveAttribute('href', '/en/characters/monkey-d-luffy')
    }

    expect(screen.getAllByRole('link', { name: /Nami/u })).toHaveLength(2)
    // Robin is under fog: no link a keyboard can reach, one card in the band.
    expect(
      screen.queryByRole('link', { name: /Nico Robin/u }),
    ).not.toBeInTheDocument()
    expect(fogBand()).toHaveTextContent('1 under fog')
    // The covered name never reached the browser, so there is nothing to hide.
    expect(within(fogBand()).getByText('Spoiler')).toBeInTheDocument()
    expect(fogBand().querySelectorAll(':scope svg svg')).toHaveLength(0)
    expect(within(fogBand()).getByText('Episode 130')).toBeVisible()
  })

  it('shelves the tiles by arc and veils the heading of a covered shelf', () => {
    book()

    const open = shelf(/East Blue Saga/u)

    expect(within(open).getByText('From episode 1')).toBeVisible()
    expect(within(open).getByText('2 characters')).toBeVisible()
    expect(within(open).getAllByRole('link')).toHaveLength(2)

    // The Alabasta shelf is covered with everyone on it: no arc name, no
    // link, no drawing, and its one tile says only the episode.
    const covered = shelf(/An arc under fog/u)

    expect(screen.queryByText('Alabasta Saga')).not.toBeInTheDocument()
    expect(within(covered).queryByRole('link')).not.toBeInTheDocument()
    expect(covered.querySelectorAll('path')).toHaveLength(0)
    expect(within(covered).getByText('Episode 130')).toBeVisible()
  })

  it('keeps the covered arc’s slug out of the shelf’s own id', () => {
    book()

    // The heading id used to be built from the arc's id, so a covered shelf
    // carried the covered arc's slug in the markup.
    const covered = shelf(/An arc under fog/u)

    expect(covered.getAttribute('aria-labelledby')).not.toContain('alabasta')
  })

  it('filters the open characters as the reader types, and marks the match', async () => {
    const user = userEvent.setup()
    book()

    await user.type(screen.getByRole('searchbox'), 'nam')

    expect(screen.getAllByRole('link', { name: /Nami/u })).toHaveLength(2)
    expect(
      screen.queryByRole('link', { name: /Luffy/u }),
    ).not.toBeInTheDocument()

    for (const mark of screen.getAllByText('Nam')) {
      expect(mark.tagName).toBe('MARK')
    }
  })

  it('matches the other locale’s name without marking it', async () => {
    const user = userEvent.setup()
    book()

    await user.type(screen.getByRole('searchbox'), 'rufy')

    // An Italian reader who knows him as Rufy finds Luffy; the mark would
    // have to point at letters that are not on the card, so there is none.
    expect(
      screen.getAllByRole('link', { name: /Luffy/u }).length,
    ).toBeGreaterThan(0)
    expect(screen.queryByText('Ruf')).not.toBeInTheDocument()
  })

  it('never lets the fog answer a search', async () => {
    const user = userEvent.setup()
    book()

    await user.type(screen.getByRole('searchbox'), 'robin')

    // The covered card and the covered shelf are still there and unchanged;
    // the open results are empty, and the page says so in the reader's words.
    expect(fogBand()).toHaveTextContent('1 under fog')
    expect(shelf(/An arc under fog/u)).toBeInTheDocument()
    // The East Blue shelf has nothing open that matches and nothing covered,
    // so during a search it is left out rather than shown empty.
    expect(
      screen.queryByRole('region', { name: /East Blue Saga/u }),
    ).not.toBeInTheDocument()

    const none = await screen.findByText('No open character is called “robin”.')

    expect(none).toBeInTheDocument()
  })

  it('announces the count once the typing has settled', async () => {
    const user = userEvent.setup()
    book()

    await user.type(screen.getByRole('searchbox'), 'na')

    // Not yet: the announcement waits 250ms after the last keystroke, so a
    // screen reader hears one count and not one per letter.
    expect(screen.getByText('2 of 2 open characters shown')).toBeVisible()

    const announced = await screen.findByText('1 of 2 open characters shown')

    expect(announced).toBeVisible()
  })

  it('clears the search from the button beside the field', async () => {
    const user = userEvent.setup()
    book()

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

  it('reserves the shelves’ height, and stays usable, while they are on their way', () => {
    renderWithProviders(
      <CharacterGrid
        featuredCovered={[robinCovered]}
        featuredOpen={[luffy, nami]}
        peek={peekPending()}
        shelfCount={2}
        shelves={onTheirWay()}
      />,
    )

    // The search field and the crests are up before the shelves arrive.
    expect(screen.getByRole('searchbox')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /Nami/u })).toHaveLength(1)
    expect(
      screen.queryByRole('region', { name: /East Blue/u }),
    ).not.toBeInTheDocument()
  })

  it('says so when nothing is under fog', () => {
    book({ featuredCovered: [], shelves: [eastBlue] })

    expect(
      screen.getByText('Nothing is under fog. Every character is open to you.'),
    ).toBeInTheDocument()
  })

  it('speaks the active locale', () => {
    book({
      featuredOpen: [],
      featuredCovered: [robinCovered, coveredRecord(), coveredRecord()],
      locale: 'it',
    })

    expect(screen.getByLabelText('Trova un personaggio')).toBeInTheDocument()
    expect(screen.getByText('3 nella nebbia')).toBeInTheDocument()
  })
})
