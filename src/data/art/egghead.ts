import { circle, dots, ellipse, SEA, shadow, wave } from '~/lib/svg/primitives'

import type { Drawings, Redrawings, Stroke } from './stroke'

/**
 * The laboratory of Egghead, a giant egg cracked open along its top, seen in
 * 3/4 with the far half of the broken rim behind the near one. The arc draws
 * it full size on its cloud; the place draws it small, over the island.
 */
const EGGHEAD_EGG: Stroke[] = [
  { d: 'M44 70 C36 84 35 104 42 120' },
  { d: 'M116 70 C124 84 125 104 118 120' },
  {
    d: 'M44 70 L52 80 L60 72 L68 84 L76 76 L84 86 L92 76 L100 82 L108 72 L116 70',
    role: 'accent',
  },
  {
    d: 'M44 70 L54 62 L64 67 L74 58 L84 65 L94 58 L104 64 L116 70',
    role: 'soft',
  },
  { d: 'M112 94 l7 -7 M112 106 l8 -8 M110 118 l8 -8', role: 'ambient' },
]

/** The egg moved up over the island and drawn at half size. */
const EGG_OVER_ISLAND = 'translate(40 -12) scale(0.5)'
/** The slant S-Hawk's sword lies at. */
const S_HAWK_SLANT = 'rotate(32 80 100)'
/** The slant Pythagoras's key lies at, its bow up and to the left. */
const PYTHAGORAS_KEY = 'rotate(-40 80 100)'
/** The tilt of Mars's globe on its axis. */
const MARS_TILT = 'rotate(-23 80 90)'
/** Ginny's joint of meat, enlarged by a quarter toward the top left. */
const GINNY_MEAT = 'translate(-20 -20) scale(1.25)'
/** The slant Nusjuro's katana lies at, over his coins. */
const NUSJURO_KATANA = 'rotate(-24 80 100)'
/** One bearded ear of Ju Peter's wheat, and the beard on it. */
const WHEAT_EAR = 'M80 60 q-7 -12 0 -34 q7 22 0 34'
const WHEAT_AWNS = 'M76 36 l-8 -8 M84 36 l8 -8 M75 46 l-8 -8 M85 46 l8 -8'
/** The two side ears, fanned out from the binding. */
const WHEAT_LEFT = 'rotate(-36 80 118)'
const WHEAT_RIGHT = 'rotate(36 80 118)'
/** The slant Garling's sword lies at, the pommel up and to the right. */
const GARLING_SWORD = 'rotate(-50 80 100)'
/** The tilt of Bluegrass's steering wheel. */
const BLUEGRASS_WHEEL = 'rotate(-10 80 104)'
/** The lean of the barrel out of Urban's hat. */
const URBAN_BARREL = 'rotate(-14 80 96)'

/** The drawings of the records filed in the egghead stretch of the route. */
export const eggheadArt = {
  // The laboratory of Egghead from the sea, as the crew first sees it at
  // 1090: the giant egg cracked open along its top, its broken rim the
  // accent, standing on the island cloud that holds it over the water.
  // No laser bands round the cloud: the Frontier Dome is shown at 1099.
  'egghead': [
    ...EGGHEAD_EGG,
    {
      d: 'M8 152 C0 140 10 126 26 130 C28 118 38 114 44 120 C60 130 100 130 116 120 C122 114 132 118 134 130 C150 126 160 140 152 152',
    },
    { d: 'M8 152 Q80 166 152 152', role: 'ambient' },
    ...SEA.slice(1),
  ],

  // The island from the sea, as it first shows at 1090: a low island dotted
  // with trees, and high over it the cloud with the cracked egg of the
  // laboratory on top, the egg of the arc drawn small.
  'egghead-island': [
    ...EGGHEAD_EGG.map((stroke) => ({ ...stroke, transform: EGG_OVER_ISLAND })),
    {
      d: 'M28 86 C16 80 20 64 36 66 C38 56 50 52 56 58 C66 64 94 64 104 58 C110 52 122 56 124 66 C140 64 144 80 132 86 Z',
    },
    { d: 'M40 80 q10 -6 22 -2', role: 'soft' },
    {
      d: 'M6 150 C16 140 28 136 42 138 C54 128 70 126 82 130 C96 124 116 128 128 138 C138 136 148 142 154 150',
    },
    {
      d: 'M38 137 q4 -10 8 0 M58 130 q5 -12 10 0 M78 128 q5 -11 10 0 M100 127 q5 -12 10 0 M120 134 q4 -10 8 0',
      role: 'soft',
    },
    { d: 'M-4 150 H164', role: 'ambient' },
    ...SEA,
  ],

  // The apple core on its shaft that stands on Vegapunk's sliced head, set
  // apart as an object, as he is first met at 1096: the red top of the apple
  // with its cut rim, the stem and leaf as the accent, the core
  // bitten down to a narrow waist under it with a seed pocket in its flesh, the far side
  // hatched, and the shaft that is driven into his head. No head.
  'vegapunk': [
    { d: 'M38 90 C32 58 60 44 80 54 C100 44 128 58 122 90' },
    { d: ellipse(80, 90, 42, 9) },
    { d: 'M52 68 q8 -10 18 -10', role: 'soft' },
    { d: 'M80 54 C80 46 82 40 86 36', role: 'accent' },
    { d: 'M86 36 q16 -8 22 4 q-14 8 -22 -4z', role: 'accent' },
    { d: 'M106 64 l8 -5 M110 76 l8 -5', role: 'ambient' },
    {
      d: 'M48 96 q8 0 10 6 q6 2 6 8 q4 4 4 10 q2 6 4 12 M112 96 q-8 0 -10 6 q-6 2 -6 8 q-4 4 -4 10 q-2 6 -4 12',
    },
    { d: 'M62 102 q12 4 12 20 q-10 -6 -12 -20', role: 'soft' },
    {
      d: 'M66 106 q4 2 3 6 q-4 -2 -3 -6 M69 114 q4 2 3 6 q-4 -2 -3 -6',
      role: 'soft',
    },
    { d: 'M94 110 l6 -4 M90 122 l5 -4', role: 'ambient' },
    { d: ellipse(80, 132, 8, 2.5), role: 'soft' },
    { d: 'M77 134.5 V172 L80 178 L83 172 V134.5' },
    shadow(80, 188, 24),
  ],

  // Shaka's helmet seen from the side, as it first shows at 1091: the black
  // dome hatched on the far side, the edge of the face plate, the band
  // at its base, the gold drum at the ear with the antenna rising out of it.
  // No number on it, and no grille.
  'shaka': [
    { d: 'M36 140 C30 96 46 54 84 52 C120 50 134 92 128 140' },
    { d: 'M36 140 L34 150 Q82 162 130 150 L128 140' },
    { d: 'M36 140 Q82 150 128 140', role: 'soft' },
    { d: 'M58 58 C42 84 42 116 54 142', role: 'soft' },
    {
      d: `M96 94 a10 16 0 0 0 0 32 ${ellipse(104, 110, 10, 16)}`,
      role: 'accent',
    },
    { d: 'M96 94 H104 M96 126 H104', role: 'accent' },
    { d: 'M98 99 h4 M97 106 h4 M97 114 h4 M98 121 h4', role: 'soft' },
    { d: 'M108 95 L134 32' },
    {
      d: 'M40 84 l7 -6 M37 98 l8 -7 M36 112 l8 -7 M36 126 l8 -7 M38 140 l6 -5',
      role: 'ambient',
    },
    shadow(82, 178, 50),
  ],

  // The two fists of the Vegaforce-01, her giant robot, rising out of the
  // sea with the Sunny held across them, as she carries the ship at 1091:
  // the fists as the accent, their fingers in soft, the right side of each
  // fist and forearm showing its thickness, the forearms ringed, the far
  // side of the right one hatched. The Sunny side on, the lion's mane at the
  // prow and no flag. No helmet: she wears hers only in the cockpit at 1090.
  'lilith': [
    {
      d: 'M136 84 H28 C29 96 34 106 42 112 M80 116 H90 M128 108 C132 102 135 94 136 84',
    },
    { d: 'M118 84 V70 H136 V84', role: 'soft' },
    {
      d: 'M24 65 Q28.3 60.7 29.3 66.7 Q35.3 65.8 32.6 71.2 Q38 74 32.6 76.8 Q35.3 82.2 29.3 81.3 Q28.3 87.3 24 83 Q19.7 87.3 18.7 81.3 Q12.7 82.2 15.4 76.8 Q10 74 15.4 71.2 Q12.7 65.8 18.7 66.7 Q19.7 60.7 24 65',
    },
    { d: circle(24, 74, 5), role: 'soft' },
    { d: 'M80 84 V24 M106 84 V40' },
    {
      d: 'M66 32 H94 C97 44 97 58 94 70 H66 C63 58 63 44 66 32 Z',
      role: 'soft',
    },
    {
      d: 'M42 102 C42 95 46 92 52 92 H64 C70 92 74 95 74 102 V124 C74 131 70 134 64 134 H52 C46 134 42 131 42 124 Z M90 102 C90 95 94 92 100 92 H112 C118 92 122 95 122 102 V124 C122 131 118 134 112 134 H100 C94 134 90 131 90 124 Z',
      role: 'accent',
    },
    {
      d: 'M64 92 C72 90 80 94 80 102 V122 C80 130 76 134 70 135 M112 92 C120 90 128 94 128 102 V122 C128 130 124 134 118 135',
    },
    {
      d: 'M50 92 C48 100 48 106 50 110 M58 92 V110 M66 92 C68 100 68 106 66 110 M98 92 C96 100 96 106 98 110 M106 92 V110 M114 92 C116 100 116 106 114 110',
      role: 'soft',
    },
    {
      d: 'M44 134 V158 M72 134 V158 M78 132 V156 M92 134 V158 M120 134 V158 M126 132 V156',
    },
    {
      d: 'M44 142 Q58 148 72 142 M44 150 Q58 156 72 150 M92 142 Q106 148 120 142 M92 150 Q106 156 120 150',
      role: 'soft',
    },
    {
      d: 'M122 106 l6 -5 M122 118 l6 -5 M122 130 l6 -5 M120 144 l6 -5',
      role: 'ambient',
    },
    ...SEA,
  ],

  // One of her golden serpent earrings, the same as Hancock's: a snake with
  // a wavy tail bent into a hoop, its head turned out at the top with the
  // line of its mouth and no eye, the hook through the ear at the tail, the
  // band's second face showing its thickness and hatched underneath, scales
  // in soft, and the lunarian flame on her back rising from behind it as the
  // accent. She wears both from her first appearance (1087).
  's-snake': [
    {
      d: 'M53.6 49.7 L51.1 54.5 L49.9 60 L50.1 65.3 L51 70.1 L52.2 74.7 L53.3 79.1 L54 83.3 L54.1 87.3 L53.4 91.3 L51.4 96 L48.7 102.2 L47 109.3 L46.4 116.7 L47 124.2 L48.8 131.4 L51.8 138.1 L56.3 144.1 L62.2 148.8 L69.5 151.9 L78 153 L86 151.9 L93 148.9 L98.6 144 L102.9 137.8 L106 130.6 L108 122.5 L109 113.8 L109.1 104.6 L108.4 95 L106.9 85.3',
    },
    {
      d: 'M62.4 54.3 L60.5 57.9 L59.9 60.9 L60 64.2 L60.7 68 L61.8 72.3 L63 77 L63.9 82.3 L64.1 88 L63 94.1 L60.6 100 L58.2 105.4 L56.9 110.9 L56.4 116.7 L56.9 122.6 L58.2 128.1 L60.5 133 L63.5 137.1 L67.3 140.2 L72.1 142.2 L78 143 L83.3 142.3 L87.6 140.4 L91.2 137.3 L94.2 133 L96.5 127.4 L98.1 120.8 L99 113.2 L99.1 104.9 L98.5 96.1 L97.1 86.7',
    },
    {
      d: 'M43 124.8 L45 132.7 L48.4 140.2 L53.4 146.8 L60.2 152.3 L68.5 155.8 L78 157 L87.1 155.8 L95.1 152.2 L101.6 146.7 L106.4 139.7 L109.8 131.8 L111.9 123.2',
      role: 'soft',
    },
    {
      d: 'M48 136 l-3 3 M58 148 l-2 4 M78 153 v4 M96 148 l3 3 M107 132 l4 1',
      role: 'ambient',
    },
    { d: 'M53.6 49.7 Q56 44 62.4 54.3' },
    { d: 'M58 47 C56 34 68 28 74 36' },
    {
      d: 'M97.1 86.7 C92 74 100 64 112 62 C124 60 133 63 131 69 C129 76 116 80 106.9 85.3',
    },
    { d: 'M131 68 Q121 71 112 72', role: 'soft' },
    {
      d: 'M53.3 79.1 L63 77 M47 124.2 L56.9 122.6 M69.5 151.9 L72.1 142.2 M108 122.5 L98.1 120.8 M54 98 L62 99',
      role: 'soft',
    },
    {
      d: 'M109 134 C128 128 142 114 148 92 C138 104 128 110 120 110 C122 118 118 124 110 122',
      role: 'accent',
    },
    { d: 'M114 128 C126 124 134 116 138 106', role: 'soft' },
  ],

  // His cross-shaped sword laid at a slant, shaped like Mihawk's but plainer
  // and with a pale blade: the single edge swelling toward the point, the
  // bevel in soft, the long guard forked at both ends, the wrapped grip and
  // the round pommel. The lunarian flame burns beside it as the accent.
  // Both are with him from his first appearance (1087).
  's-hawk': [
    {
      d: 'M76 118 V36 C76 26 80 20 88 12 C94 30 96 48 92 70 C90 88 86 104 86 118',
      transform: S_HAWK_SLANT,
    },
    {
      d: 'M80 114 V40 C80 32 83 26 87 20',
      role: 'soft',
      transform: S_HAWK_SLANT,
    },
    { d: 'M42 118 h76 v6 h-76z', transform: S_HAWK_SLANT },
    {
      d: 'M42 118 q-6 -2 -8 -10 M42 124 q-6 2 -8 10 M118 118 q6 -2 8 -10 M118 124 q6 2 8 10',
      transform: S_HAWK_SLANT,
    },
    { d: 'M76 124 V160 M84 124 V160', transform: S_HAWK_SLANT },
    {
      d: 'M76 134 l8 5 M76 144 l8 5 M76 154 l8 5',
      role: 'soft',
      transform: S_HAWK_SLANT,
    },
    { d: circle(80, 166, 6), transform: S_HAWK_SLANT },
    {
      d: 'M36 92 C18 84 8 66 10 44 C18 58 28 62 36 62 C34 72 36 82 36 92 Z',
      role: 'accent',
    },
    shadow(80, 188, 46),
  ],

  // Kuma's spotted bucket hat with its two round bear ears, the near one
  // whole, and the flame of a lunarian rising from behind its crown.
  's-bear': [
    {
      d: 'M116 106 C134 108 148 96 150 76 C145 84 140 86 136 86 C142 72 140 58 132 46 C132 60 126 68 120 70 C122 62 120 56 116 52 C118 66 116 76 114 84',
      role: 'accent',
    },
    { d: 'M44 112 C40 82 58 64 80 64 C102 64 118 80 116 112' },
    { d: 'M44 112 Q80 124 116 112', role: 'soft' },
    {
      d: 'M44 106 Q22 108 22 124 Q30 146 80 148 Q130 146 138 122 Q138 108 116 106',
    },
    { d: 'M90 66 a13 13 0 1 1 20 14' },
    { d: 'M96 64 a6 6 0 0 1 9 4', role: 'soft' },
    { d: 'M52 82 a11 11 0 0 1 18 -14' },
    {
      d: 'M43 98 q8 -6 14 1 q3 8 -5 11 q-6 1 -10 -3 M34 126 q8 -5 13 1 q-2 7 -10 6 q-5 -1 -3 -7z M88 136 q7 -3 11 2 q-3 6 -9 4 q-4 -2 -2 -6z M114 128 q7 -4 11 1 q-2 6 -8 5 q-5 -1 -3 -6z',
      role: 'soft',
    },
    { d: 'M48 84 l6 -5 M46 98 l7 -6', role: 'ambient' },
    shadow(80, 180, 58),
  ],

  // A dorsal fin, a wing of flame, the sea climbing either side of it.
  's-shark': [
    { d: 'M52 140 C64 92 84 62 104 44 C104 84 96 118 92 140 Z' },
    { d: 'M92 96 C84 108 74 122 66 132', role: 'soft' },
    {
      d: 'M104 122 C122 116 136 102 140 82 C130 96 118 102 110 102 C112 112 110 118 104 122 Z',
      role: 'accent',
    },
    { d: 'M36 150 C30 128 34 112 40 100', role: 'ambient', dashed: true },
    { d: 'M128 150 C136 126 132 110 126 98', role: 'ambient', dashed: true },
    { d: wave(152), role: 'ambient' },
    { d: wave(166), role: 'ambient' },
    {
      d: dots([
        [46, 92],
        [128, 90],
        [80, 40],
      ]),
      role: 'ambient',
    },
  ],

  // A power plug in 3/4, its two prongs as the accent: the record and the
  // wiki both describe the two appendages on his head as a plug's prongs
  // (1095). The body hatched on its far face, the grip in soft, the cord
  // coiling away. A likeness, not something he carries; no bulb.
  'edison': [
    { d: 'M48 100 H94 V136 Q94 150 80 150 H62 Q48 150 48 136 Z' },
    { d: 'M48 100 L62 92 H108 L94 100' },
    { d: 'M108 92 V128 Q108 140 96 146' },
    { d: 'M98 104 l6 -4 M98 116 l6 -4 M98 128 l6 -4', role: 'ambient' },
    { d: 'M54 118 h34 M54 126 h34', role: 'soft' },
    { d: 'M64 96 V64 h7 V96 M82 96 V64 h7 V96', role: 'accent' },
    { d: 'M71 64 l3 -2 V94 M89 64 l3 -2 V94', role: 'soft' },
    {
      d: 'M71 150 C72 170 40 160 38 174 C36 186 76 188 98 178 C116 170 132 174 140 186',
    },
    shadow(76, 190, 40),
  ],

  // The wind-up key that turns on top of his round head, set apart as an
  // object and laid at a slant, as he is first seen at 1095: the flat bow of
  // two round lobes as the accent, with its slot and its thickness, the
  // neck, the thick shaft hatched on its far side, the turning collar, and
  // the square bit with its teeth.
  'pythagoras': [
    {
      d: 'M80 40 C70 26 46 30 46 50 C46 70 70 74 80 62 C90 74 114 70 114 50 C114 30 90 26 80 40 Z',
      role: 'accent',
      transform: PYTHAGORAS_KEY,
    },
    {
      d: 'M114 50 C117 60 113 70 104 74 M46 50 C44 58 46 66 52 70',
      role: 'soft',
      transform: PYTHAGORAS_KEY,
    },
    { d: 'M78 44 h4 v14 h-4 Z', role: 'soft', transform: PYTHAGORAS_KEY },
    { d: 'M73 66 h14 v10 h-14 Z', transform: PYTHAGORAS_KEY },
    { d: 'M74 76 V140 M86 76 V140', transform: PYTHAGORAS_KEY },
    { d: 'M86 80 l4 -3 V138', role: 'soft', transform: PYTHAGORAS_KEY },
    { d: 'M70 96 h20 v8 h-20 Z', transform: PYTHAGORAS_KEY },
    { d: 'M70 100 h20', role: 'soft', transform: PYTHAGORAS_KEY },
    {
      d: 'M74 140 h12 v12 h-12 Z M74 146 h-6 v6 h6 M86 144 h5 v5 h-5',
      transform: PYTHAGORAS_KEY,
    },
    {
      d: 'M82 112 l4 -4 M82 124 l4 -4',
      role: 'ambient',
      transform: PYTHAGORAS_KEY,
    },
    shadow(84, 168, 50),
  ],

  // One of her Light-Pressure Gloves as a fist in 3/4, the white sleeve
  // attached to it, punching through a hologram as she does at 1091: the
  // knuckles and fingers in soft, the thumb across them, the underside
  // hatched, and the pane of light breaking where it lands, as the accent.
  'atlas': [
    { d: 'M58 82 H96 Q108 82 108 94 V116 Q108 128 96 128 H62' },
    { d: 'M58 82 L66 74 H98 Q108 74 112 84', role: 'soft' },
    { d: 'M72 94 H104 M72 105 H106 M72 116 H104', role: 'soft' },
    { d: 'M62 128 Q56 112 72 110 H88 q6 0 6 6 q0 6 -6 6 H72' },
    { d: 'M58 76 C46 72 30 78 22 84 M58 134 C46 138 30 136 22 130' },
    { d: 'M22 84 q-8 23 0 46 M40 80 q-6 26 0 52', role: 'soft' },
    { d: 'M64 132 l6 -6 M76 132 l6 -6', role: 'ambient' },
    { d: 'M114 40 L150 52 V172 L114 160 Z', role: 'soft' },
    {
      d: 'M112 104 L126 84 M112 104 L134 98 M112 104 L130 120 M112 104 L122 140',
      role: 'accent',
    },
    {
      d: 'M136 66 l6 4 l-5 5z M140 134 l6 2 l-3 7z M126 58 l4 -4',
      role: 'soft',
    },
  ],

  // A plate heaped with food in 3/4, the heap as the accent, a joint of meat
  // sticking out of it and a bone she has already picked clean beside the
  // plate: she eats for all the satellites at 1095.
  'york': [
    { d: ellipse(80, 140, 58, 16) },
    { d: ellipse(80, 138, 44, 10), role: 'soft' },
    {
      d: 'M40 136 C40 120 50 108 64 108 C70 96 92 94 100 106 C112 108 120 120 120 136',
      role: 'accent',
    },
    { d: 'M52 124 q10 -8 20 0 M84 116 q10 -8 22 2', role: 'soft' },
    { d: 'M104 110 L126 90 M126 90 q-2 -8 4 -9 q5 0 4 6 q6 -1 7 4 q-1 6 -7 4' },
    {
      d: 'M14 172 L46 164 M14 172 q-7 -1 -6 -6 q2 -4 7 -1 M14 172 q-4 6 -8 3 M46 164 q2 -6 7 -4 q3 4 -2 7 q5 3 1 6 q-5 1 -6 -5',
    },
    { d: 'M98 150 l6 -4 M110 150 l6 -4', role: 'ambient' },
    shadow(80, 162, 58),
  ],

  // His square black hat in 3/4, flat on top with softened corners and
  // hatched because it is black,
  // and his walking cane lying in front of it, the round grip as the accent.
  // He has both from his first appearance (151) and on the way to Egghead
  // (1105).
  'jaygarcia-saturn': [
    {
      d: 'M44 92 Q42 90 46 89 L78 82 Q80 81.5 82 82 L114 89 Q118 90 116 92 L82 101 Q80 102 78 101 Z',
    },
    { d: 'M44 92 V116 Q44 120 48 122 Q62 128 80 128 V102' },
    { d: 'M80 128 Q98 128 112 122 Q116 120 116 116 V92' },
    { d: 'M44 110 Q60 120 80 120 Q100 120 116 110', role: 'soft' },
    {
      d: 'M48 104 l12 -8 M50 116 l16 -11 M62 124 l16 -11 M84 124 l16 -11 M100 122 l16 -11 M90 108 l16 -11',
      role: 'ambient',
    },
    { d: 'M24 176 L132 152 M25.5 182 L133.5 158' },
    { d: 'M24 176 L25.5 182' },
    { d: 'M133 151 c4 -12 26 -10 26 4 c0 12 -16 14 -24 6', role: 'accent' },
    shadow(80, 144, 44),
  ],

  // A joint of meat on the bone with a bite taken out of it, the bite as the
  // accent: she has one when she first turns up beside Ivankov, biting it in
  // her debut panel (ch. 1095 p. 15, boxed "Slave Jinny") and holding it up
  // under the caption "Emporio Ivankov and Ginny, slaves" (ep. 1129,
  // 21:13). The bone ends in a single knuckle, the meat's underside hatched.
  'ginny': [
    {
      d: 'M44 120 C38 92 60 72 84 74 C92 72 96 76 98 80 q-6 4 -4 10 q-6 4 -2 10 q-6 4 -2 10 C102 112 98 118 92 122 C76 132 50 134 44 120 Z',
      transform: GINNY_MEAT,
    },
    {
      d: 'M98 80 q-6 4 -4 10 q-6 4 -2 10 q-6 4 -2 10',
      role: 'accent',
      transform: GINNY_MEAT,
    },
    {
      d: 'M56 100 q10 -10 22 -8 M54 114 q10 4 20 0',
      role: 'soft',
      transform: GINNY_MEAT,
    },
    {
      d: 'M52 126 l8 -6 M64 128 l10 -8 M80 124 l8 -6',
      role: 'ambient',
      transform: GINNY_MEAT,
    },
    { d: 'M94 118 L124 142 M100 112 L130 136', transform: GINNY_MEAT },
    {
      d: 'M124 142 q-4 8 4 10 q6 2 8 -4 q8 0 8 -8 q-2 -6 -10 -4 q0 -6 -8 -4',
      transform: GINNY_MEAT,
    },
    shadow(84, 180, 54),
  ],

  // A globe tilted on its stand: a title emblem, not an object he holds. It
  // stands for Warrior God of Environment, the title he is named with at
  // ch. 1086 / ep. 1120. The equator is the accent, a meridian in soft, the
  // half ring that holds it, and its night side hatched.
  'marcus-mars': [
    { d: circle(80, 90, 44) },
    { d: ellipse(80, 90, 44, 12), role: 'accent', transform: MARS_TILT },
    { d: ellipse(80, 90, 18, 44), role: 'soft', transform: MARS_TILT },
    {
      d: 'M98 52 l10 -2 M106 64 l14 -4 M110 78 l12 -4 M112 94 l10 -4 M110 110 l10 -5 M102 124 l12 -7',
      role: 'ambient',
    },
    { d: 'M59.7 42.1 A52 52 0 0 0 100.3 137.9' },
    { d: 'M100.3 137.9 Q96 150 80 150 V166' },
    { d: 'M54 170 a26 6 0 0 0 52 0 a26 6 0 0 0 -52 0' },
    shadow(80, 186, 34),
  ],

  // A pair of scales in 3/4: a title emblem, not an object he holds. It
  // stands for Warrior God of Justice, the title he is named with at
  // ch. 1086 / ep. 1120. The beam is the accent, tipped toward the near pan,
  // which hangs lower and larger, the undersides of the pans hatched.
  'topman-warcury': [
    { d: 'M80 44 V160' },
    { d: 'M76 44 L80 38 L84 44 L80 50 Z', role: 'soft' },
    { d: 'M36 62 L126 76', role: 'accent' },
    { d: 'M36 62 L24 104 M36 62 L48 104', role: 'soft' },
    { d: 'M126 76 L106 120 M126 76 L146 120', role: 'soft' },
    { d: 'M22 104 q14 10 28 0 M22 104 h28' },
    { d: 'M102 120 q24 18 48 0 M102 120 a24 6 0 0 0 48 0' },
    { d: 'M110 128 l6 -4 M124 132 l8 -6', role: 'ambient' },
    { d: 'M30 110 l6 -4', role: 'ambient' },
    {
      d: 'M56 160 a24 6 0 0 0 48 0 a24 6 0 0 0 -48 0 M56 160 v6 a24 6 0 0 0 48 0 v-6',
    },
    shadow(80, 182, 34),
  ],

  // His katana, which he always keeps in his hand, half drawn as he draws it
  // on Cobra, laid at a slant: the pale sheath with its seam, the bare steel
  // as the accent, the guard, and the wrapped grip. Under it, a short stack
  // of coins with soft rims: a title emblem, not something he holds. It
  // stands for Warrior God of Finance, the title he is named with at
  // ch. 1086 / ep. 1120.
  'ethanbaron-v-nusjuro': [
    { d: ellipse(48, 164, 24, 6) },
    { d: 'M24 164 v4 a24 6 0 0 0 48 0 v-4' },
    { d: ellipse(52, 156, 24, 6) },
    { d: 'M28 156 v4 M76 156 v4', role: 'soft' },
    { d: ellipse(46, 148, 24, 6) },
    { d: ellipse(46, 148, 18, 4), role: 'soft' },
    { d: 'M22 148 v4 M70 148 v4', role: 'soft' },
    {
      d: 'M16 96 H88 L92 100 L88 104 H16 Q12 100 16 96 Z',
      transform: NUSJURO_KATANA,
    },
    { d: 'M24 100 H84', role: 'soft', transform: NUSJURO_KATANA },
    {
      d: 'M92 98 H120 Q124 100 120 102 H92',
      role: 'accent',
      transform: NUSJURO_KATANA,
    },
    { d: ellipse(124, 100, 3, 12), transform: NUSJURO_KATANA },
    { d: 'M127 96 H152 Q155 100 152 104 H127 Z', transform: NUSJURO_KATANA },
    {
      d: 'M130 96 l5 8 M136 96 l5 8 M142 96 l5 8 M135 104 l5 -8 M141 104 l5 -8',
      role: 'soft',
      transform: NUSJURO_KATANA,
    },
    shadow(70, 182, 60),
  ],

  // A sheaf of wheat bound at its waist, the binding as the accent: a title
  // emblem, not something he holds. It stands for Warrior God of
  // Agriculture, the title he is named with at ch. 1086 / ep. 1120. Three
  // bearded ears fan out on top, the stalks splay out under the binding, and
  // the far stalks are hatched.
  'shepherd-ju-peter': [
    { d: 'M72 118 L56 166 M76 118 L70 170 M84 118 L90 170 M88 118 L104 166' },
    {
      d: 'M72 118 C70 100 62 84 50 70 M80 118 V60 M88 118 C90 100 98 84 110 70',
    },
    { d: 'M70 112 Q80 118 90 112 M70 120 Q80 126 90 120', role: 'accent' },
    { d: WHEAT_EAR },
    { d: WHEAT_EAR, transform: WHEAT_LEFT },
    { d: WHEAT_EAR, transform: WHEAT_RIGHT },
    { d: `${WHEAT_AWNS} M76 54 l-7 -6 M84 54 l7 -6`, role: 'soft' },
    { d: WHEAT_AWNS, role: 'soft', transform: WHEAT_LEFT },
    { d: WHEAT_AWNS, role: 'soft', transform: WHEAT_RIGHT },
    { d: 'M94 150 l6 -5 M96 162 l6 -5', role: 'ambient' },
    shadow(80, 180, 40),
  ],

  // A pair of headphones on their band, a small teddy bear hanging from a
  // cord below them, as on her backpack.
  'hibari': [
    { d: 'M42 104 C42 46 118 46 118 104' },
    { d: 'M50 102 C50 60 110 60 110 102', role: 'soft' },
    { d: ellipse(42, 112, 12, 18), role: 'accent' },
    { d: ellipse(118, 112, 12, 18), role: 'accent' },
    { d: 'M80 96 V136', role: 'soft' },
    { d: circle(80, 148, 12) },
    { d: [circle(70, 137, 4), circle(90, 137, 4)].join(' ') },
    { d: ellipse(80, 172, 14, 11) },
    shadow(80, 188, 44),
  ],
  // A Marine cap with a bill that runs far out past the crown, over the
  // fur collar of a coat.
  'prince-grus': [
    { d: 'M34 118 C34 74 110 70 112 118' },
    { d: 'M30 118 h86 v10 h-86z' },
    { d: 'M52 112 C58 96 84 92 96 106', role: 'soft' },
    {
      d: 'M116 124 C132 126 146 132 150 142 C136 146 124 140 112 130 Z',
      role: 'accent',
    },
    { d: 'M30 128 C58 140 96 142 116 128', role: 'accent' },
    {
      d: 'M30 170 q8 -12 16 0 q8 -12 16 0 q8 -12 16 0 q8 -12 16 0 q8 -12 16 0 q8 -12 16 0',
      role: 'soft',
    },
    shadow(80, 188, 50),
  ],
  // Her spiked choker standing on its edge in 3/4, as she wears it from her
  // first appearance (1090): the band with its thickness, the spikes round
  // it as the accent, the inside of the band hatched where it turns away,
  // and one of her hoop earrings beside it.
  'doll': [
    { d: ellipse(72, 100, 34, 46) },
    { d: 'M72 54 C96 54 112 76 112 100 C112 124 96 146 72 146', role: 'soft' },
    { d: ellipse(72, 100, 26, 37) },
    {
      d: 'M67.3 54.5 L72 39.3 L76.7 54.5 M90 61 L100.8 53.5 L97.3 69.2 M104.3 85.8 L116.2 89.5 L106 98.4 M103.5 117.2 L110.9 130.4 L98.8 128.3 M88 140.6 L87.3 157.1 L79.1 145 M64.9 145 L56.7 157.1 L56 140.6 M45.2 128.3 L33.1 130.4 L40.5 117.2 M38 98.4 L27.8 89.5 L39.7 85.8 M46.7 69.2 L43.2 53.5 L54 61',
      role: 'accent',
    },
    {
      d: 'M86 72 l6 -6 M90 86 l8 -8 M92 100 l8 -8 M90 114 l8 -8 M86 128 l6 -6',
      role: 'ambient',
    },
    { d: circle(134, 162, 10) },
    { d: 'M134 152 q4 -8 0 -12', role: 'soft' },
    shadow(84, 184, 54),
  ],

  // A coiled whip lying on its side, the handle up and the lash running
  // loose out of the coil.
  'kujaku': [
    { d: ellipse(74, 140, 48, 18) },
    { d: ellipse(74, 132, 38, 13), role: 'soft' },
    { d: ellipse(74, 126, 28, 9), role: 'soft' },
    { d: 'M98 70 L122 42 L130 49 L106 77 Z' },
    { d: 'M102 74 C92 92 70 100 60 118', role: 'accent' },
    { d: 'M118 146 C132 152 140 162 146 176', role: 'accent' },
    { d: dots([[126, 38]]), role: 'accent' },
    shadow(80, 188, 52),
  ],
  // A queen's crown in three-quarters, its straight upright points fanning
  // out as in her silhouette at 1118: the band seen from the front with a
  // ridge and one set stone, the back of the band between the points, and
  // the band's ends hatched where they turn away.
  'nefertari-lili': [
    { d: 'M32 128 Q80 160 128 128 V148 Q80 180 32 148 Z' },
    { d: 'M32 138 Q80 170 128 138', role: 'soft' },
    { d: 'M80 149 L85 154 L80 159 L75 154 Z', role: 'soft' },
    {
      d: 'M44 125.8 Q49 125 54 124.5 M66 123.4 Q70.5 123.2 75 123.1 M85 123.1 Q89.5 123.2 94 123.4 M106 124.5 Q111 125 116 125.8',
      role: 'soft',
    },
    { d: 'M34 129.3 L28 105 L29.8 98.8 L36 109.7 L42 134', role: 'accent' },
    {
      d: 'M55 139.7 L51.6 106.8 L54.6 99.2 L59.6 109.2 L63 142',
      role: 'accent',
    },
    { d: 'M76 143.9 L76 104.9 L80 96 L84 104.9 L84 143.9', role: 'accent' },
    {
      d: 'M97 142 L100.4 109.2 L105.4 99.2 L108.4 106.8 L105 139.7',
      role: 'accent',
    },
    {
      d: 'M118 134 L124 109.7 L130.2 98.8 L132 105 L126 129.3',
      role: 'accent',
    },
    { d: 'M35 147 l6 -6 M35 139 l5 -5 M118 151 l7 -7', role: 'ambient' },
    shadow(80, 182, 54),
  ],
  // His straight sword in its sheath, laid at a slant, as he has it when he
  // first appears at 1120: the black sheath hatched, its two bands near the
  // mouth, the round golden knuckle-bow guard as the accent, the wrapped
  // grip and the round pommel. No glasses.
  'figarland-garling': [
    { d: 'M2 95 H100 V105 H2 Q-4 100 2 95 Z', transform: GARLING_SWORD },
    {
      d: 'M8 95 l8 10 M24 95 l8 10 M40 95 l8 10 M56 95 l8 10 M72 95 l8 10',
      role: 'ambient',
      transform: GARLING_SWORD,
    },
    { d: 'M88 95 V105 M94 95 V105', role: 'soft', transform: GARLING_SWORD },
    { d: 'M100 90 h5 v20 h-5 z', transform: GARLING_SWORD },
    {
      d: 'M105 106 C116 126 140 128 150 104',
      role: 'accent',
      transform: GARLING_SWORD,
    },
    { d: 'M105 97 H146 M105 103 H146', transform: GARLING_SWORD },
    {
      d: 'M112 97 l4 6 M121 97 l4 6 M130 97 l4 6 M139 97 l4 6',
      role: 'soft',
      transform: GARLING_SWORD,
    },
    { d: circle(151, 100, 5), transform: GARLING_SWORD },
    shadow(80, 184, 44),
  ],

  // The steering wheel she grips riding a Pacifista at 1128, when she says
  // she is a Driving Human who ate the Ride-Ride Fruit: the rim in 3/4 with
  // its near edge as the accent, its thickness, the hub and three spokes,
  // the grips wrapped in soft and the underside hatched.
  'bluegrass': [
    { d: ellipse(80, 100, 58, 36), transform: BLUEGRASS_WHEEL },
    { d: ellipse(80, 100, 48, 28), transform: BLUEGRASS_WHEEL },
    {
      d: 'M22 100 a58 36 0 0 0 116 0',
      role: 'accent',
      transform: BLUEGRASS_WHEEL,
    },
    { d: ellipse(80, 104, 12, 7), transform: BLUEGRASS_WHEEL },
    {
      d: 'M68 104 L33 98 M92 104 L127 98 M80 111 V128',
      transform: BLUEGRASS_WHEEL,
    },
    {
      d: 'M26 88 l6 6 M24 100 l8 2 M28 112 l7 -2 M132 88 l-6 6 M136 100 l-8 2 M132 112 l-7 -2',
      role: 'soft',
      transform: BLUEGRASS_WHEEL,
    },
    {
      d: 'M60 128 l8 -6 M80 132 l8 -6 M100 128 l8 -6',
      role: 'ambient',
      transform: BLUEGRASS_WHEEL,
    },
    shadow(80, 170, 54),
  ],

  // A maul whose head is a scallop shell, ribs fanning out from the hinge.
  'pomsky': [
    { d: 'M100 96 L66 60 Q100 20 134 60 Z' },
    {
      d: 'M66 60 q8 -10 17 -14 q8 -8 17 -8 q9 0 17 8 q9 4 17 14',
      role: 'accent',
    },
    {
      d: 'M100 96 L78 46 M100 96 L92 38 M100 96 L108 38 M100 96 L122 46',
      role: 'soft',
    },
    { d: 'M90 96 h20 v8 h-20 Z' },
    { d: 'M96 104 L40 172 M104 104 L48 178' },
    { d: 'M52 158 l8 7 M46 166 l8 7', role: 'soft' },
    shadow(80, 188, 44),
  ],
  // The iron collar of a slave and its chain, as he wears it in Kuma's
  // memories at 1129: the heavy ring lying in 3/4 with its rim as the
  // accent, its thickness hatched underneath, the lock in soft, and the
  // chain running off it, one link flat and the next on its edge.
  'clapp': [
    { d: ellipse(66, 132, 48, 18), role: 'accent' },
    { d: ellipse(66, 130, 32, 10) },
    { d: 'M18 132 v12 a48 18 0 0 0 96 0 v-12' },
    {
      d: 'M30 152 l8 -6 M50 158 l8 -6 M74 158 l8 -6 M96 152 l8 -6',
      role: 'ambient',
    },
    { d: 'M60 150 h12 v14 h-12 z', role: 'soft' },
    { d: ellipse(122, 122, 10, 6), transform: 'rotate(-45 122 122)' },
    { d: ellipse(133, 109, 9, 2.5), transform: 'rotate(-45 133 109)' },
    { d: ellipse(144, 96, 10, 6), transform: 'rotate(-45 144 96)' },
    { d: ellipse(155, 83, 9, 2.5), transform: 'rotate(-45 155 83)' },
    shadow(70, 182, 54),
  ],

  // His crown in 3/4, as he wears it from 1131: a tall gold band flaring
  // out to its top and cut into square battlements, the far rim seen over
  // the near one in soft, the row of round stones near the base as the
  // accent, and the inside and the turning side hatched.
  'bekori': [
    {
      d: 'M30 96 L47.5 99.5 V115.5 H52.5 V100.2 L67.5 101.6 V117.6 H72.5 V101.9 L87.5 101.9 V117.9 H92.5 V101.6 L107.5 100.2 V116.2 H112.5 V99.5 L130 96',
    },
    {
      d: 'M30 96 L48 90.1 V100.1 H52 V89.1 L68 86.6 V96.6 H72 V86.3 L88 86.3 V96.3 H92 V86.6 L108 89.1 V99.1 H112 V90.1 L130 96',
      role: 'soft',
    },
    { d: 'M30 96 L38 150 M130 96 L122 150' },
    { d: 'M38 150 Q80 162 122 150' },
    {
      d: [
        circle(54, 140, 3.5),
        circle(67, 143, 3.5),
        circle(80, 144, 3.5),
        circle(93, 143, 3.5),
        circle(106, 140, 3.5),
      ].join(' '),
      role: 'accent',
    },
    { d: 'M58 90 l8 -6 M94 90 l8 -6', role: 'ambient' },
    { d: 'M116 122 l8 -6 M114 138 l7 -6', role: 'ambient' },
    shadow(80, 176, 44),
  ],

  // Her side cap in 3/4, as she wears it at 1133: the crown dark then, so
  // hatched, and the light brim rolled up round it, its top edge as the
  // accent, with the fold where the brim turns.
  'conney': [
    { d: 'M38 114 C34 80 56 58 84 58 C112 58 130 80 126 112' },
    {
      d: 'M30 122 C30 110 44 108 58 112 C62 106 70 104 76 108 C96 112 126 104 132 118',
      role: 'accent',
    },
    { d: 'M30 122 C34 138 60 144 82 142 C104 142 128 136 132 118' },
    { d: 'M58 112 Q62 126 60 140', role: 'soft' },
    { d: 'M38 128 Q48 134 56 134 M64 136 Q96 140 124 126', role: 'soft' },
    {
      d: 'M44 96 l16 -16 M50 104 l26 -26 M70 106 l30 -30 M90 106 l24 -24 M108 104 l14 -14',
      role: 'ambient',
    },
    shadow(80, 166, 54),
  ],

  // His white ushanka in 3/4, as he wears it at 1133, with its ear flaps
  // turned up and tied over the crown: the near flap's edging as the accent,
  // the tip of the far one showing over the top, the fold of the front in
  // soft, and the side that turns away hatched.
  'bulldog': [
    { d: 'M38 126 C34 90 56 68 84 68 C112 68 130 88 126 124' },
    { d: 'M38 126 Q82 144 126 124' },
    { d: 'M40 112 Q82 128 124 110', role: 'soft' },
    {
      d: 'M80 72 C96 58 126 62 132 82 C136 96 126 104 114 98 C102 92 92 84 80 72 Z',
      role: 'accent',
    },
    { d: 'M92 74 C104 68 120 72 124 84 C126 92 120 94 114 90', role: 'soft' },
    { d: 'M48 88 C46 76 54 70 64 70', role: 'accent' },
    { d: 'M108 112 l10 -8 M112 124 l8 -6 M60 128 l8 -6', role: 'ambient' },
    shadow(82, 160, 52),
  ],

  // Her nurse's cap in 3/4, as she arrives at Kuma's church at 1134: the
  // band with its fold as the accent, the crown pleated to the back, the
  // far side hatched. Before it, the black clipboard she carries in, hatched,
  // with its clip. No medicine: it is first shown at 1135.
  'alpha': [
    { d: 'M10 150 L74 134 L102 160 L38 178 Z' },
    { d: 'M38 178 V184 L102 166 V160' },
    { d: 'M34 146 l14 -4 l2 -6 l-10 3 z', role: 'soft' },
    {
      d: 'M26 164 l10 -10 M42 168 l18 -18 M60 164 l16 -16 M76 160 l10 -10',
      role: 'ambient',
    },
    { d: 'M64 104 Q100 120 144 100 L140 126 Q102 142 68 128 Z' },
    { d: 'M66 114 Q102 130 142 112', role: 'accent' },
    { d: 'M64 104 C70 84 86 76 104 76 C122 76 138 86 144 100' },
    {
      d: 'M104 76 Q100 92 102 112 M82 82 Q92 96 102 112 M126 82 Q112 96 102 112',
      role: 'soft',
    },
    { d: 'M128 124 l8 -6 M132 110 l8 -6', role: 'ambient' },
    shadow(104, 150, 40),
  ],

  // The giant gauntlet punching to the left: a fist in its glove, the
  // cylinder over the forearm hatched underneath, and the Steam Knuckle's
  // steam blasting out of the back. No lettering on the cylinder.
  'red-king': [
    { d: 'M12 90 V120 Q14 136 30 136 H60 Q74 136 76 122 V86' },
    { d: 'M12 90 q7 -10 15 -2 q8 -10 16 -2 q8 -10 16 -2 q8 -8 17 0' },
    { d: 'M19 82 L32 70 H86 M76 86 L88 74', role: 'soft' },
    { d: 'M27 88 V108 M43 86 V108 M59 84 V108', role: 'soft' },
    { d: 'M14 110 H54 q9 0 9 8 q0 8 -9 8 H18' },
    { d: 'M86 64 H118 M76 122 H118' },
    { d: ellipse(118, 93, 9, 29) },
    { d: 'M98 64 a8 29 0 0 1 0 58', role: 'soft' },
    { d: 'M100 120 l8 -8 M108 122 l10 -10', role: 'ambient' },
    {
      d: 'M128 80 q2 -12 14 -10 q10 -2 12 8 q8 6 0 14 M128 106 q10 -6 16 2 q10 2 8 12 q2 10 -10 10',
      role: 'accent',
    },
    shadow(72, 178, 58),
  ],
  // A pair of glasses whose lenses sweep out to sharp points, arms folded
  // under them.
  'hound': [
    { d: 'M16 132 L30 118 H70 q4 18 -8 28 q-26 8 -38 -8 Z' },
    { d: 'M144 132 L130 118 H90 q-4 18 8 28 q26 8 38 -8 Z' },
    { d: 'M70 124 q10 -8 20 0' },
    { d: 'M20 136 L42 166 M140 136 L118 166', role: 'soft' },
    { d: 'M38 128 l14 -5 M102 128 l14 -5', role: 'accent' },
    shadow(80, 188, 52),
  ],
  // The crescent he wears upright on his head, its horns up and curling in,
  // set apart as an object, as he is first named at 1142: the inner edge as
  // the accent, the dark outer half hatched below the line where it turns,
  // and the short foot it sits on.
  'guillotine': [
    { d: 'M40 46 C12 70 18 130 80 134 C142 130 148 70 120 46' },
    { d: 'M40 46 C40 80 58 104 80 104 C102 104 120 80 120 46', role: 'accent' },
    { d: 'M26 80 C32 112 54 122 80 122 C106 122 128 112 134 80', role: 'soft' },
    {
      d: 'M24 92 l8 -8 M30 110 l10 -10 M44 122 l10 -10 M62 128 l10 -10 M84 128 l10 -10 M104 124 l10 -10 M120 112 l10 -10 M130 94 l6 -6',
      role: 'ambient',
    },
    { d: 'M72 134 v14 h16 v-14' },
    { d: 'M72 141 h16', role: 'soft' },
    shadow(80, 166, 40),
  ],

  // His cap in 3/4, as he wears it at 1142: the band across the front as
  // the accent, left blank where it reads MARINES, the seam and the button
  // of the crown, the short peak hatched underneath, the far side hatched.
  'tosa': [
    { d: 'M40 128 C38 92 58 72 86 72 C112 72 128 90 126 124' },
    { d: 'M40 128 Q84 146 126 124' },
    { d: 'M44 102 Q78 116 112 102 L114 124 Q78 138 42 124 Z', role: 'accent' },
    { d: 'M86 72 Q84 96 80 112', role: 'soft' },
    { d: dots([[86, 72]]) },
    { d: 'M40 128 C24 134 18 146 28 152 C48 160 80 156 96 140' },
    {
      d: 'M30 146 l6 -5 M42 152 l7 -6 M56 152 l7 -6 M70 150 l7 -6',
      role: 'ambient',
    },
    { d: 'M114 112 l10 -8 M116 96 l8 -6', role: 'ambient' },
    shadow(80, 176, 50),
  ],

  // His black top hat in 3/4, hatched because it is black, its crown turned
  // into the barrel of a cannon as he points it at Bonney (1129): the
  // muzzle as the accent, a ring round the barrel, and the two lines of the
  // band in soft, with no lettering.
  'urban': [
    { d: ellipse(80, 150, 50, 12) },
    { d: 'M52 148 V96 M108 148 V96' },
    { d: 'M52 96 a28 7 0 0 0 56 0' },
    { d: 'M52 130 Q80 138 108 130 M52 122 Q80 130 108 122', role: 'soft' },
    { d: 'M62 98 L66 42 M98 98 L94 42', transform: URBAN_BARREL },
    { d: ellipse(80, 40, 16, 5), role: 'accent', transform: URBAN_BARREL },
    {
      d: 'M64 50 a16 5 0 0 0 32 0 M65 70 a15 4 0 0 0 30 0',
      role: 'soft',
      transform: URBAN_BARREL,
    },
    {
      d: 'M94 108 l12 -10 M94 120 l12 -10 M94 144 l12 -10 M66 108 l10 -8',
      role: 'ambient',
    },
    {
      d: 'M86 80 l8 -6 M86 92 l8 -6',
      role: 'ambient',
      transform: URBAN_BARREL,
    },
    shadow(80, 184, 58),
  ],

  // A drum with volume, its head in 3/4 as the accent, the hoops above and
  // below, the lacing between them and the turning side hatched: the Drums
  // of Liberation, the rhythm Zunesha hears and names as Joy Boy's return
  // (ch. 1043 / ep. 1070). An emblem, not something he is shown with.
  'joy-boy': [
    { d: ellipse(80, 82, 46, 14), role: 'accent' },
    { d: 'M34 82 V150 M126 82 V150' },
    { d: 'M34 150 a46 14 0 0 0 92 0' },
    { d: 'M34 92 a46 14 0 0 0 92 0 M34 140 a46 14 0 0 0 92 0', role: 'soft' },
    {
      d: 'M40 102 L54 150 L68 106 L82 154 L96 106 L110 150 L120 102',
      role: 'soft',
    },
    { d: 'M112 112 l10 -8 M112 126 l10 -8', role: 'ambient' },
    shadow(80, 184, 52),
  ],

  // A horned iron helmet with a barred visor, one horn snapped off, moss on
  // the rust.
  'emet': [
    { d: 'M36 176 V112 a44 44 0 0 1 88 0 V176' },
    { d: 'M28 176 h104' },
    { d: 'M52 112 h56 v58 h-56z M66 112 V170 M80 112 V170 M94 112 V170' },
    { d: 'M40 104 C22 92 14 70 20 44 C26 66 38 78 52 84', role: 'accent' },
    { d: 'M120 104 C128 100 134 94 138 86 l-5 -4 l-3 6', role: 'accent' },
    {
      d: dots([
        [44, 150],
        [116, 140],
        [46, 164],
        [114, 160],
        [60, 80],
      ]),
      role: 'soft',
    },
    shadow(80, 188, 52),
  ],
} satisfies Drawings

/** Saturn's hat, as his first drawing has it. */
const SATURN_HAT = eggheadArt['jaygarcia-saturn'].slice(0, 5)

/** The records of this stretch drawn again, from the episode the story changes them. */
export const eggheadRedrawn: Redrawings = {
  // The same small black hat, two great ox horns grown out from under its
  // brim, sweeping out and down and then up to points that turn in, as the
  // accent, their outer curves hatched because they are black. The cane in
  // front has grown with him into a long twisted stick with a lumpy knot of
  // root for a head. He is first seen in this human-beast form on Egghead at
  // 1128 (ch. 1094), and Joy Boy's Haki forces him out of it at 1153
  // (ch. 1122), where he is the first drawing again.
  'jaygarcia-saturn': [
    {
      episode: 1128,
      chapter: 1094,
      value: [
        ...SATURN_HAT,
        {
          d: 'M44 126 C20 134 0 116 6 88 C10 70 22 56 38 48 C26 64 18 84 24 100 C28 110 36 114 44 112',
          role: 'accent',
        },
        {
          d: 'M116 126 C140 134 160 116 154 88 C150 70 138 56 122 48 C134 64 142 84 136 100 C132 110 124 114 116 112',
          role: 'accent',
        },
        {
          d: 'M9 106 l9 -6 M18 120 l10 -7 M151 106 l-9 -6 M142 120 l-10 -7',
          role: 'ambient',
        },
        { d: 'M14 182 C40 176 60 178 84 170 C102 164 116 162 130 155' },
        { d: 'M15 187 C42 182 62 184 86 176 C104 170 118 168 134 161' },
        { d: 'M14 182 L15 187' },
        {
          d: 'M40 180 q6 4 12 0 M74 174 q6 4 12 -1 M108 166 q6 3 11 -1',
          role: 'soft',
        },
        {
          d: 'M130 155 C130 147 136 140 144 141 C150 138 155 143 153 149 C155 155 149 160 143 158 C139 162 134 162 134 161',
        },
        ...eggheadArt['jaygarcia-saturn'].slice(-1),
      ],
    },
    { episode: 1153, chapter: 1122, value: eggheadArt['jaygarcia-saturn'] },
  ],
}
