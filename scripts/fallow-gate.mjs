/**
 * Blocking fallow gate.
 *
 * fallow's exit codes already block on error-severity findings, but the same
 * non-zero space also covers invalid config, licensing and runtime-coverage
 * failures. This wrapper forwards the exit code unchanged and labels which
 * class it was, so a red step says whether to fix the code, the config, or
 * the analyzer.
 *
 * Two runs, in order:
 *   1. the full analysis (dead code, duplication, health), over the coverage
 *      `npm test` writes, so the CRAP score is measured rather than estimated;
 *   2. `fallow security --gate new`, which fails only on a security candidate
 *      that the branch introduces against SECURITY_BASE. The backlog it
 *      already lists is reviewed by hand, not gated.
 *
 * Exit codes are fallow's own, forwarded as-is:
 *   0   clean
 *   1   error-severity findings (severity policy lives in .fallowrc.jsonc)
 *   2   invalid config or input, not a code finding (also: no coverage file)
 *   3+  analyzer failure, see `fallow schema.exit_codes`
 *   8   the branch introduces a new security candidate
 *
 * `--fail-on-issues` is deliberately not passed: it promotes every warn rule
 * to error for that run and would override the config's severity policy.
 */
import { spawnSync } from 'node:child_process'
import { existsSync, mkdirSync, rmSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const repositoryRoot = path.resolve(import.meta.dirname, '..')

// The ref a pull request merges into. CI checks out the full history, so it
// is there; on `main` itself the diff is empty and the security run passes.
const SECURITY_BASE = 'origin/main'

// bin/fallow is a Node shim that require.resolve()s the platform package from
// optionalDependencies, so never install with --omit=optional.
const local = path.join(repositoryRoot, 'node_modules', '.bin', 'fallow')
const command = existsSync(local) ? local : 'fallow'

// The path .fallowrc.jsonc names as `health.coverage`. Without it fallow
// quietly estimates every CRAP score, so its absence is a gate failure.
// fallow-ignore-next-line security-sink -- every segment is a literal under the repository root
const coveragePath = path.join(
  repositoryRoot,
  'coverage',
  'coverage-final.json',
)

const sarifPath = path.join(repositoryRoot, '.gate', 'fallow.sarif')
mkdirSync(path.dirname(sarifPath), { recursive: true })
// A stale report must never survive a failed run.
rmSync(sarifPath, { force: true })

if (!existsSync(coveragePath)) {
  process.stderr.write(
    `\nfallow gate: exit 2, ${path.relative(repositoryRoot, coveragePath)} is missing. `
      + 'This is NOT a code finding: run `npm test` first, it writes the coverage the CRAP score reads.\n',
  )
  process.exit(2)
}

/**
 * Runs fallow with the given arguments and returns its exit status.
 * @param {string[]} args The arguments after the binary.
 * @returns {number} fallow's exit status.
 */
function fallow(args) {
  // fallow-ignore-next-line security-sink -- the command is the installed fallow binary and every argument is a literal in this file
  const child = spawnSync(command, args, {
    cwd: repositoryRoot,
    stdio: 'inherit',
  })

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

  return child.status ?? 3
}

// --format human is the default, passed explicitly for two reasons: a stray
// FALLOW_FORMAT in the environment cannot change what this gate prints, and
// `--format json` exits 0 even when the health pass reports critical
// findings, so it cannot be used to gate.
const analysis = fallow([
  '--quiet',
  '--format',
  'human',
  // Written in addition to the primary format, so a red CI step leaves a
  // machine-readable report behind in the uploaded artifact.
  '--sarif-file',
  sarifPath,
])

const status =
  analysis === 0 ?
    fallow([
      'security',
      '--quiet',
      '--format',
      'human',
      '--gate',
      'new',
      '--changed-since',
      SECURITY_BASE,
    ])
  : analysis

const label = {
  0: 'fallow gate: PASSED',
  1:
    'fallow gate: FAILED with error-severity findings, listed above. '
    + 'Severity policy lives in .fallowrc.jsonc.',
  2:
    'fallow gate: exit 2, invalid config or input. This is NOT a code '
    + `finding: check .fallowrc.jsonc, and that ${SECURITY_BASE} exists.`,
  8:
    'fallow gate: FAILED, the branch introduces a security candidate, listed '
    + `above against ${SECURITY_BASE}. Remove the sink or prove it safe.`,
}[status]

const message =
  label
  ?? `fallow gate: exit ${status}, analyzer failure. This is NOT a code `
    + 'finding: see `fallow schema.exit_codes`.'

if (status === 0) {
  process.stdout.write(`\n${message}\n`)
} else {
  process.stderr.write(`\n${message}\n`)
}

process.exit(status)
