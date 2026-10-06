import { cell, circle, dots, ellipse, shadow, wave } from '~/lib/svg/primitives'

import type { Drawings } from './stroke'

/** The drawings of the records filed in the egghead stretch of the route. */
export const eggheadArt = {
  // A dome on a platform, a lattice of the future behind it.
  'egghead': [
    {
      d: [
        cell(30, 60),
        cell(52, 48),
        cell(74, 36),
        cell(96, 48),
        cell(118, 60),
      ].join(' '),
      role: 'ambient',
    },
    { d: 'M40 134 a40 40 0 0 1 80 0', role: 'accent' },
    { d: 'M52 134 q28 -40 56 0', role: 'ambient', dashed: true },
    { d: 'M24 134 h112 v10 h-112z' },
    { d: 'M80 94 V70' },
    { d: circle(80, 66, 4), role: 'accent' },
  ],

  // The island above the waterline, a dome on its crest.
  'egghead-island': [
    { d: 'M14 142 q30 -50 60 -60 q12 -16 22 0 q34 8 50 60' },
    { d: 'M74 84 q6 -12 12 0', role: 'accent' },
    { d: 'M-4 142 H164', role: 'ambient' },
    { d: 'M36 142 v14 h-16 v10 M124 142 v14 h16 v10', role: 'ambient' },
    {
      d: dots([
        [20, 166],
        [140, 166],
      ]),
      role: 'ambient',
    },
  ],

  // A round head cut flat on top, an apple's stem and leaf set on it.
  'vegapunk': [
    { d: 'M40 84 h80 C132 104 130 150 80 166 C30 150 28 104 40 84 Z' },
    { d: 'M50 96 h60', role: 'soft' },
    { d: 'M80 84 C80 74 84 68 90 64', role: 'accent' },
    { d: 'M90 64 q18 -6 22 8 q-18 6 -22 -8z', role: 'accent' },
    shadow(80, 176, 40),
  ],

  // Shaka's helmet seen from the side, as it first shows at 1091: the black
  // dome hatched on the far side, the edge of the face plate, the band
  // at its base, the gold drum at the ear with the antenna rising out of it.
  // No number on it, and no grille.
  'shaka': [
    { d: 'M36 140 C30 96 46 54 84 52 C120 50 134 92 128 140' },
    { d: 'M36 140 L34 150 Q82 162 130 150 L128 140' },
    { d: 'M36 140 Q82 150 128 140', role: 'soft' },
    { d: 'M58 58 C42 84 42 116 54 142', role: 'soft' },
    {
      d: `M96 94 a10 16 0 0 0 0 32 ${ellipse(104, 110, 10, 16)}`,
      role: 'accent',
    },
    { d: 'M96 94 H104 M96 126 H104', role: 'accent' },
    { d: 'M98 99 h4 M97 106 h4 M97 114 h4 M98 121 h4', role: 'soft' },
    { d: 'M108 95 L134 32' },
    {
      d: 'M40 84 l7 -6 M37 98 l8 -7 M36 112 l8 -7 M36 126 l8 -7 M38 140 l6 -5',
      role: 'ambient',
    },
    shadow(82, 178, 50),
  ],

  // A flying helmet, the goggles pushed up on its crown.
  'lilith': [
    { d: 'M34 128 a46 50 0 0 1 92 0' },
    { d: 'M34 128 v26 q0 10 10 10 M126 128 v26 q0 10 -10 10' },
    { d: 'M44 128 h72', role: 'soft' },
    { d: circle(62, 96, 13), role: 'accent' },
    { d: circle(98, 96, 13), role: 'accent' },
    { d: 'M75 96 h10 M49 96 h-12 M111 96 h12', role: 'soft' },
    shadow(80, 182, 44),
  ],

  // A coiled snake, wings of flame either side.
  's-snake': [
    { d: ellipse(80, 164, 44, 12) },
    { d: ellipse(80, 150, 34, 11) },
    { d: ellipse(80, 137, 24, 9) },
    { d: 'M70 134 C64 120 70 110 84 106 M92 132 C90 122 94 116 102 112' },
    {
      d: 'M84 106 C98 100 114 106 114 116 C114 126 102 130 92 124',
      role: 'accent',
    },
    {
      d: 'M34 152 C22 136 24 118 36 106 C33 122 38 130 44 134 C40 142 41 147 44 152 Z',
      role: 'soft',
    },
    {
      d: 'M126 152 C138 136 136 118 124 106 C127 122 122 130 116 134 C120 142 119 147 116 152 Z',
      role: 'soft',
    },
    shadow(80, 182, 46),
  ],

  // A cross-hilted sword standing on its point, one wing of flame behind it.
  's-hawk': [
    { d: 'M80 36 L92 52 L92 128 L68 128 L68 52 Z' },
    { d: 'M46 128 h68 v8 h-68z' },
    { d: 'M74 136 v34 M86 136 v34 M72 170 h16' },
    { d: circle(80, 178, 6) },
    { d: 'M80 48 V124', role: 'soft' },
    {
      d: 'M102 96 C122 88 136 70 140 48 C130 64 118 72 108 74 C110 84 108 90 102 96 Z',
      role: 'accent',
    },
    shadow(80, 190, 30),
  ],

  // Kuma's spotted bucket hat with its two round bear ears, the near one
  // whole, and the flame of a lunarian rising from behind its crown.
  's-bear': [
    {
      d: 'M116 106 C134 108 148 96 150 76 C145 84 140 86 136 86 C142 72 140 58 132 46 C132 60 126 68 120 70 C122 62 120 56 116 52 C118 66 116 76 114 84',
      role: 'accent',
    },
    { d: 'M44 112 C40 82 58 64 80 64 C102 64 118 80 116 112' },
    { d: 'M44 112 Q80 124 116 112', role: 'soft' },
    {
      d: 'M44 106 Q22 108 22 124 Q30 146 80 148 Q130 146 138 122 Q138 108 116 106',
    },
    { d: 'M90 66 a13 13 0 1 1 20 14' },
    { d: 'M96 64 a6 6 0 0 1 9 4', role: 'soft' },
    { d: 'M52 82 a11 11 0 0 1 18 -14' },
    {
      d: 'M43 98 q8 -6 14 1 q3 8 -5 11 q-6 1 -10 -3 M34 126 q8 -5 13 1 q-2 7 -10 6 q-5 -1 -3 -7z M88 136 q7 -3 11 2 q-3 6 -9 4 q-4 -2 -2 -6z M114 128 q7 -4 11 1 q-2 6 -8 5 q-5 -1 -3 -6z',
      role: 'soft',
    },
    { d: 'M48 84 l6 -5 M46 98 l7 -6', role: 'ambient' },
    shadow(80, 180, 58),
  ],

  // A dorsal fin, a wing of flame, the sea climbing either side of it.
  's-shark': [
    { d: 'M52 140 C64 92 84 62 104 44 C104 84 96 118 92 140 Z' },
    { d: 'M92 96 C84 108 74 122 66 132', role: 'soft' },
    {
      d: 'M104 122 C122 116 136 102 140 82 C130 96 118 102 110 102 C112 112 110 118 104 122 Z',
      role: 'accent',
    },
    { d: 'M36 150 C30 128 34 112 40 100', role: 'ambient', dashed: true },
    { d: 'M128 150 C136 126 132 110 126 98', role: 'ambient', dashed: true },
    { d: wave(152), role: 'ambient' },
    { d: wave(166), role: 'ambient' },
    {
      d: dots([
        [46, 92],
        [128, 90],
        [80, 40],
      ]),
      role: 'ambient',
    },
  ],

  // A light bulb with the filament lit, a switch thrown beside it.
  'edison': [
    { d: circle(76, 84, 40) },
    { d: 'M60 116 q16 12 32 0' },
    { d: 'M60 118 h32 v28 h-32z' },
    { d: 'M60 126 h32 M60 134 h32', role: 'soft' },
    { d: 'M70 146 h12 v8 h-12z' },
    { d: 'M66 108 V92 L72 78 L80 92 L86 78 L92 92 V108', role: 'accent' },
    { d: 'M108 152 h34 v22 h-34z' },
    { d: 'M125 152 L134 138 M130 141 l8 4' },
    shadow(76, 182, 36),
  ],

  // A right triangle held on a screen, a small arm working beside it.
  'pythagoras': [
    { d: 'M30 48 h100 v80 h-100z' },
    { d: 'M38 56 h84 v64 h-84z', role: 'soft' },
    { d: 'M50 110 H108 L50 66 Z', role: 'accent' },
    { d: 'M50 102 h8 v8', role: 'accent' },
    { d: 'M80 128 V146 M58 152 h44' },
    { d: 'M130 96 L148 108 L138 130' },
    { d: circle(148, 108, 4) },
    { d: 'M138 130 l-9 6 M138 130 l3 11' },
    { d: 'M52 152 h56 v8 h-56z' },
    shadow(80, 172, 44),
  ],

  // A pair of gloves pressed flat against a pane of light.
  'atlas': [
    { d: 'M20 76 h50 v48 C70 140 58 148 45 148 C32 148 20 140 20 124 Z' },
    { d: 'M20 98 h50', role: 'soft' },
    { d: 'M33 124 v22 M45 124 v24 M57 124 v22', role: 'soft' },
    { d: 'M90 76 h50 v48 C140 140 128 148 115 148 C102 148 90 140 90 124 Z' },
    { d: 'M90 98 h50', role: 'soft' },
    { d: 'M103 124 v22 M115 124 v24 M127 124 v22', role: 'soft' },
    { d: 'M10 60 h140 v100 h-140z', role: 'accent', dashed: true },
    shadow(80, 166, 56),
  ],

  // A heaped plate, a pillow beside it.
  'york': [
    { d: ellipse(62, 132, 46, 14) },
    { d: ellipse(62, 130, 34, 9), role: 'soft' },
    { d: 'M32 126 C40 92 84 92 92 126', role: 'accent' },
    {
      d: dots([
        [50, 108],
        [70, 104],
        [60, 118],
      ]),
      role: 'accent',
    },
    { d: 'M112 136 C112 122 152 122 152 136 C152 150 112 150 112 136 Z' },
    { d: 'M120 136 h24', role: 'soft' },
    shadow(70, 158, 48),
  ],

  // A small square hat and a cane.
  'jaygarcia-saturn': [
    { d: 'M56 112 V80 h48 v32' },
    { d: 'M44 112 q36 8 72 0 q-36 -6 -72 0z' },
    { d: 'M56 104 h48', role: 'accent' },
    { d: 'M140 176 V72 q-14 0 -14 12' },
    { d: 'M136 176 h8', role: 'soft' },
    { d: 'M20 184 H144', role: 'ambient', dashed: true },
  ],

  // A length of iron chain lying on the ground.
  'ginny': [
    { d: ellipse(36, 150, 14, 9) },
    { d: ellipse(62, 150, 9, 6), role: 'soft' },
    { d: ellipse(88, 150, 14, 9), role: 'accent' },
    { d: ellipse(114, 150, 9, 6), role: 'soft' },
    { d: ellipse(136, 150, 12, 8) },
    { d: 'M14 172 H146', role: 'ambient', dashed: true },
  ],

  // A globe with its meridians drawn and a band around its middle.
  'marcus-mars': [
    { d: circle(80, 100, 52) },
    { d: ellipse(80, 100, 22, 52), role: 'soft' },
    { d: 'M28 100 h104', role: 'accent' },
    { d: 'M36 74 h88 M36 126 h88', role: 'soft' },
    shadow(80, 178, 52),
  ],

  // A pair of scales on a post, the two pans level.
  'topman-warcury': [
    { d: 'M80 46 V164 M56 164 h48' },
    { d: 'M32 70 H128', role: 'accent' },
    {
      d: 'M32 70 L18 116 M32 70 L46 116 M128 70 L114 116 M128 70 L142 116',
      role: 'soft',
    },
    { d: 'M14 116 q18 16 36 0z M110 116 q18 16 36 0z' },
    shadow(80, 178, 40),
  ],

  // A katana laid across a stack of coins.
  'ethanbaron-v-nusjuro': [
    { d: ellipse(80, 160, 40, 10) },
    { d: ellipse(80, 146, 40, 10) },
    { d: ellipse(80, 132, 40, 10), role: 'soft' },
    { d: 'M22 106 L112 84 L114 90 L24 112 Z', role: 'accent' },
    { d: 'M110 78 L116 94 M114 82 L136 76 M115 88 L137 82 M136 76 L137 82' },
    { d: 'M16 184 H144', role: 'ambient', dashed: true },
  ],

  // A sheaf of wheat tied at its middle.
  'shepherd-ju-peter': [
    { d: 'M80 170 V60 M80 170 L60 70 M80 170 L100 70' },
    { d: ellipse(80, 54, 8, 16), role: 'soft' },
    { d: ellipse(58, 64, 7, 14), role: 'soft' },
    { d: ellipse(102, 64, 7, 14), role: 'soft' },
    { d: 'M66 128 h28', role: 'accent' },
    { d: 'M16 180 H144', role: 'ambient', dashed: true },
  ],

  // A pair of headphones on their band, a small teddy bear hanging from a
  // cord below them, as on her backpack.
  'hibari': [
    { d: 'M42 104 C42 46 118 46 118 104' },
    { d: 'M50 102 C50 60 110 60 110 102', role: 'soft' },
    { d: ellipse(42, 112, 12, 18), role: 'accent' },
    { d: ellipse(118, 112, 12, 18), role: 'accent' },
    { d: 'M80 96 V136', role: 'soft' },
    { d: circle(80, 148, 12) },
    { d: [circle(70, 137, 4), circle(90, 137, 4)].join(' ') },
    { d: ellipse(80, 172, 14, 11) },
    shadow(80, 188, 44),
  ],
  // A Marine cap with a bill that runs far out past the crown, over the
  // fur collar of a coat.
  'prince-grus': [
    { d: 'M34 118 C34 74 110 70 112 118' },
    { d: 'M30 118 h86 v10 h-86z' },
    { d: 'M52 112 C58 96 84 92 96 106', role: 'soft' },
    {
      d: 'M116 124 C132 126 146 132 150 142 C136 146 124 140 112 130 Z',
      role: 'accent',
    },
    { d: 'M30 128 C58 140 96 142 116 128', role: 'accent' },
    {
      d: 'M30 170 q8 -12 16 0 q8 -12 16 0 q8 -12 16 0 q8 -12 16 0 q8 -12 16 0 q8 -12 16 0',
      role: 'soft',
    },
    shadow(80, 188, 50),
  ],
  // A spiked choker laid flat, a pair of hoop earrings beside it.
  'doll': [
    { d: ellipse(80, 110, 52, 20) },
    { d: ellipse(80, 110, 42, 13), role: 'soft' },
    {
      d: 'M36 122 l4 12 l4 -12 M52 127 l4 12 l4 -12 M68 130 l4 12 l4 -12 M84 130 l4 12 l4 -12 M100 127 l4 12 l4 -12 M116 122 l4 12 l4 -12',
      role: 'accent',
    },
    { d: 'M72 98 h16 v10 h-16z', role: 'soft' },
    { d: circle(44, 164, 10), role: 'accent' },
    { d: circle(116, 164, 10), role: 'accent' },
    shadow(80, 188, 44),
  ],
  // A coiled whip lying on its side, the handle up and the lash running
  // loose out of the coil.
  'kujaku': [
    { d: ellipse(74, 140, 48, 18) },
    { d: ellipse(74, 132, 38, 13), role: 'soft' },
    { d: ellipse(74, 126, 28, 9), role: 'soft' },
    { d: 'M98 70 L122 42 L130 49 L106 77 Z' },
    { d: 'M102 74 C92 92 70 100 60 118', role: 'accent' },
    { d: 'M118 146 C132 152 140 162 146 176', role: 'accent' },
    { d: dots([[126, 38]]), role: 'accent' },
    shadow(80, 188, 52),
  ],
  // A queen's crown in three-quarters, its straight upright points fanning
  // out as in her silhouette at 1118: the band seen from the front with a
  // ridge and one set stone, the back of the band between the points, and
  // the band's ends hatched where they turn away.
  'nefertari-lili': [
    { d: 'M32 128 Q80 160 128 128 V148 Q80 180 32 148 Z' },
    { d: 'M32 138 Q80 170 128 138', role: 'soft' },
    { d: 'M80 149 L85 154 L80 159 L75 154 Z', role: 'soft' },
    {
      d: 'M44 125.8 Q49 125 54 124.5 M66 123.4 Q70.5 123.2 75 123.1 M85 123.1 Q89.5 123.2 94 123.4 M106 124.5 Q111 125 116 125.8',
      role: 'soft',
    },
    { d: 'M34 129.3 L28 105 L29.8 98.8 L36 109.7 L42 134', role: 'accent' },
    {
      d: 'M55 139.7 L51.6 106.8 L54.6 99.2 L59.6 109.2 L63 142',
      role: 'accent',
    },
    { d: 'M76 143.9 L76 104.9 L80 96 L84 104.9 L84 143.9', role: 'accent' },
    {
      d: 'M97 142 L100.4 109.2 L105.4 99.2 L108.4 106.8 L105 139.7',
      role: 'accent',
    },
    {
      d: 'M118 134 L124 109.7 L130.2 98.8 L132 105 L126 129.3',
      role: 'accent',
    },
    { d: 'M35 147 l6 -6 M35 139 l5 -5 M118 151 l7 -7', role: 'ambient' },
    shadow(80, 182, 54),
  ],
  // A straight sword standing point down, its guard a ring of gold, and a
  // pair of round glasses left at its foot.
  'figarland-garling': [
    { d: circle(80, 22, 5) },
    { d: 'M76 27 h8 v28 h-8z' },
    { d: 'M62 58 h36', role: 'accent' },
    { d: 'M98 58 C110 44 102 26 85 26', role: 'accent' },
    { d: 'M74 61 h12 V150 L80 164 L74 150 Z' },
    { d: 'M80 64 V150', role: 'soft' },
    { d: circle(62, 176, 9), role: 'accent' },
    { d: circle(98, 176, 9), role: 'accent' },
    { d: 'M71 176 q9 -6 18 0', role: 'accent' },
    shadow(80, 188, 48),
  ],
  // A pair of headphones on their band, the cord trailing off one cup.
  'bluegrass': [
    { d: 'M44 104 C44 40 116 40 116 104' },
    { d: 'M52 100 C54 56 106 56 108 100', role: 'soft' },
    { d: ellipse(40, 120, 12, 20) },
    { d: ellipse(120, 120, 12, 20) },
    {
      d: `${ellipse(40, 120, 5, 11)} ${ellipse(120, 120, 5, 11)}`,
      role: 'accent',
    },
    { d: 'M40 140 C40 160 70 152 74 168 C77 180 62 184 66 174', role: 'soft' },
    shadow(80, 188, 44),
  ],
  // A maul whose head is a scallop shell, ribs fanning out from the hinge.
  'pomsky': [
    { d: 'M100 96 L66 60 Q100 20 134 60 Z' },
    {
      d: 'M66 60 q8 -10 17 -14 q8 -8 17 -8 q9 0 17 8 q9 4 17 14',
      role: 'accent',
    },
    {
      d: 'M100 96 L78 46 M100 96 L92 38 M100 96 L108 38 M100 96 L122 46',
      role: 'soft',
    },
    { d: 'M90 96 h20 v8 h-20 Z' },
    { d: 'M96 104 L40 172 M104 104 L48 178' },
    { d: 'M52 158 l8 7 M46 166 l8 7', role: 'soft' },
    shadow(80, 188, 44),
  ],
  // A hand drum with its cords, two beaters above it: the rhythm of Nika he
  // dances to make his son laugh.
  'clapp': [
    { d: ellipse(80, 100, 44, 12) },
    { d: 'M36 100 V164 M124 100 V164' },
    { d: 'M36 164 a44 12 0 0 0 88 0' },
    { d: 'M36 112 L58 170 L80 112 L102 170 L124 112', role: 'soft' },
    { d: 'M52 58 L78 92 M112 56 L88 90', role: 'accent' },
    { d: [circle(48, 53, 6), circle(116, 51, 6)].join(' '), role: 'accent' },
    {
      d: dots([
        [26, 70],
        [18, 84],
        [134, 70],
        [142, 84],
      ]),
      role: 'soft',
    },
    shadow(80, 188, 48),
  ],
  // A crown set down on a tasselled cushion, the jewels on its points: the
  // king who bows to the Celestial Dragons.
  'bekori': [
    {
      d: 'M20 162 C40 146 120 146 140 162 C120 178 40 178 20 162 Z',
      role: 'soft',
    },
    { d: 'M20 162 l-6 12 M140 162 l6 12', role: 'soft' },
    { d: 'M42 132 h76 v18 h-76z' },
    {
      d: 'M42 132 L34 82 L60 108 L80 70 L100 108 L126 82 L118 132',
      role: 'accent',
    },
    {
      d: dots([
        [34, 76],
        [80, 63],
        [126, 76],
      ]),
      role: 'accent',
    },
    {
      d: [circle(62, 141, 3), circle(80, 141, 4), circle(98, 141, 3)].join(' '),
    },
    shadow(80, 188, 56),
  ],
  // A small side cap resting on a folded fur coat: the old queen
  // dowager's.
  'conney': [
    { d: 'M24 150 C24 128 48 118 80 118 C112 118 136 128 136 150 Z' },
    { d: 'M36 142 q44 -14 88 0', role: 'soft' },
    { d: 'M24 150 q56 16 112 0', role: 'soft' },
    { d: 'M52 112 C56 92 104 92 108 112 Z', role: 'accent' },
    { d: 'M80 94 V86', role: 'accent' },
    shadow(80, 176, 60),
  ],

  // A fur hat with its brim turned up and its ear flaps hanging, ties
  // loose: the old king's cap.
  'bulldog': [
    { d: 'M44 106 C44 60 116 60 116 106' },
    { d: 'M40 106 h80 v20 q-40 10 -80 0z', role: 'accent' },
    {
      d: 'M46 126 C40 144 42 162 52 170 C62 166 64 146 62 128 M114 126 C120 144 118 162 108 170 C98 166 96 146 98 128',
    },
    { d: 'M52 170 l-4 14 M108 170 l4 14', role: 'soft' },
    {
      d: dots([
        [52, 114],
        [66, 118],
        [80, 116],
        [94, 118],
        [108, 114],
      ]),
      role: 'soft',
    },
    { d: 'M60 86 q20 -10 40 0', role: 'soft' },
    shadow(80, 188, 50),
  ],
  // A capped medicine bottle with a spoon beside it: the daily dose the
  // nurse gives Bonney.
  'alpha': [
    { d: 'M56 96 h48 v72 q0 8 -8 8 h-32 q-8 0 -8 -8z' },
    { d: 'M68 96 v-14 h24 v14' },
    { d: 'M64 82 h32 v-16 h-32z', role: 'accent' },
    { d: 'M56 118 h48 M56 150 h48', role: 'soft' },
    { d: 'M60 136 q20 -4 40 0', role: 'soft', dashed: true },
    { d: 'M112 170 L136 138', role: 'accent' },
    { d: 'M136 138 c2 -12 16 -14 14 -2 c-2 8 -10 10 -14 2z', role: 'accent' },
    shadow(80, 188, 44),
  ],
  // The giant gauntlet punching to the left: a fist in its glove, the
  // cylinder over the forearm hatched underneath, and the Steam Knuckle's
  // steam blasting out of the back. No lettering on the cylinder.
  'red-king': [
    { d: 'M12 90 V120 Q14 136 30 136 H60 Q74 136 76 122 V86' },
    { d: 'M12 90 q7 -10 15 -2 q8 -10 16 -2 q8 -10 16 -2 q8 -8 17 0' },
    { d: 'M19 82 L32 70 H86 M76 86 L88 74', role: 'soft' },
    { d: 'M27 88 V108 M43 86 V108 M59 84 V108', role: 'soft' },
    { d: 'M14 110 H54 q9 0 9 8 q0 8 -9 8 H18' },
    { d: 'M86 64 H118 M76 122 H118' },
    { d: ellipse(118, 93, 9, 29) },
    { d: 'M98 64 a8 29 0 0 1 0 58', role: 'soft' },
    { d: 'M100 120 l8 -8 M108 122 l10 -10', role: 'ambient' },
    {
      d: 'M128 80 q2 -12 14 -10 q10 -2 12 8 q8 6 0 14 M128 106 q10 -6 16 2 q10 2 8 12 q2 10 -10 10',
      role: 'accent',
    },
    shadow(72, 178, 58),
  ],
  // A pair of glasses whose lenses sweep out to sharp points, arms folded
  // under them.
  'hound': [
    { d: 'M16 132 L30 118 H70 q4 18 -8 28 q-26 8 -38 -8 Z' },
    { d: 'M144 132 L130 118 H90 q-4 18 8 28 q26 8 38 -8 Z' },
    { d: 'M70 124 q10 -8 20 0' },
    { d: 'M20 136 L42 166 M140 136 L118 166', role: 'soft' },
    { d: 'M38 128 l14 -5 M102 128 l14 -5', role: 'accent' },
    shadow(80, 188, 52),
  ],
  // A crescent blade on a short mount, worn upright on the head like an
  // ornament.
  'guillotine': [
    { d: 'M34 124 C34 56 126 56 126 124 C114 86 46 86 34 124 Z' },
    { d: 'M42 112 C46 72 114 72 118 112', role: 'accent' },
    { d: 'M62 124 h36 v14 h-36 Z' },
    { d: 'M70 138 v12 M90 138 v12', role: 'soft' },
    shadow(80, 188, 40),
  ],
  // A peaked Marine cap, and five claw marks torn through the air above it.
  'tosa': [
    { d: 'M40 150 C40 106 120 106 120 150 Z' },
    { d: 'M40 150 q46 22 100 4 q-6 -8 -20 -6', role: 'soft' },
    { d: 'M52 132 h56', role: 'soft' },
    {
      d: 'M30 96 l18 -44 M50 98 l18 -46 M70 100 l18 -48 M90 98 l18 -46 M110 96 l18 -44',
      role: 'accent',
    },
    shadow(80, 188, 48),
  ],
  // A top hat whose crown opens into the muzzle of a cannon, smoke curling
  // out of it.
  'urban': [
    { d: ellipse(80, 152, 50, 12) },
    { d: 'M52 150 V84 h56 V150' },
    { d: 'M52 132 h56', role: 'soft' },
    { d: 'M66 84 V62 h28 V84' },
    { d: ellipse(80, 60, 16, 5), role: 'accent' },
    {
      d: `${circle(72, 42, 7)} ${circle(88, 32, 9)} ${circle(78, 18, 6)}`,
      role: 'soft',
    },
    shadow(80, 188, 48),
  ],
  // A hand drum with a laced body, a sun rising behind it.
  'joy-boy': [
    { d: circle(80, 64, 24), role: 'accent' },
    {
      d: 'M80 32 V22 M102.6 41.4 L109.7 34.3 M112 64 H122 M48 64 H38 M57.4 41.4 L50.3 34.3',
      role: 'accent',
    },
    { d: ellipse(80, 108, 44, 12) },
    { d: 'M36 108 V164 M124 108 V164' },
    { d: 'M36 164 a44 12 0 0 0 88 0' },
    { d: 'M36 118 L58 164 L80 122 L102 164 L124 118', role: 'soft' },
    shadow(80, 188, 48),
  ],
  // A horned iron helmet with a barred visor, one horn snapped off, moss on
  // the rust.
  'emet': [
    { d: 'M36 176 V112 a44 44 0 0 1 88 0 V176' },
    { d: 'M28 176 h104' },
    { d: 'M52 112 h56 v58 h-56z M66 112 V170 M80 112 V170 M94 112 V170' },
    { d: 'M40 104 C22 92 14 70 20 44 C26 66 38 78 52 84', role: 'accent' },
    { d: 'M120 104 C128 100 134 94 138 86 l-5 -4 l-3 6', role: 'accent' },
    {
      d: dots([
        [44, 150],
        [116, 140],
        [46, 164],
        [114, 160],
        [60, 80],
      ]),
      role: 'soft',
    },
    shadow(80, 188, 52),
  ],
} satisfies Drawings
