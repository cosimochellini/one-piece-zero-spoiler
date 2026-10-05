import * as stylex from '@stylexjs/stylex'

import { color, drift, dur, ease, rule } from '~/styles/tokens.stylex'

/**
 * The ink and the motion of the fold drawing, kept out of the components so
 * each of those is the composition and nothing else. StyleX compiles a
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
  from: { transform: 'rotate(-1.4deg) translateY(-3px)' },
  to: { transform: 'rotate(1.4deg) translateY(3px)' },
})

// Canvas fills and slackens from the yard down; the yard itself does not move.
const billow = stylex.keyframes({
  from: { transform: 'scale(1, 0.985)' },
  to: { transform: 'scale(1, 1.015)' },
})

// A pennant streams from its halyard, so it swings about its own left edge.
const flutter = stylex.keyframes({
  from: { transform: 'skewX(-6deg)' },
  to: { transform: 'skewX(6deg)' },
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
  // The far swell is depth, not water: the darkest stroke the paper allows.
  deep: { stroke: color.rule },
  // The deep field is depth, not points: a hairline in the ambient ink is as
  // faint as this drawing can go while still being drawn.
  faint: { stroke: color.rule2, strokeWidth: rule.hair },
  dotted: { strokeDasharray: '3 9' },

  // The bloom around the moon. `fill-box` first, or the scale would resolve
  // its origin against the root view box and swing the light across the sea
  // instead of pulsing it in place.
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
  haloCore: { stopColor: color.glow, stopOpacity: 0.7 },
  // A two-stop bloom falls off in a straight line, which reads as a disc with
  // an edge rather than as light. The middle stop bends it.
  haloMid: { stopColor: color.glow, stopOpacity: 0.14 },
  haloEdge: { stopColor: color.glow, stopOpacity: 0 },

  // The moon is the light ink, not white: the palette has no white, and the
  // disc is the biggest surface the drawing paints. Its rim is the one place
  // the accent is allowed to outline something the ship is not.
  moon: { fill: color.ink2 },
  moonRim: { fill: 'none', stroke: color.accent, strokeWidth: rule.hair },

  // The sea is the card surface itself, so the fold's frame and the water are
  // one colour and the drawing has no bottom edge.
  sea: { fill: color.paper2 },

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
  // The moon on the water breathes with the moon rather than with the stars:
  // it is a reflection, and reflections are slow.
  shimmer: { animationDuration: drift.halo },

  // The ship is the one solid in the drawing, and it is the paper: the
  // darkest surface the palette has, cut out of the brightest.
  fill: { fill: color.paper, stroke: 'none' },
  // The same shapes stroked in the route gold, drawn behind the fill so only
  // the outer half of the stroke shows: a hairline around her profile.
  rim: {
    fill: 'none',
    stroke: color.accent,
    strokeLinejoin: 'round',
    strokeWidth: rule.fine,
  },

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
    transformOrigin: '50% 100%',
  },
  // The sail breathes on the ship's loop but a beat behind the rock, so the
  // two never read as one motion.
  sail: {
    animationDelay: dur.long,
    animationDirection: 'alternate',
    animationDuration: drift.ship,
    animationIterationCount: 'infinite',
    animationName: {
      'default': 'none',
      '@media (prefers-reduced-motion: no-preference)': billow,
    },
    animationTimingFunction: ease.inOut,
    transformBox: 'fill-box',
    transformOrigin: '50% 0%',
  },
  // The pennants are the quickest thing on the water, on the stars' beat.
  pennant: {
    animationDirection: 'alternate',
    animationDuration: drift.star,
    animationIterationCount: 'infinite',
    animationName: {
      'default': 'none',
      '@media (prefers-reduced-motion: no-preference)': flutter,
    },
    animationTimingFunction: ease.inOut,
    transformBox: 'fill-box',
    transformOrigin: '0% 50%',
  },

  // The fog is the card surface itself, rising from nothing to solid across
  // the right third, so the course visibly disappears into it.
  fogStart: { stopColor: color.paper2, stopOpacity: 0 },
  fogEnd: { stopColor: color.paper2, stopOpacity: 0.96 },
})
