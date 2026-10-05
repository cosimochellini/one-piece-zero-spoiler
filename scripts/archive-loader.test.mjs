// @vitest-environment node
//
// The suite-wide environment is jsdom for the React components. This module is
// plain Node, so a DOM here would only cost startup time.
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { describe, expect, it } from 'vitest'

import { resolveArchive, ROOT } from './archive-loader.mjs'

const parentURL = pathToFileURL(
  path.join(ROOT, 'src', 'data', 'fruits.ts'),
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
    const href = pathToFileURL(path.join(ROOT, 'src', 'data', 'entities')).href

    expect(resolveArchive('~/data/entities', {}, resolving([href]))).toBe(href)
  })

  it('adds `.ts` to a relative specifier that has no extension', () => {
    const href = pathToFileURL(
      path.join(ROOT, 'src', 'data', 'entities.ts'),
    ).href

    expect(resolveArchive('./entities', { parentURL }, resolving([href]))).toBe(
      href,
    )
  })

  it('reads a directory as its index.ts', () => {
    const href = pathToFileURL(
      path.join(ROOT, 'src', 'data', 'art', 'fruits', 'index.ts'),
    ).href
    const parent = pathToFileURL(
      path.join(ROOT, 'src', 'data', 'art', 'index.ts'),
    ).href

    expect(
      resolveArchive('./fruits', { parentURL: parent }, resolving([href])),
    ).toBe(href)
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
