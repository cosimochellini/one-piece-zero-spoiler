import { isLocale } from '~/i18n/locales'

import {
  CHAPTER_CEILING,
  DEMO_LAST_CHAPTER,
  DEMO_LAST_EPISODE,
  EPISODE_CEILING,
  EPISODE_COOKIE,
  TRIAL_COOKIE,
} from './bounds'

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

const RECORD_PAGE = /^(?:characters|fruits|places)$/u

/** The series of a content route; root, legal/privacy and unknown paths have none. */
export function seriesForPath(pathname: string): BookmarkSeries | null {
  // #753 replaces this compatibility match when locale-first paths become hubs.
  const [locale, page, ...parts] = pathname
    .replace(/^\/one-piece\//u, '/')
    .replace(/\/$/u, '')
    .split('/')
    .slice(1)
  if (!isLocale(locale)) {
    return null
  }
  switch (page) {
    case 'filler': {
      return parts.length === 0 ? ONE_PIECE_BOOKMARK : null
    }
    case undefined: {
      return ONE_PIECE_BOOKMARK
    }
    default: {
      return (
          RECORD_PAGE.test(page) && parts.length <= 1 && !parts.includes('')
        ) ?
          ONE_PIECE_BOOKMARK
        : null
    }
  }
}
