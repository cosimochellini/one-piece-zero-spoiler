import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import {
  SUNNY_AT,
  SUNNY_BODY,
  SUNNY_FLAG,
  SUNNY_SAILS,
} from '~/components/chrome/night-sea'
import { styles } from '~/components/SeaChartHero.styles'
import { Fill } from '~/components/SeaChartInk'

/**
 * The Thousand Sunny, heading right across the moon, drawn about her own
 * waterline and put in place by one transform so her parts never drift apart.
 *
 * She is drawn twice. First the three shapes are stroked in the route gold,
 * 2px; then the same three are laid over them filled with the paper. The fill
 * hides the inner half of every stroke and every seam where one subpath meets
 * another, so what is left is a hairline of gold around her true outline and
 * nothing inside it — the one way to outline a union of shapes without
 * computing the union.
 *
 * The rock is on a second group inside the one that places her, and it has to
 * be: a CSS `transform` replaces the `transform` attribute outright rather
 * than composing with it, so an animation on the outer group would drop the
 * ship at the origin of the view box at full scale. The sail and the pennants
 * breathe on loops of their own inside the rock, about the yard and the
 * halyard, and both copies of each run the same loop so they never part.
 */
export function Sunny(): ReactElement {
  return (
    <g transform={SUNNY_AT}>
      <g {...stylex.props(styles.rock)}>
        <Parts sx={styles.rim} />
        <Parts />
      </g>
    </g>
  )
}

/** Hull and rigging, sail, pennants — once for the rim and once for the fill. */
function Parts({ sx }: { readonly sx?: stylex.StyleXStyles }): ReactElement {
  return (
    <>
      <Fill
        d={SUNNY_BODY}
        sx={sx}
      />
      <path
        d={SUNNY_SAILS}
        fillRule="evenodd"
        vectorEffect="non-scaling-stroke"
        {...stylex.props(styles.fill, sx, styles.sail)}
      />
      <Fill
        d={SUNNY_FLAG}
        sx={[sx, styles.pennant]}
      />
    </>
  )
}
