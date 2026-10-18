import { describe, expect, it } from 'vitest'

import { CHART_HEIGHT, CHART_WIDTH } from '~/components/chartGeometry'
import type { ChartPoint } from '~/lib/view/chart'

import { CHART, chartPointOf } from './chart'
import { orderByMode } from './order'
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
      const route = orderByMode(places, mode).filter(
        (place) => pointAt(place.id).detour !== true,
      )
      const xs = (inEastBlue: boolean): number[] =>
        route
          .filter(
            (place) =>
              (placeDossierOf(place)?.sea === 'east-blue') === inEastBlue,
          )
          .map((place) => pointAt(place.id).x)

      // Towards Reverse Mountain in East Blue, away from it after.
      expect(xs(true)).toStrictEqual(xs(true).toSorted((a, b) => b - a))
      expect(xs(false)).toStrictEqual(xs(false).toSorted((a, b) => a - b))
    },
  )

  it('puts every East Blue stop before the Grand Line and above it', () => {
    for (const place of places) {
      const inEastBlue = placeDossierOf(place)?.sea === 'east-blue'
      const { y } = pointAt(place.id)

      expect(y < 190, place.id).toBe(inEastBlue || place.id === 'mary-geoise')
    }
  })

  it('branches off only where the ship does not sail', () => {
    expect(
      places
        .filter((place) => pointAt(place.id).detour === true)
        .map((place) => place.id),
    ).toStrictEqual(['amazon-lily', 'impel-down', 'marineford', 'mary-geoise'])
  })

  it('has no point for a record that is not a place', () => {
    expect(chartPointOf('monkey-d-luffy')).toBeNull()
  })
})
