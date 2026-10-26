import type { Drawings } from '~/data/art/stroke'
import { circle, shadow } from '~/lib/svg/primitives'

export const FINAL_PHASE_DRAWINGS = {
  // Masta’s black sunglasses, seen with the referee’s suit in episode 19 /
  // chapter 33: empty frames and folded arms, never a face.
  masta: [
    { d: 'M26 100 L65 92 L70 116 Q52 134 32 120 Z' },
    { d: 'M84 88 L118 80 L126 104 Q112 123 90 114 Z' },
    { d: 'M30 104 L62 97 L66 114 Q49 127 35 117 Z', role: 'soft' },
    { d: 'M89 92 L115 85 L121 102 Q109 116 94 110 Z', role: 'soft' },
    { d: 'M65 94 Q72 86 85 90 M68 100 Q77 94 88 96', role: 'accent' },
    { d: 'M26 100 L22 94 L60 62 Q65 58 70 62 L76 68', role: 'soft' },
    { d: 'M118 80 L126 76 L138 100 L140 108 Q140 114 134 114', role: 'soft' },
    { d: 'M35 108 L40 119 M44 106 L50 122 M54 104 L60 118', role: 'ambient' },
    { d: 'M96 96 L102 112 M105 94 L111 108 M113 92 L117 101', role: 'ambient' },
    { d: 'M28 123 Q48 141 72 120 M90 117 Q112 130 129 107', role: 'soft' },
    { d: 'M60 62 L63 66 M66 62 L69 66', role: 'soft' },
    shadow(80, 184, 46),
  ],
  // Illumi’s round-headed needle and pinned collar after the disguise is
  // removed, episode 20 / chapter 35. No face or later abilities.
  illumi: [
    { d: 'M42 98 L64 82 L80 100 L98 82 L120 100 L126 150 H34 Z' },
    { d: 'M64 82 L60 108 L80 122 L102 108 L98 82', role: 'soft' },
    { d: 'M44 108 L40 146 M112 108 L120 146', role: 'soft' },
    { d: 'M112 42 L64 134 M116 44 L68 136', role: 'accent' },
    { d: circle(118, 36, 10), role: 'accent' },
    { d: 'M114 32 Q120 28 124 34', role: 'soft' },
    { d: circle(54, 104, 4) },
    { d: circle(108, 104, 4) },
    {
      d: 'M82 124 V148 M46 126 L50 130 M44 134 L48 138 M42 142 L46 146',
      role: 'ambient',
    },
    shadow(80, 184, 43),
  ],
} satisfies Drawings
