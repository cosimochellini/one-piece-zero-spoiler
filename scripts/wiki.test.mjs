import { spawnSync } from 'node:child_process'
// @vitest-environment node
//
// The suite-wide environment is jsdom for the React components. This module is
// plain Node, so a DOM here would only cost startup time.
import {
  existsSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import process from 'node:process'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { animePairs, pairChapters } from './wiki-pairs.mjs'
import { cached, pageOf, printPairs, textOf } from './wiki.mjs'

// Cache pacing and retry delays need no wall-clock time in unit tests.
vi.mock('node:timers/promises', () => ({
  setTimeout: vi.fn(() => Promise.resolve()),
}))

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

describe('the page a query answered', () => {
  it('follows the title through normalising and redirects', () => {
    const page = { title: 'Vegapunk' }
    const query = {
      normalized: [{ from: 'shaka', to: 'Shaka' }],
      redirects: [{ from: 'Shaka', to: 'Vegapunk' }],
      pages: { 1: page, 2: { title: 'Other' } },
    }

    expect(pageOf(query, 'shaka')).toBe(page)
    expect(pageOf(query, 'Missing')).toBeUndefined()
    expect(pageOf(undefined, 'shaka')).toBeUndefined()
  })
})

const fixture = (chapter) =>
  readFileSync(
    new URL(`fixtures/wiki/chapter-${String(chapter)}.html`, import.meta.url),
    'utf8',
  )
const animeBox = (value) =>
  `<aside class="portable-infobox pi-theme-Chapter"><div data-source="anime"><h3>Anime:</h3><div class="pi-data-value">${value}</div></div></aside>`
const adaptation = (chapter) =>
  JSON.stringify({
    parse: {
      title: `Chapter ${String(chapter)}`,
      text: { '*': fixture(chapter) },
    },
  })

const expectedPairs = [
  [129, ['ep 77 (p. 2-9)', 'ep 78 (p. 10-21)']],
  [157, ['ep 92 (p. 2-10)', 'ep 94 (p. 12-17)']],
  [1115, ['ep 1148 (p. 2-5)', 'ep 1149 (p. 6-17)']],
  [1150, ['ep 1180 (p. 2-15)']],
]

describe('chapter episode pairs', () => {
  it.each(expectedPairs)(
    'reads every pair from the saved chapter %i infobox',
    (chapter, pairs) => {
      expect(animePairs(fixture(chapter))).toStrictEqual(pairs)
    },
  )

  it('keeps disjoint page spans and skips linked songs and named specials', () => {
    expect(animePairs(fixture(1))).toStrictEqual([
      'ep 4 (p. 6-47)',
      'ep 504 (p. 48-53)',
      'ep 878 (p. 4-21, 27-53)',
    ])
    expect(animePairs(fixture(2))).toStrictEqual(['ep 1 (p. 4-23)'])
    expect(
      animePairs(animeBox('Episode 1 (p. 4, 8, 9-10, 13-22)')),
    ).toStrictEqual(['ep 1 (p. 4, 8, 9-10, 13-22)'])
  })

  it('recognizes a real unadapted chapter with no anime field', () => {
    expect(animePairs(fixture(1190))).toStrictEqual([])
  })

  it.each(['', 'Not adapted', 'Not yet adapted'])(
    'recognizes an explicit unadapted field: %s',
    (text) => {
      expect(animePairs(animeBox(text))).toStrictEqual([])
    },
  )

  it('decodes entities and preserves page order, single pages and repeated episodes', () => {
    const html = animeBox(
      '<a>Episode&nbsp;94</a> (p. 12&ndash;17)<br/><a>Episode 92</a> (p. 2 &#8212; 10)<sup class="reference">[1]</sup><br>Episode 94 (p. 21)',
    )
    expect(animePairs(html)).toStrictEqual([
      'ep 94 (p. 12-17)',
      'ep 92 (p. 2-10)',
      'ep 94 (p. 21)',
    ])
  })

  it('ignores episode references elsewhere in the page and infobox', () => {
    const html = `${fixture(129).replace(
      'Chapter Info',
      'Episode 999 (p. 1-99)',
    )}<p>Episode 123 (p. 1-10)</p>`
    expect(animePairs(html)).toStrictEqual(expectedPairs[0][1])
  })

  it.each([
    'Episode 78',
    'Episode 77 (p. 2-9)<br>Episode 78',
    'Episode 0 (p. 2-9)',
    'Episode 77 (p. 0-9)',
    'Episode 77 (p. 9-2)',
    'Episode 9007199254740992 (p. 2-9)',
    'Episode 77 (p. 2-9007199254740992)',
    'Unknown adaptation',
  ])('refuses incomplete or invalid evidence: %s', (text) => {
    expect(() => animePairs(animeBox(text))).toThrow(/anime infobox/u)
  })

  it('distinguishes malformed HTML from an unadapted chapter', () => {
    expect(() => animePairs('<p>Episode 77 (p. 2-9)</p>')).toThrow(
      'chapter infobox not found',
    )
    expect(() =>
      animePairs(
        '<aside class="portable-infobox pi-theme-Chapter"><div data-source="anime">Episode 77</div></aside>',
      ),
    ).toThrow('anime infobox value not found')
  })
})

describe('requested pair chapters', () => {
  it('expands ranges in place and keeps only the first occurrence', () => {
    expect(
      pairChapters(['157', '129-130', '129', '130-132', '132-132']),
    ).toStrictEqual([157, 129, 130, 131, 132])
    expect(pairChapters(['9007199254740991'])).toStrictEqual([
      Number.MAX_SAFE_INTEGER,
    ])
  })

  it('rejects requests above 10000 unique chapters before fetching', () => {
    expect(pairChapters(['1-10000', '1-10000'])).toHaveLength(10_000)
    expect(() => pairChapters(['1-10001'])).toThrow(
      'at most 10000 unique chapters',
    )
    expect(() => pairChapters(['1-9007199254740991'])).toThrow(
      'at most 10000 unique chapters',
    )
  })

  it.each([
    [],
    ['0'],
    ['-1'],
    ['2-1'],
    ['1-0'],
    ['1.5'],
    ['1e2'],
    ['1-2-3'],
    ['1-'],
    ['x'],
    ['1', '--help'],
    ['9007199254740992'],
  ])('rejects invalid input %j', (args) => {
    expect(() => pairChapters(args)).toThrow()
  })
})

describe('the pairs command', () => {
  let directory = ''

  beforeEach(() => {
    directory = mkdtempSync(path.join(tmpdir(), 'wiki-pairs-'))
    vi.spyOn(console, 'log').mockImplementation(() => {
      // Assert command output below without printing it during the test.
    })
    vi.spyOn(console, 'error').mockImplementation(() => {
      // Assert diagnostics below without printing them during the test.
    })
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    rmSync(directory, { recursive: true, force: true })
  })

  it('prints the acceptance examples and serves a second run with the network blocked', async () => {
    const fetch = vi.fn((url) => {
      const request = new URL(url)
      const chapter = Number(
        request.searchParams.get('page').replace('Chapter_', ''),
      )
      return Promise.resolve(new Response(adaptation(chapter)))
    })
    vi.stubGlobal('fetch', fetch)
    const args = ['129', '157', '1115', '1150']
    await expect(printPairs(args, directory)).resolves.toBe(0)
    expect(console.log.mock.calls.flat()).toStrictEqual(
      expectedPairs.map(
        ([chapter, pairs]) => `ch ${String(chapter)}: ${pairs.join(' · ')}`,
      ),
    )
    expect(console.error).not.toHaveBeenCalled()
    expect(fetch).toHaveBeenCalledTimes(4)
    const url = new URL(fetch.mock.calls[0][0])
    expect(Object.fromEntries(url.searchParams)).toMatchObject({
      action: 'parse',
      prop: 'text',
      section: '0',
      page: 'Chapter_129',
    })
    expect(existsSync(path.join(directory, 'pairs', '129.json'))).toBe(true)

    const first = [...console.log.mock.calls]
    console.log.mockClear()
    fetch.mockImplementation(() => {
      throw new Error('network blocked')
    })
    await expect(printPairs(args, directory)).resolves.toBe(0)
    expect(console.log.mock.calls).toStrictEqual(first)
    expect(fetch).toHaveBeenCalledTimes(4)
  })

  it('validates all arguments before fetching any chapter', async () => {
    const fetch = answering(adaptation(129))
    await expect(printPairs(['129', 'invalid'], directory)).resolves.toBe(1)
    await expect(printPairs(['1-10001'], directory)).resolves.toBe(1)
    expect(fetch).not.toHaveBeenCalled()
    expect(console.log).not.toHaveBeenCalled()
    expect(console.error).toHaveBeenCalledWith(
      expect.stringContaining('Usage: npm run wiki:pairs'),
    )
  })

  it('continues after missing and malformed chapters and caches only adapted ones', async () => {
    const fetch = answering(JSON.stringify({ error: { code: 'missingtitle' } }))
    fetch
      .mockResolvedValueOnce(
        Response.json({ parse: { text: { '*': animeBox('Episode 77') } } }),
      )
      .mockResolvedValueOnce(Response.json({ error: { code: 'missingtitle' } }))
      .mockResolvedValueOnce(new Response(adaptation(1190)))
    await expect(
      printPairs(['129-130', '1190', '130'], directory),
    ).resolves.toBe(1)
    expect(console.log).toHaveBeenCalledExactlyOnceWith('ch 1190: not adapted')
    expect(console.error.mock.calls.flat()).toStrictEqual([
      'ch 129: could not parse every episode and page range in anime infobox',
      'ch 130: chapter does not exist',
    ])
    expect(fetch).toHaveBeenCalledTimes(3)
    for (const chapter of [129, 130, 1190]) {
      const file = path.join(directory, 'pairs', `${String(chapter)}.json`)
      expect(existsSync(file)).toBe(false)
    }
    await expect(printPairs(['130'], directory)).resolves.toBe(1)
    expect(fetch).toHaveBeenCalledTimes(4)
  })

  it('does not cache an API error and still processes the next chapter', async () => {
    const fetch = answering('{"error":{"code":"ratelimited"}}')
    fetch
      .mockResolvedValueOnce(new Response('{"error":{"code":"ratelimited"}}'))
      .mockResolvedValueOnce(new Response(adaptation(1150)))
    await expect(printPairs(['129', '1150'], directory)).resolves.toBe(1)
    expect(console.error).toHaveBeenCalledWith(
      'ch 129: Chapter_129: ratelimited',
    )
    expect(console.log).toHaveBeenCalledWith('ch 1150: ep 1180 (p. 2-15)')
    expect(existsSync(path.join(directory, 'pairs', '129.json'))).toBe(false)
  })

  it('reports exhausted network retries and continues with the next chapter', async () => {
    const fetch = answering(adaptation(1150))
    fetch
      .mockRejectedValueOnce(new Error('connection dropped'))
      .mockRejectedValueOnce(new Error('connection dropped'))
      .mockRejectedValueOnce(new Error('connection dropped'))
    await expect(printPairs(['129', '1150'], directory)).resolves.toBe(1)
    expect(fetch).toHaveBeenCalledTimes(4)
    expect(console.error).toHaveBeenCalledWith('ch 129: connection dropped')
    expect(console.log).toHaveBeenCalledWith('ch 1150: ep 1180 (p. 2-15)')
    expect(existsSync(path.join(directory, 'pairs', '129.json'))).toBe(false)
  })

  it('has an import-safe entry point and returns a failing process status for bad arguments', () => {
    const script = path.resolve(import.meta.dirname, 'wiki.mjs')
    const imported = spawnSync(
      process.execPath,
      ['--input-type=module', '-e', `await import(${JSON.stringify(script)})`],
      { encoding: 'utf8' },
    )
    expect(imported.status).toBe(0)
    expect(imported.stdout).toBe('')
    expect(imported.stderr).toBe('')
    const command = spawnSync(process.execPath, [script], { encoding: 'utf8' })
    expect(command.status).toBe(1)
    expect(command.stdout).toBe('')
    expect(command.stderr).toContain('Usage: npm run wiki:pairs')
  })
})
