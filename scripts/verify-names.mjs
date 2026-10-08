// Checks every character's Italian name against the Italian One Piece Wiki
// (onepiece.fandom.com/it), the rule in `src/data/entities.ts`: the dub's
// name, or the Star Comics spelling where the dub's cannot be checked. The
// Italian wiki's page title follows Star Comics, and its "Nome doppiaggio
// italiano" field (`nomeita`) gives the dub's name where it differs.
//
// A name passes when it is the page title (without a "(zombie)"
// disambiguator), any name in `nomeita`, or an `alias` or `nickname` of the
// infobox; or when it is part of one of those, so a surname or a real name
// said later stays out (Sanji, not Vinsmoke Sanji), with an honorific in
// front (O-Tama, Don Chinjao). A paired record (Oimo e Kashi) passes part by
// part. A name that fails takes the dub's, the last one `nomeita` lists
// (TonyTony Chopper from episode 751), or else the title.
//
// The Italian page is the English page's interlanguage link (`titlesOf` in
// `./verify-chapters.mjs`), or the one in `ITALIAN_TITLES` where that link is
// missing or wrong.
//
// Run it with `npm run verify:names`. It talks to the network, so it is not
// part of `npm run check` or CI; the answers are cached under `.gate/wiki/`
// (`./wiki.mjs`) and never expire.
import process from 'node:process'
import { pathToFileURL } from 'node:url'

import { importArchive } from './archive-loader.mjs'
import { titlesOf } from './verify-chapters.mjs'
import { italianPages, italianTitles } from './wiki.mjs'

/** @typedef {import('./wiki.mjs').Page} Page */
/** @typedef {{ title: string, dub: string[], aliases: string[] }} Names */
/** @typedef {{ id: string, kind: string, name: { en: string, it: string } }} Record_ */

/**
 * Records whose Italian page the English page does not link, or links
 * wrongly. A list names the pages of a paired record.
 * @type {Record<string, string | string[]>}
 */
const ITALIAN_TITLES = {
  'buhichuck': 'Grunfchuck',
  'carne': 'Carne',
  'cerberus': 'Cerbero (spada)',
  'chimney': 'Chimney',
  'coribou': 'Coribou',
  'dosun': 'Sbam',
  'gerd': 'Gerd',
  'gyoro-nin-and-bao': ['Gyoro', 'Nin', 'Bao'],
  'hammond': 'Hammond',
  'hasami': 'Chelotto',
  'heracles': 'Hercules',
  'inuarashi': 'Cane-tempesta',
  'jorul': 'Jorl',
  'kikyo': 'Kikyo',
  'kiwi-and-mozu': ['Kiwi', 'Mozu'],
  'kozuki-sukiyaki': 'Kozuki Sukiyaki',
  'kurozumi-higurashi': 'Kurozumi Higurashi',
  'kurozumi-semimaru': 'Kurozumi Semimaru',
  'minotaurus': 'Minotauros',
  'mocha': 'Mocia',
  'mr-13': 'Mr. Thirteen',
  'rimoshifu-killingham': 'Rimoshifu Killingham',
  'risky-brothers': 'Risky',
  'rock-and-scotch': ['Rock', 'Scotch (cyborg)'],
  'ryuma': 'Shimotsuki Ryuma',
  // The disguise and the man are two records and one page.
  'tenguyama-hitetsu': 'Kozuki Sukiyaki',
  'terracotta': 'Terracotta',
}

/**
 * Names kept after a hand check found no Italian page to read them from. The
 * value is the name checked, so a record renamed since falls back to the rule.
 * @type {Record<string, string>}
 */
const NAMES_KEPT = {
  // The page of the people they lead or belong to writes them so: Shandia,
  // Vegapunk (Satelliti), Serafini, Kurozumi Kanjuro.
  'atlas': 'Atlas',
  'edison': 'Edison',
  'kazenbo': 'Kazenbo',
  'lilith': 'Lilith',
  'pythagoras': 'Pythagoras',
  's-bear': 'S-Bear',
  's-hawk': 'S-Hawk',
  's-shark': 'S-Shark',
  's-snake': 'S-Snake',
  'shaka': 'Shaka',
  'shandia-chief': 'Capo degli Shandia',
  'york': 'York',
}

/** An honorific the archive writes in front of a name the wiki files bare. */
const HONORIFIC = /^(?:O-|(?:Baron|Don|Fratelli|Miss|San|Sant|Santa) )/u

/**
 * One infobox field's raw value, up to the next field or the box's end.
 * @param {string} wikitext The page.
 * @param {string} field The field.
 * @returns {string} The value, or nothing.
 */
function fieldOf(wikitext, field) {
  const chunk = wikitext
    .split('\n|')
    .find((part) => part.split('=', 1)[0]?.trim() === field)

  return chunk?.slice(chunk.indexOf('=') + 1).split('\n}}', 1)[0] ?? ''
}

/**
 * The names one field lists, one per line or per `;`: a `{{Nihongo}}` gives
 * its first argument, a link its label, and a note in brackets after the
 * name ("(ep. 751)", "(come Officer Agent)") is dropped.
 * @param {string} value The field's value.
 * @returns {string[]} The names, in the order listed.
 */
export function namesIn(value) {
  return value
    .replaceAll(/<ref[^>]*\/>|<ref[^>]*>[^<]*<\/ref>|\{\{Nota[^{}]*\}\}/gu, '')
    .replaceAll(/\{\{Nihongo\|(?<args>[^{}]*)\}\}/gu, (_, args) =>
      nihongoName(args.split('|')),
    )
    .split('[[')
    .map((chunk, index) => (index === 0 ? chunk : unlinked(chunk)))
    .join('')
    .split(/[\n;]/u)
    .map((line) => listed(line))
    .filter((name) => name !== '' && !name.startsWith('|'))
}

/**
 * One listed name without its bullet or the note in brackets after it.
 * @param {string} line The line.
 * @returns {string} The name.
 */
function listed(line) {
  const [name = ''] = line.replace(/^\s*\*/u, '').split('(', 1)

  return name.trim()
}

/**
 * What follows a `[[` with its link replaced by the link's label.
 * @param {string} chunk The text after the `[[`.
 * @returns {string} The text, label first.
 */
function unlinked(chunk) {
  const [link = '', ...rest] = chunk.split(']]')

  return [link.split('|').at(-1), ...rest].join('')
}

/**
 * The name a `{{Nihongo|name|kanji|romaji}}` gives: the first argument, or
 * the romaji where the first is the Japanese itself (`{{Nihongo|小紫|Komurasaki}}`).
 * @param {string[]} args The arguments.
 * @returns {string} The name.
 */
function nihongoName(args) {
  const [first = ''] = args

  return /\p{Script=Latin}/u.test(first) ? first : (args.at(-1) ?? '')
}

/**
 * The names an Italian page accepts for its subject.
 * @param {Page} page The page.
 * @returns {Names} The title, the dub's names and the aliases.
 */
export function namesOf(page) {
  return {
    title: page.title.replace(/ \([^)]*\)$/u, ''),
    dub: namesIn(fieldOf(page.wikitext, 'nomeita')),
    aliases: ['alias', 'nickname'].flatMap((field) =>
      namesIn(fieldOf(page.wikitext, field)),
    ),
  }
}

/**
 * A name as compared: straight apostrophes, lower case.
 * @param {string} name The name.
 * @returns {string} The key.
 */
function keyOf(name) {
  return name.replaceAll('’', "'").toLowerCase()
}

/**
 * Whether one name is a wiki name, or a part of one with an honorific in
 * front. The wiki's name splits at spaces and hyphens (Sady-chan), the
 * archive's only at spaces, so Inuarashi is not Inu-Arashi.
 * @param {string} name The archive's name.
 * @param {string} wiki The wiki's name.
 * @returns {boolean} Whether it passes.
 */
function matches(name, wiki) {
  const words = new Set(keyOf(wiki).split(/[\s-]+/u))

  return (
    keyOf(name) === keyOf(wiki)
    || keyOf(name.replace(HONORIFIC, ''))
      .split(/\s+/u)
      .every((word) => words.has(word))
  )
}

/**
 * Whether the archive's Italian name passes against the pages read: every
 * part of a paired name ("Oimo e Kashi", "Carota, Peperone e Cipolla") is
 * one of their names.
 * @param {string} name The archive's name.
 * @param {Names[]} pages The names each page accepts.
 * @returns {boolean} Whether it passes.
 */
export function accepts(name, pages) {
  const wiki = pages.flatMap((names) => Object.values(names).flat())

  return name
    .split(/, | e /u)
    .every((part) => wiki.some((candidate) => matches(part, candidate)))
}

/**
 * The name a failing record takes: the dub's latest, else the title, page
 * by page. Where the title is a real name or a surname said later, the
 * record takes the alias or the bare name instead, which the report lists
 * beside it.
 * @param {Names[]} pages The names each page accepts.
 * @returns {string} The suggestion.
 */
export function suggestionOf(pages) {
  return pages.map(({ title, dub }) => dub.at(-1) ?? title).join(' + ')
}

/**
 * Which way a record's name stands against its pages.
 * @param {Record_} record The record.
 * @param {(Page | undefined)[]} pages Its Italian pages, missing ones undefined.
 * @returns {'kept' | 'ok' | 'unresolved' | 'wrong'} The verdict.
 */
export function verdictOf(record, pages) {
  if (NAMES_KEPT[record.id] === record.name.it) {
    return 'kept'
  }

  const read = pages.filter((page) => page !== undefined)
  if (read.length < pages.length || read.length === 0) {
    return 'unresolved'
  }

  return (
      accepts(
        record.name.it,
        read.map((names) => namesOf(names)),
      )
    ) ?
      'ok'
    : 'wrong'
}

/** @typedef {{ id: string, it: string, pages: string, verdict: string, suggestion: string, aliases: string }} Row */

/**
 * Every character against its Italian pages, in archive order.
 * @returns {Promise<Row[]>} One row per character.
 */
async function verify() {
  const { entities } = await importArchive('data/entities.ts')
  /** @type {Record_[]} */
  const characters = entities.filter(({ kind }) => kind === 'character')
  const english = characters
    .filter(({ id }) => ITALIAN_TITLES[id] === undefined)
    .flatMap((record) => titlesOf(record)[0] ?? [])
  const asked = new Set(english)
  const linked = await italianTitles(asked.values().toArray())
  const titles = new Map(
    characters.map((record) => {
      const known = ITALIAN_TITLES[record.id]

      return [
        record.id,
        known === undefined ?
          (titlesOf(record)[0] ?? []).map((title) => linked.get(title))
        : [known].flat(),
      ]
    }),
  )
  const wanted = new Set(titles.values().toArray().flat())
  const read = await italianPages(
    wanted
      .values()
      .filter((title) => title !== undefined)
      .toArray(),
  )

  return characters.map((record) => {
    const pages = (titles.get(record.id) ?? []).map((title) =>
      title === undefined ? undefined : read.get(title),
    )
    const found = pages.filter((page) => page !== undefined)

    return {
      id: record.id,
      it: record.name.it,
      pages: found.map(({ title }) => title).join(' + '),
      verdict: verdictOf(record, pages),
      suggestion: suggestionOf(found.map((names) => namesOf(names))),
      aliases: found.flatMap((page) => namesOf(page).aliases).join(', '),
    }
  })
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  const rows = await verify()
  const wrong = rows.filter(
    ({ verdict }) => verdict === 'wrong' || verdict === 'unresolved',
  )
  const lines = wrong.map(
    (row) =>
      `| ${[row.id, row.verdict, row.it, row.pages, row.suggestion, row.aliases].map((cell) => (cell === '' ? '—' : cell)).join(' | ')} |`,
  )

  const table =
    wrong.length === 0 ?
      'none wrong'
    : [
        '| record | verdict | it | page | suggestion | aliases |',
        '| --- | --- | --- | --- | --- | --- |',
        ...lines,
      ].join('\n')

  process.stdout.write(
    `## Italian names (${String(rows.length)} characters)\n\n${table}\n`,
  )
  process.exitCode = wrong.length === 0 ? 0 : 1
}
