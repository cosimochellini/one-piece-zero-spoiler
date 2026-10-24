import type { Gated, Source } from '~/lib/progress/spoiler'

import type { Dated, Entity } from './types'

/**
 * How far into the anime a manga chapter reaches, as far as the archive can
 * vouch for it.
 *
 * The dossier timelines and the chronicle are dated in anime episodes, and
 * only some entries say which chapter tells them; a reader who counts in
 * chapters reads every other entry at the first chapter that reaches its
 * episode (`datedOf` on the archive). There is no chapter-to-episode table to read
 * that from, so it is derived. A chapter reaches the episode that is below
 * both of:
 *
 * - the latest episode of a record the chapter has reached, because past it
 *   the archive has nothing that says the chapter got that far; and
 * - the episode before the earliest record, or the earliest entry with a
 *   chapter of its own, that the chapter has not reached, because from there
 *   on a timeline entry could name it or be it.
 *
 * The second bound is what keeps an anime that reorders the manga honest:
 * Shanks is in chapter 1 but episode 4, and Zoro in chapter 3 but episode 2,
 * so chapter 1 reaches episode 1 and not 4. Both bounds err towards fog,
 * which is the direction the archive always rounds in.
 *
 * Where the records are sparse a chapter would still reach episodes the
 * manga tells chapters later. The fix is a `chapter` on the entry that was
 * seen too early: it opens the entry at that chapter and, through the second
 * bound, holds every earlier chapter below its episode.
 *
 * Three kinds of record are left out. A fruit, because its chapter is read off
 * this table (One Piece's `entities`) and would otherwise bound itself: the table
 * is built from the records as they are filed (a series' sagas), before the
 * fruits are added, though a fruit's redrawings still anchor it like any
 * other entry. A record marked `unanchored`, whose two thresholds are too
 * far apart to say anything about the chapters between them. And a record or
 * an entry one source alone tells (`source`), whose threshold in the other
 * source only orders it and vouches for nothing (`vouches`).
 */

/**
 * Whether a record or an entry vouches for its (episode, chapter) pair: not
 * when one source alone tells it, and not when it is marked `unanchored`.
 */
export function vouches(
  dated: Pick<Entity, 'unanchored'> & { source?: Source },
): boolean {
  return dated.source === undefined && dated.unanchored !== true
}

/** What a series builds its chapter table from. */
export interface TableSource {
  /**
   * The (episode, chapter) pairs the entries vouch for themselves: every
   * entry with a `chapter` of its own whose entry and record both vouch.
   */
  anchors: [number, number][]
  chapterCeiling: number
  episodeCeiling: number
  /** The records as they are filed; those that do not vouch are left out. */
  records: Entity[]
}

/** One series' chapter table, worked out once. */
export interface ChapterTable {
  /**
   * The first chapter that reaches this episode, or one past the ceiling when
   * none does — which `isRevealed` reads as never.
   */
  chapterAtEpisode: (episode: number) => number
  /** The episode a reader at this chapter has reached; 0 for none. */
  episodeAtChapter: (chapter: number) => number
  /**
   * When a dated entry may be shown: from its episode, and from the chapter it
   * declares or, without one, the first chapter that reaches its episode — and
   * never before its record, whichever is later in each unit. A record of one
   * source only gives its entries its source; an entry of its own one source
   * keeps it (`Dated.source`), so a reader of the other never reaches either.
   */
  gateOf: (entry: Dated<unknown>, owner: Gated) => Gated
}

/** The episode each chapter reaches, from 0 to the ceiling. */
function episodesAt({
  anchors,
  chapterCeiling,
  records,
}: TableSource): number[] {
  const vouched = records.filter((entity) => vouches(entity))

  return Array.from({ length: chapterCeiling + 1 }, (_, chapter) => {
    let latestReached = 0
    let firstUnreached = Infinity
    for (const [episode, anchored] of anchors) {
      if (anchored > chapter) {
        firstUnreached = Math.min(firstUnreached, episode)
      }
    }
    for (const entity of vouched) {
      if (entity.revealedAtChapter <= chapter) {
        latestReached = Math.max(latestReached, entity.revealedAtEpisode)
      } else {
        firstUnreached = Math.min(firstUnreached, entity.revealedAtEpisode)
      }
    }

    return Math.max(0, Math.min(latestReached, firstUnreached - 1))
  })
}

/** A series' chapter table, from its records and anchors. */
export function chapterTable(source: TableSource): ChapterTable {
  const { chapterCeiling, episodeCeiling } = source
  const episodeAt = episodesAt(source)
  // The inverse, worked out once: every timeline entry a chapter reader is
  // shown is looked up here.
  const chapterAt = Array.from({ length: episodeCeiling + 1 }, (_, episode) => {
    const chapter = episodeAt.findIndex(
      (reached, at) => at >= 1 && reached >= episode,
    )

    return chapter === -1 ? chapterCeiling + 1 : chapter
  })
  const chapterAtEpisode = (episode: number): number =>
    chapterAt[Math.max(episode, 0)] ?? chapterCeiling + 1

  return {
    chapterAtEpisode,
    episodeAtChapter: (chapter) =>
      episodeAt[Math.min(Math.max(chapter, 0), chapterCeiling)] ?? 0,
    gateOf: (entry, owner) => {
      const revealedAtEpisode = Math.max(owner.revealedAtEpisode, entry.episode)
      const told = owner.source ?? entry.source

      return {
        revealedAtEpisode,
        revealedAtChapter: Math.max(
          owner.revealedAtChapter,
          entry.chapter ?? chapterAtEpisode(revealedAtEpisode),
        ),
        ...(told !== undefined && { source: told }),
      }
    },
  }
}
