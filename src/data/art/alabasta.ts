import { circle, ellipse, dot, dots, shadow } from './primitives'
import type { Drawings, Stroke } from './stroke'

/** The drawings of the records filed in the alabasta stretch of the route. */
export const alabastaArt = {
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
} satisfies Drawings
