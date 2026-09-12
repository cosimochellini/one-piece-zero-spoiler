import { circle, star, SEA, shadow } from './primitives'
import type { Drawings } from './stroke'

/** The drawings of the records filed in the water seven stretch of the route. */
export const waterSevenArt = {
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

  // A wrench and a bolt with a star head.
  franky: [
    { d: 'M36 164 L96 104 M44 172 L104 112 M36 164 L44 172' },
    { d: 'M96 104 a20 20 0 1 1 28 -28 l-8 8 a6 6 0 0 0 -8 8 L104 112' },
    { d: star(124, 54, 14, 7), role: 'accent' },
    { d: circle(124, 54, 4), role: 'accent' },
    shadow(70, 182, 30),
  ],
} satisfies Drawings
