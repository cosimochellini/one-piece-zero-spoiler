import { cell, circle, dots, ellipse, house, SEA, shadow } from './primitives'
import type { Drawings } from './stroke'

/** The drawings of the records filed in the fish man island stretch of the route. */
export const fishManIslandArt = {
  // A bubble dome over a row of houses, the root of a great tree coming down
  // through it.
  'fish-man-island': [
    { d: 'M20 150 C20 20 140 20 140 150' },
    { d: 'M14 150 H146' },
    { d: cell(36, 96), role: 'soft' },
    { d: cell(104, 96), role: 'soft' },
    { d: house(40, 24, 130, 116) },
    { d: house(96, 24, 130, 116) },
    { d: 'M80 12 C76 40 86 70 80 130', role: 'accent' },
    { d: 'M80 44 C62 46 50 38 46 24', role: 'accent' },
    { d: 'M80 66 C98 66 110 58 114 44', role: 'accent' },
    ...SEA,
  ],

  // A scythe, the mud still running off the blade.
  caribou: [
    { d: 'M44 184 C58 140 76 96 96 52' },
    { d: 'M52 186 C66 142 84 98 104 54' },
    { d: 'M44 184 L52 186 M96 52 L104 54' },
    { d: 'M60 156 l10 4 M72 128 l10 4', role: 'soft' },
    { d: 'M100 53 C74 44 44 52 26 74 C48 70 76 70 96 78 Z', role: 'accent' },
    { d: 'M94 70 C70 62 46 66 30 78', role: 'accent' },
    { d: 'M40 84 q-3 10 1 15 q5 -5 2 -15z', role: 'soft' },
    {
      d: dots([
        [56, 100],
        [70, 94],
        [84, 96],
      ]),
      role: 'soft',
    },
    shadow(70, 192, 34),
  ],
  // A spade, and the crosses of the row it has already filled.
  coribou: [
    { d: 'M48 20 C40 30 40 42 48 52 M48 20 C56 30 56 42 48 52' },
    { d: 'M44 52 h8 V108 h-8z' },
    { d: 'M34 108 H62 L58 142 q-10 8 -20 0 Z', role: 'accent' },
    { d: 'M48 112 V140', role: 'accent' },
    { d: 'M92 118 V158 M84 130 H100', role: 'soft' },
    { d: 'M116 124 V158 M108 134 H124', role: 'soft' },
    { d: 'M138 130 V158 M132 138 H144', role: 'soft' },
    { d: 'M20 158 H156', role: 'ambient' },
    shadow(54, 168, 26),
  ],

  // A harpoon, the barbs turned back under the point.
  hammond: [
    { d: 'M72 190 L94 54' },
    { d: 'M82 191 L104 55' },
    { d: 'M72 190 L82 191' },
    { d: 'M76 160 h10 M80 132 h10', role: 'soft' },
    { d: 'M94 54 L99 14 L104 55 Z', role: 'accent' },
    { d: 'M95 48 L72 38 L93 60 Z', role: 'accent' },
    { d: 'M103 49 L126 42 L105 61 Z', role: 'accent' },
    { d: 'M99 20 V52', role: 'soft' },
    shadow(84, 196, 26),
  ],

  // A crystal ball on a café counter, a shark's tail rising behind it.
  shyarly: [
    { d: circle(72, 92, 34), role: 'accent' },
    { d: 'M52 78 q8 -12 22 -16', role: 'accent' },
    { d: 'M58 126 h28 l6 12 h-40z' },
    { d: 'M18 138 H146 V152 H18 Z' },
    { d: 'M30 152 V178 M134 152 V178' },
    { d: 'M114 126 C126 104 124 74 110 52 C130 64 144 92 138 126 Z' },
    { d: 'M120 112 C124 94 122 76 114 62', role: 'soft' },
    shadow(80, 186, 56),
  ],

  // A ship's wheel with an axe buried in the rim.
  'vander-decken-ix': [
    { d: circle(76, 100, 44), role: 'accent' },
    { d: circle(76, 100, 30) },
    { d: circle(76, 100, 8) },
    { d: 'M76 56 V70 M76 130 V144 M32 100 H46 M106 100 H120' },
    { d: 'M45 69 L55 79 M107 69 L97 79 M45 131 L55 121 M107 131 L97 121' },
    { d: 'M76 46 V56 M76 144 V154 M22 100 H32 M120 100 H130', role: 'soft' },
    { d: 'M132 178 L74 96' },
    { d: 'M142 172 L84 90' },
    { d: 'M74 96 C60 88 50 72 54 58 C68 62 80 76 84 90 Z', role: 'accent' },
    shadow(86, 190, 42),
  ],

  // A trident, and one of the pills that go with it.
  'hody-jones': [
    { d: 'M74 194 V96 M86 194 V96' },
    { d: 'M72 196 h16' },
    { d: 'M76 150 h8 M76 124 h8', role: 'soft' },
    { d: 'M54 96 H106' },
    { d: 'M80 96 V26 L84 14 L80 6 L76 14 L80 26', role: 'accent' },
    { d: 'M56 96 V46 L60 36 L56 28 L52 36 L56 46', role: 'accent' },
    { d: 'M104 96 V46 L108 36 L104 28 L100 36 L104 46', role: 'accent' },
    { d: circle(128, 160, 15) },
    { d: 'M116 154 q12 8 24 0', role: 'soft' },
    shadow(80, 198, 28),
  ],

  // A coral throne with the crown left on the seat, and the king's trident
  // standing beside it.
  neptune: [
    { d: 'M30 190 V118 H106 V190' },
    { d: 'M30 118 C30 40 106 40 106 118' },
    { d: 'M30 134 H106', role: 'soft' },
    { d: 'M42 190 V134 M94 190 V134', role: 'soft' },
    { d: 'M46 108 V78 l12 12 l10 -20 l10 20 l12 -12 V108 Z', role: 'accent' },
    { d: 'M46 98 H90', role: 'accent' },
    { d: 'M132 190 V82' },
    { d: 'M120 82 H144' },
    { d: 'M132 82 V40 M122 82 V54 M142 82 V54' },
    {
      d: 'M132 40 l3 -8 l-3 -6 l-3 6 l3 8 M122 54 l3 -7 l-3 -5 l-3 5 l3 7 M142 54 l3 -7 l-3 -5 l-3 5 l3 7',
    },
    shadow(74, 196, 50),
  ],
  // A lance whose head is cut in the shape of a shark.
  fukaboshi: [
    { d: 'M46 186 L96 62' },
    { d: 'M56 190 L106 66' },
    { d: 'M46 186 L56 190' },
    { d: 'M60 158 l10 4 M72 128 l10 4', role: 'soft' },
    {
      d: 'M96 62 C92 40 100 18 120 8 C124 26 122 48 106 66 Z',
      role: 'accent',
    },
    { d: 'M110 28 L128 18 L118 40 Z', role: 'accent' },
    { d: 'M98 52 l12 -4 M100 44 l12 -4', role: 'soft' },
    shadow(78, 194, 30),
  ],
  // A sabre, and two notes going up off the edge of it.
  ryuboshi: [
    { d: 'M48 158 C74 132 104 94 126 44' },
    { d: 'M58 166 C84 140 114 102 134 50' },
    { d: 'M126 44 L134 50' },
    { d: 'M42 150 L70 178' },
    { d: 'M48 160 L32 176 M58 170 L42 186' },
    { d: 'M32 176 L42 186' },
    { d: `${ellipse(44, 72, 8, 6)} M52 72 V40 q12 2 12 10`, role: 'accent' },
    { d: `${ellipse(74, 40, 8, 6)} M82 40 V8 q12 2 12 10`, role: 'accent' },
    shadow(84, 192, 40),
  ],
  // A sunfish with its two fins out, and a sabre standing beside it.
  manboshi: [
    { d: circle(58, 102, 34), role: 'accent' },
    { d: 'M54 70 L62 30 L80 72', role: 'accent' },
    { d: 'M56 134 L64 174 L84 132', role: 'accent' },
    { d: 'M90 86 C106 92 106 114 90 120' },
    { d: 'M30 92 q10 -8 18 -2', role: 'soft' },
    { d: 'M124 150 V42 C124 28 130 18 132 12 C134 18 140 28 140 42 V150' },
    { d: 'M114 150 H150' },
    { d: 'M126 154 V186 H138 V154' },
    { d: 'M126 164 H138 M126 174 H138', role: 'soft' },
    shadow(66, 192, 46),
  ],

  // A great pearl on its pin, left on the sill of a tower window.
  shirahoshi: [
    { d: 'M44 158 V76 C44 36 116 36 116 76 V158 Z' },
    { d: 'M80 158 V44', role: 'soft' },
    { d: 'M44 100 H116', role: 'soft' },
    { d: 'M32 158 H128 V172 H32 Z' },
    { d: circle(80, 110, 18), role: 'accent' },
    { d: 'M70 102 q6 -8 14 -7', role: 'accent' },
    { d: 'M80 128 V158', role: 'accent' },
    { d: 'M24 172 H136', role: 'ambient' },
    shadow(80, 180, 48),
  ],
  // Eight blades out of one grip, the poison still on the points.
  hyouzou: [
    { d: 'M84 86 L80 46 L76 86 Z' },
    { d: 'M76 122 L80 162 L84 122 Z' },
    { d: 'M62 100 L22 104 L62 108 Z' },
    { d: 'M98 100 L138 104 L98 108 Z' },
    { d: 'M64.5 94.1 L39 63 L70.1 88.5 Z' },
    { d: 'M89.9 88.5 L121 63 L95.5 94.1 Z' },
    { d: 'M64.5 113.9 L39 145 L70.1 119.5 Z' },
    { d: 'M89.9 119.5 L121 145 L95.5 113.9 Z' },
    { d: circle(80, 104, 16), role: 'accent' },
    { d: circle(80, 104, 8), role: 'soft' },
    {
      d: dots([
        [80, 52],
        [125, 68],
        [132, 104],
      ]),
      role: 'accent',
    },
  ],
  // A hooded cloak with the coral pattern already coming through it.
  zeo: [
    { d: 'M62 46 C62 32 98 32 98 46 C98 58 92 64 86 66' },
    {
      d: 'M62 46 C48 58 34 96 28 154 C50 166 110 166 132 154 C126 96 112 58 98 46',
    },
    { d: 'M28 154 C50 148 110 148 132 154', role: 'soft' },
    { d: 'M70 70 C64 100 60 130 60 154', role: 'soft' },
    { d: 'M92 70 C98 100 102 130 102 154', role: 'soft' },
    { d: 'M42 116 q11 -9 19 0 q-9 11 -19 0z', role: 'accent' },
    { d: 'M92 100 q13 -6 19 4 q-11 9 -19 -4z', role: 'accent' },
    { d: 'M56 138 q14 -6 20 4 q-12 9 -20 -4z', role: 'accent' },
    { d: 'M18 178 V152 C18 140 10 134 12 122', role: 'ambient' },
    { d: 'M144 178 V148 C144 136 152 130 150 118', role: 'ambient' },
    { d: 'M8 178 H152', role: 'ambient' },
  ],
  // A wall bitten through, the two rows of teeth still in the stone.
  daruma: [
    { d: 'M18 34 H142 V180 H18 Z' },
    { d: 'M18 70 H142 M18 106 H142 M18 142 H142', role: 'soft' },
    {
      d: 'M50 34 V70 M94 34 V70 M32 70 V106 M76 70 V106 M120 70 V106 M50 142 V180 M94 142 V180',
      role: 'soft',
    },
    {
      d: 'M38 96 l8 14 l8 -14 l8 14 l8 -14 l8 14 l8 -14 l8 14 l8 -14 l8 14 l8 -14',
      role: 'accent',
    },
    {
      d: 'M38 144 l8 -14 l8 14 l8 -14 l8 14 l8 -14 l8 14 l8 -14 l8 14 l8 -14 l8 14',
      role: 'accent',
    },
    { d: 'M38 96 V144 M118 96 V144', role: 'accent' },
    {
      d: dots([
        [28, 168],
        [128, 160],
        [122, 176],
      ]),
    },
    { d: 'M8 188 H152', role: 'ambient' },
  ],
  // Two lances, each head cut like a squid put out to dry.
  'ikaros-much': [
    { d: 'M34 190 L62 44' },
    { d: 'M44 192 L72 46' },
    { d: 'M40 156 h10 M46 126 h10', role: 'soft' },
    { d: 'M62 44 L67 10 L72 46 Z M63 36 L46 24 L64 32 Z', role: 'accent' },
    { d: 'M126 190 L98 44' },
    { d: 'M116 192 L88 46' },
    { d: 'M120 156 h-10 M114 126 h-10', role: 'soft' },
    { d: 'M98 44 L93 10 L88 46 Z M97 36 L114 24 L96 32 Z', role: 'accent' },
    { d: 'M34 190 L44 192 M126 190 L116 192' },
    shadow(80, 196, 52),
  ],
  // A hammer with a head wider than the man who swings it.
  dosun: [
    { d: 'M74 194 V96 M88 194 V96' },
    { d: 'M72 196 h18' },
    { d: 'M76 170 h10 M76 146 h10', role: 'soft' },
    { d: 'M34 44 H128 V96 H34 Z', role: 'accent' },
    { d: 'M34 60 H128 M34 82 H128', role: 'soft' },
    { d: 'M28 50 H34 V90 H28 Z', role: 'accent' },
    { d: 'M128 50 H136 V90 H128 Z', role: 'accent' },
    { d: 'M70 96 H92 V110 H70 Z' },
    shadow(80, 198, 34),
  ],

  // A shipwright's mallet, and the bubbles going up off it.
  den: [
    { d: 'M46 60 L86 20 L120 54 L80 94 Z', role: 'accent' },
    { d: 'M56 50 L92 84 M66 40 L102 74', role: 'soft' },
    { d: 'M74 88 L44 156' },
    { d: 'M86 94 L56 162' },
    { d: 'M44 156 C38 172 44 180 52 178 C60 176 62 168 56 162' },
    {
      d: `${circle(126, 112, 9)} ${circle(138, 84, 6)} ${circle(120, 62, 4)}`,
      role: 'accent',
    },
    { d: `${circle(30, 100, 5)} ${circle(22, 74, 3)}`, role: 'soft' },
    shadow(76, 190, 46),
  ],

  // A petition sheet with one signature at the foot of it, and the pen.
  otohime: [
    { d: 'M36 22 H118 V178 H36 Z' },
    { d: 'M50 46 H104 M50 62 H104 M50 78 H92', role: 'soft' },
    { d: 'M50 102 H104 M50 118 H104 M50 134 H104', role: 'ambient' },
    {
      d: 'M50 160 C58 148 64 166 72 154 C78 146 84 162 94 148',
      role: 'accent',
    },
    { d: 'M46 166 H104', role: 'accent' },
    { d: 'M126 170 C132 136 140 104 148 74' },
    { d: 'M136 172 C142 138 148 108 150 78' },
    { d: 'M148 74 C152 68 152 74 150 78' },
    shadow(76, 188, 52),
  ],
  // A shackle broken open, the chain still on it, and the sun that took its
  // place.
  'fisher-tiger': [
    { d: 'M84 122 A34 34 0 1 0 78 170 L74 160 A24 24 0 1 1 77 132 Z' },
    { d: 'M84 122 l8 -6 l-4 10 l10 -2', role: 'soft' },
    { d: 'M77 132 l10 -4 l-4 8 l10 0', role: 'soft' },
    { d: `${ellipse(98, 180, 10, 6)} ${ellipse(120, 186, 10, 6)}` },
    { d: circle(112, 62, 20), role: 'accent' },
    {
      d: 'M112 34 V20 M112 90 V104 M84 62 H70 M140 62 H154 M92 42 l-10 -10 M132 82 l10 10 M132 42 l10 -10 M92 82 l-10 10',
      role: 'accent',
    },
    { d: 'M100 52 q12 -8 24 0', role: 'soft' },
    shadow(70, 192, 44),
  ],
  // A doctor's bag on the counter, a shark fin behind it.
  aladine: [
    { d: 'M30 108 H130 V174 H30 Z' },
    { d: 'M30 108 C30 90 130 90 130 108' },
    { d: 'M64 94 C64 82 96 82 96 94' },
    { d: 'M30 130 H130', role: 'soft' },
    { d: 'M70 108 H90 V126 H70 Z' },
    { d: 'M66 150 H94 M80 136 V164', role: 'accent' },
    { d: 'M112 96 C116 64 128 44 148 30 C146 58 138 84 126 100' },
    { d: 'M18 178 H142', role: 'ambient' },
    shadow(80, 184, 54),
  ],

  // A pair of dark glasses lying under a tortoise shell.
  pekoms: [
    { d: 'M24 128 C24 78 136 78 136 128 Z' },
    { d: 'M60 128 V104 l20 -12 l20 12 v24 Z', role: 'soft' },
    { d: 'M36 128 V112 l24 -8 M124 128 V112 l-24 -8', role: 'soft' },
    { d: 'M80 92 V84', role: 'soft' },
    { d: 'M24 128 H136 V140 H24 Z' },
    { d: ellipse(54, 166, 20, 12), role: 'accent' },
    { d: ellipse(106, 166, 20, 12), role: 'accent' },
    {
      d: 'M74 162 q6 -4 12 0 M34 160 L18 154 M126 160 L142 154',
      role: 'accent',
    },
    shadow(80, 186, 56),
  ],
  // An egg in a top hat, with a cane stood beside it.
  'baron-tamago': [
    {
      d: 'M80 184 C50 184 36 154 40 120 C44 88 60 66 80 66 C100 66 116 88 120 120 C124 154 110 184 80 184 Z',
      role: 'accent',
    },
    { d: 'M50 72 H110' },
    { d: 'M60 72 V30 H100 V72' },
    { d: 'M60 50 H100', role: 'soft' },
    { d: 'M52 132 q28 12 56 0', role: 'soft' },
    { d: 'M142 188 V74' },
    { d: 'M142 74 C142 58 124 58 124 74' },
    { d: 'M138 188 h8' },
    shadow(80, 192, 50),
  ],
} satisfies Drawings
