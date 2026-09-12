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
} satisfies Drawings
