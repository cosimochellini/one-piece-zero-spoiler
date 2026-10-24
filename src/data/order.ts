import { byNumber, byValues } from 'sort-es'

import type { BookmarkMode } from '~/lib/progress/episode'
import { thresholdIn } from '~/lib/progress/spoiler'

import type { Entity, RoutePosition } from './types'

/**
 * Sorts records by the threshold the reader counts in.
 *
 * The anime and the manga do not introduce every record in the same order
 * (Shanks is on the first page of the manga and in the fourth episode of the
 * anime), and the chart, the log and the strip all rely on the open rows
 * being a prefix of the list. Sorting by the mode's own threshold is what
 * keeps that true in every mode; the other threshold breaks ties, so a list
 * is stable across the three.
 */
export function orderByMode(entries: Entity[], mode: BookmarkMode): Entity[] {
  const other = mode === 'chapter' ? 'episode' : 'chapter'

  return entries.toSorted(
    byValues([
      [(entity) => thresholdIn(entity, mode), byNumber()],
      [(entity) => thresholdIn(entity, other), byNumber()],
    ]),
  )
}

/**
 * Where a record falls along a drawn route, and what lies either side of it.
 *
 * `drawn` is handed in, already in the reader's unit, rather than worked out
 * here: the page counts its open records along the same list, and computing
 * it twice would let the strip and the "waypoint 23 of 66" line disagree.
 */
export function routePositionOf(
  entity: Entity,
  drawn: Entity[],
): RoutePosition {
  const index = drawn.findIndex((candidate) => candidate.id === entity.id)

  return {
    index,
    total: drawn.length,
    // No `index > 0` guard: a negative index reads off the front of the array
    // and is `undefined` there too, which is the answer either way.
    previous: drawn[index - 1],
    next: drawn[index + 1],
  }
}
