import { createServerFn } from '@tanstack/react-start'

import { archiveOf, descriptionOf } from '~/data/series'
import { isLocale, type Locale } from '~/i18n/locales'
import { plain } from '~/lib/plain'
import { readBookmark, readTrial } from '~/lib/progress/readBookmark'
import type { Series } from '~/lib/progress/series'

import { chronicleRestOf } from './archive/chronicle.server'
import { creditsPage } from './archive/credits.server'
import { fillerPage, peekFiller } from './archive/filler.server'
import { fruitPage } from './archive/fruitPage.server'
import {
  fruitAlbum,
  fruitEaters,
  fruitSheet,
  fruitSiblings,
} from './archive/fruits.server'
import { landingPage } from './archive/home.server'
import { demoDrawingsPage } from './archive/onboarding.server'
import {
  characterPage,
  charactersPage,
  drawingsFor,
  relationshipsPage,
  shelvesPage,
} from './archive/pages.server'
import {
  peekCharacter,
  peekDossier,
  peekFruit,
  peekPort,
  peekRecord,
  peekShip,
} from './archive/peek.server'
import { placePage } from './archive/placePage.server'
import { placesPage } from './archive/places.server'
import { type Reader, readerFor } from './archive/reader.server'
import { sagaLabels } from './archive/sagaLabels.server'
import { copyOf } from './copy.server'
import { legalOf } from './sources.server'

/**
 * The archive's only door.
 *
 * Bookmark-dependent functions read it from the request itself; none accepts
 * one as an argument. Public demo drawings always use a null bookmark. This
 * is the invariant the whole design rests on: a bookmark that arrived in a request body would make the fog a
 * suggestion, and it would also mean a stale one in the router's context
 * could hand a reader records they have not reached.
 *
 * The decisions live in `./archive/*` as plain functions. These are wrappers
 * and nothing else, which is what makes the decisions testable: under Vitest
 * the Start plugin is deliberately absent, so calling one of these directly
 * throws out of `getStartContext()` rather than running.
 */

interface Located {
  locale: Locale
  series: string
}
interface Addressed extends Located {
  id: string
}
interface Handled extends Located {
  handle: string
}

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
  return { series: seriesSlug(input), locale: locale(input) }
}

/** A page about one record the reader has already reached, so it has an id. */
function addressed(input: unknown): Addressed {
  return { ...located(input), id: text(input, 'id') }
}

// One screen of a long list asks at once; more than that is not a page.
const MAX_IDS = 64

/** The ids of the drawings a list left behind, as the page asks for them. */
function listed(input: unknown): Located & { ids: string[] } {
  const ids = field(input, 'ids')
  if (!Array.isArray(ids) || ids.length === 0 || ids.length > MAX_IDS) {
    throw new Error('Some ids are required')
  }

  return {
    ...located(input),
    ids: ids.map((id: unknown) => text({ id }, 'id')),
  }
}

/** A record still under fog, which the reader can only name by its handle. */
function handled(input: unknown): Handled {
  return { ...located(input), handle: text(input, 'handle') }
}

const UNKNOWN_SERIES = 'A known series is required'

/** A registered slug is required before the archive can be loaded. */
function seriesSlug(input: unknown): string {
  const value = field(input, 'series')
  if (typeof value !== 'string' || descriptionOf(value) === null) {
    throw new Error(UNKNOWN_SERIES)
  }
  return value
}

/** The public description of the open series a call names. */
function describedBy(data: Located): Series {
  const series = descriptionOf(data.series)
  if (series === null) {
    throw new Error(UNKNOWN_SERIES)
  }
  return series
}

/** Series, bookmark and locale travel together into every projection. */
async function readerIn(data: Located): Promise<Reader> {
  const archive = await archiveOf(data.series)
  return readerFor(archive, readBookmark(archive.series), data.locale)
}

export const loadHome = createServerFn()
  .validator(located)
  .handler(async ({ data }) => {
    const r = await readerIn(data)
    return landingPage(r, readTrial(r.archive.series))
  })

export const loadCharacters = createServerFn()
  .validator(located)
  .handler(async ({ data }) => charactersPage(await readerIn(data)))

// Plain JSON: the browser asks for the shelves once the page is up (#776).
export const loadShelves = createServerFn()
  .validator(located)
  .handler(async ({ data }) => plain(shelvesPage(await readerIn(data))))

export const loadCharacter = createServerFn()
  .validator(addressed)
  .handler(
    async ({ data }) => characterPage(data.id, await readerIn(data)) ?? null,
  )

// Plain JSON: the browser asks for the older stories on the reader's click.
export const loadChronicleRest = createServerFn()
  .validator(addressed)
  .handler(async ({ data }) =>
    plain(chronicleRestOf(data.id, await readerIn(data))),
  )

export const loadRelationships = createServerFn()
  .validator(addressed)
  .handler(async ({ data }) => relationshipsPage(data.id, await readerIn(data)))

// Plain JSON, as the album below (#780).
export const loadDrawings = createServerFn()
  .validator(listed)
  .handler(async ({ data }) =>
    plain(drawingsFor(data.ids, await readerIn(data))),
  )

// Public demo only: neither cookies nor request-supplied bookmarks expand it.
export const loadDemoDrawings = createServerFn()
  .validator(located)
  .handler(async ({ data }) => {
    const archive = await archiveOf(data.series)
    return plain(demoDrawingsPage(readerFor(archive, null, data.locale)))
  })

export const loadFruits = createServerFn()
  .validator(located)
  .handler(async ({ data }) => fruitSheet(await readerIn(data)))

// Plain JSON: the browser asks for the plates once the page is up (#780).
export const loadFruitAlbum = createServerFn()
  .validator(located)
  .handler(async ({ data }) => plain(fruitAlbum(await readerIn(data))))

export const loadFruit = createServerFn()
  .validator(addressed)
  .handler(async ({ data }) => fruitPage(data.id, await readerIn(data)) ?? null)

export const loadFruitEaters = createServerFn()
  .validator(addressed)
  .handler(async ({ data }) => fruitEaters(data.id, await readerIn(data)))

export const loadFruitSiblings = createServerFn()
  .validator(addressed)
  .handler(async ({ data }) => fruitSiblings(data.id, await readerIn(data)))

export const loadPlaces = createServerFn()
  .validator(located)
  .handler(async ({ data }) => placesPage(await readerIn(data)))

export const loadPlace = createServerFn()
  .validator(addressed)
  .handler(async ({ data }) => placePage(data.id, await readerIn(data)) ?? null)

export const loadFiller = createServerFn()
  .validator(located)
  .handler(async ({ data }) => fillerPage(await readerIn(data)))

export const loadCredits = createServerFn()
  .validator(located)
  .handler(async ({ data }) => creditsPage(await readerIn(data)))

/**
 * A series' own copy in one locale, sent with its pages: its words reach no
 * client chunk, so a reader of one series never downloads another's.
 */
export const loadSeriesCopy = createServerFn()
  .validator(located)
  .handler(({ data }) => copyOf(describedBy(data), data.locale))

/**
 * What the legal page needs of an open series: the lines of its copy the
 * page prints and its sources, never the whole copy.
 */
export const loadSeriesLegal = createServerFn()
  .validator(located)
  .handler(({ data }) => legalOf(describedBy(data), data.locale))

export const loadSagaLabels = createServerFn()
  .validator(located)
  .handler(async ({ data }) => sagaLabels(await readerIn(data)))

export const liftFiller = createServerFn()
  .validator(handled)
  .handler(
    async ({ data }) => peekFiller(data.handle, await readerIn(data)) ?? null,
  )

export const liftCharacter = createServerFn()
  .validator(handled)
  .handler(
    async ({ data }) =>
      peekCharacter(data.handle, await readerIn(data)) ?? null,
  )

export const liftDossier = createServerFn()
  .validator(handled)
  .handler(
    async ({ data }) => peekDossier(data.handle, await readerIn(data)) ?? null,
  )

export const liftFruit = createServerFn()
  .validator(handled)
  .handler(
    async ({ data }) => peekFruit(data.handle, await readerIn(data)) ?? null,
  )

export const liftRecord = createServerFn()
  .validator(handled)
  .handler(
    async ({ data }) => peekRecord(data.handle, await readerIn(data)) ?? null,
  )

export const liftPort = createServerFn()
  .validator(handled)
  .handler(
    async ({ data }) => peekPort(data.handle, await readerIn(data)) ?? null,
  )

export const liftShip = createServerFn()
  .validator(handled)
  .handler(
    async ({ data }) => peekShip(data.handle, await readerIn(data)) ?? null,
  )
