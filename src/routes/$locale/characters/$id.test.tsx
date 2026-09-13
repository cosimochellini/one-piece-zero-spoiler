import { isNotFound } from '@tanstack/react-router'

import type { Bookmark, BookmarkMode } from '~/lib/progress/episode'

import { Route } from './$id'

type Params = { readonly locale: string; readonly id: string }
type LoaderData = {
  readonly id: string
  readonly revealed: boolean
  readonly mode: BookmarkMode
}
type Meta = {
  readonly title?: string
  readonly name?: string
  readonly content?: string
}

// The route options are typed against the whole generated tree. The two
// functions under test are pure, so they are called here through the narrow
// shape they actually read.
const head = Route.options.head as unknown as (input: {
  readonly params: Params
  readonly loaderData: LoaderData
}) => { readonly meta?: readonly Meta[] }

const loader = Route.options.loader as unknown as (input: {
  readonly params: Params
  readonly context: { readonly initialBookmark: Bookmark }
}) => LoaderData

function headFor(
  id: string,
  revealed: boolean,
  mode: BookmarkMode = 'episode',
) {
  const { meta } = head({
    params: { locale: 'en', id },
    loaderData: { id, revealed, mode },
  })

  return JSON.stringify(meta ?? [])
}

function loaderFor(id: string, initialBookmark: Bookmark) {
  return loader({ params: { locale: 'en', id }, context: { initialBookmark } })
}

const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })

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
    const chapter = (n: number): Bookmark => ({ mode: 'chapter', chapter: n })
    expect(loaderFor('nico-robin', chapter(217)).revealed).toBe(false)
    expect(loaderFor('nico-robin', chapter(218)).revealed).toBe(true)
    expect(loaderFor('nico-robin', chapter(218)).mode).toBe('chapter')
  })

  it('resolves a season bookmark to its absolute episode', () => {
    // S04E38 is episode 130, where Robin is filed; S04E37 is one short.
    const season = (episode: number): Bookmark => ({
      mode: 'season',
      season: 4,
      episode,
    })
    expect(loaderFor('nico-robin', season(37)).revealed).toBe(false)
    expect(loaderFor('nico-robin', season(38)).revealed).toBe(true)
  })

  it('throws not found for an unknown id', () => {
    try {
      loaderFor('nobody', ep(1000))
      throw new Error('expected notFound')
    } catch (error) {
      expect(isNotFound(error)).toBe(true)
    }
  })
})
