import { LOCALES } from '~/i18n/locales'
import { EPISODE_CEILING, type Bookmark } from '~/lib/progress/episode'

import {
  bookSections,
  CHARACTER_DOSSIERS,
  characters,
  chart,
  chartWith,
  dossierOf,
  FEATURED_CHARACTER_IDS,
  featuredCharacters,
  foldName,
  getCharacter,
  matchName,
  nearbyCharacters,
  routePositionOf,
} from './characters'
import { entities } from './entities'
import type { Entity, LocalizedText, Timeline } from './types'

const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })
const ch = (chapter: number): Bookmark => ({ mode: 'chapter', chapter })

function must(id: string): Entity {
  const entity = getCharacter(id)
  if (entity === undefined) throw new Error(`no character ${id}`)
  return entity
}

describe('the featured list', () => {
  it('lists exactly thirty-six distinct characters that all exist', () => {
    expect(FEATURED_CHARACTER_IDS).toHaveLength(36)
    expect(new Set(FEATURED_CHARACTER_IDS).size).toBe(36)
    for (const id of FEATURED_CHARACTER_IDS) {
      expect(getCharacter(id)?.kind, id).toBe('character')
    }
    expect(featuredCharacters).toHaveLength(36)
  })

  it('keeps them in route order, not in ranking order', () => {
    const thresholds = featuredCharacters.map((c) => c.revealedAtEpisode)

    expect(thresholds).toEqual([...thresholds].sort((a, b) => a - b))
  })
})

describe('the dossiers', () => {
  it('give every character a dossier with a role and a log in every locale', () => {
    for (const character of characters) {
      const dossier = dossierOf(character)
      expect(dossier, character.id).toBeDefined()
      for (const locale of LOCALES) {
        expect(dossier?.role[locale].length, character.id).toBeGreaterThan(0)
        expect(dossier?.log[locale].length, character.id).toBeGreaterThan(0)
      }
    }
  })

  it('has no dossier for a record that is not a character', () => {
    for (const other of entities.filter((e) => e.kind !== 'character')) {
      expect(CHARACTER_DOSSIERS[other.id]).toBeUndefined()
    }
    for (const id of Object.keys(CHARACTER_DOSSIERS)) {
      expect(getCharacter(id), id).toBeDefined()
    }
  })

  it('files every timeline in order, from the threshold on, within the dial', () => {
    const check = (
      character: Entity,
      field: string,
      timeline: Timeline<unknown> | undefined,
    ) => {
      if (timeline === undefined) return
      const label = `${character.id}.${field}`
      expect(timeline.length, label).toBeGreaterThan(0)
      for (const [index, entry] of timeline.entries()) {
        expect(Number.isInteger(entry.episode), label).toBe(true)
        expect(entry.episode, label).toBeGreaterThanOrEqual(
          character.revealedAtEpisode,
        )
        expect(entry.episode, label).toBeLessThanOrEqual(EPISODE_CEILING)
        const previous = timeline[index - 1]
        if (previous !== undefined) {
          expect(entry.episode, label).toBeGreaterThan(previous.episode)
        }
      }
    }
    const text = (
      character: Entity,
      field: string,
      timeline: Timeline<LocalizedText> | undefined,
    ) => {
      check(character, field, timeline)
      for (const entry of timeline ?? []) {
        for (const locale of LOCALES) {
          expect(
            entry.value[locale].length,
            `${character.id}.${field}`,
          ).toBeGreaterThan(0)
        }
      }
    }

    for (const character of characters) {
      const dossier = dossierOf(character)
      if (dossier === undefined) continue
      text(character, 'affiliation', dossier.affiliation)
      text(character, 'origin', dossier.origin)
      text(character, 'epithet', dossier.epithet)
      text(character, 'devilFruit', dossier.devilFruit)
      check(character, 'bounty', dossier.bounty)
      for (const entry of dossier.bounty ?? []) {
        expect(Number.isInteger(entry.value), character.id).toBe(true)
        expect(entry.value, character.id).toBeGreaterThan(0)
      }
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

describe('the chart', () => {
  it('draws every arc, place and ship and only the featured characters', () => {
    const others = entities.filter((e) => e.kind !== 'character')
    for (const other of others) {
      expect(chart.map((e) => e.id)).toContain(other.id)
    }
    const drawn = chart.filter((e) => e.kind === 'character')
    expect(drawn.map((e) => e.id).sort()).toEqual(
      [...FEATURED_CHARACTER_IDS].sort(),
    )
  })

  it('is in threshold order', () => {
    const thresholds = chart.map((e) => e.revealedAtEpisode)
    expect(thresholds).toEqual([...thresholds].sort((a, b) => a - b))
  })

  it('is itself for a record already drawn', () => {
    expect(chartWith(must('nami'))).toBe(chart)
  })

  it('orders the chart by chapter when asked', () => {
    const byChapter = chartWith(must('nami'), 'chapter')
    const chapters = byChapter.map((e) => e.revealedAtChapter)
    expect(chapters).toEqual([...chapters].sort((a, b) => a - b))
    expect(byChapter).toHaveLength(chart.length)
  })

  it('sets an undrawn record in at its threshold, after its contemporaries', () => {
    const perona = must('perona')
    expect(chart.map((e) => e.id)).not.toContain('perona')

    const drawn = chartWith(perona)
    const index = drawn.findIndex((e) => e.id === 'perona')
    expect(drawn).toHaveLength(chart.length + 1)
    expect(drawn[index - 1]?.revealedAtEpisode).toBeLessThanOrEqual(340)
    expect(drawn[index + 1]?.revealedAtEpisode).toBeGreaterThan(340)
    // Brook is filed at 339, one episode before her, so he comes first.
    expect(drawn[index - 1]?.id).toBe('brook')
  })
})

describe('the shelves', () => {
  it('shelve every character exactly once, in route order', () => {
    const shelved = bookSections.flatMap((s) => s.characters.map((c) => c.id))
    expect(shelved.sort()).toEqual(characters.map((c) => c.id).sort())

    const opens = bookSections.map((s) => s.arc.revealedAtEpisode)
    expect(opens).toEqual([...opens].sort((a, b) => a - b))
  })

  it('never puts a character under a heading that opens after them', () => {
    for (const section of bookSections) {
      expect(section.arc.kind).toBe('arc')
      for (const character of section.characters) {
        expect(section.arc.revealedAtEpisode, character.id).toBeLessThanOrEqual(
          character.revealedAtEpisode,
        )
      }
    }
  })

  it('shelves the East Blue crew under the East Blue saga', () => {
    const eastBlue = bookSections.find((s) => s.arc.id === 'east-blue')
    expect(eastBlue?.characters.map((c) => c.id)).toContain('monkey-d-luffy')
    expect(eastBlue?.characters.map((c) => c.id)).toContain('smoker')
    expect(eastBlue?.characters.map((c) => c.id)).not.toContain('crocodile')
  })
})

describe('routePositionOf', () => {
  it('places the first record at the start with nothing before it', () => {
    const first = chart[0]
    if (first === undefined) throw new Error('empty chart')
    const position = routePositionOf(first)

    expect(position.index).toBe(0)
    expect(position.total).toBe(chart.length)
    expect(position.previous).toBeUndefined()
    expect(position.next).toBe(chart[1])
  })

  it('names the records either side of a waypoint in route order', () => {
    const position = routePositionOf(must('sanji'))

    // Baratie is filed at the same episode as Sanji, right after him.
    expect(position.previous?.id).toBe('going-merry')
    expect(position.next?.id).toBe('baratie')
  })

  it('counts an undrawn character among the chart it is set into', () => {
    const position = routePositionOf(must('perona'))

    expect(position.total).toBe(chart.length + 1)
    expect(position.previous?.id).toBe('brook')
  })

  it('counts along whatever order it is handed', () => {
    const shanks = must('shanks')

    // Fourth episode of the anime, first chapter of the manga: on the manga's
    // route only records filed at chapter 1 come before or beside him.
    const byEpisode = routePositionOf(shanks).index
    const byChapter = routePositionOf(shanks, chartWith(shanks, 'chapter'))
    expect(byChapter.index).toBeLessThan(byEpisode)
    expect(byChapter.total).toBe(chart.length)
    for (const before of chartWith(shanks, 'chapter').slice(
      0,
      byChapter.index,
    )) {
      expect(before.revealedAtChapter).toBeLessThanOrEqual(1)
    }
  })
})

describe('nearbyCharacters', () => {
  it('returns the closest listed characters by episode, never the character itself', () => {
    const near = nearbyCharacters(must('monkey-d-luffy'), 3).map((c) => c.id)

    expect(near).toEqual(['koby', 'roronoa-zoro', 'shanks'])
    expect(near).not.toContain('monkey-d-luffy')
  })

  it('leaves out characters that are not listed', () => {
    // Kid is filed at the same episode as Law but is not featured.
    expect(
      nearbyCharacters(must('trafalgar-law'), 36).map((c) => c.id),
    ).not.toContain('eustass-kid')
  })
})

describe('search', () => {
  const luffy = must('monkey-d-luffy')

  it('folds case and diacritics', () => {
    expect(foldName('Rùfy')).toBe('rufy')
    expect(foldName('NAMI')).toBe('nami')
  })

  it('matches everything on an empty query and marks nothing', () => {
    expect(matchName(luffy, '   ', 'en', ep(1))).toEqual({
      matches: true,
      highlight: null,
    })
  })

  it('finds a name in the shown locale and says where to mark it', () => {
    expect(matchName(luffy, 'luf', 'en', ep(1))).toEqual({
      matches: true,
      highlight: [10, 13],
    })
  })

  it('finds a name written in the other locale but marks nothing', () => {
    // An Italian reader who knows him as Luffy still finds Rufy.
    expect(matchName(luffy, 'luffy', 'it', ep(1))).toEqual({
      matches: true,
      highlight: null,
    })
  })

  it('does not match a name that is not there', () => {
    expect(matchName(luffy, 'zoro', 'en', ep(1)).matches).toBe(false)
  })

  it('finds an epithet only once the reader has reached it', () => {
    const newgate = must('edward-newgate')

    expect(matchName(newgate, 'barbabianca', 'en', ep(152)).matches).toBe(true)
    expect(matchName(newgate, 'whitebeard', 'it', ep(1200)).matches).toBe(true)
    expect(matchName(newgate, 'whitebeard', 'en', ep(151)).matches).toBe(false)
    expect(matchName(newgate, 'whitebeard', 'en', null).matches).toBe(false)
    // Epithets are dated in episodes: a chapter bookmark searches names only.
    expect(matchName(newgate, 'whitebeard', 'en', ch(1000)).matches).toBe(false)
    expect(matchName(newgate, 'newgate', 'en', ch(1000)).matches).toBe(true)
  })
})
