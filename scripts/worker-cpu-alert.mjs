// Reads one UTC day of the Worker's invocations from Cloudflare's analytics
// and, when Cloudflare killed any of them over a resource limit (the 10 ms CPU
// of Workers Free, error 1102 for the reader), opens an issue or comments on
// the one already open. The Worker CPU workflow runs it every morning for the
// day before (#775): `node scripts/worker-cpu-alert.mjs YYYY-MM-DD`, with
// CLOUDFLARE_API_TOKEN (Account Analytics: Read) and CLOUDFLARE_ACCOUNT_ID set.
import { execFileSync } from 'node:child_process'
import process from 'node:process'
import { pathToFileURL } from 'node:url'

/**
 * @typedef {object} Row One group of invocations, as the analytics return it.
 * @property {{ status?: string }} [dimensions] The status, on a per-status row.
 * @property {{ requests: number }} sum How many invocations.
 * @property {{ cpuTimeP50: number, cpuTimeP90: number, cpuTimeP99: number }} quantiles
 *   CPU time per invocation, in microseconds.
 */

const TITLE = 'Workers Free killed requests over the CPU limit'

const SCRIPT = 'zero-spoiler'

const QUERY = `query($account: String!, $day: Date!) {
  viewer { accounts(filter: { accountTag: $account }) {
    byStatus: workersInvocationsAdaptive(limit: 20, filter: { scriptName: "${SCRIPT}", date: $day }) {
      dimensions { status } sum { requests } quantiles { cpuTimeP50 cpuTimeP90 cpuTimeP99 }
    }
    day: workersInvocationsAdaptive(limit: 1, filter: { scriptName: "${SCRIPT}", date: $day }) {
      sum { requests } quantiles { cpuTimeP50 cpuTimeP90 cpuTimeP99 }
    }
  } }
}`

/**
 * The invocations Cloudflare killed over a limit.
 * @param {Row[]} rows The day's rows, one per status.
 * @returns {number} How many there were.
 */
export function killsOf(rows) {
  return rows
    .filter((row) => row.dimensions?.status?.startsWith('exceeded'))
    .reduce((kills, row) => kills + row.sum.requests, 0)
}

/**
 * Microseconds as rounded milliseconds.
 * @param {number} us The time in microseconds.
 * @returns {string} Such as "73 ms".
 */
const ms = (us) => `${String(Math.round(us / 1000))} ms`

/**
 * What happened that day, or nothing when no invocation was killed.
 * @param {string} day The UTC day, YYYY-MM-DD.
 * @param {Row[]} rows The day's rows, one per status.
 * @param {Row} total The whole day in one row.
 * @returns {string | undefined} Markdown lines for the issue.
 */
export function reportOf(day, rows, total) {
  const kills = killsOf(rows)
  if (kills === 0) {
    return
  }
  const { cpuTimeP50, cpuTimeP90, cpuTimeP99 } = total.quantiles
  const statuses = rows
    .map(
      (row) => `${row.dimensions?.status ?? '?'} ${String(row.sum.requests)}`,
    )
    .join(', ')
  return [
    `**${day}** (UTC): ${String(kills)} of ${String(total.sum.requests)} requests killed.`,
    `CPU per request: p50 ${ms(cpuTimeP50)}, p90 ${ms(cpuTimeP90)}, p99 ${ms(cpuTimeP99)}.`,
    `Statuses: ${statuses}.`,
  ].join('\n')
}

/**
 * The body of a new alert issue.
 * @param {string} report What `reportOf` wrote for the day.
 * @returns {string} Markdown.
 */
export function bodyOf(report) {
  return `## What
Cloudflare killed requests to the \`${SCRIPT}\` Worker over a resource limit. A reader whose request is killed gets error 1102 instead of the page. On Workers Free a request may use 10 ms of CPU; list pages and record pages use more (#775).

${report}

The owner chose on 2026-10-28 to stay on Workers Free until this happens (#775). The fix is Workers Paid ($5/month):

- Upgrade the account in the Cloudflare dashboard (owner).
- Cap a request at 1000 ms in \`wrangler.jsonc\`: \`"limits": { "cpu_ms": 1000 }\` (owner, 2026-10-28).
- Workers Logs then keeps logs for 7 days instead of 3: rewrite \`privacy.logs\` and \`privacy.updated\` in \`src/i18n/dictionaries/privacy.ts\`, the Workers Logs entry in \`docs/privacy-audit.md\` and the comment in \`wrangler.jsonc\`.

## Why
Every killed request is a page a reader did not get. Cloudflare enforces the limit when requests come in a burst: 19 were killed in one minute on 2026-10-24.

## How to verify
- The Worker CPU workflow (\`.github/workflows/worker-cpu.yml\`) finds no killed request on the days after the upgrade; run it for one day with \`gh workflow run worker-cpu.yml -f day=YYYY-MM-DD\`.
- \`npm run check\` passes.
`
}

/**
 * Reads one environment variable, or throws naming the secret.
 * @param {string} name The variable.
 * @returns {string} Its value.
 */
function secret(name) {
  const value = process.env[name]
  if (!value) {
    throw new Error(`${name} is not set (a repository secret)`)
  }
  return value
}

/**
 * The account's data out of an analytics answer, or a throw with its errors.
 * @param {{ data?: { viewer: { accounts: { byStatus: Row[], day: Row[] }[] } }, errors?: { message: string }[] }} json
 *   The answer.
 * @returns {{ byStatus: Row[], day: Row[] }} The account's data.
 */
export function accountOf(json) {
  const account = json.data?.viewer.accounts[0]
  if (!account || json.errors?.length) {
    const errors = json.errors?.map((error) => error.message).join('; ')
    throw new Error(`Cloudflare analytics: ${errors ?? 'no such account'}`)
  }
  return account
}

/**
 * The day's rows from Cloudflare's analytics, which refuse a day that is not
 * a real YYYY-MM-DD.
 * @param {string} day The UTC day, YYYY-MM-DD.
 * @returns {Promise<{ rows: Row[], total: Row }>} One row per status, and the whole day.
 */
async function invocationsOf(day) {
  const response = await fetch('https://api.cloudflare.com/client/v4/graphql', {
    method: 'POST',
    headers: {
      'authorization': `Bearer ${secret('CLOUDFLARE_API_TOKEN')}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: QUERY,
      variables: { account: secret('CLOUDFLARE_ACCOUNT_ID'), day },
    }),
  })
  if (!response.ok) {
    throw new Error(`Cloudflare analytics: HTTP ${String(response.status)}`)
  }
  const account = accountOf(await response.json())
  const empty = {
    sum: { requests: 0 },
    quantiles: { cpuTimeP50: 0, cpuTimeP90: 0, cpuTimeP99: 0 },
  }
  return { rows: account.byStatus, total: account.day[0] ?? empty }
}

/**
 * Runs gh and returns its output.
 * @param {string[]} args The gh arguments.
 * @returns {string} Its stdout.
 */
function gh(args) {
  return execFileSync('gh', args, { encoding: 'utf8' })
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  const day = process.argv[2]
  if (!day) {
    throw new Error('Usage: node scripts/worker-cpu-alert.mjs YYYY-MM-DD')
  }
  const { rows, total } = await invocationsOf(day)
  const report = reportOf(day, rows, total)
  if (report === undefined) {
    console.log(
      `${day}: no request killed (${String(total.sum.requests)} requests)`,
    )
  } else {
    console.log(report)
    /** @type {{ number: number, title: string }[]} */
    const open = JSON.parse(
      gh([
        'issue',
        'list',
        '--state',
        'open',
        '--search',
        `in:title "${TITLE}"`,
        '--json',
        'number,title',
      ]),
    )
    const issue = open.find((candidate) => candidate.title === TITLE)
    if (issue) {
      gh(['issue', 'comment', String(issue.number), '--body', report])
    } else {
      gh([
        'issue',
        'create',
        '--title',
        TITLE,
        '--body',
        bodyOf(report),
        '--label',
        'type:bug,area:server,status:needs-decision,priority:p1,size:s',
      ])
    }
  }
}
