import type * as EnModule from './dictionaries/en'
import { url as enChunk } from './dictionaries/en?chunk-url'
import type * as ItModule from './dictionaries/it'
import { url as itChunk } from './dictionaries/it?chunk-url'
import type { Locale } from './locales'
import type {
  Dictionary,
  SeriesCopy,
  SeriesSlug,
  Translate,
  TranslationParams,
} from './types'

/**
 * A chunk asked for again, under a query of its own: Safari, every iOS
 * browser and Chromium before 156 remember a failed `import()` by its URL and
 * fail the same URL again without asking the network. The chunk only exports
 * a constant, so a second copy of it is harmless.
 */
async function importAgain<T>(url: string, attempt: number): Promise<T> {
  const specifier = `${url}?retry=${String(attempt)}`
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions -- the specifier is one of our own two dictionary chunks (`?chunk-url`), and its type is the module the first attempt imported by name.
  return (await import(/* @vite-ignore */ specifier)) as T
}

/**
 * Each locale's shared copy, as a chunk of its own: a page downloads the
 * language it is read in and not the other one (#930). The first attempt is
 * the plain import; a retry asks for the same chunk at a new URL.
 *
 * A total record rather than a lookup with a fallback: it is keyed by
 * `Locale`, so a language added to `LOCALES` without a dictionary is a
 * typecheck failure rather than a page that quietly renders in Italian.
 */
const DICTIONARIES: Record<Locale, (attempt: number) => Promise<Dictionary>> = {
  it: async (attempt) => {
    const { itDictionary } =
      attempt === 0 ?
        await import('./dictionaries/it')
      : await importAgain<typeof ItModule>(itChunk, attempt)
    return itDictionary
  },
  en: async (attempt) => {
    const { enDictionary } =
      attempt === 0 ?
        await import('./dictionaries/en')
      : await importAgain<typeof EnModule>(enChunk, attempt)
    return enDictionary
  },
}

const loaded = new Map<Locale, Dictionary>()

/**
 * How long to wait before each retry of a chunk that failed to arrive: a
 * dropped request or a moment offline often comes through on a later try,
 * and the reader waits 1.3 s at most before the page gives up.
 */
const FIRST_RETRY_MS = 300
const SECOND_RETRY_MS = 1000
const RETRY_DELAYS_MS = [FIRST_RETRY_MS, SECOND_RETRY_MS]

async function importDictionary(
  locale: Locale,
  attempt = 0,
): Promise<Dictionary> {
  try {
    return await DICTIONARIES[locale](attempt)
  } catch (error) {
    const delay = RETRY_DELAYS_MS[attempt]
    if (delay === undefined) {
      throw error
    }
    await new Promise((resolve) => {
      setTimeout(resolve, delay)
    })
    return importDictionary(locale, attempt + 1)
  }
}

/**
 * Fetches one locale's shared copy, once. The locale routes await it before
 * they render, and the router before it hydrates (`src/router.tsx`), so a
 * language switch paints in the new language with no flash of the old one.
 * Rejects when the chunk still fails after its retries.
 */
export async function loadDictionary(locale: Locale): Promise<void> {
  if (!loaded.has(locale)) {
    loaded.set(locale, await importDictionary(locale))
  }
}

/**
 * The shared strings for one locale, loaded by `loadDictionary`. Throws when
 * they are not: a page rendered before its copy arrived is a routing bug.
 */
export function getDictionary(locale: Locale): Dictionary {
  const dictionary = loaded.get(locale)
  if (dictionary === undefined) {
    throw new Error(`The ${locale} copy is not loaded yet`)
  }
  return dictionary
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
  copy?: SeriesCopy<S>,
): Translate<S> {
  return translatorOver(getDictionary(locale), copy)
}

/**
 * `translatorFor` over a shared copy already at hand: the server's, which
 * holds every locale and loads nothing (`src/server/copy.server.ts`).
 */
export function translatorOver<S extends SeriesSlug = never>(
  shared: Dictionary,
  copy?: SeriesCopy<S>,
): Translate<S> {
  if (copy === undefined) {
    return (key, params) => translate(shared, key, params)
  }
  const dictionary = { ...shared, ...copy.words }
  return (key, params) =>
    translate(dictionary, key, { series: copy.name, ...params })
}
