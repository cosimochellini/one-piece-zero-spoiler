import { describe, expect, it, vi } from 'vitest'

import { filedArchiveOf, SERIES } from '~/data/series'
import type { Entity, PlaceDossier, SeriesArchive } from '~/data/types'
import { placeWordsOf } from '~/lib/view/placeWords'
import { OTHER_SLUG } from '~/test/otherSeries'

import { placePage } from './placePage.server'
import { placesPage } from './places.server'
import { readerFor } from './reader.server'

// Imported inside the factory, which runs before this file's imports do.
vi.mock(import('~/lib/view/placeWords'), async (importOriginal) => {
  const { withOtherSeries } = await import('~/test/otherSeries')
  return withOtherSeries(await importOriginal())
})

const base = await filedArchiveOf('hunter-x-hunter')

const tower: Entity = {
  id: 'trick-tower',
  kind: 'place',
  revealedAtEpisode: 3,
  revealedAtChapter: 3,
  name: { en: 'Trick Tower', it: 'Torre dei Trucchi' },
  summary: { en: 'A tower.', it: 'Una torre.' },
  visual: { art: 'hunter-exam-arc', tint: 'yellow' },
}

const filed: PlaceDossier = {
  form: 'tower',
  region: 'yorbia',
  arc: 'hunter-exam-arc',
  landmark: { en: 'No door', it: 'Nessuna porta' },
  log: { en: 'The exam goes down.', it: 'L’esame scende.' },
  filedHere: [],
}

/** A series with one place, filed under this dossier, in its own words. */
function archiveFiledIn(dossier: PlaceDossier): SeriesArchive {
  const [first, ...rest] = base.sagas
  if (first === undefined) {
    throw new Error('The fixture needs a saga')
  }
  const entities = [...base.entities, tower]

  return {
    ...base,
    series: { ...base.series, slug: OTHER_SLUG },
    entities,
    getEntity: (id) => entities.find((entity) => entity.id === id),
    places: [tower],
    getPlace: (id) => (id === tower.id ? tower : undefined),
    placeDossierOf: (entity) => (entity.id === tower.id ? dossier : undefined),
    sagas: [{ ...first, entries: [...first.entries, tower] }, ...rest],
  }
}

function readerAt(archive: SeriesArchive): ReturnType<typeof readerFor> {
  return readerFor(archive, { mode: 'episode', episode: 26 }, 'en')
}

describe('a series filed in its own place words', () => {
  it('sends its places page and a place’s page in them', () => {
    const r = readerAt(archiveFiledIn(filed))

    expect(placesPage(r).open).toMatchObject([
      { id: 'trick-tower', sea: 'yorbia', form: 'tower', chart: null },
    ])

    const page = placePage('trick-tower', r)

    expect(page).toMatchObject({
      detail: {
        chart: null,
        slot: {
          open: true,
          record: { dossier: { sea: 'yorbia', form: 'tower' } },
        },
      },
    })
  })

  it('fails on a word outside its own, One Piece’s included', () => {
    const r = readerAt(archiveFiledIn({ ...filed, region: 'east-blue' }))

    expect(() => placesPage(r)).toThrow(
      /other-series print no region called 'east-blue'/u,
    )
    expect(() => placePage('trick-tower', r)).toThrow(
      /other-series print no region called 'east-blue'/u,
    )
  })
})

describe('the place words', () => {
  it.each(SERIES.map(({ slug }) => slug))('%s has its own', (slug) => {
    expect(placeWordsOf(slug)).toBeDefined()
  })

  it('draws One Piece’s world map for One Piece alone', () => {
    expect(SERIES.filter(({ slug }) => placeWordsOf(slug).chart)).toMatchObject(
      [{ slug: 'one-piece' }],
    )
  })
})
