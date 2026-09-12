import * as stylex from '@stylexjs/stylex'

import { ART_VIEWBOX, ArtStrokes, tintOf } from '~/components/ChartArt'
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
 * route already shows.
 *
 * The same 2px non-scaling stroke as every other drawing, so a plate on a
 * card and a plate filling a column are drawn with the same pen.
 *
 * With no `visual` the plate is bare: frame and ticks in the ambient ink,
 * nothing in the middle. That is what stands in for a fogged place, so the
 * served HTML carries neither its drawing nor its colour.
 */
export function PortPlate({ visual }: { readonly visual?: Visual }) {
  const hue = visual === undefined ? null : tintOf(visual.tint)

  return (
    <svg aria-hidden="true" viewBox="0 0 200 200" {...stylex.props(styles.svg)}>
      <path
        d={FRAME}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(styles.line, hue !== null && styles.tinted(hue))}
      />
      <path
        d={INNER}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(styles.line, styles.ambient, styles.dashed)}
      />
      <path
        d={GRATICULE}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(styles.line)}
      />
      <path
        d={CORNERS}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(styles.line, hue !== null && styles.tinted(hue))}
      />
      {hue === null ? null : (
        <path
          d={NORTH}
          vectorEffect="non-scaling-stroke"
          {...stylex.props(styles.line, styles.tinted(hue))}
        />
      )}
      {/*
        The drawing's 4:5 box, set inside the dashed rule with a margin on
        every side: 112 by 140 in a 156-square, so the waves at the foot of a
        drawing stop short of the frame.
      */}
      {visual === undefined ? null : (
        <svg x="44" y="30" width="112" height="140" viewBox={ART_VIEWBOX}>
          <ArtStrokes art={visual.art} tint={visual.tint} />
        </svg>
      )}
    </svg>
  )
}

const OUTER = 12
const INSET = 22
const FAR = 200 - OUTER

const FRAME = `M${String(OUTER)} ${String(OUTER)} H${String(FAR)} V${String(FAR)} H${String(OUTER)} Z`
const INNER = `M${String(INSET)} ${String(INSET)} H${String(200 - INSET)} V${String(200 - INSET)} H${String(INSET)} Z`

/**
 * A tick every 16 units along the inside of each edge, the way a chart's
 * margin is divided into minutes of arc. One path for all four sides.
 */
function graticule(): string {
  const stops = Array.from({ length: 10 }, (_, i) => 28 + i * 16)
  return stops
    .map(
      (at) =>
        `M${String(at)} ${String(OUTER)} v4 M${String(at)} ${String(FAR)} v-4 M${String(OUTER)} ${String(at)} h4 M${String(FAR)} ${String(at)} h-4`,
    )
    .join(' ')
}

const GRATICULE = graticule()

// Four L-shaped brackets just outside the frame, the register marks of a
// printed chart.
const CORNERS =
  'M4 20 V4 H20 M180 4 H196 V20 M196 180 V196 H180 M20 196 H4 V180'

// A small north arrow inside the top-right corner of the frame.
const NORTH = 'M170 40 V24 M166 29 L170 24 L174 29'

const styles = stylex.create({
  svg: {
    display: 'block',
    height: '100%',
    width: '100%',
  },
  line: {
    fill: 'none',
    stroke: color.ink2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: rule.fine,
  },
  ambient: {
    stroke: color.rule2,
  },
  tinted: (hue: string) => ({ stroke: hue }),
  dashed: {
    strokeDasharray: '3 6',
  },
})
