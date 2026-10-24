// @vitest-environment node
//
// `describe` / `it` / `expect` are imported rather than taken from
// `test.globals`: this file is linted as plain JavaScript, where ESLint's
// `no-undef` has no TypeScript program to learn the Vitest globals from.
import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

import { countTable, DOC_PATH, withTable } from './archive-counts.mjs'

describe('the counts table writer', () => {
  it('replaces only what sits between the markers', () => {
    const document = readFileSync(DOC_PATH, 'utf8')
    const written = withTable(document, '| Thing | Count |')

    expect(written).toContain('| Thing | Count |')
    expect(written).not.toContain('| Records ')
    expect(written.slice(written.indexOf('## Drawings'))).toBe(
      document.slice(document.indexOf('## Drawings')),
    )
  })

  it('refuses a document that has lost its markers', () => {
    expect(() => withTable('# No table here\n', '')).toThrow(/markers/u)
  })
})

describe('the table of one series', () => {
  it('counts the redrawings and chronicles off its timelines', () => {
    const owner = { kind: 'character' }
    const table = countTable({
      archive: {
        drawings: { a: [], b: [] },
        entities: [owner, { kind: 'fruit' }],
        sagas: [{}],
        series: {
          features: { fruits: true },
          kinds: ['arc', 'character', 'fruit', 'place', 'ship'],
        },
        timelines: [
          { field: 'redrawing', timeline: [1, 2] },
          { field: 'chronicle', timeline: [1] },
          { field: 'chronicle', timeline: [] },
          { field: 'status', timeline: [1] },
        ],
      },
    })

    expect(table).toContain('| Records | 2 |')
    expect(table).toContain(
      '| Line drawings | 2, one per record, plus 2 redrawings of 1 records |',
    )
    expect(table).toContain('| Chronicle stories | 1, for 1 characters |')
    expect(table).toContain('| Devil fruits | 1 |')
    expect(table).toContain('| Arcs, places, ships | 0 · 0 · 0 |')
  })

  it('leaves out the kinds and features a series does not have', () => {
    const table = countTable({
      archive: {
        drawings: { a: [] },
        entities: [{ kind: 'arc' }],
        sagas: [{}],
        series: {
          features: { fruits: false },
          kinds: ['arc', 'character', 'place'],
        },
        timelines: [],
      },
    })

    expect(table).not.toContain('Devil fruits')
    expect(table).toContain('| Arcs, places | 1 · 0 |')
    expect(table).toContain('| Saga modules | 1 |')
  })
})
