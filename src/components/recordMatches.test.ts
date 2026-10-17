import { describe, expect, it } from 'vitest'

import { drawing, specimen } from '~/test/fixtures'

import { groupEaterMatch } from './recordMatches'

// Whitebeard and Teach both stand with the Emperors; Ace does not.
const TREMOR = specimen({
  name: 'Tremor-Tremor Fruit',
  folded: 'tremor-tremor fruit',
  aliases: ['edward newgate', 'marshall d. teach', 'portgas d. ace'],
  eaters: [
    { id: 'edward-newgate', name: 'Edward Newgate', visual: drawing() },
    { id: 'marshall-d-teach', name: 'Marshall D. Teach', visual: drawing() },
    { id: 'portgas-d-ace', name: 'Portgas D. Ace', visual: drawing() },
  ],
})

describe('groupEaterMatch', () => {
  it('shows the group’s first eater with no query, or one on the fruit’s name', () => {
    expect(groupEaterMatch(TREMOR, '', [0, 1])).toStrictEqual({
      at: 0,
      highlight: null,
    })
    expect(groupEaterMatch(TREMOR, 'tremor', [1])).toStrictEqual({
      at: 1,
      highlight: null,
    })
  })

  it('switches to the group’s eater the query found, marked', () => {
    expect(groupEaterMatch(TREMOR, 'teach', [0, 1])).toStrictEqual({
      at: 1,
      highlight: [12, 17],
    })
  })

  it('leaves the group when the query found an eater of another one', () => {
    expect(groupEaterMatch(TREMOR, 'ace', [0, 1])).toBeNull()
  })

  it('keeps the group for a name only the other locale uses', () => {
    const named = { ...TREMOR, aliases: [...TREMOR.aliases, 'barbabianca'] }

    expect(groupEaterMatch(named, 'barbabianca', [0, 1])).toStrictEqual({
      at: 0,
      highlight: null,
    })
  })
})
