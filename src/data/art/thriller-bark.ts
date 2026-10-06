import { circle, dots, ellipse, ghost, SEA, shadow } from '~/lib/svg/primitives'

import type { Drawings, Redrawings, Stroke } from './stroke'

/** The barrel tipped as the waves lift it. */
const BARREL_BOB = 'rotate(-10 80 110)'

/**
 * Brook's violin standing in 3/4, the rib on its far side hatched. The 517
 * drawing keeps it and lays the guitar across it.
 */
const BROOK_VIOLIN: Stroke[] = [
  {
    d: 'M78 64 C60 64 52 74 56 90 C60 96 62 100 58 106 C48 116 48 140 62 148 C70 153 86 153 94 148 C108 140 108 116 98 106 C94 100 96 96 100 90 C104 74 96 64 78 64 Z',
  },
  {
    d: 'M83 65 C101 65 109 75 105 91 C101 97 99 101 103 107 C113 117 113 141 99 149 C95 151.4 90 153 86 153.6',
  },
  {
    d: 'M101 76 l5 -1.5 M104.5 116 l5 -1.5 M105.5 128 l5 -1.5 M103 140 l5 -1.5',
    role: 'ambient',
  },
  { d: 'M74 64 V30 M82 64 V30' },
  { d: 'M74 30 C72 20 78 16 82 20 C86 24 80 28 78 24' },
  { d: 'M74 36 h-6 M82 36 h6 M74 44 h-6 M82 44 h6' },
  { d: 'M76.5 40 V136 M79.5 40 V136', role: 'ambient' },
  { d: 'M70 122 h16', role: 'soft' },
  { d: 'M74 136 L72 147 H84 L82 136 Z', role: 'soft' },
  { d: 'M66 104 q-5 10 3 20 M90 104 q5 10 -3 20', role: 'accent' },
]

/** The plate flying off the top of the stack. */
const PLATE_FALL = 'rotate(-30 118 76)'

/** One of Cerberus's heads in profile, drawn about its middle, with no eye. */
const DOG_HEAD =
  'M-14 6 C-16 -6 -8 -13 2 -12 L24 -4 C28 -2 28 4 24 6 L6 9 C0 13 -10 13 -14 6 Z'
const DOG_EARS = 'M-8 -10 L-6 -24 L2 -12'
/** The fox's ears, taller and both showing. */
const FOX_EARS = 'M-10 -9 L-8 -30 L0 -12 M-2 -12 L6 -28 L6 -11'
/** The spiked collar, drawn round a neck at the origin. */
const SPIKED_COLLAR = `${ellipse(0, 0, 4, 10)} M-2 -9 l-3 -6 M2 -9 l3 -6 M2 9 l3 6`

/** One of Jigoro's sabres, hilt at the origin, and its knuckle guard. */
const SABRE_BLADE = 'M0 0 C-4 -36 0 -72 18 -100 C12 -70 8 -36 8 0 Z'
const SABRE_GUARD = 'M-6 0 H14 M4 0 V22 M14 0 C22 8 18 20 4 22'

/** The drawings of the records filed in the thriller bark stretch of the route. */
export const thrillerBarkArt = {
  // The barrel the crew fishes out of the sea at 337, lid still on, bobbing
  // in the waves with bands of fog around it. The hoops take the colour. The
  // hull is drawn from 343, in `thrillerBarkRedrawn`.
  'thriller-bark-arc': [
    { d: ellipse(80, 64, 26, 8), transform: BARREL_BOB },
    { d: 'M64 62 h32 M70 58 h20', role: 'soft', transform: BARREL_BOB },
    {
      d: 'M54 64 C46 88 46 118 54 140 M106 64 C114 88 114 118 106 140',
      transform: BARREL_BOB,
    },
    {
      d: 'M51 82 Q80 94 109 82 M50 126 Q80 138 110 126',
      role: 'accent',
      transform: BARREL_BOB,
    },
    {
      d: 'M68 72 C65 98 65 120 67 144 M92 72 C95 98 95 120 93 144',
      role: 'soft',
      transform: BARREL_BOB,
    },
    {
      d: 'M104 94 l7 -3 M105 104 l7 -3 M105 114 l7 -3 M105 124 l7 -3',
      role: 'ambient',
      transform: BARREL_BOB,
    },
    { d: 'M44 146 q12 -7 24 0 t24 0 t24 0 t24 0' },
    {
      d: 'M-4 152 q10 -6 20 0 t20 0 M124 152 q10 -6 20 0 t20 0',
      role: 'ambient',
    },
    {
      d: 'M-4 30 H44 M70 20 H164 M-4 92 H28 M134 84 H164 M-4 118 H22 M140 120 H164',
      role: 'ambient',
      dashed: true,
    },
    ...SEA.slice(1),
  ],

  // A ship with torn sails drifting through bands of fog.
  'florian-triangle': [
    { d: 'M30 120 L42 146 H118 L132 116 L118 128 H44 Z' },
    { d: 'M60 128 V40 M98 128 V52' },
    {
      d: 'M44 48 H76 L74 70 l-6 -6 l-5 8 l-5 -6 l-6 8 l-4 -6 L46 72 Z M82 60 H114 L112 84 l-6 -5 l-5 7 l-6 -6 l-5 7 l-5 -5 L84 86 Z',
      role: 'accent',
    },
    { d: 'M48 88 H74 L72 104 l-6 -4 l-6 6 l-5 -5 L50 106 Z', role: 'accent' },
    { d: 'M60 40 L36 126 M98 52 L126 124 M60 40 L98 52', role: 'soft' },
    { d: 'M56 36 h8 M94 48 h8', role: 'soft' },
    {
      d: 'M-4 30 H40 M58 22 H164 M-4 112 H22 M136 104 H164',
      role: 'ambient',
      dashed: true,
    },
    {
      d: 'M-4 150 H30 M130 150 H164 M-4 138 H26',
      role: 'ambient',
      dashed: true,
    },
    ...SEA.slice(1),
  ],

  // His violin in 3/4, the rib showing on the far side and hatched, the bow
  // laid across it; the f-holes take the colour. He plays it from 338. The
  // Soul King's guitar is drawn from 517, in `thrillerBarkRedrawn`, over the
  // same violin.
  'brook': [
    ...BROOK_VIOLIN,
    { d: 'M26 176 L134 44' },
    { d: 'M30 180 L138 48', role: 'ambient' },
    { d: 'M28 178 l4 4 M134 44 l4 4', role: 'soft' },
    shadow(84, 166, 32),
  ],

  // An umbrella, and two small ghosts drifting beside it.
  'perona': [
    { d: 'M28 104 Q80 44 132 104' },
    { d: 'M28 104 q13 -12 26 0 t26 0 t26 0 t26 0' },
    { d: 'M80 52 L54 100 M80 52 L106 100', role: 'ambient' },
    { d: 'M80 104 V166 q0 12 -12 12 q-8 0 -8 -8' },
    { d: 'M80 52 v-10' },
    ...ghost(28, 158, 'accent'),
    ...ghost(102, 134, 'accent'),
  ],

  // The bridal veil under its crown of flowers, folds falling to a wavy hem,
  // and the two warthog's tusks curving up out from under it. She proposes
  // to Absalom in it at 345.
  'lola': [
    { d: ellipse(80, 40, 16, 5), role: 'accent' },
    { d: 'M66 36 q-2 -6 4 -6 q2 -6 8 -2 q6 -4 8 2 q6 0 4 6', role: 'accent' },
    { d: 'M64 42 C50 58 42 96 40 140 M96 42 C110 58 118 96 120 140' },
    { d: 'M40 140 q10 7 20 1 t20 1 t20 1 t20 -3' },
    {
      d: 'M72 46 C66 76 64 106 64 140 M88 46 C94 76 96 106 96 140 M80 46 V140',
      role: 'soft',
    },
    { d: 'M54 136 C34 136 18 118 16 84 C26 104 40 116 56 120' },
    { d: 'M106 136 C126 136 142 118 144 84 C134 104 120 116 104 120' },
    {
      d: 'M24 112 l5 -5 M34 124 l4 -6 M136 112 l-5 -5 M126 124 l-4 -6',
      role: 'ambient',
    },
    { d: 'M112 64 l6 -3 M116 82 l6 -3 M118 100 l6 -3', role: 'ambient' },
    shadow(80, 172, 50),
  ],

  // A pair of scissors, and the shadow lying cut in two beneath them.
  'gecko-moria': [
    { d: 'M18 26 L88 92 L78 102 Z', role: 'accent' },
    { d: 'M142 26 L72 92 L82 102 Z', role: 'accent' },
    { d: circle(80, 100, 4) },
    { d: 'M78 102 C68 116 50 122 40 118' },
    { d: 'M82 102 C92 116 110 122 120 118' },
    { d: ellipse(30, 130, 14, 17) },
    { d: ellipse(130, 130, 14, 17) },
    {
      d: 'M20 168 C34 158 56 156 70 162 L66 180 C46 182 28 178 20 174 Z',
      role: 'ambient',
      dashed: true,
    },
    {
      d: 'M140 168 C126 158 104 156 90 162 L94 180 C114 182 132 178 140 174 Z',
      role: 'ambient',
      dashed: true,
    },
  ],

  // A long coat with nobody in it, and the bazooka out of one sleeve.
  'absalom': [
    {
      d: 'M62 40 C46 44 38 58 36 76 L30 160 H128 L122 76 C120 58 112 44 96 40',
    },
    { d: 'M62 40 L80 64 L96 40' },
    { d: 'M80 64 V160', role: 'soft' },
    {
      d: dots([
        [72, 88],
        [72, 108],
        [72, 128],
      ]),
    },
    {
      d: 'M40 78 C34 102 32 128 32 152 M118 78 C124 102 126 128 126 152',
      role: 'soft',
    },
    { d: 'M106 98 H150 V126 H106 Z', role: 'accent' },
    { d: 'M150 92 L158 96 V128 L150 132 Z', role: 'accent' },
    { d: 'M118 98 V86 h10', role: 'accent' },
    shadow(80, 172, 50),
  ],

  // His violet feathery cape hung on a peg by its fluffy collar, one side
  // turned back to show the black lining, hatched, the feathered hem in his
  // colour; the surgical mask he wears under his chin hangs from the same
  // peg. He greets the three at his mansion door in both at 340.
  'hogback': [
    { d: 'M80 22 V34 M72 34 h16', role: 'ambient' },
    { d: dots([[80, 22]]) },
    { d: 'M64 40 C50 70 34 120 24 168 M129 160 C122 118 110 70 96 40' },
    { d: 'M96 40 C104 76 108 124 106 170' },
    {
      d: 'M100 66 l8 -4 M102 84 l10 -5 M104 102 l12 -6 M105 120 l13 -6 M106 138 l14 -6 M106 156 l16 -7',
      role: 'ambient',
    },
    {
      d: 'M62 40 q-6 -8 2 -10 q2 -8 10 -4 q4 -6 10 0 q8 -4 10 4 q8 2 2 10 q-16 6 -34 0 Z',
      role: 'accent',
    },
    {
      d: 'M24 168 q2 10 10 6 q3 9 11 4 q4 9 11 3 q5 8 12 2 q5 8 12 0 q6 8 12 -2 q6 7 11 -3 q7 6 10 -4 q7 4 8 -6 q8 2 8 -8',
      role: 'accent',
    },
    {
      d: 'M60 70 C54 96 46 128 42 160 M76 46 C72 90 70 130 68 170',
      role: 'soft',
    },
    { d: 'M76 34 C62 40 58 54 62 60 M40 62 H70 V80 Q55 86 40 80 Z' },
    { d: 'M41 68 H69 M41 74 H69', role: 'soft' },
  ],

  // A stack of serving plates, one more flying off the top and another broken
  // in two on the floor. She throws them at Usopp at the mansion door (340).
  'victoria-cindry': [
    { d: ellipse(58, 100, 38, 10) },
    { d: ellipse(58, 100, 21, 5.5), role: 'soft' },
    {
      d: 'M20 100 q38 14 76 0 M20 112 q38 14 76 0 M22 124 q36 14 74 0 M20 136 q38 14 76 0',
    },
    {
      d: 'M28 108 q30 10 60 0 M28 120 q30 10 60 0 M30 132 q28 10 58 0 M28 144 q30 10 60 0 V150 q-30 10 -60 0 Z',
    },
    {
      d: 'M90 112 l6 -3 M90 124 l6 -3 M90 136 l6 -3 M90 148 l6 -3',
      role: 'ambient',
    },
    { d: ellipse(118, 76, 26, 7), transform: PLATE_FALL, role: 'accent' },
    { d: ellipse(118, 76, 14, 3.5), transform: PLATE_FALL, role: 'soft' },
    { d: 'M96 52 l-8 -6 M104 44 l-4 -8', role: 'ambient' },
    {
      d: 'M100 176 Q102 168 118 168 L114 172 L120 176 L116 182 Q102 182 100 176 Z M126 168 Q144 168 148 175 Q146 182 128 182 L122 177 L128 172 Z',
      role: 'accent',
    },
    { d: 'M104 164 l-4 -4 M150 164 l4 -4 M126 160 v-5', role: 'soft' },
    shadow(58, 166, 40),
  ],

  // Shusui half drawn: the blade's bare stretch in its colour between the
  // tsuba, seen as an ellipse, and the mouth of the black scabbard, hatched.
  // The hilt keeps its diamond wrap. He carries it from 342.
  'ryuma': [
    { d: 'M27.7 182.9 L68 100.2 L80.6 106.4 L40.3 189.1 Z' },
    { d: 'M31.2 175.7 L43.8 181.9' },
    {
      d: 'M39.3 175.2 L46.8 173.3 M42.8 168 L50.3 166.2 M46.3 160.8 L53.9 159 M49.8 153.6 L57.4 151.8 M53.3 146.4 L60.9 144.6 M56.8 139.3 L64.4 137.4 M60.3 132.1 L67.9 130.2 M63.8 124.9 L71.4 123 M67.3 117.7 L74.9 115.8 M70.8 110.5 L78.4 108.6',
      role: 'ambient',
    },
    { d: 'M70.3 101.3 L81.7 78 M78.4 105.3 L88.4 81.2', role: 'accent' },
    { d: 'M76.9 95.7 L84.4 80.4', role: 'soft' },
    { d: 'M80.3 77.3 L82.5 72.8 L93.3 78.1 L91.1 82.6 Z' },
    { d: 'M76.2 67.5 A14 5 26 1 0 101.4 79.8 A14 5 26 1 0 76.2 67.5' },
    { d: 'M84.3 69.2 L102.2 32.4 L113 37.6 L95 74.5 Z' },
    { d: 'M86 65.6 L100.3 63.7 L93 51.2 L107.3 49.3 L100 36.9', role: 'soft' },
    { d: 'M101.8 32.1 L104.4 26.7 L116.1 32.4 L113.5 37.8 Z' },
  ],

  // The back of his head over the mansion roof he crashed through at 355: a
  // shock of hair, the two great horns in his colour, and a house far too
  // small beneath. Seen from behind, so no face.
  'oars': [
    {
      d: 'M40 112 C38 86 44 68 56 60 L52 50 L64 54 L66 42 L76 50 L82 38 L88 50 L98 42 L100 54 L110 50 L104 62 C116 70 122 86 120 112',
    },
    {
      d: 'M50 78 C34 70 24 52 26 22 C34 42 46 52 58 58 M112 78 C126 70 136 52 134 22 C126 42 114 52 104 58',
      role: 'accent',
    },
    {
      d: 'M48 86 C46 96 44 104 46 112 M112 86 C114 96 116 104 114 112',
      role: 'soft',
    },
    { d: 'M20 150 V112 H86 L92 104 L98 114 L106 102 L112 112 H140 V150' },
    {
      d: 'M34 124 h12 v14 h-12z M114 124 h12 v14 h-12z M74 150 V130 h12 V150',
      role: 'soft',
    },
    { d: 'M128 118 l6 -4 M130 132 l6 -4 M130 146 l6 -4', role: 'ambient' },
    { d: 'M94 98 l-2 -6 M108 96 l3 -5', role: 'ambient' },
    { d: 'M-4 150 H164', role: 'ambient', dashed: true },
  ],

  // His white cowboy hat on top of a coat stand, and the green captain's coat
  // hung beneath it, gold epaulettes in his colour. He is first seen whole in
  // Brook's memory at 378.
  'yorki': [
    { d: 'M24 48 Q34 64 80 64 Q126 64 136 48' },
    { d: 'M24 48 Q38 52 54 50 M106 50 Q122 52 136 48', role: 'soft' },
    { d: 'M54 52 C52 36 58 22 66 22 Q80 30 94 22 C102 22 108 36 106 52' },
    { d: 'M55 44 Q80 50 105 44 M80 28 V40', role: 'soft' },
    {
      d: 'M66 72 C56 74 46 76 42 84 L40 170 H120 L118 84 C114 76 104 74 94 72',
    },
    { d: 'M42 84 L30 146 H44 L52 100 M118 84 L130 146 H116 L108 100' },
    { d: 'M66 72 L80 90 L94 72 M80 90 V170' },
    { d: 'M66 72 L70 106 L80 90 M94 72 L90 106 L80 90', role: 'soft' },
    { d: 'M36 88 Q44 76 60 78 M124 88 Q116 76 100 78', role: 'accent' },
    {
      d: 'M38 90 v8 M43 86 v10 M48 83 v10 M53 81 v10 M122 90 v8 M117 86 v10 M112 83 v10 M107 81 v10',
      role: 'accent',
    },
    {
      d: 'M121 104 l6 -3 M123 116 l6 -3 M125 128 l6 -3 M114 152 l6 -3',
      role: 'ambient',
    },
    { d: 'M80 64 V72 M80 170 V178 M64 184 L80 178 L96 184', role: 'soft' },
    shadow(80, 186, 40),
  ],
  // A bat-winged cape folded shut and hanging upside down from a dead branch,
  // the wings in his colour and spiky hair poking out at the bottom, with the
  // long-necked bottle he carries slung across it. He hangs there to greet the
  // crew at 339.
  'hildon': [
    {
      d: 'M4 34 C40 28 90 36 156 30 M120 32 l14 -14 M36 31 l-10 -12 M128 25 l10 2',
      role: 'ambient',
    },
    { d: 'M72 33 q-2 6 2 8 M84 33 q2 6 -2 8' },
    {
      d: 'M66 40 C52 60 44 92 48 132 L56 124 L62 136 L70 126 L80 140 L90 126 L98 136 L104 124 L112 132 C116 92 108 60 94 40 Z',
      role: 'accent',
    },
    {
      d: 'M72 44 C66 70 64 100 66 128 M88 44 C94 70 96 100 94 128',
      role: 'soft',
    },
    {
      d: 'M102 64 l6 -3 M104 80 l7 -3 M105 96 l7 -3 M104 112 l7 -3',
      role: 'ambient',
    },
    {
      d: 'M70 140 l-4 12 M76 142 l-2 14 M84 142 l2 14 M90 140 l4 12',
      role: 'soft',
    },
    {
      d: 'M55.4 50.1 L89.4 81 C93.9 85.1 92 90.1 94.9 92.8 L111.2 107.6 L107.2 112 L90.9 97.2 C87.9 94.5 83.1 96.9 78.7 92.9 L44.6 61.9 Z',
    },
    { d: 'M111.5 107.2 L116.7 111.9 L112 117.1 L106.8 112.4', role: 'soft' },
    { d: 'M64.3 58.2 L53.5 70 M80.5 73 L69.8 84.8', role: 'soft' },
  ],

  // The three-headed dog side on, with no eyes: bandaged, a red spiked collar
  // on every neck in its colour, and the middle head a fox's, with taller
  // ears. It chases three of the crew at 339.
  'cerberus-thriller-bark': [
    {
      d: 'M80 104 C68 98 46 98 32 106 C20 112 18 128 24 138 V172 h8 L36 144 C50 148 64 146 76 140 L74 172 h8 L90 132 V172 h8 L100 126',
    },
    { d: 'M32 106 C22 96 16 84 18 70' },
    {
      d: 'M80 104 L82 46 M90 102 L94 48 M90 104 L118 78 M94 114 L120 84 M98 120 L106 116',
      role: 'soft',
    },
    { d: DOG_HEAD, transform: 'translate(96 38)' },
    { d: DOG_HEAD, transform: 'translate(130 72)' },
    { d: DOG_HEAD, transform: 'translate(118 110)' },
    { d: DOG_EARS, transform: 'translate(96 38)' },
    { d: FOX_EARS, transform: 'translate(130 72)' },
    { d: DOG_EARS, transform: 'translate(118 110)' },
    { d: SPIKED_COLLAR, transform: 'translate(87 60)', role: 'accent' },
    {
      d: SPIKED_COLLAR,
      transform: 'translate(112 86) rotate(50)',
      role: 'accent',
    },
    {
      d: SPIKED_COLLAR,
      transform: 'translate(102 122) rotate(70)',
      role: 'accent',
    },
    { d: 'M44 110 l10 -6 M48 120 l12 -7 M28 150 h8 M76 152 h8', role: 'soft' },
    { d: 'M30 124 l6 -4 M30 134 l6 -4 M64 134 l8 -5', role: 'ambient' },
    shadow(60, 182, 50),
  ],

  // The trophy plaque hung from a nail, a pig's head in it with its ears
  // folded forward in his colour and the round of the snout, no eyes and no
  // mouth, and the two sabres crossed under its chin. He hangs on the
  // dining-room wall from 340.
  'buhichuck': [
    { d: 'M50 40 L80 20 L110 40', role: 'ambient' },
    { d: dots([[80, 20]]) },
    {
      d: 'M36 40 H66 A14 14 0 0 0 94 40 H124 V92 C124 118 104 134 80 142 C56 134 36 118 36 92 Z',
    },
    { d: 'M124 40 l6 4 V94 C130 120 110 138 84 146 L80 142' },
    {
      d: 'M127 56 l-3 4 M127 72 l-3 4 M127 88 l-3 4 M124 106 l-3 3 M116 122 l-3 3',
      role: 'ambient',
    },
    {
      d: 'M44 48 H60 M100 48 H116 M44 48 V92 C44 112 60 125 80 132 C100 125 116 112 116 92 V48',
      role: 'soft',
    },
    {
      d: 'M52 100 C52 84 64 76 80 76 C96 76 108 84 108 100 C108 114 96 122 80 122 C64 122 52 114 52 100 Z',
    },
    {
      d: 'M72 77 C62 70 50 68 42 72 C40 82 42 92 48 100 C54 92 58 86 62 82 M88 77 C98 70 110 68 118 72 C120 82 118 92 112 100 C106 92 102 86 98 82',
      role: 'accent',
    },
    {
      d: 'M44 74 C50 78 54 84 56 90 M116 74 C110 78 106 84 104 90',
      role: 'soft',
    },
    { d: ellipse(80, 106, 11, 6.5), role: 'soft' },
    { d: 'M32 184 Q74 168 124 128 M128 184 Q86 168 36 128' },
    { d: 'M26 172 l14 18 M134 172 l-14 18', role: 'soft' },
    { d: 'M32 184 l-8 6 M128 184 l8 6' },
  ],

  // A gate in the outer wall shaped like a mouth, its teeth closing on the sea.
  'thriller-bark': [
    { d: 'M-4 62 H164 M-4 150 H164' },
    { d: 'M40 150 V100 C40 64 120 64 120 100 V150' },
    {
      d: 'M40 100 L51.8 98.8 L43.4 88.2 L56.4 91.4 L52.5 79.8 L64.8 87 L65.3 74.7 L74.8 85.2 L80 73 L85.2 85.2 L94.7 74.7 L95.2 87 L107.5 79.8 L103.6 91.4 L116.6 88.2 L108.2 98.8 L120 100',
      role: 'accent',
    },
    {
      d: 'M40 150 L46 138 L52 150 L60 136 L68 150 L76 136 L84 150 L92 136 L100 150 L108 136 L114 150 L120 138',
      role: 'accent',
    },
    {
      d: 'M12 62 V38 h6 v6 h6 v-6 h6 v6 h6 v-6 h6 V62 M118 62 V38 h6 v6 h6 v-6 h6 v6 h6 v-6 h6 V62',
    },
    {
      d: 'M4 84 h26 M10 106 h24 M4 128 h26 M130 84 h26 M126 106 h24 M130 128 h26',
      role: 'soft',
    },
    {
      d: 'M-4 30 q20 -6 40 0 t40 0 M84 24 q20 -6 40 0 t40 0',
      role: 'ambient',
      dashed: true,
    },
    ...SEA.slice(1),
  ],

  // The patchwork bear front on: the oversized striped cap, round ears, the
  // surgical mask in his colour, and a stitched seam across the belly. No eyes.
  // He is first seen at 343, beside Perona's rooms.
  'kumashi': [
    { d: 'M40 60 C40 30 120 30 120 60 C120 66 40 66 40 60 Z' },
    {
      d: 'M60 36 C56 44 54 54 56 64 M80 32 V65 M100 36 C104 44 106 54 104 64',
      role: 'soft',
    },
    { d: 'M40 56 q-8 -2 -10 -10 M120 56 q8 -2 10 -10' },
    { d: `${circle(38, 74, 9)} ${circle(122, 74, 9)}` },
    { d: 'M44 64 C34 76 34 104 50 116 Q80 128 110 116 C126 104 126 76 116 64' },
    { d: 'M58 88 H102 V110 Q80 116 58 110 Z', role: 'accent' },
    {
      d: 'M58 88 L44 76 M102 88 L116 76 M60 96 H100 M60 103 H100',
      role: 'soft',
    },
    { d: 'M50 116 C34 126 28 148 34 176 H126 C132 148 126 126 110 116' },
    { d: 'M34 176 V180 H62 V172 M126 176 V180 H98 V172', role: 'soft' },
    { d: 'M40 132 l-12 22 l10 4 M120 132 l12 22 l-10 4' },
    {
      d: 'M48 146 C62 138 76 140 88 150 C96 156 108 158 120 152 M56 141 l-2 6 M66 140 l0 6 M76 143 l2 6 M96 155 l1 6 M106 156 l-1 6',
      role: 'soft',
    },
    {
      d: 'M112 128 l6 -3 M116 142 l6 -3 M118 156 l6 -3 M118 170 l6 -3',
      role: 'ambient',
    },
    shadow(80, 188, 52),
  ],
  // His open red coat over a bandaged middle, the two swords he died with
  // still stuck in it, in his colour, and his bottle standing beside it. He
  // shuffles in with the others at 344.
  'john': [
    { d: 'M60 52 C44 56 32 62 28 74 L22 176 H114 L108 74 C104 62 92 56 76 52' },
    { d: 'M60 52 L54 88 L50 176 M76 52 L82 88 L86 176' },
    {
      d: 'M54 96 Q68 102 82 96 M53 112 Q68 118 83 112 M52 128 Q68 134 84 128 M51 144 Q68 150 85 144',
      role: 'soft',
    },
    { d: 'M28 74 Q34 64 48 62 M108 74 Q102 64 88 62', role: 'soft' },
    { d: 'M64 120 L26 30 M70 118 L32 28', role: 'accent' },
    { d: 'M18 38 L38 26 M26 31 l-6 -14 l6 -3 l6 14', role: 'accent' },
    { d: 'M72 132 L130 70 M76 138 L134 76', role: 'accent' },
    { d: 'M124 64 L140 80 M133 73 l11 -11 l5 4 l-11 11', role: 'accent' },
    {
      d: 'M98 96 l7 -3 M100 112 l7 -3 M101 128 l7 -3 M102 144 l7 -3 M102 160 l7 -3',
      role: 'ambient',
    },
    {
      d: 'M124 176 V148 C124 140 130 136 132 130 V116 h10 V130 C144 136 150 140 150 148 V176 Z M130 110 h14 v6 h-14z',
    },
    shadow(84, 186, 64),
  ],

  // An old oil lantern with its flame lit, and a shadow on the ground beneath
  // it again.
  'spoil': [
    { d: 'M68 36 C68 18 92 18 92 36' },
    { d: 'M56 50 L66 36 H94 L104 50 Z' },
    { d: 'M58 50 V140 M102 50 V140' },
    {
      d: 'M64 56 C56 80 56 116 64 134 H96 C104 116 104 80 96 56 Z',
      role: 'soft',
    },
    { d: 'M80 118 C70 108 72 94 80 80 C88 94 90 108 80 118 Z', role: 'accent' },
    { d: 'M80 118 V128' },
    { d: 'M52 140 H108 V152 H52 Z' },
    { d: 'M58 152 L62 160 H98 L102 152' },
    {
      d: 'M40 96 h-12 M120 96 h12 M46 70 l-10 -8 M114 70 l10 -8',
      role: 'ambient',
    },
    shadow(80, 174, 44),
  ],

  // The three's things: Nin's bow with the arrow he wakes Moria with at 343,
  // the snot bubble it pops in their colour, Bao's bucket of a head and
  // Gyoro's sword.
  'gyoro-nin-and-bao': [
    { d: 'M30 34 C64 62 64 128 30 156' },
    { d: 'M30 34 L30 156', role: 'soft' },
    { d: 'M30 95 H118 M30 95 l-6 -5 M30 95 l-6 5' },
    { d: 'M118 95 l-10 -5 v10 z' },
    { d: 'M124 90 A14 14 0 1 1 126 106', role: 'accent' },
    {
      d: dots([
        [128, 70],
        [150, 82],
        [152, 108],
        [134, 120],
        [144, 70],
      ]),
      role: 'accent',
    },
    {
      d: `M62 172 L60 136 ${ellipse(76, 136, 16, 4.5)} M92 136 L90 172 Q76 177 62 172`,
    },
    { d: 'M84 142 l5 -3 M84 154 l5 -3 M84 166 l5 -3', role: 'ambient' },
    { d: 'M60 136 C58 112 94 112 92 136', role: 'soft' },
    {
      d: 'M104 176 L148 118 M108 179 L152 121 M144 114 L156 124 M104 176 l4 3',
    },
    { d: 'M116 160 l4 3 M124 150 l4 3 M132 139 l4 3', role: 'soft' },
    shadow(96, 186, 58),
  ],

  // His three identical sabres, one upright in front in his colour with nicks
  // in its edge, two fanned out behind, and the wind curling over them. He
  // carries all three at 346.
  'jigoro': [
    { d: SABRE_BLADE, transform: 'translate(54 154) rotate(-30)' },
    { d: SABRE_GUARD, transform: 'translate(54 154) rotate(-30)' },
    { d: SABRE_BLADE, transform: 'translate(104 154) rotate(30) scale(-1 1)' },
    { d: SABRE_GUARD, transform: 'translate(104 154) rotate(30) scale(-1 1)' },
    { d: 'M76 152 C72 112 78 72 98 42 C92 74 88 112 88 152 Z', role: 'accent' },
    { d: 'M68 152 H96 M82 152 V180 M96 152 C106 164 100 180 82 180' },
    {
      d: 'M76 130 l3 -1 l-2 -3 M76 104 l3 -1 l-2 -3 M80 78 l3 0 l-1 -3',
      role: 'soft',
    },
    {
      d: 'M10 34 q18 -12 36 -2 q8 5 2 10 M116 20 q18 -10 34 2 q6 6 -2 9',
      role: 'ambient',
    },
    shadow(80, 190, 50),
  ],

  // A spider web strung wide, one sticky thread hanging from it with a
  // drop at the end.
  'tararan': [
    {
      d: 'M80 82 L144.7 108.8 M80 82 L106.8 146.7 M80 82 L53.2 146.7 M80 82 L15.3 108.8 M80 82 L15.3 55.2 M80 82 L53.2 17.3 M80 82 L106.8 17.3 M80 82 L144.7 55.2',
    },
    {
      d: 'M94.8 88.1 Q89 91 86.1 96.8 Q80 94.7 73.9 96.8 Q71 91 65.2 88.1 Q67.3 82 65.2 75.9 Q71 73 73.9 67.2 Q80 69.3 86.1 67.2 Q89 73 94.8 75.9 Q92.7 82 94.8 88.1',
    },
    {
      d: 'M111.4 95 Q99.1 101.1 93 113.4 Q80 109 67 113.4 Q60.9 101.1 48.6 95 Q53 82 48.6 69 Q60.9 62.9 67 50.6 Q80 55 93 50.6 Q99.1 62.9 111.4 69 Q107 82 111.4 95',
      role: 'soft',
    },
    {
      d: 'M129.9 102.7 Q110.3 112.3 100.7 131.9 Q80 124.9 59.3 131.9 Q49.7 112.3 30.1 102.7 Q37.1 82 30.1 61.3 Q49.7 51.7 59.3 32.1 Q80 39.1 100.7 32.1 Q110.3 51.7 129.9 61.3 Q122.9 82 129.9 102.7',
    },
    { d: 'M101 132 C104 146 100 158 102 170', role: 'accent' },
    { d: 'M102 170 c-6 4 -6 12 0 14 c6 -2 6 -10 0 -14z', role: 'accent' },
  ],

  // The short one's big sword in its scabbard on the strap he wears across
  // his chest, and the tall one's torn striped shirt hung beside it. No
  // shadow under either: they have lost theirs. Both are met at 369.
  'risky-brothers': [
    { d: 'M30 172 L70 40 L86 44 L50 176 Z' },
    { d: 'M64 34 L92 42 M74 36 l4 -14 l8 2 l-4 14' },
    { d: 'M36 152 l14 4 M44 126 l14 4', role: 'soft' },
    {
      d: 'M76 56 l6 -4 M72 72 l6 -4 M68 88 l6 -4 M64 104 l6 -4 M60 120 l6 -4 M54 140 l6 -4',
      role: 'ambient',
    },
    { d: 'M72 54 C40 76 30 128 42 162', role: 'accent' },
    { d: 'M30 102 h12 v12 h-12z', role: 'accent' },
    {
      d: 'M104 48 L118 44 L132 48 C140 52 146 60 148 72 L152 130 H142 L138 84 V170 L132 162 L126 172 L120 164 L114 172 L108 164 L102 170 V84 L98 130 H88 L92 72 C94 60 98 52 104 48 Z',
    },
    {
      d: 'M102 98 H138 M102 114 H138 M102 130 H138 M102 146 H138 M91 92 l9 1 M90 108 l9 1 M140 93 l9 -1 M141 109 l9 -1',
      role: 'soft',
    },
    { d: 'M112 46 q6 6 12 0', role: 'soft' },
    { d: 'M138 120 l4 -3 M138 136 l4 -3 M138 152 l4 -3', role: 'ambient' },
  ],
} satisfies Drawings

/** Brook's violin, moved up and right to make room for the guitar. */
const VIOLIN_UP = 'translate(10 -6)'

/** Brook's guitar, drawn lying flat and tilted to where the bow lay. */
const GUITAR = 'translate(-6 6) rotate(-50 80 110)'

/** The records of this stretch drawn again, from the episode the story changes them. */
export const thrillerBarkRedrawn: Redrawings = {
  // A hull the size of an island, a mansion and two dead trees on the deck,
  // the moon hung over all of it: Spoil's line at 343 says the island is the
  // largest pirate ship in the world (ch. 449).
  'thriller-bark-arc': [
    {
      episode: 343,
      value: [
        { d: 'M10 132 L24 152 Q80 164 136 152 L150 132' },
        { d: 'M10 132 H150' },
        { d: 'M56 132 V72 H104 V132' },
        { d: 'M50 72 L80 48 L110 72' },
        { d: 'M66 86 h12 v14 h-12z M82 86 h12 v14 h-12z', role: 'soft' },
        { d: 'M74 132 V112 h12 V132' },
        {
          d: 'M26 132 V94 M26 116 l-12 -14 M26 108 l12 -16 M26 124 l-10 8 M26 100 l-8 -12',
        },
        { d: 'M136 132 V98 M136 118 l12 -13 M136 110 l-11 -14 M136 126 l10 8' },
        { d: circle(122, 30, 20), role: 'accent' },
        ...SEA.slice(1),
      ],
    },
  ],

  // The same violin, still upright, the Soul King's guitar laid across it
  // where the bow was: a shark's head for a body, jaws open on its teeth, gills and two
  // fins for horns. He plays it at his farewell concert at 517 (ch. 598).
  'brook': [
    {
      episode: 517,
      chapter: 598,
      value: [
        ...BROOK_VIOLIN.map((stroke) => ({ ...stroke, transform: VIOLIN_UP })),
        {
          d: 'M54 104 C44 94 24 88 8 92 C0 94 -8 100 -10 106 L16 111 L0 119 C8 129 38 128 54 116',
          transform: GUITAR,
        },
        {
          d: 'M-6 107 l2 4 l2 -3.4 l2 4 l2 -3.2 l2 4 l2 -3 l2 3.6 M3 117 l1 -4 l2 3 l1 -4 l2 3 l1 -4 l2 2.6',
          role: 'soft',
          transform: GUITAR,
        },
        { d: 'M14 96 q-2 4 0 8', role: 'soft', transform: GUITAR },
        {
          d: 'M26 96 q-3 11 0 24 M33 95 q-3 12 0 26 M40 96 q-3 11 0 24',
          role: 'soft',
          transform: GUITAR,
        },
        {
          d: 'M44 98 C48 92 50 86 52 78 L56 104 M44 122 C48 128 50 132 54 140 L56 116',
          transform: GUITAR,
        },
        { d: 'M54 107 H144 M54 113 H144', transform: GUITAR },
        {
          d: 'M72 107 v6 M88 107 v6 M104 107 v6 M120 107 v6',
          role: 'ambient',
          transform: GUITAR,
        },
        {
          d: 'M144 106 L148 102 H162 Q168 110 162 118 H148 L144 114',
          transform: GUITAR,
        },
      ],
    },
  ],
}
