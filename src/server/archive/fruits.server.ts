import { type Eater, eatersOf } from '~/data/dated'
import { fruitFormOf, fruits, fruitsOfForm, getFruit } from '~/data/fruits'
import type { Entity } from '~/data/types'
import type { Locale } from '~/i18n/locales'
import { absoluteEpisodeOf, type Bookmark } from '~/lib/progress/episode'
import type {
  CharacterView,
  DocumentHead,
  FruitBandView,
  FruitDetail,
  FruitEatersView,
  FruitForm,
  FruitMarqueeView,
  FruitSheetView,
  FruitView,
  Slot,
} from '~/lib/view/records'

import { headFor, type HeadKeys } from './head.server'
import { characterOf, deferredOf, fruitOf, specimenOf } from './project.server'
import { type Reader, readerFor } from './reader.server'
import { sagaOf } from './sagaLabels.server'

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
 * How many tiles of the marquee ship their drawings with them: the lead,
 * which draws itself in on arrival, and the two beside it on a phone's
 * first screen. The rest of the rail comes by id as it scrolls into view.
 */
const INLINE_MARQUEE = 3

/**
 * One plate of fruits split at the reader's bookmark. The drawings are most
 * of the album's bytes, and only the first tiles of the first plate are near
 * the screen when it arrives, with the marquee's first tiles (`inline`): the
 * rest come by id.
 */
function bandOf(
  {
    form,
    inline,
    plate,
  }: { form: FruitForm; inline: Set<string>; plate: number },
  r: Reader,
): FruitBandView {
  const band = r.split(fruitsOfForm(form), (entity) =>
    specimenOf(fruitOf(entity, form, r), openEaters(entity.id, r), r),
  )

  return {
    ...band,
    form,
    open: band.open.map((fruit, row) => {
      if (plate === 0 && row < INLINE_FRUITS) {
        return fruit
      }

      // A marquee tile draws the fruit and no eater, so their crests still
      // wait for the album.
      const eaters = fruit.eaters.map((eater) => deferredOf(eater))
      return inline.has(fruit.id) ?
          { ...fruit, eaters }
        : { ...deferredOf(fruit), eaters }
    }),
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

/** Where a bookmark stands in its own unit: the chapter, or the episode. */
function positionOf(bookmark: Bookmark): null | number {
  if (bookmark === null) {
    return null
  }

  return bookmark.mode === 'chapter' ?
      bookmark.chapter
    : absoluteEpisodeOf(bookmark)
}

/**
 * The marquee: the saga the bookmark falls in, and the open fruits whose
 * reveal falls inside it. A fruit is open only up to the bookmark, so the
 * list stops there and its length is the saga so far. `null` with no
 * bookmark, and with no fruit open at all.
 */
function marqueeOf(bookmark: Bookmark, r: Reader): FruitMarqueeView | null {
  const at = positionOf(bookmark)
  const unit = r.mode === 'chapter' ? 'chapter' : 'episode'
  const saga = at === null ? undefined : sagaOf(unit, at)
  const open = r.order(fruits).filter((fruit) => r.sees(fruit))
  const last = open.at(-1)
  if (saga === undefined || last === undefined) {
    return null
  }

  const here = open.filter((fruit) => r.threshold(fruit) >= saga.from)

  return {
    saga: saga.name[r.locale],
    fruits: here.map(({ id }) => ({ id })),
    last: here.length === 0 ? { id: last.id } : null,
  }
}

/** The tiles the marquee shows first: the lead, then the oldest ones. */
function marqueeInline(marquee: FruitMarqueeView | null): Set<string> {
  const fruitsHere = marquee?.fruits ?? []
  const ids = new Set<string>()
  for (const fruit of [
    fruitsHere.at(-1),
    ...fruitsHere.slice(0, INLINE_MARQUEE - 1),
  ]) {
    if (fruit !== undefined) {
      ids.add(fruit.id)
    }
  }

  return ids
}

/**
 * The specimen sheet: the marquee, three plates, and how many fruits the
 * archive files.
 */
export function fruitSheet(bookmark: Bookmark, locale: Locale): FruitSheetView {
  const r = readerFor(bookmark, locale)
  const marquee = marqueeOf(bookmark, r)
  const inline = marqueeInline(marquee)

  return {
    bands: PLATES.map((form, plate) => bandOf({ form, inline, plate }, r)),
    filed: fruits.length,
    marquee,
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
