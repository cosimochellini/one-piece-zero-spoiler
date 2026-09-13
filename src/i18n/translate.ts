import { enDictionary } from './dictionaries/en'
import { itDictionary } from './dictionaries/it'
import type { Locale } from './locales'
import type { Dictionary, TranslationKey, TranslationParams } from './types'

const DICTIONARIES: Readonly<Record<Locale, Dictionary>> = {
  it: itDictionary,
  en: enDictionary,
}

/**
 * The strings for one locale.
 *
 * A total record rather than a lookup with a fallback: `Dictionary` is keyed
 * by `Locale`, so a language added to `LOCALES` without a dictionary is a
 * typecheck failure rather than a page that quietly renders in Italian.
 */
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
  if (params === undefined) {
    return template
  }

  return template.replaceAll(/\{(?<name>\w+)\}/gu, (match, name: string) => {
    const value = params[name]
    return value === undefined ? match : String(value)
  })
}

/**
 * Looks one key up and fills its placeholders.
 *
 * Takes the dictionary rather than the locale so the server can translate
 * outside React – a document title is built in `head`, where no context is
 * mounted – while components reach it through `useT`, which binds the
 * dictionary once.
 */
export function translate(
  dictionary: Dictionary,
  key: TranslationKey,
  params?: TranslationParams,
): string {
  return format(dictionary[key], params)
}
