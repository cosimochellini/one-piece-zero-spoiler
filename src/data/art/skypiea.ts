import {
  circle,
  dots,
  ellipse,
  polygon,
  SEA,
  shadow,
} from '~/lib/svg/primitives'

import type { Drawings, Redrawings } from './stroke'

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

  // An island resting on a cloud, a giant beanstalk climbing to it.
  'skypiea': [
    {
      d: 'M30 120 q-14 0 -10 -14 q0 -14 16 -12 q4 -18 24 -14 q10 -12 28 -4 q18 -6 24 12 q16 2 12 16 q6 14 -12 14z',
    },
    { d: 'M46 106 Q80 88 116 106' },
    { d: 'M60 122 v28 M100 122 v24', role: 'ambient', dashed: true },
    {
      d: 'M84 178 C70 164 94 152 84 138 C74 124 96 116 86 104',
      role: 'accent',
    },
    { d: 'M82 150 q-12 -2 -14 -12 M88 130 q12 -2 14 -12', role: 'accent' },
    ...SEA.slice(2),
  ],

  // Huts on stilts over the water, an anchor dropped beside them.
  'jaya': [
    { d: 'M24 118 H136' },
    { d: 'M40 118 V166 M72 118 V166 M104 118 V166 M136 118 V160' },
    { d: 'M40 140 L72 166 M72 140 L104 166', role: 'ambient' },
    { d: 'M32 118 V96 H60 V118 M28 96 L46 78 L64 96', role: 'accent' },
    { d: 'M80 118 V102 H104 V118 M76 102 L92 88 L108 102', role: 'accent' },
    {
      d: `${circle(22, 146, 4)} M22 150 V180 M8 172 Q22 190 36 172 M12 156 h20`,
    },
    ...SEA.slice(1),
  ],

  // A diver's helmet with its faceplate, and a salvage hook on its chain.
  'masira': [
    { d: 'M44 132 V96 a36 34 0 0 1 72 0 V132z' },
    { d: 'M36 132 H124 V146 H36z' },
    { d: circle(80, 106, 19), role: 'accent' },
    {
      d: dots([
        [44, 139],
        [60, 139],
        [100, 139],
        [116, 139],
      ]),
    },
    { d: 'M54 92 q10 -8 22 -6', role: 'soft' },
    { d: circle(132, 30, 7) },
    { d: 'M132 37 V88 q0 26 -22 26 q-16 0 -16 -18' },
    shadow(80, 160, 46),
  ],

  // A sonar dish on its post, and the sound going out from it.
  'shoujou': [
    { d: 'M98 44 C40 62 40 130 98 148' },
    { d: 'M98 44 V148', role: 'ambient' },
    { d: 'M70 96 H104' },
    { d: 'M104 88 h10 v16 h-10z' },
    { d: 'M98 140 V174 M78 178 H118' },
    { d: 'M112 76 q18 20 0 40', role: 'accent' },
    { d: 'M122 62 q26 34 0 68', role: 'accent' },
    { d: 'M132 48 q34 48 0 96', role: 'accent' },
  ],

  // A coiled spring between its plates, and the bounce either side of it.
  'bellamy': [
    {
      d: `${ellipse(80, 70, 32, 10)} ${ellipse(80, 92, 32, 10)} ${ellipse(80, 114, 32, 10)} ${ellipse(80, 136, 32, 10)}`,
      role: 'accent',
    },
    { d: 'M48 70 V136 M112 70 V136', role: 'soft' },
    { d: 'M40 56 H120' },
    { d: 'M40 152 H120' },
    { d: 'M80 56 V60 M80 146 V152' },
    { d: 'M132 142 q16 -32 0 -64', role: 'ambient', dashed: true },
    { d: 'M28 142 q-16 -32 0 -64', role: 'ambient', dashed: true },
    shadow(80, 166, 46),
  ],

  // A chestnut sitting on a diver's helmet.
  'montblanc-cricket': [
    {
      d: 'M80 46 C104 58 112 72 106 82 C94 92 62 92 50 82 C44 72 56 58 80 46z',
      role: 'accent',
    },
    { d: 'M80 46 q-4 -7 -1 -12', role: 'accent' },
    { d: 'M46 146 V124 a34 30 0 0 1 68 0 V146z' },
    { d: 'M40 146 H120 V158 H40z' },
    { d: circle(80, 126, 15) },
    {
      d: dots([
        [48, 152],
        [64, 152],
        [96, 152],
        [112, 152],
      ]),
    },
    shadow(80, 172, 44),
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

  // A closed book with a paw print pressed into the cover.
  'bartholomew-kuma': [
    { d: 'M40 54 H118 q6 0 6 6 V152 q0 6 -6 6 H40z' },
    { d: 'M40 54 q-10 52 0 104' },
    { d: 'M124 62 q8 4 8 10 V146 q0 6 -8 8' },
    { d: 'M124 84 h8 M124 104 h8 M124 124 h8', role: 'ambient' },
    { d: ellipse(82, 118, 20, 15), role: 'accent' },
    {
      d: `${circle(60, 94, 7)} ${circle(74, 84, 7)} ${circle(92, 84, 7)} ${circle(106, 94, 7)}`,
      role: 'accent',
    },
    shadow(80, 172, 46),
  ],

  // A Marine cap with its braid, and the goat that follows the man wearing it.
  'sengoku': [
    { d: 'M14 102 C14 66 34 54 55 54 C76 54 96 66 96 102z' },
    { d: 'M10 102 H100 V116 H10z', role: 'accent' },
    { d: 'M10 116 C0 120 0 132 12 136 H62 C78 134 88 126 88 116' },
    {
      d: 'M102 128 q-4 -10 6 -12 h34 q10 2 6 12 v16 q0 8 -10 8 h-26 q-10 0 -10 -8z',
    },
    { d: 'M110 152 V176 M122 152 V176 M132 152 V176 M144 152 V176' },
    { d: 'M142 120 C150 116 154 106 148 100 C140 96 132 102 134 112' },
    { d: 'M146 100 q10 -10 4 -20', role: 'soft' },
    { d: 'M6 184 H154', role: 'ambient', dashed: true },
  ],

  // A bisento taller than the man, and the bottle beside it. Planted over
  // his grave from 505, in `skypieaRedrawn`.
  'edward-newgate': [
    { d: 'M28 178 L118 42' },
    { d: 'M36 166 l8 6 M44 154 l8 6', role: 'ambient' },
    { d: 'M118 42 C132 34 142 20 138 4 C136 22 126 32 114 38', role: 'accent' },
    { d: 'M108 48 l14 10' },
    { d: 'M112 178 V150 q0 -6 4 -8 V130 h10 V142 q4 2 4 8 V178z' },
    shadow(90, 186, 40),
  ],

  // Sunglasses, hung from strings like a puppet.
  'donquixote-doflamingo': [
    {
      d: 'M28 100 H70 q8 0 8 8 V122 q0 8 -8 8 H28 q-8 0 -8 -8 V108 q0 -8 8 -8z',
      role: 'accent',
    },
    {
      d: 'M90 100 H132 q8 0 8 8 V122 q0 8 -8 8 H90 q-8 0 -8 -8 V108 q0 -8 8 -8z',
      role: 'accent',
    },
    { d: 'M78 110 h4', role: 'accent' },
    { d: 'M20 108 l-8 4 M140 108 l8 4' },
    { d: 'M36 100 L62 44 M124 100 L98 44 M56 44 H104' },
    { d: 'M80 44 V36', role: 'ambient' },
  ],

  // An open shirt with a sash knotted at the waist, the way he stands on
  // Whitebeard's deck when Shanks comes aboard (ep. 316).
  'marco': [
    {
      d: 'M52 52 L26 88 L42 100 L52 86 V164 H108 V86 L118 100 L134 88 L108 52 L92 48 L80 66 L68 48z',
    },
    { d: 'M68 48 L72 164 M92 48 L88 164', role: 'soft' },
    { d: 'M52 128 H108 V140 H52z', role: 'accent' },
    {
      d: `${circle(98, 134, 5)} M96 139 l-6 26 M101 139 l5 24`,
      role: 'accent',
    },
    shadow(80, 176, 44),
  ],

  // A knight's lance standing beside a pumpkin-shaped helmet.
  'gan-fall': [
    { d: 'M48 26 L40 58 H56z' },
    { d: 'M48 58 V176' },
    { d: 'M36 84 H60 L56 70 H40z' },
    { d: 'M42 130 H54 M42 140 H54 M42 150 H54', role: 'ambient' },
    { d: ellipse(110, 120, 32, 30) },
    { d: 'M110 90 V150 M96 92 q-6 28 0 56 M124 92 q6 28 0 56', role: 'accent' },
    { d: 'M110 90 q2 -12 12 -14' },
    shadow(110, 158, 32),
  ],

  // A burn bazooka above a pair of skates.
  'wyper': [
    { d: 'M28 92 H118 V114 H28z' },
    { d: 'M118 86 L136 78 V128 L118 120z', role: 'accent' },
    { d: 'M28 92 L18 84 V122 L28 114' },
    { d: 'M62 114 V132 H74 V114 M66 122 q4 4 0 8' },
    { d: 'M92 92 V82 H100' },
    { d: 'M32 140 H56 V160 H28z M24 160 H62 V166 H24z' },
    { d: 'M92 140 H116 V160 H88z M84 160 H122 V166 H84z' },
    { d: 'M8 178 H152', role: 'ambient', dashed: true },
  ],

  // A curved burn blade, held low like a mantis foreleg.
  'kamakiri': [
    { d: 'M40 154 C54 104 84 62 130 30' },
    { d: 'M40 154 C68 124 98 88 130 30' },
    {
      d: 'M62 124 l14 6 M76 104 l14 6 M92 84 l14 6 M108 62 l12 6',
      role: 'accent',
    },
    { d: 'M40 154 L26 172' },
    { d: 'M30 146 L48 160' },
    { d: 'M34 160 l8 4', role: 'ambient' },
    { d: circle(22, 178, 5) },
  ],

  // Two flash pistols, each firing its blinding light.
  'braham': [
    { d: 'M22 46 H86 V60 H54 L50 92 q-2 6 -10 6 q-8 0 -6 -8 L38 60 H22z' },
    { d: 'M52 60 q7 10 -2 14 q-7 2 -9 -3' },
    {
      d: 'M90 53 H106 M88 44 L100 36 M88 62 L100 70 M92 48 L102 45 M92 58 L102 61',
      role: 'accent',
    },
    { d: 'M138 116 H74 V130 H106 L110 162 q2 6 10 6 q8 0 6 -8 L122 130 H138z' },
    { d: 'M108 130 q-7 10 2 14 q7 2 9 -3' },
    {
      d: 'M70 123 H54 M72 114 L60 106 M72 132 L60 140 M68 118 L58 115 M68 128 L58 131',
      role: 'accent',
    },
  ],

  // A bazooka too big for one man, with the flare at its mouth.
  'genbo': [
    { d: 'M16 150 L124 46 L140 62 L32 166z' },
    { d: 'M124 46 L131 30 L156 56 L140 62z', role: 'accent' },
    { d: 'M56 116 L67 127 M83 90 L94 101' },
    { d: 'M54 140 L64 162 H78 L68 140' },
    { d: 'M16 150 L8 158 L20 172 L32 166' },
    shadow(80, 182, 46),
  ],

  // A rifle with its scope, a feather tucked into the stock.
  'laki': [
    { d: 'M142 44 L66 120 L74 128 L150 52z' },
    { d: 'M66 120 L38 148 q-10 10 -2 18 q10 8 18 -2 L76 130z' },
    { d: 'M80 116 q-10 10 -2 16 q8 4 12 -4' },
    { d: 'M120 38 L94 64 L102 72 L128 46z', role: 'accent' },
    { d: 'M112 52 l8 8 M98 66 l8 8', role: 'accent' },
    { d: 'M34 120 C20 100 20 74 30 60 C42 76 46 102 40 122' },
    { d: 'M30 60 L36 121', role: 'soft' },
    shadow(92, 180, 44),
  ],

  // A bag of pumpkins with a sky shell set down beside it.
  'aisa': [
    { d: 'M44 172 C34 142 40 116 54 104 H106 c14 12 20 38 10 68z' },
    { d: 'M54 104 q26 -12 52 0' },
    { d: ellipse(64, 88, 18, 14), role: 'accent' },
    { d: 'M64 74 V102 M52 78 q-5 10 0 20 M76 78 q5 10 0 20', role: 'accent' },
    { d: ellipse(100, 82, 15, 12) },
    { d: 'M100 70 V94 M90 73 q-4 9 0 18 M110 73 q4 9 0 18' },
    { d: 'M64 74 q2 -8 10 -9 M100 70 q-2 -7 -9 -8', role: 'soft' },
    { d: 'M126 166 q-6 -18 8 -22 q14 -4 16 8 q2 12 -10 14 q-8 0 -8 -8' },
    { d: 'M132 150 q8 -4 12 2 M130 158 q10 -2 14 4', role: 'ambient' },
    shadow(80, 182, 44),
  ],

  // A harp, with a cloud fox curled up at its foot.
  'conis': [
    { d: 'M44 148 L88 26' },
    { d: 'M88 26 C108 36 118 52 120 72' },
    { d: 'M120 72 L104 148' },
    { d: 'M40 150 H112' },
    {
      d: 'M52 126 H108 M59 106 H113 M66 86 H118 M74 66 H113 M81 46 H100',
      role: 'accent',
    },
    { d: 'M100 178 C96 160 106 150 120 152 C134 154 138 168 130 176z' },
    { d: 'M130 176 C142 174 146 160 138 152' },
    {
      d: 'M110 152 L106 140 L118 146 M128 150 L134 140 L138 150',
      role: 'soft',
    },
  ],

  // A dial shell on a workbench, with the tools that shaped it.
  'pagaya': [
    { d: 'M16 128 H144 V138 H16z' },
    { d: 'M28 138 V176 M132 138 V176 M28 162 H132' },
    { d: 'M48 126 C48 90 62 70 80 70 C98 70 112 90 112 126z', role: 'accent' },
    {
      d: 'M80 70 V126 M66 74 L58 126 M94 74 L102 126 M72 71 L68 126 M88 71 L92 126',
      role: 'accent',
    },
    { d: circle(130, 118, 8), role: 'soft' },
    { d: 'M18 122 H40 M22 118 l-4 4 l4 4' },
    { d: 'M8 182 H152', role: 'ambient', dashed: true },
  ],

  // A god's staff standing in a ring of drums.
  'enel': [
    {
      d: `${circle(30, 98, 16)} ${circle(54, 66, 16)} ${circle(106, 66, 16)} ${circle(130, 98, 16)}`,
    },
    {
      d: `${circle(30, 98, 9)} ${circle(54, 66, 9)} ${circle(106, 66, 9)} ${circle(130, 98, 9)}`,
      role: 'soft',
    },
    { d: 'M76 178 V56 H84 V178z', role: 'accent' },
    { d: 'M80 56 C68 48 68 30 80 22 C92 30 92 48 80 56z', role: 'accent' },
    { d: 'M44 110 L70 128 M116 110 L90 128', role: 'ambient', dashed: true },
    shadow(80, 186, 28),
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

  // A cloud ball, something dashed hidden inside it, the surprise going off.
  'satori': [
    { d: circle(80, 104, 42) },
    {
      d: 'M50 74 q6 -16 22 -12 M110 74 q16 6 12 22 M110 134 q-6 16 -22 12 M50 134 q-16 -6 -12 -22',
      role: 'soft',
    },
    {
      d: 'M62 116 C58 96 70 84 80 84 C90 84 102 96 98 116z',
      role: 'ambient',
      dashed: true,
    },
    {
      d: 'M80 62 V46 M108 74 L120 62 M52 74 L40 62 M124 104 H138 M36 104 H22',
      role: 'accent',
    },
    {
      d: dots([
        [64, 132],
        [80, 138],
        [96, 132],
      ]),
      role: 'accent',
    },
    shadow(80, 164, 36),
  ],

  // A heat lance, and the firebird that carries its owner.
  'shura': [
    { d: 'M20 172 L100 66' },
    { d: 'M94 62 L106 71 L118 44z' },
    { d: 'M30 152 l12 9 M40 139 l12 9', role: 'ambient' },
    { d: 'M122 56 q12 -10 2 -20 M132 68 q14 -12 2 -24', role: 'accent' },
    { d: 'M18 74 C30 58 44 56 54 66 C64 56 78 58 86 70' },
    { d: 'M54 66 C52 80 54 92 60 102', role: 'soft' },
    { d: 'M26 86 c-10 8 -6 20 4 22 c-4 -10 4 -14 8 -20z', role: 'accent' },
    { d: 'M80 82 c10 8 6 20 -4 22 c4 -10 -4 -14 -8 -20z', role: 'accent' },
  ],

  // A swamp cloud with a pair of boots going down into it.
  'gedatsu': [
    {
      d: 'M22 118 q-12 -18 8 -24 q0 -22 24 -18 q10 -16 30 -8 q22 -10 30 10 q20 0 18 18 q10 12 -6 22z',
    },
    { d: ellipse(80, 112, 26, 10), role: 'accent' },
    { d: 'M58 112 V86 c0 -10 -8 -14 -18 -14 c-8 0 -10 10 -2 13 l8 3 v24z' },
    { d: 'M102 112 V86 c0 -10 8 -14 18 -14 c8 0 10 10 2 13 l-8 3 v24z' },
    { d: 'M42 92 H58 M102 92 H118', role: 'soft' },
    {
      d: 'M60 138 V152 M80 144 V160 M100 138 V152',
      role: 'ambient',
      dashed: true,
    },
  ],

  // An iron-cloud sword, and the collar of the dog that fights beside it.
  'ohm': [
    { d: 'M72 150 V52 L80 36 L88 52 V150z', role: 'accent' },
    { d: 'M80 140 V50', role: 'ambient' },
    { d: 'M52 150 H108' },
    { d: 'M74 150 V176 H86 V150' },
    { d: circle(80, 180, 5) },
    {
      d: 'M36 108 q-10 -14 6 -18 q2 -16 20 -12 q10 -12 24 -4 q14 -8 24 4 q18 -4 20 12 q16 4 6 18z',
      role: 'soft',
    },
    { d: ellipse(124, 164, 20, 9) },
    {
      d: dots([
        [110, 168],
        [124, 173],
        [138, 168],
      ]),
    },
    { d: 'M124 173 V184' },
  ],

  // An explorer's log book with a chestnut on the cover.
  'montblanc-noland': [
    { d: 'M28 62 L120 46 L134 146 L42 162z' },
    { d: 'M28 62 L22 68 L36 168 L42 162' },
    { d: 'M134 146 L128 152 L36 168' },
    { d: 'M60 56 L74 156', role: 'soft' },
    {
      d: 'M80 82 C104 94 112 108 106 118 C94 128 62 128 50 118 C44 108 56 94 80 82z',
      role: 'accent',
    },
    { d: 'M80 82 q-4 -7 -1 -11', role: 'accent' },
    shadow(84, 178, 50),
  ],

  // A war spear with its feathers, and the rope of a great bell.
  'kalgara': [
    { d: 'M60 184 V50 H68 V184z' },
    { d: 'M64 18 C52 34 52 46 60 50 H68 C76 46 76 34 64 18z', role: 'accent' },
    { d: 'M56 58 H72 M56 64 H72' },
    { d: 'M60 66 q-12 12 -8 28 M68 66 q12 12 8 28', role: 'soft' },
    { d: 'M118 20 C126 58 112 98 120 138' },
    { d: 'M128 20 C136 58 122 98 130 138' },
    {
      d: 'M120 48 L128 52 M118 74 L126 78 M119 100 L127 104 M121 126 L129 130',
      role: 'ambient',
    },
    { d: 'M116 138 H132 q4 0 4 6 q0 8 -12 8 q-12 0 -12 -8 q0 -6 4 -6z' },
    { d: 'M118 152 V172 M124 154 V176 M130 152 V172' },
  ],
  // A fan of playing cards on a table, a hangman's noose above them.
  'roshio': [
    { d: 'M80 12 V42' },
    { d: 'M73 42 H87 M73 47 H87' },
    { d: ellipse(80, 62, 10, 14), role: 'accent' },
    { d: 'M46 100 H78 V148 H46z', transform: 'rotate(-16 62 148)' },
    { d: 'M64 96 H96 V144 H64z' },
    { d: 'M82 100 H114 V148 H82z', transform: 'rotate(16 98 148)' },
    { d: polygon(80, 120, 7, 4), role: 'accent' },
    { d: 'M16 164 H144' },
    shadow(80, 178, 44),
  ],
  // A big curved knife mid-spin, a couple of coins dropped beside it.
  'sarquiss': [
    {
      d: 'M58 150 C62 118 70 88 92 60 C104 46 118 44 116 58 C112 80 94 108 72 154z',
      role: 'accent',
    },
    { d: 'M64 146 C72 112 86 80 108 54', role: 'soft' },
    { d: 'M50 148 L80 158' },
    { d: 'M58 152 L46 178 M72 156 L60 182 M46 178 L60 182' },
    { d: 'M30 70 q-12 40 8 80', role: 'ambient', dashed: true },
    { d: 'M132 150 q14 -40 -6 -84', role: 'ambient', dashed: true },
    { d: `${circle(112, 180, 5)} ${circle(127, 174, 5)}`, role: 'soft' },
  ],
  // A letter torn in two above a sabre, a wax seal still on one half.
  'rockstar': [
    { d: 'M28 58 H72 L68 74 L74 90 L68 106 H28z' },
    { d: 'M84 62 H128 V110 H82 L88 94 L80 78z', transform: 'rotate(8 106 86)' },
    { d: 'M36 70 H60 M36 82 H62 M36 94 H58', role: 'soft' },
    { d: circle(106, 98, 6), role: 'accent' },
    { d: 'M26 150 Q84 134 140 150', role: 'accent' },
    { d: 'M26 150 l-8 -6 M22 142 v16' },
    shadow(80, 176, 48),
  ],
  // A horseshoe with a pair of spotted wings spread from its sides.
  'pierre': [
    {
      d: 'M56 150 V104 a24 24 0 0 1 48 0 V150 M68 150 V106 a12 12 0 0 1 24 0 V150',
      role: 'accent',
    },
    {
      d: dots([
        [62, 118],
        [62, 134],
        [98, 118],
        [98, 134],
      ]),
    },
    { d: 'M54 110 C34 96 18 100 10 86 C26 88 30 80 22 70 C38 76 46 88 56 98' },
    {
      d: 'M106 110 C126 96 142 100 150 86 C134 88 130 80 138 70 C122 76 114 88 104 98',
    },
    { d: `${circle(30, 88, 3)} ${circle(130, 88, 3)}`, role: 'soft' },
    shadow(80, 168, 36),
  ],
  // A little cloud with a long fox's tail curling out of it, paw prints below.
  'su': [
    {
      d: 'M36 132 q-16 0 -12 -16 q2 -14 18 -12 q6 -18 26 -12 q12 -12 28 -2 q18 -4 20 14 q14 4 8 18 q-4 10 -16 10z',
    },
    {
      d: 'M104 128 C132 120 144 92 128 72 C118 60 102 66 108 80 C114 92 124 90 122 80',
      role: 'accent',
    },
    { d: 'M116 66 q-8 2 -8 10', role: 'soft' },
    {
      d: dots([
        [40, 160],
        [48, 166],
        [60, 158],
        [68, 164],
        [80, 156],
        [88, 162],
      ]),
      role: 'soft',
    },
    shadow(80, 178, 50),
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
  // A white beret resting on a ticket of fines, an official stamp in the corner.
  'mckinley': [
    { d: 'M36 84 C36 60 124 56 128 80 C130 92 40 96 36 84z' },
    { d: 'M50 90 Q82 98 116 88' },
    { d: 'M82 60 v-8' },
    { d: 'M52 112 H108 V172 H52z' },
    { d: 'M60 126 H100 M60 138 H100 M60 150 H86', role: 'soft' },
    { d: circle(96, 160, 7), role: 'accent' },
    shadow(80, 184, 40),
  ],
  // A sash strung with axe dials, broken ruins underneath it.
  'yama': [
    { d: 'M20 96 C60 120 100 120 140 96 M20 116 C60 140 100 140 140 116' },
    {
      d: `${circle(40, 112, 7)} ${circle(62, 121, 7)} ${circle(84, 124, 7)} ${circle(106, 121, 7)} ${circle(128, 112, 7)}`,
      role: 'accent',
    },
    {
      d: 'M36 101 l4 -6 l4 6 M58 110 l4 -6 l4 6 M80 113 l4 -6 l4 6 M102 110 l4 -6 l4 6 M124 101 l4 -6 l4 6',
      role: 'soft',
    },
    { d: 'M20 96 L8 84 M140 96 L152 84', role: 'ambient' },
    {
      d: 'M30 184 V152 H46 V164 H54 V184 M104 184 V158 L112 148 L120 158 V184',
    },
    {
      d: dots([
        [66, 182],
        [76, 176],
        [88, 184],
      ]),
      role: 'ambient',
    },
  ],
  // A long feather over a flame spurting out of a dial shell.
  'fuza': [
    { d: 'M40 180 C60 130 92 76 128 24' },
    { d: 'M128 24 C96 30 66 76 52 140 L60 144 C84 96 112 56 128 24z' },
    { d: 'M70 110 l-12 -4 M82 88 l-12 -6 M96 66 l-10 -6', role: 'soft' },
    {
      d: 'M118 160 c-10 -12 -2 -24 6 -30 c0 10 8 12 10 4 c8 10 6 22 -4 28z',
      role: 'accent',
    },
    { d: 'M100 176 C100 164 110 158 120 158 C130 158 140 164 140 176z' },
    { d: 'M120 158 V176 M110 161 L106 176 M130 161 L134 176', role: 'ambient' },
    shadow(110, 186, 40),
  ],
  // A boxing glove hanging by its laces above a dog's bowl.
  'holy': [
    {
      d: 'M60 40 C40 40 34 64 38 84 C42 104 58 114 80 114 C104 114 118 98 116 74 C114 52 100 40 84 42 C78 36 68 36 60 40z',
    },
    { d: 'M60 62 C52 66 52 80 62 84', role: 'soft' },
    { d: 'M58 114 H102 V132 H58z', role: 'accent' },
    { d: 'M66 120 L94 126 M66 126 L94 120', role: 'ambient' },
    { d: 'M80 36 V12' },
    { d: 'M44 160 H116 L108 180 H52z' },
    { d: ellipse(80, 160, 36, 6) },
    shadow(80, 188, 40),
  ],
  // A chief's staff hung with fur and feathers, beside a carved stone block.
  'shandia-chief': [
    { d: 'M56 188 V40' },
    { d: 'M48 40 H64 L60 24 H52z', role: 'accent' },
    { d: 'M46 48 q10 16 20 0 q-2 14 -10 18 q-8 -4 -10 -18z', role: 'soft' },
    { d: 'M50 60 q-14 12 -12 30 M62 60 q14 12 12 30' },
    { d: 'M92 96 H144 V176 H92z' },
    {
      d: 'M100 110 H136 M100 124 H130 M100 138 H136 M100 152 H124',
      role: 'ambient',
    },
    shadow(100, 184, 50),
  ],
  // A white cap marked with dark arches, and the rock he scraped his arm with.
  'seto': [
    { d: 'M40 120 C40 80 60 62 84 62 C108 62 124 80 124 120z' },
    { d: 'M36 120 H128 V130 H36z' },
    {
      d: 'M56 112 v-12 a6 6 0 0 1 12 0 v12 M78 112 v-16 a6 6 0 0 1 12 0 v16 M100 112 v-12 a6 6 0 0 1 12 0 v12',
      role: 'accent',
    },
    { d: 'M104 176 L112 156 L132 150 L146 164 L140 180z' },
    { d: 'M112 156 L122 170 L140 180', role: 'soft' },
    {
      d: 'M24 40 l-4 10 M48 30 l-4 10 M120 36 l-4 10 M144 48 l-4 10',
      role: 'ambient',
      dashed: true,
    },
    shadow(84, 186, 50),
  ],
  // A stone altar standing in the water, its ropes cut and a knife left on it.
  'mousse': [
    { d: 'M36 120 H124 V140 H36z' },
    { d: 'M48 140 L40 162 H120 L112 140' },
    { d: 'M56 120 q-6 10 -14 12 M104 120 q6 10 14 12', role: 'soft' },
    { d: 'M62 112 L110 104 L114 108 L66 116z', role: 'accent' },
    { d: 'M62 112 L50 114 L52 118 L66 116' },
    ...SEA.slice(1),
  ],
  // The golden bell of the ruins, a long striped tail coiled at its foot.
  'nola': [
    { d: 'M58 110 C58 70 66 48 80 48 C94 48 102 70 102 110 L110 122 H50z' },
    { d: 'M74 48 V40 H86 V48' },
    { d: circle(80, 130, 5) },
    {
      d: 'M20 170 C40 150 80 190 120 164 C140 150 150 160 140 172 C124 188 70 184 40 176',
      role: 'accent',
    },
    {
      d: 'M44 164 l4 10 M70 172 l2 10 M100 170 l-2 10 M124 162 l-4 10',
      role: 'soft',
    },
    { d: 'M40 70 q-8 10 0 20 M120 70 q8 10 0 20', role: 'ambient' },
    shadow(80, 192, 56),
  ],
} satisfies Drawings

/** The records of this stretch drawn again, from the episode the story changes them. */
export const skypieaRedrawn: Redrawings = {
  // A tricorne over a knotted bandana: the hat he wears from the Warlords'
  // table on (ch. 524, ep. 421), and never at Mock Town. The shade under the
  // brim and down the crown's far side is hatched, never filled.
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
        { d: 'M30 134 Q80 148 130 134', role: 'accent' },
        { d: 'M34 142 Q80 157 126 142', role: 'accent' },
        {
          d: `${circle(134, 139, 4)} M137 142 q10 4 12 16 M138 137 q12 -2 16 8`,
          role: 'accent',
        },
        {
          d: 'M98 82 l-5 8 M103 90 l-5 8 M106 99 l-4 6 M136 96 l-5 8 M141 106 l-5 8',
          role: 'ambient',
        },
        {
          d: 'M94 133 l-5 9 M104 133 l-5 9 M114 131 l-5 9 M124 128 l-5 9',
          role: 'ambient',
        },
        shadow(80, 178, 50),
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
}
