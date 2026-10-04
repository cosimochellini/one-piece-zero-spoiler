import { describe, expect, it } from 'vitest'

import { reveal } from '~/data/reveal'

import { bookmarkForRequest } from './requestBookmark'

const GOOGLEBOT =
  'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
const CHROME = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Chrome/141.0'
// The last record the archive files, rounded well past it.
const LATE = { revealedAtChapter: 1200, revealedAtEpisode: 1200 }

describe('the bookmark a request stands at', () => {
  it('is the reader’s own when they have one', () => {
    expect(bookmarkForRequest('650', CHROME)).toStrictEqual({
      mode: 'episode',
      episode: 650,
    })
  })

  it('is nothing at all for a reader who has not set one', () => {
    expect(bookmarkForRequest(undefined, CHROME)).toBeNull()
    expect(bookmarkForRequest('', CHROME)).toBeNull()
  })

  it('opens the archive to a crawler that sends no bookmark', () => {
    expect(reveal(bookmarkForRequest(undefined, GOOGLEBOT)).sees(LATE)).toBe(
      true,
    )
  })

  it('keeps the archive closed to anything else that sends none', () => {
    expect(reveal(bookmarkForRequest(undefined, CHROME)).sees(LATE)).toBe(false)
    expect(reveal(bookmarkForRequest(undefined, undefined)).sees(LATE)).toBe(
      false,
    )
  })

  it('lets a cookie win over the crawler heuristic, never the other way round', () => {
    expect(bookmarkForRequest('45', GOOGLEBOT)).toStrictEqual({
      mode: 'episode',
      episode: 45,
    })
    expect(reveal(bookmarkForRequest('45', GOOGLEBOT)).sees(LATE)).toBe(false)
  })

  it('falls back to the crawler when the cookie is one the parser rejects', () => {
    expect(reveal(bookmarkForRequest('99999', GOOGLEBOT)).sees(LATE)).toBe(true)
  })
})
