import { describe, expect, it } from 'vitest'

import { parseCookieHeader } from '~/lib/cookies'

import { linkRedirect } from './linkBookmark'
import { migrateBookmark, withMigratedCookies } from './migrateBookmark'
import { bookmarkFromCookies } from './requestBookmark'
import { ONE_PIECE_BOOKMARK } from './series'

function request(cookie: string, path = '/en'): Request {
  return new Request(`https://example.com${path}`, { headers: { cookie } })
}

describe('legacy One Piece bookmark migration', () => {
  it('migrates before this request is rendered and expires the old cookie', () => {
    const asked = request('opzs_ep=650; opzs_lang=it')
    const cookies = migrateBookmark(asked)
    const jar = parseCookieHeader(asked.headers.get('cookie'))

    expect(bookmarkFromCookies(jar, ONE_PIECE_BOOKMARK)).toStrictEqual({
      mode: 'episode',
      episode: 650,
    })
    expect(jar.get('opzs_lang')).toBe('it')
    expect(jar.has('opzs_ep')).toBe(false)
    expect(cookies).toStrictEqual([
      'zs_one-piece=650; Path=/; SameSite=Lax; Max-Age=31536000',
      'opzs_ep=; Path=/; SameSite=Lax; Max-Age=0',
    ])
    expect(migrateBookmark(asked)).toStrictEqual([])
  })

  it('preserves seasons and chapters and keeps trials session-only', () => {
    for (const value of ['s2e3', 'c1044']) {
      expect(migrateBookmark(request(`opzs_ep=${value}`))[0]).toBe(
        `zs_one-piece=${value}; Path=/; SameSite=Lax; Max-Age=31536000`,
      )
    }

    expect(migrateBookmark(request('opzs_try=c40'))).toStrictEqual([
      'zs_one-piece_try=c40; Path=/; SameSite=Lax',
      'opzs_try=; Path=/; SameSite=Lax; Max-Age=0',
    ])
  })

  it('lets any existing new value win, even an empty or invalid one', () => {
    for (const value of ['45', '', '99999']) {
      const asked = request(`opzs_ep=650; zs_one-piece=${value}`)

      expect(migrateBookmark(asked)).toStrictEqual([
        'opzs_ep=; Path=/; SameSite=Lax; Max-Age=0',
      ])
      expect(
        parseCookieHeader(asked.headers.get('cookie')).get('zs_one-piece'),
      ).toBe(value)
    }
  })

  it('expires malformed legacy values without promoting them', () => {
    expect(
      migrateBookmark(request('opzs_ep=%broken; opzs_try=650')),
    ).toStrictEqual([
      'opzs_ep=; Path=/; SameSite=Lax; Max-Age=0',
      'opzs_try=; Path=/; SameSite=Lax; Max-Age=0',
    ])
  })

  it('migrates saved and trial cookies independently, with saved progress winning', () => {
    const asked = request('opzs_ep=650; opzs_try=12; zs_other=3')

    expect(migrateBookmark(asked)).toHaveLength(4)

    const jar = parseCookieHeader(asked.headers.get('cookie'))

    expect(jar.get('zs_other')).toBe('3')
    expect(jar.get('zs_one-piece_try')).toBe('12')
    expect(bookmarkFromCookies(jar, ONE_PIECE_BOOKMARK)).toStrictEqual({
      mode: 'episode',
      episode: 650,
    })
  })

  it('keeps a valid shared link ahead of a migrated bookmark', () => {
    const asked = request('opzs_ep=650; opzs_try=12', '/en?ep=45')
    const cookies = migrateBookmark(asked)
    const response = withMigratedCookies(
      linkRedirect(asked) ?? new Response(),
      cookies,
    )

    expect(response.headers.getSetCookie()).toStrictEqual([
      'zs_one-piece=45; Path=/; SameSite=Lax; Max-Age=31536000',
      'opzs_ep=; Path=/; SameSite=Lax; Max-Age=0',
      'zs_one-piece_try=12; Path=/; SameSite=Lax',
      'opzs_try=; Path=/; SameSite=Lax; Max-Age=0',
    ])
  })

  it('preserves normal response headers, status and body and prevents caching migration', async () => {
    const response = new Response('page', {
      status: 201,
      headers: { 'X-Test': 'kept' },
    })
    const migrated = withMigratedCookies(
      response,
      migrateBookmark(request('opzs_ep=650')),
    )

    expect(migrated.status).toBe(201)
    expect(migrated.headers.get('X-Test')).toBe('kept')
    expect(migrated.headers.get('Cache-Control')).toBe('no-store')
    await expect(migrated.text()).resolves.toBe('page')
  })

  it('leaves responses without legacy cookies alone', () => {
    const response = new Response('page')

    const cookies = migrateBookmark(request('zs_one-piece=45'))

    expect(withMigratedCookies(response, cookies)).toBe(response)
  })
})
