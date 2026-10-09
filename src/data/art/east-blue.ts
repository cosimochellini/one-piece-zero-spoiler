import {
  BLADE,
  circle,
  dot,
  dots,
  ellipse,
  house,
  SEA,
  shadow,
  sheath,
  star,
} from '~/lib/svg/primitives'

import type { Drawings, Redrawings, Stroke } from './stroke'

/**
 * Sanji's chef's knife, point up and to the right: the blade with its spine
 * seen edge on and the bevel along its edge, the bolster, and the handle with
 * three rivets and its underside hatched. Every drawing of his holds it, so
 * the only thing that changes is what is behind it and the flame.
 */
const SANJI_KNIFE: Stroke[] = [
  {
    d: 'M58.5 129.5 L114.3 79.4 Q123.2 71.3 129.6 69.5 C129.4 87.2 121.9 108.8 105.6 123.5 L76.6 149.6 L72.6 145.1',
  },
  { d: 'M58.5 129.5 L56.2 126.9 L111.9 76.8 Q122.3 67.4 129.6 69.5' },
  {
    d: 'M74.1 142.4 L100.9 118.3 C114.3 106.3 122.1 91.1 125.8 75.7',
    role: 'soft',
  },
  { d: 'M53.3 134.2 L58.5 129.5 L72.6 145.1 L67.4 149.8 Z' },
  {
    d: 'M56 137.2 L30 160.6 C25.5 164.6 26 168.2 28.4 170.8 C30.7 173.4 34.2 174.3 38.7 170.3 L64.7 146.9',
  },
  {
    d: `${circle(37.3, 162.8, 1.6)} ${circle(45.5, 155.4, 1.6)} ${circle(53.7, 148, 1.6)}`,
    role: 'soft',
  },
  {
    d: 'M36.5 172.3 L36.7 168 M45 164.6 L45.2 160.4 M53.2 157.2 L53.4 153 M61 150.2 L61.2 146',
    role: 'ambient',
  },
]

/**
 * The flame off the point of Sanji's knife: Diable Jambe, lit from 298 and
 * burning until Onigashima.
 */
const SANJI_FLAME: Stroke[] = [
  {
    d: 'M114 66 c-14 -16 2 -30 6 -44 c2 12 12 16 12 30 c0 10 -8 16 -18 14z',
    role: 'accent',
  },
  { d: 'M118 58 c-4 -8 2 -12 4 -18 c2 8 6 10 4 18', role: 'accent' },
]

/** The coastline and island drawn on Nami's chart. */
const NAMI_COAST =
  'M22 140 C36 128 48 144 64 132 C80 120 92 136 112 124 C122 118 130 122 136 128 M104 150 q-2 -7 6 -9 q6 -4 12 1 q6 4 2 9 q-10 4 -20 -1 Z'

/**
 * Nami's stolen chart, half unrolled towards the reader: the tied roll with
 * the paper spiralling at its right end, the string trailing across the
 * sheet, the sheet's edges and curling front. The small copy at 878 is this
 * alone.
 */
const NAMI_CHART_BODY: Stroke[] = [
  { d: 'M28 84 H130 M28 104 H130' },
  { d: `${ellipse(28, 94, 5, 10)} ${ellipse(130, 94, 5, 10)}` },
  {
    d: 'M130.5 94 a1 2 0 1 0 -1.5 -1 a2.4 4.4 0 1 1 -1 4.6 a3.6 6.8 0 1 0 1.6 -9.6',
    role: 'soft',
  },
  { d: 'M74 84 Q71 94 74 104 M80 84 Q77 94 80 104', role: 'soft' },
  { d: 'M77 104 C70 116 86 122 80 138', role: 'soft' },
  { d: 'M30 104 L14 158 M128 104 L146 158' },
  { d: 'M14 158 Q12 166 20 166 H140 Q148 166 146 158', role: 'soft' },
]

/** The chart's finer lines: the roll's hatched underside, two meridians. */
const NAMI_CHART_DETAIL: Stroke[] = [
  {
    d: 'M40 101 l2 3 M54 101 l2 3 M94 101 l2 3 M108 101 l2 3 M122 101 l2 3',
    role: 'ambient',
  },
  { d: 'M60 104 L56 158 M98 104 L102 158', role: 'soft', dashed: true },
]

/**
 * Chew's vest, open down the front: two horizontally striped panels, the dark
 * trim down the V and round the armholes, and the inside of the back hatched
 * where the V shows it. Both his drawings hold it, so the only thing that
 * changes is what lies beside it.
 */
const CHEW_VEST: Stroke[] = [
  { d: 'M56 32 L42 36 C44 58 40 70 30 76 L31 150 L68 152 L68 98 Z' },
  { d: 'M84 32 L98 36 C96 58 100 70 110 76 L109 150 L72 152 L72 98 Z' },
  { d: 'M56 32 Q70 40 84 32' },
  {
    d: 'M59.8 46 L80.2 40 M61.6 56 L78.4 50 M63.5 66 L76.5 60 M65.3 76 L74.7 70 M67.1 86 L72.9 80',
    role: 'ambient',
  },
  {
    d: 'M50 34 L62 98 V151 M90 34 L78 98 V151 M47 36 C49 58 46 72 35 79 M93 36 C91 58 94 72 105 79',
    role: 'soft',
  },
  {
    d: 'M47.5 64 Q51.5 66 55.6 64 M84.4 64 Q88.5 66 92.5 64 M40 76 Q49 79 57.9 76 M82.1 76 Q91 79 100 76 M33 88 Q46.6 91 60.1 88 M79.9 88 Q93.4 91 107 88 M33 100 Q47.5 103 62 100 M78 100 Q92.5 103 107 100 M33 112 Q47.5 115 62 112 M78 112 Q92.5 115 107 112 M33 124 Q47.5 127 62 124 M78 124 Q92.5 127 107 124 M33 136 Q47.5 139 62 136 M78 136 Q92.5 139 107 136',
    role: 'soft',
  },
]

/** His string of beads, laid in a loop beside the vest. */
const CHEW_BEADS = (
  [
    [148, 170],
    [145.6, 173.5],
    [139, 176.3],
    [129.3, 177.8],
    [118.7, 177.8],
    [109, 176.3],
    [102.4, 173.5],
    [100, 170],
    [102.4, 166.5],
    [109, 163.7],
    [118.7, 162.2],
    [129.3, 162.2],
    [139, 163.7],
    [145.6, 166.5],
  ] as const
)
  .map(([x, y]) => circle(x, y, 2.2))
  .join(' ')

/**
 * Koby's wooden bucket: the body, the rim seen round, the water, the far
 * wall hatched, two staves and two hoops, and the handle. The same bucket
 * stands beside the mop at 1 and under the bandanna at 314.
 */
const KOBY_BUCKET: Stroke[] = [
  { d: 'M88 132 L93 172 A21 5.5 0 0 0 135 172 L140 132' },
  { d: ellipse(114, 132, 26, 7) },
  { d: 'M92 138 A22 5 0 0 1 136 138', role: 'soft' },
  {
    d: 'M96.6 128.6 l2 5 M105 126.6 l2 5.6 M114 126 l2 6 M123 126.6 l2 5.6 M131.4 128.6 l2 5',
    role: 'ambient',
  },
  { d: 'M105 138.8 L107 177 M123 138.8 L121 177', role: 'soft' },
  {
    d: 'M89.4 143 A24.6 6.6 0 0 0 138.6 143 M91.6 162 A22.4 6 0 0 0 136.4 162',
  },
  { d: 'M88 132 C88 112 140 112 140 132' },
]

/**
 * One of Rika's rice balls: the front in her colour, its side, the shade on
 * the side, the strip of seaweed round its base. The second is the same,
 * smaller, beside it (`SECOND_RICE_BALL`).
 */
const RICE_BALL: Stroke[] = [
  {
    d: 'M30 150 Q22 150 26 141 L52 98 Q58 88 64 98 L90 141 Q94 150 86 150 Z',
    role: 'accent',
  },
  { d: 'M61 93 Q67 86 74 94 L100 136 Q104 145 96 147 L86 150' },
  { d: 'M78 112 l6 -3 M84 122 l6 -3 M90 132 l6 -3', role: 'ambient' },
  {
    d: 'M42 150 V124 H74 V150 M74 124 L80.6 121 L91.4 138.6 M93.6 147.8 L95.6 147.2',
  },
]
const SECOND_RICE_BALL = 'translate(86 42) scale(0.72)'

/**
 * Luffy's straw hat in its parts, so a costume can sit on, over or under it
 * while the hat stays the same hat: the brim with its rim and inner ring, the
 * crown with its rings of straw and far side hatched, and the band.
 */
const LUFFY_BRIM: Stroke[] = [
  { d: 'M47 104.9 A66 22 0 1 0 113 104.9' },
  { d: 'M14 124 V129 A66 22 0 0 0 146 129 V124', role: 'soft' },
  { d: 'M34 124 A46 15 0 0 0 126 124', role: 'soft' },
]
const LUFFY_CROWN: Stroke[] = [
  { d: 'M47 108 C44 58 116 58 113 108' },
  { d: 'M56.3 79.7 Q80 88 103.7 79.7 M69.8 72 Q80 76 90.2 72', role: 'soft' },
  {
    d: 'M102.6 79.4 l-3.4 5 M106.8 84 l-3.6 5.4 M109.8 89.4 l-3.4 5',
    role: 'ambient',
  },
]
const LUFFY_BAND: Stroke = {
  d: 'M47 108 Q80 122 113 108 L113.4 95 Q80 109 46.6 95 Z',
  role: 'accent',
}

/** The band's lower edge, all of it that shows under a hat worn over it. */
const LUFFY_BAND_EDGE: Stroke = {
  d: 'M47 108 Q80 122 113 108 L113.2 102 Q80 116 46.8 102 Z',
  role: 'accent',
}
const LUFFY_HAT_ALONE: Stroke[] = [...LUFFY_BRIM, ...LUFFY_CROWN, LUFFY_BAND]
const LUFFY_HAT: Stroke[] = [...LUFFY_HAT_ALONE, shadow(80, 172, 56)]

/** The drawings of the records filed in the east blue stretch of the route. */
/**
 * Buggy's cannon front on, the cheeks of its carriage and a wheel each side,
 * the barrel's far flank, and the shadow under all of it, with the far side
 * of the cannonball set down at its mouth. The same under the crown from 1080.
 */
const BUGGY_CANNON: Stroke[] = [
  { d: 'M130 62 A50 50 0 0 1 106.9 104.2 M47.2 99.7 A50 50 0 1 1 130 62' },
  {
    d: 'M38.7 50.1 A43 43 0 0 1 54.7 27.2 M96.1 22.1 A43 43 0 0 1 112.9 34.4',
    role: 'soft',
  },
  { d: 'M66 12.4 A48 48 0 0 1 120.2 91.3' },
  {
    d: 'M124.5 37 l11.7 11.7 M129.2 48 l7.3 7.3 M131.1 59 l4.4 4.4',
    role: 'ambient',
  },
  { d: 'M43.3 96 L34 150 M116.7 96 L126 150' },
  {
    d: 'M27 128 A5 21 0 1 1 17 128 A5 21 0 1 1 27 128 M143 128 A5 21 0 1 1 133 128 A5 21 0 1 1 143 128',
  },
  { d: 'M27 128 L37.5 128 M121.5 128 L133 128', role: 'soft' },
  shadow(80, 160, 66),
  {
    d: 'M108.4 120.8 l-6.4 -6.4 M106.1 130.2 l-6.4 -6.4 M101.3 138.5 l-6.4 -6.4 M94.2 144.9 l-6.4 -6.4 M85.5 149.1 l-6.4 -6.4',
    role: 'ambient',
  },
]

/** Jango's heart-shaped lens, drawn once and set down twice. */
const HEART =
  'M0 11 C-13 3 -16 -6 -11 -10.5 C-6.5 -14 -1.5 -11.5 0 -6.5 C1.5 -11.5 6.5 -14 11 -10.5 C16 -6 13 3 0 11 Z'

/**
 * A toy wooden sword, tip up with the guard at y -40 and the grip ending at
 * the origin: the blade's thickness on one side, hatched, the guard as a
 * block, the grip and the grain. The blade itself is drawn per sword.
 */
const WOODEN_BLADE = 'M-8 -40 V-76 Q-8 -88 0 -92 Q8 -88 8 -76 V-40'
const WOODEN_SWORD: Stroke[] = [
  { d: 'M8 -42 L11 -44 V-77 Q11 -86 4 -90.5' },
  { d: 'M10 -50 l-2 -3 M10 -60 l-2 -3 M10 -70 l-2 -3', role: 'ambient' },
  { d: 'M-16 -40 H16 V-33 H-16 Z M16 -40 L19 -42 V-35 L16 -33' },
  { d: 'M-4.5 -33 V-6 Q0 -2 4.5 -6 V-33' },
  { d: 'M-2 -46 C-4 -58 1 -68 -2 -82 M3 -48 C2 -56 5 -64 2 -74', role: 'soft' },
]
const SWORD_RAISED = 'translate(62 136) rotate(32) scale(1.2)'
const SWORD_LAID = 'translate(24 162) rotate(84)'

export const eastBlueArt = {
  // One island of the weakest sea seen from the water: the ridge and its
  // peak, the cliff's jagged rim, the strata down its face and its far side
  // hatched; in front, a dinghy setting out under one sail. Luffy rows away in
  // a dinghy in chapter 1 and leaves with Koby in one in episode 1.
  'east-blue': [
    {
      d: 'M44 118 C52 104 60 100 68 102 L80 84 C86 78 92 80 98 88 L108 96 C116 94 124 100 134 114',
    },
    { d: 'M44 118 L56 124 L76 120 L94 126 L114 120 L134 114' },
    { d: 'M44 118 L42 150 M134 114 L138 150 M42 150 H138' },
    { d: 'M56 124 L55 150 M76 120 L77 150 M94 126 L94 150', role: 'soft' },
    {
      d: 'M116 130 l18 -12 M116 140 l20 -13 M118 149 l19 -12.6',
      role: 'ambient',
    },
    { d: 'M80 84 L84 98 M98 88 L94 100', role: 'soft' },
    { d: 'M2 152 H48 L42 164 Q26 168 8 164 Z' },
    { d: 'M24 152 V108' },
    { d: 'M26 110 Q44 126 44 148 H26 Z', role: 'accent' },
    ...SEA.slice(1),
  ],

  // A barrel adrift, its lid shut, two hoops round the staves.
  'romance-dawn': [
    { d: 'M54 84 Q46 118 54 150 H106 Q114 118 106 84 Z' },
    { d: ellipse(80, 84, 26, 6) },
    { d: 'M50 104 Q80 110 110 104 M50 132 Q80 138 110 132', role: 'accent' },
    { d: 'M68 90 V148 M92 90 V148', role: 'soft' },
    ...SEA,
  ],

  // The straw hat in 3/4: the brim with the thickness of its rim along the
  // front, the domed crown, the band in the captain's red, rings of straw on
  // the brim and the crown, and the crown's far side hatched. On his head from
  // episode 1, and drawn again whenever he puts something on, over or under
  // it, in `eastBlueRedrawn`.
  'monkey-d-luffy': LUFFY_HAT,

  // A mop leaning by a wooden bucket: the strands of the mop head in pink,
  // the bucket's rim seen round with the water inside and its far wall
  // hatched, two staves and two hoops. The chore boy cleans Alvida's ship in
  // episode 1. The mop gives way to his bandanna from 314, in `eastBlueRedrawn`.
  'koby': [
    { d: 'M106 22 L67.4 119.6 M109.6 23.4 L71 121' },
    { d: 'M60 116 L76 123.6 L73 130.6 L57 123 Z' },
    {
      d: 'M59 125 C52 142 50 158 44 172 M63 127 C59 144 60 160 56 174 M67 129 C66 146 70 160 68 174 M71 130 C73 146 80 158 82 170',
      role: 'accent',
    },
    ...KOBY_BUCKET,
    shadow(92, 182, 52),
  ],
  // Her iron mace on its side: the long grip with the ring at its end, the
  // head swelling into a studded barrel with its collar and end seen round,
  // spikes along both edges and off the end, the studs facing the reader as
  // small rings, the underside hatched. She swings it in episode 1.
  'alvida': [
    { d: 'M20.4 47.4 L67.8 79.3 M15.1 55.1 L62.6 87.1' },
    {
      d: 'M70.4 75.5 L141.8 111 C151.2 117.4 152 129.3 146.2 137.9 C140.4 146.5 129.1 150.2 119.7 143.8 L59.9 91 Q61.7 80.9 70.4 75.5',
    },
    {
      d: 'M70.4 75.5 Q70.4 86.7 59.9 91 M141.8 111 Q137.6 132.1 119.7 143.8',
      role: 'soft',
    },
    {
      d: 'M85.4 82.9 L95 76.2 L92.9 86.7 M104.2 92.3 L113.8 85.6 L111.7 96.1 M123 101.7 L132.6 94.9 L130.5 105.4 M147.7 133.9 L154.8 143.7 L143 140.8',
      role: 'accent',
    },
    {
      d: 'M72.5 102.1 L69.8 113.5 L78.8 107.7 M88.2 116 L85.6 127.4 L94.5 121.6 M103.9 129.9 L101.3 141.3 L110.2 135.5',
      role: 'accent',
    },
    {
      d: 'M93.4 97.2 C92.4 98.6 90.9 99.3 89.9 98.6 C89 98 89 96.3 89.9 94.9 C90.9 93.5 92.4 92.8 93.4 93.5 C94.3 94.1 94.3 95.8 93.4 97.2 Z M103.1 116.3 C102.1 117.7 100.6 118.4 99.6 117.7 C98.7 117.1 98.7 115.4 99.6 114 C100.6 112.6 102.1 111.9 103.1 112.6 C104 113.2 104 114.9 103.1 116.3 Z M125.6 116.4 C124.6 117.9 123.1 118.5 122.1 117.9 C121.2 117.2 121.2 115.5 122.1 114.1 C123.1 112.7 124.6 112 125.6 112.7 C126.5 113.3 126.5 115 125.6 116.4 Z M126.1 134.3 C125.1 135.7 123.5 136.4 122.6 135.7 C121.6 135.1 121.6 133.4 122.6 132 C123.6 130.6 125.1 129.9 126.1 130.6 C127 131.2 127 132.9 126.1 134.3 Z',
      role: 'soft',
    },
    {
      d: 'M70.2 98 L76.9 95.6 M79.7 106.4 L86.3 104 M89.1 114.7 L95.8 112.3 M98.5 123 L105.2 120.6 M108 131.4 L114.6 129 M117.4 139.7 L124 137.3',
      role: 'ambient',
    },
    {
      d: 'M14.3 48.9 C11.6 53 7.8 55.2 5.9 53.9 C4 52.6 4.7 48.3 7.4 44.3 C10.1 40.2 13.9 38 15.8 39.3 C17.7 40.5 17 44.9 14.3 48.9 Z M12.4 47.6 C11 49.8 9.1 51 8.2 50.5 C7.4 49.9 7.9 47.7 9.3 45.5 C10.8 43.4 12.6 42.1 13.5 42.7 C14.3 43.3 13.9 45.5 12.4 47.6 Z M14.3 48.9 L17.8 51.2',
    },
    shadow(104, 178, 44),
  ],
  // The deck of the execution platform in 3/4, its planks and its far side
  // hatched, and the executioners' two blades crossed above it, their shafts in
  // red. He dies on it at the start of episode 1 and chapter 1.
  'gold-roger': [
    {
      d: 'M14 124 H120 L146 104 H40 Z M14 124 V142 H120 V124 M120 142 L146 122 V104',
    },
    {
      d: 'M41 124 L67 104 M67 124 L93 104 M93 124 L119 104 M14 133 H120',
      role: 'soft',
    },
    {
      d: 'M124 134.8 l18 -13.8 M124 128 l18 -13.8 M124 121.2 l18 -13.8',
      role: 'ambient',
    },
    shadow(80, 152, 66),
    { d: 'M10 12 L44 44 M152 22 L116 50', role: 'accent' },
    { d: 'M39.9 48.4 L48.1 39.6 M112.3 45.3 L119.7 54.7' },
    {
      d: 'M42.9 47.4 L86.8 94.5 L100 104 L91.2 89.9 L47.3 42.7 M112.9 48.4 L67.4 94.1 L58 108 L71.3 99.1 L116.8 53.4',
    },
    { d: 'M45.1 45 L89 92.2 M114.8 50.9 L69.4 96.6', role: 'soft' },
  ],
  // The post in the yard of the Shells Town base that he is tied to, seen
  // square in 3/4 with its far face hatched, against the base's wall: rope
  // wound three times round it at the chest and twice lower down, knotted in
  // front with its two ends hanging. No figure, and no swords: the manga
  // shows how many he carries only in chapter 5, so the three swords follow
  // in `eastBlueRedrawn`.
  'roronoa-zoro': [
    {
      d: 'M62 150 V40 H92 V150 M62 40 L74 33 H104 L92 40 M104 33 V143 L92 150',
    },
    {
      d: 'M92 52 l12 -7 M92 60 l12 -7 M92 98 l12 -7 M92 106 l12 -7 M92 114 l12 -7 M92 142 l12 -7',
      role: 'ambient',
    },
    { d: 'M70 46 V58 M88 92 V108 M72 134 V148 M86 132 V146', role: 'soft' },
    {
      d: 'M59 64 Q77 71 95 66 L105 59 M59 71 Q77 78 95 73 L105 66 M59 78 Q77 85 95 80 L105 73',
      role: 'accent',
    },
    {
      d: `${ellipse(76, 86, 4.5, 3.2)} M73 88 C69 97 71 104 66 112 M79 88 Q84 94 82 100`,
      role: 'accent',
    },
    {
      d: 'M59 118 Q77 125 95 120 L105 113 M59 125 Q77 132 95 127 L105 120',
      role: 'accent',
    },
    {
      d: 'M66 112 l-3 3 M66 112 l0 4 M82 100 l3 2 M82 100 l-1 4',
      role: 'soft',
    },
    { d: 'M6 112 H62 M104 112 H154' },
    {
      d: 'M6 126 H62 M104 126 H154 M6 138 H62 M104 138 H154 M22 112 V126 M46 112 V126 M34 126 V138 M58 126 V138 M120 112 V126 M144 112 V126 M110 126 V138 M134 126 V138 M22 138 V150 M46 138 V150 M120 138 V150 M144 138 V150',
      role: 'ambient',
    },
    { d: 'M6 150 H62 M98 150 H154', role: 'ambient' },
  ],

  // A Marine base: a crenellated tower with its pennant, and the post in the
  // yard that a pirate hunter was tied to.
  'shells-town': [
    { d: 'M56 150 V66 H104 V150' },
    { d: 'M52 66 h56 M56 66 v-8 h8 v8 M76 66 v-8 h8 v8 M96 66 v-8 h8 v8' },
    { d: 'M72 84 h16 v10 h-16z M72 106 h16 v10 h-16z' },
    { d: 'M74 150 V132 a6 6 0 0 1 12 0 V150' },
    { d: 'M80 58 V22' },
    { d: 'M80 22 l26 8 l-26 8z', role: 'accent' },
    { d: 'M12 150 V130 H48' },
    { d: 'M130 150 V96 M120 108 h20', role: 'accent' },
    { d: 'M126 118 h8 M126 124 h8' },
    { d: 'M4 150 H156', role: 'ambient' },
    ...SEA.slice(1),
  ],

  // His white lace-up shoe side on, the heel grinding a rice ball into the
  // ground: the toe cap, the laces, the collar seen from above with its inside
  // hatched, the sole and heel in yellow, the rice squeezed out either side
  // with its seaweed and the grains thrown off. He stamps on Rika's rice balls
  // in episode 2. The kukri replace the shoe from 314, in `eastBlueRedrawn`.
  'helmeppo': [
    {
      d: 'M8.5 144.7 C-1.2 131.1 9.6 119.3 36.3 112.5 C53.4 108.5 65 101.6 76 91 M125.2 82 C129.8 95.2 132.1 110 131.6 122.7',
    },
    {
      d: 'M125.2 82 C125.7 85.1 115 89.3 101.4 91.4 C87.7 93.6 76.3 92.9 75.8 89.8 C75.3 86.7 86 82.5 99.6 80.3 C113.2 78.2 124.7 78.9 125.2 82 Z',
    },
    {
      d: 'M83.4 89.9 L86.3 84.3 M93.6 90.2 L96 81.5 M104.8 89 L107.2 80.4 M115.8 86.6 L118.6 80.5',
      role: 'ambient',
    },
    {
      d: 'M8.5 144.7 Q12 150.5 21.9 149 L103.4 136.1 L105.1 147.2 L134.7 142.5 L131.6 122.7',
      role: 'accent',
    },
    { d: 'M16 143.6 L130.8 125.4', role: 'soft' },
    { d: 'M33.9 112.9 Q28.8 128.9 33.2 140.8', role: 'soft' },
    {
      d: 'M51 108.9 L62 114.8 M57.8 104 L68.8 109.9 M64.6 99.2 L75.5 103.8 M49.5 115.5 L71.6 95.5',
      role: 'soft',
    },
    { d: 'M90 156 C86 148 94 143 104 147 M135 142.5 C149 136 159 145 155 156' },
    { d: 'M139 145 l-3 9 M145 143 l-3 11 M151 145 l-2.5 9', role: 'ambient' },
    {
      d: dots([
        [88, 144],
        [84, 151],
        [96, 138],
        [158, 140],
        [150, 132],
        [158, 150],
      ]),
      role: 'soft',
    },
    { d: 'M4 156 H156', role: 'ambient' },
    shadow(76, 170, 56),
  ],
  // His axe-hand: the broad blade in his colour with the thickness of its
  // edge hatched, the spike behind the haft, the rivets, and the steel cuff
  // where his right hand should be, open below with its inside hatched. He
  // carries it from episode 2.
  'morgan': [
    { d: 'M75 30 V116 M85 30 V116 M75 30 Q80 25 85 30' },
    {
      d: 'M85 46 C100 42 116 34 130 22 C146 46 150 84 138 116 C124 102 104 92 85 88',
      role: 'accent',
    },
    { d: 'M130 22 L134 26 C148 50 152 86 141 118 L138 116' },
    {
      d: 'M137 34 l4 -1 M141 48 l4 -1 M143 62 l4 -1 M144 76 l4 -1 M144 90 l4 -1 M142 104 l4 -1',
      role: 'ambient',
    },
    { d: 'M126 30 C138 50 142 80 134 106', role: 'soft' },
    { d: 'M75 48 L58 56 L75 64' },
    {
      d: dots([
        [92, 54],
        [92, 66],
        [92, 78],
      ]),
      role: 'soft',
    },
    { d: 'M68 116 Q80 111 92 116 L98 156 M68 116 L62 156' },
    { d: ellipse(80, 156, 18, 5.5) },
    { d: 'M70 154.6 l4 4 M78 152.6 l6 6 M86 152.8 l5.4 5.4', role: 'ambient' },
    { d: 'M66 128 Q80 133 94 128 M64 142 Q80 147.6 96 142', role: 'soft' },
    {
      d: dots([
        [70, 136],
        [80, 138.2],
        [90, 136],
      ]),
      role: 'soft',
    },
    {
      d: 'M93.6 121 l3 -1.6 M94.8 132 l3 -1.6 M96 143 l3 -1.6',
      role: 'ambient',
    },
    shadow(80, 176, 34),
  ],

  // Her two rice balls in 3/4, each with its strip of seaweed and its side
  // in shade, a few grains fallen beside them. She made them with sugar for the
  // pirate hunter in episode 2.
  'rika': [
    ...RICE_BALL,
    ...RICE_BALL.map((stroke) => ({ ...stroke, transform: SECOND_RICE_BALL })),
    {
      d: dots([
        [30, 160],
        [40, 166],
        [18, 164],
        [110, 168],
        [150, 166],
      ]),
      role: 'soft',
    },
    { d: 'M-4 156 H164', role: 'ambient', dashed: true },
  ],
  // The sword he wore in Foosha, sheathed on the tavern counter, its round
  // guard in red and its wrapped grip towards the reader, the sheath's
  // underside hatched; a tankard of grog with its head of foam at the back. His
  // crew drinks at Makino's bar in episode 4. Gryphon takes the sword's place
  // from 151, in `eastBlueRedrawn`.
  'shanks': [
    { d: 'M2 92 H56 M96 92 H158', role: 'ambient' },
    { d: 'M2 162 H158' },
    { d: 'M2 176 H158', role: 'ambient' },
    { d: 'M60 96 V56 M92 56 V96 M60 96 Q76 102 92 96' },
    { d: ellipse(76, 56, 16, 4.5) },
    { d: 'M60 70 Q76 76 92 70 M60 86 Q76 92 92 86', role: 'soft' },
    { d: 'M60 64 C46 64 44 88 60 90' },
    { d: 'M59 54 q2 -8 9 -6 q4 -6 11 -2 q6 -4 10 2 q4 3 2 7', role: 'soft' },
    shadow(78, 101, 20),
    {
      d: 'M45 135.9 Q95.6 111.7 143.1 95.7 Q152 96.5 147.8 104.6 Q100.1 122.8 49.1 146.1',
    },
    {
      d: 'M59.7 140.2 L60.6 134.5 M76.4 133.5 L77.3 127.7 M93.1 126.7 L94 121 M109.8 120 L110.7 114.2 M126.5 113.3 L127.4 107.5 M141.3 107.3 L142.2 101.5',
      role: 'ambient',
    },
    { d: 'M52.1 137.4 Q97.5 116.3 139.1 101.7', role: 'soft' },
    {
      d: 'M46.6 141.2 C49.3 147.9 50 153.8 48.2 154.6 C46.5 155.3 42.8 150.5 40.1 143.8 C37.4 137.2 36.7 131.2 38.5 130.5 C40.3 129.7 43.9 134.5 46.6 141.2 Z',
      role: 'accent',
    },
    { d: 'M38.4 139.7 L10.4 151.5 Q6.3 157.5 13.4 159 L41.8 148' },
    {
      d: 'M36.3 141.1 L35.6 150 L28.9 144 L28.2 153 L21.5 147 L20.8 156 L14.1 150',
      role: 'soft',
    },
  ],

  // A windmill on a hill, a house beside it, a fence along the road.
  'foosha-village': [
    { d: 'M-4 150 C40 118 100 118 164 150' },
    { d: 'M62 140 L68 88 M92 88 L98 140 M68 88 H92' },
    { d: 'M66 88 Q80 70 94 88' },
    { d: BLADE, role: 'accent' },
    { d: BLADE, role: 'accent', transform: 'rotate(90 80 80)' },
    { d: BLADE, role: 'accent', transform: 'rotate(180 80 80)' },
    { d: BLADE, role: 'accent', transform: 'rotate(270 80 80)' },
    { d: circle(80, 80, 3), role: 'accent' },
    { d: house(110, 28, 126, 110) },
    { d: 'M14 146 V136 M26 148 V138 M38 150 V140 M14 141 L38 145' },
    ...SEA.slice(1),
  ],

  // A green bottle tipped over a tavern mug, pouring: the bottle's base seen
  // round, its blank label and its underside hatched, the stream, and the head
  // of foam rising over the mug's rim. She pours for the Red Hair crew in
  // episode 4.
  'makino': [
    {
      d: 'M153 54.5 L119 82.5 Q113.9 84.1 108.4 82.2 L97.8 91.4 M139 37.5 L105 65.5 Q102.4 70.2 103.3 76 L92.2 84.6',
      role: 'accent',
    },
    {
      d: 'M153 54.5 A11 4.2 50.6 1 0 139 37.5 A11 4.2 50.6 1 0 153 54.5',
      role: 'accent',
    },
    { d: 'M97.8 91.4 A4.4 1.8 50.6 1 0 92.2 84.6 A4.4 1.8 50.6 1 0 97.8 91.4' },
    { d: 'M143.7 62.1 L129.7 45.1 M132.9 71 L118.9 54', role: 'soft' },
    {
      d: 'M146.8 59.6 L142.3 58.1 M140.6 64.7 L136.2 63.2 M134.5 69.8 L130 68.3 M128.3 74.8 L123.8 73.3',
      role: 'ambient',
    },
    { d: 'M95 88 C89 94 72 92 66 100' },
    { d: 'M40 106 L42 152 A20 5.5 0 0 0 82 152 L84 106' },
    { d: ellipse(62, 106, 22, 6) },
    {
      d: 'M40 106 C36 96 46 90 52 95 C56 87 70 87 74 94 C80 90 90 96 84 106',
      role: 'soft',
    },
    { d: 'M40.5 116 C24 116 24 142 41.6 142 M41 122 C33 122 33 136 41.4 136' },
    { d: 'M54 113 V157 M70 113 V157', role: 'soft' },
    { d: 'M-4 160 H164', role: 'ambient', dashed: true },
  ],
  // His flintlock rifle laid down: the barrel in his colour with its muzzle
  // seen round, the lock and the hammer, the grain of the stock and its
  // underside hatched; in front, a cigarette still smoking. He clubs the
  // bandits with the rifle and stubs a cigarette out on one in episode 4.
  'benn-beckman': [
    { d: 'M62 106 L146 88 M63 112 L147 94', role: 'accent' },
    { d: 'M146 88 A3.4 1.6 78 1 1 147 94 A3.4 1.6 78 1 1 146 88' },
    { d: 'M63 112 L64 117 L124 104.2 L123 99', role: 'soft' },
    {
      d: 'M62 106 C48 108 30 111 14 113 Q8 124 16 136 C30 132 46 126 60 122 L64 117',
    },
    {
      d: 'M22 124 C34 121 46 117 56 113.6 M106 103.4 l1.2 5 M118 100.8 l1.2 5',
      role: 'soft',
    },
    {
      d: 'M58 110 L72 107 L73 112 L59 115 Z M60 109 C56 102 60 96 66 98',
      role: 'soft',
    },
    { d: 'M66 120 C66 128 76 128 78 116', role: 'soft' },
    {
      d: 'M20 134 l1.6 -4 M28 131.6 l1.6 -4 M36 129 l1.6 -4 M44 126.4 l1.6 -4 M52 123.6 l1.6 -4',
      role: 'ambient',
    },
    shadow(80, 146, 64),
    { d: 'M98 162 L124 158 M98.6 166 L124.6 162 M98 162 Q96 164 98.6 166' },
    { d: 'M124 158 Q126.6 160 124.6 162', role: 'soft' },
    { d: dot(125.6, 160), role: 'soft' },
    {
      d: 'M128 157 C134 150 126 146 132 138 C136 132 132 128 136 122',
      role: 'ambient',
    },
  ],
  // A joint of meat with a bite taken out of it, the bone knuckled at both
  // ends and the underside hatched. He is chewing one in the tavern in
  // episode 4.
  'lucky-roux': [
    {
      d: 'M30 122 C26 92 50 68 82 66 C88 66 94 67 98 68 Q103 78 108 74 Q112 84 118 80 Q120 89 127 88 C132 96 134 104 132 112 C128 136 100 150 70 148 C48 146 32 138 30 122 Z',
      role: 'accent',
    },
    { d: 'M98 68 Q104 86 127 88', role: 'soft' },
    { d: 'M104 75 Q108 82 114 82 M110 84 Q116 87 120 87', role: 'soft' },
    {
      d: 'M50 140 l4 -4 M60 144 l4 -4.4 M71 146.6 l4 -4.4 M83 147 l4 -4.4 M95 145 l4 -4.2 M106 141 l4 -4',
      role: 'ambient',
    },
    { d: 'M32 124 L20 132 M36 130 L24 138' },
    { d: 'M20 132 C12 124 2 134 10 140 C6 148 18 150 24 138' },
    { d: 'M128 98 L140 90 M131 104 L143 96' },
    { d: 'M140 90 C136 80 150 76 152 86 C160 84 160 98 143 96' },
    shadow(84, 166, 52),
  ],
  // A flintlock pistol side on, the smoke of its shot in his colour at the
  // muzzle, the hammer cocked, the barrel's underside hatched, the ball on the
  // ground. Luffy remembers the marksman who never missed in episode 9.
  'yasopp': [
    { d: 'M54 92 L120 85 M55 100 L121 93' },
    { d: 'M120 85 A4.2 1.8 84 1 1 121 93 A4.2 1.8 84 1 1 120 85' },
    { d: 'M55 100 L56 104 L104 99 L103 95', role: 'soft' },
    {
      d: 'M54 92 C44 94 38 96 36 104 C32 120 22 130 18 142 Q22 152 34 148 C40 134 52 122 58 108 L56 104',
    },
    { d: 'M18 142 Q26 140 34 148 M40 108 C36 120 30 130 24 140', role: 'soft' },
    { d: 'M59 91.6 C53 82 60 74 67 80 M70 91 l2 -9 l5 1', role: 'soft' },
    { d: 'M60 105 C60 117 76 117 78 103 M68 105 q2 6 -1 9' },
    {
      d: 'M68 100.6 l-1.4 4 M80 99.4 l-1.4 4 M92 98 l-1.4 4 M104 96.6 l-1.4 4 M116 95.4 l-1.4 4',
      role: 'ambient',
    },
    {
      d: 'M128 86 C124 76 134 70 140 76 C142 66 154 68 152 78 C156 84 150 92 142 88 C138 94 128 92 128 86 Z',
      role: 'accent',
    },
    { d: circle(98, 156, 3.6) },
    shadow(68, 164, 52),
  ],
  // His sabre, its knuckle-bow guard in his colour, and the bottle he smashed
  // lying on its side: its neck broken off, its underside hatched, the drink
  // spreading over the floor and two shards of glass. He smashes it in the
  // tavern in episode 4.
  'higuma': [
    { d: 'M58 116 C86 92 114 64 138 22 C134 60 104 98 66 124 Z' },
    { d: 'M64 116 C92 94 116 66 134 34', role: 'soft' },
    { d: 'M50 110 L74 130', role: 'accent' },
    { d: 'M72 129 C76 146 62 160 42 152 L38 148', role: 'accent' },
    {
      d: 'M58 120 L40 140 M64 126 L46 146 M40 140 L46 146 M38 140 Q34 148 40 150',
    },
    { d: 'M53 126 l6 6 M48 132 l6 6', role: 'soft' },
    {
      d: 'M148 146 L114 146 Q104 146 100 152 L92 152.5 M148 166 L114 166 Q104 166 100 160 L92 159.5',
    },
    { d: ellipse(148, 156, 4, 10) },
    {
      d: 'M92 152.5 L89 154.6 L92.4 156.2 L88.4 157.8 L92 159.5',
      role: 'soft',
    },
    {
      d: 'M116 162 l4 4 M124 162 l4 4 M132 162 l4 4 M140 162 l4 4',
      role: 'ambient',
    },
    {
      d: 'M88 162 C80 162 70 166 62 168 C52 170 52 177 62 177.4 C78 178 98 176 110 171',
      role: 'soft',
    },
    { d: 'M70 158 l3 -6 l4 2 l-2 4 z M80 150 l6 -1 l-2 4 z', role: 'soft' },
    { d: 'M-4 172 H52 M112 172 H164', role: 'ambient', dashed: true },
  ],
  // The pirates' cannon on its wheeled carriage, aimed high: the barrel's
  // muzzle seen round, its bands, its underside hatched, and the smoke of the
  // shot in orange. They fire it at the bird carrying Luffy over the town in
  // episode 4 and chapter 8.
  'orange-town-arc': [
    {
      d: 'M39.7 99.8 L115.8 57.2 M52.3 120.2 L124.2 70.8 M39.7 99.8 C30 104 34 124 52.3 120.2',
    },
    {
      d: 'M116.7 54.8 A9.5 3.6 58.2 1 0 126.7 71 A9.5 3.6 58.2 1 0 116.7 54.8',
    },
    { d: `M37.6 113.6 L33.6 116 ${circle(30.6, 118.4, 3.6)}` },
    { d: 'M57.1 90 L68.9 108.8 M83.4 75.4 L93.6 91.8', role: 'soft' },
    {
      d: 'M62 116 l4 -6 M74 108 l4 -6 M86 100 l4 -6 M98 92 l4 -6 M110 84 l3.6 -5.6',
      role: 'ambient',
    },
    { d: 'M34 126 L56 116 L82 104 L96 112 L94 140 L36 142 Z' },
    { d: circle(52, 140, 15) },
    {
      d: 'M52 125 V155 M37 140 H67 M41.4 129.4 L62.6 150.6 M41.4 150.6 L62.6 129.4',
      role: 'soft',
    },
    { d: dot(52, 140) },
    {
      d: 'M126 52 C122 42 132 36 138 42 C142 32 156 34 154 44 C160 48 156 58 148 56 C144 64 132 62 130 56 C124 58 122 52 126 52 Z',
      role: 'accent',
    },
    shadow(70, 162, 50),
  ],
  // His huge cannon front on, the bore dark and hatched, with one plain
  // cannonball set down at its mouth, the only mark in his colour. His crew
  // puts a cannon to one of their own in chapter 9 and fires it over Orange
  // Town in episode 5. The ball is drawn without the Jolly Roger it carries
  // from chapter 10, and no fuse is lit. Crowned from 1080, in
  // `eastBlueRedrawn`.
  'buggy': [
    ...BUGGY_CANNON,
    { d: 'M116 62 A36 36 0 0 1 98.5 92.9 M57.1 89.8 A36 36 0 1 1 116 62' },
    {
      d: 'M91.3 28.3 L113.9 50.9 M75.7 26.7 L115.3 66.3 M64.9 29.9 L112.2 77.2 M56.4 35.4 L106.5 85.4 M50.1 43.1 L99 92 M45.7 52.7 L77.3 84.3 M44.6 65.6 L64.9 85.9',
      role: 'ambient',
    },
    { d: circle(76, 118, 34), role: 'accent' },
    { d: 'M50.4 113.5 A26 26 0 0 1 67.1 93.6', role: 'soft' },
  ],

  // The sea chart she ran off with, half unrolled towards the reader, its
  // coastline and island in orange. She has just stolen it from Buggy in
  // episode 5. Each Clima-Tact she carries stands over a small copy of the
  // chart from 117, in `eastBlueRedrawn`.
  'nami': [
    ...NAMI_CHART_BODY,
    ...NAMI_CHART_DETAIL,
    { d: NAMI_COAST, role: 'accent' },
    shadow(80, 176, 62),
  ],

  // A row of house fronts, one roof already broken by a cannonball, and the
  // pirates' big top rising behind them.
  'orange-town': [
    { d: 'M80 40 L26 118 H134z', role: 'accent' },
    { d: 'M80 40 V26 l12 4 l-12 4', role: 'accent' },
    { d: 'M62 66 L50 118 M80 40 V118 M98 66 L110 118', role: 'ambient' },
    { d: house(18, 28, 112, 96) },
    { d: 'M58 150 V118 h28 V150 M54 118 L64 108 L70 114 L78 102 L90 118' },
    { d: house(100, 32, 110, 92) },
    { d: 'M26 126 h10 v10 h-10z M108 122 h8 v8 h-8z M120 122 h8 v8 h-8z' },
    { d: circle(76, 145, 5) },
    { d: 'M4 150 H156', role: 'ambient' },
    ...SEA.slice(2),
  ],

  // One of his fur boots, shaped like an animal's foot: the fur roll round the
  // top and the dark opening, the toes with their three claws, the sole, tufts
  // of fur and the heel in shade. He wears them in episode 6 (chapter 12).
  'mohji': [
    { d: ellipse(98, 52, 19, 6) },
    { d: 'M86 52 C92 49 106 49 112 51.5', role: 'ambient' },
    {
      d: 'M79 52 C72 54 72 60 75 63 C71 67 73 73 79 74 C82 79 88 79 91 76 C95 80 101 80 104 76 C108 80 114 79 116 74 C122 73 124 67 120 63 C123 59 122 54 117 52',
    },
    {
      d: 'M81 76 C81 90 76 99 64 103 C46 108 30 114 27 127 C25 136 30 146 40 148 H130 C140 147 143 134 139 118 C136 106 125 98 118 77',
    },
    { d: 'M38 144 C70 146 106 146 140 139', role: 'soft' },
    {
      d: 'M29 134 C21 138 17 145 18 153 C22 148 27 146 33 145 M46 142 C39 145 35 151 36 157 C40 153 45 151 51 150 M62 145 C56 148 53 153 54 158 C58 155 63 153 68 152',
      role: 'accent',
    },
    {
      d: 'M44 112 C47 120 47 128 44 136 M58 107 C62 117 62 129 59 140',
      role: 'soft',
    },
    {
      d: 'M92 98 q2 -4 4 0 M104 114 q2 -4 4 0 M80 120 q2 -4 4 0 M112 130 q2 -4 4 0 M94 132 q2 -4 4 0',
      role: 'soft',
    },
    {
      d: 'M126 94 l8 -6 M129 106 l8 -6 M131 118 l7 -5 M132 130 l6 -5',
      role: 'ambient',
    },
    shadow(82, 168, 60),
  ],

  // The pet-food shop he guards, shut and still standing: the long plank sign
  // across the front with nothing written on it, the arched double door, a
  // window either side, the hanging sign on its bracket, the side wall in shade
  // and the step. He sits in front of it in episode 6 (chapter 12). Burnt from
  // 7 and rebuilt at 1148, in `eastBlueRedrawn`.
  'chouchou': [
    { d: 'M28 150 V64 M112 150 V64 M28 150 H112' },
    { d: 'M112 150 L134 138 V58 L124 58' },
    {
      d: 'M114.1 81 L121.2 68.6 M114 93.1 L131.3 63.2 M114.1 105 L132 74 M114 117.1 L131.9 86.1 M114.1 128.9 L132 98 M114.1 141 L131.9 110.1 M119.7 143.2 L132 121.9 M129.9 137.5 L131.9 134',
      role: 'ambient',
    },
    { d: 'M20 64 H120 V38 H20 Z', role: 'accent' },
    { d: 'M20 38 L28 32 H128 V58 L120 64 M120 38 L128 32', role: 'accent' },
    { d: 'M20 47 H120 M20 55.5 H120', role: 'soft' },
    { d: 'M56 150 V110 A14 14 0 0 1 84 110 V150' },
    { d: `M70 96 V150 ${dot(75, 128)}`, role: 'soft' },
    { d: 'M34 102 H50 V130 H34 Z M90 102 H106 V130 H90 Z' },
    { d: 'M42 102 V130 M34 116 H50 M98 102 V130 M90 116 H106', role: 'soft' },
    { d: 'M28 78 H12 M14 78 v4 M24 78 v4 M10 82 H28 V96 H10 Z' },
    { d: 'M50 150 L46 156 H94 L90 150', role: 'soft' },
    { d: 'M2 156 H42 M98 156 H158', role: 'ambient', dashed: true },
  ],

  // The iron cage his bite broke open: the box seen from a corner, the far
  // edges showing through the bars, the side hatched, and the two middle bars
  // of the front bitten through and splayed, in his colour. He breaks it
  // attacking Luffy in episode 6.
  'richie': [
    { d: 'M30 58 H114 L140 40 H56 Z' },
    { d: 'M30 160 H114 L140 142' },
    { d: 'M30 58 V160 M114 58 V160 M140 40 V142' },
    { d: 'M122.7 52 V154 M131.3 46 V148', role: 'soft' },
    {
      d: 'M118 72 l18 -12.4 M118 92 l18 -12.4 M118 112 l18 -12.4 M118 132 l18 -12.4',
      role: 'ambient',
    },
    { d: 'M47 58 V160 M97 58 V160' },
    {
      d: 'M64 58 V76 L52 92 M80 58 V76 L92 92 M64 160 V140 L53 126 M80 160 V140 L91 126',
      role: 'accent',
    },
    { d: 'M56 40 V142 H140 M30 160 L56 142', role: 'soft' },
    shadow(84, 176, 58),
  ],
  // A unicycle and a sabre: the wheel turned a little, with the tyre's
  // thickness on its far side, the spokes, the hub and the cranks, the saddle
  // with its underside in shade, and the curved sabre leant behind it. He
  // fights Zoro on it in episode 7 (chapter 16).
  'cabaji': [
    { d: 'M124 66 C121 106 112 142 98 176 C118 150 134 110 136 68' },
    { d: 'M130 72 C128 106 120 138 106 164', role: 'soft' },
    { d: 'M116 64 C118 58 140 60 142 67 C140 72 118 70 116 64 Z' },
    { d: 'M126 62 L128 42 M134 63 L135 43 M128 42 C129 37 134 38 135 43' },
    { d: 'M127.4 48 l7.4 0.8 M127 54 l7.6 0.8', role: 'soft' },
    { d: ellipse(66, 130, 27, 38), role: 'accent' },
    { d: 'M69 92 C104 93 104 167 69 168' },
    { d: ellipse(66, 130, 21.5, 31) },
    {
      d: 'M70.5 130 L87.5 130 M69.2 134.2 L81.2 151.9 M66 136 L66 161 M62.8 134.2 L50.8 151.9 M61.5 130 L44.5 130 M62.8 125.8 L50.8 108.1 M66 124 L66 99 M69.2 125.8 L81.2 108.1',
      role: 'soft',
    },
    { d: ellipse(66, 130, 4.5, 6) },
    { d: 'M60 130 L57 84 M72 130 L69 84 M55 84 H71 M62 84 V68' },
    {
      d: 'M46 64 C46 56 60 54 70 58 L86 62 C90 64 88 68 84 68 L64 69 C52 71 46 69 46 64 Z',
    },
    { d: 'M47.4 67.6 C50 72.6 58 73.4 64 72.6 L84 71', role: 'soft' },
    { d: 'M51 71 l1.2 2.4 M57 72.4 l0.8 2.4', role: 'ambient' },
    { d: 'M66 130 L80 148 M76 149 h10 M66 130 L53 114 M49 113 h8' },
    shadow(80, 176, 44),
  ],

  // The leather armour he puts on to face the pirates alone: the chestplate
  // standing empty, its neck open and dark inside, toggles down the front,
  // the stitched band, the side that turns away in shade, and his spear laid
  // in front of it. He faces Buggy in it in chapter 15 (episodes 6 and 7).
  'boodle': [
    {
      d: 'M54 63 L34 76 C46 82 48 94 40 104 C37 122 37 138 42 150 C62 160 94 160 112 150 C115 134 115 116 111 100 C104 92 104 80 109 72 L90 63',
      role: 'accent',
    },
    { d: ellipse(72, 64, 18, 6) },
    {
      d: 'M82.4 60.2 L83.7 62.4 M76.7 59.2 L78.5 62.5 M71.4 59.1 L73.4 62.5 M66.4 59.4 L68.1 62.4 M61.7 60.3 L63 62.5',
      role: 'ambient',
    },
    { d: 'M99 69 C101 100 101 130 99 156', role: 'soft' },
    {
      d: 'M101.4 91 L105.1 84.5 M101.3 103.1 L108.7 90.3 M101.3 115.2 L109.8 100.4 M101.3 127 L110.7 110.8 M101.3 139.1 L110.7 122.9 M103.4 147.5 L110.7 134.8',
      role: 'ambient',
    },
    { d: 'M64 70 V156 M55.5 68 L39 78.6 M89 68.4 L104.6 74.6', role: 'soft' },
    { d: 'M58 86 h12 M58 100 h12 M58 114 h12', role: 'soft' },
    { d: 'M38.5 128 C58 137 92 137 113.5 128', role: 'soft' },
    { d: 'M34 171 L118 161 M34 178 L118 168 M34 171 Q30 174.5 34 178' },
    { d: 'M118 159 V170 M123 158.6 V169.6' },
    {
      d: 'M123 160 C134 155 146 158 154 163 C146 168 134 170 123 168',
      role: 'soft',
    },
    { d: 'M123 164 L152 163', role: 'soft' },
    shadow(80, 188, 62),
  ],
  // An island seen from the sea, wooded over two rises with its far flank in
  // shade, a line of trees along the shore, and the small sailboat coming in.
  // Chapter 22 lands on an island of forest and episode 9 on the Gecko
  // Islands, so it is neither in particular.
  'syrup-village-arc': [
    {
      d: 'M12 147.3 Q13.1 140.7 19.5 142.6 Q19.4 134.8 27 133.4 Q26.3 124 34.5 119.4 Q33.7 109.4 42 103.6 Q41.5 95.1 49.5 91.9 Q51.8 85.9 57 89.6 Q64.4 90.1 64.5 97.5 Q72.6 102.1 72 111.4 Q80.1 115.9 79.5 125.2 Q78.8 115.5 87 110.2 Q86.1 98.6 94.5 90.6 Q93.6 79.6 102 72.3 Q101.8 64.4 109.5 62.5 Q115.3 59.6 117 65.8 Q125.2 71.2 124.5 81.1 Q133 89.9 132 102.1 Q140.4 110.2 139.5 121.8 Q147.7 126.5 147 135.9 Q152 142 154 150',
      role: 'accent',
    },
    {
      d: 'M40 140 Q44.5 129.8 49 136 Q53.5 128 58 135 Q62.5 124.5 67 131.5 Q71.5 122 76 128 Q80.5 120 85 129 Q89.5 122 94 131 Q98.5 124 103 130 Q107.5 120 112 127 Q116.5 119 121 126 Q125.5 120 130 128 Q134 124 136 134',
      role: 'soft',
    },
    {
      d: 'M128 92 l7 -4 M132 104 l8 -5 M136 116 l8 -5 M140 128 l8 -5 M143 140 l7 -4',
      role: 'ambient',
    },
    { d: 'M4 150 H156', role: 'ambient' },
    { d: 'M18 170 H50 L45 177 H24 Z' },
    { d: 'M34 170 V134 M34 136 C44 146 48 158 50 166 H34' },
    ...SEA.slice(1),
  ],
  // His satchel, hung as he wears it across his chest: the strap running up
  // and away out of the box, the bag a pouch under a kiss-lock frame (the
  // accent) with its two knobs standing on top of the bar, rings at the
  // hinges, the side panel turned away and hatched. Chapter 23 shows it on
  // him from his first panel; it shows no slingshot until chapter 27, so the
  // slingshot follows in `eastBlueRedrawn`, then Kabuto from 274 and Kuro
  // Kabuto from 517.
  'usopp': [
    { d: 'M60 112 C46 128 42 154 52 170 C60 182 104 184 116 174' },
    { d: 'M116 174 C130 164 136 140 128 120 C125 114 122 110 118 108' },
    { d: 'M110 116 C118 134 120 156 116 174', role: 'soft' },
    {
      d: 'M58 112 Q86 100 112 114 L120 108 Q90 96 58 112 M58 112 L60 116',
      role: 'accent',
    },
    { d: circle(86, 101.5, 3.4), role: 'accent' },
    { d: 'M90.6 99.9 a3.4 3.4 0 1 1 0.2 5.5', role: 'accent' },
    {
      d: `${ellipse(57, 107, 3, 4.5)} ${ellipse(120, 103, 3, 4.5)}`,
      role: 'soft',
    },
    { d: 'M56 103 C46 78 30 48 6 20 M120 99 C96 70 62 38 32 6' },
    { d: 'M62 102 C52 80 38 54 16 26', role: 'soft' },
    {
      d: 'M70 118 q-4 12 -2 22 M88 116 q0 10 2 18 M104 118 q4 10 3 20',
      role: 'soft',
    },
    {
      d: 'M124 126 l4 -3 M126 136 l5 -3.5 M127 146 l5 -3.5 M126 156 l5 -3.5 M123 166 l4 -3',
      role: 'ambient',
    },
  ],

  // A mansion on a hill, its gate at the foot, a path down to the shore.
  'syrup-village': [
    { d: 'M-4 156 C50 112 110 112 164 156' },
    { d: 'M50 116 V80 H110 V116 M46 80 L80 60 L114 80' },
    {
      d: 'M34 116 V92 H50 M110 92 H126 V116 M30 92 L42 82 L54 92 M106 92 L118 82 L130 92',
    },
    { d: 'M60 90 h10 v12 h-10z M90 90 h10 v12 h-10z M76 116 V100 h8 V116' },
    { d: 'M96 68 V56 h8 V72' },
    { d: 'M62 150 V128 M98 150 V128 M62 128 Q80 112 98 128', role: 'accent' },
    { d: 'M70 150 V132 M80 150 V126 M90 150 V132', role: 'accent' },
    { d: 'M80 150 q-16 12 -40 14', role: 'ambient', dashed: true },
    ...SEA.slice(2),
  ],

  // Her window in the mansion, open: the wall turned a little, the depth of
  // the jamb in shade, both casements swung out and the curtain drawn back to
  // one side as the episode 9 frames show them, the sill, and the branch
  // outside where Usopp sits to tell her his stories (chapter 24, episode 9).
  'kaya': [
    { d: 'M48 56 L104 64 V132 L48 138 Z' },
    { d: 'M48 56 L56 62 V132 M56 62 L104 68', role: 'soft' },
    {
      d: 'M48 70 l8 -4 M48 84 l8 -4 M48 98 l8 -4 M48 112 l8 -4 M48 126 l8 -4',
      role: 'ambient',
    },
    { d: 'M48 56 L28 46 V146 L48 138' },
    { d: 'M38 51 V142 M28 96 L48 97', role: 'soft' },
    { d: 'M104 64 L120 58 V138 L104 132' },
    { d: 'M112 61 V135 M104 98 L120 98', role: 'soft' },
    {
      d: 'M58 64 C76 68 92 70 102 70 C92 76 82 90 78 108 C76 116 72 120 66 120 C70 126 68 130 62 132',
      role: 'accent',
    },
    {
      d: 'M66 68 C70 86 66 104 70 118 M76 69 C80 84 78 100 76 112',
      role: 'soft',
    },
    { d: 'M40 138 L112 132 L118 136 L44 143 Z' },
    { d: 'M44 143 V148 L118 141 V136', role: 'soft' },
    {
      d: 'M160 156 C146 155 132 159 118 170 M146 156.4 C148 148 150 144 154 140',
      role: 'ambient',
    },
    {
      d: 'M134 160.6 C128 154 129 146 135 142 C138 149 138 155 134 160.6 Z M154 140 C148 136 148 128 152 122 C156 128 156 134 154 140 Z',
      role: 'ambient',
    },
  ],
  // The Cat Claws: one black glove, its far half in shade, the fingers bent
  // over the knuckles, a full-length blade from the tip of each finger and
  // the thumb, and the cuff open below. He takes them out of a bag to cut
  // Merry down in episode 12 (chapter 28).
  'kuro': [
    {
      d: 'M45.3 115.7 Q22.8 99.7 3.7 87.8 Q20.2 104.2 42.7 120.3 M58.3 96.8 Q42.1 60.5 27.5 31.6 Q37.5 63 53.7 99.2 M72.6 91.5 Q68.3 52.1 63.4 20.1 Q63.2 53 67.4 92.5 M88.6 92.4 Q96.8 53.5 102 21.5 Q91.6 52.8 83.4 91.6 M102.3 99.1 Q122.1 64.7 137 35.9 Q117.4 62.5 97.7 96.9',
      role: 'accent',
    },
    {
      d: 'M50 104 C50 96 62 92 64 98 M64 98 C64 88 76 86 78 94 M78 94 C80 86 92 88 92 96 M92 96 C96 90 106 94 104 102',
    },
    { d: 'M50 104 C48 118 50 136 58 148 H100 C106 134 108 118 104 102' },
    { d: 'M50 116 C42 114 38 118 40 124 C42 128 48 128 51 126', role: 'soft' },
    {
      d: 'M79.6 112.7 L84.1 104.9 M79.5 126.9 L92.1 105 M79.6 140.7 L100.2 105 M86.4 142.9 L100.3 118.9 M94.4 143 L98.2 136.5',
      role: 'ambient',
    },
    {
      d: 'M64 98 C66 104 66 112 64 120 M78 94 V118 M92 96 C90 104 90 112 92 120',
      role: 'soft',
    },
    { d: 'M57 148 C64 153 94 153 101 148 M57 148 L56 166 M101 148 L102 166' },
    { d: 'M56 166 C56 162 102 162 102 166 C102 171 56 171 56 166 Z' },
    shadow(80, 182, 40),
  ],
  // His ring mid-swing on its string, the edge of its thickness showing and its
  // path trailing behind it, over his heart-shaped glasses folded on the ground
  // with the dark lenses hatched. He swings it at Luffy on the cliff in episode
  // 10 (chapter 26). The Marine cap joins them from 128, in `eastBlueRedrawn`.
  'jango': [
    { d: 'M40 4 C52 28 72 46 90.1 65' },
    {
      d: ellipse(104, 82, 22, 15),
      role: 'accent',
      transform: 'rotate(50.8 104 82)',
    },
    {
      d: ellipse(104, 82, 13, 7.5),
      role: 'accent',
      transform: 'rotate(50.8 104 82)',
    },
    { d: 'M121 72 C129 82 130 96 121 102', role: 'soft' },
    {
      d: 'M79 83.9 A88.9 88.9 0 0 1 52.4 92 M91.3 104.6 A112.9 112.9 0 0 1 63.5 114.4',
      role: 'ambient',
    },
    { d: HEART, transform: 'translate(55 140) scale(1.4 1.15)' },
    { d: HEART, transform: 'translate(101 138) scale(1.2 1.05)' },
    { d: 'M71 133 Q78 128 86 131' },
    {
      d: 'M48 140 l8 -8 M54 146 l10 -10 M95 139 l7 -7 M100 144 l8 -8',
      role: 'ambient',
    },
    { d: 'M38 130 L116 125 M38 130 l-4 4 M116 125 l4 4', role: 'soft' },
    shadow(78, 168, 56),
  ],
  // The slim glasses case he collects for Klahadore, opened, with the lid
  // swung up and the new glasses folded inside: Kaya's present for his third
  // year in the house. He holds it out in episode 12 (chapter 28).
  'merry': [
    { d: 'M38 108 H122 A11 11 0 0 1 122 130 H38 A11 11 0 0 1 38 108 Z' },
    { d: 'M27 119 C27 138 38 145 54 145 H106 C122 145 133 138 133 119' },
    { d: 'M38 108 C29 104 28 82 40 76 H120 C132 82 131 104 122 108' },
    { d: 'M40 76 C48 69 112 69 120 76', role: 'soft' },
    {
      d: 'M44 102 C40 95 40 87 47 83 H113 C120 87 120 95 116 102',
      role: 'soft',
    },
    {
      d: `${ellipse(63, 120, 13, 7.5)} ${ellipse(97, 120, 13, 7.5)} M76 119 Q80 115 84 119 M50 120 L43 116 M110 120 L117 116`,
      role: 'accent',
    },
    { d: 'M46 115 H114', role: 'soft' },
    { d: 'M31 126 l6 -6 M38 130 l6 -6 M121 130 l6 -6', role: 'ambient' },
    shadow(80, 158, 56),
  ],

  // Their wooden swords, toys: a broad blade with a blunt rounded tip and
  // its thickness hatched, a block guard, a plain grip and the grain. One is
  // raised and the other lies on the ground. Ninjin and Piiman carry them in
  // chapter 23 (episode 9).
  'ninjin-piiman-and-tamanegi': [
    { d: WOODEN_BLADE, role: 'accent', transform: SWORD_RAISED },
    ...WOODEN_SWORD.map((stroke) => ({ ...stroke, transform: SWORD_RAISED })),
    { d: WOODEN_BLADE, transform: SWORD_LAID },
    ...WOODEN_SWORD.map((stroke) => ({ ...stroke, transform: SWORD_LAID })),
    shadow(80, 176, 58),
  ],

  // The collar he wears, in 3/4 from above with the inside of the band
  // hatched, and the big round cat's bell hanging from it in his colour: its
  // band, the slot and the hole at its foot, the side away from us hatched. He
  // wears it from his first panel in chapter 31, and fights Zoro in it in
  // episode 13.
  'buchi': [
    { d: ellipse(80, 62, 40, 14) },
    { d: 'M40 62 V71 A40 14 0 0 0 120 71 V62' },
    { d: 'M40.8 70 A40 14 0 0 1 119.2 70', role: 'soft' },
    {
      d: 'M50 66 l6 -6 M62 63 l6 -6 M92 63 l6 -6 M104 66 l6 -6',
      role: 'ambient',
    },
    { d: ellipse(80, 88, 5, 4.5) },
    { d: circle(80, 116, 24), role: 'accent' },
    {
      d: 'M56.5 110 Q80 119 103.5 110 M56.1 117 Q80 126 103.9 117',
      role: 'soft',
    },
    { d: `M80 140 V130 ${circle(80, 127.6, 2.4)}`, role: 'soft' },
    { d: 'M66 102 Q69 97 75 95', role: 'soft' },
    {
      d: 'M92 98 l6 -5 M97 108 l6 -5 M98 128 l6 -5 M93 137 l5 -4',
      role: 'ambient',
    },
    shadow(80, 172, 30),
  ],

  // One of his long clawed gloves: the forearm rising from its open cuff and
  // the paw bent over at the wrist the way he holds it up, four fingers
  // hanging and the long hooked claws in his colour, the dark leather hatched.
  // He goes at Zoro with them in episode 13.
  'sham': [
    { d: ellipse(36, 172, 12, 4.6), transform: 'rotate(30.5 36 172)' },
    { d: 'M26 166 L50 114 C46 84 70 56 100 56 C124 56 140 74 140 96 L140 104' },
    { d: 'M46 178 L80 132 C86 124 90 118 92 112' },
    {
      d: 'M92 112 C90 124 92 136 98 138 C104 140 106 132 104 120 M104 120 C104 134 108 142 114 142 C120 142 120 132 118 120 M118 120 C120 132 124 138 130 136 C136 134 134 124 132 114 M132 114 C134 122 140 124 142 118 C144 112 142 106 140 104',
    },
    {
      d: 'M98 138 Q98 154 86 158 M114 142 Q116 158 104 164 M130 136 Q134 152 122 158 M142 118 Q150 132 142 142',
      role: 'accent',
    },
    {
      d: 'M104 120 C104 110 102 102 98 96 M118 120 C118 108 116 100 112 94 M132 114 C132 104 130 96 126 90',
      role: 'soft',
    },
    {
      d: 'M30 156 l12 4 M37 143 l12 4 M44 131 l12 4 M52 117 l12 4',
      role: 'ambient',
    },
    {
      d: 'M112 60 l6 -5 M126 66 l6 -4 M135 78 l6 -3 M139 92 l6 -2',
      role: 'ambient',
    },
    shadow(84, 188, 44),
  ],
  // The ship: hull, deck, one mast, one sail, and the RAM's head at the prow.
  'going-merry': [
    { d: 'M22 122 L32 154 Q80 172 128 154 L138 122' },
    { d: 'M22 122 H138' },
    { d: 'M36 140 Q80 154 124 140', role: 'ambient' },
    { d: 'M80 122 V40' },
    { d: 'M52 52 H108' },
    { d: 'M80 40 l16 6 l-16 6' },
    { d: 'M54 54 Q80 46 106 54 L110 104 Q80 114 50 104 Z', role: 'accent' },
    {
      d: 'M22 122 C10 120 6 108 10 98 C14 90 24 92 26 100 C28 106 22 110 20 106',
    },
    { d: 'M10 98 q-8 -4 -4 -12' },
    ...SEA.slice(1),
  ],

  // The treasure chest he has been stuck in for twenty years, closed, in
  // 3/4: the curved lid and the iron bands over it, the planks, the far side
  // hatched, and the lock plate in his colour, lock and bands as the show
  // draws them. He keeps guard over the island of rare animals in it in
  // episode 18.
  'gaimon': [
    { d: 'M30 112 V170 H110 V112' },
    { d: 'M110 170 L136 156 V98' },
    { d: 'M30 112 C28 92 38 80 52 78 L126 78 C134 80 138 88 136 98' },
    { d: 'M30 112 H110 C108 92 116 80 126 78' },
    {
      d: 'M46 112 V170 M94 112 V170 M46 112 C45 94 52 82 66 79 M94 112 C93 94 100 82 114 79',
    },
    {
      d: 'M30 132 H46 M30 152 H46 M94 132 H110 M94 152 H110 M46 132 H62 M78 132 H94 M46 152 H94 M110 132 L136 118 M110 152 L136 138 M34 96 C40 88 46 84 54 82',
      role: 'soft',
    },
    {
      d: `M62 104 H78 V126 H62 Z ${circle(70, 112, 2.6)} M70 114.6 V120`,
      role: 'accent',
    },
    {
      d: 'M114 120 l16 -9 M114 134 l18 -10 M114 148 l18 -10 M116 162 l14 -8 M116 100 l12 -8',
      role: 'ambient',
    },
    shadow(84, 178, 58),
  ],
  // Her bamboo practice sword laid along the dojo's wooden step, its tip
  // capped, tied and strung, and her white-sheathed katana leaning against
  // the step: Wado Ichimonji, its oval guard and wrapped hilt above the edge,
  // the step's front hatched. Both are hers in Zoro's memory of episode 19.
  'kuina': [
    { d: 'M4 112 H129 M140 112 H156 M4 140 H122 M133 140 H156' },
    { d: 'M4 140 V160 M156 140 V160 M4 160 H117 M128 160 H156' },
    {
      d: 'M12 144 l8 12 M30 144 l8 12 M48 144 l8 12 M66 144 l8 12 M84 144 l8 12 M102 144 l8 12 M138 144 l8 12',
      role: 'ambient',
    },
    {
      d: 'M13.8 122.6 L94.2 117 M14.2 129.4 L94.7 123.7 M97.5 116.4 L124.3 114.5 Q128.8 118 124.9 122 L98.1 123.9 Z',
    },
    {
      d: 'M13.8 122.6 Q10.6 126.2 14.2 129.4 M28.8 121.6 L29.3 128.3 M35.6 121.1 L36 127.8 M17.4 125.8 L92.8 120.5',
      role: 'soft',
    },
    {
      d: 'M98.2 120.1 C98.5 123.8 97.7 126.9 96.6 127 C95.4 127 94.3 124.1 94 120.4 C93.8 116.7 94.5 113.6 95.7 113.6 C96.8 113.5 98 116.4 98.2 120.1 Z',
    },
    { d: 'M17.1 122 Q55.4 115.5 92.5 116.7', role: 'soft' },
    {
      d: 'M111.6 184.9 Q123.7 130.2 138.7 76.2 L147.5 78.4 Q135.4 133.1 120.4 187.1 Q115 189.9 111.6 184.9',
      role: 'accent',
    },
    { d: 'M113.3 177.1 L122.6 179.4 M137.3 82.1 L146 84.2', role: 'soft' },
    {
      d: 'M144.4 72 C149.5 73.3 153.4 75.4 153 76.7 C152.7 78.1 148.3 78.1 143.2 76.8 C138.1 75.6 134.3 73.5 134.6 72.1 C134.9 70.8 139.3 70.7 144.4 72 Z',
      role: 'accent',
    },
    { d: 'M140.9 70.6 L150.5 31.8 Q155.2 28.8 157.9 33.6 L148.2 72.4' },
    {
      d: 'M142.3 65.8 L150.2 63.6 L144.2 58 L152.2 55.9 L146.1 50.3 L154.1 48.1 L148.1 42.5 L156 40.4 L150 34.7',
      role: 'soft',
    },
    shadow(118, 188, 14),
  ],
  // One of the two Nakiri swords, laid on the diagonal: the broad blade
  // widening to its squared tip, the spine side hatched, the bevel along the
  // edge, the round guard in his colour seen in 3/4, the wrapped grip and its
  // cap. It has no sheath. He storms the ship with it in episode 19.
  'johnny': [
    {
      d: 'M58.4 116.7 L137.1 68.9 Q144 64.9 148.5 72.7 L155.7 87.1 L63.9 126.2 Z',
    },
    { d: 'M64.9 119.9 L150.1 83.4', role: 'soft' },
    {
      d: 'M69.1 111.1 L75.7 112.5 M84.4 101.7 L91.3 103.5 M99.8 92.2 L106.8 94.5 M115.1 82.8 L122.4 85.5 M130.4 73.4 L138 76.5',
      role: 'ambient',
    },
    {
      d: 'M54.5 124.8 A3.5 14 -30 1 0 60.5 121.3 A3.5 14 -30 1 0 54.5 124.8',
      role: 'accent',
    },
    { d: 'M54.5 124.8 Q47.6 114.9 48.8 111.9', role: 'accent' },
    { d: 'M52.9 121 L20.8 139.5 M56.9 128 L24.8 146.5' },
    { d: 'M18.9 145.3 A2.5 5 -30 1 0 23.3 142.8 A2.5 5 -30 1 0 18.9 145.3' },
    {
      d: 'M50.3 122.5 L49.1 132.5 L39.9 128.5 L38.7 138.5 L29.5 134.5 L28.3 144.5',
      role: 'soft',
    },
    shadow(82, 172, 54),
  ],
  // The barrel of limes the crew cures his scurvy with: the barrel in 3/4
  // with its staves and hoops and its far side hatched, the limes heaped over
  // its rim, a loose one on the deck, and a squeezed half in his colour, still
  // dripping. The barrel is the one in the episode 20 frame of the cure.
  'yosaku': [
    { d: ellipse(70, 98, 32, 9) },
    {
      d: 'M38 98 C33 118 33 142 40 162 Q70 174 100 162 C107 142 107 118 102 98',
    },
    { d: 'M37 114 Q70 126 103 114 M36 148 Q70 160 104 148' },
    {
      d: 'M56 107 C54 126 54 146 56 168 M84 107 C86 126 86 146 84 168',
      role: 'soft',
    },
    {
      d: 'M41 97 C41 87 59 87 59 97 M59 93 C59 83 77 83 77 93 M77 96 C77 86 95 86 95 96 M51 85 C51 75 67 75 67 85 M69 83 C69 73 85 73 85 83 M77 73 l1 -3',
    },
    { d: 'M95 124 l8 -5 M96 136 l8 -5 M96 158 l6 -4', role: 'ambient' },
    { d: 'M114 166 C114 180 142 180 142 166' },
    {
      d: `${ellipse(128, 166, 14, 5)} M128 166 L117 164.5 M128 166 L128 161 M128 166 L139 164.5 M128 166 L120 169.5 M128 166 L136 169.5`,
      role: 'accent',
    },
    {
      d: 'M128 144 q-3 6 0 7 q3 -1 0 -7 M122 152 q-2 4 0 5 q2 -1 0 -5',
      role: 'soft',
    },
    { d: 'M12 172 C12 165 28 165 28 172 C28 179 12 179 12 172 M28 172 l3 0' },
    shadow(76, 182, 56),
  ],
  // The Baratie off the bow in 3/4: the fish's head for a prow with its mouth
  // open, in its colour, the hull running back, the restaurant cabin in two
  // tiers of arched windows under its roof, and two masts with their striped
  // sails and bare pennants. The crew reaches it in episode 20.
  'baratie-arc': [
    { d: 'M44 122 L150 108 V136 L42 152' },
    {
      d: 'M44 122 C34 108 16 106 6 114 C14 118 20 124 22 130 M22 136 C16 140 10 148 4 152 C16 160 34 160 42 152 M44 122 C48 132 48 144 42 152',
      role: 'accent',
    },
    { d: 'M22 130 C30 130 30 136 22 136', role: 'accent' },
    {
      d: 'M12 116 l5 6 M18 116 l4 8 M10 150 l6 -5 M17 152 l6 -6',
      role: 'ambient',
    },
    { d: 'M56 120 V90 L140 80 V109 M52 90 L144 79' },
    { d: 'M66 89 V68 L128 62 V81 M62 68 L132 61' },
    { d: 'M66 68 L74 52 L120 48 L128 62' },
    {
      d: 'M64 110 v-8 q4 -5 8 0 v8 M84 108 v-8 q4 -5 8 0 v8 M104 105 v-8 q4 -5 8 0 v8 M122 103 v-8 q4 -5 8 0 v8 M78 82 v-6 q3 -4 6 0 v6 M96 80 v-6 q3 -4 6 0 v6 M112 78 v-6 q3 -4 6 0 v6',
      role: 'soft',
    },
    { d: 'M60 52 V8 M136 48 V14' },
    {
      d: 'M34 18 H86 M38 18 C34 30 36 40 40 46 H80 C84 40 86 30 82 18 M112 24 H160 M116 24 C112 34 114 42 118 46 H154 C158 42 160 34 156 24',
    },
    {
      d: 'M48 18 C46 30 47 40 49 46 M72 18 C74 30 73 40 71 46 M126 24 C124 34 125 42 127 46 M146 24 C148 34 147 42 145 46',
      role: 'soft',
    },
    { d: 'M60 8 l10 4 l-10 4 M136 14 l9 4 l-9 4', role: 'soft' },
    ...SEA.slice(1),
  ],
  // A chef's knife, and a lit cigarette left on the table in front of it, its
  // smoke curling up past the blade in his colour. He is the Baratie's sous
  // chef in episode 20, never without a cigarette. The flame lights on the
  // point from 298, the Raid Suit's cape goes behind it from 925 and the
  // flame burns taller from 1061, in `eastBlueRedrawn`.
  'sanji': [
    ...SANJI_KNIFE,
    {
      d: 'M85.5 174.1 L115.5 166.1 M86.5 177.9 L116.5 169.9 M85.5 174.1 Q83.6 176.6 86.5 177.9',
    },
    {
      d: 'M93.3 172 L94.3 175.8 M115.5 166.1 Q118.4 167.4 116.5 169.9',
      role: 'soft',
    },
    {
      d: 'M119 166 C132 156 120 144 134 132 C146 122 136 110 148 98',
      role: 'accent',
    },
    { d: 'M128 154 C138 146 132 138 140 130', role: 'accent' },
    shadow(80, 186, 44),
  ],

  // A restaurant that is also a ship: a hull with portholes, the dining
  // deck and its chimney, and a fish's head for a prow.
  'baratie': [
    { d: 'M14 126 Q80 122 146 126 L136 154 H24z' },
    { d: `${circle(60, 140, 3)} ${circle(80, 140, 3)} ${circle(100, 140, 3)}` },
    { d: 'M50 126 V96 H120 V126 M46 96 H124' },
    { d: 'M58 104 h10 v10 h-10z M76 104 h10 v10 h-10z M94 104 h10 v10 h-10z' },
    { d: 'M104 96 V78 h8 V96' },
    { d: 'M108 74 q-6 -8 0 -16 q6 -8 0 -16', role: 'ambient', dashed: true },
    { d: 'M40 126 C10 126 -2 104 10 88 C20 76 40 78 46 90', role: 'accent' },
    { d: circle(26, 94, 3), role: 'accent' },
    { d: 'M10 100 L28 104 M12 106 l4 4 l4 -4 l4 4 l4 -4', role: 'accent' },
    {
      d: 'M144 126 l14 -16 l-2 16 l2 16z M76 96 L86 78 L96 96',
      role: 'accent',
    },
    ...SEA,
  ],

  // His toque, nearly as tall as he is: the pleated puff on top, the tall
  // crown with its folds, the band, the far side hatched, and the crossed
  // stitches the show draws down its front, in his colour. He kicks Luffy
  // into service in it in episode 20.
  'zeff': [
    { d: 'M52 152 C50 120 48 92 46 68 M108 152 C110 120 112 92 114 68' },
    {
      d: 'M46 68 C34 64 32 46 46 40 C50 26 110 26 114 40 C128 46 126 64 114 68 C96 74 64 74 46 68',
    },
    {
      d: 'M58 66 C54 54 56 42 64 34 M80 70 V30 M102 66 C106 54 104 42 96 34',
      role: 'soft',
    },
    {
      d: 'M52 152 V166 M108 152 V166 M52 152 Q80 162 108 152 M52 166 Q80 176 108 166',
    },
    {
      d: 'M64 146 C62 122 60 98 58 76 M96 146 C98 122 100 98 102 76',
      role: 'soft',
    },
    { d: 'M80 78 V150', role: 'soft' },
    {
      d: 'M74 86 l12 10 M86 86 l-12 10 M74 102 l12 10 M86 102 l-12 10',
      role: 'accent',
    },
    {
      d: 'M104 90 l8 -6 M105 108 l8 -6 M106 126 l7 -5 M107 144 l6 -4 M116 54 l6 -4',
      role: 'ambient',
    },
    shadow(80, 184, 40),
  ],
  // The plate of rice Sanji brings him outside at 21 (a pilaf in the manga, a
  // risotto in the show), heaped in his colour with its far side hatched, a
  // spoon standing in it and the steam still rising. His tonfa join the plate
  // from 27, in `eastBlueRedrawn`.
  'gin': [
    { d: ellipse(80, 140, 62, 18) },
    {
      d: 'M18 140 Q19 147 24 150 M142 140 Q141 147 136 150 M24 150 Q80 170 136 150',
    },
    { d: ellipse(80, 141, 44, 12), role: 'soft' },
    {
      d: 'M44 141 C46 116 66 104 82 104 C98 104 114 116 116 141',
      role: 'accent',
    },
    {
      d: dots([
        [62, 126],
        [74, 116],
        [86, 112],
        [68, 136],
        [92, 128],
        [56, 138],
      ]),
      role: 'soft',
    },
    { d: 'M104 116 l6 6 M108 110 l6 6 M110 124 l5 5', role: 'ambient' },
    { d: 'M92 116 L124 80 Q128 74 133 79 Q135 84 131 87 L98 122' },
    {
      d: 'M64 96 c-6 -10 4 -14 -2 -26 M84 94 c-6 -10 4 -14 -2 -26',
      role: 'ambient',
    },
    shadow(80, 176, 56),
  ],

  // His iron knuckle in his colour, four rings on a curved grip with a bolt
  // over each, its far end hatched; behind it, the soup he drops a fly into to
  // blame Sanji. Both are at his table at the Baratie in episode 20. A second
  // knuckle replaces the soup from 128, in `eastBlueRedrawn`.
  'fullbody': [
    { d: ellipse(54, 90, 40, 11) },
    { d: 'M14 90 Q16 96 22 98 M94 90 Q92 96 86 98 M22 98 Q54 110 86 98' },
    { d: ellipse(54, 91, 26, 6), role: 'soft' },
    { d: 'M58 90 h0.01 M58 90 q-7 -7 -10 -1 M58 90 q3 -9 9 -6', role: 'soft' },
    {
      d: `${ellipse(62, 138, 11, 12)} ${ellipse(84, 134, 11, 12)} ${ellipse(106, 131, 11, 12)} ${ellipse(127, 129, 10, 12)}`,
      role: 'accent',
    },
    {
      d: `${ellipse(62, 139, 6, 7)} ${ellipse(84, 135, 6, 7)} ${ellipse(106, 132, 6, 7)} ${ellipse(127, 130, 5, 7)}`,
    },
    {
      d: 'M52 146 C54 164 70 170 92 166 C116 162 132 154 136 138 M60 150 C66 160 80 160 92 158 C110 154 124 148 130 140',
    },
    { d: 'M62 126 l-1 -7 M84 122 v-7 M106 119 l1 -7 M127 117 l1 -7' },
    { d: 'M137 124 l5 -3 M138 134 l4 -3', role: 'ambient' },
    shadow(94, 180, 50),
  ],

  // A Baratie cook's cap, short and pleated with its far side hatched, and
  // his dark glasses folded on the counter beside it in his colour, the lenses
  // hatched: the one thing the show gives him that the other cooks lack. He
  // wears them to warn the kitchen about Krieg in episode 21.
  'carne': [
    { d: 'M36 136 V148 M96 136 V148 M36 148 A30 8 0 0 0 96 148' },
    { d: 'M36 136 A30 8 0 0 0 96 136' },
    { d: 'M36 136 C35 120 33 104 32 90 M96 136 C97 120 99 104 100 90' },
    {
      d: 'M32 90 C18 86 18 68 34 64 C40 52 92 52 98 64 C114 68 114 86 100 90 Q66 98 32 90',
    },
    {
      d: 'M48 140 C46 124 45 108 44 96 M66 142 V98 M84 140 C86 124 87 108 88 96',
      role: 'soft',
    },
    { d: 'M48 92 C44 82 46 70 52 64 M84 92 C88 82 86 70 80 64', role: 'soft' },
    { d: 'M90 108 l8 -6 M91 122 l7 -5 M103 76 l7 -5', role: 'ambient' },
    {
      d: `${ellipse(112, 166, 10, 7.5)} ${ellipse(138, 166, 10, 7.5)} M122 165 Q125 161 128 165`,
      role: 'accent',
    },
    { d: 'M102 164 L98 158 L132 154 M148 164 L150 158 L118 154', role: 'soft' },
    {
      d: 'M106 168 l7 -7 M111 171 l7 -7 M132 168 l7 -7 M137 171 l7 -7',
      role: 'ambient',
    },
    shadow(70, 180, 40),
    shadow(125, 180, 22),
  ],

  // The chair he breaks with one blow while Gin is still sitting in it: the
  // seat split in two and sagging, the break in his colour, the backrest
  // leaning off one half, the legs splayed and splinters flying. Episode 21.
  'patty': [
    { d: 'M30 124 L54 108 L84 120 L64 138 Z' },
    { d: 'M30 124 V130 L64 144 V138' },
    { d: 'M54 108 L48 52 M68 114 L64 58 M48 52 Q56 48 64 58' },
    { d: 'M50 70 L65 74 M51 84 L66 88', role: 'soft' },
    { d: 'M92 122 L124 108 L132 122 L100 140 Z' },
    { d: 'M100 140 V146 L132 128 V122' },
    {
      d: 'M84 120 L80 124 L83 127 L77 131 L80 134 L64 138 M92 122 L96 126 L92 130 L98 134 L94 137 L100 140',
      role: 'accent',
    },
    {
      d: 'M33 130 L22 174 M62 144 L66 178 M128 128 L140 172 M106 142 L104 178 M120 112 L124 150',
    },
    {
      d: 'M86 112 l-4 -8 M90 112 l3 -9 M88 140 l-3 8 M94 142 l4 6',
      role: 'soft',
    },
    { d: 'M106 144 l-1 30 M135 132 l10 36', role: 'ambient' },
    shadow(82, 184, 64),
  ],
  // One shoulder plate of his gilded armour in his colour, turned so its face
  // is away from us: the rivets along its ridge, the fur along its rim, its far
  // side hatched, and the two gun barrels that slide out beneath it, smoking.
  // He opens fire on the cooks with them in episode 22. The two plates lock
  // into the Daisenso from 28, in `eastBlueRedrawn`.
  'don-krieg': [
    { d: 'M20 112 C14 66 56 34 104 38 C138 42 152 74 146 102', role: 'accent' },
    { d: 'M20 112 C40 128 118 126 146 102', role: 'accent' },
    { d: 'M30 82 C40 62 62 50 84 46', role: 'soft' },
    { d: 'M34 104 C40 78 72 60 108 62 C124 64 136 72 140 84', role: 'soft' },
    {
      d: dots([
        [42, 90],
        [58, 74],
        [78, 66],
        [100, 63],
        [120, 68],
      ]),
      role: 'soft',
    },
    {
      d: 'M24 118 q4 6 9 3 q4 6 9 3 q4 6 9 3 q4 6 9 3 q4 6 9 2 q4 6 9 1 q4 5 9 0 q4 5 9 -2 q4 4 9 -3 q4 3 9 -5 q4 2 7 -7',
      role: 'soft',
    },
    { d: 'M134 54 l10 -6 M140 70 l10 -6 M142 86 l8 -5', role: 'ambient' },
    {
      d: 'M46 134 L126 142 M46 144 L124 152 M52 150 L126 166 M50 160 L122 176',
    },
    { d: `${ellipse(126, 147, 3, 5)} ${ellipse(125, 171, 3, 5.5)}` },
    {
      d: 'M132 140 q8 -6 12 2 q6 2 2 8 M132 166 q8 -4 12 2 q4 4 -2 8',
      role: 'ambient',
    },
    shadow(84, 186, 50),
  ],
  // His iron chest plate in 3/4, with rivets round the rim and the bars of
  // its face and the rim's thickness hatched. In front of it is one of his
  // small hand shields nearly edge on, its far side hatched, the pearl set in
  // it standing off its face in his colour. Behind them licks the fire he
  // lights when he first bleeds. Episode 25.
  'pearl': [
    {
      d: 'M30 58 C18 48 16 34 24 20 C26 30 32 34 36 32 C34 20 40 8 50 2 C50 14 54 20 60 22 C62 12 70 4 78 2 C74 14 80 24 84 34',
      role: 'soft',
    },
    { d: ellipse(58, 96, 40, 47) },
    { d: 'M58 49 C86 49 106 70 106 96 C106 122 86 143 58 143' },
    { d: ellipse(58, 96, 32, 38), role: 'soft' },
    {
      d: 'M58 58 V134 M26 96 H90 M42 70 C49 73 51 80 47 85 M74 70 C67 73 65 80 69 85 M42 122 C49 119 51 112 47 107 M74 122 C67 119 65 112 69 107',
      role: 'soft',
    },
    {
      d: dots([
        [58, 52],
        [22, 96],
        [32, 66],
        [84, 66],
        [32, 126],
      ]),
    },
    {
      d: 'M110 92 C100 92 96 120 96 142 C96 164 100 186 110 186 C120 186 124 164 124 142 C124 120 120 92 110 92 Z',
    },
    {
      d: 'M110 92 C114 98 117 120 117 142 C117 164 114 182 110 186',
      role: 'soft',
    },
    {
      d: 'M99 112 l7 -4 M97 130 l7 -4 M97 148 l7 -4 M98 166 l7 -4',
      role: 'ambient',
    },
    { d: 'M124 124 C146 124 146 160 124 160', role: 'accent' },
    { d: 'M131 131 Q136 134 137 140', role: 'soft' },
    shadow(84, 192, 52),
  ],
  // Yoru on the diagonal: the curved black blade hatched along its length,
  // the long crossguard forked at both ends in his colour, the wrapped grip and
  // the stone of the pommel. He draws it on Zoro in episode 24.
  'dracule-mihawk': [
    {
      d: 'M50.8 134 L129.4 68.1 Q142.6 55.8 146.2 43.3 Q149.7 61.5 138.6 79.1 L57.1 141.6 Z',
    },
    { d: 'M55.3 133.8 L131.1 70.1 Q141.6 60.2 144.4 49.6', role: 'soft' },
    {
      d: 'M63.5 135.1 L64.1 127.5 M72 128.5 L72.4 120.6 M80.6 121.9 L80.7 113.6 M89.1 115.3 L88.9 106.7 M97.7 108.7 L97.2 99.7 M106.3 102.1 L105.5 92.8 M114.8 95.5 L113.8 85.9 M123.4 88.9 L122 78.9 M132 82.3 L130.3 72 M139.9 75.1 L138.3 64.7 M145.4 67.5 L143.6 58.4',
      role: 'ambient',
    },
    {
      d: 'M32.8 112.6 L74.5 162.3 M28.7 116.1 L70.4 165.7 M32.8 112.6 Q32.1 106.2 33.7 102.5 M28.7 116.1 Q22.5 114.3 18.6 115.2 M74.5 162.3 Q80.7 164.1 84.6 163.2 M70.4 165.7 Q71.1 172.2 69.5 175.9 M32.8 112.6 L28.7 116.1 M74.5 162.3 L70.4 165.7',
      role: 'accent',
    },
    { d: 'M47.2 138.2 L16.9 163.6 M51.8 143.7 L21.5 169.1' },
    {
      d: 'M44.5 140.5 L44.9 149.5 L36.2 147.4 L36.7 156.4 L27.9 154.4 L28.4 163.4 L19.6 161.3 M49.1 146 L40.3 144 L40.8 152.9 L32 150.9 L32.5 159.9 L23.8 157.8 L24.3 166.8',
      role: 'soft',
    },
    { d: 'M9.5 174.5 A6.3 6.3 -40 1 0 19.2 166.4 A6.3 6.3 -40 1 0 9.5 174.5' },
    { d: 'M11.1 170.8 Q11.4 168.3 13.7 166.9', role: 'soft' },
    shadow(84, 184, 54),
  ],

  // A walled compound on the shore, a gate in the wall and a tower rising
  // behind it.
  'arlong-park': [
    { d: 'M14 150 V108 H146 V150' },
    {
      d: 'M14 108 v-8 h10 v8 M36 108 v-8 h10 v8 M114 108 v-8 h10 v8 M136 108 v-8 h10 v8',
    },
    { d: 'M62 108 V44 H98 V108' },
    { d: 'M56 44 H104 L80 20 Z', role: 'accent' },
    { d: 'M74 64 h12 v14 h-12z', role: 'soft' },
    { d: 'M68 150 V132 a12 12 0 0 1 24 0 V150' },
    { d: 'M4 150 H156', role: 'ambient' },
    ...SEA.slice(1),
  ],

  // His ushanka in 3/4: the crown with its seams, the fur front flap turned up
  // as the accent, an ear flap folded up at each side, the far flap and the far
  // side of the crown hatched. He wears it from his first scene at Arlong Park
  // in episode 31. The Kiribachi lies under it from 42, in `eastBlueRedrawn`.
  'arlong': [
    { d: 'M50 102 C46 72 62 54 84 54 C106 54 120 70 116 102' },
    {
      d: 'M84 54 C78 68 76 84 78 96 M104 60 C110 72 112 86 110 98',
      role: 'soft',
    },
    {
      d: 'M40 112 q0 -9 9 -10 q2 -9 11 -9 q4 -8 12 -6 q6 -6 13 -2 q7 -4 13 1 q7 -1 10 6 q7 1 8 8 q8 4 6 12 q6 6 0 14 Q80 150 42 140 q-6 -4 -4 -12 q-6 -6 2 -16 Z',
      role: 'accent',
    },
    {
      d: 'M52 116 l3 7 M64 112 l2 7 M78 110 l1 7 M92 110 v7 M106 112 l-1 7 M58 128 l2 6 M72 126 l1 6 M86 126 v6 M100 126 l-1 6',
      role: 'soft',
    },
    { d: 'M42 116 q-8 -2 -12 4 q-8 4 -6 12 q-6 8 0 14 q4 8 14 6 l6 -6' },
    { d: 'M30 132 l5 1 M30 142 l5 0', role: 'soft' },
    { d: 'M122 108 q8 0 10 8 q6 6 2 14 q2 8 -6 12' },
    { d: 'M124 116 l7 -3 M125 126 l7 -3 M125 136 l5 -2', role: 'ambient' },
    { d: 'M108 66 l7 -4 M112 78 l7 -4 M114 90 l6 -3', role: 'ambient' },
    shadow(80, 166, 54),
  ],
  // His octopus pot afloat: the rolled lip in 3/4, the dark opening hatched,
  // the squat body with the edge of its dark glaze running down, the far side
  // hatched, sitting in the water. He takes the Marine captain back to his
  // ship in it in episode 31 (ch. 69). His six swords are drawn from 39, in
  // `eastBlueRedrawn`.
  'hatchan': [
    { d: ellipse(80, 70, 44, 13), role: 'accent' },
    { d: 'M36 71 C36 82 56 88 80 88 C104 88 124 82 124 71' },
    { d: ellipse(80, 69, 27, 7) },
    {
      d: 'M60 66 L66 72 M68 63.5 L76 75 M78 62.5 L86 75.5 M88 63 L95 72.5 M97 65 L101 70',
      role: 'ambient',
    },
    { d: 'M42 85 C24 96 16 126 30 150 M118 85 C136 96 144 126 130 150' },
    {
      d: 'M27 106 Q31 116 36 108 Q40 122 46 112 Q51 126 58 114 Q63 128 70 116 Q76 129 82 117 Q88 128 94 115 Q100 126 106 113 Q111 123 116 111 Q121 119 126 108 Q130 114 133 105',
      role: 'soft',
    },
    {
      d: 'M126 116 L136 107 M126 127 L138 116 M125 138 L138 127 M126 147 L135 139',
      role: 'ambient',
    },
    { d: 'M14 149 Q80 166 146 149', role: 'ambient', dashed: true },
    ...SEA,
  ],
  // His karate gi laid out front on: short sleeves with their cuffs, the
  // lapels crossed, the far side hatched, and the black belt round the waist
  // as the accent, hatched as dark cloth, knotted with both ends hanging. He
  // wears it from his first scene in 31; Arlong calls him by name in 36.
  'kuroobi': [
    {
      d: 'M58 40 L28 50 L12 92 L34 100 L42 78 L44 156 H116 L118 78 L126 100 L148 92 L132 50 L102 40',
    },
    { d: 'M12 92 C16 88 32 94 34 100 M148 92 C144 88 128 94 126 100' },
    { d: 'M58 40 Q80 48 102 40 M58 40 L96 112 M102 40 L74 92' },
    { d: 'M66 42 L100 108 M80 124 L77 156', role: 'soft' },
    {
      d: 'M43 110 C60 115 100 115 117 110 V122 C100 127 60 127 43 122 Z',
      role: 'accent',
    },
    {
      d: 'M72 108 C76 104 86 104 90 108 L92 126 C86 130 74 130 70 126 Z M74 128 L64 168 L75 170 L80 130 M86 128 L98 166 L87 168 L82 130',
      role: 'accent',
    },
    {
      d: 'M48 122 l7 -10 M56 124 l7 -11 M62 125 l6 -10 M96 125 l6 -11 M104 124 l6 -11 M110 123 l6 -10 M72 122 l10 -12 M79 125 l9 -11 M67 158 l8 -4 M70 146 l7 -4 M89 148 l7 3 M93 160 l6 3',
      role: 'ambient',
    },
    {
      d: 'M126 60 l8 -5 M130 72 l8 -5 M110 140 l6 -6 M108 150 l6 -6',
      role: 'ambient',
    },
    shadow(80, 184, 48),
  ],
  // His striped vest, open down the front, and beside it the string of beads
  // that he wears with it. He brings Usopp to Arlong Park in it
  // in 33 (ch. 73), where Arlong first calls him by name. The water he spits
  // is drawn from 34, in `eastBlueRedrawn`.
  'chew': [
    ...CHEW_VEST,
    { d: CHEW_BEADS, role: 'accent' },
    shadow(124, 186, 30),
  ],
  // Her house among the mandarin trees in 3/4, the far wall and roof
  // hatched, the fruit as the accent. Usopp wakes up in it in 31 (ch. 70): "I
  // grow oranges here."
  'nojiko': [
    { d: 'M50 152 V108 H102 V152 M102 108 L122 96 V142 L102 152' },
    { d: 'M44 110 L76 82 L108 110 M76 82 L96 70 L128 96 L122 100' },
    {
      d: 'M106 116 l12 -7 M106 128 l12 -7 M106 140 l12 -7 M100 78 l10 -6 M110 84 l8 -5',
      role: 'ambient',
    },
    {
      d: 'M70 152 V128 H84 V152 M56 116 h10 v10 h-10 z M88 116 h10 v10 h-10 z',
      role: 'soft',
    },
    {
      d: `${circle(24, 112, 20)} ${circle(142, 124, 16)} M24 132 V154 M142 140 V154`,
    },
    {
      d: `${circle(16, 108, 3.5)} ${circle(32, 118, 3.5)} ${circle(26, 98, 3.5)} ${circle(136, 120, 3.5)} ${circle(148, 130, 3.5)}`,
      role: 'accent',
    },
    { d: 'M38 116 l5 -3 M36 126 l5 -3 M152 128 l4 -3', role: 'ambient' },
    { d: 'M2 154 H158', role: 'ambient' },
  ],
  // His peaked police cap, turned 3/4: the wide flat crown, the band with its
  // pattern, the black peak jutting forward and hatched, and the pinwheel stuck
  // in the top on its stick. He wears it from his first scene in 32 (ch. 71).
  // The pinwheel comes off the cap at 44, in `eastBlueRedrawn`.
  'genzo': [
    {
      d: 'M16 80 C26 64 112 60 144 72 C150 76 144 84 124 86 C92 90 38 90 16 80 Z',
    },
    { d: 'M18 84 C20 92 34 98 46 100 M142 78 C142 90 130 98 120 100' },
    { d: 'M46 100 C66 104 104 104 120 100 V118 C104 124 66 124 46 120 Z' },
    { d: 'M52 111 q5 -4 10 0 t10 0 t10 0 t10 0 t10 0', role: 'soft' },
    { d: 'M46 120 C32 124 16 134 14 142 C34 148 66 140 84 124' },
    {
      d: 'M22 142 l7 -7 M32 143 l9 -9 M44 141 l9 -9 M56 137 l9 -9 M68 132 l6 -6',
      role: 'ambient',
    },
    { d: 'M128 88 l8 -5 M124 98 l8 -5', role: 'ambient' },
    { d: 'M82 72 V40', role: 'soft' },
    {
      d: 'M83.9 36.7 L104.6 44.2 L92.6 51.4 L81.1 38.3 M81.3 37.9 L73.8 58.6 L66.6 46.6 L79.7 35.1 M80.1 35.3 L59.4 27.8 L71.4 20.6 L82.9 33.7 M82.7 34.1 L90.2 13.4 L97.4 25.4 L84.3 36.9',
      role: 'accent',
    },
    { d: circle(82, 36, 2.5), role: 'accent' },
    shadow(80, 158, 56),
  ],
  // A mandarin from her grove in 3/4, its leaf and stem, the far side
  // hatched, and her cigarette lying in front of it, burning: the ember and
  // the smoke as the accent. She first opens her door with one in her mouth in
  // 34 (ch. 77). Her Marine coat waits for Genzo's story in 35.
  'bell-mere': [
    {
      d: 'M22 118 C22 92 44 80 72 80 C100 80 122 92 122 118 C122 142 100 156 72 156 C44 156 22 142 22 118 Z',
    },
    { d: 'M72 80 V70 M66 82 q6 3 12 0', role: 'soft' },
    {
      d: 'M72 70 C82 56 100 54 112 60 C100 72 86 74 72 70 Z M76 69 C88 66 98 63 106 61',
      role: 'soft',
    },
    { d: 'M36 104 Q40 94 50 90', role: 'soft' },
    {
      d: 'M104 112 l10 -6 M102 126 l14 -8 M96 140 l14 -8 M88 150 l10 -6',
      role: 'ambient',
    },
    { d: 'M48 178 L126 160 L128 168 L50 186 Z' },
    { d: 'M112 163 L114 171', role: 'soft' },
    { d: 'M126 160 L128 168 M130 158 l2 -1', role: 'accent' },
    {
      d: 'M131 156 C125 140 141 130 133 114 C127 102 139 92 135 78 C133 70 139 62 137 54',
      role: 'accent',
    },
    shadow(78, 192, 60),
  ],
  // His Marine cap with the mouse ears it was cut into, in 3/4 with its back
  // hatched, sitting on two banded bundles of notes, the kind Arlong pays him
  // with in episode 31.
  'nezumi': [
    { d: 'M108 114.3 C111 91.2 92 76.5 74 76.5 C58 76.5 48 89.1 50 112.2' },
    {
      d: 'M108 114.3 C94 122.7 62 122.7 50 112.2 M109 105.9 C94 114.3 62 114.3 50 103.8',
      role: 'soft',
    },
    {
      d: 'M108 114.3 C116 120.6 120 126.9 114 130.1 C102 132.2 84 128 74 121.7',
    },
    {
      d: 'M100 82.1 A9.7 9.7 0 1 0 84.4 77.1 M69.6 77.1 A8.2 8.2 0 1 0 56.8 83.2',
      role: 'accent',
    },
    {
      d: 'M56 89.1 L51 86 M53 96.5 L49 93.3 M52 103.8 L49 101.7',
      role: 'ambient',
    },
    {
      d: 'M22 146 h96 v14 h-96 Z M118 146 l18 -14 v14 l-18 14 M22 146 l14 -10 M118 146 l4 -3',
    },
    {
      d: 'M36 132 h76 v14 M36 132 v14 M36 132 l16 -12 h10 M124 120 h4 l-16 12 M128 120 v14 l-16 12',
    },
    { d: 'M60 146 v14 M74 146 v14 M66 132 v14 M80 132 v14', role: 'soft' },
    { d: 'M26 153 H57 M77 153 H114 M40 139 H63 M83 139 H108', role: 'soft' },
    {
      d: 'M118 156 l12 -9.3 M118 151.5 l12 -9.3 M112 142 l10 -7.8 M112 137.5 l10 -7.8',
      role: 'ambient',
    },
    shadow(80, 174, 64),
  ],

  // The top of his head breaking the sea, his two horns curving up in his
  // colour, and the tow line running taut to the small boat he is made to
  // pull to Arlong Park once Luffy and Sanji have beaten him (ep. 33).
  'momoo': [
    { d: 'M72 158 C72 136 86 124 102 124 C118 124 132 136 132 158' },
    { d: 'M82 132 C70 128 62 116 62 98 C68 110 76 118 88 126', role: 'accent' },
    {
      d: 'M122 132 C134 128 142 116 142 98 C136 110 128 118 116 126',
      role: 'accent',
    },
    { d: 'M60 158 q6 -8 14 -4 M130 154 q8 -4 14 4', role: 'ambient' },
    { d: 'M76 150 L36 140' },
    { d: 'M8 146 H40 L34 158 H14 Z' },
    { d: 'M22 146 V112 M22 114 h14 v26 h-14', role: 'soft' },
    ...SEA,
  ],
  // The town from the sea: its roofs and a low arcade on the quay, and above
  // them the scaffold tower of the execution platform in 3/4, cross-braced,
  // its far face hatched. Roger dies on it at the start of episode 1.
  'loguetown': [
    { d: 'M65 128 L72 44 M95 128 L88 44 M103 124 L98 39', role: 'accent' },
    {
      d: 'M68 44 H92 l10 -5 H78 Z M68 44 v4 H92 v-4 M92 48 l10 -5 v-4',
      role: 'accent',
    },
    {
      d: 'M65 128 L92.7 100 M95 128 L67.3 100 M67.3 100 L90.3 72 M92.7 100 L69.7 72 M67.3 100 H92.7 M69.7 72 L88 44 M90.3 72 L72 44 M69.7 72 H90.3',
      role: 'soft',
    },
    {
      d: 'M96 115.4 l7 -6.5 M95 103.6 l7 -6.5 M94 91.9 l7 -6.5 M93 80.1 l7 -6.5 M92 68.4 l7 -6.5 M91.1 56.6 l7 -6.5',
      role: 'ambient',
    },
    {
      d: `${house(8, 22, 126, 112)} ${house(34, 18, 130, 118)} ${house(106, 20, 124, 110)} ${house(132, 22, 130, 118)}`,
    },
    { d: 'M56 150 V130 H104 V150 M54 130 H106' },
    {
      d: 'M62 150 V140 Q65 135 68 140 V150 M74 150 V140 Q77 135 80 140 V150 M86 150 V140 Q89 135 92 140 V150 M98 150 V140',
      role: 'soft',
    },
    { d: 'M0 150 H160', role: 'ambient' },
    ...SEA,
  ],
  // His two cigars lit together, laid crossed in 3/4: banded at the head,
  // hatched underneath, burning to ash at the other end, with smoke curling
  // off both. He has them in his mouth when he is introduced in episode 49.
  // His jitte joins them from 52 (ch. 98), in `eastBlueRedrawn`.
  'smoker': [
    {
      d: 'M42.8 163 L127.3 111.9 M33 146.7 L117.5 95.7 M42.8 163 A9.5 7.6 58.9 0 1 33 146.7',
    },
    {
      d: 'M129 148.7 L98.9 130.5 M78.2 118 L44.5 97.7 M119.2 165 L80.5 141.6 M59.8 129.1 L34.7 113.9 M129 148.7 A9.5 7.6 -58.9 0 1 119.2 165',
    },
    {
      d: 'M53.4 156.6 A9.5 3.8 58.9 0 0 43.6 140.3 M61.1 152 A9.5 3.8 58.9 0 0 51.2 135.7 M118.4 142.3 A9.5 3.8 -58.9 0 1 108.6 158.6 M110.8 137.7 A9.5 3.8 -58.9 0 1 100.9 154',
      role: 'soft',
    },
    {
      d: 'M73.3 144 L75.2 137.3 M83.4 137.9 L85.3 131.2 M93.5 131.8 L95.3 125.1 M103.5 125.7 L105.4 119.1 M113.6 119.6 L115.5 113 M92.5 148.3 L90.7 141.6 M54.1 125.1 L52.3 118.4 M46.5 120.5 L44.6 113.8',
      role: 'ambient',
    },
    {
      d: 'M127.3 111.9 L135.5 105.9 L136.4 100.9 L132.5 98.8 L132.7 93.7 L127.1 91 L117.5 95.7 M127.3 111.9 A9.5 3.8 58.9 0 0 117.5 95.7',
      role: 'accent',
    },
    {
      d: 'M44.5 97.7 L35.4 93.3 L30.5 94.8 L30.5 99.2 L25.9 101.4 L26.1 107.6 L34.7 113.9 M44.5 97.7 A9.5 3.8 -58.9 0 1 34.7 113.9',
      role: 'accent',
    },
    {
      d: 'M135.9 90.3 C146.9 78.3 128.9 68.3 137.9 55.3 C144.9 45.3 133.9 36.3 139.9 30.3',
      role: 'soft',
    },
    {
      d: 'M26.1 92.3 C15.1 80.3 33.1 70.3 24.1 57.3 C17.1 47.3 28.1 38.3 22.1 32.3',
      role: 'soft',
    },
    shadow(80, 174, 52),
  ],
  // Shigure in its sheath, laid on the diagonal: the wrapped grip, the
  // four-petalled guard in 3/4, the sheath's dark upper half hatched and its
  // pale lower half plain. Below it on the table lie her glasses, folded, in
  // her colour. She collects the sword from the arms shop in episode 49.
  'tashigi': [
    {
      d: 'M14 54 L38.1 69.1 M19.4 45.4 L43.5 60.5 M14 54 A5.1 2.5 122.1 0 1 19.4 45.4',
    },
    {
      d: 'M16 55.2 L24.3 48.5 M21.4 46.6 L18.9 57.1 M19.9 57.7 L28.2 50.9 M25.3 49.1 L22.8 59.5 M23.8 60.1 L32.1 53.4 M29.2 51.5 L26.7 62 M27.7 62.5 L36 55.8 M33 54 L30.6 64.4 M31.5 65 L39.9 58.2 M36.9 56.4 L34.5 66.8 M35.4 67.4 L43.8 60.7 M40.8 58.8 L38.4 69.3',
      role: 'soft',
    },
    {
      d: 'M37.3 69.1 C29.1 74.4 41.8 82.3 43 72.7 C44.2 81.1 57 60.8 48.9 63.4 C57 58 44.4 50.1 43.1 59.7 C41.9 51.3 29.2 71.7 37.3 69.1 Z',
    },
    {
      d: 'M42 73.2 A6.5 2.6 122.1 0 0 48.9 62.2 M42 73.2 L144.5 137.5 M48.9 62.2 L151.5 126.5 M144.5 137.5 A6.5 3.9 122.1 0 0 151.5 126.5',
    },
    {
      d: 'M88.3 102.2 A6.5 2.6 122.1 0 0 95.2 91.2 M135.2 131.6 A6.5 2.6 122.1 0 0 142.1 120.6',
      role: 'soft',
    },
    {
      d: 'M46.4 75.2 L56.4 67.7 M51.9 78.6 L61.8 71.1 M57.3 82.1 L67.3 74.5 M62.8 85.5 L72.7 77.9 M68.2 88.9 L78.2 81.3 M73.7 92.3 L83.6 84.8 M79.1 95.7 L89.1 88.2 M84.6 99.2 L94.6 91.6',
      role: 'ambient',
    },
    {
      d: 'M26.7 152.8 L51.1 146.4 L53.8 160 L30.5 165 Z M63.6 145.1 L88 138.8 L90.8 153.6 L66.2 158.7 Z M51.7 151.4 Q57.3 145.8 64 148.9',
      role: 'accent',
    },
    { d: 'M26.8 154 L60.3 137.9 M88.2 140 L54.9 134.7', role: 'soft' },
    shadow(84, 176, 60),
  ],
  // A hooded cloak seen from behind in the Loguetown storm, its right side
  // thrown out by the gust and hatched underneath, folds down its length, the
  // rain slanting past and the gust itself in green. He stands in it when the
  // wind frees Luffy in episode 53.
  'monkey-d-dragon': [
    { d: 'M54 74 C48 56 54 38 70 36 C84 36 92 48 90 64 C89 68 88 71 86 74' },
    { d: 'M70 36 C68 48 68 60 71 72', role: 'soft' },
    {
      d: 'M54 74 C46 77 40 82 38 90 C36 120 34 150 32 180 C52 184 72 182 90 178',
    },
    {
      d: 'M86 74 C94 76 100 80 104 84 C120 82 136 76 154 66 C150 86 152 100 158 110 C144 116 136 128 132 142 C116 150 102 162 90 178',
    },
    {
      d: 'M52 88 C50 120 48 150 48 180 M70 82 C72 114 74 146 70 180 M104 84 C112 98 116 112 118 128',
      role: 'soft',
    },
    {
      d: 'M140 98 l12 -8 M134 110 l12 -8 M126 124 l10 -7 M116 138 l10 -7',
      role: 'ambient',
    },
    {
      d: 'M2 96 C14 88 24 100 34 92 M4 124 C16 118 24 128 34 122',
      role: 'accent',
    },
    { d: 'M96 44 C110 36 124 46 140 40 C148 38 152 32 150 26', role: 'accent' },
    {
      d: 'M24 20 l-5 14 M42 36 l-5 14 M118 14 l-5 14 M136 96 l-5 14 M150 136 l-5 14 M22 140 l-5 14 M140 160 l-5 14',
      role: 'ambient',
    },
    shadow(66, 186, 42),
  ],

  // Its back arching out of the sea, the striped fin running along the ridge
  // and the far side hatched, a second fin standing off to the right, and the
  // bandit's rowboat tipping beside it. It eats the boat whole in episode 4;
  // it is only named in episode 504, where Luffy knocks it out.
  'lord-of-the-coast': [
    { d: 'M42 156 C44 110 66 80 94 80 C118 80 132 110 133 156' },
    { d: 'M62 156 C63 122 76 100 94 100 C110 100 120 124 121 156' },
    {
      d: 'M44 137.7 L32.2 135.6 C34.1 130 38.6 111.8 43.9 102.5 C49.2 93.1 56.2 84.9 64 79.5 C71.8 74.1 82.3 70.4 90.9 70.1 C99.4 69.8 108.8 72.9 115.4 77.8 C122.1 82.6 127 90.4 130.9 99 C134.8 107.6 137.5 124.2 138.8 129.2 L130.9 130.4',
      role: 'accent',
    },
    {
      d: 'M45.9 123.2 L40.1 113.5 M51.9 108.5 L47.8 98.7 M59.6 96.4 L57.6 86.6 M68.9 87.2 L69.4 77.7 M79.6 81.2 L82.7 72.5 M91.4 78.6 L96.8 71.6 M102.1 79.7 L109 75.2 M111.2 84.4 L119.1 82.9 M118.8 92.4 L126.8 93.6 M125 103.3 L132.4 106.8 M129.6 116.8 L136.3 122.2',
      role: 'soft',
    },
    {
      d: 'M101.9 100.4 L102.3 93.5 M107.8 105 L110.6 98.6 M112.7 111.8 L116.9 106.2 M116.6 120.6 L121.6 115.5 M119.6 131 L125.1 126.3 M121.5 142.9 L127.5 138.4',
      role: 'ambient',
    },
    {
      d: 'M138 156 C140 140 146 124 156 112 C155 128 154 142 156 156',
      role: 'accent',
    },
    { d: 'M142 146 L153 140 M145 136 L154 128', role: 'soft' },
    {
      d: 'M5.4 143.2 Q20 143.7 39 149.9 Q25.1 153.8 5.4 143.2 Z M5.4 143.2 L5.8 151.7 Q19.4 158.2 30.8 155.6 L39 149.9 M23.4 145.9 L22.6 155',
    },
    ...SEA,
  ],
} satisfies Drawings

/**
 * Zoro's third sword as each redrawing starts it: the sheath without its plain
 * guard (`sheath`'s fourth stroke), which each new sword draws its own.
 */
const THIRD_SHEATH = sheath(22, 'soft').filter((_, index) => index !== 3)

/** Wado Ichimonji in the middle, the one sword Zoro never loses. */
const WADO = sheath(0, 'accent')

/** The ground under Zoro's swords, however many of them there are. */
const ZORO_SHADOW = shadow(80, 176, 40)

/** His three swords, from episode 3 and again whenever he is three again. */
const ZORO_THREE: Stroke[] = [
  ...sheath(-22, 'soft'),
  ...WADO,
  ...sheath(22, 'soft'),
  ZORO_SHADOW,
]

/** Wado and the sword on its left, when the third has gone. */
const ZORO_TWO: Stroke[] = [...sheath(-22, 'soft'), ...WADO, ZORO_SHADOW]

/** Buggy's crown, drawn upright and tipped onto the cannonball as one piece. */
const CROWN_TILT = 'rotate(-13 70 91.5)'

/** Koby's bandanna, drawn at ground size and lifted, larger, over the bucket. */
const BANDANNA_LIFT = 'translate(-1 -120) scale(1.35)'

/** His bucket, moved aside from where the mop stood to sit under the bandanna. */
const ASIDE = 'translate(10 0)'
const MOVED_BUCKET = KOBY_BUCKET.map((s) => ({ ...s, transform: ASIDE }))

/** Nami's chart, drawn at full size and set down, smaller, at the staff's foot. */
const CHART_AT_FOOT = 'translate(90 113) scale(0.42)'
const SMALL_CHART: Stroke[] = [
  ...NAMI_CHART_BODY,
  { d: NAMI_COAST, role: 'soft' } satisfies Stroke,
].map((s) => ({ ...s, transform: CHART_AT_FOOT }))

/**
 * The Grow Up Sorcery Clima-Tact leant across the box, without its knobs:
 * the shafts, the wider grip, collars at the grip and both necks, the grip's
 * seam and the far side hatched. 776 and 878 hold it; only the knobs' ink
 * and Zeus change.
 */
const SORCERY_STAFF: Stroke[] = [
  {
    d: 'M35.3 159.6 L61.1 130.1 M42.1 165.5 L67.9 136 M82.1 106 L107.9 76.5 M88.9 111.9 L114.7 82.4',
  },
  { d: 'M61.6 126.5 L78.6 107 M71.4 135 L88.4 115.5' },
  {
    d: 'M58.5 127.8 Q61.1 137 70.5 138.3 M60.4 125.5 Q63.1 134.7 72.5 136 M77.5 106 Q80.1 115.1 89.6 116.5 M79.5 103.7 Q82.1 112.9 91.5 114.2',
  },
  {
    d: 'M37.3 154.3 Q38.8 162.5 47.1 162.9 M102.9 79.1 Q104.4 87.3 112.7 87.7',
  },
  { d: 'M67.8 129.3 L82.2 112.7', role: 'soft' },
  {
    d: 'M46.7 159.8 L46.2 156 M53.9 151.5 L53.5 147.7 M61.2 143.3 L60.7 139.4 M90.6 109.5 L90.2 105.6 M97.9 101.2 L97.4 97.3 M105.1 92.9 L104.6 89 M41.8 166.1 L38.4 166.9 M41.7 170.2 L38.3 169.2 M39.5 173.8 L37.1 171.2 M123.8 72.1 L120.4 72.9 M123.7 76.2 L120.3 75.2 M121.5 79.8 L119.1 77.2',
    role: 'ambient',
  },
]

/** The Sorcery Clima-Tact's two round knobs, the ends that grow. */
const SORCERY_KNOBS = `${circle(34, 168, 8.5)} ${circle(116, 74, 8.5)}`

/**
 * The first Clima-Tact on the same line as the later staff: three hollow
 * poles pushed end to end, the open mouth of the top one, the bottom rim,
 * a highlight down each pole and the far side hatched, with the two sleeves
 * where the pieces join as its mark. The first Sorcery model of 517 looks
 * the same, three plain parts and no dials, so it returns there.
 */
const CLIMA_TACT: Stroke[] = [
  {
    d: 'M30.6 165 L56.1 135.8 M59.7 131.6 L83.5 104.4 M87.1 100.3 L112.6 71 M37.4 171 L62.9 141.7 M66.5 137.6 L90.3 110.4 M93.9 106.2 L119.4 77',
  },
  { d: 'M112.6 71 Q118.3 71.4 119.4 77 Q113.7 76.6 112.6 71' },
  { d: 'M30.6 165 Q30.6 171.9 37.4 171' },
  {
    d: 'M36.7 162.1 L57.2 138.6 M63 132 L84.3 107.6 M90 101 L110.5 77.5',
    role: 'soft',
  },
  {
    d: 'M43.5 163 L43 159.1 M50.1 155.5 L49.6 151.6 M56.6 148 L56.1 144.1 M71.4 131.1 L70.9 127.2 M77.9 123.6 L77.4 119.7 M84.5 116 L84 112.1 M98.4 100.1 L97.9 96.2 M105 92.5 L104.5 88.6 M111.6 85 L111.1 81.1',
    role: 'ambient',
  },
  {
    d: 'M55 134.8 Q55.8 143 64.1 142.7 M58.6 130.7 Q59.4 138.9 67.7 138.5 M55 134.8 L58.6 130.7 M64.1 142.7 L67.7 138.5 M82.3 103.5 Q83.1 111.7 91.4 111.3 M85.9 99.3 Q86.7 107.5 95 107.2 M82.3 103.5 L85.9 99.3 M91.4 111.3 L95 107.2',
    role: 'accent',
  },
  ...SMALL_CHART,
  shadow(80, 188, 56),
]

/** The Grow Up staff with its knobs in her colour, and no Zeus. */
const GROW_UP: Stroke[] = [
  ...SORCERY_STAFF,
  { d: SORCERY_KNOBS, role: 'accent' },
  ...SMALL_CHART,
  shadow(80, 188, 56),
]

/**
 * The Grow Up staff with Zeus over its top knob, his bolt in her colour:
 * from 878, and again once he is back in the staff.
 */
const SORCERY_WITH_ZEUS: Stroke[] = [
  ...SORCERY_STAFF,
  { d: SORCERY_KNOBS },
  {
    d: 'M69 52.5 C59.7 52.5 58.6 38.6 69 36.3 C67.8 23.5 84.1 20 88.7 28.1 C92.2 14.2 114.2 14.2 116.6 29.3 C128.2 25.8 137.4 37.4 129.3 47.9 C134 57.1 120 60.6 115.4 54.8 C108.4 61.8 94.5 61.8 88.7 56 C81.8 60.6 71.3 59.5 69 52.5 Z',
  },
  {
    d: 'M72.5 47.9 C81.8 52.5 92.2 50.2 98 45.5 C105 51.3 116.6 51.3 125.8 44.4',
    role: 'soft',
  },
  { d: 'M70 58 L58 76 H68 L54 98', role: 'accent' },
  ...SMALL_CHART,
  shadow(80, 188, 56),
]

/** Luffy's hat, smaller, hung by its string from the haft of the Elbaf axe. */
const LUFFY_HUNG = 'translate(72 92) scale(0.46) rotate(-8 80 110)'

/** The records of this stretch drawn again, from the episode the story changes them. */
/** The grog on the counter, kept behind whichever sword Shanks wears. */
const SHANKS_GROG: Stroke[] = eastBlueArt.shanks.slice(0, 9)

/** Arlong's ushanka, without the shadow its first drawing throws. */
const ARLONG_USHANKA: Stroke[] = eastBlueArt.arlong.slice(0, -1)

/** Smoker's two lit cigars, crossed, with their smoke, without their shadow. */
const SMOKER_CIGARS: Stroke[] = eastBlueArt.smoker.slice(0, -1)

/**
 * The near end of Smoker's jitte, lying under the cigars: the wrapped grip
 * with its rounded butt, and the hook, from its knob on the shaft out towards
 * the reader and along the shaft. Whole or broken, this end stays.
 */
const JITTE_GRIP: Stroke[] = [
  { d: 'M42 170.5 L10 170.5 Q5 170.5 5 175.5 Q5 180.5 10 180.5 L42 180.5 Z' },
  {
    d: 'M11 170.5 L15.8 180.5 L20.6 170.5 L25.4 180.5 L30.2 170.5 L35 180.5 L39.8 170.5',
    role: 'soft',
  },
  {
    d: 'M42.6 175.5 A4.4 4.4 0 1 1 51.4 175.5 A4.4 4.4 0 1 1 42.6 175.5 M45 179.7 L45 185 Q45 189 49 189 L84 189 Q87.5 189 87.5 186 M49 179.7 L49 182.5 Q49 185 52 185 L84 185',
  },
]

/** The jitte whole, its Seastone tip hatched, under the cigars. */
const SMOKER_JITTE: Stroke[] = [
  ...SMOKER_CIGARS,
  ...JITTE_GRIP,
  {
    d: 'M51.4 171.7 L152 171.7 M51.4 179.3 L152 179.3 M150.2 175.5 A1.8 3.8 0 1 1 153.8 175.5 A1.8 3.8 0 1 1 150.2 175.5',
  },
  { d: 'M130 171.7 L130 179.3', role: 'soft' },
  {
    d: 'M134 179.3 L136.5 171.7 M139 179.3 L141.5 171.7 M144 179.3 L146.5 171.7 M149 179.3 L151.5 171.7',
    role: 'ambient',
  },
  shadow(80, 195, 64),
]

/** The jitte snapped in two, the tip half fallen askew, crumbs at the break. */
const SMOKER_JITTE_BROKEN: Stroke[] = [
  ...SMOKER_CIGARS,
  ...JITTE_GRIP,
  {
    d: 'M51.4 171.7 L94 171.7 L91.5 174.1 L95.2 175.9 L92.2 177.5 L94.6 179.3 L51.4 179.3',
  },
  {
    d: 'M155.3 167.3 L104.6 172.6 L107.3 174.7 L103.8 176.9 L107 178.2 L104.8 180.2 L156.1 174.8 M153.9 171.2 A1.8 3.8 -6 1 1 157.5 170.9 A1.8 3.8 -6 1 1 153.9 171.2',
  },
  { d: 'M133.4 169.6 L134.2 177.1', role: 'soft' },
  {
    d: 'M138.2 176.7 L139.9 168.9 M143.2 176.2 L144.9 168.4 M148.1 175.7 L149.8 167.8 M153.1 175.1 L154.8 167.3',
    role: 'ambient',
  },
  {
    d: 'M97 182.5 h0.01 M101.5 185 h0.01 M105 182 h0.01 M99 188.5 h0.01',
    role: 'soft',
  },
  shadow(80, 195, 64),
]

/** Gin's plate of rice, set back on the table to make room in front of it. */
const GIN_RICE_SET_BACK: Stroke[] = eastBlueArt.gin
  .slice(0, -1)
  .map((stroke) => ({ ...stroke, transform: 'translate(0 -26)' }))

/** Moves strokes as one piece, after any transform they already carry. */
function moved(strokes: Stroke[], by: string): Stroke[] {
  return strokes.map((stroke) => {
    return {
      ...stroke,
      transform:
        stroke.transform === undefined ? by : `${by} ${stroke.transform}`,
    }
  })
}

/** Hatchan's six swords held out, from 39. */
const HATCHAN_SWORDS: Stroke[] = [
  {
    d: 'M48.2 39.4 C82.5 33.6 108.8 24.1 130.8 11 C108.3 21.1 81.5 28.1 47.3 34.3 M42.2 64.7 C78.4 61.1 106.5 53.3 130.4 41.2 C106.2 50.3 77.8 55.5 41.6 59.5 M38.1 90 C76.1 88.8 105.9 83 131.5 72.1 C105.8 80 75.9 83.2 37.9 84.8 M37.9 115.2 C75.9 116.8 106 113 132.4 103.9 C106.1 110 76.1 111.2 38.1 110 M41.6 140.5 C77.8 144.5 107 142.7 132.8 135.8 C107.3 139.7 78.4 138.9 42.2 135.3 M47.3 165.7 C81.5 171.9 109.5 172 134.7 167.2 C110 169 82.5 166.4 48.2 160.6',
  },
  {
    d: 'M55.6 35.3 C81.9 30.4 105 23.3 124 15 M49.8 61.1 C78.1 57.9 102.6 52.3 123 44.9 M46 86.9 C76 85.6 101.8 81.7 123.6 75.4 M46 112.7 C76 113.6 102.1 111.5 124.3 106.6 M49.9 138.5 C78.1 141.3 103.3 140.9 124.8 137.9 M55.6 164.3 C82.1 168.8 106.1 170 126.9 168.7',
    role: 'soft',
  },
  {
    d: 'M45.2 39.8 L31.4 42.2 L30.6 37.5 L44.4 35 M39.2 64.8 L25.2 66.3 L24.7 61.5 L38.7 60 M35.1 89.9 L21.1 90.4 L20.9 85.6 L34.9 85.1 M34.9 114.9 L20.9 114.4 L21.1 109.6 L35.1 110.1 M38.7 140 L24.7 138.5 L25.2 133.7 L39.2 135.2 M44.4 165 L30.6 162.5 L31.4 157.8 L45.2 160.2',
  },
  {
    d: 'M41.2 40.5 L36.5 36.4 M36.3 41.3 L31.6 37.3 M35.2 65.2 L30.7 60.9 M30.2 65.8 L25.7 61.4 M31.1 90 L26.9 85.4 M26.1 90.2 L21.9 85.5 M30.9 114.8 L27.1 109.8 M25.9 114.6 L22.1 109.7 M34.7 139.5 L31.2 134.3 M29.7 139 L26.2 133.8 M40.4 164.3 L37.3 158.9 M35.5 163.4 L32.4 158',
    role: 'soft',
  },
  {
    d: 'M47.3 46.1 A9 3.6 80 1 0 44.2 28.4 A9 3.6 80 1 0 47.3 46.1 M40.9 71.3 A9 3.6 84 1 0 39 53.4 A9 3.6 84 1 0 40.9 71.3 M36.3 96.4 A9 3.6 88 1 0 35.7 78.4 A9 3.6 88 1 0 36.3 96.4 M35.7 121.6 A9 3.6 92 1 0 36.3 103.6 A9 3.6 92 1 0 35.7 121.6 M39 146.6 A9 3.6 96 1 0 40.9 128.7 A9 3.6 96 1 0 39 146.6 M44.2 171.6 A9 3.6 100 1 0 47.3 153.9 A9 3.6 100 1 0 44.2 171.6',
    role: 'accent',
  },
  shadow(84, 186, 48),
]

/** His six hilts alone: the grips, their wrapping and the round guards. */
const HATCHAN_HILTS = HATCHAN_SWORDS.slice(2, 5)

/** Genzo's peaked cap, and the pinwheel it wears until 44. */
const GENZO_CAP: Stroke[] = eastBlueArt.genzo.slice(0, 7)
const GENZO_PINWHEEL: Stroke[] = eastBlueArt.genzo.slice(8, 10)

/** Jango's ring on its string, and his heart-shaped glasses. */
const JANGO_RING: Stroke[] = eastBlueArt.jango.slice(0, 5)
const JANGO_GLASSES: Stroke[] = eastBlueArt.jango.slice(5, 10)

/** Chouchou's shop: its blank plank sign, and the ground floor under it. */
const CHOUCHOU_SIGN: Stroke[] = eastBlueArt.chouchou.slice(3, 6)
const CHOUCHOU_FRONT: Stroke[] = eastBlueArt.chouchou.slice(6, 13)

/** Krieg's gilded shoulder plate, its fur and rivets, without the guns. */
const KRIEG_PLATE: Stroke[] = eastBlueArt['don-krieg'].slice(0, 7)

/** Fullbody's iron knuckle and its shadow, without the soup. */
const FULLBODY_KNUCKLE: Stroke[] = eastBlueArt.fullbody.slice(4)

/** A knuckle stroke as the left hand's: mirrored, smaller, set back, plain. */
function leftHand(stroke: Stroke): Stroke {
  return { d: stroke.d, transform: 'translate(150 -46) scale(-0.85 0.85)' }
}

/** The left hand's knuckle, behind the right's. */
const LEFT_KNUCKLE: Stroke[] = FULLBODY_KNUCKLE.slice(0, 4).map((stroke) =>
  leftHand(stroke),
)

export const eastBlueRedrawn: Redrawings = {
  // The mop gone, the bucket still there: a patterned bandanna knotted into a
  // ring, its tails hanging from the knot, and the round glasses pushed up on
  // its front, the way Garp's trainee wears them, lifted and enlarged over
  // the bucket. He comes back trained at Water 7 in 314 (ch. 432).
  'koby': [
    {
      episode: 314,
      chapter: 432,
      value: [
        {
          d: ellipse(54, 140, 40, 13),
          role: 'accent',
          transform: BANDANNA_LIFT,
        },
        {
          d: 'M14 140 V160 A40 13 0 0 0 94 160 V140',
          role: 'accent',
          transform: BANDANNA_LIFT,
        },
        {
          d: 'M14 143 q-7 3 -2 8 q5 -1 2 -8 M12 150 C5 158 5 170 9 178 M14 151 C11 162 15 172 19 178',
          role: 'accent',
          transform: BANDANNA_LIFT,
        },
        {
          d: `${circle(40, 153, 11)} ${circle(68, 153, 11)}`,
          transform: BANDANNA_LIFT,
        },
        {
          d: 'M51 151 q3 -3 6 0 M29 151 L16 142 M79 151 L92 142',
          transform: BANDANNA_LIFT,
        },
        {
          d: dots([
            [21, 162],
            [27, 166],
            [54, 169],
            [81, 166],
            [87, 162],
          ]),
          role: 'soft',
          transform: BANDANNA_LIFT,
        },
        ...MOVED_BUCKET,
        shadow(86, 182, 56),
      ],
    },
  ],
  'roronoa-zoro': [
    // His three swords in their sheaths, the middle one in green, each guard
    // seen as an oval across its sheath and each grip wrapped in diamonds.
    // Luffy brings all three from the base, and Zoro says he uses three, on
    // the last page of chapter 5; episode 3 is the first after the threshold
    // that shows them.
    { episode: 3, chapter: 5, value: ZORO_THREE },
    // Wado alone: Mihawk breaks the other two at the Baratie in 24 (ch. 51),
    // and Zoro sheathes the one sword he has left.
    { episode: 24, chapter: 51, value: [...WADO, ZORO_SHADOW] },
    // Three again: the Loguetown sword shop gives him Kitetsu and Yubashiri
    // in 49 (ch. 97).
    { episode: 49, chapter: 97, value: ZORO_THREE },
    // Two: Shu rusts Yubashiri to nothing on Enies Lobby in 309 (ch. 426),
    // and the third place stays empty until Thriller Bark.
    { episode: 309, chapter: 426, value: ZORO_TWO },
    // Shusui: the third sword now Ryuma's black blade, its guard an octofoil
    // and its lacquered sheath hatched dark. Ryuma throws it to Zoro at the
    // end of 362 (ch. 467).
    {
      episode: 362,
      chapter: 467,
      value: [
        ...sheath(-22, 'soft'),
        ...sheath(0, 'accent'),
        ...THIRD_SHEATH,
        {
          d: 'M98.4 129.6 Q103.1 128.4 97.3 124.8 Q97.6 120.9 91.5 120.4 Q87.2 116 84.5 118.9 Q78 116.7 80.2 121.2 Q75.5 122.4 81.3 126 Q81 129.9 87.1 130.4 Q91.4 134.8 94.1 131.9 Q100.6 134.1 98.4 129.6 Z',
        },
        {
          d: 'M92 113.2 L98.4 111.3 M95.8 104.8 L102.1 102.9 M99.5 96.4 L105.9 94.5 M103.3 88 L109.6 86.1 M107 79.6 L113.4 77.7 M110.8 71.2 L117.1 69.3 M114.5 62.8 L120.9 60.9',
          role: 'ambient',
        },
        shadow(80, 176, 40),
      ],
    },
    // Two again: Gyukimaru steals Shusui and takes it back to Ryuma's grave
    // in 932 (ch. 936), and Zoro goes without until Enma.
    { episode: 932, chapter: 936, value: ZORO_TWO },
    // Enma: the third sword now Oden's, Shusui left at Ryuma's grave; a
    // trefoil guard and a trefoil cap past a ring at the sheath's end, the
    // sageo tied at the mouth with its two tufted cords hanging free.
    // Hitetsu hands it to Zoro in 956 (ch. 955).
    {
      episode: 956,
      chapter: 955,
      value: [
        ...sheath(-22, 'soft'),
        ...sheath(0, 'accent'),
        ...THIRD_SHEATH,
        {
          d: 'M91 121.6 C91.3 109.7 73.9 122.1 85.2 125.8 C74.9 131.4 94.3 140.5 91.7 128.8 C101.8 135.1 99.6 113.6 91 121.6 Z',
        },
        {
          d: 'M125.6 44.1 C125.5 49.2 132.9 43.9 128 42.4 C132.5 40 124.2 36.1 125.3 41.1 C121 38.4 121.9 47.6 125.6 44.1 Z M118.5 51.2 L125.1 54',
        },
        { d: 'M90 115.4 l6.6 2.6 M102 88.6 l6.6 2.6', role: 'soft' },
        {
          d: 'M96.6 118.9 C106.6 120.9 116.6 130.9 118.6 144.9 M96.6 118.9 C102.6 124.9 106.6 136.9 108.6 152.9',
        },
        {
          d: 'M118.6 144.9 l-2.4 7 M118.6 144.9 l0.6 7.6 M118.6 144.9 l3.2 6.8 M108.6 152.9 l-2.4 7 M108.6 152.9 l0.6 7.6 M108.6 152.9 l3.2 6.8',
          role: 'soft',
        },
        shadow(80, 176, 40),
      ],
    },
  ],
  // The cannonball at the mouth of his cannon with a crown set on it askew:
  // the ball's top runs under the band, the five points end in knobs, the
  // band's far side is hatched, and the bore shows dark behind the points.
  // The world names him one of the new Four Emperors in 1080 (ch. 1053).
  'buggy': [
    {
      episode: 1080,
      chapter: 1053,
      value: [
        ...BUGGY_CANNON,
        { d: 'M116 62 A36 36 0 0 1 98.5 92.9 M47 76.4 A36 36 0 1 1 116 62' },
        {
          d: 'M91.3 28.3 L113.9 50.9 M75.7 26.7 L115.3 66.3 M64.9 29.9 L112.2 77.2 M56.4 35.4 L72.1 51.1 M76.8 55.8 L85.3 64.3 M87.5 66.5 L106.5 85.4 M50.1 43.1 L57.8 50.8 M62.2 55.2 L73.2 66.2 M88.9 81.9 L99 92 M45.7 52.7 L49.3 56.3 M53.7 60.7 L61.4 68.4 M44.6 65.6 L51.2 72.2',
          role: 'ambient',
        },
        { d: 'M50 96 A34 34 0 1 0 90 87', role: 'accent' },
        { d: 'M50 118 A26 26 0 0 1 54.7 103.1', role: 'soft' },
        {
          d: 'M49.5 91.5 Q70 97 90.5 91.5 V81.5 Q70 87 49.5 81.5 Z',
          transform: CROWN_TILT,
        },
        {
          d: 'M49.5 81.5 L46 64 L54.5 77 L58 59 L64.5 78 L70 54 L75.5 78 L82 59 L85.5 77 L94 64 L90.5 81.5',
          transform: CROWN_TILT,
        },
        {
          d: `${circle(46, 61, 2.5)} ${circle(58, 56, 2.5)} ${circle(70, 51, 2.5)} ${circle(82, 56, 2.5)} ${circle(94, 61, 2.5)}`,
          role: 'soft',
          transform: CROWN_TILT,
        },
        {
          d: 'M78 85.8 l-4 7.6 M83 84.8 l-4 7.6 M88 83.2 l-3.4 6.8',
          role: 'ambient',
          transform: CROWN_TILT,
        },
      ],
    },
  ],
  'nami': [
    // The first Clima-Tact, leant across the box on the line the later staff
    // keeps: three hollow poles of blue steel pushed end to end, the two
    // sleeves where they join in her colour, and the chart at its foot. Usopp
    // hands it over and she first fights with it against Miss Doublefinger in
    // 117 (ch. 190).
    { episode: 117, chapter: 190, value: CLIMA_TACT },
    // The Perfect Clima-Tact: the same three poles, each now ending in a ball
    // that holds a dial, the balls at both joints and the top in her colour,
    // a glint on each. She shows it off chasing the Puffing Tom on the
    // Rocketman in 258 (ch. 368).
    {
      episode: 258,
      chapter: 368,
      value: [
        {
          d: 'M30.6 165 L53 139.4 M37.4 171 L59.8 145.3 M62.9 128.1 L80.3 108 M69.7 134 L87.1 113.9 M90.2 96.7 L107.7 76.7 M97 102.6 L114.5 82.6',
        },
        { d: 'M30.6 165 Q30.6 171.9 37.4 171' },
        {
          d: 'M36.7 162.1 L52 144.5 M66.5 127.9 L79.6 112.9 M93.9 96.5 L107 81.5',
          role: 'soft',
        },
        {
          d: 'M43.5 163 L43 159.1 M50.1 155.5 L49.6 151.6 M72.2 130.1 L71.7 126.2 M79.6 121.7 L79.1 117.8 M99.3 99.1 L98.8 95.2 M105.8 91.6 L105.3 87.7',
          role: 'ambient',
        },
        {
          d: `${circle(61.3, 136.7, 7.5)} ${circle(88.7, 105.3, 7.5)} ${circle(116, 74, 7.5)}`,
          role: 'accent',
        },
        {
          d: 'M56.5 133.5 Q57.5 131.2 60 130.8 M83.9 102.1 Q84.9 99.8 87.4 99.4 M111.2 70.8 Q112.2 68.5 114.7 68.1',
          role: 'soft',
        },
        ...SMALL_CHART,
        shadow(80, 188, 56),
      ],
    },
    // The first Sorcery Clima-Tact of the two years: three plain parts again,
    // no dials, so the drawing is the first Clima-Tact's. She brings it back
    // from Weatheria and first shows it on Sabaody in 517 (ch. 598).
    { episode: 517, chapter: 598, value: CLIMA_TACT },
    // The Grow Up Sorcery Clima-Tact as Usopp hands it over at Zou: the staff
    // Zeus will sit on, its two round knobs (the ends that make it grow) in
    // her colour. First shown in 776 (ch. 822).
    { episode: 776, chapter: 822, value: GROW_UP },
    // The Sorcery Clima-Tact leant across the box from the ground, its round
    // knobs at both ends, collars banding the grip and both necks, the far side
    // hatched; Zeus heaped above the top knob as a cloud with no face, his bolt
    // the one mark in her colour, and a small copy of her first drawing's chart
    // at the foot. The chart is not a prop of the scene: it is her emblem as
    // navigator and cartographer, whose dream is to draw a map of the world,
    // carried over as Sengoku's cap and Sakazuki's braid are (#203, #207). Zeus
    // comes out of the staff as her servant aboard the Sunny in 878 (ch. 903).
    { episode: 878, chapter: 903, value: SORCERY_WITH_ZEUS },
    // The staff alone again: Big Mom grabs Zeus back in 993 (ch. 985).
    { episode: 993, chapter: 985, value: GROW_UP },
    // Zeus back in the staff, a Homie of hers now, from 1037 (ch. 1015).
    { episode: 1037, chapter: 1015, value: SORCERY_WITH_ZEUS },
  ],
  'usopp': [
    // His slingshot, the band drawn straight back with a lead ball in its
    // pouch and a second ball on the ground, its far side in shade: the fork
    // with the thickness of its arms, the far face of the arm and the grip
    // hatched, the grip wrapped. Episode 9 shows it on him, but the manga
    // first shows it in chapter 27, when he knocks out the mansion's guards
    // with it; episode 11 adapts that scene.
    {
      episode: 11,
      chapter: 27,
      value: [
        {
          d: 'M76.5 134 C68 114 50 100 47 66 A5 5 0 0 1 57 66 C59 92 72 106 80 118 C88 106 101 92 103 66 A5 5 0 0 1 113 66 C110 100 92 114 83.5 134',
        },
        {
          d: 'M113 66 L118.5 67.5 C115.5 101 97.5 115 89 135 V172 Q87 175.5 83.5 175 M76.5 134 V172 Q80 176 83.5 172 V134',
        },
        {
          d: 'M112.1 75.7 L116.3 73.3 M109.6 82.9 L114 80.4 M106.3 90.6 L111.1 87.8 M102.1 98.8 L107.3 95.8 M97.6 107.1 L102.9 104.1 M93.2 115.5 L98.5 112.4 M89.2 123.6 L94.3 120.6 M85.9 131.3 L90.5 128.6 M84.7 137.7 L88.2 135.7 M84.8 143.4 L88.1 141.5 M84.7 149.2 L88.3 147.2 M84.8 155 L88.2 153 M84.7 160.8 L88.3 158.7 M84.8 166.5 L88.2 164.6',
          role: 'ambient',
        },
        {
          d: 'M76.5 140 L83.5 144 M76.5 147 L83.5 151 M76.5 154 L83.5 158 M76.5 161 L83.5 165',
          role: 'soft',
        },
        {
          d: 'M54 70 C60 82 66 92 73 99 M106 70 C100 82 94 92 87 99 M73 99 C71 110 89 110 87 99',
          role: 'accent',
        },
        { d: circle(80, 102, 6) },
        {
          d: 'M108.5 181.2 L114.2 175.6 M112.2 181 L113.9 179.2',
          role: 'ambient',
        },
        { d: circle(110, 177, 6) },
        { d: 'M106.4 174.4 q1.4 -2 4 -2.2', role: 'soft' },
        shadow(88, 188, 32),
      ],
    },
    // Kabuto: a staff with a five-prong fork, the band pulled back from the
    // two outer prongs around a star pellet, the dial housed where the fork
    // meets the shaft. Sogeking carries it onto the Tower of Justice roof at
    // the end of 274 (ch. 390).
    {
      episode: 274,
      chapter: 390,
      value: [
        { d: 'M80 186 V104' },
        { d: 'M80 104 C74 84 50 70 40 42 M80 104 C86 84 110 70 120 42' },
        { d: 'M36 40 l8 4 M124 40 l-8 4' },
        {
          d: 'M80 104 C74 90 62 80 56 64 M80 104 V62 M80 104 C86 90 98 80 104 64',
        },
        { d: 'M52 66 l8 -4 M76 62 h8 M100 62 l8 4', role: 'soft' },
        { d: circle(80, 116, 7) },
        {
          d: 'M74 142 h12 M74 150 h12 M74 158 h12 M74 166 h12',
          role: 'ambient',
        },
        { d: 'M40 42 Q80 118 120 42', role: 'accent' },
        { d: star(80, 82, 8, 3.5), role: 'accent' },
        shadow(80, 190, 40),
      ],
    },
    // Kuro Kabuto: the compact slingshot of the two years, a Pop Green
    // sprouting from the seed held in its band, the dark fork hatched down
    // its far side. First fired at the impostor crew at 517 (ch. 598).
    {
      episode: 517,
      chapter: 598,
      value: [
        { d: 'M80 172 V118' },
        { d: 'M80 118 C78 98 60 90 54 66 M80 118 C82 98 100 90 106 66' },
        { d: 'M50 64 l8 4 M110 64 l-8 4' },
        {
          d: 'M66 86 l-6 6 M70 96 l-6 6 M74 106 l-6 6 M78 116 l-6 6',
          role: 'ambient',
        },
        { d: 'M74 150 h12 M74 158 h12 M74 166 h12', role: 'ambient' },
        { d: 'M54 66 C60 94 100 94 106 66', role: 'accent' },
        { d: circle(80, 87, 5), role: 'accent' },
        { d: 'M80 82 C82 66 76 54 80 34', role: 'accent' },
        { d: 'M80 64 C66 62 60 50 64 40 C72 44 78 54 80 64 Z', role: 'accent' },
        {
          d: 'M80 52 C92 50 100 40 98 30 C90 32 84 42 80 52 Z',
          role: 'accent',
        },
        shadow(80, 178, 36),
      ],
    },
  ],
  'sanji': [
    // The knife with the flame off its point: Diable Jambe, his leg set alight
    // by spinning, first lit against Jabra in 298 (ch. 415).
    {
      episode: 298,
      chapter: 415,
      value: [...SANJI_KNIFE, ...SANJI_FLAME, shadow(80, 186, 44)],
    },
    // The Raid Suit's black cape hung behind the knife: the stand-up collar,
    // the shoulders, the scalloped hem, folds down its length and its far
    // side hatched, the knife and the flame in front of it. No number, no
    // mark. He first puts the suit on to fight Page One in 925 (ch. 931).
    {
      episode: 925,
      chapter: 931,
      value: [
        {
          d: 'M56 42 C54 34 50 28 46 22 C62.7 27.3 79.3 27.3 96 22 C92 28 88 34 86 42',
        },
        { d: 'M56 42 Q71 48 86 42', role: 'soft' },
        {
          d: 'M56 42 C44 44 30 50 26 60 C22 92 14 124 6 150 C16.2 144.9 25.3 145.9 33 153.1 M61.7 154.3 C63.2 155.4 64.6 156.6 66 158 C79.3 150 90.7 149.3 100 156 C112 145.3 124.7 140 138 140 C132.9 129.8 128.3 117.5 124.5 103.7 M105.1 48.6 C99.4 45.3 92.4 43.1 86 42',
        },
        {
          d: 'M42 62 C38.1 95.2 34.2 124.6 34 152.1 M70 50 C70 71.8 69.4 91.8 68.5 111 M98 60 C98.4 68.1 98.8 75.9 99.1 83.5 M100 133.4 V156',
          role: 'soft',
        },
        {
          d: 'M24 80 L36 72 M21 98 L35 89 M17 116 L33 106 M13 134 L31 122',
          role: 'ambient',
        },
        ...SANJI_KNIFE,
        ...SANJI_FLAME,
        shadow(80, 186, 44),
      ],
    },
    // The cape gone and the knife alone again, its flame now Ifrit Jambe's:
    // taller, with a tongue either side. He stamps the suit's canister to
    // pieces in 1057 (ch. 1031) and first lights the hotter flame on Queen in
    // 1061 (ch. 1034).
    {
      episode: 1061,
      chapter: 1034,
      value: [
        ...SANJI_KNIFE,
        {
          d: 'M114 68 C98 58 98 44 102 30 C104 38 108 42 111 44 C108 30 112 14 122 0 C122 16 130 24 132 36 C134 30 134 26 136 18 C146 34 144 52 136 62 C130 68 120 70 114 68 Z',
          role: 'accent',
        },
        {
          d: 'M118 60 C112 52 114 44 118 32 C120 42 128 46 127 56',
          role: 'accent',
        },
        shadow(80, 186, 44),
      ],
    },
  ],
  // His six swords, one for each hand, stacked as he holds them out: curved
  // blades with their bevels, the round guards in 3/4 as the accent, the
  // wrapped grips. He bursts out of the rubble with all six against Zoro in
  // 39 (ch. 84); the ring of the Octopus Pot Stance waits for chapter 85.
  'hatchan': [
    { episode: 39, chapter: 84, value: HATCHAN_SWORDS },
    // The same six hilts with every blade snapped off short at a ragged
    // break, and the pieces on the ground beneath them, the longest still
    // with its tip. Zoro's Oni Giri breaks all six in chapter 85; the
    // anime's first episode after it is 40 (ch. 86).
    {
      episode: 40,
      chapter: 86,
      value: [
        {
          d: 'M70.2 35.4 C76 34.4 81.6 33.3 87 32.1 L93.6 29.6 L82.6 31 L91.2 28 L84.1 28.6 L85.8 27.1 C80.5 28.2 75 29.3 69.3 30.3 M64.2 60.7 C73.6 59.8 82.5 58.5 90.9 57 L85.7 56.9 L96.3 54 L87.3 54.6 L94 52.4 L89.8 52.2 C81.5 53.4 72.8 54.5 63.6 55.5 M60.1 86 C64.7 85.9 69.1 85.6 73.4 85.4 L79.3 83.9 L70.3 83.5 L80.1 81.8 L72.1 81.3 L73 80.2 C68.7 80.4 64.4 80.6 59.9 80.8 M59.9 111.2 C68.3 111.6 76.2 111.6 83.9 111.5 L79.8 110.6 L90.8 109.3 L81.7 108.5 L88.7 107.3 L83.6 106.4 C76.1 106.4 68.3 106.3 60.1 106 M63.6 136.5 C69 137.1 74.3 137.6 79.4 137.9 L84.5 137.2 L75.5 135.6 L87.6 135.3 L79.6 133.7 L79.7 132.7 C74.7 132.3 69.5 131.8 64.2 131.3 M69.3 161.7 C78.9 163.4 88 164.7 96.6 165.5 L93.7 164.2 L102.8 164.1 L91.9 162.1 L99.9 161.9 L97 160.6 C88.5 159.5 79.6 158.2 70.2 156.6',
        },
        ...moved(HATCHAN_HILTS, 'translate(22 -4)'),
        {
          d: 'M66 180 C86 179.2 104 176.4 120 171.6 L117.6 176 C102 180 86 182.6 68 183.8 L71 181.8 Z M126 186 L148 177 L146.4 181 L128 188 Z M50 176 L62 172 L59 177.6 Z M100 167 L111 162 L109.4 167.4 Z M134 165 L144 163 L140 167.6 Z',
        },
        shadow(96, 186, 50),
      ],
    },
    // A paper boat of takoyaki from his stall, the Takoyaki 8: eight balls
    // in two rows, the sauce drizzled over them in a zigzag, a pick stuck in
    // the back row, the boat's far end hatched. He feeds the crew from it in
    // 390 (ch. 496), and keeps selling it from then on.
    {
      episode: 390,
      chapter: 496,
      value: [
        { d: 'M140.1 103.3 H147 L130.9 128.6 H9 L25.1 103.3 H29.7' },
        { d: 'M9 128.6 L18.2 151.6 L124 151.6 L130.9 128.6' },
        { d: 'M124 151.6 L140.1 126.3 L147 103.3' },
        { d: 'M12.2 136 H128.7', role: 'soft' },
        {
          d: 'M128.3 143.1 L133.1 127 M132.3 136.8 L137.1 120.7 M136.3 130.4 L141.1 114.3',
          role: 'ambient',
        },
        {
          d: 'M19.4 128.6 A13.8 13.8 0 1 1 40 128.6 M47 128.6 A13.8 13.8 0 1 1 67.6 128.6 M74.6 128.6 A13.8 13.8 0 1 1 95.2 128.6 M102.2 128.6 A13.8 13.8 0 1 1 122.8 128.6',
        },
        {
          d: 'M29.9 105.6 A13.8 13.8 0 0 1 57.1 105.6 M57.5 105.6 A13.8 13.8 0 0 1 84.7 105.6 M85.1 105.6 A13.8 13.8 0 0 1 112.3 105.6 M112.7 105.6 A13.8 13.8 0 0 1 139.3 108',
        },
        {
          d: 'M20.5 119.4 L34.3 98.7 L43.5 117.1 L59.6 96.4 L71.1 114.8 L87.2 94.1 L98.7 112.5 L114.8 91.8 L126.3 110.2',
          role: 'accent',
        },
        { d: 'M106.8 91.8 L128.6 59.6' },
        shadow(76, 156, 62),
      ],
    },
  ],
  // The vest and the beads again, and the shot of water he spits from his
  // mouth like a bullet, his Water Gun, flying past. He fires it first on the
  // deck of the 77th Branch's ship in 34 (ch. 75).
  'chew': [
    {
      episode: 34,
      chapter: 75,
      value: [
        ...CHEW_VEST,
        { d: CHEW_BEADS },
        shadow(124, 186, 30),
        {
          d: 'M154 22 C154 14 144 13 134 16 C124 19 112 20 100 22 C112 24 124 25 134 28 C144 31 154 30 154 22 Z',
          role: 'accent',
        },
        { d: 'M92 16 H56 M88 28 H40 M94 22 H72', role: 'accent' },
        {
          d: dots([
            [118, 9],
            [128, 35],
            [108, 32],
            [100, 10],
          ]),
          role: 'accent',
        },
      ],
    },
  ],
  // Every stage of Luffy's hat is the hat with what the story put on, over
  // or under it; a stage that is only for an arc is followed by the hat
  // alone again, from the episode the costume is gone.
  'monkey-d-luffy': [
    // A shawl wrapped over the crown against the desert sun, its ends
    // falling over the brim and round under it, the band showing at the
    // front. On from 96 (ch. 161), off by Rainbase in 106 (ch. 169).
    {
      episode: 96,
      chapter: 161,
      value: [
        ...LUFFY_BRIM,
        LUFFY_BAND,
        { d: 'M42 102 C34 40 126 40 118 102' },
        {
          d: 'M42 102 C32 124 34 152 52 166 Q80 176 108 166 C126 152 128 124 118 102',
        },
        { d: 'M58 54 Q66 76 62 98 M96 52 Q92 76 98 98', role: 'soft' },
        {
          d: 'M108 56 l-4 6 M114 68 l-4 6 M118 82 l-4 6 M122 118 l-4 6 M120 134 l-4 6',
          role: 'ambient',
        },
        shadow(80, 186, 50),
      ],
    },
    { episode: 106, chapter: 169, value: LUFFY_HAT },
    // The closed knight's helm he is dressed in on Thriller Bark, the hat
    // hidden under it, as the colour page of chapter 452 shows it: the visor
    // slit, the breathing holes, the ridge down the front, and the plume in
    // the captain's red. From 346 (ch. 452); he is out of the armor by the
    // end of 349 (ch. 455).
    {
      episode: 346,
      chapter: 452,
      value: [
        { d: 'M54 142 V76 C54 44 106 44 106 76 V142 Q80 152 54 142 Z' },
        { d: 'M74 47 Q71 100 74 149', role: 'soft' },
        { d: 'M58 86 Q72 92 102 84 M58 94 Q72 100 102 92' },
        {
          d: dots([
            [84, 110],
            [92, 108],
            [100, 106],
            [84, 120],
            [92, 118],
            [100, 116],
          ]),
          role: 'soft',
        },
        { d: 'M54 128 Q72 136 106 128', role: 'soft' },
        {
          d: 'M78 47 C74 28 88 10 116 10 C106 18 102 24 108 32 C96 28 88 36 86 46',
          role: 'accent',
        },
        { d: 'M86 30 Q96 22 106 20 M84 38 Q92 32 100 30', role: 'soft' },
        {
          d: 'M100 56 l-4 6 M104 68 l-4 6 M104 104 l-4 6 M104 116 l-4 6',
          role: 'ambient',
        },
        shadow(80, 166, 40),
      ],
    },
    { episode: 349, chapter: 455, value: LUFFY_HAT },
    // The hat sat on top of a samurai kabuto Kin'emon made him: the gold
    // crescent standing up in front of the crown, the side flaps turned out
    // under the brim. From 625 (ch. 699), at the end of Punk Hazard.
    {
      episode: 625,
      chapter: 699,
      value: [
        ...LUFFY_HAT_ALONE,
        {
          d: 'M80 104 C58 104 46 84 48 56 C56 76 66 88 80 90 C94 88 104 76 112 56 C114 84 102 104 80 104 Z',
        },
        { d: 'M76 104 L80 112 L84 104', role: 'soft' },
        {
          d: 'M30 128 C14 126 8 140 14 150 C22 158 38 152 44 138 M130 128 C146 126 152 140 146 150 C138 158 122 152 116 138',
        },
        {
          d: dots([
            [22, 140],
            [30, 144],
            [138, 140],
            [130, 144],
          ]),
          role: 'soft',
        },
        shadow(80, 176, 56),
      ],
    },
    // A black bowler over the dome to pass unknown in Dressrosa, its own
    // curled brim on the straw one and the red band's edge below it. From
    // 630 (ch. 701).
    {
      episode: 630,
      chapter: 701,
      value: [
        ...LUFFY_BRIM,
        LUFFY_BAND_EDGE,
        { d: 'M48 104 C44 42 116 42 112 104' },
        {
          d: 'M40 106 Q36 98 44 98 Q80 112 116 98 Q124 98 120 106 Q80 122 40 106 Z',
        },
        {
          d: 'M100 60 l-4 6 M106 70 l-4 6 M110 80 l-4 6 M112 90 l-4 6',
          role: 'ambient',
        },
        shadow(80, 172, 56),
      ],
    },
    // Lucy's gold Viking helmet, worn over the hat for the Corrida Colosseum
    // (the hat is under it: ch. 715-716), with the red cape, as he keeps them
    // once the rest of the armor comes off for the weigh-in (634, ch. 704).
    // In 3/4 and turned from the face guard: the ridge, a row of rivets, the
    // nose guard, the two horns of the ep 633 frame. From 633 (ch. 704) until
    // he hands the costume on in 663 (ch. 731).
    {
      episode: 633,
      chapter: 704,
      value: [
        { d: 'M50 112 C46 50 114 50 110 112 Q80 124 50 112 Z' },
        { d: 'M62 58 Q58 84 60 116', role: 'soft' },
        { d: 'M50 100 Q80 112 110 100', role: 'soft' },
        {
          d: dots([
            [58, 104],
            [70, 108],
            [84, 109],
            [98, 107],
          ]),
          role: 'soft',
        },
        { d: 'M60 116 L58 138 L66 120' },
        {
          d: 'M54 62 C40 52 38 36 44 26 C48 40 56 48 64 54 M106 62 C120 52 122 36 116 26 C112 40 104 48 96 54',
        },
        {
          d: 'M44 120 C34 140 28 164 24 182 Q80 192 136 182 C132 164 126 140 116 120',
          role: 'accent',
        },
        { d: 'M60 130 Q56 156 52 184 M100 130 Q104 156 108 184', role: 'soft' },
        { d: 'M100 64 l-4 6 M106 76 l-4 6 M108 88 l-4 6', role: 'ambient' },
      ],
    },
    // The koi costume that follows Lucy (663 to 668) hides the hat
    // altogether, so it gets no drawing of its own: the hat stands for him.
    { episode: 663, chapter: 731, value: LUFFY_HAT },
    // The white turban wound round the crown above the band, knotted at the
    // side with its ends over the brim. From the Seducing Woods in 786 (ch. 827);
    // gone by the end of the fight with Cracker, 805 (ch. 841).
    {
      episode: 786,
      chapter: 827,
      value: [
        ...LUFFY_HAT_ALONE,
        { d: 'M48 92 C60 100 100 100 112 92 M50 78 C62 86 98 86 110 78' },
        {
          d: 'M58 80 Q64 88 60 96 M76 84 Q82 90 78 98 M94 82 Q100 88 96 96',
          role: 'soft',
        },
        {
          d: 'M110 86 q12 -6 14 4 q-4 8 -14 4 M118 94 q8 16 2 34 M112 96 q2 18 -6 30',
        },
        shadow(80, 172, 56),
      ],
    },
    { episode: 805, chapter: 841, value: LUFFY_HAT },
    // A black fedora fitted over the dome for the meeting with the Fire Tank
    // Pirates: the pinched crown, its band, the short brim on the straw one.
    // From 828 (ch. 858) until it goes over Katakuri's face in 871 (ch. 896).
    {
      episode: 828,
      chapter: 858,
      value: [
        ...LUFFY_BRIM,
        LUFFY_BAND_EDGE,
        { d: 'M50 100 L54 64 Q66 54 80 64 Q94 54 106 64 L110 100' },
        { d: 'M80 64 V78', role: 'soft' },
        {
          d: 'M52 90 Q80 98 108 90 M51.6 96 Q80 104 108.4 96',
          role: 'ambient',
        },
        {
          d: 'M38 106 Q36 98 46 100 Q80 112 114 100 Q124 98 122 106 Q80 122 38 106 Z',
        },
        shadow(80, 172, 56),
      ],
    },
    { episode: 871, chapter: 896, value: LUFFY_HAT },
    // The samurai kabuto Hitetsu gives him for Onigashima, worn instead of
    // the hat: the bowl with its ribs, the neck guard, the gold crescent, and
    // the side flaps in the captain's red. From 959 (ch. 959) until the raid
    // sets out in 978 (ch. 975).
    {
      episode: 959,
      chapter: 959,
      value: [
        { d: 'M48 112 C46 62 114 62 112 112' },
        { d: 'M64 70 Q60 92 62 112 M96 70 Q100 92 98 112', role: 'soft' },
        { d: 'M44 112 Q80 124 116 112' },
        { d: 'M42 118 Q80 136 118 118 L124 134 Q80 156 36 134 Z' },
        { d: 'M34 144 Q80 168 126 144', role: 'soft' },
        {
          d: 'M48 106 L28 96 Q22 112 34 124 L46 118 M112 106 L132 96 Q138 112 126 124 L114 118',
          role: 'accent',
        },
        { d: 'M76 112 C58 108 42 84 38 44 M84 112 C102 108 118 84 122 44' },
        { d: 'M72 112 L80 98 L88 112', role: 'soft' },
        { d: 'M104 76 l-4 6 M108 88 l-4 6 M110 100 l-4 6', role: 'ambient' },
        shadow(80, 176, 48),
      ],
    },
    { episode: 978, chapter: 975, value: LUFFY_HAT },
    // The hat as it always is, over the white hair of Gear 5: five great
    // locks behind the crown, each winding into its curl. From 1071
    // (ch. 1044) until Kaido falls in 1076 (ch. 1049).
    {
      episode: 1071,
      chapter: 1044,
      value: [
        {
          d: 'M18.5 109.4 A21 21 0 0 1 22.4 67.8 A23 23 0 0 1 55.6 36.7 A25 25 0 0 1 104.4 36.7 A23 23 0 0 1 137.6 67.8 A21 21 0 0 1 141.5 109.4',
        },
        {
          d: 'M22 98.4 L18.3 99.2 L14.7 98.9 L11.5 97.5 L9.1 95.3 L7.5 92.5 L6.9 89.5 L7.3 86.6 L8.4 84.1 L10.3 82.3 L12.5 81.1 L14.8 80.8 L16.9 81.2 L18.7 82.2 L19.9 83.6 L20.6 85.2 L20.7 86.8 L20.3 88.2 L19.5 89.3 L18.5 89.9 M37.9 65.9 L34.2 64.2 L31.3 61.5 L29.4 58.2 L28.7 54.7 L29.2 51.2 L30.6 48.2 L32.8 45.9 L35.5 44.6 L38.3 44.1 L40.9 44.6 L43.2 45.8 L44.8 47.5 L45.7 49.6 L45.8 51.6 L45.4 53.5 L44.4 54.9 L43.1 55.9 L41.7 56.3 L40.4 56.2 M69.7 49.3 L67.6 45.3 L66.8 41.1 L67.3 37 L69.1 33.4 L71.7 30.7 L74.9 29.1 L78.3 28.5 L81.6 29.1 L84.3 30.6 L86.3 32.7 L87.5 35.2 L87.7 37.8 L87.2 40.1 L86 42 L84.3 43.3 L82.5 44 L80.8 44 L79.3 43.4 L78.2 42.5 M107 54.6 L108.7 58.3 L111.4 61.2 L114.7 63.1 L118.2 63.8 L121.7 63.3 L124.7 61.9 L127 59.7 L128.3 57 L128.8 54.2 L128.3 51.6 L127.1 49.3 L125.4 47.7 L123.3 46.8 L121.3 46.7 L119.4 47.1 L118 48.1 L117 49.4 L116.6 50.8 L116.7 52.1 M133.2 81.8 L132.4 85.5 L132.7 89.1 L134.1 92.3 L136.3 94.7 L139.1 96.3 L142.1 96.9 L145 96.5 L147.5 95.4 L149.3 93.5 L150.5 91.3 L150.8 89 L150.4 86.9 L149.4 85.1 L148 83.9 L146.4 83.2 L144.8 83.1 L143.4 83.5 L142.3 84.3 L141.7 85.3',
          role: 'soft',
        },
        ...LUFFY_HAT,
      ],
    },
    { episode: 1076, chapter: 1049, value: LUFFY_HAT },
    // The Viking outfit of Elbaf laid out as a still life: the black helmet
    // with its studded gold band and great curved horns, the axe he carries
    // on his back, and the hat hung by its string from the haft. From 1157
    // (ch. 1127) until the hat is the one Gaban sees on him in 1170
    // (ch. 1140), an end inferred rather than pinned to a page.
    {
      episode: 1157,
      chapter: 1127,
      value: [
        {
          d: 'M128 180 L136 30 M135.4 40 C146 30 158 40 154 64 C148 56 142 54 134.6 56',
        },
        { d: 'M30 122 C28 80 92 80 90 122 Z' },
        { d: 'M28 114 Q60 126 92 114 M29 104 Q60 116 91 104', role: 'soft' },
        {
          d: dots([
            [36, 112],
            [48, 116],
            [60, 117],
            [72, 116],
            [84, 112],
          ]),
          role: 'soft',
        },
        {
          d: 'M32 96 C6 92 0 56 24 34 C18 54 26 72 40 82 M88 96 C114 92 120 56 96 34 C102 54 94 72 80 82',
        },
        { d: 'M76 88 l-4 6 M82 96 l-4 6 M86 106 l-4 6', role: 'ambient' },
        { d: 'M106 118 C110 96 124 86 133.6 84', role: 'soft' },
        ...LUFFY_HAT_ALONE.map((s) => ({ ...s, transform: LUFFY_HUNG })),
        shadow(70, 180, 58),
      ],
    },
    { episode: 1170, chapter: 1140, value: LUFFY_HAT },
  ],
  'shanks': [
    // Gryphon, laid where the Foosha sword lay and the grog still behind it: a
    // long saber in its curved sheath, throat and chape banded, the underside
    // hatched, the long wrapped hilt ending in a pommel cap, and the guard in
    // red, a round disc in 3/4 with the thin bow that sweeps from it down to
    // the pommel. It hangs at his hip when he sits drinking with Ace in 151
    // (ch. 234).
    {
      episode: 151,
      chapter: 234,
      value: [
        ...SHANKS_GROG,
        {
          d: 'M52.5 137.7 L49.1 128.3 Q94 105.5 143.1 94.1 Q150.4 96.7 146.5 103.5 Q97.5 114.9 52.5 137.7 Z',
        },
        {
          d: 'M64.9 127.9 L67 130.8 M77.8 122.2 L79.9 125.1 M90.8 117 L92.9 119.9 M103.9 112.2 L106 115.1 M117.2 107.9 L119.3 110.7 M130.7 104 L132.8 106.8',
          role: 'ambient',
        },
        {
          d: 'M58.3 127.1 Q95.2 108.7 135.3 99 M54.5 125.6 L57.9 135 M136.2 95.7 L139.7 105.1',
          role: 'soft',
        },
        {
          d: 'M45.6 134.9 A2.6 9.5 -20 1 1 50.4 133.1 A2.6 9.5 -20 1 1 45.6 134.9 M51.2 142.9 C44.1 152.5 21.2 159.7 8.8 152.1',
          role: 'accent',
        },
        {
          d: 'M44.3 131.5 L9.2 144.3 Q5 145.8 6.2 149.2 Q7.4 152.6 11.6 151.1 L46.8 138.3',
        },
        {
          d: 'M42.1 132.3 L40.8 140.5 L34.6 135.1 L33.3 143.2 L27 137.8 L25.7 145.9 L19.5 140.5 L18.2 148.7 L12 143.3 M9.2 144.3 L11.6 151.1',
          role: 'soft',
        },
      ],
    },
  ],
  'helmeppo': [
    // His pair of kukri crossed, as the reformed trainee wears them at the
    // back of his belt: each blade bent forward from the handle and swelling
    // to its point, the notch cut at the foot of the edge, the near blade in
    // yellow with its bevel, the far one hatched where it turns away, the
    // grips ringed with flared butts. He draws them on Zoro at Water 7 in 314
    // (ch. 432); the shoe and the rice ball stay with the boy he was.
    {
      episode: 314,
      chapter: 432,
      value: [
        {
          d: 'M91.4 124.5 C90.3 123.5 89.2 122.6 88.1 121.7 M72.9 112.3 C58.8 105.8 39.6 102 12.3 105 C13.6 115.1 25.4 125.1 40.4 127 C46.7 127.8 53.6 127.7 60 127.4 M79.6 125.9 C80.9 125.7 81.5 126.6 81.5 128.5 L86.6 131.5',
        },
        {
          d: 'M91.4 124.5 L112.7 139.9 L117.5 140.5 C117.5 145 115.5 148.1 111.3 149.7 L108.9 145.6 L86.6 131.5 L91.4 124.5',
        },
        {
          d: 'M62.3 109.8 L59.3 121.9 M52 106.8 L49.1 118.7 M41.7 103.8 L38.9 115.6 M31.5 100.8 L28.8 112.4',
          role: 'ambient',
        },
        { d: 'M94.9 126.9 L90.2 133.8 M105.2 134.3 L101 140.7', role: 'soft' },
        {
          d: 'M16.7 109 C22.6 117 31 122.7 40.9 123.3 C48.2 124.2 56.2 124 63.3 124',
          role: 'soft',
        },
        {
          d: 'M68.9 121 C80.1 105.8 100.3 89.8 142.3 85.5 C143 95.7 133.6 107.9 119.3 113 C106.8 117.4 90.5 118.3 82.8 120.2 Q78.5 119.1 79.5 123 L75.1 127',
          role: 'accent',
        },
        {
          d: 'M68.9 121 L51.2 140.6 L46.8 142.2 Q48.1 148.8 54.7 149.8 L56.1 145.3 L75.1 127 Z',
        },
        {
          d: 'M138.7 90.4 C134.7 99.5 127.6 106.8 118 109.4 C107.3 113.2 94.1 114.6 86 117.4',
          role: 'soft',
        },
        { d: 'M66.1 124.2 L72 130 M57.4 133.6 L62.9 138.9', role: 'soft' },
        shadow(80, 170, 56),
      ],
    },
  ],
  'gin': [
    // The plate set back, and in front of it his pair of tonfa laid side by
    // side: each a long bar with a short handle across its end and an iron
    // ball weighting the other, the balls hatched dark, the near one over the
    // far. He breaks Pearl's iron shield with them in 27 (ch. 59).
    {
      episode: 27,
      chapter: 59,
      value: [
        ...GIN_RICE_SET_BACK,
        {
          d: 'M135.3 150 L29.7 159.3 C27 159.5 25.8 160.7 26 163 C26.2 165.3 27.6 166.3 30.3 166 L135.9 156.8 M37.7 158.6 L36.6 147 C36.5 145 37.4 143.9 39.4 143.8 C41.4 143.6 42.4 144.5 42.6 146.5 L43.6 158',
        },
        {
          d: 'M157.5 151.5 C158 157.5 153.6 162.9 147.5 163.4 C141.4 163.9 136.1 159.5 135.6 153.4 C135.1 147.4 139.5 142 145.6 141.5 C151.6 141 157 145.4 157.5 151.5',
        },
        {
          d: 'M113.3 174 L7.7 183.3 C5 183.5 3.8 184.7 4 187 C4.2 189.3 5.6 190.3 8.3 190 L113.9 180.8 M15.7 182.6 L14.6 171 C14.5 169 15.4 167.9 17.4 167.8 C19.4 167.6 20.4 168.5 20.6 170.5 L21.6 182',
        },
        {
          d: 'M135.5 175.5 C136 181.5 131.6 186.9 125.5 187.4 C119.4 187.9 114.1 183.5 113.6 177.4 C113.1 171.4 117.5 166 123.6 165.5 C129.6 165 135 169.4 135.5 175.5',
        },
        { d: 'M133.2 149 L134 158.2 M111.2 173 L112 182.2', role: 'soft' },
        {
          d: 'M141.3 161.9 L145.4 156.6 M147 163.5 L152 157 M152.8 161.4 L156 157.1 M119.3 185.9 L123.4 180.6 M125 187.5 L130 181 M130.8 185.4 L134 181.1',
          role: 'ambient',
        },
        shadow(80, 194, 62),
      ],
    },
  ],
  'arlong': [
    // The ushanka with the Kiribachi laid in front of it: the long black
    // blade, six shark's teeth along one side, flat towards the grip, hatched
    // dark with their edges drawn in; a katana's grip with its wrap and no
    // guard. He takes it out of his armoury against Luffy in 42 (ch. 92).
    {
      episode: 42,
      chapter: 92,
      value: [
        ...ARLONG_USHANKA,
        { d: 'M35.8 157.3 L159.6 150.8 Q161.8 153.7 159.9 156.8 L36.1 163.3' },
        {
          d: 'M41.1 163.1 L42.3 185 Q48.8 171.5 59.1 162.1 M60.7 162 L61.8 184 Q68.3 170.4 78.7 161.1 M80.3 161 L81.4 183 Q87.9 169.4 98.2 160.1 M99.8 160 L101 182 Q107.5 168.4 117.8 159 M119.4 159 L120.6 180.9 Q127 167.4 137.4 158 M139 157.9 L140.1 179.9 Q146.6 166.3 156.9 157',
        },
        {
          d: 'M45.2 179.4 Q50.4 169.2 55.1 162.9 M64.7 178.3 Q70 168.2 74.7 161.9 M84.3 177.3 Q89.6 167.1 94.3 160.9 M103.9 176.3 Q109.2 166.1 113.8 159.8 M123.5 175.3 Q128.7 165.1 133.4 158.8 M143 174.2 Q148.3 164.1 153 157.8',
          role: 'soft',
        },
        {
          d: 'M45.3 165.8 L45.8 175.8 M64.8 164.8 L65.4 174.8 M84.4 163.8 L84.9 173.8 M104 162.8 L104.5 172.8 M123.6 161.7 L124.1 171.7 M143.1 160.7 L143.6 170.7',
          role: 'ambient',
        },
        {
          d: 'M35.7 156.3 L8.8 157.7 Q3.8 158 4 162 Q4.2 166 9.2 165.7 L36.2 164.3 Z',
        },
        {
          d: 'M10.8 157.6 L15.8 165.4 L20 157.2 L25 164.9 L29.2 156.7 L34.2 164.4 M11.2 165.6 L15.4 157.4 L20.4 165.1 L24.6 156.9 L29.6 164.7 L33.7 156.4',
          role: 'soft',
        },
        shadow(82, 190, 70),
      ],
    },
  ],
  'smoker': [
    // The cigars over his jitte: a long rod with the hook beside its grip,
    // the knob where the two meet, the grip wrapped, and the Seastone tip
    // hatched dark. He pins Luffy with it in Loguetown in 52 (ch. 98).
    { episode: 52, chapter: 98, value: SMOKER_JITTE },
    // The jitte snapped in two at a jagged break, the tip half lying apart,
    // crumbs where it gave. Hancock's kick breaks it at Marineford in 469
    // (ch. 560).
    { episode: 469, chapter: 560, value: SMOKER_JITTE_BROKEN },
    // Whole again after the two years, as it is when he is next seen in 572
    // (ch. 652).
    { episode: 572, chapter: 652, value: SMOKER_JITTE },
    // Broken a second time, against Vergo on Punk Hazard in 616 (ch. 690).
    { episode: 616, chapter: 690, value: SMOKER_JITTE_BROKEN },
  ],
  'genzo': [
    // The cap without its pinwheel, and the pinwheel standing on its stick
    // in a mound of earth in front of it. He leaves it at Bell-mère's grave
    // once Nami has sailed, in 44 (ch. 95).
    {
      episode: 44,
      chapter: 95,
      value: [
        ...moved(GENZO_CAP, 'translate(-6 -16)'),
        shadow(62, 142, 44),
        { d: 'M124 133 V178', role: 'soft' },
        ...moved(GENZO_PINWHEEL, 'translate(42 94)'),
        { d: 'M110 178 Q124 171 138 178', role: 'ambient' },
        { d: 'M98 180 H150', role: 'ambient', dashed: true },
      ],
    },
  ],
  'jango': [
    // The ring and the glasses again, and behind them the cap he wears now
    // that he is a Marine: a soft white seaman's cap with the two stripes
    // running over its top, no lettering. He is back as one, "Jango the
    // Turncoat", in 128 (ch. 214).
    {
      episode: 128,
      chapter: 214,
      value: [
        ...moved(JANGO_RING, 'translate(12 -16)'),
        {
          d: 'M28 108 C28 98 76 98 76 108 C76 114 28 114 28 108 Z',
          transform: 'rotate(-14 52 124)',
        },
        {
          d: 'M28 108 C26 114 28 120 30 124 L32 140 Q52 147 72 140 L74 124 C76 120 78 114 76 108',
          transform: 'rotate(-14 52 124)',
        },
        {
          d: 'M31 131 Q52 138 73 131',
          role: 'soft',
          transform: 'rotate(-14 52 124)',
        },
        {
          d: 'M44 100.6 Q42 108 43 113.2 L44 129 M60 100.6 Q62 108 61 113.2 L60 129',
          role: 'soft',
          transform: 'rotate(-14 52 124)',
        },
        {
          d: 'M70 118 l5 -5 M68 128 l6 -6 M66 139 l6 -6',
          role: 'ambient',
          transform: 'rotate(-14 52 124)',
        },
        ...moved(JANGO_GLASSES, 'translate(0 22)'),
        shadow(78, 190, 56),
      ],
    },
  ],
  'chouchou': [
    // What the Buggy Pirates left of the shop: three charred posts with their
    // tops burnt ragged, a roof beam fallen across, the plank sign down in
    // front with nothing on it, and the one pack of dog food Luffy brought
    // him out of the ruins, as the accent. It burns in his first episode, 6
    // (ch. 13), so the ruins can only follow from 7 (ch. 15).
    {
      episode: 7,
      chapter: 15,
      value: [
        {
          d: 'M22 141 V68 L25 62 L27 67 L29 60 V140 M62 137 V104 L64.5 98 L66.5 103 L69 97 V136.5 M110 133 V58 L113 52 L115 57 L118 48 V133',
        },
        { d: 'M118 92 L134 84 V96 L136.5 91 L138 96 V133', role: 'soft' },
        {
          d: 'M22 84 l7 -5 M22 98 l7 -5 M22 112 l7 -5 M22 126 l7 -5 M62 118 l7 -5 M62 130 l7 -5 M110 74 l8 -6 M110 88 l8 -6 M110 102 l8 -6 M110 114 l8 -6 M110 128 l8 -6',
          role: 'ambient',
        },
        { d: 'M110 66 L70 96 M110 72 L72 100.5' },
        { d: 'M94 140.5 L8 148 L10 166 L96 158.5 L92 154 L97 150 L91.5 146 Z' },
        { d: 'M8 148 L14 142 L88 135.5 L94 140.5' },
        { d: 'M9 154 L92.5 146.7 M9.6 160 L93.8 152.7', role: 'soft' },
        {
          d: 'M98 140 H132 V182 H98 Z M98 140 L107 133 H141 L132 140',
          role: 'accent',
        },
        { d: 'M132 182 L141 175 V133' },
        { d: 'M134 151 l6 -5 M134 163 l6 -5 M134 175 l6 -5', role: 'ambient' },
        { d: 'M104 150 H126 V170 H104 Z', role: 'soft' },
        shadow(54, 170, 46),
        shadow(120, 188, 26),
      ],
    },
    // The shop rebuilt, and bigger: a second storey with two windows over the
    // same door, windows and hanging sign, and the plank sign back on top,
    // still blank. It stands again when he listens to Vegapunk's broadcast
    // outside it in 1148 (ch. 1114).
    {
      episode: 1148,
      chapter: 1114,
      value: [
        { d: 'M28 150 V40 M112 150 V40 M28 150 H112' },
        { d: 'M112 150 L134 138 V34 L124 34' },
        {
          d: 'M114 76 L131.9 45 M114 88 L132 57 M114.1 100 L132 69 M114 112 L131.9 81 M114.1 124 L132 93 M114 136 L131.9 105 M118 142 L132 117.8 M127 140.4 L132 131.7',
          role: 'ambient',
        },
        ...moved(CHOUCHOU_SIGN, 'translate(0 -24)'),
        { d: 'M28 88 H112', role: 'soft' },
        { d: 'M38 52 H54 V76 H38 Z M86 52 H102 V76 H86 Z' },
        { d: 'M46 52 V76 M38 64 H54 M94 52 V76 M86 64 H102', role: 'soft' },
        ...CHOUCHOU_FRONT,
      ],
    },
  ],
  'don-krieg': [
    // The Daisenso: his two shoulder plates locked face to face, the near one
    // in his colour with its rivets and fur, the far one below the seam
    // hatched where it turns away, and the shaft run out between them, its
    // butt capped and a leaf blade at its head. He assembles it against Luffy
    // in 28 (ch. 64).
    {
      episode: 28,
      chapter: 64,
      value: [
        ...moved(
          [
            ...KRIEG_PLATE,
            { d: 'M20 112 C22 150 60 172 96 168 C130 164 150 136 146 102' },
            { d: 'M122 154 l8 7 M136 140 l9 5 M104 162 l6 8', role: 'ambient' },
            {
              d: 'M146 98.5 L180 95.8 M146 105.5 L180 102.8 M20 108.5 L-8 110.7 M20 115.5 L-8 117.7 M-8 110.7 Q-14 114.2 -8 117.7',
            },
            {
              d: 'M180 91.3 C196 80 222 84 250 93.7 C222 104 196 110 180 107.3 Z',
            },
            { d: 'M184 99 L238 94.6', role: 'soft' },
          ],
          'translate(-2 27) scale(0.82) rotate(-48 83 105)',
        ),
        shadow(64, 186, 48),
      ],
    },
  ],
  'fullbody': [
    // A knuckle for each hand: the iron knuckle in his colour where it always
    // lay, and its twin for the left hand set back behind it. The soup is gone
    // with the Baratie. He is "Double Ironfist" Fullbody under Hina at
    // Arabasta in 128 (ch. 214).
    {
      episode: 128,
      chapter: 214,
      value: [...LEFT_KNUCKLE, ...FULLBODY_KNUCKLE],
    },
  ],
}
