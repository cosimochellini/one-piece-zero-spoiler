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
} from '~/styles/tokens.stylex'

// The dialog surfaces rather than slides: a short fade and a small rise, both
// compositor properties, and none of it under reduced motion.
const surface = stylex.keyframes({
  from: { opacity: 0, transform: 'translateY(8px)' },
  to: { opacity: 1, transform: 'none' },
})

/**
 * Every declaration the dialog paints with, kept beside the component rather
 * than inside it so neither file has to be read past the point a reviewer can
 * hold it. StyleX compiles a `create()` the same way wherever it is declared,
 * so the atomic classes and the rendered CSS are unchanged by the move.
 */
export const styles = stylex.create({
  // Pinned by hand rather than left to the UA: `margin: auto` on a fixed,
  // inset-zero box centres it, and `height: fit-content` keeps it from
  // stretching to the viewport. The top layer ignores `z-index`.
  dialog: {
    'inset': 0,
    'margin': 'auto',
    'padding': 0,
    'borderColor': color.rule2,
    'borderRadius': radius.card,
    'borderStyle': 'solid',
    'borderWidth': rule.fine,
    'overflow': 'auto',
    'animationDuration': dur.short,
    'animationName': {
      'default': 'none',
      '@media (prefers-reduced-motion: no-preference)': surface,
    },
    'animationTimingFunction': ease.out,
    'backgroundColor': color.paper2,
    'color': color.ink,
    'position': 'fixed',
    'height': 'fit-content',
    'maxHeight': 'min(80dvh, 40rem)',
    'width': 'min(calc(100% - 2rem), 28rem)',
    '::backdrop': { backgroundColor: color.scrim },
  },
  // Tighter on a phone, where 80dvh is not much taller than the form: every
  // rem of padding is a rem the actions lose before the box has to scroll.
  form: {
    padding: { 'default': space.md, '@media (min-width: 40rem)': space.xl },
    gap: { 'default': space.md, '@media (min-width: 40rem)': space.lg },
    display: 'grid',
  },
  head: { gap: space.xs, display: 'grid' },
  title: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.xl,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
  },
  lede: { color: color.muted, fontSize: text.base, lineHeight: leading.body },

  modes: {
    margin: 0,
    padding: 0,
    borderStyle: 'none',
    gap: space.xs,
    display: 'grid',
    minWidth: 0,
  },
  modeRow: {
    gap: space.xs2,
    display: 'grid',
    gridTemplateColumns: {
      'default': 'minmax(0, 1fr)',
      '@media (min-width: 40rem)': 'repeat(3, minmax(0, 1fr))',
    },
  },
  mode: { display: 'grid', position: 'relative' },
  // The input is present for the keyboard and the screen reader and drawn
  // by its sibling: the checked and focused states are read off it there.
  radio: {
    inset: 0,
    margin: 0,
    opacity: 0,
    position: 'absolute',
    height: '1px',
    width: '1px',
  },
  modeLabel: {
    borderColor: {
      'default': color.rule2,
      ':is(input:checked + &)': color.accent,
      ':is(input:focus-visible + &)': color.accent,
      ':is(label:hover > &)': color.ink,
    },
    borderRadius: radius.input,
    borderStyle: 'solid',
    borderWidth: rule.fine,
    paddingBlock: space.xs,
    paddingInline: space.sm,
    alignItems: 'center',
    color: { 'default': color.ink2, ':is(input:checked + &)': color.ink },
    cursor: 'pointer',
    display: 'flex',
    fontSize: text.base,
    fontWeight: 600,
    justifyContent: 'center',
    lineHeight: leading.heading,
    outlineColor: {
      'default': 'transparent',
      ':is(input:focus-visible + &)': color.focus,
    },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textAlign: 'center',
    transitionDuration: dur.micro,
    transitionProperty: 'color, border-color',
    transitionTimingFunction: ease.out,
    minHeight: '44px',
  },

  group: { gap: space.xs, display: 'grid', justifyItems: 'start' },
  label: {
    padding: 0,
    color: color.ink2,
    fontFamily: font.body,
    fontSize: text.base,
    fontWeight: 600,
  },
  row: {
    gap: space.xs,
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
  },
  field: {
    borderColor: {
      'default': color.rule2,
      ':hover': color.ink2,
      ':focus': color.ink,
    },
    borderRadius: radius.input,
    borderStyle: 'solid',
    borderWidth: rule.fine,
    paddingBlock: space.xs2,
    paddingInline: space.xs,
    backgroundColor: color.paper,
    color: color.ink,
    cursor: { 'default': 'auto', ':disabled': 'not-allowed' },
    fontFamily: font.mono,
    fontSize: text.lg,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 700,
    opacity: { 'default': 1, ':disabled': 0.55 },
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    transitionDuration: dur.micro,
    transitionProperty: 'border-color',
    transitionTimingFunction: ease.out,
    // Matches the 44px button height exactly; a field shorter than the
    // controls beside it reads as an afterthought.
    minHeight: '44px',
  },
  select: {
    fontFamily: font.body,
    fontSize: text.base,
    fontWeight: 600,
    maxWidth: '100%',
    width: '100%',
  },
  number: {
    textAlign: 'center',
    // 5ch holds the ceiling plus a digit of headroom without the field
    // stretching to fill the row. The padding and the border are added on
    // top: the width is the border box, and '5ch' alone clipped '1100'.
    width: `calc(5ch + ${space.md} + ${space.xs2})`,
  },
  fieldInvalid: { borderColor: color.accent },
  message: {
    color: color.muted,
    fontFamily: font.body,
    fontSize: text.base,
    lineHeight: leading.body,
    // Reserves the line whether or not there is a message in it.
    minHeight: '1lh',
  },
  messageError: { color: color.accent, fontWeight: 600 },

  actions: { gap: space.xs, display: 'flex', flexWrap: 'wrap' },
  cancel: {
    marginInlineStart: { 'default': 0, '@media (min-width: 40rem)': 'auto' },
  },
})
