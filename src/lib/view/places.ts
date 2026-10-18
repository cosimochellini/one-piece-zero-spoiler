/**
 * What a place's own page is allowed to know. Apart from `./records` only
 * for that file's length; the same seam, and the same rule: a place the
 * reader has not reached is its slot's handle and thresholds, and nothing
 * on this page places, names or draws it.
 */

import type { Gated } from '~/lib/progress/spoiler'
import type { ChartPoint } from '~/lib/view/chart'
import type {
  CoveredRecord,
  PlaceForm,
  PortView,
  RecordView,
  Sea,
  Searchable,
  ShipView,
  Slot,
  Stroke,
  TintId,
} from '~/lib/view/records'

/**
 * One stop the reader has reached, as the places page's chart and index draw
 * it: where it sits, and what the index groups, filters and searches it by.
 * Its sentence, facts and log are its own page's.
 */
export interface StopView extends RecordView, Searchable {
  /** Where it sits on the sea chart; `null` for a record not a place. */
  chart: ChartPoint | null
  form: PlaceForm
  /** The saga it is filed under, by its place in route order, from 1. */
  saga: number
  sea: Sea
}

/** A saga the index can filter by: its place in route order, and its name. */
export interface SagaPick {
  number: number
  title: string
}

/** The places page. */
export interface PlacesView {
  /** The stops past the bookmark: a number and an episode each. */
  covered: CoveredRecord[]
  filed: number
  /** The stops the reader has reached, in their order. */
  open: StopView[]
  /** The sagas the open stops are filed under, in route order. */
  sagas: SagaPick[]
  /** The ships the reader has reached, in their order. */
  ships: ShipView[]
}

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

/**
 * One time the story comes back to a place, from its gate on: the episode
 * and the chapter that show it, and a line on what brings it back.
 */
export interface VisitView extends Gated {
  note: string
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
  /**
   * Every later visit the reader has reached, oldest first. Empty under fog,
   * and a visit past the bookmark is never sent.
   */
  visits: VisitView[]
}

/**
 * A ship's own page: her entry and her drawings. No map and no neighbours:
 * a ship is not a stop, and the ship after her, under fog, would tell a
 * reader at the start that she does not last.
 */
export interface ShipDetail {
  /** As a place's: every drawing reached, oldest first; empty under fog. */
  drawings: PlaceDrawing[]
  slot: Slot<ShipView>
}
