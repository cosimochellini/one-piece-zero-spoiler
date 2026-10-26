import type { Drawings } from '~/data/art/stroke'
import { shadow } from '~/lib/svg/primitives'

/** First objects, with direct frame/page checks still required before merge. */
export const CHAPTER_ONE_DRAWINGS = {
  // Kite's peaked cap, the soft crown slouching over the band like a beret
  // and the peak in the record's tint: what he wears when he saves Gon in
  // chapter 1, which the 2011 anime first shows in episode 76's flashback.
  // No sword, card or later ability. Reference not viewed.
  kite: [
    {
      d: 'M50 116 C36 108 34 90 46 78 C60 62 96 56 118 66 C134 74 138 96 128 114',
    },
    { d: 'M50 116 C74 122 104 120 128 114' },
    {
      d: 'M50 116 L48 124 M128 114 V122 M48 124 C74 130 104 128 128 122',
      role: 'soft',
    },
    {
      d: 'M50 122 C34 120 16 124 10 134 C22 144 48 142 66 128',
      role: 'accent',
    },
    { d: 'M10 134 L11 138 C24 148 50 145 66 131', role: 'soft' },
    { d: 'M84 60 C76 76 70 96 72 118', role: 'soft' },
    { d: 'M46 78 C58 90 84 94 112 86', role: 'soft' },
    { d: 'M124 84 l6 4 M126 96 l6 4 M122 106 l6 4', role: 'ambient' },
    shadow(76, 150, 54),
  ],
  // The cub's furred forepaw, side on, its claws in the record's tint: the
  // fox-bear cub that stands behind its mother when Kite stops her claw over
  // Gon in chapter 1, which the 2011 anime first shows in episode 76's
  // flashback. No face. Reference not viewed directly.
  kon: [
    {
      d: 'M34 30 L40 46 L34 52 L44 66 L38 72 L48 88 L42 94 L50 110 C52 126 48 140 42 150 H130 C142 150 146 142 142 136 C148 130 146 120 140 118 C144 110 138 102 130 102 C120 92 104 86 88 84 C82 64 80 46 82 30',
    },
    { d: 'M88 84 C104 80 120 86 130 102', role: 'soft' },
    {
      d: 'M131 103 C138 94 148 94 152 100 M141 118 C149 112 157 114 158 121 M143 136 C151 132 158 136 157 144',
      role: 'accent',
    },
    {
      d: 'M130 102 C122 106 118 112 116 120 M140 118 C130 120 124 126 122 134',
      role: 'soft',
    },
    { d: 'M76 40 l-6 4 M77 56 l-7 4 M80 72 l-7 4', role: 'ambient' },
    { d: 'M50 110 C64 114 78 104 88 84', role: 'soft' },
    {
      d: 'M84 98 l-3 -6 M100 92 l-1 -7 M86 66 l6 -3 M84 48 l6 -3',
      role: 'soft',
    },
    {
      d: 'M60 146 l6 -5 M76 146 l6 -5 M92 146 l6 -5 M108 146 l6 -5',
      role: 'ambient',
    },
    shadow(92, 156, 56),
  ],
} satisfies Drawings
