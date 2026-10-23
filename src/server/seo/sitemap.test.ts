import { describe, expect, it } from 'vitest'

import { characters } from '~/data/series/one-piece/characters'
import { fruits } from '~/data/series/one-piece/fruits'
import { places, ships } from '~/data/series/one-piece/places'
import { SITE_ORIGIN } from '~/lib/seo/site'

import { sitemapXml } from './sitemap.server'

const SECTION_COUNT = 5
const LOCALE_COUNT = 2

const LOCATION = /<loc>(?<url>[^<]+)<\/loc>/gu

function locations(): string[] {
  return Array.from(
    sitemapXml().matchAll(LOCATION),
    (match) => match.groups?.['url'] ?? '',
  )
}

describe('the sitemap', () => {
  it('is a sitemap document with the alternates namespace declared', () => {
    expect(
      sitemapXml().startsWith('<?xml version="1.0" encoding="UTF-8"?>'),
    ).toBe(true)
    expect(sitemapXml()).toContain(
      'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    )
    expect(sitemapXml()).toContain('xmlns:xhtml="http://www.w3.org/1999/xhtml"')
  })

  it('lists every page of the site in both languages', () => {
    expect(locations()).toHaveLength(
      (SECTION_COUNT
        + characters.length
        + fruits.length
        + places.length
        + ships.length)
        * LOCALE_COUNT,
    )
  })

  it('carries both ships’ pages, in both languages', () => {
    for (const locale of ['en', 'it']) {
      expect(locations()).toContain(
        `${SITE_ORIGIN}/${locale}/places/going-merry`,
      )
      expect(locations()).toContain(
        `${SITE_ORIGIN}/${locale}/places/thousand-sunny`,
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

    expect(locations()).toContain(`${SITE_ORIGIN}/it/characters/${first}`)
    expect(locations()).toContain(`${SITE_ORIGIN}/en/characters/${first}`)
  })

  it('carries every place page', () => {
    expect(locations()).toContain(`${SITE_ORIGIN}/en/places/alubarna`)
    expect(locations()).toContain(`${SITE_ORIGIN}/it/places/alubarna`)
  })

  it('gives every entry both languages and the x-default', () => {
    const entries = sitemapXml().split('<url>').length - 1
    const alternates = sitemapXml().split('<xhtml:link').length - 1

    expect(alternates).toBe(entries * (LOCALE_COUNT + 1))
  })

  it('is built once and handed out again', () => {
    expect(sitemapXml()).toBe(sitemapXml())
  })
})
