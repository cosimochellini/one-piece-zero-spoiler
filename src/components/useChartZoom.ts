import {
  type MouseEvent,
  type PointerEvent,
  type RefObject,
  useEffect,
  useRef,
  useState,
} from 'react'

import type { Point, Rect } from '~/components/chartGeometry'
import {
  MAX_ZOOM,
  panView,
  sameRect,
  showing,
  WHOLE,
  zoomOf,
  zoomView,
} from '~/components/chartView'

/**
 * The chart's window across, and the hands that move it (owner, #728): Ctrl
 * or ⌘ with the wheel zooms about the pointer (Chrome and Firefox send a
 * trackpad's pinch as the same wheel; Safari zooms the page), a plain wheel
 * scrolls the page; a drag pans; two fingers
 * pinch; and the buttons zoom in, out, and between the whole chart and the
 * reader's saga. Nothing moves the page: a horizontal finger pans, a
 * vertical one scrolls as ever (`touch-action: pan-y` on the frame).
 */

/**
 * How wide the chart is drawn before the page has measured it: across, at
 * its widest; upright, on a common phone.
 */
const ASSUMED_WIDTH = 1200
const ASSUMED_PHONE = 375
/** How far a press moves before it is a drag and not a click. */
const DRAG_PX = 5
/** One press of + or −. */
const STEP = 1.6
/** How hard the wheel zooms, per pixel it turns. */
const WHEEL = 0.0025
/** How close to the limit counts as there: a zoom is a float. */
const NEAR = 0.001
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

/** What the chart reads from its window, and the hands it lends the frame. */
export interface ChartZoom {
  /** Ref for the frame: what it measures and what the wheel turns. */
  frameRef: (element: HTMLDivElement | null) => void
  hands: ChartHands
  /** Whether the window is zoomed as far in, or out, as it goes. */
  isIn: boolean
  isOut: boolean
  /** Whether the window holds the whole chart. */
  isWhole: boolean
  /** Pixels per unit of the chart: what decides which names fit. */
  scale: number
  /** Moves the window so a point is in it: a stop the focus reaches. */
  show: (point: Point) => void
  /**
   * Between the whole chart and the window the chart opened on; `null`
   * when it opened on the whole chart, with no bookmark.
   */
  toggle: (() => void) | null
  view: Rect
  /** Zooms in, or out, by one step about the middle. */
  zoomBy: (direction: -1 | 1) => void
}

/**
 * The window, opening on `opening`, and the hands that move it. Not
 * `zoomable`, it only measures the frame: the window stays as it opened.
 */
export function useChartZoom(opening: Rect, zoomable: boolean): ChartZoom {
  const { move, read, view, viewRef } = useWindow(opening)
  const [element, setElement] = useState<HTMLDivElement | null>(null)
  const hold = zoomable ? element : null
  const width = useFrameWidth(element, zoomable ? ASSUMED_WIDTH : ASSUMED_PHONE)
  useWheel(hold, viewRef, move)

  return {
    frameRef: setElement,
    hands: useHands(hold, viewRef, move),
    isIn: zoomOf(view) >= MAX_ZOOM - NEAR,
    isOut: zoomOf(view) <= 1,
    isWhole: sameRect(view, WHOLE),
    scale: width / view.width,
    ...movesOf({ move, opening, read, zoomable }),
    view,
  }
}

/**
 * The window and the one way to move it, which keeps a ref of it for the
 * hands to read mid-gesture. A new bookmark opens a new saga: the window
 * opens on it again.
 */
function useWindow(opening: Rect): {
  move: (next: Rect) => void
  /** The window as it stands, for a handler to read. */
  read: () => Rect
  view: Rect
  viewRef: RefObject<Rect>
} {
  const [view, setView] = useState(opening)
  const [opened, setOpened] = useState(opening)
  const viewRef = useRef(view)
  if (!sameRect(opened, opening)) {
    setOpened(opening)
    setView(opening)
  }
  useEffect(() => {
    viewRef.current = view
  }, [view])

  return {
    move: (next) => {
      viewRef.current = next
      setView(next)
    },
    read: () => viewRef.current,
    view,
    viewRef,
  }
}

/** What the buttons and the focus do to the window, read as it stands. */
function movesOf({
  move,
  opening,
  read,
  zoomable,
}: {
  move: (next: Rect) => void
  opening: Rect
  read: () => Rect
  zoomable: boolean
}): Pick<ChartZoom, 'show' | 'toggle' | 'zoomBy'> {
  return {
    show: (point) => {
      move(zoomable ? showing(read(), point) : read())
    },
    toggle:
      sameRect(opening, WHOLE) ? null : (
        () => {
          move(sameRect(read(), WHOLE) ? opening : WHOLE)
        }
      ),
    zoomBy: (direction) => {
      move(zoomView(read(), direction === 1 ? STEP : 1 / STEP))
    },
  }
}

/** The frame's width, measured where the browser can, assumed elsewhere. */
function useFrameWidth(
  element: HTMLDivElement | null,
  assumed: number,
): number {
  const [width, setWidth] = useState(assumed)

  useEffect(() => {
    if (element === null || typeof ResizeObserver === 'undefined') {
      return
    }
    const observer = new ResizeObserver(([entry]) => {
      if (entry !== undefined && entry.contentRect.width > 0) {
        setWidth(entry.contentRect.width)
      }
    })
    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [element])

  return width
}

/** A point of the page, in the chart's units under the window. */
function toChart(element: HTMLElement, view: Rect, at: Point): Point {
  const box = element.getBoundingClientRect()

  return {
    x: view.x + ((at.x - box.left) / box.width) * view.width,
    y: view.y + ((at.y - box.top) / box.height) * view.height,
  }
}

/** Ctrl or ⌘ with the wheel zooms about the pointer; a plain wheel scrolls. */
function useWheel(
  element: HTMLDivElement | null,
  viewRef: RefObject<Rect>,
  move: (next: Rect) => void,
): void {
  const moveRef = useRef(move)
  useEffect(() => {
    moveRef.current = move
  })

  useEffect(() => {
    if (element === null) {
      return
    }
    const onWheel = (event: WheelEvent): void => {
      if (!event.ctrlKey && !event.metaKey) {
        return
      }
      event.preventDefault()
      const anchor = toChart(element, viewRef.current, {
        x: event.clientX,
        y: event.clientY,
      })
      moveRef.current(
        zoomView(viewRef.current, Math.exp(-event.deltaY * WHEEL), anchor),
      )
    }
    element.addEventListener('wheel', onWheel, { passive: false })

    return () => {
      element.removeEventListener('wheel', onWheel)
    }
  }, [element, viewRef])
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
function useHands(
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
      pressesRef.current.dragged = false
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
