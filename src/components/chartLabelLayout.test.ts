import { describe, expect, it } from 'vitest'

import { boxOf } from './chartGeometry'
import { labelsOverlap, layoutLabels } from './chartLabelLayout'
import type { NameSpot } from './chartLabels'

describe('reached chart label placement', () => {
  it.each(['across', 'down'] as const)(
    'keeps crowded names separate and inside the %s world',
    (orientation) => {
      const spots: NameSpot[] = Array.from({ length: 40 }, (_, index) => ({
        at: { x: 800 + index, y: 400 },
        length: 20,
        side: 'right',
      }))
      const labels = layoutLabels(spots, { orientation, scale: 0.4 })
      const world = boxOf(orientation)

      expect(labels).toHaveLength(spots.length)

      for (const [index, label] of labels.entries()) {
        expect(label.x - label.width / 2).toBeGreaterThanOrEqual(0)
        expect(label.x + label.width / 2).toBeLessThanOrEqual(world.x * 0.4)
        expect(label.y - label.height / 2).toBeGreaterThanOrEqual(0)
        expect(label.y + label.height / 2).toBeLessThanOrEqual(world.y * 0.4)
        expect(
          labels.slice(0, index).some((other) => labelsOverlap(label, other)),
        ).toBe(false)
      }
    },
  )

  it('wraps a long name at the world edge without discarding it', () => {
    const names: NameSpot[] = [
      { at: { x: 1599, y: 1 }, length: 44, side: 'right' },
    ]
    const first = layoutLabels(names, { orientation: 'across', scale: 0.4 })

    expect(first[0]?.width).toBeLessThanOrEqual(144)
    expect(first[0]?.height).toBeGreaterThan(18)
    expect(
      layoutLabels(names, { orientation: 'across', scale: 0.4 }),
    ).toStrictEqual(first)
    expect(
      layoutLabels([], { orientation: 'across', scale: 0.4 }),
    ).toStrictEqual([])
  })
})
