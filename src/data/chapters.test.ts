import { byNumber } from 'sort-es'
import { describe, expect, it } from 'vitest'

import { LOCALES } from '~/i18n/locales'
import { CHAPTER_CEILING, EPISODE_CEILING } from '~/lib/progress/episode'

import {
  chapterAtEpisode,
  DATED,
  episodeAtChapter,
  TIMELINES,
} from './chapters'
import { entities } from './entities'
import { gateOf } from './reveal'
import type { Dated, Entity } from './types'

const CHAPTERS = Array.from(
  { length: CHAPTER_CEILING },
  (_, index) => index + 1,
)

/** The entries that say which chapter tells them. */
const DECLARED = DATED.flatMap(({ entry, label, owner }) => {
  return entry.chapter === undefined ?
      []
    : { chapter: entry.chapter, episode: entry.episode, label, owner }
})

const UNANCHORED = entities.filter((entity) => entity.unanchored === true)

/** Whether an entry names a record, by a marker or in any locale. */
function names(entry: Dated<unknown>, record: Entity): boolean {
  const text = JSON.stringify(entry.value)

  return [
    `[[${record.id}`,
    ...LOCALES.map((locale) => record.name[locale]),
  ].some((name) => text.includes(name))
}

/** The records a chapter's episode reaches that the chapter itself does not. */
function openedEarly(chapter: number): string[] {
  const episode = episodeAtChapter(chapter)

  return entities
    .filter((entity) => entity.unanchored !== true)
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
    for (const { chapter, episode, label } of DECLARED) {
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

describe('the timelines', () => {
  it('are filed in order, from the threshold on, within the dial', () => {
    // What every timeline obeys, a character's, a ship's or a drawing's: at
    // least one entry, in strictly ascending episodes, none before the
    // record's own threshold and none past the dial.
    expect(TIMELINES.length).toBeGreaterThan(0)

    for (const { label, owner, timeline } of TIMELINES) {
      const episodes = timeline.map((entry) => entry.episode)
      const distinct = new Set(episodes)

      expect(episodes.length, label).toBeGreaterThan(0)
      // Sorted and all distinct is the same statement as strictly ascending,
      // without a look back at the previous entry inside the loop.
      expect(episodes, label).toStrictEqual(episodes.toSorted(byNumber()))
      expect(distinct.size, label).toBe(episodes.length)

      for (const episode of episodes) {
        expect(Number.isSafeInteger(episode), label).toBe(true)
        expect(episode, label).toBeGreaterThanOrEqual(owner.revealedAtEpisode)
        expect(episode, label).toBeLessThanOrEqual(EPISODE_CEILING)
      }
    }
  })
})

describe('the dated entries against the table', () => {
  it('opens every entry at some chapter a reader can reach', () => {
    // A record added or moved shifts the table; an entry it pushes past the
    // last chapter would be hidden from every manga reader for good, and
    // needs a chapter of its own.
    const lost = DATED.filter(
      ({ entry, owner }) =>
        gateOf(entry, owner).revealedAtChapter > CHAPTER_CEILING,
    ).map(({ label }) => label)

    expect(lost).toStrictEqual([])
  })

  it('opens no entry before its own record, unless the record is unanchored', () => {
    // The table makes this hold for every record it is built from. An
    // unanchored record's entries are held by their owner instead: the home
    // page shows a story only once `at.sees` its subject, and a record's own
    // pages pass the record to `reached` and `latest`.
    const early = DATED.filter(({ entry, owner }) => {
      return (
        owner.unanchored !== true
        && gateOf(entry).revealedAtChapter < owner.revealedAtChapter
      )
    }).map(({ label }) => label)

    expect(early).toStrictEqual([])
  })

  it('declares a chapter no earlier than its record and within the dial', () => {
    for (const { chapter, label, owner } of DECLARED) {
      expect(Number.isSafeInteger(chapter), label).toBe(true)
      expect(chapter, label).toBeGreaterThanOrEqual(owner.revealedAtChapter)
      expect(chapter, label).toBeLessThanOrEqual(CHAPTER_CEILING)
    }
  })

  it('names an unanchored record nowhere a reader meets before its chapter', () => {
    // The table no longer waits for such a record, so nothing dated may name
    // it, linked or not, below its own chapter. Its own dossier is behind
    // its threshold already.
    const leaks: string[] = []
    for (const record of UNANCHORED) {
      for (const { entry, label, owner } of DATED) {
        const early =
          gateOf(entry, owner).revealedAtChapter < record.revealedAtChapter

        if (early && owner.id !== record.id && names(entry, record)) {
          leaks.push(`${label} names ${record.id}`)
        }
      }
    }

    expect(leaks).toStrictEqual([])
  })
})
