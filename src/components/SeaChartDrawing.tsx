import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import {
  boxOf,
  type Orientation,
  type Point,
  project,
  projectRect,
  type Region,
  REGIONS,
} from '~/components/chartGeometry'
import {
  type Leg,
  lineOfPoints,
  pathsOf,
  startsOf,
  tailLine,
} from '~/components/chartRoute'
import { tintOf } from '~/components/drawing'
import { styles } from '~/components/SeaChart.styles'
import { Compass, Continent, SeaKing } from '~/components/SeaChartDecor'
import { worldStyles } from '~/components/SeaChartWorld.styles'
import type { TintId } from '~/lib/view/records'

/** What both halves of the drawing share: its orientation and its ids. */
export interface DrawingProps {
  /** Unique to this drawing, so its patterns are its own. */
  id: string
  orientation: Orientation
}

/**
 * The seas the reader has opened, over the fog, each with its own ground:
 * the Blues open sea with waves, the Grand Line a ruled band, the Calm
 * Belts a stipple with a Sea King in the first half's, the Red Line a
 * continent of ridges with Reverse Mountain at its right edge. The fog is
 * cloud. The compass rose is always there: it says nothing of the story.
 */
export function SeaWorld({
  id,
  orientation,
  regions,
}: DrawingProps & { regions: Region[] }): ReactElement {
  const box = boxOf(orientation)
  const opened = new Set(regions)

  return (
    <g aria-hidden="true">
      <Patterns id={id} />
      <rect
        fill={`url(#${id}-cloud)`}
        height={box.y}
        width={box.x}
      />
      {regions.flatMap((region) => {
        return REGIONS[region].map((rect) => {
          const drawn = projectRect(rect, orientation)
          return (
            <rect
              key={`${region}-${String(rect.x)}-${String(rect.y)}`}
              fill={groundOf(region, id)}
              height={drawn.height}
              vectorEffect="non-scaling-stroke"
              width={drawn.width}
              x={drawn.x}
              y={drawn.y}
              {...stylex.props(worldStyles.region, edgeOf(region))}
            />
          )
        })
      })}
      {opened.has('red-line') ?
        <Continent orientation={orientation} />
      : null}
      {opened.has('calm-belt') ?
        <SeaKing orientation={orientation} />
      : null}
      <Compass orientation={orientation} />
    </g>
  )
}

/** The waves of the Blues, the stipple of the Calm Belts, and the fog's cloud. */
function Patterns({ id }: { id: string }): ReactElement {
  return (
    <defs>
      <pattern
        height="34"
        id={`${id}-waves`}
        patternUnits="userSpaceOnUse"
        width="56"
      >
        <rect
          height="34"
          width="56"
          {...stylex.props(worldStyles.seaGround)}
        />
        <path
          d="M6 12q4-5 8 0t8 0M34 28q4-5 8 0t8 0"
          {...stylex.props(worldStyles.wave)}
        />
      </pattern>
      <pattern
        height="10"
        id={`${id}-belt`}
        patternUnits="userSpaceOnUse"
        width="12"
      >
        <rect
          height="10"
          width="12"
          {...stylex.props(worldStyles.beltGround)}
        />
        <path
          d="M3 5H9"
          {...stylex.props(worldStyles.beltStipple)}
        />
      </pattern>
      <pattern
        height="90"
        id={`${id}-cloud`}
        patternUnits="userSpaceOnUse"
        width="140"
      >
        <rect
          height="90"
          width="140"
          {...stylex.props(worldStyles.fog)}
        />
        <path
          d="M14 40a9 9 0 0 1 15-7a12 12 0 0 1 22 2a8 8 0 0 1 3 14H17a7 7 0 0 1-3-9ZM82 82a8 8 0 0 1 13-6a11 11 0 0 1 20 2a7 7 0 0 1 2 12H85a6 6 0 0 1-3-8Z"
          {...stylex.props(worldStyles.cloud)}
        />
      </pattern>
    </defs>
  )
}

/** The fill of a region: a pattern for the Blues and the belts, else the stylesheet's. */
function groundOf(region: Region, id: string): string | undefined {
  if (region === 'calm-belt' || region === 'new-world-calm-belt') {
    return `url(#${id}-belt)`
  }
  if (region === 'grand-line' || region === 'new-world') {
    return undefined
  }

  return region === 'red-line' ? undefined : `url(#${id}-waves)`
}

/** The Grand Line's two halves are ruled; the Red Line is land; the rest sea. */
function edgeOf(region: Region): stylex.StyleXStyles {
  if (region === 'grand-line' || region === 'new-world') {
    return worldStyles.band
  }

  return region === 'red-line' ? worldStyles.wall : worldStyles.sea
}

/** The route draws itself in over this long, origin to ship (1.5 s). */
const DRAW_MS = 1500

/** The one ink each kind of leg is drawn in. */
const LINE = {
  boat: styles.boat,
  first: styles.first,
  luffy: styles.luffy,
  second: styles.second,
} as const

/**
 * The route sailed, drawn in once from the origin to the ship, and the fog
 * tail past it from the last stop the ship sailed to, along the Grand Line
 * to the fog's end. `still` draws it whole at once: a stretch of it on a
 * place's page has no origin to start from.
 */
export function SeaRoute({
  from,
  legs,
  orientation,
  still = false,
  tail,
}: Omit<DrawingProps, 'id'> & {
  from: Point
  legs: Leg[]
  still?: boolean
  tail: Point[]
}): ReactElement {
  const delays = startsOf(legs).map(
    (share) => `${String(Math.round(share * DRAW_MS))}ms`,
  )
  const paths = pathsOf(legs, orientation)

  return (
    <g aria-hidden="true">
      {tail.length === 0 ? null : (
        <path
          d={lineOfPoints(tailLine(from), orientation)}
          vectorEffect="non-scaling-stroke"
          {...stylex.props(styles.leg, styles.tail)}
        />
      )}

      {legs.map((leg, index) => {
        const d = paths[index] ?? ''
        return (
          <g
            key={d}
            {...stylex.props(
              !still && styles.legIn,
              !still && styles.legAt(delays[index] ?? '0ms'),
            )}
          >
            <path
              d={d}
              vectorEffect="non-scaling-stroke"
              {...stylex.props(styles.leg, LINE[leg.line])}
            />
            {leg.line === 'second' ?
              <path
                d={d}
                vectorEffect="non-scaling-stroke"
                {...stylex.props(styles.leg, styles.secondInner)}
              />
            : null}
          </g>
        )
      })}
    </g>
  )
}

/** One island to draw: where it is, its outline, and its saga's hue. */
export interface IsleMark {
  at: Point
  id: string
  outline: string
  tint: TintId
}

/**
 * The islands the reader has reached, each its own outline in its saga's
 * hue, at its point: drawn in the chart's units, so they grow as it zooms.
 */
export function Isles({
  isles,
  orientation,
}: {
  isles: IsleMark[]
  orientation: Orientation
}): ReactElement {
  return (
    <g aria-hidden="true">
      {isles.map((isle) => {
        const drawn = project(isle.at, orientation)
        return (
          <path
            key={isle.id}
            d={isle.outline}
            transform={`translate(${String(drawn.x)} ${String(drawn.y)})`}
            vectorEffect="non-scaling-stroke"
            {...stylex.props(worldStyles.isle(tintOf(isle.tint)))}
          />
        )
      })}
    </g>
  )
}
