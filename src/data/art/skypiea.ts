import { circle, dots, ellipse, house, SEA, shadow } from '~/lib/svg/primitives'

import type { Drawings, Redrawings, Stroke } from './stroke'

/** Sengoku's goat and the ground it stands on, beside the cap or alone. */
const SENGOKU_GOAT: Stroke[] = [
  {
    d: 'M102 128 q-4 -10 6 -12 h34 q10 2 6 12 v16 q0 8 -10 8 h-26 q-10 0 -10 -8z',
  },
  { d: 'M110 152 V176 M122 152 V176 M132 152 V176 M144 152 V176' },
  { d: 'M142 120 C150 116 154 106 148 100 C140 96 132 102 134 112' },
  { d: 'M146 100 q10 -10 4 -20', role: 'soft' },
  { d: 'M6 184 H154', role: 'ambient', dashed: true },
]

/** The Going Merry's tilt as the Knock Up Stream lifts her bow first. */
const MERRY_TILT = 'rotate(-10 80 90)'

/**
 * Kuma's Bible, closed and stood on end, without the rays on its cover: the
 * book of the first drawing, and the one set down beside the steel plate
 * from 469.
 */
const KUMA_BIBLE: Stroke[] = [
  { d: 'M40 62 L104 54 V162 L40 170 Z' },
  { d: 'M40 62 L54 52 L118 44 L104 54 M118 44 V152 L104 162' },
  { d: 'M40 62 q-8 54 0 108' },
  { d: 'M50 61 V168', role: 'soft' },
  { d: 'M47 57 L111 49', role: 'soft' },
  {
    d: 'M108 64 l7 -5 M108 84 l7 -5 M108 104 l7 -5 M108 124 l7 -5 M108 144 l7 -5',
    role: 'ambient',
  },
]

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
    ...KUMA_BIBLE,
    {
      d: 'M77 101 L77 86 M81.1 102.3 L89.9 90.2 M83.7 105.8 L97.9 101.2 M83.7 110.2 L97.9 114.8 M81.1 113.7 L89.9 125.8 M77 115 L77 130 M72.9 113.7 L64.1 125.8 M70.3 110.2 L56.1 114.8 M70.3 105.8 L56.1 101.2 M72.9 102.3 L64.1 90.2',
      role: 'accent',
    },
    shadow(80, 182, 48),
  ],

  // A Marine cap with its braid, and the goat that follows the man wearing it.
  // The cap is set down at his retirement, from 511, in `skypieaRedrawn`.
  'sengoku': [
    { d: 'M14 102 C14 66 34 54 55 54 C76 54 96 66 96 102z' },
    { d: 'M10 102 H100 V116 H10z', role: 'accent' },
    { d: 'M10 116 C0 120 0 132 12 136 H62 C78 134 88 126 88 116' },
    ...SENGOKU_GOAT,
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

  // Sunglasses, hung from strings like a puppet. The strings cut and the
  // glasses fallen and cracked from 733, in `skypieaRedrawn`.
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
  // Pierre as he flies in his horse form, side on with no eye drawn: a horse
  // with a bird's wings and a saddle girthed on, spotted all over. He eats
  // the Horse-Horse Fruit and shows it the day he is met (153). The far wing
  // and the belly are hatched.
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
    { d: 'M104 98 C106 76 114 58 128 44', role: 'ambient' },
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

/** Kuma's Bible, set down small beside the steel plate. */
const BESIDE = 'translate(105 108) scale(0.42)'

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

  // The strings cut short under the bar, and the glasses fallen beneath them
  // with both lenses cracked: Luffy's King Kong Gun shatters them and they
  // fall away from him at 733 (ch. 790).
  'donquixote-doflamingo': [
    {
      episode: 733,
      chapter: 790,
      value: [
        { d: 'M56 44 H104' },
        { d: 'M80 44 V36', role: 'ambient' },
        { d: 'M62 44 L53 64 M98 44 L107 64' },
        {
          d: 'M53 64 l-5 3 M53 64 l-1 6 M53 64 l3 5 M107 64 l5 3 M107 64 l1 6 M107 64 l-3 5',
          role: 'soft',
        },
        {
          d: 'M28 100 H70 q8 0 8 8 V122 q0 8 -8 8 H28 q-8 0 -8 -8 V108 q0 -8 8 -8z',
          role: 'accent',
          transform: FALLEN,
        },
        {
          d: 'M90 100 H132 q8 0 8 8 V122 q0 8 -8 8 H90 q-8 0 -8 -8 V108 q0 -8 8 -8z',
          role: 'accent',
          transform: FALLEN,
        },
        { d: 'M78 110 h4', role: 'accent', transform: FALLEN },
        {
          d: 'M38 100 l6 10 l-5 7 l8 13 M44 110 l13 2 M39 117 l-12 5',
          role: 'soft',
          transform: FALLEN,
        },
        {
          d: 'M122 130 l-5 -11 l6 -6 l-7 -13 M117 119 l-14 3 M123 113 l12 4',
          role: 'soft',
          transform: FALLEN,
        },
        { d: 'M20 108 l-8 4 M140 108 l6 -4 l1 -10', transform: FALLEN },
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

  // The cap set down on the ground, the goat alone beside it: he steps down
  // as fleet admiral before Kong at 511 (ch. 594), and after the two years he
  // goes bareheaded. The crown's far side is hatched, never filled. The cap
  // sits lower and smaller than the first drawing's, so the whole group is
  // lifted to keep the box balanced.
  'sengoku': [
    {
      episode: 511,
      chapter: 594,
      value: (
        [
          { d: 'M12 150 C12 120 30 110 48 110 C66 110 82 120 82 150z' },
          { d: 'M8 150 H86 V162 H8z', role: 'accent' },
          { d: 'M8 162 C0 166 0 176 10 180 H54 C68 178 76 172 76 162' },
          {
            d: 'M64 114 l-6 8 M71 118 l-7 10 M77 125 l-7 11 M80 135 l-7 11',
            role: 'ambient',
          },
          ...SENGOKU_GOAT,
        ] satisfies Stroke[]
      ).map((stroke) => ({ ...stroke, transform: 'translate(0 -30)' })),
    },
  ],

  // The paw pressed into a riveted steel plate, the Bible set down beside
  // it: Vegapunk has finished him, a weapon with his past erased, as
  // Doflamingo tells Ivankov at Marineford at 469 (ch. 560). The plate's edge
  // and the book's pages are hatched, never filled.
  'bartholomew-kuma': [
    {
      episode: 469,
      chapter: 560,
      value: [
        { d: 'M24 34 H110 V130 H24z' },
        { d: 'M110 34 l6 6 V136 H30 l-6 -6' },
        {
          d: 'M111 56 l4 4 M111 76 l4 4 M111 96 l4 4 M111 116 l4 4',
          role: 'ambient',
        },
        {
          d: `${circle(32, 42, 3)} ${circle(102, 42, 3)} ${circle(32, 122, 3)} ${circle(102, 122, 3)}`,
        },
        { d: ellipse(67, 98, 20, 15), role: 'accent' },
        {
          d: `${circle(45, 74, 7)} ${circle(59, 64, 7)} ${circle(77, 64, 7)} ${circle(91, 74, 7)}`,
          role: 'accent',
        },
        ...KUMA_BIBLE.map((stroke) => ({ ...stroke, transform: BESIDE })),
        shadow(84, 184, 60),
      ],
    },
  ],
}
