// Moves every open `status:blocked` issue whose "Unblocks at:" conditions all
// hold to `status:ready`, with a comment saying what unblocked it. A condition
// is `ch. N` (an episode adapts chapter N), `ch. N p. P` (an episode adapts
// that page) or `#N` (that issue is closed). Run it when an orchestrator loop
// starts: `npm run issues:unblock`.
import { execFileSync } from 'node:child_process'
import process from 'node:process'
import { pathToFileURL } from 'node:url'

import { chapterPairs } from './wiki.mjs'

/** @typedef {{ chapter: number, page?: number } | { issue: number }} Condition */

/**
 * The conditions on the body's "Unblocks at:" lines.
 * @param {string} body The issue body.
 * @returns {Condition[]} The conditions, in order; empty when there is no line.
 */
export function conditionsOf(body) {
  /** @type {Condition[]} */
  const conditions = []
  const text = body.match(/^Unblocks at:.*$/gmu)?.join(' ') ?? ''
  for (const { groups } of text.matchAll(
    /(?<kind>ch\.|p\.|#) ?(?<number>\d+)/gu,
  )) {
    const { kind, number } = /** @type {Record<string, string>} */ (groups)
    const last = conditions.at(-1)
    if (kind === '#') {
      conditions.push({ issue: Number(number) })
    } else if (kind === 'ch.') {
      conditions.push({ chapter: Number(number) })
    } else if (last !== undefined && 'chapter' in last) {
      last.page = Number(number)
    }
  }

  return conditions
}

/**
 * The first pair that adapts the page, or any pair when no page is asked.
 * @param {string[]} pairs `wiki:pairs` lines, such as "ep 1180 (p. 2-3, 7-8)".
 * @param {number} [page] The page that has to be adapted.
 * @returns {string | undefined} The pair, or nothing while it has not aired.
 */
export function airedPair(pairs, page) {
  return pairs.find(
    (pair) =>
      page === undefined
      || (/\(p\. (?<spans>[^)]+)\)/u.exec(pair)?.groups?.spans ?? '')
        .split(', ')
        .some((span) => {
          const [first, last = first] = span.split('-').map(Number)
          return first <= page && page <= last
        }),
  )
}

/**
 * Runs gh and returns its output.
 * @param {string[]} args The gh arguments.
 * @returns {string} Its stdout.
 */
function gh(args) {
  return execFileSync('gh', args, { encoding: 'utf8' })
}

/**
 * What closed the issue, or nothing while it is open.
 * @param {number} issue The issue number.
 * @returns {string | undefined} A line for the comment.
 */
function issueMet(issue) {
  const state = gh([
    'issue',
    'view',
    String(issue),
    '--json',
    'state',
    '-q',
    '.state',
  ])
  return state.trim() === 'CLOSED' ? `#${String(issue)} is closed` : undefined
}

/**
 * The episode that adapts the chapter (or its page), or nothing before it airs.
 * @param {{ chapter: number, page?: number }} condition The chapter condition.
 * @returns {Promise<string | undefined>} A line for the comment.
 */
async function chapterMet({ chapter, page }) {
  /** @type {string[]} */
  let pairs = []
  try {
    pairs = await chapterPairs(chapter)
  } catch {
    // A chapter the wiki has no page for yet has not aired either.
  }
  const pair = airedPair(pairs, page)
  const at = page === undefined ? '' : ` p. ${String(page)}`
  return pair && `ch. ${String(chapter)}${at} has aired: ${pair}`
}

/**
 * What met the condition, or nothing while it still blocks.
 * @param {Condition} condition One condition.
 * @returns {Promise<string | undefined>} A line for the comment.
 */
async function met(condition) {
  return 'issue' in condition ?
      issueMet(condition.issue)
    : chapterMet(condition)
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  /** @type {{ number: number, body: string }[]} */
  const blocked = JSON.parse(
    gh([
      'issue',
      'list',
      '--label',
      'status:blocked',
      '--state',
      'open',
      '--limit',
      '500',
      '--json',
      'number,body',
    ]),
  )
  for (const { number, body } of blocked) {
    const conditions = conditionsOf(body)
    const lines = await Promise.all(
      conditions.map((condition) => met(condition)),
    )
    if (conditions.length === 0 || lines.includes(undefined)) {
      console.log(
        `#${String(number)}: still blocked${conditions.length === 0 ? ', no "Unblocks at:" line' : ''}`,
      )
      continue
    }

    console.log(`#${String(number)}: ready`)
    gh([
      'issue',
      'edit',
      String(number),
      '--remove-label',
      'status:blocked',
      '--add-label',
      'status:ready',
    ])
    gh([
      'issue',
      'comment',
      String(number),
      '--body',
      `Unblocked by \`npm run issues:unblock\`:\n\n- ${lines.join('\n- ')}`,
    ])
  }
}
