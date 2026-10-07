import { circle, dots, ellipse, SEA, shadow, wave } from '~/lib/svg/primitives'

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
  // middle with its lower facet hatched, a crossguard and a collar under
  // it, the grip wrapped near the foot. He goes at Sanji with it at 793. No
  // crown, which he never wears, and no charge in the blade.
  'vinsmoke-judge': [
    { d: 'M-24 97 H96 M-24 103 H96 M-24 97 V103', transform: JUDGE_SPEAR_TILT },
    {
      d: 'M-8 97 l5 6 M0 97 l5 6 M8 97 l5 6 M16 97 l5 6',
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

  // The great ruff of ragged fur he wears as a scarf, its tufts flaring out
  // and down, on the dark cloak he arrives at the chateau in at 825: the
  // cloak hatched, its hem ragged. No trident: he first draws it at 832.
  'charlotte-katakuri': [
    {
      d: 'M34 104 C28 128 20 150 12 172 C26 166 36 176 50 168 C62 176 72 166 82 174 C94 166 104 176 114 168 C126 176 138 166 150 172 C142 150 134 128 128 104',
    },
    {
      d: 'M54 110 C50 132 46 152 44 170 M82 112 V172 M110 110 C114 132 118 152 120 170',
      role: 'soft',
    },
    {
      d: 'M30 132 l10 -8 M24 156 l14 -12 M58 132 l14 -12 M56 158 l16 -14 M88 132 l14 -12 M88 158 l16 -14 M116 132 l10 -8 M120 156 l12 -10',
      role: 'ambient',
    },
    {
      d: 'M48 66 L28 70 L38 78 L14 88 L34 92 L20 106 L42 102 L38 116 L56 104 L58 118 L70 106 L78 120 L84 106 L92 120 L98 106 L110 118 L112 104 L130 116 L126 102 L148 106 L134 92 L154 88 L130 78 L140 70 L118 66',
      role: 'accent',
    },
    {
      d: 'M48 66 C40 60 52 54 60 58 C66 52 76 54 80 58 C86 52 96 54 100 58 C106 52 118 56 118 66',
    },
    { d: ellipse(83, 70, 22, 5), role: 'soft' },
    { d: 'M68 71 l6 -4 M80 73 l8 -6 M94 72 l6 -4', role: 'ambient' },
    {
      d: 'M40 82 l10 4 M50 94 l8 2 M116 94 l-8 2 M126 82 l-10 4 M70 90 l2 8 M96 90 l-2 8',
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
  // every World Noble wears standing on its collar ring behind it, a
  // gleam on the glass.
  'donquixote-mjosgard': [
    { d: circle(56, 72, 34) },
    { d: 'M36 54 C42 46 52 42 62 42', role: 'soft' },
    { d: ellipse(56, 106, 22, 6) },
    { d: 'M34 106 V112 C40 118 72 118 78 112 V106', role: 'soft' },
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

  // A wrench and a pair of goggles with cat ears, on a gadget.
  'lindbergh': [
    { d: 'M30 112 H130 V162 H30 Z' },
    { d: 'M30 126 H130', role: 'soft' },
    { d: `${circle(50, 144, 8)} ${circle(72, 144, 8)}`, role: 'soft' },
    { d: 'M96 136 h22 v16 h-22z' },
    { d: circle(58, 88, 18) },
    { d: circle(102, 88, 18) },
    { d: 'M76 88 h8 M40 88 L22 80 M120 88 L138 80' },
    { d: 'M46 72 l-6 -18 l17 9 M114 72 l6 -18 l-17 9', role: 'accent' },
    { d: 'M24 38 L86 52 L84 60 L22 46 Z' },
    { d: 'M86 48 l12 -8 l9 11 l-11 8 l11 8 l-9 11 l-12 -8 Z' },
  ],

  // A small crown left on an oversized throne.
  'sterry': [
    { d: 'M40 146 V40 H120 V146' },
    { d: 'M40 40 q40 -16 80 0' },
    { d: 'M40 110 H22 V146 M120 110 H138 V146' },
    { d: 'M34 146 H126 V158 H34 Z' },
    { d: 'M40 158 V174 M120 158 V174' },
    { d: 'M52 130 V56 H108 V130', role: 'soft' },
    {
      d: 'M66 142 V124 L74 132 L80 118 L86 132 L94 124 V142 Z',
      role: 'accent',
    },
    { d: 'M66 138 H94', role: 'accent' },
    shadow(80, 182, 50),
  ],

  // An empty throne with weapons laid at its base.
  'im': [
    { d: 'M54 150 V44 H106 V150' },
    { d: 'M54 44 q26 -20 52 0' },
    { d: 'M54 118 H40 V150 M106 118 H120 V150' },
    { d: 'M46 150 H114 V160 H46 Z' },
    { d: 'M64 138 V56 H96 V138', role: 'soft' },
    { d: 'M26 174 L66 134 M134 174 L94 134', role: 'accent' },
    { d: 'M66 134 l-4 -13 l13 4z M94 134 l4 -13 l-13 4z', role: 'accent' },
    shadow(80, 188, 44),
  ],

  // A bull's horns above the clouds.
  'ryokugyu': [
    {
      d: 'M78 76 C56 78 36 68 28 48 C24 36 32 26 42 30 C56 36 62 58 78 62 Z',
      role: 'accent',
    },
    {
      d: 'M82 76 C104 78 124 68 132 48 C136 36 128 26 118 30 C104 36 98 58 82 62 Z',
      role: 'accent',
    },
    { d: 'M72 62 q8 -8 16 0 v18 q-8 8 -16 0 Z' },
    {
      d: 'M24 136 q8 -14 22 -6 q10 -12 24 -2 q12 -4 14 8 Z M86 156 q8 -12 20 -4 q10 -10 22 0 q10 -2 10 8 Z',
      role: 'soft',
    },
    { d: 'M20 172 H140', role: 'ambient', dashed: true },
  ],
  // A sheep's curled horn lying above a sword laid flat.
  'sheepshead': [
    {
      d: 'M36 64 C76 34 128 58 126 102 C124 136 84 144 70 122 C58 102 76 84 92 94 C102 100 98 114 88 114',
    },
    { d: 'M36 64 C46 74 52 80 58 96' },
    {
      d: 'M60 50 l4 12 M86 44 l-2 13 M112 56 l-9 9 M126 84 l-13 2 M118 122 l-10 -6',
      role: 'soft',
    },
    { d: 'M34 154 H122 L136 159 L122 164 H34 Z', role: 'accent' },
    { d: 'M34 144 V174', role: 'accent' },
    { d: 'M34 159 H16' },
    { d: circle(11, 159, 5) },
    shadow(80, 182, 60),
  ],

  // A naginata planted upright in the rubble of a flattened town.
  'edward-weevil': [
    { d: 'M88 48 L78 164' },
    { d: 'M86 48 C82 30 86 16 100 4 C102 20 100 34 94 50 Z', role: 'accent' },
    { d: 'M80 50 L98 52' },
    { d: 'M84 60 L94 61 M83 66 L93 67', role: 'soft' },
    { d: 'M18 172 L32 150 L46 160 L58 144 L72 158' },
    { d: 'M86 158 L100 146 L114 160 L128 148 L142 172' },
    {
      d: 'M30 184 h16 v-10 h-16 z M112 184 h18 v-10 h-18 z M60 180 l10 -8 l8 6',
      role: 'soft',
    },
    shadow(80, 188, 64),
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

  // A pair of round sunglasses resting on a stack of coins.
  'bakkin': [
    { d: 'M44 128 V150 a36 9 0 0 0 72 0 V128' },
    { d: ellipse(80, 128, 36, 9) },
    { d: 'M44 135 a36 9 0 0 0 72 0 M44 142 a36 9 0 0 0 72 0', role: 'soft' },
    { d: 'M118 168 a16 5 0 1 0 32 0 a16 5 0 1 0 -32 0', role: 'soft' },
    { d: `${circle(62, 106, 13)} ${circle(98, 106, 13)}`, role: 'accent' },
    { d: 'M75 104 q5 -6 10 0', role: 'accent' },
    { d: 'M49 102 L34 90 M111 102 L126 90' },
    { d: 'M56 101 l7 -4 M92 101 l7 -4', role: 'soft' },
    shadow(70, 170, 40),
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
  // A musketeer's broad hat with a long curling plume, above a rapier laid
  // across the table.
  'shishilian': [
    { d: 'M50 96 C50 66 110 66 110 96' },
    { d: ellipse(80, 98, 58, 12) },
    { d: 'M52 88 H108', role: 'soft' },
    {
      d: 'M104 84 C104 58 126 38 150 36 C146 58 128 76 104 84 Z',
      role: 'accent',
    },
    {
      d: 'M108 78 C118 64 130 52 144 42 M116 70 l-4 -8 M126 60 l-4 -8 M136 50 l-3 -7',
      role: 'soft',
    },
    { d: 'M36 150 L144 126' },
    { d: 'M40 140 C30 146 32 158 44 158', role: 'accent' },
    { d: circle(28, 154, 4) },
    shadow(84, 172, 52),
  ],

  // A three-barrelled gun where a forearm should be, its pull chain hanging
  // down to a ring.
  'gotti': [
    { d: 'M18 78 H42 V136 H18 Z' },
    {
      d: 'M42 84 H122 V96 H42 Z M42 101 H122 V113 H42 Z M42 118 H122 V130 H42 Z',
    },
    {
      d: `${circle(126, 90, 4)} ${circle(126, 107, 4)} ${circle(126, 124, 4)}`,
      role: 'accent',
    },
    { d: 'M60 84 V130 M100 84 V130', role: 'soft' },
    {
      d: `${ellipse(30, 144, 3, 5)} ${ellipse(30, 155, 3, 5)} ${ellipse(30, 166, 3, 5)}`,
      role: 'soft',
    },
    { d: circle(30, 178, 6), role: 'accent' },
    shadow(80, 188, 56),
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

  // A hat with a brim wider than any table, flowers at its band, over a
  // long sword laid out beneath it.
  'amande': [
    { d: ellipse(80, 96, 72, 16) },
    { d: 'M58 92 C58 66 102 66 102 92' },
    { d: 'M60 86 Q80 80 100 86', role: 'soft' },
    {
      d: `${circle(68, 83, 4)} ${circle(80, 81, 4)} ${circle(92, 83, 4)}`,
      role: 'accent',
    },
    { d: 'M24 150 C64 138 110 132 150 130', role: 'accent' },
    { d: 'M24 150 L8 155' },
    { d: 'M22 143 L27 157' },
    shadow(80, 172, 62),
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

  // A footed bowl of stewed fruit, syrup running over the rim.
  'charlotte-compote': [
    { d: 'M34 108 C38 140 58 152 80 152 C102 152 122 140 126 108 Z' },
    { d: 'M68 152 L62 166 H98 L92 152' },
    {
      d: [circle(58, 100, 10), circle(80, 96, 12), circle(103, 100, 10)].join(
        ' ',
      ),
      role: 'accent',
    },
    { d: 'M80 84 q2 -8 9 -11 q8 -1 10 5 q-9 4 -19 6', role: 'soft' },
    { d: 'M40 116 q3 8 0 13 M118 118 q-2 6 1 10', role: 'soft' },
    shadow(80, 176, 44),
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
  // A double-headed spear laid across a long crane feather.
  'randolph': [
    { d: 'M30 176 L130 28' },
    { d: 'M130 28 l-2 16 l-9 -6 Z M30 176 l2 -16 l9 6 Z', role: 'accent' },
    { d: 'M72 118 l10 7 M78 110 l10 7', role: 'accent' },
    { d: 'M44 58 C70 70 104 108 118 160 C96 132 62 100 44 58 Z' },
    {
      d: 'M58 74 l-10 8 M70 88 l-12 8 M82 104 l-12 10 M94 122 l-12 10 M104 140 l-10 10',
      role: 'soft',
    },
    shadow(80, 184, 52),
  ],

  // A heaped thundercloud with a lightning bolt dropping out of it.
  'zeus': [
    {
      d: 'M30 96 C14 96 12 72 30 68 C28 46 56 40 64 54 C70 30 108 30 112 56 C132 50 148 70 134 88 C142 104 118 110 110 100 C98 112 74 112 64 102 C52 110 34 108 30 96 Z',
    },
    { d: 'M36 88 C52 96 70 92 80 84 C92 94 112 94 128 82', role: 'soft' },
    { d: 'M86 108 L70 140 H88 L72 180 L112 130 H92 L104 108', role: 'accent' },
    { d: 'M40 124 v10 M52 136 v10 M122 124 v10 M132 138 v10', role: 'ambient' },
  ],

  // A sun with flames licking out of its rim.
  'prometheus': [
    { d: circle(80, 96, 34) },
    { d: circle(80, 96, 24), role: 'soft' },
    {
      d: 'M80 44 q-8 -14 0 -26 q8 12 0 26 M132 96 q14 -8 26 0 q-12 8 -26 0 M80 148 q8 14 0 26 q-8 -12 0 -26 M28 96 q-14 8 -26 0 q12 -8 26 0',
      role: 'accent',
    },
    {
      d: 'M117 59 l12 -12 M117 133 l12 12 M43 133 l-12 12 M43 59 l-12 -12',
      role: 'accent',
    },
    shadow(80, 188, 40),
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

  // A Marine coat hung from its shoulders like a cape, the hood let down.
  'gion': [
    { d: 'M80 42 c0 -8 10 -10 10 -3 c0 5 -10 6 -10 11' },
    { d: 'M40 60 L80 44 L120 60', role: 'soft' },
    { d: 'M44 60 C38 92 34 132 30 172 H130 C126 132 122 92 116 60' },
    { d: 'M58 56 C62 76 98 76 102 56', role: 'soft' },
    { d: 'M80 74 V172', role: 'soft' },
    { d: 'M44 60 l-12 6 M116 60 l12 6', role: 'accent' },
    { d: 'M30 172 l2 -10 h96 l2 10', role: 'accent' },
    shadow(80, 186, 54),
  ],

  // A fedora with a checked band, and a lit pipe in front of its brim.
  'tokikake': [
    { d: 'M46 100 C46 70 56 58 80 58 C104 58 114 70 114 100' },
    { d: 'M66 64 Q80 78 94 64', role: 'soft' },
    { d: ellipse(80, 112, 62, 14) },
    { d: 'M47 86 C66 94 94 94 113 86', role: 'accent' },
    { d: 'M58 89 v7 M69 91 v7 M80 92 v7 M91 91 v7 M102 89 v7', role: 'soft' },
    { d: 'M104 150 h18 v12 c0 9 -18 9 -18 0 Z' },
    { d: 'M104 156 L52 170', role: 'accent' },
    { d: 'M114 146 c-6 -6 6 -10 0 -16', role: 'soft' },
    shadow(80, 186, 56),
  ],
} satisfies Drawings
