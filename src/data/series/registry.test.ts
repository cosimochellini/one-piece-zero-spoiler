import { readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'

import { ONE_PIECE_SERIES } from '~/lib/progress/series'

import { archiveOf, descriptionOf, filedArchiveOf, ONE_PIECE } from '.'

/** `src/`, two folders above this one. */
const SRC = path.resolve(import.meta.dirname, '..', '..')

/** An import of the filed list or the filed loader from the registry. */
const FILED_IMPORT =
  /import\s*\{[^}]*\b(?:SERIES|filedArchiveOf)\b[^}]*\}\s*from\s*'~\/data\/series'/u

/** Whether a file is a test, or a helper of the tests. */
function isTesting(file: string): boolean {
  return /\.test\.tsx?$/u.test(file) || file.startsWith('test/')
}

/** Every source file outside the tests that imports the filed list or loader. */
function readerImports(): string[] {
  return readdirSync(SRC, { encoding: 'utf8', recursive: true })
    .map((file) => file.split(path.sep).join('/'))
    .filter((file) => /\.tsx?$/u.test(file) && !isTesting(file))
    .filter((file) =>
      // eslint-disable-next-line security/detect-non-literal-fs-filename -- a file listed under src/ a line above, never outside input.
      FILED_IMPORT.test(readFileSync(path.join(SRC, file), 'utf8')),
    )
}

describe('the runtime series registry', () => {
  it('returns public metadata without falling back for an unknown series', () => {
    expect(descriptionOf('one-piece')).toBe(ONE_PIECE_SERIES)
    expect(descriptionOf('missing-series')).toBeNull()
    expect(descriptionOf('../one-piece')).toBeNull()
  })

  it('loads the same archive once for repeated requests', async () => {
    const first = await archiveOf('one-piece')
    const second = await archiveOf('one-piece')

    expect(second).toBe(first)
    await expect(ONE_PIECE.load()).resolves.toBe(first)
    expect(first.series).toBe(ONE_PIECE_SERIES)
  })

  it('loads a series filed but not open for the tests and gates alone', async () => {
    // Hunter x Hunter is filed and swept, and opens with #763.
    expect(descriptionOf('hunter-x-hunter')).toBeNull()
    await expect(archiveOf('hunter-x-hunter')).rejects.toThrow('Unknown series')
    await expect(filedArchiveOf('hunter-x-hunter')).resolves.toMatchObject({
      series: { slug: 'hunter-x-hunter' },
    })
  })

  it('leaves the filed loader and list to the tests, the gates and the scripts', () => {
    // A reader path that imported either could reach a series not open.
    expect(readerImports()).toStrictEqual([])
  })

  it('rejects unknown slugs before choosing any dynamic module', async () => {
    await expect(archiveOf('missing-series')).rejects.toThrow('Unknown series')
    await expect(archiveOf('../one-piece')).rejects.toThrow('Unknown series')
  })
})
