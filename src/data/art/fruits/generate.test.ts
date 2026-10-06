import { describe, expect, it } from 'vitest'

import type { Stroke } from '~/data/art/stroke'
import type { Timeline } from '~/data/types'

import { fruitArt, fruitRedrawn } from '.'
import {
  BRUSH_BRUSH,
  BUBBLE_BUBBLE,
  CHOP_CHOP,
  DARK_DARK,
  FLAME_FLAME,
  FLOWER_FLOWER,
  GUM_GUM,
  OP_OP,
  OP_OP_HEART,
  OX_OX_GIRAFFE,
  RUMBLE_RUMBLE,
  SAND_SAND,
  STRING_STRING,
  TREMOR_TREMOR,
} from './bespoke'
import { fruit, type FruitSeed } from './generate'
import type { LeafForm, StemForm } from './parts'
import { bezier, type BodyFamily } from './shape'
import type { SwirlFamily } from './swirls'

/**
 * The generator's own tests.
 *
 * The first one is the alphabet, and it is first on purpose: every other test
 * here reads the numbers in a path as coordinates, which is only true while
 * every command is absolute. A relative `q` slipped in later would make the
 * bounds test read deltas and pass drawings that are off the page, so the
 * alphabet is asserted before anything depends on it.
 */

const BODIES: BodyFamily[] = [
  'gourd',
  'heart',
  'oblong',
  'pear',
  'round',
  'star',
]
const SWIRLS: SwirlFamily[] = ['scales', 'spiral', 'waves', 'whorls']
const STEMS: StemForm[] = ['hooked', 'nub', 'straight']
const LEAVES: LeafForm[] = ['left', 'pair', 'right', 'sprig']
const GRAINS = 12

/** Half the stroke plus the round cap, which is the margin every drawing keeps. */
const MARGIN = 6
const BOX_W = 160
const BOX_H = 200

/** Every seed the generator can be handed, which is what the sweep covers. */
const SEEDS: FruitSeed[] = BODIES.flatMap((body) => {
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
  'brush-brush-fruit': BRUSH_BRUSH,
  'bubble-bubble-fruit': BUBBLE_BUBBLE,
  'chop-chop-fruit': CHOP_CHOP,
  'dark-dark-fruit': DARK_DARK,
  'flower-flower-fruit': FLOWER_FLOWER,
  'op-op-fruit': OP_OP,
  'ox-ox-fruit-model-giraffe': OX_OX_GIRAFFE,
  'rumble-rumble-fruit': RUMBLE_RUMBLE,
  'sand-sand-fruit': SAND_SAND,
  'string-string-fruit': STRING_STRING,
  'tremor-tremor-fruit': TREMOR_TREMOR,
}

const NUMBER = /-?[\d.]+/gu
const ABSOLUTE_ONLY = /^[MLCZ\d .-]+$/u
const TOO_PRECISE = /\.\d{2,}/u

/** Every coordinate in a path, as `[x, y]` pairs. */
function coordinates(d: string): [number, number][] {
  const numbers = (d.match(NUMBER) ?? []).map(Number)
  return Array.from(
    { length: Math.floor(numbers.length / 2) },
    (_unused, at) => [numbers[at * 2] ?? 0, numbers[at * 2 + 1] ?? 0],
  )
}

type Point = [number, number]

/** Points read along each cubic: enough that a sampled curve is its curve. */
const CUBIC_STEPS = 20

/** Half the 2px pen: a mark this far in only touches the skin. */
const HALF_PEN = 1

/** One `M`, `L` or `C` command with its numbers; a `Z` adds no point. */
const COMMAND = /[MLC][^MLCZ]*/gu

/** A cubic from the pen through its next three points, read at even steps. */
function bend(from: Point, [one, two, to]: Point[]): Point[] {
  const ends = [from, one ?? from, two ?? from, to ?? from]

  return Array.from({ length: CUBIC_STEPS }, (_unused, step) =>
    bezier(ends, (step + 1) / CUBIC_STEPS),
  )
}

/**
 * Every point the pen passes through, with each cubic read as a run of
 * points. Absolute `M`, `L`, `C` and `Z` are the whole alphabet a fruit is
 * allowed, which the alphabet test above holds.
 */
function traced(d: string): Point[] {
  const commands = d.match(COMMAND)
  const points: Point[] = []

  if (commands === null) {
    return points
  }
  for (const command of commands) {
    const numbers = coordinates(command)
    const pen = points.at(-1)

    points.push(
      ...(pen !== undefined && command.startsWith('C') ?
        bend(pen, numbers)
      : numbers),
    )
  }

  return points
}

/**
 * How far a point is inside a closed outline: its distance to the nearest
 * edge, negative when it is outside, which an even-odd ray cast decides.
 */
function depth(outline: Point[], [x, y]: Point): number {
  let inside = false
  let nearest = Infinity

  for (const [index, [x1, y1]] of outline.entries()) {
    const [x0, y0] = outline.at(index - 1) ?? [x1, y1]
    const [dx, dy] = [x1 - x0, y1 - y0]
    const along =
      ((x - x0) * dx + (y - y0) * dy) / Math.max(dx * dx + dy * dy, 1e-9)
    const t = Math.max(0, Math.min(1, along))

    if (y0 > y !== y1 > y && x < x0 + ((y - y0) * dx) / dy) {
      inside = !inside
    }
    nearest = Math.min(nearest, Math.hypot(x - x0 - t * dx, y - y0 - t * dy))
  }

  return inside ? nearest : -nearest
}

/** One drawing as one string, so two of them can be compared outright. */
function pathsOf(strokes: Stroke[]): string {
  return strokes.map((stroke) => stroke.d).join('|')
}

/** Every drawing on the sheet, hand-drawn and grown alike. */
const SHEET = Object.entries(fruitArt)

/** One fruit's drawings from later in the story, each labelled with its episode. */
function laterOf(
  id: string,
  timeline: Timeline<Stroke[]>,
): [string, Stroke[]][] {
  const label = (episode: number): string => `${id} @${String(episode)}`

  return Array.from(timeline, (entry) => [label(entry.episode), entry.value])
}

/** The sheet and every fruit drawn again later, which obey the same rules. */
const STAGES: [string, Stroke[]][] = [
  ...SHEET,
  ...Object.entries(fruitRedrawn).flatMap(([id, timeline]) =>
    laterOf(id, timeline),
  ),
]

describe('the fruit path alphabet', () => {
  it('writes every drawing in absolute commands only', () => {
    for (const [id, strokes] of STAGES) {
      for (const stroke of strokes) {
        expect(stroke.d, id).toMatch(ABSOLUTE_ONLY)
      }
    }
  })

  it('rounds every coordinate to one decimal', () => {
    for (const [id, strokes] of STAGES) {
      for (const stroke of strokes) {
        expect(stroke.d, id).not.toMatch(TOO_PRECISE)
      }
    }
  })

  it('moves no stroke with a transform', () => {
    for (const [id, strokes] of STAGES) {
      for (const stroke of strokes) {
        expect(stroke.transform, id).toBeUndefined()
      }
    }
  })
})

describe('the fruit sheet', () => {
  it('keeps every drawing inside the box', () => {
    for (const [id, strokes] of STAGES) {
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
    for (const [id, strokes] of STAGES) {
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

describe('the fruits drawn again', () => {
  it('draws the real fruit once the show has shown it', () => {
    expect(fruitRedrawn['gum-gum-fruit']?.[0]?.value).toBe(GUM_GUM)
    expect(fruitRedrawn['flame-flame-fruit']?.[0]?.value).toBe(FLAME_FLAME)
    expect(fruitRedrawn['op-op-fruit']?.[0]?.value).toBe(OP_OP_HEART)
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
      const [body, mark] = fruit(seed)
      const skin = traced(body.d)

      for (const at of traced(mark.d)) {
        expect(
          depth(skin, at),
          `${seed.body}/${seed.swirl}/${String(seed.grain)}`,
        ).toBeGreaterThanOrEqual(HALF_PEN)
      }
    }
  })
})
