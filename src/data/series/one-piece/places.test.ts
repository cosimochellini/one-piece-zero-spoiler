import { byNumber } from 'sort-es'
import { describe, expect, it } from 'vitest'

import type { Entity } from '~/data/types'
import { LOCALES } from '~/i18n/locales'

import { getEntity } from './entities'
import {
  getPlace,
  PLACE_DOSSIERS,
  places,
  shipDossierOf,
  ships,
} from './places'
import { SHIP_DOSSIERS } from './records/ships'

describe('the ship’s log', () => {
  // The rules every series' places follow are in `~/data/archive.test.ts`.
  it('opens with the five East Blue ports of call', () => {
    expect(places.slice(0, 5).map((place) => place.id)).toStrictEqual([
      'shells-town',
      'foosha-village',
      'orange-town',
      'syrup-village',
      'baratie',
    ])
  })

  it('files a log entry only for a place', () => {
    for (const id of Object.keys(PLACE_DOSSIERS)) {
      expect(getPlace(id), id).toBeDefined()
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

  it('opens every fate at the ship’s threshold, in every locale', () => {
    // The row must not be its own spoiler: a fate that began at the episode
    // of the loss would announce the loss by appearing.
    for (const ship of ships) {
      const fate = shipDossierOf(ship)?.fate ?? []

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
})

describe('getPlace', () => {
  it('finds a place and refuses a character', () => {
    expect(getPlace('baratie')?.name.en).toBe('Baratie')
    expect(getPlace('sanji')).toBeUndefined()
    expect(getPlace('nowhere')).toBeUndefined()
  })
})
