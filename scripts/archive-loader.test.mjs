// @vitest-environment node
//
// The suite-wide environment is jsdom for the React components. This module is
// plain Node, so a DOM here would only cost startup time.
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { describe, expect, it } from 'vitest'

import { resolveArchive, ROOT, seriesFrom } from './archive-loader.mjs'

const parentURL = pathToFileURL(
  path.join(ROOT, 'src', 'data', 'series', 'one-piece', 'fruits.ts'),
).href

/**
 * A next hook that resolves only the specifiers it is given.
 * @param {string[]} known - The specifiers it resolves.
 * @returns {(specifier: string) => string} The hook.
 */
function resolving(known) {
  return (specifier) => {
    if (!known.includes(specifier)) {
      throw new Error(`cannot resolve ${specifier}`)
    }
    return specifier
  }
}

describe('the archive resolve hook', () => {
  it('reads `~/` as src/', () => {
    const href = pathToFileURL(
      path.join(ROOT, 'src', 'data', 'series', 'one-piece', 'entities'),
    ).href

    expect(
      resolveArchive('~/data/series/one-piece/entities', {}, resolving([href])),
    ).toBe(href)
  })

  it('adds `.ts` to a relative specifier that has no extension', () => {
    const href = pathToFileURL(
      path.join(ROOT, 'src', 'data', 'series', 'one-piece', 'entities.ts'),
    ).href

    expect(resolveArchive('./entities', { parentURL }, resolving([href]))).toBe(
      href,
    )
  })

  it('reads a directory as its index.ts', () => {
    const href = pathToFileURL(
      path.join(
        ROOT,
        'src',
        'data',
        'series',
        'one-piece',
        'art',
        'fruits',
        'index.ts',
      ),
    ).href
    const parent = pathToFileURL(
      path.join(ROOT, 'src', 'data', 'series', 'one-piece', 'art', 'index.ts'),
    ).href

    expect(
      resolveArchive('./fruits', { parentURL: parent }, resolving([href])),
    ).toBe(href)
  })

  it('stands in an empty address for a built chunk', async () => {
    const { url } = resolveArchive(
      './dictionaries/en?chunk-url',
      { parentURL },
      resolving([]),
    )

    await expect(import(url)).resolves.toMatchObject({ url: '' })
  })

  it('passes the failure on for a package or a file that does not exist', () => {
    expect(() =>
      resolveArchive('some-package', { parentURL }, resolving([])),
    ).toThrow('cannot resolve some-package')
    expect(() =>
      resolveArchive('./not-a-module', { parentURL }, resolving([])),
    ).toThrow('cannot resolve ./not-a-module')
  })
})

describe('the series of a verify run', () => {
  it('is One Piece when none is asked for, so the old commands still work', async () => {
    await expect(seriesFrom([])).resolves.toMatchObject({ slug: 'one-piece' })
  })

  it('is the one `--series` names', async () => {
    await expect(seriesFrom(['--series', 'one-piece'])).resolves.toMatchObject({
      folder: 'one-piece',
      wiki: { en: 'https://onepiece.fandom.com/api.php' },
    })
    await expect(seriesFrom(['--series=one-piece'])).resolves.toMatchObject({
      slug: 'one-piece',
    })
  })

  it('refuses a series the list does not hold, and an unknown argument', async () => {
    await expect(seriesFrom(['--series', 'naruto'])).rejects.toThrow(
      '--series naruto is not in src/data/series/index.ts (one-piece, hunter-x-hunter)',
    )
    await expect(seriesFrom(['--serie', 'one-piece'])).rejects.toThrow(
      /--serie/u,
    )
  })
})
