import { sagaArchive } from '~/data/sagaArchive'
import { sweepOf } from '~/data/sweep'
import type { SeriesArchive } from '~/data/types'
import { GAME_OF_THRONES_SERIES as SERIES } from '~/lib/progress/series'

import { DRAWINGS, REDRAWINGS } from './art'
import { sagas as seasons } from './sagas'

/**
 * Game of Thrones' archive, filed closed (#849): its seasons, with no record
 * yet. A season with no record has nothing to head, shelve or sweep, so the
 * engine reads only the seasons that file one.
 */
const sagas = seasons.filter((season) => season.entries.length > 0)

const { core } = sagaArchive({
  featured: [],
  placeDossiers: {},
  redrawings: REDRAWINGS,
  sagas,
  series: SERIES,
})

/** One dynamically loaded archive; its public description contains no records. */
export const GAME_OF_THRONES_ARCHIVE: SeriesArchive = {
  series: SERIES,
  // The demo's last episode and the first past it; the seasons add their
  // own boundaries once they file records.
  bookmarks: sweepOf(sagas, SERIES, [
    { mode: 'season', season: 1, episode: 10 },
    { mode: 'season', season: 2, episode: 1 },
  ]),
  drawings: DRAWINGS,
  ...core,
  leads: {},
}
