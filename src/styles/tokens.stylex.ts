import * as stylex from '@stylexjs/stylex'

/**
 * Design tokens for the "manga ink" look: stark paper-and-ink contrast, a
 * single red accent, system typography only. The CSP is `default-src 'self'`,
 * so no external font or image host is reachable, and none is used.
 *
 * The `.stylex.ts` suffix is mandatory rather than decorative: the compiler
 * only evaluates `defineVars` inside a `*.stylex.{js,ts}` module.
 *
 * The set is deliberately small. Every group below is consumed by
 * `src/components/SpoilerBadge.tsx` or `src/routes/index.tsx`; an unused
 * export would be reported by the fallow gate.
 */

/**
 * Ink and paper carry the whole contrast. `accent` is the only red the UI is
 * allowed anywhere, and `muted` is the only grey (5.3:1 on paper, so it still
 * clears WCAG AA as body text).
 */
export const colors = stylex.defineVars({
  ink: '#111111',
  paper: '#ffffff',
  accent: '#e01b24',
  muted: '#6b6b6b',
})

/**
 * A five-step rem scale. The large jumps from `lg` upward are what make the
 * page read as a printed page rather than as a form.
 */
export const space = stylex.defineVars({
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '2rem',
  xl: '4rem',
})

/**
 * Manga panels are inked with heavy, uniform strokes, so there are only two
 * widths: `thin` for anything boxed, `thick` for the rule under the title and
 * for the focus ring. `radius` is 2px rather than 0 so a panel reads as inked
 * paper instead of as a table cell.
 */
export const border = stylex.defineVars({
  thin: '2px',
  thick: '4px',
  radius: '2px',
})

/**
 * `sans` is set once on `<main>` and inherits; `mono` is the badge voice,
 * because a fixed-width stamped label is what sells the redaction.
 * `sizeTitle` is a clamp so the heading scales without a media query.
 */
export const text = stylex.defineVars({
  sans: 'ui-sans-serif, system-ui, "Segoe UI", Arial, sans-serif',
  mono: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
  sizeSmall: '0.8125rem',
  sizeBody: '1rem',
  sizeTitle: 'clamp(2.25rem, 7vw, 3.75rem)',
})
