import { routePositionOf } from '~/data/order'
import { sweepOf } from '~/data/sweep'
import type { SeriesArchive } from '~/data/types'
import { ONE_PIECE_SERIES } from '~/lib/progress/series'

import * as Art from './art'
import * as FruitArt from './art/fruits'
import * as Chapters from './chapter-table'
import * as Timelines from './chapters'
import * as Characters from './characters'
import * as Chart from './chart'
import * as DatedArchive from './dated'
import * as Entities from './entities'
import * as Filler from './filler'
import * as Fruits from './fruits'
import * as Leads from './leads'
import * as Places from './places'
import * as Sagas from './sagas'

/** One dynamically loaded archive; its public description contains no records. */
export const ONE_PIECE_ARCHIVE: SeriesArchive = {
  series: ONE_PIECE_SERIES,
  bookmarks: sweepOf(Sagas.sagas, ONE_PIECE_SERIES, [
    { mode: 'season', season: 4, episode: 37 },
    { mode: 'season', season: 4, episode: 38 },
  ]),
  drawings: Art.DRAWINGS,
  fruitRedrawn: FruitArt.fruitRedrawn,
  gateOf: Chapters.gateOf,
  chapterAtEpisode: Chapters.chapterAtEpisode,
  characters: Characters.characters,
  arcs: Characters.arcs,
  featuredCharacters: Characters.featuredCharacters,
  chart: Characters.chart,
  bookSections: Characters.bookSections,
  getCharacter: Characters.getCharacter,
  dossierOf: Characters.dossierOf,
  roleOf: Characters.roleOf,
  chartWith: Characters.chartWith,
  routePositionOf,
  entities: Entities.entities,
  getEntity: Entities.getEntity,
  datedOf: DatedArchive.datedOf,
  reachedOf: DatedArchive.reachedOf,
  latestOf: DatedArchive.latestOf,
  factionsOf: DatedArchive.factionsOf,
  eatersOf: DatedArchive.eatersOf,
  nativesOf: DatedArchive.nativesOf,
  stories: DatedArchive.stories,
  fruits: Fruits.fruits,
  getFruit: Fruits.getFruit,
  fruitFormOf: Fruits.fruitFormOf,
  fruitsOfForm: Fruits.fruitsOfForm,
  places: Places.places,
  ships: Places.ships,
  getPlace: Places.getPlace,
  getShip: Places.getShip,
  placeDossierOf: Places.placeDossierOf,
  shipDossierOf: Places.shipDossierOf,
  chartPointOf: Chart.chartPointOf,
  leads: Leads.ARC_LEADS,
  sagas: Sagas.sagas,
  filler: Filler.FILLER,
  fillerArcs: Filler.FILLER_ARCS,
  lastAired: Filler.LAST_AIRED,
  timelines: Timelines.TIMELINES,
  redrawn: (owner) => DatedArchive.datedOf(owner, 'redrawing'),
}
