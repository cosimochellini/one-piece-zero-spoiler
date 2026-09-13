import { EPISODE_CEILING, FIRST_EPISODE } from '~/lib/progress/bounds'

/**
 * The anime's seasons, as the English-language Wikipedia "List of One Piece
 * episodes" divides them (read September 2026). A season is a run of
 * absolute episode numbers; the last one is open-ended because it is still
 * airing, and it runs to `EPISODE_CEILING` so a reader can bookmark any
 * episode the dialog accepts.
 *
 * The table exists so a reader can say "S04E38" and be filed at episode 130
 * without knowing that number. No threshold is stored per season: every
 * record keeps its absolute episode, and the season is only a way of saying
 * it.
 */
export type Season = {
  readonly number: number
  /** The absolute number of the season's first episode. */
  readonly first: number
  /** The absolute number of its last episode, or `null` while it is airing. */
  readonly last: number | null
}

export const SEASONS: readonly Season[] = [
  { number: 1, first: 1, last: 61 },
  { number: 2, first: 62, last: 77 },
  { number: 3, first: 78, last: 92 },
  { number: 4, first: 93, last: 130 },
  { number: 5, first: 131, last: 143 },
  { number: 6, first: 144, last: 195 },
  { number: 7, first: 196, last: 228 },
  { number: 8, first: 229, last: 263 },
  { number: 9, first: 264, last: 336 },
  { number: 10, first: 337, last: 381 },
  { number: 11, first: 382, last: 407 },
  { number: 12, first: 408, last: 421 },
  { number: 13, first: 422, last: 456 },
  { number: 14, first: 457, last: 516 },
  { number: 15, first: 517, last: 578 },
  { number: 16, first: 579, last: 628 },
  { number: 17, first: 629, last: 746 },
  { number: 18, first: 747, last: 782 },
  { number: 19, first: 783, last: 891 },
  { number: 20, first: 892, last: 1088 },
  { number: 21, first: 1089, last: 1155 },
  { number: 22, first: 1156, last: null },
]

export function getSeason(number: number): Season | undefined {
  return SEASONS.find((season) => season.number === number)
}

/** The absolute number of the season's last acceptable episode. */
function lastEpisodeOf(season: Season): number {
  return season.last ?? EPISODE_CEILING
}

/** How many episodes the season holds, the open one counted to the ceiling. */
export function seasonLength(season: Season): number {
  return lastEpisodeOf(season) - season.first + 1
}

/**
 * Turns a season and an episode within it into the absolute episode number,
 * or `null` when either is outside the table. S02E03 is episode 63.
 */
export function resolveEpisode(
  seasonNumber: number,
  episode: number,
): number | null {
  const season = getSeason(seasonNumber)
  if (season === undefined) return null
  if (!Number.isInteger(episode)) return null
  if (episode < 1 || episode > seasonLength(season)) return null

  return season.first + episode - 1
}

export type SeasonPosition = {
  readonly season: number
  /** One-based, within the season. */
  readonly episode: number
}

/** The season an absolute episode falls in, and its number within it. */
export function locateEpisode(absolute: number): SeasonPosition | null {
  if (!Number.isInteger(absolute) || absolute < FIRST_EPISODE) return null

  const season = SEASONS.find(
    (candidate) =>
      absolute >= candidate.first && absolute <= lastEpisodeOf(candidate),
  )
  if (season === undefined) return null

  return { season: season.number, episode: absolute - season.first + 1 }
}

/** `S02E03`: both numbers padded to two digits, more when they need more. */
export function formatSeasonCode(season: number, episode: number): string {
  return `S${String(season).padStart(2, '0')}E${String(episode).padStart(2, '0')}`
}
