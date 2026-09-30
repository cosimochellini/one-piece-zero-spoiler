import {
  cell,
  circle,
  dots,
  ellipse,
  shadow,
  star,
  wave,
} from '~/lib/svg/primitives'

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

  // The island above, the volcano that warms it below the waterline.
  'egghead-island': [
    { d: 'M14 142 q30 -50 60 -60 q12 -16 22 0 q34 8 50 60' },
    { d: 'M74 84 q6 -12 12 0' },
    { d: 'M-4 142 H164', role: 'ambient' },
    { d: 'M46 184 L80 150 L114 184', role: 'accent' },
    { d: 'M66 172 q7 -5 14 0 t14 0', role: 'accent', dashed: true },
    { d: 'M36 142 v14 h-16 v10 M124 142 v14 h16 v10', role: 'ambient' },
    {
      d: dots([
        [20, 166],
        [140, 166],
      ]),
      role: 'ambient',
    },
  ],

  // A bulb-shaped dome, the stem and the leaf still on top of it.
  'vegapunk': [
    { d: circle(80, 116, 48) },
    { d: 'M68 70 V54 M92 70 V54' },
    { d: 'M66 54 h28' },
    { d: 'M80 54 C80 44 84 38 90 34', role: 'accent' },
    { d: 'M90 34 q18 -6 22 8 q-18 6 -22 -8z', role: 'accent' },
    { d: 'M80 68 C56 100 56 132 80 164', role: 'soft' },
    { d: 'M80 68 C104 100 104 132 80 164', role: 'soft' },
    shadow(80, 172, 40),
  ],

  // A domed helmet, a leaf growing out of its crown.
  'shaka': [
    { d: 'M30 152 a50 56 0 0 1 100 0' },
    { d: 'M24 152 h112 v12 h-112z' },
    { d: 'M80 96 C58 112 52 132 52 152', role: 'soft' },
    { d: 'M80 96 C102 112 108 132 108 152', role: 'soft' },
    { d: 'M80 96 V74', role: 'accent' },
    { d: 'M80 74 q20 -10 26 4 q-20 10 -26 -4z', role: 'accent' },
    shadow(80, 178, 46),
  ],

  // A laser rifle, the grip opening into a bat's wing.
  'lilith': [
    { d: 'M34 56 L126 152' },
    { d: 'M42 50 L134 146' },
    { d: 'M34 56 L42 50 M126 152 L134 146' },
    { d: circle(39, 52, 9) },
    { d: 'M94 110 L82 132 L92 142 L108 118 Z' },
    {
      d: 'M82 132 C108 138 126 154 132 178 C124 166 114 164 108 172 C104 158 94 154 88 160 C88 146 86 138 82 132 Z',
      role: 'accent',
    },
    { d: 'M100 124 q10 6 4 14', role: 'soft' },
    shadow(90, 190, 36),
  ],

  // A coiled snake under a service cap, wings of flame either side.
  's-snake': [
    { d: ellipse(80, 164, 44, 12) },
    { d: ellipse(80, 150, 34, 11) },
    { d: ellipse(80, 137, 24, 9) },
    { d: 'M70 134 C64 120 70 110 84 106 M92 132 C90 122 94 116 102 112' },
    { d: 'M84 106 C98 100 114 106 114 116 C114 126 102 130 92 124' },
    { d: 'M86 98 q16 -14 30 -2 l2 6 h-34z', role: 'accent' },
    { d: 'M80 102 h44 q-6 8 -22 8 q-16 0 -22 -8z', role: 'accent' },
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

  // A black sword standing on its point, one wing of flame behind it.
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

  // A paw print, a small wing of flame at its side.
  's-bear': [
    { d: ellipse(78, 128, 30, 26) },
    { d: ellipse(48, 84, 11, 14) },
    { d: ellipse(70, 70, 11, 15) },
    { d: ellipse(94, 70, 11, 15) },
    { d: ellipse(116, 84, 11, 14) },
    {
      d: 'M112 152 C130 152 144 140 148 122 C140 134 128 138 118 136 C118 144 116 148 112 152 Z',
      role: 'accent',
    },
    shadow(78, 168, 36),
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

  // A pair of iron gauntlets, the rockets on their backs firing.
  'atlas': [
    { d: 'M20 76 h50 v48 C70 140 58 148 45 148 C32 148 20 140 20 124 Z' },
    { d: 'M20 98 h50', role: 'soft' },
    { d: 'M33 124 v22 M45 124 v24 M57 124 v22', role: 'soft' },
    { d: 'M90 76 h50 v48 C140 140 128 148 115 148 C102 148 90 140 90 124 Z' },
    { d: 'M90 98 h50', role: 'soft' },
    { d: 'M103 124 v22 M115 124 v24 M127 124 v22', role: 'soft' },
    {
      d: 'M30 76 v-14 h14 v14 M46 76 v-14 h14 v14 M100 76 v-14 h14 v14 M116 76 v-14 h14 v14',
    },
    {
      d: 'M37 58 q-4 -12 0 -20 M53 58 q4 -12 0 -20 M107 58 q-4 -12 0 -20 M123 58 q4 -12 0 -20',
      role: 'accent',
    },
    shadow(80, 166, 56),
  ],

  // A heaped plate, a syringe standing next to it.
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
    { d: 'M104 60 h20 v58 h-20z' },
    { d: 'M106 60 v-16 h16 v16 M98 44 h32' },
    { d: 'M114 118 v26' },
    { d: 'M104 72 h8 M104 82 h8 M104 92 h8', role: 'soft' },
    shadow(70, 158, 48),
  ],

  // A top hat and a cane, and the legs that come out from under the brim.
  'jaygarcia-saturn': [
    { d: 'M52 96 V44 h56 v52' },
    { d: 'M32 96 q48 12 96 0 q-48 -10 -96 0z' },
    { d: 'M52 84 h56', role: 'soft' },
    { d: 'M56 100 L30 130 L36 170 M70 102 L52 138 L56 176', role: 'accent' },
    {
      d: 'M104 100 L130 130 L124 170 M90 102 L108 138 L104 176',
      role: 'accent',
    },
    { d: 'M140 176 V72 q-14 0 -14 12' },
    { d: 'M136 176 h8', role: 'soft' },
    { d: 'M20 184 H144', role: 'ambient', dashed: true },
  ],

  // A Den Den Mushi with its receiver, a knotted kerchief beside it.
  'ginny': [
    { d: circle(92, 108, 34) },
    { d: 'M92 90 a18 18 0 1 1 -17 20 a10 10 0 1 0 12 -12', role: 'soft' },
    { d: 'M30 144 C26 126 38 114 52 110 C58 100 68 94 80 92' },
    { d: 'M26 146 q10 10 44 10 q40 0 50 -10' },
    { d: 'M36 124 C30 108 30 96 36 88 M48 122 C44 106 46 96 52 90' },
    { d: 'M64 84 C72 66 112 66 120 84 L112 88 C104 76 80 76 72 88 Z' },
    { d: 'M112 156 L148 150 L132 180 Z', role: 'accent' },
    {
      d: 'M112 156 C106 150 108 142 116 144 C120 148 118 154 112 156 Z',
      role: 'accent',
    },
    { d: 'M132 180 l4 8 M140 168 l8 7', role: 'accent' },
    { d: 'M20 192 H140', role: 'ambient', dashed: true },
  ],

  // A crown of feathers with a bird's talon gripping its band.
  'marcus-mars': [
    { d: 'M24 148 h112 v18 h-112z' },
    { d: 'M42 148 C32 126 38 102 52 92 C60 114 54 132 56 148 Z', role: 'soft' },
    { d: 'M70 148 C62 120 70 92 80 82 C92 96 94 124 92 148 Z', role: 'soft' },
    {
      d: 'M106 148 C110 122 118 100 130 90 C130 118 122 134 120 148 Z',
      role: 'soft',
    },
    { d: 'M76 62 V118 M90 62 V118 M76 118 q7 8 14 0', role: 'accent' },
    {
      d: 'M78 122 C58 128 40 136 34 150 M82 126 C70 134 60 142 58 150 M90 124 C108 132 120 140 124 150',
      role: 'accent',
    },
    {
      d: 'M34 150 C29 154 28 158 30 162 M58 150 C56 154 56 157 58 160 M124 150 C129 154 130 158 128 162',
      role: 'accent',
    },
    shadow(80, 178, 52),
  ],

  // A heavy helmet with the strap buckled, a pair of tusks under it.
  'topman-warcury': [
    { d: 'M32 112 a48 50 0 0 1 96 0' },
    { d: 'M26 112 h108 v10 h-108z' },
    { d: 'M40 122 C36 148 56 168 80 168 C104 168 124 148 120 122' },
    { d: 'M70 164 h20 v10 h-20z', role: 'soft' },
    { d: 'M80 62 V112', role: 'soft' },
    {
      d: 'M56 168 C40 164 28 150 26 130 C36 148 46 156 58 158 Z',
      role: 'accent',
    },
    {
      d: 'M104 168 C120 164 132 150 134 130 C124 148 114 156 102 158 Z',
      role: 'accent',
    },
    shadow(80, 188, 40),
  ],

  // A katana laid across a saddle.
  'ethanbaron-v-nusjuro': [
    {
      d: 'M34 142 C34 122 38 112 48 110 C60 110 72 118 84 122 C98 126 110 118 116 106 C124 106 128 120 126 140 C100 152 60 152 34 142 Z',
    },
    { d: 'M48 118 C70 128 100 126 116 112', role: 'soft' },
    {
      d: 'M54 148 C48 164 50 180 58 188 C76 194 92 194 104 188 C112 180 112 164 106 148',
      role: 'soft',
    },
    { d: 'M80 152 V172' },
    { d: 'M70 172 a10 9 0 1 0 20 0 a10 9 0 1 0 -20 0' },
    { d: 'M22 106 L112 84 L114 90 L24 112 Z', role: 'accent' },
    { d: 'M110 78 L116 94 M114 82 L136 76 M115 88 L137 82 M136 76 L137 82' },
  ],

  // A wide-brimmed hat resting over a coil.
  'shepherd-ju-peter': [
    { d: ellipse(80, 160, 50, 16) },
    { d: ellipse(80, 142, 42, 14) },
    { d: ellipse(80, 126, 34, 12) },
    { d: 'M38 158 q10 -10 0 -20 M122 158 q-10 -10 0 -20', role: 'soft' },
    { d: ellipse(80, 96, 56, 16), role: 'accent' },
    { d: 'M56 94 C56 52 104 52 104 94' },
    { d: 'M57 82 q23 10 46 0', role: 'soft' },
    { d: 'M16 180 H144', role: 'ambient', dashed: true },
  ],
  // A sniper's rifle laid on a slant, a flower blooming out of the muzzle
  // where the shot should be.
  'hibari': [
    { d: 'M56 126 L120 50 L127 56 L63 132 Z' },
    { d: 'M56 126 L26 156 L38 170 L68 140 Z' },
    { d: 'M78 100 L98 76 L105 82 L85 106 Z', role: 'soft' },
    { d: 'M70 136 q2 12 14 10', role: 'soft' },
    { d: star(128, 44, 16, 7), role: 'accent' },
    { d: circle(128, 44, 4), role: 'accent' },
    shadow(80, 188, 44),
  ],
  // A Marine cap with a bill that runs far out past the crown, a lump of
  // clay slumped in front of it.
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
      d: 'M40 180 C40 164 52 156 62 162 C66 150 84 150 88 164 C98 160 106 170 102 180 Z',
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
  // A sealed letter lying flat, a queen's crown resting above it.
  'nefertari-lili': [
    { d: 'M36 112 h88 v62 h-88z' },
    { d: 'M36 112 L80 146 L124 112', role: 'soft' },
    { d: 'M36 174 L70 140 M124 174 L90 140', role: 'soft' },
    { d: circle(80, 146, 7), role: 'accent' },
    { d: 'M50 98 V66 L65 82 L80 56 L95 82 L110 66 V98 Z', role: 'accent' },
    {
      d: dots([
        [65, 90],
        [80, 88],
        [95, 90],
      ]),
      role: 'soft',
    },
    shadow(80, 188, 48),
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
  // A giant pizza seen from above, cut into slices and scattered with
  // toppings: the one she bakes for Bonney.
  'conney': [
    { d: ellipse(80, 130, 64, 40) },
    { d: ellipse(80, 130, 54, 32), role: 'soft' },
    { d: 'M26 130 H134 M80 98 V162 M42 107 L118 153 M118 107 L42 153' },
    {
      d: [
        circle(56, 116, 5),
        circle(104, 116, 5),
        circle(62, 146, 5),
        circle(100, 146, 5),
      ].join(' '),
      role: 'accent',
    },
    {
      d: dots([
        [80, 112],
        [66, 130],
        [94, 130],
        [80, 150],
      ]),
      role: 'accent',
    },
    shadow(80, 188, 60),
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
  // One oversized gauntlet in a fist, riveted at the cuff, steam rising off
  // its knuckles.
  'red-king': [
    { d: 'M44 150 V92 q0 -14 14 -14 h44 q14 0 14 14 V150 Z' },
    {
      d: 'M44 100 q9 -10 18 0 q9 -10 18 0 q9 -10 18 0 q9 -10 18 0',
      role: 'soft',
    },
    { d: 'M44 116 q-14 4 -12 18 q2 10 18 8', role: 'soft' },
    { d: 'M50 150 h60 v24 h-60 Z' },
    {
      d: dots([
        [60, 162],
        [80, 162],
        [100, 162],
      ]),
    },
    {
      d: 'M60 68 q-8 -10 0 -20 q8 -10 0 -20 M80 68 q-8 -10 0 -20 q8 -10 0 -20 M100 68 q-8 -10 0 -20 q8 -10 0 -20',
      role: 'accent',
    },
    shadow(80, 188, 44),
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
  // A crescent blade on a short mount, the arc it flies when thrown drawn
  // above it.
  'guillotine': [
    { d: 'M34 124 C34 56 126 56 126 124 C114 86 46 86 34 124 Z' },
    { d: 'M42 112 C46 72 114 72 118 112', role: 'accent' },
    { d: 'M62 124 h36 v14 h-36 Z' },
    { d: 'M70 138 v12 M90 138 v12', role: 'soft' },
    { d: 'M20 66 q60 -56 120 0', role: 'ambient', dashed: true },
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
