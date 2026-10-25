import type { Locale } from '~/i18n/locales'
import type { SeriesSlug, TranslationKey } from '~/i18n/types'
import type { Series } from '~/lib/progress/series'
import type { SeriesLegal, SeriesSources } from '~/lib/view/credits'
import { copyOf } from '~/server/copy.server'

const BY_SA_3: [string, string] = [
  'CC BY-SA 3.0 Unported',
  'https://creativecommons.org/licenses/by-sa/3.0/',
]
const FANDOM_TERMS = 'https://www.fandom.com/licensing'

/**
 * Where each series' rights line is published, the license of the text of
 * each of its two wikis, and its general sources, labelled by its own copy.
 * Server-only: the legal page is sent the sources of the open series, so a
 * series not open yet names no source in the client.
 */
const SOURCES: {
  [S in SeriesSlug]: SeriesSources & { links: [TranslationKey<S>, string][] }
} = {
  'one-piece': {
    rights: 'https://www.toei-animation.com/copyrights/',
    licenses: { 'wiki-en': BY_SA_3, 'wiki-it': BY_SA_3 },
    links: [
      ['credits.wikiEn', 'https://onepiece.fandom.com/'],
      ['credits.wikiIt', 'https://onepiece.fandom.com/it/'],
      ['credits.fandomTerms', FANDOM_TERMS],
      ['credits.fandomTermsIt', 'https://www.fandom.com/it/licensing-it'],
      ['credits.fillerList', 'https://www.animefillerlist.com/shows/one-piece'],
    ],
  },
  'hunter-x-hunter': {
    rights: 'https://www.viz.com/copyrights',
    licenses: {
      'wiki-en': BY_SA_3,
      'wiki-it': [
        'CC BY-SA 4.0',
        'https://creativecommons.org/licenses/by-sa/4.0/',
      ],
    },
    links: [
      ['credits.wikiEn', 'https://hunterxhunter.fandom.com/'],
      ['credits.wikiIt', 'https://it.wikipedia.org/'],
      ['credits.fandomTerms', FANDOM_TERMS],
      [
        'credits.wikipediaTerms',
        'https://foundation.wikimedia.org/wiki/Policy:Terms_of_Use',
      ],
    ],
  },
}

/** An open series' sources. */
function sourcesOf(series: Series): SeriesSources {
  const bySlug: Partial<Record<string, SeriesSources>> = SOURCES
  const found = bySlug[series.slug]
  if (found === undefined) {
    throw new Error(`No sources for the series ${series.slug}`)
  }
  return found
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
    sources: sourcesOf(series),
  }
}
