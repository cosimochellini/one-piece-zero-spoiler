import {
  type Leg,
  legsOf,
  ORIGIN,
  type Point,
  type Region,
  regionsFor,
  tailOf,
} from '~/components/chartGeometry'
import type { Translate } from '~/i18n/types'
import { type Bookmark, modeOf } from '~/lib/progress/episode'
import { type ChartPoint, sailedBy } from '~/lib/view/chart'
import type { StopView } from '~/lib/view/places'
import type { CoveredRecord, ShipView } from '~/lib/view/records'

/** What the chart is drawn from: the places page's own payload. */
export interface SeaChartProps {
  bookmark: Bookmark
  /** The stops the reader has not reached: a number and an episode each. */
  covered: CoveredRecord[]
  /**
   * The ids of the open stops the index's picks leave on the page, the rest
   * drawn faint, the stops under fog too; `null` while nothing is picked.
   */
  lit?: null | Set<string>
  /** The stops the reader has reached, in their order. */
  open: StopView[]
  /** The ships the reader has reached, in their order. */
  ships: ShipView[]
}

/** A ship drawn on the route, and the stop she stands at. */
export interface ShipMark {
  at: Point
  current: boolean
  ship: ShipView
}

/** Everything both orientations of the chart draw, worked out once. */
export interface ChartModel {
  covered: CoveredRecord[]
  /** The words under the stops under fog: how many are left. */
  fog: string
  /** The last open stop, where the reader is; `null` with none open. */
  here: null | StopView
  legs: Leg[]
  /** As the props have it: `null` while nothing is picked. */
  lit: null | Set<string>
  marks: ShipMark[]
  open: StopView[]
  regions: Region[]
  /** What a screen reader hears for the drawing. */
  summary: string
  /** Where each stop under fog is drawn, in order. */
  tail: Point[]
  total: number
}

/**
 * Where an open stop is drawn. Every place has a point; the origin stands in
 * for the `null` a record that is not a place would carry.
 */
export function pointOf(port: StopView): ChartPoint {
  return port.chart ?? ORIGIN
}

/** An open stop, and which of the reached ships sailed to it. */
interface Reached {
  port: StopView
  ship: null | number
}

/**
 * The chart at this bookmark. Only what the payload already holds goes in:
 * a covered stop is a handle and two thresholds, so its dot is placed on the
 * tail by its rank alone.
 */
export function modelOf(props: SeaChartProps, t: Translate): ChartModel {
  const { covered, open } = props
  const total = open.length + covered.length
  const reached = reachedOf(props)
  const here = open.at(-1) ?? null
  const fog =
    covered.length === 1 ?
      t('chart.fogOne')
    : t('chart.fog', { count: covered.length })
  const where =
    here === null ?
      []
    : [t('places.stage', { index: open.length, total }), here.name]

  return {
    covered,
    fog,
    here,
    legs: legsOf(
      reached.map(({ port, ship }) => ({ at: pointOf(port), ship })),
    ),
    lit: props.lit ?? null,
    marks: marksOf(props.ships, reached),
    open,
    regions: [...regionsFor(open.flatMap((port) => port.sea))],
    summary: [
      t('chart.title'),
      ...where,
      ...(covered.length === 0 ? [] : [fog]),
    ].join('. '),
    tail: tailOf(here === null ? ORIGIN : pointOf(here), covered.length),
    total,
  }
}

/**
 * The ship that reached each open stop: the last one the reader has reached
 * whose own threshold is no later than the stop's, in the reader's unit.
 */
function reachedOf({ bookmark, open, ships }: SeaChartProps): Reached[] {
  const mode = modeOf(bookmark)

  return open.map((port) => ({ port, ship: sailedBy(port, ships, mode) }))
}

/**
 * Where each ship the reader has reached is drawn: the latest at the last
 * stop the ship sails to, and every earlier one, small, at the end of her
 * own stretch. Each carries her drawing as it stands at the bookmark, so a
 * ship's end shows exactly when her own timeline reaches it. An earlier
 * ship is left out while her last stop is the current one: the current ship
 * already stands there.
 */
function marksOf(ships: ShipView[], reached: Reached[]): ShipMark[] {
  const main = reached.findLast(({ port }) => pointOf(port).detour !== true)
  if (main === undefined) {
    return []
  }

  const marks = ships.map((ship, index): null | ShipMark => {
    if (index === ships.length - 1) {
      return { at: pointOf(main.port), current: true, ship }
    }

    const end = reached.findLast((stop) => stop.ship === index)
    return end === undefined || end === main ?
        null
      : { at: pointOf(end.port), current: false, ship }
  })

  return marks.filter((mark) => mark !== null)
}
