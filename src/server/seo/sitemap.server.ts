import { characters } from '~/data/characters'
import { fruits } from '~/data/fruits'
import { LOCALES } from '~/i18n/locales'
import { localeAlternates } from '~/lib/seo/paths'
import { absoluteUrl } from '~/lib/seo/site'

/**
 * Every address the site publishes, as one sitemap.
 *
 * It lives in the server zone because it is the only place outside the
 * archive's own loaders that reads `~/data`: the record ids are the name
 * slugs, and they are already the addresses of the pages, so listing them is
 * listing the URLs and nothing more than the URLs. No title, no summary, no
 * threshold — a sitemap says where pages are, not what is on them.
 *
 * Both locales are listed, and each entry carries the other as an
 * `xhtml:link`, which is how a search engine is told the two are the same
 * page in two languages rather than two pages saying the same thing.
 */

/** The pages that exist in every locale regardless of the archive. */
const SECTIONS = ['', '/characters', '/fruits', '/places'] as const

const ESCAPES: Readonly<Record<string, string>> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;',
}

function escapeXml(value: string): string {
  return value.replaceAll(/["&'<>]/gu, (char) => ESCAPES[char] ?? char)
}

function suffixes(): readonly string[] {
  return [
    ...SECTIONS,
    ...characters.map((entity) => `/characters/${entity.id}`),
    ...fruits.map((entity) => `/fruits/${entity.id}`),
  ]
}

function entryFor(suffix: string, locale: string): string {
  const path = `/${locale}${suffix}`
  const alternates = localeAlternates(path).map(
    (alternate) =>
      `    <xhtml:link rel="alternate" hreflang="${alternate.hrefLang}" href="${escapeXml(absoluteUrl(alternate.href))}" />`,
  )

  return [
    '  <url>',
    `    <loc>${escapeXml(absoluteUrl(path))}</loc>`,
    ...alternates,
    '  </url>',
  ].join('\n')
}

function buildSitemap(): string {
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...suffixes().flatMap((suffix) =>
      LOCALES.map((locale) => entryFor(suffix, locale)),
    ),
    '</urlset>',
    '',
  ].join('\n')
}

// Built once per server process rather than per request: the document is the
// same for every caller, and it is nine hundred entries of string joining.
const document = buildSitemap()

/** The whole sitemap, ready to be a response body. */
export function sitemapXml(): string {
  return document
}
