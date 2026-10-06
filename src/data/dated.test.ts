import { describe, expect, it } from 'vitest'

import { type Bookmark, CHAPTER_CEILING } from '~/lib/progress/episode'

import { episodeAtChapter, TIMELINES } from './chapters'
import { datedOf, eatersOf, latestOf, reachedOf } from './dated'
import { fruits } from './fruits'
import { reveal } from './reveal'

const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })
const ch = (chapter: number): Bookmark => ({ mode: 'chapter', chapter })

/**
 * The first chapter that reaches an episode, worked out the long way rather
 * than through the table's own inverse, or one past the ceiling for none.
 */
function firstChapterAt(episode: number): number {
  for (let chapter = 1; chapter <= CHAPTER_CEILING; chapter += 1) {
    if (episodeAtChapter(chapter) >= episode) {
      return chapter
    }
  }

  return CHAPTER_CEILING + 1
}

/**
 * Every dated entry in the archive, with the episode and the chapter it
 * should open at: the later of its own and its record's, in each unit. Its
 * own chapter is the one it declares or the first that reaches its episode.
 */
const ENTRIES = TIMELINES.flatMap(({ field, label, owner }) => {
  return datedOf(owner, field).map((entry) => {
    const episode = Math.max(owner.revealedAtEpisode, entry.episode)
    const chapter = Math.max(
      owner.revealedAtChapter,
      entry.chapter ?? firstChapterAt(episode),
    )

    return {
      chapter,
      entry,
      episode,
      field,
      label: `${label} @${String(entry.episode)}`,
      owner,
    }
  })
})

type Row = (typeof ENTRIES)[number]

/** Whether a reader at this bookmark reaches the row's entry. */
function reaches(bookmark: Bookmark, { entry, field, owner }: Row): boolean {
  return reachedOf(reveal(bookmark), owner, field).some(
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
      const { chapter, entry, episode, label } = row

      expect(entry.gate, label).toStrictEqual({
        revealedAtEpisode: episode,
        revealedAtChapter: chapter,
      })
      expect(reaches(ch(chapter - 1), row), label).toBe(false)
      expect(reaches(ch(chapter), row), label).toBe(true)
      expect(reaches(ep(episode - 1), row), label).toBe(false)
      expect(reaches(ep(episode), row), label).toBe(true)
      expect(reaches(null, row), label).toBe(false)
    }
  })

  it('is its record’s latest fact from its own episode on', () => {
    for (const { entry, episode, field, label, owner } of ENTRIES) {
      const at = reveal(ep(episode))

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
