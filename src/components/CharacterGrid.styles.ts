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
 * Every declaration the signal book paints with, kept beside the component
 * rather than inside it so neither file has to be read past the point a
 * reviewer can hold it. StyleX compiles a `create()` the same way wherever it
 * is declared, so the atomic classes and the rendered CSS are unchanged by the
 * move.
 */
export const styles = stylex.create({
  book: { gap: space.xl2, display: 'grid' },

  search: { gap: space.xs, display: 'grid', justifyItems: 'start' },
  label: {
    color: color.ink2,
    fontFamily: font.body,
    fontSize: text.base,
    fontWeight: 600,
  },
  fieldRow: {
    gap: space.xs,
    alignItems: 'center',
    display: 'flex',
    maxWidth: '100%',
  },
  field: {
    'borderColor': { 'default': color.rule2, ':focus': color.ink },
    'borderRadius': radius.input,
    'borderStyle': 'solid',
    // Constant in every state; the outline carries focus.
    'borderWidth': rule.fine,
    'paddingBlock': space.xs2,
    'paddingInline': space.sm,
    'appearance': 'textfield',
    'backgroundColor': { 'default': color.paper, ':hover': color.paper2 },
    'color': color.ink,
    'fontFamily': font.body,
    'fontSize': text.lg,
    'fontWeight': 600,
    'outlineColor': { 'default': 'transparent', ':focus-visible': color.focus },
    'outlineOffset': space.xs3,
    'outlineStyle': 'solid',
    'outlineWidth': rule.fine,
    'transitionDuration': dur.micro,
    'transitionProperty': 'background-color, border-color',
    'transitionTimingFunction': ease.out,
    // The same 44px as every button on the site.
    'minHeight': '44px',
    'minWidth': 0,
    'width': 'min(100%, 22rem)',
    '::-webkit-search-cancel-button': { appearance: 'none' },
    '::placeholder': { color: color.muted, fontWeight: 400 },
  },
  clearSlot: { display: 'inline-flex', flexShrink: 0, minWidth: '44px' },
  clearHidden: { visibility: 'hidden' },
  status: {
    color: color.muted,
    fontSize: text.base,
    lineHeight: leading.body,
    // Reserved whether or not there is anything to say.
    minHeight: '1lh',
  },
  statusEmpty: { color: color.ink2 },

  // The two parts of the book, each with an inventory heading: the crests,
  // then the shelves.
  part: { gap: space.lg, display: 'grid' },
  partHead: { gap: space.xs2, display: 'grid' },
  partTitle: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.xl,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
  partLede: {
    color: color.muted,
    fontSize: text.base,
    lineHeight: leading.body,
    maxWidth: '58ch',
  },

  grid: {
    columnGap: space.md,
    display: 'grid',
    gridTemplateColumns: {
      'default': 'repeat(2, minmax(0, 1fr))',
      '@media (min-width: 40rem)': 'repeat(3, minmax(0, 1fr))',
      '@media (min-width: 60rem)': 'repeat(4, minmax(0, 1fr))',
      '@media (min-width: 76rem)': 'repeat(5, minmax(0, 1fr))',
    },
    listStyleType: 'none',
    paddingInlineStart: 0,
    rowGap: space.xl,
  },

  // The fog band is set apart by a dashed rule, the same mark the route uses
  // for the stretch the reader has not sailed.
  fog: {
    gap: space.md,
    borderBlockStartColor: color.rule2,
    borderBlockStartStyle: 'dashed',
    borderBlockStartWidth: rule.hair,
    display: 'grid',
    paddingBlockStart: space.lg,
  },
  fogTitle: {
    color: color.muted,
    fontFamily: font.display,
    fontSize: text.lg,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
  },
  fogHint: {
    color: color.muted,
    fontSize: text.base,
    lineHeight: leading.body,
    marginBlockStart: `calc(-1 * ${space.xs})`,
    maxWidth: '58ch',
  },

  // A shelf: a hairline above, the arc's name and its two facts, then the
  // tiles four across on a wide page and one across on a phone. Long shelves
  // far down the page are skipped by the renderer until they scroll near.
  shelf: {
    containIntrinsicSize: 'auto 24rem',
    gap: space.md,
    borderBlockStartColor: color.rule,
    borderBlockStartStyle: 'solid',
    borderBlockStartWidth: rule.hair,
    contentVisibility: 'auto',
    display: 'grid',
    paddingBlockStart: space.md,
  },
  shelfHead: {
    alignItems: 'baseline',
    columnGap: space.md,
    display: 'flex',
    flexWrap: 'wrap',
    rowGap: space.xs2,
  },
  shelfTitle: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.lg,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
  shelfMeta: {
    color: color.muted,
    columnGap: space.sm,
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: text.xs,
    letterSpacing: '0.08em',
    lineHeight: leading.body,
    textTransform: 'uppercase',
  },
  shelfEpisode: {
    color: color.ink2,
    fontFamily: font.mono,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 600,
  },
  tiles: {
    columnGap: space.lg,
    display: 'grid',
    gridTemplateColumns: {
      'default': 'minmax(0, 1fr)',
      '@media (min-width: 40rem)': 'repeat(2, minmax(0, 1fr))',
      '@media (min-width: 60rem)': 'repeat(3, minmax(0, 1fr))',
      '@media (min-width: 76rem)': 'repeat(4, minmax(0, 1fr))',
    },
    listStyleType: 'none',
    paddingInlineStart: 0,
    rowGap: space.md,
  },
})
