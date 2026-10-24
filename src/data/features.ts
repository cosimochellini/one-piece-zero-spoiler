import type { Reveal } from '~/data/reveal'
import type { Gated } from '~/lib/progress/spoiler'
import type { FillerKind } from '~/lib/view/filler'
import type { FruitForm, FruitLook, Stroke } from '~/lib/view/records'

import type {
  Dated,
  Entity,
  LocalizedText,
  SeriesArchive,
  Timeline,
  Vocabulary,
} from './types'

/**
 * The features only some series have, as optional slices of their archive
 * (`SeriesArchive.features`): One Piece's devil fruits, ships, filler guide
 * and factions. A series' description says which it has (`Series.features`,
 * and the `fruit` and `ship` kinds), and a data test holds the two together.
 *
 * The server is one for every series, so it reads an archive through
 * `withFeatures`, which fills a slice a series does not have with empty lists
 * and lookups that find nothing: a page of a feature the series lacks is
 * empty rather than a crash, and no series files a no-op of its own.
 */

/**
 * The dossier timelines of a feature: a bounty (One Piece's, in Berry) and the
 * devil fruits a character ate, by id rather than by name: one entry may carry
 * two, because one episode may say two. The name the page prints is the
 * fruit record's own, so the two can never drift. One Piece narrows the ids
 * to the fruits it files.
 */
export interface FeatureTimelines {
  bounty?: Timeline<number>
  devilFruit?: Timeline<string[]>
}

/**
 * The log entry for a ship.
 *
 * Its own shape rather than a `PlaceDossier` with `form: 'ship'`. A ship lies
 * in no one sea and has no landmark to look for, so those words would be
 * wrong on it; and unlike a port, a ship has a story of its own, which is
 * what `fate` holds. The other fields obey the ship's threshold, like a
 * port's.
 */
export interface ShipDossier {
  /** Who made her, as a viewer at the threshold has been told it. */
  builder: LocalizedText
  /**
   * The place the crew receives her at: a `place` record's id, named
   * outright, because it opens no later than the ship (a data test holds it).
   */
  launched: string
  /** The log entry proper: two or three sentences, safe at the threshold. */
  log: LocalizedText
  /**
   * Where the ship stands, from her threshold on. The page prints the latest
   * entry the reader has reached, and the first entry is at the threshold,
   * so the row is there from the start and its arrival announces nothing.
   */
  fate: Timeline<LocalizedText>
  /**
   * The places she reaches, each with the episode and the chapter at which
   * she is there or coming in, as checked against the wiki. A place opens
   * no earlier than her arrival in either unit (a data test holds it):
   * opened sooner, the tile would tell a reader where she goes next. The
   * page shows only those the reader has reached, because a covered tile's
   * episode would say how long she lasts.
   */
  ports?: Arrival[]
}

/** A place a ship reaches, and when she is first there or coming in. */
export interface Arrival {
  chapter: number
  episode: number
  place: string
}

/**
 * A fruit drawn again, and what the new drawing shows: the real fruit, or
 * the power as an awakening changes it. The fruit's page names each drawing
 * by it; the first drawing is always the fruit and its power.
 */
export interface FruitRedrawing extends Dated<Stroke[]> {
  look: Exclude<FruitLook, 'power'>
}

/** An eater relation gated by the fact that names it. */
export interface Eater {
  entity: Entity
  gate: Gated
}

/** One numbered episode or unnumbered entry of an optional filler guide. */
export type FillerEntry = (
  { after: number; released: string } | { episode: number }
) & {
  chapter: number
  kind: FillerKind
  summary: LocalizedText
  title: LocalizedText
}

/** A named run of episodes in a filler guide. */
export interface FillerArc {
  first: number
  last: number
  name: LocalizedText
}

/** The devil fruits: the records, their kinds, their redrawings, their eaters. */
export interface FruitFeature {
  eatersOf: (id: string) => Eater[]
  fruitFormOf: (entity: Entity) => FruitForm | undefined
  fruitRedrawn: Record<string, FruitRedrawing[]>
  fruits: Entity[]
  fruitsOfForm: (form: FruitForm) => Entity[]
  getFruit: (id: string) => Entity | undefined
}

/** The ships: the records and their log entries. */
export interface ShipFeature {
  getShip: (id: string) => Entity | undefined
  shipDossierOf: (entity: Entity) => ShipDossier | undefined
  ships: Entity[]
}

/** The filler guide, and the last episode it knows to have aired. */
export interface FillerFeature {
  filler: FillerEntry[]
  fillerArcs: FillerArc[]
  lastAired: number
}

/** The groups a character stands with for one reader, by the latest entry. */
export interface FactionFeature<V extends Vocabulary = Vocabulary> {
  factionsOf: (at: Reveal, owner: Entity) => undefined | V['group'][]
}

/** The feature slices a series has; the rest are left out. */
export interface Features<V extends Vocabulary = Vocabulary> {
  factions?: FactionFeature<V>
  filler?: FillerFeature
  fruits?: FruitFeature
  ships?: ShipFeature
}

/** An archive as the server reads it: its core, and every slice filled. */
export type ReaderArchive<V extends Vocabulary = Vocabulary> = FactionFeature<V>
  & FillerFeature
  & FruitFeature
  & Omit<SeriesArchive<V>, 'features'>
  & ShipFeature

const none = (): undefined => undefined
const empty = (): never[] => []

/**
 * An archive with every feature slice it lacks filled with nothing: no fruits,
 * no ships, no filler guide (aired to the series' last episode), no factions.
 */
export function withFeatures<V extends Vocabulary>(
  archive: SeriesArchive<V>,
): ReaderArchive<V> {
  const { features, ...core } = archive

  return {
    ...core,
    ...(features.fruits ?? {
      eatersOf: empty,
      fruitFormOf: none,
      fruitRedrawn: {},
      fruits: [],
      fruitsOfForm: empty,
      getFruit: none,
    }),
    ...(features.ships ?? { getShip: none, shipDossierOf: none, ships: [] }),
    ...(features.filler ?? {
      filler: [],
      fillerArcs: [],
      lastAired: core.series.episodeCeiling,
    }),
    ...(features.factions ?? { factionsOf: none }),
  }
}
