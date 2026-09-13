import { parseCookieHeader } from '~/lib/cookies'

import {
  DEFAULT_LOCALE,
  isLocale,
  type Locale,
  LOCALE_COOKIE,
  LOCALES,
} from './locales'

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
  if (header === null || header === undefined || header === '') {
    return undefined
  }

  const ranked = header
    .split(',')
    .map((entry) => {
      const [tag = '', ...rest] = entry.split(';')
      const quality = rest
        .map((part) => /^\s*q=(.*?)\s*$/u.exec(part))
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
    .sort((a, b) => b.quality - a.quality)

  return ranked.find((entry): entry is { language: Locale; quality: number } =>
    (LOCALES as readonly string[]).includes(entry.language),
  )?.language
}
