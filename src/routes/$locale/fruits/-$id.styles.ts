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

import { color, font, leading, rule, space, text } from '~/styles/tokens.stylex'

// The floor every grid column here takes. `1fr` on its own has `min-content`
// for a floor, and one `white-space: nowrap` child is then enough to push a
// column, and the page with it, wider than a phone.
const ONE_COLUMN = 'minmax(0, 1fr)'

/** The page's sheet. Exported as one object so the route reads as markup. */
export const styles = stylex.create({
  // The plate: the drawing beside the words, the drawing the narrower half.
  plate: {
    alignItems: 'start',
    columnGap: space.xl2,
    display: 'grid',
    gridTemplateColumns: {
      'default': ONE_COLUMN,
      '@media (min-width: 60rem)': `minmax(0, 4fr) minmax(0, 8fr)`,
    },
    rowGap: space.xl,
    minWidth: 0,
  },
  drawing: { width: 'min(100%, 18rem)' },

  words: { gap: space.sm, display: 'grid', minWidth: 0 },
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
    fontSize: text.display,
    fontWeight: 800,
    letterSpacing: '-0.03em',
    lineHeight: leading.display,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
  summary: {
    color: color.ink2,
    fontSize: text.lg,
    lineHeight: leading.body,
    maxWidth: '52ch',
  },

  // The two bands under the plate, each with its own heading and hairline.
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
