import { useLocale } from '~/i18n/LocaleContext'
import { useSeriesParams } from '~/lib/progress/BookmarkContext'
import { labelOf, type PlaceWords, placeWordsOf } from '~/lib/view/placeWords'

/** The selected series' place words, as the page's locale prints them. */
export interface PlaceLabels {
  /** The region picker's first option: "All seas" in One Piece. */
  allRegions: string
  /** A form's name: "Island". */
  formOf: (form: string) => string
  /** What a region is called: "Sea" in One Piece. */
  region: string
  /** A region's name: "East Blue". */
  regionOf: (region: string) => string
}

/**
 * The labels of the selected series' place words (`placeWordsOf`), so a
 * places page prints each series' own words without knowing the series.
 */
export function usePlaceLabels(): PlaceLabels {
  const { t } = useLocale()
  const { locale, series } = useSeriesParams()
  const words = placeWordsOf(series)
  // The server sends no word the series does not label, so the bare word is
  // only ever a bug made visible.
  const wordOf = (labels: PlaceWords['forms'], word: string): string => {
    const label = labels[word]
    return label === undefined ? word : labelOf(label, t, locale)
  }

  return {
    allRegions: labelOf(words.allRegions, t, locale),
    formOf: (form) => wordOf(words.forms, form),
    region: labelOf(words.region, t, locale),
    regionOf: (region) => wordOf(words.regions, region),
  }
}
