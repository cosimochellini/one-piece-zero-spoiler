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

/**
 * Whether a boundary zone is a series' own.
 * @param {string} zone The zone's name.
 * @returns {boolean} Whether it is `series` or one under it.
 */
function isSeries(zone) {
  return zone === 'series' || zone.startsWith('series/')
}

/**
 * Whether a boundary rule lets its zone import from a series, types included.
 * @param {{ allow?: string[], allowTypeOnly?: string[] }} rule The rule.
 * @returns {boolean} Whether it names a series zone.
 */
function reachesSeries({ allow = [], allowTypeOnly = [] }) {
  return [...allow, ...allowTypeOnly].some((zone) => isSeries(zone))
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

  it('puts the series zones before the engine, which would swallow them', () => {
    // A file belongs to the first zone that matches it, and the engine's
    // `src/data/**` matches every series file too. Listed after it, a series
    // zone would hold nothing, and its boundary would pass without a check.
    const child = spawnSync(
      fallow,
      ['list', '--boundaries', '--format', 'json'],
      { cwd: repositoryRoot, encoding: 'utf8' },
    )
    const zones = JSON.parse(child.stdout).boundaries.zones
    const count = (name) => zones.find((zone) => zone.name === name)?.file_count

    expect(count('series/one-piece')).toBeGreaterThan(50)
    expect(count('series/hunter-x-hunter')).toBeGreaterThan(5)
    expect(count('engine-types')).toBe(1)
    expect(count('series-list')).toBe(1)
  })

  it('lets only the server read the registry, without directly importing a series', () => {
    // Runtime requests select archives through the same registry as the gates.
    const rules = read('config').boundaries.rules
    const reaching = rules
      .filter(({ allow = [], allowTypeOnly = [] }) =>
        [...allow, ...allowTypeOnly].includes('series-list'),
      )
      .map(({ from }) => from)

    const server = rules.find(({ from }) => from === 'server')
    const direct = [
      ...(server.allow ?? []),
      ...(server.allowTypeOnly ?? []),
    ].filter((zone) => zone === 'series' || zone.startsWith('series/'))

    expect(reaching).toStrictEqual(['server'])
    expect(direct).toStrictEqual([])
  })

  it('lets no zone but the registry take anything from a series, types included', () => {
    // The record shapes took One Piece's types until #758; a series now
    // narrows the engine's shapes for itself.
    const reaching = read('config')
      .boundaries.rules.filter((rule) => reachesSeries(rule))
      .map(({ from }) => from)

    expect(reaching).toStrictEqual(['series-list'])
  })
})
