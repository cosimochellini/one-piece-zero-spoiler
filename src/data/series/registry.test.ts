import { describe, expect, it } from 'vitest'

import { ONE_PIECE_SERIES } from '~/lib/progress/series'

import { archiveOf, descriptionOf, ONE_PIECE } from '.'

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

  it('rejects unknown slugs before choosing any dynamic module', async () => {
    await expect(archiveOf('missing-series')).rejects.toThrow('Unknown series')
    await expect(archiveOf('../one-piece')).rejects.toThrow('Unknown series')
  })
})
