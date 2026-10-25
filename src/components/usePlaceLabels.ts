import { useSeriesT } from '~/i18n/LocaleContext'
import type { TranslationKey } from '~/i18n/types'
import type { PlaceForm, PlaceWordsView, Sea } from '~/lib/view/records'

/** A page's place words, as its locale prints them. */
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

// One Piece's words, labelled by its copy (the seas) and the shared one (the
// forms), which its pages are sent. Keyed by every member of the unions, so a
// sea or a form added to them does not compile until it is labelled here too.
const SEAS: Record<Sea, TranslationKey<'one-piece'>> = {
  'east-blue': 'sea.east-blue',
  'grand-line': 'sea.grand-line',
  'calm-belt': 'sea.calm-belt',
  'red-line': 'sea.red-line',
  'new-world': 'sea.new-world',
}

const FORMS: Record<PlaceForm, TranslationKey<'one-piece'>> = {
  archipelago: 'form.archipelago',
  city: 'form.city',
  fortress: 'form.fortress',
  island: 'form.island',
  prison: 'form.prison',
  region: 'form.region',
  restaurant: 'form.restaurant',
  sea: 'form.sea',
  ship: 'form.ship',
  town: 'form.town',
  train: 'form.train',
  village: 'form.village',
}

/** A word's label from a table, or the bare word: only ever a bug shown. */
function lookUp<T>(
  table: Partial<Record<string, T>>,
  word: string,
  print: (label: T) => string,
): string {
  const label = Object.hasOwn(table, word) ? table[word] : undefined
  return label === undefined ? word : print(label)
}

/** A label the server sent, printed as it came. */
function own(label: string): string {
  return label
}

/**
 * The labels of a page's place words: the ones the server sent with it, for
 * a series that labels its words itself (`PlaceWordsView`), or One Piece's,
 * from the dictionaries, when it sent none.
 */
export function usePlaceLabels(words?: PlaceWordsView): PlaceLabels {
  const t = useSeriesT('one-piece')
  if (words !== undefined) {
    return {
      allRegions: words.allRegions,
      formOf: (form) => lookUp(words.forms, form, own),
      region: words.region,
      regionOf: (region) => lookUp(words.regions, region, own),
    }
  }

  return {
    allRegions: t('places.allSeas'),
    formOf: (form) => lookUp<TranslationKey<'one-piece'>>(FORMS, form, t),
    region: t('places.sea'),
    regionOf: (region) => lookUp<TranslationKey<'one-piece'>>(SEAS, region, t),
  }
}
