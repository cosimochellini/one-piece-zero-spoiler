import { withFeatures } from '~/data/features'
import type { SeriesArchive } from '~/data/types'
import type { Locale } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'

import { creditsPage } from './credits.server'
import { fillerPage, peekFiller } from './filler.server'
import { fruitPage } from './fruitPage.server'
import {
  fruitAlbum,
  fruitEaters,
  fruitSheet,
  fruitSiblings,
} from './fruits.server'
import { handleOf, indexHandle } from './handle.server'
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
import { readerFor } from './reader.server'
import { sagaLabels } from './sagaLabels.server'

/** Every payload served by the compiler-visible server-function wrappers. */
export interface Payload {
  keys?: () => string[]
  name: string
  run: (bookmark: Bookmark, locale: Locale, key: string) => unknown
}

function listPayloads(archive: SeriesArchive): Payload[] {
  return [
    {
      name: 'loadCredits',
      run: (b, l) => creditsPage(readerFor(archive, b, l)),
    },
    {
      name: 'loadHome',
      run: (b, l) => landingPage(readerFor(archive, b, l), null),
    },
    {
      name: 'loadCharacters',
      run: (b, l) => charactersPage(readerFor(archive, b, l)),
    },
    {
      name: 'loadShelves',
      run: (b, l) => shelvesPage(readerFor(archive, b, l)),
    },
    { name: 'loadFruits', run: (b, l) => fruitSheet(readerFor(archive, b, l)) },
    {
      name: 'loadFruitAlbum',
      run: (b, l) => fruitAlbum(readerFor(archive, b, l)),
    },
    { name: 'loadPlaces', run: (b, l) => placesPage(readerFor(archive, b, l)) },
    { name: 'loadFiller', run: (b, l) => fillerPage(readerFor(archive, b, l)) },
    {
      name: 'loadSagaLabels',
      run: (b, l) => sagaLabels(readerFor(archive, b, l)),
    },
  ]
}

function recordPayloads(archive: SeriesArchive): Payload[] {
  const characterIds = (): string[] => archive.characters.map(({ id }) => id)
  const fruitIds = (): string[] =>
    withFeatures(archive).fruits.map(({ id }) => id)
  return [
    {
      name: 'loadCharacter',
      keys: characterIds,
      run: (b, l, id) => characterPage(id, readerFor(archive, b, l)) ?? null,
    },
    {
      name: 'loadRoutePosition',
      keys: characterIds,
      run: (b, l, id) => routePosition(id, readerFor(archive, b, l)) ?? null,
    },
    {
      name: 'loadNearby',
      keys: characterIds,
      run: (b, l, id) => nearbyPage(id, readerFor(archive, b, l)),
    },
    {
      name: 'loadDrawings',
      keys: () => archive.entities.map(({ id }) => id),
      run: (b, l, id) => drawingsFor([id], readerFor(archive, b, l)),
    },
    {
      name: 'loadFruit',
      keys: fruitIds,
      run: (b, l, id) => fruitPage(id, readerFor(archive, b, l)) ?? null,
    },
    {
      name: 'loadFruitEaters',
      keys: fruitIds,
      run: (b, l, id) => fruitEaters(id, readerFor(archive, b, l)),
    },
    {
      name: 'loadFruitSiblings',
      keys: fruitIds,
      run: (b, l, id) => fruitSiblings(id, readerFor(archive, b, l)),
    },
    {
      name: 'loadPlace',
      keys: () =>
        [...archive.places, ...withFeatures(archive).ships].map(({ id }) => id),
      run: (b, l, id) => placePage(id, readerFor(archive, b, l)) ?? null,
    },
  ]
}

function liftedPayloads(archive: SeriesArchive): Payload[] {
  const keys = (): string[] =>
    archive.entities.map(({ id }) => handleOf(id, archive))
  return [
    {
      name: 'liftFiller',
      keys: () =>
        withFeatures(archive).filler.map((_, index) =>
          indexHandle(index, archive),
        ),
      run: (b, l, h) => peekFiller(h, readerFor(archive, b, l)) ?? null,
    },
    {
      name: 'liftCharacter',
      keys,
      run: (b, l, h) => peekCharacter(h, readerFor(archive, b, l)) ?? null,
    },
    {
      name: 'liftDossier',
      keys,
      run: (b, l, h) => peekDossier(h, readerFor(archive, b, l)) ?? null,
    },
    {
      name: 'liftFruit',
      keys,
      run: (b, l, h) => peekFruit(h, readerFor(archive, b, l)) ?? null,
    },
    {
      name: 'liftRecord',
      keys,
      run: (b, l, h) => peekRecord(h, readerFor(archive, b, l)) ?? null,
    },
    {
      name: 'liftPort',
      keys,
      run: (b, l, h) => peekPort(h, readerFor(archive, b, l)) ?? null,
    },
    {
      name: 'liftShip',
      keys,
      run: (b, l, h) => peekShip(h, readerFor(archive, b, l)) ?? null,
    },
  ]
}

/** Load an archive once; every projection and sweep then stays synchronous. */
export function payloadsFor(archive: SeriesArchive): Payload[] {
  const all = [
    ...listPayloads(archive),
    ...recordPayloads(archive),
    ...liftedPayloads(archive),
  ]
  // Preserve the deployed sweep order for byte-for-byte One Piece parity.
  const order = [
    'loadCredits',
    'loadHome',
    'loadCharacters',
    'loadShelves',
    'loadCharacter',
    'loadRoutePosition',
    'loadNearby',
    'loadDrawings',
    'loadFruits',
    'loadFruitAlbum',
    'loadFruit',
    'loadFruitEaters',
    'loadFruitSiblings',
    'loadPlaces',
    'loadPlace',
    'loadFiller',
    'loadSagaLabels',
    'liftFiller',
    'liftCharacter',
    'liftDossier',
    'liftFruit',
    'liftRecord',
    'liftPort',
    'liftShip',
  ]
  return order.flatMap((name) => all.filter((payload) => payload.name === name))
}
