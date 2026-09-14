import * as stylex from '@stylexjs/stylex'

import { color, font, leading, rule, space, text } from '~/styles/tokens.stylex'

/**
 * Every declaration the signal book paints with, kept beside the component
 * rather than inside it so neither file has to be read past the point a
 * reviewer can hold it. StyleX compiles a `create()` the same way wherever it
 * is declared, so the atomic classes and the rendered CSS are unchanged by the
 * move.
 */
export const styles = stylex.create({
  book: { gap: space.xl2, display: 'grid' },

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

  // A shelf: a hairline above, the arc's name and its two facts, then the
  // tiles four across on a wide page and one across on a phone. Long shelves
  // far down the page are skipped by the renderer until they scroll near.
  shelvesPending: {
    color: color.muted,
    fontSize: text.base,
    lineHeight: leading.body,
  },
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
