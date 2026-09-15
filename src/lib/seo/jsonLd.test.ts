import { describe, expect, it } from 'vitest'

import { pageJsonLd } from './jsonLd'

const PAGE = {
  description: 'A scholar.',
  kind: 'record',
  locale: 'en',
  siteName: 'Zero Spoiler',
  siteUrl: 'https://example.test/en',
  title: 'Nico Robin — Zero Spoiler',
  trail: [{ name: 'Characters', url: 'https://example.test/en/characters' }],
  url: 'https://example.test/en/characters/nico-robin',
} as const

function parsed(page: typeof PAGE): unknown {
  const graph: unknown = JSON.parse(pageJsonLd(page))

  return graph
}

describe('the structured data of a page', () => {
  it('parses, which is the only thing a consumer asks of it', () => {
    expect(() => parsed(PAGE)).not.toThrow()
  })

  it('says the site, the page and the trail, in that order', () => {
    const graph = JSON.stringify(parsed(PAGE))

    expect(graph).toContain('"@type":"WebSite"')
    expect(graph).toContain('"@type":"WebPage"')
    expect(graph).toContain('"@type":"BreadcrumbList"')
  })

  it('files an index as a collection and the landing as a page', () => {
    expect(pageJsonLd({ ...PAGE, kind: 'index', trail: [] })).toContain(
      'CollectionPage',
    )
    expect(pageJsonLd({ ...PAGE, kind: 'landing', trail: [] })).toContain(
      '"@type":"WebPage"',
    )
  })

  it('leaves out the trail when there is none', () => {
    expect(pageJsonLd({ ...PAGE, trail: [] })).not.toContain('BreadcrumbList')
  })

  it('cannot be closed early by a title that spells a closing tag', () => {
    const escaped = pageJsonLd({ ...PAGE, title: '</script><b>oh no' })

    expect(escaped).not.toContain('<')
    expect(escaped).toContain(String.raw`\u003C/script`)
  })

  it('repeats nothing the page did not give it', () => {
    expect(pageJsonLd(PAGE)).not.toContain('episode')
  })
})
