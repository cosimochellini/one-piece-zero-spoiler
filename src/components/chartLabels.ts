import {
  type Orientation,
  type Point,
  project,
  type Side,
} from '~/components/chartGeometry'

/**
 * Name measurements shared by reached-label placement and saga visibility.
 * Points and letter counts determine their boxes, without measuring the
 * page. Saga names get the least clear scale; reached stop names use these
 * boxes to find room at every scale in `chartLabelLayout` (owner, #728).
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

export interface LabelBox {
  height: number
  width: number
  x: number
  y: number
}

/**
 * A name's box with its point at the chart's corner: how far its middle
 * stands off the point, and its size. Neither changes with the scale.
 */
function offsetOf(spot: NameSpot): LabelBox {
  const width = spot.length * LETTER + PAD
  const off: Record<Side, Point> = {
    above: { x: 0, y: -(GAP + LINE * HALF) },
    below: { x: 0, y: GAP + LINE * HALF },
    left: { x: -(GAP + width * HALF), y: 0 },
    right: { x: GAP + width * HALF, y: 0 },
  }

  const by = spot.side === null ? { x: 0, y: 0 } : off[spot.side]

  return {
    x: by.x,
    y: by.y,
    width: spot.upright === true ? LINE : width,
    height: spot.upright === true ? width : LINE,
  }
}

/** A name's box at a scale, centred: off its point on its side. */
export function labelBoxOf(
  spot: NameSpot,
  orientation: Orientation,
  scale: number,
): LabelBox {
  const drawn = project(spot.at, orientation)
  const box = offsetOf(spot)

  return { ...box, x: drawn.x * scale + box.x, y: drawn.y * scale + box.y }
}

/**
 * Something a name must stay clear of, worked out once for every scale: its
 * point as drawn, and its box off that point.
 */
interface Obstacle {
  box: LabelBox
  drawn: Point
}

/** A stop's dot, as an obstacle, centred on its point. */
const DOT_BOX: LabelBox = { x: 0, y: 0, width: DOT, height: DOT }

/** Whether two obstacles' boxes overlap at a scale. */
function overlapAt(a: Obstacle, b: Obstacle, scale: number): boolean {
  return (
    Math.abs(a.drawn.x * scale + a.box.x - (b.drawn.x * scale + b.box.x))
      < (a.box.width + b.box.width) * HALF
    && Math.abs(a.drawn.y * scale + a.box.y - (b.drawn.y * scale + b.box.y))
      < (a.box.height + b.box.height) * HALF
  )
}

/**
 * The least scale each name shows from, in the order given, which is the
 * order of priority: a name gives way to every name before it and to every
 * dot. `Infinity` for a name that never fits.
 *
 * Every box is its drawn point times the scale plus a fixed offset, so the
 * points and offsets are worked out once and each scale is arithmetic only
 * (#779).
 */
export function scalesOf(
  spots: NameSpot[],
  dots: Point[],
  orientation: Orientation,
): number[] {
  const names = spots.map((spot) => ({
    box: offsetOf(spot),
    drawn: project(spot.at, orientation),
    spot,
  }))
  const marks = dots.map((dot) => ({
    at: dot,
    box: DOT_BOX,
    drawn: project(dot, orientation),
  }))
  const placed: { from: number; name: Obstacle }[] = []
  for (const name of names) {
    const { x, y } = name.spot.at
    const others = marks.filter((mark) => mark.at.x !== x || mark.at.y !== y)
    placed.push({ from: leastFor(name, { others, placed }), name })
  }

  return placed.map(({ from }) => from)
}

/** The scales tried, the closest zoom first. */
const DOWNWARD = SCALES.toReversed()

/**
 * The least scale one name stands clear from: the step past its last clash
 * with another stop's dot or a name before it, shown there.
 */
function leastFor(
  name: Obstacle,
  {
    others,
    placed,
  }: { others: Obstacle[]; placed: { from: number; name: Obstacle }[] },
): number {
  for (const scale of DOWNWARD) {
    const clash =
      others.some((dot) => overlapAt(name, dot, scale))
      || placed.some(
        (other) => other.from <= scale && overlapAt(name, other.name, scale),
      )
    if (clash) {
      const from = scale * STEP
      return from > MOST ? Infinity : from
    }
  }

  return LEAST
}
