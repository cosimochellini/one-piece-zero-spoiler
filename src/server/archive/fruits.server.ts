import {
  eatersOf,
  fruitFormOf,
  fruits,
  fruitsOfForm,
  getFruit,
} from '~/data/fruits'
import { orderByMode } from '~/data/order'
import type { Entity } from '~/data/types'
import type { Locale } from '~/i18n/locales'
import { type Bookmark, CHAPTER_CEILING, modeOf } from '~/lib/progress/episode'
import { isRevealed } from '~/lib/progress/spoiler'
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
import { characterOf, coveredOf, fruitOf } from './project.server'

/**
 * What the specimen sheet and a fruit's own page are allowed to know.
 *
 * Its own module rather than another band of `pages.server`, which is already
 * at the file's line ceiling, and the two have nothing to say to each other.
 */

/** The plates, in the order the sheet sets them out. */
const PLATES: readonly FruitForm[] = ['paramecia', 'zoan', 'logia']

/** What a fruit's page calls itself, open and under fog. */
const FRUIT_HEAD: HeadKeys = {
  foggedDescription: 'fruit.foggedDescription',
  foggedTitle: 'fruit.foggedTitle',
  pageTitle: 'fruit.pageTitle',
}

/** One row of fruits split at the reader's bookmark. */
function bandOf(
  form: FruitForm,
  bookmark: Bookmark,
  locale: Locale,
): FruitBandView {
  const ordered = orderByMode(fruitsOfForm(form), modeOf(bookmark))

  return {
    form,
    total: ordered.length,
    open: ordered.flatMap((entity) =>
      isRevealed(entity, bookmark) ? [fruitOf(entity, locale, form)] : [],
    ),
    covered: ordered.flatMap((entity) =>
      isRevealed(entity, bookmark) ? [] : [coveredOf(entity)],
    ),
  }
}

/** The specimen sheet: three plates, and how many fruits the archive files. */
export function fruitSheet(bookmark: Bookmark, locale: Locale): FruitSheetView {
  return {
    bands: PLATES.map((form) => bandOf(form, bookmark, locale)),
    filed: fruits.length,
  }
}

/** A fruit's own page: what names it, and what it says. */
export type FruitPage = {
  readonly detail: FruitDetail
  readonly head: DocumentHead
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

  const revealed = isRevealed(entity, bookmark)

  return {
    head: headFor({ bookmark, entity, keys: FRUIT_HEAD, locale, revealed }),
    detail: {
      slot:
        revealed ?
          { open: true, record: fruitOf(entity, locale, form) }
        : { open: false, covered: coveredOf(entity) },
    },
  }
}

/**
 * When an eater may be named: the later of their own threshold and the
 * episode whose dossier entry says they ate it.
 *
 * Both halves matter. A character filed long before the story says what they
 * ate would otherwise appear on the fruit's page the moment the reader met
 * them, which tells the reader something the story has not — and a character
 * the reader has not met must not be named at all. The chapter side is the
 * ceiling because a dossier entry has no chapter, which is also why the whole
 * band is withheld from a reader counting in chapters.
 */
function gateFor(entity: Entity, namedAtEpisode: number): Entity {
  return {
    ...entity,
    revealedAtEpisode: Math.max(entity.revealedAtEpisode, namedAtEpisode),
    // One past the ceiling, not the ceiling itself: `isRevealed` compares a
    // chapter bookmark with `>=`, and the dial can be set to the ceiling, so
    // the ceiling would open this at the last chapter rather than never.
    revealedAtChapter: CHAPTER_CEILING + 1,
  }
}

/** Who the dossiers say ate this fruit, each under its own fog. */
export function fruitEaters(
  id: string,
  bookmark: Bookmark,
  locale: Locale,
): FruitEatersView {
  // The dossiers count in anime episodes. A reader who counts in chapters
  // reaches none of their entries, and is told why instead of shown nothing.
  if (modeOf(bookmark) === 'chapter') {
    return { mode: 'chapterNote' }
  }

  return {
    mode: 'eaters',
    eaters: eatersOf(id).map((eater): Slot<CharacterView> => {
      const gated = gateFor(eater.entity, eater.namedAtEpisode)

      return isRevealed(gated, bookmark) ?
          { open: true, record: characterOf(eater.entity, locale) }
        : { open: false, covered: coveredOf(gated) }
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
): readonly Slot<FruitView>[] {
  const entity = getFruit(id)
  const form = entity === undefined ? undefined : fruitFormOf(entity)
  if (entity === undefined || form === undefined) {
    return []
  }

  return nearest(entity, fruitsOfForm(form)).map((near) => {
    return isRevealed(near, bookmark) ?
        { open: true, record: fruitOf(near, locale, form) }
      : { open: false, covered: coveredOf(near) }
  })
}

/** The records filed closest to this one by threshold, this one excluded. */
function nearest(entity: Entity, among: readonly Entity[]): readonly Entity[] {
  return among
    .flatMap((candidate, order) => {
      if (candidate.id === entity.id) {
        return []
      }
      const distance = Math.abs(
        candidate.revealedAtEpisode - entity.revealedAtEpisode,
      )

      return [{ candidate, distance, order }]
    })
    .toSorted((a, b) => {
      const byDistance = a.distance - b.distance

      return byDistance === 0 ? a.order - b.order : byDistance
    })
    .slice(0, SIBLING_COUNT)
    .map(({ candidate }) => candidate)
}
