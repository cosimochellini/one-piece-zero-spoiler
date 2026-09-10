#!/usr/bin/env node
/**
 * Blocking fallow gate.
 *
 * fallow's exit codes already block on error-severity findings, but the same
 * non-zero space also covers invalid config, licensing and runtime-coverage
 * failures. This wrapper forwards the exit code unchanged and labels which
 * class it was, so a red step says whether to fix the code, the config, or
 * the analyzer.
 *
 * Exit codes are fallow's own, forwarded as-is:
 *   0   clean
 *   1   error-severity findings (severity policy lives in .fallowrc.json)
 *   2   invalid config or input, not a code finding
 *   3+  analyzer failure, see `fallow schema.exit_codes`
 *
 * `--fail-on-issues` is deliberately not passed: it promotes every warn rule
 * to error for that run and would override the config's severity policy.
 */
import { spawnSync } from 'node:child_process'
import { existsSync, mkdirSync, rmSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')

// bin/fallow is a Node shim that require.resolve()s the platform package from
// optionalDependencies, so never install with --omit=optional.
const local = join(repoRoot, 'node_modules', '.bin', 'fallow')
const command = existsSync(local) ? local : 'fallow'

const sarifPath = join(repoRoot, '.gate', 'fallow.sarif')
mkdirSync(dirname(sarifPath), { recursive: true })
// A stale report must never survive a failed run.
rmSync(sarifPath, { force: true })

const child = spawnSync(
  command,
  [
    '--quiet',
    // --format human is the default, passed explicitly for two reasons: a
    // stray FALLOW_FORMAT in the environment cannot change what this gate
    // prints, and `--format json` exits 0 even when the health pass reports
    // critical findings, so it cannot be used to gate.
    '--format',
    'human',
    // Written in addition to the primary format, so a red CI step leaves a
    // machine-readable report behind in the uploaded artifact.
    '--sarif-file',
    sarifPath,
  ],
  { cwd: repoRoot, stdio: 'inherit' },
)

if (child.error) {
  process.stderr.write(
    `\nfallow gate: could not run fallow: ${child.error.message}\n`,
  )
  process.stderr.write(
    '  Is it installed? Run `npm ci` without --omit=optional.\n',
  )
  process.exit(2)
}
if (child.signal) {
  process.stderr.write(
    `\nfallow gate: fallow was terminated by signal ${child.signal}\n`,
  )
  process.exit(3)
}

const status = child.status ?? 3

const label = {
  0: 'fallow gate: PASSED',
  1:
    'fallow gate: FAILED with error-severity findings, listed above. ' +
    'Severity policy lives in .fallowrc.json.',
  2:
    'fallow gate: exit 2, invalid config or input. This is NOT a code ' +
    'finding: check .fallowrc.json.',
}[status]

const message =
  label ??
  `fallow gate: exit ${status}, analyzer failure. This is NOT a code ` +
    'finding: see `fallow schema.exit_codes`.'

if (status === 0) {
  process.stdout.write(`\n${message}\n`)
} else {
  process.stderr.write(`\n${message}\n`)
}

process.exit(status)
