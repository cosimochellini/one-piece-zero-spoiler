import { describe, expect, it } from 'vitest'

import type { Bookmark, BookmarkMode } from '~/lib/progress/episode'
import type { Gated } from '~/lib/progress/spoiler'

import { reveal } from './reveal'

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

/**
 * One bookmark of each kind, and what it should make of the data: whether
 * it sees the two records, and the unit it counts in. Dated facts are read
 * through `~/data/dated`, whose own test holds them to the same gates.
 */
const KINDS: {
  bookmark: Bookmark
  mode: BookmarkMode
  name: string
  seesRobin: boolean
  seesShanks: boolean
}[] = [
  // The single most important row in the project: a reader who has not said
  // where they are must be shown nothing, including episode 1.
  {
    name: 'no bookmark',
    bookmark: null,
    mode: 'episode',
    seesRobin: false,
    seesShanks: false,
  },
  {
    name: 'an episode',
    bookmark: ep(130),
    mode: 'episode',
    seesRobin: true,
    seesShanks: true,
  },
  {
    name: 'an episode before both',
    bookmark: ep(1),
    mode: 'episode',
    seesRobin: false,
    seesShanks: false,
  },
  {
    name: 'a season code (S04E38 is episode 130)',
    bookmark: se(4, 38),
    mode: 'season',
    seesRobin: true,
    seesShanks: true,
  },
  {
    name: 'a season code the table cannot resolve',
    bookmark: se(99, 1),
    mode: 'season',
    seesRobin: false,
    seesShanks: false,
  },
  {
    name: 'a chapter',
    bookmark: ch(218),
    mode: 'chapter',
    seesRobin: true,
    seesShanks: true,
  },
  // Chapter 155 is past Robin's episode, 130, as a raw number; read against
  // her chapter, 218, it must not reach her.
  {
    name: 'a chapter whose number is past the episode it reaches',
    bookmark: ch(155),
    mode: 'chapter',
    seesRobin: false,
    seesShanks: true,
  },
  {
    name: 'the first chapter',
    bookmark: ch(1),
    mode: 'chapter',
    seesRobin: false,
    seesShanks: true,
  },
]

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
})
