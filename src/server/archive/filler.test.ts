import { describe, expect, it } from 'vitest'

import { reveal } from '~/data/reveal'
import { FILLER, LAST_AIRED } from '~/data/series/one-piece/filler'
import type { Bookmark } from '~/lib/progress/episode'
import { ONE_PIECE_BOOKMARK } from '~/lib/progress/series'
import type {
  FillerGroup,
  FillerKind,
  FillerPageView,
  FillerRun,
  FillerSlot,
  SkipRange,
} from '~/lib/view/filler'
import {
  opCountdownOf as countdownOf,
  opFillerAheadOf as fillerAheadOf,
  opFillerPage as fillerPage,
  opPeekFiller as peekFiller,
} from '~/test/archive'

import { chunkBy } from './fillerRows.server'

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

/** A row's kind, open or covered. */
function entryKind(slot: FillerSlot): FillerKind {
  return slot.open ? slot.record.kind : slot.covered.kind
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

/** An episode bookmark. */
function ep(episode: number): Bookmark {
  return { mode: 'episode', episode }
}

/** Every skip range on the page, saga by saga, flattened. */
function rangesOf(bookmark: Bookmark): SkipRange[] {
  return fillerPage(bookmark, 'en').skipGroups.flatMap((group) => group.ranges)
}

/** The handle of the first row of a page with no bookmark. */
function firstHandle(): string {
  const [first] = slots(fillerPage(null, 'it'))
  return first === undefined || first.open ? '' : first.covered.handle
}

describe('consecutive filler chunks', () => {
  it('returns no chunks for an empty list', () => {
    expect(chunkBy([], (item: string) => item)).toStrictEqual([])
  })

  it('starts a chunk when the first key is undefined', () => {
    expect(chunkBy([undefined], (key) => key)).toStrictEqual([
      { key: undefined, items: [undefined] },
    ])
  })

  it('merges consecutive undefined keys', () => {
    expect(chunkBy([undefined, undefined], (key) => key)).toStrictEqual([
      { key: undefined, items: [undefined, undefined] },
    ])
  })

  it('keeps transitions and nonadjacent repeated keys in input order', () => {
    const keys = [undefined, undefined, 'arc', 'arc', undefined, 'arc']

    expect(chunkBy(keys, (key) => key)).toStrictEqual([
      { key: undefined, items: [undefined, undefined] },
      { key: 'arc', items: ['arc', 'arc'] },
      { key: undefined, items: [undefined] },
      { key: 'arc', items: ['arc'] },
    ])
  })
})

describe('the filler page', () => {
  it('covers every row without a bookmark, and still names every saga', () => {
    const page = fillerPage(null, 'en')
    const runNames = page.groups.flatMap((group) => runNamesOf(group))

    expect(slots(page)).toHaveLength(FILLER.length)
    expect(slots(page).every((slot) => !slot.open)).toBe(true)
    expect(page.groups.every((group) => group.name !== '')).toBe(true)
    expect(runNames).toContain('G-8')
    expect(runNames).toContain('Uta’s Past')
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

  it('names every filler arc in the page’s locale', () => {
    const runs = fillerPage(null, 'it')
      .groups.flatMap((group) => group.runs)
      .filter((run) => run.name !== undefined)

    expect(runs.map((run) => run.name)).toContain('Navarone')
    expect(runs.map((run) => run.name)).toContain('Passato di Uta')
  })

  it('leaves mixed episodes out of the skip ranges', () => {
    const mixed = FILLER.filter(
      (entry) => 'episode' in entry && entry.kind === 'mixed',
    ).map((entry) => ('episode' in entry ? entry.episode : 0))
    const ranges = rangesOf(null)

    expect(ranges.length).toBeGreaterThan(0)

    for (const episode of mixed) {
      expect(
        ranges.some((range) => range.first <= episode && episode <= range.last),
        String(episode),
      ).toBe(false)
    }
  })

  it('groups the skip ranges by saga, named at every bookmark', () => {
    const none = fillerPage(null, 'it').skipGroups

    expect(none[0]?.name).toBe('Loguetown')
    expect(none.at(-1)?.name).toBe('Saga del Paese di Wano')
    expect(fillerPage(ep(200), 'it').skipGroups).toStrictEqual(none)
    expect(rangesOf(ep(200))).toStrictEqual(rangesOf(null))
  })

  it('opens the reader’s own saga and no other', () => {
    const at = fillerPage(ep(300), 'en').groups

    expect(at.filter((group) => group.current)).toHaveLength(1)
    expect(at.find((group) => group.current)?.name).toBe('Enies Lobby')
    expect(fillerPage(null, 'en').groups.some((group) => group.current)).toBe(
      false,
    )
  })
})

describe('the countdown', () => {
  it('is there only for an episode or season reader', () => {
    expect(fillerPage(null, 'en').countdown).toBeNull()
    expect(
      fillerPage({ mode: 'chapter', chapter: 400 }, 'en').countdown,
    ).toBeNull()
    expect(
      fillerPage({ mode: 'season', season: 5, episode: 1 }, 'en').countdown
        ?.here,
    ).toBe(131)
  })

  it('counts down to the next run to skip', () => {
    const countdown = fillerPage(ep(52), 'en').countdown

    expect(countdown?.cells.map((cell) => cell.episode)).toStrictEqual([
      52, 53, 54, 55, 56, 57,
    ])
    expect(countdown?.cells.map((cell) => cell.slot !== null)).toStrictEqual([
      false,
      false,
      true,
      true,
      true,
      true,
    ])
    expect(countdown?.inRun).toBeNull()
    expect(countdown?.next).toStrictEqual({ first: 54, last: 60, distance: 2 })
  })

  it('says where the canon picks up inside a run', () => {
    const countdown = fillerPage(ep(135), 'en').countdown

    expect(countdown?.inRun).toStrictEqual({ resume: 144, distance: 9 })
  })

  it('stops at the last aired episode, with nothing ahead', () => {
    const countdown = fillerPage(ep(LAST_AIRED), 'en').countdown

    expect(countdown?.cells.map((cell) => cell.episode)).toStrictEqual([
      LAST_AIRED,
    ])
    expect(countdown?.next).toBeNull()
  })

  it('has no countdown for a bookmark past the last aired episode', () => {
    expect(fillerPage(ep(LAST_AIRED + 1), 'en').countdown).toBeNull()
  })

  it('marks a film between two cells, under fog past the bookmark', () => {
    const countdown = fillerPage(ep(1026), 'en').countdown
    const film = countdown?.marks.find((mark) => mark.after === 1027)
    const payload = JSON.stringify(countdown)

    expect(film?.slot.open).toBe(false)
    expect(payload).not.toContain('Film: Red')
    expect(payload).not.toContain('A Faint Memory')
  })
})

describe('the home page warning', () => {
  it('warns once the next run starts within the row, and not a step before', () => {
    // Episode 93 is mixed, which is not a run to skip.
    expect(fillerAheadOf(ep(92))).toBeNull()

    const ahead = fillerAheadOf(ep(93))

    expect(ahead?.next).toStrictEqual({ first: 98, last: 99, distance: 5 })
    expect(ahead?.cells).toStrictEqual([
      { episode: 93, kind: 'mixed' },
      { episode: 94, kind: null },
      { episode: 95, kind: null },
      { episode: 96, kind: null },
      { episode: 97, kind: null },
      { episode: 98, kind: 'filler' },
    ])
  })

  it('warns inside a run to skip', () => {
    expect(fillerAheadOf(ep(135))?.inRun).toStrictEqual({
      resume: 144,
      distance: 9,
    })
  })

  it('is never there for a chapter reader, or with no bookmark', () => {
    expect(fillerAheadOf(null)).toBeNull()
    expect(fillerAheadOf({ mode: 'chapter', chapter: 50 })).toBeNull()
    expect(fillerAheadOf(ep(LAST_AIRED))).toBeNull()
  })

  it('warns of a run of recaps alone, as the filler page skips it', () => {
    const ahead = fillerAheadOf(ep(452))

    expect(ahead?.next).toStrictEqual({ first: 457, last: 458, distance: 5 })
    expect(ahead?.cells.at(-1)).toStrictEqual({ episode: 457, kind: 'recap' })
  })

  it('agrees with the filler page’s countdown at every aired episode', () => {
    for (let episode = 1; episode <= LAST_AIRED; episode += 1) {
      const bookmark = ep(episode)
      const countdown = countdownOf(bookmark, {
        locale: 'en',
        sees: reveal(bookmark, ONE_PIECE_BOOKMARK).sees,
      })
      const close =
        countdown !== null
        && (countdown.inRun !== null
          || (countdown.next !== null && countdown.next.distance <= 5))

      expect(
        fillerAheadOf(bookmark),
        `episode ${String(episode)}`,
      ).toStrictEqual(
        close ?
          {
            cells: countdown.cells.map((cell) => {
              const kind = cell.slot === null ? null : entryKind(cell.slot)
              return { episode: cell.episode, kind }
            }),
            here: countdown.here,
            inRun: countdown.inRun,
            next: countdown.next,
          }
        : null,
      )
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
