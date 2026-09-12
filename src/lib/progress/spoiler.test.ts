import type { Bookmark } from './episode'
import { isRevealed } from './spoiler'

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
