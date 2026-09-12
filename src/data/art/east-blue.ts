import {
  circle,
  ellipse,
  dots,
  star,
  SEA,
  shadow,
  sheath,
  cup,
  BLADE,
  house,
} from './primitives'
import type { Drawings } from './stroke'

/** The drawings of the records filed in the east blue stretch of the route. */
export const eastBlueArt = {
  // Four small islands, a dotted course between them, a compass watching.
  'east-blue': [
    { d: 'M22 106 q10 -14 26 -6 q8 6 -2 14 q-14 6 -24 -8z' },
    { d: 'M84 84 q14 -10 26 0 q6 8 -6 14 q-16 4 -20 -14z' },
    { d: 'M112 124 q8 -8 20 -2 q6 6 0 12 q-14 6 -20 -10z' },
    { d: 'M54 136 q6 -8 16 -4 q6 4 0 10 q-12 4 -16 -6z' },
    {
      d: 'M34 110 C60 100 70 90 96 90 S120 110 122 128 S80 140 62 138',
      role: 'ambient',
      dashed: true,
    },
    { d: circle(128, 44, 16) },
    {
      d: 'M128 28 L131 41 L144 44 L131 47 L128 60 L125 47 L112 44 L125 41 Z',
      role: 'accent',
    },
    ...SEA,
  ],

  // A straw hat: the brim as one ellipse, the crown as one curve, the band in
  // the captain's red.
  'monkey-d-luffy': [
    { d: ellipse(80, 104, 60, 16) },
    { d: 'M50 100 C50 60 110 60 110 100' },
    { d: 'M55 93 Q80 101 105 93', role: 'accent' },
    { d: 'M56 85 Q80 93 104 85', role: 'accent' },
    shadow(80, 150, 26),
  ],

  // A mop and a wooden bucket: the deck of a ship the boy did not choose.
  koby: [
    { d: 'M104 26 L64 122' },
    { d: 'M58 118 L74 128' },
    { d: 'M58 120 C50 140 52 158 48 172', role: 'accent' },
    { d: 'M64 124 C60 144 64 160 62 174', role: 'accent' },
    { d: 'M70 128 C70 146 76 160 76 172', role: 'accent' },
    { d: 'M86 130 H142 L134 174 H94 Z' },
    { d: 'M88 146 H140 M91 160 H137', role: 'soft' },
    { d: 'M88 130 q26 -24 52 0' },
    shadow(84, 182, 44),
  ],
  // An iron club, the spikes ringing its head.
  alvida: [
    { d: 'M76 188 h12 M78 186 V116 M86 186 V116' },
    { d: 'M74 116 h16 l4 -8 h-24z' },
    { d: circle(82, 74, 30) },
    {
      d: 'M82 44 l-4 -12 l8 0z M82 104 l-4 12 l8 0z M52 74 l-12 -4 l0 8z M112 74 l12 -4 l0 8z',
      role: 'accent',
    },
    {
      d: 'M61 53 l-11 -6 l5 11z M103 53 l11 -6 l-5 11z M61 95 l-11 6 l5 -11z M103 95 l11 6 l-5 -11z',
      role: 'accent',
    },
    {
      d: dots([
        [72, 66],
        [92, 66],
        [82, 84],
      ]),
      role: 'soft',
    },
    shadow(82, 194, 26),
  ],
  // An execution scaffold: two uprights, the crossbeam, the platform.
  'gold-roger': [
    { d: 'M26 148 H134 V168 H26 Z' },
    { d: 'M46 148 V46 M114 148 V46' },
    { d: 'M34 42 H126', role: 'accent' },
    { d: 'M46 62 H114', role: 'accent' },
    { d: 'M46 62 L62 46 M114 62 L98 46' },
    { d: 'M6 178 V168 H20 V158 H34' },
    { d: 'M40 168 V178 M120 168 V178' },
    shadow(80, 186, 56),
  ],
  // Three swords in their sheaths, the middle one in green.
  'roronoa-zoro': [
    ...sheath(-22, 'soft'),
    ...sheath(0, 'accent'),
    ...sheath(22, 'soft'),
    shadow(80, 176, 40),
  ],

  // A Marine base: a crenellated tower with its pennant, and the post in the
  // yard that a pirate hunter was tied to.
  'shells-town': [
    { d: 'M56 150 V66 H104 V150' },
    { d: 'M52 66 h56 M56 66 v-8 h8 v8 M76 66 v-8 h8 v8 M96 66 v-8 h8 v8' },
    { d: 'M72 84 h16 v10 h-16z M72 106 h16 v10 h-16z' },
    { d: 'M74 150 V132 a6 6 0 0 1 12 0 V150' },
    { d: 'M80 58 V22' },
    { d: 'M80 22 l26 8 l-26 8z', role: 'accent' },
    { d: 'M12 150 V130 H48' },
    { d: 'M130 150 V96 M120 108 h20', role: 'accent' },
    { d: 'M126 118 h8 M126 124 h8' },
    { d: 'M4 150 H156', role: 'ambient' },
    ...SEA.slice(1),
  ],

  // A boot coming down on a rice ball, and the plate under it.
  helmeppo: [
    { d: 'M60 42 H110 V66' },
    { d: 'M52 66 H118 q10 0 10 12 v26 q0 14 -14 14 H52 Z' },
    { d: 'M52 96 H128', role: 'soft' },
    { d: 'M56 118 v-10 M116 118 v-12', role: 'soft' },
    {
      d: 'M56 152 C60 134 72 122 84 122 C96 122 108 136 112 152 Z',
      role: 'accent',
    },
    { d: 'M76 152 V138 h14 V152', role: 'accent' },
    { d: ellipse(80, 158, 54, 10) },
    { d: ellipse(80, 158, 40, 7), role: 'soft' },
    shadow(80, 178, 52),
  ],
  // A great axe: the haft, the crescent blade, the rivets of a steel jaw.
  morgan: [
    { d: 'M76 188 V50 M88 188 V50' },
    { d: 'M74 190 h16' },
    { d: 'M76 62 h12 M76 76 h12', role: 'soft' },
    {
      d: 'M88 42 C120 38 140 60 138 92 C122 78 106 70 88 68 Z',
      role: 'accent',
    },
    { d: 'M88 54 C106 58 122 68 132 82', role: 'accent' },
    { d: 'M76 44 C54 42 40 56 42 74 C54 64 66 58 76 56 Z' },
    { d: 'M76 36 q6 -10 12 0', role: 'soft' },
    {
      d: dots([
        [102, 58],
        [116, 68],
        [126, 82],
      ]),
    },
    shadow(82, 194, 26),
  ],
  // A sake bottle and three cups: the pledge of brothers.
  shanks: [
    { d: 'M40 152 V96 q0 -8 6 -12 V70 h16 V84 q6 4 6 12 V152z' },
    { d: 'M40 112 h28 M40 132 h28', role: 'ambient' },
    cup(84, 'accent'),
    cup(108, 'accent'),
    cup(132, 'accent'),
    shadow(96, 168, 50),
  ],

  // A windmill on a hill, a house beside it, a fence along the road.
  'foosha-village': [
    { d: 'M-4 150 C40 118 100 118 164 150' },
    { d: 'M62 140 L68 88 M92 88 L98 140 M68 88 H92' },
    { d: 'M66 88 Q80 70 94 88' },
    { d: BLADE, role: 'accent' },
    { d: BLADE, role: 'accent', transform: 'rotate(90 80 80)' },
    { d: BLADE, role: 'accent', transform: 'rotate(180 80 80)' },
    { d: BLADE, role: 'accent', transform: 'rotate(270 80 80)' },
    { d: circle(80, 80, 3), role: 'accent' },
    { d: house(110, 28, 126, 110) },
    { d: 'M14 146 V136 M26 148 V138 M38 150 V140 M14 141 L38 145' },
    ...SEA.slice(1),
  ],

  // A tavern mug with its head of foam, standing on a tray.
  makino: [
    { d: 'M54 78 L60 148 H100 L106 78 Z' },
    { d: 'M56 98 H104 M58 124 H102', role: 'soft' },
    { d: 'M106 90 C128 96 128 132 106 138' },
    { d: 'M52 78 q6 -14 18 -6 q8 -14 20 -4 q10 -10 16 10 Z', role: 'accent' },
    { d: ellipse(80, 158, 56, 11) },
    { d: ellipse(80, 158, 44, 8), role: 'soft' },
    shadow(80, 178, 54),
  ],
  // A long rifle laid across a table.
  'benn-beckman': [
    { d: 'M60 104 L146 86 M60 112 L146 94', role: 'accent' },
    { d: 'M144 84 L148 96' },
    { d: 'M40 106 L62 101 L64 115 L42 120 Z' },
    { d: 'M50 120 q8 14 18 6' },
    { d: 'M14 128 C6 122 8 112 18 110 L42 105 L46 121 L22 130 Z' },
    { d: 'M8 152 H152' },
    { d: 'M22 152 V184 M138 152 V184' },
    shadow(78, 146, 52),
  ],
  // A joint of meat, the bone knuckled at both ends.
  'lucky-roux': [
    {
      d: 'M40 132 C36 100 58 72 92 70 C120 70 132 92 126 116 C120 140 92 152 66 146 C50 142 42 138 40 132z',
      role: 'accent',
    },
    { d: 'M126 116 L146 104 M132 128 L150 122' },
    { d: `${circle(148, 100, 6)} ${circle(152, 124, 6)}` },
    { d: 'M62 96 q14 -10 30 -2', role: 'soft' },
    { d: 'M56 118 q10 12 26 12', role: 'soft', dashed: true },
    shadow(88, 170, 44),
  ],
  // A flintlock pistol and the coin its shot went through.
  yasopp: [
    { d: 'M30 96 H118 V108 H30 Z' },
    { d: 'M52 92 H84 L88 112 H50 Z' },
    { d: 'M50 110 C44 128 40 142 32 156 L52 160 C62 142 66 124 68 112 Z' },
    { d: 'M62 112 q10 14 22 6' },
    { d: 'M84 92 C84 80 96 76 100 86' },
    { d: `${circle(116, 44, 20)} ${circle(116, 44, 13)}`, role: 'accent' },
    { d: circle(116, 44, 4), role: 'accent' },
    { d: 'M122 94 C130 80 130 68 124 60', role: 'ambient', dashed: true },
    shadow(58, 170, 34),
  ],
  // A bandit's sabre and a sack with the coins running out of it.
  higuma: [
    { d: 'M126 30 C108 56 84 84 62 108' },
    { d: 'M136 40 C118 66 94 94 72 118' },
    { d: 'M126 30 L136 40' },
    { d: 'M62 108 L72 118 L60 130 L50 120 Z' },
    { d: 'M50 120 L32 140 M28 136 L38 146', role: 'soft' },
    {
      d: 'M46 188 C28 184 26 164 38 148 C46 138 56 134 64 132 L92 138 C104 148 110 168 102 182 C96 190 62 192 46 188 Z',
    },
    { d: 'M64 132 q14 -6 28 6', role: 'soft' },
    {
      d: `${circle(110, 126, 7)} ${circle(126, 140, 7)} ${circle(118, 156, 7)}`,
      role: 'accent',
    },
    shadow(74, 192, 44),
  ],
  // A cannonball with its fuse lit.
  buggy: [
    { d: circle(76, 118, 34), role: 'accent' },
    { d: 'M56 104 q6 -14 20 -18', role: 'ambient' },
    { d: 'M100 92 C106 72 116 66 130 66' },
    {
      d: 'M136 52 v-8 M136 76 v8 M124 64 h-8 M148 64 h8 M128 56 l-6 -6 M144 56 l6 -6 M128 72 l-6 6 M144 72 l6 6',
      role: 'accent',
    },
    shadow(76, 168, 30),
  ],

  // Three mandarins on a branch, the fruit in orange.
  nami: [
    { d: 'M34 154 C40 120 70 96 122 70' },
    { d: 'M64 112 q-2 -16 14 -18 q-4 14 -14 18z' },
    { d: 'M100 86 q14 -10 22 2 q-12 6 -22 -2z' },
    { d: circle(56, 126, 13), role: 'accent' },
    { d: circle(90, 106, 13), role: 'accent' },
    { d: circle(120, 90, 13), role: 'accent' },
    {
      d: dots([
        [56, 118],
        [90, 98],
        [120, 82],
      ]),
      role: 'accent',
    },
  ],

  // A row of house fronts, one roof already broken by a cannonball, and the
  // pirates' big top rising behind them.
  'orange-town': [
    { d: 'M80 40 L26 118 H134z', role: 'accent' },
    { d: 'M80 40 V26 l12 4 l-12 4', role: 'accent' },
    { d: 'M62 66 L50 118 M80 40 V118 M98 66 L110 118', role: 'ambient' },
    { d: house(18, 28, 112, 96) },
    { d: 'M58 150 V118 h28 V150 M54 118 L64 108 L70 114 L78 102 L90 118' },
    { d: house(100, 32, 110, 92) },
    { d: 'M26 126 h10 v10 h-10z M108 122 h8 v8 h-8z M120 122 h8 v8 h-8z' },
    { d: circle(76, 145, 5) },
    { d: 'M4 150 H156', role: 'ambient' },
    ...SEA.slice(2),
  ],

  // A tamer's whip, the lash still travelling.
  mohji: [
    { d: 'M22 32 L48 54 M16 40 L42 62' },
    { d: 'M16 40 L22 32 M42 62 L48 54' },
    { d: 'M22 42 l8 6 M28 50 l8 6', role: 'soft' },
    {
      d: 'M45 58 C80 88 40 110 44 134 C48 158 96 160 120 138 C140 120 132 96 116 96',
      role: 'accent',
    },
    { d: 'M116 96 c-10 0 -14 8 -8 12', role: 'accent' },
    shadow(88, 176, 44),
  ],
  // A unicycle and a sabre: the whole act in two objects.
  cabaji: [
    { d: circle(66, 134, 38), role: 'accent' },
    { d: circle(66, 134, 5), role: 'accent' },
    { d: 'M40 120 L92 148 M40 148 L92 120 M66 96 V172', role: 'soft' },
    { d: 'M62 130 L60 74 M72 130 L74 74' },
    { d: 'M52 74 H84 q8 0 6 -8 H54 q-8 2 -2 8 Z' },
    { d: 'M46 134 h-12 M86 134 h12' },
    { d: 'M112 184 C130 146 142 100 146 46' },
    { d: 'M102 180 C120 142 132 98 136 44' },
    { d: 'M136 44 C140 40 144 42 146 46' },
    { d: 'M100 178 L116 186' },
  ],
  // A slingshot, the band drawn taut around a star-shaped pellet.
  usopp: [
    { d: 'M80 176 V126' },
    { d: 'M80 126 C78 100 62 92 56 70' },
    { d: 'M80 126 C82 100 98 92 104 70' },
    { d: 'M52 68 l8 4 M108 68 l-8 4' },
    { d: 'M74 150 h12 M74 158 h12 M74 166 h12', role: 'ambient' },
    { d: 'M56 70 Q80 116 104 70', role: 'accent' },
    { d: star(80, 98, 9, 4), role: 'accent' },
  ],

  // A mansion on a hill, its gate at the foot, a path down to the shore.
  'syrup-village': [
    { d: 'M-4 156 C50 112 110 112 164 156' },
    { d: 'M50 116 V80 H110 V116 M46 80 L80 60 L114 80' },
    {
      d: 'M34 116 V92 H50 M110 92 H126 V116 M30 92 L42 82 L54 92 M106 92 L118 82 L130 92',
    },
    { d: 'M60 90 h10 v12 h-10z M90 90 h10 v12 h-10z M76 116 V100 h8 V116' },
    { d: 'M96 68 V56 h8 V72' },
    { d: 'M62 150 V128 M98 150 V128 M62 128 Q80 112 98 128', role: 'accent' },
    { d: 'M70 150 V132 M80 150 V126 M90 150 V132', role: 'accent' },
    { d: 'M80 150 q-16 12 -40 14', role: 'ambient', dashed: true },
    ...SEA.slice(2),
  ],

  // A mansion window, and the glass of medicine left on the sill.
  kaya: [
    { d: 'M36 152 V76 C36 44 124 44 124 76 V152' },
    { d: 'M80 152 V46', role: 'soft' },
    { d: 'M36 104 H124', role: 'soft' },
    { d: 'M24 152 H136 V164 H24 Z' },
    { d: 'M48 52 C58 84 48 118 56 150', role: 'soft' },
    { d: 'M88 116 L92 152 H106 L110 116 Z', role: 'accent' },
    { d: 'M89 130 H109', role: 'accent' },
    shadow(80, 172, 56),
  ],
  // A glove with five blades where the fingers should be.
  kuro: [
    { d: 'M62 112 L22 36 L32 32 L70 108 Z', role: 'accent' },
    { d: 'M76 106 L52 20 L62 18 L84 104 Z', role: 'accent' },
    { d: 'M90 104 L86 14 L96 14 L98 104 Z', role: 'accent' },
    { d: 'M102 106 L120 20 L130 24 L110 108 Z' },
    { d: 'M112 112 L142 42 L150 48 L120 116 Z' },
    {
      d: 'M52 152 C44 132 50 116 64 112 L108 110 C122 112 126 128 120 146 C114 160 60 166 52 152 Z',
    },
    { d: 'M58 154 q24 10 58 0', role: 'soft' },
    shadow(84, 174, 40),
  ],
  // A hypnotist's ring on its string, and the heart-shaped glasses below.
  jango: [
    { d: 'M80 14 C86 40 74 60 80 82', role: 'soft' },
    { d: circle(80, 100, 18), role: 'accent' },
    { d: circle(80, 100, 12), role: 'accent' },
    {
      d: 'M46 168 C30 156 28 142 36 136 C42 132 46 138 46 142 C46 138 50 132 56 136 C64 142 62 156 46 168 Z',
    },
    {
      d: 'M114 168 C98 156 96 142 104 136 C110 132 114 138 114 142 C114 138 118 132 124 136 C132 142 130 156 114 168 Z',
    },
    { d: 'M62 146 H98' },
    { d: 'M30 142 L14 134 M130 142 L146 134' },
    shadow(80, 182, 50),
  ],
  // A teacup on a silver tray, the bow tie laid beside it.
  merry: [
    { d: 'M62 62 L66 90 h24 L94 62 Z', role: 'accent' },
    { d: 'M58 62 h40', role: 'accent' },
    { d: 'M94 66 q18 2 16 13 q-2 9 -16 9', role: 'accent' },
    { d: ellipse(80, 104, 62, 16) },
    { d: ellipse(80, 104, 48, 11), role: 'soft' },
    { d: 'M46 144 L74 136 L74 170 Z' },
    { d: 'M114 144 L86 136 L86 170 Z' },
    { d: 'M74 146 h12 v14 h-12 Z' },
    shadow(80, 182, 50),
  ],
  // The ship: hull, deck, one mast, one sail, and the ram's head at the prow.
  'going-merry': [
    { d: 'M22 122 L32 154 Q80 172 128 154 L138 122' },
    { d: 'M22 122 H138' },
    { d: 'M36 140 Q80 154 124 140', role: 'ambient' },
    { d: 'M80 122 V40' },
    { d: 'M52 52 H108' },
    { d: 'M80 40 l16 6 l-16 6' },
    { d: 'M54 54 Q80 46 106 54 L110 104 Q80 114 50 104 Z', role: 'accent' },
    {
      d: 'M22 122 C10 120 6 108 10 98 C14 90 24 92 26 100 C28 106 22 110 20 106',
    },
    { d: 'M10 98 q-8 -4 -4 -12' },
    ...SEA.slice(1),
  ],

  // A treasure chest with a shrub growing out of the lid.
  gaimon: [
    { d: 'M26 178 H134 V112 H26 Z' },
    { d: 'M26 112 C26 80 134 80 134 112' },
    { d: 'M68 112 H92 V134 H68 Z' },
    { d: circle(80, 123, 4) },
    { d: 'M34 178 V112 M126 178 V112', role: 'soft' },
    { d: 'M80 84 C76 68 84 56 80 42', role: 'accent' },
    { d: 'M80 64 C70 58 62 46 66 36 C76 40 80 52 80 60', role: 'accent' },
    { d: 'M80 58 C90 52 98 40 94 30 C84 34 78 48 80 56', role: 'accent' },
    shadow(80, 186, 56),
  ],
  // A wooden practice sword and a katana, crossed.
  kuina: [
    { d: 'M26 170 L120 44 M32 175 L126 49' },
    { d: 'M26 170 L32 175 M120 44 L126 49' },
    { d: 'M36 46 L112 147 M42 41 L118 142' },
    { d: 'M36 46 L42 41' },
    { d: 'M103 153 L127 135', role: 'accent' },
    {
      d: 'M112 147 L142 187 M118 142 L148 182 M142 187 L148 182',
      role: 'accent',
    },
    shadow(84, 192, 48),
  ],
  // A bundle of wanted posters, roped crosswise.
  johnny: [
    { d: 'M44 48 H136 V132' },
    { d: 'M36 56 H128 V140' },
    { d: 'M26 64 H120 V150 H26 Z' },
    { d: 'M34 78 h50 M34 92 h38', role: 'soft' },
    { d: 'M34 130 h78', role: 'soft' },
    { d: 'M16 106 C48 96 102 96 138 106', role: 'accent' },
    { d: 'M72 40 C64 74 64 124 72 160', role: 'accent' },
    { d: 'M66 100 q10 -8 16 2 q-8 10 -16 -2 Z', role: 'accent' },
    shadow(76, 166, 54),
  ],
  // A crate of limes with one cut open on the top.
  yosaku: [
    { d: 'M30 118 H130 V176 H30 Z' },
    { d: 'M30 136 H130 M30 156 H130', role: 'soft' },
    { d: 'M44 118 V176 M116 118 V176', role: 'soft' },
    { d: circle(52, 104, 15) },
    { d: circle(108, 104, 15) },
    { d: circle(76, 78, 18), role: 'accent' },
    {
      d: 'M76 78 L76 60 M76 78 L89 65 M76 78 L94 78 M76 78 L89 91 M76 78 L76 96 M76 78 L63 91 M76 78 L58 78 M76 78 L63 65',
      role: 'accent',
    },
    shadow(80, 184, 56),
  ],
  // A chef's knife with a flame off its point.
  sanji: [
    { d: 'M28 170 L54 144 M38 178 L64 152' },
    { d: 'M54 144 L64 152' },
    { d: 'M54 144 L122 76' },
    { d: 'M64 152 C90 140 116 110 130 70' },
    { d: 'M122 76 L130 70' },
    {
      d: 'M108 66 c-14 -16 2 -30 6 -44 c2 12 12 16 12 30 c0 10 -8 16 -18 14z',
      role: 'accent',
    },
    { d: 'M112 58 c-4 -8 2 -12 4 -18 c2 8 6 10 4 18', role: 'accent' },
  ],

  // A restaurant that is also a ship: a hull with portholes, the dining
  // deck and its chimney, and a fish's head for a prow.
  baratie: [
    { d: 'M14 126 Q80 122 146 126 L136 154 H24z' },
    { d: `${circle(60, 140, 3)} ${circle(80, 140, 3)} ${circle(100, 140, 3)}` },
    { d: 'M50 126 V96 H120 V126 M46 96 H124' },
    { d: 'M58 104 h10 v10 h-10z M76 104 h10 v10 h-10z M94 104 h10 v10 h-10z' },
    { d: 'M104 96 V78 h8 V96' },
    { d: 'M108 74 q-6 -8 0 -16 q6 -8 0 -16', role: 'ambient', dashed: true },
    { d: 'M40 126 C10 126 -2 104 10 88 C20 76 40 78 46 90', role: 'accent' },
    { d: circle(26, 94, 3), role: 'accent' },
    { d: 'M10 100 L28 104 M12 106 l4 4 l4 -4 l4 4 l4 -4', role: 'accent' },
    {
      d: 'M144 126 l14 -16 l-2 16 l2 16z M76 96 L86 78 L96 96',
      role: 'accent',
    },
    ...SEA,
  ],

  // A chef's hat, the band braided.
  zeff: [
    { d: 'M44 122 H116 V156 H44 Z' },
    {
      d: 'M44 122 C28 112 28 86 44 78 C38 58 60 44 76 54 C90 38 114 44 116 64 C134 70 134 100 116 106 C120 114 118 120 116 122',
    },
    {
      d: 'M66 76 C62 92 64 108 66 122 M94 72 C92 90 94 108 94 122',
      role: 'soft',
    },
    { d: 'M48 130 l11 9 l11 -9 l11 9 l11 -9 l11 9 l9 -7', role: 'accent' },
    { d: 'M48 148 l11 -9 l11 9 l11 -9 l11 9 l11 -9 l9 7', role: 'accent' },
    { d: 'M44 156 H116', role: 'soft' },
    shadow(80, 168, 44),
  ],
  // Two tonfa, each with an iron ball hung at the end.
  gin: [
    { d: 'M32 38 H46 V134 H32 Z' },
    { d: 'M46 60 H72 V76 H46' },
    { d: 'M114 38 H128 V134 H114 Z' },
    { d: 'M114 60 H88 V76 H114' },
    { d: 'M36 134 h6 v6 h-6 Z M118 134 h6 v6 h-6 Z', role: 'soft' },
    { d: circle(39, 160, 20), role: 'accent' },
    { d: circle(121, 160, 20), role: 'accent' },
    shadow(80, 188, 52),
  ],
  // A steel spear and the shoulder plate of a gilded suit.
  'don-krieg': [
    { d: 'M102 192 V80 M114 192 V80' },
    {
      d: 'M102 80 C88 64 94 40 108 18 C122 40 128 64 114 80 Z',
      role: 'accent',
    },
    { d: 'M108 72 V30', role: 'accent' },
    { d: 'M98 86 H118 M100 96 H116' },
    { d: 'M18 172 C12 126 46 96 86 104 L82 128 C54 124 34 144 40 172 Z' },
    { d: 'M28 170 C26 136 50 116 80 120', role: 'soft' },
    {
      d: dots([
        [40, 152],
        [54, 136],
        [72, 128],
      ]),
    },
    { d: 'M14 180 H88', role: 'ambient', dashed: true },
  ],
  // A round iron shield, cracked across.
  pearl: [
    { d: circle(80, 104, 56) },
    { d: circle(80, 104, 44), role: 'soft' },
    { d: circle(80, 104, 10) },
    {
      d: dots([
        [80, 56],
        [117, 80],
        [117, 128],
        [80, 152],
        [43, 128],
        [43, 80],
      ]),
    },
    { d: 'M50 68 L72 94 L58 112 L86 134 L76 154', role: 'accent' },
    { d: 'M72 94 L98 84 M86 134 L114 130', role: 'accent' },
    shadow(80, 172, 48),
  ],
  // A great sword with a cross for a hilt.
  'dracule-mihawk': [
    { d: 'M73 44 L73 136 M87 44 L87 136', role: 'accent' },
    { d: 'M73 44 L80 26 L87 44', role: 'accent' },
    { d: 'M80 44 V136', role: 'ambient' },
    { d: 'M40 140 H120 M40 140 q-10 0 -8 10 M120 140 q10 0 8 10' },
    { d: 'M74 140 V172 M86 140 V172' },
    { d: 'M74 148 l12 4 M74 156 l12 4 M74 164 l12 4', role: 'ambient' },
    { d: circle(80, 180, 6) },
  ],

  // A saw-toothed sword, laid over on the diagonal.
  arlong: [
    { d: 'M80 20 L64 48 V150', transform: 'rotate(-28 80 106)' },
    { d: 'M80 20 L94 48', transform: 'rotate(-28 80 106)' },
    {
      d: 'M94 48 l10 8.5 l-10 8.5 l10 8.5 l-10 8.5 l10 8.5 l-10 8.5 l10 8.5 l-10 8.5 l10 8.5 l-10 8.5 l10 8.5 l-10 8.5',
      role: 'accent',
      transform: 'rotate(-28 80 106)',
    },
    { d: 'M54 150 H106 V162 H54 Z', transform: 'rotate(-28 80 106)' },
    {
      d: 'M66 162 V188 H94 V162 M62 188 H98',
      transform: 'rotate(-28 80 106)',
    },
    {
      d: 'M66 170 H94 M66 178 H94',
      role: 'soft',
      transform: 'rotate(-28 80 106)',
    },
  ],
  // Six swords fanned out in a ring, one for each arm.
  hatchan: [
    { d: 'M84 84 L80 44 L76 84 Z' },
    { d: 'M101.1 98.5 L133.7 75 L97.1 91.5 Z' },
    { d: 'M97.1 120.5 L133.7 137 L101.1 113.5 Z' },
    { d: 'M76 128 L80 168 L84 128 Z' },
    { d: 'M58.9 113.5 L26.3 137 L62.9 120.5 Z' },
    { d: 'M62.9 91.5 L26.3 75 L58.9 98.5 Z' },
    { d: circle(80, 106, 20), role: 'accent' },
    { d: circle(80, 106, 10), role: 'soft' },
  ],
  // A black belt, tied, the two ends hanging.
  kuroobi: [
    {
      d: 'M16 86 C44 72 62 74 68 86 L68 114 C58 100 38 100 16 110 Z',
    },
    {
      d: 'M144 86 C116 72 98 74 92 86 L92 114 C102 100 122 100 144 110 Z',
    },
    { d: 'M22 96 C44 86 58 88 66 96', role: 'soft' },
    { d: 'M68 84 H92 V116 H68 Z', role: 'accent' },
    { d: 'M72 90 C78 98 82 98 88 90', role: 'accent' },
    { d: 'M68 116 C62 142 58 164 52 186 L66 190 C72 166 76 142 78 116 Z' },
    { d: 'M92 116 C98 142 102 164 108 186 L94 190 C88 166 84 142 82 116 Z' },
  ],
  // A jug with a jet of water already out of it.
  chew: [
    {
      d: 'M46 110 C38 130 40 160 54 170 C68 180 98 178 108 166 C120 152 118 128 110 108 Z',
    },
    { d: 'M60 108 L64 82 H96 L102 108' },
    { d: 'M58 80 H100' },
    { d: 'M102 88 C124 90 126 116 106 122' },
    { d: 'M50 132 C64 126 92 126 106 132', role: 'soft' },
    { d: 'M96 76 C118 54 140 58 146 80', role: 'accent' },
    { d: 'M88 68 C112 42 142 48 150 78', role: 'accent' },
    {
      d: dots([
        [142, 92],
        [150, 96],
      ]),
      role: 'accent',
    },
    shadow(80, 184, 42),
  ],
  // A watering can standing among the mandarin trees.
  nojiko: [
    { d: 'M22 176 V144' },
    { d: circle(22, 124, 20) },
    {
      d: dots([
        [14, 118],
        [28, 130],
        [22, 110],
      ]),
    },
    { d: 'M134 176 V152' },
    { d: circle(134, 134, 16) },
    {
      d: dots([
        [128, 128],
        [140, 140],
      ]),
    },
    { d: 'M50 122 H100 L94 172 H56 Z' },
    { d: 'M56 122 V112 H94 V122' },
    { d: 'M62 112 C66 98 86 98 90 112' },
    { d: 'M100 130 L128 104 L136 112 L104 142 Z', role: 'accent' },
    { d: 'M126 102 C134 94 144 98 140 108', role: 'accent' },
    { d: 'M4 176 H156', role: 'ambient' },
  ],
  // A pinwheel turning on the brim of a cap.
  genzo: [
    { d: 'M40 146 C36 110 58 88 82 88 C108 88 126 110 122 146 Z' },
    { d: 'M36 146 H126 V158 H36 Z' },
    { d: 'M126 150 C146 150 152 158 150 164 H126' },
    { d: 'M82 60 V90', role: 'soft' },
    {
      d: 'M82 58 L82 30 L100 40 Z M82 58 L110 58 L100 76 Z M82 58 L82 86 L64 76 Z M82 58 L54 58 L64 40 Z',
      role: 'accent',
    },
    { d: circle(82, 58, 3), role: 'accent' },
    shadow(84, 176, 50),
  ],
  // A Marine coat hung out on a mandarin branch.
  'bell-mere': [
    { d: 'M10 52 C50 40 110 44 150 38' },
    {
      d: 'M40 50 q6 -12 16 -8 q-4 12 -16 8z M118 44 q10 -10 18 -2 q-10 8 -18 2z',
    },
    { d: circle(56, 66, 11), role: 'accent' },
    { d: circle(124, 60, 11), role: 'accent' },
    { d: 'M80 46 V60' },
    { d: 'M56 76 L80 60 L104 76' },
    { d: 'M56 76 C44 100 40 134 44 170 H116 C120 134 116 100 104 76' },
    { d: 'M80 66 V170', role: 'soft' },
    {
      d: 'M48 100 C40 120 38 142 40 162 M112 100 C120 120 122 142 120 162',
      role: 'soft',
    },
    shadow(80, 180, 46),
  ],
  // A purse tipped over, the coins running out of the mouth.
  nezumi: [
    {
      d: 'M34 106 C16 126 20 158 44 170 C70 182 100 168 102 142 C104 120 92 104 72 98 Z',
    },
    { d: 'M72 98 C84 88 98 88 104 96', role: 'soft' },
    { d: 'M66 92 C82 78 104 78 112 90' },
    { d: 'M66 92 C58 84 58 74 66 70 M112 90 C120 82 120 72 112 68' },
    {
      d: `${circle(118, 110, 13)} ${circle(136, 134, 13)} ${circle(122, 160, 13)}`,
      role: 'accent',
    },
    {
      d: dots([
        [118, 110],
        [136, 134],
        [122, 160],
      ]),
      role: 'accent',
    },
    shadow(70, 186, 48),
  ],
  // A jitte, and the smoke that goes with its owner.
  smoker: [
    { d: 'M52 174 L112 46' },
    { d: 'M112 46 l4 -8' },
    { d: 'M100 72 l18 6' },
    { d: 'M60 160 l8 4 M66 148 l8 4 M72 136 l8 4', role: 'ambient' },
    { d: 'M36 120 C20 106 38 96 30 82 C22 68 44 60 36 44', role: 'accent' },
    { d: 'M52 112 C44 100 58 92 52 78 C46 66 62 58 56 46', role: 'accent' },
    shadow(84, 182, 30),
  ],
  // A pair of glasses left resting on a sheathed katana.
  tashigi: [
    { d: 'M14 140 L146 110 M16 151 L148 121' },
    { d: 'M14 140 L16 151' },
    { d: 'M146 110 C153 112 153 119 148 121' },
    { d: 'M47.7 122.6 L54.3 152' },
    { d: 'M28 138 l2 11 M38 136 l2 11', role: 'soft' },
    { d: ellipse(82, 94, 18, 13), role: 'accent' },
    { d: ellipse(122, 86, 18, 13), role: 'accent' },
    {
      d: 'M100 91 L104 87 M64 96 C52 100 44 106 42 114 M140 88 C147 94 149 102 147 110',
    },
    shadow(80, 172, 56),
  ],
  // A hooded cloak blown open, the hood empty.
  'monkey-d-dragon': [
    {
      d: 'M54 62 C54 34 106 34 106 62 C106 78 98 88 90 90 L70 90 C62 88 54 78 54 62 Z',
    },
    { d: 'M64 80 C72 92 88 92 96 80', role: 'accent' },
    { d: 'M70 90 C50 104 30 132 12 166' },
    { d: 'M90 90 C104 106 114 134 118 164' },
    { d: 'M12 166 C34 180 66 184 92 176 C104 172 114 170 118 164' },
    { d: 'M78 92 C70 118 62 144 52 172', role: 'soft' },
    { d: 'M96 100 C104 124 110 146 112 166', role: 'soft' },
    {
      d: 'M126 46 C140 52 146 62 142 72 M130 86 C144 92 150 102 146 112',
      role: 'ambient',
      dashed: true,
    },
    shadow(70, 186, 54),
  ],
} satisfies Drawings
