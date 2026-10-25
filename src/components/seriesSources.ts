import type { SeriesSlug, TranslationKey } from '~/i18n/types'
import type { CreditSource } from '~/lib/view/credits'

const BY_SA_3: [string, string] = [
  'CC BY-SA 3.0 Unported',
  'https://creativecommons.org/licenses/by-sa/3.0/',
]
const FANDOM_TERMS = 'https://www.fandom.com/licensing'

/**
 * Where each series' rights line is published, the license of the text of
 * each of its two wikis, and its general sources, labelled by its own copy.
 * Addresses only: the words are the series', sent with the page.
 */
export const SERIES_SOURCES: {
  [S in SeriesSlug]: {
    /** Each wiki's license: its name and where it is published. */
    licenses: Record<
      Exclude<CreditSource['kind'], 'official'>,
      [string, string]
    >
    links: [TranslationKey<S>, string][]
    rights: string
  }
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
