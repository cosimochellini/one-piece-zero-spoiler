import type { BookmarkMode } from '~/lib/progress/episode'
import { type Gated, thresholdIn } from '~/lib/progress/spoiler'

/**
 * A port's place on the sea chart, in the chart's own box
 * (`~/components/chartGeometry`). Schematic: the stops sit along the route
 * in order, not where the story puts them. Only an open port carries one, so
 * a covered stop's position is never in the HTML. Declared apart from
 * `records.ts` only for that file's length.
 */
export interface ChartPoint {
  x: number
  y: number
  /**
   * Set on a stop the ship does not sail to (Luffy alone, or a place the
   * story only shows): the chart draws it on a thin branch off the route.
   */
  detour?: true
}

/**
 * Which of the ships the reader has reached sailed to a stop: the last one
 * whose own threshold is no later than the stop's, in the reader's unit, or
 * `null` before the first. The places page's chart and a place's own map ask
 * the same question, so the leg into a stop is drawn in the same line on
 * both.
 */
export function sailedBy(
  stop: Gated,
  ships: Gated[],
  mode: BookmarkMode,
): null | number {
  const at = ships.findLastIndex(
    (ship) => thresholdIn(ship, mode) <= thresholdIn(stop, mode),
  )

  return at === -1 ? null : at
}
