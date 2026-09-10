#!/usr/bin/env node
/**
 * Blocking react-doctor gate.
 *
 * react-doctor ships `--blocking <level>`, but its crash path and its
 * "blocked by findings" path both exit 1, so a red run is ambiguous. This
 * wrapper runs it with `--blocking none` -- which makes any non-zero child
 * exit unambiguously a tool failure -- and decides the verdict from the JSON
 * report instead.
 *
 * Exit codes:
 *   0  clean
 *   1  error-severity findings
 *   2  the tool failed: crash, timeout, unreadable report, or an analysis
 *      that skipped checks
 *
 * `--no-telemetry` is an alias for `--no-score`, so the report carries no
 * health score. Gating is by severity, never by score.
 */
import { spawnSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, rmSync } from 'node:fs'
import { dirname, join, relative, resolve } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const EXIT_CLEAN = 0
const EXIT_FINDINGS = 1
const EXIT_TOOL_FAILURE = 2

const TIMEOUT_MS = 900_000
const MAX_DURATION_SECONDS = 600
const MAX_PRINTED = 50

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const reportPath = join(repoRoot, '.gate', 'react-doctor.json')

function fail(headline) {
  process.stderr.write(
    `\nreact-doctor gate: TOOL FAILURE\n  ${headline}\n\n` +
      '  This is not a code finding: react-doctor did not produce a report\n' +
      '  that can be trusted, so the gate refuses to pass.\n',
  )
  process.exit(EXIT_TOOL_FAILURE)
}

function isObject(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

// The package `exports` map hides ./package.json, so require.resolve cannot
// find the binary. Look it up by path, then fall back to PATH.
function resolveCli() {
  const local = join(
    repoRoot,
    'node_modules',
    'react-doctor',
    'bin',
    'react-doctor.js',
  )
  if (existsSync(local)) return { command: process.execPath, args: [local] }
  return { command: 'react-doctor', args: [] }
}

function runDoctor() {
  const cli = resolveCli()
  return spawnSync(
    cli.command,
    [
      ...cli.args,
      '--json',
      '--json-out',
      reportPath,
      '--no-telemetry',
      '--no-supply-chain',
      '--blocking',
      'none',
      '--scope',
      'full',
      '--max-duration',
      String(MAX_DURATION_SECONDS),
      '--no-color',
      '--yes',
    ],
    {
      cwd: repoRoot,
      encoding: 'utf8',
      timeout: TIMEOUT_MS,
      stdio: ['ignore', 'inherit', 'inherit'],
    },
  )
}

function assertChildSucceeded(child) {
  if (child.error) fail(`could not run react-doctor: ${child.error.message}`)
  if (child.signal)
    fail(`react-doctor was terminated by signal ${child.signal}`)
  // Under --blocking none, findings cannot set a non-zero status.
  if (child.status !== 0) {
    fail(
      `react-doctor exited ${child.status} under --blocking none, so this is not a findings exit`,
    )
  }
}

function readReport() {
  if (!existsSync(reportPath))
    fail(`no report was written to ${relative(repoRoot, reportPath)}`)
  try {
    return JSON.parse(readFileSync(reportPath, 'utf8'))
  } catch (error) {
    fail(
      `${relative(repoRoot, reportPath)} could not be parsed: ${String(error)}`,
    )
  }
}

function assertReportShape(report) {
  if (!isObject(report))
    fail(`report root is ${typeof report}, expected an object`)
  if (!Array.isArray(report.projects)) fail('report has no `projects` array')
  if (report.projects.length === 0) fail('react-doctor scanned zero projects')
}

function readDiagnostics(report) {
  if (!Array.isArray(report.diagnostics))
    fail('report has no `diagnostics` array')
  return report.diagnostics.filter(isObject)
}

function assertNoToolError(report) {
  // react-doctor surfaces its own internal errors as a populated `error`.
  if (report.error)
    fail(
      `react-doctor reported an internal error: ${JSON.stringify(report.error)}`,
    )
  // Projects that were selected but never started, e.g. reason "max-duration".
  const never = report.skippedProjects ?? []
  if (never.length > 0) {
    fail(`react-doctor never started ${never.length} selected project(s)`)
  }
}

// The gate passes --max-duration, so a scan can truncate mid-run and still
// report partial results. `complete` is the broader signal: react-doctor sets
// it to false when analyzedFileCount !== scannedFileCount as well as when a
// whole check was skipped, so it also catches lint-batch truncation that
// leaves skippedChecks empty.
function assertAnalysisComplete(report) {
  const skipped = report.projects.flatMap(
    (project) => project.skippedChecks ?? [],
  )
  if (skipped.length > 0) {
    fail(
      `analysis was incomplete, skipped checks: ${[...new Set(skipped)].join(', ')}`,
    )
  }
  const partial = report.projects.filter(
    (project) => project.complete === false,
  )
  if (partial.length > 0) {
    fail(
      `${partial.length} project(s) were only partially analysed, so the findings are incomplete`,
    )
  }
}

/** Anything whose severity cannot be read is counted as an error, never as harmless. */
function isBlocking(diagnostic) {
  return diagnostic.severity !== 'warning'
}

function format(diagnostic) {
  const file = diagnostic.filePath ?? 'unknown file'
  const site = diagnostic.line ? `${file}:${diagnostic.line}` : file
  return `    [${diagnostic.severity}] ${diagnostic.rule} ${site}\n        ${diagnostic.message}`
}

function main() {
  mkdirSync(dirname(reportPath), { recursive: true })
  // A stale report must never be able to produce a pass.
  rmSync(reportPath, { force: true })

  const child = runDoctor()
  assertChildSucceeded(child)

  const report = readReport()
  assertReportShape(report)
  assertNoToolError(report)
  assertAnalysisComplete(report)

  const diagnostics = readDiagnostics(report)
  const blocking = diagnostics.filter(isBlocking)

  process.stdout.write(
    `\nreact-doctor gate: ${diagnostics.length} diagnostic(s), ` +
      `${blocking.length} blocking\n  report: ${relative(repoRoot, reportPath)}\n`,
  )

  if (blocking.length === 0) {
    process.stdout.write('\nreact-doctor gate: PASSED\n')
    process.exit(EXIT_CLEAN)
  }

  process.stdout.write('\n  blocking findings:\n')
  for (const diagnostic of blocking.slice(0, MAX_PRINTED)) {
    process.stdout.write(`${format(diagnostic)}\n`)
  }
  if (blocking.length > MAX_PRINTED) {
    process.stdout.write(
      `    ... and ${blocking.length - MAX_PRINTED} more, see the report\n`,
    )
  }
  process.stderr.write(
    `\nreact-doctor gate: FAILED with ${blocking.length} blocking finding(s)\n`,
  )
  process.exit(EXIT_FINDINGS)
}

main()
