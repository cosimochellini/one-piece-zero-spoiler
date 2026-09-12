import { circle, SEA, shadow } from './primitives'
import type { Drawings } from './stroke'

/** The drawings of the records filed in the skypiea stretch of the route. */
export const skypieaArt = {
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
} satisfies Drawings
