// @vitest-environment node
//
// `describe` / `it` / `expect` are imported rather than taken from
// `test.globals`: this file is linted as plain JavaScript, where ESLint's
// `no-undef` has no TypeScript program to learn the Vitest globals from.
import { describe, expect, it } from 'vitest'

import { dumpArgs, dumpLines, keptPayloads } from './archive-dump.mjs'

describe('the dump flags', () => {
  it('dump One Piece, every payload and its own bookmarks with none', () => {
    expect(dumpArgs([])).toStrictEqual({
      series: 'one-piece',
      skip: [],
      bookmarks: undefined,
    })
  })

  it('take a series, repeated skips and a bookmark file', () => {
    expect(
      dumpArgs([
        '--series',
        'hunter-x-hunter',
        '--skip',
        'loadRelationships',
        '--skip',
        'loadHome',
        '--bookmarks',
        'base.json',
      ]),
    ).toStrictEqual({
      series: 'hunter-x-hunter',
      skip: ['loadRelationships', 'loadHome'],
      bookmarks: 'base.json',
    })
  })

  it('refuse a flag they do not know', () => {
    expect(() => dumpArgs(['--serie', 'one-piece'])).toThrow(/--serie/u)
  })
})

describe('the dumped payloads', () => {
  const payloads = [{ name: 'loadHome' }, { name: 'loadRelationships' }]

  it('leave out the skipped names only', () => {
    expect(keptPayloads(payloads, ['loadRelationships'])).toStrictEqual([
      { name: 'loadHome' },
    ])
  })

  it('refuse a skipped name that is not a payload', () => {
    expect(() => keptPayloads(payloads, ['loadRelationship'])).toThrow(
      /--skip loadRelationship is not a payload/u,
    )
  })
})

describe('the dump lines', () => {
  it('open with the episode table, then every key, bookmark and locale', () => {
    const lines = dumpLines({
      archive: {
        series: { episodeCeiling: 2 },
        chapterAtEpisode: (episode) => episode * 3,
      },
      payloads: [
        { name: 'loadHome', run: (bookmark, locale) => `${bookmark}${locale}` },
        { name: 'loadCharacter', keys: () => ['gon'], run: () => null },
      ],
      bookmarks: [1],
      locales: ['en', 'it'],
    })

    expect([...lines].map((line) => JSON.parse(line))).toStrictEqual([
      { table: 1, chapter: 3 },
      { table: 2, chapter: 6 },
      { name: 'loadHome', key: '', bookmark: 1, locale: 'en', payload: '1en' },
      { name: 'loadHome', key: '', bookmark: 1, locale: 'it', payload: '1it' },
      {
        name: 'loadCharacter',
        key: 'gon',
        bookmark: 1,
        locale: 'en',
        payload: null,
      },
      {
        name: 'loadCharacter',
        key: 'gon',
        bookmark: 1,
        locale: 'it',
        payload: null,
      },
    ])
  })
})
