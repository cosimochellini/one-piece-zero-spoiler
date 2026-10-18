/* Hallmark · pre-emit critique: P5 H4 E4 S5 R4 V5 */
/* Hallmark · genre: atmospheric · macrostructure: Map / Diagram · theme: Sea
 *   Chart (locked) · enrichment: Tier B hand-built SVG (the chart itself; the
 *   ships' own drawings ride on it)
 * · idea: "where the crew is, drawn on a chart that fills in as you go"
 * · differs from the log under it (Narrative Workflow) on macrostructure;
 *   gold stays the one accent: the route sailed and the ship */
import * as stylex from '@stylexjs/stylex'
import { type ReactElement, useId } from 'react'

import { boxOf, type Orientation, ORIGIN } from '~/components/chartGeometry'
import { EpisodeMark } from '~/components/EpisodeMark'
import { styles } from '~/components/SeaChart.styles'
import { SeaRoute, SeaWorld } from '~/components/SeaChartDrawing'
import {
  type ChartModel,
  modelOf,
  pointOf,
  type SeaChartProps,
} from '~/components/seaChartModel'
import { Here, RegionNames, ShipOnRoute, Spot } from '~/components/SeaChartPins'
import { SeaChartStops } from '~/components/SeaChartStops'
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
 * to their entries below; the stops under fog are buttons that say their
 * number and episode and nothing else.
 */
export function SeaChart(props: SeaChartProps): ReactElement {
  const t = useT()
  const model = modelOf(props, t)

  return (
    <div {...stylex.props(styles.chart)}>
      <div {...stylex.props(styles.across)}>
        <Chart
          model={model}
          orientation="across"
        />
      </div>
      <div {...stylex.props(styles.down)}>
        <Chart
          model={model}
          orientation="down"
        />
      </div>
      {model.covered.length === 0 ? null : (
        <p {...stylex.props(styles.count)}>{model.fog}</p>
      )}
      {props.bookmark === null ?
        <EpisodeMark placement="fold" />
      : null}
    </div>
  )
}

/** The chart in one orientation: the drawing, its words and its stops. */
function Chart({
  model,
  orientation,
}: {
  model: ChartModel
  orientation: Orientation
}): ReactElement {
  const id = useId()
  const box = boxOf(orientation)

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
      />
    </div>
  )
}

/**
 * Everything written or set on the chart: the seas' names, the origin, the
 * ships and where the reader is. For the eye only;
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
      {model.marks.map((mark) => {
        return (
          <ShipOnRoute
            key={mark.ship.id}
            mark={mark}
            orientation={orientation}
          />
        )
      })}
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
