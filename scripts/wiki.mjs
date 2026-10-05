// The One Piece Wiki, read through its API: the HTML pages are blocked to
// scripts, the API is not. Every answer is cached under `.gate/wiki/` so a
// run of several hundred pages is paid once; only a real answer (a parsed
// page, a missing title, a complete batch of chapter pages) is written, so a
// challenge page, a throttling error or a truncated batch does not stick to
// the next run. Nothing expires: delete the folder to read afresh.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { setTimeout as sleep } from 'node:timers/promises'

import { ROOT } from './archive-loader.mjs'

const CACHE = path.join(ROOT, '.gate', 'wiki')

const API =
  'https://onepiece.fandom.com/api.php?action=parse&redirects=1&prop=wikitext|text&format=json&page='

const CHAPTERS_API =
  'https://onepiece.fandom.com/api.php?action=query&prop=revisions&rvprop=content&rvslots=main&format=json&titles='

/** How many chapter pages one API call asks for. */
const BATCH = 50

/** @typedef {{ title: string, wikitext: string, text: string }} Page */
/** @typedef {{ title: string, revisions?: { slots?: { main?: Record<string, string> } }[] }} ChapterPage */
/** @typedef {{ parse?: { title: string, wikitext: Record<string, string>, text: Record<string, string> }, error?: { code?: string }, query?: { pages?: Record<string, ChapterPage> }, batchcomplete?: string, continue?: unknown }} Answer */

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
  const response = await fetch(url, {
    headers: { 'User-Agent': 'one-piece-zero-spoiler verify-chapters' },
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
async function cached(file, label, url, isAnswer) {
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
 * @returns {Promise<Page | undefined>} The page, or nothing when it does not exist.
 */
export async function fetchPage(title) {
  const { parse } = await cached(
    path.join(CACHE, `${encodeURIComponent(title)}.json`),
    title,
    API + encodeURIComponent(title),
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
 * @returns {Promise<ReadonlyMap<number, string>>} Chapter to wikitext.
 */
export async function chapterTexts(ceiling) {
  /** @type {[number, string][]} */
  const texts = []
  for (let from = 1; from <= ceiling; from += BATCH) {
    const pages = await fetchChapters(from, Math.min(ceiling, from + BATCH - 1))
    for (const page of pages) {
      texts.push(...textOf(page))
    }
  }

  return new Map(texts.toSorted(([a], [b]) => a - b))
}

/**
 * One batch of chapter pages, from the cache or the API.
 * @param {number} from The first chapter.
 * @param {number} to The last chapter.
 * @returns {Promise<ChapterPage[]>} The pages the API knows.
 */
async function fetchChapters(from, to) {
  const label = `chapters ${String(from)}-${String(to)}`
  const titles = Array.from(
    { length: to - from + 1 },
    (_, index) => `Chapter ${String(from + index)}`,
  )
  const { query } = await cached(
    path.join(CACHE, 'chapters', `${String(from)}-${String(to)}.json`),
    label,
    CHAPTERS_API + encodeURIComponent(titles.join('|')),
    isCompleteBatch,
  )

  return Object.values(query?.pages ?? {})
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
function textOf(page) {
  const match = /^Chapter (?<n>\d+)$/u.exec(page.title)
  const text = page.revisions?.[0]?.slots?.main?.['*']

  return text === undefined || match?.groups === undefined ?
      []
    : [[Number(match.groups['n']), text]]
}
