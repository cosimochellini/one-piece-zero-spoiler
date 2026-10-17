import { describe, expect, it } from 'vitest'

import type { Stroke } from '~/data/art/stroke'
import type { Timeline } from '~/data/types'

import { fruitArt, fruitRedrawn } from '.'
import { bezier } from './shape'

/**
 * The drawing rules shared by every fruit and its later stages.
 *
 * The first one is the alphabet, and it is first on purpose: every other test
 * here reads the numbers in a path as coordinates, which is only true while
 * every command is absolute. A relative `q` slipped in later would make the
 * bounds test read deltas and pass drawings that are off the page, so the
 * alphabet is asserted before anything depends on it.
 */

/** Half the stroke plus the round cap, which is the margin every drawing keeps. */
const MARGIN = 6
const BOX_W = 160
const BOX_H = 200

/** The fruits drawn by hand off the body kit; every other one is on it (#461). */
const OFF_KIT = new Set([
  'artificial-dragon-dragon-fruit',
  'brush-brush-fruit',
  'bubble-bubble-fruit',
  'dark-dark-fruit',
  'dog-dog-fruit-model-okuchi-no-makami',
  'gum-gum-fruit',
  'ox-ox-fruit-model-giraffe',
])

/** A kit fruit has volume, a skin, a stalk and its power: ten strokes or more. */
const KIT_FLOOR = 10

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

/** One `M`, `L` or `C` command with its numbers; a `Z` adds no point. */
const COMMAND = /[MLC][^MLCZ]*/gu

/** A cubic from the pen through its next three points, read at even steps. */
function bend(
  from: Point,
  [one = from, two = from, to = from]: Point[],
): Point[] {
  const ends = [from, one, two, to]

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

/** Every first drawing on the fruit sheet. */
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
  it('spits the liquor clear of the intact gourd', () => {
    const gourd = fruitArt['gabu-gabu-fruit']
    const shell = traced(gourd[0]?.d ?? '')

    expect(shell).not.toHaveLength(0)

    const stream = gourd.filter((stroke) => stroke.role === 'accent')

    for (const stroke of stream) {
      for (const at of traced(stroke.d)) {
        expect(depth(shell, at)).toBeLessThan(0)
      }
    }
  })

  it('keeps eight grounded spider legs, four rooted on each side', () => {
    const legs = fruitArt[
      'spider-spider-fruit-ancient-model-rosamygale-grauvogeli'
    ]
      .filter((stroke) => stroke.role === 'accent')
      .flatMap(({ d }) => d.split(' M'))
      .map((path) => coordinates(path))

    expect(legs).toHaveLength(8)

    const roots = legs.flatMap((points) => points.slice(0, 1))

    expect(roots.map(([x]) => Math.sign(x - 80))).toStrictEqual([
      -1, -1, -1, -1, 1, 1, 1, 1,
    ])

    for (const points of legs) {
      const feet = points.slice(2, 4).map(([, y]) => y)

      expect(points).toHaveLength(6)
      expect(Math.min(...feet)).toBeGreaterThanOrEqual(161)

      const heights = new Set(feet)

      expect(heights.size).toBe(1)
    }
  })

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

  it('draws every kit fruit with ten strokes or more', () => {
    const kit = SHEET.filter(([id]) => !OFF_KIT.has(id))

    for (const [id, strokes] of kit) {
      expect(strokes.length, id).toBeGreaterThanOrEqual(KIT_FLOOR)
    }
  })
})

describe('the fruits drawn again', () => {
  it('redraws the ten real fruits and Katakuri’s awakening, and no other', () => {
    expect(Object.keys(fruitRedrawn)).toStrictEqual([
      'chop-chop-fruit',
      'ox-ox-fruit-model-bison',
      'flame-flame-fruit',
      'op-op-fruit',
      'string-string-fruit',
      'mochi-mochi-fruit',
      'snake-snake-fruit-mythical-model-yamata-no-orochi',
      'fish-fish-fruit-mythical-model-azure-dragon',
      'cat-cat-fruit-model-leopard',
      'love-love-fruit',
      'paw-paw-fruit',
    ])
  })

  // The fruit's page names each drawing by its look, and keys it by it.
  it('names what each redrawing shows: the real fruit, and one awakening', () => {
    const looks: [string, string[]][] = []
    for (const [id, timeline] of Object.entries(fruitRedrawn)) {
      looks.push([id, timeline.map(({ look }) => look)])
    }

    expect(looks).toStrictEqual([
      ['chop-chop-fruit', ['real']],
      ['ox-ox-fruit-model-bison', ['real']],
      ['flame-flame-fruit', ['real']],
      ['op-op-fruit', ['real']],
      ['string-string-fruit', ['real']],
      ['mochi-mochi-fruit', ['awakening']],
      ['snake-snake-fruit-mythical-model-yamata-no-orochi', ['real']],
      ['fish-fish-fruit-mythical-model-azure-dragon', ['real']],
      ['cat-cat-fruit-model-leopard', ['real']],
      ['love-love-fruit', ['real']],
      ['paw-paw-fruit', ['real']],
    ])
  })
})
