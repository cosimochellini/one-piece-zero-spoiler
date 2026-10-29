import { chapterTable } from '~/data/chapterTable'
import {
  anchorsOf,
  datedArchive,
  dossiersOf,
  filedTimelines,
} from '~/data/dated'
import { castOf, keptOf } from '~/data/shelves'
import { sweepOf } from '~/data/sweep'
import type { Entity, SeriesArchive } from '~/data/types'
import { HUNTER_X_HUNTER_SERIES as SERIES } from '~/lib/progress/series'

import { DRAWINGS, REDRAWINGS } from './art'
import { PLACE_DOSSIERS } from './places'
import { sagas } from './sagas'

/**
 * Hunter x Hunter's archive: its arcs, and the characters and places of the
 * Hunter Exam filed so far (#760). The engine derives their lists, shelves
 * and dated facts from the records and dossiers the sagas file, as it does
 * One Piece's.
 */
const entities: Entity[] = sagas.flatMap((saga) => saga.entries)

const BY_ID = new Map(entities.map((entity) => [entity.id, entity]))

/** Every character's dossier, merged from the sagas. */
const DOSSIERS = dossiersOf(sagas)

const FILED = filedTimelines(DOSSIERS, { redrawing: (id) => REDRAWINGS[id] })

const { chapterAtEpisode, gateOf } = chapterTable({
  anchors: anchorsOf(entities, FILED),
  chapterCeiling: SERIES.chapterCeiling,
  episodeCeiling: SERIES.episodeCeiling,
  records: entities,
})

// The main characters of the Hunter Exam, as they are filed: the landing
// chart and the featured row.
const cast = castOf({
  dossiers: DOSSIERS,
  entities,
  featured: [
    'gon-freecss',
    'kurapika',
    'leorio-paradinight',
    'killua',
    'hisoka',
  ],
  sagas,
})

const places = keptOf(entities, 'place', PLACE_DOSSIERS)

/** One dynamically loaded archive; its public description contains no records. */
export const HUNTER_X_HUNTER_ARCHIVE: SeriesArchive = {
  series: SERIES,
  // Both sides of the new named-scene gates in each unit, followed by the
  // first two season boundaries (the demo end and a boundary inside an arc).
  bookmarks: sweepOf(sagas, SERIES, [
    ...[
      2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 75, 76,
    ].map((episode) => ({ mode: 'episode' as const, episode })),
    ...[
      4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
      27, 28, 29, 30, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
    ].map((chapter) => ({ mode: 'chapter' as const, chapter })),
    { mode: 'season', season: 1, episode: 26 },
    { mode: 'season', season: 2, episode: 1 },
    { mode: 'season', season: 2, episode: 12 },
    { mode: 'season', season: 3, episode: 1 },
  ]),
  drawings: DRAWINGS,
  entities,
  getEntity: (id) => BY_ID.get(id),
  sagas,
  gateOf,
  chapterAtEpisode,
  ...cast,
  ...datedArchive({
    characters: cast.characters,
    entities,
    filed: FILED,
    gateOf,
  }),
  leads: {
    'hunter-exam-arc': [
      'gon-freecss',
      'kurapika',
      'leorio-paradinight',
      'killua',
      'hisoka',
    ],
  },
  places: places.records,
  getPlace: places.get,
  placeDossierOf: places.dossierOf,
  // The places map is One Piece's world map; a series without one is #795.
  chartPointOf: () => null,
  // None of One Piece's features (`features` on its description).
  features: {},
}
