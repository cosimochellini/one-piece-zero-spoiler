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

const MOTION = '@media (prefers-reduced-motion: no-preference)'

// The numeral rolls in from the side the step went: up for one more, down
// for one less.
const rollUp = stylex.keyframes({
  from: { opacity: 0, transform: 'translateY(0.35em)' },
  to: { opacity: 1, transform: 'none' },
})
const rollDown = stylex.keyframes({
  from: { opacity: 0, transform: 'translateY(-0.35em)' },
  to: { opacity: 1, transform: 'none' },
})

/** The number, centred between the two round steppers, and its saga. */
export const counterStyles = stylex.create({
  // The number, centred, between the two round steppers.
  counter: { gap: space.xs2, display: 'grid', justifyItems: 'center' },
  counterLabel: { textAlign: 'center' },
  stepper: {
    gap: space.md,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  step: {
    padding: 0,
    borderRadius: radius.pill,
    flexShrink: 0,
    // Held down for the repeat, so a long press must not select the glyph
    // or wait out a double-tap zoom.
    touchAction: 'manipulation',
    userSelect: 'none',
    height: '56px',
    width: '56px',
  },
  roll: { display: 'block' },
  rollUp: { animationName: { [MOTION]: rollUp, default: 'none' } },
  rollDown: { animationName: { [MOTION]: rollDown, default: 'none' } },
  rollTiming: {
    animationDuration: dur.short,
    animationTimingFunction: ease.out,
  },
  number: {
    borderInlineWidth: 0,
    borderRadius: 0,
    paddingBlock: 0,
    paddingInline: 0,
    backgroundColor: 'transparent',
    borderBlockEndColor: {
      'default': color.rule2,
      ':hover': color.ink2,
      ':focus': color.focus,
    },
    borderBlockEndStyle: 'solid',
    borderBlockEndWidth: rule.fine,
    borderBlockStartWidth: 0,
    // Focus is the underline, turned to the focus ink and doubled by a shadow
    // that costs no layout. A ring round a display-size numeral reached
    // over the label above it and the saga line below.
    boxShadow: {
      'default': 'none',
      ':focus': `0 ${rule.fine} 0 0 ${color.focus}`,
    },
    color: { 'default': color.ink, ':disabled': color.muted },
    cursor: { 'default': 'text', ':disabled': 'not-allowed' },
    fontFamily: font.mono,
    fontSize: text.display,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 700,
    letterSpacing: '-0.03em',
    lineHeight: 1.1,
    outlineStyle: 'none',
    textAlign: 'center',
    transitionDuration: dur.micro,
    transitionProperty: 'border-color, box-shadow',
    transitionTimingFunction: ease.out,
    // Four digits and a little air; the ceiling is 1300.
    width: '4.6ch',
  },
  numberInvalid: { borderBlockEndColor: color.accent },
  saga: {
    color: color.accent,
    fontFamily: font.mono,
    fontSize: text.xs,
    fontWeight: 700,
    letterSpacing: '0.12em',
    lineHeight: leading.body,
    textAlign: 'center',
    textTransform: 'uppercase',
    // Reserved before the table arrives, so the layout does not jump.
    minHeight: '1lh',
  },
})
