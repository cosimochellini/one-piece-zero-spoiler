import { byNumber, byValue } from 'sort-es'

import type { Gated } from '~/lib/progress/spoiler'

import { type ChapterTable, vouches } from './chapterTable'
import type { FeatureTimelines } from './features'
import { type Reveal, toldIn } from './reveal'
import type {
  CharacterDossier,
  Entity,
  Field,
  Fields,
  Native,
  Opened,
  Origin,
  SeriesArchive,
  Timeline,
} from './types'

/**
 * The dated facts of an archive, as one reader may read them, derived from a
 * series' own records the same way for every series.
 *
 * Every timeline belongs to a record — a dossier's fields, a ship's fate, a
 * redrawing — and a fact about a record the reader has not met would name it.
 * So a fact is asked for by its record and its field, never as a bare
 * timeline, and its gate is the later of its own and its record's: no call
 * site can read a timeline without the record behind it, because none is
 * handed one. The home page's stories and a place's natives are views of the
 * same facts, gated the same way.
 *
 * Two steps, because the chapter table is built from the timelines as they
 * are filed (`anchorsOf`), and every gate is then read off that table
 * (`datedArchive`).
 */

/** A character's dossier, in the engine's words. */
export type Dossier = CharacterDossier & FeatureTimelines

/** Where each field is filed, by the id of the record it belongs to. */
type Readers = {
  [F in Field]?: (id: string) => Timeline<Fields[F]> | undefined
}

/**
 * Where a series files the fields that are not a character dossier's: a
 * dossier field is always read off the dossier, so no reader can shadow it.
 */
export interface OtherReaders {
  fate?: (id: string) => Timeline<Fields['fate']> | undefined
  redrawing?: (id: string) => Timeline<Fields['redrawing']> | undefined
}

/** The fields a character dossier files. */
type DossierField = Exclude<Field, keyof OtherReaders>

/**
 * Every character's dossier, merged from the sagas that file them beside
 * their records, in the order the sagas are filed. A character filed in two
 * sagas throws rather than keep one dossier and drop the other.
 */
export function dossiersOf<D>(
  sagas: { dossiers: Record<string, D> }[],
): Record<string, D> {
  const merged = new Map<string, D>()
  const filed = sagas.flatMap((saga) => Object.entries(saga.dossiers))
  for (const [id, dossier] of filed) {
    if (merged.has(id)) {
      throw new Error(`${id} has a dossier in two sagas`)
    }
    merged.set(id, dossier)
  }

  return Object.fromEntries(merged)
}

/**
 * Every field a character dossier files, read off the dossiers: a field
 * added to the dossier does not compile until it is read here.
 */
function dossierReaders(
  dossiers: Record<string, Dossier>,
): Required<Pick<Readers, DossierField>> {
  return {
    affiliation: (id) => dossiers[id]?.affiliation,
    bounty: (id) => dossiers[id]?.bounty,
    chronicle: (id) => dossiers[id]?.chronicle,
    devilFruit: (id) => dossiers[id]?.devilFruit,
    epithet: (id) => dossiers[id]?.epithet,
    origin: (id) => dossiers[id]?.origin,
    relationships: (id) => dossiers[id]?.relationships,
    status: (id) => dossiers[id]?.status,
  }
}

/** A series' timelines as they are filed, with no gate at all. */
export interface Filed {
  /** Every field the series reads, the dossier's first. */
  fields: Field[]
  /**
   * A character's origin entries as filed, each with the place it names:
   * the same timeline `timelineOf(owner, 'origin')` reads, in the dossier's
   * own shape (`Origin`).
   */
  originOf: (owner: Pick<Entity, 'id'>) => Origin[] | undefined
  /**
   * One of a record's timelines as it is filed. Every page reads it through
   * `datedArchive` instead, which holds each entry behind its record; this is
   * the raw read the chapter table and `datedArchive` are built on. `undefined` for a
   * field the series does not file.
   */
  timelineOf: <F extends Field>(
    owner: Pick<Entity, 'id'>,
    field: F,
  ) => Timeline<Fields[F]> | undefined
}

/**
 * A series' timelines: its character dossiers' fields, and any other field
 * it files elsewhere (One Piece's ship fates and redrawings). A field neither
 * names is empty for every record, so a field one series adds asks nothing
 * of another.
 */
export function filedTimelines(
  dossiers: Record<string, Dossier>,
  readers: OtherReaders = {},
): Filed {
  const all: Readers = { ...dossierReaders(dossiers), ...readers }

  return {
    fields: Object.keys(all).filter((key): key is Field =>
      Object.hasOwn(all, key),
    ),
    originOf: (owner) => dossiers[owner.id]?.origin,
    timelineOf: (owner, field) => all[field]?.(owner.id),
  }
}

/**
 * The (episode, chapter) pairs the entries of these records vouch for
 * themselves, which the chapter table is built from (`~/data/chapterTable`).
 */
export function anchorsOf(
  owners: Pick<Entity, 'id' | 'source' | 'unanchored'>[],
  { fields, timelineOf }: Filed,
): [number, number][] {
  return owners.flatMap((owner) => {
    return fields.flatMap((field) => {
      return (timelineOf(owner, field) ?? []).flatMap(
        (entry): [number, number][] =>
          entry.chapter === undefined || !vouches(entry) || !vouches(owner) ?
            []
          : [[entry.episode, entry.chapter]],
      )
    })
  })
}

/**
 * The gate of a link several entries tell, given in timeline order: in each
 * unit, the first entry that unit's source tells. A link the anime alone
 * tells first is still reached by a chapter reader, at the first entry the
 * manga tells too; one that a single source tells at all is that source's
 * alone. With no source on any entry it is the first entry's gate.
 */
export function earliestOf(gates: Gated[]): Gated {
  const inEpisodes = gates.find((gate) => toldIn(gate, 'episode'))
  const inChapters = gates.find((gate) => toldIn(gate, 'chapter'))
  if (
    inEpisodes !== undefined
    && inChapters !== undefined
    && inEpisodes !== inChapters
  ) {
    return {
      revealedAtEpisode: inEpisodes.revealedAtEpisode,
      revealedAtChapter: inChapters.revealedAtChapter,
    }
  }

  const first = inEpisodes ?? inChapters ?? gates[0]
  if (first === undefined) {
    throw new Error('A link is told by at least one entry')
  }

  return first
}

/** What a series' dated facts are derived from. */
export interface DatedSource {
  /** Every character record, in route order. */
  characters: Entity[]
  /** Every record, in the order its timelines are listed. */
  entities: Entity[]
  filed: Filed
  gateOf: ChapterTable['gateOf']
}

/** The dated core of an archive (`SeriesArchive`). */
export type DatedArchive = Pick<
  SeriesArchive,
  | 'datedOf'
  | 'latestOf'
  | 'nativesOf'
  | 'reachedOf'
  | 'redrawn'
  | 'stories'
  | 'timelines'
>

/**
 * A series' dated facts: every entry of a record's timeline at its gate, the
 * stories across characters, every timeline, and every place's natives.
 */
export function datedArchive({
  characters,
  entities,
  filed,
  gateOf,
}: DatedSource): DatedArchive {
  /**
   * Every entry of one of a record's timelines, each with its gate, whoever
   * is reading; empty for a record that files none.
   */
  function datedOf<F extends Field>(
    owner: Entity,
    field: F,
  ): Opened<Fields[F]>[] {
    return (filed.timelineOf(owner, field) ?? []).map((entry) => {
      const gate = gateOf(entry, owner)

      return { ...entry, gate }
    })
  }

  /** The entries of a record's timeline the reader has reached, in order. */
  function reachedOf<F extends Field>(
    at: Reveal,
    owner: Entity,
    field: F,
  ): Opened<Fields[F]>[] {
    return datedOf(owner, field).filter((entry) => at.sees(entry.gate))
  }

  const natives = readNatives(characters, (entity) =>
    (filed.originOf(entity) ?? []).map((entry) => ({
      gate: gateOf(entry, entity),
      place: entry.place,
    })),
  )

  return {
    datedOf,
    reachedOf,
    latestOf: (at, owner, field) => reachedOf(at, owner, field).at(-1)?.value,
    nativesOf: (id) => natives.get(id) ?? [],
    redrawn: (owner) => datedOf(owner, 'redrawing'),
    // Every story, ascending by the episode it concludes at; ties keep route
    // order. The chronicles are filed per character, and the home page reads
    // them across characters, by when they happen.
    stories: characters
      .flatMap((character) => {
        return datedOf(character, 'chronicle').map((entry) => {
          const { episode, gate, value } = entry

          return { character, episode, gate, story: value }
        })
      })
      .toSorted(byValue('episode', byNumber())),
    // Every timeline, read off the field table. One data test holds them all
    // to the same order.
    timelines: entities.flatMap((owner) => {
      return filed.fields.flatMap((field) => {
        const timeline = filed.timelineOf(owner, field)
        const label = `${owner.id}.${field}`

        return timeline === undefined ? [] : { field, label, owner, timeline }
      })
    }),
  }
}

/** A character's origin entries, each with its gate and the place it names. */
type Origins = (entity: Entity) => { gate: Gated; place: string | undefined }[]

/**
 * The places one character's origin names, each with the gate the entries
 * naming it give it (`earliestOf`), gated as every other entry of the
 * timeline is: a timeline is in episode order, so the first entry found is
 * the earliest.
 */
function placesOf(entity: Entity, origins: Origins): Map<string, Gated> {
  const named = new Map<string, Gated[]>()

  for (const { gate, place } of origins(entity)) {
    if (place !== undefined) {
      named.set(place, [...(named.get(place) ?? []), gate])
    }
  }

  return new Map([...named].map(([place, gates]) => [place, earliestOf(gates)]))
}

/**
 * Every place's natives, read once out of the origin entries, in the order
 * the characters are filed. Read backwards: the link is written once, on the
 * character's entry, and the place derives its list.
 */
function readNatives(
  characters: Entity[],
  origins: Origins,
): Map<string, Native[]> {
  const found = new Map<string, Native[]>()

  for (const entity of characters) {
    for (const [place, gate] of placesOf(entity, origins)) {
      found.set(place, [...(found.get(place) ?? []), { entity, gate }])
    }
  }

  return found
}
