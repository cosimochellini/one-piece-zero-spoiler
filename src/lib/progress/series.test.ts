import { describe, expect, it } from 'vitest'

import { reveal } from '~/data/reveal'

import {
  absoluteEpisodeOf,
  ceilingOf,
  episodeValue,
  gradeDraft,
  parseBookmark,
  stepperOf,
} from './episode'
import {
  bookmarkFromCookies,
  parseTrial,
  trialForRequest,
} from './requestBookmark'
import {
  getSeason,
  locateEpisode,
  resolveEpisode,
  seasonLength,
} from './seasons'
import {
  type BookmarkSeries,
  ONE_PIECE_BOOKMARK,
  seriesForPath,
} from './series'

const OTHER: BookmarkSeries = {
  slug: 'test-series',
  cookie: 'zs_test-series',
  trialCookie: 'zs_test-series_try',
  episodeCeiling: 12,
  chapterCeiling: 20,
  demoLastEpisode: 3,
  demoLastChapter: 5,
  seasons: [
    { number: 1, first: 1, last: 4 },
    { number: 2, first: 5, last: null },
  ],
}

const SEASON_DRAFT = { mode: 'season', season: '2', number: '3' } as const

describe('the series of a route', () => {
  it.each([
    '/en',
    '/it/',
    '/en/characters',
    '/it/characters/nami',
    '/en/fruits/gum-gum',
    '/it/places',
    '/en/filler',
    '/one-piece/en',
    '/one-piece/it/characters/nami',
  ])('keeps %s in One Piece until the routes move', (path) => {
    expect(seriesForPath(path)).toBe(ONE_PIECE_BOOKMARK)
  })

  it.each([
    '/',
    '/legal',
    '/privacy',
    '/en/legal',
    '/it/privacy',
    '/one-piece/en/legal',
    '/one-piece/it/privacy',
    '/fr',
    '/hunter-x-hunter/en',
    '/missing/en',
    '/en/missing',
    '/en/filler/extra',
    '/en/characters/nami/extra',
    '//en',
  ])('gives %s no series', (path) => {
    expect(seriesForPath(path)).toBeNull()
  })
})

describe('bookmark rules from the series description', () => {
  it('validates episode, chapter and season counts against their own limits', () => {
    expect(parseBookmark('12', OTHER)).toStrictEqual({
      mode: 'episode',
      episode: 12,
    })
    expect(parseBookmark('13', OTHER)).toBeNull()
    expect(parseBookmark('c20', OTHER)).toStrictEqual({
      mode: 'chapter',
      chapter: 20,
    })
    expect(parseBookmark('c21', OTHER)).toBeNull()
    expect(parseBookmark('s2e8', OTHER)).toStrictEqual({
      mode: 'season',
      season: 2,
      episode: 8,
    })
    expect(parseBookmark('s2e9', OTHER)).toBeNull()
    expect(parseBookmark('s3e1', OTHER)).toBeNull()
    expect(parseBookmark('s1e5', OTHER)).toBeNull()
  })

  it('resolves and prints season positions with that series table', () => {
    expect(resolveEpisode(2, 3, OTHER)).toBe(7)
    expect(
      absoluteEpisodeOf({ mode: 'season', season: 2, episode: 3 }, OTHER),
    ).toBe(7)
    expect(locateEpisode(7, OTHER)).toStrictEqual({ season: 2, episode: 3 })
    expect(locateEpisode(13, OTHER)).toBeNull()
    expect(episodeValue(7, 'season', OTHER)).toBe('S02E03')
    expect(getSeason(3, OTHER)).toBeUndefined()
    expect(seasonLength({ number: 2, first: 5, last: null }, OTHER)).toBe(8)
    expect(seasonLength({ number: 2, first: 5, last: 100 }, OTHER)).toBe(8)
  })

  it('keeps form grading, hints and steppers on the same ranges', () => {
    expect(gradeDraft(SEASON_DRAFT, OTHER).bookmark).toStrictEqual({
      mode: 'season',
      season: 2,
      episode: 3,
    })
    expect(ceilingOf(SEASON_DRAFT, OTHER)).toBe(8)
    expect(stepperOf({ ...SEASON_DRAFT, number: '8' }, OTHER).stepped(1)).toBe(
      '8',
    )
    expect(gradeDraft({ ...SEASON_DRAFT, number: '9' }, OTHER).problem).toBe(
      'range',
    )
    expect(ceilingOf({ mode: 'episode', season: '', number: '' }, OTHER)).toBe(
      12,
    )
    expect(ceilingOf({ mode: 'chapter', season: '', number: '' }, OTHER)).toBe(
      20,
    )
  })

  it('offers no season bookmark for a series without seasons', () => {
    const withoutSeasons = { ...OTHER, seasons: [] }

    expect(parseBookmark('s1e1', withoutSeasons)).toBeNull()
    expect(gradeDraft(SEASON_DRAFT, withoutSeasons).problem).toBe('season')
    expect(resolveEpisode(1, 1, withoutSeasons)).toBeNull()
  })
})

describe('isolated series cookies', () => {
  it('never reads another series saved or trial bookmark', () => {
    const jar = new Map([
      [ONE_PIECE_BOOKMARK.cookie, '650'],
      [ONE_PIECE_BOOKMARK.trialCookie, '12'],
    ])

    expect(bookmarkFromCookies(jar, OTHER)).toBeNull()
    expect(
      reveal(bookmarkFromCookies(jar, OTHER), OTHER).sees({
        revealedAtEpisode: 1,
        revealedAtChapter: 1,
      }),
    ).toBe(false)

    jar.set(OTHER.cookie, 's2e3')

    expect(bookmarkFromCookies(jar, ONE_PIECE_BOOKMARK)).toStrictEqual({
      mode: 'episode',
      episode: 650,
    })
    expect(
      reveal(bookmarkFromCookies(jar, OTHER), OTHER).sees({
        revealedAtEpisode: 8,
        revealedAtChapter: 8,
      }),
    ).toBe(false)
    expect(
      reveal(bookmarkFromCookies(jar, OTHER), OTHER).sees({
        revealedAtEpisode: 7,
        revealedAtChapter: 7,
      }),
    ).toBe(true)
  })

  it('uses each series demo bounds and retains saved-over-trial precedence', () => {
    expect(parseTrial('3', OTHER)).toStrictEqual({
      mode: 'episode',
      episode: 3,
    })
    expect(parseTrial('4', OTHER)).toBeNull()
    expect(parseTrial('c5', OTHER)).toStrictEqual({
      mode: 'chapter',
      chapter: 5,
    })
    expect(parseTrial('c6', OTHER)).toBeNull()
    expect(parseTrial('s1e1', OTHER)).toBeNull()
    expect(trialForRequest('10', '3', OTHER)).toBeNull()
    expect(trialForRequest(undefined, '3', OTHER)).not.toBeNull()
  })

  it('treats a crawler as having finished the requested series', () => {
    const jar = new Map<string, string>()

    expect(bookmarkFromCookies(jar, OTHER, 'Googlebot')).toStrictEqual({
      mode: 'episode',
      episode: 12,
    })
    expect(
      bookmarkFromCookies(jar, ONE_PIECE_BOOKMARK, 'Googlebot'),
    ).toStrictEqual({ mode: 'episode', episode: 1300 })

    jar.set(OTHER.cookie, '2')

    expect(bookmarkFromCookies(jar, OTHER, 'Googlebot')).toStrictEqual({
      mode: 'episode',
      episode: 2,
    })
  })
})
