import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import {
  BRIGHT_STARS_A,
  BRIGHT_STARS_B,
  BRIGHT_STARS_C,
  CONSTELLATION,
  COURSE,
  DEEP_FIELD,
  FAR_ISLES,
  FOG_BAND,
  HORIZON,
  LANTERN_PATH,
  MOON,
  MOON_HALO,
  MOON_RINGS,
  SEA_CHART_VIEWBOX,
  STAR_FLARES,
  STARS,
  SUNNY_AT,
  SUNNY_BULWARK,
  SUNNY_HULL,
  SUNNY_LION,
  SUNNY_MANE,
  SUNNY_MAST,
  SUNNY_NEST,
  SUNNY_SAIL,
  SUNNY_WALE,
  WAVE_FAR,
  WAVE_FORE,
  WAVE_MID,
  WAVE_NEAR,
} from '~/components/chrome/night-sea'
import { styles } from '~/components/SeaChartHero.styles'

/** The id the fog rect refers to; it has to be unique in the document. */
const FOG_GRADIENT = 'sea-chart-fog'

/** The id the moon's bloom refers to, on the same terms as the fog's. */
const MOON_GRADIENT = 'sea-chart-moon'

/**
 * The fold drawing: a night sea in the same line as the waypoint plates.
 *
 * One horizon in the route gold, the Thousand Sunny under sail right of centre,
 * a dotted course that leaves her and runs into fog at the right edge, a
 * crescent with its light ruled around it, and a sky in three depths. The
 * headline is set into the lower-left corner by the fold, so the left half
 * stays quiet on purpose, and the ship sits where a phone's 4:3 crop of the
 * box still shows her.
 *
 * Nothing in it is still: four rows of swell slide at four speeds, the ship
 * rocks about her keel, the stars breathe a beat apart. All of it is
 * `opacity` and `transform`, all of it is behind `prefers-reduced-motion`,
 * and none of it carries meaning — a reader who never sees a frame of it has
 * missed nothing.
 *
 * The drawing itself is data in `~/components/chrome/night-sea`, as every other
 * drawing on the site is; this file is the box, the ink and the fog. The box is
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
      <HeroDefs />

      <Sky />
      <Twinkle />
      <Sea />
      <Lantern />
      <Sunny />
      <Course />
    </svg>
  )
}

/**
 * One stroke of the drawing. Every line in the fold is 2px with round caps at
 * any crop, so the ink and the `vector-effect` are stated once here rather
 * than on each of the two dozen paths that follow.
 */
function Line({
  d,
  sx,
}: {
  readonly d: string
  readonly sx?: stylex.StyleXStyles
}): ReactElement {
  return (
    <path
      d={d}
      vectorEffect="non-scaling-stroke"
      {...stylex.props(styles.line, sx)}
    />
  )
}

/**
 * The two gradients the drawing paints with: the bloom around the crescent,
 * and the fog the course runs into. Both are overlays of a surface colour, so
 * neither of them adds a hue the palette does not already have.
 */
function HeroDefs(): ReactElement {
  return (
    <defs>
      <radialGradient id={MOON_GRADIENT}>
        <stop
          offset="0"
          {...stylex.props(styles.haloCore)}
        />
        <stop
          offset="0.38"
          {...stylex.props(styles.haloMid)}
        />
        <stop
          offset="1"
          {...stylex.props(styles.haloEdge)}
        />
      </radialGradient>

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
  )
}

/**
 * Three depths of sky: a faint field that reads as distance, the loose stars
 * with one constellation drawn between four of them, and the crescent with
 * its light ruled in rings around it. The bloom is the one soft edge in the
 * drawing, and it stops short of the horizon: the sea below is not lit by it.
 */
function Sky(): ReactElement {
  return (
    <>
      <circle
        cx={MOON_HALO.cx}
        cy={MOON_HALO.cy}
        fill={`url(#${MOON_GRADIENT})`}
        r={MOON_HALO.r}
        {...stylex.props(styles.halo)}
      />
      <Line
        d={DEEP_FIELD}
        sx={styles.faint}
      />
      <Line
        d={STARS}
        sx={styles.gold}
      />
      <Line
        d={CONSTELLATION}
        sx={styles.ambient}
      />
      <Line
        d={MOON_RINGS}
        sx={styles.faint}
      />
      <Line d={MOON} />
    </>
  )
}

/**
 * The six stars that carry the light, on one loop started a beat apart, and
 * the cross of light on the brightest pair. Three paths rather than one so
 * the sky breathes instead of blinking.
 */
function Twinkle(): ReactElement {
  return (
    <>
      <Line
        d={BRIGHT_STARS_A}
        sx={[styles.gold, styles.pulse]}
      />
      <Line
        d={STAR_FLARES}
        sx={[styles.faint, styles.pulse]}
      />
      <Line
        d={BRIGHT_STARS_B}
        sx={[styles.gold, styles.pulse, styles.pulseLate]}
      />
      <Line
        d={BRIGHT_STARS_C}
        sx={[styles.gold, styles.pulse, styles.pulseLater]}
      />
    </>
  )
}

/**
 * The horizon takes the route gold because it is the same line the chart
 * draws across every waypoint; the isles and the swell under it stay in the
 * muted ink so they never compete with the ship. The four rows slide at four
 * speeds, each by exactly one crest, so the sea moves and never restarts.
 */
function Sea(): ReactElement {
  return (
    <>
      <Line
        d={HORIZON}
        sx={styles.gold}
      />
      <Line
        d={FAR_ISLES}
        sx={styles.ambient}
      />
      <Line
        d={WAVE_FAR}
        sx={[styles.ambient, styles.swell, styles.farRow]}
      />
      <Line
        d={WAVE_MID}
        sx={[styles.ambient, styles.swell, styles.midRow]}
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
 * The lantern's reflection, broken across the swell and widening toward the
 * reader. It breathes on the moon's slow loop rather than on the stars', the
 * way a light on water does.
 */
function Lantern(): ReactElement {
  return (
    <Line
      d={LANTERN_PATH}
      sx={[
        styles.gold,
        styles.faint,
        styles.dotted,
        styles.pulse,
        styles.lantern,
      ]}
    />
  )
}

/**
 * The Thousand Sunny: sails full, heading right, drawn about her own waterline
 * and put in place by one transform, so the parts never drift apart from each
 * other. The sail, the lion at her prow and the rays of her mane are what take
 * the route gold; the bulwark and the wale are ambient, and the rest is the
 * neutral ink.
 *
 * The order is the drawing: the mast and the mane go down first and the sail,
 * the nest, the hull and the lion are laid over them filled, so a mast does
 * not run through its own canvas and a mane does not cross the hull it is
 * mounted on.
 *
 * The rock is on a second group inside the one that places her, and it has to
 * be: a CSS `transform` replaces the `transform` attribute outright rather
 * than composing with it, so an animation on the outer group would drop the
 * ship at the origin of the view box at full scale.
 */
function Sunny(): ReactElement {
  return (
    <g transform={SUNNY_AT}>
      <g {...stylex.props(styles.rock)}>
        <Line d={SUNNY_MAST} />
        <Line
          d={SUNNY_MANE}
          sx={styles.gold}
        />
        <Line
          d={SUNNY_SAIL}
          sx={[styles.gold, styles.solid]}
        />
        <Line
          d={SUNNY_NEST}
          sx={styles.solid}
        />
        <Line
          d={SUNNY_HULL}
          sx={styles.solid}
        />
        <Line
          d={SUNNY_BULWARK}
          sx={styles.ambient}
        />
        <Line
          d={SUNNY_WALE}
          sx={styles.ambient}
        />
        <Line
          d={SUNNY_LION}
          sx={[styles.gold, styles.solid]}
        />
      </g>
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
