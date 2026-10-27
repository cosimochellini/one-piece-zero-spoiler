import * as stylex from '@stylexjs/stylex'
import type { ReactElement, ReactNode } from 'react'

import { ReportLink } from '~/components/ReportLink'
import { SiteBar } from '~/components/SiteBar'
import { SiteFooter } from '~/components/SiteFooter'
import { TrialStrip } from '~/components/TrialStrip'
import { LocaleProvider } from '~/i18n/LocaleProvider'
import type { Locale } from '~/i18n/locales'
import { getDictionary, translate } from '~/i18n/translate'
import type { SeriesCopy } from '~/i18n/types'
import { color, font, rule, space, text, z } from '~/styles/tokens.stylex'

/** Shared site frame; archive contexts belong to the series route. */
export function LocaleShell({
  locale,
  copy,
  children,
  shared = false,
  trial = false,
}: {
  children: ReactNode
  /** The series' own copy, on a page of a series. */
  copy?: SeriesCopy
  locale: Locale
  /** A page with no series: the hub and the legal notices. */
  shared?: boolean
  trial?: boolean
}): ReactElement {
  return (
    <LocaleProvider
      copy={copy}
      locale={locale}
    >
      <a
        href="#content"
        {...stylex.props(styles.skip)}
      >
        {translate(getDictionary(locale), 'nav.skip')}
      </a>
      <div {...stylex.props(styles.shell)}>
        <SiteBar />
        <div>{trial && <TrialStrip />}</div>
        {children}
        {!shared && <ReportLink />}
        <SiteFooter shared={shared} />
      </div>
    </LocaleProvider>
  )
}

const styles = stylex.create({
  shell: {
    marginInline: 'auto',
    display: 'grid',
    // `minmax(0, 1fr)` rather than the implicit `1fr`. An implicit column is
    // `minmax(auto, 1fr)`, whose floor is the widest child's min-content:
    // one `white-space: nowrap` bar row and the whole shell is wider than a
    // phone, every page along with it.
    gridTemplateColumns: 'minmax(0, 1fr)',
    // The footer is pushed to the bottom on a short page without a
    // `min-height: 100vh` hero, which is its own tell.
    gridTemplateRows: 'auto auto 1fr auto',
    maxWidth: '76rem',
    minHeight: '100dvh',
    width: '100%',
  },

  skip: {
    borderColor: color.ink,
    borderStyle: 'solid',
    borderWidth: rule.fine,
    paddingBlock: space.xs,
    paddingInline: space.sm,
    backgroundColor: color.paper,
    color: color.ink,
    fontFamily: font.body,
    fontSize: text.base,
    fontWeight: 700,
    insetBlockStart: space.xs,
    insetInlineStart: space.xs,
    outlineColor: color.focus,
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    // Off-screen rather than `display: none`, so it stays focusable.
    position: 'fixed',
    transform: { 'default': 'translateY(-150%)', ':focus': 'none' },
    zIndex: z.skip,
  },
})
