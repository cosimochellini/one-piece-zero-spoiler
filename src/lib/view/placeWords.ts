import type { Locale } from '~/i18n/locales'
import type { Translate, TranslationKey } from '~/i18n/types'

import type { PlaceForm, Sea } from './records'

/**
 * What a word is called on a page: a dictionary key, or its own words in
 * each locale, for a series whose copy has no key for it.
 */
export type WordLabel = Record<Locale, string> | TranslationKey

/**
 * The words a series files its places in, as its pages print them: each
 * region and form its place dossiers name (`Vocabulary` in `~/data/types`),
 * with its label, and what its places page calls a region. The server prints
 * no other word (`~/server/archive/printed.server.ts`), and the pages label
 * each one without knowing the series.
 *
 * Kept out of the series' description (`Series`), which every page and the
 * hub are sent: a region's id can be a record's too (`east-blue`), and no
 * payload outside a series' pages may name one.
 */
export interface PlaceWords {
  /** The region picker's first option: every region. */
  allRegions: WordLabel
  /**
   * Whether the places page draws One Piece's world map above its index.
   * Without it the index, grouped by region, is the page.
   */
  chart: boolean
  forms: Partial<Record<string, WordLabel>>
  /** What a region is called: the picker's name, and a place's fact. */
  region: WordLabel
  regions: Partial<Record<string, WordLabel>>
}

/**
 * One Piece's place words: its seas and its forms, each under the dictionary
 * key it always had. Keyed by every member of the unions, so a sea or a form
 * added to them does not compile until it is listed and labelled here too.
 */
export const ONE_PIECE_PLACE_WORDS: PlaceWords = {
  chart: true,
  region: 'places.sea',
  allRegions: 'places.allSeas',
  regions: {
    'east-blue': 'sea.east-blue',
    'grand-line': 'sea.grand-line',
    'calm-belt': 'sea.calm-belt',
    'red-line': 'sea.red-line',
    'new-world': 'sea.new-world',
  } satisfies Record<Sea, TranslationKey>,
  forms: {
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
  } satisfies Record<PlaceForm, TranslationKey>,
}

/**
 * Hunter x Hunter's place words: none yet, as it files no place. #760 lists
 * the Hunter Exam's regions and forms here as it files them. No world map:
 * the index is the page.
 */
const HUNTER_X_HUNTER_PLACE_WORDS: PlaceWords = {
  chart: false,
  region: { en: 'Region', it: 'Regione' },
  allRegions: { en: 'All regions', it: 'Tutte le regioni' },
  regions: {},
  forms: {},
}

/** Each series' place words, by its slug. A data test holds every series to one. */
const PLACE_WORDS: Partial<Record<string, PlaceWords>> = {
  'one-piece': ONE_PIECE_PLACE_WORDS,
  'hunter-x-hunter': HUNTER_X_HUNTER_PLACE_WORDS,
}

/** A series' place words, by its slug. */
export function placeWordsOf(slug: string): PlaceWords {
  const words = PLACE_WORDS[slug]
  if (words === undefined) {
    throw new Error(`No place words for ${slug}`)
  }
  return words
}

/** A label in the page's locale. */
export function labelOf(
  label: WordLabel,
  t: Translate,
  locale: Locale,
): string {
  return typeof label === 'string' ? t(label) : label[locale]
}
