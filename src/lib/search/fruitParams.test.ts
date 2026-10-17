import { describe, expect, it } from 'vitest'

import { parseFruitParams } from './fruitParams'

describe('parseFruitParams', () => {
  it('keeps a known kind and a query', () => {
    expect(
      parseFruitParams({ view: 'type', form: 'zoan', q: 'gum' }),
    ).toStrictEqual({ form: 'zoan', q: 'gum' })
  })

  it('leaves out the defaults and anything it does not know', () => {
    expect(parseFruitParams({})).toStrictEqual({})
    expect(
      parseFruitParams({ view: 'type', form: 'all', q: '  ' }),
    ).toStrictEqual({})
    expect(
      parseFruitParams({ view: 'saga', form: 'fish', q: ['a', 'b'] }),
    ).toStrictEqual({})
  })

  it('reads a numeric query back as text, and never the bookmark', () => {
    expect(parseFruitParams({ q: 123, ep: 650, s: 2, ch: 1044 })).toStrictEqual(
      { q: '123' },
    )
  })
})
