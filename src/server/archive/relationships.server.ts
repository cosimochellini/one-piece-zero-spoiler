import type { Entity } from '~/data/types'
import type { RelationshipView } from '~/lib/view/relationships'

import type { Reader } from './reader.server'

/**
 * The latest reached relationship snapshot. Its own dated gate protects the
 * connection even when both people are already known. The source-filtered
 * lookup and both endpoint gates are checked before any name or text leaves.
 */
export function relationshipsOf(entity: Entity, r: Reader): RelationshipView[] {
  if (!r.sees(entity)) {
    return []
  }

  return (r.archive.latestOf(r, entity, 'relationships') ?? []).flatMap(
    ({ character, summary, type }) => {
      const person = r.archive.getCharacter(character)
      return person === undefined || !r.sees(person) ?
          []
        : {
            person: { id: person.id, name: person.name[r.locale] },
            summary: summary[r.locale],
            type: type[r.locale],
          }
    },
  )
}
