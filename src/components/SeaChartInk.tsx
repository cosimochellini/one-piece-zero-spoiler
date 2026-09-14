import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { styles } from '~/components/SeaChartHero.styles'

/** A path of the drawing: its geometry, and any ink or motion laid over the default. */
export type InkProps = { readonly d: string; readonly sx?: stylex.StyleXStyles }

/**
 * One stroke of the fold drawing. Every line in it is 2px with round caps at
 * any crop, so the ink and the `vector-effect` are stated once here rather
 * than on each of the paths that follow.
 */
export function Line({ d, sx }: InkProps): ReactElement {
  return (
    <path
      d={d}
      vectorEffect="non-scaling-stroke"
      {...stylex.props(styles.line, sx)}
    />
  )
}

/**
 * One solid of the fold drawing: the ship is the only thing drawn as one. It
 * keeps `non-scaling-stroke` so the gold hairline behind her, which is the
 * same path stroked, stays a hairline at every crop.
 */
export function Fill({ d, sx }: InkProps): ReactElement {
  return (
    <path
      d={d}
      vectorEffect="non-scaling-stroke"
      {...stylex.props(styles.fill, sx)}
    />
  )
}
