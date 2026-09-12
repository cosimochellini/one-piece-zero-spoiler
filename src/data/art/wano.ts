import { circle, ellipse, dots, SEA } from './primitives'
import type { Drawings } from './stroke'

/** The drawings of the records filed in the wano stretch of the route. */
export const wanoArt = {
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
} satisfies Drawings
