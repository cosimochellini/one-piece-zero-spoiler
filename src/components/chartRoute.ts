import {
  BAND_TOP,
  BELT_TOP,
  FOG_END,
  type Orientation,
  ORIGIN,
  type Point,
  project,
  RED_LINE_X,
  REVERSE_MOUNTAIN,
} from '~/components/chartGeometry'
import type { ChartPoint } from '~/lib/view/chart'

/**
 * The route on the sea chart (owner, #728): its legs through the stops, over
 * Reverse Mountain into the Grand Line and off it on Luffy's own way, each
 * as a smooth curve; and the fog tail past the last stop. Apart from
 * `~/components/chartGeometry`, the world it is drawn on, for length.
 */

/**
 * How a leg of the route is drawn: before the crew has a ship, aboard the
 * first ship or the second, or Luffy's own way where the ship does not sail.
 */
export type Line = 'boat' | 'first' | 'luffy' | 'second'

/** One stop as the route needs it: its point, and the ship that reached it. */
export interface RouteStop {
  at: ChartPoint
  /** Which of the ships the reader has reached sailed here; `null` for none. */
  ship: null | number
}

/** A leg of the route, from one point to the next, by way of `via`. */
export interface Leg {
  from: Point
  line: Line
  to: Point
  via?: Point[]
}

/**
 * The legs of the route through these stops, in the order given. The main
 * line runs from the origin through every stop the ship sails to, over
 * Reverse Mountain on the way into the Grand Line. Luffy's own way branches
 * off the last of them and returns there once the main route resumes;
 * a place the story only shows has no leg at all.
 */
export function legsOf(stops: RouteStop[]): Leg[] {
  let main: Point = ORIGIN
  let previous: ChartPoint | null = null

  return stops.flatMap((stop): Leg[] => {
    if (stop.at.seen === true) {
      return []
    }
    if (stop.at.line === 'luffy') {
      const from = previous?.line === 'luffy' ? previous : main
      previous = stop.at
      return [{ from, to: stop.at, line: 'luffy' }]
    }

    const returning: Leg[] =
      previous?.line === 'luffy' ?
        [{ from: previous, to: main, line: 'luffy' }]
      : []
    const from = main
    main = stop.at
    previous = stop.at
    return [
      ...returning,
      {
        from,
        to: stop.at,
        line: lineOf(stop.ship),
        ...(climbs(from, stop.at) && { via: [REVERSE_MOUNTAIN] }),
      },
    ]
  })
}

/** Whether a leg leaves the Blue above for the Grand Line: Reverse Mountain. */
function climbs(from: Point, to: Point): boolean {
  return from.y < BELT_TOP && to.y >= BAND_TOP && to.x > RED_LINE_X
}

function lineOf(ship: null | number): Line {
  if (ship === null) {
    return 'boat'
  }

  return ship === 0 ? 'first' : 'second'
}

/** The points a leg passes through, in order. */
function pointsOf(leg: Leg): Point[] {
  return [leg.from, ...(leg.via ?? []), leg.to]
}

/** How long a run of points is, end to end. */
function lengthOf(points: Point[]): number {
  let length = 0
  for (let index = 1; index < points.length; index += 1) {
    const a = points[index - 1]
    const b = points[index]
    if (a !== undefined && b !== undefined) {
      length += Math.hypot(b.x - a.x, b.y - a.y)
    }
  }

  return length
}

/**
 * Where each leg starts along the route, as a share of its whole length
 * from the origin: when the leg is drawn in, as the route draws itself.
 */
export function startsOf(legs: Leg[]): number[] {
  const lengths = legs.map((leg) => lengthOf(pointsOf(leg)))
  const total = lengths.reduce((sum, length) => sum + length, 0)
  let start = 0

  return lengths.map((length) => {
    const share = total === 0 ? 0 : start / total
    start += length
    return share
  })
}

const same = (a: Point | undefined, b: Point | undefined): boolean =>
  a !== undefined && b !== undefined && a.x === b.x && a.y === b.y

/** Tenths in a unit: paths and points are written to a tenth. */
const TENTHS = 10

/** A number to a tenth of a unit. */
const tenth = (value: number): number => Math.round(value * TENTHS) / TENTHS

/** A number for a path, to a tenth of a unit. */
const n = (value: number): string => String(tenth(value))

/**
 * How gently the route bends through a stop: Catmull-Rom's own sixth swings
 * wide between lanes, so the route takes a tenth.
 */
const BEND = 10

/** The point at `index`, or the nearest end of the list. */
function pick(list: Point[], index: number): Point {
  return list[Math.min(Math.max(index, 0), list.length - 1)] ?? ORIGIN
}

/**
 * Each leg as a path of its own, in order: a smooth curve through its
 * points (Catmull-Rom), bending towards the legs either side where they
 * join, so the route reads as one line sailed and still draws in leg by leg.
 */
export function pathsOf(legs: Leg[], orientation: Orientation): string[] {
  return legs.map((leg, index) => {
    const before = legs[index - 1]
    const after = legs[index + 1]
    const lead =
      before !== undefined && same(before.to, leg.from) ?
        pointsOf(before).at(BEFORE_LAST)
      : undefined
    const trail =
      after !== undefined && same(after.from, leg.to) ?
        pointsOf(after)[1]
      : undefined

    return curveOf(pointsOf(leg), { lead, trail }, orientation)
  })
}

/** The point before a leg's last: where the next leg bends from. */
const BEFORE_LAST = -2

/** A curve through these points, as drawn, with a point either side to bend to. */
function curveOf(
  points: Point[],
  { lead, trail }: { lead: Point | undefined; trail: Point | undefined },
  orientation: Orientation,
): string {
  const drawn = points.map((point) => project(point, orientation))
  const chain = [
    lead === undefined ? pick(drawn, 0) : project(lead, orientation),
    ...drawn,
    trail === undefined ?
      pick(drawn, drawn.length - 1)
    : project(trail, orientation),
  ]
  const start = pick(drawn, 0)
  let d = `M${n(start.x)} ${n(start.y)}`
  for (let index = 1; index < drawn.length; index += 1) {
    const p0 = pick(chain, index - 1)
    const p1 = pick(chain, index)
    const p2 = pick(chain, index + 1)
    const p3 = pick(chain, index + 1 + 1)
    const c1x = p1.x + (p2.x - p0.x) / BEND
    const c1y = p1.y + (p2.y - p0.y) / BEND
    const c2x = p2.x - (p3.x - p1.x) / BEND
    const c2y = p2.y - (p3.y - p1.y) / BEND
    d += `C${n(c1x)} ${n(c1y)} ${n(c2x)} ${n(c2y)} ${n(p2.x)} ${n(p2.y)}`
  }

  return d
}

/** A straight run through these points, as drawn: the fog tail's. */
export function lineOfPoints(
  points: Point[],
  orientation: Orientation,
): string {
  return points
    .map((point, index) => {
      const drawn = project(point, orientation)
      return `${index === 0 ? 'M' : 'L'}${n(drawn.x)} ${n(drawn.y)}`
    })
    .join('')
}

/**
 * The line the fog tail follows from a stop: over Reverse Mountain if the
 * stop is still in East Blue, then along the middle of the Grand Line to the
 * fog's end. The same line for everyone from the same stop.
 */
export function tailLine(from: Point): Point[] {
  if (from.y < BELT_TOP) {
    return [from, REVERSE_MOUNTAIN, FOG_END]
  }
  const middle = { x: from.x, y: FOG_END.y }

  return same(middle, from) ? [from, FOG_END] : [from, middle, FOG_END]
}

/**
 * The stops under fog, spaced evenly along the tail's line to the fog's
 * end: where they really lie never reaches the page.
 */
export function tailOf(from: Point, count: number): Point[] {
  const line = tailLine(from)
  const total = lengthOf(line)

  return Array.from({ length: count }, (_, index) =>
    along(line, (total * (index + 1)) / count),
  )
}

/** The point a share of the way from `a` to `b`. */
function between(a: Point, b: Point, share: number): Point {
  return {
    x: tenth(a.x + (b.x - a.x) * share),
    y: tenth(a.y + (b.y - a.y) * share),
  }
}

/** The point this far along a run of points, or its end past it. */
function along(line: Point[], distance: number): Point {
  let left = distance
  let a = line[0] ?? FOG_END
  for (const b of line.slice(1)) {
    const length = Math.hypot(b.x - a.x, b.y - a.y)
    if (left <= length) {
      return between(a, b, length === 0 ? 1 : left / length)
    }
    left -= length
    a = b
  }

  return a
}
