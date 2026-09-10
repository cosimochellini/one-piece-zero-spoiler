// Registers the jest-dom matchers on Vitest's `expect` and augments the
// matcher types via `declare module 'vitest'`.
import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'

// `globals: true` already enables RTL auto-cleanup. Doing it explicitly is
// idempotent and keeps the suite independent of that detection.
afterEach(() => {
  cleanup()
})
