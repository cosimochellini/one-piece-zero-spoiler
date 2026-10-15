import {
  billow,
  type Body,
  crown,
  crownY,
  curl,
  grown,
  type Growth,
  halfWidth,
  hatching,
  onRim,
  outline,
  type Point,
  polyline,
  ribs,
  shine,
  skin,
  sprout,
} from '~/data/art/fruits/kit'
import {
  type LeafForm,
  leafPath,
  shadowUnder,
  stalkOf,
  type StemForm,
  stemPath,
} from '~/data/art/fruits/parts'
import { bezier, lobed } from '~/data/art/fruits/shape'
import { ring } from '~/data/art/fruits/swirls'
import { point } from '~/data/art/fruits/units'
import type { Stroke } from '~/data/art/stroke'

/**
 * The fruits that are drawn rather than grown.
 *
 * The generator is what makes a hundred and twenty drawings one set, and it
 * is also what would make the most recognisable fruit on the sheet a sample
 * of a set. These are the ones a reader arrives already knowing: a fruit the
 * show has shown by its threshold is drawn as it looks, and the rest keep the
 * set's body, stalk and shadow and wear a mark written for their power.
 * One hundred and eleven are drawn as fruit + power (#461), on the bodies of
 * `kit.ts`, the power acting on the fruit itself.
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
function furniture(stem: StemForm, leaf: LeafForm): [Stroke, Stroke, Stroke] {
  const stalk = stem === 'hooked' ? HOOK : STALK

  return [
    { d: stemPath(stem, stalk) },
    { d: leafPath(leaf, stalk, 4), role: 'soft' },
    shadowUnder(1),
  ]
}

/**
 * The classic: a sphere under a skin of curls, hung from a long stalk that
 * runs off sideways and winds up at the end of itself.
 *
 * Ten curls and not three. The fruit everybody can draw from memory is not a
 * target with a couple of rings on it — it is covered, corner to corner, in
 * spirals of every size, and the stalk is as much of the shape as the fruit.
 *
 * Drawn from the first episode, although the show only opens the Red Hair
 * Pirates' chest in episode 4: the look of the fruit Luffy ate tells a
 * reader nothing the first episode has not, and every reader knows it.
 */
export const GUM_GUM: Stroke[] = [
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
 * burning across it, and a stalk that runs off with a hook at the end. Not
 * seen until Doflamingo holds it up in episode 629, so it is drawn from
 * there, in `fruitRedrawn`; before that the fruit is a grown one.
 */
export const FLAME_FLAME: Stroke[] = [
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

/** Six petals turned about the middle: the mark as a rosette. */
export const FLOWER_FLOWER: Stroke[] = [
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

/** A fault running the whole length of the fruit, with a coil either side. */
export const TREMOR_TREMOR: Stroke[] = [
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

/** The coil snapped: one bolt where the turns should have closed. */
export const RUMBLE_RUMBLE: Stroke[] = [
  { d: lobed('round', RX, RY) },
  {
    d: 'M96 78 L70 108 L86 110 L62 146 L88 118 L72 116 L96 78 Z',
    role: 'accent',
  },
  { d: ring(80, 112, 30), role: 'ambient' },
  ...furniture('straight', 'right'),
]

const DEGREES = Math.PI / 180

/**
 * A stretch of an ellipse as the points along it, from one angle to another
 * in degrees, sampled for the reason `curl` is.
 */
function trace(
  centre: [number, number],
  radii: [number, number],
  sweep: [from: number, to: number, steps?: number],
): string[] {
  const [cx, cy] = centre
  const [rx, ry] = radii
  const [from, to, steps = 14] = sweep

  return Array.from({ length: steps + 1 }, (_unused, at) => {
    const angle = (from + ((to - from) * at) / steps) * DEGREES

    return point(cx + rx * Math.cos(angle), cy + ry * Math.sin(angle))
  })
}

/** A dot, as the zero-length line the pen draws one with. */
function speck(x: number, y: number): string {
  return `M${point(x, y)} L${point(x, y)}`
}

/** The angle on the right of the shared body at which it reaches a height. */
function angleAt(y: number): number {
  return Math.asin((y - 112) / RY) / DEGREES
}

/** Half the width of the shared body at a height. */
function halfAt(y: number): number {
  return RX * Math.sqrt(1 - ((y - 112) / RY) ** 2)
}

/** How far the middle band of the chopped fruit has slid, and dropped. */
const SLID = 16
const BAND_DROP = 4
const FOOT_DROP = 8

/** A whole ellipse lying flat, the face a cut leaves. */
function face(cx: number, y: number, drop: number): string {
  return polyline(trace([cx, y + drop], [halfAt(y), 6], [0, 360, 24]), true)
}

/**
 * The fruit cut in three, the middle band slid off to the right and the
 * pieces hanging apart, their cut faces showing. The power is the cut that
 * does not wound: the pieces stay whole, only out of line.
 */
export const CHOP_CHOP: Stroke[] = [
  // The cap, with the front edge of its cut face.
  {
    d: polyline(
      [
        ...trace([80, 112], [RX, RY], [180 - angleAt(92), 360 + angleAt(92)]),
        ...trace([80, 92], [halfAt(92), 6], [0, 180, 10]).slice(1),
      ],
      true,
    ),
  },
  // The band: its two sides and the front of its lower face.
  {
    d: polyline([
      ...trace(
        [80 + SLID, 112 + BAND_DROP],
        [RX, RY],
        [angleAt(97), angleAt(125), 6],
      ),
      ...trace(
        [80 + SLID, 125 + BAND_DROP],
        [halfAt(125), 6],
        [0, 180, 10],
      ).slice(1),
      ...trace(
        [80 + SLID, 112 + BAND_DROP],
        [RX, RY],
        [180 - angleAt(125), 180 - angleAt(97), 6],
      ).slice(1),
    ]),
  },
  // The foot, dropped a little under the cap.
  {
    d: polyline(
      trace(
        [80, 112 + FOOT_DROP],
        [RX, RY],
        [angleAt(130), 180 - angleAt(130), 12],
      ),
    ),
  },
  // The two cut faces that show: the band's and the foot's.
  {
    d: [face(80 + SLID, 97, BAND_DROP), face(80, 130, FOOT_DROP)].join(' '),
    role: 'accent',
  },
  {
    d: [
      curl(66, 78, 8),
      curl(95, 76, -7),
      curl(80, 115, 8),
      curl(114, 116, -8),
      curl(64, 152, -8),
      curl(96, 153, 8),
    ].join(' '),
    role: 'soft',
  },
  ...furniture('straight', 'right'),
]

/** The Room around the fruit, and the floor it closes on. */
const ROOM = { cx: 80, cy: 106, r: 72, floor: 166 }

/** Half the width of the Room where it meets its floor. */
const ROOM_FLOOR = Math.sqrt(ROOM.r ** 2 - (ROOM.floor - ROOM.cy) ** 2)

/**
 * The fruit standing in a Room: the sphere its eater opens before any cut,
 * closing on the ground it stands on. The fruit itself is a plain one; the
 * real one is not seen until episode 704, where `fruitRedrawn` draws it.
 */
export const OP_OP: Stroke[] = [
  { d: lobed('round', RX, RY) },
  {
    d: polyline(
      trace(
        [ROOM.cx, ROOM.cy],
        [ROOM.r, ROOM.r],
        [
          180 - Math.asin((ROOM.floor - ROOM.cy) / ROOM.r) / DEGREES,
          360 + Math.asin((ROOM.floor - ROOM.cy) / ROOM.r) / DEGREES,
          40,
        ],
      ),
    ),
    role: 'accent',
  },
  {
    d: [
      curl(80, 112, 13),
      curl(58, 96, -10),
      curl(102, 98, 10),
      curl(101, 136, -10),
      curl(59, 136, 10),
    ].join(' '),
    role: 'soft',
  },
  // The floor of the Room: its front edge, and the back of it either side
  // of the fruit.
  {
    d: [
      polyline(trace([80, ROOM.floor], [ROOM_FLOOR, 8], [0, 180, 16])),
      polyline(trace([80, ROOM.floor], [ROOM_FLOOR, 8], [180, 222, 5])),
      polyline(trace([80, ROOM.floor], [ROOM_FLOOR, 8], [318, 360, 5])),
    ].join(' '),
    role: 'ambient',
    dashed: true,
  },
  ...furniture('straight', 'right').slice(0, 2),
]

/**
 * The real fruit, from episode 704: a heart under a skin of curls, the stalk
 * a crossbar wound up at both ends.
 */
export const OP_OP_HEART: Stroke[] = [
  {
    d: [
      'M80 82 C72 66 50 60 38 70 C24 82 26 104 38 120',
      'C50 138 68 150 80 166 C92 150 110 138 122 120',
      'C134 104 136 82 122 70 C110 60 88 66 80 82 Z',
    ].join(' '),
  },
  {
    d: [
      curl(80, 108, 12),
      curl(57, 88, -10),
      curl(103, 88, 10),
      curl(47, 110, 8),
      curl(113, 110, -8),
      curl(66, 132, -10),
      curl(95, 132, 10),
      curl(80, 151, -7),
    ].join(' '),
    role: 'accent',
  },
  {
    d: [
      'M80 82 L80 62',
      'M64 54 C60 50 54 54 56 59 C58 63 68 63 80 62',
      'C92 63 102 63 104 59 C106 54 100 50 96 54',
    ].join(' '),
  },
  shadowUnder(1),
]

/** One lobe of the dark fruit: a teardrop, its tip turned up and over. */
function teardrop(cx: number, cy: number, r: number): string {
  const at = (x: number, y: number): string => point(cx + x * r, cy + y * r)

  return [
    `M${at(0.3, -1.5)}`,
    `C${at(0.2, -1)} ${at(1, -0.8)} ${at(1, 0)}`,
    `C${at(1, 0.6)} ${at(0.55, 1)} ${at(0, 1)}`,
    `C${at(-0.55, 1)} ${at(-1, 0.6)} ${at(-1, 0)}`,
    `C${at(-1, -0.5)} ${at(-0.6, -0.9)} ${at(0.3, -1.5)}`,
    'Z',
  ].join(' ')
}

/** Where the inner lobes of the dark fruit sit, row by row. */
const LOBES: [number, number][] = [
  [66, 94],
  [94, 94],
  [52, 118],
  [80, 118],
  [108, 118],
  [66, 142],
  [94, 142],
]

/**
 * The real fruit, seen in Teach's hand in episode 325: a round bunch of
 * teardrop lobes, a curl on each, and a tuft of long leaves on top.
 */
export const DARK_DARK: Stroke[] = [
  {
    // The outline of the bunch: the outer lobes, scalloped all the way round.
    d: polyline(
      Array.from({ length: 91 }, (_unused, at) => {
        const angle = (at / 90) * 2 * Math.PI
        const reach = 46 * (0.93 + 0.07 * Math.abs(Math.sin(4.5 * angle)))

        return point(
          80 + reach * Math.cos(angle),
          116 + reach * Math.sin(angle),
        )
      }),
      true,
    ),
  },
  { d: LOBES.map(([x, y]) => teardrop(x, y, 10)).join(' '), role: 'soft' },
  {
    d: LOBES.map(([x, y], at) => curl(x, y + 2, at % 2 === 0 ? 6 : -6)).join(
      ' ',
    ),
    role: 'accent',
  },
  {
    d: [
      'M80 72 C70 58 52 52 38 58 C52 60 66 66 80 72 Z',
      'M80 72 C92 56 110 52 124 60 C110 60 94 66 80 72 Z',
      'M80 72 C74 60 66 50 56 44 C64 56 72 64 80 72 Z',
      'M80 72 C86 58 94 50 104 44 C96 56 88 64 80 72 Z',
    ].join(' '),
  },
  shadowUnder(1),
]

/**
 * A fruit whose foot has already run out: the skin gives way into grains,
 * and the grains into a heap on the ground.
 */
export const SAND_SAND: Stroke[] = [
  { d: polyline(trace([80, 112], [RX, RY], [128, 412, 32])) },
  {
    d: [
      ...[56, 66, 76, 104, 114, 124].map((angle) => {
        return speck(
          80 + RX * Math.cos(angle * DEGREES),
          112 + RY * Math.sin(angle * DEGREES),
        )
      }),
      speck(74, 150),
      speck(86, 150),
      speck(80, 156),
      speck(78, 162),
      speck(82, 167),
      speck(70, 175),
      speck(90, 175),
      speck(80, 176),
      'M44 182 C58 178 68 170 80 170 C92 170 102 178 116 182 Z',
    ].join(' '),
    role: 'accent',
  },
  {
    d: [curl(80, 100, 12), curl(57, 122, -9), curl(103, 124, 9)].join(' '),
    role: 'soft',
  },
  ...furniture('straight', 'right').slice(0, 2),
]

/** How far the string fruit's coil winds out before the thread leaves it. */
const SPOOL = 26

/**
 * The coil come loose: the mark wound on the skin like thread on a spool,
 * its end leaving the fruit and lying slack on the ground.
 */
export const STRING_STRING: Stroke[] = [
  { d: lobed('round', RX, RY) },
  {
    d: [
      polyline(
        Array.from({ length: 33 }, (_unused, at) => {
          const angle = -2.2 * 2 * Math.PI * (1 - at / 32)
          const reach = 2 + (SPOOL - 2) * (at / 32)

          return point(
            76 + reach * Math.cos(angle),
            112 + reach * Math.sin(angle),
          )
        }),
      ),
      'C110 112 118 116 124 120 C134 126 144 138 140 150',
      'C136 162 120 158 120 168 C120 176 134 178 146 174',
    ].join(' '),
    role: 'accent',
  },
  ...furniture('straight', 'right'),
]

/**
 * The real fruit, handed to Kaku in episode 271: a bunch of fingers like
 * bananas under a skin of curls, held together at the crown by its stalk.
 */
export const OX_OX_GIRAFFE: Stroke[] = [
  {
    // Four fingers, each down to its tip and back up to the notch between it
    // and the next, the last one turned out to the right.
    d: [
      'M52 74 C38 96 28 124 32 146 C35 162 52 164 56 150 C58 144 59 140 60 136',
      'C64 150 68 162 80 164 C92 166 96 152 92 140',
      'C100 152 108 158 118 156 C130 154 130 140 120 132',
      'C130 134 140 128 140 118 C140 106 124 98 112 92',
      'C100 86 86 74 76 72 C70 68 58 68 52 74 Z',
    ].join(' '),
  },
  {
    d: [
      'M60 72 C58 96 58 118 60 136',
      'M66 72 C76 96 86 120 92 140',
      'M72 72 C90 92 108 112 120 132',
    ].join(' '),
    role: 'soft',
  },
  {
    d: [
      curl(45, 112, -7),
      curl(45, 142, 6),
      curl(69, 110, 6),
      curl(78, 148, -7),
      curl(93, 116, -6),
      curl(107, 143, 7),
      curl(127, 120, -6),
    ].join(' '),
    role: 'accent',
  },
  {
    d: [
      'M50 74 C56 80 76 80 80 74',
      'M64 70 C64 60 62 52 56 46 C50 40 40 42 40 50 C40 56 48 57 49 51',
    ].join(' '),
  },
  shadowUnder(1),
]

/** The egg the bubble fruit is shaped as: narrower at the top. */
function eggAt(angle: number, side = 1): string {
  const radians = angle * DEGREES
  const width = 42 * Math.cos(radians) * (1 + 0.1 * Math.sin(radians))

  return point(80 + side * width, 114 + 52 * Math.sin(radians))
}

/**
 * The real fruit, beside Kaku's in episode 271: a melon held the long way,
 * its rind in segments under a skin of curls, a tendril for a stalk.
 */
export const BUBBLE_BUBBLE: Stroke[] = [
  {
    d: polyline(
      Array.from({ length: 49 }, (_unused, at) => eggAt(-90 + at * 7.5)),
      true,
    ),
  },
  {
    d: [-0.7, 0.42]
      .map((side) => {
        return polyline(
          Array.from({ length: 13 }, (_unused, at) =>
            eggAt(-90 + at * 15, side),
          ),
        )
      })
      .join(' '),
    role: 'soft',
  },
  {
    d: [
      curl(80, 112, 12),
      curl(60, 92, -9),
      curl(99, 89, 9),
      curl(55, 128, 9),
      curl(104, 130, -10),
      curl(80, 150, -8),
      curl(81, 78, -7),
    ].join(' '),
    role: 'accent',
  },
  { d: 'M80 62 C79 54 80 46 88 42 C96 38 104 40 104 46 C104 52 96 52 96 47' },
  shadowUnder(1),
]

/** A fishhook, the mark on the dark half of the brush fruit. */
function fishhook(x: number, y: number): string {
  return [
    `M${point(x - 2, y - 9)}`,
    `C${point(x + 4, y - 4)} ${point(x + 4, y + 5)} ${point(x - 1, y + 5)}`,
    `C${point(x - 5, y + 5)} ${point(x - 5, y - 1)} ${point(x - 1, y)}`,
  ].join(' ')
}

/** Where the dark half of the brush fruit gives way to the light. */
const DRIP_Y = 122

/**
 * The real fruit, seen once in a flashback in episode 976: the foot of a
 * gourd, dark above with fishhooks on it and light below with curls, its
 * stalk a crossbar wound up at one end and down at the other.
 */
export const BRUSH_BRUSH: Stroke[] = [
  {
    d: [
      'M74 64 C76 80 60 90 44 104 C28 118 26 142 40 154',
      'C52 164 66 166 80 166 C94 166 108 164 120 154',
      'C134 142 132 118 116 104 C100 90 84 80 86 64 Z',
    ].join(' '),
  },
  {
    // The edge of the dark half, hanging in scallops.
    d: [
      `M${point(31, DRIP_Y)}`,
      ...Array.from({ length: 5 }, (_unused, at) => {
        const from = 31 + at * 19.6
        const to = from + 19.6

        return `C${point(from + 3, DRIP_Y + 9)} ${point(to - 3, DRIP_Y + 9)} ${point(to, DRIP_Y)}`
      }),
    ].join(' '),
    role: 'soft',
  },
  {
    d: [
      fishhook(60, 110),
      fishhook(74, 100),
      fishhook(90, 100),
      fishhook(104, 110),
    ].join(' '),
    role: 'accent',
  },
  {
    // The dark half is hatched where it turns away, at either side.
    d: [
      'M36 120 L44 110',
      'M42 121 L50 111',
      'M124 120 L116 110',
      'M118 121 L110 111',
    ].join(' '),
    role: 'ambient',
  },
  {
    d: [curl(54, 142, -8), curl(80, 147, 9), curl(106, 142, -8)].join(' '),
    role: 'soft',
  },
  {
    d: [
      'M80 64 L80 54',
      'M80 54 C70 54 60 54 54 50 C48 46 50 38 56 38 C62 38 62 46 57 45',
      'M80 54 C92 54 102 54 108 58 C114 62 112 70 106 70 C100 70 100 63 105 63',
    ].join(' '),
  },
  shadowUnder(1),
]

/** The round kit body, where most of the pilot fruits sit. */
const ROUND: Body = { family: 'round', cy: 116 }

/** Where the smoke fruit sits: high enough to sink its foot in the cloud. */
const SMOKE_BODY: Body = { family: 'segmented', cy: 100 }

/**
 * The fruit sunk in its own smoke: a bank of cloud where the shadow would
 * be, the skin going down into it. Smoker fills the street with clouds of
 * it in episode 53, so the smoke is a cloud and not yet anything he rides.
 */
export const SMOKE_SMOKE: Stroke[] = [
  { d: outline(SMOKE_BODY, (_x, y) => y < 140) },
  crown(SMOKE_BODY),
  shine(SMOKE_BODY),
  ribs(SMOKE_BODY),
  hatching(SMOKE_BODY, [84, 96, 108, 120]),
  ...skin([
    [62, 104, 8],
    [98, 116, -7],
  ]),
  ...sprout(SMOKE_BODY, 6, 'right'),
  {
    d: `${billow([
      [16, 172],
      [24, 152],
      [44, 140],
      [64, 146],
      [84, 136],
      [104, 146],
      [124, 138],
      [140, 150],
      [144, 172],
    ])} C110 177 50 177 16 172 Z`,
    role: 'accent',
  },
  // The near edge of the bank, a lower row of cloud in front of the first.
  {
    d: billow([
      [28, 166],
      [48, 160],
      [70, 164],
      [92, 158],
      [114, 164],
      [132, 160],
    ]),
    role: 'soft',
  },
  { d: 'M36 186 C60 189 100 189 124 186', role: 'ambient', dashed: true },
]

/** Where the bomb fruit's blast is centred: on its right side, at the waist. */
const BLAST = { cx: 122, cy: 116, tilt: 8 }

/** A ragged star about the blast, one radius per point, inner and outer. */
function blast(reach: number[]): string {
  return polyline(
    reach.map((r, at) => {
      const angle = (BLAST.tilt + (360 * at) / reach.length) * DEGREES

      return point(
        BLAST.cx + r * Math.cos(angle),
        BLAST.cy + r * Math.sin(angle),
      )
    }),
    true,
  )
}

/**
 * The fruit going off: a blast breaks out of its right side, where the skin
 * is open, and flecks fly from it. In episode 66 Mr. 5's arm goes off like a
 * shell when it lands, and so does what he flicks from his nose.
 */
export const BOMB_BOMB: Stroke[] = [
  { d: outline(ROUND, (x, y) => x < 112 || Math.abs(y - 116) > 30) },
  crown(ROUND),
  shine(ROUND),
  hatching(ROUND, [150, 158]),
  ...skin([
    [64, 116, 9],
    [88, 136, -8],
    [70, 150, -7],
  ]),
  ...sprout(ROUND, -4, 'left'),
  {
    d: [
      blast([30, 15, 22, 14, 31, 16, 19, 13, 27, 15, 24, 13, 29, 16, 20, 14]),
      speck(146, 78),
      speck(150, 150),
      speck(140, 162),
    ].join(' '),
    role: 'accent',
  },
  { d: blast([12, 6, 10, 6, 12, 6, 10, 6]), role: 'soft' },
  shadowUnder(1),
]

/**
 * One horn grown out of the shoulder: both ends of it sit on the rim, so the
 * horn comes out of the skin rather than resting on it. Out, up, and the tip
 * turned in.
 */
const HORN: Growth = {
  from: 90,
  to: 77,
  through: [
    [50, 88],
    [58, 80],
    [60, 68],
    [61, 60],
    [58, 54],
    [54, 50],
    [52, 58],
    [50, 66],
    [44, 72],
    [38, 77],
    [30, 78],
  ],
}

/**
 * The fruit with a bison's horns: two short horns out of its shoulders,
 * curving out and up as Dalton's do when he turns into the beast in episodes
 * 81 and 82. The horns and nothing else, never the head.
 */
export const OX_OX_BISON: Stroke[] = [
  { d: outline(ROUND) },
  crown(ROUND),
  shine(ROUND),
  hatching(ROUND, [116, 128, 140]),
  ...skin([
    [64, 116, 9],
    [92, 134, -8],
    [68, 148, -7],
  ]),
  ...sprout(ROUND, 0, 'right'),
  { d: `${grown(ROUND, -1, HORN)} ${grown(ROUND, 1, HORN)}`, role: 'accent' },
  shadowUnder(1),
]

/** The ice fruit: a heart, standing high enough to be frozen in. */
const ICE_BODY: Body = { family: 'heart', cy: 100 }

/**
 * The top of the ice, left to right: shards pointing up at angles, with the
 * gaps between them low enough to show the fruit behind.
 */
const SHARDS: Point[] = [
  [14, 178],
  [16, 150],
  [30, 130],
  [40, 150],
  [56, 112],
  [70, 142],
  [88, 106],
  [100, 140],
  [124, 114],
  [130, 140],
  [146, 128],
  [146, 178],
]

/** How high a profile stands at a point across it: the ice, the snow. */
function heightOn(profile: Point[], x: number): number {
  const right = profile.findIndex(([at]) => at >= x)
  const [x1, y1] = profile[right] ?? [x, 178]
  const [x0, y0] = profile[right - 1] ?? [x1, y1]

  return x1 === x0 ? y1 : y0 + ((y1 - y0) * (x - x0)) / (x1 - x0)
}

/**
 * The fruit frozen into the ground: a cluster of ice shards where the shadow
 * would be, broken off at angles, and the foot of the fruit locked in it. In
 * episode 227 whatever Aokiji touches freezes over, the sea and Robin with
 * it, and the frozen sea stands up in points like these.
 */
export const ICE_ICE: Stroke[] = [
  { d: outline(ICE_BODY, (x, y) => y < heightOn(SHARDS, x) - 2) },
  crown(ICE_BODY),
  shine(ICE_BODY),
  hatching(ICE_BODY, [80, 92, 104]),
  ...skin([
    [64, 88, 9],
    [100, 120, -6],
  ]),
  ...sprout(ICE_BODY, -4, 'left'),
  {
    d: polyline(
      SHARDS.map(([x, y]) => point(x, y)),
      true,
    ),
    role: 'accent',
  },
  // The faces of the shards, where the ice turns.
  {
    d: [
      'M30 130 L34 154 L28 176',
      'M56 112 L60 146 L52 174',
      'M88 106 L84 144 L92 174',
      'M124 114 L118 148 L124 176',
    ].join(' '),
    role: 'soft',
  },
  { d: 'M20 186 C50 189 110 189 140 186', role: 'ambient', dashed: true },
]

/** The waist of a gourd at a height, where its two bulbs meet. */
function waist(body: Body, y: number): Stroke {
  return {
    d: [
      `M${point(...onRim(body, y, -1))}`,
      `C${point(70, y + 6)} ${point(90, y + 6)}`,
      point(...onRim(body, y, 1)),
    ].join(' '),
    role: 'soft',
  }
}

/** The spring fruit: a gourd, its stalk wound into a coil. */
const SPRING_BODY: Body = { family: 'gourd', cy: 124 }

/** The coil: turns, the height it climbs, its width and how far it leans. */
const COIL = { turns: 4.5, height: 40, rx: 8, ry: 3.5, steps: 72 }

/**
 * The stalk wound into a spring, as Bellamy's legs are when he bounds off a
 * roof and across Mock Town in episode 151. The coil is seen a little from
 * above, so every turn is an ellipse and the near half of each crosses the
 * far one.
 */
export const SPRING_SPRING: Stroke[] = [
  { d: outline(SPRING_BODY) },
  crown(SPRING_BODY),
  shine(SPRING_BODY),
  hatching(SPRING_BODY, [140, 152, 162]),
  waist(SPRING_BODY, 118),
  ...skin([
    [70, 98, 6],
    [62, 144, 9],
    [96, 154, -7],
  ]),
  {
    d: polyline(
      Array.from({ length: COIL.steps + 1 }, (_unused, at) => {
        const along = at / COIL.steps
        const angle = along * COIL.turns * 2 * Math.PI

        return point(
          80 + COIL.rx * Math.sin(angle),
          crownY(SPRING_BODY)
            + 6
            - along * COIL.height
            + COIL.ry * Math.cos(angle),
        )
      }),
    ),
    role: 'accent',
  },
  {
    // The leaf, still on the end of the coil.
    d: leafPath(
      'right',
      { baseY: crownY(SPRING_BODY) + 18 - COIL.height, lean: 0, rise: 20 },
      4,
    ),
    role: 'soft',
  },
  shadowUnder(1),
]

/** The munch fruit: an oblong, a bite gone out of its shoulder. */
const MUNCH_BODY: Body = { family: 'oblong', cy: 116 }

/** The bite: where the teeth closed, and how wide the mouth was. */
const BITE = { cx: 116, cy: 84, r: 30 }

/** The stretch of the bite's edge that runs through the fruit, as points. */
function biteEdge(r: number, step: number): Point[] {
  return Array.from({ length: 360 / step + 1 }, (_unused, at): Point => {
    const angle = (at * step * Math.PI) / 180

    return [BITE.cx + r * Math.cos(angle), BITE.cy + r * Math.sin(angle)]
  }).filter(([x, y]) => Math.abs(x - 80) < halfWidth(MUNCH_BODY, y) - 1)
}

/**
 * The fruit with a bite gone out of it, the edge scalloped where each tooth
 * went in. In episode 79 Wapol eats a sword off its skewer and starts on the
 * Going Merry, and what he bites, he takes a bite out of.
 */
export const MUNCH_MUNCH: Stroke[] = [
  {
    d: outline(
      MUNCH_BODY,
      (x, y) => Math.hypot(x - BITE.cx, y - BITE.cy) > BITE.r,
    ),
  },
  crown(MUNCH_BODY),
  shine(MUNCH_BODY),
  hatching(MUNCH_BODY, [126, 138, 150]),
  ...skin([
    [62, 112, 9],
    [92, 140, -8],
    [64, 148, -7],
  ]),
  ...sprout(MUNCH_BODY, -6, 'left'),
  { d: billow(biteEdge(BITE.r, 20).toReversed()), role: 'accent' },
  // Where the skin stops and the flesh the teeth went into starts.
  {
    d: polyline(biteEdge(BITE.r + 6, 10).map(([x, y]) => point(x, y))),
    role: 'soft',
  },
  shadowUnder(1),
]

/** The falcon fruit: a pear, narrow at the shoulder. */
const FALCON_BODY: Body = { family: 'pear', cy: 118 }

/**
 * One wing out of the shoulder, both ends of it on the rim: up to the tip
 * along its leading edge, then back down in three steps, one per flight
 * feather.
 */
const WING: Growth = {
  from: 92,
  to: 112,
  through: [
    [34, 74],
    [48, 56],
    [66, 44],
    [68, 54],
    [66, 60],
    [62, 64],
    [64, 72],
    [60, 78],
    [54, 82],
    [54, 90],
    [48, 96],
    [40, 100],
    [36, 104],
    [32, 108],
  ],
}

/**
 * The fruit with a falcon's wings: two wings out of its shoulders, spread
 * as Pell's are when he first dives out of the sky in episode 106. The wings
 * and nothing else, never the head.
 */
export const BIRD_FALCON: Stroke[] = [
  { d: outline(FALCON_BODY) },
  crown(FALCON_BODY),
  shine(FALCON_BODY),
  hatching(FALCON_BODY, [130, 142, 154]),
  ...skin([
    [66, 136, 9],
    [94, 150, -8],
  ]),
  ...sprout(FALCON_BODY, 0, 'right'),
  {
    d: `${grown(FALCON_BODY, -1, WING)} ${grown(FALCON_BODY, 1, WING)}`,
    role: 'accent',
  },
  // The coverts, where the flight feathers start.
  {
    d: [
      `M${point(80 - 30, 80)} L${point(80 - 52, 64)}`,
      `M${point(80 + 30, 80)} L${point(80 + 52, 64)}`,
    ].join(' '),
    role: 'soft',
  },
  shadowUnder(1),
]

/** The slip fruit: an oblong, glossy enough that what hits it slides off. */
const SLIP_BODY: Body = { family: 'oblong', cy: 116 }

/** The rim heights the glide hugs, and how far off the skin it runs. */
const GLIDE = { from: 72, to: 104, off: 5 }

/** The glide: just off the near shoulder, down it, and away past the rim. */
function glide(): string {
  const hug = Array.from({ length: 11 }, (_unused, at) => {
    const y = GLIDE.from + ((GLIDE.to - GLIDE.from) * at) / 10
    const [x] = onRim(SLIP_BODY, y, -1)

    return point(x - GLIDE.off, y)
  })

  return `${polyline(hug)} C32.6 117.4 30.1 129.7 30 134`
}

/**
 * The fruit a stone has just slid off: one glide line hugs the near shoulder
 * and flies off past the rim, and the chunk drops away at the end of it. In
 * episode 52 Buggy blows up the fountain, a piece of it shoots at Alvida and
 * slips right off her.
 */
export const SLIP_SLIP: Stroke[] = [
  { d: outline(SLIP_BODY) },
  crown(SLIP_BODY),
  shine(SLIP_BODY),
  hatching(SLIP_BODY, [120, 132, 144]),
  ...skin([
    [68, 120, 9],
    [96, 142, -8],
  ]),
  ...sprout(SLIP_BODY, 6, 'right'),
  { d: glide(), role: 'accent' },
  // The chunk of the fountain, one face of it turned to the light.
  {
    d: [
      'M11 155 L16 148 L25 147 L31 153 L29 162 L20 166 L12 163 Z',
      'M25 147 L23 156 L29 162',
    ].join(' '),
    role: 'ambient',
  },
  // Which way it is going.
  { d: 'M26 140 L23 144 M32 144 L29 148', role: 'soft' },
  shadowUnder(1),
]

/** What every kit fruit is drawn with: its outline, crown, shine and hatching. */
function kitBody(
  body: Body,
  hatches: number[],
  keep?: (x: number, y: number) => boolean,
): Stroke[] {
  return [
    { d: outline(body, keep) },
    crown(body),
    shine(body),
    hatching(body, hatches),
  ]
}

/** The snow fruit: a heart, the snow banked up its far side. */
const SNOW_BODY: Body = { family: 'heart', cy: 108 }

/** The top of the drift, from the ground on the near side up to the shoulder. */
const DRIFT: Point[] = [
  [38, 176],
  [72, 162],
  [98, 136],
  [112, 108],
  [124, 84],
]

/** A snowflake: three short strokes crossed. */
function flake(x: number, y: number): string {
  return [0, 60, 120]
    .map((angle) => {
      const dx = 3.5 * Math.cos(angle * DEGREES)
      const dy = 3.5 * Math.sin(angle * DEGREES)

      return `M${point(x - dx, y - dy)} L${point(x + dx, y + dy)}`
    })
    .join(' ')
}

/**
 * The fruit snowed in: a drift banked up its far side as high as the
 * shoulder, the lip of it hanging over, and snow still falling. In episode
 * 608 Monet comes into the Biscuit Room in a blizzard, and by 611 she dives
 * in and out of the snowfield it leaves.
 */
export const SNOW_SNOW: Stroke[] = [
  ...kitBody(SNOW_BODY, [74, 84], (x, y) => y < heightOn(DRIFT, x) - 2),
  ...skin([
    [62, 102, 9],
    [76, 132, -7],
  ]),
  ...sprout(SNOW_BODY, -4, 'right'),
  {
    d: [
      billow(DRIFT),
      // The lip, hanging over the shoulder.
      'C122 74 110 70 100 76 L101 83',
      'M124 84 C136 86 144 98 146 118 C148 140 152 160 152 176 L38 176',
    ].join(' '),
    role: 'accent',
  },
  // The far face of the drift, turned away.
  {
    d: 'M144 118 L136 110 M148 134 L138 124 M148 150 L138 140 M148 166 L138 156',
    role: 'ambient',
  },
  {
    d: [flake(26, 56), flake(44, 30), flake(132, 36), flake(20, 96)].join(' '),
    role: 'soft',
  },
  { d: 'M14 186 C40 189 120 189 146 186', role: 'ambient', dashed: true },
]

/** The artificial dragon fruit: an oblong, long in the body. */
const DRAGON_BODY: Body = { family: 'oblong', cy: 120 }

/**
 * One horn out of the shoulder, both ends on the rim: swept back nearly
 * level to its point, then home along the top in two tines.
 */
const DRAGON_HORN: Growth = {
  from: 92,
  to: 84,
  through: [
    [44, 90],
    [58, 82],
    [70, 72],
    [66, 74],
    [62, 76],
    [58, 77],
    [58, 70],
    [57, 64],
    [54, 58],
    [53, 64],
    [51, 70],
    [50, 78],
    [47, 79],
    [45, 80],
    [42, 80],
    [42, 74],
    [41, 70],
    [38, 64],
    [37, 70],
    [36, 76],
  ],
}

/**
 * The fruit with a small dragon's horns: two horns out of its shoulders,
 * swept back with tines along the top, the ones Luffy grabs in episode 611
 * when he takes Momonosuke for an eel. The horns and nothing else, never
 * the head.
 */
export const ARTIFICIAL_DRAGON: Stroke[] = [
  ...kitBody(DRAGON_BODY, [124, 136, 148]),
  ...skin([
    [64, 122, 9],
    [94, 146, -8],
    [66, 152, -6],
  ]),
  ...sprout(DRAGON_BODY, 4, 'left'),
  {
    d: `${grown(DRAGON_BODY, -1, DRAGON_HORN)} ${grown(DRAGON_BODY, 1, DRAGON_HORN)}`,
    role: 'accent',
  },
  shadowUnder(1),
]

/** The spin fruit: a heart, lifted clear of its shadow. */
const SPIN_BODY: Body = { family: 'heart', cy: 104 }

/** Where the propeller turns: the top of the stalk. */
const HUB: Point = [80, crownY(SPIN_BODY) - 16]

/**
 * The fruit flying on its own propeller: the two leaves at the top of the
 * stalk flattened into blades, a spin swept round them, the fruit off the
 * ground. In episode 618 Buffalo turns parts of himself into propellers and
 * flies, Baby 5 riding on him.
 */
export const SPIN_SPIN: Stroke[] = [
  ...kitBody(SPIN_BODY, [96, 108, 120]),
  ...skin([
    [64, 98, 9],
    [92, 124, -8],
    [72, 136, -6],
  ]),
  {
    d: stemPath('straight', {
      baseY: crownY(SPIN_BODY) + 6,
      lean: 0,
      rise: 22,
    }),
  },
  {
    d: [
      `M${point(...HUB)} C70 34 54 32 44 36 C52 42 70 44 ${point(...HUB)}`,
      `M${point(...HUB)} C90 36 106 38 116 44 C108 48 90 46 ${point(...HUB)}`,
      polyline(trace(HUB, [44, 9], [196, 344, 18])),
    ].join(' '),
    role: 'accent',
  },
  shadowUnder(0),
]

/** The arms fruit: a gourd, a blade out of its waist. */
const ARMS_BODY: Body = { family: 'gourd', cy: 120 }

/**
 * The fruit turning into a weapon: a sickle blade breaks out of the gourd's
 * waist, level, and curves up to its point, the skin open where it leaves.
 * In episode 608 Baby 5 turns her arms into sickles to go at Doflamingo;
 * the guns come later.
 */
export const ARMS_ARMS: Stroke[] = [
  ...kitBody(
    ARMS_BODY,
    [140, 152, 162],
    (x, y) => x < 90 || y < 110 || y > 123,
  ),
  waist(ARMS_BODY, 116),
  ...skin([
    [70, 96, 6],
    [62, 144, 9],
    [92, 154, -7],
  ]),
  ...sprout(ARMS_BODY, -4, 'right'),
  {
    d: [
      `M${point(...onRim(ARMS_BODY, 121, 1))}`,
      'L112 121 C136 122 154 102 150 70 C146 92 132 108 112 112',
      `L${point(...onRim(ARMS_BODY, 112, 1))}`,
    ].join(' '),
    role: 'accent',
  },
  // The bevel along the cutting edge.
  { d: 'M118 115 C134 112 144 100 148 82', role: 'soft' },
  shadowUnder(1),
]

/** The press fruit: a round, sunk low in what it was pressed into. */
const PRESS_BODY: Body = { family: 'round', cy: 126 }

/** The crater about its foot, seen a little from above. */
const CRATER = { cx: 80, cy: 158, rx: 62, ry: 14 }

/** Where the near rim of the crater runs, at a point across it. */
function nearRim(x: number): number {
  const across = (x - CRATER.cx) / CRATER.rx

  return CRATER.cy + CRATER.ry * Math.sqrt(Math.max(0, 1 - across ** 2))
}

/** A stretch of the crater's rim, set down a little when it has cracked. */
function rim(from: number, to: number, drop = 0): string {
  return polyline(
    trace(
      [CRATER.cx, CRATER.cy + drop],
      [CRATER.rx - drop, CRATER.ry],
      [from, to, Math.round((to - from) / 8)],
    ),
  )
}

/**
 * The fruit pressed down into the ground, its foot sunk in a crater whose
 * rim has cracked into pieces. In episode 631 Fujitora presses a crowd of
 * Donquixote thugs into a crater. The anime draws the gravity as rings of
 * light and the manga does not, so neither does this.
 */
export const PRESS_PRESS: Stroke[] = [
  ...kitBody(PRESS_BODY, [120, 132, 144], (x, y) => y < nearRim(x) - 3),
  ...skin([
    [62, 112, 9],
    [92, 132, -8],
    [76, 96, -6],
  ]),
  ...sprout(PRESS_BODY, 4, 'left'),
  {
    d: [
      rim(-36, 26),
      rim(30, 76, 1.5),
      rim(80, 124),
      rim(128, 168, 1.5),
      rim(172, 216),
      'M34 178 L26 180 L20 178 L12 181',
      'M126 178 L134 180 L140 178 L148 181',
    ].join(' '),
    role: 'accent',
  },
  // The far wall of the crater, either side of the fruit.
  {
    d: 'M24 154 L30 160 M30 150 L34 156 M136 154 L130 160 M130 150 L126 156',
    role: 'ambient',
  },
]

/** The glare fruit: a pear, seen through. */
const GLARE_BODY: Body = { family: 'pear', cy: 118 }

/** The finger-and-thumb circle, half over the near side. */
const LENS = { cx: 54, cy: 132, r: 19 }

/**
 * The fruit seen through: a finger-and-thumb circle held half over its near
 * side, and inside it the skin is gone and the far side shows. In episode
 * 640 Viola looks through clothes and skin this way. The circle is left open
 * where the finger meets the thumb, so it is never an eye.
 */
export const GLARE_GLARE: Stroke[] = [
  ...kitBody(
    GLARE_BODY,
    [130, 142, 154],
    (x, y) => Math.hypot(x - LENS.cx, y - LENS.cy) > LENS.r + 1,
  ),
  ...skin([
    [84, 112, 7],
    [92, 146, -8],
  ]),
  ...sprout(GLARE_BODY, 4, 'left'),
  {
    d: polyline(trace([LENS.cx, LENS.cy], [LENS.r, LENS.r], [-50, 280, 30])),
    role: 'accent',
  },
  // The far side, through the skin.
  { d: polyline(trace([80, 136], [18, 26], [150, 214, 8])), role: 'soft' },
  shadowUnder(1),
]

/** The jacket fruit: an oblong, its skin worn like a coat. */
const JACKET_BODY: Body = { family: 'oblong', cy: 116 }

/**
 * The fruit's skin opened down the front like a coat: the lapels folded
 * back, one wider than the other, and the hem parting at the foot. In
 * episode 646 Kelly Funk turns into a jacket and his brother Bobby puts
 * him on.
 */
export const JACKET_JACKET: Stroke[] = [
  ...kitBody(
    JACKET_BODY,
    [120, 132, 144],
    (x, y) => y < 156 || x < 74 || x > 92,
  ),
  ...skin([
    [58, 130, 7],
    [100, 140, -6],
  ]),
  ...sprout(JACKET_BODY, 6, 'right'),
  {
    d: [
      'M70 74 L54 94 L61 96 L57 102 L80 126',
      'M90 74 L100 86 L95 88 L97 93 L80 126',
      'M80 126 C81 136 82 144 82 150 L76 162 M82 150 L90 160',
    ].join(' '),
    role: 'accent',
  },
  // The lining, where the lapels turn.
  { d: 'M70 80 L78 116 M90 80 L82 116', role: 'soft' },
  shadowUnder(1),
]

/** The barrier fruit: a round, flat on the side that meets the glass. */
const BARRIER_BODY: Body = { family: 'round', cy: 114 }

/** Where the fruit meets the pane. */
const PANE_X = 114

/**
 * The fruit pressed flat against a pane of glass standing beside it, seen a
 * little from the side so its edge shows. In episode 637 Bartolomeo puts up
 * a barrier, and Hack's punch stops dead on it.
 */
export const BARRIER_BARRIER: Stroke[] = [
  {
    d: `${outline(BARRIER_BODY, (x) => x < PANE_X)} M${point(PANE_X, 86)} L${point(PANE_X, 145)}`,
  },
  crown(BARRIER_BODY),
  shine(BARRIER_BODY),
  hatching(BARRIER_BODY, [150, 158]),
  ...skin([
    [62, 112, 9],
    [92, 134, -8],
    [66, 146, -7],
  ]),
  ...sprout(BARRIER_BODY, -4, 'left'),
  {
    d: 'M116 44 L142 58 L142 166 L116 180 Z M116 44 L120 42 L146 56 L146 164 L142 166',
    role: 'accent',
  },
  // Light on the glass.
  { d: 'M124 78 L134 68 M124 90 L130 84', role: 'soft' },
  shadowUnder(1),
]

/** The swim fruit: an oblong, coming up out of the ground. */
const SWIM_BODY: Body = { family: 'oblong', cy: 110 }

/** How far the swimmer is tipped forward, in degrees. */
const SWIM_TIP = 22

/** A point of the swim fruit, turned forward about the middle of its body. */
function tip(x: number, y: number): string {
  const [dx, dy] = [x - 80, y - SWIM_BODY.cy]
  const [cos, sin] = [
    Math.cos(SWIM_TIP * DEGREES),
    Math.sin(SWIM_TIP * DEGREES),
  ]

  return point(80 + dx * cos - dy * sin, SWIM_BODY.cy + dx * sin + dy * cos)
}

/**
 * A stroke with every point moved, by default the swim fruit's tip forward.
 * A fruit path is absolute points, a command letter before the first of
 * each, so it moves a point at a time.
 */
function tipped(
  stroke: Stroke,
  move: (x: number, y: number) => string = tip,
): Stroke {
  const tokens = stroke.d.split(' ')
  const turned: string[] = []
  let at = 0

  while (at < tokens.length) {
    const token = tokens[at] ?? ''
    const command = /^[A-Z]/u.test(token) ? token.charAt(0) : ''

    if (command === 'Z') {
      turned.push(command)
      at += 1
    } else {
      const x = Number(token.slice(command.length))

      turned.push(`${command}${move(x, Number(tokens[at + 1]))}`)
      at += 2
    }
  }

  return { ...stroke, d: turned.join(' ') }
}

/**
 * The fruit surfacing from the ground as a swimmer does from water, tipped
 * forward, one swell in the ground rolling behind it and flat again past
 * it. In episode 664 Senor Pink swims through solid ground and comes up
 * behind his opponent.
 */
export const SWIM_SWIM: Stroke[] = [
  ...[
    ...kitBody(SWIM_BODY, [114, 126, 138]),
    ...skin([
      [64, 112, 9],
      [94, 138, -8],
    ]),
    ...sprout(SWIM_BODY, 4, 'right'),
  ].map((stroke) => tipped(stroke)),
  {
    d: 'M8 170 C20 170 26 154 36 153 C46 152 50 166 60 170 L152 170',
    role: 'accent',
  },
  // The ground, moving like water.
  {
    d: [
      'M14 180 C18 177 22 177 26 180 C30 183 34 183 38 180',
      'M102 180 C106 177 110 177 114 180 C118 183 122 183 126 180',
    ].join(' '),
    role: 'soft',
  },
]

/** The ripple fruit: a pear, a cape off its shoulder. */
const RIPPLE_BODY: Body = { family: 'pear', cy: 120 }

/**
 * The cape out of the shoulder, both ends on the rim: out along a wavy top
 * edge, down a trailing edge in waves, and back along the bottom.
 */
const CAPE: Growth = {
  from: 92,
  to: 112,
  through: [
    [26, 86],
    [38, 80],
    [48, 84],
    [56, 88],
    [64, 86],
    [72, 80],
    [74, 90],
    [66, 96],
    [70, 103],
    [74, 110],
    [64, 116],
    [72, 124],
    [60, 120],
    [52, 126],
    [42, 120],
    [34, 116],
    [26, 118],
  ],
}

/**
 * The fruit with a steel cape streaming off its shoulder, level, like a
 * flag in a breeze. In episode 668 Diamante's cape, a block of steel,
 * flutters as if it were cloth.
 */
export const RIPPLE_RIPPLE: Stroke[] = [
  ...kitBody(
    RIPPLE_BODY,
    [134, 146, 156],
    (x, y) => x < 94 || y < 90 || y > 114,
  ),
  ...skin([
    [66, 136, 9],
    [92, 150, -7],
  ]),
  ...sprout(RIPPLE_BODY, -4, 'left'),
  { d: grown(RIPPLE_BODY, 1, CAPE), role: 'accent' },
  // The folds along it.
  {
    d: 'M104 98 C116 94 128 98 140 94 M104 106 C118 104 128 110 142 108',
    role: 'soft',
  },
  shadowUnder(1),
]

/** The ton fruit: a gourd, coming down hard. */
const TON_BODY: Body = { family: 'gourd', cy: 120 }

/**
 * The fruit coming down at its full weight: two drop lines above it, and
 * the ground sagging under its foot. In episode 667 Machvise floats up over
 * Franky and drops on him; in 682 Law calls him a Super-Weight Human.
 */
export const TON_TON: Stroke[] = [
  ...kitBody(TON_BODY, [140, 152]),
  waist(TON_BODY, 116),
  ...skin([
    [70, 96, 6],
    [62, 144, 9],
  ]),
  ...sprout(TON_BODY, 0, 'left'),
  {
    d: [
      'M54 20 L54 60 M106 28 L106 64',
      'M8 160 C34 160 44 168 80 168 C116 168 126 160 152 160',
    ].join(' '),
    role: 'accent',
  },
  { d: 'M24 176 C50 182 110 182 136 176', role: 'ambient', dashed: true },
]

/** The heal fruit: a pear, mending. */
const HEAL_BODY: Body = { family: 'pear', cy: 118 }

/**
 * One tear on the fruit's lower half, resting on a split in the skin that is
 * closing under it. Low and off to the side, so it never reads as an eye. In
 * episode 714 Mansherry's tears heal whatever they touch.
 */
export const HEAL_HEAL: Stroke[] = [
  ...kitBody(HEAL_BODY, [130, 142, 154]),
  ...skin([
    [70, 104, 6],
    [66, 136, 8],
    [96, 112, -5],
  ]),
  ...sprout(HEAL_BODY, 4, 'right'),
  { d: teardrop(93, 140, 6), role: 'accent' },
  // The split, closing.
  { d: 'M86 152 C90 150 96 150 100 152 C96 154 90 154 86 152', role: 'soft' },
  shadowUnder(1),
]

/** The gas fruit: a pear, its lower half gone to gas. */
const GAS_BODY: Body = { family: 'pear', cy: 100 }

/** Where the skin stops and the gas starts: the pear at its widest. */
const GAS_LINE = 128

/**
 * The fruit with its lower half turned to gas: the skin stops at its
 * widest, and below it two wisps twist down into one tail that curls off to
 * nothing, so it floats with no foot and no shadow. From episode 582
 * Caesar's lower body is always gas; in 594 Law names him a Logia.
 */
export const GAS_GAS: Stroke[] = [
  ...kitBody(GAS_BODY, [108, 118], (_x, y) => y < GAS_LINE),
  ...skin([
    [70, 92, 6],
    [92, 116, -7],
  ]),
  ...sprout(GAS_BODY, 4, 'right'),
  {
    d: [
      `M${point(...onRim(GAS_BODY, GAS_LINE, -1))}`,
      'C36 146 56 152 78 156 C100 160 108 170 100 178 C96 182 90 180 92 175',
      `M${point(...onRim(GAS_BODY, GAS_LINE, 1))}`,
      'C124 142 112 148 96 150 C80 152 66 158 70 168',
    ].join(' '),
    role: 'accent',
  },
  // A last wisp, drifting off the tail.
  {
    d: 'M108 170 C112 166 116 168 120 166 C124 164 126 160 124 156',
    role: 'soft',
  },
]

/** The stitch fruit: an oblong, sewn to the ground. */
const STITCH_BODY: Body = { family: 'oblong', cy: 112 }

/** A cross stitch over the foot and the ground, at a point across it. */
function crossStitch(x: number): string {
  return `M${point(x - 5, 150)} L${point(x + 5, 170)} M${point(x + 5, 150)} L${point(x - 5, 170)}`
}

/**
 * The fruit sewn to the ground: three cross stitches over its foot and the
 * ground line, and the thread running off them to a loose knotted end. In
 * episode 641 Leo sews Robin to the ground and unpicks her again. No
 * needle: the show first puts one in his hand in episode 647.
 */
export const STITCH_STITCH: Stroke[] = [
  ...kitBody(STITCH_BODY, [116, 128, 140]),
  ...skin([
    [62, 110, 9],
    [94, 136, -8],
  ]),
  ...sprout(STITCH_BODY, -4, 'left'),
  {
    d: [
      ...[67, 80, 93].map((x) => crossStitch(x)),
      'M98 170 C110 176 122 174 130 168 C134 165 138 166 137 170 C136 173 132 172 133 169',
    ].join(' '),
    role: 'accent',
  },
  { d: 'M14 162 L152 162', role: 'ambient' },
  { d: 'M24 184 C50 187 110 187 136 184', role: 'ambient', dashed: true },
]

/** The art fruit: a gourd, its lower bulb pulled out of line. */
const ART_BODY: Body = { family: 'gourd', cy: 118 }

/** The bands of the lower bulb, top to bottom, and how far each has slid. */
const ART_TOP = 118
const ART_BANDS = [ART_TOP, 134, 150, 164]
const ART_SLIDE = [7, -8, 4]

/** One side of the lower bulb, every band slid its own way. */
function artSide(way: number): string[] {
  return ART_SLIDE.flatMap((dx, at) => {
    const top = ART_BANDS[at] ?? 0
    const bottom = ART_BANDS[at + 1] ?? 0

    return Array.from({ length: (bottom - top) / 2 + 1 }, (_unused, step) => {
      const y = top + step * 2

      return point(onRim(ART_BODY, y, way)[0] + dx, y)
    })
  })
}

/**
 * The fruit made a work of art: the upper bulb is still a fruit, the lower
 * one is cut into bands that have slid apart and no longer line up. In
 * episodes 644 to 648 Giolla turns the Sunny, Nami's Clima-Tact and the
 * crew into abstract art that no longer works.
 */
export const ART_ART: Stroke[] = [
  ...kitBody(ART_BODY, [84, 94], (_x, y) => y < ART_TOP),
  waist(ART_BODY, 116),
  ...skin([[70, 94, 6]]),
  ...sprout(ART_BODY, -4, 'right'),
  { d: polyline([...artSide(-1), ...artSide(1).toReversed()]), role: 'accent' },
  // The planes the bands were cut along.
  { d: 'M66 140 L78 150 M100 124 L108 132', role: 'soft' },
  { d: 'M118 140 L124 146 M124 152 L130 158', role: 'ambient' },
  shadowUnder(1),
]

/** The hobby fruit: a heart, its near side a doll's arm. */
const HOBBY_BODY: Body = { family: 'heart', cy: 112 }

/** The doll's joint at the shoulder, and the arm swung out from it. */
const JOINT: Point = onRim(HOBBY_BODY, 92, -1)
const ARM = { from: 98, to: 130, width: 10, swing: 24 * DEGREES }

/** A point of the arm, swung out about the joint. */
function swung([x, y]: Point): string {
  const [dx, dy] = [x - JOINT[0], y - JOINT[1]]
  const [cos, sin] = [Math.cos(ARM.swing), Math.sin(ARM.swing)]

  return point(JOINT[0] + dx * cos - dy * sin, JOINT[1] + dx * sin + dy * cos)
}

/** One edge of the arm, as it lay along the rim before it swung. */
function armEdge(inset: number): Point[] {
  return Array.from({ length: (ARM.to - ARM.from) / 4 + 1 }, (_unused, at) => {
    const y = ARM.from + at * 4

    return [onRim(HOBBY_BODY, y, -1)[0] + inset, y]
  })
}

const ARM_OUTER = armEdge(0)
const ARM_INNER = armEdge(ARM.width)

/**
 * The fruit turned into a toy: its near side is a doll's arm, swung out at
 * a round joint in the shoulder. In episode 663 Kyros explains that Sugar
 * turns people into toys with a touch: soldiers, dolls, marionettes. No
 * key: that is the real fruit's stalk, and it is not shown yet.
 */
export const HOBBY_HOBBY: Stroke[] = [
  ...kitBody(
    HOBBY_BODY,
    [100, 112, 124],
    (x, y) => x > 70 || y < 86 || y > ARM.to + 4,
  ),
  ...skin([
    [78, 110, 8],
    [96, 138, -7],
  ]),
  ...sprout(HOBBY_BODY, 4, 'left'),
  { d: polyline(trace(JOINT, [6, 6], [0, 360, 16]), true), role: 'accent' },
  {
    // The arm: down its outside, round the end and back up its inside.
    d: [
      polyline(ARM_OUTER.map((at) => swung(at))),
      `C${swung([ARM_OUTER.at(-1)?.[0] ?? 0, ARM.to + 8])}`,
      swung([ARM_INNER.at(-1)?.[0] ?? 0, ARM.to + 8]),
      ...ARM_INNER.toReversed().map((at, step) => {
        return step === 0 ? swung(at) : `L${swung(at)}`
      }),
    ].join(' '),
  },
  // The body's own side, where the arm came away from it.
  {
    d: polyline(
      [...ARM_INNER, onRim(HOBBY_BODY, ARM.to + 4, -1)].map(([x, y]) =>
        point(x, y),
      ),
    ),
  },
  shadowUnder(1),
]

/** The stick fruit: a gourd, pulled up out of its own mucus. */
const STICK_BODY: Body = { family: 'gourd', cy: 106 }

/** Where the strands reach the puddle. */
const PUDDLE_Y = 174

/**
 * One strand of mucus from the foot down to the puddle: wide where it holds
 * on at either end, pulled thin at a neck partway down.
 */
function strand(x: number, neck: number): string {
  const top = crownY(STICK_BODY) + 92 - Math.abs(x - 80) / 4
  const mid = top + (PUDDLE_Y - top) * neck

  return [-1, 1]
    .map((way) => {
      return [
        `M${point(x + way * 5, top)}`,
        `C${point(x + way, mid - 4)} ${point(x + way, mid + 2)}`,
        point(x + way * 6, PUDDLE_Y),
      ].join(' ')
    })
    .join(' ')
}

/**
 * The fruit lifted off a sticky puddle, three strands of mucus still
 * stretched between its foot and the ground, one sagging across to the
 * next. In episode 629 Trebol hangs off a tower by it, in 658 he takes Sai
 * with a chain of it, and in 669 the fruit is named.
 */
export const STICK_STICK: Stroke[] = [
  ...kitBody(STICK_BODY, [126, 138]),
  waist(STICK_BODY, 102),
  ...skin([
    [70, 82, 6],
    [64, 130, 8],
  ]),
  ...sprout(STICK_BODY, 4, 'left'),
  {
    d: [
      strand(64, 0.6),
      strand(80, 0.4),
      strand(96, 0.55),
      'M69 160 C72 166 75 166 78 162',
      'M30 176 C36 170 56 172 80 172 C104 172 124 170 130 176',
      'C132 181 116 183 98 181 C84 183 66 182 52 183 C38 183 28 181 30 176 Z',
    ].join(' '),
    role: 'accent',
  },
  // The shine on the puddle.
  { d: 'M104 177 L116 177', role: 'soft' },
]

/** The stone fruit: a segmented one, its foot gone into a course of stone. */
const STONE_BODY: Body = { family: 'segmented', cy: 114 }

/** The course of stone the fruit stands in, top and bottom. */
const COURSE = { top: 148, bottom: 172 }

/** Where a rib, or the rim (`at` 1), reaches the course, either side. */
function intoCourse(at: number, way: number): number {
  return 80 + way * at * halfWidth(STONE_BODY, COURSE.top)
}

/** One stone of the course, its corners knocked off. */
function block(x0: number, x1: number): string {
  const { top, bottom } = COURSE
  const corners: Point[] = [
    [x0 + 2, top],
    [x1 - 2, top],
    [x1, top + 2],
    [x1, bottom - 2],
    [x1 - 2, bottom],
    [x0 + 2, bottom],
    [x0, bottom - 2],
    [x0, top + 2],
  ]

  return polyline(
    corners.map(([x, y]) => point(x, y)),
    true,
  )
}

/**
 * The fruit gone into the stone: a course of blocks runs along the ground
 * and through its foot, and where it does, the skin stops at one seam and
 * the ribs carry on down as the joints between the stones. In episode 669
 * Pica merges with the palace and moves its walls; he never turns to stone
 * himself.
 */
export const STONE_STONE: Stroke[] = [
  ...kitBody(STONE_BODY, [106, 118, 130], (_x, y) => y < COURSE.top),
  ribs(STONE_BODY, COURSE.top),
  ...skin([
    [94, 102, 6],
    [104, 134, -6],
  ]),
  ...sprout(STONE_BODY, -4, 'right'),
  {
    d: [
      `M${point(intoCourse(1, -1), COURSE.top)} L${point(intoCourse(1, 1), COURSE.top)}`,
      ...[-1, 1].flatMap((way) =>
        [1, 0.5].map((at) => {
          const x = intoCourse(at, way)

          return `M${point(x, COURSE.top)} L${point(x, COURSE.bottom)}`
        }),
      ),
    ].join(' '),
    role: 'accent',
  },
  {
    d: [
      block(8, 24),
      block(26, intoCourse(1, -1) - 2),
      block(intoCourse(1, 1) + 2, 134),
      block(136, 152),
      `M${point(intoCourse(1, -1), COURSE.bottom)} L${point(intoCourse(1, 1), COURSE.bottom)}`,
    ].join(' '),
    role: 'soft',
  },
  { d: 'M13 154 L19 160 M126 154 L132 160 M68 160 L74 166', role: 'ambient' },
]

/** The pop fruit: a round, its shoulder swelling up. */
const POP_BODY: Body = { family: 'round', cy: 118 }

/** The stretch of the rim the swelling has, as angles in degrees. */
const SWELL = { from: 196, to: 252 }

/**
 * The fruit swelling until it bursts: the near shoulder blown up past the
 * rim in a tight bulge, its skin stretched, and split open at the top with
 * three short bursts. On the left, clear of the daibutsu's arm. In episode
 * 673 Gladius makes his arms and his helmet swell up and rupture.
 */
export const POP_POP: Stroke[] = [
  ...kitBody(POP_BODY, [126, 138, 150], (x, y) => {
    const angle = (Math.atan2(y - POP_BODY.cy, x - 80) / DEGREES + 360) % 360

    return angle < SWELL.from || angle > SWELL.to
  }),
  ...skin([
    [76, 128, 9],
    [100, 150, -7],
  ]),
  ...sprout(POP_BODY, 6, 'right'),
  {
    d: [
      'M38 104 C24 96 18 78 28 66 C31 62 34 60 38 60',
      'M45 59 C52 57 60 62 66 70 C68 73 69 75 70 76',
      'M40 56 L38 47 M44 56 L49 48 M36 59 L28 55',
    ].join(' '),
    role: 'accent',
  },
  // The skin, stretched tight over the swelling.
  { d: 'M32 80 C34 74 38 70 42 68 M36 92 C38 86 42 82 46 80', role: 'soft' },
  shadowUnder(1),
]

/** The calm fruit: a heart, its sound kept in. */
const CALM_BODY: Body = { family: 'heart', cy: 114 }

/** Where the sound leaves the fruit, on its near side. */
const SOUND: Point = onRim(CALM_BODY, 116, -1)

/**
 * The fruit's sound stopped dead: three broken sound arcs leave its near
 * side and end where a short stretch of a soundproof field, close round
 * the fruit, crosses them. Only that stretch is drawn, so it never reads as
 * the Room of the op-op fruit. In episodes 703 and 704 Rosinante puts up
 * his Silent field and breaks a vase without a sound.
 */
export const CALM_CALM: Stroke[] = [
  ...kitBody(CALM_BODY, [100, 112, 124]),
  ...skin([
    [86, 108, 9],
    [96, 136, -7],
  ]),
  ...sprout(CALM_BODY, 4, 'right'),
  {
    d: polyline(trace([80, CALM_BODY.cy], [62, 62], [146, 214, 12])),
    role: 'accent',
  },
  {
    d: [7, 13, 19]
      .flatMap((r, at) => [
        polyline(trace(SOUND, [r, r], [140 + at * 2, 172, 4])),
        polyline(trace(SOUND, [r, r], [188, 220 - at * 2, 4])),
      ])
      .join(' '),
  },
  shadowUnder(1),
]

/** The mammoth fruit: a gourd, tusks out of its sides at the waist. */
const MAMMOTH_BODY: Body = { family: 'gourd', cy: 118 }

/**
 * One tusk out of the side, both ends on the rim: out and down past the
 * lower bulb, the tip turned forward, and back up along its inside.
 */
const TUSK: Growth = {
  from: 104,
  to: 120,
  through: [
    [40, 104],
    [54, 116],
    [58, 134],
    [61, 150],
    [65, 160],
    [72, 157],
    [64, 156],
    [54, 148],
    [48, 136],
    [43, 127],
    [36, 121],
  ],
}

/**
 * The fruit with a mammoth's tusks: two long tusks out of its sides, down
 * past the lower bulb, the tips turned forward and kept apart. In episode
 * 759 Jack fights as a mammoth and Nekomamushi names his fruit an ancient
 * Elephant-Elephant. The tusks and nothing else, never the trunk or the head.
 */
export const ELEPHANT_MAMMOTH: Stroke[] = [
  ...kitBody(MAMMOTH_BODY, [140, 150, 160]),
  waist(MAMMOTH_BODY, 114),
  ...skin([
    [70, 92, 6],
    [64, 140, 8],
    [94, 152, -6],
  ]),
  ...sprout(MAMMOTH_BODY, 4, 'left'),
  {
    d: `${grown(MAMMOTH_BODY, -1, TUSK)} ${grown(MAMMOTH_BODY, 1, TUSK)}`,
    role: 'accent',
  },
  shadowUnder(1),
]

/** The soul fruit: a round, its soul leaving the near shoulder. */
const SOUL_BODY: Body = { family: 'round', cy: 118 }

/** Where on the near rim the soul is drawn out: the gap, top and bottom. */
const SOUL_GAP = { top: 80, bottom: 96 }

/**
 * The soul drawn out of the gap: a wavering neck up and away from the
 * shoulder, and the soft, rounded billow of it at the end, still joined.
 */
function soul(): string {
  return [
    `M${point(...onRim(SOUL_BODY, SOUL_GAP.bottom, -1))}`,
    'C36 92 34 86 32 80 C30 74 24 72 22 66',
    'C8 62 8 40 20 34 C24 22 42 20 48 30',
    'C56 36 54 50 46 54 C40 58 44 64 42 68',
    `C40 74 48 78 ${point(...onRim(SOUL_BODY, SOUL_GAP.top, -1))}`,
  ].join(' ')
}

/**
 * The fruit losing its soul: a pale, smoke-soft billow of it drawn up out
 * of a gap in the near shoulder and still joined to it there. In episode
 * 796 Pound tells how Big Mom takes lifespan as soul and puts it into
 * things. No homie and no face.
 */
export const SOUL_SOUL: Stroke[] = [
  ...kitBody(
    SOUL_BODY,
    [116, 128, 140],
    (x, y) => x > 80 || y < SOUL_GAP.top - 1 || y > SOUL_GAP.bottom + 1,
  ),
  ...skin([
    [72, 124, 9],
    [98, 146, -8],
    [60, 150, -6],
  ]),
  ...sprout(SOUL_BODY, 4, 'right'),
  { d: soul(), role: 'accent' },
  shadowUnder(1),
]

/** The book fruit: a round, held up over an open book. */
const BOOK_BODY: Body = { family: 'round', cy: 96 }

/** One page of the open book, out from the spine: its edges at a share across. */
function page(way: number, along: number): string {
  const back = 152
  const front = 180
  const y = back + (front - back) * along
  const at = (dx: number, dy: number): string => point(80 + way * dx, y + dy)

  return `M${at(0, 0)} C${at(16, -9)} ${at(44, -9)} ${at(58, 2 - along * 2)}`
}

/**
 * The fruit over an open book that is drawing it in: the book hovers under
 * it, near flat, its pages bowed down at the outer edges. In episode 811
 * Mont-d'Or blocks Luffy with a book that seems to suck him in. The show
 * holds the book over its target; it is drawn under the fruit here so it
 * reads at tile size.
 */
export const BOOK_BOOK: Stroke[] = [
  ...kitBody(BOOK_BODY, [94, 106, 118]),
  ...skin([
    [64, 96, 9],
    [94, 116, -8],
  ]),
  ...sprout(BOOK_BODY, -4, 'left'),
  {
    d: [
      ...[-1, 1].flatMap((way) => [
        page(way, 0),
        `L${point(80 + way * 56, 180)}`,
        page(way, 1),
      ]),
      'M80 152 L80 180',
    ].join(' '),
    role: 'accent',
  },
  {
    d: [-1, 1]
      .flatMap((way) => {
        return [0.3, 0.55, 0.8].map((along) => {
          const y = 152 + 28 * along

          return `M${point(80 + way * 10, y - 4)} C${point(80 + way * 22, y - 8)} ${point(80 + way * 36, y - 8)} ${point(80 + way * 46, y - 4)}`
        })
      })
      .join(' '),
    role: 'soft',
  },
  { d: 'M34 190 C60 193 100 193 126 190', role: 'ambient', dashed: true },
]

/** The wring fruit: a gourd, wrung at its waist. */
const WRING_BODY: Body = { family: 'gourd', cy: 120 }

/** How far each bulb is turned, top one way and bottom the other. */
function wrung(x: number, y: number): string {
  return point(x + 5 * Math.tanh((116 - y) / 10), y)
}

/**
 * The fruit wrung like a cloth: the top bulb turned one way and the bottom
 * the other, three twist lines across the waist, and one drop squeezed out
 * under them. In episode 812 Smoothie wrings a liquid out of a woman as if
 * she were a cloth.
 */
export const WRING_WRING: Stroke[] = [
  ...[
    ...kitBody(WRING_BODY, [146, 156]),
    ...skin([
      [70, 94, 6],
      [62, 148, -8],
    ]),
    ...sprout(WRING_BODY, 6, 'right'),
  ].map((stroke) => tipped(stroke, wrung)),
  {
    d: [
      ...[96, 106, 116].map((y) => {
        return [
          `M${wrung(...onRim(WRING_BODY, y, -1))}`,
          `C${point(66, y + 2)} ${point(92, y + 26)}`,
          wrung(...onRim(WRING_BODY, y + 22, 1)),
        ].join(' ')
      }),
      teardrop(84, 150, 4),
    ].join(' '),
    role: 'accent',
  },
  shadowUnder(1),
]

/** The egg fruit: an oblong, cracked open like an egg. */
const EGG_BODY: Body = { family: 'oblong', cy: 118 }

/** The break, from the near shoulder down to the far foot. */
const BREAK = { from: onRim(EGG_BODY, 100, -1), to: onRim(EGG_BODY, 146, 1) }

/** How high the break runs at a point across it. */
function breakAt(x: number): number {
  const [x0, y0] = BREAK.from
  const [x1, y1] = BREAK.to

  return y0 + ((y1 - y0) * (x - x0)) / (x1 - x0)
}

/** The zigzag of the break, as points from end to end. */
function breakLine(): Point[] {
  const [x0] = BREAK.from
  const [x1] = BREAK.to
  const teeth = 6

  return Array.from({ length: teeth + 1 }, (_unused, at): Point => {
    const x = x0 + ((x1 - x0) * at) / teeth
    // The teeth alternate up and down; the two ends sit on the rim.
    const off = at === 0 || at === teeth ? 0 : -5 * (-1) ** at

    return [x, breakAt(x) + off]
  })
}

/** The top of the shell, lifted off the break and tipped back. */
function lifted(x: number, y: number): string {
  const [hx, hy] = BREAK.from
  const turn = -18 * DEGREES
  const [dx, dy] = [x - hx, y - hy]

  return point(
    hx + dx * Math.cos(turn) - dy * Math.sin(turn) - 2,
    hy + dx * Math.sin(turn) + dy * Math.cos(turn) - 12,
  )
}

/**
 * The fruit cracked open like an egg: a zigzag break on the diagonal, the
 * top of the shell lifted off it and tipped back. In episode 820 Pedro cuts
 * Baron Tamago in half and a yolk flies out of him. The fruit is a Zoan
 * whose animal is the egg, so the shell is its attribute and the crack is
 * drawn on it; no chick and no rooster.
 */
export const EGG_EGG: Stroke[] = [
  { d: outline(EGG_BODY, (x, y) => y > breakAt(x) + 1) },
  hatching(EGG_BODY, [152, 160]),
  ...skin([[78, 150, -7]]),
  ...[
    { d: outline(EGG_BODY, (x, y) => y < breakAt(x) - 1) },
    crown(EGG_BODY),
    shine(EGG_BODY),
    ...skin([[90, 100, 8]]),
    ...sprout(EGG_BODY, 4, 'right'),
  ].map((stroke) => tipped(stroke, lifted)),
  {
    d: [
      polyline(breakLine().map(([x, y]) => point(x, y))),
      polyline(breakLine().map(([x, y]) => lifted(x, y))),
    ].join(' '),
    role: 'accent',
  },
  shadowUnder(1),
]

/** The heat fruit: a pear, its near side too hot to touch. */
const HEAT_BODY: Body = { family: 'pear', cy: 118 }

/** The band of heat: its top and bottom, and where it ends across the fruit. */
const HEAT = { top: 132, bottom: 148, end: 84 }

/** A wavering line across the band, from the rim to its end. */
function shimmer(y: number): string {
  const [x0] = onRim(HEAT_BODY, y, -1)

  return polyline(
    Array.from({ length: 25 }, (_unused, at) => {
      const x = x0 - 2 + ((HEAT.end - x0 + 2) * at) / 24

      return point(x, y + 1.8 * Math.sin(x / 2.4))
    }),
  )
}

/**
 * The fruit with its near side made too hot to touch: a short band across
 * it, its edges wavering as air over heat does, the outline wavering with
 * it. In episode 834 Oven heats Pedro's sword until it is too hot to hold.
 * Nothing rising off it and no sparks, so it is never fire or steam.
 */
export const HEAT_HEAT: Stroke[] = [
  ...kitBody(
    HEAT_BODY,
    [132, 144, 154],
    (x, y) => x > 70 || y < HEAT.top - 1 || y > HEAT.bottom + 1,
  ),
  ...skin([
    [74, 108, 6],
    [96, 154, -7],
  ]),
  ...sprout(HEAT_BODY, -4, 'left'),
  {
    d: [
      shimmer(HEAT.top),
      shimmer(HEAT.bottom),
      polyline(
        Array.from({ length: 9 }, (_unused, at) => {
          const y = HEAT.top + ((HEAT.bottom - HEAT.top) * at) / 8
          const [x] = onRim(HEAT_BODY, y, -1)

          return point(x - 2 + 2 * Math.sin(at * 1.8), y)
        }),
      ),
    ].join(' '),
    role: 'accent',
  },
  shadowUnder(1),
]

/** The puff fruit: a heart, a plume rising out of its belly. */
const PUFF_BODY: Body = { family: 'heart', cy: 112 }

/**
 * The fruit with a plume rising out of its belly: narrow at a neck where it
 * leaves the skin, up in an S beside the fruit and off in a flat swirl,
 * like a lamp's genie with no figure. In episode 834 Daifuku rubs his belly
 * and a genie comes out of it to fight Sanji.
 */
export const PUFF_PUFF: Stroke[] = [
  ...kitBody(PUFF_BODY, [134, 144], (x, y) => x < 110 || y < 110 || y > 122),
  ...skin([
    [62, 104, 9],
    [88, 132, -8],
  ]),
  ...sprout(PUFF_BODY, -4, 'left'),
  {
    d: [
      `M${point(...onRim(PUFF_BODY, 110, 1))}`,
      'C126 108 128 102 128 96 C128 88 120 82 120 72',
      'C120 60 132 56 134 48 C135 42 128 40 126 44 C124 48 130 50 132 46',
      `M${point(...onRim(PUFF_BODY, 120, 1))}`,
      'C134 120 144 110 144 98 C144 88 134 84 136 74',
      'C138 64 152 60 150 46 C148 34 132 30 122 38',
    ].join(' '),
    role: 'accent',
  },
  shadowUnder(1),
]

/** The cook fruit: a round, its lower half turned to meat. */
const COOK_BODY: Body = { family: 'round', cy: 116 }

/** Where the skin stops and the meat starts. */
const SEAM = 126

/**
 * The fruit turned to food from the seam down: above it the skin, below it
 * a plain chunk of meat, soft and rounded, a hard step in the outline where
 * the two meet. In episode 838 a young Streusen turns a log into meat and
 * eats it. No bone and no cake.
 */
export const COOK_COOK: Stroke[] = [
  ...kitBody(COOK_BODY, [96, 108, 118], (_x, y) => y < SEAM),
  ...skin([
    [66, 94, 7],
    [80, 114, -7],
  ]),
  ...sprout(COOK_BODY, 4, 'right'),
  {
    d: [
      `M${point(...onRim(COOK_BODY, SEAM, -1))}`,
      'L31 129 C26 138 26 148 34 154 C38 162 50 166 60 165',
      'C70 171 90 171 100 165 C112 163 120 154 119 146',
      'C123 141 123 137 121 133',
      `L${point(...onRim(COOK_BODY, SEAM, 1))}`,
    ].join(' '),
    role: 'accent',
  },
  // Where the skin stops, across the front, and a shine on the meat.
  {
    d: [
      `M${point(...onRim(COOK_BODY, SEAM, -1))}`,
      'C58 134 102 134',
      point(...onRim(COOK_BODY, SEAM, 1)),
      'M40 142 C40 148 44 153 50 155',
    ].join(' '),
    role: 'soft',
  },
  shadowUnder(1),
]

/** The pump fruit: a segmented one, sticks rising out of its rim. */
const PUMP_BODY: Body = { family: 'segmented', cy: 120 }

/** The sticks: the rim angle each leaves at, which way it points, how long. */
const STICKS = [
  { at: 206, way: 232, reach: 38 },
  { at: 222, way: 246, reach: 44 },
  { at: 238, way: 262, reach: 38 },
]

/** Where a stick leaves the rim. */
function stickBase(at: number): Point {
  return [
    80 + 44 * Math.cos(at * DEGREES),
    PUMP_BODY.cy + 46 * Math.sin(at * DEGREES),
  ]
}

/**
 * One stick out of the rim: a little crooked, a knot on one side, the end
 * snapped off at a slant, and a twig off it partway up.
 */
function stick({ at, way, reach }: (typeof STICKS)[number]): string {
  const [bx, by] = stickBase(at)
  const [ux, uy] = [Math.cos(way * DEGREES), Math.sin(way * DEGREES)]
  const [nx, ny] = [-uy, ux]
  const at2 = (along: number, across: number): string => {
    return point(bx + ux * along + nx * across, by + uy * along + ny * across)
  }

  return [
    `M${at2(0, -2.2)} L${at2(reach * 0.45, -1.4)} L${at2(reach * 0.5, -2.6)}`,
    `L${at2(reach * 0.56, -1.4)} L${at2(reach + 2, -1.4)} L${at2(reach - 2, 1.6)}`,
    `L${at2(reach * 0.6, 1.8)} L${at2(0, 2.2)}`,
    `M${at2(reach * 0.62, 1.8)} L${at2(reach * 0.8, 8)}`,
  ].join(' ')
}

/**
 * The fruit roused: three sticks raised out of its near rim, the skin open
 * where they come out. In episode 880 Belo Betty waves her flag and the
 * townspeople of Lulusia take up sticks and drive the pirates off. The
 * power shows only in what it rouses, so the sticks are what is drawn; no
 * flag, which is hers and not the fruit's.
 */
export const PUMP_PUMP: Stroke[] = [
  ...kitBody(PUMP_BODY, [116, 128, 140], (x, y) => {
    for (const { at } of STICKS) {
      const [bx, by] = stickBase(at)

      if (Math.hypot(x - bx, y - by) < 4) {
        return false
      }
    }

    return true
  }),
  ribs(PUMP_BODY),
  ...skin([
    [66, 132, 8],
    [96, 150, -7],
  ]),
  ...sprout(PUMP_BODY, 8, 'right'),
  { d: STICKS.map((one) => stick(one)).join(' '), role: 'accent' },
  shadowUnder(1),
]

/** The push fruit: a pear, the ground pushed up over its foot. */
const PUSH_BODY: Body = { family: 'pear', cy: 114 }

/** The top of the bank, from the ground on the near side to the foot. */
const BANK: Point[] = [
  [8, 176],
  [30, 150],
  [52, 132],
  [66, 129],
  [77, 140],
  [74, 152],
  [80, 164],
  [86, 176],
]

/**
 * The ground pushed up like clay: a bank rises at the fruit's foot and
 * rolls over the near side of it, the outline lost where the earth folds
 * over. In episode 880 Morley comes up out of the ground and pushes it at
 * the Peachbeard Pirates like clay.
 */
export const PUSH_PUSH: Stroke[] = [
  ...kitBody(PUSH_BODY, [130, 142, 152], (x, y) => y < heightOn(BANK, x) - 2),
  ...skin([
    [74, 110, 6],
    [96, 150, -7],
  ]),
  ...sprout(PUSH_BODY, 4, 'right'),
  {
    d: [
      'M8 176 C20 162 36 140 52 132 C62 126 74 130 77 140',
      'C79 148 75 153 68 151',
      'M70 152 C76 158 82 168 86 176',
    ].join(' '),
    role: 'accent',
  },
  // The clay, folded as it was pushed.
  {
    d: 'M22 168 C32 156 44 146 58 140 M40 172 C48 164 58 158 68 157',
    role: 'soft',
  },
  {
    d: 'M6 176 L154 176 M96 174 L100 169 L106 170 L108 174 Z M118 174 L121 171 L125 173 Z',
    role: 'ambient',
  },
]

/** A frame turned about a centre: a point across it and down it, in the box. */
function turnedAbout(
  [cx, cy]: Point,
  degrees: number,
): (u: number, v: number) => Point {
  const [cos, sin] = [Math.cos(degrees * DEGREES), Math.sin(degrees * DEGREES)]

  return (u, v) => [cx + u * cos - v * sin, cy + u * sin + v * cos]
}

/** The turtle fruit: a round, a shell grown over its upper back. */
const TURTLE_BODY: Body = { family: 'round', cy: 122 }

/** The shell: its radii, how far its rim lips out, and how deep the rim is. */
const SHELL = { rx: 48, ry: 44, lip: 53, rim: 12 }

/** A point on the shell, in a frame tipped a little toward the near side. */
const onShell = turnedAbout([80, 110], 8)

/** Whether a point of the fruit is under the shell, above its rim. */
function underShell(x: number, y: number): boolean {
  const [u, v] = turnedAbout([0, 0], -8)(x - 80, y - 110)

  return v < SHELL.rim * Math.sqrt(Math.max(0, 1 - (u / SHELL.lip) ** 2)) + 1
}

/** A stretch of an ellipse about the middle of the shell, as points. */
function shellArc(
  [rx, ry]: [number, number],
  [from, to, steps]: [number, number, number],
  drop = 0,
): string[] {
  return Array.from({ length: steps + 1 }, (_unused, at) => {
    const angle = (from + ((to - from) * at) / steps) * DEGREES

    return point(...onShell(rx * Math.cos(angle), ry * Math.sin(angle) + drop))
  })
}

/** Points across the shell joined into one line. */
function onShellLine(points: Point[], closed = false): string {
  return polyline(
    points.map(([u, v]) => point(...onShell(u, v))),
    closed,
  )
}

/** Where the stalk comes up through the top of the shell. */
const SHELL_STALK = { baseY: 110 - SHELL.ry + 2, lean: 4, rise: 18 }

/**
 * The fruit with a turtle's shell: a domed shell grown over its upper back,
 * its rim lipping out over both sides, the plates of it seamed, and the
 * stalk coming up through the top. In episode 572 Caribou fires at Pekoms
 * and finds him hidden inside a tortoise shell; episode 776 names the fruit.
 * The shell and nothing else, never the head.
 */
export const TURTLE_TURTLE: Stroke[] = [
  { d: outline(TURTLE_BODY, (x, y) => !underShell(x, y)) },
  hatching(TURTLE_BODY, [136, 148]),
  ...skin([
    [62, 142, 8],
    [92, 158, -6],
  ]),
  {
    d: polyline([
      ...shellArc([SHELL.lip, SHELL.rim], [0, 180, 24]),
      point(...onShell(-SHELL.rx, -3)),
      ...shellArc([SHELL.rx, SHELL.ry], [180, 360, 24]).slice(1),
      point(...onShell(SHELL.lip, 0)),
    ]),
    role: 'accent',
  },
  // The plates: a row of them down the crown of the dome, the band of edge
  // plates along the rim, and the seams between.
  {
    d: [
      onShellLine(
        [
          [-10, -39],
          [10, -39],
          [15, -27],
          [0, -22],
          [-15, -27],
        ],
        true,
      ),
      onShellLine(
        [
          [-15, -27],
          [0, -22],
          [15, -27],
          [17, -8],
          [0, -2],
          [-17, -8],
        ],
        true,
      ),
      polyline(shellArc([SHELL.rx - 2, 9], [180, 0, 20], -5).toReversed()),
      ...[-1, 1].map((way) => {
        return onShellLine([
          [way * 17, -8],
          [way * 34, -15],
          [way * 34, -30],
          [way * 15, -27],
        ])
      }),
      ...[-1, 1].map((way) => {
        return onShellLine([
          [way * 34, -15],
          [way * 44, -7],
        ])
      }),
      onShellLine([
        [0, -2],
        [0, 3],
      ]),
    ].join(' '),
    role: 'soft',
  },
  {
    d: polyline(shellArc([SHELL.rx - 7, SHELL.ry - 7], [200, 232, 6])),
    role: 'soft',
  },
  { d: stemPath('straight', SHELL_STALK) },
  { d: leafPath('right', SHELL_STALK, 4), role: 'soft' },
  shadowUnder(1),
]

/** The castle fruit: a segmented one, a doorway open in its near flank. */
const CASTLE_BODY: Body = { family: 'segmented', cy: 116 }

/**
 * The fruit as a fortress: an arched doorway open in its near flank, with
 * no door in it, and a cannon barrel poking out of it, the skin open where
 * the barrel leaves. The fortress is kept inside the body, as it is when
 * Bege's crew fire from inside him; in episode 763 a door opens in his
 * chest, his men run out of it, and the fruit is named. Nothing castle-like
 * beyond the doorway.
 */
export const CASTLE_CASTLE: Stroke[] = [
  ...kitBody(
    CASTLE_BODY,
    [96, 108, 120],
    (x, y) => x > 44 || y < 121 || y > 134,
  ),
  ribs(CASTLE_BODY),
  ...skin([
    [100, 104, 7],
    [92, 142, -6],
  ]),
  ...sprout(CASTLE_BODY, 6, 'right'),
  {
    d: [
      // The doorway: its jambs, its arch and the sill.
      'M42 140 L42 133 M42 123 L42 106 C42 95 58 95 58 106 L58 140 Z',
      // The barrel out of it: the near edge, the muzzle, the far edge.
      'M52 124 L22 122.5 C19.5 122.5 18 125 18 127.5 C18 130 19.5 132.5 22 132.5 L52 131',
      'M22 122.5 C24 124 24 131 22 132.5',
    ].join(' '),
    role: 'accent',
  },
  // The depth of the doorway, inside the arch.
  { d: 'M58 140 L55 137 L55 106 C55 99 49 98 46 101', role: 'soft' },
  shadowUnder(1),
]

/** The lick fruit: an oblong, its near flank turned to candy. */
const LICK_BODY: Body = { family: 'oblong', cy: 116 }

/** The stretch of the near rim the candy has, top and bottom. */
const CANDY = { top: 88, bottom: 158 }

/**
 * The fruit with its near flank turned to candy: the patch drawn on the
 * rim, one clean edge across the skin, and a shine down it. No drip and
 * nothing poured. In episode 795 Perospero threatens to turn Caesar into
 * candy if the research is not done in two weeks.
 */
export const LICK_LICK: Stroke[] = [
  ...kitBody(
    LICK_BODY,
    [112, 124, 136],
    (x, y) => x > 64 || y < CANDY.top - 1 || y > CANDY.bottom + 1,
  ),
  ...skin([
    [94, 98, 7],
    [104, 140, -6],
  ]),
  ...sprout(LICK_BODY, 4, 'right'),
  {
    d: [
      polyline(
        Array.from({ length: 17 }, (_unused, at) => {
          return point(
            ...onRim(
              LICK_BODY,
              CANDY.top + ((CANDY.bottom - CANDY.top) * at) / 16,
              -1,
            ),
          )
        }),
      ),
      'C60 154 68 136 68 122',
      `C68 106 60 92 ${point(...onRim(LICK_BODY, CANDY.top, -1))}`,
    ].join(' '),
    role: 'accent',
  },
  // The candy's shine: a streak down it and a glint.
  { d: 'M40 108 C37 118 37 132 41 142 M43 100 L45 97', role: 'soft' },
  shadowUnder(1),
]

/** The mirror fruit: an oblong, its far half gone into a mirror. */
const MIRROR_BODY: Body = { family: 'oblong', cy: 118 }

/** The glass: its middle and radii. */
const GLASS = { cx: 116, cy: 112, rx: 28, ry: 56 }

/**
 * The fruit going into a mirror: an oval of glass standing at its far side,
 * the far half of the fruit gone into it, the outline stopping at the glass,
 * and a glint across it. In episode 796 Nami tells how Brûlée made a larger
 * mirror that sucked Carrot inside it.
 */
export const MIRROR_MIRROR: Stroke[] = [
  ...kitBody(MIRROR_BODY, [124, 136], (x, y) => {
    return (
      ((x - GLASS.cx) / (GLASS.rx + 1)) ** 2
        + ((y - GLASS.cy) / (GLASS.ry + 1)) ** 2
      > 1
    )
  }),
  ...skin([
    [62, 112, 9],
    [72, 148, -7],
  ]),
  ...sprout(MIRROR_BODY, -4, 'left'),
  {
    d: polyline(
      trace([GLASS.cx, GLASS.cy], [GLASS.rx, GLASS.ry], [0, 360, 36]),
      true,
    ),
    role: 'accent',
  },
  // A glint across the glass.
  { d: 'M116 78 L132 64 M122 86 L136 74', role: 'soft' },
  { d: 'M52 186 C76 189 118 189 140 186', role: 'ambient', dashed: true },
]

/** The bis fruit: a heart, a biscuit breaking out of its side. */
const BIS_BODY: Body = { family: 'heart', cy: 112 }

/** A point on the biscuit, which is turned a little as it pushes out. */
const onBiscuit = turnedAbout([118, 112], -14)

/** Half the side of the biscuit, and how thick it is. */
const BISCUIT = { half: 17, thick: 7 }

/** One side of the biscuit, its edge crimped in even bumps. */
function crimp(from: Point, to: Point): string {
  const bumps = 5
  const parts: string[] = []

  for (let at = 0; at < bumps; at += 1) {
    const [ax, ay] = [
      from[0] + ((to[0] - from[0]) * at) / bumps,
      from[1] + ((to[1] - from[1]) * at) / bumps,
    ]
    const [dx, dy] = [(to[0] - from[0]) / bumps, (to[1] - from[1]) / bumps]

    parts.push(
      `C${point(ax + dy * 0.45, ay - dx * 0.45)}`,
      point(ax + dx + dy * 0.45, ay + dy - dx * 0.45),
      point(ax + dx, ay + dy),
    )
  }

  return parts.join(' ')
}

/**
 * The fruit making biscuit: a thick square biscuit pushing out of an open
 * side, its edge crimped and plain, the skin broken round it. In episode
 * 799 Cracker makes biscuits out of thin air and builds his soldiers from
 * them.
 */
export const BIS_BIS: Stroke[] = [
  ...kitBody(BIS_BODY, [138, 146], (x, y) => Math.hypot(x - 116, y - 112) > 22),
  ...skin([
    [62, 104, 9],
    [80, 136, -7],
  ]),
  ...sprout(BIS_BODY, -4, 'left'),
  {
    d: [
      `M${point(...onBiscuit(-BISCUIT.half, -BISCUIT.half))}`,
      ...[
        [-1, -1, 1, -1],
        [1, -1, 1, 1],
        [1, 1, -1, 1],
        [-1, 1, -1, -1],
      ].map(([u0 = 0, v0 = 0, u1 = 0, v1 = 0]) => {
        return crimp(
          onBiscuit(u0 * BISCUIT.half, v0 * BISCUIT.half),
          onBiscuit(u1 * BISCUIT.half, v1 * BISCUIT.half),
        )
      }),
      // Its thickness, along the top and the far side.
      polyline(
        [
          [3 - BISCUIT.half, -3 - BISCUIT.half],
          [7 - BISCUIT.half, -BISCUIT.thick - BISCUIT.half],
          [BISCUIT.half + 6, -BISCUIT.thick - BISCUIT.half],
          [BISCUIT.half + 6, BISCUIT.half - 4],
          [BISCUIT.half + 3, BISCUIT.half - 1],
        ].map(([u = 0, v = 0]) => point(...onBiscuit(u, v))),
      ),
    ].join(' '),
    role: 'accent',
  },
  // Where the skin broke round it.
  { d: 'M96 98 L92 94 M95 126 L90 130', role: 'soft' },
  shadowUnder(1),
]

/** The memo fruit: a gourd, a strip of film drawn up out of its crown. */
const MEMO_BODY: Body = { family: 'gourd', cy: 122 }

/** The middle of the strip, as one cubic: up out of the crown and over. */
const REEL: Point[] = [
  [90, crownY(MEMO_BODY) + 4],
  [94, 28],
  [146, 16],
  [140, 74],
]

/** Where along the strip the snipped frame was, and half its width. */
const SNIP = { from: 0.62, to: 0.74, half: 7 }

/** A point on a chain of cubics, `along` the whole of it from 0 to 1. */
function onChain(line: Point[], along: number): Point {
  const cubics = (line.length - 1) / 3
  const at = Math.min(cubics - 1, Math.floor(along * cubics))

  return bezier(line.slice(at * 3, at * 3 + 4), along * cubics - at)
}

/**
 * A point `along` a chain of cubics, set off it `across` it, square to the
 * way the chain runs there.
 */
function offChain(line: Point[], along: number, across: number): Point {
  const [x, y] = onChain(line, along)
  const [x1, y1] = onChain(line, Math.min(1, along + 0.01))
  const [x0, y0] = onChain(line, Math.max(0, along - 0.01))
  const length = Math.hypot(x1 - x0, y1 - y0)

  return [x - ((y1 - y0) / length) * across, y + ((x1 - x0) / length) * across]
}

/** A point along the strip, set off its middle across it. */
function film(along: number, across: number): Point {
  return offChain(REEL, along, across)
}

/** One piece of the strip, from one cut to the other, as a closed outline. */
function filmPiece(from: number, to: number): string {
  const steps = Math.max(2, Math.round((to - from) * 40))
  const edge = (across: number): string[] => {
    return Array.from({ length: steps + 1 }, (_unused, at) => {
      return point(...film(from + ((to - from) * at) / steps, across))
    })
  }

  return polyline([...edge(SNIP.half), ...edge(-SNIP.half).toReversed()], true)
}

/** The sprocket ticks along both edges of a piece of the strip. */
function sprockets(from: number, to: number): string[] {
  const ticks: string[] = []

  for (let along = from + 0.025; along < to - 0.01; along += 0.06) {
    for (const way of [1, -1]) {
      ticks.push(
        `M${point(...film(along, way * SNIP.half))} L${point(...film(along, way * (SNIP.half - 2.5)))}`,
      )
    }
  }

  return ticks
}

/**
 * The fruit with a memory pulled out of it: a strip of film drawn up out of
 * its crown beside the stalk and curling over, sprocket ticks along its
 * edges and one frame snipped out, two straight cut ends either side of the
 * gap. In episode 818 Pudding pulls a roll of film out of Reiju's head and
 * cuts out the memory of their meeting.
 */
export const MEMO_MEMO: Stroke[] = [
  ...kitBody(MEMO_BODY, [146, 156, 164]),
  waist(MEMO_BODY, 118),
  ...skin([
    [70, 96, 6],
    [64, 146, 8],
  ]),
  ...sprout(MEMO_BODY, -8, 'left'),
  {
    d: [
      filmPiece(0, SNIP.from),
      filmPiece(SNIP.to, 1),
      ...[0.2, 0.42, 0.88].map((along) => {
        return `M${point(...film(along, SNIP.half))} L${point(...film(along, -SNIP.half))}`
      }),
    ].join(' '),
    role: 'accent',
  },
  {
    d: [...sprockets(0, SNIP.from), ...sprockets(SNIP.to, 1)].join(' '),
    role: 'soft',
  },
  shadowUnder(1),
]

/** The albatross fruit: a segmented one, its wings hanging at its sides. */
const ALBATROSS_BODY: Body = { family: 'segmented', cy: 108 }

/**
 * One wing out of the side, both ends on the rim: out over the shoulder,
 * bent at the wrist, and down the long flight feathers, tip by tip, back
 * up its inside.
 */
const HANGING_WING: Growth = {
  from: 100,
  to: 126,
  through: [
    [52, 96],
    [60, 98],
    [64, 108],
    [68, 118],
    [70, 130],
    [68, 140],
    [70, 156],
    [70, 168],
    [68, 180],
    [64, 170],
    [62, 166],
    [60, 176],
    [56, 166],
    [54, 162],
    [50, 172],
    [48, 162],
    [46, 156],
    [42, 164],
    [42, 154],
    [44, 144],
    [48, 136],
    [48, 130],
    [46, 128],
  ],
}

/**
 * The fruit with an albatross's wings: two long wings out of its sides,
 * hanging down and bent at the wrist like arms, the flight feathers fanned
 * at their ends, never spread. In episode 830 Morgans arrives at the Tea
 * Party with wings that resemble human arms. The wings and nothing else,
 * never the beak or the head.
 */
export const BIRD_ALBATROSS: Stroke[] = [
  ...kitBody(ALBATROSS_BODY, [98, 110]),
  ribs(ALBATROSS_BODY),
  ...skin([
    [94, 94, 7],
    [72, 136, -7],
  ]),
  ...sprout(ALBATROSS_BODY, 4, 'right'),
  {
    d: `${grown(ALBATROSS_BODY, -1, HANGING_WING)} ${grown(ALBATROSS_BODY, 1, HANGING_WING)}`,
    role: 'accent',
  },
  // The coverts, where the flight feathers start.
  {
    d: 'M10 140 C16 146 24 148 32 146 M150 140 C144 146 136 148 128 146',
    role: 'soft',
  },
  shadowUnder(1),
]

/** The mochi fruit: an oblong, its near side drawn out in a strand. */
const MOCHI_BODY: Body = { family: 'oblong', cy: 106 }

/** Where on the near rim the strand leaves, top and bottom. */
const STRAND = { top: 112, bottom: 142 }

/**
 * The fruit drawn out in mochi: a thick strand out of its near side,
 * stretching out and down and sagging, its end free short of the ground,
 * the outline open where it leaves. In episode 833 Katakuri's leg stretches
 * out as a tendril of a sticky substance that Luffy cannot get out of, and
 * Jinbe names the fruit. Nothing pooled on the ground.
 */
export const MOCHI_MOCHI: Stroke[] = [
  ...kitBody(
    MOCHI_BODY,
    [100, 112, 124],
    (x, y) => x > 60 || y < STRAND.top - 1 || y > STRAND.bottom + 1,
  ),
  ...skin([
    [92, 88, 8],
    [96, 130, -7],
  ]),
  ...sprout(MOCHI_BODY, 4, 'right'),
  {
    d: [
      `M${point(...onRim(MOCHI_BODY, STRAND.top, -1))}`,
      'C30 120 26 136 22 146 C20 152 12 154 8 160',
      'C6 165 9 174 16 172 C24 171 34 168 36 160',
      'C37 156 32 154 32 150',
      `C34 146 ${point(onRim(MOCHI_BODY, STRAND.bottom, -1)[0] - 3, STRAND.bottom + 2)} ${point(...onRim(MOCHI_BODY, STRAND.bottom, -1))}`,
    ].join(' '),
    role: 'accent',
  },
  // The mochi drawn thin where it stretched.
  { d: 'M30 128 C28 136 27 142 25 148', role: 'soft' },
  shadowUnder(1),
]

/** The grow fruit: a gourd, a giant book leaning into its side. */
const GROW_BODY: Body = { family: 'gourd', cy: 120 }

/** The book: how wide and tall its cover is, and how its depth shows. */
const TOME = { wide: 32, tall: 112, deep: [8, -5] }

/** Where the foot of the book's spine stands, and how far it leans. */
const SPINE = { x: 115, y: 178, lean: 16 }

/** A point on the cover, across it and up it from the foot of its spine. */
const onTome = turnedAbout([SPINE.x, SPINE.y], -SPINE.lean)

/** Whether a point of the fruit is behind the book's cover. */
function behindTome(x: number, y: number): boolean {
  const [u, v] = turnedAbout([0, 0], SPINE.lean)(x - SPINE.x, y - SPINE.y)

  return u > -1 && u < TOME.wide + 1 && v < 1 && v > -TOME.tall - 1
}

/** A corner of the book, pushed back by a share of its depth. */
function tome(u: number, v: number, back = 0): string {
  const [x, y] = onTome(u, v)
  const [dx = 0, dy = 0] = TOME.deep

  return point(x + dx * back, y + dy * back)
}

/**
 * The fruit beside a book grown giant: one plain closed book, taller than
 * the fruit, leaning on a slant into its side, the outline gone where the
 * cover is in front of it. In episode 1165 Saul explains that Biblo makes
 * any book that enters the Owl Library bigger, and that it gets smaller
 * once it leaves. No title on the cover.
 */
export const GROW_GROW: Stroke[] = [
  ...kitBody(GROW_BODY, [150, 156, 162], (x, y) => !behindTome(x, y)),
  waist(GROW_BODY, 116),
  ...skin([
    [66, 96, 6],
    [64, 144, -8],
  ]),
  ...sprout(GROW_BODY, -6, 'left'),
  {
    d: [
      `M${tome(0, 0)} L${tome(TOME.wide, 0)}`,
      `L${tome(TOME.wide, -TOME.tall)} L${tome(0, -TOME.tall)} Z`,
      // The top and the fore-edge, where the book's depth shows.
      `M${tome(0, -TOME.tall)} L${tome(0, -TOME.tall, 1)}`,
      `L${tome(TOME.wide, -TOME.tall, 1)} L${tome(TOME.wide, 0, 1)}`,
      `L${tome(TOME.wide, 0)}`,
      `M${tome(TOME.wide, -TOME.tall)} L${tome(TOME.wide, -TOME.tall, 1)}`,
    ].join(' '),
    role: 'accent',
  },
  // The hinge of the cover, and the pages along the fore-edge.
  {
    d: [
      `M${tome(5, -3)} L${tome(5, 3 - TOME.tall)}`,
      ...[0.35, 0.7].map((back) => {
        return `M${tome(TOME.wide, 0, back)} L${tome(TOME.wide, -TOME.tall, back)}`
      }),
    ].join(' '),
    role: 'soft',
  },
  { d: 'M44 184 C70 187 124 187 150 184', role: 'ambient', dashed: true },
]

/** The arrow fruit: an oblong, a strip out of a cut in its side. */
const ARROW_BODY: Body = { family: 'oblong', cy: 116 }

/** The strip: where it leaves the cut, and how wide it runs. */
const STRIP_OUT = { x: 84, y: 124, half: 6 }

/**
 * The fruit loosing an arrow: a flat strip out of a cut in its side, in one
 * straight run out past the rim, its end shaped like an arrowhead. In
 * episode 1165 Gunko strikes a giant guard with her arrows, strips with ends
 * shaped like arrowheads, and episode 1167 names the fruit. Never wrapped
 * round the fruit, never turned back on it.
 */
export const ARROW_ARROW: Stroke[] = [
  ...kitBody(
    ARROW_BODY,
    [146, 154],
    (x, y) => x < STRIP_OUT.x || Math.abs(y - STRIP_OUT.y) > STRIP_OUT.half + 1,
  ),
  ...skin([
    [64, 96, 8],
    [62, 144, -7],
  ]),
  ...sprout(ARROW_BODY, -4, 'left'),
  {
    d: 'M84 118 L134 118 L134 110 L152 124 L134 138 L134 130 L84 130',
    role: 'accent',
  },
  // The cut in the skin the strip comes out of.
  { d: 'M84 111 C79 118 79 130 84 137 C86 130 86 118 84 111', role: 'soft' },
  shadowUnder(1),
]

/** The thorn fruit: a heart, a briar hovering round its waist. */
const THORN_BODY: Body = { family: 'heart', cy: 108 }

/** The hoop of briar: its middle and radii, its thorns and their reach. */
const BRIAR = { cy: 114, rx: 60, ry: 14, thorns: 14, reach: 7 }

/** A point on the hoop, at an angle in degrees. */
function onBriar(degrees: number): Point {
  const angle = degrees * DEGREES

  return [
    80 + BRIAR.rx * Math.cos(angle),
    BRIAR.cy + BRIAR.ry * Math.sin(angle),
  ]
}

/** Whether a point of the hoop is on its far side, behind the fruit. */
function behindFruit(degrees: number): boolean {
  const [x, y] = onBriar(degrees)

  return (
    Math.sin(degrees * DEGREES) < 0
    && Math.abs(x - 80) < halfWidth(THORN_BODY, y) + 2
  )
}

/** One thorn standing out of the hoop, leaning a little along it. */
function thornAt(degrees: number): string {
  const [x0, y0] = onBriar(degrees - 4)
  const [x1, y1] = onBriar(degrees + 4)
  const [x, y] = onBriar(degrees)
  const angle = degrees * DEGREES
  const [nx, ny] = [Math.cos(angle) / BRIAR.rx, Math.sin(angle) / BRIAR.ry]
  const out = BRIAR.reach / Math.hypot(nx, ny)
  const spike: Point = [
    x + nx * out + (x1 - x0) * 0.4,
    y + ny * out + (y1 - y0) * 0.4,
  ]

  return `M${point(x0, y0)} L${point(...spike)} L${point(x1, y1)}`
}

/** The hoop where it shows, from behind the fruit round the front and back. */
function briar(): string {
  const shown: string[] = []
  const parts: string[] = []

  for (let degrees = 270; degrees <= 630; degrees += 4) {
    if (behindFruit(degrees)) {
      continue
    }
    shown.push(point(...onBriar(degrees)))
  }
  parts.push(polyline(shown))

  for (let at = 0; at < BRIAR.thorns; at += 1) {
    const degrees = (360 * at) / BRIAR.thorns + 10

    if (!behindFruit(degrees)) {
      parts.push(thornAt(degrees))
    }
  }

  return parts.join(' ')
}

/**
 * The fruit in a hoop of briar: one thorny vine hovering round its waist,
 * clear of the skin, its thorns pointing out, the far side of it hidden
 * behind the fruit. In episode 1173 Saul cannot stop the sleepwalking
 * children for the invisible vines around them, and the fruit is named.
 * The show keeps the thorns invisible; they are drawn here so they show.
 */
export const THORN_THORN: Stroke[] = [
  ...kitBody(THORN_BODY, [80, 92]),
  ...skin([
    [62, 96, 9],
    [84, 146, -5],
  ]),
  ...sprout(THORN_BODY, 4, 'right'),
  { d: briar(), role: 'accent' },
  shadowUnder(1),
]

/** The kirin fruit: a pear, one horn out of its far shoulder. */
const KIRIN_BODY: Body = { family: 'pear', cy: 118 }

/**
 * The horn, both ends on the rim: flared where it leaves the skin, then
 * straight out and back to its point.
 */
const KIRIN_HORN: Growth = {
  from: 102,
  to: 84,
  through: [
    [23.2, 100.5],
    [42.3, 65.7],
    [62, 36],
    [40.4, 57.6],
    [19, 85],
  ],
}

/**
 * The fruit with a qilin's horn: one long straight horn out of its far
 * shoulder, leaning back. In episode 1170 Killingham arrives transformed,
 * with a single straight horn swept back; episode 1173 names the fruit. The
 * horn and nothing else, never the head, the mane or the sleep beams.
 */
export const DRAGON_KIRIN: Stroke[] = [
  ...kitBody(KIRIN_BODY, [132, 144]),
  ...skin([
    [66, 136, 9],
    [82, 154, -6],
  ]),
  ...sprout(KIRIN_BODY, -4, 'left'),
  { d: grown(KIRIN_BODY, 1, KIRIN_HORN), role: 'accent' },
  shadowUnder(1),
]

/** The kilo fruit: a gourd, landed hard enough to dent the ground. */
const KILO_BODY: Body = { family: 'gourd', cy: 128 }

/** The dent the fruit has driven into the ground, seen a little from above. */
const DENT = { cx: 80, cy: 160, rx: 42, ry: 7 }

/** Where the near lip of the dent runs, at a point across it. */
function dentLip(x: number): number {
  const across = (x - DENT.cx) / DENT.rx

  return DENT.cy + DENT.ry * Math.sqrt(Math.max(0, 1 - across ** 2))
}

/**
 * The fruit landed like a dropped anvil: its heavy lower bulb pressed into a
 * dent in the ground, the outline gone where it sinks in, and short cracks
 * running out from under it either side. In episode 66 Miss Valentine floats
 * out of reach on her umbrella, explains the fruit and slams down on Miss
 * Monday at ten thousand kilos. No umbrella, which is hers and not the
 * fruit's.
 */
export const KILO_KILO: Stroke[] = [
  ...kitBody(KILO_BODY, [140, 150], (x, y) => y < dentLip(x) - 2),
  waist(KILO_BODY, 122),
  ...skin([
    [70, 102, 6],
    [64, 144, 8],
  ]),
  ...sprout(KILO_BODY, -4, 'left'),
  {
    d: [
      polyline(trace([DENT.cx, DENT.cy], [DENT.rx, DENT.ry], [0, 180, 16])),
      'M38 160 L31 164 L26 162 L12 169',
      'M48 165 L44 171 L38 172 L32 179',
      'M122 160 L130 165 L136 162 L150 168',
      'M110 166 L116 172 L122 172 L128 180',
    ].join(' '),
    role: 'accent',
  },
  { d: 'M6 160 L38 160 M122 160 L154 160', role: 'ambient' },
]

/** The wax fruit: a heart, its foot held fast in a lump of wax. */
const WAX_BODY: Body = { family: 'heart', cy: 116 }

/** The near edge of the wax's rolled top, where it holds the fruit. */
const WAX_TOP: Point[] = [
  [40, 152],
  [54, 148],
  [66, 154],
  [80, 155],
  [94, 151],
  [108, 138],
  [120, 136],
]

/**
 * The fruit held in wax: a hardened lump bound round its foot like a
 * shackle, piled higher on one side, its top edge rolled where the wax was
 * pushed up, the outline gone where the wax holds it. In episode 73 Mr. 3
 * binds Brogy's legs with a strange substance and Vivi names the fruit.
 * Nothing dripping and nothing poured, and no candle.
 */
export const WAX_WAX: Stroke[] = [
  ...kitBody(WAX_BODY, [92, 104, 116], (x, y) => y < heightOn(WAX_TOP, x) - 2),
  ...skin([
    [62, 100, 9],
    [74, 128, -6],
  ]),
  ...sprout(WAX_BODY, 4, 'right'),
  {
    d: [
      'M32 176 C24 168 30 156 42 154 C46 150 50 148 54 148',
      'C66 158 94 156 108 138 C114 130 126 132 128 142',
      'C136 150 140 166 134 176 C110 180 56 180 32 176 Z',
    ].join(' '),
    role: 'accent',
  },
  // The underside of the rolled edge, and where the wax set hard.
  {
    d: 'M58 158 C70 166 96 164 112 146 M124 154 C128 160 130 166 128 172',
    role: 'soft',
  },
  { d: 'M14 184 C40 187 120 187 146 184', role: 'ambient', dashed: true },
]

/** The clone fruit: a segmented one, a patch of its skin printed twice. */
const CLONE_BODY: Body = { family: 'segmented', cy: 116 }

/** The patch of skin that is copied: one large curl. */
const PATCH: [number, number, number][] = [[76, 98, 14]]

/** How far the copy is set from the patch it was taken from. */
const COPY = { dx: 6, dy: 27 }

/**
 * The fruit copied by touch: one large curl of its own skin, copied once
 * just below itself, the same size and winding and never mirrored (a mirrored
 * pair reads as a face), on the same body and with no second outline. In
 * episode 92 Mr. 2 shows the crew
 * that he can copy anyone whose face he touches with his right hand. Never a
 * face, and never the real fruit's two joined calabashes.
 */
export const CLONE_CLONE: Stroke[] = [
  ...kitBody(CLONE_BODY, [98, 110, 122]),
  ribs(CLONE_BODY),
  ...skin(PATCH),
  ...sprout(CLONE_BODY, -4, 'left'),
  {
    d: PATCH.map(([x, y, r]) => curl(x + COPY.dx, y + COPY.dy, r)).join(' '),
    role: 'accent',
  },
  shadowUnder(1),
]

/** The flame fruit: a round, sunk to its waist in fire. */
const FIRE_BODY: Body = { family: 'round', cy: 100 }

/** The top of the fire, tip and hollow by turns, left to right. */
const FIRE_TOPS: Point[] = [
  [30, 178],
  [26, 106],
  [46, 140],
  [57, 116],
  [66, 144],
  [83, 125],
  [94, 144],
  [109, 116],
  [116, 142],
  [134, 102],
  [136, 178],
]

/**
 * The fruit sunk in its own fire: a tall, narrow bed of flame where the
 * shadow would be, every lick curving up and rounding off at its tip, the
 * skin going down into it. In episode 94 Ace stops Smoker with a stream of
 * fire and tells Luffy he ate the fruit; in 95 he drives his boat with his
 * flames and sinks five ships with one fist of fire. The crown stays plain.
 */
export const FLAME_FLAME_FIRE: Stroke[] = [
  ...kitBody(
    FIRE_BODY,
    [76, 88, 100],
    (x, y) => y < heightOn(FIRE_TOPS, x) - 2,
  ),
  ...skin([
    [60, 86, 8],
    [70, 108, -6],
  ]),
  ...sprout(FIRE_BODY, 4, 'right'),
  {
    d: [
      'M36 178 C24 166 24 148 32 136 C38 126 34 112 26 106',
      'C30 104 36 106 38 112 C40 120 42 130 46 140',
      'C46 130 48 122 54 118 C57 116 60 118 60 122 C60 130 62 138 66 144',
      'C70 136 74 128 80 126 C84 125 86 128 86 132 C86 138 90 142 94 144',
      'C96 134 100 122 106 118 C110 115 112 118 112 124 C112 132 112 138 116 142',
      'C120 130 124 120 128 110 C130 104 134 102 136 104',
      'C138 106 132 116 132 126 C132 140 138 150 134 162 C132 170 128 176 124 178',
      'C100 182 60 182 36 178 Z',
    ].join(' '),
    role: 'accent',
  },
  // Licks inside the fire, nearer than the rest.
  {
    d: 'M52 174 C46 166 56 160 50 148 M108 174 C114 166 104 160 110 148',
    role: 'soft',
  },
  { d: 'M24 188 C50 191 110 191 136 188', role: 'ambient', dashed: true },
]

/** The mole fruit: a segmented one, a tunnel opened beside its foot. */
const MOLE_BODY: Body = { family: 'segmented', cy: 120 }

/** The mouth of the tunnel, seen a little from above. */
const BURROW = { cx: 114, cy: 174, rx: 30, ry: 9 }

/** The top of the heap dug out of it, from its long tail to the hole. */
const SPOIL: Point[] = [
  [38, 176],
  [48, 160],
  [58, 150],
  [70, 142],
  [78, 140],
  [86, 148],
  [90, 168],
]

/**
 * The fruit beside its own tunnel: a hole opened in the ground at its foot,
 * the mouth dark, and the earth dug out of it thrown to one side in a
 * lopsided heap, steep at the hole and trailing off, that hides the foot.
 * In episode 113 Chopper tells Usopp that Miss Merry Christmas ate the fruit
 * and can go underground, and her partners use her tunnels. A deliberate
 * exception to the Zoan rule: the claws, first shown in episode 114, and the
 * hybrid are not drawn, so the tunnel is the power.
 */
export const MOLE_MOLE: Stroke[] = [
  ...kitBody(MOLE_BODY, [96, 108, 120], (x, y) => y < heightOn(SPOIL, x) - 2),
  ribs(MOLE_BODY),
  ...skin([
    [64, 100, 8],
    [96, 128, -6],
  ]),
  ...sprout(MOLE_BODY, -4, 'left'),
  {
    d: [
      polyline(
        trace([BURROW.cx, BURROW.cy], [BURROW.rx, BURROW.ry], [0, 360, 24]),
        true,
      ),
      'M38 176 C44 164 56 148 70 142 C78 138 84 142 88 152 C90 158 90 164 90 168',
      'M26 173 L29 169 L34 170 L33 175 Z M16 176 L18 172 L22 174 Z M62 150 L65 146 L69 148 L67 152 Z',
    ].join(' '),
    role: 'accent',
  },
  // The dark of the tunnel.
  {
    d: 'M92 177 L98 170 M100 180 L110 167 M110 182 L122 166 M122 182 L132 168 M132 179 L138 172',
    role: 'ambient',
  },
  // Clods of the heap.
  {
    d: 'M50 170 L52 170 M58 164 L60 164 M68 156 L70 156 M78 150 L80 150 M64 174 L66 174',
    role: 'soft',
  },
  { d: 'M8 178 L38 178 M144 174 L152 174', role: 'ambient' },
]

/** The spike fruit: a heart, three spikes out of its far shoulder. */
const SPIKE_BODY: Body = { family: 'heart', cy: 112 }

/** The spikes: the rim height each leaves at and how long it runs. */
const SPIKES = [
  { at: 74, reach: 30 },
  { at: 96, reach: 40 },
  { at: 118, reach: 26 },
]

/** Which way every spike points: out and up, all of them parallel. */
const SPIKE_WAY = -30 * DEGREES

/** Half the width of a spike where it leaves the skin. */
const SPIKE_HALF = 7

/** A point on a spike, along it from where it leaves the rim and across it. */
function onSpike(at: number, along: number, across: number): string {
  const [bx, by] = onRim(SPIKE_BODY, at, 1)
  const [ux, uy] = [Math.cos(SPIKE_WAY), Math.sin(SPIKE_WAY)]

  return point(bx - 2 + ux * along - uy * across, by + uy * along + ux * across)
}

/** One spike: out of the rim to its point and back, as one line. */
function stab({ at, reach }: (typeof SPIKES)[number]): string {
  return polyline([
    onSpike(at, 0, -SPIKE_HALF),
    onSpike(at, reach, 0),
    onSpike(at, 0, SPIKE_HALF),
  ])
}

/**
 * The fruit stabbing out: three long straight spikes driven out of its far
 * shoulder, parallel and of three lengths, the skin open where each leaves.
 * In episode 117 Miss Doublefinger explains her fruit and stabs Nami with
 * spikes grown out of her body. Parallel, so they never read as a blast.
 */
export const SPIKE_SPIKE: Stroke[] = [
  ...kitBody(SPIKE_BODY, [120, 132, 144], (x, y) => {
    for (const { at } of SPIKES) {
      const [bx, by] = onRim(SPIKE_BODY, at, 1)

      if (Math.hypot(x - bx, y - by) < SPIKE_HALF + 1) {
        return false
      }
    }

    return true
  }),
  ...skin([
    [62, 100, 9],
    [86, 134, -7],
  ]),
  ...sprout(SPIKE_BODY, -4, 'left'),
  { d: SPIKES.map((one) => stab(one)).join(' '), role: 'accent' },
  // The near face of each spike, where it turns from the light.
  {
    d: SPIKES.map(({ at, reach }) => {
      return `M${onSpike(at, 2, SPIKE_HALF * 0.4)} L${onSpike(at, reach * 0.7, 0.6)}`
    }).join(' '),
    role: 'soft',
  },
  shadowUnder(1),
]

/** The cage fruit: a gourd, an iron cuff closed round its waist. */
const CAGE_BODY: Body = { family: 'gourd', cy: 120 }

/** The cuff: how wide and deep its ring is seen from above, and how tall. */
const CUFF = { cy: 109, rx: 23, ry: 6, tall: 11, rim: 3, tilt: 10 }

/** A point on the cuff, in a frame tipped off level about the waist. */
const onCuff = turnedAbout([80, CUFF.cy], -CUFF.tilt)

/** Whether a point of the fruit is behind the near face of the cuff. */
function behindCuff(x: number, y: number): boolean {
  const [u, v] = turnedAbout([0, 0], CUFF.tilt)(x - 80, y - CUFF.cy)

  return Math.abs(u) < CUFF.rx + 1 && v > -2 && v < CUFF.tall + CUFF.ry + 1
}

/** The near half of a ring of the cuff, dropped down its face. */
function cuffArc(rx: number, ry: number, drop: number): string {
  return polyline(
    Array.from({ length: 13 }, (_unused, at) => {
      const angle = (at * 15 * Math.PI) / 180

      return point(...onCuff(rx * Math.cos(angle), ry * Math.sin(angle) + drop))
    }),
  )
}

/**
 * The fruit caught in iron: a cuff closed round the gourd's waist, tipped
 * off level, its near face thick with the edge of its top showing, the far
 * side behind the fruit, the outline pinched in under it. In episode 130
 * Hina lets a pirate pass through her and leaves him in a ring of iron.
 */
export const CAGE_CAGE: Stroke[] = [
  ...kitBody(CAGE_BODY, [140, 152, 162], (x, y) => !behindCuff(x, y)),
  ...skin([
    [70, 92, 6],
    [64, 146, 8],
  ]),
  ...sprout(CAGE_BODY, 4, 'right'),
  {
    d: [
      cuffArc(CUFF.rx, CUFF.ry, 0),
      cuffArc(CUFF.rx, CUFF.ry, CUFF.tall),
      `M${point(...onCuff(CUFF.rx, 0))} L${point(...onCuff(CUFF.rx, CUFF.tall))}`,
      `M${point(...onCuff(-CUFF.rx, 0))} L${point(...onCuff(-CUFF.rx, CUFF.tall))}`,
    ].join(' '),
    role: 'accent',
  },
  // The top of the ring, its inner edge seen from above.
  { d: cuffArc(CUFF.rx - CUFF.rim, CUFF.ry - 1.5, -0.5), role: 'soft' },
  // The iron turning away on the far side of its face.
  {
    d: [12, 17, 22]
      .map((u) => {
        const v = CUFF.ry * Math.sqrt(1 - (u / CUFF.rx) ** 2)

        return `M${point(...onCuff(u, v + 3))} L${point(...onCuff(u - 3, v + CUFF.tall - 2))}`
      })
      .join(' '),
    role: 'ambient',
  },
  shadowUnder(1),
]

/** The human fruit: a gourd, a human hand grown out of its shoulder. */
const HUMAN_BODY: Body = { family: 'gourd', cy: 126 }

/** A point on the hand, across its palm and up it, tipped to lean out. */
const onHand = turnedAbout([46, 66], -35)

/** The digits: where each leaves the palm, which way it points, how long. */
const DIGITS = [
  { u: 9.6, v: -11, angle: -66, length: 15 },
  { u: 3.2, v: -11, angle: -82, length: 20 },
  { u: -3.2, v: -11, angle: -98, length: 22 },
  { u: -9.6, v: -11, angle: -114, length: 19 },
  { u: -12, v: 2, angle: -160, length: 15 },
]

/** Half the width of a digit. */
const DIGIT_HALF = 3.2

/** One digit, out from the palm and round its tip, as points on the hand. */
function digit({ u, v, angle, length }: (typeof DIGITS)[number]): Point[] {
  const way = angle * DEGREES
  const [dx, dy] = [Math.cos(way), Math.sin(way)]
  const [nx, ny] = [-dy * DIGIT_HALF, dx * DIGIT_HALF]
  const [tx, ty] = [u + dx * length, v + dy * length]
  const cap = Array.from({ length: 5 }, (_unused, at): Point => {
    const turn = way + Math.PI / 2 - (at * Math.PI) / 4

    return [tx + DIGIT_HALF * Math.cos(turn), ty + DIGIT_HALF * Math.sin(turn)]
  })

  return [[u + nx, v + ny], ...cap, [u - nx, v - ny]]
}

/**
 * The fruit with a human hand: one big open hand grown out of its near
 * shoulder, the thumb and four fingers spread apart, both edges of the
 * wrist on the rim. In episode 83 Chopper's human form grabs Luffy's hand,
 * and in 84 Kureha tells Nami the reindeer ate the fruit and walks and
 * speaks like a human. Open, never clawed.
 */
export const HUMAN_HUMAN: Stroke[] = [
  ...kitBody(
    HUMAN_BODY,
    [142, 152, 162],
    (x, y) => x > 70 || y < 88 || y > 104,
  ),
  waist(HUMAN_BODY, 120),
  ...skin([
    [92, 102, 6],
    [64, 148, 8],
  ]),
  ...sprout(HUMAN_BODY, 4, 'right'),
  {
    d: polyline([
      point(...onRim(HUMAN_BODY, 88, -1)),
      ...[
        [8, 18],
        [12, 8],
        ...DIGITS.flatMap((one) => digit(one)),
        [-11, 10],
        [-8, 18],
      ].map(([u = 0, v = 0]) => point(...onHand(u, v))),
      point(...onRim(HUMAN_BODY, 104, -1)),
    ]),
    role: 'accent',
  },
  // The crease across the palm.
  {
    d: polyline([
      point(...onHand(-8, 4)),
      point(...onHand(0, -2)),
      point(...onHand(8, -2)),
    ]),
    role: 'soft',
  },
  shadowUnder(1),
]

/** The dachshund fruit: an oblong, standing on four short legs. */
const DACHSHUND_BODY: Body = { family: 'oblong', cy: 114 }

/** Where the underside of the fruit is, at a point across it. */
function underside(x: number): number {
  let y = crownY(DACHSHUND_BODY) + 92

  while (
    halfWidth(DACHSHUND_BODY, y) < Math.abs(x - 80)
    && y > DACHSHUND_BODY.cy
  ) {
    y -= 0.5
  }

  return y
}

/** The paws stand on this line. */
const PAWS_Y = 176

/**
 * One short leg out of the underside, both ends on the rim: down to a bend,
 * on to a paw turned forward, and back up. `bend` sets the knee forward or
 * the hock back; `down` lifts a far paw up the ground.
 */
function leg(x: number, bend: number, down = PAWS_Y): string {
  const half = 5
  const knee = (underside(x) + down) / 2

  return [
    `M${point(x - half, underside(x - half))}`,
    `C${point(x - half + bend, knee - 4)} ${point(x - half + bend, knee + 4)}`,
    point(x - half, down - 3),
    `C${point(x - half - 6, down - 2)} ${point(x - half - 8, down)}`,
    point(x - half - 6, down),
    `L${point(x + half, down)}`,
    `C${point(x + half + bend, knee + 4)} ${point(x + half + bend, knee - 4)}`,
    point(x + half, underside(x + half)),
  ].join(' ')
}

/**
 * The fruit on a dachshund's legs: four short bent legs grown out of its
 * underside, the near pair whole and the far pair showing behind them, the
 * paws planted and turned forward. In episode 113 Lassoo, Mr. 4's gun, walks
 * and barks as a dog, and the fruit is named. Short legs and nothing else,
 * never a head or a tail.
 */
export const DOG_DACHSHUND: Stroke[] = [
  ...kitBody(DACHSHUND_BODY, [116, 128, 140]),
  ...skin([
    [64, 112, 9],
    [92, 134, -8],
  ]),
  ...sprout(DACHSHUND_BODY, 4, 'left'),
  {
    d: [leg(58, -3), leg(100, 4), leg(68, -3, 172), leg(109, 4, 172)].join(' '),
    role: 'accent',
  },
  shadowUnder(1),
]

/** The dice fruit: an oblong, a blade out of its near side. */
const DICE_BODY: Body = { family: 'oblong', cy: 116 }

/** Where the blade leaves the skin, top and bottom. */
const BLADE_ROOT = { top: 96, bottom: 112 }

/** A point on the blade, along it from the skin and across it. */
const onBlade = turnedAbout([43, 104], -115)

/** Half the width of the blade. */
const BLADE_HALF = 8

/**
 * The fruit turned to steel along one side: a broad straight blade grown
 * out of its near flank, the cutting edge outward and leaning out past its
 * shoulder to a point, a bevel along the edge, the skin
 * open where the blade leaves it. In episode 116 Mr. 1 explains that he can
 * turn any part of his body into a blade. No banana shapes, which are the
 * real fruit's.
 */
export const DICE_DICE: Stroke[] = [
  ...kitBody(
    DICE_BODY,
    [120, 132, 144],
    (x, y) => x > 70 || y < BLADE_ROOT.top - 1 || y > BLADE_ROOT.bottom + 1,
  ),
  ...skin([
    [84, 100, 9],
    [76, 140, -7],
  ]),
  ...sprout(DICE_BODY, 6, 'right'),
  {
    d: [
      `M${point(...onRim(DICE_BODY, BLADE_ROOT.bottom, -1))}`,
      `L${point(...onBlade(6, -BLADE_HALF))} L${point(...onBlade(48, -BLADE_HALF))}`,
      `C${point(...onBlade(56, -BLADE_HALF))} ${point(...onBlade(62, 0))}`,
      point(...onBlade(66, BLADE_HALF)),
      `L${point(...onBlade(6, BLADE_HALF))}`,
      `L${point(...onRim(DICE_BODY, BLADE_ROOT.top, -1))}`,
    ].join(' '),
    role: 'accent',
  },
  // The bevel along the cutting edge, and up into the point.
  {
    d: [
      `M${point(...onBlade(8, -2))} L${point(...onBlade(48, -2))}`,
      `C${point(...onBlade(54, -2))} ${point(...onBlade(60, 2))}`,
      point(...onBlade(63, 4.5)),
    ].join(' '),
    role: 'soft',
  },
  shadowUnder(1),
]

/** The jackal fruit: a segmented one, a tall ear out of its near shoulder. */
const JACKAL_BODY: Body = { family: 'segmented', cy: 118 }

/**
 * The ear, both ends on the rim: wide where it leaves the shoulder, up its
 * back edge to a point, and down its front edge.
 */
const EAR: Growth = {
  from: 102,
  to: 76,
  through: [
    [46, 80],
    [42, 56],
    [36, 34],
    [30, 50],
    [22, 62],
  ],
}

/**
 * The fruit with a jackal's ear: one tall pointed ear grown straight up out
 * of its near shoulder, wide where it leaves the skin, seen from the side,
 * with the fold inside it. In episode 120 Chaka names his fruit and turns into
 * a great black jackal to go at Crocodile. One ear and nothing else, never a
 * pair, a muzzle or a head.
 */
export const DOG_JACKAL: Stroke[] = [
  ...kitBody(JACKAL_BODY, [110, 122, 134]),
  ribs(JACKAL_BODY),
  ...skin([
    [94, 104, 7],
    [72, 140, -7],
  ]),
  ...sprout(JACKAL_BODY, 6, 'right'),
  { d: grown(JACKAL_BODY, -1, EAR), role: 'accent' },
  // The fold inside the ear.
  { d: 'M42 94 C40 78 40 62 43 46 C46 58 50 68 54 78', role: 'soft' },
  shadowUnder(1),
]

/** The horse fruit: a pear, standing on one hoofed foreleg. */
const HORSE_BODY: Body = { family: 'pear', cy: 88 }

/** The rim heights the foreleg leaves the skin at, front and back. */
const FORELEG = { front: 125.5, back: 129.7 }

/**
 * The fruit on a horse's foreleg: the foot of the fruit narrows into one
 * leg, both edges of it out of the rim, the fetlock bent, the hoof
 * planted, toe forward. In episode 153 Gan Fall shows the crew that Pierre
 * ate the fruit and can turn into a Pegasus, and they find it ordinary. The
 * leg and nothing else: no wings, which are the falcon's, no mane, never a
 * head.
 */
export const HORSE_HORSE: Stroke[] = [
  ...kitBody(
    HORSE_BODY,
    [100, 112, 124],
    (x, y) => y < (x < 80 ? FORELEG.front : FORELEG.back) + 0.5,
  ),
  ...skin([
    [68, 98, 8],
    [88, 120, -7],
  ]),
  ...sprout(HORSE_BODY, 4, 'left'),
  {
    d: [
      `M${point(...onRim(HORSE_BODY, FORELEG.front, -1))}`,
      'C67 132 69 140 69 150 C69 155 68 158 66 160 L60 164',
      'L54 176 L79 176 L76 165',
      'C80 164 84 163 86 161 C88 158 88 154 83 152',
      `C83 144 85 134 ${point(...onRim(HORSE_BODY, FORELEG.back, 1))}`,
    ].join(' '),
    role: 'accent',
  },
  // The coronet, where the hoof starts.
  { d: 'M60 164 C65 165 71 166 76 165', role: 'soft' },
  // The horn of the hoof.
  { d: 'M60 175 L65 168 M67 175 L72 168', role: 'ambient' },
  shadowUnder(1),
]

/**
 * What a Zoan grows that is round in section, a trunk, a tail, a claw: the
 * line down its middle as a chain of cubics, and how far either edge stands
 * off that line at each point along it, 0 at the root and 1 at the end.
 * `rim` sets both edges of the root on that body's rim, on its right (1)
 * or left (-1) side, so they leave the skin there; `'free'` leaves the root
 * where the line and `half` put it, for a piece not grown from the rim.
 * With `end`, those points close the far end instead of a round cap: a
 * fist, or with none at all a square end.
 */
interface Limb {
  end?: Point[]
  half: (along: number) => number
  line: Point[]
  /** Both root edges on this body's rim, or 'free' for a piece that is not grown from it. */
  rim: 'free' | { body: Body; way: number }
}

/** A point of a limb, `along` its middle line and `across` it. */
function onLimb({ line }: Limb, along: number, across: number): Point {
  return offChain(line, along, across)
}

/**
 * A limb's outline: out along one edge, round its end, and back along the
 * other. `rough` scales the edges point by point, which is how fur bristles.
 */
function limbOutline(
  limb: Limb,
  steps = 16,
  rough: (step: number, way: number) => number = () => 1,
): string {
  const edge = (way: number): Point[] => {
    return Array.from({ length: steps + 1 }, (_unused, step) => {
      const along = step / steps
      const at = onLimb(limb, along, way * limb.half(along) * rough(step, way))

      return step === 0 && limb.rim !== 'free' ?
          onRim(limb.rim.body, at[1], limb.rim.way)
        : at
    })
  }
  const end = limb.half(1)
  const [x, y] = onChain(limb.line, 1)
  const [x0, y0] = onChain(limb.line, 0.99)
  const facing = Math.atan2(y - y0, x - x0)
  const cap = Array.from({ length: end > 0 ? 5 : 0 }, (_unused, at): Point => {
    const turn = facing + Math.PI / 2 - ((at + 1) * Math.PI) / 6

    return [x + end * Math.cos(turn), y + end * Math.sin(turn)]
  })

  return polyline(
    [...edge(1), ...(limb.end ?? cap), ...edge(-1).toReversed()].map(
      ([px, py]) => point(px, py),
    ),
  )
}

/** A line across a limb, `along` it, as far out as `reach` of its edges. */
function acrossLimb(limb: Limb, along: number, reach: number): string {
  const half = limb.half(along) * reach

  return polyline([
    point(...onLimb(limb, along, -half)),
    point(...onLimb(limb, along - 0.02, 0)),
    point(...onLimb(limb, along, half)),
  ])
}

/** The elephant fruit: a pear, a trunk out of its far shoulder. */
const ELEPHANT_BODY: Body = { family: 'pear', cy: 118 }

/**
 * The trunk: out of the far shoulder, wide where it leaves the skin, down
 * beside the fruit, narrowing to a tip curled out and up.
 */
const TRUNK: Limb = {
  line: [
    [94, 98],
    [112, 98],
    [124, 108],
    [126, 124],
    [128, 142],
    [126, 162],
    [140, 152],
  ],
  half: (along) => 3.5 + 10.5 * (1 - along) ** 2,
  rim: { body: ELEPHANT_BODY, way: 1 },
}

/**
 * The fruit with an elephant's trunk: one short, thick trunk grown out of
 * its far shoulder and hanging down beside it, the tip curled, two creases
 * across it. In episode 285 Spandam calls Funkfreed, an elephant, which
 * turns into a sword, and he tells Robin the sword was given the fruit. The
 * trunk and nothing else, never ears, tusks or the head, and no blade: the
 * trunk melding into the blade is the hybrid form, which comes later.
 */
export const ELEPHANT_ELEPHANT: Stroke[] = [
  ...kitBody(ELEPHANT_BODY, [140, 150, 160]),
  ...skin([
    [68, 128, 7],
    [86, 152, -6],
  ]),
  ...sprout(ELEPHANT_BODY, -4, 'left'),
  { d: limbOutline(TRUNK, 20), role: 'accent' },
  // The creases across it.
  {
    d: [0.5, 0.62].map((along) => acrossLimb(TRUNK, along, 0.7)).join(' '),
    role: 'soft',
  },
  shadowUnder(1),
]

/** The wolf fruit: a round, a bushy tail out of its far side. */
const WOLF_BODY: Body = { family: 'round', cy: 112 }

/** Where along the tail it is fullest. */
const PLUME = 0.45

/** How a bushy tail swells and narrows: its half-width at three places. */
interface Plume {
  end: number
  full: number
  fullest: number
  root: number
}

/**
 * How wide a bushy tail is along it: `root` where it leaves the fruit,
 * swelling to `full` at `fullest`, then narrowing to `end`.
 */
function plume({ end, full, fullest, root }: Plume): (along: number) => number {
  return (along) => {
    return along < fullest ?
        root + (full - root) * Math.sin((Math.PI / 2) * (along / fullest))
      : end
          + (full - end)
            * Math.cos((Math.PI / 2) * ((along - fullest) / (1 - fullest)))
  }
}

/**
 * The tail: out of the lower side, sweeping out and down, then curling up
 * at its tip; narrow at the root, a full plume in the middle, and tapering
 * to a soft point.
 */
const TAIL: Limb = {
  line: [
    [107, 148],
    [125, 166],
    [148, 170],
    [146, 146],
  ],
  half: plume({ root: 6, full: 15, end: 2.5, fullest: PLUME }),
  rim: { body: WOLF_BODY, way: 1 },
}

/** The fur notches: steps along the outer edge (1) and the inner one (-1). */
const FUR = { outer: [7, 12, 17], inner: [10, 15] }

/**
 * The fruit with a wolf's tail: one large, bushy tail grown out of its lower
 * side, sweeping out and down with the tip curled up, soft notches of fur on
 * both edges. In episode 286 Jabra transforms and names his fruit, and the
 * wiki gives his half-wolf form an unusually large tail. The tail and
 * nothing else, never the snout or the head.
 */
export const DOG_WOLF: Stroke[] = [
  ...kitBody(WOLF_BODY, [84, 96, 108]),
  ...skin([
    [62, 104, 9],
    [76, 140, -7],
  ]),
  ...sprout(WOLF_BODY, -4, 'left'),
  {
    d: limbOutline(TAIL, 24, (step, way) => {
      if (way > 0) {
        return FUR.outer.includes(step) ? 0.8 : 1
      }

      return FUR.inner.includes(step) ? 0.86 : 1
    }),
    role: 'accent',
  },
  shadowUnder(1),
]

/** The slow fruit: a segmented one, struck on the shoulder by a beam. */
const SLOW_BODY: Body = { family: 'segmented', cy: 116 }

/**
 * The fruit struck by a beam: two parallel lines in from the upper left,
 * landing on the near shoulder, the outline open where they land, and the
 * struck shoulder trailing behind where it was. In episode 210 Foxy fires
 * the beam at the Barrel Tiger to slow it in the race, and explains that he
 * gives off particles that slow down what they hit. No cannonball and no
 * mirror.
 */
export const SLOW_SLOW: Stroke[] = [
  ...kitBody(SLOW_BODY, [104, 116, 128], (x, y) => x > 50 || y < 87 || y > 93),
  ribs(SLOW_BODY),
  ...skin([
    [96, 104, 7],
    [86, 146, -6],
  ]),
  ...sprout(SLOW_BODY, 6, 'right'),
  // The beam, both edges ending on the rim.
  { d: 'M7.3 54.9 L41.3 94.9 M13.8 45.2 L47.8 85.2', role: 'accent' },
  // The struck shoulder, lagging behind where it was.
  {
    d: [5, 10]
      .map((back) => {
        return polyline(
          Array.from({ length: 6 }, (_unused, at) => {
            const y = 96 + at * 5

            return point(onRim(SLOW_BODY, y, -1)[0] - back, y - back * 0.6)
          }),
        )
      })
      .join(' '),
    role: 'soft',
  },
  shadowUnder(1),
]

/** The door fruit: an oblong, a door open in its near side. */
const DOOR_BODY: Body = { family: 'oblong', cy: 116 }

/**
 * The fruit with a door in it: a square door cut into its near side, the
 * outline and skin open along it, the panel swung wide out on its hinge,
 * and the dark inside of the fruit showing. In episode 242 Blueno makes a
 * door in a wall into Iceburg's room and names the fruit. Square, with no
 * arch and nothing coming out of it, so it is never the castle fruit's
 * doorway.
 */
export const DOOR_DOOR: Stroke[] = [
  ...kitBody(DOOR_BODY, [120, 132, 144], (x, y) => x > 56 || y < 97 || y > 142),
  ...skin([
    [96, 98, 8],
    [94, 146, -6],
  ]),
  ...sprout(DOOR_BODY, 6, 'right'),
  // The doorway cut in the skin.
  { d: 'M54 96 L76 96 L76 140 L54 140 Z' },
  // The panel, swung out on its hinge.
  { d: 'M54 96 L34 102 L34 146 L54 140 Z', role: 'accent' },
  // The dark inside.
  {
    d: [
      'M58 104 L64 98 M58 114 L72 100 M58 124 L74 108',
      'M58 134 L74 118 M64 138 L74 128',
    ].join(' '),
    role: 'ambient',
  },
  shadowUnder(1),
]

/** The leopard fruit: a heart, claws out of its lower side. */
const LEOPARD_BODY: Body = { family: 'heart', cy: 112 }

/** The short stub the claws grow from, both edges of it on the rim. */
const STUB: Limb = {
  line: [
    [50, 134],
    [48, 135],
    [46, 136],
    [44, 137],
  ],
  half: () => 8,
  rim: { body: LEOPARD_BODY, way: -1 },
}

/** Where each claw runs, out of the end of the stub and hooked down. */
const CLAW_LINES: Point[][] = [
  [
    [38, 132],
    [26, 120],
    [12, 122],
    [10, 136],
  ],
  [
    [38, 140],
    [26, 134],
    [16, 140],
    [16, 154],
  ],
  [
    [42, 147],
    [34, 150],
    [28, 158],
    [30, 170],
  ],
]

/** One claw: thick where it leaves the stub, curved to a sharp point. */
function claw(line: Point[]): string {
  return limbOutline(
    {
      line,
      half: (along) => 3.5 * (1 - along),
      // Free: the claws grow out of the end of `STUB`, not the rim.
      rim: 'free',
    },
    10,
  )
}

/**
 * The fruit with a leopard's claws: three curved, hooked claws out of a
 * short stub grown from its lower side. In chapter 349 (episode 246) Lucci,
 * in his half-leopard form, names his fruit and, with sharp nails, pierces
 * Luffy.
 * Claws only, never a foreleg, a pad or a rosette, and curved, never
 * straight, so they are never the spike fruit's spikes.
 */
export const CAT_LEOPARD: Stroke[] = [
  ...kitBody(LEOPARD_BODY, [100, 112, 124]),
  ...skin([
    [70, 94, 8],
    [88, 128, -7],
  ]),
  ...sprout(LEOPARD_BODY, 4, 'right'),
  { d: limbOutline(STUB, 8) },
  { d: CLAW_LINES.map((line) => claw(line)).join(' '), role: 'accent' },
  shadowUnder(1),
]

/** The revive fruit: a heart, its soul coming back in at the crown. */
const REVIVE_BODY: Body = { family: 'heart', cy: 116 }

/**
 * The soul: nose first into the dimple at the crown, round where it goes
 * in, and an S of tail behind it up in the air, thinning to a round end.
 */
const WISP: Limb = {
  line: [
    [90, 77],
    [90, 63],
    [96, 51],
    [106, 45],
    [118, 39],
    [126, 29],
    [120, 19],
    [114, 14],
    [118, 9],
    [127, 10],
  ],
  half: (along) => {
    return along < 0.18 ?
        11 * Math.sqrt(1 - (1 - along / 0.18) ** 2)
      : 1.4 + 9.6 * Math.max(0, 1 - (along - 0.18) / 0.82) ** 1.4
  },
  // Free: the wisp dives into the crown, it is not grown from the rim.
  rim: 'free',
}

/**
 * The fruit its soul comes back to: one soft wisp of soul diving nose first
 * into the dimple at its crown, beside the stalk, the rim of the dimple open
 * where it goes in. In episode 338 Brook tells the crew he ate the fruit,
 * and that after he died his soul came back from the underworld and looked
 * for his body. A wisp, never a flame or a ghost: no point, no dome and no
 * face.
 */
export const REVIVE_REVIVE: Stroke[] = [
  ...kitBody(REVIVE_BODY, [104, 116, 128]).with(
    1,
    crown(REVIVE_BODY, [80, 101]),
  ),
  ...skin([
    [64, 104, 8],
    [86, 134, -7],
  ]),
  ...sprout(REVIVE_BODY, -4, 'left'),
  { d: limbOutline(WISP, 36), role: 'accent' },
  shadowUnder(1),
]

/** The hollow fruit: a round, a ghost passing out through its far side. */
const HOLLOW_BODY: Body = { family: 'round', cy: 118 }

/** The centre of the ghost's dome. */
const GHOST_AT: Point = [126, 80]

/** How the ghost leans, its dome, how long it is and how far it flares. */
const GHOST = { lean: 34, r: 16, hem: 30, flare: 5 }

/** A point of the ghost, across it and down from the centre of its dome. */
const onGhost = turnedAbout(GHOST_AT, GHOST.lean)

/** Whether a point of the box is under the ghost. */
function underGhost(x: number, y: number): boolean {
  const [dx, dy] = [x - GHOST_AT[0], y - GHOST_AT[1]]
  const turn = GHOST.lean * DEGREES
  const u = dx * Math.cos(turn) + dy * Math.sin(turn)
  const v = -dx * Math.sin(turn) + dy * Math.cos(turn)

  return v < 0 ?
      Math.hypot(u, v) < GHOST.r + 1
    : Math.abs(u) < GHOST.r + GHOST.flare + 1 && v < GHOST.hem + 7
}

/**
 * The ghost: a dome, straight sides falling a little apart, and a hem of
 * three soft scallops.
 */
function ghost(): string {
  const dome = Array.from({ length: 13 }, (_unused, at): Point => {
    const turn = Math.PI + (at * Math.PI) / 12

    return [GHOST.r * Math.cos(turn), GHOST.r * Math.sin(turn)]
  })
  const wide = GHOST.r + GHOST.flare
  const side = (way: number): Point[] => {
    return [0.3, 0.6].map((along) => [
      way * (GHOST.r + GHOST.flare * along ** 2),
      GHOST.hem * along,
    ])
  }
  const hem = Array.from({ length: 25 }, (_unused, at): Point => {
    const along = at / 24

    return [
      wide - along * wide * 2,
      GHOST.hem + 4.5 * Math.abs(Math.sin(along * 3 * Math.PI)),
    ]
  })

  return polyline(
    [...dome, ...side(1), ...hem, ...side(-1).toReversed()].map(([u, v]) =>
      point(...onGhost(u, v)),
    ),
    true,
  )
}

/**
 * The fruit a ghost passes through: a plain ghost, a dome over a scalloped
 * hem, half out through its far side and its hem still inside, the outline
 * open where it crosses. In episode 342 ghosts pass through Luffy's net and
 * through Franky, Luffy and Zoro, who sink into despair; in episode 356
 * Perona explains her fruit to the crew. No eyes, no mouth and no tongue.
 */
export const HOLLOW_HOLLOW: Stroke[] = [
  ...kitBody(HOLLOW_BODY, [130, 142, 152], (x, y) => !underGhost(x, y)),
  ...skin([
    [64, 110, 9],
    [84, 146, -7],
  ]),
  ...sprout(HOLLOW_BODY, -4, 'left'),
  { d: ghost(), role: 'accent' },
  shadowUnder(1),
]

/** The clear fruit: a segmented one, gone from sight below its middle. */
const CLEAR_BODY: Body = { family: 'segmented', cy: 104 }

/** Where the fruit stops: the height of the clean line across it. */
const CLEAR_LINE = 112

/** One footprint on the ground: the sole, and the heel apart behind it. */
function footprint(heel: Point, toe: Point): string {
  const at = (along: number): Point => [
    heel[0] + (toe[0] - heel[0]) * along,
    heel[1] + (toe[1] - heel[1]) * along,
  ]
  const piece = (from: number, to: number, wide: number): string => {
    const line = [at(from), at(from), at(to), at(to)]
    const half = (along: number): number => {
      return wide * (0.55 + 0.45 * Math.sin(along * Math.PI) ** 0.5)
    }

    // Free: a footprint on the ground, nowhere near the fruit.
    return `${limbOutline({ line, half, rim: 'free' }, 8)} Z`
  }

  return `${piece(0.42, 0.88, 4.2)} ${piece(0, 0.26, 3.2)}`
}

/**
 * The fruit gone invisible below its middle: the top half whole, and below
 * a clean line across it nothing at all, only two footprints on the ground
 * where it stands. In episode 339 something unseen holds the crew on their
 * ship; in episode 359 Sanji names the fruit Absalom ate, and Absalom's
 * footsteps give him away. No shadow and no fading.
 */
export const CLEAR_CLEAR: Stroke[] = [
  ...kitBody(CLEAR_BODY, [84, 96], (_x, y) => y < CLEAR_LINE),
  ribs(CLEAR_BODY, CLEAR_LINE - 2),
  ...skin([
    [80, 98, 7],
    [84, 78, -5],
  ]),
  ...sprout(CLEAR_BODY, 4, 'right'),
  {
    d: [
      `M${point(...onRim(CLEAR_BODY, CLEAR_LINE, -1))}`,
      `C${point(60, CLEAR_LINE + 7)}`,
      point(100, CLEAR_LINE + 7),
      point(...onRim(CLEAR_BODY, CLEAR_LINE, 1)),
      footprint([52, 180], [64, 160]),
      footprint([86, 188], [98, 168]),
    ].join(' '),
    role: 'accent',
  },
]

/** The shadow fruit: an oblong, its shadow cut away at its foot. */
const SHADOW_BODY: Body = { family: 'oblong', cy: 100 }

/**
 * The fruit with its shadow cut off: its shadow on the ground, cut free at
 * the foot with a wide gap left, and the cut end curled up off the ground.
 * In episode 349 Moria picks Luffy's shadow up off the floor and cuts it
 * from his body with a giant pair of scissors, and Brook explains that the
 * fruit takes shadows and puts them into other bodies. No scissors, and no
 * second fruit.
 */
export const SHADOW_SHADOW: Stroke[] = [
  ...kitBody(SHADOW_BODY, [86, 98, 110, 122]),
  ...skin([
    [64, 94, 8],
    [86, 128, -7],
  ]),
  ...sprout(SHADOW_BODY, 4, 'right'),
  {
    d: [
      'M70 164 C90 158 118 158 132 163 C144 167 144 176 132 179',
      'C116 184 88 184 72 180 C62 177 58 168 62 161',
      'C65 156 72 156 72 161 C72 164 68 165 67 162',
    ].join(' '),
    role: 'accent',
  },
  // The shadow is dark.
  {
    d: [
      'M80 179 L88 166 M92 180 L100 165 M104 180 L112 165',
      'M116 179 L124 165 M128 176 L134 167',
    ].join(' '),
    role: 'ambient',
  },
]

/** The glint fruit: a pear, its near side gone at the speed of light. */
const GLINT_BODY: Body = { family: 'pear', cy: 118 }

/** Where the near side has gone: the rim heights the outline opens between. */
const GLINT_GAP = { top: 98, bottom: 150 }

/** The streaks of light: the rim height each leaves at, and how far it runs. */
const STREAKS = [
  { y: 106, reach: 30 },
  { y: 117, reach: 46 },
  { y: 128, reach: 48 },
  { y: 139, reach: 32 },
]

/** How far a streak climbs for every step it runs back. */
const STREAK_RISE = 0.28

/**
 * The fruit leaving at the speed of light: its near side is not there, the
 * outline stopping at the shoulder and at the foot, and out of the gap four
 * ruler-straight streaks run off back to the left, longest in the middle.
 * In episode 401 Kizaru kicks with light at the speed of light, and in 404
 * shots go straight through him and he names his fruit a Logia.
 */
export const GLINT_GLINT: Stroke[] = [
  {
    d: outline(
      GLINT_BODY,
      (x, y) => x > 80 || y < GLINT_GAP.top || y > GLINT_GAP.bottom,
    ),
  },
  crown(GLINT_BODY),
  hatching(GLINT_BODY, [130, 142, 154]),
  ...skin([
    [94, 110, 7],
    [76, 128, -6],
    [92, 148, 6],
  ]),
  ...sprout(GLINT_BODY, 4, 'right'),
  {
    d: STREAKS.map(({ y, reach }) => {
      const x = onRim(GLINT_BODY, y, -1)[0] + 8

      return `M${point(x, y)} L${point(x - reach, y - reach * STREAK_RISE)}`
    }).join(' '),
    role: 'accent',
  },
  shadowUnder(1),
]

/** A snake's tail: thick at the root, narrowing to `end` at its point. */
function taper(root: number, end: number): (along: number) => number {
  return (along) => end + (root - end) * (1 - along)
}

/** A snake's tail, and the scale bands across it at points along it. */
function snakeTail(limb: Limb, bands: number[]): [Stroke, Stroke] {
  return [
    { d: limbOutline(limb, 28), role: 'accent' },
    {
      d: bands.map((along) => acrossLimb(limb, along, 0.85)).join(' '),
      role: 'soft',
    },
  ]
}

/** The anaconda fruit: a pear, a snake's tail wrapped round its waist. */
const ANACONDA_BODY: Body = { family: 'pear', cy: 116 }

/**
 * The tail: out of the foot on the left, round and up the near side, and
 * across the front of the waist, its tip tucked against the far rim.
 */
const COIL_TAIL: Limb = {
  line: [
    [62, 152],
    [46, 160],
    [36, 148],
    [38, 132],
    [40, 116],
    [44, 104],
    [58, 100],
    [72, 96],
    [88, 101],
    [99, 95],
  ],
  half: taper(9, 3),
  rim: { body: ANACONDA_BODY, way: -1 },
}

/**
 * The fruit with an anaconda's tail: one thick tail grown out of its foot,
 * wrapped once round the waist, its tapering tip tucked back against the
 * far side. In episode 413 Sandersonia, in her half-snake form, catches
 * Luffy with her tail and slams him. The tail and nothing else, never a
 * head.
 */
export const SNAKE_ANACONDA: Stroke[] = [
  ...kitBody(ANACONDA_BODY, [132, 144, 154], (x, y) =>
    x < 80 ? y < 90 || y > 108 : y < 88 || y > 102,
  ),
  ...skin([
    [76, 84, 5],
    [76, 132, -8],
  ]),
  ...sprout(ANACONDA_BODY, 4, 'right'),
  ...snakeTail(COIL_TAIL, [0.22, 0.42, 0.62]),
  shadowUnder(1),
]

/** The king cobra fruit: an oblong, a snake's tail raised beside it. */
const COBRA_BODY: Body = { family: 'oblong', cy: 118 }

/**
 * The tail: out of the foot on the right, up beside the fruit in one stiff
 * S, and back over so its point is levelled at the shoulder, a stroke short
 * of it: a point that touched the rim would close the tail into a handle.
 */
const STRIKE_TAIL: Limb = {
  line: [
    [114, 140],
    [132, 150],
    [150, 142],
    [148, 122],
    [146, 106],
    [132, 100],
    [134, 84],
    [134, 64],
    [146, 50],
    [136, 46],
    [126, 46],
    [118, 64],
    [109, 77],
  ],
  half: taper(7, 0),
  rim: { body: COBRA_BODY, way: 1 },
}

/**
 * The fruit with a king cobra's tail: a tail grown out of its foot and
 * raised beside it in one stiff S, its hard point levelled at the shoulder
 * like a spear about to stab. In episode 413 Marigold, in her half-snake
 * form, stabs at Luffy with her tail. No hood and no head.
 */
export const SNAKE_KING_COBRA: Stroke[] = [
  ...kitBody(COBRA_BODY, [112, 124, 136]),
  ...skin([
    [64, 108, 9],
    [86, 140, -8],
  ]),
  ...sprout(COBRA_BODY, -4, 'left'),
  ...snakeTail(STRIKE_TAIL, [0.2, 0.36, 0.52]),
  shadowUnder(1),
]

/** The love fruit: a heart, its point turned to stone. */
const LOVE_BODY: Body = { family: 'heart', cy: 112 }

/**
 * The seam where the skin stops and the stone starts: down across the fruit
 * on a steep slant from the near shoulder to the far side of the point, so
 * it never lies level under the marks on the skin.
 */
const STONE_SEAM: Point[] = [
  [40, 110],
  [56, 119],
  [61, 117],
  [74, 130],
  [81, 129],
  [99, 146],
]

/** The stone below the seam, cut in flat faces from one end of it round. */
const STONE_FACES: Point[] = [
  [40, 110],
  [44, 128],
  [54, 144],
  [68, 154],
  [80, 158],
  [90, 154],
  [99, 146],
]

/**
 * The fruit turned to stone from the point up: a seam slants down across
 * it, and under it the skin stops and the stone is plain and whole, cut in
 * flat faces. In episode 410 Hancock turns Momonga's Marines to stone, and
 * in 415 she tells Luffy how she came to eat the fruit.
 */
export const LOVE_LOVE: Stroke[] = [
  { d: outline(LOVE_BODY, (x, y) => y < heightOn(STONE_SEAM, x) - 1) },
  crown(LOVE_BODY),
  shine(LOVE_BODY),
  hatching(LOVE_BODY, [112, 122, 132]),
  ...skin([[74, 88, 8]]),
  ...sprout(LOVE_BODY, 4, 'right'),
  { d: polyline(STONE_SEAM.map(([x, y]) => point(x, y))), role: 'accent' },
  // The stone, cut in flat faces down to the point.
  { d: polyline(STONE_FACES.map(([x, y]) => point(x, y))) },
  shadowUnder(1),
]

/** The magma fruit: a heart, magma surging out of its point. */
const MAGMA_BODY: Body = { family: 'heart', cy: 104 }

/** How far down the heart the magma has it. */
const MAGMA_LINE = 140

/** A lump of rock: a few flat faces about a point. */
function rock(cx: number, cy: number, r: number): string {
  return polyline(
    [0, 70, 150, 215, 290].map((degrees, at) => {
      const reach = r * (at % 2 === 0 ? 1 : 0.8)

      return point(
        cx + reach * Math.cos(degrees * DEGREES),
        cy + reach * Math.sin(degrees * DEGREES),
      )
    }),
    true,
  )
}

/**
 * The fruit erupting: out of its point surges one swell of molten magma,
 * shaped like a fist, the outline open where it leaves, and two lumps of
 * rock flung up from it. In episode 463 Akainu melts Jozu's iceberg with a
 * giant fist of magma and rains volcanic rock on the battlefield.
 */
export const MAGMA_MAGMA: Stroke[] = [
  ...kitBody(MAGMA_BODY, [92, 104, 116], (_x, y) => y < MAGMA_LINE),
  ...skin([
    [62, 86, 8],
    [86, 112, -7],
  ]),
  ...sprout(MAGMA_BODY, -4, 'left'),
  {
    d: [
      `M${point(...onRim(MAGMA_BODY, MAGMA_LINE, -1))}`,
      'C62 156 72 172 96 172 C112 172 126 172 136 168',
      'C144 166 147 160 141 156 C148 154 149 147 142 144',
      'C147 140 144 134 136 134 C124 132 110 132',
      point(...onRim(MAGMA_BODY, MAGMA_LINE, 1)),
      rock(132, 104, 6),
      rock(146, 122, 4.5),
    ].join(' '),
    role: 'accent',
  },
  // Which way the magma is flowing.
  {
    d: 'M74 148 C78 160 94 164 112 162 M96 152 C108 152 120 150 128 146',
    role: 'soft',
  },
  shadowUnder(1),
]

/** The venom fruit: a gourd, breathing poison out of its shoulder. */
const VENOM_BODY: Body = { family: 'gourd', cy: 122 }

/** Where the breath leaves the near shoulder: the rim heights of the gap. */
const BREATH = { top: 86, bottom: 96 }

/**
 * The fruit breathing poison: a small gap open in the near shoulder of its
 * upper bulb, and out of it a plume that leaves level, wavers, and curls
 * up into a loose knot above the shoulder. No drops. In episode 425 Magellan,
 * who ate the fruit, knocks Hannyabal down with his poison breath.
 */
export const VENOM_VENOM: Stroke[] = [
  ...kitBody(
    VENOM_BODY,
    [146, 156, 164],
    (x, y) => x > 70 || y < BREATH.top || y > BREATH.bottom,
  ),
  waist(VENOM_BODY, 122),
  ...skin([
    [86, 100, 6],
    [72, 148, 8],
  ]),
  ...sprout(VENOM_BODY, 4, 'right'),
  {
    d: [
      `M${point(onRim(VENOM_BODY, 88, -1)[0] + 2, 88)}`,
      'C46 88 38 84 34 76 C30 66 36 58 30 48 C26 40 30 30 40 28',
      'C50 26 56 34 50 40 C46 44 40 40 42 36',
      `M${point(onRim(VENOM_BODY, 95, -1)[0] + 2, 95)}`,
      'C44 96 30 94 22 84 C14 74 22 62 16 52 C12 44 16 36 24 32',
    ].join(' '),
    role: 'accent',
  },
  shadowUnder(1),
]

/** The horm fruit: a pear, a needle in its shoulder. */
const HORM_BODY: Body = { family: 'pear', cy: 118 }

/** Where the needle goes in, and which way it points. */
const NEEDLE = { at: onRim(HORM_BODY, 94, 1), lean: -38 }

/** A point on the needle: along it from the skin, and across it. */
const onNeedle = turnedAbout(NEEDLE.at, NEEDLE.lean)

/**
 * The fruit being injected: a plain hollow needle driven in at a slant
 * into its shoulder, the outline cut where it enters. In episode 439
 * Ivankov injects a prisoner with hormones and turns him into a woman, and
 * in 440 he says his fruit alters a body's hormones. The needle and
 * nothing else, no finger and no hand.
 */
export const HORM_HORM: Stroke[] = [
  ...kitBody(
    HORM_BODY,
    [130, 142, 154],
    (x, y) => Math.hypot(x - NEEDLE.at[0], y - NEEDLE.at[1]) > 4,
  ),
  ...skin([
    [70, 104, 6],
    [72, 140, -8],
  ]),
  ...sprout(HORM_BODY, -4, 'left'),
  {
    d: [
      polyline(
        [
          [44, 1.4],
          [-5, 1.4],
          [-1, -1.4],
          [44, -1.4],
        ].map(([u = 0, v = 0]) => point(...onNeedle(u, v))),
      ),
      polyline(
        [
          [44, 3.5],
          [44, -3.5],
          [56, -4.5],
          [56, 4.5],
        ].map(([u = 0, v = 0]) => point(...onNeedle(u, v))),
        true,
      ),
      polyline(
        [
          [56, 7],
          [56, -7],
          [59, -7],
          [59, 7],
        ].map(([u = 0, v = 0]) => point(...onNeedle(u, v))),
        true,
      ),
    ].join(' '),
    role: 'accent',
  },
  // The skin drawn in about the point.
  {
    d: [
      polyline([onNeedle(2, 6), onNeedle(-2, 8)].map((at) => point(...at))),
      polyline([onNeedle(2, -6), onNeedle(-2, -8)].map((at) => point(...at))),
    ].join(' '),
    role: 'soft',
  },
  shadowUnder(1),
]

/** The snip fruit: a segmented one, a segment cut free and peeled out. */
const SNIP_BODY: Body = { family: 'segmented', cy: 114 }

/** How far down the far side the segment has been cut free. */
const SNIP_HINGE = 142

/**
 * Where the cut runs: down the far rib, from the crown to the hinge, or
 * `inset` in from it, where the cut face of the skin ends.
 */
function snipCut(inset = 0): string {
  return polyline(
    Array.from({ length: 13 }, (_unused, at) => {
      const y =
        crownY(SNIP_BODY) + 8 + ((SNIP_HINGE - 8 - crownY(SNIP_BODY)) * at) / 12

      return point(80 + 0.5 * halfWidth(SNIP_BODY, y) - inset, y)
    }),
  )
}

/**
 * The peeled strip: out of the far side, where it still holds at the
 * hinge, up and away from the fruit, square at its cut end and turning over
 * once on the way, as a strip of paper does.
 */
const STRIP: Limb = {
  line: [
    [107, SNIP_HINGE],
    [107, 158],
    [148, 134],
    [146, 112],
    [144, 92],
    [150, 76],
    [140, 60],
  ],
  half: (along) => (9 - 3 * along) * Math.cos(Math.PI * along),
  end: [],
  // Free: a peeled segment hinged across the rib cut, not grown from the rim.
  rim: 'free',
}

/**
 * The fruit cut like paper: the segment on its far side cut free along the
 * rib and peeled away like a strip of paper, turning over once, the cut
 * face of the skin showing along the rib, and the outline open where the
 * strip came away. In episode 442 Inazuma turns his hands into scissors
 * and cuts the stone floor into strips as if it were paper.
 */
export const SNIP_SNIP: Stroke[] = [
  {
    d: outline(
      SNIP_BODY,
      (x, y) => x < 80 + 0.5 * halfWidth(SNIP_BODY, y) || y > SNIP_HINGE,
    ),
  },
  crown(SNIP_BODY),
  shine(SNIP_BODY),
  { d: snipCut() },
  { d: snipCut(5), role: 'soft' },
  ribs(SNIP_BODY, undefined, [-1]),
  ...skin([
    [62, 100, 8],
    [70, 140, -6],
  ]),
  ...sprout(SNIP_BODY, -4, 'left'),
  { d: limbOutline(STRIP, 32), role: 'accent' },
  shadowUnder(1),
]

/** The phoenix fruit: a round, flame wings out of its shoulders. */
const PHOENIX_BODY: Body = { family: 'round', cy: 122 }

/**
 * One wing out of the shoulder, both ends of it on the rim: up to the tip
 * along its leading edge, then back down in three hooked tongues of flame
 * where a wing's feathers would be.
 */
const FLAME_WING: Growth = {
  from: 88,
  to: 116,
  through: [
    [40, 70],
    [50, 40],
    [72, 30],
    [70, 42],
    [64, 50],
    [60, 56],
    [64, 66],
    [72, 72],
    [74, 62],
    [72, 74],
    [62, 76],
    [54, 78],
    [58, 88],
    [66, 94],
    [72, 86],
    [68, 96],
    [56, 98],
    [48, 98],
    [52, 106],
    [58, 112],
    [62, 106],
    [58, 114],
    [48, 116],
  ],
}

/**
 * The fruit with a phoenix's wings: two wings out of its shoulders, swept up
 * and out, their trailing edges breaking into hooked tongues of flame where
 * feathers would be. In episode 463 and chapter 554 Marco, in his phoenix
 * form and wrapped in blue flame, takes Kizaru's light with no wound left. The
 * wings and nothing else, never the head.
 */
export const BIRD_PHOENIX: Stroke[] = [
  ...kitBody(PHOENIX_BODY, [122, 134, 146]),
  ...skin([[70, 140, 10]]),
  ...sprout(PHOENIX_BODY, 0, 'right'),
  {
    d: [-1, 1].map((way) => grown(PHOENIX_BODY, way, FLAME_WING)).join(' '),
    role: 'accent',
  },
  {
    d: [
      `M${point(80 - 46, 100)} L${point(80 - 62, 52)}`,
      `M${point(80 + 46, 100)} L${point(80 + 62, 52)}`,
    ].join(' '),
    role: 'soft',
  },
  shadowUnder(1),
]

/** The sparkle fruit: a segmented one, its near half turned to diamond. */
const SPARKLE_BODY: Body = { family: 'segmented', cy: 116 }

/** The near half as a cut stone: its girdle, crown to foot, cut straight. */
const GIRDLE: Point[] = [
  [80, 70],
  [58, 76],
  [42, 92],
  [36, 114],
  [39, 136],
  [50, 152],
  [66, 160],
  [80, 162],
]

/** The flat table on the shoulder, where the facets meet. */
const TABLE: Point[] = [
  [52, 90],
  [64, 82],
  [72, 94],
  [60, 102],
]

/**
 * The fruit turned half to diamond: on the near half the outline runs in
 * straight cuts, and the rib straightens into facet edges that meet at a
 * flat table on the shoulder. In episode 463 Jozu turns his body to diamond
 * and blocks Mihawk's slash.
 */
export const SPARKLE_SPARKLE: Stroke[] = [
  { d: outline(SPARKLE_BODY, (x) => x >= 80) },
  crown(SPARKLE_BODY),
  hatching(SPARKLE_BODY, [104, 116, 128]),
  ribs(SPARKLE_BODY, undefined, [1]),
  ...skin([
    [96, 112, 7],
    [92, 146, -6],
  ]),
  ...sprout(SPARKLE_BODY, 6, 'right'),
  {
    d: [
      polyline(GIRDLE.map(([x, y]) => point(x, y))),
      polyline(
        TABLE.map(([x, y]) => point(x, y)),
        true,
      ),
      'M52 90 L42 92 M64 82 L58 76 M64 82 L80 70 M72 94 L80 116',
      'M60 102 L36 114 M60 102 L80 116 L66 160 M80 116 L39 136',
    ].join(' '),
    role: 'accent',
  },
  shadowUnder(1),
]

/** The wash fruit: an oblong, its lower half gone limp as washed cloth. */
const WASH_BODY: Body = { family: 'oblong', cy: 104 }

/** Where the skin stops and the cloth starts. */
const WASH_WAIST = 108

/**
 * The fruit gone limp as laundry: below a crease at the waist it has gone
 * flat and limp as cloth, narrower than the skin at the crease, hanging
 * askew to an uneven hem with one corner folded over and a wrinkle across it. In
 * episode 465 Tsuru turns the pirates who attack her into laundry. No
 * clothes peg, no line and no hook: hanging them out to dry is only said
 * later, in an SBS.
 */
export const WASH_WASH: Stroke[] = [
  { d: outline(WASH_BODY, (_x, y) => y < WASH_WAIST) },
  crown(WASH_BODY),
  shine(WASH_BODY),
  ...skin([[68, 90, 7]]),
  ...sprout(WASH_BODY, 2, 'left'),
  // The crease where the skin turns to cloth.
  {
    d: [
      `M${point(...onRim(WASH_BODY, WASH_WAIST, -1))}`,
      'C60 118 100 118',
      point(...onRim(WASH_BODY, WASH_WAIST, 1)),
    ].join(' '),
  },
  {
    d: [
      'M50 114 C47 130 45 146 40 160 C52 164 62 160 74 166',
      'C86 172 98 168 108 176 C114 180 120 178 124 180',
      'C118 160 114 136 110 114',
    ].join(' '),
    role: 'accent',
  },
  // The corner folded over, a wrinkle, and the fold the cloth hangs in.
  {
    d: [
      'M40 160 L52 150 L56 163',
      'M60 132 C64 129 68 135 72 132 C76 129 80 135 84 132',
      'M80 120 C84 140 90 156 96 170',
    ].join(' '),
    role: 'soft',
  },
  // The far side of the cloth, turning away.
  {
    d: 'M108 134 L102 128 M110 148 L104 142 M113 162 L107 156',
    role: 'ambient',
  },
  shadowUnder(1),
]

/** The great buddha fruit: a round, a giant arm out of its shoulder. */
const DAIBUTSU_BODY: Body = { family: 'round', cy: 124 }

/** The fist, closed, as a ring of points from one side of the wrist round. */
const FIST: Point[] = [
  [149, 50],
  [151, 34],
  [147, 24],
  [143, 16],
  [137, 18],
  [133, 12],
  [127, 14],
  [123, 10],
  [117, 13],
  [113, 10],
  [107, 16],
  [107, 28],
  [111, 42],
  [119, 50],
]

/**
 * The arm: out of the far shoulder, swelling at the muscle and up beside the
 * fruit, so the fist is raised above it.
 */
const GIANT_ARM: Limb = {
  line: [
    [118, 112],
    [129, 106],
    [141, 92],
    [139, 76],
    [137, 66],
    [135, 58],
    [134, 52],
  ],
  half: (along) => 12 + 3 * Math.sin(Math.PI * along) - 2 * along,
  rim: { body: DAIBUTSU_BODY, way: 1 },
  end: FIST,
}

/**
 * The fruit with a giant's arm: one oversized arm grown out of its far
 * shoulder, the fist closed and raised, bigger than half the fruit. In
 * episode 480 Sengoku turns into a giant golden buddha and breaks the
 * scaffold with one punch. A closed fist, never an open palm, and no rays
 * of light.
 */
export const HUMAN_DAIBUTSU: Stroke[] = [
  ...kitBody(DAIBUTSU_BODY, [140, 150, 158]),
  ...skin([
    [62, 116, 9],
    [86, 144, -8],
  ]),
  ...sprout(DAIBUTSU_BODY, -6, 'left'),
  { d: limbOutline(GIANT_ARM), role: 'accent' },
  // The fingers folded into the palm.
  {
    d: [
      'M119 14 L119 24 M129 14 L129 24 M139 18 L139 26',
      'M109 30 C119 34 131 34 141 30',
    ].join(' '),
    role: 'soft',
  },
  shadowUnder(1),
]

/** The swamp fruit's segmented body, half swallowed by its own mud. */
const SWAMP_BODY: Body = { family: 'segmented', cy: 100 }
const SWAMP_WAIST = 112

/**
 * A fruit sinking into a bottomless swamp, the mud drawn down into a deep
 * funnel beneath it. In episode 531 (chapter 612), Caribou explains that
 * the mermaids he swallows remain inside his bottomless swamp.
 */
export const SWAMP_SWAMP: Stroke[] = [
  ...kitBody(SWAMP_BODY, [82, 94, 106], (_x, y) => y < SWAMP_WAIST),
  ribs(SWAMP_BODY, SWAMP_WAIST - 2),
  ...skin([
    [80, 82, 6],
    [76, 105, -4],
  ]),
  ...sprout(SWAMP_BODY, 5, 'right'),
  {
    d: [
      'M8 144 C18 142 26 126 37 112',
      'C54 128 106 128 123 112 C134 126 142 142 152 144',
      'M37 112 C40 138 60 162 80 180 C100 162 120 138 123 112',
    ].join(' '),
    role: 'accent',
  },
  // The far wall of the mud, turning away inside the funnel.
  { d: 'M44 133 L51 129 M51 147 L58 142 M61 161 L67 156', role: 'ambient' },
]

/** The mark fruit, with room above its shoulder for the incoming axe. */
const MARK_BODY: Body = { family: 'round', cy: 124 }

/**
 * A thrown double-bladed axe biting into the fruit's left shoulder, one
 * smooth incoming arc behind it. In episode 532 (chapter 613), Decken sends
 * the axe towards his marked target. No returning or pursuing trajectory:
 * the pursuit is demonstrated in episode 534 (chapter 615).
 */
export const MARK_MARK: Stroke[] = [
  ...kitBody(MARK_BODY, [128, 140, 152], (x, y) => x > 80 || y < 98 || y > 124),
  ...skin([
    [74, 112, 8],
    [90, 143, -7],
  ]),
  ...sprout(MARK_BODY, 4, 'right'),
  {
    d: [
      'M8 24 C12 38 16 48 24 62',
      'M24 62 L47 105 L43 108 L20 64 Z',
      'M38 94 C29 96 22 94 16 88 C12 102 18 115 28 120',
      'C29 110 34 106 43 108',
      'C50 105 55 110 58 119 C68 108 68 96 61 87',
      'C55 96 48 99 38 94 Z',
    ].join(' '),
    role: 'accent',
  },
  // The axe's bevel, without the rose embossed on Decken's weapon.
  {
    d: 'M17 98 C18 106 22 112 26 115 M63 98 C64 105 61 110 59 113',
    role: 'soft',
  },
  shadowUnder(1),
]

/** The pteranodon's fruit, with its leathery wings spread out to either side. */
const PTERANODON_BODY: Body = { family: 'oblong', cy: 126 }
const LEATHER_WING: Growth = {
  from: 104,
  to: 148,
  through: [
    [44, 96],
    [58, 84],
    [72, 72],
    [56, 100],
    [48, 134],
  ],
}

/**
 * Two wings with straight bony leading edges and leathery membranes, grown
 * from the shoulders. King flies into Big Mom's ship in episode 924
 * (chapter 930). Leathery wings, never the falcon's feathers or a head.
 */
export const DRAGON_PTERANODON: Stroke[] = [
  ...kitBody(PTERANODON_BODY, [152, 160], (_x, y) => y < 104 || y > 148),
  ...skin([
    [76, 118, 7],
    [85, 151, -6],
  ]),
  ...sprout(PTERANODON_BODY, 0, 'right'),
  {
    d: `${grown(PTERANODON_BODY, -1, LEATHER_WING)} ${grown(PTERANODON_BODY, 1, LEATHER_WING)}`,
    role: 'accent',
  },
  // The membrane stretched between the leading bone and the trailing rim.
  { d: 'M12 76 L26 110 M148 76 L134 110', role: 'soft' },
  shadowUnder(1),
]

/** A scroll wound round an oblong fruit, coming out of its near side. */
const SCROLL_BODY: Body = { family: 'oblong', cy: 114 }

/**
 * The scroll unrolled from an opening and wrapped round the fruit, its far
 * end still rolled tight. In episode 1004 (chapter 992), Raizo catches
 * Kaido's breath in a scroll, winds it round him and releases it back.
 * Paper only: the power makes scrolls, it does not turn the body into paper.
 */
export const SCROLL_SCROLL: Stroke[] = [
  ...kitBody(SCROLL_BODY, [92, 153], (_x, y) => y < 104 || y > 144),
  ...skin([
    [78, 88, 6],
    [76, 152, -4],
  ]),
  ...sprout(SCROLL_BODY, -3, 'left'),
  {
    d: [
      `M${point(...onRim(SCROLL_BODY, 104, -1))}`,
      'C60 116 94 117 119 103',
      'C129 96 141 100 144 110 L144 131',
      'C142 141 131 143 126 135',
      'C102 148 61 146 42 133',
      `L${point(...onRim(SCROLL_BODY, 104, -1))}`,
      'M119 103 L119 124 C125 119 137 119 142 126',
      'M126 135 C123 127 128 123 134 126 C140 129 136 135 132 132',
    ].join(' '),
    role: 'accent',
  },
  // The fold following the curve of the fruit, without writing on the paper.
  { d: 'M49 120 C68 129 92 130 110 122', role: 'soft' },
  { d: 'M139 112 L135 108 M140 120 L135 116', role: 'ambient' },
  shadowUnder(1),
]

/** The magnet fruit: a gourd, scrap compacted onto its near shoulder. */
const MAGNET_BODY: Body = { family: 'gourd', cy: 114 }

/**
 * Blades, barrels and bent plates packed together on the shoulder, swelling
 * it out into a clump of iron. Kid gathers weapons into a metal arm in
 * episodes 398–399 (chapters 504–505), long before the record's threshold
 * at 1058. No flying scraps, magnetic lettering or awakened technique.
 */
export const MAGNET_MAGNET: Stroke[] = [
  ...kitBody(MAGNET_BODY, [142, 154], (x, y) => x < 80 || y < 90 || y > 137),
  ...skin([
    [70, 87, 6],
    [76, 145, -7],
  ]),
  ...sprout(MAGNET_BODY, -5, 'left'),
  {
    d: [
      'M100 94 L114 80 L126 88 L139 82 L149 98 L143 112',
      'L151 125 L137 140 L122 134 L109 140 L100 130',
      'M114 80 L108 66 L113 63 L124 84',
      'M125 90 L141 60 L144 90 L137 102 Z',
      'M111 103 L138 113 L135 124 L108 114 Z',
      'M135 124 L131 118 L134 113',
      'M117 124 L124 135 L136 130 L129 119 Z',
    ].join(' '),
    role: 'accent',
  },
  // The far faces of the scraps, turned away from the light.
  { d: 'M144 98 L139 94 M142 106 L137 102 M140 127 L136 123', role: 'ambient' },
  shadowUnder(1),
]

/** The woods fruit: a heart whose foot is becoming wood and spreading roots. */
const WOODS_BODY: Body = { family: 'heart', cy: 110 }

/**
 * The fruit's foot turned to wood, branching roots along the ground, two
 * uneven tips curling up to grasp. In episodes 1080–1081 (chapters 1053–1054),
 * Ryokugyu's roots ensnare and drain his opponents. No later fireproofing,
 * regeneration or flower propeller.
 */
export const WOODS_WOODS: Stroke[] = [
  ...kitBody(WOODS_BODY, [94, 106, 118], (_x, y) => y < 132),
  ...skin([
    [68, 91, 7],
    [84, 117, -6],
  ]),
  ...sprout(WOODS_BODY, 3, 'right'),
  {
    d: [
      `M${point(...onRim(WOODS_BODY, 132, -1))}`,
      'L60 147 L48 153 L28 151 C16 148 15 140 20 137',
      'C9 137 9 151 20 158 L37 165 L18 176 L36 172 L51 164 L66 160',
      'L60 171 L44 184 L64 178 L80 165 L90 174 L108 187 L104 174 L93 159',
      'L112 166 L131 165 C145 164 152 152 147 144',
      'C148 155 138 159 129 155 L112 157 L97 148 L',
      point(...onRim(WOODS_BODY, 132, 1)),
    ].join(' '),
    role: 'accent',
  },
  // Grain where the skin is becoming wood, and along the near roots.
  {
    d: 'M68 132 L68 147 L73 153 M85 134 L86 147 L92 152 M54 158 L33 157 M101 157 L116 162',
    role: 'soft',
  },
  {
    d: 'M53 177 L58 171 M61 174 L66 168 M99 176 L95 168 M122 162 L118 158',
    role: 'ambient',
  },
]

/** The sabre-toothed tiger's fruit: a segmented body above a resting forepaw. */
const SABRE_BODY: Body = { family: 'segmented', cy: 108 }

/**
 * A heavy forepaw grown from the lower near side, resting with its claws
 * sheathed. Who's-Who lounges in beast form in chapter 998 (episode 1012),
 * before the record opens at 1013. A paw cannot name the model on its own;
 * fangs would read as a mouth. The tail stays out of this composition.
 */
export const CAT_SABRE_TOOTH: Stroke[] = [
  ...kitBody(
    SABRE_BODY,
    [94, 106, 118],
    (x, y) => x > 80 || y < 126 || y > 151,
  ),
  ribs(SABRE_BODY, 142),
  ...skin([
    [71, 91, 7],
    [88, 123, -6],
  ]),
  ...sprout(SABRE_BODY, 4, 'right'),
  {
    d: [
      `M${point(...onRim(SABRE_BODY, 126, -1))}`,
      'C30 134 27 145 28 155 C16 155 10 162 10 170',
      'C10 176 18 177 23 174 C27 178 35 178 39 174',
      'C43 177 51 176 53 171 C60 163 61 156',
      point(...onRim(SABRE_BODY, 151, -1)),
    ].join(' '),
    role: 'accent',
  },
  // Toe creases on the resting paw, without exposed claws or pads.
  {
    d: 'M24 174 C26 168 24 164 22 162 M40 173 C41 168 39 164 36 162',
    role: 'soft',
  },
  shadowUnder(1),
]

/** Ulti's fruit, with short forelimbs cupped down over its sides. */
const PACHY_BODY: Body = { family: 'oblong', cy: 116 }

/** A bent forelimb gripping inward; the other digits are hidden by the fruit. */
const GRIPPING_ARM: Growth = {
  from: 100,
  to: 140,
  through: [
    [48, 98],
    [58, 108],
    [56, 121],
    [55, 132],
    [46, 142],
    [34, 146],
    [35, 140],
    [38, 137],
    [43, 132],
    [38, 138],
    [31, 139],
    [32, 134],
    [35, 130],
    [43, 125],
    [44, 118],
    [44, 126],
    [39, 134],
  ],
}

/**
 * Two short clawed forelimbs gripping the fruit, grown from its shoulders.
 * Ulti pins Luffy in chapter 983, pages 14–15 (episode 990). The digits
 * overlap what they grip, so only the near claw tips show here; no claim
 * about the full claw count, and never the head's dome or a ring of knobs.
 */
export const DRAGON_PACHYCEPHALOSAURUS: Stroke[] = [
  ...kitBody(PACHY_BODY, [148, 154], (_x, y) => y < 100 || y > 140),
  ...skin([
    [80, 108, 7],
    [78, 143, -6],
  ]),
  ...sprout(PACHY_BODY, 3, 'right'),
  {
    d: `${grown(PACHY_BODY, -1, GRIPPING_ARM)} ${grown(PACHY_BODY, 1, GRIPPING_ARM)}`,
    role: 'accent',
  },
  // The elbows and wrists, folded down rather than spread as wings.
  {
    d: 'M27 111 C23 122 31 132 38 133 M133 111 C137 122 129 132 122 133',
    role: 'soft',
  },
  shadowUnder(1),
]

/** Tama's fruit: a round, a dumpling pulled from its near flank. */
const MILLET_BODY: Body = { family: 'round', cy: 116 }

/**
 * A dango pinched out on a short neck of dough, and one finished dumpling
 * resting beside the fruit. Tama pulls a millet dumpling off her cheek and
 * feeds Hihimaru in episode 893 (chapter 911), before the record opens.
 */
export const MILLET_MILLET: Stroke[] = [
  ...kitBody(
    MILLET_BODY,
    [94, 102, 144, 154],
    (x, y) => x < 80 || y < 110 || y > 132,
  ),
  ...skin([
    [68, 101, 8],
    [87, 145, -7],
  ]),
  ...sprout(MILLET_BODY, 3, 'left'),
  {
    d: [
      `M${point(...onRim(MILLET_BODY, 110, 1))}`,
      'C125 110 128 115 132 114 C140 108 150 114 150 122',
      'C150 132 138 136 132 128',
      `L${point(...onRim(MILLET_BODY, 132, 1))}`,
      ring(135, 168, 8),
    ].join(' '),
    role: 'accent',
  },
  { d: 'M137 118 C141 115 145 118 146 121 M132 164 L137 163', role: 'soft' },
  shadowUnder(1),
]

/** Hawkins's fruit: a segmented body split by a bursting tuft of straw. */
const STRAW_BODY: Body = { family: 'segmented', cy: 116 }

/**
 * Straw bursting out of the near side, individual stiff stalks still
 * separate at their tips. Hawkins draws straw from his body in episodes
 * 401–402; no doll, wound or later straw weapon is drawn here.
 */
export const STRAW_STRAW: Stroke[] = [
  ...kitBody(
    STRAW_BODY,
    [92, 104, 144, 154],
    (x, y) => x > 80 || y < 106 || y > 136,
  ),
  ribs(STRAW_BODY),
  ...skin([
    [72, 96, 7],
    [90, 145, -6],
  ]),
  ...sprout(STRAW_BODY, 5, 'right'),
  {
    d: [
      'M42 108 L16 87 L12 81 M45 115 L18 101 L8 98',
      'M48 121 L22 116 L8 116 M46 127 L20 134 L11 140',
      'M43 135 L24 152 L21 162 M42 116 L26 94 L25 86',
      'M45 126 L29 141 L27 154',
    ].join(' '),
    role: 'accent',
  },
  { d: 'M21 104 L25 96 M20 120 L23 110 M22 139 L28 135', role: 'soft' },
  shadowUnder(1),
]

/** Shinobu's fruit: a pear whose lower skin has gone past ripe. */
const RIPE_BODY: Body = { family: 'pear', cy: 116 }

/**
 * The foot caved in and crumbling, crumbs falling into a pit below it.
 * Shinobu decays the ground to escape Kaido's breath in episode 916
 * (chapter 924). Curls stay high, away from the sagging lower edge.
 */
export const RIPE_RIPE: Stroke[] = [
  ...kitBody(RIPE_BODY, [100, 112, 124], (_x, y) => y < 140),
  ...skin([
    [78, 95, 5],
    [74, 119, -5],
  ]),
  ...sprout(RIPE_BODY, -3, 'left'),
  {
    d: [
      `M${point(...onRim(RIPE_BODY, 140, -1))}`,
      'L54 148 L62 146 L68 155 L74 153',
      'M81 157 L90 151 L96 145',
      point(...onRim(RIPE_BODY, 140, 1)),
      'M68 164 L72 161 L75 166 Z M87 167 L90 164 L93 169 Z',
      'M77 174 L80 171 L83 175 Z',
      'M51 184 C65 175 99 175 113 184 C96 189 68 189 51 184 Z',
    ].join(' '),
    role: 'accent',
  },
  { d: 'M62 133 L65 141 L71 139 M86 132 L82 141 L86 146', role: 'soft' },
  { d: 'M65 183 L70 179 M78 185 L83 179 M93 184 L98 180', role: 'ambient' },
]

/** Drake's fruit: a gourd with a plain, stiff reptilian counterweight tail. */
const ALLOSAURUS_BODY: Body = { family: 'gourd', cy: 112 }
const ALLOSAURUS_TAIL: Limb = {
  line: [
    [104, 137],
    [121, 142],
    [132, 133],
    [146, 128],
  ],
  half: (along) => 10 * (1 - along),
  rim: { body: ALLOSAURUS_BODY, way: 1 },
}

/**
 * The bare tail grown from the lower side, held off the ground as a
 * counterweight. Drake's allosaurus is already seen in episode 402
 * (chapter 509), before Law names it at episode 923 (chapter 929).
 * Anatomy only, without later spines or a tail attack.
 */
export const DRAGON_ALLOSAURUS: Stroke[] = [
  ...kitBody(
    ALLOSAURUS_BODY,
    [90, 102, 118],
    (x, y) => x < 80 || y < 126 || y > 149,
  ),
  ...skin([
    [75, 85, 6],
    [76, 140, -6],
  ]),
  ...sprout(ALLOSAURUS_BODY, -4, 'left'),
  { d: limbOutline(ALLOSAURUS_TAIL), role: 'accent' },
  { d: 'M111 143 C123 147 133 139 140 135', role: 'soft' },
  shadowUnder(1),
]

/** Page One's fruit: an oblong in front of the tall spines of a dorsal sail. */
const SPINOSAURUS_BODY: Body = { family: 'oblong', cy: 122 }

/**
 * The dorsal sail grown from the far rim, tall ribs inside a continuous
 * rounded membrane. Page One walks the Flower Capital in beast form in
 * episode 924 (chapters 929–930). No later tail redesign is included.
 */
export const DRAGON_SPINOSAURUS: Stroke[] = [
  ...kitBody(
    SPINOSAURUS_BODY,
    [142, 154],
    (x, y) => x < 80 || y < 82 || y > 136,
  ),
  ...skin([
    [70, 112, 8],
    [85, 148, -6],
  ]),
  ...sprout(SPINOSAURUS_BODY, -7, 'left'),
  {
    d: billow([
      onRim(SPINOSAURUS_BODY, 82, 1),
      [108, 56],
      [117, 38],
      [129, 40],
      [139, 58],
      [143, 82],
      [140, 107],
      [130, 124],
      onRim(SPINOSAURUS_BODY, 136, 1),
    ]),
    role: 'accent',
  },
  {
    d: 'M110 60 L111 103 M119 46 L121 114 M131 53 L130 121 M139 81 L136 125',
    role: 'soft',
  },
  shadowUnder(1),
]

/** Orochi's fruit: a segmented body below eight headless neck loops. */
const OROCHI_BODY: Body = { family: 'segmented', cy: 128 }

/** Four loops on each side, kept above the shoulders and clear of the stalk. */
const OROCHI_LOOPS = [-1, 1]
  .flatMap((way) => {
    return [0, 1, 2, 3].map((at) => {
      const dx = 68 - at * 16
      const top = 26 + at * 9
      const root = 104 + at * 4
      return [
        `M${point(...onRim(OROCHI_BODY, root, way))}`,
        `C${point(80 + way * dx, 82)} ${point(80 + way * (dx + 5), top)} ${point(80 + way * dx, top)}`,
        `C${point(80 + way * (dx - 5), top)} ${point(80 + way * (dx - 8), 82)} ${point(...onRim(OROCHI_BODY, root + 3, way))}`,
      ].join(' ')
    })
  })
  .join(' ')

/**
 * Eight necks looping up from the fruit's rim and back, four each side of
 * the stalk. Orochi attacks the banquet in serpent form in episode 927
 * (chapter 932). Never heads or faces, and no neck is cut from the count.
 */
export const SNAKE_OROCHI: Stroke[] = [
  ...kitBody(OROCHI_BODY, [136, 148, 160], (_x, y) => y < 104 || y > 119),
  ribs(OROCHI_BODY),
  ...skin([
    [72, 128, 7],
    [88, 159, -6],
  ]),
  ...sprout(OROCHI_BODY, 0, 'right'),
  { d: OROCHI_LOOPS, role: 'accent' },
  shadowUnder(1),
]

/** Queen's fruit: a pear, one long neck rising from its near shoulder. */
const BRACHIOSAURUS_BODY: Body = { family: 'pear', cy: 128 }

/**
 * The neck: out of the near shoulder and steeply up and away from the
 * fruit, high above the crown, thick at the root and narrowing.
 */
const BRACHIOSAURUS_NECK: Limb = {
  line: [
    [66, 94],
    [56, 92],
    [46, 82],
    [42, 66],
    [40, 48],
    [36, 30],
    [28, 18],
  ],
  half: (along) => 11 - 4 * along,
  rim: { body: BRACHIOSAURUS_BODY, way: -1 },
}

/**
 * Queen becomes a brachiosaurus in episode 944 (chapter 945). The long neck
 * and nothing else, never the head, and nothing it does later.
 */
export const DRAGON_BRACHIOSAURUS: Stroke[] = [
  ...kitBody(
    BRACHIOSAURUS_BODY,
    [122, 136, 150],
    (x, y) => x > 80 || y < 84 || y > 104,
  ),
  ...skin([
    [88, 116, 7],
    [72, 152, -6],
  ]),
  ...sprout(BRACHIOSAURUS_BODY, 6, 'right'),
  { d: limbOutline(BRACHIOSAURUS_NECK, 24), role: 'accent' },
  shadowUnder(1),
]

/** Toki's fruit: a whole gourd, its far shoulder leaving the moment. */
const TIME_BODY: Body = { family: 'gourd', cy: 121 }

/**
 * The pieces of the far shoulder, from the foot of it up: the stretch of
 * rim each one was, and how far it has drifted up and away from it.
 */
const TIME_PIECES: [number, number, number, number][] = [
  [97, 104, 2, -1],
  [89, 94, 7, -6],
  [84, 87, 15, -14],
]

/** The specks beyond them, the last of the shoulder, further and further. */
const TIME_SPECKS: Point[] = [
  [121, 58],
  [130, 47],
  [141, 36],
  [116, 82],
  [127, 74],
  [140, 66],
]

/**
 * The fruit whole, and its far shoulder going: the skin there comes away
 * in pieces that drift up and off, smaller and further apart, to specks.
 * Toki sends her son and four retainers forward in time in episode 910
 * (chapter 920). Nothing missing below, and no second outline.
 */
export const TIME_TIME: Stroke[] = [
  ...kitBody(TIME_BODY, [114, 132, 146], (x, y) => x < 80 || y < 83 || y > 105),
  ...skin([
    [72, 94, 6],
    [74, 146, -6],
  ]),
  ...sprout(TIME_BODY, -4, 'left'),
  {
    d: [
      ...TIME_PIECES.map(([from, to, dx, dy]) => {
        return polyline(
          [from, (from + to) / 2, to].map((y) => {
            const [x] = onRim(TIME_BODY, y, 1)

            return point(x + dx, y + dy)
          }),
        )
      }),
      ...TIME_SPECKS.map(([x, y]) => speck(x, y)),
    ].join(' '),
    role: 'accent',
  },
  shadowUnder(1),
]

/** Sasaki's fruit: a heart, a bony frill fanned out behind its shoulder. */
const TRICERATOPS_BODY: Body = { family: 'heart', cy: 123 }

/** The frill: a fan round a point on the far shoulder, and its knobs. */
const FRILL = { cx: 108, cy: 86, r: 40, from: -122, to: 38, knobs: 5 }

/** A point of the frill, at an angle in degrees, `r` out from its middle. */
function frillAt(angle: number, r: number): Point {
  const turn = (angle * Math.PI) / 180

  return [FRILL.cx + r * Math.cos(turn), FRILL.cy + r * Math.sin(turn)]
}

/** How far a knob stands proud of the rim, `along` it. */
function knobAt(along: number): number {
  const width = 0.045
  const from = Math.abs(((along * FRILL.knobs) % 1) - 0.5) / FRILL.knobs

  return from < width ? 3.5 * Math.cos((Math.PI / 2) * (from / width)) ** 2 : 0
}

/** The frill's rim, from the shoulder round to the side. */
function frillRim(): string[] {
  const steps = 90
  const points: string[] = []

  for (let at = 0; at <= steps; at += 1) {
    const along = at / steps
    const angle = FRILL.from + (FRILL.to - FRILL.from) * along

    const [x, y] = frillAt(angle, FRILL.r + knobAt(along))

    points.push(point(x, y))
  }

  return points
}

/**
 * A solid bony frill, fanned out behind the far shoulder and off to one
 * side, so the fruit is a body with a plate behind it and never a head in
 * a ruff; a few low knobs on its rim. Sasaki turns into a triceratops in
 * episode 1012 (chapter 998). No horns, and none of the later spinning.
 */
export const DRAGON_TRICERATOPS: Stroke[] = [
  ...kitBody(
    TRICERATOPS_BODY,
    [137, 149],
    (x, y) => x < 80 || y < 80 || y > 116,
  ),
  ...skin([
    [66, 108, 8],
    [78, 144, -6],
  ]),
  ...sprout(TRICERATOPS_BODY, -5, 'left'),
  {
    d: polyline([
      point(...onRim(TRICERATOPS_BODY, 80, 1)),
      ...frillRim(),
      point(...onRim(TRICERATOPS_BODY, 116, 1)),
    ]),
    role: 'accent',
  },
  {
    d: polyline(
      [-114, -96, -78, -60, -42, -24, -6, 12, 26].map((angle) => {
        return point(...frillAt(angle, FRILL.r - 9))
      }),
    ),
    role: 'soft',
  },
  shadowUnder(1),
]

/** Black Maria's fruit: a round, carried by eight jointed spider legs. */
const SPIDER_BODY: Body = { family: 'round', cy: 112 }

/** Each leg: its root on the rim, its knee and its foot, on the right. */
const SPIDER_LEG_POINTS: [number, number, number, number, number][] = [
  [92, 56, 82, 64, 161],
  [106, 66, 107, 72, 167],
  [120, 68, 134, 61, 175],
  [134, 55, 155, 44, 181],
]

/** Four grounded legs each side, each a thin jointed outline. */
function spiderLegs(): string {
  const legs: string[] = []

  for (const way of [-1, 1]) {
    for (const [root, kneeX, kneeY, footX, footY] of SPIDER_LEG_POINTS) {
      legs.push(
        [
          `M${point(...onRim(SPIDER_BODY, root, way))}`,
          `L${point(80 + way * kneeX, kneeY)}`,
          `L${point(80 + way * footX, footY)}`,
          `L${point(80 + way * (footX - 4), footY)}`,
          `L${point(80 + way * (kneeX - 5), kneeY + 7)}`,
          `L${point(...onRim(SPIDER_BODY, root + 5, way))}`,
        ].join(' '),
      )
    }
  }

  return legs.join(' ')
}

/**
 * Eight stout, bent legs grown from the rim and set on the ground, four
 * each side. Black Maria's spider form appears in episode 1013 (chapter
 * 998). No human torso, spider face, silk trap or later weapon.
 */
export const SPIDER_ROSAMYGALE: Stroke[] = [
  ...kitBody(SPIDER_BODY, [144, 151], (_x, y) => y < 92 || y > 139),
  ...skin([
    [71, 101, 8],
    [88, 136, -6],
  ]),
  ...sprout(SPIDER_BODY, -3, 'left'),
  { d: spiderLegs(), role: 'accent' },
  shadowUnder(1),
]

/** Kaido's fruit: an oblong, a long dragon body flying up out of it. */
const AZURE_DRAGON_BODY: Body = { family: 'oblong', cy: 126 }

/**
 * The dragon's body: out of the far shoulder, up the far side and over in
 * two long waves above the crown, narrowing to the tip of its tail beyond
 * the near shoulder.
 */
const AZURE_DRAGON_LIMB: Limb = {
  line: [
    [114, 100],
    [134, 96],
    [148, 70],
    [140, 46],
    [132, 26],
    [112, 26],
    [100, 40],
    [92, 50],
    [78, 46],
    [66, 32],
    [56, 20],
    [38, 22],
    [28, 40],
  ],
  half: (along) => (along < 0.55 ? 7 : 0.8 + 6.2 * ((1 - along) / 0.45)),
  rim: { body: AZURE_DRAGON_BODY, way: 1 },
}

/**
 * The scales: small arcs in two staggered rows down the body, each bowed
 * towards the tail, as a fish's are.
 */
function dragonScales(): string {
  const scales: string[] = []

  for (let at = 1; at < 26; at += 1) {
    const along = at / 30
    const half = AZURE_DRAGON_LIMB.half(along)
    const row = at % 2 === 0 ? 0.42 : -0.42

    scales.push(
      polyline(
        [
          [0, row - 0.3],
          [0.007, row - 0.15],
          [0.009, row],
          [0.007, row + 0.15],
          [0, row + 0.3],
        ].map(([shift = 0, across = 0]) => {
          return point(
            ...onLimb(AZURE_DRAGON_LIMB, along + shift, half * across),
          )
        }),
      ),
    )
  }

  return scales.join(' ')
}

/**
 * A long scaled body grown from the far shoulder, up and over the fruit in
 * two waves, clear of the crown, to the tip of its tail. Kaido flies to
 * Okobore in his dragon form in episode 912 (chapter 921), before the
 * fruit is named in episode 1014 (chapter 999). The body only, never the
 * head, horns or whiskers.
 */
export const FISH_AZURE_DRAGON: Stroke[] = [
  ...kitBody(
    AZURE_DRAGON_BODY,
    [146, 157],
    (x, y) => x < 80 || y < 93 || y > 107,
  ),
  ...skin([
    [66, 116, 8],
    [82, 150, -6],
  ]),
  ...sprout(AZURE_DRAGON_BODY, -6, 'left'),
  { d: limbOutline(AZURE_DRAGON_LIMB, 48), role: 'accent' },
  { d: dragonScales(), role: 'soft' },
  shadowUnder(1),
]

/** Yamato's fruit: a heart, a big bushy tail sweeping up behind it. */
const MAKAMI_BODY: Body = { family: 'heart', cy: 123 }

/** Where along the tail it is fullest. */
const MAKAMI_PLUME = 0.65

/**
 * The tail: out of the far lower side, out and up past the far shoulder,
 * narrow at the root, fullest past the middle, and tapering to a soft tip
 * turned back over the shoulder.
 */
const MAKAMI_TAIL: Limb = {
  line: [
    [110, 150],
    [126, 156],
    [136, 144],
    [136, 124],
    [136, 104],
    [138, 84],
    [132, 66],
    [126, 52],
    [116, 44],
    [106, 48],
  ],
  half: plume({ root: 4.5, full: 13.5, end: 2, fullest: MAKAMI_PLUME }),
  rim: { body: MAKAMI_BODY, way: 1 },
}

/** The fur notches: steps along the outer edge (1) and the inner one (-1). */
const MAKAMI_FUR = { outer: [16, 20, 24], inner: [21] }

/**
 * A big bushy tail, grown from the far lower side and swept up past the
 * shoulder, soft notches of fur on both edges. Yamato takes his hybrid
 * form in episode 1041 (chapter 1019), and the form grows a large tail,
 * before Kaido names the fruit in episode 1042 (chapter 1020). The tail
 * alone, without the ice, the horns or the breath.
 */
export const DOG_MAKAMI: Stroke[] = [
  ...kitBody(
    MAKAMI_BODY,
    [93, 106, 119],
    (x, y) => x < 80 || y < 145 || y > 155,
  ),
  ...skin([
    [66, 108, 8],
    [77, 145, -6],
  ]),
  ...sprout(MAKAMI_BODY, -5, 'left'),
  {
    d: limbOutline(MAKAMI_TAIL, 30, (step, way) => {
      if (way > 0) {
        return MAKAMI_FUR.outer.includes(step) ? 0.76 : 1
      }

      return MAKAMI_FUR.inner.includes(step) ? 0.8 : 1
    }),
    role: 'accent',
  },
  shadowUnder(1),
]

/** The pear leans under Kujaku's lash, which commands buildings in 1113/1080. */
const WHIP_BODY: Body = { family: 'pear', cy: 118 }

/** The skin leans with the blow; the ground stays level. */
function whipped(x: number, y: number): string {
  return point(x + (WHIP_BODY.cy - y) * 0.16, y)
}

/** A lash drives the pear sideways, as Kujaku commands objects in 1113/1080. */
export const WHIP_WHIP: Stroke[] = [
  ...[
    ...kitBody(WHIP_BODY, [101, 113, 145], (_x, y) => y < 120 || y > 133),
    ...skin([
      [80, 104, 6],
      [72, 144, -6],
      [92, 144, 5],
    ]),
    ...sprout(WHIP_BODY, -4, 'left'),
  ].map((stroke) => tipped(stroke, whipped)),
  {
    d: 'M12 110 C33 104 47 143 81 128 C108 116 128 137 142 115 L149 100 M143 98 L151 91 M149 108 L154 106',
    role: 'accent',
  },
  shadowUnder(1),
]

/** Karasu drives hard soot spikes up from the ground in episode 1117/1083. */
const SOOT_BODY: Body = { family: 'gourd', cy: 112 }

/** The gourd pierced by Obelisusu, shown in episode 1117, chapter 1083. */
export const SOOT_SOOT: Stroke[] = [
  ...kitBody(
    SOOT_BODY,
    [88, 99, 110],
    (x, y) =>
      (y < 135 && (x > 60 || y < 115)) || (y >= 135 && x > 60 && x < 97),
  ),
  ...skin([
    [69, 98, 6],
    [88, 117, -6],
    [70, 128, 5],
  ]),
  ...sprout(SOOT_BODY, 5, 'right'),
  {
    d: 'M33 169 L39 119 L49 72 L59 166 Z M77 172 L96 125 L110 83 L115 169 Z M121 172 L132 131 L143 110 L149 172 Z',
    role: 'accent',
  },
  shadowUnder(1),
]

/** Devon reveals the fox's nine tails in episode 917, chapter 925. No face. */
const FOX_BODY: Body = { family: 'oblong', cy: 110 }

/** Leave room for the fan on the far flank. */
function foxSide(x: number, y: number): string {
  return point(x - 24, y)
}

/** Three low sweeps split into nine tips: Devon’s fox in episode 917/925. */
export const DOG_NINE_TAILED_FOX: Stroke[] = [
  ...[
    ...kitBody(
      FOX_BODY,
      [92, 104, 116],
      (x, y) => x < 80 || y < 129 || y > 151,
    ),
    ...skin([
      [69, 101, 7],
      [78, 127, -6],
      [72, 143, 5],
    ]),
    ...sprout(FOX_BODY, -4, 'left'),
  ].map((stroke) => tipped(stroke, foxSide)),
  {
    d: [
      `M${foxSide(...onRim(FOX_BODY, 129, 1))} C100 116 119 111 136 105 L129 119 L149 113 L138 129 L153 127 C137 146 111 151 82 141`,
      'M82 139 C105 136 122 140 147 145 L134 151 L153 158 L136 161 L149 173 C125 175 101 163 78 148',
      `M78 147 C98 157 118 168 132 178 L116 177 L126 188 L108 182 L112 194 C93 183 80 166 ${foxSide(...onRim(FOX_BODY, 151, 1))}`,
    ].join(' '),
    role: 'accent',
  },
  tipped(shadowUnder(1), foxSide),
]

/** Wolf stands in the sea in 513/595; his fruit is named in 1113/1080. */
const HUGE_BODY: Body = { family: 'oblong', cy: 110 }

/** A tall body, still within the kit's drawing box. */
function gigantic(x: number, y: number): string {
  return point(73 + (x - 80) * 0.85, 108 + (y - HUGE_BODY.cy) * 1.4)
}

/** A giant beside an ordinary fruit, standing in the sea as Wolf does in 513/595. */
export const HUGE_HUGE: Stroke[] = [
  ...[
    ...kitBody(HUGE_BODY, [95, 108, 123]),
    ...skin([
      [68, 91, 7],
      [89, 123, -7],
      [69, 142, 6],
    ]),
    ...sprout(HUGE_BODY, 5, 'right'),
  ].map((stroke) => tipped(stroke, gigantic)),
  {
    d: 'M9 125 C26 117 43 132 63 125 C83 118 101 132 121 125 C133 120 143 122 151 125',
    role: 'accent',
  },
  // A plain fruit, not another power: the comparison makes the scale visible.
  {
    d: `${tipped({ d: outline(HUGE_BODY) }, (x, y) => point(139 + (x - 80) * 0.23, 160 + (y - 110) * 0.3)).d} M139 147 L140 142`,
  },
  shadowUnder(1),
]

/** A pear takes one step sideways: Augur warps in episode 1093/1063–1064. */
const WARP_BODY: Body = { family: 'pear', cy: 114 }

/** Two equal bodies fit side by side; only the arrived one has a shadow. */
function arrived(x: number, y: number): string {
  return point(106 + (x - 80) * 0.65, y)
}

/** The solid fruit and the broken trace of its old position, shown in 1093. */
export const WARP_WARP: Stroke[] = [
  ...[
    ...kitBody(WARP_BODY, [104, 117, 137]),
    ...skin([
      [80, 103, 6],
      [69, 136, -7],
      [93, 144, 5],
    ]),
    ...sprout(WARP_BODY, 4, 'right'),
    shadowUnder(1),
  ].map((stroke) => tipped(stroke, arrived)),
  {
    d: tipped(
      {
        d: outline(
          WARP_BODY,
          (_x, y) =>
            y < 81 || (y > 89 && y < 109) || (y > 122 && y < 140) || y > 150,
        ),
      },
      (x, y) => point(44 + (x - 80) * 0.65, y),
    ).d,
    role: 'accent',
  },
]

/** The flask body, kept whole beneath the drink spat in episode 1121/1087. */
const GABU_BODY: Body = { family: 'gourd', cy: 126 }

/** Shot spits a Gulp of liquor; the ignition in 1121 is deliberately omitted. */
export const GABU_GABU: Stroke[] = [
  ...kitBody(GABU_BODY, [106, 121, 148]),
  ...skin([
    [71, 116, 6],
    [87, 143, -7],
    [70, 157, 5],
  ]),
  ...sprout(GABU_BODY, -5, 'left'),
  {
    d: 'M75 66 C91 44 119 48 122 64 C124 74 122 82 119 88 M79 68 C93 54 109 56 113 66 C116 75 114 82 111 86 M116 95 L112 103 M128 94 L133 100 M132 82 L140 85',
    role: 'accent',
  },
  shadowUnder(1),
]

/** Bluegrass controls a Pacifista she rides in episode 1128, chapter 1094. */
const RIDE_BODY: Body = { family: 'segmented', cy: 106 }

/** A tilted machine shoulder, with a command line from fruit to plate. */
export const RIDE_RIDE: Stroke[] = [
  ...kitBody(RIDE_BODY, [94, 107, 121], (_x, y) => y < 148),
  ribs(RIDE_BODY, 147),
  ...skin([
    [65, 104, 6],
    [95, 128, -6],
  ]),
  ...sprout(RIDE_BODY, 5, 'right'),
  {
    d: 'M22 157 L130 141 L144 154 L27 173 Z M22 157 L27 173 M130 141 L129 156 M35 158 L35 158 M124 147 L124 147',
    role: 'soft',
  },
  { d: `M${point(...onRim(RIDE_BODY, 123, 1))} L132 146`, role: 'accent' },
  shadowUnder(1),
]

/** Bonney shifts between young and grown in episode 1133, chapter 1099. */
const AGE_BODY: Body = { family: 'segmented', cy: 113 }

/** A younger whole fruit inside the same grown body; no decay marks. */
export const AGE_AGE: Stroke[] = [
  ...kitBody(AGE_BODY, [95, 108, 121]),
  ribs(AGE_BODY, 148, [-1]),
  ...skin([
    [65, 101, 6],
    [97, 102, -5],
  ]),
  ...sprout(AGE_BODY, -4, 'left'),
  {
    d: [
      outline(AGE_BODY),
      crown(AGE_BODY).d,
      ...sprout(AGE_BODY, -4, 'left').map(({ d }) => d),
    ]
      .map(
        (d) =>
          tipped({ d }, (x, y) =>
            point(88 + (x - 80) * 0.42, 133 + (y - AGE_BODY.cy) * 0.42),
          ).d,
      )
      .join(' '),
    role: 'accent',
  },
  shadowUnder(1),
]
