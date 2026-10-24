import { isLocale, type Locale } from '~/i18n/locales'
import type { EntityKind } from '~/lib/view/records'
import type { SeriesTheme } from '~/styles/themes'

import {
  CHAPTER_CEILING,
  DEMO_LAST_CHAPTER,
  DEMO_LAST_EPISODE,
  EPISODE_CEILING,
  EPISODE_COOKIE,
  TRIAL_COOKIE,
} from './bounds'
import type { BookmarkMode } from './episode'

/** One season's inclusive absolute episode range. */
export interface Season {
  first: number
  number: number
  /** Null while airing; the series' episode ceiling is the limit. */
  last: null | number
}

/** Public bookmark metadata, without any archive records or drawings. */
export interface BookmarkSeries {
  chapterCeiling: number
  cookie: string
  demoLastChapter: number
  demoLastEpisode: number
  episodeCeiling: number
  seasons: Season[]
  slug: string
  trialCookie: string
}

/** Public identity and the units and pages a series supports. */
export interface Series extends BookmarkSeries {
  features: {
    bounty: boolean
    factions: boolean
    filler: boolean
    fruits: boolean
  }
  kinds: EntityKind[]
  name: Record<Locale, string>
  /** The colours of its pages; a page with no series keeps the site's own. */
  theme: SeriesTheme
  units: BookmarkMode[]
}

/** One Piece's form ranges and Wikipedia season split (September 2026). */
export const ONE_PIECE_BOOKMARK: BookmarkSeries = {
  slug: 'one-piece',
  cookie: EPISODE_COOKIE,
  trialCookie: TRIAL_COOKIE,
  episodeCeiling: EPISODE_CEILING,
  chapterCeiling: CHAPTER_CEILING,
  demoLastEpisode: DEMO_LAST_EPISODE,
  demoLastChapter: DEMO_LAST_CHAPTER,
  seasons: [
    { number: 1, first: 1, last: 61 },
    { number: 2, first: 62, last: 77 },
    { number: 3, first: 78, last: 92 },
    { number: 4, first: 93, last: 130 },
    { number: 5, first: 131, last: 143 },
    { number: 6, first: 144, last: 195 },
    { number: 7, first: 196, last: 228 },
    { number: 8, first: 229, last: 263 },
    { number: 9, first: 264, last: 336 },
    { number: 10, first: 337, last: 381 },
    { number: 11, first: 382, last: 407 },
    { number: 12, first: 408, last: 421 },
    { number: 13, first: 422, last: 456 },
    { number: 14, first: 457, last: 516 },
    { number: 15, first: 517, last: 578 },
    { number: 16, first: 579, last: 628 },
    { number: 17, first: 629, last: 746 },
    { number: 18, first: 747, last: 782 },
    { number: 19, first: 783, last: 891 },
    { number: 20, first: 892, last: 1088 },
    { number: 21, first: 1089, last: 1155 },
    { number: 22, first: 1156, last: null },
  ],
}

/** One Piece's public description, reusing the bookmark limits and table. */
export const ONE_PIECE_SERIES: Series = {
  ...ONE_PIECE_BOOKMARK,
  name: { en: 'One Piece', it: 'One Piece' },
  theme: 'one-piece',
  units: ['episode', 'season', 'chapter'],
  kinds: ['arc', 'character', 'fruit', 'place', 'ship'],
  features: { bounty: true, factions: true, filler: true, fruits: true },
}

/**
 * Hunter x Hunter's form ranges, from the 2011 anime (148 episodes, finished)
 * and the manga. The chapter ceiling sits a little above chapter 420, the
 * latest published (7 September 2026, Weekly Shōnen Jump No. 41, as the
 * English Hunter x Hunter Wiki lists it): a form range, raised when new
 * chapters come out. The demo is the Hunter Exam, Zoldyck Family included:
 * episodes 1–26 of 2011 and chapters 1–43 (owner, 2026-10-24).
 *
 * The seasons are Netflix Italia's split of the 2011 anime, read from the
 * public title page (netflix.com/it/title/70300472) on 24 October 2026: six
 * seasons, starting at episodes 1, 27, 39, 59, 76 and 137. Crunchyroll splits
 * it differently; the Italian catalogue is the one a reader here counts in
 * (owner, 2026-10-24).
 */
const HUNTER_X_HUNTER_BOOKMARK: BookmarkSeries = {
  slug: 'hunter-x-hunter',
  cookie: 'zs_hunter-x-hunter',
  trialCookie: 'zs_hunter-x-hunter_try',
  episodeCeiling: 148,
  chapterCeiling: 430,
  demoLastEpisode: 26,
  demoLastChapter: 43,
  seasons: [
    { number: 1, first: 1, last: 26 },
    { number: 2, first: 27, last: 38 },
    { number: 3, first: 39, last: 58 },
    { number: 4, first: 59, last: 75 },
    { number: 5, first: 76, last: 136 },
    { number: 6, first: 137, last: 148 },
  ],
}

/**
 * Hunter x Hunter's public description. No bounty, no factions, no devil
 * fruits and no filler guide: those are One Piece's (owner, 2026-10-23). The
 * kinds are the ones it launches with; Nen abilities come later, as a field
 * of the character.
 */
export const HUNTER_X_HUNTER_SERIES: Series = {
  ...HUNTER_X_HUNTER_BOOKMARK,
  name: { en: 'Hunter x Hunter', it: 'Hunter x Hunter' },
  theme: 'hunter-x-hunter',
  units: ['episode', 'season', 'chapter'],
  kinds: ['arc', 'character', 'place'],
  features: { bounty: false, factions: false, filler: false, fruits: false },
}

const RECORD_PAGE = /^(?:characters|fruits|places)$/u

/** Only an archive index, record or filler page carries a bookmark. */
function isContentPage(page: string | undefined, rest: string[]): boolean {
  if (page === undefined) {
    return true
  }
  if (page === 'filler') {
    return rest.length === 0
  }
  return RECORD_PAGE.test(page) && rest.length <= 1 && rest[0] !== ''
}

/** The series slug of a content URL, before registry validation. */
export function seriesSlugFromPath(pathname: string): null | string {
  const [slug, locale, page, ...rest] = pathname
    .replace(/\/$/u, '')
    .split('/')
    .slice(1)
  if (slug === undefined || slug === '' || isLocale(slug)) {
    return null
  }
  return (
      locale === undefined || (isLocale(locale) && isContentPage(page, rest))
    ) ?
      slug
    : null
}
