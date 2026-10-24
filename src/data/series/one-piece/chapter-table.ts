import { chapterTable, vouches } from '~/data/chapterTable'
import type { Entity, Field, Fields, Timeline } from '~/data/types'
import { CHAPTER_CEILING, EPISODE_CEILING } from '~/lib/progress/episode'

import { REDRAWINGS } from './art'
import { devilFruits } from './records/fruits'
import { SHIP_DOSSIERS } from './records/ships'
import { CHARACTER_DOSSIERS, sagas } from './sagas'

/**
 * One Piece's chapter table (`~/data/chapterTable`): how far into the anime a
 * manga chapter reaches, as far as the archive can vouch for it.
 *
 * Three kinds of record are left out. A fruit, because its chapter is read off
 * this table (`~/data/series/one-piece/entities`) and would otherwise bound itself: the table
 * is built from the records as they are filed (`~/data/series/one-piece/sagas`), before the
 * fruits are added, though a fruit's redrawings still anchor it like any
 * other entry. A record marked `unanchored`, and a record or an entry one
 * source alone tells (`vouches`).
 */

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
 * reads it through `~/data/series/one-piece/dated` instead, which holds each entry behind its
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
    return (timelineOf(owner, field) ?? []).flatMap(
      (entry): [number, number][] =>
        entry.chapter === undefined || !vouches(entry) || !vouches(owner) ?
          []
        : [[entry.episode, entry.chapter]],
    )
  })
})

export const { chapterAtEpisode, episodeAtChapter, gateOf } = chapterTable({
  anchors: ANCHORS,
  chapterCeiling: CHAPTER_CEILING,
  episodeCeiling: EPISODE_CEILING,
  records: FILED,
})
