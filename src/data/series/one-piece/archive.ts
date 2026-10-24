import type { Entity, SeriesArchive } from '~/data/types'
import type { Bookmark } from '~/lib/progress/episode'
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

/** Every saga boundary, on both sides, in one unit. */
function aroundSagas(threshold: (arc: Entity) => number): number[] {
  return Sagas.sagas.flatMap(({ entries }) => {
    let start = Infinity
    for (const entry of entries) {
      if (entry.kind === 'arc') {
        start = Math.min(start, threshold(entry))
      }
    }
    return Number.isFinite(start) ?
        [start - 1, start].filter((count) => count > 0)
      : []
  })
}

/** One dynamically loaded archive; its public description contains no records. */
export const ONE_PIECE_ARCHIVE: SeriesArchive = {
  series: ONE_PIECE_SERIES,
  bookmarks: [
    null,
    ...aroundSagas((arc) => arc.revealedAtEpisode).map((episode): Bookmark => ({
      mode: 'episode',
      episode,
    })),
    ...aroundSagas((arc) => arc.revealedAtChapter).map((chapter): Bookmark => ({
      mode: 'chapter',
      chapter,
    })),
    { mode: 'season', season: 4, episode: 37 },
    { mode: 'season', season: 4, episode: 38 },
    { mode: 'episode', episode: ONE_PIECE_SERIES.episodeCeiling },
    { mode: 'chapter', chapter: ONE_PIECE_SERIES.chapterCeiling },
  ],
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
  routePositionOf: Characters.routePositionOf,
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
