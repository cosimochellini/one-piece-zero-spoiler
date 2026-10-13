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
import { lobed } from '~/data/art/fruits/shape'
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
 * The last twenty are drawn as fruit + power (#461), on the bodies of
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
 * A stroke of the swim fruit, tipped forward. A fruit path is absolute
 * points, a command letter before the first of each, so it turns a point at
 * a time.
 */
function tipped(stroke: Stroke): Stroke {
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

      turned.push(`${command}${tip(x, Number(tokens[at + 1]))}`)
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
