import { enDictionary } from './dictionaries/en'
import { itDictionary } from './dictionaries/it'
import type { Locale } from './locales'
import type {
  Dictionary,
  SeriesCopy,
  SeriesSlug,
  Translate,
  TranslationParams,
} from './types'

const DICTIONARIES: Record<Locale, Dictionary> = {
  it: itDictionary,
  en: enDictionary,
}

/**
 * The shared strings for one locale.
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
 * dictionary once. A key the dictionary lacks throws: it is a series' key
 * asked for under another series, or a series' key on a shared page.
 */
export function translate(
  dictionary: Record<string, string>,
  key: string,
  params?: TranslationParams,
): string {
  const template = dictionary[key]
  if (template === undefined) {
    throw new Error(`No copy for ${key} here`)
  }
  return format(template, params)
}

/**
 * Translate for one locale, and for one series when a page belongs to one:
 * the shared copy and that series' own, with `{series}` filled with its name.
 * Without a series, only the shared copy.
 */
export function translatorFor<S extends SeriesSlug = never>(
  locale: Locale,
  copy?: SeriesCopy,
): Translate<S> {
  if (copy === undefined) {
    const dictionary = getDictionary(locale)
    return (key, params) => translate(dictionary, key, params)
  }
  const dictionary = { ...getDictionary(locale), ...copy.words }
  return (key, params) =>
    translate(dictionary, key, { series: copy.name, ...params })
}
