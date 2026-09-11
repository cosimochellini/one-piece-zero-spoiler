import { isNotFound } from '@tanstack/react-router'

import { Route } from './$id'

type Params = { readonly locale: string; readonly id: string }
type LoaderData = { readonly id: string; readonly revealed: boolean }
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
  readonly context: { readonly initialProgress: number | null }
}) => LoaderData

function headFor(id: string, revealed: boolean) {
  const { meta } = head({
    params: { locale: 'en', id },
    loaderData: { id, revealed },
  })

  return JSON.stringify(meta ?? [])
}

function loaderFor(id: string, initialProgress: number | null) {
  return loader({ params: { locale: 'en', id }, context: { initialProgress } })
}

describe('character route head', () => {
  it('keeps a covered name out of the title and description', () => {
    const meta = headFor('nico-robin', false)

    expect(meta).not.toContain('Robin')
    expect(meta).toContain('A character under fog — Zero Spoiler')
    expect(meta).toContain('episode 130')
  })

  it('names the character once the reader has reached them', () => {
    expect(headFor('nico-robin', true)).toContain('Nico Robin — Zero Spoiler')
  })
})

describe('character route loader', () => {
  it('decides reveal from the bookmark the root route read', () => {
    expect(loaderFor('nico-robin', null).revealed).toBe(false)
    expect(loaderFor('nico-robin', 129).revealed).toBe(false)
    expect(loaderFor('nico-robin', 130).revealed).toBe(true)
  })

  it('throws not found for an unknown id', () => {
    try {
      loaderFor('nobody', 1000)
      throw new Error('expected notFound')
    } catch (error) {
      expect(isNotFound(error)).toBe(true)
    }
  })
})
