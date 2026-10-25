import { describe, expect, it, vi } from 'vitest'

import { filedArchiveOf, SERIES } from '~/data/series'
import type { Entity, PlaceDossier, SeriesArchive } from '~/data/types'
import { OTHER_SLUG } from '~/test/otherSeries'

import { placePage } from './placePage.server'
import { placesPage } from './places.server'
import { readerFor } from './reader.server'

// Imported inside the factory, which runs before this file's imports do.
vi.mock(import('~/data/series'), async (importOriginal) => {
  const { withOtherSeries } = await import('~/test/otherSeries')
  return withOtherSeries(await importOriginal())
})
vi.mock(import('~/server/copy.server'), async (importOriginal) => {
  const { withOtherCopy } = await import('~/test/otherSeries')
  return withOtherCopy(await importOriginal())
})

const base = await filedArchiveOf('hunter-x-hunter')

function place(id: string, episode: number): Entity {
  return {
    id,
    kind: 'place',
    revealedAtEpisode: episode,
    revealedAtChapter: episode,
    name: { en: id, it: id },
    summary: { en: 'A place.', it: 'Un luogo.' },
    visual: { art: 'hunter-exam-arc', tint: 'yellow' },
  }
}

const tower = place('trick-tower', 3)
const lake = place('lake-mobius', 60)

function dossierOf(region: string, form: string): PlaceDossier {
  return {
    form,
    region,
    arc: 'hunter-exam-arc',
    landmark: { en: 'No door', it: 'Nessuna porta' },
    log: { en: 'The exam goes down.', it: 'L’esame scende.' },
    filedHere: [],
  }
}

/**
 * A series without the world map, with two places in its own words, the
 * second far past the bookmark, and a point on the map for each all the
 * same, which no page of it may send.
 */
function archiveFiledIn(towerRegion = 'yorbia'): SeriesArchive {
  const [first, ...rest] = base.sagas
  if (first === undefined) {
    throw new Error('The fixture needs a saga')
  }
  const places = [tower, lake]
  const entities = [...base.entities, ...places]
  const dossiers = new Map([
    [tower.id, dossierOf(towerRegion, 'tower')],
    [lake.id, dossierOf('dark-continent', 'swamp')],
  ])

  return {
    ...base,
    series: { ...base.series, slug: OTHER_SLUG },
    entities,
    getEntity: (id) => entities.find((entity) => entity.id === id),
    places,
    getPlace: (id) => places.find((entity) => entity.id === id),
    placeDossierOf: (entity) => dossiers.get(entity.id),
    chartPointOf: () => ({ x: 10, y: 20 }),
    sagas: [{ ...first, entries: [...first.entries, ...places] }, ...rest],
  }
}

function readerAt(
  archive: SeriesArchive,
  locale: 'en' | 'it' = 'en',
): ReturnType<typeof readerFor> {
  return readerFor(archive, { mode: 'episode', episode: 26 }, locale)
}

describe('a series filed in its own place words', () => {
  it('sends its places page with the labels of the words it reached', () => {
    const page = placesPage(readerAt(archiveFiledIn()))

    expect(page.open).toMatchObject([
      { id: 'trick-tower', sea: 'yorbia', form: 'tower', chart: null },
    ])
    expect(page.ships).toStrictEqual([])
    expect(page.words).toStrictEqual({
      region: 'Continent',
      allRegions: 'All continents',
      regions: { yorbia: 'Yorbia' },
      forms: { tower: 'Tower' },
    })
  })

  it('never names a word only a place past the bookmark uses', () => {
    const r = readerAt(archiveFiledIn())
    const sent = JSON.stringify([
      placesPage(r),
      placePage('trick-tower', r),
      placePage('lake-mobius', r),
    ])

    expect(sent).not.toMatch(/dark-continent|Dark Continent|swamp|Swamp/u)
  })

  it('sends a place’s page with its own labels and no map', () => {
    const r = readerAt(archiveFiledIn(), 'it')

    expect(placePage('trick-tower', r)).toMatchObject({
      detail: {
        chart: null,
        slot: {
          open: true,
          record: {
            chart: null,
            dossier: {
              sea: 'yorbia',
              form: 'tower',
              words: {
                region: 'Continente',
                regions: { yorbia: 'Yorbia' },
                forms: { tower: 'Torre' },
              },
            },
          },
        },
      },
    })
  })

  it('fails on a word outside its own, One Piece’s included', () => {
    const r = readerAt(archiveFiledIn('east-blue'))

    expect(() => placesPage(r)).toThrow(
      /other-series print no region called 'east-blue'/u,
    )
    expect(() => placePage('trick-tower', r)).toThrow(
      /other-series print no region called 'east-blue'/u,
    )
  })
})

describe('Hunter x Hunter’s place words', () => {
  it('go through the label path, in each locale', () => {
    expect(placesPage(readerAt(base)).words).toStrictEqual({
      region: 'Region',
      allRegions: 'All regions',
      regions: { islands: 'Islands', mainland: 'Mainland' },
      forms: {
        island: 'Island',
        port: 'Port town',
        city: 'City',
        wetland: 'Wetlands',
        forest: 'Forest preserve',
        mountain: 'Mountain',
      },
    })
    expect(placesPage(readerAt(base, 'it')).words).toStrictEqual({
      region: 'Regione',
      allRegions: 'Tutte le regioni',
      regions: { islands: 'Isole', mainland: 'Terraferma' },
      forms: {
        island: 'Isola',
        port: 'Città portuale',
        city: 'Città',
        wetland: 'Palude',
        forest: 'Riserva forestale',
        mountain: 'Montagna',
      },
    })
  })
})

describe('the world map', () => {
  it('is drawn for One Piece alone', () => {
    expect(
      SERIES.filter(({ description }) => description.features.worldMap),
    ).toMatchObject([{ slug: 'one-piece' }])
  })

  it('leaves One Piece’s pages unlabelled, its dictionaries label them', async () => {
    const onePiece = await filedArchiveOf('one-piece')

    expect(placesPage(readerAt(onePiece))).not.toHaveProperty('words')
  })
})
