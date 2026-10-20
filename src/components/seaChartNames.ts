import {
  across,
  BELT_BOTTOM,
  BELT_TOP,
  type Orientation,
  ORIGIN,
  type Point,
  type Rect,
  type Side,
  sideOf,
} from '~/components/chartGeometry'
import { type NameSpot, scalesOf } from '~/components/chartLabels'
import { openingView } from '~/components/chartView'
import type { ChartPoint } from '~/lib/view/chart'
import type { SagaPick, StopView } from '~/lib/view/places'
import type { TintId } from '~/lib/view/records'

/**
 * What the sea chart writes on itself (owner, #728): every open stop's name,
 * each saga's name over its stretch, and the window it opens on, worked out
 * from the open stops alone.
 */

/**
 * Where an open stop is drawn. Every place has a point; the origin stands in
 * for the `null` a record that is not a place would carry.
 */
export function pointOf(port: StopView): ChartPoint {
  return port.chart ?? ORIGIN
}

/** A stop the ship sails to: not Luffy's own way, not a place only shown. */
export function isOnRoute(point: ChartPoint): boolean {
  return point.line === undefined && point.seen !== true
}

/**
 * The hue each saga's stops and name are drawn in, by its place in route
 * order from 1: neighbours never share a family, and red stays Luffy's own
 * line. Gold is the route's, so no saga takes it.
 */
const SAGA_TINTS: TintId[] = [
  'azure',
  'ocher',
  'ice',
  'blue',
  'violet',
  'orange',
  'teal',
  'pink',
  'lavender',
  'vermilion',
  'green',
  'sand',
]

/** A saga's hue, by its place in route order from 1. */
export function sagaTintOf(saga: number): TintId {
  return SAGA_TINTS[(saga - 1) % SAGA_TINTS.length] ?? 'azure'
}

/** Pixels per unit of the chart as drawn a name shows from, each way up. */
export type ShowsFrom = Record<Orientation, number>

/** An open stop's name on the chart, and the scale it shows from. */
export interface StopName {
  from: ShowsFrom
  port: StopView
  side: Record<Orientation, Side>
}

/** A saga's name, written over its stretch of the route. */
export interface SagaName {
  at: Point
  from: ShowsFrom
  number: number
  tint: TintId
  title: string
}

/** About how many letters the reader's own label takes the room of. */
const HERE_LETTERS = 20
/** How many letters' room a saga's name takes: capitals, spaced wide. */
const SAGA_LETTER = 1.5
/** The two Calm Belts: the sagas beside the Grand Line take turns. */
const NORTH_AND_SOUTH = 2
/** How far past a Calm Belt a saga's name beside the Grand Line runs. */
const PAST_BELT = 16
const NORTH_OF_BELT = BELT_TOP - PAST_BELT
const SOUTH_OF_BELT = BELT_BOTTOM + PAST_BELT
/** The Grand Line's middle, down the chart. */
const BAND_MIDDLE = (BELT_TOP + BELT_BOTTOM) / NORTH_AND_SOUTH
/** How far over its stops a saga in a Blue is named. */
const OVER = 34

/**
 * The side a stop's name goes on. Across, away from the middle of the band,
 * towards the open sea, so names of neighbours on different lanes face
 * apart. Upright, the chart is narrow: towards its wider side, as the
 * reader's own label does, so no name runs off its edge.
 */
function nameSideOf(point: Point, orientation: Orientation): Side {
  const side = sideOf(point, orientation)

  return orientation === 'across' ? across(side) : side
}

/** The open stops other than the reader's, each saga's first stop first. */
function claimOrder(open: StopView[], here: null | StopView): StopView[] {
  const first: StopView[] = []
  const rest: StopView[] = []
  for (const [index, port] of open.entries()) {
    if (port === here) {
      continue
    }
    if (open[index - 1]?.saga === port.saga) {
      rest.push(port)
    } else {
      first.push(port)
    }
  }

  return [...first, ...rest]
}

/** A saga's name, and where it goes. */
interface Placed {
  at: Point
  saga: SagaPick
}

/** Every name's spot, in the order they claim room. */
function spotsOf(
  { here, ordered, placed }: Claims,
  orientation: Orientation,
): NameSpot[] {
  const spots: NameSpot[] = []
  if (here !== null) {
    spots.push({
      at: pointOf(here),
      length: HERE_LETTERS,
      side: sideOf(pointOf(here), orientation),
    })
  }
  for (const port of ordered) {
    spots.push({
      at: pointOf(port),
      length: port.name.length,
      side: nameSideOf(pointOf(port), orientation),
    })
  }
  for (const { at, saga } of placed) {
    spots.push({
      at,
      length: Math.ceil(saga.title.length * SAGA_LETTER),
      side: null,
      upright: orientation === 'down',
    })
  }

  return spots
}

/** What claims room on the chart: the reader's label, stops, then sagas. */
interface Claims {
  here: null | StopView
  ordered: StopView[]
  placed: Placed[]
}

/**
 * Every name on the chart and the scale it shows from. They claim room in
 * order: the reader's own label (`Here`), the first stop of each saga, the
 * other stops in route order, then the sagas, which give way to every stop.
 */
export function namesOf(
  open: StopView[],
  here: null | StopView,
  sagas: SagaPick[],
): { sagaNames: SagaName[]; stopNames: StopName[] } {
  const claims = {
    here,
    ordered: claimOrder(open, here),
    placed: placeSagas(open, sagas),
  }
  const dots = open.map((port) => pointOf(port))
  const lead = here === null ? 0 : 1
  const wide = scalesOf(spotsOf(claims, 'across'), dots, 'across').slice(lead)
  const tall = scalesOf(spotsOf(claims, 'down'), dots, 'down').slice(lead)
  const from = (index: number): ShowsFrom => ({
    across: wide[index] ?? Infinity,
    down: tall[index] ?? Infinity,
  })

  return {
    stopNames: claims.ordered.map((port, index) => ({
      port,
      from: from(index),
      side: {
        across: nameSideOf(pointOf(port), 'across'),
        down: nameSideOf(pointOf(port), 'down'),
      },
    })),
    sagaNames: claims.placed.map(({ at, saga }, index) => ({
      at,
      from: from(claims.ordered.length + index),
      number: saga.number,
      tint: sagaTintOf(saga.number),
      title: saga.title,
    })),
  }
}

/** The points of the open stops filed under a saga. */
function pointsIn(open: StopView[], saga: number): Point[] {
  const points: Point[] = []
  for (const port of open) {
    if (port.saga === saga) {
      points.push(pointOf(port))
    }
  }

  return points
}

/**
 * Where each saga's name goes, over the middle of its open stops: in East
 * Blue, above them, clear of the Grand Line's sagas; beside the Grand Line,
 * just past its Calm Belts, north and south in turn, so two sagas side by
 * side keep apart.
 */
function placeSagas(open: StopView[], sagas: SagaPick[]): Placed[] {
  const placed: Placed[] = []
  for (const saga of sagas) {
    const points = pointsIn(open, saga.number)
    if (points.length > 0) {
      placed.push({ at: sagaSpotOf(points, saga.number), saga })
    }
  }

  return placed
}

/** Where a saga's name goes, given its stops' points. */
function sagaSpotOf(points: Point[], saga: number): Point {
  const x = points.reduce((sum, point) => sum + point.x, 0) / points.length
  if (points.every((point) => point.y < BELT_TOP)) {
    return { x, y: Math.min(...points.map((point) => point.y)) - OVER }
  }

  return { x, y: saga % NORTH_AND_SOUTH === 0 ? NORTH_OF_BELT : SOUTH_OF_BELT }
}

/** Room left past the sagas' names at the window's top and bottom. */
const PAST_NAMES = 14

/**
 * The window the chart opens on: every open stop of the reader's saga, the
 * reader's own stop at its middle across. In the Grand Line it takes in the
 * band, both Calm Belts and the sagas' names past them, the band's middle at
 * the window's.
 */
export function openingOf(open: StopView[], here: null | StopView): Rect {
  if (here === null) {
    return openingView([], null)
  }

  const at = pointOf(here)
  const points = pointsIn(open, here.saga)
  const band =
    at.y < BELT_TOP ?
      []
    : [
        { x: at.x, y: NORTH_OF_BELT - PAST_NAMES },
        { x: at.x, y: SOUTH_OF_BELT + PAST_NAMES },
      ]

  return openingView(
    [...points, ...band],
    band.length === 0 ? at : { x: at.x, y: BAND_MIDDLE },
  )
}
