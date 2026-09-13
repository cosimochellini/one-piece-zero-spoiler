import type { Bookmark } from './episode'
import { episodeOf, isRevealed, latestAt } from './spoiler'

const filedAt = (revealedAtEpisode: number, revealedAtChapter: number) => ({
  revealedAtEpisode,
  revealedAtChapter,
})
const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })
const ch = (chapter: number): Bookmark => ({ mode: 'chapter', chapter })
const se = (season: number, episode: number): Bookmark => ({
  mode: 'season',
  season,
  episode,
})

describe('isRevealed', () => {
  it('hides everything when no bookmark has been set', () => {
    // The single most important assertion in the project: a reader who has not
    // said where they are must be shown nothing, including episode 1.
    expect(isRevealed(filedAt(1, 1), null)).toBe(false)
    expect(isRevealed(filedAt(1089, 1061), null)).toBe(false)
  })

  it('treats the episode threshold as inclusive', () => {
    expect(isRevealed(filedAt(92, 155), ep(92))).toBe(true)
    expect(isRevealed(filedAt(92, 155), ep(91))).toBe(false)
  })

  it('hides a record filed after the bookmark and shows one filed before', () => {
    expect(isRevealed(filedAt(1089, 1061), ep(1088))).toBe(false)
    expect(isRevealed(filedAt(1, 1), ep(1088))).toBe(true)
  })

  it('reads a chapter bookmark against the chapter threshold only', () => {
    // Shanks: fourth episode of the anime, first chapter of the manga.
    const shanks = filedAt(4, 1)
    expect(isRevealed(shanks, ch(1))).toBe(true)
    expect(isRevealed(shanks, ep(1))).toBe(false)
    // Robin: episode 130, chapter 218.
    expect(isRevealed(filedAt(130, 218), ch(217))).toBe(false)
    expect(isRevealed(filedAt(130, 218), ch(218))).toBe(true)
  })

  it('resolves a season bookmark to an absolute episode', () => {
    // S04E38 is episode 130.
    expect(isRevealed(filedAt(130, 218), se(4, 38))).toBe(true)
    expect(isRevealed(filedAt(130, 218), se(4, 37))).toBe(false)
    expect(isRevealed(filedAt(130, 218), se(5, 1))).toBe(true)
  })

  it('fails closed on a season bookmark the table cannot resolve', () => {
    expect(isRevealed(filedAt(1, 1), se(99, 1))).toBe(false)
  })
})

describe('episodeOf', () => {
  it('reads an episode bookmark and resolves a season one', () => {
    expect(episodeOf(ep(130))).toBe(130)
    expect(episodeOf(se(4, 38))).toBe(130)
  })

  it('knows no episode for a chapter bookmark or none at all', () => {
    expect(episodeOf(ch(218))).toBeNull()
    expect(episodeOf(null)).toBeNull()
  })
})

describe('latestAt', () => {
  const bounty = [
    { episode: 45, value: 30_000_000 },
    { episode: 130, value: 100_000_000 },
    { episode: 320, value: 300_000_000 },
  ]

  it('knows nothing when no bookmark has been set', () => {
    expect(latestAt(bounty, null)).toBeUndefined()
  })

  it('knows nothing for a chapter bookmark, because timelines count in episodes', () => {
    expect(latestAt(bounty, ch(1000))).toBeUndefined()
  })

  it('knows nothing before the first entry', () => {
    expect(latestAt(bounty, ep(44))).toBeUndefined()
  })

  it('treats an entry as reached on its own episode', () => {
    expect(latestAt(bounty, ep(45))).toBe(30_000_000)
    expect(latestAt(bounty, ep(130))).toBe(100_000_000)
  })

  it('holds the last entry reached between two entries', () => {
    expect(latestAt(bounty, ep(200))).toBe(100_000_000)
  })

  it('keeps the last entry past the end of the timeline', () => {
    expect(latestAt(bounty, ep(1200))).toBe(300_000_000)
  })

  it('resolves a season bookmark before reading the timeline', () => {
    // S04E38 is episode 130.
    expect(latestAt(bounty, se(4, 38))).toBe(100_000_000)
  })

  it('is empty for an empty timeline', () => {
    expect(latestAt([], ep(500))).toBeUndefined()
  })
})
