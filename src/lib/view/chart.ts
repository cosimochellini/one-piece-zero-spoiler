import type { BookmarkMode } from '~/lib/progress/episode'
import { type Gated, thresholdIn } from '~/lib/progress/spoiler'

/**
 * A port's place on the sea chart, in the chart's own box
 * (`~/components/chartGeometry`). Close to where Oda puts it, spaced so the
 * names stay clear: the stops sit along the route in order. Only an open
 * port carries one, so a covered stop's position is never in the HTML.
 * Declared apart from `records.ts` only for that file's length.
 */
export interface ChartPoint {
  x: number
  y: number
  /**
   * The island's outline as the chart draws it: path data around the point,
   * in the chart's own units. Only an open port carries one.
   */
  isle?: string
  /**
   * `luffy` on a stop the ship does not sail to, where Luffy goes alone: the
   * chart draws his own line to it off the route.
   */
  line?: 'luffy'
  /** Set on a place the story only shows: a mark, and no leg to it. */
  seen?: true
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
