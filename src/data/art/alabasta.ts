import {
  circle,
  dot,
  dots,
  ellipse,
  house,
  SEA,
  shadow,
} from '~/lib/svg/primitives'

import type { Drawings, Redrawings, Stroke } from './stroke'

/** The drawings of the records filed in the alabasta stretch of the route. */
export const alabastaArt = {
  // Twin peaks with the canal running up to the notch between them, the sea
  // climbing it, and a lighthouse at the foot.
  'reverse-mountain': [
    { d: 'M4 150 L44 40 L72 58 L100 40 L128 150' },
    { d: 'M60 150 L69 60 M84 150 L75 60', role: 'accent' },
    {
      d: 'M68 132 l4 -7 l4 7 M69 104 l3 -6 l3 6 M70 78 l2 -5 l2 5',
      role: 'soft',
    },
    { d: 'M134 150 L138 118 H146 L150 150z' },
    { d: 'M137 118 V110 H147 V118 M134 110 L142 102 L150 110' },
    { d: 'M152 106 h6 M151 98 l6 -5', role: 'ambient', dashed: true },
    ...SEA.slice(1),
  ],

  // A whale as big as an island, the scars on its forehead where it beats the
  // cliff, and the spout going up.
  'laboon': [
    { d: 'M12 150 C12 78 58 44 96 54 C134 64 152 104 150 150' },
    { d: 'M16 124 C52 134 100 134 146 122' },
    { d: 'M60 150 q18 -14 38 -6' },
    { d: 'M34 84 L52 74 M32 98 L52 86 M40 110 L56 100', role: 'accent' },
    { d: 'M88 48 C84 30 96 26 94 12 M98 50 C106 34 116 34 114 20' },
    ...SEA,
  ],

  // A lighthouse on the cape, its light going out over the water, and the
  // mouth of the river behind it.
  'crocus': [
    { d: 'M62 152 L70 66 H92 L100 152' },
    { d: 'M66 66 H96' },
    { d: 'M70 66 V48 H92 V66' },
    { d: 'M66 48 L81 34 L96 48' },
    {
      d: 'M70 54 L34 42 M70 60 L36 66 M92 54 L128 42 M92 60 L126 66',
      role: 'accent',
    },
    { d: 'M66 92 H96 M64 118 H98', role: 'ambient' },
    { d: 'M76 152 V134 a6 6 0 0 1 12 0 V152' },
    { d: 'M4 152 C30 138 46 148 62 152 M100 152 C118 146 136 140 156 152' },
    {
      d: 'M4 176 C40 164 62 182 100 170 C124 163 140 176 156 170',
      role: 'ambient',
      dashed: true,
    },
    ...SEA.slice(2),
  ],

  // Two steel bats crossed, a crown resting above them.
  'mr-9': [
    { d: 'M33 169 L104 82 L116 92 L39 175 Z' },
    { d: 'M33 169 l-6 4 l6 8 l8 -6' },
    { d: 'M127 169 L56 82 L44 92 L121 175 Z' },
    { d: 'M127 169 l6 4 l-6 8 l-8 -6' },
    {
      d: 'M46 158 l8 10 M56 146 l8 10 M114 158 l-8 10 M104 146 l-8 10',
      role: 'ambient',
    },
    {
      d: 'M50 62 L58 28 L70 48 L80 20 L90 48 L102 28 L110 62 Z',
      role: 'accent',
    },
    { d: 'M50 62 H110', role: 'accent' },
    {
      d: dots([
        [58, 28],
        [80, 20],
        [102, 28],
      ]),
    },
    shadow(80, 186, 40),
  ],

  // A town built into cactus-shaped rocks, with the banquet table laid out
  // below it.
  'whisky-peak-arc': [
    { d: 'M30 132 V74 a12 12 0 0 1 24 0 V132' },
    { d: 'M30 100 H18 a8 8 0 0 0 -8 8 V132' },
    { d: 'M54 88 H68 a8 8 0 0 1 8 8 V132' },
    { d: 'M92 132 V84 a11 11 0 0 1 22 0 V132' },
    { d: 'M114 106 H126 a8 8 0 0 1 8 8 V132' },
    {
      d: dots([
        [38, 92],
        [46, 108],
        [100, 100],
        [108, 116],
      ]),
      role: 'soft',
    },
    { d: 'M22 146 H138', role: 'accent' },
    { d: 'M34 146 V164 M126 146 V164', role: 'accent' },
    { d: 'M52 138 h10 v8 h-10z M76 138 h10 v8 h-10z M100 138 h10 v8 h-10z' },
    { d: 'M4 152 H156', role: 'ambient' },
    ...SEA.slice(2),
  ],

  // A saxophone with a gun barrel where the mouthpiece should be.
  'igaram': [
    { d: 'M104 32 C108 72 100 112 86 132 C72 152 46 158 32 146' },
    { d: 'M90 34 C94 72 86 106 74 124 C62 142 44 146 34 136' },
    { d: 'M32 146 q-14 -6 -12 -22 q2 -14 14 -16' },
    { d: 'M20 124 q-10 14 -2 30' },
    {
      d: dots([
        [96, 56],
        [93, 74],
        [89, 92],
        [84, 110],
      ]),
      role: 'soft',
    },
    { d: 'M104 32 L134 18', role: 'accent' },
    { d: 'M99 24 L129 10', role: 'accent' },
    { d: 'M129 10 L134 18 M104 32 L99 24', role: 'accent' },
    { d: 'M140 6 l10 -4 M140 22 l10 4', role: 'ambient', dashed: true },
    shadow(62, 172, 42),
  ],

  // A nun's habit standing beside a barrel of beer.
  'miss-monday': [
    { d: 'M28 154 C24 110 38 76 62 76 C86 76 100 110 96 154' },
    { d: 'M46 88 q16 12 32 0', role: 'ambient' },
    { d: 'M62 110 V140 M48 124 H76', role: 'accent' },
    { d: 'M108 150 q-8 -24 0 -48 q16 -6 32 0 q8 24 0 48 q-16 6 -32 0z' },
    { d: 'M108 118 q16 6 32 0 M110 136 q14 6 28 0', role: 'ambient' },
    { d: 'M124 104 V150', role: 'ambient' },
    { d: 'M112 100 q12 -4 24 0' },
    shadow(82, 168, 56),
  ],

  // A riding saddle with a canteen slung from it.
  'karoo': [
    {
      d: 'M34 110 C30 84 56 70 82 70 C110 70 130 84 128 110 C116 122 46 122 34 110 Z',
    },
    { d: 'M74 70 q8 -14 20 -10 q-2 10 -10 12' },
    { d: 'M44 104 q38 10 76 0', role: 'ambient', dashed: true },
    { d: 'M58 118 V146' },
    { d: 'M48 146 h22 q6 10 -10 12 q-18 0 -12 -12' },
    { d: 'M98 118 V140 M88 140 h20' },
    { d: circle(118, 140, 16), role: 'accent' },
    { d: 'M114 124 h8 v-6 h-8z', role: 'accent' },
    { d: 'M110 126 L100 118' },
    shadow(80, 176, 46),
  ],

  // A cactus-shaped rock under the moon, grave crosses standing on its top.
  'whisky-peak': [
    { d: 'M60 150 V60 a20 20 0 0 1 40 0 V150' },
    { d: 'M60 124 H34 a8 8 0 0 1 -8 -8 V88 a8 8 0 0 1 16 0 V108 H60' },
    { d: 'M100 110 H126 a8 8 0 0 0 8 -8 V74 a8 8 0 0 0 -16 0 V94 H100' },
    {
      d: 'M70 44 V28 M65 33 H75 M80 40 V22 M75 27 H85 M90 44 V28 M85 33 H95 M34 81 V66 M29 71 H39 M126 67 V52 M121 57 H131',
      role: 'accent',
    },
    {
      d: dots([
        [70, 72],
        [88, 84],
        [72, 100],
        [90, 118],
        [34, 100],
        [126, 86],
      ]),
      role: 'soft',
    },
    { d: circle(134, 28, 11), role: 'ambient' },
    { d: 'M4 150 H156', role: 'ambient' },
    ...SEA.slice(1),
  ],

  // A pistol with the shot leaving the muzzle.
  'mr-5': [
    { d: 'M46 96 H118 V112 H46 Z' },
    { d: 'M46 112 L36 150 L58 154 L70 112' },
    { d: 'M74 112 q14 2 12 16 q-2 12 -14 10' },
    { d: 'M78 116 V126' },
    { d: 'M44 96 q-8 -8 -2 -14' },
    { d: 'M108 96 V90 h4 V96' },
    {
      d: 'M118 104 L142 88 L134 106 L154 108 L134 114 L142 132 L118 116 Z',
      role: 'accent',
    },
    {
      d: 'M136 70 q10 -8 4 -18 M146 142 q14 -2 16 -14',
      role: 'ambient',
      dashed: true,
    },
    shadow(74, 168, 44),
  ],

  // An open umbrella, the kind that comes down out of the sky.
  'miss-valentine': [
    { d: 'M16 104 C20 56 60 30 80 30 C100 30 140 56 144 104', role: 'accent' },
    {
      d: 'M16 104 q16 16 32 0 q16 16 32 0 q16 16 32 0 q16 16 32 0',
      role: 'accent',
    },
    { d: 'M80 30 L32 104 M80 30 V104 M80 30 L128 104', role: 'ambient' },
    { d: 'M80 26 V158' },
    { d: 'M80 158 q0 14 -14 14 q-12 0 -12 -12' },
    { d: 'M80 26 V14' },
    shadow(80, 184, 30),
  ],

  // A running duck with a saddle on its back.
  'nefertari-vivi': [
    { d: ellipse(78, 128, 32, 22) },
    { d: 'M104 116 C116 108 118 90 112 74' },
    { d: circle(110, 66, 10) },
    { d: 'M120 64 l18 4 l-18 4' },
    { d: dot(112, 63) },
    { d: 'M106 56 q4 -8 10 -4' },
    { d: 'M58 112 Q78 100 98 112', role: 'accent' },
    { d: 'M62 122 Q78 130 94 122', role: 'accent' },
    { d: 'M68 150 V172 M88 150 V172 M60 172 h16 M80 172 h16' },
    { d: 'M30 130 h-14 M32 140 h-12', role: 'ambient' },
  ],

  // Two smoking volcanoes with a dinosaur skull lying between them.
  'little-garden-arc': [
    { d: 'M6 148 L36 66 H52 L82 148' },
    { d: 'M78 148 L104 74 H124 L152 148' },
    { d: 'M40 64 C38 46 48 42 46 26', role: 'ambient', dashed: true },
    { d: 'M110 72 C108 54 118 50 116 34', role: 'ambient', dashed: true },
    { d: circle(98, 128, 14), role: 'accent' },
    { d: 'M90 118 L48 124 L90 138', role: 'accent' },
    { d: 'M50 124 H90', role: 'ambient' },
    { d: 'M58 127 V131 M66 127 V131 M74 128 V132 M82 128 V132' },
    { d: 'M4 150 H156', role: 'ambient' },
    ...SEA.slice(2),
  ],

  // A cup of Earl Grey on its saucer, still steaming.
  'mr-3': [
    { d: 'M54 104 L62 142 h36 L106 104 Z', role: 'accent' },
    { d: 'M50 104 h60', role: 'accent' },
    { d: 'M106 110 q20 2 18 15 q-2 10 -20 10', role: 'accent' },
    { d: ellipse(80, 148, 54, 10) },
    { d: ellipse(80, 148, 30, 5), role: 'soft' },
    {
      d: 'M68 92 c-6 -10 4 -14 -2 -26 M88 92 c-6 -10 4 -14 -2 -26',
      role: 'ambient',
    },
    shadow(80, 176, 50),
  ],

  // A painter's palette with a brush across it and a rice cracker beside.
  'miss-goldenweek': [
    {
      d: 'M20 106 C20 68 50 48 84 52 C118 56 140 78 136 102 C132 124 108 122 100 132 C90 144 70 150 54 144 C34 136 20 124 20 106 Z',
    },
    { d: circle(54, 116, 11) },
    {
      d: `${circle(46, 80, 8)} ${circle(72, 66, 8)} ${circle(100, 70, 8)} ${circle(118, 90, 8)}`,
      role: 'accent',
    },
    { d: 'M96 128 L136 92 M102 134 L142 98 M96 128 L102 134 M136 92 L142 98' },
    { d: 'M136 92 L148 80 l6 6 l-12 12z' },
    { d: circle(118, 170, 18) },
    { d: 'M102 164 H134 M102 176 H134', role: 'ambient' },
  ],

  // A giant's round shield with a sword snapped off above the guard.
  'dorry': [
    { d: circle(58, 104, 42) },
    { d: circle(58, 104, 34), role: 'ambient' },
    { d: circle(58, 104, 10) },
    {
      d: dots([
        [58, 70],
        [58, 138],
        [24, 104],
        [92, 104],
      ]),
      role: 'soft',
    },
    { d: 'M106 160 L128 76 L142 80 L120 164 Z', role: 'accent' },
    { d: 'M128 76 l4 -12 l6 6 l4 -10 l4 20', role: 'accent' },
    { d: 'M98 158 L134 170' },
    { d: 'M104 170 L114 188' },
    shadow(96, 192, 40),
  ],

  // A giant's double-bitted axe planted in the ground.
  'brogy': [
    { d: 'M78 176 V44' },
    { d: 'M72 160 V70 M84 156 V74', role: 'ambient' },
    {
      d: 'M78 52 C104 46 130 62 136 92 C120 104 96 106 78 100 Z',
      role: 'accent',
    },
    { d: 'M78 52 C52 46 26 62 20 92 C36 104 60 106 78 100 Z', role: 'accent' },
    { d: 'M132 88 q-26 10 -50 8 M24 88 q26 10 50 8', role: 'ambient' },
    { d: 'M68 100 H88 M68 48 H88' },
    { d: 'M70 176 H86' },
    { d: 'M4 176 H156', role: 'ambient' },
    { d: 'M50 176 q28 -14 56 0', role: 'ambient', dashed: true },
  ],

  // A long-necked dinosaur looking out over the jungle, a palm and ferns in front.
  'little-garden': [
    {
      d: 'M112 150 C112 104 100 70 80 50 C72 42 58 40 50 44 C42 48 42 58 52 58 H62 C72 60 80 90 88 150',
      role: 'accent',
    },
    { d: dot(56, 48), role: 'soft' },
    { d: 'M112 128 C124 114 148 112 164 122', role: 'soft' },
    { d: 'M26 150 C30 130 34 112 30 94' },
    {
      d: 'M30 94 q-16 -4 -24 8 M30 94 q-4 -14 8 -20 M30 94 q14 -8 26 2 M30 94 q10 4 12 16',
    },
    {
      d: 'M50 150 q4 -18 16 -22 M58 150 q-2 -16 -12 -22 M126 150 q2 -16 14 -20 M134 150 q-4 -14 -16 -18',
      role: 'soft',
    },
    { d: 'M112 34 q6 -6 12 0 q6 -6 12 0', role: 'ambient' },
    { d: 'M4 150 H156', role: 'ambient' },
    ...SEA.slice(1),
  ],

  // A castle on a drum-shaped peak, with the snow coming down.
  'drum-island-arc': [
    { d: 'M8 156 L44 56 H88 L124 156' },
    { d: 'M118 156 L138 106 L156 156' },
    { d: 'M31 92 q18 8 35 0 q17 -8 35 2', role: 'ambient' },
    { d: 'M50 56 V26 H82 V56', role: 'accent' },
    { d: 'M46 26 H86 M50 26 V16 h8 V26 M74 26 V16 h8 V26', role: 'accent' },
    { d: 'M66 16 V4 l16 5 l-16 5' },
    { d: 'M58 34 h8 v10 h-8z M70 34 h8 v10 h-8z' },
    {
      d: dots([
        [20, 40],
        [34, 72],
        [110, 48],
        [132, 82],
        [142, 38],
      ]),
      role: 'ambient',
    },
    { d: 'M4 156 H156', role: 'ambient' },
    ...SEA.slice(2),
  ],

  // A crown above a set of iron jaws.
  'wapol': [
    {
      d: 'M40 110 L48 56 L64 84 L80 46 L96 84 L112 56 L120 110 Z',
      role: 'accent',
    },
    { d: 'M40 110 H120', role: 'accent' },
    {
      d: dots([
        [48, 56],
        [80, 46],
        [112, 56],
      ]),
    },
    { d: 'M36 130 q44 -14 88 0' },
    {
      d: 'M44 130 V140 M56 130 V144 M68 131 V145 M80 131 V145 M92 131 V145 M104 130 V144 M116 130 V140',
    },
    { d: 'M36 172 q44 14 88 0' },
    {
      d: 'M44 172 V162 M56 172 V158 M68 171 V157 M80 171 V157 M92 171 V157 M104 172 V158 M116 172 V162',
    },
    { d: 'M36 130 q-8 21 0 42 M124 130 q8 21 0 42', role: 'ambient' },
  ],

  // A pair of ballet shoes with their ribbons tied above.
  'bon-clay': [
    {
      d: 'M20 152 C18 132 34 112 54 108 C66 106 74 114 72 126 C70 142 54 160 36 162 C26 163 20 160 20 152 Z',
    },
    {
      d: 'M140 152 C142 132 126 112 106 108 C94 106 86 114 88 126 C90 142 106 160 124 162 C134 163 140 160 140 152 Z',
    },
    {
      d: 'M54 108 C58 84 76 74 92 80 M106 108 C102 84 84 74 68 80',
      role: 'accent',
    },
    { d: 'M92 80 q10 -6 8 -18 M68 80 q-10 -6 -8 -18', role: 'accent' },
    { d: 'M26 156 q24 -4 42 -22 M134 156 q-24 -4 -42 -22', role: 'ambient' },
    { d: 'M20 148 q10 8 20 8 M140 148 q-10 8 -20 8' },
    shadow(80, 176, 56),
  ],

  // A captain's cloak with a bison's horns above the collar.
  'dalton': [
    { d: 'M40 176 C34 130 44 96 62 84 H98 C116 96 126 130 120 176 Z' },
    { d: 'M62 84 q18 14 36 0' },
    { d: circle(80, 98, 6) },
    { d: 'M62 112 V172 M98 112 V172', role: 'ambient' },
    {
      d: 'M62 74 C40 74 26 58 30 40 C40 42 46 52 52 62 M98 74 C120 74 134 58 130 40 C120 42 114 52 108 62',
      role: 'accent',
    },
    { d: 'M60 72 q20 -10 40 0' },
    shadow(80, 186, 44),
  ],

  // A ship's mast with a prisoner's ropes wound round it, and the sword taken
  // from him laid on the deck at its foot.
  'mr-11': [
    { d: 'M74 176 V16 H86 V176' },
    { d: 'M36 40 H124 V48 H36 Z' },
    { d: 'M74 58 L40 48 M86 58 L120 48', role: 'ambient' },
    {
      d: 'M70 92 L90 100 M70 104 L90 112 M70 116 L90 124 M70 128 L90 136',
      role: 'accent',
    },
    { d: 'M90 136 C104 140 106 150 100 160', role: 'accent' },
    { d: 'M4 176 H156' },
    { d: 'M22 186 L112 180 L120 184 L112 188 L22 190 Z' },
    { d: 'M112 176 V192', role: 'soft' },
  ],

  // Three drum-shaped mountains with snow on their rims, and snowed-in houses below.
  'drum-island': [
    { d: `${ellipse(80, 40, 22, 6)} M58 40 V116 M102 40 V116`, role: 'accent' },
    { d: `${ellipse(34, 78, 16, 5)} M18 78 V116 M50 78 V116`, role: 'accent' },
    {
      d: `${ellipse(128, 70, 18, 5)} M110 70 V116 M146 70 V116`,
      role: 'accent',
    },
    {
      d: 'M58 54 q11 6 22 0 q11 -6 22 0 M18 90 q8 5 16 0 q8 -5 16 0 M110 82 q9 5 18 0 q9 -5 18 0',
      role: 'soft',
    },
    { d: 'M4 118 q38 -8 76 0 t76 0 t10 0', role: 'ambient' },
    {
      d: `${house(26, 22, 134, 122)} ${house(66, 28, 130, 118)} ${house(114, 22, 136, 124)}`,
    },
    {
      d: dots([
        [14, 30],
        [36, 52],
        [118, 30],
        [146, 44],
        [104, 22],
        [60, 16],
      ]),
      role: 'ambient',
    },
    { d: 'M4 150 H156', role: 'ambient' },
    ...SEA.slice(1),
  ],

  // A medicine bottle standing beside a flask of plum wine.
  'kureha': [
    { d: 'M40 170 V112 q0 -10 8 -14 V84 h20 v14 q8 4 8 14 v58 Z' },
    { d: 'M46 84 H70' },
    { d: 'M36 120 H80 V146 H36 Z', role: 'accent' },
    { d: 'M58 126 V140 M51 133 H65', role: 'accent' },
    { d: 'M40 158 q18 6 36 0', role: 'ambient' },
    {
      d: 'M106 96 h14 v22 q16 10 16 30 q0 24 -23 24 q-23 0 -23 -24 q0 -20 16 -30z',
    },
    { d: 'M102 96 h22' },
    { d: 'M94 152 q22 10 44 0', role: 'ambient' },
    shadow(82, 184, 52),
  ],

  // A top hat with a cross, and antlers coming out from under the brim. The
  // cap of the two years is drawn from 517, in `alabastaRedrawn`.
  'tony-tony-chopper': [
    { d: 'M38 116 H122' },
    { d: 'M50 116 V74 H110 V116' },
    { d: 'M50 106 H110', role: 'ambient' },
    { d: 'M80 84 V106 M69 95 H91', role: 'accent' },
    { d: 'M48 112 C34 100 30 84 36 66 M38 84 l-12 -6 M40 70 l-8 -10' },
    { d: 'M112 112 C126 100 130 84 124 66 M122 84 l12 -6 M120 70 l8 -10' },
    shadow(80, 158, 30),
  ],

  // A doctor's bag with a small flag stitched onto the side.
  'hiluluk': [
    { d: 'M28 160 V106 q52 -14 104 0 v54 Z' },
    { d: 'M28 106 q52 -18 104 0' },
    { d: 'M34 104 H126', role: 'ambient' },
    { d: 'M62 100 q18 -28 36 0' },
    { d: 'M72 104 h16 v10 h-16z' },
    { d: 'M56 122 V154 M56 124 L90 132 L56 142', role: 'accent' },
    { d: 'M46 118 H104 M46 156 H104', role: 'ambient', dashed: true },
    { d: 'M40 160 V170 M120 160 V170' },
    shadow(80, 180, 52),
  ],

  // A longbow with an arrow on the string, its head wrapped and burning.
  'chess': [
    { d: 'M44 20 C100 50 100 150 44 180' },
    { d: 'M44 20 V180', role: 'ambient' },
    { d: 'M78 90 H90 V110 H78 Z', role: 'soft' },
    { d: 'M44 100 H134' },
    { d: 'M44 100 l-10 -8 M44 100 l-10 8 M54 100 l-10 -8 M54 100 l-10 8' },
    { d: 'M134 94 L150 100 L134 106 Z' },
    {
      d: 'M130 90 C124 78 132 72 130 60 C140 70 146 78 140 90 M142 92 C140 84 146 80 146 72 C152 80 152 88 148 94',
      role: 'accent',
    },
  ],

  // A boxing glove grown over with curls of hair, spikes standing out of them.
  'kuromarimo': [
    {
      d: 'M52 150 C34 130 36 72 64 58 C92 44 126 60 126 94 C126 122 114 142 100 150 Z',
    },
    { d: 'M52 150 C40 146 30 126 40 112 C44 106 52 108 54 114' },
    { d: 'M56 150 V178 H100 V150' },
    { d: 'M56 162 H100', role: 'ambient' },
    {
      d: 'M62 82 a8 8 0 1 1 12 6 M86 70 a8 8 0 1 1 12 6 M102 98 a8 8 0 1 1 12 6 M70 108 a8 8 0 1 1 12 6 M90 124 a8 8 0 1 1 12 6',
      role: 'accent',
    },
    { d: 'M62 60 L56 44 M94 52 L98 36 M122 74 L138 66 M126 108 L142 112' },
    shadow(78, 188, 32),
  ],

  // Two clam shells with claws along their lips, and a parcel tied with a fuse.
  'mr-13': [
    { d: 'M20 80 C20 44 70 40 74 76 Z' },
    { d: 'M86 76 C90 40 140 44 140 80 Z' },
    {
      d: 'M32 76 L40 52 M46 76 L48 48 M60 76 L60 52 M100 76 L100 52 M114 76 L112 48 M128 76 L120 52',
      role: 'ambient',
    },
    {
      d: 'M20 80 l6 6 l6 -6 l6 6 l6 -6 l6 6 l6 -6 l6 6 l6 -6 M86 76 l6 6 l6 -6 l6 6 l6 -6 l6 6 l6 -6 l6 6 l6 -6 l6 4',
      role: 'accent',
    },
    { d: 'M44 118 H112 V174 H44 Z' },
    { d: 'M78 118 V174 M44 146 H112', role: 'ambient' },
    { d: 'M78 118 c-10 -12 -20 -2 0 0 c10 -12 20 -2 0 0' },
    { d: 'M112 126 C126 122 128 110 140 104' },
    { d: 'M140 104 l6 -8 M140 104 l10 0 M140 104 l2 -10', role: 'soft' },
    shadow(78, 184, 40),
  ],

  // An aviator's cap with its goggles pushed up, and a belt of bullets below.
  'miss-friday': [
    { d: 'M34 112 C34 52 126 52 126 112' },
    {
      d: 'M34 112 V140 Q34 150 46 150 H56 V114 M126 112 V140 Q126 150 114 150 H104 V114',
    },
    { d: 'M80 56 V72', role: 'ambient' },
    { d: 'M34 92 C58 84 102 84 126 92', role: 'ambient' },
    {
      d: `${circle(64, 86, 12)} ${circle(96, 86, 12)} M76 86 H84`,
      role: 'accent',
    },
    { d: 'M26 176 Q80 160 134 176' },
    {
      d: 'M40 171 v-12 a3 3 0 0 1 6 0 v12 M58 167 v-12 a3 3 0 0 1 6 0 v12 M76 166 v-12 a3 3 0 0 1 6 0 v12 M94 166 v-12 a3 3 0 0 1 6 0 v12 M112 168 v-12 a3 3 0 0 1 6 0 v12',
    },
  ],

  // Dunes, a palm, and the sun over a desert kingdom.
  'alabasta': [
    { d: 'M10 148 C40 112 70 128 96 136 C120 142 140 126 154 116' },
    { d: 'M10 168 C46 150 90 158 154 146' },
    { d: circle(116, 66, 16), role: 'accent' },
    { d: 'M46 148 C42 128 46 110 56 98' },
    {
      d: 'M56 98 q-18 -6 -28 6 M56 98 q-4 -18 8 -26 M56 98 q16 -8 28 2 M56 98 q8 -14 24 -14',
    },
    {
      d: dots([
        [54, 102],
        [60, 104],
      ]),
      role: 'ambient',
    },
    {
      d: 'M20 182 h20 M56 184 h30 M104 182 h36',
      role: 'ambient',
      dashed: true,
    },
  ],

  // A golden hook and an hourglass.
  'crocodile': [
    {
      d: 'M44 172 V112 C44 84 66 76 80 84 C94 92 92 112 78 116 C70 118 66 112 68 106',
      role: 'accent',
    },
    { d: 'M38 168 h12 M38 160 h12', role: 'accent' },
    { d: 'M92 60 H136 L114 98 L136 136 H92 L114 98 Z' },
    { d: 'M88 60 h52 M88 136 h52' },
    { d: 'M102 70 h24', role: 'ambient', dashed: true },
    { d: 'M104 130 q10 -8 20 0', role: 'ambient' },
  ],

  // A royal palace with a great dome between two towers, the desert below.
  'alubarna': [
    {
      d: 'M58 110 C58 88 72 80 80 64 C88 80 102 88 102 110 M80 64 V54',
      role: 'accent',
    },
    { d: 'M40 150 V110 H120 V150' },
    { d: 'M72 150 V134 a8 8 0 0 1 16 0 V150' },
    { d: 'M20 150 V86 H32 V150 M128 150 V86 H140 V150' },
    { d: 'M20 86 q6 -16 12 0 M128 86 q6 -16 12 0' },
    { d: 'M32 124 H40 M120 124 H128', role: 'soft' },
    {
      d: dots([
        [52, 126],
        [108, 126],
        [26, 100],
        [134, 100],
      ]),
      role: 'soft',
    },
    { d: 'M-4 150 H164', role: 'ambient' },
    { d: 'M-4 170 q40 -10 80 0 t80 0 t10 0', role: 'ambient' },
    { d: 'M-4 188 q30 -8 60 0 t60 0 t60 0', role: 'ambient', dashed: true },
  ],

  // A crown resting on the seat of a desert throne.
  'nefertari-cobra': [
    { d: 'M46 170 V80 H114 V170' },
    { d: 'M38 130 H122 M38 130 V150 H48 M122 130 V150 H112' },
    { d: 'M50 170 V186 M110 170 V186' },
    { d: 'M56 92 H104 M56 104 H104 M56 116 H104', role: 'ambient' },
    { d: 'M64 74 q0 -36 16 -50 q16 14 16 50 Z', role: 'accent' },
    { d: 'M60 74 H100', role: 'accent' },
    { d: 'M80 42 q-10 -6 -4 -14 q8 4 4 14' },
    shadow(80, 190, 50),
  ],

  // A rebel's goggles above a curved sabre.
  'kohza': [
    { d: ellipse(54, 76, 22, 17) },
    { d: ellipse(106, 76, 22, 17) },
    { d: 'M76 76 q4 -8 8 0' },
    { d: 'M32 70 H14 q-6 10 0 18 H32' },
    { d: 'M128 70 H146 q6 10 0 18 H128' },
    { d: 'M42 68 q10 -6 20 -2 M94 68 q10 -6 20 -2', role: 'ambient' },
    {
      d: 'M42 168 C74 156 108 142 136 120 C122 148 86 172 48 178 Z',
      role: 'accent',
    },
    { d: 'M34 172 q-10 4 -6 14 q6 8 16 2' },
    { d: 'M22 186 L36 176' },
  ],

  // A falcon's spread wing above a curved sword.
  'pell': [
    { d: 'M18 56 C54 36 100 48 132 82 C104 96 60 92 30 76 Z', role: 'accent' },
    {
      d: 'M40 70 L52 46 M58 76 L70 48 M76 80 L88 54 M94 84 L106 62',
      role: 'accent',
    },
    { d: 'M30 156 C64 130 110 130 144 146' },
    { d: 'M30 164 C66 140 112 140 146 154' },
    { d: 'M144 146 L146 154' },
    { d: 'M28 150 q-10 6 -4 18 q6 10 16 4' },
    { d: 'M20 162 L8 170' },
    { d: 'M40 158 C70 140 108 140 136 152', role: 'ambient' },
  ],

  // A sword whose pommel is shaped like a jackal's head.
  'chaka': [
    { d: 'M70 90 V178 L80 190 L90 178 V90 Z' },
    { d: 'M80 96 V176', role: 'ambient' },
    { d: 'M44 82 H116 V92 H44 Z' },
    { d: 'M72 82 V56 h16 v26' },
    { d: 'M72 76 H88 M72 68 H88 M72 60 H88', role: 'ambient' },
    { d: 'M62 56 C62 34 70 26 80 26 C90 26 98 34 98 56 Z', role: 'accent' },
    { d: 'M68 32 L62 10 L78 26 M92 32 L98 10 L82 26', role: 'accent' },
  ],

  // A wide-brimmed hat, and a flame standing up out of it.
  'portgas-d-ace': [
    { d: 'M28 122 Q80 104 132 122 Q80 140 28 122z' },
    { d: 'M56 118 C56 84 74 76 80 76 C86 76 104 84 104 118' },
    { d: 'M40 132 Q80 150 120 132', role: 'ambient' },
    {
      d: dots([
        [60, 140],
        [80, 144],
        [100, 140],
      ]),
      role: 'ambient',
    },
    {
      d: 'M80 70 C64 54 76 40 78 22 C82 36 96 40 96 56 C96 66 88 72 80 70z',
      role: 'accent',
    },
    { d: 'M82 60 c-6 -8 0 -14 2 -22 c2 8 8 10 6 18', role: 'accent' },
  ],

  // A saddle and a striped blanket with tassels, laid on a dune.
  'matsuge': [
    { d: 'M4 172 C40 150 82 150 112 162 C132 170 146 168 156 160' },
    { d: 'M4 190 C50 178 100 186 156 178', role: 'ambient', dashed: true },
    { d: 'M34 116 H126 L118 146 H42 Z' },
    { d: 'M38 126 H122 M40 136 H120', role: 'ambient' },
    {
      d: 'M46 146 v12 M62 146 v12 M78 146 v12 M94 146 v12 M110 146 v12',
      role: 'accent',
    },
    {
      d: dots([
        [46, 161],
        [62, 161],
        [78, 161],
        [94, 161],
        [110, 161],
      ]),
      role: 'accent',
    },
    { d: 'M50 116 C54 92 106 92 110 116' },
    { d: 'M54 106 C48 88 58 80 64 94 M106 106 C112 88 102 80 96 94' },
  ],

  // Two steel blades crossed, each set into a cuff.
  'mr-1': [
    { d: 'M38 178 L36 168 L92 46 L100 50 L48 176 Z', role: 'accent' },
    { d: 'M122 178 L124 168 L68 46 L60 50 L112 176 Z', role: 'accent' },
    { d: 'M32 172 L20 166 L30 148 L44 154 Z' },
    { d: 'M128 172 L140 166 L130 148 L116 154 Z' },
    { d: 'M92 58 L52 150 M68 58 L108 150', role: 'ambient' },
    {
      d: dots([
        [30, 160],
        [130, 160],
      ]),
      role: 'soft',
    },
    shadow(80, 190, 46),
  ],

  // A cactus in a pot, every spine standing out.
  'miss-doublefinger': [
    { d: 'M46 176 L54 128 H106 L114 176 Z' },
    { d: 'M42 128 H118 V116 H42 Z' },
    { d: 'M52 150 H108', role: 'ambient', dashed: true },
    { d: 'M64 116 V72 a16 16 0 0 1 32 0 V116' },
    { d: 'M64 96 H50 a10 10 0 0 0 -10 10 V120' },
    { d: 'M96 86 H112 a10 10 0 0 1 10 10 V116' },
    {
      d: 'M64 82 L56 78 M64 96 L56 92 M96 76 L104 72 M96 92 L104 88 M40 106 L32 102 M122 102 L130 98 M80 60 V50 M72 62 L68 52 M88 62 L92 52',
      role: 'accent',
    },
    shadow(80, 186, 40),
  ],

  // A baseball bat and the gun that walks on four legs.
  'mr-4': [
    { d: 'M16 184 L44 42 L62 46 L26 186 Z' },
    { d: 'M16 184 l-8 2 l4 10 l14 -8' },
    { d: 'M22 168 L32 170 M26 152 L36 154', role: 'ambient' },
    { d: 'M80 148 H124 V176 H80 Z', role: 'accent' },
    { d: 'M124 154 H148 V168 H124 Z', role: 'accent' },
    { d: 'M88 176 V188 M106 176 V188 M118 176 V188' },
    { d: 'M86 148 L82 134 L96 144 M116 148 L122 134 L124 148' },
    { d: 'M80 152 q-12 -6 -16 -18' },
  ],

  // A mole's burrow opening in the ground, with a bauble hung below.
  'miss-merry-christmas': [
    { d: 'M4 96 H156', role: 'ambient' },
    { d: 'M36 96 C44 66 76 60 96 96' },
    { d: ellipse(66, 94, 14, 6) },
    {
      d: 'M66 100 C66 126 100 130 108 152 C114 168 106 180 92 182',
      role: 'ambient',
      dashed: true,
    },
    {
      d: dots([
        [24, 106],
        [40, 120],
        [122, 110],
        [136, 128],
        [30, 150],
        [132, 160],
      ]),
      role: 'ambient',
    },
    { d: circle(96, 158, 26), role: 'accent' },
    { d: 'M88 134 H104 V126 H88 Z', role: 'accent' },
    { d: 'M96 126 q0 -10 -8 -10' },
    { d: 'M74 150 q22 10 44 0', role: 'ambient' },
  ],

  // A shovel driven into cracked ground, and the sand it has dug out.
  'toto': [
    { d: 'M4 150 H156' },
    {
      d: 'M20 150 l8 14 l-4 12 M56 150 l-6 10 l8 16 M112 150 l6 12 l-6 16 M142 150 l-8 20',
      role: 'ambient',
    },
    { d: 'M74 22 H98 M86 22 L78 124' },
    { d: 'M64 122 L92 126 L88 156 Q78 166 66 154 Z', role: 'accent' },
    { d: 'M100 150 C110 126 138 126 150 150' },
    {
      d: dots([
        [112, 138],
        [124, 132],
        [136, 140],
        [118, 146],
      ]),
      role: 'ambient',
    },
    shadow(80, 186, 50),
  ],

  // A stepped pyramid casino on a lake, a golden crocodile lying on its roof.
  'rainbase': [
    { d: 'M26 150 L62 98 H98 L134 150' },
    { d: 'M40 130 H120 M52 114 H108', role: 'soft' },
    { d: 'M72 150 V134 a8 8 0 0 1 16 0 V150' },
    {
      d: 'M24 90 L50 84 L56 80 q5 -6 10 0 q5 -6 10 0 q5 -6 10 0 q5 -6 10 0 q5 -6 10 0 C120 82 134 88 150 98 C134 96 122 94 110 92 C94 97 70 97 52 92 L24 90',
      role: 'accent',
    },
    { d: 'M64 95 l-6 5 M100 95 l6 5', role: 'accent' },
    { d: 'M30 90 l2 -2 l2 2 l2 -2 l2 2 l2 -2 l2 2', role: 'soft' },
    { d: dot(47, 87), role: 'soft' },
    { d: 'M4 150 H156', role: 'ambient' },
    ...SEA,
  ],

  // A crab's great pincer rising out of a river, the water closing over it.
  'hasami': [
    { d: 'M62 160 C60 140 64 124 72 112 M92 160 C92 142 90 128 86 116' },
    {
      d: 'M72 112 C44 96 38 58 58 30 C62 58 76 78 98 86 C104 70 102 54 110 40 C126 66 118 104 86 116 Z',
      role: 'accent',
    },
    {
      d: 'M62 50 l6 4 M66 62 l7 3 M72 74 l7 2 M106 56 l-6 4 M106 70 l-7 3',
      role: 'ambient',
    },
    { d: 'M72 132 H90 M68 146 H92', role: 'soft' },
    ...SEA,
  ],

  // A baseball with a fuse in it, the spark running down to the stitches.
  'lassoo': [
    { d: circle(76, 116, 42) },
    {
      d: 'M48 86 C62 102 62 130 48 146 M104 86 C90 102 90 130 104 146',
      role: 'accent',
    },
    {
      d: 'M54 96 l6 -2 M58 110 h6 M58 124 h6 M54 138 l6 2 M98 96 l-6 -2 M94 110 h-6 M94 124 h-6 M98 138 l-6 2',
      role: 'ambient',
    },
    { d: 'M100 80 L110 70 L118 78 L108 88 Z' },
    { d: 'M114 74 C124 60 118 48 132 40' },
    { d: 'M132 40 l6 -8 M132 40 l9 2 M132 40 l2 -10', role: 'soft' },
    shadow(76, 176, 36),
  ],

  // Four small bottles of the water that gives five minutes, on a tray.
  'tsumegeri-guards': [
    ...[28, 60, 92, 124].flatMap((x): Stroke[] => {
      return [
        { d: `M${String(x)} 150 V112 q0 -8 6 -12 V84 h8 v16 q6 4 6 12 V150 Z` },
        { d: `M${String(x + 6)} 84 V74 h8 v10`, role: 'soft' },
        { d: `M${String(x)} 124 H${String(x + 20)}`, role: 'accent' },
      ]
    }),
    { d: 'M16 150 H148 L140 162 H24 Z' },
    shadow(82, 176, 60),
  ],

  // A long rifle with a scope, and two dice thrown beneath it.
  'mr-7': [
    { d: 'M10 86 H100 V94 H10 Z' },
    { d: 'M100 82 H124 V98 H100 Z' },
    { d: 'M124 84 L152 92 V116 L124 98' },
    { d: 'M56 68 H100 V78 H56 Z M64 78 V82 M92 78 V82', role: 'accent' },
    { d: 'M108 98 q0 10 8 10 q4 0 4 -10', role: 'soft' },
    { d: 'M34 134 H62 V162 H34 Z' },
    { d: 'M84 142 L110 134 L118 160 L92 168 Z' },
    {
      d: dots([
        [41, 141],
        [48, 148],
        [55, 155],
        [93.5, 147],
        [105, 143.5],
        [97, 158.5],
        [108.5, 155],
      ]),
    },
  ],

  // A lily pad on the water, and a pistol laid across it with round bullets.
  'miss-fathers-day': [
    {
      d: 'M80 152 L100 130 C128 132 142 142 140 154 C136 172 24 174 20 154 C18 140 40 130 66 130 Z',
    },
    { d: 'M80 152 L48 142 M80 152 L60 168 M80 152 L112 166', role: 'ambient' },
    { d: 'M30 98 H104 V110 H30 Z', role: 'accent' },
    { d: 'M30 98 q-10 6 0 12', role: 'accent' },
    { d: 'M88 110 L96 134 H110 L104 110' },
    {
      d: `${circle(124, 90, 5)} ${circle(138, 100, 5)} ${circle(126, 110, 5)}`,
      role: 'soft',
    },
    ...SEA.slice(1),
  ],

  // A cigarette burning above three ships lined up across the sea: the
  // blockade of every dock in Alabasta at 128.
  'hina': [
    { d: 'M30 82 L118 50 L122 62 L34 94 Z' },
    { d: 'M106 54 L110 66', role: 'ambient' },
    { d: 'M128 46 C120 34 130 28 124 18', role: 'ambient', dashed: true },
    {
      d: 'M14 156 h32 l-6 10 h-20z M64 156 h32 l-6 10 h-20z M114 156 h32 l-6 10 h-20z',
    },
    { d: 'M30 156 V120 M80 156 V120 M130 156 V120' },
    {
      d: 'M30 122 L44 150 H30 M80 122 L94 150 H80 M130 122 L144 150 H130',
      role: 'accent',
    },
    ...SEA.slice(1),
  ],

  // A cooking pot steaming on the stove, a ladle standing in it.
  'terracotta': [
    { d: 'M36 110 H124 V158 Q124 178 104 178 H56 Q36 178 36 158 Z' },
    { d: 'M30 110 H130' },
    { d: 'M36 124 H24 V140 H36 M124 124 H136 V140 H124' },
    { d: 'M36 144 H124', role: 'ambient', dashed: true },
    { d: 'M104 108 L126 42 l8 2' },
    {
      d: 'M58 96 C50 82 66 74 58 58 M80 96 C72 82 88 74 80 58',
      role: 'accent',
    },
    shadow(80, 188, 50),
  ],

  // An open book, a flower growing out of its spine.
  'nico-robin': [
    { d: 'M28 156 Q54 146 80 156 Q106 146 132 156' },
    { d: 'M28 104 Q54 94 80 104 Q106 94 132 104' },
    { d: 'M28 104 V156 M132 104 V156 M80 104 V156' },
    {
      d: 'M40 118 q18 -6 32 0 M40 130 q18 -6 32 0 M88 118 q18 -6 32 0 M88 130 q18 -6 32 0',
      role: 'ambient',
    },
    { d: 'M80 104 V64' },
    { d: 'M80 84 q-12 -2 -14 -12' },
    ...[0, 72, 144, 216, 288].map((angle): Stroke => {
      return {
        d: 'M80 64 q-9 -12 0 -22 q9 10 0 22',
        role: 'accent',
        transform: `rotate(${String(angle)} 80 64)`,
      }
    }),
    { d: dot(80, 64), role: 'accent' },
  ],
} satisfies Drawings

/** The records of this stretch drawn again, from the episode the story changes them. */
export const alabastaRedrawn: Redrawings = {
  // The cap of the two years, worn over the old hat: a round crown ringed
  // with dots, the cross on a disc at the front, the old brim showing under
  // it, flaps buckled at the sides and the antlers out through them. The far
  // side is hatched. He walks Sabaody eating a Grand Bun at 517 (ch. 598).
  'tony-tony-chopper': [
    {
      episode: 517,
      chapter: 598,
      value: [
        { d: 'M36 124 C32 76 54 48 80 48 C106 48 128 76 124 124' },
        {
          d: (
            [
              [51, 104],
              [55, 90],
              [62, 78],
              [70, 71],
              [80, 68],
              [90, 71],
              [98, 78],
              [105, 90],
              [109, 104],
            ] satisfies [number, number][]
          )
            .map(([x, y]) => circle(x, y, 1.6))
            .join(' '),
          role: 'soft',
        },
        { d: circle(80, 90, 17), role: 'accent' },
        { d: 'M72 82 l16 16 M88 82 l-16 16', role: 'accent' },
        {
          d: 'M36 120 Q80 100 124 120 L127 131 Q80 112 33 131 Z',
          role: 'accent',
        },
        {
          d: 'M40 130 C38 140 40 148 44 154 M118 130 C120 140 118 148 114 154',
        },
        {
          d: 'M40 154 l8 -2 l2 8 l-8 2z M110 152 l8 2 l-2 8 l-8 -2z',
          role: 'soft',
        },
        {
          d: 'M37 102 C22 98 12 84 14 58 M22 96 l-14 2 M16 80 l-12 -6 M14 66 l-6 -12 M15 58 l6 -12',
        },
        {
          d: 'M123 102 C138 98 148 84 146 58 M138 96 l14 2 M144 80 l12 -6 M146 66 l6 -12 M145 58 l-6 -12',
        },
        {
          d: 'M104 56 l-5 6 M113 64 l-6 7 M119 75 l-6 7 M122 88 l-5 7 M124 101 l-4 6',
          role: 'ambient',
        },
        shadow(80, 176, 44),
      ],
    },
  ],
}
