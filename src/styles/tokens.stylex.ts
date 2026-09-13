/* Hallmark · pre-emit critique: P5 H4 E4 S5 R4 V5 */
/* Hallmark · route: custom (bespoke) · genre: atmospheric · macrostructure: Map / Diagram
 *   with an illustrated fold
 * · structure: line-drawn fold (night sea, caravel, course into fog, headline set
 *   into it) · sticky orientation column (lede · dial · legend) beside a vertical
 *   sea-route of waypoints, each with a framed line drawing; the reader's episode
 *   is a horizon line across the route and everything below it is under fog
 * · idea: "the spoiler boundary is a horizon you move"
 * · theme: custom "Sea Chart" · vibe: night sea, lantern gold, hand-drawn chart
 * · paper: oklch(13% 0.025 250) · accent: oklch(84% 0.16 88)
 * · display: Bricolage Grotesque 800 · body: Instrument Sans · outlier: JetBrains Mono
 *   (episode numerals + the horizon label)
 * · axes: dark / geometric-sans / chromatic-amber (88°) — differs from the previous
 *   build on all three (was light / display-heavy / warm 55°)
 * · nav: N9 edge-aligned (was N6) · footer: Ft4 dense colophon (was Ft5)
 * · sections: H2-shaped orientation column · F4-shaped route · legend · FAQ rows
 * · enrichment: Tier B hand-built SVG throughout — 35 line drawings (one object or
 *   place per record, 2px uniform stroke, no fills, one tint each from the 19-hue
 *   `tint` set), the fold chart, route segments, compass, legend swatches; no
 *   photographs, no official artwork
 * · contrast: pass (40-41) — ink 17.4:1 · ink2 12.3:1 · muted 8.1:1 · accent 12.2:1
 *   on paper; rule2 3.15:1 on paper3, the darkest surface a control sits on;
 *   accentInk 11.8:1 on accent
 * · honest: pass (46) — every number on the page is the reader's bookmark or a
 *   count of the archive at render time
 * · slop: pass (42-45) · chrome: pass (47) · tokens: pass (48) · icons: pass (30)
 * · type: 3 families, outlier in 2 registers (37-38) · no italic heads (38a)
 * · mobile 320/375/414/768 + 1280/1440: verified in headless Chrome — no horizontal
 *   scroll, no wrapped affordance, horizon between open and fogged rows (34, 49-57) */
import * as stylex from '@stylexjs/stylex'

/**
 * Design tokens for "Sea Chart": a One Piece wiki drawn as a night-time sea
 * route. The taxonomy is Hallmark's canonical set (paper / ink / rule / muted /
 * accent / accentInk / focus, a 4pt space scale, named easings and durations),
 * so a reader of any other Hallmark project knows the names already.
 *
 * Hallmark normally emits a `tokens.css` holding `:root { --color-ink: … }`.
 * We do not, and there is no second source of truth: `stylex.defineVars`
 * compiles to exactly those CSS custom properties. Keeping the values here
 * means the StyleX compiler can inline them and the fallow gate can see them.
 *
 * The `.stylex.ts` suffix is mandatory rather than decorative: the compiler
 * only evaluates `defineVars` inside a `*.stylex.{js,ts}` module.
 */

/**
 * Every colour is OKLCH. The neutrals are all tinted toward the same deep blue
 * (hue 250), and there is exactly one accent, a lantern gold set against it.
 * That pairing is complementary on purpose: the accent is a signal on a dark
 * sea, not a tint the neutrals should follow. No `#000`, no `#fff`.
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
export const color = stylex.defineVars({
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
  // active locale, focus rings and one verb per veil. Never a large fill.
  accent: 'oklch(84% 0.16 88)',
  // A hard contract. Any surface painted `accent` that carries text sets its
  // colour to this, never to a hardcoded dark.
  accentInk: 'oklch(16% 0.03 250)',
  focus: 'oklch(88% 0.15 92)',
  // The two overlays, and the only tokens with an alpha channel. Both are
  // modifiers laid over `paper`, not colours anything is painted in: the
  // lantern bloom at the top of the page, and the sea that darkens the page
  // behind the bookmark dialog.
  glow: 'oklch(70% 0.12 80 / 0.22)',
  scrim: 'oklch(13% 0.025 250 / 0.72)',
})

/**
 * The one colour each drawing is allowed. Nineteen hues, all light enough
 * (L 66-92%) to clear 5:1 against `paper2`, the card surface, as a 2px line.
 * A drawing takes exactly one of these for its main stroke and leaves every
 * other line in `ink2`, so thirty-five illustrations read as one set rather
 * than as thirty-five palettes. They are not text colours and are never used
 * outside `ChartArt` and the hero chart.
 */
export const tint = stylex.defineVars({
  red: 'oklch(68% 0.2 25)',
  vermilion: 'oklch(70% 0.19 38)',
  orange: 'oklch(76% 0.17 58)',
  ocher: 'oklch(78% 0.13 82)',
  yellow: 'oklch(88% 0.16 98)',
  acid: 'oklch(86% 0.2 128)',
  green: 'oklch(76% 0.17 148)',
  teal: 'oklch(80% 0.13 188)',
  cyan: 'oklch(83% 0.13 212)',
  azure: 'oklch(80% 0.11 236)',
  blue: 'oklch(74% 0.12 262)',
  ice: 'oklch(92% 0.04 220)',
  lavender: 'oklch(80% 0.1 296)',
  violet: 'oklch(74% 0.15 306)',
  magenta: 'oklch(74% 0.19 346)',
  pink: 'oklch(82% 0.11 352)',
  flamingo: 'oklch(78% 0.14 6)',
  sand: 'oklch(86% 0.08 82)',
  wine: 'oklch(66% 0.17 14)',
})

/**
 * Hallmark's 4pt scale, ten steps, named by role. The keys are camelCase
 * because a `defineVars` key has to be a valid identifier, so the usual
 * `3xs … 4xl` names shift one character:
 *
 *   xs3 = 3xs (2px)    xs2 = 2xs (4px)    xs = 8px     sm = 12px   md = 16px
 *   lg  = 24px         xl  = 40px         xl2 = 64px   xl3 = 96px  xl4 = 144px
 *
 * Sibling spacing is `gap`. `margin` is for optical adjustment only.
 */
export const space = stylex.defineVars({
  xs3: '0.125rem',
  xs2: '0.25rem',
  xs: '0.5rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2.5rem',
  xl2: '4rem',
  xl3: '6rem',
  xl4: '9rem',
})

/**
 * Two families plus one outlier, which is Hallmark's 2+1 ceiling. The outlier
 * is confined to two slots: episode numerals wherever they appear, and the
 * horizon label on the route.
 *
 * `Bricolage Grotesque` is a variable display grotesque (weight 200-800, width
 * 75-100, optical size 12-96). It is only ever set at 800 and only on the
 * headline, the wordmark, waypoint names and legend figures. Body copy is
 * `Instrument Sans`, a variable text sans (weight 400-700). All three are
 * self-hosted from `public/fonts`, which keeps the CSP at `default-src 'self'`.
 */
export const font = stylex.defineVars({
  display:
    "'Bricolage Grotesque', 'Bricolage Grotesque Fallback', Arial, sans-serif",
  body: "'Instrument Sans', 'Instrument Sans Fallback', Arial, sans-serif",
  mono: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
})

/**
 * A 1.25 major third on a 16px base, plus one fluid display size.
 *
 * `display` is sized for a two-line headline in a column that is at most half
 * the page: 2.5rem on a phone, 4rem at 96rem and above. The headline is 32
 * characters, inside the 21-50 bracket that gets the full display size.
 */
export const text = stylex.defineVars({
  xs: '0.75rem',
  base: '1rem',
  lg: '1.25rem',
  xl: '1.5625rem',
  display: 'clamp(2.5rem, 1.6vw + 1.6rem, 4rem)',
})

/**
 * `display` sits at 1.0: the headline is sentence case in a face with short
 * descenders, and the lines are meant to sit close.
 */
export const leading = stylex.defineVars({
  display: '1',
  heading: '1.15',
  body: '1.6',
})

/** Elements entering decelerate; elements leaving accelerate away. */
export const ease = stylex.defineVars({
  out: 'cubic-bezier(0.16, 1, 0.3, 1)',
  in: 'cubic-bezier(0.7, 0, 0.84, 0)',
  inOut: 'cubic-bezier(0.65, 0, 0.35, 1)',
})

/** Three buckets. An exit runs at roughly 75% of its enter. */
export const dur = stylex.defineVars({
  micro: '120ms',
  short: '220ms',
  long: '420ms',
})

/**
 * A chart is drawn with a ruler, so the radii are small. `pill` is kept for
 * the locale switch, which is the one control that reads as a toggle rather
 * than as a mark on the chart.
 */
export const radius = stylex.defineVars({
  card: '4px',
  input: '3px',
  pill: '999px',
})

/** Two widths. `fine` is the interactive boundary, `hair` is the hairline. */
export const rule = stylex.defineVars({
  hair: '1px',
  fine: '2px',
})

/**
 * Hallmark's six named levels, plus `skip`.
 *
 * `sticky` and `stickyNav` are separate so a banner pinned under the bar
 * cannot climb over it. `skip` sits above everything by definition: a skip
 * link that any other layer can cover is a skip link that does not work.
 */
export const z = stylex.defineVars({
  base: '1',
  raised: '10',
  dropdown: '100',
  sticky: '200',
  stickyNav: '210',
  tooltip: '600',
  skip: '700',
})
