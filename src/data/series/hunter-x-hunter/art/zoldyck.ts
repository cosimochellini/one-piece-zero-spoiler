import type { Drawings } from '~/data/art/stroke'
import { circle, ellipse, shadow } from '~/lib/svg/primitives'

/** Original objects; the cited episode/chapter references await direct viewing. */
export const ZOLDYCK_DRAWINGS = {
  // Coco Loo's small tour-guide hat, worn tilted, its round crown and the
  // band at its rim: she welcomes the bus tour in episode 22 / chapter 39.
  // No badge, no lettering.
  'coco-loo': [
    {
      d: 'M40 108 C38 80 54 64 80 64 C106 64 122 80 120 108',
      transform: 'rotate(-14 80 100)',
    },
    {
      d: 'M40 108 V117 A40 13 0 0 0 120 117 V108 A40 13 0 0 1 40 108',
      role: 'accent',
      transform: 'rotate(-14 80 100)',
    },
    { d: 'M50 88 Q56 74 72 69', role: 'soft', transform: 'rotate(-14 80 100)' },
    {
      d: 'M106 78 L111 74 M108 86 L115 81 M110 94 L117 89 M111 101 L118 97',
      role: 'ambient',
      transform: 'rotate(-14 80 100)',
    },
    {
      d: 'M46 113 Q80 122 114 113',
      role: 'soft',
      transform: 'rotate(-14 80 100)',
    },
    shadow(80, 180, 40),
  ],
  // Zebro's key to the service door, seen from its corner: the guard keeps
  // it at the gate for intruders, in episode 22 / chapter 39.
  'zebro': [
    { d: ellipse(80, 50, 22, 15), role: 'accent' },
    { d: 'M58 50 V55 A22 15 0 0 0 102 55 V50' },
    { d: ellipse(80, 48, 10, 6) },
    { d: 'M63 44 Q68 39 76 37.5', role: 'soft' },
    { d: ellipse(80, 72, 7, 2.5), role: 'soft' },
    { d: 'M76 73 V154 H82 V73' },
    { d: 'M82 154 L86 151 V148 M86 123 V74' },
    { d: 'M82 126 H100 V133 H94 V139 H100 V148 H82' },
    { d: 'M82 126 L86 123 H104 L100 126 M104 123 V145 L100 148', role: 'soft' },
    {
      d: 'M82.5 92 L85.5 90 M82.5 106 L85.5 104 M101 132 L103.5 130 M101 141 L103.5 139',
      role: 'ambient',
    },
    shadow(84, 184, 28),
  ],
  // Mike's long, hand-like forepaw curling round the service door from the
  // dark: the hand that opens it and throws the intruders out in episode 22 /
  // chapter 40. Fingers and claws only; no head.
  'mike': [
    { d: 'M26 162 V32 H130 V162' },
    { d: 'M32 162 V38 H124 V162', role: 'soft' },
    { d: 'M96 164 L32 160 V40 L96 36 V48 M96 64 V71 M96 87 V96 M96 110 V164' },
    { d: 'M96 36 L102 38 V48 M102 64 V71 M102 87 V96 M102 110 V162 L96 164' },
    { d: 'M42 122 L86 120 V150 L42 152 Z', role: 'soft' },
    {
      d: 'M106 44 L120 40 M106 128 L114 124 M106 140 L122 132 M106 152 L122 144',
      role: 'ambient',
    },
    {
      d: 'M124 52 C116 49 106 47 99 49 C93 51 89 56 85 61 M88 66 C92 62 96 61 101 62 C107 63 115 64 124 66',
    },
    {
      d: 'M124 74 C116 71 106 70 99 72 C91 75 83 81 76 88 M80 92 C87 86 94 83 100 84 C108 85 116 87 124 89',
    },
    {
      d: 'M124 98 C116 96 107 96 101 98 C96 100 92 104 89 108 M92 112 C96 108 100 107 104 108 C110 109 118 110 124 112',
    },
    {
      d: 'M85 61 C78 65 76 73 79 80 C81 74 84 70 88 66 M76 88 C69 93 67 102 70 108 C72 102 75 96 80 92 M89 108 C84 112 83 119 85 124 C87 119 89 115 92 112',
      role: 'accent',
    },
    { d: 'M91 54 Q93 57 91 61 M86 79 Q89 82 87 86', role: 'soft' },
    {
      d: 'M118 46 L121 50 L119 52 L123 55 M117 116 L121 119 L119 122 L123 124',
      role: 'soft',
    },
    shadow(80, 167, 54),
  ],
  // Seaquant's white headband, off and still in its loop, the knot pulled
  // tight and the two tails trailing: the groundskeeper at the servants'
  // quarters in episode 23 / chapter 40.
  'seaquant': [
    { d: ellipse(76, 112, 46, 17) },
    { d: 'M30 112 V119 A46 17 0 0 0 122 119 V112' },
    { d: 'M34 117 A42 13 0 0 1 118 117', role: 'soft' },
    { d: 'M50 105 L53 101 M62 103 L65 99 M76 102 L79 98', role: 'ambient' },
    { d: 'M52 124 Q56 128 62 128 M88 129 Q96 128 100 125', role: 'soft' },
    { d: 'M104 122 L112 116 L122 120 L118 130 L108 131 Z', role: 'accent' },
    {
      d: 'M118 128 C126 136 130 148 126 160 L134 158 C138 146 132 132 122 124',
    },
    { d: 'M110 131 C108 142 100 152 92 158 L99 162 C107 155 114 144 116 132' },
    shadow(80, 178, 52),
  ],
  // Canary's staff, its foot on the line she draws across the path:
  // she stops anyone who crosses it in episode 23 / chapter 41, ahead of
  // her named scene in episode 24 / chapter 42.
  'canary': [
    { d: 'M45.6 155.7 L107.6 37.6 M54.4 160.4 L116.4 42.4' },
    { d: 'M45.6 155.7 A5 2.3 28 0 0 54.4 160.4', role: 'soft' },
    { d: 'M49.7 153.2 L108.6 42.8', role: 'soft' },
    { d: circle(116, 33, 8), role: 'accent' },
    { d: 'M107.6 37.6 A5 2 28 0 0 116.4 42.4', role: 'soft' },
    { d: 'M111 29 Q113 25.5 118 25.5', role: 'soft' },
    { d: 'M119 38 L122 35 M116 40 L121 35', role: 'ambient' },
    {
      d: 'M60.5 140.5 l4 -2 M66.9 128.5 l4 -2 M73.3 116.5 l4 -2 M79.7 104.5 l4 -2',
      role: 'ambient',
    },
    { d: 'M12 160 Q70 156 148 158', role: 'soft' },
    shadow(86, 164, 44),
  ],
  // Gotoh's unlettered coins, turned edge on and resting in a small stack:
  // named-scene gate episode25 / chapter43; no later Nen attack.
  'gotoh': [
    { d: ellipse(76, 130, 37, 12) },
    { d: 'M39 130 V139 C39 155 113 155 113 139 V130' },
    { d: ellipse(76, 130, 28, 7), role: 'soft' },
    { d: 'M40 139 C54 151 99 151 112 138', role: 'soft' },
    {
      d: 'M47 141 V145 M57 145 V148 M69 147 V150 M82 148 V151 M95 145 V148 M105 141 V145',
      role: 'ambient',
    },
    { d: ellipse(82, 74, 21, 30), role: 'accent' },
    { d: 'M89 45 C119 48 120 95 90 103', role: 'soft' },
    { d: ellipse(82, 74, 14, 23), role: 'soft' },
    { d: 'M107 61 L111 64 M108 71 L113 73 M106 83 L111 85', role: 'ambient' },
    shadow(78, 181, 48),
  ],
  // Milluki's whip, the wrapped handle seen from its end and the lash
  // tapering to its tip: he whips the chained Killua in episode 23 /
  // chapter 42.
  'milluki': [
    { d: 'M53.7 123.5 L29.7 165.5 M62.3 128.5 L38.3 170.5', role: 'accent' },
    { d: 'M29.7 165.5 A5 2.5 30 1 0 38.3 170.5 A5 2.5 30 1 0 29.7 165.5' },
    { d: 'M53.7 123.5 A5 2.5 30 0 0 62.3 128.5', role: 'soft' },
    {
      d: 'M36.7 153.3 L43.3 161.7 M42.7 142.8 L49.3 151.2 M48.7 132.3 L55.3 140.7',
      role: 'soft',
    },
    { d: 'M54 122 C48 80 92 38 126 54 C150 66 140 108 114 114' },
    { d: 'M62 126 C57 86 96 46 124 58 C144 67 136 104 114 114' },
    {
      d: 'M114 114 C96 120 86 136 98 150 C110 162 132 158 146 166',
      role: 'soft',
    },
    { d: 'M146 166 L151 164 M146 166 L150 170', role: 'soft' },
    { d: 'M60 100 L64 98 M66 82 L70 81 M78 66 L81 66', role: 'ambient' },
    shadow(84, 186, 50),
  ],
  // The long panel hanging down the front of Zeno's robe from under its
  // standing collar, its back turned at the hem: Killua's grandfather in
  // episode 24 / chapter 42. The words on it are left off.
  'zeno': [
    { d: 'M66 40 Q80 46 94 40 V34 Q80 40 66 34 Z' },
    {
      d: 'M66 40 Q50 44 34 54 L26 92 M94 40 Q110 44 126 54 L134 92',
      role: 'soft',
    },
    { d: 'M40 72 L44 168 M120 72 L116 168', role: 'soft' },
    {
      d: 'M66 44 L96 44 C100 80 102 120 108 156 L68 162 C64 124 62 84 66 44 Z',
      role: 'accent',
    },
    { d: 'M96 44 L100 46 C104 82 106 120 112 154 L108 156' },
    { d: 'M68 162 C70 168 80 170 92 166 L110 160 L108 156' },
    { d: 'M75 58 C76 90 76 124 79 154', role: 'soft' },
    {
      d: 'M101 66 L103 64 M102 88 L104 86 M103 110 L105 108 M105 132 L107 130 M78 164 L82 161 M88 165 L92 162',
      role: 'ambient',
    },
    shadow(80, 184, 40),
  ],
  // Kalluto's furisode, the long sleeves hanging and the broad obi across
  // it: he follows his mother to the gate in episode 24 / chapter 42.
  // No fan, no paper.
  'kalluto': [
    {
      d: 'M70 34 L46 42 L24 50 L22 128 Q22 136 32 136 L44 134 L48 80 M90 34 L114 42 L134 50 L136 126 Q136 132 128 132 L116 130 L112 80',
    },
    { d: 'M48 110 L50 170 Q80 175 110 170 L112 110' },
    { d: 'M70 34 L86 72 M77 34 L90 64 M92 34 L82 52', role: 'soft' },
    { d: 'M48 82 Q80 88 112 82 V108 Q80 114 48 108 Z', role: 'accent' },
    { d: 'M84 112 L88 171', role: 'soft' },
    { d: 'M48 80 L46 42 M112 80 L114 42', role: 'soft' },
    {
      d: 'M120 60 L130 54 M120 76 L132 69 M120 92 L132 85 M120 108 L132 101',
      role: 'ambient',
    },
    { d: 'M30 70 Q34 100 30 126', role: 'soft' },
    shadow(80, 186, 44),
  ],
  // The tour bus that takes the three from town towards Kukuroo Mountain,
  // its summit over the roof: the arrival in Padokea in episode 22 /
  // chapter 39. No route board, no company name.
  'republic-of-padokea': [
    { d: 'M64 81.6 L90 46 L100 51 L110 44 L160 98', role: 'soft' },
    { d: 'M24 90 L50 80 V142 L24 138 Z' },
    { d: 'M50 80 L138 90 V136 L50 142' },
    { d: 'M28 94 L46 87 V110 L28 114 Z', role: 'soft' },
    { d: 'M24 130 L50 134 M50 128 L138 124', role: 'soft' },
    {
      d: 'M58 88.9 L73 90.6 V112.6 L58 110.9 Z M77 91.1 L92 92.8 V114.8 L77 113.1 Z M96 93.2 L111 94.9 V116.9 L96 115.2 Z M115 95.4 L130 97.1 V119.1 L115 117.4 Z',
      role: 'accent',
    },
    {
      d: 'M58.5 140.8 A9.5 9.5 0 0 0 77.5 140.8 M111.5 137.6 A9 9 0 0 0 128.5 137.6',
    },
    { d: `${circle(68, 143, 3)} ${circle(120, 142, 2.6)}`, role: 'soft' },
    { d: 'M27 120 L33 117.6 M27 127 L35 123.8', role: 'ambient' },
    { d: 'M6 150 H154', role: 'ambient' },
    shadow(84, 151, 58),
  ],
  // Kukuroo's dormant summit and the walls around the estate:
  // episode22 / chapter39. No lettering, faces or gate emblems.
  'kukuroo-mountain': [
    { d: 'M18 132 L58 48 L70 44 L87 49 L98 43 L145 132' },
    { d: 'M58 48 Q77 65 98 43', role: 'accent' },
    { d: 'M58 48 L72 80 L57 111 M98 43 L88 81 L111 119', role: 'soft' },
    { d: 'M48 85 L39 117 M113 79 L128 115', role: 'ambient' },
    { d: 'M14 150 V132 H59 M103 132 H146 V150', role: 'soft' },
    { d: 'M59 150 V117 Q80 104 103 117 V150 Z' },
    { d: 'M64 150 V121 Q81 111 98 121 V150 M81 115 V150', role: 'soft' },
    { d: 'M66 129 H77 M85 129 H96 M66 140 H77 M85 140 H96', role: 'soft' },
    { d: 'M8 150 H152', role: 'ambient' },
    shadow(80, 159, 49),
  ],
} satisfies Drawings
