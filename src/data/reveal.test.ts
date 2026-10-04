import { describe, expect, it } from 'vitest'

import {
  type Bookmark,
  type BookmarkMode,
  CHAPTER_CEILING,
} from '~/lib/progress/episode'
import type { Gated } from '~/lib/progress/spoiler'

import { chapterAtEpisode, episodeAtChapter } from './chapters'
import { eatersOf, fruits } from './fruits'
import { gateOf, reveal } from './reveal'

const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })
const ch = (chapter: number): Bookmark => ({ mode: 'chapter', chapter })
function se(season: number, episode: number): Bookmark {
  return { mode: 'season', season, episode }
}

function filedAt(revealedAtEpisode: number, revealedAtChapter: number): Gated {
  return { revealedAtEpisode, revealedAtChapter }
}

// Robin: episode 130, chapter 218. Shanks: the fourth episode of the anime,
// the first chapter of the manga.
const ROBIN = filedAt(130, 218)
const SHANKS = filedAt(4, 1)

const BOUNTY = [
  { episode: 45, value: 30_000_000 },
  { episode: 130, value: 100_000_000 },
  { episode: 320, value: 300_000_000 },
]

/**
 * One bookmark of each kind, and what it should make of the data: the
 * episode it reaches on a timeline (`null` for none), whether it sees the two
 * records, and the unit it counts in. A chapter reaches the episode its
 * chapter reaches, which is the whole reason this module exists.
 */
const KINDS: readonly {
  readonly bookmark: Bookmark
  readonly mode: BookmarkMode
  readonly name: string
  readonly progress: null | number
  readonly seesRobin: boolean
  readonly seesShanks: boolean
}[] = [
  // The single most important row in the project: a reader who has not said
  // where they are must be shown nothing, including episode 1.
  {
    name: 'no bookmark',
    bookmark: null,
    mode: 'episode',
    progress: null,
    seesRobin: false,
    seesShanks: false,
  },
  {
    name: 'an episode',
    bookmark: ep(130),
    mode: 'episode',
    progress: 130,
    seesRobin: true,
    seesShanks: true,
  },
  {
    name: 'an episode before both',
    bookmark: ep(1),
    mode: 'episode',
    progress: 1,
    seesRobin: false,
    seesShanks: false,
  },
  {
    name: 'a season code (S04E38 is episode 130)',
    bookmark: se(4, 38),
    mode: 'season',
    progress: 130,
    seesRobin: true,
    seesShanks: true,
  },
  {
    name: 'a season code the table cannot resolve',
    bookmark: se(99, 1),
    mode: 'season',
    progress: null,
    seesRobin: false,
    seesShanks: false,
  },
  {
    name: 'a chapter',
    bookmark: ch(218),
    mode: 'chapter',
    progress: episodeAtChapter(218),
    seesRobin: true,
    seesShanks: true,
  },
  // Chapter 155 reaches only episode 91, so read as a raw number it would
  // reach the bounty dated 130 that it must not.
  {
    name: 'a chapter whose number is past the episode it reaches',
    bookmark: ch(155),
    mode: 'chapter',
    progress: episodeAtChapter(155),
    seesRobin: false,
    seesShanks: true,
  },
  {
    name: 'the first chapter',
    bookmark: ch(1),
    mode: 'chapter',
    progress: episodeAtChapter(1),
    seesRobin: false,
    seesShanks: true,
  },
]

/** The bounty entries at or below an episode, in order. */
function upTo(progress: null | number): typeof BOUNTY {
  return progress === null ?
      []
    : BOUNTY.filter((entry) => entry.episode <= progress)
}

describe.each(KINDS)('reveal, at $name', (kind) => {
  const at = reveal(kind.bookmark)

  it('sees a record by the threshold of its own unit', () => {
    expect(at.sees(ROBIN)).toBe(kind.seesRobin)
    expect(at.sees(SHANKS)).toBe(kind.seesShanks)
  })

  it('counts and prints thresholds in the reader’s unit', () => {
    expect(at.mode).toBe(kind.mode)
    expect(at.threshold(ROBIN)).toBe(kind.mode === 'chapter' ? 218 : 130)
  })

  it('reaches every timeline entry up to its episode and none past it', () => {
    expect(at.reached(BOUNTY)).toStrictEqual(upTo(kind.progress))
  })

  it('knows the latest timeline entry reached', () => {
    expect(at.latest(BOUNTY)).toBe(upTo(kind.progress).at(-1)?.value)
  })

  it('has nothing to say of a timeline that is not there', () => {
    expect(at.latest(undefined)).toBeUndefined()
    expect(at.reached(undefined)).toStrictEqual([])
  })
})

describe('reveal, at the edges', () => {
  it('treats both thresholds as inclusive', () => {
    expect(reveal(ep(92)).sees(filedAt(92, 155))).toBe(true)
    expect(reveal(ep(91)).sees(filedAt(92, 155))).toBe(false)
    expect(reveal(ch(217)).sees(ROBIN)).toBe(false)
    expect(reveal(ch(218)).sees(ROBIN)).toBe(true)
  })

  it('reads a chapter against the chapter threshold only', () => {
    // Shanks is chapter 1 but episode 4, so the two units disagree.
    expect(reveal(ch(1)).sees(SHANKS)).toBe(true)
    expect(reveal(ep(1)).sees(SHANKS)).toBe(false)
  })

  it('holds the last entry reached between two entries and past the end', () => {
    expect(reveal(ep(44)).latest(BOUNTY)).toBeUndefined()
    expect(reveal(ep(45)).latest(BOUNTY)).toBe(30_000_000)
    expect(reveal(ep(200)).latest(BOUNTY)).toBe(100_000_000)
    expect(reveal(ep(1200)).latest(BOUNTY)).toBe(300_000_000)
    expect(reveal(ep(500)).latest([])).toBeUndefined()
  })
})

describe('gateOf', () => {
  it('opens an entry at its episode and the first chapter that reaches it', () => {
    expect(gateOf(130)).toStrictEqual(filedAt(130, chapterAtEpisode(130)))
  })

  it('waits for the later of the entry and its owner', () => {
    const owner = filedAt(300, 900)

    expect(gateOf(130, owner)).toStrictEqual(owner)

    const chapter = Math.max(900, chapterAtEpisode(500))

    expect(gateOf(500, owner)).toStrictEqual(filedAt(500, chapter))
  })

  it('is never open to a chapter for an episode no chapter reaches', () => {
    const beyond = episodeAtChapter(CHAPTER_CEILING) + 1

    const last = reveal(ch(CHAPTER_CEILING))

    expect(last.sees(gateOf(beyond))).toBe(false)
  })

  it('opens an eater to a chapter exactly when the episode it reaches does', () => {
    // The gate's chapter is derived from its episode, so the two must agree
    // at every chapter, the ceiling included: a chapter reader who saw one
    // more eater than the episode would be reading ahead of the dossiers.
    const eaters = fruits.flatMap((fruit) => eatersOf(fruit.id))
    for (const chapter of [100, 400, 700, 1000, CHAPTER_CEILING]) {
      const byChapter = reveal(ch(chapter))
      const byEpisode = reveal(ep(episodeAtChapter(chapter)))
      for (const { entity, namedAtEpisode } of eaters) {
        const gated = gateOf(namedAtEpisode, entity)

        expect(
          byChapter.sees(gated),
          `${entity.id} @ c${String(chapter)}`,
        ).toBe(byEpisode.sees(gated))
      }
    }
  })
})
