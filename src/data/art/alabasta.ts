import {
  circle,
  dot,
  dots,
  ellipse,
  house,
  SEA,
  shadow,
  star,
  wave,
} from '~/lib/svg/primitives'

import { type Drawings, moved, type Redrawings, type Stroke } from './stroke'

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

/**
 * The brim of Chopper's top hat and his antlers, in his first drawing and
 * again under the cap of the two years from 517.
 */
const CHOPPER_BRIM = 'M36 120 Q80 100 124 120 L127 131 Q80 112 33 131 Z'

const CHOPPER_ANTLERS: Stroke[] = [
  {
    d: 'M37 102 C22 98 12 84 14 58 M22 96 l-14 2 M16 80 l-12 -6 M14 66 l-6 -12 M15 58 l6 -12',
  },
  {
    d: 'M123 102 C138 98 148 84 146 58 M138 96 l14 2 M144 80 l12 -6 M146 66 l6 -12 M145 58 l-6 -12',
  },
]

/**
 * Ace's hat, in his first drawing under the flame and again from 483, when
 * the flame is gone and the hat itself takes his colour.
 */
const ACE_HAT: Stroke[] = [
  { d: 'M14 112 C30 146 130 146 146 112' },
  { d: 'M14 112 C8 98 20 92 46 100 M114 100 C140 92 152 98 146 112' },
  {
    d: 'M48 108 C46 84 52 62 62 52 Q72 60 80 52 Q88 60 98 52 C108 62 114 84 112 108',
  },
  { d: 'M80 56 Q78 70 80 84', role: 'soft' },
  {
    d: dots([
      [50, 100],
      [58, 103],
      [66, 105],
      [74, 106],
      [82, 106],
      [90, 106],
      [98, 105],
      [106, 103],
    ]),
    role: 'soft',
  },
  { d: 'M26 122 Q80 140 134 122', role: 'soft' },
  {
    d: 'M40 132 l4 -6 M58 136 l4 -6 M76 138 l4 -6 M94 137 l4 -6 M112 134 l4 -6',
    role: 'ambient',
  },
  { d: 'M100 66 l6 -4 M104 80 l6 -4 M106 94 l6 -4', role: 'ambient' },
]

/**
 * The cap of the two years, from 517: every hat Chopper wears over it or
 * swaps it for comes back to it.
 */
const CHOPPER_CAP: Stroke[] = [
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
  { d: CHOPPER_BRIM, role: 'accent' },
  { d: 'M40 130 C38 140 40 148 44 154 M118 130 C120 140 118 148 114 154' },
  { d: 'M40 154 l8 -2 l2 8 l-8 2z M110 152 l8 2 l-2 8 l-8 -2z', role: 'soft' },
  ...CHOPPER_ANTLERS,
  {
    d: 'M104 56 l-5 6 M113 64 l-6 7 M119 75 l-6 7 M122 88 l-5 7 M124 101 l-4 6',
    role: 'ambient',
  },
  shadow(80, 176, 44),
]

/** Ace's hat without its flame, the outline in his colour: from 483 on. */
const ACE_HAT_OUT: Stroke[] = ACE_HAT.map((stroke): Stroke => {
  // The outline of the hat takes the accent the flame had.
  return stroke.role === undefined ? { ...stroke, role: 'accent' } : stroke
})

/** Dorry's cross-guard, green grip and pommel: his 77 stage, and the broken sword at 78. */
const DORRY_HILT: Stroke[] = [
  { d: 'M30 140 L60 162' },
  { d: 'M43 157 L31 175 M37 153 L25 171', role: 'accent' },
  { d: circle(24, 177, 5), role: 'accent' },
]

/**
 * A bat's wing, root at 0 0, spread up and to the left: the giants turned
 * demon (1180), and Gunko while Imu possesses her (`elbafRedrawn`).
 */
export const BAT_WING: Stroke[] = [
  {
    d: 'M0 0 Q-10 -30 -26 -66 l2 -8 M-26 -66 L-62 -60 Q-46 -46 -74 -30 Q-50 -18 -66 0 Q-40 -6 -40 14 Q-14 -2 0 0',
  },
  { d: 'M-26 -66 L-74 -30 M-26 -66 L-66 0 M-26 -66 L-40 14', role: 'soft' },
  { d: 'M-44 -42 l-6 5 M-48 -30 l-6 5 M-50 -18 l-6 5', role: 'ambient' },
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

/** A falcon's feather, drawn about its centre, quill down: Pell's, from 125. */
const FEATHER =
  'M0 -14 C7 -8 7 6 0 12 C-7 6 -7 -8 0 -14 M0 -10 V18 M0 -2 l-4 -4 M0 4 l4 -4'

/** Dalton's bison foreleg in 3/4: the plated bracer round the upper forearm, the shaggy black fur running down to the fetlock tuft, and the cloven hoof. */
const DALTON_FORELEG: Stroke[] = [
  {
    d: 'M100 34 Q124 41 148 34 M100 34 V37.5 Q124 44.5 148 37.5 V34 M100 37.5 V58 Q124 65 148 58 V37.5 M118 42.2 V62',
  },
  {
    d: 'M102 -2 L100 6 L103 8 L101 18 L104 20 L102 33 M146 -2 L148 6 L145 8 L147 18 L144 20 L146 33 M103 63 L101 76 L103 78 L101 88 L104 90 L103 100 L106 102 L106 112 L109 114 L110 124 L112 126 L113 140 L108 150 L113 148 L116 158 L120 150 L124 159 L128 150 L132 158 L136 149 L143 151 L139 140 L140 126 L142 124 L142 114 L145 112 L144 102 L147 100 L146 90 L149 88 L147 78 L149 76 L145 63',
  },
  { d: 'M112 80 q-2 12 0 24 M120 78 q-1 14 1 28', role: 'soft' },
  {
    d: 'M134 84 l8 -4 M135 98 l7 -3.5 M134 112 l6 -3 M134 14 l7 -3.5',
    role: 'ambient',
  },
  {
    d: 'M114 154 C110 162 104 170 100 176 Q113 182 127.5 178.5 L129 174 L130.5 178.5 Q141 180 148 174 C145 166 142 160 139 154 M129 174 C129 168 128 162 127 157',
  },
  {
    d: 'M101.5 172 Q114 177.5 127 174.5 M131 174.5 Q141 176 146.5 170.5',
    role: 'soft',
  },
]

/** The wrist wraps, the black-furred hand and the four claws of Chaka's jackal paw, closed in a fist. */
const CHAKA_PAW: Stroke[] = [
  { d: `${ellipse(120, 40, 18, 5)} M102 40 V66 A18 5 0 0 0 138 66 V40` },
  {
    d: 'M103 69 L99 78 L102 80 L97 92 L100 94 L95 106 L97 118 C92 128 92 142 96 150 Q101.5 158 107 150 Q112.5 158 118 150 Q123.5 158 129 150 Q134.5 158 140 150 C146 142 146 128 143 118 L145 106 L140 94 L143 92 L138 80 L141 78 L137 69 M99.5 154 C99 162 100.5 169 103.5 175 C104.5 168 104.5 161 103.5 155 M110.5 154 C110 162 111.5 169 114.5 175 C115.5 168 115.5 161 114.5 155 M121.5 154 C121 162 122.5 169 125.5 175 C126.5 168 126.5 161 125.5 155 M132.5 154 C132 162 133.5 169 136.5 175 C137.5 168 137.5 161 136.5 155',
  },
  {
    d: 'M102 50 L138 43 M102 59 L138 52 M102 66 L138 61 M96 124 Q120 132 144 124 M107 150 V131 M118 150 V132.5 M129 150 V131',
    role: 'soft',
  },
  {
    d: 'M130 82 l7 -3 M132 96 l7 -3 M134 110 l7 -3 M136 134 l6 -3 M136 144 l5 -2.5',
    role: 'ambient',
  },
]

/** One of Pell's falcon wings, spread and seen from below: the pointed flight feathers barred dark and light. */
const PELL_WING: Stroke[] = [
  {
    d: 'M30 106 C18 90 16 68 26 50 C36 32 60 18 96 8 L88 22 L98 26 L86 38 L96 44 L82 52 L90 60 L74 66 L80 74 L64 80 L66 88 L52 92 L50 100 L38 102 C35 105 33 106 30 106 Z',
  },
  { d: 'M38 100 C30 84 30 66 40 52 C50 40 66 28 88 20', role: 'soft' },
  {
    d: 'M84 32 l-3 5 M76 46 l-3 5 M68 58 l-3 5 M60 70 l-3 5 M50 82 l-3 5 M42 92 l-3 5 M76 28 l-3 5 M68 40 l-3 5 M60 52 l-3 5 M51 64 l-3 5 M43 76 l-3 5',
    role: 'ambient',
  },
]

/** One strip of sticking plaster, drawn about its centre: Igaram's, from 111. */
const PLASTER =
  'M-16 -3.5 H16 A3.5 3.5 0 0 1 16 3.5 H-16 A3.5 3.5 0 0 1 -16 -3.5 Z'

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

  // The whale side on with his head against the cliff of the Red Line, the
  // scars criss-crossing his forehead, the spout going up and his flukes
  // out of the water behind (62).
  'laboon': [
    {
      d: 'M44 150 C50 118 76 94 106 88 C126 84 138 90 142 104 C146 120 144 138 140 150',
    },
    {
      d: 'M16 150 C16 136 18 126 22 118 M30 150 C28 138 28 128 30 120 M22 118 C14 108 6 106 -2 108 C6 100 18 102 26 112 C30 100 42 96 52 98 C42 104 34 110 30 120',
    },
    { d: 'M50 142 Q94 128 138 136', role: 'soft' },
    { d: 'M86 140 q-4 12 -18 16', role: 'soft' },
    {
      d: 'M112 92 L138 116 M120 88 L142 106 M110 106 L134 92 M116 120 L141 100',
      role: 'accent',
    },
    {
      d: 'M112 88 V62 M112 62 C104 52 96 52 90 58 M112 62 C120 52 128 52 134 58',
    },
    {
      d: dots([
        [86, 66],
        [138, 66],
        [92, 74],
        [132, 74],
      ]),
      role: 'ambient',
    },
    { d: 'M62 146 l6 -7 M76 144 l6 -7 M90 143 l6 -7', role: 'ambient' },
    { d: 'M146 150 V30 L150 12 M150 150 V40', role: 'ambient' },
    { d: 'M146 70 l8 -6 M146 96 l8 -6 M146 122 l8 -6', role: 'ambient' },
    ...SEA,
  ],

  // His deckchair in 3/4 on the iron islet inside the whale, the newspaper
  // he reads left folded on the seat, the islet's chain going down into
  // the water and a cloud of the sky he painted on the walls (62).
  'crocus': [
    { d: 'M34 72 L54 128 H110 L120 150 M54 128 L48 150 M110 128 L114 150' },
    { d: 'M50 62 L70 118 H126 L136 140', role: 'soft' },
    { d: 'M34 72 L50 62 M54 128 L70 118 M110 128 L126 118' },
    { d: 'M42 67 L62 123 H118', role: 'accent' },
    { d: 'M72 112 L98 108 L104 122 L78 126 Z' },
    { d: 'M76 116 L100 112 M85 110 L91 124', role: 'soft' },
    { d: 'M122 144 l6 -4 M126 134 l6 -4', role: 'ambient' },
    { d: 'M8 150 H152 M8 150 L14 160 H146 L152 150' },
    {
      d: dots([
        [24, 155],
        [48, 155],
        [72, 155],
        [96, 155],
        [120, 155],
      ]),
      role: 'soft',
    },
    { d: `${ellipse(30, 166, 3, 5)} ${ellipse(30, 177, 3, 5)}`, role: 'soft' },
    {
      d: 'M96 40 q4 -12 16 -8 q6 -10 18 -4 q12 -2 12 10 q8 2 6 10 H98 q-8 -2 -2 -8',
      role: 'ambient',
    },
    ...SEA.slice(2),
  ],

  // His crown in 3/4, its points rising off the band, and the bazooka he
  // turns on the whale from inside its stomach (62).
  'mr-9': [
    { d: 'M30 96 L34 62 L44 80 L56 56 L68 80 L78 62 L82 96', role: 'accent' },
    { d: 'M30 96 Q56 106 82 96 M30 96 Q56 88 82 96', role: 'accent' },
    { d: 'M32 88 Q56 96 80 88', role: 'soft' },
    {
      d: dots([
        [34, 62],
        [56, 56],
        [78, 62],
      ]),
    },
    {
      d: 'M18.4 159.7 L134.4 109.7 M25.6 176.3 L141.6 126.3 M18.4 159.7 L25.6 176.3',
    },
    {
      d: 'M134.4 109.7 A9.8 4 66.7 1 1 141.6 126.3 A9.8 4 66.7 1 1 134.4 109.7',
    },
    { d: 'M35.8 152.2 L43 168.8 M111.2 119.7 L118.4 136.3', role: 'soft' },
    { d: 'M72 156.3 l4 14 h9 l-2 -17.5' },
    { d: 'M82.2 132.2 l-3 -8 h10 l2 6' },
    {
      d: 'M50 166 l2 6 M70 157 l2 6 M96 146 l2 6 M118 137 l2 6',
      role: 'ambient',
    },
    shadow(82, 188, 52),
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
  // the barrel canteen with its straw hung at his chest (65). The crew's
  // arm band goes round his wing from 92 to 129, in `alabastaRedrawn`.
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

  // A hand at the moment of the flick, the thumb just let go and the
  // finger snapped out, the coat sleeve pushed back off the wrist, and the
  // pellet it sent going off like a bullet: the Nose Fancy Cannon he uses
  // on Zoro at Whisky Peak (65).
  'mr-5': [
    { d: 'M6 160 L34 128 M24 176 L52 144' },
    { d: 'M34 128 Q46 128 52 144 M30 133 Q42 134 47 150', role: 'soft' },
    { d: 'M40 136 L66 110 M50 148 L80 124' },
    {
      d: 'M66 110 C70 98 82 92 94 94 L122 82 C127 80 130 86 125 89 L100 102 C106 104 108 112 104 118 C100 126 90 128 80 124',
    },
    { d: 'M94 94 C96 86 104 84 108 90 L102 100', role: 'soft' },
    { d: 'M82 122 q4 -8 12 -8 M90 126 q4 -6 10 -6', role: 'soft' },
    { d: 'M72 118 l6 -5 M76 124 l6 -5', role: 'ambient' },
    { d: circle(136, 72, 2.5) },
    { d: 'M126 78 l-8 4 M128 70 l-8 2', role: 'ambient', dashed: true },
    {
      d: 'M144 52 l2 -12 l4 10 l10 -6 l-4 11 l12 1 l-11 5 l8 9 l-12 -3 l-2 11 l-5 -10 l-8 7 l2 -12 l-11 -3 l11 -4 l-7 -9 z',
      role: 'accent',
    },
    shadow(70, 190, 46),
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

  // The island from the sea: two volcanoes in 3/4 with their craters
  // smoking, the jungle of giant ferns along the shore below them (70).
  'little-garden-arc': [
    { d: 'M6 150 L42 70 M62 70 L98 150' },
    { d: ellipse(52, 70, 10, 3) },
    { d: 'M82 150 L110 96 M124 96 L152 150' },
    { d: ellipse(117, 96, 7, 2.4) },
    {
      d: 'M70 100 l8 -4 M78 118 l8 -4 M86 136 l8 -4 M132 118 l6 -3 M140 134 l6 -3',
      role: 'ambient',
    },
    {
      d: 'M50 66 C44 54 54 50 50 38 C46 28 56 22 54 12 M56 66 C62 56 58 48 64 40',
      role: 'ambient',
      dashed: true,
    },
    { d: 'M116 92 C112 82 120 78 118 68', role: 'ambient', dashed: true },
    {
      d: 'M18 150 C18 134 24 124 34 118 M18 138 l-8 -6 M20 130 l-8 -8 M24 124 l-4 -10 M26 140 l8 -6 M28 130 l8 -8',
      role: 'accent',
    },
    {
      d: 'M128 150 C128 136 134 128 144 124 M130 140 l-8 -4 M132 132 l-6 -8 M136 144 l8 -4 M140 134 l6 -6',
      role: 'accent',
    },
    {
      d: 'M54 150 q4 -14 14 -18 M64 150 q-2 -12 -10 -16 M100 150 q4 -12 12 -14',
      role: 'soft',
    },
    { d: 'M4 150 H156', role: 'ambient' },
    ...SEA.slice(2),
  ],

  // A cup of Earl Grey in 3/4 on its saucer, still steaming, and beside it
  // the sheet of orders he finds his partner has sat on for days (70).
  'mr-3': [
    { d: ellipse(66, 98, 24, 6) },
    { d: 'M46 100 Q66 106 86 100', role: 'accent' },
    { d: 'M42 98 C42 120 50 134 66 134 C82 134 90 120 90 98' },
    { d: 'M89 106 q16 -2 15 10 q-1 10 -18 10' },
    { d: 'M82 112 l6 -4 M80 122 l6 -4', role: 'ambient' },
    { d: ellipse(66, 136, 40, 10) },
    { d: 'M44 138 Q66 146 88 138', role: 'soft' },
    {
      d: 'M58 88 c-6 -10 4 -14 -2 -26 M74 88 c-6 -10 4 -14 -2 -26',
      role: 'ambient',
    },
    { d: 'M104 150 L136 136 L154 170 L122 184 Z' },
    { d: 'M113 167 L145 153', role: 'soft' },
    {
      d: 'M112 152 l22 -10 M116 159 l18 -8 M121 174 l22 -10 M125 181 l14 -6',
      role: 'ambient',
    },
    shadow(66, 186, 46),
  ],

  // Her wide-brimmed hat in 3/4, the crown standing on the brim and the
  // checked band round it: what she wears when she is first seen, on
  // holiday with her partner (70). The apple beret of 1149 is in
  // `alabastaRedrawn`.
  'miss-goldenweek': [
    { d: 'M8 122 C14 146 146 146 152 122' },
    { d: 'M8 122 C10 112 32 106 54 104 M106 104 C128 106 150 112 152 122' },
    { d: 'M54 116 C54 100 56 86 60 76 Q80 66 100 76 C104 86 106 100 106 116' },
    { d: 'M60 76 Q80 86 100 76', role: 'soft' },
    { d: 'M55 102 Q80 112 105 102 M54 114 Q80 124 106 114', role: 'accent' },
    {
      d: 'M62 106 v10 M71 108 v10 M80 109 v10 M89 108 v10 M98 106 v10',
      role: 'accent',
    },
    { d: 'M96 82 l6 -4 M98 94 l6 -4', role: 'ambient' },
    { d: 'M26 134 l6 4 M120 138 l6 -4 M44 140 l4 4', role: 'ambient' },
    { d: 'M30 128 Q80 146 130 128', role: 'soft' },
    shadow(80, 172, 56),
  ],

  // A giant's round shield in 3/4, studded, its rim hatched where it turns
  // away, and the long sword behind it, whole, the green hilt below (71).
  // Felled, crossed, broken, armed again and turned demon in
  // `alabastaRedrawn`.
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
  // Broken, armed again and turned demon in `alabastaRedrawn`.
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
      d: 'M146 176 C130 140 154 120 148 84 C144 60 116 52 108 70 L94 72 L106 78 C120 78 134 80 140 88',
      role: 'soft',
    },
    { d: 'M138 176 C124 142 146 122 140 88', role: 'soft' },
    { d: 'M126 120 l6 -4 M128 132 l6 -4 M130 144 l6 -4', role: 'ambient' },
    shadow(72, 184, 54),
  ],

  // His spade in its sheath, slung by its strap: the long round-tipped blade
  // he carries on his back when he turns the ship away at 80. The beast he
  // becomes comes the next episode: its foreleg joins the spade from 81, in
  // `alabastaRedrawn`.
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

  // A length of the mast of the Marine ship he is tied to, the rope wound
  // round and round it and its end coiled on the deck, the iron hoops and
  // the far side hatched (79).
  'mr-11': [
    { d: 'M66 -4 V160 M92 -4 V160' },
    { d: 'M66 160 Q79 166 92 160' },
    { d: 'M66 30 Q79 36 92 30 M66 132 Q79 138 92 132', role: 'soft' },
    {
      d: 'M64 70 Q79 80 94 68 M64 82 Q79 92 94 80 M64 94 Q79 104 94 92 M64 106 Q79 116 94 104',
      role: 'accent',
    },
    {
      d: 'M94 104 C108 110 112 130 108 150 C106 162 112 168 118 168',
      role: 'accent',
    },
    { d: `${ellipse(124, 172, 18, 5)} ${ellipse(124, 171, 10, 2.5)}` },
    {
      d: 'M84 14 l6 -4 M84 46 l6 -4 M84 122 l6 -4 M84 146 l6 -4',
      role: 'ambient',
    },
    { d: 'M4 160 H156' },
    { d: 'M4 176 L30 160 M20 192 L50 160 M120 192 L104 178', role: 'ambient' },
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

  // Her sled in 3/4 on the snow, the box with its rolled rim and high back,
  // the runners curling up at the front and the rope the reindeer pulls it
  // by: how she comes down from the castle to the villages (81).
  'kureha': [
    { d: 'M12 150 H112 C128 150 136 140 132 130 C130 124 124 124 122 130' },
    { d: 'M26 142 H122 C136 142 144 132 140 122', role: 'soft' },
    { d: 'M30 150 V136 M96 150 V136' },
    { d: 'M24 136 H110 L116 106 H30 Z' },
    { d: 'M30 106 V78 Q36 70 46 74 V98' },
    { d: 'M30 106 Q72 98 116 106 L130 98 H46', role: 'accent' },
    { d: 'M30 120 H112', role: 'soft' },
    { d: 'M112 128 l-6 4 M114 118 l-6 4 M40 86 l4 -4', role: 'ambient' },
    { d: 'M132 130 L156 116', role: 'soft' },
    {
      d: dots([
        [20, 40],
        [48, 24],
        [96, 34],
        [126, 56],
        [146, 30],
        [70, 60],
      ]),
      role: 'ambient',
    },
    { d: 'M4 158 C40 152 120 154 156 158', role: 'ambient', dashed: true },
  ],

  // His fuzzy top hat in 3/4, the cross turned on its side at the front and
  // the antlers out through the sides of the crown (83). The old brim and the
  // antlers are shared with the cap of the two years, from 517 in
  // `alabastaRedrawn`, where every hat he wears after it follows.
  'tony-tony-chopper': [
    { d: 'M40 116 C36 92 38 66 44 52 Q80 40 116 52 C122 66 124 92 120 116' },
    { d: 'M44 52 Q80 64 116 52', role: 'soft' },
    { d: 'M70 74 l20 20 M90 74 l-20 20', role: 'accent' },
    { d: CHOPPER_BRIM },
    ...CHOPPER_ANTLERS,
    {
      d: 'M108 60 l-5 6 M114 72 l-6 7 M117 86 l-6 7 M118 100 l-5 6',
      role: 'ambient',
    },
    {
      d: 'M50 64 l3 2 M48 84 l3 2 M50 104 l3 2 M64 50 l1 3 M96 50 l-1 3',
      role: 'soft',
    },
    shadow(80, 160, 44),
  ],

  // A round-bottomed flask on its ring over a burner, the brew boiling up
  // out of its neck, and a rack of test tubes beside it: his experiments,
  // which mostly blow up in his face (85).
  'hiluluk': [
    { d: 'M66 80 V52 M78 80 V52 M62 52 H82' },
    { d: 'M66 80 A26 26 0 1 0 78 80' },
    { d: 'M47 108 Q72 116 97 108', role: 'soft' },
    {
      d: `${circle(74, 42, 4)} ${circle(80, 30, 3)} ${circle(70, 22, 2.5)}`,
      role: 'accent',
    },
    { d: 'M90 96 l6 -4 M92 110 l6 -4 M88 122 l6 -4', role: 'ambient' },
    { d: 'M48 132 Q72 140 96 132 M52 134 L42 160 M92 134 L102 160' },
    { d: 'M64 160 V148 H80 V160' },
    { d: 'M72 146 q-5 -5 0 -10 q5 5 0 10', role: 'soft' },
    { d: 'M108 160 V130 M144 160 V130 M106 140 H146' },
    { d: 'M116 150 V120 M124 150 V120 M132 150 V120', role: 'soft' },
    { d: 'M30 160 H152', role: 'ambient' },
    shadow(88, 176, 56),
  ],

  // His longbow in 3/4, the limbs turned to show their thickness, an arrow
  // on the string with its head wrapped and burning: the one that sets
  // the afros alight (87).
  'chess': [
    { d: 'M50 18 C98 50 98 150 50 182' },
    { d: 'M44 22 C88 54 88 146 44 178', role: 'soft' },
    { d: 'M44 22 L50 18 M44 178 L50 182' },
    { d: 'M84 90 h10 M84 110 h10', role: 'soft' },
    { d: 'M47 20 L36 100 L47 180', role: 'ambient' },
    { d: 'M36 100 H130' },
    {
      d: 'M36 100 l-10 -8 M36 100 l-10 8 M46 100 l-10 -8 M46 100 l-10 8',
      role: 'soft',
    },
    { d: 'M130 92 C134 96 134 104 130 108 L150 100 Z' },
    {
      d: 'M128 90 C122 78 130 72 128 60 C138 70 144 78 138 90 M140 92 C138 84 144 80 144 72 C150 80 150 88 146 94',
      role: 'accent',
    },
    {
      d: 'M58 30 l2 -6 M68 40 l3 -5 M68 160 l3 5 M58 170 l2 6',
      role: 'ambient',
    },
    shadow(70, 192, 40),
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
      d: 'M62 80 q3 -5 8 -5 M90 92 q3 -5 8 -5 M50 106 q3 -5 8 -5 M72 112 q3 -5 8 -5 M66 130 q3 -5 8 -5',
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

  // The coast from the sea: dunes rising off the shore, their lee faces
  // hatched and the sand blowing off the crests, a palm at the waterline
  // (92).
  'alabasta': [
    { d: 'M4 150 C36 146 62 128 86 108 C94 124 108 140 130 150' },
    { d: 'M100 128 C116 118 130 104 144 96 C148 104 154 110 160 112' },
    {
      d: 'M92 116 l-6 6 M100 126 l-6 6 M108 134 l-6 6 M116 142 l-6 5 M148 102 l-4 5',
      role: 'ambient',
    },
    {
      d: 'M86 108 c10 -8 22 -6 32 -14 M88 114 c12 -6 22 -4 34 -10 M144 96 c6 -6 10 -4 16 -10',
      role: 'accent',
    },
    { d: 'M26 150 C24 130 26 116 32 106' },
    {
      d: 'M32 106 q-16 -4 -24 8 M32 106 q-4 -16 8 -22 M32 106 q14 -8 26 2',
      role: 'soft',
    },
    { d: 'M40 142 q10 -4 18 -12 M58 134 q8 -4 14 -10', role: 'soft' },
    { d: 'M4 150 H156', role: 'ambient' },
    ...SEA.slice(1),
  ],

  // His golden hook lying on its side, the cuff it is set in seen in 3/4, a
  // thick cigar smoking beside it and a little sand spilt on the table: the
  // sand that kills the pirates raiding Nanohana (92).
  'crocodile': [
    { d: 'M20 132 H64 M20 164 H64' },
    { d: 'M20 132 A6 16 0 0 0 20 164', role: 'soft' },
    { d: ellipse(64, 148, 6, 16) },
    { d: 'M28 134 V162 M40 134 V162', role: 'soft' },
    { d: 'M48 158 l6 -4 M50 150 l6 -4', role: 'ambient' },
    {
      d: 'M70 156 H102 C136 156 150 118 136 92 C128 78 110 76 100 88 C108 88 120 90 126 102 C132 120 122 142 100 142 H70',
      role: 'accent',
    },
    { d: 'M96 182 L142 168 L144 175 L98 189 Z' },
    { d: 'M130 171.5 l2 7', role: 'soft' },
    {
      d: 'M144 170 c6 -8 -2 -14 4 -22 c4 -6 -2 -10 2 -16',
      role: 'ambient',
      dashed: true,
    },
    {
      d: dots([
        [12, 180],
        [22, 176],
        [30, 182],
        [40, 178],
      ]),
      role: 'ambient',
    },
    shadow(56, 176, 44),
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

  // The throne in 3/4, its tall back crested in gold, the arms and the seat
  // with its cushion, the underside hatched: where the king hears the news
  // from his guards (92).
  'nefertari-cobra': [
    { d: 'M50 110 V36 M126 110 V36' },
    { d: 'M50 36 Q88 14 126 36', role: 'accent' },
    { d: 'M58 106 V44 Q88 28 118 44 V106', role: 'soft' },
    { d: 'M34 118 H110 L126 110 H50 Z' },
    { d: 'M34 118 V130 H110 V118 M110 130 L126 122 V110' },
    { d: 'M40 116 Q72 108 104 116', role: 'soft' },
    {
      d: 'M34 118 V96 Q34 88 44 90 L50 92 M110 118 V100 Q112 92 120 94 L126 96',
    },
    { d: 'M38 130 V172 M106 130 V172 M122 124 V164' },
    {
      d: 'M44 140 l8 -6 M60 140 l8 -6 M76 140 l8 -6 M92 140 l8 -6',
      role: 'ambient',
    },
    shadow(80, 182, 56),
  ],

  // The crude wooden club of the Sand-Sand Clan, the one the boy knocks the
  // bandit down with (ch 164 p8, ep 100), lying in 3/4: a heavy head out of
  // a thin grip, its outline drawn rough. The sawn end with its whorl of end
  // grain, the long split and the nicked grain along the head are as ep 100
  // draws them. Nothing else is in the drawing: by ep 100 the anime has
  // shown only the boy, so no part of the grown man's outfit is true for
  // both readers.
  'kohza': [
    {
      d: 'M133.4 92.5 C129.6 90.7 126.4 90.2 122.8 90.5 L120.6 93.2 L116.1 92.2 C109.5 94.1 103.4 97.8 98.9 102 C89.8 110.8 81.8 122.3 67.9 131.3 C56 138.8 37.7 142.5 16.4 151 C10.5 153.4 13.1 160.5 19 158.2 C40.8 150.9 61.3 146.7 79.4 142.8 C95.7 140.5 115.4 140.7 133.1 135.5 C139.6 133.3 143.5 130.5 146.6 125.6',
    },
    { d: 'M133.4 92.5 C145.3 91.8 155.9 117.4 146.6 125.6' },
    { d: 'M133.4 92.5 C130.3 101 138.3 121.3 146.6 125.6', role: 'soft' },
    {
      d: 'M142.9 108.6 C145 106 147.7 111.8 144.9 113.5 C141.5 115.5 137.6 106.9 141.2 103.9 C145.7 100.8 151.9 114.7 147.3 119.3',
      role: 'soft',
    },
    { d: 'M80.6 125.8 C94 115.4 109.7 104.8 127 98.5', role: 'accent' },
    { d: 'M90.8 133.7 C106.5 129.8 122.5 126.5 136.5 121.4', role: 'soft' },
    { d: 'M28.3 150.3 C41.2 145.4 54.8 142.4 68.3 139.2', role: 'soft' },
    {
      d: 'M98.8 112 L99 108 M113.1 104.1 L113 100.4 M113.4 128.4 L115.7 131.5',
      role: 'soft',
    },
    {
      d: 'M100.1 138.9 L106.1 140.4 M109.3 137.3 L115.4 139 M118.3 135.2 L124.5 137.1 M127.3 132.9 L133.4 134.6',
      role: 'ambient',
    },
    shadow(80, 182, 58),
  ],

  // His sword with its gold cross-guard, sheathed, laid across a fold of the
  // white robe of the royal guard, the four-pointed stars of its pattern
  // on the cloth (91). The falcon's wing joins it from 106, in
  // `alabastaRedrawn`.
  'pell': [
    { d: 'M14 150 L104 136 L148 156 L58 172 Z' },
    {
      d: 'M14 150 Q12 156 18 160 Q38 168 58 180 Q100 168 148 164 Q152 160 148 156',
    },
    { d: 'M24 154 L100 142 L136 158', role: 'soft' },
    {
      d: 'M44 146 l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2 l5 -2 z M86 154 l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2 l5 -2 z M110 141 l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2 l5 -2 z',
      role: 'accent',
    },
    { d: 'M24 158 l-4 6 M64 174 l2 -6 M120 166 l2 -6', role: 'ambient' },
    { d: 'M16 132 L112 60 M22 140 L118 68 M16 132 L22 140' },
    { d: 'M104 52 L126 80' },
    { d: 'M115 66 L132 53 M119 71 L136 58' },
    { d: circle(138.4, 52.2, 4) },
    { d: 'M40 122 l5 6 M64 104 l5 6 M88 86 l5 6', role: 'soft' },
    shadow(80, 190, 56),
  ],

  // His massive sword in 3/4, drawn a hand's breadth out of its sheath:
  // the broad blade with its ridge and its far face hatched, the wide
  // guard and the long grip he carries at his hip as a royal guard (91).
  // The jackal's paw joins it from 120, in `alabastaRedrawn`.
  'chaka': [
    { d: 'M66 124 V176 Q66 190 80 192 Q94 190 94 176 V124' },
    { d: 'M62 116 H98 V126 H62 Z' },
    { d: 'M66 146 H94 M66 166 H94', role: 'soft' },
    { d: 'M70 116 V66 M90 116 V66' },
    { d: 'M80 68 V116', role: 'soft' },
    {
      d: 'M84 78 l5 -3 M84 90 l5 -3 M84 102 l5 -3 M84 112 l5 -3',
      role: 'ambient',
    },
    { d: 'M44 66 L112 66 L118 60 L50 60 Z', role: 'accent' },
    { d: 'M74 60 V28 M86 60 V28', role: 'accent' },
    { d: 'M74 52 l12 -6 M74 42 l12 -6 M74 32 l12 -4', role: 'soft' },
    { d: ellipse(80, 24, 9, 4), role: 'accent' },
    { d: 'M94 150 l6 -4 M94 170 l6 -4', role: 'ambient' },
    shadow(80, 196, 30),
  ],

  // His cowboy hat in 3/4, the crown pinched at the top, the string of beads
  // round it and the stitching along the brim, and a flame standing up out
  // of it: he stops Smoker's smoke with fire at Nanohana (94). The flame
  // goes out at his death, from 483, and the hat hangs over his grave from
  // 505, in `alabastaRedrawn`.
  'portgas-d-ace': [
    ...ACE_HAT,
    {
      d: 'M80 50 C64 34 76 20 78 2 C82 16 96 20 96 36 C96 46 88 52 80 50z',
      role: 'accent',
    },
    { d: 'M82 42 c-6 -8 0 -14 2 -22 c2 8 8 10 6 18', role: 'accent' },
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

  // A block of stone wall sliced clean in two, the top half sliding off
  // along the cut and the steel edge that cut it still in the gap: what he
  // does to the wall of the Spiders Cafe when he is kicked into it (103).
  'mr-1': [
    { d: 'M30 170 V110 L110 140 V170 Z' },
    { d: 'M110 170 L130 158 V128 L110 140 M30 110 L50 98 L130 128' },
    { d: 'M20 96 V52 H100 V126 Z' },
    { d: 'M20 52 L40 40 H120 L100 52 M100 126 L120 114 V40' },
    { d: 'M30 150 H110 M70 150 V170 M20 74 H100 M60 52 V74', role: 'soft' },
    {
      d: 'M114 150 l12 -8 M114 162 l12 -8 M104 66 l12 -8 M104 90 l12 -8 M104 110 l12 -8',
      role: 'ambient',
    },
    { d: 'M-2 92 L154 144 L148 150 L4 100 Z', role: 'accent' },
    {
      d: dots([
        [138, 168],
        [146, 162],
        [12, 112],
        [6, 122],
      ]),
      role: 'ambient',
    },
    shadow(80, 186, 56),
  ],

  // The Spiders Cafe at 103, where she is Paula, its owner: her
  // diamond-patterned bandanna folded over the edge of the counter, and a
  // glass of the tea she pours for the agents as they arrive.
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

  // His four-ton baseball bat in 3/4, lying across the floor, the taped grip
  // and the knob at one end and the round face of the barrel at the other
  // (103).
  'mr-4': [
    { d: 'M32.3 162.6 L51.5 141.8 C58 130 62 116 68.9 109.7 L121.7 52.5' },
    { d: 'M39.7 169.4 L58.9 148.6 C70 140 80 134 89.5 128.7 L142.3 71.5' },
    {
      d: 'M121.7 52.5 A14 5 42.7 1 1 142.3 71.5 A14 5 42.7 1 1 121.7 52.5',
      role: 'accent',
    },
    { d: 'M28.1 162.8 A8 3 42.7 1 0 39.9 173.6 A8 3 42.7 1 0 28.1 162.8' },
    { d: 'M38 156 l8 8 M42 152 l8 8 M46 148 l8 8', role: 'soft' },
    { d: 'M96 100 Q100 104 104 108 M110 84 Q114 88 118 92', role: 'soft' },
    {
      d: 'M96 126 l4 6 M108 113 l4 6 M120 100 l4 6 M132 87 l4 6',
      role: 'ambient',
    },
    shadow(84, 184, 58),
  ],

  // Her necktie, cut like a fir tree and dotted with red baubles, and the
  // orange pekoe she bangs the Spiders Cafe counter for (103).
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

  // His shovel stood in the sand beside the pit he is digging, the walls of
  // the pit hatched where they fall into shadow and the spoil heaped up
  // beyond it: three years of looking for water in Yuba (103).
  'toto': [
    { d: 'M24 30 H48 M36 30 L50 120' },
    {
      d: 'M38 118 Q50 114 62 118 L66 146 Q58 158 48 158 Q40 150 38 118 Z',
      role: 'accent',
    },
    { d: 'M50 120 L54 150', role: 'soft' },
    { d: ellipse(106, 156, 36, 9) },
    { d: 'M76 158 Q106 172 136 158', role: 'soft' },
    {
      d: 'M84 154 l6 -4 M96 152 l6 -4 M108 152 l6 -4 M120 152 l6 -4',
      role: 'ambient',
    },
    { d: 'M126 148 C134 128 148 126 160 136', role: 'soft' },
    { d: 'M4 150 H70 M142 150 H156', role: 'ambient' },
    {
      d: dots([
        [136, 140],
        [146, 134],
        [150, 144],
        [18, 160],
        [30, 168],
      ]),
      role: 'ambient',
    },
    shadow(54, 176, 24),
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

  // The crab seen from behind as he runs across the desert, the matting on
  // the top of his shell, his legs out on either side and the great right
  // claw, much bigger than the left: the ride the crew takes towards
  // Alubarna (111).
  'hasami': [
    { d: 'M30 118 C30 78 130 78 130 118 C130 128 30 128 30 118 Z' },
    {
      d: 'M44 100 q8 -6 14 0 q8 -8 16 0 q8 -6 16 0 q8 -6 14 2 q6 2 10 8',
      role: 'soft',
    },
    { d: 'M110 112 l6 -4 M116 120 l6 -4', role: 'ambient' },
    {
      d: 'M128 108 L144 92 C160 78 158 54 140 48 C148 62 146 76 134 84 M144 92 C150 82 150 70 142 64',
      role: 'accent',
    },
    {
      d: 'M34 108 L22 96 C14 88 16 78 24 76 C22 84 24 88 28 90 M22 96 C18 90 20 84 24 82',
    },
    {
      d: 'M34 122 L18 128 L10 160 M44 126 L32 134 L28 162 M116 126 L128 134 L132 162 M126 122 L142 128 L150 160',
    },
    { d: 'M54 128 L48 140 L46 164 M106 128 L112 140 L114 164', role: 'soft' },
    { d: 'M4 166 C40 160 120 160 156 166', role: 'ambient', dashed: true },
    {
      d: 'M20 176 q10 -6 20 0 M110 178 q10 -6 20 0',
      role: 'ambient',
      dashed: true,
    },
  ],

  // The gun that is a dachshund, side on: the long barrel for a body, the
  // contoured muzzle for a snout, the handles on its back, four short legs
  // and a curled tail, and the baseball it has just sneezed out (113). No
  // eye.
  'lassoo': [
    {
      d: 'M30 90 H96 C110 84 126 88 130 98 V108 C126 116 110 118 96 114 H30 Z',
    },
    { d: ellipse(130, 103, 4, 6) },
    { d: 'M96 90 Q100 102 96 114 M44 90 V114', role: 'soft' },
    { d: 'M104 88 C102 98 104 106 110 110', role: 'soft' },
    { d: 'M54 90 V80 H70 V90 M60 80 V74', role: 'soft' },
    { d: 'M38 114 V138 h8 M54 114 V138 h8 M80 114 V138 h8 M96 114 V138 h8' },
    { d: 'M30 96 C18 90 16 76 26 74 C32 74 32 82 26 82' },
    { d: 'M40 110 l6 -6 M60 112 l4 -4 M84 112 l4 -4', role: 'ambient' },
    { d: circle(146, 132, 9), role: 'accent' },
    { d: 'M140 126 Q144 132 140 138 M152 126 Q148 132 152 138', role: 'soft' },
    { d: 'M136 114 l4 6 M146 112 l0 8', role: 'ambient', dashed: true },
    shadow(70, 146, 46),
  ],

  // One guard's great axe in 3/4, its haft cut like a flute, and an iron
  // bracelet burst open in front of it: the water they drink lets them
  // break their own bracelets just by bracing their arms (120).
  'tsumegeri-guards': [
    { d: 'M28 176 L102 52 M36 180 L110 56' },
    { d: 'M28 176 L36 180 M102 52 L110 56' },
    {
      d: dots([
        [50, 144],
        [58, 131],
        [66, 118],
        [74, 105],
      ]),
      role: 'soft',
    },
    { d: 'M41 154 l8 4 M85 80 l8 4', role: 'soft' },
    { d: 'M100 48 L96 24 C130 28 148 60 128 92 L112 64' },
    { d: 'M104 34 C126 40 138 62 126 82', role: 'soft' },
    { d: 'M134 50 l6 -2 M138 64 l6 0 M136 78 l6 2', role: 'ambient' },
    { d: 'M96 166 A22 8 0 0 1 128 154 l4 -4 l-2 6', role: 'accent' },
    { d: 'M142 162 A22 8 0 0 1 112 176 l-4 4 l1 -6', role: 'accent' },
    { d: 'M98 170 A22 8 0 0 0 126 158', role: 'soft' },
    shadow(96, 188, 56),
  ],

  // His gun in 3/4, cut square like a seven: the long barrel with its square
  // muzzle, the grip running down from its back to a big square base, the
  // far faces hatched, and the doors of the clock face open behind it, where
  // he and his partner come out (124).
  'mr-7': [
    { d: 'M20 60 H112 V78 H20 Z' },
    { d: 'M20 60 L28 54 H120 L112 60 M112 78 L120 72 V54' },
    { d: 'M24 64 h10 v10 h-10 z', role: 'accent' },
    { d: 'M112 78 L72 146 M96 78 L56 146 M120 72 L82 140' },
    { d: 'M48 146 H84 V176 H48 Z M84 176 L92 170 V140 L84 146' },
    { d: 'M98 54 l4 -10 h8 l-2 10' },
    { d: 'M86 92 q-8 0 -10 10 l8 4', role: 'soft' },
    {
      d: 'M114 66 l4 -4 M98 104 l6 -4 M88 122 l6 -4 M86 156 l4 -3',
      role: 'ambient',
    },
    {
      d: 'M4 14 L24 22 V100 L4 92 Z M156 14 L136 22 V100 L156 92 Z',
      role: 'ambient',
    },
    shadow(72, 190, 40),
  ],

  // Her round flintlock, spotted like a frog, its muzzle a frog's head, a
  // puff of smoke in front of it: the gun she shoots a royal guard down with.
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

  // A cigarette in 3/4, burning, its smoke drifting up, and behind it on the
  // sea the warships she has blockading every dock of Alabasta (128).
  'hina': [
    { d: 'M20 98 L118 54 M26 110 L124 66' },
    { d: 'M20 98 A6 3 -24 0 0 26 110', role: 'soft' },
    { d: 'M42 88 L48 100', role: 'soft' },
    { d: 'M118 54 A6 3 -24 0 1 124 66 A6 3 -24 0 1 118 54', role: 'accent' },
    { d: 'M106 62 l4 6 M96 66 l4 6', role: 'soft' },
    {
      d: 'M124 52 C118 40 130 34 124 22 C120 14 128 8 126 0',
      role: 'ambient',
      dashed: true,
    },
    {
      d: 'M10 146 h36 l-6 8 h-24z M62 146 h36 l-6 8 h-24z M114 146 h36 l-6 8 h-24z',
      role: 'ambient',
    },
    {
      d: 'M28 146 V118 M80 146 V118 M132 146 V118 M20 124 h16 v14 h-16z M72 124 h16 v14 h-16z M124 124 h16 v14 h-16z',
      role: 'ambient',
    },
    ...SEA.slice(1),
  ],

  // A cooking pot in 3/4 steaming on the palace stove, a ladle standing in
  // it, and the bowl of fruit she sends up to keep the captain going until
  // dinner is ready (128).
  'terracotta': [
    { d: ellipse(64, 104, 34, 8) },
    { d: 'M30 104 V150 Q30 168 64 168 Q98 168 98 150 V104' },
    { d: 'M30 116 h-8 v12 h8 M98 116 h8 v12 h-8', role: 'soft' },
    { d: 'M84 104 L114 40 l7 2' },
    { d: 'M86 128 l6 -4 M86 142 l6 -4 M84 156 l6 -4', role: 'ambient' },
    {
      d: 'M50 94 C42 82 56 76 50 62 M70 94 C62 82 76 76 70 62',
      role: 'ambient',
    },
    { d: 'M100 166 Q122 188 144 166' },
    { d: ellipse(122, 166, 22, 5), role: 'soft' },
    {
      d: `${circle(112, 156, 7)} ${circle(128, 154, 8)} M114 150 q-2 -6 2 -8`,
      role: 'accent',
    },
    { d: 'M136 160 q8 -14 -2 -24', role: 'accent' },
    shadow(84, 188, 60),
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

/** The lower half of Brogy's haft, snapped off in splinters above the straps (78). */
const BROGY_HAFT_STUB: Stroke[] = [
  { d: 'M80 176 L85.5 112 M88 177 L93.6 112' },
  {
    d: 'M85.5 112 L83.8 101 L88 107.5 L89.6 95 L91.6 105.5 L96.8 99 L93.6 112',
  },
  ...alabastaArt.brogy.slice(1, 2),
]

/** Pell's headscarf, hanging empty, as he leaves it behind at 130. */
const PELL_SCARF: Stroke[] = [
  {
    d: 'M70 24 C58 30 50 60 46 96 C42 126 36 150 30 166 C40 160 46 170 56 164 C64 172 72 162 80 170 C88 162 98 172 106 164 C114 170 122 160 132 166 C124 140 118 110 114 80 C110 50 100 28 88 22 C82 20 76 20 70 24 Z',
  },
  { d: 'M70 24 C74 32 84 32 88 22', role: 'soft' },
  {
    d: 'M64 40 C60 80 58 120 56 162 M80 30 C80 80 80 120 80 168 M96 40 C100 80 104 120 106 162',
    role: 'soft',
  },
  ...moved(alabastaArt.pell.slice(3, 4), 'translate(0 -50)'),
  {
    d: 'M112 70 l6 -4 M116 92 l6 -4 M120 114 l6 -4 M124 136 l6 -4',
    role: 'ambient',
  },
]

/** The records of this stretch drawn again, from the episode the story changes them. */
export const alabastaRedrawn: Redrawings = {
  // The cap of the two years, worn over the old hat: a round crown ringed
  // with dots, the cross on a disc at the front, the old brim showing under
  // it, flaps buckled at the sides and the antlers out through them. The far
  // side is hatched. He walks Sabaody eating a Grand Bun at 517 (ch. 598).
  'tony-tony-chopper': [
    { episode: 517, chapter: 598, value: CHOPPER_CAP },
    // A football helmet in place of the cap, turned a little to his left: the
    // wide stripe down the middle with a thin one each side, a star on the
    // near side, the antlers out through holes in the shell and the face guard
    // at the front. No cross is on it, so the stripe takes his colour. He
    // lands on Zou in it at 739 (ch. 795).
    {
      episode: 739,
      chapter: 795,
      value: [
        {
          d: 'M44 136 Q34 134 33 120 C28 74 54 40 82 40 C110 40 134 74 129 120 Q128 134 118 136',
        },
        {
          d: 'M44 136 C44 122 50 112 60 110 Q84 104 104 110 C114 112 118 122 118 136',
        },
        {
          d: 'M77.6 106.6 C73.6 82 74 58 79 40.1 Q86 39.6 93 40.7 C98.4 58 98.6 82 94.6 106.8',
          role: 'accent',
        },
        {
          d: 'M70 107.8 C66 82 66.6 58 72.4 41.2 M102 108.6 C106.4 82 105.6 58 99.8 41.8',
        },
        { d: star(52, 84, 10.4, 4.6) },
        {
          d: `${ellipse(37.6, 103, 3.6, 5.4)} ${ellipse(124.2, 103, 3.4, 5.4)}`,
          role: 'soft',
        },
        ...CHOPPER_ANTLERS,
        {
          d: 'M46 128 C52 148 66 154 82 154 C98 154 110 148 116 128 M48.4 138 Q82 150 113.8 138',
        },
        { d: 'M82 112 V154', role: 'soft' },
        {
          d: 'M110 52 l-5 6 M118 64 l-6 7 M124 78 l-6 7 M127 92 l-5 6',
          role: 'ambient',
        },
        shadow(80, 172, 46),
      ],
    },
    // The cap of the two years with a small crown sat on top: a band set with
    // jewels, ribs arched up to an orb. He wears it through his stay on Zou,
    // from 755 (ch. 806), and the cap is bare again when the crew leave, at
    // 776 (ch. 822).
    {
      episode: 755,
      chapter: 806,
      value: [
        ...CHOPPER_CAP,
        { d: 'M65.6 50.4 L64.6 42 Q80 37 95.4 42 L94.4 50.4' },
        {
          d: 'M64.6 42 C59 31 70 24.6 80 24.6 C90 24.6 101 31 95.4 42 M72 39.6 Q70.6 30 80 24.6 M88 39.6 Q89.4 30 80 24.6',
        },
        { d: circle(80, 21.2, 3.4) },
        {
          d: dots([
            [69.6, 45.6],
            [76.6, 44.2],
            [83.4, 44.2],
            [90.4, 45.6],
          ]),
          role: 'soft',
        },
      ],
    },
    { episode: 776, chapter: 822, value: CHOPPER_CAP },
    // The same cap with a pink scarf wound thick round the middle of the
    // crown, knotted at his left with two short ends hanging; the cross on its
    // disc sits over the scarf at the front, the ring of dots below it. He
    // comes ashore on Whole Cake Island in it at 786 (ch. 827). The scarf is
    // gone when he bathes at Bege's at 827 (ch. 858), and the cap is his look
    // again from there.
    {
      episode: 786,
      chapter: 827,
      value: [
        ...CHOPPER_CAP.slice(0, 1),
        {
          d: 'M40.9 80 Q80 52 119.1 80 M35.6 108 Q49.2 98.2 62.8 94.4 M97.2 94.4 Q99.4 95 101.6 95.8 M121.4 105.9 Q122.9 106.9 124.4 108',
        },
        {
          d: 'M37.1 94 Q50.8 84.5 64.6 81.1 M95.4 81.1 Q99.5 82.2 103.6 83.7 M116.8 90.2 Q119.9 92 122.9 94',
          role: 'soft',
        },
        {
          d: dots([
            [44, 112],
            [52, 107.6],
            [60.4, 104.6],
          ]),
          role: 'soft',
        },
        ...CHOPPER_CAP.slice(2, 9),
        {
          d: 'M104 80 Q110 76.4 116 80 L116.6 91 Q110 94 104.6 91 Z M106.4 92.6 Q103.6 99 100.4 104.4 L104.8 107.2 Q108 101 109.4 93.6 M111.6 93.4 Q114.6 99.6 118.6 103.6 L114.8 106.8 Q111.4 101.6 109.8 93.8',
        },
        { d: 'M110 78 V92.4', role: 'soft' },
        { d: 'M103 55 l-5 6 M112 61 l-6 7 M117.6 70 l-5 6', role: 'ambient' },
        ...CHOPPER_CAP.slice(10),
      ],
    },
    { episode: 827, chapter: 858, value: CHOPPER_CAP },
    // A ninja's hood of dark cloth wound over the cap for Wano, the cross
    // large on its front, the antlers tucked into the puffed lobes at its
    // sides and the cap's brim still under it. Kin'emon's Garb-Garb dresses
    // him at 911 (ch. 921): "I'm a ninja!"
    {
      episode: 911,
      chapter: 921,
      value: [
        {
          d: 'M36 126 C16 126 10 96 28 84 C30 56 54 38 80 38 C106 38 130 56 132 84 C150 96 144 126 124 126',
        },
        { d: 'M30 86 Q42 104 38 124 M130 86 Q118 104 122 124', role: 'soft' },
        { d: 'M67 72 l26 26 M93 72 l-26 26', role: 'accent' },
        { d: CHOPPER_BRIM },
        {
          d: 'M38 132 C36 142 40 150 48 154 M122 132 C124 142 120 150 112 154',
        },
        { d: 'M54 54 q5 6 3 14 M80 40 q-3 10 0 18', role: 'soft' },
        {
          d: 'M108 50 l-5 6 M118 60 l-6 7 M124 72 l-6 7 M127 86 l-5 6',
          role: 'ambient',
        },
        { d: 'M138 98 l-5 5 M140 110 l-5 5 M134 120 l-4 4', role: 'ambient' },
        { d: 'M114 138 l-4 5 M118 146 l-4 4', role: 'ambient' },
        shadow(80, 172, 44),
      ],
    },
    // The samurai kabuto for Onigashima, worn in place of the cap: the ribbed
    // bowl ringed with studs, the neck guard of lames, the turned-back flaps,
    // the antlers out round it, and the forked crest at the front, the cross
    // nowhere on it. From 959 (ch. 959) until the festival after the raid,
    // where the cap is back, at 1080 (ch. 1053).
    {
      episode: 959,
      chapter: 959,
      value: [
        { d: 'M46 112 C44 70 60 52 80 52 C100 52 116 70 114 112' },
        { d: 'M64 56 Q56 82 59 110 M96 56 Q104 82 101 110', role: 'soft' },
        {
          d: dots([
            [52, 104],
            [62, 107],
            [70, 108.5],
            [90, 108.5],
            [98, 107],
            [108, 104],
          ]),
          role: 'soft',
        },
        { d: 'M42 114 Q80 128 118 114' },
        { d: 'M40 120 Q80 138 120 120 L126 134 Q80 154 34 134 Z' },
        { d: 'M32 142 Q80 166 128 142', role: 'soft' },
        {
          d: 'M46 112 C34 104 24 108 24 120 C24 130 34 134 42 128 M114 112 C126 104 136 108 136 120 C136 130 126 134 118 128',
        },
        {
          d: 'M80 112 V40 M80 66 C62 64 52 50 58 34 C60 28 68 28 68 34 M80 66 C98 64 108 50 102 34 C100 28 92 28 92 34',
          role: 'accent',
        },
        ...moved(CHOPPER_ANTLERS, 'translate(0 -8)'),
        { d: 'M104 62 l-4 6 M110 74 l-4 6 M113 88 l-4 6', role: 'ambient' },
        { d: 'M118 128 l-4 6 M122 136 l-4 6', role: 'ambient' },
        ...CHOPPER_CAP.slice(10),
      ],
    },
    { episode: 1080, chapter: 1053, value: CHOPPER_CAP },
    // A space helmet for Egghead, a great round shell over the cap, turned a
    // little to his right: the strap of its goggles across the upper front,
    // the opening with its rim and the cap's brim standing out inside it, the
    // antlers out high at the sides, a collar ring at the neck. From 1092
    // (ch. 1063) until he leaves the island in the cap, at 1155 (ch. 1124).
    {
      episode: 1092,
      chapter: 1063,
      value: [
        {
          d: 'M44 146 C30 130 26 96 32 74 C40 48 62 36 84 36 C110 36 132 56 134 90 C136 116 128 136 116 146',
        },
        { d: 'M34 62 Q72 46 128 58 L130 68 Q72 56 32 72 Z' },
        { d: 'M86 36.4 C80 40 76 46 74 52', role: 'soft' },
        { d: ellipse(66, 108, 33, 36) },
        { d: ellipse(62, 109, 25, 30), role: 'soft' },
        {
          d: 'M88 88 l5 -2 M90.5 100 l5 -1 M90.5 113 l5 0 M88 126 l5 1',
          role: 'ambient',
        },
        ...moved(CHOPPER_CAP.slice(4, 5), 'translate(7 5) scale(0.7)'),
        ...moved(CHOPPER_ANTLERS.slice(0, 1), 'translate(-4 -18)'),
        ...moved(CHOPPER_ANTLERS.slice(1, 2), 'translate(8 -16)'),
        {
          d: 'M114 48 l-5 6 M124 60 l-6 7 M130 76 l-6 7 M133 94 l-5 6 M131 112 l-5 6',
          role: 'ambient',
        },
        { d: 'M44 146 C42 160 118 160 116 146 M44 146 Q80 156 116 146' },
        shadow(80, 174, 44),
      ],
    },
    { episode: 1155, chapter: 1124, value: CHOPPER_CAP },
    // A red Viking helmet of Elbaf worn over the cap: the round dome with a
    // gold strap and its bosses over the top, the wide brim, the cap's brim
    // showing under it, and gold caps on the antler tips. From 1158
    // (ch. 1128).
    {
      episode: 1158,
      chapter: 1128,
      value: [
        { d: 'M40 104 C36 60 56 42 80 42 C104 42 124 60 120 104' },
        {
          d: 'M72 43 C68 60 68 82 70 100 L90 100 C92 82 92 60 88 43',
          role: 'accent',
        },
        { d: `${circle(80, 62, 3.5)} ${circle(80, 82, 3.5)}`, role: 'soft' },
        {
          d: dots([
            [50, 72],
            [54, 90],
            [110, 72],
            [106, 90],
          ]),
          role: 'soft',
        },
        { d: 'M22 112 Q80 86 138 112 L142 120 Q80 96 18 120 Z' },
        { d: 'M34 125 Q80 106 126 125 L127 131 Q80 112 33 131 Z' },
        ...moved(CHOPPER_ANTLERS, 'translate(0 -10)'),
        {
          d: 'M13.2 48.1 L10.5 42.7 Q5.3 38.6 5.5 45.3 L8.2 50.6 M20.8 42.6 L23.5 37.3 Q23.7 30.6 18.5 34.7 L15.8 40.1 M151.8 50.6 L154.5 45.3 Q154.7 38.6 149.5 42.7 L146.8 48.1 M144.2 40.1 L141.5 34.7 Q136.3 30.6 136.5 37.3 L139.2 42.6',
          role: 'soft',
        },
        {
          d: 'M102 52 l-4 6 M110 62 l-5 6 M114 74 l-5 6 M117 88 l-4 6',
          role: 'ambient',
        },
        { d: 'M120 112 l-3 4 M130 114 l-3 4', role: 'ambient' },
        ...CHOPPER_CAP.slice(10),
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
        ...ACE_HAT_OUT,
        {
          d: 'M80 52 C76 44 84 38 80 30 C77 24 83 20 81 14',
          role: 'ambient',
          dashed: true,
        },
      ],
    },
    // His grave in the New World: a plain block of stone with his knife
    // stuck upright in its top, and the hat, the flame long gone, hung tilted
    // on the hilt, the string of beads hanging from the brim. He is buried
    // there at 505 (ch. 590).
    {
      episode: 505,
      chapter: 590,
      value: [
        {
          d: 'M0 142 C12 141 22 140 34 140 M116 134 C130 133 146 132 160 132',
          role: 'ambient',
        },
        {
          d: 'M34 150 V122 H104 V150 M34 122 L46 112 H116 L104 122 M116 112 V140 L104 150',
        },
        { d: 'M108 126 l6 -5 M108 137 l6 -5 M108 147 l4 -3', role: 'ambient' },
        {
          d: 'M72 117 V108 M60 108 C66 105 78 105 84 108 M71.5 104 C68.5 95 68 86 70 77.2',
          role: 'soft',
        },
        {
          d: 'M67 106 C64 97 63 87 65.5 77.6 M77 106 C73.5 97 73 87 74.5 76.6',
        },
        ...moved(
          ACE_HAT_OUT,
          'translate(78 54) rotate(-18) scale(0.56) translate(-80 -100)',
        ),
        {
          d: dots([
            [108, 66],
            [109, 72],
            [109, 78],
            [108, 84],
            [106, 89],
            [103, 93],
          ]),
          role: 'soft',
        },
        shadow(74, 156, 50),
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

  // The saxophone, smaller, before the sea off Whisky Peak: on the horizon
  // the fire and smoke of his ship going up, a swirl taller than the town.
  // Nothing of the ship or of him is seen. The crew watch it at 67 (ch. 113,
  // below his record's chapter, so pinned at 114 with his record).
  // He walks into Nanohana at 111 (ch. 180) with a sticking plaster on his
  // cheek: the same saxophone, whole, carries two strips of it crossed.
  'igaram': [
    {
      episode: 67,
      chapter: 114,
      value: [
        ...moved(
          alabastaArt.igaram.slice(0, 10),
          'translate(-4 46) scale(0.66)',
        ),
        shadow(50, 172, 26),
        { d: 'M2 120 H32 M72 120 H158', role: 'ambient' },
        {
          d: 'M98 120 C88 102 96 84 104 74 C112 62 104 44 114 30 C124 16 142 16 150 30 C158 44 150 62 136 60 C124 58 124 46 134 44 C141 43 143 51 137 53',
          role: 'ambient',
        },
        {
          d: 'M110 120 C122 104 106 92 116 80 C124 70 142 74 144 86 C146 98 132 100 130 92',
          role: 'ambient',
        },
        {
          d: 'M134 120 C142 110 138 102 146 96 C152 92 158 98 156 104 M86 120 C82 112 86 104 92 100',
          role: 'ambient',
          dashed: true,
        },
        { d: 'M78 134 q10 -4 20 0 t20 0 t20 0 t20 0', role: 'ambient' },
        {
          d: 'M70 150 q10 -4 20 0 t20 0 t20 0 t20 0 t10 0',
          role: 'ambient',
          dashed: true,
        },
      ],
    },
    {
      episode: 111,
      chapter: 180,
      value: [
        ...alabastaArt.igaram,
        { d: PLASTER, transform: 'translate(70 134) rotate(35) scale(0.8)' },
        { d: PLASTER, transform: 'translate(70 134) rotate(-35) scale(0.8)' },
      ],
    },
  ],

  // His shield fallen flat on the ground, seen almost edge on, and his sword
  // lying across it, the green grip still in his colour. Brogy strikes him
  // down at 73 (ch. 120).
  // He wakes at 77 (ch. 127), and the two weapons cross again: his sword,
  // whole and notched, and Brogy's axe, both worn out by a hundred years.
  // Both weapons break in the Hakoku that ends the duel at 78 (ch. 129):
  // his hilt and green grip on a blade snapped short on a slant, beside the
  // strapped stub of Brogy's haft.
  // In Elbaf he is armed again, shield and sword, from 1112 (ch. 1079).
  // Turned demon at 1180 (ch. 1150): the same shield, a bat wing spread
  // behind it, and his sword made a trident, the old blade its long middle
  // prong between two curved ones. The form's end has not aired (#612).
  'dorry': [
    {
      episode: 73,
      chapter: 120,
      value: [
        { d: ellipse(80, 150, 54, 16) },
        { d: 'M26 150 C26 162 134 162 134 150', role: 'soft' },
        {
          d: 'M30 158 l-4 6 M50 164 l-3 6 M110 164 l3 6 M130 158 l4 6',
          role: 'ambient',
        },
        { d: ellipse(80, 149, 14, 4.5) },
        {
          d: dots([
            [80, 137],
            [80, 162],
            [44, 143],
            [116, 143],
            [44, 156],
            [116, 156],
          ]),
          role: 'soft',
        },
        { d: 'M44 128 L140 104 L154 104 L142 112 L46 136' },
        { d: 'M48 132 L144 108', role: 'soft' },
        { d: 'M38 118 L50 146' },
        { d: 'M36 132 l-18 4 M37 136 l-18 4', role: 'accent' },
        { d: circle(13, 137, 5), role: 'accent' },
        { d: 'M4 172 H156', role: 'ambient' },
        {
          d: 'M24 186 q20 -4 40 0 M96 186 q20 -4 40 0',
          role: 'ambient',
          dashed: true,
        },
      ],
    },
    {
      episode: 77,
      chapter: 127,
      value: [
        { d: 'M40 150 L112 30 L124 20 L122 36 L50 156' },
        { d: 'M45 153 L117 33', role: 'soft' },
        { d: 'M78 110 l5 0 l-2 -4 M96 80 l5 0 l-2 -4', role: 'soft' },
        ...DORRY_HILT,
        ...moved(
          alabastaArt.brogy.slice(0, 6),
          'translate(170 20) scale(-0.86 0.86) rotate(-12 90 110)',
        ),
        { d: 'M4 176 H156', role: 'ambient' },
        shadow(80, 188, 52),
      ],
    },
    {
      episode: 78,
      chapter: 129,
      value: [
        ...moved(
          [
            ...DORRY_HILT,
            {
              d: 'M40 150 L66 106.8 L66.8 113.6 L69.2 115 L70.2 122.4 L50 156',
            },
            { d: 'M45 153 L64 121.4', role: 'soft' },
          ],
          'translate(50 112) rotate(112) scale(1.5) translate(-50 -145)',
        ),
        ...moved(
          [
            ...BROGY_HAFT_STUB,
            { d: ellipse(84, 176.6, 4.4, 1.6) },
            {
              d: 'M92.8 122 l3 2.5 M91.8 138 l3 2.5 M90.8 154 l3 2.5',
              role: 'ambient',
            },
          ],
          'translate(126 140) rotate(37) scale(1.25) translate(-88 -136)',
        ),
        shadow(84, 182, 56),
      ],
    },
    { episode: 1112, chapter: 1079, value: alabastaArt.dorry },
    {
      episode: 1180,
      chapter: 1150,
      value: [
        ...moved(BAT_WING, 'translate(45 84) rotate(20) scale(0.72)'),
        ...alabastaArt.dorry,
        {
          d: 'M101.7 48.6 Q91.4 40.7 112.9 24.5 M114.3 58.4 Q124.6 66.3 135 41.5',
        },
      ],
    },
  ],

  // The same mast and rope, and a wisp of gunsmoke drifting off the coils:
  // a Billions agent shoots him where he is tied, off the page, at 95
  // (ch. 159).
  'mr-11': [
    {
      episode: 95,
      chapter: 159,
      value: [
        ...alabastaArt['mr-11'],
        {
          d: 'M98 92 C110 88 108 78 118 72 C128 66 124 56 134 50 C142 46 140 38 148 34',
          role: 'ambient',
          dashed: true,
        },
      ],
    },
  ],

  // His top hat, all the blast leaves of him, landed upright in the snow,
  // its far side hatched, the band in his colour. He drinks his own
  // explosive medicine at 86 (ch. 145).
  'hiluluk': [
    {
      episode: 86,
      chapter: 145,
      value: [
        {
          d: 'M4 150 C12 149 18 148 24 148 M138 142 C146 141 152 141 158 140',
          role: 'ambient',
        },
        {
          d: 'M26 146 C40 132 120 126 136 138 C140 150 118 158 82 158 C46 158 22 154 26 146 Z',
        },
        { d: 'M48 140 C46 110 50 84 54 64' },
        { d: 'M112 134 C114 104 112 80 108 60' },
        { d: ellipse(81, 62, 27, 7) },
        {
          d: 'M50 120 C66 128 98 126 112 118 M50 128 C66 136 98 134 112 126',
          role: 'accent',
        },
        {
          d: 'M96 74 l10 -5 M96 88 l11 -5 M96 102 l12 -5 M98 114 l11 -4',
          role: 'ambient',
        },
        { d: 'M58 74 C56 96 56 110 56 120', role: 'soft' },
        {
          d: 'M20 166 q14 -6 28 0 M104 166 q16 -6 32 0',
          role: 'ambient',
          dashed: true,
        },
        {
          d: dots([
            [24, 40],
            [44, 24],
            [128, 30],
            [146, 52],
            [140, 92],
            [16, 90],
          ]),
          role: 'ambient',
        },
      ],
    },
  ],

  // The same throne, a newspaper propped on its seat, folded open: the
  // headline and the columns as lines, a box where the photographs are.
  // The paper says he has been murdered at the Levely at 1081 (ch. 1054).
  'nefertari-cobra': [
    {
      episode: 1081,
      chapter: 1054,
      value: [
        ...alabastaArt['nefertari-cobra'],
        { d: 'M64 104 L66 64 L104 66 L102 106' },
        { d: 'M84 65 L83 105', role: 'soft' },
        {
          d: 'M70 72 h10 M70 78 h10 M70 84 h10 M88 74 h10 M88 80 h10 M88 86 h10 M88 92 h10',
          role: 'ambient',
        },
        { d: 'M70 90 h10 v10 h-10 z', role: 'soft' },
      ],
    },
  ],

  // The same sword on the same robe, and over them one of the falcon's wings
  // he flies on, spread, its flight feathers barred dark and light. He shows
  // the Zoan when he swoops on Vivi's captors at 106 (ch. 169).
  // At 125 (ch. 208) his feathers drift down onto them as he flies the bomb
  // up out of the city.
  // At 130 (ch. 217) he leaves a desert clinic on foot and forgets his
  // headscarf: the white cloth alone, hanging, the stars of the robe on it,
  // and beside it the wing he still has.
  'pell': [
    { episode: 106, chapter: 169, value: [...alabastaArt.pell, ...PELL_WING] },
    {
      episode: 125,
      chapter: 208,
      value: [
        ...alabastaArt.pell,
        ...PELL_WING,
        { d: FEATHER, transform: 'translate(60 124) rotate(70)' },
        { d: FEATHER, transform: 'translate(128 24) rotate(20)' },
      ],
    },
    {
      episode: 130,
      chapter: 217,
      value: [
        ...moved(PELL_SCARF, 'translate(44.4 38.4) scale(0.8)'),
        ...moved(PELL_WING, 'translate(2 20) scale(0.8)'),
        shadow(108, 188, 40),
      ],
    },
  ],

  // The same cup, dried out: no steam, and a dry ring on its bottom where
  // the tea was. Crocodile dries him up and feeds him to the Bananawani at 104
  // (ch. 166).
  // At 109 (ch. 176) a Bananawani spits out the wax ball he sealed himself
  // in: the cup steams again beside the two halves of the shell.
  'mr-3': [
    {
      episode: 104,
      chapter: 166,
      value: [
        ...alabastaArt['mr-3'].slice(0, 1),
        { d: ellipse(66, 124, 12, 3), role: 'accent' },
        ...alabastaArt['mr-3'].slice(2, 7),
        ...alabastaArt['mr-3'].slice(8),
      ],
    },
    {
      episode: 109,
      chapter: 176,
      value: [
        ...moved(alabastaArt['mr-3'].slice(0, 8), 'translate(-16 0)'),
        shadow(50, 186, 42),
        {
          d: 'M100 150 C100 176 150 176 150 150 L144 146 L138 152 L130 144 L122 151 L114 145 L106 152 Z',
        },
        { d: 'M104 158 C112 168 138 168 146 158', role: 'soft' },
        {
          d: 'M114 136 C108 116 124 100 140 104 C154 108 158 124 152 134 L146 130 L140 136 L132 128 L124 134 L118 128 Z',
        },
        { d: 'M138 152 l6 -4 M140 162 l6 -4', role: 'ambient' },
        shadow(126, 186, 30),
      ],
    },
  ],

  // The same duck, a white band now tied round his near wing and knotted on
  // top: the crew's arm bands, tied on at 92 (ch. 157). The X they hide is
  // not drawn. The bands are off at the farewell, when the crew bare the
  // mark, at 129 (ch. 216).
  'karoo': [
    {
      episode: 92,
      chapter: 157,
      value: [
        ...alabastaArt.karoo.slice(0, 9),
        {
          d: 'M70 112 C78 107 90 103 98 106 C103 110 102 120 96 123 C86 127 74 128 64 124',
        },
        { d: 'M78 108.8 Q81.5 118 79.5 127.6 M87 106.4 Q90.5 116 88.5 126.4' },
        { d: 'M82 107.6 L76 101 M83.6 107.2 L86 99', role: 'soft' },
        ...alabastaArt.karoo.slice(10),
      ],
    },
    { episode: 129, chapter: 216, value: alabastaArt.karoo },
  ],

  // Her new beret in 3/4, puffed out into an apple: two round lobes with a
  // dimple between them, a stalk and a leaf standing out of it, the rim
  // band under the overhang, the far side hatched. She wears it in place of
  // the brimmed hat when she is seen again at 1149 (ch. 1115).
  'miss-goldenweek': [
    {
      episode: 1149,
      chapter: 1115,
      value: [
        {
          d: 'M40 118 C24 112 16 94 22 80 C28 66 42 60 56 62 C66 63 74 66 82 72 C90 64 100 60 112 60 C130 62 144 78 140 96 C138 108 132 116 122 118',
        },
        { d: 'M40 118 C56 126 104 126 122 118' },
        { d: 'M48 122.5 V129 C58 138 104 138 114 129 V122.5' },
        { d: 'M68 70 C74 78 90 78 96 66', role: 'soft' },
        { d: 'M82 74 C82 64 84 56 88 50', role: 'accent' },
        {
          d: 'M84 58 C76 44 62 40 52 44 C58 58 72 62 84 58 Z M84 58 Q68 50 54 45',
          role: 'accent',
        },
        {
          d: 'M118 72 l6 -6 M126 84 l8 -6 M130 98 l8 -6 M126 110 l8 -6',
          role: 'ambient',
        },
        {
          d: 'M58 127 l4 -3 M70 128 l4 -3 M82 128 l4 -3 M94 128 l4 -3 M106 126 l3 -2',
          role: 'ambient',
        },
        { d: 'M32 88 Q36 76 48 72', role: 'soft' },
        shadow(80, 156, 48),
      ],
    },
  ],

  // His sword, smaller, and beside it the jackal's paw he fights Crocodile
  // with: the white wraps at the wrist, the black-furred hand closed in a
  // fist, four long curved claws below the knuckles. He shows the Zoan at
  // 120 (ch. 196).
  'chaka': [
    {
      episode: 120,
      chapter: 196,
      value: [
        ...moved(
          alabastaArt.chaka.slice(0, 11),
          'translate(44 106) scale(0.82) translate(-80 -106)',
        ),
        ...CHAKA_PAW,
        shadow(46, 184, 26),
      ],
    },
  ],

  // His spade in its sheath, smaller, and beside it the foreleg of the bison
  // he becomes: the plated bracer he keeps on the forearm, the shaggy black
  // fur hatched where it turns away, and the cloven hoof under the tuft.
  // He shows the Zoan at 81 (ch. 135).
  'dalton': [
    {
      episode: 81,
      chapter: 135,
      value: [
        ...moved(
          alabastaArt.dalton.slice(0, 9),
          'translate(-12 22) scale(0.78)',
        ),
        ...DALTON_FORELEG,
        shadow(86, 186, 68),
      ],
    },
  ],

  // His axe snaps in the same Hakoku at 78 (ch. 129): the strapped lower
  // haft still planted, splintered at the break, the chipped head fallen
  // beside it on a short stub, his red horned helmet lying by.
  // In Elbaf he is armed again, axe and helmet, from 1112 (ch. 1079).
  // Turned demon at 1180 (ch. 1150): the same axe and helmet, the horns
  // grown into curved demon horns that hook inward, and a bat wing spread
  // behind the haft. The form's end has not aired (#612).
  'brogy': [
    {
      episode: 78,
      chapter: 129,
      value: [
        ...moved(BROGY_HAFT_STUB, 'translate(-22 0)'),
        ...moved(
          [
            { d: circle(95, 50, 9) },
            {
              d: 'M103 46 L108 20 C120 21 130 27 136 34 L131 40 L141 45 C146 54 148 63 148 72 C146 94 132 106 116 112 L102 56',
            },
            ...alabastaArt.brogy.slice(4, 6),
            {
              d: 'M90.4 58.4 L89.4 70 L91.6 66 L93.6 74 L95.4 67 L98 72 L98.6 59.4',
            },
          ],
          'translate(120 138) rotate(45) scale(0.85) translate(-118 -66)',
        ),
        ...moved(
          alabastaArt.brogy.slice(6, 10),
          'translate(32 176) scale(0.65) translate(-36 -176)',
        ),
        ...alabastaArt.brogy.slice(10, 11),
        ...moved(alabastaArt.brogy.slice(11, 12), 'translate(-22 0)'),
      ],
    },
    { episode: 1112, chapter: 1079, value: alabastaArt.brogy },
    {
      episode: 1180,
      chapter: 1150,
      value: [
        ...moved(BAT_WING, 'translate(87 78) scale(0.85)'),
        ...alabastaArt.brogy.slice(0, 7),
        {
          d: 'M14 160 C0 146 0 116 26 98 C14 116 16 136 26 149 M58 160 C72 146 72 116 46 98 C58 116 56 136 46 149',
          role: 'accent',
        },
        ...alabastaArt.brogy.slice(8),
      ],
    },
  ],
}
