/**
 * Security headers attached to every server-rendered HTML document.
 *
 * They live in the app rather than in `netlify.toml` because Netlify does not
 * apply `netlify.toml` headers to responses produced by a function, and every
 * document here is rendered by the SSR function. The root route returns this
 * object from its `headers` option, and TanStack Start merges it into the
 * response after the default `Content-Type`, so route headers win.
 *
 * `Content-Type` and `Cache-Control` are deliberately absent: the former is
 * owned by Start, and an SSR document must not be cached by the browser.
 */
export const securityHeaders: Readonly<Record<string, string>> = {
  // `script-src` needs 'unsafe-inline': Start emits an inline hydration script
  // with no nonce. `style-src` needs it for inline styles emitted by React.
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline'",
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
