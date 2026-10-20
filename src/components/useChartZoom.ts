import { type RefObject, useEffect, useRef, useState } from 'react'

import type { Point, Rect } from '~/components/chartGeometry'
import {
  MAX_ZOOM,
  sameRect,
  showing,
  WHOLE,
  zoomOf,
  zoomView,
} from '~/components/chartView'
import { type ChartHands, toChart, useHands } from '~/components/useChartHands'

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
/** One press of + or −. */
const STEP = 1.6
/** How hard the wheel zooms, per pixel it turns. */
const WHEEL = 0.0025
/** How close to the limit counts as there: a zoom is a float. */
const NEAR = 0.001

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
 * Every move a hand makes calls `onMove` first: an open peek closes rather
 * than drift away from its stop. Bringing a focused stop into view does not.
 */
export function useChartZoom(
  opening: Rect,
  zoomable: boolean,
  onMove: () => void,
): ChartZoom {
  const { move: place, read, view, viewRef } = useWindow(opening)
  const move = (next: Rect): void => {
    onMove()
    place(next)
  }
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
    ...movesOf({ move, opening, place, read, zoomable }),
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
  place,
  read,
  zoomable,
}: {
  move: (next: Rect) => void
  opening: Rect
  /** Moves the window and leaves an open peek alone. */
  place: (next: Rect) => void
  read: () => Rect
  zoomable: boolean
}): Pick<ChartZoom, 'show' | 'toggle' | 'zoomBy'> {
  return {
    show: (point) => {
      place(zoomable ? showing(read(), point) : read())
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
