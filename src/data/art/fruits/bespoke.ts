import {
  type LeafForm,
  leafPath,
  shadowUnder,
  stalkOf,
  type StemForm,
  stemPath,
} from '~/data/art/fruits/parts'
import { lobed } from '~/data/art/fruits/shape'
import { ring, swirlOf } from '~/data/art/fruits/swirls'
import { point } from '~/data/art/fruits/units'
import type { Stroke } from '~/data/art/stroke'

/**
 * The eleven fruits that are drawn rather than grown.
 *
 * The generator is what makes a hundred and twenty drawings one set, and it
 * is also what would make the most recognisable fruit on the sheet a sample
 * of a set. These eleven are the ones a reader arrives already knowing, so
 * each one keeps the set's body, stalk and shadow and wears a mark written
 * for it.
 *
 * Everything here obeys the rules the generator proves: absolute commands
 * only, no fills, one accent, and nothing outside the 160x200 box.
 */

/** The body every hand-drawn fruit is set on, so the sheet stays one sheet. */
const RX = 44
const RY = 48

const STALK = stalkOf('straight', RY, 4)
const HOOK = stalkOf('hooked', RY, 7)

/** The three strokes every hand-drawn fruit shares with a grown one. */
function furniture(
  stem: StemForm,
  leaf: LeafForm,
): readonly [Stroke, Stroke, Stroke] {
  const stalk = stem === 'hooked' ? HOOK : STALK

  return [
    { d: stemPath(stem, stalk) },
    { d: leafPath(leaf, stalk, 4), role: 'soft' },
    shadowUnder(1),
  ]
}

/** How far a curl winds before it reaches its rim. Nearly two full turns. */
const CURL_TURNS = 1.9

/** Segments a curl is drawn with; round joins make them read as a curve. */
const CURL_STEPS = 22

/** Where a curl starts, so the eye reads a spiral and not a comma. */
const CURL_TILT = 0.6

/**
 * One curl of skin, wound out from a point.
 *
 * The mark a devil fruit is known by is not one spiral but a skin covered in
 * them, at every size and winding both ways. A negative radius winds the
 * other way round, which is what keeps ten of them on one fruit from reading
 * as ten copies of one stamp.
 *
 * Sampled rather than written as arcs for the reason the generator gives: an
 * arc command is relative, and a relative command in a fruit defeats the
 * bounds test that reads the numbers in a path as coordinates.
 */
function curl(cx: number, cy: number, r: number): string {
  const way = r < 0 ? -1 : 1
  const reach = Math.abs(r)
  const steps = Array.from({ length: CURL_STEPS + 1 }, (_unused, at) => {
    const along = at / CURL_STEPS
    const angle = way * (CURL_TILT + CURL_TURNS * 2 * Math.PI * along)

    return point(
      cx + reach * along * Math.cos(angle),
      cy + reach * along * Math.sin(angle),
    )
  })

  return steps.map((step, at) => (at === 0 ? `M${step}` : `L${step}`)).join(' ')
}

/**
 * The classic: a sphere under a skin of curls, hung from a long stalk that
 * runs off sideways and winds up at the end of itself.
 *
 * Ten curls and not three. The fruit everybody can draw from memory is not a
 * target with a couple of rings on it — it is covered, corner to corner, in
 * spirals of every size, and the stalk is as much of the shape as the fruit.
 */
export const GUM_GUM: readonly Stroke[] = [
  { d: ring(80, 126, 44) },
  {
    d: [
      curl(80, 126, 14),
      curl(58, 106, -12),
      curl(103, 107, 12),
      curl(106, 143, -12),
      curl(55, 145, 12),
      curl(80, 162, -11),
      curl(47, 124, 10),
      curl(114, 128, -10),
      curl(80, 90, 11),
      curl(66, 128, -8),
    ].join(' '),
    role: 'accent',
  },
  {
    // The stalk: up out of the crown, along, and wound in on itself. The
    // curl at its end is the one every drawing of this fruit keeps, so it is
    // drawn at the size the fruit's own marks are drawn at.
    d: [
      'M80 82 C81 70 82 58 84 47',
      'M44 54 C38 48 42 40 50 42 C62 44 74 44 86 46',
      'C98 48 108 50 114 54 C122 60 116 70 108 66',
      'C103 64 104 57 110 58',
    ].join(' '),
  },
  shadowUnder(1),
]

/**
 * The fruit that is all flame: a body whose crown is a row of tongues, curls
 * burning across it, and a stalk that runs off with a hook at the end.
 */
export const FLAME_FLAME: readonly Stroke[] = [
  {
    // Every tongue leans the same way and hooks back at the tip, which is
    // what tells a flame from a spike: a crown of points is a crown.
    d: [
      'M38 134 C38 118 40 105 45 93',
      'C46 82 50 72 60 62 C64 74 62 82 66 90',
      'C66 78 71 62 82 52 C87 64 84 80 86 90',
      'C87 80 93 66 104 58 C109 70 105 82 107 90',
      'C108 82 114 74 122 70 C126 78 125 86 128 95',
      'C131 107 132 120 132 134',
      'C132 157 111 172 85 172 C58 172 38 157 38 134 Z',
    ].join(' '),
  },
  {
    d: [
      curl(85, 110, 15),
      curl(55, 132, -12),
      curl(114, 134, 12),
      curl(68, 158, 11),
      curl(103, 158, -11),
      curl(85, 152, 9),
      curl(61, 112, -9),
      curl(110, 111, 9),
    ].join(' '),
    role: 'accent',
  },
  {
    // The stalk runs off to the left and winds up at its own end. It goes
    // left because the tallest tongues stand to the right of it, and a stalk
    // laid across a flame is a knot rather than a stalk.
    d: [
      'M60 62 C57 52 55 44 52 34',
      'M52 34 C42 28 30 30 29 38 C28 45 36 49 40 43',
      'C42 39 38 37 36 39',
    ].join(' '),
  },
  shadowUnder(1),
]

/** A coil wound tight inside a sphere, the way a diagram sections a thing. */
export const OP_OP: readonly Stroke[] = [
  { d: lobed('heart', RX, RY) },
  { d: swirlOf('spiral', { rx: RX, ry: RY }, 5), role: 'accent' },
  { d: ring(80, 108, 33), role: 'ambient' },
  ...furniture('straight', 'right'),
]

/** A ring broken open around a figure standing in it. No face, ever. */
export const HUMAN_HUMAN: readonly Stroke[] = [
  { d: lobed('round', RX, RY) },
  { d: ring(80, 112, 28), role: 'accent' },
  {
    d: [
      ring(80, 92, 7),
      'M80 99 L80 124',
      'M80 106 L66 116 M80 106 L94 116',
      'M80 124 L70 140 M80 124 L90 140',
    ].join(' '),
  },
  ...furniture('straight', 'right'),
]

/** Six petals turned about the middle: the mark as a rosette. */
export const FLOWER_FLOWER: readonly Stroke[] = [
  { d: lobed('round', RX, RY) },
  {
    d: [
      'M80 112 C68 104 68 86 80 82 C92 86 92 104 80 112',
      'M80 112 C88 98 104 96 110 106 C104 116 88 120 80 112',
      'M80 112 C88 122 84 138 72 140 C66 130 72 118 80 112',
      'M80 112 C68 120 52 116 50 104 C60 96 74 102 80 112',
      'M80 112 C92 116 100 130 92 138 C82 134 78 122 80 112',
      'M80 112 C70 104 58 92 66 84 C76 88 82 102 80 112',
    ].join(' '),
    role: 'accent',
  },
  ...furniture('straight', 'right'),
]

/** A coil wound all the way in, and nothing at the middle of it. */
export const DARK_DARK: readonly Stroke[] = [
  { d: lobed('oblong', RX, RY) },
  {
    d: 'M108 112 C108 128 94 140 80 140 C64 140 52 128 52 112 C52 96 64 86 78 86 C90 86 100 96 100 108 C100 118 92 126 82 126 C74 126 68 120 68 112',
    role: 'accent',
  },
  { d: ring(80, 112, 7), role: 'ambient' },
  ...furniture('straight', 'right'),
]

/** A fault running the whole length of the fruit, with a coil either side. */
export const TREMOR_TREMOR: readonly Stroke[] = [
  { d: lobed('oblong', RX, RY) },
  { d: 'M76 64 L88 88 L70 96 L90 120 L72 132 L84 160', role: 'accent' },
  {
    d: ['M62 88 C48 96 46 116 58 126', 'M104 128 C116 118 116 98 102 90'].join(
      ' ',
    ),
    role: 'ambient',
  },
  ...furniture('hooked', 'left'),
]

/** The outline giving way at the foot, where the fruit is already running out. */
export const SAND_SAND: readonly Stroke[] = [
  { d: 'M80 64 C104 64 124 86 124 112 C124 126 120 136 112 144' },
  { d: 'M80 64 C56 64 36 86 36 112 C36 126 40 136 48 144' },
  { d: swirlOf('spiral', { rx: RX, ry: RY }, 2), role: 'accent' },
  {
    d: 'M112 144 C104 154 93 160 80 160 C67 160 56 154 48 144',
    role: 'ambient',
    dashed: true,
  },
  ...furniture('straight', 'right'),
]

/** The coil unravelled: five threads leaving the fruit at its foot. */
export const STRING_STRING: readonly Stroke[] = [
  { d: lobed('gourd', RX, RY) },
  { d: ring(80, 104, 14), role: 'accent' },
  {
    d: [
      'M58 146 C52 154 48 162 46 170',
      'M68 152 C65 160 63 166 62 172',
      'M80 154 C80 162 80 168 80 174',
      'M92 152 C95 160 97 166 98 172',
      'M102 146 C108 154 112 162 114 170',
    ].join(' '),
    role: 'soft',
  },
  ...furniture('straight', 'right'),
]

/** The coil snapped: one bolt where the turns should have closed. */
export const RUMBLE_RUMBLE: readonly Stroke[] = [
  { d: lobed('round', RX, RY) },
  {
    d: 'M96 78 L70 108 L86 110 L62 146 L88 118 L72 116 L96 78 Z',
    role: 'accent',
  },
  { d: ring(80, 112, 30), role: 'ambient' },
  ...furniture('straight', 'right'),
]

/** The fruit cut in three bands, each set a little sideways of the last. */
export const CHOP_CHOP: readonly Stroke[] = [
  // The cap, pushed left of the middle.
  { d: 'M46 102 C46 78 60 62 74 62 C88 62 102 78 102 102 Z' },
  // The middle band, pushed right: the piece that is out of place.
  {
    d: 'M64 110 C58 110 56 118 56 124 C56 130 58 138 64 138 L118 138 C124 138 126 130 126 124 C126 118 124 110 118 110 Z',
    role: 'accent',
  },
  // The foot, back under the cap.
  { d: 'M44 146 C44 160 58 168 72 168 C86 168 100 160 100 146 Z' },
  ...furniture('straight', 'right'),
]
