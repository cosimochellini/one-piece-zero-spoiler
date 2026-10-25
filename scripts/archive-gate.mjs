/**
 * Blocking archive gate.
 *
 * The archive is 800 KB of TypeScript and it must not reach the browser
 * (issue #12). Nothing else in the toolchain can see that it has: a stray
 * value import from `~/data` typechecks, lints, passes every test and passes
 * both other gates, and the only symptom is a bigger `.js` file that a
 * visitor with no bookmark can read end to end.
 *
 * Four checks over the built client chunks, the first two for every series
 * in `src/data/series/index.ts`:
 *
 *   1. Prose canaries. The longest sentence in every archive module — One
 *      Piece's twelve sagas and the ship's log — read at gate time rather than
 *      hard-coded, so they cannot go stale, and looked for in the chunks.
 *      Never a key such as `revealedAtEpisode`, which legitimately survives
 *      on a covered record.
 *   2. Slug canaries. The drawing modules carry no prose: they are keyed by
 *      record id, and a record's id is its name slug. A hyphenated id long
 *      enough not to occur by accident — `monkey-d-luffy`, `edward-newgate` —
 *      is looked for in the chunks too, because a leak there ships names as
 *      literal identifiers rather than as sentences.
 *   3. Source URL canaries for the server-only provenance inventory (#721).
 *   4. Place word canaries. A series that labels its place words itself
 *      (`placeWords` in the series list) sends a page the labels of the
 *      words its open places use, and the client holds none: each word and
 *      label distinct enough not to occur by accident is looked for in the
 *      chunks, so a table shipped whole, which would name regions a reader
 *      has not reached, fails the gate. One Piece's are its dictionaries'.
 *      The server holds the tables statically, so these are client canaries
 *      only.
 * The SSR manifest also proves that every series archive enters through a
 * dynamic import, with no canary-bearing data in another runtime entry's
 * static dependency closure.
 *
 * Exit codes:
 *   0  the archive stayed on the server
 *   1  archive prose in a client chunk
 *   2  nothing to check: no build, or no canary could be read
 */
import console from 'node:console'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { byNumber, byValue } from 'sort-es'

import { importArchive } from './archive-loader.mjs'
import { checkServer } from './archive-server-gate.mjs'

const EXIT_FOUND = 1
const EXIT_UNUSABLE = 2

/** How much of a canary to quote when one turns up. */
const QUOTE_LENGTH = 60

/** Where every series' folder is. */
const SERIES_DIR = 'src/data/series'

/**
 * A series' prose lives in its `records/` folder (every saga), its drawings
 * in its `art/` folder, keyed by the id of the record each was drawn for.
 * These are the modules of a series that live elsewhere, keyed by its folder
 * (not its slug):
 * `prose`, the ones with prose (the ship's log and the filler guide), and
 * `slugs`, the ones keyed by record id that carry no prose and sit outside
 * the drawing folder, so neither canary would otherwise see them.
 * @type {Record<string, { prose: string[], slugs: string[] }>}
 */
export const EXTRA = {
  'one-piece': {
    prose: [
      'src/data/series/one-piece/places.ts',
      'src/data/series/one-piece/filler.ts',
    ],
    slugs: [
      'src/data/series/one-piece/art/fruits/index.ts',
      'src/data/series/one-piece/fruit-forms.ts',
    ],
  },
}

/**
 * An id hyphenated and long enough that a minifier could not produce it by
 * accident. Short ones — `nami`, `koby` — are words, and a gate that failed
 * on a word would be a gate nobody trusted.
 */
// One flat character class rather than a nested quantifier: `(a+)+` is how a
// regular expression comes to take exponential time on a line that nearly
// matches, and an archive module is a long file.
const SLUG_PATTERN = /^ {2}'(?<slug>[a-z\d-]{12,})':/gmu

/** A slug earns its place by being hyphenated: a bare word is a word. */
const HYPHENATED = /-/u

// Forty characters or more of single-quoted English, escapes allowed: long
// enough to be a sentence of the archive rather than a label from the UI. An
// address is not a sentence: a series' wiki endpoint is not prose.
const CANARY_PATTERN = /en: '(?!https:)(?<prose>(?:[^'\\]|\\.){40,})'/gu

/**
 * The longest single-quoted English string in a module, which is a sentence
 * of a summary or a log entry: long enough to be unmistakable, and certain to
 * be in the archive rather than in the UI.
 * @param {string} source The module's text.
 * @returns {null | string} The phrase, or `null` if the module has no prose.
 */
export function canaryFrom(source) {
  const longest = source
    .matchAll(CANARY_PATTERN)
    .map((match) => match.groups?.['prose'] ?? '')
    .toArray()
    .toSorted(byValue('length', byNumber({ desc: true })))
    .at(0)

  return longest === undefined || longest === '' ?
      null
    : longest.replaceAll(String.raw`\'`, "'")
}

/**
 * The record ids a drawing module is keyed by, long enough to be unmistakable.
 * @param {string} source The module's text.
 * @returns {string[]} The slugs, in the order they are written.
 */
export function slugsFrom(source) {
  return source
    .matchAll(SLUG_PATTERN)
    .map((match) => match.groups?.['slug'] ?? '')
    .filter((slug) => HYPHENATED.test(slug))
    .toArray()
}

/**
 * Every emitted client script, as text.
 * @param {string} clientDir The build's client directory.
 * @returns {{bytes: number, name: string, text: string}[]} One per script.
 */
export function clientChunks(clientDir) {
  const assets = path.join(clientDir, 'assets')

  return readdirSync(assets)
    .filter((name) => name.endsWith('.js'))
    .map((name) => {
      return {
        name,
        bytes: statSync(path.join(assets, name)).size,
        text: readFileSync(path.join(assets, name), 'utf8'),
      }
    })
}

/**
 * What the gate makes of a build. Pure, so the decision can be tested without
 * one: the reading of the disk is the caller's job.
 * @param {{bytes: number, name: string, text: string}[]} chunks The scripts.
 * @param {{file: string, phrase: null | string}[]} canaries What to look for.
 * @returns {{found: {chunk: string, file: string, phrase: string}[], ok: boolean, total: number, unreadable: string[]}} The verdict.
 */
export function judge(chunks, canaries) {
  const unreadable = canaries
    .filter((canary) => canary.phrase === null)
    .map((canary) => canary.file)
  const found = canaries.flatMap(({ file, phrase }) => {
    if (phrase === null) {
      return []
    }

    return chunks
      .filter((chunk) => chunk.text.includes(phrase))
      .map((chunk) => ({ chunk: chunk.name, file, phrase }))
  })
  const total = chunks.reduce((sum, chunk) => sum + chunk.bytes, 0)

  return { found, ok: found.length === 0, total, unreadable }
}

/**
 * Says what went wrong, loudly enough to act on.
 * @param {ReturnType<typeof judge>} verdict What the gate made of the build.
 * @returns {void}
 */
function report(verdict) {
  for (const hit of verdict.found) {
    console.error(
      `archive-gate: ${hit.file} reached the browser — found in dist/client/assets/${hit.chunk}\n  “${hit.phrase.slice(0, QUOTE_LENGTH)}…”`,
    )
  }
}

/**
 * The modules of one folder of a series, or nothing when it has no such
 * folder.
 * @param {string} repositoryRoot The repository root.
 * @param {string} dir The folder, from the root.
 * @returns {null | string[]} The modules, from the root, or `null`.
 */
function modulesIn(repositoryRoot, dir) {
  try {
    // fallow-ignore-next-line security-sink -- The root is this script’s directory or a test fixture; dir is a series folder named in the repository's own series list.
    return readdirSync(path.join(repositoryRoot, dir))
      .filter((name) => name.endsWith('.ts') && !name.endsWith('.test.ts'))
      .map((name) => `${dir}/${name}`)
  } catch {
    return null
  }
}

/**
 * One canary per archive module of a series that carries prose: every saga,
 * and the log. A series with no `records/` folder is one unreadable canary,
 * so the gate refuses to vouch for it.
 * @param {string} repositoryRoot The repository root.
 * @param {string} folder The series' folder under `src/data/series/`.
 * @returns {{file: string, phrase: null | string}[]} What to look for.
 */
export function proseCanaries(repositoryRoot, folder) {
  const dir = `${SERIES_DIR}/${folder}/records`
  const sagas = modulesIn(repositoryRoot, dir)
  if (sagas === null) {
    return [{ file: dir, phrase: null }]
  }

  return [...sagas, ...(EXTRA[folder]?.prose ?? [])].flatMap((file) => {
    const phrase = canaryFrom(
      readFileSync(path.join(repositoryRoot, file), 'utf8'),
    )

    // `saga.ts` is the shape of a saga, not a saga: no prose, nothing to say.
    if (phrase === null && file.endsWith('saga.ts')) {
      return []
    }

    return { file, phrase }
  })
}

/**
 * One canary per drawing module of a series: the first id long enough to be
 * unmistakable. A series with no `art/` folder is one unreadable canary.
 * @param {string} repositoryRoot The repository root.
 * @param {string} folder The series' folder under `src/data/series/`.
 * @returns {{file: string, phrase: null | string}[]} What to look for.
 */
export function slugCanaries(repositoryRoot, folder) {
  const dir = `${SERIES_DIR}/${folder}/art`
  const drawings = modulesIn(repositoryRoot, dir)
  if (drawings === null) {
    return [{ file: dir, phrase: null }]
  }

  return [...drawings, ...(EXTRA[folder]?.slugs ?? [])].flatMap((file) => {
    const slugs = slugsFrom(
      readFileSync(path.join(repositoryRoot, file), 'utf8'),
    )

    // `index.ts`: the table itself, keyed by nothing.
    return slugs.length === 0 ? [] : { file, phrase: slugs[0] ?? null }
  })
}

/**
 * The documented official synopsis URL, without assuming a page identifier.
 * @param {string} source The server credit module.
 * @returns {null | string} Its source URL, or an unreadable canary.
 */
function officialSourceIn(source) {
  return source.match(/https:\/\/one-piece\.com\/anime\/[^'"\s]+/u)?.[0] ?? null
}

/**
 * Source revision addresses are identifying archive data too (#721).
 * @param {string} repositoryRoot The repository root.
 * @returns {{file: string, phrase: null | string}[]} Source-link canaries.
 */
export function sourceCanaries(repositoryRoot) {
  const file = 'docs/content-provenance/sources.json'
  const official = 'src/server/archive/credits.server.ts'
  try {
    const manifest = JSON.parse(
      // fallow-ignore-next-line security-sink -- The root is this script’s directory or a test fixture; file is a fixed repository path, never request input.
      readFileSync(path.join(repositoryRoot, file), 'utf8'),
    )
    // fallow-ignore-next-line security-sink -- The root is this script’s directory or a test fixture; official is a fixed repository path, never request input.
    const source = readFileSync(path.join(repositoryRoot, official), 'utf8')
    return [
      ...Object.values(manifest.sources).map(({ revisionUrl }) => ({
        file,
        phrase: revisionUrl,
      })),
      { file: official, phrase: officialSourceIn(source) },
    ]
  } catch {
    return [{ file, phrase: null }]
  }
}

/**
 * The built client scripts, or nothing at all when there is no build.
 * @param {string} repositoryRoot The repository root.
 * @returns {{bytes: number, name: string, text: string}[]} One per script.
 */
function readBuild(repositoryRoot) {
  try {
    return clientChunks(path.join(repositoryRoot, 'dist', 'client'))
  } catch {
    return []
  }
}

/**
 * A place word or label distinct enough not to occur by accident: two words
 * or a hyphenated one, or eight letters. `Tower` or `Isola` could be anyone's.
 */
const DISTINCT_WORD = /[\s-]|^.{8,}$/u

/**
 * One canary per word and label of every series that labels its place words
 * itself (`dictionary: false`), distinct enough to look for.
 * @param {{folder: string, placeWords: {dictionary: boolean, forms: Record<string, unknown>, regions: Record<string, unknown>}}[]} series The series list.
 * @returns {{file: string, phrase: string}[]} What no client chunk may hold.
 */
export function placeWordCanaries(series) {
  return series.flatMap(({ folder, placeWords }) => {
    if (placeWords.dictionary) {
      return []
    }
    const file = `${SERIES_DIR}/${folder}/placeWords.ts`
    const phrases = [placeWords.regions, placeWords.forms].flatMap((table) =>
      Object.entries(table).flatMap(([word, label]) => [
        word,
        ...Object.values(/** @type {Record<string, string>} */ (label)),
      ]),
    )

    return [...new Set(phrases)]
      .filter((phrase) => DISTINCT_WORD.test(phrase))
      .map((phrase) => ({ file, phrase }))
  })
}

/**
 * Every canary: the prose and slugs of every series in the list, and the
 * source URLs. A list that does not load is one unreadable canary, so the
 * gate exits as unusable rather than as a leak.
 * @param {string} repositoryRoot The repository root.
 * @returns {Promise<{file: string, phrase: null | string}[]>} What to look for.
 */
export async function canariesOf(repositoryRoot) {
  let SERIES
  try {
    ;({ SERIES } = await importArchive('data/series/index.ts'))
  } catch (error) {
    console.error(`archive-gate: the series list did not load: ${error}`)

    return [{ file: 'src/data/series/index.ts', phrase: null }]
  }

  return [
    ...SERIES.flatMap(({ folder }) => [
      ...proseCanaries(repositoryRoot, folder),
      ...slugCanaries(repositoryRoot, folder),
    ]),
    ...sourceCanaries(repositoryRoot),
  ]
}

/**
 * The place word canaries of every series in the list; none when the list
 * does not load, which `canariesOf` already reports as unreadable.
 * @returns {Promise<{file: string, phrase: string}[]>} What to look for.
 */
async function placeWordCanariesOf() {
  try {
    const { SERIES } = await importArchive('data/series/index.ts')
    return placeWordCanaries(SERIES)
  } catch {
    return []
  }
}

/**
 * Reads the build, judges it, and says so.
 * @returns {Promise<number>} The process exit code.
 */
async function main() {
  const repositoryRoot = path.resolve(import.meta.dirname, '..')
  const chunks = readBuild(repositoryRoot)

  if (chunks.length === 0) {
    console.error(
      'archive-gate: no client build to check. Run `npm run build` first.',
    )

    return EXIT_UNUSABLE
  }

  const canaries = await canariesOf(repositoryRoot)
  const verdict = judge(chunks, [...canaries, ...(await placeWordCanariesOf())])

  if (verdict.unreadable.length > 0) {
    console.error(
      `archive-gate: no canary could be read from ${verdict.unreadable.join(', ')}. The gate cannot vouch for anything.`,
    )

    return EXIT_UNUSABLE
  }

  if (!verdict.ok) {
    report(verdict)

    return EXIT_FOUND
  }

  console.log(
    `archive-gate: clean — ${String(chunks.length)} client scripts, ${verdict.total.toLocaleString('en-GB')} bytes, no archive prose.`,
  )

  return checkServer(repositoryRoot, canaries)
}

if (import.meta.url === `file://${process.argv[1]}`) {
  process.exit(await main())
}
