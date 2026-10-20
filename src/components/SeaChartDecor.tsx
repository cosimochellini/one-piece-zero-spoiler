import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import {
  CHART_HEIGHT,
  type Orientation,
  type Point,
  project,
  type Rect,
  REGIONS,
  REVERSE_MOUNTAIN,
} from '~/components/chartGeometry'
import { lineOfPoints } from '~/components/chartRoute'
import { worldStyles } from '~/components/SeaChartWorld.styles'

/**
 * What the sea chart draws on its world besides the seas: the Red Line's
 * ridges and Reverse Mountain, a Sea King in the Calm Belt, and the compass
 * rose. Each in the chart's own units, turned with the chart on a phone.
 */

/** How far apart the Red Line's ridges stand, down its length. */
const RIDGE_STEP = 20
/** A ridge's shape: how far it spreads across the band, its rise and foot. */
const RIDGE = { spread: 0.26, rise: 5, foot: 6, stagger: 4 }
/** Every other ridge, so the chevrons do not line up like a ruler. */
const ALTERNATE = 2

/** Reverse Mountain's peak at the right edge, and its snow. */
const PEAK: Point[] = [
  { x: 1548, y: 452 },
  { x: 1580, y: 352 },
  { x: 1600, y: 388 },
]
const CAP: Point[] = [
  { x: 1569, y: 386 },
  { x: 1580, y: 352 },
  { x: 1590, y: 370 },
]
/** The currents of East Blue and South Blue, climbing to the peak. */
const CURRENTS: Point[][] = [
  [
    { x: 1470, y: 236 },
    { x: 1540, y: 300 },
    { x: 1574, y: 368 },
  ],
  [
    { x: 1470, y: 564 },
    { x: 1540, y: 500 },
    { x: 1574, y: 432 },
  ],
]

/**
 * The Red Line as land: a ridge every so often down each of its three
 * stretches, and Reverse Mountain where the right edge meets the Grand
 * Line, with the currents of East Blue and South Blue climbing to it.
 */
export function Continent({
  orientation,
}: {
  orientation: Orientation
}): ReactElement {
  const ridges = REGIONS['red-line']
    .map((rect) => ridgesOf(rect, orientation))
    .join('')
  return (
    <g>
      <path
        d={ridges}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(worldStyles.ridge)}
      />
      <path
        d={`${lineOfPoints(PEAK, orientation)}Z`}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(worldStyles.mountain)}
      />
      <path
        d={lineOfPoints(CAP, orientation)}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(worldStyles.snow)}
      />
      {CURRENTS.map((points) => {
        const d = lineOfPoints(points, orientation)
        return (
          <path
            key={d}
            d={d}
            vectorEffect="non-scaling-stroke"
            {...stylex.props(worldStyles.current)}
          />
        )
      })}
      <circle
        cx={project(REVERSE_MOUNTAIN, orientation).x}
        cy={project(REVERSE_MOUNTAIN, orientation).y}
        r="3"
        {...stylex.props(worldStyles.summit)}
      />
    </g>
  )
}

/** The ridges down one stretch of the Red Line: a chevron every step. */
function ridgesOf(rect: Rect, orientation: Orientation): string {
  const middle = rect.x + rect.width / ALTERNATE
  const half = rect.width * RIDGE.spread
  const rows = Math.floor(CHART_HEIGHT / RIDGE_STEP)

  return Array.from({ length: rows }, (_, row) => {
    const y =
      (row + 1 / ALTERNATE) * RIDGE_STEP + (row % ALTERNATE) * RIDGE.stagger
    return lineOfPoints(
      [
        { x: middle - half, y: y + RIDGE.foot },
        { x: middle, y: y - RIDGE.rise },
        { x: middle + half, y: y + RIDGE.foot },
      ],
      orientation,
    )
  }).join('')
}

/** A Sea King's back breaking the first half's southern Calm Belt, by its east end. */
const HUMPS: Point[][] = [
  [
    { x: 1406, y: 538 },
    { x: 1416, y: 520 },
    { x: 1426, y: 538 },
  ],
  [
    { x: 1434, y: 538 },
    { x: 1444, y: 518 },
    { x: 1454, y: 538 },
  ],
  [
    { x: 1462, y: 538 },
    { x: 1474, y: 514 },
    { x: 1482, y: 524 },
    { x: 1492, y: 522 },
  ],
]

/** The Sea King, drawn once the Calm Belt is open. */
export function SeaKing({
  orientation,
}: {
  orientation: Orientation
}): ReactElement {
  return (
    <g>
      {HUMPS.map((points) => {
        const d = lineOfPoints(points, orientation)
        return (
          <path
            key={d}
            d={d}
            vectorEffect="non-scaling-stroke"
            {...stylex.props(worldStyles.seaKing)}
          />
        )
      })}
    </g>
  )
}

/** The compass rose's middle, in West Blue's far corner, and its points. */
const ROSE: Point = { x: 96, y: 712 }
const LONG = 38
const SHORT = 9
const at = (x: number, y: number): Point => ({ x: ROSE.x + x, y: ROSE.y + y })
const NORTH = [at(0, -LONG), at(SHORT, 0), at(0, SHORT), at(-SHORT, 0)]
const STAR = [
  at(0, -LONG),
  at(SHORT, -SHORT),
  at(LONG, 0),
  at(SHORT, SHORT),
  at(0, LONG),
  at(-SHORT, SHORT),
  at(-LONG, 0),
  at(-SHORT, -SHORT),
]

/** The compass rose: north is the top across, turned with the chart upright. */
export function Compass({
  orientation,
}: {
  orientation: Orientation
}): ReactElement {
  const centre = project(ROSE, orientation)

  return (
    <g>
      <circle
        cx={centre.x}
        cy={centre.y}
        r={LONG - SHORT}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(worldStyles.compassRing)}
      />
      <path
        d={`${lineOfPoints(STAR, orientation)}Z`}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(worldStyles.compass)}
      />
      <path
        d={`${lineOfPoints(NORTH, orientation)}Z`}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(worldStyles.compassNorth)}
      />
    </g>
  )
}
