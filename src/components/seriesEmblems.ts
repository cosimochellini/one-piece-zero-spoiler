import { SEA } from '~/lib/svg/primitives'
import type { Stroke } from '~/lib/view/records'

/**
 * The drawing a series stands for on the hub, in the house style of the
 * record drawings (160×200, one 2px pen, no fills) but drawn for the hub
 * and belonging to no record. Its accent is the series' own accent, so it
 * takes the colour of the theme it is set in.
 *
 * One Piece: a straw hat floating on the sea, its brim on the water. A
 * different hat from Luffy's record drawing, line for line: no stroke of an
 * emblem but the shared sea is any record's (`seriesEmblems.test.ts`), so
 * the hub's drawing names no record.
 */
export const EMBLEMS: Partial<Record<string, Stroke[]>> = {
  'one-piece': [
    { d: 'M14 152 A66 19 0 0 0 146 152' },
    { d: 'M14 152 A66 19 0 0 1 48 135.4 M112 135.4 A66 19 0 0 1 146 152' },
    { d: 'M32 156 A48 12 0 0 0 128 156', role: 'soft' },
    { d: 'M48 144 C44 80 116 80 112 144' },
    { d: 'M56 112 Q80 121 104 112 M67 98 Q80 102 93 98', role: 'soft' },
    { d: 'M103 108 l-3 5 M107 115 l-3 5 M109.5 123 l-3 5', role: 'ambient' },
    {
      d: 'M48 144 Q80 158 112 144 L111.6 132 Q80 146 48.4 132 Z',
      role: 'accent',
    },
    // The first wave would run under the brim: the hat sits on the second.
    ...SEA.slice(1),
  ],
}
