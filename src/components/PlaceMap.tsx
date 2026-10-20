import * as stylex from '@stylexjs/stylex'
import { type ReactElement, useId } from 'react'

import {
  CHART_HEIGHT,
  CHART_WIDTH,
  cropAround,
  ORIGIN,
  placeOf,
  type Point,
  type Rect,
  regionsFor,
} from '~/components/chartGeometry'
import { legsOf, tailOf } from '~/components/chartRoute'
import { tintOf } from '~/components/drawing'
import { styles as chart } from '~/components/SeaChart.styles'
import {
  type IsleMark,
  Isles,
  SeaRoute,
  SeaWorld,
} from '~/components/SeaChartDrawing'
import { isOnRoute, sagaTintOf } from '~/components/seaChartNames'
import { Spot } from '~/components/SeaChartPins'
import type { PlaceChartView } from '~/lib/view/places'
import { color, radius, rule } from '~/styles/tokens.stylex'

const PERCENT = 100
/** Past the stop after this one, as a slice's end. */
const NEXT_END = 2

/** A share of a length, as a CSS percentage. */
function percent(value: number, of: number): string {
  return `${String((value / of) * PERCENT)}%`
}

/**
 * The stretch of the sea chart around one place: the stop before it and the
 * stop after it, with the route through them. The places page's chart drawn
 * whole and cropped, so a stop sits exactly where it sits there, in the
 * line of the ship that sailed to it, and the seas the reader has entered
 * are the only ones drawn.
 *
 * Past the reader's last stop the route goes on dashed into fog, its dots
 * spaced evenly as on the places page, so the stop after the reader's is an
 * anonymous dot and not a place. The drawing is one image with one name:
 * the stops either side are links in the band under it.
 */
export function PlaceMap({
  label,
  map,
}: {
  label: string
  map: PlaceChartView
}): ReactElement {
  const id = useId()
  const { crop, from, tail } = stretchOf(map)

  return (
    <div
      aria-label={label}
      role="img"
      {...stylex.props(styles.frame, styles.ratio(crop.width / crop.height))}
    >
      <div
        {...stylex.props(
          styles.world,
          chart.at(percent(-crop.x, crop.width), percent(-crop.y, crop.height)),
          styles.size(
            percent(CHART_WIDTH, crop.width),
            percent(CHART_HEIGHT, crop.height),
          ),
        )}
      >
        <svg
          aria-hidden="true"
          viewBox={`0 0 ${String(CHART_WIDTH)} ${String(CHART_HEIGHT)}`}
          {...stylex.props(styles.svg)}
        >
          <SeaWorld
            id={id}
            orientation="across"
            regions={[...regionsFor(map.route.flatMap(({ sea }) => sea ?? []))]}
          />
          <Isles
            isles={islesOf(map)}
            orientation="across"
          />
          <SeaRoute
            from={from}
            legs={legsOf(map.route)}
            orientation="across"
            still
            tail={tail}
          />
        </svg>
        <Stops
          map={map}
          tail={tail}
        />
      </div>
    </div>
  )
}

/** The reached stops' islands, each in its saga's hue, as on the places page. */
function islesOf({ route }: PlaceChartView): IsleMark[] {
  const isles: IsleMark[] = []
  for (const stop of route) {
    if (stop.at.isle !== undefined) {
      isles.push({
        at: stop.at,
        id: keyOf(stop.at),
        outline: stop.at.isle,
        tint: sagaTintOf(stop.saga),
      })
    }
  }

  return isles
}

/**
 * The stretch to frame, and the fog tail: from the reader's last stop, as on
 * the places page. The frame holds this stop and the ones either side; the
 * one before the first stop is the origin, and the one after the reader's
 * is the first dot of the tail.
 */
function stretchOf({ fogged, here, route }: PlaceChartView): {
  crop: Rect
  from: Point
  tail: Point[]
} {
  // From the last stop the ship sails to, as on the places page: not
  // Luffy's own way, not a place only shown.
  const from = route.findLast(({ at }) => isOnRoute(at))?.at ?? ORIGIN
  const tail = tailOf(from, fogged)
  const near = [
    ...(here === 0 ? [ORIGIN] : []),
    ...route.slice(Math.max(here - 1, 0), here + NEXT_END).map(({ at }) => at),
    ...(here === route.length - 1 ? tail.slice(0, 1) : []),
  ]

  return { crop: cropAround(near), from, tail }
}

/**
 * The origin, every stop the reader has reached in its saga's hue with
 * this one ringed in gold, and the dots under fog. The frame cuts off the
 * ones outside the stretch.
 */
function Stops({
  map,
  tail,
}: {
  map: PlaceChartView
  tail: Point[]
}): ReactElement {
  return (
    <>
      <Spot
        at={ORIGIN}
        orientation="across"
      />
      {map.route.map((stop, index) => {
        return (
          <Dot
            key={keyOf(stop.at)}
            at={stop.at}
            sx={[
              chart.dotOpen(tintOf(sagaTintOf(stop.saga))),
              index === map.here && chart.dotHere,
            ]}
          />
        )
      })}
      {tail.map((point) => {
        return (
          <Dot
            key={keyOf(point)}
            at={point}
            sx={chart.dotFog}
          />
        )
      })}
    </>
  )
}

/** A point, as a React key: no two stops share one. */
function keyOf({ x, y }: Point): string {
  return `${String(x)}-${String(y)}`
}

/** One stop's dot, centred on its point. */
function Dot({ at, sx }: { at: Point; sx: stylex.StyleXStyles }): ReactElement {
  const { left, top } = placeOf(at, 'across')

  return (
    <span {...stylex.props(chart.spot, chart.at(left, top), chart.dot, sx)} />
  )
}

const styles = stylex.create({
  // The window: the stretch's own proportions, the rest of the chart cut off
  // at its edge.
  frame: {
    borderColor: color.rule,
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
  },
  ratio: (ratio: number) => ({ aspectRatio: ratio }),
  // The whole chart, scaled so the stretch fills the window and moved so it
  // sits in it. The stops are placed on it as on the places page.
  world: { position: 'absolute' },
  size: (width: string, height: string) => ({ height, width }),
  svg: { display: 'block', height: '100%', width: '100%' },
})
