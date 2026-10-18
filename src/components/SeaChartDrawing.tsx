import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import {
  boxOf,
  type Leg,
  type Orientation,
  pathOf,
  type Point,
  projectRect,
  type Region,
  REGIONS,
  startsOf,
} from '~/components/chartGeometry'
import { styles } from '~/components/SeaChart.styles'

/** What both halves of the drawing share: its orientation and its ids. */
export interface DrawingProps {
  /** Unique to this drawing, so its patterns are its own. */
  id: string
  orientation: Orientation
}

/**
 * The seas the reader has opened, over the fog. Each kind of region has its
 * own ground: the Blues open sea, the Grand Line a ruled band, the Calm
 * Belts a stipple, the Red Line hatched.
 */
export function SeaWorld({
  id,
  orientation,
  regions,
}: DrawingProps & { regions: Region[] }): ReactElement {
  const box = boxOf(orientation)

  return (
    <g aria-hidden="true">
      <Patterns id={id} />
      <rect
        height={box.y}
        width={box.x}
        {...stylex.props(styles.fog)}
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
              {...stylex.props(styles.region, edgeOf(region))}
            />
          )
        })
      })}
    </g>
  )
}

/** The hatching of the Red Line and the stipple of the Calm Belts. */
function Patterns({ id }: { id: string }): ReactElement {
  return (
    <defs>
      <pattern
        height="8"
        id={`${id}-wall`}
        patternTransform="rotate(45)"
        patternUnits="userSpaceOnUse"
        width="8"
      >
        <rect
          height="8"
          width="8"
          {...stylex.props(styles.wallGround)}
        />
        <path
          d="M0 0V8"
          {...stylex.props(styles.wallHatch)}
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
          {...stylex.props(styles.seaGround)}
        />
        <path
          d="M3 5H9"
          {...stylex.props(styles.beltStipple)}
        />
      </pattern>
    </defs>
  )
}

/** The fill of a region: a pattern for the bands, the stylesheet's otherwise. */
function groundOf(region: Region, id: string): string | undefined {
  if (region === 'red-line') {
    return `url(#${id}-wall)`
  }

  return region === 'calm-belt' || region === 'new-world-calm-belt' ?
      `url(#${id}-belt)`
    : undefined
}

/** The Grand Line's two halves are ruled; every other region is not. */
function edgeOf(region: Region): stylex.StyleXStyles {
  if (region === 'grand-line' || region === 'new-world') {
    return styles.band
  }

  return region === 'red-line' ? styles.wall : styles.sea
}

/** The route draws itself in over this long, origin to ship (1.5 s). */
const DRAW_MS = 1500

/** The one ink each kind of leg is drawn in. */
const LINE = {
  boat: styles.boat,
  branch: styles.branch,
  first: styles.first,
  second: styles.second,
} as const

/**
 * The route sailed, drawn in once from the origin to the ship, and the fog
 * tail past it from the last open stop to the last dot.
 */
export function SeaRoute({
  from,
  legs,
  orientation,
  tail,
}: Omit<DrawingProps, 'id'> & {
  from: Point
  legs: Leg[]
  tail: Point[]
}): ReactElement {
  const end = tail.at(-1)
  const delays = startsOf(legs).map(
    (share) => `${String(Math.round(share * DRAW_MS))}ms`,
  )

  return (
    <g aria-hidden="true">
      {end === undefined ? null : (
        <path
          d={pathOf([{ from, to: end, line: 'boat' }], orientation)}
          vectorEffect="non-scaling-stroke"
          {...stylex.props(styles.leg, styles.tail)}
        />
      )}

      {legs.map((leg, index) => {
        const d = pathOf([leg], orientation)
        return (
          <g
            key={d}
            {...stylex.props(
              styles.legIn,
              styles.legAt(delays[index] ?? '0ms'),
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
