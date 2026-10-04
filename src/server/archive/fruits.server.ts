import { byNumber, byValue } from 'sort-es'

import {
  eatersOf,
  fruitFormOf,
  fruits,
  fruitsOfForm,
  getFruit,
} from '~/data/fruits'
import { orderByMode } from '~/data/order'
import { gateOf, type Reveal, reveal } from '~/data/reveal'
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
import { characterOf, coveredOf, fruitOf, slotOf } from './project.server'

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
function bandOf(form: FruitForm, at: Reveal, locale: Locale): FruitBandView {
  const ordered = orderByMode(fruitsOfForm(form), at.mode)

  return {
    form,
    total: ordered.length,
    open: ordered.flatMap((entity) =>
      at.sees(entity) ? [fruitOf({ at, entity, form, locale })] : [],
    ),
    covered: ordered.flatMap((entity) =>
      at.sees(entity) ? [] : [coveredOf(entity)],
    ),
  }
}

/** The specimen sheet: three plates, and how many fruits the archive files. */
export function fruitSheet(bookmark: Bookmark, locale: Locale): FruitSheetView {
  const at = reveal(bookmark)

  return {
    bands: PLATES.map((form) => bandOf(form, at, locale)),
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

  const at = reveal(bookmark)
  const revealed = at.sees(entity)

  return {
    head: headFor({ at, entity, keys: FRUIT_HEAD, locale, revealed }),
    detail: {
      slot:
        revealed ?
          { open: true, record: fruitOf({ at, entity, form, locale }) }
        : { open: false, covered: coveredOf(entity) },
    },
  }
}

/**
 * Who the dossiers say ate this fruit, each under its own fog: named from the
 * later of their own threshold and the episode whose dossier entry says they
 * ate it (`gateOf`).
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
  const at = reveal(bookmark)

  return {
    mode: 'eaters',
    eaters: eatersOf(id).map((eater): Slot<CharacterView> => {
      const gated = {
        ...eater.entity,
        ...gateOf(eater.namedAtEpisode, eater.entity),
      }

      return at.sees(gated) ?
          { open: true, record: characterOf(eater.entity, locale, at) }
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

  const at = reveal(bookmark)

  return nearest(entity, fruitsOfForm(form), at).map((near) => {
    return slotOf(near, at, (found) =>
      fruitOf({ at, entity: found, form, locale }),
    )
  })
}

/**
 * The records filed closest to this one, this one excluded.
 *
 * Nearness is measured in whatever the reader counts in, because the page
 * prints this fruit's threshold in that unit and a rail sorted by the other
 * one would be a neighbourhood the reader cannot see they are in.
 */
function nearest(
  entity: Entity,
  among: readonly Entity[],
  at: Reveal,
): readonly Entity[] {
  const here = at.threshold(entity)

  return among
    .filter((candidate) => candidate.id !== entity.id)
    .toSorted(
      byValue(
        (candidate) => Math.abs(at.threshold(candidate) - here),
        byNumber(),
      ),
    )
    .slice(0, SIBLING_COUNT)
}
