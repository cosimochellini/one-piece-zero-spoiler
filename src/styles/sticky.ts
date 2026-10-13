import * as stylex from '@stylexjs/stylex'

import { color, rule, space, z } from '~/styles/tokens.stylex'

/** One compact group line, plus breathing room for anchors and focus. */
export const stickyStyles = stylex.create({
  bar: {
    paddingBlock: space.xs,
    backgroundColor: color.paper,
    borderBlockEndColor: color.rule,
    borderBlockEndStyle: 'solid',
    borderBlockEndWidth: rule.hair,
    insetBlockStart: 0,
    position: 'sticky',
    zIndex: z.sticky,
    minHeight: '2.75rem',
  },
  whileOpen: { position: { 'default': 'static', ':is([open] > *)': 'sticky' } },
  document: { scrollPaddingBlockStart: `calc(2.75rem + ${space.xs})` },
})
