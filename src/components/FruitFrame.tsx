import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { ChartArt } from '~/components/ChartArt'
import type { Drawing } from '~/lib/view/records'
import { color, radius, rule, space } from '~/styles/tokens.stylex'

/** The drawing a specimen is set in, or nothing when it is under fog. */
export type FruitFrameProps = { readonly visual?: Drawing }

/**
 * One fruit drawing inside a hairline square.
 *
 * Not a seal and not a chart plate: a character is a crest and a port is a
 * plate, and a specimen sheet sets its drawings bare inside a rule. Three
 * frames rather than one is what keeps the three archive pages from reading
 * as one page with different words.
 *
 * With no `visual` the frame draws empty, and that is the fogged state: the
 * strokes and the colour of a fruit the reader has not reached are not in the
 * served HTML at all, so there is nothing here to blur.
 */
export function FruitFrame({ visual }: FruitFrameProps): ReactElement {
  return (
    <span {...stylex.props(styles.frame)}>
      {visual === undefined ? null : (
        <ChartArt
          strokes={visual.strokes}
          tint={visual.tint}
        />
      )}
    </span>
  )
}

const styles = stylex.create({
  frame: {
    padding: space.xs,
    borderColor: color.rule,
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    aspectRatio: '4 / 5',
    backgroundColor: color.paper2,
    display: 'block',
    maxWidth: '100%',
  },
})
