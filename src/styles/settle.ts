import * as stylex from '@stylexjs/stylex'

import { dur, ease } from '~/styles/tokens.stylex'

/**
 * The page load orchestration every listing and every long page shares: the
 * bands settle in DOM order, one step apart.
 *
 * It is one module because three pages were declaring it separately and had
 * already drifted by a step. The animation is guarded rather than overridden,
 * so with reduced motion requested the bands are simply present and nothing
 * depends on an animation having run. Only `opacity` and `transform` move, so
 * it composites.
 */
const settle = stylex.keyframes({
  from: { opacity: 0, transform: 'translateY(10px)' },
  to: { opacity: 1, transform: 'none' },
})

// Far enough apart to read as an order, close enough that a page of four
// bands has settled well inside the half-second cap.
const SETTLE_STEP_MS = 70

/** How long the nth band waits before it settles. */
function settleDelay(index: number): string {
  return `${String(index * SETTLE_STEP_MS)}ms`
}

export const settleStyles = stylex.create({
  // The first frame holds through the delay (`backwards`), so a band waits
  // unseen; once settled the band keeps nothing of the animation. A held
  // `transform`, even `none` as its last frame, would make every band the
  // containing block of its fixed children: the chart's peek, a sheet on a
  // phone, would sit at the foot of the band instead of the screen (#728).
  band: {
    animationDuration: dur.long,
    animationFillMode: 'backwards',
    animationName: {
      'default': 'none',
      '@media (prefers-reduced-motion: no-preference)': settle,
    },
    animationTimingFunction: ease.out,
  },
  /** How long the nth band waits before it settles. */
  at: (index: number) => ({ animationDelay: settleDelay(index) }),
})
