import { type BookmarkSeries, ONE_PIECE_BOOKMARK } from '~/lib/progress/series'
import type * as placeWords from '~/lib/view/placeWords'
import type { PlaceWords } from '~/lib/view/placeWords'

/**
 * A series filed in place words of its own, none of them One Piece's, and
 * labelled in its own words rather than dictionary keys, as a series whose
 * copy has none yet would be. A test registers it by mocking
 * `~/lib/view/placeWords` with `withOtherSeries`.
 */
export const OTHER_SLUG = 'other-series'

export const OTHER_BOOKMARK: BookmarkSeries = {
  ...ONE_PIECE_BOOKMARK,
  slug: OTHER_SLUG,
  cookie: 'zs_other-series',
  trialCookie: 'zs_other-series_try',
}

const OTHER_PLACE_WORDS: PlaceWords = {
  chart: false,
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

/** The place words module, with the other series registered beside the real ones. */
export function withOtherSeries(real: typeof placeWords): typeof placeWords {
  return {
    ...real,
    placeWordsOf: (slug) =>
      slug === OTHER_SLUG ? OTHER_PLACE_WORDS : real.placeWordsOf(slug),
  }
}
