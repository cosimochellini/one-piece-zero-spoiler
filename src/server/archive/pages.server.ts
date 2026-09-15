import {
  bookSections,
  dossierOf as characterDossierOf,
  characters,
  chart,
  chartWith,
  featuredCharacters,
  getCharacter,
  nearbyCharacters,
  routePositionOf,
} from '~/data/characters'
import { getEntity } from '~/data/entities'
import { orderByMode } from '~/data/order'
import { placeDossierOf, places } from '~/data/places'
import type { Entity } from '~/data/types'
import type { Locale } from '~/i18n/locales'
import { type Bookmark, modeOf } from '~/lib/progress/episode'
import { isRevealed } from '~/lib/progress/spoiler'
import type {
  CharacterDetail,
  CharacterView,
  ChartView,
  CoveredRecord,
  DocumentHead,
  PortView,
  RecordView,
  RoutePositionView,
  SearchableCharacter,
  ShelfView,
  Slot,
} from '~/lib/view/records'

import { headFor, type HeadKeys } from './head.server'
import {
  characterOf,
  coveredOf,
  factsOf,
  recordOf,
  searchableOf,
  slotOf,
  waypointOf,
} from './project.server'

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
 */

/** The landing chart: arcs, places, ships and the characters in evidence. */
export function chartPage(bookmark: Bookmark, locale: Locale): ChartView {
  const ordered = orderByMode(chart, modeOf(bookmark))

  return {
    open: ordered.flatMap((entity) =>
      isRevealed(entity, bookmark) ? [waypointOf(entity, locale)] : [],
    ),
    covered: ordered.flatMap((entity) =>
      isRevealed(entity, bookmark) ? [] : [coveredOf(entity)],
    ),
    filed: ordered.length,
  }
}

/** The fold of the signal book: the crests, and how much is behind them. */
export type CharactersPage = {
  readonly featuredCovered: readonly CoveredRecord[]
  readonly featuredOpen: readonly SearchableCharacter[]
  readonly shelfCount: number
  /** How many characters the archive files, open or not. */
  readonly filed: number
}

/**
 * The crests, and how many shelves are coming. Awaited by the route: the
 * featured band is the fold, and the pending shelves need a height.
 */
export function charactersPage(
  bookmark: Bookmark,
  locale: Locale,
): CharactersPage {
  const featured = orderByMode(featuredCharacters, modeOf(bookmark))

  return {
    featuredOpen: featured.flatMap((entity) => {
      return isRevealed(entity, bookmark) ?
          [searchableOf(entity, locale, bookmark)]
        : []
    }),
    featuredCovered: featured.flatMap((entity) =>
      isRevealed(entity, bookmark) ? [] : [coveredOf(entity)],
    ),
    shelfCount: bookSections.length,
    filed: characters.length,
  }
}

/** The signal book's shelves, in the order the reader's unit reaches them. */
export function shelvesPage(
  bookmark: Bookmark,
  locale: Locale,
): readonly ShelfView[] {
  const mode = modeOf(bookmark)
  const byArc = new Map(
    bookSections.map((section) => [section.arc.id, section]),
  )

  return orderByMode(
    bookSections.map((section) => section.arc),
    mode,
  ).flatMap((arc) => {
    const section = byArc.get(arc.id)
    if (section === undefined) {
      return []
    }

    const shelved = orderByMode(section.characters, mode)

    return [
      {
        arc: slotOf(arc, bookmark, (entity) => recordOf(entity, locale)),
        total: shelved.length,
        open: shelved.flatMap((entity) => {
          return isRevealed(entity, bookmark) ?
              [searchableOf(entity, locale, bookmark)]
            : []
        }),
        covered: shelved.flatMap((entity) =>
          isRevealed(entity, bookmark) ? [] : [coveredOf(entity)],
        ),
      },
    ]
  })
}

/** A character's own page: what names it, and what it says. */
export type CharacterPage = {
  readonly detail: CharacterDetail
  readonly head: DocumentHead
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

  const revealed = isRevealed(entity, bookmark)
  const dossier = characterDossierOf(entity)

  return {
    head: headFor({ bookmark, entity, keys: CHARACTER_HEAD, locale, revealed }),
    detail: {
      slot:
        revealed ?
          {
            open: true,
            record: {
              ...characterOf(entity, locale),
              summary: entity.summary[locale],
            },
          }
        : { open: false, covered: coveredOf(entity) },
      log: revealed && dossier !== undefined ? dossier.log[locale] : null,
      facts: factsOf(entity, locale, bookmark),
    },
  }
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

  const ordered = chartWith(entity, modeOf(bookmark))
  const position = routePositionOf(entity, ordered)
  const beside = (near: Entity | undefined): null | Slot<RecordView> => {
    return near === undefined ? null : (
        slotOf(near, bookmark, (record) => recordOf(record, locale))
      )
  }

  return {
    index: position.index,
    total: position.total,
    openCount: ordered.filter((record) => isRevealed(record, bookmark)).length,
    // The ring takes the record's colour only once the reader has reached it,
    // so a covered record's colour is not in the HTML.
    tint: isRevealed(entity, bookmark) ? entity.visual.tint : null,
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
): readonly Slot<CharacterView>[] {
  const entity = getCharacter(id)
  if (entity === undefined) {
    return []
  }

  return nearbyCharacters(entity, NEARBY_COUNT).map((near) =>
    slotOf(near, bookmark, (record) => characterOf(record, locale)),
  )
}

/** The ship's log. */
export function placesPage(
  bookmark: Bookmark,
  locale: Locale,
): {
  readonly covered: readonly CoveredRecord[]
  readonly filed: number
  readonly open: readonly PortView[]
} {
  const ordered = orderByMode(places, modeOf(bookmark))

  return {
    filed: ordered.length,
    open: ordered.flatMap((entity) =>
      isRevealed(entity, bookmark) ? [portOf(entity, bookmark, locale)] : [],
    ),
    covered: ordered.flatMap((entity) =>
      isRevealed(entity, bookmark) ? [] : [coveredOf(entity)],
    ),
  }
}

/**
 * One port, with its dossier resolved: the arc named outright (an arc opens
 * no later than any place filed under it, which a data test holds), and each
 * record filed here with its own fog already decided.
 */
export function portOf(
  entity: Entity,
  bookmark: Bookmark,
  locale: Locale,
): PortView {
  const dossier = placeDossierOf(entity)
  const arc = dossier === undefined ? undefined : getEntity(dossier.arc)

  return {
    ...recordOf(entity, locale),
    summary: entity.summary[locale],
    dossier:
      dossier === undefined ? null : (
        {
          sea: dossier.sea,
          form: dossier.form,
          arc: arc === undefined ? null : arc.name[locale],
          landmark: dossier.landmark[locale],
          log: dossier.log[locale],
          filedHere: dossier.filedHere.flatMap<Slot<RecordView>>((filed) => {
            const record = getEntity(filed)
            return record === undefined ?
                []
              : [slotOf(record, bookmark, (found) => recordOf(found, locale))]
          }),
        }
      ),
  }
}

/** What a character's page calls itself, open and under fog. */
const CHARACTER_HEAD: HeadKeys = {
  foggedDescription: 'character.foggedDescription',
  foggedTitle: 'character.foggedTitle',
  pageTitle: 'character.pageTitle',
}
