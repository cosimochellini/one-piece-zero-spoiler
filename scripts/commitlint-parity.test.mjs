// @vitest-environment node
//
// The suite-wide environment is jsdom for the React components. This module is
// plain Node, so a DOM here would only cost startup time.
import { spawnSync } from 'node:child_process'
import path from 'node:path'
import process from 'node:process'
import { describe, expect, it } from 'vitest'

import config from '../commitlint.config.mjs'
import { MAX_TITLE_LENGTH, TYPE_BUMPS } from './validate-pr-title.mjs'

const repositoryRoot = path.resolve(import.meta.dirname, '..')
const commitlint = path.join(
  repositoryRoot,
  'node_modules',
  '.bin',
  'commitlint',
)

/**
 * Runs the declared commitlint binary over one message, the way the commit-msg
 * hook does. The binary is spawned rather than the API imported, because
 * `@commitlint/load` is a transitive dependency this project does not declare.
 * @param {string} message - The commit message to lint.
 * @returns {number} The binary's exit status: 0 accepted, 1 rejected.
 */
function lint(message) {
  const child = spawnSync(commitlint, [], {
    cwd: repositoryRoot,
    encoding: 'utf8',
    env: { ...process.env, LEFTHOOK: '0' },
    input: message,
  })
  return child.status ?? 1
}

describe('the commitlint configuration', () => {
  it('accepts exactly the types that produce a release', () => {
    expect(config.rules['type-enum']).toStrictEqual([
      2,
      'always',
      Object.keys(TYPE_BUMPS),
    ])
  })

  it('caps the header where the pull request title gate caps it', () => {
    expect(config.rules['header-max-length']).toStrictEqual([
      2,
      'always',
      MAX_TITLE_LENGTH,
    ])
  })
})

// Each case starts the commitlint binary in a child process. That takes about
// 250ms with no load and took up to 7.7s with several checks running at once
// (#285), so the 5s default is too short.
describe('the commitlint binary', { timeout: 20_000 }, () => {
  it.each(Object.keys(TYPE_BUMPS))('accepts `%s: a subject`', (type) => {
    expect(lint(`${type}: a subject`)).toBe(0)
  })

  it.each([
    ['a type no release rule knows', 'wip: still working'],
    ['a sentence-case subject', 'feat: Add a filter'],
    ['a header past the limit', `feat: ${'a'.repeat(MAX_TITLE_LENGTH)}`],
    ['an upper-case scope', 'feat(Spoiler): add a filter'],
  ])('rejects %s', (_label, message) => {
    expect(lint(message)).toBe(1)
  })
})
