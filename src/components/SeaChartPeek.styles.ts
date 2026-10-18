/* Hallmark · component: popover (a stop's peek on the sea chart; a bottom
 *   sheet under 40rem, as the bookmark dialog is) · genre: atmospheric ·
 *   theme: Sea Chart (locked)
 * states: default · hover · focus · active · loading · error (the veil's) ·
 *   success (the place, revealed); no disabled state: nothing in it is ever
 *   off
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
  z,
} from '~/styles/tokens.stylex'

// The bookmark dialog's sheet breakpoint, not the chart's (37.5rem): from
// 37.5 to 40rem the chart is drawn across, and its peek is a sheet all the
// same, because a 20rem popover beside a stop crowds a chart that narrow.
const SHEET = '@media (max-width: 39.99rem)'
const MOTION = '@media (prefers-reduced-motion: no-preference)'
const SHEET_MOTION =
  '@media (max-width: 39.99rem) and (prefers-reduced-motion: no-preference)'

// Beside its stop the peek fades in; as a sheet it rises from the bottom
// edge, as the bookmark dialog does. Both are compositor-only.
const appear = stylex.keyframes({ from: { opacity: 0 }, to: { opacity: 1 } })
const rise = stylex.keyframes({
  from: { transform: 'translateY(100%)' },
  to: { transform: 'none' },
})

/** The plate: the issue's ~96 px. */
const PLATE = '6rem'

export const styles = stylex.create({
  // Beside its stop, pulled by how far along the chart it is so it never
  // runs off either edge (the words on the chart do the same). Under 40rem
  // it is a sheet on the bottom edge of the screen instead.
  // A `<dialog>`: the UA's centring margin and right edge are dropped.
  peek: {
    margin: 0,
    borderColor: color.rule2,
    borderRadius: {
      [SHEET]: `${radius.card} ${radius.card} 0 0`,
      default: radius.card,
    },
    borderStyle: 'solid',
    borderWidth: { [SHEET]: `${rule.hair} 0 0`, default: rule.hair },
    paddingInline: space.md,
    animationDuration: { [SHEET]: dur.long, default: dur.short },
    animationName: { [MOTION]: appear, [SHEET_MOTION]: rise, default: 'none' },
    animationTimingFunction: ease.out,
    backgroundColor: color.paper2,
    boxShadow: `0 0 0 ${rule.hair} ${color.paper}`,
    color: color.ink,
    insetBlockEnd: { [SHEET]: 0, default: 'auto' },
    insetInlineEnd: 'auto',
    paddingBlockEnd: {
      [SHEET]: `calc(${space.lg} + env(safe-area-inset-bottom))`,
      default: space.md,
    },
    paddingBlockStart: space.md,
    pointerEvents: 'auto',
    position: { [SHEET]: 'fixed', default: 'absolute' },
    zIndex: { [SHEET]: z.tooltip, default: z.dropdown },
    width: { [SHEET]: '100%', default: 'min(20rem, 100%)' },
  },
  placed: (left: string, top: string, transform: string) => ({
    transform: { [SHEET]: 'none', default: transform },
    left: { [SHEET]: 0, default: left },
    top: { [SHEET]: 'auto', default: top },
  }),

  // The way out, in the corner, as the bookmark dialog has it.
  close: {
    padding: 0,
    borderColor: {
      'default': 'transparent',
      ':hover:not(:disabled)': color.rule2,
    },
    borderRadius: radius.pill,
    color: { 'default': color.muted, ':hover:not(:disabled)': color.ink },
    fontSize: text.lg,
    insetBlockStart: space.xs,
    insetInlineEnd: space.xs,
    position: 'absolute',
    height: '44px',
    width: '44px',
  },

  // The stop's number, over the card, clear of the ✕.
  stage: {
    color: color.accent,
    fontFamily: font.mono,
    fontSize: text.xs,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 700,
    letterSpacing: '0.1em',
    paddingInlineEnd: '44px',
    textTransform: 'uppercase',
    minHeight: '1lh',
  },

  // The plate beside the words, the link under both.
  card: {
    alignItems: 'start',
    columnGap: space.md,
    display: 'grid',
    gridTemplateColumns: `${PLATE} minmax(0, 1fr)`,
    paddingBlockStart: space.xs,
    rowGap: space.sm,
  },
  plate: { display: 'block', width: PLATE },
  words: { gap: space.xs3, display: 'grid', minWidth: 0 },
  name: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.lg,
    fontWeight: 800,
    letterSpacing: '-0.01em',
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
  },
  meta: { color: color.muted, fontSize: text.base, lineHeight: leading.body },
  episode: {
    color: color.ink2,
    fontFamily: font.mono,
    fontSize: text.xs,
    fontVariantNumeric: 'tabular-nums',
  },
  link: {
    alignItems: 'center',
    color: { 'default': color.accent, ':hover': color.ink },
    display: 'inline-flex',
    fontWeight: 700,
    gridColumnEnd: '-1',
    gridColumnStart: '1',
    justifySelf: 'start',
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textDecorationLine: 'underline',
    textUnderlineOffset: '0.25em',
    transitionDuration: dur.micro,
    transitionProperty: 'color',
    transitionTimingFunction: ease.out,
    minHeight: '44px',
  },
})
