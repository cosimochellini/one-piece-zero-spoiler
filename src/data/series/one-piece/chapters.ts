import type { Dated, Entity, OwnedTimeline } from '~/data/types'

import { FIELDS, timelineOf } from './chapter-table'
import { entities } from './entities'

/** One dated entry of the archive, with the record whose timeline holds it. */
export interface DatedEntry {
  entry: Dated<unknown>
  label: string
  owner: Entity
}

/**
 * Every timeline in the archive: the character dossiers' fields, the ships'
 * fates and the redrawings, read off the field table. One data test holds
 * them all to the same order.
 */
export const TIMELINES: OwnedTimeline[] = entities.flatMap((owner) => {
  return FIELDS.flatMap((field) => {
    const timeline = timelineOf(owner, field)
    const label = `${owner.id}.${field}`

    return timeline === undefined ? [] : { field, label, owner, timeline }
  })
})

/** Every dated entry in the archive, flattened out of `TIMELINES`. */
export const DATED: DatedEntry[] = TIMELINES.flatMap(({ owner, timeline }) => {
  return timeline.map((entry) => {
    const label = `${owner.id} @${String(entry.episode)}`

    return { entry, owner, label }
  })
})
