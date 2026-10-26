import type { Drawings } from '~/data/art/stroke'
import { circle, ellipse, shadow } from '~/lib/svg/primitives'

/** Original objects; the cited episode/chapter references await direct viewing. */
export const ZOLDYCK_DRAWINGS = {
  // Coco Loo's small tour-guide cap: episode22 / chapter39. No lettering.
  'coco-loo': [
    { d: 'M35 81 L43 53 Q80 39 116 54 L126 82' },
    { d: 'M35 81 Q80 65 126 82 L122 108 Q80 91 39 108 Z' },
    { d: 'M39 108 Q78 99 117 109 Q108 134 54 135 Z', role: 'accent' },
    { d: 'M54 135 Q94 143 117 115 L117 109', role: 'soft' },
    { d: 'M43 53 Q80 67 116 54', role: 'soft' },
    { d: 'M43 87 Q80 77 117 88', role: 'soft' },
    { d: 'M44 95 Q80 85 118 96', role: 'soft' },
    { d: 'M109 60 L116 67 M111 72 L120 77', role: 'ambient' },
    { d: 'M64 115 Q82 111 103 115', role: 'soft' },
    shadow(80, 171, 43),
  ],
  // Zebro's service-door key and ring: episode22 / chapter39.
  'zebro': [
    { d: ellipse(65, 54, 24, 12) },
    { d: 'M41 54 V59 C41 74 89 74 89 59 V54', role: 'soft' },
    { d: circle(71, 84, 14), role: 'accent' },
    { d: circle(71, 84, 6), role: 'soft' },
    { d: 'M67 98 L61 147 L66 160 H82 V148 H91 V137 H79 L80 96' },
    { d: 'M72 103 L67 145 L72 153', role: 'soft' },
    { d: 'M82 148 L77 143 H86', role: 'soft' },
    { d: 'M76 114 L80 117 M74 125 L78 128 M72 136 L76 139', role: 'ambient' },
    { d: 'M55 62 L53 69 M62 65 V72', role: 'soft' },
    shadow(78, 183, 34),
  ],
  // Mike's long clawed forepaw: episode22 / chapter40. No head or eyes.
  'mike': [
    { d: 'M55 35 L48 62 L51 67 L42 93 C35 111 35 134 46 145' },
    { d: 'M97 34 L107 58 L104 66 L115 93 C125 111 123 134 112 143' },
    { d: 'M55 35 Q75 42 97 34', role: 'soft' },
    {
      d: 'M46 145 Q42 162 48 170 Q58 165 59 144 M63 147 Q61 170 69 177 Q78 168 78 147 M83 146 Q84 172 92 176 Q100 164 99 144 M105 142 Q113 163 121 162 Q123 151 112 135',
      role: 'accent',
    },
    {
      d: 'M49 111 Q55 105 62 110 M69 109 Q77 104 85 109 M93 108 Q103 104 109 111',
      role: 'soft',
    },
    { d: 'M56 80 L62 89 L57 97 M98 77 L92 89 L99 95', role: 'soft' },
    { d: 'M47 96 L51 103 M44 109 L47 116 M111 99 L115 107', role: 'ambient' },
    { d: 'M54 120 L56 135 M74 119 V138 M95 119 L96 134', role: 'soft' },
    { d: 'M110 116 L115 124 M110 128 L113 134', role: 'ambient' },
    shadow(82, 189, 48),
  ],
  // Seaquant's white headband, folded with its tied ends: episode23 / chapter40.
  'seaquant': [
    { d: 'M33 91 C33 60 125 58 128 87 L126 112 C123 139 35 141 32 112 Z' },
    { d: 'M33 91 C38 111 124 112 128 87', role: 'accent' },
    { d: 'M42 88 C48 69 113 68 119 85', role: 'soft' },
    { d: 'M44 93 C64 103 102 104 120 93', role: 'soft' },
    { d: 'M32 112 C41 128 118 129 126 112', role: 'soft' },
    { d: 'M106 117 L118 113 L125 122 L115 132 Z' },
    { d: 'M115 132 L109 153 L124 149 L119 130' },
    { d: 'M122 124 L138 141 L143 130 L125 118', role: 'soft' },
    { d: 'M40 114 L44 122 M49 118 L52 126 M59 121 L61 129', role: 'ambient' },
    shadow(80, 180, 47),
  ],
  // Canary's staff and its rounded end: named-scene gate episode24 / chapter42.
  'canary': [
    { d: 'M52 164 L93 42 Q98 34 103 39 Q108 42 104 49 L64 168 Z' },
    { d: 'M93 42 Q98 48 104 46', role: 'accent' },
    { d: 'M54 155 L66 159 L64 168 L52 164 Z', role: 'accent' },
    { d: 'M58 151 L96 48', role: 'soft' },
    { d: 'M86 61 L96 65 M83 69 L93 73 M80 78 L90 81', role: 'soft' },
    { d: 'M75 95 L85 98 M72 103 L82 106', role: 'soft' },
    { d: 'M65 124 L75 127 M62 132 L72 135', role: 'soft' },
    { d: 'M56 161 L61 164 M97 40 L100 42', role: 'ambient' },
    { d: 'M100 53 L102 49 M67 150 L69 144', role: 'ambient' },
    shadow(81, 186, 36),
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
  // Milluki's whip and wrapped handle: episode23 / chapter42.
  'milluki': [
    { d: 'M37 157 L56 113 L66 118 L49 163 Z', role: 'accent' },
    { d: 'M56 113 L58 105 L69 110 L66 118 Z' },
    {
      d: 'M39 151 L51 155 M42 143 L54 147 M45 135 L57 139 M49 127 L60 131',
      role: 'soft',
    },
    {
      d: 'M58 106 C70 89 113 102 118 73 C124 37 69 30 61 58 C52 90 125 96 125 128 C125 153 93 158 82 145',
    },
    {
      d: 'M62 108 C76 94 117 103 123 75 C131 33 67 25 56 57 C44 96 119 101 119 128 C119 147 96 153 85 141',
      role: 'soft',
    },
    { d: 'M84 141 L77 149 L71 146 L79 138', role: 'soft' },
    { d: 'M41 160 L35 172 L42 177 L48 164', role: 'soft' },
    { d: 'M67 47 L69 52 M80 39 L81 44 M97 39 L96 44', role: 'ambient' },
    { d: 'M117 117 L122 115 M118 129 L124 129', role: 'ambient' },
    shadow(79, 188, 49),
  ],
  // Zeno's hanging tabard panels, laid flat: episode24 / chapter42.
  // The canonical lettering is deliberately omitted under the house rules.
  'zeno': [
    {
      d: 'M45 42 L68 35 Q80 45 92 35 L115 42 L109 96 L114 162 H83 L80 112 L77 162 H46 L51 96 Z',
    },
    { d: 'M68 35 L70 54 L80 64 L90 54 L92 35', role: 'soft' },
    { d: 'M53 47 L58 95 L54 153 M107 47 L102 95 L106 153', role: 'soft' },
    { d: 'M57 68 L73 72 L72 105 L56 102 Z', role: 'accent' },
    { d: 'M87 72 L103 68 L104 102 L88 105 Z', role: 'accent' },
    { d: 'M59 108 L71 110 M89 110 L101 108', role: 'soft' },
    { d: 'M60 125 L58 146 M99 125 L101 146', role: 'soft' },
    { d: 'M49 54 L53 60 M48 65 L52 71 M109 113 L105 119', role: 'ambient' },
    { d: 'M47 157 L77 157 M84 157 H113', role: 'soft' },
    shadow(80, 186, 44),
  ],
  // Kalluto's broad obi and folded ends: named-scene gate episode24 / chapter42.
  // No fan, paper power or later affiliation.
  'kalluto': [
    { d: 'M34 83 C51 70 105 70 124 82 L122 113 C104 128 52 128 34 114 Z' },
    { d: 'M34 83 C51 97 106 98 124 82', role: 'soft' },
    { d: 'M34 91 C55 106 103 106 123 92', role: 'accent' },
    { d: 'M34 105 C55 119 102 119 123 104', role: 'soft' },
    { d: 'M82 89 L100 75 L112 91 L96 105 Z' },
    { d: 'M82 89 L66 73 L55 89 L70 104 Z' },
    { d: 'M75 88 L91 88 L94 105 L76 108 Z', role: 'soft' },
    { d: 'M77 108 L70 149 L84 142 L92 148 L92 107' },
    { d: 'M59 90 L70 94 M96 91 L106 87 M80 117 L78 133', role: 'soft' },
    shadow(81, 180, 48),
  ],
  // The visited country's mountain seen beyond the arrival train:
  // episode22 / chapter39, with no invented map boundary or national symbol.
  'republic-of-padokea': [
    { d: 'M16 105 L61 46 L76 52 L90 43 L141 105' },
    { d: 'M61 46 Q74 62 90 43', role: 'soft' },
    { d: 'M54 67 L43 96 M99 68 L114 99', role: 'ambient' },
    { d: 'M29 124 L37 105 H118 L129 124 V144 H29 Z' },
    { d: 'M37 105 L43 99 H113 L118 105', role: 'soft' },
    {
      d: 'M40 111 H57 V123 H35 M64 111 H82 V123 H64 Z M90 111 H111 L119 123 H90 Z',
      role: 'accent',
    },
    { d: 'M30 133 H128 M46 128 V140 M86 128 V140', role: 'soft' },
    { d: `${circle(46, 146, 6)} ${circle(108, 146, 6)}` },
    { d: 'M9 155 H151 M11 162 H149', role: 'ambient' },
    shadow(80, 176, 54),
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
