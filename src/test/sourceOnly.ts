import { orderByMode } from '~/data/order'
import type { Field, Fields } from '~/data/series/one-piece/chapter-table'
import type {
  BookSection,
  Dated,
  Eater,
  Entity,
  SeriesArchive,
} from '~/data/types'
import type { Source } from '~/lib/progress/spoiler'
import type { EntityKind, Stroke } from '~/lib/view/records'

/**
 * An archive with records of one source only planted in it, which no real
 * record is yet: for every kind, a twin of an East Blue record under its own
 * id and name, filed in every list the real one is in. The twin character
 * also ate the real fruit the twin fruit copies, is met at the real place
 * the twin place copies, and is shelved alone under a real arc. On the first featured character, an epithet inside
 * the demo and a redrawing at the ceiling that only the same source tells.
 *
 * Planted beside the archive rather than in it, so a test can hold that a
 * reader of the other source is sent the very bytes they were sent before.
 */
export interface Planted {
  archive: SeriesArchive
  /** The epithet planted on `host`, in English. */
  epithet: string
  host: Entity
  /** The redrawing planted on `host`. */
  strokes: Stroke[]
  /** The planted record of each kind. */
  twin: Record<EntityKind, Entity>
}

/** The real list a kind's records are filed in. */
const LISTS: Record<EntityKind, (archive: SeriesArchive) => Entity[]> = {
  arc: (archive) => archive.arcs,
  character: (archive) => archive.featuredCharacters,
  fruit: (archive) => archive.fruits,
  place: (archive) => archive.places,
  ship: (archive) => archive.ships,
}

/** The first record of a kind inside the demo that does not open at 1. */
function originalOf(kind: EntityKind, archive: SeriesArchive): Entity {
  const { demoLastChapter, demoLastEpisode } = archive.series
  const found = LISTS[kind](archive).find(
    (entity) =>
      Math.min(entity.revealedAtEpisode, entity.revealedAtChapter) > 1
      && entity.revealedAtEpisode <= demoLastEpisode
      && entity.revealedAtChapter <= demoLastChapter,
  )
  if (found === undefined) {
    throw new Error(`No ${kind} to plant a twin of`)
  }

  return found
}

/** The facts planted on the host, by field. */
function factsOf(
  source: Source,
  { series }: SeriesArchive,
): { [F in Field]?: Dated<Fields[F]>[] } {
  return {
    epithet: [
      {
        episode: series.demoLastEpisode,
        source,
        value: { en: `Planted ${source} epithet`, it: `Epiteto ${source}` },
      },
    ],
    redrawing: [
      {
        episode: series.episodeCeiling,
        chapter: series.chapterCeiling,
        source,
        value: [{ d: 'M0 0L7 7', transform: `${source}-redrawing` }],
      },
    ],
  }
}

/** The twin of each kind, made from the real record `originalOf` picks. */
function twinsOf(
  base: SeriesArchive,
  source: Source,
): Record<EntityKind, Entity> {
  const twinOf = (kind: EntityKind): Entity => {
    const id = `${source}-only-${kind}`
    const name = { en: `Planted ${id}`, it: `Piantato ${id}` }

    return { ...originalOf(kind, base), id, name, source }
  }

  return {
    arc: twinOf('arc'),
    character: twinOf('character'),
    fruit: twinOf('fruit'),
    place: twinOf('place'),
    ship: twinOf('ship'),
  }
}

/** A list in route order with more records filed in it. */
function filed(list: Entity[], ...more: Entity[]): Entity[] {
  return orderByMode([...list, ...more], 'episode')
}

/** The archive with records and facts of `source` alone planted in it. */
export function plant(base: SeriesArchive, source: Source): Planted {
  const twin = twinsOf(base, source)
  const twins = Object.values(twin)
  const byId = new Map(twins.map((entity) => [entity.id, entity]))
  const copied = new Map(
    twins.map((entity) => [entity.id, originalOf(entity.kind, base)]),
  )
  const real = (entity: Entity): Entity => copied.get(entity.id) ?? entity
  const lookup =
    (kind: EntityKind, found: (id: string) => Entity | undefined) =>
    (id: string): Entity | undefined =>
      id === twin[kind].id ? twin[kind] : found(id)
  const chart = filed(
    base.chart,
    twin.arc,
    twin.character,
    twin.place,
    twin.ship,
  )
  const host = base.featuredCharacters[0]
  if (host === undefined) {
    throw new Error('No character to plant facts on')
  }
  const facts = factsOf(source, base)

  const datedOf: SeriesArchive['datedOf'] = (owner, field) => [
    ...base.datedOf(owner, field),
    ...(owner.id === host.id ? (facts[field] ?? []) : []).map((entry) => ({
      ...entry,
      gate: base.gateOf(entry, owner),
    })),
  ]
  // The twin character is met at the real place the twin place copies too.
  const metAt = (
    entity: Entity,
  ): ReturnType<SeriesArchive['placeDossierOf']> => {
    const dossier = base.placeDossierOf(entity)
    if (dossier === undefined || entity !== real(twin.place)) {
      return dossier
    }

    return { ...dossier, filedHere: [...dossier.filedHere, twin.character.id] }
  }
  const reachedOf: SeriesArchive['reachedOf'] = (at, owner, field) =>
    datedOf(owner, field).filter((entry) => at.sees(entry.gate))

  const archive: SeriesArchive = {
    ...base,
    entities: [...base.entities, ...twins],
    characters: filed(base.characters, twin.character),
    featuredCharacters: filed(base.featuredCharacters, twin.character),
    chart,
    arcs: filed(base.arcs, twin.arc),
    fruits: filed(base.fruits, twin.fruit),
    places: filed(base.places, twin.place),
    ships: filed(base.ships, twin.ship),
    bookSections: shelved(base, twin.arc, twin.character),
    sagas: base.sagas.map((saga) => ({
      ...saga,
      entries: [
        ...saga.entries,
        ...twins.filter((entity) => saga.entries.includes(real(entity))),
      ],
    })),
    getEntity: (id) => byId.get(id) ?? base.getEntity(id),
    getCharacter: lookup('character', base.getCharacter),
    getFruit: lookup('fruit', base.getFruit),
    getPlace: lookup('place', base.getPlace),
    getShip: lookup('ship', base.getShip),
    dossierOf: (entity) => base.dossierOf(real(entity)),
    roleOf: (entity) => base.roleOf(real(entity)),
    placeDossierOf: (entity) => metAt(real(entity)),
    shipDossierOf: (entity) => base.shipDossierOf(real(entity)),
    fruitFormOf: (entity) => base.fruitFormOf(real(entity)),
    chartPointOf: (id) => base.chartPointOf(copied.get(id)?.id ?? id),
    fruitsOfForm: (form) =>
      base.fruitFormOf(real(twin.fruit)) === form ?
        filed(base.fruitsOfForm(form), twin.fruit)
      : base.fruitsOfForm(form),
    chartWith: (entity) =>
      chart.includes(entity) ? chart : filed(chart, entity),
    datedOf,
    reachedOf,
    latestOf: (at, owner, field) => reachedOf(at, owner, field).at(-1)?.value,
    redrawn: (owner) => datedOf(owner, 'redrawing'),
    eatersOf: (id) => [
      ...base.eatersOf(id),
      ...(id === real(twin.fruit).id ? [eaterOf(twin.character, base)] : []),
    ],
  }

  return {
    archive,
    epithet: facts.epithet?.[0]?.value.en ?? '',
    host,
    strokes: facts.redrawing?.[0]?.value ?? [],
    twin,
  }
}

/** A character as the eater of a fruit, from its own threshold. */
function eaterOf(entity: Entity, base: SeriesArchive): Eater {
  const named = { episode: entity.revealedAtEpisode, value: null }

  return { entity, gate: base.gateOf(named, entity) }
}

/**
 * The shelves with the twin arc's own after the first shelf of several,
 * holding that shelf's last character, which a reader without the twin arc
 * must find back where it was; and the twin character alone on the shelf of
 * a real arc that has none, which such a reader must not be shown at all.
 */
function shelved(
  base: SeriesArchive,
  arc: Entity,
  character: Entity,
): BookSection[] {
  const sections = base.bookSections
  const at = sections.findIndex((section) => section.characters.length > 1)
  const section = sections[at]
  const moved = section?.characters.at(-1)
  const bare = base.arcs.find((real) =>
    sections.every((shelf) => shelf.arc !== real),
  )
  if (section === undefined || moved === undefined || bare === undefined) {
    throw new Error('No shelf to plant beside')
  }

  return [
    ...sections.slice(0, at),
    { arc: section.arc, characters: section.characters.slice(0, -1) },
    { arc, characters: [moved] },
    ...sections.slice(at + 1),
    { arc: bare, characters: [character] },
  ]
}
