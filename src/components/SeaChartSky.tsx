import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import {
  BRIGHT_STARS_A,
  BRIGHT_STARS_B,
  BRIGHT_STARS_C,
  DEEP_FIELD,
  MOON_DISC,
  MOON_HALO,
  STAR_FLARES,
  STARS,
} from '~/components/chrome/night-sea'
import { styles } from '~/components/SeaChartHero.styles'
import { Line } from '~/components/SeaChartInk'

/** The id the moon's bloom refers to; it has to be unique in the document. */
const MOON_GRADIENT = 'sea-chart-moon'

/**
 * The sky, back to front: the bloom, two depths of stars, and the moon — a
 * full disc in the light ink with a hairline of the route gold at its rim.
 * The bloom is the one soft edge in the drawing. It is painted first, so the
 * sea drawn after it takes none of the light; the disc itself is the light.
 */
export function Sky(): ReactElement {
  return (
    <>
      <defs>
        <radialGradient id={MOON_GRADIENT}>
          <stop
            offset="0"
            {...stylex.props(styles.haloCore)}
          />
          <stop
            offset="0.4"
            {...stylex.props(styles.haloMid)}
          />
          <stop
            offset="1"
            {...stylex.props(styles.haloEdge)}
          />
        </radialGradient>
      </defs>

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
      <Twinkle />
      <circle
        cx={MOON_DISC.cx}
        cy={MOON_DISC.cy}
        r={MOON_DISC.r}
        {...stylex.props(styles.moon)}
      />
      <circle
        cx={MOON_DISC.cx}
        cy={MOON_DISC.cy}
        r={MOON_DISC.r}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(styles.moonRim)}
      />
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
