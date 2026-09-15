import { describe, expect, it } from 'vitest'

import { absoluteUrl, SITE_ORIGIN } from './site'

describe('the site origin', () => {
  it('carries no trailing slash, so a path can be appended to it', () => {
    expect(SITE_ORIGIN.endsWith('/')).toBe(false)
  })

  it('is absolute and https', () => {
    expect(SITE_ORIGIN.startsWith('https://')).toBe(true)
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
