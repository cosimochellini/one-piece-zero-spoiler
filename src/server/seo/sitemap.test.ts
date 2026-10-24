import { describe, expect, it } from 'vitest'

import { characters } from '~/data/series/one-piece/characters'
import { fruits } from '~/data/series/one-piece/fruits'
import { places, ships } from '~/data/series/one-piece/places'
import { SITE_ORIGIN } from '~/lib/seo/site'

import { sitemapXml } from './sitemap.server'

const SECTION_COUNT = 5
const LOCALE_COUNT = 2

const document = await sitemapXml()

const LOCATION = /<loc>(?<url>[^<]+)<\/loc>/gu

function locations(): string[] {
  return Array.from(
    document.matchAll(LOCATION),
    (match) => match.groups?.['url'] ?? '',
  )
}

describe('the sitemap', () => {
  it('is a sitemap document with the alternates namespace declared', () => {
    expect(document.startsWith('<?xml version="1.0" encoding="UTF-8"?>')).toBe(
      true,
    )
    expect(document).toContain(
      'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    )
    expect(document).toContain('xmlns:xhtml="http://www.w3.org/1999/xhtml"')
  })

  it('lists every page of the site in both languages', () => {
    expect(locations()).toHaveLength(
      (SECTION_COUNT
        + characters.length
        + fruits.length
        + places.length
        + ships.length)
        * LOCALE_COUNT
        + LOCALE_COUNT * 2,
    )
  })

  it('carries both ships’ pages, in both languages', () => {
    for (const locale of ['en', 'it']) {
      expect(locations()).toContain(
        `${SITE_ORIGIN}/one-piece/${locale}/places/going-merry`,
      )
      expect(locations()).toContain(
        `${SITE_ORIGIN}/one-piece/${locale}/places/thousand-sunny`,
      )
    }
  })

  it('names no address twice', () => {
    const unique = new Set(locations())

    expect(unique.size).toBe(locations().length)
  })

  it('addresses every page absolutely, which the format requires', () => {
    expect(locations().every((url) => url.startsWith(`${SITE_ORIGIN}/`))).toBe(
      true,
    )
  })

  it('files the landing pages without a trailing slash, as the canonical does', () => {
    expect(locations()).toContain(`${SITE_ORIGIN}/it`)
    expect(locations()).toContain(`${SITE_ORIGIN}/en`)
  })

  it('carries a record page and its translation', () => {
    const first = characters[0]?.id ?? ''

    expect(locations()).toContain(
      `${SITE_ORIGIN}/one-piece/it/characters/${first}`,
    )
    expect(locations()).toContain(
      `${SITE_ORIGIN}/one-piece/en/characters/${first}`,
    )
  })

  it('carries every place page', () => {
    expect(locations()).toContain(`${SITE_ORIGIN}/one-piece/en/places/alubarna`)
    expect(locations()).toContain(`${SITE_ORIGIN}/one-piece/it/places/alubarna`)
  })

  it('gives every entry both languages and the x-default', () => {
    const entries = document.split('<url>').length - 1
    const alternates = document.split('<xhtml:link').length - 1

    expect(alternates).toBe(entries * (LOCALE_COUNT + 1))
  })

  it('lists the shared hubs and legal pages without legacy archive addresses', () => {
    for (const locale of ['en', 'it']) {
      expect(locations()).toContain(`${SITE_ORIGIN}/${locale}`)
      expect(locations()).toContain(`${SITE_ORIGIN}/${locale}/legal`)
      expect(locations()).toContain(`${SITE_ORIGIN}/one-piece/${locale}`)
      expect(locations()).not.toContain(`${SITE_ORIGIN}/${locale}/privacy`)
      expect(locations()).not.toContain(`${SITE_ORIGIN}/${locale}/characters`)
      expect(locations()).not.toContain(`${SITE_ORIGIN}/${locale}/filler`)
    }
  })

  it('keeps reciprocal alternates within the same series', () => {
    const page = document
      .split('<url>')
      .find((entry) =>
        entry.includes(
          `<loc>${SITE_ORIGIN}/one-piece/en/characters/nami</loc>`,
        ),
      )

    expect(page).toContain(
      `hreflang="it" href="${SITE_ORIGIN}/one-piece/it/characters/nami"`,
    )
    expect(page).toContain(
      `hreflang="en" href="${SITE_ORIGIN}/one-piece/en/characters/nami"`,
    )
  })

  it('is built once and handed out again', async () => {
    await expect(sitemapXml()).resolves.toBe(document)
  })
})
