// @vitest-environment node
//
// The suite-wide environment is jsdom for the React components. This module is
// plain Node, so a DOM here would only cost startup time.
//
// `describe` / `it` / `expect` are imported rather than taken from
// `test.globals`: this file is linted as plain JavaScript, where ESLint's
// `no-undef` has no TypeScript program to learn the Vitest globals from.
import { spawnSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'

import { describe, expect, it } from 'vitest'

import {
  MAX_TITLE_LENGTH,
  TYPE_BUMPS,
  validatePrTitle,
} from './validate-pr-title.mjs'

describe('validatePrTitle', () => {
  it.each(Object.entries(TYPE_BUMPS))(
    'accepts `%s` and maps it to a %s release',
    (type, release) => {
      expect(validatePrTitle(`${type}: do the thing`)).toEqual({
        ok: true,
        type,
        breaking: false,
        release,
      })
    },
  )

  it('accepts a scope', () => {
    expect(validatePrTitle('fix(spoiler): keep the badge collapsed')).toEqual({
      ok: true,
      type: 'fix',
      breaking: false,
      release: 'patch',
    })
  })

  it('accepts a scope with dots, dashes and digits', () => {
    expect(validatePrTitle('ci(gh-actions.v2): pin the runner')).toMatchObject({
      ok: true,
      release: 'patch',
    })
  })

  it('promotes any type to major when the breaking marker is present', () => {
    expect(validatePrTitle('chore!: drop Node 22')).toEqual({
      ok: true,
      type: 'chore',
      breaking: true,
      release: 'major',
    })
  })

  it('promotes a scoped feat to major when the breaking marker is present', () => {
    expect(validatePrTitle('feat(api)!: rename the chapter field')).toEqual({
      ok: true,
      type: 'feat',
      breaking: true,
      release: 'major',
    })
  })

  it('accepts the `(#12)` suffix GitHub appends on squash', () => {
    expect(validatePrTitle('feat: add a chapter filter (#12)')).toMatchObject({
      ok: true,
      release: 'minor',
    })
  })

  it('accepts a title exactly at the length limit', () => {
    const subject = 'a'.repeat(MAX_TITLE_LENGTH - 'feat: '.length)

    expect(validatePrTitle(`feat: ${subject}`)).toMatchObject({ ok: true })
  })

  it.each([
    ['no type at all', 'add stuff'],
    ['an unknown type', 'wip: still working'],
    ['a type that only prefixes a real one', 'feature: add stuff'],
    ['no colon', 'feat add stuff'],
    ['no space after the colon', 'feat:add stuff'],
    ['an empty subject', 'feat: '],
    ['a whitespace-only subject', 'feat:    '],
    ['an uppercase type', 'Feat: add stuff'],
    ['an empty scope', 'feat(): add stuff'],
    ['an uppercase scope', 'feat(API): add stuff'],
    ['a mixed-case scope', 'feat(fooBar): add stuff'],
    ['a doubled breaking marker', 'feat!!: add stuff'],
    ['nested scopes', 'fix(a)(b): add stuff'],
    ['leading whitespace', ' feat: add stuff'],
    ['an empty title', ''],
    ['a whitespace-only title', '   '],
  ])('rejects %s', (_label, title) => {
    expect(validatePrTitle(title)).toMatchObject({ ok: false })
  })

  it('rejects a title over the length limit', () => {
    const subject = 'a'.repeat(MAX_TITLE_LENGTH)
    const result = validatePrTitle(`feat: ${subject}`)

    expect(result).toMatchObject({ ok: false })
    expect(result.reason).toContain(String(MAX_TITLE_LENGTH))
  })

  it('rejects a non-string title', () => {
    expect(validatePrTitle(undefined)).toMatchObject({ ok: false })
  })

  it('maps every type exactly as .releaserc.json does', () => {
    // A type accepted here but absent from the release rules would merge
    // cleanly and then release nothing, which is the one failure mode this
    // gate exists to prevent. Assert the two stay in lockstep.
    const config = JSON.parse(
      readFileSync(
        path.join(import.meta.dirname, '..', '.releaserc.json'),
        'utf8',
      ),
    )

    const commitAnalyzer = config.plugins.find(
      (plugin) =>
        Array.isArray(plugin) &&
        plugin[0] === '@semantic-release/commit-analyzer',
    )
    const rules = commitAnalyzer[1].releaseRules

    const configuredBumps = Object.fromEntries(
      rules
        .filter((rule) => typeof rule.type === 'string')
        .map((rule) => [rule.type, rule.release]),
    )

    expect(configuredBumps).toEqual(TYPE_BUMPS)

    // `revert` needs both rules. `{ revert: true }` matches the body that
    // `git revert` generates ("This reverts commit <sha>."), which a squashed
    // pull request never carries because the squash body is blank; the
    // `{ type: 'revert' }` rule is what actually matches a `revert:` subject.
    expect(rules).toContainEqual({ revert: true, release: TYPE_BUMPS.revert })

    // The breaking rule must come first, or `feat!:` would match the later
    // `{ type: 'feat' }` rule and release a minor instead of a major.
    expect(rules[0]).toEqual({ breaking: true, release: 'major' })
  })
})

// The workflow runs the file, it does not import it. `main()` is skipped
// entirely under `import`, so the exit codes CI reacts to are only reachable
// through a real child process.
describe('the command line entry point', () => {
  const SCRIPT = path.join(import.meta.dirname, 'validate-pr-title.mjs')

  /** @param {Record<string, string>} env */
  const run = (env) =>
    spawnSync(process.execPath, [SCRIPT], {
      encoding: 'utf8',
      // A bare env: inheriting the real one would leak a PR_TITLE set by the
      // shell into the "missing variable" case.
      env,
    })

  it('exits 0 and reports the release for a valid title', () => {
    const result = run({ PR_TITLE: 'feat: add a chapter filter' })

    expect(result.status).toBe(0)
    expect(result.stdout).toContain('PASSED')
    expect(result.stdout).toContain('release: minor')
  })

  it('exits 1 and prints the accepted types for an invalid title', () => {
    const result = run({ PR_TITLE: 'add stuff' })

    expect(result.status).toBe(1)
    expect(result.stderr).toContain('FAILED')
    expect(result.stderr).toContain('feat')
    expect(result.stderr).toContain('minor')
  })

  it('exits 2 when PR_TITLE is not set at all', () => {
    const result = run({})

    expect(result.status).toBe(2)
    expect(result.stderr).toContain('PR_TITLE is not set')
  })

  it('exits 1 rather than 2 when PR_TITLE is set but empty', () => {
    // An unset variable means the workflow is wired wrong; an empty one means
    // the pull request has no title. They must not collapse into one code.
    const result = run({ PR_TITLE: '' })

    expect(result.status).toBe(1)
  })
})
