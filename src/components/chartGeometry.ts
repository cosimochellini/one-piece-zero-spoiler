import type { TranslationKey } from '~/i18n/types'
import type { Sea } from '~/lib/view/records'

/**
 * The geometry of the sea chart, apart from any page: the world it is drawn
 * on, how a point turns when the chart stands upright on a phone, which seas
 * a reader has opened, and the legs of the route between the stops. The
 * places page draws the whole chart from it; a place's own page draws a
 * stretch of it the same way.
 *
 * The world as Oda draws it, in a 1600×800 box: the Red Line a continent
 * standing upright down the middle, where Mary Geoise is, and at both edges,
 * where Reverse Mountain is; the Grand Line a band across the middle with a
 * Calm Belt either side, Paradise to the right of the middle and the New
 * World to the left; North Blue and East Blue above it, West Blue and South
 * Blue below, East and South on Paradise's side (owner, #728). The route
 * runs from East Blue up to Reverse Mountain at the right edge, then right
 * to left. Every point in `~/data/series/one-piece/chart` is in this box.
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

export const CHART_WIDTH = 1600
export const CHART_HEIGHT = 800

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

/**
 * A point of the chart as it is drawn in this orientation. Upright, the
 * right edge, where the route enters the Grand Line, is the top.
 */
export function project(point: Point, orientation: Orientation): Point {
  return orientation === 'across' ?
      { x: point.x, y: point.y }
    : { x: point.y, y: (CHART_WIDTH - point.x) * STRETCH }
}

/** A rectangle of the chart as it is drawn in this orientation. */
export function projectRect(rect: Rect, orientation: Orientation): Rect {
  return orientation === 'across' ? rect : (
      {
        x: rect.y,
        y: (CHART_WIDTH - rect.x - rect.width) * STRETCH,
        width: rect.height,
        height: rect.width * STRETCH,
      }
    )
}

/**
 * Where the route starts, before the first stop: in East Blue, by the first
 * two stops. With no bookmark it is all the chart shows, a ring with no name.
 */
export const ORIGIN: Point = { x: 860, y: 130 }

/**
 * Reverse Mountain, where the Red Line's right edge meets the Grand Line:
 * the route climbs it from East Blue into the Grand Line.
 */
export const REVERSE_MOUNTAIN: Point = { x: 1588, y: 400 }

/**
 * Where the fog tail ends: the far end of the New World, at the left edge,
 * whatever the reader has reached. It is the same point for everyone, so the
 * tail says nothing about where the stops under fog lie.
 */
export const FOG_END: Point = { x: 44, y: 400 }

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

/** Half of something: the middle of a length. */
const HALF = 0.5

/** How wide the Red Line stands at either edge, and down the middle. */
const EDGE = 24
const MIDDLE_WIDTH = 40
export const RED_LINE_X = (CHART_WIDTH - MIDDLE_WIDTH) * HALF
const PARADISE_X = RED_LINE_X + MIDDLE_WIDTH
const HALF_WIDTH = RED_LINE_X - EDGE
export const BELT_TOP = 250
export const BAND_TOP = 290
const BAND_BOTTOM = 510
export const BELT_BOTTOM = 550
const BELT = BAND_TOP - BELT_TOP
const BAND = BAND_BOTTOM - BAND_TOP
const BLUE_BOTTOM = CHART_HEIGHT - BELT_BOTTOM

/** The rectangles each region is made of, across. */
export const REGIONS: Record<Region, Rect[]> = {
  'north-blue': [{ x: EDGE, y: 0, width: HALF_WIDTH, height: BELT_TOP }],
  'east-blue': [{ x: PARADISE_X, y: 0, width: HALF_WIDTH, height: BELT_TOP }],
  'west-blue': [
    { x: EDGE, y: BELT_BOTTOM, width: HALF_WIDTH, height: BLUE_BOTTOM },
  ],
  'south-blue': [
    { x: PARADISE_X, y: BELT_BOTTOM, width: HALF_WIDTH, height: BLUE_BOTTOM },
  ],
  'grand-line': [
    { x: PARADISE_X, y: BAND_TOP, width: HALF_WIDTH, height: BAND },
  ],
  'new-world': [{ x: EDGE, y: BAND_TOP, width: HALF_WIDTH, height: BAND }],
  'calm-belt': [
    { x: PARADISE_X, y: BELT_TOP, width: HALF_WIDTH, height: BELT },
    { x: PARADISE_X, y: BAND_BOTTOM, width: HALF_WIDTH, height: BELT },
  ],
  'new-world-calm-belt': [
    { x: EDGE, y: BELT_TOP, width: HALF_WIDTH, height: BELT },
    { x: EDGE, y: BAND_BOTTOM, width: HALF_WIDTH, height: BELT },
  ],
  'red-line': [
    { x: 0, y: 0, width: EDGE, height: CHART_HEIGHT },
    { x: RED_LINE_X, y: 0, width: MIDDLE_WIDTH, height: CHART_HEIGHT },
    { x: CHART_WIDTH - EDGE, y: 0, width: EDGE, height: CHART_HEIGHT },
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
 * One name per region, clear of the route and the ships: in the open sea of
 * each Blue, and along a Calm Belt for the Grand Line's halves and the Calm
 * Belt itself, where the sagas' names leave room (`sagaNamesOf`).
 */
export const LABELS: Partial<Record<Region, RegionLabel>> = {
  'east-blue': { key: 'sea.east-blue', at: { x: 1480, y: 36 } },
  'north-blue': { key: 'sea.north-blue', at: { x: 400, y: 125 } },
  'west-blue': { key: 'sea.west-blue', at: { x: 400, y: 675 } },
  'south-blue': { key: 'sea.south-blue', at: { x: 1200, y: 675 } },
  'grand-line': {
    key: 'sea.grand-line',
    at: { x: 1200, y: (BELT_TOP + BAND_TOP) * HALF },
    upright: true,
  },
  'new-world': {
    key: 'sea.new-world',
    at: { x: 400, y: (BELT_TOP + BAND_TOP) * HALF },
    upright: true,
  },
  'calm-belt': {
    key: 'sea.calm-belt',
    at: { x: 1200, y: (BAND_BOTTOM + BELT_BOTTOM) * HALF },
    upright: true,
  },
  'red-line': { key: 'sea.red-line', at: { x: 800, y: 700 }, upright: true },
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

/**
 * Where a point is drawn in the window (`view`, as drawn), as CSS `left` and
 * `top` over the frame: what stands outside the world, a peek, is placed so.
 */
export function placeIn(
  point: Point,
  orientation: Orientation,
  view: Rect,
): { left: string; top: string } {
  const drawn = project(point, orientation)

  return {
    left: percent(drawn.x - view.x, view.width),
    top: percent(drawn.y - view.y, view.height),
  }
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

/** The whole chart in this orientation, as drawn: the window unzoomed. */
export function wholeOf(orientation: Orientation): Rect {
  const box = boxOf(orientation)

  return { x: 0, y: 0, width: box.x, height: box.y }
}

/**
 * The CSS `transform` for words set beside a point: on the given side, or
 * centred on it with none. Above, below or centred, they are pulled left in
 * proportion to how far right the point is on the chart, so words at the
 * edge never run off it.
 */
export function pullOf(
  point: Point,
  orientation: Orientation,
  side: null | Side,
): string {
  return pullIn(point, side, { orientation, view: wholeOf(orientation) })
}

/** As `pullOf`, in proportion to where the point is in a zoomed window. */
export function pullIn(
  point: Point,
  side: null | Side,
  { orientation, view }: { orientation: Orientation; view: Rect },
): string {
  const drawn = project(point, orientation)
  const share = Math.min(Math.max(drawn.x - view.x, 0), view.width)
  const pull = `-${percent(share, view.width)}`
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

/** The least of the chart a stretch shows, across: room for a stop each side. */
const CROP: Point = { x: 360, y: 240 }
/** The sea left around the points a stretch frames, both sides together. */
const CROP_MARGINS = 120

/**
 * The part of the chart that frames these points, across: their bounds with
 * a margin of sea, at least `CROP` and in its proportions, and kept inside
 * the chart. A place's own page draws this stretch of the route.
 */
export function cropAround(points: Point[]): Rect {
  const xs = points.map(({ x }) => x)
  const ys = points.map(({ y }) => y)
  const left = Math.min(...xs)
  const top = Math.min(...ys)
  const right = Math.max(...xs)
  const bottom = Math.max(...ys)
  const ratio = CROP.x / CROP.y
  const tall = Math.max(bottom - top + CROP_MARGINS, CROP.y)
  const width = Math.min(
    Math.max(right - left + CROP_MARGINS, CROP.x, tall * ratio),
    CHART_WIDTH,
  )
  const height = Math.min(width / ratio, CHART_HEIGHT)
  const inside = (centre: number, size: number, room: number): number =>
    Math.min(Math.max(centre - size * MIDDLE, 0), room - size)

  return {
    x: inside((left + right) * MIDDLE, width, CHART_WIDTH),
    y: inside((top + bottom) * MIDDLE, height, CHART_HEIGHT),
    width,
    height,
  }
}
