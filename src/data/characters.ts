import type { Locale } from '~/i18n/locales'
import type { Bookmark, BookmarkMode } from '~/lib/progress/episode'
import { episodeOf } from '~/lib/progress/spoiler'

import { entities, sagas } from './entities'
import { orderByMode } from './order'
import type { CharacterDossier, Entity, LocalizedText } from './types'

/**
 * The character layer of the archive: which records are characters, which
 * ones the signal book puts in evidence and draws on the chart, what the
 * archive knows about each, how the book is shelved, and how a name is
 * searched.
 *
 * Kept beside `entities.ts` rather than inside it because none of this is a
 * property of a record. The featured list is an editorial ranking, the
 * dossiers are filed with their sagas and merged here, and search is a page
 * concern that happens to need the data.
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
 * Every character's dossier, merged from the sagas. Each saga files the
 * dossiers of the characters it introduces, beside their records, so the two
 * are written and reviewed together; the data tests hold that every
 * character has exactly one.
 */
export const CHARACTER_DOSSIERS: Readonly<Record<string, CharacterDossier>> =
  Object.fromEntries(sagas.flatMap((saga) => Object.entries(saga.dossiers)))

/** The whole archive in the order the anime reaches it. */
const route: readonly Entity[] = orderByMode(entities, 'episode')

/** Every character record, in route order. */
export const characters: readonly Entity[] = route.filter(
  (entity) => entity.kind === 'character',
)

const FEATURED = new Set<string>(FEATURED_CHARACTER_IDS)

/** The featured characters, in route order. */
export const featuredCharacters: readonly Entity[] = characters.filter(
  (entity) => FEATURED.has(entity.id),
)

/**
 * The route as the landing chart draws it: every arc, place and ship, and
 * the featured characters. The other characters are in the signal book but
 * not on the chart, which would otherwise run to several hundred waypoints.
 */
export const chart: readonly Entity[] = route.filter(
  (entity) => entity.kind !== 'character' || FEATURED.has(entity.id),
)

const ON_CHART = new Set(chart.map((entity) => entity.id))

/**
 * The chart with this record on it, in the order of the threshold the reader
 * counts in: the chart itself when the record is already drawn, otherwise a
 * copy with the record set in at its place. A character's page shows its
 * route position against this, so an unlisted character still has a place on
 * the chart when the reader is looking at it.
 */
export function chartWith(
  entity: Entity,
  mode: BookmarkMode = 'episode',
): readonly Entity[] {
  const drawn = ON_CHART.has(entity.id)
  if (drawn && mode === 'episode') return chart

  return orderByMode(drawn ? chart : [...chart, entity], mode)
}

const CHARACTER_BY_ID = new Map(characters.map((entity) => [entity.id, entity]))

/**
 * Looks a character up by id. A record that exists but is not a character
 * is `undefined` here too: `/characters/alabasta` is not a page.
 */
export function getCharacter(id: string): Entity | undefined {
  return CHARACTER_BY_ID.get(id)
}

export function dossierOf(entity: Entity): CharacterDossier | undefined {
  return CHARACTER_DOSSIERS[entity.id]
}

export function roleOf(entity: Entity): LocalizedText | undefined {
  return dossierOf(entity)?.role
}

/**
 * One shelf of the signal book: an arc and the characters first met along
 * it. A character is shelved under the arc with the greatest threshold no
 * later than its own, so a shelf's heading is always open whenever any
 * character on it is — the heading never has to be veiled above an open
 * name.
 */
export type BookSection = {
  readonly arc: Entity
  readonly characters: readonly Entity[]
}

const arcs = route.filter((entity) => entity.kind === 'arc')

function shelfOf(character: Entity): Entity | undefined {
  let shelf: Entity | undefined
  for (const arc of arcs) {
    if (arc.revealedAtEpisode > character.revealedAtEpisode) break
    shelf = arc
  }
  return shelf
}

/** The signal book shelved by arc, in route order, empty shelves left out. */
export const bookSections: readonly BookSection[] = arcs
  .map((arc) => ({
    arc,
    characters: characters.filter(
      (character) => shelfOf(character)?.id === arc.id,
    ),
  }))
  .filter((section) => section.characters.length > 0)

/**
 * Where a record sits on the chart, and what lies either side of it.
 * `index` is zero-based; the page prints it plus one.
 */
export type RoutePosition = {
  readonly index: number
  readonly total: number
  readonly previous: Entity | undefined
  readonly next: Entity | undefined
}

export function routePositionOf(
  entity: Entity,
  drawn: readonly Entity[] = chartWith(entity),
): RoutePosition {
  const index = drawn.findIndex((candidate) => candidate.id === entity.id)

  return {
    index,
    total: drawn.length,
    previous: index > 0 ? drawn[index - 1] : undefined,
    next: drawn[index + 1],
  }
}

/**
 * The featured characters filed closest to this one, by threshold, this one
 * excluded. Ties go to whoever comes first on the route.
 */
export function nearbyCharacters(entity: Entity, count: number): Entity[] {
  return featuredCharacters
    .filter((candidate) => candidate.id !== entity.id)
    .map((candidate, order) => ({
      candidate,
      order,
      distance: Math.abs(
        candidate.revealedAtEpisode - entity.revealedAtEpisode,
      ),
    }))
    .sort((a, b) => a.distance - b.distance || a.order - b.order)
    .slice(0, count)
    .map(({ candidate }) => candidate)
}

/**
 * Lower-cased and stripped of diacritics, so "Rufy", "rufy" and "Rùfy" are
 * the same search. Returns the same length as its input whenever the input
 * has no combining marks, which is what lets a match be highlighted by index.
 */
export function foldName(value: string): string {
  return value.normalize('NFD').replace(/[̀-ͯ]/gu, '').toLowerCase()
}

export type NameMatch = {
  readonly matches: boolean
  /** The span of the displayed name to mark, when it can be found by index. */
  readonly highlight: readonly [number, number] | null
}

/**
 * Whether `query` matches a character's name, and where in the displayed
 * name to mark it.
 *
 * Both locales' names are searched, because an Italian reader who knows the
 * character as Luffy should still find Rufy, but the highlight is only
 * returned for the name that is actually shown, and only when folding did
 * not change its length, so the indices still point at the right letters.
 *
 * The epithets the reader has reached are searched too — "Barbabianca" finds
 * Edward Newgate — and only those: an epithet learned later than the
 * reader's episode would confirm a name the fog is meant to hide. Epithets
 * are dated in episodes, so a chapter bookmark searches names only.
 */
export function matchName(
  entity: Entity,
  query: string,
  locale: Locale,
  bookmark: Bookmark,
): NameMatch {
  const needle = foldName(query.trim())
  if (needle === '') return { matches: true, highlight: null }

  const shown = entity.name[locale]
  const folded = foldName(shown)
  const at = folded.indexOf(needle)

  if (at !== -1) {
    return {
      matches: true,
      highlight:
        folded.length === shown.length ? [at, at + needle.length] : null,
    }
  }

  const otherName = Object.values(entity.name).some((name) =>
    foldName(name).includes(needle),
  )
  if (otherName) return { matches: true, highlight: null }

  const progress = episodeOf(bookmark)
  const epithets = dossierOf(entity)?.epithet ?? []
  const known = epithets.some(
    (entry) =>
      progress !== null &&
      entry.episode <= progress &&
      Object.values(entry.value).some((epithet) =>
        foldName(epithet).includes(needle),
      ),
  )
  return { matches: known, highlight: null }
}
