import * as stylex from '@stylexjs/stylex'

import { color, pin, rule, space, z } from '~/styles/tokens.stylex'

/**
 * The custom property a pinned control bar (`ControlBar`) writes on the
 * document: how much of the bar stays on screen once it is pinned. A sticky
 * head below the bar pins under it by reading this, and the scroll padding
 * adds it; with no bar it is unset and both are as they were.
 */
export const STACK_PROPERTY = '--sticky-stack'

/**
 * A series page's bar keeps two rows up to 56rem, where the site's own bar
 * is one row from 40rem (`ROOMY` in src/components/SiteBar.tsx). Set on
 * `<html>` with the series' colours, so everything that pins under the bar
 * reads the same height.
 */
export const seriesBarPin = stylex.createTheme(pin, {
  bar: { 'default': '6rem', '@media (min-width: 56rem)': '3.25rem' },
})

/** One compact group line, plus breathing room for anchors and focus. */
export const stickyStyles = stylex.create({
  bar: {
    paddingBlock: space.xs,
    backgroundColor: color.paper,
    borderBlockEndColor: color.rule,
    borderBlockEndStyle: 'solid',
    borderBlockEndWidth: rule.hair,
    insetBlockStart: pin.bar,
    position: 'sticky',
    zIndex: z.sticky,
    minHeight: '2.75rem',
  },
  // A head that pins under a control bar rather than under the site bar.
  underBar: {
    insetBlockStart: `calc(${pin.bar} + var(${STACK_PROPERTY}, 0px))`,
  },
  whileOpen: { position: { 'default': 'static', ':is([open] > *)': 'sticky' } },
  document: {
    scrollPaddingBlockStart: `calc(${pin.bar} + var(${STACK_PROPERTY}, 0px) + 2.75rem + ${space.xs})`,
  },
})
