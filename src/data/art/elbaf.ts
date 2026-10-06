import { circle, ellipse, SEA, shadow } from '~/lib/svg/primitives'

import type { Drawings, Stroke } from './stroke'

/**
 * One of Scopper Gaban's axes, the haft upright through the origin and the
 * single-edged head at the top, its bit facing right. The drawing crosses
 * two of them, the second mirrored.
 */
const GABAN_AXE: Stroke[] = [
  { d: 'M-3 -78 H3 M-3 -78 V76 M3 -78 V76 M-3 76 Q0 82 3 76' },
  {
    d: 'M5 -72 H-6 V-54 H5 M-6 -70 h-8 v12 h8 M5 -70 L16 -68 Q22 -80 30 -86 M5 -56 L16 -58 Q22 -46 30 -40',
  },
  { d: 'M30 -86 Q44 -63 30 -40', role: 'accent' },
  { d: 'M25 -78 Q35 -63 25 -48', role: 'soft' },
  { d: 'M12 -64 l6 -6 M12 -58 l10 -10 M16 -56 l8 -8', role: 'ambient' },
]

/**
 * The hilt of Shamrock's saber, upright with the guard at y 70: a plain
 * grip, the gold guard seen as a disc in 3/4 and the round knuckle bow. The
 * saber is Cerberus, so both drawings hold it.
 */
const SHAMROCK_HILT: Stroke[] = [
  { d: 'M76 36 V65 M84 36 V65 M75 36 Q80 28 85 36' },
  { d: ellipse(80, 70, 13, 4), role: 'accent' },
  { d: 'M92.5 68.5 C106 54 100 30 85 33', role: 'accent' },
]

/**
 * One of Cerberus's spiked collars at the origin, seen in 3/4 with its
 * spikes and the flame its neck flies on. The drawing places three.
 */
const CERBERUS_COLLAR: Stroke[] = [
  {
    d: 'M-15 0 a15 6.5 0 1 0 30 0 a15 6.5 0 1 0 -30 0 M-15 0 v6 a15 6.5 0 0 0 30 0 v-6',
  },
  {
    d: 'M-15.9 6 L-13.4 11 L-10.9 6 M-10.5 8.5 L-8 13.5 L-5.5 8.5 M-2.5 9.5 L0 14.5 L2.5 9.5 M5.5 8.5 L8 13.5 L10.5 8.5 M10.9 6 L13.4 11 L15.9 6 M-15 1 l-6 2 l6 2 M15 1 l6 2 l-6 2',
    role: 'accent',
  },
  {
    d: 'M-6 16 q-6 10 2 20 q-2 -8 4 -12 q4 8 0 16 q8 -6 6 -18',
    role: 'ambient',
  },
]

/** One collar of Cerberus's moved into place. */
function collarAt(transform: string): Stroke[] {
  return CERBERUS_COLLAR.map((stroke) => ({ ...stroke, transform }))
}

/** Shamrock's sheathed saber, enlarged and leaning right. */
const SABER_TILT =
  'translate(80 104) scale(1.18) translate(-80 -108) rotate(22 80 104)'

/** The same saber drawn, leaning left to leave room for the collars. */
const DRAWN_TILT = 'translate(-30 10) rotate(-12 80 100)'

/** The two halves of Colon's wooden sword, enlarged together. */
const SWORD_HILT_HALF =
  'translate(80 96) scale(1.15) translate(-86 -134) rotate(-55 60 150)'
const SWORD_POINT_HALF =
  'translate(80 96) scale(1.15) translate(-110 -100) rotate(-4 120 150)'

/**
 * How far Goldberg's mace leans; Killingham's trident and Kiba's hammer
 * share the second one.
 */
const MACE_TILT = 'rotate(26 80 110)'
const LEAN = 'rotate(14 80 110)'

/** The tilt Sommers's sword and Ragnir are both drawn at. */
const TILT = 'rotate(-24 80 100)'

/** The drawings of the records filed in the elbaf stretch of the route. */
export const elbafArt = {
  // A longship under a square sail, a row of round shields along its side.
  'elbaf': [
    { d: 'M20 132 Q80 156 140 132 L132 118 H28 Z' },
    {
      d: 'M140 132 C150 118 150 100 138 96 c-8 -2 -10 8 -2 10',
      role: 'accent',
    },
    { d: 'M80 118 V34' },
    { d: 'M50 44 H110 L114 104 H46 Z', role: 'accent' },
    { d: 'M50 64 H110 M48 84 H112', role: 'soft' },
    {
      d: [
        circle(44, 124, 5),
        circle(64, 126, 5),
        circle(84, 126, 5),
        circle(104, 125, 5),
      ].join(' '),
    },
    ...SEA,
  ],

  // Bigstein Castle, where it rules, built of toy bricks and drawn in 3/4:
  // the studs on top, the seams between the bricks, the far faces hatched.
  // Its tail curls out from behind the walls. The crown is left out: it
  // breaks in the fight the crew finds it in (1157), and on a brick it would
  // be staged.
  'iscat': [
    { d: 'M38 158 V108 H108 V158 Z' },
    { d: 'M108 108 L126 96 V146 L108 158 M38 108 L54 97.3 M106 96 H126' },
    { d: 'M54 102 V60 H94 V102' },
    { d: 'M94 60 L106 52 V94 L94 102 M54 60 L66 52 H106' },
    {
      d: 'M66 57 v-3 a4 1.6 0 0 1 8 0 v3 M84 57 v-3 a4 1.6 0 0 1 8 0 v3 M112 103 v-3 a4 1.6 0 0 1 8 0 v3',
      role: 'soft',
    },
    {
      d: 'M38 133 H108 M58 108 V133 M94 133 V158 M54 81 H94 M74 60 V81',
      role: 'soft',
    },
    { d: 'M62 158 v-14 a9 9 0 0 1 18 0 v14' },
    {
      d: 'M112 118 l10 -7 M112 130 l10 -7 M112 142 l10 -7 M97 70 l6 -4 M97 84 l6 -4',
      role: 'ambient',
    },
    {
      d: 'M38 128 C16 122 10 98 18 80 C26 62 22 46 12 40 C10 34 16 32 20 36 C32 46 34 66 26 84 C20 98 24 114 38 118',
      role: 'accent',
    },
    shadow(82, 172, 52),
  ],

  // The diorama he rules as the Sun God, toy houses on a slab in 3/4, and
  // his staff standing behind it: a sun-shaped head with a metal net
  // across it, the one he traps the crew with (1158).
  'road': [
    { d: 'M10 148 H110 V166 H10 Z' },
    { d: 'M10 148 L30 134 H108 M117 134 H130 L110 148 M110 166 L130 152 V134' },
    { d: 'M114 160 l12 -8 M114 150 l12 -8', role: 'ambient' },
    {
      d: 'M20 144 V122 L30 112 L40 122 V144 M40 122 L50 116 V138 M30 112 L40 106 L50 116',
      role: 'soft',
    },
    {
      d: 'M54 142 V114 H70 V142 M70 114 L78 109 V137 M54 114 L62 109 H78',
      role: 'soft',
    },
    {
      d: 'M84 140 V126 L91 119 L98 126 V140 M98 126 L104 122 V136 M91 119 L97 115 L104 122',
      role: 'soft',
    },
    { d: 'M108 61 V134 M117 61 V134' },
    { d: circle(112, 42, 16), role: 'accent' },
    {
      d: 'M131 42 L141 42 M128.5 51.5 L133.7 54.5 M121.5 58.5 L126.5 67.1 M102.5 58.5 L97.5 67.1 M95.5 51.5 L90.3 54.5 M93 42 L83 42 M95.5 32.5 L90.3 29.5 M102.5 25.5 L97.5 16.9 M112 23 L112 17 M121.5 25.5 L126.5 16.9 M128.5 32.5 L133.7 29.5',
      role: 'accent',
    },
    {
      d: 'M98.5 35.5 L118.5 55.5 M105.5 28.5 L125.5 48.5 M98.5 48.5 L118.5 28.5 M105.5 55.5 L125.5 35.5',
      role: 'soft',
    },
    shadow(70, 180, 60),
  ],

  // The colossal tree seen from the sea, its trunk rising off the island and
  // splitting into limbs that run out of the top into cloud, the crown out
  // of sight. Elbaph is first shown in Big Mom's flashback (836) and named
  // when the crew learns where it is (1160).
  'elbaf-island': [
    { d: 'M8 152 C40 144 120 144 152 152' },
    {
      d: 'M54 149 C60 130 62 100 62 72 M106 149 C100 130 98 100 98 72 M54 149 C48 147 40 149 30 152 M106 149 C112 147 120 149 130 152',
    },
    {
      d: 'M62 72 C56 54 40 40 28 -4 M98 72 C104 54 120 40 132 -4 M70 66 C70 40 66 20 64 -4 M90 66 C90 40 94 20 96 -4',
      role: 'accent',
    },
    {
      d: 'M4 30 q4 -10 16 -6 q8 -10 20 -2 q6 4 2 10 H8 q-6 0 -4 -2 M108 46 q4 -10 16 -6 q8 -10 20 -2 q8 2 6 8 H112 q-6 0 -4 0 M60 20 q6 -8 16 -4 q8 -6 16 2 q4 6 -2 8 H64 q-8 0 -4 -6',
      role: 'soft',
    },
    {
      d: 'M72 140 C74 120 72 104 74 88 M86 142 C84 124 88 106 86 88',
      role: 'soft',
    },
    {
      d: 'M100 92 l5 -4 M100 106 l5 -4 M101 120 l5 -4 M102 134 l5 -4',
      role: 'ambient',
    },
    ...SEA,
  ],

  // The land where wars come from, as the crew sees it on escaping the
  // diorama (1160): snowy peaks with their shaded faces hatched, the castle
  // on the highest one, and the rope bridge climbing from it to the upper
  // lands, past the foot of the colossal tree.
  'warland': [
    { d: 'M-4 150 L28 92 M60 92 L74 118 L92 100 L112 136 L132 104 L164 150' },
    {
      d: 'M26 92 V66 H60 V92 M60 66 L68 61 V86 L60 92 M26 66 L34 61 H68 M34 66 V50 H50 V66',
    },
    { d: 'M36 92 v-10 a6 6 0 0 1 12 0 v10', role: 'soft' },
    {
      d: 'M14 120 q5 6 9 0 q5 6 9 0 M80 112 q4 5 8 0 q4 5 8 2 M122 120 q5 6 9 0 q5 6 10 2',
      role: 'soft',
    },
    { d: 'M68 64 Q102 50 108 -4 M68 72 Q110 58 116 -4', role: 'accent' },
    {
      d: 'M78 61 l3 6 M88 55 l4 6 M96 46 l4 5 M102 34 l5 3 M105 20 l5 2',
      role: 'soft',
    },
    { d: 'M121 121.6 C118 70 118 30 116 -4 M156 138.5 C158 80 158 30 160 -4' },
    {
      d: 'M130 110 C128 80 130 50 128 20 M142 100 C140 70 144 40 142 6',
      role: 'soft',
    },
    {
      d: 'M148 30 l10 -8 M148 46 l10 -8 M148 62 l10 -8 M148 78 l10 -8 M63 76 l3 -2 M63 84 l3 -2',
      role: 'ambient',
    },
    {
      d: 'M40 112 l-6 10 M46 126 l-8 12 M100 118 l-6 10 M144 122 l-8 12 M152 136 l-6 9',
      role: 'ambient',
    },
    { d: 'M-4 152 H164', role: 'ambient', dashed: true },
  ],

  // The foot of the colossal tree he is bound to in the Underworld, two
  // turns of heavy chain wound round its trunk, and the drum-shaped cuff
  // they run down to lying at its foot, every link still whole (1160).
  'loki': [
    { d: 'M30 -4 C34 50 34 104 24 128 C18 140 6 148 -4 150' },
    { d: 'M130 -4 C126 50 126 104 136 128 C142 140 154 148 164 150' },
    {
      d: 'M50 4 C52 18 50 26 52 36 M106 2 C104 18 106 30 104 42 M54 64 C56 72 54 80 56 88',
      role: 'soft',
    },
    {
      d: 'M121 18 l7 -4 M121 30 l7 -4 M121 72 l7 -4 M122 132 l8 -4',
      role: 'ambient',
    },
    {
      d: 'M32.3 30.5 A6 3.4 44.1 1 0 40.9 38.8 A6 3.4 44.1 1 0 32.3 30.5 M41.2 39.1 L50.5 46.7 M50.3 46.5 A6 3.4 33.8 1 0 60.2 53.2 A6 3.4 33.8 1 0 50.3 46.5 M59.4 52.7 L70 58.3 M68.6 57.7 A6 3.4 20.9 1 0 79.8 62 A6 3.4 20.9 1 0 68.6 57.7 M78 61.4 L89.6 64.3 M87.5 63.9 A6 3.4 6 1 0 99.5 65.1 A6 3.4 6 1 0 87.5 63.9 M97.3 65.1 L109.2 64.7 M107.2 64.9 A6 3.4 -9.3 1 0 119 62.9 A6 3.4 -9.3 1 0 107.2 64.9 M117.3 63.3 L128.8 59.9',
      role: 'accent',
    },
    {
      d: 'M32.3 82.5 A6 3.4 44.1 1 0 40.9 90.8 A6 3.4 44.1 1 0 32.3 82.5 M41.2 91.1 L50.5 98.7 M50.3 98.5 A6 3.4 33.8 1 0 60.2 105.2 A6 3.4 33.8 1 0 50.3 98.5 M59.4 104.7 L70 110.3 M68.6 109.7 A6 3.4 20.9 1 0 79.8 114 A6 3.4 20.9 1 0 68.6 109.7 M78 113.4 L89.6 116.3 M87.5 115.9 A6 3.4 6 1 0 99.5 117.1 A6 3.4 6 1 0 87.5 115.9 M97.3 117.1 L109.2 116.7 M107.2 116.9 A6 3.4 -9.3 1 0 119 114.9 A6 3.4 -9.3 1 0 107.2 116.9 M117.3 115.3 L128.8 111.9',
      role: 'accent',
    },
    {
      d: 'M106.7 116 A6 3.4 56.3 1 0 113.3 126 A6 3.4 56.3 1 0 106.7 116 M110.7 122 L117.3 132',
      role: 'accent',
    },
    { d: 'M104 134 H132 M104 158 H132 M132 134 a6 12 0 0 1 0 24' },
    { d: ellipse(104, 146, 6, 12) },
    { d: 'M110 134 a6 12 0 0 1 0 24 M126 134 a6 12 0 0 1 0 24', role: 'soft' },
    { d: 'M114.5 134 v-3 a3 3 0 0 1 6 0 v3', role: 'accent' },
    { d: 'M114 150 l4 -4 M120 152 l6 -6 M126 154 l5 -5', role: 'ambient' },
    {
      d: 'M-4 150 H20 M140 150 H164 M40 150 H96',
      role: 'ambient',
      dashed: true,
    },
  ],

  // His mace, as long as he is tall, the haft swelling towards a round head
  // ringed with spikes, its seams in soft and its far side hatched. He
  // carries it from the cover story the crew first appears in (899) and up
  // the bridge (1161).
  'goldberg': [
    { d: circle(80, 50, 26), transform: MACE_TILT },
    {
      d: 'M74.8 24.5 L80 15 L85.2 24.5 M92.4 27.2 L102.5 23.2 L100.3 33.8 M104.2 40.5 L114.5 43.9 L106 50.7 M104.7 58.3 L110.3 67.5 L99.5 67.2 M60.5 67.2 L49.7 67.5 L55.3 58.3 M54 50.7 L45.5 43.9 L55.8 40.5 M59.7 33.8 L57.5 23.2 L67.6 27.2',
      role: 'accent',
      transform: MACE_TILT,
    },
    {
      d: 'M80 24 C64 34 64 66 80 76 M80 24 C98 32 100 66 80 76 M54 50 C64 56 96 56 106 50',
      role: 'soft',
      transform: MACE_TILT,
    },
    {
      d: 'M92 70 l10 -10 M96 60 l8 -8 M98 48 l6 -6 M96 38 l4 -4',
      role: 'ambient',
      transform: MACE_TILT,
    },
    {
      d: 'M68 72 C68 104 76 140 76.5 184 M92 72 C92 104 84 140 83.5 184 M76.5 184 Q80 190 83.5 184',
      transform: MACE_TILT,
    },
    { d: 'M80 82 C80 110 80 150 80 176', role: 'soft', transform: MACE_TILT },
    {
      d: 'M85 88 l5 -5 M85 102 l4 -4 M84 116 l3 -3',
      role: 'ambient',
      transform: MACE_TILT,
    },
    shadow(80, 186, 44),
  ],

  // One of the colossal tree's branches, its underside hatched, two
  // longhouses on it with crossed boards at their gables, a sprig at its tip.
  'sun-world': [
    {
      d: 'M-4 116 C40 112 100 104 148 92 M-4 162 C40 152 100 134 148 108 M148 92 C158 90 160 102 148 108',
    },
    {
      d: 'M150 94 C152 82 156 74 164 68 M156 76 q8 -8 6 -14 q-8 2 -6 14 M152 84 q-8 -6 -14 -2 q6 6 14 2',
      role: 'soft',
    },
    {
      d: 'M12 132 C40 128 70 122 92 116 M50 144 C80 136 110 124 132 112',
      role: 'soft',
    },
    {
      d: 'M4 160 l9 -9 M18 158 l10 -10 M34 155 l10 -10 M50 151 l10 -10 M66 147 l10 -10 M82 142 l10 -10 M98 136 l9 -9 M114 129 l8 -8 M128 121 l7 -7',
      role: 'ambient',
    },
    {
      d: 'M14 115 V92 L30 76 L46 92 V112.5 M46 92 L62 86 V110 M30 76 L46 70 L62 86',
    },
    { d: 'M24 114.5 v-12 h10 v11', role: 'soft' },
    {
      d: 'M84 106.5 V90 L96 78 L108 90 V103.5 M108 90 L120 85 V100.5 M96 78 L108 73 L120 85',
    },
    {
      d: 'M30 76 L21 66 M30 76 L39 66 M96 78 L89 70 M96 78 L103 70',
      role: 'accent',
    },
  ],

  // A stack of books, a ribbon marking a page in the top one.
  'ange': [
    { d: 'M30 150 H130 V168 H30 Z' },
    { d: 'M38 132 H122 V150 H38 Z' },
    { d: 'M34 114 H126 V132 H34 Z' },
    { d: 'M34 114 L42 104 H134 L126 114', role: 'soft' },
    { d: 'M96 104 V96 M96 132 V152 l-5 -6 l-5 6 V132', role: 'accent' },
    shadow(80, 178, 54),
  ],

  // A leaf under a magnifying glass for the biology teacher: the veins and
  // the glints on the lens in soft, the leaf's near edge hatched, a double
  // rim on the glass.
  'ripley': [
    {
      d: 'M18 150 C12 108 50 66 116 52 C128 104 92 150 18 150 Z M18 150 L8 160',
    },
    {
      d: 'M18 150 C50 120 80 92 116 52 M34 134 l-8 -22 M50 118 l-6 -26 M66 100 l-2 -24 M86 80 l-2 -16 M36 136 l20 2 M56 116 l22 0',
      role: 'soft',
    },
    { d: 'M28 149 l8 -8 M42 149 l10 -10 M56 148 l8 -8', role: 'ambient' },
    { d: circle(92, 118, 26), role: 'accent' },
    { d: circle(92, 118, 21), role: 'soft' },
    { d: 'M76 128 L90 106 M90 136 L108 112', role: 'soft' },
    { d: 'M111.4 131.8 L116 136.4 L110.4 142 L105.8 137.4' },
    { d: 'M116.7 135.7 L139.4 158.3 Q138.7 164.7 132.3 165.4 L109.7 142.7' },
    shadow(76, 182, 58),
  ],

  // His giant hammer, held level: the barrel-shaped head in 3/4 with iron
  // hoops near both ends, the far side hatched, a long wooden haft. He holds
  // it on the cover that makes him the crew's shipwright (897), and grips it
  // in their first scene in the anime (885).
  'stansen': [
    { d: ellipse(118, 75, 17, 6) },
    {
      d: 'M101 75 C93 90.5 93 121.5 101 137 A17 6 0 0 0 135 137 C143 121.5 143 90.5 135 75',
    },
    {
      d: 'M98.6 82 A19.4 6 0 0 0 137.4 82 M97 88 A21 6 0 0 0 139 88 M97 124 A21 6 0 0 0 139 124 M98.6 130 A19.4 6 0 0 0 137.4 130',
      role: 'accent',
    },
    {
      d: 'M110.4 81 C104.3 90.5 104.3 121.5 110.4 142.4 M121.4 81 C123.5 90.5 123.5 121.5 121.4 143',
      role: 'soft',
    },
    {
      d: 'M133.7 101 l5.4 -5 M134.1 109 l5.5 -5 M133.9 117 l5.4 -5',
      role: 'ambient',
    },
    { d: 'M96 98 H8 Q1 106 8 114 H96' },
    {
      d: 'M88 104 C66 105 38 103 18 104 M72 108.5 C56 109 48 107.5 30 108.5',
      role: 'soft',
    },
    shadow(88, 156, 58),
  ],

  // His wooden sword snapped in two, the hilt half falling and the point
  // half on the ground, grain in soft and the splintered ends bright. It
  // breaks on Luffy's head the first time he swings it at him (1165).
  'colon': [
    { d: 'M44 143 H14 Q6 150 14 157 H44', transform: SWORD_HILT_HALF },
    {
      d: 'M44 126 H54 V174 H44 Z M54 126 l4 -4 V170 l-4 4',
      transform: SWORD_HILT_HALF,
    },
    {
      d: 'M54 137 H114 M54 163 H116 M58 167 H116 V163',
      transform: SWORD_HILT_HALF,
    },
    {
      d: 'M114 137 L121 141 L115 145 L124 149 L116 153 L123 157 L116 160 L116 163',
      role: 'accent',
      transform: SWORD_HILT_HALF,
    },
    {
      d: 'M58 145 C76 143 92 147 112 145 M58 155 C76 157 94 153 114 155',
      role: 'soft',
      transform: SWORD_HILT_HALF,
    },
    {
      d: 'M64 171 l4 -4 M78 171 l4 -4 M92 171 l4 -4 M106 171 l4 -4',
      role: 'ambient',
      transform: SWORD_HILT_HALF,
    },
    {
      d: 'M108 137 H164 Q182 150 164 163 H108 M110 167 H164 Q174 165 177 158',
      transform: SWORD_POINT_HALF,
    },
    {
      d: 'M108 137 L101 141 L107 145 L99 149 L106 153 L100 157 L108 163',
      role: 'accent',
      transform: SWORD_POINT_HALF,
    },
    {
      d: 'M112 145 C126 143 140 147 160 145 M112 155 C128 157 142 153 164 155',
      role: 'soft',
      transform: SWORD_POINT_HALF,
    },
    {
      d: 'M116 171 l4 -4 M130 171 l4 -4 M144 171 l4 -4 M158 170 l4 -4',
      role: 'ambient',
      transform: SWORD_POINT_HALF,
    },
    shadow(30, 178, 20),
    shadow(112, 182, 50),
  ],

  // An open book as wide as a table, a quill feather lying on its pages.
  'biblo': [
    {
      d: 'M14 130 C40 116 64 118 80 130 C96 118 120 116 146 130 V66 C120 52 96 54 80 66 C64 54 40 52 14 66 Z',
    },
    { d: 'M80 66 V130', role: 'soft' },
    {
      d: 'M26 80 q24 -8 44 0 M26 94 q24 -8 44 0 M92 80 q24 -8 44 0',
      role: 'ambient',
    },
    {
      d: 'M60 150 C80 130 110 100 134 90 C130 110 104 132 72 146 Z',
      role: 'accent',
    },
    { d: 'M60 150 L128 96', role: 'accent' },
    shadow(80, 172, 60),
  ],

  // One of the bandage-like strips she cuts the castle guards down with,
  // spiralling up off the ground and ending in an arrowhead (1165).
  'manmayer-gunko': [
    {
      d: 'M80 168 C84 166.8 98.4 163.8 104 160.5 C109.7 157.3 112.3 150.5 114 148.5 M80 177 C84 175.8 98.4 172.8 104 169.5 C109.7 166.3 112.3 159.5 114 157.5 M46 131.5 C47.7 132.1 50.3 134.6 56 135 C61.6 135.4 72 135.4 80 134 C88 132.6 98.4 129.8 104 126.5 C109.7 123.3 112.3 116.5 114 114.5 M46 140.5 C47.7 141.1 50.3 143.6 56 144 C61.6 144.4 72 144.4 80 143 C88 141.6 98.4 138.8 104 135.5 C109.7 132.3 112.3 125.5 114 123.5 M46 97.5 C47.7 98.1 50.3 100.6 56 101 C61.6 101.4 76 100.2 80 100 M46 106.5 C47.7 107.1 50.3 109.6 56 110 C61.6 110.4 76 109.2 80 109',
    },
    {
      d: 'M114 148.5 C112.3 146.5 109.7 139.7 104 136.5 C98.4 133.2 88 130.4 80 129 C72 127.6 61.6 127.6 56 128 C50.3 128.4 47.7 130.9 46 131.5 M114 157.5 C112.3 155.5 109.7 148.7 104 145.5 C98.4 142.2 88 139.4 80 138 C72 136.6 61.6 136.6 56 137 C50.3 137.4 47.7 139.9 46 140.5 M114 114.5 C112.3 112.5 109.7 105.7 104 102.5 C98.4 99.2 88 96.4 80 95 C72 93.6 61.6 93.6 56 94 C50.3 94.4 47.7 96.9 46 97.5 M114 123.5 C112.3 121.5 109.7 114.7 104 111.5 C98.4 108.2 88 105.4 80 104 C72 102.6 61.6 102.6 56 103 C50.3 103.4 47.7 105.9 46 106.5',
      role: 'soft',
    },
    {
      d: 'M109.4 141.7 L109.4 147.7 M97 134.8 L97 140.8 M80 130.5 L80 136.5 M63 129.1 L63 135.1 M50.6 130.3 L50.6 136.3 M109.4 107.7 L109.4 113.7 M97 100.8 L97 106.8 M80 96.5 L80 102.5 M63 95.1 L63 101.1 M50.6 96.3 L50.6 102.3',
      role: 'ambient',
    },
    { d: 'M80 168 C66 170 52 176 38 177 M80 177 C68 180 54 185 40 186' },
    {
      d: 'M38 177 l-3 2 l4 2 l-4 2 l5 3 M36 181 l-8 1 M37 184 l-7 4',
      role: 'soft',
    },
    { d: 'M80 100 C100 99 114 88 117 64 M80 109 C106 108 126 92 127 64' },
    { d: 'M106 68 L122 34 L138 68 L122 60 Z', role: 'accent' },
    shadow(96, 190, 26),
  ],

  // The empty throne in 3/4, its far side hatched, under the heavy frame of
  // the royal portrait the crew is shown (1167). The frame is left empty.
  'harald': [
    { d: 'M50 4 H110 V52 H50 Z', role: 'accent' },
    { d: 'M57 11 H103 V45 H57 Z', role: 'soft' },
    {
      d: 'M60 18 l3 -3 M60 27 l3 -3 M60 36 l3 -3 M69 14 l2 -2 M80 14 l2 -2 M91 14 l2 -2',
      role: 'ambient',
    },
    { d: 'M48 129 V74 Q74 62 100 74 V129' },
    { d: 'M100 74 L110 68 V122' },
    {
      d: 'M40 140 H100 V150 H40 Z M40 140 L48 130 H110 L100 140 M100 150 L110 140 V130',
    },
    { d: 'M44 150 V180 M96 150 V180 M106 144 V172' },
    {
      d: 'M104 84 l4 -3 M104 96 l4 -3 M104 108 l4 -3 M103 148 l5 -5',
      role: 'ambient',
    },
    { d: 'M58 86 Q74 78 90 86 V122 M58 86 V122', role: 'soft' },
    shadow(76, 186, 44),
  ],

  // His saber in its white sheath, tilted, the gold knuckle-bow guard bright,
  // the locket and chape in soft. He wears it at his hip when he arrives
  // with Gunko (1167).
  'figarland-shamrock': [
    ...SHAMROCK_HILT.map((stroke) => ({ ...stroke, transform: SABER_TILT })),
    {
      d: 'M75 75 C74 120 77 156 84 182 M85 75 C84 118 87 154 93 179 M84 182 Q90 186 93 179',
      transform: SABER_TILT,
    },
    { d: 'M75 86 H85 M74.5 92 H84.8', role: 'soft', transform: SABER_TILT },
    {
      d: 'M81.5 166 L90 163.5 M82.5 172 L91 169',
      role: 'soft',
      transform: SABER_TILT,
    },
    { d: 'M80 98 C80 128 82 154 87 174', role: 'soft', transform: SABER_TILT },
    shadow(96, 190, 34),
  ],

  // The same saber drawn, and the three spiked collars of the dog it turns
  // into flying off with flame at their necks, as when Shamrock sends its
  // heads after Loki (1168). The heads themselves are left out.
  'cerberus': [
    ...SHAMROCK_HILT.map((stroke) => ({ ...stroke, transform: DRAWN_TILT })),
    { d: 'M75 75 V170 Q78 180 85 186 V75', transform: DRAWN_TILT },
    { d: 'M79 80 V168', role: 'soft', transform: DRAWN_TILT },
    ...collarAt('translate(116 30) rotate(-14)'),
    ...collarAt('translate(128 84) rotate(10)'),
    ...collarAt('translate(106 134) rotate(-6)'),
    shadow(66, 192, 28),
  ],

  // His two single-edged axes crossed, the dark cheeks of their heads
  // hatched and the cutting edges bright. He throws one at a door the first
  // time the crew meets him (1169).
  'scopper-gaban': [
    ...GABAN_AXE.map((stroke) => ({
      // The right axe, its haft leaning right.
      ...stroke,
      transform: 'translate(80 104) rotate(28)',
    })),
    ...GABAN_AXE.map((stroke) => ({
      // The left axe is the right one mirrored.
      ...stroke,
      transform: 'translate(80 104) scale(-1 1) rotate(28)',
    })),
    shadow(80, 186, 50),
  ],

  // The sword he keeps at his side, sheathed and tilted, its guard a disc
  // ringed with thorns. He wears it once he has dressed after the summons
  // (1170).
  'shepherd-sommers': [
    { d: 'M75 90 V176 Q80 186 85 176 V90', transform: TILT },
    { d: 'M80 96 V176', role: 'soft', transform: TILT },
    { d: ellipse(80, 80, 18, 6), transform: TILT },
    { d: 'M62 80 v4 a18 6 0 0 0 36 0 v-4', transform: TILT },
    {
      d: 'M97 78.7 L104.5 81.2 L98.7 82.8 M98.8 83.7 L101.6 86.6 L96.1 87.2 M96.2 86.8 L92.9 96.9 L92.2 88.6 M88 89.4 L87.9 94.5 L83.7 89.9 M77.8 90 L71.6 96.5 L73.5 89.6 M70.3 89.1 L69 92.9 L66.1 87.9 M64.3 87.4 L56.7 88 L61.3 84.1 M61.3 81.6 L57 79 L64.1 78.3',
      role: 'accent',
      transform: TILT,
    },
    { d: 'M76.5 80 V40 M83.5 80 V40', transform: TILT },
    { d: ellipse(80, 34, 6, 6), transform: TILT },
    shadow(80, 188, 34),
  ],

  // His trident, tilted, three barbed prongs of different lengths on a
  // doubled crossbar, a collar where it meets the shaft. He carries it when
  // he is summoned in his kirin form (1170).
  'rimoshifu-killingham': [
    { d: 'M77 82 V186 M83 82 V186 M77 186 Q80 190 83 186', transform: LEAN },
    { d: 'M75 70 H85 V82 H75 Z', transform: LEAN },
    { d: 'M75 76 H85', role: 'soft', transform: LEAN },
    {
      d: 'M52 56 C52 66 66 70 80 70 C94 70 108 66 108 52 M58 56 C58 62 68 64 80 64 C92 64 102 62 102 52',
      transform: LEAN,
    },
    {
      d: 'M76 64 V34 L80 4 L84 34 V64 M52 56 L48 40 L50 26 L57 38 L58 56 M102 52 L108 24 L114 4 L114 28 L108 52',
      role: 'accent',
      transform: LEAN,
    },
    {
      d: 'M84 34 l4 4 M76 34 l-4 4 M57 38 l3 6 M108 24 l-4 6',
      role: 'accent',
      transform: LEAN,
    },
    { d: 'M80 20 V58 M110.5 20 L106 46', role: 'soft', transform: LEAN },
    {
      d: 'M86 92 l-3 3 M86 104 l-3 3 M86 116 l-3 3',
      role: 'ambient',
      transform: LEAN,
    },
    shadow(98, 190, 30),
  ],

  // Loki's warhammer: a rectangular sledge head in 3/4 with its far end
  // hatched, the raised plate the haft juts from, and the long haft wrapped
  // in bandages. It lies behind the chained prince from the first time Luffy
  // finds him, and is named when he takes hold of it (1171).
  'ragnir': [
    { d: 'M36 30 H112 V78 H36 Z', transform: TILT },
    { d: 'M36 30 L48 20 H124 L112 30 M124 20 V68 L112 78', transform: TILT },
    {
      d: 'M114 38 l8 -6 M114 50 l8 -6 M114 62 l8 -6 M114 74 l8 -6',
      role: 'ambient',
      transform: TILT,
    },
    { d: 'M50 40 H98 V68 H50 Z', role: 'soft', transform: TILT },
    { d: 'M64 78 V88 H84 V78', role: 'accent', transform: TILT },
    { d: 'M70 88 V184 M78 88 V184 M70 184 H78', transform: TILT },
    {
      d: 'M70 104 l8 -5 M70 114 l8 -5 M70 124 l8 -5 M70 134 l8 -5 M70 144 l8 -5 M70 154 l8 -5 M70 164 l8 -5 M70 174 l8 -5',
      role: 'soft',
      transform: TILT,
    },
    shadow(80, 190, 36),
  ],

  // His warhammer, the block head in 3/4 with its far end hatched and a pair
  // of tusks curving out of its back. He charges the serpent with it at the
  // school (1172).
  'kiba': [
    { d: 'M30 34 H92 V70 H30 Z', transform: LEAN },
    { d: 'M30 34 L40 26 H102 L92 34 M102 26 V62 L92 70', transform: LEAN },
    {
      d: 'M95 40 l5 -4 M95 50 l5 -4 M95 60 l5 -4',
      role: 'ambient',
      transform: LEAN,
    },
    { d: 'M36 40 V64', role: 'soft', transform: LEAN },
    {
      d: 'M100 36 C130 34 146 60 138 94 C130 68 118 54 100 48 M98 54 C122 56 134 78 124 108 C120 84 110 72 97 66',
      role: 'accent',
      transform: LEAN,
    },
    { d: 'M76 70 V186 M84 70 V186 M76 186 Q80 190 84 186', transform: LEAN },
    { d: 'M80 80 C81 110 79 150 80 178', role: 'soft', transform: LEAN },
    shadow(96, 190, 34),
  ],

  // A coach's whistle for the gym teacher, the round chamber in 3/4 with its
  // far side hatched, the mouthpiece square, the cord hanging in a loop.
  'wolf-elbaph': [
    { d: circle(94, 104, 24), role: 'accent' },
    { d: 'M81.7 83.4 L91.7 77.4 A24 24 0 0 1 116.3 118.6 L106.3 124.6' },
    { d: 'M71.4 96 H24 V114 H72.2 M24 96 L32 91 H74.5 M24 114 L32 109 V91' },
    {
      d: 'M110 121 l6 -4 M116 112 l6 -4 M119 100 l5 -4 M118 90 l4 -4',
      role: 'ambient',
    },
    { d: circle(112, 74, 5) },
    {
      d: 'M116 77 C132 90 140 120 128 146 C118 168 84 172 70 160 C60 150 76 138 92 146 C108 154 106 172 92 178',
      role: 'soft',
    },
    shadow(84, 186, 50),
  ],

  // A set square and a ruler for the maths teacher, both lying flat in 3/4
  // with their thin edges showing, the ticks in soft.
  'blade': [
    { d: 'M16 166 L118 156 L34 92 Z', role: 'accent' },
    { d: 'M36 152 L87 147 L45 115 Z', role: 'soft' },
    { d: 'M16 166 v5 L118 161 V156' },
    { d: 'M56 64 L152 96 L146 110 L50 78 Z M50 78 v4 L146 114 V110' },
    {
      d: 'M64 66.7 l-1.4 3.2 M72 69.3 l-1.4 3.2 M80 72 l-2.4 5.5 M88 74.7 l-1.4 3.2 M96 77.3 l-1.4 3.2 M104 80 l-2.4 5.5 M112 82.7 l-1.4 3.2 M120 85.3 l-1.4 3.2 M128 88 l-2.4 5.5 M136 90.7 l-1.4 3.2 M144 93.3 l-1.4 3.2',
      role: 'soft',
    },
    {
      d: 'M30 170 l3 -3 M50 168 l3 -3 M70 166 l3 -3 M90 164 l3 -3 M108 162 l3 -3 M60 84 l3 -3 M84 92 l3 -3 M108 100 l3 -3 M132 108 l3 -3',
      role: 'ambient',
    },
    shadow(70, 184, 56),
  ],
} satisfies Drawings
