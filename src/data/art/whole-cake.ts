import {
  circle,
  dots,
  ellipse,
  polygon,
  SEA,
  shadow,
  wave,
} from '~/lib/svg/primitives'

import type { Drawings, Stroke } from './stroke'

/**
 * One tusk of the Mammoth's figurehead, curving out ahead of the bow and
 * back up at the tip. Jack's drawing sets a second one behind it.
 */
const MAMMOTH_TUSK: Stroke = {
  d: 'M66 104 C50 124 26 132 12 114 C0 96 4 66 22 48 C28 42 34 38 42 36 C30 48 20 62 18 80 C16 98 26 114 42 112 C52 110 60 104 66 96',
  role: 'accent',
}

/**
 * One of Vito's revolvers, side on and pointing left: the barrel hatched
 * underneath, the fluted drum, the hammer, the trigger guard and the
 * checkered grip. His drawing lays two of them one over the other.
 */
const VITO_GUN: Stroke[] = [
  { d: 'M14 76 H74 V86 H14 Z' },
  { d: ellipse(14, 81, 2.5, 5), role: 'accent' },
  { d: 'M74 70 H98 C102 70 104 72 104 76 V90 C104 94 102 96 98 96 H74 Z' },
  { d: 'M78 76 H100 M78 83 H100 M78 90 H100', role: 'soft' },
  {
    d: 'M104 74 L114 74 L120 64 L125 67 L118 80 V92 C124 106 126 118 122 128 H108 C106 116 104 104 100 96',
  },
  {
    d: 'M84 96 C84 106 96 108 98 98 M90 96 l2 6 M110 102 l8 -2 M110 110 l9 -2 M111 118 l9 -2',
    role: 'soft',
  },
  {
    d: 'M20 86 l4 -8 M30 86 l4 -8 M40 86 l4 -8 M50 86 l4 -8 M60 86 l4 -8',
    role: 'ambient',
  },
]

/** Vito's revolver turned and placed by a transform. */
function withVitoGun(transform: string): Stroke[] {
  return VITO_GUN.map((stroke) => ({ ...stroke, transform }))
}

/** The tilt of Cracker's sword Pretzel, drawn level about its guard. */
const PRETZEL_TILT = 'rotate(51.2 118 142)'

/** The lean of Judge's spear, drawn level with its blade to the right. */
const JUDGE_SPEAR_TILT = 'rotate(-56 80 100)'

/** The tilt of Randolph's spear, drawn level with a blade at each end. */
const RANDOLPH_SPEAR_TILT = 'rotate(-20 80 142)'

/** The tilt of Mjosgard's club, drawn level with its head to the right. */
const MJOSGARD_CLUB_TILT = 'rotate(-12 80 150)'

/**
 * The pink bicorne Big Mom wears, in three quarters: the trim along its
 * crest, the ruffled fastener on its side, the back panel showing past the
 * front. Napoleon is drawn as it, and her own drawing sets it down small
 * beside her sweets.
 */
const BIG_MOM_BICORNE: Stroke[] = [
  {
    d: 'M6 136 C24 130 32 116 38 98 C48 70 62 58 80 58 C98 58 112 70 122 98 C128 116 136 130 154 136 C130 140 108 134 80 134 C52 134 30 140 6 136 Z',
  },
  { d: 'M96 58 C112 58 126 70 134 92 C140 110 146 122 158 128', role: 'soft' },
  { d: 'M128 80 l7 -3 M134 94 l7 -3 M139 108 l8 -3', role: 'ambient' },
  {
    d: 'M16 132 C30 124 38 112 44 98 C52 78 64 66 80 66 C96 66 108 78 116 98 C122 112 130 124 144 132',
    role: 'accent',
  },
  { d: 'M34 136 C54 146 108 146 128 136', role: 'soft' },
  {
    d: 'M48 138 l4 6 M62 136 l4 8 M76 135 l4 9 M90 135 l4 9 M104 136 l4 8 M116 137 l3 5',
    role: 'ambient',
  },
  {
    d: 'M124 108 A3.1 3.1 0 0 1 122.1 113.1 A3.1 3.1 0 0 1 117.4 115.9 A3.1 3.1 0 0 1 112 114.9 A3.1 3.1 0 0 1 108.5 110.7 A3.1 3.1 0 0 1 108.5 105.3 A3.1 3.1 0 0 1 112 101.1 A3.1 3.1 0 0 1 117.4 100.1 A3.1 3.1 0 0 1 122.1 102.9 A3.1 3.1 0 0 1 124 108',
    role: 'soft',
  },
]

/**
 * The bicorne set down small at the foot of Big Mom's heap of sweets, plain:
 * its trim loses the accent, which goes to the sweets, and the hatching,
 * which would close up at that size.
 */
function setDownByTheSweets(hat: Stroke[]): Stroke[] {
  const transform = 'translate(96 118) rotate(12 30 60) scale(0.4)'
  const plain: Stroke[] = []

  for (const { role, ...stroke } of hat) {
    if (role !== 'ambient') {
      plain.push({ ...stroke, ...(role !== 'accent' && { role }), transform })
    }
  }

  return plain
}

/** The drawings of the records filed in the whole cake stretch of the route. */
export const wholeCakeArt = {
  // The yellow checked kerchief she wears over her braids as a child, off
  // her head and laid flat, the band still knotted. She wears it as she
  // runs through the village with little Linlin at 836.
  'gerd': [
    {
      d: 'M18 100 C40 104 120 104 142 100 C130 120 100 150 80 170 C60 150 30 120 18 100 Z',
    },
    { d: 'M18 100 C36 86 64 84 74 88 M142 100 C124 86 96 84 86 88' },
    {
      d: 'M24 98 C46 96 64 94 74 94 M136 98 C114 96 96 94 86 94',
      role: 'soft',
    },
    { d: 'M30 114 H130 M44 128 H116 M58 142 H102 M70 156 H90', role: 'soft' },
    {
      d: 'M48 104 V134 M64 104 V152 M80 104 V168 M96 104 V152 M112 104 V134',
      role: 'soft',
    },
    { d: 'M110 120 l10 -6 M104 136 l10 -6 M94 152 l8 -5', role: 'ambient' },
    {
      d: 'M72 90 C72 82 88 82 88 90 C88 98 72 98 72 90 Z M74 84 L60 70 L68 66 Z M86 84 L98 68 L92 64 Z',
      role: 'accent',
    },
    shadow(80, 184, 60),
  ],

  // His Viking helmet with its two curved horns, set down beside the dark
  // feather coat he wears, as the old captain comes for the orphans at 836.
  'jarul': [
    {
      d: 'M9 162.6 C10.1 140.2 26.9 127.4 47.1 127.4 C67.3 127.4 84.1 140.2 85.2 162.6 L79.6 156.2 L75.1 165.8 L69.5 157.8 L63.9 167.4 L58.3 159.4 L52.7 169 L47.1 161 L41.5 169 L35.9 159.4 L30.3 167.4 L24.7 157.8 L19.1 165.8 L14.6 156.2 Z',
    },
    {
      d: 'M15.7 151.4 l5.6 -8 M22.5 154.6 l6.7 -11.2 M29.2 156.2 l5.6 -9.6 M58.3 153 l6.7 -11.2 M66.1 154.6 l6.7 -9.6 M72.9 153 l5.6 -8',
      role: 'ambient',
    },
    { d: 'M19.1 145 C35.9 135.4 58.3 135.4 75.1 145', role: 'soft' },
    {
      d: 'M88.2 162 C86.8 136.8 96.6 125.6 112 125.6 C127.4 125.6 137.2 136.8 135.8 162',
    },
    {
      d: 'M88.2 162 C98 167.6 126 167.6 135.8 162 M88.2 156.4 C98 162 126 162 135.8 156.4',
      role: 'soft',
    },
    { d: 'M112 125.6 V157.8', role: 'soft' },
    {
      d: 'M126 132.6 l5.6 -2.8 M128.8 141 l5.6 -2.8 M130.2 149.4 l4.9 -2.1',
      role: 'ambient',
    },
    {
      d: 'M89.6 145.2 C77 145.2 67.2 135.4 68.6 115.8 C70 107.4 75.6 101.8 81.2 99 C77 110.2 78.4 122.8 91 136.8',
      role: 'accent',
    },
    {
      d: 'M134.4 143.8 C145.6 142.4 152.6 132.6 151.2 114.4 C150.5 107.4 147 103.2 142.8 100.4 C145.6 111.6 142.8 124.2 133 135.4',
      role: 'accent',
    },
    {
      d: 'M72.8 127 l5.6 -1.4 M71.4 117.2 l5.6 0 M147 124.2 l-4.9 -1.4 M147.7 115.8 l-4.9 0',
      role: 'soft',
    },
    shadow(80, 180, 66),
  ],

  // An elephant seen from the sea, a walled city riding on its back.
  'zou-arc': [
    { d: 'M18 132 C18 92 46 74 80 74 C114 74 142 92 142 132' },
    { d: 'M40 132 V152 M70 132 V158 M98 132 V158 M126 132 V152' },
    { d: 'M18 118 C4 124 6 148 16 152' },
    { d: 'M22 128 q-10 8 -2 15', role: 'soft' },
    { d: 'M46 74 V58 H118 V74' },
    { d: 'M48 58 v-6 h8 v6 M72 58 v-6 h8 v6 M96 58 v-6 h8 v6', role: 'soft' },
    { d: 'M104 52 V26 H120 V52', role: 'accent' },
    { d: 'M104 26 v-5 h5 v5 M113 26 v-5 h5 v5', role: 'accent' },
    ...SEA,
  ],

  // The bow of the Mammoth, the ship he commands, its figurehead's two
  // tusks curving out over the water ahead of the stem, the far one behind
  // the near; the planking turns under the hull. He sails it from his first
  // pages at 746, and he is named as its captain at 757.
  'jack': [
    {
      d: 'M56 80 C80 90 116 90 156 82 V140 C128 146 104 148 88 144 C74 126 64 104 56 80 Z',
    },
    { d: 'M56 80 C80 82 116 78 156 72 V82', role: 'soft' },
    {
      d: 'M70 108 C96 114 128 112 156 106 M80 126 C106 130 132 128 156 122',
      role: 'soft',
    },
    {
      d: 'M94 145 l-4 -9 M108 146 l-4 -9 M122 145 l-4 -9 M136 143 l-4 -9 M150 141 l-4 -9',
      role: 'ambient',
    },
    { ...MAMMOTH_TUSK, transform: 'translate(30 -16)' },
    MAMMOTH_TUSK,
    { d: 'M6 86 l8 1 M10 108 l7 -3 M24 74 l8 1', role: 'soft' },
    ...SEA.slice(1),
    {
      d: 'M76 150 q10 -5 20 0 q10 5 20 0 M120 150 q10 -5 20 0 q10 5 20 0',
      role: 'ambient',
    },
  ],

  // Warney, the crocodile-boar she rides, side on: the long ridged body,
  // the tusk at the corner of the mouth, the tail curled up, and the saddle
  // strapped round its belly that she offers Luffy a seat on at 754.
  'wanda': [
    {
      d: 'M8 112 C8 104 16 98 30 96 C44 82 66 76 88 76 C112 76 132 84 140 100 C144 108 146 116 146 122 C140 132 126 138 108 138 H54 C40 138 32 132 28 124 C20 124 8 122 8 112 Z M146 122 C152 120 156 110 152 102 C148 96 140 98 142 106',
    },
    {
      d: 'M36 92 l4 -7 l3 5 l4 -7 l3 4 l4 -7 l3 3 M106 78 l4 -7 l4 8 l4 -7 l4 9 l4 -7 l4 10 l4 -6 l4 12',
      role: 'soft',
    },
    { d: 'M10 116 C16 118 22 118 28 116', role: 'soft' },
    { d: 'M34 124 C28 112 30 102 36 96 C36 106 38 116 42 122 Z' },
    { d: 'M54 138 V158 h14 V138 M112 138 V158 h14 V136' },
    { d: 'M72 138 V152 h10 V138 M128 134 V152 h8 V130', role: 'ambient' },
    {
      d: 'M64 78 C62 70 66 64 72 66 C76 74 92 74 98 66 C104 60 112 62 110 74',
      role: 'accent',
    },
    { d: 'M70 80 V102 C76 106 96 106 102 102 V78', role: 'accent' },
    { d: 'M86 106 V138', role: 'soft' },
    { d: 'M82 116 h8 v8 h-8 Z', role: 'soft' },
    shadow(80, 172, 70),
  ],

  // The rabbit-paw gauntlet she fights in, upright in three quarters: the
  // three claws over the knuckles, the thumb, the cuff seen from below and
  // the far side turning away, electro crackling round it. She clashes with
  // Zoro's sword through it on the night she is first seen, at 753.
  'carrot': [
    {
      d: 'M52 150 C48 128 44 108 46 92 C44 74 50 62 60 60 C64 52 74 50 80 54 C86 48 98 50 102 58 C110 60 114 70 112 82 C116 100 112 124 106 150',
    },
    { d: ellipse(79, 150, 27, 7) },
    { d: 'M62 151 l6 -4 M74 153 l6 -5 M88 153 l6 -5', role: 'ambient' },
    { d: 'M54 134 C68 140 92 140 106 134', role: 'soft' },
    {
      d: 'M62 60 C62 70 66 78 70 82 M80 54 C80 64 84 72 88 76 M102 58 C100 66 102 74 104 80',
      role: 'soft',
    },
    { d: 'M46 96 C38 100 36 110 40 116 C44 120 50 118 52 112', role: 'soft' },
    { d: 'M108 92 l8 -3 M108 108 l8 -3 M108 124 l7 -3', role: 'ambient' },
    {
      d: 'M60 62 C54 50 54 40 58 32 C60 42 64 50 68 58 M80 54 C76 40 78 28 84 20 C84 32 86 42 90 52 M100 58 C100 46 104 38 110 32 C108 42 108 52 106 62',
    },
    {
      d: 'M38 60 l-10 10 l8 2 l-12 14 M34 124 l-12 6 l8 4 l-12 8',
      role: 'accent',
    },
    {
      d: 'M124 44 l12 6 l-8 4 l14 8 M126 112 l12 4 l-8 4 l12 6',
      role: 'accent',
    },
    shadow(80, 172, 46),
  ],

  // The duke's robe, hung open from the shoulders: the thick fur down both
  // edges and round the collar, the fur at the cuffs, the dark inside showing
  // between the edges. He wears it in his sickbed when the crew are let in
  // to see him, at 758.
  'inuarashi': [
    {
      d: 'M58 48 C40 52 26 62 22 82 L12 140 C14 148 26 150 32 144 L38 112 L36 172 H124 L122 112 L128 144 C134 150 146 148 148 140 L138 82 C134 62 120 52 102 48',
    },
    {
      d: 'M60 52 A4.5 4.5 0 0 1 60.2 59.5 A4.5 4.5 0 0 1 60.5 67 A4.5 4.5 0 0 1 60.8 74.5 A4.5 4.5 0 0 1 61 82 A4.5 4.5 0 0 1 61.2 89.5 A4.5 4.5 0 0 1 61.5 97 A4.5 4.5 0 0 1 61.8 104.5 A4.5 4.5 0 0 1 62 112 A4.5 4.5 0 0 1 62.2 119.5 A4.5 4.5 0 0 1 62.5 127 A4.5 4.5 0 0 1 62.8 134.5 A4.5 4.5 0 0 1 63 142 A4.5 4.5 0 0 1 63.2 149.5 A4.5 4.5 0 0 1 63.5 157 A4.5 4.5 0 0 1 63.8 164.5 A4.5 4.5 0 0 1 64 172',
      role: 'accent',
    },
    {
      d: 'M96 172 A4.5 4.5 0 0 1 96.2 164.5 A4.5 4.5 0 0 1 96.5 157 A4.5 4.5 0 0 1 96.8 149.5 A4.5 4.5 0 0 1 97 142 A4.5 4.5 0 0 1 97.2 134.5 A4.5 4.5 0 0 1 97.5 127 A4.5 4.5 0 0 1 97.8 119.5 A4.5 4.5 0 0 1 98 112 A4.5 4.5 0 0 1 98.2 104.5 A4.5 4.5 0 0 1 98.5 97 A4.5 4.5 0 0 1 98.8 89.5 A4.5 4.5 0 0 1 99 82 A4.5 4.5 0 0 1 99.2 74.5 A4.5 4.5 0 0 1 99.5 67 A4.5 4.5 0 0 1 99.8 59.5 A4.5 4.5 0 0 1 100 52',
      role: 'accent',
    },
    {
      d: 'M56 50 A5 5 0 0 1 60 42 A5 5 0 0 1 68 36 A5 5 0 0 1 80 34 A5 5 0 0 1 92 36 A5 5 0 0 1 100 42 A5 5 0 0 1 104 50',
      role: 'accent',
    },
    { d: 'M64 50 C70 44 90 44 96 50', role: 'soft' },
    {
      d: 'M72 62 l10 -6 M72 78 l14 -8 M72 94 l14 -8 M72 110 l14 -8 M72 126 l14 -8 M72 142 l14 -8 M72 158 l14 -8',
      role: 'ambient',
    },
    {
      d: 'M44 92 C46 120 46 150 48 170 M116 92 C114 120 114 150 112 170',
      role: 'soft',
    },
    {
      d: 'M12 140 A3.5 3.5 0 0 1 18 146 A3.5 3.5 0 0 1 26 147 A3.5 3.5 0 0 1 32 144 M128 144 A3.5 3.5 0 0 1 134 147 A3.5 3.5 0 0 1 142 146 A3.5 3.5 0 0 1 148 140',
      role: 'soft',
    },
    { d: 'M128 88 l8 -4 M130 104 l8 -4 M132 120 l8 -4', role: 'ambient' },
    shadow(80, 184, 52),
  ],

  // The green cape of the Guardians, high collar up, open at the front on
  // its dark inside and blown out to one side as he stands on a bough of
  // the Whale Forest. He watches Luffy from up there the day he is first
  // seen, at 754.
  'pedro': [
    { d: 'M0 158 C40 152 90 154 160 148', role: 'ambient' },
    {
      d: 'M60 50 C52 70 48 100 48 124 C48 136 46 146 42 154 C56 150 66 156 80 152 C92 158 104 150 116 146 C126 142 138 136 152 136 C142 124 138 108 140 92 C142 78 150 66 158 60 C138 60 116 56 100 46',
    },
    {
      d: `${ellipse(80, 46, 20, 6)} M60 46 V36 M100 46 V36 M60 36 C66 32 94 32 100 36`,
      role: 'accent',
    },
    { d: 'M100 52 C112 70 122 82 140 92', role: 'soft' },
    { d: 'M74 52 C72 90 70 122 68 152 M88 52 C92 90 96 120 100 150' },
    {
      d: 'M74 70 l14 -6 M73 90 l18 -8 M72 110 l20 -8 M70 130 l24 -9 M69 148 l26 -9',
      role: 'ambient',
    },
    {
      d: 'M62 70 C58 96 56 124 54 150 M112 76 C118 100 124 120 134 138',
      role: 'soft',
    },
    shadow(96, 178, 50),
  ],

  // His kiseru, the long pipe he is never without, the brass bowl still
  // smoking. He has it from the night he is first found, at 759.
  'nekomamushi': [
    { d: 'M38 150 L14 166 a4 4 0 0 0 5 6 L44 158' },
    { d: 'M32 154 l6 8', role: 'soft' },
    { d: 'M38 150 L104 104 M44 158 L110 112' },
    { d: 'M60 135 l6 8 M82 120 l6 8', role: 'soft' },
    { d: 'M104 104 C112 98 118 90 120 80 M110 112 C120 106 130 96 134 82' },
    { d: 'M104 104 l6 8', role: 'soft' },
    { d: ellipse(127, 79, 8, 3.5), role: 'accent' },
    { d: 'M114 106 l7 -3 M121 101 l7 -4 M127 95 l6 -5', role: 'ambient' },
    {
      d: 'M126 72 C114 62 136 54 124 42 C114 32 130 24 120 12',
      role: 'accent',
    },
    { d: 'M132 66 c10 -6 0 -14 10 -22 c6 -4 4 -10 8 -14', role: 'soft' },
    shadow(74, 182, 54),
  ],

  // The hidden door at the back of the Whale Tree's tail, swung open in
  // three quarters, a long flight of stairs going down into the dark behind
  // it. The minks bring the crew down it to the cave he is kept in at 768.
  'raizo': [
    {
      d: 'M14 36 C10 80 10 120 14 150 M146 36 C150 80 150 120 146 150',
      role: 'ambient',
    },
    {
      d: 'M24 50 c-3 16 3 26 0 40 M30 104 c-3 14 3 24 0 36 M134 56 c3 16 -3 24 0 38 M136 110 c3 14 -3 22 0 34',
      role: 'soft',
    },
    { d: 'M50 150 V94 C50 64 98 64 98 94 V150' },
    { d: 'M98 94 L106 98 V150', role: 'soft' },
    {
      d: 'M50 150 L62 134 H86 L98 150 M62 134 L68 124 H80 L86 134 M68 124 L72 116 H76 L80 124',
      role: 'soft',
    },
    {
      d: 'M56 88 l10 -10 M56 102 l18 -18 M66 106 l22 -22 M80 108 l14 -14',
      role: 'ambient',
    },
    {
      d: 'M98 90 L128 100 V162 L98 150 Z M128 100 l6 -2 V160 l-6 2',
      role: 'accent',
    },
    { d: circle(122, 132, 2.5), role: 'accent' },
    { d: 'M8 150 H50 M106 150 H152', role: 'ambient' },
    shadow(80, 172, 50),
  ],

  // Whole Cake Island from the sea: a gathering of frosted cakes on the
  // shore, the tall tiered chateau in the middle with the cream running down
  // each tier and candles on top, cotton-candy snow falling. The island is
  // seen from the Emperor's first pages (571), the snow as her ship comes
  // home at 783.
  'whole-cake-island-arc': [
    { d: 'M44 150 V124 M116 150 V124' },
    { d: `${ellipse(80, 124, 36, 6)} M52 124 V102 M108 124 V102` },
    { d: `${ellipse(80, 102, 28, 5)} M60 102 V80 M100 102 V80` },
    {
      d: `${ellipse(80, 80, 20, 4)} M66 80 V60 M94 80 V60 ${ellipse(80, 60, 14, 3)}`,
    },
    {
      d: 'M44 128 q4 8 8 0 q4 10 8 0 q4 8 8 0 q4 10 8 0 q4 8 8 0 q4 10 8 0 q4 8 8 0 q4 10 8 0 q4 8 8 0 M52 106 q4 8 8 0 q4 10 8 0 q4 8 8 0 q4 10 8 0 q4 8 8 0 q4 10 8 0 q4 8 8 0 M60 84 q4 8 8 0 q4 10 8 0 q4 8 8 0 q4 10 8 0 q4 8 8 0',
      role: 'accent',
    },
    {
      d: 'M70 58 V40 M80 57 V34 M90 58 V40 M70 40 q-3 -5 0 -9 q3 4 0 9 M80 34 q-3 -5 0 -9 q3 4 0 9 M90 40 q-3 -5 0 -9 q3 4 0 9',
      role: 'accent',
    },
    {
      d: 'M110 136 l6 -4 M110 146 l6 -4 M102 112 l6 -4 M96 92 l4 -4 M96 70 l4 -3',
      role: 'ambient',
    },
    {
      d: 'M8 150 V132 C8 120 40 120 40 132 V150 M8 134 q4 6 8 0 q4 7 8 0 q4 6 8 0 q4 7 8 0',
      role: 'soft',
    },
    {
      d: 'M120 150 V128 C120 116 152 116 152 128 V150 M120 130 q4 6 8 0 q4 7 8 0 q4 6 8 0 q4 7 8 0',
      role: 'soft',
    },
    { d: 'M0 150 H160', role: 'ambient' },
    {
      d: dots([
        [20, 40],
        [40, 22],
        [120, 30],
        [140, 52],
        [30, 80],
        [128, 86],
        [56, 16],
        [108, 12],
      ]),
      role: 'soft',
    },
    ...SEA,
  ],

  // The cloak of her raid suit, cut like a moth's wings, hung from the
  // shoulders and the knotted ascot down to the jagged black hem; the far
  // side turns away. She lands on the Sunny in it at 784.
  'vinsmoke-reiju': [
    { d: 'M24 56 C42 44 60 40 80 40 C100 40 118 44 136 56' },
    {
      d: 'M74 40 h12 l-2 7 h-8 Z M76 47 L68 68 L76 64 L78 48 M84 47 L92 66 L85 63 L82 48',
      role: 'soft',
    },
    { d: 'M66 42 C54 24 24 16 8 28 C2 56 22 88 66 94', role: 'accent' },
    {
      d: 'M66 94 C36 98 18 120 24 150 L32 144 L38 154 L46 146 L52 156 L60 148 L66 158 L74 150 L80 160 L86 150 L92 156 C90 132 90 112 94 94',
    },
    { d: 'M94 42 C104 26 128 20 142 30 C146 56 128 86 94 94' },
    {
      d: 'M94 94 C120 98 136 120 132 146 L125 140 L120 150 L113 142 L108 152 L101 144 L92 156',
    },
    {
      d: 'M104 50 l16 -14 M104 62 l30 -18 M106 76 l30 -16 M104 88 l24 -14 M100 110 l22 -8 M100 124 l28 -10 M102 138 l20 -8',
      role: 'ambient',
    },
    {
      d: 'M62 50 C46 44 28 36 16 32 M46 100 C40 118 40 134 44 150 M70 98 C66 116 68 134 66 152',
      role: 'soft',
    },
    shadow(78, 184, 54),
  ],

  // His two big revolvers, the guns he is named for, one laid over the
  // other: the drums, the grips, the dark barrels hatched underneath, the
  // muzzles as the accent. He wears them in their holsters on Bege's ship
  // at 763.
  'vito': [
    ...withVitoGun('translate(160 -14) scale(-1 1) rotate(-16 80 90)'),
    ...withVitoGun('translate(6 46) rotate(-6 80 90)'),
    shadow(80, 184, 56),
  ],

  // Her tail rising out of the sea in three quarters, dark and hatched on
  // the side that turns away, the frilled cloth she wears across its front,
  // the fluke spread above as the accent. She comes up to Aladine with it
  // at 790.
  'praline': [
    { d: 'M54 160 C50 130 60 110 76 94 C86 84 90 76 90 64' },
    { d: 'M98 160 C90 136 94 118 104 104 C110 94 108 80 102 68' },
    {
      d: 'M90 64 C80 52 62 44 42 46 C56 52 66 60 72 70 C80 66 88 68 90 64 M102 68 C106 52 120 40 140 36 C130 48 122 60 116 74 C110 70 104 72 102 68',
      role: 'accent',
    },
    {
      d: 'M72 70 C84 76 104 78 116 74 M62 54 C74 60 84 66 92 70',
      role: 'soft',
    },
    {
      d: 'M56 140 q4 6 8 0 q4 6 8 0 q4 6 8 0 q4 6 8 0 q4 6 8 0 M58 128 C70 134 86 134 96 128',
      role: 'soft',
    },
    {
      d: 'M96 112 l8 -5 M94 124 l8 -5 M94 136 l8 -5 M98 96 l8 -5 M102 84 l6 -4 M124 52 l6 -6 M120 62 l6 -6',
      role: 'ambient',
    },
    { d: 'M40 160 C52 154 96 154 112 160', role: 'soft' },
    ...SEA,
  ],

  // The tea she pours the crew to wash the chocolate down, a cup on its
  // saucer still steaming, and a bar of chocolate broken open beside it,
  // the minister of chocolate's own. She serves both in Chocolat Town at
  // 786.
  'charlotte-pudding': [
    { d: ellipse(54, 98, 26, 7) },
    { d: 'M28 98 C30 122 40 134 54 134 C68 134 78 122 80 98' },
    { d: 'M79 106 C92 104 94 120 76 122', role: 'soft' },
    { d: 'M34 100 C44 104 64 104 74 100', role: 'soft' },
    { d: ellipse(54, 136, 42, 9) },
    { d: 'M16 140 C32 148 76 148 92 140', role: 'soft' },
    { d: 'M46 86 c-6 -8 6 -12 0 -20 M60 86 c-6 -8 6 -12 0 -20', role: 'soft' },
    {
      d: 'M96 164 L112 122 L140 125 l-3 6 l6 4 l-4 6 l6 5 l-5 7 l3 9 Z M112 122 l8 -6 L148 119 l-8 6',
      role: 'accent',
    },
    { d: 'M108 133 l30 3 M103 147 l33 3 M126 124 l-14 40', role: 'soft' },
    { d: 'M148 119 l-3 6 l6 4 M143 158 l6 -5', role: 'ambient' },
    shadow(80, 176, 70),
  ],

  // A heap of the sweets she demands, a wrapped candy, a cupcake and a
  // lollipop on top, and her bicorne set down at its foot, small and plain:
  // the same hat Napoleon is drawn as. Her tribute of sweets is the first
  // thing told of her (571); she rules over her heap at 786.
  'charlotte-linlin': [
    {
      d: 'M6 160 C10 140 18 128 30 122 C28 108 38 98 50 100 C54 82 72 74 86 80 C98 70 118 76 120 92 C134 94 142 108 138 122 C136 134 128 142 116 148',
    },
    {
      d: `${ellipse(42, 128, 11, 8)} M31 128 l-12 -9 v18 z M53 128 l12 -9 v18 z`,
      role: 'accent',
    },
    {
      d: `${circle(96, 56, 14)} M96 56 m-7 0 a7 7 0 1 1 7 7 M96 70 V96`,
      role: 'accent',
    },
    {
      d: 'M64 156 l-6 -28 h40 l-6 28 Z M58 128 C54 108 104 108 98 128',
      role: 'accent',
    },
    { d: 'M68 132 l2 22 M78 132 v22 M88 132 l-2 22', role: 'soft' },
    {
      d: 'M14 152 h22 v10 h-22 Z M108 104 C108 96 126 96 126 104 C126 110 108 110 108 104 M110 110 C110 116 124 116 124 110',
      role: 'soft',
    },
    {
      d: 'M30 140 l6 -6 M40 146 l8 -8 M120 118 l6 -6 M124 128 l8 -8',
      role: 'ambient',
    },
    ...setDownByTheSweets(BIG_MOM_BICORNE),
    shadow(80, 180, 68),
  ],

  // His candy cane, the top a flat spiral like a lollipop, in three
  // quarters with the edge of the disc showing; the stripes run round the
  // spiral and up the shaft. He licks it as he shows Caesar his new
  // laboratory at 795.
  'charlotte-perospero': [
    { d: ellipse(80, 58, 38, 32) },
    { d: 'M42 58 v8 a38 32 0 0 0 76 0 v-8', role: 'soft' },
    {
      d: 'M46 76 l2 7 M56 88 l2 7 M68 95 l1 7 M80 98 v7 M92 95 l-1 7 M104 88 l-2 7 M114 76 l-2 7',
      role: 'ambient',
    },
    {
      d: 'M80 58 a5 4.2 0 0 1 10 0 a10 8.4 0 0 1 -20 0 a15 12.6 0 0 1 30 0 a20 16.8 0 0 1 -40 0 a25 21 0 0 1 50 0 a30 25.2 0 0 1 -60 0',
      role: 'accent',
    },
    { d: 'M75 98 L70 184 M85 98 L80 184 M70 184 H80' },
    {
      d: 'M74 110 l10 -7 M73 126 l10 -7 M72 142 l10 -7 M71 158 l10 -7 M70 174 l10 -7',
      role: 'accent',
    },
    { d: 'M52 40 C58 32 66 28 74 28', role: 'soft' },
    shadow(76, 190, 24),
  ],

  // The great biscuit shield his armour carries, thick in three quarters
  // with the edge turning away, and the long sword Pretzel crossed behind
  // it, its round guard as the accent. He first comes on with both at 796.
  'charlotte-cracker': [
    {
      d: 'M77 136 H112 M77 148 H112 M13 136 H-31 L-43 142 L-31 148 H13',
      transform: PRETZEL_TILT,
    },
    { d: 'M13 142 H-28 M80 142 H110', role: 'soft', transform: PRETZEL_TILT },
    {
      d: 'M124 138 H154 C158 138 160 140 160 142 C160 144 158 146 154 146 H124',
      transform: PRETZEL_TILT,
    },
    {
      d: 'M118 126 q4 2 2 6 q4 3 1 7 q4 3 0 7 q3 4 -2 7 q2 4 -3 5 q-6 0 -6 -16 q0 -16 8 -16 Z M114 127 C126 127 126 157 114 157',
      role: 'accent',
      transform: PRETZEL_TILT,
    },
    {
      d: 'M28 64 q4 -5 8 0 q4 -5 8 0 q4 -5 8 0 q4 -5 8 0 q4 -5 8 0 q4 -5 8 0 q4 -5 8 0 L94 58 M28 64 q-5 4 0 8 q-5 4 0 8 q-5 4 0 8 q-5 4 0 8 q-5 4 0 8 q-5 4 0 8 q-5 4 0 8 q-5 4 0 8 q-5 4 0 8 q-5 4 0 8 q-5 4 0 8 M28 152 q4 5 8 0 q4 5 8 0 q4 5 8 0 q4 5 8 0 q4 5 8 0 q4 5 8 0 q4 5 8 0 L94 146',
    },
    { d: 'M84 64 V152 M94 58 V146', role: 'soft' },
    {
      d: 'M86 74 l6 -6 M86 94 l6 -6 M86 114 l6 -6 M86 134 l6 -6',
      role: 'ambient',
    },
    {
      d: dots([
        [40, 80],
        [56, 80],
        [72, 80],
        [40, 100],
        [56, 100],
        [72, 100],
        [40, 120],
        [56, 120],
        [72, 120],
        [40, 138],
        [56, 138],
        [72, 138],
      ]),
      role: 'soft',
    },
    shadow(80, 182, 56),
  ],

  // The crooked tree Carrot takes her for in the Seducing Woods, the trunk
  // rounding at its roots and hatched on the side away from the light, its
  // long branches reaching out like fingers, sharp at the tips. Carrot
  // mistakes her for one at 792.
  'charlotte-brulee': [
    { d: 'M62 176 C66 150 64 126 56 108 C50 94 38 80 16 66' },
    { d: 'M96 176 C92 150 96 128 104 112 C112 98 126 88 148 86' },
    {
      d: 'M16 66 C34 70 50 76 60 84 C60 66 54 46 42 28 M70 82 C70 60 76 40 86 22 M80 86 C86 70 98 56 112 46 M94 96 C108 84 120 74 134 66',
    },
    {
      d: 'M16 66 l-7 -4 M42 28 l-4 -7 M86 22 l2 -8 M112 46 l6 -5 M134 66 l7 -3 M148 86 l7 1',
      role: 'accent',
    },
    {
      d: 'M70 168 C72 146 70 124 64 104 M84 166 C84 144 86 124 92 106',
      role: 'soft',
    },
    {
      d: 'M94 160 l8 -4 M94 146 l9 -4 M96 132 l9 -4 M100 118 l8 -4 M108 104 l6 -4',
      role: 'ambient',
    },
    {
      d: 'M44 182 C52 178 58 176 62 172 M114 182 C104 178 100 176 96 172 M56 180 C68 186 92 186 104 180',
      role: 'soft',
    },
    shadow(80, 190, 50),
  ],

  // The white sunhat she wears to the Tea Party, a rose on its band, the
  // brim seen from a little above, and the pink handbag she carries set down
  // beside it. She arrives in both with the bosses of the underworld at 830.
  'stussy': [
    { d: ellipse(70, 118, 54, 15) },
    { d: 'M42 114 C40 82 100 82 98 114' },
    { d: 'M43 104 C58 110 84 110 97 104', role: 'soft' },
    {
      d: `${circle(94, 100, 9)} M94 100 m-4 0 a4 4 0 1 1 4 4 M98 108 C104 112 110 110 112 106`,
      role: 'accent',
    },
    { d: 'M18 122 C30 132 110 132 122 122', role: 'soft' },
    { d: 'M116 162 L120 138 H150 L154 162 Z' },
    { d: 'M124 138 C124 122 146 122 146 138', role: 'soft' },
    { d: 'M128 146 h14 v6 h-14 Z', role: 'soft' },
    shadow(84, 176, 70),
  ],

  // His top hat, standing on a folded newspaper, the striped feather tucked
  // in its band as the accent and the dark crown hatched on the far side.
  // He comes to the Tea Party in it at 830, as president of the paper.
  'morgans': [
    { d: 'M8 158 L38 128 H150 L120 158 Z' },
    { d: 'M79 128 L64 158', role: 'soft' },
    {
      d: 'M30 150 h24 M38 142 h22 M92 150 h22 M100 142 h22 M108 134 h22',
      role: 'soft',
    },
    { d: ellipse(86, 54, 20, 5) },
    { d: 'M66 54 L68 116 M106 54 L104 116' },
    {
      d: 'M48 124 C56 132 116 132 124 124 C128 116 116 112 104 114 M48 124 C44 116 56 112 68 114',
    },
    {
      d: 'M68 102 C78 106 94 106 104 102 M68 110 C78 114 94 114 104 110',
      role: 'soft',
    },
    {
      d: 'M98 64 l6 -4 M98 76 l6 -4 M98 88 l6 -4 M98 98 l6 -4',
      role: 'ambient',
    },
    { d: 'M70 104 C58 82 50 60 54 32 C64 50 72 76 74 102', role: 'accent' },
    { d: 'M56 44 l10 2 M58 58 l12 2 M62 72 l10 2 M66 86 l8 2', role: 'accent' },
    shadow(80, 172, 62),
  ],

  // His spear, stood on its butt and leaning: a long blade ridged down the
  // middle with its lower facet hatched, a crossguard with its thickness
  // and a collar under it, the grip wrapped near the foot. He jabs at Sanji
  // with it at 793 (ch. 833). The wiki gives him a golden helmet, never a
  // crown, so there is none, and no charge in the blade.
  'vinsmoke-judge': [
    { d: 'M-24 97 H96 M-24 103 H96 M-24 97 V103', transform: JUDGE_SPEAR_TILT },
    {
      d: 'M-8 97 l5 6 M0 97 l5 6 M8 97 l5 6 M16 97 l5 6',
      role: 'soft',
      transform: JUDGE_SPEAR_TILT,
    },
    {
      d: 'M104 86 l3 -3 h5 v28 l-3 3 M109 86 l3 -3',
      role: 'soft',
      transform: JUDGE_SPEAR_TILT,
    },
    {
      d: 'M96 94 h8 v12 h-8 Z M104 86 h5 v28 h-5 Z',
      transform: JUDGE_SPEAR_TILT,
    },
    {
      d: 'M109 100 L128 90 L194 100 L128 110 Z',
      role: 'accent',
      transform: JUDGE_SPEAR_TILT,
    },
    { d: 'M109 100 H194', role: 'soft', transform: JUDGE_SPEAR_TILT },
    {
      d: 'M126 103 l3 5 M138 102 l3 6 M150 102 l3 5 M162 101 l3 5 M174 101 l2 3',
      role: 'ambient',
      transform: JUDGE_SPEAR_TILT,
    },
    shadow(36, 186, 30),
  ],

  // His white raid-suit cape laid out from the front: the high collar, the
  // folds, the front edges turned back on the dark lining, which is
  // hatched, and the red scarf knotted at the throat with its ends falling
  // to one side. He wears it on Broc Coli Island at 787. No number and no
  // glasses.
  'vinsmoke-ichiji': [
    { d: 'M58 52 C56 42 58 32 62 26 C74 32 86 32 98 26 C102 32 104 42 102 52' },
    { d: 'M62 26 C70 22 90 22 98 26', role: 'soft' },
    {
      d: 'M58 52 C46 54 38 60 36 72 C30 104 24 134 18 160 C28 168 40 158 52 166 C60 172 68 166 74 164 M102 52 C114 54 122 60 124 72 C130 104 136 134 142 160 C132 168 120 158 108 166 C100 172 92 166 86 164',
    },
    { d: 'M74 164 C72 128 74 92 78 58 M86 164 C88 128 86 92 82 58' },
    {
      d: 'M74 164 C66 130 66 94 72 60 M86 164 C94 130 94 94 88 60',
      role: 'soft',
    },
    {
      d: 'M68 80 l6 -4 M67 96 l7 -5 M67 112 l7 -5 M67 128 l7 -5 M68 144 l6 -4 M86 76 l5 -3 M87 92 l6 -4 M87 108 l6 -4 M87 124 l6 -4 M87 140 l6 -4 M88 156 l5 -3',
      role: 'ambient',
    },
    {
      d: 'M44 72 C40 100 36 130 34 158 M116 72 C120 100 124 130 126 158',
      role: 'soft',
    },
    {
      d: 'M74 46 L86 46 L84 56 L76 56 Z M84 56 C92 66 98 78 96 92 C92 84 88 76 82 70 M78 56 C78 68 82 80 80 94 C78 86 76 80 74 76',
      role: 'accent',
    },
    shadow(80, 180, 64),
  ],

  // His earphones set down in three quarters: the band arching over, the
  // near cup with its depth hatched, the far cup turned away, and the horn
  // standing up off each cup. He wears them on Broc Coli Island at 787. No
  // goggles, no bolt: his lightning comes later.
  'vinsmoke-niji': [
    { d: 'M56 112 C52 70 72 44 100 46 C120 48 132 66 128 96' },
    { d: 'M66 108 C64 76 78 56 100 56 C114 58 122 70 120 92', role: 'soft' },
    { d: ellipse(50, 128, 18, 26) },
    { d: 'M50 102 C62 102 70 114 70 128 C70 142 62 154 50 154' },
    {
      d: 'M58 108 l6 -3 M62 118 l7 -4 M64 130 l7 -4 M62 142 l6 -4',
      role: 'ambient',
    },
    { d: 'M38 112 C34 122 34 136 40 146', role: 'soft' },
    {
      d: 'M120 96 C124 88 136 88 138 98 C140 112 134 124 126 124 C120 124 116 112 120 96 Z',
    },
    { d: 'M128 104 l8 -4 M128 114 l8 -4', role: 'ambient' },
    { d: 'M42 106 L32 46 L50 103', role: 'accent' },
    { d: 'M126 92 L130 50 L134 90', role: 'accent' },
    shadow(88, 168, 52),
  ],

  // A hand winch on its plank, in three quarters: the drum between two
  // frames with the cable wound on and its free end hanging off, the crank
  // on the near side, the underside hatched. It is an emblem of the epithet
  // the caption gives him when he is named at 784, Winch Green, not
  // something he carries.
  'vinsmoke-yonji': [
    { d: 'M14 150 L40 132 H150 L124 150 Z' },
    { d: 'M14 150 V158 H124 V150 M124 158 L150 140 V132' },
    {
      d: 'M54 116 L42 146 M66 116 L78 146 M112 114 L104 138 M120 112 L130 134',
    },
    { d: ellipse(60, 92, 10, 24) },
    { d: 'M60 68 H116 M60 116 H116' },
    {
      d: 'M116 68 C124 68 128 80 128 92 C128 104 124 116 116 116',
      role: 'soft',
    },
    {
      d: 'M68 69 L76 115 M78 69 L86 115 M88 69 L96 115 M98 69 L106 115 M108 69 L114 104',
      role: 'accent',
    },
    { d: 'M72 114 l6 -10 M90 114 l6 -10 M108 114 l6 -10', role: 'ambient' },
    { d: 'M60 92 L36 74 V58 M31 58 h10' },
    { d: 'M114 104 C120 124 128 128 140 122', role: 'accent' },
    shadow(82, 174, 66),
  ],

  // The fur he wears as a scarf, draped over the shoulders of the dark
  // cloak he arrives at the chateau in at 825: its lower edge hangs in long
  // tufts, the opening at the neck is a dark hatched slit, and the cloak
  // below is hatched to its ragged hem. No trident: he first draws it at
  // 832.
  'charlotte-katakuri': [
    {
      d: 'M34 104 C28 128 20 150 12 172 C26 166 36 176 50 168 C62 176 72 166 82 174 C94 166 104 176 114 168 C126 176 138 166 150 172 C142 150 134 128 128 104',
    },
    {
      d: 'M54 116 C50 136 46 154 44 170 M82 124 V172 M110 116 C114 136 118 154 120 170',
      role: 'soft',
    },
    {
      d: 'M30 132 l10 -8 M24 156 l14 -12 M58 140 l12 -10 M56 160 l16 -14 M88 140 l12 -10 M88 160 l16 -14 M116 132 l10 -8 M120 156 l12 -10',
      role: 'ambient',
    },
    {
      d: 'M44 62 C30 66 22 78 20 92 C26 98 30 104 28 112 C36 106 40 102 44 104 C46 110 46 116 42 122 C52 116 58 112 62 112 C64 118 64 124 62 130 C70 124 76 118 82 118 C86 124 88 128 90 134 C94 126 98 120 104 118 C106 122 108 126 110 130 C112 122 116 116 122 112 C124 116 128 120 132 122 C132 114 134 108 138 104 C140 106 142 108 144 110 C142 104 142 98 144 92 C142 78 134 66 120 62 C104 56 60 56 44 62 Z',
      role: 'accent',
    },
    { d: 'M52 62 C66 68 98 68 112 62', role: 'soft' },
    {
      d: 'M60 62 l4 3 M70 60 l6 5 M82 60 l6 5 M94 60 l6 4 M104 61 l4 3',
      role: 'ambient',
    },
    {
      d: 'M36 92 C40 98 40 104 38 110 M60 100 C64 106 64 112 60 120 M104 100 C100 106 100 112 104 120 M128 92 C124 98 124 104 126 110',
      role: 'soft',
    },
    shadow(81, 186, 66),
  ],

  // A hospital bed with a packed lunch left on the sheet.
  'vinsmoke-sora': [
    { d: 'M24 150 H136 V160 H24 Z' },
    { d: 'M32 160 V176 M128 160 V176' },
    { d: 'M24 150 V76 H40 V150' },
    { d: 'M24 86 H40 M24 104 H40 M24 122 H40 M24 138 H40', role: 'soft' },
    { d: 'M30 150 V128 H130 V150' },
    { d: 'M30 138 q50 -10 100 0', role: 'soft' },
    { d: 'M38 128 q-4 -14 10 -14 h22 q12 0 8 14' },
    { d: 'M84 110 h34 v18 h-34 Z', role: 'accent' },
    { d: 'M84 119 h34 M96 110 v18', role: 'accent' },
    shadow(80, 184, 56),
  ],

  // Her baby son's things: his onesie laid out flat, the little fedora he
  // wears like his father's set beside it, and his pacifier shaped like a
  // cigar. She stands with him on the cliff at 795.
  'charlotte-chiffon': [
    {
      d: 'M25.6 70 L8 79.6 L14.4 94 L25.6 89.2 V122.8 C25.6 130.8 33.6 135.6 43.2 137.2 H59.2 C68.8 135.6 76.8 130.8 76.8 122.8 V89.2 L88 94 L94.4 79.6 L76.8 70 C70.4 76.4 32 76.4 25.6 70 Z',
    },
    { d: 'M43.2 137.2 V142 H59.2 V137.2', role: 'soft' },
    {
      d: 'M25.6 89.2 C24 84.4 24 79.6 25.6 74.8 M76.8 89.2 C78.4 84.4 78.4 79.6 76.8 74.8',
      role: 'soft',
    },
    {
      d: 'M35.2 98.8 C36.8 110 35.2 119.6 38.4 129.2 M67.2 100.4 C65.6 111.6 68.8 121.2 64 130.8',
      role: 'soft',
    },
    { d: 'M30.4 71.6 C33.6 84.4 68.8 84.4 72 71.6', role: 'soft' },
    { d: ellipse(122, 132, 28, 7) },
    { d: 'M104 130 C102 110 108 100 122 102 C136 100 142 110 140 130' },
    { d: 'M114 104 C118 110 128 110 132 104', role: 'soft' },
    { d: 'M105 122 C114 126 130 126 139 122', role: 'soft' },
    { d: 'M132 110 l6 -3 M134 118 l6 -3', role: 'ambient' },
    { d: ellipse(58, 166, 8, 14), role: 'accent' },
    { d: 'M64 160 L80 156 a5 5 0 0 1 2 10 L65 172', role: 'accent' },
    { d: 'M51 158 C40 156 38 176 51 174', role: 'soft' },
    { d: 'M70 158 V169', role: 'soft' },
    shadow(80, 186, 66),
  ],

  // A cloth wrung from both ends, its juice running into a stemmed glass:
  // she wrings a subordinate dry like a cloth and drinks what comes out,
  // at 812.
  'charlotte-smoothie': [
    {
      d: 'M30 36 C50 28 70 50 90 40 C108 32 122 44 132 38 M30 52 C50 60 70 40 90 50 C108 58 122 48 132 54',
    },
    {
      d: 'M48 34 L56 54 M68 42 L76 52 M88 42 L96 54 M106 38 L114 52',
      role: 'soft',
    },
    {
      d: 'M30 36 C22 30 14 34 12 28 M30 52 C22 58 14 56 10 62 M30 36 V52',
      role: 'soft',
    },
    {
      d: 'M132 38 C140 32 148 36 150 30 M132 54 C140 60 148 58 152 64 M132 38 V54',
      role: 'soft',
    },
    { d: 'M80 56 V100 M86 70 v6', role: 'accent' },
    { d: ellipse(80, 94, 30, 7) },
    { d: 'M50 94 C50 126 64 138 80 138 C96 138 110 126 110 94' },
    { d: 'M54 108 C66 114 94 114 106 108', role: 'accent' },
    { d: 'M98 116 l6 -4 M96 126 l6 -6', role: 'ambient' },
    { d: 'M80 138 V164' },
    { d: ellipse(80, 166, 20, 5) },
    shadow(80, 182, 34),
  ],

  // His orange cape from the front: the tall collar standing round the
  // neck and flaring at the top, the front edges with the inside hatched,
  // and the big yellow bow it ties with at the throat. He wears it to the
  // chateau at 827. Nothing of his heat, which chapter readers meet later.
  'charlotte-oven': [
    {
      d: 'M40 32 C56 24 104 24 120 32 C116 44 112 56 112 64 M40 32 C44 44 48 56 48 64',
    },
    { d: 'M40 32 C56 40 104 40 120 32', role: 'soft' },
    {
      d: 'M48 64 L62 60 M112 64 L98 60 M62 60 C58 52 56 44 56 38 M98 60 C102 52 104 44 104 38',
      role: 'soft',
    },
    { d: 'M104 44 l8 -5 M104 54 l8 -5', role: 'ambient' },
    {
      d: 'M48 64 C36 68 30 78 28 90 C24 116 20 140 14 164 C28 170 40 162 52 168 C60 172 66 166 70 162 M112 64 C124 68 130 78 132 90 C136 116 140 140 146 164 C132 170 120 162 108 168 C100 172 94 166 90 162',
    },
    { d: 'M70 162 C68 128 68 96 72 64 M90 162 C92 128 92 96 88 64' },
    {
      d: 'M42 84 C38 110 34 136 30 160 M118 84 C122 110 126 136 130 160',
      role: 'soft',
    },
    {
      d: 'M72 80 l6 -4 M72 96 l8 -6 M72 112 l8 -6 M72 128 l8 -6 M72 144 l8 -6',
      role: 'ambient',
    },
    {
      d: 'M76 62 H84 V70 H76 Z M76 64 C64 56 54 62 58 70 C62 76 70 72 76 68 M84 64 C94 58 104 62 102 70 C100 78 92 74 84 68 M78 70 C74 84 70 94 64 100 M82 70 C88 82 94 90 102 94',
      role: 'accent',
    },
    shadow(80, 182, 66),
  ],

  // A genie's lamp in three quarters, the one worked on his belt: the
  // squat bowl with its lid and foot, hatched underneath, the spout and the
  // handle, and the smoke his genie comes out of rising off the spout. The
  // genie forces the chateau gate at 826, and the manga shows it at 864.
  'charlotte-daifuku': [
    {
      d: 'M30 128 C30 112 50 104 74 104 C98 104 118 112 118 128 C118 144 98 152 74 152 C50 152 30 144 30 128 Z',
    },
    { d: ellipse(74, 108, 22, 6) },
    { d: 'M62 102 C62 94 86 94 86 102 M74 94 V88 M70 88 h8', role: 'soft' },
    { d: 'M34 136 C50 144 98 144 114 136', role: 'soft' },
    {
      d: 'M44 146 l6 -6 M58 150 l8 -8 M74 152 l8 -8 M90 150 l8 -8 M104 146 l6 -6',
      role: 'ambient',
    },
    { d: 'M60 152 L56 162 H92 L88 152' },
    { d: 'M116 124 C128 120 136 112 148 98 L152 102 C142 118 132 132 116 136' },
    { d: 'M30 122 C14 118 10 136 22 142 C26 144 30 142 32 138', role: 'soft' },
    {
      d: 'M148 98 C140 86 150 76 142 64 C134 52 144 40 132 32 C122 26 110 30 112 40 C114 46 122 46 124 40 M152 102 C160 88 158 76 156 64 C154 50 160 38 152 28 C146 20 134 18 126 22',
      role: 'accent',
    },
    shadow(76, 172, 52),
  ],

  // An open book hovering over a closed one, both off the ground: the open
  // one fanned in three quarters with lines on its pages, the closed one
  // floating under it as a foothold, its spine hatched. He stands on flying
  // books and pulls Luffy into one at 811.
  'charlotte-mont-dor': [
    {
      d: 'M80 70 C64 60 40 58 18 64 L26 108 C46 102 66 104 80 114 C94 104 114 102 134 108 L142 64 C120 58 96 60 80 70 Z',
    },
    { d: 'M80 70 V114' },
    {
      d: 'M80 70 C66 62 46 60 24 64 M80 70 C94 62 114 60 136 64',
      role: 'accent',
    },
    {
      d: 'M34 74 C46 72 58 74 70 80 M34 84 C46 82 58 84 70 90 M90 80 C102 74 114 72 126 74 M90 90 C102 84 114 82 126 84',
      role: 'soft',
    },
    {
      d: 'M26 108 L24 114 C46 108 66 110 80 120 C94 110 114 108 136 114 L134 108',
      role: 'soft',
    },
    { d: 'M30 140 L50 128 H130 L110 140 Z' },
    { d: 'M30 140 V152 H110 V140 M110 152 L130 140 V128' },
    { d: 'M34 146 H106', role: 'soft' },
    { d: 'M114 144 l12 -8 M116 150 l10 -7', role: 'ambient' },
    shadow(80, 182, 50),
  ],

  // His very large hat, the brim seen from a little above, the soft crown
  // hatched on the far side and the big feather sweeping up and back from
  // the band; his stopwatch lies beside it on its chain. He wears both over
  // the wedding cake at 827.
  'streusen': [
    { d: ellipse(70, 120, 60, 15) },
    { d: 'M36 116 C32 84 42 60 68 58 C94 60 104 84 100 116' },
    { d: 'M36 104 C50 112 86 112 100 104', role: 'soft' },
    { d: 'M14 126 C30 138 110 138 126 126', role: 'soft' },
    { d: 'M90 72 l6 -3 M94 84 l7 -4 M96 96 l6 -4', role: 'ambient' },
    {
      d: 'M98 106 C112 92 118 70 132 50 C140 38 148 30 156 28 C156 44 150 62 140 78 C130 94 116 104 100 110',
      role: 'accent',
    },
    {
      d: 'M108 98 C122 84 138 60 152 34 M118 92 l2 -10 M126 82 l3 -10 M134 70 l3 -10 M142 56 l2 -9',
      role: 'soft',
    },
    { d: ellipse(132, 152, 15, 8) },
    {
      d: 'M132 144 V139 M128 139 h8 M132 152 l6 -3 M132 152 v-5',
      role: 'soft',
    },
    { d: 'M128 139 C118 138 114 144 106 140', role: 'soft' },
    shadow(74, 164, 62),
  ],

  // Her portrait's frame, stood up in three quarters with its side
  // hatched, the glass cracked out from where it was struck and shards on
  // the floor. Big Mom holds the broken picture as she remembers her at
  // 836. The picture itself is not drawn.
  'carmel': [
    { d: 'M34 30 L118 42 V152 L34 160 Z' },
    { d: 'M44 42 L108 51 V143 L44 149 Z', role: 'soft' },
    { d: 'M118 42 L128 48 V148 L118 152' },
    {
      d: 'M120 58 l6 -3 M120 74 l6 -3 M120 90 l6 -3 M120 106 l6 -3 M120 122 l6 -3 M120 138 l6 -3',
      role: 'ambient',
    },
    {
      d: 'M34 30 l6 6 M118 42 l-6 4 M34 160 l6 -6 M118 152 l-6 -4',
      role: 'soft',
    },
    {
      d: 'M80 92 L62 60 M80 92 L102 66 M80 92 L106 112 M80 92 L90 144 M80 92 L50 128 M80 92 L46 84 M62 60 l-6 -6 M102 66 l6 -4 M50 128 l-4 8',
      role: 'accent',
    },
    { d: 'M70 74 L90 78 L96 98 L86 120 L64 112 L58 92 Z', role: 'accent' },
    { d: 'M60 176 l8 -6 l6 8 Z M98 178 l10 -4 l-2 8 Z', role: 'soft' },
    shadow(80, 172, 56),
  ],

  // The great studded club he strikes Charlos down with at 886, lying in
  // front, its head studded and hatched underneath, and the bubble helmet
  // every World Noble wears standing on its collar ring on the ground
  // behind it, a gleam on the glass.
  'donquixote-mjosgard': [
    { d: circle(56, 72, 34) },
    { d: 'M36 54 C42 46 52 42 62 42', role: 'soft' },
    { d: ellipse(56, 106, 22, 6) },
    { d: 'M34 106 V112 C40 118 72 118 78 112 V106', role: 'soft' },
    {
      d: 'M24 122 H88 M34 122 l-5 5 M46 122 l-5 5 M58 122 l-5 5 M70 122 l-5 5 M82 122 l-5 5',
      role: 'ambient',
    },
    {
      d: 'M4 146 H40 C56 142 72 134 96 134 C124 134 146 142 146 150 C146 158 124 166 96 166 C72 166 56 158 40 154 H4 Z',
      transform: MJOSGARD_CLUB_TILT,
    },
    {
      d: 'M4 146 V154 M14 146 V154',
      role: 'soft',
      transform: MJOSGARD_CLUB_TILT,
    },
    {
      d: 'M94 134 l3 -7 l3 7 M114 135 l4 -7 l2 8 M132 140 l6 -5 l-1 8 M94 166 l3 7 l3 -7 M114 165 l4 7 l2 -8 M132 160 l6 5 l-1 -8 M146 150 l8 0',
      role: 'accent',
      transform: MJOSGARD_CLUB_TILT,
    },
    {
      d: dots([
        [88, 144],
        [104, 148],
        [120, 146],
        [96, 156],
        [112, 158],
        [130, 152],
      ]),
      role: 'soft',
      transform: MJOSGARD_CLUB_TILT,
    },
    {
      d: 'M60 158 l6 -6 M74 162 l8 -8 M90 166 l8 -8 M106 166 l8 -8 M122 164 l8 -8',
      role: 'ambient',
      transform: MJOSGARD_CLUB_TILT,
    },
    shadow(80, 184, 66),
  ],

  // A round council table ringed with empty thrones, under a banner.
  'reverie': [
    { d: ellipse(80, 132, 54, 18) },
    { d: 'M26 132 v8 a54 18 0 0 0 108 0 v-8' },
    { d: 'M32 116 v-22 h14 v22 M114 116 v-22 h14 v22' },
    { d: 'M60 110 v-26 h14 v26 M86 110 v-26 h14 v26' },
    { d: 'M80 22 V44' },
    { d: 'M50 44 H110 V74 L80 64 L50 74 Z', role: 'accent' },
    shadow(80, 160, 52),
  ],

  // Her flag on its pole, the cloth turning over at the fly to show its
  // back, which is hatched, with no symbol drawn on it. She waves it to
  // rouse the townspeople at 880.
  'belo-betty': [
    { d: 'M38 30 V180 M44 30 V180' },
    { d: 'M38 30 C38 22 44 22 44 30 M41 23 V16', role: 'soft' },
    {
      d: 'M44 34 C64 26 84 40 104 34 C112 32 118 30 124 34 C120 50 122 66 128 80 C120 76 112 78 106 82 C86 88 64 74 44 82 Z',
    },
    {
      d: 'M44 34 C64 26 84 40 104 34 C100 50 100 66 106 82 C86 88 64 74 44 82',
      role: 'accent',
    },
    {
      d: 'M104 34 C112 32 118 30 124 34 C120 50 122 66 128 80 C120 76 112 78 106 82',
      role: 'soft',
    },
    {
      d: 'M108 44 l10 -6 M106 56 l12 -7 M106 68 l14 -8 M110 78 l12 -7',
      role: 'ambient',
    },
    { d: 'M62 31 C66 48 70 64 80 82 M84 38 C86 50 90 62 96 72', role: 'soft' },
    shadow(41, 184, 26),
  ],

  // The paved street pushed up off the ground and curling over like
  // dough, its cobbles following the curl, the turned underside hatched and
  // loose cobbles flung off it. She moves the ground like this against the
  // Peachbeard Pirates at 880.
  'morley': [
    {
      d: 'M-4 150 H30 C44 150 54 138 60 118 C68 90 84 60 112 48 C134 40 152 50 152 66 C152 80 140 86 130 80',
    },
    {
      d: 'M130 80 C138 72 136 62 126 62 C112 62 104 78 104 96 C104 118 112 136 124 150 H164',
    },
    { d: 'M60 118 C68 90 84 60 112 48 C134 40 152 50 152 66', role: 'accent' },
    {
      d: 'M68 122 C76 96 90 72 112 60 C126 54 138 56 142 64 M78 134 C86 110 98 88 114 76 M10 158 H40 C54 158 66 150 74 138',
      role: 'soft',
    },
    {
      d: 'M66 104 l9 3 M74 86 l9 4 M86 70 l8 5 M100 58 l6 7 M118 50 l2 8 M136 50 l-2 8 M76 116 l9 3 M84 98 l9 4 M96 82 l8 5 M20 150 v8 M36 150 l-2 8 M52 146 l4 7',
      role: 'soft',
    },
    {
      d: 'M108 106 l10 -6 M110 120 l12 -7 M114 134 l12 -7 M120 146 l8 -5 M110 92 l8 -5',
      role: 'ambient',
    },
    {
      d: 'M30 132 h8 v6 h-8 Z M46 114 l7 -2 l2 6 l-7 2 Z M146 128 h8 v6 h-8 Z',
      role: 'soft',
    },
    { d: 'M134 150 l-2 8 M150 150 l-2 8', role: 'soft' },
  ],

  // A crow in flight, its near wing raised with the long feathers spread
  // and hatched, the far wing low behind it, and two more small in the
  // distance: the flock he takes shape out of at 880. No eye.
  'karasu': [
    {
      d: 'M40 104 L28 102 L40 98 C46 92 56 92 64 96 C80 102 96 110 110 120 L132 126 L126 132 L132 140 L110 134 C92 132 72 124 56 116 C48 112 42 110 40 104 Z',
    },
    {
      d: 'M66 100 C72 76 84 54 104 36 L106 46 L114 34 L114 46 L124 38 L120 52 L130 48 L122 62 C110 80 96 96 86 108',
      role: 'accent',
    },
    {
      d: 'M76 98 l10 -8 M84 88 l12 -10 M92 78 l12 -10 M100 68 l12 -10',
      role: 'ambient',
    },
    {
      d: 'M60 112 C54 126 50 140 52 152 L60 144 L62 156 L70 142 L76 150 L78 134 C80 126 82 122 84 120',
      role: 'soft',
    },
    { d: 'M96 116 l12 4 M110 124 l14 4', role: 'soft' },
    {
      d: 'M118 66 L128 58 L134 64 L138 54 L144 52 L142 62 L150 66 M132 64 C136 68 140 68 144 66',
      role: 'soft',
    },
    {
      d: 'M14 46 L22 38 L28 44 L30 34 L36 32 L36 42 L44 46 M26 44 C30 48 34 48 38 46',
      role: 'soft',
    },
  ],

  // His Cool Shooter, side on and turned a little: the tank end hatched
  // underneath, two grips, the hose that feeds it from his pack, and the cold
  // it fires bursting from the muzzle. He names it and freezes the Peachbeard
  // Pirates' guns with it at 880.
  'lindbergh': [
    { d: 'M20 114 H58 M20 142 H58 M20 114 a6 14 0 0 0 0 28' },
    { d: 'M58 114 a6 14 0 0 1 0 28', role: 'soft' },
    { d: 'M62 120 H120 M62 136 H120' },
    { d: 'M78 118 h6 v20 h-6 Z M102 118 h6 v20 h-6 Z', role: 'soft' },
    { d: 'M120 120 L128 114 V142 L120 136' },
    { d: 'M128 114 a4 14 0 0 1 0 28', role: 'soft' },
    { d: 'M36 142 L32 166 H44 L48 142 M90 136 V158 H98 V136' },
    { d: 'M14 128 C4 130 2 146 10 154 C18 162 12 172 2 176' },
    {
      d: 'M26 142 l5 -7 M36 142 l5 -7 M46 142 l5 -7 M66 136 l4 -6 M114 136 l4 -6',
      role: 'ambient',
    },
    { d: 'M134 120 L156 106 M136 128 H158 M134 136 L156 150', role: 'accent' },
    {
      d: 'M148 88 v12 M142 94 h12 M144 90 l8 8 M152 90 l-8 8 M146 158 v12 M140 164 h12 M142 160 l8 8 M150 160 l-8 8',
      role: 'accent',
    },
    shadow(80, 178, 60),
  ],

  // The gold crown he wears as king of Goa, in three quarters: tall points
  // with a diamond set in each, the far points showing between them and the
  // band's turning side hatched. He wears it on the way to the Reverie at 883.
  'sterry': [
    { d: 'M28 128 V142 A52 12 0 0 0 132 142 V128' },
    { d: 'M28 128 A52 12 0 0 1 132 128', role: 'soft' },
    { d: 'M28 128 A52 12 0 0 0 132 128' },
    {
      d: 'M32 133 V72 L38 80 L44 70 L50 80 L56 72 V139 M66 140 V58 L72 66 L80 54 L88 66 L94 58 V140 M104 139 V72 L110 80 L116 70 L122 80 L128 72 V133',
      role: 'accent',
    },
    {
      d: 'M58 116 V88 L62 92 L66 86 V117 M94 117 V86 L98 92 L102 88 V116',
      role: 'soft',
    },
    {
      d: `${polygon(44, 104, 6, 4)} ${polygon(80, 94, 7, 4)} ${polygon(116, 104, 6, 4)}`,
      role: 'soft',
    },
    { d: 'M112 148 l8 -6 M122 144 l6 -5', role: 'ambient' },
    shadow(80, 168, 56),
  ],

  // The Empty Throne at the top of Pangaea Castle, in three quarters, its tall
  // back hatched where it turns away, on its stepped platform among the swords
  // of the founding kings planted round it. No emblem on it. The figure sits
  // on it and the Five Elders kneel at 889.
  'im': [
    { d: 'M14 170 H146 V182 H14 Z M14 170 L26 162 H134 L146 170' },
    { d: 'M30 162 V154 H130 V162 M30 154 L40 148 H120 L130 154', role: 'soft' },
    {
      d: 'M56 124 V60 C56 42 66 30 80 14 C94 30 104 42 104 60 V124',
      role: 'accent',
    },
    { d: 'M104 124 L110 120 V62 C110 46 100 32 86 20', role: 'soft' },
    {
      d: 'M104 66 l6 -4 M104 80 l6 -4 M104 94 l6 -4 M104 108 l6 -4',
      role: 'ambient',
    },
    {
      d: 'M64 118 V64 C64 52 72 42 80 36 C88 42 96 52 96 64 V118',
      role: 'soft',
    },
    { d: 'M48 136 H112 L116 130 H54 Z M48 136 V148 M112 136 V148' },
    {
      d: 'M48 136 V116 C48 108 56 108 58 114 M112 136 V116 C112 108 104 108 102 114',
    },
    {
      d: 'M24 166 L18 134 L22 132 L28 165 M14 136 L26 130 M20 132 C18 126 18 122 16 118 M36 162 L46 128 L50 130 L40 163 M42 124 L54 129 M50 126 L54 116',
    },
    {
      d: 'M136 166 L142 134 L138 132 L132 165 M146 136 L134 130 M140 132 C142 126 142 122 144 118 M124 162 L114 128 L110 130 L120 163 M118 124 L106 129 M110 126 L106 116',
    },
    {
      d: 'M20 182 l6 -10 M40 182 l6 -10 M60 182 l6 -10 M80 182 l6 -10 M100 182 l6 -10 M120 182 l6 -10',
      role: 'ambient',
    },
    shadow(80, 192, 70),
  ],

  // A bull's horns on their boss, in three quarters, the near horn ridged at
  // the base and the far one hatched: the emblem of the name he is captioned
  // with at 882, Ryokugyu, the Green Bull. His features stay hidden, so
  // nothing of him is drawn.
  'ryokugyu': [
    {
      d: 'M62 146 C40 144 18 132 16 108 C14 88 22 70 34 52 C32 72 32 92 40 106 C48 120 58 126 66 132',
      role: 'accent',
    },
    {
      d: 'M98 134 C114 132 130 122 134 104 C136 90 132 76 124 64 C126 80 124 96 118 106 C112 116 104 122 96 124',
    },
    {
      d: 'M60 140 C60 130 70 124 82 124 C94 124 102 128 102 136 C102 146 92 152 80 152 C68 152 60 148 60 140 Z',
    },
    {
      d: 'M48 140 l6 -10 M36 134 l8 -8 M26 122 l10 -5 M20 106 l12 -2',
      role: 'soft',
    },
    { d: 'M112 126 l4 -6 M120 120 l4 -7 M126 112 l3 -7', role: 'ambient' },
    {
      d: 'M66 134 C72 130 90 130 98 134 M74 128 l2 6 M84 127 l1 6 M92 128 l0 6',
      role: 'soft',
    },
    { d: 'M88 150 l6 -6 M96 148 l4 -5', role: 'ambient' },
    shadow(80, 166, 52),
  ],
  // A sheep's curled horn in three quarters, ridged, its underside hatched, as
  // his hands become at 739, above the big sword he carries on his back.
  'sheepshead': [
    {
      d: 'M34 70 C52 40 100 34 122 60 C140 82 134 120 106 130 C82 138 64 120 70 100 C74 86 90 82 98 92 C104 100 98 110 90 108',
      role: 'accent',
    },
    {
      d: 'M48 82 C64 58 98 54 112 72 C124 88 120 112 102 118 C86 122 76 110 80 100 C84 94 92 96 90 108',
    },
    { d: 'M34 70 C36 80 42 84 48 82 M34 70 C40 66 46 74 48 82', role: 'soft' },
    {
      d: 'M58 50 l3 15 M80 41 l-1 16 M104 46 l-6 14 M126 68 l-12 8 M132 96 l-13 1 M120 122 l-9 -9',
      role: 'soft',
    },
    { d: 'M92 128 l3 -7 M100 128 l4 -8 M108 126 l4 -8', role: 'ambient' },
    { d: 'M30 154 H118 L134 160 L118 166 H30 Z' },
    { d: 'M34 160 H124', role: 'soft' },
    { d: 'M30 146 V174' },
    { d: 'M12 156 H30 V164 H12 Z M16 156 l4 8 M22 156 l4 8', role: 'soft' },
    { d: circle(8, 160, 4) },
    shadow(76, 184, 64),
  ],

  // His naginata, a blade of Whitebeard's kind with a spur on its back,
  // planted in the rubble of a town he has flattened, the broken walls
  // hatched. Shown at 751.
  'edward-weevil': [
    { d: 'M70 164 L90 56 M76 165 L96 57' },
    { d: 'M86 56 L102 59 L100 68 L84 65 Z' },
    {
      d: 'M88 56 C78 38 80 18 92 4 C100 12 106 20 106 28 L114 26 L108 36 C106 44 102 52 100 58',
      role: 'accent',
    },
    { d: 'M98 16 q4 3 2 7 M100 28 q4 3 2 7 M100 40 q4 3 2 7', role: 'ambient' },
    { d: 'M92 54 C86 40 86 24 92 10', role: 'soft' },
    { d: 'M79 120 l8 2 M77 128 l8 2', role: 'soft' },
    {
      d: 'M12 172 V146 L20 138 L24 148 L32 142 V172 M120 172 V150 L128 142 L132 152 L142 144 V172',
    },
    { d: 'M44 172 L52 160 L62 164 L70 154 L84 160 L94 156 L104 172' },
    {
      d: 'M16 168 l6 -8 M24 168 l6 -8 M124 168 l6 -8 M132 168 l6 -8 M84 170 l5 -8 M92 170 l5 -8',
      role: 'ambient',
    },
    { d: 'M38 166 l6 -4 l4 4 Z M108 168 l5 -5 l5 3 Z', role: 'soft' },
    { d: 'M2 172 H158', role: 'ambient', dashed: true },
    shadow(80, 184, 64),
  ],

  // An elephant's leg rising out of the sea into the fog, its toenails at the waterline.
  'zou': [
    {
      d: 'M42 154 C52 126 54 90 46 58 C42 42 44 28 48 14 M118 154 C108 126 106 90 114 58 C118 42 116 28 112 14',
      role: 'accent',
    },
    {
      d: 'M52 154 q7 -10 14 0 M73 154 q7 -10 14 0 M94 154 q7 -10 14 0',
      role: 'accent',
    },
    {
      d: 'M56 128 q24 -6 48 0 M54 100 q26 -6 52 0 M50 72 q30 -6 60 0',
      role: 'soft',
    },
    { d: 'M60 114 q8 -3 14 0 M88 86 q8 -3 14 0', role: 'soft' },
    {
      d: 'M2 44 q20 -8 40 0 M122 38 q18 -8 36 0 M6 80 q16 -6 32 0 M124 88 q16 -6 32 0',
      role: 'ambient',
      dashed: true,
    },
    { d: 'M-4 18 q30 -10 60 0 t60 0 t60 0', role: 'ambient', dashed: true },
    ...SEA,
  ],

  // Her little green bowler with a flower on its band, beside the crook-
  // handled cane she leans on. She has both at 752.
  'bakkin': [
    {
      d: 'M40 128 C40 122 46 122 50 126 C60 134 88 134 98 126 C102 122 108 122 108 128 C108 138 92 144 74 144 C56 144 40 138 40 128 Z',
    },
    { d: 'M50 126 C48 98 58 84 74 84 C90 84 100 98 98 126' },
    {
      d: 'M50 114 C62 120 86 120 98 114 M50 120 C62 126 86 126 98 120',
      role: 'soft',
    },
    {
      d: 'M94 110 C89.2 102.2 98.8 102.2 94 110 M94 110 C99.9 103.1 102.8 112.1 94 110 M94 110 C102.4 113.5 94.7 119.1 94 110 M94 110 C93.3 119.1 85.6 113.5 94 110 M94 110 C85.2 112.1 88.1 103.1 94 110',
      role: 'accent',
    },
    {
      d: 'M84 88 l6 -3 M90 96 l6 -3 M58 132 l3 4 M90 132 l-3 5',
      role: 'ambient',
    },
    { d: 'M14 172 L122 154 M15 177 L123 159' },
    {
      d: 'M122 154 C134 150 142 142 138 134 C134 126 124 130 126 138 M123 159 C138 156 148 146 143 134 C138 122 120 126 121 138',
      role: 'soft',
    },
    { d: 'M14 172 L10 174 L15 177', role: 'soft' },
    shadow(74, 186, 58),
  ],

  // An elephant's trunk raised out of the sea, spraying water that falls back
  // as rain, with a fish tumbling down in it.
  'zunesha': [
    { d: 'M34 160 C34 116 56 80 94 64 C106 58 118 58 124 66' },
    { d: 'M58 160 C60 124 78 96 104 84 C112 80 120 80 124 74' },
    { d: 'M124 66 C130 68 130 74 124 74', role: 'soft' },
    {
      d: 'M44 132 l12 4 M52 110 l12 6 M66 90 l10 8 M84 76 l6 10',
      role: 'soft',
    },
    {
      d: 'M126 64 C130 32 148 22 156 42 M122 62 C114 30 92 20 80 36',
      role: 'accent',
    },
    {
      d: dots([
        [150, 60],
        [156, 78],
        [146, 96],
        [82, 52],
        [76, 70],
        [92, 44],
      ]),
      role: 'accent',
    },
    {
      d: 'M112 118 q14 -10 26 0 q-12 10 -26 0 z M138 118 l8 -6 v12 z',
      role: 'soft',
    },
    ...SEA,
  ],
  // His black musketeer's hat in three quarters, the brim turned up at one
  // side and the crown hatched, the curly plume as the accent. No rapier: he
  // draws it only in chapter 809.
  'shishilian': [
    {
      d: 'M8 120 C4 104 20 94 34 102 C50 112 104 114 128 108 C144 104 156 112 152 124 C146 138 116 146 80 146 C44 146 12 136 8 120 Z',
    },
    { d: 'M46 112 C44 86 58 70 80 70 C102 70 116 86 114 112' },
    { d: 'M46 102 C64 108 96 108 114 102', role: 'soft' },
    { d: 'M102 76 l8 -4 M108 88 l7 -4 M110 100 l5 -3', role: 'ambient' },
    {
      d: 'M14 124 C30 136 60 140 80 140 C110 140 138 134 148 124',
      role: 'soft',
    },
    {
      d: 'M54 104 C40 104 28 96 26 84 C20 78 24 68 32 68 C30 58 40 52 48 58 C50 48 62 44 68 52 C74 44 88 46 90 56 C98 52 108 56 108 64 C116 64 122 70 120 78',
      role: 'accent',
    },
    {
      d: 'M32 80 c3 -4 8 -1 6 3 M44 62 c3 -4 8 -1 6 3 M66 56 c3 -4 8 -1 6 3 M94 60 c3 -4 8 -1 6 3',
      role: 'soft',
    },
    shadow(80, 160, 64),
  ],

  // The three-barrelled gun in place of his right forearm, in three quarters:
  // the ribbed drum at the back, the bands, the underside hatched, the three
  // muzzles standing out at the front and the pull chain sagging to the
  // ground. Shown at 783.
  'gotti': [
    { d: ellipse(28, 104, 10, 30) },
    {
      d: `${ellipse(28, 104, 4, 14)} M28 74 V90 M28 118 V134 M19 92 l5 6 M37 92 l-5 6 M19 116 l5 -6 M37 116 l-5 -6`,
      role: 'soft',
    },
    { d: 'M28 80 H112 M28 128 H112 M112 80 a8 24 0 0 1 0 48' },
    {
      d: 'M58 80 a8 24 0 0 1 0 48 M66 80 a8 24 0 0 1 0 48 M92 80 a8 24 0 0 1 0 48',
      role: 'soft',
    },
    {
      d: 'M118 86 H136 M118 98 H136 M118 110 H136 M118 122 H136 M118 102 H134',
      role: 'accent',
    },
    {
      d: `${ellipse(136, 92, 2.5, 6)} ${ellipse(136, 116, 2.5, 6)}`,
      role: 'accent',
    },
    {
      d: 'M38 128 l6 -7 M50 128 l6 -7 M76 128 l6 -7 M88 128 l6 -7 M104 128 l6 -7',
      role: 'ambient',
    },
    {
      d: `M48 128 C46 150 54 166 72 172 C90 178 108 174 116 168 ${ellipse(52, 146, 3, 6)} ${ellipse(64, 166, 6, 3)} ${ellipse(94, 174, 6, 3)}`,
      role: 'soft',
    },
    shadow(76, 184, 62),
  ],

  // A castle standing on the top layer of a cake, cream running down the edge below its gate.
  'whole-cake-island': [
    { d: 'M20 150 V132 H140 V150', role: 'ambient' },
    {
      d: 'M20 132 q6 10 12 0 q6 12 12 0 q6 8 12 0 q6 12 12 0 q6 10 12 0 q6 12 12 0 q6 8 12 0 q6 12 12 0 q6 10 12 0 q6 12 12 0',
      role: 'soft',
    },
    { d: 'M52 132 V78 H108 V132' },
    {
      d: 'M52 78 v-6 h8 v6 M68 78 v-6 h8 v6 M84 78 v-6 h8 v6 M100 78 v-6 h8 v6',
      role: 'soft',
    },
    { d: 'M70 132 V110 a10 10 0 0 1 20 0 V132', role: 'accent' },
    { d: 'M30 132 V70 H48 V132 M112 132 V70 H130 V132', role: 'accent' },
    { d: 'M26 70 L39 40 L52 70 M108 70 L121 40 L134 70', role: 'accent' },
    { d: 'M72 72 V46 H88 V72 M68 46 L80 20 L92 46', role: 'accent' },
    {
      d: `${circle(39, 88, 3)} ${circle(121, 88, 3)} ${circle(80, 56, 3)}`,
      role: 'soft',
    },
    shadow(80, 170, 64),
  ],

  // A house whose roof is a slab of chocolate scored into tiles, a smaller one beside it.
  'cacao-island': [
    { d: 'M34 150 V104 H112 V150' },
    { d: 'M24 104 L44 64 H102 L122 104 Z', role: 'accent' },
    { d: 'M29 94 H117 M34 84 H112 M39 74 H107', role: 'accent' },
    { d: 'M56 64 L50 104 M73 64 V104 M90 64 L96 104', role: 'soft' },
    { d: 'M64 150 V124 H82 V150', role: 'soft' },
    { d: 'M44 116 h12 v10 h-12z M92 116 h12 v10 h-12z', role: 'soft' },
    {
      d: 'M116 150 V122 H146 V150 M112 122 L120 108 H142 L150 122 Z',
      role: 'soft',
    },
    { d: 'M116 115 H146 M131 108 V122', role: 'ambient' },
    { d: 'M-4 150 H164', role: 'ambient' },
    { d: wave(168), role: 'ambient', dashed: true },
  ],

  // The hole in a mound of earth he had buried himself in up to the neck,
  // empty once he is pulled out of it at 797, with clods thrown about and
  // a crooked tree of the Seducing Woods behind.
  'pound': [
    { d: 'M0 158 H160', role: 'ambient', dashed: true },
    { d: 'M10 158 C28 126 54 112 80 112 C106 112 132 126 150 158' },
    { d: ellipse(80, 122, 28, 9), role: 'accent' },
    {
      d: 'M60 118 l4 7 M69 115 l4 9 M79 114 l4 10 M89 115 l4 9 M98 118 l3 6',
      role: 'ambient',
    },
    { d: 'M54 128 C62 134 98 134 106 128', role: 'soft' },
    {
      d: 'M30 140 l4 -6 l8 2 l2 6 z M118 136 l6 -5 l7 3 l-1 6 z M46 152 l3 -5 l6 1 l1 4 z M124 152 l4 -4 l6 2 v3 z',
      role: 'soft',
    },
    {
      d: 'M116 116 C120 92 112 70 120 46 C124 34 118 22 110 14 M132 124 C134 100 130 76 136 54 C140 42 148 32 158 28',
    },
    {
      d: 'M122 70 C112 64 100 64 92 56 M134 60 C142 56 148 50 152 42',
      role: 'soft',
    },
    { d: 'M128 84 l-6 6 M130 98 l-6 6 M130 112 l-5 5', role: 'ambient' },
    shadow(80, 178, 58),
  ],

  // Her enormous hat in three quarters, flowers at its band and the brim's
  // turning edge hatched, over the long sword Shirauo laid out beneath it. She
  // marches with both at 809.
  'amande': [
    { d: ellipse(80, 102, 74, 15) },
    { d: 'M8 104 C20 118 140 118 152 104', role: 'soft' },
    { d: 'M64 98 C62 80 70 72 80 72 C90 72 98 80 96 98' },
    {
      d: 'M68 94 C65.3 89.6 70.7 89.6 68 94 M68 94 C71.4 90 73.1 95.2 68 94 M68 94 C72.8 96 68.4 99.2 68 94 M68 94 C67.6 99.2 63.2 96 68 94 M68 94 C62.9 95.2 64.6 90 68 94 M80 96 C77.3 91.6 82.7 91.6 80 96 M80 96 C83.4 92 85.1 97.2 80 96 M80 96 C84.8 98 80.4 101.2 80 96 M80 96 C79.6 101.2 75.2 98 80 96 M80 96 C74.9 97.2 76.6 92 80 96 M92 94 C89.3 89.6 94.7 89.6 92 94 M92 94 C95.4 90 97.1 95.2 92 94 M92 94 C96.8 96 92.4 99.2 92 94 M92 94 C91.6 99.2 87.2 96 92 94 M92 94 C86.9 95.2 88.6 90 92 94',
      role: 'accent',
    },
    { d: 'M126 112 l6 -6 M138 108 l6 -5 M114 115 l5 -5', role: 'ambient' },
    { d: 'M28 158 C70 150 112 142 152 134 M28 163 C70 155 112 147 152 134' },
    { d: ellipse(25, 160, 3, 8) },
    {
      d: 'M22 158 L4 162 M22 163 L5 167 M8 162 l2 5 M14 160 l2 5',
      role: 'soft',
    },
    shadow(80, 180, 66),
  ],
  // His beard, cream heaped round his chin and running down in strands to
  // drip off the hem, a small bow tie on it, the far side turning away. He
  // gives the alarm at 806.
  'charlotte-opera': [
    {
      d: 'M30 112 C20 94 30 74 46 76 C50 62 64 58 72 66 C70 76 74 84 80 84 C86 84 90 76 88 66 C96 58 110 62 114 76 C130 74 140 94 130 124 V150 a5 5 0 0 1 -10 0 V128 L106 130 V164 a5 5 0 0 1 -10 0 V132 L78 132 V156 a5 5 0 0 1 -10 0 V130 L56 128 V146 a5 5 0 0 1 -10 0 V126 C36 124 30 120 30 112 Z',
    },
    {
      d: 'M40 102 C44 110 42 118 46 126 M54 108 C58 116 56 122 60 130',
      role: 'soft',
    },
    {
      d: 'M86 112 C90 118 86 124 90 132 M102 110 C104 116 100 122 104 130',
      role: 'soft',
    },
    { d: 'M114 78 C120 94 122 110 120 126', role: 'soft' },
    { d: 'M126 88 l6 -4 M126 100 l8 -5 M126 112 l8 -5', role: 'ambient' },
    { d: 'M101 175 c-4 6 -2 10 2 10 c4 0 6 -4 2 -10 l-2 -4 z', role: 'soft' },
    { d: 'M80 100 L64 92 L66 110 Z M80 100 L94 94 L92 108 Z', role: 'accent' },
    { d: 'M77 97 h6 v7 h-6 Z', role: 'accent' },
    shadow(80, 188, 50),
  ],

  // The footed parfait glass she wears on her head, in three quarters: fruit
  // slices round the rim, cream and a cherry on top, layers inside, the far
  // side hatched. She sits at the tea party with it at 831.
  'charlotte-compote': [
    { d: ellipse(80, 98, 44, 10) },
    { d: 'M36 98 C38 126 58 142 80 142 C102 142 122 126 124 98' },
    { d: 'M74 142 V162 M86 142 V162' },
    { d: ellipse(80, 166, 22, 5) },
    {
      d: 'M42 116 C60 124 100 124 118 116 M52 130 C66 136 94 136 108 130',
      role: 'soft',
    },
    { d: 'M110 120 l6 -6 M104 132 l6 -6 M116 106 l5 -5', role: 'ambient' },
    {
      d: 'M42 98 a11 11 0 0 1 22 0 M69 96 a11 11 0 0 1 22 0 M96 98 a11 11 0 0 1 22 0',
      role: 'accent',
    },
    {
      d: 'M53 98 l-6 -6 M53 98 V87 M53 98 l6 -6 M80 96 l-6 -6 M80 96 V85 M80 96 l6 -6 M107 98 l-6 -6 M107 98 V87 M107 98 l6 -6',
      role: 'soft',
    },
    { d: 'M58 86 C58 72 70 70 80 64 C90 70 102 72 102 86', role: 'soft' },
    { d: circle(80, 56, 6) },
    { d: 'M80 50 C80 44 84 40 90 38', role: 'soft' },
    shadow(80, 178, 40),
  ],

  // A bicorne hat with a tornado twisting up out of its crown.
  'charlotte-nusstorte': [
    {
      d: 'M14 106 C40 140 120 140 146 106 C120 118 104 96 80 96 C56 96 40 118 14 106 Z',
    },
    { d: 'M40 118 C62 126 98 126 120 118', role: 'soft' },
    { d: circle(80, 108, 5), role: 'accent' },
    {
      d: 'M40 22 C58 50 72 70 78 94 M124 22 C106 50 90 70 84 94',
      role: 'accent',
    },
    {
      d: 'M40 22 C62 32 102 32 124 22 M50 40 C68 48 96 48 114 40 M60 58 C72 64 90 64 102 58 M70 76 C76 80 86 80 92 76',
      role: 'soft',
    },
    shadow(80, 150, 58),
  ],

  // A long blowgun, a dart flying from its mouth and a bubble of gum.
  'charlotte-flampe': [
    { d: 'M18 150 L110 70 M25 157 L117 77 M18 150 L25 157 M110 70 L117 77' },
    { d: 'M34 136 l7 7', role: 'soft' },
    { d: 'M128 60 L150 40 M150 40 l-9 1 M150 40 l-1 9', role: 'accent' },
    { d: 'M120 70 l8 -7 M112 62 l8 -7', role: 'soft', dashed: true },
    { d: circle(48, 72, 18), role: 'accent' },
    { d: 'M38 66 q4 -6 11 -5', role: 'soft' },
    shadow(70, 178, 50),
  ],

  // A sheer wall rising out of the sea through the clouds, a palace of domes and spires along its top.
  'mary-geoise': [
    { d: 'M-4 70 H164', role: 'accent' },
    { d: 'M-4 150 H164', role: 'soft' },
    {
      d: 'M18 150 l4 -18 l-5 -16 l6 -20 l-3 -26 M62 150 l-4 -22 l6 -14 l-3 -18 M104 150 l5 -20 l-4 -22 l3 -12 M142 150 l-4 -16 l5 -24 l-3 -20 l2 -20',
      role: 'ambient',
    },
    {
      d: 'M-4 112 q14 -10 28 0 q14 -12 30 0 M92 104 q16 -12 32 0 q14 -10 28 0 q8 -6 16 0',
      role: 'ambient',
      dashed: true,
    },
    { d: 'M44 70 V50 H116 V70', role: 'accent' },
    { d: 'M64 50 a16 16 0 0 1 32 0', role: 'accent' },
    {
      d: 'M80 34 V24 M48 50 V36 l4 -8 l4 8 V50 M104 50 V36 l4 -8 l4 8 V50',
      role: 'accent',
    },
    { d: 'M24 70 V58 h12 V70 M124 70 V58 h12 V70', role: 'soft' },
    { d: 'M72 70 V62 h16 V70', role: 'soft' },
    ...SEA,
  ],
  // His double-bladed spear held across a standing crane, the mount he rides
  // through the Seducing Woods, drawn whole and without an eye. Both at 792.
  'randolph': [
    {
      d: 'M60 104 C70 88 112 88 122 104 C126 116 112 126 92 126 C78 126 64 120 60 104 Z',
    },
    { d: 'M62 108 C50 116 42 128 40 140 C50 132 58 128 68 122', role: 'soft' },
    {
      d: 'M76 102 C88 98 104 100 114 106 M80 112 C92 110 104 112 112 116',
      role: 'soft',
    },
    {
      d: 'M74 122 l4 -5 M84 125 l4 -6 M96 126 l4 -6 M108 122 l4 -5',
      role: 'ambient',
    },
    {
      d: 'M116 100 C124 84 112 68 116 50 C118 40 126 36 132 40 M122 106 C132 88 120 72 124 54 C126 46 132 44 136 48',
    },
    { d: 'M132 40 C136 36 142 38 140 44 L158 54 L138 49' },
    { d: 'M86 126 L84 174 M96 126 L100 174 M78 176 h12 M94 176 h12' },
    { d: 'M24 140 H136 M24 144 H136', transform: RANDOLPH_SPEAR_TILT },
    {
      d: 'M136 142 L144 134 L158 142 L144 150 Z M24 142 L16 134 L2 142 L16 150 Z',
      role: 'accent',
      transform: RANDOLPH_SPEAR_TILT,
    },
    {
      d: 'M128 138 v8 M32 138 v8',
      role: 'soft',
      transform: RANDOLPH_SPEAR_TILT,
    },
    shadow(80, 184, 60),
  ],

  // A heaped thundercloud, its dark base hatched, a lightning bolt striking
  // the ground below it through the rain. No face.
  'zeus': [
    {
      d: 'M24 100 C8 98 8 74 26 70 C22 50 46 38 60 52 C64 30 102 26 110 48 C124 38 148 50 142 72 C158 78 154 102 136 104 C130 116 108 118 98 110 C86 120 62 120 54 110 C42 116 26 112 24 100 Z',
    },
    { d: 'M28 96 C40 104 120 104 136 96', role: 'soft' },
    {
      d: 'M30 104 l6 -6 M42 108 l6 -7 M56 110 l6 -7 M70 110 l6 -7 M112 108 l6 -7 M124 104 l6 -6 M136 98 l6 -6',
      role: 'ambient',
    },
    { d: 'M90 114 L76 142 H92 L76 178 L112 132 H96 L106 114', role: 'accent' },
    { d: 'M36 128 v12 M50 136 v12 M120 128 v12 M134 136 v12', role: 'ambient' },
    { d: 'M20 180 H140', role: 'ambient', dashed: true },
    { d: 'M66 184 l-6 4 M84 184 l6 4', role: 'soft' },
  ],

  // A sun of compressed flame, its tongues licking round the rim and rays
  // beyond, the lower side hatched. No face.
  'prometheus': [
    { d: circle(80, 96, 30) },
    {
      d: 'M114 96 C125.1 98.3 128 109.9 121.9 123.3 C116.6 115 112 114.7 107.5 116 C111.9 121.7 107 130.8 95.7 137.1 C97.2 130.4 94.9 129.9 90.5 128.3 C92.5 142.3 81.7 150 65.9 148.1 C73 138.4 72.1 132.2 69.5 128.3 C64.9 135.6 54.1 134 44.2 124.9 C51.9 123.7 52.4 120.6 52.5 116 C41 121.5 31.1 113.6 28.1 98.6 C38.4 102.3 43.2 99.7 46 96 C39.8 94 38.7 84 44 72.5 C46.2 78.5 48 77.3 52.5 76 C41.5 65 45.7 51.8 60.1 43.7 C60.3 56.7 65.1 62.1 69.5 63.7 C69.1 55.7 78.6 51 91.7 52.6 C86.4 57.6 87.9 59.8 90.5 63.7 C95.8 54.4 107.5 55.5 118.2 65.3 C109 67.4 107.6 71.4 107.5 76 C114.3 73.6 121.4 81.1 123.9 93.8 C118.1 90.2 116.8 92.3 114 96 Z',
      role: 'accent',
    },
    { d: circle(80, 96, 20), role: 'soft' },
    {
      d: 'M94 110 l6 -6 M88 116 l8 -8 M100 100 l4 -4 M82 120 l6 -6',
      role: 'ambient',
    },
    {
      d: 'M80 34 V26 M28 70 l-8 -4 M132 70 l8 -4 M30 132 l-8 5 M130 132 l8 5',
      role: 'soft',
    },
    shadow(80, 186, 40),
  ],

  // The pink bicorne Big Mom wears, in three quarters: the trim along its
  // crest, the ruffled fastener on its side, the back panel showing past
  // the front. No skull on it, and no blade. She calls it by name at 816.
  'napoleon': [...BIG_MOM_BICORNE, shadow(80, 176, 62)],
  // A cigar laid across a stack of coins, a thread of smoke rising from it.
  'lu-feld': [
    { d: ellipse(80, 104, 40, 12) },
    { d: 'M40 104 V140 a40 12 0 0 0 80 0 V104' },
    { d: 'M40 116 a40 12 0 0 0 80 0 M40 128 a40 12 0 0 0 80 0', role: 'soft' },
    {
      d: 'M34 90 L116 74 c7 -1 9 9 2 10 L36 100 c-7 1 -9 -9 -2 -10 Z',
      role: 'accent',
    },
    { d: 'M100 77 l2 10', role: 'accent' },
    { d: 'M30 92 c-8 -10 6 -16 -2 -28 c-6 -8 4 -14 0 -22', role: 'soft' },
    shadow(80, 162, 48),
  ],

  // His fur cape, the fur edge running over both shoulders, one curl of fur
  // on the near shoulder; across it the longsword he draws on little Linlin
  // at 836.
  'jorul': [
    {
      d: 'M64 70 C50 72 38 80 34 94 C24 120 14 146 10 166 C28 168 44 176 60 168 C74 176 86 166 100 174 C116 166 130 176 150 166 C146 146 136 120 126 94 C122 80 110 72 96 70',
    },
    {
      d: 'M34 96 L30.4 88.8 L38 86 L36.8 78.8 L44 80 L44.4 72.2 L52 74 L53.9 66.9 L60 71 L63.3 64.5 L68 70 L71.3 63.5 L76 69 L80 63 L84 69 L88.7 63.5 L92 70 L96.7 64.5 L100 71 L106.1 66.9 L108 74 L115.6 72.2 L116 80 L123.2 78.8 L122 86 L129.6 88.8 L126 96',
      role: 'soft',
    },
    {
      d: 'M60 96 C54 120 48 144 44 168 M100 96 C108 120 112 144 116 172',
      role: 'soft',
    },
    { d: 'M40 92 C34 86 40 78 46 82 C50 86 46 92 42 88', role: 'soft' },
    {
      d: 'M124 110 l8 -6 M128 128 l12 -8 M134 146 l12 -8 M130 162 l14 -10',
      role: 'ambient',
    },
    { d: 'M48 144 L118 70 L128 64 L124 76 L54 150 Z' },
    { d: 'M51 147 L123 70', role: 'soft' },
    { d: 'M36 134 L62 160 M41 130 L67 156', role: 'accent' },
    { d: 'M46 152 L34 164 a4 4 0 0 0 6 6 L52 158', role: 'accent' },
    { d: circle(32, 171, 4) },
    shadow(80, 188, 68),
  ],

  // Her Marine coat worn as a cape, the hood let down at the collar, fringed
  // epaulettes, the empty sleeves with pink cuffs, the inside hatched. She
  // wears it at the Red Port at 887.
  'gion': [
    { d: 'M62 52 C64 38 96 38 98 52 C94 62 66 62 62 52 Z' },
    { d: 'M66 50 C72 44 88 44 94 50', role: 'soft' },
    {
      d: 'M62 52 C50 54 40 60 34 68 C28 102 24 142 20 178 C50 186 110 186 140 178 C136 142 132 102 126 68 C120 60 110 54 98 52',
    },
    {
      d: 'M30 66 C34 60 44 58 50 62 L48 72 M34 68 l-1 9 M38 68 v10 M42 68 l1 9 M110 62 C116 58 126 60 130 66 L132 72 M118 64 l-1 10 M122 64 v10 M126 66 l1 9',
      role: 'soft',
    },
    {
      d: 'M38 74 C32 104 30 124 30 140 H44 C44 120 44 98 48 76 M122 74 C128 104 130 124 130 140 H116 C116 120 116 98 112 76',
    },
    { d: 'M30 132 H44 V140 M130 132 H116 V140', role: 'accent' },
    {
      d: 'M68 60 C66 100 66 140 64 182 M92 60 C94 100 94 140 96 182',
      role: 'soft',
    },
    {
      d: 'M70 70 l20 -6 M70 82 l20 -6 M70 94 l20 -6 M126 150 l8 -6 M128 164 l8 -6',
      role: 'ambient',
    },
    shadow(80, 192, 64),
  ],

  // His fedora in three quarters, pinched at the crown, the checked band as
  // the accent and the crown's far side hatched. He wears it at the Red Port
  // at 887, with no pipe: the episode shows none.
  'tokikake': [
    {
      d: 'M46 134 C44 110 50 94 62 88 C70 96 90 96 98 88 C110 94 116 110 114 134',
    },
    {
      d: 'M68 92 C74 104 86 104 92 92 M56 100 C54 112 54 120 56 128 M104 100 C106 112 106 120 104 128',
      role: 'soft',
    },
    {
      d: 'M12 136 C10 128 24 128 40 132 C60 136 100 136 120 132 C136 128 150 128 148 136 C146 148 120 156 80 156 C40 156 14 148 12 136 Z',
    },
    { d: 'M16 142 C34 154 126 154 144 142', role: 'soft' },
    {
      d: 'M46 122 C64 128 96 128 114 122 M46 132 C64 138 96 138 114 132 M56 125 v9 M68 127 v9 M80 128 v9 M92 127 v9 M104 125 v9',
      role: 'accent',
    },
    { d: 'M46 127 C64 133 96 133 114 127', role: 'soft' },
    { d: 'M100 98 l7 -4 M104 110 l7 -4 M106 122 l6 -3', role: 'ambient' },
    shadow(80, 168, 64),
  ],
} satisfies Drawings
