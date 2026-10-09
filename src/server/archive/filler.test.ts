import { describe, expect, it } from 'vitest'

import { FILLER } from '~/data/filler'
import type {
  FillerGroup,
  FillerPageView,
  FillerRun,
  FillerSlot,
} from '~/lib/view/filler'

import { fillerPage, peekFiller } from './filler.server'

/** Every row of the page, in order. */
function slots(page: FillerPageView): FillerSlot[] {
  return page.groups.flatMap((group) => group.runs.flatMap((run) => run.rows))
}

/** What a row says about itself, open or covered. */
function entryOf(slot: FillerSlot): {
  after?: number
  episode?: number
  revealedAtChapter: number
} {
  return slot.open ? slot.record : slot.covered
}

/** The episode a row sits at. */
function placeOf(slot: FillerSlot): number {
  const entry = entryOf(slot)
  return entry.episode ?? entry.after ?? 0
}

/** The names of a group's runs. */
function runNamesOf(group: FillerGroup): FillerRun['name'][] {
  return group.runs.map((run) => run.name)
}

/** The handle of the first row of a page with no bookmark. */
function firstHandle(): string {
  const [first] = slots(fillerPage(null, 'it'))
  return first !== undefined && !first.open ? first.covered.handle : ''
}

describe('the filler page', () => {
  it('covers every row and every name without a bookmark', () => {
    const page = fillerPage(null, 'en')
    const runNames = page.groups.flatMap((group) => runNamesOf(group))

    expect(slots(page)).toHaveLength(FILLER.length)
    expect(slots(page).every((slot) => !slot.open)).toBe(true)
    expect(page.groups.every((group) => group.name === null)).toBe(true)
    expect(runNames.filter((name) => typeof name === 'string')).toStrictEqual(
      [],
    )
  })

  it('sends no title or line the reader has not reached', () => {
    const payload = JSON.stringify(
      fillerPage({ mode: 'episode', episode: 100 }, 'en'),
    )
    const later = FILLER.filter(
      (entry) => ('episode' in entry ? entry.episode : entry.after) > 100,
    )

    expect(later.length).toBeGreaterThan(0)

    for (const entry of later) {
      expect(payload).not.toContain(entry.title.en)
      expect(payload).not.toContain(entry.summary.en)
    }
  })

  it('opens the rows up to an episode bookmark and no further', () => {
    const rows = slots(fillerPage({ mode: 'episode', episode: 300 }, 'it'))

    for (const slot of rows) {
      expect(slot.open, String(placeOf(slot))).toBe(placeOf(slot) <= 300)
    }
  })

  it('reads a season bookmark as the episode it stands for', () => {
    // S05E01 is episode 131.
    const season = fillerPage({ mode: 'season', season: 5, episode: 1 }, 'en')
    const episode = fillerPage({ mode: 'episode', episode: 131 }, 'en')

    expect(season.groups).toStrictEqual(episode.groups)
  })

  it('opens a row for a chapter reader at its own chapter', () => {
    const rows = slots(fillerPage({ mode: 'chapter', chapter: 500 }, 'en'))

    for (const slot of rows) {
      expect(slot.open, String(placeOf(slot))).toBe(
        entryOf(slot).revealedAtChapter <= 500,
      )
    }
  })

  it('names a filler arc once its first episode is open', () => {
    const runs = fillerPage({ mode: 'episode', episode: 200 }, 'it')
      .groups.flatMap((group) => group.runs)
      .filter((run) => run.name !== undefined)

    expect(runs.map((run) => run.name)).toContain('Navarone')
    expect(runs.map((run) => run.name)).toContain(null)
  })

  it('leaves mixed episodes out of the skip ranges', () => {
    const mixed = FILLER.filter(
      (entry) => 'episode' in entry && entry.kind === 'mixed',
    ).map((entry) => ('episode' in entry ? entry.episode : 0))
    const { ranges } = fillerPage(null, 'en')

    expect(ranges.length).toBeGreaterThan(0)

    for (const episode of mixed) {
      expect(
        ranges.some((range) => range.first <= episode && episode <= range.last),
        String(episode),
      ).toBe(false)
    }
  })
})

describe('lifting a row', () => {
  it('returns the row a handle stands for', () => {
    expect(firstHandle()).not.toBe('')
    expect(peekFiller(firstHandle(), 'it')?.title).toBe(FILLER[0]?.title.it)
  })

  it('refuses anything that is not a handle', () => {
    expect(peekFiller('zzzz', 'en')).toBeUndefined()
    expect(peekFiller('../1', 'en')).toBeUndefined()
    expect(peekFiller('zz', 'en')).toBeUndefined()
  })
})
