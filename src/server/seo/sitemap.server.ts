import { archiveOf, SERIES } from '~/data/series'
import type { Entity, SeriesArchive } from '~/data/types'
import { LOCALES } from '~/i18n/locales'
import { localeAlternates } from '~/lib/seo/paths'
import { absoluteUrl } from '~/lib/seo/site'

/** XML entries are shared by requests, but never by different series' archives. */
const pages = new WeakMap<SeriesArchive, string[]>()
const document: { pending?: Promise<string> } = {}

const ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;',
}

function escapeXml(value: string): string {
  return value.replaceAll(/["&'<>]/gu, (char) => ESCAPES[char] ?? char)
}

/** An index and the record addresses published under it. */
function pathsFor(section: string, entries: Entity[]): string[] {
  return [section, ...entries.map((entity) => `${section}/${entity.id}`)]
}

/** Only kinds and features the description publishes get addresses. */
function suffixes(archive: SeriesArchive): string[] {
  const { characters, fruits, places, ships, series } = archive
  return [
    '',
    ...(series.kinds.includes('character') ?
      pathsFor('/characters', characters)
    : []),
    ...(series.features.fruits ? pathsFor('/fruits', fruits) : []),
    ...(series.kinds.includes('place') || series.kinds.includes('ship') ?
      pathsFor('/places', [...places, ...ships])
    : []),
    ...(series.features.filler ? ['/filler'] : []),
  ]
}

function entryFor(path: string): string {
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

function seriesEntries(archive: SeriesArchive): string[] {
  const cached = pages.get(archive)
  if (cached !== undefined) {
    return cached
  }
  const entries = suffixes(archive).flatMap((suffix) =>
    LOCALES.map((locale) =>
      entryFor(`/${archive.series.slug}/${locale}${suffix}`),
    ),
  )
  pages.set(archive, entries)
  return entries
}

async function buildSitemap(): Promise<string> {
  const archives = await Promise.all(
    SERIES.map(async ({ slug }) => archiveOf(slug)),
  )
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...LOCALES.flatMap((locale) => [
      entryFor(`/${locale}`),
      entryFor(`/${locale}/legal`),
    ]),
    ...archives.flatMap((archive) => seriesEntries(archive)),
    '</urlset>',
    '',
  ].join('\n')
}

/** Every published series page, shared hub and legal page, ready for an HTTP response. */
export async function sitemapXml(): Promise<string> {
  document.pending ??= buildSitemap()
  try {
    return await document.pending
  } catch (error) {
    delete document.pending
    throw error
  }
}
