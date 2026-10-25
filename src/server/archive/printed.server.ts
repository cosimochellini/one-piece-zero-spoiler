import { placeWordsOf } from '~/data/series'
import type { LocalizedText } from '~/data/types'
import { FACTIONS } from '~/lib/view/factions'
import type { Faction, PlaceWordsView } from '~/lib/view/records'

import type { Reader } from './reader.server'

/**
 * A series files its places and groups in its own words (`Vocabulary` in
 * `~/data/types`); its pages print the place words the registry holds for it
 * (`placeWordsOf`), and the factions, which are One Piece's. These pass a
 * filed word on where a page prints it, and fail on a word the series' pages
 * cannot print: a series filed in other words needs them listed first, and a
 * page that printed nothing in its place would hide that.
 */

/** A word the pages cannot print, named with what it was meant to be. */
function unprintable(kind: string, word: string, series: string): Error {
  return new Error(`The pages of ${series} print no ${kind} called '${word}'`)
}

/** A place's region, one the series' pages print: a sea in One Piece. */
export function printedRegion(region: string, series: string): string {
  if (!Object.hasOwn(placeWordsOf(series).regions, region)) {
    throw unprintable('region', region, series)
  }
  return region
}

/** A place's form, one the series' pages print. */
export function printedForm(form: string, series: string): string {
  if (!Object.hasOwn(placeWordsOf(series).forms, form)) {
    throw unprintable('place form', form, series)
  }
  return form
}

/** The labels of these words, in the reader's locale, each once. */
function labelled(
  labels: Partial<Record<string, LocalizedText>>,
  words: string[],
  r: Reader,
): Partial<Record<string, string>> {
  return Object.fromEntries(
    words.flatMap((word) => {
      const label = Object.hasOwn(labels, word) ? labels[word] : undefined
      return label === undefined ? [] : [[word, label[r.locale]]]
    }),
  )
}

/**
 * The labels of the words these places use, for a series that labels its
 * words itself: only those, so a page never names a region or a form the
 * reader has not reached. `undefined` for a series the dictionaries label
 * (One Piece), whose pages send none.
 */
export function wordsOf(
  places: { form: string; sea: string }[],
  r: Reader,
): PlaceWordsView | undefined {
  const words = placeWordsOf(r.archive.series.slug)
  if (words.dictionary) {
    return undefined
  }

  return {
    region: words.region[r.locale],
    allRegions: words.allRegions[r.locale],
    regions: labelled(
      words.regions,
      places.map(({ sea }) => sea),
      r,
    ),
    forms: labelled(
      words.forms,
      places.map(({ form }) => form),
      r,
    ),
  }
}

/** Whether a group is one of the factions the pages print. */
function isFaction(group: string): group is Faction {
  return FACTIONS.has(group)
}

/** An affiliation's group as the pages print it: a faction. */
export function printedFaction(group: string): Faction {
  if (!isFaction(group)) {
    throw new Error(`The pages print no faction called '${group}'`)
  }
  return group
}
