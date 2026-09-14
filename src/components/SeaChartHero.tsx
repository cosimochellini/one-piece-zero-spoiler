import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import {
  COURSE,
  FOG_BAND,
  GLITTER,
  HORIZON,
  SEA_CHART_VIEWBOX,
  SEA_FILL,
  WAVE_FAR,
  WAVE_FORE,
  WAVE_MID,
  WAVE_NEAR,
} from '~/components/chrome/night-sea'
import { styles } from '~/components/SeaChartHero.styles'
import { Line } from '~/components/SeaChartInk'
import { Sky } from '~/components/SeaChartSky'
import { Sunny } from '~/components/SeaChartSunny'

/** The id the fog rect refers to; it has to be unique in the document. */
const FOG_GRADIENT = 'sea-chart-fog'

/**
 * The fold drawing: a night sea with a full moon low on the water and the
 * Thousand Sunny crossing it in silhouette.
 *
 * The order is the depth: sky and moon, then the ship, then the sea painted
 * over her waterline so the swell passes in front of her hull, then the
 * moon's light broken on the water, then the course that leaves her bow and
 * thins out into fog at the right edge. The headline is set into the
 * lower-left corner by the fold, so the left half stays quiet on purpose, and
 * the moon sits where a phone's 4:3 crop of the box still shows it whole.
 *
 * Nothing in it is still: four rows of swell slide at four speeds, the ship
 * rocks about her keel, her sail and pennants breathe, the stars pulse a beat
 * apart. All of it is `opacity` and `transform`, all of it is behind
 * `prefers-reduced-motion`, and none of it carries meaning — a reader who
 * never sees a frame of it has missed nothing.
 *
 * The drawing itself is data in `~/components/chrome/night-sea`, as every other
 * drawing on the site is; this file and its parts are the box, the ink and the
 * fog. The box is cropped, not squashed, to whatever frame it is given
 * (`slice`), and the strokes stay 2px at every crop.
 */
export function SeaChartHero(): ReactElement {
  return (
    <svg
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
      viewBox={SEA_CHART_VIEWBOX}
      {...stylex.props(styles.svg)}
    >
      <Sky />
      <Sunny />
      <Sea />
      <Glitter />
      <Course />
    </svg>
  )
}

/**
 * The sea is a surface first, so it hides the moon's lower edge and the
 * ship's keel; then the horizon in the route gold, the same line the chart
 * draws across every waypoint; then four rows of swell that slide at four
 * speeds, each by exactly one crest, so the sea moves and never restarts. The
 * far rows are darker than the near ones, which is the only perspective the
 * drawing allows itself.
 */
function Sea(): ReactElement {
  return (
    <>
      <rect
        height={SEA_FILL.height}
        width={SEA_FILL.width}
        x={SEA_FILL.x}
        y={SEA_FILL.y}
        {...stylex.props(styles.sea)}
      />
      <Line
        d={HORIZON}
        sx={styles.gold}
      />
      <Line
        d={WAVE_FAR}
        sx={[styles.deep, styles.swell, styles.farRow]}
      />
      <Line
        d={WAVE_MID}
        sx={[styles.deep, styles.swell, styles.midRow]}
      />
      <Line
        d={WAVE_NEAR}
        sx={[styles.ambient, styles.swell, styles.nearRow]}
      />
      <Line
        d={WAVE_FORE}
        sx={[styles.ambient, styles.swell, styles.foreRow]}
      />
    </>
  )
}

/**
 * The moon on the water, broken across the swell and widening toward the
 * reader. It breathes on the moon's slow loop rather than on the stars', the
 * way a light on water does.
 */
function Glitter(): ReactElement {
  return (
    <Line
      d={GLITTER}
      sx={[styles.gold, styles.dotted, styles.pulse, styles.shimmer]}
    />
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
      <Line
        d={COURSE}
        sx={[styles.gold, styles.dotted]}
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
