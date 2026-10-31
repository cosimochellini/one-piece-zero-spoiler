import { castOf } from '~/data/shelves'

import { entities } from './entities'
import { CHARACTER_DOSSIERS, sagas } from './sagas'

/**
 * The character layer of the archive (`~/data/shelves`): which records are
 * characters, which ones the signal book puts in evidence and draws on the
 * chart, what the archive knows about each, and how the book is shelved.
 *
 * Kept beside `entities.ts` rather than inside it because none of this is a
 * property of a record. The featured list is an editorial ranking, and the
 * dossiers are filed with their sagas and merged in `./sagas`.
 */

/**
 * The characters the signal book puts in evidence and the landing chart
 * draws, most important first. The pages themselves draw them in route
 * order; this order only decides who is in. Every character keeps a page of
 * its own whether or not it is listed here.
 *
 * The first twenty are the crew and the figures the story turns on up to the
 * war; the sixteen after them are the Emperors, the admirals, the Warlords
 * and the family that shape everything from Sabaody onward.
 */
export const FEATURED_CHARACTER_IDS = [
  'monkey-d-luffy',
  'roronoa-zoro',
  'nami',
  'usopp',
  'sanji',
  'tony-tony-chopper',
  'nico-robin',
  'franky',
  'brook',
  'jinbe',
  'shanks',
  'portgas-d-ace',
  'edward-newgate',
  'dracule-mihawk',
  'trafalgar-law',
  'crocodile',
  'donquixote-doflamingo',
  'nefertari-vivi',
  'smoker',
  'buggy',
  'sabo',
  'koby',
  'silvers-rayleigh',
  'marshall-d-teach',
  'kaido',
  'charlotte-linlin',
  'sakazuki',
  'kuzan',
  'borsalino',
  'monkey-d-garp',
  'sengoku',
  'monkey-d-dragon',
  'bartholomew-kuma',
  'rob-lucci',
  'enel',
  'gecko-moria',
] as const

/**
 * Every character and arc in route order, the chart (every arc, place and
 * ship, and the featured characters), each character's dossier,
 * and the signal book shelved by arc. Every character keeps a page of its
 * own whether or not it is featured.
 */
export const {
  arcs,
  bookSections,
  characters,
  chart,
  dossierOf,
  featuredCharacters,
  getCharacter,
} = castOf({
  dossiers: CHARACTER_DOSSIERS,
  entities,
  featured: FEATURED_CHARACTER_IDS,
  sagas,
})
