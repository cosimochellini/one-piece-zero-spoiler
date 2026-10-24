import type { SeriesArchive } from '~/data/types'
import { absoluteEpisodeOf } from '~/lib/progress/episode'
import type {
  Countdown,
  CountdownCell,
  CountdownMark,
  FillerAhead,
} from '~/lib/view/filler'

import {
  type Indexed,
  indexedFor,
  skipRangesOf,
  slotOf,
} from './fillerRows.server'
import type { Reader } from './reader.server'

/**
 * The reader's next few episodes: their own, and the five after it.
 *
 * Only an episode or season reader has one. A chapter reader reads the
 * manga, which has no filler, and a reader with no bookmark is somewhere the
 * page cannot know. Every cell past the bookmark is a covered slot like any
 * other row, so the countdown says what kind an episode is and nothing more.
 */

// The reader's episode and the five after it: a row that fits a phone.
const AHEAD = 5

/** Every run that can be skipped, across arcs: a run is one skip. */
const ranges = new WeakMap<SeriesArchive, ReturnType<typeof skipRangesOf>>()
function rangesFor(r: Reader): ReturnType<typeof skipRangesOf> {
  let found = ranges.get(r.archive)
  if (found === undefined) {
    found = skipRangesOf(r.archive.filler)
    ranges.set(r.archive, found)
  }
  return found
}

/** The episodes from `here` to the end of the row. */
function episodesFrom(here: number, r: Reader): number[] {
  const last = Math.min(here + AHEAD, r.archive.lastAired)
  return Array.from({ length: last - here + 1 }, (_, at) => here + at)
}

/** The numbered entry at one episode, if it is not plain canon. */
function itemAt(episode: number, r: Reader): Indexed | undefined {
  return indexedFor(r).find(
    ({ entry }) => 'episode' in entry && entry.episode === episode,
  )
}

/** The episodes from `here` to the end of the row, each with its entry. */
function cellsFrom(here: number, r: Reader): CountdownCell[] {
  return episodesFrom(here, r).map((episode) => {
    const item = itemAt(episode, r)
    return { episode, slot: item === undefined ? null : slotOf(item, r) }
  })
}

/** The run the reader is inside, and the next one after them. */
function runsAround(
  here: number,
  r: Reader,
): Pick<Countdown, 'inRun' | 'next'> {
  const run = rangesFor(r).find(
    (range) => range.first <= here && here <= range.last,
  )
  const next = rangesFor(r).find((range) => range.first > here)

  return {
    inRun:
      run === undefined ? null : (
        { resume: run.last + 1, distance: run.last + 1 - here }
      ),
    next: next === undefined ? null : { ...next, distance: next.first - here },
  }
}

/** The films and specials watched between the row's first and last cell. */
function marksBetween(here: number, last: number, r: Reader): CountdownMark[] {
  const marks: CountdownMark[] = []

  for (const item of indexedFor(r)) {
    const { entry } = item
    if ('after' in entry && here <= entry.after && entry.after < last) {
      marks.push({ after: entry.after, slot: slotOf(item, r) })
    }
  }

  return marks
}

/**
 * The reader's aired episode, or `null`: no bookmark, a chapter one, or one
 * past the last aired episode, which the bookmark accepts and the row cannot
 * draw.
 */
function airedEpisodeOf(r: Reader): null | number {
  const { bookmark } = r
  if (bookmark === null || bookmark.mode === 'chapter') {
    return null
  }

  const here = absoluteEpisodeOf(bookmark, r.archive.series)
  return here !== null && here <= r.archive.lastAired ? here : null
}

/** The countdown at this bookmark, or `null` where there is none. */
export function countdownOf(r: Reader): Countdown | null {
  const here = airedEpisodeOf(r)
  if (here === null) {
    return null
  }

  const cells = cellsFrom(here, r)

  return {
    cells,
    here,
    ...runsAround(here, r),
    marks: marksBetween(here, cells.at(-1)?.episode ?? here, r),
  }
}

/**
 * The home page's warning, or `null` when it has nothing to warn of: the
 * reader is inside a run to skip, or the next one starts within the row.
 *
 * The cells carry a kind and nothing else, which the strip on the filler
 * page sends whatever the bookmark, so nothing here needs a gate.
 */
export function fillerAheadOf(r: Reader): FillerAhead | null {
  const here = airedEpisodeOf(r)
  if (here === null) {
    return null
  }

  const runs = runsAround(here, r)
  if (
    runs.inRun === null
    && (runs.next === null || runs.next.distance > AHEAD)
  ) {
    return null
  }

  return {
    cells: episodesFrom(here, r).map((episode) => {
      const kind = itemAt(episode, r)?.entry.kind ?? null
      return { episode, kind }
    }),
    here,
    ...runs,
  }
}
