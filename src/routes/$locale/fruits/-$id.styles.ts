/**
 * Every declaration a fruit's page draws with.
 *
 * Lifted out of the route module so a reader following the markup does not
 * have to scroll past the whole sheet to reach the next component. The
 * leading `-` keeps the file out of the generated route tree: everything else
 * in this directory is a route, and the file-based router would otherwise
 * mint `/$locale/fruits/$id/styles` from the name.
 */
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

// The floor every grid column here takes. `1fr` on its own has `min-content`
// for a floor, and one `white-space: nowrap` child is then enough to push a
// column, and the page with it, wider than a phone.
const ONE_COLUMN = 'minmax(0, 1fr)'

/** The page's sheet. Exported as one object so the route reads as markup. */
export const styles = stylex.create({
  // The stage: the drawing full width on a phone and about half the page on
  // a wide one, the words beside it. A sideways swipe on it turns the page,
  // so the browser keeps only vertical panning for itself here.
  stage: {
    alignItems: 'center',
    columnGap: space.xl2,
    display: 'grid',
    gridTemplateColumns: {
      'default': ONE_COLUMN,
      '@media (min-width: 60rem)': `${ONE_COLUMN} ${ONE_COLUMN}`,
    },
    rowGap: space.lg,
    touchAction: 'pan-y',
    minWidth: 0,
  },
  drawing: { justifySelf: 'center', width: 'min(100%, 34rem)' },
  // The fruit's own tint, glowing past the frame's edges as well as in it.
  glow: (hue: string) => ({
    padding: 'clamp(1rem, 5vw, 2.5rem)',
    backgroundImage: `radial-gradient(closest-side, color-mix(in oklch, ${hue} 45%, transparent), transparent)`,
  }),
  // A fruit's drawings, one over the other in one cell. The one going out
  // waits for the one coming in to cover it, then goes. The fade is short,
  // and with reduced motion shorter still: under 150ms, and still a fade.
  looks: { display: 'grid' },
  look: {
    gridColumn: 1,
    gridRow: 1,
    opacity: 0,
    transitionDelay: {
      'default': dur.micro,
      '@media (prefers-reduced-motion: no-preference)': dur.short,
    },
    transitionDuration: '0s',
    transitionProperty: 'opacity',
    transitionTimingFunction: ease.out,
    zIndex: 0,
    minWidth: 0,
  },
  lookShown: {
    opacity: 1,
    transitionDelay: '0s',
    transitionDuration: {
      'default': dur.micro,
      '@media (prefers-reduced-motion: no-preference)': dur.short,
    },
    zIndex: 1,
  },
  lookSwitch: { display: 'flex', justifyContent: 'center', minWidth: 0 },

  words: { gap: space.md, display: 'grid', minWidth: 0 },
  meta: {
    alignItems: 'baseline',
    color: color.muted,
    columnGap: space.md,
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: text.xs,
    letterSpacing: '0.08em',
    lineHeight: leading.body,
    textTransform: 'uppercase',
  },
  kind: { fontFamily: font.body, fontWeight: 600 },
  episode: {
    color: color.ink2,
    fontFamily: font.mono,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 600,
  },
  name: {
    marginBlock: 0,
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.hero,
    fontWeight: 800,
    letterSpacing: '-0.03em',
    lineHeight: leading.display,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
  chips: {
    margin: 0,
    padding: 0,
    gap: space.xs,
    display: 'flex',
    flexWrap: 'wrap',
    listStyleType: 'none',
  },
  chip: {
    borderColor: color.rule2,
    borderRadius: radius.pill,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    paddingBlock: space.xs3,
    paddingInline: space.sm,
    color: color.ink2,
    fontFamily: font.mono,
    fontSize: text.xs,
    fontWeight: 600,
    letterSpacing: '0.08em',
    lineHeight: leading.body,
    overflowWrap: 'anywhere',
    textTransform: 'uppercase',
    minWidth: 0,
  },
  sagaChip: { borderColor: color.accent, color: color.accent },
  summary: {
    color: color.ink2,
    fontSize: text.lg,
    lineHeight: leading.body,
    maxWidth: '52ch',
  },

  // The fruit before and after: two cells, the next one at the far edge.
  turn: {
    columnGap: space.lg,
    display: 'grid',
    gridTemplateColumns: `${ONE_COLUMN} ${ONE_COLUMN}`,
    minWidth: 0,
  },
  side: { minWidth: 0, width: 'min(100%, 9rem)' },
  nextSide: { justifySelf: 'end', textAlign: 'end' },
  turnLink: {
    borderRadius: radius.card,
    gap: space.xs2,
    color: color.ink,
    display: 'grid',
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs2,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textDecorationLine: 'none',
    minHeight: '44px',
  },
  turnLabel: {
    color: color.muted,
    fontFamily: font.mono,
    fontSize: text.xs,
    fontWeight: 600,
    letterSpacing: '0.08em',
    lineHeight: leading.body,
    textTransform: 'uppercase',
  },
  turnName: {
    color: {
      'default': color.ink,
      ':is(a:focus-visible) > &': color.accent,
      ':is(a:hover) > &': color.accent,
    },
    fontFamily: font.display,
    fontSize: text.base,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
    transitionDuration: dur.micro,
    transitionProperty: 'color',
    transitionTimingFunction: ease.out,
  },

  // The history: one rule down the side, a dot per entry, oldest first.
  timeline: {
    margin: 0,
    padding: 0,
    gap: space.md,
    borderInlineStartColor: color.rule2,
    borderInlineStartStyle: 'solid',
    borderInlineStartWidth: rule.hair,
    display: 'grid',
    listStyleType: 'none',
    marginInlineStart: space.xs,
    minWidth: 0,
  },
  entry: {
    columnGap: space.lg,
    display: 'grid',
    gridTemplateColumns: {
      'default': ONE_COLUMN,
      '@media (min-width: 40rem)': `minmax(8rem, 10rem) ${ONE_COLUMN}`,
    },
    paddingInlineStart: space.lg,
    position: 'relative',
    minWidth: 0,
  },
  dot: {
    borderRadius: radius.pill,
    backgroundColor: color.accent,
    insetBlockStart: '0.45em',
    insetInlineStart: '-5px',
    position: 'absolute',
    height: '9px',
    width: '9px',
  },
  dotEater: { backgroundColor: color.ink2 },
  mark: {
    margin: 0,
    color: color.accent,
    fontFamily: font.mono,
    fontSize: text.base,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 700,
    letterSpacing: '0.1em',
    lineHeight: leading.body,
    textTransform: 'uppercase',
  },
  said: {
    margin: 0,
    color: color.ink,
    fontSize: text.lg,
    lineHeight: leading.body,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
  who: {
    color: { 'default': color.ink, ':hover': color.accent },
    fontWeight: 700,
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textDecorationColor: { 'default': color.rule2, ':hover': color.accent },
    textDecorationLine: 'underline',
    textDecorationThickness: rule.hair,
    textUnderlineOffset: '3px',
  },

  // The bands under the stage, each with its own heading and hairline.
  band: {
    gap: space.md,
    borderBlockStartColor: color.rule,
    borderBlockStartStyle: 'solid',
    borderBlockStartWidth: rule.hair,
    display: 'grid',
    paddingBlockStart: space.lg,
  },
  bandHead: { gap: space.xs2, display: 'grid' },
  sectionTitle: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.xl,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
  },
  lede: {
    color: color.muted,
    fontSize: text.base,
    lineHeight: leading.body,
    maxWidth: '58ch',
  },
})
