import { readFileSync } from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'

import { descriptionOf } from '~/data/series'
import type { Entity } from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import { DEMO_LAST_CHAPTER, DEMO_LAST_EPISODE } from '~/lib/progress/bounds'
import { type Bookmark, serialiseBookmark } from '~/lib/progress/episode'
import * as api from '~/server/api'
import * as shared from '~/server/series'
import { opHandleOf as handleOf } from '~/test/archive'
import { leaksOf } from '~/test/fog'
import {
  type LoadedSeries as ListedSeries,
  ONE_PIECE_LOADED,
  LOADED_SERIES as SERIES,
} from '~/test/series'

import { hubFor } from './hub.server'
import { type Payload, payloadsFor } from './payloads.server'

const PAYLOADS = payloadsFor(ONE_PIECE_LOADED.archive)

/** The server functions that answer with `plain` rather than seroval. */
const PLAIN = new Set(['loadDrawings', 'loadFruitAlbum', 'loadShelves'])

/** A record a page names past the bookmark on purpose. */
type Excuse = (entity: Entity, key: string, bookmark: Bookmark) => boolean

const isArc: Excuse = (entity) => entity.kind === 'arc'

/** A peek is the reader lifting the fog on one record, and on that one only. */
const lifted: Excuse = (entity, handle) => handleOf(entity.id) === handle

const BY_DESIGN: Partial<Record<string, Excuse>> = {
  // A visitor with no bookmark lands on East Blue under the dial, and on
  // nothing past it in either unit.
  loadHome: (entity, _, bookmark) =>
    bookmark === null
    && entity.revealedAtEpisode <= DEMO_LAST_EPISODE
    && entity.revealedAtChapter <= DEMO_LAST_CHAPTER,
  // The saga names are always shown, so a reader can find their way by them
  // (owner, 2026-10-12).
  loadFiller: isArc,
  loadSagaLabels: isArc,
  liftCharacter: lifted,
  liftDossier: lifted,
  liftFruit: lifted,
  liftRecord: lifted,
  liftPort: lifted,
  liftShip: lifted,
}

/** One series' sweep: the pages it serves, and what they name on purpose. */
interface Sweep {
  byDesign: Partial<Record<string, Excuse>>
  payloads: Payload[]
}

/**
 * The sweep of every series in `~/data/series`, by slug. A series listed
 * there with no sweep here fails the first test below, so it cannot ship
 * unswept; its bookmarks are its own, in the list.
 */
const SWEEPS: Partial<Record<string, Sweep>> = {
  'one-piece': { byDesign: BY_DESIGN, payloads: PAYLOADS },
}

const alphabetically = (a: string, b: string): number => a.localeCompare(b)

/** Every bookmark of a series' sweep, in every locale. */
const asksOf = ({
  bookmarks,
}: ListedSeries): { bookmark: Bookmark; locale: Locale }[] =>
  bookmarks.flatMap((bookmark) =>
    LOCALES.map((locale) => ({ bookmark, locale })),
  )

/**
 * Every key at every bookmark is about 400,000 pages and 11s, most of it the
 * route position. So a page asked for by key is asked for one key in seven
 * at each bookmark, a different seventh each time: every key is still asked
 * for at about fifteen bookmarks, in both locales, and the same ones on
 * every run. Odd, so a key does not land on one locale only.
 */
const STRIDE = 7

/** The keys asked for at the bookmark and locale at this place in the asks. */
function sampled(keys: string[] | undefined, at: number): string[] {
  return keys === undefined ?
      ['']
    : keys.filter((_, index) => (index + at) % STRIDE === 0)
}

describe('every payload the server sends', () => {
  it('is on the list, and the list holds nothing else', () => {
    // A server function added to `api.ts` without an entry here would ship
    // without the sweep below.
    expect(
      PAYLOADS.map(({ name }) => name).toSorted(alphabetically),
    ).toStrictEqual(Object.keys(api).toSorted(alphabetically))
  })

  it('is on the plain list exactly when `api.ts` sends it with `plain`', () => {
    // One `export const` per server function: the chunk after each names it
    // and holds its handler.
    const sent = readFileSync(
      path.join(import.meta.dirname, '..', 'api.ts'),
      'utf8',
    )
      .split('export const ')
      .filter((chunk) => chunk.includes('plain('))
      .map((chunk) => chunk.slice(0, chunk.indexOf(' ')))

    expect(sent.toSorted(alphabetically)).toStrictEqual(
      [...PLAIN].toSorted(alphabetically),
    )
  })

  it('is swept for every series listed, and for no other', () => {
    expect(Object.keys(SWEEPS).toSorted(alphabetically)).toStrictEqual(
      SERIES.map(({ slug }) => slug).toSorted(alphabetically),
    )

    // An entry with no pages, or a series with no bookmark past the landing,
    // would be swept without a single check.
    for (const { bookmarks, slug } of SERIES) {
      expect(SWEEPS[slug]?.payloads.length, slug).toBeGreaterThan(0)
      expect(
        bookmarks.filter((bookmark) => bookmark !== null).length,
        slug,
      ).toBeGreaterThan(0)
    }
  })
})

describe.each(SERIES)('every payload of $slug', (series) => {
  const { byDesign, payloads } = SWEEPS[series.slug] ?? {
    byDesign: {},
    payloads: [],
  }
  const asks = asksOf(series)
  const leaksIn = leaksOf(series)

  it.each(payloads)(
    '$name names nothing the reader has not reached, nor another series',
    ({ keys, name, run }) => {
      const all = keys?.()
      const excuse = byDesign[name] ?? ((): boolean => false)
      const leaks: string[] = []

      for (const [at, { bookmark, locale }] of asks.entries()) {
        for (const key of sampled(all, at)) {
          const leaked = leaksIn(
            run(bookmark, locale, key),
            bookmark,
            (entity) => excuse(entity, key, bookmark),
          )
          leaks.push(
            ...leaked.map(
              (id) =>
                `${id} via '${key}' @ ${JSON.stringify(bookmark)} ${locale}`,
            ),
          )
        }
      }

      expect(leaks).toStrictEqual([])
    },
  )

  // Sent as plain JSON (`~/lib/plain`): what `JSON.stringify` writes has to
  // read back as the very payload, with no `undefined`, `Map` or `Date` lost
  // on the way.
  it.each(payloads.filter(({ name }) => PLAIN.has(name)))(
    '$name reads back whole from plain JSON',
    ({ keys, run }) => {
      const all = keys?.()
      for (const [at, { bookmark, locale }] of asks.entries()) {
        for (const key of sampled(all, at)) {
          const payload = run(bookmark, locale, key)
          const sent = JSON.stringify(payload)

          expect(JSON.parse(sent)).toStrictEqual(payload)
        }
      }
    },
  )

  // The sampling above asks for a key at a few bookmarks only, so every key
  // is also asked for at the last two, the furthest a reader gets in each
  // unit: one drawing JSON changes cannot hide between the samples.
  const ceilings = series.bookmarks.slice(-2)

  it.each(
    payloads.filter(({ keys, name }) => PLAIN.has(name) && keys !== undefined),
  )(
    '$name reads back whole from plain JSON for every key at the ceilings',
    ({ keys, run }) => {
      const all = keys?.() ?? []
      for (const bookmark of ceilings) {
        for (const locale of LOCALES) {
          for (const key of all) {
            const payload = run(bookmark, locale, key)
            const sent = JSON.stringify(payload)

            expect(JSON.parse(sent)).toStrictEqual(payload)
          }
        }
      }
    },
  )
})

/**
 * The server functions whose address names no series (`~/server/series`),
 * as the plain calls behind them, at a bookmark on one series: the hub reads
 * a saved bookmark cookie for each series, so the series swept has one and
 * every other has none.
 */
const SHARED: Record<
  string,
  (series: ListedSeries, bookmark: Bookmark) => unknown
> = {
  loadHub: (series, bookmark) =>
    hubFor(
      new Map(
        bookmark === null ?
          []
        : [[series.description.cookie, serialiseBookmark(bookmark)]],
      ),
      SERIES.map(({ archive }) => archive),
    ),
  loadSeriesDescription: () => SERIES.map(({ slug }) => descriptionOf(slug)),
  loadSeriesDescriptions: () => SERIES.map(({ description }) => description),
}

/** Every string a payload holds, as a key or as a value, however deep. */
function stringsIn(payload: unknown): string[] {
  if (typeof payload === 'string') {
    return [payload]
  }
  if (payload === null || typeof payload !== 'object') {
    return []
  }

  return Object.entries(payload).flatMap(([key, value]) => [
    ...(Array.isArray(payload) ? [] : [key]),
    ...stringsIn(value),
  ])
}

/** Every id and name of every record of every series, as `slug/id`. */
const RECORD_WORDS = new Map(
  SERIES.flatMap(({ archive, slug }) =>
    archive.entities.flatMap((entity) =>
      [entity.id, ...LOCALES.map((locale) => entity.name[locale])].map(
        (word) => [word, `${slug}/${entity.id}`] as const,
      ),
    ),
  ),
)

/**
 * Every record a shared payload names, open or covered, at each bookmark:
 * the sweep's own check against the fog of a reader with no bookmark, and
 * any string anywhere in it that is a record's id or name, whatever key it
 * sits under.
 */
function recordsNamed(series: ListedSeries, name: string): string[] {
  const leaksIn = leaksOf(series)

  return series.bookmarks.flatMap((bookmark) => {
    const payload = SHARED[name]?.(series, bookmark)
    const named = new Set(leaksIn(payload, null))
    for (const word of stringsIn(payload)) {
      const record = RECORD_WORDS.get(word)
      if (record !== undefined) {
        named.add(record)
      }
    }

    return [...named].map((id) => `${id} @ ${JSON.stringify(bookmark)}`)
  })
}

describe('every payload with no series in its address', () => {
  it('is on the list, and the list holds nothing else', () => {
    expect(Object.keys(SHARED).toSorted(alphabetically)).toStrictEqual(
      Object.keys(shared).toSorted(alphabetically),
    )
  })

  // Stricter than the sweep above: no bookmark excuses anything here. The
  // fog of a reader with no bookmark covers every record of the series, open
  // or not, and every other series' records are foreign, so a single id,
  // name or drawing of any record fails. A count is only a number.
  describe.each(SERIES)('at every bookmark of $slug', (series) => {
    it.each(Object.keys(SHARED))('%s names no record at all', (name) => {
      expect(recordsNamed(series, name)).toStrictEqual([])
    })
  })
})
