import { describe, expect, it } from 'vitest'

import { reveal } from '~/data/reveal'
import type { Bookmark } from '~/lib/progress/episode'
import { ONE_PIECE_BOOKMARK } from '~/lib/progress/series'

import { episodeAtChapter } from './chapter-table'
import { datedOf, eatersOf, latestOf, reachedOf, timelines } from './dated'
import { fruits } from './fruits'

const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })
const ch = (chapter: number): Bookmark => ({ mode: 'chapter', chapter })

/**
 * The first chapter that reaches an episode, worked out the long way rather
 * than through the table's own inverse, or one past the ceiling for none.
 */
function firstChapterAt(episode: number): number {
  for (
    let chapter = 1;
    chapter <= ONE_PIECE_BOOKMARK.chapterCeiling;
    chapter += 1
  ) {
    if (episodeAtChapter(chapter) >= episode) {
      return chapter
    }
  }

  return ONE_PIECE_BOOKMARK.chapterCeiling + 1
}

/**
 * Every dated entry in the archive, with the episode and the chapter it
 * should open at: the later of its own and its record's, in each unit. Its
 * own chapter is the one it declares or the first that reaches its episode.
 */
const ENTRIES = timelines.flatMap(({ field, label, owner }) => {
  return datedOf(owner, field).map((entry) => {
    const episode = Math.max(owner.revealedAtEpisode, entry.episode)
    const chapter = Math.max(
      owner.revealedAtChapter,
      entry.chapter ?? firstChapterAt(episode),
    )

    // The one source that tells it, the record's before the entry's own.
    const source = owner.source ?? entry.source

    return {
      chapter,
      entry,
      episode,
      field,
      source,
      label: `${label} @${String(entry.episode)}`,
      owner,
    }
  })
})

type Row = (typeof ENTRIES)[number]

/** Whether a reader at this bookmark reaches the row's entry. */
function reaches(bookmark: Bookmark, { entry, field, owner }: Row): boolean {
  return reachedOf(reveal(bookmark, ONE_PIECE_BOOKMARK), owner, field).some(
    (found) => found.episode === entry.episode,
  )
}

describe('every dated entry in the archive', () => {
  it('opens at the later of its own gate and its record’s, and not before', () => {
    // The one property every timeline read rests on, held over every record
    // and every field: a fact is reached exactly from its gate, in either
    // unit, and never by a reader who has not said where they are.
    expect(ENTRIES.length).toBeGreaterThan(0)

    for (const row of ENTRIES) {
      const { chapter, entry, episode, label, source } = row

      expect(entry.gate, label).toStrictEqual({
        revealedAtEpisode: episode,
        revealedAtChapter: chapter,
        ...(source !== undefined && { source }),
      })
      expect(reaches(ch(chapter - 1), row), label).toBe(false)
      expect(reaches(ch(chapter), row), label).toBe(source !== 'episode')
      expect(reaches(ep(episode - 1), row), label).toBe(false)
      expect(reaches(ep(episode), row), label).toBe(source !== 'chapter')
      expect(reaches(null, row), label).toBe(false)
    }
  })

  it('is its record’s latest fact from its own episode on', () => {
    for (const { entry, episode, field, label, owner } of ENTRIES) {
      const at = reveal(ep(episode), ONE_PIECE_BOOKMARK)

      expect(latestOf(at, owner, field), label).toBe(entry.value)
    }
  })
})

describe('the eaters of a fruit', () => {
  it('are named at the gate of an entry of their own that names the fruit', () => {
    for (const fruit of fruits) {
      for (const { entity, gate } of eatersOf(fruit.id)) {
        const named = datedOf(entity, 'devilFruit').filter((entry) => {
          const ids: string[] = entry.value

          return ids.includes(fruit.id)
        })

        expect(named.at(0)?.gate, `${entity.id} -> ${fruit.id}`).toStrictEqual(
          gate,
        )
      }
    }
  })
})
