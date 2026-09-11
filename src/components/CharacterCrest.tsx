import * as stylex from '@stylexjs/stylex'

import { ART_VIEWBOX, ArtStrokes, tintOf } from '~/components/ChartArt'
import type { Visual } from '~/data/types'
import { color, rule } from '~/styles/tokens.stylex'

/**
 * A character's crest: the drawing that stands for them, set inside a seal.
 *
 * The seal is what makes twenty-five drawings read as one set of emblems
 * rather than twenty-five illustrations. It is the same for everyone — a ring
 * in the character's colour, a dashed inner ring, thirty-two bezel ticks with
 * the four cardinal ones in colour, like a compass card — and only the object
 * in the middle and the one colour change. Nothing here is a face and nothing
 * is an official mark: the emblem is the site's own, built from the drawing
 * the route already shows.
 *
 * The same 2px non-scaling stroke as every other drawing, so a crest on a
 * 7rem card and a crest filling half a page are drawn with the same pen.
 *
 * With no `visual` the seal is bare: rings and ticks in the ambient ink, and
 * nothing in the middle. That is what stands in for a fogged character, so
 * the served HTML carries neither their drawing nor their colour.
 */
export function CharacterCrest({ visual }: { readonly visual?: Visual }) {
  const hue = visual === undefined ? null : tintOf(visual.tint)

  return (
    <svg aria-hidden="true" viewBox="0 0 200 200" {...stylex.props(styles.svg)}>
      <path
        d={ring(100, 100, 94)}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(styles.line, hue !== null && styles.tinted(hue))}
      />
      <path
        d={ring(100, 100, 82)}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(styles.line, styles.ambient, styles.dashed)}
      />
      <path
        d={BEZEL_MINOR}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(styles.line)}
      />
      <path
        d={BEZEL_CARDINAL}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(styles.line, hue !== null && styles.tinted(hue))}
      />
      {/*
        The drawing's 4:5 box, inscribed in the inner ring: a 100x125 box has
        a half-diagonal of 80, inside the 82 of the dashed ring.
      */}
      {visual === undefined ? null : (
        <svg x="50" y="37.5" width="100" height="125" viewBox={ART_VIEWBOX}>
          <ArtStrokes art={visual.art} tint={visual.tint} />
        </svg>
      )}
    </svg>
  )
}

const n = (value: number) => String(Math.round(value * 100) / 100)

const ring = (cx: number, cy: number, r: number) =>
  `M${n(cx - r)} ${n(cy)} a${n(r)} ${n(r)} 0 1 0 ${n(2 * r)} 0 a${n(r)} ${n(r)} 0 1 0 ${n(-2 * r)} 0`

/**
 * One radial tick per step, between two radii, as a single path. `skip`
 * drops every n-th tick (index 0 included); `0` draws them all.
 */
function ticks(count: number, inner: number, outer: number, skip = 0) {
  return Array.from({ length: count }, (_, i) => {
    if (skip > 0 && i % skip === 0) return ''
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / count
    const cos = Math.cos(a)
    const sin = Math.sin(a)
    return `M${n(100 + inner * cos)} ${n(100 + inner * sin)} L${n(100 + outer * cos)} ${n(100 + outer * sin)}`
  })
    .filter((segment) => segment !== '')
    .join(' ')
}

// Thirty-two ticks; the four cardinal ones are drawn separately, longer and in
// the character's colour, so the seal reads as a compass card.
const BEZEL_MINOR = ticks(32, 86, 90, 8)
const BEZEL_CARDINAL = ticks(4, 84, 92)

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
