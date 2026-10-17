// @vitest-environment node
import { describe, expect, it } from 'vitest'

import { airedPair, conditionsOf } from './issues-unblock.mjs'

describe('the blocked issue conditions', () => {
  it('reads chapters, pages and issues off the Unblocks at lines', () => {
    expect(
      conditionsOf(
        'Text about ch. 12.\nUnblocks at: ch. 1151 p. 9, #656\nUnblocks at: ch.1178\n',
      ),
    ).toStrictEqual([
      { chapter: 1151, page: 9 },
      { issue: 656 },
      { chapter: 1178 },
    ])
  })

  it('finds nothing without the line', () => {
    expect(conditionsOf('Once ch. 1178 airs.')).toStrictEqual([])
  })

  it('needs the asked page inside an adapted span', () => {
    const pairs = ['ep 1180 (p. 2-3, 7-8)', 'ep 1181 (p. 9)']
    expect(airedPair(pairs)).toBe('ep 1180 (p. 2-3, 7-8)')
    expect(airedPair(pairs, 8)).toBe('ep 1180 (p. 2-3, 7-8)')
    expect(airedPair(pairs, 9)).toBe('ep 1181 (p. 9)')
    expect(airedPair(pairs.slice(0, 1), 9)).toBeUndefined()
    expect(airedPair([])).toBeUndefined()
  })
})
