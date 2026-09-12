import { circle, dots, cell } from './primitives'
import type { Drawings } from './stroke'

/** The drawings of the records filed in the egghead stretch of the route. */
export const eggheadArt = {
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
} satisfies Drawings
