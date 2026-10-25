import * as stylex from '@stylexjs/stylex'
import type { ReactElement, ReactNode } from 'react'

import { ArtStrokes } from '~/components/ChartArt'
import {
  across,
  LABELS,
  type Orientation,
  placeOf,
  type Point,
  pullOf,
  type Region,
  type Side,
  sideOf,
} from '~/components/chartGeometry'
import { ART_VIEWBOX, tintOf } from '~/components/drawing'
import { styles } from '~/components/SeaChart.styles'
import {
  pointOf,
  type SagaName,
  type ShipMark,
} from '~/components/seaChartModel'
import type { TriggerProps } from '~/components/useChartPeek'
import { useSeriesT } from '~/i18n/LocaleContext'
import type { StopView } from '~/lib/view/places'

/**
 * The things set on the chart over the drawing, each at a point of it. They
 * are HTML rather than SVG so the words keep their size on a phone, where
 * the drawing is scaled down.
 */

/** Where on the chart, and in which orientation. */
export interface AtProps {
  at: Point
  orientation: Orientation
}

/** The route's origin: a gold ring with no name. */
export function Spot({ at, orientation }: AtProps): ReactElement {
  const { left, top } = placeOf(at, orientation)

  return (
    <span {...stylex.props(styles.spot, styles.at(left, top), styles.origin)} />
  )
}

/** Words set beside a point, on the side that keeps them on the chart. */
function Pin({
  at,
  children,
  orientation,
  side,
  sx,
}: AtProps & {
  children: ReactNode
  side: null | Side
  sx: stylex.StyleXStyles
}): ReactElement {
  const { left, top } = placeOf(at, orientation)

  return (
    <span
      {...stylex.props(
        styles.pin,
        styles.placed(left, top, pullOf(at, orientation, side)),
        sx,
      )}
    >
      {children}
    </span>
  )
}

/** The names of the seas the reader has opened, each centred on its point. */
export function RegionNames({
  orientation,
  regions,
}: {
  orientation: Orientation
  regions: Region[]
}): ReactElement {
  const t = useSeriesT('one-piece')

  return (
    <>
      {regions.map((region) => {
        const label = LABELS[region]
        return label === undefined ? null : (
            <Pin
              key={region}
              at={label.at}
              orientation={orientation}
              side={null}
              sx={[
                styles.regionName,
                orientation === 'down'
                  && label.upright === true
                  && styles.upright,
              ]}
            >
              {t(label.key)}
            </Pin>
          )
      })}
    </>
  )
}

/**
 * Each saga's name, large and faint over the middle of its stops, in its
 * hue: behind the stops' own names, so it reads as the stretch's title.
 * Upright it runs along the band, as the bands' names do.
 */
export function SagaNames({
  names,
  orientation,
}: {
  names: SagaName[]
  orientation: Orientation
}): ReactElement {
  return (
    <>
      {names.map((name) => {
        const { left, top } = placeOf(name.at, orientation)
        return (
          <span
            key={name.number}
            {...stylex.props(
              styles.sagaName(tintOf(name.tint)),
              styles.at(left, top),
              orientation === 'down' && styles.upright,
            )}
          >
            {name.title}
          </span>
        )
      })}
    </>
  )
}

/** Where the reader is: the stop's name and its number, beside it. */
export function Here({
  orientation,
  port,
  stage,
}: {
  orientation: Orientation
  port: StopView
  stage: string
}): ReactElement {
  return (
    <Pin
      at={pointOf(port)}
      orientation={orientation}
      side={sideOf(pointOf(port), orientation)}
      sx={[styles.here, styles.late]}
    >
      <span {...stylex.props(styles.hereName)}>{port.name}</span>
      <span {...stylex.props(styles.hereStage)}>{stage}</span>
    </Pin>
  )
}

/** Where a ship stands off her stop, by side. */
const SHIP_SIDE: Record<Side, stylex.StyleXStyles> = {
  above: styles.shipAbove,
  below: styles.shipBelow,
  left: styles.shipLeft,
  right: styles.shipRight,
}

/**
 * A ship on the route: her own drawing, as it stands at the bookmark, in a
 * gold ring on the side of the stop away from the label. An earlier ship is
 * drawn smaller and in the rule's ink. A button: she opens her peek.
 */
export function ShipOnRoute({
  mark,
  orientation,
  trigger,
}: {
  mark: ShipMark
  orientation: Orientation
  trigger: TriggerProps
}): ReactElement {
  const { left, top } = placeOf(mark.at, orientation)
  const side = across(sideOf(mark.at, orientation))

  return (
    <button
      aria-label={mark.ship.name}
      type="button"
      {...trigger}
      {...stylex.props(
        styles.ship,
        styles.shipButton,
        mark.current ? styles.shipCurrent : styles.shipEarlier,
        SHIP_SIDE[side],
        styles.at(left, top),
        styles.late,
      )}
    >
      <svg
        aria-hidden="true"
        viewBox={ART_VIEWBOX}
        {...stylex.props(styles.shipArt)}
      >
        <ArtStrokes {...mark.ship.visual} />
      </svg>
    </button>
  )
}
