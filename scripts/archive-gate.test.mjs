// @vitest-environment node
//
// The suite-wide environment is jsdom for the React components. This module is
// plain Node, so a DOM here would only cost startup time.
//
// `describe` / `it` / `expect` are imported rather than taken from
// `test.globals`: this file is linted as plain JavaScript, where ESLint's
// `no-undef` has no TypeScript program to learn the Vitest globals from.
import { readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'

import {
  canaryFrom,
  judge,
  MAX_CLIENT_BYTES,
  slugsFrom,
} from './archive-gate.mjs'

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

describe('the slugs the gate looks for', () => {
  it('takes the hyphenated ids a drawing module is keyed by', () => {
    const source = [
      'export const eastBlueArt = {',
      "  'monkey-d-luffy': [{ d: 'M0 0' }],",
      "  nami: [{ d: 'M0 0' }],",
      "  'roronoa-zoro': [{ d: 'M0 0' }],",
      '}',
    ].join('\n')

    // `nami` is a word. A gate that failed on a word is a gate nobody trusts.
    expect(slugsFrom(source)).toStrictEqual(['monkey-d-luffy', 'roronoa-zoro'])
  })

  it('is nothing for a module keyed by no record', () => {
    expect(slugsFrom('export type Stroke = { d: string }')).toStrictEqual([])
  })

  it('reads a slug-keyed archive table that holds no drawing either', () => {
    // `src/data/fruit-forms.ts` is a hundred and twenty name slugs and not one
    // sentence, and it sits outside the drawing directory, so neither canary
    // would see it without being told to.
    const source = [
      'export const FRUIT_FORMS = {',
      "  'gum-gum-fruit': 'paramecia',",
      "  'op-op-fruit': 'paramecia',",
      "  'flame-flame-fruit': 'logia',",
      '} satisfies Readonly<Record<string, FruitForm>>',
    ].join('\n')

    // `op-op-fruit` is eleven characters, under the length the gate trusts.
    expect(slugsFrom(source)).toStrictEqual([
      'gum-gum-fruit',
      'flame-flame-fruit',
    ])
  })

  it('covers the slug-keyed modules that live outside the drawings', () => {
    for (const file of [
      'src/data/fruit-forms.ts',
      'src/data/art/fruits/index.ts',
    ]) {
      const source = readFileSync(path.join(repoRoot, file), 'utf8')

      expect(slugsFrom(source).length, file).toBeGreaterThan(0)
    }
  })

  it('names every drawing module the archive holds', () => {
    // The drawing modules carry no prose at all, so the prose canaries can
    // never cover them — and their keys are the record ids, which are the
    // name slugs. One uncovered module would ship names as identifiers.
    const artDir = path.join(repoRoot, 'src/data/art')
    const modules = readdirSync(artDir).filter(
      (name) => name.endsWith('.ts') && !name.endsWith('.test.ts'),
    )
    const keyed = modules.filter((name) => {
      const source = readFileSync(path.join(artDir, name), 'utf8')

      return slugsFrom(source).length > 0
    })

    // Every module but the table itself and its type is keyed by records.
    expect(keyed).toHaveLength(modules.length - 2)
    expect(keyed.length).toBeGreaterThan(10)
  })
})

describe('the prose the gate looks for', () => {
  it('names every saga the archive holds, and the log', () => {
    const recordsDir = path.join(repoRoot, 'src/data/records')
    const sagas = readdirSync(recordsDir).filter((name) => {
      return (
        name.endsWith('.ts') && !name.endsWith('.test.ts') && name !== 'saga.ts'
      )
    })

    expect(sagas.length).toBeGreaterThan(10)
    for (const name of sagas) {
      const phrase = canaryFrom(
        readFileSync(path.join(recordsDir, name), 'utf8'),
      )

      expect(phrase, name).not.toBeNull()
    }
    const log = readFileSync(path.join(repoRoot, 'src/data/places.ts'), 'utf8')

    expect(canaryFrom(log)).not.toBeNull()
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
