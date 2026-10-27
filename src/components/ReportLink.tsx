import * as stylex from '@stylexjs/stylex'
import { useLocation, useMatch } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { REPOSITORY } from '~/components/SiteFooter'
import { useT } from '~/i18n/LocaleContext'
import { useBookmark } from '~/lib/progress/BookmarkContext'
import { describeBookmark } from '~/lib/progress/threshold'
import { absoluteUrl } from '~/lib/seo/site'
import { color, font, leading, rule, space, text } from '~/styles/tokens.stylex'

/**
 * The way to report a wrong page, below the content of every series page but
 * its home. It opens the content issue form with the page and the reader's
 * bookmark already filled in, the two things a spoiler report cannot be
 * checked without. The title stays empty: the form asks for one without the
 * spoiler, and only the reader knows what that is.
 */
export function ReportLink(): null | ReactElement {
  const t = useT()
  const { bookmark, trial } = useBookmark()
  const { pathname } = useLocation()
  const home = useMatch({ from: '/$series/$locale/', shouldThrow: false })

  if (home !== undefined) {
    return null
  }

  const fields = new URLSearchParams({
    template: 'content.yml',
    entry: absoluteUrl(pathname),
  })
  // A trial point is the demo's, not a place the reader set.
  if (bookmark !== null && !trial) {
    fields.set('bookmark', describeBookmark(t, 'mark', bookmark))
  }

  return (
    <p {...stylex.props(styles.report)}>
      {t('report.question')}{' '}
      <a
        href={`${REPOSITORY}/issues/new?${fields}`}
        {...stylex.props(styles.link)}
      >
        {t('report.link')}
      </a>
    </p>
  )
}

const styles = stylex.create({
  report: {
    paddingInline: space.md,
    color: color.muted,
    fontFamily: font.body,
    fontSize: text.base,
    lineHeight: leading.body,
    paddingBlockEnd: space.lg,
  },
  link: {
    color: color.ink2,
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textDecorationLine: 'underline',
    textUnderlineOffset: '3px',
    whiteSpace: 'nowrap',
  },
})
