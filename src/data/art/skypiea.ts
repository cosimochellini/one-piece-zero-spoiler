import { circle, dots, ellipse, house, SEA, shadow } from '~/lib/svg/primitives'

import type { Drawings, Redrawings, Stroke } from './stroke'

/**
 * Sengoku's cap: the crown with its far side hatched, the braided band, the
 * peak. Worn in the first drawing, set down on the ground from 511.
 */
const SENGOKU_CAP: Stroke[] = [
  {
    d: 'M7.7 109.1 C6 83.6 19.6 68.3 41.7 68.3 C63.8 68.3 77.4 83.6 75.7 109.1',
  },
  {
    d: 'M6 109.1 C6 102.3 77.4 102.3 77.4 109.1 V117.6 C77.4 124.4 6 124.4 6 117.6 Z',
    role: 'accent',
  },
  {
    d: 'M6 117.6 C-0.8 121 -2.5 129.5 4.3 132.9 C19.6 139.7 53.6 138 68.9 131.2 C74 127.8 75.7 122.7 72.3 119.3',
  },
  {
    d: 'M58.7 75.1 l-5.1 6.8 M65.5 81.9 l-6.8 8.5 M70.6 90.4 l-6.8 8.5 M74 98.9 l-5.1 5.1',
    role: 'ambient',
  },
  { d: 'M17.9 83.6 C28.1 75.1 43.4 73.4 55.3 76.8', role: 'soft' },
  { d: 'M14.5 132.9 C28.1 136.3 50.2 136.3 63.8 131.2', role: 'soft' },
]

/**
 * Sengoku's goat side on with no eye drawn, chewing a sheet of paperwork, and
 * the ground it stands on, beside the cap worn or set down.
 */
const SENGOKU_GOAT: Stroke[] = [
  {
    d: 'M112 116 H144 C152 116 156 124 154 134 C152 142 146 148 136 148 H118 C110 148 106 142 106 134 C106 124 108 116 112 116 Z',
  },
  { d: 'M112 148 V178 M120 148 V176 M138 148 V176 M146 146 V178' },
  {
    d: 'M112 118 C110 106 108 96 112 88 C116 80 112 74 106 72 C98 70 92 74 92 80 C92 86 98 88 104 86',
  },
  { d: 'M110 74 C112 64 120 60 128 64 M112 80 l10 2', role: 'soft' },
  { d: 'M92 82 l-1 9 l5 -3' },
  { d: 'M94 78 l-18 -4 l-2 12 l18 4 z', role: 'soft' },
  { d: 'M154 122 l6 -6' },
  { d: 'M-2 182 H158', role: 'ambient', dashed: true },
]

/** The bar Doflamingo's strings hang from, and its hook. */
const DOFLAMINGO_BAR: Stroke[] = [
  { d: 'M44 42 L116 32' },
  { d: 'M80 37 V26', role: 'ambient' },
]

/**
 * Doflamingo's sunglasses in 3/4: the rims with their depth, the bridge, one
 * temple folded, the dark lenses hatched. Hung from the strings in the first
 * drawing, fallen and cracked from 733.
 */
const DOFLAMINGO_GLASSES: Stroke[] = [
  {
    d: 'M24 100 L74 94 C78 94 80 98 80 102 L78 120 C78 124 74 126 70 126 L30 130 C24 130 22 126 22 122 L22 104 C22 102 22 100 24 100 Z',
    role: 'accent',
  },
  {
    d: 'M92 93 L128 89 C132 89 134 92 134 95 L134 112 C134 116 132 118 128 118 L98 121 C94 121 92 118 92 115 Z',
    role: 'accent',
  },
  {
    d: 'M24 100 L30 94 L78 89 C82 89 86 93 86 97 L80 102 M92 93 L96 89 L130 85 C134 85 138 88 138 92 L134 95',
  },
  { d: 'M86 97 V112 L78 120 M138 92 V108 L134 112' },
  { d: 'M80 106 C84 102 88 102 92 104' },
  { d: 'M134 100 L148 112 L152 126 M134 108 L144 118 L146 128' },
  {
    d: 'M30 112 l10 -10 M30 124 l18 -18 M44 124 l18 -18 M58 122 l16 -16 M98 110 l10 -10 M98 116 l16 -16 M110 116 l16 -16',
    role: 'ambient',
  },
]

/** The barrels and hammer of Braham's flash gun, drawn twice. */
const BRAHAM_BARRELS: Stroke[] = [
  { d: 'M34 96 H112 L118 100 V124 L112 128 H66' },
  { d: 'M34 112 H118 M34 128 H66', role: 'soft' },
  { d: `${ellipse(34, 104, 3, 8)} ${ellipse(34, 120, 3, 8)}` },
  { d: 'M118 100 l6 -8 l6 4 l-6 8' },
]

/** Braham's second gun, up and behind the first, its grip hidden by it. */
function behindTheOther(strokes: Stroke[]): Stroke[] {
  const behind = 'translate(-20 -62)'

  return strokes.map((stroke) => ({ ...stroke, transform: behind }))
}

/** The Going Merry's tilt as the Knock Up Stream lifts her bow first. */
const MERRY_TILT = 'rotate(-10 80 90)'

/**
 * Kuma's Bible, closed and stood on end, without the rays on its cover: the
 * book of the first drawing, and the one stood beside the steel plate from
 * 469.
 */
const KUMA_BIBLE_BODY: Stroke[] = [
  { d: 'M40 62 L104 54 V162 L40 170 Z' },
  { d: 'M40 62 L54 52 L118 44 L104 54 M118 44 V152 L104 162' },
  { d: 'M40 62 q-8 54 0 108' },
  { d: 'M50 61 V168', role: 'soft' },
  { d: 'M47 57 L111 49', role: 'soft' },
]

/** The hatching on the Bible's page block, left off the small one at 469. */
const KUMA_BIBLE_PAGES: Stroke = {
  d: 'M108 64 l7 -5 M108 84 l7 -5 M108 104 l7 -5 M108 124 l7 -5 M108 144 l7 -5',
  role: 'ambient',
}

/** The drawings of the records filed in the skypiea stretch of the route. */
export const skypieaArt = {
  // A Log Pose on its wrist band with the needle pointing straight up, and a
  // galleon falling out of the sky above it.
  'jaya-arc': [
    { d: circle(80, 116, 28) },
    { d: 'M80 136 V100 M73 108 L80 96 L87 108', role: 'accent' },
    { d: 'M72 143 V150 M88 143 V150' },
    { d: ellipse(80, 156, 32, 8) },
    { d: 'M92 30 L138 20 L132 38 L100 46z', transform: 'rotate(28 114 32)' },
    {
      d: 'M116 34 V8 M116 12 L130 18 L116 24',
      role: 'soft',
      transform: 'rotate(28 114 32)',
    },
    { d: 'M92 16 v-10 M126 8 v-6', role: 'ambient', dashed: true },
    shadow(80, 176, 36),
  ],

  // The Going Merry thrown up on a column of sea water toward the cloud bank,
  // the spray breaking around her hull and a wing of her flying model out to
  // the side: the Knock Up Stream fires the ship into the sky at 152.
  'skypiea': [
    {
      d: 'M-4 24 q6 -12 20 -6 q8 -14 24 -6 q10 -12 26 -2 q12 -10 26 0 q12 -10 26 0 q10 -8 22 0 q8 -4 14 4',
    },
    {
      d: 'M8 28 l6 -6 M24 30 l6 -6 M128 30 l6 -6 M144 28 l6 -6',
      role: 'ambient',
    },
    {
      d: 'M54 160 C62 140 56 122 64 102 M106 160 C98 140 104 122 96 102',
      role: 'accent',
    },
    {
      d: 'M64 102 q-14 4 -22 -6 q-8 6 -16 -2 M96 102 q14 4 22 -6 q8 6 16 -2',
      role: 'accent',
    },
    { d: 'M72 154 v-16 M88 146 v-16 M78 126 v-12', role: 'soft', dashed: true },
    {
      d: 'M40 80 H120 C116 94 104 102 90 102 H62 C52 102 44 94 40 80 Z',
      transform: MERRY_TILT,
    },
    { d: 'M42 86 H118', role: 'soft', transform: MERRY_TILT },
    { d: 'M78 80 V34 M78 38 C96 44 96 70 78 76', transform: MERRY_TILT },
    {
      d: 'M120 80 q8 -4 6 -12 M54 88 C42 84 32 76 26 64 C38 66 50 74 58 84',
      role: 'soft',
      transform: MERRY_TILT,
    },
    {
      d: 'M58 94 l4 6 M70 96 l4 6 M82 96 l4 6 M94 95 l4 6 M106 92 l4 6',
      role: 'ambient',
      transform: MERRY_TILT,
    },
    { d: 'M30 160 q50 8 100 0', role: 'ambient', dashed: true },
    ...SEA.slice(1),
  ],

  // Mock Town seen from the harbour: a two-storey tavern with its balcony
  // between two smaller houses, their tiled roofs in the tint, and a palm at
  // the end of the quay. Pirates put in here to spend their loot, and brawls
  // are an everyday thing (146). The tavern's side wall is hatched.
  'jaya': [
    { d: 'M12 150 V120 H40 V150 M22 150 V136 h8 V150' },
    { d: 'M8 120 L26 104 L44 120', role: 'accent' },
    { d: 'M54 150 V98 H102 V150 M72 150 V134 h12 V150' },
    { d: 'M48 98 L62 80 H94 L108 98', role: 'accent' },
    { d: 'M102 150 L110 144 V94 L108 98 M108 98 L114 92 L100 76 L94 80' },
    {
      d: 'M104 108 l4 -3 M104 120 l4 -3 M104 132 l4 -3 M104 144 l4 -3',
      role: 'ambient',
    },
    {
      d: 'M50 120 H106 M50 126 H106 M56 126 V120 M64 126 V120 M72 126 V120 M80 126 V120 M88 126 V120 M96 126 V120',
      role: 'soft',
    },
    { d: 'M62 104 v10 M78 104 v10 M94 104 v10', role: 'soft' },
    { d: 'M118 150 V118 H144 V150 M126 150 v-12 h8 v12' },
    { d: 'M114 118 L131 102 L148 118', role: 'accent' },
    { d: 'M44 104 L50 98 M108 84 L118 92 L124 98', role: 'soft' },
    { d: 'M154 150 C152 128 154 108 148 88' },
    {
      d: 'M148 88 q-14 -4 -22 8 M148 88 q-2 -14 -14 -18 M148 88 q12 -8 20 0 M148 88 q12 4 14 18',
      role: 'soft',
    },
    { d: 'M-4 150 H164', role: 'ambient', dashed: true },
    ...SEA.slice(1),
  ],

  // A salvage crane from his ship, the arm hatched underneath, its chain
  // running down from the pulley into the sea where the wreck lies: his crew
  // sets the cradle and hauls the St. Briss up off the bottom (144). He dives
  // in goggles, not a helmet.
  'masira': [
    { d: 'M-4 118 H50 C52 134 48 148 40 158 H-4' },
    { d: 'M-4 128 H50 M-4 140 H48', role: 'soft' },
    { d: 'M2 148 l6 -6 M14 152 l8 -8 M28 154 l8 -8', role: 'ambient' },
    { d: 'M20 118 C16 84 38 48 100 28' },
    { d: 'M32 118 C30 90 50 60 104 40' },
    {
      d: 'M22 102 l9 1 M24 86 l9 3 M30 70 l8 5 M42 56 l6 6 M58 44 l5 8 M76 36 l3 8',
      role: 'ambient',
    },
    { d: circle(108, 36, 9) },
    { d: 'M112 30 L117 36', role: 'soft' },
    {
      d: `${ellipse(117, 56, 3, 7)} ${ellipse(117, 84, 3, 7)} ${ellipse(117, 112, 3, 7)} M117 45 V49 M117 63 V77 M117 91 V105 M117 119 V133`,
      role: 'accent',
    },
    { d: 'M117 133 V140 C117 148 107 150 104 144', role: 'accent' },
    { d: 'M100 156 q8 -6 17 -6 q9 0 17 6', role: 'ambient' },
    ...SEA.slice(1),
  ],

  // His microphone on its stand: a ball with a lattice grille, and the sound
  // going out of it. He roars into it to search the sea and to break ships
  // with his Havoc Sonar (147). The ball's far side is hatched.
  'shoujou': [
    { d: circle(64, 58, 22) },
    {
      d: 'M60.2 36.3 L84.7 65.5 M43.3 50.5 L67.8 79.7 M84.7 50.5 L60.2 79.7 M67.8 36.3 L43.3 65.5',
      role: 'soft',
    },
    { d: 'M52 77 L55 86 H73 L76 77' },
    { d: 'M76 70 l3 3 M70 76 l3 2 M81 61 l3 2', role: 'ambient' },
    { d: 'M62 86 V170 M66 86 V170' },
    { d: 'M58 124 h12 v6 h-12z', role: 'soft' },
    { d: ellipse(64, 172, 24, 6) },
    {
      d: 'M94 48 q8 10 0 20 M106 40 q14 18 0 36 M118 32 q20 26 0 52',
      role: 'accent',
    },
    shadow(64, 186, 30),
  ],

  // His flintlock laid on the bar counter beside the glass of the expensive
  // drink he orders for Luffy, just before he smashes Luffy's head into that
  // counter (ch. 224, ep. 146). He shoots Roshio with it in ch. 222; in the
  // anime (146) he shoots out the window. The counter's front is hatched. The
  // springs are left out: he first bounces on them at 150 (ch. 231).
  'bellamy': [
    { d: 'M0 140 L24 112 H164 M0 140 H164' },
    { d: 'M0 140 V188 M0 150 H164', role: 'soft' },
    {
      d: 'M12 160 l-6 10 M36 160 l-6 10 M60 160 l-6 10 M84 160 l-6 10 M108 160 l-6 10 M132 160 l-6 10 M156 160 l-6 10',
      role: 'ambient',
    },
    { d: 'M50 112 L116 98 L118 106 L52 121', role: 'accent' },
    { d: ellipse(117, 102, 2.4, 4.2) },
    { d: 'M70 108 l2 8 M96 102 l2 8', role: 'soft' },
    {
      d: 'M50 112 C40 114 30 120 20 128 C12 134 16 142 24 140 C34 136 44 128 54 124 L52 121',
    },
    { d: 'M44 114 C40 104 44 94 54 92 L56 98 C50 100 50 106 52 112' },
    { d: 'M58 122 q2 9 12 7 q2 -3 0 -9', role: 'soft' },
    { d: 'M26 130 l6 -6 M34 128 l6 -6', role: 'ambient' },
    { d: 'M126 118 L122 76 H148 L144 118 Z' },
    { d: 'M123 88 H147', role: 'soft' },
    { d: 'M140 82 l4 -4 M140 96 l5 -4 M140 110 l4 -3', role: 'ambient' },
    { d: 'M118 120 q15 5 32 0', role: 'ambient', dashed: true },
  ],

  // The castle he lives in, which is a plywood board: onion domes painted on
  // a flat front, its thin edge showing, and the small house standing behind
  // it. The Straw Hats see through it on arrival (148).
  'montblanc-cricket': [
    { d: 'M12 150 V92 H30 V108 H46 V80 H78 V108 H94 V92 H112 V150' },
    {
      d: 'M12 92 C6 82 16 74 21 64 C26 74 36 82 30 92 M46 80 C36 66 54 54 62 42 C70 54 88 66 78 80 M94 92 C88 82 98 74 103 64 C108 74 118 82 112 92',
      role: 'accent',
    },
    {
      d: 'M16 88 Q20 78 25 70 M54 76 Q60 62 68 48 M98 88 Q102 78 107 70',
      role: 'soft',
    },
    { d: 'M54 150 V130 a8 8 0 0 1 16 0 V150', role: 'soft' },
    { d: 'M18 116 v10 M24 116 v10 M100 116 v10 M106 116 v10', role: 'soft' },
    { d: 'M112 150 l5 -4 V89 l-5 3' },
    { d: 'M113 104 l3 -2 M113 118 l3 -2 M113 132 l3 -2', role: 'ambient' },
    { d: house(124, 24, 122, 106) },
    { d: 'M124 122 l10 -6 M126 136 l10 -6', role: 'ambient' },
    { d: 'M2 150 H158', role: 'ambient', dashed: true },
    ...SEA.slice(1),
  ],

  // A cherry pie with one slice gone, and the bottle that went with it.
  'marshall-d-teach': [
    { d: ellipse(64, 118, 42, 17) },
    { d: 'M22 118 V130 a42 17 0 0 0 84 0 V118' },
    {
      d: 'M26 116 q6 -6 12 0 q6 6 12 0 q6 -6 12 0 q6 6 12 0 q6 -6 12 0 q6 6 12 0',
      role: 'soft',
    },
    { d: 'M64 118 L100 108 M64 118 L102 128' },
    {
      d: `${circle(48, 112, 4)} ${circle(66, 106, 4)} ${circle(82, 114, 4)}`,
      role: 'accent',
    },
    { d: 'M118 170 V128 q0 -8 5 -11 V104 h10 v13 q5 3 5 11 V170z' },
    { d: 'M118 140 H138 M118 156 H138', role: 'ambient' },
    shadow(70, 156, 48),
  ],

  // The Bible he holds through the Warlords' meeting (151), closed and stood
  // on end: the rays on its cover, the page block on the far side hatched.
  // The paw pressed into a steel plate beside it from 469, in
  // `skypieaRedrawn`.
  'bartholomew-kuma': [
    ...KUMA_BIBLE_BODY,
    KUMA_BIBLE_PAGES,
    {
      d: 'M77 101 L77 86 M81.1 102.3 L89.9 90.2 M83.7 105.8 L97.9 101.2 M83.7 110.2 L97.9 114.8 M81.1 113.7 L89.9 125.8 M77 115 L77 130 M72.9 113.7 L64.1 125.8 M70.3 110.2 L56.1 114.8 M70.3 105.8 L56.1 101.2 M72.9 102.3 L64.1 90.2',
      role: 'accent',
    },
    shadow(80, 182, 48),
  ],

  // His Marine cap in 3/4, the braided band as the accent and the peak
  // turned toward the reader, and the goat at his side chewing a sheet of
  // paperwork: he chairs the Warlords' meeting with it beside him (151). The
  // cap is set down at his retirement, from 511, in `skypieaRedrawn`.
  'sengoku': [...SENGOKU_CAP, ...SENGOKU_GOAT],

  // The small sake barrel he drinks from, its far side hatched, and the drip
  // stand beside his chair with its line running down as the accent: the
  // nurses keep him on IVs while he tears up Shanks's letter (151). His
  // bisento stands over his grave from 505, in `skypieaRedrawn`.
  'edward-newgate': [
    { d: ellipse(60, 112, 34, 10) },
    {
      d: 'M26 112 C22 132 24 156 30 170 C40 180 80 180 90 170 C96 156 98 132 94 112',
    },
    { d: ellipse(60, 112, 28, 7), role: 'soft' },
    { d: 'M26 126 C40 134 80 134 94 126 M28 156 C40 164 80 164 92 156' },
    {
      d: 'M42 121 C40 140 42 158 46 176 M60 122 V178 M78 121 C80 140 78 158 74 176',
      role: 'soft',
    },
    {
      d: 'M84 134 l6 -4 M84 146 l8 -4 M84 164 l6 -4 M80 174 l6 -4',
      role: 'ambient',
    },
    { d: 'M126 184 V20 M126 20 H144 M116 184 H136' },
    {
      d: 'M138 20 V30 M132 30 H146 V58 C146 66 132 66 132 58 Z',
      role: 'accent',
    },
    {
      d: 'M139 64 V74 C139 96 112 96 110 120 C108 138 118 146 108 160',
      role: 'accent',
    },
    { d: 'M134 40 H144', role: 'soft' },
    shadow(70, 186, 46),
  ],

  // His sunglasses in 3/4, hung by the rims from strings like a puppet's: the
  // rims have depth, one temple is folded and the dark lenses are hatched. He
  // works two Marines like puppets at the Warlords' meeting (151). The
  // strings cut and the glasses fallen and cracked from 733, in
  // `skypieaRedrawn`.
  'donquixote-doflamingo': [
    ...DOFLAMINGO_BAR,
    {
      d: 'M50 41 L32 98 M110 33 L124 92 M62 40 L76 92 M98 35 L96 90',
      role: 'soft',
    },
    ...DOFLAMINGO_GLASSES,
  ],

  // His open jacket with the sash knotted at the waist, the way he stands on
  // Whitebeard's deck when Shanks comes aboard (316). The inside of the back is
  // hatched.
  'marco': [
    { d: 'M56 40 L30 70 L22 112 L36 116 L44 84 L48 168 H74 L70 54 Z' },
    { d: 'M96 44 L120 64 L132 108 L120 112 L110 84 L108 164 H84 L88 52 Z' },
    { d: 'M56 40 Q76 52 96 44 L88 52 Q78 58 70 54 Z', role: 'soft' },
    { d: 'M70 54 L74 168 M88 52 L84 164' },
    {
      d: 'M74 70 l10 -4 M74 86 l10 -4 M74 102 l10 -4 M75 118 l9 -4 M75 134 l9 -4 M75 150 l9 -4',
      role: 'ambient',
    },
    { d: 'M48 124 Q78 132 108 122 V136 Q78 146 48 138 Z', role: 'accent' },
    { d: `${circle(96, 132, 6)} M93 138 l-6 26 M99 138 l5 24`, role: 'accent' },
    { d: 'M30 70 L40 74 L44 84 M120 64 L114 72 L110 84', role: 'soft' },
    shadow(78, 182, 46),
  ],

  // His helmet in 3/4 with the visor raised and a spike on the crown, the dark
  // inside hatched, beside the lance he jousts with when he rides in to save
  // the crew from a masked attacker (153).
  'gan-fall': [
    { d: 'M30 18 L22 60 H38 Z' },
    { d: 'M22 60 L16 74 H44 L38 60', role: 'accent' },
    { d: 'M30 74 V184' },
    { d: 'M26 22 L33 54', role: 'soft' },
    { d: 'M70 140 C66 104 82 78 106 78 C130 78 146 104 142 140' },
    { d: 'M106 78 V64 M101 70 L106 62 L111 70' },
    { d: 'M106 78 C100 96 100 118 102 140', role: 'soft' },
    { d: 'M74 106 C88 94 124 94 138 106 L136 116 C122 106 90 106 76 116 Z' },
    {
      d: 'M88 104 v6 M96 102 v6 M104 101 v6 M112 101 v6 M120 102 v6',
      role: 'soft',
    },
    { d: 'M84 118 C84 130 88 138 94 142 M128 118 C128 130 124 138 118 142' },
    {
      d: 'M88 122 l4 -4 M88 132 l12 -12 M94 138 l18 -18 M104 140 l18 -18 M116 140 l10 -10',
      role: 'ambient',
    },
    { d: 'M64 140 H148 L152 154 H60 Z' },
    shadow(104, 168, 50),
  ],

  // His Burn Bazooka lying in front of his shield, the flared exhaust as the
  // accent: he charges the Going Merry with both on the White Sea (153). The
  // shield's edge is hatched.
  'wyper': [
    { d: 'M58 22 H114 V92 L86 146 L58 92 Z' },
    { d: 'M114 22 l8 6 V94 L92 150 L86 146 M114 92 l8 2' },
    {
      d: 'M117 40 l3 2 M117 58 l3 2 M117 76 l3 2 M110 106 l4 2 M102 122 l4 2',
      role: 'ambient',
    },
    { d: 'M86 26 V140 M64 30 H108', role: 'soft' },
    { d: 'M24 150 H130 V166 H24 Z' },
    { d: ellipse(130, 158, 3.5, 8) },
    { d: 'M24 150 L8 142 V174 L24 166', role: 'accent' },
    { d: ellipse(8, 158, 3, 16), role: 'accent' },
    { d: 'M40 153 h22 v10 h-22 z', role: 'soft' },
    { d: 'M70 150 V142 H84 V150 M100 166 L104 178 H112 L108 166' },
    shadow(70, 188, 60),
  ],

  // The long knife with a cross-guard he holds when he catches Aisa coming back
  // from Upper Yard (ch. 249, ep. 163). The grip is hatched. His Burn Blade is
  // left out: he first uses it against Enel (ch. 264).
  'kamakiri': [
    { d: 'M64 128 L132 38 L136 30 L138 46 L72 134', role: 'accent' },
    { d: 'M68 131 L134 40', role: 'soft' },
    { d: 'M54 116 L84 142 M54 116 l-3 5 l29 25 l4 -4' },
    { d: 'M66 132 L40 166 M72 136 L46 170' },
    { d: 'M47 152 l7 5 M43 158 l7 5 M51 146 l7 5', role: 'ambient' },
    { d: 'M40 166 C34 172 36 180 44 178 C48 176 48 172 46 170' },
    { d: 'M132 38 l3 4', role: 'soft' },
    shadow(84, 186, 52),
  ],

  // Two flash guns, double-barrelled derringers, one behind the other: he is
  // cleaning one at the Shandia meeting (ch. 249, ep. 163). The black grip is
  // hatched. No flash: he first fires them at 165.
  'braham': [
    ...behindTheOther(BRAHAM_BARRELS),
    { d: 'M92 66 C98 74 102 84 102 94' },
    ...BRAHAM_BARRELS,
    { d: 'M112 128 C122 142 126 158 120 174 L100 178 C104 160 100 144 92 128' },
    { d: 'M78 96 v32 M90 96 v32', role: 'accent' },
    {
      d: 'M104 136 l10 -4 M106 148 l12 -4 M106 160 l12 -4 M104 170 l12 -4',
      role: 'ambient',
    },
    { d: 'M70 128 q4 14 18 12 q4 -4 2 -12', role: 'soft' },
    shadow(80, 190, 54),
  ],

  // His bazooka in 3/4, the wide muzzle as the accent, the barrel hatched
  // underneath: he carries it on his shoulder when the Shandia set off for
  // Upper Yard (ch. 251, ep. 164).
  'genbo': [
    { d: 'M24 150 L120 54 L138 72 L42 168 Z' },
    {
      d: 'M114 48 L144 78 M112 46 C120 38 136 40 146 50 C156 60 158 76 150 84 C144 90 128 88 118 78',
      role: 'accent',
    },
    { d: ellipse(132, 64, 12, 18), role: 'accent' },
    { d: 'M60 114 L78 132 M66 108 L84 126', role: 'soft' },
    {
      d: 'M40 154 l6 6 M52 142 l6 6 M88 106 l6 6 M100 94 l6 6 M112 82 l6 6',
      role: 'ambient',
    },
    { d: 'M24 150 C18 156 18 164 24 170 C30 176 38 176 42 168' },
    { d: 'M72 126 L84 150 H96 L84 124' },
    shadow(80, 188, 54),
  ],

  // Her long rifle in 3/4, lying down: a wooden stock with a dropped butt and
  // a long dark barrel ringed with bands, the wide band at the muzzle as the
  // accent. She first fires it at Holy (ch. 252, ep. 165). The stock's lower
  // face and the barrel's underside are hatched. No scope, no feather.
  'laki': [
    {
      d: 'M14.5 141.6 L75.1 108.6 L80.8 118.1 L57.3 133.3 C46.4 142.3 40 158.9 29.9 167.3 C23 159.8 17.9 151.2 14.5 141.6 Z',
    },
    {
      d: 'M14.5 141.6 L8.4 139.4 L60.6 111.6 L68 112.3 M8.4 139.4 C10.7 150.9 18.8 162.3 23.6 166.5 L29.9 167.3',
    },
    { d: 'M75.4 109.1 L145.7 66.8 M80 116.8 L150.3 74.5' },
    {
      d: 'M145.7 66.8 A2.2 4.5 -31 1 0 150.3 74.5 A2.2 4.5 -31 1 0 145.7 66.8',
    },
    {
      d: 'M129.5 74.8 C133.7 77 135.7 80.4 135.7 85.1 L142.5 81 C142.6 76.3 140.5 72.8 136.3 70.7 Z',
      role: 'accent',
    },
    {
      d: 'M80 105.1 C84 106.8 86 110.3 85.7 114.5 M104 90.7 C108 92.4 110 95.8 109.7 100.1',
      role: 'soft',
    },
    { d: 'M60.6 111.6 L55.8 107.4 L59.5 104' },
    {
      d: 'M54.1 135.8 C60.8 142.9 72.8 135.7 69.1 125.7 M60.7 131.3 L65 134.5',
    },
    {
      d: 'M32.3 157.7 L36.6 161 M37.6 151 L42.2 154.7 M42.9 144.3 L47.2 147.6 M91.9 105.5 L95.5 107.5 M99.7 100.9 L103.2 102.9 M115.9 91.1 L119.5 93.1 M123.7 86.5 L127.2 88.4',
      role: 'ambient',
    },
    shadow(84, 182, 62),
  ],

  // Her satchel set down with the flap over its mouth and the buckle on its
  // tab, the strap trailing on the ground, and Vearth spilling out of one
  // side: she fills the bag with soil on Upper Yard (163).
  'aisa': [
    { d: 'M44 106 C30 140 44 172 82 172 C120 172 134 140 120 106' },
    {
      d: 'M40 106 Q82 84 124 106 C120 124 102 136 82 138 C62 136 44 124 40 106 Z',
    },
    { d: 'M46 108 Q82 92 118 108', role: 'soft' },
    { d: 'M82 138 V146', role: 'soft' },
    { d: 'M76 146 h12 v10 h-12z M82 146 v10', role: 'accent' },
    { d: 'M120 106 C140 104 150 122 146 140 C142 160 128 174 108 178' },
    { d: 'M140 150 l9 4 l-4 9 l-9 -4z', role: 'accent' },
    { d: 'M110 148 l7 -4 M106 160 l7 -4 M96 168 l7 -4', role: 'ambient' },
    { d: 'M42 112 q-12 4 -14 18 q-1 8 -6 14', role: 'soft' },
    {
      d: dots([
        [14, 152],
        [22, 160],
        [12, 166],
      ]),
      role: 'ambient',
    },
    { d: 'M4 184 q6 -16 20 -12 q8 -8 18 2 q6 4 6 10', role: 'soft' },
    shadow(84, 182, 40),
  ],

  // Her harp, the strings soft and the base hatched, and the Tone Dial she uses
  // to show the crew what dials do: she is playing the harp on Angel Beach when
  // they arrive (154).
  'conis': [
    { d: 'M38 160 C32 120 34 70 46 30 C50 22 58 22 60 30' },
    { d: 'M44 160 C38 120 40 72 52 34', role: 'soft' },
    {
      d: 'M60 30 C72 34 90 50 108 74 C120 90 124 104 122 112 L118 116',
      role: 'accent',
    },
    { d: 'M38 160 H60 L118 116 L122 124 L64 166 H42 Z' },
    {
      d: 'M50 38 V158 M60 44 V156 M70 50 V148 M80 58 V141 M90 66 V133 M100 76 V126 M110 88 V119',
      role: 'soft',
    },
    {
      d: 'M62 160 l6 -4 M78 150 l6 -4 M94 138 l6 -4 M108 128 l6 -4',
      role: 'ambient',
    },
    {
      d: 'M120 178 C114 164 124 150 140 150 C152 150 158 162 152 172 C148 180 132 182 120 178 Z',
    },
    {
      d: 'M140 150 C134 156 134 166 142 168 C148 168 148 160 142 160',
      role: 'soft',
    },
    { d: 'M140 150 l4 -8' },
    shadow(84, 188, 62),
  ],

  // His Waver in 3/4, the handlebars up front and the dial shell at its stern
  // as the accent: he rides it up the beach to meet the crew (154). The hull's
  // underside is hatched.
  'pagaya': [
    {
      d: 'M14 122 H120 C134 122 146 116 154 104 C148 130 132 146 108 150 H36 C24 150 14 140 14 122 Z',
    },
    { d: 'M14 122 L22 112 H124 C136 112 146 108 154 104', role: 'soft' },
    {
      d: 'M30 130 l-6 10 M46 134 l-6 12 M62 134 l-6 14 M78 134 l-6 14 M94 134 l-6 14 M110 134 l-6 14',
      role: 'ambient',
    },
    { d: 'M96 112 L104 74 M98 78 L112 70 M104 74 L90 70' },
    {
      d: 'M26 112 C20 100 22 88 32 82 C42 78 52 86 50 96 C48 104 40 106 36 100 C32 94 38 90 42 94',
      role: 'accent',
    },
    { d: 'M50 96 L58 112 M22 112 L26 104', role: 'accent' },
    { d: 'M60 112 V100 H84 V112', role: 'soft' },
    {
      d: 'M-4 156 q12 -8 24 0 q12 8 24 0 M120 156 q12 -8 24 0 q12 8 24 0',
      role: 'ambient',
    },
    ...SEA.slice(1),
  ],

  // His gold staff standing in front of the ring of four drums he wears on his
  // back, the drums side on with their lacing and no marks on their skins, as
  // he appears to his priests at his shrine (167). The ring's underside is
  // hatched.
  'enel': [
    { d: ellipse(80, 84, 58, 42) },
    {
      d: `${ellipse(10, 86, 5, 14)} M10 72 C20 70 30 70 40 72 M10 100 C20 102 30 102 40 100 M40 72 a5 14 0 0 1 0 28`,
    },
    {
      d: `${ellipse(30, 36, 5, 14)} M30 22 C40 20 50 20 60 22 M30 50 C40 52 50 52 60 50 M60 22 a5 14 0 0 1 0 28`,
    },
    {
      d: `${ellipse(130, 36, 5, 14)} M130 22 C120 20 110 20 100 22 M130 50 C120 52 110 52 100 50 M100 22 a5 14 0 0 0 0 28`,
    },
    {
      d: `${ellipse(150, 86, 5, 14)} M150 72 C140 70 130 70 120 72 M150 100 C140 102 130 102 120 100 M120 72 a5 14 0 0 0 0 28`,
    },
    {
      d: 'M18 74 l6 24 M28 72 l6 28 M38 24 l6 24 M48 22 l6 28 M110 22 l6 28 M120 24 l6 24 M128 72 l6 28 M138 72 l6 26',
      role: 'soft',
    },
    { d: 'M76 186 V34 H84 V186 Z', role: 'accent' },
    { d: 'M76 34 C76 26 84 26 84 34 M76 176 h8', role: 'accent' },
    {
      d: 'M30 114 l6 6 M44 122 l6 6 M110 122 l6 6 M124 114 l6 6',
      role: 'ambient',
    },
    shadow(80, 192, 30),
  ],

  // A beach made of cloud, two palm trees on it and a house on the rise behind.
  'angel-island': [
    {
      d: 'M-4 138 q10 -12 22 -4 q10 -12 24 -2 q12 -12 26 -2 q12 -12 26 -2 q12 -12 26 -2 q10 -10 22 -2 q8 -6 14 0',
      role: 'accent',
    },
    {
      d: 'M52 96 q8 -12 20 -6 q10 -12 22 -2 q10 -10 20 0 q8 -4 12 4',
      role: 'soft',
    },
    { d: 'M72 90 V74 h26 V90 M68 74 q17 -20 34 0' },
    { d: 'M82 90 v-9 h6 v9', role: 'soft' },
    { d: 'M36 134 C32 110 36 84 46 62' },
    {
      d: 'M46 62 q-16 -6 -30 6 M46 62 q-4 -16 -20 -22 M46 62 q12 -14 30 -10 M46 62 q18 0 26 18',
    },
    { d: 'M128 132 C132 114 130 96 122 82' },
    {
      d: 'M122 82 q-14 -4 -24 8 M122 82 q2 -14 -10 -22 M122 82 q12 -10 26 -2 M122 82 q14 2 16 16',
    },
    ...SEA,
  ],

  // Three of his surprise balls, the same plain cloud spheres, the nearest
  // bursting open in a blast: Sanji kicks one out of the way and it
  // explodes in their faces (160). Their far sides are hatched.
  'satori': [
    { d: circle(120, 42, 16) },
    { d: 'M126 52 l5 -4 M118 55 l5 -4', role: 'ambient' },
    { d: circle(124, 104, 22) },
    { d: 'M132 118 l6 -5 M122 122 l6 -5 M140 109 l4 -4', role: 'ambient' },
    { d: 'M28 136 a34 34 0 0 0 68 0' },
    { d: 'M28 136 l8 -7 l7 6 l8 -8 l8 6 l7 -7 l8 7 l7 -6 l9 9' },
    {
      d: 'M62 120 V90 M48 124 L32 102 M76 124 L92 102 M40 130 L18 120 M84 130 L106 120',
      role: 'accent',
    },
    {
      d: 'M38 100 q4 -8 12 -6 M78 92 q8 -2 10 6 M22 108 q-2 -6 2 -10',
      role: 'soft',
    },
    { d: 'M72 162 l6 -5 M82 154 l6 -5 M88 144 l6 -5', role: 'ambient' },
    shadow(62, 184, 34),
  ],

  // His Heat Javelin: a wooden shaft, a conical guard, and a long tapering
  // head that a Heat Dial turns red hot, the air shimmering over it. He sets
  // the Going Merry alight with it (162). The head's far side is hatched.
  'shura': [
    { d: 'M26 176.5 L61 127.8 M30 179.5 L65 130.7' },
    { d: 'M26 176.5 L30 179.5' },
    { d: 'M37.3 165 L56 139', role: 'soft' },
    { d: 'M58.9 126.3 L61.7 103.7 M67.1 132.2 L87.7 122.3' },
    { d: 'M61.7 103.7 a16 5 35.7 1 0 26 18.7 a16 5 35.7 1 0 -26 -18.7' },
    { d: 'M65.5 105.2 L140 22 L85 119.2', role: 'accent' },
    {
      d: 'M94.3 102.5 L86.4 101.7 M103.3 86.8 L96.4 86.8 M112.2 71 L106.4 71.8 M121.1 55.3 L116.5 56.9',
      role: 'ambient',
    },
    { d: 'M80.6 109.9 L134.6 30.4', role: 'soft' },
    {
      d: 'M63.8 90.4 q-1.1 -7 5.8 -8.1 t5.8 -8.1 t5.8 -8.1 M80.2 72.7 q-1.1 -7 5.8 -8.1 t5.8 -8.1 t5.8 -8.1 M97.5 55.5 q-1.1 -7 5.8 -8.1 t5.8 -8.1 t5.8 -8.1',
      role: 'soft',
    },
    shadow(80, 188, 44),
  ],

  // His wide white cloth belt with the red disc on it, untied and dropped in a
  // loose loop, the end crossing over at the front and twisting once as it
  // trails away. It shows in full when he fights the Shandia raid (165). The
  // twisted underside and the side turning away are hatched.
  'gedatsu': [
    {
      d: 'M56 148 C24 144 10 124 18 106 C28 86 70 80 102 84 C134 88 148 106 142 124 C136 142 110 152 84 152',
    },
    {
      d: 'M70 138 C50 134 40 126 44 116 C50 104 76 100 98 103 C114 105 122 112 118 120 C114 128 100 131 88 131',
    },
    { d: 'M142 124 L141 130 C134 148 110 157 84 157', role: 'soft' },
    { d: circle(112, 138, 6), role: 'accent' },
    { d: 'M88 131 C72 134 58 142 44 156 M84 152 C74 156 64 162 58 172' },
    { d: 'M44 156 L58 172' },
    { d: 'M44 156 L16 162 L22 180 L58 172' },
    { d: 'M24 164 l4 11 M34 162 l4 11 M44 160 l4 11', role: 'ambient' },
    {
      d: 'M76 142 C68 144 62 148 58 154 M92 141 C98 143 102 146 104 150',
      role: 'soft',
    },
    { d: 'M128 104 l8 -5 M134 113 l8 -5 M136 123 l7 -5', role: 'ambient' },
    shadow(80, 180, 64),
  ],

  // His sword, the Eisen Whip, with the dial at its pommel as the accent, and
  // its plain white scabbard beside it; the grip is hatched. He fights the
  // Shandia with it at 165. The shapes it takes come later.
  'ohm': [
    {
      d: 'M30 160 C22 154 22 144 30 140 C36 136 44 140 44 148 C44 154 38 156 34 152 C32 148 36 146 38 148',
      role: 'accent',
    },
    { d: 'M40 142 L62 120 M46 148 L68 126' },
    { d: 'M46 138 l6 6 M52 132 l6 6 M58 126 l6 6', role: 'ambient' },
    { d: ellipse(66, 124, 6, 13), transform: 'rotate(45 66 124)' },
    {
      d: 'M70 120 L142 48 C146 42 150 38 154 36 C154 42 150 48 146 52 L74 124 Z',
    },
    { d: 'M72 122 L146 50', role: 'soft' },
    { d: 'M60 176 L148 88 L154 94 L66 182 Z' },
    { d: 'M148 88 l4 -2 l4 4 l-2 4 M64 170 l6 6', role: 'soft' },
    shadow(88, 190, 56),
  ],

  // His logbook open on the desk, lines of writing in it and the quill still
  // on the page: he is writing in it during the storm when he first hears
  // the bell (187). The pages' fall into the gutter is hatched.
  'montblanc-noland': [
    { d: 'M76 152 C60 142 36 142 14 150 L24 98 C44 92 62 94 76 104' },
    { d: 'M76 152 C92 142 114 142 136 150 L128 98 C110 92 90 94 76 104' },
    { d: 'M76 104 V152' },
    { d: 'M14 150 l-2 6 C36 150 58 150 76 158 C94 150 116 150 138 156 l-2 -6' },
    {
      d: 'M30 108 q4 -2 8 0 t8 0 t8 0 t8 0 M28 118 q4 -2 8 0 t8 0 t8 0 t8 0 M26 128 q4 -2 8 0 t8 0 t8 0 t8 0 M24 138 q4 -2 8 0 t8 0 t8 0',
      role: 'soft',
    },
    {
      d: 'M86 108 q4 -2 8 0 t8 0 t8 0 t8 0 M88 118 q4 -2 8 0 t8 0',
      role: 'soft',
    },
    { d: 'M70 106 l4 6 M70 120 l4 6 M70 134 l4 6', role: 'ambient' },
    { d: 'M106 120 L138 40' },
    {
      d: 'M138 40 C148 56 142 80 124 92 M138 40 C128 50 118 70 116 96',
      role: 'accent',
    },
    { d: 'M134 58 l-8 6 M130 70 l-8 6', role: 'soft' },
    shadow(76, 170, 62),
  ],

  // The ball-shaped anchor on its chain that he throws at a fleeing ship, and
  // the spear he runs Noland through from behind with (187). The ball's
  // underside is hatched.
  'kalgara': [
    { d: circle(96, 136, 40) },
    {
      d: 'M72 166 C88 178 116 176 130 156 M84 172 l6 -8 M96 176 l4 -10 M108 174 l3 -10 M120 168 l2 -10 M128 158 l-2 -8',
      role: 'ambient',
    },
    { d: 'M70 112 C80 102 96 98 108 100', role: 'soft' },
    { d: 'M89 97 a7 7 0 0 1 14 0' },
    {
      d: `${ellipse(98, 82, 4, 8)} ${ellipse(106, 54, 4, 8)} ${ellipse(114, 26, 4, 8)} ${ellipse(122, -2, 4, 8)} M96 92 L94 98 M101 70 L103 64 M109 42 L111 36 M117 14 L119 8`,
      role: 'accent',
    },
    { d: 'M26 186 L48 26 M32 186 L54 26' },
    { d: 'M48 26 L52 2 L58 28 C56 34 50 34 48 26 Z' },
    { d: 'M46 40 h10 M45 46 h10', role: 'soft' },
    shadow(96, 186, 46),
  ],
  // A hand of cards fanned out on a round tavern table, the winning card on
  // top: he wins a hand against Bellamy in a Mock Town bar (146). The rim of
  // the table is hatched underneath.
  'roshio': [
    { d: ellipse(80, 118, 64, 30) },
    { d: 'M16 118 v8 a64 30 0 0 0 128 0 v-8' },
    {
      d: 'M28 142 l4 -6 M44 150 l4 -6 M112 150 l4 -6 M128 142 l4 -6',
      role: 'ambient',
    },
    { d: 'M72 156 V182 M88 156 V182 M54 188 Q80 178 106 188' },
    { d: 'M65.5 147.5 L29.1 116.4 L45.8 108.9 M64.5 144.6 L45.3 108 L65 104' },
    { d: 'M65 141.6 L65 103.1 L85.7 103.1 M67 138.8 L86.1 102.2 L105.8 106.2' },
    { d: 'M70.2 136.6 L106.7 105.5 L130.9 116.4 L94.5 147.5 Z' },
    { d: 'M103.6 110 L108.6 116 L103.6 122 L98.6 116 Z', role: 'accent' },
    shadow(80, 190, 40),
  ],
  // His big knife, a kukri whose blade bends forward, the flat hatched where it
  // turns away, and the money he drops at the Straw Hats' feet so they can buy
  // decent clothes (146). No spin: his Big Chop comes at 150.
  'sarquiss': [
    {
      d: 'M56 140 C72 112 92 90 116 74 C126 66 134 56 138 40 C146 58 144 84 132 100 C116 120 92 136 66 150 Z',
      role: 'accent',
    },
    { d: 'M62 144 C80 118 100 98 124 80 C132 72 136 62 138 48', role: 'soft' },
    {
      d: 'M120 92 l6 6 M108 104 l6 6 M96 114 l5 6 M84 124 l5 6',
      role: 'ambient',
    },
    { d: 'M48 134 L74 154' },
    { d: 'M56 146 L36 172 M64 152 L44 178 M36 172 q2 8 8 6' },
    { d: 'M48 156 l7 5 M42 164 l7 5', role: 'soft' },
    { d: 'M94 166 L128 158 L134 174 L100 182 Z' },
    { d: 'M100 168 L124 162 L128 172 L104 178 Z', role: 'soft' },
    { d: 'M112 156 L142 146 L148 162 L136 166' },
    shadow(84, 188, 56),
  ],
  // Shanks's letter torn in two, as Whitebeard rips it up without reading it,
  // over the sabre Rockstar wears at his hip (151). The tear is the accent.
  'rockstar': [
    { d: 'M18 70 L66 58 L70 72 L62 82 L70 94 L64 106 L26 116 Z' },
    { d: 'M18 70 l-2 4 L24 120 L26 116', role: 'soft' },
    { d: 'M86 54 L134 42 L142 88 L96 100 L102 86 L94 76 L100 64 Z' },
    { d: 'M134 42 l4 -2 L146 86 L142 88', role: 'soft' },
    {
      d: 'M66 58 L70 72 L62 82 L70 94 L64 106 M86 54 L100 64 L94 76 L102 86 L96 100',
      role: 'accent',
    },
    {
      d: 'M28 80 H56 M30 90 H54 M32 100 H52 M102 62 H126 M106 72 H130 M108 82 H128',
      role: 'soft',
    },
    { d: 'M44 150 C76 140 116 136 152 140 C120 146 82 152 46 160 Z' },
    { d: 'M50 154 C80 146 112 142 140 141', role: 'soft' },
    { d: 'M44 150 L40 140 M46 160 L48 170' },
    { d: 'M42 155 L20 158 M22 152 C12 152 10 162 18 164 L22 158' },
    { d: 'M40 140 C30 132 16 136 14 148 C14 156 18 160 22 158' },
    shadow(80, 182, 62),
  ],
  // Pierre as he flies in his horse form, side on with no eye drawn: a horse
  // with a bird's wings and a saddle girthed on, spotted all over. He eats
  // the Horse-Horse Fruit and shows it the day he is met (153). The belly is
  // hatched.
  'pierre': [
    {
      d: 'M42 106 C60 98 92 98 104 100 C112 90 118 76 124 64 C128 56 136 54 142 58 L154 76 C156 82 150 84 146 82 L134 76 C128 86 124 100 118 112 C110 128 70 132 52 128 C40 124 36 114 42 106 Z',
    },
    { d: 'M134 58 l2 -10 l4 10' },
    { d: 'M124 66 q-6 8 -4 18 M120 78 q-6 8 -4 16', role: 'soft' },
    {
      d: 'M112 122 C120 128 124 134 120 144 M100 126 C104 134 106 142 100 150',
    },
    { d: 'M58 128 C50 136 42 140 32 138 M48 125 C40 132 30 132 22 128' },
    { d: 'M42 108 C26 106 18 118 6 122 C16 110 24 100 40 102' },
    { d: 'M104 98 C106 76 114 58 128 44', role: 'soft' },
    {
      d: 'M92 100 C80 72 64 50 40 36 C50 36 58 38 64 42 C62 36 64 34 68 34 C74 38 78 42 82 48 C82 40 84 36 88 34 C96 48 104 70 104 98',
    },
    { d: 'M66 46 q8 8 14 20 M86 42 q6 14 8 30', role: 'soft' },
    { d: 'M62 102 q12 -8 24 0 M70 102 V128', role: 'soft' },
    {
      d: 'M60 128 l4 -6 M74 130 l4 -6 M88 128 l4 -6 M102 122 l4 -6',
      role: 'ambient',
    },
    {
      d: `${circle(54, 114, 3)} ${circle(78, 114, 3)} ${circle(96, 110, 3)} ${circle(112, 100, 3)} ${circle(66, 120, 3)}`,
      role: 'accent',
    },
    shadow(80, 178, 50),
  ],
  // Su side on, standing, with no eye drawn and her long tail curled up behind
  // her as the accent: the cloud fox who comes to look the crew over on Angel
  // Beach (154).
  'su': [
    {
      d: 'M58 110 C70 100 104 100 116 110 C124 118 122 136 112 144 H64 C52 140 50 120 58 110 Z',
    },
    {
      d: 'M60 108 C58 96 54 88 48 84 L52 66 L42 80 L36 70 L34 86 C28 88 20 92 10 98 C8 102 12 106 18 106 C30 106 42 112 50 122',
    },
    { d: 'M40 84 C44 90 46 96 46 104', role: 'soft' },
    { d: 'M64 144 V170 M74 144 V172 M102 144 V172 M112 144 V170' },
    {
      d: 'M118 120 C140 116 152 98 146 80 C142 66 128 64 124 74 C120 84 130 90 136 84',
      role: 'accent',
    },
    {
      d: 'M136 70 C132 74 132 80 136 84 M144 76 C140 78 138 82 138 86',
      role: 'soft',
    },
    { d: 'M66 116 q6 -6 12 0 q6 -6 12 0 q6 -6 12 0', role: 'soft' },
    shadow(80, 180, 46),
  ],

  // Two giant trunks at the forest’s edge, too tall to end in the frame, and a small Waver below them.
  'upper-yard': [
    {
      d: 'M4 146 C18 138 22 118 24 90 C26 50 26 20 24 -4 M72 146 C58 138 54 118 54 90 C52 50 52 20 54 -4',
      role: 'accent',
    },
    {
      d: 'M84 146 C96 138 98 116 100 86 C102 50 102 20 100 -4 M150 146 C138 138 134 116 134 86 C132 50 132 20 134 -4',
      role: 'accent',
    },
    {
      d: 'M30 146 C34 136 38 128 38 118 M116 146 C118 136 118 128 118 118',
      role: 'soft',
    },
    {
      d: 'M34 70 q4 -10 0 -20 M42 40 q-4 -8 0 -16 M110 60 q4 -10 0 -20 M122 96 q-4 -8 0 -16',
      role: 'soft',
    },
    { d: 'M54 34 q-10 -12 -26 -12 M134 50 q10 -14 26 -12', role: 'soft' },
    {
      d: 'M-4 150 q8 -8 16 -2 q8 -8 18 0 q10 -8 20 0 q10 -8 20 0 q10 -8 20 0 q10 -8 20 0 q10 -8 20 0 q10 -8 20 0 q8 -6 14 2',
      role: 'ambient',
    },
    { d: 'M56 174 q24 8 48 0 l-6 8 h-36z M92 174 v-6 h10' },
    ...SEA.slice(1),
  ],
  // A White Beret's beret, tipped on the cloud of Angel Beach with its stalk on
  // top, the band as the accent and the inside hatched: the captain crawls up
  // the beach to read the crew their fines (155).
  'mckinley': [
    {
      d: 'M20 96 C16 74 52 58 90 60 C128 62 148 80 142 98 C138 110 110 116 78 114 C46 112 22 108 20 96 Z',
      transform: 'rotate(-8 80 100)',
    },
    {
      d: 'M42 108 C40 120 52 128 82 130 C112 132 126 124 124 112',
      transform: 'rotate(-8 80 100)',
    },
    {
      d: 'M42 108 C56 104 104 106 124 112',
      role: 'accent',
      transform: 'rotate(-8 80 100)',
    },
    {
      d: 'M48 116 l6 -6 M62 120 l6 -8 M76 122 l6 -8 M90 122 l6 -8 M104 122 l6 -8 M116 118 l5 -6',
      role: 'ambient',
      transform: 'rotate(-8 80 100)',
    },
    { d: 'M86 60 l2 -10 h5', transform: 'rotate(-8 80 100)' },
    {
      d: 'M34 86 C52 72 96 68 128 80',
      role: 'soft',
      transform: 'rotate(-8 80 100)',
    },
    {
      d: 'M-4 164 q10 -14 26 -6 q10 -16 30 -6 q12 -14 30 -4 q14 -14 32 -2 q12 -10 26 0 q8 -4 24 4',
      role: 'soft',
    },
    shadow(82, 150, 50),
    {
      d: 'M-4 180 q12 -6 24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0',
      role: 'ambient',
    },
  ],
  // The Ten-Fold Axe: a black sash with ten axe dials sewn along it, stretched
  // wide the way he holds it out in front of him, its cloth hatched. He brings
  // it down on Genbo (ch. 261, ep. 171).
  'yama': [
    { d: 'M16 80 C52 98 104 98 136 84 L140 112 C104 128 50 128 14 108 Z' },
    { d: 'M136 84 C144 80 150 84 152 92 L156 116 C152 110 146 108 140 112' },
    {
      d: 'M16 80 C8 76 4 70 6 64 M14 108 C6 112 4 120 8 126 M152 92 C158 92 160 86 158 80 M156 116 C162 118 162 126 158 130',
      role: 'soft',
    },
    {
      d: 'M20 108 l6 -22 M36 114 l6 -24 M52 118 l6 -24 M68 120 l6 -24 M84 120 l6 -24 M100 118 l6 -24 M116 116 l6 -24 M130 112 l6 -22 M144 108 l6 -16',
      role: 'ambient',
    },
    {
      d: 'M26 98 l-5 -8 a6 6 0 0 1 10 0 z M37 102 l-5 -8 a6 6 0 0 1 10 0 z M48 105 l-5 -8 a6 6 0 0 1 10 0 z M59 107 l-5 -8 a6 6 0 0 1 10 0 z M70 108 l-5 -8 a6 6 0 0 1 10 0 z',
      role: 'accent',
    },
    {
      d: 'M81 108 l-5 -8 a6 6 0 0 1 10 0 z M92 107 l-5 -8 a6 6 0 0 1 10 0 z M103 106 l-5 -8 a6 6 0 0 1 10 0 z M114 104 l-5 -8 a6 6 0 0 1 10 0 z M125 101 l-5 -8 a6 6 0 0 1 10 0 z',
      role: 'accent',
    },
    shadow(80, 150, 64),
  ],
  // Fuza side on in flight with no eye drawn, fire breathing out of its beak as
  // the accent: Shura's bird sets the Going Merry alight (162) and spits flames
  // at the Shandia (165). The belly is hatched.
  'fuza': [
    {
      d: 'M38 106 C54 94 84 92 104 100 C114 104 120 112 120 120 C108 126 84 128 64 124 C50 120 40 116 38 106 Z',
    },
    {
      d: 'M62 100 C54 70 38 44 12 24 C38 28 58 40 70 56 C74 44 80 34 88 26 C92 50 92 76 86 98',
    },
    { d: 'M28 38 l8 14 M42 44 l6 12 M54 52 l4 12 M80 42 l2 14', role: 'soft' },
    {
      d: 'M104 100 C108 90 112 82 118 78 C124 74 132 74 138 78 C144 82 146 88 144 94 L136 92 C132 92 128 96 128 100 C126 106 122 112 120 120',
    },
    {
      d: 'M104 100 C110 96 116 92 120 84 M110 108 C116 102 122 100 128 100',
      role: 'soft',
    },
    { d: 'M144 94 C150 98 150 104 144 106 L136 92' },
    {
      d: 'M146 98 C158 102 154 116 162 126 C150 122 146 112 150 104 C140 112 146 124 138 132',
      role: 'accent',
    },
    { d: 'M38 106 L14 108 L2 122 L22 118 L8 134 L34 120' },
    {
      d: 'M70 124 l-4 18 l-6 4 M66 142 l4 4 M88 126 l-2 18 l-6 4 M84 144 l4 4',
      role: 'soft',
    },
    {
      d: 'M58 118 l6 -8 M72 122 l6 -8 M86 122 l6 -8 M100 120 l6 -8',
      role: 'ambient',
    },
    shadow(80, 182, 46),
  ],
  // Holy sitting side on, with no eye or nose drawn, his ear hanging and his
  // collar as the accent: the huge dog waits at Ohm's side in the ruins (173).
  // His back is hatched.
  'holy': [
    {
      d: 'M63.9 111.3 C57 134.3 59.3 155 66.2 171.1 H84.6 M82.3 134.3 C84.6 150.4 84.6 161.9 91.5 171.1 H107.6 C126 168.8 137.5 148.1 132.9 122.8 C128.3 97.5 107.6 86 89.2 88.3 C80 90.6 73.1 95.2 70.8 99.8',
    },
    {
      d: 'M68.5 102.1 C50.1 102.1 36.3 90.6 36.3 72.2 C36.3 51.5 54.7 40 73.1 44.6 C89.2 49.2 96.1 65.3 91.5 79.1',
    },
    {
      d: 'M38.6 67.6 C27.1 67.6 13.3 72.2 13.3 83.7 C13.3 92.9 24.8 95.2 38.6 90.6',
    },
    {
      d: 'M75.4 44.6 C89.2 51.5 91.5 72.2 86.9 90.6 C82.3 99.8 73.1 97.5 73.1 86 C73.1 72.2 70.8 56.1 75.4 44.6 Z',
      role: 'soft',
    },
    {
      d: 'M63.9 106.7 C73.1 115.9 86.9 113.6 93.8 102.1 M63.9 115.9 C75.4 125.1 89.2 120.5 96.1 109',
      role: 'accent',
    },
    { d: 'M105.3 122.8 C116.8 129.7 121.4 148.1 114.5 166.5', role: 'soft' },
    { d: 'M132.9 157.3 C144.4 159.6 149 168.8 142.1 178' },
    {
      d: 'M116.8 97.5 l9.2 9.2 M123.7 92.9 l9.2 13.8 M130.6 106.7 l4.6 6.9',
      role: 'ambient',
    },
    shadow(84, 184, 52),
  ],
  // The chief's staff, its carved tip seen edge-on, hung with white fur and
  // feathers, standing beside the Poneglyph he told the children their people
  // died defending (181). The stone's far side is hatched; its inscription is
  // soft rows, no letters.
  'shandia-chief': [
    { d: 'M52 186 V40 M58 186 V40' },
    { d: 'M48 40 C46 26 50 14 55 10 C60 14 64 26 62 40 Z' },
    {
      d: 'M44 42 C40 54 44 64 50 66 C52 74 60 74 62 66 C70 64 72 54 68 42 Z',
      role: 'soft',
    },
    {
      d: 'M46 50 q4 4 8 0 q4 4 8 0 q4 4 6 0 M48 58 q4 4 8 0 q4 4 8 0',
      role: 'soft',
    },
    {
      d: 'M48 66 C40 78 36 92 38 104 C44 94 46 84 50 74 M62 66 C70 78 74 90 72 102 C66 92 64 82 60 72 M55 70 C54 84 56 96 54 110 C50 98 50 84 52 70',
      role: 'accent',
    },
    { d: 'M42 92 l4 -6 M68 90 l-4 -6 M53 96 l2 -6', role: 'soft' },
    {
      d: 'M86 104 L104 92 H152 V170 L134 182 H86 Z M86 104 H134 V182 M134 104 L152 92',
    },
    {
      d: 'M138 112 l10 -8 M138 126 l10 -8 M138 140 l10 -8 M138 154 l10 -8 M138 168 l10 -8',
      role: 'ambient',
    },
    {
      d: 'M94 118 q6 -4 12 0 t12 0 t12 0 M94 132 q6 -4 12 0 t12 0 t12 0 M94 146 q6 -4 12 0 t12 0 t12 0 M94 160 q6 -4 12 0 t12 0',
      role: 'soft',
    },
    shadow(96, 190, 64),
  ],
  // His white cap with its upside-down U marks as the accent, and the rock he
  // scrapes his arm with in the rain, trying to get the tree fever's stains off
  // (187). The cap's far side is hatched.
  'seto': [
    { d: 'M32 122 C28 82 52 60 82 60 C112 60 134 82 130 122' },
    { d: 'M28 122 C28 112 132 112 134 122 V138 C134 146 28 146 28 138 Z' },
    {
      d: 'M44 136 v-10 a5 5 0 0 1 10 0 v10 M64 140 v-10 a5 5 0 0 1 10 0 v10 M86 140 v-10 a5 5 0 0 1 10 0 v10 M108 136 v-10 a5 5 0 0 1 10 0 v10',
      role: 'accent',
    },
    {
      d: 'M110 74 l-6 8 M120 86 l-8 10 M126 100 l-8 10 M130 112 l-6 6',
      role: 'ambient',
    },
    { d: 'M48 80 C62 70 82 68 98 72', role: 'soft' },
    { d: 'M106 182 L112 164 L130 156 L148 166 L144 182 Z' },
    { d: 'M112 164 L126 172 L144 182 M126 172 L130 156', role: 'soft' },
    {
      d: 'M20 30 l-4 12 M48 18 l-4 12 M84 26 l-4 12 M118 16 l-4 12 M146 32 l-4 12 M30 156 l-4 12',
      role: 'ambient',
      dashed: true,
    },
    shadow(80, 186, 56),
  ],
  // The sacrificial altar standing in the sea, a stone slab on a wider step,
  // the ropes she was tied down with lying loose across it as the accent:
  // Noland climbs up and frees her (187). The far faces are hatched.
  'mousse': [
    { d: 'M40 98 L58 88 H130 L112 98 Z' },
    { d: 'M40 98 V120 H112 V98 M112 120 L130 110 V88' },
    { d: 'M114 106 l12 -8 M114 116 l12 -8', role: 'ambient' },
    {
      d: 'M18 120 H140 L152 112 M18 120 V146 H140 V120 M140 146 L152 138 V112 M18 120 L34 112 H40 M130 112 H152',
    },
    { d: 'M142 128 l8 -6 M142 140 l8 -6', role: 'ambient' },
    { d: 'M18 132 H140', role: 'soft' },
    { d: 'M58 92 C64 98 60 106 54 112 C50 118 52 124 58 128', role: 'accent' },
    {
      d: 'M98 90 C106 94 112 102 110 112 C108 120 104 124 98 128',
      role: 'accent',
    },
    { d: 'M72 94 C80 88 88 96 94 90', role: 'accent' },
    { d: 'M2 152 q8 -6 18 -2 M136 152 q10 -6 24 -2', role: 'ambient' },
    ...SEA.slice(1),
  ],
  // Nola side on with no eye drawn, rising out of her own coils, the dark
  // stripes along her back as the accent and the fringe of hair down her sides
  // in soft: the giant snake of Upper Yard (189).
  'nola': [
    {
      d: 'M8 170 C20 186 60 188 92 176 C120 166 136 150 132 132 C128 112 104 108 92 118 C82 126 88 140 100 140',
    },
    {
      d: 'M20 160 C34 172 64 172 90 162 C112 154 122 142 120 132 C118 122 106 120 100 126',
    },
    { d: 'M8 170 C6 166 10 160 20 160' },
    {
      d: 'M100 140 C112 140 118 128 112 116 C104 98 82 88 72 70 C64 56 70 40 84 34 C96 30 108 36 112 44',
    },
    {
      d: 'M100 126 C100 118 94 110 84 104 C66 94 54 80 56 62 C58 44 70 30 86 26 C104 22 120 30 126 42',
    },
    {
      d: 'M126 42 C136 38 148 40 152 46 C154 52 148 56 140 56 L116 50 L112 44',
    },
    {
      d: 'M66 46 l10 6 M58 64 l12 2 M62 82 l12 -2 M80 98 l10 -6 M98 112 l10 -8 M112 136 l8 -8 M92 162 l4 -10 M60 172 l2 -10 M34 168 l-2 -10',
      role: 'accent',
    },
    {
      d: 'M50 64 l-8 0 M52 82 l-8 4 M64 98 l-6 6 M84 112 l-4 8 M134 132 l8 0 M132 146 l8 4',
      role: 'soft',
    },
    {
      d: 'M152 48 C158 44 162 46 166 40 M148 56 C154 60 158 66 164 66',
      role: 'soft',
    },
    shadow(76, 192, 66),
  ],
} satisfies Drawings

/**
 * Teach's knotted bandana and the hatched shade under the brim, kept under
 * both his tricornes (16 lower under the bigger one), so the hat is the one
 * thing that changes at 917.
 */
const TEACH_BANDANA: Stroke[] = [
  { d: 'M30 134 Q80 148 130 134', role: 'accent' },
  { d: 'M34 142 Q80 157 126 142', role: 'accent' },
  {
    d: `${circle(134, 139, 4)} M137 142 q10 4 12 16 M138 137 q12 -2 16 8`,
    role: 'accent',
  },
  {
    d: 'M94 133 l-5 9 M104 133 l-5 9 M114 131 l-5 9 M124 128 l-5 9',
    role: 'ambient',
  },
]

/** Teach's bandana, set 16 lower under the bigger tricorne. */
function underTheBiggerHat(strokes: Stroke[]): Stroke[] {
  const lower = 'translate(0 16)'

  return strokes.map((stroke) => ({ ...stroke, transform: lower }))
}

/** Doflamingo's glasses, fallen to the ground and tipped onto one lens. */
const FALLEN = 'translate(0 40) rotate(-7 80 115)'

/** Doflamingo's glasses, fallen to the ground under the cut strings. */
function fallenOff(strokes: Stroke[]): Stroke[] {
  return strokes.map((stroke) => ({ ...stroke, transform: FALLEN }))
}

/** Sengoku's cap, taken off and set down on the ground beside the goat. */
function setDown(strokes: Stroke[]): Stroke[] {
  const down = 'translate(0 44)'

  return strokes.map((stroke) => ({ ...stroke, transform: down }))
}

/** Kuma's Bible, smaller, stood on the same ground as the steel plate. */
function besideThePlate(strokes: Stroke[]): Stroke[] {
  const beside = 'translate(92 89) scale(0.5)'

  return strokes.map((stroke) => ({ ...stroke, transform: beside }))
}

/** The records of this stretch drawn again, from the episode the story changes them. */
export const skypieaRedrawn: Redrawings = {
  // A tricorne over a knotted bandana: the hat he wears from the Warlords'
  // table on (ch. 524, ep. 421), and never at Mock Town. The shade under the
  // brim and down the crown's far side is hatched, never filled. After the
  // timeskip, the bigger plumed one.
  'marshall-d-teach': [
    {
      episode: 421,
      value: [
        { d: 'M52 110 C54 64 106 64 108 110' },
        {
          d: 'M10 124 C6 104 14 84 30 74 C38 72 42 76 42 82 C44 94 48 104 52 110',
        },
        {
          d: 'M150 124 C154 104 146 84 130 74 C122 72 118 76 118 82 C116 94 112 104 108 110',
        },
        { d: 'M52 110 Q80 118 108 110', role: 'soft' },
        { d: 'M10 124 C30 132 56 134 80 126 C104 134 130 132 150 124' },
        ...TEACH_BANDANA,
        {
          d: 'M98 82 l-5 8 M103 90 l-5 8 M106 99 l-4 6 M136 96 l-5 8 M141 106 l-5 8',
          role: 'ambient',
        },
        shadow(80, 178, 50),
      ],
    },
    // The bigger tricorne of the two years, two plumes standing out of a
    // flower at its side, over the same bandana: first seen clearly on
    // Hachinosu at 917 (ch. 925). The Jolly Roger on its front is left off;
    // the plumes' dark tips are hatched. The bandana is kept from 421 on
    // purpose, though the wiki has it yellow with red dots by now.
    {
      episode: 917,
      chapter: 925,
      value: [
        { d: 'M50 128 C50 62 108 62 108 128' },
        {
          d: 'M8 140 C4 118 12 96 28 84 C36 80 42 84 42 90 C44 104 46 116 50 128',
        },
        {
          d: 'M152 140 C156 118 148 96 132 84 C124 80 118 84 118 90 C116 104 112 116 108 128',
        },
        { d: 'M50 128 Q79 136 108 128', role: 'soft' },
        { d: 'M8 140 C30 148 56 150 80 142 C104 150 130 148 152 140' },
        ...underTheBiggerHat(TEACH_BANDANA),
        {
          d: 'M112 100 C108 80 112 62 124 48 C134 38 144 32 154 30 C148 42 138 52 130 60 C122 70 118 84 118 100',
        },
        {
          d: 'M108 98 C102 74 104 50 116 30 C120 22 126 16 134 12 C132 26 126 36 122 46 C116 60 114 80 114 98',
        },
        {
          d: 'M115 96 C116 76 124 60 140 44 M111 94 C110 70 116 46 128 24',
          role: 'soft',
        },
        {
          d: `${circle(113, 104, 3)} ${circle(113, 97, 4)} ${circle(119.7, 101.8, 4)} ${circle(117.1, 109.7, 4)} ${circle(108.9, 109.7, 4)} ${circle(106.3, 101.8, 4)}`,
        },
        {
          d: 'M140 48 l5 5 M145 42 l4 5 M150 36 l3 4 M124 26 l6 3 M127 20 l5 3 M130 15 l4 2',
          role: 'ambient',
        },
        {
          d: 'M94 84 l-5 8 M100 92 l-4 7 M138 98 l-5 8 M143 108 l-5 8',
          role: 'ambient',
        },
        shadow(80, 186, 50),
      ],
    },
  ],
  // The bisento planted upright in a mound of earth, the bottle at its
  // foot: his naginata stands over his grave on a New World island, where
  // Shanks and his crew bury him at 505 (ch. 590). The mound's far side is
  // hatched, never filled.
  'edward-newgate': [
    {
      episode: 505,
      chapter: 590,
      value: [
        { d: 'M80 164 V38' },
        {
          d: 'M80 38 C100 32 110 18 104 2 C100 18 92 26 80 28z',
          role: 'accent',
        },
        { d: 'M72 44 h16 M74 50 h12' },
        {
          d: 'M76 76 l8 -4 M76 94 l8 -4 M76 112 l8 -4 M76 130 l8 -4',
          role: 'ambient',
        },
        { d: 'M44 180 Q80 148 112 180' },
        {
          d: 'M52 175 l-4 5 M59 170 l-6 9 M66 167 l-6 11 M73 165 l-6 12',
          role: 'ambient',
        },
        { d: 'M116 180 V152 q0 -6 4 -8 V132 h10 V144 q4 2 4 8 V180z' },
        shadow(84, 184, 52),
      ],
    },
  ],

  // The strings cut short under the bar, and the same glasses fallen beneath
  // them with both lenses cracked: Luffy's King Kong Gun shatters them and
  // they fall away from him at 733 (ch. 790).
  'donquixote-doflamingo': [
    {
      episode: 733,
      chapter: 790,
      value: [
        ...DOFLAMINGO_BAR,
        { d: 'M50 41 L44 60 M110 33 L115 52 M62 40 L67 59 M98 35 L97 54' },
        {
          d: 'M44 60 l-5 2 M44 60 l0 6 M44 60 l4 4 M115 52 l5 2 M115 52 l0 6 M115 52 l-4 4 M67 59 l-4 4 M67 59 l4 3 M97 54 l-4 4 M97 54 l4 3',
          role: 'soft',
        },
        ...fallenOff(DOFLAMINGO_GLASSES),
        {
          d: 'M40 100 l6 10 l-5 7 l8 12 M46 110 l13 2 M41 117 l-12 4 M124 118 l-5 -10 l6 -6 l-6 -12 M119 108 l-13 3 M125 102 l7 3',
          role: 'soft',
          transform: FALLEN,
        },
        {
          d: dots([
            [150, 168],
            [144, 176],
            [154, 178],
            [12, 176],
          ]),
          role: 'ambient',
        },
        shadow(80, 182, 64),
      ],
    },
  ],

  // The same cap set down on the ground, the goat beside it: he steps down
  // as fleet admiral before Kong at 511 (ch. 594), and after the two years he
  // goes bareheaded. The crown's far side is hatched, never filled.
  'sengoku': [
    {
      episode: 511,
      chapter: 594,
      value: [...setDown(SENGOKU_CAP), ...SENGOKU_GOAT],
    },
  ],

  // The paw pressed into a riveted steel plate standing on the ground, the
  // Bible stood beside it on the same ground: Vegapunk has finished him, a
  // weapon with his past erased, as Doflamingo tells Ivankov at Marineford at
  // 469 (ch. 560). The plate's edge is hatched, never filled; the small
  // book's page block is left open so the tile stays clear.
  'bartholomew-kuma': [
    {
      episode: 469,
      chapter: 560,
      value: [
        { d: 'M14 70 H100 V166 H14z' },
        { d: 'M100 70 l6 6 V172 H20 l-6 -6' },
        {
          d: 'M101 92 l4 4 M101 112 l4 4 M101 132 l4 4 M101 152 l4 4',
          role: 'ambient',
        },
        {
          d: `${circle(22, 78, 3)} ${circle(92, 78, 3)} ${circle(22, 158, 3)} ${circle(92, 158, 3)}`,
        },
        { d: ellipse(57, 134, 20, 15), role: 'accent' },
        {
          d: `${circle(35, 110, 7)} ${circle(49, 100, 7)} ${circle(67, 100, 7)} ${circle(81, 110, 7)}`,
          role: 'accent',
        },
        ...besideThePlate(KUMA_BIBLE_BODY),
        shadow(82, 180, 72),
      ],
    },
  ],
}
