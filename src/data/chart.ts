import type { ChartPoint } from '~/lib/view/chart'

/**
 * Where each place sits on the sea chart at the top of the places page.
 *
 * Schematic, not geographic: the chart is 1200×600, the Red Line a band at
 * the left edge (Reverse Mountain) and down the middle (Mary Geoise), the
 * Grand Line a band across between y 220 and 380 with a Calm Belt either
 * side, and the four Blues the quarters above and below it
 * (`~/components/chartGeometry` draws them). In East Blue the route runs from the
 * middle towards Reverse Mountain, so x falls; in the Grand Line it runs away
 * from it, so x rises, and the stops take turns above and below the middle
 * of the band so neighbours never crowd.
 *
 * Foosha and Shells Town share an x: an anime viewer reaches Shells Town
 * first and a manga reader Foosha, and the route is drawn in the reader's own
 * order, so either way it makes a short hook rather than doubling back.
 *
 * A `detour` is a stop the ship does not sail to: Luffy alone (Amazon Lily,
 * Impel Down, Marineford), and Mary Geoise, which the story only shows. The
 * chart draws it on a thin branch off the last stop before it.
 *
 * Nothing here is a fact about the story, so there is nothing to check on the
 * wiki. `chart.test.ts` holds that every place has a point and that the
 * points follow the route.
 */
export const CHART: Record<string, ChartPoint> = {
  'foosha-village': { x: 470, y: 60 },
  'shells-town': { x: 470, y: 140 },
  'orange-town': { x: 380, y: 100 },
  'syrup-village': { x: 290, y: 60 },
  'baratie': { x: 190, y: 130 },
  'whisky-peak': { x: 50, y: 255 },
  'little-garden': { x: 86, y: 345 },
  'drum-island': { x: 122, y: 255 },
  'alubarna': { x: 158, y: 345 },
  'rainbase': { x: 194, y: 255 },
  'jaya': { x: 230, y: 345 },
  'upper-yard': { x: 266, y: 255 },
  'angel-island': { x: 302, y: 345 },
  'water-seven': { x: 338, y: 255 },
  'puffing-tom': { x: 374, y: 345 },
  'enies-lobby': { x: 410, y: 255 },
  'florian-triangle': { x: 446, y: 345 },
  'thriller-bark': { x: 482, y: 255 },
  'sabaody-archipelago': { x: 518, y: 345 },
  'amazon-lily': { x: 540, y: 205, detour: true },
  'impel-down': { x: 552, y: 395, detour: true },
  'marineford': { x: 566, y: 260, detour: true },
  'fish-man-island': { x: 600, y: 300 },
  'fish-man-district': { x: 600, y: 360 },
  'punk-hazard': { x: 650, y: 255 },
  'dressrosa': { x: 689, y: 345 },
  'green-bit': { x: 728, y: 255 },
  'zou': { x: 767, y: 345 },
  'whole-cake-island': { x: 806, y: 255 },
  'cacao-island': { x: 845, y: 345 },
  'mary-geoise': { x: 600, y: 120, detour: true },
  'kuri': { x: 884, y: 255 },
  'flower-capital': { x: 923, y: 345 },
  'udon': { x: 962, y: 255 },
  'onigashima': { x: 1001, y: 345 },
  'egghead-island': { x: 1040, y: 255 },
  'elbaf-island': { x: 1079, y: 345 },
  'warland': { x: 1118, y: 255 },
  'sun-world': { x: 1157, y: 345 },
}

/**
 * A record's point on the chart. Every place has one (`chart.test.ts`); any
 * other record, which only a peek by a stray handle asks for, has `null`.
 */
export function chartPointOf(id: string): ChartPoint | null {
  return CHART[id] ?? null
}
