import type { Locale } from './locales'
import type {
  Dictionary,
  SeriesCopy,
  SeriesSlug,
  Translate,
  TranslationParams,
} from './types'

/**
 * Each locale's shared copy, as a chunk of its own: a page downloads the
 * language it is read in and not the other one (#930).
 *
 * A total record rather than a lookup with a fallback: it is keyed by
 * `Locale`, so a language added to `LOCALES` without a dictionary is a
 * typecheck failure rather than a page that quietly renders in Italian.
 */
const DICTIONARIES: Record<Locale, () => Promise<Dictionary>> = {
  it: async () => {
    const { itDictionary } = await import('./dictionaries/it')
    return itDictionary
  },
  en: async () => {
    const { enDictionary } = await import('./dictionaries/en')
    return enDictionary
  },
}

const loaded = new Map<Locale, Dictionary>()

/**
 * Fetches one locale's shared copy, once. The locale routes await it before
 * they render, and the router before it hydrates (`src/router.tsx`), so a
 * language switch paints in the new language with no flash of the old one.
 */
export async function loadDictionary(locale: Locale): Promise<void> {
  if (!loaded.has(locale)) {
    loaded.set(locale, await DICTIONARIES[locale]())
  }
}

const RELOADED = 'zs-copy-reloaded:'

/**
 * Marks `href` as reloaded for this tab. False when it already was, or when
 * storage is out of reach (private mode, blocked storage, the server): then
 * nothing reloads, so a reload can never loop.
 */
function firstReload(href: string): boolean {
  try {
    const fresh = sessionStorage.getItem(RELOADED + href) === null
    sessionStorage.setItem(RELOADED + href, '1')
    return fresh
  } catch {
    return false
  }
}

function forgetReload(href: string): void {
  try {
    sessionStorage.removeItem(RELOADED + href)
  } catch {
    // Nothing was stored.
  }
}

/**
 * `loadDictionary` for the page at `href` (path, search and hash), which the
 * reader is opening. When the copy cannot be fetched, the browser loads
 * `href` from the server, once per tab: the fresh document names the chunks
 * the current deploy serves, and its fresh module map lets Safari ask again
 * for a chunk whose import failed (#930). No retry here first: the reload is
 * the retry that works in every browser and after a deploy. When the reload
 * did not help either, the cause is logged and thrown.
 */
export async function loadDictionaryOrReload(
  locale: Locale,
  href: string,
): Promise<void> {
  try {
    await loadDictionary(locale)
  } catch (error) {
    if (!firstReload(href)) {
      // eslint-disable-next-line no-console -- a broken chunk after a deploy would otherwise leave every page static without a word.
      console.error(error)
      throw error
    }
    const { pathname, search, hash } = location
    if (href === pathname + search + hash) {
      location.reload()
    } else {
      // fallow-ignore-next-line security-sink -- `href` is the router's own location for the route being opened: a same-origin path, search and hash, never outside input
      location.assign(href)
    }
    // The page is on its way out: nothing renders in the meantime.
    return new Promise<never>(() => {
      // Never settles, on purpose.
    })
  }
  forgetReload(href)
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
