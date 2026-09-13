/**
 * The locales the site is published in.
 *
 * Italian is the default because the site is written first for an Italian
 * audience; English exists so the same entity data can be read by anyone.
 */
export const LOCALES = ['it', 'en'] as const

/**
 * Derived from `LOCALES` rather than written out again, so adding a language
 * to the array is the only edit: every dictionary, every `LocalizedText` and
 * every `/$locale` route then fails to typecheck until it is translated.
 */
export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'it'

/** Name of the cookie that remembers a reader's chosen locale. */
export const LOCALE_COOKIE = 'opzs_lang'

// Widened to `string` on purpose: the guard is asked about values that are not
// locales yet – a URL segment, a cookie, an `Accept-Language` tag – and a
// `Set<Locale>` would reject those at the call rather than answer about them.
const LOCALE_SET = new Set<string>(LOCALES)

/**
 * Whether an unknown value is one of the published locales.
 *
 * Every untrusted string that decides a language goes through here, which is
 * what lets `/fr` be a 404 and a tampered cookie be ignored instead of
 * reaching a dictionary lookup that would return `undefined`.
 */
export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && LOCALE_SET.has(value)
}
