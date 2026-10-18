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
