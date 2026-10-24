import { describe, expect, it } from 'vitest'

import { SEA } from '~/lib/svg/primitives'
import type { Stroke } from '~/lib/view/records'
import { leaksOf } from '~/test/fog'
import { LOADED_SERIES } from '~/test/series'

import { EMBLEMS } from './seriesEmblems'

const lineOf = ({ d, transform = '' }: Stroke): string => `${d}|${transform}`

/** Every line of every record drawing of a series, redrawings included. */
function recordLines({
  drawings,
  entities,
  redrawn,
}: (typeof LOADED_SERIES)[number]['archive']): Set<string> {
  const all = [
    ...Object.values(drawings),
    ...entities.flatMap((entity) => redrawn(entity).map(({ value }) => value)),
  ]

  return new Set(all.flat().map((stroke) => lineOf(stroke)))
}

const SHARED_SEA = new Set(SEA.map((stroke) => lineOf(stroke)))

describe('the hub emblems', () => {
  it.each(Object.entries(EMBLEMS))(
    '%s shares no line with any record drawing but the sea',
    (_, emblem) => {
      const lines = (emblem ?? []).map((stroke) => lineOf(stroke))

      for (const series of LOADED_SERIES) {
        const records = recordLines(series.archive)

        expect(
          lines.filter((line) => !SHARED_SEA.has(line) && records.has(line)),
          series.slug,
        ).toStrictEqual([])
      }
    },
  )

  it.each(Object.entries(EMBLEMS))(
    '%s is no record drawing as a whole',
    (_, emblem) => {
      for (const series of LOADED_SERIES) {
        expect(leaksOf(series)({ emblem }, null), series.slug).toStrictEqual([])
      }
    },
  )

  it('draws every open series in the registry', () => {
    // A series not open yet is announced on the hub by its name alone.
    expect(
      LOADED_SERIES.filter(
        ({ open, slug }) => open && EMBLEMS[slug] === undefined,
      ),
    ).toStrictEqual([])
  })

  // The rules a record drawing is held to (the line-drawings skill).
  it.each(Object.entries(EMBLEMS))(
    '%s has four strokes or more, an accent, and no line twice',
    (_, emblem = []) => {
      const lines = emblem.map((stroke) => lineOf(stroke))

      expect(emblem.length).toBeGreaterThanOrEqual(4)
      expect(emblem.some(({ role }) => role === 'accent')).toBe(true)

      const distinct = new Set(lines)

      expect(distinct.size).toBe(lines.length)
    },
  )
})
