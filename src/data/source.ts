import type { Gated, Source } from '~/lib/progress/spoiler'

import { type ReaderArchive, withFeatures } from './features'
import { toldIn } from './reveal'
import type { BookSection, Entity, SeriesArchive } from './types'

/**
 * The archive as one source tells it.
 *
 * A record of one source only (`Entity.source`) does not exist for a reader
 * of the other: it is not sent open, not covered, not counted and not given a
 * handle. Filtering each page for it would leave the next page to forget, so
 * the archive a reader is handed (`~/server/archive/reader.server`) is this
 * copy instead, with every list and every lookup already without it. A
 * handle is numbered within the copy too, so a gap in the numbering cannot
 * say that something was left out.
 *
 * A fact of one source only is gated rather than filtered: its gate carries
 * the source (`gateOf`), and `reveal(bookmark, series).sees` never opens it
 * for the other. Relationship snapshots use the same dated-field gate; their
 * people are resolved through this copy's filtered `getCharacter`, so a
 * snapshot cannot reintroduce a person the reader's source does not have.
 * Except a fruit's eaters, which its page covers one by one: an eater
 * the reader does not have is left out, by the gate of the entry that names
 * it, which carries the eater's source as well as its own.
 *
 * A link two entries tell, the first of one source only (`earliestOf`), and a
 * fruit named so (`openedBy`), keep one gate for both copies: each unit's
 * threshold from the first entry its source tells. So a covered eater or
 * fruit carries, in the unit its reader does not count in, a number taken
 * from the other source. It is never printed and names nothing.
 *
 * `null` is the copy for a reader with no bookmark, who counts in neither
 * source and so has neither kind.
 */

/** Each archive's copies, built once per source and kept with the archive. */
const copies = new WeakMap<SeriesArchive, Map<null | Source, ReaderArchive>>()

/**
 * The archive without the records of the source it is not, every feature
 * slice filled (`withFeatures`), as the server reads it.
 */
export function archiveIn(
  archive: SeriesArchive,
  source: null | Source,
): ReaderArchive {
  const bySource =
    copies.get(archive) ?? new Map<null | Source, ReaderArchive>()
  copies.set(archive, bySource)

  let copy = bySource.get(source)
  if (copy === undefined) {
    copy = copyIn(withFeatures(archive), source)
    bySource.set(source, copy)
  }

  return copy
}

/** Builds one copy; `archiveIn` keeps it. */
function copyIn(archive: ReaderArchive, source: null | Source): ReaderArchive {
  const has = (gated: Gated): boolean => toldIn(gated, source)
  const kept = (entities: Entity[]): Entity[] =>
    entities.filter((entity) => has(entity))
  const found = (entity: Entity | undefined): Entity | undefined =>
    entity !== undefined && has(entity) ? entity : undefined

  return {
    ...archive,
    entities: kept(archive.entities),
    characters: kept(archive.characters),
    featuredCharacters: kept(archive.featuredCharacters),
    arcs: kept(archive.arcs),
    chart: kept(archive.chart),
    fruits: kept(archive.fruits),
    places: kept(archive.places),
    ships: kept(archive.ships),
    bookSections: shelvedIn(archive.bookSections, has),
    sagas: archive.sagas.map((saga) => ({
      ...saga,
      entries: kept(saga.entries),
    })),
    getCharacter: (id) => found(archive.getCharacter(id)),
    getEntity: (id) => found(archive.getEntity(id)),
    getFruit: (id) => found(archive.getFruit(id)),
    getPlace: (id) => found(archive.getPlace(id)),
    getShip: (id) => found(archive.getShip(id)),
    fruitsOfForm: (form) => kept(archive.fruitsOfForm(form)),
    chartWith: (entity) => kept(archive.chartWith(entity)),
    eatersOf: (id) => archive.eatersOf(id).filter((eater) => has(eater.gate)),
  }
}

/**
 * The shelves without the other source's records. A character shelved under
 * an arc this source does not tell moves to the shelf before it, the nearest
 * one kept: the rule's own answer unless a told arc between the two has no
 * shelf of its own. A shelf left empty is left out, as in
 * `~/data/series/one-piece/characters`. A first arc of one source only that
 * shelves characters of both has no shelf before it and none that would not
 * open after them, so it throws rather than shelve them wrong.
 */
function shelvedIn(
  sections: BookSection[],
  has: (entity: Entity) => boolean,
): BookSection[] {
  const shelves: BookSection[] = []
  for (const { arc, characters } of sections) {
    const kept = characters.filter((character) => has(character))
    const last = shelves.at(-1)
    if (has(arc)) {
      shelves.push({ arc, characters: kept })
    } else if (last !== undefined) {
      last.characters.push(...kept)
    } else if (kept.length > 0) {
      throw new Error(
        `${arc.id} opens the shelves but one source alone tells it`,
      )
    }
  }

  return shelves.filter((shelf) => shelf.characters.length > 0)
}
