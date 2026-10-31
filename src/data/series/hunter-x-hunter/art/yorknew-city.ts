import type { Drawings } from '~/data/art/stroke'
import { circle, dots, ellipse, shadow } from '~/lib/svg/primitives'

/**
 * The Yorknew City records (#900), each at its named scene: first-pass
 * drawings, graded and redrawn in #901.
 */
export const YORKNEW_CITY_DRAWINGS = {
  // Melody's brimmed hat in 3/4, the band in tint and the crown's far side
  // hatched: she wears a hat in public, and is one of the six applicants
  // in the mansion's test, episode 40 / chapter 68. No flute, which she
  // plays later.
  'melody': [
    { d: ellipse(80, 130, 58, 16) },
    { d: 'M22 130 V134 C40 150 120 150 138 134 V130', role: 'soft' },
    { d: 'M44 128 C40 96 50 66 80 64 C110 66 120 96 116 128' },
    { d: 'M44 128 C58 138 102 138 116 128' },
    {
      d: 'M45 116 C60 126 100 126 115 116 M44 106 C60 116 100 116 116 106',
      role: 'accent',
    },
    { d: 'M66 68 C72 76 88 76 94 68', role: 'soft' },
    { d: 'M104 78 l6 -4 M108 90 l6 -4 M110 100 l5 -3', role: 'ambient' },
    shadow(80, 182, 50),
  ],
  // A writing brush across a blank sheet, the inked tip in tint, an ink
  // stone beside it: Basho writes the haiku that come true in the
  // mansion's test, episode 40 / chapter 68. No words on the sheet.
  'basho': [
    { d: 'M24 120 L108 96 L140 132 L56 158 Z' },
    { d: 'M108 96 Q118 104 116 112', role: 'soft' },
    { d: 'M38 62 L44 56 L110 120 L104 126 Z' },
    {
      d: 'M104 126 C108 136 116 142 124 142 C122 134 116 126 110 120',
      role: 'accent',
    },
    { d: 'M48 70 l6 -6 M56 78 l6 -6', role: 'soft' },
    { d: ellipse(124, 80, 16, 6) },
    { d: 'M108 80 V86 C112 92 136 92 140 86 V80', role: 'soft' },
    { d: 'M62 152 l6 -6 M80 146 l6 -6 M98 140 l6 -6', role: 'ambient' },
    shadow(82, 176, 56),
  ],
  // A lipstick standing open, its slanted tip in tint, the cap lying
  // beside it: Baise's kiss makes Squala her servant in the mansion's test,
  // episode 40 / chapter 68.
  'baise': [
    { d: 'M62 150 V96 M98 96 V150' },
    { d: ellipse(80, 150, 18, 5) },
    { d: ellipse(80, 96, 18, 5) },
    { d: `M68 96 V80 H92 V96 ${ellipse(80, 80, 12, 3.5)}`, role: 'soft' },
    { d: 'M70 80 V60 L90 48 V80', role: 'accent' },
    { d: 'M90 108 l6 -4 M90 122 l6 -4 M90 136 l6 -4', role: 'ambient' },
    { d: 'M106 150 L134 140 L140 152 L112 162 Z', role: 'soft' },
    shadow(86, 174, 52),
  ],
  // A dog's studded collar in 3/4, the band in tint, with its leash looped
  // up beside it: Squala commands the dogs round the mansion, episode 40 /
  // chapter 68.
  'squala': [
    { d: ellipse(70, 120, 40, 16), role: 'accent' },
    { d: 'M30 120 V128 C40 146 100 146 110 128 V120' },
    { d: 'M94 132 h12 v12 h-12 Z M100 132 V144', role: 'soft' },
    {
      d: dots([
        [44, 132],
        [56, 137],
        [82, 138],
      ]),
      role: 'soft',
    },
    { d: 'M70 144 C74 166 120 164 126 124 C130 96 104 82 116 54' },
    { d: ellipse(122, 44, 9, 12), role: 'soft' },
    { d: 'M40 136 l4 6 M52 140 l4 6', role: 'ambient' },
    shadow(78, 178, 52),
  ],
  // An empty black cloak in a heap on the floor with a sword across it,
  // the guard in tint: Tocino's figures in black, made of his aura, fall
  // empty when he is found out, episode 40 / chapter 68. The hood follows
  // the manga; the episode 40 frame is not viewed (#901).
  'shachmono-tocino': [
    { d: 'M24 152 C30 128 52 114 70 118 C90 106 120 114 136 152' },
    { d: 'M58 122 C56 102 72 94 84 100 C94 106 92 120 86 124' },
    {
      d: 'M44 148 C52 136 62 132 70 134 M96 148 C100 134 110 128 120 130',
      role: 'soft',
    },
    { d: 'M68 108 l6 -4 M70 116 l6 -4 M78 104 l5 -3', role: 'ambient' },
    { d: 'M28 168 L114 130 M30 174 L116 136 M28 168 Q24 172 30 174' },
    { d: 'M108 124 L124 142', role: 'accent' },
    { d: `M116 133 L140 123 L142 128 L118 138 ${circle(144, 125, 3)}` },
    shadow(80, 182, 62),
  ],
  // A large screen on its stand, blank but for the glare, the frame in
  // tint, with a data card in front: Dalzollene sets the applicants their
  // test from a screen, and hires the four who pass, episode 41 /
  // chapter 70. No face on the screen.
  'dalzollene': [
    { d: 'M24 40 H136 V120 H24 Z', role: 'accent' },
    { d: 'M32 48 H128 V112 H32 Z', role: 'soft' },
    { d: 'M40 100 L64 56 M52 104 L76 60', role: 'ambient' },
    { d: 'M72 120 L66 150 M88 120 L94 150 M50 150 H110' },
    { d: 'M100 160 L136 150 L142 164 L106 174 Z' },
    { d: 'M108 162 h8 v6 h-8 Z', role: 'soft' },
    shadow(80, 182, 56),
  ],
  // A pen over a stack of blank sheets, the nib in tint: Neon writes her
  // fortunes with a hand her power guides, episode 41 / chapter 71. No
  // words on the sheets.
  'neon-nostrade': [
    { d: 'M26 132 L104 112 L138 140 L60 160 Z' },
    { d: 'M26 132 V138 L60 166 L138 146 V140', role: 'soft' },
    { d: 'M42 50 L50 44 L112 116 L104 122 Z' },
    { d: 'M104 122 L120 138 L112 116', role: 'accent' },
    { d: 'M52 56 L76 84', role: 'soft' },
    { d: 'M60 64 l4 -4 M70 76 l4 -4 M80 88 l4 -4', role: 'ambient' },
    { d: 'M120 110 L140 104 L150 116', role: 'soft' },
    shadow(84, 180, 58),
  ],
  // A blank square bidding paddle on its handle, the face in tint and its
  // thickness drawn at one side: Dalzollene
  // sends Ivlenkov to bid at the Underground Auction, episode 42 /
  // chapter 72. No number on it.
  'ivlenkov': [
    {
      d: 'M50 36 H110 Q118 36 118 44 V100 Q118 108 110 108 H50 Q42 108 42 100 V44 Q42 36 50 36 Z',
      role: 'accent',
    },
    { d: 'M52 46 H108 V98 H52 Z', role: 'soft' },
    { d: 'M118 44 L124 48 V104 Q124 112 116 112 H56 L50 108', role: 'soft' },
    { d: 'M74 108 L72 168 H88 L86 108' },
    { d: 'M73 140 H87 M72 152 H88', role: 'soft' },
    { d: 'M84 118 l3 -3 M84 128 l3 -3 M84 160 l3 -3', role: 'ambient' },
    shadow(80, 184, 40),
  ],
  // Linssen's high-collared Chinese jacket from the front, the frog
  // fastenings down the side in tint: the bodyguard Dalzollene posts at the
  // back entrance, episode 42 / chapter 72. No face.
  'linssen': [
    { d: `${ellipse(80, 30, 12, 4)} M68 30 V40 M92 30 V40` },
    {
      d: 'M68 38 L42 48 L30 126 M44 130 L50 80 L50 172 H110 L110 80 L116 130 M130 126 L118 48 L92 38',
    },
    { d: 'M30 126 A7 3 12 1 0 44 130 A7 3 12 1 0 30 126', role: 'soft' },
    { d: 'M130 126 A7 3 -12 1 1 116 130 A7 3 -12 1 1 130 126', role: 'soft' },
    { d: 'M68 40 C72 52 84 56 96 52 L96 172', role: 'soft' },
    { d: 'M90 64 H102 M90 82 H102 M90 100 H102 M90 118 H102', role: 'accent' },
    {
      d: 'M54 96 l6 -5 M54 116 l6 -5 M54 136 l6 -5 M54 156 l6 -5',
      role: 'ambient',
    },
    shadow(80, 184, 46),
  ],
  // A round pincushion stuck with needles, the cushion in tint, a needle
  // and its thread lying beside it: the woman who sewed Hisoka's arms back
  // on, named on the way to the Troupe's gathering, episode 41 /
  // chapter 71. No Nen thread. For #901: the pincushion, needle and thread
  // are her Heavens Arena look (chapter 55 / episode 32); check them
  // against the chapter 71 / episode 41 frame.
  'machi': [
    { d: 'M36 120 C36 92 124 92 124 120', role: 'accent' },
    { d: ellipse(80, 120, 44, 12) },
    { d: 'M36 120 V128 C48 142 112 142 124 128 V120', role: 'soft' },
    { d: 'M80 98 V118 M56 104 L62 120 M104 104 L98 120', role: 'soft' },
    { d: 'M60 100 L52 70 M96 98 L108 64 M80 96 V58' },
    {
      d: dots([
        [52, 68],
        [108, 62],
        [80, 56],
      ]),
    },
    { d: 'M126 152 L150 134' },
    {
      d: 'M150 134 C156 122 140 112 132 120 C122 130 116 150 100 156',
      role: 'soft',
    },
    { d: 'M104 132 l6 -4 M114 128 l5 -4', role: 'ambient' },
    shadow(80, 176, 52),
  ],
  // Black-framed glasses folded on a table, seen low and at an angle, the
  // frames in tint:
  // Shizuku wears them when she takes on Gon at arm wrestling, episode
  // 42 / chapter 72. No vacuum cleaner, which she conjures later.
  'shizuku': [
    {
      d: 'M34 150 C36 140 62 134 68 142 C72 152 40 158 34 150 Z M84 136 C88 126 114 120 118 128 C122 138 90 144 84 136 Z',
      role: 'accent',
    },
    { d: 'M68 142 Q74 134 84 136' },
    { d: 'M36 146 L70 118 L126 104 M118 126 L132 114 L140 98' },
    { d: 'M44 148 L52 142 M94 134 L102 128', role: 'soft' },
    { d: 'M60 162 l6 -4 M108 148 l6 -4', role: 'ambient' },
    { d: 'M14 170 L146 142', role: 'ambient', dashed: true },
  ],
  // A fountain in a crowded square with tall buildings behind, the water in
  // tint: Gon and Killua reach the city, episode 41 / chapter 70.
  'yorknew-city': [
    {
      d: 'M10 150 V70 H34 V150 M34 150 V44 H58 V150 M102 150 V56 H126 V150 M126 150 V84 H150 V150',
      role: 'soft',
    },
    { d: 'M110 72 l8 -6 M110 92 l8 -6 M110 112 l8 -6', role: 'ambient' },
    { d: ellipse(80, 138, 40, 8) },
    { d: 'M40 138 V146 C52 156 108 156 120 146 V138' },
    { d: `M74 134 V104 M86 104 V134 ${ellipse(80, 104, 16, 4)}`, role: 'soft' },
    {
      d: 'M80 100 C76 86 64 84 60 98 M80 100 C84 86 96 84 100 98 M80 100 V84',
      role: 'accent',
    },
    { d: 'M4 156 H156', role: 'ambient' },
    shadow(80, 160, 56),
  ],
  // An airship coming down over a runway beside the control tower, the
  // envelope in tint: the Nostrade family lands here, episode 41 /
  // chapter 71.
  'lingon-airport': [
    { d: ellipse(70, 60, 50, 18), role: 'accent' },
    { d: 'M56 78 H84 L80 88 H60 Z', role: 'soft' },
    { d: 'M22 56 L10 44 V76 L22 64', role: 'soft' },
    { d: 'M126 150 V70 M138 150 V70 M120 70 H144 L140 54 H124 Z' },
    { d: 'M4 150 H156', role: 'ambient' },
    { d: 'M20 174 L60 152 M140 174 L100 152' },
    { d: 'M80 156 V162 M80 168 V176', role: 'ambient', dashed: true },
    shadow(70, 156, 40),
  ],
  // The tall stepped building with its guarded entrance, the doors in tint
  // and the side turned away hatched: the Mafia's Underground Auction is
  // held here, episode 42 / chapter 72.
  'cemetery-building': [
    { d: 'M44 150 V40 H116 V150' },
    { d: 'M52 40 V28 H108 V40 M64 28 V18 H96 V28' },
    { d: 'M54 56 H106 M54 72 H106 M54 88 H106 M54 104 H106', role: 'ambient' },
    { d: 'M116 150 L132 140 V34 L116 40', role: 'soft' },
    {
      d: 'M120 60 l8 -6 M120 80 l8 -6 M120 100 l8 -6 M120 120 l8 -6',
      role: 'ambient',
    },
    { d: 'M66 150 V122 H94 V150 M80 122 V150', role: 'accent' },
    { d: 'M4 150 H156', role: 'ambient' },
    shadow(80, 158, 60),
  ],
} satisfies Drawings
