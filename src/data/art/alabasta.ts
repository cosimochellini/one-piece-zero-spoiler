import {
  circle,
  dot,
  dots,
  ellipse,
  house,
  SEA,
  shadow,
  wave,
} from '~/lib/svg/primitives'

import type { Drawings, Redrawings, Stroke } from './stroke'

/** One of Vivi's Peacock Slashers, a pointed jewel, drawn about its centre. */
const PEACOCK_SLASHER =
  'M0 -30 C12 -30 18 -16 14 -2 L0 34 L-14 -2 C-18 -16 -12 -30 0 -30 Z'

/**
 * Bon Clay's ballet shoe and its ribbons, in his first drawing and, smaller,
 * on the sill of the Gate of Justice from 451.
 */
const BON_CLAY_SHOE: Stroke[] = [
  {
    d: 'M34 128 C20 128 14 150 22 166 C50 172 96 170 118 160 C124 157 125 150 120 146 C110 142 96 136 84 134',
  },
  { d: 'M84 134 C70 148 46 146 34 128 C48 122 72 124 84 134 Z' },
  { d: 'M120 146 L118 160 M122 151 h4 M121 156 h4', role: 'soft' },
  { d: 'M28 160 Q70 172 116 156 M98 138 q5 10 2 26', role: 'soft' },
  { d: 'M30 138 l-6 4 M28 150 l-6 3', role: 'ambient' },
  {
    d: 'M40 136 C22 112 26 88 42 88 C54 88 54 104 44 104 M78 136 C90 110 72 94 58 86 C50 82 50 72 60 72',
    role: 'accent',
  },
]

/** Mr. 13's left clam shell: its ribs, the claws on its lip, its hinge. */
const CLAWED_SHELL: Stroke[] = [
  {
    d: 'M52 154 L20 108 Q22 96 30 90 Q34 80 44 78 Q52 70 62 72 Q72 68 84 74 L52 154',
  },
  {
    d: 'M52 154 L28 98 M52 154 L40 84 M52 154 L54 76 M52 154 L68 74',
    role: 'soft',
  },
  {
    d: 'M22 102 l-7 -4 l9 -2 M30 90 l-5 -6 l8 -1 M44 78 l-2 -8 l7 3 M62 72 l1 -8 l6 5 M80 72 l4 -7 l3 7',
  },
  { d: 'M44 146 L36 162 L52 160 L68 162 L60 146' },
]

/** A vulture's left wing seen from below, spread. */
const VULTURE_WING =
  'M80 46 C70 30 52 22 34 26 C24 28 14 34 8 42 L20 42 L12 50 L26 48 L20 56 L34 52 C50 54 66 54 80 56'

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

  // A tenor saxophone in 3/4, the keys down its body and the golden bell
  // open: the instrument he carries when he greets the ship at 64. That it
  // fires is shown the next episode.
  'igaram': [
    { d: 'M56 42 C58 90 60 128 64 148 C68 170 104 172 110 150 L120 80' },
    { d: 'M70 44 C70 90 72 124 76 144 C80 158 94 158 98 146 L104 84' },
    { d: 'M104 84 C102 79 100 76 98 72.5 M120 80 C124 71 128 64 133.7 59.6' },
    {
      d: 'M98 72.5 a19 7 -20 1 0 35.7 -12.9 a19 7 -20 1 0 -35.7 12.9',
      role: 'accent',
    },
    { d: 'M106 70 l7 -5 M113 69 l8 -5.5 M121 66.5 l6 -4', role: 'ambient' },
    { d: 'M56 42 C55 30 47 24 38 24 M70 44 C68 26 56 16 40 17' },
    { d: 'M38 24 L27 22 L29 16 L40 17' },
    {
      d: `${circle(66, 70, 3.5)} ${circle(67, 88, 3.5)} ${circle(68, 106, 3.5)} ${circle(70, 124, 3.5)}`,
      role: 'soft',
    },
    { d: 'M63 140 H76 M100 136 L111 139', role: 'soft' },
    {
      d: 'M100 152 l6 -5 M104 142 l6 -5 M107 130 l6 -5 M109 118 l6 -5',
      role: 'ambient',
    },
    shadow(84, 184, 36),
  ],

  // A wine barrel from the banquet with her tankard on the lid, the fizz of
  // the sparkling tea she drank all night, and the nun's veil she pulls off
  // once the pirates are asleep (64).
  'miss-monday': [
    { d: ellipse(72, 96, 30, 8) },
    { d: 'M42 96 C35 122 35 144 42 168 M102 96 C109 122 109 144 102 168' },
    { d: 'M42 168 Q72 180 102 168' },
    { d: 'M38 116 Q72 126 106 116 M38 150 Q72 160 106 150', role: 'soft' },
    {
      d: 'M60 104 C57 128 57 150 60 175 M86 104 C89 128 89 150 86 175',
      role: 'soft',
    },
    { d: 'M99 128 l6 -4 M99 140 l6 -4', role: 'ambient' },
    { d: 'M52 92 V64 H76 V92' },
    { d: ellipse(64, 64, 12, 3.5) },
    { d: 'M76 70 q11 0 11 9 q0 8 -11 8' },
    {
      d: dots([
        [60, 52],
        [67, 46],
        [62, 38],
      ]),
      role: 'soft',
    },
    {
      d: 'M90 90 C104 84 120 94 122 112 C124 132 116 150 124 166 L110 170 C104 150 110 124 96 102',
      role: 'accent',
    },
    { d: 'M112 100 C117 120 112 142 116 162', role: 'soft' },
    shadow(80, 188, 46),
  ],

  // The duck himself, side on: the knitted cap, the saddle and its bag, and
  // the barrel canteen with its straw hung at his chest (65).
  'karoo': [
    {
      d: 'M36 120 C36 98 58 90 82 94 C98 96 106 104 108 112 C112 134 94 148 70 148 C48 148 36 138 36 120 Z',
    },
    { d: 'M38 112 L16 98 L24 112 L12 114 L36 124' },
    {
      d: 'M94 97 C100 86 100 74 99 64 C96 58 96 54 99 50 M124 46 L148 50 C153 54 151 59 144 61 L122 61 C116 78 118 98 108 114',
    },
    { d: 'M99 50 C99 30 125 28 124 46' },
    { d: 'M99 50 Q112 45 124 46 M100 53 L97 66', role: 'soft' },
    { d: 'M128 49 Q131 55 127 60', role: 'soft' },
    { d: 'M52 96 C54 84 80 82 86 94 L94 88', role: 'accent' },
    { d: 'M50 104 h20 v16 q-10 5 -20 0z', role: 'soft' },
    {
      d: 'M103 80 L114 104 M110 104 h16 q3 8 0 16 h-16 q-3 -8 0 -16z M122 104 L128 90',
    },
    { d: 'M52 114 C66 106 86 110 94 122', role: 'soft' },
    { d: 'M98 130 l6 -4 M92 140 l6 -4', role: 'ambient' },
    {
      d: 'M64 148 L60 174 M84 148 L88 174 M52 176 l8 -2 l8 2 M80 176 l8 -2 l8 2',
    },
    shadow(74, 186, 42),
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

  // Her Peacock Slashers: sharp jewels on wires looped round a little
  // finger, the near one swung out on its arc. She draws them on Zoro at
  // Whisky Peak (65).
  'nefertari-vivi': [
    { d: 'M42 36 a10 4.5 0 1 0 20 0 a10 4.5 0 1 0 -20 0' },
    { d: 'M42 36 v3 a10 4.5 0 0 0 20 0 v-3', role: 'soft' },
    { d: 'M60 42 C80 60 98 80 104 98' },
    {
      d: PEACOCK_SLASHER,
      role: 'accent',
      transform: 'translate(110 128) rotate(-20)',
    },
    {
      d: 'M0 -30 V-2 V34 M-14 -2 H14',
      role: 'soft',
      transform: 'translate(110 128) rotate(-20)',
    },
    { d: 'M112 100 l10 -2 M120 116 l9 -1 M121 132 l8 1', role: 'ambient' },
    { d: 'M46 42 C38 70 36 96 40 112' },
    { d: PEACOCK_SLASHER, transform: 'translate(42 136) rotate(8) scale(0.6)' },
    {
      d: 'M136 70 C156 110 144 160 104 176 M70 182 C46 180 26 166 18 146',
      role: 'ambient',
      dashed: true,
    },
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

  // A giant's round shield in 3/4, studded, its rim hatched where it turns
  // away, and the long sword behind it, whole, the green hilt below (71).
  'dorry': [
    { d: 'M92 58 L126 14 L140 6 L136 22 L108 70' },
    { d: 'M100 64 L131 18', role: 'soft' },
    { d: ellipse(74, 104, 34, 46) },
    { d: 'M74 58 a34 46 0 0 1 0 92 M82 58 a34 46 0 0 1 0 92', role: 'soft' },
    {
      d: 'M104 80 l7 -3 M108 96 l7 -3 M108 112 l7 -3 M104 128 l7 -3',
      role: 'ambient',
    },
    { d: ellipse(74, 104, 9, 12) },
    {
      d: dots([
        [74, 66],
        [74, 142],
        [44, 104],
        [100, 88],
        [52, 76],
        [96, 76],
        [52, 132],
        [96, 132],
      ]),
      role: 'soft',
    },
    { d: 'M20 144 L52 168' },
    { d: 'M42 162 L52 146 M30 154 L40 138' },
    { d: 'M39 160 L27 177 M33 155.5 L21 172.5', role: 'accent' },
    { d: circle(20, 179, 5), role: 'accent' },
    shadow(76, 190, 50),
  ],

  // A giant's battle-axe planted in the field: one crescent blade on a round
  // base, the haft bound in straps. His red horned helmet lies beside it (71).
  'brogy': [
    { d: 'M80 176 L90 58 M88 177 L98 59' },
    { d: 'M81 160 l8 -7 M82 144 l8 -7 M83 128 l8 -7', role: 'soft' },
    { d: circle(95, 50, 9) },
    {
      d: 'M103 46 L108 20 C132 24 150 46 148 72 C146 94 132 106 116 112 L102 56',
    },
    { d: 'M112 28 C128 36 138 56 136 74 C134 90 126 98 118 104', role: 'soft' },
    {
      d: 'M138 42 l6 -4 M143 58 l6 -3 M144 74 l6 -1 M140 90 l6 1',
      role: 'ambient',
    },
    { d: 'M10 176 C10 140 62 140 62 176 M6 176 H66', role: 'accent' },
    {
      d: 'M14 160 C4 150 2 132 10 118 C12 134 18 144 26 149 M58 160 C68 150 70 132 62 118 C60 134 54 144 46 149',
      role: 'accent',
    },
    { d: 'M12 164 Q36 156 60 164 M36 145 V158', role: 'soft' },
    {
      d: dots([
        [20, 170],
        [28, 168],
        [44, 168],
        [52, 170],
      ]),
      role: 'soft',
    },
    { d: 'M4 176 H156', role: 'ambient' },
    { d: 'M70 182 q14 -4 30 0', role: 'ambient', dashed: true },
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

  // A sword used as a meat skewer, the tip of the blade bitten clean off:
  // he eats the meat aboard the Merry at 79, then the sword with it.
  'wapol': [
    { d: 'M18 182 L38 156 M26 188 L46 162' },
    { d: 'M24 176 l6 3 M30 168 l6 3', role: 'soft' },
    { d: 'M18 148 L64 176' },
    { d: 'M34 148 L48 130 M54 162 L68 144' },
    {
      d: 'M44 132 C30 116 44 92 64 98 C82 86 104 104 92 122 C98 142 74 154 62 144 C50 152 36 144 44 132 Z',
    },
    { d: 'M56 112 l12 12 M66 104 l14 14 M78 100 l10 10', role: 'ambient' },
    { d: 'M88 104 L112 72 M100 114 L126 82' },
    {
      d: 'M112 72 a3.5 3.5 0 0 0 4.7 3.3 a3.5 3.5 0 0 0 4.7 3.3 a3.5 3.5 0 0 0 4.6 3.4',
      role: 'accent',
    },
    { d: 'M96 102 L114 78', role: 'soft' },
    {
      d: dots([
        [132, 66],
        [140, 74],
        [128, 56],
      ]),
      role: 'soft',
    },
    shadow(78, 192, 52),
  ],

  // A ballet shoe on its side, its ribbons curling loose, and the neck of one
  // of the swans on his coat rising beside it. He is first seen at 78. The
  // shoe alone is set down at the Gate of Justice from 451, in
  // `alabastaRedrawn`.
  'bon-clay': [
    ...BON_CLAY_SHOE,
    {
      d: 'M146 176 C130 140 154 120 148 84 C144 60 116 52 108 70 C104 80 112 88 120 82 M108 70 L94 72 L106 78',
      role: 'soft',
    },
    { d: 'M138 176 C124 142 146 122 140 88', role: 'soft' },
    { d: 'M126 120 l6 -4 M128 132 l6 -4 M130 144 l6 -4', role: 'ambient' },
    shadow(72, 184, 54),
  ],

  // His spade in its sheath, slung by its strap: the long round-tipped blade
  // he carries on his back when he turns the ship away at 80. The beast he
  // becomes comes the next episode.
  'dalton': [
    { d: circle(124, 24, 7) },
    { d: 'M117.8 27.1 L90.5 69 M123.7 30.9 L96.4 72.8' },
    { d: 'M85.9 66 L101 75.8 L102.2 88.6 L73.7 70 Z' },
    { d: 'M73.7 70 L29.5 141.5 A15 15 0 0 0 54.7 157.9 L102.2 88.6' },
    { d: 'M58.2 95.7 L85 113.2 M41.1 122.8 L67.1 139.7', role: 'accent' },
    { d: 'M85 113.2 C118.4 127.8 96.2 173 67.1 139.7', role: 'accent' },
    { d: 'M84.7 84.3 L37.7 156.4', role: 'soft' },
    {
      d: 'M87.9 96 l5 3.3 M74.8 116.1 l5 3.3 M66 129.5 l5 3.3 M54 147.9 l5 3.3',
      role: 'ambient',
    },
    { d: 'M108 46 l6 4 M102 56 l6 4', role: 'soft' },
    {
      d: dots([
        [24, 40],
        [44, 24],
        [140, 70],
        [150, 112],
        [20, 92],
        [132, 150],
      ]),
      role: 'ambient',
    },
    shadow(76, 184, 52),
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

  // An afro glove in 3/4 with its bare thumb and the spikes it puts out
  // (83), and one tuft thrown off it, crackling, to stick where it lands
  // (87).
  'kuromarimo': [
    {
      d: 'M76 60 A11 11 0 0 1 95 65.1 A11 11 0 0 1 108.9 79 A11 11 0 0 1 114 98 A11 11 0 0 1 108.9 117 A11 11 0 0 1 95 130.9 A11 11 0 0 1 76 136 A11 11 0 0 1 57 130.9 A11 11 0 0 1 43.1 117 A11 11 0 0 1 38 98 A11 11 0 0 1 43.1 79 A11 11 0 0 1 57 65.1 A11 11 0 0 1 76 60',
      role: 'accent',
    },
    { d: 'M42 108 C30 106 24 96 30 88 C34 84 40 86 42 90' },
    { d: 'M60 134 V156 M92 134 V156' },
    { d: 'M60 156 a16 5 0 0 0 32 0 a16 5 0 0 0 -32 0' },
    {
      d: 'M64 86 a6 6 0 1 1 9 4 M88 98 a6 6 0 1 1 9 4 M68 112 a6 6 0 1 1 9 4',
      role: 'soft',
    },
    {
      d: 'M100 74 L122 62 L106 80 M110 104 L134 108 L110 112 M70 62 L64 38 L78 60',
    },
    { d: 'M104 114 l6 4 M100 124 l5 5', role: 'ambient' },
    {
      d: 'M132 24 A4.5 4.5 0 0 1 141.4 28.5 A4.5 4.5 0 0 1 143.7 38.7 A4.5 4.5 0 0 1 137.2 46.8 A4.5 4.5 0 0 1 126.8 46.8 A4.5 4.5 0 0 1 120.3 38.7 A4.5 4.5 0 0 1 122.6 28.5 A4.5 4.5 0 0 1 132 24',
    },
    {
      d: 'M114 30 l-4 -4 l2 -4 l-4 -4 M148 44 l6 2 l2 -4 l6 2 M128 18 l2 -6 l4 2 l2 -6',
      role: 'ambient',
    },
    shadow(76, 176, 30),
  ],

  // His two clam shells, claws along their lips, struck together over a
  // spark: the flint that lights the bombs the pair drop on agents who fail.
  'mr-13': [
    ...CLAWED_SHELL,
    ...CLAWED_SHELL.map((stroke) => ({
      // The right shell is the left one turned over.
      ...stroke,
      transform: 'matrix(-1 0 0 1 160 0)',
    })),
    { d: 'M112 100 l7 -4 M117 112 l7 -4 M120 124 l7 -4', role: 'ambient' },
    {
      d: 'M80 64 V44 M80 64 l-12 -12 M80 64 l12 -12 M80 64 h-16 M80 64 h16',
      role: 'accent',
    },
    shadow(80, 182, 50),
  ],

  // A parcel bomb dropping, its cloth gathered and tied at the neck and the
  // fuse already lit, under the spread wings of whoever let it go.
  'miss-friday': [
    { d: VULTURE_WING, role: 'ambient' },
    { d: VULTURE_WING, role: 'ambient', transform: 'matrix(-1 0 0 1 160 0)' },
    {
      d: 'M56 140 C44 120 58 106 72 104 L88 104 C102 106 116 120 104 140 C98 158 62 158 56 140 Z',
    },
    { d: 'M72 104 C62 98 62 86 72 90 C74 82 86 82 88 90 C98 86 98 98 88 104' },
    { d: 'M70 104 Q80 108 90 104', role: 'soft' },
    { d: 'M66 118 q4 16 0 30 M94 118 q-4 16 0 30', role: 'soft' },
    { d: 'M100 124 l6 -4 M102 136 l5 -4', role: 'ambient' },
    { d: 'M80 88 C86 78 74 72 82 64' },
    {
      d: 'M82 64 l-2 -9 M82 64 l7 -6 M82 64 l9 1 M82 64 l-8 -4',
      role: 'accent',
    },
    {
      d: 'M40 110 v-16 M120 110 v-16 M46 136 v-12 M114 136 v-12',
      role: 'ambient',
      dashed: true,
    },
    shadow(80, 186, 26),
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

  // A wide-brimmed hat, and a flame standing up out of it. The flame goes out
  // at his death, from 483, in `alabastaRedrawn`.
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

  // The camel side on, one hump under the square saddle with its two knobbed
  // posts, the blanket's diamond stripe and a tassel hanging below (97).
  'matsuge': [
    {
      d: 'M28 118 C26 96 40 72 66 68 C88 64 100 84 108 96 C116 92 120 80 120 64 C120 52 126 44 136 44 C146 44 154 50 156 58 C152 62 144 62 138 62 C132 66 132 76 130 90 C128 108 120 120 108 126 C96 134 50 136 34 128 C30 126 28 122 28 118 Z',
    },
    { d: 'M128 46 l-2 -6 l6 2', role: 'soft' },
    { d: 'M140 52 L136 64 M132 66 Q136 80 132 96', role: 'soft' },
    { d: 'M48 70 L94 72 L98 108 L50 110 Z' },
    {
      d: 'M49 88 L96 90 M50 96 l6 -6 l6 6 l6 -6 l6 6 l6 -6 l6 6 l6 -6 l6 6',
      role: 'accent',
    },
    { d: 'M58 70 V58 M88 71 V59' },
    { d: `${circle(58, 55, 3)} ${circle(88, 56, 3)}`, role: 'soft' },
    { d: 'M50 110 v12 M48 126 l2 -4 l2 4', role: 'soft' },
    { d: 'M40 130 L38 178 M54 133 L56 178 M96 132 L94 178 M108 126 L112 178' },
    { d: 'M28 112 q-8 8 -6 22', role: 'soft' },
    { d: 'M104 112 l6 -4 M110 100 l6 -4', role: 'ambient' },
    { d: 'M4 180 C40 172 120 176 156 180', role: 'ambient', dashed: true },
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

  // The Spiders Cafe at 103: a diamond-patterned bandanna folded over the
  // edge of the counter, and a tall glass she has just poured.
  'miss-doublefinger': [
    { d: 'M14 126 H146 M6 138 H154', role: 'ambient' },
    { d: 'M22 138 H90 L58 182 Z' },
    { d: 'M22 138 l-8 -6 M90 138 l8 -6' },
    {
      d: 'M34 138 L46 154 L58 138 L70 154 L82 138 M46 154 L58 170 L70 154',
      role: 'accent',
    },
    { d: 'M100 130 L96 70 H126 L122 130 Z' },
    { d: ellipse(111, 70, 15, 3.5) },
    { d: 'M97.5 92 H124.5', role: 'soft' },
    { d: 'M118 78 l4 4 M119 92 l4 4 M119 106 l4 4', role: 'ambient' },
    { d: 'M96 132 q15 4 30 0', role: 'ambient', dashed: true },
    { d: 'M128 58 l6 -6 M134 66 l8 -2', role: 'soft' },
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

  // Her necktie, cut like a fir tree and dotted with red baubles, and the
  // glass she sits over at the Spiders Cafe counter (103).
  'miss-merry-christmas': [
    { d: 'M66 22 L80 30 L94 22', role: 'soft' },
    { d: 'M72 30 H88 L85 42 H75 Z' },
    {
      d: 'M75 42 L62 76 H70 L54 110 H64 L46 146 L80 158 L114 146 L96 110 H106 L90 76 H98 L85 42',
    },
    {
      d: `${circle(76, 64, 3)} ${circle(84, 92, 3)} ${circle(66, 100, 3)} ${circle(92, 128, 3)} ${circle(70, 134, 3)} ${circle(98, 108, 3)}`,
      role: 'accent',
    },
    { d: 'M100 124 l6 -4 M102 136 l6 -4', role: 'ambient' },
    { d: 'M80 44 V156', role: 'soft' },
    { d: 'M4 172 H156', role: 'ambient' },
    { d: 'M118 170 L116 138 H142 L140 170 Z' },
    { d: ellipse(129, 138, 13, 3) },
    { d: 'M117 152 H141', role: 'soft' },
    {
      d: dots([
        [126, 146],
        [132, 144],
      ]),
      role: 'soft',
    },
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

  // Her round flintlock, spotted like a frog, its muzzle a frog's head, a
  // puff of smoke at the bore: the gun she shoots a royal guard down with.
  'miss-fathers-day': [
    {
      d: 'M30 92 C30 80 42 76 56 78 H96 C100 78 102 82 102 86 V98 C102 102 100 104 96 104 H60',
    },
    {
      d: 'M60 104 C52 118 50 138 58 152 C50 160 30 158 26 148 C22 132 30 112 40 102',
    },
    { d: 'M64 104 q2 14 16 10 q4 -2 4 -10' },
    { d: 'M72 104 v6', role: 'soft' },
    { d: 'M44 78 L36 64 L46 62 L50 72' },
    {
      d: 'M102 80 C104 66 112 62 118 68 C122 60 134 60 136 70 C144 74 148 86 144 98 C138 108 112 108 102 100',
      role: 'accent',
    },
    { d: ellipse(138, 92, 4, 6), role: 'accent' },
    {
      d: dots([
        [64, 88],
        [76, 92],
        [88, 86],
        [38, 124],
        [44, 140],
      ]),
      role: 'soft',
    },
    { d: 'M60 98 H96', role: 'soft' },
    {
      d: `${circle(154, 84, 5)} ${circle(160, 96, 4)} ${circle(152, 104, 3)}`,
      role: 'ambient',
    },
    { d: 'M30 146 l6 4 M34 136 l6 4', role: 'ambient' },
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

  // The same hat, the flame gone: the hat itself takes his colour, and a thin
  // wisp of smoke rises where the flame stood. He dies at Marineford at 483
  // (ch. 574).
  'portgas-d-ace': [
    {
      episode: 483,
      chapter: 574,
      value: [
        { d: 'M28 122 Q80 104 132 122 Q80 140 28 122z', role: 'accent' },
        {
          d: 'M56 118 C56 84 74 76 80 76 C86 76 104 84 104 118',
          role: 'accent',
        },
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
          d: 'M80 70 C76 62 84 56 80 48 C77 42 83 38 81 32',
          role: 'ambient',
          dashed: true,
        },
      ],
    },
  ],

  // The same shoe, without the swan, set down on the threshold of the Gate of
  // Justice: the two riveted leaves of its arch rise out of the sea and all
  // but meet, the far edge of the gap hatched. He stays behind to open it at
  // 451 (ch. 548).
  'bon-clay': [
    {
      episode: 451,
      chapter: 548,
      value: [
        {
          d: 'M16 150 V70 A64 62 0 0 1 77 8.1 V74 M144 150 V70 A64 62 0 0 0 83 8.1 V74',
        },
        {
          d: 'M24 150 V70 A56 54 0 0 1 77 16.1 M136 150 V70 A56 54 0 0 0 83 16.1',
          role: 'soft',
        },
        {
          d: dots([
            [23.6, 50.2],
            [34, 32.7],
            [50, 19.8],
            [66.5, 13.5],
            [93.5, 13.5],
            [110, 19.8],
            [126, 32.7],
            [136.4, 50.2],
            [20, 86],
            [140, 86],
            [20, 102],
            [140, 102],
            [20, 118],
            [140, 118],
            [20, 134],
            [140, 134],
          ]),
          role: 'ambient',
        },
        { d: 'M84 28 h6 M84 40 h6 M84 52 h6 M84 64 h6', role: 'ambient' },
        { d: 'M6 150 H154' },
        { d: wave(164), role: 'ambient' },
        { d: wave(178), role: 'ambient' },
        ...BON_CLAY_SHOE.map((stroke) => ({
          // The shoe of the first drawing, smaller, standing on the sill.
          ...stroke,
          transform: 'translate(30 30) scale(0.7)',
        })),
      ],
    },
  ],
}
