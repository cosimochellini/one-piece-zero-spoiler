import { FIRST_EPISODE } from './bounds'
import type { BookmarkSeries, Season } from './series'

export type { Season } from './series'

/**
 * One row of the season table, or `undefined` for a number the table does not
 * run to. Every conversion between a season code and an absolute episode goes
 * through here, so an out-of-range season fails in one place.
 */
export function getSeason(
  number: number,
  series: BookmarkSeries,
): Season | undefined {
  return series.seasons.find((season) => season.number === number)
}

/** The absolute number of the season's last acceptable episode. */
function lastEpisodeOf(season: Season, series: BookmarkSeries): number {
  return Math.min(season.last ?? series.episodeCeiling, series.episodeCeiling)
}

/** How many episodes the season holds, the open one counted to the ceiling. */
export function seasonLength(season: Season, series: BookmarkSeries): number {
  return lastEpisodeOf(season, series) - season.first + 1
}

/**
 * Turns a season and an episode within it into the absolute episode number,
 * or `null` when either is outside the table. S02E03 is episode 63.
 */
export function resolveEpisode(
  seasonNumber: number,
  episode: number,
  series: BookmarkSeries,
): null | number {
  const season = getSeason(seasonNumber, series)
  if (
    season === undefined
    || !Number.isSafeInteger(episode)
    || episode < 1
    || episode > seasonLength(season, series)
  ) {
    return null
  }

  return season.first + episode - 1
}

/**
 * An absolute episode said the way a season viewer counts, which is the only
 * form the `S04E38` chip can be built from: the two numbers are kept apart
 * because a season's length is what turns one into the other.
 */
export interface SeasonPosition {
  season: number
  /** One-based, within the season. */
  episode: number
}

/** The season an absolute episode falls in, and its number within it. */
export function locateEpisode(
  absolute: number,
  series: BookmarkSeries,
): null | SeasonPosition {
  if (!Number.isSafeInteger(absolute) || absolute < FIRST_EPISODE) {
    return null
  }

  const season = series.seasons.find(
    (candidate) =>
      absolute >= candidate.first
      && absolute <= lastEpisodeOf(candidate, series),
  )
  if (season === undefined) {
    return null
  }

  return { season: season.number, episode: absolute - season.first + 1 }
}

// Two digits, so a season code is the same width whatever the numbers are.
const CODE_WIDTH = 2

/** One number of a season code, padded to the code's width. */
function pad(value: number): string {
  return String(value).padStart(CODE_WIDTH, '0')
}

/** `S02E03`: both numbers padded to two digits, more when they need more. */
export function formatSeasonCode(season: number, episode: number): string {
  return `S${pad(season)}E${pad(episode)}`
}
