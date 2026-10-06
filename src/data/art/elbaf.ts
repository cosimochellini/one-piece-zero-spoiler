import {
  circle,
  dots,
  ellipse,
  house,
  SEA,
  shadow,
  star,
} from '~/lib/svg/primitives'

import type { Drawings, Stroke } from './stroke'

/**
 * One of Scopper Gaban's axes, the haft upright through the origin and the
 * single-edged head at the top, its bit facing right. The drawing crosses
 * two of them, the second mirrored.
 */
const GABAN_AXE: Stroke[] = [
  { d: 'M-3 -78 H3 M-3 -78 V76 M3 -78 V76 M-3 76 Q0 82 3 76' },
  {
    d: 'M5 -72 H-6 V-54 H5 M-6 -70 h-8 v12 h8 M5 -70 L16 -68 Q22 -80 30 -86 M5 -56 L16 -58 Q22 -46 30 -40',
  },
  { d: 'M30 -86 Q44 -63 30 -40', role: 'accent' },
  { d: 'M25 -78 Q35 -63 25 -48', role: 'soft' },
  { d: 'M12 -64 l6 -6 M12 -58 l10 -10 M16 -56 l8 -8', role: 'ambient' },
]

/** The tilt Sommers's sword and Ragnir are both drawn at. */
const TILT = 'rotate(-24 80 100)'

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

  // The foot of the colossal tree he is bound to in the Underworld, two
  // turns of heavy chain wound round its trunk, and the drum-shaped cuff
  // they run down to lying at its foot, every link still whole (1160).
  'loki': [
    { d: 'M30 -4 C34 50 34 104 24 128 C18 140 6 148 -4 150' },
    { d: 'M130 -4 C126 50 126 104 136 128 C142 140 154 148 164 150' },
    {
      d: 'M50 4 C52 18 50 26 52 36 M106 2 C104 18 106 30 104 42 M54 64 C56 72 54 80 56 88',
      role: 'soft',
    },
    {
      d: 'M121 18 l7 -4 M121 30 l7 -4 M121 72 l7 -4 M122 132 l8 -4',
      role: 'ambient',
    },
    {
      d: 'M32.3 30.5 A6 3.4 44.1 1 0 40.9 38.8 A6 3.4 44.1 1 0 32.3 30.5 M41.2 39.1 L50.5 46.7 M50.3 46.5 A6 3.4 33.8 1 0 60.2 53.2 A6 3.4 33.8 1 0 50.3 46.5 M59.4 52.7 L70 58.3 M68.6 57.7 A6 3.4 20.9 1 0 79.8 62 A6 3.4 20.9 1 0 68.6 57.7 M78 61.4 L89.6 64.3 M87.5 63.9 A6 3.4 6 1 0 99.5 65.1 A6 3.4 6 1 0 87.5 63.9 M97.3 65.1 L109.2 64.7 M107.2 64.9 A6 3.4 -9.3 1 0 119 62.9 A6 3.4 -9.3 1 0 107.2 64.9 M117.3 63.3 L128.8 59.9',
      role: 'accent',
    },
    {
      d: 'M32.3 82.5 A6 3.4 44.1 1 0 40.9 90.8 A6 3.4 44.1 1 0 32.3 82.5 M41.2 91.1 L50.5 98.7 M50.3 98.5 A6 3.4 33.8 1 0 60.2 105.2 A6 3.4 33.8 1 0 50.3 98.5 M59.4 104.7 L70 110.3 M68.6 109.7 A6 3.4 20.9 1 0 79.8 114 A6 3.4 20.9 1 0 68.6 109.7 M78 113.4 L89.6 116.3 M87.5 115.9 A6 3.4 6 1 0 99.5 117.1 A6 3.4 6 1 0 87.5 115.9 M97.3 117.1 L109.2 116.7 M107.2 116.9 A6 3.4 -9.3 1 0 119 114.9 A6 3.4 -9.3 1 0 107.2 116.9 M117.3 115.3 L128.8 111.9',
      role: 'accent',
    },
    {
      d: 'M106.7 116 A6 3.4 56.3 1 0 113.3 126 A6 3.4 56.3 1 0 106.7 116 M110.7 122 L117.3 132',
      role: 'accent',
    },
    { d: 'M104 134 H132 M104 158 H132 M132 134 a6 12 0 0 1 0 24' },
    { d: ellipse(104, 146, 6, 12) },
    { d: 'M114 150 l4 -4 M120 152 l6 -6 M126 154 l5 -5', role: 'ambient' },
    {
      d: 'M-4 150 H20 M140 150 H164 M40 150 H96',
      role: 'ambient',
      dashed: true,
    },
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

  // One of the bandage-like strips she cuts the castle guards down with,
  // spiralling up off the ground and ending in an arrowhead (1165).
  'manmayer-gunko': [
    {
      d: 'M80 168 C84 166.8 98.4 163.8 104 160.5 C109.7 157.3 112.3 150.5 114 148.5 M80 177 C84 175.8 98.4 172.8 104 169.5 C109.7 166.3 112.3 159.5 114 157.5 M46 131.5 C47.7 132.1 50.3 134.6 56 135 C61.6 135.4 72 135.4 80 134 C88 132.6 98.4 129.8 104 126.5 C109.7 123.3 112.3 116.5 114 114.5 M46 140.5 C47.7 141.1 50.3 143.6 56 144 C61.6 144.4 72 144.4 80 143 C88 141.6 98.4 138.8 104 135.5 C109.7 132.3 112.3 125.5 114 123.5 M46 97.5 C47.7 98.1 50.3 100.6 56 101 C61.6 101.4 76 100.2 80 100 M46 106.5 C47.7 107.1 50.3 109.6 56 110 C61.6 110.4 76 109.2 80 109',
    },
    {
      d: 'M114 148.5 C112.3 146.5 109.7 139.7 104 136.5 C98.4 133.2 88 130.4 80 129 C72 127.6 61.6 127.6 56 128 C50.3 128.4 47.7 130.9 46 131.5 M114 157.5 C112.3 155.5 109.7 148.7 104 145.5 C98.4 142.2 88 139.4 80 138 C72 136.6 61.6 136.6 56 137 C50.3 137.4 47.7 139.9 46 140.5 M114 114.5 C112.3 112.5 109.7 105.7 104 102.5 C98.4 99.2 88 96.4 80 95 C72 93.6 61.6 93.6 56 94 C50.3 94.4 47.7 96.9 46 97.5 M114 123.5 C112.3 121.5 109.7 114.7 104 111.5 C98.4 108.2 88 105.4 80 104 C72 102.6 61.6 102.6 56 103 C50.3 103.4 47.7 105.9 46 106.5',
      role: 'soft',
    },
    {
      d: 'M109.4 141.7 L109.4 147.7 M97 134.8 L97 140.8 M80 130.5 L80 136.5 M63 129.1 L63 135.1 M50.6 130.3 L50.6 136.3 M109.4 107.7 L109.4 113.7 M97 100.8 L97 106.8 M80 96.5 L80 102.5 M63 95.1 L63 101.1 M50.6 96.3 L50.6 102.3',
      role: 'ambient',
    },
    { d: 'M80 168 V177' },
    { d: 'M80 100 C100 99 114 88 117 64 M80 109 C106 108 126 92 127 64' },
    { d: 'M106 68 L122 34 L138 68 L122 60 Z', role: 'accent' },
    shadow(80, 190, 40),
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

  // His two single-edged axes crossed, the dark cheeks of their heads
  // hatched and the cutting edges bright. He throws one at a door the first
  // time the crew meets him (1169).
  'scopper-gaban': [
    ...GABAN_AXE.map((stroke) => ({
      // The right axe, its haft leaning right.
      ...stroke,
      transform: 'translate(80 104) rotate(28)',
    })),
    ...GABAN_AXE.map((stroke) => ({
      // The left axe is the right one mirrored.
      ...stroke,
      transform: 'translate(80 104) scale(-1 1) rotate(28)',
    })),
    shadow(80, 186, 50),
  ],

  // The sword he keeps at his side, sheathed and tilted, its guard a disc
  // ringed with thorns. He wears it once he has dressed after the summons
  // (1170).
  'shepherd-sommers': [
    { d: 'M75 87 V176 Q80 186 85 176 V87', transform: TILT },
    { d: 'M80 92 V176', role: 'soft', transform: TILT },
    { d: ellipse(80, 80, 20, 7), role: 'accent', transform: TILT },
    {
      d: 'M100 79.6 L106.6 82.6 L99.3 81.8 M96.9 83.8 L97.5 91.2 L92.6 85.4 M87.3 86.5 L84.8 93.8 L81.1 87 M75 86.8 L70.9 93.3 L69.1 85.9 M64.6 84.4 L59.1 89.5 L61.3 82.5 M60 80.4 L53.4 77.4 L60.7 78.2 M63.1 76.2 L62.5 68.8 L67.4 74.6 M72.7 73.5 L75.2 66.2 L78.9 73 M85 73.2 L89.1 66.7 L90.9 74.1 M95.4 75.6 L100.9 70.5 L98.7 77.5',
      role: 'accent',
      transform: TILT,
    },
    { d: 'M60 80 v4 a20 7 0 0 0 40 0 v-4', role: 'soft', transform: TILT },
    { d: 'M76.5 74 V40 M83.5 74 V40', transform: TILT },
    { d: ellipse(80, 34, 6, 6), transform: TILT },
    shadow(80, 188, 34),
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

  // Loki's warhammer: a rectangular sledge head in 3/4 with its far end
  // hatched, the raised plate the haft juts from, and the long haft wrapped
  // in bandages. It lies behind the chained prince from the first time Luffy
  // finds him, and is named when he takes hold of it (1171).
  'ragnir': [
    { d: 'M36 30 H112 V78 H36 Z', transform: TILT },
    { d: 'M36 30 L48 20 H124 L112 30 M124 20 V68 L112 78', transform: TILT },
    {
      d: 'M114 38 l8 -6 M114 50 l8 -6 M114 62 l8 -6 M114 74 l8 -6',
      role: 'ambient',
      transform: TILT,
    },
    { d: 'M50 40 H98 V68 H50 Z', role: 'soft', transform: TILT },
    { d: 'M64 78 V88 H84 V78', role: 'accent', transform: TILT },
    { d: 'M70 88 V184 M78 88 V184 M70 184 H78', transform: TILT },
    {
      d: 'M70 104 l8 -5 M70 114 l8 -5 M70 124 l8 -5 M70 134 l8 -5 M70 144 l8 -5 M70 154 l8 -5 M70 164 l8 -5 M70 174 l8 -5',
      role: 'soft',
      transform: TILT,
    },
    shadow(80, 190, 36),
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
