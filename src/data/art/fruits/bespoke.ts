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
 *
 * Not seen until Luffy finds it in the Red Hair Pirates' chest in episode 4,
 * so it is drawn from there, in `fruitRedrawn`; before that the fruit is a
 * grown one.
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

/** Points joined into one line, closed when asked. */
function polyline(points: string[], closed = false): string {
  const line = points.map((step, at) => (at === 0 ? `M${step}` : `L${step}`))

  return (closed ? [...line, 'Z'] : line).join(' ')
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
