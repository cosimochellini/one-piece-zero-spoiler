// @vitest-environment node
//
// The suite-wide environment is jsdom for the React components. This module is
// plain Node, so a DOM here would only cost startup time.
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { cached, textOf } from './wiki.mjs'

const isPage = (answer) => answer.parse !== undefined

/**
 * Stands in for the API with one fixed answer.
 * @param {string} body - What it answers.
 * @returns {import('vitest').Mock} The stub, to count calls on.
 */
function answering(body) {
  const fetch = vi.fn(() => Promise.resolve(new Response(body)))
  vi.stubGlobal('fetch', fetch)
  return fetch
}

describe('the wiki cache', () => {
  let directory = ''

  beforeEach(() => {
    directory = mkdtempSync(path.join(tmpdir(), 'wiki-'))
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    rmSync(directory, { recursive: true, force: true })
  })

  it('keeps a whole answer and reads it back without asking again', async () => {
    const file = path.join(directory, 'nested', 'page.json')
    const fetch = answering('{"parse":{"title":"Luffy"}}')

    await expect(
      cached(file, 'Luffy', 'https://x', isPage),
    ).resolves.toStrictEqual({ parse: { title: 'Luffy' } })
    expect(readFileSync(file, 'utf8')).toBe('{"parse":{"title":"Luffy"}}')

    await cached(file, 'Luffy', 'https://x', isPage)

    expect(fetch).toHaveBeenCalledOnce()
  })

  it('refuses to keep an answer that is not a whole one', async () => {
    answering('{"error":{"code":"ratelimited"}}')

    await expect(
      cached(path.join(directory, 'page.json'), 'Luffy', 'https://x', isPage),
    ).rejects.toThrow('Luffy: ratelimited')
  })

  it('names the page when what is cached is not JSON', async () => {
    const file = path.join(directory, 'page.json')
    writeFileSync(file, '<html>challenge</html>')

    await expect(cached(file, 'Luffy', 'https://x', isPage)).rejects.toThrow(
      'Luffy: the API did not answer with JSON',
    )
  })
})

describe('a chapter page', () => {
  it('pairs the chapter number with its wikitext', () => {
    expect(
      textOf({
        title: 'Chapter 12',
        revisions: [{ slots: { main: { '*': 'text' } } }],
      }),
    ).toStrictEqual([[12, 'text']])
  })

  it('gives nothing for a page the API does not know or a stray title', () => {
    expect(textOf({ title: 'Chapter 12' })).toStrictEqual([])
    expect(
      textOf({
        title: 'Chapter 12a',
        revisions: [{ slots: { main: { '*': 'text' } } }],
      }),
    ).toStrictEqual([])
  })
})
