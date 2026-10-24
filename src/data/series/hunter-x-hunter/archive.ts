import { chapterTable } from '~/data/chapterTable'
import { orderByMode, routePositionOf } from '~/data/order'
import { sweepOf } from '~/data/sweep'
import type { Entity, SeriesArchive } from '~/data/types'
import { HUNTER_X_HUNTER_SERIES as SERIES } from '~/lib/progress/series'

import { DRAWINGS } from './art'
import { sagas } from './sagas'

/**
 * Hunter x Hunter's archive: its arcs, for now. The characters and places of
 * the Hunter Exam come next (#760), so its character and place lists are
 * empty and no record has a dated fact yet.
 */
const entities: Entity[] = sagas.flatMap((saga) => saga.entries)

const BY_ID = new Map(entities.map((entity) => [entity.id, entity]))

/** The whole archive in the order the anime reaches it. */
const route = orderByMode(entities, 'episode')

const arcs = route.filter((entity) => entity.kind === 'arc')

const { chapterAtEpisode, gateOf } = chapterTable({
  anchors: [],
  chapterCeiling: SERIES.chapterCeiling,
  episodeCeiling: SERIES.episodeCeiling,
  records: entities,
})

const none = (): undefined => undefined
const empty = (): never[] => []

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
  arcs,
  chart: arcs,
  chartWith: (entity) =>
    arcs.includes(entity) ? arcs : orderByMode([...arcs, entity], 'episode'),
  routePositionOf,
  sagas,
  gateOf,
  chapterAtEpisode,
  characters: [],
  featuredCharacters: [],
  bookSections: [],
  getCharacter: none,
  dossierOf: none,
  roleOf: none,
  leads: {},
  stories: [],
  timelines: [],
  datedOf: empty,
  reachedOf: empty,
  latestOf: none,
  redrawn: empty,
  nativesOf: empty,
  places: [],
  getPlace: none,
  placeDossierOf: none,
  chartPointOf: () => null,
  // None of One Piece's features (`features` on its description).
  features: {},
}
