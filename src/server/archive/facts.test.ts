import { describe, expect, it } from 'vitest'

import { getCharacter } from '~/data/characters'
import type { Entity } from '~/data/types'
import type { Locale } from '~/i18n/locales'

import { factsOf } from './project.server'
import { type Reader, readerFor } from './reader.server'

function ep(episode: number, locale: Locale = 'en'): Reader {
  return readerFor({ mode: 'episode', episode }, locale)
}

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
const VIVI = onFile('nefertari-vivi')
const GAN_FALL = onFile('gan-fall')

/**
 * Which fact the reader has reached. This is the half of the old
 * `CharacterFacts` test that was never about rendering: a fact above the
 * reader's episode used not to be in the DOM, and is now not in the payload.
 */
describe('the facts a bookmark reaches', () => {
  it('opens Hatchan’s officer caption at his record’s chapter', () => {
    const hatchan = onFile('hatchan')

    for (const locale of ['en', 'it'] as const) {
      const officer =
        locale === 'en' ?
          'Arlong Pirates, officer'
        : 'Pirati di Arlong, ufficiale'
      const crewman = locale === 'en' ? 'Arlong Pirates' : 'Pirati di Arlong'

      expect(factsOf(hatchan, ep(32, locale))).toMatchObject({
        affiliation: crewman,
      })
      expect(factsOf(hatchan, ep(33, locale))).toMatchObject({
        affiliation: officer,
      })
      expect(
        factsOf(hatchan, readerFor({ mode: 'chapter', chapter: 73 }, locale)),
      ).not.toHaveProperty('affiliation')
      expect(
        factsOf(hatchan, readerFor({ mode: 'chapter', chapter: 74 }, locale)),
      ).toMatchObject({ affiliation: officer })
    }
  })

  it('gives each fact as the reader knows it, and no fact not yet learned', () => {
    const found = factsOf(LUFFY, ep(3))

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
    expect(factsOf(LUFFY, ep(127))).toMatchObject({ bounty: 30_000_000 })
    expect(factsOf(LUFFY, ep(128))).toMatchObject({ bounty: 100_000_000 })
  })

  it('gives the state the reader has reached and never a later one', () => {
    // The episode before the fall and the episode of it: the pair is the whole
    // promise of the field, since a death is the one fact a wiki gives away.
    expect(factsOf(PELL, ep(124))).toMatchObject({ status: 'alive' })
    expect(factsOf(PELL, ep(125))).toMatchObject({ status: 'presumed-dead' })
  })

  it.each([
    [1080, 'alive'],
    [1081, 'missing'],
    [1105, 'missing'],
    [1106, 'alive'],
  ])('gives Vivi’s status at episode %i as %s', (episode, status) => {
    expect(factsOf(VIVI, ep(episode))).toMatchObject({ status })
  })

  it.each([
    [1053, 'alive'],
    [1054, 'missing'],
    [1073, 'missing'],
    [1074, 'alive'],
  ])('gives Vivi’s status at chapter %i as %s', (chapter, status) => {
    const reader = readerFor({ mode: 'chapter', chapter }, 'en')

    expect(factsOf(VIVI, reader)).toMatchObject({ status })
  })

  it.each([
    [177, 'Knight of the Sky'],
    [178, 'Knight of the Sky'],
    [194, 'Knight of the Sky'],
    [195, 'God of Skypiea, restored'],
  ])(
    'gives Gan Fall’s affiliation at episode %i as %s',
    (episode, affiliation) => {
      expect(factsOf(GAN_FALL, ep(episode))).toMatchObject({ affiliation })
    },
  )

  it.each([
    [301, 'Knight of the Sky'],
    [302, 'God of Skypiea, restored'],
  ])(
    'gives Gan Fall’s affiliation at chapter %i as %s',
    (chapter, affiliation) => {
      const reader = readerFor({ mode: 'chapter', chapter }, 'en')

      expect(factsOf(GAN_FALL, reader)).toMatchObject({ affiliation })
    },
  )

  it.each(['holy', 'yama'])(
    'keeps %s’s fate behind the exile episode and chapter',
    (id) => {
      const character = onFile(id)

      expect(factsOf(character, ep(192))).toMatchObject({ status: 'alive' })
      expect(factsOf(character, ep(193))).toMatchObject({ status: 'unknown' })
      expect(
        factsOf(character, readerFor({ mode: 'chapter', chapter: 299 }, 'en')),
      ).toMatchObject({ status: 'alive' })
      expect(
        factsOf(character, readerFor({ mode: 'chapter', chapter: 300 }, 'en')),
      ).toMatchObject({ status: 'unknown' })
    },
  )

  it.each(['charlotte-linlin', 'kaido', 'prometheus', 'napoleon'])(
    'keeps %s’s post-Wano fate behind its episode and chapter',
    (id) => {
      const character = onFile(id)

      for (const locale of ['en', 'it'] as const) {
        expect(factsOf(character, ep(1076, locale))).toMatchObject({
          status: 'alive',
        })
        expect(factsOf(character, ep(1077, locale))).toMatchObject({
          status: 'unknown',
        })
        expect(factsOf(character, ep(1100, locale))).toMatchObject({
          status: 'unknown',
        })
        expect(
          factsOf(
            character,
            readerFor({ mode: 'chapter', chapter: 1049 }, locale),
          ),
        ).toMatchObject({ status: 'alive' })
        expect(
          factsOf(
            character,
            readerFor({ mode: 'chapter', chapter: 1050 }, locale),
          ),
        ).toMatchObject({ status: 'unknown' })
        expect(
          factsOf(
            character,
            readerFor({ mode: 'chapter', chapter: 1100 }, locale),
          ),
        ).toMatchObject({ status: 'unknown' })
      }
    },
  )

  it.each([
    {
      id: 'sabo',
      episodes: [
        [1088, 'alive'],
        [1089, 'unknown'],
        [1115, 'unknown'],
        [1116, 'alive'],
      ],
      chapters: [
        [1059, 'alive'],
        [1060, 'unknown'],
        [1081, 'unknown'],
        [1082, 'alive'],
      ],
    },
    {
      id: 'jean-bart',
      episodes: [
        [1114, 'alive'],
        [1115, 'unknown'],
      ],
      chapters: [
        [1080, 'alive'],
        [1081, 'unknown'],
      ],
    },
  ] as const)(
    'follows $id’s uncertain fate in both units and locales',
    ({ id, episodes, chapters }) => {
      const character = onFile(id)

      for (const locale of ['en', 'it'] as const) {
        for (const [episode, status] of episodes) {
          expect(factsOf(character, ep(episode, locale))).toMatchObject({
            status,
          })
        }
        for (const [chapter, status] of chapters) {
          expect(
            factsOf(character, readerFor({ mode: 'chapter', chapter }, locale)),
          ).toMatchObject({ status })
        }
      }
    },
  )

  it.each(['en', 'it'] as const)(
    'waits for Garp’s confirmed capture in both units (%s)',
    (locale) => {
      const garp = onFile('monkey-d-garp')
      const marks = [
        { bookmark: { mode: 'episode', episode: 1121 }, status: 'alive' },
        { bookmark: { mode: 'episode', episode: 1122 }, status: 'unknown' },
        { bookmark: { mode: 'episode', episode: 1155 }, status: 'unknown' },
        { bookmark: { mode: 'episode', episode: 1156 }, status: 'captured' },
        { bookmark: { mode: 'chapter', chapter: 1087 }, status: 'alive' },
        { bookmark: { mode: 'chapter', chapter: 1088 }, status: 'unknown' },
        { bookmark: { mode: 'chapter', chapter: 1125 }, status: 'unknown' },
        { bookmark: { mode: 'chapter', chapter: 1126 }, status: 'captured' },
      ] as const

      for (const { bookmark, status } of marks) {
        const affiliation =
          locale === 'en' ? 'Marines, vice admiral' : 'Marina, viceammiraglio'
        const captor =
          locale === 'en' ?
            ', captured by the Blackbeard Pirates'
          : ', catturato dai Pirati di Barbanera'

        expect(factsOf(garp, readerFor(bookmark, locale))).toMatchObject({
          status,
          affiliation: affiliation + (status === 'captured' ? captor : ''),
        })
      }
    },
  )

  it.each(['en', 'it'] as const)(
    'says Wyper’s land was once Jaya only from episode 166 and chapter 253 (%s)',
    (locale) => {
      const wyper = onFile('wyper')
      const once =
        locale === 'en' ? 'Skypiea, once Jaya' : 'Skypiea, un tempo Jaya'
      const marks = [
        { bookmark: { mode: 'episode', episode: 165 }, origin: 'Skypiea' },
        { bookmark: { mode: 'episode', episode: 166 }, origin: once },
        { bookmark: { mode: 'chapter', chapter: 252 }, origin: 'Skypiea' },
        { bookmark: { mode: 'chapter', chapter: 253 }, origin: once },
      ] as const

      for (const { bookmark, origin } of marks) {
        expect(factsOf(wyper, readerFor(bookmark, locale))).toMatchObject({
          origin,
        })
      }
    },
  )

  it.each(['en', 'it'] as const)(
    'calls Wyper the Berserker only from episode 169 and chapter 256 (%s)',
    (locale) => {
      const wyper = onFile('wyper')
      const epithet = locale === 'en' ? 'the Berserker' : 'Il Berserker'
      const before = [
        { mode: 'episode', episode: 168 },
        { mode: 'chapter', chapter: 255 },
      ] as const
      const after = [
        { mode: 'episode', episode: 169 },
        { mode: 'chapter', chapter: 256 },
      ] as const

      for (const bookmark of before) {
        expect(factsOf(wyper, readerFor(bookmark, locale))).not.toHaveProperty(
          'epithet',
        )
      }
      for (const bookmark of after) {
        expect(factsOf(wyper, readerFor(bookmark, locale))).toMatchObject({
          epithet,
        })
      }
    },
  )

  it('answers in the reader’s locale', () => {
    expect(factsOf(LUFFY, ep(45, 'it'))).toMatchObject({
      epithet: 'Cappello di Paglia',
      affiliation: 'Pirati di Cappello di Paglia',
      devilFruit: [{ id: 'gum-gum-fruit', name: 'Frutto Gom Gom' }],
      // The state is an id rather than prose, so it is the same in both
      // languages and the page is what translates it.
      status: 'alive',
    })
  })
})
