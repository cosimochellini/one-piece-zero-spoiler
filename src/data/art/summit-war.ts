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

/** The slant Saldeath's trident lies at, its butt resting on the net. */
const SALDEATH_TRIDENT =
  'translate(80 104) rotate(56) scale(1.15) translate(-80 -104)'

/** Mirrors a stroke across the middle of the box. */
const MIRROR = 'translate(160 0) scale(-1 1)'

/** One of the rocky peaks either side of Marine Headquarters. */
const MARINEFORD_PEAK = 'M2 132 C8 108 12 84 20 64 C26 80 30 104 34 132'

/** The small tower and plain flag on top of that peak. */
const MARINEFORD_TOWER = 'M16 68 V58 h8 v10 M20 58 V44 l10 3 l-10 3'

/** A Marine warship side on, two masts with a square sail each. */
const WARSHIP =
  'M0 0 h28 l-5 8 h-18 z M9 0 v-22 M19 0 v-18 M4 -18 h10 v8 h-10 z M14 -14 h10 v7 h-10 z'

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

/** One of Bepo's boots, drawn twice: the near one and the one set back. */
const BEPO_BOOT = 'M0 0 H32 V24 C48 26 62 30 64 42 V48 H0 Z'
const BEPO_SOLE = 'M0 42 H64 M32 24 C30 32 28 38 26 42'
const BEPO_FAR = 'translate(84 92)'
const BEPO_NEAR = 'translate(14 108)'

/** The beads of Dadan's necklace, laid in a ring on the ground. */
const DADAN_BEADS = (
  [
    [130, 152],
    [127, 156.8],
    [118.3, 161],
    [105, 164.1],
    [88.7, 165.8],
    [71.3, 165.8],
    [55, 164.1],
    [41.7, 161],
    [33, 156.8],
    [30, 152],
    [33, 147.2],
    [41.7, 143],
    [55, 139.9],
    [71.3, 138.2],
    [88.7, 138.2],
    [105, 139.9],
    [118.3, 143],
    [127, 147.2],
  ] as const
)
  .map(([x, y]) => circle(x, y, 3.5))
  .join(' ')

/** One petal of Rouge's hibiscus, turned five ways round the flower's heart. */
const HIBISCUS_PETAL =
  'M78 104 C64 96 56 80 60 68 C62 60 68 58 72 60 C74 56 80 55 84 58 C88 56 94 58 96 62 C102 74 92 94 78 104 Z'

/** The hibiscus tipped back into three-quarters. */
const HIBISCUS_TILT = 'translate(0 30) scale(1 0.7)'

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

  // Marine Headquarters, the castle of many storeys at the back of
  // Marineford: the stacked roofs in the record's colour, the near side
  // hatched, the two rocky peaks either side with a flagged tower on top, and
  // the brick quay in front. On screen from episode 45; no kanji, no gull and
  // no cannons, which come in episode 459.
  'marineford-arc': [
    { d: 'M6 132 H154 V150 H6 Z' },
    { d: 'M20 141 h20 M54 141 h24 M94 141 h22 M128 141 h18', role: 'soft' },
    { d: 'M38 132 V90 H122 V132' },
    {
      d: 'M38 104 H122 M38 118 H122 M50 94 v6 M62 94 v6 M98 94 v6 M110 94 v6',
      role: 'soft',
    },
    { d: 'M122 90 l10 -6 V126 l-10 6', role: 'soft' },
    { d: 'M126 96 l4 -3 M126 108 l4 -3 M126 120 l4 -3', role: 'ambient' },
    { d: 'M62 90 V76 H98 V90 M68 66 V56 H92 V66 M74 46 V40 H86 V46' },
    {
      d: 'M50 78 q8 -2 14 -10 H96 q6 8 14 10 M58 58 q6 -2 10 -8 H92 q4 6 10 8 M64 42 q5 -2 8 -8 H88 q3 6 8 8 M80 34 V26',
      role: 'accent',
    },
    { d: MARINEFORD_PEAK },
    { d: MARINEFORD_PEAK, transform: MIRROR },
    { d: MARINEFORD_TOWER },
    { d: MARINEFORD_TOWER, transform: MIRROR },
    {
      d: 'M6 100 l6 -4 M8 114 l6 -4 M146 100 l6 -4 M146 114 l6 -4',
      role: 'ambient',
    },
    ...SEA,
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

  // The Sea Rabbit at the foot of the Red Line: it comes up out of the dark
  // after the Shark Submerge and surfaces beside the Sunny, where Luffy beats
  // it and it spits out Camie and Pappag (episode 385). Its scaled neck is
  // arched, the far side hatched, the furred head turned to the left with no
  // face, the long ears in the record's colour; behind it the wall's rough
  // top, its sheer face and strata. The archipelago is not in sight until
  // episode 390.
  'sabaody': [
    {
      d: 'M-4 58 L12 54 L24 60 L40 52 L50 55 M96 50 L102 49 L118 54 L134 48 L150 53 L164 50',
    },
    {
      d: 'M24 60 C22 90 26 120 24 150 M134 48 C136 82 132 116 136 150',
      role: 'soft',
    },
    {
      d: 'M-4 74 H36 M-4 94 H34 M-4 114 H40 M-4 134 H58 M128 70 H164 M126 90 H164 M132 110 H164 M134 130 H164',
      role: 'ambient',
      dashed: true,
    },
    { d: 'M122 152 C126 118 110 98 90 92 M94 152 C96 130 88 114 74 106' },
    {
      d: 'M74 106 C62 106 50 104 44 98 C36 92 36 80 46 74 C54 68 70 68 80 74 C88 78 92 86 90 92',
    },
    {
      d: 'M60 70 C54 52 52 34 58 22 C66 32 70 52 68 70 M72 70 C74 52 80 36 90 26 C94 40 88 58 80 74',
      role: 'accent',
    },
    { d: 'M74 106 q4 -5 8 0 q4 -5 8 0 q3 -4 6 -2', role: 'soft' },
    {
      d: 'M100 108 q6 5 12 0 M102 124 q6 5 12 0 M104 140 q6 5 12 0 M86 120 q5 4 10 0 M90 136 q5 4 10 0',
      role: 'soft',
    },
    { d: 'M114 112 l6 -4 M118 126 l6 -4 M120 140 l6 -4', role: 'ambient' },
    {
      d: 'M80 154 C84 148 90 148 94 152 M122 152 C126 148 132 148 136 154',
      role: 'soft',
    },
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

  // Impel Down from the deck of the warship coming in: the round wall standing
  // out of the sea, its barred gate in the record's colour, the near side
  // hatched, the tower in the middle, and Marine warships moored round it.
  // Episode 422 shows the fleet; the levels below come in episode 423.
  'impel-down-arc': [
    // The rims break behind the tower.
    { d: 'M72 76.2 A54 20 0 1 0 88 76.2' },
    { d: 'M72 82.3 A36 12 0 1 0 88 82.3', role: 'soft' },
    { d: 'M26 96 V114 C26 130 134 130 134 114 V96' },
    { d: 'M110 122 l6 -8 M120 118 l6 -8 M128 112 l5 -7', role: 'ambient' },
    { d: 'M70 126 V112 a10 10 0 0 1 20 0 V126', role: 'accent' },
    { d: 'M75 105 V126 M80 103 V126 M85 105 V126 M70 114 H90', role: 'soft' },
    { d: 'M72 92 V70 H88 V92 M76 70 V62 H84 V70' },
    {
      d: 'M10 116 q5 -3 10 0 q5 3 10 0 M140 116 q5 -3 10 0 q5 3 10 0 M36 130 q5 -3 10 0 q5 3 10 0 M104 130 q5 -3 10 0 q5 3 10 0',
      role: 'soft',
    },
    { d: WARSHIP, transform: 'translate(0 152) scale(1.15)' },
    { d: WARSHIP, transform: 'translate(126 152) scale(1.15)' },
    { d: WARSHIP, transform: 'translate(-2 98) scale(0.9)' },
    { d: WARSHIP, transform: 'translate(136 96) scale(0.9)' },
    ...SEA.slice(1),
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

  // One of his gauntlets lying on its side, the cuff flaring open towards the
  // reader and its inside hatched, and on the axle at its end the long sickle
  // blade curling over it in his colour, its edge bevelled. He has the blade
  // on the gauntlet when Drake breaks up his fight with Urouge in episode 392
  // (chapter 498).
  'killer': [
    { d: ellipse(32, 150, 8, 18) },
    { d: 'M30 140 l4 -3 M29 150 l6 -5 M30 160 l5 -4', role: 'ambient' },
    {
      d: 'M32 132 C40 136 46 137 54 136 L76 133 M32 168 C40 164 46 163 54 164 L76 167',
    },
    {
      d: 'M76 133 C83 137 83 163 76 167 M76 133 H82 C90 137 90 163 82 167 H76',
    },
    { d: 'M54 136 C60 141 60 159 54 164', role: 'soft' },
    { d: 'M44 164 l5 -5 M58 165 l5 -5 M70 166 l4 -4', role: 'ambient' },
    { d: 'M88 150 H102' },
    { d: ellipse(103, 150, 3, 6), role: 'soft' },
    {
      d: 'M104 146 C142 120 140 44 94 36 C80 34 66 40 56 52 C74 46 92 50 102 62 C118 80 118 116 98 150 Z',
      role: 'accent',
    },
    { d: 'M70 44 C88 42 104 52 114 68 C126 90 124 118 110 138', role: 'soft' },
    shadow(66, 182, 48),
  ],

  // His small brown boots standing side by side, the near one with its top
  // in his colour and its shaded side hatched, the far one set back. He wears
  // them behind Law at Sabaody in episode 392 (chapter 498).
  'bepo': [
    { d: BEPO_BOOT, transform: BEPO_FAR, role: 'soft' },
    { d: ellipse(16, 0, 16, 5), transform: BEPO_FAR, role: 'soft' },
    { d: BEPO_SOLE, transform: BEPO_FAR, role: 'soft' },
    { d: BEPO_BOOT, transform: BEPO_NEAR },
    { d: ellipse(16, 0, 16, 5), transform: BEPO_NEAR, role: 'accent' },
    { d: BEPO_SOLE, transform: BEPO_NEAR, role: 'soft' },
    {
      d: 'M4 10 l6 6 M4 22 l6 6 M4 34 l6 6',
      transform: BEPO_NEAR,
      role: 'ambient',
    },
    shadow(82, 168, 70),
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

  // Her anaconda tail rising out of its coil on the arena floor, the outer
  // edge in her colour, bands across the scales and the shaded side hatched,
  // the tip curling at the top. She turns into a half snake to fight Luffy
  // in the arena in episode 412 (chapter 518).
  'boa-sandersonia': [
    {
      d: 'M44 136 C14 140 10 158 36 166 C66 174 116 172 132 160 C146 150 132 136 104 134',
    },
    {
      d: 'M52 148 C40 150 38 156 50 158 C70 162 104 160 116 154 C122 150 116 146 104 146',
      role: 'soft',
    },
    {
      d: 'M58 142 C50 116 54 92 78 80 C104 66 112 44 98 30 C90 22 78 26 80 36 C82 42 90 40 90 36',
      role: 'accent',
    },
    { d: 'M86 140 C78 116 80 100 98 88 C126 70 132 40 110 20' },
    {
      d: 'M58 126 l24 -2 M60 108 l22 4 M68 92 l18 8 M86 80 l12 12 M102 64 l16 6 M108 48 l16 0 M24 156 l8 -8 M46 168 l4 -10 M120 164 l-4 -10',
      role: 'soft',
    },
    {
      d: 'M114 72 l8 -4 M122 56 l8 -2 M90 118 l8 -2 M128 154 l8 -4',
      role: 'ambient',
    },
    { d: 'M0 180 H160 M30 190 l14 -10 M106 190 l16 -10', role: 'ambient' },
    shadow(76, 186, 60),
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

  // His drinking gourd in three-quarters, the stopper in, a cord round its
  // waist and the rope he carries it by trailing off to the side in his
  // colour, the far side hatched. No lettering. He drinks from it at
  // Marineford in episode 484.
  'vasco-shot': [
    {
      d: 'M74 56 C62 60 60 82 70 95 C44 104 38 150 62 165 C72 171 88 171 98 165 C122 150 116 104 90 95 C100 82 98 60 86 56',
    },
    { d: `${ellipse(80, 56, 6, 2)} M75 56 V47 M85 56 V47` },
    { d: ellipse(80, 46, 5, 2), role: 'soft' },
    {
      d: 'M69 94 C74 99 86 99 91 94 M69 94 C72 90 88 90 91 94',
      role: 'accent',
    },
    {
      d: 'M91 96 C106 98 116 110 120 128 C124 148 130 164 146 170 M90 98 C98 106 102 116 100 124',
      role: 'accent',
    },
    { d: 'M52 132 C52 118 56 110 64 104', role: 'soft' },
    { d: 'M102 122 l9 -7 M104 138 l10 -8 M98 156 l10 -8', role: 'ambient' },
    shadow(80, 180, 46),
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

  // The kasa Ace made for him, a wide cone of woven straw, its brim in his
  // colour and its chin cords trailing, lying on the frozen bay. He
  // remembers the gift in episode 464.
  'little-oars-jr': [
    { d: 'M14 128 C40 116 66 100 80 84 C94 100 120 116 146 128' },
    { d: 'M14 128 C14 152 146 152 146 128', role: 'accent' },
    {
      d: 'M14 128 C16 118 40 112 52 111 M146 128 C144 118 120 112 108 111',
      role: 'soft',
    },
    {
      d: 'M38 121 C52 134 108 134 122 121 M58 105 C68 113 92 113 102 105',
      role: 'soft',
    },
    { d: 'M80 84 L64 146 M80 84 L96 146', role: 'soft' },
    { d: 'M114 110 l5 8 M124 116 l5 8 M134 122 l4 7', role: 'ambient' },
    {
      d: 'M100 147 C108 158 120 162 138 160 M104 146 C116 152 128 152 146 148',
      role: 'soft',
    },
    {
      d: 'M4 172 L40 166 L58 176 M100 178 L124 168 L156 174 M28 188 L52 182',
      role: 'ambient',
    },
    shadow(80, 160, 68),
  ],

  // Her vice admiral's coat worn on the shoulders, seen from behind with
  // nobody in it, her two-tone epaulettes on top. At Marineford, episode 461.
  'tsuru': [
    { d: ellipse(80, 41, 22, 4.5) },
    { d: 'M58 41 C58 45 61 48 65 51 Q80 54 95 51 C99 48 102 45 102 41' },
    { d: 'M72 43 l5 -4 M84 43 l6 -5', role: 'ambient' },
    {
      d: 'M64 50 C50 50 40 52 32 60 L24 176 Q80 186 136 176 L128 60 C120 52 110 50 96 50',
    },
    {
      d: 'M32 62 C26 80 20 106 18 136 L34 139 C36 112 38 88 40 70 M128 62 C134 80 140 106 142 136 L126 139 C124 112 122 88 120 70',
    },
    { d: 'M18 128 L35 131 M142 128 L125 131', role: 'soft' },
    {
      d: 'M18 60 C12 48 34 40 62 46 L62 56 C46 58 30 66 18 60 M142 60 C148 48 126 40 98 46 L98 56 C114 58 130 66 142 60',
      role: 'accent',
    },
    {
      d: [
        circle(39, 52, 1.5),
        circle(47, 51, 1.5),
        circle(121, 52, 1.5),
        circle(113, 51, 1.5),
      ].join(' '),
      role: 'accent',
    },
    {
      d: 'M18 63 l-4 20 M24 64 l-3 20 M30 64 l-2 20 M36 63 l-1 19 M42 62 v18 M48 61 v16 M142 63 l4 20 M136 64 l3 20 M130 64 l2 20 M124 63 l1 19 M118 62 v18 M112 61 v16',
    },
    {
      d: 'M104 100 l10 -6 M104 120 l12 -6 M106 140 l12 -6 M108 160 l14 -7',
      role: 'ambient',
    },
    shadow(80, 192, 58),
  ],

  // His katana in its scabbard, the flower-shaped guard in his colour and the
  // hilt wrapped, and beside it the tanto he stabs himself with to stay free
  // of the empress's charm in episode 410.
  'momonga': [
    { d: 'M44 136 L120 108 M48 146 L124 118' },
    { d: 'M120 108 C130 106 134 114 124 118', role: 'soft' },
    { d: 'M98 116 l3 8 M106 113 l3 8', role: 'soft' },
    {
      d: 'M44 132 C40 124 48 118 54 122 C56 114 66 116 66 124 C72 122 76 132 70 136 C76 140 72 150 66 148 C66 156 56 158 54 150 C48 154 40 148 44 142 C38 140 38 132 44 132 Z',
      role: 'accent',
    },
    { d: 'M42 138 L12 149 M44 147 L16 158 M12 149 L16 158' },
    { d: 'M16 151 l6 4 l3 -7 l6 4 l3 -7 l6 4', role: 'soft' },
    { d: 'M70 170 L124 156 M72 176 L126 162 M124 156 L132 158 L126 162' },
    { d: 'M84 163 C82 160 82 170 86 170', role: 'soft' },
    { d: 'M80 133 l4 -5 M90 129 l4 -5 M110 122 l4 -5', role: 'ambient' },
    shadow(76, 182, 66),
  ],

  // A lit cigarette laid across her pink bead necklace, the burning end in
  // her colour and its smoke rising. The wiki's Appearance, cited to her
  // introduction in episode 477: "seen smoking a cigarette … a pink beaded
  // necklace".
  'curly-dadan': [
    { d: DADAN_BEADS, role: 'soft' },
    { d: 'M36 140 L118 120 M38 149 L120 129' },
    { d: `${ellipse(37, 144.5, 2.5, 4.5)} M50 137 l2 9`, role: 'soft' },
    {
      d: `M110 121.5 l2 9 ${ellipse(119, 124.5, 2.5, 4.5)} M114 120 l1 4`,
      role: 'accent',
    },
    {
      d: 'M121 120 C114 106 130 98 124 84 C118 70 132 62 126 48',
      role: 'soft',
    },
    { d: 'M60 146 l4 6 M80 141 l4 6 M100 136 l4 6', role: 'ambient' },
    shadow(80, 182, 58),
  ],

  // A top hat with goggles on the brim, and a pipe beside it. The pipe burns
  // with Ace's flame from 678, in `summitWarRedrawn`.
  'sabo': [
    ...TOP_HAT,
    { d: 'M124 44 V172 M134 44 V172' },
    { d: 'M124 44 q5 -4 10 0 M124 172 q5 4 10 0' },
    shadow(78, 170, 42),
  ],

  // A hibiscus in three-quarters, five petals opening round the long stamen
  // in her colour, a leaf on the stem. She wears one in her hair when she
  // is first shown, in episode 459.
  'portgas-d-rouge': [
    { d: HIBISCUS_PETAL, transform: HIBISCUS_TILT },
    { d: HIBISCUS_PETAL, transform: `${HIBISCUS_TILT} rotate(72 78 104)` },
    { d: HIBISCUS_PETAL, transform: `${HIBISCUS_TILT} rotate(144 78 104)` },
    { d: HIBISCUS_PETAL, transform: `${HIBISCUS_TILT} rotate(216 78 104)` },
    { d: HIBISCUS_PETAL, transform: `${HIBISCUS_TILT} rotate(288 78 104)` },
    { d: 'M78 103 C88 90 98 80 112 72', role: 'accent' },
    {
      d: dots([
        [110, 70],
        [116, 70],
        [114, 66],
        [110, 76],
        [116, 76],
      ]),
      role: 'accent',
    },
    {
      d: 'M58 128 C50 140 40 150 28 154 M44 146 C30 140 22 144 18 152 C28 158 38 156 44 146',
    },
    { d: 'M26 151 L40 148', role: 'soft' },
    { d: 'M66 112 l4 -4 M74 116 l4 -4 M84 116 l4 -4', role: 'ambient' },
    shadow(80, 176, 54),
  ],

  // His cane with its gilded knob in his colour, leaning on a front-row seat
  // of the auction house, the seat's far side hatched. He takes his seat in
  // episode 394.
  'rosward': [
    { d: 'M36 118 V62 C36 46 90 46 90 62 V118' },
    { d: 'M90 62 C96 54 104 52 108 58 V112' },
    { d: 'M44 112 V68 C44 58 82 58 82 68 V112', role: 'soft' },
    {
      d: 'M30 118 H96 V130 H30 Z M30 118 L40 112 M96 118 L110 110 V122 L96 130',
    },
    {
      d: 'M94 72 l10 -6 M94 86 l10 -6 M94 100 l10 -6 M100 124 l6 -4',
      role: 'ambient',
    },
    { d: 'M34 130 V172 M92 130 V172 M108 124 V164' },
    { d: 'M132 178 L117 70 M129 178 h6' },
    { d: `${circle(116, 61, 9)} M110 72 h12`, role: 'accent' },
    shadow(84, 182, 62),
  ],

  // One of her heart-shaped earrings on its hook, the heart in her colour
  // and the edge that turns away hatched. She wears them at the auction
  // house in episode 394 (chapter 501), as she has since her first scene.
  'shalria': [
    { d: 'M78 30 C70 22 60 30 66 40 C70 46 78 46 80 54' },
    { d: circle(80, 58, 4) },
    {
      d: 'M80 76 C72 62 50 62 50 84 C50 104 72 118 80 132 C88 118 110 104 110 84 C110 62 88 62 80 76 Z',
      role: 'accent',
    },
    { d: 'M80 62 V66 M60 80 C62 72 68 70 72 72', role: 'soft' },
    {
      d: 'M108 72 l5 -2 M110 84 l6 0 M108 96 l6 2 M102 108 l5 3 M94 118 l4 4 M86 126 l3 5',
      role: 'ambient',
    },
    shadow(84, 170, 32),
  ],

  // The auctioneer's gavel on its round block, the head and the block
  // hatched underneath, and his star-shaped glasses folded beside it so only
  // one lens shows, in his colour. He holds the gavel over the stage in
  // episode 395.
  'disco': [
    {
      d: `${ellipse(70, 150, 40, 10)} M30 150 V160 M110 150 V160 M30 160 C30 174 110 174 110 160`,
    },
    { d: 'M40 164 l6 -5 M56 168 l6 -6 M90 167 l6 -6', role: 'ambient' },
    { d: `${ellipse(46, 106, 9, 15)} M46 91 H98 M46 121 H98` },
    { d: 'M98 91 C106 91 106 121 98 121', role: 'soft' },
    { d: 'M62 91 V121 M80 91 V121', role: 'soft' },
    { d: 'M78 121 L104 146 M86 121 L110 142 M104 146 L110 142' },
    { d: 'M64 112 l6 -6 M72 116 l6 -6', role: 'ambient' },
    { d: star(128, 150, 13, 6), role: 'accent' },
    { d: 'M139 146 L154 150 L152 156 M139 154 L150 160', role: 'soft' },
    shadow(80, 184, 70),
  ],

  // The post outside the auction house, square and hatched on its far side,
  // the chain in his colour wound twice round it and run out slack along
  // the ground. He is chained to it from episode 395.
  'jean-bart': [
    { d: 'M60 52 H88 V158 H60 Z' },
    { d: 'M60 52 L70 44 H98 L88 52 M88 158 L98 150 V44' },
    {
      d: 'M90 64 l6 -6 M90 120 l6 -6 M90 136 l6 -6 M90 150 l6 -6',
      role: 'ambient',
    },
    { d: 'M68 60 V84 M68 110 V150 M78 64 V84 M78 112 V154', role: 'soft' },
    {
      d: `${ellipse(62, 88, 5, 3.5)} M67 89 h4 ${ellipse(76, 90, 5, 3.5)} M81 90 h4 ${ellipse(90, 88, 5, 3.5)} ${ellipse(62, 102, 5, 3.5)} M67 103 h4 ${ellipse(76, 105, 5, 3.5)} M81 105 h4 ${ellipse(90, 103, 5, 3.5)} M95 106 l3 4 ${ellipse(101, 116, 3.5, 5)} M102 121 l1 4 ${ellipse(104, 131, 3.5, 5)} M105 136 l1 4 ${ellipse(107, 146, 3.5, 5)} M109 151 l3 3 ${ellipse(118, 157, 5, 3.5)} M123 158 h4 ${ellipse(132, 158, 5, 3.5)} M137 158 h4 ${ellipse(146, 157, 5, 3.5)}`,
      role: 'accent',
    },
    { d: 'M70 48 H92', role: 'soft' },
    { d: 'M18 160 H56 M98 162 H104', role: 'ambient' },
    shadow(84, 170, 56),
  ],

  // A campfire of two crossed logs, the flame in her colour, its smoke
  // climbing past the treetops. She follows the smoke to Luffy in episode
  // 408.
  'sweet-pea': [
    {
      d: 'M2 86 C8 70 22 70 26 80 C30 66 46 64 52 78 C56 70 66 70 68 78 M96 80 C100 68 114 66 118 78 C124 66 140 66 144 80 C150 74 158 76 162 84',
      role: 'ambient',
    },
    { d: 'M30 160 L118 136 M36 170 L124 146' },
    { d: `${ellipse(33, 165, 4, 6)} ${ellipse(121, 141, 4, 6)}`, role: 'soft' },
    { d: 'M44 136 L126 166 M40 146 L122 176' },
    { d: `${ellipse(42, 141, 4, 6)} ${ellipse(124, 171, 4, 6)}`, role: 'soft' },
    {
      d: 'M80 150 C64 140 62 124 72 112 C72 122 78 124 80 118 C80 106 86 98 94 92 C92 104 100 112 98 124 C102 120 104 116 104 110 C112 124 104 142 90 150',
      role: 'accent',
    },
    {
      d: 'M86 88 C76 78 92 70 84 60 C76 50 92 42 84 32 C78 24 86 16 92 12',
      role: 'soft',
    },
    shadow(80, 186, 60),
  ],

  // One of her tall brown boots, laced up the front, its back hatched and its
  // top in her colour, her sword in its scabbard lying behind it. She wears
  // both from her first scene in episode 408.
  'aphelandra': [
    { d: 'M70 46 V128 C70 136 64 140 52 142 C34 144 26 150 26 158 H92 V46' },
    { d: ellipse(81, 46, 11, 4), role: 'accent' },
    { d: 'M92 46 L100 52 V150 L92 158' },
    {
      d: 'M94 64 l5 -5 M94 80 l5 -5 M94 96 l5 -5 M94 112 l5 -5 M94 128 l5 -5 M94 144 l5 -5',
      role: 'ambient',
    },
    {
      d: 'M72 60 L90 70 M90 60 L72 70 M72 76 L90 86 M90 76 L72 86 M72 92 L90 102 M90 92 L72 102',
      role: 'soft',
    },
    { d: 'M26 158 V164 H100 V150 M68 164 V158', role: 'soft' },
    {
      d: 'M8 146 H26 M8 152 H26 M8 146 C4 147 4 151 8 152 M100 146 H116 M100 152 H116',
    },
    {
      d: `${ellipse(118, 149, 2, 8)} M120 146 H146 M120 152 H146 M146 146 C150 147 150 151 146 152`,
    },
    { d: 'M124 146 l3 6 l3 -6 l3 6 l3 -6 l3 6 l3 -6', role: 'soft' },
    shadow(78, 188, 60),
  ],

  // The roof of the building where Luffy is held, rows of tiles, the hole he
  // breaks out through, and three arrows stuck in the tiles, their feathers
  // in her colour. She has the arrows loosed at him in episode 409, and a
  // frame of that episode shows them stuck in the red tiles.
  'kikyo': [
    { d: 'M10 112 L44 62 L78 112 Z M44 62 L140 40 L156 92 L78 112' },
    { d: 'M10 112 V156 H78 V112 M78 156 L156 136 V92' },
    {
      d: 'M86 150 l6 -8 M104 146 l6 -8 M122 141 l6 -8 M140 137 l6 -8',
      role: 'ambient',
    },
    {
      d: 'M52.5 74.5 A6 4 0 0 0 65.6 71.4 A6 4 0 0 0 78.6 68.4 A6 4 0 0 0 91.7 65.3 A6 4 0 0 0 104.8 62.2 A6 4 0 0 0 117.9 59.1 A6 4 0 0 0 130.9 56.1 A6 4 0 0 0 144 53 M61 87 A6 4 0 0 0 73.4 84 A6 4 0 0 0 85.9 81 M123.1 72 A6 4 0 0 0 135.6 69 A6 4 0 0 0 148 66 M69.5 99.5 A6 4 0 0 0 81.3 96.6 A6 4 0 0 0 93.1 93.6 A6 4 0 0 0 104.9 90.7 A6 4 0 0 0 116.6 87.8 A6 4 0 0 0 128.4 84.9 A6 4 0 0 0 140.2 81.9 A6 4 0 0 0 152 79',
      role: 'soft',
    },
    { d: 'M88 82 L94 72 L104 74 L110 66 L120 72 L118 80 L108 86 L96 86 Z' },
    { d: 'M96 82 l6 -6 M104 82 l8 -8 M112 78 l4 -4', role: 'ambient' },
    {
      d: 'M124 92 l6 -2 l2 4 l-6 2 z M80 104 l5 -1 l1 4 l-5 1 z',
      role: 'soft',
    },
    { d: 'M70 92 L50 42 M128 70 L124 18 M142 84 L154 38' },
    {
      d: 'M50 42 l-7 -3 M50 42 l1 -8 M53 50 l-7 -3 M53 50 l1 -8 M124 18 l-5 -5 M124 18 l5 -5 M125 27 l-5 -5 M125 27 l5 -5 M154 38 l-3 -7 M154 38 l7 -3 M152 47 l-3 -7 M152 47 l7 -3',
      role: 'accent',
    },
    { d: 'M2 160 H158', role: 'ambient' },
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

  // The black panther side on, no face, her long tail curled and her flank
  // hatched, her domed brown cap in her colour with a row of studs along the
  // rim. She is let loose in the arena in episode 412.
  'bacura': [
    {
      d: 'M20 106 C18 96 26 86 38 82 C48 78 60 80 68 88 C80 80 94 78 108 80 C126 82 142 88 150 100 C156 108 156 118 152 126',
    },
    {
      d: 'M20 106 C22 114 30 118 38 118 C46 120 52 118 56 116 C70 124 92 126 112 122 C124 120 134 120 142 124',
    },
    {
      d: 'M30 86 C32 64 64 62 72 88 M30 86 C42 80 60 80 72 88 M50 66 L52 58 L55 66',
      role: 'accent',
    },
    {
      d: dots([
        [37, 83.4],
        [44, 81.9],
        [51, 81.6],
        [58, 82.4],
        [65, 84.4],
      ]),
      role: 'soft',
    },
    {
      d: 'M54 116 C56 130 54 142 48 152 H62 C64 142 66 130 68 122 M142 124 C146 136 144 144 136 152 H150 C154 142 156 132 152 124',
    },
    {
      d: 'M76 124 C78 136 76 146 72 152 H80 M124 122 C126 134 124 144 120 152 H128',
      role: 'soft',
    },
    { d: 'M126 90 C142 96 148 110 144 124', role: 'soft' },
    { d: 'M152 110 C160 96 160 74 150 62 C144 54 134 58 138 66' },
    {
      d: 'M86 98 l8 -7 M98 104 l8 -7 M110 108 l8 -7 M122 110 l6 -5',
      role: 'ambient',
    },
    shadow(86, 166, 70),
  ],

  // The giant beetle he saves Usopp from and then eats, side on, its domed
  // shell in his colour and hatched below, six jointed legs, no face. He
  // kills it in episode 420.
  'heracles': [
    {
      d: 'M50 114 C52 86 92 74 120 82 C136 88 142 100 140 114',
      role: 'accent',
    },
    { d: 'M50 114 H140' },
    { d: 'M50 114 C44 98 30 96 24 104 C22 110 26 114 32 114 H50' },
    { d: 'M24 104 C16 104 12 110 16 116 C20 118 24 116 26 114' },
    { d: 'M16 106 C10 98 8 90 12 82 M19 104 C17 94 20 86 26 80', role: 'soft' },
    { d: 'M60 96 C84 88 112 90 132 100', role: 'soft' },
    {
      d: 'M70 110 l6 -8 M84 110 l6 -8 M98 110 l6 -8 M112 110 l6 -8 M126 110 l5 -7',
      role: 'ambient',
    },
    {
      d: 'M36 114 L28 132 L18 150 M76 114 L72 132 L80 150 M114 114 L124 132 L136 150',
    },
    {
      d: 'M44 114 L42 132 L36 150 M90 114 L92 132 L100 150 M126 114 L140 130 L150 148',
      role: 'soft',
    },
    shadow(84, 160, 70),
  ],

  // The Seastone handcuffs lying locked on the floor, two thick bands seen in
  // three-quarters, the near one in her colour, the inner walls hatched and
  // the chain between them. She brings them out to put on the empress during
  // the search in episode 422 (chapter 526).
  'domino': [
    {
      d: `${ellipse(56, 136, 32, 13)} M24 136 V146 C24 162 88 162 88 146 V136`,
      role: 'accent',
    },
    { d: `${ellipse(56, 136, 22, 8)} M34 136 V142 M78 136 V142`, role: 'soft' },
    {
      d: `${ellipse(118, 92, 24, 10)} M94 92 V100 C94 114 142 114 142 100 V92`,
    },
    { d: ellipse(118, 92, 16, 6), role: 'soft' },
    {
      d: `M88 128 L92 125 ${ellipse(92, 120, 3.5, 6)} ${ellipse(94, 110, 6, 3.5)} M98 106 L100 104`,
    },
    {
      d: 'M30 152 l4 -7 M42 156 l4 -7 M100 108 l3 -6 M110 111 l3 -6',
      role: 'ambient',
    },
    shadow(80, 178, 62),
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

  // The seastone net he drops on the intruders, lying in a heap, and the
  // barbed trident he carries laid across it, the prongs in his colour. He
  // comes with both to spring the trap in episode 431.
  'saldeath': [
    {
      d: 'M12 162 C14 152 24 150 30 144 C36 134 50 134 58 138 C66 128 84 128 92 136 C102 130 118 132 124 142 C134 144 146 152 146 162 Z',
    },
    {
      d: 'M24 150 L40 162 M40 138 L64 162 M66 132 L94 162 M92 136 L118 162 M118 138 L136 156 M22 162 L52 136 M44 162 L82 130 M72 162 L108 132 M100 162 L128 140',
      role: 'soft',
    },
    { d: 'M146 162 C152 164 156 168 150 172 H128', role: 'soft' },
    { d: 'M128 148 l6 -4 M134 156 l6 -4', role: 'ambient' },
    { d: 'M78 172 V70 M82 172 V70 M78 172 h4', transform: SALDEATH_TRIDENT },
    { d: 'M76 76 h8 v-6 h-8 z', transform: SALDEATH_TRIDENT },
    {
      d: 'M80 70 V30 M80 70 C66 70 62 62 62 40 M80 70 C94 70 98 62 98 40 M75 40 L80 26 L85 40 M57 48 L62 34 L67 48 M93 48 L98 34 L103 48',
      role: 'accent',
      transform: SALDEATH_TRIDENT,
    },
    shadow(80, 178, 66),
  ],

  // Her whip coiled on the floor, the pitchfork it hides in lying in front,
  // the lash in her colour rising to crack. She takes it to a Marine in
  // episode 432.
  'sadi': [
    { d: ellipse(78, 158, 36, 10) },
    { d: ellipse(84, 152, 34, 9) },
    { d: ellipse(80, 146, 30, 8) },
    {
      d: 'M52 160 C58 166 72 168 80 168 M58 152 C64 158 76 160 84 160',
      role: 'soft',
    },
    { d: 'M104 164 l6 -4 M110 158 l6 -4 M108 152 l6 -4', role: 'ambient' },
    { d: 'M24 182 L118 168 M25 186 L119 172 M24 182 C20 183 20 186 25 186' },
    {
      d: 'M118 168 L122 172 M122 170 L146 166 M122 170 C128 162 138 160 146 160 M122 170 C128 178 138 178 146 174',
      role: 'soft',
    },
    {
      d: 'M108 144 C122 130 112 108 124 92 C132 80 140 74 140 56 C140 46 134 40 128 38',
      role: 'accent',
    },
    { d: 'M124 32 l-6 -6 M130 30 l2 -8 M120 38 l-8 0', role: 'soft' },
    shadow(80, 192, 56),
  ],

  // His spiked club, ball-headed, lying on the floor with the far side of the
  // ball hatched, the spikes in his colour. He swings it at Luffy and Bon Kurei
  // in episode 433.
  'minotaurus': [
    { d: circle(112, 136, 20) },
    { d: 'M92 136 C96 142 128 142 132 136', role: 'soft' },
    { d: 'M118 152 l8 -8 M110 155 l12 -12 M124 146 l5 -5', role: 'ambient' },
    {
      d: 'M132 135.3 L141.5 141.2 L130.5 143.5 M126.6 149.6 L129.2 160.6 L119.8 154.4 M112.7 156 L106.8 165.5 L104.5 154.5 M98.4 150.6 L87.4 153.2 L93.6 143.8 M92 136.7 L82.5 130.8 L93.5 128.5 M97.4 122.4 L94.8 111.4 L104.2 117.6 M111.3 116 L117.2 106.5 L119.5 117.5 M125.6 121.4 L136.6 118.8 L130.4 128.2',
      role: 'accent',
    },
    { d: 'M93 133 L24 150 M95 141 L26 158' },
    { d: 'M24 150 C16 152 18 160 26 158 M88 134 L90 143' },
    { d: 'M36 147 l2 8 M44 145 l2 8 M52 143 l2 8', role: 'soft' },
    { d: 'M62 149 l8 -2 M72 146.5 l8 -2 M82 144 l6 -1.5', role: 'ambient' },
    shadow(78, 176, 64),
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

  // His great red band laid on the floor, a fat knot at the back and its two
  // tails loose, and beside it his necklace of square stones. He comes out of
  // the fog with the fleet in episode 460.
  'doma': [
    {
      d: 'M14 118 C14 108 96 108 96 118 C96 128 14 128 14 118 Z',
      role: 'accent',
    },
    {
      d: 'M14 118 C12 124 16 128 16 132 C26 142 84 142 94 132 C94 128 96 124 96 118',
      role: 'accent',
    },
    {
      d: 'M24 128 C30 134 44 136 54 136 M64 128 l3 9 M38 126 l-2 8',
      role: 'soft',
    },
    {
      d: 'M92 118 C100 110 114 112 116 122 C116 132 104 138 94 134 M100 118 C104 122 104 128 100 132',
    },
    {
      d: 'M114 116 C126 108 136 114 150 104 L146 114 L152 120 C138 126 128 122 116 126',
    },
    {
      d: 'M112 132 C120 138 122 150 134 156 L130 160 L140 164 C124 162 114 152 106 136',
    },
    { d: 'M80 134 l6 -5 M88 132 l5 -5', role: 'ambient' },
    { d: 'M40 156 C56 172 96 176 128 166', role: 'soft' },
    {
      d: 'M48 164 l4 -6 l6 4 l-4 6 z M68 170 l4 -6 l6 4 l-4 6 z M90 172 l4 -6 l6 4 l-4 6 z M112 169 l4 -6 l6 4 l-4 6 z',
    },
    shadow(80, 188, 66),
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

  // Her icebreaker side on, turned a little toward us, the steel bow in her
  // colour and the floes it has split tilting up round it. It cuts a road
  // through the frozen bay in episode 465.
  'whitey-bay': [
    { d: 'M22 92 L150 100 V152 H52 C40 140 30 120 22 92' },
    { d: 'M22 92 L44 84 L150 92 V100', role: 'soft' },
    { d: 'M22 92 C30 120 40 140 52 152', role: 'accent' },
    { d: 'M34 122 H150', role: 'soft' },
    {
      d: 'M64 150 l10 -10 M80 150 l10 -10 M96 150 l10 -10 M112 150 l10 -10 M128 150 l10 -10',
      role: 'ambient',
    },
    { d: 'M96 95 V72 H132 V97 M100 80 H128', role: 'soft' },
    { d: 'M114 72 V24 M114 30 C134 40 136 58 114 66' },
    { d: 'M-4 152 H14 M150 152 H164', role: 'ambient' },
    { d: 'M2 146 L16 130 L34 140 L28 156 Z M18 164 L44 156 L54 166 L28 174 Z' },
    { d: 'M10 140 l6 4 M20 136 l6 4 M30 162 l8 -2', role: 'ambient' },
    {
      d: 'M60 152 l14 8 l18 -2 l10 6 M100 152 l16 6 l20 -2 M58 158 l-6 12',
      role: 'soft',
    },
    shadow(90, 186, 62),
  ],

  // His huge sword, a long curved blade, lying on the frozen bay, the cup
  // guard in his colour, the far face of the blade hatched. He has it in hand
  // in the charge across the ice, episode 475.
  'blenheim': [
    { d: 'M60 136 C94 132 128 116 152 84 C134 120 100 142 62 148' },
    { d: 'M66 141 C98 137 126 122 146 96', role: 'soft' },
    {
      d: 'M98 141 l4 -6 M110 137 l4 -6 M122 131 l4 -6 M134 120 l4 -6',
      role: 'ambient',
    },
    {
      d: 'M58 122 C44 126 42 154 56 160 C64 156 66 130 58 122',
      role: 'accent',
    },
    { d: 'M52 128 C48 136 48 150 52 156', role: 'accent' },
    { d: 'M48 136 L20 146 M50 146 L22 156' },
    { d: 'M28 144 l4 8 M36 141 l4 8 M44 138 l4 8', role: 'soft' },
    { d: circle(17, 152, 5) },
    { d: 'M0 170 H160', role: 'ambient' },
    {
      d: 'M86 170 l-10 8 l-14 2 M86 170 l16 6 l6 8 M126 170 l10 10',
      role: 'soft',
    },
    shadow(84, 186, 62),
  ],

  // Salome reared out of her coil, turned away: the cracked horned skull
  // over her head, her blue hair, her scarf and spots. Episode 484.
  'salome': [
    {
      d: 'M56 54 C54 36 72 22 94 24 C114 26 126 42 122 58 C120 66 116 72 110 76',
    },
    { d: 'M56 54 C62 60 72 63 82 64 L86 69 C94 72 102 74 110 76' },
    { d: 'M96 24 l-3 8 l5 5 l-3 7 M97 35 l8 -4', role: 'soft' },
    {
      d: 'M119 42 C134 32 152 38 155 54 C157 62 154 70 149 76 C148 66 144 58 137 55 C131 52 126 53 122 57',
    },
    { d: 'M72 26 C64 14 50 9 34 11 C46 15 56 23 62 34' },
    {
      d: 'M130 38 l-2 11 M141 39 l-5 11 M150 46 l-8 8 M60 17 l-4 7',
      role: 'soft',
    },
    { d: 'M58 58 C48 58 38 60 36 66 C36 72 44 74 52 74 C62 76 70 80 75 85' },
    {
      d: 'M110 74 C120 70 132 70 146 72 C136 76 130 78 126 80 C136 82 144 86 150 94 C140 92 132 90 124 90 C132 96 136 104 136 114 C130 106 122 100 116 98 C118 104 118 110 115 116 C112 108 108 100 105 92',
      role: 'accent',
    },
    {
      d: 'M74 84 C60 102 64 118 86 130 C106 142 114 152 102 160 M106 92 C104 102 108 112 120 120 C138 134 142 158 122 170',
    },
    { d: 'M68 96 C78 102 92 104 104 100 M66 104 C76 110 92 112 106 108' },
    {
      d: 'M67 100 L52 106 L56 112 L66 106 M67 102 L58 122 L64 122 L68 108',
      role: 'soft',
    },
    { d: 'M68 114 l5 -3 M75 123 l5 -3', role: 'ambient' },
    {
      d: 'M102 160 C80 172 46 172 36 162 C28 152 44 146 66 148 M122 170 C98 186 40 184 26 168 C16 154 34 140 64 140',
    },
    {
      d: 'M30 172 l3 -4 M42 178 l2 -4 M56 181 l1 -4 M72 182 l0 -4 M88 181 l-1 -4 M104 178 l-1 -4',
      role: 'soft',
    },
    {
      d: [
        ellipse(97, 121, 8, 5),
        ellipse(121, 149, 7, 5),
        ellipse(60, 176, 8, 3.5),
        ellipse(50, 144, 7, 2.5),
      ].join(' '),
      role: 'soft',
    },
    shadow(76, 190, 56),
  ],

  // A flintlock on the ground, the cock and frizzen on its lock, the grip
  // hatched, smoke in his colour still curling off the muzzle. He shoots
  // Porchemy with it in episode 494.
  'bluejam': [
    { d: 'M58 132 L146 118 M59 138 L147 124' },
    { d: ellipse(147, 121, 2, 3.5) },
    {
      d: 'M58 132 L46 134 C36 140 26 156 30 172 L44 172 C44 160 50 150 62 144 L100 138 L59 138',
    },
    { d: 'M32 162 l8 -4 M34 168 l8 -4 M36 154 l8 -4', role: 'ambient' },
    { d: 'M62 132 L58 120 C56 116 60 112 64 114 L66 120 M60 116 l6 -2' },
    {
      d: 'M72 130 V120 l6 -2 M70 132 h10 M108 125 v6 M130 121 v6',
      role: 'soft',
    },
    { d: 'M66 144 C68 154 80 154 84 142 M72 144 l2 6' },
    { d: 'M100 136 L144 128 M30 172 h14', role: 'soft' },
    { d: 'M150 116 c4 -10 -4 -14 2 -22 c6 -8 -2 -14 4 -20', role: 'accent' },
    shadow(86, 180, 60),
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

  // His thick dictionary standing in three-quarters, the spine in his colour,
  // the far edge of the cover hatched, and in front the short sword he carries
  // on his back. Both are with him from his first scenes with Dadan's bandits.
  'dogra': [
    {
      d: 'M44 58 C38 58 36 62 36 66 V150 C36 154 38 158 44 158 H62 V58 Z',
      role: 'accent',
    },
    { d: 'M62 58 L118 68 V164 L62 158' },
    { d: 'M44 58 L100 66 L118 68 M100 66 V68', role: 'soft' },
    { d: 'M38 80 H62 M38 136 H62', role: 'soft' },
    { d: 'M70 72 l40 7 M70 150 l40 7', role: 'soft' },
    {
      d: 'M104 84 l8 -4 M104 100 l8 -4 M104 116 l8 -4 M104 132 l8 -4 M104 148 l8 -4',
      role: 'ambient',
    },
    { d: 'M30 178 L132 162 M31 182 L133 166 M132 162 L140 163 L133 166' },
    { d: ellipse(38, 179, 3, 7) },
    {
      d: 'M34 180 L14 183 M35 184 L15 187 M20 183 l1 4 M26 182 l1 4',
      role: 'soft',
    },
    shadow(80, 192, 60),
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

  // The papers on his desk at Mary Geoise, the top sheet with its corner
  // turned up and the stack's edges below, and the inkwell beside them in his
  // colour, its far side hatched. He talks over the fleet admiral's
  // resignation at that desk in chapter 594 (episode 511); the panel shows
  // the papers and the inkwell, and no stamp.
  'kong': [
    { d: 'M12 132 L92 114 L126 142 L46 162 Z' },
    { d: 'M12 132 V138 L46 168 L126 148 V142 M46 162 V168', role: 'soft' },
    { d: 'M22 124 L96 106 L120 126 M20 118 L90 100 L106 112', role: 'soft' },
    {
      d: 'M36 136 L78 126 M42 142 L86 132 M48 148 L92 138 M54 154 L82 147',
      role: 'ambient',
    },
    {
      d: 'M126 142 C118 142 112 138 110 132 C116 134 122 136 126 142',
      role: 'soft',
    },
    {
      d: 'M108 82 C108 76 114 74 118 72 V64 H130 V72 C134 74 142 76 142 82 V108 C142 114 108 114 108 108 Z',
      role: 'accent',
    },
    {
      d: `${ellipse(124, 64, 6, 2)} M108 82 C108 88 142 88 142 82`,
      role: 'soft',
    },
    { d: 'M134 90 l6 -4 M134 100 l6 -4 M136 108 l5 -3', role: 'ambient' },
    shadow(76, 180, 64),
  ],
  // An empty cell in Impel Down, the place he left: a front of bars with its
  // door shut, the door and its lock in his colour, and the stone side wall.
  // Sengoku remembers him as the first and only prisoner ever to break out,
  // episode 425.
  'shiki': [
    { d: 'M20 40 H112 M20 150 H112 M20 40 V150 M112 40 V150' },
    { d: 'M32 40 V150 M44 40 V150 M100 40 V150', role: 'soft' },
    { d: 'M56 46 H88 V150 M56 46 V150 M72 46 V150 M56 98 H88', role: 'accent' },
    { d: 'M84 92 h8 v12 h-8 z', role: 'accent' },
    { d: 'M112 40 L146 58 V136 L112 150' },
    {
      d: 'M112 66 L146 80 M112 94 L146 102 M112 122 L146 124 M128 52 V74 M134 84 V98 M124 108 V128',
      role: 'soft',
    },
    { d: 'M120 70 l8 -4 M130 76 l8 -4 M120 140 l8 -4', role: 'ambient' },
    { d: 'M20 150 L54 132 H112 M54 132 V48', role: 'ambient' },
    shadow(80, 176, 66),
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
