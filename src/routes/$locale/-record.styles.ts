/**
 * What every record's own page is set in: the page's own grid, and the one
 * way back out of it.
 *
 * A character's page and a fruit's page are different macrostructures and
 * share nothing else, but they open and close the same way, and written out
 * twice the two sheets drifted apart by a half-step of padding within a day.
 * The leading `-` keeps the file out of the generated route tree.
 */
import * as stylex from '@stylexjs/stylex'

import { color, dur, ease, rule, space, text } from '~/styles/tokens.stylex'

/** The page grid and the back link, shared by every record page. */
export const recordStyles = stylex.create({
  page: {
    gap: space.xl2,
    paddingInline: space.md,
    display: 'grid',
    paddingBlockEnd: space.xl3,
    paddingBlockStart: space.lg,
  },

  back: { marginBlockEnd: `calc(-1 * ${space.xl})` },
  // The rule under the word, and the two colours it takes. What the link is
  // for is said where it is rendered.
  backLink: {
    color: {
      'default': color.ink2,
      ':hover': color.accent,
      ':active': color.ink,
    },
    fontSize: text.base,
    fontWeight: 600,
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textDecorationColor: { 'default': color.rule2, ':hover': color.accent },
    textDecorationLine: 'underline',
    textDecorationThickness: rule.hair,
    textUnderlineOffset: '4px',
    transitionDuration: dur.micro,
    transitionProperty: 'color, text-decoration-color',
    transitionTimingFunction: ease.out,
    whiteSpace: 'nowrap',
  },
})
