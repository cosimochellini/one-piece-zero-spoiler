import * as stylex from '@stylexjs/stylex'

import { color, font, leading, rule, space, text } from '~/styles/tokens.stylex'

export const styles = stylex.create({
  page: {
    padding: space.md,
    marginBlock: space.lg,
    color: color.ink2,
    fontFamily: font.body,
    fontSize: text.base,
    lineHeight: leading.body,
    overflowWrap: 'anywhere',
    maxWidth: '76ch',
  },
  title: { color: color.ink, fontFamily: font.display, fontSize: text.display },
  heading: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.xl,
    lineHeight: leading.heading,
    marginBlockEnd: space.sm,
    marginBlockStart: space.lg,
  },
  paragraph: { marginBlockEnd: space.sm },
  list: { marginBlockEnd: space.sm, paddingInlineStart: space.lg },
  link: {
    color: color.accent,
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textDecorationLine: 'underline',
    textUnderlineOffset: '3px',
  },
})
