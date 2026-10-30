import type { Redrawings } from '~/data/art/stroke'
import { chapterTable } from '~/data/chapterTable'
import {
  anchorsOf,
  datedArchive,
  dossiersOf,
  type Filed,
  filedTimelines,
} from '~/data/dated'
import { castOf, keptOf } from '~/data/shelves'
import type {
  Entity,
  PlaceDossier,
  Saga,
  SeriesArchive,
  Vocabulary,
} from '~/data/types'
import type { Series } from '~/lib/progress/series'

/** The archive of a series that files every record in its sagas. */
export interface SagaArchive<V extends Vocabulary> {
  /**
   * Everything but what the series adds itself (its sweep, drawings, leads
   * and description), derived from the sagas.
   */
  core: Omit<SeriesArchive<V>, 'bookmarks' | 'drawings' | 'leads' | 'series'>
  /** Its timelines, for the gates its own sweep reads. */
  filed: Filed
}

/**
 * The archive the engine derives from a series' sagas: its records, their
 * dossiers and dated facts, the chapter table, the cast and the places, as
 * Hunter x Hunter and Game of Thrones file them. None of One Piece's
 * features, and no world map. One Piece builds its own.
 */
export function sagaArchive<V extends Vocabulary>({
  featured,
  placeDossiers,
  redrawings,
  sagas,
  series,
}: {
  /** The main characters: the landing chart and the featured row. */
  featured: string[]
  placeDossiers: Record<string, PlaceDossier<V>>
  redrawings: Redrawings
  sagas: Saga<V>[]
  series: Series
}): SagaArchive<V> {
  const entities: Entity[] = sagas.flatMap((saga) => saga.entries)
  const byId = new Map(entities.map((entity) => [entity.id, entity]))
  const dossiers = dossiersOf(sagas)
  const filed = filedTimelines(dossiers, { redrawing: (id) => redrawings[id] })
  const { chapterAtEpisode, gateOf } = chapterTable({
    anchors: anchorsOf(entities, filed),
    chapterCeiling: series.chapterCeiling,
    episodeCeiling: series.episodeCeiling,
    records: entities,
  })
  const cast = castOf({ dossiers, entities, featured, sagas })
  const places = keptOf(entities, 'place', placeDossiers)

  return {
    filed,
    core: {
      entities,
      getEntity: (id) => byId.get(id),
      sagas,
      gateOf,
      chapterAtEpisode,
      ...cast,
      ...datedArchive({ characters: cast.characters, entities, filed, gateOf }),
      places: places.records,
      getPlace: places.get,
      placeDossierOf: places.dossierOf,
      // The places map is One Piece's world map; a series without one is #795.
      chartPointOf: () => null,
      features: {},
    },
  }
}
