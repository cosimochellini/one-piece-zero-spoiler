import { describe, expect, it } from 'vitest'

import { entities, getEntity } from '~/data/entities'
import type { Bookmark } from '~/lib/progress/episode'
import type { CoveredRecord, RecordView, Slot } from '~/lib/view/records'

import { handleOf } from './handle.server'
import {
  peekCharacter,
  peekDossier,
  peekPort,
  peekRecord,
  peekWaypoint,
} from './peek.server'

const law = 'trafalgar-law'
const lawHandle = handleOf(law)
// Held against the archive itself rather than against a copy of the sentence.
const lawSummary = getEntity(law)?.summary.en

/** The records filed at a port that the reader has reached. */
function openAt(filed: readonly Slot<RecordView>[]): readonly RecordView[] {
  return filed.flatMap((slot) => (slot.open ? [slot.record] : []))
}

/** The little a port may say about the records filed there it has not. */
function coveredAt(
  filed: readonly Slot<RecordView>[],
): readonly CoveredRecord[] {
  return filed.flatMap((slot) => (slot.open ? [] : [slot.covered]))
}

/**
 * The reader lifting the fog on one record by hand. It answers whatever the
 * bookmark says, which is the point: this is the escape hatch, not a leak in
 * the fog. What it must not do is answer to anything but a handle it minted.
 */
describe('a record lifted by hand', () => {
  it('answers a handle with the shape the veil it belongs to renders', () => {
    expect(peekWaypoint(lawHandle, 'en', null)).toMatchObject({
      id: law,
      kind: 'character',
      name: 'Trafalgar Law',
    })
    expect(peekWaypoint(lawHandle, 'en', null)?.summary).toBe(lawSummary)
    expect(peekCharacter(lawHandle, 'en', null)).not.toHaveProperty('summary')
    expect(peekDossier(lawHandle, 'en', null)?.summary).toBe(lawSummary)
    expect(peekRecord(lawHandle, 'en', null)).not.toHaveProperty('role')
  })

  it('answers in the locale the page asked for', () => {
    const drawing = peekWaypoint(lawHandle, 'it', null)
    const record = getEntity(law)

    expect(drawing?.name).toBe(record?.name.it)
    expect(JSON.stringify(drawing)).not.toContain(record?.summary.en)
  })

  it('sends the strokes rather than the drawing’s key', () => {
    const drawing = peekWaypoint(lawHandle, 'en', null)?.visual

    // The keys of the drawing table are the record ids, which are the name
    // slugs, so a key would spell the name the fog was for.
    expect(drawing?.strokes.length).toBeGreaterThan(3)
    expect(JSON.stringify(drawing)).not.toContain(law)
  })

  it('keeps the fog on the records a lifted port files', () => {
    // Lifting the fog on one entry is not lifting it on everything the entry
    // mentions: a swordsman who reaches the restaurant four episodes after
    // the crew does stays covered beside an open one.
    const early: Bookmark = { mode: 'episode', episode: 20 }
    const baratie = peekPort(handleOf('baratie'), 'en', early)
    const filed = baratie?.dossier?.filedHere ?? []
    const reached = openAt(filed)
    const stillFogged = coveredAt(filed)

    expect(filed.length).toBeGreaterThan(0)
    // One under fog beside an open one is the case under test.
    expect(stillFogged.length).toBeGreaterThan(0)

    for (const record of reached) {
      expect(record.revealedAtEpisode).toBeLessThanOrEqual(20)
    }
    for (const covered of stillFogged) {
      expect(covered).not.toHaveProperty('id')
    }
  })

  it('answers nothing at all to anything it did not mint', () => {
    for (const rubbish of ['', 'nami', 'zzzzzz', '-1', '../etc']) {
      expect(peekWaypoint(rubbish, 'en', null), rubbish).toBeUndefined()
      expect(peekCharacter(rubbish, 'en', null), rubbish).toBeUndefined()
      expect(peekRecord(rubbish, 'en', null), rubbish).toBeUndefined()
      expect(peekDossier(rubbish, 'en', null), rubbish).toBeUndefined()
      expect(peekPort(rubbish, 'en', null), rubbish).toBeUndefined()
    }
  })

  it('resolves every handle the archive can mint', () => {
    for (const entity of entities) {
      expect(peekRecord(handleOf(entity.id), 'en', null)?.id, entity.id).toBe(
        entity.id,
      )
    }
  })
})
