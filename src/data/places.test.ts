import { byNumber } from 'sort-es'
import { describe, expect, it } from 'vitest'

import { LOCALES } from '~/i18n/locales'
import { expectTimelineInOrder } from '~/test/timelines'

import { chapterAtEpisode } from './chapters'
import { entities, getEntity } from './entities'
import {
  getPlace,
  PLACE_DOSSIERS,
  placeDossierOf,
  places,
  SHIP_DOSSIERS,
  shipDossierOf,
  ships,
} from './places'
import type { Entity } from './types'

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

    expect(thresholds).toStrictEqual(thresholds.toSorted(byNumber()))
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

/** A record the archive is known to file, or the test is wrong. */
function filed(id: string): Entity {
  const entity = getEntity(id)
  if (entity === undefined) {
    throw new Error(`${id} is not filed`)
  }

  return entity
}

/** Every place a ship reaches, beside the ship that reaches it. */
const ARRIVALS = ships.flatMap((ship) => {
  const ports = shipDossierOf(ship)?.ports ?? []
  return ports.map((arrival) => ({ arrival, ship }))
})

describe('the ships', () => {
  it('gives every ship a dossier in every locale, and nothing else one', () => {
    expect(ships.map((ship) => ship.id)).toStrictEqual([
      'going-merry',
      'thousand-sunny',
    ])

    for (const ship of ships) {
      const dossier = shipDossierOf(ship)

      expect(dossier, ship.id).toBeDefined()

      for (const locale of LOCALES) {
        expect(dossier?.builder[locale].length).toBeGreaterThan(0)
        expect(dossier?.log[locale].length).toBeGreaterThan(0)
      }
    }

    for (const id of Object.keys(SHIP_DOSSIERS)) {
      expect(getEntity(id)?.kind, id).toBe('ship')
    }
  })

  it('opens every fate at the ship’s threshold, in order, in every locale', () => {
    // The row must not be its own spoiler: a fate that began at the episode
    // of the loss would announce the loss by appearing.
    for (const ship of ships) {
      const fate = shipDossierOf(ship)?.fate ?? []

      expectTimelineInOrder(fate, ship.revealedAtEpisode, ship.id)

      expect(fate[0]?.episode, ship.id).toBe(ship.revealedAtEpisode)

      for (const entry of fate) {
        for (const locale of LOCALES) {
          expect(entry.value[locale].length, ship.id).toBeGreaterThan(0)
        }
      }
    }
  })

  it('names where she is received only once that place is open', () => {
    // The place is printed outright beside the ship, so it must open no
    // later than the ship does, in either unit.
    for (const ship of ships) {
      const launched = getEntity(shipDossierOf(ship)?.launched ?? '')

      expect(launched?.kind, ship.id).toBe('place')
      expect(launched?.revealedAtEpisode).toBeLessThanOrEqual(
        ship.revealedAtEpisode,
      )
      expect(launched?.revealedAtChapter).toBeLessThanOrEqual(
        ship.revealedAtChapter,
      )
    }
  })

  it('lists the places she reaches after her own threshold, in order', () => {
    for (const ship of ships) {
      const ports = (shipDossierOf(ship)?.ports ?? []).map((arrival) =>
        filed(arrival.place),
      )
      const thresholds = ports.map((port) => port.revealedAtEpisode)

      const distinct = new Set(ports)

      expect(distinct.size, ship.id).toBe(ports.length)
      expect(thresholds).toStrictEqual(thresholds.toSorted(byNumber()))

      for (const port of ports) {
        expect(port.kind, port.id).toBe('place')
        expect(port.revealedAtEpisode, port.id).toBeGreaterThanOrEqual(
          ship.revealedAtEpisode,
        )
        expect(port.revealedAtChapter, port.id).toBeGreaterThanOrEqual(
          ship.revealedAtChapter,
        )
      }
    }
  })

  it('opens each place she reaches no sooner than she arrives there', () => {
    // A place that opened before her arrival would put the tile in front of
    // a reader who has not seen her go there, in either unit.
    expect(ARRIVALS.length).toBeGreaterThan(0)

    for (const { arrival, ship } of ARRIVALS) {
      const place = filed(arrival.place)

      expect(arrival.episode, arrival.place).toBeGreaterThanOrEqual(
        ship.revealedAtEpisode,
      )
      expect(place.revealedAtEpisode, arrival.place).toBeGreaterThanOrEqual(
        arrival.episode,
      )
      expect(place.revealedAtChapter, arrival.place).toBeGreaterThanOrEqual(
        arrival.chapter,
      )
    }
  })

  it('dates the Merry’s fate at 18, 233 and 312', () => {
    const fate = shipDossierOf(filed('going-merry'))?.fate ?? []

    expect(fate.map((entry) => entry.episode)).toStrictEqual([18, 233, 312])
  })

  it('keeps each dated entry from a manga reader until its chapter', () => {
    // [episode, the chapter the manga tells it in]: the keel verdict in 328,
    // the Merry's farewell in 430 (an anchor in `~/data/chapters` holds it),
    // the Sunny's name in 439. A chapter that reached the episode sooner
    // would show the entry to a reader who has not read it.
    for (const [episode, told] of [
      [233, 328],
      [312, 430],
      [324, 439],
    ] as const) {
      expect(chapterAtEpisode(episode), String(episode)).toBeGreaterThanOrEqual(
        told,
      )
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
