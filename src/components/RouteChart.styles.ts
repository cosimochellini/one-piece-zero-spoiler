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
 * The chart's own stylesheet, kept out of RouteChart.tsx so the component
 * file is the component and the four private pieces it is drawn from.
 */
const surface = stylex.keyframes({ from: { opacity: 0 }, to: { opacity: 1 } })

export const styles = stylex.create({
  route: { display: 'grid', listStyleType: 'none', paddingInlineStart: 0 },

  // The rail is a fixed width so consecutive segments line up; the body
  // takes the rest and may shrink to zero, which is what lets a long
  // unbroken name wrap instead of pushing the page sideways. On a phone the
  // rail is 2.5rem: the compass is 2rem, and every rem the rail keeps is a
  // rem the words lose on a 320px screen.
  row: {
    columnGap: { 'default': space.sm, '@media (min-width: 40rem)': space.md },
    display: 'grid',
    gridTemplateColumns: {
      'default': '2.5rem minmax(0, 1fr)',
      '@media (min-width: 40rem)': '4rem minmax(0, 1fr)',
    },
  },
  rail: { position: 'relative' },
  segment: {
    inset: 0,
    overflow: 'visible',
    display: 'block',
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  stroke: {
    fill: 'none',
    strokeLinecap: 'round',
    strokeWidth: rule.fine,
    transitionDuration: dur.short,
    transitionProperty: 'stroke',
    transitionTimingFunction: ease.out,
  },
  strokeOpen: { stroke: color.accent },
  strokeCovered: { stroke: color.rule2, strokeDasharray: '3 8' },

  node: {
    borderRadius: radius.pill,
    borderStyle: 'solid',
    borderWidth: rule.fine,
    insetBlockStart: '50%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    transitionDuration: dur.short,
    transitionProperty: 'background-color, border-color',
    transitionTimingFunction: ease.out,
    height: '0.875rem',
    width: '0.875rem',
  },
  // 14/64 and 50/64: where the two bows of the segment path sit.
  nodeLeft: { insetInlineStart: '21.875%' },
  nodeRight: { insetInlineStart: '78.125%' },
  nodeOpen: { borderColor: color.accent, backgroundColor: color.accent },
  nodeCovered: { borderColor: color.rule2, backgroundColor: color.paper },

  body: { gap: space.xs, paddingBlock: space.lg, display: 'grid', minWidth: 0 },
  meta: {
    alignItems: 'baseline',
    color: color.muted,
    columnGap: space.sm,
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: text.xs,
    letterSpacing: '0.08em',
    lineHeight: leading.body,
    textTransform: 'uppercase',
  },
  // The one outlier slot on the waypoint: the number is set in mono so every
  // threshold on the route lines up.
  episode: {
    color: color.ink2,
    fontFamily: font.mono,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 600,
    whiteSpace: 'nowrap',
  },
  kind: { fontFamily: font.body, fontWeight: 600 },
  // Picture above words on a phone, beside them from 40rem. A 320px row
  // has about 230px left after the rail; a 7rem picture beside that left
  // the words 80px and split names mid-word. From 60rem the picture is the
  // larger half of the card, because the pictures are the point.
  card: {
    columnGap: { 'default': 0, '@media (min-width: 40rem)': space.lg },
    display: 'grid',
    gridTemplateColumns: {
      'default': 'minmax(0, 1fr)',
      '@media (min-width: 40rem)': '11rem minmax(0, 1fr)',
      '@media (min-width: 60rem)': '14rem minmax(0, 1fr)',
    },
    rowGap: { 'default': space.sm, '@media (min-width: 40rem)': 0 },
  },
  words: {
    gap: space.xs2,
    // Packed to the top: with the default `stretch` the two rows share the
    // picture's height and the summary floats halfway down the card.
    alignContent: 'start',
    display: 'grid',
    minWidth: 0,
  },
  frame: {
    borderColor: color.rule,
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    // Clips the blur of a fogged drawing to its own frame, so the fog stays
    // on the card and does not smear into the words beside it.
    overflow: 'hidden',
    aspectRatio: '4 / 5',
    backgroundColor: color.paper2,
    // Stacked on a phone the picture keeps the size it has beside the
    // words on a tablet, not the full row: a route of 35 full-width
    // drawings is a feed, not a chart.
    maxWidth: { 'default': '9rem', '@media (min-width: 40rem)': 'none' },
  },
  name: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: { 'default': text.lg, '@media (min-width: 40rem)': text.xl },
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
  // A character's name is the way to its page. Same ink as the name at
  // rest, the accent rule on hover, so the route does not turn into a column
  // of blue links.
  nameLink: {
    color: {
      'default': 'inherit',
      ':hover': color.accent,
      ':active': color.ink2,
    },
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textDecorationColor: { 'default': 'transparent', ':hover': color.accent },
    textDecorationLine: 'underline',
    textDecorationThickness: rule.fine,
    textUnderlineOffset: '4px',
    transitionDuration: dur.micro,
    transitionProperty: 'color, text-decoration-color',
    transitionTimingFunction: ease.out,
  },
  summary: {
    color: color.ink2,
    fontSize: text.base,
    lineHeight: leading.body,
    overflowWrap: 'anywhere',
    maxWidth: '52ch',
    // At 320px the words column is under 100px wide, and one long word
    // ("vice-president,") would otherwise widen the column past the page.
    minWidth: 0,
  },

  // No `align-items: center` here: the rail cell has to stretch to the row's
  // full height or the segment behind the compass has nothing to draw on.
  horizon: {
    animationDuration: dur.short,
    animationName: {
      'default': 'none',
      '@media (prefers-reduced-motion: no-preference)': surface,
    },
    animationTimingFunction: ease.out,
  },
  compass: {
    insetBlockStart: '50%',
    insetInlineStart: '50%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    height: '2rem',
    width: '2rem',
  },
  compassSet: { color: color.accent },
  compassUnset: { color: color.rule2 },
  compassRing: {
    fill: color.paper,
    stroke: 'currentColor',
    strokeWidth: rule.fine,
  },
  compassStar: { fill: 'currentColor' },
  horizonBody: {
    gap: space.sm,
    paddingBlock: space.md,
    alignItems: 'center',
    display: 'flex',
    minWidth: 0,
  },
  horizonLabel: {
    fontFamily: font.mono,
    fontSize: text.xs,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 700,
    letterSpacing: '0.1em',
    lineHeight: leading.body,
    textTransform: 'uppercase',
    minWidth: 0,
  },
  horizonSet: { color: color.accent },
  horizonUnset: { color: color.muted },
  // The line runs from the label to the edge of the chart. It is the one
  // element that reads as a rule and is drawn in the accent, because it is
  // the reader's own position and not a divider.
  horizonLine: { flexGrow: 1, height: rule.fine, minWidth: '1.5rem' },
  horizonLineSet: { backgroundColor: color.accent },
  horizonLineUnset: { backgroundColor: color.rule2 },
})
