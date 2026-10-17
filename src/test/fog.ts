import { expect } from 'vitest'

import { entities } from '~/data/entities'
import { type Reveal, reveal } from '~/data/reveal'
import type { Entity } from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'

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

/** One fog per bookmark: a sweep asks for the same one many times over. */
const fogs = new Map<string, Map<string, Entity[]>>()

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
  const fog = fogs.get(key) ?? fogOf(bookmark)
  fogs.set(key, fog)

  const leaked = new Set<string>()
  for (const said of named(payload)) {
    const covered = fog.get(said) ?? []
    if (covered.every((entity) => !excused(entity))) {
      for (const entity of covered) {
        leaked.add(entity.id)
      }
    }
  }

  return [...leaked]
}

/** Nothing in a payload may name a record the reader has not reached. */
export function saysNothing(payload: unknown, bookmark: Bookmark): void {
  expect(leaksIn(payload, bookmark)).toStrictEqual([])
}
