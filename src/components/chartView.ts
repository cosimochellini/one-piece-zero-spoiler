import {
  CHART_HEIGHT,
  CHART_WIDTH,
  type Point,
  type Rect,
} from '~/components/chartGeometry'

/**
 * The window onto the chart across, and how it zooms and pans (owner,
 * #728): the part of the chart's box it shows, in the chart's own units,
 * always in the chart's proportions and always inside it. Upright, on a
 * phone, the window is the whole chart and never moves.
 */

/** The most the chart zooms in: a fifth of its width fills the window. */
export const MAX_ZOOM = 5

const RATIO = CHART_WIDTH / CHART_HEIGHT
/** Half of something: the middle of a length. */
const HALF = 0.5
const LEAST_WIDTH = CHART_WIDTH / MAX_ZOOM

/** The whole chart, the window unzoomed. */
export const WHOLE: Rect = {
  x: 0,
  y: 0,
  width: CHART_WIDTH,
  height: CHART_HEIGHT,
}

/** Sea left round the saga the chart opens on: either side, above and below. */
const MARGIN = 90
const MARGIN_Y = 12
/** The least the chart opens on: the reader's saga, never one island. */
const OPENING_WIDTH = 720

/** How far in a window is: 1 for the whole chart. */
export function zoomOf(view: Rect): number {
  return CHART_WIDTH / view.width
}

/** A window kept in the chart's proportions, its zoom limits and its box. */
export function clampView(view: Rect): Rect {
  const width = Math.min(Math.max(view.width, LEAST_WIDTH), CHART_WIDTH)
  const height = width / RATIO

  return {
    x: Math.min(Math.max(view.x, 0), CHART_WIDTH - width),
    y: Math.min(Math.max(view.y, 0), CHART_HEIGHT - height),
    width,
    height,
  }
}

/** The window's middle. */
function middleOf(view: Rect): Point {
  return { x: view.x + view.width * HALF, y: view.y + view.height * HALF }
}

/**
 * The window zoomed by `factor` (above 1 is in) about `anchor`, which stays
 * where it is in the window: the pointer's point, or the middle.
 */
export function zoomView(
  view: Rect,
  factor: number,
  anchor: Point = middleOf(view),
): Rect {
  const width = Math.min(
    Math.max(view.width / factor, LEAST_WIDTH),
    CHART_WIDTH,
  )
  const scale = width / view.width

  return clampView({
    x: anchor.x - (anchor.x - view.x) * scale,
    y: anchor.y - (anchor.y - view.y) * scale,
    width,
    height: width / RATIO,
  })
}

/** The window moved by this much of the chart, kept inside it. */
export function panView(view: Rect, by: Point): Rect {
  return clampView({ ...view, x: view.x + by.x, y: view.y + by.y })
}

/**
 * How far inside the window's edge a point must be to count as shown: a
 * stop's target and a ship's ring stand round it.
 */
const SHOWN_INSET = 0.08

/** The window moved so `point` is well in it, or as it was if it already is. */
export function showing(view: Rect, point: Point): Rect {
  const insetX = view.width * SHOWN_INSET
  const insetY = view.height * SHOWN_INSET
  const inside =
    point.x > view.x + insetX
    && point.x < view.x + view.width - insetX
    && point.y > view.y + insetY
    && point.y < view.y + view.height - insetY

  return inside ? view : (
      clampView({
        ...view,
        x: point.x - view.width * HALF,
        y: point.y - view.height * HALF,
      })
    )
}

/**
 * The window the chart opens on: everything in `points`, with `focus` at
 * its middle where the chart's edges allow. The whole chart with no focus.
 */
export function openingView(points: Point[], focus: null | Point): Rect {
  if (focus === null) {
    return WHOLE
  }

  const reach = { x: 0, y: 0 }
  for (const point of points) {
    reach.x = Math.max(reach.x, Math.abs(point.x - focus.x))
    reach.y = Math.max(reach.y, Math.abs(point.y - focus.y))
  }
  const width = Math.max(
    (reach.x + MARGIN) / HALF,
    ((reach.y + MARGIN_Y) / HALF) * RATIO,
    OPENING_WIDTH,
  )

  return clampView({
    x: focus.x - width * HALF,
    y: focus.y - (width / RATIO) * HALF,
    width,
    height: width / RATIO,
  })
}

/** Whether two windows are the same. */
export function sameRect(a: Rect, b: Rect): boolean {
  return (
    a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height
  )
}
