import {
  type Drawings,
  moved,
  type Redrawings,
  type Stroke,
} from '~/data/art/stroke'
import { circle, ellipse, shadow } from '~/lib/svg/primitives'

/**
 * Kastro's yellow cloak, hoodless and open down the front, falling from
 * both shoulders to below the knee: the outline in tint, its long folds,
 * and the inside of the far half hatched. His death lays this same cloak
 * on the floor of the ring.
 */
const KASTRO_CLOAK: Stroke[] = [
  {
    d: 'M64 32 C46 36 30 44 24 58 L12 166 C30 172 48 172 60 166 L62 40 M96 32 C114 36 130 44 136 58 L148 166 C130 172 112 172 100 166 L98 40',
    role: 'accent',
  },
  {
    d: 'M36 72 C34 104 30 136 26 166 M124 72 C126 104 130 136 134 166',
    role: 'soft',
  },
  {
    d: 'M104 60 l-4 6 M106 88 l-5 7 M107 116 l-5 7 M108 144 l-5 7',
    role: 'ambient',
  },
]

/**
 * The neck of Kastro's white robe under the cloak: the collar, and the left
 * side crossing over the right. Both his drawings keep it.
 */
const KASTRO_COLLAR: Stroke[] = [
  { d: 'M64 32 Q80 40 96 32' },
  { d: 'M64 32 L92 98 M96 32 L80 66', role: 'soft' },
]

/**
 * The Heavens Arena records (#896), each at its named scene, graded and
 * redrawn in #897.
 */
export const HEAVENS_ARENA_DRAWINGS = {
  // Zushi's karate gi from the front, the black turtleneck hatched in the
  // V of its crossed lapels, the cuffs seen open, and the red belt with its
  // knot in tint: the Shingen-ryu pupil who bows and gives his name on the
  // 50th floor, episode 27 / chapter 45.
  'zushi': [
    {
      d: 'M62 40 L30 54 L14 102 M34 110 L46 80 L46 158 H114 L114 80 L126 110 M146 102 L130 54 L98 40',
    },
    { d: 'M14 102 A10.8 4 20 1 0 34 110 A10.8 4 20 1 0 14 102' },
    { d: 'M146 102 A10.8 4 -20 1 1 126 110 A10.8 4 -20 1 1 146 102' },
    { d: `${ellipse(80, 38, 14, 4)} M66 38 V44 M94 38 V44`, role: 'soft' },
    { d: 'M62 40 L94 116 M98 40 L82 78 M70 40 L98 106', role: 'soft' },
    {
      d: 'M71 48 L76 44 M73 56 L82 48 M77 64 L86 56 M81 72 L89 64 M70 44 l3 -3 M88 46 l4 -3',
      role: 'ambient',
    },
    { d: 'M46 116 H114 V126 H46 Z', role: 'accent' },
    {
      d: 'M74 114 L86 114 L88 128 L72 128 Z M76 128 L68 150 M84 128 L94 150',
      role: 'accent',
    },
    { d: 'M100 126 L102 158 M36 76 l4 10 M124 76 l-4 10', role: 'soft' },
    {
      d: 'M104 134 l7 -5 M104 146 l7 -5 M104 92 l7 -5 M104 104 l7 -5',
      role: 'ambient',
    },
    shadow(80, 176, 46),
  ],
  // Wing's shirt with its tail hanging out over the belt on one side, the
  // loose tail in tint, the other side tucked in: Zushi points out the
  // shirttail as his teacher arrives and gives his name, episode 27 /
  // chapter 45. No glasses or face.
  'wing': [
    { d: 'M64 34 L72 50 L80 42 L88 50 L96 34 Q80 40 64 34' },
    {
      d: 'M64 34 L34 46 L22 112 M36 116 L44 74 L46 114 M96 34 L126 46 L138 112 M124 116 L116 74 L114 120',
    },
    {
      d: 'M22 112 L36 116 L37 122 L23 118 Z M138 112 L124 116 L123 122 L137 118 Z',
      role: 'soft',
    },
    {
      d: 'M80 42 V114 M80 56 h0.01 M80 72 h0.01 M80 88 h0.01 M80 104 h0.01',
      role: 'soft',
    },
    { d: 'M80 120 H114 V130 H80 M84 118 h10 v14 h-10' },
    {
      d: 'M46 112 C42 130 44 146 48 158 C58 152 70 154 80 160 V114',
      role: 'accent',
    },
    {
      d: 'M90 108 l3 10 M102 106 l2 12 M58 124 l-3 24 M68 122 l-1 26',
      role: 'soft',
    },
    { d: 'M48 158 L46 186 M114 130 L116 186 M82 160 L82 186' },
    {
      d: 'M100 140 l8 -5 M102 152 l8 -5 M104 164 l8 -5 M106 64 l7 -5 M106 80 l7 -5',
      role: 'ambient',
    },
    shadow(82, 192, 40),
  ],
  // One of Gido's spinning tops on its point, seen a little from above, the
  // band round its widest part in tint and the turn drawn as open lines; his
  // wooden cane lies behind it and a second top has fallen on its side: the
  // tops he spins along his cane in Gon's first 200th-floor match, episode
  // 29 / chapter 49.
  'gido': [
    { d: 'M54 72 C54 60 106 60 106 72 C106 84 54 84 54 72 Z' },
    { d: 'M54 72 C54 92 64 112 76 130 L80 140 L84 130 C96 112 106 92 106 72' },
    {
      d: 'M55 88 C70 96 90 96 105 88 M58 96 C72 104 88 104 102 96',
      role: 'accent',
    },
    { d: `${ellipse(80, 66, 6, 2)} M74 66 V56 H86 V66`, role: 'soft' },
    { d: 'M62 80 Q62 96 70 112', role: 'soft' },
    { d: 'M96 106 l6 -6 M90 118 l6 -6 M100 92 l5 -5', role: 'ambient' },
    { d: 'M40 70 Q34 88 42 104 M120 70 Q126 88 118 104', role: 'ambient' },
    {
      d: 'M14 156 L146 128 M16 162 L148 134 M14 156 Q10 160 16 162 M146 128 C152 124 156 132 148 134',
    },
    {
      d: 'M112 150 C112 142 126 138 130 144 L142 160 L124 160 C118 160 112 156 112 150 Z M130 144 C134 150 128 158 124 160',
      role: 'soft',
    },
    shadow(80, 172, 50),
  ],
  // Sadaso's tunic from the front, his right sleeve round an arm and his
  // empty left sleeve hanging flat beside it in tint: the one-armed fighter
  // named before his match with Killua, episode 33 / chapter 57. No hand of
  // aura.
  'sadaso': [
    { d: `${ellipse(80, 30, 14, 4)} M66 30 V36 M94 30 V36` },
    { d: 'M66 34 L40 44 L26 118 M42 122 L48 74 L48 172 H114 V62' },
    { d: 'M26 118 A8 3.5 12 1 0 42 122 A8 3.5 12 1 0 26 118', role: 'soft' },
    {
      d: 'M94 34 L116 42 C122 70 124 104 120 140 L131 143 C134 108 132 74 124 46',
      role: 'accent',
    },
    { d: 'M122 64 C126 92 126 118 124 141 M118 136 L124 141', role: 'soft' },
    { d: 'M80 36 V172 M56 90 Q60 120 58 166 M38 66 l6 8', role: 'soft' },
    {
      d: 'M94 70 l8 -5 M94 94 l8 -5 M94 118 l8 -5 M94 142 l8 -5 M94 164 l8 -5',
      role: 'ambient',
    },
    shadow(84, 184, 46),
  ],
  // Riehlvelt's wheelchair side on, facing right, the hand rim of its big
  // wheel in tint, and the handles of his two whips standing in their holder
  // at the back with the lashes coiled: the chair he fights from against
  // Killua, episode 34 / chapter 59. No switch is shown thrown.
  'riehlvelt': [
    { d: ellipse(62, 112, 34, 36) },
    { d: ellipse(62, 112, 27, 29), role: 'accent' },
    {
      d: `M62 83 V141 M35 112 H89 M43 92 L81 132 M81 92 L43 132 ${circle(62, 112, 4)}`,
      role: 'soft',
    },
    { d: 'M92 94 A34 36 0 0 1 102 136', role: 'soft' },
    { d: 'M40 94 H112 L124 86 H56 M40 94 L36 38 H24 M112 94 L124 132 H138' },
    { d: 'M38 66 H98 V94 M52 66 L50 40', role: 'soft' },
    { d: `${circle(128, 143, 7)} M128 136 L124 130`, role: 'soft' },
    {
      d: 'M26 96 V70 H34 V96 M27 70 L20 36 M33 70 L36 34 M21.5 44 l4 -1 M34 44 l4 1',
    },
    { d: `${ellipse(20, 34, 6, 3)} ${ellipse(36, 32, 6, 3)}`, role: 'soft' },
    { d: 'M41 50 l7 3 M42 60 l7 3 M44 80 l7 3', role: 'ambient' },
    { d: 'M4 150 H156', role: 'ambient' },
    shadow(80, 158, 56),
  ],
  // Kastro's cloak over the white robe, its black edging hatched: the
  // fighter who meets Hisoka again on the 200th floor, episode 31 /
  // chapter 52.
  'kastro': [
    ...KASTRO_COLLAR,
    {
      d: 'M70 32 L95 90 M72 40 l2 -2 M78 54 l2 -2 M84 68 l2 -2 M90 82 l2 -2',
      role: 'ambient',
    },
    { d: 'M62 160 H98 M80 98 L84 160', role: 'soft' },
    ...KASTRO_CLOAK,
    shadow(80, 182, 60),
  ],
  // One of the square stone rings in the arena's great hall, seen from a
  // corner: its top in tint with the flagstones laid on it, the far side
  // hatched, two more rings behind and the stands curving round: where Gon
  // and Killua fight their first matches, episode 27 / chapter 44. Not the
  // tower, which is the arc.
  'heavens-arena': [
    { d: 'M16 112 L80 92 L144 112 L80 132 Z', role: 'accent' },
    { d: 'M16 112 V122 L80 142 L144 122 V112 M80 132 V142' },
    {
      d: 'M37.3 105.3 L101.3 125.3 M58.7 98.7 L122.7 118.7 M37.3 118.7 L101.3 98.7 M58.7 125.3 L122.7 105.3',
      role: 'soft',
    },
    {
      d: 'M90 138 l5 -6 M106 133 l5 -6 M122 128 l5 -6 M136 124 l5 -6',
      role: 'ambient',
    },
    {
      d: 'M14 84 L40 76 L66 84 L40 92 Z M14 84 V88 L40 96 L66 88 V84',
      role: 'soft',
    },
    {
      d: 'M96 80 L122 72 L148 80 L122 88 Z M96 80 V84 L122 92 L148 84 V80',
      role: 'soft',
    },
    { d: 'M4 60 Q80 36 156 60 M4 48 Q80 24 156 48', role: 'ambient' },
    { d: 'M4 150 H156', role: 'ambient' },
    shadow(80, 158, 64),
  ],
} satisfies Drawings

/** The Heavens Arena drawings that change with the story: Kastro's death. */
export const heavensArenaRedrawn: Redrawings = {
  kastro: [
    // The same cloak and collar laid open on the flagstones of the ring,
    // empty: Hisoka's cards kill him at the end of their match, episode 32 /
    // chapter 54. No cards and no body are drawn.
    {
      episode: 32,
      chapter: 54,
      value: [
        ...moved(
          KASTRO_CLOAK,
          'translate(80 142) rotate(-6) scale(0.95 0.4) translate(-80 -100)',
        ),
        ...moved(
          KASTRO_COLLAR,
          'translate(80 136) rotate(-6) scale(0.95 0.4) translate(-80 -100)',
        ),
        {
          d: 'M4 176 L24 160 M44 176 L56 160 M86 176 L88 160 M126 176 L120 160 M156 172 L150 160',
          role: 'ambient',
        },
        { d: 'M4 160 H156', role: 'ambient', dashed: true },
      ],
    },
  ],
}
