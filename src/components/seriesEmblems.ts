import { SEA } from '~/lib/svg/primitives'
import type { Stroke } from '~/lib/view/records'

/**
 * The drawing a series stands for on the hub, in the house style of the
 * record drawings (160×200, one 2px pen, no fills) but drawn for the hub
 * and belonging to no record. Its accent is the series' own accent, so it
 * takes the colour of the theme it is set in.
 *
 * One Piece: a straw hat floating on the sea, as in chapter 1. A different
 * hat from Luffy's record drawing, line for line: no stroke of an emblem but
 * the shared sea is any record's (`seriesEmblems.test.ts`), so the hub's
 * drawing names no record.
 */
export const EMBLEMS: Partial<Record<string, Stroke[]>> = {
  'one-piece': [
    { d: 'M14 120 A66 19 0 0 0 146 120' },
    { d: 'M14 120 A66 19 0 0 1 48 103.4 M112 103.4 A66 19 0 0 1 146 120' },
    { d: 'M32 124 A48 12 0 0 0 128 124', role: 'soft' },
    { d: 'M48 112 C44 48 116 48 112 112' },
    { d: 'M56 80 Q80 89 104 80 M67 66 Q80 70 93 66', role: 'soft' },
    { d: 'M103 76 l-3 5 M107 83 l-3 5 M109.5 91 l-3 5', role: 'ambient' },
    {
      d: 'M48 112 Q80 126 112 112 L111.6 100 Q80 114 48.4 100 Z',
      role: 'accent',
    },
    ...SEA,
  ],
}
