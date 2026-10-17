// The Claude Code PreToolUse hook on Bash (`.claude/settings.json`): a
// `gh issue create` without one label per group in `.github/labels.json` is
// refused, so every issue an agent opens can be queried by the next one.
// Exit 2 blocks the call and hands stderr back to the agent.
import { existsSync, readFileSync } from 'node:fs'
import process from 'node:process'
import { pathToFileURL } from 'node:url'

import labels from '../.github/labels.json' with { type: 'json' }

/** The groups every issue carries exactly one label of. */
const GROUPS = ['type', 'area', 'status', 'priority', 'size']

/** Every label the repository defines. */
const KNOWN = new Set(labels.map((label) => label.name))

const CREATE = /\bgh issue create\b/u

// ponytail: regexes over the command, not a shell parser; a label held in a
// variable is not seen. Parse with a real shell lexer if agents write those.
const LABEL =
  /(?:^|\s)(?:--label|-l)(?:=|\s+)(?:"(?<double>[^"]*)"|'(?<single>[^']*)'|(?<bare>\S+))/gu
const BODY_FILE =
  /(?:^|\s)(?:--body-file|-F)(?:=|\s+)(?:"(?<double>[^"]*)"|'(?<single>[^']*)'|(?<bare>\S+))/gu

/**
 * Every value given to a flag.
 * @param {string} command The shell command.
 * @param {RegExp} flag {@link LABEL} or {@link BODY_FILE}.
 * @returns {string[]} The values, in order.
 */
function values(command, flag) {
  return command
    .matchAll(flag)
    .map(({ groups }) => groups?.double ?? groups?.single ?? groups?.bare ?? '')
    .toArray()
}

/**
 * The labels a `gh issue create` command sets.
 * @param {string} command The shell command.
 * @returns {string[]} The labels, comma lists split.
 */
export function labelsOf(command) {
  const start = Math.max(0, command.search(CREATE))

  return values(command.slice(start), LABEL)
    .flatMap((value) => value.split(','))
    .map((label) => label.trim())
    .filter((label) => label !== '')
}

/**
 * The text that holds the body: the `--body-file` when there is one, else the
 * command itself, which carries an inline `--body` or heredoc.
 * @param {string} command The shell command.
 * @returns {string} Text to look for the body's lines in.
 */
function bodyOf(command) {
  const file = values(command, BODY_FILE)[0]

  return file !== undefined && existsSync(file) ?
      readFileSync(file, 'utf8')
    : command
}

/**
 * Why a set of labels is refused; empty when it is accepted.
 * @param {string[]} given The labels on the new issue.
 * @param {string} body The issue body.
 * @returns {string[]} One line per problem.
 */
export function problems(given, body) {
  const unknown = given
    .filter((label) => !KNOWN.has(label))
    .map((label) => `unknown label "${label}"`)
  const groups = GROUPS.map((group) => {
    const count = given.filter((label) => label.startsWith(`${group}:`)).length
    if (count > 1) {
      return `more than one ${group}: label`
    }
    if (count === 0 && (group !== 'size' || !given.includes('type:epic'))) {
      return `no ${group}: label`
    }

    return ''
  }).filter((problem) => problem !== '')
  const blocked =
    given.includes('status:blocked') && !/^Unblocks at:/mu.test(body) ?
      [
        'status:blocked needs an "Unblocks at: ch. N" or "Unblocks at: #N" line in the body',
      ]
    : []

  return [...unknown, ...groups, ...blocked]
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  const input = JSON.parse(readFileSync(process.stdin.fd, 'utf8'))
  const command = String(input.tool_input?.command ?? '')
  const found =
    CREATE.test(command) ? problems(labelsOf(command), bodyOf(command)) : []
  if (found.length > 0) {
    process.stderr.write(
      `gh issue create refused:\n- ${found.join('\n- ')}\nEvery issue takes one type:, area:, status:, priority: and size: label (no size: on a type:epic). Load the issues skill for what each one means.\n`,
    )
    process.exitCode = 2
  }
}
