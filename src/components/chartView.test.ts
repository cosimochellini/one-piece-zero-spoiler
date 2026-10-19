import { describe, expect, it } from 'vitest'

import {
  clampView,
  MAX_ZOOM,
  openingView,
  panView,
  showing,
  WHOLE,
  zoomOf,
  zoomView,
} from './chartView'

describe('the chart’s window', () => {
  it('zooms about its anchor, which stays where it was in the window', () => {
    const view = zoomView(WHOLE, 2, { x: 400, y: 200 })

    expect(view).toStrictEqual({ x: 200, y: 100, width: 800, height: 400 })
    expect(zoomOf(view)).toBe(2)
  })

  it('never zooms out past the whole chart nor in past its limit', () => {
    expect(zoomView(WHOLE, 0.5)).toStrictEqual(WHOLE)
    expect(zoomOf(zoomView(WHOLE, 100))).toBe(MAX_ZOOM)
  })

  it('pans inside the chart and no further', () => {
    const view = { x: 0, y: 0, width: 800, height: 400 }

    expect(panView(view, { x: -50, y: -50 })).toStrictEqual(view)
    expect(panView(view, { x: 5000, y: 5000 })).toStrictEqual({
      x: 800,
      y: 400,
      width: 800,
      height: 400,
    })
    expect(clampView({ x: 0, y: 0, width: 100, height: 10 }).height).toBe(160)
  })

  it('moves to a point outside it, and stays put for one inside', () => {
    const view = { x: 0, y: 0, width: 800, height: 400 }

    expect(showing(view, { x: 100, y: 100 })).toBe(view)
    expect(showing(view, { x: 1200, y: 600 })).toStrictEqual({
      x: 800,
      y: 400,
      width: 800,
      height: 400,
    })
  })

  it('opens on the points round the focus, or on everything with none', () => {
    expect(openingView([], null)).toStrictEqual(WHOLE)

    const view = openingView(
      [
        { x: 1000, y: 400 },
        { x: 1200, y: 300 },
      ],
      { x: 1100, y: 400 },
    )

    expect(view.x + view.width / 2).toBe(1100)
    expect(view.width).toBeGreaterThanOrEqual(380)
    expect(view.width / view.height).toBe(2)
  })
})
