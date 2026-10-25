import type * as registry from '~/data/series'
import type { OwnPlaceWords } from '~/data/types'
import { translatorFor } from '~/i18n/translate'
import type { SeriesSlug } from '~/i18n/types'
import {
  type BookmarkSeries,
  HUNTER_X_HUNTER_SERIES,
  ONE_PIECE_BOOKMARK,
} from '~/lib/progress/series'
import type * as copies from '~/server/copy.server'

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

/**
 * The copy table, with the other series reading Hunter x Hunter's, a series
 * with no feature of its own, under its own slug and name.
 */
export function withOtherCopy(real: typeof copies): typeof copies {
  const copyOf: typeof real.copyOf = (series, locale) =>
    series.slug === OTHER_SLUG ?
      {
        ...real.copyOf(HUNTER_X_HUNTER_SERIES, locale),
        name: series.name[locale],
      }
    : real.copyOf(series, locale)

  return {
    ...real,
    copyOf,
    translatorOf: (series, locale) =>
      translatorFor<SeriesSlug>(locale, copyOf(series, locale)),
  }
}
