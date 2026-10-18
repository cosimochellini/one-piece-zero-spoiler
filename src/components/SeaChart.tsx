/* Hallmark · pre-emit critique: P5 H4 E4 S5 R4 V5 */
/* Hallmark · genre: atmospheric · macrostructure: Map / Diagram · theme: Sea
 *   Chart (locked) · enrichment: Tier B hand-built SVG (the chart itself; the
 *   ships' own drawings ride on it) · each stop and ship peeks (popover, a
 *   sheet under 40rem: SeaChartPeek.styles)
 * · idea: "where the crew is, drawn on a chart that fills in as you go"
 * · differs from the log under it (Narrative Workflow) on macrostructure;
 *   gold stays the one accent: the route sailed and the ship */
import * as stylex from '@stylexjs/stylex'
import { type ReactElement, useId } from 'react'

import {
  boxOf,
  FOG_END,
  type Orientation,
  ORIGIN,
} from '~/components/chartGeometry'
import { EpisodeMark } from '~/components/EpisodeMark'
import { styles } from '~/components/SeaChart.styles'
import { SeaRoute, SeaWorld } from '~/components/SeaChartDrawing'
import {
  type ChartModel,
  modelOf,
  pointOf,
  type SeaChartProps,
  type ShipMark,
} from '~/components/seaChartModel'
import { FogPeek, ShipPeek, StopPeek } from '~/components/SeaChartPeek'
import { Here, RegionNames, ShipOnRoute, Spot } from '~/components/SeaChartPins'
import { SeaChartStops } from '~/components/SeaChartStops'
import {
  type ChartPeek,
  type PeekProps,
  useChartPeek,
} from '~/components/useChartPeek'
import { useT } from '~/i18n/LocaleContext'

/**
 * The sea chart at the top of the places page (Hallmark macrostructure Map /
 * Diagram).
 *
 * The route runs from the origin through every stop the reader has reached,
 * gold, in the line of the ship that sailed it, with the ship at the last
 * one and a label that says where that is. Past it the route goes on dashed
 * into fog, one unnamed dot per stop left, spaced evenly to the fog's end.
 * A sea is drawn and named only once the reader has a stop in it; the rest
 * is a plain fog wash.
 *
 * Drawn twice, across and upright, and the stylesheet shows the one that
 * fits: a phone gets the route running down the page. The open stops lead
 * to their own pages; the stops under fog are buttons that say their
 * number and episode and nothing else. Every stop and every ship opens a
 * peek: a popover beside it, a sheet on a phone. A stop under fog's peek is
 * veiled, and its place comes from the server only when the reader asks.
 */
export function SeaChart(props: SeaChartProps): ReactElement {
  const t = useT()
  const model = modelOf(props, t)

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

/**
 * The chart in one orientation: the drawing, its words, its stops and
 * ships, and the peek one of them has open. Each peek sits right after what
 * opens it, so Tab walks from a stop or a ship into its peek.
 */
function Chart({ model, orientation, peekPort }: ChartProps): ReactElement {
  const id = useId()
  const box = boxOf(orientation)
  const { peek, target, trigger } = useChartPeek()

  return (
    <div {...stylex.props(styles.frame)}>
      <svg
        aria-label={model.summary}
        role="img"
        viewBox={`0 0 ${String(box.x)} ${String(box.y)}`}
        {...stylex.props(styles.svg)}
      >
        <SeaWorld
          id={id}
          orientation={orientation}
          regions={model.regions}
        />
        <SeaRoute
          from={model.here === null ? ORIGIN : pointOf(model.here)}
          legs={model.legs}
          orientation={orientation}
          tail={model.tail}
        />
      </svg>

      <Words
        model={model}
        orientation={orientation}
      />

      <SeaChartStops
        model={model}
        orientation={orientation}
        trigger={trigger}
      />
      {target?.kind === 'stop' ?
        <Peek
          index={target.index}
          model={model}
          orientation={orientation}
          peek={peek}
          peekPort={peekPort}
        />
      : null}

      <Ships
        marks={model.marks}
        open={target?.kind === 'ship' ? target.index : null}
        orientation={orientation}
        peek={peek}
        trigger={trigger}
      />
    </div>
  )
}

/**
 * The ships on the route, each a button, and the peek of the one open:
 * under the stops where their targets overlap, so a tap there is a stop's.
 */
function Ships({
  marks,
  open,
  orientation,
  peek,
  trigger,
}: {
  marks: ShipMark[]
  open: null | number
  orientation: Orientation
  peek: PeekProps
  trigger: ChartPeek['trigger']
}): ReactElement {
  const ship = open === null ? undefined : marks[open]

  return (
    <>
      <div {...stylex.props(styles.layer)}>
        {marks.map((mark, index) => {
          return (
            <ShipOnRoute
              key={mark.ship.id}
              mark={mark}
              orientation={orientation}
              trigger={trigger({ index, kind: 'ship' }, false)}
            />
          )
        })}
      </div>
      {ship === undefined ? null : (
        <ShipPeek
          at={ship.at}
          orientation={orientation}
          peek={peek}
          ship={ship.ship}
        />
      )}
    </>
  )
}

/** The peek of the stop at `index` in the route: open, or under fog. */
function Peek({
  index,
  model,
  ...rest
}: Omit<ChartProps, 'model'> & {
  index: number
  model: ChartModel
  peek: PeekProps
}): null | ReactElement {
  const t = useT()
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

/**
 * Everything written on the chart: the seas' names, the origin and where
 * the reader is. For the eye only;
 * the drawing's label and the stops say the same to a screen reader.
 */
function Words({
  model,
  orientation,
}: {
  model: ChartModel
  orientation: Orientation
}): ReactElement {
  const t = useT()
  const { here } = model

  return (
    <div
      aria-hidden="true"
      {...stylex.props(styles.layer)}
    >
      <RegionNames
        orientation={orientation}
        regions={model.regions}
      />
      <Spot
        at={ORIGIN}
        orientation={orientation}
      />
      {here === null ? null : (
        <Here
          orientation={orientation}
          port={here}
          stage={t('places.stage', {
            index: model.open.length,
            total: model.total,
          })}
        />
      )}
    </div>
  )
}
