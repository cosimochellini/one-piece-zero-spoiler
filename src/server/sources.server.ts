import type { Locale } from '~/i18n/locales'
import type {
  CommonKey,
  SeriesSlug,
  SharedKey,
  TranslationKey,
} from '~/i18n/types'
import type { Series } from '~/lib/progress/series'
import type { SeriesLegal, SeriesSources } from '~/lib/view/credits'
import { copyOf, translatorOf } from '~/server/copy.server'

const BY_SA_3: [string, string] = [
  'CC BY-SA 3.0 Unported',
  'https://creativecommons.org/licenses/by-sa/3.0/',
]
const BY_SA_4: [string, string] = [
  'CC BY-SA 4.0',
  'https://creativecommons.org/licenses/by-sa/4.0/',
]

/** A source link every series may label: a common key or a shared one. */
type Link = [CommonKey | SharedKey, string]

const wikiEn = (url: string): Link => ['credits.wikiEn', url]
const FANDOM_TERMS: Link = [
  'credits.fandomTerms',
  'https://www.fandom.com/licensing',
]
const WIKIPEDIA_IT: Link = ['credits.wikiIt', 'https://it.wikipedia.org/']
const WIKIPEDIA_TERMS: Link = [
  'credits.wikipediaTerms',
  'https://foundation.wikimedia.org/wiki/Policy:Terms_of_Use',
]

/**
 * Where each series' rights line is published, the license of the text of
 * each of its two wikis, and its general sources, labelled by its own copy.
 * Server-only: the legal page is sent the sources of the open series, so a
 * series not open yet names no source in the client.
 */
const SOURCES: {
  [S in SeriesSlug]: Omit<SeriesSources, 'links'> & {
    links: [TranslationKey<S>, string][]
  }
} = {
  'one-piece': {
    rights: 'https://www.toei-animation.com/copyrights/',
    licenses: { 'wiki-en': BY_SA_3, 'wiki-it': BY_SA_3 },
    links: [
      wikiEn('https://onepiece.fandom.com/'),
      ['credits.wikiIt', 'https://onepiece.fandom.com/it/'],
      FANDOM_TERMS,
      ['credits.fandomTermsIt', 'https://www.fandom.com/it/licensing-it'],
      ['credits.fillerList', 'https://www.animefillerlist.com/shows/one-piece'],
    ],
  },
  'hunter-x-hunter': {
    rights: 'https://www.viz.com/copyrights',
    licenses: { 'wiki-en': BY_SA_3, 'wiki-it': BY_SA_4 },
    links: [
      wikiEn('https://hunterxhunter.fandom.com/'),
      WIKIPEDIA_IT,
      FANDOM_TERMS,
      WIKIPEDIA_TERMS,
    ],
  },
  // A Wiki of Ice and Fire for the books, the Game of Thrones Wiki on Fandom
  // for the show, Italian Wikipedia for the dub's names (owner, 2026-10-26).
  'game-of-thrones': {
    rights: 'https://www.hbo.com/terms-and-conditions',
    licenses: { 'wiki-en': BY_SA_3, 'wiki-it': BY_SA_4 },
    links: [
      wikiEn('https://awoiaf.westeros.org/'),
      ['credits.wikiShow', 'https://gameofthrones.fandom.com/'],
      WIKIPEDIA_IT,
      FANDOM_TERMS,
      WIKIPEDIA_TERMS,
    ],
  },
}

/** An open series' sources. */
function sourcesOf(series: Series, locale: Locale): SeriesSources {
  const bySlug: Partial<
    Record<
      string,
      Omit<SeriesSources, 'links'> & {
        links: [TranslationKey<SeriesSlug>, string][]
      }
    >
  > = SOURCES
  const found = bySlug[series.slug]
  if (found === undefined) {
    throw new Error(`No sources for the series ${series.slug}`)
  }
  // Labelled here, in the series' own words, so the client is sent words
  // rather than keys of any series' copy.
  const t = translatorOf(series, locale)
  return {
    ...found,
    links: found.links.map(([key, url]): [string, string] => [t(key), url]),
  }
}

/** The lines of a series' copy the legal page prints. */
const LEGAL_LINE = /^(?:credits|legal)\./u

/**
 * What the legal page is sent of an open series: the lines of its copy it
 * prints, not the whole copy, and its sources.
 */
export function legalOf(series: Series, locale: Locale): SeriesLegal {
  const { words, ...copy } = copyOf(series, locale)
  return {
    copy: {
      ...copy,
      words: Object.fromEntries(
        Object.entries(words).filter(([key]) => LEGAL_LINE.test(key)),
      ),
    },
    sources: sourcesOf(series, locale),
  }
}
