import { describe, expect, it } from 'vitest'

import type { Bookmark, BookmarkMode } from '~/lib/progress/episode'
import { ONE_PIECE_BOOKMARK } from '~/lib/progress/series'
import type { Gated } from '~/lib/progress/spoiler'

import { reveal, sourceOf } from './reveal'

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
  const at = reveal(kind.bookmark, ONE_PIECE_BOOKMARK)

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
    expect(reveal(ep(92), ONE_PIECE_BOOKMARK).sees(filedAt(92, 155))).toBe(true)
    expect(reveal(ep(91), ONE_PIECE_BOOKMARK).sees(filedAt(92, 155))).toBe(
      false,
    )
    expect(reveal(ch(217), ONE_PIECE_BOOKMARK).sees(ROBIN)).toBe(false)
    expect(reveal(ch(218), ONE_PIECE_BOOKMARK).sees(ROBIN)).toBe(true)
  })

  it('reads a chapter against the chapter threshold only', () => {
    // Shanks is chapter 1 but episode 4, so the two units disagree.
    expect(reveal(ch(1), ONE_PIECE_BOOKMARK).sees(SHANKS)).toBe(true)
    expect(reveal(ep(1), ONE_PIECE_BOOKMARK).sees(SHANKS)).toBe(false)
  })
})

describe('reveal, for a record of one source only', () => {
  const EPISODE_ONLY: Gated = { ...ROBIN, source: 'episode' }
  const CHAPTER_ONLY: Gated = { ...ROBIN, source: 'chapter' }

  it('counts an episode and a season in episodes, a chapter in chapters', () => {
    expect(sourceOf(ep(130))).toBe('episode')
    expect(sourceOf(se(4, 38))).toBe('episode')
    expect(sourceOf(ch(218))).toBe('chapter')
    expect(sourceOf(null)).toBeNull()
  })

  it('has it, and opens it at its threshold, only for a reader of that source', () => {
    expect(reveal(ep(130), ONE_PIECE_BOOKMARK).sees(EPISODE_ONLY)).toBe(true)
    expect(reveal(se(4, 38), ONE_PIECE_BOOKMARK).sees(EPISODE_ONLY)).toBe(true)
    expect(reveal(ep(129), ONE_PIECE_BOOKMARK).has(EPISODE_ONLY)).toBe(true)
    expect(reveal(ch(218), ONE_PIECE_BOOKMARK).sees(CHAPTER_ONLY)).toBe(true)
    expect(reveal(ch(1200), ONE_PIECE_BOOKMARK).has(EPISODE_ONLY)).toBe(false)
    expect(reveal(ch(1200), ONE_PIECE_BOOKMARK).sees(EPISODE_ONLY)).toBe(false)
    expect(reveal(ep(1200), ONE_PIECE_BOOKMARK).has(CHAPTER_ONLY)).toBe(false)
    expect(reveal(se(4, 38), ONE_PIECE_BOOKMARK).has(CHAPTER_ONLY)).toBe(false)
  })

  it('has neither for a reader with no bookmark, and both sources for a record of both', () => {
    expect(reveal(null, ONE_PIECE_BOOKMARK).has(EPISODE_ONLY)).toBe(false)
    expect(reveal(null, ONE_PIECE_BOOKMARK).has(CHAPTER_ONLY)).toBe(false)
    expect(reveal(null, ONE_PIECE_BOOKMARK).has(ROBIN)).toBe(true)
    expect(reveal(ch(1), ONE_PIECE_BOOKMARK).has(ROBIN)).toBe(true)
  })
})
