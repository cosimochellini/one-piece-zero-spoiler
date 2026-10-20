import {
  type MouseEvent,
  type PointerEvent,
  type RefObject,
  useRef,
} from 'react'

import type { Point, Rect } from '~/components/chartGeometry'
import { panView, zoomView } from '~/components/chartView'

/**
 * The chart frame's hands (`useChartZoom`): a drag pans, two fingers pinch,
 * and a drag is never a click. Apart from the window for length.
 */

/** How far a press moves before it is a drag and not a click. */
const DRAG_PX = 5
/** Half of something: between two fingers. */
const HALF = 0.5

/** The frame's pointer and click handlers. */
export interface ChartHands {
  onClickCapture: (event: MouseEvent) => void
  onPointerCancel: (event: PointerEvent) => void
  onPointerDown: (event: PointerEvent) => void
  onPointerMove: (event: PointerEvent) => void
  onPointerUp: (event: PointerEvent) => void
}

/** A point of the page, in the chart's units under the window. */
export function toChart(element: HTMLElement, view: Rect, at: Point): Point {
  const box = element.getBoundingClientRect()

  return {
    x: view.x + ((at.x - box.left) / box.width) * view.width,
    y: view.y + ((at.y - box.top) / box.height) * view.height,
  }
}

/** What a pointer's move works from. */
interface Gesture {
  element: HTMLDivElement
  last: Point
  move: (next: Rect) => void
  now: Point
  view: Rect
}

/** Two fingers: the gap between them sets the zoom, about their middle. */
function pinch(
  { element, last, move, now, view }: Gesture,
  other: Point,
): void {
  const before = Math.hypot(last.x - other.x, last.y - other.y)
  if (before === 0) {
    return
  }
  const after = Math.hypot(now.x - other.x, now.y - other.y)
  const middle = { x: (now.x + other.x) * HALF, y: (now.y + other.y) * HALF }
  move(zoomView(view, after / before, toChart(element, view, middle)))
}

/** One pointer: the window follows it, as far as the chart goes. */
function drag({ element, last, move, now, view }: Gesture): void {
  const { width } = element.getBoundingClientRect()
  if (width === 0) {
    return
  }
  const unit = view.width / width

  move(
    panView(view, { x: (last.x - now.x) * unit, y: (last.y - now.y) * unit }),
  )
}

/** The presses on the frame: each pointer down, where it began, and whether it dragged. */
interface Presses {
  dragged: boolean
  pointers: Map<number, Point>
  press: null | Point
}

/**
 * A pointer moved on the frame: a pinch with two, a drag once far enough.
 * Says whether the press is now a drag.
 */
function moved(
  presses: Presses,
  event: PointerEvent,
  at: Omit<Gesture, 'last' | 'now'>,
): boolean {
  const last = presses.pointers.get(event.pointerId)
  if (last === undefined) {
    return presses.dragged
  }
  const now = { x: event.clientX, y: event.clientY }
  const other = otherPointer(presses.pointers, event.pointerId)
  presses.pointers.set(event.pointerId, now)
  if (other !== undefined) {
    pinch({ ...at, last, now }, other)
    return true
  }
  if (!presses.dragged && !isDrag(presses.press, now)) {
    return false
  }
  if (!presses.dragged) {
    // Once a press is a drag, the frame keeps the pointer till it lifts.
    at.element.setPointerCapture(event.pointerId)
  }
  drag({ ...at, last, now })
  return true
}

/** The frame's hands: a drag pans, two fingers pinch, a drag is no click. */
export function useHands(
  element: HTMLDivElement | null,
  viewRef: RefObject<Rect>,
  move: (next: Rect) => void,
): ChartHands {
  const pressesRef = useRef<Presses>({
    dragged: false,
    pointers: new Map(),
    press: null,
  })
  const release = (event: PointerEvent): void => {
    const presses = pressesRef.current
    presses.pointers.delete(event.pointerId)
    if (presses.pointers.size === 0) {
      presses.press = null
    }
  }

  return {
    onClickCapture: (event) => {
      // A drag that ends on a stop does not follow its link. A click from
      // the keyboard (`detail` 0) is never a drag's.
      if (!pressesRef.current.dragged || event.detail === 0) {
        return
      }

      event.preventDefault()
      event.stopPropagation()
      pressesRef.current.dragged = false
    },
    onPointerCancel: release,
    onPointerDown: (event) => {
      // Any press ends the last drag, even one the peek keeps for itself:
      // a pan that sent no click must not swallow the next tap.
      pressesRef.current.dragged = false
      // A press in a peek is the peek's: its links, its veil, its ✕.
      if (
        (event.button !== 0 && event.pointerType === 'mouse')
        || (event.target instanceof Element
          && event.target.closest('dialog') !== null)
      ) {
        return
      }
      const at = { x: event.clientX, y: event.clientY }
      pressesRef.current.pointers.set(event.pointerId, at)
      pressesRef.current.press = at
    },
    onPointerMove: (event) => {
      if (element !== null) {
        pressesRef.current.dragged = moved(pressesRef.current, event, {
          element,
          move,
          view: viewRef.current,
        })
      }
    },
    onPointerUp: release,
  }
}

/** Another pointer down on the frame than this one, if there is one. */
function otherPointer(
  pointers: Map<number, Point>,
  id: number,
): Point | undefined {
  for (const [other, at] of pointers) {
    if (other !== id) {
      return at
    }
  }

  return undefined
}

/** Whether a press has moved far enough to be a drag. */
function isDrag(press: null | Point, now: Point): boolean {
  return (
    press !== null && Math.hypot(now.x - press.x, now.y - press.y) >= DRAG_PX
  )
}
