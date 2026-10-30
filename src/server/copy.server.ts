import { enDictionary } from '~/i18n/dictionaries/en'
import { gameOfThronesEn } from '~/i18n/dictionaries/game-of-thrones/en'
import { gameOfThronesIt } from '~/i18n/dictionaries/game-of-thrones/it'
import { hunterXHunterEn } from '~/i18n/dictionaries/hunter-x-hunter/en'
import { hunterXHunterIt } from '~/i18n/dictionaries/hunter-x-hunter/it'
import { itDictionary } from '~/i18n/dictionaries/it'
import { onePieceEn } from '~/i18n/dictionaries/one-piece/en'
import { onePieceIt } from '~/i18n/dictionaries/one-piece/it'
import type { Locale } from '~/i18n/locales'
import { translatorOver } from '~/i18n/translate'
import type {
  Dictionary,
  SeriesCopy,
  SeriesSlug,
  SeriesWords,
  Translate,
} from '~/i18n/types'
import type { Series } from '~/lib/progress/series'

/**
 * Every series' own copy, by slug and locale. Server-only: a page of a series
 * is sent its copy with the series (`loadSeriesCopy`), so no client chunk
 * holds any series' words and a reader of one never downloads another's
 * (the archive gate looks for them). Keyed by slug, not read from the series
 * list, so nothing here can reach a series that is not open: the server
 * function checks the slug against the open series first.
 */
export const COPIES: { [S in SeriesSlug]: Record<Locale, SeriesWords<S>> } = {
  'one-piece': { en: onePieceEn, it: onePieceIt },
  'hunter-x-hunter': { en: hunterXHunterEn, it: hunterXHunterIt },
  'game-of-thrones': { en: gameOfThronesEn, it: gameOfThronesIt },
}

function isSeriesSlug(slug: string): slug is SeriesSlug {
  return Object.hasOwn(COPIES, slug)
}

/** A series' copy in one locale, with the name that fills `{series}`. */
export function copyOf(series: Series, locale: Locale): SeriesCopy {
  const { slug } = series
  if (!isSeriesSlug(slug)) {
    throw new Error(`No copy for the series ${slug}`)
  }
  return { slug, name: series.name[locale], words: COPIES[slug][locale] }
}

/**
 * The shared copy in every locale, for the server functions: one may be the
 * first request an instance answers, before any page has loaded a locale.
 */
const SHARED: Record<Locale, Dictionary> = {
  en: enDictionary,
  it: itDictionary,
}

const translators = new Map<string, Translate<SeriesSlug>>()

/**
 * Translate for a page of `series` on the server: the shared keys and its
 * own. Typed with every series' keys, because the engine serves the pages of
 * each series' features; a key the series lacks throws. Built once per series
 * and locale.
 */
export function translatorOf(
  series: Series,
  locale: Locale,
): Translate<SeriesSlug> {
  const key = `${series.slug}:${locale}`
  const cached = translators.get(key)
  if (cached !== undefined) {
    return cached
  }
  const t = translatorOver(SHARED[locale], copyOf(series, locale))
  translators.set(key, t)
  return t
}
