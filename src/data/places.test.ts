import { describe, expect, it } from 'vitest'

import { LOCALES } from '~/i18n/locales'

import { entities, getEntity } from './entities'
import { getPlace, PLACE_DOSSIERS, placeDossierOf, places } from './places'

describe('the ship’s log', () => {
  it('lists every place record, in the order the ship reaches them', () => {
    const placeIds = entities
      .filter((entity) => entity.kind === 'place')
      .map((entity) => entity.id)

    expect(places.map((place) => place.id)).toHaveLength(placeIds.length)
    expect(new Set(places.map((place) => place.id))).toStrictEqual(
      new Set(placeIds),
    )

    const thresholds = places.map((place) => place.revealedAtEpisode)

    expect(thresholds).toStrictEqual(thresholds.toSorted((a, b) => a - b))
  })

  it('opens with the five East Blue ports of call', () => {
    expect(places.slice(0, 5).map((place) => place.id)).toStrictEqual([
      'shells-town',
      'foosha-village',
      'orange-town',
      'syrup-village',
      'baratie',
    ])
  })

  it('gives every place a dossier in every locale, and nothing else one', () => {
    for (const place of places) {
      const dossier = placeDossierOf(place)

      expect(dossier, place.id).toBeDefined()

      for (const locale of LOCALES) {
        expect(dossier?.landmark[locale].length).toBeGreaterThan(0)
        expect(dossier?.log[locale].length).toBeGreaterThan(0)
      }
    }

    for (const id of Object.keys(PLACE_DOSSIERS)) {
      expect(getPlace(id), id).toBeDefined()
    }
  })

  it('files each place under an arc that opens no later than the place', () => {
    // A place revealed before its arc would name the arc in its dossier while
    // the arc itself is still under fog.
    for (const place of places) {
      const arc = getEntity(placeDossierOf(place)?.arc ?? '')

      expect(arc?.kind, place.id).toBe('arc')
      expect(arc?.revealedAtEpisode).toBeLessThanOrEqual(
        place.revealedAtEpisode,
      )
      expect(arc?.revealedAtChapter).toBeLessThanOrEqual(
        place.revealedAtChapter,
      )
    }
  })

  it('files here only records the archive holds, none of them places', () => {
    for (const place of places) {
      const filedHere = placeDossierOf(place)?.filedHere ?? []

      for (const id of filedHere) {
        const record = getEntity(id)

        expect(record, `${place.id} → ${id}`).toBeDefined()
        expect(record?.kind).not.toBe('place')
      }
    }
  })
})

describe('getPlace', () => {
  it('finds a place and refuses a character', () => {
    expect(getPlace('baratie')?.name.en).toBe('Baratie')
    expect(getPlace('sanji')).toBeUndefined()
    expect(getPlace('nowhere')).toBeUndefined()
  })
})
