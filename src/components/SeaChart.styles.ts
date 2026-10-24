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
  tint,
} from '~/styles/tokens.stylex'

const MOTION = '@media (prefers-reduced-motion: no-preference)'

/** How long the route takes to draw itself in, from the origin to the ship. */
const DRAW = '1500ms'
/** How long one leg takes to fade in once the route reaches it. */
const LEG = '250ms'

const appear = stylex.keyframes({ from: { opacity: 0 }, to: { opacity: 1 } })

/** Centred on its point. */
const CENTRED = 'translate(-50%, -50%)'

/** A thumb's width: every stop is a target this size, whatever its dot. */
const TARGET = '2.75rem'

/**
 * The chart's declarations, beside it rather than inside it, the way the
 * log keeps its own.
 */
export const styles = stylex.create({
  chart: { gap: space.md, display: 'grid', justifyItems: 'start' },
  across: { maxWidth: '75rem', width: '100%' },
  down: { width: '100%' },

  // The window: the chart's proportions, its edge drawn, the world inside it
  // placed by the zoom. Across, a finger across pans; one down scrolls.
  frame: {
    borderColor: color.rule,
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    position: 'relative',
    width: '100%',
  },
  ratio: (ratio: number) => ({ aspectRatio: ratio }),
  pannable: { cursor: 'grab', touchAction: 'pan-y', userSelect: 'none' },
  // What the window cuts off: each layer of the world in one of these.
  clip: {
    inset: 0,
    borderRadius: radius.card,
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
  },
  world: { position: 'absolute' },
  size: (width: string, height: string) => ({ height, width }),
  svg: { display: 'block', height: '100%', width: '100%' },
  zoomRow: {
    gap: space.sm,
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBlockStart: space.xs,
  },
  zoom: { gap: space.xs2, display: 'flex' },
  // At the limit a button stays focusable (`aria-disabled`): it does
  // nothing, and the focus does not fall to the page.
  zoomLimit: { cursor: 'not-allowed', opacity: 0.55 },
  zoomButton: {
    backgroundColor: color.paper,
    fontFamily: font.mono,
    fontSize: text.base,
    minWidth: '2.75rem',
  },
  hint: {
    color: color.muted,
    fontFamily: font.mono,
    fontSize: text.xs,
    marginBlockStart: space.xs,
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
  // Luffy alone, where the ship does not sail: his own thin red line.
  luffy: { stroke: tint.red, strokeWidth: 1.5 },
  tail: { stroke: color.rule2, strokeDasharray: '3 6', strokeWidth: 2 },

  // Things set on the chart. `at` puts one at a point; `placed` beside it.
  at: (left: string, top: string) => ({ left, top }),
  placed: (left: string, top: string, transform: string) => ({
    transform,
    left,
    top,
  }),
  spot: { position: 'absolute', transform: CENTRED },
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
  // An open stop's name, beside its dot on the side away from the band.
  stopName: {
    borderRadius: radius.input,
    paddingBlock: '0.0625rem',
    paddingInline: space.xs3,
    backgroundColor: `color-mix(in oklch, ${color.paper} 78%, transparent)`,
    color: color.ink2,
    fontFamily: font.display,
    fontSize: text.xs,
    fontWeight: 600,
    lineHeight: 1.3,
    overflowWrap: 'anywhere',
    position: 'absolute',
    textAlign: 'center',
    whiteSpace: 'normal',
  },
  nameBox: (left: string, top: string, width: string) => ({
    transform: CENTRED,
    left,
    top,
    width,
  }),
  nameLeader: { fill: 'none', stroke: color.rule2, strokeWidth: 1 },
  // A saga's name: large, faint, in its hue, behind the stops' names.
  sagaName: (hue: string) => ({
    color: `color-mix(in oklch, ${hue} 70%, transparent)`,
    fontFamily: font.display,
    fontSize: text.xs,
    fontWeight: 800,
    letterSpacing: '0.16em',
    lineHeight: 1,
    position: 'absolute',
    textTransform: 'uppercase',
    transform: CENTRED,
    whiteSpace: 'nowrap',
  }),
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
  // A ship is a button that opens her peek.
  shipButton: {
    outline: {
      'default': 'none',
      ':focus-visible': `${rule.fine} solid ${color.focus}`,
    },
    color: 'inherit',
    cursor: 'pointer',
    outlineOffset: rule.fine,
    pointerEvents: 'auto',
  },
  shipCurrent: { height: '3.5rem', width: '3.5rem' },
  shipEarlier: {
    'borderColor': color.rule2,
    'height': '2.25rem',
    'width': '2.25rem',
    // Her target is a thumb wide all the same.
    '::before': { inset: '-0.375rem', content: '""', position: 'absolute' },
  },
  shipAbove: { transform: 'translate(-50%, calc(-100% - 0.75rem))' },
  shipBelow: { transform: 'translate(-50%, 0.75rem)' },
  shipLeft: { transform: 'translate(calc(-100% - 0.75rem), -50%)' },
  shipRight: { transform: 'translate(0.75rem, -50%)' },
  shipArt: { overflow: 'visible', height: '100%', width: '100%' },

  // The stops: a thumb-sized target around a small dot.
  stop: {
    position: 'absolute',
    transform: CENTRED,
    height: TARGET,
    width: TARGET,
  },
  // The targets overlap where the stops crowd. A tap there goes to an open
  // stop before a stop under fog, and to the reader's own stop before any,
  // so a tap near where you are never peeks into the fog. The list is its
  // own stacking context, above the ships beside the stops.
  stops: { isolation: 'isolate', zIndex: 1 },
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
    cursor: 'pointer',
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
  // A place the story only shows: an eye, not a dot.
  dotSeen: {
    transform: 'rotate(45deg)',
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '50%',
    borderTopLeftRadius: '50%',
    borderTopRightRadius: '0',
    height: '0.75rem',
    width: '0.75rem',
  },
  dotFog: {
    borderColor: color.rule2,
    backgroundColor: color.paper2,
    height: '0.5rem',
    width: '0.5rem',
  },
})
