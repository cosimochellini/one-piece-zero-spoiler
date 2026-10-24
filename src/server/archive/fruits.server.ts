import type { Eater, Entity } from '~/data/types'
import type { Locale } from '~/i18n/locales'
import { getDictionary } from '~/i18n/translate'
import {
  absoluteEpisodeOf,
  type Bookmark,
  serialiseBookmark,
} from '~/lib/progress/episode'
import type {
  FruitAlbumView,
  FruitPlateCount,
  FruitSheetView,
} from '~/lib/view/fruits'
import type {
  CharacterView,
  Faction,
  FruitBandView,
  FruitEatersView,
  FruitFactionRef,
  FruitFactionView,
  FruitForm,
  FruitMarqueeView,
  FruitSagaView,
  FruitView,
  Slot,
} from '~/lib/view/records'

import { handleOf } from './handle.server'
import { characterOf, deferredOf, fruitOf, specimenOf } from './project.server'
import type { Reader } from './reader.server'
import { type SagaStart, sagaStarts } from './sagaLabels.server'

/**
 * What the specimen sheet and a fruit's own page are allowed to know.
 *
 * Its own module rather than another band of `pages.server`: the two have
 * nothing to say to each other.
 */

/** The plates, in the order the sheet sets them out. */
const PLATES: FruitForm[] = ['paramecia', 'zoan', 'logia']

/**
 * How many tiles of the first plate ship their drawings with them: a phone's
 * first screen of the album, two across, and the first row of a wide one.
 */
const INLINE_FRUITS = 6

/**
 * One plate of fruits split at the reader's bookmark. The drawings are most
 * of the album's bytes, and only the first tiles of the first plate are near
 * the screen when it arrives: the rest come by id as they scroll into view.
 */
function bandOf(form: FruitForm, plate: number, r: Reader): FruitBandView {
  const band = r.split(r.archive.fruitsOfForm(form), (entity) =>
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
export function gatedOf(eater: Eater): Entity {
  return { ...eater.entity, ...eater.gate }
}

/**
 * The eaters of a fruit the reader has reached, in `eatersOf` order. The rest
 * are dropped rather than covered: a tile that kept a place for them would
 * count them, and a count is a spoiler too.
 */
function openEaters(id: string, r: Reader): Entity[] {
  return r.archive
    .eatersOf(id)
    .flatMap((eater) => (r.sees(gatedOf(eater)) ? [eater.entity] : []))
}

/** Where a bookmark stands in its own unit: the chapter, or the episode. */
function positionOf(bookmark: Bookmark, r: Reader): null | number {
  if (bookmark === null) {
    return null
  }

  return bookmark.mode === 'chapter' ?
      bookmark.chapter
    : absoluteEpisodeOf(bookmark, r.archive.series)
}

/** A fruit as the marquee draws it, with its strokes or waiting for them. */
function marqueeFruitOf(
  entity: Entity,
  whole: boolean,
  r: Reader,
): FruitView[] {
  const form = r.archive.fruitFormOf(entity)
  if (form === undefined) {
    return []
  }
  const fruit = fruitOf(entity, form, r)

  return [whole ? fruit : deferredOf(fruit)]
}

/**
 * The marquee: the saga the bookmark falls in, and the open fruits whose
 * reveal falls inside it. A fruit is open only up to the bookmark, so the
 * list stops there and its length is the saga so far. `null` with no
 * bookmark, and with no fruit open at all.
 *
 * The lead, the latest, draws itself in on arrival, so its drawing comes
 * whole; the rest of the rail's come by id as it scrolls.
 */
function marqueeOf(bookmark: Bookmark, r: Reader): FruitMarqueeView | null {
  const at = positionOf(bookmark, r)
  const starts = sagaStarts(r.mode === 'chapter' ? 'chapter' : 'episode', r)
  const group =
    at === null ? -1 : starts.findLastIndex((start) => start.from <= at)
  const saga = starts[group]
  const open = r.order(r.archive.fruits).filter((fruit) => r.sees(fruit))
  const last = open.at(-1)
  if (saga === undefined || last === undefined) {
    return null
  }

  const here = open.filter((fruit) => r.threshold(fruit) >= saga.from)

  return {
    saga: saga.name[r.locale],
    group,
    fruits: here.flatMap((fruit, row) =>
      marqueeFruitOf(fruit, row === here.length - 1, r),
    ),
    last:
      here.length === 0 ? (marqueeFruitOf(last, false, r)[0] ?? null) : null,
  }
}

/** The sagas that open by this point, in route order, each still empty. */
function reachedOf(
  starts: SagaStart[],
  at: number,
  locale: Locale,
): FruitSagaView[] {
  const sagas: FruitSagaView[] = []
  for (const saga of starts) {
    if (saga.from <= at) {
      sagas.push({ saga: saga.name[locale], open: [], covered: [] })
    }
  }

  return sagas
}

/**
 * The saga view: every saga the bookmark has reached, in route order, each
 * with the fruits whose reveal falls in it, open by id and covered by handle,
 * in the reader's order. A covered fruit in a saga the bookmark has not
 * reached goes to `later` and nowhere else, so no saga past the bookmark is
 * named or counted. Refs only: the records are the plates' already. Empty
 * with no bookmark, which has the wall and no saga view.
 */
function sagasOf(
  bookmark: Bookmark,
  r: Reader,
): Pick<FruitAlbumView, 'later' | 'sagas'> {
  const at = positionOf(bookmark, r)
  if (at === null) {
    return { later: [], sagas: [] }
  }

  const starts = sagaStarts(r.mode === 'chapter' ? 'chapter' : 'episode', r)
  const sagas = reachedOf(starts, at, r.locale)
  const later: string[] = []

  for (const fruit of r.order(r.archive.fruits)) {
    const group =
      sagas[starts.findLastIndex((saga) => saga.from <= r.threshold(fruit))]
    if (r.sees(fruit)) {
      group?.open.push({ id: fruit.id })
    } else if (group === undefined) {
      later.push(handleOf(fruit.id, r.archive))
    } else {
      group.covered.push(handleOf(fruit.id, r.archive))
    }
  }

  return { later, sagas }
}

/**
 * The faction view: every open fruit under the faction of each of its open
 * eaters, as the latest affiliation entry the reader has reached tags them,
 * and under every faction an entry names. A fruit two eaters put in one group
 * is one ref there, naming both. An open eater with no entry reached yet goes
 * to the `null` group, which comes last; the rest by size, then by name in
 * the reader's language. Covered fruits and covered eaters are not here at
 * all, so a faction only a covered eater stands in is never named. Refs
 * only, like the saga view's; empty with no bookmark.
 */
function factionGroupsOf(r: Reader): FruitFactionView[] {
  const groups = new Map<Faction | null, FruitFactionRef[]>()
  const open = r.order(r.archive.fruits).filter((fruit) => r.sees(fruit))

  for (const fruit of open) {
    const eaters = openEaters(fruit.id, r)
    for (const [at, eater] of eaters.entries()) {
      for (const faction of groupsOfEater(eater, r)) {
        fileUnder(groups, faction, { id: fruit.id, at })
      }
    }
  }

  return [...groups]
    .map(([faction, refs]) => ({ faction, open: refs }))
    .toSorted(byGroup(r.locale))
}

/** The groups an open eater stands in: their factions, or `null` for none yet. */
function groupsOfEater(eater: Entity, r: Reader): (Faction | null)[] {
  const factions = r.archive.factionsOf(r, eater) ?? []

  return factions.length === 0 ? [null] : factions
}

/**
 * Files a fruit under a faction, naming the eater who put it there. The
 * fruits come in order, so a fruit already there is the group's last.
 */
function fileUnder(
  groups: Map<Faction | null, FruitFactionRef[]>,
  faction: Faction | null,
  { at, id }: { at: number; id: string },
): void {
  const group = groups.get(faction) ?? []
  const last = group.at(-1)
  if (last?.id === id) {
    last.eaters.push(at)
  } else {
    group.push({ id, eaters: [at] })
  }
  groups.set(faction, group)
}

/** No faction last; the rest most fruits first, then by name in this locale. */
function byGroup(
  locale: Locale,
): (a: FruitFactionView, b: FruitFactionView) => number {
  const dictionary = getDictionary(locale)
  const label = ({ faction }: FruitFactionView): string =>
    faction === null ? '' : dictionary[`faction.${faction}`]

  return (a, b) => {
    const none = Number(a.faction === null) - Number(b.faction === null)
    if (none !== 0) {
      return none
    }
    const size = b.open.length - a.open.length

    return size === 0 ? label(a).localeCompare(label(b), locale) : size
  }
}

/** A plate's counts: the fruits of its kind the reader has reached, and all. */
function plateOf(form: FruitForm, r: Reader): FruitPlateCount {
  const all = r.archive.fruitsOfForm(form)

  return {
    form,
    opened: all.filter((fruit) => r.sees(fruit)).length,
    total: all.length,
  }
}

/**
 * The specimen sheet as the server renders it: the marquee, the plates'
 * counts and how many fruits the archive files. The plates themselves are
 * `fruitAlbum`'s, which the page asks for once it is in the browser.
 */
export function fruitSheet(r: Reader): FruitSheetView {
  return {
    filed: r.archive.fruits.length,
    marquee: marqueeOf(r.bookmark, r),
    plates: PLATES.map((form) => plateOf(form, r)),
  }
}

/**
 * The album: three plates, the sagas the bookmark has reached and the
 * factions its open eaters stand in, with the bookmark it was read at.
 */
export function fruitAlbum(r: Reader): FruitAlbumView {
  const { bookmark } = r

  return {
    at: bookmark === null ? '' : serialiseBookmark(bookmark),
    bands: PLATES.map((form, plate) => bandOf(form, plate, r)),
    factions: factionGroupsOf(r),
    ...sagasOf(bookmark, r),
  }
}

/**
 * Who the dossiers say ate this fruit, each under its own fog: named from the
 * later of their own threshold and the dossier entry that says they ate it
 * (`eatersOf` in `~/data/series/one-piece/dated`).
 *
 * Both halves matter. A character filed long before the story says what they
 * ate would otherwise appear on the fruit's page the moment the reader met
 * them, which tells the reader something the story has not — and a character
 * the reader has not met must not be named at all.
 */
export function fruitEaters(id: string, r: Reader): FruitEatersView {
  return {
    mode: 'eaters',
    eaters: r.archive
      .eatersOf(id)
      .map((eater): Slot<CharacterView> =>
        r.slot(gatedOf(eater), () => characterOf(eater.entity, r)),
      ),
  }
}

// One row of specimens, which is what the rail holds before it wraps.
export const SIBLING_COUNT = 4

/** The fruits of the same kind filed nearest this one, this one left out. */
export function fruitSiblings(id: string, r: Reader): Slot<FruitView>[] {
  const entity = r.archive.getFruit(id)
  const form = entity === undefined ? undefined : r.archive.fruitFormOf(entity)
  if (entity === undefined || form === undefined) {
    return []
  }

  return r
    .nearest(entity, r.archive.fruitsOfForm(form), SIBLING_COUNT)
    .map((near) => r.slot(near, (found) => fruitOf(found, form, r)))
}
