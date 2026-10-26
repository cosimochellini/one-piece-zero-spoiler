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
import { TRICK_TOWER_DRAWINGS } from './trick-tower'
import { zevilArt, zevilRedrawn } from './zevil'
import { FINAL_PHASE_DRAWINGS } from './final-phase'

/**
 * One of Kurapika's two wooden swords, grip down to the left and point up
 * to the right: the grip in the record's tint, its wrap, the blade and its
 * ridge. The second is the same sword mirrored across the box.
 */
const BOKKEN: Stroke[] = [
  { d: 'M31.5 176.4 L56.3 137 L61.4 140.2 L36.5 179.6 Z', role: 'accent' },
  {
    d: 'M35.1 170.6 L43 169.4 M39.7 163.3 L47.6 162.1 M44.3 156 L52.2 154.8 M48.9 148.7 L56.8 147.5',
    role: 'soft',
  },
  {
    d: 'M56.3 137 L118.6 38.4 Q122 33 126 32 M61.4 140.2 L124 41 Q126 36 126 32',
  },
  { d: 'M62.4 134.7 L118.9 43.8', role: 'soft' },
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

  // Gon's fishing rod, held at the cork grip, the reel under it in the
  // record's tint with its handle, the line run out from the tip to a float
  // and a hook over rings of water: he sits in a tree over the swamp with it
  // in episode 1 and chapter 1, and strikes the Kiriko with it in chapter 4.
  'gon-freecss': [
    { d: 'M32 174 L38 178 L64 148 L58 144 Z' },
    { d: 'M38 166 l5 3.6 M44 159 l5 3.6 M50 152 l5 3.6', role: 'ambient' },
    { d: 'M58 144 L136 24 M64 148 L136 24' },
    { d: 'M86 106 l5 3 M106 76 l4.5 2.6 M124 47 l3.6 2', role: 'soft' },
    { d: 'M66 151 L72 156', role: 'soft' },
    { d: circle(76, 164, 12), role: 'accent' },
    { d: circle(76, 164, 4.5), role: 'soft' },
    { d: `M76 164 L92 172 ${dot(94, 173)}` },
    { d: 'M136 24 C142 52 140 82 134 104' },
    { d: `${ellipse(133.5, 112, 4, 8)} M129.5 112 H137.5` },
    { d: 'M133.5 120 V128 q0 6 -5 6 q-4 0 -4 -4' },
    { d: 'M112 142 q10 -5 21 0 q11 5 21 0', role: 'ambient' },
    { d: 'M118 152 q7 -3.5 15 0 q8 3.5 15 0', role: 'ambient' },
    shadow(66, 188, 36),
  ],

  // The form for the Hunter Exam on a table, a card with its blank
  // fields and the line Mito signs on, and her pen across it in the
  // record's tint, its nib at the line: catching the fish was the deal, and
  // she signs in episode 1 and chapter 1. No writing on the card.
  'mito-freecss': [
    { d: 'M24 124 L108 106 L136 140 L52 160 Z' },
    { d: 'M24 124 V128 L52 164 L136 144 V140' },
    { d: 'M30 129.6 l2 2.6 M38 139.8 l2 2.6 M46 150 l2 2.6', role: 'ambient' },
    {
      d: 'M40.8 133 L91.2 122.2 M46.4 140.2 L96.8 129.4 M52 147.4 L80 141.4',
      role: 'soft',
    },
    { d: 'M86 145.6 L120 138.4', role: 'soft' },
    { d: 'M36 120 L52 116.6 L56 122 L40 125.4 Z', role: 'soft' },
    {
      d: 'M64 92 L114 129.5 M61.6 95.2 L111.6 132.7 M64 92 L61.6 95.2',
      role: 'accent',
    },
    { d: 'M114 129.5 L122 137.6 L111.6 132.7' },
    { d: 'M70 95.5 L84 106 L82.6 108', role: 'soft' },
    shadow(80, 174, 58),
  ],

  // Leorio's briefcase in three-quarter view, standing on its base: the
  // front with its seam and two clasps, the lid's top, the far end hatched,
  // and the handle in the record's tint. He carries it aboard the ship in
  // episode 1 and chapter 2.
  'leorio-paradinight': [
    { d: 'M28 118 H106 V178 H28 Z' },
    { d: 'M28 118 L46 106 H124 L106 118' },
    { d: 'M106 178 L124 166 V106' },
    {
      d: 'M110 128 l10 -6.7 M110 140 l10 -6.7 M110 152 l10 -6.7 M110 164 l10 -6.7',
      role: 'ambient',
    },
    {
      d: 'M64 113 C62 96 90 94 88 111 M68 113 C67 102 85 101 84 111',
      role: 'accent',
    },
    { d: 'M60 114 h8 M84 112 h8', role: 'soft' },
    { d: 'M28 130 H106 L124 118', role: 'soft' },
    { d: 'M40 125 h8 v10 h-8 Z M86 125 h8 v10 h-8 Z' },
    { d: 'M28 172 H106', role: 'soft' },
    shadow(78, 186, 54),
  ],

  // Kurapika's two wooden swords crossed, their grips in the record's tint:
  // he draws them for the duel with Leorio on the deck in episode 1 and
  // chapter 2.
  'kurapika': [
    ...BOKKEN,
    ...BOKKEN.map((stroke) => ({ ...stroke, transform: MIRRORED })),
    shadow(80, 188, 54),
  ],

  // A coil of deck rope in the record's tint, its end run up to a belaying
  // pin in the ship's rail: the crewman working the deck in the storm that
  // throws him over the side, in episode 1 and chapter 2.
  'katzo': [
    { d: 'M14 70 H150' },
    { d: 'M14 78 H150', role: 'soft' },
    { d: 'M24 78 V126 M136 78 V126' },
    { d: 'M4 126 H156', role: 'ambient' },
    { d: 'M110 60 V90 M106 64 h8', role: 'soft' },
    { d: 'M110 74 C120 70 120 82 110 78 C100 74 100 86 110 82', role: 'soft' },
    { d: 'M110 88 C114 108 104 128 92 142' },
    {
      d: `${ellipse(72, 172, 46, 12)} ${ellipse(72, 146, 30, 8)}`,
      role: 'accent',
    },
    {
      d: 'M28 166 C32 152 112 152 116 166 M34 158 C38 146 106 146 110 158',
      role: 'soft',
    },
    { d: 'M54 146 l6 -4 M66 148 l8 -5 M80 148 l6 -4', role: 'ambient' },
    shadow(72, 190, 50),
  ],

  // A Kiriko's arm raised under a full moon, the feathers of the wing it
  // grows from the arm to fly hanging below it, its three long fingers
  // ending in claws in the record's tint: the navigators fly Gon, Kurapika
  // and Leorio to the exam by moonlight in episode 2 and chapter 4.
  'kiriko': [
    { d: circle(40, 40, 20), role: 'ambient' },
    { d: 'M4 134 C30 116 62 94 90 72 M12 148 C38 130 70 106 100 82' },
    {
      d: 'M20 124 l-2 -6 M38 112 l-2 -6 M56 100 l-2 -6 M74 88 l-2 -6',
      role: 'soft',
    },
    {
      d: 'M90 72 C94 58 100 46 106 36 M96 76 C106 64 118 56 130 50 M100 82 C114 78 128 78 140 80',
    },
    {
      d: 'M106 36 C110 26 106 18 98 16 M130 50 C138 42 136 32 128 30 M140 80 C150 74 150 64 142 60',
      role: 'accent',
    },
    {
      d: 'M20 142 C20 160 26 176 34 184 C38 172 36 154 30 136 M36 132 C38 152 46 168 56 176 C58 162 54 144 46 126 M52 122 C56 140 64 154 74 162 C74 148 70 132 62 116 M68 110 C74 126 82 138 92 144 C90 132 84 116 78 104',
    },
    {
      d: 'M24 148 l4 20 M40 140 l6 18 M56 130 l7 16 M72 118 l8 14',
      role: 'soft',
    },
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

  // Hisoka's stacked wrist bands, the upper rim in the record's tint,
  // seen as a hollow cloth cuff: the initial outfit in episode 3 and
  // chapter 5. The 2011 cuff is checked against NTV's initial character
  // design; the manga scene is not viewed. No card, face or suit symbol.
  'hisoka': [
    { d: ellipse(80, 87, 36, 14), role: 'accent' },
    { d: ellipse(80, 87, 27, 9), role: 'soft' },
    { d: 'M44 87 V137 C44 156 116 156 116 137 V87' },
    { d: 'M44 103 C44 121 116 121 116 103' },
    { d: 'M44 119 C44 137 116 137 116 119' },
    { d: 'M44 135 C44 153 116 153 116 135', role: 'soft' },
    { d: 'M53 94 C61 101 92 103 105 95', role: 'soft' },
    { d: 'M49 105 l6 5 M49 121 l6 5 M50 137 l6 5', role: 'ambient' },
    { d: 'M106 107 l6 -4 M106 123 l6 -4 M106 139 l6 -4', role: 'ambient' },
    {
      d: 'M63 111 l-2 4 M84 115 l1 4 M69 131 l-1 4 M92 129 l2 4',
      role: 'soft',
    },
    shadow(80, 180, 44),
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

  // Satotz's tie over the collar of his dark coat, the knot and hanging
  // silk in the record's tint: his exam clothes in episode 3 and chapter 6.
  // Neither his face nor his moustache is part of the drawing.
  'satotz': [
    { d: 'M32 91 L61 67 L80 82 L99 67 L129 91 L119 154 H42 Z' },
    { d: 'M61 67 L51 105 L74 90 M99 67 L109 105 L86 90', role: 'soft' },
    { d: 'M72 85 L87 84 L91 95 L80 104 L70 95 Z', role: 'accent' },
    { d: 'M77 103 L65 147 L78 163 L92 146 L84 103', role: 'accent' },
    { d: 'M82 108 L84 145 L78 154', role: 'soft' },
    {
      d: 'M56 109 L44 119 L60 123 L51 154 M104 109 L116 119 L100 123 L109 154',
    },
    {
      d: 'M38 99 l6 5 M36 112 l6 5 M36 125 l6 5 M38 138 l6 5',
      role: 'ambient',
    },
    {
      d: 'M116 100 l6 -5 M118 112 l6 -5 M116 126 l6 -5 M114 139 l6 -5',
      role: 'ambient',
    },
    { d: 'M93 140 L103 140', role: 'soft' },
    shadow(80, 184, 50),
  ],

  // Hanzo's neck scarf, its loose tails in the record's tint, with the
  // bandages he wears at his wrists: his exam clothes in episode 3 and
  // chapter 6. No hidden blade, first shown much later, is drawn.
  'hanzo': [
    {
      d: 'M45 80 C45 64 101 58 113 75 C120 90 105 104 80 106 C59 108 43 97 45 80 Z',
    },
    { d: 'M45 80 C55 91 92 93 113 75', role: 'soft' },
    { d: 'M50 75 C63 68 94 68 106 75', role: 'soft' },
    { d: 'M75 99 L91 94 L103 108 L90 119 L75 111 Z' },
    {
      d: 'M91 116 C105 123 116 140 132 154 L114 157 L115 167 C97 155 85 136 83 119',
      role: 'accent',
    },
    {
      d: 'M77 108 C61 116 54 134 35 144 L43 152 L35 158 C58 151 77 133 82 118',
      role: 'accent',
    },
    { d: 'M96 125 L115 149 M73 119 L49 144', role: 'soft' },
    { d: ellipse(51, 166, 16, 6) },
    { d: 'M35 166 V178 C35 185 67 185 67 178 V166' },
    { d: 'M36 172 L65 178 M39 180 L65 169', role: 'soft' },
    { d: 'M48 94 l3 4 M57 98 l3 4 M105 91 l-3 5', role: 'ambient' },
    shadow(82, 191, 52),
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

  // The pink rope ties around Menchi's five top knots, loose coils and
  // their ends: her first exam appearance in episode 6 and chapter 10.
  // No hair, face, knives shown in chapter 12 or later ability is drawn.
  'menchi': [
    { d: 'M27 97 C16 81 37 64 51 79 C62 93 43 113 27 97 Z' },
    { d: 'M31 94 C24 84 36 75 44 84 C51 94 40 102 31 94', role: 'soft' },
    { d: 'M55 76 C49 57 75 49 84 66 C92 84 63 95 55 76 Z' },
    { d: 'M61 74 C57 64 71 59 77 69 C82 79 67 85 61 74', role: 'soft' },
    { d: 'M92 80 C85 62 109 51 120 68 C132 86 104 101 92 80 Z' },
    { d: 'M98 78 C93 68 107 61 114 72 C121 83 105 91 98 78', role: 'soft' },
    { d: 'M112 119 C101 103 120 88 134 102 C148 117 130 134 112 119 Z' },
    {
      d: 'M117 117 C111 108 122 99 129 108 C136 116 127 125 117 117',
      role: 'soft',
    },
    {
      d: 'M40 123 C27 101 55 85 78 97 C104 111 88 143 62 140 C51 139 43 133 40 123 Z',
      role: 'accent',
    },
    {
      d: 'M47 120 C40 105 56 96 73 105 C89 114 80 133 64 132 C56 131 49 127 47 120',
      role: 'soft',
    },
    { d: 'M57 139 L66 130 L77 139 L67 147 Z M64 140 L69 138', role: 'accent' },
    {
      d: 'M63 146 C51 156 43 154 32 163 M67 149 C60 164 72 174 61 183 M76 140 C97 145 98 168 114 170',
      role: 'accent',
    },
    {
      d: 'M35 101 l4 -3 M61 86 l3 -4 M115 91 l4 -4 M137 121 l-4 -3',
      role: 'ambient',
    },
    shadow(80, 190, 56),
  ],

  // Buhara's roast-pork dish, the meat raised above the platter, its rim
  // in the record's tint: the meal he asks for in episode 6 and chapter 10.
  // No animal face, lettering or later utensil is drawn.
  'buhara': [
    { d: ellipse(80, 144, 61, 14), role: 'accent' },
    { d: 'M19 144 L27 154 C40 168 120 168 133 154 L141 144' },
    { d: 'M27 144 C37 155 123 155 133 144', role: 'soft' },
    {
      d: 'M38 139 C29 121 36 94 57 85 C73 79 104 86 117 102 C128 116 123 136 112 144',
    },
    { d: 'M47 134 C41 119 48 101 62 95 C80 88 104 98 111 111', role: 'soft' },
    { d: 'M56 89 L49 76 L55 71 L67 84 M105 91 L115 80 L122 85 L115 100' },
    {
      d: 'M46 117 C51 125 52 132 49 139 M60 104 C68 115 70 129 65 141 M78 99 C88 111 91 128 87 143 M98 103 C108 114 111 128 106 140',
      role: 'soft',
    },
    {
      d: 'M42 128 l7 -3 M56 137 l7 -3 M77 143 l7 -3 M98 141 l7 -3',
      role: 'ambient',
    },
    {
      d: 'M28 152 l6 3 M43 158 l6 2 M113 158 l6 -2 M127 153 l5 -3',
      role: 'ambient',
    },
    shadow(80, 184, 59),
  ],

  // Netero's single-tooth geta, the thong in the record's tint and the
  // raised wooden sole seen from above and the side: his footwear on his
  // arrival in episode 6 and chapter 12. No ball from the next episode.
  'netero': [
    {
      d: 'M34 117 L76 55 Q82 48 91 55 L124 77 Q131 83 125 91 L83 153 Q77 161 68 155 L36 133 Q28 127 34 117 Z',
    },
    { d: 'M34 117 V130 L68 169 Q77 175 84 165 L125 104 V91' },
    { d: 'M68 155 V169 M83 153 L84 165', role: 'soft' },
    { d: 'M51 108 L78 103 L94 127 M78 103 L89 78', role: 'accent' },
    { d: 'M52 113 L78 108 L91 130 M80 103 L93 80', role: 'soft' },
    { d: 'M76 158 L72 177 L94 188 L99 165 L108 148' },
    { d: 'M72 177 L84 159 M94 188 L107 168 L108 148', role: 'soft' },
    { d: 'M43 125 L66 144 M46 120 L69 139 M86 66 L116 86', role: 'soft' },
    {
      d: 'M40 136 l3 -4 M48 145 l3 -4 M57 155 l3 -4 M112 111 l5 -7',
      role: 'ambient',
    },
    shadow(78, 195, 49),
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

  // Milsy's fog among wetland trees, the near trunk in the record's tint:
  // the country outside the tunnel in episode 4 and chapter 7. No beast
  // from the later pursuit is introduced by the drawing.
  'milsy-wetlands': [
    {
      d: 'M27 149 C33 126 27 101 35 76 C40 61 37 45 41 30 M42 149 C43 120 39 102 46 81 C52 64 46 47 50 28',
      role: 'accent',
    },
    { d: 'M36 78 L19 59 L15 37 M44 89 L62 62 L68 40' },
    { d: 'M31 149 L17 153 M42 149 L56 153', role: 'soft' },
    { d: 'M103 150 L108 72 L104 41 M113 150 L117 72 L114 41' },
    { d: 'M110 81 L91 62 L84 38 M115 66 L134 47 L141 29', role: 'soft' },
    { d: 'M70 143 L72 98 L69 69 M78 143 L80 98 L84 64', role: 'ambient' },
    { d: 'M8 102 C34 93 50 108 72 102 C94 96 117 90 150 99', role: 'ambient' },
    {
      d: 'M7 123 C30 114 47 129 71 121 C97 112 122 125 151 117',
      role: 'ambient',
    },
    {
      d: 'M15 141 C42 133 66 145 90 138 C112 132 133 137 153 133',
      role: 'ambient',
    },
    { d: 'M5 150 H155', role: 'ambient' },
    { d: 'M14 164 Q33 158 52 164 M86 168 Q113 160 140 168', role: 'soft' },
    shadow(78, 156, 58),
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

  // Split Mountain's two cliffs above the ravine, the spider-eagle eggs
  // hanging on threads between them in the record's tint: the retest in
  // episode 6 and chapter 12. No bird's head or face is drawn.
  'split-mountain': [
    { d: 'M3 150 L17 81 L51 35 L65 39 L57 78 L62 113 L56 150' },
    { d: 'M102 150 L98 113 L105 78 L97 39 L111 35 L145 81 L157 150' },
    { d: 'M19 133 L33 88 L48 63 M119 68 L135 93 L144 132', role: 'soft' },
    {
      d: 'M43 97 L55 86 M35 117 L55 100 M29 137 L57 114 M108 91 L119 104 M106 107 L129 127 M105 125 L139 147',
      role: 'ambient',
    },
    { d: 'M58 75 Q80 100 103 75 M60 94 Q80 117 100 94', role: 'soft' },
    { d: 'M64 82 L73 111 M94 84 L88 119 M79 91 L80 137', role: 'soft' },
    {
      d: 'M68 121 C65 114 69 106 73 106 C78 106 82 114 78 121 C76 125 70 125 68 121 Z',
      role: 'accent',
    },
    {
      d: 'M84 131 C81 123 85 116 89 116 C94 117 97 124 93 131 C91 135 86 135 84 131 Z',
      role: 'accent',
    },
    {
      d: 'M75 149 C72 142 76 134 80 134 C85 134 89 142 85 149 C83 153 77 153 75 149 Z',
      role: 'accent',
    },
    { d: 'M5 150 H54 M105 150 H155', role: 'ambient' },
    shadow(80, 158, 59),
  ],
} satisfies Drawings

/**
 * The id of a Hunter x Hunter drawing, derived from the drawings themselves,
 * so a record cannot point at a drawing that does not exist.
 */
export type ArtId = keyof typeof DRAWINGS

export const REDRAWINGS: Redrawings = zevilRedrawn
