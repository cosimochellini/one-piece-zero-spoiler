// @vitest-environment node
//
// The suite-wide environment is jsdom for the React components. This module is
// plain Node, so a DOM here would only cost startup time.
import { spawnSync } from 'node:child_process'
import path from 'node:path'
import { describe, expect, it } from 'vitest'

const repositoryRoot = path.resolve(import.meta.dirname, '..')
const fallow = path.join(repositoryRoot, 'node_modules', '.bin', 'fallow')

/**
 * Runs the declared fallow binary and parses what it prints as JSON.
 * @param {string} subcommand - `config` for the resolved configuration, or
 *   `schema` for what this fallow version knows.
 * @returns {Record<string, unknown>} The parsed output.
 */
function read(subcommand) {
  const child = spawnSync(fallow, [subcommand], {
    cwd: repositoryRoot,
    encoding: 'utf8',
  })
  return JSON.parse(child.stdout)
}

describe('the fallow configuration', () => {
  it('lists every security category this fallow version has', () => {
    // Once `include` is set, a category it leaves out never runs, and an
    // upgrade that adds one would be silently skipped.
    const known = read('schema').security_categories.categories.map(
      ({ id }) => id,
    )
    const listed = read('config').security.categories.include

    expect(new Set(listed)).toStrictEqual(new Set(known))
  })
})
