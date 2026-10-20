import {
  type Orientation,
  type Point,
  project,
  type Side,
} from '~/components/chartGeometry'

/**
 * Which of the names on the chart fit, at how close a zoom (owner, #728:
 * every reached place is named). Worked out once from the points and the
 * names' lengths, never by measuring the page, so the server and the browser
 * draw the same names: each name gets the least scale, in pixels per unit
 * of the chart as drawn, from which it stands clear of every name before it
 * and of every stop's dot. The chart shows a name while its own scale is at
 * least that: zoomed out, a crowded name waits; zoomed in, it is there.
 */

/** One name to set beside its stop. */
export interface NameSpot {
  at: Point
  /** How many letters it has. */
  length: number
  /** The side of its point it stands on; `null` centred on it. */
  side: null | Side
  /** Set upright, its line running down the page. */
  upright?: boolean
}

/** Half of something: a box's middle to its edge. */
const HALF = 0.5

/** How wide a letter of a name is set, in pixels, on average. */
const LETTER = 6.6
/** A name's padding, both sides together, and its line. */
const PAD = 10
const LINE = 18
/** How far a name stands off its stop's middle. */
const GAP = 10
/** A stop's dot, as an obstacle: a little more than the dot itself. */
const DOT = 14

/** The scales tried, from the whole chart on a narrow phone to the closest zoom. */
const LEAST = 0.3
const MOST = 6
const STEP = 1.06
const SCALES: number[] = []
for (let scale = LEAST; scale <= MOST; scale *= STEP) {
  SCALES.push(scale)
}

interface Box {
  height: number
  width: number
  x: number
  y: number
}

/** A name's box at a scale, centred: off its point on its side. */
function boxOf(spot: NameSpot, orientation: Orientation, scale: number): Box {
  const drawn = project(spot.at, orientation)
  const width = spot.length * LETTER + PAD
  const off: Record<Side, Point> = {
    above: { x: 0, y: -(GAP + LINE * HALF) },
    below: { x: 0, y: GAP + LINE * HALF },
    left: { x: -(GAP + width * HALF), y: 0 },
    right: { x: GAP + width * HALF, y: 0 },
  }

  const by = spot.side === null ? { x: 0, y: 0 } : off[spot.side]

  return {
    x: drawn.x * scale + by.x,
    y: drawn.y * scale + by.y,
    width: spot.upright === true ? LINE : width,
    height: spot.upright === true ? width : LINE,
  }
}

function overlap(a: Box, b: Box): boolean {
  return (
    Math.abs(a.x - b.x) < (a.width + b.width) * HALF
    && Math.abs(a.y - b.y) < (a.height + b.height) * HALF
  )
}

/** Whether a name's box at a scale runs over another stop's dot. */
function onADot(
  spot: NameSpot,
  dots: Point[],
  { orientation, scale }: { orientation: Orientation; scale: number },
): boolean {
  const box = boxOf(spot, orientation, scale)

  return dots.some((dot) => {
    const drawn = project(dot, orientation)
    const own = dot.x === spot.at.x && dot.y === spot.at.y
    return (
      !own
      && overlap(box, {
        x: drawn.x * scale,
        y: drawn.y * scale,
        width: DOT,
        height: DOT,
      })
    )
  })
}

/** Whether a name's box at a scale runs over a name before it, shown there. */
function onAName(
  spot: NameSpot,
  before: { from: number; spot: NameSpot }[],
  { orientation, scale }: { orientation: Orientation; scale: number },
): boolean {
  const box = boxOf(spot, orientation, scale)

  return before.some(
    (other) =>
      other.from <= scale
      && overlap(box, boxOf(other.spot, orientation, scale)),
  )
}

/**
 * The least scale each name shows from, in the order given, which is the
 * order of priority: a name gives way to every name before it and to every
 * dot. `Infinity` for a name that never fits.
 */
export function scalesOf(
  spots: NameSpot[],
  dots: Point[],
  orientation: Orientation,
): number[] {
  const placed: { from: number; spot: NameSpot }[] = []
  for (const spot of spots) {
    placed.push({ from: leastFor(spot, { dots, orientation, placed }), spot })
  }

  return placed.map(({ from }) => from)
}

/** The least scale one name stands clear from, past every clash. */
function leastFor(
  spot: NameSpot,
  {
    dots,
    orientation,
    placed,
  }: {
    dots: Point[]
    orientation: Orientation
    placed: { from: number; spot: NameSpot }[]
  },
): number {
  let from = LEAST
  for (const scale of SCALES) {
    const at = { orientation, scale }
    if (onADot(spot, dots, at) || onAName(spot, placed, at)) {
      from = scale * STEP
    }
  }

  return from > MOST ? Infinity : from
}
