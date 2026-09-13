import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { ArtStrokes } from '~/components/ChartArt'
import { ART_VIEWBOX, tintOf } from '~/components/drawing'
import {
  CREST_ART_BOX,
  CREST_BEZEL,
  CREST_CARDINALS,
  CREST_INNER_RING,
  CREST_RING,
  CREST_VIEWBOX,
} from '~/data/art/crest'
import type { Visual } from '~/data/types'
import { color, rule } from '~/styles/tokens.stylex'

/**
 * A character's crest: the drawing that stands for them, set inside a seal.
 *
 * The seal is what makes the featured drawings read as one set of emblems
 * rather than a row of illustrations. It is the same for everyone — a ring
 * in the character's colour, a dashed inner ring, thirty-two bezel ticks with
 * the four cardinal ones in colour, like a compass card — and only the object
 * in the middle and the one colour change. Nothing here is a face and nothing
 * is an official mark: the emblem is the site's own, built from the drawing
 * the route already shows. The seal's own geometry is data in
 * `~/data/art/crest`, as every drawing on the site is.
 *
 * The same 2px non-scaling stroke as every other drawing, so a crest on a
 * 7rem card and a crest filling half a page are drawn with the same pen.
 *
 * With no `visual` the seal is bare: rings and ticks in the ambient ink, and
 * nothing in the middle. That is what stands in for a fogged character, so
 * the served HTML carries neither their drawing nor their colour.
 */
export function CharacterCrest({
  visual,
}: {
  readonly visual?: Visual
}): ReactElement {
  const hue = visual === undefined ? null : tintOf(visual.tint)

  return (
    <svg
      aria-hidden="true"
      viewBox={CREST_VIEWBOX}
      {...stylex.props(styles.svg)}
    >
      <path
        d={CREST_RING}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(styles.line, hue !== null && styles.tinted(hue))}
      />
      <path
        d={CREST_INNER_RING}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(styles.line, styles.ambient, styles.dashed)}
      />
      <path
        d={CREST_BEZEL}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(styles.line)}
      />
      <path
        d={CREST_CARDINALS}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(styles.line, hue !== null && styles.tinted(hue))}
      />
      {visual === undefined ? null : (
        <svg
          height={CREST_ART_BOX.height}
          viewBox={ART_VIEWBOX}
          width={CREST_ART_BOX.width}
          x={CREST_ART_BOX.x}
          y={CREST_ART_BOX.y}
        >
          <ArtStrokes
            art={visual.art}
            tint={visual.tint}
          />
        </svg>
      )}
    </svg>
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
  ambient: { stroke: color.rule2 },
  tinted: (hue: string) => ({ stroke: hue }),
  dashed: { strokeDasharray: '3 6' },
})
