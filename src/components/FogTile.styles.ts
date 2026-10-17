import * as stylex from '@stylexjs/stylex'

import {
  color,
  dur,
  ease,
  font,
  leading,
  radius,
  rule,
  space,
  text,
} from '~/styles/tokens.stylex'

/**
 * The fog tile's declarations: the frame, the two banks of fog that drift in
 * it, the lines under it, and the button laid over the whole tile.
 */
// The only motion the fog makes: a slow drift and a breath. Transform and
// opacity only, so it stays on the compositor.
const drift = stylex.keyframes({
  from: { transform: 'translate3d(-12%, -4%, 0) scale(1)' },
  to: { transform: 'translate3d(12%, 5%, 0) scale(1.08)' },
})

const breathe = stylex.keyframes({
  from: { opacity: 0.25 },
  to: { opacity: 0.6 },
})

const MOTION = '@media (prefers-reduced-motion: no-preference)'
const REDUCED = '@media (prefers-reduced-motion: reduce)'

// Slow enough to read as weather rather than as an animation.
const NEAR_DRIFT = '19s'
const FAR_DRIFT = '27s'

// The frame's own shape: the drawing of an open tile is 4:5 at every width.
const FRAME_RATIO = '4 / 5'

// The small-caps tracking the mono lines under a tile are set in.
const META_TRACKING = '0.08em'

export const styles = stylex.create({
  tile: {
    gap: space.xs2,
    alignContent: 'start',
    display: 'grid',
    position: 'relative',
    minWidth: 0,
  },
  content: { display: 'grid', minWidth: 0 },
  frame: {
    borderColor: color.rule,
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    aspectRatio: FRAME_RATIO,
    backgroundColor: color.paper2,
    display: 'block',
  },
  line: {
    color: color.muted,
    fontFamily: font.mono,
    fontSize: text.xs,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 600,
    letterSpacing: META_TRACKING,
    lineHeight: leading.body,
    overflowWrap: 'anywhere',
    textTransform: 'uppercase',
    minWidth: 0,
  },
  lastLine: { color: color.ink2 },

  // Laid over the frame, the same box. Off the screen the browser skips it,
  // and with it the drift, so a page of fifty tiles animates the few in view.
  fog: {
    borderRadius: radius.card,
    insetInline: 0,
    overflow: 'hidden',
    aspectRatio: FRAME_RATIO,
    contentVisibility: 'auto',
    insetBlockStart: 0,
    opacity: 1,
    pointerEvents: 'none',
    position: 'absolute',
    transform: 'none',
    transitionDuration: dur.long,
    transitionProperty: 'opacity, transform, visibility',
    transitionTimingFunction: ease.out,
    visibility: 'visible',
  },
  fogCleared: {
    opacity: 0,
    transform: { [REDUCED]: 'none', default: 'scale(1.15)' },
    visibility: 'hidden',
  },
  layer: {
    inset: '-30%',
    animationDirection: 'alternate',
    animationIterationCount: 'infinite',
    animationName: { [MOTION]: `${drift}, ${breathe}`, default: 'none' },
    animationTimingFunction: 'ease-in-out',
    position: 'absolute',
  },
  // Two banks of fog in the theme's own greys, each a few soft clouds that
  // fade to nothing, so the frame's paper shows between them.
  near: {
    animationDuration: `${NEAR_DRIFT}, 7s`,
    backgroundImage: `radial-gradient(ellipse 34% 11% at 32% 38%, ${color.ink2}, transparent), radial-gradient(ellipse 30% 9% at 66% 58%, ${color.muted}, transparent), radial-gradient(ellipse 26% 8% at 40% 72%, ${color.ink2}, transparent)`,
    opacity: 0.4,
  },
  far: {
    animationDirection: 'alternate-reverse',
    animationDuration: `${FAR_DRIFT}, 11s`,
    backgroundImage: `radial-gradient(ellipse 40% 16% at 62% 34%, ${color.rule2}, transparent), radial-gradient(ellipse 36% 14% at 34% 62%, ${color.rule2}, transparent)`,
    opacity: 0.3,
  },

  // The whole tile is the target. The words sit over the frame.
  button: {
    inset: 0,
    padding: 0,
    borderRadius: radius.card,
    borderStyle: 'none',
    alignContent: 'start',
    backgroundColor: 'transparent',
    color: color.ink,
    cursor: 'pointer',
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr)',
    opacity: 1,
    // Shown at once: the ring is never part of the transition.
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs2,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    position: 'absolute',
    textAlign: 'center',
    transitionDuration: dur.long,
    transitionProperty: 'opacity, visibility',
    transitionTimingFunction: ease.out,
    visibility: 'visible',
  },
  // Out of sight and still read: the live region a screen reader hears.
  hidden: {
    overflow: 'hidden',
    clipPath: 'inset(50%)',
    position: 'absolute',
    whiteSpace: 'nowrap',
    height: '1px',
    width: '1px',
  },
  buttonSpent: { opacity: 0, pointerEvents: 'none', visibility: 'hidden' },
  prompt: {
    padding: space.xs,
    gap: space.xs,
    alignContent: 'center',
    aspectRatio: FRAME_RATIO,
    display: 'grid',
    justifyItems: 'center',
  },
  question: {
    paddingInline: space.xs2,
    backgroundColor: color.paper,
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.base,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
  confirm: {
    paddingInline: space.xs2,
    backgroundColor: color.paper,
    color: color.accent,
    fontFamily: font.body,
    fontSize: text.base,
    fontWeight: 700,
    textDecorationLine: 'underline',
    textUnderlineOffset: '2px',
  },
})

// Where in its drift a tile starts: three offsets, so neighbours differ.
// Static classes rather than an inline style, so a covered tile carries no
// `style` attribute at all.
const phases = stylex.create({
  first: { animationDelay: '0s, 0s' },
  second: { animationDelay: '-9s, -3s' },
  third: { animationDelay: '-17s, -6s' },
})
export const PHASES = [phases.first, phases.second, phases.third]
