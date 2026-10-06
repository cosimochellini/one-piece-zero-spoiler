import { circle, dots, ellipse, SEA, shadow } from '~/lib/svg/primitives'

import type { Drawings } from './stroke'

/** The slant Fukaboshi's trident is drawn at. */
const FUKABOSHI_SLANT = 'rotate(16 80 110)'
/** Where Hyouzou's gourd stands, leaning toward his sword. */
const HYOUZOU_GOURD = 'translate(118 180) rotate(-16)'
/** The tilt of the pill Zeo holds up. */
const ZEO_PILL = 'rotate(-12 102 33)'

/** The drawings of the records filed in the fish man island stretch of the route. */
export const fishManIslandArt = {
  // A mangrove on its stilt roots with a bubble going up, and an hourglass
  // beside it with all the sand run through.
  'return-to-sabaody': [
    { d: 'M40 150 V78 M54 150 V78' },
    { d: ellipse(47, 70, 30, 14) },
    { d: 'M40 126 C32 134 28 142 26 152 M54 126 C62 134 66 142 68 152' },
    { d: circle(84, 44, 9), role: 'accent' },
    { d: 'M102 64 H142 M102 144 H142' },
    { d: 'M108 64 L136 64 L122 104 Z M122 104 L108 144 H136 Z' },
    { d: 'M112 144 L122 128 L132 144', role: 'accent' },
    ...SEA,
  ],

  // The Sunny going down in its coating, the bubble the whole ship sails in,
  // with the lion's mane at the prow and the light from the surface thinning
  // out above it, dark water below. The descent is what 523 opens on; the
  // city under the roots is not reached until later.
  'fish-man-island-arc': [
    {
      d: 'M24 112 C24 58 136 58 136 112 C136 150 112 168 80 168 C48 168 24 150 24 112 Z',
      role: 'accent',
    },
    { d: 'M38 98 C42 84 54 74 70 70', role: 'soft' },
    { d: 'M42 136 L50 152 Q80 162 110 152 L118 136 Z' },
    { d: 'M48 144 Q80 152 112 144', role: 'soft' },
    { d: 'M80 136 V80' },
    { d: 'M62 88 Q80 84 98 88 L100 124 Q80 128 60 124 Z' },
    {
      d: 'M44 134 L36 136 L38 129 L31 126 L37 121 L33 115 L40 114 L40 107 L46 110 L50 104 L52 112 L48 122 L44 134',
    },
    {
      d: 'M44 -4 L56 46 M80 -4 V40 M116 -4 L104 46',
      role: 'ambient',
      dashed: true,
    },
    {
      d: 'M8 186 l14 -8 M34 192 l14 -8 M110 192 l14 -8 M136 186 l14 -8 M-2 166 l12 -7 M150 164 l12 -7',
      role: 'ambient',
    },
  ],

  // A wanted poster, water running off its bottom edge.
  'caribou': [
    { d: 'M40 40 H120 V160 H40 Z' },
    { d: 'M52 52 H108', role: 'soft' },
    { d: 'M52 62 H108 V118 H52 Z', role: 'soft' },
    { d: 'M54 134 H106', role: 'accent' },
    { d: 'M54 146 H94', role: 'soft' },
    {
      d: 'M60 166 q-3 10 1 15 q5 -5 2 -15z M98 166 q-3 12 1 18 q5 -6 2 -18z',
      role: 'accent',
    },
    shadow(80, 192, 46),
  ],
  // A wanted poster spattered with dark drops.
  'coribou': [
    { d: 'M40 40 H120 V160 H40 Z' },
    { d: 'M52 52 H108', role: 'soft' },
    { d: 'M52 62 H108 V118 H52 Z', role: 'soft' },
    { d: 'M54 134 H106', role: 'accent' },
    { d: 'M54 146 H94', role: 'soft' },
    { d: circle(112, 70, 5), role: 'accent' },
    { d: circle(48, 128, 4), role: 'accent' },
    {
      d: dots([
        [120, 82],
        [104, 64],
        [116, 54],
        [56, 138],
        [44, 118],
        [110, 152],
      ]),
      role: 'accent',
    },
    shadow(80, 172, 46),
  ],

  // A black fedora over a long black coat worn open on a striped undershirt,
  // the coat's far side hatched, the band of the hat in his colour. That is
  // all he wears at the gate; the net he fires comes a meeting later, and he
  // never carries a harpoon.
  'hammond': [
    { d: 'M44 40 C48 33 112 33 116 40 C112 47 48 47 44 40 Z' },
    { d: 'M56 38 C54 20 62 10 72 10 Q80 16 88 10 C98 10 106 20 104 38' },
    { d: 'M56 31 Q80 37 104 31', role: 'accent' },
    { d: 'M94 20 l6 -4 M96 28 l7 -4', role: 'ambient' },
    { d: 'M64 50 L40 58 Q30 62 28 76 L20 134 H34 L40 94 L36 176 H52 L60 80' },
    {
      d: 'M96 50 L120 58 Q130 62 132 76 L140 134 H126 L120 94 L124 176 H108 L100 80',
    },
    { d: 'M64 50 L56 72 L60 80 M96 50 L104 72 L100 80', role: 'soft' },
    { d: 'M68 52 L74 62 L72 152 H57 M92 52 L86 62 L88 152 H103' },
    { d: 'M63 84 V150 M67.5 66 V150 M97 84 V150 M92.5 66 V150', role: 'soft' },
    {
      d: 'M110 92 l10 -6 M110 112 l11 -6 M111 132 l11 -6 M112 152 l11 -6 M128 108 l6 -4',
      role: 'ambient',
    },
    shadow(80, 188, 44),
  ],

  // A crystal ball on a café counter, a shark's tail rising behind it.
  'shyarly': [
    { d: circle(72, 92, 34), role: 'accent' },
    { d: 'M52 78 q8 -12 22 -16', role: 'accent' },
    { d: 'M58 126 h28 l6 12 h-40z' },
    { d: 'M18 138 H146 V152 H18 Z' },
    { d: 'M30 152 V178 M134 152 V178' },
    { d: 'M114 126 C126 104 124 74 110 52 C130 64 144 92 138 126 Z' },
    { d: 'M120 112 C124 94 122 76 114 62', role: 'soft' },
    shadow(80, 186, 56),
  ],

  // A ship's wheel, and a heap of sunken coins at its foot.
  'vander-decken-ix': [
    { d: circle(76, 100, 44), role: 'accent' },
    { d: circle(76, 100, 30) },
    { d: circle(76, 100, 8) },
    { d: 'M76 56 V70 M76 130 V144 M32 100 H46 M106 100 H120' },
    { d: 'M45 69 L55 79 M107 69 L97 79 M45 131 L55 121 M107 131 L97 121' },
    { d: 'M76 46 V56 M76 144 V154 M22 100 H32 M120 100 H130', role: 'soft' },
    { d: ellipse(62, 176, 12, 4), role: 'accent' },
    { d: ellipse(88, 178, 12, 4), role: 'accent' },
    { d: ellipse(76, 170, 12, 4), role: 'accent' },
    { d: ellipse(112, 176, 12, 4), role: 'accent' },
    shadow(86, 190, 42),
  ],

  // A trident, and one of the pills that go with it.
  'hody-jones': [
    { d: 'M74 194 V96 M86 194 V96' },
    { d: 'M72 196 h16' },
    { d: 'M76 150 h8 M76 124 h8', role: 'soft' },
    { d: 'M54 96 H106' },
    { d: 'M80 96 V26 L84 14 L80 6 L76 14 L80 26', role: 'accent' },
    { d: 'M56 96 V46 L60 36 L56 28 L52 36 L56 46', role: 'accent' },
    { d: 'M104 96 V46 L108 36 L104 28 L100 36 L104 46', role: 'accent' },
    { d: circle(128, 160, 15) },
    { d: 'M116 154 q12 8 24 0', role: 'soft' },
    shadow(80, 198, 28),
  ],

  // An enormous old ship resting on the seabed, shacks crowded at its bow and
  // stern.
  'fish-man-district': [
    {
      d: 'M26 84 C44 82 116 82 134 84 C132 124 114 148 80 152 C46 148 28 124 26 84 Z',
      role: 'accent',
    },
    { d: 'M26 84 L20 66 M134 84 L140 66', role: 'accent' },
    {
      d: 'M30 102 C50 104 110 104 130 102 M38 122 C56 125 104 125 122 122',
      role: 'soft',
    },
    {
      d: dots([
        [50, 93],
        [65, 93],
        [80, 93],
        [95, 93],
        [110, 93],
      ]),
      role: 'soft',
    },
    { d: 'M56 84 V58 H104 V84', role: 'accent' },
    { d: 'M66 58 V46 H94 V58', role: 'soft' },
    { d: 'M2 156 V138 h18 V156 M-2 138 l13 -10 l13 10', role: 'soft' },
    { d: 'M138 156 V134 h20 V156 M134 134 l14 -12 l14 12', role: 'soft' },
    { d: 'M-4 156 C40 152 120 152 164 156', role: 'ambient' },
    { d: 'M-4 174 C50 168 110 170 164 178', role: 'ambient', dashed: true },
    {
      d: dots([
        [40, 30],
        [52, 18],
        [120, 36],
      ]),
      role: 'ambient',
    },
  ],

  // A coral throne with the crown left on the seat, and the king's trident
  // standing beside it.
  'neptune': [
    { d: 'M30 190 V118 H106 V190' },
    { d: 'M30 118 C30 40 106 40 106 118' },
    { d: 'M30 134 H106', role: 'soft' },
    { d: 'M42 190 V134 M94 190 V134', role: 'soft' },
    { d: 'M46 108 V78 l12 12 l10 -20 l10 20 l12 -12 V108 Z', role: 'accent' },
    { d: 'M46 98 H90', role: 'accent' },
    { d: 'M132 190 V82' },
    { d: 'M120 82 H144' },
    { d: 'M132 82 V40 M122 82 V54 M142 82 V54' },
    {
      d: 'M132 40 l3 -8 l-3 -6 l-3 6 l3 8 M122 54 l3 -7 l-3 -5 l-3 5 l3 7 M142 54 l3 -7 l-3 -5 l-3 5 l3 7',
    },
    shadow(74, 196, 50),
  ],
  // His gold trident at a slant, the long prongs in his colour, and the pale
  // band every prince of Ryugu wears wound round the shaft below the head,
  // its two ends hanging. The trident is what he carries from his first
  // scene; nothing in it is a shark.
  'fukaboshi': [
    { d: 'M77 74 V186 H83 V74', transform: FUKABOSHI_SLANT },
    {
      d: 'M72 74 a8 3 0 0 0 16 0 V66 a8 3 0 0 0 -16 0 Z',
      transform: FUKABOSHI_SLANT,
    },
    {
      d: 'M77 152 h6 M77 158 h6 M77 164 h6',
      role: 'soft',
      transform: FUKABOSHI_SLANT,
    },
    {
      d: 'M80 64 C62 64 54 52 54 30 M80 64 C98 64 106 52 106 30 M80 64 V30',
      role: 'accent',
      transform: FUKABOSHI_SLANT,
    },
    {
      d: 'M54 30 L50 22 L54 6 L58 22 Z M106 30 L102 22 L106 6 L110 22 Z M80 30 L76 20 L80 0 L84 20 Z',
      role: 'accent',
      transform: FUKABOSHI_SLANT,
    },
    {
      d: 'M76 82 L84 78 M76 88 L84 84',
      role: 'soft',
      transform: FUKABOSHI_SLANT,
    },
    {
      d: 'M84 84 C100 90 98 112 108 130 C114 142 112 152 106 160 L112 164 C120 152 120 140 114 128 C104 110 106 86 84 78',
      role: 'soft',
      transform: FUKABOSHI_SLANT,
    },
    {
      d: 'M84 90 C94 102 90 120 94 136 L88 138 C84 124 88 106 84 98',
      role: 'soft',
      transform: FUKABOSHI_SLANT,
    },
    shadow(98, 192, 34),
  ],
  // A sabre, and two notes going up off the edge of it.
  'ryuboshi': [
    { d: 'M48 158 C74 132 104 94 126 44' },
    { d: 'M58 166 C84 140 114 102 134 50' },
    { d: 'M126 44 L134 50' },
    { d: 'M42 150 L70 178' },
    { d: 'M48 160 L32 176 M58 170 L42 186' },
    { d: 'M32 176 L42 186' },
    { d: `${ellipse(44, 72, 8, 6)} M52 72 V40 q12 2 12 10`, role: 'accent' },
    { d: `${ellipse(74, 40, 8, 6)} M82 40 V8 q12 2 12 10`, role: 'accent' },
    shadow(84, 192, 40),
  ],
  // A sunfish with its two fins out, and a sabre standing beside it.
  'manboshi': [
    { d: circle(58, 102, 34), role: 'accent' },
    { d: 'M54 70 L62 30 L80 72', role: 'accent' },
    { d: 'M56 134 L64 174 L84 132', role: 'accent' },
    { d: 'M90 86 C106 92 106 114 90 120' },
    { d: 'M30 92 q10 -8 18 -2', role: 'soft' },
    { d: 'M124 150 V42 C124 28 130 18 132 12 C134 18 140 28 140 42 V150' },
    { d: 'M114 150 H150' },
    { d: 'M126 154 V186 H138 V154' },
    { d: 'M126 164 H138 M126 174 H138', role: 'soft' },
    shadow(66, 192, 46),
  ],

  // Her hairgrip, a taiyaki filled with red bean paste, set down on the sill
  // of her tower window: the cake's waffle crust in fine lines, its edge
  // showing the cake is thick, the pin beside it, the far side of the window
  // hatched. No eye on the fish.
  'shirahoshi': [
    { d: 'M30 150 V70 C30 20 130 20 130 70 V150' },
    { d: 'M40 128 V72 C40 34 120 34 120 72 V110', role: 'soft' },
    { d: 'M80 108 V30 M40 80 H120', role: 'soft' },
    { d: 'M120 64 l10 -6 M120 82 l10 -6 M120 100 l10 -6', role: 'ambient' },
    { d: 'M18 158 L28 150 H132 L142 158 Z' },
    { d: 'M18 158 V170 H142 V158' },
    {
      d: 'M40 132 C40 116 58 108 80 109 C94 110 104 116 108 122 L126 110 C122 122 122 134 126 146 L108 138 C104 146 92 154 80 154 C58 154 40 148 40 132 Z',
      role: 'accent',
    },
    { d: 'M62 110 L72 100 L86 110', role: 'accent' },
    {
      d: 'M44 142 C48 152 62 158 80 158 C94 158 104 152 108 146',
      role: 'soft',
    },
    {
      d: 'M54 116 C48 126 48 140 54 150 M110 130 L120 122 M110 134 L120 140',
      role: 'soft',
    },
    {
      d: 'M66 120 L94 146 M78 116 L102 138 M64 136 L84 118 M74 146 L98 124',
      role: 'soft',
    },
    { d: 'M42 148 H18 Q14 151 18 154 H40' },
    shadow(80, 186, 60),
  ],
  // The one sword he is first seen with, a katana with no guard in a sheath
  // covered in long spots, and the gourd he drinks from leaning beside it,
  // a cord tied round its waist. The eight swords come out much later.
  'hyouzou': [
    {
      d: 'M39.6 175.5 L117.6 37.5 Q122 34 126.4 42.5 L48.4 180.5 Q42 183 39.6 175.5 Z',
    },
    { d: 'M56.8 145.1 L65.6 150.1 M59.1 141 L67.9 146' },
    {
      d: 'M42.7 170 L54.6 169.5 L49 159 L60.9 158.4 L55.2 147.9',
      role: 'soft',
    },
    {
      d: 'M67.1 132.7 l3.4 -6.1 M80.2 118.4 l3.4 -6.1 M85.8 99.6 l3.4 -6.1 M98.9 85.3 l3.4 -6.1 M104.5 66.5 l3.4 -6.1 M117.7 52.1 l3.4 -6.1',
      role: 'accent',
    },
    {
      d: 'M-6 -36 C-14 -40 -12 -57 0 -57 C12 -57 14 -40 6 -36 C20 -32 18 0 0 0 C-18 0 -20 -32 -6 -36 Z',
      transform: HYOUZOU_GOURD,
    },
    { d: 'M-4 -57 V-64 H4 V-57', transform: HYOUZOU_GOURD },
    {
      d: 'M-14 -28 L14 -25 C22 -22 22 -14 18 -8',
      role: 'soft',
      transform: HYOUZOU_GOURD,
    },
    {
      d: 'M7 -22 l6 -4 M8 -12 l6 -4 M5 -46 l4 -3',
      role: 'ambient',
      transform: HYOUZOU_GOURD,
    },
    shadow(90, 190, 50),
  ],
  // His forearm raised, the wavy stripes of a wobbegong running round it in
  // his colour, the hand closed but for the finger and thumb that hold up an
  // Energy Steroid, the way he holds one to explain the pills at 530. His
  // camouflage is not shown until the invasion, so the drawing does not use
  // it.
  'zeo': [
    { d: 'M58 198 V140 M108 198 V140' },
    { d: 'M58 140 V84 Q58 78 63 78 Q68 73 73 78 Q78 73 83 78 Q88 73 90 78' },
    { d: 'M90 78 V50 Q90 42 95.5 42 Q101 42 101 50 V88' },
    {
      d: 'M108 140 V114 C120 100 122 66 114 48 Q110 42 105 46 C106 62 108 80 101 92',
    },
    { d: 'M63 78 V92 M73 78 V92 M83 78 V92', role: 'soft' },
    {
      d: 'M58 188 q12 7 25 2 t25 2 M58 164 q12 7 25 2 t25 2 M58 128 q12 7 25 2 t25 2 M58 106 q8 5 16 2 t16 2',
      role: 'accent',
    },
    { d: 'M90 64 q5 3 11 0', role: 'accent' },
    {
      d: 'M91 33 a5 5 0 0 1 5 -5 h12 a5 5 0 0 1 0 10 h-12 a5 5 0 0 1 -5 -5 Z',
      transform: ZEO_PILL,
    },
    {
      d: 'M102 28 V38 M107 28 V38 M102 33 H113',
      role: 'soft',
      transform: ZEO_PILL,
    },
    { d: 'M102 180 l6 -4 M102 156 l6 -4 M108 92 l6 -4', role: 'ambient' },
  ],
  // His helmet, seen from the side: the round hood, the studded ridge, the
  // great black flaps that sweep up on either side, hatched, and the red
  // crest along the top. He is introduced in it at 530; the tunnels he bites
  // through the ground come much later.
  'daruma': [
    {
      d: 'M128 86 C120 77 110 73 100 72 C80 70 60 78 48 96 C38 112 36 140 40 168 H132 L134 132',
    },
    { d: 'M53 100 C46 124 46 148 50 168', role: 'soft' },
    { d: 'M50 98 C64 86 80 80 100 80 C108 80 114 82 118 85', role: 'soft' },
    { d: 'M86 136 C100 112 120 90 150 66 C146 98 134 128 104 150 Z' },
    {
      d: 'M108 126 l10 -8 M114 132 l10 -8 M104 142 l12 -9 M126 108 l8 -6',
      role: 'ambient',
    },
    {
      d: 'M50 96 L44 76 L58 84 L58 62 L70 76 L76 54 L84 72 L94 52 L98 72 L110 58 L110 78 L122 72 L124 90',
      role: 'accent',
    },
    { d: 'M45 102 C34 94 26 80 22 60 C32 70 42 76 52 86' },
    { d: 'M30 78 l6 -3 M34 88 l6 -3', role: 'ambient' },
    { d: 'M62 90 l2 6 M74 84 l1.5 6 M87 80.5 l0.5 6 M100 80 v6', role: 'soft' },
    shadow(86, 184, 52),
  ],
  // Two lances, each head cut like a squid put out to dry.
  'ikaros-much': [
    { d: 'M34 190 L62 44' },
    { d: 'M44 192 L72 46' },
    { d: 'M40 156 h10 M46 126 h10', role: 'soft' },
    { d: 'M62 44 L67 10 L72 46 Z M63 36 L46 24 L64 32 Z', role: 'accent' },
    { d: 'M126 190 L98 44' },
    { d: 'M116 192 L88 46' },
    { d: 'M120 156 h-10 M114 126 h-10', role: 'soft' },
    { d: 'M98 44 L93 10 L88 46 Z M97 36 L114 24 L96 32 Z', role: 'accent' },
    { d: 'M34 190 L44 192 M126 190 L116 192' },
    shadow(80, 196, 52),
  ],
  // A hammer with a head wider than the man who swings it.
  'dosun': [
    { d: 'M74 194 V96 M88 194 V96' },
    { d: 'M72 196 h18' },
    { d: 'M76 170 h10 M76 146 h10', role: 'soft' },
    { d: 'M34 44 H128 V96 H34 Z', role: 'accent' },
    { d: 'M34 60 H128 M34 82 H128', role: 'soft' },
    { d: 'M28 50 H34 V90 H28 Z', role: 'accent' },
    { d: 'M128 50 H136 V90 H128 Z', role: 'accent' },
    { d: 'M70 96 H92 V110 H70 Z' },
    shadow(80, 198, 34),
  ],

  // A shipwright's mallet, and the bubbles going up off it.
  'den': [
    { d: 'M46 60 L86 20 L120 54 L80 94 Z', role: 'accent' },
    { d: 'M56 50 L92 84 M66 40 L102 74', role: 'soft' },
    { d: 'M74 88 L44 156' },
    { d: 'M86 94 L56 162' },
    { d: 'M44 156 C38 172 44 180 52 178 C60 176 62 168 56 162' },
    {
      d: `${circle(126, 112, 9)} ${circle(138, 84, 6)} ${circle(120, 62, 4)}`,
      role: 'accent',
    },
    { d: `${circle(30, 100, 5)} ${circle(22, 74, 3)}`, role: 'soft' },
    shadow(76, 190, 46),
  ],

  // A petition sheet with one signature at the foot of it, and the pen.
  'otohime': [
    { d: 'M36 22 H118 V178 H36 Z' },
    { d: 'M50 46 H104 M50 62 H104 M50 78 H92', role: 'soft' },
    { d: 'M50 102 H104 M50 118 H104 M50 134 H104', role: 'ambient' },
    {
      d: 'M50 160 C58 148 64 166 72 154 C78 146 84 162 94 148',
      role: 'accent',
    },
    { d: 'M46 166 H104', role: 'accent' },
    { d: 'M126 170 C132 136 140 104 148 74' },
    { d: 'M136 172 C142 138 148 108 150 78' },
    { d: 'M148 74 C152 68 152 74 150 78' },
    shadow(76, 188, 52),
  ],
  // The sheer face of the Red Line rising out of the frame, its far side
  // hatched, the holds he gouged with his bare hands climbing it in his
  // colour, and a broken shackle lying open at its foot with its chain: the
  // climb and the freed slaves, as Hancock tells them. No sun: that is the
  // crew's mark.
  'fisher-tiger': [
    { d: 'M106 -4 L112 30 L104 64 L112 98 L104 128 L110 156' },
    { d: 'M-4 152 C34 150 76 156 110 156 L164 146' },
    {
      d: 'M116 24 l18 -10 M114 56 l20 -11 M118 88 l20 -11 M114 118 l20 -11 M116 146 l18 -10 M144 30 l16 -9 M144 66 l16 -9 M146 100 l14 -8',
      role: 'ambient',
    },
    {
      d: 'M-4 40 L18 36 L28 42 L50 38 M40 106 L60 102 L72 108 L96 104',
      role: 'soft',
    },
    {
      d: 'M58 140 l4 -9 M64 141 l4 -9 M70 142 l4 -9 M76 116 l4 -9 M82 117 l4 -9 M88 118 l4 -9 M50 90 l4 -9 M56 91 l4 -9 M62 92 l4 -9 M74 64 l4 -9 M80 65 l4 -9 M86 66 l4 -9 M52 38 l4 -9 M58 39 l4 -9 M64 40 l4 -9 M74 14 l4 -9 M80 15 l4 -9 M86 16 l4 -9',
      role: 'accent',
    },
    {
      d: 'M62 170 C54 156 26 156 20 170 C14 184 30 194 52 190 L50 183 C34 186 26 180 30 172 C34 164 52 164 56 172 Z',
    },
    { d: 'M38 158 v6 M24 166 l4 4', role: 'soft' },
    { d: 'M64 166 h12 a4 4 0 0 1 0 8 h-12 a4 4 0 0 1 0 -8 Z M76 170 H96' },
    { d: 'M100 174 a4 4 0 0 1 -4 -4 a4 4 0 0 1 4 -4 h6', role: 'soft' },
    { d: 'M-4 196 C60 190 120 190 164 194', role: 'ambient', dashed: true },
  ],
  // A doctor's bag on the counter, a shark fin behind it.
  'aladine': [
    { d: 'M30 108 H130 V174 H30 Z' },
    { d: 'M30 108 C30 90 130 90 130 108' },
    { d: 'M64 94 C64 82 96 82 96 94' },
    { d: 'M30 130 H130', role: 'soft' },
    { d: 'M70 108 H90 V126 H70 Z' },
    { d: 'M66 150 H94 M80 136 V164', role: 'accent' },
    { d: 'M112 96 C116 64 128 44 148 30 C146 58 138 84 126 100' },
    { d: 'M18 178 H142', role: 'ambient' },
    shadow(80, 184, 54),
  ],

  // A pair of dark glasses lying under a tortoise shell.
  'pekoms': [
    { d: 'M24 128 C24 78 136 78 136 128 Z' },
    { d: 'M60 128 V104 l20 -12 l20 12 v24 Z', role: 'soft' },
    { d: 'M36 128 V112 l24 -8 M124 128 V112 l-24 -8', role: 'soft' },
    { d: 'M80 92 V84', role: 'soft' },
    { d: 'M24 128 H136 V140 H24 Z' },
    { d: ellipse(54, 166, 20, 12), role: 'accent' },
    { d: ellipse(106, 166, 20, 12), role: 'accent' },
    {
      d: 'M74 162 q6 -4 12 0 M34 160 L18 154 M126 160 L142 154',
      role: 'accent',
    },
    shadow(80, 186, 56),
  ],
  // The cup of hot tea he wears on his head, on its saucer, steam rising off
  // it, and his long wooden cane with its crook beside it. The cup, not a
  // top hat, is what he wears from his first scene.
  'baron-tamago': [
    {
      d: 'M24 160 A44 10 0 0 0 112 160 M24 160 A44 10 0 0 1 48 151.1 M88 151.1 A44 10 0 0 1 112 160',
    },
    { d: 'M26 164 C40 176 96 176 110 164', role: 'soft' },
    { d: ellipse(68, 112, 28, 8), role: 'accent' },
    {
      d: 'M40 112 C40 140 52 156 68 156 C84 156 96 140 96 112',
      role: 'accent',
    },
    { d: 'M46 114 Q68 122 90 114', role: 'soft' },
    { d: 'M96 120 C110 116 114 136 92 142' },
    { d: 'M86 122 l6 -3 M86 134 l6 -3 M80 146 l6 -3', role: 'ambient' },
    {
      d: 'M56 96 c-6 -8 6 -14 0 -24 M70 94 c-6 -10 6 -16 0 -30 M84 96 c-6 -8 6 -14 0 -24',
      role: 'ambient',
    },
    {
      d: 'M128 188 V56 C128 38 108 38 108 52 M134 188 V56 C134 32 102 32 102 52 M102 52 h6',
    },
    { d: 'M128 182 h6', role: 'soft' },
    shadow(84, 192, 58),
  ],
  // A frayed straw hat with a striped band, and a flintlock lying under it.
  'demalo-black': [
    { d: ellipse(80, 92, 60, 15) },
    { d: 'M46 90 C46 46 114 46 114 90' },
    {
      d: 'M47 78 C60 84 100 84 113 78 M46 88 C60 94 100 94 114 88',
      role: 'accent',
    },
    { d: 'M60 82 v8 M74 84 v8 M88 84 v8 M102 82 v8', role: 'accent' },
    {
      d: 'M24 98 l-7 5 M32 104 l-4 8 M128 104 l4 8 M136 98 l7 5',
      role: 'soft',
    },
    { d: 'M34 150 H110 V160 H34 Z' },
    { d: 'M110 150 C124 150 132 168 126 186 H112 C114 174 112 166 104 160' },
    { d: 'M106 150 l6 -9 l5 3 M92 160 q2 10 12 6', role: 'soft' },
    shadow(80, 194, 50),
  ],
  // A glowing lure on its bent stalk in the dark, and a small ship in its
  // bubble sailing toward the light.
  'ankoro': [
    { d: 'M30 190 C28 120 50 70 103 58' },
    { d: 'M38 190 C36 126 56 80 106 64', role: 'soft' },
    { d: circle(112, 50, 12), role: 'accent' },
    { d: 'M112 34 V26 M124 38 l6 -6 M128 50 h8 M100 38 l-6 -6', role: 'soft' },
    { d: circle(104, 140, 26), role: 'ambient', dashed: true },
    { d: 'M88 146 H120 L114 156 H94 Z' },
    { d: 'M104 146 V122' },
    { d: 'M104 124 L116 140 H104 Z', role: 'soft' },
  ],
  // A ship riding on a coil of tentacles, the suckers turned out along the
  // curls.
  'surume': [
    { d: 'M44 64 H116 L106 80 H54 Z' },
    { d: 'M80 64 V24' },
    { d: 'M80 28 L104 56 H80 Z', role: 'soft' },
    { d: 'M52 84 C30 110 30 150 54 160 C66 164 70 150 60 146', role: 'accent' },
    {
      d: 'M108 84 C130 110 130 150 106 160 C94 164 90 150 100 146',
      role: 'accent',
    },
    { d: 'M72 84 C66 120 74 160 64 184' },
    { d: 'M88 84 C94 120 86 160 96 184' },
    {
      d: dots([
        [38, 118],
        [36, 134],
        [122, 118],
        [124, 134],
        [70, 124],
        [90, 124],
      ]),
      role: 'soft',
    },
    shadow(80, 192, 40),
  ],
  // A tattered sail on a ship's mast, and a thick tow rope hanging from the
  // prow down to a knot.
  'wadatsumi': [
    { d: 'M60 140 V26' },
    { d: 'M60 32 H116 L110 54 L118 70 L106 86 L114 104 H60', role: 'soft' },
    { d: 'M60 58 H104 M60 82 H100', role: 'ambient' },
    { d: 'M24 140 H128 L116 160 H36 Z' },
    { d: 'M128 142 C144 150 150 166 140 182', role: 'accent' },
    { d: 'M124 148 C138 156 142 170 134 184', role: 'accent' },
    { d: circle(137, 188, 6), role: 'accent' },
    ...SEA,
  ],

  // A great bubble floating between the walls of a trench, clouds inside it
  // and light falling on it from above.
  'fish-man-island': [
    { d: circle(80, 92, 46), role: 'accent' },
    { d: 'M52 76 q6 -18 26 -24', role: 'accent' },
    { d: 'M54 100 q6 -10 16 -6 q8 -10 18 0 q10 -4 14 6', role: 'soft' },
    { d: 'M70 120 q6 -8 14 -4 q8 -6 14 2', role: 'soft' },
    {
      d: 'M56 6 L68 36 M80 2 V34 M104 6 L92 36',
      role: 'ambient',
      dashed: true,
    },
    { d: 'M-4 40 C10 70 4 110 18 140 C24 160 20 176 30 190', role: 'ambient' },
    {
      d: 'M164 50 C150 80 158 116 142 146 C136 164 140 178 130 190',
      role: 'ambient',
    },
    { d: 'M30 190 C60 180 100 180 130 190', role: 'ambient' },
    {
      d: dots([
        [80, 150],
        [76, 162],
        [82, 174],
      ]),
      role: 'soft',
    },
  ],
  // A T-shirt big enough for a shark, and a dorsal fin rising through the sea
  // behind it.
  'megalo': [
    {
      d: 'M50 62 L28 78 L38 98 L50 90 V146 H110 V90 L122 98 L132 78 L110 62 C100 72 60 72 50 62 Z',
    },
    { d: 'M62 66 C68 78 92 78 98 66', role: 'soft' },
    { d: 'M50 106 H110 M50 118 H110', role: 'accent' },
    {
      d: 'M114 58 C120 38 132 22 148 14 C144 30 142 44 144 58',
      role: 'accent',
    },
    { d: `${circle(24, 42, 5)} ${circle(34, 24, 3)}`, role: 'soft' },
    ...SEA,
  ],
  // His trishula standing upright, the spear point and the crescent blade
  // in his colour, and the katana from his left hip leaning against its shaft
  // in its black sheath, hatched. Both are in his hands from his first scene
  // in the palace.
  'minister-of-the-right': [
    { d: 'M60 188 V72 H66 V188 Z' },
    { d: 'M57 72 h12 v-8 h-12 Z' },
    { d: 'M63 64 V56 L57 36 L63 6 L69 36 L63 56', role: 'accent' },
    { d: 'M40 30 C40 58 86 58 86 30 C78 46 48 46 40 30 Z', role: 'accent' },
    { d: 'M63 21 V48', role: 'soft' },
    { d: 'M60 150 h6 M60 156 h6', role: 'soft' },
    {
      d: 'M117.3 187.3 L82.3 115.9 M87.7 113.3 L122.7 184.7 Q121 189.5 117.3 187.3',
    },
    { d: 'M77.8 118.1 L92.2 111.1 M76.9 116.3 L91.3 109.3' },
    { d: 'M81.8 113.7 L67.8 85.1 Q69 81 72.2 82.9 L86.2 111.5' },
    {
      d: 'M82 108 l3 -1.4 M79 102 l3 -1.4 M76 96 l3 -1.4 M73 90 l3 -1.4',
      role: 'soft',
    },
    {
      d: 'M110 168 l6 -3 M104 156 l6 -3 M98 144 l6 -3 M92 132 l6 -3',
      role: 'ambient',
    },
    shadow(86, 192, 48),
  ],
  // A cane with a horned grip, beside a loudspeaker still sending a voice
  // out over the island.
  'minister-of-the-left': [
    { d: 'M40 188 L50 64 M48 188 L58 64' },
    { d: 'M40 188 H48' },
    { d: ellipse(54, 56, 11, 8) },
    {
      d: 'M45 51 C36 45 34 35 38 26 M63 51 C72 45 74 35 70 26',
      role: 'accent',
    },
    { d: 'M43 150 h8 M46 116 h8', role: 'soft' },
    { d: 'M76 92 H84 V104 H76 Z' },
    { d: 'M84 94 L118 62 M84 102 L118 134' },
    { d: ellipse(118, 98, 8, 36) },
    { d: 'M80 104 V176 M68 176 H92' },
    { d: 'M134 74 q10 24 0 48 M144 64 q14 34 0 68', role: 'accent' },
    shadow(78, 192, 50),
  ],
  // A sword taller than its owner stood on its point, a black hat with a white
  // tuft hung on the hilt.
  'bobbin': [
    { d: 'M72 72 V176 L80 194 L88 176 V72' },
    { d: 'M80 78 V174', role: 'soft' },
    { d: 'M50 64 H110 V72 H50 Z' },
    { d: 'M75 64 V40 M85 64 V40' },
    { d: ellipse(80, 40, 30, 6) },
    { d: 'M62 38 C62 16 98 16 98 38', role: 'accent' },
    {
      d: 'M96 24 C108 12 120 14 130 6 M98 30 C112 24 124 26 136 16',
      role: 'accent',
    },
    { d: 'M60 146 H100 M60 118 H100', role: 'ambient' },
    shadow(80, 197, 30),
  ],
} satisfies Drawings
