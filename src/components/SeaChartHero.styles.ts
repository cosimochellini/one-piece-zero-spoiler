import * as stylex from '@stylexjs/stylex'

import { color, drift, dur, ease, rule } from '~/styles/tokens.stylex'

/**
 * The ink and the motion of the fold drawing, kept out of `SeaChartHero.tsx`
 * so that file is the composition and nothing else. StyleX compiles a
 * `create()` the same way wherever it is declared, so the atomic classes and
 * the rendered CSS are unchanged by the move.
 *
 * Every loop here is guarded rather than overridden: with reduced motion
 * requested there is no `animation-name` at all, so the blanket 150ms /
 * one-iteration floor in `global.css` has nothing to shorten and nothing to
 * strand halfway. No loop sets `animation-fill-mode`, and nothing rests at
 * `opacity: 0`, so the drawing with motion off is the drawing at rest.
 */

// One crest is exactly 60 units wide, so sliding a row of them 60 units left
// lands every crest on its neighbour's place: the last frame of the loop is
// the first frame, and a `linear` repeat has no seam. The foreground row has
// twice the period, so it moves twice as far.
const drift60 = stylex.keyframes({
  from: { transform: 'none' },
  to: { transform: 'translateX(-60px)' },
})

const drift120 = stylex.keyframes({
  from: { transform: 'none' },
  to: { transform: 'translateX(-120px)' },
})

// A hull rocks about its keel, not about its middle, which is what the
// `transform-origin` below is for.
const rock = stylex.keyframes({
  from: { transform: 'rotate(-1.6deg) translateY(-3px)' },
  to: { transform: 'rotate(1.6deg) translateY(3px)' },
})

const twinkle = stylex.keyframes({
  from: { opacity: 0.35 },
  to: { opacity: 1 },
})

const breathe = stylex.keyframes({
  from: { opacity: 0.6, transform: 'scale(0.96)' },
  to: { opacity: 1, transform: 'scale(1.04)' },
})

export const styles = stylex.create({
  svg: { display: 'block', height: '100%', width: '100%' },
  line: {
    fill: 'none',
    stroke: color.ink2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: rule.fine,
  },
  gold: { stroke: color.accent },
  ambient: { stroke: color.rule2 },
  // The deep field is depth, not points: a hairline in the ambient ink is as
  // faint as this drawing can go while still being drawn.
  faint: { stroke: color.rule2, strokeWidth: rule.hair },
  dotted: { strokeDasharray: '2 10' },

  // The bloom around the crescent. `fill-box` first, or the scale would
  // resolve its origin against the root view box and swing the moon across
  // the sea instead of pulsing it in place.
  halo: {
    animationDirection: 'alternate',
    animationDuration: drift.halo,
    animationIterationCount: 'infinite',
    animationName: {
      'default': 'none',
      '@media (prefers-reduced-motion: no-preference)': breathe,
    },
    animationTimingFunction: ease.inOut,
    transformBox: 'fill-box',
    transformOrigin: '50% 50%',
  },
  // The page's own overlay glow, never the accent: gold is a signal in this
  // drawing and a signal that fills a quarter of the sky is not one.
  haloCore: { stopColor: color.glow, stopOpacity: 0.5 },
  // A two-stop bloom falls off in a straight line, which reads as a disc with
  // an edge rather than as light. The middle stop bends it.
  haloMid: { stopColor: color.glow, stopOpacity: 0.12 },
  haloEdge: { stopColor: color.glow, stopOpacity: 0 },

  // The four rows share one loop and differ only in how long they take, which
  // is the whole of the parallax: the near row crosses a crest about twice as
  // often as the one at the horizon.
  swell: {
    animationIterationCount: 'infinite',
    animationName: {
      'default': 'none',
      '@media (prefers-reduced-motion: no-preference)': drift60,
    },
    animationTimingFunction: 'linear',
  },
  farRow: { animationDuration: drift.far },
  midRow: { animationDuration: drift.mid },
  nearRow: { animationDuration: drift.near },
  foreRow: {
    animationDuration: drift.fore,
    animationName: {
      'default': 'none',
      '@media (prefers-reduced-motion: no-preference)': drift120,
    },
  },

  // Three pairs of stars on one loop, started a beat apart, because a sky
  // where everything pulses together is a sky that blinks.
  pulse: {
    animationDirection: 'alternate',
    animationDuration: drift.star,
    animationIterationCount: 'infinite',
    animationName: {
      'default': 'none',
      '@media (prefers-reduced-motion: no-preference)': twinkle,
    },
    animationTimingFunction: ease.inOut,
  },
  pulseLate: { animationDelay: dur.long },
  pulseLater: { animationDelay: dur.short },
  // The lantern on the water breathes with the moon rather than with the
  // stars: it is a reflection, and reflections are slow.
  lantern: { animationDuration: drift.halo },

  rock: {
    animationDirection: 'alternate',
    animationDuration: drift.ship,
    animationIterationCount: 'infinite',
    animationName: {
      'default': 'none',
      '@media (prefers-reduced-motion: no-preference)': rock,
    },
    animationTimingFunction: ease.inOut,
    // Without `fill-box` the origin is the root view box, hundreds of units
    // away, and the ship leaves the frame on the first frame.
    transformBox: 'fill-box',
    transformOrigin: '50% 96%',
  },

  // The fog is the card surface itself, rising from nothing to solid across
  // the right third, so the course visibly disappears into it.
  fogStart: { stopColor: color.paper2, stopOpacity: 0 },
  fogEnd: { stopColor: color.paper2, stopOpacity: 0.96 },
})
