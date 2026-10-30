// @vitest-environment node
//
// The suite-wide environment is jsdom for the React components. This module is
// plain Node, so a DOM here would only cost startup time.
import { createHash } from 'node:crypto'
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import {
  keyOf,
  manifestText,
  pinAll,
  pinTitle,
  save,
  sourceOf,
  urlTitle,
} from './provenance-pin.mjs'

// Cache pacing needs no wall-clock time in unit tests.
vi.mock('node:timers/promises', () => ({
  setTimeout: vi.fn(() => Promise.resolve()),
}))

const HXH = 'https://hunterxhunter.fandom.com/api.php'
const OP = 'https://onepiece.fandom.com/api.php'
const sha = (text) => createHash('sha256').update(text).digest('hex')

/**
 * The API's answer for one page at one revision.
 * @param {string} title The page title.
 * @param {number} revid Its revision.
 * @returns {object} The `formatversion=2` page.
 */
function page(title, revid) {
  return {
    title,
    revisions: [
      {
        revid,
        timestamp: '2026-10-01T00:00:00Z',
        slots: {
          main: { content: `wikitext of ${title} at ${String(revid)}` },
        },
      },
    ],
  }
}

/**
 * Stands in for the API: each answer by the end of its URL; any other URL
 * fails the test, so nothing reaches the network.
 * @param {Record<string, object>} pages Page by URL suffix.
 * @returns {import('vitest').Mock} The stub.
 */
function answering(pages) {
  const fetch = vi.fn((url) => {
    const found = Object.entries(pages).find(([end]) => url.endsWith(end))
    if (found === undefined) {
      throw new Error(`unexpected request ${url}`)
    }
    return Promise.resolve(Response.json({ query: { pages: [found[1]] } }))
  })
  vi.stubGlobal('fetch', fetch)
  return fetch
}

describe('key and URL forms', () => {
  it('encodes parentheses the way pinned entries do', () => {
    expect(urlTitle('Episode 3 (2011)')).toBe('Episode_3_%282011%29')
    expect(urlTitle("Kin'emon")).toBe("Kin'emon")
    expect(urlTitle('Gyoro, Nin, and Bao')).toBe('Gyoro%2C_Nin%2C_and_Bao')
  })

  it('keys One Piece by title and Hunter x Hunter by title and revision', () => {
    expect(keyOf('one-piece', 'Lola (Zombie)', 9, {})).toBe(
      'en-Lola_(Zombie).json',
    )
    expect(keyOf('hunter-x-hunter', 'Episode 3 (2011)', 416_001, {})).toBe(
      'hxh-en-Episode_3_(2011)-416001.json',
    )
  })

  it('adds the revision to a One Piece key another title holds', () => {
    expect(keyOf('one-piece', 'Tama', 7, { 'en-Tama.json': {} })).toBe(
      'en-Tama-7.json',
    )
  })

  it('builds an entry whose hash is over the wikitext', () => {
    const answer = page('Episode 3 (2011)', 416_001)
    expect(sourceOf(HXH, answer)).toStrictEqual({
      locale: 'en',
      title: 'Episode 3 (2011)',
      revision: 416_001,
      revisionDate: '2026-10-01T00:00:00Z',
      // eslint-disable-next-line no-secrets/no-secrets -- a public wiki URL, the form under test
      url: 'https://hunterxhunter.fandom.com/wiki/Episode_3_%282011%29',
      revisionUrl: 'https://hunterxhunter.fandom.com/index.php?oldid=416001',
      apiUrl:
        // eslint-disable-next-line no-secrets/no-secrets -- a public API URL, the form under test
        'https://hunterxhunter.fandom.com/api.php?action=query&prop=revisions&rvprop=ids%7Ctimestamp%7Ccontent&rvslots=main&format=json&formatversion=2&revids=416001',
      contentSha256: sha(answer.revisions[0].slots.main.content),
    })
    expect(sourceOf(OP, page('Lola (Zombie)', 5)).url).toBe(
      'https://onepiece.fandom.com/wiki/Lola_%28Zombie%29',
    )
  })
})

describe('pinning a title', () => {
  let directory = ''
  const wikiFor = (en) => ({ cache: directory, en, it: '', slug: '' })

  beforeEach(() => {
    directory = mkdtempSync(path.join(tmpdir(), 'pin-'))
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    rmSync(directory, { recursive: true, force: true })
  })

  it('reuses the pinned revision of this series and adds nothing', async () => {
    const pinned = sourceOf(HXH, page('Gon Freecss', 10))
    const sources = {
      'hxh-en-Gon_Freecss-10.json': pinned,
      // The same title on another wiki is no pin of this one.
      'en-Gon_Freecss.json': sourceOf(OP, page('Gon Freecss', 99)),
    }
    const fetch = answering({ '&revids=10': page('Gon Freecss', 10) })

    const result = await pinTitle('Gon_Freecss', {
      slug: 'hunter-x-hunter',
      wiki: wikiFor(HXH),
      sources,
    })

    expect(result).toMatchObject({ key: 'hxh-en-Gon_Freecss-10.json' })
    expect(result.source).toBeUndefined()
    expect(readFileSync(result.file, 'utf8')).toBe(
      'wikitext of Gon Freecss at 10',
    )
    expect(fetch).toHaveBeenCalledOnce()
  })

  it('follows a redirect onto a pinned page', async () => {
    const sources = {
      'en-Monkey_D._Luffy.json': sourceOf(OP, page('Monkey D. Luffy', 3)),
    }
    answering({
      '&titles=Luffy': page('Monkey D. Luffy', 8),
      '&revids=3': page('Monkey D. Luffy', 3),
    })

    const result = await pinTitle('Luffy', {
      slug: 'one-piece',
      wiki: wikiFor(OP),
      sources,
    })

    expect(result).toMatchObject({ key: 'en-Monkey_D._Luffy.json' })
    expect(result.source).toBeUndefined()
  })

  it('adds a new title at its latest revision', async () => {
    const sources = {}
    answering({
      '&titles=Episode%203%20(2011)': page('Episode 3 (2011)', 416_001),
    })

    const result = await pinTitle('Episode 3 (2011)', {
      slug: 'hunter-x-hunter',
      wiki: wikiFor(HXH),
      sources,
    })

    expect(result.key).toBe('hxh-en-Episode_3_(2011)-416001.json')
    expect(result.source?.contentSha256).toBe(
      sha(readFileSync(result.file, 'utf8')),
    )
  })

  it('fails on a missing page', async () => {
    answering({ '&titles=Nobody': { title: 'Nobody', missing: true } })

    await expect(
      pinTitle('Nobody', { slug: 'one-piece', wiki: wikiFor(OP), sources: {} }),
    ).rejects.toThrow('MISSING\tNobody')
  })

  it('pins a run of titles once each and reports the missing', async () => {
    vi.spyOn(console, 'log').mockReturnValue()
    const error = vi.spyOn(console, 'error').mockReturnValue()
    const fetch = answering({
      '&titles=Den%20Den%20Mushi': page('Den Den Mushi', 4),
      '&titles=Nobody': { title: 'Nobody', missing: true },
      '&revids=4': page('Den Den Mushi', 4),
    })
    const pinned = {}

    const { sources, failed } = await pinAll(
      ['Den Den Mushi', 'Nobody', 'Den_Den_Mushi'],
      { slug: 'one-piece', wiki: wikiFor(OP) },
      pinned,
    )

    expect(Object.keys(sources)).toStrictEqual(['en-Den_Den_Mushi.json'])
    expect(pinned).toStrictEqual({})
    expect(failed).toBe(true)
    expect(error).toHaveBeenCalledWith('MISSING\tNobody')
    expect(fetch).toHaveBeenCalledTimes(3)
  })

  it('writes the manifest only when something is new and it is no dry run', () => {
    vi.spyOn(console, 'error').mockReturnValue()
    const file = path.join(directory, 'sources.json')
    const manifest = { accessed: '2026-10-27', sources: {} }
    const text = manifestText(manifest, manifest.sources)
    const sources = { 'en-Gem.json': sourceOf(OP, page('Gem', 2)) }
    writeFileSync(file, text)

    save(file, manifest, sources, true)
    save(file, manifest, manifest.sources, false)
    expect(readFileSync(file, 'utf8')).toBe(text)

    save(file, manifest, sources, false)
    expect(JSON.parse(readFileSync(file, 'utf8'))).toStrictEqual({
      ...manifest,
      sources,
    })
  })
})

describe('the manifest', () => {
  it('keeps every earlier byte and appends after them', () => {
    const file = path.resolve(
      import.meta.dirname,
      '../docs/content-provenance/sources.json',
    )
    const text = readFileSync(file, 'utf8')
    const manifest = JSON.parse(text)
    const entry = sourceOf(HXH, page('Heavens Arena', 1))

    expect(manifestText(manifest, manifest.sources)).toBe(text)
    const next = manifestText(manifest, {
      ...manifest.sources,
      'hxh-en-Heavens_Arena-1.json': entry,
    })
    const end = text.lastIndexOf('    }\n')
    expect(next.slice(0, end)).toBe(text.slice(0, end))
    expect(Object.keys(JSON.parse(next).sources).at(-1)).toBe(
      'hxh-en-Heavens_Arena-1.json',
    )
  })
})
