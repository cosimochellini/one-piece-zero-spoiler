import { chartPointOf } from '~/data/series/one-piece/chart'
import { latestOf } from '~/data/series/one-piece/dated'
import { getEntity } from '~/data/series/one-piece/entities'
import {
  placeDossierOf,
  places,
  shipDossierOf,
  ships,
} from '~/data/series/one-piece/places'
import { sagas } from '~/data/series/one-piece/sagas'
import type { Entity } from '~/data/types'
import type { Locale } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { PlacesView, SagaPick, StopView } from '~/lib/view/places'
import type { PortView, RecordView, ShipView, Slot } from '~/lib/view/records'

import { deferredOf, namedOf, recordOf } from './project.server'
import { type Reader, readerFor } from './reader.server'

/**
 * What the places page and a peeked port are allowed to know. Plain
 * functions like the rest of `pages.server.ts`, kept apart for length.
 */

/**
 * The places page: the stops the reader has reached, each as the chart and
 * the index draw it, the ones past the bookmark as fog, and the ships.
 */
export function placesPage(bookmark: Bookmark, locale: Locale): PlacesView {
  const r = readerFor(bookmark, locale)
  const { covered, open, total } = r.split(places, stopOf)

  return {
    ships: reachedShips(r).map((entity) => shipOf(entity, r)),
    filed: total,
    // The drawings are most of the stops' bytes, and only the first few ship
    // with them; the rest are asked for as the index nears them.
    open: open.map((stop, index) =>
      index < INLINE_STOPS ? stop : deferredOf(stop),
    ),
    sagas: sagasOf(open, locale),
    covered,
  }
}

/** The sagas these stops are filed under, in route order, named. */
function sagasOf(open: StopView[], locale: Locale): SagaPick[] {
  const picks: SagaPick[] = []
  for (const saga of SAGA_PICKS) {
    if (open.some((stop) => stop.saga === saga.number)) {
      picks.push({ number: saga.number, title: saga.name[locale] })
    }
  }

  return picks
}

/** Every saga by its place in route order, from 1, and the places it files. */
const SAGA_PICKS = sagas.map((saga, at) => ({
  number: at + 1,
  name: saga.name,
  ids: new Set(saga.entries.map((entry) => entry.id)),
}))

/**
 * The saga a place is filed under, by its place in route order from 1. A
 * data test holds that every place is filed under one.
 */
export function sagaNumberOf(id: string): number {
  const saga = SAGA_PICKS.find(({ ids }) => ids.has(id))
  if (saga === undefined) {
    throw new Error(`${id} is filed under no saga`)
  }

  return saga.number
}

/**
 * One stop the reader has reached, as the chart and the index draw it. A
 * data test holds that every place has a dossier and is filed under a saga.
 */
function stopOf(entity: Entity, r: Reader): StopView {
  const dossier = placeDossierOf(entity)
  if (dossier === undefined) {
    throw new Error(`${entity.id} has no dossier`)
  }

  return {
    ...recordOf(entity, r),
    ...namedOf(entity, r),
    chart: chartPointOf(entity.id),
    sea: dossier.sea,
    form: dossier.form,
    saga: sagaNumberOf(entity.id),
  }
}

/** How many stops ship their drawings with them. */
const INLINE_STOPS = 3

/**
 * The ships the reader has reached, in their order. Only those: a covered
 * second ship would tell a reader at the start that the first one does not
 * last.
 */
export function reachedShips(r: Reader): Entity[] {
  return r
    .order(ships)
    .filter((entity) => shipDossierOf(entity) !== undefined && r.sees(entity))
}

/**
 * One port, with its dossier resolved: the arc named outright (an arc opens
 * no later than any place filed under it, which a data test holds), and each
 * record filed here with its own fog already decided.
 */
export function portOf(entity: Entity, r: Reader): PortView {
  const dossier = placeDossierOf(entity)
  const arc = dossier === undefined ? undefined : getEntity(dossier.arc)
  const { locale } = r

  return {
    ...recordOf(entity, r),
    summary: entity.summary[locale],
    chart: chartPointOf(entity.id),
    dossier:
      dossier === undefined ? null : (
        {
          sea: dossier.sea,
          form: dossier.form,
          arc: arc === undefined ? null : arc.name[locale],
          landmark: dossier.landmark[locale],
          log: dossier.log[locale],
          filedHere: dossier.filedHere.flatMap<Slot<RecordView>>((filed) => {
            const record = getEntity(filed)
            return record === undefined ? [] : [r.slot(record, recordOf)]
          }),
        }
      ),
  }
}

/**
 * One ship, with her entry resolved: the place she is received at named
 * outright (it opens no later than the ship, which a data test holds), and
 * the latest fate and the places the reader has reached, and nothing later.
 * A data test holds that every ship has a dossier.
 */
export function shipOf(entity: Entity, r: Reader): ShipView {
  const dossier = shipDossierOf(entity)
  if (dossier === undefined) {
    throw new Error(`${entity.id} has no dossier`)
  }
  const { locale } = r
  const fate = latestOf(r, entity, 'fate')?.[locale]

  return {
    ...recordOf(entity, r),
    summary: entity.summary[locale],
    dossier: {
      builder: dossier.builder[locale],
      launched: getEntity(dossier.launched)?.name[locale] ?? null,
      log: dossier.log[locale],
      ...(fate !== undefined && { fate }),
      ports: (dossier.ports ?? []).flatMap((arrival) => {
        const place = getEntity(arrival.place)
        return place !== undefined && r.sees(place) ? [recordOf(place, r)] : []
      }),
    },
  }
}
