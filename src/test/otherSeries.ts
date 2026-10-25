import type * as registry from '~/data/series'
import type { OwnPlaceWords } from '~/data/types'
import { type BookmarkSeries, ONE_PIECE_BOOKMARK } from '~/lib/progress/series'

/**
 * A series filed in place words of its own, none of them One Piece's, each
 * labelled in its own words. A test registers it by mocking `~/data/series`
 * with `withOtherSeries`.
 */
export const OTHER_SLUG = 'other-series'

export const OTHER_BOOKMARK: BookmarkSeries = {
  ...ONE_PIECE_BOOKMARK,
  slug: OTHER_SLUG,
  cookie: 'zs_other-series',
  trialCookie: 'zs_other-series_try',
}

const OTHER_PLACE_WORDS: OwnPlaceWords = {
  dictionary: false,
  region: { en: 'Continent', it: 'Continente' },
  allRegions: { en: 'All continents', it: 'Tutti i continenti' },
  regions: {
    'yorbia': { en: 'Yorbia', it: 'Yorbia' },
    'dark-continent': { en: 'Dark Continent', it: 'Continente Oscuro' },
  },
  forms: {
    tower: { en: 'Tower', it: 'Torre' },
    swamp: { en: 'Swamp', it: 'Palude' },
  },
}

/** The registry, with the other series' place words beside the real ones. */
export function withOtherSeries(real: typeof registry): typeof registry {
  return {
    ...real,
    placeWordsOf: (slug) =>
      slug === OTHER_SLUG ? OTHER_PLACE_WORDS : real.placeWordsOf(slug),
  }
}
