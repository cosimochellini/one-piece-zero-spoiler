import type { Drawings } from '~/data/art/stroke'
import { circle, shadow } from '~/lib/svg/primitives'

/**
 * First drawings of the Heavens Arena records (#896), each at its named
 * scene; #897 grades them against the frames and adds their stages.
 */
export const HEAVENS_ARENA_DRAWINGS = {
  // Zushi's training jacket from the front, its crossed lapels and the belt
  // knotted at the waist in tint: the Shingen-ryu pupil who bows to Gon and
  // Killua on the way to the 50th floor, episode 27 / chapter 45.
  'zushi': [
    {
      d: 'M58 34 L28 52 L16 104 L34 110 L44 76 L46 160 H114 L116 76 L126 110 L144 104 L132 52 L102 34',
    },
    { d: 'M58 34 L80 92 L102 34', role: 'soft' },
    { d: 'M64 34 L80 74 L96 34' },
    { d: 'M46 112 H114 V124 H46 Z', role: 'accent' },
    { d: 'M76 118 l-14 30 M84 118 l14 30', role: 'accent' },
    { d: 'M18 98 L35 104 M141 98 L124 104', role: 'soft' },
    { d: 'M106 132 l6 -4 M106 144 l6 -4 M106 156 l6 -4', role: 'ambient' },
    shadow(80, 172, 46),
  ],
  // Wing's round glasses, folded, the rims in tint and the temples crossed
  // behind them: the teacher who introduces himself to Gon and Killua at the
  // arena, episode 27 / chapter 45. No face behind them.
  'wing': [
    { d: circle(52, 100, 22), role: 'accent' },
    { d: circle(108, 100, 22), role: 'accent' },
    { d: 'M74 98 Q80 90 86 98' },
    { d: 'M30 96 L22 92 L108 136 L114 132' },
    { d: 'M130 96 L138 92 L52 136 L46 132' },
    { d: 'M40 90 Q46 84 54 84 M96 90 Q102 84 110 84', role: 'soft' },
    shadow(80, 150, 56),
  ],
  // One of Gido's spinning tops on its point, the band round its widest part
  // in tint and the turn drawn as open lines: the tops he spins along his
  // cane in Gon's first 200th-floor match, episode 29 / chapter 49.
  'gido': [
    {
      d: 'M80 40 C112 40 128 70 128 88 C128 108 96 132 82 148 H78 C64 132 32 108 32 88 C32 70 48 40 80 40 Z',
    },
    { d: 'M33 82 Q80 98 127 82 M34 94 Q80 110 126 94', role: 'accent' },
    { d: 'M74 40 V22 H86 V40' },
    { d: 'M44 64 Q52 52 66 46', role: 'soft' },
    { d: 'M110 104 l8 -6 M102 116 l8 -6 M94 128 l7 -5', role: 'ambient' },
    { d: 'M16 70 Q12 88 18 104 M144 70 Q148 88 142 104', role: 'ambient' },
    shadow(80, 152, 26),
  ],
  // Sadaso's long coat with its high collar in tint and the right sleeve
  // folded up empty: the one-armed fighter named before his match with
  // Killua, episode 33 / chapter 57.
  'sadaso': [
    { d: 'M60 30 L56 14 H104 L100 30', role: 'accent' },
    {
      d: 'M60 30 L34 46 L30 92 L44 96 L48 168 H112 L116 96 L130 92 L126 46 L100 30',
    },
    { d: 'M80 30 V168', role: 'soft' },
    { d: 'M30 92 L34 70 L44 74 L44 96', role: 'soft' },
    { d: 'M116 96 L120 150 H132 L130 92' },
    {
      d: 'M86 50 l6 -4 M86 74 l6 -4 M86 98 l6 -4 M86 122 l6 -4',
      role: 'ambient',
    },
    shadow(84, 178, 48),
  ],
  // Riehlvelt's wheelchair side on, the hand rim of its big wheel in tint:
  // the chair he fights from against Killua, episode 34 / chapter 59.
  'riehlvelt': [
    { d: circle(70, 112, 36) },
    { d: circle(70, 112, 30), role: 'accent' },
    {
      d: 'M70 82 V142 M40 112 H100 M49 91 L91 133 M91 91 L49 133',
      role: 'soft',
    },
    { d: 'M48 44 L56 96 H112 L120 140' },
    { d: 'M42 44 H54 M56 76 H104' },
    { d: `${circle(124, 142, 8)} M120 134 L114 120`, role: 'soft' },
    { d: 'M4 150 H156', role: 'ambient' },
    shadow(84, 158, 52),
  ],
  // Kastro's high-collared tunic with its knotted buttons in tint, closing
  // down one side: the fighter who meets Hisoka again on the 200th floor,
  // episode 31 / chapter 52.
  'kastro': [
    { d: 'M62 30 V22 H98 V30' },
    {
      d: 'M62 30 L30 46 L20 110 L38 114 L46 74 L48 166 H112 L114 74 L122 114 L140 110 L130 46 L98 30',
    },
    { d: 'M80 30 Q90 44 104 52 V166', role: 'soft' },
    { d: 'M100 60 h12 M102 84 h12 M102 108 h12 M102 132 h12', role: 'accent' },
    { d: 'M22 104 L38 108 M138 104 L122 108', role: 'soft' },
    { d: 'M54 90 l-6 4 M54 112 l-6 4 M54 134 l-6 4', role: 'ambient' },
    shadow(80, 176, 46),
  ],
  // One of the square fighting platforms in the arena's great hall, seen
  // from a corner with its rim in tint and the next one behind it: where
  // Gon and Killua fight their first matches, episode 27 / chapter 44.
  'heavens-arena': [
    { d: 'M14 120 L80 98 L146 120 L80 142 Z', role: 'accent' },
    { d: 'M14 120 V128 L80 150 L146 128 V120' },
    { d: 'M80 142 V150', role: 'soft' },
    { d: 'M88 140 l6 -2 M104 135 l6 -2 M120 130 l6 -2', role: 'ambient' },
    { d: 'M48 86 L80 76 L112 86 L80 96 Z', role: 'soft' },
    { d: 'M48 86 V90 L80 100 L112 90 V86 M80 96 V100', role: 'soft' },
    { d: 'M14 104 L36 98 M124 98 L146 104', role: 'ambient', dashed: true },
    { d: 'M4 150 H156', role: 'ambient' },
    shadow(80, 158, 64),
  ],
} satisfies Drawings
