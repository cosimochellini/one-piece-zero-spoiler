import { describe, expect, it } from 'vitest'

import type { CharacterDossier } from '~/data/types'
import type { Bookmark } from '~/lib/progress/episode'

import { factsFrom } from './project.server'

const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })

const dossier: CharacterDossier = {
  role: { it: 'Capitano', en: 'Captain' },
  log: { it: 'x', en: 'x' },
  affiliation: [
    { episode: 1, value: { it: 'Nessuna ciurma', en: 'No crew yet' } },
    {
      episode: 3,
      value: { it: 'Pirati di Cappello di Paglia', en: 'Straw Hat Pirates' },
    },
  ],
  origin: [
    { episode: 4, value: { it: 'Villaggio Fuschia', en: 'Foosha Village' } },
  ],
  epithet: [
    { episode: 45, value: { it: 'Cappello di Paglia', en: 'Straw Hat' } },
  ],
  bounty: [
    { episode: 45, value: 30_000_000 },
    { episode: 130, value: 100_000_000 },
  ],
  status: [
    { episode: 1, value: 'alive' },
    { episode: 130, value: 'presumed-dead' },
  ],
}

/**
 * Which fact the reader has reached. This is the half of the old
 * `CharacterFacts` test that was never about rendering: a fact above the
 * reader's episode used not to be in the DOM, and is now not in the payload.
 */
describe('the facts a bookmark reaches', () => {
  it('gives each fact as the reader knows it, and no fact not yet learned', () => {
    const found = factsFrom(dossier, 'en', ep(3))

    expect(found).toStrictEqual({
      mode: 'facts',
      affiliation: 'Straw Hat Pirates',
      status: 'alive',
    })
    // Origin (4), epithet (45) and bounty (45) are still ahead of the reader.
    expect(found).not.toHaveProperty('origin')
    expect(found).not.toHaveProperty('epithet')
    expect(found).not.toHaveProperty('bounty')
  })

  it('gives the latest bounty reached and never a later one', () => {
    expect(factsFrom(dossier, 'en', ep(100))).toMatchObject({
      bounty: 30_000_000,
    })
  })

  it('resolves a season bookmark to its episode before reading them', () => {
    // S04E38 is episode 130.
    expect(
      factsFrom(dossier, 'en', { mode: 'season', season: 4, episode: 38 }),
    ).toMatchObject({ bounty: 100_000_000, epithet: 'Straw Hat' })
  })

  it('gives the state the reader has reached and never a later one', () => {
    // The episode before the fall and the episode of it: the pair is the whole
    // promise of the field, since a death is the one fact a wiki gives away.
    expect(factsFrom(dossier, 'en', ep(129))).toMatchObject({ status: 'alive' })
    expect(factsFrom(dossier, 'en', ep(130))).toMatchObject({
      status: 'presumed-dead',
    })
  })

  it('answers in the reader’s locale', () => {
    expect(factsFrom(dossier, 'it', ep(130))).toMatchObject({
      epithet: 'Cappello di Paglia',
      affiliation: 'Pirati di Cappello di Paglia',
      // The state is an id rather than prose, so it is the same in both
      // languages and the page is what translates it.
      status: 'presumed-dead',
    })
  })

  it('reaches none of them for a reader who counts in chapters', () => {
    expect(
      factsFrom(dossier, 'en', { mode: 'chapter', chapter: 1000 }),
    ).toStrictEqual({ mode: 'chapterNote' })
  })

  it('reaches none of them with no bookmark at all', () => {
    expect(factsFrom(dossier, 'en', null)).toStrictEqual({ mode: 'facts' })
  })
})
