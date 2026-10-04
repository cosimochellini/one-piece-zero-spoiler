import {
  absoluteEpisodeOf,
  type Bookmark,
  type BookmarkMode,
  modeOf,
} from '~/lib/progress/episode'
import { type Gated, thresholdIn } from '~/lib/progress/spoiler'

import { chapterAtEpisode } from './chapters'
import type { Dated, Timeline } from './types'

/**
 * What a reader at one bookmark may see, decided once.
 *
 * Every question the archive asks of a bookmark goes through here, so the one
 * that is easy to get wrong — a chapter bookmark against a timeline dated in
 * episodes — is answered in one place rather than remembered at every call:
 * an entry is reached when its gate (`gateOf`) is seen, like a record.
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
   * order. With the record that owns the timeline, nothing is reached before
   * the record itself (`gateOf`).
   */
  readonly latest: <T>(
    timeline: Timeline<T> | undefined,
    owner?: Gated,
  ) => T | undefined
  /** Every entry of a timeline the reader has reached, in its own order. */
  readonly reached: <E extends When>(
    timeline: readonly E[] | undefined,
    owner?: Gated,
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
  const reached: Reveal['reached'] = (timeline, owner) => {
    const gate = (entry: When): Gated => gateOf(entry, owner)

    return (timeline ?? []).filter((entry) => isRevealed(gate(entry), bookmark))
  }

  return {
    mode,
    reached,
    latest: (timeline, owner) => reached(timeline, owner).at(-1)?.value,
    sees: (gated) => isRevealed(gated, bookmark),
    threshold: (gated) => thresholdIn(gated, mode),
  }
}

/**
 * The same reader, reading one record's own timelines: every entry waits for
 * the record too, so a record left out of the chapter table cannot have its
 * facts reached before it is.
 */
export function ownedBy(at: Reveal, owner: Gated): Reveal {
  return {
    ...at,
    latest: (timeline) => at.latest(timeline, owner),
    reached: (timeline) => at.reached(timeline, owner),
  }
}

/** When a dated entry happens: its episode, and its chapter if it says. */
export type When = Pick<Dated<unknown>, 'chapter' | 'episode'>

/**
 * When a dated entry may be shown: from its episode, and from the chapter it
 * declares or, without one, the first chapter that reaches its episode. With
 * an `owner` it is the later of the entry and the owner's own thresholds,
 * because a dated fact about a record the reader has not met would name it.
 */
export function gateOf(entry: When, owner?: Gated): Gated {
  const revealedAtEpisode = Math.max(
    owner?.revealedAtEpisode ?? 0,
    entry.episode,
  )

  return {
    revealedAtEpisode,
    revealedAtChapter: Math.max(
      owner?.revealedAtChapter ?? 0,
      entry.chapter ?? chapterAtEpisode(revealedAtEpisode),
    ),
  }
}
