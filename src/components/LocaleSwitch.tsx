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
                to="/$locale"
                params={{ locale: candidate }}
                hrefLang={candidate}
                // The active item is marked for assistive technology as well
                // as with the accent rule, because colour alone is not a
                // signal.
                aria-current={current ? 'true' : undefined}
                onClick={() => {
                  remember(candidate)
                }}
                {...stylex.props(styles.link, current && styles.linkCurrent)}
              >
                {t(LABEL_KEY[candidate])}
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
    color: { default: color.muted, ':hover': color.accent },
    display: 'inline-flex',
    fontFamily: font.mono,
    fontSize: text.xs,
    fontWeight: 500,
    letterSpacing: '0.08em',
    minHeight: '44px',
    outlineColor: { default: 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    paddingInline: space.xs,
    textDecorationLine: 'none',
    textTransform: 'uppercase',
    transitionDuration: dur.micro,
    transitionProperty: 'color',
    transitionTimingFunction: ease.out,
  },
  linkCurrent: {
    color: color.ink,
    textDecorationColor: color.accent,
    textDecorationLine: 'underline',
    textDecorationThickness: rule.fine,
    textUnderlineOffset: '4px',
  },
})
