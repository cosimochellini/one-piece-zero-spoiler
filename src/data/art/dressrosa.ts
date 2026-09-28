import {
  circle,
  dots,
  ellipse,
  polygon,
  SEA,
  shadow,
  star,
} from '~/lib/svg/primitives'

import type { Drawings } from './stroke'

/** The drawings of the records filed in the dressrosa stretch of the route. */
export const dressrosaArt = {
  // A newsboy cap and the headband of a fish-man karate gi.
  'koala': [
    { d: 'M34 112 C34 84 58 72 80 74 C104 76 118 88 120 108 Z' },
    { d: 'M30 112 h94 q6 8 -6 10 H38 q-12 -2 -8 -10 z' },
    { d: circle(78, 76, 4) },
    {
      d: 'M78 76 C62 84 48 96 40 110 M78 76 C96 84 108 92 116 106',
      role: 'soft',
    },
    { d: 'M26 148 h108 v14 h-108 z', role: 'accent' },
    {
      d: 'M134 148 C146 156 146 168 138 178 M134 162 C142 170 140 180 132 186',
      role: 'accent',
    },
    shadow(80, 190, 50),
  ],

  // An island split down the middle, fire on one side and ice on the other.
  'punk-hazard': [
    { d: 'M16 140 C24 100 46 78 80 78 C114 78 136 100 144 140' },
    { d: 'M80 78 V140', role: 'accent' },
    {
      d: 'M96 134 c5 -13 -2 -17 2 -27 c9 9 11 19 6 27 M114 134 c6 -15 0 -21 4 -31 c10 11 12 23 6 31',
    },
    { d: 'M34 134 l10 -28 l10 28 M56 134 l8 -20 l8 20' },
    { d: 'M16 140 H144', role: 'ambient' },
    ...SEA,
  ],

  // A samurai's katana with a small flame at the tip.
  'kinemon': [
    { d: 'M40 172 C66 138 96 96 124 46' },
    { d: 'M32 166 C58 132 88 90 118 42' },
    { d: 'M118 42 L124 46' },
    { d: 'M50 158 L28 142' },
    { d: 'M40 172 L24 186 M32 166 L16 180 M24 186 L16 180' },
    { d: 'M34 176 l-6 -5 M28 182 l-6 -5', role: 'soft' },
    { d: 'M122 40 c6 -12 -1 -18 4 -27 c10 10 11 23 3 30', role: 'accent' },
    shadow(80, 192, 30),
  ],

  // A pirate's coat with a crocodile's tail coming out of the hem.
  'brownbeard': [
    { d: 'M48 62 L40 152 H112 L104 62' },
    { d: 'M64 62 L76 98 L92 62' },
    { d: 'M48 62 q28 -14 56 0' },
    {
      d: dots([
        [76, 106],
        [76, 122],
        [76, 138],
      ]),
      role: 'soft',
    },
    {
      d: 'M104 138 C130 142 142 158 130 176 C122 188 106 186 100 176',
      role: 'accent',
    },
    { d: 'M112 142 l6 -8 M126 152 l9 -4 M132 168 l9 2', role: 'accent' },
    shadow(80, 186, 44),
  ],

  // A laboratory flask with the gas curling out of its neck.
  'caesar-clown': [
    {
      d: 'M66 62 V98 L44 152 a10 10 0 0 0 10 12 h52 a10 10 0 0 0 10 -12 L94 98 V62',
    },
    { d: 'M62 58 h36' },
    { d: 'M52 136 h56', role: 'soft' },
    {
      d: dots([
        [66, 146],
        [80, 152],
        [94, 144],
      ]),
      role: 'soft',
    },
    { d: 'M72 54 C64 40 84 36 78 24 C74 16 86 12 90 18', role: 'accent' },
    { d: 'M92 52 C100 42 88 32 96 24', role: 'accent' },
    shadow(80, 176, 40),
  ],

  // A harpy's wing spread over an open book.
  'monet': [
    {
      d: 'M22 128 C44 120 66 122 80 132 C94 122 116 120 138 128 L138 152 C116 144 94 146 80 156 C66 146 44 144 22 152 Z',
    },
    { d: 'M80 132 V156' },
    { d: 'M34 136 h32 M94 136 h32', role: 'soft' },
    {
      d: 'M40 114 C56 70 96 52 130 56 C112 74 104 92 96 114 Z',
      role: 'accent',
    },
    {
      d: 'M66 106 C76 86 92 72 114 62 M82 112 C90 94 102 82 120 72',
      role: 'accent',
    },
    shadow(80, 168, 50),
  ],

  // A bamboo staff with a hamburger stuck on the end of it.
  'vergo': [
    { d: 'M26 180 L116 52' },
    { d: 'M36 186 L126 58' },
    { d: 'M48 158 l10 7 M70 128 l10 7 M92 98 l10 7' },
    { d: 'M96 46 a24 14 0 0 1 48 0 z', role: 'accent' },
    { d: 'M94 46 h52 M94 56 h52', role: 'accent' },
    { d: 'M96 56 a24 10 0 0 0 48 0 z' },
    {
      d: dots([
        [112, 38],
        [122, 34],
        [132, 38],
      ]),
      role: 'soft',
    },
    shadow(70, 192, 32),
  ],

  // A small dragon's tail curled round the hilt of a sword.
  'momonosuke': [
    { d: 'M72 42 h16 v68 h-16 z' },
    { d: 'M60 110 h40' },
    { d: 'M74 110 L80 172 L86 110' },
    { d: 'M66 34 h28 v8 h-28 z' },
    {
      d: 'M112 58 C134 74 126 106 100 108 C74 110 62 90 74 78 C82 70 96 76 94 88',
      role: 'accent',
    },
    { d: 'M112 58 l12 -10 l2 14 z', role: 'accent' },
    {
      d: dots([
        [104, 74],
        [100, 90],
        [86, 96],
      ]),
      role: 'soft',
    },
    shadow(80, 186, 30),
  ],

  // A maid's headband with a pistol where the ribbon should be.
  'baby-5': [
    { d: 'M26 120 C30 78 130 78 134 120' },
    { d: 'M38 122 C42 90 118 90 122 122' },
    { d: 'M26 120 q6 10 12 2 M122 122 q6 10 12 -2', role: 'soft' },
    {
      d: dots([
        [56, 92],
        [80, 86],
        [104, 92],
      ]),
      role: 'soft',
    },
    { d: 'M100 138 h48 v12 h-48 z', role: 'accent' },
    { d: 'M110 150 l-8 24 l16 2 l6 -26 z', role: 'accent' },
    { d: 'M120 150 v8 a7 7 0 0 0 14 0 v-8' },
    shadow(80, 188, 40),
  ],

  // A round body with a propeller spinning over it.
  'buffalo': [
    { d: 'M48 96 V166 a32 8 0 0 0 64 0 V96' },
    { d: ellipse(80, 96, 32, 8) },
    { d: 'M48 118 h64 M48 144 h64', role: 'soft' },
    { d: 'M80 88 V64' },
    { d: circle(80, 60, 5) },
    { d: 'M75 58 C56 48 34 50 28 60 C34 68 56 66 75 62 Z', role: 'accent' },
    {
      d: 'M85 58 C104 48 126 50 132 60 C126 68 104 66 85 62 Z',
      role: 'accent',
    },
    { d: 'M34 40 q46 -14 92 0', role: 'ambient', dashed: true },
    shadow(80, 184, 40),
  ],

  // A colosseum with a wooden soldier standing at the gate.
  'dressrosa': [
    { d: 'M30 132 V90 a36 18 0 0 1 72 0 V132' },
    { d: ellipse(66, 90, 36, 18) },
    {
      d: 'M40 132 V112 a7 7 0 0 1 14 0 V132 M59 132 V112 a7 7 0 0 1 14 0 V132 M78 132 V112 a7 7 0 0 1 14 0 V132',
    },
    { d: 'M36 104 h16 M58 104 h16 M80 104 h16', role: 'soft' },
    { d: circle(128, 108, 6), role: 'accent' },
    { d: 'M128 114 V136 M120 122 h16 M128 136 V152', role: 'accent' },
    { d: 'M10 152 H150', role: 'ambient' },
    ...SEA,
  ],

  // A gladiator's helmet with a long braid falling from it.
  'rebecca': [
    { d: 'M44 96 a36 36 0 0 1 72 0 v18 h-72 z' },
    { d: 'M80 68 V114' },
    { d: 'M52 100 v22 h14 v-22 M108 100 v22 h-14 v-22' },
    { d: 'M60 64 C68 40 92 40 100 64', role: 'accent' },
    { d: 'M116 108 C140 122 132 156 108 172', role: 'accent' },
    { d: 'M122 120 l8 -4 M129 134 l9 0 M126 150 l8 4 M118 162 l6 6' },
    shadow(80, 188, 40),
  ],

  // A sword-cane and a pair of dice.
  'issho': [
    { d: 'M60 40 V172' },
    { d: 'M68 40 V172' },
    { d: 'M60 40 C60 20 92 20 92 40' },
    { d: 'M68 40 C68 28 84 28 84 40' },
    { d: 'M100 120 h28 v28 h-28 z', role: 'accent' },
    { d: 'M124 146 h26 v26 h-26 z', role: 'accent' },
    {
      d: dots([
        [114, 134],
        [137, 152],
        [137, 166],
      ]),
    },
    shadow(84, 184, 52),
  ],

  // A wall of bricks, some of them see-through.
  'bartolomeo': [
    { d: 'M20 56 H140 V168 H20z', role: 'accent' },
    { d: 'M24 64 h36 v20 h-36z M64 64 h36 v20 h-36z M104 64 h32 v20 h-32z' },
    {
      d: 'M24 88 h16 v20 h-16z M44 88 h36 v20 h-36z M84 88 h36 v20 h-36z M124 88 h12 v20 h-12z',
    },
    { d: 'M24 112 h36 v20 h-36z M64 112 h36 v20 h-36z M104 112 h32 v20 h-32z' },
    {
      d: 'M24 136 h16 v20 h-16z M44 136 h36 v20 h-36z M84 136 h36 v20 h-36z M124 136 h12 v20 h-12z',
    },
    { d: 'M68 68 h28 M48 116 h28 M88 140 h28', role: 'ambient', dashed: true },
  ],

  // A king's cloak folded on a colosseum bench.
  'riku-doldo-iii': [
    { d: 'M20 140 H140 V152 H20 Z' },
    { d: 'M30 152 V174 M130 152 V174' },
    { d: 'M40 140 C44 108 60 96 80 96 C100 96 116 108 120 140 Z' },
    {
      d: 'M40 140 q10 10 20 0 q10 10 20 0 q10 10 20 0 q10 10 20 0',
      role: 'accent',
    },
    { d: 'M62 100 q18 12 36 0', role: 'accent' },
    {
      d: 'M62 138 C64 118 70 106 80 100 M98 138 C96 118 90 106 80 100',
      role: 'soft',
    },
    shadow(80, 180, 58),
  ],

  // A chair with a cloak of mucus dripping off it.
  'trebol': [
    { d: 'M40 118 h64 v10 h-64 z' },
    { d: 'M96 118 V44 h8 v84' },
    { d: 'M46 128 V172 M98 128 V172' },
    { d: 'M38 120 C40 84 58 62 80 62 C102 62 112 86 110 120 Z' },
    {
      d: 'M44 122 c0 12 -6 14 -6 24 a6 6 0 0 0 12 0 c0 -12 -6 -12 -6 -24 M70 126 c0 16 -6 18 -6 30 a6 6 0 0 0 12 0 c0 -14 -6 -14 -6 -30 M98 122 c0 10 -5 12 -5 20 a5 5 0 0 0 10 0 c0 -8 -5 -10 -5 -20',
      role: 'accent',
    },
    shadow(80, 188, 46),
  ],

  // A rose on a rapier's hilt, a bridle hanging beside it.
  'cavendish': [
    { d: 'M96 44 L100 32 L104 44 V130 h-8 z' },
    { d: 'M84 130 C72 140 78 156 92 154 M116 130 C128 140 122 156 108 154' },
    { d: 'M94 130 v30 h12 v-30' },
    { d: circle(100, 166, 7) },
    { d: 'M100 128 a7 7 0 1 1 -7 7 a12 12 0 1 0 12 -12', role: 'accent' },
    { d: 'M30 60 C18 88 22 130 40 150', role: 'soft' },
    { d: 'M30 60 C46 72 50 98 44 122' },
    { d: `${circle(30, 56, 5)} ${circle(41, 152, 5)}` },
    shadow(92, 184, 40),
  ],

  // A naginata with a blade cut like a shard of stone.
  'sai': [
    { d: 'M28 180 L104 56' },
    { d: 'M36 184 L112 60' },
    { d: 'M52 152 l8 5 M70 122 l8 5', role: 'soft' },
    { d: 'M104 56 L118 20 L138 34 L124 66 Z', role: 'accent' },
    { d: 'M100 62 L118 74' },
    shadow(70, 192, 32),
  ],

  // A drill, the point worn flat at the top.
  'don-chinjao': [
    { d: 'M52 170 L80 28 L108 170 Z' },
    {
      d: 'M62 134 C80 124 98 134 98 134 M58 154 C80 142 102 154 102 154 M68 110 C80 104 92 110 92 110',
      role: 'accent',
    },
    { d: 'M46 170 h68 v12 h-68 z' },
    { d: 'M72 44 h16', role: 'soft' },
    { d: 'M16 190 h40 M104 190 h40', role: 'ambient', dashed: true },
    shadow(80, 186, 40),
  ],

  // A boxing glove with a cannon barrel on the front of it.
  'ideo': [
    {
      d: 'M36 110 C36 80 58 66 84 70 C104 74 112 90 110 110 L108 146 a10 10 0 0 1 -10 10 H46 a10 10 0 0 1 -10 -10 Z',
    },
    { d: 'M36 116 C24 114 20 128 30 136 L38 138' },
    { d: 'M40 156 h66 v14 h-66 z' },
    { d: 'M68 84 l14 6 M68 94 l14 6', role: 'soft' },
    { d: 'M110 92 h34 v28 h-34 z', role: 'accent' },
    { d: 'M144 88 h8 v36 h-8 z', role: 'accent' },
    shadow(76, 180, 48),
  ],

  // A pair of very long fighting boots.
  'blue-gilly': [
    { d: 'M44 28 h22 v122 h18 a8 8 0 0 1 0 16 h-40 z' },
    { d: 'M92 44 h22 v106 h18 a8 8 0 0 1 0 16 h-40 z' },
    { d: 'M40 28 h30 v14 h-30 z M88 44 h30 v14 h-30 z', role: 'accent' },
    {
      d: 'M50 70 h10 M50 86 h10 M50 102 h10 M98 82 h10 M98 98 h10 M98 114 h10',
      role: 'soft',
    },
    { d: 'M44 162 h34 M92 162 h34' },
    shadow(84, 180, 56),
  ],

  // A boxing glove with a crown resting above it.
  'elizabello-ii': [
    {
      d: 'M124 116 C124 88 102 74 76 78 C56 82 50 96 52 116 L54 150 a10 10 0 0 0 10 10 h56 a10 10 0 0 0 10 -10 Z',
    },
    { d: 'M124 122 C136 120 140 134 130 142 L122 144' },
    { d: 'M52 160 h62 v14 h-62 z' },
    {
      d: 'M58 66 L66 40 L80 58 L94 36 L106 60 L114 38 L120 66 Z',
      role: 'accent',
    },
    { d: 'M58 66 H120', role: 'accent' },
    {
      d: dots([
        [66, 40],
        [94, 36],
        [114, 38],
      ]),
    },
    shadow(84, 182, 44),
  ],

  // A giant's horned helmet resting on a gladiator's shield.
  'hajrudin': [
    { d: 'M34 66 H126 V128 C126 158 104 176 80 184 C56 176 34 158 34 128 Z' },
    { d: circle(80, 120, 12) },
    {
      d: dots([
        [46, 78],
        [114, 78],
        [46, 140],
        [114, 140],
      ]),
      role: 'soft',
    },
    { d: 'M52 66 C52 34 108 34 108 66 Z' },
    { d: 'M80 46 V66' },
    { d: 'M54 48 C38 40 30 24 36 14 C48 20 56 32 58 44', role: 'accent' },
    {
      d: 'M106 48 C122 40 130 24 124 14 C112 20 104 32 102 44',
      role: 'accent',
    },
    shadow(80, 192, 40),
  ],

  // A sharkskin hood over a giant sword.
  'bastille': [
    { d: 'M64 150 V44 L80 20 L96 44 V150 Z' },
    { d: 'M80 30 V150', role: 'soft' },
    { d: 'M44 150 h72 v10 h-72 z' },
    { d: 'M72 160 v22 h16 v-22' },
    { d: circle(80, 188, 6) },
    {
      d: 'M52 98 C52 74 108 74 108 98 C108 120 94 132 80 132 C66 132 52 120 52 98 Z',
      role: 'accent',
    },
    { d: 'M76 76 L86 52 L96 78', role: 'accent' },
    { d: 'M60 106 h10 M60 114 h10 M90 106 h10 M90 114 h10' },
  ],

  // A Marine cap on a colosseum fighter's cloak.
  'maynard': [
    { d: 'M40 92 C30 122 28 154 30 176 H130 C132 154 130 122 120 92 Z' },
    { d: 'M40 92 q40 -16 80 0' },
    {
      d: 'M58 104 C52 134 50 158 52 174 M102 104 C108 134 110 158 108 174',
      role: 'soft',
    },
    { d: 'M48 76 C48 50 112 50 112 76 Z', role: 'accent' },
    { d: 'M42 76 h76 q6 6 -4 10 h-68 q-10 -4 -4 -10 z', role: 'accent' },
    { d: circle(80, 104, 5) },
    shadow(80, 186, 56),
  ],

  // The belt of a fish-man karate gi, and one bubble above it.
  'hack': [
    { d: 'M16 108 h124 v20 h-124 z' },
    { d: 'M60 100 h30 v36 h-30 z' },
    { d: 'M60 108 q15 10 30 0 M60 128 q15 -10 30 0', role: 'soft' },
    { d: 'M66 136 L58 178 L74 180 L80 136' },
    { d: circle(112, 66, 26), role: 'accent' },
    { d: 'M100 56 q8 -8 18 -6', role: 'accent' },
    {
      d: dots([
        [50, 66],
        [64, 50],
        [138, 84],
      ]),
      role: 'soft',
    },
    shadow(80, 190, 50),
  ],

  // A flamenco fan open over a pair of castanets.
  'viola': [
    { d: 'M20 128 A66 66 0 0 1 140 128', role: 'accent' },
    { d: 'M44 142 A42 42 0 0 1 116 142', role: 'soft' },
    {
      d: 'M80 152 L20 128 M80 152 L44 92 M80 152 L80 86 M80 152 L116 92 M80 152 L140 128',
    },
    { d: circle(80, 152, 5) },
    { d: ellipse(34, 180, 12, 8) },
    { d: ellipse(54, 174, 12, 8) },
    { d: 'M34 172 q10 -6 20 -6', role: 'soft' },
    shadow(96, 186, 30),
  ],

  // A jar of grapes with a toy key lying under it.
  'sugar': [
    {
      d: 'M52 90 h40 v8 a10 10 0 0 1 8 10 v38 a10 10 0 0 1 -10 10 h-36 a10 10 0 0 1 -10 -10 v-38 a10 10 0 0 1 8 -10 z',
    },
    { d: 'M48 80 h48 v10 h-48 z' },
    {
      d: `${circle(66, 118, 8)} ${circle(82, 118, 8)} ${circle(74, 132, 8)} ${circle(90, 132, 8)}`,
      role: 'accent',
    },
    { d: 'M58 142 h36', role: 'soft' },
    { d: 'M44 176 h44 M44 170 v12 M78 176 v8 M88 176 v6' },
    { d: circle(36, 176, 9) },
  ],

  // A steel banner-sword rippling on its pole.
  'diamante': [
    { d: 'M40 182 V36' },
    { d: circle(40, 30, 6) },
    {
      d: 'M42 44 C70 34 78 58 104 48 C128 40 138 56 140 62 C120 70 112 92 88 90 C64 88 56 104 42 100 Z',
      role: 'accent',
    },
    {
      d: 'M56 56 C72 64 78 78 64 90 M86 52 C102 62 108 76 94 88',
      role: 'soft',
    },
    { d: 'M34 174 h12 M34 164 h12' },
    shadow(44, 190, 20),
  ],

  // A mountain with a block of stone raised out of its slope.
  'pica': [
    { d: 'M12 160 L58 68 L90 112 L116 74 L150 160 Z' },
    { d: 'M56 160 V120 h34 v40 M64 120 V100 h20 v20', role: 'accent' },
    { d: 'M22 146 h34 M90 146 h50 M100 128 h30', role: 'soft' },
    { d: 'M44 92 L58 68 L70 92' },
    {
      d: dots([
        [126, 118],
        [136, 136],
        [30, 136],
      ]),
      role: 'soft',
    },
    { d: 'M4 160 H156', role: 'ambient' },
  ],

  // A baby bonnet sitting on a mobster's fedora.
  'senor-pink': [
    { d: ellipse(80, 130, 52, 12) },
    { d: 'M46 128 C46 92 58 78 80 78 C102 78 114 92 114 128' },
    { d: 'M64 84 q16 10 32 0', role: 'soft' },
    { d: 'M48 118 q32 10 64 0' },
    { d: 'M56 78 C56 48 104 48 104 78 Z', role: 'accent' },
    {
      d: 'M72 46 q-16 -10 -14 6 q2 12 14 2 M88 46 q16 -10 14 6 q-2 12 -14 2',
      role: 'accent',
    },
    shadow(80, 152, 54),
  ],

  // Two high heels, each with a fin along the back of it.
  'dellinger': [
    { d: 'M30 150 C30 130 44 118 64 116 L72 116 L74 150 Z' },
    { d: 'M70 150 L74 178 L84 178 L78 150' },
    { d: 'M86 130 C86 110 100 98 120 96 L128 96 L130 130 Z' },
    { d: 'M126 130 L130 158 L140 158 L134 130' },
    { d: 'M64 116 C74 98 86 94 98 98 C88 106 84 112 78 118', role: 'accent' },
    {
      d: 'M120 96 C130 78 142 74 152 78 C142 86 138 92 132 98',
      role: 'accent',
    },
    shadow(84, 186, 50),
  ],

  // A martial arts belt, knotted, with the ends hanging down.
  'lao-g': [
    { d: 'M20 96 h120 v18 h-120 z' },
    { d: 'M62 88 h36 v34 h-36 z', role: 'accent' },
    {
      d: 'M62 96 C74 104 86 104 98 96 M62 114 C74 106 86 106 98 114',
      role: 'accent',
    },
    { d: 'M68 122 L60 176 L76 178 L82 122' },
    { d: 'M92 122 L96 172 L112 170 L104 122' },
    { d: 'M20 104 h42 M98 104 h42', role: 'soft' },
    shadow(80, 188, 44),
  ],

  // A great iron weight with a handle over it.
  'machvise': [
    { d: 'M28 104 h104 l8 62 h-120 z' },
    { d: 'M56 104 C56 66 104 66 104 104', role: 'accent' },
    { d: 'M68 104 C68 80 92 80 92 104', role: 'accent' },
    { d: 'M32 132 h96', role: 'soft' },
    { d: 'M24 166 h112' },
    { d: 'M14 178 h40 M104 178 h44', role: 'ambient', dashed: true },
    shadow(80, 174, 60),
  ],

  // A paintbrush and a cannon coming apart into shapes.
  'jora': [
    { d: 'M22 36 L66 80' },
    { d: 'M30 28 L74 72' },
    { d: 'M66 80 L84 98 C72 106 60 98 66 80 Z' },
    { d: 'M40 140 h64 v22 h-64 z' },
    { d: circle(56, 172, 12) },
    {
      d: 'M104 140 C124 122 132 150 148 142 C142 160 152 172 134 176 C116 180 112 162 96 162',
      role: 'accent',
    },
    { d: polygon(124, 116, 14, 3), role: 'accent' },
    { d: 'M10 184 H150', role: 'ambient' },
  ],

  // An admiral's cloak with a line of little ships along the hem.
  'orlumbus': [
    { d: 'M46 40 C30 70 26 110 28 148 H132 C134 110 130 70 114 40 Z' },
    { d: 'M46 40 q34 -16 68 0' },
    { d: circle(80, 46, 6) },
    {
      d: 'M62 54 C56 92 54 120 56 146 M98 54 C104 92 106 120 104 146',
      role: 'soft',
    },
    {
      d: 'M34 148 l6 -10 l6 10z M52 148 l6 -10 l6 10z M70 148 l6 -10 l6 10z M88 148 l6 -10 l6 10z M106 148 l6 -10 l6 10z',
      role: 'accent',
    },
    shadow(80, 160, 54),
  ],

  // A studded jacket with the rivets going off.
  'gladius': [
    { d: 'M50 58 L40 154 H120 L110 58' },
    { d: 'M50 58 q30 -12 60 0' },
    { d: 'M66 58 L80 94 L94 58' },
    { d: 'M80 94 V152', role: 'soft' },
    {
      d: dots([
        [56, 72],
        [62, 88],
        [104, 72],
        [98, 88],
      ]),
      role: 'soft',
    },
    { d: 'M118 62 l12 -12 M124 74 l14 -2 M120 86 l12 8', role: 'accent' },
    { d: star(136, 44, 12, 5), role: 'accent' },
    shadow(80, 184, 46),
  ],

  // A needle and thread stitching a very small hat.
  'leo': [
    { d: 'M30 172 L120 52' },
    { d: circle(122, 48, 5) },
    {
      d: 'M122 48 C142 64 132 92 110 96 C86 100 80 126 98 138',
      role: 'accent',
    },
    { d: ellipse(70, 138, 34, 9) },
    { d: 'M48 136 C48 112 92 112 92 136' },
    { d: 'M50 130 q20 8 40 0', role: 'soft' },
    {
      d: dots([
        [62, 124],
        [72, 120],
        [82, 124],
      ]),
      role: 'soft',
    },
    shadow(72, 160, 40),
  ],

  // A toy soldier's drum and the sword leaning on it.
  'kyros': [
    { d: 'M44 112 h60 v44 h-60 z' },
    { d: ellipse(74, 112, 30, 10) },
    { d: 'M44 156 a30 10 0 0 0 60 0' },
    { d: 'M44 120 L104 148 M44 148 L104 120', role: 'soft' },
    { d: 'M44 122 h60 M44 146 h60' },
    { d: 'M118 162 L138 44 M126 163 L146 45 M138 44 L146 45', role: 'accent' },
    { d: 'M112 142 L134 146', role: 'accent' },
    shadow(80, 174, 52),
  ],

  // A very small crown resting on a flower.
  'mansherry': [
    { d: circle(60, 104, 18) },
    { d: circle(100, 104, 18) },
    { d: circle(64, 136, 18) },
    { d: circle(96, 136, 18) },
    { d: circle(80, 120, 14) },
    { d: 'M80 136 V184' },
    {
      d: 'M80 158 C62 150 56 166 70 172 C78 175 80 166 80 158 Z',
      role: 'soft',
    },
    { d: 'M62 72 L68 50 L80 64 L92 48 L98 72 Z', role: 'accent' },
  ],

  // A calligraphy brush and the bird it has just drawn.
  'kanjuro': [
    { d: 'M30 26 h16 v86 h-16 z' },
    { d: 'M28 112 h20 v12 h-20 z' },
    { d: 'M28 124 C28 148 34 172 38 182 C42 172 48 148 48 124 Z' },
    {
      d: 'M76 92 q20 -22 46 -6 q-14 2 -20 12 q14 -2 20 6 q-20 6 -34 -2 z',
      role: 'accent',
    },
    { d: 'M90 104 l-4 16 M108 104 l4 16', role: 'accent' },
    {
      d: dots([
        [66, 150],
        [80, 166],
        [96, 144],
      ]),
      role: 'soft',
    },
    shadow(38, 190, 20),
  ],

  // A clown's hat above a coat with a heart on it.
  'donquixote-rosinante': [
    { d: 'M48 82 L38 172 H122 L112 82 Z' },
    { d: 'M64 82 L80 118 L96 82' },
    { d: 'M38 172 h84', role: 'soft' },
    {
      d: 'M80 154 C64 140 60 126 68 120 C74 115 80 120 80 126 C80 120 86 115 92 120 C100 126 96 140 80 154 Z',
      role: 'accent',
    },
    { d: 'M60 78 L80 28 L100 78 Z' },
    { d: circle(80, 22, 7) },
    { d: 'M54 78 h52' },
    shadow(80, 184, 50),
  ],

  // A spiked club and a sake gourd set down beside it.
  'kaido': [
    { d: 'M22 150 L60 112' },
    { d: 'M56 108 L120 44 a10 10 0 0 1 14 14 L70 122 a10 10 0 0 1 -14 -14 z' },
    {
      d: 'M78 96 l-6 -12 M92 82 l-6 -12 M106 68 l-6 -12 M86 112 l12 6 M100 98 l12 6 M114 84 l12 6',
      role: 'accent',
    },
    { d: 'M124 40 l8 -8', role: 'accent' },
    {
      d: 'M40 158 a8 8 0 1 0 12 0 c6 6 8 12 8 20 a14 14 0 0 1 -28 0 c0 -8 2 -14 8 -20 z',
    },
    { d: 'M42 154 h8 v-8 h-8 z' },
    shadow(80, 194, 48),
  ],
  // A wrapped candy, twisted at both ends, with smoke curling off it.
  'mocha': [
    { d: ellipse(80, 112, 30, 20) },
    { d: 'M50 112 L26 94 L32 112 L26 130 Z' },
    { d: 'M110 112 L134 94 L128 112 L134 130 Z' },
    {
      d: 'M62 104 C72 96 88 96 98 104 M62 120 C72 128 88 128 98 120',
      role: 'soft',
    },
    {
      d: 'M72 88 C62 74 80 68 72 54 M90 90 C100 76 84 68 94 54',
      role: 'accent',
    },
    shadow(80, 146, 42),
  ],

  // Two bowler hats frozen stiff, icicles hanging off the brims, above a
  // footprint in the snow bigger than either of them.
  'rock-and-scotch': [
    { d: 'M30 120 C30 88 70 88 70 120' },
    { d: 'M18 122 C34 115 66 115 82 122 C66 129 34 129 18 122 Z' },
    { d: 'M92 104 C92 72 132 72 132 104' },
    { d: 'M80 106 C96 99 128 99 144 106 C128 113 96 113 80 106 Z' },
    {
      d: 'M26 126 v6 M38 128 v9 M50 129 v6 M62 128 v9 M74 126 v5 M88 110 v6 M100 112 v9 M112 113 v6 M124 112 v9 M136 110 v5',
      role: 'accent',
    },
    { d: 'M10 152 Q80 142 150 152', role: 'ambient' },
    { d: ellipse(80, 176, 26, 11), role: 'soft' },
    {
      d: dots([
        [56, 160],
        [66, 157],
        [78, 156],
        [90, 157],
        [101, 160],
      ]),
      role: 'soft',
    },
  ],

  // A heap of slime with an axolotl's frilled gills, dripping and bubbling.
  'smiley': [
    { d: 'M24 160 C22 128 40 100 80 98 C120 100 138 128 136 160 Z' },
    {
      d: 'M46 110 C32 100 28 88 32 78 M52 104 C42 90 42 78 48 68 M42 118 C28 112 20 102 20 92',
      role: 'accent',
    },
    {
      d: 'M114 110 C128 100 132 88 128 78 M108 104 C118 90 118 78 112 68 M118 118 C132 112 140 102 140 92',
      role: 'accent',
    },
    { d: 'M42 160 v10 M62 160 v15 M98 160 v12 M120 160 v8', role: 'soft' },
    {
      d: `${circle(66, 128, 5)} ${circle(96, 136, 4)} ${circle(82, 118, 3)}`,
      role: 'soft',
    },
    shadow(80, 186, 56),
  ],

  // A studded gladiator's wristband on a folded cloak.
  'spartan': [
    { d: 'M20 156 L46 122 H140 L114 156 Z', role: 'accent' },
    { d: 'M34 139 H126', role: 'accent' },
    { d: ellipse(80, 100, 30, 10) },
    { d: 'M50 100 V128 M110 100 V128' },
    { d: 'M50 128 a30 10 0 0 0 60 0' },
    {
      d: dots([
        [60, 117],
        [72, 120],
        [88, 120],
        [100, 117],
      ]),
    },
    { d: 'M50 110 a30 10 0 0 0 60 0', role: 'soft' },
    shadow(80, 172, 56),
  ],

  // A plumed helmet beside the announcer's microphone.
  'gatz': [
    {
      d: 'M44 118 C44 82 104 82 104 118 L104 152 L90 152 L88 128 L60 128 L58 152 L44 152 Z',
    },
    { d: 'M74 88 V112', role: 'soft' },
    { d: 'M46 94 C46 62 70 44 104 50 C92 58 100 72 106 98', role: 'accent' },
    {
      d: 'M58 76 C64 62 80 56 96 56 M54 86 C58 70 72 62 88 62',
      role: 'accent',
    },
    { d: circle(130, 112, 9) },
    { d: 'M130 121 V170 M118 170 H142' },
    shadow(84, 180, 52),
  ],

  // A bull's pair of horns, one snapped off, over a red cape; the broken tip
  // lies on the ground.
  'ucy': [
    { d: 'M54 86 Q80 78 106 86 V100 Q80 92 54 100 Z' },
    { d: 'M106 90 C128 86 140 66 134 40 C130 62 120 76 104 80' },
    { d: 'M54 90 C42 86 36 78 36 70 L42 74 L44 68 C46 76 50 80 56 81' },
    { d: 'M24 158 C28 146 36 142 44 144 L40 154 Z', role: 'soft' },
    { d: 'M64 118 H136' },
    {
      d: 'M70 118 H130 C128 144 134 164 142 180 C118 174 96 178 78 184 C84 164 80 140 70 118 Z',
      role: 'accent',
    },
    shadow(96, 190, 44),
  ],
  // A boxing glove whose cuff closes with a zip, the pull hanging off it.
  'kelly-funk': [
    {
      d: 'M56 146 V100 C56 72 72 58 94 60 C116 62 124 82 120 106 C118 122 110 132 104 136 V146 Z',
    },
    { d: 'M56 112 C42 110 38 126 48 134 C54 138 60 134 62 126' },
    { d: 'M72 74 C86 68 104 72 112 86', role: 'soft' },
    { d: 'M52 146 h56 v24 h-56 z' },
    { d: 'M80 146 V170 M75 151 h10 M75 157 h10 M75 163 h10', role: 'accent' },
    { d: 'M80 170 v6', role: 'accent' },
    { d: circle(80, 180, 4), role: 'accent' },
    shadow(80, 192, 40),
  ],

  // A broad-brimmed fedora, and an axe head snapped in two in front of it.
  'bobby-funk': [
    { d: 'M50 116 C50 84 58 70 80 70 C102 70 110 84 110 116' },
    { d: ellipse(80, 118, 58, 12) },
    { d: 'M66 76 Q80 90 94 76', role: 'soft' },
    { d: 'M51 104 C66 112 94 112 109 104', role: 'accent' },
    { d: 'M30 180 L80 152', role: 'soft' },
    { d: 'M80 152 L72 136 C86 128 100 132 106 142 Z' },
    { d: 'M112 176 C112 164 122 156 136 158 L132 178 Z' },
    {
      d: dots([
        [108, 150],
        [110, 160],
        [109, 168],
      ]),
      role: 'soft',
    },
    shadow(80, 186, 56),
  ],

  // A battle map with the arrows of a plan converging on one point, and a
  // stack of coins weighing down its corner.
  'dagama': [
    { d: 'M24 62 H116 V148 H24 Z' },
    { d: 'M24 90 H116 M24 120 H116 M54 62 V148 M86 62 V148', role: 'soft' },
    {
      d: 'M36 136 C50 124 60 114 72 104 M110 136 C98 124 88 114 76 104 M72 72 C72 82 72 90 74 100',
      role: 'accent',
    },
    {
      d: 'M66 102 l8 0 l-2 -8 M82 102 l-8 0 l2 -8 M70 94 l4 6 l3 -7',
      role: 'accent',
    },
    { d: ellipse(124, 164, 18, 5) },
    { d: 'M106 164 v-10 M142 164 v-10' },
    { d: ellipse(124, 154, 18, 5) },
    { d: 'M106 154 v-10 M142 154 v-10', role: 'soft' },
    { d: ellipse(124, 144, 18, 5), role: 'soft' },
    shadow(76, 184, 60),
  ],

  // A headsman's broad sword planted point down, a war medal hung from its
  // crossguard.
  'suleiman': [
    { d: 'M72 64 H88 V160 L80 176 L72 160 Z' },
    { d: 'M80 70 V156', role: 'soft' },
    { d: 'M48 56 H112 V64 H48 Z' },
    { d: 'M75 56 V32 H85 V56' },
    { d: circle(80, 26, 6) },
    { d: 'M100 64 L96 84 H108 L104 64', role: 'soft' },
    { d: circle(102, 94, 9), role: 'accent' },
    { d: star(102, 94, 5, 2.2), role: 'accent' },
    shadow(80, 186, 30),
  ],

  // A wanted poster torn down the middle, and a round bomb with its fuse
  // lit at its foot.
  'abdullah': [
    {
      d: 'M30 40 H78 L72 56 L80 70 L72 86 L80 102 L72 118 L80 134 L72 150 L76 166 H30 Z',
    },
    {
      d: 'M86 44 H128 V170 H82 L78 154 L86 138 L78 122 L86 106 L78 90 L86 74 L78 60 Z',
    },
    { d: 'M40 52 H66 M94 56 H118', role: 'soft' },
    { d: 'M42 66 H70 M92 70 H118 M42 118 H68 M92 122 H118', role: 'soft' },
    { d: circle(126, 168, 14), role: 'accent' },
    { d: 'M134 156 q6 -10 14 -8', role: 'accent' },
    {
      d: dots([
        [150, 142],
        [154, 148],
        [146, 138],
      ]),
      role: 'soft',
    },
    shadow(80, 190, 56),
  ],

  // Two curved sabres crossed blade over blade, their knuckle guards at the
  // foot.
  'jeet': [
    { d: 'M50 158 C76 124 100 86 124 38 C112 84 90 124 60 164 Z' },
    { d: 'M110 158 C84 124 60 86 36 38 C48 84 70 124 100 164 Z' },
    { d: 'M54 162 L38 182 M106 162 L122 182' },
    {
      d: 'M44 154 C30 160 32 180 42 180 M116 154 C130 160 128 180 118 180',
      role: 'accent',
    },
    { d: 'M60 146 C80 116 100 82 116 52', role: 'soft' },
    shadow(80, 192, 44),
  ],
  // A double-bladed axe standing on its haft, the grip bound in leather.
  'boo': [
    { d: 'M77 48 V178 M83 48 V178 M77 48 h6 M77 178 h6' },
    { d: 'M77 60 L50 50 C38 64 38 88 50 102 L77 92 Z', role: 'accent' },
    { d: 'M83 60 L110 50 C122 64 122 88 110 102 L83 92 Z', role: 'accent' },
    {
      d: 'M58 60 C50 70 50 82 58 92 M102 60 C110 70 110 82 102 92',
      role: 'soft',
    },
    {
      d: 'M77 140 l6 -5 M77 150 l6 -5 M77 160 l6 -5 M77 170 l6 -5',
      role: 'soft',
    },
    shadow(80, 188, 34),
  ],

  // A wide sombrero with a cactus growing out of its crown.
  'jean-ango': [
    { d: ellipse(80, 138, 64, 16) },
    { d: 'M52 136 C54 108 62 96 80 96 C98 96 106 108 108 136' },
    { d: 'M54 126 C70 132 90 132 106 126', role: 'accent' },
    {
      d: dots([
        [30, 138],
        [44, 148],
        [62, 153],
        [98, 153],
        [116, 148],
        [130, 138],
      ]),
      role: 'accent',
    },
    {
      d: 'M74 96 V62 C74 52 86 52 86 62 V96 M74 80 h-6 q-4 0 -4 -4 v-10 M86 74 h6 q4 0 4 -4 v-10',
    },
    { d: 'M80 58 V92 M70 68 l-3 -2 M90 66 l3 -2', role: 'soft' },
    shadow(80, 180, 56),
  ],

  // A spiked iron ball on a chain, the chain ending in a shackle.
  'tank-lepanto': [
    { d: circle(100, 124, 24) },
    {
      d: 'M123.6 128.4 L133.3 137.8 L119.8 137.6 M113.6 143.8 L113.8 157.3 L104.4 147.6 M95.6 147.6 L86.2 157.3 L86.4 143.8 M80.2 137.6 L66.7 137.8 L76.4 128.4 M76.4 119.6 L66.7 110.2 L80.2 110.4 M86.4 104.2 L86.2 90.7 L95.6 100.4 M104.4 100.4 L113.8 90.7 L113.6 104.2 M119.8 110.4 L133.3 110.2 L123.6 119.6',
      role: 'accent',
    },
    { d: 'M90 116 C92 110 98 106 104 106', role: 'soft' },
    { d: ellipse(80, 94, 6, 4) },
    { d: ellipse(70, 84, 4, 6) },
    { d: ellipse(60, 74, 6, 4) },
    { d: ellipse(50, 64, 4, 6) },
    { d: circle(38, 50, 9) },
    { d: 'M32 43 L44 57', role: 'soft' },
    shadow(100, 176, 40),
  ],

  // A cross hanging from a string of beads.
  'gambia': [
    {
      d: dots([
        [48, 30],
        [49, 42],
        [52, 54],
        [57, 65],
        [63, 75],
        [71, 84],
        [112, 30],
        [111, 42],
        [108, 54],
        [103, 65],
        [97, 75],
        [89, 84],
      ]),
    },
    { d: circle(80, 90, 5) },
    { d: 'M80 95 V100' },
    {
      d: 'M74 100 h12 v22 h18 v12 h-18 v40 h-12 v-40 h-18 v-12 h18 Z',
      role: 'accent',
    },
    { d: 'M80 106 V168 M62 128 H98', role: 'soft' },
    shadow(80, 188, 30),
  ],

  // A tall floppy hat with a band round it, resting on a katana's hilt.
  'wicca': [
    { d: 'M18 164 H122 M122 160 v8 M126 164 H146' },
    { d: 'M18 160 q-6 4 0 8 H110 M110 158 v12', role: 'soft' },
    { d: ellipse(80, 132, 44, 10) },
    {
      d: 'M50 130 C52 102 60 70 78 52 C92 40 108 44 112 58 C104 56 98 62 96 74 C94 96 104 114 110 130',
      role: 'accent',
    },
    { d: 'M52 118 C70 124 92 124 108 118', role: 'accent' },
    { d: 'M112 58 c6 2 8 8 4 12', role: 'soft' },
    shadow(80, 180, 60),
  ],

  // A canister vacuum cleaner, its hose curling up to the wand and nozzle.
  'kyuin': [
    {
      d: 'M34 128 h52 a16 16 0 0 1 16 16 v10 a16 16 0 0 1 -16 16 h-52 a16 16 0 0 1 -16 -16 v-10 a16 16 0 0 1 16 -16 z',
    },
    { d: circle(40, 174, 6) },
    { d: circle(80, 174, 6) },
    { d: 'M30 142 h22 M62 142 h16', role: 'soft' },
    {
      d: 'M102 144 C124 142 130 110 112 96 C96 84 100 56 122 52',
      role: 'accent',
    },
    { d: 'M122 52 L128 48 L138 156' },
    { d: 'M124 156 h26 v8 h-26 z' },
    { d: 'M128 172 v6 M138 172 v8 M148 172 v6', role: 'ambient' },
    shadow(62, 186, 48),
  ],
  // A flower seller's basket, heaped with blooms, its handle arched over them.
  'scarlett': [
    { d: 'M40 120 h80 l-10 50 h-60 z' },
    { d: 'M44 120 C44 64 116 64 116 120', role: 'soft' },
    { d: 'M44 136 h72 M48 152 h64', role: 'soft' },
    {
      d: `${star(58, 108, 12, 6)} ${star(80, 100, 13, 6)} ${star(102, 108, 12, 6)}`,
      role: 'accent',
    },
    {
      d: dots([
        [58, 108],
        [80, 100],
        [102, 108],
      ]),
    },
    { d: 'M66 120 l-4 -6 M94 120 l4 -6 M80 120 v-8' },
    shadow(80, 180, 46),
  ],

  // A paper festival lantern hanging from a bent pole, a small flame inside.
  'trafalgar-lami': [
    { d: 'M30 44 C62 34 96 38 118 56' },
    { d: 'M104 48 V72' },
    { d: ellipse(104, 108, 26, 34) },
    { d: 'M92 72 h24 v6 h-24 z M92 138 h24 v6 h-24 z' },
    { d: 'M80 96 q24 6 48 0 M78 108 h52 M80 120 q24 -6 48 0', role: 'soft' },
    { d: 'M104 118 c-7 -7 -1 -14 0 -20 c6 6 7 14 0 20 z', role: 'accent' },
    {
      d: 'M104 144 v8 M96 152 h16 M98 152 v14 M104 152 v16 M110 152 v14',
      role: 'accent',
    },
    shadow(104, 188, 26),
  ],

  // Two plain apples set out on a cloth, the humble meal of a family that gave up a throne.
  'donquixote-homing': [
    {
      d: 'M56 108 C42 100 30 112 33 130 C36 148 48 158 56 152 C64 158 76 148 79 130 C82 112 70 100 56 108 Z',
    },
    {
      d: 'M106 108 C92 100 80 112 83 130 C86 148 98 158 106 152 C114 158 126 148 129 130 C132 112 120 100 106 108 Z',
    },
    { d: 'M56 108 q1 -10 6 -14 M106 108 q1 -10 6 -14' },
    {
      d: 'M60 98 q10 -8 16 -2 q-8 7 -16 2 z M110 98 q10 -8 16 -2 q-8 7 -16 2 z',
      role: 'accent',
    },
    { d: 'M44 118 q-5 6 -4 14 M94 118 q-5 6 -4 14', role: 'soft' },
    { d: 'M22 162 h116 l-8 12 h-100 z', role: 'soft' },
    shadow(80, 186, 54),
  ],

  // A barrel of booze with a foaming tankard beside it.
  'diez-barrels': [
    { d: 'M42 72 C34 102 34 140 42 170 H94 C102 140 102 102 94 72 Z' },
    { d: ellipse(68, 72, 26, 6) },
    { d: 'M38 92 q30 6 60 0 M38 150 q30 6 60 0' },
    {
      d: 'M56 78 C52 106 52 136 56 168 M80 78 C84 106 84 136 80 168',
      role: 'soft',
    },
    { d: circle(68, 121, 5), role: 'accent' },
    { d: 'M112 134 h26 v36 h-26 z' },
    { d: 'M138 142 q12 0 12 10 q0 10 -12 10' },
    { d: 'M110 134 q4 -8 10 -4 q6 -8 12 0 q6 -4 8 4', role: 'accent' },
    shadow(88, 182, 62),
  ],
} satisfies Drawings
