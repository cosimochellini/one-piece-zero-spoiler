import {
  circle,
  dot,
  dots,
  ellipse,
  polygon,
  SEA,
  shadow,
  star,
} from './primitives'
import type { Drawings } from './stroke'

/** The drawings of the records filed in the summit war stretch of the route. */
export const summitWarArt = {
  // A long sword, and the scalpel that goes with the surgeon.
  'trafalgar-law': [
    { d: 'M28 178 L120 38 M36 182 L128 42 M120 38 L128 42' },
    { d: 'M52 142 l12 8' },
    { d: 'M40 160 l8 4 M46 150 l8 4', role: 'ambient' },
    { d: 'M136 160 L100 124', role: 'accent' },
    {
      d: 'M100 124 C90 114 84 108 82 100 C90 104 98 112 104 120z',
      role: 'accent',
    },
  ],

  // A horseshoe magnet, and the bolts it has pulled in.
  'eustass-kid': [
    { d: 'M46 60 V126 a34 34 0 0 0 68 0 V60', role: 'accent' },
    { d: 'M66 60 V126 a14 14 0 0 0 28 0 V60', role: 'accent' },
    { d: 'M46 52 h20 v8 M94 52 h20 v8 M46 52 v8 M94 52 v8' },
    { d: 'M56 44 q24 -12 48 0', role: 'ambient', dashed: true },
    { d: polygon(40, 168, 8, 6) },
    { d: polygon(74, 178, 8, 6) },
    { d: polygon(112, 170, 8, 6) },
  ],

  // A snake, coiled, with its tongue out.
  'boa-hancock': [
    {
      d: 'M40 152 C40 128 56 118 80 118 C104 118 118 108 118 90 C118 70 100 60 82 62 C64 64 56 78 62 90 C66 100 80 100 86 92',
      role: 'accent',
    },
    { d: 'M86 92 C92 84 104 86 106 94 C104 100 94 104 88 98', role: 'accent' },
    { d: dot(98, 92), role: 'accent' },
    { d: 'M106 94 h10 m-3 -3 l3 3 l-3 3', role: 'accent' },
    {
      d: dots([
        [48, 136],
        [60, 126],
        [80, 120],
        [100, 118],
        [114, 100],
      ]),
      role: 'ambient',
    },
  ],

  // One great wave, the way a print draws it.
  'jinbe': [
    {
      d: 'M18 160 C26 110 60 84 88 84 C110 84 118 66 126 46 C124 74 110 90 96 96 C110 92 122 82 132 66 C128 100 100 116 72 122 C50 126 30 142 18 160z',
      role: 'accent',
    },
    { d: 'M96 80 q-8 4 -4 12 M112 66 q-6 4 -2 10', role: 'accent' },
    {
      d: dots([
        [134, 50],
        [120, 40],
        [140, 70],
      ]),
      role: 'accent',
    },
    ...SEA.slice(1),
  ],

  // A fortress in a crescent bay, gate to the sea.
  'marineford': [
    { d: 'M-6 152 C34 100 126 100 166 152' },
    {
      d: 'M28 122 V82 h12 v-10 h12 v10 h12 v-10 h12 v10 h12 v-10 h12 v10 h12 v-10 h12 v10 V122z',
      role: 'accent',
    },
    { d: 'M70 122 V100 a10 10 0 0 1 20 0 V122', role: 'accent' },
    { d: 'M40 68 V46 h14 v22 M106 68 V46 h14 v22 M76 68 V30 h8 v38' },
    ...SEA.slice(1),
  ],
  // A mangrove on its stilt roots, with soap bubbles going up from the bark.
  'sabaody': [
    { d: 'M72 148 V64 M88 148 V64' },
    { d: ellipse(80, 56, 42, 22) },
    {
      d: 'M72 118 C60 128 54 138 50 150 M88 118 C100 128 106 138 110 150 M72 132 C64 140 60 146 58 152 M88 132 C96 140 100 146 102 152',
    },
    { d: circle(42, 92, 9), role: 'accent' },
    { d: circle(120, 74, 12), role: 'accent' },
    { d: circle(114, 114, 7), role: 'accent' },
    ...SEA,
  ],

  // A jungle gate with a snake coiled over the lintel.
  'amazon-lily': [
    { d: 'M18 152 C36 118 60 104 80 104 C100 104 124 118 142 152' },
    { d: 'M56 152 V96 M104 152 V96' },
    { d: 'M48 96 h64' },
    {
      d: 'M58 96 C58 72 78 72 80 86 C82 96 94 96 96 86 C98 72 104 74 104 84',
      role: 'accent',
    },
    { d: 'M104 84 h10 m-3 -3 l3 3 l-3 3', role: 'accent' },
    { d: 'M32 150 V128 M32 128 q-12 -6 -16 4 M32 128 q12 -6 16 4' },
    { d: 'M130 150 V130 M130 130 q-12 -6 -16 4 M130 130 q12 -6 16 4' },
    ...SEA,
  ],

  // A prison tower going down into the water, one level line after another.
  'impel-down': [
    { d: 'M46 56 h68 v134 h-68z' },
    { d: 'M60 56 V38 h40 v18' },
    { d: 'M46 80 h68 M46 104 h68 M46 128 h68 M46 152 h68', role: 'soft' },
    { d: 'M70 56 V80 M80 56 V80 M90 56 V80', role: 'accent' },
    { d: 'M62 56 h36', role: 'accent' },
    {
      d: dots([
        [54, 92],
        [54, 116],
        [54, 140],
        [54, 164],
      ]),
      role: 'ambient',
    },
    ...SEA,
  ],

  // A tray of takoyaki on their skewers, and a scale beside it.
  'camie': [
    { d: 'M32 122 h96 v34 h-96z' },
    { d: 'M32 138 h96', role: 'soft' },
    { d: circle(56, 112, 11), role: 'accent' },
    { d: circle(80, 112, 11), role: 'accent' },
    { d: circle(104, 112, 11), role: 'accent' },
    { d: 'M56 101 V74 M80 101 V74 M104 101 V74' },
    { d: 'M26 76 c-6 -16 10 -28 22 -19 c11 8 7 26 -6 28 c-8 2 -13 -2 -16 -9z' },
    { d: 'M32 68 q10 -6 18 -2 M30 58 q8 -4 14 -2', role: 'soft' },
    shadow(80, 166, 48),
  ],

  // A starfish wearing a hat much too small for it.
  'pappag': [
    { d: star(80, 118, 44, 20) },
    {
      d: dots([
        [66, 112],
        [94, 112],
        [80, 134],
      ]),
      role: 'soft',
    },
    {
      d: dots([
        [58, 138],
        [102, 138],
      ]),
      role: 'soft',
    },
    { d: ellipse(80, 72, 18, 4), role: 'accent' },
    { d: 'M68 72 V56 h24 v16', role: 'accent' },
    shadow(80, 172, 40),
  ],

  // An iron mask with its rivets, in front of a printed sheet.
  'duval': [
    { d: 'M50 50 h60 v66 a30 30 0 0 1 -60 0z' },
    { d: 'M58 74 h44 M58 86 h44 M58 98 h44', role: 'accent' },
    {
      d: dots([
        [56, 58],
        [104, 58],
        [56, 112],
        [104, 112],
      ]),
    },
    { d: 'M96 130 h46 v54 h-46z' },
    { d: 'M104 142 h30 M104 152 h30 M104 162 h22', role: 'soft' },
    shadow(72, 178, 34),
  ],

  // A bar counter, an ashtray and a cigarette still going.
  'shakky': [
    { d: 'M20 120 h120 v10 h-120z' },
    { d: 'M28 130 V166 M132 130 V166' },
    { d: 'M20 148 h120', role: 'soft' },
    { d: ellipse(80, 112, 22, 7) },
    { d: 'M58 112 q22 12 44 0' },
    { d: 'M70 106 L104 86', role: 'accent' },
    { d: 'M96 90 l4 3', role: 'soft' },
    { d: 'M106 80 q6 -10 0 -18 q-6 -8 -2 -14', role: 'ambient', dashed: true },
    shadow(80, 176, 56),
  ],

  // A coating brush leaning on a barrel, with a glass already poured.
  'silvers-rayleigh': [
    { d: 'M44 92 c-6 26 -6 46 0 70 h72 c6 -24 6 -44 0 -70z' },
    { d: 'M40 112 h80 M40 142 h80', role: 'soft' },
    { d: 'M30 88 L64 40' },
    { d: 'M22 96 L36 106 L50 86 L36 76z', role: 'accent' },
    { d: 'M92 54 h28 l-6 22 h-16z' },
    { d: 'M106 76 V88 M96 88 h20' },
    shadow(80, 176, 44),
  ],

  // Two long blades, one on each gauntlet.
  'killer': [
    { d: 'M40 128 h30 v26 h-30z' },
    { d: 'M92 128 h30 v26 h-30z' },
    { d: 'M40 140 h30 M92 140 h30', role: 'soft' },
    { d: 'M46 128 L26 56 C24 44 34 38 40 46 L62 126', role: 'accent' },
    { d: 'M116 128 L136 56 C138 44 128 38 122 46 L100 126', role: 'accent' },
    shadow(80, 168, 54),
  ],

  // A boiler suit on its hanger, with a paw print across the chest.
  'bepo': [
    { d: 'M58 48 C58 40 102 40 102 48 V150 h-18 V104 h-8 v46 h-18z' },
    { d: 'M58 56 L36 94 l14 10 L64 84' },
    { d: 'M102 56 L124 94 l-14 10 L96 84' },
    { d: 'M62 126 h36', role: 'soft' },
    { d: circle(80, 78, 10), role: 'accent' },
    {
      d: dots([
        [68, 62],
        [80, 58],
        [92, 62],
      ]),
      role: 'accent',
    },
    shadow(80, 162, 40),
  ],

  // Headphones over a pair of crossed sticks.
  'scratchmen-apoo': [
    { d: 'M42 96 V74 a38 38 0 0 1 76 0 V96', role: 'accent' },
    { d: 'M32 96 h20 v32 h-20z', role: 'accent' },
    { d: 'M108 96 h20 v32 h-20z', role: 'accent' },
    { d: 'M40 186 L120 142' },
    { d: 'M120 186 L40 142' },
    { d: circle(120, 142, 4) },
    { d: circle(40, 142, 4) },
    shadow(80, 192, 44),
  ],

  // A card turned face up, and a straw doll standing beside it.
  'basil-hawkins': [
    { d: 'M32 56 h56 v92 h-56z' },
    { d: 'M40 66 h40 v72 h-40z', role: 'soft' },
    { d: star(60, 102, 18, 8), role: 'accent' },
    { d: 'M118 72 V150' },
    { d: 'M100 96 h36' },
    { d: circle(118, 62, 10) },
    { d: 'M110 150 l-6 18 M126 150 l6 18' },
    { d: 'M112 84 h12 M110 110 h16', role: 'soft' },
    shadow(80, 180, 52),
  ],

  // A three-toed footprint with a Marine cap left inside it.
  'x-drake': [
    {
      d: 'M52 96 C40 108 38 130 48 150 C60 166 100 166 112 150 C122 130 120 108 108 96 C96 88 64 88 52 96z',
      role: 'accent',
    },
    { d: 'M52 96 C44 80 46 60 56 58 C64 58 66 76 64 92', role: 'accent' },
    { d: 'M80 88 C76 70 78 48 84 46 C92 46 92 68 88 88', role: 'accent' },
    { d: 'M108 96 C116 80 114 60 104 58 C96 58 94 76 96 92', role: 'accent' },
    { d: 'M60 132 h40 v-14 q-20 -10 -40 0z' },
    { d: 'M56 132 h48' },
    shadow(80, 182, 44),
  ],

  // A monk's iron pillar, rings and all.
  'urouge': [
    { d: 'M64 40 h32 v140 h-32z' },
    { d: 'M60 64 h40 M60 92 h40 M60 120 h40 M60 148 h40', role: 'soft' },
    { d: 'M56 40 h48 v-12 h-48z', role: 'accent' },
    { d: circle(40, 34, 10), role: 'accent' },
    { d: circle(120, 34, 10), role: 'accent' },
    { d: 'M50 34 h6 M104 34 h6' },
    shadow(80, 188, 30),
  ],

  // A pinstriped coat with a fortress gate where the waistcoat should be.
  'capone-bege': [
    { d: 'M40 56 L70 92 L80 80 L90 92 L120 56' },
    { d: 'M40 56 V172 M120 56 V172' },
    { d: 'M40 172 h80', role: 'soft' },
    { d: 'M58 106 h44 v58 h-44z', role: 'accent' },
    {
      d: 'M54 106 h52 M60 106 v-8 h7 v8 M76 106 v-8 h7 v8 M92 106 v-8 h7 v8',
      role: 'accent',
    },
    { d: 'M70 164 V142 a10 10 0 0 1 20 0 V164', role: 'accent' },
    shadow(80, 184, 44),
  ],

  // A slice standing up on a plate far too big for it.
  'jewelry-bonney': [
    { d: ellipse(80, 140, 56, 18) },
    { d: ellipse(80, 140, 44, 12), role: 'soft' },
    { d: 'M80 42 L112 122 h-64z', role: 'accent' },
    { d: 'M52 116 q28 12 56 0', role: 'accent' },
    {
      d: dots([
        [80, 80],
        [70, 102],
        [92, 102],
      ]),
      role: 'accent',
    },
    shadow(80, 168, 52),
  ],

  // A glass bubble helmet set down on a cushion.
  'saint-charloss': [
    { d: circle(80, 92, 40), role: 'accent' },
    { d: 'M54 68 q10 -10 22 -12', role: 'accent' },
    { d: 'M56 126 h48 v12 h-48z' },
    { d: 'M46 138 h68 l10 22 h-88z' },
    { d: 'M36 160 h88', role: 'soft' },
    { d: 'M36 160 l-6 8 M124 160 l6 8' },
    shadow(80, 178, 50),
  ],

  // A pair of spectacles with the light coming straight through them.
  'borsalino': [
    { d: circle(56, 92, 22) },
    { d: circle(112, 92, 22) },
    { d: 'M78 92 q8 -8 16 0' },
    { d: 'M34 86 L20 80 M134 86 L148 80' },
    { d: 'M44 112 L26 186 M68 112 L84 186', role: 'accent' },
    { d: 'M100 112 L84 186 M124 112 L142 186', role: 'accent' },
    { d: 'M30 150 h104', role: 'ambient', dashed: true },
  ],

  // A broadaxe standing in a wrestler's belt.
  'sentomaru': [
    { d: 'M76 56 V180 h8 V56z' },
    {
      d: 'M84 62 C110 62 126 78 128 96 C126 116 110 128 84 128z',
      role: 'accent',
    },
    { d: 'M84 76 C102 76 112 86 112 96', role: 'accent' },
    { d: 'M56 140 h48 v14 h-48z' },
    { d: 'M56 147 h48', role: 'soft' },
    { d: 'M62 154 v16 M76 154 v16 M90 154 v16 M104 154 v16' },
    shadow(80, 190, 30),
  ],

  // A snake wound round a pillar, tongue out at the top.
  'boa-sandersonia': [
    { d: 'M64 46 V168 M96 46 V168' },
    { d: 'M54 40 h52 v8 h-52z' },
    { d: 'M54 168 h52 v10 h-52z' },
    {
      d: 'M52 160 C104 150 106 136 62 126 C20 116 24 100 76 92 C120 84 122 70 84 62',
      role: 'accent',
    },
    { d: 'M84 62 C72 58 68 48 78 44 C88 40 96 48 92 56', role: 'accent' },
    { d: 'M92 56 h10 m-3 -3 l3 3 l-3 3', role: 'accent' },
    shadow(80, 186, 34),
  ],

  // The same pillar, the coil heavier, and a breath of fire at the top.
  'boa-marigold': [
    { d: 'M64 50 V168 M96 50 V168' },
    { d: 'M54 44 h52 v8 h-52z' },
    { d: 'M54 168 h52 v10 h-52z' },
    {
      d: 'M58 160 C110 152 110 138 66 128 C24 118 28 102 80 94 C118 88 120 76 90 68',
      role: 'accent',
    },
    { d: 'M90 68 C78 62 78 52 88 50 C98 48 104 56 100 62', role: 'accent' },
    {
      d: 'M100 62 c10 -4 18 -12 22 -22 c2 12 -2 22 -10 28 c8 -2 14 -8 18 -16 c0 16 -12 26 -26 24',
      role: 'accent',
    },
    shadow(80, 186, 34),
  ],

  // A bow whose string is a snake.
  'marguerite': [
    { d: 'M100 30 C56 60 56 140 100 170', role: 'accent' },
    { d: 'M100 30 c6 4 6 8 4 12 M100 170 c6 -4 6 -8 4 -12' },
    {
      d: 'M102 42 C88 68 112 80 100 100 C88 120 112 134 102 158',
      role: 'accent',
    },
    { d: 'M102 42 c6 -6 14 -4 14 3 c0 6 -8 9 -13 5', role: 'accent' },
    { d: 'M116 45 h9 m-3 -3 l3 3 l-3 3' },
    { d: 'M56 90 h10 v22 h-10z' },
    shadow(80, 184, 40),
  ],

  // A crystal ball resting on the papers it is read beside.
  'nyon': [
    { d: circle(80, 78, 32), role: 'accent' },
    { d: 'M58 58 q10 -10 22 -12', role: 'accent' },
    { d: 'M64 110 h32 l8 12 h-48z' },
    { d: 'M26 122 h108 v14 h-108z' },
    { d: 'M30 136 h100 v14 h-100z' },
    { d: 'M26 150 h108 v14 h-108z' },
    { d: 'M40 128 h36 M40 143 h36 M40 157 h36', role: 'soft' },
    shadow(80, 176, 56),
  ],

  // A warden's cap, with what comes off it.
  'magellan': [
    { d: 'M40 104 C40 74 120 74 120 104z' },
    { d: 'M32 104 h96' },
    { d: 'M36 104 q44 18 88 2' },
    { d: 'M44 90 h72', role: 'soft' },
    { d: 'M52 116 c-6 14 -2 22 4 22 c6 0 10 -8 4 -22z', role: 'accent' },
    { d: 'M80 122 c-7 18 -2 28 4 28 c6 0 11 -10 4 -28z', role: 'accent' },
    { d: 'M108 116 c-6 14 -2 22 4 22 c6 0 10 -8 4 -22z', role: 'accent' },
    shadow(80, 176, 50),
  ],

  // A pharaoh's headdress, and the two-bladed pole beside it.
  'hannyabal': [
    { d: 'M34 66 C34 40 92 40 92 66 V126 l-12 14 h-34 l-12 -14z' },
    { d: 'M34 74 h58 M34 88 h58 M34 102 h58', role: 'soft' },
    { d: 'M126 56 V150' },
    { d: 'M126 56 c0 -18 -6 -26 -14 -30 c4 12 6 22 14 30z', role: 'accent' },
    { d: 'M126 150 c0 18 6 26 14 30 c-4 -12 -6 -22 -14 -30z', role: 'accent' },
    { d: 'M120 92 h12 M120 112 h12', role: 'soft' },
    shadow(64, 180, 36),
  ],

  // A heart-backed throne under a crown of needles.
  'emporio-ivankov': [
    {
      d: 'M80 58 C68 34 34 40 34 68 C34 96 62 112 80 128 C98 112 126 96 126 68 C126 40 92 34 80 58z',
    },
    { d: 'M44 128 h72 v18 h-72z' },
    { d: 'M50 146 v26 M110 146 v26' },
    { d: 'M62 44 L56 20 M80 40 L80 14 M98 44 L104 20', role: 'accent' },
    { d: 'M52 26 h8 M76 20 h8 M100 26 h8', role: 'accent' },
    shadow(80, 180, 42),
  ],

  // Giant scissors, and the floor they have been through.
  'inazuma': [
    { d: 'M80 100 L42 30 l10 -6 L90 94z', role: 'accent' },
    { d: 'M80 100 L118 30 l-10 -6 L70 94z', role: 'accent' },
    { d: circle(60, 130, 16) },
    { d: circle(100, 130, 16) },
    { d: 'M80 100 L66 116 M80 100 L94 116' },
    { d: 'M14 170 h132', role: 'ambient' },
    { d: 'M64 160 l16 10 l-16 10', role: 'ambient', dashed: true },
  ],

  // A long blade laid down, the rain still on it.
  'shiryu': [
    { d: 'M30 174 L120 40 M38 179 L128 45 M120 40 L128 45' },
    { d: 'M54 152 l10 6' },
    { d: 'M30 174 L16 184 M38 179 L24 189 M16 184 L24 189' },
    {
      d: dots([
        [70, 130],
        [84, 112],
        [98, 92],
        [62, 142],
        [90, 124],
      ]),
      role: 'accent',
    },
    { d: 'M76 122 q5 -8 10 0 q-5 8 -10 0', role: 'accent' },
    shadow(80, 192, 44),
  ],

  // A championship belt, plate and strap.
  'jesus-burgess': [
    { d: 'M18 84 h124 v40 h-124z' },
    { d: 'M18 92 h124 M18 116 h124', role: 'soft' },
    {
      d: dots([
        [30, 104],
        [44, 104],
        [116, 104],
        [130, 104],
      ]),
    },
    {
      d: 'M80 58 C110 58 122 80 122 104 C122 128 110 150 80 150 C50 150 38 128 38 104 C38 80 50 58 80 58z',
      role: 'accent',
    },
    { d: star(80, 104, 22, 10), role: 'accent' },
    { d: 'M58 76 q22 -10 44 0', role: 'soft' },
    shadow(80, 172, 56),
  ],

  // A long rifle, and a bird already out of range.
  'van-augur': [
    { d: 'M20 158 L128 96' },
    { d: 'M26 168 L118 116' },
    { d: 'M20 158 L26 168' },
    { d: 'M118 116 L128 96 M122 108 L134 102' },
    { d: 'M62 132 L70 146 L82 140' },
    { d: 'M84 110 h24 v10 h-24z' },
    { d: 'M88 120 l-6 8 M104 120 l6 -8' },
    { d: 'M56 46 q14 -14 26 0 q12 -14 26 0', role: 'accent' },
    shadow(80, 184, 52),
  ],

  // A basket of apples, one of them with a fuse in it.
  'doc-q': [
    { d: 'M34 118 h64 l-8 46 h-48z' },
    { d: 'M34 118 h64', role: 'soft' },
    { d: 'M40 118 C40 98 92 98 92 118', role: 'soft' },
    { d: circle(50, 110, 11) },
    { d: circle(74, 108, 11) },
    { d: circle(96, 112, 11), role: 'accent' },
    { d: 'M96 101 c4 -10 12 -14 18 -10 c-6 6 -8 12 -8 18', role: 'accent' },
    { d: 'M112 142 c10 -16 28 -16 34 0 c-6 10 -28 10 -34 0z' },
    { d: 'M118 152 v14 M142 152 v14', role: 'soft' },
    shadow(72, 176, 46),
  ],

  // A top hat and a cane, left on the floor of a dance hall.
  'laffitte': [
    { d: 'M56 108 V54 h48 v54' },
    { d: ellipse(80, 108, 40, 10) },
    { d: 'M56 92 h48', role: 'accent' },
    { d: 'M56 54 q24 -8 48 0' },
    { d: 'M120 62 L104 168' },
    { d: 'M120 62 c10 -6 18 2 14 10 c-3 6 -10 6 -13 2', role: 'accent' },
    { d: 'M12 180 h136', role: 'ambient' },
    {
      d: 'M30 168 h20 v12 h-20z M70 168 h20 v12 h-20z M110 168 h20 v12 h-20z',
      role: 'ambient',
      dashed: true,
    },
  ],

  // A spear whose head is a crescent moon.
  'catarina-devon': [
    { d: 'M80 178 V72' },
    { d: 'M74 178 h12', role: 'soft' },
    { d: 'M80 72 C44 66 30 40 40 12 C76 22 92 48 80 72z', role: 'accent' },
    { d: 'M80 72 C62 60 52 40 54 22', role: 'accent' },
    { d: 'M72 88 h16 M72 104 h16', role: 'soft' },
    shadow(80, 190, 26),
  ],

  // A drinking gourd, stopper still in it.
  'vasco-shot': [
    {
      d: 'M80 44 C66 44 62 56 66 66 C46 78 40 104 44 128 C48 156 62 172 80 172 C98 172 112 156 116 128 C120 104 114 78 94 66 C98 56 94 44 80 44z',
      role: 'accent',
    },
    { d: 'M68 40 h24 v8 h-24z' },
    { d: 'M46 96 C60 90 100 90 114 96', role: 'soft', dashed: true },
    { d: 'M54 66 C40 58 34 66 40 74 M106 66 c14 -8 20 0 14 8' },
    { d: 'M124 150 q6 -12 12 0 q-6 14 -12 0z M130 150 v18', role: 'soft' },
    shadow(80, 184, 42),
  ],

  // A row of cell bars, two of them no longer straight.
  'san-juan-wolf': [
    { d: 'M30 28 h100 M30 182 h100' },
    { d: 'M40 28 V182 M120 28 V182' },
    { d: 'M60 28 V182' },
    { d: 'M80 28 C80 68 50 86 50 108 C50 134 80 146 80 182', role: 'accent' },
    {
      d: 'M100 28 C100 72 118 90 110 112 C104 132 100 154 100 182',
      role: 'accent',
    },
    { d: 'M30 104 h100', role: 'ambient', dashed: true },
  ],

  // A horned crown put down on a cushion.
  'avalo-pizarro': [
    { d: 'M30 138 h100 l8 30 h-116z' },
    { d: 'M22 168 h116', role: 'soft' },
    { d: 'M30 138 q50 12 100 0', role: 'soft' },
    { d: 'M22 168 l-4 6 M138 168 l4 6' },
    { d: 'M48 132 V96 h64 v36z' },
    { d: 'M48 96 C44 66 38 50 26 38 C44 44 54 62 58 84', role: 'accent' },
    {
      d: 'M112 96 C116 66 122 50 134 38 C116 44 106 62 102 84',
      role: 'accent',
    },
    { d: 'M80 96 V58 l-8 10 M80 58 l8 10', role: 'accent' },
    { d: 'M44 112 h72', role: 'soft' },
  ],

  // A Marine cap with a fist burned through it.
  'sakazuki': [
    { d: 'M36 118 C36 78 124 78 124 118z' },
    { d: 'M28 118 h104' },
    { d: 'M32 128 q48 16 96 0 M28 118 v10 M132 118 v10' },
    {
      d: 'M62 96 C56 82 62 70 74 70 C86 70 94 80 96 92 C98 104 90 112 76 112 C66 112 64 104 62 96z',
      role: 'accent',
    },
    { d: 'M68 78 q10 -12 22 -4', role: 'accent' },
    { d: 'M50 72 q-8 -12 -2 -20 M108 76 q10 -10 6 -20', role: 'accent' },
    shadow(80, 158, 52),
  ],

  // A diamond the size of a shoulder plate.
  'jozu': [
    { d: 'M80 36 L128 88 L80 164 L32 88z', role: 'accent' },
    { d: 'M32 88 h96', role: 'accent' },
    { d: 'M56 62 L68 88 L80 164 M104 62 L92 88', role: 'soft' },
    { d: 'M56 62 h48' },
    { d: 'M22 104 L44 96 M138 104 L116 96' },
    { d: 'M46 172 h68', role: 'ambient', dashed: true },
    shadow(80, 182, 40),
  ],

  // Two rapiers crossed above a rose.
  'vista': [
    { d: 'M26 28 L118 120' },
    { d: 'M134 28 L42 120' },
    { d: 'M118 120 l12 10 M42 120 l-12 10' },
    { d: 'M106 110 q12 8 8 18 M54 110 q-12 8 -8 18' },
    { d: circle(80, 146, 16), role: 'accent' },
    {
      d: 'M80 134 c9 0 13 7 10 13 c-3 6 -11 7 -15 3 c-4 -5 -1 -13 7 -13',
      role: 'accent',
    },
    { d: 'M64 152 q-12 -2 -16 -10 M96 152 q12 -2 16 -10', role: 'accent' },
    shadow(80, 182, 44),
  ],

  // A flag torn along its edge, and the dagger under it.
  'squard': [
    { d: 'M40 20 V186' },
    {
      d: 'M40 34 h82 v52 l-14 -8 l-12 10 l-14 -10 l-16 10 l-16 -8z',
      role: 'accent',
    },
    { d: 'M40 52 h82', role: 'soft' },
    { d: 'M100 180 L128 124' },
    { d: 'M106 183 L134 127' },
    { d: 'M128 124 L134 127' },
    { d: 'M96 172 l14 7' },
    shadow(84, 192, 40),
  ],

  // A straw hat woven out of rope, big enough for a giant.
  'little-oars-jr': [
    { d: ellipse(80, 130, 66, 22), role: 'accent' },
    { d: 'M34 124 C36 66 124 66 126 124' },
    { d: 'M34 124 q46 22 92 0', role: 'soft' },
    { d: 'M46 100 q34 14 68 0 M40 112 q40 16 80 0', role: 'soft' },
    { d: 'M50 84 q30 12 60 0', role: 'soft' },
    { d: 'M52 72 V126 M80 66 V130 M108 72 V126', role: 'soft' },
    shadow(80, 168, 60),
  ],

  // A washing line with two coats on it, and a cloth wrung out below.
  'tsuru': [
    { d: 'M8 46 C60 62 100 62 152 46', role: 'ambient' },
    {
      d: 'M34 58 l-12 20 l8 4 l4 -8 v44 h28 v-44 l4 8 l8 -4 l-12 -20z',
      role: 'accent',
    },
    {
      d: 'M104 62 l-12 20 l8 4 l4 -8 v42 h26 v-42 l4 8 l8 -4 l-12 -20z',
      role: 'accent',
    },
    {
      d: dots([
        [34, 54],
        [62, 56],
        [104, 58],
        [130, 56],
      ]),
    },
    { d: 'M64 140 c10 6 -10 12 0 18 c10 6 -10 12 0 18' },
    { d: 'M74 140 c10 6 -10 12 0 18 c10 6 -10 12 0 18' },
    shadow(80, 186, 44),
  ],

  // A cap set on a sword laid across the rail.
  'momonga': [
    { d: 'M18 142 h124' },
    { d: 'M18 150 h124', role: 'soft' },
    { d: 'M34 150 V182 M126 150 V182' },
    { d: 'M28 126 h104 M28 132 h104 M132 126 l8 3 l-8 3', role: 'accent' },
    { d: 'M44 120 h8 v18 h-8z' },
    { d: 'M28 126 L18 126 M28 132 L18 132' },
    { d: 'M56 114 C56 88 116 88 116 114z' },
    { d: 'M50 114 h72' },
    { d: 'M54 122 q32 10 64 0' },
    shadow(80, 192, 56),
  ],

  // A bandits' pot over the fire, with the bowls waiting.
  'curly-dadan': [
    { d: 'M46 76 h52 l-6 42 h-40z' },
    { d: 'M40 76 h64' },
    { d: 'M52 76 C52 58 92 58 92 76', role: 'soft' },
    { d: 'M98 86 q12 4 10 14' },
    {
      d: 'M56 158 c4 -16 14 -22 12 -34 c10 8 12 18 10 26 c6 -4 8 -12 6 -20 c10 10 12 22 6 30z',
      role: 'accent',
    },
    { d: 'M92 154 c2 -10 8 -14 8 -22 c6 6 8 14 6 22z', role: 'accent' },
    {
      d: 'M16 164 h30 l-6 18 h-18z M66 164 h30 l-6 18 h-18z M116 164 h30 l-6 18 h-18z',
    },
    { d: 'M8 182 h144', role: 'ambient' },
  ],

  // A top hat with goggles on the brim, and a pipe beside it.
  'sabo': [
    { d: 'M54 106 V52 h46 v54' },
    { d: ellipse(77, 106, 38, 10) },
    { d: 'M54 52 q23 -8 46 0' },
    { d: circle(64, 94, 11), role: 'accent' },
    { d: circle(90, 94, 11), role: 'accent' },
    { d: 'M75 94 h4 M53 92 q-6 2 -8 6 M101 92 q6 2 8 6', role: 'accent' },
    { d: 'M124 44 V172 M134 44 V172' },
    { d: 'M124 44 q5 -4 10 0 M124 172 q5 4 10 0' },
    shadow(78, 170, 42),
  ],

  // A crown of flowers laid on a cradle.
  'portgas-d-rouge': [
    { d: 'M30 110 h100 l-10 48 h-80z' },
    { d: 'M30 110 h100', role: 'soft' },
    { d: 'M40 158 C40 176 120 176 120 158', role: 'soft' },
    { d: 'M24 168 C24 184 136 184 136 168', role: 'ambient', dashed: true },
    { d: 'M40 88 C52 60 108 60 120 88', role: 'accent' },
    {
      d: `${circle(48, 86, 8)} ${circle(80, 66, 8)} ${circle(112, 86, 8)}`,
      role: 'accent',
    },
  ],
} satisfies Drawings
