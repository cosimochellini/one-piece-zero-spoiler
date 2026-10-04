// Checks every record's `revealedAtChapter` against the One Piece Wiki
// (onepiece.fandom.com), the way the episode thresholds were checked by hand:
// the infobox of a character, place or ship page carries `| first = [[Chapter
// N]]; [[Episode M]]`, an arc page renders `Manga Chapters: N-M`, and a fruit
// page cites the chapter it is first named in with `{{Qref|name=named|chap=N}}`.
//
// The wiki's chapter is a floor, not the threshold itself: it is the first
// appearance, and a record is filed where it is named and seen, which can be
// later. So a chapter filed below the wiki's is wrong and the script fails on
// it; one filed above is kept and only listed, and whether it is the chapter
// that names the record is a reader's check, not this script's. For a fruit
// the floor rises to the naming citation when the page labels one `named`;
// most pages do not, so a fruit filed between first use and first naming
// passes here (PR #176 hand-checked those). A fruit's chapter is derived from
// the dossier entry that names it (`src/data/records/fruits.ts`), so a
// too-low fruit is fixed by pinning `chapter:` on that entry, not here.
//
// Episodes are read from the same line and only listed, never failed: they
// were checked by hand before (#24) and the open rows are issue #175.
//
// Run it with `npm run verify:chapters`. It talks to the network, so it is not
// part of `npm run check` or CI; the pages it reads are cached under
// `.gate/wiki/`.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { setTimeout as sleep } from 'node:timers/promises'
import { pathToFileURL } from 'node:url'

import { importArchive, ROOT } from './archive-loader.mjs'

const CACHE = path.join(ROOT, '.gate', 'wiki')

const API =
  'https://onepiece.fandom.com/api.php?action=parse&redirects=1&prop=wikitext|text&format=json&page='

/**
 * Records whose English name is not their wiki page. A list names the pages
 * of a paired record (two fish-men filed as one), whose chapter is the later
 * of the two. `null` marks a record the wiki has no page for: the two fruits
 * the archive names that the wiki leaves unnamed (issue #174).
 * @type {Record<string, null | string | string[]>}
 */
export const TITLES = {
  'artificial-dragon-dragon-fruit': 'Artificial Devil Fruit',
  'cat-cat-fruit-ancient-model-sabre-tooth-tiger':
    'Neko Neko no Mi, Model: Saber Tiger',
  'crow-crow-fruit': 'Susu Susu no Mi',
  'dog-dog-fruit-mythical-model-nine-tailed-fox':
    'Inu Inu no Mi, Model: Kyubi no Kitsune',
  'egghead-island': 'Egghead',
  'fish-fish-fruit-mythical-model-azure-dragon': 'Uo Uo no Mi, Model: Seiryu',
  'kinemon': "Kin'emon",
  'kiwi-and-mozu': ['Kiwi', 'Mozu'],
  'lola': 'Lola (Zombie)',
  'ninjin-piiman-and-tamanegi': ['Ninjin', 'Piiman', 'Tamanegi'],
  'oimo-and-kashi': ['Oimo', 'Kashi'],
  'rock-and-scotch': ['Rock', 'Scotch'],
  'ryuma': 'Ryuma (Zombie)',
  'sodom-and-gomorrah': ['Sodom', 'Gomorrah'],
  'squirrel-squirrel-fruit': null,
  'water-seven-arc': 'Water 7 Arc',
  'water-water-fruit': null,
}

/**
 * The wiki pages a record is read from, in the order to try them. The English
 * edition's name is the page for most records; an arc page ends in `Arc`; a
 * fruit page is the Japanese name, which the Italian edition keeps.
 * @param {{ id: string, kind: string, name: { en: string, it: string } }} record The record.
 * @returns {string[][]} Alternatives, each a list of pages whose later chapter counts; none for a record without a page.
 */
export function titlesOf(record) {
  const known = TITLES[record.id]
  if (known === null) {
    return []
  }

  if (known !== undefined) {
    return [typeof known === 'string' ? [known] : [...known]]
  }

  const en = record.name.en.replaceAll('’', "'")
  if (record.kind === 'arc') {
    return [[/ (?:Arc|Saga)$/u.test(en) ? en : `${en} Arc`]]
  }

  if (record.kind === 'fruit') {
    return [[en], [japaneseNameOf(record.name)]]
  }

  return [[en]]
}

/**
 * A fruit's wiki page from the two editions' names: the Italian edition keeps
 * the Japanese name (`Frutto Ushi Ushi`), the English one the model
 * (`Model: Bison`), and the wiki files every zoan under `Model:` whatever its
 * class.
 * @param {{ en: string, it: string }} name The record's names.
 * @returns {string} The page title.
 */
export function japaneseNameOf(name) {
  const japanese = name.it.replace(/^Frutto /u, '').split(',', 1)[0]
  const model = /Model: (?<model>[^,]+)$/u.exec(name.en)?.groups?.['model']

  return model === undefined ?
      `${japanese} no Mi`
    : `${japanese} no Mi, Model: ${model}`
}

/** @typedef {{ title: string, wikitext: string, text: string }} Page */

/**
 * The chapter a page gives for its subject, by the kind of record it is.
 * @param {Page} page The parsed page.
 * @param {string} kind The record's kind.
 * @returns {number | undefined} The chapter, or nothing when the page has none.
 */
export function chapterOf(page, kind) {
  if (kind === 'arc') {
    return numberAfter(/Chapters?:(?<n>\d+)/u, tagless(page.text))
  }

  const first = firstLineOf(page)
  const seen =
    first === undefined ?
      numberAfter(/Debut:Chapter(?<n>\d+)/u, tagless(page.text))
    : storyChapterOf(first)
  const named =
    kind === 'fruit' ?
      numberAfter(/Qref\|name=named\|chap=(?<n>\d+)/iu, page.wikitext)
    : undefined

  return named === undefined ? seen : Math.max(seen ?? 0, named)
}

/**
 * The earliest chapter an infobox line names. A line can name several:
 * Shiki's `[[Chapter 0]]; [[Chapter 530]] (mentioned)`, Camie's
 * `[[Chapter 195]] ([[…|cover]])`. Chapter 0 and a cover story are manga
 * pages a reader has turned too, so they count towards the floor; what the
 * floor cannot say is whether the record was named there.
 * @param {string} first The infobox line.
 * @returns {number | undefined} The chapter.
 */
function storyChapterOf(first) {
  const chapters = first
    .matchAll(/\[\[Chapter (?<n>\d+)\]\]/gu)
    .map((match) => Number(match.groups?.['n']))
    .toArray()

  return chapters.length === 0 ? undefined : Math.min(...chapters)
}

/**
 * The episode a page gives for its subject, read the same way. The archive's
 * episodes were checked by hand already, so this only informs: a record whose
 * episode sits below the wiki's is listed, not failed.
 * @param {Page} page The parsed page.
 * @param {string} kind The record's kind.
 * @returns {number | undefined} The episode, or nothing when the page has none.
 */
export function episodeOf(page, kind) {
  if (kind === 'arc') {
    return numberAfter(/Episodes?:(?<n>\d+)/u, tagless(page.text))
  }

  const first = firstLineOf(page)

  return first === undefined ?
      numberAfter(/Debut:Chapter\d+;Episode(?<n>\d+)/u, tagless(page.text))
    : numberAfter(/Episode (?<n>\d+)/u, first)
}

/**
 * The infobox line that gives the first appearance, when the page has one.
 * @param {Page} page The parsed page.
 * @returns {string | undefined} The line.
 */
function firstLineOf(page) {
  return page.wikitext
    .split('\n')
    .find((line) => /^\s*\|\s*first\s*=/u.test(line))
}

/**
 * Rendered HTML with every tag and every space taken out, so that a label
 * and its value sit next to each other whatever markup lies between.
 * @param {string} html The rendered page.
 * @returns {string} The bare text.
 */
function tagless(html) {
  let text = ''
  let depth = 0
  for (const char of html) {
    if (char === '<') {
      depth += 1
    } else if (char === '>') {
      depth = Math.max(0, depth - 1)
    } else if (depth === 0 && !/\s/u.test(char)) {
      text += char
    }
  }

  return text
}

/**
 * The first captured number, or nothing.
 * @param {RegExp} pattern A pattern with one numeric group named `n`.
 * @param {string} text Where to look.
 * @returns {number | undefined} The number.
 */
function numberAfter(pattern, text) {
  const match = pattern.exec(text)

  return match?.groups === undefined ? undefined : Number(match.groups['n'])
}

/**
 * One page's JSON from the API, trying three times: the wiki drops a
 * connection now and then over a run of several hundred pages.
 * @param {string} title The page title.
 * @param {number} attempt Which try this is.
 * @returns {Promise<string>} The response body.
 */
async function download(title, attempt = 1) {
  try {
    return await request(title)
  } catch (error) {
    if (attempt >= 3) {
      throw error
    }

    await sleep(2000 * attempt)

    return download(title, attempt + 1)
  }
}

/**
 * One request to the API, which must answer 200.
 * @param {string} title The page title.
 * @returns {Promise<string>} The response body.
 */
async function request(title) {
  const response = await fetch(API + encodeURIComponent(title), {
    headers: { 'User-Agent': 'one-piece-zero-spoiler verify-chapters' },
  })
  if (!response.ok) {
    throw new Error(`${title}: HTTP ${String(response.status)}`)
  }

  return response.text()
}

/**
 * The API's answer, if it is one: a parsed page or a missing title. Anything
 * else (a challenge page, a throttling error) is not cached, so a bad hour
 * does not stick to the next run.
 * @param {string} title The page title.
 * @param {string} body The response body.
 * @returns {string} The body, worth caching.
 */
function answerOf(title, body) {
  /** @type {{ parse?: unknown, error?: { code?: string } }} */
  let answer
  try {
    answer = JSON.parse(body)
  } catch {
    throw new Error(`${title}: the API did not answer with JSON`)
  }

  if (answer.parse === undefined && answer.error?.code !== 'missingtitle') {
    throw new Error(
      `${title}: ${answer.error?.code ?? 'no page in the answer'}`,
    )
  }

  return body
}

/**
 * One wiki page, from the cache or the API.
 * @param {string} title The page title.
 * @returns {Promise<Page | undefined>} The page, or nothing when it does not exist.
 */
async function fetchPage(title) {
  const file = path.join(CACHE, `${encodeURIComponent(title)}.json`)
  if (!existsSync(file)) {
    mkdirSync(CACHE, { recursive: true })
    writeFileSync(file, answerOf(title, await download(title)))
    await sleep(250)
  }

  const { parse } = JSON.parse(readFileSync(file, 'utf8'))

  return parse === undefined ? undefined : (
      {
        title: parse.title,
        wikitext: parse.wikitext['*'],
        text: parse.text['*'],
      }
    )
}

/** @typedef {{ page?: string, wiki?: number, wikiEpisode?: number, unverifiable?: true }} Source */

/**
 * The chapter the wiki gives one record, trying each alternative in turn.
 * @param {{ id: string, kind: string, name: { en: string, it: string } }} record The record.
 * @returns {Promise<Source>} The page(s) read and the chapter, or neither.
 */
async function sourceOf(record) {
  const alternatives = titlesOf(record)
  if (alternatives.length === 0) {
    return { unverifiable: true }
  }

  for (const titles of alternatives) {
    const pages = await Promise.all(titles.map((title) => fetchPage(title)))
    if (pages.every((page) => page !== undefined)) {
      const chapters = pages.map((page) => chapterOf(page, record.kind))
      const episodes = pages.map((page) => episodeOf(page, record.kind))
      const page = pages.map((page) => page.title).join(' + ')

      return chapters.includes(undefined) ?
          { page }
        : {
            page,
            wiki: Math.max(...chapters),
            ...(!episodes.includes(undefined) && {
              wikiEpisode: Math.max(...episodes),
            }),
          }
    }
  }

  return {}
}

/**
 * Which way a record disagrees with its source, if it does.
 * @param {number} filed The record's chapter.
 * @param {Source} source What the wiki says.
 * @returns {'equal' | 'kept' | 'too low' | 'unresolved' | 'unverifiable'} The verdict.
 */
export function verdictOf(filed, source) {
  if (source.unverifiable === true) {
    return 'unverifiable'
  }

  if (source.wiki === undefined) {
    return 'unresolved'
  }

  if (filed < source.wiki) {
    return 'too low'
  }

  return filed === source.wiki ? 'equal' : 'kept'
}

/** @typedef {{ id: string, kind: string, filed: number, episode: number, page?: string, wiki?: number, wikiEpisode?: number, unverifiable?: true, verdict: string }} Row */

/**
 * Every record against its page, in archive order.
 * @returns {Promise<Row[]>} One row per record.
 */
export async function verify() {
  const { entities } = await importArchive('data/entities.ts')
  /** @type {Row[]} */
  const rows = []
  for (const record of entities) {
    const source = await sourceOf(record)

    rows.push({
      id: record.id,
      kind: record.kind,
      filed: record.revealedAtChapter,
      episode: record.revealedAtEpisode,
      ...source,
      verdict: verdictOf(record.revealedAtChapter, source),
    })
  }

  return rows
}

/**
 * A markdown table of the rows with one verdict.
 * @param {Row[]} rows Every row.
 * @param {string} verdict The verdict to list.
 * @returns {string} The heading and the table, or a one-line "none".
 */
function table(rows, verdict) {
  const listed = rows.filter((row) => row.verdict === verdict)
  const heading = `### ${verdict} (${String(listed.length)})`
  if (listed.length === 0) {
    return `${heading}\n\nnone`
  }

  const lines = listed.map(
    (row) =>
      `| ${row.kind} | ${row.id} | ${String(row.filed)} | ${String(row.wiki ?? '—')} | ${row.page ?? '—'} |`,
  )

  return `${heading}\n\n| kind | record | filed | wiki | page |\n| --- | --- | ---: | ---: | --- |\n${lines.join('\n')}`
}

/**
 * The records whose episode the wiki places later, for information.
 * @param {Row[]} rows Every row.
 * @returns {string} The heading and the table, or a one-line "none".
 */
function episodesBelow(rows) {
  const listed = rows.filter(
    (row) => row.wikiEpisode !== undefined && row.episode < row.wikiEpisode,
  )
  const heading = `### episode below wiki, for information (${String(listed.length)})`
  if (listed.length === 0) {
    return `${heading}\n\nnone`
  }

  const lines = listed.map(
    (row) =>
      `| ${row.kind} | ${row.id} | ${String(row.episode)} | ${String(row.wikiEpisode)} | ${row.page ?? '—'} |`,
  )

  return `${heading}\n\n| kind | record | filed | wiki | page |\n| --- | --- | ---: | ---: | --- |\n${lines.join('\n')}`
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  const rows = await verify()
  const wrong = rows.filter(
    (row) => row.verdict === 'too low' || row.verdict === 'unresolved',
  )

  console.log(
    [
      ...['too low', 'unresolved', 'unverifiable', 'equal', 'kept'].map(
        (verdict) => table(rows, verdict),
      ),
      episodesBelow(rows),
    ].join('\n\n'),
  )
  process.exitCode = wrong.length === 0 ? 0 : 1
}
