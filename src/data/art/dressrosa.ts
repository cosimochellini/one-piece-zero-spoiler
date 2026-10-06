import {
  circle,
  dot,
  dots,
  ellipse,
  house,
  SEA,
  shadow,
  star,
} from '~/lib/svg/primitives'

import type { Drawings, Redrawings } from './stroke'

/**
 * The visible edge of a playing card held behind the next one in Jora's
 * hand: its left side and the corner of its top, pivoting on its foot.
 */
const JORA_CARD_EDGE = 'M82 150 V70 h17'

/** Gladius's coat laid flat, turned a little on the floor beside his hat. */
const GLADIUS_COAT = 'translate(-12 -4) rotate(-14 70 100)'

/** The drawings of the records filed in the dressrosa stretch of the route. */
export const dressrosaArt = {
  // A strip torn from a pair of overalls, bunched on the deck of the Sun
  // Pirates' ship between the seams of the planks, a strap trailing off it
  // and a wet sweep on the boards beside. Koala tears it
  // from her own clothes in episode 541 and scrubs the deck with it, and
  // will not stop.
  'koala': [
    {
      d: 'M8 180 L14 161 M30 112 L40 80 M80 180 V162 M80 102 V80 M152 180 L148 168 M134.1 124 L120 80',
      role: 'soft',
    },
    {
      d: 'M34.5 115.5 L51.9 103.9 L72.2 109.7 L92.5 98.1 L115.7 106.8 L127.3 121.3 L118.6 132.9 L124.4 147.4 L98.3 153.2 L75.1 159 L49 153.2 L31.6 147.4 L37.4 141.6 L25.8 135.8 L36 130 L27.2 124.2 Z',
      role: 'accent',
    },
    {
      d: 'M51.9 103.9 C57.7 118.4 69.3 130 78 141.6 M92.5 98.1 C89.6 115.5 95.4 130 107 138.7',
      role: 'soft',
    },
    { d: 'M43.2 159 C69.3 167.7 101.2 161.9 127.3 153.2', role: 'ambient' },
    {
      d: 'M124.4 127.1 C138.9 130 150.5 141.6 150.5 153.2 M121.5 138.7 C133.1 141.6 138.9 147.4 140.3 156.1',
      role: 'soft',
    },
    {
      d: 'M20 96 C28 86 38 82 46 84 M104 176 C112 168 124 166 132 170',
      role: 'ambient',
      dashed: true,
    },
  ],

  // An island split down the middle, fire on one side and ice on the other.
  'punk-hazard-arc': [
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

  // A tall fenced gate with hazard stripes and a warning sign, flames rising
  // behind it.
  'punk-hazard': [
    { d: 'M16 150 V58 H144 V150', role: 'accent' },
    { d: 'M16 74 H144 M16 90 H144', role: 'accent' },
    {
      d: 'M28 74 L40 90 M52 74 L64 90 M76 74 L88 90 M100 74 L112 90 M124 74 L136 90',
      role: 'soft',
    },
    { d: 'M34 150 V90 M52 150 V90 M108 150 V90 M126 150 V90', role: 'soft' },
    { d: 'M66 150 V100 H94 V150', role: 'accent' },
    { d: 'M80 104 L94 128 H66 Z', role: 'soft' },
    { d: 'M80 112 V120', role: 'soft' },
    {
      d: 'M24 58 C20 44 30 36 28 22 C38 32 42 44 38 58 M64 58 C60 40 74 30 70 12 C84 26 86 44 80 58 M110 58 C106 46 116 38 114 26 C124 36 128 48 124 58',
      role: 'ambient',
    },
    { d: 'M-4 150 H164', role: 'ambient' },
    {
      d: 'M-4 166 q10 -8 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0',
      role: 'ambient',
      dashed: true,
    },
    {
      d: 'M-4 182 q10 -8 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0',
      role: 'ambient',
    },
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

  // A small dragon's tail curled round the hilt of a sword. The whole dragon,
  // grown, is drawn from 1047, in `dressrosaRedrawn`.
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

  // The island's edge seen from the sea as the crew comes in at 629: a wall
  // of huge rocks with mist at their foot, the ship small on the water.
  'dressrosa-arc': [
    {
      d: 'M-4 124 L2 92 L14 78 L24 82 L36 66 L52 62 L60 74 L70 58 L88 50 L102 58 L108 74 L118 66 L134 68 L142 80 L156 78 L164 96',
    },
    {
      d: 'M24 82 L22 112 M36 66 L32 114 M70 58 L64 108 M88 50 L82 110 M118 66 L114 112 M142 80 L138 112',
      role: 'soft',
    },
    {
      d: 'M40 76 l8 8 M38 90 l10 10 M74 70 l8 8 M72 84 l10 10 M92 64 l10 10 M90 80 l12 12 M122 78 l8 8 M120 92 l10 10 M146 92 l8 8',
      role: 'ambient',
    },
    {
      d: 'M-4 122 C20 116 40 126 60 118 S100 124 120 116 S150 126 164 118',
      role: 'ambient',
      dashed: true,
    },
    {
      d: 'M-4 136 C24 130 48 140 76 134 S124 140 164 132',
      role: 'ambient',
      dashed: true,
    },
    { d: 'M-4 150 H94 M134 150 H164', role: 'ambient' },
    { d: 'M96 158 H132 L126 167 H102 Z' },
    { d: 'M114 158 V120' },
    {
      d: 'M98 126 C108 130 120 130 130 126 V150 C120 154 108 154 98 150 Z',
      role: 'accent',
    },
    ...SEA.slice(1),
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

  // A walking cane, and a roulette wheel beside it.
  'issho': [
    { d: 'M60 40 V172' },
    { d: 'M68 40 V172' },
    { d: 'M60 40 C60 20 92 20 92 40' },
    { d: 'M68 40 C68 28 84 28 84 40' },
    { d: circle(118, 146, 26), role: 'accent' },
    { d: circle(118, 146, 14) },
    {
      d: 'M118 120 V132 M118 160 V172 M92 146 H104 M132 146 H144',
      role: 'soft',
    },
    { d: dots([[128, 128]]), role: 'accent' },
    shadow(84, 184, 52),
  ],

  // His long coat standing on its hem, open at the front, in one outline
  // from the shoulders down the sleeves to the hem: the plumed collar low
  // over the shoulders and down the lapels, the sleeves hanging straight
  // with a stripe down each and a plumed cuff, the lining and the far
  // sleeve hatched. He wears it when he walks into the ring for Block B at
  // the end of episode 635 (chapter 706). No barrier: that is 637.
  'bartolomeo': [
    {
      d: 'M47.6 97.7 Q24.1 96.6 27.9 94.1 L50.4 94.3 Q30.1 90.8 37 88.9 L57.5 91.5 Q43.4 86.2 52.3 85.1 L67.9 89.7 Q62 83.2 71.7 83.2 L80 89 Q83.2 82.4 92.3 83.4 L92.1 89.7 Q104 83.9 111.1 85.7 L102.5 91.5 Q121.3 87.4 125.4 89.9 L109.6 94.3 Q132.5 92.5 133 95.2 L112.4 97.7 L112 100 L96 112 L90 134 L84 112 Q80 100 76 112 L70 134 L64 112 L48 100 Z',
      role: 'accent',
    },
    {
      d: 'M64 182 Q51 187 38 182 L39 160 L19 158 C19 136 21 114 27 101 L47.6 97.7 M96 182 Q109 187 122 182 L121 160 L141 158 C141 136 139 114 133 101 L112.4 97.7',
    },
    { d: 'M70 134 L64 182 Q80 177 96 182 L90 134' },
    { d: 'M42 108 L39 158 M118 108 L121 158', role: 'soft' },
    {
      d: 'M30 104 C28 122 28 140 29 158 M130 104 C132 122 132 140 131 158',
      role: 'soft',
    },
    {
      d: 'M19 158 l2.5 5 l2.5 -3 l2.5 5 l2.5 -4 l2.5 5 l2.5 -4 l2.5 5 l2.5 -3 M121 158 l2.5 4 l2.5 -3 l2.5 5 l2.5 -4 l2.5 5 l2.5 -4 l2.5 5 l2.5 -3',
      role: 'soft',
    },
    { d: 'M72 168 l8 -8 M70 180 l14 -14 M82 180 l11 -11', role: 'ambient' },
    {
      d: 'M123 122 l12 -12 M123 138 l14 -14 M123 154 l14 -14',
      role: 'ambient',
    },
    shadow(80, 192, 62),
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

  // His dark cape standing on its hem under its great frilled ruff, the
  // puffs of the ruff seen from a little above, the cape falling open at
  // the front and its far side hatched. He wears it when the Chinjao family
  // steps in for Lucy in episode 633. The polearm is not his until the
  // C Block.
  'sai': [
    {
      d: 'M44 58 C38 50 46 42 54 46 C56 38 66 36 70 42 C74 34 86 34 90 42 C94 36 104 38 106 46 C114 42 122 50 116 58 C122 64 116 74 108 72 C106 80 96 82 92 76 C88 82 72 82 68 76 C64 82 54 80 52 72 C44 74 38 64 44 58 Z',
      role: 'accent',
    },
    {
      d: 'M64 56 C70 52 90 52 96 56 M54 46 C58 52 60 56 64 58 M106 46 C102 52 100 56 96 58 M70 42 L74 52 M90 42 L86 52 M52 72 L60 64 M108 72 L100 64 M68 76 L72 66 M92 76 L88 66',
      role: 'soft',
    },
    {
      d: 'M48 72 C36 78 28 90 28 104 L22 178 M112 72 C124 78 132 90 132 104 L138 178',
    },
    { d: 'M76 80 C74 120 68 150 62 178 M84 80 C86 120 92 150 98 178' },
    {
      d: 'M22 178 Q32 172 42 180 Q52 186 62 178 M98 178 Q108 172 118 180 Q128 186 138 178 M62 178 Q80 170 98 178',
    },
    {
      d: 'M44 96 C42 124 40 150 38 178 M116 96 C118 124 120 150 122 178',
      role: 'soft',
    },
    {
      d: 'M66 172 l6 -8 M74 172 l8 -10 M84 172 l8 -10 M92 174 l4 -6',
      role: 'ambient',
    },
    {
      d: 'M124 108 l6 -6 M125 124 l8 -8 M126 140 l9 -9 M127 156 l9 -9 M128 170 l8 -8',
      role: 'ambient',
    },
    shadow(80, 192, 62),
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

  // A bunch of grapes stood on its tip, the grapes on the far side
  // hatched, the stalk above picked bare at two twigs and one grape rolled
  // off beside it. Sugar is eating grapes the first time she is seen, at
  // Doflamingo's side in episode 608.
  'sugar': [
    {
      d: (
        [
          [62, 86],
          [80, 86],
          [98, 86],
          [53, 101.6],
          [71, 101.6],
          [89, 101.6],
          [107, 101.6],
          [62, 117.2],
          [80, 117.2],
          [98, 117.2],
          [71, 132.8],
          [89, 132.8],
          [80, 148.4],
        ] satisfies [number, number][]
      )
        .map(([x, y]) => circle(x, y, 9))
        .join(' '),
      role: 'accent',
    },
    {
      d: 'M99 92 l6 -6 M108 107.6 l6 -6 M99 123.2 l6 -6 M90 138.8 l6 -6 M81 154.4 l6 -6',
      role: 'ambient',
    },
    { d: 'M80 77 C80 64 84 54 92 48 C98 44 102 36 100 28' },
    {
      d: 'M84 62 C76 60 68 62 62 68 M62 68 l-5 4 M62 68 l1 6 M70 62 l-2 -6 M90 52 C98 54 106 58 110 66 M110 66 l5 4 M110 66 l-2 6',
      role: 'soft',
    },
    { d: 'M100 28 C110 22 122 26 126 34 C116 40 106 36 100 28', role: 'soft' },
    { d: circle(124, 156, 8) },
    shadow(80, 166, 36),
    shadow(124, 172, 12),
  ],

  // His hat set down on the stone rail of the colosseum: a small crown with
  // its band, the top hatched, and the ring of long pointed petals standing
  // round it, a zigzag down each. He is shown in it on the colosseum's
  // screens in episode 632, as its hero. No sword and no banner: his cape
  // only flaps in a fight much later.
  'diamante': [
    {
      d: 'M52 106.2 Q30.1 108.6 17 94.9 Q34 86.5 53.8 96.2 M54.1 95.3 Q33 88.9 26.3 71.1 Q45.3 70 59.7 86.7 M60.4 86 Q43.4 71.9 44.2 52.9 Q62.1 59.3 68.8 80.3 M69.7 79.9 Q59.7 60.3 67.8 43.2 Q81.7 56 79.8 78 M80.2 78 Q78.3 56 92.2 43.2 Q100.3 60.3 90.3 79.9 M91.2 80.3 Q97.9 59.3 115.8 52.9 Q116.6 71.9 99.6 86 M100.3 86.7 Q114.7 70 133.7 71.1 Q127 88.9 105.9 95.3 M106.2 96.2 Q126 86.5 143 94.9 Q129.9 108.6 108 106.2',
      role: 'accent',
    },
    {
      d: 'M47.5 100.3 L40.2 102.5 L35.4 94.9 L27.4 99.5 M52.3 88 L44.7 87.2 L43.3 78.3 L34.1 79.5 M61.5 78.6 L54.8 74.9 L57 66.2 L48.1 63.7 M73.7 73.6 L69 67.5 L74.4 60.3 L67.2 54.6 M86.3 73.6 L84.2 66.2 L91.9 61.6 L87.4 53.5 M98.5 78.6 L99.4 71 L108.3 69.8 L107.3 60.6 M107.7 88 L111.5 81.4 L120.2 83.7 L122.9 74.8 M112.5 100.3 L118.6 95.6 L125.7 101.2 L131.6 94.1',
      role: 'soft',
    },
    { d: 'M54 108 A26 26 0 0 1 106 108' },
    { d: 'M48 110 C56 120 104 120 112 110 C104 104 56 104 48 110 Z' },
    { d: 'M55 99 Q80 108 105 99', role: 'soft' },
    { d: 'M64 88 l8 -6 M68 95 l14 -11 M80 95 l13 -10', role: 'ambient' },
    { d: 'M12 120 H148 V128 H12 Z' },
    { d: 'M18 128 V162 M142 128 V162 M10 162 H150' },
    {
      d: 'M18 145 H142 M60 128 V145 M100 128 V145 M40 145 V162 M80 145 V162 M120 145 V162',
      role: 'soft',
    },
    {
      d: 'M22 136 l6 -6 M22 152 l8 -8 M132 136 l6 -6 M130 154 l8 -8',
      role: 'ambient',
    },
    shadow(80, 176, 66),
  ],

  // The empty spade chair of the Hall of Suits, in three-quarters: a tall
  // back cut to the outline of a spade, its thickness showing on the right
  // and that side hatched, on a broad seat with carved legs. Doflamingo's
  // executives sit in their suit chairs in episode 629, and Pica's is the
  // spade, his own shape still in shadow.
  'pica': [
    {
      d: 'M74 12 C62 32 36 48 36 74 C36 92 54 100 68 90 C66 102 58 110 50 112 H102 C94 110 86 102 84 90 C98 100 116 92 116 74 C116 48 90 32 78 12 Z',
      role: 'accent',
    },
    {
      d: 'M78 12 L84 16 C96 36 124 52 124 78 C124 96 106 104 92 96 M102 112 H110 C102 110 95 104 92 96',
    },
    {
      d: 'M76 26 C66 42 46 56 46 74 C46 86 58 90 70 82 M76 26 C86 42 106 56 106 74 C106 86 94 90 82 82',
      role: 'soft',
    },
    {
      d: 'M110 52 l6 -6 M114 64 l7 -7 M116 78 l7 -7 M110 92 l7 -7',
      role: 'ambient',
    },
    { d: 'M30 112 H118 L136 130 H48 Z' },
    { d: 'M48 130 V142 H136 V130' },
    { d: 'M30 112 V124 L48 142', role: 'soft' },
    { d: 'M40 118 C66 124 108 124 128 124', role: 'soft' },
    {
      d: 'M52 142 C50 154 56 162 52 174 M132 142 C134 154 128 162 132 174 M34 124 C32 136 36 144 34 154 M118 130 V156',
    },
    { d: 'M128 134 l6 -4', role: 'ambient' },
    shadow(86, 182, 56),
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

  // His white cap in three-quarters, turned to the left, the seams of its
  // crown meeting at the button and the brim hatched underneath, with a
  // horn coming out of each side and curving up. That is how the
  // colosseum's screens show him in episode 632. No fish on the front and
  // no fin.
  'dellinger': [
    { d: 'M46 128 C42 94 58 72 84 72 C108 72 124 92 122 126' },
    { d: 'M46 128 C66 136 104 136 122 126' },
    {
      d: 'M84 72 C76 90 70 110 70 133 M84 72 C96 90 104 108 106 131',
      role: 'soft',
    },
    { d: dot(84, 72) },
    { d: 'M48 126 C34 126 16 132 14 142 C28 150 52 146 66 134' },
    {
      d: 'M22 142 l6 -6 M32 143 l7 -7 M42 141 l7 -7 M52 138 l5 -5',
      role: 'ambient',
    },
    { d: 'M110 104 l8 -6 M114 116 l8 -6 M116 126 l6 -4', role: 'ambient' },
    { d: 'M54 92 C40 86 28 72 30 50 C38 64 50 72 62 80', role: 'accent' },
    {
      d: 'M114 90 C126 82 136 66 132 44 C126 60 114 68 104 76',
      role: 'accent',
    },
    {
      d: 'M37 74 l6 -4 M33 64 l5 -3 M124 72 l-5 -4 M129 60 l-5 -2',
      role: 'soft',
    },
    shadow(76, 158, 56),
  ],

  // His belt, seen from above as a loop, with the square buckle at the
  // front. He wears it over the blue jumpsuit from his first scene in
  // episode 608. The letter on the buckle is left out.
  'lao-g': [
    { d: 'M20 100 C40 116 120 116 140 100 L140 118 C120 134 40 134 20 118 Z' },
    { d: 'M20 100 C40 84 120 84 140 100' },
    {
      d: 'M40 93 L38 104 M54 90 L52 102 M68 88.5 L67 101 M92 88.5 L93 101 M106 90 L108 102 M120 93 L122 104',
      role: 'ambient',
    },
    { d: 'M64 104 h32 v34 h-32 z', role: 'accent' },
    { d: 'M70 110 h20 v22 h-20 z M80 112 v18', role: 'soft' },
    {
      d: 'M24 109 C36 117 50 120 64 121 M96 121 C110 120 124 117 136 109',
      role: 'soft',
    },
    shadow(80, 150, 50),
  ],

  // His tall red peaked cap in three-quarters: the flat top tilted toward
  // us, the crown flaring up to it, the band round its base and the short
  // black peak hatched underneath, its far side hatched too. He wears it
  // from his first scene in episode 608. No crew mark on the front.
  'machvise': [
    { d: ellipse(92, 60, 36, 11), transform: 'rotate(-8 92 60)' },
    { d: 'M57 66 L50 128 M128 55 L122 126' },
    { d: 'M50 128 C64 136 108 136 122 126' },
    {
      d: 'M51 112 C66 120 106 120 123 110 M50 128 L51 112 M122 126 L123 110',
      role: 'accent',
    },
    { d: 'M78 72 L74 116 M104 70 L104 114', role: 'soft' },
    { d: 'M112 76 l10 -10 M112 92 l11 -11 M112 106 l10 -10', role: 'ambient' },
    { d: 'M52 124 C36 126 20 134 20 144 C36 150 64 144 80 133' },
    {
      d: 'M28 145 l6 -6 M38 146 l8 -8 M50 144 l8 -8 M62 140 l7 -7',
      role: 'ambient',
    },
    { d: 'M54 118 C64 128 76 132 86 132', role: 'soft' },
    shadow(76, 160, 54),
  ],

  // A hand of playing cards fanned out on the table, their faces blank, the
  // front card standing a little proud with its edge showing, and her pink
  // bead necklace lying in a loop at their foot. She is at cards with Lao G
  // in episodes 608 and 629. No brush: she never holds one.
  'jora': [
    { d: JORA_CARD_EDGE, transform: 'rotate(-36 82 150)' },
    { d: JORA_CARD_EDGE, transform: 'rotate(-24 82 150)' },
    { d: JORA_CARD_EDGE, transform: 'rotate(-12 82 150)' },
    { d: JORA_CARD_EDGE },
    { d: 'M82 150 V70 H134 V150 Z', transform: 'rotate(12 82 150)' },
    {
      d: 'M134 70 l4 3 V153 l-4 -3 M82 150 l4 3 H138',
      transform: 'rotate(12 82 150)',
    },
    {
      d: 'M89 143 V77 H127 V143 Z',
      role: 'soft',
      transform: 'rotate(12 82 150)',
    },
    {
      d: (
        [
          [118, 166],
          [115.1, 169.8],
          [106.9, 173.1],
          [94.5, 175.2],
          [80, 176],
          [65.5, 175.2],
          [53.1, 173.1],
          [44.9, 169.8],
          [42, 166],
          [44.9, 162.2],
          [53.1, 158.9],
          [65.5, 156.8],
          [80, 156],
          [94.5, 156.8],
          [106.9, 158.9],
          [115.1, 162.2],
        ] satisfies [number, number][]
      )
        .map(([x, y]) => circle(x, y, 4.3))
        .join(' '),
      role: 'accent',
    },
    shadow(80, 184, 54),
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

  // His long black coat laid flat on the floor, the stand-up collar with its
  // gold studs at the top, the sleeves out and the far half hatched, and his
  // black top hat standing beside it, hatched where it turns away. He is
  // dressed so from his first scene in episode 608. No goggles, and nothing
  // bursting.
  'gladius': [
    { d: 'M50 34 Q70 26 90 34 L88 44 Q70 38 52 44 Z', transform: GLADIUS_COAT },
    {
      d: (
        [
          [54, 40],
          [61, 37],
          [68, 35.6],
          [75, 35.6],
          [82, 37],
          [88, 40],
        ] satisfies [number, number][]
      )
        .map(([x, y]) => circle(x, y, 2.4))
        .join(' '),
      role: 'accent',
      transform: GLADIUS_COAT,
    },
    {
      d: 'M52 44 L30 52 L14 108 L26 112 L38 74 L36 170 H104 L102 74 L114 112 L126 108 L110 52 L88 44',
      transform: GLADIUS_COAT,
    },
    {
      d: 'M70 40 V170 M38 74 C44 70 48 64 52 54 M102 74 C96 70 92 64 88 54',
      role: 'soft',
      transform: GLADIUS_COAT,
    },
    {
      d: 'M76 60 l10 -10 M76 80 l20 -20 M76 100 l22 -22 M76 120 l22 -22 M76 140 l22 -22 M78 158 l20 -20',
      role: 'ambient',
      transform: GLADIUS_COAT,
    },
    { d: 'M114 168 L116 120 C116 114 148 114 148 120 L150 168' },
    { d: ellipse(132, 120, 16, 4.5) },
    { d: 'M106 168 C106 162 158 162 158 168 C158 174 106 174 106 168 Z' },
    { d: 'M136 134 l8 -7 M135 148 l11 -10 M138 158 l9 -8', role: 'ambient' },
    shadow(132, 182, 26),
  ],

  // A Marine's rifle and cap dropped in the grass, tiny footprints running
  // off.
  'leo': [
    { d: 'M26 150 L44 140 L48 148 L30 160 Z', role: 'accent' },
    { d: 'M44 140 L126 106 L128 112 L48 148' },
    { d: ellipse(78, 96, 26, 7) },
    { d: 'M58 94 C58 72 98 72 98 94' },
    { d: 'M62 86 q16 6 32 0', role: 'soft' },
    {
      d: dots([
        [100, 140],
        [108, 146],
        [116, 140],
        [124, 146],
        [132, 140],
      ]),
      role: 'accent',
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

  // One of the black bands he wears above each wrist, standing on its own,
  // with its row of big spikes round the middle. The anime shows them as he
  // climbs out of the hole he fell into (739), and they are seen on the
  // ch. 795 pp. 16-17 spread. His club and gourd come later, so they are not
  // here. The inside of the band is hatched where it turns away.
  'kaido': [
    { d: ellipse(80, 109.2, 44, 32.7) },
    { d: ellipse(80, 109.2, 36, 26.8) },
    { d: 'M48.8 122.6 A36 26.8 0 0 1 111.2 122.6', role: 'soft' },
    { d: 'M124 109.2 V136 A44 32.7 0 0 1 36 136 V109.2' },
    {
      d: 'M124 114.1 L152 122.6 L124 131.1 Q118 122.6 124 114.1 M118.2 136.4 L135.2 157 L109.2 150.9 Q107.5 139.8 118.2 136.4 M95.9 152.8 L92.5 175.3 L79.4 156.9 Q85.1 143.9 95.9 152.8 M64.7 156.2 L44 169 L51.3 145.7 Q64 143.2 64.7 156.2 M40.9 142 L12.3 140.9 L36.4 125.6 Q44.4 132.2 40.9 142',
      role: 'accent',
    },
    {
      d: 'M84 106.6 L89 85.9 M91 108.1 L96 87.3 M98 110.8 L103 90',
      role: 'ambient',
    },
    shadow(80, 184, 60),
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

  // The slime in the shape of an axolotl, side on, head to the left: the
  // frilled gills sweeping back from its head, a ridge along its back to the
  // tail, stubby legs, drips running off its belly and gas trailing up.
  // Caesar lets it out on the burning half of the island in episode 594.
  // No eyes and no mouth.
  'smiley': [
    {
      d: 'M18 120 C14 98 30 84 52 86 C76 88 98 98 120 102 C134 104 146 102 156 94 C154 110 142 122 122 128 C104 134 92 142 70 144 C46 146 22 140 18 120 Z',
    },
    { d: 'M76 90 C88 82 112 86 130 96 C140 98 150 96 156 94', role: 'soft' },
    {
      d: 'M44 88 C40 72 46 58 58 50 M52 88 C56 74 68 64 84 62 M58 92 C66 82 80 78 96 80',
      role: 'accent',
    },
    {
      d: 'M44 76 l-5 -2 M46 66 l-5 -3 M52 57 l-4 -4 M60 76 l-3 -5 M68 68 l-2 -5 M76 64 l-1 -5 M70 84 l-1 -5 M80 80 l0 -5 M88 79 l1 -5',
      role: 'soft',
    },
    {
      d: 'M36 140 C34 150 38 158 46 158 M96 136 C96 148 102 154 110 152',
      role: 'soft',
    },
    {
      d: 'M24 134 v10 M60 144 v14 M74 144 v8 M86 140 v12 M124 128 v10',
      role: 'soft',
    },
    {
      d: 'M44 136 l10 -10 M58 140 l12 -12 M74 138 l10 -10 M100 132 l10 -10 M118 124 l8 -8',
      role: 'ambient',
    },
    {
      d: 'M100 86 C94 74 104 66 98 54 M118 92 C114 80 124 72 118 60 M136 98 C134 88 142 82 138 72',
      role: 'ambient',
      dashed: true,
    },
    shadow(80, 170, 64),
  ],

  // A rocky island seen from the sea, a tall craggy rock rising over the
  // rooftops along its shore.
  'dressrosa': [
    {
      d: 'M30 128 L38 100 L34 88 L46 72 L50 56 L64 48 L76 52 L88 44 L100 50 L110 64 L118 70 L122 90 L130 104 L132 128',
      role: 'accent',
    },
    {
      d: 'M56 64 L62 80 L58 96 M96 60 L90 78 L98 92 M76 70 L80 88',
      role: 'soft',
    },
    {
      d: 'M-4 150 C10 140 20 132 30 128 H132 C144 132 152 140 164 150',
      role: 'accent',
    },
    { d: house(16, 12, 138, 130), role: 'soft' },
    { d: house(40, 14, 134, 124), role: 'soft' },
    { d: house(106, 14, 134, 124), role: 'soft' },
    { d: house(132, 12, 138, 130), role: 'soft' },
    { d: 'M68 150 V138 h10 V150 M84 150 V136 h10 V150', role: 'soft' },
    ...SEA,
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

  // A long iron bridge running out over the sea to an island of huge wild
  // plants.
  'green-bit': [
    { d: 'M-4 120 L100 96 M-4 128 L100 104', role: 'accent' },
    {
      d: 'M12 125 V150 M40 118 V150 M68 112 V150 M96 105 V150',
      role: 'accent',
    },
    {
      d: 'M12 116 L26 113 M40 110 L54 107 M68 103 L82 100',
      role: 'soft',
      dashed: true,
    },
    { d: 'M96 150 C104 120 124 104 164 100', role: 'ambient' },
    {
      d: 'M120 104 C118 80 116 60 124 40 M144 100 C146 76 150 60 146 36',
      role: 'soft',
    },
    {
      d: 'M124 40 C108 36 100 46 102 56 C112 50 120 48 124 40 M124 40 C136 30 150 34 152 44 C142 44 132 44 124 40',
      role: 'accent',
    },
    {
      d: 'M146 36 C140 22 150 12 162 14 C160 24 154 32 146 36',
      role: 'accent',
    },
    {
      d: 'M108 100 C104 90 106 80 112 76 M134 102 C130 90 134 82 140 80',
      role: 'soft',
    },
    { d: 'M104 124 q4 -14 16 -10 q6 -14 20 -6 q10 -12 26 -2', role: 'soft' },
    ...SEA,
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

/** The records of this stretch drawn again, from the episode the story changes them. */
export const dressrosaRedrawn: Redrawings = {
  // The whole dragon, grown, wound twice round the same sword. Its head is
  // hidden behind the hilt, so only the swept-back horns and the long
  // whiskers show past it; the neck comes out on the far side, the body
  // crosses in front of the hilt and the blade and behind them, with its
  // belly plates hatched, and the tail curls past the point. Shinobu's fruit
  // ages him in ch. 1023, and the anime shows the dragon from 1047.
  momonosuke: [
    {
      episode: 1047,
      chapter: 1023,
      value: [
        { d: 'M66 34 h28 v8 h-28 z' },
        {
          d: 'M72 42 V87.9 M72 99.8 V110 M88 42 V84.5 M88 96.7 V110 M72 42 H88',
        },
        { d: 'M60 110 h40' },
        {
          d: 'M74 110 L76.2 132.9 M77.4 144.7 L80 172 M86 110 L83.9 131.4 M82.8 143.5 L80 172',
        },
        {
          d: 'M88 41 C98 34 104 22 102 6 C112 20 108 36 88 47 M88 50 C104 44 120 32 128 14 C132 34 116 48 88 55',
        },
        {
          d: 'M95 37 l6 4 M100 28 l6 3 M101 47 l4 5 M110 41 l5 5 M119 32 l5 4',
          role: 'ambient',
        },
        {
          d: 'M72 50 C60 48 54 40 44 42 C32 44 32 58 18 56 M72 58 C62 62 58 74 48 76 C38 78 36 90 24 92',
        },
        {
          d: 'M88 54 C104 57 114 66 114 76 M88 63 C102 66 114 75 114 85',
          role: 'accent',
        },
        {
          d: 'M114 76 C114 85.7 46 89.3 46 99 M114 85 C114 94.7 46 98.3 46 108 M112 122 C112 131.2 52 134.8 52 144 M112 131 C112 140.2 52 143.8 52 153',
          role: 'accent',
        },
        {
          d: 'M52.6 104.1 C57.1 105.8 63.6 107.3 70.7 108.8 M87.3 112.2 C100.2 114.9 111.2 117.8 112 121.6 M46.1 108.6 C47.2 112.6 59.6 115.5 73.3 118.3 M86.6 121.1 C94.1 122.6 101 124.2 105.8 126.1 M59.3 148.7 C63.9 150.1 70.2 151.4 76.6 152.7 M83.4 154.1 C94.4 156.4 104 158.7 104 162 M52.1 153.5 C53.2 157 65.3 159.5 77.6 161.9 M82.5 162.9 C93.8 165.2 104 167.7 104 171',
          role: 'accent',
        },
        {
          d: 'M106.6 82.8 l-1.5 6 M92.6 86.4 l-1.5 6 M75.7 89.8 l-1.5 6 M59.7 93.3 l-1.5 6 M48.7 97.3 l-1.5 6 M105.5 128.5 l-1.5 6 M93.2 132.1 l-1.5 6 M78.2 135.3 l-1.5 6 M64.1 138.6 l-1.5 6 M54.4 142.4 l-1.5 6',
          role: 'ambient',
        },
        {
          d: 'M104 162 C104 170 90 175 70 179 M104 171 C102 177 90 179 70 179 C60 181 52 174 54 167 C56 161 64 161 64 167',
          role: 'accent',
        },
        shadow(80, 190, 30),
      ],
    },
  ],
}
