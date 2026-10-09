// Holds the filler guide (`src/data/filler.ts`, issue #495) to its sources:
// the kind of each episode against AnimeFillerList (and, for its "anime
// canon" rows, the Italian wiki's `tipo`), the titles against the English and
// Italian wiki pages, each entry's chapter against the Italian wiki's
// `capitoli`, and the films and specials against the English wiki's Episode
// Guide. Fails with one line per problem.
//
// Run it with `npm run verify:filler`. It talks to the network, so it is not
// part of `npm run check` or CI; what it reads is cached under
// `.gate/wiki/` and never expires, so delete that folder to read afresh.
import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { setTimeout as sleep } from 'node:timers/promises'
import { pathToFileURL } from 'node:url'

import { importArchive, ROOT } from './archive-loader.mjs'
import { cached, pageOf } from './wiki.mjs'

/**
 * @typedef {{ episode: number, kind: string, chapter: number, title: { en: string, it: string } }} Numbered
 * @typedef {{ after: number, kind: string, chapter: number, title: { en: string, it: string } }} Unnumbered
 * @typedef {{ title: string, after: number }} Special
 * @typedef {Numbered | Unnumbered} Entry
 * @typedef {{ revisions?: { slots?: { main?: { content?: string } } }[] }} Page
 */

// fallow-ignore-next-line security-sink -- the repository root and three literals
const FOLDER = path.join(ROOT, '.gate', 'wiki', 'filler')
const EN_API =
  'https://onepiece.fandom.com/api.php?action=query&prop=revisions&rvprop=content&rvslots=main&redirects=1&formatversion=2&format=json&titles='
const IT_API = EN_API.replace('/api.php', '/it/api.php')
const AFL = 'https://www.animefillerlist.com/shows/one-piece'
const AGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36'
const BATCH = 50
const TITLE_FIELDS = ['crunchyTitle', 'funiTitle', 'English', 'Translation']

/** Entries the Episode Guide does not list, on purpose. */
const KEPT = new Set([
  'one piece characters log',
  'long ring long land arc abridged',
])

/**
 * A title as comparable text: no line break and what follows it, markup,
 * release notes or punctuation, and no case.
 * @param {string} raw The title as written.
 * @returns {string} The comparable form.
 */
export function normalise(raw) {
  const [first = ''] = raw.split(/<br\s*\/?>/u, 1)

  return first
    .replaceAll(/<\/?[a-z]+>|\[\[[^[\]|]*\|/gu, '')
    .replaceAll(/\{\{[^{}]*\}\}/gu, '')
    .replaceAll(/\[\[|\]\]|''|\((?:sub|dub|simulcast)\)/giu, '')
    .toLowerCase()
    .replaceAll(/[^\p{L}\p{N}\s]/gu, ' ')
    .replaceAll(/\s+/gu, ' ')
    .trim()
}

/**
 * One field of an infobox: from `| name =` to the next field.
 * @param {string} wikitext The page.
 * @param {string} name The field.
 * @returns {string} Its value, empty when absent.
 */
function fieldOf(wikitext, name) {
  const lines = wikitext.split('\n')
  const start = lines.findIndex((line) =>
    line.replaceAll(/\s/gu, '').startsWith(`|${name}=`),
  )
  if (start === -1) {
    return ''
  }

  const body = lines.slice(start + 1)
  const stop = body.findIndex((line) => /^\s*\|[^=|]+=|^\}\}/u.test(line))
  const value = (lines[start] ?? '').slice(
    (lines[start] ?? '').indexOf('=') + 1,
  )

  return [value, ...body.slice(0, stop === -1 ? undefined : stop)]
    .join('\n')
    .trim()
}

/**
 * The chapters an Italian episode page lists in `capitoli`.
 * @param {string} wikitext The page.
 * @returns {number[]} The chapter numbers.
 */
export function chaptersOf(wikitext) {
  return fieldOf(wikitext, 'capitoli')
    .matchAll(/\[\[Capitolo (?<n>\d+)/gu)
    .map((match) => Number(match.groups?.['n']))
    .toArray()
}

/**
 * The kinds a guide entry may have for an AnimeFillerList class; none means
 * the episode is canon and must not be listed.
 * @param {string} rowClass The class of the row.
 * @param {string} tipo The Italian wiki's `tipo`.
 * @returns {string[]} The allowed kinds.
 */
export function allowedKinds(rowClass, tipo) {
  const byTipo = /** @type {Record<string, string[]>} */ ({
    Filler: ['filler'],
    Mezzo: ['mixed'],
  })
  const byClass = /** @type {Record<string, string[]>} */ ({
    'filler': ['filler', 'recap'],
    'mixed_canon/filler': ['mixed'],
    'anime_canon': byTipo[tipo] ?? [],
  })

  return byClass[rowClass] ?? []
}

/**
 * The class of every episode row on the AnimeFillerList page.
 * @param {string} html The page.
 * @returns {Map<number, string>} Episode to class.
 */
export function classesOf(html) {
  const rows = html.split('<tr class="').slice(1)

  return new Map(
    rows.map((row) => {
      const [classes = '', , eps = ''] = row.split('"', 3)

      return [Number(eps.slice(4)), classes.split(' ', 1)[0] ?? '']
    }),
  )
}

/**
 * The title of a Special row, positional or named (`2=`).
 * @param {string} line The row.
 * @returns {string} The title as written.
 */
function specialTitle(line) {
  const parts = line
    .replace('{{Special|', '')
    .replaceAll(/\[\[[^[\]|]*\|/gu, '')
    .split('|')
  const named = parts.find((part) => part.startsWith('2='))

  const loose = parts.slice(1).find((part) => !part.includes('=')) ?? ''

  return named?.slice(2) ?? loose
}

/**
 * Each Special row of an Episode Guide page and the episode it airs after.
 * @param {string} guide The wikitext, rows in air order.
 * @param {number} from The last episode before the page.
 * @returns {{ specials: Special[], last: number }} The specials and the last episode.
 */
export function specialsOf(guide, from = 0) {
  let last = from
  /** @type {Special[]} */
  const specials = []
  for (const raw of guide.split('\n')) {
    const line = raw.trim()
    if (line.startsWith('{{Episode|')) {
      last = Number(line.slice('{{Episode|'.length).split('|', 1)[0])
    } else if (line.startsWith('{{Special|')) {
      specials.push({ title: normalise(specialTitle(line)), after: last })
    }
  }

  return { specials, last }
}

/**
 * The specials whose title is, or holds, an entry's title.
 * @param {Special[]} specials The guide's specials.
 * @param {string} title The entry's English title.
 * @returns {Special[]} The matches.
 */
export function matchSpecials(specials, title) {
  const wanted = normalise(title)

  return specials.filter((row) => {
    return (
      row.title !== ''
      && (row.title.includes(wanted) || wanted.includes(row.title))
    )
  })
}

/**
 * One batch of wikitext, cached.
 * @param {string} api The query, missing only its titles.
 * @param {string[]} batch The page titles.
 * @returns {Promise<[string, string][]>} Asked title and wikitext.
 */
async function wikitextBatch(api, batch) {
  const key = createHash('sha256')
    .update(api + batch.join('|'))
    .digest('hex')
  const { query } = await cached(
    // fallow-ignore-next-line security-sink -- a folder named in this module and a hex digest
    path.join(FOLDER, `${key}.json`),
    `filler ${batch[0] ?? ''}`,
    api + encodeURIComponent(batch.join('|')),
    (answer) =>
      answer.query?.pages !== undefined && answer.continue === undefined,
  )

  return batch.flatMap((asked) => {
    const page = /** @type {Page | undefined} */ (pageOf(query, asked))
    const text = page?.revisions?.[0]?.slots?.main?.content

    return text === undefined ? [] : [[asked, text]]
  })
}

/**
 * Wikitext of each title, fifty to a call, cached.
 * @param {string} api The query, missing only its titles.
 * @param {string[]} titles The page titles.
 * @returns {Promise<Map<string, string>>} Asked title to wikitext.
 */
async function wikitexts(api, titles) {
  /** @type {[string, string][]} */
  const pairs = []
  for (let from = 0; from < titles.length; from += BATCH) {
    pairs.push(...(await wikitextBatch(api, titles.slice(from, from + BATCH))))
  }

  return new Map(pairs)
}

/**
 * The AnimeFillerList page, cached.
 * @returns {Promise<string>} Its HTML.
 */
async function animeFillerList() {
  // fallow-ignore-next-line security-sink -- a folder named in this module and a literal
  const file = path.join(FOLDER, 'animefillerlist.html')
  if (!existsSync(file)) {
    const response = await fetch(AFL, { headers: { 'User-Agent': AGENT } })
    if (!response.ok) {
      throw new Error(`AnimeFillerList: HTTP ${String(response.status)}`)
    }

    mkdirSync(FOLDER, { recursive: true })
    writeFileSync(file, await response.text())
    await sleep(250)
  }

  return readFileSync(file, 'utf8')
}

/**
 * Every Special row of the Episode Guide, in air order.
 * @returns {Promise<Special[]>} The specials.
 */
async function guideSpecials() {
  const index = await wikitexts(EN_API, ['Episode Guide'])
  const links = (index.get('Episode Guide') ?? '')
    .split('[[Episode Guide/')
    .slice(1)
  const sagas = [
    ...new Set(
      links.map((link) => `Episode Guide/${link.split(/[\]#|]/u, 1)[0] ?? ''}`),
    ),
  ]
  const pages = await wikitexts(EN_API, sagas)
  /** @type {Special[]} */
  const all = []
  let last = 0
  for (const saga of sagas) {
    const read = specialsOf(pages.get(saga) ?? '', last)
    all.push(...read.specials)
    last = read.last
  }

  return all
}

/**
 * Where an entry sits: its episode, or the one it is watched after.
 * @param {Entry} entry The entry.
 * @returns {number} The episode.
 */
function position(entry) {
  return 'episode' in entry ? entry.episode : entry.after
}

/**
 * How an entry is named in a problem line.
 * @param {Entry} entry The entry.
 * @returns {string} The name.
 */
function label(entry) {
  return 'episode' in entry ?
      `episode ${String(entry.episode)}`
    : `"${entry.title.en}" (after ${String(entry.after)})`
}

/**
 * What is wrong with one episode's kind, if anything.
 * @param {string} name How the episode is named.
 * @param {string[]} allowed The kinds its sources allow.
 * @param {string} [kind] The kind it is listed as, if it is listed.
 * @returns {string | undefined} The problem.
 */
export function kindProblem(name, allowed, kind) {
  if (kind === undefined) {
    return allowed.length > 0 ?
        `${name} is missing, sources say ${allowed.join('/')}`
      : undefined
  }

  return allowed.includes(kind) ? undefined : (
      `${name} is ${kind}, sources say ${allowed.join('/') || 'canon'}`
    )
}

/**
 * Problems with the kinds, against AnimeFillerList and the Italian `tipo`.
 * @param {Map<number, Numbered>} entries The guide's numbered entries.
 * @param {Map<number, string>} classes AnimeFillerList's classes.
 * @param {Map<string, string>} italian The Italian pages by title.
 * @returns {string[]} One line per problem.
 */
function kindProblems(entries, classes, italian) {
  const problems = classes.entries().map(([episode, rowClass]) => {
    const tipo = fieldOf(
      italian.get(`Episodio ${String(episode)}`) ?? '',
      'tipo',
    )

    return kindProblem(
      `episode ${String(episode)}`,
      allowedKinds(rowClass, tipo),
      entries.get(episode)?.kind,
    )
  })
  const unknown = entries
    .keys()
    .filter((episode) => !classes.has(episode))
    .map((episode) => `episode ${String(episode)} is not on AnimeFillerList`)
    .toArray()

  return [...problems.filter((problem) => problem !== undefined), ...unknown]
}

/**
 * Problems with the titles of the numbered entries.
 * @param {Numbered[]} entries The numbered entries.
 * @param {Map<string, string>} english The English pages by title.
 * @param {Map<string, string>} italian The Italian pages by title.
 * @returns {string[]} One line per problem.
 */
export function titleProblems(entries, english, italian) {
  const problems = []
  for (const { episode, title } of entries) {
    const en = english.get(`Episode ${String(episode)}`) ?? ''
    const it = italian.get(`Episodio ${String(episode)}`) ?? ''
    const heard = TITLE_FIELDS.map((name) => normalise(fieldOf(en, name)))
    const sung = normalise(fieldOf(it, 'titolo') || fieldOf(it, 'titolotrad'))
    if (!heard.includes(normalise(title.en))) {
      problems.push(
        `episode ${String(episode)} en title "${title.en}" is not on the wiki`,
      )
    }

    if (sung !== normalise(title.it)) {
      problems.push(
        `episode ${String(episode)} it title "${title.it}" is not "${sung}"`,
      )
    }
  }

  return problems
}

/**
 * Problems with the chapters: none may be lower than what the anime had
 * adapted at the entry's place.
 * @param {Entry[]} entries Every entry.
 * @param {Map<string, string>} italian The Italian pages by title.
 * @returns {string[]} One line per problem.
 */
function chapterProblems(entries, italian) {
  const adapted = [0]
  const last = Math.max(...entries.map((entry) => position(entry)))
  for (let episode = 1; episode <= last; episode += 1) {
    const listed = chaptersOf(italian.get(`Episodio ${String(episode)}`) ?? '')
    adapted.push(Math.max(adapted[episode - 1] ?? 0, ...listed))
  }

  return entries
    .filter((entry) => entry.chapter < (adapted[position(entry)] ?? 0))
    .map(
      (entry) =>
        `${label(entry)} chapter ${String(entry.chapter)} < ${String(adapted[position(entry)])}`,
    )
}

/**
 * Problems with the films and specials, and those kept on purpose.
 * @param {Unnumbered[]} entries The unnumbered entries.
 * @param {Special[]} specials The guide's specials.
 * @returns {{ problems: string[], kept: string[] }} Both lists.
 */
export function specialProblems(entries, specials) {
  /** @type {string[]} */
  const problems = []
  /** @type {string[]} */
  const kept = []
  for (const entry of entries) {
    const found = matchSpecials(specials, entry.title.en)
    if (found.some((row) => row.after === entry.after)) {
      continue
    }

    const afters = found.map((row) => String(row.after)).join(', ')
    const why = found.length === 0 ? 'is not in' : `airs after ${afters} in`
    if (KEPT.has(normalise(entry.title.en))) {
      kept.push(label(entry))
    } else {
      problems.push(`${label(entry)} ${why} the Episode Guide`)
    }
  }

  return { problems, kept }
}

/**
 * Runs every check against the committed data.
 * @returns {Promise<{ problems: string[], kept: string[], count: number }>} The result.
 */
async function verify() {
  const data = await importArchive('data/filler.ts')
  const all = /** @type {Entry[]} */ (data['FILLER'])
  const arcs = /** @type {unknown[]} */ (data['FILLER_ARCS'])
  const numbered = /** @type {Numbered[]} */ (
    all.filter((entry) => 'episode' in entry)
  )
  const entries = new Map(numbered.map((entry) => [entry.episode, entry]))
  const classes = classesOf(await animeFillerList())
  const top = Math.max(...classes.keys())
  const last = Math.max(...all.map((entry) => position(entry)), top)
  const titles = Array.from(
    { length: last },
    (_, index) => `Episodio ${String(index + 1)}`,
  )
  const italian = await wikitexts(IT_API, titles)
  const english = await wikitexts(
    EN_API,
    numbered.map((entry) => `Episode ${String(entry.episode)}`),
  )
  const specials = specialProblems(
    /** @type {Unnumbered[]} */ (all.filter((entry) => !('episode' in entry))),
    await guideSpecials(),
  )
  const aired = `${String(data['LAST_AIRED'])} vs ${String(top)}`
  console.log(`${String(arcs.length)} arcs; LAST_AIRED ${aired}`)

  return {
    problems: [
      ...kindProblems(entries, classes, italian),
      ...titleProblems(numbered, english, italian),
      ...chapterProblems(all, italian),
      ...specials.problems,
    ],
    kept: specials.kept,
    count: all.length,
  }
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  const { problems, kept, count } = await verify()
  const total = `${String(count)} entries checked, ${String(problems.length)} failures, ${String(kept.length)} kept`
  console.log(problems.map((problem) => `FAIL ${problem}`).join('\n'))
  console.log(kept.map((entry) => `kept ${entry}`).join('\n'))
  console.log(total)
  process.exitCode = problems.length === 0 ? 0 : 1
}
