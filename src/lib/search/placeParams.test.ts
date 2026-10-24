import { describe, expect, it } from 'vitest'

import { stop } from '~/test/fixtures'

import {
  isNarrowed,
  parsePlaceParams,
  reachedParams,
  stopMatches,
} from './placeParams'

const baratie = stop({ id: 'baratie', name: 'Baratie' })
const jaya = stop({
  id: 'jaya',
  name: 'Jaya',
  sea: 'grand-line',
  form: 'island',
  saga: 3,
})

describe('parsePlaceParams', () => {
  it('keeps every known pick and a query', () => {
    expect(
      parsePlaceParams({
        sea: 'new-world',
        form: 'island',
        saga: 8,
        q: 'dress',
      }),
    ).toStrictEqual({ sea: 'new-world', form: 'island', saga: 8, q: 'dress' })
  })

  it('leaves out the defaults and anything of the wrong shape', () => {
    expect(
      parsePlaceParams({ sea: '', form: '', saga: 0, view: 'grid', q: '  ' }),
    ).toStrictEqual({})
    expect(
      parsePlaceParams({ sea: 3, form: ['island'], saga: 1.5 }),
    ).toStrictEqual({})
    expect(parsePlaceParams({ saga: '3', q: 12 })).toStrictEqual({})
  })

  it('keeps any word, which only the open places can match', () => {
    const params = parsePlaceParams({ sea: 'north-blue', form: 'castle' })

    expect(params).toStrictEqual({ sea: 'north-blue', form: 'castle' })
    expect(reachedParams(params, [baratie, jaya])).toStrictEqual({})
  })
})

describe('reachedParams', () => {
  it('drops a sea, a type or a saga no open place holds', () => {
    expect(
      reachedParams({ sea: 'new-world', form: 'prison', saga: 9, q: 'j' }, [
        baratie,
        jaya,
      ]),
    ).toStrictEqual({ q: 'j' })
  })

  it('keeps the ones an open place holds', () => {
    expect(
      reachedParams({ sea: 'grand-line', form: 'island', saga: 3 }, [
        baratie,
        jaya,
      ]),
    ).toStrictEqual({ sea: 'grand-line', form: 'island', saga: 3 })
  })
})

describe('stopMatches', () => {
  it('asks every pick and the folded query together', () => {
    expect(stopMatches(jaya, {}, '')).toBe(true)
    expect(stopMatches(jaya, { sea: 'grand-line' }, 'jay')).toBe(true)
    expect(stopMatches(jaya, { sea: 'east-blue' }, '')).toBe(false)
    expect(stopMatches(jaya, { form: 'restaurant' }, '')).toBe(false)
    expect(stopMatches(jaya, { saga: 1 }, '')).toBe(false)
    expect(stopMatches(jaya, {}, 'bar')).toBe(false)
  })
})

describe('isNarrowed', () => {
  it('is any pick or a query', () => {
    expect(isNarrowed({})).toBe(false)
    expect(isNarrowed({ q: 'j' })).toBe(true)
    expect(isNarrowed({ saga: 2 })).toBe(true)
  })
})
