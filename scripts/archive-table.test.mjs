// @vitest-environment node
import { spawnSync } from 'node:child_process'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { describe, expect, it, vi } from 'vitest'

import { archiveTable, datedOnly } from './archive-table.mjs'

/**
 * Small mappings with distinct chapter and episode bounds.
 * @returns {object} An archive fixture whose calls can be checked.
 */
function archive() {
  return {
    chapterCeiling: 2,
    lastAired: 3,
    chapterAtEpisode: vi.fn((episode) => episode + 10),
    episodeAtChapter: vi.fn((chapter) => chapter + 20),
    dated: [
      { label: 'zoro @5', entry: { episode: 5, chapter: 8 } },
      { label: 'luffy @1', entry: { episode: 1 } },
      { label: 'zoro @5', entry: { episode: 5, chapter: 8 } },
    ],
  }
}

describe('archive table', () => {
  it('prints every mapping from one through its inclusive bound, then dated facts', () => {
    const data = archive()

    expect(archiveTable(data)).toBe(
      'c1 21\nc2 22\ne1 11\ne2 12\ne3 13\ndated zoro @5 5/8\ndated luffy @1 1/-\ndated zoro @5 5/8\n',
    )
    expect(data.episodeAtChapter.mock.calls).toEqual([[1], [2]])
    expect(data.chapterAtEpisode.mock.calls).toEqual([[1], [2], [3]])
  })

  it('keeps dated order, duplicates, and absent chapters when mappings are omitted', () => {
    const data = archive()

    expect(archiveTable(data, true)).toBe(
      'dated zoro @5 5/8\ndated luffy @1 1/-\ndated zoro @5 5/8\n',
    )
    expect(data.episodeAtChapter).not.toHaveBeenCalled()
    expect(data.chapterAtEpisode).not.toHaveBeenCalled()
  })

  it('does not treat an explicit zero chapter as missing', () => {
    const data = archive()
    data.dated = [{ label: 'test @0', entry: { episode: 0, chapter: 0 } }]

    expect(archiveTable(data, true)).toBe('dated test @0 0/0\n')
  })

  it('prints no empty line when there are no facts', () => {
    const data = archive()
    data.dated = []

    expect(archiveTable(data, true)).toBe('')
  })
})

describe('archive table arguments', () => {
  it('accepts no arguments or the dated-only flag', () => {
    expect(datedOnly([])).toBe(false)
    expect(datedOnly(['--dated-only'])).toBe(true)
  })

  it.each([['--unknown'], ['karoo'], ['--dated-only', '--unknown']])(
    'rejects unsupported arguments: %s',
    (...args) => {
      expect(() => datedOnly(args)).toThrow(/Unsupported argument:/u)
    },
  )

  it('writes argument errors only to stderr and exits unsuccessfully', () => {
    const result = spawnSync(
      process.execPath,
      [fileURLToPath(new URL('archive-table.mjs', import.meta.url)), '--bad'],
      { encoding: 'utf8' },
    )

    expect(result.status).toBe(1)
    expect(result.stdout).toBe('')
    expect(result.stderr).toContain('Unsupported argument: --bad')
  })
})
