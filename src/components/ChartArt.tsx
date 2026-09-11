import * as stylex from '@stylexjs/stylex'

import type { ArtId, TintId } from '~/data/types'
import { color, rule, tint } from '~/styles/tokens.stylex'

/**
 * Thirty-five line drawings, one per record, in one file.
 *
 * The rules they all obey: a 160x200 box; a single uniform 2px stroke with
 * round caps and joins, kept at 2px whatever size the card is drawn at
 * (`non-scaling-stroke`); no fills anywhere; one colour per drawing for the
 * main stroke, every other line in the second ink, and a muted dashed line for
 * ground, water and other things that are merely there. Characters are an
 * object that stands for them — a straw hat, three sheathed swords, a violin —
 * never a face, never a logo. Places are the place.
 *
 * Each drawing is a list of strokes rather than JSX so the rules live in one
 * renderer and a new drawing is data, not markup. The strokes are decorative:
 * the waypoint beside them already carries the name, so every drawing is
 * `aria-hidden`.
 */

type Role = 'accent' | 'soft' | 'ambient'

type Stroke = {
  readonly d: string
  readonly role?: Role
  readonly dashed?: boolean
  readonly transform?: string
}

export function ChartArt({
  art,
  tint: hue,
}: {
  readonly art: ArtId
  readonly tint: TintId
}) {
  return (
    <svg aria-hidden="true" viewBox="0 0 160 200" {...stylex.props(styles.svg)}>
      {DRAWINGS[art].map((stroke, index) => (
        <path
          key={index}
          d={stroke.d}
          transform={stroke.transform}
          vectorEffect="non-scaling-stroke"
          {...stylex.props(
            styles.line,
            stroke.role === 'ambient' && styles.ambient,
            stroke.role === 'accent' && styles.accent(TINT_VAR[hue]),
            stroke.dashed === true && styles.dashed,
          )}
        />
      ))}
    </svg>
  )
}

/** `ivory` is the second ink itself: a drawing with no colour of its own. */
const TINT_VAR: Readonly<Record<TintId, string>> = {
  red: tint.red,
  vermilion: tint.vermilion,
  orange: tint.orange,
  ocher: tint.ocher,
  yellow: tint.yellow,
  acid: tint.acid,
  green: tint.green,
  teal: tint.teal,
  cyan: tint.cyan,
  azure: tint.azure,
  blue: tint.blue,
  ice: tint.ice,
  lavender: tint.lavender,
  violet: tint.violet,
  magenta: tint.magenta,
  pink: tint.pink,
  flamingo: tint.flamingo,
  sand: tint.sand,
  wine: tint.wine,
  ivory: color.ink2,
}

// ---------------------------------------------------------------------------
// Primitives. Everything is a path, so a dot is a zero-length line with round
// caps and a circle is two half arcs.

const n = (value: number) => String(Math.round(value * 10) / 10)

const circle = (cx: number, cy: number, r: number) =>
  `M${n(cx - r)} ${n(cy)} a${n(r)} ${n(r)} 0 1 0 ${n(2 * r)} 0 a${n(r)} ${n(r)} 0 1 0 ${n(-2 * r)} 0`

const ellipse = (cx: number, cy: number, rx: number, ry: number) =>
  `M${n(cx - rx)} ${n(cy)} a${n(rx)} ${n(ry)} 0 1 0 ${n(2 * rx)} 0 a${n(rx)} ${n(ry)} 0 1 0 ${n(-2 * rx)} 0`

const dot = (x: number, y: number) => `M${n(x)} ${n(y)} h0.01`

const dots = (points: readonly (readonly [number, number])[]) =>
  points.map(([x, y]) => dot(x, y)).join(' ')

function polygon(cx: number, cy: number, r: number, sides: number) {
  const points = Array.from({ length: sides }, (_, i) => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / sides
    return `${n(cx + r * Math.cos(a))} ${n(cy + r * Math.sin(a))}`
  })
  return `M${points.join(' L')} Z`
}

function star(cx: number, cy: number, outer: number, inner: number) {
  const points = Array.from({ length: 10 }, (_, i) => {
    const r = i % 2 === 0 ? outer : inner
    const a = -Math.PI / 2 + (i * Math.PI) / 5
    return `${n(cx + r * Math.cos(a))} ${n(cy + r * Math.sin(a))}`
  })
  return `M${points.join(' L')} Z`
}

const wave = (y: number) =>
  `M-4 ${n(y)} q10 -6 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0`

/** Three rows of wave low in the box, the sea every place stands in. */
const SEA: readonly Stroke[] = [
  { d: wave(158), role: 'ambient' },
  { d: wave(172), role: 'ambient' },
  { d: wave(186), role: 'ambient' },
]

/** The soft ellipse an object throws on the table it sits on. */
const shadow = (cx: number, cy: number, rx: number): Stroke => ({
  d: `M${n(cx - rx)} ${n(cy)} q${n(rx)} 6 ${n(2 * rx)} 0`,
  role: 'ambient',
  dashed: true,
})

/** A sheathed sword lying at the same angle as its two companions. */
function sheath(dx: number, role: Role): readonly Stroke[] {
  const a = { x: 50 + dx, y: 158 }
  const b = { x: 100 + dx, y: 46 }
  // Perpendicular offset for the sheath's width.
  const o = { x: 4.6, y: 2 }
  const at = (t: number) => ({
    x: a.x + (b.x - a.x) * t,
    y: a.y + (b.y - a.y) * t,
  })
  const guard = at(0.3)
  const wrap1 = at(0.1)
  const wrap2 = at(0.19)
  return [
    { d: `M${n(a.x)} ${n(a.y)} L${n(b.x)} ${n(b.y)}`, role },
    {
      d: `M${n(a.x + o.x)} ${n(a.y + o.y)} L${n(b.x + o.x)} ${n(b.y + o.y)}`,
      role,
    },
    {
      d: `M${n(a.x)} ${n(a.y)} L${n(a.x + o.x)} ${n(a.y + o.y)} M${n(b.x)} ${n(b.y)} L${n(b.x + o.x)} ${n(b.y + o.y)}`,
      role,
    },
    {
      d: `M${n(guard.x - 5)} ${n(guard.y - 2.4)} L${n(guard.x + 9.6)} ${n(guard.y + 4.4)}`,
      role,
    },
    {
      d: `M${n(wrap1.x - 1)} ${n(wrap1.y)} l6.6 2.6 M${n(wrap2.x - 1)} ${n(wrap2.y)} l6.6 2.6`,
      role,
    },
  ]
}

/** A small ghost, the kind that follows an umbrella. */
const ghost = (x: number, y: number, role: Role): readonly Stroke[] => [
  {
    d: `M${n(x)} ${n(y)} c0 -16 10 -22 16 -22 c6 0 16 6 16 22 v12 c-5 -4 -11 -4 -16 0 c-5 -4 -11 -4 -16 0z`,
    role,
  },
  {
    d: dots([
      [x + 11, y - 8],
      [x + 21, y - 8],
    ]),
    role,
  },
]

/** A sake cup, seen from the side. */
const cup = (x: number, role: Role): Stroke => ({
  d: `M${n(x)} 146 h20 l-3 12 h-14z`,
  role,
})

/** A hexagonal cell of the lattice behind the dome. */
const cell = (x: number, y: number) =>
  `M${n(x)} ${n(y)} l10 -6 l10 6 v12 l-10 6 l-10 -6z`

// ---------------------------------------------------------------------------
// The drawings.

const DRAWINGS: Readonly<Record<ArtId, readonly Stroke[]>> = {
  // A straw hat: the brim as one ellipse, the crown as one curve, the band in
  // the captain's red.
  'monkey-d-luffy': [
    { d: ellipse(80, 104, 60, 16) },
    { d: 'M50 100 C50 60 110 60 110 100' },
    { d: 'M55 93 Q80 101 105 93', role: 'accent' },
    { d: 'M56 85 Q80 93 104 85', role: 'accent' },
    shadow(80, 150, 26),
  ],

  // Three swords in their sheaths, the middle one in green.
  'roronoa-zoro': [
    ...sheath(-22, 'soft'),
    ...sheath(0, 'accent'),
    ...sheath(22, 'soft'),
    shadow(80, 176, 40),
  ],

  // Three mandarins on a branch, the fruit in orange.
  nami: [
    { d: 'M34 154 C40 120 70 96 122 70' },
    { d: 'M64 112 q-2 -16 14 -18 q-4 14 -14 18z' },
    { d: 'M100 86 q14 -10 22 2 q-12 6 -22 -2z' },
    { d: circle(56, 126, 13), role: 'accent' },
    { d: circle(90, 106, 13), role: 'accent' },
    { d: circle(120, 90, 13), role: 'accent' },
    {
      d: dots([
        [56, 118],
        [90, 98],
        [120, 82],
      ]),
      role: 'accent',
    },
  ],

  // A slingshot, the band drawn taut around a star-shaped pellet.
  usopp: [
    { d: 'M80 176 V126' },
    { d: 'M80 126 C78 100 62 92 56 70' },
    { d: 'M80 126 C82 100 98 92 104 70' },
    { d: 'M52 68 l8 4 M108 68 l-8 4' },
    { d: 'M74 150 h12 M74 158 h12 M74 166 h12', role: 'ambient' },
    { d: 'M56 70 Q80 116 104 70', role: 'accent' },
    { d: star(80, 98, 9, 4), role: 'accent' },
  ],

  // The ship: hull, deck, one mast, one sail, and the ram's head at the prow.
  'going-merry': [
    { d: 'M22 122 L32 154 Q80 172 128 154 L138 122' },
    { d: 'M22 122 H138' },
    { d: 'M36 140 Q80 154 124 140', role: 'ambient' },
    { d: 'M80 122 V40' },
    { d: 'M52 52 H108' },
    { d: 'M80 40 l16 6 l-16 6' },
    { d: 'M54 54 Q80 46 106 54 L110 104 Q80 114 50 104 Z', role: 'accent' },
    {
      d: 'M22 122 C10 120 6 108 10 98 C14 90 24 92 26 100 C28 106 22 110 20 106',
    },
    { d: 'M10 98 q-8 -4 -4 -12' },
    ...SEA.slice(1),
  ],

  // A chef's knife with a flame off its point.
  sanji: [
    { d: 'M28 170 L54 144 M38 178 L64 152' },
    { d: 'M54 144 L64 152' },
    { d: 'M54 144 L122 76' },
    { d: 'M64 152 C90 140 116 110 130 70' },
    { d: 'M122 76 L130 70' },
    {
      d: 'M108 66 c-14 -16 2 -30 6 -44 c2 12 12 16 12 30 c0 10 -8 16 -18 14z',
      role: 'accent',
    },
    { d: 'M112 58 c-4 -8 2 -12 4 -18 c2 8 6 10 4 18', role: 'accent' },
  ],

  // A top hat with a cross, and antlers coming out from under the brim.
  'tony-tony-chopper': [
    { d: 'M38 116 H122' },
    { d: 'M50 116 V74 H110 V116' },
    { d: 'M50 106 H110', role: 'ambient' },
    { d: 'M80 84 V106 M69 95 H91', role: 'accent' },
    { d: 'M48 112 C34 100 30 84 36 66 M38 84 l-12 -6 M40 70 l-8 -10' },
    { d: 'M112 112 C126 100 130 84 124 66 M122 84 l12 -6 M120 70 l8 -10' },
    shadow(80, 158, 30),
  ],

  // An open book, a flower growing out of its spine.
  'nico-robin': [
    { d: 'M28 156 Q54 146 80 156 Q106 146 132 156' },
    { d: 'M28 104 Q54 94 80 104 Q106 94 132 104' },
    { d: 'M28 104 V156 M132 104 V156 M80 104 V156' },
    {
      d: 'M40 118 q18 -6 32 0 M40 130 q18 -6 32 0 M88 118 q18 -6 32 0 M88 130 q18 -6 32 0',
      role: 'ambient',
    },
    { d: 'M80 104 V64' },
    { d: 'M80 84 q-12 -2 -14 -12' },
    ...[0, 72, 144, 216, 288].map((angle): Stroke => ({
      d: 'M80 64 q-9 -12 0 -22 q9 10 0 22',
      role: 'accent',
      transform: `rotate(${String(angle)} 80 64)`,
    })),
    { d: dot(80, 64), role: 'accent' },
  ],

  // A wrench and a bolt with a star head.
  franky: [
    { d: 'M36 164 L96 104 M44 172 L104 112 M36 164 L44 172' },
    { d: 'M96 104 a20 20 0 1 1 28 -28 l-8 8 a6 6 0 0 0 -8 8 L104 112' },
    { d: star(124, 54, 14, 7), role: 'accent' },
    { d: circle(124, 54, 4), role: 'accent' },
    shadow(70, 182, 30),
  ],

  // A violin, its bow laid across it; the f-holes take the colour.
  brook: [
    {
      d: 'M80 64 c-26 0 -34 20 -24 32 c-10 10 -14 34 -2 46 c12 12 40 12 52 0 c12 -12 8 -36 -2 -46 c10 -12 2 -32 -24 -32z',
    },
    { d: 'M75 64 V26 M85 64 V26' },
    { d: 'M75 26 q5 -10 10 0' },
    { d: 'M70 30 h-6 M90 30 h6 M70 38 h-6 M90 38 h6' },
    { d: 'M78 60 V132 M82 60 V132', role: 'ambient' },
    { d: 'M70 122 h20' },
    { d: 'M68 96 q-6 12 4 22 M92 96 q6 12 -4 22', role: 'accent' },
    { d: 'M26 176 L134 44' },
    { d: 'M30 180 L138 48', role: 'ambient' },
  ],

  // One great wave, the way a print draws it.
  jinbe: [
    {
      d: 'M18 160 C26 110 60 84 88 84 C110 84 118 66 126 46 C124 74 110 90 96 96 C110 92 122 82 132 66 C128 100 100 116 72 122 C50 126 30 142 18 160z',
      role: 'accent',
    },
    { d: 'M96 80 q-8 4 -4 12 M112 66 q-6 4 -2 10', role: 'accent' },
    {
      d: dots([
        [134, 50],
        [120, 40],
        [140, 70],
      ]),
      role: 'accent',
    },
    ...SEA.slice(1),
  ],

  // A sake bottle and three cups: the pledge of brothers.
  shanks: [
    { d: 'M40 152 V96 q0 -8 6 -12 V70 h16 V84 q6 4 6 12 V152z' },
    { d: 'M40 112 h28 M40 132 h28', role: 'ambient' },
    cup(84, 'accent'),
    cup(108, 'accent'),
    cup(132, 'accent'),
    shadow(96, 168, 50),
  ],

  // A cannonball with its fuse lit.
  buggy: [
    { d: circle(76, 118, 34), role: 'accent' },
    { d: 'M56 104 q6 -14 20 -18', role: 'ambient' },
    { d: 'M100 92 C106 72 116 66 130 66' },
    {
      d: 'M136 52 v-8 M136 76 v8 M124 64 h-8 M148 64 h8 M128 56 l-6 -6 M144 56 l6 -6 M128 72 l-6 6 M144 72 l6 6',
      role: 'accent',
    },
    shadow(76, 168, 30),
  ],

  // A great sword with a cross for a hilt.
  'dracule-mihawk': [
    { d: 'M73 44 L73 136 M87 44 L87 136', role: 'accent' },
    { d: 'M73 44 L80 26 L87 44', role: 'accent' },
    { d: 'M80 44 V136', role: 'ambient' },
    { d: 'M40 140 H120 M40 140 q-10 0 -8 10 M120 140 q10 0 8 10' },
    { d: 'M74 140 V172 M86 140 V172' },
    { d: 'M74 148 l12 4 M74 156 l12 4 M74 164 l12 4', role: 'ambient' },
    { d: circle(80, 180, 6) },
  ],

  // A jitte, and the smoke that goes with its owner.
  smoker: [
    { d: 'M52 174 L112 46' },
    { d: 'M112 46 l4 -8' },
    { d: 'M100 72 l18 6' },
    { d: 'M60 160 l8 4 M66 148 l8 4 M72 136 l8 4', role: 'ambient' },
    { d: 'M36 120 C20 106 38 96 30 82 C22 68 44 60 36 44', role: 'accent' },
    { d: 'M52 112 C44 100 58 92 52 78 C46 66 62 58 56 46', role: 'accent' },
    shadow(84, 182, 30),
  ],

  // A running duck with a saddle on its back.
  'nefertari-vivi': [
    { d: ellipse(78, 128, 32, 22) },
    { d: 'M104 116 C116 108 118 90 112 74' },
    { d: circle(110, 66, 10) },
    { d: 'M120 64 l18 4 l-18 4' },
    { d: dot(112, 63) },
    { d: 'M106 56 q4 -8 10 -4' },
    { d: 'M58 112 Q78 100 98 112', role: 'accent' },
    { d: 'M62 122 Q78 130 94 122', role: 'accent' },
    { d: 'M68 150 V172 M88 150 V172 M60 172 h16 M80 172 h16' },
    { d: 'M30 130 h-14 M32 140 h-12', role: 'ambient' },
  ],

  // A golden hook and an hourglass.
  crocodile: [
    {
      d: 'M44 172 V112 C44 84 66 76 80 84 C94 92 92 112 78 116 C70 118 66 112 68 106',
      role: 'accent',
    },
    { d: 'M38 168 h12 M38 160 h12', role: 'accent' },
    { d: 'M92 60 H136 L114 98 L136 136 H92 L114 98 Z' },
    { d: 'M88 60 h52 M88 136 h52' },
    { d: 'M102 70 h24', role: 'ambient', dashed: true },
    { d: 'M104 130 q10 -8 20 0', role: 'ambient' },
  ],

  // A wide-brimmed hat, and a flame standing up out of it.
  'portgas-d-ace': [
    { d: 'M28 122 Q80 104 132 122 Q80 140 28 122z' },
    { d: 'M56 118 C56 84 74 76 80 76 C86 76 104 84 104 118' },
    { d: 'M40 132 Q80 150 120 132', role: 'ambient' },
    {
      d: dots([
        [60, 140],
        [80, 144],
        [100, 140],
      ]),
      role: 'ambient',
    },
    {
      d: 'M80 70 C64 54 76 40 78 22 C82 36 96 40 96 56 C96 66 88 72 80 70z',
      role: 'accent',
    },
    { d: 'M82 60 c-6 -8 0 -14 2 -22 c2 8 8 10 6 18', role: 'accent' },
  ],

  // A bisento taller than the man, and the bottle beside it.
  'edward-newgate': [
    { d: 'M28 178 L118 42' },
    { d: 'M36 166 l8 6 M44 154 l8 6', role: 'ambient' },
    {
      d: 'M118 42 C132 34 142 20 138 4 C136 22 126 32 114 38',
      role: 'accent',
    },
    { d: 'M108 48 l14 10' },
    { d: 'M112 178 V150 q0 -6 4 -8 V130 h10 V142 q4 2 4 8 V178z' },
    shadow(90, 186, 40),
  ],

  // Sunglasses, hung from strings like a puppet.
  'donquixote-doflamingo': [
    {
      d: 'M28 100 H70 q8 0 8 8 V122 q0 8 -8 8 H28 q-8 0 -8 -8 V108 q0 -8 8 -8z',
      role: 'accent',
    },
    {
      d: 'M90 100 H132 q8 0 8 8 V122 q0 8 -8 8 H90 q-8 0 -8 -8 V108 q0 -8 8 -8z',
      role: 'accent',
    },
    { d: 'M78 110 h4', role: 'accent' },
    { d: 'M20 108 l-8 4 M140 108 l8 4' },
    { d: 'M36 100 L62 44 M124 100 L98 44 M56 44 H104' },
    { d: 'M80 44 V36', role: 'ambient' },
  ],

  // A long sword, and the scalpel that goes with the surgeon.
  'trafalgar-law': [
    { d: 'M28 178 L120 38 M36 182 L128 42 M120 38 L128 42' },
    { d: 'M52 142 l12 8' },
    { d: 'M40 160 l8 4 M46 150 l8 4', role: 'ambient' },
    { d: 'M136 160 L100 124', role: 'accent' },
    {
      d: 'M100 124 C90 114 84 108 82 100 C90 104 98 112 104 120z',
      role: 'accent',
    },
  ],

  // A horseshoe magnet, and the bolts it has pulled in.
  'eustass-kid': [
    { d: 'M46 60 V126 a34 34 0 0 0 68 0 V60', role: 'accent' },
    { d: 'M66 60 V126 a14 14 0 0 0 28 0 V60', role: 'accent' },
    { d: 'M46 52 h20 v8 M94 52 h20 v8 M46 52 v8 M94 52 v8' },
    { d: 'M56 44 q24 -12 48 0', role: 'ambient', dashed: true },
    { d: polygon(40, 168, 8, 6) },
    { d: polygon(74, 178, 8, 6) },
    { d: polygon(112, 170, 8, 6) },
  ],

  // A snake, coiled, with its tongue out.
  'boa-hancock': [
    {
      d: 'M40 152 C40 128 56 118 80 118 C104 118 118 108 118 90 C118 70 100 60 82 62 C64 64 56 78 62 90 C66 100 80 100 86 92',
      role: 'accent',
    },
    { d: 'M86 92 C92 84 104 86 106 94 C104 100 94 104 88 98', role: 'accent' },
    { d: dot(98, 92), role: 'accent' },
    { d: 'M106 94 h10 m-3 -3 l3 3 l-3 3', role: 'accent' },
    {
      d: dots([
        [48, 136],
        [60, 126],
        [80, 120],
        [100, 118],
        [114, 100],
      ]),
      role: 'ambient',
    },
  ],

  // An umbrella, and two small ghosts drifting beside it.
  perona: [
    { d: 'M28 104 Q80 44 132 104' },
    { d: 'M28 104 q13 -12 26 0 t26 0 t26 0 t26 0' },
    { d: 'M80 52 L54 100 M80 52 L106 100', role: 'ambient' },
    { d: 'M80 104 V166 q0 12 -12 12 q-8 0 -8 -8' },
    { d: 'M80 52 v-10' },
    ...ghost(28, 158, 'accent'),
    ...ghost(102, 134, 'accent'),
  ],

  // A wall of bricks, some of them see-through.
  bartolomeo: [
    { d: 'M20 56 H140 V168 H20z', role: 'accent' },
    { d: 'M24 64 h36 v20 h-36z M64 64 h36 v20 h-36z M104 64 h32 v20 h-32z' },
    {
      d: 'M24 88 h16 v20 h-16z M44 88 h36 v20 h-36z M84 88 h36 v20 h-36z M124 88 h12 v20 h-12z',
    },
    { d: 'M24 112 h36 v20 h-36z M64 112 h36 v20 h-36z M104 112 h32 v20 h-32z' },
    {
      d: 'M24 136 h16 v20 h-16z M44 136 h36 v20 h-36z M84 136 h36 v20 h-36z M124 136 h12 v20 h-12z',
    },
    { d: 'M68 68 h28 M48 116 h28 M88 140 h28', role: 'ambient', dashed: true },
  ],

  // A studded club, and the chain it broke.
  yamato: [
    { d: 'M44 178 L66 134 M52 182 L74 138' },
    { d: 'M66 134 L84 142 L118 52 L104 42z', role: 'accent' },
    {
      d: dots([
        [84, 108],
        [96, 114],
        [90, 90],
        [102, 96],
        [96, 72],
        [108, 78],
        [102, 56],
      ]),
      role: 'accent',
    },
    { d: circle(48, 180, 6) },
    { d: ellipse(110, 150, 8, 5) },
    { d: ellipse(126, 158, 8, 5) },
    { d: ellipse(142, 172, 8, 5), role: 'ambient' },
    { d: 'M136 150 l6 -6 M132 174 l-6 6', role: 'ambient' },
  ],

  // Four small islands, a dotted course between them, a compass watching.
  'east-blue': [
    { d: 'M22 106 q10 -14 26 -6 q8 6 -2 14 q-14 6 -24 -8z' },
    { d: 'M84 84 q14 -10 26 0 q6 8 -6 14 q-16 4 -20 -14z' },
    { d: 'M112 124 q8 -8 20 -2 q6 6 0 12 q-14 6 -20 -10z' },
    { d: 'M54 136 q6 -8 16 -4 q6 4 0 10 q-12 4 -16 -6z' },
    {
      d: 'M34 110 C60 100 70 90 96 90 S120 110 122 128 S80 140 62 138',
      role: 'ambient',
      dashed: true,
    },
    { d: circle(128, 44, 16) },
    {
      d: 'M128 28 L131 41 L144 44 L131 47 L128 60 L125 47 L112 44 L125 41 Z',
      role: 'accent',
    },
    ...SEA,
  ],

  // Dunes, a palm, and the sun over a desert kingdom.
  alabasta: [
    { d: 'M10 148 C40 112 70 128 96 136 C120 142 140 126 154 116' },
    { d: 'M10 168 C46 150 90 158 154 146' },
    { d: circle(116, 66, 16), role: 'accent' },
    { d: 'M46 148 C42 128 46 110 56 98' },
    {
      d: 'M56 98 q-18 -6 -28 6 M56 98 q-4 -18 8 -26 M56 98 q16 -8 28 2 M56 98 q8 -14 24 -14',
    },
    {
      d: dots([
        [54, 102],
        [60, 104],
      ]),
      role: 'ambient',
    },
    {
      d: 'M20 182 h20 M56 184 h30 M104 182 h36',
      role: 'ambient',
      dashed: true,
    },
  ],

  // An island resting on a cloud, a giant beanstalk climbing to it.
  skypiea: [
    {
      d: 'M30 120 q-14 0 -10 -14 q0 -14 16 -12 q4 -18 24 -14 q10 -12 28 -4 q18 -6 24 12 q16 2 12 16 q6 14 -12 14z',
    },
    { d: 'M46 106 Q80 88 116 106' },
    { d: 'M60 122 v28 M100 122 v24', role: 'ambient', dashed: true },
    {
      d: 'M84 178 C70 164 94 152 84 138 C74 124 96 116 86 104',
      role: 'accent',
    },
    { d: 'M82 150 q-12 -2 -14 -12 M88 130 q12 -2 14 -12', role: 'accent' },
    ...SEA.slice(2),
  ],

  // Huts on stilts over the water, an anchor dropped beside them.
  jaya: [
    { d: 'M24 118 H136' },
    { d: 'M40 118 V166 M72 118 V166 M104 118 V166 M136 118 V160' },
    { d: 'M40 140 L72 166 M72 140 L104 166', role: 'ambient' },
    { d: 'M32 118 V96 H60 V118 M28 96 L46 78 L64 96', role: 'accent' },
    { d: 'M80 118 V102 H104 V118 M76 102 L92 88 L108 102', role: 'accent' },
    {
      d: `${circle(22, 146, 4)} M22 150 V180 M8 172 Q22 190 36 172 M12 156 h20`,
    },
    ...SEA.slice(1),
  ],

  // Arches over the water, a tower behind, a gondola underneath.
  'water-seven': [
    {
      d: 'M12 148 V100 a20 20 0 0 1 40 0 V148 M56 148 V100 a20 20 0 0 1 40 0 V148 M100 148 V100 a20 20 0 0 1 40 0 V148',
    },
    { d: 'M4 148 H156' },
    { d: 'M66 76 h28 v-30 l-6 -8 h-16 l-6 8z M76 32 h8 v-14 h-8z' },
    {
      d: 'M22 122 q6 -4 12 0 t12 0 M66 122 q6 -4 12 0 t12 0 M110 122 q6 -4 12 0 t12 0',
      role: 'accent',
    },
    { d: 'M60 170 q20 8 40 0 M62 170 l-6 -6 M98 170 l6 -6', role: 'accent' },
    ...SEA.slice(2),
  ],

  // A fortress in a crescent bay, gate to the sea.
  marineford: [
    { d: 'M-6 152 C34 100 126 100 166 152' },
    {
      d: 'M28 122 V82 h12 v-10 h12 v10 h12 v-10 h12 v10 h12 v-10 h12 v10 h12 v-10 h12 v10 V122z',
      role: 'accent',
    },
    { d: 'M70 122 V100 a10 10 0 0 1 20 0 V122', role: 'accent' },
    { d: 'M40 68 V46 h14 v22 M106 68 V46 h14 v22 M76 68 V30 h8 v38' },
    ...SEA.slice(1),
  ],

  // A closed country: one mountain, layered cloud, roofs at its foot.
  wano: [
    { d: 'M20 130 L80 34 L140 130', role: 'accent' },
    { d: 'M62 64 q10 8 18 0 q8 8 18 0', role: 'accent' },
    {
      d: 'M34 98 q14 -8 28 0 t28 0 t28 0 M22 114 q14 -8 28 0 t28 0 t28 0 t28 0',
    },
    { d: 'M48 150 l12 -14 h40 l12 14z M62 134 l8 -10 h20 l8 10z' },
    ...SEA.slice(2),
  ],

  // A dome on a platform, a lattice of the future behind it.
  egghead: [
    {
      d: [
        cell(30, 60),
        cell(52, 48),
        cell(74, 36),
        cell(96, 48),
        cell(118, 60),
      ].join(' '),
      role: 'ambient',
    },
    { d: 'M40 134 a40 40 0 0 1 80 0', role: 'accent' },
    { d: 'M52 134 q28 -40 56 0', role: 'ambient', dashed: true },
    { d: 'M24 134 h112 v10 h-112z' },
    { d: 'M80 94 V70' },
    { d: circle(80, 66, 4), role: 'accent' },
  ],

  // The island above, the volcano that warms it below the waterline.
  'egghead-island': [
    { d: 'M14 142 q30 -50 60 -60 q12 -16 22 0 q34 8 50 60' },
    { d: 'M74 84 q6 -12 12 0' },
    { d: 'M-4 142 H164', role: 'ambient' },
    { d: 'M46 184 L80 150 L114 184', role: 'accent' },
    { d: 'M66 172 q7 -5 14 0 t14 0', role: 'accent', dashed: true },
    { d: 'M36 142 v14 h-16 v10 M124 142 v14 h16 v10', role: 'ambient' },
    {
      d: dots([
        [20, 166],
        [140, 166],
      ]),
      role: 'ambient',
    },
  ],
}

const styles = stylex.create({
  svg: {
    display: 'block',
    height: '100%',
    width: '100%',
  },
  line: {
    fill: 'none',
    stroke: color.ink2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: rule.fine,
  },
  ambient: {
    stroke: color.rule2,
  },
  accent: (hue: string) => ({ stroke: hue }),
  dashed: {
    strokeDasharray: '3 6',
  },
})
