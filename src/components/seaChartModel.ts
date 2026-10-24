import {
  type Orientation,
  ORIGIN,
  type Point,
  type Rect,
  type Region,
  regionsFor,
} from '~/components/chartGeometry'
import { type Leg, legsOf, tailOf } from '~/components/chartRoute'
import {
  isOnRoute,
  namesOf,
  openingOf,
  pointOf,
  type SagaName,
  type StopName,
} from '~/components/seaChartNames'
import type { Translate } from '~/i18n/types'
import { type Bookmark, modeOf } from '~/lib/progress/episode'
import { sailedBy } from '~/lib/view/chart'
import type { SagaPick, StopView } from '~/lib/view/places'
import type { CoveredRecord, PortView, ShipView } from '~/lib/view/records'

export {
  isOnRoute,
  pointOf,
  type SagaName,
  sagaTintOf,
  type StopName,
} from '~/components/seaChartNames'

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
  /** Trades a stop under fog's handle for the place, once the reader asks. */
  peekPort: (handle: string) => Promise<PortView>
  /** The sagas the open stops are filed under, in route order, named. */
  sagas: SagaPick[]
  /** The orientation the server drew, kept until the page hydrates. */
  served: Orientation
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
  /** The window the chart opens on across: the reader's saga. */
  opening: Rect
  regions: Region[]
  sagaNames: SagaName[]
  /** The open stops' names, the reader's own stop's left to its label. */
  stopNames: StopName[]
  /** What a screen reader hears for the drawing. */
  summary: string
  /** Where each stop under fog is drawn, in order. */
  tail: Point[]
  total: number
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
export function modelOf(
  props: Omit<SeaChartProps, 'peekPort' | 'served'>,
  t: Translate,
): ChartModel {
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
  const main = open.findLast((port) => isOnRoute(pointOf(port))) ?? null

  return {
    covered,
    fog,
    here,
    legs: legsOf(
      reached.map(({ port, ship }) => ({ at: pointOf(port), ship })),
    ),
    lit: props.lit ?? null,
    marks: marksOf(props.ships, reached),
    ...namesOf(open, here, props.sagas),
    open,
    opening: openingOf(open, here),
    regions: [...regionsFor(open.flatMap((port) => port.sea))],
    summary: [
      t('chart.title'),
      ...where,
      ...(covered.length === 0 ? [] : [fog]),
    ].join('. '),
    tail: tailOf(main === null ? ORIGIN : pointOf(main), covered.length),
    total,
  }
}

/**
 * The ship that reached each open stop: the last one the reader has reached
 * whose own threshold is no later than the stop's, in the reader's unit.
 */
function reachedOf({
  bookmark,
  open,
  ships,
}: Omit<SeaChartProps, 'peekPort' | 'served'>): Reached[] {
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
  const main = reached.findLast(({ port }) => isOnRoute(pointOf(port)))
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
