// Pins wiki revisions into `docs/content-provenance/sources.json`:
// `npm run provenance:pin -- --series <slug> "Title" ["Title" …] [--dry-run]`.
// A title already pinned from the series' wiki keeps its revision; any other
// is read at its latest revision and appended, never rewriting an entry. Each
// title prints its key and the cached wikitext to read.
import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { parseArgs } from 'node:util'

import { ROOT, seriesOrExit } from './archive-loader.mjs'
import { cached, wikiOf } from './wiki.mjs'

// fallow-ignore-next-line security-sink -- ROOT is this repository's absolute path; the rest is a literal.
const MANIFEST = path.join(ROOT, 'docs', 'content-provenance', 'sources.json')

/** The query of a pinned revision, missing only `revids=` or `titles=`. */
const PARAMETERS = new URLSearchParams({
  action: 'query',
  prop: 'revisions',
  rvprop: 'ids|timestamp|content',
  rvslots: 'main',
  format: 'json',
  formatversion: '2',
})
const QUERY = `?${PARAMETERS.toString()}`

/** What a series' keys start with, before `en-`. */
const PREFIX = { 'one-piece': '', 'hunter-x-hunter': 'hxh-' }

/** @typedef {{ locale: string, title: string, revision: number, revisionDate: string, url: string, revisionUrl: string, apiUrl: string, contentSha256: string }} Source */
/** @typedef {{ key: string, file: string, source?: Source }} Pin */
/** @typedef {{ title: string, missing?: boolean, revisions?: { revid: number, timestamp: string, slots: { main: { content: string } } }[] }} RevisionPage */

/**
 * A title in a page URL: underscores for spaces, URI-encoded, with the
 * parentheses MediaWiki leaves bare encoded too.
 * @param {string} title The page title.
 * @returns {string} The URL path segment.
 */
export function urlTitle(title) {
  return encodeURIComponent(title.replaceAll(' ', '_')).replaceAll(
    /[()]/gu,
    (bracket) => (bracket === '(' ? '%28' : '%29'),
  )
}

/**
 * The key of a new entry: `en-<Title>.json` for One Piece, unless another
 * title holds it, and `hxh-en-<Title>-<rev>.json` for Hunter x Hunter.
 * @param {string} slug The series.
 * @param {string} title The page title.
 * @param {number} revision Its revision.
 * @param {Record<string, Source>} sources The pinned sources.
 * @returns {string} The key.
 */
export function keyOf(slug, title, revision, sources) {
  const prefix = PREFIX[slug] ?? `${slug}-`
  const name = `${prefix}en-${title.replaceAll(' ', '_')}`
  const bare = `${name}.json`

  return slug === 'one-piece' && sources[bare] === undefined ?
      bare
    : `${name}-${String(revision)}.json`
}

/**
 * The entry pinning one revision, in the shape every entry has.
 * @param {string} api The wiki's `api.php`.
 * @param {RevisionPage} page The API's page, with its one revision.
 * @returns {Source} The entry.
 */
export function sourceOf(api, { title, revisions = [] }) {
  const [{ revid, timestamp, slots }] = revisions
  const site = api.replace(/api\.php$/u, '')

  return {
    locale: 'en',
    title,
    revision: revid,
    revisionDate: timestamp,
    url: `${site}wiki/${urlTitle(title)}`,
    revisionUrl: `${site}index.php?oldid=${String(revid)}`,
    apiUrl: `${api}${QUERY}&revids=${String(revid)}`,
    contentSha256: createHash('sha256')
      .update(slots.main.content)
      .digest('hex'),
  }
}

/**
 * One page at one revision, or at its latest when `revision` is left out,
 * from the cache or the API.
 * @param {import('./wiki.mjs').Wiki} wiki The series' wiki.
 * @param {string} title The page title.
 * @param {number} [revision] The pinned revision.
 * @returns {Promise<RevisionPage>} The page.
 */
async function revisionPage(wiki, title, revision) {
  const [file, query] =
    revision === undefined ?
      [
        `latest/${encodeURIComponent(title)}.json`,
        `&redirects=1&titles=${encodeURIComponent(title)}`,
      ]
    : [`revisions/${String(revision)}.json`, `&revids=${String(revision)}`]
  const { query: answer } = await cached(
    // fallow-ignore-next-line security-sink -- the series' cache folder and a URI-encoded title or a revision number, neither of which can hold a path separator
    path.join(wiki.cache, file),
    title,
    wiki.en + QUERY + query,
    (whole) => whole.query?.pages?.[0] !== undefined,
  )

  return answer.pages[0]
}

/**
 * The pinned page a title lands on, at its pinned revision, when this
 * series' English wiki has it pinned under that title or the one it
 * redirects to; otherwise the page at its latest revision, with no key.
 * @param {string} title The page title.
 * @param {import('./wiki.mjs').Wiki} wiki The series' wiki.
 * @param {Record<string, Source>} sources The pinned sources.
 * @returns {Promise<{ key?: string, page: RevisionPage }>} The key and page.
 */
async function pinnedPage(title, wiki, sources) {
  // The English wiki's pages: One Piece's Italian wiki shares its host.
  const pages = `${wiki.en.replace(/api\.php$/u, '')}wiki/`
  const pinned = new Map(
    Object.entries(sources)
      .filter(([, { url }]) => url.startsWith(pages))
      .map(([key, { title: pinnedTitle }]) => [pinnedTitle, key]),
  )
  const asked = pinned.get(title)
  if (asked !== undefined) {
    return {
      key: asked,
      page: await revisionPage(wiki, title, sources[asked]?.revision),
    }
  }

  const page = await revisionPage(wiki, title)
  const landed = pinned.get(page.title)

  return landed === undefined ?
      { page }
    : {
        key: landed,
        page: await revisionPage(wiki, page.title, sources[landed]?.revision),
      }
}

/**
 * Pins one title and caches its wikitext: the pinned key, or a new key and
 * the entry to append. A missing page throws.
 * @param {string} asked The title as asked, underscores or spaces.
 * @param {{ slug: string, wiki: import('./wiki.mjs').Wiki, sources: Record<string, Source> }} pin The series, its wiki and the pinned sources.
 * @returns {Promise<Pin>} The key, the wikitext file and the entry when it is new.
 */
export async function pinTitle(asked, { slug, wiki, sources }) {
  const { key, page } = await pinnedPage(
    asked.replaceAll('_', ' '),
    wiki,
    sources,
  )
  const [revision] = page.revisions ?? []
  if (revision === undefined) {
    throw new Error(`MISSING\t${asked}`)
  }

  // fallow-ignore-next-line security-sink -- the series' cache folder and a revision number
  const file = path.join(
    wiki.cache,
    'revisions',
    `${String(revision.revid)}.txt`,
  )
  mkdirSync(path.dirname(file), { recursive: true })
  writeFileSync(file, revision.slots.main.content)

  return key === undefined ?
      {
        key: keyOf(slug, page.title, revision.revid, sources),
        file,
        source: sourceOf(wiki.en, page),
      }
    : { key, file }
}

/**
 * One title pinned, or its failure printed.
 * @param {string} title The title.
 * @param {Parameters<typeof pinTitle>[1]} pin The series, its wiki and the pinned sources.
 * @returns {Promise<Pin | undefined>} The pin, or nothing when it failed.
 */
async function reported(title, pin) {
  try {
    return await pinTitle(title, pin)
  } catch (error) {
    console.error(error.message)
  }
}

/**
 * Pins each title in turn, so a title asked twice is pinned once, and
 * prints its key and wikitext file; a title that fails is reported and
 * skipped.
 * @param {string[]} titles The titles.
 * @param {{ slug: string, wiki: import('./wiki.mjs').Wiki }} series The series and its wiki.
 * @param {Record<string, Source>} pinned The pinned sources.
 * @returns {Promise<{ sources: Record<string, Source>, failed: boolean }>} The sources with the new entries, and whether any title failed.
 */
export async function pinAll(titles, { slug, wiki }, pinned) {
  const sources = { ...pinned }
  let failed = false
  for (const title of titles) {
    const pinned = await reported(title, { slug, wiki, sources })
    if (pinned === undefined) {
      failed = true
      continue
    }

    const { key, file, source } = pinned
    if (source !== undefined) {
      sources[key] = source
    }
    console.log(
      `${key}\t${path.relative(ROOT, file)}${source === undefined ? '' : '\t(new)'}`,
    )
  }

  return { sources, failed }
}

/**
 * The manifest's text with its sources replaced, formatted as the file is,
 * so earlier entries keep every byte and new ones follow them.
 * @param {Record<string, unknown>} manifest The parsed manifest.
 * @param {Record<string, Source>} sources Its sources, with the new entries.
 * @returns {string} The file's new text.
 */
export function manifestText(manifest, sources) {
  return `${JSON.stringify({ ...manifest, sources }, undefined, 2)}\n`
}

/**
 * Appends the new sources to the manifest file unless this is a dry run,
 * and says how many there were.
 * @param {string} file The manifest file.
 * @param {{ sources: Record<string, Source> }} manifest The manifest as read.
 * @param {Record<string, Source>} sources Its sources, with the new entries.
 * @param {boolean} dryRun Whether to write nothing.
 */
export function save(file, manifest, sources, dryRun) {
  const added =
    Object.keys(sources).length - Object.keys(manifest.sources).length
  if (!dryRun && added > 0) {
    writeFileSync(file, manifestText(manifest, sources))
  }
  const done =
    dryRun ? 'dry run: nothing written' : `appended to ${path.basename(file)}`
  console.error(`${String(added)} new, ${done}`)
}

/**
 * Pins every title on the command line and writes the manifest once.
 * @returns {Promise<number>} Zero, one when a title failed, two on bad usage.
 */
async function main() {
  const { values, positionals } = parseArgs({
    allowPositionals: true,
    options: {
      'series': { type: 'string', default: 'one-piece' },
      'dry-run': { type: 'boolean', default: false },
    },
  })
  if (positionals.length === 0) {
    console.error(
      'Usage: npm run provenance:pin -- --series <slug> "Title" ["Title" …] [--dry-run]',
    )
    return 2
  }

  const series = await seriesOrExit(['--series', values.series])
  const manifest = JSON.parse(readFileSync(MANIFEST, 'utf8'))
  const { sources, failed } = await pinAll(
    positionals,
    { slug: series.slug, wiki: wikiOf(series) },
    manifest.sources,
  )
  save(MANIFEST, manifest, sources, values['dry-run'])

  return failed ? 1 : 0
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  process.exitCode = await main()
}
