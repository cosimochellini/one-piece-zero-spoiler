import { describe, expect, it } from 'vitest'

import {
  across,
  boxOf,
  FOG_END,
  legsOf,
  nextOf,
  ORIGIN,
  pathOf,
  placeOf,
  project,
  projectRect,
  pullOf,
  regionsFor,
  sideOf,
  startsOf,
  tailOf,
} from './chartGeometry'

const a = { x: 100, y: 100 }
const b = { x: 200, y: 300 }
const c = { x: 300, y: 300 }

describe('the chart geometry', () => {
  it('stands the chart upright on a phone, the route running down', () => {
    expect(boxOf('across')).toStrictEqual({ x: 1200, y: 600 })
    expect(boxOf('down')).toStrictEqual({ x: 600, y: 1800 })
    expect(project(b, 'across')).toStrictEqual(b)
    expect(project(b, 'down')).toStrictEqual({ x: 300, y: 300 })
    expect(
      projectRect({ x: 10, y: 20, width: 30, height: 40 }, 'down'),
    ).toStrictEqual({ x: 20, y: 15, width: 40, height: 45 })
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

  it('runs the main line from the origin and branches a detour off it', () => {
    const legs = legsOf([
      { at: a, ship: null },
      { at: b, ship: 0 },
      { at: { ...c, detour: true }, ship: 0 },
      { at: { x: 320, y: 320, detour: true }, ship: 0 },
      { at: { x: 400, y: 300 }, ship: 1 },
    ])

    expect(legs).toStrictEqual([
      { from: ORIGIN, to: a, line: 'boat' },
      { from: a, to: b, line: 'first' },
      { from: b, to: { ...c, detour: true }, line: 'branch' },
      {
        from: { ...c, detour: true },
        to: { x: 320, y: 320, detour: true },
        line: 'branch',
      },
      { from: b, to: { x: 400, y: 300 }, line: 'second' },
    ])
  })

  it('draws each leg in from where it starts along the route', () => {
    const legs = legsOf([
      { at: { x: 520, y: 200 }, ship: null },
      { at: { x: 520, y: 300 }, ship: null },
    ])

    expect(startsOf(legs)).toStrictEqual([0, 0.5])
    expect(startsOf([])).toStrictEqual([])
    expect(pathOf(legs, 'across')).toBe('M520 100L520 200M520 200L520 300')
  })

  it('spaces the stops under fog evenly to the fog’s end, whatever they are', () => {
    const tail = tailOf({ x: 1085, y: 270 }, 4)

    expect(tail.map((point) => point.x)).toStrictEqual([1110, 1135, 1160, 1185])
    expect(tail.at(-1)).toStrictEqual(FOG_END)
    expect(tailOf(a, 0)).toStrictEqual([])
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

  it('places a point in percentages, and pulls words left as it nears the edge', () => {
    expect(placeOf({ x: 300, y: 150 }, 'across')).toStrictEqual({
      left: '25.00%',
      top: '25.00%',
    })
    expect(pullOf({ x: 300, y: 150 }, 'across', 'below')).toBe(
      'translate(-25.00%, 1rem)',
    )
    expect(pullOf({ x: 300, y: 150 }, 'across', 'above')).toBe(
      'translate(-25.00%, calc(-100% - 1rem))',
    )
    expect(pullOf(a, 'down', 'left')).toBe(
      'translate(calc(-100% - 1rem), -50%)',
    )
    expect(pullOf(a, 'down', 'right')).toBe('translate(1rem, -50%)')
    expect(pullOf({ x: 300, y: 150 }, 'across', null)).toBe(
      'translate(-25.00%, -50%)',
    )
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
