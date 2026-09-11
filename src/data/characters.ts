import type { Locale } from '~/i18n/locales'

import { entities } from './entities'
import type { Entity, LocalizedText } from './types'

/**
 * The character layer of the archive: which records are characters, which
 * twenty the characters page shows, what each one does, and how a name is
 * searched.
 *
 * Kept beside `entities.ts` rather than inside it because none of this is a
 * property of a record. The featured list is an editorial ranking, the roles
 * are a dossier written to the same "safe at the threshold" rule as the
 * summaries, and search is a page concern that happens to need the data.
 */

/**
 * The twenty characters the signal book shows, most important first. The
 * page itself draws them in route order; this order only decides who is in.
 * Every character keeps a page of its own whether or not it is listed here.
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
] as const

/**
 * What each character does, as a viewer at the threshold episode would put
 * it. Same rule as the summaries: a role learned later than the threshold is
 * a spoiler, so Franky is a ship dismantler here and not what he turns out
 * to be, and Mihawk is a swordsman rather than the title he also holds.
 */
export const CHARACTER_ROLES: Readonly<Record<string, LocalizedText>> = {
  'monkey-d-luffy': { it: 'Capitano', en: 'Captain' },
  'roronoa-zoro': {
    it: 'Spadaccino, cacciatore di pirati',
    en: 'Swordsman, pirate hunter',
  },
  shanks: { it: 'Capitano pirata', en: 'Pirate captain' },
  buggy: {
    it: 'Capitano dei Pirati di Bagy',
    en: 'Captain of the Buggy Pirates',
  },
  nami: { it: 'Navigatrice e ladra', en: 'Navigator and thief' },
  usopp: { it: 'Tiratore', en: 'Marksman' },
  sanji: { it: 'Cuoco', en: 'Cook' },
  'dracule-mihawk': {
    it: 'Lo spadaccino più forte del mondo',
    en: 'The strongest swordsman in the world',
  },
  smoker: { it: 'Capitano della Marina', en: 'Marine captain' },
  'nefertari-vivi': {
    it: 'Principessa di Alabasta',
    en: 'Princess of Alabasta',
  },
  'tony-tony-chopper': { it: 'Medico', en: 'Doctor' },
  crocodile: {
    it: 'Membro della Flotta dei Sette',
    en: 'One of the Seven Warlords',
  },
  'portgas-d-ace': { it: 'Comandante di divisione', en: 'Division commander' },
  'nico-robin': { it: 'Archeologa', en: 'Archaeologist' },
  'edward-newgate': {
    it: 'Capitano dei Pirati di Barbabianca',
    en: 'Captain of the Whitebeard Pirates',
  },
  'donquixote-doflamingo': {
    it: 'Membro della Flotta dei Sette',
    en: 'One of the Seven Warlords',
  },
  franky: { it: 'Smantellatore di navi', en: 'Ship dismantler' },
  brook: { it: 'Musicista', en: 'Musician' },
  perona: { it: 'Principessa fantasma', en: 'Ghost princess' },
  'trafalgar-law': { it: 'Capitano e chirurgo', en: 'Captain and surgeon' },
  'eustass-kid': {
    it: 'Capitano dei Pirati di Kid',
    en: 'Captain of the Kid Pirates',
  },
  'boa-hancock': {
    it: 'Imperatrice di Amazon Lily',
    en: 'Empress of Amazon Lily',
  },
  jinbe: {
    it: 'Uomo-pesce della Flotta dei Sette',
    en: 'Fish-man of the Seven Warlords',
  },
  bartolomeo: { it: 'Capitano pirata', en: 'Pirate captain' },
  yamato: { it: 'Figlio di Kaido', en: 'Kaido’s child' },
}

/** The whole archive in the order the anime reaches it. */
export const route: readonly Entity[] = [...entities].sort(
  (a, b) => a.revealedAtEpisode - b.revealedAtEpisode,
)

/** Every character record, in route order. */
export const characters: readonly Entity[] = route.filter(
  (entity) => entity.kind === 'character',
)

const FEATURED = new Set<string>(FEATURED_CHARACTER_IDS)

/** The twenty listed characters, in route order. */
export const featuredCharacters: readonly Entity[] = characters.filter(
  (entity) => FEATURED.has(entity.id),
)

/**
 * Looks a character up by id. A record that exists but is not a character
 * is `undefined` here too: `/characters/alabasta` is not a page.
 */
export function getCharacter(id: string): Entity | undefined {
  const entity = characters.find((candidate) => candidate.id === id)
  return entity
}

export function roleOf(entity: Entity): LocalizedText | undefined {
  return CHARACTER_ROLES[entity.id]
}

/**
 * Where a record sits on the route, and what lies either side of it.
 * `index` is zero-based; the page prints it plus one.
 */
export type RoutePosition = {
  readonly index: number
  readonly total: number
  readonly previous: Entity | undefined
  readonly next: Entity | undefined
}

export function routePositionOf(entity: Entity): RoutePosition {
  const index = route.findIndex((candidate) => candidate.id === entity.id)

  return {
    index,
    total: route.length,
    previous: index > 0 ? route[index - 1] : undefined,
    next: route[index + 1],
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
 */
export function matchName(
  entity: Entity,
  query: string,
  locale: Locale,
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

  const elsewhere = Object.values(entity.name).some((name) =>
    foldName(name).includes(needle),
  )
  return { matches: elsewhere, highlight: null }
}
