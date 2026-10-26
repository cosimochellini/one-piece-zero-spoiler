import type { Drawings } from '~/data/art/stroke'
import { ellipse, shadow } from '~/lib/svg/primitives'

/** First objects, with direct frame/page checks still required before merge. */
export const CHAPTER_ONE_DRAWINGS = {
  // Kite's peaked cap, described by Hunterpedia for the manga and 2011 anime:
  // chapter 1 / episode 76. No weapon or later ability. Reference not viewed.
  kite: [
    { d: 'M31 104 C27 78 48 57 81 56 C112 55 132 72 128 96' },
    { d: 'M31 104 C55 92 100 88 128 96 L128 108 C96 100 55 104 34 116 Z' },
    {
      d: 'M34 116 C53 109 97 104 121 110 C115 124 76 137 40 132 L34 116 Z',
      role: 'accent',
    },
    { d: 'M40 132 C75 142 111 128 121 115 L121 110', role: 'soft' },
    { d: 'M45 94 C44 77 59 65 81 63', role: 'soft' },
    { d: 'M81 63 C105 62 119 75 120 88', role: 'soft' },
    { d: 'M81 63 L82 87', role: 'soft' },
    { d: 'M38 104 C62 95 100 93 121 99', role: 'soft' },
    { d: 'M112 78 L116 84 M115 72 L121 80 M119 91 L124 94', role: 'ambient' },
    shadow(80, 151, 46),
  ],
  // Kon's furred forepaw with the claws that scratch Gon: chapter 1 /
  // episode 76's flashback. No face. Reference not viewed directly.
  kon: [
    {
      d: 'M54 46 L49 63 L51 67 L44 81 L47 84 L39 104 C30 122 39 142 57 147 L107 147 C125 139 129 119 116 103 L108 81 L110 77 L102 62 L103 56 L96 44',
    },
    { d: 'M54 46 C64 53 86 53 96 44', role: 'soft' },
    { d: 'M52 70 L60 78 L56 86 M95 66 L89 77 L96 84', role: 'soft' },
    { d: 'M46 103 C61 112 96 113 112 104', role: 'soft' },
    {
      d: 'M56 121 C52 126 52 137 57 144 M74 122 V146 M94 120 L96 145',
      role: 'soft',
    },
    {
      d: 'M42 137 L43 153 L51 143 M61 146 L64 160 L72 147 M82 147 L87 161 L93 147 M103 145 L111 156 L112 139',
      role: 'accent',
    },
    { d: 'M47 89 L52 94 M42 98 L47 103 M108 89 L112 96', role: 'ambient' },
    {
      d: 'M113 114 L118 119 M115 124 L120 129 M113 134 L117 139',
      role: 'ambient',
    },
    { d: ellipse(79, 103, 19, 4), role: 'soft' },
    shadow(80, 181, 44),
  ],
} satisfies Drawings
