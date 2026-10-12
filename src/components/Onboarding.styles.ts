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
  z,
} from '~/styles/tokens.stylex'

/**
 * The onboarding (Hallmark macrostructure 21, Component Playground): the dial
 * is the hero, and the page under it is its live preview.
 */
export const styles = stylex.create({
  page: { paddingInline: space.md, display: 'grid' },

  // The promise, then the dial. No drawing above them: what moves under the
  // dial is the picture.
  intro: {
    gap: space.md,
    display: 'grid',
    paddingBlockEnd: space.lg,
    paddingBlockStart: {
      'default': space.xl,
      '@media (min-width: 40rem)': space.xl2,
    },
    maxWidth: '46rem',
  },
  headline: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.hero,
    fontWeight: 800,
    letterSpacing: '-0.035em',
    lineHeight: leading.display,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
  lede: {
    color: color.ink2,
    fontSize: text.lg,
    lineHeight: leading.body,
    maxWidth: '44ch',
  },

  // Pinned while the preview scrolls under it, so moving the dial and seeing
  // what it opened happen on one screen.
  dial: {
    gap: space.sm,
    marginInline: `calc(-1 * ${space.md})`,
    paddingBlock: space.sm,
    paddingInline: space.md,
    backgroundColor: color.paper,
    borderBlockEndColor: color.accent,
    borderBlockEndStyle: 'solid',
    borderBlockEndWidth: rule.fine,
    display: 'grid',
    insetBlockStart: 0,
    position: 'sticky',
    zIndex: z.sticky,
  },
  readout: {
    gap: space.md,
    alignItems: 'end',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  point: { gap: space.xs2, display: 'grid', minWidth: 0 },
  unitLabel: {
    color: color.muted,
    fontFamily: font.mono,
    fontSize: text.xs,
    fontWeight: 700,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
  },
  numeral: {
    color: color.accent,
    fontFamily: font.display,
    fontSize: text.display,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 800,
    letterSpacing: '-0.03em',
    lineHeight: leading.display,
  },
  arcName: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.lg,
    fontWeight: 800,
    letterSpacing: '-0.01em',
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
  },
  range: {
    accentColor: color.accent,
    cursor: 'pointer',
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    height: '44px',
    width: '100%',
  },
  scale: {
    color: color.muted,
    display: 'flex',
    fontFamily: font.mono,
    fontSize: text.xs,
    justifyContent: 'space-between',
  },

  // Under the pinned dial and scrolling with the page: the unit, and the
  // ways to save a point.
  controls: {
    gap: space.md,
    paddingBlock: space.lg,
    display: 'grid',
    justifyItems: 'start',
  },
  units: { gap: space.xs, display: 'flex', flexWrap: 'wrap' },
  unitOn: { borderColor: color.accent, color: color.accent },
  actions: { gap: space.sm, display: 'flex', flexWrap: 'wrap' },
  primary: {
    borderColor: {
      'default': color.accent,
      ':hover:not(:disabled)': color.ink,
    },
    backgroundColor: {
      'default': color.accent,
      ':hover:not(:disabled)': color.ink,
    },
    color: {
      'default': color.accentInk,
      ':hover:not(:disabled)': color.accentInk,
    },
    fontWeight: 700,
  },
  hint: {
    color: color.muted,
    fontSize: text.base,
    lineHeight: leading.body,
    maxWidth: '52ch',
  },
  form: {
    padding: space.md,
    borderColor: color.rule,
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    gap: space.md,
    backgroundColor: color.paper2,
    display: 'grid',
    maxWidth: '28rem',
    width: '100%',
  },

  // The preview: three shelves, each a grid of cards.
  shelves: {
    gap: space.xl2,
    display: 'grid',
    paddingBlockEnd: space.xl2,
    paddingBlockStart: space.lg,
  },
  shelf: { gap: space.md, display: 'grid' },
  shelfTitle: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.xl,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
  },
  grid: {
    margin: 0,
    padding: 0,
    gap: space.md,
    listStyle: 'none',
    display: 'grid',
    gridTemplateColumns: {
      'default': 'repeat(2, minmax(0, 1fr))',
      '@media (min-width: 40rem)': 'repeat(4, minmax(0, 1fr))',
      '@media (min-width: 64rem)': 'repeat(6, minmax(0, 1fr))',
    },
  },
  // Six arcs: three to a row on a tablet, all six in one row on a desktop.
  wideGrid: {
    gridTemplateColumns: {
      'default': 'repeat(2, minmax(0, 1fr))',
      '@media (min-width: 40rem)': 'repeat(3, minmax(0, 1fr))',
      '@media (min-width: 64rem)': 'repeat(6, minmax(0, 1fr))',
    },
  },

  card: {
    padding: space.sm,
    borderColor: color.rule,
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    gap: space.xs,
    textDecoration: 'none',
    alignContent: 'start',
    backgroundColor: color.paper2,
    color: 'inherit',
    display: 'grid',
    height: '100%',
    minWidth: 0,
  },
  // Room for the pinned dial, so a card reached with the keyboard scrolls
  // into view below it rather than under it.
  cardLink: {
    borderColor: { 'default': color.rule2, ':hover': color.accent },
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    scrollMarginBlockStart: '18rem',
    transform: { 'default': 'none', ':active': 'translateY(1px)' },
    transitionDuration: dur.micro,
    transitionProperty: 'border-color, transform',
    transitionTimingFunction: ease.out,
  },
  here: { borderColor: color.accent, borderWidth: rule.fine },
  // Dimmed by the dashed border and the bare frame, not by opacity: the
  // threshold under it is text the visitor needs to read.
  fogged: { borderStyle: 'dashed', backgroundColor: 'transparent' },
  frame: { aspectRatio: '1', width: '100%' },
  arcFrame: { aspectRatio: '4 / 5', width: '100%' },
  name: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.base,
    fontWeight: 800,
    letterSpacing: '-0.01em',
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
  },
  fogName: { color: color.muted },
  fact: {
    color: color.ink2,
    fontSize: text.xs,
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
  },
  epithet: {
    color: color.accent,
    fontFamily: font.mono,
    fontSize: text.xs,
    fontWeight: 700,
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
  },
  threshold: {
    color: color.muted,
    fontFamily: font.mono,
    fontSize: text.xs,
    lineHeight: leading.heading,
  },

  tail: {
    gap: space.md,
    borderBlockStartColor: color.rule2,
    borderBlockStartStyle: 'solid',
    borderBlockStartWidth: rule.fine,
    display: 'grid',
    paddingBlockStart: space.xl,
  },
})
