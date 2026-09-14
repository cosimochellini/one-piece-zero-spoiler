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

/**
 * Everything the fold paints with, kept beside the component so neither file
 * has to be read past the point a reviewer can hold it.
 *
 * The scrim is one element and it is round, which is the whole of the trick.
 * A rectangle behind the words draws its own edge across the sea, and a
 * straight bottom-up fade on its own is not dark enough to set type over. A
 * wash seated in the corner the words occupy has no edge anywhere, and it
 * leaves the ship, the horizon and the far side of the sky alone.
 */
export const styles = stylex.create({
  // The drawing is the height of its frame, not of the viewport. Below 40rem
  // the words sit under it in the page; from there up they are set into its
  // lower-left corner.
  fold: {
    display: 'grid',
    paddingBlockStart: space.xs,
    position: 'relative',
    rowGap: { 'default': space.lg, '@media (min-width: 40rem)': 0 },
  },
  figure: {
    'borderRadius': radius.card,
    'overflow': 'hidden',
    'aspectRatio': {
      'default': '16 / 9',
      '@media (min-width: 40rem)': '16 / 8',
      '@media (min-width: 60rem)': '16 / 7',
    },
    'backgroundColor': color.paper2,
    'position': 'relative',
    '::after': {
      inset: 0,
      // Below 40rem the words are under the drawing, so the only job here is
      // to keep the sea from ending on a cut edge. From 40rem they move on top
      // of it and a second wash is seated in the corner they occupy — round,
      // so it has no edge of its own to give the trick away.
      backgroundImage: {
        'default': `linear-gradient(to top, ${color.paper} 0%, transparent 30%)`,
        '@media (min-width: 40rem)': `radial-gradient(128% 112% at 0% 100%, ${color.paper} 0%, ${color.paper} 22%, transparent 66%), linear-gradient(to top, ${color.paper} 0%, transparent 26%)`,
      },
      content: '',
      position: 'absolute',
    },
  },
  // The words travel together, so they are one block rather than three things
  // positioned one at a time.
  copy: {
    gap: space.md,
    display: 'grid',
    insetBlockEnd: 0,
    insetInlineStart: 0,
    justifyItems: 'start',
    paddingBlockEnd: { 'default': 0, '@media (min-width: 40rem)': space.xs },
    paddingBlockStart: {
      'default': 0,
      '@media (min-width: 40rem)': space.lg,
      '@media (min-width: 60rem)': space.xl2,
    },
    paddingInlineEnd: { 'default': 0, '@media (min-width: 40rem)': space.xl },
    paddingInlineStart: { 'default': 0, '@media (min-width: 40rem)': space.md },
    position: { 'default': 'static', '@media (min-width: 40rem)': 'absolute' },
    maxWidth: 'min(100%, 34rem)',
  },
  // From 40rem the headline takes the step above display and the display
  // face's width axis closes to semi-condensed, which is what keeps two lines
  // of it inside sixteen characters at that size.
  headline: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: {
      'default': text.display,
      '@media (min-width: 40rem)': text.hero,
    },
    fontStretch: {
      'default': 'normal',
      '@media (min-width: 40rem)': 'semi-condensed',
    },
    fontWeight: 800,
    letterSpacing: '-0.035em',
    lineHeight: leading.display,
    overflowWrap: 'anywhere',
    // The ship sits at 57% of the widest crop and the headline may not reach
    // her. Twelve characters is where the line breaks short of the sail at
    // 40rem; by 60rem the frame is wide enough for the full measure.
    maxWidth: {
      'default': '16ch',
      '@media (min-width: 40rem)': '12ch',
      '@media (min-width: 60rem)': '16ch',
    },
    // Display type needs an explicit last-resort break or a long unbroken
    // string walks off a 320px viewport.
    minWidth: 0,
  },
  actions: {
    gap: space.sm,
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
  },
  // The second way in, and it reads as the second one: the same target size
  // and the same focus ring as the button beside it, in the muted ink rather
  // than in the accent.
  secondary: {
    borderColor: { 'default': color.rule2, ':hover': color.ink },
    borderRadius: radius.input,
    borderStyle: 'solid',
    borderWidth: rule.fine,
    paddingBlock: space.sm,
    paddingInline: space.lg,
    alignItems: 'center',
    color: { 'default': color.ink2, ':hover': color.accent },
    display: 'inline-flex',
    fontFamily: font.body,
    fontSize: text.base,
    fontWeight: 600,
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textDecorationLine: 'none',
    transitionDuration: dur.micro,
    transitionProperty: 'color, border-color',
    transitionTimingFunction: ease.out,
    whiteSpace: 'nowrap',
    minHeight: '44px',
  },
})
