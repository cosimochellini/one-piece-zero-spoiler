import * as stylex from '@stylexjs/stylex'

import { color, rule } from '~/styles/tokens.stylex'

/**
 * The ink a seal and a plate are drawn in: the same 2px uniform stroke, round
 * caps and joins, no fills, the second ink for anything ambient and a dashed
 * line for what is merely there.
 *
 * One module because the crest and the port plate are the same drawing rules
 * applied to two frames, and writing them out twice is how the two would drift.
 */
export const emblemStyles = stylex.create({
  svg: { display: 'block', height: '100%', width: '100%' },
  line: {
    fill: 'none',
    stroke: color.ink2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: rule.fine,
  },
  ambient: { stroke: color.rule2 },
  tinted: (hue: string) => ({ stroke: hue }),
  dashed: { strokeDasharray: '3 6' },
})
