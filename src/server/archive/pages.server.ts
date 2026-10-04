import {
  bookSections,
  dossierOf as characterDossierOf,
  characters,
  chartWith,
  featuredCharacters,
  getCharacter,
  nearbyCharacters,
  routePositionOf,
} from '~/data/characters'
import { getEntity } from '~/data/entities'
import { orderByMode } from '~/data/order'
import {
  placeDossierOf,
  places,
  type ShipDossier,
  shipDossierOf,
  ships,
} from '~/data/places'
import { type Reveal, reveal } from '~/data/reveal'
import type { Entity } from '~/data/types'
import type { Locale } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type {
  CharacterDetail,
  CharacterView,
  CoveredRecord,
  DocumentHead,
  PortView,
  RecordView,
  RoutePositionView,
  SearchableCharacter,
  ShelfView,
  ShipView,
  Slot,
} from '~/lib/view/records'

import { chronicleOf } from './chronicle.server'
import { headFor, type HeadKeys } from './head.server'
import {
  characterOf,
  coveredOf,
  factsOf,
  recordOf,
  searchableOf,
  slotOf,
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
  const at = reveal(bookmark)
  const featured = orderByMode(featuredCharacters, at.mode)

  return {
    featuredOpen: featured.flatMap((entity) =>
      at.sees(entity) ? [searchableOf(entity, locale, at)] : [],
    ),
    featuredCovered: featured.flatMap((entity) =>
      at.sees(entity) ? [] : [coveredOf(entity)],
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
  const at = reveal(bookmark)
  const byArc = new Map(
    bookSections.map((section) => [section.arc.id, section]),
  )

  return orderByMode(
    bookSections.map((section) => section.arc),
    at.mode,
  ).flatMap((arc) => {
    const section = byArc.get(arc.id)
    if (section === undefined) {
      return []
    }

    const shelved = orderByMode(section.characters, at.mode)

    return [
      {
        arc: slotOf(arc, at, (entity) => recordOf(entity, locale, at)),
        total: shelved.length,
        open: shelved.flatMap((entity) =>
          at.sees(entity) ? [searchableOf(entity, locale, at)] : [],
        ),
        covered: shelved.flatMap((entity) =>
          at.sees(entity) ? [] : [coveredOf(entity)],
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
  const at = reveal(bookmark)
  const entity = getCharacter(id)
  if (entity === undefined) {
    return undefined
  }

  const revealed = at.sees(entity)
  const dossier = characterDossierOf(entity)

  return {
    head: headFor({ at, entity, keys: CHARACTER_HEAD, locale, revealed }),
    detail: {
      slot:
        revealed ?
          {
            open: true,
            record: {
              ...characterOf(entity, locale, at),
              summary: entity.summary[locale],
            },
          }
        : { open: false, covered: coveredOf(entity) },
      log: revealed && dossier !== undefined ? dossier.log[locale] : null,
      facts: factsOf(entity, locale, at),
      chronicle: chronicleOf(entity, locale, at),
    },
  }
}

/** Where a character sits on the route, and the two records beside them. */
export function routePosition(
  id: string,
  bookmark: Bookmark,
  locale: Locale,
): RoutePositionView | undefined {
  const at = reveal(bookmark)
  const entity = getCharacter(id)
  if (entity === undefined) {
    return undefined
  }

  const ordered = chartWith(entity, at.mode)
  const position = routePositionOf(entity, ordered)
  const beside = (near: Entity | undefined): null | Slot<RecordView> => {
    return near === undefined ? null : (
        slotOf(near, at, (record) => recordOf(record, locale, at))
      )
  }

  return {
    index: position.index,
    total: position.total,
    openCount: ordered.filter((record) => at.sees(record)).length,
    // The ring takes the record's colour only once the reader has reached it,
    // so a covered record's colour is not in the HTML.
    tint: at.sees(entity) ? entity.visual.tint : null,
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
  const at = reveal(bookmark)
  const entity = getCharacter(id)
  if (entity === undefined) {
    return []
  }

  return nearbyCharacters(entity, NEARBY_COUNT).map((near) =>
    slotOf(near, at, (record) => characterOf(record, locale, at)),
  )
}

/** The ship's log, and the ships that carry it. */
export function placesPage(
  bookmark: Bookmark,
  locale: Locale,
): {
  readonly covered: readonly CoveredRecord[]
  readonly filed: number
  readonly open: readonly PortView[]
  readonly ships: readonly ShipView[]
} {
  const at = reveal(bookmark)
  const ordered = orderByMode(places, at.mode)

  return {
    // Only the ships the reader has reached: a covered second ship would
    // tell a reader at the start that the first one does not last.
    ships: orderByMode(ships, at.mode).flatMap((entity) => {
      const dossier = shipDossierOf(entity)
      return dossier !== undefined && at.sees(entity) ?
          [shipOf({ at, dossier, entity, locale })]
        : []
    }),
    filed: ordered.length,
    open: ordered.flatMap((entity) =>
      at.sees(entity) ? [portOf(entity, at, locale)] : [],
    ),
    covered: ordered.flatMap((entity) =>
      at.sees(entity) ? [] : [coveredOf(entity)],
    ),
  }
}

/**
 * One port, with its dossier resolved: the arc named outright (an arc opens
 * no later than any place filed under it, which a data test holds), and each
 * record filed here with its own fog already decided.
 */
export function portOf(entity: Entity, at: Reveal, locale: Locale): PortView {
  const dossier = placeDossierOf(entity)
  const arc = dossier === undefined ? undefined : getEntity(dossier.arc)

  return {
    ...recordOf(entity, locale, at),
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
              : [slotOf(record, at, (found) => recordOf(found, locale, at))]
          }),
        }
      ),
  }
}

/**
 * One ship, with her entry resolved: the place she is received at named
 * outright (it opens no later than the ship, which a data test holds), and
 * the latest fate and the places the reader has reached, and nothing later.
 */
function shipOf({
  at,
  dossier,
  entity,
  locale,
}: {
  readonly at: Reveal
  readonly dossier: ShipDossier
  readonly entity: Entity
  readonly locale: Locale
}): ShipView {
  const fate = at.latest(dossier.fate, entity)?.[locale]

  return {
    ...recordOf(entity, locale, at),
    summary: entity.summary[locale],
    dossier: {
      builder: dossier.builder[locale],
      launched: getEntity(dossier.launched)?.name[locale] ?? null,
      log: dossier.log[locale],
      ...(fate !== undefined && { fate }),
      ports: (dossier.ports ?? []).flatMap((arrival) => {
        const place = getEntity(arrival.place)
        return place !== undefined && at.sees(place) ?
            [recordOf(place, locale, at)]
          : []
      }),
    },
  }
}

/** What a character's page calls itself, open and under fog. */
const CHARACTER_HEAD: HeadKeys = {
  foggedDescription: 'character.foggedDescription',
  foggedTitle: 'character.foggedTitle',
  pageTitle: 'character.pageTitle',
}
