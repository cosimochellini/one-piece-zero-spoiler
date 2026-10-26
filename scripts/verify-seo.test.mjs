import { describe, expect, it } from 'vitest'

import { headOf, problemsOf, sharedBy } from './verify-seo.mjs'

const page = (over = {}) => ({
  title: 'Ozu Junior | One Piece | Zero Spoiler',
  ogTitle: 'Ozu Junior | One Piece | Zero Spoiler',
  description: 'Un gigante alto quanto una torre.',
  canonical: 'https://zerospoiler.app/one-piece/it/characters/little-oars-jr',
  alternates: ['it', 'en', 'x-default'],
  ...over,
})
const PATH = '/one-piece/it/characters/little-oars-jr'

describe('the head of a page', () => {
  it('reads title, description, canonical and alternates', () => {
    const head = headOf(
      '<title>A &amp; B</title><meta name="description" content="d" nonce="n"/>'
        + '<meta property="og:title" content="A &amp; B"/>'
        + '<link rel="canonical" href="https://x/a"/>'
        + '<link rel="alternate" href="https://x/b" hrefLang="en"/>',
    )

    expect(head).toMatchObject({
      title: 'A & B',
      description: 'd',
      canonical: 'https://x/a',
      alternates: ['en'],
    })
  })
})

describe('what is wrong with a head', () => {
  it('passes a complete one', () => {
    expect(problemsOf(PATH, page())).toEqual([])
  })

  it('wants the series name in a series page title', () => {
    expect(
      problemsOf(
        PATH,
        page({
          title: 'Ozu Junior | Zero Spoiler',
          ogTitle: 'Ozu Junior | Zero Spoiler',
        }),
      ),
    ).toEqual(['title lacks "One Piece": Ozu Junior | Zero Spoiler'])
  })

  it('asks no series of the hub', () => {
    expect(
      problemsOf(
        '/it',
        page({
          canonical: 'https://x/it',
          title: 'Zero Spoiler',
          ogTitle: 'Zero Spoiler',
        }),
      ),
    ).toEqual([])
  })

  it('flags a missing description, a foreign canonical and a missing alternate', () => {
    expect(
      problemsOf(
        PATH,
        page({
          description: '',
          canonical: 'https://x/other',
          alternates: ['it'],
        }),
      ),
    ).toEqual([
      'description is empty',
      'canonical is https://x/other',
      'no en alternate',
    ])
  })
})

describe('texts two pages share', () => {
  it('lists them and skips empty ones', () => {
    const pages = [
      { path: '/a', head: { title: 't', description: '' } },
      { path: '/b', head: { title: 't', description: '' } },
      { path: '/en/a', head: { title: 't', description: '' } },
    ]

    expect(sharedBy(pages, 'title')).toEqual([['t', ['/a', '/b']]])
    expect(sharedBy(pages, 'description')).toEqual([])
  })
})
