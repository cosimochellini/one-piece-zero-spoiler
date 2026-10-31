import { byString } from 'sort-es'
import { describe, expect, it } from 'vitest'

import {
  type FillerEntry,
  type ReaderArchive,
  withFeatures,
} from '~/data/features'
import { toldIn } from '~/data/reveal'
import type {
  Entity,
  Field,
  LocalizedText,
  PlaceDossier,
  PlaceWords,
  Story,
} from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import { FIRST_CHAPTER, FIRST_EPISODE } from '~/lib/progress/episode'
import type { Source } from '~/lib/progress/spoiler'
import { tokenize } from '~/lib/prose/markers'
import { COPIES } from '~/server/copy.server'
import { expectedOf, LOADED_SERIES } from '~/test/series'

/**
 * The one scan for a name said too early, over every text an archive
 * prints, run for every series filed: the summaries, roles, logs, landmarks
 * and builders frozen at a record's threshold, and the affiliations with
 * their group labels, origins, epithets, chronicles, ship fates and place
 * visits dated after it, and the filler guide. A text at episode 1 that wrote
 * "Kaido" or "Marineford" in passing would be a leak the walker in
 * `slices.test.ts` cannot see, because it only reads ids and names.
 *
 * The texts are read through the archive contract, so a series' texts are
 * scanned the day it files them. What a text may say is decided by the
 * records themselves: `nameSaidAt` opens a name before its record,
 * `commonWord` takes a name out of the scan altogether. See `Entity` in
 * `./types`.
 */

/** One text, the record it belongs to, and when a reader reaches it. */
interface Text {
  /** The chapter a reader reaches it at (its gate, `datedOf`). */
  chapter: number
  episode: number
  label: string
  /** The record the text belongs to; a filler entry belongs to none. */
  owner: Pick<Entity, 'id'>
  /** The one source that tells it, if one alone does (its gate's). */
  source: Source | undefined
  text: LocalizedText
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

/** One text found in a value, and the path it was found at. */
interface Found {
  /** `''` for the value itself, else `.key` or `.index` steps. */
  path: string
  text: LocalizedText
}

/**
 * Every text a value holds, however deep: a text in every locale, or a story
 * as one text. A field that nests its prose (a list of texts, an object of
 * them) is scanned as much as one that is a text, so no shape a series files
 * can carry a name past the scan.
 */
function textsIn(value: unknown, path = ''): Found[] {
  if (isLocalized(value)) {
    return [{ path, text: value }]
  }
  if (isStory(value)) {
    return [{ path, text: told(value) }]
  }
  if (typeof value !== 'object' || value === null) {
    return []
  }

  return Object.entries(value).flatMap(([key, inner]) =>
    textsIn(inner, `${path}.${key}`),
  )
}

/** A text frozen at its record's threshold, like the summary. */
function frozen(owner: Entity, field: string, text: LocalizedText): Text {
  return {
    chapter: owner.revealedAtChapter,
    episode: owner.revealedAtEpisode,
    label: `${owner.id}.${field}`,
    owner,
    source: owner.source,
    text,
  }
}

/** The texts of one of a record's timelines, each reached at its own gate. */
function dated(archive: ReaderArchive, owner: Entity, field: Field): Text[] {
  return archive.datedOf(owner, field).flatMap((entry) => {
    return textsIn(entry.value).map(({ path, text }) => ({
      chapter: entry.gate.revealedAtChapter,
      episode: entry.gate.revealedAtEpisode,
      label: `${owner.id}.${field}${path}@${String(entry.episode)}`,
      owner,
      source: entry.gate.source,
      text,
    }))
  })
}

const DICTIONARIES: Record<Locale, Record<string, string>> = COPIES['one-piece']

/** The label a page prints for a group, or the test is wrong. */
function groupLabel(locale: Locale, id: string): string {
  const label = DICTIONARIES[locale][`faction.${id}`]
  if (label === undefined) {
    throw new Error(`no ${locale} label for the group ${id}`)
  }

  return label
}

/**
 * The group labels of a character's affiliation entries, each reached at its
 * entry's gate. A label is a dictionary string rather than prose, but a page
 * prints it for the entry all the same, so a label can leak a name the same
 * way.
 */
function factionTexts(archive: ReaderArchive, owner: Entity): Text[] {
  const filedEntries = archive.dossierOf(owner)?.affiliation ?? []

  return archive.datedOf(owner, 'affiliation').flatMap((entry, index) => {
    const factions = filedEntries[index]?.factions ?? []

    return factions.length === 0 ?
        []
      : {
          chapter: entry.gate.revealedAtChapter,
          episode: entry.gate.revealedAtEpisode,
          label: `${owner.id}.faction@${String(entry.episode)}`,
          owner,
          source: entry.gate.source,
          text: {
            en: factions.map((id) => groupLabel('en', id)).join('; '),
            it: factions.map((id) => groupLabel('it', id)).join('; '),
          },
        }
  })
}

/** A place's later visits, each note reached at its visit's own gate. */
function visitTexts(archive: ReaderArchive, owner: Entity): Text[] {
  return (archive.placeDossierOf(owner)?.visits ?? []).map((visit) => {
    const gate = archive.gateOf(visit, owner)

    return {
      chapter: gate.revealedAtChapter,
      episode: gate.revealedAtEpisode,
      label: `${owner.id}.visit@${String(visit.episode)}`,
      owner,
      source: gate.source,
      text: visit.value,
    }
  })
}

/**
 * Every frozen text a record's dossiers print, found by shape rather than by
 * name and however deep: every text is frozen at the threshold, except in the
 * fields read at their own gates (a timeline the archive lists, and a
 * place's visits). A field added to a dossier is scanned the day it is
 * added, and a dated field the archive does not list is scanned at the
 * threshold, which errs towards a reported leak rather than a missed one.
 */
function frozenTexts(
  archive: ReaderArchive,
  owner: Entity,
  gated: Set<string>,
): Text[] {
  const dossiers = [
    archive.dossierOf(owner),
    archive.placeDossierOf(owner),
    archive.shipDossierOf(owner),
  ]

  return dossiers.flatMap((dossier) => {
    return (
      Object.entries(dossier ?? {})
        // A gated field filed as a single value (a role no story changes) is
        // frozen like any other.
        .filter(([field, value]) => !gated.has(field) || !Array.isArray(value))
        .flatMap(([field, value]) =>
          textsIn(value, field).map(({ path, text }) =>
            frozen(owner, path, text),
          ),
        )
    )
  })
}

/**
 * A filler entry's title and line, each at the entry's own episode and the
 * chapter the anime had adapted by then. The page opens a chapter reader no
 * earlier than that chapter, so the scan holds the text to it.
 */
function fillerTexts(entry: FillerEntry): Text[] {
  const where =
    'episode' in entry ?
      `filler-${String(entry.episode)}`
    : `filler-after-${String(entry.after)}-${entry.released}`
  const episode = 'episode' in entry ? entry.episode : entry.after

  return (['title', 'summary'] as const).map((field) => {
    return {
      chapter: entry.chapter,
      episode,
      label: `${where}.${field}`,
      owner: { id: where },
      source: undefined,
      text: entry[field],
    }
  })
}

/** A label a series' own place words give a word, or the test is wrong. */
function labelOf(
  labels: Partial<Record<string, LocalizedText>>,
  word: string,
  place: Entity,
): LocalizedText {
  const label = labels[word]
  if (label === undefined) {
    throw new Error(`${place.id}: no label for ${word}`)
  }

  return label
}

/**
 * The labels of a place's region and form, for a series that labels its
 * words itself: the server sends them with the first open place that uses
 * them (`wordsOf` in `~/server/archive/printed.server.ts`), so each is
 * frozen at the place's threshold. A series whose copy labels them (One
 * Piece) sends none: its labels ship with every page of it whatever the
 * reader has reached, as the rest of the interface copy does, and are not a
 * text any record gates.
 */
function wordTexts(
  archive: ReaderArchive,
  words: PlaceWords,
  place: Entity,
): Text[] {
  const dossier = archive.placeDossierOf(place)
  if (dossier === undefined || words.dictionary) {
    return []
  }

  return [
    frozen(place, 'region', labelOf(words.regions, dossier.region, place)),
    frozen(place, 'form', labelOf(words.forms, dossier.form, place)),
  ]
}

/**
 * The headers of a series that labels its place words itself: what a region
 * is called and the picker's first option. The server sends them with the
 * places page at every bookmark (`wordsOf` in
 * `~/server/archive/printed.server.ts`), so each is read at the first
 * episode and chapter.
 */
function headerTexts(words: PlaceWords): Text[] {
  if (words.dictionary) {
    return []
  }

  return (['region', 'allRegions'] as const).map((field) => ({
    chapter: FIRST_CHAPTER,
    episode: FIRST_EPISODE,
    label: `place-words.${field}`,
    owner: { id: 'place-words' },
    source: undefined,
    text: words[field],
  }))
}

/**
 * Every line of a series' own copy (`~/server/copy.server`). The server
 * sends it with every page of the series at every bookmark, so each is read
 * at the first episode and chapter (#791). The faction labels are skipped:
 * One Piece sends them with every page of it, as every page's bundle did
 * before #791, and some name a record ("Thriller Bark Pirates"). Sending
 * them with the fruit album alone is a follow-up; `factionTexts` still reads
 * each at the affiliation that tags it.
 */
function copyTexts(slug: string): Text[] {
  const copies: Partial<
    Record<string, Record<Locale, Record<string, string>>>
  > = COPIES
  const copy = copies[slug]
  if (copy === undefined) {
    return []
  }

  const lines = Object.keys(copy.en).filter(
    (key) => !key.startsWith('faction.'),
  )
  return lines.map((key) => ({
    chapter: FIRST_CHAPTER,
    episode: FIRST_EPISODE,
    label: 'copy.copy',
    owner: { id: `copy:${key}` },
    source: undefined,
    text: { en: copy.en[key] ?? '', it: copy.it[key] ?? '' },
  }))
}

/** Every text an archive prints. */
function textsOf(archive: ReaderArchive, placeWords: PlaceWords): Text[] {
  const { entities } = archive
  // The dossier fields whose texts are read at their own gates below.
  const gated = new Set<string>([
    ...archive.timelines.map(({ field }) => field),
    'visits',
  ])

  return [
    ...entities.map((entity) => frozen(entity, 'summary', entity.summary)),
    ...entities.flatMap((entity) => frozenTexts(archive, entity, gated)),
    ...archive.timelines.flatMap(({ field, owner }) =>
      dated(archive, owner, field),
    ),
    ...entities.flatMap((entity) => factionTexts(archive, entity)),
    ...entities.flatMap((entity) => visitTexts(archive, entity)),
    ...archive.places.flatMap((place) => wordTexts(archive, placeWords, place)),
    ...headerTexts(placeWords),
    ...archive.filler.flatMap((entry) => fillerTexts(entry)),
    ...copyTexts(archive.series.slug),
  ]
}

/** A text as whole words: punctuation dropped, one space between words. */
function asWords(text: string): string {
  return ` ${text.replaceAll(/[^\p{L}\p{N}]+/gu, ' ').trim()} `
}

/**
 * Whether a record is filed after this text, so the text may not name it:
 * characters, but also the arcs, places, ships and fruits, whose names are as
 * much a spoiler as a person's — "Marineford" in a text at episode 400 says
 * where the war will be. A record's own texts are behind its own threshold
 * already. A record one source alone tells is never reached by a text the
 * other source tells too, so such a text may never name it.
 */
function filedAfter(other: Entity, text: Text): boolean {
  const { chapter, episode, owner, source } = text

  return (
    other.id !== owner.id
    && (!toldIn(other, source ?? null)
      || (source !== 'chapter' && other.revealedAtEpisode > episode)
      || (source !== 'episode' && other.revealedAtChapter > chapter))
  )
}

/** One archive's scan: its texts, and what each names too early. */
interface Scan {
  /** The records a text names in one locale that it should not. */
  leaked: (text: Text, locale: Locale, facts: boolean) => Entity[]
  /**
   * Every record every text names too early, as `label (locale) names id`
   * lines, with the name facts on the records honoured or, for the test
   * that checks the facts themselves, ignored.
   */
  leaks: (facts: boolean) => string[]
  texts: Text[]
}

/** One archive's scan, its name indexes built once for every text. */
function scanOf(archive: ReaderArchive, placeWords: PlaceWords): Scan {
  const { entities } = archive
  const texts = textsOf(archive, placeWords)
  const nameWords = new Map<string, string>()

  const wordsOf = (entity: Entity, locale: Locale): string => {
    const key = `${locale}:${entity.id}`
    const known = nameWords.get(key)
    if (known !== undefined) {
      return known
    }

    const words = asWords(entity.name[locale])
    nameWords.set(key, words)
    return words
  }

  // The records by the first word of their name, per locale. A name can only
  // be in a text if its first word is, so a text looks up its own words here
  // rather than trying every record in the archive against it.
  const byFirstWord = new Map(
    LOCALES.map((locale) => {
      const index = new Map<string, Entity[]>()

      for (const entity of entities) {
        const word = wordsOf(entity, locale).trim().split(' ', 1)[0] ?? ''
        index.set(word, [...(index.get(word) ?? []), entity])
      }

      return [locale, index] as const
    }),
  )

  // The words of a text with its markers reduced to the text they show.
  const shownWords = (text: string, locale: Locale): string =>
    tokenize(text)
      .map((token) => {
        return token.kind === 'words' ?
            token.text
          : (token.marker.shown
              ?? archive.getCharacter(token.marker.id)?.name[locale]
              ?? '')
      })
      .join('')

  // Whether a record the reader has already reached goes by the same name,
  // so the name in a text is that record's and not a leak: the zombie dog
  // Cerberus is met at 339, Shamrock's sword of the same name only at 1168.
  const sharesAReachedName = (
    other: Entity,
    { chapter, episode, source }: Text,
    locale: Locale,
  ): boolean =>
    entities.some((met) => {
      return (
        met.id !== other.id
        && toldIn(met, source ?? null)
        && met.revealedAtEpisode <= episode
        && met.revealedAtChapter <= chapter
        && met.name[locale] === other.name[locale]
      )
    })

  const leaked = (text: Text, locale: Locale, facts: boolean): Entity[] => {
    const { episode } = text
    // Reduced to words once, not once per record it is scanned for.
    const words = asWords(shownWords(text.text[locale], locale))
    const index = byFirstWord.get(locale)
    if (index === undefined) {
      throw new Error(`no first-word index for ${locale}`)
    }

    // Only the records whose name starts with one of the text's words can be
    // in it, which rules out nearly every record before the slow substring
    // scan. Each word once, so each record comes up at most once.
    const named = [...new Set(words.split(' '))].flatMap(
      (word) => index.get(word) ?? [],
    )

    return named
      .filter((other) => filedAfter(other, text))
      .filter((other) => !facts || other.commonWord !== true)
      .filter((other) => !facts || episode < (other.nameSaidAt ?? Infinity))
      .filter((other) => words.includes(wordsOf(other, locale)))
      .filter((other) => !sharesAReachedName(other, text, locale))
  }

  return {
    leaked,
    leaks: (facts) =>
      texts.flatMap((text) => {
        return LOCALES.flatMap((locale) => {
          return leaked(text, locale, facts).map(
            (other) => `${text.label} (${locale}) names ${other.id}`,
          )
        })
      }),
    texts,
  }
}

/** Whether two records go by the same name in some locale, as the scan sees it. */
function namesakes(entity: Entity, other: Entity): boolean {
  return LOCALES.some((locale) => entity.name[locale] === other.name[locale])
}

/** Every pair of records that share a name in some locale, each pair once. */
function namesakePairs(entities: Entity[]): [Entity, Entity][] {
  return entities.flatMap((entity) => {
    return entities
      .filter((other) => other.id > entity.id && namesakes(entity, other))
      .map((other): [Entity, Entity] => [entity, other])
  })
}

/** The last record filed whose name the scan holds to plain words. */
function lastScanned(entities: Entity[]): Entity {
  const last = entities.findLast(
    (entity) => entity.commonWord !== true && entity.nameSaidAt === undefined,
  )
  if (last === undefined) {
    throw new Error('the archive files no record the scan reads')
  }

  return last
}

/** The records that carry a name fact. */
function withFacts(entities: Entity[]): Entity[] {
  return entities.filter(
    (entity) => entity.commonWord === true || entity.nameSaidAt !== undefined,
  )
}

/** The id each `label (locale) names id` line names. */
function namedIn(line: string): string {
  return line.slice(line.lastIndexOf(' ') + 1)
}

describe.each(LOADED_SERIES)(
  'the texts of $slug',
  ({ archive, placeWords, slug }) => {
    const reader = withFeatures(archive)
    const { entities } = reader
    const scan = scanOf(reader, placeWords)
    const expected = expectedOf(slug)

    it('cover every kind of text the archive prints', () => {
      const kinds = new Set(
        scan.texts.map(({ label }) =>
          label
            .replace(/^[^.]+\./u, '')
            .replace(/@\d+$/u, '')
            .replaceAll(/\.\d+(?=\.|$)/gu, '[]'),
        ),
      )

      expect([...kinds].toSorted(byString())).toStrictEqual(expected.kinds)
    })

    it('name no record the reader has not reached, linked or not', () => {
      // Gathered first and asserted once, so a failure lists every leak in
      // the batch rather than the first one found.
      expect(scan.leaks(true)).toStrictEqual([])
    })

    // A series with no record yet (Game of Thrones, #849) has none to probe.
    it.skipIf(entities.length === 0)(
      'would catch a text at the first episode that names the last record',
      () => {
        const last = lastScanned(entities)

        // The probe is only a probe if the record it names opens later.
        expect(
          last.revealedAtEpisode,
          `${last.id} opens at the first episode`,
        ).toBeGreaterThan(FIRST_EPISODE)
        expect(
          last.revealedAtChapter,
          `${last.id} opens at the first chapter`,
        ).toBeGreaterThan(FIRST_CHAPTER)

        const probe: Text = {
          chapter: FIRST_CHAPTER,
          episode: FIRST_EPISODE,
          label: 'probe',
          owner: { id: 'probe' },
          source: undefined,
          text: { en: `On to ${last.name.en}.`, it: `Verso ${last.name.it}.` },
        }

        for (const locale of LOCALES) {
          expect(scan.leaked(probe, locale, true), locale).toContain(last)
        }
      },
    )

    it('say a name early only before its own record opens', () => {
      // A `nameSaidAt` at or after the threshold would change nothing, and is
      // a sign the threshold was moved without it.
      const said = entities.filter((entity) => entity.nameSaidAt !== undefined)

      expect(said.length > 0).toBe(expected.namesSaidEarly)

      for (const entity of said) {
        const saidAt = entity.nameSaidAt ?? Infinity

        expect(Number.isSafeInteger(saidAt), entity.id).toBe(true)
        expect(saidAt, entity.id).toBeGreaterThanOrEqual(FIRST_EPISODE)
        expect(saidAt, entity.id).toBeLessThan(entity.revealedAtEpisode)
      }
    })

    it('give records that share a name the same name facts', () => {
      // The scan matches names, not ids: two records called Marineford, the
      // arc and the place, are one name to it, and the stricter fact would
      // silently govern both. Same name, same fact.
      for (const [entity, other] of namesakePairs(entities)) {
        const pair = `${entity.id} / ${other.id}`

        expect(other.nameSaidAt, pair).toBe(entity.nameSaidAt)
        expect(other.commonWord, pair).toBe(entity.commonWord)
      }
    })

    it('need every name fact for some text to pass', () => {
      // A fact nobody needs is a scan switched off for nothing: with the facts
      // ignored, every record that carries one must be named too early by at
      // least one text. One that is not has outlived its reason, and comes off
      // the record.
      const flagged = new Set(scan.leaks(false).map((line) => namedIn(line)))
      const unneeded = withFacts(entities)
        .filter((entity) => !flagged.has(entity.id))
        .map((entity) => entity.id)

      expect(unneeded).toStrictEqual([])
    })
  },
)

describe('the texts a value holds', () => {
  it('are found however deep a field nests them, by path', () => {
    const name = { en: 'Enhancer', it: 'Rafforzamento' }
    const nested = {
      count: 3,
      ids: ['a', 'b'],
      kind: { name },
      notes: [name, { story: { body: name, title: name } }],
    }

    expect(textsIn(nested).map(({ path }) => path)).toStrictEqual([
      '.kind.name',
      '.notes.0',
      '.notes.1.story',
    ])
  })
})

/** One text, the same in every locale. */
function everywhere(en: string): LocalizedText {
  return { en, it: en }
}

/**
 * The last series filed that files records, the smallest archive to build a
 * fixture on.
 */
function lastFiled(): (typeof LOADED_SERIES)[number] {
  const filed = LOADED_SERIES.findLast(
    ({ archive }) => archive.entities.length > 0,
  )
  if (filed === undefined) {
    throw new Error('no series filed')
  }

  return filed
}

describe('a place word a series labels itself', () => {
  it('has its headers scanned at the first episode, so one naming a later record is caught', () => {
    const base = withFeatures(lastFiled().archive)
    const last = lastScanned(base.entities)
    const words: PlaceWords = {
      allRegions: last.name,
      dictionary: false,
      forms: {},
      region: last.name,
      regions: {},
    }
    // Its places' own words are not what this checks.
    const leaks = scanOf({ ...base, places: [] }, words).leaks(true)

    for (const field of ['region', 'allRegions']) {
      for (const locale of LOCALES) {
        expect(leaks).toContain(
          `place-words.${field} (${locale}) names ${last.id}`,
        )
      }
    }
  })

  it('is scanned at its place’s threshold, so a label naming a later record is caught', () => {
    const base = withFeatures(lastFiled().archive)
    const last = lastScanned(base.entities)
    const port: Entity = {
      id: 'fixture-port',
      kind: 'place',
      name: everywhere('Fixture Port'),
      revealedAtChapter: FIRST_CHAPTER,
      revealedAtEpisode: FIRST_EPISODE,
      summary: everywhere('A port.'),
      visual: { art: 'fixture-port', tint: 'yellow' },
    }
    const dossier: PlaceDossier = {
      arc: 'fixture-arc',
      filedHere: [],
      form: 'port',
      landmark: everywhere('A pier.'),
      log: everywhere('A log.'),
      region: 'far',
    }
    const archive: ReaderArchive = {
      ...base,
      entities: [...base.entities, port],
      placeDossierOf: (entity) => (entity.id === port.id ? dossier : undefined),
      places: [port],
    }
    const words: PlaceWords = {
      allRegions: everywhere('All regions'),
      dictionary: false,
      forms: { port: last.name },
      region: everywhere('Region'),
      regions: { far: last.name },
    }
    const leaks = scanOf(archive, words).leaks(true)

    for (const field of ['region', 'form']) {
      for (const locale of LOCALES) {
        expect(leaks).toContain(
          `fixture-port.${field} (${locale}) names ${last.id}`,
        )
      }
    }

    expect(
      scanOf(archive, {
        ...words,
        dictionary: true,
        forms: { port: true },
        regions: { far: true },
      }).leaks(true),
    ).toStrictEqual([])
  })
})

describe('source-specific prose with reordered introductions', () => {
  const other = {
    ...lastScanned(lastFiled().archive.entities),
    id: 'reordered-person',
    revealedAtEpisode: 4,
    revealedAtChapter: 7,
  }
  delete other.source

  it.each([
    ['episode', 4, 1, false],
    ['episode', 3, 7, true],
    ['chapter', 1, 7, false],
    ['chapter', 4, 6, true],
    [undefined, 4, 1, true],
    [undefined, 1, 7, true],
    [undefined, 4, 7, false],
  ] as const)(
    'checks only the applicable thresholds: %s/%i/%i',
    (...[source, episode, chapter, expected]) => {
      expect(
        filedAfter(other, {
          owner: { id: 'probe' },
          label: 'probe',
          text: everywhere('Probe'),
          source,
          episode,
          chapter,
        }),
      ).toBe(expected)
    },
  )
})
