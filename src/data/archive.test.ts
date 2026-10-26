import { byNumber, byString } from 'sort-es'
import { describe, expect, it } from 'vitest'

import { vouches } from '~/data/chapterTable'
import { toldIn } from '~/data/reveal'
import type {
  Dated,
  Entity,
  Field,
  LocalizedText,
  SeriesArchive,
  Timeline,
  Visit,
} from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import { markedIds, tokenize } from '~/lib/prose/markers'
import { expectedOf, type Least, LOADED_SERIES } from '~/test/series'

/**
 * The data rules that keep a series' dated facts spoiler-safe, run for every
 * series filed: the engine derives the facts the same way for each
 * (`./dated`, `./shelves`), so each is held to the same rules. A rule about
 * one series' own words or editorial choices stays in its folder.
 */

/** The fields every series may file; the rest come with a feature. */
const CORE_FIELDS = new Set<Field>([
  'affiliation',
  'chronicle',
  'epithet',
  'origin',
  'redrawing',
  'relationships',
  'status',
])

/** The fields a series may file: the core, and those of its features. */
function allowedFields(archive: SeriesArchive): Set<Field> {
  const { features } = archive.series
  const allowed = new Set(CORE_FIELDS)
  if (features.bounty) {
    allowed.add('bounty')
  }
  if (features.fruits) {
    allowed.add('devilFruit')
  }
  if (archive.features.ships !== undefined) {
    allowed.add('fate')
  }

  return allowed
}

/** One dated entry, with its record and a label for a failure to name. */
interface DatedCase {
  entry: Dated<unknown>
  label: string
  owner: Entity
}

/** Every dated entry of an archive, flattened out of its timelines. */
function datedCases(archive: SeriesArchive): DatedCase[] {
  return archive.timelines.flatMap(({ owner, timeline }) =>
    timeline.map((entry) => ({
      entry,
      label: `${owner.id} @${String(entry.episode)}`,
      owner,
    })),
  )
}

/** One of a character's dossier timelines, named by character and field. */
interface TimelineCase<T> {
  character: Entity
  label: string
  timeline: Timeline<T>
}

/** Every character's timeline of one field, those who file none left out. */
function casesOf<T>(
  archive: SeriesArchive,
  field: string,
  read: (entity: Entity) => Timeline<T> | undefined,
): TimelineCase<T>[] {
  return archive.characters.flatMap((character) => {
    const timeline = read(character)

    return timeline === undefined ?
        []
      : { character, label: `${character.id}.${field}`, timeline }
  })
}

/** The words of a paragraph with its markers reduced to the text they show. */
function shownWords(
  archive: SeriesArchive,
  text: string,
  locale: Locale,
): string {
  return tokenize(text)
    .map((token) => {
      return token.kind === 'words' ?
          token.text
        : (token.marker.shown
            ?? archive.getCharacter(token.marker.id)?.name[locale]
            ?? '')
    })
    .join('')
}

/** Whether an entry names a record, by a marker or in any locale. */
function names(entry: Dated<unknown>, record: Entity): boolean {
  const text = JSON.stringify(entry.value)

  return [
    `[[${record.id}`,
    ...LOCALES.map((locale) => record.name[locale]),
  ].some((name) => text.includes(name))
}

/** Every entry a reader opens, with its gate, labelled. */
function openedCases(
  archive: SeriesArchive,
): (DatedCase & { chapter: number })[] {
  return archive.timelines.flatMap(({ field, owner }) => {
    return archive
      .datedOf(owner, field)
      .map((entry) => ({
        chapter: entry.gate.revealedAtChapter,
        entry,
        label: `${owner.id}.${field} @${String(entry.episode)}`,
        owner,
      }))
  })
}

/** Every dated entry that names an unanchored record before its chapter. */
function unanchoredLeaks(archive: SeriesArchive): string[] {
  const unanchored = archive.entities.filter(
    (entity) => entity.unanchored === true,
  )

  return openedCases(archive).flatMap(({ chapter, entry, label, owner }) => {
    return unanchored
      .filter((record) => chapter < record.revealedAtChapter)
      .filter((record) => owner.id !== record.id && names(entry, record))
      .map((record) => `${label} names ${record.id}`)
  })
}

/** Every origin entry that links a place, with the character it is on. */
function linkedOrigins(
  archive: SeriesArchive,
): { chapter: number | undefined; label: string; place: string }[] {
  return archive.characters.flatMap((character) => {
    return (archive.dossierOf(character)?.origin ?? []).flatMap((entry) => {
      return entry.place === undefined ?
          []
        : {
            chapter: entry.chapter,
            label: `${character.id} @${String(entry.episode)} → ${entry.place}`,
            place: entry.place,
          }
    })
  })
}

/** Every saga's dossier ids, in filing order, repeats kept. */
function dossierIds(archive: SeriesArchive): string[] {
  return archive.sagas.flatMap((saga) => Object.keys(saga.dossiers))
}

/** The arcs that open between a shelf's heading and a character on it. */
function arcsBetween(
  arcs: Entity[],
  heading: Entity,
  character: Entity,
): string[] {
  return arcs
    .filter(
      (arc) =>
        arc.revealedAtEpisode > heading.revealedAtEpisode
        && arc.revealedAtEpisode <= character.revealedAtEpisode,
    )
    .map((arc) => arc.id)
}

/** What each count of `Least` counts in an archive. */
function countsOf(archive: SeriesArchive): Least {
  const dossiers = archive.characters.flatMap(
    (character) => archive.dossierOf(character) ?? [],
  )

  return {
    affiliations: dossiers.flatMap((dossier) => dossier.affiliation).length,
    arcs: archive.arcs.length,
    characters: archive.characters.length,
    chronicles: archive.stories.length,
    linkedOrigins: linkedOrigins(archive).length,
    places: archive.places.length,
    statuses: dossiers.flatMap((dossier) => dossier.status ?? []).length,
    timelines: archive.timelines.length,
    visits: visitsOf(archive).flatMap(({ visits }) => visits).length,
  }
}

/** Whether a key is one of `Least`'s. */
function isLeastKey(key: string): key is keyof Least {
  return [
    'affiliations',
    'arcs',
    'characters',
    'chronicles',
    'linkedOrigins',
    'places',
    'statuses',
    'timelines',
    'visits',
  ].includes(key)
}

/** The floor that holds up each kind of text the leak scan reads. */
const KIND_FLOORS: Partial<Record<string, (keyof Least)[]>> = {
  affiliation: ['affiliations'],
  chronicle: ['chronicles'],
  form: ['places'],
  landmark: ['places'],
  origin: ['linkedOrigins'],
  region: ['places'],
  role: ['characters'],
  summary: ['arcs'],
  visit: ['visits'],
}

/** Every place's later visits, with the place they return to. */
function visitsOf(
  archive: SeriesArchive,
): { place: Entity; visits: Visit[] }[] {
  return archive.places.flatMap((place) => {
    const visits = archive.placeDossierOf(place)?.visits ?? []

    return visits.length === 0 ? [] : { place, visits }
  })
}

describe.each(LOADED_SERIES)(
  'the dated facts of $slug',
  ({ archive, slug }) => {
    const { characters, series } = archive
    const DATED = datedCases(archive)
    const DECLARED = DATED.flatMap(({ entry, label, owner }) =>
      entry.chapter === undefined ?
        []
      : { chapter: entry.chapter, label, owner },
    )
    const AFFILIATIONS = casesOf(
      archive,
      'affiliation',
      (c) => archive.dossierOf(c)?.affiliation,
    )
    const TEXTS: TimelineCase<LocalizedText>[] = [
      ...AFFILIATIONS,
      ...casesOf(archive, 'origin', (c) => archive.dossierOf(c)?.origin),
      ...casesOf(archive, 'epithet', (c) => archive.dossierOf(c)?.epithet),
    ]
    const STATUSES = casesOf(
      archive,
      'status',
      (c) => archive.dossierOf(c)?.status,
    )

    it('files at least what the series is known to file', () => {
      // The rules below pass on nothing, so a series that files content must
      // be seen filing it: a reader that lost its characters or its timelines
      // would otherwise leave every rule here green.
      const { least } = expectedOf(slug)
      const counts = countsOf(archive)

      const keys = Object.keys(least).filter(isLeastKey)
      for (const key of keys) {
        expect(counts[key], key).toBeGreaterThanOrEqual(least[key])
      }
    })

    it('holds every kind of text it prints to a floor above zero', () => {
      // A kind the leak scan expects next to a floor of 0 would let the
      // records behind it vanish with every rule here still green.
      const { kinds, least } = expectedOf(slug)
      const floored = kinds.flatMap((kind) => KIND_FLOORS[kind] ?? [])

      for (const key of floored) {
        expect(least[key], key).toBeGreaterThan(0)
      }
    })

    it('files only the fields of the core and of its features', () => {
      const allowed = allowedFields(archive)
      const stray = archive.timelines
        .filter(({ field }) => !allowed.has(field))
        .map(({ label }) => label)

      expect(stray).toStrictEqual([])
    })

    it('gives every character a dossier with a role and a log in every locale', () => {
      for (const character of characters) {
        const dossier = archive.dossierOf(character)

        expect(dossier, character.id).toBeDefined()

        for (const locale of LOCALES) {
          expect(dossier?.role[locale].length, character.id).toBeGreaterThan(0)
          expect(dossier?.log[locale].length, character.id).toBeGreaterThan(0)
        }
      }
    })

    it('files each dossier once, and only for a character', () => {
      const ids = dossierIds(archive)

      const distinct = new Set(ids)

      expect(distinct.size).toBe(ids.length)

      for (const id of ids) {
        expect(archive.getCharacter(id), id).toBeDefined()
      }
      const others = archive.entities.filter(
        (entity) => entity.kind !== 'character',
      )
      for (const other of others) {
        expect(archive.dossierOf(other), other.id).toBeUndefined()
      }
    })

    it('writes every dated text in every locale', () => {
      for (const { label, timeline } of TEXTS) {
        for (const entry of timeline) {
          for (const locale of LOCALES) {
            expect(entry.value[locale].length, label).toBeGreaterThan(0)
          }
        }
      }
    })

    it('opens every status at the episode the character is filed at', () => {
      // The row must not be its own spoiler. If a status timeline could begin
      // at the episode of the death, the mere appearance of the Status row
      // would announce that something had happened; every timeline instead
      // opens at the threshold, in the state the character is introduced in.
      for (const { character, label, timeline } of STATUSES) {
        expect(timeline[0]?.episode, label).toBe(character.revealedAtEpisode)
      }
    })

    it('files a status only where it changes', () => {
      for (const { label, timeline } of STATUSES) {
        const values = timeline.map((entry) => entry.value)
        const restated = values.filter((value, at) => value === values[at - 1])

        expect(restated, label).toStrictEqual([])
      }
    })

    it('pins every change of status to the chapter that tells it', () => {
      // The opening entry waits on its record. A later one without a chapter
      // waits on the derived table instead, which can reach its episode
      // chapters before the manga tells the change.
      for (const { label, timeline } of STATUSES) {
        const unpinned = timeline
          .slice(1)
          .filter((entry) => entry.chapter === undefined)
          .map((entry) => entry.episode)

        expect(unpinned, label).toStrictEqual([])
      }
    })

    it('brings nobody back from a confirmed death', () => {
      // What `presumed-dead` is for: a character the story drops and picks up
      // again is filed under the doubt, never under the certainty.
      for (const { label, timeline } of STATUSES) {
        const died = timeline.findIndex((entry) => entry.value === 'deceased')

        expect(died === -1 || died === timeline.length - 1, label).toBe(true)
      }
    })

    it('leaves a fate to the status and out of the affiliation', () => {
      // Both halves of the vocabulary that are a fate and nothing else: a
      // death, and a death the story later takes back. An affiliation that
      // carried one would print it a second time, and at whichever episode the
      // affiliation happened to change rather than at the episode the fate
      // did. Being held is not on this list: a captor and a place are what an
      // affiliation is for.
      for (const { label, timeline } of AFFILIATIONS) {
        for (const entry of timeline) {
          for (const locale of LOCALES) {
            expect(entry.value[locale], label).not.toMatch(
              /decedut|defunt|deceased|uccis|killed|giustiziat|executed|dato per mort|presumed dead/iu,
            )
          }
        }
      }
    })

    it('names, in an origin that links a place, a filed place, and pins its chapter', () => {
      // The place's page opens the entry at its own pair. Without a chapter it
      // would wait on the derived table, which can reach the episode chapters
      // before the manga says where the character comes from.
      for (const { chapter, label, place } of linkedOrigins(archive)) {
        expect(archive.getPlace(place), label).toBeDefined()
        expect(chapter, label).toBeDefined()
      }
    })

    it('opens every entry at some chapter a reader can reach', () => {
      // A record added or moved shifts the table; an entry it pushes past the
      // last chapter would be hidden from every manga reader for good, and
      // needs a chapter of its own.
      const lost = openedCases(archive)
        .filter(({ chapter }) => chapter > series.chapterCeiling)
        .map(({ label }) => label)

      expect(lost).toStrictEqual([])
    })

    it('opens no entry before its own record, unless the record vouches for nothing', () => {
      // The table makes this hold for every record it is built from, on the
      // entry's own gate alone. An unanchored record's entries, or those of a
      // record of one source only, are held by their owner instead, which
      // `datedOf` folds into every gate.
      const early = DATED.filter(({ entry, owner }) => {
        const opens = entry.chapter ?? archive.chapterAtEpisode(entry.episode)

        return vouches(owner) && opens < owner.revealedAtChapter
      }).map(({ label }) => label)

      expect(early).toStrictEqual([])
    })

    it('declares a chapter no earlier than its record and within the dial', () => {
      for (const { chapter, label, owner } of DECLARED) {
        expect(Number.isSafeInteger(chapter), label).toBe(true)
        expect(chapter, label).toBeGreaterThanOrEqual(owner.revealedAtChapter)
        expect(chapter, label).toBeLessThanOrEqual(series.chapterCeiling)
      }
    })

    it('names an unanchored record nowhere a reader meets before its chapter', () => {
      // The table no longer waits for such a record, so nothing dated may name
      // it, linked or not, below its own chapter. Its own dossier is behind
      // its threshold already.
      expect(unanchoredLeaks(archive)).toStrictEqual([])
    })

    it('marks a chapter pinned on a fruit of one source only with that source', () => {
      // The table is built before a fruit's source is read off its namings, so
      // it cannot see it: a pinned entry of such a fruit vouches for its pair
      // unless the entry says its source itself.
      const pinned = DATED.filter(
        ({ entry, owner }) =>
          owner.kind === 'fruit'
          && owner.source !== undefined
          && entry.chapter !== undefined
          && entry.source !== owner.source,
      ).map(({ label }) => label)

      expect(pinned).toStrictEqual([])
    })

    it('tells an entry of a record of one source only by that source alone', () => {
      // The record's source wins in its gate, so an entry may only repeat it.
      const crossed = DATED.filter(
        ({ entry, owner }) =>
          entry.source !== undefined
          && owner.source !== undefined
          && entry.source !== owner.source,
      ).map(({ label }) => label)

      expect(crossed).toStrictEqual([])
    })
  },
)

describe.each(LOADED_SERIES)('the chronicles of $slug', ({ archive }) => {
  const STORIES = archive.characters.flatMap((character) =>
    archive
      .datedOf(character, 'chronicle')
      .map((entry) => ({
        chapter: entry.gate.revealedAtChapter,
        character,
        episode: entry.episode,
        label: `${character.id}.chronicle @${String(entry.episode)}`,
        source: entry.gate.source,
        story: entry.value,
      })),
  )

  it('files every story once, across characters, by when it concludes', () => {
    const { stories } = archive
    const episodes = stories.map((filed) => filed.episode)
    // The home page keys a story by its subject and its episode.
    const keys = new Set(
      stories.map((filed) => `${filed.character.id}:${String(filed.episode)}`),
    )

    expect(stories).toHaveLength(STORIES.length)
    expect(keys.size).toBe(stories.length)
    expect(episodes.toSorted(byNumber())).toStrictEqual(episodes)
  })

  it('opens every chronicle at the episode the character is filed at', () => {
    // The band must not be its own spoiler: a chronicle that began at the
    // episode of a defeat would announce it by appearing.
    const chronicles = casesOf(
      archive,
      'chronicle',
      (c) => archive.dossierOf(c)?.chronicle,
    )
    for (const { character, label, timeline } of chronicles) {
      expect(timeline[0]?.episode, label).toBe(character.revealedAtEpisode)
    }
  })

  it('writes every story in every locale, as a title and a paragraph', () => {
    for (const { label, story } of STORIES) {
      for (const locale of LOCALES) {
        const rest = shownWords(archive, story.body[locale], locale)
        const words = rest.split(/\s+/u)

        expect(story.title[locale].length, label).toBeGreaterThan(0)
        expect(story.title[locale], label).not.toContain('[[')
        expect(words.length, label).toBeGreaterThanOrEqual(40)
        expect(words.length, label).toBeLessThanOrEqual(140)
        // No marker half written.
        expect(rest, label).not.toContain('[[')
        expect(rest, label).not.toContain(']]')
      }
    }
  })

  it('links only characters the reader has already met, and never itself', () => {
    for (const {
      chapter,
      character,
      episode,
      label,
      source,
      story,
    } of STORIES) {
      for (const id of markedIds(story.body.en)) {
        const linked = archive.getCharacter(id)
        const where = `${label} -> ${id}`

        expect(linked, where).toBeDefined()
        expect(id, where).not.toBe(character.id)
        expect(linked?.revealedAtEpisode, where).toBeLessThanOrEqual(episode)
        expect(linked?.revealedAtChapter, where).toBeLessThanOrEqual(chapter)
        // A story both sources tell may not link a record one of them does
        // not: an unresolved marker prints its id (`segmentsOf`).
        expect(
          linked !== undefined && toldIn(linked, source ?? null),
          where,
        ).toBe(true)
      }
    }
  })

  it('links the same characters in every locale', () => {
    for (const { label, story } of STORIES) {
      const inEnglish = markedIds(story.body.en).toSorted(byString())
      const inItalian = markedIds(story.body.it).toSorted(byString())

      expect(inItalian, label).toStrictEqual(inEnglish)
    }
  })
})

describe.each(LOADED_SERIES)('the shelves of $slug', ({ archive }) => {
  const { arcs, bookSections, characters, chart, featuredCharacters } = archive

  it('files each arc’s leads as distinct characters of the same archive', () => {
    for (const [arc, ids] of Object.entries(archive.leads)) {
      expect(archive.getEntity(arc)?.kind, arc).toBe('arc')

      const distinct = new Set(ids)

      expect(distinct.size, arc).toBe(ids.length)

      for (const id of ids) {
        expect(archive.getCharacter(id)?.kind, id).toBe('character')
      }
    }
  })

  it('draws every arc, place and ship, the featured characters, and nothing else', () => {
    const charted = new Set(['arc', 'place', 'ship'])
    const expected = archive.entities.filter(
      (entity) =>
        charted.has(entity.kind) || featuredCharacters.includes(entity),
    )

    expect(chart.map((entity) => entity.id).toSorted(byString())).toStrictEqual(
      expected.map((entity) => entity.id).toSorted(byString()),
    )
    expect(
      featuredCharacters.every((entity) => entity.kind === 'character'),
    ).toBe(true)
  })

  it('keeps the chart and the featured characters in route order', () => {
    for (const list of [chart, featuredCharacters]) {
      const thresholds = list.map((entity) => entity.revealedAtEpisode)

      expect(thresholds).toStrictEqual(thresholds.toSorted(byNumber()))
    }
  })

  it('shelves every character exactly once, in route order', () => {
    const shelved = bookSections
      .flatMap((section) => section.characters)
      .map((character) => character.id)

    expect(shelved.toSorted(byString())).toStrictEqual(
      characters.map((character) => character.id).toSorted(byString()),
    )

    const opens = bookSections.map((section) => section.arc.revealedAtEpisode)

    expect(opens).toStrictEqual(opens.toSorted(byNumber()))
  })

  it('never puts a character under a heading that opens after them, in either unit', () => {
    // Shelving goes by episode; a reader who counts in chapters gates the
    // heading by chapter, so the chapter order has to agree or a tile could
    // sit open under a veiled heading.
    for (const section of bookSections) {
      expect(section.arc.kind).toBe('arc')

      for (const character of section.characters) {
        expect(section.arc.revealedAtEpisode, character.id).toBeLessThanOrEqual(
          character.revealedAtEpisode,
        )
        expect(section.arc.revealedAtChapter, character.id).toBeLessThanOrEqual(
          character.revealedAtChapter,
        )
      }
    }
  })

  it('shelves a character under the latest arc that opens no later than them', () => {
    // No arc may open between a shelf's heading and a character on it.
    for (const section of bookSections) {
      for (const character of section.characters) {
        expect(
          arcsBetween(arcs, section.arc, character),
          character.id,
        ).toStrictEqual([])
      }
    }
  })

  it('gives every arc at most one shelf, and no shelf stands empty', () => {
    const headings = bookSections.map((section) => section.arc.id)

    const distinct = new Set(headings)

    expect(distinct.size).toBe(headings.length)

    for (const section of bookSections) {
      expect(section.characters.length, section.arc.id).toBeGreaterThan(0)
    }
  })
})

/** Every record a place's dossier files there, beside the place's id. */
function filedHereOf(archive: SeriesArchive): [string, string][] {
  return archive.places.flatMap((place) => {
    const filed = archive.placeDossierOf(place)?.filedHere ?? []

    return filed.map((id): [string, string] => [place.id, id])
  })
}

describe.each(LOADED_SERIES)('the places of $slug', ({ archive }) => {
  const { entities, places } = archive

  it('lists every place record, in the order the anime reaches them', () => {
    const ids = entities
      .filter((entity) => entity.kind === 'place')
      .map((entity) => entity.id)
      .toSorted(byString())
    const thresholds = places.map((place) => place.revealedAtEpisode)

    expect(places.map((place) => place.id).toSorted(byString())).toStrictEqual(
      ids,
    )
    expect(thresholds).toStrictEqual(thresholds.toSorted(byNumber()))
  })

  it('gives every place a dossier in every locale, and nothing else one', () => {
    for (const place of places) {
      const dossier = archive.placeDossierOf(place)

      expect(dossier, place.id).toBeDefined()

      for (const locale of LOCALES) {
        expect(dossier?.landmark[locale].length, place.id).toBeGreaterThan(0)
        expect(dossier?.log[locale].length, place.id).toBeGreaterThan(0)
      }
    }

    const others = entities.filter((entity) => entity.kind !== 'place')
    for (const other of others) {
      expect(archive.placeDossierOf(other), other.id).toBeUndefined()
    }
  })

  it('files every place under exactly one saga', () => {
    // The places page's saga picker reads it, and a place under none would
    // leave the page with nothing to send.
    const filed = archive.sagas
      .flatMap((saga) => saga.entries)
      .map(({ id }) => id)
    for (const place of places) {
      expect(
        filed.filter((id) => id === place.id),
        place.id,
      ).toHaveLength(1)
    }
  })

  it('files each place under an arc that opens no later than the place, in both units', () => {
    // The places page prints the arc's name beside an open place, so an arc
    // that opened later would be named while still under fog.
    for (const place of places) {
      const arc = archive.getEntity(archive.placeDossierOf(place)?.arc ?? '')

      expect(arc?.kind, place.id).toBe('arc')
      expect(arc?.revealedAtEpisode, place.id).toBeLessThanOrEqual(
        place.revealedAtEpisode,
      )
      expect(arc?.revealedAtChapter, place.id).toBeLessThanOrEqual(
        place.revealedAtChapter,
      )
    }
  })

  it('dates every later visit after the place, in order, in both units', () => {
    // A visit at or before the place's own threshold would be its first
    // arrival, not a return; out of order, the page would list it so.
    for (const { place, visits } of visitsOf(archive)) {
      const episodes = visits.map((visit) => visit.episode)
      const chapters = visits.map((visit) => visit.chapter)
      const distinctEpisodes = new Set(episodes)
      const distinctChapters = new Set(chapters)

      // Distinct in both units: the page keys and labels each visit by its
      // episode or its chapter, whichever the reader counts in.
      expect(distinctEpisodes.size, place.id).toBe(visits.length)
      expect(distinctChapters.size, place.id).toBe(visits.length)
      expect(episodes, place.id).toStrictEqual(episodes.toSorted(byNumber()))
      expect(chapters, place.id).toStrictEqual(chapters.toSorted(byNumber()))

      for (const visit of visits) {
        expect(visit.episode, place.id).toBeGreaterThan(place.revealedAtEpisode)
        expect(visit.chapter, place.id).toBeGreaterThan(place.revealedAtChapter)

        for (const locale of LOCALES) {
          expect(visit.value[locale].trim(), place.id).not.toBe('')
        }
      }
    }
  })

  it('files here only records the archive holds, none of them places', () => {
    const filedHere = filedHereOf(archive)
    for (const [place, id] of filedHere) {
      const record = archive.getEntity(id)

      expect(record, `${place} → ${id}`).toBeDefined()
      expect(record?.kind, `${place} → ${id}`).not.toBe('place')
    }
  })

  it('finds every place by id, and nothing else', () => {
    for (const entity of entities) {
      expect(archive.getPlace(entity.id), entity.id).toBe(
        entity.kind === 'place' ? entity : undefined,
      )
    }
  })
})
