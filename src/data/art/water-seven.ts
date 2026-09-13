import { circle, ellipse, dots, star, SEA, shadow } from './primitives'
import type { Drawings } from './stroke'

/** The drawings of the records filed in the water seven stretch of the route. */
export const waterSevenArt = {
  // A long low island with three trees stretched out of shape above it.
  'long-ring-long-land': [
    { d: 'M-4 148 C34 132 126 132 164 148' },
    { d: 'M40 142 V62' },
    { d: 'M74 140 V52' },
    { d: 'M112 144 V76' },
    { d: ellipse(40, 58, 20, 7), role: 'accent' },
    { d: ellipse(74, 48, 24, 8), role: 'accent' },
    { d: ellipse(112, 72, 18, 6), role: 'accent' },
    { d: 'M18 144 h14 M130 146 h12', role: 'ambient' },
    ...SEA.slice(1),
  ],

  // A pennant on its pole, a fox's tail curled across the cloth.
  'foxy': [
    { d: 'M40 178 V36' },
    { d: circle(40, 32, 4) },
    { d: 'M40 40 H132 L118 66 L132 92 H40' },
    {
      d: 'M52 86 C58 58 80 46 112 48 C106 60 98 70 84 76 C72 82 60 84 52 86z',
      role: 'accent',
    },
    { d: 'M98 52 q8 -3 14 -4', role: 'accent' },
    { d: 'M44 108 h8 M44 122 h8', role: 'ambient' },
    shadow(60, 184, 30),
  ],

  // A majorette's baton with its ribbon streaming off the end.
  'porche': [
    { d: 'M46 150 L110 62' },
    { d: circle(42, 156, 9) },
    { d: circle(114, 56, 9) },
    {
      d: 'M118 48 C134 44 142 58 134 70 C126 82 108 82 102 92 C96 102 102 114 114 114',
      role: 'accent',
    },
    { d: 'M114 114 c10 0 15 8 11 16', role: 'accent' },
    { d: 'M62 134 l7 5 M76 118 l7 5', role: 'ambient' },
    shadow(64, 178, 28),
  ],

  // A pair of heavy gauntlets, knuckles down.
  'hamburg': [
    { d: 'M22 42 h52 v18 h-52z' },
    { d: 'M26 60 h44 v34 a22 22 0 0 1 -44 0z' },
    { d: 'M30 104 q10 10 20 0 q10 10 18 -2', role: 'accent' },
    { d: 'M86 42 h52 v18 h-52z' },
    { d: 'M90 60 h44 v34 a22 22 0 0 1 -44 0z' },
    { d: 'M94 104 q10 10 20 0 q10 10 18 -2', role: 'accent' },
    { d: 'M34 74 h28 M98 74 h28', role: 'ambient' },
    shadow(80, 142, 56),
  ],

  // A bicycle standing on a sea that has frozen under it.
  'kuzan': [
    { d: circle(44, 114, 24) },
    { d: circle(118, 114, 24) },
    { d: 'M44 114 L76 70 L82 114 L106 74 L76 70 M44 114 H82 M106 74 L118 114' },
    { d: 'M68 68 h18' },
    { d: 'M106 74 l-12 -6 M106 74 l10 4' },
    { d: 'M4 140 H156', role: 'ambient' },
    {
      d: 'M28 142 l8 16 M64 140 l-6 18 M98 142 l10 16 M130 140 l-8 14',
      role: 'accent',
    },
    { d: 'M40 156 h26 M98 158 h24', role: 'accent' },
    ...SEA.slice(2),
  ],

  // Arches over the water, a tower behind, a gondola underneath.
  'water-seven': [
    {
      d: 'M12 148 V100 a20 20 0 0 1 40 0 V148 M56 148 V100 a20 20 0 0 1 40 0 V148 M100 148 V100 a20 20 0 0 1 40 0 V148',
    },
    { d: 'M4 148 H156' },
    { d: 'M66 76 h28 v-30 l-6 -8 h-16 l-6 8z M76 32 h8 v-14 h-8z' },
    {
      d: 'M22 122 q6 -4 12 0 t12 0 M66 122 q6 -4 12 0 t12 0 M110 122 q6 -4 12 0 t12 0',
      role: 'accent',
    },
    { d: 'M60 170 q20 8 40 0 M62 170 l-6 -6 M98 170 l6 -6', role: 'accent' },
    ...SEA.slice(2),
  ],

  // A shipwright's coat, and the mouse that rides in its pocket.
  'iceburg': [
    { d: 'M36 46 V172 H124 V46' },
    { d: 'M36 46 L62 38 L80 86 L98 38 L124 46' },
    { d: 'M80 86 V172', role: 'ambient' },
    {
      d: dots([
        [88, 104],
        [88, 128],
        [88, 152],
      ]),
      role: 'ambient',
    },
    { d: 'M46 96 h34 v30 h-34z' },
    { d: 'M50 96 C50 72 78 72 78 96', role: 'accent' },
    { d: `${circle(55, 76, 6)} ${circle(73, 76, 6)}`, role: 'accent' },
    { d: 'M80 100 c12 -2 16 -14 8 -18 c-5 -2 -8 2 -6 6', role: 'accent' },
  ],

  // A coil of rope tied off in a knot, a cigar laid beside it.
  'paulie': [
    { d: circle(68, 94, 42) },
    { d: circle(68, 94, 31) },
    { d: circle(68, 94, 20) },
    { d: 'M26 94 q-12 2 -14 14 M110 94 q12 -2 14 -14', role: 'ambient' },
    {
      d: 'M40 150 c-10 6 -6 18 6 16 c10 -2 10 -14 20 -14 c10 0 10 12 20 12 c12 0 14 -12 4 -16',
      role: 'accent',
    },
    { d: 'M108 166 h36 v9 h-36z' },
    { d: 'M144 170 q10 -2 12 -10', role: 'ambient', dashed: true },
    shadow(66, 188, 42),
  ],

  // A bottle of liquor and a glass on the station master's desk.
  'kokoro': [
    { d: 'M66 62 h20 v14 q12 8 12 22 V150 H54 V98 q0 -14 12 -22z' },
    { d: 'M64 56 h24 v6 h-24z' },
    { d: 'M54 118 q22 6 44 0', role: 'ambient' },
    { d: 'M58 122 h36 v22 h-36z', role: 'accent' },
    { d: 'M18 150 H152' },
    { d: 'M28 150 V182 M142 150 V182' },
    { d: 'M110 136 h20 l-3 14 h-14z' },
    shadow(78, 190, 44),
  ],

  // A fishing rod, and the paw print of the animal that follows it.
  'chimney': [
    { d: 'M20 172 L104 52' },
    { d: 'M26 164 l10 6 M34 152 l10 6', role: 'ambient' },
    { d: circle(44, 132, 9) },
    { d: 'M104 52 q22 22 18 44', role: 'ambient', dashed: true },
    { d: ellipse(116, 154, 17, 12), role: 'accent' },
    {
      d: `${circle(100, 134, 5)} ${circle(112, 128, 5)} ${circle(125, 131, 5)} ${circle(134, 141, 5)}`,
      role: 'accent',
    },
    shadow(60, 186, 34),
  ],

  // A carpenter's square with a plane resting along its arm.
  'kaku': [
    { d: 'M28 30 h16 v96 h86 v16 H28z' },
    {
      d: 'M34 46 h10 M34 62 h10 M34 78 h10 M34 94 h10 M60 132 v10 M78 132 v10 M96 132 v10 M114 132 v10',
      role: 'ambient',
    },
    { d: 'M56 118 H140 V96 H56z' },
    { d: 'M96 96 L108 66 L118 70 L106 96', role: 'accent' },
    { d: 'M116 96 C112 68 138 60 143 78 C146 90 137 96 130 96' },
    { d: 'M66 96 q-2 -13 8 -13 q10 0 8 13' },
    shadow(84, 158, 54),
  ],

  // A top hat with a pigeon settled on the crown.
  'rob-lucci': [
    { d: 'M48 148 h64 V76 H48z' },
    { d: 'M24 148 h112 v12 H24z' },
    { d: 'M48 98 h64', role: 'ambient' },
    {
      d: 'M56 72 C56 56 70 48 86 50 C98 52 104 60 100 68 C96 76 68 80 56 72 Z',
      role: 'accent',
    },
    {
      d: `M98 56 q4 -6 6 -9 ${circle(104, 44, 9)} M113 44 l9 3 l-9 3`,
      role: 'accent',
    },
    { d: 'M56 66 l-16 -9 l2 13z M68 62 q14 9 24 2', role: 'accent' },
    shadow(80, 176, 56),
  ],

  // A pair of glasses above a bar of soap, and the bubbles off it.
  'kalifa': [
    { d: circle(48, 64, 20) },
    { d: circle(112, 64, 20) },
    { d: 'M68 64 q12 -8 24 0' },
    { d: 'M28 64 q-16 -2 -22 10 M132 64 q16 -2 22 10' },
    { d: 'M46 130 h68 v34 h-68z' },
    {
      d: 'M46 130 l10 -10 h68 l-10 10 M114 130 l10 -10 v34 l-10 10',
      role: 'ambient',
    },
    {
      d: `${circle(58, 106, 8)} ${circle(80, 96, 6)} ${circle(98, 110, 10)}`,
      role: 'accent',
    },
    shadow(80, 180, 48),
  ],

  // A bar counter, and a door standing open in the air above it.
  'blueno': [
    { d: 'M16 120 H144 v12 H16z' },
    { d: 'M26 132 V174 H134 V132' },
    { d: 'M26 152 H134', role: 'ambient' },
    { d: 'M118 98 h18 l-3 22 h-12z' },
    { d: 'M28 92 h12 v28 h-12z M31 92 v-8 h6 v8' },
    { d: 'M52 24 h60 v96 H52z', role: 'accent' },
    { d: circle(100, 74, 3), role: 'accent' },
    {
      d: 'M52 24 q-8 -6 -6 -14 M112 24 q8 -6 6 -14',
      role: 'ambient',
      dashed: true,
    },
    shadow(76, 186, 56),
  ],

  // Two swords crossed, each one cut off square at the point.
  'kiwi-and-mozu': [
    {
      d: 'M74 36 h12 v84 h-12z',
      role: 'accent',
      transform: 'rotate(-26 80 104)',
    },
    { d: 'M62 120 h36 v7 h-36z', transform: 'rotate(-26 80 104)' },
    { d: 'M76 127 v28 M73 155 h14 v10 h-14z', transform: 'rotate(-26 80 104)' },
    {
      d: 'M74 36 h12 v84 h-12z',
      role: 'accent',
      transform: 'rotate(26 80 104)',
    },
    { d: 'M62 120 h36 v7 h-36z', transform: 'rotate(26 80 104)' },
    { d: 'M76 127 v28 M73 155 h14 v10 h-14z', transform: 'rotate(26 80 104)' },
    shadow(80, 184, 54),
  ],

  // A headband with its tails loose, and a rocket launcher below it.
  'zambai': [
    { d: 'M22 56 h116 v18 H22z' },
    { d: 'M138 58 c16 4 18 16 8 24 M138 72 c18 8 16 22 4 28', role: 'soft' },
    { d: 'M30 116 h84 v26 H30z' },
    { d: 'M114 116 l24 13 l-24 13z', role: 'accent' },
    { d: 'M52 142 q-2 16 -14 20 M40 116 v-12 h16 v12' },
    { d: 'M22 122 q-14 6 -18 20', role: 'ambient', dashed: true },
    shadow(74, 180, 52),
  ],

  // A wrench and a bolt with a star head.
  'franky': [
    { d: 'M36 164 L96 104 M44 172 L104 112 M36 164 L44 172' },
    { d: 'M96 104 a20 20 0 1 1 28 -28 l-8 8 a6 6 0 0 0 -8 8 L104 112' },
    { d: star(124, 54, 14, 7), role: 'accent' },
    { d: circle(124, 54, 4), role: 'accent' },
    shadow(70, 182, 30),
  ],

  // A blueprint with a hull drawn on it, and a shipwright's mallet below.
  'tom': [
    { d: 'M24 26 h108 v106 H24z' },
    { d: 'M38 44 h40 M38 56 h64 M38 120 h56', role: 'ambient' },
    { d: 'M44 92 h72 M50 92 q30 30 60 0', role: 'accent' },
    { d: 'M80 92 V62 M80 62 l16 6 l-16 6', role: 'accent' },
    { d: 'M22 158 h78 v12 H22z' },
    { d: 'M100 138 h32 v52 h-32z' },
    { d: 'M100 150 h32 M100 178 h32', role: 'ambient' },
  ],

  // A telephone snail, and a sword with a trunk curling off the guard.
  'spandam': [
    { d: circle(52, 112, 26) },
    { d: 'M52 112 c-8 -4 -6 -16 4 -18 c14 -2 20 10 16 20', role: 'ambient' },
    {
      d: 'M18 150 q2 -16 22 -16 h50 q10 0 10 8 q0 8 -10 8z M90 134 v-12 q0 -8 8 -8',
    },
    { d: 'M32 84 q20 -16 42 0 l-6 10 q-14 -10 -30 0z', role: 'accent' },
    { d: 'M120 34 h14 v92 h-14z' },
    { d: 'M108 126 h38 v8 h-38z' },
    { d: 'M124 134 v26 M120 160 h22 v9 h-22z' },
    { d: 'M146 130 c16 6 20 22 8 30 c-8 5 -16 -3 -11 -11' },
    shadow(70, 182, 54),
  ],

  // A wolf's paw print over a knotted martial arts sash.
  'jabra': [
    { d: 'M12 116 h136 v30 H12z' },
    { d: 'M62 116 l36 30 M98 116 l-36 30' },
    { d: 'M68 146 l-10 34 h18z M92 146 l10 34 h-18z' },
    { d: ellipse(80, 76, 22, 17), role: 'accent' },
    {
      d: `${circle(56, 46, 7)} ${circle(72, 36, 7)} ${circle(90, 36, 7)} ${circle(106, 48, 7)}`,
      role: 'accent',
    },
    { d: 'M20 124 h12 M128 124 h12', role: 'ambient' },
  ],

  // A ringed kabuki staff with two lengths of hair wound round it.
  'kumadori': [
    { d: 'M80 176 V52' },
    { d: 'M66 52 q14 -24 28 0z' },
    { d: `${circle(70, 40, 6)} ${circle(80, 34, 6)} ${circle(90, 40, 6)}` },
    {
      d: 'M80 62 c-22 8 -22 24 0 32 c22 8 22 24 0 32 c-22 8 -22 24 0 32',
      role: 'accent',
    },
    {
      d: 'M80 62 c22 8 22 24 0 32 c-22 8 -22 24 0 32 c22 8 22 24 0 32',
      role: 'accent',
    },
    { d: 'M80 158 q-14 10 -18 22 M80 158 q14 10 18 22', role: 'soft' },
    shadow(80, 190, 32),
  ],

  // A round owl of a body with a zip run down the front of it.
  'fukurou': [
    { d: ellipse(80, 90, 50, 60) },
    { d: 'M56 42 l6 -16 l10 12 M104 42 l-6 -16 l-10 12' },
    { d: 'M32 96 q-16 16 -6 34' },
    { d: 'M128 96 q16 16 6 34' },
    { d: 'M66 148 l-8 16 h18z M94 148 l8 16 h-18z' },
    { d: 'M80 44 V134', role: 'accent' },
    {
      d: 'M71 58 h18 M71 72 h18 M71 86 h18 M71 100 h18 M71 114 h18',
      role: 'accent',
    },
    { d: 'M74 134 h12 v10 h-12z M80 144 v12', role: 'accent' },
    shadow(80, 178, 46),
  ],

  // A barred gate with a giant's club leaning on either side of it.
  'oimo-and-kashi': [
    { d: 'M40 62 h80 v16 H40z' },
    { d: 'M40 54 h80 v8 H40z' },
    { d: 'M46 78 V168 M114 78 V168' },
    { d: 'M64 78 V168 M80 78 V168 M96 78 V168', role: 'ambient' },
    { d: 'M4 168 H156', role: 'ambient' },
    {
      d: 'M14 176 C22 142 28 118 36 98 C42 82 62 82 62 100 C62 116 44 148 28 180z',
      role: 'accent',
    },
    {
      d: 'M146 176 C138 142 132 118 124 98 C118 82 98 82 98 100 C98 116 116 148 132 180z',
      role: 'accent',
    },
  ],

  // A rice cracker and a cannonball, side by side, the fuse already lit.
  'monkey-d-garp': [
    { d: circle(48, 110, 32) },
    { d: 'M18 102 q30 10 60 0 M18 118 q30 10 60 0' },
    {
      d: dots([
        [38, 92],
        [58, 96],
        [34, 130],
        [56, 128],
      ]),
      role: 'ambient',
    },
    { d: circle(114, 114, 28), role: 'accent' },
    { d: 'M114 86 c4 -16 14 -22 26 -24', role: 'accent' },
    {
      d: 'M144 56 l4 -8 M136 56 l-4 -8 M150 62 l8 -2 M132 66 l-8 -2',
      role: 'accent',
    },
    shadow(80, 158, 62),
  ],

  // A brigantine with a lion's head at the prow.
  'thousand-sunny': [
    { d: 'M24 120 L34 154 Q82 172 132 154 L142 120' },
    { d: 'M24 120 H142' },
    { d: 'M38 140 Q82 152 128 140', role: 'ambient' },
    { d: 'M82 120 V34' },
    { d: 'M52 46 H112' },
    { d: 'M82 34 l16 6 l-16 6' },
    { d: 'M54 48 Q82 40 110 48 L114 102 Q82 112 50 102 Z' },
    { d: circle(22, 104, 13), role: 'accent' },
    {
      d: 'M22 91 v-9 M12 95 l-7 -6 M9 104 h-8 M12 113 l-7 6 M22 117 v9',
      role: 'accent',
    },
    ...SEA.slice(1),
  ],
} satisfies Drawings
