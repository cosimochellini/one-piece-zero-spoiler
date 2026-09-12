import { ghost } from './primitives'
import type { Drawings } from './stroke'

/** The drawings of the records filed in the thriller bark stretch of the route. */
export const thrillerBarkArt = {
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
} satisfies Drawings
