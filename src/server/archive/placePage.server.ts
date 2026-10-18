import { DRAWINGS } from '~/data/art'
import { gateOf } from '~/data/chapter-table'
import { chartPointOf } from '~/data/chart'
import { reachedOf } from '~/data/dated'
import { getPlace, getShip, placeDossierOf, places } from '~/data/places'
import type { Entity } from '~/data/types'
import type { Locale } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import { sailedBy } from '~/lib/view/chart'
import type {
  PlaceChartView,
  PlaceDetail,
  PlaceDrawing,
  RouteStopView,
  ShipDetail,
  VisitView,
} from '~/lib/view/places'
import type { DocumentHead, RecordView, Slot } from '~/lib/view/records'

import { headFor, type HeadKeys } from './head.server'
import { portOf, reachedShips, shipOf } from './places.server'
import { recordOf } from './project.server'
import { type Reader, readerFor } from './reader.server'

/**
 * A place's own page: the entry the places page used to stack, the map
 * around it, its drawings and the stops either side. A ship's page is served
 * from the same address, with her entry and her drawings. Apart from the
 * places page's module, which it shares the port and the ships with.
 */

/** What a place's page calls itself, open and under fog. */
const PLACE_HEAD: HeadKeys = {
  foggedDescription: 'places.foggedDescription',
  foggedTitle: 'place.foggedTitle',
  pageTitle: 'place.pageTitle',
}

/** What a ship's page calls itself, open and under fog. */
const SHIP_HEAD: HeadKeys = {
  foggedDescription: 'ship.foggedDescription',
  foggedTitle: 'ship.foggedTitle',
  pageTitle: 'place.pageTitle',
}

/** A place's own page: what names it, and what it says. */
export interface PlacePage {
  detail: PlaceDetail
  head: DocumentHead
}

/** A ship's own page: what names her, and what it says. */
export interface ShipPage {
  head: DocumentHead
  ship: ShipDetail
}

/**
 * A place's or a ship's page, or `undefined` for an id the archive files as
 * neither. It returns rather than throws, for the same reason a character's
 * page does: `notFound()` is a router signal, and a signal thrown across an
 * RPC boundary is only an error.
 */
export function placePage(
  id: string,
  bookmark: Bookmark,
  locale: Locale,
): PlacePage | ShipPage | undefined {
  const r = readerFor(bookmark, locale)
  const ship = getShip(id)
  if (ship !== undefined) {
    return shipPage(ship, r)
  }

  const entity = getPlace(id)
  if (entity === undefined) {
    return undefined
  }

  const order = r.order(places)
  const index = order.findIndex((place) => place.id === id)
  const open = r.sees(entity)

  return {
    head: headFor(entity, PLACE_HEAD, r),
    detail: {
      slot: r.slot(entity, portOf),
      index,
      total: order.length,
      previous: neighbourOf(order[index - 1], r),
      next: neighbourOf(order[index + 1], r),
      // Under fog the page places nothing and draws nothing: where the place
      // lies and how it looks are what the fog is for.
      chart: open ? chartOf(entity, order, r) : null,
      drawings: open ? drawingsOf(entity, r) : [],
      visits: open ? visitsOf(entity, r) : [],
    },
  }
}

/**
 * A ship's page: her entry, her fate and the places she reaches as far as
 * the reader has come (`shipOf`), and her drawings. Under fog, her slot's
 * handle and thresholds, and no drawing: the covered page a character or a
 * place has (orchestrator ruling for #676). Nothing on the site links to a
 * ship the reader has not reached, so only a reader who already has her
 * name, typed in the address, lands on it; the page adds the kind and the
 * episode, as a covered character's does.
 */
function shipPage(entity: Entity, r: Reader): ShipPage {
  return {
    head: headFor(entity, SHIP_HEAD, r),
    ship: {
      slot: r.slot(entity, shipOf),
      drawings: r.sees(entity) ? drawingsOf(entity, r) : [],
    },
  }
}

/** A stop beside this one in the reader's order, or `null` past either end. */
function neighbourOf(
  entity: Entity | undefined,
  r: Reader,
): null | Slot<RecordView> {
  return entity === undefined ? null : r.slot(entity, recordOf)
}

/**
 * The route the reader has sailed, as the places page's chart draws it, and
 * where this place is on it. Only the open stops: a stop past the bookmark
 * is counted, never placed.
 */
function chartOf(
  entity: Entity,
  order: Entity[],
  r: Reader,
): null | PlaceChartView {
  const ships = reachedShips(r)
  const route: RouteStopView[] = []
  let here = -1

  for (const place of order) {
    const at = chartPointOf(place.id)
    if (at === null || !r.sees(place)) {
      continue
    }
    if (place.id === entity.id) {
      here = route.length
    }
    route.push({
      at,
      sea: placeDossierOf(place)?.sea ?? null,
      ship: sailedBy(place, ships, r.mode),
      tint: place.visual.tint,
    })
  }

  return here === -1 ? null : (
      { fogged: order.filter((place) => !r.sees(place)).length, here, route }
    )
}

/**
 * The drawings of an open place or ship the reader has reached, oldest first
 * in the reader's unit: its first drawing, then each redrawing whose gate,
 * the later of its own and the record's (`gateOf`), the reader has passed.
 * The same entries `drawingOf` picks the last of, so the last here is the
 * drawing the plate already holds. Empty while only the first is reached:
 * one drawing is not a change.
 */
function drawingsOf(entity: Entity, r: Reader): PlaceDrawing[] {
  const reached = reachedOf(r, entity, 'redrawing')
  if (reached.length === 0) {
    return []
  }

  return [
    {
      strokes: DRAWINGS[entity.visual.art],
      revealedAtEpisode: entity.revealedAtEpisode,
      revealedAtChapter: entity.revealedAtChapter,
    },
    ...reached.map(({ gate, value }) => ({ strokes: value, ...gate })),
  ].toSorted((a, b) => r.threshold(a) - r.threshold(b))
}

/**
 * The later visits to a place the reader has reached, oldest first: each at
 * the later of its own pair and the place's (`gateOf`), so a visit past the
 * bookmark, or its note, is never sent.
 */
function visitsOf(entity: Entity, r: Reader): VisitView[] {
  const reached: VisitView[] = []
  const visits = placeDossierOf(entity)?.visits
  if (visits === undefined) {
    return reached
  }

  for (const visit of visits) {
    const gate = gateOf(visit, entity)
    if (r.sees(gate)) {
      reached.push({ ...gate, note: visit.value[r.locale] })
    }
  }

  return reached
}
