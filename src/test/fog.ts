import { expect } from 'vitest'

import { entities } from '~/data/entities'
import { type Reveal, reveal } from '~/data/reveal'
import type { Entity } from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import { foldName } from '~/lib/search/fold'

/**
 * The one check the site exists for: nothing in a payload names a record the
 * reader has not reached. `payloads.test.ts` runs it over every page.
 *
 * Walked rather than grepped: a substring search over the serialised payload
 * finds "den" inside a path command and fails on a clean one.
 */

/** The two keys a payload may spell a record out under. */
const NAMING = new Set(['id', 'name'])

/**
 * Every string a payload could name a record by, however deeply nested: the
 * `id` and `name` an object declares, and its keys, which is how a map by id
 * (`drawingsFor`) names one.
 */
function named(payload: unknown, found = new Set<string>()): Set<string> {
  if (payload === null || typeof payload !== 'object') {
    return found
  }

  const isList = Array.isArray(payload)
  for (const [key, value] of Object.entries(payload)) {
    if (!isList) {
      found.add(key)
    }
    if (typeof value === 'string' && NAMING.has(key)) {
      found.add(value)
    }
    named(value, found)
  }

  return found
}

/**
 * The key a searchable record lists what it is matched by under: names and
 * epithets, folded (`~/lib/search/fold`), and never shown.
 */
const MATCHED_BY = 'aliases'

/** Every alias a payload lists for a search, however deeply nested. */
function aliasesIn(payload: unknown): string[] {
  if (payload === null || typeof payload !== 'object') {
    return []
  }

  return Object.entries(payload).flatMap(([key, value]) => {
    const listed =
      key === MATCHED_BY && Array.isArray(value) ? value.map(String) : []

    return [...listed, ...aliasesIn(value)]
  })
}

/**
 * The strings that name a record the reader has not reached, and the records
 * each one names: an id, or a name in either locale.
 *
 * A name a reached record goes by in the same locale is that record's, so it
 * is not a leak: the zombie dog Cerberus is met at 339, Shamrock's sword of
 * the name at 1168. The rule holds for every page, a fruit's too. The ids are
 * still checked, and a payload that sends a record sends its id, so a covered
 * record cannot get through on a shared name.
 */
function fogOf(bookmark: Bookmark): Map<string, Entity[]> {
  const at = reveal(bookmark)
  const covered = entities.filter((entity) => !at.sees(entity))
  const fog = new Map<string, Entity[]>()
  const cover = (said: string, entity: Entity): void => {
    fog.set(said, [...(fog.get(said) ?? []), entity])
  }

  for (const entity of covered) {
    cover(entity.id, entity)
  }
  for (const locale of LOCALES) {
    const taken = reachedNames(at, locale)
    for (const entity of covered) {
      if (!taken.has(entity.name[locale])) {
        cover(entity.name[locale], entity)
      }
    }
  }

  return fog
}

/**
 * The fog an alias is checked against: a covered record's names, folded the
 * way a search folds them. An alias carries no locale, so a folded name is
 * taken when a reached record goes by it in either one.
 */
function foldedFogOf(bookmark: Bookmark): Map<string, Entity[]> {
  const at = reveal(bookmark)
  const fold = (entity: Entity): string[] => [
    ...new Set(LOCALES.map((locale) => foldName(entity.name[locale]))),
  ]
  const taken = new Set(
    entities.flatMap((entity) => (at.sees(entity) ? fold(entity) : [])),
  )
  const fog = new Map<string, Entity[]>()

  for (const entity of entities) {
    const said =
      at.sees(entity) ? [] : fold(entity).filter((name) => !taken.has(name))
    for (const name of said) {
      fog.set(name, [...(fog.get(name) ?? []), entity])
    }
  }

  return fog
}

/** The names the records a reader has reached go by in one locale. */
function reachedNames(at: Reveal, locale: Locale): Set<string> {
  const names = new Set<string>()
  for (const entity of entities) {
    if (at.sees(entity)) {
      names.add(entity.name[locale])
    }
  }

  return names
}

/** The strings that name a covered record, as written and as folded. */
interface Fog {
  folded: Map<string, Entity[]>
  plain: Map<string, Entity[]>
}

/** One fog per bookmark: a sweep asks for the same one many times over. */
const fogs = new Map<string, Fog>()

/** The words a payload says, each checked against its own fog. */
function leakedIn(
  said: Set<string>,
  fog: Map<string, Entity[]>,
  excused: (entity: Entity) => boolean,
): Entity[] {
  return [...said].flatMap((word) => {
    const covered = fog.get(word) ?? []

    return covered.every((entity) => !excused(entity)) ? covered : []
  })
}

/**
 * The ids of the records the reader at this bookmark has not reached that a
 * payload names. A string a page says by design (`excused`) is not a leak,
 * whichever other record goes by it too.
 */
export function leaksIn(
  payload: unknown,
  bookmark: Bookmark,
  excused: (entity: Entity) => boolean = () => false,
): string[] {
  const key = JSON.stringify(bookmark)
  const fog = fogs.get(key) ?? {
    folded: foldedFogOf(bookmark),
    plain: fogOf(bookmark),
  }
  fogs.set(key, fog)

  const leaked = [
    ...leakedIn(named(payload), fog.plain, excused),
    ...leakedIn(new Set(aliasesIn(payload)), fog.folded, excused),
  ]

  return [...new Set(leaked.map((entity) => entity.id))]
}

/** Nothing in a payload may name a record the reader has not reached. */
export function saysNothing(payload: unknown, bookmark: Bookmark): void {
  expect(leaksIn(payload, bookmark)).toStrictEqual([])
}
