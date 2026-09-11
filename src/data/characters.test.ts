import { LOCALES } from '~/i18n/locales'

import {
  CHARACTER_ROLES,
  characters,
  FEATURED_CHARACTER_IDS,
  featuredCharacters,
  foldName,
  getCharacter,
  matchName,
  nearbyCharacters,
  route,
  routePositionOf,
} from './characters'
import { entities } from './entities'

describe('the featured twenty', () => {
  it('lists exactly twenty distinct characters that all exist', () => {
    expect(FEATURED_CHARACTER_IDS).toHaveLength(20)
    expect(new Set(FEATURED_CHARACTER_IDS).size).toBe(20)
    for (const id of FEATURED_CHARACTER_IDS) {
      expect(getCharacter(id)?.kind).toBe('character')
    }
    expect(featuredCharacters).toHaveLength(20)
  })

  it('keeps them in route order, not in ranking order', () => {
    const thresholds = featuredCharacters.map((c) => c.revealedAtEpisode)

    expect(thresholds).toEqual([...thresholds].sort((a, b) => a - b))
  })
})

describe('the dossier', () => {
  it('gives every character a role in every locale', () => {
    for (const character of characters) {
      const role = CHARACTER_ROLES[character.id]
      expect(role, character.id).toBeDefined()
      for (const locale of LOCALES) {
        expect(role?.[locale].length).toBeGreaterThan(0)
      }
    }
  })

  it('has no role for a record that is not a character', () => {
    const others = entities.filter((e) => e.kind !== 'character')
    for (const other of others) {
      expect(CHARACTER_ROLES[other.id]).toBeUndefined()
    }
  })
})

describe('getCharacter', () => {
  it('finds a character and refuses an arc', () => {
    expect(getCharacter('nami')?.name.en).toBe('Nami')
    // Exists in the archive, but `/characters/alabasta` is not a page.
    expect(getCharacter('alabasta')).toBeUndefined()
    expect(getCharacter('nobody')).toBeUndefined()
  })
})

describe('routePositionOf', () => {
  it('places the first record at the start with nothing before it', () => {
    const first = route[0]
    if (first === undefined) throw new Error('empty route')
    const position = routePositionOf(first)

    expect(position.index).toBe(0)
    expect(position.total).toBe(entities.length)
    expect(position.previous).toBeUndefined()
    expect(position.next).toBe(route[1])
  })

  it('names the records either side of a waypoint in route order', () => {
    const sanji = getCharacter('sanji')
    if (sanji === undefined) throw new Error('no sanji')
    const position = routePositionOf(sanji)

    expect(position.previous?.id).toBe('going-merry')
    expect(position.next?.id).toBe('dracule-mihawk')
  })
})

describe('nearbyCharacters', () => {
  it('returns the closest listed characters by episode, never the character itself', () => {
    const luffy = getCharacter('monkey-d-luffy')
    if (luffy === undefined) throw new Error('no luffy')
    const near = nearbyCharacters(luffy, 3).map((c) => c.id)

    expect(near).toEqual(['roronoa-zoro', 'shanks', 'buggy'])
    expect(near).not.toContain('monkey-d-luffy')
  })

  it('leaves out characters that are not listed', () => {
    const law = getCharacter('trafalgar-law')
    if (law === undefined) throw new Error('no law')

    // Kid is filed at the same episode as Law but is not one of the twenty.
    expect(nearbyCharacters(law, 20).map((c) => c.id)).not.toContain(
      'eustass-kid',
    )
  })
})

describe('search', () => {
  const luffy = getCharacter('monkey-d-luffy')
  if (luffy === undefined) throw new Error('no luffy')

  it('folds case and diacritics', () => {
    expect(foldName('Rùfy')).toBe('rufy')
    expect(foldName('NAMI')).toBe('nami')
  })

  it('matches everything on an empty query and marks nothing', () => {
    expect(matchName(luffy, '   ', 'en')).toEqual({
      matches: true,
      highlight: null,
    })
  })

  it('finds a name in the shown locale and says where to mark it', () => {
    expect(matchName(luffy, 'luf', 'en')).toEqual({
      matches: true,
      highlight: [10, 13],
    })
  })

  it('finds a name written in the other locale but marks nothing', () => {
    // An Italian reader who knows him as Luffy still finds Rufy.
    expect(matchName(luffy, 'luffy', 'it')).toEqual({
      matches: true,
      highlight: null,
    })
  })

  it('does not match a name that is not there', () => {
    expect(matchName(luffy, 'zoro', 'en').matches).toBe(false)
  })
})
