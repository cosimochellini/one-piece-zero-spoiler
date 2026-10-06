import {
  circle,
  dots,
  ellipse,
  SEA,
  shadow,
  star,
  wave,
} from '~/lib/svg/primitives'

import type { Drawings } from './stroke'

/** The drawings of the records filed in the whole cake stretch of the route. */
export const wholeCakeArt = {
  // The yellow checked kerchief she wears over her braids as a child, off
  // her head and laid flat, the band still knotted. She wears it as she
  // runs through the village with little Linlin at 836.
  'gerd': [
    {
      d: 'M18 100 C40 104 120 104 142 100 C130 120 100 150 80 170 C60 150 30 120 18 100 Z',
    },
    { d: 'M18 100 C36 86 64 84 74 88 M142 100 C124 86 96 84 86 88' },
    {
      d: 'M24 98 C46 96 64 94 74 94 M136 98 C114 96 96 94 86 94',
      role: 'soft',
    },
    { d: 'M30 114 H130 M44 128 H116 M58 142 H102 M70 156 H90', role: 'soft' },
    {
      d: 'M48 104 V134 M64 104 V152 M80 104 V168 M96 104 V152 M112 104 V134',
      role: 'soft',
    },
    { d: 'M110 120 l10 -6 M104 136 l10 -6 M94 152 l8 -5', role: 'ambient' },
    {
      d: 'M72 90 C72 82 88 82 88 90 C88 98 72 98 72 90 Z M74 84 L60 70 L68 66 Z M86 84 L98 68 L92 64 Z',
      role: 'accent',
    },
    shadow(80, 184, 60),
  ],

  // His Viking helmet with its two curved horns, set down beside the dark
  // feather coat he wears, as the old captain comes for the orphans at 836.
  'jarul': [
    {
      d: 'M9 162.6 C10.1 140.2 26.9 127.4 47.1 127.4 C67.3 127.4 84.1 140.2 85.2 162.6 L79.6 156.2 L75.1 165.8 L69.5 157.8 L63.9 167.4 L58.3 159.4 L52.7 169 L47.1 161 L41.5 169 L35.9 159.4 L30.3 167.4 L24.7 157.8 L19.1 165.8 L14.6 156.2 Z',
    },
    {
      d: 'M15.7 151.4 l5.6 -8 M22.5 154.6 l6.7 -11.2 M29.2 156.2 l5.6 -9.6 M58.3 153 l6.7 -11.2 M66.1 154.6 l6.7 -9.6 M72.9 153 l5.6 -8',
      role: 'ambient',
    },
    { d: 'M19.1 145 C35.9 135.4 58.3 135.4 75.1 145', role: 'soft' },
    {
      d: 'M88.2 162 C86.8 136.8 96.6 125.6 112 125.6 C127.4 125.6 137.2 136.8 135.8 162',
    },
    {
      d: 'M88.2 162 C98 167.6 126 167.6 135.8 162 M88.2 156.4 C98 162 126 162 135.8 156.4',
      role: 'soft',
    },
    { d: 'M112 125.6 V157.8', role: 'soft' },
    {
      d: 'M126 132.6 l5.6 -2.8 M128.8 141 l5.6 -2.8 M130.2 149.4 l4.9 -2.1',
      role: 'ambient',
    },
    {
      d: 'M89.6 145.2 C77 145.2 67.2 135.4 68.6 115.8 C70 107.4 75.6 101.8 81.2 99 C77 110.2 78.4 122.8 91 136.8',
      role: 'accent',
    },
    {
      d: 'M134.4 143.8 C145.6 142.4 152.6 132.6 151.2 114.4 C150.5 107.4 147 103.2 142.8 100.4 C145.6 111.6 142.8 124.2 133 135.4',
      role: 'accent',
    },
    {
      d: 'M72.8 127 l5.6 -1.4 M71.4 117.2 l5.6 0 M147 124.2 l-4.9 -1.4 M147.7 115.8 l-4.9 0',
      role: 'soft',
    },
    shadow(80, 180, 66),
  ],

  // An elephant seen from the sea, a walled city riding on its back.
  'zou-arc': [
    { d: 'M18 132 C18 92 46 74 80 74 C114 74 142 92 142 132' },
    { d: 'M40 132 V152 M70 132 V158 M98 132 V158 M126 132 V152' },
    { d: 'M18 118 C4 124 6 148 16 152' },
    { d: 'M22 128 q-10 8 -2 15', role: 'soft' },
    { d: 'M46 74 V58 H118 V74' },
    { d: 'M48 58 v-6 h8 v6 M72 58 v-6 h8 v6 M96 58 v-6 h8 v6', role: 'soft' },
    { d: 'M104 52 V26 H120 V52', role: 'accent' },
    { d: 'M104 26 v-5 h5 v5 M113 26 v-5 h5 v5', role: 'accent' },
    ...SEA,
  ],

  // A mammoth's tusk mounted on the prow of a ship.
  'jack': [
    { d: 'M28 154 L132 108 L140 124 C120 150 70 162 28 154 Z' },
    { d: 'M36 132 L134 112', role: 'soft' },
    { d: 'M44 144 L138 120', role: 'soft' },
    { d: 'M120 106 C104 84 86 72 60 68', role: 'accent' },
    { d: 'M126 114 C112 92 92 78 60 68', role: 'accent' },
    { d: 'M116 108 l9 11' },
    shadow(82, 170, 48),
  ],

  // Warney, the crocodile-boar she rides, side on: the long ridged body,
  // the tusk at the corner of the mouth, the tail curled up, and the saddle
  // strapped round its belly that she offers Luffy a seat on at 754.
  'wanda': [
    {
      d: 'M8 112 C8 104 16 98 30 96 C44 82 66 76 88 76 C112 76 132 84 140 100 C144 108 146 116 146 122 C140 132 126 138 108 138 H54 C40 138 32 132 28 124 C20 124 8 122 8 112 Z M146 122 C152 120 156 110 152 102 C148 96 140 98 142 106',
    },
    {
      d: 'M36 92 l4 -7 l3 5 l4 -7 l3 4 l4 -7 l3 3 M106 78 l4 -7 l4 8 l4 -7 l4 9 l4 -7 l4 10 l4 -6 l4 12',
      role: 'soft',
    },
    { d: 'M10 116 C16 118 22 118 28 116', role: 'soft' },
    { d: 'M34 124 C28 112 30 102 36 96 C36 106 38 116 42 122 Z' },
    { d: 'M54 138 V158 h14 V138 M112 138 V158 h14 V136' },
    { d: 'M72 138 V152 h10 V138 M128 134 V152 h8 V130', role: 'ambient' },
    {
      d: 'M64 78 C62 70 66 64 72 66 C76 74 92 74 98 66 C104 60 112 62 110 74',
      role: 'accent',
    },
    { d: 'M70 80 V102 C76 106 96 106 102 102 V78', role: 'accent' },
    { d: 'M86 106 V138', role: 'soft' },
    { d: 'M82 116 h8 v8 h-8 Z', role: 'soft' },
    shadow(80, 172, 70),
  ],

  // A carrot beside a mitten crackling with electro.
  'carrot': [
    {
      d: 'M56 64 C74 74 86 102 88 142 C72 148 58 140 52 122 C46 100 46 78 56 64 Z',
      role: 'accent',
    },
    { d: 'M58 84 l16 8 M56 102 l22 10 M58 120 l22 8', role: 'soft' },
    {
      d: 'M56 64 C48 44 42 36 34 28 M60 62 C58 42 58 32 56 20 M66 64 C72 46 80 38 88 30',
    },
    { d: 'M100 140 v-28 q0 -14 14 -14 h12 q14 0 14 14 v28z' },
    { d: 'M100 120 q-9 2 -9 11 q0 9 9 9', role: 'soft' },
    { d: 'M100 130 h40', role: 'soft' },
    { d: star(124, 66, 14, 6) },
    shadow(96, 156, 44),
  ],

  // A duke's cloak hung behind a sword held point down.
  'inuarashi': [
    {
      d: 'M40 66 C30 96 30 130 38 156 L80 148 L122 156 C130 130 130 96 120 66',
    },
    { d: 'M40 66 q40 -18 80 0' },
    { d: 'M74 62 V140 L80 152 L86 140 V62 Z', role: 'accent' },
    { d: 'M58 62 H102', role: 'accent' },
    { d: 'M76 62 V38 H84 V62' },
    { d: circle(80, 32, 7) },
    { d: circle(80, 74, 5), role: 'soft' },
    shadow(80, 170, 40),
  ],

  // A jaguar's spotted cloak and a stick of dynamite.
  'pedro': [
    { d: 'M44 58 C32 92 32 130 42 158 L118 158 C128 130 128 92 116 58' },
    { d: 'M44 58 q36 -16 72 0' },
    { d: 'M80 42 q-14 4 -20 16 M80 42 q14 4 20 16' },
    {
      d: 'M56 88 q7 -7 13 0 q-6 8 -13 0z M88 104 q7 -7 13 0 q-6 8 -13 0z M64 128 q7 -7 13 0 q-6 8 -13 0z',
      role: 'accent',
    },
    {
      d: dots([
        [76, 78],
        [102, 84],
        [58, 116],
        [98, 132],
        [80, 146],
      ]),
      role: 'soft',
    },
    { d: 'M122 154 h18 v-38 h-18z' },
    { d: 'M122 126 h18 M122 144 h18', role: 'soft' },
    { d: 'M131 116 c7 -10 -4 -17 3 -25' },
    shadow(80, 172, 48),
  ],

  // His kiseru, the long pipe he is never without, the brass bowl still
  // smoking. He has it from the night he is first found, at 759.
  'nekomamushi': [
    { d: 'M38 150 L14 166 a4 4 0 0 0 5 6 L44 158' },
    { d: 'M32 154 l6 8', role: 'soft' },
    { d: 'M38 150 L104 104 M44 158 L110 112' },
    { d: 'M60 135 l6 8 M82 120 l6 8', role: 'soft' },
    { d: 'M104 104 C112 98 118 90 120 80 M110 112 C120 106 130 96 134 82' },
    { d: 'M104 104 l6 8', role: 'soft' },
    { d: ellipse(127, 79, 8, 3.5), role: 'accent' },
    { d: 'M114 106 l7 -3 M121 101 l7 -4 M127 95 l6 -5', role: 'ambient' },
    {
      d: 'M126 72 C114 62 136 54 124 42 C114 32 130 24 120 12',
      role: 'accent',
    },
    { d: 'M132 66 c10 -6 0 -14 10 -22 c6 -4 4 -10 8 -14', role: 'soft' },
    shadow(74, 182, 54),
  ],

  // A hidden door swung open, a long flight of stairs going down behind it.
  'raizo': [
    { d: 'M46 170 V86 C46 50 114 50 114 86 V170' },
    { d: 'M54 112 H106 M58 128 H102 M62 144 H98 M66 160 H94', role: 'soft' },
    { d: 'M114 88 L140 98 V176 L114 170 Z', role: 'accent' },
    { d: circle(134, 136, 3), role: 'accent' },
    { d: 'M24 170 H46 M114 170 H136' },
  ],

  // An island that is a tiered cake with a castle on top.
  'whole-cake-island-arc': [
    { d: 'M26 140 H134 V118 H26 Z' },
    { d: 'M40 118 H120 V98 H40 Z' },
    { d: 'M54 98 H106 V80 H54 Z' },
    { d: 'M54 80 q6 9 12 0 q6 9 12 0 q6 9 12 0 q6 9 12 0', role: 'accent' },
    { d: 'M68 80 V50 H92 V80' },
    { d: 'M62 50 v-11 h6 v11 M92 50 h6 v-11 h-6' },
    { d: 'M80 50 V28' },
    { d: circle(80, 22, 7), role: 'accent' },
    ...SEA,
  ],

  // The cloak of her raid suit, cut like a moth's wings, hung from the
  // shoulders and the knotted ascot down to the jagged black hem; the far
  // side turns away. She lands on the Sunny in it at 784.
  'vinsmoke-reiju': [
    { d: 'M24 56 C42 44 60 40 80 40 C100 40 118 44 136 56' },
    {
      d: 'M74 40 h12 l-2 7 h-8 Z M76 47 L68 68 L76 64 L78 48 M84 47 L92 66 L85 63 L82 48',
      role: 'soft',
    },
    { d: 'M66 42 C54 24 24 16 8 28 C2 56 22 88 66 94', role: 'accent' },
    {
      d: 'M66 94 C36 98 18 120 24 150 L32 144 L38 154 L46 146 L52 156 L60 148 L66 158 L74 150 L80 160 L86 150 L92 156 C90 132 90 112 94 94',
    },
    { d: 'M94 42 C104 26 128 20 142 30 C146 56 128 86 94 94' },
    {
      d: 'M94 94 C120 98 136 120 132 146 L125 140 L120 150 L113 142 L108 152 L101 144 L92 156',
    },
    {
      d: 'M104 50 l16 -14 M104 62 l30 -18 M106 76 l30 -16 M104 88 l24 -14 M100 110 l22 -8 M100 124 l28 -10 M102 138 l20 -8',
      role: 'ambient',
    },
    {
      d: 'M62 50 C46 44 28 36 16 32 M46 100 C40 118 40 134 44 150 M70 98 C66 116 68 134 66 152',
      role: 'soft',
    },
    shadow(78, 184, 54),
  ],

  // A fedora set over two crossed pistols.
  'vito': [
    { d: 'M50 104 C50 66 110 66 110 104' },
    { d: 'M64 78 q16 -10 32 0', role: 'soft' },
    { d: ellipse(80, 106, 52, 14) },
    { d: 'M52 100 q28 10 56 0', role: 'accent' },
    { d: 'M22 138 h44 v10 h-16 l-6 16 h-10 l2 -16 h-14 Z' },
    { d: 'M138 138 h-44 v10 h16 l6 16 h10 l-2 -16 h14 Z' },
    shadow(80, 176, 50),
  ],

  // A hammerhead mermaid's tail rising out of the sea.
  'praline': [
    {
      d: 'M64 158 C60 128 66 104 82 86 C88 78 92 70 92 62 L100 62 C102 74 98 86 92 96 C80 114 80 136 88 158',
    },
    {
      d: 'M92 62 C84 46 70 36 56 32 C66 44 72 54 76 66 Z M100 62 C108 46 122 38 138 36 C128 46 120 56 114 68 Z',
      role: 'accent',
    },
    {
      d: 'M70 136 q8 -6 14 0 M72 118 q8 -6 14 0 M78 100 q7 -6 12 0',
      role: 'soft',
    },
    ...SEA,
  ],

  // A cake with a ribbon tied across it like a blindfold.
  'charlotte-pudding': [
    { d: 'M40 148 H120 V90 H40 Z' },
    { d: 'M40 90 q40 -26 80 0' },
    { d: 'M40 102 q8 10 16 0 q8 10 16 0 q8 10 16 0 q8 10 16 0', role: 'soft' },
    { d: 'M26 112 H134', role: 'accent' },
    { d: 'M74 106 l-18 -9 v18z M86 106 l18 -9 v18z', role: 'accent' },
    { d: circle(80, 106, 5), role: 'accent' },
    { d: ellipse(80, 152, 52, 8) },
    shadow(80, 170, 50),
  ],

  // A great bicorne hat resting on a heap of sweets.
  'charlotte-linlin': [
    { d: 'M14 160 C30 132 48 118 70 114 C96 110 118 128 134 160 Z' },
    {
      d: `${circle(44, 148, 7)} ${circle(66, 140, 6)} ${circle(92, 142, 7)} ${circle(112, 152, 6)}`,
      role: 'soft',
    },
    { d: 'M52 130 l-9 -6 v13z M80 126 l9 -6 v13z', role: 'soft' },
    {
      d: 'M22 88 C34 54 60 40 80 40 C100 40 126 54 138 88 C112 100 48 100 22 88 Z',
      role: 'accent',
    },
    { d: 'M26 90 C56 78 104 78 134 90', role: 'accent' },
    { d: 'M80 40 q-7 -14 0 -24 q7 10 0 24' },
    shadow(80, 174, 56),
  ],

  // A candy cane staff, its hook curling over.
  'charlotte-perospero': [
    { d: 'M42 178 V88 C42 56 62 40 84 40 C106 40 122 56 122 84' },
    { d: 'M58 178 V88 C58 64 70 54 84 54 C98 54 106 64 106 84' },
    { d: 'M42 178 H58 M122 84 H106' },
    { d: 'M42 160 l16 -10 M42 136 l16 -10 M42 112 l16 -10', role: 'accent' },
    {
      d: 'M45 90 l13 -13 M62 66 l10 -9 M92 56 l6 12 M108 68 l12 -5',
      role: 'accent',
    },
    shadow(50, 188, 16),
  ],

  // A biscuit shield with a serrated blade behind it.
  'charlotte-cracker': [
    { d: 'M46 52 H114 V110 C114 140 92 156 80 162 C68 156 46 140 46 110 Z' },
    { d: circle(80, 100, 13) },
    {
      d: dots([
        [58, 66],
        [102, 66],
        [58, 124],
        [102, 124],
      ]),
      role: 'soft',
    },
    { d: 'M114 76 a9 9 0 1 0 0 18 a9 9 0 1 0 0 -18', role: 'soft' },
    { d: 'M70 46 L80 22 L90 46 V52 H70 Z', role: 'accent' },
    { d: 'M70 32 l-7 3 l7 3 l-7 3 M90 32 l7 3 l-7 3 l7 3', role: 'accent' },
    { d: 'M74 162 V176 H86 V162' },
    { d: 'M68 176 h24' },
  ],

  // A crooked tree of the Seducing Woods, its branches reaching out like fingers.
  'charlotte-brulee': [
    { d: 'M64 176 C70 150 70 124 60 100 M92 176 C88 150 90 124 100 100' },
    {
      d: 'M60 100 C48 86 40 70 26 64 M60 100 C60 80 66 62 60 40 M100 100 C104 78 96 60 104 40 M100 100 C114 88 124 74 136 70',
    },
    {
      d: 'M26 64 l-6 -8 M26 64 l-8 2 M60 40 l-6 -8 M60 40 l5 -9 M104 40 l-4 -9 M104 40 l7 -7 M136 70 l6 -7 M136 70 l8 2',
      role: 'accent',
    },
    { d: 'M72 132 q6 -6 10 2', role: 'soft' },
    shadow(78, 180, 40),
  ],

  // A cigarette holder laid across a poker chip.
  'stussy': [
    { d: circle(80, 128, 42) },
    { d: circle(80, 128, 31), role: 'soft' },
    {
      d: 'M38 128 h-6 M122 128 h6 M80 86 v-6 M80 170 v6 M50 98 l-4 -4 M110 98 l4 -4 M50 158 l-4 4 M110 158 l4 4',
      role: 'soft',
    },
    { d: 'M24 106 l8 9 l74 -63 l-8 -9 Z', role: 'accent' },
    { d: 'M38 100 l8 9', role: 'accent' },
    { d: 'M106 42 c9 -10 -5 -16 3 -26', role: 'soft' },
    shadow(80, 178, 36),
  ],

  // A newspaper sheet with a quill pen laid over it.
  'morgans': [
    { d: 'M28 78 H132 V150 H28 Z' },
    { d: 'M80 78 V150', role: 'soft' },
    { d: 'M36 88 H124' },
    {
      d: 'M36 104 h36 M36 116 h36 M36 128 h30 M88 104 h36 M88 116 h30 M88 128 h36',
      role: 'soft',
    },
    {
      d: 'M96 62 C112 34 132 22 146 18 C142 34 130 54 112 68 Z',
      role: 'accent',
    },
    { d: 'M96 62 L84 76', role: 'accent' },
    { d: 'M140 26 C124 40 110 54 94 66', role: 'soft' },
    shadow(80, 164, 52),
  ],

  // A lance and a crown banded with plain stripes.
  'vinsmoke-judge': [
    { d: 'M28 172 L112 46' },
    { d: 'M112 46 L126 24 L134 46 L120 58 Z', role: 'accent' },
    { d: 'M108 52 l14 10' },
    { d: 'M62 150 V118 L76 132 L88 110 L100 132 L114 118 V150 Z' },
    { d: 'M62 142 H114' },
    { d: 'M76 150 v-8 M84 150 v-8 M92 150 v-8 M100 150 v-8', role: 'soft' },
    {
      d: dots([
        [76, 132],
        [88, 118],
        [100, 132],
      ]),
      role: 'soft',
    },
    shadow(88, 164, 42),
  ],

  // A raid suit cape marked with a single chevron.
  'vinsmoke-ichiji': [
    { d: 'M50 46 C34 90 30 134 34 160 L126 160 C130 134 126 90 110 46 Z' },
    { d: 'M50 46 q30 -14 60 0' },
    { d: 'M50 46 L38 22 M110 46 L122 22' },
    {
      d: 'M64 62 C58 100 56 132 58 158 M96 62 C102 100 104 132 102 158',
      role: 'soft',
    },
    { d: 'M64 100 L80 82 L96 100', role: 'accent' },
    { d: circle(80, 62, 6) },
    shadow(80, 172, 50),
  ],

  // A raid suit cape marked with two chevrons and a bolt.
  'vinsmoke-niji': [
    { d: 'M50 46 C34 90 30 134 34 160 L126 160 C130 134 126 90 110 46 Z' },
    { d: 'M50 46 q30 -14 60 0' },
    { d: 'M50 46 L38 22 M110 46 L122 22' },
    { d: 'M62 62 C56 100 54 132 56 158', role: 'soft' },
    { d: 'M60 92 L74 78 L88 92 M60 110 L74 96 L88 110', role: 'accent' },
    { d: 'M112 74 L98 110 h12 l-16 34', role: 'accent' },
    { d: circle(80, 62, 6) },
    shadow(80, 172, 50),
  ],

  // A raid suit cape marked with four bars, and a winch drum.
  'vinsmoke-yonji': [
    { d: 'M44 46 C28 90 24 134 28 160 L110 160 C114 134 110 90 94 46 Z' },
    { d: 'M44 46 q25 -14 50 0' },
    { d: 'M44 46 L32 22 M94 46 L106 22' },
    { d: 'M52 84 v20 M62 84 v20 M72 84 v20 M82 84 v20', role: 'accent' },
    { d: 'M104 132 v14 a13 9 0 0 0 26 0 v-14' },
    { d: ellipse(117, 132, 13, 9) },
    { d: 'M117 155 v14 c-9 0 -9 12 0 12 c7 0 7 -8 2 -10' },
    shadow(74, 172, 48),
  ],

  // A trident with a scarf wrapped high around the shaft.
  'charlotte-katakuri': [
    { d: 'M80 176 V70' },
    { d: 'M80 70 V26' },
    { d: 'M58 70 V46 C58 34 62 28 66 24 M102 70 V46 C102 34 98 28 94 24' },
    { d: 'M56 70 H104' },
    { d: 'M80 26 l-5 9 h10z M66 24 l-6 7 M94 24 l6 7', role: 'soft' },
    {
      d: 'M62 84 q18 10 36 0 q-6 14 0 24 q-18 -8 -36 0 q6 -14 0 -24 Z',
      role: 'accent',
    },
    { d: 'M98 108 c14 10 18 26 12 40', role: 'accent' },
    shadow(80, 182, 18),
  ],

  // A hospital bed with a packed lunch left on the sheet.
  'vinsmoke-sora': [
    { d: 'M24 150 H136 V160 H24 Z' },
    { d: 'M32 160 V176 M128 160 V176' },
    { d: 'M24 150 V76 H40 V150' },
    { d: 'M24 86 H40 M24 104 H40 M24 122 H40 M24 138 H40', role: 'soft' },
    { d: 'M30 150 V128 H130 V150' },
    { d: 'M30 138 q50 -10 100 0', role: 'soft' },
    { d: 'M38 128 q-4 -14 10 -14 h22 q12 0 8 14' },
    { d: 'M84 110 h34 v18 h-34 Z', role: 'accent' },
    { d: 'M84 119 h34 M96 110 v18', role: 'accent' },
    shadow(80, 184, 56),
  ],

  // Her baby son's things: his onesie laid out flat, the little fedora he
  // wears like his father's set beside it, and his pacifier shaped like a
  // cigar. She stands with him on the cliff at 795.
  'charlotte-chiffon': [
    {
      d: 'M25.6 70 L8 79.6 L14.4 94 L25.6 89.2 V122.8 C25.6 130.8 33.6 135.6 43.2 137.2 H59.2 C68.8 135.6 76.8 130.8 76.8 122.8 V89.2 L88 94 L94.4 79.6 L76.8 70 C70.4 76.4 32 76.4 25.6 70 Z',
    },
    { d: 'M43.2 137.2 V142 H59.2 V137.2', role: 'soft' },
    {
      d: 'M25.6 89.2 C24 84.4 24 79.6 25.6 74.8 M76.8 89.2 C78.4 84.4 78.4 79.6 76.8 74.8',
      role: 'soft',
    },
    {
      d: 'M35.2 98.8 C36.8 110 35.2 119.6 38.4 129.2 M67.2 100.4 C65.6 111.6 68.8 121.2 64 130.8',
      role: 'soft',
    },
    { d: 'M30.4 71.6 C33.6 84.4 68.8 84.4 72 71.6', role: 'soft' },
    { d: ellipse(122, 132, 28, 7) },
    { d: 'M104 130 C102 110 108 100 122 102 C136 100 142 110 140 130' },
    { d: 'M114 104 C118 110 128 110 132 104', role: 'soft' },
    { d: 'M105 122 C114 126 130 126 139 122', role: 'soft' },
    { d: 'M132 110 l6 -3 M134 118 l6 -3', role: 'ambient' },
    { d: ellipse(58, 166, 8, 14), role: 'accent' },
    { d: 'M64 160 L80 156 a5 5 0 0 1 2 10 L65 172', role: 'accent' },
    { d: 'M51 158 C40 156 38 176 51 174', role: 'soft' },
    { d: 'M70 158 V169', role: 'soft' },
    shadow(80, 186, 66),
  ],

  // A cloth wrung from both ends, its juice running into a stemmed glass:
  // she wrings a subordinate dry like a cloth and drinks what comes out,
  // at 812.
  'charlotte-smoothie': [
    {
      d: 'M30 36 C50 28 70 50 90 40 C108 32 122 44 132 38 M30 52 C50 60 70 40 90 50 C108 58 122 48 132 54',
    },
    {
      d: 'M48 34 L56 54 M68 42 L76 52 M88 42 L96 54 M106 38 L114 52',
      role: 'soft',
    },
    {
      d: 'M30 36 C22 30 14 34 12 28 M30 52 C22 58 14 56 10 62 M30 36 V52',
      role: 'soft',
    },
    {
      d: 'M132 38 C140 32 148 36 150 30 M132 54 C140 60 148 58 152 64 M132 38 V54',
      role: 'soft',
    },
    { d: 'M80 56 V100 M86 70 v6', role: 'accent' },
    { d: ellipse(80, 94, 30, 7) },
    { d: 'M50 94 C50 126 64 138 80 138 C96 138 110 126 110 94' },
    { d: 'M54 108 C66 114 94 114 106 108', role: 'accent' },
    { d: 'M98 116 l6 -4 M96 126 l6 -6', role: 'ambient' },
    { d: 'M80 138 V164' },
    { d: ellipse(80, 166, 20, 5) },
    shadow(80, 182, 34),
  ],

  // A glowing iron above a sea of steam.
  'charlotte-oven': [
    { d: 'M44 96 L116 96 L124 124 L36 124 Z' },
    { d: 'M60 96 C60 70 100 70 100 96' },
    { d: 'M66 82 H94' },
    { d: 'M36 124 H124', role: 'soft' },
    {
      d: 'M52 88 c-7 -10 4 -17 -3 -27 M80 66 c-7 -10 4 -17 -3 -27 M108 88 c-7 -10 4 -17 -3 -27',
      role: 'accent',
    },
    ...SEA,
  ],

  // A lamp with a curl of smoke rising from the spout.
  'charlotte-daifuku': [
    { d: 'M28 138 q14 -28 42 -28 q28 0 42 28 Z' },
    { d: 'M110 124 l24 -11 l3 7 l-23 12' },
    { d: 'M30 126 c-15 -8 -15 -24 0 -28' },
    { d: 'M66 110 v-8 h8 v8' },
    { d: circle(70, 98, 6) },
    { d: 'M34 138 h72 v10 h-72z' },
    { d: 'M136 112 c11 -14 -6 -23 4 -35 c8 -10 -6 -19 0 -29', role: 'accent' },
    { d: 'M140 46 c-10 -6 -18 4 -12 13', role: 'accent' },
    shadow(70, 158, 46),
  ],

  // A stack of books with a hand coming out of the pages.
  'charlotte-mont-dor': [
    { d: 'M30 148 H126 V162 H30 Z' },
    { d: 'M36 132 H132 V148 H36 Z' },
    { d: 'M28 114 H120 V132 H28 Z' },
    { d: 'M34 155 H122 M40 140 H128 M32 123 H116', role: 'soft' },
    { d: 'M64 114 q16 -10 32 0 v-2 h-32z' },
    { d: 'M66 108 q14 -8 28 0 v8 h-28z', role: 'accent' },
    {
      d: 'M68 104 v-30 M76 102 v-40 M86 102 v-36 M94 106 v-28',
      role: 'accent',
    },
    shadow(80, 172, 50),
  ],

  // A knife slicing a castle wall into cake.
  'streusen': [
    { d: 'M26 76 H128 L134 88 H26 Z', role: 'accent' },
    { d: 'M26 88 H128', role: 'accent' },
    { d: 'M128 76 H152 V88 H134' },
    {
      d: dots([
        [136, 82],
        [146, 82],
      ]),
      role: 'soft',
    },
    { d: 'M32 76 V52 H112 V76' },
    { d: 'M32 52 v-9 h10 v9 M58 52 v-9 h10 v9 M84 52 v-9 h10 v9' },
    { d: 'M22 94 H110 V156 H22 Z' },
    { d: 'M22 112 H110 M22 132 H110', role: 'soft' },
    shadow(66, 168, 48),
  ],

  // A nun's veil and a bag of sweets beside it.
  'carmel': [
    {
      d: 'M34 58 C34 34 98 34 98 58 C106 94 108 126 104 148 L28 148 C24 126 26 94 34 58 Z',
    },
    {
      d: 'M48 60 C46 90 48 120 52 148 M84 60 C86 90 84 120 80 148',
      role: 'soft',
    },
    { d: 'M34 60 q32 -12 64 0', role: 'accent' },
    { d: 'M106 170 q-12 -26 6 -36 h20 q16 10 6 36 Z' },
    { d: 'M110 134 q14 -8 26 0', role: 'accent' },
    {
      d: dots([
        [116, 152],
        [128, 158],
        [122, 166],
      ]),
      role: 'soft',
    },
    shadow(66, 160, 40),
  ],

  // A cracked bubble helmet with a plaster on the collar.
  'donquixote-mjosgard': [
    { d: circle(80, 88, 46) },
    { d: 'M52 62 q12 -12 26 -14', role: 'soft' },
    { d: 'M46 66 L70 88 L54 98 L78 124', role: 'accent' },
    { d: 'M70 88 L98 72', role: 'accent' },
    { d: 'M54 128 q26 14 52 0 v12 q-26 14 -52 0 Z' },
    { d: 'M96 136 l22 -10 l6 13 l-22 10 Z' },
    { d: 'M104 132 l6 13 M114 128 l6 13', role: 'soft' },
    shadow(80, 160, 40),
  ],

  // A round council table ringed with empty thrones, under a banner.
  'reverie': [
    { d: ellipse(80, 132, 54, 18) },
    { d: 'M26 132 v8 a54 18 0 0 0 108 0 v-8' },
    { d: 'M32 116 v-22 h14 v22 M114 116 v-22 h14 v22' },
    { d: 'M60 110 v-26 h14 v26 M86 110 v-26 h14 v26' },
    { d: 'M80 22 V44' },
    { d: 'M50 44 H110 V74 L80 64 L50 74 Z', role: 'accent' },
    shadow(80, 160, 52),
  ],

  // A flag on a pole and a cigarette burning beside it.
  'belo-betty': [
    { d: 'M46 178 V24' },
    {
      d: 'M46 28 C72 18 96 38 122 28 L122 72 C96 82 72 62 46 72 Z',
      role: 'accent',
    },
    { d: 'M72 26 v46 M98 36 v46', role: 'soft' },
    { d: circle(46, 20, 6) },
    { d: 'M84 152 l28 -10 l3 9 l-28 10 Z' },
    { d: 'M108 143 l3 9', role: 'soft' },
    { d: 'M118 140 c9 -10 -5 -15 4 -25', role: 'soft' },
    shadow(56, 184, 28),
  ],

  // A giant's trident with a broad ribbon tied to the shaft.
  'morley': [
    { d: 'M80 178 V62' },
    { d: 'M46 62 H114' },
    { d: 'M80 62 V16' },
    { d: 'M48 62 V34 C48 22 54 16 60 12 M112 62 V34 C112 22 106 16 100 12' },
    {
      d: 'M64 92 q16 12 32 0 q-10 18 6 32 q-22 -12 -38 0 q12 -20 0 -32 Z',
      role: 'accent',
    },
    {
      d: 'M58 126 c-12 14 -14 28 -10 40 M104 124 c12 14 14 28 10 40',
      role: 'accent',
    },
    shadow(80, 186, 22),
  ],

  // A crow's feather laid over a gas mask.
  'karasu': [
    {
      d: 'M46 86 C46 66 114 66 114 86 C114 112 102 128 80 136 C58 128 46 112 46 86 Z',
    },
    { d: 'M46 86 L28 78 M114 86 L132 78' },
    { d: 'M28 72 h-8 v12 h8z M132 72 h8 v12 h-8z' },
    { d: 'M64 136 h32 v24 h-32 Z' },
    { d: 'M64 145 h32 M64 153 h32', role: 'soft' },
    { d: 'M46 98 C68 108 92 108 114 98', role: 'soft' },
    { d: 'M132 22 L64 92', role: 'accent' },
    {
      d: 'M126 28 c-14 -2 -22 6 -26 14 c12 2 20 -4 26 -14z M112 42 c-14 -2 -22 6 -26 14 c12 2 20 -4 26 -14z M98 56 c-14 -2 -22 6 -26 14 c12 2 20 -4 26 -14z',
      role: 'accent',
    },
    shadow(80, 170, 42),
  ],

  // A wrench and a pair of goggles with cat ears, on a gadget.
  'lindbergh': [
    { d: 'M30 112 H130 V162 H30 Z' },
    { d: 'M30 126 H130', role: 'soft' },
    { d: `${circle(50, 144, 8)} ${circle(72, 144, 8)}`, role: 'soft' },
    { d: 'M96 136 h22 v16 h-22z' },
    { d: circle(58, 88, 18) },
    { d: circle(102, 88, 18) },
    { d: 'M76 88 h8 M40 88 L22 80 M120 88 L138 80' },
    { d: 'M46 72 l-6 -18 l17 9 M114 72 l6 -18 l-17 9', role: 'accent' },
    { d: 'M24 38 L86 52 L84 60 L22 46 Z' },
    { d: 'M86 48 l12 -8 l9 11 l-11 8 l11 8 l-9 11 l-12 -8 Z' },
  ],

  // A small crown left on an oversized throne.
  'sterry': [
    { d: 'M40 146 V40 H120 V146' },
    { d: 'M40 40 q40 -16 80 0' },
    { d: 'M40 110 H22 V146 M120 110 H138 V146' },
    { d: 'M34 146 H126 V158 H34 Z' },
    { d: 'M40 158 V174 M120 158 V174' },
    { d: 'M52 130 V56 H108 V130', role: 'soft' },
    {
      d: 'M66 142 V124 L74 132 L80 118 L86 132 L94 124 V142 Z',
      role: 'accent',
    },
    { d: 'M66 138 H94', role: 'accent' },
    shadow(80, 182, 50),
  ],

  // An empty throne with weapons laid at its base.
  'im': [
    { d: 'M54 150 V44 H106 V150' },
    { d: 'M54 44 q26 -20 52 0' },
    { d: 'M54 118 H40 V150 M106 118 H120 V150' },
    { d: 'M46 150 H114 V160 H46 Z' },
    { d: 'M64 138 V56 H96 V138', role: 'soft' },
    { d: 'M26 174 L66 134 M134 174 L94 134', role: 'accent' },
    { d: 'M66 134 l-4 -13 l13 4z M94 134 l4 -13 l-13 4z', role: 'accent' },
    shadow(80, 188, 44),
  ],

  // A bull's horns above the clouds.
  'ryokugyu': [
    {
      d: 'M78 76 C56 78 36 68 28 48 C24 36 32 26 42 30 C56 36 62 58 78 62 Z',
      role: 'accent',
    },
    {
      d: 'M82 76 C104 78 124 68 132 48 C136 36 128 26 118 30 C104 36 98 58 82 62 Z',
      role: 'accent',
    },
    { d: 'M72 62 q8 -8 16 0 v18 q-8 8 -16 0 Z' },
    {
      d: 'M24 136 q8 -14 22 -6 q10 -12 24 -2 q12 -4 14 8 Z M86 156 q8 -12 20 -4 q10 -10 22 0 q10 -2 10 8 Z',
      role: 'soft',
    },
    { d: 'M20 172 H140', role: 'ambient', dashed: true },
  ],
  // A sheep's curled horn lying above a sword laid flat.
  'sheepshead': [
    {
      d: 'M36 64 C76 34 128 58 126 102 C124 136 84 144 70 122 C58 102 76 84 92 94 C102 100 98 114 88 114',
    },
    { d: 'M36 64 C46 74 52 80 58 96' },
    {
      d: 'M60 50 l4 12 M86 44 l-2 13 M112 56 l-9 9 M126 84 l-13 2 M118 122 l-10 -6',
      role: 'soft',
    },
    { d: 'M34 154 H122 L136 159 L122 164 H34 Z', role: 'accent' },
    { d: 'M34 144 V174', role: 'accent' },
    { d: 'M34 159 H16' },
    { d: circle(11, 159, 5) },
    shadow(80, 182, 60),
  ],

  // A naginata planted upright in the rubble of a flattened town.
  'edward-weevil': [
    { d: 'M88 48 L78 164' },
    { d: 'M86 48 C82 30 86 16 100 4 C102 20 100 34 94 50 Z', role: 'accent' },
    { d: 'M80 50 L98 52' },
    { d: 'M84 60 L94 61 M83 66 L93 67', role: 'soft' },
    { d: 'M18 172 L32 150 L46 160 L58 144 L72 158' },
    { d: 'M86 158 L100 146 L114 160 L128 148 L142 172' },
    {
      d: 'M30 184 h16 v-10 h-16 z M112 184 h18 v-10 h-18 z M60 180 l10 -8 l8 6',
      role: 'soft',
    },
    shadow(80, 188, 64),
  ],

  // An elephant's leg rising out of the sea into the fog, its toenails at the waterline.
  'zou': [
    {
      d: 'M42 154 C52 126 54 90 46 58 C42 42 44 28 48 14 M118 154 C108 126 106 90 114 58 C118 42 116 28 112 14',
      role: 'accent',
    },
    {
      d: 'M52 154 q7 -10 14 0 M73 154 q7 -10 14 0 M94 154 q7 -10 14 0',
      role: 'accent',
    },
    {
      d: 'M56 128 q24 -6 48 0 M54 100 q26 -6 52 0 M50 72 q30 -6 60 0',
      role: 'soft',
    },
    { d: 'M60 114 q8 -3 14 0 M88 86 q8 -3 14 0', role: 'soft' },
    {
      d: 'M2 44 q20 -8 40 0 M122 38 q18 -8 36 0 M6 80 q16 -6 32 0 M124 88 q16 -6 32 0',
      role: 'ambient',
      dashed: true,
    },
    { d: 'M-4 18 q30 -10 60 0 t60 0 t60 0', role: 'ambient', dashed: true },
    ...SEA,
  ],

  // A pair of round sunglasses resting on a stack of coins.
  'bakkin': [
    { d: 'M44 128 V150 a36 9 0 0 0 72 0 V128' },
    { d: ellipse(80, 128, 36, 9) },
    { d: 'M44 135 a36 9 0 0 0 72 0 M44 142 a36 9 0 0 0 72 0', role: 'soft' },
    { d: 'M118 168 a16 5 0 1 0 32 0 a16 5 0 1 0 -32 0', role: 'soft' },
    { d: `${circle(62, 106, 13)} ${circle(98, 106, 13)}`, role: 'accent' },
    { d: 'M75 104 q5 -6 10 0', role: 'accent' },
    { d: 'M49 102 L34 90 M111 102 L126 90' },
    { d: 'M56 101 l7 -4 M92 101 l7 -4', role: 'soft' },
    shadow(70, 170, 40),
  ],

  // An elephant's trunk raised out of the sea, spraying water that falls back
  // as rain, with a fish tumbling down in it.
  'zunesha': [
    { d: 'M34 160 C34 116 56 80 94 64 C106 58 118 58 124 66' },
    { d: 'M58 160 C60 124 78 96 104 84 C112 80 120 80 124 74' },
    { d: 'M124 66 C130 68 130 74 124 74', role: 'soft' },
    {
      d: 'M44 132 l12 4 M52 110 l12 6 M66 90 l10 8 M84 76 l6 10',
      role: 'soft',
    },
    {
      d: 'M126 64 C130 32 148 22 156 42 M122 62 C114 30 92 20 80 36',
      role: 'accent',
    },
    {
      d: dots([
        [150, 60],
        [156, 78],
        [146, 96],
        [82, 52],
        [76, 70],
        [92, 44],
      ]),
      role: 'accent',
    },
    {
      d: 'M112 118 q14 -10 26 0 q-12 10 -26 0 z M138 118 l8 -6 v12 z',
      role: 'soft',
    },
    ...SEA,
  ],
  // A musketeer's broad hat with a long curling plume, above a rapier laid
  // across the table.
  'shishilian': [
    { d: 'M50 96 C50 66 110 66 110 96' },
    { d: ellipse(80, 98, 58, 12) },
    { d: 'M52 88 H108', role: 'soft' },
    {
      d: 'M104 84 C104 58 126 38 150 36 C146 58 128 76 104 84 Z',
      role: 'accent',
    },
    {
      d: 'M108 78 C118 64 130 52 144 42 M116 70 l-4 -8 M126 60 l-4 -8 M136 50 l-3 -7',
      role: 'soft',
    },
    { d: 'M36 150 L144 126' },
    { d: 'M40 140 C30 146 32 158 44 158', role: 'accent' },
    { d: circle(28, 154, 4) },
    shadow(84, 172, 52),
  ],

  // A three-barrelled gun where a forearm should be, its pull chain hanging
  // down to a ring.
  'gotti': [
    { d: 'M18 78 H42 V136 H18 Z' },
    {
      d: 'M42 84 H122 V96 H42 Z M42 101 H122 V113 H42 Z M42 118 H122 V130 H42 Z',
    },
    {
      d: `${circle(126, 90, 4)} ${circle(126, 107, 4)} ${circle(126, 124, 4)}`,
      role: 'accent',
    },
    { d: 'M60 84 V130 M100 84 V130', role: 'soft' },
    {
      d: `${ellipse(30, 144, 3, 5)} ${ellipse(30, 155, 3, 5)} ${ellipse(30, 166, 3, 5)}`,
      role: 'soft',
    },
    { d: circle(30, 178, 6), role: 'accent' },
    shadow(80, 188, 56),
  ],

  // A castle standing on the top layer of a cake, cream running down the edge below its gate.
  'whole-cake-island': [
    { d: 'M20 150 V132 H140 V150', role: 'ambient' },
    {
      d: 'M20 132 q6 10 12 0 q6 12 12 0 q6 8 12 0 q6 12 12 0 q6 10 12 0 q6 12 12 0 q6 8 12 0 q6 12 12 0 q6 10 12 0 q6 12 12 0',
      role: 'soft',
    },
    { d: 'M52 132 V78 H108 V132' },
    {
      d: 'M52 78 v-6 h8 v6 M68 78 v-6 h8 v6 M84 78 v-6 h8 v6 M100 78 v-6 h8 v6',
      role: 'soft',
    },
    { d: 'M70 132 V110 a10 10 0 0 1 20 0 V132', role: 'accent' },
    { d: 'M30 132 V70 H48 V132 M112 132 V70 H130 V132', role: 'accent' },
    { d: 'M26 70 L39 40 L52 70 M108 70 L121 40 L134 70', role: 'accent' },
    { d: 'M72 72 V46 H88 V72 M68 46 L80 20 L92 46', role: 'accent' },
    {
      d: `${circle(39, 88, 3)} ${circle(121, 88, 3)} ${circle(80, 56, 3)}`,
      role: 'soft',
    },
    shadow(80, 170, 64),
  ],

  // A house whose roof is a slab of chocolate scored into tiles, a smaller one beside it.
  'cacao-island': [
    { d: 'M34 150 V104 H112 V150' },
    { d: 'M24 104 L44 64 H102 L122 104 Z', role: 'accent' },
    { d: 'M29 94 H117 M34 84 H112 M39 74 H107', role: 'accent' },
    { d: 'M56 64 L50 104 M73 64 V104 M90 64 L96 104', role: 'soft' },
    { d: 'M64 150 V124 H82 V150', role: 'soft' },
    { d: 'M44 116 h12 v10 h-12z M92 116 h12 v10 h-12z', role: 'soft' },
    {
      d: 'M116 150 V122 H146 V150 M112 122 L120 108 H142 L150 122 Z',
      role: 'soft',
    },
    { d: 'M116 115 H146 M131 108 V122', role: 'ambient' },
    { d: 'M-4 150 H164', role: 'ambient' },
    { d: wave(168), role: 'ambient', dashed: true },
  ],

  // The hole in a mound of earth he had buried himself in up to the neck,
  // empty once he is pulled out of it at 797, with clods thrown about and
  // a crooked tree of the Seducing Woods behind.
  'pound': [
    { d: 'M0 158 H160', role: 'ambient', dashed: true },
    { d: 'M10 158 C28 126 54 112 80 112 C106 112 132 126 150 158' },
    { d: ellipse(80, 122, 28, 9), role: 'accent' },
    {
      d: 'M60 118 l4 7 M69 115 l4 9 M79 114 l4 10 M89 115 l4 9 M98 118 l3 6',
      role: 'ambient',
    },
    { d: 'M54 128 C62 134 98 134 106 128', role: 'soft' },
    {
      d: 'M30 140 l4 -6 l8 2 l2 6 z M118 136 l6 -5 l7 3 l-1 6 z M46 152 l3 -5 l6 1 l1 4 z M124 152 l4 -4 l6 2 v3 z',
      role: 'soft',
    },
    {
      d: 'M116 116 C120 92 112 70 120 46 C124 34 118 22 110 14 M132 124 C134 100 130 76 136 54 C140 42 148 32 158 28',
    },
    {
      d: 'M122 70 C112 64 100 64 92 56 M134 60 C142 56 148 50 152 42',
      role: 'soft',
    },
    { d: 'M128 84 l-6 6 M130 98 l-6 6 M130 112 l-5 5', role: 'ambient' },
    shadow(80, 178, 58),
  ],

  // A hat with a brim wider than any table, flowers at its band, over a
  // long sword laid out beneath it.
  'amande': [
    { d: ellipse(80, 96, 72, 16) },
    { d: 'M58 92 C58 66 102 66 102 92' },
    { d: 'M60 86 Q80 80 100 86', role: 'soft' },
    {
      d: `${circle(68, 83, 4)} ${circle(80, 81, 4)} ${circle(92, 83, 4)}`,
      role: 'accent',
    },
    { d: 'M24 150 C64 138 110 132 150 130', role: 'accent' },
    { d: 'M24 150 L8 155' },
    { d: 'M22 143 L27 157' },
    shadow(80, 172, 62),
  ],
  // His beard, cream heaped round his chin and running down in strands to
  // drip off the hem, a small bow tie on it, the far side turning away. He
  // gives the alarm at 806.
  'charlotte-opera': [
    {
      d: 'M30 112 C20 94 30 74 46 76 C50 62 64 58 72 66 C70 76 74 84 80 84 C86 84 90 76 88 66 C96 58 110 62 114 76 C130 74 140 94 130 124 V150 a5 5 0 0 1 -10 0 V128 L106 130 V164 a5 5 0 0 1 -10 0 V132 L78 132 V156 a5 5 0 0 1 -10 0 V130 L56 128 V146 a5 5 0 0 1 -10 0 V126 C36 124 30 120 30 112 Z',
    },
    {
      d: 'M40 102 C44 110 42 118 46 126 M54 108 C58 116 56 122 60 130',
      role: 'soft',
    },
    {
      d: 'M86 112 C90 118 86 124 90 132 M102 110 C104 116 100 122 104 130',
      role: 'soft',
    },
    { d: 'M114 78 C120 94 122 110 120 126', role: 'soft' },
    { d: 'M126 88 l6 -4 M126 100 l8 -5 M126 112 l8 -5', role: 'ambient' },
    { d: 'M101 175 c-4 6 -2 10 2 10 c4 0 6 -4 2 -10 l-2 -4 z', role: 'soft' },
    { d: 'M80 100 L64 92 L66 110 Z M80 100 L94 94 L92 108 Z', role: 'accent' },
    { d: 'M77 97 h6 v7 h-6 Z', role: 'accent' },
    shadow(80, 188, 50),
  ],

  // A footed bowl of stewed fruit, syrup running over the rim.
  'charlotte-compote': [
    { d: 'M34 108 C38 140 58 152 80 152 C102 152 122 140 126 108 Z' },
    { d: 'M68 152 L62 166 H98 L92 152' },
    {
      d: [circle(58, 100, 10), circle(80, 96, 12), circle(103, 100, 10)].join(
        ' ',
      ),
      role: 'accent',
    },
    { d: 'M80 84 q2 -8 9 -11 q8 -1 10 5 q-9 4 -19 6', role: 'soft' },
    { d: 'M40 116 q3 8 0 13 M118 118 q-2 6 1 10', role: 'soft' },
    shadow(80, 176, 44),
  ],

  // A bicorne hat with a tornado twisting up out of its crown.
  'charlotte-nusstorte': [
    {
      d: 'M14 106 C40 140 120 140 146 106 C120 118 104 96 80 96 C56 96 40 118 14 106 Z',
    },
    { d: 'M40 118 C62 126 98 126 120 118', role: 'soft' },
    { d: circle(80, 108, 5), role: 'accent' },
    {
      d: 'M40 22 C58 50 72 70 78 94 M124 22 C106 50 90 70 84 94',
      role: 'accent',
    },
    {
      d: 'M40 22 C62 32 102 32 124 22 M50 40 C68 48 96 48 114 40 M60 58 C72 64 90 64 102 58 M70 76 C76 80 86 80 92 76',
      role: 'soft',
    },
    shadow(80, 150, 58),
  ],

  // A long blowgun, a dart flying from its mouth and a bubble of gum.
  'charlotte-flampe': [
    { d: 'M18 150 L110 70 M25 157 L117 77 M18 150 L25 157 M110 70 L117 77' },
    { d: 'M34 136 l7 7', role: 'soft' },
    { d: 'M128 60 L150 40 M150 40 l-9 1 M150 40 l-1 9', role: 'accent' },
    { d: 'M120 70 l8 -7 M112 62 l8 -7', role: 'soft', dashed: true },
    { d: circle(48, 72, 18), role: 'accent' },
    { d: 'M38 66 q4 -6 11 -5', role: 'soft' },
    shadow(70, 178, 50),
  ],

  // A sheer wall rising out of the sea through the clouds, a palace of domes and spires along its top.
  'mary-geoise': [
    { d: 'M-4 70 H164', role: 'accent' },
    { d: 'M-4 150 H164', role: 'soft' },
    {
      d: 'M18 150 l4 -18 l-5 -16 l6 -20 l-3 -26 M62 150 l-4 -22 l6 -14 l-3 -18 M104 150 l5 -20 l-4 -22 l3 -12 M142 150 l-4 -16 l5 -24 l-3 -20 l2 -20',
      role: 'ambient',
    },
    {
      d: 'M-4 112 q14 -10 28 0 q14 -12 30 0 M92 104 q16 -12 32 0 q14 -10 28 0 q8 -6 16 0',
      role: 'ambient',
      dashed: true,
    },
    { d: 'M44 70 V50 H116 V70', role: 'accent' },
    { d: 'M64 50 a16 16 0 0 1 32 0', role: 'accent' },
    {
      d: 'M80 34 V24 M48 50 V36 l4 -8 l4 8 V50 M104 50 V36 l4 -8 l4 8 V50',
      role: 'accent',
    },
    { d: 'M24 70 V58 h12 V70 M124 70 V58 h12 V70', role: 'soft' },
    { d: 'M72 70 V62 h16 V70', role: 'soft' },
    ...SEA,
  ],
  // A double-headed spear laid across a long crane feather.
  'randolph': [
    { d: 'M30 176 L130 28' },
    { d: 'M130 28 l-2 16 l-9 -6 Z M30 176 l2 -16 l9 6 Z', role: 'accent' },
    { d: 'M72 118 l10 7 M78 110 l10 7', role: 'accent' },
    { d: 'M44 58 C70 70 104 108 118 160 C96 132 62 100 44 58 Z' },
    {
      d: 'M58 74 l-10 8 M70 88 l-12 8 M82 104 l-12 10 M94 122 l-12 10 M104 140 l-10 10',
      role: 'soft',
    },
    shadow(80, 184, 52),
  ],

  // A heaped thundercloud with a lightning bolt dropping out of it.
  'zeus': [
    {
      d: 'M30 96 C14 96 12 72 30 68 C28 46 56 40 64 54 C70 30 108 30 112 56 C132 50 148 70 134 88 C142 104 118 110 110 100 C98 112 74 112 64 102 C52 110 34 108 30 96 Z',
    },
    { d: 'M36 88 C52 96 70 92 80 84 C92 94 112 94 128 82', role: 'soft' },
    { d: 'M86 108 L70 140 H88 L72 180 L112 130 H92 L104 108', role: 'accent' },
    { d: 'M40 124 v10 M52 136 v10 M122 124 v10 M132 138 v10', role: 'ambient' },
  ],

  // A sun with flames licking out of its rim.
  'prometheus': [
    { d: circle(80, 96, 34) },
    { d: circle(80, 96, 24), role: 'soft' },
    {
      d: 'M80 44 q-8 -14 0 -26 q8 12 0 26 M132 96 q14 -8 26 0 q-12 8 -26 0 M80 148 q8 14 0 26 q-8 -12 0 -26 M28 96 q-14 8 -26 0 q12 -8 26 0',
      role: 'accent',
    },
    {
      d: 'M117 59 l12 -12 M117 133 l12 12 M43 133 l-12 12 M43 59 l-12 -12',
      role: 'accent',
    },
    shadow(80, 188, 40),
  ],

  // The pink bicorne Big Mom wears, in three quarters: the trim along its
  // crest, the ruffled fastener on its side, the back panel showing past
  // the front. No skull on it, and no blade. She calls it by name at 816.
  'napoleon': [
    {
      d: 'M6 136 C24 130 32 116 38 98 C48 70 62 58 80 58 C98 58 112 70 122 98 C128 116 136 130 154 136 C130 140 108 134 80 134 C52 134 30 140 6 136 Z',
    },
    {
      d: 'M96 58 C112 58 126 70 134 92 C140 110 146 122 158 128',
      role: 'soft',
    },
    { d: 'M128 80 l7 -3 M134 94 l7 -3 M139 108 l8 -3', role: 'ambient' },
    {
      d: 'M16 132 C30 124 38 112 44 98 C52 78 64 66 80 66 C96 66 108 78 116 98 C122 112 130 124 144 132',
      role: 'accent',
    },
    { d: 'M34 136 C54 146 108 146 128 136', role: 'soft' },
    {
      d: 'M48 138 l4 6 M62 136 l4 8 M76 135 l4 9 M90 135 l4 9 M104 136 l4 8 M116 137 l3 5',
      role: 'ambient',
    },
    {
      d: 'M124 108 A3.1 3.1 0 0 1 122.1 113.1 A3.1 3.1 0 0 1 117.4 115.9 A3.1 3.1 0 0 1 112 114.9 A3.1 3.1 0 0 1 108.5 110.7 A3.1 3.1 0 0 1 108.5 105.3 A3.1 3.1 0 0 1 112 101.1 A3.1 3.1 0 0 1 117.4 100.1 A3.1 3.1 0 0 1 122.1 102.9 A3.1 3.1 0 0 1 124 108',
      role: 'soft',
    },
    shadow(80, 176, 62),
  ],
  // A cigar laid across a stack of coins, a thread of smoke rising from it.
  'lu-feld': [
    { d: ellipse(80, 104, 40, 12) },
    { d: 'M40 104 V140 a40 12 0 0 0 80 0 V104' },
    { d: 'M40 116 a40 12 0 0 0 80 0 M40 128 a40 12 0 0 0 80 0', role: 'soft' },
    {
      d: 'M34 90 L116 74 c7 -1 9 9 2 10 L36 100 c-7 1 -9 -9 -2 -10 Z',
      role: 'accent',
    },
    { d: 'M100 77 l2 10', role: 'accent' },
    { d: 'M30 92 c-8 -10 6 -16 -2 -28 c-6 -8 4 -14 0 -22', role: 'soft' },
    shadow(80, 162, 48),
  ],

  // His fur cape, the fur edge running over both shoulders, one curl of fur
  // on the near shoulder; across it the longsword he draws on little Linlin
  // at 836.
  'jorul': [
    {
      d: 'M64 70 C50 72 38 80 34 94 C24 120 14 146 10 166 C28 168 44 176 60 168 C74 176 86 166 100 174 C116 166 130 176 150 166 C146 146 136 120 126 94 C122 80 110 72 96 70',
    },
    {
      d: 'M34 96 L30.4 88.8 L38 86 L36.8 78.8 L44 80 L44.4 72.2 L52 74 L53.9 66.9 L60 71 L63.3 64.5 L68 70 L71.3 63.5 L76 69 L80 63 L84 69 L88.7 63.5 L92 70 L96.7 64.5 L100 71 L106.1 66.9 L108 74 L115.6 72.2 L116 80 L123.2 78.8 L122 86 L129.6 88.8 L126 96',
      role: 'soft',
    },
    {
      d: 'M60 96 C54 120 48 144 44 168 M100 96 C108 120 112 144 116 172',
      role: 'soft',
    },
    { d: 'M40 92 C34 86 40 78 46 82 C50 86 46 92 42 88', role: 'soft' },
    {
      d: 'M124 110 l8 -6 M128 128 l12 -8 M134 146 l12 -8 M130 162 l14 -10',
      role: 'ambient',
    },
    { d: 'M48 144 L118 70 L128 64 L124 76 L54 150 Z' },
    { d: 'M51 147 L123 70', role: 'soft' },
    { d: 'M36 134 L62 160 M41 130 L67 156', role: 'accent' },
    { d: 'M46 152 L34 164 a4 4 0 0 0 6 6 L52 158', role: 'accent' },
    { d: circle(32, 171, 4) },
    shadow(80, 188, 68),
  ],

  // A Marine coat hung from its shoulders like a cape, the hood let down.
  'gion': [
    { d: 'M80 42 c0 -8 10 -10 10 -3 c0 5 -10 6 -10 11' },
    { d: 'M40 60 L80 44 L120 60', role: 'soft' },
    { d: 'M44 60 C38 92 34 132 30 172 H130 C126 132 122 92 116 60' },
    { d: 'M58 56 C62 76 98 76 102 56', role: 'soft' },
    { d: 'M80 74 V172', role: 'soft' },
    { d: 'M44 60 l-12 6 M116 60 l12 6', role: 'accent' },
    { d: 'M30 172 l2 -10 h96 l2 10', role: 'accent' },
    shadow(80, 186, 54),
  ],

  // A fedora with a checked band, and a lit pipe in front of its brim.
  'tokikake': [
    { d: 'M46 100 C46 70 56 58 80 58 C104 58 114 70 114 100' },
    { d: 'M66 64 Q80 78 94 64', role: 'soft' },
    { d: ellipse(80, 112, 62, 14) },
    { d: 'M47 86 C66 94 94 94 113 86', role: 'accent' },
    { d: 'M58 89 v7 M69 91 v7 M80 92 v7 M91 91 v7 M102 89 v7', role: 'soft' },
    { d: 'M104 150 h18 v12 c0 9 -18 9 -18 0 Z' },
    { d: 'M104 156 L52 170', role: 'accent' },
    { d: 'M114 146 c-6 -6 6 -10 0 -16', role: 'soft' },
    shadow(80, 186, 56),
  ],
} satisfies Drawings
