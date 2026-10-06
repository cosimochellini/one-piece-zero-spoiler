import { eatersOf } from '~/data/dated'
import { fruitFormOf, fruits, fruitsOfForm, getFruit } from '~/data/fruits'
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
import { characterOf, fruitOf } from './project.server'
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

/** One row of fruits split at the reader's bookmark. */
function bandOf(form: FruitForm, r: Reader): FruitBandView {
  return {
    form,
    ...r.split(fruitsOfForm(form), (entity) => fruitOf(entity, form, r)),
  }
}

/** The specimen sheet: three plates, and how many fruits the archive files. */
export function fruitSheet(bookmark: Bookmark, locale: Locale): FruitSheetView {
  const r = readerFor(bookmark, locale)

  return { bands: PLATES.map((form) => bandOf(form, r)), filed: fruits.length }
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
    eaters: eatersOf(id).map((eater): Slot<CharacterView> => {
      // Slotted on the later gate, but drawn from the record itself: an open
      // eater prints their own thresholds, a covered one the entry's.
      const gated = { ...eater.entity, ...eater.gate }

      return r.slot(gated, () => characterOf(eater.entity, r))
    }),
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
