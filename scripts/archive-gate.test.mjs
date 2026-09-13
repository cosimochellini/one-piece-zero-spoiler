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

import { canaryFrom, judge, MAX_CLIENT_BYTES } from './archive-gate.mjs'

const repoRoot = path.resolve(import.meta.dirname, '..')

/**
 * A built script, as the gate reads one.
 * @param {string} name The file's name.
 * @param {string} text Its contents.
 * @param {number} [bytes] Its size, where it differs from the text's length.
 * @returns {{bytes: number, name: string, text: string}} The script.
 */
function chunk(name, text, bytes = text.length) {
  return { name, bytes, text }
}

describe('the canary the archive gate looks for', () => {
  it('is a long sentence from the archive, not a key', () => {
    const phrase = canaryFrom(
      readFileSync(path.join(repoRoot, 'src/data/records/egghead.ts'), 'utf8'),
    )

    expect(phrase).not.toBeNull()
    expect(phrase.length).toBeGreaterThan(40)
    // A key such as `revealedAtEpisode` legitimately survives on a covered
    // record, so a gate that looked for one would fail on a clean build.
    expect(phrase).not.toMatch(/^[A-Za-z]+$/u)
  })

  it('takes the longest sentence, so a short shared phrase cannot be it', () => {
    const source = [
      "  name: { it: 'x', en: 'Short' },",
      `  summary: { it: 'y', en: '${'A'.repeat(80)}' },`,
      `  log: { it: 'z', en: '${'B'.repeat(50)}' },`,
    ].join('\n')

    expect(canaryFrom(source)).toBe('A'.repeat(80))
  })

  it('unescapes an apostrophe, so the phrase is what the chunk would hold', () => {
    const source = String.raw`en: 'a sentence with an apostrophe in it that is long enough\'s tail'`

    expect(canaryFrom(source)).toContain("enough's tail")
  })

  it('is nothing when a module has no prose to offer', () => {
    expect(canaryFrom("export const x = { en: 'short' }")).toBeNull()
  })
})

describe('the verdict the gate reaches', () => {
  const clean = [chunk('index.js', 'const a=1'), chunk('page.js', 'const b=2')]
  const canaries = [
    { file: 'src/data/records/wano.ts', phrase: 'a long sentence' },
  ]

  it('passes a build with no archive prose and room to spare', () => {
    const verdict = judge(clean, canaries)

    expect(verdict.ok).toBe(true)
    expect(verdict.found).toStrictEqual([])
    expect(verdict.unreadable).toStrictEqual([])
    expect(verdict.total).toBe(18)
  })

  it('names the chunk a canary turns up in, and fails', () => {
    const leaky = [...clean, chunk('leak.js', 'x="a long sentence"')]
    const verdict = judge(leaky, canaries)

    expect(verdict.ok).toBe(false)
    expect(verdict.found).toStrictEqual([
      {
        chunk: 'leak.js',
        file: 'src/data/records/wano.ts',
        phrase: 'a long sentence',
      },
    ])
  })

  it('fails a build that is over the ceiling even with no prose in it', () => {
    // The canaries only catch what they happen to name; the budget is what
    // catches a whole module coming back through a path they miss.
    const heavy = [chunk('index.js', 'x', MAX_CLIENT_BYTES + 1)]

    expect(judge(heavy, canaries).ok).toBe(false)
    expect(judge([chunk('index.js', 'x', MAX_CLIENT_BYTES)], canaries).ok).toBe(
      true,
    )
  })

  it('refuses to vouch for anything when a canary could not be read', () => {
    const verdict = judge(clean, [{ file: 'src/data/places.ts', phrase: null }])

    expect(verdict.unreadable).toStrictEqual(['src/data/places.ts'])
  })
})

describe('the byte ceiling', () => {
  it('leaves headroom but not a saga’s worth', () => {
    // React itself is ~318 KB of the current ~449 KB. The archive alone was
    // 599 KB of the 1,049 KB build this replaced, so a ceiling that let it
    // back in would vouch for nothing.
    expect(MAX_CLIENT_BYTES).toBeGreaterThan(449_410)
    expect(MAX_CLIENT_BYTES).toBeLessThan(449_410 + 200_000)
  })
})
