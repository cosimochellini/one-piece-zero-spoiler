import { latestOf } from '~/data/dated'
import { getEntity } from '~/data/entities'
import { placeDossierOf, places, shipDossierOf, ships } from '~/data/places'
import type { ShipDossier } from '~/data/records/ships'
import type { Entity } from '~/data/types'
import type { Locale } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type {
  CoveredRecord,
  PortView,
  RecordView,
  ShipView,
  Slot,
} from '~/lib/view/records'

import { deferredOf, recordOf } from './project.server'
import { type Reader, readerFor } from './reader.server'

/**
 * What the ship's log and a peeked port are allowed to know. A plain function
 * like the rest of `pages.server.ts`, and kept apart from it for length.
 */

/** The ship's log, and the ships that carry it. */
export function placesPage(
  bookmark: Bookmark,
  locale: Locale,
): {
  covered: CoveredRecord[]
  filed: number
  open: PortView[]
  ships: ShipView[]
} {
  const r = readerFor(bookmark, locale)
  const { covered, open, total } = r.split(places, portOf)

  return {
    // Only the ships the reader has reached: a covered second ship would
    // tell a reader at the start that the first one does not last.
    ships: r.order(ships).flatMap((entity) => {
      const dossier = shipDossierOf(entity)
      return dossier !== undefined && r.sees(entity) ?
          [shipOf(entity, dossier, r)]
        : []
    }),
    filed: total,
    // The drawings are most of the log's bytes, and only the first ports are
    // near the screen when it arrives: the rest come by id.
    open: open.map((port, index) =>
      index < INLINE_PORTS ? port : deferredPort(port),
    ),
    covered,
  }
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

/** How many ports ship their drawings, and their crew's, with them. */
const INLINE_PORTS = 3

/** A port with its plate's strokes and its crew's left behind. */
function deferredPort(port: PortView): PortView {
  return {
    ...deferredOf(port),
    dossier:
      port.dossier === null ?
        null
      : {
          ...port.dossier,
          filedHere: port.dossier.filedHere.map((slot) =>
            slot.open ? { open: true, record: deferredOf(slot.record) } : slot,
          ),
        },
  }
}

/**
 * One ship, with her entry resolved: the place she is received at named
 * outright (it opens no later than the ship, which a data test holds), and
 * the latest fate and the places the reader has reached, and nothing later.
 */
function shipOf(entity: Entity, dossier: ShipDossier, r: Reader): ShipView {
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
