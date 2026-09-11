import * as stylex from '@stylexjs/stylex'

import { LocaleSwitch } from '~/components/LocaleSwitch'
import { useT } from '~/i18n/LocaleContext'
import { color, font, leading, space, text } from '~/styles/tokens.stylex'

/**
 * The bar (Hallmark N9, edge-aligned).
 *
 * Wordmark hard-left, the one control hard-right, and nothing in between. The
 * site has a single page and two languages, so a link row would be filling
 * the space for the sake of it. The reader's bookmark is not repeated here
 * either: it is drawn on the route as the horizon line, which is where the
 * eye goes for it.
 */
export function SiteBar() {
  const t = useT()

  return (
    <header {...stylex.props(styles.bar)}>
      <p {...stylex.props(styles.wordmark)}>{t('site.name')}</p>
      <LocaleSwitch />
    </header>
  )
}

const styles = stylex.create({
  bar: {
    alignItems: 'center',
    display: 'flex',
    gap: space.md,
    justifyContent: 'space-between',
    paddingBlock: space.md,
    paddingInline: space.md,
  },

  wordmark: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.lg,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    textTransform: 'uppercase',
    // A wordmark is one line or it is not a wordmark.
    whiteSpace: 'nowrap',
  },
})
