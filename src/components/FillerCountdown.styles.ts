import * as stylex from '@stylexjs/stylex'

import {
  color,
  font,
  leading,
  radius,
  rule,
  space,
  text,
  z,
} from '~/styles/tokens.stylex'

/**
 * The countdown's declarations, beside the component for length. Written for
 * a 320px phone first: six cells share one row there, so a cell is a number
 * and a one-word kind and nothing else.
 */
export const styles = stylex.create({
  countdown: {
    gap: space.sm,
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr)',
  },
  // The page's one display line: it is the answer the page exists for.
  sentence: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: { 'default': text.xl, '@media (min-width: 40rem)': text.display },
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
    maxWidth: '24ch',
    minWidth: 0,
  },
  span: {
    margin: 0,
    color: color.ink2,
    fontSize: text.base,
    lineHeight: leading.body,
  },

  row: {
    margin: 0,
    gap: { 'default': space.xs2, '@media (min-width: 40rem)': space.xs },
    alignItems: 'stretch',
    display: 'flex',
    listStyleType: 'none',
    marginBlockStart: space.lg,
    paddingInlineStart: 0,
  },
  day: {
    display: 'flex',
    flexBasis: 0,
    flexGrow: 1,
    position: 'relative',
    minWidth: 0,
  },
  // The film's diamond sits on the cell's trailing edge, over the gap.
  marks: {
    gap: space.xs3,
    display: 'grid',
    // Above the cell's top edge, so it never covers the number under it.
    insetBlockStart: `calc(-1 * ${space.lg} + ${space.xs3})`,
    insetInlineEnd: `calc(-1 * ${space.sm})`,
    position: 'absolute',
    zIndex: z.raised,
  },

  cell: {
    font: 'inherit',
    borderColor: color.rule,
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    gap: space.xs3,
    paddingBlock: {
      'default': space.xs,
      '@media (min-width: 40rem)': space.sm,
    },
    paddingInline: { 'default': 0, '@media (min-width: 40rem)': space.xs2 },
    alignContent: 'space-between',
    backgroundColor: color.paper2,
    color: color.ink2,
    display: 'grid',
    justifyItems: 'center',
    textAlign: 'center',
    minHeight: { 'default': '3.75rem', '@media (min-width: 40rem)': '5rem' },
    minWidth: 0,
    width: '100%',
  },
  // Filled, as in the strip: the cells the reader can skip are the gold ones.
  cellSkip: {
    borderColor: color.accent,
    backgroundColor: color.accent,
    color: color.accentInk,
  },
  cellRecap: {
    borderColor: color.ink2,
    backgroundColor: color.ink2,
    color: color.accentInk,
  },
  // Half lit, as in the strip: part of it is the story.
  cellMixed: {
    borderColor: color.accent,
    backgroundImage: `linear-gradient(to top, ${color.accent} 0 0.3rem, transparent 0.3rem)`,
    color: color.ink,
  },
  // The reader's own episode: a thick outline in the focus ink.
  cellHere: {
    outlineColor: color.ink,
    outlineOffset: rule.fine,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
  },
  pressable: {
    cursor: 'pointer',
    opacity: { 'default': 1, ':active': 0.85 },
    // The ink ring of the reader's own cell is an outline too; focus wins.
    outlineColor: { ':focus-visible': color.focus },
    outlineOffset: { ':focus-visible': rule.fine },
    outlineStyle: { ':focus-visible': 'solid' },
    outlineWidth: { ':focus-visible': rule.fine },
  },
  number: {
    fontFamily: font.mono,
    fontSize: { 'default': text.base, '@media (min-width: 40rem)': text.lg },
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 700,
    lineHeight: 1,
    whiteSpace: 'nowrap',
  },
  // A season code is six characters, twice a number's width.
  code: {
    fontSize: { 'default': text.xs2, '@media (min-width: 40rem)': text.base },
  },
  kind: {
    overflow: 'hidden',
    fontFamily: font.mono,
    fontSize: { 'default': text.xs2, '@media (min-width: 40rem)': text.xs },
    fontWeight: 700,
    letterSpacing: { 'default': 0, '@media (min-width: 40rem)': '0.04em' },
    lineHeight: 1,
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    maxWidth: '100%',
    minHeight: '1em',
  },

  mark: {
    font: 'inherit',
    borderColor: color.accent,
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    gap: space.xs3,
    paddingBlock: space.xs3,
    paddingInline: space.xs3,
    alignContent: 'center',
    backgroundColor: color.paper,
    color: color.accent,
    display: 'grid',
    justifyItems: 'center',
    minHeight: '1.5rem',
    minWidth: '1.5rem',
  },
  // On a phone the diamond alone: the panel names the film.
  markKind: {
    display: { 'default': 'none', '@media (min-width: 40rem)': 'block' },
    fontFamily: font.mono,
    fontSize: text.xs,
    fontWeight: 700,
    textTransform: 'uppercase',
  },

  panel: {
    padding: space.md,
    borderColor: color.rule,
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    gap: space.xs,
    backgroundColor: color.paper2,
    display: 'grid',
  },
  panelMeta: {
    margin: 0,
    color: color.accent,
    fontFamily: font.mono,
    fontSize: text.xs,
    fontWeight: 700,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
  },
  panelWords: { gap: space.xs2, display: 'grid' },
  panelTitle: {
    margin: 0,
    color: color.ink,
    fontWeight: 700,
    lineHeight: leading.heading,
  },
  panelSummary: {
    margin: 0,
    color: color.ink2,
    lineHeight: leading.body,
    maxWidth: '66ch',
  },
})
