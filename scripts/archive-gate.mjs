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
 *   4. A byte budget. The canaries name every module now, but the budget
 *      still catches bulk arriving through a shape neither pattern matches.
 *
 * The SSR manifest also proves that every series archive enters through a
 * dynamic import, with no canary-bearing data in another runtime entry's
 * static dependency closure.
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
import { byNumber, byValue } from 'sort-es'

import { importArchive } from './archive-loader.mjs'
import { checkServer } from './archive-server-gate.mjs'

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
 * growth, not for a saga. Raised from 520 KB to 530 KB on 2026-10-12, when
 * main stood at ~517 KB and the bookmark dialog redesign added ~4.5 KB of its
 * own code. Raised to 540 KB on 2026-10-17, when main stood at ~529 KB and the
 * living fog tile of the fruits redesign (#661) added ~4.4 KB. Raised to
 * 545 KB on 2026-10-17, when main stood at ~536.4 KB and the fruits control
 * bar (#663) added ~7.8 KB: the generic segmented control and chip group, the
 * pinned bar that folds on a phone, and the search params in the address.
 * 545 KB is the ceiling the owner set for this raise. Raised to 549.75 KB
 * on 2026-10-17, when main stood at ~545.0 KB and the saga marquee over the
 * fruits album (#664) added ~3.7 KB: the rail of tiles, the lead's glow and
 * the line that points back to the last fruit. The new ceiling is the
 * measured build plus ~1 KB, under the 555 KB the owner allowed. Raised to
 * 552.25 KB on 2026-10-17, when main stood at ~548.7 KB and the faction
 * labels for the fruit eaters (#666) added ~2.5 KB to both dictionaries,
 * which ship to the browser. Again the measured build plus ~1 KB, under 555 KB.
 * Raised to 555.75 KB on 2026-10-17, when main stood at ~551.2 KB and the
 * saga view of the fruits album (#665) added ~3.5 KB: the saga groups, the
 * view switch's second option, the marquee's link to the whole saga, the
 * page's line for the saga view and their words in both dictionaries. The
 * grouping itself is the server's. Again the measured build plus ~1 KB,
 * under the 558 KB allowed for this raise. Raised to 557.75 KB on 2026-10-17,
 * when main stood at ~554.7 KB and the faction view (#667) added ~2.1 KB: the
 * view switch's third option, the eater a faction's tile shows, the second
 * copy of a fruit kept from travelling, and the view's words in both
 * dictionaries. The grouping itself is the server's, and the saga view's
 * groups became the generic ones both views draw. Again the measured build
 * plus ~1 KB, under the 562 KB allowed for this raise. Raised to 565.9 KB on
 * 2026-10-17, when main stood at ~556.8 KB and the fruit page's stage (#668)
 * added ~8.1 KB: the stage with its glow and its pen, the fruit before and
 * after with its arrow keys and its swipe, the history, the saga's rail, and
 * their words in both dictionaries (~1.1 KB). The history, the neighbours
 * and the rail are the server's. Again the measured build plus ~1 KB, under
 * the 566 KB allowed for this raise. Raised to 567.6 KB on 2026-10-18, when
 * main stood at ~565.1 KB and the switch between a fruit's drawings (#669)
 * added ~1.4 KB: the drawings stacked on the stage with their cross-fade,
 * the switch (the album's own `ChoiceGroup`, now a chunk both pages share),
 * and its four words in both dictionaries. Which drawings the reader has
 * reached is the server's. Again the measured build plus ~1 KB, under the
 * 570 KB allowed for this raise. Raised to 581.4 KB on 2026-10-18, when main
 * stood at ~566.3 KB and the sea chart that opens the places page (#674)
 * added ~14.3 KB: the chart drawn across and upright, its geometry (the
 * world, the legs, the fog tail, where a label goes), the ships on the
 * route, the stops with their arrow keys, and six new keys in both
 * dictionaries. Where each open stop sits is the server's; a covered stop
 * has no point to send. The measured build plus ~1 KB, as the epic (#671)
 * allows each of its pull requests. Raised to 588.1 KB on 2026-10-18, when
 * main stood at ~580.6 KB and a page for every place (#673) added ~6.5 KB:
 * the new route (the plate and entry, the stretch of the chart around the
 * place, the drawings in a row, the stops either side), the short list of
 * links that replaced the stacked entries, and sixteen new keys in both
 * dictionaries. The stacked log it replaces left the bundle. Again the
 * measured build plus ~1 KB, as the epic allows. Raised to 598 KB on
 * 2026-10-18, when main stood at ~587.2 KB and the index under the chart
 * (#675) added ~9.9 KB: the search, the layout switch and the sea, type
 * and saga pickers in the address, the places by sea as rows or
 * plates, the chart lighting what they keep, and eighteen new keys in both
 * dictionaries. The short list of links it replaces left the bundle. The
 * measured build plus ~1 KB, as the epic allows. Raised to 606.2 KB on
 * 2026-10-18, when main stood at ~597.2 KB and the peek on the sea chart
 * (#679) added ~8.0 KB: the popover that is a sheet on a phone, its hover,
 * focus, tap and Esc handling, the veiled peek of a stop under fog, the
 * ships as buttons with a peek of their own, and two new keys in both
 * dictionaries. The measured build plus ~1 KB, as the epic allows.
 * Raised to 622.6 KB on 2026-10-19, when main stood at ~605.5 KB and the
 * world map (#728) added ~16.1 KB: the world in Oda's layout (the Red Line's
 * ridges, Reverse Mountain, waves, the Sea King, the compass), the route as
 * curves with Luffy's own line, the window that zooms and pans across, the
 * names of the stops and the sagas and which of them fit at each zoom, and
 * six new keys in both dictionaries. The list layout of the index left the
 * bundle. Each island's outline is the server's, sent with its open stop.
 * The measured build plus ~1 KB. Raised to 625.5 KB on 2026-10-20 for the
 * unofficial-project footer (#723): bilingual rights and contact guidance,
 * source/contact links and explicit unofficial social descriptions. The
 * measured client build is 624,448 bytes; the ceiling keeps ~1 KB headroom.
 * No archive data or drawings move to the client. Raised to 641.25 KB on
 * 2026-10-20 for the bilingual privacy notice (#722): public technical-cookie,
 * hosting and rights guidance, its route and footer link. The measured build
 * is 640,233 bytes; the ceiling retains ~1 KB headroom. The added prose is
 * public policy, not archive records or drawings; all leak canaries remain.
 * Raised for #728 on 2026-10-22: reached-label placement and leader lines.
 * The measured build is 642,931 bytes; keep 1 KB headroom. Server payloads
 * are unchanged, and no covered names, artwork or coordinates are added.
 * Raised for #721 on 2026-10-23: public bilingual source/license notices
 * and their route. Measured client: 653,301 bytes plus 1 KB headroom.
 * Record-specific source URLs remain server-only and have their own canaries.
 * Raised for #753 on 2026-10-24: series-first routing, shared hub/legal shells,
 * selected-series navigation and public description RPCs. The measured client
 * build is 662,191 bytes; the ceiling retains 1 KB headroom. No archive records
 * or drawings enter the client, and the emitted SSR graph is now checked to
 * keep each archive behind its own dynamic import. Raised for #754 on
 * 2026-10-24: the hub's stages (each series in its own theme, its straw-hat
 * drawing, the announced Hunter x Hunter card), the hub's seven keys and the
 * shared footer's three, in both dictionaries. The measured client build is
 * 666,769 bytes; the ceiling retains 1 KB headroom. The hub sends counts and the reader's own
 * bookmarks only; no record, name or record drawing enters the client.
 * Raised for #727 on 2026-10-24: the privacy notice names Cloudflare as the
 * host, keeps the old Netlify address for now and adds two source links, in
 * both dictionaries. The measured client build is 667,836 bytes; the ceiling
 * retains 1 KB headroom. No archive data or drawings move to the client.
 * Raised for #776 and #778 on 2026-10-24: the browser asks for the
 * character shelves and the fruit album once the page has hydrated. The
 * shelves come as plain JSON; the album comes through the loader on a
 * navigation, and is filed under the bookmark the server read. Each offers
 * to ask again when its call fails, and puts a reload back where it was
 * once it lands; the fruits' control bar is drawn from counts until then.
 * The measured client build is 672,116 bytes; the ceiling retains 1 KB
 * headroom. Both still come from the server at the reader's bookmark; no
 * archive data moves to the client. Raised for #777 on 2026-10-24: the
 * featured crests past the tenth draw through `useDrawing`. The measured
 * client build is 672,215 bytes; the ceiling retains 1 KB headroom. The
 * strokes still come from the server, only for records the reader has
 * reached.
 * Raised for #781 on 2026-10-24: the places page draws the chart in the
 * orientation the window's width asks for and the index once the page has
 * hydrated, with the shelves' scroll-back hook moved to share. The measured
 * client build is 672,689 bytes; the ceiling retains 1 KB headroom. The
 * index's data was in the payload already; nothing new reaches the client.
 */
export const MAX_CLIENT_BYTES = 673_689

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
function clientChunks(clientDir) {
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
    .toSorted(byValue('bytes', byNumber({ desc: true })))
    .slice(0, WORST_CHUNKS)
  for (const chunk of worst) {
    console.error(`  ${String(chunk.bytes).padStart(9)}  ${chunk.name}`)
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

  return checkServer(repositoryRoot, canaries)
}

if (import.meta.url === `file://${process.argv[1]}`) {
  process.exit(await main())
}
