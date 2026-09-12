import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'

import { useLocale } from '~/i18n/LocaleContext'
import { LOCALE_COOKIE, LOCALES } from '~/i18n/locales'
import type { Locale } from '~/i18n/locales'
import { COOKIE_MAX_AGE_SECONDS, writeCookie } from '~/lib/cookies'
import {
  color,
  dur,
  ease,
  font,
  radius,
  rule,
  space,
  text,
} from '~/styles/tokens.stylex'

const LABEL_KEY = { it: 'locale.it', en: 'locale.en' } as const

/**
 * Remembers the choice so a later visit to `/` lands on the same language.
 * Module scope because it closes over nothing: rebuilding it on every render
 * would allocate for no reason.
 */
function remember(next: Locale): void {
  writeCookie(LOCALE_COOKIE, next, COOKIE_MAX_AGE_SECONDS)
}

/**
 * Switches language by navigating, not by swapping strings in place.
 *
 * Each locale has its own URL, so the switch is a pair of real links: they can
 * be opened in a new tab, shared, and crawled. The click also writes the
 * locale cookie, which is what lets a later visit to `/` land on the same
 * language without asking again.
 *
 * `to="."` is the current route with only the locale param swapped, so a
 * reader on a character's page gets the same page in the other language and
 * not the landing.
 */
export function LocaleSwitch() {
  const { locale, t } = useLocale()

  return (
    <nav aria-label={t('locale.label')} {...stylex.props(styles.nav)}>
      <ul {...stylex.props(styles.list)}>
        {LOCALES.map((candidate) => {
          const current = candidate === locale

          return (
            <li key={candidate}>
              <Link
                to="."
                params={(previous) => ({ ...previous, locale: candidate })}
                hrefLang={candidate}
                // `Link` sets `aria-current="page"` on the active item by
                // itself, so the accent rule is never the only signal.
                onClick={() => {
                  remember(candidate)
                }}
                // The accessible name is always the full language name; only
                // what is painted changes with the width.
                aria-label={t(LABEL_KEY[candidate])}
                {...stylex.props(styles.link, current && styles.linkCurrent)}
              >
                <span aria-hidden="true" {...stylex.props(styles.full)}>
                  {t(LABEL_KEY[candidate])}
                </span>
                <span aria-hidden="true" {...stylex.props(styles.code)}>
                  {candidate}
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

const styles = stylex.create({
  nav: {
    display: 'inline-flex',
  },
  list: {
    display: 'inline-flex',
    gap: space.xs2,
    listStyleType: 'none',
    paddingInline: 0,
  },
  link: {
    alignItems: 'center',
    borderRadius: radius.pill,
    color: {
      default: color.muted,
      ':hover': color.accent,
      ':active': color.ink,
    },
    display: 'inline-flex',
    fontFamily: font.body,
    fontSize: text.xs,
    fontWeight: 600,
    letterSpacing: '0.08em',
    minHeight: '44px',
    minWidth: { default: '44px', '@media (min-width: 40rem)': 0 },
    justifyContent: 'center',
    outlineColor: { default: 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    paddingInline: {
      default: space.xs2,
      '@media (min-width: 40rem)': space.xs,
    },
    textDecorationLine: 'none',
    textTransform: 'uppercase',
    transitionDuration: dur.micro,
    transitionProperty: 'color',
    transitionTimingFunction: ease.out,
  },
  // A phone bar has room for the wordmark, one page link and two language
  // codes, not two language names: 'Italiano English' alone is 158px.
  full: {
    display: { default: 'none', '@media (min-width: 40rem)': 'inline' },
  },
  code: {
    display: { default: 'inline', '@media (min-width: 40rem)': 'none' },
  },
  linkCurrent: {
    color: color.ink,
    textDecorationColor: color.accent,
    textDecorationLine: 'underline',
    textDecorationThickness: rule.fine,
    textUnderlineOffset: '4px',
  },
})
