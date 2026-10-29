import type { BookSection, Entity } from '~/data/types'
import type {
  CharacterDetail,
  CharacterView,
  CoveredRecord,
  DocumentHead,
  RecordView,
  SearchableCharacter,
  ShelfView,
  Stroke,
} from '~/lib/view/records'
import type { RelationshipView } from '~/lib/view/relationships'

import { chronicleOf } from './chronicle.server'
import { headFor, type HeadKeys } from './head.server'
import {
  characterOf,
  deferredOf,
  drawingOf,
  factsOf,
  recordOf,
  searchableOf,
} from './project.server'
import type { Reader } from './reader.server'
import { relationshipsOf } from './relationships.server'

/**
 * What each page is allowed to know, assembled from the archive.
 *
 * These are plain functions, not server functions. The wrappers in
 * `~/server/*.server.ts` are the boundary; keeping the decisions out here is
 * what lets them be tested — under Vitest the Start plugin is deliberately
 * absent, so a server function called directly throws out of
 * `getStartContext()` rather than running.
 *
 * Every one of them takes the bookmark as an argument and none of them reads
 * a cookie. The wrappers read it, from the request, and never from the
 * client: a bookmark passed in over the wire would make the fog a suggestion.
 * Each makes one reader of it (`./reader.server`), which orders, splits and
 * covers in the reader's unit, so a page only says what it holds.
 */

/** The fold of the signal book: the crests, and how much is behind them. */
export interface CharactersPage {
  featuredCovered: CoveredRecord[]
  featuredOpen: SearchableCharacter[]
  shelfCount: number
  /** How many characters the archive files, open or not. */
  filed: number
}

/**
 * The crests, and how many shelves are coming. Awaited by the route: the
 * featured band is the fold, and the pending shelves need a height.
 */
export function charactersPage(r: Reader): CharactersPage {
  const featured = r.split(r.archive.featuredCharacters, searchableOf)

  return {
    // The crests' strokes were most of the served page, and past the first
    // two rows of the widest grid they are below the fold: they come by id.
    featuredOpen: featured.open.map((crest, index) =>
      index < INLINE_CRESTS ? crest : deferredOf(crest),
    ),
    featuredCovered: featured.covered,
    shelfCount: r.archive.bookSections.length,
    filed: r.archive.characters.length,
  }
}

/** The signal book's shelves, in the order the reader's unit reaches them. */
export function shelvesPage(r: Reader): ShelfView[] {
  const byArc = new Map(
    r.archive.bookSections.map((section) => [section.arc.id, section]),
  )

  return r
    .order(r.archive.bookSections.map((section) => section.arc))
    .flatMap((arc, index) => {
      const section = byArc.get(arc.id)
      if (section === undefined) {
        return []
      }

      // The drawings are most of the shelves' bytes, and the first shelf is
      // the only one near the screen when they arrive: the rest come by id.
      const shelf = shelfViewOf(section, r)
      return [
        index < INLINE_SHELVES ? shelf : (
          { ...shelf, open: shelf.open.map((open) => deferredOf(open)) }
        ),
      ]
    })
}

/**
 * The strokes a list left behind (`Drawing.deferred`), by id, as they stand
 * at the bookmark. An id the reader has not reached, or that names nothing,
 * is left out: the ids come from the page, so this answers only what the
 * page could already have been sent.
 */
export function drawingsFor(
  ids: string[],
  r: Reader,
): Record<string, Stroke[]> {
  return Object.fromEntries(
    ids.flatMap((id) => {
      const entity = r.archive.getEntity(id)
      return entity !== undefined && r.sees(entity) ?
          [[id, drawingOf(entity, r).strokes]]
        : []
    }),
  )
}

/** How many featured crests ship their drawings with them: two rows of five. */
const INLINE_CRESTS = 10

/** How many shelves ship their drawings with them. */
const INLINE_SHELVES = 1

/**
 * One shelf: its arc, and the records on it split into open and covered. The
 * arc's own drawing is never drawn on a shelf, so it is never sent.
 */
function shelfViewOf(section: BookSection, r: Reader): ShelfView {
  // A saga's own heading (`Saga.heading`) files no record, so it has no
  // handle to cover it with; saga names are not spoilers (owner,
  // 2026-10-17), so it is sent open.
  const named = r.archive.getEntity(section.arc.id) === undefined
  const open = (entity: Entity, reader: Reader): RecordView =>
    deferredOf(recordOf(entity, reader))

  return {
    arc:
      named ?
        { open: true, record: open(section.arc, r) }
      : r.slot(section.arc, open),
    ...r.split(section.characters, searchableOf),
  }
}

/** A character's own page: what names it, and what it says. */
export interface CharacterPage {
  detail: CharacterDetail
  head: DocumentHead
}

/**
 * A character's page, or `undefined` for an id the archive does not file as
 * a character. It returns rather than throws: `notFound()` is a router
 * signal, and a signal thrown across an RPC boundary is only an error.
 */
export function characterPage(
  id: string,
  r: Reader,
): CharacterPage | undefined {
  const { locale } = r

  const entity = r.archive.getCharacter(id)
  if (entity === undefined) {
    return undefined
  }

  const dossier = r.archive.dossierOf(entity)

  return {
    head: headFor(entity, CHARACTER_HEAD, r),
    detail: {
      slot: r.slot(entity, pageRecordOf),
      log: dossier !== undefined && r.sees(entity) ? dossier.log[locale] : null,
      facts: factsOf(entity, r),
      chronicle: chronicleOf(entity, r),
    },
  }
}

/** A character as their own page draws them, which prints the summary. */
function pageRecordOf(
  entity: Entity,
  r: Reader,
): CharacterView & { summary: string } {
  return { ...characterOf(entity, r), summary: entity.summary[r.locale] }
}

/** The people a character is connected to, which the page streams in. */
export function relationshipsPage(id: string, r: Reader): RelationshipView[] {
  const entity = r.archive.getCharacter(id)
  return entity === undefined ? [] : relationshipsOf(entity, r)
}

/** What a character's page calls itself, open and under fog. */
const CHARACTER_HEAD: HeadKeys = {
  foggedDescription: 'character.foggedDescription',
  foggedTitle: 'character.foggedTitle',
  pageTitle: 'character.pageTitle',
}
