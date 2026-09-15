import { describe, expect, it } from 'vitest'

import { SERVER_FN_BASE } from '~/lib/endpoints'

import { robotsTxt } from './robots'

describe('robots.txt', () => {
  it('opens the site to every crawler', () => {
    const body = robotsTxt('https://example.test')

    expect(body).toContain('User-agent: *')
    expect(body).toContain('Allow: /')
  })

  it('keeps crawlers off the server functions, by the one constant that names them', () => {
    expect(robotsTxt('https://example.test')).toContain(
      `Disallow: ${SERVER_FN_BASE}/`,
    )
  })

  it('points at the sitemap absolutely, as the format requires', () => {
    expect(robotsTxt('https://example.test')).toContain(
      'Sitemap: https://example.test/sitemap.xml',
    )
  })

  it('ends with a newline, because a text file does', () => {
    expect(robotsTxt('https://example.test').endsWith('\n')).toBe(true)
  })
})
