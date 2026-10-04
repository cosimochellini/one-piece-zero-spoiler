import { byString } from 'sort-es'
import { describe, expect, it } from 'vitest'

import { type Locale, LOCALES } from '~/i18n/locales'
import { FIRST_EPISODE } from '~/lib/progress/episode'
import { tokenize } from '~/lib/prose/markers'

import { CHARACTER_DOSSIERS, getCharacter } from './characters'
import { entities, getEntity } from './entities'
import { PLACE_DOSSIERS, SHIP_DOSSIERS } from './places'
import { gateOf } from './reveal'
import type { Entity, LocalizedText, Story, Timeline } from './types'

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

/** Whether a value is a string in every locale, which is a text to scan. */
function isLocalized(value: unknown): value is LocalizedText {
  return (
    typeof value === 'object'
    && value !== null
    && LOCALES.every((locale) => typeof Reflect.get(value, locale) === 'string')
  )
}

/** Whether a value is a story: a title and a body, each a text. */
function isStory(value: unknown): value is Story {
  return (
    typeof value === 'object'
    && value !== null
    && isLocalized(Reflect.get(value, 'body'))
    && isLocalized(Reflect.get(value, 'title'))
  )
}

/** A story as one text: its title and its paragraph. */
function told({ body, title }: Story): LocalizedText {
  return { en: `${title.en} ${body.en}`, it: `${title.it} ${body.it}` }
}

/** The text a dated entry carries, or `undefined` for a fact that is not prose. */
function textOf(value: unknown): LocalizedText | undefined {
  if (isLocalized(value)) {
    return value
  }

  return isStory(value) ? told(value) : undefined
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
  timeline: Timeline<unknown>,
): readonly Text[] {
  return timeline.flatMap((entry) => {
    const text = textOf(entry.value)
    if (text === undefined) {
      return []
    }

    const gate = gateOf(entry, owner)

    return [
      {
        chapter: gate.revealedAtChapter,
        episode: gate.revealedAtEpisode,
        label: `${owner.id}.${field}@${String(entry.episode)}`,
        owner,
        text,
      },
    ]
  })
}

/** Whether a dossier field is a timeline: an array of dated entries. */
function isTimeline(value: unknown): value is Timeline<unknown> {
  return Array.isArray(value) && value.every((entry: unknown) => isDated(entry))
}

/** Whether a value is a dated entry: an object with an episode. */
function isDated(entry: unknown): boolean {
  return (
    typeof entry === 'object'
    && entry !== null
    && typeof Reflect.get(entry, 'episode') === 'number'
  )
}

/**
 * Every text one dossier prints, found by shape rather than by name: a field
 * that is a text in every locale is frozen at the threshold, a timeline is
 * dated entry by entry, and anything else (a status, a bounty, a fruit id)
 * is not prose. A field added to a dossier is scanned the day it is added.
 */
function textsOf(owner: Entity, dossier: object): readonly Text[] {
  return Object.entries(dossier).flatMap(([field, value]) => {
    if (isLocalized(value)) {
      return [frozen(owner, field, value)]
    }

    return isTimeline(value) ? dated(owner, field, value) : []
  })
}

const DOSSIERS: readonly Readonly<Record<string, object>>[] = [
  CHARACTER_DOSSIERS,
  PLACE_DOSSIERS,
  SHIP_DOSSIERS,
]

const TEXTS: readonly Text[] = [
  ...entities.map((entity) => frozen(entity, 'summary', entity.summary)),
  ...DOSSIERS.flatMap((dossiers) => {
    return Object.entries(dossiers).flatMap(([id, dossier]) =>
      textsOf(filed(id), dossier),
    )
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
  { chapter, episode }: Text,
  locale: Locale,
): boolean {
  return entities.some((met) => {
    return (
      met.id !== other.id
      && met.revealedAtEpisode <= episode
      && met.revealedAtChapter <= chapter
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

/** The records a text names in one locale that it should not. */
function leaked(text: Text, locale: Locale, facts: boolean): readonly Entity[] {
  const { episode } = text
  // Reduced to words once, not once per record it is scanned for.
  const words = asWords(shownWords(text.text[locale], locale))

  // A name can only be in the text if its first word is, which rules out
  // nearly every record before the slow substring scan.
  const tokens = new Set(words.split(' '))

  return filedAfter(text)
    .filter((other) => !facts || other.commonWord !== true)
    .filter((other) => !facts || episode < (other.nameSaidAt ?? Infinity))
    .filter((other) => tokens.has(firstWord(other, locale)))
    .filter((other) => words.includes(nameWords(other, locale)))
    .filter((other) => !sharesAReachedName(other, text, locale))
}

/**
 * Every record every text names too early, as `label (locale) names id`
 * lines, with the name facts on the records honoured or, for the test that
 * checks the facts themselves, ignored.
 */
function leaks(facts: boolean): readonly string[] {
  return TEXTS.flatMap((text) => {
    return LOCALES.flatMap((locale) => {
      return leaked(text, locale, facts).map(
        (other) => `${text.label} (${locale}) names ${other.id}`,
      )
    })
  })
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
    expect(leaks(true)).toStrictEqual([])
  }, 15_000)
})

/** Whether two records go by the same name in some locale, as the scan sees it. */
function namesakes(entity: Entity, other: Entity): boolean {
  return LOCALES.some((locale) => entity.name[locale] === other.name[locale])
}

/** Every pair of records that share a name in some locale, each pair once. */
const NAMESAKES: readonly (readonly [Entity, Entity])[] = entities.flatMap(
  (entity) => {
    return entities
      .filter((other) => other.id > entity.id && namesakes(entity, other))
      .map((other) => [entity, other] as const)
  },
)

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

  it('agree between records that share a name', () => {
    // The scan matches names, not ids: two records called Marineford, the
    // arc and the place, are one name to it, and the stricter fact would
    // silently govern both. Same name, same fact.
    for (const [entity, other] of NAMESAKES) {
      const pair = `${entity.id} / ${other.id}`

      expect(other.nameSaidAt, pair).toBe(entity.nameSaidAt)
      expect(other.commonWord, pair).toBe(entity.commonWord)
    }
  })

  it('are each the reason some text passes', () => {
    // A fact nobody needs is a scan switched off for nothing: with the
    // facts ignored, every record that carries one must be named too early
    // by at least one text. One that is not has outlived its reason, and
    // comes off the record.
    const flagged = new Set(
      leaks(false).map((line) => line.slice(line.lastIndexOf(' ') + 1)),
    )
    const unneeded = entities
      .filter(
        (entity) =>
          entity.commonWord === true || entity.nameSaidAt !== undefined,
      )
      .filter((entity) => !flagged.has(entity.id))
      .map((entity) => entity.id)

    expect(unneeded).toStrictEqual([])
  }, 15_000)
})
