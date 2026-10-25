import type { enDictionary } from './dictionaries/en'
import type { hunterXHunterEn } from './dictionaries/hunter-x-hunter/en'
import type { onePieceEn } from './dictionaries/one-piece/en'

/** A key of the copy every series shares, word for word. */
export type SharedKey = keyof typeof enDictionary

/**
 * The keys every series words for itself: its description, its demo, its
 * crew, its sources and its rights holders. Each series' copy must define all
 * of them, so a page that prints one prints the words of its own series.
 */
export type CommonKey =
  | 'characters.featuredLede'
  | 'credits.coverage'
  | 'credits.otherTerms'
  | 'credits.source.wiki-en'
  | 'credits.source.wiki-it'
  | 'credits.wikiEn'
  | 'credits.wikiIt'
  | 'credits.wikiTerms'
  | 'faq.bookmarkA'
  | 'legal.credits'
  | 'onboarding.lede'
  | 'onboarding.places'
  | 'onboarding.tailTitle'
  | 'places.count'
  | 'places.pageDescription'
  | 'site.description'

/**
 * Each series' own copy, by slug. English is the source of its keys; the
 * Italian copy is typed against it. A series reads the shared keys and its
 * own, and no other series' (`TranslationKey`).
 */
export interface SeriesCopies {
  'hunter-x-hunter': typeof hunterXHunterEn
  'one-piece': typeof onePieceEn
}

/** A series that has copy of its own. */
export type SeriesSlug = keyof SeriesCopies

/**
 * The keys a page may translate. With no series, the shared keys alone, the
 * only ones a page with no series has; under series `S`, the common keys and
 * its own as well, so a key of another series fails `typecheck`.
 */
export type TranslationKey<S extends SeriesSlug = never> =
  | SharedKey
  | { [K in SeriesSlug]: CommonKey | Extract<keyof SeriesCopies[K], string> }[S]

/**
 * Translate on a page of a series: the shared keys, the common ones every
 * series' copy defines, and the own keys of series `S`, if one is named.
 */
export type SeriesTranslate<S extends SeriesSlug = never> = (
  key: CommonKey | TranslationKey<S>,
  params?: TranslationParams,
) => string

/**
 * The shared copy, complete. Annotating a dictionary with this type is what
 * makes TypeScript report a missing key, and — through the excess property
 * check on an object literal — a key that no longer exists.
 */
export type Dictionary = Record<SharedKey, string>

/** One series' copy in another locale, typed against its English copy. */
export type SeriesWords<S extends SeriesSlug> = Record<
  keyof SeriesCopies[S],
  string
>

/**
 * What a series' English copy must be: every common key, and keys of its
 * own, none of them a shared key, so a series cannot change what the shared
 * pages say.
 */
export type OwnCopy = Partial<Record<SharedKey, never>>
  & Record<CommonKey, string>
  & Record<string, string>

/**
 * A series' copy in one locale, as the server sends it with the series'
 * pages: its slug, its name (which fills `{series}`) and its words.
 */
export interface SeriesCopy<S extends SeriesSlug = SeriesSlug> {
  name: string
  slug: S
  words: Record<string, string>
}

/** Values a `{placeholder}` may be filled with. */
export type TranslationParams = Record<string, number | string>

/** Translates a key, filling any `{placeholder}` from `params`. */
export type Translate<S extends SeriesSlug = never> = (
  key: TranslationKey<S>,
  params?: TranslationParams,
) => string
