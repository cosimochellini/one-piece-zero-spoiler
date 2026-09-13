import { parseCookieHeader } from '~/lib/cookies'

import { DEFAULT_LOCALE, isLocale, type Locale, LOCALE_COOKIE } from './locales'

/**
 * Picks the locale for a request that did not name one in its path.
 *
 * The order is deliberate. A cookie is an explicit choice the reader made on
 * this site, so it outranks `Accept-Language`, which is a browser default the
 * reader has probably never seen. Only when neither says anything does the
 * site default apply.
 */
export function negotiateLocale(
  cookieHeader: null | string | undefined,
  acceptLanguage: null | string | undefined,
): Locale {
  const fromCookie = parseCookieHeader(cookieHeader).get(LOCALE_COOKIE)
  if (isLocale(fromCookie)) {
    return fromCookie
  }

  return parseAcceptLanguage(acceptLanguage) ?? DEFAULT_LOCALE
}

// Matched against an already-trimmed parameter, so the surrounding whitespace
// the header grammar allows is handled by `trim` rather than by a `\s*` the
// captured value could trade characters with – which is what made the older
// pattern backtrack quadratically on a hostile header.
const QUALITY_PARAM = /^q=(?<quality>.*)$/u

/**
 * Reads the highest-weighted supported language out of an `Accept-Language`
 * header.
 *
 * Region subtags are dropped (`en-GB` matches `en`), entries are ranked by
 * their `q` value, and an unparseable `q` sinks the entry to the bottom rather
 * than throwing.
 */
export function parseAcceptLanguage(
  header: null | string | undefined,
): Locale | undefined {
  if (header === null || header === undefined) {
    return undefined
  }
  if (header === '') {
    return undefined
  }

  const ranked = header
    .split(',')
    .map((entry) => {
      const [tag = '', ...rest] = entry.split(';')
      const quality = rest
        .map((part) => QUALITY_PARAM.exec(part.trim()))
        .find((match) => match !== null)
      // A `q` that is present but not a number sinks the entry rather than
      // being read as "no q given": a client that sent `q=abc` did not mean
      // "this is my first choice".
      const parsed = quality === undefined ? 1 : Number(quality[1])

      return {
        language: (tag.trim().split('-', 1)[0] ?? '').toLowerCase(),
        quality: Number.isFinite(parsed) ? parsed : 0,
      }
    })
    .filter((entry) => entry.quality > 0)
    .toSorted((a, b) => b.quality - a.quality)

  const best = ranked.find(
    (entry): entry is { language: Locale; quality: number } =>
      isLocale(entry.language),
  )

  return best?.language
}
