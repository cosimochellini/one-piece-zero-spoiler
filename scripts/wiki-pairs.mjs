// Pure parsing for the wiki:pairs CLI; HTML parsing keeps nested markup and entities intact.
import { JSDOM } from 'jsdom'

// Bounds eager range expansion and accidental network work, well above the manga's size.
const MAX_PAIR_CHAPTERS = 10_000

/**
 * Requested chapters, with ranges expanded and duplicates removed in input order.
 * @param {string[]} args Chapter numbers or inclusive ranges.
 * @returns {number[]} The unique chapter numbers.
 */
export function pairChapters(args) {
  if (args.length === 0) {
    throw new Error('provide at least one chapter')
  }

  const ranges = args.map((argument) => {
    const ends = argument.split('-')
    if (ends.length > 2 || ends.some((end) => !/^\d+$/u.test(end))) {
      throw new Error(`invalid chapter or range: ${argument}`)
    }

    const [first, last = first] = ends.map(Number)
    if (!validSpan(first, last)) {
      throw new Error(`invalid chapter or range: ${argument}`)
    }

    return { first, last }
  })
  const chapters = new Set()
  for (const { first, last } of ranges) {
    for (let chapter = first; chapter <= last; chapter += 1) {
      chapters.add(chapter)
      if (chapters.size > MAX_PAIR_CHAPTERS) {
        throw new Error(
          `request at most ${String(MAX_PAIR_CHAPTERS)} unique chapters`,
        )
      }
    }
  }

  return [...chapters]
}

/**
 * Whether a positive integer span can be represented without rounding.
 * @param {number} first The first number.
 * @param {number} last The last number.
 * @returns {boolean} Whether both ends are valid and ordered.
 */
function validSpan(first, last) {
  return (
    Number.isSafeInteger(first)
    && first > 0
    && Number.isSafeInteger(last)
    && last >= first
  )
}

/**
 * One page span, preserving disjoint ranges rather than inventing their gaps.
 * @param {string} span A page number or range.
 * @returns {string} The normalized span.
 */
function pageSpan(span) {
  const ends = span
    .trim()
    .split('-')
    .map((end) => end.trim())
  const [first, last = first] = ends.map(Number)
  if (
    ends.length > 2
    || ends.some((end) => !/^\d+$/u.test(end))
    || !validSpan(first, last)
  ) {
    throw new Error('invalid page range in anime infobox')
  }

  return ends.length === 1 ? String(first) : `${String(first)}-${String(last)}`
}

/**
 * The anime field's entries, with references removed and explicit line breaks kept.
 * @param {string} html The rendered chapter introduction.
 * @returns {string[]} The entries as HTML fragments, empty when absent.
 */
function animeEntries(html) {
  const box = JSDOM.fragment(html).querySelector(
    'aside.portable-infobox.pi-theme-Chapter',
  )
  if (box === null) {
    throw new Error('chapter infobox not found')
  }

  const row = box.querySelector('[data-source="anime"]')
  if (row === null) {
    return []
  }

  const value = row.querySelector('.pi-data-value')
  if (value === null) {
    throw new Error('anime infobox value not found')
  }

  for (const reference of value.querySelectorAll('sup.reference')) {
    reference.remove()
  }
  for (const br of value.querySelectorAll('br')) {
    br.replaceWith('\0')
  }

  // eslint-disable-next-line unicorn/prefer-dom-node-html-methods -- jsdom 30 does not implement getHTML().
  return value.innerHTML.split('\0')
}

/**
 * One numbered episode; linked songs and named specials are not episode pairs.
 * @param {string} html One anime-field entry.
 * @returns {string[]} The printable pair, or none for a non-episode entry.
 */
function entryPairs(html) {
  const entry = JSDOM.fragment(html)
  const text = entry.textContent
    .replaceAll(/[–—−]/gu, '-')
    .replaceAll(/\s+/gu, ' ')
    .trim()
  if (['', 'not adapted', 'not yet adapted'].includes(text.toLowerCase())) {
    return []
  }

  const hasEpisode =
    /Episode[ _]\d+/u.test(text)
    || entry
      .querySelectorAll('a[href]')
      .values()
      .some((link) =>
        /\/Episode_\d+(?:$|[#?])/u.test(link.getAttribute('href') ?? ''),
      )
  if (!hasEpisode && entry.querySelector('a[href]') !== null) {
    return []
  }

  const match = /^Episode (?<episode>\d+) *\(p\.(?<pages>[^)]+)\)$/u.exec(text)
  if (match?.groups === undefined) {
    throw new Error(
      'could not parse every episode and page range in anime infobox',
    )
  }

  const episode = Number(match.groups['episode'])
  if (!validSpan(episode, episode)) {
    throw new Error('invalid episode in anime infobox')
  }
  const pages = match.groups['pages']
    .split(',')
    .map((span) => pageSpan(span))
    .join(', ')
  return [`ep ${String(episode)} (p. ${pages})`]
}

/**
 * Every numbered adaptation in a chapter infobox, in the wiki's order.
 * @param {string} html The rendered chapter introduction.
 * @returns {string[]} Episode/page pairs; empty when no numbered episode is listed.
 */
export function animePairs(html) {
  return animeEntries(html).flatMap((entry) => entryPairs(entry))
}
