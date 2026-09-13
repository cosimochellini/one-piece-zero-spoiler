/**
 * Conventional Commits gate for pull request titles.
 *
 * The PR title is the only thing that decides the next SemVer number. GitHub
 * squashes every PR into a single commit on `main` whose subject is the PR
 * title, because the repository is configured to take the squashed commit
 * subject from the pull request title, and semantic-release reads that subject
 * to pick patch / minor / major. A title that is not Conventional Commits
 * therefore means a merge that releases the wrong version, or no version at
 * all.
 *
 * In CI the title arrives through the PR_TITLE environment variable, never as
 * a shell argument interpolated by Actions: `${{
 * github.event.pull_request.title }}` inside a `run:` block is
 * attacker-controlled shell input. A positional argument is read first, so a
 * title can be checked by hand before the pull request is opened; the workflow
 * never passes one, so that path is not reachable from CI.
 *
 * Exit codes:
 *   0   title is valid
 *   1   title is invalid
 *   2   no title was given at all, which means the workflow is wired wrong
 */
import process from 'node:process'

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
//
// The type is matched as a bare lowercase word and checked against TYPE_BUMPS
// afterwards rather than spliced into the source of a RegExp, so each pattern
// is one fixed literal a reader can check by eye. The scope gets a pattern of
// its own instead of an optional group around it: a repetition nested inside
// `(?:...)?` is what a star-height check reads as an exponential pattern, and
// two flat literals say the same thing with nothing nested. In both of them
// every repetition is followed by a character it cannot itself match, so no
// input backtracks more than linearly.
const SCOPED_TITLE_PATTERN =
  /^(?<type>[a-z]+)\([a-z0-9][a-z0-9._-]*\)(?<breaking>!)?: (?<subject>.+)$/u
const PLAIN_TITLE_PATTERN = /^(?<type>[a-z]+)(?<breaking>!)?: (?<subject>.+)$/u

// The two rejections that have nothing to do with Conventional Commits: a pull
// request with no title at all, and one long enough that GitHub truncates it in
// the commit list.
function sizeProblem(title) {
  if (typeof title !== 'string' || title.trim() === '') {
    return 'the title is empty'
  }
  if (title.length > MAX_TITLE_LENGTH) {
    return `the title is ${String(title.length)} characters, the limit is ${String(MAX_TITLE_LENGTH)}`
  }
  return null
}

// The pattern already guarantees at least one character after `: `, so an
// empty subject cannot reach here, but a whitespace-only one can, and so can
// padding around a real subject. The title becomes a commit subject verbatim,
// so it has to be exactly what the author meant to write.
function subjectProblem(subject) {
  if (subject.trim() === '') {
    return 'the subject after the colon is blank'
  }
  if (subject !== subject.trim()) {
    return 'the subject has leading or trailing whitespace'
  }
  return null
}

/**
 * The single source of truth for what may be merged: the command line gate,
 * the test suite and the help text all read this one function, so a type
 * accepted here is a type that releases.
 * @param {unknown} title - The pull request title as it arrives from the
 *   GitHub event payload, which is why it is not already known to be a string.
 * @returns {{ ok: true, type: string, breaking: boolean, release: string }
 *   | { ok: false, reason: string }} Either the release this title would
 *   produce once merged, or the reason it cannot be, phrased to be read in a
 *   CI log by the author of the pull request.
 */
export function validatePrTitle(title) {
  const badSize = sizeProblem(title)

  if (badSize !== null) {
    return { ok: false, reason: badSize }
  }

  // The two are mutually exclusive, so the order is only a reading order: a
  // title with a scope has a `(` where the plain pattern wants `: `.
  const match =
    SCOPED_TITLE_PATTERN.exec(title) ?? PLAIN_TITLE_PATTERN.exec(title)

  if (match === null) {
    return {
      ok: false,
      reason: 'the title does not match `type(optional-scope): subject`',
    }
  }

  const { type, breaking: bang, subject } = match.groups

  // The pattern accepts any lowercase word as the type so that it can stay one
  // literal; this is where a word that is not a release type is turned away.
  if (!Object.hasOwn(TYPE_BUMPS, type)) {
    return {
      ok: false,
      reason: `\`${type}\` is not one of the accepted types: ${TYPES.join(', ')}`,
    }
  }

  const badSubject = subjectProblem(subject)

  if (badSubject !== null) {
    return { ok: false, reason: badSubject }
  }

  const breaking = bang === '!'

  return {
    ok: true,
    type,
    breaking,
    release: breaking ? 'major' : TYPE_BUMPS[type],
  }
}

/**
 * The help text a failing run prints. It has to stand alone: the author of the
 * pull request sees only this block in the log, and should be able to fix the
 * title from it without opening the repository.
 * @returns {string} The full message, already newline-terminated.
 */
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

if (process.argv[1] === import.meta.filename) {
  main()
}
