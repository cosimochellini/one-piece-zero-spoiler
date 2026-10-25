// Checks every character's Italian name against the Italian One Piece Wiki
// (onepiece.fandom.com/it), the rule in `src/data/series/one-piece/entities.ts`: the dub's
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
// missing or wrong. Hunter x Hunter has no Italian wiki: its names come from
// Italian Wikipedia (owner, 2026-10-24), whose minor characters are sections
// of a list page, named in `ITALIAN_TITLES` as `Page#Section`. A section
// accepts its heading and the bold name that opens it.
//
// Run it with `npm run verify:names` (`-- --series <slug>` for a series of
// `src/data/series/index.ts` other than One Piece). It talks to the network,
// so it is not part of `npm run check` or CI; the answers are cached under
// `.gate/wiki/<slug>/` (`./wiki.mjs`) and never expire.
import process from 'node:process'
import { pathToFileURL } from 'node:url'

import { seriesOrExit } from './archive-loader.mjs'
import { titlesOf } from './verify-chapters.mjs'
import { italianPages, italianTitles, wikiOf } from './wiki.mjs'

/** @typedef {import('./wiki.mjs').Page & { section?: true }} Page */
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
  // Hunter x Hunter, on Italian Wikipedia.
  'killua': 'Killua Zoldick',
  'hisoka': 'Hisoka Morou',
  'tonpa': 'Personaggi di Hunter × Hunter#Tonpa',
  'nicholas': 'Personaggi di Hunter × Hunter#Nicole',
  'satotz': 'Associazione Hunter#Satoshi',
  'hanzo': 'Associazione Hunter#Hanzo',
  'menchi': 'Associazione Hunter#Menci',
  'buhara': 'Associazione Hunter#Buhara',
  'netero': 'Associazione Hunter#Isaac Netero',
  'gon-freecss': 'Gon Freecss',
  'kurapika': 'Kurapika Kurata',
  'mito-freecss': 'Personaggi di Hunter × Hunter#Myto Freecss',
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
  // Hunter x Hunter. Italian Wikipedia's character pages write him "Jin",
  // the manga's name; the 2011 dub's is "Ging", in the Italian title of its
  // episode 37, "Ging e Gon" (`Episodi di Hunter × Hunter (serie animata
  // 2011)`).
  'ging-freecss': 'Ging Freecss',
  // Italian Wikipedia's entry is the manga's "Leolio Paladiknight", with a
  // note that the Italian anime says "Leorio" (`Personaggi di Hunter ×
  // Hunter`, section `Leolio Paladiknight`).
  'leorio-paradinight': 'Leorio',
  // No Italian page names them: the English name stands.
  'katzo': 'Katzo',
  'kiriko': 'Kiriko',
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
    aliases: [
      ...['alias', 'nickname'].flatMap((field) =>
        namesIn(fieldOf(page.wikitext, field)),
      ),
      ...(page.section === true ? openingBold(page.wikitext) : []),
    ],
  }
}

/**
 * The name that opens a list entry: the first one it sets in bold,
 * `'''name'''`. A later bold run is a note on another name ("'''Leorio'''
 * nella versione italiana dell'anime") and is not taken.
 * @param {string} wikitext The entry.
 * @returns {string[]} The name, or nothing.
 */
function openingBold(wikitext) {
  const name = /'''(?<name>[^']+)'''/u.exec(wikitext)?.groups?.['name']

  return name === undefined ? [] : [name]
}

/**
 * Whether a line opens a section of a list page: a heading or a `;` term.
 * @param {string} line The line.
 * @returns {boolean} Whether it does.
 */
function opens(line) {
  return line.startsWith('=') || line.startsWith(';')
}

/**
 * One section of a list page as a page of its own: from its heading, or the
 * `;` line that sets its name in bold, to the next of either.
 * @param {Page} page The list page.
 * @param {string} section The section's name.
 * @returns {Page | undefined} The section, or nothing when the page has none.
 */
export function sectionOf(page, section) {
  const lines = page.wikitext.split('\n')
  const from = lines.findIndex(
    (line) =>
      line.replaceAll('=', '').trim() === section
      || (line.startsWith(';') && line.includes(`'''${section}'''`)),
  )
  if (from === -1) {
    return
  }
  const to = lines.findIndex((line, index) => index > from && opens(line))

  return {
    title: section,
    wikitext: lines.slice(from, to === -1 ? lines.length : to).join('\n'),
    text: '',
    section: true,
  }
}

/**
 * The page an Italian title names: a whole page, or a `Page#Section` of one.
 * @param {string} title The title.
 * @param {Map<string, Page>} read The pages read, by title without section.
 * @returns {Page | undefined} The page or section, or nothing.
 */
function italianPageOf(title, read) {
  const [base = '', section] = title.split('#', 2)
  const page = read.get(base)

  return page === undefined || section === undefined ?
      page
    : sectionOf(page, section)
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
 * Every character of the series on the command line against its Italian
 * pages, in archive order.
 * @returns {Promise<Row[]>} One row per character.
 */
async function verify() {
  const series = await seriesOrExit()
  const wiki = wikiOf(series)
  /** @type {Record_[]} */
  const characters = /** @type {Record_[]} */ (series.archive.entities).filter(
    ({ kind }) => kind === 'character',
  )
  const english = characters
    .filter(({ id }) => ITALIAN_TITLES[id] === undefined)
    .flatMap((record) => titlesOf(record, wiki.slug)[0] ?? [])
  const asked = new Set(english)
  const linked = await italianTitles(asked.values().toArray(), wiki)
  const titles = new Map(
    characters.map((record) => {
      const known = ITALIAN_TITLES[record.id]

      return [
        record.id,
        known === undefined ?
          (titlesOf(record, wiki.slug)[0] ?? []).map((title) =>
            linked.get(title),
          )
        : [known].flat(),
      ]
    }),
  )
  const wanted = new Set(
    titles
      .values()
      .toArray()
      .flat()
      .flatMap((title) => (title === undefined ? [] : title.split('#', 1))),
  )
  const read = await italianPages(wanted.values().toArray(), wiki)

  return characters.map((record) => {
    const pages = (titles.get(record.id) ?? []).map((title) =>
      title === undefined ? undefined : italianPageOf(title, read),
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
