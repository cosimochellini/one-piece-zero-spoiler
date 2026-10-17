import { type Eater, eatersOf } from '~/data/dated'
import { fruitFormOf, fruits, fruitsOfForm, getFruit } from '~/data/fruits'
import type { Entity } from '~/data/types'
import type { Locale } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type {
  CharacterView,
  DocumentHead,
  FruitBandView,
  FruitDetail,
  FruitEatersView,
  FruitForm,
  FruitSheetView,
  FruitView,
  Slot,
} from '~/lib/view/records'

import { headFor, type HeadKeys } from './head.server'
import { characterOf, deferredOf, fruitOf, specimenOf } from './project.server'
import { type Reader, readerFor } from './reader.server'

/**
 * What the specimen sheet and a fruit's own page are allowed to know.
 *
 * Its own module rather than another band of `pages.server`: the two have
 * nothing to say to each other.
 */

/** The plates, in the order the sheet sets them out. */
const PLATES: FruitForm[] = ['paramecia', 'zoan', 'logia']

/** What a fruit's page calls itself, open and under fog. */
const FRUIT_HEAD: HeadKeys = {
  foggedDescription: 'fruit.foggedDescription',
  foggedTitle: 'fruit.foggedTitle',
  pageTitle: 'fruit.pageTitle',
}

/**
 * How many tiles of the first plate ship their drawings with them: a phone's
 * first screen of the album, two across, and the first row of a wide one.
 */
const INLINE_FRUITS = 6

/**
 * One plate of fruits split at the reader's bookmark. The drawings are most
 * of the album's bytes, and only the first tiles of the first plate are near
 * the screen when it arrives: the rest come by id.
 */
function bandOf(form: FruitForm, plate: number, r: Reader): FruitBandView {
  const band = r.split(fruitsOfForm(form), (entity) =>
    specimenOf(fruitOf(entity, form, r), openEaters(entity.id, r), r),
  )

  return {
    ...band,
    form,
    open: band.open.map((fruit, row) =>
      plate === 0 && row < INLINE_FRUITS ?
        fruit
      : {
          ...deferredOf(fruit),
          eaters: fruit.eaters.map((eater) => deferredOf(eater)),
        },
    ),
  }
}

/**
 * An eater as the reader may meet them: slotted on the later gate — their own
 * and the entry that says they ate it — but drawn from the record itself, so
 * an open eater prints their own thresholds and a covered one the entry's.
 */
function gatedOf(eater: Eater): Entity {
  return { ...eater.entity, ...eater.gate }
}

/**
 * The eaters of a fruit the reader has reached, in `eatersOf` order. The rest
 * are dropped rather than covered: a tile that kept a place for them would
 * count them, and a count is a spoiler too.
 */
function openEaters(id: string, r: Reader): Entity[] {
  return eatersOf(id).flatMap((eater) =>
    r.sees(gatedOf(eater)) ? [eater.entity] : [],
  )
}

/** The specimen sheet: three plates, and how many fruits the archive files. */
export function fruitSheet(bookmark: Bookmark, locale: Locale): FruitSheetView {
  const r = readerFor(bookmark, locale)

  return {
    bands: PLATES.map((form, plate) => bandOf(form, plate, r)),
    filed: fruits.length,
  }
}

/** A fruit's own page: what names it, and what it says. */
export interface FruitPage {
  detail: FruitDetail
  head: DocumentHead
}

/**
 * A fruit's page, or `undefined` for an id the archive does not file as a
 * fruit. It returns rather than throws, for the same reason a character's
 * page does: `notFound()` is a router signal, and a signal thrown across an
 * RPC boundary is only an error.
 */
export function fruitPage(
  id: string,
  bookmark: Bookmark,
  locale: Locale,
): FruitPage | undefined {
  const entity = getFruit(id)
  const form = entity === undefined ? undefined : fruitFormOf(entity)
  if (entity === undefined || form === undefined) {
    return undefined
  }

  const r = readerFor(bookmark, locale)

  return {
    head: headFor(entity, FRUIT_HEAD, r),
    detail: { slot: r.slot(entity, (open) => fruitOf(open, form, r)) },
  }
}

/**
 * Who the dossiers say ate this fruit, each under its own fog: named from the
 * later of their own threshold and the dossier entry that says they ate it
 * (`eatersOf` in `~/data/dated`).
 *
 * Both halves matter. A character filed long before the story says what they
 * ate would otherwise appear on the fruit's page the moment the reader met
 * them, which tells the reader something the story has not — and a character
 * the reader has not met must not be named at all.
 */
export function fruitEaters(
  id: string,
  bookmark: Bookmark,
  locale: Locale,
): FruitEatersView {
  const r = readerFor(bookmark, locale)

  return {
    mode: 'eaters',
    eaters: eatersOf(id).map((eater): Slot<CharacterView> =>
      r.slot(gatedOf(eater), () => characterOf(eater.entity, r)),
    ),
  }
}

// One row of specimens, which is what the rail holds before it wraps.
const SIBLING_COUNT = 4

/** The fruits of the same kind filed nearest this one, this one left out. */
export function fruitSiblings(
  id: string,
  bookmark: Bookmark,
  locale: Locale,
): Slot<FruitView>[] {
  const entity = getFruit(id)
  const form = entity === undefined ? undefined : fruitFormOf(entity)
  if (entity === undefined || form === undefined) {
    return []
  }

  const r = readerFor(bookmark, locale)

  return r
    .nearest(entity, fruitsOfForm(form), SIBLING_COUNT)
    .map((near) => r.slot(near, (found) => fruitOf(found, form, r)))
}
