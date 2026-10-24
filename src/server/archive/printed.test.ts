import { describe, expect, it, vi } from 'vitest'

import { OTHER_SLUG } from '~/test/otherSeries'

import { printedFaction, printedForm, printedRegion } from './printed.server'

// Imported inside the factory, which runs before this file's imports do.
vi.mock(import('~/lib/view/placeWords'), async (importOriginal) => {
  const { withOtherSeries } = await import('~/test/otherSeries')
  return withOtherSeries(await importOriginal())
})

describe('the words the pages print', () => {
  it('passes a word the series’ pages know through', () => {
    expect(printedRegion('east-blue', 'one-piece')).toBe('east-blue')
    expect(printedForm('island', 'one-piece')).toBe('island')
    expect(printedRegion('yorbia', OTHER_SLUG)).toBe('yorbia')
    expect(printedForm('tower', OTHER_SLUG)).toBe('tower')
    expect(printedFaction('straw-hat-pirates')).toBe('straw-hat-pirates')
  })

  it('fails on a word outside the series’ own', () => {
    expect(() => printedRegion('yorbia', 'one-piece')).toThrow(
      /one-piece print no region called 'yorbia'/u,
    )
    expect(() => printedForm('tower', 'one-piece')).toThrow(
      /one-piece print no place form called 'tower'/u,
    )
    expect(() => printedRegion('east-blue', OTHER_SLUG)).toThrow(
      /other-series print no region called 'east-blue'/u,
    )
    expect(() => printedForm('island', OTHER_SLUG)).toThrow(
      /other-series print no place form called 'island'/u,
    )
    expect(() => printedRegion('constructor', OTHER_SLUG)).toThrow(
      /no region called 'constructor'/u,
    )
    expect(() => printedRegion('yorbia', 'hunter-x-hunter')).toThrow(
      /hunter-x-hunter print no region called 'yorbia'/u,
    )
    expect(() => printedFaction('phantom-troupe')).toThrow(
      /no faction called 'phantom-troupe'/u,
    )
  })
})
