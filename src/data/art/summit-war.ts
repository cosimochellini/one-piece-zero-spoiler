import {
  circle,
  dot,
  dots,
  ellipse,
  polygon,
  SEA,
  shadow,
  star,
} from '~/lib/svg/primitives'

import type { Drawings, Redrawings, Stroke } from './stroke'

/** The slant Squard's katana lies at, centred in the box. */
const SQUARD_KATANA =
  'translate(80 104) rotate(-34) scale(1.2) translate(-77 -100)'

/**
 * Jinbe's great wave, beside his chains first and under the helm later: the
 * body of the wave plain, the curling crest in his colour, its face hatched.
 */
const GREAT_WAVE: Stroke[] = [
  {
    d: 'M88 84 C60 84 26 110 18 160 C30 142 50 126 72 122 C100 116 128 100 132 66',
  },
  {
    d: 'M88 84 C110 84 118 66 126 46 C124 74 110 90 96 96 C110 92 122 82 132 66',
    role: 'accent',
  },
  { d: 'M96 80 q-8 4 -4 12 M112 66 q-6 4 -2 10', role: 'soft' },
  {
    d: dots([
      [134, 50],
      [120, 40],
      [140, 70],
    ]),
    role: 'soft',
  },
  { d: 'M40 136 l8 -7 M54 128 l9 -6 M70 122 l8 -4', role: 'ambient' },
]

/** Sabo's top hat with goggles on the brim, worn before the flame and after. */
const TOP_HAT: Stroke[] = [
  { d: 'M54 106 V52 h46 v54' },
  { d: ellipse(77, 106, 38, 10) },
  { d: 'M54 52 q23 -8 46 0' },
  { d: circle(64, 94, 11), role: 'accent' },
  { d: circle(90, 94, 11), role: 'accent' },
  { d: 'M75 94 h4 M53 92 q-6 2 -8 6 M101 92 q6 2 8 6', role: 'accent' },
]

/**
 * Sakazuki's Marine cap in three-quarters, set on his folded crimson suit,
 * one sleeve folded across the front, plain first and braided later.
 */
const CAP_ON_SUIT: Stroke[] = [
  { d: 'M40 96 C38 64 104 60 108 94' },
  { d: 'M40 96 C56 106 92 106 108 94' },
  { d: 'M40 96 C28 100 28 112 44 112 C62 112 76 108 82 104', role: 'soft' },
  { d: 'M74 66 C74 76 76 88 78 103', role: 'soft' },
  { d: 'M96 72 l-5 7 M102 80 l-5 7 M106 88 l-5 6', role: 'ambient' },
  { d: 'M20 128 L34 114 H126 L140 128' },
  { d: 'M20 128 H140 V172 H20 Z' },
  {
    d: 'M64 128 L80 156 L96 128 M64 128 L56 140 L66 142 M96 128 L104 140 L94 142',
    role: 'soft',
  },
  { d: 'M20 156 L70 152 L72 166 L20 170' },
  {
    d: `M62 153 L64 167 ${dots([
      [67, 157],
      [68, 163],
      [100, 152],
      [100, 164],
    ])}`,
    role: 'soft',
  },
  { d: 'M124 132 l8 -8 M124 146 l12 -12 M124 160 l14 -14', role: 'ambient' },
  shadow(80, 182, 64),
]

/** The pink rose in his lapel: the cupped bloom, its petals and a leaf. */
const SAKAZUKI_ROSE =
  'M102 140 C100 152 120 152 118 140 M102 140 C100 132 108 128 110 134 C112 128 120 132 118 140 M106 140 C106 136 114 136 114 140 C114 143 108 144 108 141 M104 150 C98 154 94 152 92 148 C96 146 100 146 104 150'

/** Kid's horseshoe magnet, drawn beside his metal arm from 603. */
const MAGNET: Stroke[] = [
  { d: 'M46 60 V126 a34 34 0 0 0 68 0 V60', role: 'accent' },
  { d: 'M66 60 V126 a14 14 0 0 0 28 0 V60', role: 'accent' },
  { d: 'M46 52 h20 v8 M94 52 h20 v8 M46 52 v8 M94 52 v8' },
  { d: 'M56 44 q24 -12 48 0', role: 'ambient', dashed: true },
]

/** Senriku's slant, the muzzle up to the right. */
const SENRIKU = 'rotate(-30 80 112)'

/** Devon's pearls, drawn a little larger and higher in the box. */
const PEARLS = 'translate(80 104) scale(1.15) translate(-80 -136)'

/**
 * Marigold's coil: a flat spiral drawn round, then squashed into the floor it
 * lies on.
 */
const MARIGOLD_COIL = 'translate(12 142) scale(1 0.5)'

/** The drawings of the records filed in the summit war stretch of the route. */
export const summitWarArt = {
  // His white fur hat seen from the front and a little above, the fur rim
  // ragged, the spots along the rim and the bottom of the crown in his colour,
  // the side turning away hatched; in front of it on the ground, Kikoku in its
  // black sheath, the red cord loose, the fur guard and the wrapped hilt. He
  // arrives at Sabaody with both in episode 392.
  'trafalgar-law': [
    { d: 'M40 120 C38 86 54 64 80 64 C106 64 122 86 120 120' },
    {
      d: 'M36 122 Q80 138 124 122 M36 122 V140 c4 4 8 2 10 6 c4 0 6 4 10 3 c4 2 8 1 12 4 c4 -1 8 1 12 0 c4 1 8 -1 12 -1 c4 -3 8 -2 12 -4 c4 -1 6 -5 10 -5 c2 -4 6 -2 10 -6 V122',
    },
    {
      d: 'M36 122 c2 -4 6 -4 8 -1 c2 -3 6 -3 8 0 M108 121 c2 -3 6 -3 8 0 c2 -3 6 -3 8 1',
      role: 'soft',
    },
    {
      d: `${circle(45, 136, 2.6)} ${circle(60, 142, 2.6)} ${circle(75, 145, 2.6)} ${circle(90, 145, 2.6)} ${circle(105, 142, 2.6)} ${circle(118, 136, 2.6)} ${circle(50, 112, 2)} ${circle(65, 117, 2)} ${circle(80, 119, 2)} ${circle(95, 117, 2)} ${circle(110, 112, 2)}`,
      role: 'accent',
    },
    {
      d: 'M108 76 l-6 5 M114 88 l-6 5 M118 100 l-6 5 M119 111 l-5 4',
      role: 'ambient',
    },
    { d: 'M6 170 L104 158 M6 177 L104 165 M6 170 V177 M14 169 V176' },
    {
      d: 'M20 175 l6 -7 M34 173 l6 -7 M48 172 l6 -7 M62 170 l6 -7 M76 168 l6 -7 M90 166 l6 -7',
      role: 'ambient',
    },
    {
      d: 'M86 160 L88 167 M94 159 L96 166 M88 167 C84 178 70 182 60 182 M94 166 C92 176 84 184 74 188',
      role: 'soft',
    },
    {
      d: 'M104 158 C101 152 104 147 108 148 C109 143 115 143 116 147 C121 147 123 153 120 158 C123 163 123 170 119 174 C119 179 113 180 111 176 C106 177 103 171 104 165',
    },
    { d: 'M120 157.6 L156 153 V160 L120 164.6' },
    {
      d: 'M124 157 l3 7 l3 -7.4 l3 7 l3 -7.4 l3 7 l3 -7.4 l3 7 l3 -7.4 l3 7',
      role: 'soft',
    },
    shadow(80, 190, 70),
  ],

  // His long fur coat hung on a peg by its collar, the collar flared and
  // ragged, studs on the shoulders, the far side of the coat hatched; the
  // studded square goggles slipping off the peg on their strap. Both are what
  // he wears into Sabaody in episode 392. The magnet and the metal arm are
  // drawn from 603, in `summitWarRedrawn`.
  'eustass-kid': [
    { d: 'M70 22 h20 M80 22 v10', role: 'ambient' },
    {
      d: 'M44 80 L30 74 L38 66 L24 58 L36 52 L30 40 L44 42 L46 30 L58 36 L64 24 L72 32 L80 26 L88 32 L96 24 L102 36 L114 30 L116 42 L130 40 L124 52 L136 58 L122 66 L130 74 L116 80',
    },
    {
      d: 'M44 50 l8 4 M40 64 l8 2 M116 50 l-8 4 M120 64 l-8 2 M66 40 l4 6 M94 40 l-4 6',
      role: 'soft',
    },
    {
      d: 'M44 80 C36 90 32 110 30 130 L26 178 M116 80 C124 90 128 110 130 130 L134 178',
    },
    {
      d: 'M26 178 Q50 172 64 180 Q80 186 98 178 Q116 172 134 178',
      role: 'soft',
    },
    { d: 'M62 76 L58 180 M98 76 L102 178' },
    { d: 'M70 90 Q66 130 72 176 M88 90 Q94 130 88 176', role: 'soft' },
    {
      d: 'M36 94 l4 -10 l4 8 M46 86 l4 -10 l4 8 M124 94 l-4 -10 l-4 8 M114 86 l-4 -10 l-4 8',
      role: 'soft',
    },
    {
      d: 'M106 96 l-6 4 M107 110 l-6 4 M108 124 l-6 4 M109 138 l-6 4 M110 152 l-6 4 M111 166 l-6 4',
      role: 'ambient',
    },
    { d: 'M80 32 C92 46 100 70 102 94' },
    // The goggles, tilted as they slide.
    {
      d: 'M56 92 h18 q4 0 4 4 v12 q0 4 -4 4 h-18 q-4 0 -4 -4 v-12 q0 -4 4 -4z M90 92 h18 q4 0 4 4 v12 q0 4 -4 4 h-18 q-4 0 -4 -4 v-12 q0 -4 4 -4z M78 100 h8',
      role: 'accent',
      transform: 'translate(26 30) rotate(-20 82 102) scale(0.96)',
    },
    {
      d: 'M58 104 l8 -8 M92 104 l8 -8',
      role: 'soft',
      transform: 'translate(26 30) rotate(-20 82 102) scale(0.96)',
    },
  ],

  // Salome coiled on the ground, her neck rising out of the coils and her
  // head turned away, wearing the empress's white cape: the collar standing
  // up round her neck and the epaulettes in Hancock's colour, the far side
  // hatched. Hancock comes on deck in that cape in episode 410, and Salome is
  // never far from her.
  'boa-hancock': [
    {
      d: 'M20 168 C20 186 140 186 140 168 C140 160 130 155 118 153 M42 153 C30 155 20 160 20 168 M140 168 C152 170 158 160 150 152',
    },
    {
      d: 'M32 150 C32 166 128 166 128 150 M32 150 C32 142 46 138 58 137 M112 137 C120 138 128 142 128 150',
    },
    {
      d: 'M34 178 l3 -7 M54 182 l2 -8 M106 182 l-2 -8 M126 178 l-3 -7',
      role: 'soft',
    },
    {
      d: 'M86 78 C86 66 92 58 96 50 C100 42 98 34 92 30 M106 74 C110 64 112 54 112 44 C112 32 108 26 102 24',
    },
    {
      d: 'M92 30 C86 36 72 36 62 32 C54 28 52 22 58 18 C66 12 84 12 96 18 C100 20 102 22 102 24',
    },
    { d: 'M62 24 C72 20 86 20 96 24 M98 44 l10 2 M98 56 l10 3', role: 'soft' },
    {
      d: 'M86 84 L68 92 C66 108 62 126 58 144 Q84 152 112 144 C110 126 112 106 114 90 L104 80',
    },
    {
      d: 'M78 96 C76 112 74 128 72 146 M104 94 C104 110 104 126 104 146',
      role: 'soft',
    },
    { d: 'M106 104 l5 -3 M106 118 l5 -3 M106 132 l5 -3', role: 'ambient' },
    {
      d: `M86 84 C82 76 84 68 90 64 M104 80 C108 72 106 64 100 60 M86 84 C92 86 98 84 104 80 ${ellipse(68, 92, 8, 3.5)} ${ellipse(114, 88, 8, 3.5)}`,
      role: 'accent',
    },
    shadow(80, 192, 62),
  ],

  // A stretch of the Level 6 cell wall, its square iron plate and a heavy
  // chain sagging from it to a cuff on the floor, and beside it the great
  // wave of his epithet, the crest in his colour. He is chained in that cell
  // next to Ace in episode 430. The Sunny's helm rides the same wave from 980,
  // in `summitWarRedrawn`.
  'jinbe': [
    { d: 'M6 150 V24 H78 V150', role: 'soft' },
    {
      d: 'M6 48 H78 M6 72 H78 M6 96 H78 M6 120 H78 M32 24 V48 M60 24 V48 M18 48 V72 M46 48 V72 M74 48 V72 M32 72 V96 M60 96 V120 M18 96 V120 M46 120 V150',
      role: 'ambient',
    },
    { d: 'M78 24 L86 30 V154 L78 150', role: 'soft' },
    {
      d: 'M80 44 l4 -4 M80 68 l4 -4 M80 92 l4 -4 M80 116 l4 -4 M80 140 l4 -4',
      role: 'ambient',
    },
    { d: 'M20 36 h22 v22 h-22z M24 40 h14 v14 h-14z' },
    { d: ellipse(31, 62, 4, 6) },
    {
      d: [
        ellipse(33, 78, 6, 10),
        ellipse(42, 108, 6, 10),
        ellipse(52, 136, 6, 9),
      ].join(' '),
    },
    { d: 'M36 90 l3 6 M46 120 l3 6', role: 'soft' },
    {
      d: `${ellipse(68, 150, 16, 6)} ${ellipse(68, 150, 10, 3.5)} M52 150 v5 C52 162 84 162 84 155 V150`,
    },
    { d: 'M78 156 l4 -4 M72 158 l4 -4', role: 'ambient' },
    { d: 'M0 166 H160', role: 'ambient', dashed: true },
    ...GREAT_WAVE.map((stroke): Stroke => {
      // The same wave, smaller, beside the wall.
      return { ...stroke, transform: 'translate(78 58) scale(0.62)' }
    }),
    shadow(68, 172, 26),
  ],

  // A fortress in a crescent bay, gate to the sea.
  'marineford-arc': [
    { d: 'M-6 152 C34 100 126 100 166 152' },
    {
      d: 'M28 122 V82 h12 v-10 h12 v10 h12 v-10 h12 v10 h12 v-10 h12 v10 h12 v-10 h12 v10 V122z',
      role: 'accent',
    },
    { d: 'M70 122 V100 a10 10 0 0 1 20 0 V122', role: 'accent' },
    { d: 'M40 68 V46 h14 v22 M106 68 V46 h14 v22 M76 68 V30 h8 v38' },
    ...SEA.slice(1),
  ],
  // A newspaper folded open over the sea, the headline across the top, and a
  // gull carrying the next edition in.
  'post-war': [
    { d: 'M34 70 L118 58 L128 136 L44 148z' },
    { d: 'M76 64 L86 142', role: 'soft' },
    { d: 'M42 84 L110 74', role: 'accent' },
    {
      d: 'M46 100 L74 96 M48 114 L76 110 M50 128 L78 124 M88 92 L116 88 M90 106 L118 102 M92 120 L120 116',
      role: 'ambient',
    },
    { d: 'M112 34 q8 -8 16 0 q8 -8 16 0', role: 'accent' },
    { d: 'M124 38 h8 v6 h-8z', role: 'soft' },
    ...SEA,
  ],

  // A mangrove on its stilt roots, with soap bubbles going up from the bark.
  'sabaody': [
    { d: 'M72 148 V64 M88 148 V64' },
    { d: ellipse(80, 56, 42, 22) },
    {
      d: 'M72 118 C60 128 54 138 50 150 M88 118 C100 128 106 138 110 150 M72 132 C64 140 60 146 58 152 M88 132 C96 140 100 146 102 152',
    },
    { d: circle(42, 92, 9), role: 'accent' },
    { d: circle(120, 74, 12), role: 'accent' },
    { d: circle(114, 114, 7), role: 'accent' },
    ...SEA,
  ],

  // Three of the jungle mushrooms Luffy eats when he lands, in
  // three-quarters on the jungle floor, the biggest cap in the record's colour
  // and its stem hatched on the shaded side. He falls into that jungle and
  // eats them in episode 408.
  'amazon-lily-arc': [
    { d: 'M2 150 C40 146 120 146 158 150', role: 'ambient' },
    { d: 'M22 96 C22 60 104 56 108 94 C92 104 38 104 22 96 Z', role: 'accent' },
    {
      d: 'M22 96 C40 110 92 110 108 94 M40 100 l4 6 M54 103 l2 6 M70 104 v6 M86 102 l-2 6',
      role: 'soft',
    },
    {
      d: 'M54 106 C52 120 50 136 48 150 M78 106 C80 120 82 136 84 150 M48 150 Q66 156 84 150',
    },
    { d: 'M80 108 l-6 8 M82 122 l-6 8 M83 136 l-6 8', role: 'ambient' },
    { d: 'M98 120 C98 100 140 98 144 118 C134 124 108 126 98 120 Z' },
    {
      d: 'M114 124 V150 M128 124 V150 M114 150 Q121 153 128 150',
      role: 'soft',
    },
    {
      d: 'M16 132 C14 120 38 118 40 130 C34 134 22 134 16 132 Z M24 134 V150 M32 134 V150',
    },
    {
      d: 'M146 150 C144 130 136 116 124 108 M146 150 C150 134 156 124 164 118 M6 150 C8 140 4 130 -4 124',
      role: 'soft',
    },
    shadow(80, 166, 70),
  ],

  // A prison tower going down into the water, one level line after another.
  'impel-down-arc': [
    { d: 'M46 56 h68 v134 h-68z' },
    { d: 'M60 56 V38 h40 v18' },
    { d: 'M46 80 h68 M46 104 h68 M46 128 h68 M46 152 h68', role: 'soft' },
    { d: 'M70 56 V80 M80 56 V80 M90 56 V80', role: 'accent' },
    { d: 'M62 56 h36', role: 'accent' },
    {
      d: dots([
        [54, 92],
        [54, 116],
        [54, 140],
        [54, 164],
      ]),
      role: 'ambient',
    },
    ...SEA,
  ],

  // Her clam-shell backpack, the one she carries her takoyaki in, sat on its
  // hinge, the ribs fanning out to a scalloped rim, the lower valve and the far
  // side hatched; from behind it, the end of a mermaid's tail curling up, the
  // fin in her colour. A sea rabbit spits her out onto the Sunny in episode
  // 385.
  'camie': [
    {
      d: 'M12.4 143.1 Q8.9 126.5 17.6 116.8 Q18.6 100.3 27.8 95.1 Q32.5 81.4 41.9 80.9 Q49.2 71.5 58 76 Q66.8 71.5 74.1 80.9 Q83.5 81.4 88.2 95.1 Q97.4 100.3 98.4 116.8 Q107.1 126.5 103.6 143.1 L64 154 H52 Z',
    },
    {
      d: 'M58 154 L17.6 116.8 M58 154 L27.8 95.1 M58 154 L41.9 80.9 M58 154 L58 76 M58 154 L74.1 80.9 M58 154 L88.2 95.1 M58 154 L98.4 116.8',
      role: 'soft',
    },
    {
      d: 'M12.4 143.1 C14 154 30 160 46 160 M103.6 143.1 C102 154 86 160 70 160',
    },
    { d: 'M46 160 H70 L66 154 H50 Z' },
    {
      d: 'M78 157 L82 151 M87 156 L91 149.6 M96 152.5 L99 146.6',
      role: 'ambient',
    },
    { d: 'M99 104 C106 96 114 86 120 72 M106 128 C114 112 120 94 124 72' },
    { d: 'M104 114 q6 -2 10 -6 M110 100 q5 -2 8 -6', role: 'soft' },
    {
      d: 'M120 72 C114 60 104 54 96 52 C104 62 110 70 112 76 M124 72 C130 60 140 54 146 52 C140 64 134 72 128 78 M120 72 Q122 74 124 72',
      role: 'accent',
    },
    shadow(70, 178, 62),
  ],

  // A starfish turned three-quarters to the reader, its arms ridged and their
  // undersides showing, the tam tilted on the top arm. He rides on Camie's
  // head from episode 385.
  'pappag': [
    {
      d: 'M80 64 L92 104 L134 106 L100 130 L114 170 L80 146 L46 170 L60 130 L26 106 L68 104 Z',
      role: 'accent',
    },
    {
      d: 'M114 170 l2 6 L80 152 L44 176 L46 170 M134 106 l2 4 L104 134',
      role: 'soft',
    },
    {
      d: 'M80 82 V112 M96 114 L116 110 M92 130 L104 154 M68 130 L56 154 M64 114 L44 110',
      role: 'soft',
    },
    { d: 'M118 112 l-4 8 M110 160 l-4 -6 M50 160 l4 -6', role: 'ambient' },
    // The tam, tilted.
    {
      d: 'M60 72 C56 58 64 44 84 42 C104 40 112 52 106 62 M58 70 C66 76 100 70 108 62',
      transform: 'translate(0 8) rotate(-14 82 62)',
    },
    {
      d: `${circle(82, 38, 4)} M70 50 q12 6 26 -2`,
      role: 'soft',
      transform: 'translate(0 8) rotate(-14 82 62)',
    },
    shadow(80, 186, 46),
  ],

  // His harpoon gun in three-quarters: the stock joined to a boxy receiver,
  // its far side hatched, the barrel, and four harpoons out of the muzzle,
  // the barbs in his colour; the rifle-like gun he loads with four harpoons
  // at a time. He arrives in episode 386 (ch. 491), and his face is out from
  // under the mask by episode 388 (ch. 494).
  'duval': [
    { d: 'M4 166 L40 140 V154 L16 178 Z M4 166 L8 172 L16 178' },
    { d: 'M14 166 l10 -7 M22 170 l10 -7', role: 'ambient' },
    {
      d: 'M40 130 H82 V154 H40 Z M40 130 L50 122 H92 L82 130 M92 122 V146 L82 154',
    },
    { d: 'M84 132 l6 -5 M84 142 l6 -5', role: 'ambient' },
    {
      d: 'M56 154 L52 170 H62 L66 154 M62 158 C70 158 72 164 68 168',
      role: 'soft',
    },
    { d: 'M92 128 L130 118 M92 142 L132 132' },
    { d: ellipse(131, 125, 4, 7.5) },
    {
      d: 'M133 119 L150 112 M134 123 L153 119 M134 127 L153 127 M133 131 L150 135',
      role: 'soft',
    },
    {
      d: 'M150 112 l6 -4 l-1 7 M153 119 l7 -2 l-3 6 M153 127 l7 1 l-4 5 M150 135 l6 3 l-6 2',
      role: 'accent',
    },
    { d: 'M50 142 H72', role: 'soft' },
    shadow(80, 186, 72),
  ],

  // Her bar counter in three-quarters, the top overhanging, the panelled
  // front and the side going away hatched, and a cigarette resting on top in
  // her colour, the smoke going up. She is behind that counter with a
  // cigarette in episode 392.
  'shakky': [
    { d: 'M2 108 L24 94 H158 L136 108 Z' },
    { d: 'M2 108 V114 H136 V108 M136 114 L158 100 V94' },
    { d: 'M8 114 V164 H130 V114 M130 164 L152 150 V104' },
    { d: 'M38 114 V164 M70 114 V164 M100 114 V164', role: 'soft' },
    {
      d: 'M132 124 l18 -11 M132 138 l18 -11 M132 152 l18 -11',
      role: 'ambient',
    },
    { d: 'M58 102 L94 97 C97 97 98 100 95 101 L59 107 Z', role: 'accent' },
    {
      d: 'M58 102 L59 107 M52 103 L58 102 M53 108 L59 107 M52 103 L53 108',
      role: 'soft',
    },
    {
      d: 'M52 100 C44 90 56 82 48 72 C40 62 52 52 44 42 C38 34 46 26 42 18',
      role: 'ambient',
    },
    shadow(80, 176, 74),
  ],

  // The explosive collar a moment before it goes off: a band standing open
  // on the floor, hatched on its shaded side, the lock block on its front and
  // the blast at the lock in his colour; the key lying beside it gives its
  // size. He takes it off Camie's neck in the auction house in episode 398.
  'silvers-rayleigh': [
    {
      d: 'M58 136 C30 132 20 118 24 106 C30 90 60 84 84 86 C108 88 128 96 132 110',
    },
    {
      d: 'M58 120 C40 118 34 112 36 106 C40 98 60 96 82 98 C102 100 116 104 120 112',
      role: 'soft',
    },
    {
      d: 'M24 106 V122 C20 134 34 146 58 150 V136 M132 110 V126 C134 138 120 148 100 150',
    },
    {
      d: 'M76 134 h28 v24 h-28z M104 134 l10 -6 v24 l-10 6 M76 134 l10 -6 h28',
    },
    { d: 'M90 141 v9', role: 'soft' },
    { d: 'M28 128 l8 -4 M36 138 l8 -4 M46 144 l8 -4', role: 'ambient' },
    {
      d: 'M116 128 l14 -12 M120 140 l18 -2 M118 152 l14 10 M96 126 l2 -14 M108 124 l8 -12',
      role: 'accent',
    },
    {
      d: 'M30 172 h26 M56 172 l6 -4 v8 z M34 172 v6 h4 v-6 M42 172 v4',
      role: 'soft',
    },
    shadow(80, 182, 66),
  ],

  // Two long blades, one on each gauntlet.
  'killer': [
    { d: 'M40 128 h30 v26 h-30z' },
    { d: 'M92 128 h30 v26 h-30z' },
    { d: 'M40 140 h30 M92 140 h30', role: 'soft' },
    { d: 'M46 128 L26 56 C24 44 34 38 40 46 L62 126', role: 'accent' },
    { d: 'M116 128 L136 56 C138 44 128 38 122 46 L100 126', role: 'accent' },
    shadow(80, 168, 54),
  ],

  // A boiler suit on its hanger, with a paw print across the chest.
  'bepo': [
    { d: 'M58 48 C58 40 102 40 102 48 V150 h-18 V104 h-8 v46 h-18z' },
    { d: 'M58 56 L36 94 l14 10 L64 84' },
    { d: 'M102 56 L124 94 l-14 10 L96 84' },
    { d: 'M62 126 h36', role: 'soft' },
    { d: circle(80, 78, 10), role: 'accent' },
    {
      d: dots([
        [68, 62],
        [80, 58],
        [92, 62],
      ]),
      role: 'accent',
    },
    shadow(80, 162, 40),
  ],

  // His headphones lying in three-quarters, the band doubled, one cup turned
  // to the reader and the other on its edge with its side hatched, both cups
  // in his colour. He wears them into Sabaody in episode 392.
  'scratchmen-apoo': [
    { d: 'M42 124 C36 70 60 36 96 38 C126 40 138 70 128 120' },
    { d: 'M50 122 C46 76 66 48 96 48 C120 50 130 74 122 118', role: 'soft' },
    { d: ellipse(42, 140, 20, 24), role: 'accent' },
    { d: ellipse(42, 140, 12, 15), role: 'soft' },
    {
      d: 'M22 140 C22 160 30 168 40 170 M62 140 C64 156 58 166 48 168',
      role: 'soft',
    },
    {
      d: 'M122 116 L138 116 C144 130 144 150 138 162 L122 162 C116 150 116 130 122 116 Z',
      role: 'accent',
    },
    {
      d: 'M138 116 C146 118 148 160 138 162 M126 124 l8 -4 M124 138 l10 -5 M124 152 l10 -5',
      role: 'ambient',
    },
    shadow(84, 180, 60),
  ],

  // A tarot card stood on its edge at an angle, so its thickness shows, its
  // face left blank; three more lying face down in front of it, their dark
  // backs hatched. He reads his tarot cards at a Sabaody restaurant table in
  // episode 392.
  'basil-hawkins': [
    { d: 'M58 44 L100 38 L104 118 L62 124 Z', role: 'accent' },
    { d: 'M100 38 L103 40 L107 119 L104 118', role: 'accent' },
    { d: 'M65 52 L95 48 L98 111 L68 115 Z', role: 'soft' },
    shadow(84, 128, 28),
    {
      d: 'M10 152 L42 144 L52 160 L20 168 Z M108 160 L140 152 L150 168 L118 176 Z M50 174 L82 166 L92 182 L60 190 Z',
    },
    {
      d: 'M18 156 L44 150 M22 162 L48 156 M116 164 L142 158 M120 170 L146 164 M58 178 L84 172 M62 184 L88 178',
      role: 'ambient',
    },
    {
      d: 'M10 152 v3 L20 171 L52 163 v-3 M108 160 v3 L118 179 L150 171 v-3',
      role: 'soft',
    },
  ],

  // His cocked hat side on, the brim sweeping to a point at the front, the
  // dark crown hatched and the white plume curling off the back; under it,
  // lying crossed on the ground, the sword and the axe he wears at his belt.
  // He arrives at Sabaody in episode 392.
  'x-drake': [
    {
      d: 'M16 112 C30 80 58 62 92 62 C118 62 138 74 146 94 C130 90 114 92 102 100 C76 108 46 110 16 112 Z',
    },
    { d: 'M56 106 C66 92 92 86 112 92', role: 'soft' },
    {
      d: 'M40 102 l12 -18 M54 102 l14 -24 M68 100 l14 -26 M82 96 l14 -26 M96 90 l12 -20 M110 80 l10 -14',
      role: 'ambient',
    },
    {
      d: 'M92 62 C96 48 112 40 124 46 C130 36 146 38 150 50 C158 52 160 64 154 70 C146 66 140 70 140 78',
      role: 'accent',
    },
    {
      d: 'M108 50 l2 8 M126 48 l-2 8 M142 52 l-4 6 M150 64 l-6 2',
      role: 'soft',
    },
    { d: 'M24 120 H136', role: 'ambient', dashed: true },
    { d: 'M32.7 158.9 L146 128 L31.3 153.1' },
    { d: 'M34.1 164.7 L29.9 147.3 M14 160 L32 156' },
    { d: 'M17.2 134.4 L123.2 168.4 L124.8 163.6 L18.8 129.6 Z' },
    {
      d: 'M122 160 C130 150 144 150 152 156 C146 164 144 172 146 180 C138 180 128 176 124 170 Z',
    },
    { d: 'M134 158 l4 10 M142 157 l2 12', role: 'ambient' },
    shadow(80, 186, 60),
  ],

  // His pillar stood on end, a long six-sided stone with the far faces
  // hatched and a few cracks, his big bead necklace draped over the top in his
  // colour. He carries it on his shoulder at Sabaody in episode 392.
  'urouge': [
    { d: 'M54 40 L66 32 H94 L106 40 L94 48 H66 Z' },
    { d: 'M54 40 V170 L66 178 H94 L106 170 V40 M66 48 V178 M94 48 V178' },
    {
      d: 'M98 60 l6 -4 M98 80 l6 -4 M98 100 l6 -4 M98 120 l6 -4 M98 140 l6 -4 M98 160 l6 -4',
      role: 'ambient',
    },
    { d: 'M74 120 l4 10 l-2 8 M84 150 l-4 8 M60 130 l2 10', role: 'soft' },
    {
      d: [
        [52, 52],
        [52, 64],
        [53, 76],
        [56, 88],
        [62, 98],
        [70, 105],
        [80, 108],
        [90, 105],
        [98, 98],
        [104, 88],
        [107, 76],
        [108, 64],
        [108, 52],
      ]
        .map(([x = 0, y = 0]) => circle(x, y, 4))
        .join(' '),
      role: 'accent',
    },
    shadow(80, 188, 44),
  ],

  // A steak on a plate with the fork stood upright in it, and a glass of wine
  // beside it on the restaurant table. He is at dinner in Grove 24 in
  // episode 392, and the fork is what he hits one of his own men with.
  'capone-bege': [
    { d: 'M2 162 Q80 172 158 162', role: 'ambient' },
    { d: ellipse(64, 146, 46, 14) },
    { d: ellipse(64, 145, 34, 9), role: 'soft' },
    {
      d: 'M38 142 C34 132 50 126 66 127 C84 128 92 134 90 141 C88 148 76 151 60 150 C46 149 40 147 38 142 Z',
    },
    {
      d: 'M38 142 v4 C42 152 58 155 70 154 C84 153 90 149 90 145 v-4 M48 136 l10 -6 M58 140 l12 -7 M70 142 l10 -6',
      role: 'soft',
    },
    {
      d: 'M64 136 V114 M70 136 V114 M76 136 V114 M82 136 V114 M62 114 C62 106 84 106 84 114 M70 106 L70 44 C70 38 76 38 76 44 L76 106',
      role: 'accent',
    },
    { d: 'M118 64 C116 92 124 104 132 104 C140 104 148 92 146 64' },
    { d: ellipse(132, 64, 14, 3.5) },
    { d: 'M119 82 C126 85 138 85 145 82', role: 'soft' },
    { d: 'M121 88 h20 M123 94 h16 M126 99 h10', role: 'ambient' },
    { d: `M132 104 V140 ${ellipse(132, 142, 13, 3.5)}` },
    shadow(64, 172, 48),
  ],

  // A pizza in three-quarters with one slice pulled out of it, in her colour,
  // the gap left behind and the cheese still trailing. She is eating
  // everything in sight at a Sabaody restaurant in episode 392.
  'jewelry-bonney': [
    {
      d: 'M14 136 C14 118 46 108 80 108 C114 108 146 118 146 136 C146 154 114 164 80 164 C46 164 14 154 14 136 Z',
    },
    {
      d: 'M24 136 C24 122 50 116 80 116 C110 116 136 122 136 136 C136 150 110 156 80 156 C50 156 24 150 24 136 Z',
      role: 'soft',
    },
    { d: 'M14 136 v6 C14 160 146 160 146 142 v-6', role: 'soft' },
    { d: 'M80 136 L136 136 L120 120 Z' },
    { d: 'M86 128 L144 102 C136 92 120 90 108 92 Z', role: 'accent' },
    {
      d: 'M108 92 C122 88 138 92 144 102 M118 122 C112 116 104 112 100 118 M126 128 C118 124 112 120 108 124',
      role: 'soft',
    },
    {
      d: `${circle(46, 136, 4)} ${circle(60, 148, 4)} ${circle(84, 148, 4)} ${circle(66, 126, 4)} ${circle(116, 104, 3)}`,
      role: 'soft',
    },
    shadow(80, 176, 66),
  ],

  // His gold pistol on its side: the round barrel in his colour, the muzzle
  // to the left with the smoke still curling off it, the frame in
  // three-quarters with its far side hatched, the raked grip hatched for its
  // dark wood. He shoots Hatchan with it in episode 396.
  'saint-charloss': [
    { d: `${ellipse(26, 100, 4, 9)} M26 91 H100 M26 109 H92`, role: 'accent' },
    { d: 'M24 98 h4', role: 'soft' },
    { d: 'M36 91 v-4 h6 v4' },
    { d: 'M92 109 H128 V84 H100 V91' },
    { d: 'M100 84 L108 78 H136 L128 84 M128 109 L136 103 V78' },
    { d: 'M130 92 l4 -3 M130 100 l4 -3', role: 'ambient' },
    { d: 'M128 80 l6 -8 l5 3 l-4 7', role: 'soft' },
    { d: 'M104 109 L112 154 H134 L128 109' },
    { d: 'M114 124 l12 -5 M116 136 l13 -5 M118 148 l13 -5', role: 'ambient' },
    { d: 'M70 109 C68 130 92 132 100 116' },
    { d: 'M84 109 c2 7 0 11 -4 13', role: 'soft' },
    {
      d: 'M20 92 C10 86 16 76 22 72 C28 68 26 58 18 54 C12 50 16 42 22 40',
      role: 'soft',
    },
    shadow(82, 166, 58),
  ],

  // A mangrove broken by his light: the beam coming straight down from the
  // top left in his colour, bursting where it strikes, the stump splintered
  // across on its arching roots with its shaded side hatched, and the top of
  // the trunk toppling away, its cut end seen. He fells one with a beam in
  // episode 401.
  'borsalino': [
    { d: 'M2 14 L54 86 M12 8 L64 80', role: 'accent' },
    {
      d: 'M46 74 l-10 -2 M70 70 l4 -10 M44 94 l-10 4 M74 88 l8 4',
      role: 'accent',
    },
    { d: 'M56 144 C58 126 58 108 56 90 M104 144 C102 126 102 108 104 94' },
    { d: 'M56 90 l7 7 l5 -7 l7 8 l6 -6 l6 7 l6 -5 l11 0', role: 'soft' },
    {
      d: 'M56 144 C46 132 32 136 24 152 M104 144 C114 132 128 136 136 152 M70 146 C72 136 88 136 90 146 M70 146 L62 152 M90 146 L98 152',
    },
    { d: 'M66 104 v22 M78 110 v26', role: 'soft' },
    { d: 'M92 136 l8 -8 M92 120 l8 -8 M92 104 l8 -8', role: 'ambient' },
    { d: 'M104 94 L150 26 M80 88 L124 20' },
    { d: ellipse(137, 23, 14, 6), transform: 'rotate(34 137 23)' },
    { d: 'M110 70 l10 6 M122 52 l10 6', role: 'ambient' },
    { d: 'M14 152 H146', role: 'ambient' },
    shadow(80, 170, 60),
  ],

  // His great two-bladed axe standing on its butt: the socket block in
  // three-quarters, the near blade's wavy edge in his colour, the far blade's
  // face hatched, the grip wrapped, and the red-and-white tsuna rope he wears
  // coiled at its foot, the knot's two tails loose. He has both in
  // episode 403.
  'sentomaru': [
    { d: 'M76 62 V172 M84 62 V172 M76 172 h8' },
    {
      d: 'M76 120 l8 -4 M76 128 l8 -4 M76 136 l8 -4 M76 144 l8 -4 M76 152 l8 -4',
      role: 'soft',
    },
    { d: 'M70 50 h20 v32 h-20z M70 50 l4 -4 h20 l-4 4 M90 82 l4 -4 V46' },
    { d: 'M70 54 C56 52 40 42 28 30 C22 58 22 84 28 112 C40 98 56 86 70 80' },
    {
      d: 'M28 30 C34 42 26 48 32 58 C38 68 28 76 34 86 C40 96 30 102 28 112',
      role: 'accent',
    },
    {
      d: 'M90 54 C104 52 120 42 132 30 C138 58 138 84 132 112 C120 98 104 86 90 80',
    },
    { d: 'M100 70 l10 -8 M104 82 l14 -12 M112 92 l14 -12', role: 'ambient' },
    { d: `${ellipse(80, 166, 34, 8)} ${ellipse(80, 166, 26, 5)}` },
    { d: 'M54 162 l4 6 M66 159 l4 7 M92 159 l4 7 M104 162 l4 6', role: 'soft' },
    { d: 'M112 168 c8 4 12 10 10 18 M108 170 c6 6 6 12 2 18' },
    shadow(80, 186, 44),
  ],

  // A snake wound round a pillar, tongue out at the top.
  'boa-sandersonia': [
    { d: 'M64 46 V168 M96 46 V168' },
    { d: 'M54 40 h52 v8 h-52z' },
    { d: 'M54 168 h52 v10 h-52z' },
    {
      d: 'M52 160 C104 150 106 136 62 126 C20 116 24 100 76 92 C120 84 122 70 84 62',
      role: 'accent',
    },
    { d: 'M84 62 C72 58 68 48 78 44 C88 40 96 48 92 56', role: 'accent' },
    { d: 'M92 56 h10 m-3 -3 l3 3 l-3 3', role: 'accent' },
    shadow(80, 186, 34),
  ],

  // Her snake form's heavy tail coiled flat on the arena floor, seen from
  // above, the tip curling out at the front and the near side hatched; beside
  // it the guandao she carries, its great blade in her colour, the far face
  // hatched, the back spur and the collar on the haft. She turns in the arena
  // in episode 412.
  'boa-marigold': [
    {
      d: 'M142 0 A62 62 0 0 0 18 0 A52 52 0 0 0 122 0 A40 40 0 0 0 42 0 A30 30 0 0 0 102 0 C102 -8 90 -9 88 0',
      transform: MARIGOLD_COIL,
    },
    {
      d: 'M128 0 A48 48 0 0 0 32 0 A38 38 0 0 0 108 0 A26 26 0 0 0 56 0 A16 16 0 0 0 88 0',
      transform: MARIGOLD_COIL,
    },
    {
      d: 'M142 0 C144 34 140 60 120 70 C110 74 102 70 108 64 M128 0 C130 26 128 48 116 58 C112 62 108 64 108 64',
      transform: MARIGOLD_COIL,
    },
    {
      d: 'M44 46 l8 -14 M68 56 l8 -14 M96 56 l8 -14 M120 40 l8 -14',
      role: 'ambient',
      transform: MARIGOLD_COIL,
    },
    { d: 'M20 186 V74 M26 186 V74 M20 186 h6' },
    { d: 'M26 74 V12 L2 22 C-2 42 6 62 20 74 Z', role: 'accent' },
    { d: 'M26 30 l8 -8 v12 M9 26 C6 42 10 56 20 66', role: 'soft' },
    { d: 'M14 46 l10 -8 M16 56 l8 -7', role: 'ambient' },
    { d: 'M16 74 h14 v6 h-14z' },
    shadow(92, 178, 62),
  ],

  // Her snake bow standing on its tail: the snake's body bent into the stave,
  // its outer side in her colour, bands across it, the head at the top with
  // the tongue out, the string behind and an arrow nocked. The Kuja first
  // draw their snakes as bows in episode 409.
  'marguerite': [
    { d: 'M98 20 C40 54 40 148 98 182', role: 'accent' },
    { d: 'M104 28 C52 60 52 142 104 174 C106 178 102 182 98 182' },
    {
      d: 'M98 20 C100 12 110 6 122 8 C130 10 128 18 120 20 C114 22 108 24 104 28',
    },
    { d: 'M128 13 l7 -1 M135 12 l3 -4 M135 12 l3 3', role: 'soft' },
    {
      d: 'M66 48 l7 6 M54 74 l8 4 M50 101 h9 M54 128 l8 -4 M66 154 l7 -6',
      role: 'soft',
    },
    { d: 'M104 30 L104 170', role: 'soft' },
    { d: 'M108 100 H22 M22 100 l9 -5 M22 100 l9 5' },
    { d: 'M108 100 l8 -6 h8 l-8 6 M108 100 l8 6 h8 l-8 -6', role: 'soft' },
    {
      d: 'M60 86 l5 -3 M58 116 l5 3 M66 60 l4 -3 M66 142 l4 3',
      role: 'ambient',
    },
    shadow(80, 186, 34),
  ],

  // The newspaper she asks the returning pirates for, folded and lying in
  // three-quarters with a blank masthead band and its columns, and beside it her snake staff standing
  // on its tail, the upper body coiled three times round in her colour and
  // the head turned over, tongue out. She is handed the paper in episode 411.
  'nyon': [
    { d: 'M6 158 L36 130 H108 L78 158 Z' },
    { d: 'M6 158 V164 H78 L108 136 V130' },
    { d: 'M57 130 L27 158', role: 'soft' },
    {
      d: 'M33 133 H105 M38 137 h20 M32 143 h20 M26 149 h20 M62 137 h32 M56 143 h32 M50 149 h32',
      role: 'soft',
    },
    { d: 'M82 162 l8 -7 M92 152 l8 -7', role: 'ambient' },
    {
      d: 'M122 174 C120 140 120 110 120 76 M130 172 C130 140 130 110 130 76 M122 174 C124 176 128 176 130 172',
    },
    {
      d: 'M120 96 l10 -3 M120 116 l10 -3 M120 136 l10 -3 M121 156 l9 -3',
      role: 'soft',
    },
    {
      d: 'M106 76 C106 86 144 86 144 76 M108 62 C108 71 142 71 142 62 M110 48 C110 56 140 56 140 48',
      role: 'accent',
    },
    {
      d: 'M106 76 C106 68 128 66 142 62 M108 62 C108 54 126 52 140 48',
      role: 'soft',
    },
    {
      d: 'M114 48 C112 40 112 34 106 30 M136 46 C134 34 126 24 114 22 M106 30 C98 32 88 30 86 26 C86 20 100 18 114 22',
    },
    { d: 'M86 26 h-7 M79 26 l-3 -3 M79 26 l-3 3', role: 'soft' },
    shadow(72, 178, 66),
  ],

  // The warden's cap between the two horn ornaments he wears either side of
  // it, the cap's shaded side hatched, and the poison of his breath curling
  // underneath. He breathes it on his vice warden in episode 425.
  'magellan': [
    { d: ellipse(80, 82, 24, 7) },
    {
      d: 'M56 82 L54 104 M104 82 L106 104 M54 104 C60 112 100 112 106 104 C112 112 112 120 104 122 C90 126 70 126 56 122 C48 120 48 112 54 104 Z',
    },
    { d: 'M55 96 C64 102 96 102 105 96', role: 'soft' },
    { d: 'M96 88 l-4 10 M102 88 l-3 9', role: 'ambient' },
    { d: 'M54 96 C36 96 20 80 22 48 C30 64 40 74 56 82' },
    { d: 'M106 96 C124 96 140 80 138 48 C130 64 120 74 104 82' },
    {
      d: 'M30 72 l8 -4 M38 82 l6 -6 M130 72 l-8 -4 M122 82 l-6 -6',
      role: 'soft',
    },
    { d: 'M24 62 l6 2 M136 62 l-6 2', role: 'ambient' },
    {
      d: 'M86 132 C96 136 104 146 98 154 C92 162 80 158 84 150 C88 144 96 150 92 154 M66 134 C52 138 44 150 50 160 C56 168 70 166 68 156',
      role: 'accent',
      dashed: true,
    },
    shadow(80, 184, 44),
  ],

  // The chief warden's chair he wants for himself: the tall arch of its
  // padded back in his colour, the back's thickness and the side going away
  // hatched, the rolled arms, the seat cushion and the carved base on its
  // feet in three-quarters. He sits in it and says it will be his in
  // episode 425.
  'hannyabal': [
    { d: 'M42 112 V62 C42 18 116 18 116 62 V112', role: 'accent' },
    { d: 'M79 29 L87 23 C112 23 124 38 124 60 V106 L116 112' },
    { d: 'M52 110 V64 C52 32 106 32 106 64 V110', role: 'soft' },
    { d: 'M66 40 l4 8 M79 34 v9 M92 40 l-4 8', role: 'soft' },
    {
      d: 'M117 100 l6 -6 M117 84 l6 -6 M117 68 l6 -6 M112 36 l6 -6',
      role: 'ambient',
    },
    {
      d: 'M30 132 V104 C30 96 42 96 42 104 V116 M116 116 V104 C116 96 128 96 128 104 V122',
    },
    { d: 'M33 104 a3 3 0 1 1 6 0 M119 104 a3 3 0 1 1 6 0', role: 'soft' },
    {
      d: 'M30 132 L42 116 H128 L116 132 Z M30 132 V142 H116 V132 M116 142 L128 130 V116',
    },
    {
      d: 'M34 142 V164 H112 V142 M112 164 L124 154 V136 M40 164 v6 M106 164 v6 M120 158 v6',
    },
    { d: 'M44 150 C56 156 90 156 102 150 M60 158 h26', role: 'soft' },
    { d: 'M114 158 l8 -7 M114 148 l8 -7', role: 'ambient' },
    shadow(80, 176, 58),
  ],

  // His two crowns set down on his stage in the spotlight: the queen's crown,
  // its points and band in his colour, the far rim seen and the side going
  // away hatched, and the king's crown standing up out of it. He takes that
  // stage wearing them in episode 438.
  'emporio-ivankov': [
    { d: 'M66 6 L38 136 M94 6 L122 136', role: 'ambient', dashed: true },
    { d: 'M2 144 L20 128 H158 M2 144 H156 V162 H2 Z' },
    { d: 'M30 144 V162 M60 144 V162 M90 144 V162 M120 144 V162', role: 'soft' },
    {
      d: 'M46 112 L48 74 L62 96 L70 84 M90 84 L98 96 L112 74 L114 112',
      role: 'accent',
    },
    { d: 'M46 112 C46 120 114 120 114 112 V124 C114 132 46 132 46 124 Z' },
    { d: 'M46 112 C48 106 112 106 114 112', role: 'soft' },
    {
      d: dots([
        [62, 124],
        [80, 126],
        [98, 124],
      ]),
      role: 'soft',
    },
    { d: 'M104 120 l6 -6 M104 130 l8 -8', role: 'ambient' },
    {
      d: 'M66 104 V70 L73 58 L80 70 L87 58 L94 70 V104 M66 70 C66 74 94 74 94 70',
      role: 'accent',
    },
    { d: 'M80 58 v-8 M76 54 h8', role: 'soft' },
    shadow(80, 136, 40),
  ],

  // His wine glass, the left half of the rim, bowl, stem and foot in his
  // colour and the right half plain, the way his hair and clothes are split;
  // the wine inside hatched. He carries it through the frozen fifth level in
  // episode 438.
  'inazuma': [
    { d: 'M80 58 C62 58 50 55 50 50 C50 45 62 42 80 42', role: 'accent' },
    { d: 'M80 42 C98 42 110 45 110 50 C110 55 98 58 80 58' },
    { d: 'M50 50 C48 98 64 118 80 118', role: 'accent' },
    { d: 'M110 50 C112 98 96 118 80 118' },
    { d: 'M53 82 C60 87 100 87 107 82', role: 'soft' },
    { d: 'M56 92 h48 M60 100 h40 M66 108 h28', role: 'ambient' },
    {
      d: 'M77 118 V160 C70 162 58 164 54 168 C54 172 66 174 80 174',
      role: 'accent',
    },
    { d: 'M83 118 V160 C90 162 102 164 106 168 C106 172 94 174 80 174' },
    {
      d: 'M54 168 C54 164 66 162 80 162 C94 162 106 164 106 168',
      role: 'soft',
    },
    shadow(80, 184, 38),
  ],

  // Raiu leaning on the bars of his level-six cell: the diamond-wrapped
  // handle on the floor, the square guard at a slant, the long blade up to
  // its tip with the edge in his colour, and his cigar on the floor, not yet
  // lit. He gets the sword back and asks for a light in episode 444.
  'shiryu': [
    {
      d: 'M30 14 V162 M58 14 V162 M86 14 V162 M114 14 V162 M142 14 V162 M8 162 H156',
      role: 'ambient',
    },
    {
      d: 'M28.3 161.9 L47.2 138.6 M23.7 158.1 L42.6 134.8 M23.7 158.1 L28.3 161.9',
    },
    {
      d: 'M26 152 l10 -4 M30 146 l10 -4 M34 141 l9 -4 M26 152 l6 3 M30 146 l8 4 M34 141 l8 4',
      role: 'soft',
    },
    { d: 'M54.6 140.7 L50.8 145.3 L35.3 132.7 L39 128.1 Z' },
    { d: 'M44.5 132.5 L138 22' },
    { d: 'M49.1 136.3 C90 92 120 50 138 22', role: 'accent' },
    { d: 'M62 108 l3 3 M80 87 l3 3 M98 66 l3 3', role: 'ambient' },
    {
      d: 'M100 154 L132 148 M101 160 L133 154 M100 154 C97 155 98 160 101 160',
    },
    { d: 'M132 148 C135 148 136 153 133 154 M108 153 l1 6', role: 'soft' },
    shadow(80, 172, 60),
  ],

  // His championship belt lying in a loop: the strap with its gold ribs, the
  // far side seen inside, and the great round plate at the front, its rim in
  // his colour, its face left blank, the edge turning away hatched. He wears
  // it in Mock Town in episode 146.
  'jesus-burgess': [
    { d: 'M14 108 C14 84 146 84 146 108' },
    { d: 'M28 108 C30 94 130 94 132 108', role: 'soft' },
    {
      d: 'M14 108 C14 118 28 124 46 128 M114 128 C132 124 146 118 146 108 M14 126 C14 136 28 142 46 146 M114 146 C132 142 146 136 146 126 M14 108 V126 M146 108 V126',
    },
    {
      d: 'M22 115 v17 M30 119 v17 M38 122 v18 M122 122 v18 M130 119 v17 M138 115 v17',
      role: 'soft',
    },
    { d: ellipse(80, 130, 34, 28), role: 'accent' },
    { d: ellipse(80, 130, 25, 20), role: 'soft' },
    { d: 'M46 133 C46 152 62 162 80 162 C98 162 114 152 114 133' },
    { d: 'M98 156 l9 -9 M106 150 l6 -7', role: 'ambient' },
    { d: 'M66 119 C72 114 88 114 94 119', role: 'soft' },
    shadow(80, 172, 66),
  ],

  // Senriku, laid at a slant: the stock with its wood hatched, the lock and
  // its wheel, the forestock under half the long barrel, the two sights, and
  // the flared muzzle in his colour; three gulls far off. He shoots gulls
  // nobody else can see in episode 146.
  'van-augur': [
    {
      d: 'M8 100 L46 106 V116 L8 124 C4 116 4 108 8 100 Z',
      transform: SENRIKU,
    },
    {
      d: 'M14 104 l4 14 M22 105 l4 13 M30 106 l3 11',
      role: 'ambient',
      transform: SENRIKU,
    },
    { d: 'M46 104 H72 V118 H46', transform: SENRIKU },
    {
      d: 'M54 111 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 M58 107 v-3 M52 116 C52 124 62 124 62 118',
      role: 'soft',
      transform: SENRIKU,
    },
    { d: 'M72 110 H104 V116 H72', transform: SENRIKU },
    { d: 'M72 104 H134 M104 110 H134', transform: SENRIKU },
    {
      d: `M84 104 v-4 ${ellipse(84, 96.5, 1.5, 3.5)} M124 104 v-4 ${ellipse(124, 96.5, 1.5, 3.5)}`,
      role: 'soft',
      transform: SENRIKU,
    },
    {
      d: `M134 104 C140 104 146 100 150 96 M134 110 C140 110 146 114 150 118 ${ellipse(150, 107, 3, 11)}`,
      role: 'accent',
      transform: SENRIKU,
    },
    {
      d: 'M14 30 q4 -5 8 0 q4 -5 8 0 M38 18 q3 -4 6 0 q3 -4 6 0 M34 42 q3 -4 6 0 q3 -4 6 0',
      role: 'soft',
    },
    shadow(70, 158, 54),
  ],

  // His basket of apples in three-quarters, the handle over it, the wicker's
  // shaded side hatched, and one apple set apart in his colour with smoke
  // coming off it: some of the apples he offers explode. He offers them in
  // Mock Town in episode 146.
  'doc-q': [
    { d: 'M24 112 C24 50 104 50 104 112 M30 112 C30 58 98 58 98 112' },
    {
      d: 'M28 110 C26 92 52 88 54 106 M52 104 C50 82 80 82 78 102 M78 102 C80 88 104 90 100 110',
      role: 'soft',
    },
    { d: 'M64 86 l2 -6 M90 92 l3 -5 M40 94 l-2 -5', role: 'soft' },
    { d: ellipse(64, 112, 42, 11) },
    { d: 'M22 112 L32 162 C46 172 82 172 96 162 L106 112' },
    {
      d: 'M26 132 C44 142 84 142 102 132 M29 148 C46 157 82 157 99 148',
      role: 'soft',
    },
    { d: 'M94 128 l8 -6 M92 144 l8 -6 M90 158 l7 -5', role: 'ambient' },
    {
      d: `${circle(132, 156, 11)} M132 145 l2 -7 M134 140 c4 -4 10 -3 12 0 c-4 3 -8 3 -12 0`,
      role: 'accent',
    },
    {
      d: 'M120 132 c-6 -6 0 -14 6 -10 c2 -8 14 -8 14 0 c8 -2 12 8 4 12',
      role: 'soft',
      dashed: true,
    },
    shadow(66, 178, 46),
    shadow(132, 172, 14),
  ],

  // His top hat standing on its brim, the band and the brim's curl, the far
  // side of the crown hatched, and his cane lying across the floor in his
  // colour, its crook hooked under the brim. He walks into the Warlords'
  // meeting with both in episode 151.
  'laffitte': [
    { d: ellipse(76, 132, 50, 12) },
    {
      d: 'M26 132 C26 124 34 120 42 120 M126 132 C126 124 118 120 110 120',
      role: 'soft',
    },
    { d: 'M48 126 L52 56 M104 126 L100 56' },
    { d: ellipse(76, 56, 24, 7) },
    {
      d: 'M49 110 C49 116 103 116 103 110 M50 100 C50 106 102 106 102 100',
      role: 'soft',
    },
    { d: 'M90 70 l8 -6 M90 84 l10 -8 M90 98 l10 -8', role: 'ambient' },
    {
      d: 'M150 178 L58 136 C52 132 44 130 40 134 C36 140 42 146 46 142',
      role: 'accent',
    },
    { d: 'M150 178 l-4 4', role: 'soft' },
    shadow(80, 154, 60),
  ],

  // A Ferris wheel with its cabins hanging from the rim, bubbles drifting past.
  'sabaody-archipelago': [
    { d: circle(80, 84, 52), role: 'accent' },
    {
      d: 'M80 84 L132 84 M80 84 L116.8 120.8 M80 84 L80 136 M80 84 L43.2 120.8 M80 84 L28 84 M80 84 L43.2 47.2 M80 84 L80 32 M80 84 L116.8 47.2',
      role: 'soft',
    },
    { d: circle(80, 84, 6) },
    {
      d: 'M127 87 h10 v8 h-10z M111.8 123.8 h10 v8 h-10z M75 139 h10 v8 h-10z M38.2 123.8 h10 v8 h-10z M23 87 h10 v8 h-10z M38.2 50.2 h10 v8 h-10z M75 35 h10 v8 h-10z M111.8 50.2 h10 v8 h-10z',
    },
    { d: 'M80 84 L50 166 M80 84 L110 166' },
    {
      d: `${circle(22, 40, 7)} ${circle(142, 150, 6)} ${circle(146, 30, 4)}`,
      role: 'ambient',
    },
    { d: 'M-4 166 H164', role: 'ambient' },
    ...SEA.slice(2),
  ],

  // Her string of big pearls lying in a loose loop, the near ones larger and
  // in her colour with the light on them, the far ones plain, one end
  // trailing to the front with its hook and the other with its ring. She
  // wears it on the Marineford scaffold in episode 484.
  'catarina-devon': [
    {
      d: `${circle(138.5, 134.2, 5.7)} ${circle(128.4, 141.4, 6.1)} ${circle(113, 146.8, 6.4)} ${circle(94, 149.6, 6.6)} ${circle(73.9, 149.6, 6.6)} ${circle(55, 146.8, 6.4)} ${circle(39.5, 141.4, 6.1)} ${circle(26.5, 153.5, 6.4)} ${circle(20, 166, 6.2)} ${circle(18, 179, 6)}`,
      role: 'accent',
      transform: PEARLS,
    },
    {
      d: `${circle(26, 126, 5.3)} ${circle(29.5, 117.8, 4.9)} ${circle(39.6, 110.6, 4.5)} ${circle(55, 105.2, 4.2)} ${circle(74, 102.4, 4)} ${circle(94.1, 102.4, 4)} ${circle(113, 105.2, 4.2)} ${circle(128.5, 110.6, 4.5)} ${circle(138.5, 117.8, 4.9)} ${circle(142, 126, 5.3)}`,
      transform: PEARLS,
    },
    {
      d: 'M135.3 133.1 a3.4 3.4 0 0 1 2.9 -2.6 M125 140.2 a3.7 3.7 0 0 1 3.1 -2.8 M109.4 145.5 a3.9 3.9 0 0 1 3.2 -2.9 M90.4 148.3 a3.9 3.9 0 0 1 3.3 -3 M70.3 148.3 a3.9 3.9 0 0 1 3.3 -3 M51.4 145.5 a3.9 3.9 0 0 1 3.2 -2.9 M36.2 140.2 a3.7 3.7 0 0 1 3.1 -2.8',
      role: 'soft',
      transform: PEARLS,
    },
    {
      d: 'M33.5 145.5 L30 148 M23.5 159 L22 160.5 M26 131.3 C25 134 24 136 22 138 M18 185 C16 190 22 192 24 188',
      role: 'soft',
      transform: PEARLS,
    },
    { d: 'M22 138 c-4 2 -4 7 0 8 c3 1 5 -2 3 -4', transform: PEARLS },
    {
      d: 'M60 158 l6 -3 M80 160 l6 -3 M100 158 l6 -3 M118 154 l6 -3',
      role: 'ambient',
      transform: PEARLS,
    },
    { ...shadow(84, 170, 60), transform: PEARLS },
  ],

  // A drinking gourd, stopper still in it.
  'vasco-shot': [
    {
      d: 'M80 44 C66 44 62 56 66 66 C46 78 40 104 44 128 C48 156 62 172 80 172 C98 172 112 156 116 128 C120 104 114 78 94 66 C98 56 94 44 80 44z',
      role: 'accent',
    },
    { d: 'M68 40 h24 v8 h-24z' },
    { d: 'M46 96 C60 90 100 90 114 96', role: 'soft', dashed: true },
    { d: 'M54 66 C40 58 34 66 40 74 M106 66 c14 -8 20 0 14 8' },
    { d: 'M124 150 q6 -12 12 0 q-6 14 -12 0z M130 150 v18', role: 'soft' },
    shadow(80, 184, 42),
  ],

  // The top of a fortress wall, small and far off, and behind it, far bigger,
  // the top of his head with its spiky round hair, his ears and the slope of
  // his shoulders. No face: he rises behind Marine headquarters in
  // episode 484.
  'san-juan-wolf': [
    {
      d: 'M-4 140 H2 V134 H8 V140 H14 V134 H20 V140 H26 V134 H32 V140 H38 V134 H44 V140 H50 V134 H56 V140 H62 V134 H68 V140 H74 V134 H80 V140 H86 V134 H92 V140 H98 V134 H104 V140 H110 V134 H116 V140 H122 V134 H128 V140 H134 V134 H140 V140 H146 V134 H152 V140 H158 V134 H164',
    },
    { d: 'M-4 182 H164', role: 'ambient' },
    { d: 'M-4 150 H164 M-4 160 H164 M-4 170 H164', role: 'soft' },
    {
      d: 'M12 140 V150 M36 140 V150 M60 140 V150 M84 140 V150 M108 140 V150 M132 140 V150 M156 140 V150 M24 150 V160 M48 150 V160 M72 150 V160 M96 150 V160 M120 150 V160 M144 150 V160',
      role: 'ambient',
    },
    {
      d: 'M45 140 C37.5 110 45 77.5 80 72.5 C115 77.5 122.5 110 115 140',
      role: 'accent',
    },
    {
      d: 'M42.4 117.5 L33.5 119.4 M43.5 106.8 L34.5 106.1 M46.5 96.9 L38 94 M51.6 88.1 L43.9 83.2 M58.8 81 L52.4 74.5 M68.1 75.6 L63.5 67.8 M91.9 75.6 L91.8 66.5 M101.2 81 L103.2 72 M108.4 88.1 L112.4 80 M113.5 96.9 L119.2 89.9 M116.5 106.8 L123.9 101.5 M117.6 117.5 L126.1 114.4',
      role: 'accent',
    },
    {
      d: 'M57.5 95 l6.2 -6.2 M72.5 87.5 l6.2 -6.2 M87.5 87.5 l6.2 -6.2 M100 97.5 l6.2 -6.2 M62.5 110 l6.2 -6.2 M92.5 110 l6.2 -6.2',
      role: 'soft',
    },
    {
      d: 'M42.5 112.5 C32.5 107.5 30 125 42.5 130 M117.5 112.5 C127.5 107.5 130 125 117.5 130',
    },
    {
      d: 'M45 140 C25 120 -7.5 117.5 -27.5 122.5 M115 140 C135 120 167.5 117.5 187.5 122.5',
    },
    {
      d: 'M-2.5 130 l7.5 7.5 M12.5 127.5 l7.5 10 M147.5 127.5 l-7.5 10 M162.5 130 l-7.5 7.5',
      role: 'ambient',
    },
  ],

  // His patterned fur collar laid down in a ring, ragged at the edge, the
  // bead necklaces draped across it, and the two white horns on their black
  // plates resting on top. No crown: that comes after the timeskip. He stands
  // on the scaffold with Blackbeard in episode 484.
  'avalo-pizarro': [
    {
      d: 'M14 150 L22 144 L16 136 L28 132 L26 122 L40 122 L44 112 L56 118 L66 108 L76 116 L86 108 L96 116 L106 108 L114 118 L126 114 L128 124 L140 126 L136 136 L148 140 L140 148 L148 156 L136 160 L138 170 L124 170 L118 178 L106 172 L94 180 L84 172 L72 180 L62 172 L50 178 L42 170 L28 172 L28 162 L16 158 Z',
    },
    {
      d: 'M44 146 C44 132 116 132 116 146 C116 156 44 156 44 146 Z',
      role: 'soft',
    },
    {
      d: 'M50 140 l4 6 M60 136 l3 6 M100 136 l-3 6 M110 140 l-4 6',
      role: 'ambient',
    },
    { d: 'M34 128 C44 160 116 160 126 128', role: 'soft' },
    {
      d: dots([
        [36, 136],
        [42, 146],
        [52, 154],
        [64, 158],
        [80, 160],
        [96, 158],
        [108, 154],
        [118, 146],
        [124, 136],
        [46, 164],
        [62, 170],
        [80, 172],
        [98, 170],
        [114, 164],
      ]),
      role: 'soft',
    },
    {
      d: 'M40 116 L54 112 L58 124 L44 128 Z M106 112 L120 116 L116 128 L102 124 Z',
    },
    { d: 'M44 118 l6 6 M108 116 l6 6', role: 'ambient' },
    {
      d: 'M48 114 C36 102 32 84 38 66 C44 82 52 96 56 112 M112 114 C124 102 128 84 122 66 C116 82 108 96 104 112',
      role: 'accent',
    },
    { d: 'M38 88 l7 -2 M122 88 l-7 -2', role: 'soft' },
    shadow(80, 190, 60),
  ],

  // His Marine cap set on his folded crimson suit, the rose in the lapel's
  // buttonhole in his colour. He sits under the scaffold in that suit from
  // episode 459. The fleet admiral's braid is added from 570, in
  // `summitWarRedrawn`.
  'sakazuki': [...CAP_ON_SUIT, { d: SAKAZUKI_ROSE, role: 'accent' }],

  // A diamond the size of a shoulder plate.
  'jozu': [
    { d: 'M80 36 L128 88 L80 164 L32 88z', role: 'accent' },
    { d: 'M32 88 h96', role: 'accent' },
    { d: 'M56 62 L68 88 L80 164 M104 62 L92 88', role: 'soft' },
    { d: 'M56 62 h48' },
    { d: 'M22 104 L44 96 M138 104 L116 96' },
    { d: 'M46 172 h68', role: 'ambient', dashed: true },
    shadow(80, 182, 40),
  ],

  // His two sabres crossed, each with its knuckle guard seen round, over his
  // top hat with its shaded side hatched. He holds the front line in the bay
  // with both in episode 461.
  'vista': [
    { d: 'M35.9 121.7 L131.9 15.7 L128.1 12.3 L32.1 118.3 Z' },
    { d: 'M127.9 118.3 L31.9 12.3 L28.1 15.7 L124.1 121.7 Z' },
    {
      d: 'M24 120 C20 132 36 140 46 130 M136 120 C140 132 124 140 114 130 M30 112 l12 12 M130 112 l-12 12',
      role: 'accent',
    },
    { d: 'M34 120 l-6 8 M126 120 l6 8', role: 'soft' },
    { d: `${ellipse(80, 116, 22, 5)} M58 116 V158 M102 116 V158` },
    { d: 'M58 150 C70 154 90 154 102 150', role: 'soft' },
    {
      d: 'M40 160 C40 154 58 154 58 158 M102 158 C102 154 120 154 120 160 C120 168 40 168 40 160',
    },
    { d: 'M90 124 l8 -4 M90 134 l8 -4 M90 144 l8 -4', role: 'ambient' },
    shadow(80, 182, 44),
  ],

  // His katana, sheathed, on the slant: the dark scabbard with its slight
  // curve and its far face hatched, the collar at its mouth, the big round
  // guard as the accent, the wrapped grip and its cap. The guard and the
  // grip are the ones he wears at his hip when he sends his crew into the
  // bay in episode 462, and holds as he leaps in at ch. 553 pp. 12-13.
  'squard': [
    {
      d: 'M90 95 Q50 92 12 94 Q6 100 12 106 Q50 105 90 105 Z',
      transform: SQUARD_KATANA,
    },
    { d: 'M86 99 Q50 97 16 98', role: 'soft', transform: SQUARD_KATANA },
    {
      d: 'M24 99 l-5 6 M33 99 l-5 6 M42 99 l-5 6 M51 99 l-5 6 M60 99 l-5 6 M69 99 l-5 6 M78 99 l-5 6 M87 99 l-5 6',
      role: 'ambient',
      transform: SQUARD_KATANA,
    },
    { d: 'M90 94 h4 v12 h-4', transform: SQUARD_KATANA },
    { d: ellipse(98, 100, 4.5, 16), role: 'accent', transform: SQUARD_KATANA },
    {
      d: 'M98 84 h4 M98 116 h4 M102 84 a4.5 16 0 0 1 0 32',
      role: 'accent',
      transform: SQUARD_KATANA,
    },
    { d: 'M106 95 H140 M106 105 H140', transform: SQUARD_KATANA },
    {
      d: 'M109 95 l5 10 M116 95 l5 10 M123 95 l5 10 M130 95 l5 10 M114 105 l5 -10 M121 105 l5 -10 M128 105 l5 -10',
      role: 'soft',
      transform: SQUARD_KATANA,
    },
    { d: 'M140 94 h4 q4 6 0 12 h-4 z', transform: SQUARD_KATANA },
    shadow(80, 164, 56),
  ],

  // A straw hat woven out of rope, big enough for a giant.
  'little-oars-jr': [
    { d: ellipse(80, 130, 66, 22), role: 'accent' },
    { d: 'M34 124 C36 66 124 66 126 124' },
    { d: 'M34 124 q46 22 92 0', role: 'soft' },
    { d: 'M46 100 q34 14 68 0 M40 112 q40 16 80 0', role: 'soft' },
    { d: 'M50 84 q30 12 60 0', role: 'soft' },
    { d: 'M52 72 V126 M80 66 V130 M108 72 V126', role: 'soft' },
    shadow(80, 168, 60),
  ],

  // A chair at the council table, an officer's coat over its back.
  'tsuru': [
    { d: 'M50 36 V120 M110 36 V120 M50 36 h60' },
    { d: 'M40 120 h80 v10 h-80z' },
    { d: 'M44 130 V178 M116 130 V178' },
    { d: 'M46 44 h68 l6 70 h-20 l-4 -40 h-32 l-4 40 h-20z', role: 'accent' },
    { d: 'M66 44 l14 16 l14 -16', role: 'soft' },
    shadow(80, 184, 46),
  ],

  // A cap set on a sword laid across the rail.
  'momonga': [
    { d: 'M18 142 h124' },
    { d: 'M18 150 h124', role: 'soft' },
    { d: 'M34 150 V182 M126 150 V182' },
    { d: 'M28 126 h104 M28 132 h104 M132 126 l8 3 l-8 3', role: 'accent' },
    { d: 'M44 120 h8 v18 h-8z' },
    { d: 'M28 126 L18 126 M28 132 L18 132' },
    { d: 'M56 114 C56 88 116 88 116 114z' },
    { d: 'M50 114 h72' },
    { d: 'M54 122 q32 10 64 0' },
    shadow(80, 192, 56),
  ],

  // A bandits' pot over the fire, with the bowls waiting.
  'curly-dadan': [
    { d: 'M46 76 h52 l-6 42 h-40z' },
    { d: 'M40 76 h64' },
    { d: 'M52 76 C52 58 92 58 92 76', role: 'soft' },
    { d: 'M98 86 q12 4 10 14' },
    {
      d: 'M56 158 c4 -16 14 -22 12 -34 c10 8 12 18 10 26 c6 -4 8 -12 6 -20 c10 10 12 22 6 30z',
      role: 'accent',
    },
    { d: 'M92 154 c2 -10 8 -14 8 -22 c6 6 8 14 6 22z', role: 'accent' },
    {
      d: 'M16 164 h30 l-6 18 h-18z M66 164 h30 l-6 18 h-18z M116 164 h30 l-6 18 h-18z',
    },
    { d: 'M8 182 h144', role: 'ambient' },
  ],

  // A top hat with goggles on the brim, and a pipe beside it. The pipe burns
  // with Ace's flame from 678, in `summitWarRedrawn`.
  'sabo': [
    ...TOP_HAT,
    { d: 'M124 44 V172 M134 44 V172' },
    { d: 'M124 44 q5 -4 10 0 M124 172 q5 4 10 0' },
    shadow(78, 170, 42),
  ],

  // A crown of flowers laid on a cradle.
  'portgas-d-rouge': [
    { d: 'M30 110 h100 l-10 48 h-80z' },
    { d: 'M30 110 h100', role: 'soft' },
    { d: 'M40 158 C40 176 120 176 120 158', role: 'soft' },
    { d: 'M24 168 C24 184 136 184 136 168', role: 'ambient', dashed: true },
    { d: 'M40 88 C52 60 108 60 120 88', role: 'accent' },
    {
      d: `${circle(48, 86, 8)} ${circle(80, 66, 8)} ${circle(112, 86, 8)}`,
      role: 'accent',
    },
  ],

  // A cane with a gilded knob, leaning on an empty seat of the VIP row.
  'rosward': [
    { d: 'M42 118 V58 q30 -12 60 0 V118' },
    { d: 'M50 70 q22 -8 44 0 V112 H50z', role: 'soft' },
    { d: 'M36 118 h72 v10 h-72z' },
    { d: 'M40 128 v44 M104 128 v44' },
    { d: 'M130 176 L117 66', role: 'accent' },
    { d: circle(116, 58, 8), role: 'accent' },
    { d: 'M113 76 l9 -1', role: 'accent' },
    shadow(84, 180, 54),
  ],

  // A small pistol laid across an open fan.
  'shalria': [
    { d: 'M40 124 Q80 84 120 124' },
    {
      d: 'M80 162 L40 124 M80 162 L58 108 M80 162 L80 102 M80 162 L102 108 M80 162 L120 124',
      role: 'soft',
    },
    { d: 'M52 132 h52 v8 h-52z', role: 'accent' },
    { d: 'M96 140 l6 22 h10 l-4 -22', role: 'accent' },
    { d: 'M86 140 q0 8 8 8', role: 'accent' },
    { d: 'M44 128 q-6 -6 0 -12 q6 -6 0 -12', role: 'ambient', dashed: true },
    shadow(80, 178, 48),
  ],

  // An auctioneer's gavel on its block, and a pair of star-shaped glasses.
  'disco': [
    { d: 'M34 150 h60 v12 h-60z' },
    { d: 'M40 106 h44 v18 h-44z', role: 'accent' },
    { d: 'M50 106 v18 M74 106 v18', role: 'soft' },
    { d: 'M84 115 L132 132' },
    { d: `${star(106, 70, 14, 6)} ${star(140, 70, 14, 6)}`, role: 'accent' },
    { d: 'M120 68 q3 -3 6 0' },
    shadow(64, 172, 40),
  ],

  // An explosive collar lying open, its chain still wound round the stake.
  'jean-bart': [
    { d: 'M36 124 a34 12 0 0 0 68 0', role: 'accent' },
    { d: 'M36 124 C36 100 60 88 84 92', role: 'accent' },
    { d: 'M62 132 h16 v10 h-16z' },
    { d: dot(70, 137), role: 'accent' },
    {
      d: `${ellipse(98, 116, 6, 3)} ${ellipse(110, 108, 6, 3)} ${ellipse(121, 100, 6, 3)}`,
    },
    { d: 'M128 60 V168 M122 60 h12 M124 168 l4 8 l4 -8' },
    { d: 'M122 92 q6 4 12 0 M122 102 q6 4 12 0', role: 'soft' },
    shadow(80, 184, 50),
  ],

  // A cluster of forest mushrooms, and the smoke she followed to find them.
  'sweet-pea': [
    { d: 'M40 120 C40 94 88 94 88 120z', role: 'accent' },
    { d: 'M56 120 V160 M72 120 V160' },
    { d: 'M92 136 C92 120 118 120 118 136z', role: 'accent' },
    { d: 'M100 136 V160 M110 136 V160' },
    {
      d: dots([
        [54, 108],
        [70, 103],
        [80, 112],
        [104, 129],
      ]),
      role: 'soft',
    },
    {
      d: 'M126 112 c-10 -12 10 -20 0 -32 c-10 -12 10 -20 0 -32',
      role: 'ambient',
      dashed: true,
    },
    { d: 'M16 160 h128', role: 'ambient' },
  ],

  // A pair of sandals, one big enough to stand the other inside it.
  'aphelandra': [
    {
      d: 'M40 64 C40 36 96 36 96 64 L92 160 C92 186 44 186 44 160z',
      role: 'accent',
    },
    { d: 'M44 90 C60 76 76 76 92 90 M46 124 h44', role: 'accent' },
    { d: 'M68 50 v14', role: 'soft' },
    { d: 'M58 112 C58 100 78 100 78 112 L76 152 C76 162 60 162 60 152z' },
    { d: 'M60 126 h16', role: 'soft' },
    shadow(70, 192, 40),
  ],

  // Three arrows in a roof beam, beside the hole a man went out through.
  'kikyo': [
    { d: 'M10 60 L80 24 L150 60' },
    { d: 'M96 40 l6 -6 l8 4 l6 -4 l4 10 l-8 6 l-10 -2z', role: 'soft' },
    { d: 'M10 64 h140 v16 h-140z' },
    { d: 'M30 150 L48 80 M60 156 L66 80 M94 152 L84 80', role: 'accent' },
    {
      d: 'M30 150 l-6 4 M30 150 l2 8 M60 156 l-6 2 M60 156 l4 6 M94 152 l-4 6 M94 152 l6 2',
      role: 'accent',
    },
    {
      d: 'M44 80 l-4 -4 M52 80 l4 -4 M64 80 l-2 -6 M86 80 l4 -5',
      role: 'soft',
    },
    { d: 'M20 176 h120', role: 'ambient', dashed: true },
  ],

  // The island's great mountain from the sea, split by the deep valley where
  // the village stands, a river running out of it, and the curved snake
  // statues carved either side. Luffy lands on it in episode 408.
  'amazon-lily': [
    {
      d: 'M-4 150 C8 132 16 110 22 92 C28 74 34 62 44 60 C54 62 60 68 64 76 M96 70 C100 50 106 30 118 26 C128 28 134 48 138 72 C144 104 152 132 164 150',
    },
    { d: 'M64 76 C68 100 60 128 52 150 M96 70 C92 98 100 128 108 150' },
    { d: 'M64 76 C72 66 88 62 96 70', role: 'soft' },
    {
      d: 'M94 84 l-6 4 M93 98 l-6 4 M94 112 l-6 4 M98 126 l-6 4',
      role: 'ambient',
    },
    {
      d: 'M12 140 C10 124 18 108 30 100 C26 110 24 118 26 126 M148 116 C152 102 148 88 136 82 C140 90 142 98 140 104',
      role: 'accent',
    },
    {
      d: 'M60 140 l6 -6 l6 6 M74 142 l6 -6 l6 6 M88 140 l6 -6 l6 6 M60 140 v6 M72 140 v6 M74 142 v6 M86 142 v6 M88 140 v6 M100 140 v6 M80 148 C76 152 84 154 80 158',
      role: 'soft',
    },
    {
      d: 'M34 76 l6 -4 M30 88 l6 -4 M126 50 l-6 -4 M130 62 l-6 -4',
      role: 'ambient',
    },
    ...SEA,
  ],

  // A cap tossed on the arena sand, three claw marks raked beside it.
  'bacura': [
    { d: ellipse(80, 156, 66, 20), role: 'soft' },
    {
      d: 'M44 124 C44 96 88 90 96 114 C98 122 92 128 80 128 H50 C46 128 44 126 44 124z',
      role: 'accent',
    },
    { d: 'M94 120 c14 -2 26 4 30 10 c-10 4 -22 2 -30 -4', role: 'accent' },
    { d: 'M50 128 c-8 10 -10 20 -6 30', role: 'accent' },
    { d: 'M58 110 q14 -8 28 0', role: 'soft' },
    { d: 'M104 150 l16 -20 M114 154 l16 -20 M124 158 l16 -20' },
    shadow(80, 186, 50),
  ],

  // A beetle's horned helmet set down on a broad leaf.
  'heracles': [
    {
      d: 'M22 160 C40 128 120 124 140 150 C118 172 44 176 22 160z',
      role: 'soft',
    },
    { d: 'M26 158 C60 150 100 148 136 150', role: 'soft' },
    { d: 'M52 142 C52 104 108 104 108 142z' },
    { d: 'M60 130 h40', role: 'soft' },
    { d: 'M80 110 C78 84 88 60 108 46 C104 62 96 80 90 110', role: 'accent' },
    { d: 'M72 112 C68 98 60 90 48 86 C54 96 60 106 64 114', role: 'accent' },
    shadow(80, 184, 48),
  ],

  // A pair of cuffs lying open on an inspection tray.
  'domino': [
    { d: 'M24 150 h112 l-10 16 h-92z' },
    { d: 'M34 158 h92', role: 'soft' },
    { d: 'M46 138 A18 18 0 1 1 70 138', role: 'accent' },
    { d: 'M90 138 A18 18 0 1 1 114 138', role: 'accent' },
    { d: 'M46 138 l-6 8 M114 138 l6 8', role: 'accent' },
    { d: 'M72 112 h4 M84 112 h4 M76 112 c2 -4 6 -4 8 0 c-2 4 -6 4 -8 0z' },
    shadow(80, 180, 56),
  ],

  // The prison's great barred gate above the water, a warship moored on
  // either side of it.
  'impel-down': [
    { d: 'M38 150 V40 H122 V150' },
    { d: 'M38 40 L48 28 H112 L122 40', role: 'soft' },
    { d: 'M54 150 V84 a26 26 0 0 1 52 0 V150', role: 'accent' },
    {
      d: 'M67 150 V64 M80 150 V58 M93 150 V64 M54 104 H106 M54 126 H106',
      role: 'accent',
    },
    {
      d: dots([
        [46, 56],
        [114, 56],
        [46, 76],
        [114, 76],
      ]),
      role: 'soft',
    },
    { d: 'M-4 150 L4 164 H28 L34 150 Z M14 150 V110 M14 114 q14 12 0 28' },
    {
      d: 'M126 150 L132 164 H156 L164 150 Z M146 150 V110 M146 114 q14 12 0 28',
    },
    { d: 'M-4 150 H164', role: 'ambient' },
    ...SEA.slice(1),
  ],

  // A devil's trident with a torn net hanging off its prongs.
  'saldeath': [
    { d: 'M80 186 V56' },
    { d: 'M60 40 V60 q20 14 40 0 V40 M80 30 V56', role: 'accent' },
    {
      d: 'M60 40 l-4 6 M60 40 l4 6 M100 40 l-4 6 M100 40 l4 6 M80 30 l-4 6 M80 30 l4 6',
      role: 'accent',
    },
    { d: 'M60 64 C40 84 36 110 44 132 M100 64 C120 84 124 110 116 132' },
    {
      d: 'M60 64 L116 132 M100 64 L44 132 M50 86 L110 86 M44 110 L116 110',
      role: 'soft',
    },
    {
      d: 'M44 132 l6 10 M116 132 l-4 12 M80 132 v8',
      role: 'soft',
      dashed: true,
    },
    shadow(80, 190, 30),
  ],

  // A whip coiled on the floor, its tip cracking in the air.
  'sadi': [
    { d: 'M28 168 l30 -14 l4 8 l-30 14z' },
    { d: ellipse(92, 158, 34, 10), role: 'accent' },
    { d: ellipse(92, 150, 28, 8), role: 'accent' },
    {
      d: 'M62 158 C70 150 78 150 92 142 C120 124 96 90 118 66 C126 58 134 52 140 40',
      role: 'accent',
    },
    { d: 'M140 40 l8 -6 M140 40 l10 2 M140 40 l2 -10', role: 'soft' },
    shadow(88, 178, 48),
  ],

  // A spiked club leaning over a belt with a hoof-shaped buckle.
  'minotaurus': [
    {
      d: 'M94 174 C98 150 104 110 106 72 C108 54 132 54 130 74 C126 110 110 150 102 176z',
    },
    {
      d: dots([
        [112, 70],
        [124, 74],
        [116, 90],
        [108, 102],
        [120, 104],
      ]),
    },
    { d: 'M20 140 h76 v14 h-76z' },
    {
      d: dots([
        [28, 147],
        [36, 147],
      ]),
      role: 'soft',
    },
    {
      d: 'M46 154 v-18 c0 -10 12 -10 12 0 v18 M58 154 v-18 c0 -10 12 -10 12 0 v18',
      role: 'accent',
    },
    shadow(78, 186, 54),
  ],

  // The Headquarters building, a castle of stacked curved roofs on a broad
  // stone base, above the bay wall.
  'marineford': [
    { d: 'M20 150 V124 H140 V150' },
    { d: 'M36 124 V100 H124 V124' },
    { d: 'M26 100 Q80 90 134 100 L124 92 H36 Z', role: 'accent' },
    { d: 'M48 92 V74 H112 V92' },
    { d: 'M38 74 Q80 64 122 74 L112 66 H48 Z', role: 'accent' },
    { d: 'M60 66 V50 H100 V66' },
    { d: 'M50 50 Q80 40 110 50 L100 42 H60 Z M80 42 V30', role: 'accent' },
    {
      d: 'M46 106 h8 v10 h-8z M66 106 h8 v10 h-8z M86 106 h8 v10 h-8z M106 106 h8 v10 h-8z M60 78 h8 v8 h-8z M76 78 h8 v8 h-8z M92 78 h8 v8 h-8z',
      role: 'soft',
    },
    { d: 'M74 150 V136 a6 6 0 0 1 12 0 V150', role: 'soft' },
    { d: 'M-4 150 H164', role: 'ambient' },
    ...SEA.slice(1),
  ],

  // A red band knotted with its tails loose, and a string of square stones
  // hanging under it.
  'doma': [
    { d: 'M30 78 v12 C30 108 130 108 130 90 v-12', role: 'accent' },
    { d: ellipse(80, 78, 50, 14), role: 'accent' },
    { d: 'M126 84 l16 -8 v18z' },
    {
      d: 'M140 88 C152 104 146 122 152 138 M136 94 C142 112 134 128 138 146',
      role: 'soft',
    },
    { d: 'M44 128 C56 166 104 166 116 128', role: 'soft' },
    {
      d: `${polygon(56, 148, 6, 4)} ${polygon(80, 158, 6, 4)} ${polygon(104, 148, 6, 4)}`,
    },
    shadow(80, 186, 44),
  ],

  // A giant's sabre snapped in two on the ground: the hilt with its knuckle
  // bow and hatched grip, a stub of blade, the shards, and the long curved
  // blade lying apart, both breaks in his colour. It shatters on Oars Jr.'s
  // blade in his first charge, episode 464.
  'lacroix': [
    { d: 'M16 158 L44 144 L40 136 L12 150 Z' },
    {
      d: 'M17 150 l3 6 M24 146 l3 6 M31 143 l3 6 M37 140 l3 6',
      role: 'ambient',
    },
    { d: 'M38 128 L48 150 M16 160 C16 176 44 172 46 148' },
    { d: 'M44 136 L64 128 M47 144 L66 136', role: 'soft' },
    { d: 'M84 144 C108 138 132 126 152 104 C134 132 110 148 86 154' },
    { d: 'M90 148 C112 142 132 130 148 112', role: 'soft' },
    {
      d: 'M64 128 l3 3 l-4 2 l4 2 l-1 1 M84 144 l3 3 l-4 2 l4 3 l-1 2',
      role: 'accent',
    },
    {
      d: dots([
        [72, 140],
        [76, 150],
        [70, 146],
        [78, 132],
      ]),
      role: 'accent',
    },
    shadow(82, 178, 70),
  ],

  // An icebreaker's iron-shod prow, and the floes it has split.
  'whitey-bay': [
    { d: 'M18 118 H116 L148 134 L116 150 H26 Z' },
    { d: 'M130 124 l6 4 l-4 2 l8 2 l-8 2 l4 2 l-6 4', role: 'accent' },
    { d: 'M116 118 L148 134 L116 150', role: 'accent' },
    { d: 'M60 118 V40' },
    { d: 'M60 46 q30 20 0 56', role: 'soft' },
    { d: 'M148 134 l6 -10 M148 134 l8 4 M146 140 l4 10', role: 'soft' },
    { d: 'M4 172 l20 -6 l18 4 l-4 8 h-30z M100 174 l22 -8 l26 6 l-6 10 h-38z' },
    { d: 'M4 158 h152', role: 'ambient' },
  ],

  // A heavy cutlass driven into the frozen bay, cracks running from the
  // blade.
  'blenheim': [
    { d: 'M78 28 V8 M86 28 V8 M78 8 h8' },
    { d: 'M58 30 H106 M106 30 C114 20 104 8 86 8' },
    {
      d: 'M72 30 H92 C96 70 96 110 84 150 C78 120 74 80 72 30z',
      role: 'accent',
    },
    { d: 'M10 150 H150', role: 'soft' },
    {
      d: 'M84 150 l-14 14 l-10 -4 l-18 16 M84 150 l18 10 l8 -6 l20 14 M84 150 l2 22',
    },
    { d: 'M20 170 l20 6 M118 176 l20 -6', role: 'ambient' },
    shadow(84, 190, 40),
  ],

  // A horned helmet cracked across the crown, its blue mane hanging behind.
  'salome': [
    { d: 'M40 120 C40 70 120 70 120 120 Z' },
    {
      d: 'M50 96 C34 80 30 60 40 40 C44 60 54 76 64 86 M110 96 C126 80 130 60 120 40 C116 60 106 76 96 86',
    },
    { d: 'M80 78 l-6 10 l8 6 l-4 10', role: 'soft' },
    { d: 'M36 120 h88 v8 h-88z' },
    {
      d: 'M44 128 q-6 20 2 40 M60 128 q-4 22 2 44 M76 128 q-2 22 2 46 M92 128 q2 22 -2 44 M108 128 q6 20 -2 40',
      role: 'accent',
    },
    shadow(80, 186, 48),
  ],

  // A flintlock, the smoke still coming off the muzzle.
  'bluejam': [
    { d: 'M40 80 h92 v12 h-92z' },
    { d: 'M40 92 C34 110 28 128 34 150 h20 C52 130 58 110 64 92' },
    { d: 'M56 80 l-8 -12 l6 -2 l8 12' },
    { d: 'M64 92 q6 18 18 0', role: 'soft' },
    {
      d: 'M134 84 c8 -8 18 -4 18 4 c8 0 10 10 2 14 c4 8 -6 14 -12 8',
      role: 'accent',
    },
    {
      d: dots([
        [148, 68],
        [154, 60],
      ]),
      role: 'ambient',
    },
    shadow(80, 170, 50),
  ],

  // One spiked glove clenched in a fist, seen from the front: the four
  // fingers curled, the thumb across them, the side of the hand and the cuff
  // hatched, a spike on every knuckle. He puts them on to beat Luffy in the
  // hold of the wreck in episode 495.
  'porchemy': [
    {
      d: 'M42 108 V72 a9 9 0 0 1 18 0 a9 9 0 0 1 18 0 a9 9 0 0 1 18 0 a9 9 0 0 1 18 0 V100',
    },
    { d: 'M114 72 L122 66 C130 70 132 90 128 112 L120 128', role: 'soft' },
    {
      d: 'M60 72 V98 M78 72 V100 M96 72 V100 M44 86 q7 4 14 0 M62 86 q7 4 14 0 M80 86 q7 4 14 0 M98 86 q7 4 14 0',
      role: 'soft',
    },
    {
      d: 'M38 112 C38 100 50 96 60 100 L100 112 C110 116 108 128 98 128 H56 C46 128 38 122 38 112 Z',
    },
    {
      d: 'M38 112 C36 124 40 134 46 140 M114 100 C118 112 120 124 116 138 M46 140 L42 168 H122 L116 138 Z',
    },
    { d: 'M44 152 H120', role: 'soft' },
    {
      d: 'M118 74 l6 -4 M122 86 l6 -4 M124 98 l5 -3 M122 110 l5 -3 M104 156 l6 -12 M114 156 l4 -10',
      role: 'ambient',
    },
    {
      d: 'M45 64 l6 -18 l6 18 M63 64 l6 -18 l6 18 M81 64 l6 -18 l6 18 M99 64 l6 -18 l6 18',
      role: 'accent',
    },
    shadow(82, 182, 46),
  ],

  // An open dictionary with its ribbon hanging, and a short sword behind it.
  'dogra': [
    { d: 'M132 150 L146 40' },
    { d: 'M124 146 l16 6 M132 150 l-3 22' },
    { d: 'M20 120 L80 132 L140 120 V64 L80 76 L20 64z' },
    { d: 'M80 76 V132' },
    {
      d: 'M30 78 l40 8 M30 90 l40 8 M30 102 l40 8 M90 86 l40 -8 M90 98 l40 -8 M90 110 l40 -8',
      role: 'soft',
    },
    { d: 'M76 132 v36 l5 -6 l5 6 v-36', role: 'accent' },
    shadow(76, 182, 50),
  ],

  // His blue pointed hat on its brim, the far side of the cone hatched; beside
  // it a wind knot, two knots still tied and the end undone, the gust it lets
  // loose curling up. He shows Nami how they work on Weatheria.
  'haredas': [
    { d: 'M14 132 C14 122 106 122 106 132 C106 142 14 142 14 132 Z' },
    {
      d: 'M26 128 C40 100 50 66 58 40 C62 30 72 24 82 30 C76 32 72 38 70 46 C74 76 84 104 94 128',
    },
    { d: 'M30 118 C46 126 76 126 90 116', role: 'soft' },
    {
      d: 'M78 60 l-6 4 M82 76 l-7 4 M86 92 l-7 4 M90 108 l-7 4',
      role: 'ambient',
    },
    { d: 'M90 162 C104 150 116 166 128 156' },
    { d: `${circle(102, 156, 4)} ${circle(118, 160, 4)}`, role: 'soft' },
    {
      d: 'M128 156 C140 146 146 128 136 120 C128 114 118 122 124 130 C128 134 134 130 132 126',
      role: 'accent',
    },
    {
      d: 'M110 112 c8 -10 22 -10 30 -2 M118 100 c8 -6 16 -6 22 0',
      role: 'accent',
      dashed: true,
    },
    shadow(66, 150, 50),
    shadow(112, 176, 26),
  ],

  // A stamp set down beside the papers it has just signed off.
  'kong': [
    { d: 'M20 132 L108 120 L132 152 L44 164z' },
    { d: 'M28 124 L116 112 L140 144', role: 'soft' },
    { d: circle(84, 44, 12) },
    { d: 'M80 56 v30 M88 56 v30' },
    { d: 'M62 86 h44 v16 h-44z', role: 'accent' },
    { d: ellipse(62, 146, 16, 5), role: 'accent' },
    shadow(84, 176, 56),
  ],
  // A shackle hanging open below a row of cell bars, one bar bent aside, the
  // end of its chain snapped.
  'shiki': [
    {
      d: 'M34 16 V96 M60 16 V96 M86 16 V40 q14 16 0 32 V96 M112 16 V96 M138 16 V96 M26 16 H146 M26 96 H146',
      role: 'soft',
    },
    {
      d: 'M100.4 115.1 A26 26 0 1 0 100.4 132.9 M92.9 117.8 A18 18 0 1 0 92.9 130.2 M100.4 115.1 L92.9 117.8 M100.4 132.9 L92.9 130.2',
    },
    { d: [ellipse(80, 156, 4, 7), ellipse(90, 166, 7, 4)].join(' ') },
    { d: 'M100 169 a4 7 0 1 0 5 3', role: 'accent' },
    {
      d: dots([
        [112, 174],
        [116, 182],
        [108, 186],
      ]),
      role: 'accent',
    },
    shadow(80, 188, 48),
  ],
} satisfies Drawings

/** The records of this stretch drawn again, from the episode the story changes them. */
export const summitWarRedrawn: Redrawings = {
  // The Sunny's helm, the helmsman's: a spoked wheel with eight turned
  // handles, the rim hatched on its shaded side, carried on the crest of the
  // same great wave; the cell wall and its chain are gone. Jinbe joins the
  // crew as its helmsman at 980 (ch. 976).
  'jinbe': [
    {
      episode: 980,
      chapter: 976,
      value: [
        { d: `${circle(68, 56, 30)} ${circle(68, 56, 24)}` },
        {
          d: 'M74.5 58.7 L90.2 65.2 M70.7 62.5 L77.2 78.2 M65.3 62.5 L58.8 78.2 M61.5 58.7 L45.8 65.2 M61.5 53.3 L45.8 46.8 M65.3 49.5 L58.8 33.8 M70.7 49.5 L77.2 33.8 M74.5 53.3 L90.2 46.8',
        },
        {
          d: [
            'M95.7 67.5 L104 70.9 M79.5 83.7 L82.9 92 M56.5 83.7 L53.1 92 M40.3 67.5 L32 70.9 M40.3 44.5 L32 41.1 M56.5 28.3 L53.1 20 M79.5 28.3 L82.9 20 M95.7 44.5 L104 41.1',
            circle(107.3, 72.3, 2.5),
            circle(84.3, 95.3, 2.5),
            circle(51.7, 95.3, 2.5),
            circle(28.7, 72.3, 2.5),
            circle(28.7, 39.7, 2.5),
            circle(51.7, 16.7, 2.5),
            circle(84.3, 16.7, 2.5),
            circle(107.3, 39.7, 2.5),
          ].join(' '),
        },
        {
          d: 'M92.1 60.3 L97.1 61.1 M90.2 66.4 L94.7 68.5 M86.8 71.7 L90.6 75 M82.1 76.1 L84.9 80.2 M76.4 79 L78.1 83.7 M70.1 80.4 L70.6 85.4 M63.7 80.1 L62.9 85.1',
          role: 'ambient',
        },
        { d: `${circle(68, 56, 7)} ${dot(68, 56)}`, role: 'accent' },
        ...GREAT_WAVE.map((stroke) => ({
          // The same wave, smaller, so its crest carries the wheel.
          ...stroke,
          transform: 'translate(16 44) scale(0.8)',
        })),
        ...SEA.slice(1),
      ],
    },
  ],

  // The same top hat, and the same pipe held at a slant, Ace's flame
  // running up its top third. Sabo eats the Flame-Flame Fruit at 678 (ch. 744).
  'sabo': [
    {
      episode: 678,
      chapter: 744,
      value: [
        ...TOP_HAT,
        {
          d: 'M124 44 V172 M134 44 V172',
          transform: 'translate(-14 0) rotate(22 129 108)',
        },
        {
          d: 'M124 44 q5 -4 10 0 M124 172 q5 4 10 0',
          transform: 'translate(-14 0) rotate(22 129 108)',
        },
        // Ace's flame, copied from his first drawing in `alabasta.ts`, and
        // lit three times along the pipe, smaller each time down.
        ...[
          'translate(57 -12)',
          'translate(129 77) scale(0.7) translate(-80 -70)',
          'translate(122 94) scale(0.5) translate(-80 -70)',
        ].flatMap((transform): Stroke[] => {
          return [
            {
              d: 'M80 70 C64 54 76 40 78 22 C82 36 96 40 96 56 C96 66 88 72 80 70z',
              role: 'accent',
              transform,
            },
            {
              d: 'M82 60 c-6 -8 0 -14 2 -22 c2 8 8 10 6 18',
              role: 'accent',
              transform,
            },
          ]
        }),
        shadow(78, 170, 42),
      ],
    },
  ],

  // The same cap on the same suit, its band now the fleet admiral's braid in
  // his colour: a twisted cord along the front and a short looped cord hung
  // from its side, the rank Sengoku wore handed down. The rose stays, plain.
  // Jinbe tells the crew he won the seat at 570 (ch. 650).
  'sakazuki': [
    {
      episode: 570,
      chapter: 650,
      value: [
        ...CAP_ON_SUIT,
        { d: SAKAZUKI_ROSE, role: 'soft' },
        {
          d: 'M43.2 89.8 c2.4 1.2 -0.3 6.6 2.1 7.8 M47.1 91.9 c2.8 1 0.8 6.7 3.7 7.6 M52.1 93.6 c3.1 0.7 1.8 6.6 4.9 7.3 M57.7 95 c3.4 0.5 2.5 6.4 5.9 6.9 M63.9 95.9 c3.5 0.2 3.2 6.2 6.6 6.4 M70.3 96.3 c3.5 -0.1 3.7 5.9 7.2 5.9 M76.9 96.1 c3.5 -0.3 4.1 5.6 7.6 5.3 M83.3 95.5 c3.4 -0.6 4.5 5.3 7.8 4.7 M89.3 94.5 c3.1 -0.9 4.8 4.9 7.9 4 M94.8 92.9 c2.8 -1.2 5.2 4.3 8 3.1 M99.5 91 c2.4 -1.5 5.6 3.6 8 2.1',
          role: 'accent',
        },
        {
          d: 'M108 94 C116 96 118 104 113 108 C109 110 106 106 109 103 M113 108 v4 M111 108 l-2 4 M115 107 l2 4',
          role: 'accent',
        },
      ],
    },
  ],

  // A horseshoe magnet, beside the metal arm Kid wears after the timeskip:
  // wires out of the socket, two rods and a spring piston down the forearm,
  // hatched on its shaded side, a riveted wrist block and jointed fingers.
  // First seen clearly at 603 (ch. 677); a silhouette only at 600.
  'eustass-kid': [
    {
      episode: 603,
      chapter: 677,
      value: [
        ...MAGNET.map((stroke) => ({
          // Smaller and to the left, to leave the right half to the arm.
          ...stroke,
          transform: 'translate(-10 22) scale(0.75)',
        })),
        {
          d: `${ellipse(122, 40, 18, 6)} M104 40 V52 M140 40 V52 M104 52 q18 8 36 0`,
        },
        {
          d: 'M114 35 c-6 -6 4 -10 -2 -18 M130 35 c6 -6 -4 -10 2 -18',
          role: 'ambient',
        },
        { d: 'M110 57 V114 M134 57 V114' },
        {
          d: 'M118 60 l8 4 l-8 4 l8 4 l-8 4 l8 4 l-8 4 l8 4 l-8 4 l8 4 l-8 4 l8 4 l-8 4 V114 M126 108 V114',
        },
        {
          d: 'M127 62 l6 -3 M127 74 l6 -3 M127 86 l6 -3 M127 98 l6 -3 M127 110 l6 -3',
          role: 'ambient',
        },
        { d: 'M100 114 h44 v24 h-44z' },
        { d: 'M100 128 h44', role: 'ambient' },
        {
          d: dots([
            [105, 119],
            [139, 119],
            [105, 133],
            [139, 133],
          ]),
        },
        { d: 'M100 124 l-10 8 l3 7 l9 -5' },
        // Four fingers, each in two joints, fanned a little from the wrist.
        ...[
          [104, 14],
          [116, 5],
          [128, -5],
          [140, -14],
        ].map(([x = 0, angle = 0]): Stroke => {
          return {
            d: `M${String(x - 4)} 141 h8 v14 h-8z M${String(x - 4)} 158 h8 v11 l-4 5 l-4 -5z`,
            transform: `rotate(${String(angle)} ${String(x)} 138)`,
          }
        }),
        { d: polygon(34, 172, 7, 6) },
        { d: polygon(66, 180, 7, 6) },
        { d: polygon(84, 160, 6, 6) },
      ],
    },
  ],
}
