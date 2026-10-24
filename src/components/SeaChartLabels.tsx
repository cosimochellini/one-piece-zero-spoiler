import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import {
  boxOf,
  type Orientation,
  type Point,
  project,
  sideOf,
} from '~/components/chartGeometry'
import { layoutLabels } from '~/components/chartLabelLayout'
import type { LabelBox } from '~/components/chartLabels'
import { styles } from '~/components/SeaChart.styles'
import { pointOf, type StopName } from '~/components/seaChartModel'
import type { StopView } from '~/lib/view/places'

const PERCENT = 100
const CURRENT_LETTERS = 20

interface PlacedName {
  at: Point
  box: LabelBox
  id: string
  name: string
}

/** Reached names stay written at every zoom, with leaders when they need room. */
export function StopNames({
  names,
  here,
  orientation,
  scale,
}: {
  here: null | StopView
  names: StopName[]
  orientation: Orientation
  scale: number
}): ReactElement {
  const world = boxOf(orientation)
  const spots = names.map(({ port, side }) => ({
    at: pointOf(port),
    length: port.name.length,
    side: side[orientation],
  }))
  const current =
    here === null ? null : (
      {
        at: pointOf(here),
        length: CURRENT_LETTERS,
        side: sideOf(pointOf(here), orientation),
      }
    )
  const boxes = layoutLabels(spots, { orientation, scale }, current)
  const placed = names.flatMap(({ port }, index): PlacedName[] => {
    const box = boxes[index]
    return box === undefined ?
        []
      : [
          {
            at: project(pointOf(port), orientation),
            box,
            id: port.id,
            name: port.name,
          },
        ]
  })
  const room = { x: world.x * scale, y: world.y * scale }

  return (
    <>
      <Leaders
        labels={placed}
        orientation={orientation}
        scale={scale}
      />
      {placed.map((label) => (
        <NameLabel
          key={label.id}
          label={label}
          room={room}
        />
      ))}
    </>
  )
}

/** Leaders keep a displaced name visibly attached to its own reached island. */
function Leaders({
  labels,
  orientation,
  scale,
}: {
  labels: PlacedName[]
  orientation: Orientation
  scale: number
}): ReactElement {
  const world = boxOf(orientation)
  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${String(world.x)} ${String(world.y)}`}
      {...stylex.props(styles.svg)}
    >
      {labels.map(({ at, box, id }) => (
        <path
          key={id}
          d={`M${String(at.x)} ${String(at.y)}L${String(box.x / scale)} ${String(box.y / scale)}`}
          vectorEffect="non-scaling-stroke"
          {...stylex.props(styles.nameLeader)}
        />
      ))}
    </svg>
  )
}

/** A bounded wrapping label; its source is always an open stop. */
function NameLabel({
  label,
  room,
}: {
  label: PlacedName
  room: Point
}): ReactElement {
  return (
    <span
      data-chart-name={label.id}
      {...stylex.props(
        styles.stopName,
        styles.nameBox(
          `${String((label.box.x / room.x) * PERCENT)}%`,
          `${String((label.box.y / room.y) * PERCENT)}%`,
          `${String(label.box.width)}px`,
        ),
      )}
    >
      {label.name}
    </span>
  )
}
