import * as stylex from '@stylexjs/stylex'
import { useNavigate } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { useLocale } from '~/i18n/LocaleContext'
import { isLocale, type Locale, LOCALE_COOKIE, LOCALES } from '~/i18n/locales'
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
 * A native `<select>` laid over its own face, transparent, so the tap and the
 * keyboard reach the real control while what is painted stays a short code
 * and a drawn chevron; the list it opens, the platform's own picker, names
 * both languages in full. It is the same control at every width, so the bar
 * never has to find room for two language names beside the bookmark.
 *
 * The choice writes the locale cookie, which is what lets a later visit to `/`
 * land on the same language without asking again, and goes to the current
 * route with only the locale param swapped (`to="."`), so a reader on a
 * character's page gets the same page in the other language and not the
 * landing. Crawlers find the other language through the sitemap's hreflang
 * alternates, not through this control.
 */
export function LocaleSwitch(): ReactElement {
  const { locale, t } = useLocale()
  const navigate = useNavigate()

  return (
    <label {...stylex.props(styles.pick)}>
      <span
        aria-hidden="true"
        {...stylex.props(styles.code)}
      >
        {locale}
      </span>
      <svg
        aria-hidden="true"
        height="6"
        viewBox="0 0 10 6"
        width="10"
      >
        <path
          d="M1 1l4 4 4-4"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
      <select
        aria-label={t('locale.label')}
        onChange={({ target }) => {
          if (!isLocale(target.value)) {
            return
          }
          const next = target.value
          remember(next)
          void navigate({
            params: (previous) => ({ ...previous, locale: next }),
            to: '.',
          })
        }}
        value={locale}
        {...stylex.props(styles.native)}
      >
        {LOCALES.map((candidate) => {
          return (
            <option
              key={candidate}
              lang={candidate}
              value={candidate}
            >
              {t(LABEL_KEY[candidate])}
            </option>
          )
        })}
      </select>
    </label>
  )
}

const styles = stylex.create({
  // The bookmark's frame beside it, one step quieter: the same height, rule
  // and radius, the ambient ink instead of the accent, which the bookmark
  // keeps for itself. The ring is drawn on the frame, the select under it
  // being invisible.
  pick: {
    borderColor: { 'default': color.rule2, ':hover': color.ink },
    borderRadius: radius.input,
    borderStyle: 'solid',
    borderWidth: rule.fine,
    gap: space.xs2,
    paddingInline: space.xs,
    alignItems: 'center',
    color: { 'default': color.ink2, ':hover': color.accent },
    display: 'inline-flex',
    justifyContent: 'center',
    outlineColor: {
      'default': 'transparent',
      ':has(:focus-visible)': color.focus,
    },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    position: 'relative',
    transitionDuration: dur.micro,
    transitionProperty: 'color, border-color',
    transitionTimingFunction: ease.out,
    minHeight: '44px',
    minWidth: '44px',
  },
  code: {
    fontFamily: font.mono,
    fontSize: text.xs,
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  },
  native: {
    inset: 0,
    appearance: 'none',
    cursor: 'pointer',
    // At least 16px, or iOS zooms the page in when the picker opens.
    fontSize: text.base,
    opacity: 0,
    position: 'absolute',
  },
})
