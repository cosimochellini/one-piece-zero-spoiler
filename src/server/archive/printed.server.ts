import { isForm, isSea } from '~/lib/search/placeParams'
import { FACTIONS } from '~/lib/view/factions'
import type { Faction, PlaceForm, Sea } from '~/lib/view/records'

/**
 * A series files its places and groups in its own words (`Vocabulary` in
 * `~/data/types`); the pages print the words their views and dictionaries
 * know, which are One Piece's today. These narrow a filed word to a printed
 * one where a page prints it, and fail on a word the pages cannot print: a
 * series filed in other words needs its pages built first, and a page that
 * printed nothing in its place would hide that.
 */

/** A word the pages cannot print, named with what it was meant to be. */
function unprintable(kind: string, word: string): Error {
  return new Error(`The pages print no ${kind} called '${word}'`)
}

/** A place's region as the pages print it: a sea. */
export function printedSea(region: string): Sea {
  if (!isSea(region)) {
    throw unprintable('sea', region)
  }
  return region
}

/** A place's form as the pages print it. */
export function printedForm(form: string): PlaceForm {
  if (!isForm(form)) {
    throw unprintable('place form', form)
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
    throw unprintable('faction', group)
  }
  return group
}
