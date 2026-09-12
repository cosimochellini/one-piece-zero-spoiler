import { circle, dots, ellipse, ghost, SEA, shadow } from './primitives'
import type { Drawings } from './stroke'

/** The drawings of the records filed in the thriller bark stretch of the route. */
export const thrillerBarkArt = {
  // A hull the size of an island, a mansion and two dead trees on the deck,
  // the moon hung over all of it.
  'thriller-bark': [
    { d: 'M10 132 L24 152 Q80 164 136 152 L150 132' },
    { d: 'M10 132 H150' },
    { d: 'M56 132 V72 H104 V132' },
    { d: 'M50 72 L80 48 L110 72' },
    { d: 'M66 86 h12 v14 h-12z M82 86 h12 v14 h-12z', role: 'soft' },
    { d: 'M74 132 V112 h12 V132' },
    {
      d: 'M26 132 V94 M26 116 l-12 -14 M26 108 l12 -16 M26 124 l-10 8 M26 100 l-8 -12',
    },
    { d: 'M136 132 V98 M136 118 l12 -13 M136 110 l-11 -14 M136 126 l10 8' },
    { d: circle(122, 30, 20), role: 'accent' },
    ...SEA.slice(1),
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

  // A bridal veil hung over a pair of tusks.
  lola: [
    { d: 'M62 38 C62 26 98 26 98 38' },
    { d: 'M64 40 C42 62 30 96 30 126', role: 'accent' },
    { d: 'M96 40 C118 62 130 96 130 126', role: 'accent' },
    { d: 'M30 126 q12 12 25 0 t25 0 t25 0 t25 0', role: 'accent' },
    {
      d: 'M72 48 C58 78 52 104 52 124 M88 48 C102 78 108 104 108 124',
      role: 'soft',
    },
    { d: 'M64 186 C40 178 22 158 20 136 C34 150 50 166 74 180 Z' },
    { d: 'M96 186 C120 178 138 158 140 136 C126 150 110 166 86 180 Z' },
    { d: 'M60 184 q20 8 40 0' },
    shadow(80, 192, 42),
  ],

  // A pair of scissors, and the shadow lying cut in two beneath them.
  'gecko-moria': [
    { d: 'M18 26 L88 92 L78 102 Z', role: 'accent' },
    { d: 'M142 26 L72 92 L82 102 Z', role: 'accent' },
    { d: circle(80, 100, 4) },
    { d: 'M78 102 C68 116 50 122 40 118' },
    { d: 'M82 102 C92 116 110 122 120 118' },
    { d: ellipse(30, 130, 14, 17) },
    { d: ellipse(130, 130, 14, 17) },
    {
      d: 'M20 168 C34 158 56 156 70 162 L66 180 C46 182 28 178 20 174 Z',
      role: 'ambient',
      dashed: true,
    },
    {
      d: 'M140 168 C126 158 104 156 90 162 L94 180 C114 182 132 178 140 174 Z',
      role: 'ambient',
      dashed: true,
    },
  ],

  // A long coat with nobody in it, and the bazooka out of one sleeve.
  absalom: [
    {
      d: 'M62 40 C46 44 38 58 36 76 L30 160 H128 L122 76 C120 58 112 44 96 40',
    },
    { d: 'M62 40 L80 64 L96 40' },
    { d: 'M80 64 V160', role: 'soft' },
    {
      d: dots([
        [72, 88],
        [72, 108],
        [72, 128],
      ]),
    },
    {
      d: 'M40 78 C34 102 32 128 32 152 M118 78 C124 102 126 128 126 152',
      role: 'soft',
    },
    { d: 'M106 98 H150 V126 H106 Z', role: 'accent' },
    { d: 'M150 92 L158 96 V128 L150 132 Z', role: 'accent' },
    { d: 'M118 98 V86 h10', role: 'accent' },
    shadow(80, 172, 50),
  ],

  // A scalpel laid over a heart that has been sewn back together.
  hogback: [
    {
      d: 'M80 172 C38 142 24 110 32 86 C40 62 72 62 80 90 C88 62 120 62 128 86 C136 110 122 142 80 172 Z',
    },
    { d: 'M50 96 C68 120 92 120 110 100', role: 'soft' },
    {
      d: 'M54 90 l8 12 M62 90 l-8 12 M76 112 l8 12 M84 112 l-8 12 M98 100 l8 12 M106 100 l-8 12',
      role: 'accent',
    },
    { d: 'M10 20 L50 44 L44 54 L4 30 Z' },
    { d: 'M50 44 C64 48 78 54 88 64 L78 74 C70 64 56 56 44 54 Z' },
    { d: 'M16 30 l6 -10 M26 36 l6 -10', role: 'soft' },
    shadow(80, 184, 50),
  ],

  // A stack of serving plates, the top one cracked and a shard on the floor.
  'victoria-cindry': [
    { d: ellipse(80, 158, 48, 12) },
    { d: 'M32 158 q48 12 96 0' },
    { d: ellipse(80, 136, 45, 11) },
    { d: 'M35 136 q45 11 90 0' },
    { d: ellipse(80, 114, 42, 10) },
    { d: 'M38 114 q42 10 84 0' },
    { d: ellipse(80, 92, 39, 10) },
    { d: 'M41 92 q39 10 78 0' },
    { d: ellipse(80, 70, 36, 9), role: 'accent' },
    { d: 'M44 70 q36 9 72 0' },
    { d: 'M48 68 L62 78 L74 64 L88 78 L106 66', role: 'accent' },
    shadow(78, 188, 54),
  ],

  // A katana half drawn, the bare stretch of the blade in its colour.
  ryuma: [
    { d: 'M24 184 L72 92 L83.5 98 L35.5 190 Z' },
    { d: 'M41 152 q6 -6 11 0 q-5 6 -11 0 Z', role: 'soft' },
    { d: 'M72 92 L89.1 62.6 L97.9 67.2 L83.5 98 Z', role: 'accent' },
    { d: 'M77.9 60.2 L106.3 75 L109.1 69.6 L80.7 54.8 Z' },
    { d: 'M89.1 62.6 L108.5 25.4 L117.3 30 L97.9 67.2 Z' },
    { d: 'M105.8 30.6 L114.6 35.2' },
    {
      d: 'M94.3 55.9 L100.5 59.1 M99.1 46.6 L105.3 49.8 M104 37.3 L110.2 40.5',
      role: 'soft',
    },
  ],

  // A giant's helmet, the two horns curving off it.
  oars: [
    { d: 'M36 120 C36 60 124 60 124 120' },
    { d: 'M30 120 H130 V136 H30 Z' },
    { d: 'M74 136 V166 h12 V136' },
    { d: 'M44 124 h22 M94 124 h22', role: 'soft' },
    { d: 'M80 66 V120', role: 'soft' },
    {
      d: dots([
        [38, 128],
        [56, 128],
        [104, 128],
        [122, 128],
      ]),
    },
    {
      d: 'M38 96 C20 84 8 62 14 38 C20 52 30 62 40 68 C36 78 34 88 38 96 Z',
      role: 'accent',
    },
    {
      d: 'M122 96 C140 84 152 62 146 38 C140 52 130 62 120 68 C124 78 126 88 122 96 Z',
      role: 'accent',
    },
    shadow(80, 178, 52),
  ],

  // A captain's cap resting on a closed violin case.
  yorki: [
    {
      d: 'M80 86 c-28 0 -37 22 -26 35 c-11 11 -15 37 -2 50 c13 13 43 13 56 0 c13 -13 9 -39 -2 -50 c11 -13 2 -35 -26 -35z',
    },
    { d: 'M72 86 V64 h16 V86' },
    { d: 'M48 120 h10 M102 120 h10 M48 154 h10 M102 154 h10', role: 'soft' },
    { d: 'M80 96 V166', role: 'soft' },
    { d: 'M40 56 C40 28 120 28 120 56', role: 'accent' },
    { d: 'M34 56 H126 V68 H34 Z', role: 'accent' },
    { d: 'M34 68 C20 72 12 80 16 84 H52', role: 'accent' },
    shadow(80, 186, 48),
  ],
} satisfies Drawings
