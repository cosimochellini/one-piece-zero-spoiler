import { describe, expect, it } from 'vitest'

import { chapterAtEpisode } from '~/data/chapters'
import { getCharacter } from '~/data/characters'
import type { Locale } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import { searchableOf } from '~/server/archive/project.server'
import { readerFor } from '~/server/archive/reader.server'

import { foldName, matchFolded } from './fold'

const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })
const ch = (chapter: number): Bookmark => ({ mode: 'chapter', chapter })

/** A character the archive files, or a failure that says which one is missing. */
function must(id: string): NonNullable<ReturnType<typeof getCharacter>> {
  const entity = getCharacter(id)
  if (entity === undefined) {
    throw new Error(`no ${id} on file`)
  }

  return entity
}

/**
 * The search as the page runs it, end to end: the server folds the name and
 * gates the epithets, the browser matches a folded query against what it was
 * sent. Both halves together, because the rule the site cares about — the fog
 * never answers a search — only holds if they agree.
 */
function search({
  bookmark,
  id,
  locale,
  query,
}: {
  bookmark: Bookmark
  id: string
  locale: Locale
  query: string
}): ReturnType<typeof matchFolded> {
  return matchFolded(
    searchableOf(must(id), readerFor(bookmark, locale)),
    foldName(query.trim()),
  )
}

describe('search', () => {
  it('folds case and diacritics', () => {
    expect(foldName('Rùfy')).toBe('rufy')
    expect(foldName('NAMI')).toBe('nami')
  })

  it('matches everything on an empty query and marks nothing', () => {
    expect(
      search({
        bookmark: ep(1),
        id: 'monkey-d-luffy',
        locale: 'en',
        query: ' '.repeat(3),
      }),
    ).toStrictEqual({ matches: true, highlight: null })
  })

  it('finds a name in the shown locale and says where to mark it', () => {
    expect(
      search({
        bookmark: ep(1),
        id: 'monkey-d-luffy',
        locale: 'en',
        query: 'luf',
      }),
    ).toStrictEqual({ matches: true, highlight: [10, 13] })
  })

  it('finds a name written in the other locale but marks nothing', () => {
    // An Italian reader who knows him as Luffy still finds Rufy.
    expect(
      search({
        bookmark: ep(1),
        id: 'monkey-d-luffy',
        locale: 'it',
        query: 'luffy',
      }),
    ).toStrictEqual({ matches: true, highlight: null })
  })

  it('does not match a name that is not there', () => {
    expect(
      search({
        bookmark: ep(1),
        id: 'monkey-d-luffy',
        locale: 'en',
        query: 'zoro',
      }).matches,
    ).toBe(false)
  })
})

describe('the epithets a search may answer with', () => {
  const newgate = 'edward-newgate'

  it('finds one the reader has reached, in either locale', () => {
    expect(
      search({
        bookmark: ep(152),
        id: newgate,
        locale: 'en',
        query: 'barbabianca',
      }).matches,
    ).toBe(true)
    expect(
      search({
        bookmark: ep(1200),
        id: newgate,
        locale: 'it',
        query: 'whitebeard',
      }).matches,
    ).toBe(true)
  })

  it('does not find one the reader has not', () => {
    // Not "sent and declined": an epithet above the reader's episode is not
    // in the browser at all.
    expect(
      search({
        bookmark: ep(150),
        id: newgate,
        locale: 'en',
        query: 'whitebeard',
      }).matches,
    ).toBe(false)
    expect(
      search({ bookmark: null, id: newgate, locale: 'en', query: 'whitebeard' })
        .matches,
    ).toBe(false)
  })

  it('searches an epithet for a chapter reader once the chapter reaches it', () => {
    // Epithets are dated in episodes; "Whitebeard" is learned in episode 151,
    // so a chapter reader finds it from the first chapter that reaches 151.
    const at = chapterAtEpisode(151)

    expect(
      search({
        bookmark: ch(at - 1),
        id: newgate,
        locale: 'en',
        query: 'whitebeard',
      }).matches,
    ).toBe(false)
    expect(
      search({
        bookmark: ch(at),
        id: newgate,
        locale: 'en',
        query: 'whitebeard',
      }).matches,
    ).toBe(true)
  })
})
