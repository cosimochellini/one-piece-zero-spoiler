import { describe, expect, it } from 'vitest'

import {
  BELT_TOP,
  CHART_HEIGHT,
  CHART_WIDTH,
  RED_LINE_X,
} from '~/components/chartGeometry'
import { orderByMode } from '~/data/order'
import type { ChartPoint } from '~/lib/view/chart'

import { ISLES } from './art/isles'
import { CHART, chartPointOf } from './chart'
import { placeDossierOf, places } from './places'

/** A place's point, which every place has. */
function pointAt(id: string): ChartPoint {
  const point = chartPointOf(id)
  if (point === null) {
    throw new Error(`no point on the sea chart for ${id}`)
  }

  return point
}

describe('the sea chart', () => {
  it('gives every place a point inside the chart, and nothing else one', () => {
    expect(new Set(Object.keys(CHART))).toStrictEqual(
      new Set(places.map((place) => place.id)),
    )

    for (const place of places) {
      const { x, y } = pointAt(place.id)

      expect(x, place.id).toBeGreaterThanOrEqual(0)
      expect(x, place.id).toBeLessThanOrEqual(CHART_WIDTH)
      expect(y, place.id).toBeGreaterThanOrEqual(0)
      expect(y, place.id).toBeLessThanOrEqual(CHART_HEIGHT)
    }
  })

  it.each(['episode', 'chapter'] as const)(
    'never sails back along the route in %s order',
    (mode) => {
      const route = orderByMode(places, mode).filter((place) => {
        const point = pointAt(place.id)
        return point.line === undefined && point.seen !== true
      })
      const xs = (inEastBlue: boolean): number[] =>
        route
          .filter(
            (place) =>
              (placeDossierOf(place)?.region === 'east-blue') === inEastBlue,
          )
          .map((place) => pointAt(place.id).x)

      // Towards Reverse Mountain in East Blue, away from it after.
      expect(xs(true)).toStrictEqual(xs(true).toSorted((a, b) => a - b))
      expect(xs(false)).toStrictEqual(xs(false).toSorted((a, b) => b - a))
    },
  )

  it('puts every East Blue stop above the Grand Line, in Paradise’s half', () => {
    for (const place of places) {
      const inEastBlue = placeDossierOf(place)?.region === 'east-blue'
      const { x, y } = pointAt(place.id)

      expect(y < BELT_TOP, place.id).toBe(inEastBlue)
      expect(inEastBlue && x < RED_LINE_X, place.id).toBe(false)
    }
  })

  it('draws Luffy’s own line only where he goes alone, and only shows Mary Geoise', () => {
    expect(
      places
        .filter((place) => pointAt(place.id).line === 'luffy')
        .map((place) => place.id),
    ).toStrictEqual(['amazon-lily', 'impel-down', 'marineford'])
    expect(
      places
        .filter((place) => pointAt(place.id).seen === true)
        .map((place) => place.id),
    ).toStrictEqual(['mary-geoise'])
  })

  it('gives every place but Mary Geoise an island’s outline', () => {
    expect(
      places
        .filter((place) => pointAt(place.id).isle === undefined)
        .map((place) => place.id),
    ).toStrictEqual(['mary-geoise'])
    expect(Object.keys(ISLES).every((id) => CHART[id] !== undefined)).toBe(true)
  })

  it('has no point for a record that is not a place', () => {
    expect(chartPointOf('monkey-d-luffy')).toBeNull()
  })
})
