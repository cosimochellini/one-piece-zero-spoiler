/**
 * Security headers attached to every server-rendered HTML document.
 *
 * They live in the app rather than in `netlify.toml` because Netlify does not
 * apply `netlify.toml` headers to responses produced by a function, and every
 * document here is rendered by the SSR function. The root route returns this
 * from its `headers` option, and TanStack Start merges the result into the
 * response after the default `Content-Type`, so route headers win.
 *
 * `Content-Type` and `Cache-Control` are deliberately absent: the former is
 * owned by Start, and an SSR document must not be cached by the browser.
 */
export function createSecurityHeaders(
  nonce: string | undefined,
): Readonly<Record<string, string>> {
  return {
    'Content-Security-Policy': [
      "default-src 'self'",
      // The nonce is generated per request in src/router.tsx and applied by
      // `<Scripts>` to every script tag it renders, inline ones included. CSP
      // Level 3 browsers enforce the nonce and ignore 'unsafe-inline'; the
      // keyword is kept only so CSP Level 2 browsers, which do not understand
      // nonces, still load the page instead of blocking hydration.
      scriptSrc(nonce),
      // No stylesheet exists yet. The keyword is kept because Vite injects CSS
      // as an inline <style> element in dev, and React's `style` prop needs it
      // the moment a component uses one.
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data:",
      "font-src 'self' data:",
      "connect-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
    ].join('; '),
    // Superseded by `frame-ancestors` in modern browsers, kept for older ones.
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    // Netlify serves the site over HTTPS only.
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  }
}

function scriptSrc(nonce: string | undefined): string {
  if (nonce === undefined) {
    return "script-src 'self' 'unsafe-inline'"
  }

  return `script-src 'self' 'nonce-${nonce}' 'unsafe-inline'`
}
