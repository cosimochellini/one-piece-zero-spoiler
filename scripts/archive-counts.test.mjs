// @vitest-environment node
//
// `describe` / `it` / `expect` are imported rather than taken from
// `test.globals`: this file is linted as plain JavaScript, where ESLint's
// `no-undef` has no TypeScript program to learn the Vitest globals from.
import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

import { DOC_PATH, withTable } from './archive-counts.mjs'

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
