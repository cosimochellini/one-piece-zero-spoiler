import { type Bookmark, CHAPTER_CEILING } from '~/lib/progress/episode'

import { entities } from './entities'

/**
 * How far into the anime a manga chapter reaches, as far as the archive can
 * vouch for it.
 *
 * The dossier timelines and the chronicle are dated in anime episodes only,
 * so a reader who counts in chapters needs an episode to read them at. There
 * is no chapter-to-episode table here; every record already carries both of
 * its thresholds, and those pairs are the anchors. A chapter reaches the
 * episode that is below both of:
 *
 * - the latest episode of a record the chapter has reached, because past it
 *   the archive has nothing that says the chapter got that far; and
 * - the episode before the earliest record the chapter has not reached,
 *   because from there on a timeline entry could name it.
 *
 * The second bound is what keeps an anime that reorders the manga honest:
 * Shanks is in chapter 1 but episode 4, and Zoro in chapter 3 but episode 2,
 * so chapter 1 reaches episode 1 and not 4. Both bounds err towards fog,
 * which is the direction the archive always rounds in.
 *
 * ponytail: derived from the records' own thresholds, so it is only as fine
 * as they are dense; a curated chapter-to-episode table replaces it if a
 * reader ever needs better than "the last record you reached".
 */
const EPISODE_AT: readonly number[] = Array.from(
  { length: CHAPTER_CEILING + 1 },
  (_, chapter) => {
    let latestReached = 0
    let firstUnreached = Infinity
    for (const entity of entities) {
      if (entity.revealedAtChapter <= chapter) {
        latestReached = Math.max(latestReached, entity.revealedAtEpisode)
      } else {
        firstUnreached = Math.min(firstUnreached, entity.revealedAtEpisode)
      }
    }

    return Math.max(0, Math.min(latestReached, firstUnreached - 1))
  },
)

/** The episode a reader at this chapter has reached; 0 for none. */
export function episodeAtChapter(chapter: number): number {
  return EPISODE_AT[Math.min(Math.max(chapter, 0), CHAPTER_CEILING)] ?? 0
}

/**
 * The first chapter that reaches this episode, or one past the ceiling when
 * none does — which `isRevealed` reads as never.
 */
export function chapterAtEpisode(episode: number): number {
  const chapter = EPISODE_AT.findIndex(
    (reached, at) => at >= 1 && reached >= episode,
  )

  return chapter === -1 ? CHAPTER_CEILING + 1 : chapter
}

/**
 * The bookmark the timelines are cut at: a chapter bookmark read as the
 * episode it reaches, any other bookmark as it is.
 */
export function timelineBookmark(bookmark: Bookmark): Bookmark {
  if (bookmark?.mode !== 'chapter') {
    return bookmark
  }

  const episode = episodeAtChapter(bookmark.chapter)
  return episode < 1 ? null : { mode: 'episode', episode }
}
