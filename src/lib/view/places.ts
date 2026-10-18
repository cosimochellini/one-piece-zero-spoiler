/**
 * What a place's own page is allowed to know. Apart from `./records` only
 * for that file's length; the same seam, and the same rule: a place the
 * reader has not reached is its slot's handle and thresholds, and nothing
 * on this page places, names or draws it.
 */

import type { Gated } from '~/lib/progress/spoiler'
import type { ChartPoint } from '~/lib/view/chart'
import type {
  PortView,
  RecordView,
  Sea,
  Slot,
  Stroke,
  TintId,
} from '~/lib/view/records'

/** One stop the reader has reached, as a place's map draws it. */
export interface RouteStopView {
  at: ChartPoint
  /** Its sea, which opens a region of the chart; `null` with no dossier. */
  sea: null | Sea
  /** Which of the reached ships sailed here (`sailedBy`); `null` for none. */
  ship: null | number
  tint: TintId
}

/**
 * The stretch of the sea chart a place's page draws: the route the reader
 * has sailed, cropped around this place. Only open stops have a point, so
 * a stop past the bookmark is one of the tail's dots, spaced evenly as on
 * the places page, and never where it lies.
 */
export interface PlaceChartView {
  /** How many stops are under fog: the dots on the tail. */
  fogged: number
  /** This place's index in `route`. */
  here: number
  /** Every stop the reader has reached, in their order. */
  route: RouteStopView[]
}

/**
 * One drawing a place has had, from its gate on: the first at the place's
 * own thresholds, each redrawing at the later of its own and the place's.
 */
export interface PlaceDrawing extends Gated {
  strokes: Stroke[]
}

/** A place's own page. */
export interface PlaceDetail {
  /** The map around the place; `null` while the place is under fog. */
  chart: null | PlaceChartView
  /**
   * Every drawing of the place the reader has reached, oldest first; the
   * last is the one the plate draws. Empty under fog and while only the
   * first is reached, so a drawing past the bookmark is never sent.
   */
  drawings: PlaceDrawing[]
  /** Zero-based, in the reader's order; the page prints it plus one. */
  index: number
  /** The stop after this one in the reader's order; `null` for the last. */
  next: null | Slot<RecordView>
  /** The stop before this one in the reader's order; `null` for the first. */
  previous: null | Slot<RecordView>
  slot: Slot<PortView>
  total: number
}
