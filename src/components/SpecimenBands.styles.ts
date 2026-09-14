import * as stylex from '@stylexjs/stylex'

import {
  color,
  dur,
  ease,
  font,
  leading,
  rule,
  space,
  text,
} from '~/styles/tokens.stylex'

/**
 * The specimen sheet's own declarations.
 *
 * A sheet rather than a catalogue: numbered labels in the left margin, the
 * name at display size, hairlines between rows and nothing boxed. Two columns
 * on a wide page — a narrow margin for the number and the plate, a wide one
 * for the words — and one column on a phone, where an asymmetric spread is
 * only a squeeze.
 */
// The floor every grid column here takes. `1fr` on its own has `min-content`
// for a floor, and one `white-space: nowrap` child is then enough to push a
// column, and the page with it, wider than a phone.
const ONE_COLUMN = 'minmax(0, 1fr)'

// The small-caps tracking every label on the sheet is set in.
const LABEL_TRACKING = '0.12em'

// The small-caps tracking the meta lines beside a drawing are set in.
const META_TRACKING = '0.08em'

// Digits of one width, so a column of numbers lines up.
const TABULAR = 'tabular-nums'

// The display tracking every name on the sheet is set in.
const NAME_TRACKING = '-0.02em'

export const styles = stylex.create({
  sheet: { gap: space.xl2, display: 'grid' },

  plate: {
    gap: space.lg,
    borderBlockStartColor: color.rule,
    borderBlockStartStyle: 'solid',
    borderBlockStartWidth: rule.hair,
    display: 'grid',
    paddingBlockStart: space.lg,
  },
  plateHead: {
    columnGap: space.lg,
    display: 'grid',
    gridTemplateColumns: {
      'default': ONE_COLUMN,
      '@media (min-width: 60rem)': 'minmax(0, 3fr) minmax(0, 9fr)',
    },
    rowGap: space.xs,
  },
  plateNumber: {
    color: color.muted,
    fontFamily: font.mono,
    fontSize: text.xs,
    fontVariantNumeric: TABULAR,
    fontWeight: 600,
    letterSpacing: LABEL_TRACKING,
    lineHeight: leading.body,
    textTransform: 'uppercase',
  },
  plateTitle: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.xl,
    fontWeight: 800,
    letterSpacing: NAME_TRACKING,
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
  plateLede: {
    color: color.muted,
    fontSize: text.base,
    lineHeight: leading.body,
    maxWidth: '58ch',
  },

  rows: {
    display: 'grid',
    listStyleType: 'none',
    paddingInlineStart: 0,
    rowGap: 0,
  },
  row: {
    paddingBlock: space.lg,
    borderBlockEndColor: color.rule,
    borderBlockEndStyle: 'solid',
    borderBlockEndWidth: rule.hair,
    columnGap: space.lg,
    display: 'grid',
    gridTemplateColumns: {
      'default': ONE_COLUMN,
      '@media (min-width: 40rem)': 'minmax(0, 3fr) minmax(0, 9fr)',
    },
    rowGap: space.md,
    minWidth: 0,
  },
  // The number over the drawing, the way a sheet labels its own plates.
  margin: {
    gap: space.xs,
    display: 'grid',
    justifyItems: 'start',
    minWidth: 0,
  },
  specimenNumber: {
    color: color.muted,
    fontFamily: font.mono,
    fontSize: text.xs,
    fontVariantNumeric: TABULAR,
    fontWeight: 600,
    letterSpacing: LABEL_TRACKING,
    lineHeight: leading.body,
    textTransform: 'uppercase',
  },
  drawing: { width: 'min(100%, 9rem)' },

  words: { gap: space.xs, display: 'grid', minWidth: 0 },
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
  kind: { fontFamily: font.body, fontWeight: 600 },
  episode: {
    color: color.ink2,
    fontFamily: font.mono,
    fontVariantNumeric: TABULAR,
    fontWeight: 600,
  },
  name: {
    marginBlock: 0,
    color: color.ink,
    fontFamily: font.display,
    fontSize: { 'default': text.lg, '@media (min-width: 40rem)': text.xl },
    fontWeight: 800,
    letterSpacing: NAME_TRACKING,
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
  link: {
    color: {
      'default': color.ink,
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
    maxWidth: '52ch',
  },

  rail: {
    columnGap: space.lg,
    display: 'grid',
    gridTemplateColumns: {
      'default': 'repeat(2, minmax(0, 1fr))',
      '@media (min-width: 60rem)': 'repeat(4, minmax(0, 1fr))',
    },
    listStyleType: 'none',
    paddingInlineStart: 0,
    rowGap: space.lg,
  },
  railItem: { gap: space.xs, display: 'grid', minWidth: 0 },
  railName: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.base,
    fontWeight: 800,
    letterSpacing: NAME_TRACKING,
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
})
