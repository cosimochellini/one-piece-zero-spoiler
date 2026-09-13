import { describe, expect, it } from 'vitest'

import { EPISODE_CEILING } from '~/lib/progress/bounds'

import {
  formatSeasonCode,
  getSeason,
  locateEpisode,
  resolveEpisode,
  type Season,
  seasonLength,
  SEASONS,
} from './seasons'

/**
 * Narrows a table lookup outside of any test body. A missing entry has to stop
 * the file rather than let the assertions below read fields off `undefined`
 * and pass for the wrong reason.
 */
function required(season: Season | undefined, what: string): Season {
  if (season === undefined) {
    throw new Error(what)
  }

  return season
}

const OPEN_SEASON = required(SEASONS.at(-1), 'empty table')
const LAST_NUMBERED_SEASON = required(getSeason(22), 'no season 22')

describe('the season table', () => {
  it('starts at episode 1 and runs without a gap or an overlap', () => {
    expect(SEASONS[0]?.first).toBe(1)

    for (let index = 1; index < SEASONS.length; index += 1) {
      const previous = SEASONS[index - 1]
      const season = SEASONS[index]

      expect(season?.number).toBe(index + 1)
      expect(season?.first).toBe((previous?.last ?? NaN) + 1)
    }
  })

  it('leaves only the last season open', () => {
    const open = SEASONS.filter((season) => season.last === null)

    expect(open).toHaveLength(1)
    expect(open[0]).toBe(SEASONS.at(-1))
  })

  it('runs the open season to the ceiling', () => {
    expect(seasonLength(OPEN_SEASON)).toBe(
      EPISODE_CEILING - OPEN_SEASON.first + 1,
    )
  })
})

describe('resolveEpisode', () => {
  it('turns a season and an episode within it into the absolute number', () => {
    expect(resolveEpisode(1, 1)).toBe(1)
    expect(resolveEpisode(2, 3)).toBe(64)
    expect(resolveEpisode(4, 38)).toBe(130)
    expect(resolveEpisode(22, 1)).toBe(1156)
  })

  it('refuses an episode past the end of its season', () => {
    expect(resolveEpisode(2, 16)).toBe(77)
    expect(resolveEpisode(2, 17)).toBeNull()
    expect(resolveEpisode(2, 0)).toBeNull()
    expect(resolveEpisode(2, 1.5)).toBeNull()
  })

  it('refuses a season the table does not hold', () => {
    expect(resolveEpisode(0, 1)).toBeNull()
    expect(resolveEpisode(23, 1)).toBeNull()
  })

  it('accepts the open season up to the ceiling and no further', () => {
    const length = seasonLength(LAST_NUMBERED_SEASON)

    expect(resolveEpisode(22, length)).toBe(EPISODE_CEILING)
    expect(resolveEpisode(22, length + 1)).toBeNull()
  })
})

describe('locateEpisode', () => {
  it('finds the season an absolute episode falls in', () => {
    expect(locateEpisode(1)).toStrictEqual({ season: 1, episode: 1 })
    expect(locateEpisode(61)).toStrictEqual({ season: 1, episode: 61 })
    expect(locateEpisode(62)).toStrictEqual({ season: 2, episode: 1 })
    expect(locateEpisode(130)).toStrictEqual({ season: 4, episode: 38 })
    expect(locateEpisode(1089)).toStrictEqual({ season: 21, episode: 1 })
    expect(locateEpisode(EPISODE_CEILING)?.season).toBe(22)
  })

  it('finds nothing outside the table', () => {
    expect(locateEpisode(0)).toBeNull()
    expect(locateEpisode(EPISODE_CEILING + 1)).toBeNull()
    expect(locateEpisode(2.5)).toBeNull()
  })

  it('round-trips with resolveEpisode', () => {
    for (const absolute of [1, 64, 130, 457, 1089, 1177]) {
      const at = locateEpisode(absolute)
      if (at === null) {
        throw new Error(`no season for ${String(absolute)}`)
      }

      expect(resolveEpisode(at.season, at.episode)).toBe(absolute)
    }
  })
})

describe('formatSeasonCode', () => {
  it('pads both numbers to two digits', () => {
    expect(formatSeasonCode(2, 3)).toBe('S02E03')
    expect(formatSeasonCode(4, 39)).toBe('S04E39')
    expect(formatSeasonCode(20, 197)).toBe('S20E197')
  })
})
