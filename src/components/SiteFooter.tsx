import * as stylex from '@stylexjs/stylex'

import { useT } from '~/i18n/LocaleContext'
import { color, font, leading, rule, space, text } from '~/styles/tokens.stylex'

/**
 * The footer (Hallmark Ft4, dense colophon).
 *
 * One block of small type that says what the page is made of and how it
 * behaves, the way a colophon closes a book. Four columns of links and a row of
 * social icons is the footer every generated page ships, and this site has
 * nothing to put in them. The lead sentence is the one the whole page argues.
 */
export function SiteFooter() {
  const t = useT()

  return (
    <footer {...stylex.props(styles.footer)}>
      <p {...stylex.props(styles.colophon)}>
        <b {...stylex.props(styles.lead)}>{t('footer.lead')}</b>{' '}
        {t('footer.colophon')}
      </p>
    </footer>
  )
}

const styles = stylex.create({
  footer: {
    borderBlockStartColor: color.rule,
    borderBlockStartStyle: 'solid',
    borderBlockStartWidth: rule.hair,
    paddingBlockEnd: space.xl,
    paddingBlockStart: space.lg,
    paddingInline: space.md,
  },

  // A colophon is read once, slowly, so it keeps a measure.
  colophon: {
    color: color.muted,
    fontFamily: font.body,
    fontSize: text.base,
    lineHeight: leading.body,
    maxWidth: '72ch',
  },
  lead: {
    color: color.ink2,
    fontWeight: 700,
  },
})
