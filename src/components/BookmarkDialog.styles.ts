/* Hallmark · component: modal (bookmark dialog) · genre: atmospheric · theme: Sea Chart (locked)
 * states: default · hover · focus · active · disabled · loading · error · success
 * redesign 2026-10-12: the number as the hero, bottom sheet under 40rem, gold Save
 */
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

const SHEET = '@media (max-width: 39.99rem)'
const MOTION = '@media (prefers-reduced-motion: no-preference)'
const SHEET_MOTION =
  '@media (max-width: 39.99rem) and (prefers-reduced-motion: no-preference)'

// On a desktop the dialog surfaces: a short fade and a small rise. As a sheet
// it rises from the bottom edge it is attached to. Both are compositor-only.
const surface = stylex.keyframes({
  from: { opacity: 0, transform: 'translateY(8px)' },
  to: { opacity: 1, transform: 'none' },
})
const rise = stylex.keyframes({
  from: { transform: 'translateY(100%)' },
  to: { transform: 'none' },
})

/**
 * Every declaration the dialog paints with, kept beside the component rather
 * than inside it so neither file has to be read past the point a reviewer can
 * hold it.
 */
export const styles = stylex.create({
  // Pinned by hand rather than left to the UA: `margin: auto` on a fixed,
  // inset-zero box centres it, and `height: fit-content` keeps it from
  // stretching to the viewport. Under 40rem the top margin alone stays auto,
  // which drops the box onto the bottom edge as a sheet.
  dialog: {
    'inset': 0,
    'margin': { [SHEET]: 'auto 0 0', default: 'auto' },
    'padding': 0,
    'borderColor': color.rule2,
    'borderRadius': {
      [SHEET]: `${radius.card} ${radius.card} 0 0`,
      default: radius.card,
    },
    'borderStyle': 'solid',
    'borderWidth': { [SHEET]: `${rule.hair} 0 0`, default: rule.hair },
    'overflow': 'auto',
    'overscrollBehavior': 'contain',
    'animationDuration': { [SHEET]: dur.long, default: dur.short },
    'animationName': {
      [MOTION]: surface,
      [SHEET_MOTION]: rise,
      default: 'none',
    },
    'animationTimingFunction': ease.out,
    'backgroundColor': color.paper2,
    'color': color.ink,
    'position': 'fixed',
    'height': 'fit-content',
    'maxHeight': { [SHEET]: '92dvh', default: 'min(90dvh, 44rem)' },
    'maxWidth': '100%',
    'width': { [SHEET]: '100%', default: 'min(calc(100% - 2rem), 30rem)' },
    '::backdrop': { backgroundColor: color.scrim },
  },

  // Everything inside the dialog: the head, the form or its skeleton, and
  // the close button pinned in the corner.
  panel: {
    gap: space.lg,
    paddingInline: { [SHEET]: space.md, default: space.xl },
    display: 'grid',
    paddingBlockEnd: {
      [SHEET]: `calc(${space.lg} + env(safe-area-inset-bottom))`,
      default: space.xl,
    },
    paddingBlockStart: { [SHEET]: space.lg, default: space.xl },
    position: 'relative',
  },

  body: { gap: space.lg, display: 'grid' },

  // The title clears the close button in the corner.
  head: { gap: space.xs2, display: 'grid', paddingInlineEnd: space.xl },
  title: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.xl,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
  },
  lede: { color: color.muted, fontSize: text.base, lineHeight: leading.body },
  close: {
    padding: 0,
    borderColor: {
      'default': 'transparent',
      ':hover:not(:disabled)': color.rule2,
    },
    borderRadius: radius.pill,
    color: { 'default': color.muted, ':hover:not(:disabled)': color.ink },
    fontSize: text.lg,
    insetBlockStart: { [SHEET]: space.sm, default: space.md },
    insetInlineEnd: { [SHEET]: space.sm, default: space.md },
    position: 'absolute',
    height: '44px',
    width: '44px',
  },

  // The unit: a radio group drawn as one segmented track, with a marker that
  // slides under the chosen segment.
  modes: {
    margin: 0,
    padding: 0,
    borderStyle: 'none',
    gap: space.xs,
    display: 'grid',
    minWidth: 0,
  },
  track: {
    padding: space.xs3,
    borderColor: color.rule2,
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    backgroundColor: color.paper,
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    position: 'relative',
  },
  marker: {
    borderRadius: radius.input,
    insetBlock: space.xs3,
    backgroundColor: color.paper3,
    borderBlockEndColor: color.accent,
    borderBlockEndStyle: 'solid',
    borderBlockEndWidth: rule.fine,
    insetInlineStart: space.xs3,
    pointerEvents: 'none',
    position: 'absolute',
    transitionDuration: dur.short,
    transitionProperty: 'transform',
    transitionTimingFunction: ease.out,
    width: `calc((100% - 2 * ${space.xs3}) / 3)`,
  },
  trackWithoutSeasons: { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
  markerWithoutSeasons: { width: `calc((100% - 2 * ${space.xs3}) / 2)` },
  markerAt0: { transform: 'none' },
  markerAt1: { transform: 'translateX(100%)' },
  markerAt2: { transform: 'translateX(200%)' },
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
    borderRadius: radius.input,
    paddingInline: space.xs,
    alignItems: 'center',
    color: {
      'default': color.muted,
      ':is(input:checked + &)': color.ink,
      ':is(label:hover > &)': color.ink,
    },
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
    outlineOffset: 0,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    position: 'relative',
    textAlign: 'center',
    transitionDuration: dur.micro,
    transitionProperty: 'color',
    transitionTimingFunction: ease.out,
    whiteSpace: 'nowrap',
    minHeight: '44px',
  },

  group: { gap: space.xs, display: 'grid', justifyItems: 'stretch' },
  label: {
    padding: 0,
    color: color.ink2,
    fontFamily: font.body,
    fontSize: text.base,
    fontWeight: 600,
  },
  select: {
    borderColor: {
      'default': color.rule2,
      ':hover': color.ink2,
      ':focus': color.ink,
    },
    borderRadius: radius.input,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    paddingBlock: space.xs,
    paddingInline: space.sm,
    backgroundColor: color.paper,
    color: color.ink,
    cursor: 'pointer',
    fontFamily: font.body,
    fontSize: text.base,
    fontWeight: 600,
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    transitionDuration: dur.micro,
    transitionProperty: 'border-color',
    transitionTimingFunction: ease.out,
    maxWidth: '100%',
    minHeight: '44px',
    width: '100%',
  },

  message: {
    color: color.muted,
    fontFamily: font.body,
    fontSize: text.base,
    lineHeight: leading.body,
    textAlign: 'center',
    // Reserves the line whether or not there is a message in it.
    minHeight: '1lh',
  },
  messageError: { color: color.accent, fontWeight: 600 },

  actions: { gap: space.xs, display: 'grid', justifyItems: 'center' },
  // The one gold surface on the site (owner, 2026-10-12): the action the
  // whole dialog exists for. Text on it is `accentInk`, by contract.
  save: {
    borderColor: { 'default': color.accent, ':disabled': color.rule },
    backgroundColor: {
      'default': color.accent,
      ':active:not(:disabled)': `color-mix(in oklch, ${color.accent} 88%, ${color.accentInk})`,
      ':hover:not(:disabled)': `color-mix(in oklch, ${color.accent} 80%, ${color.ink})`,
      ':disabled': color.paper3,
    },
    color: {
      'default': color.accentInk,
      ':hover:not(:disabled)': color.accentInk,
      ':disabled': color.muted,
    },
    fontSize: text.lg,
    fontWeight: 700,
    opacity: 1,
    minHeight: '52px',
    width: '100%',
  },
  // Clearing the bookmark is rare and final, so it is a quiet line of text
  // under the action rather than a second button beside it.
  forget: {
    borderColor: 'transparent',
    color: { 'default': color.muted, ':hover:not(:disabled)': color.ink },
    fontSize: text.base,
    fontWeight: 500,
    textDecorationColor: { 'default': color.rule2, ':hover': color.ink },
    textDecorationLine: 'underline',
    textDecorationThickness: rule.hair,
    textUnderlineOffset: '0.25em',
  },
})
