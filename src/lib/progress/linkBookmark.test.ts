import { describe, expect, it } from 'vitest'

import { bookmarkFromSearch, linkRedirect } from './linkBookmark'

const SITE = 'https://onepiecezerospoiler.com'

function search(query: string): URLSearchParams {
  return new URLSearchParams(query)
}

function visit(path: string, method = 'GET'): Response | undefined {
  return linkRedirect(new Request(`${SITE}${path}`, { method }))
}

describe('the bookmark a link names', () => {
  it('reads each of the three forms', () => {
    expect(bookmarkFromSearch(search('ep=650'))).toStrictEqual({
      mode: 'episode',
      episode: 650,
    })
    expect(bookmarkFromSearch(search('s=2&ep=3'))).toStrictEqual({
      mode: 'season',
      season: 2,
      episode: 3,
    })
    expect(bookmarkFromSearch(search('ch=1044'))).toStrictEqual({
      mode: 'chapter',
      chapter: 1044,
    })
  })

  it('fails closed outside the ranges the dialog accepts', () => {
    for (const query of [
      'ep=0',
      'ep=1301',
      's=2&ep=17',
      's=0&ep=1',
      'ch=1301',
    ]) {
      expect(bookmarkFromSearch(search(query))).toBeNull()
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
      expect(bookmarkFromSearch(search(query))).toBeNull()
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
      expect(bookmarkFromSearch(search(query))).toBeNull()
    }
  })
})

describe('the redirect a link answers with', () => {
  it('sets the cookie and drops the link from the address', () => {
    const response = visit('/?ep=650')

    expect(response?.status).toBe(302)
    expect(response?.headers.get('Location')).toBe('/')
    expect(response?.headers.get('Set-Cookie')).toBe(
      'opzs_ep=650; Path=/; SameSite=Lax; Max-Age=31536000',
    )
    expect(response?.headers.get('Cache-Control')).toBe('no-store')
  })

  it('keeps the path and every other parameter', () => {
    const response = visit('/it/characters?x=1&s=2&ep=3&y=2')

    expect(response?.headers.get('Location')).toBe('/it/characters?x=1&y=2')
    expect(response?.headers.get('Set-Cookie')).toMatch(/^opzs_ep=s2e3;/u)
  })

  it('writes the chapter form', () => {
    expect(visit('/en?ch=1044')?.headers.get('Set-Cookie')).toMatch(
      /^opzs_ep=c1044;/u,
    )
  })

  it('drops an invalid link without touching the bookmark', () => {
    const response = visit('/en?ep=9999')

    expect(response?.status).toBe(302)
    expect(response?.headers.get('Location')).toBe('/en')
    expect(response?.headers.has('Set-Cookie')).toBe(false)
  })

  it('never redirects to another host', () => {
    expect(visit('//evil.example/x?ep=650')?.headers.get('Location')).toBe(
      '/evil.example/x',
    )
    expect(
      visit(String.raw`/\evil.example/x?ep=650`)?.headers.get('Location'),
    ).toBe('/evil.example/x')
  })

  it('answers HEAD like GET', () => {
    expect(visit('/?ep=650', 'HEAD')?.status).toBe(302)
  })

  it('leaves alone a request with no link, a server function and a POST', () => {
    expect(visit('/en?x=1')).toBeUndefined()
    expect(visit('/_serverFn/abc?ep=650')).toBeUndefined()
    expect(visit('/?ep=650', 'POST')).toBeUndefined()
  })
})
