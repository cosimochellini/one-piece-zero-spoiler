import { describe, expect, it } from 'vitest'

import { getEntity } from './entities'

describe('getEntity', () => {
  it('finds a record by id', () => {
    expect(getEntity('egghead')?.revealedAtEpisode).toBe(1090)
  })

  it('returns undefined for an id the archive does not hold', () => {
    expect(getEntity('not-a-record')).toBeUndefined()
  })
})
