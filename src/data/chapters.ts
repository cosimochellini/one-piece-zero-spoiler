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
 * Where the records are sparse a chapter would still reach episodes the
 * manga tells chapters later, so ANCHORS adds measured pairs to the second
 * bound only: an episode that opens at or after its chapter. The wiki has no
 * episode-to-chapter table (the Episode_N `chapter =` field is empty), so the
 * pairs are added where a gap was measured, not curated for every episode.
 *
 * ponytail: derived from the records' own thresholds plus a few anchors, so
 * it is only as fine as they are dense; add an anchor wherever a chapter is
 * seen to reach an episode too early.
 */
const ANCHORS: readonly (readonly [episode: number, chapter: number])[] = [
  [953, 952], // Babanuki tamed by Tama
  [976, 973], // Denjiro's Kyoshiro entries (the reveal is chapter 973)
  [1019, 1004], // Daifugo tamed, the Speed and Daifugo stories
  [1040, 1018], // the Daifugo story; chapter approximate, so it errs late
]

const EPISODE_AT: readonly number[] = Array.from(
  { length: CHAPTER_CEILING + 1 },
  (_, chapter) => {
    let latestReached = 0
    let firstUnreached = Infinity
    for (const [episode, anchored] of ANCHORS) {
      if (anchored > chapter) {
        firstUnreached = Math.min(firstUnreached, episode)
      }
    }
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
