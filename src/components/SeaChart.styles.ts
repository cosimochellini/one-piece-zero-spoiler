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

/** Below this width the chart stands upright and the route runs down. */
const PHONE = '@media (max-width: 37.5rem)'
const MOTION = '@media (prefers-reduced-motion: no-preference)'

/** How long the route takes to draw itself in, from the origin to the ship. */
const DRAW = '1500ms'
/** How long one leg takes to fade in once the route reaches it. */
const LEG = '250ms'

const appear = stylex.keyframes({ from: { opacity: 0 }, to: { opacity: 1 } })

/** A thumb's width: every stop is a target this size, whatever its dot. */
const TARGET = '2.75rem'

/**
 * The chart's declarations, beside it rather than inside it, the way the
 * log keeps its own.
 */
export const styles = stylex.create({
  chart: { gap: space.md, display: 'grid', justifyItems: 'start' },
  across: {
    display: { [PHONE]: 'none', default: 'block' },
    maxWidth: '75rem',
    width: '100%',
  },
  down: { display: { [PHONE]: 'block', default: 'none' }, width: '100%' },

  frame: { position: 'relative' },
  svg: {
    borderColor: color.rule,
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    display: 'block',
    height: 'auto',
    width: '100%',
  },
  // The overlay the words and the stops sit in, the size of the drawing.
  layer: {
    inset: 0,
    margin: 0,
    padding: 0,
    listStyleType: 'none',
    pointerEvents: 'none',
    position: 'absolute',
  },

  // The world. Fog is the paler ground; a sea once opened is the night sea.
  fog: { fill: color.paper2 },
  region: { strokeWidth: rule.hair },
  sea: { fill: color.paper, stroke: color.rule },
  band: { fill: color.paper, stroke: color.rule2 },
  wall: { stroke: color.rule2 },
  wallGround: { fill: color.paper3 },
  wallHatch: { stroke: color.rule2, strokeWidth: 2 },
  seaGround: { fill: color.paper },
  beltStipple: { stroke: color.rule, strokeLinecap: 'round', strokeWidth: 1 },

  // The route. Gold is the one accent: the stretch sailed, in the line of
  // the ship that sailed it, and the ship.
  // Each leg fades in as the route reaches it, one after another from the
  // origin, so the route draws itself in once. Opacity only: a dash slid
  // along the line is measured wrong under `non-scaling-stroke`.
  legIn: {
    animationDuration: LEG,
    animationFillMode: 'backwards',
    animationName: { [MOTION]: appear, default: null },
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  },
  legAt: (delay: string) => ({ animationDelay: delay }),
  leg: { fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' },
  boat: { stroke: color.accent, strokeDasharray: '1 7', strokeWidth: 3 },
  first: { stroke: color.accent, strokeWidth: rule.fine },
  second: { stroke: color.accent, strokeWidth: 6 },
  secondInner: { stroke: color.paper, strokeWidth: 2 },
  branch: { stroke: color.accent, strokeDasharray: '6 4', strokeWidth: 1 },
  tail: { stroke: color.rule2, strokeDasharray: '3 6', strokeWidth: 2 },

  // Things set on the chart. `at` puts one at a point; `placed` beside it.
  at: (left: string, top: string) => ({ left, top }),
  placed: (left: string, top: string, transform: string) => ({
    transform,
    left,
    top,
  }),
  spot: { position: 'absolute', transform: 'translate(-50%, -50%)' },
  origin: {
    borderColor: color.accent,
    borderRadius: radius.pill,
    borderStyle: 'solid',
    borderWidth: rule.fine,
    backgroundColor: color.paper,
    height: '1rem',
    width: '1rem',
  },
  pin: {
    borderRadius: radius.input,
    paddingBlock: space.xs3,
    paddingInline: space.xs2,
    backgroundColor: color.paper,
    position: 'absolute',
    whiteSpace: 'nowrap',
  },
  // A band that stands upright on a phone is named along its length.
  upright: { writingMode: 'vertical-rl' },
  regionName: {
    color: color.muted,
    fontFamily: font.mono,
    fontSize: text.xs2,
    letterSpacing: '0.12em',
    lineHeight: 1,
    textTransform: 'uppercase',
  },
  count: {
    color: color.muted,
    fontFamily: font.mono,
    fontSize: text.xs,
    fontVariantNumeric: 'tabular-nums',
  },
  here: {
    borderColor: color.accent,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    gap: space.xs3,
    paddingBlock: space.xs2,
    paddingInline: space.xs,
    display: 'grid',
    whiteSpace: 'normal',
    maxWidth: '8.5rem',
    width: 'max-content',
  },
  hereName: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.base,
    fontWeight: 800,
    lineHeight: leading.heading,
  },
  hereStage: {
    color: color.accent,
    fontFamily: font.mono,
    fontSize: text.xs,
    fontVariantNumeric: 'tabular-nums',
  },
  // The ship and the label arrive once the route has reached them.
  late: {
    animationDelay: DRAW,
    animationDuration: LEG,
    animationFillMode: 'backwards',
    animationName: { [MOTION]: appear, default: null },
  },

  ship: {
    padding: space.xs3,
    borderColor: color.accent,
    borderRadius: radius.pill,
    borderStyle: 'solid',
    borderWidth: rule.fine,
    backgroundColor: color.paper,
    display: 'grid',
    position: 'absolute',
  },
  shipCurrent: { height: '3.5rem', width: '3.5rem' },
  shipEarlier: {
    borderColor: color.rule2,
    height: '2.25rem',
    width: '2.25rem',
  },
  shipAbove: { transform: 'translate(-50%, calc(-100% - 0.75rem))' },
  shipBelow: { transform: 'translate(-50%, 0.75rem)' },
  shipLeft: { transform: 'translate(calc(-100% - 0.75rem), -50%)' },
  shipRight: { transform: 'translate(0.75rem, -50%)' },
  shipArt: { overflow: 'visible', height: '100%', width: '100%' },

  // The stops: a thumb-sized target around a small dot.
  stop: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    height: TARGET,
    width: TARGET,
  },
  // The targets overlap where the stops crowd. A tap there goes to an open
  // stop before a stop under fog, and to the reader's own stop before any:
  // a fogged stop does nothing yet (#679). The list is its own stacking
  // context, so the order stays inside the chart.
  stops: { isolation: 'isolate' },
  stopOpen: { zIndex: 1 },
  stopHere: { zIndex: 2 },
  target: {
    padding: 0,
    borderRadius: radius.pill,
    borderStyle: 'none',
    outline: {
      'default': 'none',
      ':focus-visible': `${rule.fine} solid ${color.focus}`,
    },
    alignItems: 'center',
    backgroundColor: 'transparent',
    cursor: { 'default': 'pointer', ':is([aria-disabled=true])': 'default' },
    display: 'grid',
    justifyItems: 'center',
    pointerEvents: 'auto',
    height: '100%',
    width: '100%',
  },
  dot: {
    borderRadius: radius.pill,
    borderStyle: 'solid',
    borderWidth: rule.fine,
    display: 'block',
    transitionDuration: { [MOTION]: dur.micro, default: '0s' },
    transitionProperty: 'opacity',
    transitionTimingFunction: ease.out,
    height: '0.75rem',
    width: '0.75rem',
  },
  // A stop the index's picks leave out: still there, still a link, faint.
  dotDim: { opacity: 0.25 },
  dotOpen: (hue: string) => ({
    borderColor: color.paper,
    backgroundColor: hue,
  }),
  dotHere: {
    borderColor: color.accent,
    boxShadow: `0 0 0 ${rule.fine} ${color.paper}`,
    height: '1.125rem',
    width: '1.125rem',
  },
  dotFog: {
    borderColor: color.rule2,
    backgroundColor: color.paper2,
    height: '0.5rem',
    width: '0.5rem',
  },
})
