import type { TranslationKey } from '~/i18n/types'
import type { ChartPoint } from '~/lib/view/chart'
import type { Sea } from '~/lib/view/records'

/**
 * The geometry of the sea chart, apart from any page: the world it is drawn
 * on, how a point turns when the chart stands upright on a phone, which seas
 * a reader has opened, and the legs of the route between the stops. The
 * places page draws the whole chart from it; a place's own page can draw a
 * stretch of it the same way.
 *
 * Schematic, not geographic. The chart lies across in a 1200×600 box: the
 * Red Line a hatched band at the left edge, where Reverse Mountain is, and
 * down the middle, where Mary Geoise is; the Grand Line a band across the
 * middle with a Calm Belt either side, the first half to the left of the
 * Red Line and the New World to the right; the four Blues the quarters above
 * and below. Every point in `~/data/chart` is in this box.
 */

/** A point in the chart's box. */
export interface Point {
  x: number
  y: number
}

/** A rectangle in the chart's box. */
export interface Rect extends Point {
  height: number
  width: number
}

/**
 * Across on a wide screen; down on a phone, where the route runs downward
 * and the Red Line lies across the page.
 */
export type Orientation = 'across' | 'down'

export const CHART_WIDTH = 1200
export const CHART_HEIGHT = 600

/**
 * How much longer the chart is upright than across. A phone scrolls, so the
 * route gets the room its stops need for a thumb.
 */
const STRETCH = 1.5

/** The chart's box in this orientation: its width and height. */
export function boxOf(orientation: Orientation): Point {
  return orientation === 'across' ?
      { x: CHART_WIDTH, y: CHART_HEIGHT }
    : { x: CHART_HEIGHT, y: CHART_WIDTH * STRETCH }
}

/** A point of the chart as it is drawn in this orientation. */
export function project(point: Point, orientation: Orientation): Point {
  return orientation === 'across' ?
      { x: point.x, y: point.y }
    : { x: point.y, y: point.x * STRETCH }
}

/** A rectangle of the chart as it is drawn in this orientation. */
export function projectRect(rect: Rect, orientation: Orientation): Rect {
  return orientation === 'across' ? rect : (
      {
        x: rect.y,
        y: rect.x * STRETCH,
        width: rect.height,
        height: rect.width * STRETCH,
      }
    )
}

/**
 * Where the route starts, before the first stop: in East Blue, by the first
 * two stops. With no bookmark it is all the chart shows, a ring with no name.
 */
export const ORIGIN: Point = { x: 520, y: 100 }

/**
 * Where the fog tail ends: the far end of the Grand Line, whatever the
 * reader has reached. It is the same point for everyone, so the tail says
 * nothing about where the stops under fog lie.
 */
export const FOG_END: Point = { x: 1185, y: 270 }

/** One part of the world, drawn and named once the reader has opened it. */
export type Region =
  | 'calm-belt'
  | 'east-blue'
  | 'grand-line'
  | 'new-world'
  | 'new-world-calm-belt'
  | 'north-blue'
  | 'red-line'
  | 'south-blue'
  | 'west-blue'

const EDGE = 14
const RED_LINE_X = 588
const RED_LINE_WIDTH = 24
const BELT_TOP = 190
const BAND_TOP = 220
const BAND_BOTTOM = 380
const BELT_BOTTOM = 410
const BELT = BAND_TOP - BELT_TOP
const BAND = BAND_BOTTOM - BAND_TOP
const FIRST_HALF = RED_LINE_X - EDGE
const NEW_WORLD_X = RED_LINE_X + RED_LINE_WIDTH
const SECOND_HALF = CHART_WIDTH - NEW_WORLD_X
const BLUE_BOTTOM = CHART_HEIGHT - BELT_BOTTOM

/** The rectangles each region is made of, across. */
export const REGIONS: Record<Region, Rect[]> = {
  'east-blue': [{ x: EDGE, y: 0, width: FIRST_HALF, height: BELT_TOP }],
  'south-blue': [
    { x: EDGE, y: BELT_BOTTOM, width: FIRST_HALF, height: BLUE_BOTTOM },
  ],
  'north-blue': [
    { x: NEW_WORLD_X, y: 0, width: SECOND_HALF, height: BELT_TOP },
  ],
  'west-blue': [
    { x: NEW_WORLD_X, y: BELT_BOTTOM, width: SECOND_HALF, height: BLUE_BOTTOM },
  ],
  'grand-line': [{ x: EDGE, y: BAND_TOP, width: FIRST_HALF, height: BAND }],
  'new-world': [
    { x: NEW_WORLD_X, y: BAND_TOP, width: SECOND_HALF, height: BAND },
  ],
  'calm-belt': [
    { x: EDGE, y: BELT_TOP, width: FIRST_HALF, height: BELT },
    { x: EDGE, y: BAND_BOTTOM, width: FIRST_HALF, height: BELT },
  ],
  'new-world-calm-belt': [
    { x: NEW_WORLD_X, y: BELT_TOP, width: SECOND_HALF, height: BELT },
    { x: NEW_WORLD_X, y: BAND_BOTTOM, width: SECOND_HALF, height: BELT },
  ],
  'red-line': [
    { x: 0, y: 0, width: EDGE, height: CHART_HEIGHT },
    { x: RED_LINE_X, y: 0, width: RED_LINE_WIDTH, height: CHART_HEIGHT },
  ],
}

/**
 * What entering each sea opens. Reverse Mountain, on the way into the Grand
 * Line, shows and names the Red Line, both Calm Belts and the four Blues
 * (owner, #674), so the first stop in the Grand Line opens all of them. The
 * New World opens at its own first stop.
 */
const OPENS: Record<Sea, Region[]> = {
  'east-blue': ['east-blue'],
  'grand-line': [
    'east-blue',
    'grand-line',
    'calm-belt',
    'red-line',
    'north-blue',
    'west-blue',
    'south-blue',
  ],
  'new-world': ['new-world', 'new-world-calm-belt'],
  'calm-belt': ['calm-belt'],
  'red-line': ['red-line'],
}

/** The regions a reader who has entered these seas may see. */
export function regionsFor(seas: Iterable<Sea>): Set<Region> {
  return new Set([...seas].flatMap((sea) => OPENS[sea]))
}

/** A region's name, and where it is written, across. */
export interface RegionLabel {
  at: Point
  key: TranslationKey
  /** A band, named along its length when it stands upright. */
  upright?: true
}

/**
 * One name per region, clear of the route and the ships: the Calm Belt is
 * named on the first half's southern belt only.
 */
export const LABELS: Partial<Record<Region, RegionLabel>> = {
  'east-blue': { key: 'sea.east-blue', at: { x: 90, y: 40 } },
  'south-blue': { key: 'sea.south-blue', at: { x: 250, y: 520 } },
  'north-blue': { key: 'sea.north-blue', at: { x: 900, y: 95 } },
  'west-blue': { key: 'sea.west-blue', at: { x: 900, y: 505 } },
  'grand-line': {
    key: 'sea.grand-line',
    at: { x: 150, y: 232 },
    upright: true,
  },
  'new-world': { key: 'sea.new-world', at: { x: 900, y: 232 }, upright: true },
  'calm-belt': { key: 'sea.calm-belt', at: { x: 400, y: 395 }, upright: true },
  'red-line': { key: 'sea.red-line', at: { x: 600, y: 560 } },
}

/**
 * How a leg of the route is drawn: before the crew has a ship, aboard the
 * first ship or the second, or on a branch the ship does not sail.
 */
export type Line = 'boat' | 'branch' | 'first' | 'second'

/** One stop as the route needs it: its point, and the ship that reached it. */
export interface RouteStop {
  at: ChartPoint
  /** Which of the ships the reader has reached sailed here; `null` for none. */
  ship: null | number
}

/** A straight leg of the route, from one point to the next. */
export interface Leg {
  from: Point
  line: Line
  to: Point
}

/**
 * The legs of the route through these stops, in the order given. The main
 * line runs from the origin through every stop the ship sails to; a detour
 * branches off the last of them, and the main line goes on from there.
 */
export function legsOf(stops: RouteStop[]): Leg[] {
  let main: Point = ORIGIN
  let previous: ChartPoint | null = null

  return stops.map((stop) => {
    if (stop.at.detour === true) {
      const from = previous?.detour === true ? previous : main
      previous = stop.at
      return { from, to: stop.at, line: 'branch' }
    }

    const from = main
    main = stop.at
    previous = stop.at
    return { from, to: stop.at, line: lineOf(stop.ship) }
  })
}

function lineOf(ship: null | number): Line {
  if (ship === null) {
    return 'boat'
  }

  return ship === 0 ? 'first' : 'second'
}

/**
 * Where each leg starts along the route, as a share of its whole length
 * from the origin: when the leg is drawn in, as the route draws itself.
 */
export function startsOf(legs: Leg[]): number[] {
  const lengths = legs.map(({ from, to }) =>
    Math.hypot(to.x - from.x, to.y - from.y),
  )
  const total = lengths.reduce((sum, length) => sum + length, 0)
  let start = 0

  return lengths.map((length) => {
    const share = total === 0 ? 0 : start / total
    start += length
    return share
  })
}

/** The legs as one path, in order. */
export function pathOf(legs: Leg[], orientation: Orientation): string {
  return legs
    .map(({ from, to }) => {
      const a = project(from, orientation)
      const b = project(to, orientation)
      return `M${String(a.x)} ${String(a.y)}L${String(b.x)} ${String(b.y)}`
    })
    .join('')
}

/**
 * The stops under fog, spaced evenly from the last open stop to the fog's
 * end: where they really lie never reaches the page.
 */
export function tailOf(from: Point, count: number): Point[] {
  return Array.from({ length: count }, (_, index) => {
    const step = (index + 1) / count

    return {
      x: from.x + (FOG_END.x - from.x) * step,
      y: from.y + (FOG_END.y - from.y) * step,
    }
  })
}

/** Which side of a point something is set on. */
export type Side = 'above' | 'below' | 'left' | 'right'

/** Half the box: a label goes towards the half with more room. */
const MIDDLE = 0.5

/**
 * Which side of a point a label goes on, as drawn, so it stays on the chart
 * and off the route. Across, the route runs sideways, so a label goes below
 * a point in the upper half and above one in the lower. Upright, it runs
 * down the page, so a label goes beside the point, towards the wider side.
 */
export function sideOf(point: Point, orientation: Orientation): Side {
  const drawn = project(point, orientation)
  const box = boxOf(orientation)

  if (orientation === 'down') {
    return drawn.x < box.x * MIDDLE ? 'right' : 'left'
  }

  return drawn.y < box.y * MIDDLE ? 'below' : 'above'
}

/** The other side. */
export function across(side: Side): Side {
  const opposite: Record<Side, Side> = {
    above: 'below',
    below: 'above',
    left: 'right',
    right: 'left',
  }

  return opposite[side]
}

const PERCENT = 100
/** Two decimals of a percent: a hundredth of a pixel on the widest chart. */
const DECIMALS = 2

/** A share of the box, as a CSS percentage. */
function percent(value: number, of: number): string {
  return `${((value / of) * PERCENT).toFixed(DECIMALS)}%`
}

/** Where a point is drawn, as CSS `left` and `top` over the drawing. */
export function placeOf(
  point: Point,
  orientation: Orientation,
): { left: string; top: string } {
  const drawn = project(point, orientation)
  const box = boxOf(orientation)

  return { left: percent(drawn.x, box.x), top: percent(drawn.y, box.y) }
}

/** How far words stand off their point. */
const GAP = '1rem'

/**
 * The CSS `transform` for words set beside a point: on the given side, or
 * centred on it with none. Above, below or centred, they are pulled left in
 * proportion to how far right the point is, so words at the edge never run
 * off the chart.
 */
export function pullOf(
  point: Point,
  orientation: Orientation,
  side: null | Side,
): string {
  const pull = `-${placeOf(point, orientation).left}`
  const at: Record<'none' | Side, string> = {
    above: `${pull}, calc(-100% - ${GAP})`,
    below: `${pull}, ${GAP}`,
    left: `calc(-100% - ${GAP}), -50%`,
    right: `${GAP}, -50%`,
    none: `${pull}, -50%`,
  }

  return `translate(${at[side ?? 'none']})`
}

/** The stop an arrow key moves to from this one, or `null` for another key. */
export function nextOf(
  key: string,
  from: number,
  count: number,
): null | number {
  switch (key) {
    case 'ArrowDown':
    case 'ArrowRight': {
      return Math.min(from + 1, count - 1)
    }
    case 'ArrowLeft':
    case 'ArrowUp': {
      return Math.max(from - 1, 0)
    }
    case 'End': {
      return count - 1
    }
    case 'Home': {
      return 0
    }
    default: {
      return null
    }
  }
}
