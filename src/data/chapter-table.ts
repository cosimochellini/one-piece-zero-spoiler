import { CHAPTER_CEILING, EPISODE_CEILING } from '~/lib/progress/episode'
import type { Gated } from '~/lib/progress/spoiler'

import { REDRAWINGS } from './art'
import type { Redrawings } from './art/stroke'
import { devilFruits } from './records/fruits'
import { SHIP_DOSSIERS, type ShipDossier } from './records/ships'
import { CHARACTER_DOSSIERS, sagas } from './sagas'
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
 * this table (`~/data/entities`) and would otherwise bound itself: the table
 * is built from the records as they are filed (`~/data/sagas`), before the
 * fruits are added, though a fruit's redrawings still anchor it like any
 * other entry. And a record marked `unanchored`, whose two thresholds are too
 * far apart to say anything about the chapters between them.
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

export const FIELDS: Field[] = Object.keys(READERS).filter(
  (key): key is Field => Object.hasOwn(READERS, key),
)

/**
 * One of a record's timelines as it is filed, with no gate at all. Every page
 * reads it through `~/data/dated` instead, which holds each entry behind its
 * record; this is the raw read the chapter table and that module are built on.
 */
export function timelineOf<F extends Field>(
  owner: Pick<Entity, 'id'>,
  field: F,
): Timeline<Fields[F]> | undefined {
  return READERS[field](owner.id)
}

/** Every record as it is filed, before the fruits are added to it. */
const FILED = sagas.flatMap((saga) => saga.entries)

/**
 * The (episode, chapter) pairs the entries vouch for themselves, a fruit's
 * redrawings among them.
 */
const ANCHORS = [...FILED, ...devilFruits].flatMap((owner) => {
  return FIELDS.flatMap((field) => {
    return (timelineOf(owner, field) ?? []).flatMap(({ chapter, episode }) =>
      chapter === undefined ? [] : [[episode, chapter] as const],
    )
  })
})

const RECORDS = FILED.filter((entity) => entity.unanchored !== true)

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

/**
 * When a dated entry may be shown: from its episode, and from the chapter it
 * declares or, without one, the first chapter that reaches its episode — and
 * never before its record, whichever is later in each unit.
 */
export function gateOf(entry: Dated<unknown>, owner: Gated): Gated {
  const revealedAtEpisode = Math.max(owner.revealedAtEpisode, entry.episode)

  return {
    revealedAtEpisode,
    revealedAtChapter: Math.max(
      owner.revealedAtChapter,
      entry.chapter ?? chapterAtEpisode(revealedAtEpisode),
    ),
  }
}
