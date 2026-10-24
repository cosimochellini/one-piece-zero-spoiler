import { FACTIONS } from '~/lib/view/factions'
import { placeWordsOf } from '~/lib/view/placeWords'
import type { Faction } from '~/lib/view/records'

/**
 * A series files its places and groups in its own words (`Vocabulary` in
 * `~/data/types`); its pages print the place words it labels
 * (`placeWordsOf`), and the factions, which are One Piece's. These pass a
 * filed word on where a page prints it, and fail on a word the series' pages
 * cannot print: a series filed in other words needs them labelled first, and
 * a page that printed nothing in its place would hide that.
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
