import type { Bookmark } from '~/lib/progress/episode'
import type { BookmarkSeries } from '~/lib/progress/series'

import { headingsOf } from './shelves'
import type { Entity, Saga } from './types'

/**
 * Every saga's start, on both sides, in one unit: its earliest heading, an
 * arc record or the saga's own (`headingsOf`).
 */
function aroundSagas(
  sagas: Saga[],
  threshold: (arc: Entity) => number,
): number[] {
  return sagas.flatMap((saga) => {
    const start = Math.min(
      ...headingsOf([saga]).map((heading) => threshold(heading)),
    )
    return [start - 1, start].filter((count) => count > 0)
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
