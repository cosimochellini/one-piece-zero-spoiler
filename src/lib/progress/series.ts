import { isLocale, type Locale } from '~/i18n/locales'
import type { EntityKind } from '~/lib/view/records'

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
  units: ['episode', 'season', 'chapter'],
  kinds: ['arc', 'character', 'fruit', 'place', 'ship'],
  features: { bounty: true, factions: true, filler: true, fruits: true },
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
