import { chapterTable } from '~/data/chapterTable'
import {
  anchorsOf,
  datedArchive,
  dossiersOf,
  filedTimelines,
} from '~/data/dated'
import { routePositionOf } from '~/data/order'
import { castOf, keptOf } from '~/data/shelves'
import { sweepOf } from '~/data/sweep'
import type { Entity, SeriesArchive } from '~/data/types'
import { HUNTER_X_HUNTER_SERIES as SERIES } from '~/lib/progress/series'

import { DRAWINGS } from './art'
import { PLACE_DOSSIERS } from './places'
import { sagas } from './sagas'

/**
 * Hunter x Hunter's archive: its arcs, for now. The characters and places of
 * the Hunter Exam come next (#760); the engine derives their lists, shelves
 * and dated facts from the records and dossiers the sagas file, as it does
 * One Piece's, so today they are empty.
 */
const entities: Entity[] = sagas.flatMap((saga) => saga.entries)

const BY_ID = new Map(entities.map((entity) => [entity.id, entity]))

/** Every character's dossier, merged from the sagas. */
const DOSSIERS = dossiersOf(sagas)

const FILED = filedTimelines(DOSSIERS)

const { chapterAtEpisode, gateOf } = chapterTable({
  anchors: anchorsOf(entities, FILED),
  chapterCeiling: SERIES.chapterCeiling,
  episodeCeiling: SERIES.episodeCeiling,
  records: entities,
})

const cast = castOf({ dossiers: DOSSIERS, entities, featured: [] })

const places = keptOf(entities, 'place', PLACE_DOSSIERS)

/** One dynamically loaded archive; its public description contains no records. */
export const HUNTER_X_HUNTER_ARCHIVE: SeriesArchive = {
  series: SERIES,
  // Both sides of the first two season boundaries, counted in seasons: the
  // first is the end of the demo, the second falls inside an arc.
  bookmarks: sweepOf(sagas, SERIES, [
    { mode: 'season', season: 1, episode: 26 },
    { mode: 'season', season: 2, episode: 1 },
    { mode: 'season', season: 2, episode: 12 },
    { mode: 'season', season: 3, episode: 1 },
  ]),
  drawings: DRAWINGS,
  entities,
  getEntity: (id) => BY_ID.get(id),
  routePositionOf,
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
  // No arc leads filed yet.
  leads: {},
  places: places.records,
  getPlace: places.get,
  placeDossierOf: places.dossierOf,
  // The places map is One Piece's world map; a series without one is #795.
  chartPointOf: () => null,
  // None of One Piece's features (`features` on its description).
  features: {},
}
