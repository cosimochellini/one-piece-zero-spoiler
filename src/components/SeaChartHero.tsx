import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import {
  CARAVEL_AT,
  CARAVEL_FIGUREHEAD,
  CARAVEL_HULL,
  CARAVEL_MAST,
  CARAVEL_SAIL,
  CONSTELLATION,
  COURSE,
  FOG_BAND,
  HORIZON,
  MOON,
  SEA_CHART_VIEWBOX,
  STARS,
  WAVES,
} from '~/components/chrome/night-sea'
import { color, rule } from '~/styles/tokens.stylex'

/** The id the fog rect refers to; it has to be unique in the document. */
const FOG_GRADIENT = 'sea-chart-fog'

/**
 * The fold drawing: a night sea in the same line as the waypoint plates.
 *
 * One horizon in the route gold, a small caravel under sail right of centre, a
 * dotted course that leaves it and runs into fog at the right edge, a thin moon
 * and a few stars. Nothing else. The headline is set into the lower-left corner
 * by the page, so the left half stays quiet on purpose, and the ship sits where
 * a phone's 4:3 crop of the box still shows it.
 *
 * The drawing itself is data in `~/components/chrome/night-sea`, as every other drawing
 * on the site is; this file is the box, the ink and the fog. The box is
 * cropped, not squashed, to whatever frame it is given (`slice`), and the
 * strokes stay 2px at every crop.
 */
export function SeaChartHero(): ReactElement {
  return (
    <svg
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
      viewBox={SEA_CHART_VIEWBOX}
      {...stylex.props(styles.svg)}
    >
      <defs>
        <linearGradient
          id={FOG_GRADIENT}
          x1="0"
          x2="1"
          y1="0"
          y2="0"
        >
          <stop
            offset="0"
            {...stylex.props(styles.fogStart)}
          />
          <stop
            offset="1"
            {...stylex.props(styles.fogEnd)}
          />
        </linearGradient>
      </defs>

      <Sky />
      <Sea />
      <Caravel />
      <Course />
    </svg>
  )
}

/**
 * A handful of dots, one small constellation drawn between four of them, and
 * a crescent. Nothing here is a light source: the sea below is not lit by it.
 */
function Sky(): ReactElement {
  return (
    <>
      <path
        d={STARS}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(styles.line, styles.gold)}
      />
      <path
        d={CONSTELLATION}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(styles.line, styles.ambient)}
      />
      <path
        d={MOON}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(styles.line)}
      />
    </>
  )
}

/**
 * The horizon takes the route gold because it is the same line the chart
 * draws across every waypoint; the swell under it stays in the muted ink so
 * it never competes with the ship.
 */
function Sea(): ReactElement {
  return (
    <>
      <path
        d={HORIZON}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(styles.line, styles.gold)}
      />
      <path
        d={WAVES}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(styles.line, styles.ambient)}
      />
    </>
  )
}

/**
 * Sails full, heading right, drawn about her own waterline and put in place
 * by one transform, so the parts never drift apart from each other.
 */
function Caravel(): ReactElement {
  return (
    <g transform={CARAVEL_AT}>
      <path
        d={CARAVEL_HULL}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(styles.line)}
      />
      <path
        d={CARAVEL_MAST}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(styles.line)}
      />
      <path
        d={CARAVEL_SAIL}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(styles.line, styles.gold)}
      />
      <path
        d={CARAVEL_FIGUREHEAD}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(styles.line)}
      />
    </g>
  )
}

/**
 * The course leaves the ship dotted and is then painted over by the fog, so
 * it thins out instead of stopping: where the route goes next is the one
 * thing the fold refuses to say.
 */
function Course(): ReactElement {
  return (
    <>
      <path
        d={COURSE}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(styles.line, styles.gold, styles.dotted)}
      />
      <rect
        fill={`url(#${FOG_GRADIENT})`}
        height={FOG_BAND.height}
        width={FOG_BAND.width}
        x={FOG_BAND.x}
        y={FOG_BAND.y}
      />
    </>
  )
}

const styles = stylex.create({
  svg: { display: 'block', height: '100%', width: '100%' },
  line: {
    fill: 'none',
    stroke: color.ink2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: rule.fine,
  },
  gold: { stroke: color.accent },
  ambient: { stroke: color.rule2 },
  dotted: { strokeDasharray: '2 10' },
  // The fog is the card surface itself, rising from nothing to solid across
  // the right third, so the course visibly disappears into it.
  fogStart: { stopColor: color.paper2, stopOpacity: 0 },
  fogEnd: { stopColor: color.paper2, stopOpacity: 0.96 },
})
