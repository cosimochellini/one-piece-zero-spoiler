import { dot, dots, polygon, SEA } from './primitives'
import type { Drawings } from './stroke'

/** The drawings of the records filed in the summit war stretch of the route. */
export const summitWarArt = {
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
} satisfies Drawings
