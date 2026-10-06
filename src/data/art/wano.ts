import {
  cell,
  circle,
  dots,
  ellipse,
  polygon,
  SEA,
  shadow,
} from '~/lib/svg/primitives'

import type { Drawings, Redrawings, Stroke } from './stroke'

/**
 * One neck of Orochi's shadow behind the paper door, base at (0, 0), the head
 * turned right with one horn: a plain silhouette, no eye and no mouth.
 */
const OROCHI_NECK =
  'M-6 0 C-14 -22 6 -38 -2 -58 C-6 -68 -2 -80 6 -84 C16 -90 32 -88 37 -80 C33 -74 22 -72 14 -72 C12 -68 10 -63 10 -58 C18 -38 -2 -22 6 0 M4 -85 L-2 -98 L12 -87'

/**
 * One of Komurasaki's tall geta, its toe at the back, origin under the front
 * of the board: the board seen from above, its edge, the tall tooth, the thong.
 */
const KOMURASAKI_GETA: Stroke[] = [
  { d: 'M-22 0 L-17 -40 Q-16 -46 -9 -46 H9 Q16 -46 17 -40 L22 0 Z' },
  { d: 'M-22 0 V5 H22 V0' },
  { d: 'M-17 5 V46 H17 V5' },
  { d: 'M-12 -18 C-8 -28 -2 -34 0 -38 C2 -34 8 -28 12 -18' },
]

/** Komurasaki's geta set down at `transform`. */
function komurasakiGeta(transform: string): Stroke[] {
  return KOMURASAKI_GETA.map((stroke) => ({ ...stroke, transform }))
}

/** One of the short swords Black Maria wears in her hair: point up and right, guard, grip. */
const MARIA_HAIR_SWORD =
  'M0 0 L46 -30 L52 -36 L48 -28 L3 4 M-2 -5 L6 7 M-1 1 L-16 11 L-13 15 L2 5'

/** Black Maria's pipe, set down on the crossing of her two hair swords. */
const MARIA_PIPE = 'translate(0 12)'

/** Who's-Who's katana, drawn level and then laid at a slant on the floor. */
const WHOS_WHO_LAY = 'translate(0 26) rotate(-12 80 112)'

/** Hotei's sword that is still whole, laid above the one that was snapped. */
const HOTEI_WHOLE = 'translate(0 30)'

/** The drawings of the records filed in the wano stretch of the route. */
export const wanoArt = {
  // A closed country: one mountain, layered cloud, roofs at its foot.
  'wano': [
    { d: 'M20 130 L80 34 L140 130', role: 'accent' },
    { d: 'M62 64 q10 8 18 0 q8 8 18 0', role: 'accent' },
    {
      d: 'M34 98 q14 -8 28 0 t28 0 t28 0 M22 114 q14 -8 28 0 t28 0 t28 0 t28 0',
    },
    { d: 'M48 150 l12 -14 h40 l12 14z M62 134 l8 -10 h20 l8 10z' },
    ...SEA.slice(2),
  ],

  // A pine leaning out from the edge of a forest over a beach, the sea washing up on the sand.
  'kuri': [
    {
      d: 'M50 140 C54 118 44 102 56 86 C64 76 74 68 88 60 M58 90 C68 88 86 86 104 84 M52 110 C44 106 36 104 26 104',
      role: 'accent',
    },
    {
      d: 'M64 60 q2 -10 14 -10 q6 -10 18 -6 q10 -6 18 2 q10 0 10 10 Z M88 84 q2 -8 12 -8 q6 -8 14 -2 q10 0 10 10 Z M8 104 q2 -8 10 -8 q6 -6 12 0 q8 0 8 8 Z',
      role: 'accent',
    },
    {
      d: 'M126 140 C124 124 130 112 138 104 C142 100 146 98 150 98',
      role: 'soft',
    },
    { d: 'M134 98 q2 -8 10 -8 q6 -6 12 0 q6 0 6 8 Z', role: 'soft' },
    {
      d: 'M-4 128 q6 -14 12 -2 q6 -16 12 0 q4 -10 10 0 M108 130 q6 -12 10 -2',
      role: 'ambient',
    },
    { d: 'M-4 140 C40 142 90 146 164 150', role: 'soft' },
    {
      d: dots([
        [30, 148],
        [70, 152],
        [104, 151],
        [138, 156],
      ]),
      role: 'ambient',
    },
    ...SEA,
  ],

  // A bowl of red bean soup, and the dango skewer laid beside it.
  'tama': [
    { d: 'M30 118 C34 152 50 170 72 170 C94 170 110 152 114 118 Z' },
    { d: ellipse(72, 118, 42, 9) },
    { d: ellipse(72, 120, 33, 6), role: 'accent' },
    {
      d: dots([
        [58, 118],
        [72, 125],
        [86, 118],
        [66, 111],
      ]),
      role: 'accent',
    },
    { d: 'M60 170 h24 M64 178 h16' },
    { d: 'M112 28 L140 92' },
    { d: circle(118, 42, 9) },
    { d: circle(126, 60, 9) },
    { d: circle(134, 78, 9) },
    shadow(72, 182, 44),
  ],

  // A tengu mask resting on the swordsmith's anvil.
  'tenguyama-hitetsu': [
    {
      d: 'M56 96 C46 76 50 50 68 42 C76 38 84 38 92 42 C110 50 114 76 104 96 C92 104 68 104 56 96 Z',
    },
    { d: 'M72 60 L80 118 L88 62 Z', role: 'accent' },
    { d: 'M58 52 q22 -8 44 0', role: 'soft' },
    { d: 'M36 122 H124 L116 132 H44 Z' },
    { d: 'M62 132 L66 152 H94 L98 132' },
    { d: 'M50 152 H110 L116 166 H44 Z' },
    { d: 'M124 122 C142 124 146 130 140 132 L116 132' },
    shadow(80, 176, 48),
  ],

  // A tea tray with a pot and a cup, a chrysanthemum beside it: she serves
  // at a tea house, and takes up a sword only at 901, in `wanoRedrawn`.
  'kiku': [
    { d: 'M26 152 H134 L128 162 H32 Z' },
    { d: ellipse(68, 128, 26, 22) },
    { d: 'M54 108 Q68 96 82 108' },
    { d: 'M94 126 Q108 122 112 106', role: 'soft' },
    { d: 'M42 116 Q28 128 44 140', role: 'soft' },
    { d: 'M100 136 H120 L117 150 H103 Z' },
    { d: 'M106 128 q-4 -6 0 -12 M114 128 q-4 -6 0 -12', role: 'ambient' },
    { d: circle(116, 62, 14), role: 'accent' },
    {
      d: 'M116 48 V76 M102 62 H130 M106.1 52.1 L125.9 71.9 M125.9 52.1 L106.1 71.9',
      role: 'accent',
    },
    { d: circle(116, 62, 4), role: 'accent' },
    { d: 'M116 76 Q126 112 128 150', role: 'soft' },
    shadow(80, 174, 52),
  ],

  // A bandit's broad blade, the sash still knotted round it.
  'ashura-doji': [
    { d: 'M62 130 L58 52 L80 30 L102 52 L98 130 Z' },
    { d: 'M80 34 V130', role: 'soft' },
    { d: 'M50 130 H110 L106 142 H54 Z' },
    { d: 'M68 142 V176 H92 V142' },
    { d: 'M72 150 h16 M72 160 h16', role: 'soft' },
    {
      d: 'M26 100 C48 90 60 110 80 102 C100 94 112 114 134 104 C142 118 138 134 126 144',
      role: 'accent',
    },
    {
      d: 'M28 110 C48 102 60 120 80 112 C100 104 114 122 132 114 C138 124 134 136 124 144',
      role: 'accent',
    },
    shadow(80, 186, 34),
  ],

  // A leather jacket with the spinosaurus fin standing over it.
  'page-one': [
    {
      d: 'M40 106 C44 54 70 28 92 28 C116 28 134 56 136 106 Z',
      role: 'accent',
    },
    { d: 'M60 102 V46 M80 98 V32 M100 100 V36 M118 104 V54', role: 'accent' },
    {
      d: 'M42 108 C36 136 36 162 40 182 H120 C124 162 124 136 118 108 L96 100 L80 118 L64 100 Z',
    },
    { d: 'M64 100 L72 128 M96 100 L88 128', role: 'soft' },
    { d: 'M80 118 V182', role: 'soft' },
    { d: 'M50 150 h18 M92 150 h18' },
    { d: 'M4 190 H156', role: 'ambient' },
  ],

  // The paper door in his castle with the shadow cast on it from behind, in
  // broken line: one body, five necks rising, each a serpent's head with a horn. At 921 (ch. 927) the
  // shogun is only this shadow; his face, crown and kimono come at 922.
  'kurozumi-orochi': [
    { d: 'M16 30 H144 V150 H16 Z' },
    { d: 'M16 30 L22 24 H150 L144 30 M144 150 L150 144 V24', role: 'soft' },
    { d: 'M80 30 V150' },
    {
      d: 'M37.3 30 V150 M58.7 30 V150 M101.3 30 V150 M122.7 30 V150 M16 60 H144 M16 90 H144 M16 120 H144',
      role: 'ambient',
    },
    {
      d: 'M30 150 C36 130 58 122 80 122 C102 122 124 130 130 150',
      role: 'accent',
      dashed: true,
    },
    {
      d: OROCHI_NECK,
      role: 'accent',
      dashed: true,
      transform: 'translate(76 126)',
    },
    {
      d: OROCHI_NECK,
      role: 'accent',
      dashed: true,
      transform: 'translate(60 130) scale(-0.92 0.84)',
    },
    {
      d: OROCHI_NECK,
      role: 'accent',
      dashed: true,
      transform: 'translate(98 130) scale(0.88 0.76)',
    },
    {
      d: OROCHI_NECK,
      role: 'accent',
      dashed: true,
      transform: 'translate(44 140) scale(-0.78 0.6)',
    },
    {
      d: OROCHI_NECK,
      role: 'accent',
      dashed: true,
      transform: 'translate(114 140) scale(0.74 0.56)',
    },
    { d: 'M4 150 H156', role: 'ambient' },
  ],

  // A kunai: her fruit is not named until 916 (see wanoRedrawn).
  'shinobu': [
    { d: 'M80 26 L68 56 L80 100 L92 56 Z' },
    { d: 'M80 34 V96', role: 'soft' },
    { d: 'M76 100 h8 V140 h-8 Z' },
    { d: circle(80, 148, 9), role: 'accent' },
    shadow(80, 176, 40),
  ],

  // A paper lantern with the flower crest of the old yakuza.
  'hyogoro': [
    { d: 'M54 58 C38 78 38 130 54 150 H106 C122 130 122 78 106 58 Z' },
    { d: 'M60 58 h40 v-8 h-40 Z' },
    { d: 'M80 50 V30' },
    { d: circle(80, 25, 5) },
    { d: 'M60 150 h40 v8 h-40 Z' },
    { d: 'M42 74 H118 M40 86 H120 M40 126 H120 M42 138 H116', role: 'soft' },
    {
      d: `${circle(80, 92, 7)} ${circle(91, 100, 7)} ${circle(87, 113, 7)} ${circle(73, 113, 7)} ${circle(69, 100, 7)}`,
      role: 'accent',
    },
    { d: circle(80, 104, 4), role: 'accent' },
    shadow(80, 170, 40),
  ],

  // His blond braid hanging through its eight ties down to the stinger-shaped
  // tuft, and the cigar he always has, set down beside it, still lit. Both are
  // his when he takes the stage at Udon (930).
  'queen': [
    {
      d: 'M62.6 14 C47.6 16 54.6 28 69.6 30 M69.6 30 C55.2 32 63.4 44 77.8 46 M77.8 46 C64 48 69.4 60 83.2 62 M83.2 62 C70 64 70.2 76 83.4 78 M83.4 78 C70.8 80 65.6 92 78.2 94 M78.2 94 C66.2 96 58.1 108 70.1 110 M70.1 110 C58.7 112 51.5 124 62.9 126 M62.9 126 C52.1 128 49.2 140 60 142',
    },
    {
      d: 'M62.6 14 C77.6 16 84.6 28 69.6 30 M69.6 30 C84 32 92.2 44 77.8 46 M77.8 46 C91.6 48 97 60 83.2 62 M83.2 62 C96.4 64 96.6 76 83.4 78 M83.4 78 C96 80 90.8 92 78.2 94 M78.2 94 C90.2 96 82.1 108 70.1 110 M70.1 110 C81.5 112 74.3 124 62.9 126 M62.9 126 C73.7 128 70.8 140 60 142',
    },
    {
      d: 'M59.6 17 C55.6 21 62.6 24 66.6 27 M65.6 17 C68.6 21 75.6 24 72.6 27 M66.6 33 C62.6 37 70.8 40 74.8 43 M72.6 33 C75.6 37 83.8 40 80.8 43 M74.8 49 C70.8 53 76.2 56 80.2 59 M80.8 49 C83.8 53 89.2 56 86.2 59 M80.2 65 C76.2 69 76.4 72 80.4 75 M86.2 65 C89.2 69 89.4 72 86.4 75 M80.4 81 C76.4 85 71.2 88 75.2 91 M86.4 81 C89.4 85 84.2 88 81.2 91 M75.2 97 C71.2 101 63.1 104 67.1 107 M81.2 97 C84.2 101 76.1 104 73.1 107 M67.1 113 C63.1 117 55.9 120 59.9 123 M73.1 113 C76.1 117 68.9 120 65.9 123 M59.9 129 C55.9 133 53 136 57 139 M65.9 129 C68.9 133 66 136 63 139',
      role: 'soft',
    },
    {
      d: 'M55.6 14 H69.6 M62.6 30 H76.6 M70.8 46 H84.8 M76.2 62 H90.2 M76.4 78 H90.4 M71.2 94 H85.2 M63.1 110 H77.1 M55.9 126 H69.9',
      role: 'accent',
    },
    {
      d: 'M53 142 C42 154 52 170 60 184 C68 170 78 154 67 142 M53 142 H67',
      role: 'accent',
    },
    { d: 'M56 150 C53 160 56 170 60 178', role: 'soft' },
    { d: 'M100 176 L138 166 C142 165 144 171 140 172 L102 182 Z' },
    { d: 'M130 168 l2 6', role: 'soft' },
    {
      d: 'M141 168 C150 160 140 152 148 142 C154 134 146 126 150 118',
      role: 'ambient',
      dashed: true,
    },
    shadow(96, 190, 52),
  ],

  // His mask: the pteranodon waits for 924 (see wanoRedrawn).
  'king': [
    {
      d: 'M54 100 C54 82 64 90 80 90 C96 90 106 82 106 100 C106 118 94 128 80 128 C66 128 54 118 54 100 Z',
    },
    { d: 'M62 102 q18 -8 36 0 M80 108 V122', role: 'soft' },
    { d: 'M56 96 H30 M104 96 H130', role: 'accent' },
    shadow(80, 170, 40),
    { d: 'M4 188 H156', role: 'ambient' },
  ],

  // The oiran's tall geta, a pair set down side by side, and two of the golden
  // hairpins she wears laid in front of them: she parades through the capital
  // on them at 921.
  'komurasaki': [
    ...komurasakiGeta('translate(54 112)'),
    ...komurasakiGeta('translate(106 102) rotate(8)'),
    {
      d: 'M41 122 l-4 6 M41 136 l-4 6 M120 114 l-4 6 M118 128 l-4 6',
      role: 'ambient',
    },
    shadow(80, 166, 58),
    { d: 'M14 186 L86 174 M40 194 L112 186', role: 'accent' },
    {
      d: 'M86 174 L100 166 L104 178 Z M112 186 L126 178 L128 190 Z',
      role: 'accent',
    },
    { d: 'M100 172 v10 M103 174 v9 M125 184 v8', role: 'soft' },
  ],

  // A round paper fan and a plate of dango.
  'toko': [
    { d: circle(54, 70, 30) },
    { d: 'M54 100 L34 48 M54 100 V44 M54 100 L74 48', role: 'soft' },
    { d: 'M50 98 L38 138 M58 100 L46 140' },
    { d: 'M38 138 L46 140' },
    { d: ellipse(98, 158, 40, 9) },
    { d: 'M60 160 q38 16 76 0' },
    { d: 'M66 140 H136', role: 'accent' },
    {
      d: `${circle(84, 140, 11)} ${circle(104, 140, 11)} ${circle(124, 140, 11)}`,
      role: 'accent',
    },
    shadow(90, 178, 50),
  ],

  // A yakuza's sabre over the money box.
  'kyoshiro': [
    { d: 'M20 84 C56 60 104 44 146 38', role: 'accent' },
    { d: 'M24 96 C58 74 104 58 144 50', role: 'accent' },
    { d: 'M146 38 C152 40 150 48 144 50', role: 'accent' },
    { d: 'M14 76 L30 104' },
    { d: 'M4 92 L20 116 L28 110 L12 86 Z' },
    { d: 'M30 118 H118 V172 H30 Z' },
    { d: 'M30 118 L48 106 H136 L118 118 M118 172 L136 160 V106' },
    { d: 'M44 118 V172 M104 118 V172', role: 'soft' },
    { d: 'M66 132 h16 v14 h-16 Z' },
    shadow(80, 182, 56),
  ],

  // Tonoyasu's polka-dot bandana, still tied in the ring it makes round his
  // head, set down on its side with the knot's two ends standing up. He wears
  // it from the day he meets Zoro (922).
  'shimotsuki-yasuie': [
    { d: 'M18 132 C18 100 142 100 142 132 C142 164 18 164 18 132 Z' },
    { d: 'M38 126 C42 112 118 112 122 124 C118 140 42 142 38 126 Z' },
    {
      d: 'M38 126 C36 136 34 144 32 150 M122 124 C124 134 126 142 128 148',
      role: 'soft',
    },
    {
      d: 'M24 146 l6 -6 M28 152 l6 -6 M128 152 l6 -6 M124 156 l6 -6',
      role: 'ambient',
    },
    { d: 'M70 110 C68 100 76 94 82 98 C88 94 96 100 92 110' },
    {
      d: 'M82 98 C72 80 52 72 42 80 C50 90 64 96 76 102 M84 98 C94 80 114 72 124 80 C116 90 102 96 88 102',
    },
    {
      d: 'M54 82 C60 86 66 92 72 96 M112 82 C106 86 100 92 94 96',
      role: 'soft',
    },
    {
      d: `${circle(32, 132, 3.5)} ${circle(52, 144, 3.5)} ${circle(78, 148, 3.5)} ${circle(104, 146, 3.5)} ${circle(124, 136, 3.5)} ${circle(30, 116, 3)} ${circle(130, 114, 3)} ${circle(108, 105, 2.5)}`,
      role: 'accent',
    },
    shadow(80, 176, 64),
  ],

  // A naginata on the bridge, the stolen swords piled at its foot.
  'gyukimaru': [
    { d: 'M8 148 C40 106 120 106 152 148' },
    { d: 'M8 158 C40 118 120 118 152 158' },
    { d: 'M22 118 C52 96 108 96 138 118' },
    { d: 'M30 130 V116 M56 114 V100 M104 114 V100 M130 130 V116' },
    { d: 'M34 184 L92 72', role: 'accent' },
    {
      d: 'M92 72 C104 54 118 40 134 32 C128 50 116 66 100 80 Z',
      role: 'accent',
    },
    { d: 'M86 82 l12 6' },
    { d: 'M108 166 L150 154 M110 178 L148 166 M106 172 L146 184' },
    { d: 'M4 190 H156', role: 'ambient' },
  ],

  // A ninja's scroll with its crest, and the kunai laid across it.
  'fukurokuju': [
    { d: 'M28 72 C22 78 22 130 28 136 H126 C132 130 132 78 126 72 Z' },
    { d: 'M28 72 C34 78 34 130 28 136', role: 'soft' },
    { d: 'M126 72 C120 78 120 130 126 136', role: 'soft' },
    { d: circle(78, 104, 18), role: 'accent' },
    { d: polygon(78, 106, 10, 3), role: 'accent' },
    { d: 'M40 158 L66 146 L92 158 L66 170 Z' },
    { d: 'M92 152 H128 V164 H92 Z' },
    { d: circle(136, 158, 8) },
    shadow(80, 186, 52),
  ],

  // The arched iron door of his cell at the back of the Udon jail, the dark
  // behind its bars, and the day's poisoned fish set down in front of it, as
  // Udon is shown at 916.
  'kawamatsu': [
    { d: 'M30 150 V66 C30 30 110 30 110 66 V150' },
    { d: 'M40 150 V68 C40 42 100 42 100 68 V150', role: 'soft' },
    {
      d: 'M52 150 V50 M64 150 V44 M76 150 V44 M88 150 V50 M40 78 H100 M40 106 H100 M40 134 H100',
    },
    {
      d: 'M44 96 l6 -6 M56 96 l6 -6 M68 96 l6 -6 M80 96 l6 -6 M92 96 l6 -6 M44 124 l6 -6 M56 124 l6 -6 M68 124 l6 -6 M80 124 l6 -6 M92 124 l6 -6',
      role: 'ambient',
    },
    {
      d: 'M4 56 H24 M116 56 H156 M4 92 H30 M110 92 H156 M4 128 H30 M110 128 H156 M14 56 V92 M136 56 V92 M20 92 V128 M128 92 V128 M12 128 V150 M140 128 V150',
      role: 'ambient',
    },
    { d: 'M4 150 H156', role: 'ambient' },
    {
      d: 'M78 170 C92 156 120 156 134 168 C120 180 92 182 78 170 Z M134 168 L150 158 L148 178 Z',
      role: 'accent',
    },
    {
      d: 'M90 162 C86 166 86 172 90 176 M104 158 C108 152 116 152 120 160 M96 169 C108 166 120 166 132 168',
      role: 'soft',
    },
    shadow(112, 186, 40),
  ],

  // A torn flag on a broken mast.
  'rocks-d-xebec': [
    { d: 'M74 188 V64 M86 188 V64' },
    { d: 'M74 64 L78 44 L82 58 L86 38 L86 64' },
    { d: 'M30 76 H130' },
    {
      d: 'M36 78 C60 88 96 88 122 78 L118 126 L104 116 L96 132 L82 118 L70 134 L56 120 L42 132 Z',
      role: 'accent',
    },
    {
      d: 'M60 86 C58 106 58 120 60 130 M92 86 C92 106 92 120 90 132',
      role: 'soft',
    },
    { d: 'M30 76 L16 96 M130 76 L144 96', role: 'ambient', dashed: true },
    ...SEA.slice(2),
  ],

  // A pot of oden with two swords crossed behind it.
  'kozuki-oden': [
    { d: 'M52 112 L126 36 L134 42 L60 118 Z', role: 'accent' },
    { d: 'M108 112 L34 36 L26 42 L100 118 Z', role: 'accent' },
    { d: 'M46 106 L60 122 M114 106 L100 122' },
    { d: 'M36 124 C36 162 54 176 80 176 C106 176 124 162 124 124 Z' },
    { d: ellipse(80, 124, 44, 10) },
    { d: ellipse(80, 126, 34, 7), role: 'soft' },
    { d: 'M36 134 C24 132 24 146 34 148 M124 134 C136 132 136 146 126 148' },
    {
      d: dots([
        [66, 124],
        [82, 130],
        [96, 124],
      ]),
      role: 'soft',
    },
    { d: 'M4 186 H156', role: 'ambient' },
  ],

  // An hourglass with cherry petals falling through it.
  'kozuki-toki': [
    { d: 'M36 34 H124 M36 172 H124' },
    { d: 'M44 34 V172 M116 34 V172' },
    { d: 'M52 42 H108 L86 103 L108 164 H52 L74 103 Z' },
    { d: 'M62 164 q18 -14 36 0', role: 'soft' },
    { d: 'M80 108 V150', role: 'ambient', dashed: true },
    {
      d: 'M66 60 c-5 -4 0 -10 6 -8 c5 2 2 10 -6 8z M94 74 c-5 -4 0 -10 6 -8 c5 2 2 10 -6 8z M78 98 c-5 -4 0 -10 6 -8 c5 2 2 10 -6 8z M68 142 c-5 -4 0 -10 6 -8 c5 2 2 10 -6 8z M92 152 c-5 -4 0 -10 6 -8 c5 2 2 10 -6 8z',
      role: 'accent',
    },
    shadow(80, 184, 48),
  ],

  // Two lit candles on a headband, as she wore them when she found Orochi (965).
  'kurozumi-higurashi': [
    { d: 'M52 124 V72 h12 V124 M96 124 V72 h12 V124' },
    { d: 'M58 72 v-6 M102 72 v-6', role: 'soft' },
    {
      d: 'M58 64 c-7 -8 -2 -16 0 -26 c5 10 7 18 0 26 Z M102 64 c-7 -8 -2 -16 0 -26 c5 10 7 18 0 26 Z',
      role: 'accent',
    },
    { d: 'M64 80 v8 M96 84 v6', role: 'soft' },
    { d: 'M28 120 C50 134 110 134 132 120 V130 C110 144 50 144 28 130 Z' },
    { d: 'M28 120 C50 108 110 108 132 120', role: 'soft' },
    { d: 'M132 124 l14 10 M132 128 l8 16', role: 'soft' },
    shadow(80, 176, 48),
  ],

  // A cicada under the dome of a barrier.
  'kurozumi-semimaru': [
    { d: 'M22 178 C22 78 138 78 138 178', role: 'accent' },
    { d: 'M34 178 C34 94 126 94 126 178', role: 'soft' },
    { d: `${cell(50, 112)} ${cell(70, 112)} ${cell(90, 112)}`, role: 'soft' },
    {
      d: 'M80 132 C74 132 70 140 72 150 C74 162 78 170 80 170 C82 170 86 162 88 150 C90 140 86 132 80 132 Z',
    },
    { d: 'M72 136 C52 138 38 150 44 158 C52 164 68 154 75 145 Z' },
    { d: 'M88 136 C108 138 122 150 116 158 C108 164 92 154 85 145 Z' },
    { d: 'M50 152 L70 143 M110 152 L90 143', role: 'soft' },
    { d: 'M6 178 H154', role: 'ambient' },
  ],

  // Two flintlock pistols, and a hairpin standing between them.
  'izo': [
    {
      d: 'M12 48 L48 84 L54 78 L18 42 Z M48 84 L54 78 C60 94 58 116 50 128 L36 120 C44 108 48 96 46 88 Z',
    },
    { d: 'M50 96 C58 102 60 112 56 118 M40 60 C46 54 52 58 50 66' },
    {
      d: 'M12 48 L48 84 L54 78 L18 42 Z M48 84 L54 78 C60 94 58 116 50 128 L36 120 C44 108 48 96 46 88 Z',
      transform: 'translate(160 0) scale(-1 1)',
    },
    {
      d: 'M50 96 C58 102 60 112 56 118 M40 60 C46 54 52 58 50 66',
      transform: 'translate(160 0) scale(-1 1)',
    },
    { d: 'M80 164 V70', role: 'accent' },
    {
      d: `${circle(80, 49, 9)} ${circle(89, 63, 9)} ${circle(71, 63, 9)}`,
      role: 'accent',
    },
    { d: circle(80, 58, 4), role: 'accent' },
    shadow(80, 180, 50),
  ],

  // A horned headpiece with the thick dome of a pachycephalosaur.
  'ulti': [
    { d: 'M28 128 C28 66 132 66 132 128' },
    { d: 'M28 128 C60 142 100 142 132 128' },
    { d: 'M36 140 C62 150 98 150 124 140', role: 'soft' },
    {
      d: 'M33 110 l-12 -4 l9 -8z M50 90 l-6 -11 l11 -1z M76 80 l4 -12 l4 12z M110 90 l6 -11 l-11 -1z M127 110 l12 -4 l-9 -8z',
      role: 'accent',
    },
    { d: 'M28 124 C10 118 4 102 8 88 C14 100 22 108 32 112 Z', role: 'accent' },
    {
      d: 'M132 124 C150 118 156 102 152 88 C146 100 138 108 128 112 Z',
      role: 'accent',
    },
    { d: 'M50 126 C52 96 60 80 78 72', role: 'soft' },
    { d: 'M4 176 H156', role: 'ambient' },
  ],

  // His long katana in its pink scabbard with the white flowers on it, the
  // quatrefoil guard, and a cigarette left burning beside it: he walks into
  // Onigashima with both at 982.
  'whos-who': [
    { d: 'M2 104 H38 V120 H2 Q-3 112 2 104 Z', transform: WHOS_WHO_LAY },
    {
      d: 'M6 104 L12 120 L18 104 L24 120 L30 104 L36 120',
      role: 'soft',
      transform: WHOS_WHO_LAY,
    },
    {
      d: 'M43 102 C38 94 52 92 49 102 C58 99 58 113 49 110 C52 120 38 118 43 110 C34 113 34 99 43 102 Z',
      role: 'accent',
      transform: WHOS_WHO_LAY,
    },
    { d: 'M54 104 H150 Q158 112 150 120 H54 Z', transform: WHOS_WHO_LAY },
    { d: 'M62 104 V120 M62 108 H150', role: 'soft', transform: WHOS_WHO_LAY },
    {
      d: 'M80 109 v8 M76.5 111 l7 4 M76.5 115 l7 -4 M106 109 v8 M102.5 111 l7 4 M102.5 115 l7 -4 M132 109 v8 M128.5 111 l7 4 M128.5 115 l7 -4',
      role: 'soft',
      transform: WHOS_WHO_LAY,
    },
    { d: 'M92 170 L128 164 L129 170 L93 176 Z M120 165 l1 6' },
    {
      d: 'M130 167 C138 162 132 156 138 150 C142 146 138 142 142 138',
      role: 'ambient',
      dashed: true,
    },
    shadow(80, 186, 70),
  ],

  // Her long pipe, the bowl still smoking, laid on the two short swords she
  // wears in her hair: how she walks into Onigashima at 982.
  'black-maria': [
    { d: MARIA_HAIR_SWORD, transform: 'translate(52 170)' },
    { d: MARIA_HAIR_SWORD, transform: 'translate(108 170) scale(-1 1)' },
    {
      d: 'M-10 6 l2 4 M-6 4 l2 4',
      role: 'soft',
      transform: 'translate(52 170)',
    },
    {
      d: 'M-10 6 l2 4 M-6 4 l2 4',
      role: 'soft',
      transform: 'translate(108 170) scale(-1 1)',
    },
    {
      d: 'M12 140 L28 133 L30 138 L14 145 Z',
      role: 'accent',
      transform: MARIA_PIPE,
    },
    { d: 'M28 133 L124 94 M30 138 L126 99', transform: MARIA_PIPE },
    {
      d: 'M124 94 L134 90 C134 84 136 80 140 78 L152 78 C152 86 146 94 136 98 L126 99',
      role: 'accent',
      transform: MARIA_PIPE,
    },
    { d: ellipse(146, 78, 6, 2), role: 'accent', transform: MARIA_PIPE },
    { d: 'M60 120 l2 5 M90 108 l2 5', role: 'soft', transform: MARIA_PIPE },
    {
      d: 'M146 72 C138 62 150 56 142 46 C136 38 146 32 140 22',
      role: 'ambient',
      dashed: true,
      transform: MARIA_PIPE,
    },
    shadow(80, 190, 60),
  ],

  // His cap: the puffed white crown dented along the top, the black band with
  // its row of gold studs, the black visor, and the two slender golden horns
  // curving up from the front, as he walks into Onigashima at 982.
  'sasaki': [
    {
      d: 'M24 120 C14 96 26 66 58 66 C66 60 92 58 104 64 C134 62 150 92 138 118',
    },
    {
      d: 'M82 62 C76 80 74 100 78 124 M58 66 C66 72 82 72 104 64',
      role: 'soft',
    },
    { d: 'M24 120 C54 132 108 132 138 118 V130 C108 144 54 144 24 132 Z' },
    {
      d: dots([
        [34, 128],
        [46, 132],
        [58, 134],
        [70, 136],
        [94, 136],
        [106, 134],
        [118, 131],
        [130, 127],
      ]),
      role: 'soft',
    },
    { d: 'M126 132 l6 -8 M132 128 l4 -6', role: 'ambient' },
    { d: 'M24 132 C30 152 70 160 104 150 C92 146 60 144 24 132' },
    {
      d: 'M36 146 l6 -6 M48 150 l6 -6 M60 152 l6 -6 M72 152 l6 -6 M84 152 l6 -5',
      role: 'ambient',
    },
    { d: 'M66 132 C40 124 20 96 28 36 C36 90 54 114 74 126 Z', role: 'accent' },
    {
      d: 'M86 132 C112 122 132 94 126 38 C118 90 100 114 80 126 Z',
      role: 'accent',
    },
    shadow(80, 172, 64),
  ],

  // The studded kanabo he carries when he first fights at 990 (ch. 983),
  // leaning on its grip, its far face dark.
  'yamato': [
    { d: 'M26 182 L50 150 M34 188 L58 156 M26 182 L34 188' },
    { d: 'M30 176 l7 5 M36 168 l7 5 M42 160 l7 5', role: 'soft' },
    { d: 'M46 148 L104 36 L122 30 L138 42 L62 160 Z' },
    { d: 'M104 36 L120 46 L138 42 M120 46 L58 156', role: 'soft' },
    {
      d: 'M114.1 60.2 L127.4 53.2 M105.4 75.6 L116.7 69.7 M96.7 91 L106.1 86.2 M88 106.4 L95.5 102.7 M79.3 121.8 L84.8 119.2',
      role: 'ambient',
    },
    {
      d: `${circle(108, 50, 2.5)} ${circle(98, 68, 2.5)} ${circle(88, 86, 2.5)} ${circle(78, 104, 2.5)} ${circle(68, 122, 2.5)} ${circle(114, 62, 2.5)} ${circle(104, 80, 2.5)} ${circle(94, 98, 2.5)} ${circle(84, 116, 2.5)} ${circle(74, 134, 2.5)}`,
      role: 'accent',
    },
    shadow(70, 194, 56),
  ],

  // Her big long-handled fan, the paper on its ribs left blank, and the
  // flying squirrel's tail curling up behind it: both are hers from 985.
  'bao-huang': [
    {
      d: 'M70 184 C44 186 22 172 18 150 q-8 -6 -2 -14 q-6 -8 0 -15 q-2 -10 6 -15 q2 -9 12 -10 q6 -7 16 -3 q10 -2 14 8 C68 110 60 118 52 114',
    },
    { d: 'M70 184 C54 178 42 162 42 144 C42 128 46 118 52 114', role: 'soft' },
    {
      d: 'M26 160 l6 -4 M24 140 l6 -2 M28 120 l5 0 M38 104 l3 3',
      role: 'soft',
    },
    {
      d: 'M44 72 C40 34 70 14 100 18 C132 22 148 50 140 82 C132 110 106 122 82 116 C58 110 46 94 44 72 Z',
      role: 'accent',
    },
    {
      d: 'M90 112 L52 74 M90 112 L60 40 M90 112 L82 22 M90 112 L108 22 M90 112 L132 42 M90 112 L140 74',
      role: 'soft',
    },
    { d: 'M48 94 C60 112 80 120 100 118', role: 'ambient' },
    { d: 'M86 114 L80 184 M94 114 L88 184 M80 184 H88' },
    { d: 'M82 160 h7 M81 170 h7', role: 'soft' },
    shadow(80, 190, 56),
  ],
  // A teapot with its side handle, steam rising from the spout, and a
  // crane in flight over the hairpin that carries it.
  'tsurujo': [
    { d: 'M50 136 C42 114 52 94 80 94 C108 94 118 114 110 136 Z' },
    { d: ellipse(80, 94, 20, 5) },
    { d: circle(80, 85, 4) },
    { d: 'M110 112 L136 98 L139 104 L112 124' },
    { d: 'M50 112 L24 102 L22 108 L48 120', role: 'soft' },
    {
      d: 'M136 86 C130 76 142 68 136 58 M146 88 C140 78 152 70 146 60',
      role: 'soft',
    },
    { d: 'M34 180 H136 M136 176 v8' },
    {
      d: 'M68 164 C76 158 90 158 98 164 C90 168 76 168 68 164 Z',
      role: 'accent',
    },
    { d: 'M68 164 C60 162 52 160 44 158 L36 160', role: 'accent' },
    {
      d: 'M78 162 C72 148 74 138 84 130 M88 162 C96 150 106 144 118 144',
      role: 'accent',
    },
    { d: 'M98 164 L122 170', role: 'accent' },
    shadow(80, 188, 46),
  ],

  // A sumo ring seen at a tilt, the straw bales round its edge, and a cut
  // topknot lying in the middle of it.
  'urashima': [
    { d: ellipse(80, 122, 66, 26) },
    { d: ellipse(80, 122, 54, 19), role: 'soft', dashed: true },
    { d: 'M14 122 V140 C14 162 146 162 146 140 V122' },
    { d: 'M60 128 v8 M100 128 v8', role: 'soft' },
    {
      d: 'M66 118 C60 106 74 98 88 102 C100 106 102 118 92 122 L72 124 Z',
      role: 'accent',
    },
    { d: 'M84 102 L90 122', role: 'accent' },
    { d: 'M66 118 l-12 -2 M68 123 l-12 3', role: 'accent' },
    shadow(80, 176, 64),
  ],

  // The belt round his belly and the lion set in its front, a round striped
  // mane round a plain head with no face, the belt showing either side of
  // it; his tall dark hat set down beside it.
  // Both lion and hat are his at 901.
  'holdem': [
    { d: 'M72 94.6 L62 96 V116 L72 114.6 M143 93.2 L158 96 V116 L143 113.2' },
    { d: 'M148 98 l6 -4 M148 108 l6 -4', role: 'ambient' },
    {
      d: 'M138 104 Q144.1 112.2 135 117 Q136.9 127.1 126.7 127.5 Q124.1 137.3 114.7 133.2 Q108 141 101.3 133.2 Q91.9 137.3 89.3 127.5 Q79.1 127.1 81 117 Q71.9 112.2 78 104 Q71.9 95.8 81 91 Q79.1 80.9 89.3 80.5 Q91.9 70.7 101.3 74.8 Q108 67 114.7 74.8 Q124.1 70.7 126.7 80.5 Q136.9 80.9 135 91 Q144.1 95.8 138 104 Z',
      role: 'accent',
    },
    {
      d: 'M128 104 L137 104 M126 112.7 L134.1 116.6 M120.5 119.6 L126.1 126.7 M112.5 123.5 L114.5 132.3 M103.5 123.5 L101.5 132.3 M95.5 119.6 L89.9 126.7 M90 112.7 L81.9 116.6 M88 104 L79 104 M90 95.3 L81.9 91.4 M95.5 88.4 L89.9 81.3 M103.5 84.5 L101.5 75.7 M112.5 84.5 L114.5 75.7 M120.5 88.4 L126.1 81.3 M126 95.3 L134.1 91.4',
      role: 'accent',
    },
    {
      d: 'M92 100 C92 88 124 88 124 100 C124 114 116 122 108 122 C100 122 92 114 92 100 Z',
    },
    { d: 'M14 70 C14 64 50 64 50 70 L48 150 C40 154 24 154 16 150 Z' },
    {
      d: 'M14 70 C14 76 50 76 50 70 M6 152 C6 146 58 146 58 152 C58 160 6 160 6 152 Z',
    },
    {
      d: 'M38 84 l8 -6 M38 100 l8 -6 M38 116 l8 -6 M38 132 l8 -6',
      role: 'ambient',
    },
    shadow(84, 172, 72),
  ],

  // A food cart built like a ship on two wheels, a sail on its mast and
  // produce heaped on deck.
  'speed': [
    { d: 'M24 122 H136 L124 148 H36 Z' },
    { d: circle(52, 156, 12) },
    { d: circle(108, 156, 12) },
    {
      d: dots([
        [52, 156],
        [108, 156],
      ]),
    },
    { d: 'M80 122 V36' },
    {
      d: 'M56 44 H104 C100 62 100 80 104 98 H56 C60 80 60 62 56 44 Z',
      role: 'accent',
    },
    { d: circle(46, 114, 8), role: 'soft' },
    { d: circle(64, 112, 9), role: 'soft' },
    { d: circle(98, 112, 9), role: 'soft' },
    { d: circle(116, 115, 7), role: 'soft' },
    { d: 'M64 103 l-5 -9 M64 103 l5 -9', role: 'soft' },
    shadow(80, 174, 58),
  ],

  // A shop front under a tiled eave, a split curtain over the door and paper lanterns hanging beside it.
  'flower-capital': [
    { d: 'M8 70 L30 56 H130 L152 70 Z' },
    {
      d: 'M14 70 q4 5 8 0 q4 5 8 0 q4 5 8 0 q4 5 8 0 q4 5 8 0 q4 5 8 0 q4 5 8 0 q4 5 8 0 q4 5 8 0 q4 5 8 0 q4 5 8 0 q4 5 8 0 q4 5 8 0 q4 5 8 0 q4 5 8 0 q4 5 8 0 q4 5 8 0',
      role: 'soft',
    },
    { d: 'M20 150 V76 M140 150 V76 M20 150 H140', role: 'soft' },
    {
      d: 'M50 80 H110 V118 M50 80 V118 M70 80 V116 M90 80 V116',
      role: 'accent',
    },
    { d: 'M50 118 H66 M74 116 H86 M94 118 H110', role: 'accent' },
    { d: 'M56 150 V128 H104 V150', role: 'ambient' },
    { d: 'M32 76 V84 M128 76 V84', role: 'soft' },
    {
      d: `${ellipse(32, 98, 8, 13)} ${ellipse(128, 98, 8, 13)}`,
      role: 'accent',
    },
    {
      d: 'M24 94 h16 M24 102 h16 M120 94 h16 M120 102 h16 M29 111 h6 M125 111 h6',
      role: 'soft',
    },
    { d: 'M-4 150 H164', role: 'ambient' },
  ],
  // Three dumplings left on a plate, two daggers crossed beneath it.
  'dobon': [
    { d: ellipse(80, 96, 48, 12) },
    { d: ellipse(80, 96, 36, 8), role: 'soft' },
    { d: circle(70, 84, 10), role: 'accent' },
    { d: circle(90, 84, 10), role: 'accent' },
    { d: circle(80, 67, 10), role: 'accent' },
    { d: 'M44 170 L96 142 M114 132 L100 140' },
    { d: 'M92 136 L100 150' },
    { d: 'M116 170 L64 142 M46 132 L60 140' },
    { d: 'M68 136 L60 150' },
    shadow(80, 184, 46),
  ],

  // A scorpion's tail curled over two meal tickets, a stamp on the front one.
  'daifugo': [
    { d: 'M60 110 H122 V144 H60 Z', role: 'soft' },
    { d: 'M38 122 H100 V156 H38 Z' },
    { d: 'M48 134 h30 M48 145 h40', role: 'soft' },
    { d: circle(89, 134, 6), role: 'accent' },
    {
      d: 'M126 150 C146 128 148 96 132 76 C118 58 96 58 88 74',
      role: 'accent',
    },
    { d: 'M88 74 L78 66 L82 84 Z', role: 'accent' },
    {
      d: 'M136 130 l9 3 M141 111 l9 0 M137 92 l8 -4 M124 76 l5 -7 M106 67 l0 -8',
    },
    shadow(80, 172, 48),
  ],

  // A ring of three keys hanging from a hook.
  'solitaire': [
    { d: 'M70 24 H90 M80 24 V38' },
    { d: circle(80, 56, 18), role: 'accent' },
    { d: circle(64, 84, 6) },
    { d: circle(80, 90, 6) },
    { d: circle(96, 84, 6) },
    { d: 'M62 90 L52 140 M52 140 l9 2 M54 130 l9 2' },
    { d: 'M80 96 V150 M80 150 h10 M80 140 h8' },
    { d: 'M98 90 L108 140 M108 140 l-9 2 M106 130 l-9 2' },
    { d: 'M64 78 L70 70 M80 84 V74 M96 78 L90 70', role: 'soft' },
    shadow(80, 170, 38),
  ],

  // A sabre caught mid-spin, the arcs of its turn round it and three drops
  // of spit flying off.
  'alpacaman': [
    { d: 'M54 148 C70 118 94 84 124 48 C104 88 82 122 60 152 Z' },
    { d: 'M46 140 C38 156 50 170 64 160' },
    { d: 'M46 140 L64 160', role: 'soft' },
    { d: 'M54 150 L40 168' },
    { d: 'M28 106 A58 58 0 0 1 84 42', role: 'soft', dashed: true },
    { d: 'M136 92 A58 58 0 0 1 96 162', role: 'soft', dashed: true },
    { d: 'M126 110 q7 9 0 13 q-7 -4 0 -13 Z', role: 'accent' },
    { d: 'M142 128 q6 8 0 11 q-6 -3 0 -11 Z', role: 'accent' },
    { d: 'M120 140 q5 7 0 10 q-5 -3 0 -10 Z', role: 'accent' },
    shadow(80, 184, 40),
  ],

  // A wide belt with a big round buckle, a pair of tusks curving up over it.
  'babanuki': [
    { d: 'M20 118 C50 112 110 112 140 118 V138 C110 132 50 132 20 138 Z' },
    { d: circle(80, 127, 20), role: 'accent' },
    { d: circle(80, 127, 10), role: 'accent' },
    {
      d: dots([
        [32, 127],
        [46, 125],
        [114, 125],
        [128, 127],
      ]),
      role: 'soft',
    },
    { d: 'M64 106 C48 94 44 70 56 46 C58 70 66 88 78 102' },
    { d: 'M96 106 C112 94 116 70 104 46 C102 70 94 88 82 102' },
    shadow(80, 160, 56),
  ],
  // A bull-horned headpiece above a long sheathed katana.
  'daikoku': [
    { d: 'M40 96 C52 84 108 84 120 96 L116 110 C104 100 56 100 44 110 Z' },
    {
      d: 'M44 96 C26 86 20 66 30 46 C34 64 42 76 56 88 M116 96 C134 86 140 66 130 46 C126 64 118 76 104 88',
      role: 'accent',
    },
    { d: polygon(80, 98, 7, 4), role: 'accent' },
    { d: 'M18 146 H126 V158 H18 Z' },
    { d: 'M126 140 V164' },
    { d: 'M126 147 H154 V157 H126' },
    { d: 'M134 147 L140 157 M142 147 L148 157', role: 'soft' },
    { d: 'M30 152 H112', role: 'soft' },
    shadow(84, 176, 60),
  ],

  // A ring of four fireballs with a shuriken at its heart.
  'raijin': [
    { d: circle(80, 92, 48) },
    { d: circle(80, 92, 42), role: 'soft' },
    {
      d: 'M80 30 C88 38 90 46 80 56 C70 46 72 38 80 30 Z M128 78 C136 86 138 94 128 104 C118 94 120 86 128 78 Z M80 126 C88 134 90 142 80 152 C70 142 72 134 80 126 Z M32 78 C40 86 42 94 32 104 C22 94 24 86 32 78 Z',
      role: 'accent',
    },
    { d: 'M80 72 L86 86 L100 92 L86 98 L80 112 L74 98 L60 92 L74 86 Z' },
    { d: circle(80, 92, 4), role: 'soft' },
    shadow(80, 180, 40),
  ],

  // Sugamichi, the giant catfish he rides on land, side on with its long
  // whiskers and no eye, and his puffed-up cape swelling over its back like
  // cloud. He rides it through the shogun's castle at 928.
  'fujin': [
    {
      d: 'M14 134 C14 112 34 100 60 100 C90 100 120 108 136 120 L154 108 L150 132 L156 152 L136 142 C118 152 88 156 60 156 C34 156 14 150 14 134 Z',
    },
    {
      d: 'M20 132 C8 132 2 140 4 150 M24 138 C16 146 16 156 22 162 M22 126 C10 120 6 110 12 102',
    },
    {
      d: 'M70 156 C72 166 80 170 88 168 C86 162 84 158 84 155 M60 100 C66 92 78 90 86 102',
      role: 'soft',
    },
    { d: 'M110 150 l6 -6 M120 146 l6 -6 M100 152 l6 -6', role: 'ambient' },
    {
      d: 'M52 104 C46 92 56 80 68 86 C72 72 90 70 96 82 C106 74 122 82 118 96 C128 98 132 110 124 116 C108 108 74 102 52 104 Z',
      role: 'accent',
    },
    {
      d: 'M64 96 C70 90 78 90 82 94 M98 92 C104 88 110 90 112 96',
      role: 'soft',
    },
    shadow(84, 176, 70),
  ],

  // His two swords: one still whole in its dark scabbard, the other snapped
  // in two, the grip with a stub of blade and the rest of it lying apart.
  // Hyogoro breaks it with a single stroke at 1022.
  'hotei': [
    { d: 'M14 86 L44 76 L46 82 L16 92 Z', transform: HOTEI_WHOLE },
    {
      d: 'M20 84 l4 6 M28 81 l4 6 M36 79 l4 6',
      role: 'soft',
      transform: HOTEI_WHOLE,
    },
    { d: ellipse(49, 78, 3, 8), transform: `${HOTEI_WHOLE} rotate(-18 49 78)` },
    { d: 'M53 74 L146 44 Q152 46 148 52 L55 82 Z', transform: HOTEI_WHOLE },
    {
      d: 'M70 76 l4 -6 M90 70 l4 -6 M110 63 l4 -6 M130 57 l4 -6',
      role: 'ambient',
      transform: HOTEI_WHOLE,
    },
    { d: 'M14 160 L44 154 L45 160 L15 166 Z' },
    { d: 'M20 158 l3 6 M28 156 l3 6 M36 155 l3 6', role: 'soft' },
    { d: ellipse(48, 156, 3, 8), transform: 'rotate(-10 48 156)' },
    { d: 'M52 153 L76 149 L79 152 L76 154 L78 157 L53 159 Z', role: 'accent' },
    {
      d: 'M92 166 L95 162 L93 160 L96 157 L140 150 L152 151 L142 156 L94 169 Z',
      role: 'accent',
    },
    shadow(82, 184, 70),
  ],

  // A tall hat balanced on the end of a long upright staff.
  'maha': [
    { d: 'M58 56 V16 H104 V56' },
    { d: ellipse(81, 62, 40, 7) },
    { d: 'M58 44 H104 V52 H58 Z', role: 'accent' },
    { d: 'M78 70 V184 M84 70 V184' },
    { d: 'M78 184 L81 192 L84 184' },
    { d: 'M72 120 H90 M72 128 H90', role: 'soft' },
    shadow(81, 194, 30),
  ],
  // A white bowler hat above a dotted scarf and the lapels of a long coat.
  'guernica': [
    { d: 'M62 74 C62 40 100 40 100 74' },
    { d: ellipse(81, 76, 36, 6) },
    { d: 'M64 66 H98', role: 'accent' },
    { d: 'M58 94 C70 106 92 106 104 94 L104 112 C92 122 70 122 58 112 Z' },
    {
      d: dots([
        [68, 104],
        [80, 110],
        [92, 104],
        [74, 116],
        [88, 116],
      ]),
      role: 'accent',
    },
    { d: 'M58 112 L44 188 H118 L104 112 M81 122 V188', role: 'soft' },
    shadow(81, 194, 40),
  ],
  // Her father's castle burning twenty years ago, as the anime shows it in
  // Kin'emon's flashback at 910 (ch. 920): three storeys on a stone base,
  // fire out of the windows and off the roofs, smoke going up.
  'kozuki-hiyori': [
    { d: 'M26 150 L38 120 H122 L134 150 Z' },
    {
      d: 'M122 120 L134 150 M118 128 l6 -6 M122 138 l7 -7 M126 148 l7 -7',
      role: 'ambient',
    },
    { d: 'M32 136 H128', role: 'soft' },
    { d: 'M46 120 V102 H114 V120 M58 92 V80 H102 V92 M66 70 V60 H94 V70' },
    {
      d: 'M32 104 Q46 102 54 92 H106 Q114 102 128 104 M46 82 Q58 80 64 70 H96 Q102 80 114 82 M56 62 Q68 58 80 42 Q92 58 104 62',
    },
    {
      d: 'M62 120 V108 h10 V120 M88 120 V108 h10 V120 M74 92 V84 h12 V92',
      role: 'soft',
    },
    {
      d: 'M66 106 C58 96 68 90 64 78 C74 86 78 98 70 106 M92 106 C86 98 94 90 92 80 C100 88 102 98 96 106 M108 80 C102 70 110 64 108 52 C116 60 118 72 112 80 M48 92 C42 84 50 76 46 66 C54 72 58 84 52 92',
      role: 'accent',
    },
    {
      d: 'M80 40 C70 30 84 24 76 14 M98 54 C108 44 96 36 108 26 C114 20 110 12 116 6',
      role: 'ambient',
      dashed: true,
    },
    { d: 'M4 150 H156', role: 'ambient' },
    { d: 'M14 162 H146 M30 174 H130', role: 'ambient', dashed: true },
  ],

  // A mine entrance cut into a rock face, framed in timber and shut with iron bars, rails running out of it.
  'udon': [
    {
      d: 'M-4 150 L10 96 L34 72 L58 54 L92 50 L120 62 L146 84 L164 110',
      role: 'ambient',
    },
    { d: 'M44 150 V92 H116 V150 M38 92 H122', role: 'soft' },
    { d: 'M52 150 V100 a28 22 0 0 1 56 0 V150' },
    { d: 'M62 150 V84 M74 150 V80 M86 150 V80 M98 150 V84', role: 'accent' },
    { d: 'M54 118 H106', role: 'accent' },
    { d: 'M60 150 L40 190 M100 150 L120 190', role: 'soft' },
    { d: 'M56 158 H104 M50 170 H110 M45 182 H115', role: 'ambient' },
    {
      d: 'M16 132 l8 -6 M132 120 l10 4 M24 104 l6 -8 M136 100 l8 6',
      role: 'ambient',
    },
    { d: 'M-4 150 H44 M116 150 H164', role: 'ambient' },
  ],

  // An island off the coast whose peak is a great rock dome with two horns, crags around its foot.
  'onigashima': [
    {
      d: 'M8 150 L22 128 L34 132 L44 116 H116 L126 132 L138 128 L152 150',
      role: 'soft',
    },
    { d: 'M44 116 C40 70 58 44 80 44 C102 44 120 70 116 116', role: 'accent' },
    {
      d: 'M52 62 C40 50 36 34 40 18 C48 34 58 44 64 50 M108 62 C120 50 124 34 120 18 C112 34 102 44 96 50',
      role: 'accent',
    },
    {
      d: 'M60 116 l4 -16 l-3 -12 l5 -10 M100 116 l-3 -14 l4 -10 l-2 -8',
      role: 'soft',
    },
    {
      d: 'M18 100 q12 -8 24 0 M118 94 q12 -8 24 0 M-4 74 q16 -8 32 0',
      role: 'ambient',
      dashed: true,
    },
    { d: 'M28 140 l6 -6 M128 138 l6 -4', role: 'ambient' },
    ...SEA,
  ],

  // Two clay pots, one big and one small, and two holed coins above them.
  'denjiro': [
    { d: 'M30 90 C18 134 34 162 50 168 H90 C106 162 122 134 110 90 Z' },
    { d: ellipse(70, 90, 40, 9) },
    { d: 'M38 118 C58 126 82 126 102 118', role: 'soft' },
    { d: 'M120 146 C114 162 122 172 128 174 H144 C150 172 156 162 152 146 Z' },
    { d: ellipse(136, 146, 16, 4) },
    { d: circle(128, 58, 9), role: 'accent' },
    { d: 'M125 55 h6 v6 h-6 Z', role: 'accent' },
    { d: circle(142, 80, 9), role: 'accent' },
    { d: 'M139 77 h6 v6 h-6 Z', role: 'accent' },
    shadow(90, 182, 62),
  ],

  // An open scroll of disavowal between its two rollers, a red seal at its
  // foot, and the brush laid across it.
  'kozuki-sukiyaki': [
    { d: 'M34 50 H126 V146 H34 Z' },
    { d: 'M28 44 V152 M34 44 V152 M126 44 V152 M132 44 V152' },
    { d: 'M26 44 H36 M26 152 H36 M124 44 H134 M124 152 H134' },
    {
      d: 'M112 64 V128 M98 64 V134 M84 64 V118 M70 64 V126',
      role: 'soft',
      dashed: true,
    },
    { d: 'M46 118 h16 v16 h-16 Z M50 122 h8 v8 h-8 Z', role: 'accent' },
    { d: 'M72 184 L136 150' },
    { d: 'M136 150 L146 142 L150 148 L140 154 Z', role: 'accent' },
    shadow(80, 188, 54),
  ],
  // A katana standing as a grave marker in a mound of snow, the snow still
  // coming down on it.
  'shimotsuki-ushimaru': [
    { d: 'M20 170 C40 144 120 144 140 170 Z' },
    { d: 'M76 156 V76 H84 V156', role: 'accent' },
    { d: 'M80 152 V80', role: 'soft' },
    { d: ellipse(80, 73, 15, 4), role: 'accent' },
    { d: 'M76.5 69 V32 H83.5 V69' },
    { d: 'M76.5 62 l7 -6 M76.5 52 l7 -6 M76.5 42 l7 -6', role: 'soft' },
    { d: 'M74.5 31 h11' },
    {
      d: dots([
        [36, 40],
        [118, 30],
        [52, 78],
        [128, 70],
        [30, 112],
        [110, 108],
        [134, 128],
        [44, 136],
      ]),
      role: 'soft',
    },
    { d: 'M8 170 H152', role: 'ambient' },
  ],

  // A fishing rod bent out over the sea from a shore rock, and a long
  // kiseru pipe set down on the stone.
  'shimotsuki-kozaburo': [
    { d: 'M14 152 C18 132 46 122 70 128 C86 132 96 144 98 152 Z' },
    { d: 'M44 130 Q98 72 144 40' },
    { d: 'M144 40 V146', role: 'soft' },
    { d: circle(144, 150, 3.5), role: 'accent' },
    { d: 'M32 141 L90 135', role: 'accent' },
    { d: 'M23 135 h9 v6 q-4.5 4 -9 0 z', role: 'accent' },
    { d: 'M90 133.5 v3', role: 'accent' },
    { d: 'M27 128 q-6 -8 0 -14 q6 -6 0 -14', role: 'soft' },
    ...SEA,
  ],

  // A morning star on a short haft, spikes all round its head, and a pair of
  // oval sunglasses left at its foot.
  'hatcha': [
    { d: circle(96, 70, 24), role: 'accent' },
    {
      d: 'M100.4 46.4 L109.8 36.7 L109.6 50.2 M115.8 56.4 L129.3 56.2 L119.6 65.6 M119.6 74.4 L129.3 83.8 L115.8 83.6 M109.6 89.8 L109.8 103.3 L100.4 93.6 M91.6 93.6 L82.2 103.3 L82.4 89.8 M76.2 83.6 L62.7 83.8 L72.4 74.4 M72.4 65.6 L62.7 56.2 L76.2 56.4 M82.4 50.2 L82.2 36.7 L91.6 46.4',
      role: 'accent',
    },
    { d: 'M75.4 85.3 L41.4 156.3 M82.6 88.7 L48.6 159.7' },
    { d: 'M41.4 156.3 L48.6 159.7' },
    { d: 'M50 140 l7 3.4 M54.5 131 l7 3.4 M59 122 l7 3.4', role: 'soft' },
    { d: ellipse(104, 172, 11, 7) },
    { d: ellipse(130, 172, 11, 7) },
    { d: 'M115 171 Q117 167 119 171 M141 170 l8 -4' },
    shadow(96, 188, 52),
  ],

  // What the giants have with them in their chamber of the fortress at 1055
  // (ch. 1030), where they sit eating and drinking: a lidded sake barrel
  // bound with hoops, and a big bottle standing beside it.
  'fuga': [
    { d: ellipse(62, 72, 40, 12) },
    {
      d: 'M22 72 C18 102 20 132 26 154 C44 164 80 164 98 154 C104 132 106 102 102 72',
    },
    {
      d: 'M42 63 C40 70 40 76 44 82 M62 60 V84 M82 63 C84 70 84 76 80 82',
      role: 'soft',
    },
    {
      d: 'M22 94 C44 106 80 106 102 94 M24 134 C44 146 80 146 100 134',
      role: 'accent',
    },
    { d: 'M90 108 l6 -6 M92 122 l7 -7 M90 148 l6 -6', role: 'ambient' },
    {
      d: 'M112 160 C104 144 108 122 122 116 L124 100 H134 L134 116 C148 122 152 144 144 160',
    },
    { d: 'M122 100 H136 M112 160 C124 164 134 164 144 160', role: 'soft' },
    { d: 'M140 132 l5 -5 M142 144 l5 -5', role: 'ambient' },
    shadow(84, 172, 72),
  ],

  // A flame standing up in the shape of a hooded monk, rising out of a pool
  // of spilled ink.
  'kazenbo': [
    {
      d: 'M80 28 C96 42 112 68 110 98 C122 110 124 140 116 166 H44 C36 140 38 110 50 98 C48 68 64 42 80 28 Z',
      role: 'accent',
    },
    { d: 'M62 94 C66 72 94 72 98 94', role: 'soft' },
    {
      d: 'M110 98 q14 -10 10 -28 M50 98 q-14 -10 -10 -28 M116 136 q14 -6 14 -22 M44 136 q-14 -6 -14 -22',
      role: 'accent',
    },
    { d: ellipse(80, 170, 54, 9) },
    {
      d: dots([
        [80, 14],
        [98, 22],
        [62, 20],
        [30, 184],
        [132, 186],
      ]),
      role: 'soft',
    },
  ],
} satisfies Drawings

/** The records of this stretch drawn again, from the episode the story changes them. */
export const wanoRedrawn: Redrawings = {
  // The kunai with fruit ripening beside it: she names the Ripe-Ripe
  // Enticement Jutsu at 916 (ch. 924, below her record's chapter).
  shinobu: [
    {
      episode: 916,
      value: [
        { d: 'M112 26 L100 56 L112 100 L124 56 Z' },
        { d: 'M112 34 V96', role: 'soft' },
        { d: 'M108 100 h8 V140 h-8 Z' },
        { d: circle(112, 148, 9) },
        {
          d: `${circle(48, 110, 18)} ${circle(40, 148, 16)} ${circle(74, 144, 15)}`,
          role: 'accent',
        },
        { d: 'M48 92 q8 -10 18 -6 M40 132 q4 -10 14 -8' },
        shadow(54, 176, 40),
      ],
    },
  ],
  // A pteranodon's wing with fire along its edge, and the mask below it:
  // he is captioned with the fruit and flies at 924 (ch. 930, below his record's chapter).
  king: [
    {
      episode: 924,
      value: [
        {
          d: 'M24 116 C36 70 74 40 122 36 C128 48 128 62 122 74 C96 96 60 112 24 116 Z',
        },
        {
          d: 'M120 40 C102 60 76 84 40 106 M122 56 C106 72 82 90 50 112',
          role: 'soft',
        },
        { d: 'M54 56 c-4 -12 8 -14 6 -26 c8 10 16 12 10 26', role: 'accent' },
        { d: 'M88 40 c-4 -12 8 -14 6 -26 c8 10 16 12 10 26', role: 'accent' },
        {
          d: 'M54 150 C54 132 64 140 80 140 C96 140 106 132 106 150 C106 168 94 178 80 178 C66 178 54 168 54 150 Z',
        },
        { d: 'M62 152 q18 -8 36 0 M80 158 V172', role: 'soft' },
        { d: 'M56 146 H30 M104 146 H130' },
        { d: 'M4 188 H156', role: 'ambient' },
      ],
    },
  ],
  // A katana with a chrysanthemum for a guard: she draws a sword for the
  // first time at 901 (ch. 914), when Tama is taken from the tea house.
  kiku: [
    {
      episode: 901,
      chapter: 914,
      value: [
        { d: 'M114 34 L58 126 M122 40 L66 132' },
        { d: 'M114 34 L122 40' },
        { d: circle(62, 133, 16), role: 'accent' },
        {
          d: 'M62 117 V149 M46 133 H78 M50.7 121.7 L73.3 144.3 M73.3 121.7 L50.7 144.3',
          role: 'accent',
        },
        { d: circle(62, 133, 5), role: 'accent' },
        { d: 'M56 142 L34 172 M64 148 L42 178' },
        { d: 'M34 172 L42 178' },
        { d: 'M52 150 l8 6 M46 158 l8 6', role: 'soft' },
        shadow(84, 186, 40),
      ],
    },
  ],
}
