import { describe, expect, it } from 'vitest'

import { reveal } from '~/data/reveal'

import {
  bookmarkForRequest,
  parseTrial,
  trialForRequest,
} from './requestBookmark'
import { ONE_PIECE_BOOKMARK } from './series'

const GOOGLEBOT =
  'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
const CHROME = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Chrome/141.0'
// The last record the archive files, rounded well past it.
const LATE = { revealedAtChapter: 1200, revealedAtEpisode: 1200 }

describe('the bookmark a request stands at', () => {
  it('is the reader’s own when they have one', () => {
    expect(
      bookmarkForRequest('650', undefined, {
        series: ONE_PIECE_BOOKMARK,
        userAgent: CHROME,
      }),
    ).toStrictEqual({ mode: 'episode', episode: 650 })
  })

  it('is nothing at all for a reader who has not set one', () => {
    expect(
      bookmarkForRequest(undefined, undefined, {
        series: ONE_PIECE_BOOKMARK,
        userAgent: CHROME,
      }),
    ).toBeNull()
    expect(
      bookmarkForRequest('', undefined, {
        series: ONE_PIECE_BOOKMARK,
        userAgent: CHROME,
      }),
    ).toBeNull()
  })

  it('opens the archive to a crawler that sends no bookmark', () => {
    expect(
      reveal(
        bookmarkForRequest(undefined, undefined, {
          series: ONE_PIECE_BOOKMARK,
          userAgent: GOOGLEBOT,
        }),
        ONE_PIECE_BOOKMARK,
      ).sees(LATE),
    ).toBe(true)
  })

  it('keeps the archive closed to anything else that sends none', () => {
    expect(
      reveal(
        bookmarkForRequest(undefined, undefined, {
          series: ONE_PIECE_BOOKMARK,
          userAgent: CHROME,
        }),
        ONE_PIECE_BOOKMARK,
      ).sees(LATE),
    ).toBe(false)
    expect(
      reveal(
        bookmarkForRequest(undefined, undefined, {
          series: ONE_PIECE_BOOKMARK,
        }),
        ONE_PIECE_BOOKMARK,
      ).sees(LATE),
    ).toBe(false)
  })

  it('lets a cookie win over the crawler heuristic, never the other way round', () => {
    expect(
      bookmarkForRequest('45', undefined, {
        series: ONE_PIECE_BOOKMARK,
        userAgent: GOOGLEBOT,
      }),
    ).toStrictEqual({ mode: 'episode', episode: 45 })
    expect(
      reveal(
        bookmarkForRequest('45', undefined, {
          series: ONE_PIECE_BOOKMARK,
          userAgent: GOOGLEBOT,
        }),
        ONE_PIECE_BOOKMARK,
      ).sees(LATE),
    ).toBe(false)
  })

  it('falls back to the crawler when the cookie is one the parser rejects', () => {
    expect(
      reveal(
        bookmarkForRequest('99999', undefined, {
          series: ONE_PIECE_BOOKMARK,
          userAgent: GOOGLEBOT,
        }),
        ONE_PIECE_BOOKMARK,
      ).sees(LATE),
    ).toBe(true)
  })
})

describe('a trial point from the onboarding', () => {
  it('stands in for a bookmark the reader has not saved', () => {
    expect(
      bookmarkForRequest(undefined, '12', {
        series: ONE_PIECE_BOOKMARK,
        userAgent: CHROME,
      }),
    ).toStrictEqual({ mode: 'episode', episode: 12 })
    expect(trialForRequest(undefined, 'c40', ONE_PIECE_BOOKMARK)).toStrictEqual(
      { mode: 'chapter', chapter: 40 },
    )
  })

  it('gives way to the reader’s own bookmark', () => {
    expect(
      bookmarkForRequest('650', '12', {
        series: ONE_PIECE_BOOKMARK,
        userAgent: CHROME,
      }),
    ).toStrictEqual({ mode: 'episode', episode: 650 })
    expect(trialForRequest('650', '12', ONE_PIECE_BOOKMARK)).toBeNull()
  })

  it('counts only inside East Blue, and never as a season', () => {
    expect(parseTrial('61', ONE_PIECE_BOOKMARK)).not.toBeNull()
    expect(parseTrial('62', ONE_PIECE_BOOKMARK)).toBeNull()
    expect(parseTrial('c100', ONE_PIECE_BOOKMARK)).not.toBeNull()
    expect(parseTrial('c101', ONE_PIECE_BOOKMARK)).toBeNull()
    expect(parseTrial('s1e3', ONE_PIECE_BOOKMARK)).toBeNull()
    expect(
      bookmarkForRequest(undefined, '650', {
        series: ONE_PIECE_BOOKMARK,
        userAgent: CHROME,
      }),
    ).toBeNull()
  })

  it('leaves a crawler reading the whole route', () => {
    expect(
      reveal(
        bookmarkForRequest(undefined, undefined, {
          series: ONE_PIECE_BOOKMARK,
          userAgent: GOOGLEBOT,
        }),
        ONE_PIECE_BOOKMARK,
      ).sees(LATE),
    ).toBe(true)
  })
})
