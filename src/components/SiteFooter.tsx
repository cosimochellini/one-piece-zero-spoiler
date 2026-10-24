import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { useLocale } from '~/i18n/LocaleContext'
import { useBookmark } from '~/lib/progress/BookmarkContext'
import { color, font, leading, rule, space, text } from '~/styles/tokens.stylex'

/**
 * The footer (Hallmark Ft4, dense colophon).
 *
 * One block of small type that says what the page is made of and how it
 * behaves, the way a colophon closes a book. Four columns of links and a row of
 * social icons is the footer every generated page ships, and this site has
 * nothing to put in them. The lead sentence is the one the whole page argues.
 * A series page names its series; a page with no series (the hub, the legal
 * notices) speaks for every series at once.
 */
export function SiteFooter(): ReactElement {
  const { locale, t } = useLocale()
  const shared = useBookmark().series === null

  return (
    <footer {...stylex.props(styles.footer)}>
      <p {...stylex.props(styles.colophon)}>
        <b {...stylex.props(styles.lead)}>
          {t(shared ? 'footer.sharedLead' : 'footer.lead')}
        </b>{' '}
        {t('footer.colophon')}
      </p>
      <p {...stylex.props(styles.colophon)}>
        {t(shared ? 'footer.sharedUnofficial' : 'footer.unofficial')}{' '}
        <Link
          params={{ locale }}
          to="/$locale/legal"
          {...stylex.props(styles.link)}
        >
          {t('legal.title')}
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
