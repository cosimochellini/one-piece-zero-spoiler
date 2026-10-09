import * as stylex from '@stylexjs/stylex'

import { color, font, leading, rule, space, text } from '~/styles/tokens.stylex'

/**
 * The catalogue's declarations, beside the component rather than inside it
 * for length, as `PortLog.styles` is.
 */
export const styles = stylex.create({
  groups: { gap: space.xl, display: 'grid' },
  group: { gap: space.md, display: 'grid' },
  // The canon arc: the page's section voice, with the rule that the run of
  // rows under it hangs from.
  arc: {
    borderBlockEndColor: color.rule,
    borderBlockEndStyle: 'solid',
    borderBlockEndWidth: rule.hair,
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.lg,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
    paddingBlockEnd: space.xs,
    minWidth: 0,
  },
  fogged: { color: color.muted },
  // A filler arc: a gold rule down the side, because every row in it can
  // be skipped together.
  run: {
    gap: space.sm,
    borderInlineStartColor: color.accent,
    borderInlineStartStyle: 'solid',
    borderInlineStartWidth: rule.fine,
    display: 'grid',
    paddingInlineStart: {
      'default': space.sm,
      '@media (min-width: 40rem)': space.md,
    },
  },
  runName: {
    color: color.accent,
    fontFamily: font.mono,
    fontSize: text.xs,
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
  },
  rows: {
    margin: 0,
    gap: space.md,
    display: 'grid',
    listStyleType: 'none',
    paddingInlineStart: 0,
  },
  // The place and kind in a narrow first column on a wide screen, above the
  // words on a phone.
  row: {
    columnGap: space.lg,
    display: 'grid',
    gridTemplateColumns: {
      'default': 'minmax(0, 1fr)',
      '@media (min-width: 40rem)': '9rem minmax(0, 1fr)',
    },
    rowGap: space.xs2,
    scrollMarginBlockStart: space.xl,
  },
  meta: {
    margin: 0,
    gap: space.xs,
    alignContent: 'start',
    alignItems: 'baseline',
    display: 'flex',
    flexWrap: 'wrap',
  },
  place: {
    color: color.ink2,
    fontFamily: font.mono,
    fontSize: text.xs,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 700,
    whiteSpace: 'nowrap',
  },
  kind: {
    fontFamily: font.mono,
    fontSize: text.xs,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
  },
  kindSkip: { color: color.accent },
  kindMixed: { color: color.ink2 },
  kindExtra: { color: color.muted },
  words: { gap: space.xs2, display: 'grid' },
  title: {
    margin: 0,
    color: color.ink,
    fontWeight: 700,
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
  year: { color: color.muted, fontWeight: 400 },
  summary: {
    margin: 0,
    color: color.ink2,
    lineHeight: leading.body,
    maxWidth: '66ch',
  },
})
