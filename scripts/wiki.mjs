// A series' wiki, read through its API (the endpoints are the series list's,
// `src/data/series/index.ts`): the HTML pages are blocked to scripts, the API
// is not. Every answer is cached under `.gate/wiki/<slug>/` so a
// run of several hundred pages is paid once; only a real answer (a parsed
// page, a missing title, a complete batch of chapter pages) is written, so a
// challenge page, a throttling error or a truncated batch does not stick to
// the next run. Nothing expires: delete the folder to read afresh.
import { createHash } from 'node:crypto'
import {
  existsSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs'
import path from 'node:path'
import { setTimeout as sleep } from 'node:timers/promises'
import { pathToFileURL } from 'node:url'

import { ROOT } from './archive-loader.mjs'
import { animePairs, pairChapters } from './wiki-pairs.mjs'

// fallow-ignore-next-line security-sink -- ROOT is this repository's absolute path; both child segments are literals.
const CACHE = path.join(ROOT, '.gate', 'wiki')

/** The queries, each missing only its titles, after a wiki's `api.php`. */
const PARSE = '?action=parse&redirects=1&prop=wikitext|text&format=json&page='
const REVISIONS =
  '?action=query&prop=revisions&rvprop=content&rvslots=main&format=json&titles='
const LANGLINKS =
  '?action=query&prop=langlinks&lllang=it&lllimit=max&redirects=1&format=json&titles='
const ITALIAN =
  '?action=query&prop=revisions&rvprop=content&rvslots=main&redirects=1&format=json&titles='

/** @typedef {{ cache: string, en: string, it: string }} Wiki */

/**
 * The wiki a series' `verify:*` scripts read, and where its answers are
 * kept: the English and Italian `api.php` of the series list, and a cache
 * folder of its own, so two series' "Chapter 1" never meet.
 * @param {import('./archive-loader.mjs').Series} series The series.
 * @returns {Wiki} Its wiki.
 */
export function wikiOf({ slug, wiki }) {
  // fallow-ignore-next-line security-sink -- the slug comes from the repository's own series list
  return { cache: path.join(CACHE, slug), en: wiki.en, it: wiki.it }
}

/** How many chapter pages one API call asks for. */
const BATCH = 50

/** @typedef {{ title: string, wikitext: string, text: string }} Page */
/** @typedef {{ title: string, revisions?: { slots?: { main?: Record<string, string> } }[], langlinks?: Record<string, string>[] }} ChapterPage */
/** @typedef {{ from: string, to: string }} Rename */
/** @typedef {{ pages?: Record<string, ChapterPage>, normalized?: Rename[], redirects?: Rename[] }} Query */
/** @typedef {{ parse?: { title: string, wikitext: Record<string, string>, text: Record<string, string> }, error?: { code?: string }, query?: Query, batchcomplete?: string, continue?: unknown }} Answer */

/**
 * One answer from the API, trying three times: the wiki drops a connection
 * now and then over a run of several hundred pages.
 * @param {string} url The request.
 * @param {string} label What is being fetched, for the error.
 * @param {number} attempt Which try this is.
 * @returns {Promise<string>} The response body.
 */
async function download(url, label, attempt = 1) {
  try {
    // fallow-ignore-next-line security-sink -- The CLI builds a fixed wiki API URL from a validated chapter; no argument supplies a destination.
    return await request(url, label)
  } catch (error) {
    if (attempt >= 3) {
      throw error
    }

    await sleep(2000 * attempt)

    return download(url, label, attempt + 1)
  }
}

/**
 * One request to the API, which must answer 200.
 * @param {string} url The request.
 * @param {string} label What is being fetched, for the error.
 * @returns {Promise<string>} The response body.
 */
async function request(url, label) {
  // fallow-ignore-next-line security-sink -- Callers construct source API URLs; CLI input is only a validated chapter number, never a host or URL.
  const response = await fetch(url, {
    headers: { 'User-Agent': 'zero-spoiler verify-chapters' },
  })
  if (!response.ok) {
    throw new Error(`${label}: HTTP ${String(response.status)}`)
  }

  return response.text()
}

/**
 * The body parsed as JSON, or an error naming what was being fetched.
 * @param {string} label What was fetched.
 * @param {string} body The response body.
 * @returns {Answer} The answer.
 */
function parsed(label, body) {
  try {
    return JSON.parse(body)
  } catch {
    throw new Error(`${label}: the API did not answer with JSON`)
  }
}

/**
 * Keeps one answer in the cache once `isAnswer` says it is a whole one: a
 * parsed page, a missing title, a complete batch.
 * @param {string} file Where it lives.
 * @param {string} label What is being fetched, for the error.
 * @param {string} url The request.
 * @param {(answer: Answer) => boolean} isAnswer What a real answer has.
 * @returns {Promise<Answer>} The answer, parsed.
 */
export async function cached(file, label, url, isAnswer) {
  if (!existsSync(file)) {
    const body = await download(url, label)
    const answer = parsed(label, body)
    if (!isAnswer(answer)) {
      throw new Error(
        `${label}: ${String(answer.error?.code ?? 'not a whole answer')}`,
      )
    }

    mkdirSync(path.dirname(file), { recursive: true })
    writeFileSync(file, body)
    await sleep(250)
  }

  return parsed(label, readFileSync(file, 'utf8'))
}

/**
 * One wiki page, from the cache or the API.
 * @param {string} title The page title.
 * @param {Wiki} wiki The series' wiki.
 * @returns {Promise<Page | undefined>} The page, or nothing when it does not exist.
 */
export async function fetchPage(title, wiki) {
  const { parse } = await cached(
    // fallow-ignore-next-line security-sink -- the series' cache folder, from its slug in the repository's own list, and a URI-encoded title that cannot contain a path separator
    path.join(wiki.cache, `${encodeURIComponent(title)}.json`),
    title,
    wiki.en + PARSE + encodeURIComponent(title),
    (answer) =>
      answer.parse !== undefined || answer.error?.code === 'missingtitle',
  )

  return parse === undefined ? undefined : (
      {
        title: parse.title,
        wikitext: parse.wikitext['*'],
        text: parse.text['*'],
      }
    )
}

/**
 * Every chapter's wikitext, in chapter order, from the cache or the API in
 * batches of fifty titles.
 * @param {number} ceiling The last chapter to ask for.
 * @param {Wiki} wiki The series' wiki.
 * @returns {Promise<Map<number, string>>} Chapter to wikitext.
 */
export async function chapterTexts(ceiling, wiki) {
  /** @type {[number, string][]} */
  const texts = []
  for (let from = 1; from <= ceiling; from += BATCH) {
    const to = Math.min(ceiling, from + BATCH - 1)
    const pages = await fetchChapters({ from, to }, wiki)
    for (const page of pages) {
      texts.push(...textOf(page))
    }
  }

  return new Map(texts.toSorted(([a], [b]) => a - b))
}

/**
 * One batch of chapter pages, from the cache or the API.
 * @param {{ from: number, to: number }} batch The first and last chapter.
 * @param {Wiki} wiki The series' wiki.
 * @returns {Promise<ChapterPage[]>} The pages the API knows.
 */
async function fetchChapters({ from, to }, wiki) {
  const label = `chapters ${String(from)}-${String(to)}`
  const titles = Array.from(
    { length: to - from + 1 },
    (_, index) => `Chapter ${String(from + index)}`,
  )
  const { query } = await fetchBatch(
    // fallow-ignore-next-line security-sink -- the series' cache folder, from its slug in the repository's own list, and numeric bounds from the batch loop
    path.join(wiki.cache, 'chapters', `${String(from)}-${String(to)}.json`),
    label,
    wiki.en + REVISIONS + encodeURIComponent(titles.join('|')),
  )

  return Object.values(query?.pages ?? {})
}

/**
 * One batch query, from the cache or the API, kept only when it is whole.
 * @param {string} file Where it lives.
 * @param {string} label What is being fetched, for the error.
 * @param {string} url The request.
 * @returns {Promise<Answer>} The answer, parsed.
 */
function fetchBatch(file, label, url) {
  return cached(file, label, url, isCompleteBatch)
}

/**
 * Whether an answer holds a whole batch: pages, the API's `batchcomplete`
 * mark and no `continue`, which would mean it was cut short.
 * @param {Answer} answer The answer.
 * @returns {boolean} Whether to cache it.
 */
function isCompleteBatch(answer) {
  return (
    answer.query?.pages !== undefined
    && answer.batchcomplete !== undefined
    && answer.continue === undefined
  )
}

/**
 * One chapter page as a (chapter, wikitext) pair, or nothing for a page the
 * API does not know.
 * @param {ChapterPage} page The page.
 * @returns {[number, string][]} The pair, or none.
 */
export function textOf(page) {
  const match = /^Chapter (?<n>\d+)$/u.exec(page.title)
  const text = page.revisions?.[0]?.slots?.main?.['*']

  return text === undefined || match?.groups === undefined ?
      []
    : [[Number(match.groups['n']), text]]
}

/**
 * The Italian wiki's page for each English one, through the English page's
 * interlanguage link. A page with no link is left out.
 * @param {string[]} titles English page titles.
 * @param {Wiki} wiki The series' wiki.
 * @returns {Promise<Map<string, string>>} English title to Italian title.
 */
export async function italianTitles(titles, wiki) {
  const pages = await queried(
    wiki.en + LANGLINKS,
    // fallow-ignore-next-line security-sink -- the series' cache folder, from its slug in the repository's own list, and a literal
    path.join(wiki.cache, 'langlinks'),
    titles,
  )

  return new Map(
    pages.flatMap(([asked, page]) => {
      const link = page.langlinks?.[0]?.['*']

      return link === undefined ? [] : [[asked, link]]
    }),
  )
}

/**
 * Each Italian wiki page's title and wikitext. A missing page is left out.
 * @param {string[]} titles Italian page titles.
 * @param {Wiki} wiki The series' wiki.
 * @returns {Promise<Map<string, Page>>} Asked title to page; `text` is empty.
 */
export async function italianPages(titles, wiki) {
  const pages = await queried(
    wiki.it + ITALIAN,
    // fallow-ignore-next-line security-sink -- the series' cache folder, from its slug in the repository's own list, and a literal
    path.join(wiki.cache, 'it'),
    titles,
  )

  return new Map(
    pages.flatMap(([asked, page]) => {
      const wikitext = page.revisions?.[0]?.slots?.main?.['*']

      return wikitext === undefined ?
          []
        : [[asked, { title: page.title, wikitext, text: '' }]]
    }),
  )
}

/**
 * Every page a list of titles asks for, fifty to a call, each paired with
 * the title it was asked under: the API answers under the title it lands on
 * after normalising and following redirects.
 * @param {string} api The query, missing only its titles.
 * @param {string} folder The cache folder, `langlinks` or `it` of a wiki's.
 * @param {string[]} titles The titles.
 * @returns {Promise<[string, ChapterPage][]>} Asked title and page.
 */
async function queried(api, folder, titles) {
  /** @type {[string, ChapterPage][]} */
  const pages = []
  for (let from = 0; from < titles.length; from += BATCH) {
    const batch = titles.slice(from, from + BATCH)
    const key = createHash('sha256').update(batch.join('|')).digest('hex')
    const { query } = await fetchBatch(
      // fallow-ignore-next-line security-sink -- the series' cache folder (from its slug in the repository's own list) plus a literal, and a hex digest
      path.join(folder, `${key}.json`),
      `${path.basename(folder)} ${String(from)}`,
      api + encodeURIComponent(batch.join('|')),
    )
    for (const asked of batch) {
      const page = pageOf(query, asked)
      if (page !== undefined) {
        pages.push([asked, page])
      }
    }
  }

  return pages
}

/**
 * The page a query answered for one asked title, through its renames.
 * @param {Query | undefined} query The answer's query.
 * @param {string} asked The title as asked.
 * @returns {ChapterPage | undefined} The page, or nothing.
 */
export function pageOf(query, asked) {
  const { normalized = [], redirects = [], pages = {} } = query ?? {}
  let title = asked
  for (const { from, to } of [normalized, redirects].flat()) {
    title = title === from ? to : title
  }

  return Object.values(pages).find((page) => page.title === title)
}

/**
 * One chapter's rendered introduction, separately cached from full pages.
 * @param {number} chapter The chapter number.
 * @param {string} [directory] The wiki cache root.
 * @returns {Promise<string[]>} Its printable episode/page pairs.
 */
export async function chapterPairs(chapter, directory = CACHE) {
  const title = `Chapter_${String(chapter)}`
  // fallow-ignore-next-line security-sink -- directory is the repository cache or a test tempdir; chapter is a validated positive integer.
  const file = path.join(directory, 'pairs', `${String(chapter)}.json`)
  const { parse } = await cached(
    file,
    title,
    `https://onepiece.fandom.com/api.php?action=parse&redirects=1&prop=text&section=0&format=json&page=${title}`,
    (answer) =>
      typeof answer.parse?.text?.['*'] === 'string'
      || answer.error?.code === 'missingtitle',
  )
  // Only an adapted chapter stays cached: a missing page, an unadapted
  // chapter or unreadable markup is exactly what the wiki changes later.
  if (parse === undefined) {
    rmSync(file, { force: true })
    throw new Error('chapter does not exist')
  }

  let pairs = []
  try {
    pairs = animePairs(parse.text['*'])
  } finally {
    if (pairs.length === 0) {
      rmSync(file, { force: true })
    }
  }

  return pairs
}

/**
 * Prints all requested chapters, reporting errors without skipping later chapters.
 * @param {string[]} args Chapter numbers and ranges.
 * @param {string} directory The wiki cache root.
 * @returns {Promise<number>} Zero on success, one when any input or chapter fails.
 */
export async function printPairs(args, directory = CACHE) {
  let chapters
  try {
    chapters = pairChapters(args)
  } catch (error) {
    console.error(
      `${error.message}\nUsage: npm run wiki:pairs -- <ch> [<ch> | <from>-<to> ...]`,
    )
    return 1
  }

  let exitCode = 0
  for (const chapter of chapters) {
    let pairs
    try {
      pairs = await chapterPairs(chapter, directory)
    } catch (error) {
      console.error(`ch ${String(chapter)}: ${error.message}`)
      exitCode = 1
      continue
    }
    console.log(
      `ch ${String(chapter)}: ${pairs.length === 0 ? 'not adapted' : pairs.join(' · ')}`,
    )
  }

  return exitCode
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  process.exitCode = await printPairs(process.argv.slice(2))
}
