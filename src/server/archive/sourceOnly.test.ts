import { describe, expect, it } from 'vitest'

import { sourceOf } from '~/data/reveal'
import type { BookSection } from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { Source } from '~/lib/progress/spoiler'
import { OP_ARCHIVE as BASE } from '~/test/archive'
import { leaksOf } from '~/test/fog'
import { ONE_PIECE_LOADED } from '~/test/series'
import { plant } from '~/test/sourceOnly'

import { handleOf } from './handle.server'
import { landingPage } from './home.server'
import { characterPage, charactersPage } from './pages.server'
import { type Payload, payloadsFor } from './payloads.server'
import { readerFor } from './reader.server'
import { sagaLabels } from './sagaLabels.server'

/**
 * The owner's rule (2026-10-23): a record one source alone tells does not
 * exist for a reader of the other, nor for one with no bookmark. Proved on
 * records planted for the test (`~/test/sourceOnly`), since none is filed.
 */

const SOURCES: Source[] = ['episode', 'chapter']

/**
 * Every key at every bookmark is most of the sweep's time, so a page asked
 * for by key is asked for one key in seven at each bookmark, a different
 * seventh each time, as the sweep does; a key the planting added always.
 */
const STRIDE = 7

/** A bookmark of this source at this count. */
function at(source: Source, count: number): NonNullable<Bookmark> {
  return source === 'episode' ?
      { mode: 'episode', episode: count }
    : { mode: 'chapter', chapter: count }
}

/** The last count of a source: a reader there has reached everything. */
function ceilingOf(source: Source): number {
  return source === 'episode' ?
      BASE.series.episodeCeiling
    : BASE.series.chapterCeiling
}

/** The source a reader of this one is not. */
function otherThan(source: Source): Source {
  return source === 'episode' ? 'chapter' : 'episode'
}

/** The names of a table of saga labels. */
function names(rows: { name: string }[]): string[] {
  return rows.map(({ name }) => name)
}

/** An excuse for every record, as a page that names arcs by design has. */
function byDesign(): boolean {
  return true
}

/** The first two shelves of the archive, and the rest. */
function firstShelves(): [BookSection, BookSection, BookSection[]] {
  const [first, second, ...rest] = BASE.bookSections
  if (first === undefined || second === undefined) {
    throw new Error('The archive shelves too little')
  }

  return [first, second, rest]
}

/** One question to put to a page: a bookmark, a locale and a key. */
interface Ask {
  bookmark: Bookmark
  key: string
  locale: Locale
}

/** The questions to put to one page at these bookmarks. */
function asksOf(mine: Payload, real: Payload, bookmarks: Bookmark[]): Ask[] {
  const keys = mine.keys?.() ?? ['']
  const filed = new Set(real.keys?.() ?? [''])

  return bookmarks.flatMap((bookmark, step) =>
    keys
      .filter((key, k) => !filed.has(key) || (k + step) % STRIDE === 0)
      .flatMap((key) => LOCALES.map((locale) => ({ bookmark, key, locale }))),
  )
}

describe.each(SOURCES)('a record of the %s alone', (source) => {
  const planted = plant(BASE, source)
  const { twin } = planted
  const other = otherThan(source)
  const others = BASE.bookmarks.filter(
    (bookmark) => sourceOf(bookmark) !== source,
  )
  const before = payloadsFor(BASE)
  const after = payloadsFor(planted.archive)

  it.each(after.map((mine, index) => ({ mine, name: mine.name, index })))(
    '$name is sent to a reader of the other source, or of none, byte for byte as before',
    ({ index, mine }) => {
      // The planting adds no page, so the two lists match one for one.
      const real = before[index] ?? mine

      const changed = asksOf(mine, real, others).flatMap(
        ({ bookmark, key, locale }) => {
          const sent = JSON.stringify(mine.run(bookmark, locale, key))
          const was = JSON.stringify(real.run(bookmark, locale, key))

          return sent === was ? [] : `'${key}' @ ${JSON.stringify(bookmark)}`
        },
      )

      expect(changed).toStrictEqual([])
    },
  )

  it('opens for a reader of its own source at its threshold, and is covered and counted before it', () => {
    const threshold =
      source === 'episode' ?
        twin.character.revealedAtEpisode
      : twin.character.revealedAtChapter
    const open = charactersPage(
      readerFor(planted.archive, at(source, threshold), 'en'),
    )
    const covered = charactersPage(
      readerFor(planted.archive, at(source, threshold - 1), 'en'),
    )
    const real = charactersPage(
      readerFor(BASE, at(source, threshold - 1), 'en'),
    )

    expect(open.featuredOpen.map(({ id }) => id)).toContain(twin.character.id)
    expect(covered.featuredOpen.map(({ id }) => id)).not.toContain(
      twin.character.id,
    )
    expect(covered.featuredCovered).toHaveLength(
      real.featuredCovered.length + 1,
    )
    expect(covered.filed).toBe(real.filed + 1)
  })

  it('tells its own reader the facts only it tells', () => {
    const reader = readerFor(
      planted.archive,
      at(source, ceilingOf(source)),
      'en',
    )

    const page = JSON.stringify(characterPage(planted.host.id, reader))

    expect(page).toContain(JSON.stringify(planted.strokes))
    expect(page).toContain(planted.role)
  })

  it('has no page and no handle for a reader of the other source', () => {
    const reader = readerFor(planted.archive, at(other, ceilingOf(other)), 'en')

    expect(reader.has(twin.character)).toBe(false)
    expect(characterPage(twin.character.id, reader)).toBeUndefined()
    expect(() => handleOf(twin.character.id, reader.archive)).toThrow(
      /no handle/u,
    )
  })

  it('stays out of the demo, even for a reader of its own source on a trial', () => {
    const trial = at(source, 1)
    const demo = JSON.stringify(
      landingPage(readerFor(planted.archive, trial, 'en'), trial),
    )
    const shown = Object.values(twin).filter(({ id }) => demo.includes(id))

    expect(shown).toStrictEqual([])
    expect(demo).not.toContain(planted.epithet)
    expect(demo).not.toContain(planted.role)
  })

  it('names its arc only in the saga labels of its own unit', () => {
    const reader = readerFor(
      planted.archive,
      at(source, ceilingOf(source)),
      'en',
    )
    const { chapter, episode } = sagaLabels(reader)
    const [own, theirs] =
      source === 'episode' ? [episode, chapter] : [chapter, episode]

    expect(names(own)).toContain(twin.arc.name.en)
    expect(names(theirs)).not.toContain(twin.arc.name.en)
  })

  it('is fog to the sweep for a reader of the other source, even on a page that names arcs on purpose', () => {
    const leaks = leaksOf({ ...ONE_PIECE_LOADED, archive: planted.archive })
    const named = { id: twin.arc.id }
    const otherCeiling = at(other, ceilingOf(other))
    const ownCeiling = at(source, ceilingOf(source))

    expect(leaks(named, otherCeiling, byDesign)).toStrictEqual([twin.arc.id])
    expect(leaks(named, null, byDesign)).toStrictEqual([twin.arc.id])
    expect(leaks(named, ownCeiling, byDesign)).toStrictEqual([])
  })
})

describe('the archive a reader is handed', () => {
  it('is built once per source and kept, not once per request', () => {
    const episodes = readerFor(BASE, at('episode', 1), 'en').archive

    expect(
      readerFor(BASE, { mode: 'season', season: 1, episode: 1 }, 'it').archive,
    ).toBe(episodes)
    expect(readerFor(BASE, at('chapter', 1), 'en').archive).toBe(
      readerFor(BASE, at('chapter', 2), 'it').archive,
    )
    expect(readerFor(BASE, null, 'en').archive).toBe(
      readerFor(BASE, null, 'it').archive,
    )
    expect(readerFor(BASE, null, 'en').archive).not.toBe(episodes)
  })

  it('refuses to shelve the characters of a first arc it drops', () => {
    const [first, second, rest] = firstShelves()
    const archive = {
      ...BASE,
      bookSections: [
        { ...first, arc: { ...first.arc, source: 'episode' as const } },
        second,
        ...rest,
      ],
    }

    expect(() => readerFor(archive, at('chapter', 1), 'en')).toThrow(
      /one source alone/u,
    )
  })
})
