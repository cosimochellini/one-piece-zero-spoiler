import { FILLER, LAST_AIRED } from '~/data/series/one-piece/filler'
import { absoluteEpisodeOf, type Bookmark } from '~/lib/progress/episode'
import type {
  Countdown,
  CountdownCell,
  CountdownMark,
  FillerAhead,
} from '~/lib/view/filler'

import {
  INDEXED,
  type Indexed,
  type Looker,
  skipRangesOf,
  slotOf,
} from './fillerRows.server'

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
const RANGES = skipRangesOf(FILLER)

/** The episodes from `here` to the end of the row. */
function episodesFrom(here: number): number[] {
  const last = Math.min(here + AHEAD, LAST_AIRED)
  return Array.from({ length: last - here + 1 }, (_, at) => here + at)
}

/** The numbered entry at one episode, if it is not plain canon. */
function itemAt(episode: number): Indexed | undefined {
  return INDEXED.find(
    ({ entry }) => 'episode' in entry && entry.episode === episode,
  )
}

/** The episodes from `here` to the end of the row, each with its entry. */
function cellsFrom(here: number, look: Looker): CountdownCell[] {
  return episodesFrom(here).map((episode) => {
    const item = itemAt(episode)
    return { episode, slot: item === undefined ? null : slotOf(item, look) }
  })
}

/** The run the reader is inside, and the next one after them. */
function runsAround(here: number): Pick<Countdown, 'inRun' | 'next'> {
  const run = RANGES.find((range) => range.first <= here && here <= range.last)
  const next = RANGES.find((range) => range.first > here)

  return {
    inRun:
      run === undefined ? null : (
        { resume: run.last + 1, distance: run.last + 1 - here }
      ),
    next: next === undefined ? null : { ...next, distance: next.first - here },
  }
}

/** The films and specials watched between the row's first and last cell. */
function marksBetween(
  here: number,
  last: number,
  look: Looker,
): CountdownMark[] {
  const marks: CountdownMark[] = []

  for (const item of INDEXED) {
    const { entry } = item
    if ('after' in entry && here <= entry.after && entry.after < last) {
      marks.push({ after: entry.after, slot: slotOf(item, look) })
    }
  }

  return marks
}

/**
 * The reader's aired episode, or `null`: no bookmark, a chapter one, or one
 * past the last aired episode, which the bookmark accepts and the row cannot
 * draw.
 */
function airedEpisodeOf(bookmark: Bookmark): null | number {
  if (bookmark === null || bookmark.mode === 'chapter') {
    return null
  }

  const here = absoluteEpisodeOf(bookmark)
  return here !== null && here <= LAST_AIRED ? here : null
}

/** The countdown at this bookmark, or `null` where there is none. */
export function countdownOf(
  bookmark: Bookmark,
  look: Looker,
): Countdown | null {
  const here = airedEpisodeOf(bookmark)
  if (here === null) {
    return null
  }

  const cells = cellsFrom(here, look)

  return {
    cells,
    here,
    ...runsAround(here),
    marks: marksBetween(here, cells.at(-1)?.episode ?? here, look),
  }
}

/**
 * The home page's warning, or `null` when it has nothing to warn of: the
 * reader is inside a run to skip, or the next one starts within the row.
 *
 * The cells carry a kind and nothing else, which the strip on the filler
 * page sends whatever the bookmark, so nothing here needs a gate.
 */
export function fillerAheadOf(bookmark: Bookmark): FillerAhead | null {
  const here = airedEpisodeOf(bookmark)
  if (here === null) {
    return null
  }

  const runs = runsAround(here)
  if (
    runs.inRun === null
    && (runs.next === null || runs.next.distance > AHEAD)
  ) {
    return null
  }

  return {
    cells: episodesFrom(here).map((episode) => {
      const kind = itemAt(episode)?.entry.kind ?? null
      return { episode, kind }
    }),
    here,
    ...runs,
  }
}
