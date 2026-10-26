import { describe, expect, it } from 'vitest'

import { rootRedirect } from './rootRedirect'

const ORIGIN = 'https://example.test'

function visit(
  path: string,
  {
    country,
    headers = {},
    method = 'GET',
  }: {
    country?: string
    headers?: Record<string, string>
    method?: string
  } = {},
): Response | undefined {
  const request = new Request(`${ORIGIN}${path}`, { headers, method })
  // What the Cloudflare Workers runtime attaches; absent everywhere else.
  return rootRedirect(
    country === undefined ? request : (
      Object.assign(request, { cf: { country } })
    ),
  )
}

describe('the redirect from the bare root', () => {
  it('sends a visitor from an English-speaking country to /en', () => {
    const response = visit('/', {
      country: 'GB',
      headers: { 'accept-language': 'it' },
    })

    expect(response?.status).toBe(302)
    expect(response?.headers.get('Location')).toBe('/en')
    expect(response?.headers.get('Cache-Control')).toBe('private, no-store')
  })

  it('falls back to Accept-Language without a country', () => {
    expect(
      visit('/', { headers: { 'accept-language': 'en-GB' } })?.headers.get(
        'Location',
      ),
    ).toBe('/en')
    expect(
      visit('/', {
        country: 'FR',
        headers: { 'accept-language': 'en' },
      })?.headers.get('Location'),
    ).toBe('/en')
    expect(visit('/')?.headers.get('Location')).toBe('/it')
  })

  it('lets the saved choice beat the country', () => {
    const response = visit('/', {
      country: 'IT',
      headers: { cookie: 'opzs_lang=en' },
    })

    expect(response?.headers.get('Location')).toBe('/en')
  })

  it('keeps the query string', () => {
    expect(visit('/?ep=650', { country: 'IT' })?.headers.get('Location')).toBe(
      '/it?ep=650',
    )
  })

  it('uses an empty body and answers HEAD like GET', async () => {
    await expect(visit('/')?.text()).resolves.toBe('')

    const head = visit('/', { country: 'US', method: 'HEAD' })

    expect(head?.status).toBe(302)
    expect(head?.headers.get('Location')).toBe('/en')
  })

  it.each(['/en', '/it', '/it/', '/one-piece', '/robots.txt', '/_serverFn/x'])(
    'leaves %s alone',
    (path) => {
      expect(visit(path, { country: 'GB' })).toBeUndefined()
    },
  )

  it.each(['POST', 'PUT'])('leaves %s requests alone', (method) => {
    expect(visit('/', { method })).toBeUndefined()
  })
})
