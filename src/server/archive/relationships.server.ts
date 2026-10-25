import { byNumber, byValue } from 'sort-es'

import type { Entity, Opened, Relationship } from '~/data/types'
import type {
  RelationshipStageView,
  RelationshipView,
} from '~/lib/view/relationships'

import type { Reader } from './reader.server'

/** Reached snapshots in the unit the reader uses for their history. */
type Snapshots = Opened<Relationship[]>[]

/**
 * A selected person's reached changes, in order. Repeating an unchanged pair
 * while updating someone else does not invent a turning point for this pair.
 */
function historyOf(
  person: Entity,
  snapshots: Snapshots,
  r: Reader,
): RelationshipStageView[] {
  const history: RelationshipStageView[] = []
  for (const { chapter, episode, gate, source, value } of snapshots) {
    const relation = value.find(({ character }) => character === person.id)
    if (relation === undefined) {
      continue
    }
    const type = relation.type[r.locale]
    const summary = relation.summary[r.locale]
    const last = history.at(-1)
    if (last?.type === type && last.summary === summary) {
      continue
    }
    history.push({
      key: `${String(episode)}:${String(chapter ?? gate.revealedAtChapter)}:${source ?? 'both'}`,
      revealedAtEpisode: Math.max(
        gate.revealedAtEpisode,
        person.revealedAtEpisode,
      ),
      revealedAtChapter: Math.max(
        gate.revealedAtChapter,
        person.revealedAtChapter,
      ),
      summary,
      type,
    })
  }
  return history
}

/**
 * The current snapshot and history are cut on the server, including source
 * and both endpoint gates. No future stage is sent to a closed disclosure.
 */
export function relationshipsOf(entity: Entity, r: Reader): RelationshipView[] {
  if (!r.sees(entity)) {
    return []
  }
  const snapshots = r.archive
    .reachedOf(r, entity, 'relationships')
    .toSorted(byValue(({ gate }) => r.threshold(gate), byNumber()))
  return (snapshots.at(-1)?.value ?? []).flatMap(
    ({ character, summary, type }) => {
      const person = r.archive.getCharacter(character)
      return person === undefined || !r.sees(person) ?
          []
        : {
            history: historyOf(person, snapshots, r),
            person: { id: person.id, name: person.name[r.locale] },
            summary: summary[r.locale],
            type: type[r.locale],
          }
    },
  )
}
