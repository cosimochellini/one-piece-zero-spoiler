import { cell, circle, dots, ellipse, SEA, shadow } from '~/lib/svg/primitives'

import { type Drawings, moved, type Redrawings, type Stroke } from './stroke'

/**
 * One neck of Orochi's shadow behind the paper door, base at (0, 0), the head
 * turned right with one horn: a plain silhouette, no eye and no mouth.
 */
const OROCHI_NECK =
  'M-6 0 C-14 -22 6 -38 -2 -58 C-6 -68 -2 -80 6 -84 C16 -90 32 -88 37 -80 C33 -74 22 -72 14 -72 C12 -68 10 -63 10 -58 C18 -38 -2 -22 6 0 M4 -85 L-2 -98 L12 -87'

/**
 * One of Komurasaki's tall geta, its toe at the back, origin under the front
 * of the board: the board seen from above, its edge, the tall tooth, the thong.
 */
const KOMURASAKI_GETA: Stroke[] = [
  { d: 'M-22 0 L-17 -40 Q-16 -46 -9 -46 H9 Q16 -46 17 -40 L22 0 Z' },
  { d: 'M-22 0 V5 H22 V0' },
  { d: 'M-17 5 V46 H17 V5' },
  { d: 'M-12 -18 C-8 -28 -2 -34 0 -38 C2 -34 8 -28 12 -18' },
]

/** One object of this file drawn again, set down at `transform`. */
function placed(strokes: Stroke[], transform: string): Stroke[] {
  return strokes.map((stroke) => ({ ...stroke, transform }))
}

/** One of the short swords Black Maria wears in her hair: point up and right, guard, grip. */
const MARIA_HAIR_SWORD =
  'M0 0 L46 -30 L52 -36 L48 -28 L3 4 M-2 -5 L6 7 M-1 1 L-16 11 L-13 15 L2 5'

/** Black Maria's pipe, set down on the crossing of her two hair swords. */
const MARIA_PIPE = 'translate(0 12)'

/** Who's-Who's katana, drawn level and then laid at a slant on the floor. */
const WHOS_WHO_LAY = 'translate(0 26) rotate(-12 80 112)'

/** Hotei's sword that is still whole, laid above the one that was snapped. */
const HOTEI_WHOLE = 'translate(0 30)'

/**
 * Shinobu's katana, level, the guard at (0, 0) and the sheath to the right:
 * the black sheath with its purple wrapping, the guard, the bound grip.
 * Both of her drawings lay it down.
 */
const SHINOBU_KATANA: Stroke[] = [
  { d: 'M0 -5 H104 Q112 -5 112 0 Q112 5 104 5 H0 Z' },
  {
    d: 'M12 -5 l7 10 M28 -5 l7 10 M44 -5 l7 10 M60 -5 l7 10 M76 -5 l7 10 M92 -5 l7 10',
    role: 'accent',
  },
  { d: 'M4 -2 H104', role: 'soft' },
  { d: ellipse(-3, 0, 3.5, 12) },
  { d: 'M-6 -4 H-40 Q-45 0 -40 4 H-6' },
  { d: 'M-12 -4 l5 8 M-21 -4 l5 8 M-30 -4 l5 8 M-39 -4 l4 8', role: 'soft' },
]

/** The fire on King's back, over the leading edge of either of his wings. */
const KING_FIRE: Stroke[] = [
  { d: 'M54 56 c-4 -12 8 -14 6 -26 c8 10 16 12 10 26', role: 'accent' },
  { d: 'M88 40 c-4 -12 8 -14 6 -26 c8 10 16 12 10 26', role: 'accent' },
]

/**
 * One of Izo's flintlocks, side on and pointing right, the trigger at
 * (0, 0): barrel, muzzle, the curved wooden grip, the lock and its cock,
 * the trigger guard, the ramrod and the grip's hatching.
 */
const IZO_FLINTLOCK: Stroke[] = [
  { d: 'M-6 -22 H62 V-12 H-4' },
  { d: ellipse(62, -17, 2.5, 5) },
  {
    d: 'M-6 -22 C-14 -22 -22 -20 -28 -14 L-46 10 Q-48 18 -40 20 L-30 22 Q-24 20 -24 14 C-20 2 -14 -6 -4 -12',
  },
  {
    d: 'M-20 -22 L-8 -22 L-6 -14 L-18 -14 Z M-15 -22 C-20 -26 -24 -30 -22 -34 L-15 -34',
    role: 'accent',
  },
  { d: 'M-4 -12 C-6 -2 6 0 8 -12 M1 -12 Q0 -7 3 -5', role: 'soft' },
  { d: 'M4 -14.5 H58', role: 'soft' },
  { d: 'M-40 12 l5 4 M-36 4 l5 4 M-31 -4 l5 4', role: 'ambient' },
]

/**
 * One of the folding fans Izo dances with as a boy, open, the rivet at
 * (0, 0) and the leaf above it: the paper leaf in his colour, the pleats,
 * the sticks that run from the rivet to the leaf, and the hatching on every
 * other pleat, the ones that fold away from the viewer.
 */
const IZO_FAN: Stroke[] = [
  {
    d: 'M-58.3 -21.2 A62 62 0 0 1 58.3 -21.2 L22.6 -8.2 A24 24 0 0 0 -22.6 -8.2 Z',
    role: 'accent',
  },
  {
    d: 'M-19 -14.6 L-49.2 -37.7 M-13.8 -19.7 L-35.6 -50.8 M-7.2 -22.9 L-18.6 -59.1 M0 -24 L0 -62 M7.2 -22.9 L18.6 -59.1 M13.8 -19.7 L35.6 -50.8 M19 -14.6 L49.2 -37.7',
    role: 'soft',
  },
  {
    d: 'M0 0 L-22.6 -8.2 M0 0 L-13.8 -19.7 M0 0 L0 -24 M0 0 L13.8 -19.7 M0 0 L22.6 -8.2',
  },
  { d: circle(0, 0, 3) },
  {
    d: 'M-33.2 -34.7 L-40.8 -42.6 M-7.3 -47.4 L-9 -58.3 M21.2 -43 L26.1 -52.9 M42.1 -23.1 L51.7 -28.4',
    role: 'ambient',
  },
]

/**
 * One of Ulti's red high heels, side on, the toe at (0, 0) on the floor and
 * the heel to the right: the shoe with its stiletto, and the edge of the
 * opening along the near side.
 */
const ULTI_HEEL: Stroke[] = [
  {
    d: 'M0 0 C-3 -7 2 -14 10 -15 C22 -20 34 -28 42 -38 C46 -44 50 -50 55 -50 C59 -50 61 -46 60 -40 L60 -30 L57 0 H53 L53 -26 C46 -22 38 -14 30 -6 C22 -1 12 0 0 0 Z',
    role: 'accent',
  },
  { d: 'M10 -15 C20 -12 32 -18 42 -30 C48 -38 54 -42 60 -40', role: 'soft' },
]

/** One of Solitaire's four swords, point up, the end of the grip at (0, 0). */
const SOLITAIRE_SWORD: Stroke[] = [
  { d: 'M-3 -26 V-116 L0 -124 L3 -116 V-26' },
  { d: ellipse(0, -24, 9, 3), role: 'accent' },
  { d: 'M-2.5 -21 V0 H2.5 V-21 M-2.5 -14 L2.5 -10 M-2.5 -7 L2.5 -3' },
]

/** One of the four fireballs on Raijin's ring, its flame licking up. */
const RAIJIN_FIREBALL =
  'M0 8 C-9 8 -12 0 -10 -6 C-8 -12 -2 -14 0 -22 C4 -16 2 -12 6 -10 C12 -6 11 8 0 8 Z'

/** The drawings of the records filed in the wano stretch of the route. */
export const wanoArt = {
  // A closed country seen from the sea: one tall peak, the far flank hatched,
  // a bank of cloud across it in the record's colour, and roofs at its foot.
  // The peak and the roofs stand for the country as a whole, an arc's
  // symbol, not one place in it: Wano itself is first seen at 891.
  'wano': [
    { d: 'M51.2 78 L80 30 L108.8 78' },
    { d: 'M38 100 L21.2 128 M122 100 L138.8 128' },
    { d: 'M80 30 Q84 50 90 76 M97 100 Q100 114 102 128', role: 'soft' },
    {
      d: 'M86 54 l5 -3 M88 66 l8 -5 M102 112 l10 -6 M104 124 l14 -8',
      role: 'ambient',
    },
    {
      d: 'M24 100 q-6 -12 10 -13 q4 -11 18 -7 q8 -9 20 -1 q10 -7 20 1 q12 -6 20 3 q14 -2 16 9 q10 2 8 8 Z',
      role: 'accent',
    },
    {
      d: 'M110 56 q2 -8 10 -7 q6 -7 13 0 q9 -1 8 7 Z M14 66 q2 -7 9 -6 q6 -6 12 1 q7 0 6 5 Z',
      role: 'soft',
    },
    {
      d: 'M40 150 l12 -12 h56 l12 12 M50 138 l10 -10 h40 l10 10 M64 150 v-8 h32 v8',
      role: 'soft',
    },
    { d: 'M-4 150 H164', role: 'ambient' },
    ...SEA.slice(1),
  ],

  // A pine leaning out from the edge of a forest over a beach, the sea washing up on the sand.
  'kuri': [
    {
      d: 'M50 140 C54 118 44 102 56 86 C64 76 74 68 88 60 M58 90 C68 88 86 86 104 84 M52 110 C44 106 36 104 26 104',
      role: 'accent',
    },
    {
      d: 'M64 60 q2 -10 14 -10 q6 -10 18 -6 q10 -6 18 2 q10 0 10 10 Z M88 84 q2 -8 12 -8 q6 -8 14 -2 q10 0 10 10 Z M8 104 q2 -8 10 -8 q6 -6 12 0 q8 0 8 8 Z',
      role: 'accent',
    },
    {
      d: 'M126 140 C124 124 130 112 138 104 C142 100 146 98 150 98',
      role: 'soft',
    },
    { d: 'M134 98 q2 -8 10 -8 q6 -6 12 0 q6 0 6 8 Z', role: 'soft' },
    {
      d: 'M-4 128 q6 -14 12 -2 q6 -16 12 0 q4 -10 10 0 M108 130 q6 -12 10 -2',
      role: 'ambient',
    },
    { d: 'M-4 140 C40 142 90 146 164 150', role: 'soft' },
    {
      d: dots([
        [30, 148],
        [70, 152],
        [104, 151],
        [138, 156],
      ]),
      role: 'ambient',
    },
    ...SEA,
  ],

  // A bowl of red bean soup, and the dango skewer laid beside it.
  'tama': [
    { d: 'M30 118 C34 152 50 170 72 170 C94 170 110 152 114 118 Z' },
    { d: ellipse(72, 118, 42, 9) },
    { d: ellipse(72, 120, 33, 6), role: 'accent' },
    {
      d: dots([
        [58, 118],
        [72, 125],
        [86, 118],
        [66, 111],
      ]),
      role: 'accent',
    },
    { d: 'M60 170 h24 M64 178 h16' },
    { d: 'M112 28 L140 92' },
    { d: circle(118, 42, 9) },
    { d: circle(126, 60, 9) },
    { d: circle(134, 78, 9) },
    shadow(72, 182, 44),
  ],

  // His red tengu mask laid flat on its back and seen from the side: the
  // shell of the mask with its rim's thickness, the long nose rising out of
  // it in profile as a cone in his colour, its base hatched, no eyes and no
  // mouth. The sword he draws on Luffy lies in front of it. He wears the
  // mask from his first scene, at Amigasa (894).
  'tenguyama-hitetsu': [
    { d: 'M14 146 C16 120 46 104 80 104 C112 104 140 120 142 146' },
    {
      d: 'M14 146 Q78 158 142 146 M16 152 Q78 164 140 152 M14 146 V152 M142 146 V152',
    },
    { d: 'M34 130 Q58 118 76 118', role: 'soft' },
    {
      d: 'M66 118 C76 94 98 60 124 30 C128 26 136 28 134 36 C116 66 102 98 96 120 Q80 126 66 118 Z',
      role: 'accent',
    },
    { d: 'M70 112 l9 2 M74 102 l9 2 M79 92 l8 2', role: 'ambient' },
    { d: 'M86 116 C94 92 108 66 128 34', role: 'soft' },
    { d: 'M108 112 l8 4 M118 116 l8 5 M128 122 l7 5', role: 'ambient' },
    { d: 'M44 176 L148 164 L149 171 L45 183 Z' },
    { d: ellipse(42, 179, 3, 8) },
    { d: 'M40 176 L14 179 L15 185 L41 183' },
    { d: 'M20 179 l1 6 M26 178 l1 6 M32 177 l1 6', role: 'soft' },
    shadow(82, 192, 66),
  ],

  // A tea tray with a pot and a cup, a chrysanthemum beside it: she serves
  // at a tea house, and takes up a sword only at 901, in `wanoRedrawn`.
  'kiku': [
    { d: 'M26 152 H134 L128 162 H32 Z' },
    { d: ellipse(68, 128, 26, 22) },
    { d: 'M54 108 Q68 96 82 108' },
    { d: 'M94 126 Q108 122 112 106', role: 'soft' },
    { d: 'M42 116 Q28 128 44 140', role: 'soft' },
    { d: 'M100 136 H120 L117 150 H103 Z' },
    { d: 'M106 128 q-4 -6 0 -12 M114 128 q-4 -6 0 -12', role: 'ambient' },
    { d: circle(116, 62, 14), role: 'accent' },
    {
      d: 'M116 48 V76 M102 62 H130 M106.1 52.1 L125.9 71.9 M125.9 52.1 L106.1 71.9',
      role: 'accent',
    },
    { d: circle(116, 62, 4), role: 'accent' },
    { d: 'M116 76 Q126 112 128 150', role: 'soft' },
    shadow(80, 174, 52),
  ],

  // His open kimono folded, the flowers on it in his colour, its sides
  // hatched, and his long katana drawn and laid across it: that is how he
  // stands against Oden in Kin'emon's story of Kuri's lawless days (910).
  'ashura-doji': [
    { d: 'M20 118 L104 100 L144 122 L60 142 Z' },
    { d: 'M20 118 V132 L60 156 V142 M60 156 L144 136 V122' },
    { d: 'M66 108 L84 126 L98 104', role: 'soft' },
    { d: 'M40 114 L120 98 M36 126 L128 108', role: 'soft' },
    {
      d: 'M42 126 Q38.4 120.1 42 120 Q45.6 120.1 42 126 Q46.5 120.8 47.7 124.1 Q48.7 127.6 42 126 Q48.4 128.6 45.5 130.9 Q42.5 132.9 42 126 Q41.5 132.9 38.5 130.9 Q35.6 128.6 42 126 Q35.3 127.6 36.3 124.1 Q37.5 120.8 42 126 M64 134 Q60.4 128.1 64 128 Q67.6 128.1 64 134 Q68.5 128.8 69.7 132.1 Q70.7 135.6 64 134 Q70.4 136.6 67.5 138.9 Q64.5 140.9 64 134 Q63.5 140.9 60.5 138.9 Q57.6 136.6 64 134 Q57.3 135.6 58.3 132.1 Q59.5 128.8 64 134 M124 118 Q120.4 112.1 124 112 Q127.6 112.1 124 118 Q128.5 112.8 129.7 116.1 Q130.7 119.6 124 118 Q130.4 120.6 127.5 122.9 Q124.5 124.9 124 118 Q123.5 124.9 120.5 122.9 Q117.6 120.6 124 118 Q117.3 119.6 118.3 116.1 Q119.5 112.8 124 118 M108 108 Q105 103.1 108 103 Q111 103.1 108 108 Q111.7 103.6 112.8 106.5 Q113.6 109.3 108 108 Q113.3 110.2 110.9 112 Q108.4 113.7 108 108 Q107.6 113.7 105.1 112 Q102.7 110.2 108 108 Q102.4 109.3 103.2 106.5 Q104.3 103.6 108 108 M52 112 Q49 107.1 52 107 Q55 107.1 52 112 Q55.7 107.6 56.8 110.5 Q57.6 113.3 52 112 Q57.3 114.2 54.9 116 Q52.4 117.7 52 112 Q51.6 117.7 49.1 116 Q46.7 114.2 52 112 Q46.4 113.3 47.2 110.5 Q48.3 107.6 52 112',
      role: 'accent',
    },
    {
      d: 'M26 136 l6 -6 M36 142 l6 -6 M46 148 l6 -6 M78 150 l6 -6 M100 146 l6 -6 M122 140 l6 -6',
      role: 'ambient',
    },
    { d: 'M44 160 Q104 128 152 84 L156 82 L154 88 Q108 134 48 166 Z' },
    { d: 'M50 160 Q106 130 150 90', role: 'soft' },
    { d: ellipse(44, 164, 4, 9), transform: 'rotate(-30 44 164)' },
    { d: 'M41 161 L16 176 L19 181 L45 167' },
    { d: 'M22 173 l3 5 M28 169 l3 5 M34 166 l3 5', role: 'soft' },
    shadow(84, 186, 62),
  ],

  // The spinosaurus he walks into the capital as, side on: the sail and its
  // spines in his colour, the far legs and the belly hatched, no eye. His
  // power is shown with him, and named, the night he is sent after the soba
  // seller (923, ch. 929).
  'page-one': [
    {
      d: 'M2 94 C8 86 24 82 36 82 C46 82 50 90 52 98 C54 106 56 110 58 112 C76 112 104 110 124 114 C138 116 150 124 158 136 C146 134 132 132 120 136 C110 144 92 146 74 142 C62 140 50 134 44 126 C40 116 36 106 28 102 C20 100 8 100 2 94 Z',
    },
    { d: 'M54 112 C56 70 74 44 92 44 C110 44 126 76 124 114', role: 'accent' },
    {
      d: 'M64 110 L66 64 M78 110 L82 48 M92 112 L94 44 M106 112 L108 54 M118 114 L118 78',
      role: 'soft',
    },
    {
      d: 'M100 142 C102 154 98 166 96 176 H108 M84 144 C86 156 84 166 82 176 H92',
    },
    {
      d: 'M54 134 C52 148 52 162 54 176 H64 M44 128 C42 144 40 160 42 176 H50',
      role: 'soft',
    },
    { d: 'M46 128 Q70 134 96 130', role: 'soft' },
    {
      d: 'M60 140 l4 4 M70 142 l4 4 M110 140 l4 4 M120 138 l4 4',
      role: 'ambient',
    },
    shadow(80, 182, 64),
  ],

  // The paper door in his castle with the shadow behind it: one body and
  // several necks rising, each a serpent's head with a horn, no eye and no
  // mouth. At 921 (ch. 927) the shogun is only this shadow; his face, crown
  // and kimono come at 922. His heads are cut at 1026, in `wanoRedrawn`.
  'kurozumi-orochi': [
    { d: 'M16 30 H144 V150 H16 Z' },
    { d: 'M16 30 L22 24 H150 L144 30 M144 150 L150 144 V24', role: 'soft' },
    { d: 'M80 30 V150' },
    {
      d: 'M37.3 30 V150 M58.7 30 V150 M101.3 30 V150 M122.7 30 V150 M16 60 H144 M16 90 H144 M16 120 H144',
      role: 'ambient',
    },
    {
      d: 'M24 150 C30 132 54 126 80 126 C106 126 130 132 136 150',
      role: 'accent',
    },
    {
      d: OROCHI_NECK,
      role: 'accent',
      transform: 'translate(44 140) scale(-0.76 0.7)',
    },
    {
      d: OROCHI_NECK,
      role: 'accent',
      transform: 'translate(64 130) scale(-0.9 0.96)',
    },
    {
      d: OROCHI_NECK,
      role: 'accent',
      transform: 'translate(96 130) scale(0.9 0.9)',
    },
    {
      d: OROCHI_NECK,
      role: 'accent',
      transform: 'translate(118 140) scale(0.76 0.68)',
    },
    { d: 'M4 150 H156', role: 'ambient' },
  ],

  // Her katana in its black sheath, the purple wrapping in her colour, laid
  // down at a slant: she carries it from the day she meets the crew (911).
  // Her fruit waits for 916, in wanoRedrawn.
  'shinobu': [
    ...placed(SHINOBU_KATANA, 'translate(44 146) rotate(-22)'),
    {
      d: 'M50 156 l8 4 M72 147 l8 4 M94 138 l8 4 M116 129 l8 4',
      role: 'ambient',
    },
    shadow(80, 176, 56),
  ],

  // A paper lantern with the flower crest of the old yakuza.
  'hyogoro': [
    { d: 'M54 58 C38 78 38 130 54 150 H106 C122 130 122 78 106 58 Z' },
    { d: 'M60 58 h40 v-8 h-40 Z' },
    { d: 'M80 50 V30' },
    { d: circle(80, 25, 5) },
    { d: 'M60 150 h40 v8 h-40 Z' },
    { d: 'M42 74 H118 M40 86 H120 M40 126 H120 M42 138 H116', role: 'soft' },
    {
      d: `${circle(80, 92, 7)} ${circle(91, 100, 7)} ${circle(87, 113, 7)} ${circle(73, 113, 7)} ${circle(69, 100, 7)}`,
      role: 'accent',
    },
    { d: circle(80, 104, 4), role: 'accent' },
    shadow(80, 170, 40),
  ],

  // His blond braid hanging through its eight ties down to the stinger-shaped
  // tuft, and the cigar he always has, set down beside it, still lit. Both are
  // his when he takes the stage at Udon (930). His brachiosaurus waits for
  // 944, in `wanoRedrawn`.
  'queen': [
    {
      d: 'M62.6 14 C47.6 16 54.6 28 69.6 30 M69.6 30 C55.2 32 63.4 44 77.8 46 M77.8 46 C64 48 69.4 60 83.2 62 M83.2 62 C70 64 70.2 76 83.4 78 M83.4 78 C70.8 80 65.6 92 78.2 94 M78.2 94 C66.2 96 58.1 108 70.1 110 M70.1 110 C58.7 112 51.5 124 62.9 126 M62.9 126 C52.1 128 49.2 140 60 142',
    },
    {
      d: 'M62.6 14 C77.6 16 84.6 28 69.6 30 M69.6 30 C84 32 92.2 44 77.8 46 M77.8 46 C91.6 48 97 60 83.2 62 M83.2 62 C96.4 64 96.6 76 83.4 78 M83.4 78 C96 80 90.8 92 78.2 94 M78.2 94 C90.2 96 82.1 108 70.1 110 M70.1 110 C81.5 112 74.3 124 62.9 126 M62.9 126 C73.7 128 70.8 140 60 142',
    },
    {
      d: 'M59.6 17 C55.6 21 62.6 24 66.6 27 M65.6 17 C68.6 21 75.6 24 72.6 27 M66.6 33 C62.6 37 70.8 40 74.8 43 M72.6 33 C75.6 37 83.8 40 80.8 43 M74.8 49 C70.8 53 76.2 56 80.2 59 M80.8 49 C83.8 53 89.2 56 86.2 59 M80.2 65 C76.2 69 76.4 72 80.4 75 M86.2 65 C89.2 69 89.4 72 86.4 75 M80.4 81 C76.4 85 71.2 88 75.2 91 M86.4 81 C89.4 85 84.2 88 81.2 91 M75.2 97 C71.2 101 63.1 104 67.1 107 M81.2 97 C84.2 101 76.1 104 73.1 107 M67.1 113 C63.1 117 55.9 120 59.9 123 M73.1 113 C76.1 117 68.9 120 65.9 123 M59.9 129 C55.9 133 53 136 57 139 M65.9 129 C68.9 133 66 136 63 139',
      role: 'soft',
    },
    {
      d: 'M55.6 14 H69.6 M62.6 30 H76.6 M70.8 46 H84.8 M76.2 62 H90.2 M76.4 78 H90.4 M71.2 94 H85.2 M63.1 110 H77.1 M55.9 126 H69.9',
      role: 'accent',
    },
    {
      d: 'M53 142 C42 154 52 170 60 184 C68 170 78 154 67 142 M53 142 H67',
      role: 'accent',
    },
    { d: 'M56 150 C53 160 56 170 60 178', role: 'soft' },
    { d: 'M100 176 L138 166 C142 165 144 171 140 172 L102 182 Z' },
    { d: 'M130 168 l2 6', role: 'soft' },
    {
      d: 'M141 168 C150 160 140 152 148 142 C154 134 146 126 150 118',
      role: 'ambient',
      dashed: true,
    },
    shadow(96, 190, 52),
  ],

  // One of his black feathered wings, hatched, with the fire that burns on
  // his back rising over it in his colour. Both are there from his first
  // scene on Onigashima (918); the mask is not drawn, a mask is a face.
  'king': [
    {
      d: 'M24 116 C36 70 74 40 122 36 C130 50 128 64 118 76 L130 90 L106 90 L114 106 L90 102 L94 118 L72 112 L72 126 L52 118 L48 130 C38 128 28 124 24 116 Z',
    },
    {
      d: 'M118 76 L100 74 M106 90 L88 86 M90 102 L74 96 M72 112 L60 104 M52 118 L44 110',
      role: 'soft',
    },
    {
      d: 'M30 104 C50 80 80 60 120 48 M36 112 C56 92 84 74 118 64',
      role: 'soft',
    },
    {
      d: 'M58 116 l6 -8 M76 106 l6 -8 M94 94 l6 -8 M108 80 l6 -8',
      role: 'ambient',
    },
    ...KING_FIRE,
    { d: 'M4 188 H156', role: 'ambient' },
  ],

  // The oiran's tall geta, a pair set down side by side, and two of the golden
  // hairpins she wears laid in front of them: she parades through the capital
  // on them at 921.
  'komurasaki': [
    ...placed(KOMURASAKI_GETA, 'translate(54 112)'),
    ...placed(KOMURASAKI_GETA, 'translate(106 102) rotate(8)'),
    {
      d: 'M41 122 l-4 6 M41 136 l-4 6 M120 114 l-4 6 M118 128 l-4 6',
      role: 'ambient',
    },
    shadow(80, 166, 58),
    { d: 'M14 186 L86 174 M40 194 L112 186', role: 'accent' },
    {
      d: 'M86 174 L100 166 L104 178 Z M112 186 L126 178 L128 190 Z',
      role: 'accent',
    },
    { d: 'M100 172 v10 M103 174 v9 M125 184 v8', role: 'soft' },
  ],

  // Her purple obi with its pink dots, untied and lying in a loose curve, the
  // end that turns over hatched, and the small yellow bow it is tied with in
  // her colour. She wears it from her first scene, at the soba stand (920).
  'toko': [
    {
      d: 'M14 150 C30 128 56 128 74 140 C92 152 112 150 128 132 L146 146 C128 168 100 172 78 160 C60 150 40 152 30 168 Z',
    },
    {
      d: 'M128 132 C134 122 140 110 136 96 L152 104 C156 120 152 134 146 146 Z',
    },
    { d: 'M138 104 l8 4 M140 114 l8 4 M140 124 l8 4', role: 'ambient' },
    {
      d: 'M22 156 C36 142 58 142 76 152 C94 162 116 158 134 142',
      role: 'soft',
    },
    {
      d: `${circle(32, 150, 2.5)} ${circle(50, 146, 2.5)} ${circle(66, 152, 2.5)} ${circle(86, 158, 2.5)} ${circle(104, 158, 2.5)} ${circle(122, 150, 2.5)} ${circle(46, 158, 2.5)} ${circle(96, 166, 2.5)}`,
      role: 'soft',
    },
    {
      d: 'M60 112 C46 96 28 98 30 112 C32 126 50 122 60 116 C70 122 88 126 90 112 C92 98 74 96 60 112 Z',
      role: 'accent',
    },
    {
      d: 'M56 118 C52 126 50 132 46 138 M64 118 C68 126 72 130 76 136',
      role: 'accent',
    },
    { d: ellipse(60, 115, 4, 4), role: 'accent' },
    shadow(84, 186, 66),
  ],

  // A yakuza's sabre over the money box.
  'kyoshiro': [
    { d: 'M20 84 C56 60 104 44 146 38', role: 'accent' },
    { d: 'M24 96 C58 74 104 58 144 50', role: 'accent' },
    { d: 'M146 38 C152 40 150 48 144 50', role: 'accent' },
    { d: 'M14 76 L30 104' },
    { d: 'M4 92 L20 116 L28 110 L12 86 Z' },
    { d: 'M30 118 H118 V172 H30 Z' },
    { d: 'M30 118 L48 106 H136 L118 118 M118 172 L136 160 V106' },
    { d: 'M44 118 V172 M104 118 V172', role: 'soft' },
    { d: 'M66 132 h16 v14 h-16 Z' },
    shadow(80, 182, 56),
  ],

  // Tonoyasu's polka-dot bandana, still tied in the ring it makes round his
  // head, set down on its side with the knot's two ends standing up. He wears
  // it from the day he meets Zoro (922).
  'shimotsuki-yasuie': [
    { d: 'M18 132 C18 100 142 100 142 132 C142 164 18 164 18 132 Z' },
    { d: 'M38 126 C42 112 118 112 122 124 C118 140 42 142 38 126 Z' },
    {
      d: 'M38 126 C36 136 34 144 32 150 M122 124 C124 134 126 142 128 148',
      role: 'soft',
    },
    {
      d: 'M24 146 l6 -6 M28 152 l6 -6 M128 152 l6 -6 M124 156 l6 -6',
      role: 'ambient',
    },
    { d: 'M70 110 C68 100 76 94 82 98 C88 94 96 100 92 110' },
    {
      d: 'M82 98 C72 80 52 72 42 80 C50 90 64 96 76 102 M84 98 C94 80 114 72 124 80 C116 90 102 96 88 102',
    },
    {
      d: 'M54 82 C60 86 66 92 72 96 M112 82 C106 86 100 92 94 96',
      role: 'soft',
    },
    {
      d: `${circle(32, 132, 3.5)} ${circle(52, 144, 3.5)} ${circle(78, 148, 3.5)} ${circle(104, 146, 3.5)} ${circle(124, 136, 3.5)} ${circle(30, 116, 3)} ${circle(130, 114, 3)} ${circle(108, 105, 2.5)}`,
      role: 'accent',
    },
    shadow(80, 176, 64),
  ],

  // A naginata on the bridge, the stolen swords piled at its foot. The fox
  // he really is waits for 954, in `wanoRedrawn`.
  'gyukimaru': [
    { d: 'M8 148 C40 106 120 106 152 148' },
    { d: 'M8 158 C40 118 120 118 152 158' },
    { d: 'M22 118 C52 96 108 96 138 118' },
    { d: 'M30 130 V116 M56 114 V100 M104 114 V100 M130 130 V116' },
    { d: 'M34 184 L92 72', role: 'accent' },
    {
      d: 'M92 72 C104 54 118 40 134 32 C128 50 116 66 100 80 Z',
      role: 'accent',
    },
    { d: 'M86 82 l12 6' },
    { d: 'M108 166 L150 154 M110 178 L148 166 M106 172 L146 184' },
    { d: 'M4 190 H156', role: 'ambient' },
  ],

  // His left forearm raised, seen from the palm: the index finger up, the
  // other three folded side by side and the thumb across them. "Only once",
  // the one chance he gives Robin when his ninja catch her in the castle, as
  // the ch. 931 panel and the ep. 925 frame show it. The tattoo is the one on
  // that arm: three of its five ninja stars, the ones on the face we see, in
  // his colour, over two zigzag stripes that stop where the arm turns away
  // into the hatching. The earlobes he fights with come much later.
  'fukurokuju': [
    { d: 'M66 72 V24 Q66 14 72.5 14 Q79 14 79 24 V62' },
    { d: 'M67 37 q5.5 1.5 11 0 M67 52 q5.5 1.5 11 0', role: 'soft' },
    {
      d: 'M79 62 Q79 56 85.5 56 Q92 56 92 62 Q92 57 98 57 Q104 57 104 63 Q104 59 108.5 60 Q113 62 112 70 C112 86 109 100 101 110',
    },
    { d: 'M92 62 V72 M104 63 V72', role: 'soft' },
    {
      d: 'M66 72 C62 80 62 92 64 98 C76 88 90 84 102 82 Q108 82 107 88 Q106 93 98 93 C86 94 74 98 66 112',
    },
    { d: 'M66 112 C63 128 59 144 56 160 C54 172 53 186 53 198' },
    { d: 'M101 110 C106 126 111 144 114 160 C116 172 117 186 117 198' },
    {
      d: 'M73.5 110.8 L75.5 116 L80.7 118 L75.5 120 L73.5 125.2 L71.5 120 L66.3 118 L71.5 116 Z M84.5 123.3 L86.5 128.5 L91.7 130.5 L86.5 132.5 L84.5 137.7 L82.5 132.5 L77.3 130.5 L82.5 128.5 Z M95.5 135.8 L97.5 141 L102.7 143 L97.5 145 L95.5 150.2 L93.5 145 L88.3 143 L93.5 141 Z',
      role: 'accent',
    },
    {
      d: 'M57.8 156 l4.4 -4 l4.4 4 l4.4 -4 l4.4 4 l4.4 -4 l4.4 4 l4.4 -4 l4.4 4 l4.4 -4 M56 164 l4.4 -4 l4.4 4 l4.4 -4 l4.4 4 l4.4 -4 l4.4 4 l4.4 -4 l4.4 4 l4.4 -4 l4.4 4',
    },
    {
      d: 'M97 124 l6 -4 M103 140 l5.5 -4 M104.5 152 l6 -4 M107 166 l6 -4 M108.5 180 l6 -4',
      role: 'ambient',
    },
  ],

  // The arched iron door of his cell at the back of the Udon jail, the dark
  // behind its bars, and the day's poisoned fish set down in front of it, as
  // Udon is shown at 916. He is let out at 948, in `wanoRedrawn`.
  'kawamatsu': [
    { d: 'M30 150 V66 C30 30 110 30 110 66 V150' },
    { d: 'M40 150 V68 C40 42 100 42 100 68 V150', role: 'soft' },
    {
      d: 'M52 150 V50 M64 150 V44 M76 150 V44 M88 150 V50 M40 78 H100 M40 106 H100 M40 134 H100',
    },
    {
      d: 'M44 96 l6 -6 M56 96 l6 -6 M68 96 l6 -6 M80 96 l6 -6 M92 96 l6 -6 M44 124 l6 -6 M56 124 l6 -6 M68 124 l6 -6 M80 124 l6 -6 M92 124 l6 -6',
      role: 'ambient',
    },
    {
      d: 'M4 56 H24 M116 56 H156 M4 92 H30 M110 92 H156 M4 128 H30 M110 128 H156 M14 56 V92 M136 56 V92 M20 92 V128 M128 92 V128 M12 128 V150 M140 128 V150',
      role: 'ambient',
    },
    { d: 'M4 150 H156', role: 'ambient' },
    {
      d: 'M78 170 C92 156 120 156 134 168 C120 180 92 182 78 170 Z M134 168 L150 158 L148 178 Z',
      role: 'accent',
    },
    {
      d: 'M90 162 C86 166 86 172 90 176 M104 158 C108 152 116 152 120 160 M96 169 C108 166 120 166 132 168',
      role: 'soft',
    },
    shadow(112, 186, 40),
  ],

  // A blank flag, torn, hanging from the yard of a broken mast over a ship's
  // rail: Sengoku tells of the crew that fought itself on board and was
  // broken at God Valley (958). Rocks himself is only a silhouette there.
  'rocks-d-xebec': [
    { d: 'M74 150 V60 L77 48 L80 58 L83 42 L86 56 V150' },
    {
      d: 'M82 66 l4 -3 M82 84 l4 -3 M82 102 l4 -3 M82 120 l4 -3 M82 138 l4 -3',
      role: 'ambient',
    },
    { d: 'M28 74 Q80 66 132 74 M28 74 v-4 M132 74 v-4' },
    {
      d: 'M32 76 C56 86 100 86 128 76 C124 92 130 110 122 126 L110 118 L102 134 L90 120 L78 136 L66 120 L54 132 L46 118 L36 126 C40 108 30 92 32 76 Z',
      role: 'accent',
    },
    {
      d: 'M56 84 C60 100 54 114 58 124 M100 84 C96 100 104 114 100 126',
      role: 'soft',
    },
    { d: 'M104 88 l8 6 M106 100 l8 6 M104 112 l6 5', role: 'ambient' },
    { d: 'M28 74 L10 110 M132 74 L150 110', role: 'ambient', dashed: true },
    {
      d: 'M-4 150 H164 M-4 142 H164 M10 142 V150 M30 142 V150 M50 142 V150 M110 142 V150 M130 142 V150 M150 142 V150',
      role: 'soft',
    },
    ...SEA.slice(1),
  ],

  // A pot of oden with two swords crossed behind it.
  'kozuki-oden': [
    { d: 'M52 112 L126 36 L134 42 L60 118 Z', role: 'accent' },
    { d: 'M108 112 L34 36 L26 42 L100 118 Z', role: 'accent' },
    { d: 'M46 106 L60 122 M114 106 L100 122' },
    { d: 'M36 124 C36 162 54 176 80 176 C106 176 124 162 124 124 Z' },
    { d: ellipse(80, 124, 44, 10) },
    { d: ellipse(80, 126, 34, 7), role: 'soft' },
    { d: 'M36 134 C24 132 24 146 34 148 M124 134 C136 132 136 146 126 148' },
    {
      d: dots([
        [66, 124],
        [82, 130],
        [96, 124],
      ]),
      role: 'soft',
    },
    { d: 'M4 186 H156', role: 'ambient' },
  ],

  // An hourglass with cherry petals falling through it.
  'kozuki-toki': [
    { d: 'M36 34 H124 M36 172 H124' },
    { d: 'M44 34 V172 M116 34 V172' },
    { d: 'M52 42 H108 L86 103 L108 164 H52 L74 103 Z' },
    { d: 'M62 164 q18 -14 36 0', role: 'soft' },
    { d: 'M80 108 V150', role: 'ambient', dashed: true },
    {
      d: 'M66 60 c-5 -4 0 -10 6 -8 c5 2 2 10 -6 8z M94 74 c-5 -4 0 -10 6 -8 c5 2 2 10 -6 8z M78 98 c-5 -4 0 -10 6 -8 c5 2 2 10 -6 8z M68 142 c-5 -4 0 -10 6 -8 c5 2 2 10 -6 8z M92 152 c-5 -4 0 -10 6 -8 c5 2 2 10 -6 8z',
      role: 'accent',
    },
    shadow(80, 184, 48),
  ],

  // Two lit candles on a headband, as she wore them when she found Orochi (965).
  'kurozumi-higurashi': [
    { d: 'M52 124 V72 h12 V124 M96 124 V72 h12 V124' },
    { d: 'M58 72 v-6 M102 72 v-6', role: 'soft' },
    {
      d: 'M58 64 c-7 -8 -2 -16 0 -26 c5 10 7 18 0 26 Z M102 64 c-7 -8 -2 -16 0 -26 c5 10 7 18 0 26 Z',
      role: 'accent',
    },
    { d: 'M64 80 v8 M96 84 v6', role: 'soft' },
    { d: 'M28 120 C50 134 110 134 132 120 V130 C110 144 50 144 28 130 Z' },
    { d: 'M28 120 C50 108 110 108 132 120', role: 'soft' },
    { d: 'M132 124 l14 10 M132 128 l8 16', role: 'soft' },
    shadow(80, 176, 48),
  ],

  // A cicada under the dome of a barrier.
  'kurozumi-semimaru': [
    { d: 'M22 178 C22 78 138 78 138 178', role: 'accent' },
    { d: 'M34 178 C34 94 126 94 126 178', role: 'soft' },
    { d: `${cell(50, 112)} ${cell(70, 112)} ${cell(90, 112)}`, role: 'soft' },
    {
      d: 'M80 132 C74 132 70 140 72 150 C74 162 78 170 80 170 C82 170 86 162 88 150 C90 140 86 132 80 132 Z',
    },
    { d: 'M72 136 C52 138 38 150 44 158 C52 164 68 154 75 145 Z' },
    { d: 'M88 136 C108 138 122 150 116 158 C108 164 92 154 85 145 Z' },
    { d: 'M50 152 L70 143 M110 152 L90 143', role: 'soft' },
    { d: 'M6 178 H154', role: 'ambient' },
  ],

  // Two open folding fans, the smaller one tipped the other way over the
  // corner of the first: as a boy he dances with a fan in each hand for
  // coins in the snow of Ringo when Oden finds him (961, ch. 962). His
  // flintlocks wait for 995, in `wanoRedrawn`.
  'izo': [
    ...placed(IZO_FAN, 'translate(64 134) rotate(-20)'),
    ...placed(IZO_FAN, 'translate(100 162) rotate(40) scale(0.8)'),
    shadow(82, 188, 62),
  ],

  // Her red high heels on the trailing hem of her dark cape: one standing,
  // the other tipped onto its toe with the heel in the air. The cape lies in
  // folds, hatched where it is dark, its light fur in uneven tufts along the
  // edge. She wears all of it when the Tobiroppo wait to be called at 982
  // (ch. 978). Her Zoan waits for 990, in `wanoRedrawn`.
  'ulti': [
    {
      d: 'M4 160 C6.3 156.1 9 152.5 11.9 149.4 M84.2 128.1 C88.1 130.1 90.1 134 94 136 C95.2 135.1 96.6 134.2 98 133.4 M121 126.1 C122 126 123 126 124 126 C130 130 132 134 136 138 C144 140 152 146 156 154',
    },
    { d: 'M4 160 C40 172 120 174 156 154' },
    {
      d: 'M5.1 160.4 C6.1 166.4 13.8 169 14.7 163 C16.3 171 28.6 173.9 30.2 165.9 C31.3 170.9 40 172.3 41.1 167.3 C43.6 176.3 63.6 177.9 66.1 168.9 C67.5 173.9 78.6 174 80 169 C82.2 177 100.2 175.8 102.4 167.8 C104.6 173.8 121.6 170.8 123.7 164.8 C124.9 172.8 134.5 170 135.7 162 C137.4 168 150.9 161.7 152.6 155.7',
      role: 'soft',
    },
    { d: 'M136 138 C140 146 140 154 136 164', role: 'soft' },
    { d: 'M142 154 L148 148', role: 'ambient' },
    ...placed(ULTI_HEEL, 'translate(14 158) scale(1.15)'),
    ...placed(ULTI_HEEL, 'translate(98 150) rotate(-30) scale(0.85)'),
    shadow(80, 188, 72),
  ],

  // His long katana in its pink scabbard with the white flowers on it, the
  // quatrefoil guard, and a cigarette left burning beside it: he walks into
  // Onigashima with both at 982. His saber-toothed tiger waits for 1013, in
  // `wanoRedrawn`.
  'whos-who': [
    { d: 'M2 104 H38 V120 H2 Q-3 112 2 104 Z', transform: WHOS_WHO_LAY },
    {
      d: 'M6 104 L12 120 L18 104 L24 120 L30 104 L36 120',
      role: 'soft',
      transform: WHOS_WHO_LAY,
    },
    {
      d: 'M43 102 C38 94 52 92 49 102 C58 99 58 113 49 110 C52 120 38 118 43 110 C34 113 34 99 43 102 Z',
      role: 'accent',
      transform: WHOS_WHO_LAY,
    },
    { d: 'M54 104 H150 Q158 112 150 120 H54 Z', transform: WHOS_WHO_LAY },
    { d: 'M62 104 V120 M62 108 H150', role: 'soft', transform: WHOS_WHO_LAY },
    {
      d: 'M80 109 v8 M76.5 111 l7 4 M76.5 115 l7 -4 M106 109 v8 M102.5 111 l7 4 M102.5 115 l7 -4 M132 109 v8 M128.5 111 l7 4 M128.5 115 l7 -4',
      role: 'soft',
      transform: WHOS_WHO_LAY,
    },
    { d: 'M92 170 L128 164 L129 170 L93 176 Z M120 165 l1 6' },
    {
      d: 'M130 167 C138 162 132 156 138 150 C142 146 138 142 142 138',
      role: 'ambient',
      dashed: true,
    },
    shadow(80, 186, 70),
  ],

  // Her long pipe, the bowl still smoking, laid on the two short swords she
  // wears in her hair: how she walks into Onigashima at 982. Her spider
  // waits for 1013, in `wanoRedrawn`.
  'black-maria': [
    { d: MARIA_HAIR_SWORD, transform: 'translate(52 170)' },
    { d: MARIA_HAIR_SWORD, transform: 'translate(108 170) scale(-1 1)' },
    {
      d: 'M-10 6 l2 4 M-6 4 l2 4',
      role: 'soft',
      transform: 'translate(52 170)',
    },
    {
      d: 'M-10 6 l2 4 M-6 4 l2 4',
      role: 'soft',
      transform: 'translate(108 170) scale(-1 1)',
    },
    {
      d: 'M12 140 L28 133 L30 138 L14 145 Z',
      role: 'accent',
      transform: MARIA_PIPE,
    },
    { d: 'M28 133 L124 94 M30 138 L126 99', transform: MARIA_PIPE },
    {
      d: 'M124 94 L134 90 C134 84 136 80 140 78 L152 78 C152 86 146 94 136 98 L126 99',
      role: 'accent',
      transform: MARIA_PIPE,
    },
    { d: ellipse(146, 78, 6, 2), role: 'accent', transform: MARIA_PIPE },
    { d: 'M60 120 l2 5 M90 108 l2 5', role: 'soft', transform: MARIA_PIPE },
    {
      d: 'M146 72 C138 62 150 56 142 46 C136 38 146 32 140 22',
      role: 'ambient',
      dashed: true,
      transform: MARIA_PIPE,
    },
    shadow(80, 190, 60),
  ],

  // His cap: the puffed white crown dented along the top, the black band with
  // its row of gold studs, the black visor, and the two slender golden horns
  // curving up from the front, as he walks into Onigashima at 982. His
  // triceratops waits for 1012, in `wanoRedrawn`.
  'sasaki': [
    {
      d: 'M24 120 C14 96 26 66 58 66 C66 60 92 58 104 64 C134 62 150 92 138 118',
    },
    {
      d: 'M82 62 C76 80 74 100 78 124 M58 66 C66 72 82 72 104 64',
      role: 'soft',
    },
    { d: 'M24 120 C54 132 108 132 138 118 V130 C108 144 54 144 24 132 Z' },
    {
      d: dots([
        [34, 128],
        [46, 132],
        [58, 134],
        [70, 136],
        [94, 136],
        [106, 134],
        [118, 131],
        [130, 127],
      ]),
      role: 'soft',
    },
    { d: 'M126 132 l6 -8 M132 128 l4 -6', role: 'ambient' },
    { d: 'M24 132 C30 152 70 160 104 150 C92 146 60 144 24 132' },
    {
      d: 'M36 146 l6 -6 M48 150 l6 -6 M60 152 l6 -6 M72 152 l6 -6 M84 152 l6 -5',
      role: 'ambient',
    },
    { d: 'M66 132 C40 124 20 96 28 36 C36 90 54 114 74 126 Z', role: 'accent' },
    {
      d: 'M86 132 C112 122 132 94 126 38 C118 90 100 114 80 126 Z',
      role: 'accent',
    },
    shadow(80, 172, 64),
  ],

  // The studded kanabo he carries when he first fights at 990 (ch. 983),
  // leaning on its grip, its far face dark. His wolf's tail waits for 1041,
  // in `wanoRedrawn`.
  'yamato': [
    { d: 'M26 182 L50 150 M34 188 L58 156 M26 182 L34 188' },
    { d: 'M30 176 l7 5 M36 168 l7 5 M42 160 l7 5', role: 'soft' },
    { d: 'M46 148 L104 36 L122 30 L138 42 L62 160 Z' },
    { d: 'M104 36 L120 46 L138 42 M120 46 L58 156', role: 'soft' },
    {
      d: 'M114.1 60.2 L127.4 53.2 M105.4 75.6 L116.7 69.7 M96.7 91 L106.1 86.2 M88 106.4 L95.5 102.7 M79.3 121.8 L84.8 119.2',
      role: 'ambient',
    },
    {
      d: `${circle(108, 50, 2.5)} ${circle(98, 68, 2.5)} ${circle(88, 86, 2.5)} ${circle(78, 104, 2.5)} ${circle(68, 122, 2.5)} ${circle(114, 62, 2.5)} ${circle(104, 80, 2.5)} ${circle(94, 98, 2.5)} ${circle(84, 116, 2.5)} ${circle(74, 134, 2.5)}`,
      role: 'accent',
    },
    shadow(70, 194, 56),
  ],

  // Her big long-handled fan, the paper on its ribs left blank, and the
  // flying squirrel's tail curling up behind it: both are hers from 985.
  'bao-huang': [
    {
      d: 'M70 184 C44 186 22 172 18 150 q-8 -6 -2 -14 q-6 -8 0 -15 q-2 -10 6 -15 q2 -9 12 -10 q6 -7 16 -3 q10 -2 14 8 C68 110 60 118 52 114',
    },
    { d: 'M70 184 C54 178 42 162 42 144 C42 128 46 118 52 114', role: 'soft' },
    {
      d: 'M26 160 l6 -4 M24 140 l6 -2 M28 120 l5 0 M38 104 l3 3',
      role: 'soft',
    },
    {
      d: 'M44 72 C40 34 70 14 100 18 C132 22 148 50 140 82 C132 110 106 122 82 116 C58 110 46 94 44 72 Z',
      role: 'accent',
    },
    {
      d: 'M90 112 L52 74 M90 112 L60 40 M90 112 L82 22 M90 112 L108 22 M90 112 L132 42 M90 112 L140 74',
      role: 'soft',
    },
    { d: 'M48 94 C60 112 80 120 100 118', role: 'ambient' },
    { d: 'M86 114 L80 184 M94 114 L88 184 M80 184 H88' },
    { d: 'M82 160 h7 M81 170 h7', role: 'soft' },
    shadow(80, 190, 56),
  ],
  // The golden crane she wears in her hair, large, in flight on the end of
  // its pin, no eye; the side-handled pot she brews the cure in stands
  // small behind it, steaming. Both are hers at the tea house (899).
  'tsurujo': [
    { d: 'M40 96 C52 86 82 86 100 94 C86 104 56 106 40 96 Z', role: 'accent' },
    { d: 'M42 94 C34 88 26 80 16 76 L6 80 L16 82', role: 'accent' },
    {
      d: 'M62 90 C66 70 78 52 96 36 L98 44 L104 38 L104 48 L112 44 C102 60 90 74 80 90',
      role: 'accent',
    },
    {
      d: 'M58 102 C50 116 38 128 22 136 L26 128 L18 130 L22 122 C34 116 44 108 50 100',
      role: 'accent',
    },
    { d: 'M100 94 L132 92 M98 98 L130 104', role: 'accent' },
    {
      d: 'M70 88 C78 74 88 62 100 50 M50 104 C42 114 34 120 26 126',
      role: 'soft',
    },
    { d: 'M72 104 L128 176 L124 179 L68 107 Z' },
    { d: 'M108 150 C104 136 112 128 128 128 C144 128 152 136 148 150 Z' },
    { d: ellipse(128, 128, 12, 3.5), role: 'soft' },
    { d: 'M148 140 L158 134 L159 138 L148 146', role: 'soft' },
    { d: 'M138 120 C134 112 142 108 138 100', role: 'soft' },
    { d: 'M140 146 l5 -5 M144 150 l3 -3', role: 'ambient' },
    shadow(100, 184, 50),
  ],

  // The ring at Bakura where he is the star of the sumo exhibition (902):
  // the raised square of clay seen corner-on, resting on the ground, its
  // far side hatched, the ring of straw bales on top with the rope round
  // each (the bales on a raised edge in the ch. 916 panel). On the clay lies
  // his pink topknot, square at the cut, bound tight next to it, the hair
  // fanning out loose beyond: Kiku cuts it off in the same episode.
  'urashima': [
    { d: 'M10 108 L80 80 L150 108 L80 136 Z' },
    { d: 'M10 108 L12 122 L80 150 L148 122 L150 108 M80 136 V150' },
    {
      d: 'M92 144.1 l5 -10 M106 138.3 l5 -10 M120 132.6 l5 -10 M134 126.8 l5 -10',
      role: 'ambient',
    },
    { d: ellipse(80, 108, 50, 20) },
    { d: ellipse(80, 108, 41, 15) },
    {
      d: 'M129.8 110 L120.8 109.5 M125 116.7 L116.9 114.5 M114.9 122.3 L108.6 118.7 M100.6 126.2 L96.9 121.7 M83.7 127.9 L83.1 123 M66.4 127.3 L68.9 122.4 M50.8 124.2 L56.1 120.2 M38.7 119.3 L46.1 116.4 M31.5 112.9 L40.3 111.7 M30.2 106 L39.2 106.5 M35 99.3 L43.1 101.5 M45.1 93.7 L51.4 97.3 M59.4 89.8 L63.1 94.3 M76.3 88.1 L76.9 93 M93.6 88.7 L91.1 93.6 M109.2 91.8 L103.9 95.8 M121.3 96.7 L113.9 99.6 M128.5 103.1 L119.7 104.3',
      role: 'soft',
    },
    { d: ellipse(46, 104, 3.5, 8), role: 'accent' },
    {
      d: 'M46 96 H60 C63 99 63 109 60 112 H46 M52.5 96 L55 112',
      role: 'accent',
    },
    {
      d: 'M62 99 C74 92.5 95 89 116 99 M62 104 C74 99 95 100 116 109 M62 109 C74 105.5 95 111 116 119',
      role: 'accent',
    },
    shadow(80, 157, 70),
  ],

  // The belt round his belly and the lion set in its front, a round striped
  // mane round a plain head with no face, the belt showing either side of
  // it; his tall dark hat, narrowing to its crown, set down beside it.
  // Both lion and hat are his at 901.
  'holdem': [
    { d: 'M72 94.6 L62 96 V116 L72 114.6 M143 93.2 L158 96 V116 L143 113.2' },
    { d: 'M148 98 l6 -4 M148 108 l6 -4', role: 'ambient' },
    {
      d: 'M138 104 Q144.1 112.2 135 117 Q136.9 127.1 126.7 127.5 Q124.1 137.3 114.7 133.2 Q108 141 101.3 133.2 Q91.9 137.3 89.3 127.5 Q79.1 127.1 81 117 Q71.9 112.2 78 104 Q71.9 95.8 81 91 Q79.1 80.9 89.3 80.5 Q91.9 70.7 101.3 74.8 Q108 67 114.7 74.8 Q124.1 70.7 126.7 80.5 Q136.9 80.9 135 91 Q144.1 95.8 138 104 Z',
      role: 'accent',
    },
    {
      d: 'M128 104 L137 104 M126 112.7 L134.1 116.6 M120.5 119.6 L126.1 126.7 M112.5 123.5 L114.5 132.3 M103.5 123.5 L101.5 132.3 M95.5 119.6 L89.9 126.7 M90 112.7 L81.9 116.6 M88 104 L79 104 M90 95.3 L81.9 91.4 M95.5 88.4 L89.9 81.3 M103.5 84.5 L101.5 75.7 M112.5 84.5 L114.5 75.7 M120.5 88.4 L126.1 81.3 M126 95.3 L134.1 91.4',
      role: 'accent',
    },
    {
      d: 'M92 100 C92 88 124 88 124 100 C124 114 116 122 108 122 C100 122 92 114 92 100 Z',
    },
    { d: 'M20 70 C20 64 44 64 44 70 L50 148 C40 152 24 152 14 148 Z' },
    {
      d: 'M20 70 C20 76 44 76 44 70 M6 152 C6 146 58 146 58 152 C58 160 6 160 6 152 Z',
    },
    { d: 'M36 86 l8 -6 M37 102 l9 -7 M38 118 l9 -7', role: 'ambient' },
    { d: 'M15 136 C26 140 40 140 49 136', role: 'soft' },
    shadow(84, 172, 72),
  ],

  // A food cart built like a ship on two wheels, a sail on its mast and
  // produce heaped on deck.
  'speed': [
    { d: 'M24 122 H136 L124 148 H36 Z' },
    { d: circle(52, 156, 12) },
    { d: circle(108, 156, 12) },
    {
      d: dots([
        [52, 156],
        [108, 156],
      ]),
    },
    { d: 'M80 122 V36' },
    {
      d: 'M56 44 H104 C100 62 100 80 104 98 H56 C60 80 60 62 56 44 Z',
      role: 'accent',
    },
    { d: circle(46, 114, 8), role: 'soft' },
    { d: circle(64, 112, 9), role: 'soft' },
    { d: circle(98, 112, 9), role: 'soft' },
    { d: circle(116, 115, 7), role: 'soft' },
    { d: 'M64 103 l-5 -9 M64 103 l5 -9', role: 'soft' },
    shadow(80, 174, 58),
  ],

  // A street of the capital running away between rows of shops, the roofs'
  // eaves in the record's colour, the fronts in shade hatched, a gate at the
  // far end: the streets Zoro walks the night of the crossroad killings
  // (892). The shogun's castle on its trunk is not cited before 920.
  'flower-capital': [
    { d: 'M4 150 V82 L66 106 V122 M156 150 V82 L94 106 V122' },
    {
      d: 'M-2 76 Q30 84 70 102 M162 76 Q130 84 90 102 M-2 76 l8 -8 Q36 76 74 96 L70 102 M162 76 l-8 -8 Q124 76 86 96 L90 102',
      role: 'accent',
    },
    {
      d: 'M24 150 V90 M44 150 V98 M58 150 V103 M136 150 V90 M116 150 V98 M102 150 V103',
      role: 'soft',
    },
    { d: 'M4 112 L66 124 M156 112 L94 124', role: 'soft' },
    {
      d: 'M120 104 l8 4 M120 118 l8 4 M120 132 l8 4 M140 98 l8 4 M140 114 l8 4 M140 130 l8 4',
      role: 'ambient',
    },
    { d: 'M70 122 V112 H90 V122 M66 112 L80 102 L94 112', role: 'soft' },
    { d: 'M66 122 L30 190 M94 122 L130 190 M66 122 H94' },
    {
      d: 'M80 128 V140 M80 152 V166 M80 178 V190',
      role: 'ambient',
      dashed: true,
    },
    { d: 'M-4 150 H4 M156 150 H164', role: 'ambient' },
  ],
  // Three dumplings left on a plate, two daggers crossed beneath it.
  'dobon': [
    { d: ellipse(80, 96, 48, 12) },
    { d: ellipse(80, 96, 36, 8), role: 'soft' },
    { d: circle(70, 84, 10), role: 'accent' },
    { d: circle(90, 84, 10), role: 'accent' },
    { d: circle(80, 67, 10), role: 'accent' },
    { d: 'M44 170 L96 142 M114 132 L100 140' },
    { d: 'M92 136 L100 150' },
    { d: 'M116 170 L64 142 M46 132 L60 140' },
    { d: 'M68 136 L60 150' },
    shadow(80, 184, 46),
  ],

  // A scorpion's tail curled over two meal tickets, a stamp on the front one.
  // His flintlocks come and go in `wanoRedrawn` (947 to 1019).
  'daifugo': [
    { d: 'M60 110 H122 V144 H60 Z', role: 'soft' },
    { d: 'M38 122 H100 V156 H38 Z' },
    { d: 'M48 134 h30 M48 145 h40', role: 'soft' },
    { d: circle(89, 134, 6), role: 'accent' },
    {
      d: 'M126 150 C146 128 148 96 132 76 C118 58 96 58 88 74',
      role: 'accent',
    },
    { d: 'M88 74 L78 66 L82 84 Z', role: 'accent' },
    {
      d: 'M136 130 l9 3 M141 111 l9 0 M137 92 l8 -4 M124 76 l5 -7 M106 67 l0 -8',
    },
    shadow(80, 172, 48),
  ],

  // Her four swords, one for each of her four lower hands, fanned out with
  // the guards in her colour: she has them at her side when she learns the
  // keys are gone (930).
  'solitaire': [
    ...placed(SOLITAIRE_SWORD, 'translate(50 178) rotate(-30)'),
    ...placed(SOLITAIRE_SWORD, 'translate(70 172) rotate(-10)'),
    ...placed(SOLITAIRE_SWORD, 'translate(90 172) rotate(10)'),
    ...placed(SOLITAIRE_SWORD, 'translate(110 178) rotate(30)'),
    shadow(80, 188, 46),
  ],

  // His open leather jacket over the yellow cape with its frill of feathers,
  // the dark leather hatched, and the two chains across the front in his
  // colour: what he wears when he spits on Luffy (929). His sabres come at
  // 935, in `wanoRedrawn`.
  'alpacaman': [
    {
      d: 'M48 40 C32 62 22 120 16 168 C24 164 26 176 34 170 C40 178 46 168 52 176 C58 168 64 180 70 172 L68 60 M112 40 C128 62 138 120 144 168 C136 164 134 176 126 170 C120 178 114 168 108 176 C102 168 96 180 90 172 L92 60',
      role: 'soft',
    },
    {
      d: 'M56 40 C48 44 40 52 38 64 L32 160 Q46 166 60 162 L70 56 M104 40 C112 44 120 52 122 64 L128 160 Q114 166 100 162 L90 56',
    },
    { d: 'M56 40 Q80 30 104 40 L96 50 Q80 44 64 50 Z' },
    { d: 'M70 56 L62 74 L58 160 M90 56 L98 74 L102 160', role: 'soft' },
    {
      d: 'M62 84 C72 94 88 94 98 84 M60 100 C72 112 88 112 100 100',
      role: 'accent',
    },
    {
      d: 'M120 80 l7 -4 M122 102 l7 -4 M124 126 l6 -4 M40 120 l6 -4 M38 144 l6 -4',
      role: 'ambient',
    },
    shadow(80, 188, 60),
  ],

  // His great belt, still buckled, standing in a hoop as wide as he is, the
  // inside of the far side hatched, studs along it, the round buckle in his
  // colour off to one side with its prong, the end of the strap hanging past
  // it (930).
  'babanuki': [
    { d: 'M18 120 C18 98 142 98 142 120', role: 'soft' },
    {
      d: 'M34 108 l6 8 M50 105 l6 8 M102 105 l6 8 M118 108 l6 8',
      role: 'ambient',
    },
    { d: 'M18 120 V140 C18 164 142 164 142 140 V120 C142 140 18 140 18 120 Z' },
    {
      d: dots([
        [28, 140],
        [40, 146],
        [54, 150],
        [108, 150],
        [122, 146],
        [134, 140],
      ]),
      role: 'soft',
    },
    {
      d: 'M74 142 C96 146 124 150 140 160 L136 170 C120 160 96 154 74 152',
      role: 'soft',
    },
    { d: circle(60, 146, 13), role: 'accent' },
    { d: 'M47 146 H73 M60 146 L76 150', role: 'soft' },
    shadow(80, 182, 64),
  ],
  // His bull-horned headpiece in 3/4, the near horn swept forward and the
  // far one partly behind it, its inside hatched; his long katana lies
  // beneath, the dark sheath hatched (925).
  'daikoku': [
    { d: 'M42 112 C42 80 62 66 84 66 C106 66 122 82 122 108' },
    {
      d: 'M42 112 C60 124 104 124 122 108 C120 100 116 96 112 94 C96 104 64 104 48 98 C44 102 42 106 42 112 Z',
    },
    { d: 'M58 74 Q84 64 112 80', role: 'soft' },
    { d: 'M48 98 C30 92 18 74 22 46 C30 62 44 74 58 82', role: 'accent' },
    {
      d: 'M112 92 C122 86 130 72 128 54 C122 66 116 74 108 78',
      role: 'accent',
    },
    { d: 'M116 66 l6 4 M118 74 l5 4', role: 'ambient' },
    { d: 'M18 150 H126 V160 H18 Z' },
    { d: ellipse(128, 155, 3, 9) },
    { d: 'M130 151 H154 V159 H130' },
    { d: 'M136 151 l4 8 M144 151 l4 8', role: 'soft' },
    {
      d: 'M24 158 l4 -8 M40 158 l4 -8 M56 158 l4 -8 M72 158 l4 -8 M88 158 l4 -8 M104 158 l4 -8',
      role: 'ambient',
    },
    shadow(84, 176, 64),
  ],

  // The ring he wears on his back, stood on its edge and turned, the far
  // inside hatched, its four fireballs in his colour, and a shuriken of the
  // kind he throws at Robin beside it (926).
  'raijin': [
    { d: ellipse(74, 104, 36, 58), transform: 'rotate(10 74 104)' },
    {
      d: ellipse(74, 104, 28, 49),
      transform: 'rotate(10 74 104)',
      role: 'soft',
    },
    { d: 'M50 74 l7 4 M47 88 l7 3 M46 102 l7 2 M47 116 l7 1', role: 'ambient' },
    { d: RAIJIN_FIREBALL, transform: 'translate(64 54)', role: 'accent' },
    { d: RAIJIN_FIREBALL, transform: 'translate(84 164)', role: 'accent' },
    { d: RAIJIN_FIREBALL, transform: 'translate(39 110)', role: 'accent' },
    { d: RAIJIN_FIREBALL, transform: 'translate(110 104)', role: 'accent' },
    {
      d: 'M122 170 L130 160 L138 170 L130 174 Z M130 160 L134 152 M138 170 L148 172 M130 174 L126 182 M122 170 L112 168',
    },
    shadow(80, 186, 54),
  ],

  // Sugamichi, the giant catfish he rides on land, side on with its long
  // whiskers and no eye, and his puffed-up cape swelling over its back like
  // cloud. He rides it through the shogun's castle at 928.
  'fujin': [
    {
      d: 'M14 134 C14 112 34 100 60 100 C90 100 120 108 136 120 L154 108 L150 132 L156 152 L136 142 C118 152 88 156 60 156 C34 156 14 150 14 134 Z',
    },
    {
      d: 'M20 132 C8 132 2 140 4 150 M24 138 C16 146 16 156 22 162 M22 126 C10 120 6 110 12 102',
    },
    {
      d: 'M70 156 C72 166 80 170 88 168 C86 162 84 158 84 155 M60 100 C66 92 78 90 86 102',
      role: 'soft',
    },
    { d: 'M110 150 l6 -6 M120 146 l6 -6 M100 152 l6 -6', role: 'ambient' },
    {
      d: 'M52 104 C46 92 56 80 68 86 C72 72 90 70 96 82 C106 74 122 82 118 96 C128 98 132 110 124 116 C108 108 74 102 52 104 Z',
      role: 'accent',
    },
    {
      d: 'M64 96 C70 90 78 90 82 94 M98 92 C104 88 110 90 112 96',
      role: 'soft',
    },
    shadow(84, 176, 70),
  ],

  // His two swords: one still whole in its dark scabbard, the other snapped
  // in two, the grip with a stub of blade and the rest of it lying apart.
  // Hyogoro breaks it with a single stroke at 1022.
  'hotei': [
    { d: 'M14 86 L44 76 L46 82 L16 92 Z', transform: HOTEI_WHOLE },
    {
      d: 'M20 84 l4 6 M28 81 l4 6 M36 79 l4 6',
      role: 'soft',
      transform: HOTEI_WHOLE,
    },
    { d: ellipse(49, 78, 3, 8), transform: `${HOTEI_WHOLE} rotate(-18 49 78)` },
    { d: 'M53 74 L146 44 Q152 46 148 52 L55 82 Z', transform: HOTEI_WHOLE },
    {
      d: 'M70 76 l4 -6 M90 70 l4 -6 M110 63 l4 -6 M130 57 l4 -6',
      role: 'ambient',
      transform: HOTEI_WHOLE,
    },
    { d: 'M14 160 L44 154 L45 160 L15 166 Z' },
    { d: 'M20 158 l3 6 M28 156 l3 6 M36 155 l3 6', role: 'soft' },
    { d: ellipse(48, 156, 3, 8), transform: 'rotate(-10 48 156)' },
    { d: 'M52 153 L76 149 L79 152 L76 154 L78 157 L53 159 Z', role: 'accent' },
    {
      d: 'M92 166 L95 162 L93 160 L96 157 L140 150 L152 151 L142 156 L94 169 Z',
      role: 'accent',
    },
    shadow(82, 184, 70),
  ],

  // His high hat in 3/4, the band in his colour and hatched, the crown's far
  // side hatched, and the long stick he holds upright laid down in front of
  // it (922).
  'maha': [
    { d: 'M56 112 V34 C56 26 104 26 104 34 V112' },
    { d: ellipse(80, 32, 24, 6), role: 'soft' },
    { d: ellipse(80, 114, 46, 12) },
    {
      d: 'M56 96 C64 102 96 102 104 96 V108 C96 114 64 114 56 108 Z',
      role: 'accent',
    },
    {
      d: 'M64 99 l6 10 M74 101 l6 10 M84 101 l6 10 M94 99 l6 10',
      role: 'ambient',
    },
    {
      d: 'M94 40 l6 -4 M96 56 l6 -4 M96 72 l6 -4 M96 86 l6 -4',
      role: 'ambient',
    },
    { d: 'M10 170 L148 152 L149 157 L11 175 Z' },
    { d: 'M8 168 l4 9 M146 150 l4 9', role: 'soft' },
    shadow(80, 186, 66),
  ],
  // His white bowler set down beside the dark scarf he wears, folded, its
  // dots in his colour: hat and scarf side by side, not one on the other.
  // He wears both from his first scene, at Dressrosa (635).
  'guernica': [
    { d: 'M18 132 C18 96 82 96 82 132' },
    { d: 'M8 134 C8 124 92 124 92 134 C92 146 8 146 8 134 Z' },
    {
      d: 'M18 124 C30 130 70 130 82 124 V130 C70 136 30 136 18 130 Z',
      role: 'soft',
    },
    { d: 'M68 108 l6 -4 M74 118 l6 -4', role: 'ambient' },
    {
      d: 'M86 168 C80 150 98 140 112 146 C126 152 150 148 152 160 C154 172 138 180 120 176 C104 172 92 182 86 168 Z',
    },
    {
      d: 'M96 160 C108 152 124 160 140 154 M98 170 C112 164 126 172 144 166',
      role: 'soft',
    },
    {
      d: `${circle(102, 152, 2.5)} ${circle(118, 150, 2.5)} ${circle(134, 156, 2.5)} ${circle(110, 166, 2.5)} ${circle(128, 168, 2.5)} ${circle(146, 162, 2.5)} ${circle(94, 172, 2.5)}`,
      role: 'accent',
    },
    shadow(80, 186, 70),
  ],
  // Her father's castle burning twenty years ago, as the anime shows it in
  // Kin'emon's flashback at 910 (ch. 920): three storeys on a stone base,
  // fire out of the windows and off the roofs, smoke going up.
  'kozuki-hiyori': [
    { d: 'M26 150 L38 120 H122 L134 150 Z' },
    {
      d: 'M122 120 L134 150 M118 128 l6 -6 M122 138 l7 -7 M126 148 l7 -7',
      role: 'ambient',
    },
    { d: 'M32 136 H128', role: 'soft' },
    { d: 'M46 120 V102 H114 V120 M58 92 V80 H102 V92 M66 70 V60 H94 V70' },
    {
      d: 'M32 104 Q46 102 54 92 H106 Q114 102 128 104 M46 82 Q58 80 64 70 H96 Q102 80 114 82 M56 62 Q68 58 80 42 Q92 58 104 62',
    },
    {
      d: 'M62 120 V108 h10 V120 M88 120 V108 h10 V120 M74 92 V84 h12 V92',
      role: 'soft',
    },
    {
      d: 'M66 106 C58 96 68 90 64 78 C74 86 78 98 70 106 M92 106 C86 98 94 90 92 80 C100 88 102 98 96 106 M108 80 C102 70 110 64 108 52 C116 60 118 72 112 80 M48 92 C42 84 50 76 46 66 C54 72 58 84 52 92',
      role: 'accent',
    },
    {
      d: 'M80 40 C70 30 84 24 76 14 M98 54 C108 44 96 36 108 26 C114 20 110 12 116 6',
      role: 'ambient',
      dashed: true,
    },
    { d: 'M4 150 H156', role: 'ambient' },
    { d: 'M14 162 H146 M30 174 H130', role: 'ambient', dashed: true },
  ],

  // A mine entrance cut into a rock face, framed in timber and shut with iron bars, rails running out of it.
  'udon': [
    {
      d: 'M-4 150 L10 96 L34 72 L58 54 L92 50 L120 62 L146 84 L164 110',
      role: 'ambient',
    },
    { d: 'M44 150 V92 H116 V150 M38 92 H122', role: 'soft' },
    { d: 'M52 150 V100 a28 22 0 0 1 56 0 V150' },
    { d: 'M62 150 V84 M74 150 V80 M86 150 V80 M98 150 V84', role: 'accent' },
    { d: 'M54 118 H106', role: 'accent' },
    { d: 'M60 150 L40 190 M100 150 L120 190', role: 'soft' },
    { d: 'M56 158 H104 M50 170 H110 M45 182 H115', role: 'ambient' },
    {
      d: 'M16 132 l8 -6 M132 120 l10 4 M24 104 l6 -8 M136 100 l8 6',
      role: 'ambient',
    },
    { d: 'M-4 150 H44 M116 150 H164', role: 'ambient' },
  ],

  // An island off the coast whose peak is a great rock dome with two horns, crags around its foot.
  'onigashima': [
    {
      d: 'M8 150 L22 128 L34 132 L44 116 H116 L126 132 L138 128 L152 150',
      role: 'soft',
    },
    { d: 'M44 116 C40 70 58 44 80 44 C102 44 120 70 116 116', role: 'accent' },
    {
      d: 'M52 62 C40 50 36 34 40 18 C48 34 58 44 64 50 M108 62 C120 50 124 34 120 18 C112 34 102 44 96 50',
      role: 'accent',
    },
    {
      d: 'M60 116 l4 -16 l-3 -12 l5 -10 M100 116 l-3 -14 l4 -10 l-2 -8',
      role: 'soft',
    },
    {
      d: 'M18 100 q12 -8 24 0 M118 94 q12 -8 24 0 M-4 74 q16 -8 32 0',
      role: 'ambient',
      dashed: true,
    },
    { d: 'M28 140 l6 -6 M128 138 l6 -4', role: 'ambient' },
    ...SEA,
  ],

  // Two clay pots, one big and one small, and two holed coins above them.
  'denjiro': [
    { d: 'M30 90 C18 134 34 162 50 168 H90 C106 162 122 134 110 90 Z' },
    { d: ellipse(70, 90, 40, 9) },
    { d: 'M38 118 C58 126 82 126 102 118', role: 'soft' },
    { d: 'M120 146 C114 162 122 172 128 174 H144 C150 172 156 162 152 146 Z' },
    { d: ellipse(136, 146, 16, 4) },
    { d: circle(128, 58, 9), role: 'accent' },
    { d: 'M125 55 h6 v6 h-6 Z', role: 'accent' },
    { d: circle(142, 80, 9), role: 'accent' },
    { d: 'M139 77 h6 v6 h-6 Z', role: 'accent' },
    shadow(90, 182, 62),
  ],

  // An open scroll of disavowal between its two rollers, a red seal at its
  // foot, and the brush laid across it.
  'kozuki-sukiyaki': [
    { d: 'M34 50 H126 V146 H34 Z' },
    { d: 'M28 44 V152 M34 44 V152 M126 44 V152 M132 44 V152' },
    { d: 'M26 44 H36 M26 152 H36 M124 44 H134 M124 152 H134' },
    {
      d: 'M112 64 V128 M98 64 V134 M84 64 V118 M70 64 V126',
      role: 'soft',
      dashed: true,
    },
    { d: 'M46 118 h16 v16 h-16 Z M50 122 h8 v8 h-8 Z', role: 'accent' },
    { d: 'M72 184 L136 150' },
    { d: 'M136 150 L146 142 L150 148 L140 154 Z', role: 'accent' },
    shadow(80, 188, 54),
  ],
  // Ringo's graves in the snow, each marked by the sword of the one buried
  // there, the shaded side of the mound hatched; his fox lies curled at
  // their foot in his colour, no eye. Kawamatsu tells of both (954).
  'shimotsuki-ushimaru': [
    { d: 'M8 170 C30 140 116 136 152 170' },
    {
      d: 'M110 150 l6 -6 M120 156 l6 -6 M130 162 l6 -6 M140 168 l5 -5',
      role: 'ambient',
    },
    { d: 'M86 148 V80 H94 V146' },
    { d: 'M90 144 V82', role: 'soft' },
    { d: ellipse(90, 76, 15, 4) },
    { d: 'M86.5 72 V36 H93.5 V72 M85 35 h10' },
    { d: 'M86.5 66 l7 -6 M86.5 56 l7 -6 M86.5 46 l7 -6', role: 'soft' },
    {
      d: 'M128 146 V112 M124 108 h8 M126 108 V96 h4 V108 M48 140 V110 M44 106 h8 M46 106 V94 h4 V106',
      role: 'soft',
    },
    {
      d: 'M24 170 C14 168 12 152 24 146 C34 140 52 140 60 150 C64 156 62 166 54 170 Z M60 150 L66 140 L68 132 L62 138 L58 134 L56 142 C50 140 46 142 44 146',
      role: 'accent',
    },
    {
      d: 'M24 170 C30 176 46 178 60 172 C66 168 70 164 72 158',
      role: 'accent',
    },
    { d: 'M66 162 C70 158 72 152 72 158', role: 'soft' },
    {
      d: dots([
        [36, 40],
        [118, 30],
        [52, 80],
        [130, 70],
        [24, 112],
        [108, 108],
        [140, 120],
      ]),
      role: 'soft',
    },
    { d: 'M0 176 H160', role: 'ambient' },
  ],

  // A fishing rod bent out over the sea from a shore rock, and a long
  // kiseru pipe set down on the stone.
  'shimotsuki-kozaburo': [
    { d: 'M14 152 C18 132 46 122 70 128 C86 132 96 144 98 152 Z' },
    { d: 'M44 130 Q98 72 144 40' },
    { d: 'M144 40 V146', role: 'soft' },
    { d: circle(144, 150, 3.5), role: 'accent' },
    { d: 'M32 141 L90 135', role: 'accent' },
    { d: 'M23 135 h9 v6 q-4.5 4 -9 0 z', role: 'accent' },
    { d: 'M90 133.5 v3', role: 'accent' },
    { d: 'M27 128 q-6 -8 0 -14 q6 -6 0 -14', role: 'soft' },
    ...SEA,
  ],

  // A morning star on a short haft, spikes all round its head, and a pair of
  // oval sunglasses left at its foot.
  'hatcha': [
    { d: circle(96, 70, 24), role: 'accent' },
    {
      d: 'M100.4 46.4 L109.8 36.7 L109.6 50.2 M115.8 56.4 L129.3 56.2 L119.6 65.6 M119.6 74.4 L129.3 83.8 L115.8 83.6 M109.6 89.8 L109.8 103.3 L100.4 93.6 M91.6 93.6 L82.2 103.3 L82.4 89.8 M76.2 83.6 L62.7 83.8 L72.4 74.4 M72.4 65.6 L62.7 56.2 L76.2 56.4 M82.4 50.2 L82.2 36.7 L91.6 46.4',
      role: 'accent',
    },
    { d: 'M75.4 85.3 L41.4 156.3 M82.6 88.7 L48.6 159.7' },
    { d: 'M41.4 156.3 L48.6 159.7' },
    { d: 'M50 140 l7 3.4 M54.5 131 l7 3.4 M59 122 l7 3.4', role: 'soft' },
    { d: ellipse(104, 172, 11, 7) },
    { d: ellipse(130, 172, 11, 7) },
    { d: 'M115 171 Q117 167 119 171 M141 170 l8 -4' },
    shadow(96, 188, 52),
  ],

  // The barrel he drinks from in the Cave Chamber, in 3/4 with its far side
  // hatched and its two iron hoops studded with rivets (accent). It is his
  // alone: in ch. 1030 (pp. 2-3) he lifts the whole barrel to drink while the
  // other two eat, and episode 1055 stands it at his feet. His horse's body
  // is not shown before ch. 1032 (episode 1058), in `wanoRedrawn`.
  'fuga': [
    { d: ellipse(80, 50, 34, 10) },
    { d: ellipse(80, 51, 28, 7), role: 'soft' },
    {
      d: 'M46 50 C38 80 37 124 48 156 C60 168 100 168 112 156 C123 124 122 80 114 50',
    },
    { d: 'M43.4 66 Q80 84 116.6 66 M41.8 76 Q80 94 118.2 76', role: 'accent' },
    {
      d: 'M41.6 128 Q80 146 118.4 128 M43.1 138 Q80 156 116.9 138',
      role: 'accent',
    },
    {
      d: dots([
        [51.6, 74.8],
        [65, 78.6],
        [80, 80],
        [95, 78.6],
        [108.4, 74.8],
        [51.3, 136.8],
        [64.9, 140.6],
        [80, 142],
        [95.1, 140.6],
        [108.7, 136.8],
      ]),
      role: 'accent',
    },
    {
      d: 'M60 62 C56 96 56 132 62 164 M100 62 C104 96 104 132 98 164',
      role: 'soft',
    },
    {
      d: 'M108 96 l8 -8 M108 108 l9 -9 M108 120 l8 -8 M106 154 l6 -6',
      role: 'ambient',
    },
    shadow(80, 176, 48),
  ],

  // Kanjuro's brush laid down at the end of its last stroke, the ink pooled
  // and hatched, and the flame rising out of the stroke in the record's
  // colour: he draws the clan's grudge as he dies (1055).
  'kazenbo': [
    {
      d: 'M20 176 C40 162 70 168 92 160 C110 154 126 150 142 156 C124 164 108 170 90 174 C66 180 40 184 20 176 Z',
    },
    {
      d: 'M40 174 l6 -6 M56 174 l6 -6 M72 172 l6 -6 M90 168 l6 -6 M108 162 l6 -6',
      role: 'ambient',
    },
    {
      d: 'M86 164 C70 140 74 116 84 98 C80 82 84 62 96 44 C98 60 106 66 110 56 C118 74 122 92 112 110 C124 104 128 92 126 82 C138 104 134 134 116 158',
      role: 'accent',
    },
    { d: 'M98 156 C92 140 96 126 102 116', role: 'accent' },
    { d: 'M10 112 L48 150 L54 145 L16 106 Z' },
    { d: 'M22 118 l6 -6 M34 130 l6 -6', role: 'soft' },
    { d: 'M48 150 L54 145 C62 150 70 160 74 172 C62 168 52 160 48 150 Z' },
    { d: 'M56 154 l4 -3 M60 160 l5 -3', role: 'ambient' },
    shadow(80, 188, 64),
  ],
} satisfies Drawings

/** Queen's braid, its two chains of links and the eight ties, without the twists or the tuft. */
const QUEEN_BRAID = [...wanoArt.queen.slice(0, 2), ...wanoArt.queen.slice(3, 4)]

/** Black Maria's pipe as her first drawing lays it: mouthpiece, stem, bowl, rim and smoke. */
const MARIA_LAID_PIPE = [
  ...wanoArt['black-maria'].slice(4, 8),
  ...wanoArt['black-maria'].slice(9, 10),
]

/**
 * One cut neck of Orochi's fallen shadow, base at (0, 0), leaning right: its
 * two sides and the blunt end where it was cut.
 */
const OROCHI_STUB =
  'M-6 0 C-8 -10 -4 -20 2 -26 M6 0 C6 -8 10 -14 14 -18 M2 -26 Q11 -26 14 -18 Q6 -16 2 -26'

/**
 * Onimaru, the fox Gyukimaru was, side on and facing left: the two tall
 * ears with their dark edge, the long snout with no eye, the ruff down the
 * chest, the legs dark from the elbow and the hock down, the far legs drawn
 * light, and the flame he has for a tail in his colour.
 */
const ONIMARU: Stroke[] = [
  { d: 'M40 62 L36 26 L54 54 M62 54 L74 26 L74 62' },
  { d: 'M39 34 L42 56 M72 34 L71 54', role: 'ambient' },
  {
    d: 'M14 76 L34 66 C40 60 50 52 64 56 C70 64 74 74 82 78 C96 82 108 80 122 80 C132 80 138 88 138 98 C138 106 134 112 128 116',
  },
  {
    d: 'M14 76 C22 80 32 82 40 83 C36 89 40 93 44 93 C38 99 42 105 48 103 C42 111 48 117 56 112',
  },
  { d: 'M64 58 q6 4 4 10 q7 3 3 10 q7 3 3 10', role: 'soft' },
  { d: 'M56 112 C72 106 102 106 120 114', role: 'soft' },
  {
    d: 'M54 108 L52 172 H44 M62 110 L60 172 M118 112 L126 140 L120 172 H112 M128 114 L134 140 L127 172',
  },
  {
    d: 'M53 140 l8 -4 M53 150 l7 -4 M53 160 l7 -4 M53 170 l7 -4 M126 148 l7 -4 M124 158 l7 -4 M122 168 l7 -4',
    role: 'ambient',
  },
  { d: 'M70 110 L72 168 H66 M108 112 L104 168 H98', role: 'soft' },
  {
    d: 'M132 96 C150 92 158 74 150 56 C148 66 142 70 140 62 C146 48 142 36 132 24 C130 36 122 42 118 34 C112 50 116 66 124 80',
    role: 'accent',
  },
  { d: 'M136 86 C144 76 144 64 138 52', role: 'accent' },
]

/**
 * One of Alpacaman's cavalry sabres, level, edge down, the cross-guard at
 * (0, 0): the slender blade curving up to its tip, the guard's lip and its
 * knuckle-bow, the ribbed grip.
 */
const ALPACAMAN_SABRE: Stroke[] = [
  { d: 'M0 -3 C40 -3 80 -6 112 -16 C84 -1 42 3 0 3' },
  { d: 'M0 -7 V7 M2 6 C-2 18 -26 18 -32 4' },
  { d: 'M0 -3 H-28 Q-34 0 -30 4 H0' },
  { d: 'M-7 -3 v7 M-14 -3 v7 M-21 -3 v7', role: 'soft' },
]

/**
 * One of Daifugo's small flintlocks, level, muzzle right, the lock at
 * (0, 0): the stock under the barrel with its round butt, the barrel and
 * the muzzle ring, the cock and the trigger guard.
 */
const DAIFUGO_FLINTLOCK: Stroke[] = [
  {
    d: 'M-6 -4 H34 V0 H6 C2 2 -2 8 -4 14 C-5 18 -10 20 -13 18 C-15 16 -15 13 -14 11 C-12 6 -10 0 -10 -2 Z',
  },
  { d: 'M34 -4 H52 M34 0 H52 M52 -5.5 V1.5' },
  { d: 'M-4 -4 C-5 -8 -9 -10 -12 -8 M2 0 Q3 6 8 6 Q11 5 11 0', role: 'soft' },
]

/**
 * Soto Muso in its scabbard, level, the butt of the hilt at (0, 0): the
 * black hilt with its white diamonds and no guard, the pale collar, the long
 * straight scabbard with the light wave along its edge.
 */
const SOTO_MUSO: Stroke[] = [
  { d: 'M0 -4.5 H40 V4.5 H0 Z' },
  {
    d: 'M3 0 l3.5 -3 l3.5 3 l-3.5 3 Z M13 0 l3.5 -3 l3.5 3 l-3.5 3 Z M23 0 l3.5 -3 l3.5 3 l-3.5 3 Z',
    role: 'soft',
  },
  { d: 'M11 -4 l-1 8 M21 -4 l-1 8 M31 -4 l-1 8', role: 'ambient' },
  { d: 'M40 -5 H48 V5 H40 M44 -5 V5' },
  { d: 'M48 -4 H150 Q153 0 150 4 H48' },
  {
    d: 'M54 2 q4 -2 8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0',
    role: 'soft',
  },
]

/** The records of this stretch drawn again, from the episode the story changes them. */
export const wanoRedrawn: Redrawings = {
  // Her katana laid lower down, with fruit ripening beside it: she names
  // the Ripe-Ripe Enticement Jutsu at 916 (ch. 924, below her record's chapter).
  'shinobu': [
    {
      episode: 916,
      value: [
        ...placed(SHINOBU_KATANA, 'translate(44 172) rotate(-12)'),
        {
          d: `${circle(50, 98, 16)} ${circle(36, 132, 13)} ${circle(70, 130, 15)}`,
          role: 'accent',
        },
        {
          d: 'M44 83 l3 -4 l3 3 l3 -3 l3 4 M50 79 q6 -8 14 -6 M30 120 l3 -4 l3 3 l3 -3 l3 4 M36 116 q4 -8 12 -7 M64 116 l3 -4 l3 3 l3 -3 l3 4',
        },
        shadow(84, 188, 60),
      ],
    },
  ],
  // The same fire over a pteranodon's wing in place of the feathered one,
  // the long finger running out to its tip and the membrane scalloped
  // between the bones: he is captioned with the fruit and flies at 924
  // (ch. 930, below his record's chapter).
  'king': [
    {
      episode: 924,
      value: [
        {
          d: 'M24 116 C36 72 70 48 104 40 L150 26 C140 40 128 50 114 54 C116 64 104 72 92 72 C92 84 78 94 64 94 C62 106 46 116 24 116 Z',
        },
        {
          d: 'M30 108 C44 80 70 58 104 42 M104 42 C102 52 96 62 90 70 M104 42 L146 28',
          role: 'soft',
        },
        {
          d: 'M40 106 l6 -6 M56 98 l6 -6 M72 86 l6 -6 M96 66 l5 -5',
          role: 'ambient',
        },
        ...KING_FIRE,
        { d: 'M4 188 H156', role: 'ambient' },
      ],
    },
  ],
  // A katana with a chrysanthemum for a guard: she draws a sword for the
  // first time at 901 (ch. 914), when Tama is taken from the tea house.
  'kiku': [
    {
      episode: 901,
      chapter: 914,
      value: [
        { d: 'M114 34 L58 126 M122 40 L66 132' },
        { d: 'M114 34 L122 40' },
        { d: circle(62, 133, 16), role: 'accent' },
        {
          d: 'M62 117 V149 M46 133 H78 M50.7 121.7 L73.3 144.3 M73.3 121.7 L50.7 144.3',
          role: 'accent',
        },
        { d: circle(62, 133, 5), role: 'accent' },
        { d: 'M56 142 L34 172 M64 148 L42 178' },
        { d: 'M34 172 L42 178' },
        { d: 'M52 150 l8 6 M46 158 l8 6', role: 'soft' },
        shadow(84, 186, 40),
      ],
    },
  ],
  // His two flintlocks, one laid across the other at another angle: barrel,
  // muzzle, ramrod, the dark wooden grip hatched, and the lock with its cock
  // in his colour. He disarms King with a single shot at 995 (ch. 986).
  'izo': [
    {
      episode: 995,
      chapter: 986,
      value: [
        ...placed(IZO_FLINTLOCK, 'translate(74 98) rotate(-16)'),
        ...placed(IZO_FLINTLOCK, 'translate(86 150) rotate(8)'),
        shadow(80, 182, 60),
      ],
    },
  ],
  // The pachycephalosaur she turns into, side on: the thick dome of its skull
  // in her colour with the knobbed ridge along its base, the heavy body, the
  // belly hatched where it turns under, no eye. She shows the fruit when she
  // headbutts Luffy at 990 (ch. 983).
  'ulti': [
    {
      episode: 990,
      chapter: 983,
      value: [
        {
          d: 'M10 128 C8 120 10 114 14 110 C12 94 26 84 38 84 C52 84 62 94 58 112 C62 114 66 112 70 108 C82 96 102 88 120 94 C136 100 148 114 158 132 C144 128 132 124 122 128 C118 144 102 154 84 154 C70 154 62 148 58 140 C52 134 44 132 36 134 C24 136 12 134 10 128 Z',
        },
        { d: 'M14 110 C12 94 26 84 38 84 C52 84 62 94 58 112', role: 'accent' },
        {
          d: 'M15 110 q5 -5 10 -3 q5 -5 11 -2 q5 -4 11 0 q5 -3 9 4',
          role: 'soft',
        },
        { d: 'M60 138 l-6 7 l4 2', role: 'soft' },
        { d: 'M88 120 C108 116 120 132 112 150', role: 'soft' },
        {
          d: 'M100 152 C104 164 102 174 100 186 H116 C114 174 116 162 114 148',
        },
        { d: 'M80 154 C82 166 80 176 78 186 H90', role: 'soft' },
        {
          d: 'M66 146 l4 4 M76 150 l4 4 M130 126 l4 4 M140 126 l4 4',
          role: 'ambient',
        },
        shadow(86, 192, 62),
      ],
    },
  ],
  // The brachiosaurus he turns into at the Sumo Inferno, side on: the long
  // neck bent forward into a small blunt head with no eye, the two strands of
  // his moustache, the heavy body and the tail curling up, the far legs and
  // the belly hatched. His braid hangs from the back of the skull down the
  // neck, ties in his colour. He shows the form at 944 (ch. 945).
  'queen': [
    {
      episode: 944,
      chapter: 945,
      value: [
        {
          d: 'M14 30 C14 24 20 20 28 20 C38 18 48 18 54 24 C58 28 58 34 56 42 C54 66 64 90 84 104 C98 94 118 96 130 110 C136 118 140 126 142 134 C148 138 154 134 157 126 C159 120 157 114 152 113 C156 122 155 138 147 146 C142 150 138 152 134 152 C126 162 104 166 84 166 C62 166 46 160 42 148 C36 128 30 94 34 58 C35 50 34 44 30 42 C24 42 18 40 16 38 C14 36 14 34 14 30 Z',
        },
        ...moved(
          QUEEN_BRAID,
          'translate(60 28) rotate(-14) scale(0.42) translate(-62.6 -14)',
        ),
        {
          d: 'M16 37 C8 44 8 56 14 62 C18 66 16 72 12 76 M22 40 C18 48 20 56 26 62',
          role: 'soft',
        },
        {
          d: 'M54 162 C56 170 56 176 54 184 H68 C68 176 68 170 70 166 M116 162 C118 170 118 176 116 184 H130 C130 176 130 164 130 154',
        },
        {
          d: 'M46 158 C46 166 46 174 44 182 H52 M104 166 C104 172 104 178 102 182 H110',
          role: 'soft',
        },
        { d: 'M80 118 C72 130 70 144 72 160', role: 'soft' },
        {
          d: 'M46 168 l4 4 M104 170 l4 4 M84 166 l4 4 M94 166 l4 4 M151 121 l4 -2 M150 129 l4 -2',
          role: 'ambient',
        },
        shadow(88, 192, 62),
      ],
    },
  ],
  // The triceratops he turns into against Franky, side on: the frill with its
  // pointed rim, the beak closed, a short horn on the nose, the heavy body on
  // its pillar legs, the far legs and the flank hatched, no eye. His cap's
  // studded band wraps the base of the frill and its two golden horns are the
  // brow horns, as the manga draws them. He shows the form at 1012 (ch. 998).
  'sasaki': [
    {
      episode: 1012,
      chapter: 998,
      value: [
        {
          d: 'M30 100 C24 104 18 108 14 114 C8 122 4 130 6 140 C10 137 14 137 18 139 C26 146 40 150 50 150 C54 154 56 156 58 158 C80 162 112 162 128 154 C134 150 138 148 142 146 L160 142 C154 130 148 120 140 110 C136 104 132 100 128 98',
        },
        {
          d: 'M68 102 L57.7 103.7 L50 95.7 L54 85.1 L50.4 74.3 L58.5 66.6 L59.8 55.4 L70.3 52.1 L76.3 42.8 L87.1 44.6 L96.5 39.1 L105.2 45.7 L116.1 45 L121 55 L131.1 59.5 L131.3 70.8 L138.5 79.4 L133.8 89.7 L128 98',
        },
        {
          d: 'M70 104 C70 120 64 136 56 146 M62 92 C60 76 70 62 88 60',
          role: 'soft',
        },
        ...moved(
          wanoArt.sasaki.slice(2, 4),
          'translate(50 102) rotate(-8) scale(0.4) translate(-81 -131)',
        ),
        ...moved(
          wanoArt.sasaki.slice(7, 9),
          'translate(50 100) rotate(-32) scale(0.45) translate(-76 -130)',
        ),
        { d: 'M12 118 C12 110 14 104 18 98 C19 104 21 109 23 112' },
        {
          d: 'M62 158 C62 166 62 172 60 180 H74 C74 172 74 166 76 160 M118 158 C120 166 120 172 118 180 H132 C132 172 132 160 134 150',
        },
        {
          d: 'M50 152 C50 162 48 170 48 178 H56 M106 160 C106 166 106 172 104 178 H112',
          role: 'soft',
        },
        {
          d: 'M84 160 l4 4 M94 160 l4 4 M140 148 l4 -2 M146 146 l4 -2',
          role: 'ambient',
        },
        shadow(88, 188, 62),
      ],
    },
  ],
  // The spider she turns into, without the woman on it: the round body in
  // front, the great abdomen behind, the eight legs of rounded segments, the
  // far ones and the underside hatched, no eye. Her pipe lies in front of it,
  // still smoking. She shows the form at 1013 (ch. 998).
  'black-maria': [
    {
      episode: 1013,
      chapter: 998,
      value: [
        {
          d: 'M61 116 A14 6.5 93.7 1 1 51.3 113.8 M57.5 136.4 A12.1 5.5 97 1 1 51.2 135.9 M110.6 107.8 A14 6.5 20.4 0 1 109.4 115.5 M112.5 111 A14 6 78.7 1 1 108.6 130.6 M110.6 140.4 A12.1 5.5 87.9 0 1 112 136.4 M118.2 135.6 A12.1 5.5 87.9 1 1 110.3 148.5',
          role: 'ambient',
        },
        {
          d: 'M90 94.2 A44 34 0 0 1 82.7 91.7 M66.9 80.3 A44 34 0 1 1 123.6 92.4',
        },
        {
          d: 'M85 88 l5 -5 M99 88 l5 -5 M113 88 l5 -5 M127 88 l5 -5',
          role: 'ambient',
        },
        {
          d: 'M71.1 114.4 A22 18 0 0 1 49.7 112.9 M45.4 86.2 A22 18 0 0 1 84 96.9',
        },
        {
          d: 'M12.6 70.2 A20.1 9 -145.3 0 1 45.6 93.1 A20.1 9 -145.3 0 1 12.6 70.2 M19.4 85.5 A25.7 7.8 98.3 1 1 13.2 69.6 M10.5 118.8 A20.8 6.5 89.1 1 1 4.7 118.4 M26.9 92.7 A15.4 9 -143.1 0 1 51.6 111.2 A15.4 9 -143.1 0 1 26.9 92.7 M34.9 110 A19.4 7.8 94.8 1 1 27.4 92 M29.2 128.7 A15.8 6.5 85 1 1 22.5 128.7 M101.1 101.8 A16.4 9 -19.3 0 1 70.1 112.7 A16.4 9 -19.3 0 1 101.1 101.8 M100.5 100.6 A17.1 7.8 80 1 1 93.7 113.4 M107.7 132.1 A13.9 6.5 91.1 1 1 100.7 132.7 M127.1 96.3 A24.9 9 -9.3 0 1 78 104.3 A24.9 9 -9.3 0 1 127.1 96.3 M126.2 94.4 A20 7.8 55 1 1 122.8 102.7 M148.4 125.4 A17 6.5 85.7 1 1 142 127.7',
        },
        ...moved(
          MARIA_LAID_PIPE,
          'translate(5.4 78) rotate(11 80 120) scale(0.8)',
        ),
        shadow(78, 164, 72),
      ],
    },
  ],
  // The saber-toothed tiger he turns into, side on: the heavy head with the
  // two long fangs in his colour, the shoulders, the fat forepaws, the tail
  // curled up behind, the far legs drawn light, no eye. His cigarette lies
  // in front of it, still smoking. He shows the form at 1013 (ch. 998).
  'whos-who': [
    {
      episode: 1013,
      chapter: 998,
      value: [
        {
          d: 'M66 78 C62 66 50 60 38 62 C28 64 22 70 20 78 C14 82 10 88 10 93 C10 97 13 100 16 100 C20 102 24 104 26 106 C32 112 40 116 48 118 C52 120 54 122 54 126 C56 140 58 158 60 170 C54 172 54 180 62 180 H78 C84 180 88 178 84 172 C82 168 80 160 80 150 C90 152 104 152 116 150 C122 156 126 166 126 178 H140 C146 178 150 176 148 170 C144 160 142 142 144 126 C148 112 146 96 138 84 C130 66 118 48 98 46 C84 44 70 56 64 78 Z',
        },
        {
          d: 'M16 100 C14 112 16 124 20 134 C21 122 21 111 22 102 M26 106 C25 116 26 126 30 134 C31 124 31 116 32 110',
          role: 'accent',
        },
        { d: 'M32 64 C30 54 40 50 44 60 M50 61 C50 52 60 52 61 66' },
        {
          d: 'M136 80 C152 72 154 58 146 48 C138 38 140 24 152 22 C160 22 160 32 152 34 C146 36 148 42 154 50 C164 64 162 88 144 100',
        },
        { d: 'M84 58 l4 5 M98 54 l4 5 M112 58 l3 5', role: 'soft' },
        {
          d: 'M124 120 C130 130 132 140 130 150 M66 80 C70 94 72 108 68 126',
          role: 'soft',
        },
        {
          d: 'M74 150 C72 160 72 170 70 176 H64 M112 150 C112 160 112 170 110 176 H102',
          role: 'soft',
        },
        { d: 'M86 152 l4 4 M94 152 l4 4 M102 152 l4 4', role: 'ambient' },
        ...moved(wanoArt['whos-who'].slice(6, 8), 'translate(-90 8)'),
        shadow(84, 188, 70),
      ],
    },
  ],
  // The same kanabo, set aside, and the great tail of his wolf form rising
  // behind it, its edge in tongues like the cold flame of his mane, the side
  // that turns away hatched. He fights Kaido in the form at 1041 (ch. 1019).
  'yamato': [
    {
      episode: 1041,
      chapter: 1019,
      value: [
        {
          d: 'M93 92 C88 82 88 70 92 60 Q98 54 106 50 Q98 48 95 44 C94 36 96 28 100 20 Q102.9 23.4 90.7 24.1 Q78.1 20.5 58.7 25.8 Q67.9 31.6 63.7 41.6 Q44.7 39.4 30.5 53.4 Q39 53.5 38.8 64.9 Q24.2 73 18.4 93.1 Q27.5 89.2 33.1 100 Q21.6 113.9 25.2 134.9 Q28.1 129.4 36.4 138.2 Q37.8 152.6 54 169',
        },
        {
          d: 'M66 140 C52 124 48 104 52 84 M80 104 C72 90 70 74 74 58 M48 150 C36 136 32 120 34 104',
          role: 'soft',
        },
        { d: 'M82 66 l6 -3 M82 78 l7 -3 M84 90 l6 -3', role: 'ambient' },
        ...moved(wanoArt.yamato.slice(0, 6), 'translate(18 0)'),
        shadow(84, 192, 64),
      ],
    },
  ],
  // The same paper door, and behind it what the Scabbards leave of him: the
  // serpent's body slumped on the floor and its necks cut short, each with
  // its blunt end and no head, one of them hanging over the side. They cut
  // his heads off at 1026 (ch. 1009).
  'kurozumi-orochi': [
    {
      episode: 1026,
      chapter: 1009,
      value: [
        ...wanoArt['kurozumi-orochi'].slice(0, 4),
        {
          d: 'M20 150 C20 128 36 116 54 114 C66 102 98 100 112 110 C128 114 140 130 140 150',
          role: 'accent',
        },
        {
          d: 'M34 140 C56 128 100 126 128 136 M50 126 C70 118 92 118 108 124',
          role: 'soft',
        },
        {
          d: OROCHI_STUB,
          role: 'accent',
          transform: 'translate(40 126) rotate(-56) scale(1.1)',
        },
        {
          d: OROCHI_STUB,
          role: 'accent',
          transform: 'translate(56 112) rotate(-30) scale(1.5)',
        },
        {
          d: OROCHI_STUB,
          role: 'accent',
          transform: 'translate(80 104) rotate(-4) scale(1.1)',
        },
        {
          d: OROCHI_STUB,
          role: 'accent',
          transform: 'translate(100 106) rotate(24) scale(1.5)',
        },
        {
          d: 'M108 114 C118 98 136 100 138 116 C139 128 136 140 132 150 M114 118 C120 108 130 110 131 120 C132 130 128 142 124 150 M124 150 Q128 146 132 150',
          role: 'accent',
        },
        ...wanoArt['kurozumi-orochi'].slice(9, 10),
      ],
    },
  ],
  // The same jacket and cape, set back, and his two cavalry sabres crossed
  // beneath them, knuckle-bows and all: he fights Hyogoro and Luffy with
  // them at 935 (ch. 939).
  'alpacaman': [
    {
      episode: 935,
      chapter: 939,
      value: [
        ...moved(
          wanoArt.alpacaman.slice(0, -1),
          'translate(18 -10) scale(0.78)',
        ),
        ...moved(ALPACAMAN_SABRE, 'translate(38 178) rotate(-12) scale(0.82)'),
        ...moved(
          ALPACAMAN_SABRE,
          'translate(126 172) scale(-1 1) rotate(-22) scale(0.82)',
        ),
        shadow(80, 190, 62),
      ],
    },
  ],
  // The same tail and tickets, set higher, and two small flintlocks laid in
  // front of them, muzzle to muzzle: he holds the prisoners with them from
  // 947 (ch. 948). He has them no more when he is back at Onigashima, at
  // 1019 (ch. 1004), and the drawing is his first one again.
  'daifugo': [
    {
      episode: 947,
      chapter: 948,
      value: [
        ...moved(wanoArt.daifugo.slice(0, -1), 'translate(0 -22)'),
        ...moved(DAIFUGO_FLINTLOCK, 'translate(44 164) rotate(-6)'),
        ...moved(
          DAIFUGO_FLINTLOCK,
          'translate(116 176) scale(-1 1) rotate(-6)',
        ),
        shadow(80, 192, 58),
      ],
    },
    { episode: 1019, chapter: 1004, value: wanoArt.daifugo },
  ],
  // Out of the cell: his straw kasa set down behind, the wide cone, its far
  // side hatched and the frayed rim in his colour, and Soto Muso laid in
  // front in its scabbard, with no guard. Raizo throws him the key and the
  // sword at 948 (ch. 948).
  'kawamatsu': [
    {
      episode: 948,
      chapter: 948,
      value: [
        {
          d: 'M10 126 C30 108 58 84 78 70 C80 68 84 68 86 70 C106 84 134 108 154 126',
        },
        {
          d: 'M30 112 C58 104 106 104 134 112 M52 92 C70 87 94 87 112 92',
          role: 'soft',
        },
        {
          d: 'M98 91 l6 -4 M110 101 l6 -4 M122 111 l6 -4 M134 121 l6 -4 M104 104 l6 -4 M118 114 l6 -4 M130 124 l6 -4',
          role: 'ambient',
        },
        {
          d: 'M10 126 L8 133 L16 132 L16 138 L26 136 L28 142 L38 139 L42 145 L52 142 L58 148 L66 144 L74 149 L82 145 L90 149 L98 144 L106 147 L112 141 L120 143 L126 137 L134 138 L138 132 L146 132 L148 127 L154 126',
          role: 'accent',
        },
        ...wanoArt.kawamatsu.slice(5, 6),
        ...moved(SOTO_MUSO, 'translate(14 184) rotate(-10) scale(0.88)'),
        shadow(82, 192, 64),
      ],
    },
  ],
  // The fox he was all along, Onimaru, standing on the same bridge: he
  // turns back into it at 954 (ch. 953). The naginata and the swords are
  // gone with the monk.
  'gyukimaru': [
    {
      episode: 954,
      chapter: 953,
      value: [
        ...wanoArt.gyukimaru.slice(0, 4),
        ...moved(ONIMARU, 'translate(16 -16) scale(0.78)'),
        ...wanoArt.gyukimaru.slice(8, 9),
      ],
    },
  ],
  // His horse half, side on, with no man on it: the round barrel under the
  // checked cloth, the band at the front where his waist sits, the four legs
  // and hooves, the far ones light, the long dark tail hatched. His kanabo
  // lies in front, the ring at its end in his colour. The barrel he drank
  // from is gone. His body is first shown whole at 1058 (ch. 1032).
  'fuga': [
    {
      episode: 1058,
      chapter: 1032,
      value: [
        {
          d: 'M140 80 C154 84 158 104 154 126 C152 142 148 154 142 164 C138 148 142 126 138 104',
          role: 'ambient',
        },
        {
          d: 'M144 98 l7 3 M145 112 l7 2 M145 126 l7 1 M143 140 l6 0 M142 152 l5 -1',
          role: 'ambient',
        },
        {
          d: 'M34 88 C18 96 18 124 36 132 M50 134 C68 144 98 144 114 134 M104 68 C112 68 118 66 124 66 C138 66 146 80 144 96 C143 108 138 118 132 124',
        },
        {
          d: 'M112 92 C126 100 128 120 120 134 M36 132 C42 128 48 128 52 134',
          role: 'soft',
        },
        {
          d: 'M60 140 L61 152 L60 164 M106 140 L109 152 L108 164',
          role: 'soft',
        },
        {
          d: 'M38 130 L41 148 L40 162 M52 134 L50 148 L50 162 M38 162 L36 170 H54 L52 162 Z M120 134 L125 148 L120 162 M134 128 L138 142 L132 150 L130 162 M118 162 L116 170 H134 L132 162 Z',
        },
        {
          d: 'M30 82 C38 66 60 58 80 62 M34 92 C44 76 62 70 82 72 M30 82 L34 92 M80 62 L82 72',
        },
        {
          d: 'M44 82 L48 124 Q76 130 104 122 L106 68 Q92 62 80 64',
          role: 'soft',
        },
        {
          d: 'M62 76 L64 126 M78 72 L80 128 M92 66 L92 127 M46 96 L105 90 M47 110 L105 106',
          role: 'soft',
        },
        {
          d: 'M36 179 L140 184 M36 187 L140 192 M140 184 V192',
          role: 'ambient',
        },
        {
          d: 'M48 186 l4 -6 M60 187 l4 -6 M72 187 l4 -6 M84 188 l4 -6 M96 188 l4 -6 M108 189 l4 -6 M120 190 l4 -6',
          role: 'ambient',
        },
        { d: circle(24, 183, 13), role: 'accent' },
        { d: circle(24, 183, 4.5), role: 'accent' },
        shadow(86, 174, 58),
      ],
    },
  ],
}
