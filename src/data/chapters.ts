import { CHAPTER_CEILING, EPISODE_CEILING } from '~/lib/progress/episode'

import { REDRAWINGS } from './art'
import { CHARACTER_DOSSIERS } from './characters'
import { entities, getEntity } from './entities'
import { SHIP_DOSSIERS } from './places'
import type { Dated, Entity, Timeline } from './types'

/**
 * How far into the anime a manga chapter reaches, as far as the archive can
 * vouch for it.
 *
 * The dossier timelines and the chronicle are dated in anime episodes, and
 * only some entries say which chapter tells them; a reader who counts in
 * chapters reads every other entry at the first chapter that reaches its
 * episode (`gateOf` in `~/data/reveal`). There is no chapter-to-episode
 * table to read that from, so it is derived. A chapter reaches the episode
 * that is below both of:
 *
 * - the latest episode of a record the chapter has reached, because past it
 *   the archive has nothing that says the chapter got that far; and
 * - the episode before the earliest record, or the earliest entry with a
 *   chapter of its own, that the chapter has not reached, because from there
 *   on a timeline entry could name it or be it.
 *
 * The second bound is what keeps an anime that reorders the manga honest:
 * Shanks is in chapter 1 but episode 4, and Zoro in chapter 3 but episode 2,
 * so chapter 1 reaches episode 1 and not 4. Both bounds err towards fog,
 * which is the direction the archive always rounds in.
 *
 * Where the records are sparse a chapter would still reach episodes the
 * manga tells chapters later. The fix is a `chapter` on the entry that was
 * seen too early: it opens the entry at that chapter and, through the second
 * bound, holds every earlier chapter below its episode.
 *
 * Two kinds of record are left out. A fruit, because its chapter is read off
 * this table (`~/data/records/fruits`) and would otherwise bound itself. And
 * a record marked `unanchored`, whose two thresholds are too far apart to
 * say anything about the chapters between them.
 */

/** One timeline of the archive, with the record that owns it and its field. */
export interface OwnedTimeline {
  /** `id.field`, for a failure to name. */
  label: string
  owner: Entity
  timeline: Timeline<unknown>
}

/** One dated entry of the archive, with the record whose timeline holds it. */
export interface DatedEntry {
  entry: Dated<unknown>
  label: string
  owner: Entity
}

/** The arrays among a dossier's fields, which are its timelines, by name. */
function timelinesOf(dossier: object): [string, Timeline<unknown>][] {
  return Object.entries(dossier).filter(
    (field): field is [string, Timeline<unknown>] => Array.isArray(field[1]),
  )
}

/** Every timeline one record owns, labelled for a failure. */
function owned(
  id: string,
  timelines: [string, Timeline<unknown>][],
): OwnedTimeline[] {
  const owner = getEntity(id)
  if (owner === undefined) {
    return []
  }

  return timelines.map(([field, timeline]) => {
    const label = `${id}.${field}`

    return { label, owner, timeline }
  })
}

/**
 * Every timeline in the archive: the character dossiers' fields, the ships'
 * fates and the redrawings. One data test holds them all to the same order.
 */
export const TIMELINES: OwnedTimeline[] = [
  ...Object.entries(CHARACTER_DOSSIERS).flatMap(([id, dossier]) =>
    owned(id, timelinesOf(dossier)),
  ),
  ...Object.entries(SHIP_DOSSIERS).flatMap(([id, dossier]) =>
    owned(id, [['fate', dossier.fate]]),
  ),
  ...Object.entries(REDRAWINGS).flatMap(([id, timeline]) =>
    owned(id, [['redrawing', timeline]]),
  ),
]

/** Every dated entry in the archive, flattened out of `TIMELINES`. */
export const DATED: DatedEntry[] = TIMELINES.flatMap(({ owner, timeline }) => {
  return timeline.map((entry) => {
    const label = `${owner.id} @${String(entry.episode)}`

    return { entry, owner, label }
  })
})

/** The (episode, chapter) pairs the entries vouch for themselves. */
const ANCHORS = DATED.flatMap(({ entry }) =>
  entry.chapter === undefined ? [] : [[entry.episode, entry.chapter] as const],
)

const RECORDS = entities.filter(
  (entity) => entity.kind !== 'fruit' && entity.unanchored !== true,
)

const EPISODE_AT: number[] = Array.from(
  { length: CHAPTER_CEILING + 1 },
  (_, chapter) => {
    let latestReached = 0
    let firstUnreached = Infinity
    for (const [episode, anchored] of ANCHORS) {
      if (anchored > chapter) {
        firstUnreached = Math.min(firstUnreached, episode)
      }
    }
    for (const entity of RECORDS) {
      if (entity.revealedAtChapter <= chapter) {
        latestReached = Math.max(latestReached, entity.revealedAtEpisode)
      } else {
        firstUnreached = Math.min(firstUnreached, entity.revealedAtEpisode)
      }
    }

    return Math.max(0, Math.min(latestReached, firstUnreached - 1))
  },
)

// The inverse, worked out once: every timeline entry a chapter reader is
// shown is looked up here.
const CHAPTER_AT: number[] = Array.from(
  { length: EPISODE_CEILING + 1 },
  (_, episode) => {
    const chapter = EPISODE_AT.findIndex(
      (reached, at) => at >= 1 && reached >= episode,
    )

    return chapter === -1 ? CHAPTER_CEILING + 1 : chapter
  },
)

/** The episode a reader at this chapter has reached; 0 for none. */
export function episodeAtChapter(chapter: number): number {
  return EPISODE_AT[Math.min(Math.max(chapter, 0), CHAPTER_CEILING)] ?? 0
}

/**
 * The first chapter that reaches this episode, or one past the ceiling when
 * none does — which `isRevealed` reads as never.
 */
export function chapterAtEpisode(episode: number): number {
  return CHAPTER_AT[Math.max(episode, 0)] ?? CHAPTER_CEILING + 1
}
