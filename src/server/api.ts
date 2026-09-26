import { createServerFn } from '@tanstack/react-start'

import { isLocale, type Locale } from '~/i18n/locales'
import { readBookmark } from '~/lib/progress/readBookmark'

import {
  fruitEaters,
  fruitPage,
  fruitSheet,
  fruitSiblings,
} from './archive/fruits.server'
import {
  characterPage,
  charactersPage,
  chartPage,
  nearbyPage,
  placesPage,
  routePosition,
  shelvesPage,
} from './archive/pages.server'
import {
  peekCharacter,
  peekDossier,
  peekFruit,
  peekPort,
  peekRecord,
  peekWaypoint,
} from './archive/peek.server'

/**
 * The archive's only door.
 *
 * Every function here reads the bookmark from the request itself, and none of
 * them accepts one as an argument. That is the invariant the whole design
 * rests on: a bookmark that arrived in a request body would make the fog a
 * suggestion, and it would also mean a stale one in the router's context
 * could hand a reader records they have not reached.
 *
 * The decisions live in `./archive/*` as plain functions. These are wrappers
 * and nothing else, which is what makes the decisions testable: under Vitest
 * the Start plugin is deliberately absent, so calling one of these directly
 * throws out of `getStartContext()` rather than running.
 */

type Located = { readonly locale: Locale }
type Addressed = Located & { readonly id: string }
type Handled = Located & { readonly handle: string }

// Long enough for any id or handle the archive mints, short enough that a
// request body cannot be used to make the server do work.
const MAX_FIELD_LENGTH = 200

/** One field of a request body, read without trusting the body's shape. */
function field(input: unknown, name: string): unknown {
  if (
    typeof input !== 'object'
    || input === null
    || !Object.hasOwn(input, name)
  ) {
    return undefined
  }

  return Object.getOwnPropertyDescriptor(input, name)?.value
}

/** The locale the page is asking in. */
function locale(input: unknown): Locale {
  const value = field(input, 'locale')
  if (!isLocale(value)) {
    throw new Error('A known locale is required')
  }

  return value
}

/** An id or a handle, as a string the archive could have minted. */
function text(input: unknown, name: 'handle' | 'id'): string {
  const value = field(input, name)
  if (
    typeof value !== 'string'
    || value.length === 0
    || value.length > MAX_FIELD_LENGTH
  ) {
    throw new Error(`A ${name} is required`)
  }

  return value
}

/** A page that asks for nothing but the locale it is drawn in. */
function located(input: unknown): Located {
  return { locale: locale(input) }
}

/** A page about one record the reader has already reached, so it has an id. */
function addressed(input: unknown): Addressed {
  return { locale: locale(input), id: text(input, 'id') }
}

/** A record still under fog, which the reader can only name by its handle. */
function handled(input: unknown): Handled {
  return { locale: locale(input), handle: text(input, 'handle') }
}

export const loadChart = createServerFn()
  .validator(located)
  .handler(({ data }) => chartPage(readBookmark(), data.locale))

export const loadCharacters = createServerFn()
  .validator(located)
  .handler(({ data }) => charactersPage(readBookmark(), data.locale))

export const loadShelves = createServerFn()
  .validator(located)
  .handler(({ data }) => shelvesPage(readBookmark(), data.locale))

export const loadCharacter = createServerFn()
  .validator(addressed)
  .handler(
    ({ data }) => characterPage(data.id, readBookmark(), data.locale) ?? null,
  )

export const loadRoutePosition = createServerFn()
  .validator(addressed)
  .handler(
    ({ data }) => routePosition(data.id, readBookmark(), data.locale) ?? null,
  )

export const loadNearby = createServerFn()
  .validator(addressed)
  .handler(({ data }) => nearbyPage(data.id, readBookmark(), data.locale))

export const loadFruits = createServerFn()
  .validator(located)
  .handler(({ data }) => fruitSheet(readBookmark(), data.locale))

export const loadFruit = createServerFn()
  .validator(addressed)
  .handler(
    ({ data }) => fruitPage(data.id, readBookmark(), data.locale) ?? null,
  )

export const loadFruitEaters = createServerFn()
  .validator(addressed)
  .handler(({ data }) => fruitEaters(data.id, readBookmark(), data.locale))

export const loadFruitSiblings = createServerFn()
  .validator(addressed)
  .handler(({ data }) => fruitSiblings(data.id, readBookmark(), data.locale))

export const loadPlaces = createServerFn()
  .validator(located)
  .handler(({ data }) => placesPage(readBookmark(), data.locale))

export const liftWaypoint = createServerFn()
  .validator(handled)
  .handler(
    ({ data }) =>
      peekWaypoint(data.handle, data.locale, readBookmark()) ?? null,
  )

export const liftCharacter = createServerFn()
  .validator(handled)
  .handler(
    ({ data }) =>
      peekCharacter(data.handle, data.locale, readBookmark()) ?? null,
  )

export const liftDossier = createServerFn()
  .validator(handled)
  .handler(
    ({ data }) => peekDossier(data.handle, data.locale, readBookmark()) ?? null,
  )

export const liftFruit = createServerFn()
  .validator(handled)
  .handler(
    ({ data }) => peekFruit(data.handle, data.locale, readBookmark()) ?? null,
  )

export const liftRecord = createServerFn()
  .validator(handled)
  .handler(
    ({ data }) => peekRecord(data.handle, data.locale, readBookmark()) ?? null,
  )

export const liftPort = createServerFn()
  .validator(handled)
  .handler(
    ({ data }) => peekPort(data.handle, data.locale, readBookmark()) ?? null,
  )
