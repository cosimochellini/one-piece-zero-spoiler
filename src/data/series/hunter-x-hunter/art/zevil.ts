import {
  type Drawings,
  moved,
  type Redrawings,
  type Stroke,
} from '~/data/art/stroke'
import { circle, ellipse, SEA, shadow } from '~/lib/svg/primitives'

/**
 * One of Gittarackur's round-headed pins, upright with its point at the
 * origin: the shaft with both its edges, and the round head. Both his
 * drawings are these same pins moved, so the only thing that changes at
 * episode 20 is where the pins are.
 */
const SHAFT: Stroke = { d: 'M-1.6 -91 V-10 L0 0 L1.6 -10 V-91' }
const PIN: Stroke[] = [SHAFT, { d: circle(0, -100, 9) }]

/** The pin that wears the tint: the head, the light on it, the shade under it. */
const TINTED_PIN: Stroke[] = [
  SHAFT,
  { d: circle(0, -100, 9), role: 'accent' },
  { d: 'M-5 -102 Q-4 -106 0 -107', role: 'soft' },
  { d: 'M-1.5 -92 L8 -98 M3 -92.6 L8.6 -96', role: 'ambient' },
]

/**
 * Bodoro's gi in its two parts that never change: the crossed collar about
 * the nape and the belt's square knot with its two ends. Both his drawings
 * place these same two, so the only thing the death changes is the body of
 * the robe around them.
 */
const BODORO_GI: { collar: Stroke[]; knot: Stroke[] } = {
  collar: [
    { d: 'M-24 -12 L0 18 L24 -12 M-15 -12 L0 7 L15 -12', role: 'accent' },
  ],
  knot: [
    { d: 'M-7 -5 L6 -4 L5 5 L-6 4 Z' },
    { d: 'M-4 4 L-10 22 M3 5 L10 21', role: 'soft' },
  ],
}

/**
 * Bourbon's turban in 3/4, the cloth wound on the slant round the crown,
 * one turn in tint, the pleat gathered on top and the far side hatched.
 * His death lays this same turban down.
 */
const BOURBON_TURBAN: Stroke[] = [
  { d: 'M24 142 C16 106 40 70 82 68 C124 66 146 104 136 142' },
  { d: 'M24 142 C42 162 118 162 136 142' },
  {
    d: 'M136 128 C120 110 100 94 80 80 M134 108 C120 94 106 82 94 70',
    role: 'soft',
  },
  {
    d: 'M26 126 C44 108 62 92 80 80 M32 146 C46 122 66 104 88 90',
    role: 'accent',
  },
  { d: 'M22 112 C34 96 48 84 64 74', role: 'soft' },
  { d: 'M64 72 C70 60 94 58 100 72 M80 64 L82 76', role: 'soft' },
  { d: 'M124 114 l8 -3 M128 126 l7 -3 M122 140 l9 -3', role: 'ambient' },
]

/**
 * Goz's spear on the slant, butt down to the left: the shaft with its two
 * edges and its shaded side ticked, the socket, and the leaf-shaped head in
 * tint with its rib. His death lays this same spear on the ground.
 */
const GOZ_SPEAR: Stroke[] = [
  { d: 'M34.1 174.9 L110.9 45 M37.9 177.1 L116.9 48.6' },
  { d: 'M34.1 174.9 Q33.5 180 37.9 177.1' },
  { d: 'M110.9 45 L115 38.2 L121 41.8 L116.9 48.6 Z' },
  { d: 'M112.9 41.6 L118.9 45.2', role: 'soft' },
  {
    d: 'M115 38.2 C114 31 115.5 27.5 117.4 25.6 L133.5 14.3 L131 33.8 C129.8 36.5 126 40 121 41.8',
    role: 'accent',
  },
  { d: 'M118 40 L133.5 14.3', role: 'soft' },
  {
    d: 'M44 166 l4 2.4 M58 142 l4 2.4 M72 118 l4 2.4 M86 94 l4 2.4 M100 70 l4 2.4',
    role: 'ambient',
  },
]

/**
 * The upper piece of Agon's two-piece cloak, in tint: the cape over the
 * shoulders, split down the front, with its standing collar. His death lays
 * this same cape flat.
 */
const AGON_CAPE: Stroke[] = [
  {
    d: 'M64 46 C52 50 38 58 30 72 C24 82 22 92 24 100 C40 108 62 110 78 108 M82 108 C98 110 120 108 136 100 C138 92 136 82 130 72 C122 58 108 50 96 46',
    role: 'accent',
  },
  {
    d: 'M64 46 C70 42 90 42 96 46 C90 50 70 50 64 46 Z M64 46 V40 C70 36 90 36 96 40 V46',
  },
  {
    d: 'M80 50 V108 M44 70 C46 84 46 96 44 104 M116 70 C114 84 114 96 116 104',
    role: 'soft',
  },
]

/**
 * Siper's square sunglasses from the front: the two frames in tint, the
 * bridge and the brow of each frame, and the dark lenses hatched. Her death
 * lays these same glasses down.
 */
const SIPER_LENSES: Stroke[] = [
  {
    d: 'M24 98 C24 94 26 92 30 92 L64 90 C68 90 70 92 70 96 L69 124 C69 128 67 130 63 130 L32 132 C28 132 26 130 26 126 Z M88 95 C88 91 90 89 94 89 L128 87 C132 87 134 89 134 93 L131 120 C131 124 129 126 125 126 L94 128 C90 128 88 126 88 122 Z',
    role: 'accent',
  },
  { d: 'M70 99 C76 93 82 93 88 98 M27 97 L67 95 M91 94 L131 92', role: 'soft' },
  {
    d: 'M34 112 L48 98 M34 124 L60 100 M46 127 L64 110 M98 108 L112 94 M98 120 L124 95 M110 123 L128 106',
    role: 'ambient',
  },
]

/**
 * One of Kenmi's arm braces standing on its wide end: the wrist opening
 * with its rim, the tapering sides, and a band in tint at each end. The
 * second is the same brace lying down.
 */
const KENMI_BRACE: Stroke[] = [
  { d: ellipse(60, 54, 14, 4.5) },
  { d: ellipse(60, 54, 10.5, 3), role: 'soft' },
  { d: 'M46 54 L38 142 M74 54 L82 142' },
  { d: 'M38 142 C42 151 78 151 82 142' },
  {
    d: 'M45.4 62 C50 67.5 70 67.5 74.6 62 M44.5 72 C49 78 71 78 75.5 72 M39 130 C44 137.5 76 137.5 81 130 M38.2 140 C43 147.5 77 147.5 81.8 140',
    role: 'accent',
  },
  { d: 'M68 88 l6 -3 M70 102 l6 -3 M71 116 l6 -3', role: 'ambient' },
]

/** Original objects from the Fourth Phase; references and viewing limits are in the provenance note. */
export const zevilArt = {
  // Khara's headset, its earpiece in tint and the microphone folded forward:
  // she welcomes the applicants aboard in episode 14 / chapter 23.
  'khara': [
    { d: 'M32 106 V79 C32 25 128 25 128 79 V106' },
    { d: 'M40 106 V79 C40 37 120 37 120 79 V106', role: 'soft' },
    { d: 'M32 79 H40 M120 79 H128', role: 'soft' },
    { d: 'M24 100 C18 100 18 140 24 140 H40 V100 Z', role: 'accent' },
    { d: 'M24 100 L32 94 H45 V134 L40 140 M40 100 L45 94', role: 'soft' },
    { d: 'M120 100 H134 V140 H120 Z' },
    { d: 'M134 100 L141 95 V134 L134 140 M120 100 L127 95 H141', role: 'soft' },
    { d: 'M138 110 V127 M138 133 V136', role: 'ambient' },
    { d: 'M126 140 C122 164 105 169 84 163' },
    { d: 'M81 158 H96 V168 H81 Q75 163 81 158 Z' },
    { d: 'M84 160 V166 M89 160 V166', role: 'soft' },
    shadow(80, 184, 57),
  ],
  // Four of Gittarackur's round-headed pins fanned upright, points together,
  // the way they bristle from the disguise, the one in tint lit on top and
  // shaded underneath: the applicant covered in needles at the Final Phase,
  // episode 19 / chapter 33. No face under them.
  'gittarackur': [
    ...moved(PIN, 'translate(80 176) rotate(-34)'),
    ...moved(PIN, 'translate(80 176) rotate(-14)'),
    ...moved(TINTED_PIN, 'translate(80 176) rotate(6)'),
    ...moved(PIN, 'translate(80 176) rotate(26)'),
    shadow(80, 186, 40),
  ],
  // Amori's vertically striped cap with its crown seen from above: Tonpa
  // names the three brothers one by one on his tour in episode 3; the manga
  // names them apart only in chapter 29, where the eldest confronts Killua.
  'amori': [
    {
      d: 'M30 130 C25 101 33 70 50 53 C67 36 96 34 115 54 C133 75 136 104 131 130',
    },
    { d: ellipse(80, 130, 51, 13) },
    { d: 'M29 130 V141 C44 160 116 160 131 141 V130', role: 'accent' },
    {
      d: 'M46 130 C39 105 47 65 61 48 M66 130 C61 97 68 54 76 41',
      role: 'soft',
    },
    {
      d: 'M88 130 C95 96 92 58 87 41 M110 130 C120 100 115 64 104 46',
      role: 'soft',
    },
    { d: 'M33 137 Q80 153 127 137', role: 'soft' },
    { d: 'M117 81 l7 -4 M121 95 l7 -4 M123 109 l7 -4', role: 'ambient' },
    {
      d: 'M46 143 L46 151 M66 147 V155 M89 147 V155 M111 142 V151',
      role: 'soft',
    },
    shadow(80, 179, 55),
  ],
  // Umori's brimmed cap, its projecting brim in tint: Tonpa names him on
  // his tour in episode 3; the manga names him only in chapter 29. No face
  // or lettering.
  'umori': [
    { d: 'M35 123 C32 85 41 52 72 46 C104 40 123 70 125 119' },
    { d: 'M36 110 C63 101 97 103 123 113', role: 'soft' },
    {
      d: 'M35 122 C18 128 7 140 17 147 C43 163 119 159 145 139 C152 132 136 123 125 119',
      role: 'accent',
    },
    { d: 'M17 147 C34 168 123 163 145 139', role: 'soft' },
    { d: 'M36 122 C59 133 96 135 125 119' },
    { d: 'M38 120 C63 111 99 114 122 123', role: 'soft' },
    { d: 'M76 46 C68 66 70 87 73 106', role: 'soft' },
    { d: 'M109 69 l8 -4 M114 82 l7 -4 M116 96 l7 -4', role: 'ambient' },
    { d: 'M34 147 Q78 155 116 145', role: 'soft' },
    shadow(80, 184, 61),
  ],
  // Imori's cap in 3/4, the crown's panels meeting at the button, the band in
  // tint and the visor coming forward with its edge and underside: Tonpa
  // names the youngest brother on his tour in episode 3; the manga names him
  // only in chapter 29.
  'imori': [
    { d: 'M36 126 C33 88 56 60 86 60 C116 60 134 90 130 124' },
    { d: circle(86, 62, 3.5), role: 'soft' },
    {
      d: 'M83 65 C66 78 58 104 60 136 M90 65 C104 80 110 104 110 136',
      role: 'soft',
    },
    {
      d: 'M36 126 C52 142 114 140 130 124 M35 114 C50 128 114 126 131 112 M36 126 L35 114 M130 124 L131 112',
      role: 'accent',
    },
    { d: 'M40 132 C22 144 14 162 34 170 C58 178 96 170 108 137' },
    { d: 'M17 161 C16 173 40 179 62 177', role: 'soft' },
    { d: 'M42 140 C30 150 28 160 40 164 C60 170 90 162 98 142', role: 'soft' },
    { d: 'M116 84 l7 -3 M120 97 l7 -3 M123 110 l6 -3', role: 'ambient' },
    shadow(80, 186, 54),
  ],
  // Ponzu's wide hat and its closed side flaps: episode 17 / chapter 30.
  // The bees stay out until their later revelation.
  'ponzu': [
    { d: ellipse(80, 131, 68, 18) },
    { d: 'M12 131 V136 C24 163 136 163 148 136 V131', role: 'soft' },
    { d: 'M43 129 C42 104 49 64 79 60 C108 56 119 93 117 129' },
    {
      d: 'M44 115 C61 124 98 124 116 115 L117 129 C100 140 62 140 43 129 Z',
      role: 'accent',
    },
    { d: 'M55 75 C59 66 68 63 77 64', role: 'soft' },
    { d: 'M108 87 l5 -3 M112 100 l4 -3', role: 'ambient' },
    {
      d: 'M29 130 L26 150 L43 164 L48 142 M112 142 L118 163 L135 150 L132 130',
    },
    { d: 'M29 143 L38 155 M122 155 L131 145', role: 'soft' },
    { d: 'M51 145 Q80 152 108 145', role: 'soft' },
    shadow(80, 184, 63),
  ],
  // Bourbon's turban, standing: Tonpa points him out as a snake charmer in
  // episode 3 and chapter 5. No snake and no cave: those come with his death.
  'bourbon': [...BOURBON_TURBAN, shadow(80, 188, 60)],
  // Pokkle's bow and quiver of ordinary arrows: the roll call names him at
  // the end of the Fourth Phase in episode 18, the roster of chapter 23
  // prints his name. No poisoned arrow and no later Nen arrows.
  'pokkle': [
    { d: 'M40 32 C88 62 88 128 40 168' },
    { d: 'M44 30 C95 66 95 132 44 170', role: 'soft' },
    { d: 'M40 32 L56 100 L40 168', role: 'soft' },
    { d: 'M73 93 L70 115 L75 116 L78 95 Z', role: 'accent' },
    { d: 'M72 101 l4 1 M72 106 l4 1 M71 111 l4 1', role: 'soft' },
    { d: 'M100 99 L127 109 L106 176 Q94 184 83 166 Z' },
    { d: ellipse(113, 104, 14, 6) },
    { d: 'M103 100 L109 53 M113 101 L124 44 M121 104 L139 65' },
    {
      d: 'M106 68 L102 59 L109 53 L113 63 Z M120 60 L117 49 L124 44 L128 55 Z M133 80 L132 70 L139 65 L142 76 Z',
      role: 'soft',
    },
    { d: 'M108 121 L99 161', role: 'soft' },
    { d: 'M119 127 l-6 -3 M115 141 l-6 -3 M111 155 l-6 -3', role: 'ambient' },
    shadow(80, 188, 56),
  ],
  // Bodoro's martial-artist gi standing in 3/4 as he wears it, the sleeves
  // open at the cuffs, the collar crossed in tint, the belt knotted at the
  // front and the side turning away hatched: Tonpa names the kung-fu master
  // on his tour in episode 3; the manga names him only at the Final Phase,
  // in chapter 33.
  'bodoro': [
    {
      d: 'M56 58 L38 68 L20 114 L44 122 L48 100 V166 H110 V100 L114 122 L138 114 L120 64 L104 58',
    },
    { d: 'M56 58 C68 50 92 50 104 58', role: 'soft' },
    { d: 'M20 114 C16 124 40 132 44 122 M114 122 C112 132 140 124 138 114' },
    { d: 'M110 166 L122 158 V108 L120 64' },
    { d: 'M48 120 H110 L122 114 M48 130 H110 L122 124' },
    { d: 'M80 88 L96 120 M98 130 L102 166', role: 'soft' },
    { d: 'M112 146 l8 -5 M112 158 l8 -5 M112 106 l8 -5', role: 'ambient' },
    ...moved(BODORO_GI.collar, 'translate(80 70)'),
    ...moved(BODORO_GI.knot, 'translate(76 125)'),
    shadow(84, 184, 56),
  ],
  // Goz's spear, head up, its leaf-shaped blade in tint: the spearman in the
  // roster of chapter 23. Nothing of the trees he fells in chapter 26.
  'goz': [...GOZ_SPEAR, shadow(56, 184, 36)],
  // Agon's two-piece cloak standing in 3/4 as he wears it, the cape over the
  // shoulders in tint, the long piece below split down the front and its
  // far side hatched: the cloaked applicant in the roster of chapter 23. No
  // sword: he draws it from under the cloak only in chapter 28.
  'agon': [
    ...AGON_CAPE,
    {
      d: 'M30 96 C28 122 24 148 20 170 C34 176 60 178 78 176 M82 176 C100 178 126 176 140 170 C136 148 132 122 130 96',
    },
    { d: 'M78 108 L78 176 M82 108 L82 176' },
    {
      d: 'M50 112 C48 136 46 156 44 176 M108 112 C112 136 114 156 116 176',
      role: 'soft',
    },
    {
      d: 'M122 116 l8 -4 M124 132 l8 -4 M126 148 l8 -4 M128 164 l8 -4',
      role: 'ambient',
    },
    shadow(80, 188, 60),
  ],
  // Siper's square sunglasses standing open, the arms running back: her look
  // in the roster of chapter 23. No rifle: she is called a sniper only after
  // her death, in chapter 26.
  'siper': [
    ...SIPER_LENSES,
    { d: 'M24 96 L19 93 L38 66 L44 70 M134 90 L139 87 L126 62 L120 64' },
    { d: 'M19 93 L21 99 M139 87 L138 93', role: 'soft' },
    shadow(80, 150, 56),
  ],
  // Ryu's broadsword in its scabbard, hung on the slant from the loop of his
  // belt, the crossguard in tint and the far face of the scabbard hatched:
  // the swordsman in the roster of chapter 23.
  'ryu': [
    { d: 'M69 72 V170 L80 184 L91 170 V72 Z', transform: 'rotate(24 80 110)' },
    {
      d: 'M91 72 L96 69 V168 L91 170',
      role: 'soft',
      transform: 'rotate(24 80 110)',
    },
    {
      d: 'M69 82 H91 M69 160 H91',
      role: 'soft',
      transform: 'rotate(24 80 110)',
    },
    {
      d: 'M50 64 C50 61 52 60 55 60 H105 C108 60 110 61 110 64 V68 C110 71 108 72 105 72 H55 C52 72 50 71 50 68 Z',
      role: 'accent',
      transform: 'rotate(24 80 110)',
    },
    { d: 'M75 60 V30 M85 60 V30', transform: 'rotate(24 80 110)' },
    {
      d: 'M75 52 L85 48 M75 44 L85 40 M75 36 L85 32',
      role: 'soft',
      transform: 'rotate(24 80 110)',
    },
    { d: circle(80, 24, 6.5), transform: 'rotate(24 80 110)' },
    {
      d: 'M93 96 l6 -3 M93 116 l6 -3 M93 136 l6 -3',
      role: 'ambient',
      transform: 'rotate(24 80 110)',
    },
    { d: 'M66 94 H94 V106 H66 Z', transform: 'rotate(24 80 110)' },
    {
      d: 'M66 97 C48 94 28 98 10 106 M66 103 C48 100 28 104 10 112 M94 97 C112 92 132 92 152 98 M94 103 C112 98 132 98 152 104',
      role: 'soft',
      transform: 'rotate(24 80 110)',
    },
    shadow(80, 190, 40),
  ],
  // Kyu's sheathed saber, its hilt wound in bandages in tint with a loose
  // end, and his satchel with its flap and buckle beside it: the applicant
  // in the roster of chapter 23.
  'kyu': [
    { d: 'M38 146 C70 126 108 90 146 42 M42 152 C74 132 112 96 150 47' },
    { d: 'M146 42 C150 40 152 44 150 47' },
    {
      d: 'M30 144 C34 138 42 142 44 148 C46 154 40 160 34 156 C30 154 28 148 30 144 Z',
    },
    { d: 'M34 150 L14 168 M38 154 L18 172 M14 168 Q12 173 18 172' },
    {
      d: 'M33 147 L36 158 M28 153 L31 164 M23 158 L26 169 M18 162 L21 172',
      role: 'accent',
    },
    { d: 'M16 170 C10 176 12 184 6 190', role: 'accent' },
    {
      d: 'M60 136 l3 4 M84 118 l3 4 M108 96 l3 4 M130 70 l3 4',
      role: 'ambient',
    },
    { d: 'M90 132 H138 V170 H90 Z' },
    { d: 'M90 132 L98 124 H146 L138 132 M138 170 L146 162 V124', role: 'soft' },
    {
      d: 'M90 132 V150 C90 154 94 156 98 156 H130 C134 156 138 154 138 150 V132',
    },
    { d: 'M110 152 H118 V160 H110 Z', role: 'soft' },
    { d: 'M140 140 l4 -3 M140 152 l4 -3', role: 'ambient' },
    shadow(84, 184, 60),
  ],
  // Shishito's vest standing in 3/4 as he wears it, open down the front,
  // its badge pinned at the chest in tint with no number on it, and the far
  // side hatched: the applicant in the roster of chapter 23.
  'shishito': [
    {
      d: 'M60 46 L42 54 C46 74 40 90 32 100 V160 H78 V124 L60 46 M100 46 L118 54 C114 74 120 90 128 100 V160 H82 V124 L100 46',
    },
    { d: 'M60 46 C68 42 92 42 100 46', role: 'soft' },
    { d: 'M128 100 L134 96 V156 L128 160', role: 'soft' },
    {
      d: 'M44 58 C52 68 54 80 48 92 M116 58 C108 68 106 80 112 92',
      role: 'soft',
    },
    { d: circle(58, 104, 8), role: 'accent' },
    { d: circle(58, 104, 4.5), role: 'soft' },
    { d: 'M38 146 H74 M86 146 H122', role: 'soft' },
    {
      d: 'M130 108 l4 -3 M130 122 l4 -3 M130 136 l4 -3 M130 150 l4 -3 M110 120 l8 -5 M110 134 l8 -5',
      role: 'ambient',
    },
    shadow(82, 178, 56),
  ],
  // Kenmi's two arm braces, one standing on its wide end and one lying in
  // front of it, the bands in tint: the applicant in the roster of chapter
  // 23.
  'kenmi': [
    ...KENMI_BRACE,
    ...moved(
      KENMI_BRACE,
      'translate(120 150) rotate(-90) scale(0.75) translate(-60 -98)',
    ),
    shadow(70, 172, 60),
  ],
  // Sommy's long-sleeved shirt standing in 3/4 as he wears it, the neckband
  // in tint and the dark cloth hatched on the side turning away: the
  // applicant in the roster of chapter 23. No monkey: it first shows in
  // chapter 25.
  'sommy': [
    {
      d: 'M64 42 C52 46 40 52 34 58 L16 132 L32 136 L46 86 V164 H114 V86 L128 136 L144 132 L126 58 C120 52 108 46 96 42',
    },
    {
      d: 'M64 42 C70 50 90 50 96 42 M62 40 C68 54 92 54 98 40',
      role: 'accent',
    },
    { d: 'M16 132 L14 140 L30 144 L32 136', role: 'soft' },
    { d: 'M144 132 L146 140 L130 144 L128 136', role: 'soft' },
    { d: 'M46 156 H114', role: 'soft' },
    { d: 'M62 70 C66 96 64 130 62 160', role: 'soft' },
    {
      d: 'M100 80 l10 -6 M98 96 l12 -7 M98 112 l12 -7 M98 128 l12 -7 M98 144 l12 -7 M128 84 l6 -3 M131 100 l6 -3 M134 116 l6 -3',
      role: 'ambient',
    },
    shadow(80, 178, 56),
  ],
  // Zevil Island seen from the arriving boat: two wooded hills joined by the
  // low isthmus, the canopy in rows of crowns, the cliff under the right hill
  // hatched, the landing beach in tint at the waterline: episode 14 /
  // chapter 23. No later cave scene is shown.
  'zevil-island': [
    {
      d: 'M6 148 C8 118 16 96 30 90 C34 72 52 64 62 74 C72 64 88 70 88 88 C94 98 90 116 96 124',
    },
    {
      d: 'M96 124 C100 108 108 96 118 98 C124 84 142 86 144 102 C152 110 150 124 144 132 L150 148',
    },
    {
      d: 'M16 118 C20 106 34 104 38 114 C42 102 58 102 60 114 C64 106 78 106 80 118',
      role: 'soft',
    },
    {
      d: 'M22 136 C26 128 38 126 42 134 C46 126 60 126 62 136 C66 130 78 130 82 138',
      role: 'soft',
    },
    {
      d: 'M104 120 C108 112 120 112 122 120 C126 112 138 114 140 122',
      role: 'soft',
    },
    { d: 'M140 112 l6 -6 M141 124 l6 -6 M142 136 l7 -7', role: 'ambient' },
    { d: 'M50 148 C62 141 108 141 122 148 M66 144.5 H106', role: 'accent' },
    { d: 'M4 148 H156', role: 'ambient' },
    ...SEA,
  ],
} satisfies Drawings

/**
 * The drawings that change with the story. A pin comes out of Gittarackur's
 * disguise at the final phase, Bodoro's gi is left empty when he dies, and
 * the object of each applicant who dies on Zevil Island is laid down.
 */
export const zevilRedrawn: Redrawings = {
  gittarackur: [
    // The same pins, three still fanned as they bristle from the disguise
    // and the one in tint drawn up and out of them: he takes a needle from
    // his ear and shows Killua his true appearance in episode 20 / chapter
    // 35. No face, only the pins.
    {
      episode: 20,
      chapter: 35,
      value: [
        ...moved(PIN, 'translate(80 176) rotate(-34)'),
        ...moved(PIN, 'translate(80 176) rotate(-14)'),
        ...moved(TINTED_PIN, 'translate(87 112) rotate(6)'),
        ...moved(PIN, 'translate(80 176) rotate(26)'),
        shadow(80, 186, 40),
      ],
    },
  ],
  bodoro: [
    // The same gi empty and folded square on the floor, the same collar on
    // top and the same knot on its belt laid across it, the folds layered
    // on the near face and the far face hatched: his death is reported in
    // episode 20 / chapter 36.
    {
      episode: 20,
      chapter: 36,
      value: [
        { d: 'M32 88 H128 L140 134 H20 Z M20 134 V152 H140 V134' },
        { d: 'M22 140 H96 M22 146 H96', role: 'soft' },
        {
          d: 'M106 150 l8 -14 M118 150 l8 -14 M130 150 l8 -14',
          role: 'ambient',
        },
        { d: 'M24.7 116 H135.3 M22.9 123 H137.1' },
        ...moved(BODORO_GI.collar, 'translate(80 98) scale(1 0.6)'),
        ...moved(BODORO_GI.knot, 'translate(80 119.5)'),
        shadow(80, 184, 62),
      ],
    },
  ],
  bourbon: [
    // The same turban tipped over on the cave floor, and one of his snakes
    // coiled beside it with its head raised, no eyes drawn: his body is
    // found in the cave, dead of Ponzu's bees, in episode 17 / chapter 30.
    {
      episode: 17,
      chapter: 30,
      value: [
        ...moved(
          BOURBON_TURBAN,
          'translate(58 128) rotate(-30) scale(0.66) translate(-80 -112)',
        ),
        { d: ellipse(120, 164, 26, 8) },
        { d: ellipse(120, 162, 14, 4), role: 'soft' },
        {
          d: 'M104 160 C96 142 104 126 120 120 M113 158 C106 144 110 132 122 127',
        },
        {
          d: 'M120 120 C124 112 138 110 144 114 C147 118 140 124 132 126 C128 127 124 127 122 127',
          role: 'soft',
        },
        { d: 'M4 172 H156', role: 'ambient', dashed: true },
      ],
    },
  ],
  goz: [
    // The same spear laid flat on the ground beside the stump of a tree he
    // cut through: Gittarackur's needles kill him after the fight with
    // Hisoka in chapter 26. Episode 15 tells the same death.
    {
      episode: 15,
      chapter: 26,
      source: 'chapter',
      value: [
        ...moved(
          GOZ_SPEAR,
          'translate(82 166) rotate(58.9) scale(0.8) translate(-84 -96)',
        ),
        { d: ellipse(46, 108, 20, 6) },
        { d: ellipse(46, 108, 11, 3), role: 'soft' },
        {
          d: 'M26 108 V146 C22 150 18 152 14 152 M66 108 V146 C70 150 74 152 78 152',
        },
        { d: 'M58 118 l6 -4 M58 130 l6 -4 M58 142 l6 -4', role: 'ambient' },
        { d: 'M4 152 H156', role: 'ambient', dashed: true },
      ],
    },
  ],
  agon: [
    // The same cape laid flat on the cloak in a heap on the ground, and the
    // sword he drew lying bare in front of it, its hand guard to the left:
    // Hisoka cuts him down in chapter 28. Episode 16 shows the same death.
    {
      episode: 16,
      chapter: 28,
      source: 'chapter',
      value: [
        ...moved(
          AGON_CAPE,
          'translate(84 118) scale(0.9 0.42) translate(-80 -74)',
        ),
        {
          d: 'M18 150 C26 136 44 132 60 136 M108 136 C124 132 140 138 146 150 C120 158 46 158 18 150',
        },
        {
          d: 'M30 150 C40 146 50 140 58 138 M96 153 C104 147 114 142 124 141',
          role: 'soft',
        },
        { d: 'M38 169 L152 166 L38 175' },
        { d: `${circle(11, 172, 3.5)} M15 169.5 H32 M15 174.5 H32` },
        { d: 'M34 160 L36 184' },
        { d: 'M34 163 C24 156 12 160 11 168.5', role: 'soft' },
        { d: 'M4 160 H156', role: 'ambient', dashed: true },
      ],
    },
  ],
  siper: [
    // The same sunglasses lying on the ground, folded shut and askew, with
    // no one near them: Gittarackur hands Hisoka her badge and reports
    // killing its owner, a sniper, in chapter 26. Episode 15 tells it too;
    // neither shows the body.
    {
      episode: 15,
      chapter: 26,
      source: 'chapter',
      value: [
        ...moved(
          [...SIPER_LENSES, { d: 'M30 108 L126 102', role: 'soft' }],
          'translate(80 150) rotate(-8) scale(0.85 0.55) translate(-80 -110)',
        ),
        { d: 'M4 162 H156', role: 'ambient', dashed: true },
      ],
    },
  ],
}
