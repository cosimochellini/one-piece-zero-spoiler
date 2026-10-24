import { describe, expect, it } from 'vitest'

import { type Orientation, type Point, project } from './chartGeometry'
import {
  type LabelBox,
  labelBoxOf,
  type NameSpot,
  scalesOf,
} from './chartLabels'

/** The scales `scalesOf` tries, as it sets them. */
const SCALES: number[] = []
for (let scale = 0.3; scale <= 6; scale *= 1.06) {
  SCALES.push(scale)
}

/** What a name gives way to: every dot, and the names before it. */
interface Before {
  dots: Point[]
  /** The least scale each name before it shows from. */
  from: number[]
  orientation: Orientation
  spots: NameSpot[]
}

/** Whether a name's box at a scale runs over a dot or a name shown there. */
function clashes(spot: NameSpot, scale: number, before: Before): boolean {
  const { dots, from, orientation, spots } = before
  const box = labelBoxOf(spot, orientation, scale)
  const onADot = dots.some((dot) => {
    const drawn = project(dot, orientation)
    const own = dot.x === spot.at.x && dot.y === spot.at.y
    const at = { x: drawn.x * scale, y: drawn.y * scale }
    return !own && overlap(box, { ...at, width: 14, height: 14 })
  })

  return (
    onADot
    || spots.some(
      (other, index) =>
        Number(from[index]) <= scale
        && overlap(box, labelBoxOf(other, orientation, scale)),
    )
  )
}

/**
 * `scalesOf` as it was before #779, box by box at every scale: the step past
 * a name's last clash with another stop's dot or a name before it.
 */
function slowScalesOf(
  spots: NameSpot[],
  dots: Point[],
  orientation: Orientation,
): number[] {
  const from: number[] = []
  for (const [index, spot] of spots.entries()) {
    const before = { dots, from, orientation, spots: spots.slice(0, index) }
    let least = 0.3
    for (const scale of SCALES) {
      if (clashes(spot, scale, before)) {
        least = scale * 1.06
      }
    }
    from.push(least > 6 ? Infinity : least)
  }

  return from
}

/** Whether two boxes overlap. */
function overlap(a: LabelBox, b: LabelBox): boolean {
  return (
    Math.abs(a.x - b.x) < (a.width + b.width) * 0.5
    && Math.abs(a.y - b.y) < (a.height + b.height) * 0.5
  )
}

/** A seeded run of numbers in [0, 1), the same on every run. */
function randomFrom(seed: number): () => number {
  let state = seed
  return () => {
    state = (state * 16_807) % 2_147_483_647
    return state / 2_147_483_647
  }
}

const SIDES = ['above', 'below', 'left', 'right', null] as const

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

  it.each(['across', 'down'] as const)(
    'places every name %s exactly as box-by-box placement does',
    (orientation) => {
      const random = randomFrom(7)
      for (let layout = 0; layout < 12; layout++) {
        const spots: NameSpot[] = Array.from({ length: 120 }, () => ({
          at: { x: Math.round(random() * 1600), y: Math.round(random() * 800) },
          length: 3 + Math.floor(random() * 20),
          side: SIDES[Math.floor(random() * SIDES.length)] ?? null,
          upright: random() < 0.1,
        }))
        const dots = spots.slice(0, 100).map((spot) => spot.at)

        expect(scalesOf(spots, dots, orientation)).toStrictEqual(
          slowScalesOf(spots, dots, orientation),
        )
      }
    },
  )
})
