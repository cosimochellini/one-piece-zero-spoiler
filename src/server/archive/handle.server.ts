import { entities } from '~/data/entities'
import { orderByMode } from '~/data/order'
import type { Entity } from '~/data/types'

/**
 * The address a covered record hands back, in place of its id.
 *
 * A covered record's id is its name slug, so it cannot travel: an id in a
 * React key, an `href` or a DOM `id` spells the name the fog is for. A handle
 * is the record's index in one canonical order, written in base 36. The
 * index-to-id table exists only in the server bundle, and the ordinal itself
 * is something the site already says out loud — "waypoint 23 of 66".
 *
 * It does not depend on the unit the reader counts in. A chapter reader's
 * list is in a different order, but a handle is an identity and not a
 * position in a list: three handles per record would mean a record changed
 * identity the moment a reader switched units.
 *
 * It is ephemeral. It is never persisted, never in a URL, never in the
 * cookie. Filing a new record shifts every index above it, which is only
 * acceptable because nothing holds a handle across a deploy.
 */

// Base 36, so a handle is as short as a number can be written without
// punctuation: four characters address more records than the archive holds.
const RADIX = 36

// Up to four base-36 digits, lower case. Anything else was never minted here.
const HANDLE_SHAPE = /^[\da-z]{1,4}$/u

/**
 * The one canonical order, and the index into it. Built on first use and kept
 * in one box rather than in two bindings: a lazily filled cell is a different
 * thing from a module-scope variable a function reaches out and assigns to.
 */
const table: {
  canonical: null | readonly Entity[]
  index: null | ReadonlyMap<string, number>
} = { canonical: null, index: null }

/** The archive in the order the anime reaches it, built once. */
function order(): readonly Entity[] {
  table.canonical ??= orderByMode(entities, 'episode')

  return table.canonical
}

/** Where each record sits in that order. */
function positions(): ReadonlyMap<string, number> {
  table.index ??= new Map(order().map((entity, at) => [entity.id, at]))

  return table.index
}

/** The handle that stands in for a record the reader has not reached. */
export function handleOf(id: string): string {
  const at = positions().get(id)
  if (at === undefined) {
    throw new Error(`No record is filed under ${id}, so it has no handle`)
  }

  return at.toString(RADIX)
}

/** Fails closed: anything that is not an index in range is nothing at all. */
export function entityForHandle(handle: string): Entity | undefined {
  if (!HANDLE_SHAPE.test(handle)) {
    return undefined
  }

  const at = Number.parseInt(handle, RADIX)
  if (!Number.isSafeInteger(at) || at < 0) {
    return undefined
  }

  return order().at(at)
}
