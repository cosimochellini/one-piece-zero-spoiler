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

// Three declarations ask for it and the reason is the same in all three: a
// figure that changes under the reader — a port number, an episode, the
// horizon's own count — must not shift the glyphs beside it when it does.
const TABULAR = 'tabular-nums'

/**
 * Every declaration the log paints with, kept beside the component rather than
 * inside it so neither file has to be read past the point a reviewer can hold
 * it. StyleX compiles a `create()` the same way wherever it is declared, so the
 * atomic classes and the rendered CSS are unchanged by the move.
 */
export const styles = stylex.create({
  log: { display: 'grid', listStyleType: 'none', paddingInlineStart: 0 },

  // The rail is a narrow first column; the body takes the rest. Rows have no
  // gap of their own, so the spine runs unbroken from one port to the next.
  row: {
    columnGap: { 'default': space.md, '@media (min-width: 40rem)': space.lg },
    display: 'grid',
    gridTemplateColumns: {
      'default': '2.75rem minmax(0, 1fr)',
      '@media (min-width: 40rem)': '3.5rem minmax(0, 1fr)',
    },
    scrollMarginBlockStart: space.xl,
  },
  // Three rows: a stretch of spine the height of the body's top padding, so
  // the marker sits level with the stage label, the marker, and the rest.
  rail: {
    display: 'grid',
    gridTemplateRows: `${space.lg} auto minmax(0, 1fr)`,
    justifyItems: 'center',
  },
  spine: {
    borderInlineStartStyle: 'solid',
    borderInlineStartWidth: rule.fine,
    display: 'block',
    height: '100%',
    width: 0,
  },
  spineOpen: { borderInlineStartColor: color.accent },
  spineCovered: {
    borderInlineStartColor: color.rule2,
    borderInlineStartStyle: 'dashed',
  },
  // The port number in a ring: the numbered stage label the macrostructure
  // asks for, drawn as a mark on the spine rather than set in the margin.
  marker: {
    borderRadius: radius.pill,
    borderStyle: 'solid',
    borderWidth: rule.fine,
    alignItems: 'center',
    backgroundColor: color.paper,
    display: 'grid',
    fontFamily: font.mono,
    fontSize: text.base,
    fontVariantNumeric: TABULAR,
    fontWeight: 700,
    justifyContent: 'center',
    lineHeight: 1,
    height: '2.75rem',
    width: '2.75rem',
  },
  markerOpen: { borderColor: color.accent, color: color.ink },
  markerCovered: { borderColor: color.rule2, color: color.muted },

  body: {
    gap: space.md,
    display: 'grid',
    paddingBlockEnd: space.xl2,
    paddingBlockStart: space.lg,
    minWidth: 0,
  },
  // Sits level with the marker: one line, the stage and the episode, and
  // the only thing besides the number that a covered port says about itself.
  stage: {
    alignItems: 'baseline',
    columnGap: space.md,
    display: 'flex',
    flexWrap: 'wrap',
    lineHeight: leading.body,
    rowGap: space.xs3,
    minHeight: '2.75rem',
  },
  stageLabel: {
    fontFamily: font.mono,
    fontSize: text.xs,
    fontVariantNumeric: TABULAR,
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  },
  stageOpen: { color: color.accent },
  stageCovered: { color: color.muted },
  stageEpisode: { color: color.ink2, fontSize: text.base },

  // The spread: plate beside dossier from 60rem, stacked below it.
  spread: {
    alignItems: 'start',
    columnGap: space.xl,
    display: 'grid',
    gridTemplateColumns: {
      'default': 'minmax(0, 1fr)',
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
      'default': 'minmax(0, 1fr)',
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
  filedNone: {
    color: color.muted,
    fontSize: text.base,
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

  // The horizon: a short row, the tick on the spine, the line across the
  // body and its label.
  horizonRow: { alignItems: 'center' },
  horizonRail: {
    gridTemplateRows: 'minmax(0, 1fr) auto minmax(0, 1fr)',
    height: '100%',
  },
  tick: {
    borderBlockStartStyle: 'solid',
    borderBlockStartWidth: rule.fine,
    display: 'block',
    height: 0,
    width: '1.25rem',
  },
  tickSet: { borderBlockStartColor: color.accent },
  tickUnset: { borderBlockStartColor: color.rule2 },
  horizonLabel: {
    marginBlock: space.md,
    borderBlockStartStyle: 'solid',
    borderBlockStartWidth: rule.fine,
    fontFamily: font.mono,
    fontSize: text.xs,
    fontVariantNumeric: TABULAR,
    fontWeight: 700,
    letterSpacing: '0.1em',
    lineHeight: leading.body,
    paddingBlockStart: space.xs,
    textTransform: 'uppercase',
  },
  horizonSet: { borderBlockStartColor: color.accent, color: color.accent },
  horizonUnset: {
    borderBlockStartColor: color.rule2,
    borderBlockStartStyle: 'dashed',
    color: color.muted,
  },
})
