import { isNotFound } from '@tanstack/react-router'
import { describe, expect, it } from 'vitest'

import type { Bookmark, BookmarkMode } from '~/lib/progress/episode'

import { Route } from './$id'

type Params = { readonly id: string; readonly locale: string }
type LoaderData = {
  readonly id: string
  readonly mode: BookmarkMode
  readonly revealed: boolean
}
type Meta = {
  readonly content?: string
  readonly name?: string
  readonly title?: string
}

type Head = (input: {
  readonly loaderData: LoaderData
  readonly params: Params
}) => { readonly meta?: readonly Meta[] }

type Loader = (input: {
  readonly context: { readonly initialBookmark: Bookmark }
  readonly params: Params
}) => LoaderData

/**
 * The route options are typed against the whole generated tree, whose context
 * no test can stand up. Both functions under test are pure and read only the
 * fields declared above, so they are reached through a guard over `unknown`
 * rather than through an assertion on the real option type.
 */
function isHead(value: unknown): value is Head {
  return typeof value === 'function'
}

function isLoader(value: unknown): value is Loader {
  return typeof value === 'function'
}

function routeHead(): Head {
  const head: unknown = Route.options.head
  if (!isHead(head)) {
    throw new TypeError('the character route defines no head')
  }

  return head
}

function routeLoader(): Loader {
  const loader: unknown = Route.options.loader
  if (!isLoader(loader)) {
    throw new TypeError('the character route defines no loader')
  }

  return loader
}

/**
 * What a call threw, so a test can look at it without a `try`/`catch` of its
 * own around the assertion.
 */
function thrownBy(run: () => unknown): unknown {
  try {
    run()
  } catch (error) {
    return error
  }

  throw new Error('nothing was thrown')
}

function headFor(
  id: string,
  revealed: boolean,
  mode: BookmarkMode = 'episode',
): string {
  const { meta } = routeHead()({
    params: { locale: 'en', id },
    loaderData: { id, revealed, mode },
  })

  return JSON.stringify(meta ?? [])
}

function loaderFor(id: string, initialBookmark: Bookmark): LoaderData {
  return routeLoader()({
    params: { locale: 'en', id },
    context: { initialBookmark },
  })
}

const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })
const chapterAt = (chapter: number): Bookmark => ({ mode: 'chapter', chapter })
function seasonFour(episode: number): Bookmark {
  return { mode: 'season', season: 4, episode }
}

describe('character route head', () => {
  it('keeps a covered name out of the title and description', () => {
    const meta = headFor('nico-robin', false)

    expect(meta).not.toContain('Robin')
    expect(meta).toContain('A character under fog — Zero Spoiler')
    expect(meta).toContain('episode 130')
  })

  it('describes the threshold in the unit the loader read', () => {
    expect(headFor('nico-robin', false, 'chapter')).toContain('chapter 218')
    expect(headFor('nico-robin', false, 'season')).toContain('at S04E38')
    expect(headFor('nico-robin', false, 'chapter')).not.toContain('Robin')
  })

  it('names the character once the reader has reached them', () => {
    expect(headFor('nico-robin', true)).toContain('Nico Robin — Zero Spoiler')
  })
})

describe('character route loader', () => {
  it('decides reveal from the bookmark the root route read', () => {
    expect(loaderFor('nico-robin', null).revealed).toBe(false)
    expect(loaderFor('nico-robin', ep(129)).revealed).toBe(false)
    expect(loaderFor('nico-robin', ep(130)).revealed).toBe(true)
  })

  it('reads a chapter bookmark against the chapter threshold', () => {
    expect(loaderFor('nico-robin', chapterAt(217)).revealed).toBe(false)
    expect(loaderFor('nico-robin', chapterAt(218)).revealed).toBe(true)
    expect(loaderFor('nico-robin', chapterAt(218)).mode).toBe('chapter')
  })

  it('resolves a season bookmark to its absolute episode', () => {
    // S04E38 is episode 130, where Robin is filed; S04E37 is one short.
    expect(loaderFor('nico-robin', seasonFour(37)).revealed).toBe(false)
    expect(loaderFor('nico-robin', seasonFour(38)).revealed).toBe(true)
  })

  it('throws not found for an unknown id', () => {
    const thrown = thrownBy(() => loaderFor('nobody', ep(1000)))

    expect(isNotFound(thrown)).toBe(true)
  })
})
