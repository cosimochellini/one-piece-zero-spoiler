import type { Drawings } from '~/data/art/stroke'
import { circle, ellipse, shadow } from '~/lib/svg/primitives'

/** Original object drawings; the cited manga/anime scenes await direct viewing. */
export const TRICK_TOWER_DRAWINGS = {
  // Lippo's large spectacles lying with one arm open, their rims in the
  // record's tint: his monitoring room in episode 8 and chapter 17. No eyes.
  'lippo': [
    { d: ellipse(54, 119, 27, 20), role: 'accent' },
    { d: ellipse(113, 104, 27, 20), role: 'accent' },
    { d: ellipse(54, 119, 22, 15), role: 'soft' },
    { d: ellipse(113, 104, 22, 15), role: 'soft' },
    { d: 'M80 115 Q83 103 88 108 M79 119 Q84 108 89 112' },
    { d: 'M29 110 L16 68 Q13 57 23 54 L83 39' },
    { d: 'M32 108 L20 68 Q18 62 25 59 L84 44', role: 'soft' },
    { d: 'M137 96 L144 72 Q146 65 139 65 L79 81' },
    { d: 'M136 91 L140 75 Q141 70 136 71 L80 85', role: 'soft' },
    { d: 'M40 125 L48 109 M47 130 L57 109 M102 111 L110 94', role: 'ambient' },
    shadow(83, 167, 59),
  ],

  // Bendot's broad unlocked iron wrist restraints, their hinge pins in the
  // record's tint: he asks the warden to release them in episode 8/chapter 16.
  'bendot': [
    { d: ellipse(55, 124, 26, 17) },
    { d: ellipse(55, 124, 20, 12), role: 'soft' },
    { d: 'M29 124 V144 C29 166 81 166 81 144 V124' },
    { d: 'M34 143 C42 154 68 154 76 143', role: 'soft' },
    { d: ellipse(117, 101, 23, 15) },
    { d: ellipse(117, 101, 17, 10), role: 'soft' },
    { d: 'M94 101 V121 C94 141 140 141 140 121 V101' },
    {
      d: 'M36 145 l5 9 M45 149 l5 9 M104 124 l5 7 M115 127 l5 7',
      role: 'ambient',
    },
    { d: `${circle(76, 136, 4)} ${circle(97, 115, 4)}`, role: 'accent' },
    { d: 'M77 131 C89 113 103 132 91 141 C82 148 79 139 85 134' },
    shadow(85, 182, 57),
  ],

  // Sedokan's discarded hooded shroud, folded at the base with its neck
  // opening in the record's tint: he uncovers himself in episode 8/chapter 17.
  // The candles of the following episode are deliberately absent.
  'sedokan': [
    { d: 'M55 97 C44 81 44 53 65 42 C85 32 104 50 103 69 L97 103' },
    {
      d: 'M62 94 C54 77 55 58 68 53 C82 47 94 62 90 82 L87 96',
      role: 'accent',
    },
    { d: 'M55 97 L25 148 Q47 166 78 155 Q109 171 139 150 L97 103' },
    { d: 'M25 148 L29 158 Q52 174 79 164 Q111 179 139 158 V150' },
    { d: 'M55 105 L45 144 M66 104 L62 151 M87 106 L103 151', role: 'soft' },
    { d: 'M97 112 L123 149 M78 111 L80 150', role: 'soft' },
    { d: 'M35 151 Q55 158 69 153 M91 157 Q109 163 128 153', role: 'soft' },
    { d: 'M98 126 l10 6 M102 137 l12 7 M106 148 l12 7', role: 'ambient' },
    { d: 'M49 63 Q47 78 54 87', role: 'soft' },
    shadow(82, 185, 57),
  ],

  // Majtani's ear-mounted respirator, detached from the person and seen at
  // an angle: its hose and canister in episode 9/chapter 18. No tattoos.
  'majtani': [
    { d: ellipse(98, 102, 20, 10) },
    { d: 'M78 102 V150 C78 164 118 164 118 150 V102' },
    { d: ellipse(98, 150, 15, 6), role: 'soft' },
    { d: ellipse(98, 102, 14, 6), role: 'accent' },
    { d: 'M86 96 V84 H105 V96 M91 84 V76 H100 V84', role: 'soft' },
    { d: 'M95 76 C103 47 73 37 55 52 C39 66 40 92 52 106' },
    { d: 'M100 76 C110 43 70 28 50 48 C30 67 36 99 48 110', role: 'soft' },
    { d: ellipse(51, 109, 9, 5), role: 'accent' },
    { d: 'M43 60 l7 3 M40 73 l7 1 M41 87 l7 -2 M46 100 l6 -4', role: 'soft' },
    { d: 'M108 117 l6 -3 M108 129 l6 -3 M108 141 l6 -3', role: 'ambient' },
    shadow(83, 182, 49),
  ],

  // Leroute's time-wager wristwatch seen in three-quarter view, the two
  // controls in the record's tint: episode 10/chapter 20. No digits or marks.
  'leroute': [
    { d: 'M55 82 L64 40 H97 L103 79 M54 132 L48 169 H91 L101 127' },
    { d: 'M62 69 L101 65 M58 144 L97 140 M55 157 L94 153', role: 'soft' },
    { d: 'M43 86 L107 73 L124 87 L60 102 Z' },
    { d: 'M43 86 V122 L60 139 L124 126 V87' },
    { d: 'M60 102 V139 M43 122 L107 109 L124 126', role: 'soft' },
    { d: 'M53 88 L104 78 L114 87 L63 97 Z', role: 'soft' },
    {
      d: 'M65 112 L75 110 V120 L65 122 Z M91 107 L101 105 V115 L91 117 Z',
      role: 'accent',
    },
    { d: 'M112 98 l7 -1 M112 105 l7 -1', role: 'ambient' },
    { d: 'M69 49 H89 M68 55 H88', role: 'soft' },
    { d: 'M63 165 H82', role: 'soft' },
    shadow(83, 185, 48),
  ],

  // Johness's loose restraint beside the broken stone he crushes before
  // the match: episode 11/chapter 21. He dies at this record's opening gate.
  'johness': [
    { d: ellipse(55, 127, 27, 17) },
    { d: ellipse(55, 127, 20, 12), role: 'soft' },
    { d: 'M28 127 V148 C28 169 82 169 82 148 V127' },
    { d: 'M35 146 C43 157 66 158 75 147', role: 'soft' },
    { d: circle(78, 141, 4), role: 'accent' },
    { d: 'M80 139 Q97 129 102 141 Q103 151 91 153', role: 'soft' },
    { d: 'M94 114 L106 90 L132 100 L140 126 L119 140 L98 132 Z' },
    { d: 'M106 90 L113 113 L132 100 M113 113 L119 140 L140 126', role: 'soft' },
    { d: 'M113 113 L100 119 M113 113 L122 118 L125 130', role: 'accent' },
    { d: 'M104 127 l7 5 M125 131 l8 -6', role: 'ambient' },
    { d: 'M111 155 L124 147 L130 158 Z M137 145 L145 148 L142 156 Z' },
    shadow(84, 186, 59),
  ],

  // Togari's four curved knives at rest, grips in the record's tint:
  // episode 10/chapter 19. His name is anime-only, and he dies in episode 10.
  'togari': [
    {
      d: 'M37 141 L48 103 L58 106 L47 144 Z M91 160 L102 122 L112 125 L101 163 Z',
      role: 'accent',
    },
    { d: 'M48 103 C46 76 66 48 91 39 C70 59 71 91 58 106 Z' },
    { d: 'M102 122 C100 95 120 67 145 58 C124 78 125 110 112 125 Z' },
    { d: 'M53 99 Q56 69 81 48 M107 118 Q110 88 135 67', role: 'soft' },
    {
      d: 'M42 126 L53 129 M45 116 L56 119 M96 145 L107 148 M99 135 L110 138',
      role: 'soft',
    },
    {
      d: 'M43 66 L74 88 L70 96 L39 74 Z M17 119 L48 141 L44 149 L13 127 Z',
      role: 'accent',
    },
    { d: 'M74 88 C99 86 123 100 134 122 C113 105 86 108 70 96 Z' },
    { d: 'M48 141 C73 139 97 153 108 175 C87 158 60 161 44 149 Z' },
    { d: 'M77 92 Q106 94 125 112 M51 145 Q80 147 99 165', role: 'soft' },
    {
      d: 'M51 74 l-4 7 M61 81 l-4 7 M25 127 l-4 7 M35 134 l-4 7',
      role: 'ambient',
    },
    shadow(80, 190, 62),
  ],

  // Trick Tower's cylindrical masonry and tiled trapdoor roof on a low
  // base: the prison reached in episode 8/chapter 14. No later rooms.
  'trick-tower': [
    { d: ellipse(80, 41, 40, 12), role: 'accent' },
    { d: 'M40 41 V143 C40 159 120 159 120 143 V41' },
    {
      d: 'M40 63 C40 78 120 78 120 63 M40 89 C40 104 120 104 120 89',
      role: 'soft',
    },
    { d: 'M40 115 C40 130 120 130 120 115', role: 'soft' },
    { d: 'M58 51 V71 M94 52 V72 M68 78 V99 M102 75 V96', role: 'soft' },
    { d: 'M54 101 V126 M90 104 V129 M70 132 V152 M103 130 V149', role: 'soft' },
    {
      d: 'M54 40 L77 34 L96 39 L73 45 Z M77 34 V40 M73 40 L96 39',
      role: 'accent',
    },
    {
      d: 'M107 59 l8 -3 M107 84 l8 -3 M107 110 l8 -3 M107 137 l8 -3',
      role: 'ambient',
    },
    { d: 'M33 150 L23 154 H139 L128 150', role: 'soft' },
    { d: 'M5 154 H155', role: 'ambient' },
    shadow(80, 163, 57),
  ],
} satisfies Drawings
