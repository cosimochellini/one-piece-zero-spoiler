import { describe, expect, it } from 'vitest'

import { parseFruitParams } from './fruitParams'

describe('parseFruitParams', () => {
  it('keeps a known kind and a query', () => {
    expect(
      parseFruitParams({ view: 'type', form: 'zoan', q: 'gum' }),
    ).toStrictEqual({ form: 'zoan', q: 'gum' })
  })

  it('keeps the saga view, and drops the type view as the default', () => {
    expect(parseFruitParams({ view: 'saga', form: 'logia' })).toStrictEqual({
      view: 'saga',
      form: 'logia',
    })
    expect(parseFruitParams({ view: 'type' })).toStrictEqual({})
  })

  it('leaves out the defaults and anything it does not know', () => {
    expect(parseFruitParams({})).toStrictEqual({})
    expect(
      parseFruitParams({ view: 'type', form: 'all', q: '  ' }),
    ).toStrictEqual({})
    expect(
      parseFruitParams({ view: 'faction', form: 'fish', q: ['a', 'b'] }),
    ).toStrictEqual({})
  })

  it('never reads the bookmark, nor a query that is not text', () => {
    expect(parseFruitParams({ q: 123, ep: 650, s: 2, ch: 1044 })).toStrictEqual(
      {},
    )
    expect(parseFruitParams({ q: '123' })).toStrictEqual({ q: '123' })
  })
})
