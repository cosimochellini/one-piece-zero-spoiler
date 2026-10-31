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
  // A compass on a folded, unlabelled map: exploration, with no story
  // place, character, official mark or record drawing on the public hub.
  'hunter-x-hunter': [
    { d: 'M19 119 L58 108 L99 120 L141 107 V166 L99 180 L58 166 L19 179 Z' },
    { d: 'M58 141 V166 M99 149 V180', role: 'soft' },
    { d: 'M26 171 L52 163 M105 169 L134 160', role: 'soft' },
    { d: 'M43 88 A37 37 0 1 0 117 88 A37 37 0 1 0 43 88' },
    { d: 'M49 88 A31 31 0 1 0 111 88 A31 31 0 1 0 49 88', role: 'soft' },
    { d: 'M75 51 V43 Q80 36 85 43 V51' },
    { d: 'M80 63 L91 91 L80 87 L69 91 Z', role: 'accent' },
    { d: 'M69 91 L80 113 L91 91', role: 'soft' },
    { d: 'M52 88 H58 M102 88 H108 M80 60 V65 M80 111 V116', role: 'soft' },
    { d: 'M53 111 L58 116 M60 117 L65 121 M104 112 L100 116', role: 'ambient' },
    { d: 'M32 187 H128', role: 'ambient', dashed: true },
  ],
  // A plain crown standing on the ground, seen from a little above, drawn by
  // eye (owner, 2026-10-26): no house sigil, no stone, nothing traced from
  // the show. The band is the accent, and the far rim shows only between the
  // four points.
  'game-of-thrones': [
    { d: 'M34 114 V150 A46 11 0 0 0 126 150 V114' },
    {
      d: 'M34 114 L45 78 L57 123.5 L68.5 72 L80 125 L91.5 72 L103 123.5 L115 78 L126 114',
    },
    // A ball on each tip.
    {
      d: 'M41.5 74.5 a3.5 3.5 0 1 0 7 0 a3.5 3.5 0 1 0 -7 0 M65 68.5 a3.5 3.5 0 1 0 7 0 a3.5 3.5 0 1 0 -7 0 M88 68.5 a3.5 3.5 0 1 0 7 0 a3.5 3.5 0 1 0 -7 0 M111.5 74.5 a3.5 3.5 0 1 0 7 0 a3.5 3.5 0 1 0 -7 0',
    },
    {
      d: 'M51.9 105.3 A46 11 0 0 1 61.4 103.9 M75.2 103.1 A46 11 0 0 1 84.8 103.1 M98.6 103.9 A46 11 0 0 1 108.1 105.3',
      role: 'soft',
    },
    {
      d: 'M45 84 L47.5 112 M68.5 78 L70 116 M91.5 78 L91 116 M115 84 L113 112',
      role: 'soft',
    },
    {
      d: 'M34 131 A46 11 0 0 0 126 131 M34 139 A46 11 0 0 0 126 139',
      role: 'accent',
    },
    { d: 'M113 129 V156 M118 127 V154 M122 123 V151', role: 'ambient' },
    { d: 'M28 168 q52 6 104 0', role: 'ambient', dashed: true },
  ],
}
