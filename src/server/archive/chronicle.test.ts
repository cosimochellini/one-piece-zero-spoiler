import { describe, expect, it } from 'vitest'

import type { Story, Timeline } from '~/data/types'
import type { Bookmark } from '~/lib/progress/episode'
import type { CharacterChronicle, ChronicleEntry } from '~/lib/view/records'

import { chronicleFrom, type Reader, segmentsOf } from './chronicle.server'

const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })

/** The two names a hand-written archive files, in both locales. */
const NAMES: Readonly<Record<string, Readonly<Record<'en' | 'it', string>>>> = {
  'koby': { it: 'Kobi', en: 'Koby' },
  'roronoa-zoro': { it: 'Roronoa Zoro', en: 'Roronoa Zoro' },
}

function reader(locale: 'en' | 'it'): Reader {
  return { locale, resolve: (id) => NAMES[id]?.[locale] }
}

/** The stories of a chronicle, or a failure when the reader got the note. */
function storiesOf(found: CharacterChronicle): readonly ChronicleEntry[] {
  if (found.mode !== 'chronicle') {
    throw new Error('the reader was given the chapter note')
  }

  return found.entries
}

const chronicle: Timeline<Story> = [
  {
    episode: 1,
    value: {
      title: { it: 'Una botte', en: 'A barrel' },
      body: {
        it: 'Esce da una botte davanti a [[koby|Kobi]].',
        en: 'He climbs out of a barrel in front of [[koby]].',
      },
    },
  },
  {
    episode: 3,
    value: {
      title: { it: 'Il primo compagno', en: 'The first mate' },
      body: {
        it: 'Libera [[roronoa-zoro|Zoro]] dal palo.',
        en: 'He frees [[roronoa-zoro|Zoro]] from the post.',
      },
    },
  },
  {
    episode: 45,
    value: {
      title: { it: 'La taglia', en: 'The bounty' },
      body: { it: 'Il primo manifesto.', en: 'The first poster.' },
    },
  },
]

describe('the stories a bookmark reaches', () => {
  it('gives every story reached, in order, and none not yet reached', () => {
    const stories = storiesOf(chronicleFrom(chronicle, ep(3), reader('en')))

    expect(stories.map((entry) => entry.episode)).toStrictEqual([1, 3])
    expect(stories[0]?.title).toBe('A barrel')
  })

  it('resolves a season bookmark to its episode before reading them', () => {
    // S04E38 is episode 130.
    const stories = storiesOf(
      chronicleFrom(
        chronicle,
        { mode: 'season', season: 4, episode: 38 },
        reader('en'),
      ),
    )

    expect(stories).toHaveLength(3)
  })

  it('answers in the reader’s locale, links included', () => {
    expect(chronicleFrom(chronicle, ep(1), reader('it'))).toStrictEqual({
      mode: 'chronicle',
      entries: [
        {
          episode: 1,
          title: 'Una botte',
          body: [
            { kind: 'text', text: 'Esce da una botte davanti a ' },
            { kind: 'link', id: 'koby', name: 'Kobi' },
            { kind: 'text', text: '.' },
          ],
        },
      ],
    })
  })

  it('reaches none of them for a reader who counts in chapters', () => {
    expect(
      chronicleFrom(
        chronicle,
        { mode: 'chapter', chapter: 1000 },
        reader('en'),
      ),
    ).toStrictEqual({ mode: 'chapterNote' })
  })

  it('reaches none of them with no bookmark at all', () => {
    expect(chronicleFrom(chronicle, null, reader('en'))).toStrictEqual({
      mode: 'chronicle',
      entries: [],
    })
  })

  it('has nothing to say for a dossier with no chronicle', () => {
    expect(chronicleFrom(undefined, ep(1000), reader('en'))).toStrictEqual({
      mode: 'chronicle',
      entries: [],
    })
  })
})

describe('the markers in a story', () => {
  const { resolve } = reader('en')

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
