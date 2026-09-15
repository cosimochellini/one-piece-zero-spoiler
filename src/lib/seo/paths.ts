import { DEFAULT_LOCALE, type Locale, LOCALES } from '~/i18n/locales'

/**
 * The same page in the other language.
 *
 * Every address on the site is `/<locale>/<rest>`, so a translation is the
 * same path with the first segment swapped. Doing it here rather than at each
 * call keeps the canonical link and the `hreflang` alternates spelling the
 * same URL, which is the one thing a search engine checks about them.
 */

/** One `hreflang` alternate: the language it is for, and where it lives. */
export type Alternate = { readonly href: string; readonly hrefLang: string }

/**
 * A path without its trailing slash, because `/en/fruits` and `/en/fruits/`
 * would otherwise nominate two canonical URLs for one page. The root keeps
 * its slash, being nothing else.
 */
export function normalisePath(pathname: string): string {
  const trimmed =
    pathname.length > 1 && pathname.endsWith('/') ?
      normalisePath(pathname.slice(0, -1))
    : pathname

  return trimmed === '' ? '/' : trimmed
}

// A path is `/<locale>/<rest>`, so the rest starts after the empty segment
// before the leading slash and the locale that follows it.
const REST_FROM = 2

/** The given path with its locale segment replaced by `locale`. */
export function withLocale(pathname: string, locale: Locale): string {
  const rest = normalisePath(pathname).split('/').slice(REST_FROM).join('/')

  return rest === '' ? `/${locale}` : `/${locale}/${rest}`
}

function alternateFor(pathname: string, locale: Locale): Alternate {
  return { href: withLocale(pathname, locale), hrefLang: locale }
}

/**
 * Every published translation of a path, plus `x-default`.
 *
 * `x-default` points at the Italian page rather than at `/`: the bare root is
 * a 302 to a negotiated language, and a search engine asked to treat a
 * redirect as the fallback follows it to one of the two pages already listed.
 */
export function localeAlternates(pathname: string): readonly Alternate[] {
  const alternates = LOCALES.map((locale) => alternateFor(pathname, locale))

  return [
    ...alternates,
    { href: withLocale(pathname, DEFAULT_LOCALE), hrefLang: 'x-default' },
  ]
}
