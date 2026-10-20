import { describe, expect, it } from 'vitest'

import { scalesOf } from './chartLabels'

describe('the names on the chart', () => {
  it('shows a name that crowds an earlier one only from a closer zoom', () => {
    const [first, second] = scalesOf(
      [
        { at: { x: 1000, y: 400 }, length: 10, side: 'above' },
        { at: { x: 1020, y: 400 }, length: 10, side: 'above' },
      ],
      [],
      'across',
    )

    expect(first).toBeLessThan(0.4)
    expect(second).toBeGreaterThan(1)
    expect(second).toBeLessThan(6)
  })

  it('keeps a name off another stop’s dot', () => {
    const spot = { at: { x: 1000, y: 400 }, length: 8, side: 'right' } as const
    const [alone] = scalesOf([spot], [], 'across')
    const [crowded] = scalesOf([spot], [{ x: 1030, y: 400 }], 'across')

    expect(crowded).toBeGreaterThan(Number(alone))
  })

  it('never shows a name that cannot fit at any zoom', () => {
    expect(
      scalesOf(
        [
          { at: { x: 1000, y: 400 }, length: 10, side: null },
          { at: { x: 1000, y: 400 }, length: 10, side: null },
        ],
        [],
        'across',
      )[1],
    ).toBe(Infinity)
  })
})
