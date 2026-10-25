// @vitest-environment node
import console from 'node:console'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { checkClientBudget, judgeClientBudget } from './client-budget.mjs'

const temporary = []
afterEach(() => {
  for (const directory of temporary.splice(0)) {
    rmSync(directory, { recursive: true, force: true })
  }
})

/**
 * A pair of client builds with a known raw byte difference.
 * @returns {{base: string, head: string}} The client directories.
 */
function builds() {
  const directory = mkdtempSync(path.join(os.tmpdir(), 'client-budget-'))
  temporary.push(directory)
  const base = path.join(directory, 'base')
  const head = path.join(directory, 'head')
  for (const build of [base, head]) {
    mkdirSync(path.join(build, 'assets'), { recursive: true })
    writeFileSync(path.join(build, 'assets', 'shared.js'), 'abc')
    writeFileSync(path.join(build, 'assets', 'style.css'), 'x'.repeat(9000))
  }
  writeFileSync(path.join(head, 'assets', 'feature.js'), 'é'.repeat(1025))
  return { base, head }
}

describe('client growth relative to the PR base', () => {
  it('allows reductions, equal builds and growth through the budget boundary', () => {
    for (const head of [9000, 10_000, 10_300, 12_048]) {
      expect(judgeClientBudget(10_000, head, '').ok).toBe(true)
    }
    expect(judgeClientBudget(10_000, 12_049, '').ok).toBe(false)
  })

  it('accepts larger growth only with a reason on its own line', () => {
    for (const body of [
      'client-budget: new feature',
      'Summary\r\nclient-budget: new feature\r\n',
    ]) {
      expect(judgeClientBudget(1, 9000, body).ok).toBe(true)
    }
    for (const body of [
      '',
      'client-budget:',
      'client-budget: \t',
      'client-budget:\nreason',
      'Please add client-budget: reason',
    ]) {
      expect(judgeClientBudget(1, 9000, body).ok).toBe(false)
    }
  })

  it('reports both totals and the raw-byte delta, ignoring non-JavaScript assets', () => {
    const { base, head } = builds()
    const log = vi.spyOn(console, 'log').mockReturnValue()
    const error = vi.spyOn(console, 'error').mockReturnValue()
    expect(checkClientBudget(base, head, '')).toBe(1)
    expect(log).toHaveBeenCalledWith(
      'client-budget: base 3 bytes, head 2053 bytes, difference 2050 bytes (budget 2048 bytes).',
    )
    expect(error).toHaveBeenCalledWith(
      expect.stringContaining('client-budget: <reason>'),
    )
    expect(
      checkClientBudget(base, head, 'client-budget: two-byte characters'),
    ).toBe(0)
    expect(log).toHaveBeenCalledWith(
      expect.stringContaining('explicitly accepted'),
    )
  })

  it('fails closed when either build is missing or empty', () => {
    const { base, head } = builds()
    vi.spyOn(console, 'error').mockReturnValue()
    rmSync(path.join(base, 'assets', 'shared.js'))
    expect(checkClientBudget(base, head, 'client-budget: reason')).toBe(2)
    expect(checkClientBudget(head, base, '')).toBe(2)
    expect(checkClientBudget(path.join(base, 'missing'), head, '')).toBe(2)
  })
})
