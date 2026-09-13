import { circle, ellipse, dots, polygon, cell, SEA, shadow } from './primitives'
import type { Drawings } from './stroke'

/** The drawings of the records filed in the wano stretch of the route. */
export const wanoArt = {
  // A closed country: one mountain, layered cloud, roofs at its foot.
  wano: [
    { d: 'M20 130 L80 34 L140 130', role: 'accent' },
    { d: 'M62 64 q10 8 18 0 q8 8 18 0', role: 'accent' },
    {
      d: 'M34 98 q14 -8 28 0 t28 0 t28 0 M22 114 q14 -8 28 0 t28 0 t28 0 t28 0',
    },
    { d: 'M48 150 l12 -14 h40 l12 14z M62 134 l8 -10 h20 l8 10z' },
    ...SEA.slice(2),
  ],

  // A bowl of red bean soup, and the dango skewer laid beside it.
  tama: [
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

  // A katana with a chrysanthemum for a guard.
  kikunojo: [
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
  shinobu: [
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
  hyogoro: [
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
  queen: [
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
  king: [
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
  komurasaki: [
    { d: 'M30 138 L56 112 L90 146 L64 172 Z' },
    { d: 'M40 138 L58 156', role: 'soft' },
    { d: 'M56 112 L124 44 M64 120 L132 52' },
    { d: 'M124 44 L132 52' },
    { d: 'M118 38 l10 -8 M128 48 l10 -8' },
    {
      d: 'M60 154 L120 46 M64 157 L124 49 M68 160 L128 52',
      role: 'accent',
    },
    { d: 'M18 42 L34 100' },
    { d: circle(16, 34, 9), role: 'accent' },
    shadow(70, 182, 44),
  ],

  // A round paper fan and a plate of dango.
  toko: [
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
  kyoshiro: [
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
  gyukimaru: [
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
  fukurokuju: [
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
  kawamatsu: [
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
  izo: [
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
  ulti: [
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
  sasaki: [
    { d: 'M16 152 C54 136 92 134 120 140 L120 150 C92 144 54 146 16 160 Z' },
    { d: 'M118 132 V158' },
    { d: 'M124 138 L150 132 L152 142 L126 148 Z' },
    {
      d: 'M56 128 C52 92 66 56 96 32 C102 60 92 104 78 130 Z',
      role: 'accent',
    },
    { d: 'M70 126 C68 94 78 62 94 36', role: 'accent' },
    { d: 'M60 106 q12 6 21 0 M64 82 q10 6 18 0', role: 'soft' },
    { d: 'M4 184 H156', role: 'ambient' },
  ],

  // A studded club, and the chain it broke.
  yamato: [
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
    {
      d: 'M19.4 143 A70 70 0 0 1 140.6 143 L97.3 168 A20 20 0 0 0 62.7 168 Z',
    },
    {
      d: 'M70 160.7 L45 117.4 M80 158 V108 M90 160.7 L115 117.4',
      role: 'soft',
    },
    { d: circle(80, 176, 4) },
  ],
} satisfies Drawings
