import { describe, expect, it } from 'vitest'

import { absoluteUrl, normaliseOrigin, SITE_ORIGIN } from './site'

describe('the site origin', () => {
  it('carries no trailing slash, so a path can be appended to it', () => {
    expect(SITE_ORIGIN.endsWith('/')).toBe(false)
  })

  it('is absolute and https', () => {
    expect(SITE_ORIGIN.startsWith('https://')).toBe(true)
  })
})

describe('a configured origin', () => {
  it('keeps an origin that is already clean', () => {
    expect(normaliseOrigin('https://example.test')).toBe('https://example.test')
  })

  it('takes off a trailing slash, however many were written', () => {
    expect(normaliseOrigin('https://example.test/')).toBe(
      'https://example.test',
    )
    expect(normaliseOrigin('https://example.test///')).toBe(
      'https://example.test',
    )
  })

  it('falls back to the published address when nothing is configured', () => {
    expect(normaliseOrigin(undefined)).toBe(normaliseOrigin(''))
    expect(normaliseOrigin(undefined)).toContain('https://')
  })
})

describe('an absolute URL', () => {
  it('joins the origin and the path without doubling the slash', () => {
    expect(absoluteUrl('/en/characters')).toBe(`${SITE_ORIGIN}/en/characters`)
  })

  it('leaves a record slug exactly as the router spells it', () => {
    expect(absoluteUrl('/it/fruits/gum-gum')).toContain('/it/fruits/gum-gum')
  })
})
