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

const ONE_COLUMN = 'minmax(0, 1fr)'

/**
 * Every declaration a place's or a ship's entry paints with: the spread, the
 * facts, the records found there and the ships' band. Kept beside the
 * components rather than inside them, so the ships' band, the facts and the
 * list of records share one sheet.
 */
export const styles = stylex.create({
  // The ships' label line: which band this is, in mono.
  stageLabel: {
    flexShrink: 0,
    fontFamily: font.mono,
    fontSize: text.xs,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
  },
  stageOpen: { color: color.accent },
  stageEpisode: { color: color.ink2, fontSize: text.base },

  // The spread: plate beside dossier from 60rem, stacked below it.
  spread: {
    alignItems: 'start',
    columnGap: space.xl,
    display: 'grid',
    gridTemplateColumns: {
      'default': ONE_COLUMN,
      '@media (min-width: 60rem)': 'minmax(0, 4fr) minmax(0, 8fr)',
    },
    rowGap: space.lg,
  },
  plate: {
    padding: space.sm,
    borderColor: color.rule,
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    overflow: 'hidden',
    aspectRatio: '1',
    backgroundColor: color.paper2,
    maxWidth: '22rem',
    width: '100%',
  },
  dossier: { gap: space.md, display: 'grid', minWidth: 0 },
  name: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.xl,
    fontWeight: 800,
    letterSpacing: '-0.025em',
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
  summary: {
    color: color.ink2,
    fontSize: text.lg,
    lineHeight: leading.body,
    maxWidth: '52ch',
  },

  facts: {
    borderBlockStyle: 'solid',
    paddingBlock: space.md,
    borderBlockColor: color.rule,
    borderBlockWidth: rule.hair,
    columnGap: space.lg,
    display: 'grid',
    gridTemplateColumns: {
      'default': ONE_COLUMN,
      '@media (min-width: 40rem)': 'repeat(2, minmax(0, 1fr))',
    },
    rowGap: space.sm,
  },
  fact: { gap: space.xs3, display: 'grid', minWidth: 0 },
  factLabel: {
    color: color.muted,
    fontSize: text.xs,
    fontWeight: 600,
    letterSpacing: '0.08em',
    lineHeight: leading.body,
    textTransform: 'uppercase',
  },
  factValue: {
    color: color.ink,
    fontSize: text.base,
    fontWeight: 600,
    lineHeight: leading.body,
    marginInlineStart: 0,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
  entry: {
    color: color.ink2,
    fontSize: text.base,
    lineHeight: leading.body,
    maxWidth: '60ch',
  },

  filed: { gap: space.sm, display: 'grid' },
  filedTitle: {
    color: color.ink2,
    fontFamily: font.body,
    fontSize: text.base,
    fontWeight: 600,
    lineHeight: leading.body,
  },
  crew: {
    gap: space.md,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 14rem), 1fr))',
    listStyleType: 'none',
    paddingInlineStart: 0,
  },
  crewItem: { minWidth: 0 },

  // The ships, at the foot of the places page: no numbers, because a ship
  // is not a stop.
  ships: { gap: space.lg, display: 'grid' },
  shipList: {
    gap: space.xl2,
    display: 'grid',
    listStyleType: 'none',
    paddingInlineStart: 0,
  },
  ship: { gap: space.md, display: 'grid' },
})
