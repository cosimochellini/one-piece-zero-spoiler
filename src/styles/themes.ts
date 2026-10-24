import * as stylex from '@stylexjs/stylex'

import { color, type NEUTRAL } from '~/styles/tokens.stylex'

/** A theme sets every colour token, so nothing of the site's own leaks in. */
type Palette = Record<keyof typeof NEUTRAL, string>

/**
 * One Piece, "Sea Chart". Every colour is OKLCH. The neutrals are all tinted
 * toward the same deep blue (hue 250), and there is exactly one accent, a
 * lantern gold set against it. That pairing is complementary on purpose: the
 * accent is a signal on a dark sea, not a tint the neutrals should follow. No
 * `#000`, no `#fff`.
 *
 * Contrast against `paper`, computed from the OKLCH values (WCAG 2.1):
 *
 *   ink   17.4:1   ink2  12.3:1   muted  8.1:1   accent  12.2:1   focus  14.0:1
 *   rule2  3.7:1 (control boundaries)   rule  1.5:1 (decorative hairlines only)
 *
 * On `paper3`, the lightest surface, the same values read 15.0 / 10.6 / 7.0 /
 * 10.5 / 12.0 / 3.15, so body text clears 7:1 and a control boundary clears
 * 3:1 on every surface. `accentInk` on `accent` is 11.8:1.
 *
 * The chroma on the papers (0.025-0.030) runs above the 0.005-0.015 band
 * Hallmark suggests for neutrals. That is the sea, and it is the one
 * deliberate deviation in this palette.
 */
const ONE_PIECE: Palette = {
  paper: 'oklch(13% 0.025 250)',
  paper2: 'oklch(17% 0.028 250)',
  paper3: 'oklch(22% 0.03 250)',
  // Decorative hairlines only. A control boundary needs 3:1 and must use
  // `rule2` or `ink` instead.
  rule: 'oklch(30% 0.025 250)',
  rule2: 'oklch(52% 0.03 250)',
  muted: 'oklch(72% 0.02 250)',
  ink2: 'oklch(84% 0.015 250)',
  ink: 'oklch(95% 0.01 250)',
  // Lantern gold. It draws the sailed part of the route, the horizon line, the
  // active locale, focus rings and one verb per veil. Never a large fill, with
  // one exception: the Save button of the bookmark dialog (owner, 2026-10-12).
  accent: 'oklch(84% 0.16 88)',
  // A hard contract. Any surface painted `accent` that carries text sets its
  // colour to this, never to a hardcoded dark.
  accentInk: 'oklch(16% 0.03 250)',
  focus: 'oklch(88% 0.15 92)',
  // The three overlays, and the only tokens with an alpha channel. All are
  // modifiers laid over `paper`, not colours anything is painted in: the
  // lantern bloom at the top of the page, the sea that darkens the page
  // behind the bookmark dialog, and the glass of the pinned site bar,
  // which lets the bloom through where the page begins.
  glow: 'oklch(70% 0.12 80 / 0.22)',
  scrim: 'oklch(13% 0.025 250 / 0.72)',
  veil: 'oklch(13% 0.025 250 / 0.88)',
}

const onePiece = stylex.createTheme(color, ONE_PIECE)

/** Each series theme's values, by the name its description carries. */
export const PALETTES = { 'one-piece': ONE_PIECE }

/** The name a series description gives its theme. */
export type SeriesTheme = keyof typeof PALETTES

/**
 * The compiled overrides, set on `<html>` so the page, the bloom on `<body>`
 * and every dialog's backdrop take the same colours.
 */
export const THEMES: Record<SeriesTheme, typeof onePiece> = {
  'one-piece': onePiece,
}
