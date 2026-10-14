import { describe, expect, it } from 'vitest'

import type { Stroke } from '~/data/art/stroke'
import type { Timeline } from '~/data/types'

import { fruitArt, fruitRedrawn } from '.'
import {
  ARMS_ARMS,
  ARROW_ARROW,
  ART_ART,
  ARTIFICIAL_DRAGON,
  BARRIER_BARRIER,
  BIRD_ALBATROSS,
  BIRD_FALCON,
  BIS_BIS,
  BOMB_BOMB,
  BOOK_BOOK,
  BRUSH_BRUSH,
  BUBBLE_BUBBLE,
  CAGE_CAGE,
  CALM_CALM,
  CASTLE_CASTLE,
  CAT_LEOPARD,
  CHOP_CHOP,
  CLEAR_CLEAR,
  CLONE_CLONE,
  COOK_COOK,
  DARK_DARK,
  DICE_DICE,
  DOG_DACHSHUND,
  DOG_JACKAL,
  DOG_WOLF,
  DOOR_DOOR,
  DRAGON_KIRIN,
  EGG_EGG,
  ELEPHANT_ELEPHANT,
  ELEPHANT_MAMMOTH,
  FLAME_FLAME,
  FLAME_FLAME_FIRE,
  FLOWER_FLOWER,
  GAS_GAS,
  GLARE_GLARE,
  GLINT_GLINT,
  GROW_GROW,
  GUM_GUM,
  HEAL_HEAL,
  HEAT_HEAT,
  HOBBY_HOBBY,
  HOLLOW_HOLLOW,
  HORSE_HORSE,
  HUMAN_HUMAN,
  ICE_ICE,
  JACKET_JACKET,
  KILO_KILO,
  LICK_LICK,
  LOVE_LOVE,
  MAGMA_MAGMA,
  MEMO_MEMO,
  MIRROR_MIRROR,
  MOCHI_MOCHI,
  MOLE_MOLE,
  MUNCH_MUNCH,
  OP_OP,
  OP_OP_HEART,
  OX_OX_BISON,
  OX_OX_GIRAFFE,
  POP_POP,
  PRESS_PRESS,
  PUFF_PUFF,
  PUMP_PUMP,
  PUSH_PUSH,
  REVIVE_REVIVE,
  RIPPLE_RIPPLE,
  RUMBLE_RUMBLE,
  SAND_SAND,
  SHADOW_SHADOW,
  SLIP_SLIP,
  SLOW_SLOW,
  SMOKE_SMOKE,
  SNAKE_ANACONDA,
  SNAKE_KING_COBRA,
  SNOW_SNOW,
  SOUL_SOUL,
  SPIKE_SPIKE,
  SPIN_SPIN,
  SPRING_SPRING,
  STICK_STICK,
  STITCH_STITCH,
  STONE_STONE,
  STRING_STRING,
  SWIM_SWIM,
  THORN_THORN,
  TON_TON,
  TREMOR_TREMOR,
  TURTLE_TURTLE,
  WAX_WAX,
  WRING_WRING,
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

/** The fruits drawn as fruit + power, on the body kit (#461). */
const KIT = {
  'arms-arms-fruit': ARMS_ARMS,
  'arrow-arrow-fruit': ARROW_ARROW,
  'art-art-fruit': ART_ART,
  'artificial-dragon-dragon-fruit': ARTIFICIAL_DRAGON,
  'barrier-barrier-fruit': BARRIER_BARRIER,
  'bird-bird-fruit-model-albatross': BIRD_ALBATROSS,
  'bird-bird-fruit-model-falcon': BIRD_FALCON,
  'bis-bis-fruit': BIS_BIS,
  'bomb-bomb-fruit': BOMB_BOMB,
  'book-book-fruit': BOOK_BOOK,
  'cage-cage-fruit': CAGE_CAGE,
  'calm-calm-fruit': CALM_CALM,
  'castle-castle-fruit': CASTLE_CASTLE,
  'cat-cat-fruit-model-leopard': CAT_LEOPARD,
  'clear-clear-fruit': CLEAR_CLEAR,
  'clone-clone-fruit': CLONE_CLONE,
  'cook-cook-fruit': COOK_COOK,
  'dice-dice-fruit': DICE_DICE,
  'dog-dog-fruit-model-dachshund': DOG_DACHSHUND,
  'dog-dog-fruit-model-jackal': DOG_JACKAL,
  'dog-dog-fruit-model-wolf': DOG_WOLF,
  'door-door-fruit': DOOR_DOOR,
  'dragon-dragon-fruit-mythical-model-kirin': DRAGON_KIRIN,
  'egg-egg-fruit': EGG_EGG,
  'elephant-elephant-fruit': ELEPHANT_ELEPHANT,
  'elephant-elephant-fruit-ancient-model-mammoth': ELEPHANT_MAMMOTH,
  'flame-flame-fruit': FLAME_FLAME_FIRE,
  'gas-gas-fruit': GAS_GAS,
  'glare-glare-fruit': GLARE_GLARE,
  'glint-glint-fruit': GLINT_GLINT,
  'grow-grow-fruit': GROW_GROW,
  'heal-heal-fruit': HEAL_HEAL,
  'heat-heat-fruit': HEAT_HEAT,
  'hobby-hobby-fruit': HOBBY_HOBBY,
  'hollow-hollow-fruit': HOLLOW_HOLLOW,
  'horse-horse-fruit': HORSE_HORSE,
  'human-human-fruit': HUMAN_HUMAN,
  'ice-ice-fruit': ICE_ICE,
  'jacket-jacket-fruit': JACKET_JACKET,
  'kilo-kilo-fruit': KILO_KILO,
  'lick-lick-fruit': LICK_LICK,
  'love-love-fruit': LOVE_LOVE,
  'magma-magma-fruit': MAGMA_MAGMA,
  'memo-memo-fruit': MEMO_MEMO,
  'mirror-mirror-fruit': MIRROR_MIRROR,
  'mochi-mochi-fruit': MOCHI_MOCHI,
  'mole-mole-fruit': MOLE_MOLE,
  'munch-munch-fruit': MUNCH_MUNCH,
  'ox-ox-fruit-model-bison': OX_OX_BISON,
  'pop-pop-fruit': POP_POP,
  'press-press-fruit': PRESS_PRESS,
  'puff-puff-fruit': PUFF_PUFF,
  'pump-pump-fruit': PUMP_PUMP,
  'push-push-fruit': PUSH_PUSH,
  'revive-revive-fruit': REVIVE_REVIVE,
  'ripple-ripple-fruit': RIPPLE_RIPPLE,
  'shadow-shadow-fruit': SHADOW_SHADOW,
  'slip-slip-fruit': SLIP_SLIP,
  'slow-slow-fruit': SLOW_SLOW,
  'smoke-smoke-fruit': SMOKE_SMOKE,
  'snake-snake-fruit-model-anaconda': SNAKE_ANACONDA,
  'snake-snake-fruit-model-king-cobra': SNAKE_KING_COBRA,
  'snow-snow-fruit': SNOW_SNOW,
  'soul-soul-fruit': SOUL_SOUL,
  'spike-spike-fruit': SPIKE_SPIKE,
  'spin-spin-fruit': SPIN_SPIN,
  'spring-spring-fruit': SPRING_SPRING,
  'stick-stick-fruit': STICK_STICK,
  'stitch-stitch-fruit': STITCH_STITCH,
  'stone-stone-fruit': STONE_STONE,
  'swim-swim-fruit': SWIM_SWIM,
  'thorn-thorn-fruit': THORN_THORN,
  'ton-ton-fruit': TON_TON,
  'turtle-turtle-fruit': TURTLE_TURTLE,
  'wax-wax-fruit': WAX_WAX,
  'wring-wring-fruit': WRING_WRING,
}

/** A kit fruit has volume, a skin, a stalk and its power: ten strokes or more. */
const KIT_FLOOR = 10

const HAND_DRAWN = {
  ...KIT,
  'brush-brush-fruit': BRUSH_BRUSH,
  'bubble-bubble-fruit': BUBBLE_BUBBLE,
  'chop-chop-fruit': CHOP_CHOP,
  'dark-dark-fruit': DARK_DARK,
  'flower-flower-fruit': FLOWER_FLOWER,
  'gum-gum-fruit': GUM_GUM,
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

  it('draws every kit fruit with ten strokes or more', () => {
    for (const [id, strokes] of Object.entries(KIT)) {
      expect(strokes.length, id).toBeGreaterThanOrEqual(KIT_FLOOR)
    }
  })

  it('draws the hand-drawn fruits by hand', () => {
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
