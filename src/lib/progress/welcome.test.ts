import { describe, expect, it } from 'vitest'

import { dismissWelcome, markWelcome, welcomeOwed } from './welcome'

describe('the one-time welcome', () => {
  it('is owed after it is marked, and not after it is dismissed', () => {
    expect(welcomeOwed()).toBe(false)

    markWelcome()

    expect(welcomeOwed()).toBe(true)
    expect(sessionStorage).toHaveLength(0)

    dismissWelcome()

    expect(welcomeOwed()).toBe(false)
  })
})
