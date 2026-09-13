import { describe, expect, it } from 'vitest'

import { entities } from '~/data/entities'
import { foldName } from '~/lib/search/fold'

import { entityForHandle, handleOf } from './handle.server'

// A base-64 chunk is four characters; a lone trailing character carries no
// whole byte, and `atob` refuses such a chunk rather than dropping it.
const CHUNK = 4
const decoder = new TextDecoder()

/**
 * A handle read as if it were base64 — the way a lenient decoder reads it, so
 * a handle of any length can be held against the id it stands for.
 */
function asBase64Text(value: string): string {
  const spare = value.length % CHUNK === 1 ? 1 : 0
  const bytes = Uint8Array.from(
    atob(value.slice(0, value.length - spare)),
    (character) => character.codePointAt(0) ?? 0,
  )

  return decoder.decode(bytes)
}

/**
 * A covered record's id is its name slug, so the handle that stands in for it
 * must spell nothing. These hold that over the whole archive rather than over
 * a sample: one handle that happened to be `btoa(id)` would undo the change.
 */
describe('the handle a covered record hands back', () => {
  it('never spells the record it stands for', () => {
    for (const entity of entities) {
      const handle = handleOf(entity.id)

      expect(handle, entity.id).not.toContain(entity.id)
      // A "handle" that is only the id in disguise is not a handle.
      expect(asBase64Text(handle), entity.id).not.toContain(entity.id)

      for (const name of Object.values(entity.name)) {
        expect(handle, entity.id).not.toContain(
          foldName(name).replaceAll(/\s/gu, ''),
        )
      }
    }
  })

  it('gives one distinct handle per record, and resolves it back', () => {
    const minted = entities.map((entity) => handleOf(entity.id))
    const distinct = new Set(minted)

    expect(distinct.size).toBe(entities.length)

    for (const [at, handle] of minted.entries()) {
      expect(entityForHandle(handle)).toBe(entities[at])
    }
  })

  it('does not depend on the unit the reader counts in', () => {
    // A handle is an identity, not a position in the reader's list: three
    // handles per record would mean a peeked record changed identity the
    // moment the reader switched units.
    const first = entities.map((entity) => handleOf(entity.id))
    const second = entities.map((entity) => handleOf(entity.id))

    expect(second).toStrictEqual(first)
  })

  it('fails closed on anything that is not one of its own', () => {
    for (const rubbish of [
      '',
      '-1',
      'zzzzzz',
      'nami',
      '../../etc/passwd',
      '1e3',
      'Infinity',
      '1.5',
      ' 1',
    ]) {
      expect(entityForHandle(rubbish), rubbish).toBeUndefined()
    }
  })

  it('refuses to mint one for a record the archive does not hold', () => {
    expect(() => handleOf('nobody')).toThrow(/nobody/u)
  })
})
