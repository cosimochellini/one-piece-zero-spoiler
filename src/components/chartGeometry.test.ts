import { describe, expect, it } from 'vitest'

import {
  across,
  boxOf,
  CHART_HEIGHT,
  CHART_WIDTH,
  cropAround,
  FOG_END,
  nextOf,
  ORIGIN,
  placeIn,
  placeOf,
  project,
  projectRect,
  pullIn,
  pullOf,
  regionsFor,
  REVERSE_MOUNTAIN,
  sideOf,
} from './chartGeometry'
import { legsOf, pathsOf, startsOf, tailLine, tailOf } from './chartRoute'

const a = { x: 1300, y: 100 }
const b = { x: 1200, y: 400 }
const c = { x: 1100, y: 420 }

describe('the chart geometry', () => {
  it('stands the chart upright on a phone, the route running down', () => {
    expect(boxOf('across')).toStrictEqual({ x: 1600, y: 800 })
    expect(boxOf('down')).toStrictEqual({ x: 800, y: 2400 })
    expect(project({ x: 200, y: 300 }, 'across')).toStrictEqual({
      x: 200,
      y: 300,
    })
    // The right edge, where the Grand Line begins, is the top.
    expect(project({ x: 200, y: 300 }, 'down')).toStrictEqual({
      x: 300,
      y: 2100,
    })
    expect(
      projectRect({ x: 10, y: 20, width: 30, height: 40 }, 'down'),
    ).toStrictEqual({ x: 20, y: 2340, width: 40, height: 45 })
  })

  it('opens the regions of the seas entered, Reverse Mountain’s with the Grand Line', () => {
    expect([...regionsFor([])]).toStrictEqual([])
    expect([...regionsFor(['east-blue'])]).toStrictEqual(['east-blue'])
    expect(new Set(regionsFor(['east-blue', 'grand-line']))).toStrictEqual(
      new Set([
        'east-blue',
        'grand-line',
        'calm-belt',
        'red-line',
        'north-blue',
        'west-blue',
        'south-blue',
      ]),
    )
    expect(regionsFor(['grand-line']).has('new-world')).toBe(false)
    expect(regionsFor(['new-world']).has('new-world-calm-belt')).toBe(true)
  })

  it('climbs Reverse Mountain, branches Luffy’s way off and draws no leg to a place only shown', () => {
    const legs = legsOf([
      { at: a, ship: null },
      { at: b, ship: 0 },
      { at: { ...c, line: 'luffy' }, ship: 0 },
      { at: { x: 1000, y: 530, line: 'luffy' }, ship: 0 },
      { at: { x: 800, y: 320, seen: true }, ship: 0 },
      { at: { x: 700, y: 400 }, ship: 1 },
    ])

    expect(legs).toStrictEqual([
      { from: ORIGIN, to: a, line: 'boat' },
      { from: a, to: b, line: 'first', via: [REVERSE_MOUNTAIN] },
      { from: b, to: { ...c, line: 'luffy' }, line: 'luffy' },
      {
        from: { ...c, line: 'luffy' },
        to: { x: 1000, y: 530, line: 'luffy' },
        line: 'luffy',
      },
      { from: b, to: { x: 700, y: 400 }, line: 'second' },
    ])
  })

  it('draws each leg in from where it starts, as one smooth curve per leg', () => {
    const legs = legsOf([
      { at: { x: 860, y: 180 }, ship: null },
      { at: { x: 860, y: 230 }, ship: null },
    ])

    expect(startsOf(legs)).toStrictEqual([0, 0.5])
    expect(startsOf([])).toStrictEqual([])

    const paths = pathsOf(legs, 'across')

    expect(paths).toHaveLength(2)
    expect(paths[0]).toMatch(/^M860 130C[\d. ]+ 860 180$/u)
    expect(paths[1]).toMatch(/^M860 180C[\d. ]+ 860 230$/u)
  })

  it('spaces the stops under fog evenly along the Grand Line to the fog’s end', () => {
    const tail = tailOf({ x: 444, y: 400 }, 4)

    expect(tail.map((point) => point.x)).toStrictEqual([344, 244, 144, 44])
    expect(tail.at(-1)).toStrictEqual(FOG_END)
    expect(tailOf(a, 0)).toStrictEqual([])
    // From East Blue the tail climbs Reverse Mountain first.
    expect(tailLine(a)).toStrictEqual([a, REVERSE_MOUNTAIN, FOG_END])
    expect(tailLine({ x: 900, y: 450 })).toStrictEqual([
      { x: 900, y: 450 },
      { x: 900, y: 400 },
      FOG_END,
    ])
  })

  it('keeps a label on the chart and off the route', () => {
    expect(sideOf({ x: 600, y: 100 }, 'across')).toBe('below')
    expect(sideOf({ x: 600, y: 500 }, 'across')).toBe('above')
    expect(sideOf({ x: 600, y: 100 }, 'down')).toBe('right')
    expect(sideOf({ x: 600, y: 500 }, 'down')).toBe('left')
    expect(
      (['above', 'below', 'left', 'right'] as const).map((side) =>
        across(side),
      ),
    ).toStrictEqual(['below', 'above', 'right', 'left'])
  })

  it('places a point in percentages, and pulls words left as it nears the window’s edge', () => {
    expect(placeOf({ x: 400, y: 200 }, 'across')).toStrictEqual({
      left: '25.00%',
      top: '25.00%',
    })
    expect(pullOf({ x: 400, y: 200 }, 'across', 'below')).toBe(
      'translate(-25.00%, 1rem)',
    )
    expect(pullOf({ x: 400, y: 200 }, 'across', 'above')).toBe(
      'translate(-25.00%, calc(-100% - 1rem))',
    )
    expect(pullOf(a, 'down', 'left')).toBe(
      'translate(calc(-100% - 1rem), -50%)',
    )
    expect(pullOf(a, 'down', 'right')).toBe('translate(1rem, -50%)')
    expect(pullOf({ x: 400, y: 200 }, 'across', null)).toBe(
      'translate(-25.00%, -50%)',
    )

    const window = { x: 200, y: 100, width: 800, height: 400 }

    expect(
      pullIn({ x: 400, y: 200 }, 'below', {
        orientation: 'across',
        view: window,
      }),
    ).toBe('translate(-25.00%, 1rem)')
    expect(placeIn({ x: 400, y: 200 }, 'across', window)).toStrictEqual({
      left: '25.00%',
      top: '25.00%',
    })
  })

  it.each([
    ['ArrowRight', 3, 4],
    ['ArrowDown', 3, 4],
    ['ArrowLeft', 3, 2],
    ['ArrowUp', 3, 2],
    ['ArrowRight', 9, 9],
    ['ArrowLeft', 0, 0],
    ['Home', 5, 0],
    ['End', 5, 9],
    ['Enter', 5, null],
  ])('moves %s from stop %i to %s', (key, from, to) => {
    expect(nextOf(key, from, 10)).toBe(to)
  })
})

describe('the stretch a place’s page frames', () => {
  it('holds every point with sea around it, in the chart’s proportions', () => {
    const crop = cropAround([a, b, c])

    expect(crop.width / crop.height).toBeCloseTo(1.5)

    for (const point of [a, b, c]) {
      expect(point.x).toBeGreaterThan(crop.x)
      expect(point.x).toBeLessThan(crop.x + crop.width)
      expect(point.y).toBeGreaterThan(crop.y)
      expect(point.y).toBeLessThan(crop.y + crop.height)
    }
  })

  it('is never smaller than room for a stop either side', () => {
    expect(cropAround([{ x: 800, y: 400 }])).toStrictEqual({
      x: 620,
      y: 280,
      width: 360,
      height: 240,
    })
  })

  it('stays inside the chart at its edges', () => {
    const corner = cropAround([{ x: 1590, y: 790 }])
    const wide = cropAround([
      { x: 0, y: 0 },
      { x: CHART_WIDTH, y: CHART_HEIGHT },
    ])

    expect(corner.x + corner.width).toBe(CHART_WIDTH)
    expect(corner.y + corner.height).toBe(CHART_HEIGHT)
    expect(wide).toStrictEqual({
      x: 0,
      y: 0,
      width: CHART_WIDTH,
      height: CHART_HEIGHT,
    })
  })
})
