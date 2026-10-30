import { byNumber } from 'sort-es'

import type { Bookmark } from '~/lib/progress/episode'
import type { BookmarkSeries } from '~/lib/progress/series'
import { type Gated, type Source, thresholdIn } from '~/lib/progress/spoiler'

import { toldIn } from './reveal'
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
 * A bookmark listed twice is asked once, at its last place.
 */
export function sweepOf(
  sagas: Saga[],
  series: BookmarkSeries,
  seasons: Bookmark[],
): Bookmark[] {
  const all: Bookmark[] = [
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
  const keys = all.map((bookmark) => JSON.stringify(bookmark))

  return all.filter(
    (bookmark, index) => keys.lastIndexOf(JSON.stringify(bookmark)) === index,
  )
}

/**
 * Both sides of every gate in each unit that tells it (`toldIn`), merged with
 * the numbers named by hand: episodes, then chapters, each ascending and once.
 */
export function aroundGates(
  gates: Gated[],
  named: Record<Source, number[]>,
): Bookmark[] {
  const around = (source: Source): number[] => {
    const counts = new Set(named[source])
    for (const gate of gates) {
      if (!toldIn(gate, source)) {
        continue
      }
      const at = thresholdIn(gate, source)
      counts.add(at - 1).add(at)
    }
    return [...counts].filter((count) => count > 0).sort(byNumber())
  }

  return [
    ...around('episode').map((episode): Bookmark => ({
      mode: 'episode',
      episode,
    })),
    ...around('chapter').map((chapter): Bookmark => ({
      mode: 'chapter',
      chapter,
    })),
  ]
}
