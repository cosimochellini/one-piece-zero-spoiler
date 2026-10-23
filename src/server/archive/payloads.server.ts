import { characters } from '~/data/series/one-piece/characters'
import { entities } from '~/data/series/one-piece/entities'
import { FILLER } from '~/data/series/one-piece/filler'
import { fruits } from '~/data/series/one-piece/fruits'
import { places, ships } from '~/data/series/one-piece/places'
import { sagas } from '~/data/series/one-piece/sagas'
import type { Entity } from '~/data/types'
import type { Locale } from '~/i18n/locales'
import {
  type Bookmark,
  CHAPTER_CEILING,
  EPISODE_CEILING,
} from '~/lib/progress/episode'

import { creditsPage } from './credits.server'
import { fillerPage, peekFiller } from './filler.server'
import { RADIX } from './fillerRows.server'
import { fruitPage } from './fruitPage.server'
import { fruitEaters, fruitSheet, fruitSiblings } from './fruits.server'
import { handleOf } from './handle.server'
import { landingPage } from './home.server'
import {
  characterPage,
  charactersPage,
  drawingsFor,
  nearbyPage,
  routePosition,
  shelvesPage,
} from './pages.server'
import {
  peekCharacter,
  peekDossier,
  peekFruit,
  peekPort,
  peekRecord,
  peekShip,
} from './peek.server'
import { placePage } from './placePage.server'
import { placesPage } from './places.server'
import { sagaLabels } from './sagaLabels.server'

/**
 * Every payload `~/server/api` sends, as the plain function its server
 * function wraps, so a test or a script can ask for each one at any bookmark.
 *
 * `api.ts` stays as it is: each `createServerFn` has to be written out for
 * the compiler. This list repeats it once, and `payloads.test.ts` fails when
 * the two disagree, so a new page cannot ship without the spoiler sweep.
 */
export interface Payload {
  /** The server function in `~/server/api` that sends it. */
  name: string
  /** Every id or handle the page is asked for, when it is asked for one. */
  keys?: () => string[]
  /** The payload, as the server function builds it. */
  run: (bookmark: Bookmark, locale: Locale, key: string) => unknown
}

const characterIds = (): string[] => characters.map(({ id }) => id)
const fruitIds = (): string[] => fruits.map(({ id }) => id)
// A ship's page is served from a place's address.
const placeIds = (): string[] => [...places, ...ships].map(({ id }) => id)
const handles = (): string[] => entities.map(({ id }) => handleOf(id))

export const PAYLOADS: Payload[] = [
  { name: 'loadCredits', run: (b, locale) => creditsPage(b, locale) },
  {
    name: 'loadHome',
    // A trial only ever turns the landing into the onboarding, which a
    // visitor with no bookmark is sent too.
    run: (bookmark, locale) => landingPage(bookmark, null, locale),
  },
  { name: 'loadCharacters', run: (b, locale) => charactersPage(b, locale) },
  { name: 'loadShelves', run: (b, locale) => shelvesPage(b, locale) },
  {
    name: 'loadCharacter',
    keys: characterIds,
    run: (b, locale, id) => characterPage(id, b, locale) ?? null,
  },
  {
    name: 'loadRoutePosition',
    keys: characterIds,
    run: (b, locale, id) => routePosition(id, b, locale) ?? null,
  },
  {
    name: 'loadNearby',
    keys: characterIds,
    run: (b, locale, id) => nearbyPage(id, b, locale),
  },
  {
    name: 'loadDrawings',
    keys: () => entities.map(({ id }) => id),
    run: (b, locale, id) => drawingsFor([id], b, locale),
  },
  { name: 'loadFruits', run: (b, locale) => fruitSheet(b, locale) },
  {
    name: 'loadFruit',
    keys: fruitIds,
    run: (b, locale, id) => fruitPage(id, b, locale) ?? null,
  },
  {
    name: 'loadFruitEaters',
    keys: fruitIds,
    run: (b, locale, id) => fruitEaters(id, b, locale),
  },
  {
    name: 'loadFruitSiblings',
    keys: fruitIds,
    run: (b, locale, id) => fruitSiblings(id, b, locale),
  },
  { name: 'loadPlaces', run: (b, locale) => placesPage(b, locale) },
  {
    name: 'loadPlace',
    keys: placeIds,
    run: (b, locale, id) => placePage(id, b, locale) ?? null,
  },
  { name: 'loadFiller', run: (b, locale) => fillerPage(b, locale) },
  { name: 'loadSagaLabels', run: (_, locale) => sagaLabels(locale) },
  {
    name: 'liftFiller',
    keys: () => FILLER.map((_, index) => index.toString(RADIX)),
    run: (_, locale, handle) => peekFiller(handle, locale) ?? null,
  },
  {
    name: 'liftCharacter',
    keys: handles,
    run: (b, locale, handle) => peekCharacter(handle, locale, b) ?? null,
  },
  {
    name: 'liftDossier',
    keys: handles,
    run: (b, locale, handle) => peekDossier(handle, locale, b) ?? null,
  },
  {
    name: 'liftFruit',
    keys: handles,
    run: (b, locale, handle) => peekFruit(handle, locale, b) ?? null,
  },
  {
    name: 'liftRecord',
    keys: handles,
    run: (b, locale, handle) => peekRecord(handle, locale, b) ?? null,
  },
  {
    name: 'liftPort',
    keys: handles,
    run: (b, locale, handle) => peekPort(handle, locale, b) ?? null,
  },
  {
    name: 'liftShip',
    keys: handles,
    run: (b, locale, handle) => peekShip(handle, locale, b) ?? null,
  },
]

/**
 * Every saga's start in one unit, where the most opens at once, and the
 * number before it. The fruits file no arc, so they have no start.
 */
function aroundSagas(threshold: (arc: Entity) => number): number[] {
  const around: number[] = []
  for (const { entries } of sagas) {
    const arcs = entries.filter(({ kind }) => kind === 'arc')
    const start = Math.min(...arcs.map((arc) => threshold(arc)))
    if (Number.isFinite(start)) {
      around.push(...[start - 1, start].filter((count) => count > 0))
    }
  }

  return around
}

/**
 * A spread of bookmarks to ask every payload at: none, both sides of every
 * saga's start in both units, both sides of Robin's episode in seasons
 * (S04E38 is 130), and the last episode and chapter. A season that resolves
 * to no episode is not here: the cookie parser turns it into no bookmark.
 */
export const BOOKMARKS: Bookmark[] = [
  null,
  ...aroundSagas((arc) => arc.revealedAtEpisode).map((episode): Bookmark => ({
    mode: 'episode',
    episode,
  })),
  ...aroundSagas((arc) => arc.revealedAtChapter).map((chapter): Bookmark => ({
    mode: 'chapter',
    chapter,
  })),
  { mode: 'season', season: 4, episode: 37 },
  { mode: 'season', season: 4, episode: 38 },
  { mode: 'episode', episode: EPISODE_CEILING },
  { mode: 'chapter', chapter: CHAPTER_CEILING },
]
