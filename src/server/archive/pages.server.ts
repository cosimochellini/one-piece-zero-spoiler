import {
  type BookSection,
  bookSections,
  dossierOf as characterDossierOf,
  characters,
  chart,
  chartWith,
  featuredCharacters,
  getCharacter,
  routePositionOf,
} from '~/data/characters'
import type { Entity } from '~/data/types'
import type { Locale } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type {
  CharacterDetail,
  CharacterView,
  ChartView,
  CoveredRecord,
  DocumentHead,
  RecordView,
  RoutePositionView,
  SearchableCharacter,
  ShelfView,
  Slot,
} from '~/lib/view/records'

import { chronicleOf } from './chronicle.server'
import { headFor, type HeadKeys } from './head.server'
import {
  characterOf,
  factsOf,
  recordOf,
  searchableOf,
  waypointOf,
} from './project.server'
import { type Reader, readerFor } from './reader.server'

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

/** The landing chart: arcs, places, ships and the characters in evidence. */
export function chartPage(bookmark: Bookmark, locale: Locale): ChartView {
  const { covered, open, total } = readerFor(bookmark, locale).split(
    chart,
    waypointOf,
  )

  return { open, covered, filed: total }
}

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
export function charactersPage(
  bookmark: Bookmark,
  locale: Locale,
): CharactersPage {
  const featured = readerFor(bookmark, locale).split(
    featuredCharacters,
    searchableOf,
  )

  return {
    featuredOpen: featured.open,
    featuredCovered: featured.covered,
    shelfCount: bookSections.length,
    filed: characters.length,
  }
}

/** The signal book's shelves, in the order the reader's unit reaches them. */
export function shelvesPage(bookmark: Bookmark, locale: Locale): ShelfView[] {
  const r = readerFor(bookmark, locale)
  const byArc = new Map(
    bookSections.map((section) => [section.arc.id, section]),
  )

  return r.order(bookSections.map((section) => section.arc)).flatMap((arc) => {
    const section = byArc.get(arc.id)

    return section === undefined ? [] : shelfViewOf(section, r)
  })
}

/** One shelf: its arc, and the records on it split into open and covered. */
function shelfViewOf(section: BookSection, r: Reader): ShelfView {
  return {
    arc: r.slot(section.arc, recordOf),
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
  bookmark: Bookmark,
  locale: Locale,
): CharacterPage | undefined {
  const entity = getCharacter(id)
  if (entity === undefined) {
    return undefined
  }

  const r = readerFor(bookmark, locale)
  const dossier = characterDossierOf(entity)

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

/** Where a character sits on the route, and the two records beside them. */
export function routePosition(
  id: string,
  bookmark: Bookmark,
  locale: Locale,
): RoutePositionView | undefined {
  const entity = getCharacter(id)
  if (entity === undefined) {
    return undefined
  }

  const r = readerFor(bookmark, locale)
  const ordered = r.order(chartWith(entity))
  const position = routePositionOf(entity, ordered)
  const beside = (near: Entity | undefined): null | Slot<RecordView> =>
    near === undefined ? null : r.slot(near, recordOf)

  return {
    index: position.index,
    total: position.total,
    openCount: ordered.filter((record) => r.sees(record)).length,
    // The ring takes the record's colour only once the reader has reached it,
    // so a covered record's colour is not in the HTML.
    tint: r.sees(entity) ? entity.visual.tint : null,
    previous: beside(position.previous),
    next: beside(position.next),
  }
}

// One row of crests, which is what the card list holds on a wide screen
// before it wraps.
const NEARBY_COUNT = 5

/** The featured characters filed nearest this one on the route. */
export function nearbyPage(
  id: string,
  bookmark: Bookmark,
  locale: Locale,
): Slot<CharacterView>[] {
  const entity = getCharacter(id)
  if (entity === undefined) {
    return []
  }

  const r = readerFor(bookmark, locale)

  return r
    .nearest(entity, featuredCharacters, NEARBY_COUNT)
    .map((near) => r.slot(near, characterOf))
}

/** What a character's page calls itself, open and under fog. */
const CHARACTER_HEAD: HeadKeys = {
  foggedDescription: 'character.foggedDescription',
  foggedTitle: 'character.foggedTitle',
  pageTitle: 'character.pageTitle',
}
