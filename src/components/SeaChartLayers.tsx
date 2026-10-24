import * as stylex from '@stylexjs/stylex'
import { type ReactElement, useId } from 'react'

import { boxOf, type Orientation, ORIGIN } from '~/components/chartGeometry'
import { styles } from '~/components/SeaChart.styles'
import {
  type IsleMark,
  Isles,
  SeaRoute,
  SeaWorld,
} from '~/components/SeaChartDrawing'
import { StopNames } from '~/components/SeaChartLabels'
import {
  type ChartModel,
  isOnRoute,
  pointOf,
  sagaTintOf,
} from '~/components/seaChartModel'
import { Here, RegionNames, SagaNames, Spot } from '~/components/SeaChartPins'
import { Button } from '~/components/ui/Button'
import type { ChartZoom } from '~/components/useChartZoom'
import { useT } from '~/i18n/LocaleContext'
import type { StopView } from '~/lib/view/places'

/**
 * The layers of the sea chart that do not open anything: the drawing, the
 * words written on it, and the zoom's buttons. Apart from `SeaChart` for
 * length.
 */

/** The open stops' islands, each in its saga's hue. */
function islesOf(open: StopView[]): IsleMark[] {
  const isles: IsleMark[] = []
  for (const port of open) {
    const outline = port.chart?.isle
    if (outline !== undefined) {
      isles.push({
        at: pointOf(port),
        id: port.id,
        outline,
        tint: sagaTintOf(port.saga),
      })
    }
  }

  return isles
}

/**
 * The world, its route and its islands, and the words written over them at
 * this scale (`Words`).
 */
export function Drawing({
  model,
  orientation,
  scale,
}: {
  model: ChartModel
  orientation: Orientation
  scale: number
}): ReactElement {
  const id = useId()
  const box = boxOf(orientation)
  const main = model.open.findLast((port) => isOnRoute(pointOf(port)))

  return (
    <>
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
          from={main === undefined ? ORIGIN : pointOf(main)}
          legs={model.legs}
          orientation={orientation}
          tail={model.tail}
        />
        <Isles
          isles={islesOf(model.open)}
          orientation={orientation}
        />
      </svg>
      <Words
        model={model}
        orientation={orientation}
        scale={scale}
      />
    </>
  )
}

/**
 * Under the chart across: how the window moves, then + and −, and the
 * switch between the whole chart and the reader's saga, with a bookmark.
 */
export function ZoomButtons({
  isIn,
  isOut,
  isWhole,
  shown,
  toggle,
  zoomBy,
}: Pick<ChartZoom, 'isIn' | 'isOut' | 'isWhole' | 'toggle' | 'zoomBy'> & {
  /** Only across: upright, the chart does not zoom. */
  shown: boolean
}): null | ReactElement {
  const t = useT()
  if (!shown) {
    return null
  }

  return (
    <div {...stylex.props(styles.zoomRow)}>
      <p {...stylex.props(styles.hint)}>{t('chart.zoomHint')}</p>
      <div
        aria-label={t('chart.zoom')}
        role="group"
        {...stylex.props(styles.zoom)}
      >
        <ZoomStep
          direction={-1}
          limit={isOut}
          zoomBy={zoomBy}
        />
        <ZoomStep
          direction={1}
          limit={isIn}
          zoomBy={zoomBy}
        />
        {toggle === null ? null : (
          <Button
            onClick={toggle}
            sx={styles.zoomButton}
          >
            {t(isWhole ? 'chart.seeSaga' : 'chart.seeAll')}
          </Button>
        )}
      </div>
    </div>
  )
}

/**
 * One step of the zoom, out or in. At its limit it stays focusable
 * (`aria-disabled`) and does nothing, so the focus never falls to the page.
 */
function ZoomStep({
  direction,
  limit,
  zoomBy,
}: Pick<ChartZoom, 'zoomBy'> & {
  direction: -1 | 1
  limit: boolean
}): ReactElement {
  const t = useT()

  return (
    <Button
      aria-disabled={limit}
      aria-label={t(direction === 1 ? 'chart.zoomIn' : 'chart.zoomOut')}
      onClick={() => {
        if (!limit) {
          zoomBy(direction)
        }
      }}
      sx={[styles.zoomButton, limit && styles.zoomLimit]}
    >
      <span aria-hidden="true">{direction === 1 ? '+' : '−'}</span>
    </Button>
  )
}

/**
 * Everything written on the chart: the seas' names, the sagas', the open
 * stops', the origin and where the reader is. For the
 * eye only; the drawing's label and the stops say the same to a screen
 * reader.
 */
function Words({
  model,
  orientation,
  scale,
}: {
  model: ChartModel
  orientation: Orientation
  scale: number
}): ReactElement {
  const t = useT()
  const { here } = model

  return (
    <div
      aria-hidden="true"
      {...stylex.props(styles.layer)}
    >
      <SagaNames
        names={model.sagaNames.filter(
          (name) => scale >= name.from[orientation],
        )}
        orientation={orientation}
      />
      <RegionNames
        orientation={orientation}
        regions={model.regions}
      />
      <StopNames
        here={here}
        names={model.stopNames}
        orientation={orientation}
        scale={scale}
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
