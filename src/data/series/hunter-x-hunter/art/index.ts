import type { Drawings, Redrawings } from '~/data/art/stroke'
import {
  circle,
  dot,
  dots,
  ellipse,
  house,
  SEA,
  shadow,
  wave,
} from '~/lib/svg/primitives'
import type { Stroke } from '~/lib/view/records'

import { CHAPTER_ONE_DRAWINGS } from './chapter-one'
import { FINAL_PHASE_DRAWINGS } from './final-phase'
import { TRICK_TOWER_DRAWINGS } from './trick-tower'
import { zevilArt, zevilRedrawn } from './zevil'
import { ZOLDYCK_DRAWINGS } from './zoldyck'

/**
 * One of Kurapika's two wooden swords, grip down to the left and point up
 * to the right, seen a little from above: the grip in the record's tint
 * with its wrap, the blade's lit top face, and the narrow under face
 * turned away, hatched. The second is the same sword mirrored across the
 * box.
 */
const BOKKEN: Stroke[] = [
  { d: 'M36 176 L58 140.2 L65.7 144.9 L43.7 180.7 Z', role: 'accent' },
  {
    d: 'M38.6 171.7 L45.9 170.4 M43.9 163.2 L51.2 161.8 M49.1 154.7 L56.4 153.3 M54.3 146.2 L61.6 144.8',
    role: 'soft',
  },
  {
    d: 'M58 140.2 L116.6 44.8 Q120.8 38 126.5 39.1 Q128.5 42.7 123.2 51.2 L65.7 144.9',
  },
  { d: 'M40.7 178.9 L122.3 46', role: 'soft' },
  {
    d: 'M70 131.2 L71.4 135.6 M76.8 120.1 L78.2 124.5 M83.6 109 L85 113.4 M90.4 97.9 L91.8 102.3 M97.2 86.9 L98.6 91.2 M104 75.8 L105.4 80.2 M110.8 64.7 L112.2 69.1',
    role: 'ambient',
  },
]

/** The second wooden sword: the first, mirrored about x 80. */
const MIRRORED = 'matrix(-1 0 0 1 160 0)'

/**
 * Every Hunter x Hunter line drawing, one per record, keyed by the record's
 * id, in the house style of One Piece's (`~/data/series/one-piece/art`): the
 * same box, pen and rules. The arcs, and the characters and places of the
 * Hunter Exam filed so far (#760), each at its record's threshold.
 *
 * `satisfies` rather than an annotation, so `ArtId` below stays the literal
 * ids and a record cannot name a drawing that is not here.
 */
export const DRAWINGS = {
  ...ZOLDYCK_DRAWINGS,
  ...CHAPTER_ONE_DRAWINGS,
  ...TRICK_TOWER_DRAWINGS,
  ...zevilArt,
  ...FINAL_PHASE_DRAWINGS,
  // A small sailing ship side on in a storm, the bolt of lightning over her
  // in yellow: the ship that takes Gon away from his island to the exam,
  // through a storm, in episode 1 and chapter 1.
  'hunter-exam-arc': [
    { d: 'M30 128 H130 L118 148 H44 Z' },
    { d: 'M36 136 H124', role: 'soft' },
    {
      d: 'M48 142 l4 6 M60 142 l4 6 M72 142 l4 6 M84 142 l4 6 M96 142 l4 6 M108 142 l4 6',
      role: 'ambient',
    },
    { d: 'M130 128 L140 120 M30 128 L24 122' },
    { d: 'M82 128 V44' },
    { d: 'M84 50 C110 64 112 98 84 116 Z' },
    { d: 'M80 52 L50 118 H80', role: 'soft' },
    { d: 'M82 44 L140 120 M82 44 L24 122', role: 'ambient' },
    {
      d: 'M14 44 C8 34 20 24 30 30 C34 16 54 16 58 28 C68 22 80 30 74 42 C70 48 60 48 56 44 C50 50 38 50 34 44 C26 50 16 50 14 44 Z',
    },
    { d: 'M40 48 L30 70 H42 L32 94', role: 'accent' },
    { d: 'M62 52 l-5 10 M70 50 l-5 10 M20 54 l-5 10', role: 'ambient' },
    { d: 'M18 150 q8 -8 16 0 M126 150 q8 -8 16 0', role: 'soft' },
    ...SEA,
  ],

  // A tower of many floors rising out of a city, its top storeys in the
  // record's tint, a cloud across its middle and an airship passing: the
  // arena Gon and Killua see from the airship and enter in episode 27 and
  // chapter 44.
  'heavens-arena-arc': [
    { d: 'M66 150 L72 36 H88 L94 150' },
    { d: 'M72 36 L76 24 H84 L88 36 M80 24 V12', role: 'accent' },
    { d: 'M74 48 H86 M74 60 H86', role: 'accent' },
    { d: 'M71 80 H89 M70 100 H90 M69 120 H91 M68 138 H92', role: 'soft' },
    { d: 'M84 40 L90 150', role: 'ambient' },
    {
      d: 'M44 92 C40 84 50 78 56 84 C60 76 72 76 74 84 M86 84 C90 76 102 76 104 84 C110 78 120 84 116 92 Z',
      role: 'ambient',
    },
    { d: `${ellipse(36, 48, 16, 6)} M30 54 h12 v4 h-12 Z` },
    { d: 'M20 48 l-6 -5 v10 z', role: 'soft' },
    { d: 'M18 150 V128 h16 V150 M40 150 V136 h14 V150' },
    { d: 'M106 150 V132 h18 V150 M128 150 V140 h12 V150' },
    { d: 'M4 150 H156', role: 'ambient' },
    shadow(80, 158, 30),
  ],

  // An auctioneer's gavel resting on its round block, the head in wine with
  // its two faces seen from the side: the auction in Yorknew City, the
  // largest in the world, where the friends agree to meet on the first of
  // September, as Gon goes home before it in episode 37 and chapter 64.
  'yorknew-city-arc': [
    { d: ellipse(76, 132, 40, 11) },
    { d: 'M36 132 V142 C36 150 116 150 116 142 V132' },
    { d: ellipse(76, 132, 28, 7), role: 'soft' },
    {
      d: 'M44 146 l-2 -6 M58 149 l-2 -7 M94 149 l2 -7 M108 146 l2 -6',
      role: 'ambient',
    },
    { d: 'M35.9 90.4 L49.1 78.2 L76.1 107.6 L62.9 119.8 Z', role: 'accent' },
    { d: 'M38.6 93.3 L51.8 81.1 M60.2 116.9 L73.4 104.7', role: 'soft' },
    { d: 'M61 91 L104 51.5 M65 95 L108 55.5' },
    { d: 'M104 51.5 C106 47 112 50 108 55.5' },
    { d: 'M66 117 l8 -7.4 M70 113 l7 -6.4', role: 'ambient' },
    shadow(76, 160, 46),
  ],

  // A game cartridge standing in the slot of its console, its label recess
  // in orange and the console's far side hatched: the game sold at the Yorknew
  // auction, the lead to Ging, in episode 59 and chapter 120.
  'greed-island-arc': [
    { d: 'M24 122 L104 122 L136 106 L56 106 Z' },
    { d: 'M24 122 V140 H104 V122 M104 140 L136 124 V106' },
    {
      d: 'M108 132 l6 -3 M114 136 l6 -3 M120 128 l6 -3 M126 124 l6 -3',
      role: 'ambient',
    },
    { d: 'M60 116 L92 116 L102 111 L70 111 Z', role: 'soft' },
    { d: 'M64 114 V50 H96 V114' },
    { d: 'M96 50 L106 45 V109 L96 114', role: 'soft' },
    { d: 'M64 50 L74 45 H106', role: 'soft' },
    { d: 'M70 64 H90 V100 H70 Z', role: 'accent' },
    { d: 'M70 56 H90', role: 'soft' },
    { d: dot(36, 132) },
    { d: 'M44 132 h12', role: 'soft' },
    shadow(80, 150, 56),
  ],

  // A chimera ant side on, the abdomen in vermilion, with its elbowed
  // feelers and six jointed legs: the aggressive insect under quarantine
  // that Gon and Killua first see in episode 76, and the queen of chapter
  // 186. No eyes and no jaws.
  'chimera-ant-arc': [
    { d: ellipse(114, 104, 26, 18), role: 'accent' },
    {
      d: 'M98 96 C106 100 116 100 124 94 M100 110 C110 114 122 112 132 104',
      role: 'soft',
    },
    { d: ellipse(70, 102, 18, 10) },
    { d: 'M86 104 L90 104' },
    { d: circle(38, 96, 11) },
    { d: 'M34 86 L26 64 L10 58 M42 86 L44 62 L32 46', role: 'soft' },
    {
      d: 'M62 110 L46 128 L30 150 M72 112 L70 132 L62 150 M80 110 L96 128 L110 150',
    },
    {
      d: 'M66 106 L56 122 L46 138 M76 108 L82 124 L84 140 M84 104 L104 118 L122 134',
      role: 'soft',
    },
    { d: 'M104 120 l6 -4 M114 122 l6 -4 M124 118 l6 -4', role: 'ambient' },
    { d: 'M4 150 H156', role: 'ambient' },
    shadow(80, 158, 50),
  ],

  // A ballot box seen from above and to the side, a folded ballot in
  // lavender going into its slot: the vote for a new chairman of the Hunter
  // Association that the twelve Zodiacs meet to set up in episode 137 and
  // chapter 319.
  'election-arc': [
    { d: 'M34 82 L92 82 L126 66 L68 66 Z' },
    { d: 'M34 82 V146 H92 V82 M92 146 L126 130 V66' },
    { d: 'M62 76 L88 76 L96 72 L70 72 Z', role: 'soft' },
    {
      d: 'M98 140 l20 -10 M98 128 l20 -10 M98 116 l20 -10 M98 104 l20 -10 M98 92 l20 -10',
      role: 'ambient',
    },
    { d: 'M76 74 L68 30 L100 24 L106 66', role: 'accent' },
    { d: 'M72 50 L102 44', role: 'accent' },
    { d: 'M76 36 L94 33 M78 42 L96 39', role: 'soft' },
    { d: 'M40 100 H86 M40 108 H74', role: 'soft' },
    shadow(80, 156, 52),
  ],

  // A sheet of the world map, its coasts in plain ink, and past its torn
  // edge a far larger land in violet, hatched in shadow: the Dark Continent,
  // the place no world map shows, where the King of Kakin announces a voyage
  // in chapter 340.
  'kakin-arc': [
    { d: 'M14 60 L84 52 L80 84 L88 112 L84 150 L18 156 Z' },
    {
      d: 'M24 76 C30 70 44 72 46 80 C50 88 40 94 32 90 C24 88 20 82 24 76 Z',
      role: 'soft',
    },
    {
      d: 'M52 112 C58 104 72 106 72 116 C72 126 62 132 54 128 C48 124 48 116 52 112 Z',
      role: 'soft',
    },
    {
      d: 'M58 70 q8 -2 8 6 q-6 4 -8 -6 M28 122 q6 -4 8 2 q-4 6 -8 -2',
      role: 'soft',
    },
    {
      d: 'M100 40 C120 30 150 38 152 62 C156 86 140 96 146 118 C150 136 130 150 110 144 C98 140 104 124 98 110 C92 96 104 86 98 70 C94 56 92 46 100 40 Z',
      role: 'accent',
    },
    {
      d: 'M112 56 l20 -10 M108 72 l34 -16 M106 88 l38 -18 M110 102 l32 -15 M108 118 l36 -17 M114 132 l28 -13',
      role: 'ambient',
    },
    { d: wave(170), role: 'ambient' },
    { d: 'M18 156 L84 150', role: 'ambient', dashed: true },
  ],

  // Gon's fishing rod, held at the cork grip, the reel under it a drum in
  // three-quarter view, its face in the record's tint and its side
  // hatched, the line run out from the tip to a float and a hook over
  // rings of water: he sits in a tree over the swamp with it in episode 1
  // and chapter 1, and strikes the Kiriko with it in chapter 4.
  'gon-freecss': [
    { d: 'M32 174 L38 178 L64 148 L58 144 Z' },
    { d: 'M38 166 l5 3.6 M44 159 l5 3.6 M50 152 l5 3.6', role: 'ambient' },
    { d: 'M58 144 L136 24 M64 148 L136 24' },
    { d: 'M86 106 l5 3 M106 76 l4.5 2.6 M124 47 l3.6 2', role: 'soft' },
    { d: 'M66 151 L74 155', role: 'soft' },
    { d: ellipse(86, 166, 7, 12), role: 'accent' },
    { d: 'M86 154 H74 A7 12 0 0 0 74 178 H86' },
    { d: 'M76 161 l7 -4.5 M76 168 l8 -5 M76 175 l8 -5', role: 'ambient' },
    { d: ellipse(86, 166, 2.5, 4), role: 'soft' },
    { d: `M86 166 L98 173 ${dot(100, 174)}` },
    { d: 'M136 24 C142 52 140 82 134 104' },
    { d: `${ellipse(133.5, 112, 4, 8)} M129.5 112 H137.5` },
    { d: 'M133.5 120 V128 q0 6 -5 6 q-4 0 -4 -4' },
    { d: 'M112 142 q10 -5 21 0 q11 5 21 0', role: 'ambient' },
    { d: 'M118 152 q7 -3.5 15 0 q8 3.5 15 0', role: 'ambient' },
    shadow(70, 190, 40),
  ],

  // The form for the Hunter Exam lying on a table, a stiff card seen from
  // its corner with its blank fields and the line Mito signs on, and her
  // pen across it in the record's tint, its nib on the line: catching the
  // fish is the deal that opens episode 1 and chapter 1, and she signs.
  // No writing on the card.
  'mito-freecss': [
    { d: 'M18 112 L112 92 L144 132 L48 156 Z' },
    { d: 'M18 112 V117 L48 161 L144 137 V132' },
    { d: 'M24 125 l2 3 M32 137 l2 3 M40 149 l2 3', role: 'ambient' },
    {
      d: 'M38.3 122.8 L85.3 112.8 M42.8 129.4 L89.8 119.4 M47.3 136 L78.3 129.4',
      role: 'soft',
    },
    { d: 'M94.3 137.1 L129.1 129.7', role: 'soft' },
    {
      d: 'M100 123 L55.2 63.6 M93.6 127.8 L48.8 68.4 M55.2 63.6 A4 2 -37 1 0 48.8 68.4 A4 2 -37 1 0 55.2 63.6',
      role: 'accent',
    },
    { d: 'M100 123 L104 135 L93.6 127.8' },
    { d: 'M95.2 116.6 L88.8 121.4 M91.5 111.8 L85.2 116.6', role: 'soft' },
    { d: 'M57.6 66.8 L72.4 83.2', role: 'soft' },
    { d: 'M98 134 L60 82', role: 'ambient', dashed: true },
    shadow(80, 172, 62),
  ],

  // Leorio's briefcase, a slim attaché case standing on its long edge in
  // three-quarter view: the front with the lid's seam and two clasps, the
  // narrow top, the far end hatched, and the handle in the record's tint.
  // He carries it aboard the ship in episode 1 and chapter 2.
  'leorio-paradinight': [
    { d: 'M20 106 H120 V162 H20 Z' },
    { d: 'M20 106 L32 99 H132 L120 106' },
    { d: 'M120 162 L132 155 V99' },
    {
      d: 'M123 118 l6 -3.5 M123 130 l6 -3.5 M123 142 l6 -3.5 M123 154 l6 -3.5',
      role: 'ambient',
    },
    {
      d: 'M64 103 C62 84 94 84 92 101 M68 103 C67 90 89 90 88 101',
      role: 'accent',
    },
    { d: 'M60 104 h10 M86 102 h10', role: 'soft' },
    { d: 'M20 116 H120 L132 109', role: 'soft' },
    { d: 'M34 111 h8 v10 h-8 Z M98 111 h8 v10 h-8 Z' },
    { d: 'M20 156 H120', role: 'soft' },
    shadow(78, 174, 58),
  ],

  // Kurapika's two wooden swords crossed, their grips in the record's tint:
  // he draws them for the duel with Leorio on the deck in episode 1 and
  // chapter 2.
  'kurapika': [
    ...BOKKEN,
    ...BOKKEN.map((stroke) => ({ ...stroke, transform: MIRRORED })),
    shadow(80, 190, 54),
  ],

  // A coil of the ship's rope lying on the deck in three-quarter view, the
  // rope in the record's tint, the side of the coil hatched and the loose
  // end run out over the boards: the crewman working the deck in the storm
  // that throws him over the side, in episode 1 and chapter 2. In the
  // chapter a yard snaps and strikes him, and the crew haul him back aboard
  // with a rope.
  'katzo': [
    {
      d: 'M118 148 A41.9 15.1 0 0 1 34.2 148 A37.6 13.5 0 0 1 109.5 148 A33.4 12 0 0 1 42.8 148 A29.1 10.5 0 0 1 101 148 A24.9 9 0 0 1 51.2 148 A20.6 7.4 0 0 1 92.5 148 A16.4 5.9 0 0 1 59.8 148 A12.1 4.4 0 0 1 84 148',
      role: 'accent',
    },
    { d: 'M34.2 148 V156 A41.9 15.1 0 0 0 118 156 V148' },
    {
      d: 'M44 166 l2 -5 M60 170 l2 -5 M78 171 l2 -5 M96 169 l2 -5 M110 164 l2 -5',
      role: 'ambient',
    },
    {
      d: 'M110.4 154 l-2 -3.5 M95 159.5 l-2 -3.5 M74 161.5 l-2 -3.5 M53 159.5 l-2 -3.5 M38 154 l-2 -3.5',
      role: 'soft',
    },
    { d: 'M118 148 C130 150 138 160 136 170 C134 180 146 184 154 182' },
    { d: 'M154 182 l4 -1 M154 182 l3 3 M154 182 l1 4', role: 'soft' },
    { d: 'M126 151 l-2 3 M134 160 l-3 2 M136 172 l-3 0.5', role: 'soft' },
    shadow(76, 182, 50),
  ],

  // A Kiriko's arm and the wing it grows to fly, folded and hanging
  // below, the coverts in a row and the long feathers layered under them,
  // its three long fingers ending in claws in the record's tint: the
  // navigators fly Gon, Kurapika and Leorio to the exam in episode 2 and
  // chapter 4.
  'kiriko': [
    { d: 'M4 110 C36 94 66 76 94 56' },
    { d: 'M10 124 C42 108 72 90 102 70' },
    {
      d: 'M93 60 C98 47 104 37 110 28 C112 31 113 32 115 33 C109 41 103 50 98 62 M98 64 C109 53 121 46 133 42 L135 47 C123 51 112 57 101 67 M102 69 C115 66 129 68 141 73 L140 78 C128 75 115 73 103 73',
    },
    {
      d: 'M112 30 C114 20 110 14 104 14 M134 44 C140 38 138 30 132 30 M140.5 75.5 C150 74 152 66 146 62',
      role: 'accent',
    },
    {
      d: 'M10 124 Q8 140 16 150 Q22 148 26 140 Q26 156 32 164 Q40 160 44 150 Q46 166 52 174 Q60 170 64 158 Q66 174 74 180 Q82 176 86 162 Q90 178 98 182 Q104 178 106 162 Q112 176 120 176 C124 150 116 100 102 70',
    },
    {
      d: 'M26 140 L29 124 M44 150 L47 114 M64 158 L66 104 M86 162 L84 93 M106 162 L98 84',
      role: 'soft',
    },
    {
      d: 'M14 132.7 Q26 139.4 32 122.1 Q44 128.8 50 111.5 Q62 118.2 68 101 Q80 107.7 86 90.4 Q98 97.1 104 79.8',
      role: 'soft',
    },
    {
      d: 'M20 122 l2 6 M36 113 l2 6 M52 103 l2 6 M68 93 l2 6 M84 83 l2 6',
      role: 'ambient',
    },
    { d: 'M90 60 l-3 7 M84 64 l-3 7 M18 106 l-2 7', role: 'soft' },
  ],

  // The cassette Ging left in the box for Gon, in three-quarter view: its
  // label, the window and the two reels in the record's tint, the tape
  // between them, the head opening at the bottom and the far side hatched.
  // Gon plays it at the end of episode 37 and of chapter 65; Ging is first
  // drawn in chapter 66.
  'ging-freecss': [
    { d: 'M26 112 H130 V170 H26 Z' },
    { d: 'M26 112 L36 104 H140 L130 112' },
    { d: 'M130 170 L140 162 V104' },
    {
      d: 'M133 124 l4 -3 M133 136 l4 -3 M133 148 l4 -3 M133 160 l4 -3',
      role: 'ambient',
    },
    { d: 'M36 120 H120 V146 H36 Z', role: 'soft' },
    { d: 'M54 126 H102 V140 H54 Z' },
    { d: `${circle(66, 133, 6)} ${circle(90, 133, 6)}`, role: 'accent' },
    { d: 'M66 139 C74 140 82 140 90 139', role: 'soft' },
    { d: 'M46 170 L52 156 H104 L110 170' },
    {
      d: dots([
        [62, 163],
        [94, 163],
        [31, 116],
        [125, 116],
        [31, 166],
        [125, 166],
      ]),
    },
    shadow(84, 184, 56),
  ],

  // Whale Island from the sea: a high mountain at one end and a lower one at
  // the other, the forest between them in the record's tint, the town's
  // houses on the shore and a fishing boat at the jetty. Gon's home in
  // episode 1 and chapter 1.
  'whale-island': [
    { d: 'M2 150 C14 122 26 82 42 76 C56 80 64 110 74 128' },
    {
      d: 'M46 84 l-6 12 M52 96 l-8 14 M58 108 l-8 14 M64 120 l-6 12',
      role: 'ambient',
    },
    {
      d: 'M72 132 a6 6 0 0 1 11 -4 a6 6 0 0 1 11 -2 a6 6 0 0 1 11 2 a6 6 0 0 1 9 6 M78 140 a5 5 0 0 1 10 -2 a5 5 0 0 1 10 0 a5 5 0 0 1 9 3',
      role: 'accent',
    },
    { d: 'M108 124 C116 108 124 98 132 100 C142 104 148 128 158 150' },
    { d: 'M2 150 H158', role: 'soft' },
    { d: house(86, 10, 140, 134) },
    { d: house(102, 10, 142, 136) },
    { d: 'M118 150 V160 M118 154 H144 V160' },
    { d: 'M126 164 H148 L144 170 H130 Z M137 164 V146' },
    ...SEA.slice(1),
  ],

  // Dolle Harbor from the water: the quay with its warehouse and houses, a
  // bollard and a boat moored at it, and on the hill behind the town the
  // lone tree in the record's tint, where the captain sends Gon in episode 2
  // and chapter 3.
  'dolle-harbor': [
    { d: 'M4 112 C40 102 70 84 104 82 C128 82 146 90 158 96', role: 'soft' },
    {
      d: 'M116 30 L106 46 h6 L100 62 h8 L94 78 h44 L130 62 h8 L126 46 h6 Z',
      role: 'accent',
    },
    { d: 'M116 78 V86', role: 'accent' },
    { d: house(10, 16, 124, 114) },
    { d: house(34, 14, 128, 120) },
    {
      d: 'M56 150 V118 H98 V150 M56 118 L77 106 L98 118 M70 150 V132 H84 V150',
    },
    { d: 'M2 150 H158' },
    { d: 'M2 150 V156 M158 150 V156', role: 'soft' },
    { d: 'M110 150 v-6 h6 v6' },
    { d: 'M112 162 H154 L148 172 H118 Z M134 162 V130' },
    { d: 'M112 162 Q108 154 113 147', role: 'soft' },
    ...SEA.slice(1),
  ],

  // Tonpa's open juice can, its pull ring in the record's tint: the drink
  // he offers the rookies in episode 3 and chapter 5. No label or lettering.
  'tonpa': [
    { d: ellipse(80, 68, 28, 9) },
    { d: 'M52 68 V152 C52 165 108 165 108 152 V68' },
    { d: 'M52 148 C52 160 108 160 108 148', role: 'soft' },
    { d: ellipse(80, 68, 23, 6), role: 'soft' },
    { d: ellipse(73, 67, 8, 3), role: 'accent' },
    { d: 'M79 67 L88 62 L93 65 L84 70 Z', role: 'accent' },
    { d: 'M63 81 V137 M67 83 V132', role: 'soft' },
    {
      d: 'M98 85 l5 -3 M98 99 l5 -3 M98 113 l5 -3 M98 127 l5 -3 M98 141 l5 -3',
      role: 'ambient',
    },
    { d: 'M59 152 C66 157 92 157 100 152', role: 'soft' },
    shadow(80, 182, 36),
  ],

  // Hisoka's right hand from the back, the fingers a little spread and
  // the long pointed nails in the record's tint: the applicant who wounds a
  // man for bumping into him without apologizing, in episode 3 and chapter
  // 5. No card: his cards first come out in the Milsy Wetlands, in chapter
  // 8. No suit symbol, no face paint.
  'hisoka': [
    { d: 'M62 198 C62 178 58 162 54 146 M96 198 C96 180 100 164 106 146' },
    { d: 'M54 146 C50 132 48 118 50 104 M106 146 C110 130 110 116 106 104' },
    {
      d: 'M50 104 L45 62 Q45 56 50.5 56 Q56 56 56.5 62 L62 100 M63 99 L62 50 Q62 44 68 44 Q74 44 74 50 L76 98 M77 98 L82 54 Q83 48 88.5 48.5 Q94 49 93.5 55 L90 99 M91 101 L100 68 Q102 62 107 63.5 Q111.5 65 110 71 L104 106',
    },
    {
      d: 'M45.6 58 L46 38 L55.6 58 M62.4 46 L68 26 L73.6 46 M83 50 L92 32 L93.4 51 M101.6 64.4 L114 50 L110.4 67',
      role: 'accent',
    },
    {
      d: 'M54 146 C42 140 32 128 26 114 Q24 108 29.5 106.5 Q34 106 36.5 111 C40 120 46 124 51 125',
    },
    { d: 'M24.8 110 L18 96 L33.4 107.2', role: 'accent' },
    { d: 'M52 106 Q78 94 104 106', role: 'soft' },
    {
      d: 'M47 80 q5 -2 10 0 M63 74 q5.5 -2 11 0 M82 76 q5.5 -2 11 0 M98 84 q5 -2 9.5 1',
      role: 'soft',
    },
    {
      d: 'M100 116 l7 -5 M100 128 l8 -5 M100 140 l8 -5 M98 152 l8 -5',
      role: 'ambient',
    },
    {
      d: 'M64 138 C62 126 60 116 58 108 M84 136 C84 124 86 114 88 106',
      role: 'soft',
    },
  ],

  // Killua's skateboard, deck in the record's tint and the trucks beneath
  // it: he rides it through the exam tunnel in episode 4 and chapter 6.
  // No arrow or lettering is drawn on the deck.
  'killua': [
    {
      d: 'M28 143 C18 135 24 121 36 105 L94 32 C105 18 121 20 128 31 C135 42 129 55 119 68 L61 141 C50 154 37 151 28 143 Z',
      role: 'accent',
    },
    {
      d: 'M28 143 L31 151 C41 159 54 160 65 146 L123 73 C134 59 140 45 133 34 L128 31',
    },
    { d: 'M36 137 L113 40', role: 'soft' },
    {
      d: 'M30 126 C33 134 43 140 52 139 M101 33 C109 31 119 35 123 42',
      role: 'soft',
    },
    { d: 'M47 146 L63 154 M104 73 L120 81' },
    { d: 'M54 149 L48 157 M111 76 L106 84', role: 'soft' },
    { d: ellipse(47, 162, 6, 9) },
    { d: ellipse(66, 153, 6, 9) },
    { d: ellipse(104, 89, 6, 9) },
    { d: ellipse(123, 80, 6, 9) },
    { d: 'M32 149 l4 -3 M39 154 l4 -3 M46 155 l4 -3', role: 'ambient' },
    shadow(78, 186, 49),
  ],

  // Satotz's red tie, knotted at the collar of his dark coat: what he wears
  // through the whole exam from episode 3 and chapter 6. Neither his face
  // nor his moustache is part of the drawing.
  'satotz': [
    { d: ellipse(80, 46, 16, 5) },
    { d: 'M64 47 L70 70 L80 60 L90 70 L96 47', role: 'soft' },
    {
      d: 'M64 48 C48 52 34 58 29 70 L25 150 H135 L131 70 C126 58 112 52 96 48',
    },
    { d: 'M65 52 L52 86 L64 90 L80 132 L96 90 L108 86 L95 52' },
    {
      d: 'M72 63 L88 63 L85 78 L75 78 Z M88 63 L92 67 L89 77 L85 78',
      role: 'accent',
    },
    { d: 'M75 78 L68 116 L78 128 L90 114 L85 78', role: 'accent' },
    { d: 'M85 78 L89 80 L94 110 L90 114', role: 'soft' },
    { d: 'M38 68 L41 150 M122 68 L119 150', role: 'soft' },
    {
      d: 'M98 96 l5 -6 M101 106 l6 -7 M104 116 l6 -7 M108 125 l6 -6',
      role: 'ambient',
    },
    {
      d: 'M123 86 l6 -5 M122 102 l7 -5 M122 118 l7 -5 M121 134 l7 -5',
      role: 'ambient',
    },
    {
      d: dots([
        [80, 140],
        [80, 147],
      ]),
      role: 'soft',
    },
    shadow(80, 158, 54),
  ],

  // Hanzo's red bandana, knotted into a loop as he wears it at his neck,
  // seen from its knot in three-quarter view: the cloth band with its
  // folds, the inside of the loop hatched, the knot and its two pointed
  // tails in the record's tint. His exam clothes in episode 3 and
  // chapter 6. His hidden blade is first shown in episode 19 and chapter
  // 34, after his threshold, so it is not drawn.
  'hanzo': [
    { d: 'M40.4 83.8 A42 22 -8 1 0 123.6 72.2 A42 22 -8 1 0 40.4 83.8' },
    { d: 'M40.4 83.8 V92 A42 22 -8 0 0 123.6 80.4 V72.2' },
    {
      d: 'M52.3 78.2 A30 13 -8 1 1 111.7 69.8 A30 13 -8 1 1 52.3 78.2',
      role: 'soft',
    },
    { d: 'M60 67 l2 6 M72 63 l2 6 M86 62 l2 6 M100 63 l1 6', role: 'ambient' },
    { d: 'M48 92 q4 -4 2 -10 M112 90 q-3 -4 0 -10', role: 'soft' },
    { d: 'M74 98 L92 94 L98 106 L86 115 L74 109 Z', role: 'accent' },
    {
      d: 'M76 109 C66 124 52 138 34 152 C52 150 68 138 84 115 M92 108 C104 124 116 140 134 156 C118 152 102 138 90 113',
      role: 'accent',
    },
    { d: 'M72 124 L52 144 M98 126 L118 148', role: 'soft' },
    { d: 'M80 101 l8 8', role: 'soft' },
    shadow(82, 178, 56),
  ],

  // Nicholas's notebook computer, open on its hinge, the empty screen in
  // the record's tint: he looks up Tonpa in episode 3 and chapter 6.
  // No names, numbers or keys with lettering reach the drawing.
  'nicholas': [
    { d: 'M38 43 L121 54 L112 119 L28 109 Z' },
    {
      d: 'M121 54 L127 51 L118 116 L112 119 M38 43 L44 40 L127 51',
      role: 'soft',
    },
    { d: 'M45 53 L112 62 L105 108 L38 100 Z', role: 'accent' },
    { d: 'M28 109 L112 119 L139 154 L51 143 Z' },
    { d: 'M51 143 V149 L139 160 V154 M28 109 V115 L51 149' },
    { d: 'M42 117 L107 125 L119 141 L53 133 Z', role: 'soft' },
    { d: 'M49 121 L109 129 M53 127 L113 135', role: 'soft' },
    { d: 'M60 119 L72 134 M76 121 L88 136 M92 123 L104 138', role: 'soft' },
    { d: 'M74 140 L97 143 L101 149 L78 146 Z', role: 'soft' },
    { d: 'M117 152 l8 1 M129 154 l5 0.7', role: 'ambient' },
    shadow(83, 177, 56),
  ],

  // The top knots on the crown of Menchi's head, seen from behind, each tied
  // with pink rope, the middle one's loose end hanging: her look at the
  // Second Phase gate in episode 6 and chapter 10. No face, and none of the
  // knives she draws in chapter 12.
  'menchi': [
    { d: 'M8 168 C20 124 50 104 80 102 C112 104 142 124 152 168' },
    {
      d: 'M70 96 C62 80 62 60 74 46 C80 38 92 34 102 36 C94 42 90 50 92 56 C102 50 114 50 122 56 C110 60 102 68 98 76 C102 82 96 92 90 96',
    },
    { d: 'M76 94 C72 78 76 62 88 50 M86 94 C88 84 94 74 104 66', role: 'soft' },
    {
      d: `${ellipse(80, 96, 11, 3.3)} ${ellipse(80, 102.6, 11.3, 3.5)} ${ellipse(80, 109.2, 11.7, 3.6)}`,
      role: 'accent',
    },
    {
      d: 'M91 108 C100 112 104 122 100 132 M91 110 C96 118 95 126 90 134',
      role: 'accent',
    },
    {
      d: 'M24 130 C14 118 12 100 20 88 C26 96 30 102 30 110 C32 98 38 90 46 86 C46 98 42 110 36 120',
    },
    {
      d: `${ellipse(31, 124, 8, 2.4)} ${ellipse(31, 129, 8.3, 2.5)}`,
      role: 'accent',
    },
    {
      d: 'M128 116 C130 102 138 92 148 86 C148 96 144 104 140 110 C148 104 154 104 158 106 C154 114 148 120 142 124',
    },
    {
      d: `${ellipse(135, 121, 7, 2.2)} ${ellipse(135, 125.5, 7.3, 2.3)}`,
      role: 'accent',
    },
    { d: 'M100 150 C98 136 94 124 90 116', role: 'soft' },
    { d: 'M136 140 l7 -4 M140 152 l8 -4 M143 163 l7 -4', role: 'ambient' },
  ],

  // A whole roast pig lying on its platter, the crackled back in the
  // record's tint: the dish Buhara asks the applicants to cook in episode 6
  // and chapter 10. The head is a plain silhouette, with no face drawn.
  'buhara': [
    { d: ellipse(80, 142, 64, 14) },
    { d: 'M16 142 V145 C20 158 140 158 144 145 V142', role: 'soft' },
    { d: 'M30 96 C40 82 62 76 86 76 C110 76 128 84 134 100', role: 'accent' },
    {
      d: 'M30 96 C26 100 22 104 20 110 V122 C24 126 30 128 36 128 C38 134 44 138 52 140 H112 C126 138 136 128 136 114 C136 108 136 104 134 100',
    },
    { d: 'M20 110 C22 114 22 118 20 122', role: 'soft' },
    { d: 'M38 90 L34 74 L50 84', role: 'soft' },
    { d: 'M66 79 L69 87 M88 77 L88 85 M110 80 L107 88', role: 'soft' },
    { d: 'M136 104 c7 -4 11 2 7 6 c-4 3 -8 -1 -4 -4', role: 'soft' },
    {
      d: 'M44 104 C46 116 54 126 66 130 M102 132 C110 128 114 120 114 112',
      role: 'soft',
    },
    {
      d: 'M58 138 l5 -6 M76 139 l5 -6 M94 139 l5 -6 M120 134 l5 -5',
      role: 'ambient',
    },
    shadow(80, 162, 60),
  ],

  // One of Netero's single-tooth geta, the thong in the record's tint and
  // the one tooth standing under the sole: his footwear when he drops in on
  // the Second Phase in episode 6 and chapter 12. No ball from the next
  // episode.
  'netero': [
    { d: 'M28 100 L110 70 L136 92 L54 122 Z' },
    { d: 'M28 100 V110 L54 132 L136 102 V92 M54 122 V132' },
    { d: 'M62.4 128.9 V137.4 L88.4 159.4 V119.4' },
    { d: 'M88.4 159.4 L101.6 154.6 V114.6', role: 'soft' },
    { d: 'M66 136 l14 -10 M68 145 l18 -13 M76 150 l11 -8', role: 'ambient' },
    {
      d: 'M61.8 88.9 Q86.7 75 111.5 85.2 M85.8 109.1 Q98.7 85 111.5 85.2',
      role: 'accent',
    },
    {
      d: 'M64 92.5 Q87 80 108.5 88 M90 108.5 Q100 90 109.5 88.2',
      role: 'soft',
    },
    { d: `M41.2 106.2 L56 100.8 ${dot(111.5, 85.2)}`, role: 'soft' },
    { d: 'M34 109 l6 4 M118 104 l8 -3', role: 'ambient' },
    shadow(82, 163, 44),
  ],

  // Zaban's small exam-site restaurant beside the much taller building:
  // the Kiriko points out the real entrance in episode 3 and chapter 5.
  // Door and awning carry no sign or writing.
  'zaban-city': [
    { d: 'M101 150 V32 H137 V150 M137 32 L151 24 V143 L137 150' },
    { d: 'M101 32 L115 24 H151', role: 'soft' },
    {
      d: 'M108 45 h7 v9 h-7 Z M123 45 h7 v9 h-7 Z M108 65 h7 v9 h-7 Z M123 65 h7 v9 h-7 Z M108 85 h7 v9 h-7 Z M123 85 h7 v9 h-7 Z',
      role: 'soft',
    },
    {
      d: 'M143 42 l5 -3 M143 57 l5 -3 M143 72 l5 -3 M143 87 l5 -3 M143 102 l5 -3 M143 117 l5 -3',
      role: 'ambient',
    },
    { d: 'M17 150 V104 H87 V150 M17 104 L30 96 H99 L87 104' },
    { d: 'M87 150 L99 142 V96', role: 'soft' },
    { d: 'M12 117 L20 106 H83 L91 117 Z', role: 'accent' },
    { d: 'M12 117 V124 H91 V117', role: 'soft' },
    { d: 'M26 150 V129 H46 V150 M57 131 H77 V141 H57 Z' },
    { d: 'M50 107 V116 M68 107 V116 M32 107 V116', role: 'soft' },
    { d: 'M4 150 H156', role: 'ambient' },
    shadow(80, 158, 62),
  ],

  // The tunnel's exit cut in the rock and the wetland's trees in the fog
  // beyond: what the applicants see when they climb out to daylight in
  // episode 4 and chapter 7. None of the creatures met on the run is drawn.
  'milsy-wetlands': [
    {
      d: 'M4 150 V76 L12 62 L24 60 L32 48 L46 46 L56 56 L64 60 L66 78 L72 150',
    },
    { d: 'M20 150 V112 C20 100 46 100 46 112 V150', role: 'accent' },
    { d: 'M46 112 C44 108 40 107 38 108 V150', role: 'soft' },
    { d: 'M24 120 l8 -6 M24 134 l12 -10 M24 148 l14 -12', role: 'ambient' },
    { d: 'M54 66 l7 7 M57 84 l8 8 M58 102 l9 9 M60 120 l8 8', role: 'ambient' },
    {
      d: 'M98 150 C102 128 94 110 100 90 C104 76 98 62 104 48 M110 150 C110 128 108 110 114 92 C118 78 114 64 118 50',
    },
    {
      d: 'M100 90 C90 82 82 78 76 86 M114 92 L130 78 C136 72 142 74 144 82',
      role: 'soft',
    },
    { d: 'M84 150 L85 120 L82 110 M142 150 L143 132', role: 'ambient' },
    {
      d: 'M118 106 C128 102 140 106 156 102 M120 126 C132 122 144 126 156 122 M70 108 C78 104 86 106 94 104 M72 128 C78 124 86 128 94 126',
      role: 'ambient',
    },
    { d: 'M76 150 L74 138 M90 150 L91 136 M124 150 L127 140', role: 'soft' },
    { d: 'M4 150 H156', role: 'ambient' },
    {
      d: 'M78 162 Q98 157 118 162 M112 171 Q130 166 150 171',
      role: 'ambient',
      dashed: true,
    },
    shadow(36, 154, 34),
  ],

  // The cooking mansion and forest at Visca, its open gate in the record's
  // tint: the second-phase site in episode 6 and chapter 10. The forest's
  // later meal and the mountain retest are absent.
  'visca-forest-preserve': [
    { d: 'M38 146 V89 H119 V146 M38 89 L77 64 L119 89' },
    { d: 'M119 146 L137 135 V85 L119 89 M77 64 L95 59 L137 85', role: 'soft' },
    { d: 'M45 103 H61 V117 H45 Z M96 103 H112 V117 H96 Z' },
    { d: 'M69 146 V113 H88 V146 M77 78 V91', role: 'soft' },
    { d: 'M8 147 V106 H21 V147 M143 147 V106 H155 V147' },
    {
      d: 'M21 116 L40 124 V151 L21 143 M143 116 L124 124 V151 L143 143',
      role: 'accent',
    },
    {
      d: 'M27 121 V146 M33 124 V148 M137 121 V146 M131 124 V148',
      role: 'soft',
    },
    {
      d: 'M6 103 L21 78 L13 79 L27 52 L42 78 L33 77 L41 94 M130 80 L142 55 L156 85 L148 83 L159 105',
      role: 'ambient',
    },
    { d: 'M129 104 l5 -3 M129 115 l5 -3 M129 126 l5 -3', role: 'ambient' },
    { d: 'M4 150 H156', role: 'ambient' },
    shadow(80, 158, 62),
  ],

  // Split Mountain's two halves with the ravine between them, the spider
  // eagles' web strung across it and their eggs in the record's tint: the
  // retest in episode 6 and chapter 12. No bird is drawn.
  'split-mountain': [
    { d: 'M4 150 L30 84 L52 32 L58 66 L52 104 L56 150' },
    { d: 'M108 30 L130 86 L156 150 M108 30 L104 70 L110 108 L104 150' },
    { d: 'M52 32 L64 46 V150 M108 30 L96 46 V150', role: 'soft' },
    {
      d: 'M56 62 l7 7 M54 86 l9 9 M54 110 l9 9 M56 132 l8 8 M103 62 l-6 6 M106 88 l-9 9 M108 114 l-11 11 M104 134 l-7 7',
      role: 'ambient',
    },
    { d: 'M18 130 l8 -4 M28 108 l10 -5 M128 112 l8 4', role: 'ambient' },
    {
      d: 'M58 74 Q80 88 102 72 M56 100 Q80 114 104 98 M70 62 L74 108 M90 60 L86 108',
      role: 'soft',
    },
    { d: 'M73 92 V96 M86 104 V114 M78 108 V122', role: 'soft' },
    {
      d: `${ellipse(73, 103, 6, 7.5)} ${ellipse(86, 122, 6, 7.5)} ${ellipse(78, 131, 6, 7.5)}`,
      role: 'accent',
    },
    { d: 'M4 150 H56 M104 150 H156', role: 'ambient' },
    shadow(80, 156, 64),
  ],
} satisfies Drawings

/**
 * The id of a Hunter x Hunter drawing, derived from the drawings themselves,
 * so a record cannot point at a drawing that does not exist.
 */
export type ArtId = keyof typeof DRAWINGS

export const REDRAWINGS: Redrawings = zevilRedrawn
