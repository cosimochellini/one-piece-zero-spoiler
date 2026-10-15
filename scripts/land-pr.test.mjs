// @vitest-environment node
//
// Runs the real scripts/land-pr.sh against a fake `gh`, `git` and `sleep`
// first on the PATH. The fake `gh` answers with fixture JSON through the
// script's own `-q` queries, run by jq, so the queries are under test too.
import { spawnSync } from 'node:child_process'
import {
  chmodSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import process from 'node:process'
import { describe, expect, it } from 'vitest'

const script = path.resolve(import.meta.dirname, 'land-pr.sh')
const head = 'a'.repeat(40)

// Check runs come one fixture line per `gh api` call, the last one repeated.
// `gh pr merge` refuses when refused.json exists, which is the PR after that.
const fakeGh = `#!/bin/bash
d=$(dirname "$0")
echo "$*" >>"$d/calls.log"
q=
prev=
for a; do [ "$prev" = -q ] && q=$a; prev=$a; done
case "$1 $2" in
  "api repos/"*)
    n=$(($(cat "$d/n" 2>/dev/null || echo 0) + 1))
    echo "$n" >"$d/n"
    line=$(sed -n "$n p" "$d/runs.jsonl")
    [ -n "$line" ] || line=$(tail -n 1 "$d/runs.jsonl")
    echo "$line" | jq -r "$q" ;;
  "pr view") jq -r "$q" "$d/pr.json" ;;
  "pr ready") ;;
  "pr merge")
    [ -f "$d/refused.json" ] || exit 0
    cp "$d/refused.json" "$d/pr.json"
    echo "GraphQL: Merge already in progress (mergePullRequest)" >&2
    exit 1 ;;
  *) exit 1 ;;
esac
`

/**
 * A check run as the GitHub API lists it.
 * @param {number} id - The run id: a newer run has a higher one.
 * @param {string} status - queued, in_progress or completed.
 * @param {string | null} conclusion - The conclusion once completed.
 * @returns {object} The run.
 */
const run = (id, status, conclusion) => ({ id, status, conclusion })

/**
 * The PR as `gh pr view --json` sees it.
 * @param {string} state - OPEN or MERGED.
 * @returns {object} The PR fields the script reads.
 */
const pr = (state) => ({
  state,
  baseRefName: 'main',
  mergeable: 'MERGEABLE',
  headRefOid: head,
  mergeCommit: state === 'MERGED' ? { oid: 'b'.repeat(40) } : null,
  closingIssuesReferences: [],
})

/**
 * Writes the fakes and the fixtures into the bin directory.
 * @param {string} bin - The directory put first on the PATH.
 * @param {object[][]} runs - The check runs each `gh api` call returns.
 * @param {string} [refusedThen] - When set, `gh pr merge` is refused and the PR state reads this after.
 */
function prepare(bin, runs, refusedThen) {
  /**
   * Writes an executable fake into the bin directory.
   * @param {string} name - The command it stands in for.
   * @param {string} body - The script text.
   */
  const fake = (name, body) => {
    writeFileSync(path.join(bin, name), body)
    chmodSync(path.join(bin, name), 0o755)
  }
  fake('gh', fakeGh)
  // Git only fetches and compares here: no output reads as up to date with main.
  fake('git', '#!/bin/sh\nexit 0\n')
  fake('sleep', '#!/bin/sh\nexit 0\n')
  writeFileSync(
    path.join(bin, 'runs.jsonl'),
    runs.map((list) => JSON.stringify({ check_runs: list })).join('\n'),
  )
  writeFileSync(path.join(bin, 'pr.json'), JSON.stringify(pr('OPEN')))
  if (refusedThen) {
    writeFileSync(
      path.join(bin, 'refused.json'),
      JSON.stringify(pr(refusedThen)),
    )
  }
  writeFileSync(path.join(bin, 'calls.log'), '')
}

/**
 * Runs land-pr.sh once in a fresh directory of fakes, removed afterwards.
 * @param {object[][]} runs - The check runs each `gh api` call returns.
 * @param {string} [refusedThen] - When set, `gh pr merge` is refused and the PR state reads this after.
 * @returns {{ status: number | null, stdout: string, calls: string }} The exit status, output and the `gh` calls made.
 */
function land(runs, refusedThen) {
  const bin = mkdtempSync(path.join(tmpdir(), 'land-pr-'))
  try {
    prepare(bin, runs, refusedThen)
    const child = spawnSync('bash', [script, '42', head], {
      encoding: 'utf8',
      env: {
        ...process.env,
        PATH: `${bin}${path.delimiter}${process.env.PATH}`,
      },
    })
    const calls = readFileSync(path.join(bin, 'calls.log'), 'utf8')
    return { status: child.status, stdout: child.stdout, calls }
  } finally {
    rmSync(bin, { recursive: true })
  }
}

describe('land-pr.sh', () => {
  it('waits out a cancelled run and merges on the newer green one', () => {
    const cancelled = run(1, 'completed', 'cancelled')
    const { status, stdout, calls } = land([
      [cancelled],
      [cancelled, run(2, 'in_progress', null)],
      [cancelled, run(2, 'completed', 'success')],
    ])

    expect(stdout).toContain(`merged ${head}`)
    expect(calls).toContain('pr merge 42 --squash')
    expect(status).toBe(0)
  })

  it('exits 0 when GitHub had already merged the reviewed head', () => {
    const { status, stdout } = land(
      [[run(1, 'completed', 'success')]],
      'MERGED',
    )

    expect(stdout).toContain(`merged ${head}`)
    expect(status).toBe(0)
  })

  it('exits 5 when the merge is refused and the PR stays open', () => {
    const { status, stdout } = land([[run(1, 'completed', 'success')]], 'OPEN')

    expect(stdout).not.toContain('merged')
    expect(status).toBe(5)
  })

  it('still exits 3 on a failed run', () => {
    const { status, stdout, calls } = land([[run(1, 'completed', 'failure')]])

    expect(stdout).toContain(`check on ${head}: failure`)
    expect(calls).not.toContain('pr merge')
    expect(status).toBe(3)
  })
})
