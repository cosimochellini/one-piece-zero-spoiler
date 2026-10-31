import { sweepOf } from '~/data/sweep'
import type { SeriesArchive } from '~/data/types'
import { ONE_PIECE_SERIES } from '~/lib/progress/series'

import * as Art from './art'
import * as FruitArt from './art/fruits'
import * as Chapters from './chapter-table'
import * as Characters from './characters'
import * as Chart from './chart'
import { CREDITS } from './credits'
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
  gateOf: Chapters.gateOf,
  chapterAtEpisode: Chapters.chapterAtEpisode,
  characters: Characters.characters,
  arcs: Characters.arcs,
  featuredCharacters: Characters.featuredCharacters,
  chart: Characters.chart,
  bookSections: Characters.bookSections,
  getCharacter: Characters.getCharacter,
  dossierOf: Characters.dossierOf,
  roleOf: DatedArchive.roleOf,
  entities: Entities.entities,
  getEntity: Entities.getEntity,
  datedOf: DatedArchive.datedOf,
  reachedOf: DatedArchive.reachedOf,
  latestOf: DatedArchive.latestOf,
  nativesOf: DatedArchive.nativesOf,
  stories: DatedArchive.stories,
  places: Places.places,
  getPlace: Places.getPlace,
  placeDossierOf: Places.placeDossierOf,
  chartPointOf: Chart.chartPointOf,
  credits: CREDITS,
  leads: Leads.ARC_LEADS,
  sagas: Sagas.sagas,
  timelines: DatedArchive.timelines,
  redrawn: DatedArchive.redrawn,
  // Every feature: One Piece is where they come from.
  features: {
    fruits: {
      fruits: Fruits.fruits,
      getFruit: Fruits.getFruit,
      fruitFormOf: Fruits.fruitFormOf,
      fruitsOfForm: Fruits.fruitsOfForm,
      fruitRedrawn: FruitArt.fruitRedrawn,
      eatersOf: DatedArchive.eatersOf,
    },
    ships: {
      ships: Places.ships,
      getShip: Places.getShip,
      shipDossierOf: Places.shipDossierOf,
    },
    filler: {
      filler: Filler.FILLER,
      fillerArcs: Filler.FILLER_ARCS,
      lastAired: Filler.LAST_AIRED,
    },
    factions: { factionsOf: DatedArchive.factionsOf },
  },
}
