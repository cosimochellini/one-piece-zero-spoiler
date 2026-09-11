import { createSecurityHeaders } from './security-headers'

const NONCE = 'test-nonce-value'

describe('createSecurityHeaders', () => {
  it('gives every header a non-empty value', () => {
    for (const [name, value] of Object.entries(createSecurityHeaders(NONCE))) {
      expect(value, name).not.toBe('')
    }
  })

  it('pins the CSP fetch and navigation directives', () => {
    const csp = createSecurityHeaders(NONCE)['Content-Security-Policy']

    expect(csp).toContain("default-src 'self'")
    expect(csp).toContain("style-src 'self' 'unsafe-inline'")
    expect(csp).toContain("img-src 'self' data:")
    expect(csp).toContain("font-src 'self' data:")
    expect(csp).toContain("connect-src 'self'")
    expect(csp).toContain("object-src 'none'")
    expect(csp).toContain("base-uri 'self'")
    expect(csp).toContain("form-action 'self'")
    expect(csp).toContain("frame-ancestors 'none'")
  })

  it('enforces the request nonce on scripts without unsafe-inline', () => {
    const csp = createSecurityHeaders(NONCE)['Content-Security-Policy']

    expect(csp).toContain(`script-src 'self' 'nonce-${NONCE}'`)
    expect(csp).not.toMatch(/script-src[^;]*'unsafe-inline'/)
  })

  it('falls back to unsafe-inline when no nonce is available', () => {
    expect(
      createSecurityHeaders(undefined)['Content-Security-Policy'],
    ).toContain("script-src 'self' 'unsafe-inline'")
  })

  it('pins the non-CSP header values', () => {
    expect(createSecurityHeaders(NONCE)).toMatchObject({
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    })
  })

  it('leaves Content-Type and Cache-Control to the framework', () => {
    expect(createSecurityHeaders(NONCE)).not.toHaveProperty('Content-Type')
    expect(createSecurityHeaders(NONCE)).not.toHaveProperty('Cache-Control')
  })
})
