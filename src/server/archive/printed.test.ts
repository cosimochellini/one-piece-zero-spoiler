import { describe, expect, it } from 'vitest'

import { printedFaction, printedForm, printedSea } from './printed.server'

describe('the words the pages print', () => {
  it('passes a word the pages know through', () => {
    expect(printedSea('east-blue')).toBe('east-blue')
    expect(printedForm('island')).toBe('island')
    expect(printedFaction('straw-hat-pirates')).toBe('straw-hat-pirates')
  })

  it('fails on a word they cannot print', () => {
    expect(() => printedSea('yorbia')).toThrow(/no sea called 'yorbia'/u)
    expect(() => printedForm('tower')).toThrow(/no place form called 'tower'/u)
    expect(() => printedFaction('phantom-troupe')).toThrow(
      /no faction called 'phantom-troupe'/u,
    )
  })
})
