import { archiveOf } from '~/data/series'
import type { Locale } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { Gated } from '~/lib/progress/spoiler'
import { creditsPage as core_creditsPage } from '~/server/archive/credits.server'
import {
  fillerPage as core_fillerPage,
  peekFiller as core_peekFiller,
} from '~/server/archive/filler.server'
import {
  countdownOf as core_countdownOf,
  fillerAheadOf as core_fillerAheadOf,
} from '~/server/archive/fillerCountdown.server'
import { fruitPage as core_fruitPage } from '~/server/archive/fruitPage.server'
import {
  fruitEaters as core_fruitEaters,
  fruitSheet as core_fruitSheet,
  fruitSiblings as core_fruitSiblings,
} from '~/server/archive/fruits.server'
import {
  entityForHandle as core_entityForHandle,
  handleOf as core_handleOf,
} from '~/server/archive/handle.server'
import {
  homePage as core_homePage,
  landingPage as core_landingPage,
} from '~/server/archive/home.server'
import { onboardingPage as core_onboardingPage } from '~/server/archive/onboarding.server'
import {
  characterPage as core_characterPage,
  charactersPage as core_charactersPage,
  drawingsFor as core_drawingsFor,
  nearbyPage as core_nearbyPage,
  routePosition as core_routePosition,
  shelvesPage as core_shelvesPage,
} from '~/server/archive/pages.server'
import {
  peekCharacter as core_peekCharacter,
  peekDossier as core_peekDossier,
  peekFruit as core_peekFruit,
  peekPort as core_peekPort,
  peekRecord as core_peekRecord,
  peekShip as core_peekShip,
} from '~/server/archive/peek.server'
import { placePage as core_placePage } from '~/server/archive/placePage.server'
import { placesPage as core_placesPage } from '~/server/archive/places.server'
import { readerFor as coreReader } from '~/server/archive/reader.server'
import {
  sagaOf as core_sagaOf,
  sagaStarts as core_sagaStarts,
} from '~/server/archive/sagaLabels.server'

/** One Piece fixture: load once, while preserving concise legacy test arrangements. */
export const OP_ARCHIVE = await archiveOf('one-piece')

/** One Piece-bound fixture for readerFor. */
export function opReaderFor(
  bookmark: Bookmark,
  locale: Locale,
): ReturnType<typeof coreReader> {
  return coreReader(OP_ARCHIVE, bookmark, locale)
}

/** One Piece-bound fixture for handleOf. */
export function opHandleOf(id: string): ReturnType<typeof core_handleOf> {
  return core_handleOf(id, OP_ARCHIVE)
}

/** One Piece-bound fixture for entityForHandle. */
export function opEntityForHandle(
  handle: string,
): ReturnType<typeof core_entityForHandle> {
  return core_entityForHandle(handle, OP_ARCHIVE)
}

/** One Piece-bound fixture for charactersPage. */
export function opCharactersPage(
  b: Bookmark,
  l: Locale,
): ReturnType<typeof core_charactersPage> {
  return core_charactersPage(coreReader(OP_ARCHIVE, b, l))
}

/** One Piece-bound fixture for shelvesPage. */
export function opShelvesPage(
  b: Bookmark,
  l: Locale,
): ReturnType<typeof core_shelvesPage> {
  return core_shelvesPage(coreReader(OP_ARCHIVE, b, l))
}

/** One Piece-bound fixture for drawingsFor. */
export function opDrawingsFor(
  ids: string[],
  b: Bookmark,
  l: Locale,
): ReturnType<typeof core_drawingsFor> {
  return core_drawingsFor(ids, coreReader(OP_ARCHIVE, b, l))
}

/** One Piece-bound fixture for characterPage. */
export function opCharacterPage(
  id: string,
  b: Bookmark,
  l: Locale,
): ReturnType<typeof core_characterPage> {
  return core_characterPage(id, coreReader(OP_ARCHIVE, b, l))
}

/** One Piece-bound fixture for routePosition. */
export function opRoutePosition(
  id: string,
  b: Bookmark,
  l: Locale,
): ReturnType<typeof core_routePosition> {
  return core_routePosition(id, coreReader(OP_ARCHIVE, b, l))
}

/** One Piece-bound fixture for nearbyPage. */
export function opNearbyPage(
  id: string,
  b: Bookmark,
  l: Locale,
): ReturnType<typeof core_nearbyPage> {
  return core_nearbyPage(id, coreReader(OP_ARCHIVE, b, l))
}

/** One Piece-bound fixture for fruitSheet. */
export function opFruitSheet(
  b: Bookmark,
  l: Locale,
): ReturnType<typeof core_fruitSheet> {
  return core_fruitSheet(coreReader(OP_ARCHIVE, b, l))
}

/** One Piece-bound fixture for fruitEaters. */
export function opFruitEaters(
  id: string,
  b: Bookmark,
  l: Locale,
): ReturnType<typeof core_fruitEaters> {
  return core_fruitEaters(id, coreReader(OP_ARCHIVE, b, l))
}

/** One Piece-bound fixture for fruitSiblings. */
export function opFruitSiblings(
  id: string,
  b: Bookmark,
  l: Locale,
): ReturnType<typeof core_fruitSiblings> {
  return core_fruitSiblings(id, coreReader(OP_ARCHIVE, b, l))
}

/** One Piece-bound fixture for fruitPage. */
export function opFruitPage(
  id: string,
  b: Bookmark,
  l: Locale,
): ReturnType<typeof core_fruitPage> {
  return core_fruitPage(id, coreReader(OP_ARCHIVE, b, l))
}

/** One Piece-bound fixture for placePage. */
export function opPlacePage(
  id: string,
  b: Bookmark,
  l: Locale,
): ReturnType<typeof core_placePage> {
  return core_placePage(id, coreReader(OP_ARCHIVE, b, l))
}

/** One Piece-bound fixture for placesPage. */
export function opPlacesPage(
  b: Bookmark,
  l: Locale,
): ReturnType<typeof core_placesPage> {
  return core_placesPage(coreReader(OP_ARCHIVE, b, l))
}

/** One Piece-bound fixture for homePage. */
export function opHomePage(
  b: NonNullable<Bookmark>,
  l: Locale,
): ReturnType<typeof core_homePage> {
  return core_homePage(coreReader(OP_ARCHIVE, b, l))
}

/** One Piece-bound fixture for landingPage. */
export function opLandingPage(
  b: Bookmark,
  t: Bookmark,
  l: Locale,
): ReturnType<typeof core_landingPage> {
  return core_landingPage(coreReader(OP_ARCHIVE, b, l), t)
}

/** One Piece-bound fixture for onboardingPage. */
export function opOnboardingPage(
  b: Bookmark,
  l: Locale,
): ReturnType<typeof core_onboardingPage> {
  return core_onboardingPage(b, coreReader(OP_ARCHIVE, b, l))
}

/** One Piece-bound fixture for creditsPage. */
export function opCreditsPage(
  b: Bookmark,
  l: Locale,
): ReturnType<typeof core_creditsPage> {
  return core_creditsPage(coreReader(OP_ARCHIVE, b, l))
}

/** One Piece-bound fixture for peekCharacter. */
export function opPeekCharacter(
  h: string,
  l: Locale,
  b: Bookmark,
): ReturnType<typeof core_peekCharacter> {
  return core_peekCharacter(h, coreReader(OP_ARCHIVE, b, l))
}

/** One Piece-bound fixture for peekDossier. */
export function opPeekDossier(
  h: string,
  l: Locale,
  b: Bookmark,
): ReturnType<typeof core_peekDossier> {
  return core_peekDossier(h, coreReader(OP_ARCHIVE, b, l))
}

/** One Piece-bound fixture for peekFruit. */
export function opPeekFruit(
  h: string,
  l: Locale,
  b: Bookmark,
): ReturnType<typeof core_peekFruit> {
  return core_peekFruit(h, coreReader(OP_ARCHIVE, b, l))
}

/** One Piece-bound fixture for peekRecord. */
export function opPeekRecord(
  h: string,
  l: Locale,
  b: Bookmark,
): ReturnType<typeof core_peekRecord> {
  return core_peekRecord(h, coreReader(OP_ARCHIVE, b, l))
}

/** One Piece-bound fixture for peekPort. */
export function opPeekPort(
  h: string,
  l: Locale,
  b: Bookmark,
): ReturnType<typeof core_peekPort> {
  return core_peekPort(h, coreReader(OP_ARCHIVE, b, l))
}

/** One Piece-bound fixture for peekShip. */
export function opPeekShip(
  h: string,
  l: Locale,
  b: Bookmark,
): ReturnType<typeof core_peekShip> {
  return core_peekShip(h, coreReader(OP_ARCHIVE, b, l))
}

/** One Piece-bound fixture for fillerPage. */
export function opFillerPage(
  b: Bookmark,
  l: Locale,
): ReturnType<typeof core_fillerPage> {
  return core_fillerPage(coreReader(OP_ARCHIVE, b, l))
}

/** One Piece-bound fixture for peekFiller. */
export function opPeekFiller(
  h: string,
  l: Locale,
): ReturnType<typeof core_peekFiller> {
  return core_peekFiller(h, coreReader(OP_ARCHIVE, null, l))
}

/** One Piece-bound fixture for fillerAheadOf. */
export function opFillerAheadOf(
  b: Bookmark,
): ReturnType<typeof core_fillerAheadOf> {
  return core_fillerAheadOf(coreReader(OP_ARCHIVE, b, 'en'))
}

/** One Piece-bound fixture for countdownOf. */
export function opCountdownOf(
  b: Bookmark,
  look: { locale: Locale; sees: (gate: Gated) => boolean },
): ReturnType<typeof core_countdownOf> {
  return core_countdownOf({
    ...coreReader(OP_ARCHIVE, b, look.locale),
    ...look,
  })
}

/** One Piece-bound fixture for sagaStarts. */
export function opSagaStarts(
  mode: 'chapter' | 'episode',
): ReturnType<typeof core_sagaStarts> {
  return core_sagaStarts(mode, coreReader(OP_ARCHIVE, null, 'en'))
}

/** One Piece-bound fixture for sagaOf. */
export function opSagaOf(
  mode: 'chapter' | 'episode',
  at: number,
): ReturnType<typeof core_sagaOf> {
  return core_sagaOf(mode, at, coreReader(OP_ARCHIVE, null, 'en'))
}
