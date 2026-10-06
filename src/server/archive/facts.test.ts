import { describe, expect, it } from 'vitest'

import { getCharacter } from '~/data/characters'
import { type Reveal, reveal } from '~/data/reveal'
import type { Entity } from '~/data/types'

import { factsOf } from './project.server'

const ep = (episode: number): Reveal => reveal({ mode: 'episode', episode })

/** A character the archive is known to file, or the test is wrong. */
function onFile(id: string): Entity {
  const entity = getCharacter(id)
  if (entity === undefined) {
    throw new Error(`${id} is not filed`)
  }

  return entity
}

const LUFFY = onFile('monkey-d-luffy')
// Alive at 100, presumed dead at 125, back at 130.
const PELL = onFile('pell')

/**
 * Which fact the reader has reached. This is the half of the old
 * `CharacterFacts` test that was never about rendering: a fact above the
 * reader's episode used not to be in the DOM, and is now not in the payload.
 */
describe('the facts a bookmark reaches', () => {
  it('gives each fact as the reader knows it, and no fact not yet learned', () => {
    const found = factsOf(LUFFY, 'en', ep(3))

    expect(found).toStrictEqual({
      mode: 'facts',
      affiliation: 'Straw Hat Pirates',
      status: 'alive',
      devilFruit: [{ id: 'gum-gum-fruit', name: 'Gum-Gum Fruit' }],
    })
    // Origin (4), epithet (45) and bounty (45) are still ahead of the reader.
    expect(found).not.toHaveProperty('origin')
    expect(found).not.toHaveProperty('epithet')
    expect(found).not.toHaveProperty('bounty')
  })

  it('gives the latest bounty reached and never a later one', () => {
    expect(factsOf(LUFFY, 'en', ep(127))).toMatchObject({ bounty: 30_000_000 })
    expect(factsOf(LUFFY, 'en', ep(128))).toMatchObject({ bounty: 100_000_000 })
  })

  it('gives the state the reader has reached and never a later one', () => {
    // The episode before the fall and the episode of it: the pair is the whole
    // promise of the field, since a death is the one fact a wiki gives away.
    expect(factsOf(PELL, 'en', ep(124))).toMatchObject({ status: 'alive' })
    expect(factsOf(PELL, 'en', ep(125))).toMatchObject({
      status: 'presumed-dead',
    })
  })

  it('answers in the reader’s locale', () => {
    expect(factsOf(LUFFY, 'it', ep(45))).toMatchObject({
      epithet: 'Cappello di Paglia',
      affiliation: 'Pirati di Cappello di Paglia',
      devilFruit: [{ id: 'gum-gum-fruit', name: 'Frutto Gom Gom' }],
      // The state is an id rather than prose, so it is the same in both
      // languages and the page is what translates it.
      status: 'alive',
    })
  })
})
