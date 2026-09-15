import { describe, expect, it } from 'vitest'

import { describeSocial } from './tags'

const PAGE = {
  description: 'A scholar.',
  imageAlt: 'The card.',
  imageUrl: 'https://example.test/og-card.png',
  locale: 'en',
  siteName: 'Zero Spoiler',
  title: 'Nico Robin — Zero Spoiler',
  type: 'article',
  url: 'https://example.test/en/characters/nico-robin',
} as const

function valueOf(key: string): string | undefined {
  const tags = describeSocial(PAGE)
  const found = tags.find((tag) => {
    return (
      ('property' in tag && tag.property === key)
      || ('name' in tag && tag.name === key)
    )
  })

  return found !== undefined && 'content' in found ? found.content : undefined
}

describe('the social cards', () => {
  it('say the page’s own title and description, not the record’s', () => {
    expect(valueOf('og:title')).toBe(PAGE.title)
    expect(valueOf('og:description')).toBe(PAGE.description)
    expect(valueOf('twitter:title')).toBe(PAGE.title)
  })

  it('carry the canonical address and an absolute image', () => {
    expect(valueOf('og:url')).toBe(PAGE.url)
    expect(valueOf('og:image')).toBe(PAGE.imageUrl)
    expect(valueOf('twitter:card')).toBe('summary_large_image')
  })

  it('give Open Graph the territory it asks for, and name the other language', () => {
    expect(valueOf('og:locale')).toBe('en_US')
    expect(valueOf('og:locale:alternate')).toBe('it_IT')
  })

  it('files a record as an article and everything else as a site page', () => {
    expect(valueOf('og:type')).toBe('article')

    const website = describeSocial({ ...PAGE, type: 'website' })

    expect(JSON.stringify(website)).toContain('"content":"website"')
  })
})
