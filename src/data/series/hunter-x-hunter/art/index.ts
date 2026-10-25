import type { Drawings } from '~/data/art/stroke'
import { circle, dot, ellipse, SEA, shadow, wave } from '~/lib/svg/primitives'

/**
 * Every Hunter x Hunter line drawing, one per record, keyed by the record's
 * id, in the house style of One Piece's (`~/data/series/one-piece/art`): the
 * same box, pen and rules. For now the arcs alone; the characters and places
 * of the Hunter Exam come with their records (#760, #761).
 *
 * `satisfies` rather than an annotation, so `ArtId` below stays the literal
 * ids and a record cannot name a drawing that is not here.
 */
export const DRAWINGS = {
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
} satisfies Drawings

/**
 * The id of a Hunter x Hunter drawing, derived from the drawings themselves,
 * so a record cannot point at a drawing that does not exist.
 */
export type ArtId = keyof typeof DRAWINGS
