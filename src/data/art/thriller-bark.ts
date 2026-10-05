import { circle, dots, ellipse, ghost, SEA, shadow } from '~/lib/svg/primitives'

import type { Drawings, Redrawings } from './stroke'

/** The drawings of the records filed in the thriller bark stretch of the route. */
export const thrillerBarkArt = {
  // A skull singing in the fog, notes rising from its open jaw: the arc's
  // first episode shows only the fog and the skeleton aboard a ghost ship.
  // The hull is drawn from 343, in `thrillerBarkRedrawn`.
  'thriller-bark-arc': [
    { d: 'M52 104 C44 64 60 42 80 42 C100 42 116 64 108 104' },
    { d: 'M52 104 q2 10 12 12 M108 104 q-2 10 -12 12' },
    { d: 'M64 116 H96' },
    { d: 'M70 116 v6 M77 116 v6 M84 116 v6 M91 116 v6', role: 'soft' },
    { d: 'M64 128 H96 Q80 154 64 128' },
    { d: `${ellipse(68, 88, 8, 9)} ${ellipse(92, 88, 8, 9)}`, role: 'accent' },
    { d: 'M80 98 l-4 9 h8z', role: 'soft' },
    {
      d: `${ellipse(124, 64, 5, 3.5)} M129 64 V40 q6 4 8 12 ${ellipse(140, 36, 4, 3)} M144 36 V18`,
      role: 'accent',
    },
    {
      d: 'M-4 34 H40 M-4 70 H30 M118 96 H164 M-4 138 H48 M112 142 H164',
      role: 'ambient',
      dashed: true,
    },
    ...SEA.slice(1),
  ],

  // A ship with torn sails drifting through bands of fog.
  'florian-triangle': [
    { d: 'M30 120 L42 146 H118 L132 116 L118 128 H44 Z' },
    { d: 'M60 128 V40 M98 128 V52' },
    {
      d: 'M44 48 H76 L74 70 l-6 -6 l-5 8 l-5 -6 l-6 8 l-4 -6 L46 72 Z M82 60 H114 L112 84 l-6 -5 l-5 7 l-6 -6 l-5 7 l-5 -5 L84 86 Z',
      role: 'accent',
    },
    { d: 'M48 88 H74 L72 104 l-6 -4 l-6 6 l-5 -5 L50 106 Z', role: 'accent' },
    { d: 'M60 40 L36 126 M98 52 L126 124 M60 40 L98 52', role: 'soft' },
    { d: 'M56 36 h8 M94 48 h8', role: 'soft' },
    {
      d: 'M-4 30 H40 M58 22 H164 M-4 112 H22 M136 104 H164',
      role: 'ambient',
      dashed: true,
    },
    {
      d: 'M-4 150 H30 M130 150 H164 M-4 138 H26',
      role: 'ambient',
      dashed: true,
    },
    ...SEA.slice(1),
  ],

  // A violin, its bow laid across it; the f-holes take the colour. The Soul
  // King's guitar is drawn from 517, in `thrillerBarkRedrawn`.
  'brook': [
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
  'perona': [
    { d: 'M28 104 Q80 44 132 104' },
    { d: 'M28 104 q13 -12 26 0 t26 0 t26 0 t26 0' },
    { d: 'M80 52 L54 100 M80 52 L106 100', role: 'ambient' },
    { d: 'M80 104 V166 q0 12 -12 12 q-8 0 -8 -8' },
    { d: 'M80 52 v-10' },
    ...ghost(28, 158, 'accent'),
    ...ghost(102, 134, 'accent'),
  ],

  // A bridal veil hung over a pair of tusks.
  'lola': [
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
  'absalom': [
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
  'hogback': [
    {
      d: 'M80 172 C38 142 24 110 32 86 C40 62 72 62 80 90 C88 62 120 62 128 86 C136 110 122 142 80 172 Z',
    },
    {
      d: 'M44 118 C60 106 80 106 96 116 C108 124 116 128 122 122',
      role: 'soft',
    },
    {
      d: 'M52 112 l4 12 M64 108 l2 12 M76 107 l0 12 M88 108 l-2 12 M100 113 l-4 12 M112 120 l-4 10',
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
  'ryuma': [
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
  'oars': [
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
  'yorki': [
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
  // A tall bottle of wine and the glass poured from it; the wine takes the colour.
  'hildon': [
    {
      d: 'M66 40 V74 C66 84 54 88 54 100 V172 q0 6 6 6 h24 q6 0 6 -6 V100 C90 88 78 84 78 74 V40 Z',
    },
    { d: 'M64 30 h16 v10 h-16z' },
    { d: 'M54 118 h36 v30 h-36z', role: 'soft' },
    { d: 'M104 104 q0 32 20 32 q20 0 20 -32 Z' },
    { d: 'M107 118 q17 6 34 0 q-3 16 -17 16 q-14 0 -17 -16 Z', role: 'accent' },
    { d: 'M124 136 V170 M110 172 h28' },
    shadow(96, 186, 58),
  ],

  // A spiked dog collar lying open, three tags hanging from its buckle.
  'cerberus-thriller-bark': [
    { d: ellipse(80, 96, 56, 24), role: 'accent' },
    { d: ellipse(80, 96, 46, 16), role: 'accent' },
    {
      d: 'M34 84 l4 -14 l5 12 M56 76 l4 -15 l5 14 M76 74 l4 -15 l4 15 M95 76 l5 -14 l4 15 M117 82 l5 -12 l4 14',
    },
    { d: 'M70 112 h20 v14 h-20z', role: 'soft' },
    { d: 'M76 126 L60 142 M80 126 V146 M84 126 L100 142', role: 'soft' },
    { d: circle(58, 150, 8) },
    { d: circle(80, 156, 9) },
    { d: circle(102, 150, 8) },
    shadow(80, 180, 44),
  ],

  // A pig's snout on a trophy plaque hung from a nail, two swords crossed beneath it.
  'buhichuck': [
    { d: 'M62 40 L80 20 L98 40', role: 'ambient' },
    { d: dots([[80, 20]]) },
    { d: 'M44 40 H116 V92 C116 118 100 134 80 142 C60 134 44 118 44 92 Z' },
    {
      d: 'M54 50 H106 V92 C106 112 94 124 80 131 C66 124 54 112 54 92 Z',
      role: 'soft',
    },
    { d: ellipse(80, 98, 16, 11) },
    {
      d: dots([
        [74, 98],
        [86, 98],
        [66, 72],
        [94, 72],
      ]),
    },
    { d: 'M26 180 L134 116', role: 'accent' },
    { d: 'M134 180 L26 116', role: 'accent' },
    { d: 'M36 164 l9 14 M124 164 l-9 14' },
    { d: 'M22 184 l6 -4 M138 184 l-6 -4' },
  ],

  // A gate in the outer wall shaped like a mouth, its teeth closing on the sea.
  'thriller-bark': [
    { d: 'M-4 62 H164 M-4 150 H164' },
    { d: 'M40 150 V100 C40 64 120 64 120 100 V150' },
    {
      d: 'M40 100 L51.8 98.8 L43.4 88.2 L56.4 91.4 L52.5 79.8 L64.8 87 L65.3 74.7 L74.8 85.2 L80 73 L85.2 85.2 L94.7 74.7 L95.2 87 L107.5 79.8 L103.6 91.4 L116.6 88.2 L108.2 98.8 L120 100',
      role: 'accent',
    },
    {
      d: 'M40 150 L46 138 L52 150 L60 136 L68 150 L76 136 L84 150 L92 136 L100 150 L108 136 L114 150 L120 138',
      role: 'accent',
    },
    {
      d: 'M12 62 V38 h6 v6 h6 v-6 h6 v6 h6 v-6 h6 V62 M118 62 V38 h6 v6 h6 v-6 h6 v6 h6 v-6 h6 V62',
    },
    {
      d: 'M4 84 h26 M10 106 h24 M4 128 h26 M130 84 h26 M126 106 h24 M130 128 h26',
      role: 'soft',
    },
    {
      d: 'M-4 30 q20 -6 40 0 t40 0 M84 24 q20 -6 40 0 t40 0',
      role: 'ambient',
      dashed: true,
    },
    ...SEA.slice(1),
  ],

  // A surgical mask on its ear loops, and the long zip that runs down a bear's back.
  'kumashi': [
    { d: 'M40 44 C60 36 100 36 120 44 V80 C100 92 60 92 40 80 Z' },
    {
      d: 'M42 56 C62 50 98 50 118 56 M42 68 C62 62 98 62 118 68',
      role: 'soft',
    },
    {
      d: 'M40 48 C18 46 18 76 40 76 M120 48 C142 46 142 76 120 76',
      role: 'ambient',
    },
    { d: 'M80 104 V170' },
    {
      d: 'M74 110 h12 M74 120 h12 M74 130 h12 M74 140 h12 M74 150 h12 M74 160 h12',
      role: 'accent',
    },
    { d: 'M74 170 h12 v14 h-12z', role: 'accent' },
  ],
  // A bottle of liquor standing in front of two crossed swords, the bubbles
  // of a hiccup rising off it.
  'john': [
    { d: 'M44 150 L122 38 L128 42 L50 154 Z' },
    { d: 'M116 150 L38 38 L32 42 L110 154 Z' },
    { d: 'M38 146 L58 160 M122 146 L102 160' },
    { d: 'M47 152 L33 172 M113 152 L127 172', role: 'soft' },
    {
      d: 'M72 58 h16 v24 c0 8 14 12 14 28 V168 q0 8 -8 8 H66 q-8 0 -8 -8 V110 c0 -16 14 -20 14 -28 Z',
    },
    { d: 'M70 48 h20 v10 h-20z', role: 'soft' },
    { d: 'M60 124 H100 V148 H60 Z', role: 'soft' },
    { d: 'M59 106 H101', role: 'ambient' },
    {
      d: `${circle(112, 62, 5)} ${circle(124, 48, 3.5)} ${circle(133, 36, 2.5)}`,
      role: 'accent',
    },
    shadow(80, 186, 46),
  ],

  // An old oil lantern with its flame lit, and a shadow on the ground beneath
  // it again.
  'spoil': [
    { d: 'M68 36 C68 18 92 18 92 36' },
    { d: 'M56 50 L66 36 H94 L104 50 Z' },
    { d: 'M58 50 V140 M102 50 V140' },
    {
      d: 'M64 56 C56 80 56 116 64 134 H96 C104 116 104 80 96 56 Z',
      role: 'soft',
    },
    { d: 'M80 118 C70 108 72 94 80 80 C88 94 90 108 80 118 Z', role: 'accent' },
    { d: 'M80 118 V128' },
    { d: 'M52 140 H108 V152 H52 Z' },
    { d: 'M58 152 L62 160 H98 L102 152' },
    {
      d: 'M40 96 h-12 M120 96 h12 M46 70 l-10 -8 M114 70 l10 -8',
      role: 'ambient',
    },
    shadow(80, 174, 44),
  ],

  // A bow drawn back, its arrow flying into a bubble that bursts.
  'gyoro-nin-and-bao': [
    { d: 'M34 30 C66 60 66 130 34 160' },
    { d: 'M34 30 L58 95 L34 160', role: 'soft' },
    { d: 'M58 95 H118' },
    { d: 'M118 95 l-10 -6 M118 95 l-10 6' },
    {
      d: 'M58 95 l-8 -7 M58 95 l-8 7 M66 95 l-8 -7 M66 95 l-8 7',
      role: 'soft',
    },
    { d: circle(132, 95, 16), role: 'accent', dashed: true },
    {
      d: 'M132 71 v-8 M149 78 l6 -6 M149 112 l6 6 M132 119 v8',
      role: 'accent',
    },
    shadow(80, 182, 46),
  ],

  // Three sabres standing side by side, each with its knuckle guard, the
  // middle one in colour, and the wind curling over them.
  'jigoro': [
    {
      d: 'M35 152.1 C21.6 116.4 16 78.5 24.7 51 C30.7 82.6 38.1 115.8 43.6 149.6 Z',
    },
    { d: 'M29.2 153.8 L48.4 148.3 M38.8 151 L46 176' },
    { d: 'M48.4 148.3 C57.9 155.9 57.9 170.5 46 176', role: 'soft' },
    {
      d: 'M112.1 149.7 C115.1 111.7 126 74.9 145.5 53.7 C137.6 84.9 130.3 118.1 121 151.1 Z',
    },
    { d: 'M106.2 148.8 L125.9 151.9 M116.1 150.3 L112 176' },
    { d: 'M125.9 151.9 C131.3 162.9 125.2 176.1 112 176', role: 'soft' },
    { d: 'M76 150 C73 112 78 74 94 50 C91 82 89 116 85 150 Z', role: 'accent' },
    { d: 'M70 150 L90 150 M80 150 L80 176' },
    { d: 'M90 150 C97 160 93 174 80 176', role: 'soft' },
    {
      d: 'M10 34 q18 -12 36 -2 q8 5 2 10 M116 20 q18 -10 34 2 q6 6 -2 9',
      role: 'ambient',
    },
    shadow(80, 186, 56),
  ],

  // A spider web strung wide, one sticky thread hanging from it with a
  // drop at the end.
  'tararan': [
    {
      d: 'M80 82 L144.7 108.8 M80 82 L106.8 146.7 M80 82 L53.2 146.7 M80 82 L15.3 108.8 M80 82 L15.3 55.2 M80 82 L53.2 17.3 M80 82 L106.8 17.3 M80 82 L144.7 55.2',
    },
    {
      d: 'M94.8 88.1 Q89 91 86.1 96.8 Q80 94.7 73.9 96.8 Q71 91 65.2 88.1 Q67.3 82 65.2 75.9 Q71 73 73.9 67.2 Q80 69.3 86.1 67.2 Q89 73 94.8 75.9 Q92.7 82 94.8 88.1',
    },
    {
      d: 'M111.4 95 Q99.1 101.1 93 113.4 Q80 109 67 113.4 Q60.9 101.1 48.6 95 Q53 82 48.6 69 Q60.9 62.9 67 50.6 Q80 55 93 50.6 Q99.1 62.9 111.4 69 Q107 82 111.4 95',
      role: 'soft',
    },
    {
      d: 'M129.9 102.7 Q110.3 112.3 100.7 131.9 Q80 124.9 59.3 131.9 Q49.7 112.3 30.1 102.7 Q37.1 82 30.1 61.3 Q49.7 51.7 59.3 32.1 Q80 39.1 100.7 32.1 Q110.3 51.7 129.9 61.3 Q122.9 82 129.9 102.7',
    },
    { d: 'M101 132 C104 146 100 158 102 170', role: 'accent' },
    { d: 'M102 170 c-6 4 -6 12 0 14 c6 -2 6 -10 0 -14z', role: 'accent' },
  ],

  // A sack of salt tied at the neck, grains spilled beside it, and a caught
  // shadow drifting up out of it.
  'risky-brothers': [
    {
      d: 'M50 176 C32 176 28 150 36 128 C44 108 58 100 64 92 H96 C102 100 116 108 124 128 C132 150 128 176 110 176 Z',
    },
    { d: 'M64 92 C58 82 62 74 72 80 L80 86 L88 80 C98 74 102 82 96 92' },
    { d: 'M60 100 H100', role: 'soft' },
    { d: 'M50 140 q30 8 60 0 M46 158 q34 8 68 0', role: 'soft' },
    {
      d: dots([
        [122, 184],
        [128, 178],
        [132, 184],
        [136, 174],
        [142, 180],
        [146, 172],
        [150, 182],
      ]),
      role: 'accent',
    },
    {
      d: 'M80 78 C66 62 94 52 80 36 C72 26 84 16 94 20',
      role: 'ambient',
      dashed: true,
    },
  ],
} satisfies Drawings

/** Brook's guitar, drawn lying flat and tilted to where the bow lay. */
const GUITAR = 'translate(-6 6) rotate(-50 80 110)'

/** The records of this stretch drawn again, from the episode the story changes them. */
export const thrillerBarkRedrawn: Redrawings = {
  // A hull the size of an island, a mansion and two dead trees on the deck,
  // the moon hung over all of it: Spoil's line at 343 says the island is the
  // largest pirate ship in the world (ch. 449).
  'thriller-bark-arc': [
    {
      episode: 343,
      value: [
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
    },
  ],

  // The violin still upright, the Soul King's guitar laid across it where the
  // bow was: a shark's head for a body, jaws open on its teeth, gills and two
  // fins for horns. He plays it at his farewell concert at 517 (ch. 598).
  'brook': [
    {
      episode: 517,
      chapter: 598,
      value: [
        {
          d: 'M88 58 c-26 0 -34 20 -24 32 c-10 10 -14 34 -2 46 c12 12 40 12 52 0 c12 -12 8 -36 -2 -46 c10 -12 2 -32 -24 -32z',
        },
        { d: 'M83 58 V20 M93 58 V20' },
        { d: 'M83 20 q5 -10 10 0' },
        { d: 'M78 24 h-6 M98 24 h6 M78 32 h-6 M98 32 h6' },
        { d: 'M86 54 V126 M90 54 V126', role: 'ambient' },
        { d: 'M78 116 h20' },
        { d: 'M76 90 q-6 12 4 22 M100 90 q6 12 -4 22', role: 'accent' },
        {
          d: 'M54 104 C44 94 24 88 8 92 C0 94 -8 100 -10 106 L16 111 L0 119 C8 129 38 128 54 116',
          transform: GUITAR,
        },
        {
          d: 'M-6 107 l2 4 l2 -3.4 l2 4 l2 -3.2 l2 4 l2 -3 l2 3.6 M3 117 l1 -4 l2 3 l1 -4 l2 3 l1 -4 l2 2.6',
          role: 'soft',
          transform: GUITAR,
        },
        { d: circle(14, 100, 3), role: 'accent', transform: GUITAR },
        {
          d: 'M26 96 q-3 11 0 24 M33 95 q-3 12 0 26 M40 96 q-3 11 0 24',
          role: 'soft',
          transform: GUITAR,
        },
        {
          d: 'M44 98 C48 92 50 86 52 78 L56 104 M44 122 C48 128 50 132 54 140 L56 116',
          transform: GUITAR,
        },
        { d: 'M54 107 H144 M54 113 H144', transform: GUITAR },
        {
          d: 'M72 107 v6 M88 107 v6 M104 107 v6 M120 107 v6',
          role: 'ambient',
          transform: GUITAR,
        },
        {
          d: 'M144 106 L148 102 H162 Q168 110 162 118 H148 L144 114',
          transform: GUITAR,
        },
      ],
    },
  ],
}
