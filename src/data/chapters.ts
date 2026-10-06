import { CHAPTER_CEILING, EPISODE_CEILING } from '~/lib/progress/episode'

import { REDRAWINGS } from './art'
import type { Redrawings } from './art/stroke'
import { CHARACTER_DOSSIERS } from './characters'
import { entities } from './entities'
import { SHIP_DOSSIERS, type ShipDossier } from './places'
import type { CharacterDossier, Dated, Entity, Timeline } from './types'

/**
 * How far into the anime a manga chapter reaches, as far as the archive can
 * vouch for it.
 *
 * The dossier timelines and the chronicle are dated in anime episodes, and
 * only some entries say which chapter tells them; a reader who counts in
 * chapters reads every other entry at the first chapter that reaches its
 * episode (`~/data/dated`). There is no chapter-to-episode table to read
 * that from, so it is derived. A chapter reaches the episode that is below
 * both of:
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

/**
 * Every dated field of the archive, by what an entry of it holds: the
 * character dossiers' timelines, derived from the dossier so that a new one
 * does not compile until it is read below, a ship's fate and a redrawing.
 */
export type Fields = {
  [
    K in keyof CharacterDossier as NonNullable<CharacterDossier[K]> extends (
      Timeline<unknown>
    ) ?
      K
    : never
  ]-?: NonNullable<CharacterDossier[K]> extends Timeline<infer V> ? V : never
} & {
  fate: ShipDossier['fate'][number]['value']
  redrawing: Redrawings[string][number]['value']
}

/** The name of a dated field. */
export type Field = keyof Fields

/** Where each field is filed, by the id of the record it belongs to. */
type Readers = { [F in Field]: (id: string) => Timeline<Fields[F]> | undefined }

const READERS: Readers = {
  affiliation: (id) => CHARACTER_DOSSIERS[id]?.affiliation,
  bounty: (id) => CHARACTER_DOSSIERS[id]?.bounty,
  chronicle: (id) => CHARACTER_DOSSIERS[id]?.chronicle,
  devilFruit: (id) => CHARACTER_DOSSIERS[id]?.devilFruit,
  epithet: (id) => CHARACTER_DOSSIERS[id]?.epithet,
  origin: (id) => CHARACTER_DOSSIERS[id]?.origin,
  status: (id) => CHARACTER_DOSSIERS[id]?.status,
  fate: (id) => SHIP_DOSSIERS[id]?.fate,
  redrawing: (id) => REDRAWINGS[id],
}

const FIELDS: Field[] = Object.keys(READERS).filter((key): key is Field =>
  Object.hasOwn(READERS, key),
)

/**
 * One of a record's timelines as it is filed, with no gate at all. Every page
 * reads it through `~/data/dated` instead, which holds each entry behind its
 * record; this is the raw read the chapter table and that module are built on.
 */
export function timelineOf<F extends Field>(
  owner: Entity,
  field: F,
): Timeline<Fields[F]> | undefined {
  return READERS[field](owner.id)
}

/** One timeline of the archive, with the record that owns it and its field. */
export interface OwnedTimeline {
  field: Field
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

/**
 * Every timeline in the archive: the character dossiers' fields, the ships'
 * fates and the redrawings, read off the field table. One data test holds
 * them all to the same order.
 */
export const TIMELINES: OwnedTimeline[] = entities.flatMap((owner) => {
  return FIELDS.flatMap((field) => {
    const timeline = timelineOf(owner, field)
    const label = `${owner.id}.${field}`

    return timeline === undefined ? [] : { field, label, owner, timeline }
  })
})

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
