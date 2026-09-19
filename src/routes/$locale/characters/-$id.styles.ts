/**
 * Every declaration the character page draws with.
 *
 * Lifted out of the route module because the page is long enough without two
 * hundred lines of table under it, and a reader following the markup should
 * not have to scroll past the whole sheet to reach the next component. The
 * leading `-` keeps the file out of the generated route tree: everything else
 * in this directory is a route, and the file-based router would otherwise mint
 * `/$locale/characters/$id/styles` from the name.
 */
import * as stylex from '@stylexjs/stylex'

import {
  color,
  font,
  leading,
  radius,
  rule,
  space,
  text,
} from '~/styles/tokens.stylex'

// The floor every grid column here takes. Written once because `1fr` on its
// own has `min-content` for a floor, and one `white-space: nowrap` child is
// then enough to push a column, and the page with it, wider than a phone.
const ONE_COLUMN = 'minmax(0, 1fr)'

/** The page's sheet. Exported as one object so the route reads as markup. */
export const styles = stylex.create({
  // The diptych: two halves with a wide gutter and no rule between them.
  // The crest half is the narrower one; the words need the width more.
  diptych: {
    alignItems: 'start',
    columnGap: space.xl2,
    display: 'grid',
    gridTemplateColumns: {
      'default': ONE_COLUMN,
      '@media (min-width: 60rem)': 'minmax(0, 5fr) minmax(0, 7fr)',
    },
    rowGap: space.lg,
  },
  // The second diptych swaps sides on a wide page, so the two rows read as
  // a pair rather than a template: words left, strip right. On a phone the
  // words come first and the strip follows.
  reversed: {
    gridTemplateColumns: {
      'default': ONE_COLUMN,
      '@media (min-width: 60rem)': 'minmax(0, 7fr) minmax(0, 5fr)',
    },
  },
  plate: {
    padding: space.lg,
    borderColor: color.rule,
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    marginInline: { 'default': 'auto', '@media (min-width: 60rem)': 0 },
    overflow: 'hidden',
    aspectRatio: '1',
    backgroundColor: color.paper2,
    maxWidth: '26rem',
    width: '100%',
  },
  dossier: { gap: space.md, display: 'grid', minWidth: 0 },
  words: { gap: space.sm, display: 'grid', minWidth: 0 },
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
  kind: { fontFamily: font.body, fontWeight: 600 },
  episode: {
    color: color.ink2,
    fontFamily: font.mono,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 600,
  },
  // The one display line on the page. Names run 4 to 22 characters, so the
  // full display size holds two lines at most in the 7fr column.
  name: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.display,
    fontWeight: 800,
    letterSpacing: '-0.035em',
    lineHeight: leading.display,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
  role: {
    color: color.ink2,
    fontSize: text.xl,
    fontWeight: 600,
    letterSpacing: '-0.01em',
    lineHeight: leading.heading,
  },
  summary: {
    color: color.ink2,
    fontSize: text.lg,
    lineHeight: leading.body,
    maxWidth: '52ch',
  },
  // The log entry proper, after the facts: body size, a measure that holds
  // three sentences without a wall.
  entry: {
    color: color.ink2,
    fontSize: text.base,
    lineHeight: leading.body,
    marginBlockStart: space.xs,
    maxWidth: '60ch',
  },

  sectionTitle: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.xl,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
  position: {
    color: color.accent,
    fontFamily: font.mono,
    fontSize: text.base,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 700,
    letterSpacing: '0.1em',
    lineHeight: leading.body,
    textTransform: 'uppercase',
  },
  lede: {
    color: color.muted,
    fontSize: text.base,
    lineHeight: leading.body,
    maxWidth: '52ch',
  },
  stripBand: {
    borderColor: color.rule,
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    paddingBlock: space.lg,
    paddingInline: space.md,
    alignSelf: 'center',
    backgroundColor: color.paper2,
  },

  neighbours: {
    columnGap: space.lg,
    display: 'grid',
    gridTemplateColumns: {
      'default': ONE_COLUMN,
      '@media (min-width: 40rem)': 'repeat(2, minmax(0, 1fr))',
    },
    marginBlockStart: space.xs,
    rowGap: space.md,
  },
  neighbour: { gap: space.xs, display: 'grid', minWidth: 0 },
  neighbourLabel: {
    color: color.ink2,
    fontSize: text.base,
    fontWeight: 600,
    lineHeight: leading.body,
  },
  neighbourBody: {
    gap: space.xs,
    display: 'grid',
    marginInlineStart: 0,
    minWidth: 0,
  },
  // The chronicle band: a heading, a lede and one ledger, full width.
  chronicle: { gap: space.lg, display: 'grid', minWidth: 0 },
  nearby: {
    gap: space.lg,
    borderBlockStartColor: color.rule,
    borderBlockStartStyle: 'solid',
    borderBlockStartWidth: rule.hair,
    display: 'grid',
    paddingBlockStart: space.xl,
  },
  nearbyHead: { gap: space.xs, display: 'grid' },
})
