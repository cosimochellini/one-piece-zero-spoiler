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
 * The places index's declarations. Rows are dense, three across on a wide
 * page and one on a phone; plates are two across on a phone and up to seven
 * on a wide page, where the drawing is what you browse by.
 */

// The small-caps tracking every meta line here is set in.
const META_TRACKING = '0.08em'

// Digits of one width, so a column of numbers lines up.
const TABULAR = 'tabular-nums'

export const styles = stylex.create({
  index: {
    gap: { 'default': space.xl, '@media (min-width: 40rem)': space.xl2 },
    display: 'grid',
  },

  // The layout switch and the three pickers, side by side while they fit. A
  // row of its own under the field, the bar's whole width: four controls do
  // not share a line with the field as the fruits page's chips do.
  choices: {
    gap: space.sm,
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    gridColumnEnd: '-1',
    gridColumnStart: '1',
    minWidth: 0,
  },
  // As wide as its longest option, not the bar.
  picker: { flexShrink: 1, minWidth: 0, width: 'auto' },

  empty: {
    gap: space.sm,
    color: color.ink2,
    display: 'grid',
    fontSize: text.base,
    justifyItems: 'start',
    lineHeight: leading.body,
  },

  list: {
    padding: 0,
    columnGap: space.lg,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 20rem), 1fr))',
    listStyleType: 'none',
    rowGap: space.xs,
  },
  grid: {
    padding: 0,
    columnGap: space.md,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 9rem), 1fr))',
    listStyleType: 'none',
    rowGap: space.lg,
  },
  item: { display: 'grid', minWidth: 0 },

  // The whole entry is the link: one target, one tab stop.
  entry: {
    borderRadius: radius.card,
    gap: space.sm,
    color: color.ink,
    display: 'grid',
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textDecorationLine: 'none',
    minWidth: 0,
  },
  row: {
    paddingBlock: space.xs,
    alignItems: 'center',
    gridTemplateColumns: '3.5rem minmax(0, 1fr)',
    minHeight: '2.75rem',
  },
  plate: { alignContent: 'start' },
  rowArt: { aspectRatio: '1', display: 'block', width: '3.5rem' },
  plateArt: { aspectRatio: '1', display: 'block', width: '100%' },

  words: { gap: space.xs3, display: 'grid', minWidth: 0 },
  name: {
    color: { 'default': color.ink, ':is(a:hover *)': color.accent },
    fontFamily: font.display,
    fontSize: text.lg,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
    textDecorationColor: {
      'default': 'transparent',
      ':is(a:hover *)': color.accent,
    },
    textDecorationLine: 'underline',
    textDecorationThickness: rule.fine,
    textUnderlineOffset: '4px',
    transitionDuration: dur.micro,
    transitionProperty: 'color, text-decoration-color',
    transitionTimingFunction: ease.out,
  },
  meta: {
    alignItems: 'baseline',
    color: color.muted,
    columnGap: space.sm,
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: text.xs,
    letterSpacing: META_TRACKING,
    lineHeight: leading.body,
    textTransform: 'uppercase',
  },
  number: {
    fontFamily: font.mono,
    fontVariantNumeric: TABULAR,
    fontWeight: 600,
  },
  episode: {
    color: color.ink2,
    fontFamily: font.mono,
    fontVariantNumeric: TABULAR,
    fontWeight: 600,
  },

  // The stops under fog, one line for all of them, after every sea.
  fog: {
    gap: space.sm,
    paddingBlock: space.sm,
    alignItems: 'center',
    borderBlockStartColor: color.rule,
    borderBlockStartStyle: 'dashed',
    borderBlockStartWidth: rule.hair,
    color: color.muted,
    display: 'flex',
    fontFamily: font.mono,
    fontSize: text.xs,
    fontVariantNumeric: TABULAR,
    letterSpacing: META_TRACKING,
    textTransform: 'uppercase',
  },
  fogDot: {
    borderColor: color.rule2,
    borderRadius: radius.pill,
    borderStyle: 'solid',
    borderWidth: rule.fine,
    backgroundColor: color.paper2,
    flexShrink: 0,
    height: '0.5rem',
    width: '0.5rem',
  },
})
