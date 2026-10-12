import { DEMO_LAST_CHAPTER, DEMO_LAST_EPISODE } from '~/lib/progress/bounds'
import type { Bookmark } from '~/lib/progress/episode'
import { type Gated, thresholdIn } from '~/lib/progress/spoiler'
import type { Step } from '~/lib/view/records'

/**
 * The onboarding dial's point: an episode or a chapter inside East Blue. A
 * season is not offered; the dial is a demonstration, and the season form is
 * in the fields under it.
 */
export interface DialPoint {
  mode: 'chapter' | 'episode'
  value: number
}

/** The bookmark the dial's point would save, or stand at on a trial. */
export function dialBookmark(point: DialPoint): NonNullable<Bookmark> {
  return point.mode === 'chapter' ?
      { mode: 'chapter', chapter: point.value }
    : { mode: 'episode', episode: point.value }
}

/** Where the dial starts: at the trial point, or at the first episode. */
export function dialStart(start: Bookmark): DialPoint {
  switch (start?.mode) {
    case 'chapter': {
      return { mode: 'chapter', value: start.chapter }
    }
    case 'episode': {
      return { mode: 'episode', value: start.episode }
    }
    default: {
      return { mode: 'episode', value: 1 }
    }
  }
}

/** The last point the dial reaches in its unit. */
export function dialLast(mode: DialPoint['mode']): number {
  return mode === 'chapter' ? DEMO_LAST_CHAPTER : DEMO_LAST_EPISODE
}

/**
 * The same moment in the other unit. `chapterAt` is the chapter each episode
 * reaches; going back, the dial lands on the last episode that does not pass
 * the chapter, so a switch never moves the story forward.
 */
export function switchUnit(point: DialPoint, chapterAt: number[]): DialPoint {
  if (point.mode === 'episode') {
    return { mode: 'chapter', value: chapterAt[point.value - 1] ?? 1 }
  }

  const reached = chapterAt.findLastIndex((chapter) => chapter <= point.value)
  return { mode: 'episode', value: Math.max(1, reached + 1) }
}

/**
 * Whether the dial has reached a record or a fact. The browser's own copy of
 * the server's rule, for the one page that sends records ahead of the
 * reader: inclusive, and in the dial's unit only.
 */
export function dialSees(point: DialPoint, gated: Gated): boolean {
  return point.value >= thresholdIn(gated, point.mode)
}

/** The latest step the dial has reached, if any. */
export function latestStep<T>(
  steps: Step<T>[],
  point: DialPoint,
): T | undefined {
  return steps.findLast((step) => dialSees(point, step))?.value
}
