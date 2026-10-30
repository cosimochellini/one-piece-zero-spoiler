import { chapterTable } from '~/data/chapterTable'
import {
  anchorsOf,
  datedArchive,
  dossiersOf,
  filedTimelines,
} from '~/data/dated'
import { castOf, keptOf } from '~/data/shelves'
import { aroundGates, sweepOf } from '~/data/sweep'
import type { Entity, SeriesArchive } from '~/data/types'
import { HUNTER_X_HUNTER_SERIES as SERIES } from '~/lib/progress/series'

import { DRAWINGS, REDRAWINGS } from './art'
import { PLACE_DOSSIERS } from './places'
import { sagas } from './sagas'

/**
 * Hunter x Hunter's archive: its arcs, and the characters and places of the
 * Hunter Exam (#760) and Heavens Arena (#896) filed so far. The engine derives their lists, shelves
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

/**
 * Every relationship entry's gate, so a new cohort's selections enter the
 * payload sweep without a hand-listed number. One Piece keeps its sweep: its
 * 530 owners would multiply it, and its per-cohort boundary tests
 * (`*Relationships.test.ts`) already ask every entry at gate−1 and gate.
 */
const RELATIONSHIP_GATES = entities.flatMap((owner) =>
  (FILED.timelineOf(owner, 'relationships') ?? []).map((entry) =>
    gateOf(entry, owner),
  ),
)

/** The named scenes the sweep asks on both sides of, in each unit. */
const NAMED_SCENES = {
  episode: [
    2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 75, 76,
  ],
  chapter: [
    2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23,
    24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
    43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 65, 66,
  ],
}

const places = keptOf(entities, 'place', PLACE_DOSSIERS)

/** One dynamically loaded archive; its public description contains no records. */
export const HUNTER_X_HUNTER_ARCHIVE: SeriesArchive = {
  series: SERIES,
  // Both sides of every relationship gate and of the named scenes listed by
  // hand, followed by the first two season boundaries (the demo end and a
  // boundary inside an arc).
  bookmarks: sweepOf(sagas, SERIES, [
    ...aroundGates(RELATIONSHIP_GATES, NAMED_SCENES),
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
    'heavens-arena-arc': ['gon-freecss', 'killua', 'wing', 'zushi', 'hisoka'],
  },
  places: places.records,
  getPlace: places.get,
  placeDossierOf: places.dossierOf,
  // The places map is One Piece's world map; a series without one is #795.
  chartPointOf: () => null,
  // None of One Piece's features (`features` on its description).
  features: {},
}
