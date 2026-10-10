import { FILLER, LAST_AIRED } from '~/data/filler'
import { absoluteEpisodeOf, type Bookmark } from '~/lib/progress/episode'
import type { Countdown, CountdownCell, CountdownMark } from '~/lib/view/filler'

import { INDEXED, type Looker, skipRangesOf, slotOf } from './fillerRows.server'

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

/** The episodes from `here` to the end of the row, each with its entry. */
function cellsFrom(here: number, look: Looker): CountdownCell[] {
  const last = Math.min(here + AHEAD, LAST_AIRED)
  const cells: CountdownCell[] = []

  for (let episode = here; episode <= last; episode += 1) {
    const item = INDEXED.find(
      ({ entry }) => 'episode' in entry && entry.episode === episode,
    )
    cells.push({
      episode,
      slot: item === undefined ? null : slotOf(item, look),
    })
  }

  return cells
}

/** The films and specials watched between the row's first and last cell. */
function marksBetween(
  here: number,
  last: number,
  look: Looker,
): CountdownMark[] {
  return INDEXED.filter(
    ({ entry }) =>
      'after' in entry && here <= entry.after && entry.after < last,
  ).map((item) => {
    return {
      after: 'after' in item.entry ? item.entry.after : here,
      slot: slotOf(item, look),
    }
  })
}

/** The countdown at this bookmark, or `null` where there is none. */
export function countdownOf(
  bookmark: Bookmark,
  look: Looker,
): Countdown | null {
  const here =
    bookmark === null || bookmark.mode === 'chapter' ?
      null
    : absoluteEpisodeOf(bookmark)
  if (here === null) {
    return null
  }

  const cells = cellsFrom(here, look)
  const run = RANGES.find((range) => range.first <= here && here <= range.last)
  const next = RANGES.find((range) => range.first > here)

  return {
    cells,
    here,
    inRun:
      run === undefined ? null : (
        { resume: run.last + 1, distance: run.last + 1 - here }
      ),
    marks: marksBetween(here, cells.at(-1)?.episode ?? here, look),
    next: next === undefined ? null : { ...next, distance: next.first - here },
  }
}
