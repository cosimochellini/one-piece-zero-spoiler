import { circle, ellipse, dot, dots, SEA, shadow } from './primitives'
import type { Drawings, Stroke } from './stroke'

/** The drawings of the records filed in the alabasta stretch of the route. */
export const alabastaArt = {
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
  'whisky-peak': [
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
  'little-garden': [
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

  // A wax candelabra whose two arms curl out of the stem, three candles lit.
  'mr-3': [
    { d: 'M80 172 V54' },
    { d: 'M54 172 q26 10 52 0 M58 164 q22 8 44 0' },
    { d: 'M80 108 C52 108 44 92 44 74 V58' },
    { d: 'M80 128 C110 128 118 110 118 90 V70' },
    { d: 'M72 54 h16 v-10 h-16z M36 58 h16 v-10 h-16z M110 70 h16 v-10 h-16z' },
    {
      d: 'M80 44 c-6 -8 2 -12 0 -22 c8 10 12 12 6 22z M44 48 c-5 -7 2 -10 0 -18 c7 8 10 10 5 18z M118 60 c-5 -7 2 -10 0 -18 c7 8 10 10 5 18z',
      role: 'accent',
    },
    { d: 'M60 112 q2 8 -2 12 M96 132 q2 8 -2 12', role: 'ambient' },
    shadow(80, 184, 34),
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

  // A castle on a drum-shaped peak, with the snow coming down.
  'drum-island': [
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

  // A top hat with a cross, and antlers coming out from under the brim.
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

  // An iron shackle ring, and a cigarette burning beside it.
  'hina': [
    { d: circle(70, 112, 44), role: 'accent' },
    { d: circle(70, 112, 34), role: 'accent' },
    { d: 'M26 104 H14 V120 H26' },
    { d: 'M56 152 H84 V174 H56 Z' },
    { d: `${circle(70, 160, 4)} M70 164 V172` },
    {
      d: dots([
        [70, 72],
        [70, 152],
        [36, 112],
        [104, 112],
      ]),
      role: 'ambient',
    },
    { d: 'M112 58 L148 40 L152 50 L116 68 Z' },
    { d: 'M120 62 L124 54', role: 'ambient' },
    { d: 'M154 34 C146 22 156 16 150 6', role: 'ambient', dashed: true },
    shadow(70, 188, 44),
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
    ...[0, 72, 144, 216, 288].map((angle): Stroke => ({
      d: 'M80 64 q-9 -12 0 -22 q9 10 0 22',
      role: 'accent',
      transform: `rotate(${String(angle)} 80 64)`,
    })),
    { d: dot(80, 64), role: 'accent' },
  ],
} satisfies Drawings
