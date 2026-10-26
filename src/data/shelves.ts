import type { BookmarkMode } from '~/lib/progress/episode'
import { thresholdIn } from '~/lib/progress/spoiler'
import type { EntityKind } from '~/lib/view/records'

import { orderByMode } from './order'
import type { BookSection, Entity, LocalizedText, SeriesArchive } from './types'

/**
 * The shelves of an archive, derived from a series' own records the same way
 * for every series: which records are characters, arcs and places, which
 * ones the landing chart draws, how the signal book is shelved, and the
 * dossier filed for each.
 */

/**
 * The kinds the landing chart draws.
 *
 * Written as the kinds that are on it rather than as the kinds that are not,
 * so a kind filed later is off the chart until somebody puts it on. The
 * devil fruits are the first kind to arrive since this was written, and a
 * list of exceptions would have put all hundred and twenty of them on the
 * chart without anybody deciding to.
 */
const CHARTED_KINDS = new Set<EntityKind>(['arc', 'place', 'ship'])

/** What a series' cast is derived from. */
export interface CastSource<D> {
  /** Every character's dossier, by id. */
  dossiers: Record<string, D>
  entities: Entity[]
  /**
   * The characters the signal book puts in evidence and the landing chart
   * draws. The pages draw them in route order; this list only decides who is
   * in. An id that files no character throws.
   */
  featured: Iterable<string>
}

/** The cast of an archive (`SeriesArchive`), its dossiers in the series' type. */
export type Cast<D> = Pick<
  SeriesArchive,
  | 'arcs'
  | 'bookSections'
  | 'characters'
  | 'chart'
  | 'chartWith'
  | 'featuredCharacters'
  | 'getCharacter'
  | 'roleOf'
> & { dossierOf: (entity: Entity) => D | undefined }

/**
 * A series' characters and arcs, in the order the anime reaches them, the
 * chart, and the signal book shelved by arc.
 */
export function castOf<D extends { role: LocalizedText }>({
  dossiers,
  entities,
  featured,
}: CastSource<D>): Cast<D> {
  const route = orderByMode(entities, 'episode')
  const characters = route.filter((entity) => entity.kind === 'character')
  const arcs = route.filter((entity) => entity.kind === 'arc')
  const byId = new Map(characters.map((entity) => [entity.id, entity]))
  const isFeatured = new Set(featured)
  for (const id of isFeatured) {
    if (!byId.has(id)) {
      throw new Error(`${id} is featured but files no character`)
    }
  }
  // Every arc, place and ship, and the featured characters. The other
  // characters are in the signal book but not on the chart, which would
  // otherwise run to several hundred waypoints.
  const chart = route.filter(
    (entity) => CHARTED_KINDS.has(entity.kind) || isFeatured.has(entity.id),
  )
  const onChart = new Set(chart.map((entity) => entity.id))
  // What the archive knows about a character beyond its name and sentence,
  // or `undefined` where nothing has been filed yet.
  const dossierOf = (entity: Entity): D | undefined => dossiers[entity.id]

  return {
    arcs,
    bookSections: shelvesOf(arcs, characters, 'episode'),
    characters,
    chart,
    // The chart with this record on it, in route order: the chart when the
    // record is already drawn, otherwise a copy with the record set in at
    // its place, so an unlisted character still has a place on the chart.
    chartWith: (entity) =>
      onChart.has(entity.id) ? chart : (
        orderByMode([...chart, entity], 'episode')
      ),
    dossierOf,
    featuredCharacters: characters.filter((entity) =>
      isFeatured.has(entity.id),
    ),
    // A record that exists but is not a character is `undefined` here too:
    // `/characters/<an arc>` is not a page.
    getCharacter: (id) => byId.get(id),
    // The line under the name on a card, read off the dossier: an editorial
    // sentence frozen at the threshold, not a property of the record.
    roleOf: (entity) => dossierOf(entity)?.role,
  }
}

/**
 * The signal book shelved by arc, in route order, empty shelves left out. A
 * character is shelved under the arc with the greatest threshold no later
 * than its own, so a shelf's heading is always open whenever any character
 * on it is — the heading never has to be veiled above an open name.
 */
export function shelvesOf(
  arcs: Entity[],
  characters: Entity[],
  mode: BookmarkMode,
): BookSection[] {
  const orderedArcs = orderByMode(arcs, mode)
  const orderedCharacters = orderByMode(characters, mode)
  const shelfOf = (character: Entity): Entity => {
    let shelf: Entity | undefined
    for (const arc of orderedArcs) {
      if (thresholdIn(arc, mode) > thresholdIn(character, mode)) {
        break
      }
      shelf = arc
    }
    if (shelf === undefined) {
      throw new Error(`${character.id} has no arc heading in ${mode}`)
    }
    return shelf
  }

  const byCharacter = new Map(
    orderedCharacters.map((character) => [character.id, shelfOf(character)]),
  )

  return orderedArcs.flatMap((arc) => {
    const shelved = orderedCharacters.filter(
      (character) => byCharacter.get(character.id)?.id === arc.id,
    )
    return shelved.length === 0 ? [] : { arc, characters: shelved }
  })
}

/** The records of one kind, in route order, and the dossier filed for each. */
export interface Kept<D> {
  dossierOf: (entity: Entity) => D | undefined
  get: (id: string) => Entity | undefined
  records: Entity[]
}

/**
 * The records of one kind, in the order the anime reaches them, looked up by
 * id: a record of another kind is `undefined` there. A record with no
 * dossier still has a name, a drawing and a threshold; a dossier with no
 * record of the kind throws, as it would be printed for nothing.
 */
export function keptOf<D>(
  entities: Entity[],
  kind: EntityKind,
  dossiers: Record<string, D>,
): Kept<D> {
  const records = orderByMode(
    entities.filter((entity) => entity.kind === kind),
    'episode',
  )
  const byId = new Map(records.map((entity) => [entity.id, entity]))
  for (const id of Object.keys(dossiers)) {
    if (!byId.has(id)) {
      throw new Error(`${id} has a ${kind} dossier but files no ${kind}`)
    }
  }

  return {
    dossierOf: (entity) => dossiers[entity.id],
    get: (id) => byId.get(id),
    records,
  }
}
