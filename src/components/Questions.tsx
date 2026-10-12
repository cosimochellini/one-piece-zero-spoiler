import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { useT } from '~/i18n/LocaleContext'
import { color, font, leading, rule, space, text } from '~/styles/tokens.stylex'

const FAQ = [
  { q: 'faq.animeQ', a: 'faq.animeA' },
  { q: 'faq.bookmarkQ', a: 'faq.bookmarkA' },
  { q: 'faq.peekQ', a: 'faq.peekA' },
] as const

/**
 * The three questions, answered plainly.
 *
 * They are the rules of the site rather than a marketing FAQ, which is why
 * they are set as a conversation down one column and not as a row of cards.
 */
export function Questions(): ReactElement {
  const t = useT()

  return (
    <section {...stylex.props(styles.faq)}>
      {FAQ.map(({ q, a }) => {
        return (
          <div
            key={q}
            {...stylex.props(styles.qa)}
          >
            <h2 {...stylex.props(styles.question)}>{t(q)}</h2>
            <p {...stylex.props(styles.answer)}>{t(a)}</p>
          </div>
        )
      })}
    </section>
  )
}

const styles = stylex.create({
  // An appendix to the page, not a second act.
  faq: { display: 'grid', paddingBlockEnd: space.xl2 },
  qa: {
    paddingBlock: space.lg,
    borderBlockStartColor: color.rule,
    borderBlockStartStyle: 'solid',
    borderBlockStartWidth: rule.hair,
    columnGap: space.xl,
    display: 'grid',
    gridTemplateColumns: {
      'default': 'minmax(0, 1fr)',
      '@media (min-width: 40rem)': 'minmax(0, 18rem) minmax(0, 1fr)',
    },
    rowGap: space.xs,
  },
  question: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.lg,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
  answer: {
    color: color.ink2,
    fontSize: text.base,
    lineHeight: leading.body,
    maxWidth: '58ch',
  },
})
