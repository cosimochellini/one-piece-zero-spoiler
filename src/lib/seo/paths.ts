import { DEFAULT_LOCALE, isLocale, type Locale, LOCALES } from '~/i18n/locales'

/**
 * The same page in the other language.
 *
 * Shared pages use `/<locale>/<rest>` and archive pages use
 * `/<series>/<locale>/<rest>`, so a translation swaps only the locale. Doing it here rather than at each
 * call keeps the canonical link and the `hreflang` alternates spelling the
 * same URL, which is the one thing a search engine checks about them.
 */

/** One `hreflang` alternate: the language it is for, and where it lives. */
export interface Alternate {
  href: string
  hrefLang: string
}

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

const ROOT_PARTS = 2

/** The locale's home, within the selected series or on the shared site. */
export function localeRoot(pathname: string, locale: Locale): string {
  const first = normalisePath(pathname).split('/', ROOT_PARTS)[1] ?? ''
  return first === '' || isLocale(first) ? `/${locale}` : `/${first}/${locale}`
}

/** The given path with only its locale segment replaced by `locale`. */
export function withLocale(pathname: string, locale: Locale): string {
  const parts = normalisePath(pathname).split('/').slice(1)
  const position = isLocale(parts[0]) || parts[0] === '' ? 0 : 1
  parts[position] = locale
  return `/${parts.join('/')}`
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
export function localeAlternates(pathname: string): Alternate[] {
  const alternates = LOCALES.map((locale) => alternateFor(pathname, locale))

  return [
    ...alternates,
    { href: withLocale(pathname, DEFAULT_LOCALE), hrefLang: 'x-default' },
  ]
}
