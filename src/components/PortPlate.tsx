import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { ArtStrokes } from '~/components/ChartArt'
import { ART_VIEWBOX, tintOf } from '~/components/drawing'
import {
  PLATE_ART_BOX,
  PLATE_CORNERS,
  PLATE_FRAME,
  PLATE_GRATICULE,
  PLATE_INNER,
  PLATE_NORTH,
  PLATE_VIEWBOX,
} from '~/data/art/plate'
import type { Visual } from '~/data/types'
import { color, rule } from '~/styles/tokens.stylex'

/**
 * A place's plate: the drawing that stands for it, set inside a chart frame.
 *
 * Characters get a round seal (`CharacterCrest`); places get a rectangle,
 * because a place on a chart is a plate and not a badge. The frame is the
 * same for every place — a rule in the place's colour, a dashed inner rule,
 * graticule ticks along all four edges like the margin of a sea chart, four
 * corner brackets and a north mark in the colour — and only the drawing in
 * the middle and the one colour change. Nothing here is a flag or an
 * official mark: the plate is the site's own, built from the drawing the
 * route already shows. The frame's own geometry is data in
 * `~/data/art/plate`, as every drawing on the site is.
 *
 * The same 2px non-scaling stroke as every other drawing, so a plate on a
 * card and a plate filling a column are drawn with the same pen.
 *
 * With no `visual` the plate is bare: frame and ticks in the ambient ink,
 * nothing in the middle. That is what stands in for a fogged place, so the
 * served HTML carries neither its drawing nor its colour.
 */
export function PortPlate({
  visual,
}: {
  readonly visual?: Visual
}): ReactElement {
  const hue = visual === undefined ? null : tintOf(visual.tint)

  return (
    <svg
      aria-hidden="true"
      viewBox={PLATE_VIEWBOX}
      {...stylex.props(styles.svg)}
    >
      <path
        d={PLATE_FRAME}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(styles.line, hue !== null && styles.tinted(hue))}
      />
      <path
        d={PLATE_INNER}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(styles.line, styles.ambient, styles.dashed)}
      />
      <path
        d={PLATE_GRATICULE}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(styles.line)}
      />
      <path
        d={PLATE_CORNERS}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(styles.line, hue !== null && styles.tinted(hue))}
      />
      {hue === null ? null : (
        <path
          d={PLATE_NORTH}
          vectorEffect="non-scaling-stroke"
          {...stylex.props(styles.line, styles.tinted(hue))}
        />
      )}
      {visual === undefined ? null : (
        <svg
          height={PLATE_ART_BOX.height}
          viewBox={ART_VIEWBOX}
          width={PLATE_ART_BOX.width}
          x={PLATE_ART_BOX.x}
          y={PLATE_ART_BOX.y}
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
