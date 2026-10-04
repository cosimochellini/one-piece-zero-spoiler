import {
  absoluteEpisodeOf,
  type Bookmark,
  type BookmarkMode,
  modeOf,
} from '~/lib/progress/episode'
import { type Gated, thresholdIn } from '~/lib/progress/spoiler'

import { chapterAtEpisode, episodeAtChapter } from './chapters'
import type { Timeline } from './types'

/**
 * What a reader at one bookmark may see, decided once.
 *
 * Every question the archive asks of a bookmark goes through here, so the one
 * that is easy to get wrong — a chapter bookmark against a timeline dated in
 * episodes — is answered in one place rather than remembered at every call.
 * A `null` bookmark sees nothing and reaches nothing. That asymmetry is the
 * product: a reader who has not told the site where they are must not be
 * shown anything, whereas a reader who has is shown exactly as much as they
 * asked for.
 */
export type Reveal = {
  /** The unit the reader counts in, and so the one thresholds are printed in. */
  readonly mode: BookmarkMode
  /**
   * The latest entry of a timeline the reader has reached, or `undefined`
   * for none, or for no timeline. Entries are expected in ascending episode
   * order.
   */
  readonly latest: <T>(timeline: Timeline<T> | undefined) => T | undefined
  /** Every entry of a timeline the reader has reached, in its own order. */
  readonly reached: <E extends { readonly episode: number }>(
    timeline: readonly E[] | undefined,
  ) => readonly E[]
  /**
   * Whether a record may be shown. A chapter bookmark is read against the
   * chapter threshold and nothing else; an episode or season bookmark against
   * the episode one.
   */
  readonly sees: (gated: Gated) => boolean
  /** A record's threshold in the reader's unit. */
  readonly threshold: (gated: Gated) => number
}

/**
 * The episode a bookmark has reached on a timeline, or `null` for none: no
 * bookmark, a season code the table cannot resolve, or a chapter that reaches
 * no episode. Timelines count in episodes only, so a chapter is read as the
 * episode it reaches (`./chapters`).
 */
function timelineEpisode(bookmark: Bookmark): null | number {
  if (bookmark === null) {
    return null
  }
  if (bookmark.mode !== 'chapter') {
    return absoluteEpisodeOf(bookmark)
  }

  const episode = episodeAtChapter(bookmark.chapter)
  return episode < 1 ? null : episode
}

/** Whether a record may be shown at this bookmark; see `Reveal.sees`. */
function isRevealed(gated: Gated, bookmark: Bookmark): boolean {
  if (bookmark === null) {
    return false
  }
  if (bookmark.mode === 'chapter') {
    return bookmark.chapter >= gated.revealedAtChapter
  }

  const episode = absoluteEpisodeOf(bookmark)
  return episode !== null && episode >= gated.revealedAtEpisode
}

/** The reader at this bookmark. */
export function reveal(bookmark: Bookmark): Reveal {
  const mode = modeOf(bookmark)
  const progress = timelineEpisode(bookmark)
  const reached: Reveal['reached'] = (timeline) => {
    return progress === null || timeline === undefined ?
        []
      : timeline.filter((entry) => entry.episode <= progress)
  }

  return {
    mode,
    reached,
    latest: (timeline) => reached(timeline).at(-1)?.value,
    sees: (gated) => isRevealed(gated, bookmark),
    threshold: (gated) => thresholdIn(gated, mode),
  }
}

/**
 * When an entry dated at `episode` may be shown: from that episode, and from
 * the first chapter that reaches it, since an entry carries no chapter of its
 * own. With an `owner` it is the later of the entry and the owner's own
 * thresholds, because a dated fact about a record the reader has not met
 * would name it.
 */
export function gateOf(episode: number, owner?: Gated): Gated {
  const revealedAtEpisode = Math.max(owner?.revealedAtEpisode ?? 0, episode)

  return {
    revealedAtEpisode,
    revealedAtChapter: Math.max(
      owner?.revealedAtChapter ?? 0,
      chapterAtEpisode(revealedAtEpisode),
    ),
  }
}
