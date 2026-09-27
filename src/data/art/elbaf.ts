import {
  circle,
  dots,
  ellipse,
  house,
  SEA,
  shadow,
  star,
} from '~/lib/svg/primitives'

import type { Drawings } from './stroke'

/** The drawings of the records filed in the elbaf stretch of the route. */
export const elbafArt = {
  // A longship under a square sail, a row of round shields along its side.
  'elbaf': [
    { d: 'M20 132 Q80 156 140 132 L132 118 H28 Z' },
    {
      d: 'M140 132 C150 118 150 100 138 96 c-8 -2 -10 8 -2 10',
      role: 'accent',
    },
    { d: 'M80 118 V34' },
    { d: 'M50 44 H110 L114 104 H46 Z', role: 'accent' },
    { d: 'M50 64 H110 M48 84 H112', role: 'soft' },
    {
      d: [
        circle(44, 124, 5),
        circle(64, 126, 5),
        circle(84, 126, 5),
        circle(104, 125, 5),
      ].join(' '),
    },
    ...SEA,
  ],

  // A toy castle of stacked blocks, a cat's tail curling out from behind it.
  'iscat': [
    { d: 'M40 160 V110 h80 V160 Z' },
    { d: 'M52 110 V74 h56 V110' },
    { d: 'M52 74 v-8 h10 v8 m8 0 v-8 h12 v8 m8 0 v-8 h10 v8', role: 'soft' },
    { d: 'M72 160 v-22 a8 8 0 0 1 16 0 v22' },
    {
      d: 'M120 140 C146 136 150 104 136 86 c-8 -10 -20 -6 -16 4 c8 2 14 12 10 24',
      role: 'accent',
    },
    shadow(80, 170, 50),
  ],

  // A sun disc hung over a tabletop village, the hand that set it there unseen.
  'road': [
    { d: circle(80, 52, 20), role: 'accent' },
    {
      d: 'M80 22 v-8 M80 82 v8 M50 52 h-8 M110 52 h8 M59 31 l-6 -6 M101 31 l6 -6 M59 73 l-6 6 M101 73 l6 6',
      role: 'accent',
    },
    { d: house(34, 22, 128, 116) },
    { d: house(70, 20, 122, 110) },
    { d: house(104, 22, 130, 118) },
    { d: 'M16 150 H144 V162 H16 Z', role: 'soft' },
  ],

  // A tree taller than the clouds, rooted in an island on the sea.
  'elbaf-island': [
    { d: 'M18 150 C40 130 120 130 142 150' },
    { d: 'M70 138 C72 100 72 70 66 40 M90 138 C88 100 88 70 94 40' },
    {
      d: 'M66 40 C40 36 26 50 30 62 M94 40 C120 36 134 50 130 62 M70 34 C72 18 88 18 90 34',
      role: 'accent',
    },
    {
      d: 'M20 90 q10 -10 22 -2 q10 -8 20 2 M100 88 q10 -10 22 -2 q10 -8 20 2',
      role: 'soft',
    },
    ...SEA,
  ],

  // Two axes crossed over a round shield, a mountain ridge behind them.
  'warland': [
    { d: 'M-4 150 L30 96 L56 124 L88 70 L124 118 L164 84', role: 'ambient' },
    { d: circle(80, 120, 30) },
    { d: 'M40 76 L120 160 M120 76 L40 160' },
    {
      d: 'M40 76 c-12 4 -14 18 -6 26 l14 -14 M120 76 c12 4 14 18 6 26 l-14 -14',
      role: 'accent',
    },
    { d: dots([[80, 120]]), role: 'accent' },
    shadow(80, 178, 40),
  ],

  // A thick root, a broken shackle and its chain still hanging from it.
  'loki': [
    { d: 'M30 20 C40 70 56 110 50 190 M110 20 C100 70 92 110 104 190' },
    { d: 'M50 110 C66 104 82 104 98 110', role: 'soft' },
    { d: ellipse(76, 124, 30, 10), role: 'accent' },
    {
      d: [circle(72, 146, 5), circle(66, 158, 5), circle(62, 170, 5)].join(' '),
      role: 'accent',
    },
    { d: 'M104 118 l10 -6 M106 128 l12 2', role: 'ambient' },
    { d: 'M40 60 q8 6 4 16 M100 70 q-8 6 -4 16', role: 'soft' },
  ],

  // A cauldron over a fire, a ladle as long as an oar across its rim.
  'goldberg': [
    { d: 'M34 90 H126 C126 134 110 150 80 150 C50 150 34 134 34 90 Z' },
    { d: 'M30 90 H130', role: 'soft' },
    { d: 'M112 20 L70 110', role: 'accent' },
    { d: ellipse(64, 116, 12, 7), role: 'accent' },
    {
      d: 'M60 170 q-6 -12 4 -20 M80 172 q-8 -14 4 -22 M100 170 q-6 -12 4 -20',
      role: 'accent',
      dashed: true,
    },
    { d: 'M60 76 q4 -8 0 -16 M84 74 q4 -8 0 -16', role: 'ambient' },
  ],

  // A branch wide enough to carry a village, the dark below it.
  'sun-world': [
    { d: 'M-4 110 C40 100 120 100 164 110 M-4 126 C40 118 120 118 164 126' },
    { d: house(24, 20, 88, 76) },
    { d: house(70, 22, 84, 70) },
    { d: house(116, 20, 88, 76) },
    { d: circle(136, 30, 12), role: 'accent' },
    {
      d: 'M30 130 C34 150 26 170 32 190 M80 126 C84 150 76 172 82 190 M128 130 C124 152 132 170 126 190',
      role: 'ambient',
      dashed: true,
    },
  ],

  // A stack of books, a ribbon marking a page in the top one.
  'ange': [
    { d: 'M30 150 H130 V168 H30 Z' },
    { d: 'M38 132 H122 V150 H38 Z' },
    { d: 'M34 114 H126 V132 H34 Z' },
    { d: 'M34 114 L42 104 H134 L126 114', role: 'soft' },
    { d: 'M96 104 V96 M96 132 V152 l-5 -6 l-5 6 V132', role: 'accent' },
    shadow(80, 178, 54),
  ],

  // A leaf under a magnifying glass, the veins it is there to show.
  'ripley': [
    { d: 'M40 150 C30 110 60 70 110 60 C120 110 90 150 40 150 Z' },
    {
      d: 'M40 150 L100 76 M60 126 l-10 -16 M72 110 l14 4 M80 100 l-8 -18',
      role: 'soft',
    },
    { d: circle(96, 104, 26), role: 'accent' },
    { d: 'M114 122 L140 150', role: 'accent' },
    shadow(80, 172, 50),
  ],

  // The ribs of a hull on the slip, a mallet resting against them.
  'stansen': [
    { d: 'M20 140 H140' },
    {
      d: 'M36 140 C30 110 36 90 48 80 M60 140 C56 104 60 84 68 72 M92 140 C96 104 92 84 84 72 M124 140 C130 110 124 90 112 80',
    },
    { d: 'M48 80 C70 64 90 64 112 80', role: 'soft' },
    { d: 'M120 60 L100 132', role: 'accent' },
    { d: 'M108 48 L134 56 L128 76 L102 68 Z', role: 'accent' },
    shadow(80, 154, 64),
  ],

  // A wooden practice sword leant against a round shield, both too big.
  'colon': [
    { d: circle(64, 116, 36) },
    { d: circle(64, 116, 8), role: 'soft' },
    { d: 'M100 40 L118 160 M110 38 L126 158', role: 'accent' },
    { d: 'M92 64 L134 58', role: 'accent' },
    { d: 'M100 40 L106 30 L110 38', role: 'accent' },
    shadow(80, 170, 56),
  ],

  // An open book as wide as a table, a quill feather lying on its pages.
  'biblo': [
    {
      d: 'M14 130 C40 116 64 118 80 130 C96 118 120 116 146 130 V66 C120 52 96 54 80 66 C64 54 40 52 14 66 Z',
    },
    { d: 'M80 66 V130', role: 'soft' },
    {
      d: 'M26 80 q24 -8 44 0 M26 94 q24 -8 44 0 M92 80 q24 -8 44 0',
      role: 'ambient',
    },
    {
      d: 'M60 150 C80 130 110 100 134 90 C130 110 104 132 72 146 Z',
      role: 'accent',
    },
    { d: 'M60 150 L128 96', role: 'accent' },
    shadow(80, 172, 60),
  ],

  // A drawn bow, its arrow solid enough to throw a shadow.
  'manmayer-gunko': [
    { d: 'M50 30 C100 60 100 140 50 170' },
    { d: 'M50 30 L50 170', role: 'soft' },
    { d: 'M30 100 H140', role: 'accent' },
    { d: 'M140 100 l-12 -8 M140 100 l-12 8', role: 'accent' },
    { d: 'M30 100 l-8 -6 M36 100 l-8 -6 M30 100 l-8 6 M36 100 l-8 6' },
    shadow(80, 184, 50),
  ],

  // An empty throne, a portrait in a heavy frame on the wall behind it.
  'harald': [
    { d: 'M56 16 H104 V70 H56 Z', role: 'accent' },
    { d: 'M62 22 H98 V64 H62 Z', role: 'soft' },
    { d: 'M46 170 V84 H114 V170' },
    { d: 'M40 126 H120 V140 H40 Z' },
    { d: 'M46 84 l6 -8 l6 8 m44 0 l6 -8 l6 8', role: 'accent' },
    shadow(80, 178, 44),
  ],

  // A cross-hilted sword planted point down, a three-leaf clover at the hilt.
  'figarland-shamrock': [
    { d: 'M76 70 V172 L80 180 L84 172 V70' },
    { d: 'M52 70 H108' },
    { d: 'M80 70 V44', role: 'soft' },
    {
      d: [circle(80, 30, 8), circle(70, 42, 8), circle(90, 42, 8)].join(' '),
      role: 'accent',
    },
    shadow(80, 186, 30),
  ],

  // A sword whose guard splits into three prongs, each a hound's muzzle.
  'cerberus': [
    { d: 'M76 84 V172 L80 182 L84 172 V84' },
    { d: 'M80 84 L50 62 M80 84 V56 M80 84 L110 62', role: 'accent' },
    {
      d: 'M50 62 l-6 -4 l8 -4 M80 56 l-4 -6 h8 z M110 62 l6 -4 l-8 -4',
      role: 'accent',
    },
    { d: 'M80 84 V104 M72 104 h16', role: 'soft' },
    shadow(80, 188, 30),
  ],

  // A double-bladed axe standing on a mountain it has bitten into.
  'scopper-gaban': [
    { d: 'M-4 170 L40 110 L60 130 L96 84 L130 128 L164 100' },
    { d: 'M96 84 q-10 -6 -6 -14 M96 84 q10 -4 8 -12', role: 'soft' },
    { d: 'M80 20 V112' },
    { d: 'M80 34 C58 26 46 40 50 58 C60 52 70 52 80 58 Z', role: 'accent' },
    { d: 'M80 34 C102 26 114 40 110 58 C100 52 90 52 80 58 Z', role: 'accent' },
    shadow(80, 186, 60),
  ],

  // A vine of thorns wound tight around a staff, nothing else touching it.
  'shepherd-sommers': [
    { d: 'M80 20 V180' },
    {
      d: 'M80 30 C110 44 50 60 80 74 C110 88 50 104 80 118 C110 132 50 148 80 162',
      role: 'accent',
    },
    {
      d: 'M96 44 l8 -4 M62 60 l-8 -2 M98 88 l8 -2 M62 104 l-8 -4 M98 132 l8 -2 M62 148 l-8 -2',
      role: 'accent',
    },
    { d: 'M66 20 H94', role: 'soft' },
    shadow(80, 186, 30),
  ],

  // A single ridged horn over a bank of cloud, the moon it sleeps under.
  'rimoshifu-killingham': [
    { d: 'M64 140 L80 30 L96 140 Z', role: 'accent' },
    {
      d: 'M68 120 L92 112 M71 98 L89 92 M74 76 L86 72 M77 54 L83 52',
      role: 'soft',
    },
    { d: 'M20 156 q12 -16 28 -6 q14 -14 30 0 q14 -14 30 0 q16 -10 30 6 Z' },
    { d: 'M130 30 a16 16 0 1 0 12 24 a12 12 0 1 1 -12 -24 Z', role: 'ambient' },
    { d: star(34, 44, 6, 2.5), role: 'ambient' },
  ],

  // A warhammer with a lightning bolt breaking out of its head.
  'ragnir': [
    { d: 'M78 90 V180 M88 90 V180' },
    { d: 'M40 50 H126 V94 H40 Z' },
    { d: 'M40 62 H126 M40 82 H126', role: 'soft' },
    { d: 'M100 16 L84 40 H98 L80 64', role: 'accent' },
    { d: 'M72 180 h22', role: 'accent' },
    shadow(83, 190, 20),
  ],

  // A walrus tusk laid across a school bell.
  'kiba': [
    { d: 'M50 150 C50 104 60 80 80 80 C100 80 110 104 110 150 Z' },
    { d: 'M40 150 H120 M80 80 V68', role: 'soft' },
    { d: circle(80, 160, 6) },
    {
      d: 'M24 130 C60 110 110 96 140 60 C120 100 70 128 24 138 Z',
      role: 'accent',
    },
    shadow(80, 176, 44),
  ],

  // A coach’s whistle hung from its cord.
  'wolf-elbaph': [
    {
      d: 'M80 20 C40 40 40 100 60 120 M80 20 C120 40 120 100 100 120',
      role: 'soft',
    },
    { d: 'M52 124 H112 C112 150 96 162 80 162 C62 162 52 148 52 124 Z' },
    { d: 'M112 124 H138 V138 H108', role: 'accent' },
    { d: circle(76, 140, 8), role: 'accent' },
    { d: 'M142 118 l8 -6 M144 132 h10', role: 'ambient' },
  ],

  // A set square and a ruler on a chalkboard, a sum half written above.
  'blade': [
    { d: 'M16 30 H144 V150 H16 Z' },
    {
      d: 'M30 50 h16 m-8 -8 v16 M58 50 h14 M84 46 h12 m-12 8 h12',
      role: 'soft',
    },
    { d: 'M34 136 L34 76 L94 136 Z M44 126 V100 L70 126 Z', role: 'accent' },
    { d: 'M104 70 L130 70 L130 136 L104 136 Z' },
    { d: 'M104 80 h8 M104 90 h12 M104 100 h8 M104 110 h12 M104 120 h8' },
    { d: 'M40 166 h80', role: 'ambient' },
  ],
} satisfies Drawings
