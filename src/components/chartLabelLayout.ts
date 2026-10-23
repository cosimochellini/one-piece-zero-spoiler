import { boxOf, type Orientation, project } from '~/components/chartGeometry'
import {
  type LabelBox,
  labelBoxOf,
  type NameSpot,
} from '~/components/chartLabels'

/** Label boxes are in rendered pixels, while their source points stay in world units. */
export interface LabelFrame {
  orientation: Orientation
  scale: number
}

const MARGIN = 8
const WIDTH = 144
const STEP = 24
const GAP = 6
const HALVES = 2
const CURRENT_SHIFT = 30

/** Whether two boxes touch, including a small reading gap. */
export function labelsOverlap(a: LabelBox, b: LabelBox): boolean {
  return (
    Math.abs(a.x - b.x) < (a.width + b.width) / HALVES + GAP
    && Math.abs(a.y - b.y) < (a.height + b.height) / HALVES + GAP
  )
}

/** Clamp a box centre while leaving a reading margin at both edges. */
function clamp(at: number, size: number, limit: number): number {
  return Math.max(
    size / HALVES + MARGIN,
    Math.min(at, limit - size / HALVES - MARGIN),
  )
}

/** Keep the complete label inside the world, including names at its edges. */
function inside(label: LabelBox, room: { x: number; y: number }): LabelBox {
  return {
    ...label,
    x: clamp(label.x, label.width, room.x),
    y: clamp(label.y, label.height, room.y),
  }
}

/** A name may wrap, but never disappears because another name is nearby. */
function preferredBox(spot: NameSpot, frame: LabelFrame): LabelBox {
  const raw = labelBoxOf(spot, frame.orientation, frame.scale)
  const width = Math.min(
    raw.width,
    WIDTH,
    boxOf(frame.orientation).x * frame.scale - MARGIN * HALVES,
  )

  return { ...raw, width, height: Math.ceil(raw.width / width) * raw.height }
}

/** Search nearby rows and columns instead of suppressing a crowded label. */
function scanRows(
  wanted: LabelBox,
  shifts: number[],
  {
    obstacles,
    room,
  }: { obstacles: LabelBox[]; room: { x: number; y: number } },
): LabelBox | undefined {
  const rows = Math.ceil(room.y / STEP) * HALVES
  for (let step = 0; step <= rows; step += 1) {
    const offset =
      Math.ceil(step / HALVES) * STEP * (step % HALVES === 0 ? 1 : -1)
    const options = shifts.map((shift) =>
      inside({ ...wanted, x: wanted.x + shift, y: wanted.y + offset }, room),
    )
    const found = options.find((candidate) =>
      obstacles.every((other) => !labelsOverlap(candidate, other)),
    )
    if (found !== undefined) {
      return found
    }
  }

  return undefined
}

/** Prefer short leaders; use the whole world if adjacent columns are full. */
function freeBox(
  wanted: LabelBox,
  obstacles: LabelBox[],
  room: { x: number; y: number },
): LabelBox {
  const columns = Math.ceil(room.x / STEP) * HALVES
  const wide = Array.from(
    { length: columns + 1 },
    (_, step) =>
      Math.ceil(step / HALVES) * STEP * (step % HALVES === 0 ? 1 : -1),
  )
  const nearby = [0, wanted.width + GAP, -wanted.width - GAP]
  // Keep leaders near their island before looking across the whole world.
  for (const shifts of [nearby, wide]) {
    const found = scanRows(wanted, shifts, { obstacles, room })
    if (found !== undefined) {
      return found
    }
  }

  return inside(wanted, room)
}

/** Reserve the larger current-stop label, whose second line gives the stage. */
function currentBox(spot: NameSpot, frame: LabelFrame): LabelBox {
  const label = labelBoxOf(spot, frame.orientation, frame.scale)
  const shift = spot.side === 'above' ? -CURRENT_SHIFT : CURRENT_SHIFT
  return {
    ...label,
    y: label.y + (spot.side === 'above' || spot.side === 'below' ? shift : 0),
    width: 168,
    height: 80,
  }
}

/**
 * All reached names get a position, using reached points alone. Nearby labels
 * move with a leader to their island; covered stops cannot influence placement.
 */
export function layoutLabels(
  spots: NameSpot[],
  frame: LabelFrame,
  here: NameSpot | null = null,
): LabelBox[] {
  const world = boxOf(frame.orientation)
  const room = { x: world.x * frame.scale, y: world.y * frame.scale }
  const obstacles = spots.map(({ at }) => {
    const point = project(at, frame.orientation)
    return {
      x: point.x * frame.scale,
      y: point.y * frame.scale,
      width: 14,
      height: 14,
    }
  })
  if (here !== null) {
    obstacles.push(currentBox(here, frame))
  }
  const labels: LabelBox[] = []
  for (const spot of spots) {
    const label = freeBox(preferredBox(spot, frame), obstacles, room)
    labels.push(label)
    obstacles.push(label)
  }

  return labels
}
