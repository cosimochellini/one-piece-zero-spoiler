import { isLocale, type Locale } from '~/i18n/locales'
import type { EntityKind } from '~/lib/view/records'
import type { SeriesTheme } from '~/styles/themes'

import type { BookmarkMode } from './episode'

/** One season's inclusive absolute episode range. */
export interface Season {
  first: number
  number: number
  /** Null while airing; the series' episode ceiling is the limit. */
  last: null | number
}

/**
 * One book's inclusive absolute chapter range. A book is finished when it is
 * filed, so its last chapter is always known.
 */
export interface Book {
  first: number
  last: number
  number: number
}

/** Public bookmark metadata, without any archive records or drawings. */
export interface BookmarkSeries {
  /**
   * The books its chapters are grouped in, for a series read as book and
   * chapter. A chapter bookmark still holds the absolute chapter; the books
   * only change how it is asked for and said. Absent, chapters are counted
   * from the first.
   */
  books?: Book[]
  chapterCeiling: number
  cookie: string
  /**
   * The demo span: the last chapter and episode the onboarding dial covers.
   * A reader with no bookmark is sent this much and nothing past it, and a
   * trial point past it is ignored.
   */
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
    /**
     * Whether its places pages draw One Piece's world map. Without it the
     * index, grouped by region, is the places page, and a place's page has
     * no map; the server sends no point to draw.
     */
    worldMap: boolean
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
  // Name of the cookie holding the reader's bookmark.
  cookie: 'zs_one-piece',
  // A trial point the onboarding sets for one browser session, so a visitor
  // can open a page at the dial's point without saving it. It carries no
  // Max-Age and ends with the session.
  trialCookie: 'zs_one-piece_try',
  // The ranges the dialog accepts. They are form ranges, not a claim about
  // how much has come out: raise one when the archive needs to file something
  // above it. Anything larger is a typo, and a typo that sets the bookmark to
  // 99999 would quietly reveal the whole site.
  episodeCeiling: 1300,
  chapterCeiling: 1300,
  // The last episode and chapter of East Blue, the stretch the onboarding
  // dial covers. The data tests hold both against the first arc after it.
  demoLastEpisode: 61,
  demoLastChapter: 100,
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
  features: {
    bounty: true,
    factions: true,
    filler: true,
    fruits: true,
    worldMap: true,
  },
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
  features: {
    bounty: false,
    factions: false,
    filler: false,
    fruits: false,
    worldMap: false,
  },
}

/**
 * Game of Thrones' form ranges: the HBO show (8 seasons, 73 episodes) and
 * the five books in publication order, prologues and epilogues counted as
 * chapters (73, 70, 82, 46 and 73; 344 in all). The demo is season 1 and *A
 * Game of Thrones*, the first stage (owner, 2026-10-26).
 */
const GAME_OF_THRONES_BOOKMARK: BookmarkSeries = {
  slug: 'game-of-thrones',
  cookie: 'zs_game-of-thrones',
  trialCookie: 'zs_game-of-thrones_try',
  episodeCeiling: 73,
  chapterCeiling: 344,
  demoLastEpisode: 10,
  demoLastChapter: 73,
  seasons: [
    { number: 1, first: 1, last: 10 },
    { number: 2, first: 11, last: 20 },
    { number: 3, first: 21, last: 30 },
    { number: 4, first: 31, last: 40 },
    { number: 5, first: 41, last: 50 },
    { number: 6, first: 51, last: 60 },
    { number: 7, first: 61, last: 67 },
    { number: 8, first: 68, last: 73 },
  ],
  books: [
    { number: 1, first: 1, last: 73 },
    { number: 2, first: 74, last: 143 },
    { number: 3, first: 144, last: 225 },
    { number: 4, first: 226, last: 271 },
    { number: 5, first: 272, last: 344 },
  ],
}

/**
 * Game of Thrones' public description, filed closed (#849). It files
 * characters and places and no arcs; none of One Piece's features.
 */
export const GAME_OF_THRONES_SERIES: Series = {
  ...GAME_OF_THRONES_BOOKMARK,
  name: { en: 'Game of Thrones', it: 'Il Trono di Spade' },
  theme: 'game-of-thrones',
  units: ['episode', 'season', 'chapter'],
  kinds: ['character', 'place'],
  features: {
    bounty: false,
    factions: false,
    filler: false,
    fruits: false,
    worldMap: false,
  },
}

/** A page under `/{series}/{locale}/` that only some series have. */
export type SeriesPage = 'characters' | 'filler' | 'fruits' | 'places'

/** What decides each of those pages: a kind the series files, or a feature. */
const PAGES: Record<SeriesPage, (series: Series) => boolean> = {
  characters: (series) => series.kinds.includes('character'),
  places: (series) =>
    series.kinds.includes('place') || series.kinds.includes('ship'),
  fruits: (series) => series.features.fruits,
  filler: (series) => series.features.filler,
}

/**
 * Whether the series declares the page: the one answer its routes (404),
 * the bar (a link) and the sitemap (an address) all read.
 */
export function hasPage(series: Series, page: SeriesPage): boolean {
  return PAGES[page](series)
}

function isSeriesPage(page: string): page is SeriesPage {
  return Object.hasOwn(PAGES, page)
}

/** Only an archive index, record or filler page carries a bookmark. */
function isContentPage(page: string | undefined, rest: string[]): boolean {
  if (page === undefined) {
    return true
  }
  if (!isSeriesPage(page)) {
    return false
  }
  if (page === 'filler') {
    return rest.length === 0
  }
  return rest.length <= 1 && rest[0] !== ''
}

/** `/{series}/{locale}/{page}`: the page is the split's fourth part. */
const PAGE_SEGMENT = 3

/**
 * Whether a content address (one `seriesSlugFromPath` reads a slug from) is
 * a page the series declares: its home always is.
 */
function declaresPath(series: Series, pathname: string): boolean {
  const page = pathname.split('/', PAGE_SEGMENT + 1)[PAGE_SEGMENT]
  return page === undefined || !isSeriesPage(page) || hasPage(series, page)
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

/**
 * The series whose bookmark a link parameter on this address sets: the one
 * in the path, when the registry knows it and declares the page. On any
 * other page the parameter sets nothing, so no bookmark is written on the
 * way to a 404.
 * @param pathname The address the link names.
 * @param describe The registry's lookup of a series' public description.
 */
export function linkedSeries(
  pathname: string,
  describe: (slug: string) => null | Series,
): null | Series {
  const slug = seriesSlugFromPath(pathname)
  const series = slug === null ? null : describe(slug)
  return series !== null && declaresPath(series, pathname) ? series : null
}
