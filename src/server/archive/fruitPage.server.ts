import type { Entity } from '~/data/types'
import type {
  DocumentHead,
  FruitDetail,
  FruitDrawing,
  FruitHistoryEntry,
  FruitView,
  Slot,
} from '~/lib/view/records'

import { gatedOf, SIBLING_COUNT } from './fruits.server'
import { headFor, type HeadKeys } from './head.server'
import { fruitOf } from './project.server'
import type { Reader } from './reader.server'
import { sagaOf } from './sagaLabels.server'

/**
 * A fruit's own page: the stage, its history, the fruits either side of it
 * and the rail of its saga. Apart from the album's module, which it shares
 * only the eaters' gate and the rail's length with.
 */

/** What a fruit's page calls itself, open and under fog. */
const FRUIT_HEAD: HeadKeys = {
  foggedDescription: 'fruit.foggedDescription',
  foggedTitle: 'fruit.foggedTitle',
  pageTitle: 'fruit.pageTitle',
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
export function fruitPage(id: string, r: Reader): FruitPage | undefined {
  const entity = r.archive.getFruit(id)
  const form = entity === undefined ? undefined : r.archive.fruitFormOf(entity)
  if (entity === undefined || form === undefined) {
    return undefined
  }

  const order = r.order(r.archive.fruits)
  const at = order.findIndex((fruit) => fruit.id === id)

  return {
    head: headFor(entity, FRUIT_HEAD, r),
    detail: {
      slot: r.slot(entity, (seen) => fruitOf(seen, form, r)),
      ...storyOf(entity, r),
      previous: neighbourOf(order[at - 1], r),
      next: neighbourOf(order[at + 1], r),
    },
  }
}

/** What a page tells of a fruit beyond its name, empty while it is covered. */
type FruitStory = Pick<
  FruitDetail,
  'drawings' | 'history' | 'saga' | 'sagaRail'
>

/**
 * The saga the fruit is first named in, its drawings, its history and its
 * saga's rail. Under fog all four are empty: a covered fruit's saga is not
 * named, nor anything that would place it.
 */
function storyOf(entity: Entity, r: Reader): FruitStory {
  if (!r.sees(entity)) {
    return { drawings: [], history: [], saga: null, sagaRail: [] }
  }

  return {
    drawings: drawingsOf(entity, r),
    history: historyOf(entity, r),
    saga: sagaOf(unitOf(r), r.threshold(entity), r)?.name[r.locale] ?? null,
    sagaRail: sagaRailOf(entity, r),
  }
}

/**
 * The drawings of an open fruit the reader has reached, oldest first: the
 * fruit and its power, then each redrawing whose gate, the later of its own
 * and the fruit's (`gateOf`), the reader has passed. The same entries
 * `drawingOf` picks the last of, so the last here is the drawing the stage
 * already holds. Empty while only the first is reached: there is nothing to
 * switch between, and the page then sends the one drawing it always did.
 */
function drawingsOf(entity: Entity, r: Reader): FruitDrawing[] {
  const reached = (r.archive.fruitRedrawn[entity.id] ?? []).filter((entry) =>
    r.sees(r.archive.gateOf(entry, entity)),
  )
  if (reached.length === 0) {
    return []
  }

  return [
    { look: 'power', strokes: r.archive.drawings[entity.visual.art] ?? [] },
    ...reached.map(({ look, value }) => ({ look, strokes: value })),
  ]
}

/** The unit the sagas are counted in: a season reader counts episodes. */
function unitOf(r: Reader): 'chapter' | 'episode' {
  return r.mode === 'chapter' ? 'chapter' : 'episode'
}

/** A fruit beside this one in the reader's order, or `null` past either end. */
function neighbourOf(
  entity: Entity | undefined,
  r: Reader,
): null | Slot<FruitView> {
  const form = entity === undefined ? undefined : r.archive.fruitFormOf(entity)
  if (entity === undefined || form === undefined) {
    return null
  }

  return r.slot(entity, (seen) => fruitOf(seen, form, r))
}

/**
 * An open fruit's history as the reader may read it, oldest first: the
 * episode the story names it in, each eater at the gate `fruitEaters` slots
 * them on, and an eater's death or presumed death when the latest status
 * the reader has reached says so. A reversed presumed death is the state at
 * the bookmark, so it is gone again once the reader passes the return. A
 * death is dated no earlier than the eating, the later of the two the way a
 * fact is gated on its record: a fruit's history never has an eater die
 * before they eat it. Ties keep this order, so the naming comes first and
 * each eater's death after their eating. Nothing past the bookmark is here,
 * and nothing counts it.
 */
function historyOf(entity: Entity, r: Reader): FruitHistoryEntry[] {
  const history: FruitHistoryEntry[] = [
    {
      event: 'named',
      revealedAtEpisode: entity.revealedAtEpisode,
      revealedAtChapter: entity.revealedAtChapter,
    },
  ]

  for (const eater of r.archive.eatersOf(entity.id)) {
    if (!r.sees(gatedOf(eater))) {
      continue
    }

    const who = { id: eater.entity.id, name: eater.entity.name[r.locale] }
    history.push({ event: 'eaten', who, ...eater.gate })

    const status = r.archive.reachedOf(r, eater.entity, 'status').at(-1)
    if (status?.value === 'deceased' || status?.value === 'presumed-dead') {
      history.push({
        event: status.value,
        who,
        revealedAtEpisode: Math.max(
          status.gate.revealedAtEpisode,
          eater.gate.revealedAtEpisode,
        ),
        revealedAtChapter: Math.max(
          status.gate.revealedAtChapter,
          eater.gate.revealedAtChapter,
        ),
      })
    }
  }

  return history.toSorted((a, b) => r.threshold(a) - r.threshold(b))
}

/**
 * A rail with fewer than this many fruits is not drawn: one lonely tile
 * says less than no rail.
 */
const SAGA_RAIL_FLOOR = 2

/**
 * The open fruits the story first names in the same saga as this open one,
 * this one left out: the nearest few in the reader's unit, like the kind's
 * rail. Empty when fewer than `SAGA_RAIL_FLOOR` would be on it. Covered fruits are
 * never here, so the rail counts nothing past the bookmark.
 */
function sagaRailOf(entity: Entity, r: Reader): Slot<FruitView>[] {
  const saga = sagaOf(unitOf(r), r.threshold(entity), r)
  const same = r.archive.fruits.filter(
    (fruit) =>
      r.sees(fruit) && sagaOf(unitOf(r), r.threshold(fruit), r) === saga,
  )
  const near = r.nearest(entity, same, SIBLING_COUNT)
  if (near.length < SAGA_RAIL_FLOOR) {
    return []
  }

  return near.flatMap((fruit) => {
    const form = r.archive.fruitFormOf(fruit)

    return form === undefined ?
        []
      : r.slot(fruit, (seen) => fruitOf(seen, form, r))
  })
}
