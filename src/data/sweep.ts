import type { Bookmark } from '~/lib/progress/episode'
import type { BookmarkSeries } from '~/lib/progress/series'

import type { Entity, Saga } from './types'

/** Every saga's start, on both sides, in one unit. */
function aroundSagas(
  sagas: Saga[],
  threshold: (arc: Entity) => number,
): number[] {
  return sagas.flatMap(({ entries }) => {
    let start = Infinity
    for (const entry of entries) {
      if (entry.kind === 'arc') {
        start = Math.min(start, threshold(entry))
      }
    }
    return Number.isFinite(start) ?
        [start - 1, start].filter((count) => count > 0)
      : []
  })
}

/**
 * The bookmarks a series' spoiler sweep asks every page at: none, both sides
 * of every saga's start in episodes and in chapters, the season bookmarks
 * given, and the two ceilings, the furthest a reader gets in each unit, last.
 */
export function sweepOf(
  sagas: Saga[],
  series: BookmarkSeries,
  seasons: Bookmark[],
): Bookmark[] {
  return [
    null,
    ...aroundSagas(sagas, (arc) => arc.revealedAtEpisode).map(
      (episode): Bookmark => ({ mode: 'episode', episode }),
    ),
    ...aroundSagas(sagas, (arc) => arc.revealedAtChapter).map(
      (chapter): Bookmark => ({ mode: 'chapter', chapter }),
    ),
    ...seasons,
    { mode: 'episode', episode: series.episodeCeiling },
    { mode: 'chapter', chapter: series.chapterCeiling },
  ]
}
