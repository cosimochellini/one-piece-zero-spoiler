import {
  BLADE,
  circle,
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

/** The drawings of the records filed in the east blue stretch of the route. */
export const eastBlueArt = {
  // Four small islands, a dotted course between them, a compass watching.
  'east-blue': [
    { d: 'M22 106 q10 -14 26 -6 q8 6 -2 14 q-14 6 -24 -8z' },
    { d: 'M84 84 q14 -10 26 0 q6 8 -6 14 q-16 4 -20 -14z' },
    { d: 'M112 124 q8 -8 20 -2 q6 6 0 12 q-14 6 -20 -10z' },
    { d: 'M54 136 q6 -8 16 -4 q6 4 0 10 q-12 4 -16 -6z' },
    {
      d: 'M34 110 C60 100 70 90 96 90 S120 110 122 128 S80 140 62 138',
      role: 'ambient',
      dashed: true,
    },
    { d: circle(128, 44, 16) },
    {
      d: 'M128 28 L131 41 L144 44 L131 47 L128 60 L125 47 L112 44 L125 41 Z',
      role: 'accent',
    },
    ...SEA,
  ],

  // A barrel adrift, its lid shut, two hoops round the staves.
  'romance-dawn': [
    { d: 'M54 84 Q46 118 54 150 H106 Q114 118 106 84 Z' },
    { d: ellipse(80, 84, 26, 6) },
    { d: 'M50 104 Q80 110 110 104 M50 132 Q80 138 110 132', role: 'accent' },
    { d: 'M68 90 V148 M92 90 V148', role: 'soft' },
    ...SEA,
  ],

  // A straw hat: the brim as one ellipse, the crown as one curve, the band in
  // the captain's red.
  'monkey-d-luffy': [
    { d: ellipse(80, 104, 60, 16) },
    { d: 'M50 100 C50 60 110 60 110 100' },
    { d: 'M55 93 Q80 101 105 93', role: 'accent' },
    { d: 'M56 85 Q80 93 104 85', role: 'accent' },
    shadow(80, 150, 26),
  ],

  // A mop and a wooden bucket: the deck of a ship the boy did not choose. The
  // mop gives way to his bandanna from 314, in `eastBlueRedrawn`.
  'koby': [
    { d: 'M104 26 L64 122' },
    { d: 'M58 118 L74 128' },
    { d: 'M58 120 C50 140 52 158 48 172', role: 'accent' },
    { d: 'M64 124 C60 144 64 160 62 174', role: 'accent' },
    { d: 'M70 128 C70 146 76 160 76 172', role: 'accent' },
    { d: 'M86 130 H142 L134 174 H94 Z' },
    { d: 'M88 146 H140 M91 160 H137', role: 'soft' },
    { d: 'M88 130 q26 -24 52 0' },
    shadow(84, 182, 44),
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
  // An execution scaffold: two uprights, the crossbeam, the platform.
  'gold-roger': [
    { d: 'M26 148 H134 V168 H26 Z' },
    { d: 'M46 148 V46 M114 148 V46' },
    { d: 'M34 42 H126', role: 'accent' },
    { d: 'M46 62 H114', role: 'accent' },
    { d: 'M46 62 L62 46 M114 62 L98 46' },
    { d: 'M6 178 V168 H20 V158 H34' },
    { d: 'M40 168 V178 M120 168 V178' },
    shadow(80, 186, 56),
  ],
  // Three swords in their sheaths, the middle one in green. The third is
  // drawn again as Shusui from 362 and as Enma from 956, in `eastBlueRedrawn`.
  'roronoa-zoro': [
    ...sheath(-22, 'soft'),
    ...sheath(0, 'accent'),
    ...sheath(22, 'soft'),
    shadow(80, 176, 40),
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
  // A great axe: the haft, the crescent blade, the rivets of a steel jaw.
  'morgan': [
    { d: 'M76 188 V50 M88 188 V50' },
    { d: 'M74 190 h16' },
    { d: 'M76 62 h12 M76 76 h12', role: 'soft' },
    {
      d: 'M88 42 C120 38 140 60 138 92 C122 78 106 70 88 68 Z',
      role: 'accent',
    },
    { d: 'M88 54 C106 58 122 68 132 82', role: 'accent' },
    { d: 'M76 44 C54 42 40 56 42 74 C54 64 66 58 76 56 Z' },
    { d: 'M76 36 q6 -10 12 0', role: 'soft' },
    {
      d: dots([
        [102, 58],
        [116, 68],
        [126, 82],
      ]),
    },
    shadow(82, 194, 26),
  ],

  // Two rice balls, each with its strip of seaweed, a few grains fallen beside them.
  'rika': [
    {
      d: 'M30 150 Q26 146 30 140 L58 96 Q62 90 66 96 L94 140 Q98 146 92 150 Z',
      role: 'accent',
    },
    { d: 'M46 150 V126 H78 V150' },
    {
      d: 'M84 166 Q80 162 84 156 L108 118 Q112 112 116 118 L140 156 Q144 162 138 166 Z',
      role: 'accent',
    },
    { d: 'M98 166 V146 H126 V166' },
    {
      d: dots([
        [40, 172],
        [50, 168],
        [60, 174],
        [150, 176],
      ]),
      role: 'soft',
    },
    shadow(86, 180, 60),
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

  // A tavern mug with its head of foam, standing on a tray.
  'makino': [
    { d: 'M54 78 L60 148 H100 L106 78 Z' },
    { d: 'M56 98 H104 M58 124 H102', role: 'soft' },
    { d: 'M106 90 C128 96 128 132 106 138' },
    { d: 'M52 78 q6 -14 18 -6 q8 -14 20 -4 q10 -10 16 10 Z', role: 'accent' },
    { d: ellipse(80, 158, 56, 11) },
    { d: ellipse(80, 158, 44, 8), role: 'soft' },
    shadow(80, 178, 54),
  ],
  // A long rifle laid across a table.
  'benn-beckman': [
    { d: 'M60 104 L146 86 M60 112 L146 94', role: 'accent' },
    { d: 'M144 84 L148 96' },
    { d: 'M40 106 L62 101 L64 115 L42 120 Z' },
    { d: 'M50 120 q8 14 18 6' },
    { d: 'M14 128 C6 122 8 112 18 110 L42 105 L46 121 L22 130 Z' },
    { d: 'M8 152 H152' },
    { d: 'M22 152 V184 M138 152 V184' },
    shadow(78, 146, 52),
  ],
  // A joint of meat, the bone knuckled at both ends.
  'lucky-roux': [
    {
      d: 'M40 132 C36 100 58 72 92 70 C120 70 132 92 126 116 C120 140 92 152 66 146 C50 142 42 138 40 132z',
      role: 'accent',
    },
    { d: 'M126 116 L146 104 M132 128 L150 122' },
    { d: `${circle(148, 100, 6)} ${circle(152, 124, 6)}` },
    { d: 'M62 96 q14 -10 30 -2', role: 'soft' },
    { d: 'M56 118 q10 12 26 12', role: 'soft', dashed: true },
    shadow(88, 170, 44),
  ],
  // A flintlock pistol and the coin its shot went through.
  'yasopp': [
    { d: 'M30 96 H118 V108 H30 Z' },
    { d: 'M52 92 H84 L88 112 H50 Z' },
    { d: 'M50 110 C44 128 40 142 32 156 L52 160 C62 142 66 124 68 112 Z' },
    { d: 'M62 112 q10 14 22 6' },
    { d: 'M84 92 C84 80 96 76 100 86' },
    { d: `${circle(116, 44, 20)} ${circle(116, 44, 13)}`, role: 'accent' },
    { d: circle(116, 44, 4), role: 'accent' },
    { d: 'M122 94 C130 80 130 68 124 60', role: 'ambient', dashed: true },
    shadow(58, 170, 34),
  ],
  // A bandit's sabre and a sack with the coins running out of it.
  'higuma': [
    { d: 'M126 30 C108 56 84 84 62 108' },
    { d: 'M136 40 C118 66 94 94 72 118' },
    { d: 'M126 30 L136 40' },
    { d: 'M62 108 L72 118 L60 130 L50 120 Z' },
    { d: 'M50 120 L32 140 M28 136 L38 146', role: 'soft' },
    {
      d: 'M46 188 C28 184 26 164 38 148 C46 138 56 134 64 132 L92 138 C104 148 110 168 102 182 C96 190 62 192 46 188 Z',
    },
    { d: 'M64 132 q14 -6 28 6', role: 'soft' },
    {
      d: `${circle(110, 126, 7)} ${circle(126, 140, 7)} ${circle(118, 156, 7)}`,
      role: 'accent',
    },
    shadow(74, 192, 44),
  ],
  // An iron cage hung from a ring, the bars shut all the way round.
  'orange-town-arc': [
    { d: 'M40 60 H120 V156 H40 Z' },
    { d: 'M34 60 H126 M34 156 H126', role: 'accent' },
    { d: 'M56 60 V156 M72 60 V156 M88 60 V156 M104 60 V156', role: 'soft' },
    { d: 'M80 60 V44' },
    { d: circle(80, 36, 8), role: 'accent' },
    shadow(80, 172, 52),
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

  // A small shop front, and in front of its door the one sack of dog food saved from it.
  'chouchou': [
    { d: house(36, 88, 76, 50) },
    { d: 'M44 94 h20 v16 h-20z M104 94 h20 v16 h-20z', role: 'soft' },
    {
      d: 'M62 178 C56 164 58 150 66 144 L94 144 C102 150 104 164 98 178 Z',
      role: 'accent',
    },
    { d: 'M66 144 q14 -9 28 0', role: 'accent' },
    { d: 'M70 162 h20', role: 'soft' },
    shadow(80, 184, 40),
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
  // A unicycle and a sabre: the whole act in two objects.
  'cabaji': [
    { d: circle(66, 134, 38), role: 'accent' },
    { d: circle(66, 134, 5), role: 'accent' },
    { d: 'M40 120 L92 148 M40 148 L92 120 M66 96 V172', role: 'soft' },
    { d: 'M62 130 L60 74 M72 130 L74 74' },
    { d: 'M52 74 H84 q8 0 6 -8 H54 q-8 2 -2 8 Z' },
    { d: 'M46 134 h-12 M86 134 h12' },
    { d: 'M112 184 C130 146 142 100 146 46' },
    { d: 'M102 180 C120 142 132 98 136 44' },
    { d: 'M136 44 C140 40 144 42 146 46' },
    { d: 'M100 178 L116 186' },
  ],

  // A spear planted upright beside the leather breastplate he wore to face the pirates.
  'boodle': [
    { d: 'M118 36 V186' },
    { d: 'M118 14 L110 36 H126 Z', role: 'accent' },
    { d: 'M34 96 Q58 86 82 96 L86 150 Q58 162 30 150 Z', role: 'accent' },
    { d: 'M46 91 q12 12 24 0', role: 'soft' },
    { d: 'M36 116 H80 M34 134 H84', role: 'soft' },
    { d: 'M40 150 L36 176 M76 150 L80 176', role: 'ambient' },
    shadow(80, 188, 50),
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
  // A slingshot, the band drawn taut around a star-shaped pellet. Kabuto is
  // drawn from 274 and Kuro Kabuto from 517, in `eastBlueRedrawn`.
  'usopp': [
    { d: 'M80 176 V126' },
    { d: 'M80 126 C78 100 62 92 56 70' },
    { d: 'M80 126 C82 100 98 92 104 70' },
    { d: 'M52 68 l8 4 M108 68 l-8 4' },
    { d: 'M74 150 h12 M74 158 h12 M74 166 h12', role: 'ambient' },
    { d: 'M56 70 Q80 116 104 70', role: 'accent' },
    { d: star(80, 98, 9, 4), role: 'accent' },
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

  // A mansion window, and the glass of medicine left on the sill.
  'kaya': [
    { d: 'M36 152 V76 C36 44 124 44 124 76 V152' },
    { d: 'M80 152 V46', role: 'soft' },
    { d: 'M36 104 H124', role: 'soft' },
    { d: 'M24 152 H136 V164 H24 Z' },
    { d: 'M48 52 C58 84 48 118 56 150', role: 'soft' },
    { d: 'M88 116 L92 152 H106 L110 116 Z', role: 'accent' },
    { d: 'M89 130 H109', role: 'accent' },
    shadow(80, 172, 56),
  ],
  // A glove with five blades where the fingers should be.
  'kuro': [
    { d: 'M62 112 L22 36 L32 32 L70 108 Z', role: 'accent' },
    { d: 'M76 106 L52 20 L62 18 L84 104 Z', role: 'accent' },
    { d: 'M90 104 L86 14 L96 14 L98 104 Z', role: 'accent' },
    { d: 'M102 106 L120 20 L130 24 L110 108 Z' },
    { d: 'M112 112 L142 42 L150 48 L120 116 Z' },
    {
      d: 'M52 152 C44 132 50 116 64 112 L108 110 C122 112 126 128 120 146 C114 160 60 166 52 152 Z',
    },
    { d: 'M58 154 q24 10 58 0', role: 'soft' },
    shadow(84, 174, 40),
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

  // A treasure chest with a shrub growing out of the lid.
  'gaimon': [
    { d: 'M26 178 H134 V112 H26 Z' },
    { d: 'M26 112 C26 80 134 80 134 112' },
    { d: 'M68 112 H92 V134 H68 Z' },
    { d: circle(80, 123, 4) },
    { d: 'M34 178 V112 M126 178 V112', role: 'soft' },
    { d: 'M80 84 C76 68 84 56 80 42', role: 'accent' },
    { d: 'M80 64 C70 58 62 46 66 36 C76 40 80 52 80 60', role: 'accent' },
    { d: 'M80 58 C90 52 98 40 94 30 C84 34 78 48 80 56', role: 'accent' },
    shadow(80, 186, 56),
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
  // A pair of round dark glasses above his sword.
  'johnny': [
    { d: `${circle(56, 76, 20)} ${circle(104, 76, 20)}`, role: 'accent' },
    { d: 'M76 74 q4 -6 8 0', role: 'accent' },
    { d: 'M36 72 L22 64 M124 72 L138 64' },
    { d: 'M48 70 l8 -6 M96 70 l8 -6', role: 'soft' },
    { d: 'M20 144 L118 144 L138 140 L118 136 L20 136 Z' },
    { d: 'M118 128 V152', role: 'accent' },
    { d: 'M118 140 H150' },
    shadow(80, 172, 56),
  ],
  // A crate of limes with one cut open on the top.
  'yosaku': [
    { d: 'M30 118 H130 V176 H30 Z' },
    { d: 'M30 136 H130 M30 156 H130', role: 'soft' },
    { d: 'M44 118 V176 M116 118 V176', role: 'soft' },
    { d: circle(52, 104, 15) },
    { d: circle(108, 104, 15) },
    { d: circle(76, 78, 18), role: 'accent' },
    {
      d: 'M76 78 L76 60 M76 78 L89 65 M76 78 L94 78 M76 78 L89 91 M76 78 L76 96 M76 78 L63 91 M76 78 L58 78 M76 78 L63 65',
      role: 'accent',
    },
    shadow(80, 184, 56),
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

  // A chef's hat, the band braided.
  'zeff': [
    { d: 'M44 122 H116 V156 H44 Z' },
    {
      d: 'M44 122 C28 112 28 86 44 78 C38 58 60 44 76 54 C90 38 114 44 116 64 C134 70 134 100 116 106 C120 114 118 120 116 122',
    },
    {
      d: 'M66 76 C62 92 64 108 66 122 M94 72 C92 90 94 108 94 122',
      role: 'soft',
    },
    { d: 'M48 130 l11 9 l11 -9 l11 9 l11 -9 l11 9 l9 -7', role: 'accent' },
    { d: 'M48 148 l11 -9 l11 9 l11 -9 l11 9 l11 -9 l9 7', role: 'accent' },
    { d: 'M44 156 H116', role: 'soft' },
    shadow(80, 168, 44),
  ],
  // The plate of fried rice Sanji brings him at 21, a spoon resting in it.
  'gin': [
    { d: ellipse(80, 144, 62, 16) },
    { d: ellipse(80, 144, 46, 10), role: 'soft' },
    { d: 'M46 140 C50 112 110 112 114 140', role: 'accent' },
    {
      d: dots([
        [62, 128],
        [78, 122],
        [94, 126],
        [70, 136],
        [100, 136],
      ]),
      role: 'accent',
    },
    { d: 'M96 124 L132 88' },
    { d: ellipse(138, 82, 8, 5) },
    {
      d: 'M64 104 c-6 -10 4 -14 -2 -26 M84 100 c-6 -10 4 -14 -2 -26',
      role: 'ambient',
    },
    shadow(80, 176, 52),
  ],

  // An iron knuckle with four rings, and a bowl of soup with a fly above it.
  'fullbody': [
    {
      d: `${circle(48, 66, 10)} ${circle(70, 66, 10)} ${circle(92, 66, 10)} ${circle(114, 66, 10)}`,
      role: 'accent',
    },
    { d: 'M36 72 C44 102 116 102 124 72', role: 'accent' },
    {
      d: dots([
        [48, 56],
        [70, 56],
        [92, 56],
        [114, 56],
      ]),
      role: 'soft',
    },
    { d: ellipse(80, 142, 34, 6) },
    { d: 'M46 142 C48 164 60 172 80 172 C100 172 112 164 114 142' },
    {
      d: 'M126 122 h0.01 M126 122 q-6 -8 -10 -2 M126 122 q6 -8 10 -2',
      role: 'soft',
    },
    shadow(80, 182, 44),
  ],

  // A glaive taller than its owner, a string of sausages hung from the shaft.
  'carne': [
    { d: 'M52 190 L104 50' },
    {
      d: 'M100 60 C102 36 116 20 136 12 C132 32 124 48 110 64 Z',
      role: 'accent',
    },
    { d: 'M96 56 L112 64', role: 'accent' },
    { d: 'M36 118 Q54 104 80 118', role: 'soft' },
    { d: ellipse(36, 132, 6, 12), role: 'soft' },
    { d: ellipse(36, 160, 6, 12), role: 'soft' },
    { d: 'M36 144 V148', role: 'soft' },
    shadow(78, 192, 40),
  ],

  // A trident as tall as its owner, a carving knife leaning at its foot.
  'patty': [
    { d: 'M80 188 V60' },
    { d: 'M62 60 H98 M62 60 V36 M80 60 V26 M98 60 V36', role: 'accent' },
    {
      d: 'M57 42 L62 28 L67 42 M75 32 L80 16 L85 32 M93 42 L98 28 L103 42',
      role: 'accent',
    },
    { d: 'M75 120 h10 M75 128 h10 M75 136 h10', role: 'soft' },
    { d: 'M110 188 L114 166 M108 166 h12' },
    { d: 'M114 166 L128 102 Q134 98 132 110 L120 166', role: 'soft' },
    shadow(92, 190, 34),
  ],
  // A steel spear and the shoulder plate of a gilded suit.
  'don-krieg': [
    { d: 'M102 192 V80 M114 192 V80' },
    {
      d: 'M102 80 C88 64 94 40 108 18 C122 40 128 64 114 80 Z',
      role: 'accent',
    },
    { d: 'M108 72 V30', role: 'accent' },
    { d: 'M98 86 H118 M100 96 H116' },
    { d: 'M18 172 C12 126 46 96 86 104 L82 128 C54 124 34 144 40 172 Z' },
    { d: 'M28 170 C26 136 50 116 80 120', role: 'soft' },
    {
      d: dots([
        [40, 152],
        [54, 136],
        [72, 128],
      ]),
    },
    { d: 'M14 180 H88', role: 'ambient', dashed: true },
  ],
  // A round iron shield, cracked across.
  'pearl': [
    { d: circle(80, 104, 56) },
    { d: circle(80, 104, 44), role: 'soft' },
    { d: circle(80, 104, 10) },
    {
      d: dots([
        [80, 56],
        [117, 80],
        [117, 128],
        [80, 152],
        [43, 128],
        [43, 80],
      ]),
    },
    { d: 'M50 68 L72 94 L58 112 L86 134 L76 154', role: 'accent' },
    { d: 'M72 94 L98 84 M86 134 L114 130', role: 'accent' },
    shadow(80, 172, 48),
  ],
  // A great sword with a cross for a hilt.
  'dracule-mihawk': [
    { d: 'M73 44 L73 136 M87 44 L87 136', role: 'accent' },
    { d: 'M73 44 L80 26 L87 44', role: 'accent' },
    { d: 'M80 44 V136', role: 'ambient' },
    { d: 'M40 140 H120 M40 140 q-10 0 -8 10 M120 140 q10 0 8 10' },
    { d: 'M74 140 V172 M86 140 V172' },
    { d: 'M74 148 l12 4 M74 156 l12 4 M74 164 l12 4', role: 'ambient' },
    { d: circle(80, 180, 6) },
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

  // A saw-toothed sword, laid over on the diagonal.
  'arlong': [
    { d: 'M80 20 L64 48 V150', transform: 'rotate(-28 80 106)' },
    { d: 'M80 20 L94 48', transform: 'rotate(-28 80 106)' },
    {
      d: 'M94 48 l10 8.5 l-10 8.5 l10 8.5 l-10 8.5 l10 8.5 l-10 8.5 l10 8.5 l-10 8.5 l10 8.5 l-10 8.5 l10 8.5 l-10 8.5',
      role: 'accent',
      transform: 'rotate(-28 80 106)',
    },
    { d: 'M54 150 H106 V162 H54 Z', transform: 'rotate(-28 80 106)' },
    { d: 'M66 162 V188 H94 V162 M62 188 H98', transform: 'rotate(-28 80 106)' },
    {
      d: 'M66 170 H94 M66 178 H94',
      role: 'soft',
      transform: 'rotate(-28 80 106)',
    },
  ],
  // Six swords fanned out in a ring, one for each arm.
  'hatchan': [
    { d: 'M84 84 L80 44 L76 84 Z' },
    { d: 'M101.1 98.5 L133.7 75 L97.1 91.5 Z' },
    { d: 'M97.1 120.5 L133.7 137 L101.1 113.5 Z' },
    { d: 'M76 128 L80 168 L84 128 Z' },
    { d: 'M58.9 113.5 L26.3 137 L62.9 120.5 Z' },
    { d: 'M62.9 91.5 L26.3 75 L58.9 98.5 Z' },
    { d: circle(80, 106, 20), role: 'accent' },
    { d: circle(80, 106, 10), role: 'soft' },
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
  // A jug with a jet of water already out of it.
  'chew': [
    {
      d: 'M46 110 C38 130 40 160 54 170 C68 180 98 178 108 166 C120 152 118 128 110 108 Z',
    },
    { d: 'M60 108 L64 82 H96 L102 108' },
    { d: 'M58 80 H100' },
    { d: 'M102 88 C124 90 126 116 106 122' },
    { d: 'M50 132 C64 126 92 126 106 132', role: 'soft' },
    { d: 'M96 76 C118 54 140 58 146 80', role: 'accent' },
    { d: 'M88 68 C112 42 142 48 150 78', role: 'accent' },
    {
      d: dots([
        [142, 92],
        [150, 96],
      ]),
      role: 'accent',
    },
    shadow(80, 184, 42),
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

/** Nami's chart, drawn at full size and set down, smaller, at the staff's foot. */
const CHART_AT_FOOT = 'translate(90 113) scale(0.42)'
const SMALL_CHART: Stroke[] = [
  ...NAMI_CHART_BODY,
  { d: NAMI_COAST, role: 'soft' } satisfies Stroke,
].map((s) => ({ ...s, transform: CHART_AT_FOOT }))

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
        { d: 'M96 130 H152 L144 174 H104 Z' },
        { d: 'M98 146 H150 M101 160 H147', role: 'soft' },
        { d: 'M98 130 q26 -24 52 0' },
        shadow(86, 182, 56),
      ],
    },
  ],
  'roronoa-zoro': [
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
}
