import { chapterTable } from '~/data/chapterTable'
import { anchorsOf, datedArchive, filedTimelines } from '~/data/dated'
import type {
  CharacterDossier,
  Entity,
  Relationship,
  SeriesArchive,
  Timeline,
} from '~/data/types'
import type { Source } from '~/lib/progress/spoiler'
import { OP_ARCHIVE } from '~/test/archive'

/** A tiny real dated-field archive, independent of the pilot's cast. */
export function relationshipArchive({
  source,
  targetSource,
  targetOpens = 2,
  snapshots,
}: {
  snapshots?: Timeline<Relationship[]>
  source?: Source
  targetOpens?: number
  targetSource?: Source
} = {}): SeriesArchive {
  const text = { en: 'A connection.', it: 'Un legame.' }
  const owner: Entity = {
    id: 'owner',
    kind: 'character',
    name: { en: 'Owner', it: 'Persona' },
    revealedAtEpisode: 3,
    revealedAtChapter: 4,
    summary: text,
    visual: { art: 'owner', tint: 'yellow' },
  }
  const target: Entity = {
    ...owner,
    id: 'target',
    name: { en: 'Target', it: 'Altra persona' },
    revealedAtEpisode: targetOpens,
    revealedAtChapter: targetOpens,
    ...(targetSource !== undefined && { source: targetSource }),
  }
  const relationship: Relationship = {
    character: target.id,
    type: text,
    summary: text,
  }
  const dossier: CharacterDossier = {
    affiliation: [],
    log: text,
    role: text,
    relationships: snapshots ?? [
      {
        episode: 5,
        chapter: 7,
        ...(source !== undefined && { source }),
        value: [relationship],
      },
    ],
  }
  const entities = [owner, target, { ...owner, id: 'other' }]
  const filed = filedTimelines({ [owner.id]: dossier })
  const { gateOf } = chapterTable({
    anchors: anchorsOf(entities, filed),
    records: entities,
    chapterCeiling: 20,
    episodeCeiling: 20,
  })
  return {
    ...OP_ARCHIVE,
    ...datedArchive({ characters: entities, entities, filed, gateOf }),
    entities,
    characters: entities,
    getCharacter: (id) => entities.find((entity) => entity.id === id),
    getEntity: (id) => entities.find((entity) => entity.id === id),
    dossierOf: (entity) => (entity.id === owner.id ? dossier : undefined),
  }
}
