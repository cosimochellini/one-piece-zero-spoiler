import { describe, expect, it } from 'vitest'

import { ONE_PIECE_SERIES } from '~/lib/progress/series'

import {
  archiveOf,
  COMING_SERIES,
  descriptionOf,
  filedArchiveOf,
  ONE_PIECE,
  OPEN_SERIES,
  SERIES,
} from '.'

/** The series filed but not open: none once every series has opened. */
const CLOSED = SERIES.filter(({ open }) => !open)

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

  // While no series is closed there is nothing to gate; the source of the
  // gate is held by ESLint (`no-restricted-imports` on `SERIES` and
  // `filedArchiveOf` outside the tests, gates and scripts).
  it.skipIf(CLOSED.length === 0)(
    'loads a series filed but not open for the tests and gates alone',
    async () => {
      for (const { slug } of CLOSED) {
        expect(descriptionOf(slug), slug).toBeNull()
        await expect(archiveOf(slug), slug).rejects.toThrow('Unknown series')
        await expect(filedArchiveOf(slug), slug).resolves.toMatchObject({
          series: { slug },
        })
      }
    },
  )

  // The hub's two lists: a series is announced or open, never both.
  it('announces as coming exactly the filed series that are not open', () => {
    const coming = COMING_SERIES.map(({ slug }) => slug)
    const open = OPEN_SERIES.map(({ slug }) => slug)

    expect(coming).toStrictEqual(CLOSED.map(({ slug }) => slug))
    expect(coming.filter((slug) => open.includes(slug))).toStrictEqual([])
    expect(open.length + coming.length).toBe(SERIES.length)
  })

  it('rejects unknown slugs before choosing any dynamic module', async () => {
    await expect(archiveOf('missing-series')).rejects.toThrow('Unknown series')
    await expect(archiveOf('../one-piece')).rejects.toThrow('Unknown series')
  })
})
