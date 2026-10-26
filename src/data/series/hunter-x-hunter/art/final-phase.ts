import type { Drawings } from '~/data/art/stroke'
import { circle, ellipse, shadow } from '~/lib/svg/primitives'

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
  // One round-headed needle, held point down: the pin Gittarackur draws out
  // of his head to become Illumi again, episode 20 / chapter 35. A single
  // pin upright, where the disguise's pins cross; no face, no later throw.
  illumi: [
    { d: circle(88, 46, 17), role: 'accent' },
    { d: 'M71 47 C73 57 103 57 105 47', role: 'soft' },
    { d: 'M76 38 Q80 32 88 31', role: 'soft' },
    { d: 'M86 62 L92 57 M92 61 L100 54 M98 58 L103 53', role: 'ambient' },
    { d: ellipse(86.5, 65, 5, 2), role: 'soft' },
    { d: 'M81.5 66 L70 170 L91.5 66' },
    { d: 'M86.5 68 L70.5 165', role: 'soft' },
    {
      d: 'M89 80 L87.5 84 M87.3 100 L85.6 104 M85.4 120 L83.8 124',
      role: 'ambient',
    },
    shadow(80, 186, 30),
  ],
} satisfies Drawings
