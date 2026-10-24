import type { Gated, Source } from '~/lib/progress/spoiler'

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
 * the source (`gateOf`), and `reveal(bookmark).sees` never opens it for the
 * other. Except a fruit's eaters, which its page covers one by one: an eater
 * the reader does not have is left out, by the gate of the entry that names
 * it, which carries the eater's source as well as its own.
 *
 * `null` is the copy for a reader with no bookmark, who counts in neither
 * source and so has neither kind.
 */

/** Each archive's copies, built once per source and kept with the archive. */
const copies = new WeakMap<SeriesArchive, Map<null | Source, SeriesArchive>>()

/** The archive without the records of the source it is not. */
export function archiveIn(
  archive: SeriesArchive,
  source: null | Source,
): SeriesArchive {
  const bySource =
    copies.get(archive) ?? new Map<null | Source, SeriesArchive>()
  copies.set(archive, bySource)

  let copy = bySource.get(source)
  if (copy === undefined) {
    copy = copyIn(archive, source)
    bySource.set(source, copy)
  }

  return copy
}

/** Builds one copy; `archiveIn` keeps it. */
function copyIn(archive: SeriesArchive, source: null | Source): SeriesArchive {
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
 * an arc this source does not tell moves to the shelf before, which is where
 * the rule of the shelves (`~/data/series/one-piece/characters`) puts it
 * without that arc; a shelf left empty is left out, as there.
 */
function shelvedIn(
  sections: BookSection[],
  has: (entity: Entity) => boolean,
): BookSection[] {
  const shelves: BookSection[] = []
  for (const { arc, characters } of sections) {
    const kept = characters.filter((character) => has(character))
    if (has(arc)) {
      shelves.push({ arc, characters: kept })
    } else {
      shelves.at(-1)?.characters.push(...kept)
    }
  }

  return shelves.filter((shelf) => shelf.characters.length > 0)
}
