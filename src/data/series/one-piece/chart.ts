import type { ChartPoint } from '~/lib/view/chart'

import { ISLES } from './art/isles'

/**
 * Where each place sits on the sea chart at the top of the places page.
 *
 * The world as Oda draws it (`~/components/chartGeometry`): the chart is
 * 1600×800, the Red Line upright at both edges and down the middle, the
 * Grand Line a band across between y 290 and 510 with a Calm Belt either
 * side, East Blue above Paradise in the right half and the New World in the
 * left. In East Blue the route runs towards Reverse Mountain at the right
 * edge, so x rises; in the Grand Line it runs away from it, so x falls. The
 * points are close to where the story puts each place and spread over the
 * band, so neighbours' names do not crowd: the sky islands above Jaya, Fish-
 * Man Island under Mary Geoise, Amazon Lily and Impel Down in the southern
 * Calm Belt.
 *
 * Foosha and Shells Town share an x: an anime viewer reaches Shells Town
 * first and a manga reader Foosha, and the route is drawn in the reader's own
 * order, so either way it makes a short hook rather than doubling back.
 *
 * `line: 'luffy'` marks where Luffy goes alone (Amazon Lily, Impel Down,
 * Marineford): the chart draws his own line off the last stop before it.
 * Mary Geoise, which the story only shows, is `seen`: a mark with no leg.
 *
 * Nothing here is a fact the wiki can check to the unit. `chart.test.ts`
 * holds that every place has a point and that the points follow the route.
 */
export const CHART: Record<string, ChartPoint> = {
  'foosha-village': { x: 930, y: 80 },
  'shells-town': { x: 930, y: 185 },
  'orange-town': { x: 1070, y: 125 },
  'syrup-village': { x: 1210, y: 70 },
  'baratie': { x: 1360, y: 175 },
  'whisky-peak': { x: 1520, y: 365 },
  'little-garden': { x: 1466, y: 438 },
  'drum-island': { x: 1410, y: 354 },
  'alubarna': { x: 1352, y: 417 },
  'rainbase': { x: 1300, y: 449 },
  'jaya': { x: 1245, y: 428 },
  'upper-yard': { x: 1225, y: 318 },
  'angel-island': { x: 1172, y: 305 },
  'water-seven': { x: 1110, y: 417 },
  'puffing-tom': { x: 1062, y: 455 },
  'enies-lobby': { x: 1010, y: 414 },
  'florian-triangle': { x: 968, y: 354 },
  'thriller-bark': { x: 918, y: 373 },
  'sabaody-archipelago': { x: 870, y: 435 },
  'amazon-lily': { x: 930, y: 530, line: 'luffy' },
  'impel-down': { x: 1010, y: 535, line: 'luffy' },
  'marineford': { x: 860, y: 330, line: 'luffy' },
  'fish-man-island': { x: 800, y: 430 },
  'fish-man-district': { x: 800, y: 478 },
  'punk-hazard': { x: 742, y: 361 },
  'dressrosa': { x: 688, y: 435 },
  'green-bit': { x: 650, y: 396 },
  'zou': { x: 600, y: 344 },
  'whole-cake-island': { x: 548, y: 438 },
  'cacao-island': { x: 505, y: 410 },
  'mary-geoise': { x: 800, y: 320, seen: true },
  'kuri': { x: 448, y: 358 },
  'flower-capital': { x: 408, y: 396 },
  'udon': { x: 365, y: 358 },
  'onigashima': { x: 330, y: 435 },
  'egghead-island': { x: 250, y: 428 },
  'elbaf-island': { x: 172, y: 365 },
  'warland': { x: 130, y: 407 },
  'sun-world': { x: 88, y: 361 },
}

/**
 * A record's point on the chart, with its island's outline. Every place has
 * a point (`chart.test.ts`); any other record, which only a peek by a stray
 * handle asks for, has `null`. Only an open stop is ever sent one.
 */
export function chartPointOf(id: string): ChartPoint | null {
  const point = CHART[id]
  if (point === undefined) {
    return null
  }
  const isle = ISLES[id]

  return isle === undefined ? point : { ...point, isle }
}
