import * as stylex from '@stylexjs/stylex'
import { type ReactElement, use } from 'react'

import {
  ART_VIEWBOX,
  type ArtProps,
  DrawInContext,
  tintOf,
} from '~/components/drawing'
import type { Stroke } from '~/lib/view/records'
import { color, dur, ease, rule } from '~/styles/tokens.stylex'

/**
 * The renderer for every line drawing in the archive. The drawings
 * themselves are data in `~/data/series/one-piece/art`, filed by saga, and reach this renderer
 * as strokes: the archive stays on the server.
 *
 * The rules they all obey: a 160x200 box; a single uniform 2px stroke with
 * round caps and joins, kept at 2px whatever size the card is drawn at
 * (`non-scaling-stroke`); no fills anywhere; one colour per drawing for the
 * main stroke, every other line in the second ink, and a muted dashed line for
 * ground, water and other things that are merely there. Characters are an
 * object that stands for them — a straw hat, three sheathed swords, a violin —
 * never a face, never a logo. Places are the place.
 *
 * Each drawing is a list of strokes rather than JSX so the rules live in this
 * one renderer and a new drawing is data, not markup. The strokes are decorative:
 * the waypoint beside them already carries the name, so every drawing is
 * `aria-hidden`.
 */

/**
 * The strokes of one drawing, with no `<svg>` of their own, so the same
 * drawing can be set inside another composition: the crest on a character
 * page nests it in a seal.
 */
export function ArtStrokes({ strokes, tint: hue }: ArtProps): ReactElement {
  const drawIn = use(DrawInContext)

  // Keyed by the path and its transform: a drawing is a fixed list that is
  // never reordered, and one shape may be drawn again only under another
  // transform — a windmill's blades, a flower's petals. The art data tests
  // hold every drawing to that.
  return (
    <>
      {strokes.map((stroke) => {
        const enter = entrance(stroke, drawIn)

        return (
          <path
            key={`${stroke.d}|${stroke.transform ?? ''}`}
            d={stroke.d}
            // A drawn line is measured as one unit, so one dash the length
            // of the path can be slid along it. A dashed line keeps its own
            // dashes and fades in instead.
            pathLength={enter === styles.drawIn ? 1 : undefined}
            transform={stroke.transform}
            vectorEffect="non-scaling-stroke"
            {...stylex.props(
              styles.line,
              stroke.role === 'ambient' && styles.ambient,
              stroke.role === 'accent' && styles.accent(tintOf(hue)),
              stroke.dashed === true && styles.dashed,
              enter,
            )}
          />
        )
      })}
    </>
  )
}

/** How a stroke enters a drawing just lifted from the fog, if it was. */
function entrance(stroke: Stroke, drawIn: boolean): stylex.StyleXStyles {
  if (!drawIn) {
    return null
  }

  return stroke.dashed === true ? styles.fadeIn : styles.drawIn
}

/**
 * One drawing in a box of its own, for every place a drawing stands alone:
 * a waypoint on the route, a card, a tile.
 */
export function ChartArt(props: ArtProps): ReactElement {
  return (
    <svg
      aria-hidden="true"
      viewBox={ART_VIEWBOX}
      {...stylex.props(styles.svg)}
    >
      <ArtStrokes {...props} />
    </svg>
  )
}

// The pen: one dash as long as the path slides from hidden to whole.
const draw = stylex.keyframes({
  from: { strokeDashoffset: 1 },
  to: { strokeDashoffset: 0 },
})

const appear = stylex.keyframes({ from: { opacity: 0 }, to: { opacity: 1 } })

// How a lifted drawing is drawn: after the fog has begun to clear, over
// about twice the fog's own time. Reduced motion skips it: the drawing is
// simply there under the fog's crossfade.
const MOTION = '@media (prefers-reduced-motion: no-preference)'
const DRAW_DELAY = dur.short
const DRAW_TIME = `calc(${dur.long} * 2)`

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
  accent: (hue: string) => ({ stroke: hue }),
  dashed: { strokeDasharray: '3 6' },
  drawIn: {
    strokeDasharray: { [MOTION]: '1 1', default: null },
    // `pathLength` is measured wrong under `non-scaling-stroke` (Chrome
    // slides the dash off the path), so a drawing being drawn scales its
    // stroke with the box instead. At a tile's size that is within a few
    // tenths of a pixel of the 2px line.
    vectorEffect: { [MOTION]: 'none', default: null },
    animationDelay: DRAW_DELAY,
    animationDuration: DRAW_TIME,
    animationFillMode: 'backwards',
    animationName: { [MOTION]: draw, default: 'none' },
    animationTimingFunction: ease.inOut,
  },
  fadeIn: {
    animationDelay: DRAW_DELAY,
    animationDuration: DRAW_TIME,
    animationFillMode: 'backwards',
    animationName: { [MOTION]: appear, default: 'none' },
    animationTimingFunction: ease.out,
  },
})
