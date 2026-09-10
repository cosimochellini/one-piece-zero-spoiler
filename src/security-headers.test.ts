import { securityHeaders } from './security-headers'

describe('securityHeaders', () => {
  it('gives every header a non-empty value', () => {
    for (const [name, value] of Object.entries(securityHeaders)) {
      expect(value, name).not.toBe('')
    }
  })

  it('locks down the default CSP fetch directives', () => {
    const csp = securityHeaders['Content-Security-Policy']

    expect(csp).toContain("default-src 'self'")
    expect(csp).toContain("object-src 'none'")
    expect(csp).toContain("frame-ancestors 'none'")
    expect(csp).toContain("base-uri 'self'")
  })

  it('allows the inline hydration script Start emits', () => {
    expect(securityHeaders['Content-Security-Policy']).toContain(
      "script-src 'self' 'unsafe-inline'",
    )
  })

  it('leaves Content-Type and Cache-Control to the framework', () => {
    expect(securityHeaders).not.toHaveProperty('Content-Type')
    expect(securityHeaders).not.toHaveProperty('Cache-Control')
  })
})
