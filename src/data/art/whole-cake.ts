import { circle, dots, ellipse, SEA, shadow, star } from './primitives'
import type { Drawings } from './stroke'

/** The drawings of the records filed in the whole cake stretch of the route. */
export const wholeCakeArt = {
  // An elephant seen from the sea, a walled city riding on its back.
  'zou': [
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

  // A mink's sabre laid across a crocodile-shaped saddle.
  'wanda': [
    {
      d: 'M124 44 C96 74 62 110 38 148 L48 156 C74 122 108 84 132 54 Z',
      role: 'accent',
    },
    { d: 'M32 142 L50 160' },
    { d: 'M30 150 L16 166' },
    { d: circle(14, 172, 5) },
    { d: 'M58 158 q22 -20 50 -8 q8 14 -4 22 q-28 8 -46 -14 Z' },
    { d: 'M70 144 q8 -14 20 -8', role: 'soft' },
    { d: 'M104 150 l8 -9 l4 11z M118 156 l8 -9 l4 11z' },
    shadow(82, 184, 42),
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

  // A naginata under a full moon.
  'nekomamushi': [
    { d: circle(112, 48, 26) },
    {
      d: dots([
        [104, 40],
        [120, 52],
        [108, 60],
      ]),
      role: 'soft',
    },
    { d: 'M34 170 L96 78' },
    {
      d: 'M96 78 C106 62 120 54 132 54 C120 64 110 78 104 94 Z',
      role: 'accent',
    },
    { d: 'M92 82 l12 9' },
    { d: 'M46 154 l10 7 M54 142 l10 7', role: 'soft' },
    shadow(58, 182, 28),
  ],

  // A ninja scroll half unrolled, a throwing star above it.
  'raizo': [
    { d: ellipse(34, 110, 10, 18) },
    { d: ellipse(126, 110, 10, 18) },
    { d: 'M34 92 H126 M34 128 H126' },
    { d: 'M50 104 h20 M50 114 h34 M90 104 h22 M90 114 h14', role: 'soft' },
    { d: 'M80 128 q2 14 -8 22' },
    { d: star(110, 54, 24, 10), role: 'accent' },
    { d: circle(110, 54, 5), role: 'accent' },
    shadow(80, 152, 46),
  ],

  // An island that is a tiered cake with a castle on top.
  'whole-cake-island': [
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

  // A butterfly-shaped clasp with poison falling from it.
  'vinsmoke-reiju': [
    {
      d: 'M78 92 C58 66 30 62 24 78 C18 94 42 106 78 100 Z M82 92 C102 66 130 62 136 78 C142 94 118 106 82 100 Z',
      role: 'accent',
    },
    {
      d: 'M78 100 C46 106 32 128 42 140 C54 152 72 126 78 108 Z M82 100 C114 106 128 128 118 140 C106 152 88 126 82 108 Z',
      role: 'accent',
    },
    { d: 'M80 62 V146' },
    { d: 'M80 66 c-8 -8 -14 -10 -18 -18 M80 66 c8 -8 14 -10 18 -18' },
    {
      d: 'M56 158 c-7 10 -3 18 4 18 c7 0 11 -8 4 -18 l-4 -6z M80 164 c-7 10 -3 18 4 18 c7 0 11 -8 4 -18 l-4 -6z M104 158 c-7 10 -3 18 4 18 c7 0 11 -8 4 -18 l-4 -6z',
      role: 'soft',
    },
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

  // A comb whose back is shaped like a shark's tail.
  'praline': [
    { d: 'M34 60 H126 V84 H34 Z' },
    { d: 'M34 72 H126', role: 'soft' },
    {
      d: 'M80 60 C72 44 62 34 54 28 C62 42 64 52 64 60 M80 60 C88 44 98 34 106 28 C98 42 96 52 96 60',
      role: 'accent',
    },
    {
      d: 'M40 84 V138 M52 84 V146 M64 84 V150 M76 84 V152 M88 84 V150 M100 84 V146 M112 84 V138 M124 84 V130',
    },
    {
      d: dots([
        [48, 72],
        [80, 72],
        [112, 72],
      ]),
      role: 'soft',
    },
    shadow(80, 164, 46),
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

  // A hand mirror with a crack running across the glass.
  'charlotte-brulee': [
    { d: ellipse(80, 78, 42, 50) },
    { d: ellipse(80, 78, 34, 42), role: 'soft' },
    { d: 'M62 40 L78 74 L64 84 L86 112', role: 'accent' },
    { d: 'M78 74 L102 60 M86 112 l16 -8', role: 'accent' },
    { d: 'M70 126 q-2 30 -4 44 h28 q-2 -14 -4 -44' },
    { d: circle(80, 178, 7) },
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

  // A slice of wedding cake and a baby's rattle.
  'charlotte-chiffon': [
    { d: 'M30 148 L118 148 L74 68 Z', role: 'accent' },
    { d: 'M46 120 H102 M58 96 H90', role: 'soft' },
    { d: circle(74, 60, 8), role: 'accent' },
    { d: ellipse(74, 152, 56, 8) },
    { d: circle(128, 50, 14) },
    { d: 'M128 64 V96' },
    {
      d: dots([
        [122, 46],
        [134, 46],
        [128, 56],
      ]),
      role: 'soft',
    },
    { d: 'M122 68 l-10 -6 v13z M134 68 l10 -6 v13z' },
    shadow(74, 168, 50),
  ],

  // A piece of fruit wrung out over a glass.
  'charlotte-smoothie': [
    {
      d: 'M36 44 C60 24 100 24 124 44 C116 70 100 82 80 82 C60 82 44 70 36 44 Z',
      role: 'accent',
    },
    {
      d: 'M80 82 L52 50 M80 82 L68 38 M80 82 L92 38 M80 82 L108 50',
      role: 'soft',
    },
    {
      d: 'M76 94 c-7 10 -3 17 4 17 c7 0 11 -7 4 -17 l-4 -6z M62 104 c-5 7 -2 12 3 12 c5 0 8 -5 3 -12 l-3 -4z',
      role: 'accent',
    },
    { d: 'M52 128 h56 l-8 46 h-40z' },
    { d: 'M56 150 h48', role: 'soft' },
    shadow(80, 184, 32),
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

  // A bull's horns wreathed in vines, roots hanging under them.
  'aramaki': [
    {
      d: 'M78 76 C56 78 36 68 28 48 C24 36 32 26 42 30 C56 36 62 58 78 62 Z',
      role: 'accent',
    },
    {
      d: 'M82 76 C104 78 124 68 132 48 C136 36 128 26 118 30 C104 36 98 58 82 62 Z',
      role: 'accent',
    },
    { d: 'M72 62 q8 -8 16 0 v18 q-8 8 -16 0 Z' },
    { d: 'M40 44 c9 10 7 21 -2 28 M120 44 c-9 10 -7 21 2 28' },
    {
      d: 'M36 70 c-9 2 -11 11 -4 13 c7 2 11 -7 4 -13z M124 70 c9 2 11 11 4 13 c-7 2 -11 -7 -4 -13z',
      role: 'soft',
    },
    { d: 'M72 82 c-7 24 -15 34 -20 48 M80 82 V132 M88 82 c7 24 15 34 20 48' },
    { d: 'M52 130 l-11 9 M80 132 v11 M108 130 l11 9', role: 'soft' },
    { d: 'M20 158 H140', role: 'ambient', dashed: true },
  ],
} satisfies Drawings
