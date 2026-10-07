import {
  circle,
  dot,
  dots,
  ellipse,
  SEA,
  shadow,
  star,
} from '~/lib/svg/primitives'

import type { Drawings, Redrawings, Stroke } from './stroke'

/**
 * Franky's wrench and star-headed bolt, lying under the forearm of both his
 * drawings, so the arm is the one thing that changes at 517.
 */
const FRANKY_TOOLS: Stroke[] = [
  { d: 'M22 168 H80 M22 176 H80 M22 168 a4 4 0 0 0 0 8' },
  { d: 'M80 168 C82 156 100 154 106 162 l-9 4 v6 l9 4 C100 186 82 186 80 176' },
  { d: star(128, 172, 10, 4.5), role: 'accent' },
  { d: circle(128, 172, 3), role: 'accent' },
  shadow(78, 190, 54),
]

/**
 * Kuzan's bicycle in 3/4, the back wheel nearer and larger, and the sheet of
 * ice frozen on the sea under it, in both his drawings, so the flag is the
 * one thing that changes at 736.
 */
const KUZAN_BICYCLE: Stroke[] = [
  { d: ellipse(42, 110, 20, 26) },
  { d: ellipse(122, 102, 16, 22) },
  {
    d: `${ellipse(42, 110, 3, 4)} ${ellipse(122, 102, 2.5, 3.5)}`,
    role: 'soft',
  },
  {
    d: 'M42 110 L66 110 L56 70 L104 66 L66 110 M42 110 L56 70 M104 66 L122 102',
  },
  { d: 'M48 104 Q60 100 72 106 Q62 116 48 114', role: 'soft' },
  { d: 'M46 64 Q54 60 64 64 Q56 68 46 66 Z M55 68 V70' },
  { d: 'M104 66 L100 54 M88 56 Q100 48 110 52 Q118 54 120 60' },
]

const KUZAN_ICE: Stroke[] = [
  { d: 'M2 134 L118 152 L160 126 L48 112 Z', role: 'accent' },
  { d: 'M2 134 V142 L118 160 L160 134 V126 M118 152 V160' },
  {
    d: 'M14 137 l4 5 M30 140 l4 5 M46 142 l4 5 M62 145 l4 5 M78 147 l4 5 M94 150 l4 5 M126 154 l5 -4 M138 146 l5 -4 M150 139 l5 -4',
    role: 'ambient',
  },
  {
    d: 'M42 136 l-12 6 M42 136 l6 8 M122 124 l16 4 M122 124 l4 -6',
    role: 'soft',
  },
  ...SEA.slice(2),
]

/**
 * One of Sodom and Gomorrah, the Franky Family's King Bulls: a neck rising
 * out of the water, a horse's head with its snout forward, no eye. The two
 * are the same animal set side by side.
 */
const KING_BULL_NECK =
  'M0 60 C-4 40 0 20 14 12 C24 6 34 8 40 14 L52 20 Q56 26 50 28 L36 26 C30 28 26 34 26 44 L28 60'

/** The mane down the back of that neck. */
const KING_BULL_MANE = 'M14 12 C6 10 0 16 -2 24 L4 22 L-2 32 L4 30 L-2 40 L2 40'

/** The drawings of the records filed in the water seven stretch of the route. */
export const waterSevenArt = {
  // His cowboy hat set down on the raft he is building on the beach of
  // Ohara, a pinched crown over a brim turned up at the sides. The raft is
  // in 3/4, its logs' cut ends to the front, the crossbeams lashed over them
  // and the last logs still to come; the Tree of Knowledge stands behind on
  // its roots, the side away from the sun hatched (275, ch. 391-392).
  'jaguar-d-saul': [
    { d: 'M-4 150 C40 142 112 140 164 146' },
    {
      d: 'M106 142 C110 120 108 96 100 78 M128 142 C124 120 128 96 136 78 M106 142 C102 145 98 146 94 146 M128 142 C134 145 142 146 150 146',
    },
    {
      d: 'M96 80 C76 82 68 60 82 52 C78 32 98 22 112 30 C122 16 146 22 148 38 C160 42 160 66 144 72 C140 82 118 84 110 78 C104 84 98 84 96 80 Z',
    },
    { d: 'M112 104 q4 10 2 22', role: 'soft' },
    {
      d: 'M144 50 l8 -5 M146 60 l8 -5 M138 72 l8 -5 M130 108 l6 -4 M130 122 l6 -4',
      role: 'ambient',
    },
    {
      d: `${ellipse(16, 160, 6, 4)} ${ellipse(28, 162, 6, 4)} ${ellipse(40, 164, 6, 4)} ${ellipse(52, 166, 6, 4)}`,
      role: 'accent',
    },
    {
      d: 'M16 156 L54 132 M28 158 L66 134 M40 160 L78 136 M52 162 L90 138 M58 166 L96 142 M10 160 L48 136',
      role: 'accent',
    },
    { d: 'M24 148 L64 156 M44 136 L84 144', role: 'soft' },
    {
      d: 'M36 140 C32 132 38 128 44 134 C56 140 76 140 88 134 C94 128 100 130 96 140 C86 150 46 150 36 140 Z M52 138 C50 126 54 116 60 118 Q66 124 72 118 C78 116 82 126 80 136',
    },
    { d: 'M52 130 q14 4 28 0 M66 122 v6', role: 'soft' },
    shadow(56, 178, 46),
    ...SEA.slice(2),
  ],

  // The long, flat island seen from the sea, its low cliff hatched, and the
  // tall thin trees standing up out of the grass like everything else here
  // stretched out of shape; the tallest in the accent (207).
  'long-ring-long-land': [
    { d: 'M-4 128 C30 124 120 122 164 126' },
    { d: 'M-4 136 C40 140 120 140 164 134 M-4 128 V146 M164 126 V146' },
    {
      d: 'M8 132 l-4 12 M22 133 l-4 12 M100 135 l-4 10 M118 134 l-4 11 M134 133 l-4 11 M150 131 l-4 12',
      role: 'ambient',
    },
    {
      d: 'M74 124 V116 C64 100 66 54 79 12 C92 54 94 100 84 116 V124',
      role: 'accent',
    },
    {
      d: 'M84 36 l5 -3 M86 56 l6 -4 M88 76 l6 -4 M88 96 l5 -3',
      role: 'ambient',
    },
    { d: 'M79 24 V114', role: 'soft' },
    { d: 'M40 126 V120 C34 108 35 76 44 52 C53 76 54 108 48 120 V126' },
    { d: 'M114 124 V118 C108 106 109 82 117 62 C125 82 126 106 120 118 V124' },
    { d: 'M138 124 V120 C134 112 135 96 140 84 C145 96 146 112 142 120 V124' },
    {
      d: 'M14 124 q4 -6 8 0 M56 123 q3 -5 6 0 M96 123 q4 -6 8 0',
      role: 'soft',
    },
    ...SEA.slice(1),
  ],

  // The bow of the Sexy Foxy side on: the hull with its rail and planking,
  // the turn of the bow hatched and a wave under it, a mast with its sail
  // behind, and the fox's head at the prow as figurehead, ears up, the line
  // of the brow running down the long snout to its nose, out over the water.
  // No eye and no flag (207).
  'foxy': [
    { d: 'M-4 104 H78 C88 116 92 134 88 152 C62 160 22 160 -4 156' },
    { d: 'M-4 96 H78 M-4 104 V96 M16 96 v8 M36 96 v8 M56 96 v8', role: 'soft' },
    { d: 'M-4 122 H84 M-4 138 C36 142 64 142 86 138', role: 'soft' },
    {
      d: 'M78 104 C74 86 80 70 90 62 L86 28 L102 50 L114 26 L120 58 C128 60 134 64 138 70 L154 82 Q158 86 154 89 L136 92 C126 96 118 106 112 118 C106 124 96 128 90 130 C86 120 82 112 78 104 Z',
      role: 'accent',
    },
    { d: 'M92 40 l4 10 M110 40 l-2 10 M104 62 Q124 64 140 74', role: 'soft' },
    { d: dot(154, 85) },
    { d: 'M24 96 V14 M24 18 Q54 30 50 70 Q38 60 24 64', role: 'soft' },
    { d: 'M70 124 l10 -6 M72 136 l12 -7 M60 146 l14 -8', role: 'ambient' },
    { d: 'M70 156 Q84 150 96 154 Q104 156 112 152', role: 'soft' },
    ...SEA.slice(1),
  ],

  // Her Cutie Baton lying in 3/4: the yellow shaft between its two white
  // balls, each ball with its seam, a gleam and its lower side hatched (207).
  // No ribbon: the baton has none.
  'porche': [
    { d: 'M40 146 L118 74 M46 152 L124 80', role: 'accent' },
    { d: 'M58 132 l6 6 M76 115 l6 6 M94 98 l6 6', role: 'soft' },
    { d: circle(34, 158, 14) },
    { d: 'M20 158 q14 8 28 0 M28 150 q4 -4 8 -3', role: 'soft' },
    { d: 'M26 168 l6 -6 M34 171 l8 -8 M44 168 l4 -4', role: 'ambient' },
    { d: circle(130, 66, 14) },
    { d: 'M116 66 q14 8 28 0 M124 58 q4 -4 8 -3', role: 'soft' },
    { d: 'M124 77 l8 -8 M134 79 l8 -8', role: 'ambient' },
    shadow(80, 182, 54),
  ],

  // His leopard-spotted scarf, untied from his neck and left knotted in a
  // loop, its two ends falling forward and the far side of the loop hatched.
  // It is what he wears from his first scene (207); the iron gauntlets are
  // hidden weapons, brought out in the Groggy Ring.
  'hamburg': [
    {
      d: 'M20 112 C20 92 50 84 80 84 C110 84 140 92 140 112 C140 130 112 138 80 138 C48 138 20 130 20 112 Z',
    },
    {
      d: 'M42 112 C42 102 60 98 80 98 C100 98 118 102 118 112 C118 118 108 122 98 124 M62 124 C52 122 42 118 42 112',
    },
    { d: 'M64 124 C70 118 90 118 96 124 L94 140 C88 144 72 144 66 140 Z' },
    {
      d: 'M68 142 C58 156 46 166 30 172 L40 182 C56 176 68 162 74 146 M92 142 C102 156 114 166 130 170 L122 182 C106 176 94 162 86 146',
    },
    { d: 'M30 102 q8 4 10 14 M130 102 q-8 4 -10 14 M72 130 h16', role: 'soft' },
    {
      d: 'M29 114 a4 4 0 1 0 6 0 M51 90 a4 4 0 1 0 6 0 M81 88 a4 4 0 1 0 6 0 M107 90 a4 4 0 1 0 6 0 M125 114 a4 4 0 1 0 6 0 M47 128 a4 4 0 1 0 6 0 M109 128 a4 4 0 1 0 6 0 M49 166 a4 4 0 1 0 6 0 M107 166 a4 4 0 1 0 6 0',
      role: 'accent',
    },
    { d: 'M122 128 l8 -5 M130 120 l6 -4', role: 'ambient' },
    shadow(80, 190, 58),
  ],

  // His bicycle in 3/4 on a sheet of ice frozen on the sea, the ice's edges
  // hatched and cracked under the wheels (227). It leans against
  // Blackbeard's flag from 736, in `waterSevenRedrawn`.
  'kuzan': [...KUZAN_BICYCLE, ...KUZAN_ICE],

  // Tall houses standing in the water on both sides of a canal, a bridge
  // across it, and a yagara in front with its saddle on its back and the
  // reins run back from its snout: the city where boats are hired with an
  // animal to pull them (229). No eye on the yagara.
  'water-seven-arc': [
    { d: 'M4 130 V58 L20 44 L36 58 V130 M36 130 V40 L50 28 L64 40 V130' },
    { d: 'M96 130 V36 L110 24 L124 36 V130 M124 130 V54 L140 42 L156 54 V130' },
    { d: 'M64 96 Q80 80 96 96 M64 104 Q80 88 96 104' },
    {
      d: 'M14 70 h10 v10 h-10z M44 54 h10 v10 h-10z M44 80 h10 v10 h-10z M104 50 h10 v10 h-10z M104 76 h10 v10 h-10z M134 68 h10 v10 h-10z',
      role: 'soft',
    },
    { d: 'M4 130 H156', role: 'ambient' },
    { d: 'M74 116 h12 M70 124 h20', role: 'ambient' },
    {
      d: 'M84 166 C80 150 86 138 98 132 C108 128 116 130 122 136 L136 142 Q140 148 134 150 L120 148 C114 150 110 156 110 166',
    },
    { d: 'M98 132 l-2 -10 l8 6', role: 'soft' },
    { d: 'M36 166 Q60 158 84 166 M110 166 H124', role: 'soft' },
    {
      d: 'M48 162 Q50 148 62 148 Q72 148 76 156 L84 154 L82 162 Z M60 148 v-6 h6',
      role: 'accent',
    },
    { d: 'M132 146 Q108 156 82 156', role: 'soft' },
    ...SEA.slice(1),
  ],

  // His striped jacket worn open, in 3/4: the wide collar turned back, the
  // far side hatched, and Tyrannosaurus up to his paws in the pocket on the
  // left breast, side on, one ear and the snout out, his tail hanging over
  // the pocket's edge (230). No eye.
  'iceburg': [
    { d: 'M102 34 L124 46 Q132 52 132 64 L130 176 H84 L86 62 L102 34' },
    { d: 'M62 34 L40 44 Q30 50 28 62 L26 170 H68 L70 62 L62 34' },
    { d: 'M102 34 Q82 28 62 34 M102 34 L114 72 L86 62 M62 34 L54 70 L70 62' },
    {
      d: 'M118 136 V174 M104 136 V174 M60 76 V168 M48 72 V168 M120 76 V104 M96 72 V104',
      role: 'soft',
    },
    {
      d: 'M40 72 l-10 -6 M40 92 l-12 -7 M40 112 l-12 -7 M40 132 l-12 -7 M40 152 l-12 -7',
      role: 'ambient',
    },
    { d: 'M128 110 H90 V134 H128' },
    {
      d: 'M122 110 C124 96 116 88 106 86 C104 82 100 80 96 80 L80 88 L94 94 C94 100 96 106 100 110 M104 110 q-2 -6 -6 -6 M96 110 q-3 -5 -8 -3',
      role: 'accent',
    },
    { d: circle(102, 78, 5), role: 'soft' },
    { d: 'M126 112 C136 120 138 138 132 150', role: 'accent' },
    shadow(78, 186, 52),
  ],

  // A coil of his rope in 3/4, the turns laid one inside the other, the lay
  // of the strands across them and the far side hatched; the end runs out
  // and is tied off in a loop. His cigar smokes on the ground beside it.
  // The rope comes out of his sleeves against the Franky Family (232).
  'paulie': [
    { d: ellipse(70, 116, 52, 18) },
    { d: 'M18 116 V124 C18 140 122 140 122 124 V116' },
    {
      d: `${ellipse(70, 115, 40, 13)} ${ellipse(70, 114, 28, 9)}`,
      role: 'soft',
    },
    { d: ellipse(70, 113, 16, 5) },
    {
      d: 'M26 106 l6 4 M40 100 l5 4 M56 98 l5 4 M74 97 l5 4 M92 98 l5 4 M106 102 l5 4 M24 128 l6 4 M42 133 l6 3 M62 136 l6 2 M84 135 l6 3 M104 131 l6 3',
      role: 'soft',
    },
    { d: 'M112 108 l8 -4 M116 120 l6 -3', role: 'ambient' },
    {
      d: 'M122 122 C136 128 142 140 134 148 C126 156 112 152 114 144 C116 136 130 138 132 146 C134 156 146 162 158 158',
      role: 'accent',
    },
    {
      d: 'M20 172 L56 168 Q62 168 62 172 Q62 176 56 176 L20 178 Q16 176 20 172 Z M28 171 v6',
    },
    { d: 'M64 170 q8 -8 4 -18 q-4 -10 4 -18', role: 'ambient', dashed: true },
    shadow(76, 186, 64),
  ],

  // Her bottle in 3/4, standing by the chair she sits in at the station:
  // the long neck, the shoulders, a plain label as the accent, the far side
  // of the dark glass hatched. The chair's seat in 3/4, its back with a
  // carved top (229).
  'kokoro': [
    { d: 'M98 52 h10 v26 q14 8 14 26 V170 M98 52 v26 q-14 8 -14 26 V170' },
    { d: `${ellipse(103, 52, 5, 2)} M84 170 Q103 178 122 170` },
    { d: 'M84 120 Q103 126 122 120 V146 Q103 152 84 146', role: 'accent' },
    {
      d: 'M116 94 l5 -4 M116 108 l6 -4 M116 156 l6 -4 M116 166 l6 -4',
      role: 'ambient',
    },
    { d: 'M90 102 V114 M90 152 V162', role: 'soft' },
    { d: 'M10 112 L52 118 L70 106 L30 102 Z' },
    { d: 'M10 112 V166 M52 118 V174 M70 106 V160 M30 102 V112' },
    { d: 'M30 102 V44 Q38 34 48 44 Q58 34 70 44 V106' },
    { d: 'M38 52 V100 M50 52 V102 M62 52 V104', role: 'soft' },
    shadow(70, 184, 62),
  ],

  // Gonbe, the rabbit who lives with her at the station, sitting side on at
  // the edge of the station platform: long ears up, a cotton tail, no face.
  // The station's signal stands beside him over the sea (229).
  'chimney': [
    { d: 'M4 146 H112 V152 H4', role: 'ambient' },
    { d: 'M128 150 V58 M120 150 h16' },
    { d: 'M118 24 h20 v38 h-20z' },
    { d: `${circle(128, 34, 5)} ${circle(128, 51, 5)}`, role: 'soft' },
    {
      d: 'M44 146 C34 140 34 116 46 104 C50 100 56 98 60 98 C56 92 56 84 62 80 C70 76 80 82 80 92 C80 100 74 104 70 106 C80 112 84 126 80 140 C78 144 74 146 70 146 Z',
      role: 'accent',
    },
    {
      d: 'M62 82 C58 64 60 44 66 36 C70 46 70 64 68 80 M72 84 C74 66 80 50 86 44 C88 56 82 72 76 86',
    },
    { d: 'M38 128 c-6 -2 -8 6 -2 8', role: 'soft' },
    { d: 'M58 146 c4 -8 10 -10 14 -8', role: 'soft' },
    ...SEA.slice(1),
  ],

  // His plain white cap sitting on a roof ridge, peak forward, wind going
  // past. The roof is seen from its corner: the gable end and the wall
  // under it hatched, the ridge running back, rows of tiles on the near
  // slope down to the eave, and the house's shadow below. He goes over the rooftops to look at the Going Merry (231).
  'kaku': [
    { d: 'M40 74 L4 112 H78 Z M40 74 L146 50 L160 88 L78 112' },
    { d: 'M8 112 V150 H74 V112 M74 150 L156 126 V89' },
    {
      d: 'M30 92 l-8 14 M44 88 l-10 18 M58 96 l-6 10 M20 120 l-8 12 M40 122 l-10 14 M60 120 l-10 14',
      role: 'ambient',
    },
    { d: 'M64 87 L150 67 M72 100 L155 80', role: 'soft' },
    {
      d: 'M84 84 v-6 M100 80 v-6 M116 76 v-6 M132 72 v-6 M90 97 v-6 M106 93 v-6 M122 89 v-6 M138 85 v-6',
      role: 'soft',
    },
    {
      d: 'M72 70 C68 52 80 40 94 42 C108 44 112 54 110 64 M72 70 Q92 68 110 64 M110 64 C116 62 124 62 130 66 C124 70 116 70 108 68',
      role: 'accent',
    },
    { d: 'M92 42 v-3 M90 44 Q86 56 88 68', role: 'soft' },
    { d: 'M2 40 H42 M14 28 H52 M8 54 H30', role: 'ambient' },
    { d: 'M100 50 l6 -4 M104 58 l6 -4', role: 'ambient' },
    shadow(82, 170, 72),
  ],

  // His black top hat in 3/4, the crown hatched, the band below it, and
  // Hattori settled on the brim: plump, side on, beak out, in his little tie
  // (230). No eye. The CP0 mask is set beside it from 746, in
  // `waterSevenRedrawn`.
  'rob-lucci': [
    { d: ellipse(72, 140, 54, 14) },
    { d: 'M38 136 V72 C38 64 106 64 106 72 V136' },
    { d: ellipse(72, 72, 34, 8) },
    { d: 'M38 118 Q72 128 106 118 M38 128 Q72 138 106 128', role: 'soft' },
    {
      d: 'M48 84 l-6 10 M60 86 l-8 14 M72 87 l-8 14 M84 86 l-8 14 M96 84 l-8 14 M104 88 l-4 6 M54 102 l-8 12 M70 104 l-8 12 M86 104 l-8 12 M100 102 l-6 10',
      role: 'ambient',
    },
    {
      d: 'M102 144 C100 130 108 118 120 116 C120 106 130 102 136 108 L146 112 L137 116 C138 124 138 136 128 144 C132 148 136 154 138 160 L122 150 C114 152 104 150 102 144 Z',
      role: 'accent',
    },
    { d: 'M108 138 C112 128 120 126 128 130', role: 'soft' },
    { d: 'M134 120 l5 7 l-8 1 z', role: 'soft' },
    shadow(76, 166, 62),
  ],

  // Her narrow rimless glasses, folded and lying flat on the closed blue
  // binder she holds when she tells Iceburg about Dock One (230, and in the
  // manga at 325 and 326). The binder in 3/4 with leather caps on two
  // corners, the paper between its covers and the spine hatched. The lenses
  // are the accent, the temples folded flat behind them.
  'kalifa': [
    { d: 'M8 126 L96 152 L152 120 L64 94 Z' },
    { d: 'M8 126 V140 L96 166 L152 134 V120 M96 152 V166' },
    { d: 'M10 131.5 L96 157 M10 135 L96 160.5', role: 'soft' },
    {
      d: 'M104 158 l5 -8 M115 152 l5 -8 M126 146 l5 -8 M137 140 l5 -8 M147 134 l4 -6.4',
      role: 'ambient',
    },
    {
      d: 'M82.6 148 Q96 143.4 108.2 145.1 M138.6 116 Q135.6 121.4 139.8 126.9',
    },
    {
      d: 'M39.8 117 L73.9 123 Q76.8 123.5 74.1 125.6 L68.2 128.8 Q59.1 133.2 44.8 130.7 Q29.2 128 32.6 122.6 Z M125.2 132 L91 126 Q88.2 125.5 85.5 127.6 L82.4 131.4 Q79 136.7 93.3 139.3 Q108.9 142 118 137.6 Z',
      role: 'accent',
    },
    { d: 'M75 124.9 Q84.3 123.1 86.4 126.9' },
    {
      d: 'M38.9 117.7 L49.4 113.5 L123.4 126.6 M124.3 132.7 L130.8 123.6 L59.6 111',
    },
    shadow(80, 176, 66),
  ],

  // The counter of his bar in downtown Water Seven (339, 240), seen from its
  // corner with the far end hatched: the glass he polishes with the cloth
  // draped over its rim, the bottles on the shelf behind him and one of the
  // stools along the front. The glass is the accent.
  'blueno': [
    { d: 'M30 40 H134', role: 'ambient' },
    {
      d: 'M38 40 v-14 q0 -5 4 -7 v-8 h4 v8 q4 2 4 7 v14 M56 40 v-18 q0 -5 4 -7 v-8 h4 v8 q4 2 4 7 v18 M114 40 v-12 q0 -5 4 -7 v-8 h4 v8 q4 2 4 7 v12',
    },
    { d: 'M20 100 L124 100 L148 86 L44 86 Z' },
    { d: 'M20 100 V126 M20 138 V148 H124 V100 M124 148 L148 134 V86' },
    { d: 'M20 106 H124 L148 92 M56 112 V142 M90 112 V142', role: 'soft' },
    { d: 'M131 141 V104 M140 136 V99', role: 'ambient' },
    {
      d: `${ellipse(84, 60, 12, 4)} M72 60 L75 92 q9 3 18 0 L96 60`,
      role: 'accent',
    },
    {
      d: 'M76 58 q7 -9 17 -5 q8 3 10 10 L109 86 l-4 4 l-3 -4 l-4 4 l-3 -4 L96 62 M101 66 L104 84',
      role: 'soft',
    },
    { d: 'M73 95 q11 4 22 0', role: 'ambient', dashed: true },
    { d: `${ellipse(22, 132, 15, 5)} M22 137 V176 M12 178 h20` },
    shadow(84, 186, 68),
  ],

  // Two swords crossed, each one cut off square at the point.
  'kiwi-and-mozu': [
    {
      d: 'M74 36 h12 v84 h-12z',
      role: 'accent',
      transform: 'rotate(-26 80 104)',
    },
    { d: 'M62 120 h36 v7 h-36z', transform: 'rotate(-26 80 104)' },
    { d: 'M76 127 v28 M73 155 h14 v10 h-14z', transform: 'rotate(-26 80 104)' },
    {
      d: 'M74 36 h12 v84 h-12z',
      role: 'accent',
      transform: 'rotate(26 80 104)',
    },
    { d: 'M62 120 h36 v7 h-36z', transform: 'rotate(26 80 104)' },
    { d: 'M76 127 v28 M73 155 h14 v10 h-14z', transform: 'rotate(26 80 104)' },
    shadow(80, 184, 54),
  ],

  // A headband with its tails loose, and a rocket launcher below it.
  'zambai': [
    { d: 'M22 56 h116 v18 H22z' },
    { d: 'M138 58 c16 4 18 16 8 24 M138 72 c18 8 16 22 4 28', role: 'soft' },
    { d: 'M30 116 h84 v26 H30z' },
    { d: 'M114 116 l24 13 l-24 13z', role: 'accent' },
    { d: 'M52 142 q-2 16 -14 20 M40 116 v-12 h16 v12' },
    { d: 'M22 122 q-14 6 -18 20', role: 'ambient', dashed: true },
    shadow(74, 180, 52),
  ],

  // The forearm of the first years, raised: flesh over the rebuilt arm,
  // widest at the wrist and tapering to the elbow, the star tattoo whole on
  // its face and the side turned away hatched; an ordinary fist on top and
  // the upper arm going down behind his tools, the wrench and the star-headed
  // bolt. No weapon in the arm and no rivet: the arm is all the first meeting
  // shows. The forearm of the two years is drawn from 517, in
  // `waterSevenRedrawn`, over the same tools.
  'franky': [
    {
      d: 'M63 56 V28 Q63 22 65 22 Q68 18 73 22 Q78 18 83 22 Q88 18 93 22 Q98 18 103 22 V56',
    },
    { d: 'M73 22 v8 M83 22 v8 M93 22 v8 M63 40 q12 7 24.8 0', role: 'soft' },
    {
      d: 'M53 54 C44 76 55 104.3 70.4 128 Q83 134 95.6 128 C111 104.3 122 76 113 54',
    },
    { d: 'M53 54 Q83 64 113 54', role: 'soft' },
    { d: star(83, 88, 17, 7.5), role: 'accent' },
    {
      d: 'M106 66 l6 -4 M109 80 l6 -4 M107 94 l6 -4 M102 108 l6 -4',
      role: 'ambient',
    },
    { d: 'M72 132 V148 M94 132 V148', role: 'soft' },
    ...FRANKY_TOOLS,
  ],

  // A rolled blueprint lying along the two rails of the sea train's track
  // out over the water, its spiral end to the left and the sheet unrolled
  // at the right, hanging over the rail with a grid ruled on it; the rails
  // on their sleepers, the roll's underside hatched. He draws the train and
  // builds its track with his apprentices (248).
  'tom': [
    { d: 'M-4 152 L164 126 M-4 136 L164 112' },
    {
      d: 'M8 136 l6 14 M32 132 l6 14 M56 128 l6 15 M80 125 l6 14 M104 121 l6 14 M128 117 l6 14 M152 114 l6 13',
      role: 'soft',
    },
    { d: 'M-4 156 L164 130', role: 'ambient' },
    { d: 'M30 110 L120 96 M32 130 L122 116' },
    {
      d: `${ellipse(31, 120, 6, 10)} M31 120 c0 -3 3 -3 3 0 c0 5 -6 5 -6 0 c0 -8 9 -8 9 0`,
      role: 'accent',
    },
    {
      d: 'M120 96 C130 98 132 108 126 116 L132 148 L156 144 L150 112 C146 104 134 96 120 96',
      role: 'accent',
    },
    {
      d: 'M131 128 L153 124 M133 138 L155 134 M139 114 L142 147 M146 113 L149 145',
      role: 'soft',
    },
    {
      d: 'M48 128 l8 -14 M68 125 l8 -14 M88 122 l8 -14 M108 119 l6 -11',
      role: 'ambient',
    },
    ...SEA.slice(1),
  ],

  // The Judicial Ship at Water Seven eight years ago, a court house on its
  // deck between two masts with furled sails, hit at the bow by the cannon
  // of the warships he set on it, smoke rising and a shot raising a column
  // of water astern (249). No flag on it.
  'spandam': [
    { d: 'M10 128 L132 112 L142 128 Q96 156 22 150 Z' },
    { d: 'M20 138 Q84 140 136 124', role: 'soft' },
    {
      d: 'M50 124 V100 H90 V118 M46 100 L70 86 L94 100 M58 104 V122 M70 104 V121 M82 104 V119',
      role: 'soft',
    },
    { d: 'M106 114 V44 M30 126 V58' },
    {
      d: 'M94 58 H118 M96 58 Q106 70 116 58 M18 72 H42 M20 72 Q30 84 40 72',
      role: 'soft',
    },
    {
      d: 'M122 128 l2 -16 l6 10 l6 -16 l2 14 l10 -8 l-4 14 l10 0 l-10 8',
      role: 'accent',
    },
    {
      d: 'M126 104 C114 96 130 86 120 72 C140 74 142 92 134 102',
      role: 'ambient',
      dashed: true,
    },
    { d: 'M6 156 l-2 -20 l6 10 l4 -18 l4 16 l6 -10 l-2 22', role: 'ambient' },
    { d: circle(148, 82, 3), role: 'soft' },
    ...SEA.slice(1),
  ],

  // The sea ending at the rim of a great hole and pouring over the near rim
  // all along in a curtain, the accent; the island in the middle on its
  // broken rock, and the Tower of Justice, the tallest thing on it, rising
  // over the town: the train pulls in to see an island in a hole in the sea
  // (ch. 375), and Paulie's sketch puts the tower between it and the Gates
  // of Justice (264).
  'enies-lobby-arc': [
    { d: 'M-4 92 C40 80 120 80 164 92', role: 'ambient' },
    { d: 'M-4 118 C40 132 120 132 164 118' },
    {
      d: 'M4 122 v24 M14 125 v30 M24 127 v26 M34 129 v32 M44 130 v22 M116 130 v22 M126 129 v32 M136 127 v26 M146 125 v30 M156 122 v24',
      role: 'accent',
      dashed: true,
    },
    { d: 'M42 106 C48 96 112 96 118 106 C112 114 48 114 42 106 Z' },
    {
      d: 'M46 110 L52 124 L58 120 L64 138 L72 134 L80 156 L88 136 L96 140 L102 122 L108 126 L114 110',
    },
    { d: 'M100 118 l6 -4 M92 132 l6 -4 M84 146 l4 -3', role: 'ambient' },
    { d: 'M72 104 V52 H88 V104 M70 52 V44 H90 V52 M76 44 V34 H84 V44' },
    { d: 'M76 64 h8 M76 76 h8 M76 88 h8', role: 'soft' },
    { d: 'M50 104 V96 h10 v8 M100 102 V94 h10 v8', role: 'soft' },
    ...SEA.slice(2),
  ],

  // His black jacket, cut like a kung fu tunic: a standing collar, white
  // edges with knotted buttons, worn open over a black tie, and the red sash
  // knotted at the waist with its ends hanging. The far side is hatched. The
  // agent who quarrels with the others when the four meet again (264).
  'jabra': [
    { d: 'M68 38 L40 50 Q30 56 28 70 L20 118 H36 L42 80 L44 142 H66 L68 42' },
    {
      d: 'M92 38 L120 50 Q130 56 132 70 L140 118 H124 L118 80 L116 142 H94 L92 42',
    },
    { d: 'M68 38 V28 Q80 24 92 28 V38' },
    { d: 'M73 44 L71 142 M87 44 L89 142', role: 'soft' },
    {
      d: dots([
        [66, 60],
        [66, 78],
        [66, 96],
        [94, 60],
        [94, 78],
        [94, 96],
      ]),
      role: 'soft',
    },
    { d: 'M77 36 H83 L85 104 L80 110 L75 104 Z' },
    {
      d: 'M100 66 l12 -8 M100 82 l14 -9 M100 98 l14 -9 M126 102 l8 -5 M124 88 l6 -4',
      role: 'ambient',
    },
    { d: 'M64 118 Q80 123 96 118 V130 Q80 135 64 130 Z', role: 'accent' },
    {
      d: 'M86 126 l8 -4 v10 z M88 130 Q86 150 80 168 M92 132 Q98 150 104 164',
      role: 'accent',
    },
    shadow(80, 184, 40),
  ],

  // His khakkhara standing on its butt: the long shaft, the pointed loop at
  // the head with its rings hung at different heights, and one long lock of
  // his hair over the shaft, falling to the floor in a single wave (264).
  'kumadori': [
    { d: 'M77 180 V60 M85 180 V60' },
    { d: 'M77 60 C62 52 60 30 72 20 L81 8 L90 20 C102 30 100 52 85 60' },
    { d: 'M81 56 V16', role: 'soft' },
    { d: `${circle(66, 50, 5)} ${circle(97, 36, 5)} ${circle(97, 50, 5)}` },
    { d: 'M77 124 h8 M77 128 h8', role: 'soft' },
    {
      d: 'M86 66 C120 66 124 96 104 112 C86 126 116 138 124 158 C128 168 136 176 150 182 C132 180 120 172 114 160 C106 138 80 124 96 110 C112 98 110 78 86 76',
      role: 'accent',
    },
    { d: 'M100 92 q8 8 2 18 M108 140 q8 10 10 24', role: 'soft' },
    { d: 'M85 90 l6 -4 M85 140 l6 -4', role: 'ambient' },
    shadow(90, 188, 40),
  ],

  // A zip pulled shut, its tape curving as if round something, the teeth
  // locked down the middle, the slider seen from its corner and the pull tab
  // hanging. He wears it where his mouth should be (264).
  'fukurou': [
    { d: 'M12 92 Q64 72 114 86 M12 136 Q64 116 114 130' },
    { d: 'M12 92 Q6 114 12 136', role: 'soft' },
    {
      d: 'M18 116 l4 -6 l4 6 l4 -7 l4 7 l4 -7 l4 7 l4 -7 l4 7 l4 -7 l4 7 l4 -7 l4 7 l4 -7 l4 7 l4 -6 l4 6 l4 -6 l4 6 l4 -6 l4 6',
      role: 'accent',
    },
    { d: 'M18 110 Q60 92 102 104 M18 122 Q60 104 102 116', role: 'soft' },
    { d: 'M104 96 L126 98 L128 124 L104 126 Z' },
    { d: 'M126 98 L136 92 L138 118 L128 124' },
    { d: 'M130 102 l4 -3 M130 110 l5 -3 M130 118 l5 -3', role: 'ambient' },
    { d: 'M110 126 L108 156 Q108 162 114 162 H120 Q126 162 124 156 L122 126' },
    { d: 'M112 148 q4 4 8 0', role: 'soft' },
    shadow(74, 180, 58),
  ],

  // Oimo's club leaning on the wall by the island gate, taller than the
  // gate: a great wooden club with iron studs, the grip bound, its far side
  // hatched. The gate in its battlemented wall, the doors shut (265).
  'oimo-and-kashi': [
    { d: 'M4 90 H96 V170 H4' },
    { d: 'M26 170 V124 Q50 104 74 124 V170 M50 112 V170' },
    {
      d: 'M4 98 H96 M4 90 v-8 h12 v8 M30 90 v-8 h12 v8 M56 90 v-8 h12 v8 M82 90 v-8 h14 v8',
      role: 'soft',
    },
    { d: 'M66 130 l6 -4 M66 146 l6 -4 M66 162 l6 -4', role: 'ambient' },
    {
      d: 'M104 172 L94 58 C92 30 116 18 134 30 C148 40 150 60 140 76 L118 174 Q110 178 104 172 Z',
      role: 'accent',
    },
    { d: 'M104 152 Q112 156 120 152 M106 160 Q114 164 120 160', role: 'soft' },
    {
      d: dots([
        [110, 68],
        [124, 44],
        [132, 62],
        [118, 92],
        [126, 112],
        [112, 126],
      ]),
    },
    {
      d: 'M140 50 l-8 6 M142 66 l-10 6 M134 88 l-8 6 M128 112 l-6 4',
      role: 'ambient',
    },
    { d: 'M-4 170 H164', role: 'ambient' },
    shadow(112, 184, 24),
  ],

  // A house in the backstreets going up again after the storm: the new frame
  // standing a little crooked, the accent, a scaffold of poles and planks
  // beside it and timber on the ground, and far out on the horizon the
  // warship that comes into the harbour (313).
  'post-enies-lobby': [
    { d: 'M4 74 H156', role: 'ambient' },
    {
      d: 'M114 74 l4 6 h22 l4 -6z M128 74 V50 M120 56 H136 M122 64 H134',
      role: 'soft',
    },
    {
      d: 'M22 150 L26 100 L58 72 L94 94 L90 150 M18 104 L58 70 L98 98',
      role: 'accent',
    },
    { d: 'M26 100 L94 94 M58 150 V84 M24 124 L92 120', role: 'soft' },
    { d: 'M102 150 V88 M140 150 V88 M96 106 H146 M96 132 H146' },
    { d: 'M102 106 L140 132 M140 106 L102 132', role: 'ambient' },
    { d: 'M14 158 L62 154 M20 164 L70 160', role: 'soft' },
    { d: 'M4 150 H156' },
    ...SEA.slice(2),
  ],

  // A rice cracker and a cannonball, side by side, the fuse already lit.
  'monkey-d-garp': [
    { d: circle(48, 110, 32) },
    { d: 'M18 102 q30 10 60 0 M18 118 q30 10 60 0' },
    {
      d: dots([
        [38, 92],
        [58, 96],
        [34, 130],
        [56, 128],
      ]),
      role: 'ambient',
    },
    { d: circle(114, 114, 28), role: 'accent' },
    { d: 'M114 86 c4 -16 14 -22 26 -24', role: 'accent' },
    {
      d: 'M144 56 l4 -8 M136 56 l-4 -8 M150 62 l8 -2 M132 66 l-8 -2',
      role: 'accent',
    },
    shadow(80, 158, 62),
  ],

  // A brigantine with a lion's head at the prow.
  'thousand-sunny': [
    { d: 'M24 120 L34 154 Q82 172 132 154 L142 120' },
    { d: 'M24 120 H142' },
    { d: 'M38 140 Q82 152 128 140', role: 'ambient' },
    { d: 'M82 120 V34' },
    { d: 'M52 46 H112' },
    { d: 'M82 34 l16 6 l-16 6' },
    { d: 'M54 48 Q82 40 110 48 L114 102 Q82 112 50 102 Z' },
    { d: circle(22, 104, 13), role: 'accent' },
    {
      d: 'M22 91 v-9 M12 95 l-7 -6 M9 104 h-8 M12 113 l-7 6 M22 117 v9',
      role: 'accent',
    },
    ...SEA.slice(1),
  ],
  // Two bamboo stilts rising out of the grass until their tops vanish into a cloud.
  'tonjit': [
    { d: 'M58 184 V44 M102 184 V44' },
    {
      d: 'M54 160 h8 M54 128 h8 M54 96 h8 M54 64 h8 M98 150 h8 M98 118 h8 M98 86 h8 M98 56 h8',
      role: 'soft',
    },
    { d: 'M58 170 h-12 M102 170 h12' },
    {
      d: 'M30 54 q-14 0 -10 -14 q4 -12 18 -10 q8 -16 28 -10 q14 -12 30 -2 q18 -2 18 14 q14 6 6 18 q-6 6 -16 4z',
      role: 'accent',
    },
    { d: 'M14 186 H146', role: 'ambient' },
  ],
  // A snail with a microphone grille for a shell, riding on a sparrow's wing.
  'itomimizu': [
    {
      d: 'M20 150 C50 120 100 112 146 124 C120 136 96 140 72 150 C56 156 36 158 20 150z',
    },
    { d: 'M60 146 l14 -16 M84 142 l14 -18 M108 134 l12 -14', role: 'soft' },
    { d: circle(84, 84, 24) },
    { d: 'M72 84 h24 M76 74 h16 M76 94 h16', role: 'accent' },
    { d: 'M54 112 H116 q12 0 12 -10 l-4 -18 M54 112 q-10 0 -8 -10' },
    { d: `M120 84 l4 -18 M112 88 l-2 -20 ${circle(124, 64, 2)}`, role: 'soft' },
    { d: 'M138 62 q8 8 0 16 M148 56 q12 14 0 28', role: 'ambient' },
  ],
  // His green striped shirt with the two round pauldrons on its shoulders,
  // the bands across them in the accent and their far sides hatched, and the
  // long sleeves hanging almost to the ground: long arms on short legs. Only
  // the plain pauldrons he is introduced in (210); the spiked ones and his
  // swords come out of hiding in the game.
  'pickles': [
    { d: 'M64 46 Q80 56 96 46' },
    { d: 'M64 46 L52 52 M96 46 L108 52' },
    { d: 'M14 82 C12 44 68 36 68 66 C68 82 46 90 14 82 Z' },
    { d: 'M146 82 C148 44 92 36 92 66 C92 82 114 90 146 82 Z' },
    {
      d: 'M20 64 C30 50 56 48 64 58 M140 64 C130 50 104 48 96 58',
      role: 'accent',
    },
    {
      d: 'M20 86 C16 118 14 150 18 174 H36 C38 150 40 120 44 90 M140 86 C144 118 146 150 142 174 H124 C122 150 120 120 116 90',
    },
    { d: 'M46 88 C48 110 48 130 50 150 H110 C112 130 112 110 114 88' },
    { d: 'M64 70 V150 M80 58 V150 M96 70 V150', role: 'soft' },
    { d: 'M132 56 l8 -5 M134 70 l8 -5', role: 'ambient' },
    shadow(80, 186, 64),
  ],
  // Seen from behind: the back of his head over shoulders far too wide for
  // it, arms hanging, swim briefs, the mudfish spots on his hide, and the
  // orange fin rising off his back past the shoulder (210). No face.
  'big-pan': [
    { d: 'M64 74 C60 56 66 40 80 40 C94 40 100 56 96 74' },
    { d: 'M70 50 q10 -6 20 0 M68 62 q12 -6 24 0', role: 'soft' },
    {
      d: 'M64 74 C34 76 12 88 8 108 C4 130 10 160 14 182 H34 C34 160 34 140 38 124 M96 74 C126 76 148 88 152 108 C156 130 150 160 146 182 H126 C126 160 126 140 122 124',
    },
    { d: 'M38 124 C40 140 44 152 48 162 H112 C116 152 120 140 122 124' },
    { d: 'M48 162 L46 186 H114 L112 162 M80 170 V186', role: 'soft' },
    { d: 'M80 84 V160', role: 'soft' },
    { d: 'M78 128 C68 112 56 92 30 60 C52 64 72 80 82 96', role: 'accent' },
    { d: 'M74 118 L50 74 M80 106 L62 76', role: 'soft' },
    {
      d: `${ellipse(118, 98, 6, 4)} ${ellipse(104, 124, 5, 3)} ${ellipse(52, 138, 5, 3)} ${ellipse(24, 150, 5, 3)} ${ellipse(136, 150, 5, 3)}`,
      role: 'soft',
    },
    { d: 'M138 120 l8 -5 M140 134 l8 -5 M140 148 l8 -5', role: 'ambient' },
  ],
  // The frog side on, squatting on the sea-train's rail in a sumo stance,
  // webbed feet planted, back hatched, and the topknot on his head as the
  // accent (229). No face.
  'yokozuna': [
    { d: 'M4 150 H156 M4 144 H156' },
    {
      d: 'M16 150 v6 M44 150 v6 M72 150 v6 M100 150 v6 M128 150 v6',
      role: 'soft',
    },
    {
      d: 'M54 144 C38 134 34 110 44 90 C54 70 76 62 96 64 C104 56 120 54 130 60 C140 66 142 80 136 90 C134 96 128 100 120 102 C122 116 120 128 116 138',
    },
    { d: 'M44 128 C42 108 58 98 76 104 C90 108 94 124 88 138' },
    {
      d: 'M116 138 L106 144 M116 138 L118 144 M116 138 L128 144 M88 138 L76 144 M88 138 L90 144 M88 138 L100 144 M54 144 L42 144',
      role: 'soft',
    },
    {
      d: 'M104 58 C102 48 108 42 116 44 C122 46 122 52 116 54 C112 56 108 56 104 58 Z M116 44 C120 38 128 38 130 44',
      role: 'accent',
    },
    { d: 'M52 82 l-6 -4 M46 96 l-6 -4 M44 110 l-6 -4', role: 'ambient' },
    { d: 'M100 112 q6 6 4 14', role: 'soft' },
    ...SEA.slice(1),
  ],

  // A great fountain at the top of a stepped city, its water running down the terraces into the sea.
  'water-seven': [
    { d: 'M80 64 V28', role: 'accent' },
    {
      d: 'M80 28 C68 20 56 30 52 56 M80 28 C92 20 104 30 108 56',
      role: 'accent',
    },
    { d: 'M80 36 C74 34 68 42 66 56 M80 36 C86 34 92 42 94 56', role: 'soft' },
    { d: 'M46 58 H114 L106 70 H54z' },
    { d: 'M14 152 V124 H32 V104 H50 V80 H110 V104 H128 V124 H146 V152' },
    { d: 'M66 72 V150 M94 72 V150', role: 'ambient', dashed: true },
    { d: 'M40 124 V150 M120 124 V150', role: 'ambient', dashed: true },
    {
      d: dots([
        [58, 92],
        [80, 92],
        [102, 92],
        [40, 114],
        [120, 114],
        [24, 136],
        [136, 136],
        [80, 116],
      ]),
      role: 'soft',
    },
    ...SEA,
  ],

  // A steam locomotive on the sea, a paddlewheel at its side and smoke from its funnel.
  'puffing-tom': [
    { d: 'M44 108 H118 V140 H44 C32 140 28 126 30 120 C32 112 38 108 44 108z' },
    { d: 'M118 88 H146 V140 H118z M124 96 h16 v14 h-16z' },
    { d: 'M58 108 V88 h14 V108 M54 88 h22', role: 'soft' },
    {
      d: 'M66 78 q-8 -8 0 -16 q10 -8 20 -2 q10 -8 18 4',
      role: 'ambient',
      dashed: true,
    },
    { d: 'M30 132 L16 150 H40', role: 'soft' },
    { d: circle(90, 140, 20), role: 'accent' },
    {
      d: 'M90 120 V160 M70 140 H110 M76 126 L104 154 M104 126 L76 154',
      role: 'accent',
    },
    { d: 'M-4 156 H164', role: 'ambient', dashed: true },
    ...SEA.slice(1),
  ],
  // A pigeon's feather beside a small necktie, and a speech bubble with no mouth under it.
  'hattori': [
    { d: 'M40 172 C52 132 64 92 92 42' },
    {
      d: 'M92 42 C70 52 50 84 46 130 C60 112 72 98 78 88 M92 42 C98 72 86 106 58 138',
    },
    { d: 'M58 112 l-8 -4 M66 96 l-8 -4 M74 80 l-8 -4', role: 'ambient' },
    { d: 'M110 104 h16 l-3 8 h-10z', role: 'accent' },
    { d: 'M113 112 l-5 38 l10 10 l10 -10 l-5 -38', role: 'accent' },
    {
      d: 'M104 16 h44 a8 8 0 0 1 8 8 v16 a8 8 0 0 1 -8 8 h-26 l-10 10 v-10 h-8 a8 8 0 0 1 -8 -8 v-16 a8 8 0 0 1 8 -8z',
      role: 'soft',
    },
    {
      d: dots([
        [116, 32],
        [126, 32],
        [136, 32],
      ]),
      role: 'ambient',
    },
    shadow(84, 184, 44),
  ],
  // A pair of dark glasses with a stubborn curl of hair springing up above them.
  'peepley-lulu': [
    { d: 'M28 96 h40 v14 q0 14 -20 14 q-20 0 -20 -14z' },
    { d: 'M92 96 h40 v14 q0 14 -20 14 q-20 0 -20 -14z' },
    { d: 'M68 100 q12 -6 24 0 M28 98 l-14 -6 M132 98 l14 -6' },
    {
      d: 'M80 82 C80 60 64 58 66 44 C68 30 88 30 90 42 C92 52 80 54 78 46',
      role: 'accent',
    },
    { d: 'M40 86 q40 -12 80 0', role: 'soft' },
    { d: 'M36 102 l8 8 M100 102 l8 8', role: 'ambient' },
    shadow(80, 170, 50),
  ],
  // A government briefcase shut tight, a refused offer crossed out and sticking from its lid.
  'corgi': [
    { d: 'M28 92 h104 v64 h-104z' },
    { d: 'M64 92 v-12 q0 -6 6 -6 h20 q6 0 6 6 v12' },
    { d: 'M74 110 h12 v10 h-12z', role: 'accent' },
    { d: 'M102 92 V44 h28 V92', role: 'soft' },
    { d: 'M108 54 l16 16 M124 54 l-16 16', role: 'accent' },
    { d: 'M28 128 h104', role: 'ambient' },
    shadow(80, 170, 56),
  ],
  // A shipwright's giant mallet standing on its handle, the air around it ringing with a shout.
  'tilestone': [
    { d: 'M80 180 V88' },
    { d: 'M36 52 h88 v36 h-88z' },
    { d: 'M52 52 v36 M108 52 v36', role: 'ambient' },
    { d: 'M74 150 h12 M74 160 h12 M74 170 h12', role: 'soft' },
    { d: 'M24 34 l-10 -10 M80 38 V16 M136 34 l10 -10', role: 'accent' },
    { d: 'M20 64 h-12 M140 64 h12', role: 'accent' },
    shadow(80, 190, 40),
  ],
  // A red boxing glove hanging on its lace from the low ceiling of a train car.
  'jerry': [
    { d: 'M-4 30 H164' },
    { d: 'M80 30 V56' },
    {
      d: 'M56 72 q0 -16 20 -16 h16 q22 0 22 30 v28 q0 16 -16 16 h-26 q-16 0 -16 -16z',
      role: 'accent',
    },
    { d: 'M56 96 q-14 0 -14 14 q0 12 14 12', role: 'accent' },
    { d: 'M62 130 h44 v24 h-44z' },
    { d: 'M70 138 l28 10 M98 138 l-28 10', role: 'ambient' },
    { d: 'M10 60 h24 v30 h-24z M126 60 h24 v30 h-24z', role: 'ambient' },
    shadow(84, 186, 30),
  ],
  // A ramen bowl with noodles spilling over the rim and chopsticks resting in it.
  'wanze': [
    { d: 'M30 100 H130 C128 136 110 154 80 154 C50 154 32 136 30 100 Z' },
    { d: 'M62 154 h36 v8 h-36z' },
    {
      d: 'M44 100 C38 116 52 124 44 142 M60 100 C56 120 68 130 58 152',
      role: 'accent',
    },
    { d: 'M96 98 L136 36 M108 100 L146 42', role: 'accent' },
    {
      d: 'M62 86 c-6 -8 6 -14 0 -22 M82 82 c-6 -8 6 -14 0 -22',
      role: 'ambient',
    },
    shadow(80, 174, 44),
  ],
  // His wide-brimmed black hat, crown hatched, with the red plume in its band,
  // set on the roof of the third car of the sea train, where he waits for
  // whoever comes over the roofs (259).
  'nero': [
    { d: 'M12 124 Q80 110 148 124 M18 124 V158 H142 V124' },
    {
      d: 'M28 132 h18 v14 h-18z M58 132 h18 v14 h-18z M88 132 h18 v14 h-18z M118 132 h14 v14 h-14z',
      role: 'soft',
    },
    { d: 'M18 152 H2 M142 152 H158', role: 'soft' },
    { d: `${circle(40, 164, 7)} ${circle(120, 164, 7)}` },
    { d: 'M-4 174 H164', role: 'ambient' },
    {
      d: 'M22 104 C26 94 46 104 80 104 C114 104 134 94 138 104 C134 116 26 116 22 104 Z',
    },
    { d: 'M48 104 C44 76 52 56 66 56 Q80 66 94 56 C108 56 116 76 112 104' },
    { d: 'M50 92 Q80 100 110 92', role: 'soft' },
    { d: 'M100 66 l8 -5 M104 78 l8 -5 M104 90 l8 -4', role: 'ambient' },
    {
      d: 'M108 94 C114 74 118 54 134 44 C140 40 150 44 146 54 C154 56 154 66 146 70 C150 80 140 86 132 82 C124 90 116 94 108 96',
      role: 'accent',
    },
    { d: 'M116 88 C122 74 130 62 140 54', role: 'soft' },
  ],
  // A perfectly straight sword standing upright, a right-angled zigzag slash cut across it.
  't-bone': [
    { d: 'M80 22 V130' },
    { d: 'M60 130 H100', role: 'accent' },
    { d: 'M80 130 V164' },
    { d: circle(80, 169, 5) },
    { d: 'M18 64 H58 V104 H102 V144 H142', role: 'accent' },
    shadow(80, 186, 30),
  ],
  // The two King Bulls side by side in the waves, necks up and manes blowing,
  // one yoke across both and a single tow line running back to the boat
  // they haul behind the sea train (264). No faces, and no sunglasses.
  'sodom-and-gomorrah': [
    { d: KING_BULL_NECK, transform: 'translate(30 96)' },
    { d: KING_BULL_NECK, transform: 'translate(90 90)' },
    { d: KING_BULL_MANE, role: 'accent', transform: 'translate(30 96)' },
    { d: KING_BULL_MANE, role: 'accent', transform: 'translate(90 90)' },
    { d: 'M42 128 L112 122', role: 'soft' },
    { d: 'M58 128 L66 156 M118 122 L122 150', role: 'soft' },
    { d: 'M66 156 Q40 168 -4 166 M122 150 Q90 166 66 156' },
    { d: 'M40 110 l6 -4 M100 104 l6 -4', role: 'ambient' },
    ...SEA,
  ],

  // The Gates of Justice, shut, rising out of the sea above the clouds: the
  // two leaves under one arch, the accent, their thickness on the right and
  // the far leaf hatched (264). No mark on them.
  'enies-lobby': [
    {
      d: 'M30 154 V44 C30 18 52 6 80 6 C108 6 130 18 130 44 V154',
      role: 'accent',
    },
    { d: 'M80 6 V156 M130 44 L138 50 V154 M80 6 C108 8 132 22 138 50' },
    {
      d: 'M90 30 l-6 8 M104 24 l-14 18 M118 30 l-28 36 M126 44 l-36 46 M130 64 l-40 50 M130 92 l-40 50 M128 124 l-24 30',
      role: 'ambient',
    },
    { d: 'M34 60 H76 M34 120 H76', role: 'soft' },
    {
      d: 'M14 100 q4 -10 16 -6 q8 -10 20 -2 q12 -4 14 8 Z M98 88 q4 -10 16 -6 q8 -10 20 -2 q12 -4 14 8 Z',
      role: 'soft',
    },
    ...SEA,
  ],
  // A judge's gavel on its block, three different hats lined up above it.
  'baskerville': [
    { d: 'M44 96 h72 v26 h-72z' },
    { d: 'M56 96 v26 M104 96 v26', role: 'ambient' },
    { d: 'M80 122 V166' },
    { d: 'M44 166 h72 v10 h-72z' },
    { d: 'M28 78 Q44 54 60 78 Z', role: 'accent' },
    { d: 'M64 78 h32 M72 78 q8 -20 16 0', role: 'accent' },
    { d: 'M104 78 v-18 h24 v18 M100 78 h32', role: 'accent' },
    shadow(80, 186, 40),
  ],
  // An open book with a clover leaf pressed flat on its right-hand page.
  'clover': [
    { d: 'M80 150 C60 140 36 140 16 146 V70 C36 64 60 64 80 74 Z' },
    { d: 'M80 150 C100 140 124 140 144 146 V70 C124 64 100 64 80 74' },
    { d: 'M26 90 h40 M26 102 h40 M26 114 h34 M26 126 h38', role: 'ambient' },
    {
      d: `${circle(104, 96, 8)} ${circle(124, 96, 8)} ${circle(114, 84, 8)} ${circle(114, 108, 8)}`,
      role: 'accent',
    },
    { d: 'M114 104 q6 14 -2 30', role: 'accent' },
    shadow(80, 162, 62),
  ],
  // A snail phone ringing on its foot, the receiver left on its shell and
  // the cord hanging: the call from headquarters he tells his agents to
  // ignore, on the way to Ohara (275). An ordinary one, not the golden snail;
  // stalks but no eyes.
  'spandine': [
    { d: 'M24 158 C24 144 38 138 56 138 H118 C130 138 138 146 136 158 Z' },
    { d: 'M118 138 C124 126 124 112 118 102 C124 96 132 98 134 106' },
    { d: 'M124 100 l2 -14 M130 100 l8 -12', role: 'soft' },
    { d: circle(76, 110, 30) },
    {
      d: 'M76 110 m-6 0 a6 6 0 1 1 12 0 a12 12 0 1 1 -24 0 a18 18 0 1 1 36 0',
      role: 'soft',
    },
    {
      d: 'M52 76 C52 68 62 66 66 72 H86 C90 66 100 68 100 76 C100 82 92 84 86 80 H66 C62 84 52 82 52 76 Z',
    },
    {
      d: 'M52 78 c-8 6 -2 12 -8 18 c-6 6 0 12 -6 18 c-4 6 0 12 -2 20',
      role: 'soft',
    },
    {
      d: 'M44 64 l-10 -8 M48 52 l-6 -12 M108 64 l10 -8 M104 52 l6 -12',
      role: 'accent',
    },
    { d: 'M96 132 l8 -6 M104 128 l6 -5', role: 'ambient' },
    shadow(80, 172, 60),
  ],
  // A rifle leaning against a stack of three old books.
  'nico-olvia': [
    { d: 'M20 150 h80 v-16 h-80z' },
    { d: 'M26 134 h70 v-14 h-70z' },
    { d: 'M32 120 h60 v-14 h-60z' },
    { d: 'M36 142 h22 M40 127 h18 M44 113 h16', role: 'ambient' },
    { d: 'M110 150 L122 128 L132 132 L120 152 Z', role: 'accent' },
    { d: 'M126 128 L146 38 L150 39 L131 130', role: 'accent' },
    { d: 'M121 138 q-5 5 0 9', role: 'soft' },
    shadow(84, 160, 64),
  ],
  // A cutlass whose guard sprouts two small tusks, a tail for a tassel.
  'funkfreed': [
    { d: 'M64 122 C72 84 98 50 134 28 C122 56 102 90 80 130 Z' },
    { d: 'M50 114 L90 136' },
    { d: 'M54 117 C42 122 38 134 44 142', role: 'accent' },
    { d: 'M86 134 C88 148 80 156 70 158', role: 'accent' },
    { d: 'M70 128 L54 160' },
    { d: 'M54 160 c-4 8 -2 16 4 22 M54 160 c2 8 6 14 12 18', role: 'soft' },
    shadow(80, 188, 40),
  ],
  // A dark swirled fruit resting in an open palm, a ladle hanging beside it.
  'thatch': [
    {
      d: 'M28 150 C36 128 56 120 78 122 L116 112 C126 110 128 122 118 124 L98 128 L128 126 C138 126 138 138 128 138 L100 142 C90 154 60 158 28 156',
    },
    { d: circle(84, 100, 20), role: 'accent' },
    {
      d: 'M72 96 c4 -8 14 -8 16 0 c2 8 -8 10 -10 4 M88 108 c4 4 10 2 10 -4',
      role: 'accent',
    },
    { d: 'M84 80 c0 -8 4 -12 10 -14', role: 'soft' },
    { d: 'M136 30 L140 84', role: 'ambient' },
    { d: ellipse(142, 92, 10, 7), role: 'ambient' },
    shadow(80, 170, 56),
  ],
} satisfies Drawings

/** Lucci's hat and pigeon, moved aside and made smaller to make room for the mask. */
const HAT_ASIDE = 'translate(-8 34) scale(0.72)'

/** The CP0 mask, drawn level and stood on its edge against the hat's brim. */
const MASK_LEAN = 'translate(128 146) rotate(-10) scale(1.1)'

/** The records of this stretch drawn again, from the episode the story changes them. */
export const waterSevenRedrawn: Redrawings = {
  // The forearm of the two years: a great box seen from its corner, the star
  // split by the edge and folded onto the far face, which is hatched; the
  // studded fist on top and the elbow hinge with its bolt below. The wrench
  // and the star-headed bolt lie beneath it. The opening shows it from 517,
  // the cover of ch. 598 in the manga.
  'franky': [
    {
      episode: 517,
      chapter: 598,
      value: [
        { d: 'M60 54 V24 Q60 14 70 14 H98 Q108 14 108 24 V54' },
        {
          d: 'M72 15 V34 M84 15 V34 M96 15 V34 M60 34 q6 6 12 0 q6 6 12 0 q6 6 12 0 q6 6 12 0',
          role: 'soft',
        },
        { d: 'M60 46 H92 q6 0 6 -6', role: 'soft' },
        { d: 'M44 58 H98 V124 H44 Z' },
        { d: 'M44 58 L58 49.6 M104 46 H118 L98 58 M118 46 V112 L98 124' },
        {
          d: 'M98 70 L100.6 82 L108.5 77.5 L102.2 90 L104.5 102.3 L98 98 L86.2 106.2 L90.4 92.5 L79 83.8 L93.3 83.5 Z',
          role: 'accent',
        },
        {
          d: 'M102 64 l12 -7 M104 70 l12 -7 M110 84 l6 -4 M110 92 l6 -4 M106 104 l10 -6 M102 112 l14 -8 M104 118 l12 -7',
          role: 'ambient',
        },
        { d: 'M52 124 V144 Q52 150 58 150 H86 Q92 150 92 144 V124' },
        { d: `${circle(72, 137, 8)} M67 142 l10 -10`, role: 'soft' },
        ...FRANKY_TOOLS,
      ],
    },
  ],
  // The same top hat with the pigeon on its brim, moved aside and made
  // smaller, and the white half-mask of CP0 stood beside it: the eye band with its two slits
  // and the markings that curve beneath them. He is first seen wearing it in
  // 746 (ch. 801), on Dressrosa after Doflamingo's fall.
  'rob-lucci': [
    {
      episode: 746,
      chapter: 801,
      value: [
        ...waterSevenArt['rob-lucci']
          .slice(0, -1)
          .map((stroke) => ({ ...stroke, transform: HAT_ASIDE })),
        {
          d: 'M-24 -8 Q0 -17 24 -8 L22 6 Q14 12 6 8 L0 2 L-6 8 Q-14 12 -22 6 Z',
          transform: MASK_LEAN,
        },
        {
          d: 'M-17 -1 Q-11 -6 -5 -1 Q-11 3 -17 -1 Z M17 -1 Q11 -6 5 -1 Q11 3 17 -1 Z',
          role: 'accent',
          transform: MASK_LEAN,
        },
        {
          d: 'M-16 4 q4 4 9 1 M16 4 q-4 4 -9 1',
          role: 'accent',
          transform: MASK_LEAN,
        },
        shadow(80, 166, 70),
      ],
    },
  ],
  // The same bicycle in 3/4 on the same sheet of ice, its back wheel resting
  // against a pole planted at the ice's near corner. The pole flies a black flag with a ragged edge, hatched,
  // never filled, and with no mark on it. At 736 (ch. 793) the Five Elders
  // tell Sakazuki that Kuzan joining the Blackbeard Pirates is a stain on
  // the Marines.
  'kuzan': [
    {
      episode: 736,
      chapter: 793,
      value: [
        ...KUZAN_BICYCLE,
        { d: `${circle(16, 9, 3)} M16 12 V138` },
        {
          d: 'M16 14 C37 8 63 22 89 14 L83 24 L91 32 L83 41 L91 48 L85 56 C63 64 39 50 16 56',
        },
        {
          d: 'M25 50 l7 -28 M37 52 l8 -32 M49 54 l8 -32 M61 54 l8 -32 M73 52 l7 -28',
          role: 'ambient',
        },
        ...KUZAN_ICE,
      ],
    },
  ],
}
