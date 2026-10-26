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
  // Amori's vertically striped cap with its crown seen from above:
  // the eldest brother confronts Killua in episode 17 / chapter 29.
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
  // Umori's brimmed cap, its projecting brim in tint: the brother wearing
  // badge 199 gives it up in episode 17 / chapter 29. No face or lettering.
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
  // tint and the visor coming forward with its edge and underside: the
  // youngest brother stalks Killua in episode 17 / chapter 29.
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
  // Bourbon's turban in 3/4, the cloth wound on the slant round the crown,
  // one turn in tint, the pleat gathered on top and the far side hatched:
  // his body is already dead when the name is established in episode 17 /
  // chapter 30.
  'bourbon': [
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
    shadow(80, 188, 60),
  ],
  // Pokkle's bow and quiver of ordinary arrows: the finalist's equipment
  // in episode 19 / chapter 33. No later Nen arrows.
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
  // front and the side turning away hatched: the elderly finalist in episode
  // 19 / chapter 33.
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
 * disguise at the final phase, and Bodoro's gi is left empty when he dies.
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
}
