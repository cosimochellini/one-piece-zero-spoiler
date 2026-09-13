import * as stylex from '@stylexjs/stylex'

import { DRAWINGS, type Stroke } from '~/data/art'
import type { ArtId, TintId } from '~/data/types'
import { color, rule, tint } from '~/styles/tokens.stylex'

/**
 * The renderer for every line drawing in the archive. The drawings
 * themselves are data in `~/data/art`, filed by saga.
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

export type ArtProps = {
  readonly art: ArtId
  readonly tint: TintId
}

/** The box every drawing is composed in. A host `<svg>` uses it as its viewBox. */
export const ART_VIEWBOX = '0 0 160 200'

/**
 * The strokes of one drawing, with no `<svg>` of their own, so the same
 * drawing can be set inside another composition: the crest on a character
 * page nests it in a seal.
 */
export function ArtStrokes({ art, tint: hue }: ArtProps) {
  // Widened on purpose: each saga's drawings are typed as literally as they
  // are written, and the renderer only needs to know they are strokes.
  const strokes: readonly Stroke[] = DRAWINGS[art]

  return strokes.map((stroke, index) => (
    <path
      key={index}
      d={stroke.d}
      transform={stroke.transform}
      vectorEffect="non-scaling-stroke"
      {...stylex.props(
        styles.line,
        stroke.role === 'ambient' && styles.ambient,
        stroke.role === 'accent' && styles.accent(TINT_VAR[hue]),
        stroke.dashed === true && styles.dashed,
      )}
    />
  ))
}

export function ChartArt(props: ArtProps) {
  return (
    <svg aria-hidden="true" viewBox={ART_VIEWBOX} {...stylex.props(styles.svg)}>
      <ArtStrokes {...props} />
    </svg>
  )
}

/** The CSS colour a tint id resolves to, for compositions outside the drawings. */
export function tintOf(hue: TintId): string {
  return TINT_VAR[hue]
}

/** `ivory` is the second ink itself: a drawing with no colour of its own. */
const TINT_VAR: Readonly<Record<TintId, string>> = {
  red: tint.red,
  vermilion: tint.vermilion,
  orange: tint.orange,
  ocher: tint.ocher,
  yellow: tint.yellow,
  acid: tint.acid,
  green: tint.green,
  teal: tint.teal,
  cyan: tint.cyan,
  azure: tint.azure,
  blue: tint.blue,
  ice: tint.ice,
  lavender: tint.lavender,
  violet: tint.violet,
  magenta: tint.magenta,
  pink: tint.pink,
  flamingo: tint.flamingo,
  sand: tint.sand,
  wine: tint.wine,
  ivory: color.ink2,
}

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
  accent: (hue: string) => ({ stroke: hue }),
  dashed: {
    strokeDasharray: '3 6',
  },
})
