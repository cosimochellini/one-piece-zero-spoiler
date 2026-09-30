import * as stylex from '@stylexjs/stylex'

import {
  color,
  font,
  leading,
  radius,
  space,
  text,
} from '~/styles/tokens.stylex'

/**
 * Everything the fold paints with, kept beside the component.
 *
 * The drawing is a line drawing in a 160×200 box, drawn with the same 2px
 * pen at every size. Set at the height of the frame it is a few lines on a
 * lot of dark paper, which is the point: the frame is the drawing's, not a
 * card it sits in. A wash of the arc's own colour sits behind it so the
 * frame is not flat black, and the scrim is one round element seated in the
 * corner the words occupy, so it has no edge anywhere.
 */
export const styles = stylex.create({
  fold: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr)',
    paddingBlockStart: space.xs,
    rowGap: { 'default': space.lg, '@media (min-width: 40rem)': 0 },
  },
  figure: {
    'borderRadius': radius.card,
    // From 40rem the words share the frame's grid cell, so the frame is as
    // tall as its ratio or as the words, whichever is more: a long name over
    // the notice never grows out of the top of it.
    'gridColumn': '1',
    'gridRow': '1',
    'overflow': 'clip',
    'aspectRatio': {
      'default': '4 / 5',
      '@media (min-width: 40rem)': '16 / 9',
      '@media (min-width: 60rem)': '16 / 7',
    },
    'backgroundColor': color.paper2,
    'position': 'relative',
    '::after': {
      inset: 0,
      // Below 40rem the words are under the drawing, so the wash only keeps
      // the frame from ending on a cut edge. From 40rem the words move onto
      // it, and a second wash is seated in the corner they occupy.
      backgroundImage: {
        'default': `linear-gradient(to top, ${color.paper} 0%, transparent 34%)`,
        '@media (min-width: 40rem)': `radial-gradient(120% 118% at 0% 100%, ${color.paper} 0%, ${color.paper} 26%, transparent 68%), linear-gradient(to top, ${color.paper} 0%, transparent 28%)`,
      },
      content: '',
      position: 'absolute',
    },
  },
  // The arc's colour, as a soft light behind the drawing rather than a fill:
  // a drawing is never filled, so the colour is in the air around it.
  halo: (image: string) => ({ backgroundImage: image }),
  haloBox: {
    insetBlock: '-10%',
    insetInlineEnd: { 'default': '-20%', '@media (min-width: 40rem)': '-4%' },
    position: 'absolute',
    width: { 'default': '140%', '@media (min-width: 40rem)': '72%' },
  },
  // The drawing is set taller than the frame and cropped by it: its box has
  // air above and below the object, and the crop takes that rather than the
  // object. On a phone it is centred; from 40rem it stands to the right,
  // clear of the words.
  art: {
    marginInline: 'auto',
    aspectRatio: '160 / 200',
    insetBlockStart: { 'default': '-9%', '@media (min-width: 40rem)': '-18%' },
    insetInlineEnd: {
      'default': 0,
      '@media (min-width: 40rem)': '-12%',
      '@media (min-width: 60rem)': '4%',
    },
    insetInlineStart: { 'default': 0, '@media (min-width: 40rem)': 'auto' },
    opacity: 0.92,
    position: 'absolute',
    height: { 'default': '118%', '@media (min-width: 40rem)': '136%' },
  },
  copy: {
    gap: space.sm,
    gridColumn: '1',
    gridRow: { 'default': '2', '@media (min-width: 40rem)': '1' },
    alignSelf: 'end',
    display: 'grid',
    justifyItems: 'start',
    paddingBlockEnd: { 'default': 0, '@media (min-width: 40rem)': space.md },
    paddingBlockStart: { 'default': 0, '@media (min-width: 40rem)': space.xl },
    paddingInlineEnd: { 'default': 0, '@media (min-width: 40rem)': space.xl },
    paddingInlineStart: { 'default': 0, '@media (min-width: 40rem)': space.md },
    position: 'relative',
    maxWidth: 'min(100%, 38rem)',
  },
  // The one sentence for a reader with no bookmark, set apart by the accent
  // rule rather than by a box.
  unset: {
    borderInlineStartColor: color.accent,
    borderInlineStartStyle: 'solid',
    borderInlineStartWidth: '3px',
    color: color.ink2,
    fontSize: text.base,
    lineHeight: leading.body,
    marginBlockEnd: space.xs,
    paddingInlineStart: space.sm,
    maxWidth: '44ch',
  },
  // The reader's point in the same voice as the mark in the bar: the mono
  // outlier, in the accent, tabular.
  point: {
    color: color.accent,
    fontFamily: font.mono,
    fontSize: text.base,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 700,
    letterSpacing: '0.1em',
    lineHeight: leading.body,
    textTransform: 'uppercase',
  },
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
    maxWidth: '14ch',
    // Display type needs an explicit last-resort break or a long unbroken
    // name walks off a 320px viewport.
    minWidth: 0,
  },
  summary: {
    color: color.ink2,
    fontSize: text.base,
    lineHeight: leading.body,
    maxWidth: '44ch',
  },
  actions: { display: 'flex', flexWrap: 'wrap', marginBlockStart: space.xs },
})
