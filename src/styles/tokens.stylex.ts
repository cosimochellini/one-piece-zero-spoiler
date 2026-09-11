/* Hallmark · pre-emit critique: P5 H4 E4 S5 R5 V5 */
/* Hallmark · genre: editorial · macrostructure: Stat-Led · theme: custom "Bounty Bulletin"
 * · enrichment: none (typography only) · polish: none · nav: N6 newspaper masthead
 * · footer: Ft5 statement · sections: H4 figure · T4 tally · F3 ledger · S4 inline heads
 * · vibe: a bounty bulletin printed on parchment
 * · paper: oklch(96.5% 0.015 85) · accent: oklch(52% 0.128 55)
 * · display: Tanker · body: Newsreader · outlier: JetBrains Mono (numerals + edition line)
 * · axes: paper light · display display-heavy · accent warm (55°)
 * · contrast: pass (40-41) — ink 16.4:1 · muted 7.7:1 · accent 5.2:1 on paper
 * · honest: pass (46) — the hero figure is the reader's own bookmark and the
 *   tally is counted from the archive; no number on the page is asserted
 * · slop: pass (42-45) · chrome: pass (47) · tokens: pass (48) · icons: pass (30)
 * · type: 3 families, outlier in 2 registers (gates 37-38)
 * · mobile 320/375/414/768: NOT verified — no browser was reachable from the
 *   session that wrote this, so gates 34 and 49-57 are argued from the code,
 *   not observed. Someone still has to look at it. */
import * as stylex from '@stylexjs/stylex'

/**
 * Design tokens for "Bounty Bulletin": a bounty-poster wiki printed on
 * parchment. The taxonomy follows Hallmark's canonical token names (paper /
 * ink / rule / muted / accent / accentInk / focus, a 4pt space scale, named
 * easings and durations) rather than inventing a second vocabulary.
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
 * Every colour is OKLCH, every neutral carries a trace of the parchment hue,
 * and there is exactly one accent. No `#000`, no `#fff`.
 *
 * Contrast against `paper`, computed from the OKLCH values (WCAG 2.1):
 *
 *   ink   16.4:1   ink2  11.5:1   muted  7.7:1   accent  5.2:1   focus  7.4:1
 *   rule2  3.8:1 (control boundaries)   rule  1.9:1 (decorative hairlines only)
 *
 * On the tile surface `paper2` the same values read 14.8 / 10.3 / 6.9 / 4.7 /
 * 6.6 / 3.4, so body text clears the 7:1 target and the accent clears 4.5:1
 * on both surfaces. `accentInk` on `accent` is 5.3:1.
 *
 * The chroma on `paper2` and `paper3` (0.020 and 0.024) runs just above the
 * 0.005-0.015 band Hallmark suggests for neutrals. That is the parchment, and
 * it is the one deliberate deviation in this palette.
 */
export const color = stylex.defineVars({
  paper: 'oklch(96.5% 0.015 85)',
  paper2: 'oklch(93% 0.02 82)',
  paper3: 'oklch(89% 0.024 80)',
  // Decorative hairlines only. A control boundary needs 3:1 and must use
  // `rule2` or `ink` instead.
  rule: 'oklch(76% 0.018 78)',
  rule2: 'oklch(58% 0.02 75)',
  muted: 'oklch(42% 0.014 70)',
  ink2: 'oklch(32% 0.014 65)',
  ink: 'oklch(20% 0.013 60)',
  // Burnt bounty ochre. It is a highlighter, not a colour block: focus rings,
  // the active nav mark, the seal, one CTA border. Never a large fill.
  accent: 'oklch(52% 0.128 55)',
  // A hard contract. Any surface painted `accent` that carries text sets its
  // colour to this, never to a hardcoded white.
  accentInk: 'oklch(97% 0.012 85)',
  focus: 'oklch(44% 0.12 48)',
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
 * is confined to two slots: the masthead edition line and any episode number.
 *
 * `Tanker` is a poster face and only works large, so it is never set below
 * `displayS`. Body copy is `Newsreader`, a reading serif with an optical-size
 * axis. Both are self-hosted from `public/fonts`, which keeps the CSP at
 * `default-src 'self'`.
 */
export const font = stylex.defineVars({
  display: "'Tanker', 'Tanker Fallback', Impact, sans-serif",
  body: "'Newsreader', 'Newsreader Fallback', Georgia, serif",
  mono: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
})

/**
 * A 1.25 major third on a 17px base. 17px rather than 16px because the page
 * is built to be read at length.
 *
 * `display` tops out at 80px, under Hallmark's 88px ceiling. A single page
 * uses at most five of these sizes.
 */
export const text = stylex.defineVars({
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1.0625rem',
  lg: '1.3125rem',
  xl: '1.625rem',
  xl2: '2.0625rem',
  displayS: 'clamp(2.25rem, 6vw, 3.25rem)',
  display: 'clamp(2.75rem, 9vw, 5rem)',
})

/**
 * `display` sits at 1.02 rather than 1.0 because Tanker is set uppercase and
 * an all-caps head has no descenders to protect.
 */
export const leading = stylex.defineVars({
  display: '1.02',
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
 * A bounty poster is printed, not moulded, so the radii are small. `pill` is
 * kept for the locale switch, which is the one control that reads as a
 * toggle rather than as a stamp.
 */
export const radius = stylex.defineVars({
  card: '3px',
  input: '2px',
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
 * `sticky` and `stickyNav` are separate so a banner pinned under the masthead
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
