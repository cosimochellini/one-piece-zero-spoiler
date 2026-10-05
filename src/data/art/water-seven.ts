import {
  circle,
  dots,
  ellipse,
  house,
  SEA,
  shadow,
  star,
} from '~/lib/svg/primitives'

import type { Drawings, Redrawings } from './stroke'

/** The drawings of the records filed in the water seven stretch of the route. */
export const waterSevenArt = {
  // A raft washed up on a beach, a great tree of books on the shore behind.
  'jaguar-d-saul': [
    { d: 'M-4 150 C40 138 120 138 164 150' },
    { d: 'M100 142 C102 110 100 80 96 60 M120 142 C118 110 120 80 124 60' },
    { d: circle(110, 44, 30), role: 'soft' },
    { d: 'M24 136 L70 128 L72 136 L26 144 Z', role: 'accent' },
    { d: 'M36 134 l2 8 M48 132 l2 8 M60 130 l2 8', role: 'accent' },
    ...SEA.slice(1),
  ],

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
  'water-seven-arc': [
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

  // A top hat with a pigeon settled on the crown. The CP0 mask is set beside
  // it from 746, in `waterSevenRedrawn`.
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

  // A wrench and a bolt with a star head. The forearm of the two years is
  // drawn from 517, in `waterSevenRedrawn`.
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

  // A ship going down by the bow under a cannonball: the Judicial Ship he
  // has raided, and the cannon salute that hits him on arrival (ep. 249).
  'spandam': [
    { d: 'M30 128 L124 104 L118 134 L42 150z' },
    { d: 'M76 118 L64 50' },
    { d: 'M64 50 L96 60 L70 76', role: 'accent' },
    { d: circle(128, 42, 10), role: 'accent' },
    { d: 'M142 28 l8 -6 M144 40 h12 M142 54 l8 6', role: 'soft' },
    ...SEA.slice(1),
  ],

  // A round island hanging over a hole in the sea, the water pouring off its
  // rim, a tower in the middle, the sun overhead, and a train on the track
  // coming in.
  'enies-lobby-arc': [
    { d: ellipse(80, 112, 58, 12) },
    {
      d: 'M22 114 C24 130 30 140 34 150 M138 114 C136 130 130 140 126 150',
      role: 'accent',
    },
    { d: 'M46 124 v18 M62 126 v22 M98 126 v22 M114 124 v18', role: 'soft' },
    { d: 'M70 108 V58 H90 V108 M66 58 L80 40 L94 58' },
    { d: 'M76 72 h8 M76 88 h8', role: 'ambient' },
    { d: circle(132, 34, 10), role: 'accent' },
    {
      d: 'M132 18 v-6 M148 34 h6 M143 23 l4 -4 M143 45 l4 4 M116 34 h-6',
      role: 'ambient',
    },
    { d: 'M-2 104 h16 v-12 h-16z M14 98 h6 l4 6' },
    { d: 'M-4 108 H22', role: 'ambient', dashed: true },
    ...SEA.slice(1),
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

  // Patched roofs and a scaffold on the waterfront, and the sail of a
  // warship on the horizon behind them.
  'post-enies-lobby': [
    { d: 'M4 96 H156', role: 'ambient' },
    { d: 'M112 96 l4 8 h28 l4 -8z M130 96 V62' },
    { d: 'M116 68 H144 L140 90 H120z', role: 'accent' },
    { d: 'M8 176 V128 L28 112 L48 128 V176 M48 176 V136 L70 118 L92 136 V176' },
    { d: 'M20 134 h10 v8 h-10z M62 140 h12 v8 h-12z', role: 'soft' },
    {
      d: 'M100 176 V120 M128 176 V120 M100 140 H128 M100 160 H128 M100 120 L128 140 M100 140 L128 160',
      role: 'accent',
    },
    { d: 'M4 176 H156' },
    ...SEA.slice(2),
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
  // Two bamboo stilts rising out of the grass until their tops vanish into a cloud.
  'tonjit': [
    { d: 'M58 184 V44 M102 184 V44' },
    {
      d: 'M54 160 h8 M54 128 h8 M54 96 h8 M54 64 h8 M98 150 h8 M98 118 h8 M98 86 h8 M98 56 h8',
      role: 'soft',
    },
    { d: 'M58 170 h-12 M102 170 h12' },
    {
      d: 'M30 54 q-14 0 -10 -14 q4 -12 18 -10 q8 -16 28 -10 q14 -12 30 -2 q18 -2 18 14 q14 6 6 18 q-6 6 -16 4z',
      role: 'accent',
    },
    { d: 'M14 186 H146', role: 'ambient' },
  ],
  // A snail with a microphone grille for a shell, riding on a sparrow's wing.
  'itomimizu': [
    {
      d: 'M20 150 C50 120 100 112 146 124 C120 136 96 140 72 150 C56 156 36 158 20 150z',
    },
    { d: 'M60 146 l14 -16 M84 142 l14 -18 M108 134 l12 -14', role: 'soft' },
    { d: circle(84, 84, 24) },
    { d: 'M72 84 h24 M76 74 h16 M76 94 h16', role: 'accent' },
    { d: 'M54 112 H116 q12 0 12 -10 l-4 -18 M54 112 q-10 0 -8 -10' },
    { d: `M120 84 l4 -18 M112 88 l-2 -20 ${circle(124, 64, 2)}`, role: 'soft' },
    { d: 'M138 62 q8 8 0 16 M148 56 q12 14 0 28', role: 'ambient' },
  ],
  // Two swords crossed at the hilts, spinning inside two sweeping arcs.
  'pickles': [
    { d: 'M44 156 L116 60' },
    { d: 'M116 156 L44 60' },
    { d: 'M50 136 l14 10 M110 136 l-14 10' },
    { d: 'M44 156 l-8 10 M116 156 l8 10', role: 'soft' },
    {
      d: 'M28 108 A52 52 0 0 1 80 52 M132 100 A52 52 0 0 1 80 156',
      role: 'accent',
    },
    { d: 'M22 90 l-6 -4 M138 118 l6 4', role: 'accent' },
    shadow(80, 186, 40),
  ],
  // Two giant pans clapped together face to face, their handles out to the sides.
  'big-pan': [
    { d: ellipse(68, 100, 10, 44) },
    { d: ellipse(92, 100, 10, 44) },
    { d: 'M58 96 H14 V104 H58' },
    { d: 'M102 96 H146 V104 H102' },
    {
      d: 'M80 44 V30 M68 48 l-6 -12 M92 48 l6 -12 M80 156 V170 M68 152 l-6 12 M92 152 l6 12',
      role: 'accent',
    },
    shadow(80, 186, 50),
  ],
  // A frog's webbed foot planted on a sea-train rail, a sumo topknot above it.
  'yokozuna': [
    { d: 'M4 150 H156' },
    {
      d: 'M20 150 v8 M50 150 v8 M80 150 v8 M110 150 v8 M140 150 v8',
      role: 'soft',
    },
    {
      d: 'M80 146 C60 146 40 138 30 124 C44 126 50 118 48 108 C60 116 66 110 68 98 C74 108 86 108 92 98 C94 110 100 116 112 108 C110 118 116 126 130 124 C120 138 100 146 80 146z',
    },
    { d: 'M70 100 C66 76 70 60 80 52 C90 60 94 76 90 100' },
    { d: 'M70 36 q10 -16 20 0 q-10 8 -20 0 M80 30 V18', role: 'accent' },
    ...SEA.slice(1),
  ],

  // A great fountain at the top of a stepped city, its water running down the terraces into the sea.
  'water-seven': [
    { d: 'M80 64 V28', role: 'accent' },
    {
      d: 'M80 28 C68 20 56 30 52 56 M80 28 C92 20 104 30 108 56',
      role: 'accent',
    },
    { d: 'M80 36 C74 34 68 42 66 56 M80 36 C86 34 92 42 94 56', role: 'soft' },
    { d: 'M46 58 H114 L106 70 H54z' },
    { d: 'M14 152 V124 H32 V104 H50 V80 H110 V104 H128 V124 H146 V152' },
    { d: 'M66 72 V150 M94 72 V150', role: 'ambient', dashed: true },
    { d: 'M40 124 V150 M120 124 V150', role: 'ambient', dashed: true },
    {
      d: dots([
        [58, 92],
        [80, 92],
        [102, 92],
        [40, 114],
        [120, 114],
        [24, 136],
        [136, 136],
        [80, 116],
      ]),
      role: 'soft',
    },
    ...SEA,
  ],

  // A steam locomotive on the sea, a paddlewheel at its side and smoke from its funnel.
  'puffing-tom': [
    { d: 'M44 108 H118 V140 H44 C32 140 28 126 30 120 C32 112 38 108 44 108z' },
    { d: 'M118 88 H146 V140 H118z M124 96 h16 v14 h-16z' },
    { d: 'M58 108 V88 h14 V108 M54 88 h22', role: 'soft' },
    {
      d: 'M66 78 q-8 -8 0 -16 q10 -8 20 -2 q10 -8 18 4',
      role: 'ambient',
      dashed: true,
    },
    { d: 'M30 132 L16 150 H40', role: 'soft' },
    { d: circle(90, 140, 20), role: 'accent' },
    {
      d: 'M90 120 V160 M70 140 H110 M76 126 L104 154 M104 126 L76 154',
      role: 'accent',
    },
    { d: 'M-4 156 H164', role: 'ambient', dashed: true },
    ...SEA.slice(1),
  ],
  // A pigeon's feather beside a small necktie, and a speech bubble with no mouth under it.
  'hattori': [
    { d: 'M40 172 C52 132 64 92 92 42' },
    {
      d: 'M92 42 C70 52 50 84 46 130 C60 112 72 98 78 88 M92 42 C98 72 86 106 58 138',
    },
    { d: 'M58 112 l-8 -4 M66 96 l-8 -4 M74 80 l-8 -4', role: 'ambient' },
    { d: 'M110 104 h16 l-3 8 h-10z', role: 'accent' },
    { d: 'M113 112 l-5 38 l10 10 l10 -10 l-5 -38', role: 'accent' },
    {
      d: 'M104 16 h44 a8 8 0 0 1 8 8 v16 a8 8 0 0 1 -8 8 h-26 l-10 10 v-10 h-8 a8 8 0 0 1 -8 -8 v-16 a8 8 0 0 1 8 -8z',
      role: 'soft',
    },
    {
      d: dots([
        [116, 32],
        [126, 32],
        [136, 32],
      ]),
      role: 'ambient',
    },
    shadow(84, 184, 44),
  ],
  // A pair of dark glasses with a stubborn curl of hair springing up above them.
  'peepley-lulu': [
    { d: 'M28 96 h40 v14 q0 14 -20 14 q-20 0 -20 -14z' },
    { d: 'M92 96 h40 v14 q0 14 -20 14 q-20 0 -20 -14z' },
    { d: 'M68 100 q12 -6 24 0 M28 98 l-14 -6 M132 98 l14 -6' },
    {
      d: 'M80 82 C80 60 64 58 66 44 C68 30 88 30 90 42 C92 52 80 54 78 46',
      role: 'accent',
    },
    { d: 'M40 86 q40 -12 80 0', role: 'soft' },
    { d: 'M36 102 l8 8 M100 102 l8 8', role: 'ambient' },
    shadow(80, 170, 50),
  ],
  // A government briefcase shut tight, a refused offer crossed out and sticking from its lid.
  'corgi': [
    { d: 'M28 92 h104 v64 h-104z' },
    { d: 'M64 92 v-12 q0 -6 6 -6 h20 q6 0 6 6 v12' },
    { d: 'M74 110 h12 v10 h-12z', role: 'accent' },
    { d: 'M102 92 V44 h28 V92', role: 'soft' },
    { d: 'M108 54 l16 16 M124 54 l-16 16', role: 'accent' },
    { d: 'M28 128 h104', role: 'ambient' },
    shadow(80, 170, 56),
  ],
  // A shipwright's giant mallet standing on its handle, the air around it ringing with a shout.
  'tilestone': [
    { d: 'M80 180 V88' },
    { d: 'M36 52 h88 v36 h-88z' },
    { d: 'M52 52 v36 M108 52 v36', role: 'ambient' },
    { d: 'M74 150 h12 M74 160 h12 M74 170 h12', role: 'soft' },
    { d: 'M24 34 l-10 -10 M80 38 V16 M136 34 l10 -10', role: 'accent' },
    { d: 'M20 64 h-12 M140 64 h12', role: 'accent' },
    shadow(80, 190, 40),
  ],
  // A red boxing glove hanging on its lace from the low ceiling of a train car.
  'jerry': [
    { d: 'M-4 30 H164' },
    { d: 'M80 30 V56' },
    {
      d: 'M56 72 q0 -16 20 -16 h16 q22 0 22 30 v28 q0 16 -16 16 h-26 q-16 0 -16 -16z',
      role: 'accent',
    },
    { d: 'M56 96 q-14 0 -14 14 q0 12 14 12', role: 'accent' },
    { d: 'M62 130 h44 v24 h-44z' },
    { d: 'M70 138 l28 10 M98 138 l-28 10', role: 'ambient' },
    { d: 'M10 60 h24 v30 h-24z M126 60 h24 v30 h-24z', role: 'ambient' },
    shadow(84, 186, 30),
  ],
  // A ramen bowl with noodles spilling over the rim and chopsticks resting in it.
  'wanze': [
    { d: 'M30 100 H130 C128 136 110 154 80 154 C50 154 32 136 30 100 Z' },
    { d: 'M62 154 h36 v8 h-36z' },
    {
      d: 'M44 100 C38 116 52 124 44 142 M60 100 C56 120 68 130 58 152',
      role: 'accent',
    },
    { d: 'M96 98 L136 36 M108 100 L146 42', role: 'accent' },
    {
      d: 'M62 86 c-6 -8 6 -14 0 -22 M82 82 c-6 -8 6 -14 0 -22',
      role: 'ambient',
    },
    shadow(80, 174, 44),
  ],
  // A weasel's tail curling up off the roof of a train car.
  'nero': [
    { d: 'M16 124 H144 V158 H16 Z' },
    { d: 'M10 124 Q80 106 150 124' },
    { d: 'M30 134 h20 v12 h-20z M70 134 h20 v12 h-20z M110 134 h20 v12 h-20z' },
    {
      d: 'M118 116 C130 94 150 78 136 58 C124 42 100 50 106 64 C112 74 128 68 124 58',
      role: 'accent',
    },
    { d: circle(42, 166, 8) },
    { d: circle(118, 166, 8) },
    { d: 'M-4 176 H164', role: 'ambient' },
  ],
  // A perfectly straight sword standing upright, a right-angled zigzag slash cut across it.
  't-bone': [
    { d: 'M80 22 V130' },
    { d: 'M60 130 H100', role: 'accent' },
    { d: 'M80 130 V164' },
    { d: circle(80, 169, 5) },
    { d: 'M18 64 H58 V104 H102 V144 H142', role: 'accent' },
    shadow(80, 186, 30),
  ],
  // A double yoke with two collars, its tow line running back to a little house-shaped boat.
  'sodom-and-gomorrah': [
    { d: 'M20 50 H140' },
    { d: ellipse(50, 76, 18, 22), role: 'accent' },
    { d: ellipse(110, 76, 18, 22), role: 'accent' },
    { d: 'M80 50 C72 72 88 90 80 110' },
    { d: house(62, 36, 124, 110) },
    { d: 'M48 150 H112 L104 162 H56 Z' },
    ...SEA.slice(1),
  ],

  // Two giant doors standing shut in the sea, a small boat at their foot.
  'enies-lobby': [
    { d: 'M18 20 H142 V32 H18z M26 20 L80 6 L134 20' },
    { d: 'M26 32 V156 M36 32 V156 M124 32 V156 M134 32 V156' },
    { d: 'M36 32 H124 V156 M80 32 V156', role: 'accent' },
    { d: 'M36 64 H124 M36 100 H124 M36 136 H124', role: 'soft' },
    {
      d: 'M60 172 q10 4 20 0 l-3 5 h-14z M70 172 v-9 l7 5 l-7 1',
      role: 'soft',
    },
    ...SEA,
  ],
  // A judge's gavel on its block, three different hats lined up above it.
  'baskerville': [
    { d: 'M44 96 h72 v26 h-72z' },
    { d: 'M56 96 v26 M104 96 v26', role: 'ambient' },
    { d: 'M80 122 V166' },
    { d: 'M44 166 h72 v10 h-72z' },
    { d: 'M28 78 Q44 54 60 78 Z', role: 'accent' },
    { d: 'M64 78 h32 M72 78 q8 -20 16 0', role: 'accent' },
    { d: 'M104 78 v-18 h24 v18 M100 78 h32', role: 'accent' },
    shadow(80, 186, 40),
  ],
  // An open book with a clover leaf pressed flat on its right-hand page.
  'clover': [
    { d: 'M80 150 C60 140 36 140 16 146 V70 C36 64 60 64 80 74 Z' },
    { d: 'M80 150 C100 140 124 140 144 146 V70 C124 64 100 64 80 74' },
    { d: 'M26 90 h40 M26 102 h40 M26 114 h34 M26 126 h38', role: 'ambient' },
    {
      d: `${circle(104, 96, 8)} ${circle(124, 96, 8)} ${circle(114, 84, 8)} ${circle(114, 108, 8)}`,
      role: 'accent',
    },
    { d: 'M114 104 q6 14 -2 30', role: 'accent' },
    shadow(80, 162, 62),
  ],
  // A snail telephone with a golden shell, its button pushed down.
  'spandine': [
    { d: 'M28 150 C28 134 42 128 58 128 H126 C138 128 142 140 136 150 Z' },
    { d: circle(82, 100, 30) },
    {
      d: 'M82 100 m-6 0 a6 6 0 1 1 12 0 a12 12 0 1 1 -24 0 a18 18 0 1 1 36 0',
      role: 'accent',
    },
    { d: 'M124 128 l4 -24 M132 130 l12 -20', role: 'soft' },
    { d: 'M74 64 h16 v6 h-16z', role: 'accent' },
    { d: 'M82 38 v18 M76 50 l6 6 l6 -6', role: 'ambient' },
    shadow(82, 160, 58),
  ],
  // A rifle leaning against a stack of three old books.
  'nico-olvia': [
    { d: 'M20 150 h80 v-16 h-80z' },
    { d: 'M26 134 h70 v-14 h-70z' },
    { d: 'M32 120 h60 v-14 h-60z' },
    { d: 'M36 142 h22 M40 127 h18 M44 113 h16', role: 'ambient' },
    { d: 'M110 150 L122 128 L132 132 L120 152 Z', role: 'accent' },
    { d: 'M126 128 L146 38 L150 39 L131 130', role: 'accent' },
    { d: 'M121 138 q-5 5 0 9', role: 'soft' },
    shadow(84, 160, 64),
  ],
  // A cutlass whose guard sprouts two small tusks, a tail for a tassel.
  'funkfreed': [
    { d: 'M64 122 C72 84 98 50 134 28 C122 56 102 90 80 130 Z' },
    { d: 'M50 114 L90 136' },
    { d: 'M54 117 C42 122 38 134 44 142', role: 'accent' },
    { d: 'M86 134 C88 148 80 156 70 158', role: 'accent' },
    { d: 'M70 128 L54 160' },
    { d: 'M54 160 c-4 8 -2 16 4 22 M54 160 c2 8 6 14 12 18', role: 'soft' },
    shadow(80, 188, 40),
  ],
  // A dark swirled fruit resting in an open palm, a ladle hanging beside it.
  'thatch': [
    {
      d: 'M28 150 C36 128 56 120 78 122 L116 112 C126 110 128 122 118 124 L98 128 L128 126 C138 126 138 138 128 138 L100 142 C90 154 60 158 28 156',
    },
    { d: circle(84, 100, 20), role: 'accent' },
    {
      d: 'M72 96 c4 -8 14 -8 16 0 c2 8 -8 10 -10 4 M88 108 c4 4 10 2 10 -4',
      role: 'accent',
    },
    { d: 'M84 80 c0 -8 4 -12 10 -14', role: 'soft' },
    { d: 'M136 30 L140 84', role: 'ambient' },
    { d: ellipse(142, 92, 10, 7), role: 'ambient' },
    shadow(80, 170, 56),
  ],
} satisfies Drawings

/** Lucci's hat and pigeon, moved aside to make room for the mask. */
const HAT_ASIDE = 'translate(-16 18) scale(0.85)'

/** The CP0 mask, drawn level and stood on its edge against the hat's brim. */
const MASK_LEAN = 'translate(128 142) rotate(-10) scale(1.2)'

/** The records of this stretch drawn again, from the episode the story changes them. */
export const waterSevenRedrawn: Redrawings = {
  // The forearm of the two years: a great box seen from its corner, the star
  // split by the edge and folded onto the far face, which is hatched; the
  // studded fist on top and the elbow hinge with its bolt below. The wrench
  // and the star-headed bolt lie beneath it. The opening shows it from 517,
  // the cover of ch. 598 in the manga.
  'franky': [
    {
      episode: 517,
      chapter: 598,
      value: [
        { d: 'M60 54 V24 Q60 14 70 14 H98 Q108 14 108 24 V54' },
        {
          d: 'M72 15 V34 M84 15 V34 M96 15 V34 M60 34 q6 6 12 0 q6 6 12 0 q6 6 12 0 q6 6 12 0',
          role: 'soft',
        },
        { d: 'M60 46 H92 q6 0 6 -6', role: 'soft' },
        { d: 'M44 58 H98 V124 H44 Z' },
        { d: 'M44 58 L58 49.6 M104 46 H118 L98 58 M118 46 V112 L98 124' },
        {
          d: 'M98 70 L100.6 82 L108.5 77.5 L102.2 90 L104.5 102.3 L98 98 L86.2 106.2 L90.4 92.5 L79 83.8 L93.3 83.5 Z',
          role: 'accent',
        },
        {
          d: 'M102 64 l12 -7 M104 70 l12 -7 M110 84 l6 -4 M110 92 l6 -4 M106 104 l10 -6 M102 112 l14 -8 M104 118 l12 -7',
          role: 'ambient',
        },
        { d: 'M52 124 V144 Q52 150 58 150 H86 Q92 150 92 144 V124' },
        { d: `${circle(72, 137, 8)} M67 142 l10 -10`, role: 'soft' },
        { d: 'M22 168 H80 M22 176 H80 M22 168 a4 4 0 0 0 0 8' },
        {
          d: 'M80 168 C82 156 100 154 106 162 l-9 4 v6 l9 4 C100 186 82 186 80 176',
        },
        { d: star(128, 172, 10, 4.5), role: 'accent' },
        { d: circle(128, 172, 3), role: 'accent' },
        shadow(78, 190, 54),
      ],
    },
  ],
  // The same top hat with the pigeon on the crown, moved aside, and the white
  // half-mask of CP0 stood against its brim: the eye band with its two slits
  // and the markings that curve beneath them. He is first seen wearing it in
  // 746 (ch. 801), on Dressrosa after Doflamingo's fall.
  'rob-lucci': [
    {
      episode: 746,
      chapter: 801,
      value: [
        ...waterSevenArt['rob-lucci']
          .slice(0, -1)
          .map((stroke) => ({ ...stroke, transform: HAT_ASIDE })),
        {
          d: 'M-24 -8 Q0 -17 24 -8 L22 6 Q14 12 6 8 L0 2 L-6 8 Q-14 12 -22 6 Z',
          transform: MASK_LEAN,
        },
        {
          d: 'M-17 -1 Q-11 -6 -5 -1 Q-11 3 -17 -1 Z M17 -1 Q11 -6 5 -1 Q11 3 17 -1 Z',
          role: 'accent',
          transform: MASK_LEAN,
        },
        {
          d: 'M-16 4 q4 4 9 1 M16 4 q-4 4 -9 1',
          role: 'accent',
          transform: MASK_LEAN,
        },
        shadow(80, 166, 70),
      ],
    },
  ],
}
