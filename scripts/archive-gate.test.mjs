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
  copyCanaries,
  EXTRA,
  judge,
  officialCanaries,
  placeWordCanaries,
  placeWordCanariesOf,
  proseCanaries,
  slugCanaries,
  slugsFrom,
  sourceCanaries,
} from './archive-gate.mjs'
import { importArchive } from './archive-loader.mjs'
import { judgeServer } from './archive-server-gate.mjs'

const repositoryRoot = path.resolve(import.meta.dirname, '..')

/**
 * A built script, as the gate reads one.
 * @param {string} name The file's name.
 * @param {string} text Its contents.
 * @returns {{bytes: number, name: string, text: string}} The script.
 */
function chunk(name, text) {
  return { name, bytes: text.length, text }
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

  it('refuses to vouch for anything when a canary could not be read', () => {
    const verdict = judge(clean, [
      { file: 'src/data/series/one-piece/places.ts', phrase: null },
    ])

    expect(verdict.unreadable).toStrictEqual([
      'src/data/series/one-piece/places.ts',
    ])
  })
})

describe('series copy canaries', () => {
  it('looks for every series’ own words, and never for a shared one', async () => {
    const { COPIES } = await importArchive('server/copy.server.ts')
    const { enDictionary } = await importArchive('i18n/dictionaries/en.ts')
    const { itDictionary } = await importArchive('i18n/dictionaries/it.ts')
    const canaries = copyCanaries(COPIES, [enDictionary, itDictionary])
    const phrases = canaries.map(({ phrase }) => phrase)

    // One Piece's factions and Hunter x Hunter's demo, in both languages.
    expect(phrases).toContain('Nine Red Scabbards')
    expect(phrases).toContain('Kozuki alliance')
    expect(phrases).toContain('Dopo l’Esame Hunter')
    // A word the shared copy ships on every page is no canary.
    expect(phrases).not.toContain('Places')
    expect(phrases).not.toContain(enDictionary['nav.places'])
    expect(
      canaries.filter(({ file }) => file.endsWith('hunter-x-hunter')).length,
    ).toBeGreaterThan(0)

    const leaked = [chunk('index.js', 'const f = "Kozuki alliance"')]
    expect(judge(leaked, canaries).found.map(({ file }) => file)).toStrictEqual(
      ['src/i18n/dictionaries/one-piece'],
    )
    expect(judge([chunk('index.js', 'export {}')], canaries).ok).toBe(true)
  })
})

describe('a series copy with nothing to look for', () => {
  it('is unreadable rather than clean', () => {
    const canaries = copyCanaries(
      { 'no-words': { en: { 'site.description': 'Places' }, it: {} } },
      [{ 'nav.places': 'Places' }],
    )

    expect(canaries).toStrictEqual([
      { file: 'src/i18n/dictionaries/no-words', phrase: null },
    ])
    expect(
      judge([chunk('index.js', 'export {}')], canaries).unreadable,
    ).toStrictEqual(['src/i18n/dictionaries/no-words'])
  })
})

describe('source attribution boundaries', () => {
  it('checks the official source every series’ review cites', async () => {
    const { SERIES } = await importArchive('data/series/index.ts')

    await expect(officialCanaries(SERIES)).resolves.toStrictEqual([
      {
        file: 'src/data/series/one-piece/credits',
        phrase: 'https://one-piece.com/anime/o6217/index.html',
      },
    ])
  })

  it('checks all pinned revisions', () => {
    const sources = sourceCanaries(repositoryRoot)
    expect(sources).toHaveLength(1901)
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

/**
 * A tiny emitted SSR graph, independent of source-code import syntax.
 * @returns {{manifest: Record<string, object>, chunks: Record<string, string>, archives: {folder: string, canaries: {file: string, phrase: string}[]}[]}} A dynamically isolated archive.
 */
function serverBuild() {
  const key = 'src/data/series/test-series/archive.ts'
  return {
    manifest: {
      server: {
        file: 'server.js',
        isEntry: true,
        imports: ['registry'],
        dynamicImports: ['api'],
      },
      registry: { file: 'registry.js', dynamicImports: [key] },
      api: { file: 'api.js', isDynamicEntry: true, imports: ['registry'] },
      [key]: { file: 'archive.js', isDynamicEntry: true, imports: ['shared'] },
      shared: { file: 'shared.js' },
    },
    chunks: {
      'server.js': 'server',
      'registry.js': 'registry',
      'api.js': 'api',
      'archive.js': 'a sentence held only by the archive',
      'shared.js': 'shared engine',
    },
    archives: [
      {
        folder: 'test-series',
        canaries: [
          {
            file: 'src/data/series/test-series/records/first.ts',
            phrase: 'a sentence held only by the archive',
          },
        ],
      },
    ],
  }
}

describe('emitted server archive boundaries', () => {
  const key = 'src/data/series/test-series/archive.ts'

  it('allows a dynamically imported archive with only engine chunks shared', () => {
    const { manifest, archives, chunks } = serverBuild()
    expect(judgeServer(manifest, archives, chunks)).toStrictEqual({
      ok: true,
      problems: [],
      unreadable: [],
    })
  })

  it('rejects a static archive import even when a dynamic import remains', () => {
    const { manifest, archives, chunks } = serverBuild()
    manifest.server.imports.push(key)
    expect(judgeServer(manifest, archives, chunks).problems).toContain(
      `${key} has a static runtime import`,
    )
  })

  it('walks transitive static dependencies and safely handles cycles', () => {
    const { manifest, archives, chunks } = serverBuild()
    manifest.registry.imports = ['bridge']
    manifest.bridge = { file: 'bridge.js', imports: ['registry', key] }
    chunks['bridge.js'] = 'bridge'
    expect(judgeServer(manifest, archives, chunks).problems).toContain(
      `${key} has a static runtime import`,
    )
  })

  it('also treats a dynamically loaded API as a runtime entry point', () => {
    const { manifest, archives, chunks } = serverBuild()
    manifest.api.imports.push(key)
    expect(judgeServer(manifest, archives, chunks).problems).toContain(
      `${key} has a static runtime import`,
    )
  })

  it('rejects eager shared archive data even when the adapter remains dynamic', () => {
    const { manifest, archives, chunks } = serverBuild()
    manifest.api.imports.push('shared')
    chunks['shared.js'] = 'a sentence held only by the archive'
    const verdict = judgeServer(manifest, archives, chunks)
    expect(verdict.ok).toBe(false)
    expect(verdict.problems).toContain(
      'src/data/series/test-series/records/first.ts is statically loaded in shared.js',
    )
    expect(verdict.problems).not.toContain(`${key} has a static runtime import`)
  })

  it('refuses to vouch for a missing manifest', () => {
    const { archives, chunks } = serverBuild()
    expect(judgeServer(null, archives, chunks)).toStrictEqual({
      ok: false,
      problems: [],
      unreadable: ['dist/server/.vite/manifest.json'],
    })
  })

  it('refuses to vouch for a missing registered archive entry', () => {
    const { manifest, archives, chunks } = serverBuild()
    Reflect.deleteProperty(manifest, key)
    expect(judgeServer(manifest, archives, chunks).unreadable).toContain(key)
  })

  it('rejects a dynamic-entry flag without an actual dynamic graph edge', () => {
    const { manifest, archives, chunks } = serverBuild()
    manifest.registry.dynamicImports = []
    expect(judgeServer(manifest, archives, chunks).problems).toContain(
      `${key} is not a dynamically imported archive entry`,
    )
  })

  it('refuses incomplete static graph and emitted script evidence', () => {
    const { manifest, archives, chunks } = serverBuild()
    manifest.registry.imports = ['missing']
    delete chunks['server.js']
    delete chunks['archive.js']
    const { unreadable } = judgeServer(manifest, archives, chunks)
    expect(unreadable).toContain('missing')
    expect(unreadable).toContain('server.js')
    expect(unreadable).toContain('archive.js')
  })
})

describe('the place word canaries', () => {
  const own = {
    folder: 'other-series',
    placeWords: {
      dictionary: false,
      regions: {
        'dark-continent': { en: 'Dark Continent', it: 'Continente Oscuro' },
      },
      forms: { tower: { en: 'Tower', it: 'Torre' } },
    },
  }
  const dictionary = {
    folder: 'one-piece',
    placeWords: { dictionary: true, regions: { 'east-blue': true }, forms: {} },
  }

  it('looks for the distinct words and labels of a series that labels its own', () => {
    expect(
      placeWordCanaries([dictionary, own]).map(({ phrase }) => phrase),
    ).toStrictEqual(['dark-continent', 'Dark Continent', 'Continente Oscuro'])
  })

  it('drops a word or label the shipped dictionaries hold', () => {
    expect(
      placeWordCanaries([own], ['sea.dark-continent', 'Continente Oscuro']).map(
        ({ phrase }) => phrase,
      ),
    ).toStrictEqual(['Dark Continent'])
  })

  it('leaves the gate unusable for a series none of whose words is left', () => {
    const canaries = placeWordCanaries(
      [own],
      ['dark-continent', 'Dark Continent', 'Continente Oscuro'],
    )

    expect(canaries).toStrictEqual([
      { file: 'src/data/series/other-series/placeWords.ts', phrase: null },
    ])
    expect(judge([], canaries).unreadable).toStrictEqual([
      'src/data/series/other-series/placeWords.ts',
    ])
  })

  it('fails a client chunk that ships them', () => {
    const chunk = {
      bytes: 40,
      name: 'places.js',
      text: 'const w={"dark-continent":{en:"Dark Continent"}}',
    }

    expect(judge([chunk], placeWordCanaries([own])).found).toHaveLength(2)
  })

  it('ignores bare client identifiers and longer strings while catching quoted place tokens', () => {
    const canaries = placeWordCanaries([
      {
        ...own,
        placeWords: {
          ...own.placeWords,
          forms: { mountain: { en: 'Mountain', it: 'Montagna' } },
        },
      },
    ])
    expect(
      judge(
        [
          chunk(
            'map.js',
            'const styles={mountain:{}};styles.mountain;const label="Mountain range"',
          ),
        ],
        canaries,
      ).ok,
    ).toBe(true)
    for (const quote of ["'", '"', '`']) {
      for (const word of ['mountain', 'Mountain', 'Montagna']) {
        expect(
          judge(
            [chunk('leak.js', `const label=${quote}${word}${quote}`)],
            canaries,
          ).found,
        ).toHaveLength(1)
      }
    }
  })

  it('reads the shipped dictionaries, keeping only the words they do not hold', async () => {
    const canaries = await placeWordCanariesOf()

    expect(
      canaries
        .filter(({ file }) => file.includes('hunter-x-hunter'))
        .map(({ phrase }) => phrase),
    ).toStrictEqual([
      'mainland',
      'Mainland',
      'Terraferma',
      'Forest preserve',
      'Riserva forestale',
      'mountain',
      'Mountain',
      'Montagna',
      'Wetlands',
      'Port town',
      'Città portuale',
    ])
  })

  it('reads every listed series', async () => {
    const { SERIES } = await importArchive('data/series/index.ts')

    expect(() => placeWordCanaries(SERIES)).not.toThrow()
  })
})
