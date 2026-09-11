import { enDictionary } from './dictionaries/en'
import { itDictionary } from './dictionaries/it'
import type { Locale } from './locales'
import type { Dictionary, TranslationKey, TranslationParams } from './types'

const DICTIONARIES: Readonly<Record<Locale, Dictionary>> = {
  it: itDictionary,
  en: enDictionary,
}

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale]
}

/**
 * Fills `{placeholder}` spans in a translated string.
 *
 * A placeholder with no matching param is left alone rather than replaced with
 * an empty string: a visible `{episode}` in the UI is a bug report, where a
 * silent gap is a bug nobody notices.
 */
function format(template: string, params?: TranslationParams): string {
  if (params === undefined) return template

  return template.replace(/\{(\w+)\}/gu, (match, name: string) => {
    const value = params[name]
    return value === undefined ? match : String(value)
  })
}

export function translate(
  dictionary: Dictionary,
  key: TranslationKey,
  params?: TranslationParams,
): string {
  return format(dictionary[key], params)
}
