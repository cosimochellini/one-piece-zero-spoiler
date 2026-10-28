import { describe, expect, it } from 'vitest'

import { bookmarkFromSearch, linkRedirect } from './linkBookmark'
import { ONE_PIECE_BOOKMARK, seriesSlugFromPath } from './series'

const SITE = 'https://onepiecezerospoiler.com'

function search(query: string): URLSearchParams {
  return new URLSearchParams(query)
}

function visit(path: string, method = 'GET'): Response | undefined {
  const url = new URL(`${SITE}${path}`)
  const series =
    seriesSlugFromPath(url.pathname) === ONE_PIECE_BOOKMARK.slug ?
      ONE_PIECE_BOOKMARK
    : null
  return linkRedirect(new Request(url, { method }), series)
}

describe('the bookmark a link names', () => {
  it('reads each of the three forms', () => {
    expect(
      bookmarkFromSearch(search('ep=650'), ONE_PIECE_BOOKMARK),
    ).toStrictEqual({ mode: 'episode', episode: 650 })
    expect(
      bookmarkFromSearch(search('s=2&ep=3'), ONE_PIECE_BOOKMARK),
    ).toStrictEqual({ mode: 'season', season: 2, episode: 3 })
    expect(
      bookmarkFromSearch(search('ch=1044'), ONE_PIECE_BOOKMARK),
    ).toStrictEqual({ mode: 'chapter', chapter: 1044 })
  })

  it('fails closed outside the ranges the dialog accepts', () => {
    for (const query of [
      'ep=0',
      'ep=1301',
      's=2&ep=17',
      's=0&ep=1',
      'ch=1301',
    ]) {
      expect(bookmarkFromSearch(search(query), ONE_PIECE_BOOKMARK)).toBeNull()
    }
  })

  it('fails closed on anything but plain digits', () => {
    for (const query of [
      'ep=abc',
      'ep=s2e3',
      'ep=c5',
      'ep=+5',
      'ep=',
      'ep= 650',
      'ch=c5',
      's=2e3&ep=4',
    ]) {
      expect(bookmarkFromSearch(search(query), ONE_PIECE_BOOKMARK)).toBeNull()
    }
  })

  it('fails closed on an ambiguous link', () => {
    for (const query of [
      's=5',
      'ch=1044&ep=650',
      'ch=1044&s=2',
      'ep=1&ep=2',
      'ch=1&ch=2',
    ]) {
      expect(bookmarkFromSearch(search(query), ONE_PIECE_BOOKMARK)).toBeNull()
    }
  })
})

/** Where the redirect sends the reader. */
function target(response: Response | undefined): null | string {
  return response?.headers.get('Location') ?? null
}

describe('the redirect a link answers with', () => {
  it('sets the cookie and drops the link from the address', () => {
    const response = visit('/one-piece/en?ep=650')

    expect(response?.status).toBe(302)
    expect(target(response)).toBe('/one-piece/en')
    expect(response?.headers.get('Set-Cookie')).toBe(
      'zs_one-piece=650; Path=/; SameSite=Lax; Max-Age=31536000',
    )
    expect(response?.headers.get('Cache-Control')).toBe('no-store')
  })

  it('keeps the path and every other parameter', () => {
    const response = visit('/one-piece/it/characters?x=1&s=2&ep=3&y=2')

    expect(target(response)).toBe('/one-piece/it/characters?x=1&y=2')
    expect(response?.headers.get('Set-Cookie')).toMatch(/^zs_one-piece=s2e3;/u)
  })

  it('writes the chapter form', () => {
    expect(visit('/one-piece/en?ch=1044')?.headers.get('Set-Cookie')).toMatch(
      /^zs_one-piece=c1044;/u,
    )
  })

  it('drops an invalid link without touching the bookmark', () => {
    const response = visit('/one-piece/en?ep=9999')

    expect(target(response)).toBe('/one-piece/en')
    expect(response?.headers.has('Set-Cookie')).toBe(false)
  })

  it('never sends the reader to another host', () => {
    expect(target(visit('//evil.example/x?ep=650'))).toBe('/evil.example/x')
    expect(target(visit(String.raw`/\evil.example/x?ep=650`))).toBe(
      '/evil.example/x',
    )
  })

  it('answers HEAD like GET', () => {
    expect(
      visit('/one-piece/en?ep=650', 'HEAD')?.headers.has('Set-Cookie'),
    ).toBe(true)
  })

  it('drops parameters on non-series pages without creating a bookmark', () => {
    for (const path of [
      '/',
      '/en/legal',
      '/it/privacy',
      '/hunter-x-hunter/en',
      '/en/unknown',
    ]) {
      const response = visit(`${path}?ep=650&x=1`)

      expect(response?.headers.has('Set-Cookie')).toBe(false)
      expect(target(response)).toBe(`${path}?x=1`)
    }
  })

  it('selects the series from a future series-first content path', () => {
    expect(
      visit('/one-piece/en/characters?ep=650')?.headers.get('Set-Cookie'),
    ).toMatch(/^zs_one-piece=650;/u)
  })

  it('leaves alone a request with no link, a server function and a POST', () => {
    expect(visit('/one-piece/en?x=1')).toBeUndefined()
    expect(visit('/_serverFn/abc?ep=650')).toBeUndefined()
    expect(visit('/?ep=650', 'POST')).toBeUndefined()
  })
})
