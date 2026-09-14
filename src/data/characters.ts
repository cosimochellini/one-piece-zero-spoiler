import type { BookmarkMode } from '~/lib/progress/episode'
import type { EntityKind } from '~/lib/view/records'

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
 * The kinds the landing chart draws.
 *
 * Written as the kinds that are on it rather than as the kinds that are not,
 * so a kind filed later is off the chart until somebody puts it on. The
 * devil fruits are the first kind to arrive since this was written, and a
 * list of exceptions would have put all hundred and twenty of them on the
 * chart without anybody deciding to.
 */
const CHARTED_KINDS = new Set<EntityKind>(['arc', 'place', 'ship'])

/**
 * The route as the landing chart draws it: every arc, place and ship, and
 * the featured characters. The other characters are in the signal book but
 * not on the chart, which would otherwise run to several hundred waypoints.
 */
export const chart: readonly Entity[] = route.filter(
  (entity) => CHARTED_KINDS.has(entity.kind) || FEATURED.has(entity.id),
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
  if (drawn && mode === 'episode') {
    return chart
  }

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

/**
 * What the archive knows about a character beyond its name and sentence, or
 * `undefined` where nothing has been filed yet: every character has a page,
 * and only the ones the story turns on have a role, a bounty and a log entry.
 */
export function dossierOf(entity: Entity): CharacterDossier | undefined {
  return CHARACTER_DOSSIERS[entity.id]
}

/**
 * The line that sits under the name on a card. Read off the dossier rather
 * than stored on the record, because a role is an editorial sentence frozen
 * at the threshold and not a property of the archive entry.
 */
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
    if (arc.revealedAtEpisode > character.revealedAtEpisode) {
      break
    }
    shelf = arc
  }
  return shelf
}

/** The signal book shelved by arc, in route order, empty shelves left out. */
export const bookSections: readonly BookSection[] = arcs.flatMap((arc) => {
  const shelved = characters.filter(
    (character) => shelfOf(character)?.id === arc.id,
  )
  return shelved.length === 0 ? [] : [{ arc, characters: shelved }]
})

/**
 * Where a record sits on the chart, and what lies either side of it.
 * `index` is zero-based; the page prints it plus one.
 */
export type RoutePosition = {
  readonly index: number
  readonly next: Entity | undefined
  readonly previous: Entity | undefined
  readonly total: number
}

/**
 * Where a record falls along a drawn route, and what lies either side of it.
 *
 * `drawn` is a parameter rather than always the default because a page has
 * usually ordered the chart in the reader's unit already, and computing it
 * twice would let the strip and the "waypoint 23 of 66" line disagree.
 */
export function routePositionOf(
  entity: Entity,
  drawn: readonly Entity[] = chartWith(entity),
): RoutePosition {
  const index = drawn.findIndex((candidate) => candidate.id === entity.id)

  return {
    index,
    total: drawn.length,
    // No `index > 0` guard: a negative index reads off the front of the array
    // and is `undefined` there too, which is the answer either way.
    previous: drawn[index - 1],
    next: drawn[index + 1],
  }
}

/**
 * The featured characters filed closest to this one, by threshold, this one
 * excluded. Ties go to whoever comes first on the route.
 */
export function nearbyCharacters(entity: Entity, count: number): Entity[] {
  return featuredCharacters
    .flatMap((candidate, order) => {
      if (candidate.id === entity.id) {
        return []
      }
      const distance = Math.abs(
        candidate.revealedAtEpisode - entity.revealedAtEpisode,
      )
      return [{ candidate, distance, order }]
    })
    .toSorted((a, b) => {
      const byDistance = a.distance - b.distance
      return byDistance === 0 ? a.order - b.order : byDistance
    })
    .slice(0, count)
    .map(({ candidate }) => candidate)
}
