import { chapterTable } from '~/data/chapterTable'
import { anchorsOf, filedTimelines } from '~/data/dated'
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

/**
 * One Piece's timelines as they are filed (`~/data/dated`): the character
 * dossiers' fields, the ships' fates and the redrawings.
 */
export const FILED = filedTimelines(CHARACTER_DOSSIERS, {
  fate: (id) => SHIP_DOSSIERS[id]?.fate,
  redrawing: (id) => REDRAWINGS[id],
})

/** Every record as it is filed, before the fruits are added to it. */
const RECORDS = sagas.flatMap((saga) => saga.entries)

export const { chapterAtEpisode, episodeAtChapter, gateOf } = chapterTable({
  // A fruit's redrawings anchor it like any other entry.
  anchors: anchorsOf([...RECORDS, ...devilFruits], FILED),
  chapterCeiling: CHAPTER_CEILING,
  episodeCeiling: EPISODE_CEILING,
  records: RECORDS,
})
