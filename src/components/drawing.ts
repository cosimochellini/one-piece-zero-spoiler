import type { ArtId, TintId } from '~/data/types'
import { color, tint } from '~/styles/tokens.stylex'

/**
 * What the drawing renderer needs to know, and the two things every
 * composition around a drawing shares with it: the box the drawing is
 * composed in, and the colour its main stroke takes.
 *
 * They live apart from ChartArt.tsx so that file exports components only and
 * Vite can refresh it in place.
 */
export type ArtProps = { readonly art: ArtId; readonly tint: TintId }

/** The box every drawing is composed in. A host `<svg>` uses it as its viewBox. */
export const ART_VIEWBOX = '0 0 160 200'

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

/** The CSS colour a tint id resolves to, for compositions outside the drawings. */
export function tintOf(hue: TintId): string {
  return TINT_VAR[hue]
}
