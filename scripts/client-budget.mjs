/** Compare raw client JavaScript bytes with a separately built PR base. */
import console from 'node:console'
import process from 'node:process'

import { clientChunks } from './archive-gate.mjs'

const GROWTH_BUDGET = 2048

/**
 * A PR explicitly accepts larger growth with a reason on its own line.
 * @param {number} base The base build's total bytes.
 * @param {number} head The head build's total bytes.
 * @param {string} body The PR body, passed as data.
 * @returns {{accepted: boolean, difference: number, ok: boolean}} The size verdict.
 */
export function judgeClientBudget(base, head, body) {
  const difference = head - base
  const accepted = /^client-budget:[\t ]*\S[^\r\n]*$/mu.test(body)
  return { accepted, difference, ok: difference <= GROWTH_BUDGET || accepted }
}

/**
 * Measure the same assets the archive leak gate reads, refusing an empty build.
 * @param {string} directory A built client directory.
 * @returns {number} Total raw JavaScript bytes.
 */
function clientBytes(directory) {
  const chunks = clientChunks(directory)
  if (chunks.length === 0) {
    throw new Error(`no client scripts in ${directory}`)
  }
  return chunks.reduce((total, { bytes }) => total + bytes, 0)
}

/**
 * Print the measured totals and decision.
 * @param {number} base The base bytes.
 * @param {number} head The head bytes.
 * @param {string} body The PR body.
 * @returns {number} The comparison exit code.
 */
function reportClientBudget(base, head, body) {
  const verdict = judgeClientBudget(base, head, body)
  console.log(
    `client-budget: base ${String(base)} bytes, head ${String(head)} bytes, difference ${String(verdict.difference)} bytes (budget ${String(GROWTH_BUDGET)} bytes).`,
  )
  if (!verdict.ok) {
    console.error(
      'client-budget: growth exceeds the budget. Add a standalone "client-budget: <reason>" line to the PR body to accept it.',
    )
    return 1
  }
  if (verdict.difference > GROWTH_BUDGET) {
    console.log(
      'client-budget: larger growth explicitly accepted in the PR body.',
    )
  }
  return 0
}

/**
 * Report the comparison. Missing build evidence fails rather than skipping.
 * @param {string} baseDirectory The base's built client directory.
 * @param {string} headDirectory The head's built client directory.
 * @param {string} body The PR body.
 * @returns {number} Exit code: 0 passed, 1 over budget, 2 missing build.
 */
export function checkClientBudget(baseDirectory, headDirectory, body) {
  try {
    return reportClientBudget(
      clientBytes(baseDirectory),
      clientBytes(headDirectory),
      body,
    )
  } catch (error) {
    console.error(`client-budget: cannot compare builds: ${String(error)}`)
    return 2
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const [baseDirectory, headDirectory] = process.argv.slice(2)
  if (!baseDirectory || !headDirectory) {
    console.error(
      'Usage: node scripts/client-budget.mjs BASE_CLIENT_DIR HEAD_CLIENT_DIR',
    )
    process.exit(2)
  }
  process.exit(
    checkClientBudget(
      baseDirectory,
      headDirectory,
      process.env['PR_BODY'] ?? '',
    ),
  )
}
