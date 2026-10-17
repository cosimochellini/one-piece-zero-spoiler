// Checks where the One Piece Wiki (onepiece.fandom.com) shows each devil
// fruit as a real fruit, against the fruit's drawings: a fruit the story has
// shown is drawn as it looks from that episode and chapter on (the
// `line-drawings` skill), and nothing else in the repository answers where
// that is, so every audit rebuilt it by hand and could miss a showing (#601).
//
// A showing is read from two places on the fruit's page: the infobox `fruit`
// field (`| fruit = [[Chapter 1070]]; [[Episode 1101]]{{Qref|…}}`), which can
// be the only place that records it, and the `Qref`s of the Appearance
// section, a named `{{Qref|name=x}}` standing for the first `Qref` of that
// name on the page. A `Qref` with no chapter and no episode (a magazine
// design, an SBS) is not a showing; one outside the story that still carries
// a number (an Anime Bonus Corner, a crossover special) or that shows another
// fruit is listed in `NOT_COUNTED` with the reason, and never counted.
//
// The rulings of #465 decide the rest. An anime-only showing counts. Once
// the real fruit is drawn it stays. So a fruit fails when:
// - the first showing, by episode or by chapter, is at or before the
//   record's threshold and its first drawing is not the real fruit
//   (`REAL_FIRST`): the first drawing should be;
// - it is shown later and has no redrawing in `fruitRedrawn`;
// - it has redrawings and none sits at the first showing, comparing only the
//   numbers the wiki gives: an anime-only showing gives an episode, and its
//   chapter is the one that episode adapts, which the wiki does not say.
// A failure a person has checked (a frame check that found the wiki wrong)
// goes in `SHOWING_KEPT` with the reason, and is then only listed.
//
// Run it with `npm run verify:fruits`. It talks to the network, so it is not
// part of `npm run check` or CI; the pages it reads are cached under
// `.gate/wiki/` (`./wiki.mjs`) and never expire, so delete that folder to
// read the wiki afresh. The fruit pages are found the way
// `./verify-chapters.mjs` finds them (`pagesOf`).
import process from 'node:process'
import { pathToFileURL } from 'node:url'

import { importArchive } from './archive-loader.mjs'
import { pagesOf } from './verify-chapters.mjs'

/** @typedef {{ chapter?: number, episode?: number }} Pair */
/** @typedef {Pair & { text: string }} Showing */
/** @typedef {Pair & { reason: string }} Exception */
/** @typedef {{ name?: string, chapter?: number, episode?: number, text: string, bare: boolean }} Qref */
/** @typedef {{ episode: number, chapter: number }} Dated */

/**
 * Fruits whose first drawing in `fruitArt` already is the real fruit, as the
 * story shows it by the record's threshold.
 * @type {Record<string, string>}
 */
const REAL_FIRST = {
  'artificial-dragon-dragon-fruit':
    'eaten by Momonosuke in episode 611, chapter 685',
  'bubble-bubble-fruit': 'beside Kaku’s in episode 271',
  'brush-brush-fruit': 'the flashback of episode 976',
  'dark-dark-fruit': 'in Teach’s hand in episode 325',
  'dog-dog-fruit-model-okuchi-no-makami':
    'as Kaido and Yamato talk about it in episode 1041',
  'gum-gum-fruit': 'from episode 1 by the ruling of #463',
  'ox-ox-fruit-model-giraffe': 'handed to Kaku in episode 271',
}

/**
 * Showings a page cites that do not count: outside the story, or another
 * fruit. Each matches a showing by every number it gives.
 * @type {Record<string, Exception[]>}
 */
const NOT_COUNTED = {
  'fish-fish-fruit-mythical-model-azure-dragon': [
    {
      chapter: 685,
      episode: 611,
      reason:
        'another fruit: the artificial copy Momonosuke ate, filed as artificial-dragon-dragon-fruit',
    },
  ],
  'gum-gum-fruit': [
    {
      episode: 542,
      reason: 'outside the story: Toriko x One Piece Collab Special 2',
    },
  ],
  'magnet-magnet-fruit': [
    {
      episode: 1103,
      reason: 'outside the story: the Anime Bonus Corner after the episode',
    },
  ],
}

/**
 * Failures a person has checked and kept, with the reason. An entry silences
 * every failing verdict for that id.
 * @type {Record<string, string>}
 */
const SHOWING_KEPT = {}

/** The verdicts that fail the run. */
const FAILS = {
  threshold: 'by threshold',
  notDrawn: 'shown, not drawn',
  pair: 'pair differs',
  unresolved: 'unresolved',
}

/** The verdicts that are only listed. */
const LISTED = {
  kept: 'kept',
  real: 'real first',
  redrawn: 'redrawn',
  skipped: 'not counted',
  never: 'never shown',
}

/** One `Qref` template, its body captured; some pages write it `qref`. */
const QREF = /\{\{[Qq]ref\|(?<body>[^{}]*)\}\}/gu

/**
 * One `Qref`'s parameters: `name`, `chap`, `ep` and the text. A part that is
 * not `key=value` is text, so the pipe of a `[[link|label]]` in the text
 * comes back when the parts are joined.
 * @param {string} body The template between `{{Qref|` and `}}`.
 * @returns {Qref} The parameters.
 */
export function qrefOf(body) {
  /** @type {Map<string, string>} */
  const named = new Map()
  /** @type {string[]} */
  const text = []
  for (const part of body.split('|')) {
    const at = part.indexOf('=')
    const key = part.slice(0, Math.max(0, at)).trim()
    if (/^[a-z]+\d*$/u.test(key)) {
      named.set(key, part.slice(at + 1).trim())
    } else {
      text.push(part)
    }
  }

  return {
    ...(named.has('name') && { name: named.get('name') }),
    ...numbered('chapter', named.get('chap')),
    ...numbered('episode', named.get('ep')),
    text: text.join('|').trim(),
    bare: named.size === 1 && text.length === 0,
  }
}

/**
 * A number field, left out when the value is not a number.
 * @param {'chapter' | 'episode'} key The field.
 * @param {string | undefined} value The parameter's value.
 * @returns {Pair} The field, or nothing.
 */
function numbered(key, value) {
  return value !== undefined && /^\d+$/u.test(value) ?
      { [key]: Number(value) }
    : {}
}

/**
 * Every place a page shows the real fruit: one per segment of the infobox
 * `fruit` field that names a chapter or an episode, then one per Appearance
 * `Qref` that does, named ones resolved. The Appearance section often cites
 * the infobox's `Qref` again, so a repeat is dropped.
 * @param {string} wikitext The fruit page.
 * @returns {Showing[]} The showings, in page order.
 */
export function showingsOf(wikitext) {
  const resolve = resolverOf(wikitext)
  const field = wikitext
    .split('\n')
    .find((line) => /^\s*\|\s*fruit\s*=/u.test(line))
  const appearance = wikitext
    .split(/^(?===[^=])/mu)
    .find((section) => /^==\s*Appearance\s*==/u.test(section))
  const showings = [
    ...fieldShowings(field?.slice(field.indexOf('=') + 1) ?? '', resolve),
    ...(appearance ?? '')
      .matchAll(QREF)
      .map((match) => showing('', resolve(match.groups?.['body'] ?? ''))),
  ].filter(
    (found) => found.chapter !== undefined || found.episode !== undefined,
  )

  const unique = new Map(
    showings.map((found) => [JSON.stringify(found), found]),
  )

  return unique.values().toArray()
}

/**
 * Reads a `Qref` body, a bare `{{Qref|name=x}}` standing for the first
 * `Qref` of that name on the page that says more.
 * @param {string} wikitext The page.
 * @returns {(body: string) => Qref} The reader.
 */
function resolverOf(wikitext) {
  /** @type {Map<string, Qref>} */
  const defined = new Map()
  for (const match of wikitext.matchAll(QREF)) {
    const qref = qrefOf(match.groups?.['body'] ?? '')
    if (qref.name !== undefined && !qref.bare && !defined.has(qref.name)) {
      defined.set(qref.name, qref)
    }
  }

  return (body) => {
    const qref = qrefOf(body)

    return qref.bare ? (defined.get(qref.name ?? '') ?? qref) : qref
  }
}

/**
 * The infobox field cut after each `Qref`: the links before a `Qref` and the
 * `Qref` itself are one showing, and links after the last one are another.
 * @param {string} field The field's value.
 * @param {(body: string) => Qref} resolve A `Qref` body, read.
 * @returns {Showing[]} The segments, numbered or not.
 */
function fieldShowings(field, resolve) {
  // `split` keeps the captured body between the pieces it cuts.
  const parts = field.split(QREF)

  return Array.from({ length: Math.ceil(parts.length / 2) }, (_, index) => {
    const body = parts[2 * index + 1]

    return showing(
      parts[2 * index] ?? '',
      body === undefined ? { text: '' } : resolve(body),
    )
  })
}

/**
 * One showing from the links before a `Qref` and the `Qref`: the earliest
 * chapter and episode either names.
 * @param {string} links The wikitext before the `Qref`.
 * @param {Pick<Qref, 'chapter' | 'episode' | 'text'>} qref The `Qref`.
 * @returns {Showing} The showing.
 */
function showing(links, qref) {
  return {
    ...earliest('chapter', [
      ...numbersOf(links, /\[\[Chapter (?<n>\d+)\]\]/gu),
      ...(qref.chapter === undefined ? [] : [qref.chapter]),
    ]),
    ...earliest('episode', [
      ...numbersOf(links, /\[\[Episode (?<n>\d+)\]\]/gu),
      ...(qref.episode === undefined ? [] : [qref.episode]),
    ]),
    text: qref.text,
  }
}

/**
 * Every number a pattern captures.
 * @param {string} text Where to look.
 * @param {RegExp} pattern A global pattern with one numeric group named `n`.
 * @returns {number[]} The numbers.
 */
function numbersOf(text, pattern) {
  return text
    .matchAll(pattern)
    .map((match) => Number(match.groups?.['n']))
    .toArray()
}

/**
 * The smallest of some numbers as one field, or nothing.
 * @param {'chapter' | 'episode'} key The field.
 * @param {number[]} numbers The numbers.
 * @returns {Pair} The field, or nothing.
 */
function earliest(key, numbers) {
  return numbers.length === 0 ? {} : { [key]: Math.min(...numbers) }
}

/**
 * Whether a pair names another: every number the first gives matches.
 * @param {Pair} pair The pair that may leave a number out.
 * @param {Pair} other The other.
 * @returns {boolean} Whether it does.
 */
function matches(pair, other) {
  return (
    (pair.chapter === undefined || pair.chapter === other.chapter)
    && (pair.episode === undefined || pair.episode === other.episode)
  )
}

/**
 * What one fruit's showings say against its drawings.
 * @param {string} id The record's id.
 * @param {Dated} threshold The record's `revealedAtEpisode` and `revealedAtChapter`.
 * @param {Showing[]} showings Where the wiki shows the fruit.
 * @param {Dated[]} redrawn Its `fruitRedrawn` entries.
 * @returns {{ verdict: string, first: Pair, counted: Showing[], skipped: Showing[] }} The verdict; a skipped showing's text is the reason.
 */
export function verdictOf(id, threshold, showings, redrawn) {
  const exceptions = NOT_COUNTED[id] ?? []
  /** @type {Showing[]} */
  const counted = []
  /** @type {Showing[]} */
  const skipped = []
  for (const found of showings) {
    const exception = exceptions.find((each) => matches(each, found))
    if (exception === undefined) {
      counted.push(found)
    } else {
      skipped.push({ ...found, text: exception.reason })
    }
  }

  const first = {
    ...earliest(
      'chapter',
      counted.flatMap((found) => found.chapter ?? []),
    ),
    ...earliest(
      'episode',
      counted.flatMap((found) => found.episode ?? []),
    ),
  }
  const verdict =
    counted.length === 0 ?
      LISTED.never
    : judged({ id, threshold, first, redrawn })
  const kept =
    Object.values(FAILS).includes(verdict) && Object.hasOwn(SHOWING_KEPT, id)

  return { verdict: kept ? LISTED.kept : verdict, first, counted, skipped }
}

/**
 * The verdict on a fruit the story shows, before `SHOWING_KEPT`.
 * @param {{ id: string, threshold: Dated, first: Pair, redrawn: Dated[] }} fruit The fruit.
 * @returns {string} The verdict.
 */
function judged({ id, threshold, first, redrawn }) {
  if (Object.hasOwn(REAL_FIRST, id)) {
    return LISTED.real
  }

  if (
    (first.episode ?? Infinity) <= threshold.episode
    || (first.chapter ?? Infinity) <= threshold.chapter
  ) {
    return FAILS.threshold
  }

  if (redrawn.length === 0) {
    return FAILS.notDrawn
  }

  return redrawn.some((entry) => matches(first, entry)) ?
      LISTED.redrawn
    : FAILS.pair
}

/** @typedef {{ id: string, page: string, threshold: string, first: string, verdict: string, showings: string }} Row */
/** @typedef {{ id: string, kind: string, name: { en: string, it: string }, revealedAtEpisode: number, revealedAtChapter: number }} Fruit */

/**
 * A pair as `ep N / ch M`, either side a dash when the wiki gives none.
 * @param {{ episode?: number | string, chapter?: number | string }} pair The pair.
 * @returns {string} The pair.
 */
function pairText({ episode = '—', chapter = '—' }) {
  return `ep ${String(episode)} / ch ${String(chapter)}`
}

/**
 * Showings as one table cell, each with its `Qref` text.
 * @param {Showing[]} showings The showings.
 * @returns {string} The cell.
 */
function showingsText(showings) {
  return showings
    .map((found) => {
      return found.text === '' ?
          pairText(found)
        : `${pairText(found)}: ${found.text}`
    })
    .join('; ')
    .replaceAll('|', String.raw`\|`)
}

/**
 * One fruit's rows: its verdict, and its showings that do not count.
 * @param {Fruit} record The record.
 * @param {{ title: string, wikitext: string } | undefined} page Its wiki page, if one resolved.
 * @param {Dated[]} redrawn Its `fruitRedrawn` entries.
 * @returns {Row[]} The rows.
 */
export function rowsOf(record, page, redrawn) {
  const threshold = {
    episode: record.revealedAtEpisode,
    chapter: record.revealedAtChapter,
  }
  const base = { id: record.id, threshold: pairText(threshold), first: '—' }
  if (page === undefined) {
    return [{ ...base, page: '—', verdict: FAILS.unresolved, showings: '' }]
  }

  const { verdict, first, counted, skipped } = verdictOf(
    record.id,
    threshold,
    showingsOf(page.wikitext),
    redrawn,
  )
  const row = {
    ...base,
    page: page.title,
    ...(counted.length > 0 && { first: pairText(first) }),
    verdict,
    showings: showingsText(counted),
  }

  return skipped.length === 0 ?
      [row]
    : [
        row,
        {
          ...base,
          page: page.title,
          verdict: LISTED.skipped,
          showings: showingsText(skipped),
        },
      ]
}

/**
 * Every fruit record against its wiki page, in archive order.
 * @returns {Promise<Row[]>} One row per fruit, and one per fruit with showings that do not count.
 */
async function verify() {
  const { entities } = await importArchive('data/entities.ts')
  const { fruitRedrawn } = await importArchive('data/art/fruits/index.ts')
  const fruits = /** @type {Fruit[]} */ (entities).filter(
    (entry) => entry.kind === 'fruit',
  )
  const redrawings = /** @type {Record<string, Dated[]>} */ (fruitRedrawn)
  /** @type {Row[]} */
  const rows = []
  for (const record of fruits) {
    const pages = await pagesOf(record)
    rows.push(...rowsOf(record, pages?.[0], redrawings[record.id] ?? []))
  }

  return rows
}

/**
 * A markdown table of the rows with one verdict, under a heading.
 * @param {string} verdict The verdict.
 * @param {Row[]} rows Every row.
 * @returns {string} The heading and the table, or a one-line "none".
 */
function table(verdict, rows) {
  const listed = rows.filter((row) => row.verdict === verdict)
  const heading = `### ${verdict} (${String(listed.length)})`
  if (listed.length === 0) {
    return `${heading}\n\nnone`
  }

  /** @type {Record<string, Record<string, string>>} */
  const notes = { [LISTED.kept]: SHOWING_KEPT, [LISTED.real]: REAL_FIRST }
  const lines = listed.map((row) => {
    const note = notes[verdict]?.[row.id]
    const cell = note === undefined ? row.showings : `${row.showings}; ${note}`

    return `| ${[row.id, row.threshold, row.first, row.page, cell].join(' | ')} |`
  })

  return `${heading}\n\n| fruit | threshold | first shown | page | showings |\n| --- | --- | --- | --- | --- |\n${lines.join('\n')}`
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  const rows = await verify()
  const failing = Object.values(FAILS)
  const never = rows.filter((row) => row.verdict === LISTED.never)
  const verdicts = [
    ...failing,
    LISTED.kept,
    LISTED.real,
    LISTED.redrawn,
    LISTED.skipped,
  ]

  console.log(
    [
      ...verdicts.map((verdict) => table(verdict, rows)),
      `### ${LISTED.never} (${String(never.length)})\n\n${never.map((row) => row.id).join(', ')}`,
    ].join('\n\n'),
  )
  process.exitCode = rows.some((row) => failing.includes(row.verdict)) ? 1 : 0
}
