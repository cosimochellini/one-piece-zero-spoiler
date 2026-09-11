// @vitest-environment node
//
// The suite-wide environment is jsdom for the React components. This module is
// plain Node, so a DOM here would only cost startup time.
//
// `describe` / `it` / `expect` are imported rather than taken from
// `test.globals`: this file is linted as plain JavaScript, where ESLint's
// `no-undef` has no TypeScript program to learn the Vitest globals from.
import { readFileSync } from 'node:fs'
import path from 'node:path'

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

    // `revert` is expressed as `{ revert: true }` in the config, because a
    // revert is detected from the commit body, not from the subject type. The
    // script still has to accept `revert:` as a subject, so it is compared
    // against that rule instead of against a `type` rule.
    const { revert: revertBump, ...typeBumps } = TYPE_BUMPS

    expect(configuredBumps).toEqual(typeBumps)
    expect(rules).toContainEqual({ revert: true, release: revertBump })

    // The breaking rule must come first, or `feat!:` would match the later
    // `{ type: 'feat' }` rule and release a minor instead of a major.
    expect(rules[0]).toEqual({ breaking: true, release: 'major' })
  })
})
