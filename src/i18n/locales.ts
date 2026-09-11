/**
 * The locales the site is published in.
 *
 * Italian is the default because the site is written first for an Italian
 * audience; English exists so the same entity data can be read by anyone.
 */
export const LOCALES = ['it', 'en'] as const

export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'it'

/** Name of the cookie that remembers a reader's chosen locale. */
export const LOCALE_COOKIE = 'opzs_lang'

export function isLocale(value: unknown): value is Locale {
  return (
    typeof value === 'string' && (LOCALES as readonly string[]).includes(value)
  )
}
