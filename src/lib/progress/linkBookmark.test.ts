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

/** Where the meta refresh sends the reader, with the attribute unescaped. */
async function target(response: Response | undefined): Promise<string> {
  const body = (await response?.text()) ?? ''
  return (/url=(?<to>[^"]*)"/u.exec(body)?.groups?.['to'] ?? '').replaceAll(
    '&amp;',
    '&',
  )
}

describe('the redirect a link answers with', () => {
  it('sets the cookie and drops the link from the address', async () => {
    const response = visit('/?ep=650')

    expect(response?.status).toBe(200)
    await expect(target(response)).resolves.toBe('/')
    expect(response?.headers.get('Set-Cookie')).toBe(
      'opzs_ep=650; Path=/; SameSite=Lax; Max-Age=31536000',
    )
    expect(response?.headers.get('Cache-Control')).toBe('no-store')
  })

  it('sends no Location, which Netlify would append the query to (#492)', () => {
    expect(visit('/en?ch=1044')?.headers.has('Location')).toBe(false)
  })

  it('keeps the path and every other parameter', async () => {
    const response = visit('/it/characters?x=1&s=2&ep=3&y=2')

    await expect(target(response)).resolves.toBe('/it/characters?x=1&y=2')
    expect(response?.headers.get('Set-Cookie')).toMatch(/^opzs_ep=s2e3;/u)
  })

  it('writes the chapter form', () => {
    expect(visit('/en?ch=1044')?.headers.get('Set-Cookie')).toMatch(
      /^opzs_ep=c1044;/u,
    )
  })

  it('drops an invalid link without touching the bookmark', async () => {
    const response = visit('/en?ep=9999')

    await expect(target(response)).resolves.toBe('/en')
    expect(response?.headers.has('Set-Cookie')).toBe(false)
  })

  it('never sends the reader to another host', async () => {
    await expect(target(visit('//evil.example/x?ep=650'))).resolves.toBe(
      '/evil.example/x',
    )
    await expect(
      target(visit(String.raw`/\evil.example/x?ep=650`)),
    ).resolves.toBe('/evil.example/x')
  })

  it('answers HEAD like GET', () => {
    expect(visit('/?ep=650', 'HEAD')?.headers.has('Set-Cookie')).toBe(true)
  })

  it('leaves alone a request with no link, a server function and a POST', () => {
    expect(visit('/en?x=1')).toBeUndefined()
    expect(visit('/_serverFn/abc?ep=650')).toBeUndefined()
    expect(visit('/?ep=650', 'POST')).toBeUndefined()
  })
})
