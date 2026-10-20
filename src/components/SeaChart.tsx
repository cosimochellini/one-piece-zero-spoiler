/* Hallmark · pre-emit critique: P5 H5 E4 S5 R4 V5 */
/* Hallmark · genre: atmospheric · macrostructure: Map / Diagram · theme: Sea
 *   Chart (locked) · enrichment: Tier B hand-built SVG (the world itself: the
 *   Red Line's ridges, Reverse Mountain, waves, a Sea King, the compass; an
 *   outline per island; the ships' own drawings ride on it) · each stop and
 *   ship peeks (popover, a sheet under 40rem: SeaChartPeek.styles)
 * · idea: "the world as Oda draws it, filling in as you go: every place you
 *   have reached named on it, every saga written over its stretch"
 * · differs from the schematic chart before it (#671) on structure: the
 *   world's own layout, a window that zooms and pans across, names always
 *   written; gold stays the one accent: the route sailed and the ship */
import * as stylex from '@stylexjs/stylex'
import { type ReactElement, type ReactNode, useMemo } from 'react'

import {
  boxOf,
  FOG_END,
  type Orientation,
  type Rect,
  wholeOf,
} from '~/components/chartGeometry'
import { EpisodeMark } from '~/components/EpisodeMark'
import { styles } from '~/components/SeaChart.styles'
import { Drawing, ZoomButtons } from '~/components/SeaChartLayers'
import {
  type ChartModel,
  modelOf,
  pointOf,
  type SeaChartProps,
  type ShipMark,
} from '~/components/seaChartModel'
import { FogPeek, ShipPeek, StopPeek } from '~/components/SeaChartPeek'
import { ShipOnRoute } from '~/components/SeaChartPins'
import { SeaChartStops } from '~/components/SeaChartStops'
import {
  type ChartPeek,
  type PeekProps,
  useChartPeek,
} from '~/components/useChartPeek'
import { useChartZoom } from '~/components/useChartZoom'
import { useT } from '~/i18n/LocaleContext'

/**
 * The sea chart at the top of the places page (Hallmark macrostructure Map /
 * Diagram).
 *
 * The world as Oda draws it, the route running from East Blue over Reverse
 * Mountain and on through every stop the reader has reached, gold, in the
 * line of the ship that sailed it, with the ship at the last one and a label
 * that says where that is. Every reached island is drawn, in its saga's hue,
 * and named; each saga's name is written over its stretch. Past the ship the
 * route goes on dashed into fog, one unnamed dot per stop left, spaced
 * evenly to the fog's end. A sea is drawn and named only once the reader has
 * a stop in it; the rest is cloud.
 *
 * Drawn twice, across and upright, and the stylesheet shows the one that
 * fits. Across, the chart is a window that opens on the reader's saga and
 * zooms and pans (`useChartZoom`); a name that would crowd another waits
 * for a closer zoom. Upright, on a phone, the whole chart runs down the page
 * and never moves. The open stops lead to their own pages; the stops under
 * fog are buttons that say their number and episode and nothing else. Every
 * stop and every ship opens a peek. A stop under fog's peek is veiled, and
 * its place comes from the server only when the reader asks.
 */
export function SeaChart(props: SeaChartProps): ReactElement {
  const t = useT()
  const { bookmark, covered, lit, open, sagas, ships } = props
  const model = useMemo(
    () =>
      modelOf({ bookmark, covered, lit: lit ?? null, open, sagas, ships }, t),
    [bookmark, covered, lit, open, sagas, ships, t],
  )

  return (
    <div {...stylex.props(styles.chart)}>
      {/* With no bookmark the whole chart is fog: the way out comes first. */}
      {props.bookmark === null ?
        <EpisodeMark placement="fold" />
      : null}
      <div {...stylex.props(styles.across)}>
        <Chart
          model={model}
          orientation="across"
          peekPort={props.peekPort}
        />
      </div>
      <div {...stylex.props(styles.down)}>
        <Chart
          model={model}
          orientation="down"
          peekPort={props.peekPort}
        />
      </div>
      {model.covered.length === 0 ? null : (
        <p {...stylex.props(styles.count)}>{model.fog}</p>
      )}
    </div>
  )
}

/** What one orientation of the chart is drawn from. */
interface ChartProps {
  model: ChartModel
  orientation: Orientation
  peekPort: SeaChartProps['peekPort']
}

const PERCENT = 100
/** Thousandths of a percent: a fraction of a pixel at the closest zoom. */
const DECIMALS = 3

/** A share of a length, as a CSS percentage. */
function percent(value: number, of: number): string {
  return `${((value / of) * PERCENT).toFixed(DECIMALS)}%`
}

/** The frame's proportions: the chart's, across or upright. */
function ratioOf(orientation: Orientation): number {
  const box = boxOf(orientation)

  return box.x / box.y
}

/** The world placed so the window's part of it fills the frame. */
function worldAt(view: Rect, orientation: Orientation): stylex.StyleXStyles {
  const box = boxOf(orientation)

  return [
    styles.world,
    styles.at(percent(-view.x, view.width), percent(-view.y, view.height)),
    styles.size(percent(box.x, view.width), percent(box.y, view.height)),
  ]
}

/**
 * The chart in one orientation: a frame in the chart's proportions, and in
 * it the world, placed so the window's part of it fills the frame. The
 * world holds the drawing, its words and its stops; the peek a stop opens
 * sits right after the stops, then the ships and the peek one of them has
 * open, so Tab walks from a stop or a ship into its peek.
 */
function Chart({ model, orientation, peekPort }: ChartProps): ReactElement {
  const zoomable = orientation === 'across'
  const { peek, target, trigger } = useChartPeek()
  const { frameRef, hands, scale, show, view, ...buttons } = useChartZoom(
    zoomable ? model.opening : wholeOf(orientation),
    zoomable,
    peek.onDismiss,
  )
  const world = worldAt(view, orientation)
  const shared = { orientation, peek, view }

  return (
    <>
      <div
        ref={frameRef}
        {...hands}
        {...stylex.props(
          styles.frame,
          styles.ratio(ratioOf(orientation)),
          zoomable && styles.pannable,
        )}
      >
        <Clip world={world}>
          <Drawing
            model={model}
            orientation={orientation}
            scale={scale}
          />
          <SeaChartStops
            model={model}
            onReach={show}
            orientation={orientation}
            trigger={trigger}
          />
        </Clip>
        <Peek
          index={target?.kind === 'stop' ? target.index : null}
          model={model}
          peekPort={peekPort}
          {...shared}
        />
        <Clip world={world}>
          <ShipLayer
            marks={model.marks}
            onReach={show}
            orientation={orientation}
            trigger={trigger}
          />
        </Clip>
        <ShipPeekAt
          mark={target?.kind === 'ship' ? model.marks[target.index] : undefined}
          {...shared}
        />
      </div>
      <ZoomButtons
        shown={zoomable}
        {...buttons}
      />
    </>
  )
}

/**
 * One layer of the world, cut off at the window's edge. It never scrolls: a
 * focus the browser would scroll into view is the window's to show, and a
 * scrolled clip would set its layer off the others.
 */
function Clip({
  children,
  world,
}: {
  children: ReactNode
  world: stylex.StyleXStyles
}): ReactElement {
  return (
    <div
      onScroll={(event) => {
        event.currentTarget.scrollTo({ left: 0, top: 0 })
      }}
      {...stylex.props(styles.clip)}
    >
      <div {...stylex.props(world)}>{children}</div>
    </div>
  )
}

/** The peek of the ship at a mark, if there is one there. */
function ShipPeekAt({
  mark,
  ...frame
}: {
  mark: ShipMark | undefined
  orientation: Orientation
  peek: PeekProps
  view: Rect
}): null | ReactElement {
  return mark === undefined ? null : (
      <ShipPeek
        at={mark.at}
        ship={mark.ship}
        {...frame}
      />
    )
}

/** The ships on the route, each a button, under the stops where they meet. */
function ShipLayer({
  marks,
  onReach,
  orientation,
  trigger,
}: {
  marks: ShipMark[]
  /** Brings a ship the focus reaches into the window, when it zooms. */
  onReach: (point: ShipMark['at']) => void
  orientation: Orientation
  trigger: ChartPeek['trigger']
}): ReactElement {
  return (
    <div {...stylex.props(styles.layer)}>
      {marks.map((mark, index) => {
        const peek = trigger({ index, kind: 'ship' }, false)
        return (
          <ShipOnRoute
            key={mark.ship.id}
            mark={mark}
            orientation={orientation}
            trigger={{
              ...peek,
              onFocus: (event) => {
                onReach(mark.at)
                peek.onFocus(event)
              },
            }}
          />
        )
      })}
    </div>
  )
}

/** The peek of the stop at `index` in the route: open, or under fog. */
function Peek({
  index,
  model,
  ...rest
}: Omit<ChartProps, 'model'> & {
  /** The stop whose peek is open; `null` with none. */
  index: null | number
  model: ChartModel
  peek: PeekProps
  view: Rect
}): null | ReactElement {
  const t = useT()
  if (index === null) {
    return null
  }
  const stage = t('places.stage', { index: index + 1, total: model.total })
  const port = model.open[index]
  if (port !== undefined) {
    return (
      <StopPeek
        at={pointOf(port)}
        port={port}
        stage={stage}
        {...rest}
      />
    )
  }

  const offset = index - model.open.length
  const entry = model.covered[offset]
  return entry === undefined ? null : (
      <FogPeek
        // A fresh veil for every stop: one lifted stays with its own stop.
        key={entry.handle}
        at={model.tail[offset] ?? FOG_END}
        entry={entry}
        stage={stage}
        {...rest}
      />
    )
}
