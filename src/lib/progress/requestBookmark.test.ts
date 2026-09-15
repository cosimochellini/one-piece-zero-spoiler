import { describe, expect, it } from 'vitest'

import { bookmarkForRequest } from './requestBookmark'
import { isRevealed } from './spoiler'

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
    expect(isRevealed(LATE, bookmarkForRequest(undefined, GOOGLEBOT))).toBe(
      true,
    )
  })

  it('keeps the archive closed to anything else that sends none', () => {
    expect(isRevealed(LATE, bookmarkForRequest(undefined, CHROME))).toBe(false)
    expect(isRevealed(LATE, bookmarkForRequest(undefined, undefined))).toBe(
      false,
    )
  })

  it('lets a cookie win over the crawler heuristic, never the other way round', () => {
    expect(bookmarkForRequest('45', GOOGLEBOT)).toStrictEqual({
      mode: 'episode',
      episode: 45,
    })
    expect(isRevealed(LATE, bookmarkForRequest('45', GOOGLEBOT))).toBe(false)
  })

  it('falls back to the crawler when the cookie is one the parser rejects', () => {
    expect(isRevealed(LATE, bookmarkForRequest('99999', GOOGLEBOT))).toBe(true)
  })
})
