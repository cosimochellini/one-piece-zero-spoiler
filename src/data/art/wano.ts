import {
  cell,
  circle,
  dots,
  ellipse,
  polygon,
  SEA,
  shadow,
} from '~/lib/svg/primitives'

import type { Drawings, Redrawings } from './stroke'

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

  // The shogun's fan, open over a stack of serpent scales.
  'kurozumi-orochi': [
    {
      d: 'M27.6 119.3 A64 64 0 0 1 132.4 119.3 L98 143.4 A22 22 0 0 0 62 143.4 Z',
    },
    { d: 'M69 136.9 L48 100.6 M80 134 V92 M91 136.9 L112 100.6', role: 'soft' },
    { d: circle(80, 150, 4) },
    { d: 'M62 143.4 L58 152 M98 143.4 L102 152' },
    {
      d: 'M50 168 q7.5 -8 15 0 M65 168 q7.5 -8 15 0 M80 168 q7.5 -8 15 0 M95 168 q7.5 -8 15 0',
      role: 'accent',
    },
    {
      d: 'M42.5 176 q7.5 -8 15 0 M57.5 176 q7.5 -8 15 0 M72.5 176 q7.5 -8 15 0 M87.5 176 q7.5 -8 15 0 M102.5 176 q7.5 -8 15 0',
      role: 'accent',
    },
    {
      d: 'M50 184 q7.5 -8 15 0 M65 184 q7.5 -8 15 0 M80 184 q7.5 -8 15 0 M95 184 q7.5 -8 15 0',
      role: 'accent',
    },
    { d: 'M4 190 H156', role: 'ambient' },
  ],

  // A kunai, and the fruit ripening beside it.
  'shinobu': [
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

  // A microphone with a long tail coiled round it.
  'queen': [
    { d: circle(80, 50, 22) },
    { d: 'M62 42 h36 M60 50 h40 M62 58 h36', role: 'soft' },
    { d: 'M68 70 L70 96 h20 L92 70' },
    { d: 'M72 96 v42 h16 v-42' },
    {
      d: 'M8 186 C40 194 78 180 70 146 C64 118 94 102 120 112 L116 124 C96 116 80 128 84 148 C92 184 40 192 10 176 Z',
      role: 'accent',
    },
    { d: 'M34 176 C52 174 62 164 64 152', role: 'accent' },
    { d: 'M4 188 H156', role: 'ambient' },
  ],

  // A pteranodon's wing with fire along its edge, and the mask below it.
  'king': [
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

  // A shamisen, and the hairpin left lying by it.
  'komurasaki': [
    { d: 'M30 138 L56 112 L90 146 L64 172 Z' },
    { d: 'M40 138 L58 156', role: 'soft' },
    { d: 'M56 112 L124 44 M64 120 L132 52' },
    { d: 'M124 44 L132 52' },
    { d: 'M118 38 l10 -8 M128 48 l10 -8' },
    { d: 'M60 154 L120 46 M64 157 L124 49 M68 160 L128 52', role: 'accent' },
    { d: 'M18 42 L34 100' },
    { d: circle(16, 34, 9), role: 'accent' },
    shadow(70, 182, 44),
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

  // A post with a kimono and a festival mask hung on it.
  'shimotsuki-yasuie': [
    { d: 'M74 34 V186 M86 34 V186' },
    { d: 'M26 62 H134 M26 72 H134' },
    { d: 'M50 78 C46 116 46 152 50 172 H110 C114 152 114 116 110 78 Z' },
    { d: 'M66 78 L80 112 L94 78' },
    { d: 'M48 130 H112', role: 'soft' },
    { d: 'M50 82 L26 90 V128 L50 122 M110 82 L134 90 V128 L110 122' },
    { d: ellipse(128, 150, 15, 19), role: 'accent' },
    { d: 'M114 144 h28', role: 'accent' },
    { d: 'M128 131 C128 110 126 90 130 72', role: 'ambient', dashed: true },
    { d: 'M4 190 H156', role: 'ambient' },
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

  // A kappa's straw hat over a sword.
  'kawamatsu': [
    { d: 'M22 124 C38 70 122 70 138 124 Z' },
    { d: 'M22 124 q58 16 116 0' },
    { d: 'M80 86 L44 120 M80 86 V126 M80 86 L116 120', role: 'soft' },
    { d: circle(80, 80, 5) },
    { d: 'M140 136 L58 148 L58 156 L140 144 Z', role: 'accent' },
    { d: 'M54 140 V164', role: 'accent' },
    { d: 'M18 154 L50 149 L50 158 L18 163 Z' },
    { d: 'M26 152 v8 M34 151 v8', role: 'soft' },
    { d: 'M4 186 H156', role: 'ambient' },
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

  // A fox mask hanging from a walking stick.
  'kurozumi-higurashi': [
    { d: 'M112 186 C108 140 104 100 102 66' },
    { d: 'M102 66 C100 50 86 46 80 56' },
    { d: 'M106 184 h12' },
    {
      d: 'M46 88 C46 72 78 72 78 88 C78 110 68 128 62 128 C56 128 46 110 46 88 Z',
      role: 'accent',
    },
    { d: 'M46 88 L42 62 L58 76 M78 88 L82 62 L66 76', role: 'accent' },
    { d: 'M50 98 q12 6 24 0', role: 'soft' },
    { d: 'M62 78 C74 72 90 70 100 68', role: 'ambient', dashed: true },
    { d: 'M4 190 H156', role: 'ambient' },
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

  // A helmet with one long fang.
  'whos-who': [
    {
      d: 'M34 112 C34 52 126 52 126 112 C126 136 110 150 80 150 C50 150 34 136 34 112 Z',
    },
    { d: 'M60 66 C68 40 92 40 100 66' },
    { d: 'M38 100 C60 108 100 108 122 100' },
    {
      d: dots([
        [46, 110],
        [66, 116],
        [94, 116],
        [114, 110],
      ]),
      role: 'soft',
    },
    {
      d: 'M64 144 C56 162 60 180 72 186 C70 170 72 154 78 144 Z',
      role: 'accent',
    },
    { d: 'M68 150 C64 164 66 176 72 182', role: 'accent' },
    shadow(80, 192, 30),
  ],

  // A courtesan's pipe, and the web spun over it.
  'black-maria': [
    {
      d: 'M6 6 V110 M6 6 L44 100 M6 6 L80 76 M6 6 L104 34 M6 6 H112',
      role: 'accent',
    },
    {
      d: 'M6 34 C26 38 34 30 36 6 M6 62 C44 68 62 48 66 6 M6 92 C62 98 92 66 98 6',
      role: 'accent',
    },
    { d: 'M30 170 L126 62' },
    { d: 'M36 176 L132 68' },
    { d: 'M126 62 L132 68' },
    { d: 'M126 60 L140 44 L150 54 L136 70 Z' },
    { d: 'M30 170 L18 182 L26 190 L38 178 Z' },
    { d: 'M148 36 c6 -10 -4 -14 2 -24', role: 'ambient', dashed: true },
  ],

  // A triceratops horn over a sabre.
  'sasaki': [
    { d: 'M16 152 C54 136 92 134 120 140 L120 150 C92 144 54 146 16 160 Z' },
    { d: 'M118 132 V158' },
    { d: 'M124 138 L150 132 L152 142 L126 148 Z' },
    { d: 'M56 128 C52 92 66 56 96 32 C102 60 92 104 78 130 Z', role: 'accent' },
    { d: 'M70 126 C68 94 78 62 94 36', role: 'accent' },
    { d: 'M60 106 q12 6 21 0 M64 82 q10 6 18 0', role: 'soft' },
    { d: 'M4 184 H156', role: 'ambient' },
  ],

  // A studded club, and the chain it broke.
  'yamato': [
    { d: 'M44 178 L66 134 M52 182 L74 138' },
    { d: 'M66 134 L84 142 L118 52 L104 42z', role: 'accent' },
    {
      d: dots([
        [84, 108],
        [96, 114],
        [90, 90],
        [102, 96],
        [96, 72],
        [108, 78],
        [102, 56],
      ]),
      role: 'accent',
    },
    { d: circle(48, 180, 6) },
    { d: ellipse(110, 150, 8, 5) },
    { d: ellipse(126, 158, 8, 5) },
    { d: ellipse(142, 172, 8, 5), role: 'ambient' },
    { d: 'M136 150 l6 -6 M132 174 l-6 6', role: 'ambient' },
  ],

  // A pair of binoculars over an open fan.
  'bao-huang': [
    { d: `${circle(56, 80, 24)} ${circle(112, 80, 24)}`, role: 'accent' },
    { d: `${circle(56, 80, 15)} ${circle(112, 80, 15)}`, role: 'soft' },
    { d: 'M76 72 h16 v16 h-16 Z' },
    { d: 'M32 72 h-8 v16 h8 M136 72 h8 v16 h-8' },
    { d: 'M19.4 143 A70 70 0 0 1 140.6 143 L97.3 168 A20 20 0 0 0 62.7 168 Z' },
    {
      d: 'M70 160.7 L45 117.4 M80 158 V108 M90 160.7 L115 117.4',
      role: 'soft',
    },
    { d: circle(80, 176, 4) },
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

  // A long sword laid flat, a star for its guard, flames climbing off the
  // blade.
  'holdem': [
    { d: 'M60 96 H146 L152 100 L146 104 H60' },
    { d: 'M64 100 H140', role: 'soft' },
    {
      d: 'M48.0 84.0 L52.1 94.3 L63.2 95.1 L54.7 102.2 L57.4 112.9 L48.0 107.0 L38.6 112.9 L41.3 102.2 L32.8 95.1 L43.9 94.3 Z',
      role: 'accent',
    },
    { d: 'M34 96 H10 V104 H34' },
    { d: 'M16 96 v8 M22 96 v8 M28 96 v8', role: 'soft' },
    {
      d: 'M80 94 C70 80 86 72 78 56 C94 66 96 82 88 94 M110 94 C102 76 118 70 112 50 C128 64 128 84 118 94 M136 94 C130 82 142 76 138 64 C148 74 148 88 142 94',
      role: 'accent',
    },
    shadow(80, 130, 60),
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

  // A swollen bag of wind over two short blades crossed beneath it.
  'fujin': [
    { d: 'M24 96 C24 40 136 40 136 96 C120 84 40 84 24 96 Z' },
    { d: `${circle(22, 100, 6)} ${circle(138, 100, 6)}` },
    {
      d: 'M58 70 q8 -10 16 0 q-8 6 -12 -2 M90 62 q8 -10 16 0 q-8 6 -12 -2',
      role: 'soft',
    },
    {
      d: 'M52 170 L114 116 L118 120 L56 174 Z M108 170 L46 116 L42 120 L104 174 Z',
      role: 'accent',
    },
    {
      d: 'M52 170 L40 180 L44 184 L56 174 M108 170 L120 180 L116 184 L104 174',
    },
    { d: 'M46 166 l12 12 M114 166 l-12 12' },
    shadow(80, 192, 44),
  ],

  // A sword whole in its sash, and its twin snapped in two below it.
  'hotei': [
    { d: 'M14 104 C54 94 106 94 146 104 L146 118 C106 108 54 108 14 118 Z' },
    { d: 'M30 150 L134 58 M34 154 L138 62 M134 58 L138 62' },
    { d: 'M30 150 L18 162 L22 166 L34 154' },
    { d: 'M24 146 l12 12', role: 'soft' },
    { d: 'M16 176 H44 V186 H16 Z' },
    { d: 'M44 172 V190' },
    { d: 'M44 178 H78 L84 181 L78 184 H44', role: 'accent' },
    { d: 'M92 178 L90 181 L94 184 H140 L148 181 L140 178 Z', role: 'accent' },
    { d: 'M20 181 H40', role: 'soft' },
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
  // A shamisen standing on its body, its plectrum beside it, a thin moon
  // behind the pegs.
  'kozuki-hiyori': [
    {
      d: 'M50 114 H106 Q112 114 112 120 V160 Q112 166 106 166 H50 Q44 166 44 160 V120 Q44 114 50 114 Z',
    },
    { d: 'M74 114 V34 H82 V114' },
    { d: 'M73 34 L75 16 H81 L83 34' },
    { d: 'M64 20 H75 M81 24 H92 M64 28 H75' },
    { d: 'M76 36 V152 M78 36 V152 M80 36 V152', role: 'accent' },
    { d: 'M68 152 H88' },
    {
      d: 'M122 154 L124 128 L106 100 Q124 92 142 100 L128 128 L126 154 Z',
      role: 'accent',
    },
    {
      d: 'M122 22 C108 28 106 50 120 58 C104 56 98 32 112 22 C115 20 119 20 122 22 Z',
      role: 'soft',
    },
    shadow(80, 180, 48),
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

  // Two long horns curving up over a horse's tail that sweeps down to the
  // ground.
  'fuga': [
    { d: 'M66 100 C40 84 30 52 40 20 C46 52 58 74 78 90 Z', role: 'accent' },
    {
      d: 'M94 100 C120 84 130 52 120 20 C114 52 102 74 82 90 Z',
      role: 'accent',
    },
    { d: ellipse(80, 106, 10, 4) },
    { d: 'M80 110 C70 132 92 152 74 184' },
    { d: 'M86 110 C84 136 106 152 96 186' },
    { d: 'M74 110 C56 132 70 160 52 180', role: 'soft' },
    shadow(80, 190, 36),
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
  // A katana with a chrysanthemum for a guard: she draws a sword for the
  // first time at 901 (ch. 914), when Tama is taken from the tea house.
  kiku: [
    {
      episode: 901,
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
