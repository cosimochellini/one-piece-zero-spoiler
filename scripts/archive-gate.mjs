/**
 * Blocking archive gate.
 *
 * The archive is 800 KB of TypeScript and it must not reach the browser
 * (issue #12). Nothing else in the toolchain can see that it has: a stray
 * value import from `~/data` typechecks, lints, passes every test and passes
 * both other gates, and the only symptom is a bigger `.js` file that a
 * visitor with no bookmark can read end to end.
 *
 * Three checks over the built client chunks:
 *
 *   1. Prose canaries. The longest sentence in every archive module — all
 *      eleven sagas and the ship's log — read at gate time rather than
 *      hard-coded, so they cannot go stale, and looked for in the chunks.
 *      Never a key such as `revealedAtEpisode`, which legitimately survives
 *      on a covered record.
 *   2. Slug canaries. The drawing modules carry no prose: they are keyed by
 *      record id, and a record's id is its name slug. A hyphenated id long
 *      enough not to occur by accident — `monkey-d-luffy`, `edward-newgate` —
 *      is looked for in the chunks too, because a leak there ships names as
 *      literal identifiers rather than as sentences.
 *   3. A byte budget. The canaries name every module now, but the budget
 *      still catches bulk arriving through a shape neither pattern matches.
 *
 * Exit codes:
 *   0  the archive stayed on the server
 *   1  archive prose in a client chunk, or the budget exceeded
 *   2  nothing to check: no build, or no canary could be read
 */
import console from 'node:console'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const EXIT_CLEAN = 0
const EXIT_FOUND = 1
const EXIT_UNUSABLE = 2

/** How much of a canary to quote when one turns up. */
const QUOTE_LENGTH = 60

/** How many of the largest chunks to name when the budget is blown. */
const WORST_CHUNKS = 5

/**
 * The ceiling on everything the browser downloads to run the site. Today's
 * build is ~449 KB, of which ~318 KB is React itself; the archive alone was
 * 599 KB of the 1,049 KB build this replaced. The headroom is for ordinary
 * growth, not for a saga.
 */
export const MAX_CLIENT_BYTES = 520_000

/** Where the prose lives: every saga, and the ship's log. */
const PROSE_DIR = 'src/data/records'
const PROSE_EXTRA = ['src/data/places.ts']

/** Where the drawings live, keyed by the id of the record each was drawn for. */
const ART_DIR = 'src/data/art'

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
// enough to be a sentence of the archive rather than a label from the UI.
const CANARY_PATTERN = /en: '(?<prose>(?:[^'\\]|\\.){40,})'/gu

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
    .toSorted((a, b) => b.length - a.length)
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

  return {
    found,
    ok: found.length === 0 && total <= MAX_CLIENT_BYTES,
    total,
    unreadable,
  }
}

/**
 * Says what went wrong, loudly enough to act on.
 * @param {ReturnType<typeof judge>} verdict What the gate made of the build.
 * @param {{bytes: number, name: string}[]} chunks The scripts, for the budget.
 * @returns {void}
 */
function report(verdict, chunks) {
  for (const hit of verdict.found) {
    console.error(
      `archive-gate: ${hit.file} reached the browser — found in dist/client/assets/${hit.chunk}\n  “${hit.phrase.slice(0, QUOTE_LENGTH)}…”`,
    )
  }

  if (verdict.total <= MAX_CLIENT_BYTES) {
    return
  }

  console.error(
    `archive-gate: client scripts total ${verdict.total.toLocaleString('en-GB')} bytes, over the ${MAX_CLIENT_BYTES.toLocaleString('en-GB')} ceiling.`,
  )
  const worst = chunks
    .toSorted((a, b) => b.bytes - a.bytes)
    .slice(0, WORST_CHUNKS)
  for (const chunk of worst) {
    console.error(`  ${String(chunk.bytes).padStart(9)}  ${chunk.name}`)
  }
}

/**
 * One canary per archive module that carries prose: every saga, and the log.
 * @param {string} repoRoot The repository root.
 * @returns {{file: string, phrase: null | string}[]} What to look for.
 */
function proseCanaries(repoRoot) {
  const sagas = readdirSync(path.join(repoRoot, PROSE_DIR))
    .filter((name) => name.endsWith('.ts') && !name.endsWith('.test.ts'))
    .map((name) => `${PROSE_DIR}/${name}`)

  return [...sagas, ...PROSE_EXTRA].flatMap((file) => {
    const phrase = canaryFrom(readFileSync(path.join(repoRoot, file), 'utf8'))

    // `saga.ts` is the shape of a saga, not a saga: no prose, nothing to say.
    if (phrase === null && file.endsWith('saga.ts')) {
      return []
    }

    return [{ file, phrase }]
  })
}

/**
 * One canary per drawing module: the first id long enough to be unmistakable.
 * @param {string} repoRoot The repository root.
 * @returns {{file: string, phrase: null | string}[]} What to look for.
 */
function slugCanaries(repoRoot) {
  return readdirSync(path.join(repoRoot, ART_DIR))
    .filter((name) => name.endsWith('.ts') && !name.endsWith('.test.ts'))
    .flatMap((name) => {
      const file = `${ART_DIR}/${name}`
      const slugs = slugsFrom(readFileSync(path.join(repoRoot, file), 'utf8'))

      // `index.ts`, `stroke.ts`: the table and its type, keyed by nothing.
      return slugs.length === 0 ? [] : [{ file, phrase: slugs[0] ?? null }]
    })
}

/**
 * The built client scripts, or nothing at all when there is no build.
 * @param {string} repoRoot The repository root.
 * @returns {{bytes: number, name: string, text: string}[]} One per script.
 */
function readBuild(repoRoot) {
  try {
    return clientChunks(path.join(repoRoot, 'dist', 'client'))
  } catch {
    return []
  }
}

/**
 * Reads the build, judges it, and says so.
 * @returns {number} The process exit code.
 */
function main() {
  const repoRoot = path.resolve(import.meta.dirname, '..')
  const chunks = readBuild(repoRoot)

  if (chunks.length === 0) {
    console.error(
      'archive-gate: no client build to check. Run `npm run build` first.',
    )

    return EXIT_UNUSABLE
  }

  const canaries = [...proseCanaries(repoRoot), ...slugCanaries(repoRoot)]
  const verdict = judge(chunks, canaries)

  if (verdict.unreadable.length > 0) {
    console.error(
      `archive-gate: no canary could be read from ${verdict.unreadable.join(', ')}. The gate cannot vouch for anything.`,
    )

    return EXIT_UNUSABLE
  }

  if (!verdict.ok) {
    report(verdict, chunks)

    return EXIT_FOUND
  }

  console.log(
    `archive-gate: clean — ${String(chunks.length)} client scripts, ${verdict.total.toLocaleString('en-GB')} bytes, no archive prose.`,
  )

  return EXIT_CLEAN
}

if (import.meta.url === `file://${process.argv[1]}`) {
  process.exit(main())
}
