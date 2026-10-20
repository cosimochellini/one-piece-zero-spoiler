import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { useLocale } from '~/i18n/LocaleContext'
import { color, font, leading, rule, space, text } from '~/styles/tokens.stylex'

/**
 * The footer (Hallmark Ft4, dense colophon).
 *
 * One block of small type that says what the page is made of and how it
 * behaves, the way a colophon closes a book. Four columns of links and a row of
 * social icons is the footer every generated page ships, and this site has
 * nothing to put in them. The lead sentence is the one the whole page argues.
 */
export function SiteFooter(): ReactElement {
  const { locale, t } = useLocale()

  return (
    <footer {...stylex.props(styles.footer)}>
      <p {...stylex.props(styles.colophon)}>
        <b {...stylex.props(styles.lead)}>{t('footer.lead')}</b>{' '}
        {t('footer.colophon')}
      </p>
      <p {...stylex.props(styles.colophon)}>{t('footer.unofficial')}</p>
      <p {...stylex.props(styles.colophon)}>
        {t('footer.credits')}{' '}
        <a
          {...stylex.props(styles.link)}
          href="https://www.toei-animation.com/copyrights/"
        >
          {t('footer.creditSource')}
        </a>
      </p>
      <p {...stylex.props(styles.colophon)}>
        <a
          {...stylex.props(styles.link)}
          href="https://github.com/cosimochellini/one-piece-zero-spoiler/issues/new?template=blank.md"
        >
          {t('footer.contact')}
        </a>{' '}
        {t('footer.contactHelp')}
      </p>
      <p {...stylex.props(styles.colophon)}>
        <Link
          params={{ locale }}
          to="/$locale/privacy"
          {...stylex.props(styles.link)}
        >
          {t('privacy.title')}
        </Link>
      </p>
    </footer>
  )
}

const styles = stylex.create({
  footer: {
    paddingInline: space.md,
    borderBlockStartColor: color.rule,
    borderBlockStartStyle: 'solid',
    borderBlockStartWidth: rule.hair,
    paddingBlockEnd: space.xl,
    paddingBlockStart: space.lg,
  },

  // A colophon is read once, slowly, so it keeps a measure.
  colophon: {
    color: color.muted,
    fontFamily: font.body,
    fontSize: text.base,
    lineHeight: leading.body,
    marginBlockEnd: space.sm,
    maxWidth: '72ch',
  },
  link: {
    color: color.ink2,
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textDecorationLine: 'underline',
    textUnderlineOffset: '3px',
  },
  lead: { color: color.ink2, fontWeight: 700 },
})
