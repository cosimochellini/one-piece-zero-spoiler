import { describe, expect, it } from 'vitest'

import { characters, dossierOf, getCharacter } from '~/data/characters'
import type { Entity } from '~/data/types'
import type { Locale } from '~/i18n/locales'

import { chronicleOf, type ResolveName, segmentsOf } from './chronicle.server'
import { type Reader, readerFor } from './reader.server'

function ep(episode: number, locale: Locale = 'en'): Reader {
  return readerFor({ mode: 'episode', episode }, locale)
}

/** The two names a hand-written paragraph links. */
const NAMES: Record<string, string> = {
  'koby': 'Koby',
  'roronoa-zoro': 'Roronoa Zoro',
}

const resolve: ResolveName = (id) => NAMES[id]

/** A character the archive is known to file, or the test is wrong. */
function onFile(id: string): Entity {
  const entity = getCharacter(id)
  if (entity === undefined) {
    throw new Error(`${id} is not filed`)
  }

  return entity
}

const LUFFY = onFile('monkey-d-luffy')
const LUFFYS = dossierOf(LUFFY)?.chronicle ?? []

describe('the stories a bookmark reaches', () => {
  it('gives every story reached, in order, and none not yet reached', () => {
    const third = LUFFYS[2]?.episode ?? 0
    const marks = chronicleOf(LUFFY, ep(third)).entries.map(
      (entry) => entry.revealedAtEpisode,
    )

    expect(marks).toStrictEqual(LUFFYS.slice(0, 3).map((s) => s.episode))
    expect(chronicleOf(LUFFY, ep(third - 1)).entries).toHaveLength(2)
  })

  it('answers in the reader’s locale', () => {
    const first = LUFFYS[0]
    const [entry] = chronicleOf(LUFFY, ep(first?.episode ?? 0, 'it')).entries

    expect(entry?.title).toBe(first?.value.title.it)
  })

  it('has nothing to say for a dossier with no chronicle', () => {
    const silent = characters.filter(
      (character) => dossierOf(character)?.chronicle === undefined,
    )

    expect(silent.length).toBeGreaterThan(0)

    for (const character of silent) {
      expect(chronicleOf(character, ep(1200)), character.id).toStrictEqual({
        mode: 'chronicle',
        entries: [],
      })
    }
  })
})

describe('the markers in a story', () => {
  it('prints the record’s own name for a bare marker', () => {
    expect(segmentsOf('Meets [[koby]] below deck.', resolve)).toStrictEqual([
      { kind: 'text', text: 'Meets ' },
      { kind: 'link', id: 'koby', name: 'Koby' },
      { kind: 'text', text: ' below deck.' },
    ])
  })

  it('prints the shown text when the marker gives one', () => {
    expect(segmentsOf('[[roronoa-zoro|Zoro]] waits.', resolve)).toStrictEqual([
      { kind: 'link', id: 'roronoa-zoro', name: 'Zoro' },
      { kind: 'text', text: ' waits.' },
    ])
  })

  it('falls back to plain text for an id the archive does not file', () => {
    // A dead link is worse than a name: the data tests hold that this never
    // happens, so the page fails closed rather than pointing at nothing.
    expect(
      segmentsOf('With [[nobody|a stranger]] and [[ghost]].', resolve),
    ).toStrictEqual([
      { kind: 'text', text: 'With ' },
      { kind: 'text', text: 'a stranger' },
      { kind: 'text', text: ' and ' },
      { kind: 'text', text: 'ghost' },
      { kind: 'text', text: '.' },
    ])
  })

  it('leaves a paragraph without markers as one run of text', () => {
    expect(segmentsOf('Nothing to link.', resolve)).toStrictEqual([
      { kind: 'text', text: 'Nothing to link.' },
    ])
  })

  it('leaves a bracket that is not a marker as words', () => {
    expect(segmentsOf('A [[Bad Marker]] and [[open', resolve)).toStrictEqual([
      { kind: 'text', text: 'A [[Bad Marker]] and [[open' },
    ])
  })

  it('still links the markers after a bracket that is not one', () => {
    // One slip in a paragraph must not cost it every link that follows.
    expect(
      segmentsOf('A [[Bad Marker]] then [[koby]].', resolve),
    ).toStrictEqual([
      { kind: 'text', text: 'A [[Bad Marker]] then ' },
      { kind: 'link', id: 'koby', name: 'Koby' },
      { kind: 'text', text: '.' },
    ])
  })
})
