#!/usr/bin/env node
/**
 * Conventional Commits gate for pull request titles.
 *
 * The PR title is the only thing that decides the next SemVer number. GitHub
 * squashes every PR into a single commit on `main` whose subject is the PR
 * title (repo setting `squash_merge_commit_title=PR_TITLE`), and
 * semantic-release reads that subject to pick patch / minor / major. A title
 * that is not Conventional Commits therefore means a merge that releases the
 * wrong version, or no version at all.
 *
 * The title arrives through the PR_TITLE environment variable, never as a
 * shell argument interpolated by Actions: `${{ github.event.pull_request.title
 * }}` inside a `run:` block is attacker-controlled shell input.
 *
 * Exit codes:
 *   0   title is valid
 *   1   title is invalid
 *   2   PR_TITLE is missing, which means the workflow is wired wrong
 */
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const EXIT_VALID = 0
const EXIT_INVALID = 1
const EXIT_MISCONFIGURED = 2

/**
 * Commit type -> release bump. Kept deliberately in sync with the
 * `releaseRules` array in .releaserc.json: a type accepted here but missing
 * there would merge cleanly and then release nothing.
 */
export const TYPE_BUMPS = {
  feat: 'minor',
  fix: 'patch',
  perf: 'patch',
  revert: 'patch',
  refactor: 'patch',
  docs: 'patch',
  style: 'patch',
  test: 'patch',
  build: 'patch',
  ci: 'patch',
  chore: 'patch',
}

/** GitHub's own subject limit before it truncates in the commit list. */
export const MAX_TITLE_LENGTH = 100

const TYPES = Object.keys(TYPE_BUMPS)

// `type(optional-scope)!: subject`. The `!` is the breaking-change marker and
// promotes any type to major.
const TITLE_PATTERN = new RegExp(
  `^(${TYPES.join('|')})(\\([a-z0-9][a-z0-9._-]*\\))?(!)?: (.+)$`,
)

/**
 * @param {unknown} title
 * @returns {{ ok: true, type: string, breaking: boolean, release: string }
 *   | { ok: false, reason: string }}
 */
export function validatePrTitle(title) {
  if (typeof title !== 'string' || title.trim() === '') {
    return { ok: false, reason: 'the title is empty' }
  }

  if (title.length > MAX_TITLE_LENGTH) {
    return {
      ok: false,
      reason: `the title is ${String(title.length)} characters, the limit is ${String(MAX_TITLE_LENGTH)}`,
    }
  }

  const match = TITLE_PATTERN.exec(title)

  if (match === null) {
    return {
      ok: false,
      reason: 'the title does not match `type(optional-scope): subject`',
    }
  }

  const [, type, , bang, subject] = match

  if (subject === undefined || subject.trim() === '') {
    return { ok: false, reason: 'the subject after the colon is empty' }
  }

  // `type` is always defined when the pattern matches; the index access is
  // narrowed away by noUncheckedIndexedAccess only in TS, not here.
  const matchedType = /** @type {keyof typeof TYPE_BUMPS} */ (type)
  const breaking = bang === '!'

  return {
    ok: true,
    type: matchedType,
    breaking,
    release: breaking ? 'major' : TYPE_BUMPS[matchedType],
  }
}

/** @returns {string} */
export function usage() {
  const rows = TYPES.map((type) => `  ${type.padEnd(9)} -> ${TYPE_BUMPS[type]}`)

  return [
    'A pull request title must be Conventional Commits:',
    '',
    '  type(optional-scope): subject',
    '  type(optional-scope)!: subject   (breaking, releases a major)',
    '',
    'Accepted types and the release each one produces:',
    ...rows,
    '',
    'Examples:',
    '  feat: add a chapter filter',
    '  fix(spoiler): keep the badge collapsed on reload',
    '  feat!: drop the legacy chapter route',
    '',
  ].join('\n')
}

function main() {
  const title = process.env.PR_TITLE

  if (title === undefined) {
    process.stderr.write(
      'pr-title gate: PR_TITLE is not set. The workflow step must pass it through `env:`.\n',
    )
    process.exit(EXIT_MISCONFIGURED)
  }

  const result = validatePrTitle(title)

  if (result.ok) {
    process.stdout.write(
      `pr-title gate: PASSED\n  title:   ${title}\n  release: ${result.release}\n`,
    )
    process.exit(EXIT_VALID)
  }

  process.stderr.write(
    `pr-title gate: FAILED\n  title:  ${title}\n  reason: ${result.reason}\n\n${usage()}`,
  )
  process.exit(EXIT_INVALID)
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main()
}
