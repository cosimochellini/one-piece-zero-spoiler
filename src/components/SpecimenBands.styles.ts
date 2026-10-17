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
 * The fruit album's own declarations, and the rail's on a fruit's page.
 *
 * Three plates, each a pinned head over a grid of tiles: two across on a
 * phone, where the drawing is what you browse by, and up to six on a wide
 * page. The head is one line on a phone so the tiles start high.
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
  sheet: {
    gap: { 'default': space.xl, '@media (min-width: 40rem)': space.xl2 },
    display: 'grid',
  },

  // The view switch and the kind chips, side by side while they fit.
  choices: {
    gap: space.sm,
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 0,
  },

  plate: {
    gap: { 'default': space.md, '@media (min-width: 40rem)': space.lg },
    borderBlockStartColor: color.rule,
    borderBlockStartStyle: 'solid',
    borderBlockStartWidth: rule.hair,
    display: 'grid',
    paddingBlockStart: {
      'default': space.md,
      '@media (min-width: 40rem)': space.lg,
    },
  },
  plateHead: {
    alignItems: 'baseline',
    columnGap: { 'default': space.sm, '@media (min-width: 60rem)': space.lg },
    display: 'grid',
    gridTemplateColumns: `auto ${ONE_COLUMN}`,
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
    whiteSpace: 'nowrap',
  },
  plateTitle: {
    overflow: 'hidden',
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.lg,
    fontWeight: 800,
    letterSpacing: NAME_TRACKING,
    lineHeight: leading.heading,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    minWidth: 0,
  },
  plateLede: {
    color: color.muted,
    fontSize: text.base,
    lineHeight: leading.body,
    maxWidth: '58ch',
  },

  // Two tiles across on a phone, then as many as the width holds, up to six.
  grid: {
    columnGap: { 'default': space.md, '@media (min-width: 40rem)': space.lg },
    display: 'grid',
    gridTemplateColumns: {
      'default': `repeat(2, ${ONE_COLUMN})`,
      '@media (min-width: 37.5rem)': `repeat(3, ${ONE_COLUMN})`,
      '@media (min-width: 50rem)': `repeat(4, ${ONE_COLUMN})`,
      '@media (min-width: 64rem)': `repeat(5, ${ONE_COLUMN})`,
      '@media (min-width: 80rem)': `repeat(6, ${ONE_COLUMN})`,
    },
    listStyleType: 'none',
    paddingInlineStart: 0,
    rowGap: { 'default': space.lg, '@media (min-width: 40rem)': space.xl },
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
  episode: {
    color: color.ink2,
    fontFamily: font.mono,
    fontVariantNumeric: TABULAR,
    fontWeight: 600,
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
