// @vitest-environment node
//
// The suite-wide environment is jsdom for the React components. This module is
// plain Node, so a DOM here would only cost startup time.
//
// `describe` / `it` / `expect` are imported rather than taken from
// `test.globals`: this file is linted as plain JavaScript, where ESLint's
// `no-undef` has no TypeScript program to learn the Vitest globals from.
import console from 'node:console'
import { readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { describe, expect, it, vi } from 'vitest'

import {
  canariesOf,
  canaryFrom,
  EXTRA,
  judge,
  MAX_CLIENT_BYTES,
  proseCanaries,
  slugCanaries,
  slugsFrom,
  sourceCanaries,
} from './archive-gate.mjs'
import { importArchive } from './archive-loader.mjs'

const repositoryRoot = path.resolve(import.meta.dirname, '..')

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
      readFileSync(
        path.join(
          repositoryRoot,
          'src/data/series/one-piece/records/egghead.ts',
        ),
        'utf8',
      ),
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
    // `src/data/series/one-piece/fruit-forms.ts` is a hundred and twenty name slugs and not one
    // sentence, and it sits outside the drawing directory, so neither canary
    // would see it without being told to.
    const source = [
      'export const FRUIT_FORMS = {',
      "  'gum-gum-fruit': 'paramecia',",
      "  'op-op-fruit': 'paramecia',",
      "  'flame-flame-fruit': 'logia',",
      '} satisfies Record<string, FruitForm>',
    ].join('\n')

    // `op-op-fruit` is eleven characters, under the length the gate trusts.
    expect(slugsFrom(source)).toStrictEqual([
      'gum-gum-fruit',
      'flame-flame-fruit',
    ])
  })

  it('covers the slug-keyed modules that live outside the drawings', () => {
    for (const file of [
      'src/data/series/one-piece/fruit-forms.ts',
      'src/data/series/one-piece/art/fruits/index.ts',
    ]) {
      const source = readFileSync(path.join(repositoryRoot, file), 'utf8')

      expect(slugsFrom(source).length, file).toBeGreaterThan(0)
    }
  })

  it('names every drawing module the archive holds', () => {
    // The drawing modules carry no prose at all, so the prose canaries can
    // never cover them — and their keys are the record ids, which are the
    // name slugs. One uncovered module would ship names as identifiers.
    const artDir = path.join(repositoryRoot, 'src/data/series/one-piece/art')
    const modules = readdirSync(artDir).filter(
      (name) => name.endsWith('.ts') && !name.endsWith('.test.ts'),
    )
    const keyed = modules.filter((name) => {
      const source = readFileSync(path.join(artDir, name), 'utf8')

      return slugsFrom(source).length > 0
    })

    // Every module but the table itself is keyed by records.
    expect(keyed).toHaveLength(modules.length - 1)
    expect(keyed.length).toBeGreaterThan(10)
  })
})

describe('the prose the gate looks for', () => {
  it('covers every prose module outside the records and drawings', () => {
    // Of every series: a series' `records/` and `art/` are read whole, and
    // anything else with prose must be among its extras.
    const dataDir = path.join(repositoryRoot, 'src/data')
    const modules = readdirSync(dataDir, { recursive: true })
      .map((name) => name.split(path.sep).join('/'))
      .filter(
        (name) =>
          name.endsWith('.ts')
          && !name.endsWith('.test.ts')
          && !/^series\/[^/]+\/(?:records|art)\//u.test(name),
      )

    const prose = modules.filter((name) => {
      const source = readFileSync(path.join(dataDir, name), 'utf8')

      return canaryFrom(source) !== null
    })

    expect(prose.length).toBeGreaterThan(0)
    for (const name of prose) {
      // The gate reads a series' extras by its folder, so that is where a
      // module has to be listed.
      const folder = /^series\/(?<folder>[^/]+)\//u.exec(name)?.groups?.folder
      const file = `src/data/${name}`

      expect(EXTRA[folder ?? '']?.prose ?? [], file).toContain(file)
    }
  })

  it('keys its extras by the folders of listed series only', async () => {
    // An extra under a slug, a typo or an unlisted folder is never read.
    const { SERIES } = await importArchive('data/series/index.ts')
    const folders = SERIES.map(({ folder }) => folder)

    for (const key of Object.keys(EXTRA)) {
      expect(folders, key).toContain(key)
    }
  })

  it('reads every listed series, with no canary left unread', async () => {
    const canaries = await canariesOf(repositoryRoot)
    const files = canaries.map(({ file }) => file)

    expect(canaries.filter(({ phrase }) => phrase === null)).toStrictEqual([])
    expect(files).toContain('src/data/series/one-piece/records/egghead.ts')
    expect(files).toContain('src/data/series/one-piece/fruit-forms.ts')
  })

  it('is unusable, not a leak, when the series list does not load', async () => {
    vi.resetModules()
    vi.doMock('./archive-loader.mjs', () => ({
      importArchive: () => Promise.reject(new Error('no list')),
    }))
    const quiet = vi.spyOn(console, 'error').mockReturnValue()
    const gate = await import('./archive-gate.mjs')

    await expect(gate.canariesOf(repositoryRoot)).resolves.toStrictEqual([
      { file: 'src/data/series/index.ts', phrase: null },
    ])
    expect(quiet).toHaveBeenCalledOnce()
    vi.doUnmock('./archive-loader.mjs')
  })

  it('refuses to vouch for a series with no records or drawings', () => {
    // A series in the list whose folder the gate cannot read would ship its
    // prose and its slugs unchecked; it is an unreadable canary instead.
    expect(proseCanaries(repositoryRoot, 'no-such-series')).toStrictEqual([
      { file: 'src/data/series/no-such-series/records', phrase: null },
    ])
    expect(slugCanaries(repositoryRoot, 'no-such-series')).toStrictEqual([
      { file: 'src/data/series/no-such-series/art', phrase: null },
    ])
  })

  it('reads a canary from every module of One Piece it names', () => {
    const canaries = [
      ...proseCanaries(repositoryRoot, 'one-piece'),
      ...slugCanaries(repositoryRoot, 'one-piece'),
    ]

    expect(canaries.length).toBeGreaterThan(25)
    expect(canaries.filter(({ phrase }) => phrase === null)).toStrictEqual([])
  })

  it('names every saga the archive holds, and the log', () => {
    const recordsDir = path.join(
      repositoryRoot,
      'src/data/series/one-piece/records',
    )
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
    const extras = EXTRA['one-piece'].prose
    for (const extra of extras) {
      const source = readFileSync(path.join(repositoryRoot, extra), 'utf8')

      expect(canaryFrom(source), extra).not.toBeNull()
    }
  })
})

describe('the verdict the gate reaches', () => {
  const clean = [chunk('index.js', 'const a=1'), chunk('page.js', 'const b=2')]
  const canaries = [
    {
      file: 'src/data/series/one-piece/records/wano.ts',
      phrase: 'a long sentence',
    },
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
        file: 'src/data/series/one-piece/records/wano.ts',
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
    const verdict = judge(clean, [
      { file: 'src/data/series/one-piece/places.ts', phrase: null },
    ])

    expect(verdict.unreadable).toStrictEqual([
      'src/data/series/one-piece/places.ts',
    ])
  })
})

describe('the byte ceiling', () => {
  it('leaves headroom but not a saga’s worth', () => {
    // React itself is ~318 KB of the current ~449 KB. The archive alone was
    // 599 KB of the 1,049 KB build this replaced, so a ceiling that let it
    // back in would vouch for nothing.
    // Public bilingual legal notices add code, not private source references.
    expect(MAX_CLIENT_BYTES).toBeGreaterThan(449_410)
    expect(MAX_CLIENT_BYTES).toBeLessThan(449_410 + 220_000)
  })
})

describe('source attribution boundaries', () => {
  it('checks all pinned revisions and the official replacement source', () => {
    const sources = sourceCanaries(repositoryRoot)
    expect(sources).toHaveLength(33)
    expect(sources.every(({ phrase }) => typeof phrase === 'string')).toBe(true)
    const leaked = sources.map(({ phrase }, index) =>
      chunk(`source-${String(index)}.js`, phrase),
    )
    expect(judge(leaked, sources).ok).toBe(false)
    expect(judge([chunk('index.js', 'export {}')], sources).ok).toBe(true)
  })

  it('fails closed without the source evidence', () => {
    const missing = sourceCanaries(
      path.join(repositoryRoot, '.gate', '721-missing-evidence'),
    )
    expect(
      judge([chunk('index.js', 'export {}')], missing).unreadable,
    ).toStrictEqual(['docs/content-provenance/sources.json'])
  })
})
