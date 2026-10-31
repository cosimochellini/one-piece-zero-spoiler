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
  // Uvogin's bearskin vest from the front, the shaggy fur edging in tint
  // and the inside of the far half hatched: the Troupe member named on the
  // phone as they flee the auction, episode 43 / chapter 74.
  'uvogin': [
    {
      d: 'M54 34 L30 50 L28 150 H66 L70 60 M106 34 L130 50 L132 150 H94 L90 60',
    },
    {
      d: 'M54 34 l-4 6 l6 2 l-4 6 l6 2 l-3 8 M106 34 l4 6 l-6 2 l4 6 l-6 2 l3 8',
      role: 'accent',
    },
    { d: 'M40 70 l6 4 M38 92 l6 4 M40 114 l6 4 M36 136 l6 4', role: 'soft' },
    {
      d: 'M100 80 l8 -6 M100 100 l8 -6 M100 120 l8 -6 M100 140 l8 -6',
      role: 'ambient',
    },
    {
      d: 'M28 150 l4 6 l4 -6 l4 6 l4 -6 M132 150 l-4 6 l-4 -6 l-4 6 l-4 -6',
      role: 'soft',
    },
    shadow(80, 182, 56),
  ],
  // A dark bandana folded into a band and knotted, the knot's tails in
  // tint: Feitan, named after the attack on the auction, episode 43 /
  // chapter 74. No crest on it.
  'feitan': [
    { d: 'M24 112 C40 96 120 96 136 112 C120 126 40 126 24 112 Z' },
    { d: 'M30 112 C48 104 112 104 130 112', role: 'soft' },
    {
      d: 'M136 112 L150 100 L146 120 Z M136 112 L152 128 L140 132 Z',
      role: 'accent',
    },
    {
      d: 'M60 114 l6 -6 M78 116 l6 -6 M96 116 l6 -6 M114 114 l6 -6',
      role: 'ambient',
    },
    shadow(84, 150, 58),
  ],
  // A large hoop earring with its post, the gold ring in tint: Franklin's
  // earrings hang from his long earlobes, episode 44 / chapter 76.
  'franklin': [
    { d: circle(80, 104, 40), role: 'accent' },
    { d: circle(80, 104, 33) },
    { d: 'M80 64 V40 M74 40 H86', role: 'soft' },
    { d: 'M108 82 l6 -4 M114 100 l6 -4 M112 120 l6 -4', role: 'ambient' },
    shadow(80, 172, 40),
  ],
  // A sheathed sword lying across the frame, the grip's wrapping in tint:
  // Nobunaga, caught in a Shadow Beast's cloth, episode 45 / chapter 77.
  'nobunaga': [
    { d: 'M20 150 L112 72 L118 78 L26 156 Z' },
    { d: 'M110 66 L124 82', role: 'soft' },
    { d: 'M117 75 L146 50 L151 56 L122 81 Z', role: 'accent' },
    { d: 'M124 70 l5 5 M131 64 l5 5 M138 58 l5 5', role: 'soft' },
    { d: 'M40 146 l6 4 M60 128 l6 4 M80 112 l6 4', role: 'ambient' },
    shadow(84, 174, 60),
  ],
  // A zipped tracksuit top from the front, the stripes down the sleeves in
  // tint: Phinks, who frees Uvogin, episode 45 / chapter 78.
  'phinks': [
    { d: `${ellipse(80, 34, 16, 5)} M64 34 V42 M96 34 V42` },
    {
      d: 'M64 40 L36 52 L26 130 M40 134 L48 82 L48 168 H112 L112 82 L120 134 M134 130 L124 52 L96 40',
    },
    { d: 'M80 44 V168 M76 44 h8', role: 'soft' },
    { d: 'M32 60 L22 128 M128 60 L138 128', role: 'accent' },
    { d: 'M48 156 H112', role: 'soft' },
    { d: 'M90 70 l8 -6 M90 100 l8 -6 M90 130 l8 -6', role: 'ambient' },
    shadow(80, 184, 50),
  ],
  // An open laptop in 3/4, the screen's frame in tint: Shalnark looks up the
  // Nostrade family on the Hunter website, episode 46 / chapter 79. No
  // writing on the screen.
  'shalnark': [
    { d: 'M30 60 L110 46 L118 116 L38 130 Z', role: 'accent' },
    { d: 'M38 68 L106 56 L112 108 L44 120 Z', role: 'soft' },
    { d: 'M38 130 L118 116 L148 140 L64 158 Z' },
    { d: 'M70 140 L120 130 M74 146 L124 136', role: 'soft' },
    { d: 'M52 104 L90 70 M62 112 L98 80', role: 'ambient' },
    shadow(90, 172, 60),
  ],
  // A mobile phone in 3/4, the keypad's frame in tint: Light speaks to his
  // daughter's bodyguards by phone, episode 46 / chapter 79.
  'light-nostrade': [
    {
      d: 'M56 40 H104 Q110 40 110 46 V154 Q110 160 104 160 H56 Q50 160 50 154 V46 Q50 40 56 40 Z',
    },
    { d: 'M58 52 H102 V96 H58 Z', role: 'soft' },
    { d: 'M58 106 H102 V150 H58 Z', role: 'accent' },
    {
      d: dots([
        [68, 116],
        [80, 116],
        [92, 116],
        [68, 128],
        [80, 128],
        [92, 128],
        [68, 140],
        [80, 140],
        [92, 140],
      ]),
    },
    { d: 'M110 50 L116 54 V162 L110 160', role: 'soft' },
    { d: 'M64 90 L90 60', role: 'ambient' },
    shadow(82, 180, 40),
  ],
  // A large cloth knotted into a bundle, the knot in tint: Owl wraps the
  // Troupe's car in his cloth, episode 45 / chapter 77.
  'owl': [
    { d: 'M30 150 C20 110 50 80 80 84 C110 80 140 110 130 150 Z' },
    { d: 'M64 86 L60 62 L80 76 L100 62 L96 86', role: 'accent' },
    {
      d: 'M44 140 C50 120 62 106 76 100 M116 140 C110 120 98 106 86 100',
      role: 'soft',
    },
    { d: 'M100 120 l8 -6 M106 134 l8 -6 M110 146 l6 -5', role: 'ambient' },
    shadow(80, 166, 56),
  ],
  // A mound of earth with the open hole of a burrow, its rim in tint: Worm
  // comes up out of the ground, episode 43 / chapter 75.
  'worm': [
    { d: 'M14 150 C30 120 56 106 80 106 C104 106 130 120 146 150' },
    { d: ellipse(80, 124, 20, 7), role: 'accent' },
    { d: 'M64 124 C68 132 92 132 96 124', role: 'soft' },
    {
      d: dots([
        [40, 136],
        [118, 138],
        [56, 118],
        [106, 116],
      ]),
      role: 'soft',
    },
    { d: 'M4 150 H156', role: 'ambient' },
    shadow(80, 158, 66),
  ],
  // A long-sleeved shirt with a high neck from the front, the neckband in
  // tint: Rabid Dog, one of the Shadow Beasts sent after the Troupe,
  // episode 43 / chapter 75.
  'rabid-dog': [
    { d: 'M64 38 C64 30 96 30 96 38 V48 C96 54 64 54 64 48 Z', role: 'accent' },
    {
      d: 'M64 46 L38 56 L28 134 M42 138 L50 86 L50 170 H110 L110 86 L118 138 M132 134 L122 56 L96 46',
    },
    { d: 'M28 134 A7 3 12 1 0 42 138 A7 3 12 1 0 28 134', role: 'soft' },
    { d: 'M132 134 A7 3 -12 1 1 118 138 A7 3 -12 1 1 132 134', role: 'soft' },
    {
      d: 'M96 80 l8 -6 M96 104 l8 -6 M96 128 l8 -6 M96 152 l8 -6',
      role: 'ambient',
    },
    shadow(80, 186, 48),
  ],
  // A round mass bristling with needles, the needles in tint: Porcupine's
  // hairs turn into needles that catch Uvogin's fist, episode 44 /
  // chapter 76.
  'porcupine': [
    { d: 'M30 150 C30 110 52 90 80 90 C108 90 130 110 130 150' },
    {
      d: 'M40 120 L22 104 M52 104 L40 80 M68 94 L62 66 M84 92 L88 62 M100 98 L112 74 M114 112 L134 94 M124 132 L146 124',
      role: 'accent',
    },
    {
      d: 'M48 136 l4 -10 M66 128 l2 -12 M90 126 l4 -12 M108 132 l6 -10',
      role: 'soft',
    },
    { d: 'M4 150 H156', role: 'ambient' },
    shadow(80, 158, 56),
  ],
  // A spotted leech curled on the ground, its spots in tint: Leech fills
  // Uvogin with leeches, episode 44 / chapter 76.
  'leech': [
    {
      d: 'M30 130 C30 96 70 84 98 96 C126 108 128 140 104 146 C82 152 70 134 86 124 C98 116 108 126 100 134',
    },
    { d: 'M30 130 C34 146 58 152 80 148', role: 'soft' },
    {
      d: `${circle(46, 112, 3)} ${circle(62, 102, 3)} ${circle(80, 98, 3)} ${circle(100, 106, 3)} ${circle(114, 122, 3)}`,
      role: 'accent',
    },
    { d: 'M40 126 l4 -6 M56 116 l4 -6', role: 'ambient' },
    shadow(78, 168, 56),
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
