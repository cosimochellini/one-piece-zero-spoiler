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
  // ground: the toe cap, the laces, the collar seen from above with its
  // inside hatched, the sole and heel in yellow, the rice squeezed out either
  // side with its seaweed and the grains thrown off. He stamps on Rika's rice
  // balls in episode 2.
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
  // underside hatched; a tankard of grog with its head of foam at the back.
  // His crew drinks at Makino's bar in episode 4.
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
  // A cannonball with its fuse lit. Crowned from 1080, in `eastBlueRedrawn`.
  'buggy': [
    { d: circle(76, 118, 34), role: 'accent' },
    { d: 'M56 104 q6 -14 20 -18', role: 'ambient' },
    { d: 'M100 92 C106 72 116 66 130 66' },
    {
      d: 'M136 52 v-8 M136 76 v8 M124 64 h-8 M148 64 h8 M128 56 l-6 -6 M144 56 l6 -6 M128 72 l-6 6 M144 72 l6 6',
      role: 'accent',
    },
    shadow(76, 168, 30),
  ],

  // The sea chart she ran off with, half unrolled towards the reader, its
  // coastline and island in orange. She has just stolen it from Buggy in
  // episode 5. The Clima-Tact with Zeus stands over a small copy of the chart
  // from 878, in `eastBlueRedrawn`.
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

  // A tamer's whip, the lash still travelling.
  'mohji': [
    { d: 'M22 32 L48 54 M16 40 L42 62' },
    { d: 'M16 40 L22 32 M42 62 L48 54' },
    { d: 'M22 42 l8 6 M28 50 l8 6', role: 'soft' },
    {
      d: 'M45 58 C80 88 40 110 44 134 C48 158 96 160 120 138 C140 120 132 96 116 96',
      role: 'accent',
    },
    { d: 'M116 96 c-10 0 -14 8 -8 12', role: 'accent' },
    shadow(88, 176, 44),
  ],

  // The pet-food shop he guards, shut and still standing: the long plank sign
  // across the front with nothing written on it, the arched double door, a
  // window either side, the hanging sign on its bracket, the side wall in
  // shade and the step. He sits in front of it in episode 6 (chapter 12).
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
  // A signpost on the slope above the shore, one board pointing each way.
  'syrup-village-arc': [
    { d: 'M4 150 C44 146 74 134 100 110 S140 76 156 72' },
    { d: 'M70 124 V52' },
    { d: 'M70 60 H116 l10 9 l-10 9 H70', role: 'accent' },
    { d: 'M70 88 H34 l-10 8 l10 8 H70' },
    { d: 'M78 69 h26 M44 96 h18', role: 'soft' },
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
  // A hypnotist's ring on its string, and the heart-shaped glasses below.
  'jango': [
    { d: 'M80 14 C86 40 74 60 80 82', role: 'soft' },
    { d: circle(80, 100, 18), role: 'accent' },
    { d: circle(80, 100, 12), role: 'accent' },
    {
      d: 'M46 168 C30 156 28 142 36 136 C42 132 46 138 46 142 C46 138 50 132 56 136 C64 142 62 156 46 168 Z',
    },
    {
      d: 'M114 168 C98 156 96 142 104 136 C110 132 114 138 114 142 C114 138 118 132 124 136 C132 142 130 156 114 168 Z',
    },
    { d: 'M62 146 H98' },
    { d: 'M30 142 L14 134 M130 142 L146 134' },
    shadow(80, 182, 50),
  ],
  // The anniversary present he hands over at 12: a box tied with a ribbon.
  'merry': [
    { d: 'M40 104 H120 V172 H40 Z' },
    { d: 'M34 88 H126 V104 H34 Z' },
    { d: 'M74 88 V172 M86 88 V172', role: 'accent' },
    {
      d: 'M80 88 C66 64 46 70 56 86 Z M80 88 C94 64 114 70 104 86 Z',
      role: 'accent',
    },
    { d: 'M48 116 V160 M112 116 V160', role: 'soft' },
    shadow(80, 182, 50),
  ],

  // Three wooden swords of three heights, planted point down in a row.
  'ninjin-piiman-and-tamanegi': [
    { d: 'M41 86 V164 L46 172 L51 164 V86', role: 'accent' },
    { d: 'M75 62 V164 L80 172 L85 164 V62', role: 'accent' },
    { d: 'M109 98 V164 L114 172 L119 164 V98', role: 'accent' },
    { d: 'M34 86 H58 M68 62 H92 M102 98 H126' },
    { d: 'M43 86 V66 H49 V86 M77 62 V42 H83 V62 M111 98 V78 H117 V98' },
    {
      d: `${circle(46, 62, 4)} ${circle(80, 38, 4)} ${circle(114, 74, 4)}`,
      role: 'soft',
    },
    { d: 'M46 98 V150 M80 74 V150 M114 110 V150', role: 'soft' },
    shadow(80, 176, 62),
  ],

  // A giant paw print stamped into the ground, cracks running out from it.
  'buchi': [
    {
      d: 'M56 128 C56 106 104 106 104 128 C104 146 92 144 80 144 C68 144 56 146 56 128 Z',
      role: 'accent',
    },
    {
      d: `${ellipse(48, 98, 8, 11)} ${ellipse(68, 82, 8, 11)} ${ellipse(92, 82, 8, 11)} ${ellipse(112, 98, 8, 11)}`,
      role: 'accent',
    },
    {
      d: 'M44 146 L26 160 L14 158 M116 146 L134 162 L148 160 M80 152 L74 172 L82 186',
    },
    { d: 'M10 150 H34 M126 150 H150', role: 'soft' },
    {
      d: dots([
        [34, 170],
        [126, 176],
        [96, 168],
        [60, 176],
      ]),
      role: 'soft',
    },
    shadow(80, 192, 62),
  ],

  // A headband with two cat ears, above a glove with three hooked claws.
  'sham': [
    { d: 'M34 84 C42 44 118 44 126 84', role: 'accent' },
    { d: 'M50 62 L54 30 L76 50 M84 50 L106 30 L110 62', role: 'accent' },
    { d: 'M57 54 L58 42 L67 50 M93 50 L102 42 L103 54', role: 'soft' },
    { d: 'M48 160 C40 140 48 120 66 120 C84 120 92 138 86 160' },
    { d: 'M46 160 V178 H88 V160', role: 'soft' },
    {
      d: 'M88 128 C108 118 126 120 140 130 M90 140 C110 134 126 138 136 150 M88 152 C104 150 118 156 126 168',
      role: 'accent',
    },
    shadow(80, 188, 56),
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
  // An empty plate laid on the table, a fork on one side and a knife on the
  // other.
  'baratie-arc': [
    { d: ellipse(80, 124, 44, 16) },
    { d: ellipse(80, 124, 30, 10), role: 'soft' },
    { d: 'M16 78 V98 M22 78 V98 M28 78 V98 M16 98 Q22 106 28 98 M22 102 V160' },
    { d: 'M134 78 C146 90 146 108 140 116 H134 Z', role: 'accent' },
    { d: 'M137 116 V160' },
    { d: 'M4 168 H156', role: 'ambient' },
    shadow(80, 146, 48),
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
  // spoon standing in it and the steam still rising.
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
  // blame Sanji. Both are at his table at the Baratie in episode 20.
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

  // A Baratie cook's cap, short and puffed, its folds soft, the band in his
  // colour, its far side hatched: the plain one the cooks wear, not Zeff's
  // toque. He warns the kitchen about Krieg in it in episode 21.
  'carne': [
    { d: 'M46 124 V150 M114 124 V150 M46 150 Q80 160 114 150' },
    { d: 'M46 124 Q80 134 114 124' },
    {
      d: 'M46 124 C30 116 28 92 44 84 C42 66 62 56 78 64 C90 50 114 56 116 72 C134 78 134 110 114 124',
    },
    {
      d: 'M60 128 C56 110 56 90 60 74 M80 130 C80 110 82 88 86 70 M98 128 C102 110 104 92 106 80',
      role: 'soft',
    },
    { d: 'M46 124 Q80 134 114 124 L114 132 Q80 142 46 132 Z', role: 'accent' },
    {
      d: 'M104 136 l8 -6 M104 146 l8 -6 M118 104 l8 -6 M114 116 l8 -6',
      role: 'ambient',
    },
    shadow(80, 168, 42),
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
  // is away from us: the rivets along its ridge, the fur along its rim, its
  // far side hatched, and the two gun barrels that slide out beneath it,
  // smoking. He opens fire on the cooks with them in episode 22.
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
  // One of his iron shields seen almost edge-on, the face a sliver and the
  // rim's thickness hatched as it turns away, the pearl set in its face
  // standing off it in his colour, and the fire he lights when he first bleeds
  // licking up behind it. Episode 25.
  'pearl': [
    {
      d: 'M66 66 C52 62 40 54 42 38 C46 44 50 46 54 44 C50 34 54 22 64 16 C64 26 68 32 74 34 C74 26 80 18 88 16 C84 28 90 38 94 48',
      role: 'soft',
    },
    { d: 'M91.5 62.5 C75.7 60.3 60.6 167.2 76.5 169.5' },
    {
      d: 'M91.5 62.5 C117.3 66.1 121.8 91 117.7 120.7 C113.5 150.4 102.2 173.1 76.5 169.5',
    },
    {
      d: 'M91.5 62.5 C103.4 64.2 106 88.8 101.8 118.5 C97.6 148.2 88.4 171.1 76.5 169.5',
      role: 'soft',
    },
    {
      d: 'M111.9 89.6 L118.4 86.5 M113.7 106 L120.2 102.9 M111.2 123.9 L117.7 120.7 M106.7 141.4 L113.2 138.3 M98.5 156.4 L105 153.3',
      role: 'ambient',
    },
    { d: 'M73.5 104.4 C56 99.9 52.6 123.7 70.7 124.2', role: 'accent' },
    { d: 'M75.1 100.6 L70.2 128.2', role: 'soft' },
    shadow(86, 180, 40),
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

  // His fur cap: the crown in his colour with its seams, the thick fur turned
  // up around it, the far side hatched. He wears it from his first scene at
  // Arlong Park in episode 31.
  'arlong': [
    { d: 'M46 100 C44 66 62 48 82 48 C102 48 120 66 118 100', role: 'accent' },
    { d: 'M66 54 Q60 76 62 96 M100 54 Q106 76 104 96', role: 'soft' },
    {
      d: 'M36 104 q4 -8 10 -6 q4 -8 12 -5 q6 -7 13 -4 q6 -6 13 -2 q7 -5 13 0 q7 -3 12 3 q7 0 9 8 q6 6 2 14 q4 8 -2 14 q-6 6 -14 4 q-6 6 -14 3 q-8 6 -16 2 q-8 4 -15 -1 q-8 2 -13 -4 q-8 0 -10 -8 q-6 -6 -2 -12 q-4 -6 1 -6',
    },
    {
      d: 'M46 112 l2 6 M58 114 l1 6 M72 116 l1 6 M86 116 v6 M100 115 l-1 6 M114 112 l-2 6',
      role: 'soft',
    },
    { d: 'M120 112 l8 -4 M120 124 l8 -4', role: 'ambient' },
    { d: 'M108 64 l8 -4 M112 76 l8 -4 M114 88 l6 -3', role: 'ambient' },
    shadow(82, 152, 50),
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
  // A black belt, tied, the two ends hanging.
  'kuroobi': [
    { d: 'M16 86 C44 72 62 74 68 86 L68 114 C58 100 38 100 16 110 Z' },
    { d: 'M144 86 C116 72 98 74 92 86 L92 114 C102 100 122 100 144 110 Z' },
    { d: 'M22 96 C44 86 58 88 66 96', role: 'soft' },
    { d: 'M68 84 H92 V116 H68 Z', role: 'accent' },
    { d: 'M72 90 C78 98 82 98 88 90', role: 'accent' },
    { d: 'M68 116 C62 142 58 164 52 186 L66 190 C72 166 76 142 78 116 Z' },
    { d: 'M92 116 C98 142 102 164 108 186 L94 190 C88 166 84 142 82 116 Z' },
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
  // A watering can standing among the mandarin trees.
  'nojiko': [
    { d: 'M22 176 V144' },
    { d: circle(22, 124, 20) },
    {
      d: dots([
        [14, 118],
        [28, 130],
        [22, 110],
      ]),
    },
    { d: 'M134 176 V152' },
    { d: circle(134, 134, 16) },
    {
      d: dots([
        [128, 128],
        [140, 140],
      ]),
    },
    { d: 'M50 122 H100 L94 172 H56 Z' },
    { d: 'M56 122 V112 H94 V122' },
    { d: 'M62 112 C66 98 86 98 90 112' },
    { d: 'M100 130 L128 104 L136 112 L104 142 Z', role: 'accent' },
    { d: 'M126 102 C134 94 144 98 140 108', role: 'accent' },
    { d: 'M4 176 H156', role: 'ambient' },
  ],
  // A pinwheel turning on the brim of a cap.
  'genzo': [
    { d: 'M40 146 C36 110 58 88 82 88 C108 88 126 110 122 146 Z' },
    { d: 'M36 146 H126 V158 H36 Z' },
    { d: 'M126 150 C146 150 152 158 150 164 H126' },
    { d: 'M82 60 V90', role: 'soft' },
    {
      d: 'M82 58 L82 30 L100 40 Z M82 58 L110 58 L100 76 Z M82 58 L82 86 L64 76 Z M82 58 L54 58 L64 40 Z',
      role: 'accent',
    },
    { d: circle(82, 58, 3), role: 'accent' },
    shadow(84, 176, 50),
  ],
  // A Marine coat hung out on a mandarin branch.
  'bell-mere': [
    { d: 'M10 52 C50 40 110 44 150 38' },
    {
      d: 'M40 50 q6 -12 16 -8 q-4 12 -16 8z M118 44 q10 -10 18 -2 q-10 8 -18 2z',
    },
    { d: circle(56, 66, 11), role: 'accent' },
    { d: circle(124, 60, 11), role: 'accent' },
    { d: 'M80 46 V60' },
    { d: 'M56 76 L80 60 L104 76' },
    { d: 'M56 76 C44 100 40 134 44 170 H116 C120 134 116 100 104 76' },
    { d: 'M80 66 V170', role: 'soft' },
    {
      d: 'M48 100 C40 120 38 142 40 162 M112 100 C120 120 122 142 120 162',
      role: 'soft',
    },
    shadow(80, 180, 46),
  ],
  // A purse tipped over, the coins running out of the mouth.
  'nezumi': [
    {
      d: 'M34 106 C16 126 20 158 44 170 C70 182 100 168 102 142 C104 120 92 104 72 98 Z',
    },
    { d: 'M72 98 C84 88 98 88 104 96', role: 'soft' },
    { d: 'M66 92 C82 78 104 78 112 90' },
    { d: 'M66 92 C58 84 58 74 66 70 M112 90 C120 82 120 72 112 68' },
    {
      d: `${circle(118, 110, 13)} ${circle(136, 134, 13)} ${circle(122, 160, 13)}`,
      role: 'accent',
    },
    {
      d: dots([
        [118, 110],
        [136, 134],
        [122, 160],
      ]),
      role: 'accent',
    },
    shadow(70, 186, 48),
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
  // A single wanted poster nailed to a noticeboard, the reward line under an
  // empty frame.
  'loguetown': [
    { d: 'M20 40 H140 V150 H20 Z' },
    { d: 'M34 150 V184 M126 150 V184' },
    { d: 'M48 52 H112 V140 H48 Z' },
    { d: 'M58 64 H102', role: 'soft' },
    { d: 'M58 74 H102 V112 H58 Z', role: 'soft' },
    { d: 'M60 126 H100', role: 'accent' },
    {
      d: dots([
        [52, 56],
        [108, 56],
      ]),
    },
    shadow(80, 190, 56),
  ],
  // A jitte, and the smoke that goes with its owner.
  'smoker': [
    { d: 'M52 174 L112 46' },
    { d: 'M112 46 l4 -8' },
    { d: 'M100 72 l18 6' },
    { d: 'M60 160 l8 4 M66 148 l8 4 M72 136 l8 4', role: 'ambient' },
    { d: 'M36 120 C20 106 38 96 30 82 C22 68 44 60 36 44', role: 'accent' },
    { d: 'M52 112 C44 100 58 92 52 78 C46 66 62 58 56 46', role: 'accent' },
    shadow(84, 182, 30),
  ],
  // A pair of glasses left resting on a sheathed katana.
  'tashigi': [
    { d: 'M14 140 L146 110 M16 151 L148 121' },
    { d: 'M14 140 L16 151' },
    { d: 'M146 110 C153 112 153 119 148 121' },
    { d: 'M47.7 122.6 L54.3 152' },
    { d: 'M28 138 l2 11 M38 136 l2 11', role: 'soft' },
    { d: ellipse(82, 94, 18, 13), role: 'accent' },
    { d: ellipse(122, 86, 18, 13), role: 'accent' },
    {
      d: 'M100 91 L104 87 M64 96 C52 100 44 106 42 114 M140 88 C147 94 149 102 147 110',
    },
    shadow(80, 172, 56),
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

  // A long back arching out of the sea, fins along its ridge, and a small boat rowing past.
  'lord-of-the-coast': [
    {
      d: 'M12 156 C26 92 66 66 90 94 C102 110 110 136 120 156',
      role: 'accent',
    },
    {
      d: 'M30 156 C42 110 66 92 84 110 C94 124 100 142 106 156',
      role: 'accent',
    },
    {
      d: 'M42 100 l-6 -12 l14 4 M60 84 l-2 -14 l12 10 M80 80 l4 -14 l6 14',
      role: 'soft',
    },
    { d: 'M126 146 h26 l-5 8 h-16z' },
    { d: 'M132 146 l-8 -14 M146 146 l8 -12', role: 'soft' },
    ...SEA,
  ],
} satisfies Drawings

/**
 * Zoro's third sword as each redrawing starts it: the sheath without its plain
 * guard (`sheath`'s fourth stroke), which each new sword draws its own.
 */
const THIRD_SHEATH = sheath(22, 'soft').filter((_, index) => index !== 3)

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

/** Luffy's hat, smaller, hung by its string from the haft of the Elbaf axe. */
const LUFFY_HUNG = 'translate(72 92) scale(0.46) rotate(-8 80 110)'

/** The records of this stretch drawn again, from the episode the story changes them. */
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
    {
      episode: 3,
      chapter: 5,
      value: [
        ...sheath(-22, 'soft'),
        ...sheath(0, 'accent'),
        ...sheath(22, 'soft'),
        shadow(80, 176, 40),
      ],
    },
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
  // The same cannonball with a crown set on it askew, the fuse still lit: the
  // ball's top runs under the band, the five points end in knobs and the
  // band's far side is hatched. The world names him one of the new Four
  // Emperors in 1080 (ch. 1053).
  'buggy': [
    {
      episode: 1080,
      chapter: 1053,
      value: [
        { d: 'M50 96 A34 34 0 1 0 90 87', role: 'accent' },
        { d: 'M50 112 q3 -9 10 -13', role: 'ambient' },
        { d: 'M100 92 C106 72 116 66 130 66' },
        {
          d: 'M136 52 v-8 M136 76 v8 M124 64 h-8 M148 64 h8 M128 56 l-6 -6 M144 56 l6 -6 M128 72 l-6 6 M144 72 l6 6',
          role: 'accent',
        },
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
        shadow(76, 168, 30),
      ],
    },
  ],
  // The Sorcery Clima-Tact leant across the box from the ground, its round
  // knobs at both ends, collars banding the grip and both necks, the far side
  // hatched; Zeus heaped above the top knob as a cloud with no face, his bolt
  // the one mark in her colour, and a small copy of her first drawing's chart
  // at the foot. The chart is not a prop of the scene: it is her emblem as
  // navigator and cartographer, whose dream is to draw a map of the world,
  // carried over as Sengoku's cap and Sakazuki's braid are (#203, #207). Zeus
  // comes out of the staff as her servant aboard the Sunny in 878 (ch. 903).
  'nami': [
    {
      episode: 878,
      chapter: 903,
      value: [
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
        { d: `${circle(34, 168, 8.5)} ${circle(116, 74, 8.5)}` },
        { d: 'M67.8 129.3 L82.2 112.7', role: 'soft' },
        {
          d: 'M46.7 159.8 L46.2 156 M53.9 151.5 L53.5 147.7 M61.2 143.3 L60.7 139.4 M90.6 109.5 L90.2 105.6 M97.9 101.2 L97.4 97.3 M105.1 92.9 L104.6 89 M41.8 166.1 L38.4 166.9 M41.7 170.2 L38.3 169.2 M39.5 173.8 L37.1 171.2 M123.8 72.1 L120.4 72.9 M123.7 76.2 L120.3 75.2 M121.5 79.8 L119.1 77.2',
          role: 'ambient',
        },
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
      ],
    },
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
  // Six swords fanned out in a ring, one for each arm. He first takes up all
  // six against Zoro in 39 (ch. 84).
  'hatchan': [
    {
      episode: 39,
      chapter: 84,
      value: [
        { d: 'M84 84 L80 44 L76 84 Z' },
        { d: 'M101.1 98.5 L133.7 75 L97.1 91.5 Z' },
        { d: 'M97.1 120.5 L133.7 137 L101.1 113.5 Z' },
        { d: 'M76 128 L80 168 L84 128 Z' },
        { d: 'M58.9 113.5 L26.3 137 L62.9 120.5 Z' },
        { d: 'M62.9 91.5 L26.3 75 L58.9 98.5 Z' },
        { d: circle(80, 106, 20), role: 'accent' },
        { d: circle(80, 106, 10), role: 'soft' },
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
}
