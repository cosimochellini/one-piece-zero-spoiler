import type { Dated, Entity } from '~/data/types'

import { timelines } from './dated'

/** One dated entry of the archive, with the record whose timeline holds it. */
export interface DatedEntry {
  entry: Dated<unknown>
  label: string
  owner: Entity
}

/** Every dated entry in the archive, flattened out of its timelines (`./dated`). */
export const DATED: DatedEntry[] = timelines.flatMap(({ owner, timeline }) => {
  return timeline.map((entry) => {
    const label = `${owner.id} @${String(entry.episode)}`

    return { entry, owner, label }
  })
})
