import { describe, expect, it } from 'vitest'

import type { Stroke } from '~/data/art/stroke'

import { fruitArt } from '.'
import {
  CHOP_CHOP,
  DARK_DARK,
  FLAME_FLAME,
  FLOWER_FLOWER,
  GUM_GUM,
  HUMAN_HUMAN,
  OP_OP,
  RUMBLE_RUMBLE,
  SAND_SAND,
  STRING_STRING,
  TREMOR_TREMOR,
} from './bespoke'
import { fruit, type FruitSeed } from './generate'
import type { LeafForm, StemForm } from './parts'
import type { BodyFamily } from './shape'
import type { SwirlFamily } from './swirls'
import { BODY_CX, BODY_CY, radiiFor } from './units'

/**
 * The generator's own tests.
 *
 * The first one is the alphabet, and it is first on purpose: every other test
 * here reads the numbers in a path as coordinates, which is only true while
 * every command is absolute. A relative `q` slipped in later would make the
 * bounds test read deltas and pass drawings that are off the page, so the
 * alphabet is asserted before anything depends on it.
 */

const BODIES: readonly BodyFamily[] = [
  'gourd',
  'heart',
  'oblong',
  'pear',
  'round',
  'star',
]
const SWIRLS: readonly SwirlFamily[] = ['scales', 'spiral', 'waves', 'whorls']
const STEMS: readonly StemForm[] = ['hooked', 'nub', 'straight']
const LEAVES: readonly LeafForm[] = ['left', 'pair', 'right', 'sprig']
const GRAINS = 12

/** Half the stroke plus the round cap, which is the margin every drawing keeps. */
const MARGIN = 6
const BOX_W = 160
const BOX_H = 200

/** Every seed the generator can be handed, which is what the sweep covers. */
const SEEDS: readonly FruitSeed[] = BODIES.flatMap((body) => {
  return SWIRLS.flatMap((swirl) => {
    return Array.from({ length: GRAINS }, (_unused, grain) => {
      return {
        body,
        grain,
        leaf: LEAVES[grain % LEAVES.length] ?? 'right',
        stem: STEMS[grain % STEMS.length] ?? 'straight',
        swirl,
      }
    })
  })
})

const HAND_DRAWN = {
  'chop-chop-fruit': CHOP_CHOP,
  'dark-dark-fruit': DARK_DARK,
  'flame-flame-fruit': FLAME_FLAME,
  'flower-flower-fruit': FLOWER_FLOWER,
  'gum-gum-fruit': GUM_GUM,
  'human-human-fruit': HUMAN_HUMAN,
  'op-op-fruit': OP_OP,
  'rumble-rumble-fruit': RUMBLE_RUMBLE,
  'sand-sand-fruit': SAND_SAND,
  'string-string-fruit': STRING_STRING,
  'tremor-tremor-fruit': TREMOR_TREMOR,
}

const NUMBER = /-?[\d.]+/gu
const ABSOLUTE_ONLY = /^[MLCZ\d .-]+$/u
const TOO_PRECISE = /\.\d{2,}/u

/** Every coordinate in a path, as `[x, y]` pairs. */
function coordinates(d: string): readonly (readonly [number, number])[] {
  const numbers = (d.match(NUMBER) ?? []).map(Number)
  return Array.from(
    { length: Math.floor(numbers.length / 2) },
    (_unused, at) => [numbers[at * 2] ?? 0, numbers[at * 2 + 1] ?? 0],
  )
}

/** One drawing as one string, so two of them can be compared outright. */
function pathsOf(strokes: readonly Stroke[]): string {
  return strokes.map((stroke) => stroke.d).join('|')
}

/** Every drawing on the sheet, hand-drawn and grown alike. */
const SHEET = Object.entries(fruitArt)

describe('the fruit path alphabet', () => {
  it('writes every drawing in absolute commands only', () => {
    for (const [id, strokes] of SHEET) {
      for (const stroke of strokes) {
        expect(stroke.d, id).toMatch(ABSOLUTE_ONLY)
      }
    }
  })

  it('rounds every coordinate to one decimal', () => {
    for (const [id, strokes] of SHEET) {
      for (const stroke of strokes) {
        expect(stroke.d, id).not.toMatch(TOO_PRECISE)
      }
    }
  })

  it('moves no stroke with a transform', () => {
    for (const [id, strokes] of SHEET) {
      for (const stroke of strokes) {
        expect(stroke.transform, id).toBeUndefined()
      }
    }
  })
})

describe('the fruit sheet', () => {
  it('keeps every drawing inside the box', () => {
    for (const [id, strokes] of SHEET) {
      for (const stroke of strokes) {
        for (const [x, y] of coordinates(stroke.d)) {
          expect(x, `${id} x`).toBeGreaterThanOrEqual(MARGIN)
          expect(x, `${id} x`).toBeLessThanOrEqual(BOX_W - MARGIN)
          expect(y, `${id} y`).toBeGreaterThanOrEqual(MARGIN)
          expect(y, `${id} y`).toBeLessThanOrEqual(BOX_H - MARGIN)
        }
      }
    }
  })

  it('gives every drawing at least four strokes and exactly one accent', () => {
    for (const [id, strokes] of SHEET) {
      const accents = strokes.filter((stroke) => stroke.role === 'accent')

      expect(strokes.length, id).toBeGreaterThan(3)
      expect(accents, id).toHaveLength(1)
    }
  })

  it('draws no two fruits the same', () => {
    const drawn = SHEET.map(([, strokes]) => pathsOf(strokes))
    const distinct = new Set(drawn)

    expect(distinct.size).toBe(SHEET.length)
  })

  it('draws the eleven best-known fruits by hand', () => {
    for (const [id, strokes] of Object.entries(HAND_DRAWN)) {
      expect(fruitArt, id).toHaveProperty(id)
      expect(Object.getOwnPropertyDescriptor(fruitArt, id)?.value, id).toBe(
        strokes,
      )
    }
  })
})

describe('the generator', () => {
  it('grows five strokes from every seed it can be handed', () => {
    for (const seed of SEEDS) {
      expect(fruit(seed)).toHaveLength(5)
    }
  })

  it('closes every silhouette and opens it exactly once', () => {
    for (const seed of SEEDS) {
      const grown = fruit(seed)
      const outline = grown[0].d

      expect(outline.match(/M/gu) ?? []).toHaveLength(1)
      expect(outline.endsWith('Z')).toBe(true)
    }
  })

  it('never lets the mark break the skin of the fruit it is on', () => {
    for (const seed of SEEDS) {
      const { rx, ry } = radiiFor(seed.grain)

      const mark = coordinates(fruit(seed)[1].d)

      for (const [x, y] of mark) {
        const reach = ((x - BODY_CX) / rx) ** 2 + ((y - BODY_CY) / ry) ** 2

        expect(
          reach,
          `${seed.body}/${seed.swirl}/${String(seed.grain)}`,
        ).toBeLessThan(1)
      }
    }
  })
})
