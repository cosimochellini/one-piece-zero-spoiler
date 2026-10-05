// Checks every record's `revealedAtChapter` against the One Piece Wiki
// (onepiece.fandom.com), the way the episode thresholds were checked by hand:
// the infobox of a character, place or ship page carries `| first = [[Chapter
// N]]; [[Episode M]]`, an arc page renders `Manga Chapters: N-M`, and a fruit
// is named in the summary of the chapter that names it.
//
// The wiki's chapter is a floor, not the threshold itself: it is the first
// appearance, and a record is filed where it is named and seen, which can be
// later. So a chapter filed below the wiki's is wrong and the script fails on
// it; one filed above is kept and only listed, and whether it is the chapter
// that names the record is a reader's check, not this script's. For a fruit
// the floor rises to the first chapter whose wiki summary says who ate it or
// what it is (`namingChapterOf`, or `NAMED_AT` where that was checked by
// hand), because a fruit is filed where it is named, not where it is first
// used. A fruit's chapter is derived from the dossier
// entry that names it (`src/data/records/fruits.ts`), so a too-low fruit is
// fixed by pinning `chapter:` on that entry, not here.
//
// Episodes are read from the same line and only listed, never failed: they
// were checked by hand before (#24) and the open rows are issue #175.
//
// Run it with `npm run verify:chapters`. It talks to the network, so it is not
// part of `npm run check` or CI; the pages it reads are cached under
// `.gate/wiki/` (`./wiki.mjs`) and never expire, so delete that folder to
// read the wiki afresh, for instance after new chapters come out.
import process from 'node:process'
import { pathToFileURL } from 'node:url'

import { importArchive } from './archive-loader.mjs'
import { chapterTexts, fetchPage } from './wiki.mjs'

/** @typedef {import('./wiki.mjs').Page} Page */

/**
 * Records whose English name is not their wiki page. A list names the pages
 * of a paired record (two fish-men filed as one), whose chapter is the later
 * of the two.
 * @type {Record<string, string | string[]>}
 */
const TITLES = {
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
  'water-seven-arc': 'Water 7 Arc',
}

/**
 * The wiki pages a record is read from, in the order to try them. The English
 * edition's name is the page for most records; an arc page ends in `Arc`; a
 * fruit page is the Japanese name, which the Italian edition keeps.
 * @param {{ id: string, kind: string, name: { en: string, it: string } }} record The record.
 * @returns {string[][]} Alternatives, each a list of pages whose later chapter counts.
 */
export function titlesOf(record) {
  const known = TITLES[record.id]
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

  return first === undefined ?
      numberAfter(/Debut:Chapter(?<n>\d+)/u, tagless(page.text))
    : storyChapterOf(first)
}

/**
 * The earliest chapter an infobox line names. A line can name several:
 * Shiki's `[[Chapter 0]]; [[Chapter 530]] (mentioned)`, Camie's
 * `[[Chapter 195]] ([[…|cover]])`. A cover story is a manga page a reader
 * has turned too, so it counts towards the floor; chapter 0 (the Strong
 * World tie-in) counts only when the line names nothing else. What the floor
 * cannot say is whether the record was named there.
 * @param {string} first The infobox line.
 * @returns {number | undefined} The chapter.
 */
function storyChapterOf(first) {
  const chapters = first
    .matchAll(/\[\[Chapter (?<n>\d+)\]\]/gu)
    .map((match) => Number(match.groups?.['n']))
    .toArray()
  const numbered = chapters.filter((chapter) => chapter > 0)

  return numbered.length === 0 ? chapters.at(0) : Math.min(...numbered)
}

/**
 * Fruits whose naming chapter was checked by hand because the chapter
 * summaries do not say it: a fruit named in a scene the summary paraphrases
 * (Gum-Gum, chapter 1, "named" Qref; Zou Zou, chapter 400, Funkfreed's
 * infobox; Wapu Wapu, chapter 1063, Augur's introduction; Momonosuke's
 * artificial fruit, chapter 684, its debut), or a fruit whose full name the
 * story never says, held at the chapter that shows the power and who has it
 * (Jack's Zou Zou class, chapter 810; Tama's Kibi Kibi, chapter 911, its
 * debut; the rule is in `src/data/entities.ts`).
 * @type {Record<string, number>}
 */
const NAMED_AT = {
  'artificial-dragon-dragon-fruit': 684,
  'elephant-elephant-fruit': 400,
  'elephant-elephant-fruit-ancient-model-mammoth': 810,
  'gum-gum-fruit': 1,
  'millet-millet-fruit': 911,
  'warp-warp-fruit': 1063,
}

/** A naming verb: the chapter summary says who ate the fruit or what it is. */
const NAMING =
  /\b(?:ate|eaten|fed|reveal|explain|named?|identif|called|known as)/iu

/**
 * The first chapter whose wiki summary names a fruit in the same sentence as
 * a naming verb: "Enel's Devil Fruit is revealed to be the [[Goro Goro no
 * Mi]]" is chapter 266, while chapter 264 only says "a Logia type Devil
 * Fruit". The fruit pages do not label that moment the same way twice, so
 * the chapter pages are read instead. A summary can paraphrase a name the
 * story has not said yet, so a hit is a flag for a hand check, not a verdict.
 * @param {ReadonlyMap<number, string>} chapters Every chapter's wikitext.
 * @param {string} title The fruit's page title.
 * @returns {number | undefined} The chapter, or nothing.
 */
export function namingChapterOf(chapters, title) {
  // Only a bare link: `[[Gomu Gomu no Mi|inflated himself]]` is the summary
  // using the name, not the story saying it, and a model's link shares the
  // base fruit's prefix.
  const link = `[[${title}]]`
  const hit = chapters.entries().find(([, text]) => {
    return text
      .split(/\n|(?<=\.) /u)
      .some((sentence) => sentence.includes(link) && NAMING.test(sentence))
  })

  return hit?.[0]
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

/** @typedef {{ page?: string, wiki?: number, wikiEpisode?: number }} Source */

/**
 * The chapter the wiki gives one record, trying each alternative in turn.
 * @param {{ id: string, kind: string, name: { en: string, it: string } }} record The record.
 * @param {ReadonlyMap<number, string>} chapters Every chapter's wikitext.
 * @returns {Promise<Source>} The page(s) read and the chapter, or neither.
 */
async function sourceOf(record, chapters) {
  for (const titles of titlesOf(record)) {
    const pages = await Promise.all(titles.map((title) => fetchPage(title)))
    if (pages.every((page) => page !== undefined)) {
      return readingOf(record, pages, chapters)
    }
  }

  return {}
}

/**
 * What the pages found for a record say, with a fruit's floor raised to the
 * first chapter whose summary names it, or the hand-checked one.
 * @param {{ id: string, kind: string }} record The record.
 * @param {Page[]} pages The pages read.
 * @param {ReadonlyMap<number, string>} chapters Every chapter's wikitext.
 * @returns {Source} The page(s) and the chapter, or neither.
 */
function readingOf(record, pages, chapters) {
  const { kind } = record
  const floors = pages.map((page) => chapterOf(page, kind))
  const episodes = pages.map((page) => episodeOf(page, kind))
  const page = pages.map((page) => page.title).join(' + ')
  if (floors.includes(undefined)) {
    return { page }
  }

  const named =
    kind === 'fruit' ?
      (NAMED_AT[record.id] ?? namingChapterOf(chapters, pages[0].title))
    : undefined

  return {
    page: named === undefined ? page : `${page} (named ch ${String(named)})`,
    wiki: Math.max(...floors, named ?? 0),
    ...(!episodes.includes(undefined) && {
      wikiEpisode: Math.max(...episodes),
    }),
  }
}

/**
 * Which way a record disagrees with its source, if it does.
 * @param {number} filed The record's chapter.
 * @param {Source} source What the wiki says.
 * @returns {'equal' | 'kept' | 'too low' | 'unresolved'} The verdict.
 */
export function verdictOf(filed, source) {
  if (source.wiki === undefined) {
    return 'unresolved'
  }

  if (filed < source.wiki) {
    return 'too low'
  }

  return filed === source.wiki ? 'equal' : 'kept'
}

/** @typedef {{ id: string, kind: string, filed: number, episode: number, page?: string, wiki?: number, wikiEpisode?: number, verdict: string }} Row */

/**
 * Every record against its page, in archive order.
 * @returns {Promise<Row[]>} One row per record.
 */
async function verify() {
  const { entities } = await importArchive('data/entities.ts')
  const { CHAPTER_CEILING } = await importArchive('lib/progress/bounds.ts')
  const chapters = await chapterTexts(CHAPTER_CEILING)
  /** @type {Row[]} */
  const rows = []
  for (const record of entities) {
    const source = await sourceOf(record, chapters)

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
 * A markdown table of the rows one filter keeps, under a heading.
 * @param {string} title The heading.
 * @param {Row[]} rows The rows to list.
 * @param {(row: Row) => (number | string | undefined)[]} cells The three columns after kind and record.
 * @returns {string} The heading and the table, or a one-line "none".
 */
function table(title, rows, cells) {
  const heading = `### ${title} (${String(rows.length)})`
  if (rows.length === 0) {
    return `${heading}\n\nnone`
  }

  const lines = rows.map(
    (row) =>
      `| ${[row.kind, row.id, ...cells(row)].map((cell = '—') => String(cell)).join(' | ')} |`,
  )

  return `${heading}\n\n| kind | record | filed | wiki | page |\n| --- | --- | ---: | ---: | --- |\n${lines.join('\n')}`
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  const rows = await verify()
  const wrong = rows.filter(
    (row) => row.verdict === 'too low' || row.verdict === 'unresolved',
  )
  const tables = ['too low', 'unresolved', 'equal', 'kept'].map((verdict) => {
    return table(
      verdict,
      rows.filter((row) => row.verdict === verdict),
      (row) => [row.filed, row.wiki, row.page],
    )
  })
  const episodes = table(
    'episode below wiki, for information',
    rows.filter(
      (row) => row.wikiEpisode !== undefined && row.episode < row.wikiEpisode,
    ),
    (row) => [row.episode, row.wikiEpisode, row.page],
  )

  console.log([...tables, episodes].join('\n\n'))
  process.exitCode = wrong.length === 0 ? 0 : 1
}
