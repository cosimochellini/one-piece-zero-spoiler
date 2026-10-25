import { byNumber } from 'sort-es'
import { describe, expect, it } from 'vitest'

import { vouches } from '~/data/chapterTable'
import { CHAPTER_CEILING } from '~/lib/progress/episode'

import { chapterAtEpisode, episodeAtChapter, gateOf } from './chapter-table'
import { DATED } from './chapters'
import { entities } from './entities'

const CHAPTERS = Array.from(
  { length: CHAPTER_CEILING },
  (_, index) => index + 1,
)

/**
 * The declared entries the table is built on: not one of a single source,
 * nor of a record of one (`vouches`).
 */
const ANCHORED = DATED.flatMap(({ entry, label, owner }) => {
  return entry.chapter === undefined || !vouches(entry) || !vouches(owner) ?
      []
    : { chapter: entry.chapter, episode: entry.episode, label }
})

/** The records a chapter's episode reaches that the chapter itself does not. */
function openedEarly(chapter: number): string[] {
  const episode = episodeAtChapter(chapter)

  return entities
    .filter((entity) => vouches(entity))
    .filter((entity) => entity.revealedAtEpisode <= episode)
    .filter((entity) => entity.revealedAtChapter > chapter)
    .map((entity) => `${entity.id} @ c${String(chapter)}`)
}

describe('episodeAtChapter', () => {
  it('never reaches an episode that files a record the chapter has not', () => {
    // The whole promise: a timeline entry at or below the episode may name
    // any record filed by then, so every one of them must be open by chapter.
    const early = CHAPTERS.flatMap((chapter) => openedEarly(chapter))

    expect(early).toStrictEqual([])
  })

  it('never reaches an entry’s episode before the chapter it declares', () => {
    // Which is what lets the entries beside it at that episode, which say no
    // chapter, wait for it too.
    for (const { chapter, episode, label } of ANCHORED) {
      expect(episodeAtChapter(chapter - 1), label).toBeLessThan(episode)
    }
  })

  it('never goes backwards as the reader reads on', () => {
    const episodes = CHAPTERS.map((chapter) => episodeAtChapter(chapter))

    expect(episodes).toStrictEqual(episodes.toSorted(byNumber()))
  })

  it('reads chapter 2 as episode 1, not the episode the anime moved it to', () => {
    // Shanks is chapter 1 but episode 4; Koby and Alvida, chapter 2, are
    // episode 1; Zoro, chapter 3, is episode 2. So chapter 1 has not finished
    // episode 1, and chapter 2 has.
    expect(episodeAtChapter(1)).toBe(0)
    expect(episodeAtChapter(2)).toBe(1)
  })

  it('keeps chapter 4 below episode 3, which shows Zoro’s three swords', () => {
    // The manga counts them on the last page of chapter 5; episode 3 opens
    // with them, and its other facts are chapters 5 to 7.
    expect(episodeAtChapter(4)).toBeLessThan(3)
  })

  it('keeps chapters 5 and 6 below episode 3, which ends in chapter 7', () => {
    // Koby joins the Marines, Morgan's men take over the base and Luffy and
    // Zoro leave Shells Town in chapter 7; episode 3 tells all of it.
    expect(episodeAtChapter(6)).toBeLessThan(3)
    expect(chapterAtEpisode(3)).toBeGreaterThanOrEqual(7)
  })

  it('keeps chapter 26 below episode 11, which shows Usopp’s slingshot', () => {
    // The manga first shows it in chapter 27, when he knocks out the
    // mansion's guards with it; episode 11 adapts that scene.
    expect(episodeAtChapter(26)).toBeLessThan(11)
    expect(chapterAtEpisode(11)).toBe(27)
  })

  it('reads chapters 1094 to 1107 past episode 1127, despite Pomsky', () => {
    // Episode 1128 names him and adapts chapter 1094; the manga names him in
    // chapter 1108. As an anchor he held the chapters between at 1127.
    expect(episodeAtChapter(1094)).toBe(1128)
    expect(episodeAtChapter(1107)).toBe(1141)
  })
})

describe('chapterAtEpisode', () => {
  it('is the first chapter that reaches the episode', () => {
    for (const episode of [1, 45, 130, 400, 650, 1000]) {
      const chapter = chapterAtEpisode(episode)

      expect(
        episodeAtChapter(chapter),
        `ep ${String(episode)}`,
      ).toBeGreaterThanOrEqual(episode)
      expect(
        episodeAtChapter(chapter - 1),
        `ep ${String(episode)}`,
      ).toBeLessThan(episode)
    }
  })

  it('is past the ceiling for an episode no chapter reaches', () => {
    expect(chapterAtEpisode(episodeAtChapter(CHAPTER_CEILING) + 1)).toBe(
      CHAPTER_CEILING + 1,
    )
  })
})

describe('a record or an entry of one source only', () => {
  const FILED = { revealedAtEpisode: 1, revealedAtChapter: 1 }

  it('vouches for no pair of the table, as an unanchored record does not', () => {
    expect(vouches({})).toBe(true)
    expect(vouches({ unanchored: true })).toBe(false)
    expect(vouches({ source: 'anime' })).toBe(false)
    expect(vouches({ source: 'manga' })).toBe(false)
  })

  it('gives its gate the source of its record, or else its own', () => {
    const told = { episode: 5, value: null }

    expect(gateOf(told, FILED)).not.toHaveProperty('source')
    expect(gateOf({ ...told, source: 'anime' }, FILED).source).toBe('anime')
    expect(gateOf(told, { ...FILED, source: 'manga' }).source).toBe('manga')
  })
})
