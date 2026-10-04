import { byNumber } from 'sort-es'
import { describe, expect, it } from 'vitest'

import { CHAPTER_CEILING } from '~/lib/progress/episode'

import {
  chapterAtEpisode,
  episodeAtChapter,
  timelineBookmark,
} from './chapters'
import { entities } from './entities'

const CHAPTERS = Array.from(
  { length: CHAPTER_CEILING },
  (_, index) => index + 1,
)

/** The records a chapter's episode reaches that the chapter itself does not. */
function openedEarly(chapter: number): readonly string[] {
  const episode = episodeAtChapter(chapter)

  return entities
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

  it('never goes backwards as the reader reads on', () => {
    const episodes = CHAPTERS.map((chapter) => episodeAtChapter(chapter))

    expect(episodes).toStrictEqual(episodes.toSorted(byNumber()))
  })

  it('keeps chapters from reaching the Wano episodes the manga tells later', () => {
    // Measured on PR #131: [episode a chapter used to reach, the episode its
    // entry is dated at, and the chapter the manga tells it in].
    for (const [chapter, entryEpisode, trueChapter] of [
      [946, 953, 952],
      [972, 976, 973],
      [995, 1019, 1004],
      [1006, 1040, 1018],
    ] as const) {
      expect(episodeAtChapter(chapter), `c${String(chapter)}`).toBeLessThan(
        entryEpisode,
      )
      expect(chapterAtEpisode(entryEpisode)).toBeGreaterThanOrEqual(trueChapter)
    }
  })

  it('keeps chapters from reaching Kabuto before the manga draws it', () => {
    // Measured on PR #166: chapter 385 used to reach episode 274, where
    // Usopp is drawn again with the Kabuto the manga shows in chapter 390.
    expect(episodeAtChapter(389)).toBeLessThan(274)
    expect(episodeAtChapter(390)).toBeGreaterThanOrEqual(274)
    expect(chapterAtEpisode(274)).toBe(390)
  })

  it('reads chapter 1 as episode 1, not the episode the anime moved it to', () => {
    // Shanks is chapter 1 but episode 4; Zoro, chapter 3, is episode 2.
    expect(episodeAtChapter(1)).toBe(1)
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

describe('timelineBookmark', () => {
  it('reads a chapter bookmark as the episode its chapter reaches', () => {
    expect(timelineBookmark({ mode: 'chapter', chapter: 500 })).toStrictEqual({
      mode: 'episode',
      episode: episodeAtChapter(500),
    })
  })

  it('leaves every other bookmark as it is', () => {
    for (const bookmark of [
      null,
      { mode: 'episode', episode: 650 },
      { mode: 'season', season: 4, episode: 38 },
    ] as const) {
      expect(timelineBookmark(bookmark)).toBe(bookmark)
    }
  })
})
