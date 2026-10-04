import { byString } from 'sort-es'
import { describe, expect, it } from 'vitest'

import { type Locale, LOCALES } from '~/i18n/locales'
import { FIRST_EPISODE } from '~/lib/progress/episode'
import { tokenize } from '~/lib/prose/markers'

import { CHARACTER_DOSSIERS, getCharacter } from './characters'
import { entities, getEntity } from './entities'
import { PLACE_DOSSIERS, SHIP_DOSSIERS } from './places'
import { gateOf } from './reveal'
import type { Dated, Entity, LocalizedText, Story, Timeline } from './types'

/**
 * The one scan for a name said too early, over every text the archive
 * prints: the summaries, roles, logs, landmarks and builders frozen at a
 * record's threshold, and the affiliations, origins, epithets, chronicles
 * and ship fates dated after it. A text at episode 1 that wrote "Kaido" or
 * "Marineford" in passing would be a leak the walker in `slices.test.ts`
 * cannot see, because it only reads ids and names.
 *
 * What a text may say is decided by the records themselves: `nameSaidAt`
 * opens a name before its record, `commonWord` takes a name out of the scan
 * altogether. See `Entity` in `./types`.
 */

/** One text, the record it belongs to, and when a reader reaches it. */
type Text = {
  /** The chapter a reader reaches it at (`gateOf`). */
  readonly chapter: number
  readonly episode: number
  readonly label: string
  readonly owner: Entity
  readonly text: LocalizedText
}

/** A record the archive is known to file, or the test is wrong. */
function filed(id: string): Entity {
  const entity = getEntity(id)
  if (entity === undefined) {
    throw new Error(`${id} is not filed`)
  }

  return entity
}

/** A text frozen at its record's threshold, like the summary. */
function frozen(owner: Entity, field: string, text: LocalizedText): Text {
  return {
    chapter: owner.revealedAtChapter,
    episode: owner.revealedAtEpisode,
    label: `${owner.id}.${field}`,
    owner,
    text,
  }
}

/** The texts of a dated timeline, each reached at its own gate. */
function dated(
  owner: Entity,
  field: string,
  timeline: Timeline<LocalizedText> | undefined,
): readonly Text[] {
  return (timeline ?? []).map((entry) => {
    const gate = gateOf(entry, owner)

    return {
      chapter: gate.revealedAtChapter,
      episode: gate.revealedAtEpisode,
      label: `${owner.id}.${field}@${String(entry.episode)}`,
      owner,
      text: entry.value,
    }
  })
}

/** A story as one dated text: its title and its paragraph. */
function told(entry: Dated<Story>): Dated<LocalizedText> {
  const { body, title } = entry.value

  return {
    ...entry,
    value: { en: `${title.en} ${body.en}`, it: `${title.it} ${body.it}` },
  }
}

const TEXTS: readonly Text[] = [
  ...entities.map((entity) => frozen(entity, 'summary', entity.summary)),
  ...Object.entries(CHARACTER_DOSSIERS).flatMap(([id, dossier]) => {
    const owner = filed(id)

    return [
      frozen(owner, 'role', dossier.role),
      frozen(owner, 'log', dossier.log),
      ...dated(owner, 'affiliation', dossier.affiliation),
      ...dated(owner, 'origin', dossier.origin),
      ...dated(owner, 'epithet', dossier.epithet),
      ...dated(
        owner,
        'chronicle',
        dossier.chronicle?.map((entry) => told(entry)),
      ),
    ]
  }),
  ...Object.entries(PLACE_DOSSIERS).flatMap(([id, dossier]) => {
    const owner = filed(id)

    return [
      frozen(owner, 'landmark', dossier.landmark),
      frozen(owner, 'log', dossier.log),
    ]
  }),
  ...Object.entries(SHIP_DOSSIERS).flatMap(([id, dossier]) => {
    const owner = filed(id)

    return [
      frozen(owner, 'builder', dossier.builder),
      frozen(owner, 'log', dossier.log),
      ...dated(owner, 'fate', dossier.fate),
    ]
  }),
]

/** The words of a text with its markers reduced to the text they show. */
function shownWords(text: string, locale: Locale): string {
  return tokenize(text)
    .map((token) => {
      return token.kind === 'words' ?
          token.text
        : (token.marker.shown
            ?? getCharacter(token.marker.id)?.name[locale]
            ?? '')
    })
    .join('')
}

/** A text as whole words: punctuation dropped, one space between words. */
function asWords(text: string): string {
  return ` ${text.replaceAll(/[^\p{L}\p{N}]+/gu, ' ').trim()} `
}

/** Each record's name as words, per locale, reduced once for the whole scan. */
const NAME_WORDS = new Map<string, string>()

function nameWords(entity: Entity, locale: Locale): string {
  const key = `${locale}:${entity.id}`
  const known = NAME_WORDS.get(key)
  if (known !== undefined) {
    return known
  }

  const words = asWords(entity.name[locale])
  NAME_WORDS.set(key, words)
  return words
}

function firstWord(entity: Entity, locale: Locale): string {
  return nameWords(entity, locale).trim().split(' ', 1)[0] ?? ''
}

/**
 * Whether a record the reader has already reached goes by the same name, so
 * the name in a text is that record's and not a leak: the zombie dog
 * Cerberus is met at 339, Shamrock's sword of the same name only at 1168.
 */
function sharesAReachedName(
  other: Entity,
  episode: number,
  locale: Locale,
): boolean {
  return entities.some((met) => {
    return (
      met.revealedAtEpisode <= episode
      && met.name[locale] === other.name[locale]
    )
  })
}

/**
 * Every record filed after this text, which it may not name: characters, but
 * also the arcs, places, ships and fruits, whose names are as much a spoiler
 * as a person's — "Marineford" in a text at episode 400 says where the war
 * will be. A record's own texts are behind its own threshold already.
 */
function filedAfter({ chapter, episode, owner }: Text): readonly Entity[] {
  return entities.filter((other) => {
    return (
      other.id !== owner.id
      && (other.revealedAtEpisode > episode
        || other.revealedAtChapter > chapter)
    )
  })
}

/** Every later record one text names in one locale, as one line each. */
function leaksIn(text: Text, locale: Locale): readonly string[] {
  const { episode, label } = text
  // Reduced to words once, not once per record it is scanned for.
  const words = asWords(shownWords(text.text[locale], locale))

  // A name can only be in the text if its first word is, which rules out
  // nearly every record before the slow substring scan.
  const tokens = new Set(words.split(' '))

  return filedAfter(text)
    .filter((other) => other.commonWord !== true)
    .filter((other) => episode < (other.nameSaidAt ?? Infinity))
    .filter((other) => tokens.has(firstWord(other, locale)))
    .filter((other) => words.includes(nameWords(other, locale)))
    .filter((other) => !sharesAReachedName(other, episode, locale))
    .map((other) => `${label} (${locale}) names ${other.id}`)
}

describe('the texts', () => {
  it('cover every kind of text the archive prints', () => {
    const kinds = new Set(
      TEXTS.map(({ label }) =>
        label.replace(/^[^.]+\./u, '').replace(/@\d+$/u, ''),
      ),
    )

    expect([...kinds].toSorted(byString())).toStrictEqual([
      'affiliation',
      'builder',
      'chronicle',
      'epithet',
      'fate',
      'landmark',
      'log',
      'origin',
      'role',
      'summary',
    ])
  })

  // Scans every text against every record in every locale, so its runtime
  // grows with the archive; the default 5s budget has grown tight.
  it('name no record the reader has not reached, linked or not', () => {
    // Gathered first and asserted once, so a failure lists every leak in
    // the batch rather than the first one found.
    const leaks: string[] = []
    for (const text of TEXTS) {
      for (const locale of LOCALES) {
        leaks.push(...leaksIn(text, locale))
      }
    }

    expect(leaks).toStrictEqual([])
  }, 15_000)
})

describe('the name facts', () => {
  it('say a name only before its own record opens', () => {
    // A `nameSaidAt` at or after the threshold would change nothing, and is
    // a sign the threshold was moved without it.
    const said = entities.filter((entity) => entity.nameSaidAt !== undefined)

    expect(said.length).toBeGreaterThan(0)

    for (const entity of said) {
      const saidAt = entity.nameSaidAt ?? Infinity

      expect(Number.isSafeInteger(saidAt), entity.id).toBe(true)
      expect(saidAt, entity.id).toBeGreaterThanOrEqual(FIRST_EPISODE)
      expect(saidAt, entity.id).toBeLessThan(entity.revealedAtEpisode)
    }
  })
})
