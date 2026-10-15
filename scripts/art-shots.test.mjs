// @vitest-environment node

import { JSDOM } from 'jsdom'
import { existsSync } from 'node:fs'
import process from 'node:process'
import { launch } from 'puppeteer-core'
import { preview } from 'vite'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { importArchive } from './archive-loader.mjs'
import {
  artShots,
  captureBookmark,
  gridHtml,
  shotRows,
  writeGrid,
} from './art-shots.mjs'

vi.mock('node:fs', async (original) => ({
  ...(await original()),
  existsSync: vi.fn(),
  mkdirSync: vi.fn(),
}))
vi.mock('puppeteer-core', () => ({ launch: vi.fn() }))
vi.mock('vite', () => ({ preview: vi.fn() }))

const origin = 'http://127.0.0.1:4321'
const row = { id: 'karoo', label: 'karoo stage', bookmarks: [] }

/**
 * Browser primitives with observable navigation, capture readiness and cleanup.
 * @returns {object} A browser context, its page, and its drawing handle.
 */
function captureFixture() {
  const drawing = {
    scrollIntoView: vi.fn().mockResolvedValue(),
    screenshot: vi.fn().mockResolvedValue('png'),
  }
  const page = {
    emulateMediaFeatures: vi.fn().mockResolvedValue(),
    evaluate: vi.fn().mockResolvedValue(),
    goto: vi.fn().mockResolvedValue({ ok: () => true }),
    setDefaultTimeout: vi.fn(),
    waitForFunction: vi.fn().mockResolvedValue(),
    waitForSelector: vi.fn().mockResolvedValue(drawing),
  }
  const context = {
    close: vi.fn().mockResolvedValue(),
    // eslint-disable-next-line unicorn/no-keyword-prefix -- Puppeteer API name.
    newPage: vi.fn().mockResolvedValue(page),
    setCookie: vi.fn().mockResolvedValue(),
  }
  context[Symbol.asyncDispose] = context.close
  const browser = {
    close: vi.fn().mockResolvedValue(),
    createBrowserContext: vi.fn().mockResolvedValue(context),
  }
  browser[Symbol.asyncDispose] = browser.close
  return { browser, context, drawing, page }
}

beforeEach(async () => {
  vi.clearAllMocks()
  const fs = await vi.importActual('node:fs')
  vi.mocked(existsSync).mockImplementation(fs.existsSync)
})

afterEach(() => {
  vi.unstubAllEnvs()
  vi.unstubAllGlobals()
})

describe('stage planning from the real archive', () => {
  it('uses only Karoo’s two redrawings and the four boundary bookmarks', async () => {
    const rows = await shotRows(['karoo'])

    expect(rows.map(({ id, bookmarks }) => ({ id, bookmarks }))).toEqual([
      {
        id: 'karoo',
        bookmarks: [
          { value: '91', open: true },
          { value: '92', open: true },
          { value: 'c156', open: true },
          { value: 'c157', open: true },
        ],
      },
      {
        id: 'karoo',
        bookmarks: [
          { value: '128', open: true },
          { value: '129', open: true },
          { value: 'c215', open: true },
          { value: 'c216', open: true },
        ],
      },
    ])
  })

  it('retains argument order and uses the app’s derived gate for Teach', async () => {
    const { getEntity } = await importArchive('data/entities.ts')
    const { datedOf } = await importArchive('data/dated.ts')
    const teach = getEntity('marshall-d-teach')
    const stages = datedOf(teach, 'redrawing')
    const rows = await shotRows(['marshall-d-teach', 'karoo'])

    expect(rows.map(({ id }) => id)).toEqual([
      ...stages.map(() => 'marshall-d-teach'),
      'karoo',
      'karoo',
    ])
    const derived = stages.findIndex(({ chapter }) => chapter === undefined)
    expect(derived).toBeGreaterThanOrEqual(0)
    const chapter = stages[derived].gate.revealedAtChapter
    expect(rows[derived].label).toContain('(derived)')
    expect(rows[derived].bookmarks.slice(2)).toEqual([
      {
        value: `c${chapter - 1}`,
        open: chapter - 1 >= teach.revealedAtChapter,
      },
      { value: `c${chapter}`, open: chapter >= teach.revealedAtChapter },
    ])
  })

  it.each([
    { args: [], message: /Usage:/u },
    { args: ['--unknown'], message: /Unknown option/u },
    { args: ['not-a-record'], message: /Expected a character id/u },
    { args: ['going-merry'], message: /Expected a character id/u },
    { args: ['makino'], message: /no redrawings/u },
  ])(
    'rejects invalid request $args before launch',
    async ({ args, message }) => {
      await expect(shotRows(args)).rejects.toThrow(message)
      expect(preview).not.toHaveBeenCalled()
      expect(launch).not.toHaveBeenCalled()
    },
  )
})

describe('bookmark capture', () => {
  it('sets the cookie before navigation and waits for visible, scrolled drawings', async () => {
    const { browser, context, drawing, page } = captureFixture()
    const cells = await captureBookmark(browser, origin, row, {
      value: '92',
      open: true,
    })

    expect(context.setCookie).toHaveBeenCalledWith({
      name: 'opzs_ep',
      value: '92',
      url: origin,
      path: '/',
    })
    expect(context.setCookie.mock.invocationCallOrder[0]).toBeLessThan(
      page.goto.mock.invocationCallOrder[0],
    )
    expect(page.emulateMediaFeatures).toHaveBeenCalledWith([
      { name: 'prefers-reduced-motion', value: 'reduce' },
    ])
    expect(
      page.waitForSelector.mock.calls.map(([selector]) => selector),
    ).toEqual([
      'main svg[viewBox="0 0 160 200"]',
      'a[href$="/characters/karoo"] > span > svg[viewBox="0 0 160 200"]',
    ])
    expect(drawing.scrollIntoView).toHaveBeenCalledTimes(2)
    expect(page.waitForFunction).toHaveBeenCalledTimes(2)
    expect(drawing.scrollIntoView.mock.invocationCallOrder[0]).toBeLessThan(
      page.waitForFunction.mock.invocationCallOrder[0],
    )
    expect(page.waitForFunction.mock.invocationCallOrder[0]).toBeLessThan(
      drawing.screenshot.mock.invocationCallOrder[0],
    )
    expect(cells).toEqual([
      { label: 'crest · 92', image: 'data:image/png;base64,png' },
      { label: 'tile · 92', image: 'data:image/png;base64,png' },
    ])
    expect(context.close).toHaveBeenCalledOnce()
  })

  it('creates a fresh context for each bookmark and closes both', async () => {
    const first = captureFixture()
    const second = captureFixture()
    first.browser.createBrowserContext
      .mockResolvedValueOnce(first.context)
      .mockResolvedValueOnce(second.context)

    await captureBookmark(first.browser, origin, row, {
      value: '91',
      open: false,
    })
    await captureBookmark(first.browser, origin, row, {
      value: '92',
      open: true,
    })

    expect(first.browser.createBrowserContext).toHaveBeenCalledTimes(2)
    expect(first.context.close).toHaveBeenCalledOnce()
    expect(second.context.close).toHaveBeenCalledOnce()
    expect(first.page.waitForSelector).not.toHaveBeenCalled()
    expect(second.context.setCookie).toHaveBeenCalledWith(
      expect.objectContaining({ value: '92' }),
    )
  })

  it('returns placeholders only for a legitimately unopened bookmark', async () => {
    const { browser, context, page } = captureFixture()

    await expect(
      captureBookmark(browser, origin, row, { value: '1', open: false }),
    ).resolves.toEqual([
      { label: 'crest · 1', image: null },
      { label: 'tile · 1', image: null },
    ])
    expect(page.goto).toHaveBeenCalledTimes(2)
    expect(page.waitForSelector).not.toHaveBeenCalled()
    expect(context.close).toHaveBeenCalledOnce()
  })

  it.each([null, { ok: () => false, status: () => 500 }])(
    'fails bad navigation even for an unopened record',
    async (response) => {
      const { browser, context, page } = captureFixture()
      page.goto.mockResolvedValue(response)

      await expect(
        captureBookmark(browser, origin, row, { value: '1', open: false }),
      ).rejects.toThrow(/Could not load/u)
      expect(context.close).toHaveBeenCalledOnce()
    },
  )

  it('fails rather than replacing a timed-out open drawing with a placeholder', async () => {
    const { browser, context, page } = captureFixture()
    page.waitForSelector.mockRejectedValue(new Error('drawing timed out'))

    await expect(
      captureBookmark(browser, origin, row, { value: '92', open: true }),
    ).rejects.toThrow('drawing timed out')
    expect(context.close).toHaveBeenCalledOnce()
  })
})

/**
 * A built site and installed Chrome without touching real build files.
 * @returns {object} A bound preview server.
 */
function serverFixture() {
  vi.mocked(existsSync).mockReturnValue(true)
  vi.stubEnv('CHROME_PATH', '/test/chrome')
  const server = {
    httpServer: { address: () => ({ port: 4321 }) },
    close: vi.fn().mockResolvedValue(),
  }
  vi.mocked(preview).mockResolvedValue(server)
  return server
}

describe('command resource ownership', () => {
  it('requires a production build before starting preview or Chrome', async () => {
    const fs = await vi.importActual('node:fs')
    vi.mocked(existsSync).mockImplementation((file) =>
      String(file).endsWith('/dist/server/server.js') ?
        false
      : fs.existsSync(file),
    )

    await expect(artShots(['karoo'])).rejects.toThrow('Run npm run build')
    expect(preview).not.toHaveBeenCalled()
    expect(launch).not.toHaveBeenCalled()
  })

  it('reports an invalid Chrome override before starting preview', async () => {
    const fs = await vi.importActual('node:fs')
    vi.stubEnv('CHROME_PATH', '/missing/chrome')
    vi.mocked(existsSync).mockImplementation(
      (file) =>
        String(file).endsWith('/dist/server/server.js') || fs.existsSync(file),
    )

    await expect(artShots(['karoo'])).rejects.toThrow(
      'Chrome not found. Install Chrome or set CHROME_PATH',
    )
    expect(preview).not.toHaveBeenCalled()
    expect(launch).not.toHaveBeenCalled()
  })

  it('aborts an interrupted capture and releases owned resources', async () => {
    const server = serverFixture()
    const { browser, context, page } = captureFixture()
    const navigation = Promise.withResolvers()
    const started = Promise.withResolvers()
    let captureSignal
    page.goto.mockImplementation(() => {
      started.resolve()
      return navigation.promise
    })
    const interrupt = () => navigation.reject(new Error('capture interrupted'))
    vi.mocked(launch).mockImplementation(({ signal }) => {
      captureSignal = signal
      signal.addEventListener('abort', interrupt, { once: true })
      return Promise.resolve(browser)
    })
    const exitCode = process.exitCode
    const terminations = process.listenerCount('SIGTERM')
    try {
      const pending = artShots(['karoo'])
      await started.promise
      expect(captureSignal.aborted).toBe(false)
      expect(launch).toHaveBeenCalledWith(
        expect.objectContaining({ handleSIGINT: false, handleSIGTERM: false }),
      )
      process.emit('SIGTERM')
      await expect(pending).rejects.toThrow('capture interrupted')

      expect(captureSignal.aborted).toBe(true)
      expect(process.exitCode).toBe(130)
      expect(context.close).toHaveBeenCalledOnce()
      expect(browser.close).toHaveBeenCalledOnce()
      expect(server.close).toHaveBeenCalledOnce()
      expect(process.listenerCount('SIGTERM')).toBe(terminations)
    } finally {
      process.exitCode = exitCode
    }
  })

  it('closes preview when Chrome fails to launch and removes signal handlers', async () => {
    const server = serverFixture()
    const interrupts = process.listenerCount('SIGINT')
    const terminations = process.listenerCount('SIGTERM')
    vi.mocked(launch).mockRejectedValue(new Error('launch failed'))

    await expect(artShots(['karoo'])).rejects.toThrow('launch failed')
    expect(server.close).toHaveBeenCalledOnce()
    expect(process.listenerCount('SIGINT')).toBe(interrupts)
    expect(process.listenerCount('SIGTERM')).toBe(terminations)
  })

  it('closes the context, browser and preview when capture fails', async () => {
    const server = serverFixture()
    const { browser, context, page } = captureFixture()
    page.goto.mockRejectedValue(new Error('network failed'))
    vi.mocked(launch).mockResolvedValue(browser)

    await expect(artShots(['karoo'])).rejects.toThrow('network failed')
    expect(context.close).toHaveBeenCalledOnce()
    expect(browser.close).toHaveBeenCalledOnce()
    expect(server.close).toHaveBeenCalledOnce()
  })

  it('composes four crests then four tiles per stage and closes owned resources', async () => {
    const server = serverFixture()
    const { browser, context } = captureFixture()
    const composition = {
      evaluate: vi.fn().mockResolvedValue(),
      screenshot: vi.fn().mockResolvedValue(),
      setContent: vi.fn().mockResolvedValue(),
      setViewport: vi.fn().mockResolvedValue(),
    }
    // eslint-disable-next-line unicorn/no-keyword-prefix -- Puppeteer API name.
    browser.newPage = vi.fn().mockResolvedValue(composition)
    vi.mocked(launch).mockResolvedValue(browser)

    await expect(artShots(['karoo'])).resolves.toMatch(
      /\.gate\/shots\/karoo\.png$/u,
    )
    const dom = new JSDOM(composition.setContent.mock.calls[0][0])
    expect(dom.window.document.querySelectorAll('section')).toHaveLength(2)
    expect(
      [
        ...dom.window.document
          .querySelector('section')
          .querySelectorAll('.label'),
      ].map((label) => label.textContent),
    ).toEqual([
      'crest · 91',
      'crest · 92',
      'crest · c156',
      'crest · c157',
      'tile · 91',
      'tile · 92',
      'tile · c156',
      'tile · c157',
    ])
    dom.window.close()
    expect(context.close).toHaveBeenCalledTimes(8)
    expect(browser.close).toHaveBeenCalledOnce()
    expect(server.close).toHaveBeenCalledOnce()
  })
})

describe('grid rendering', () => {
  it('preserves labels, escapes text and marks an unopened cell', async () => {
    const rows = [
      {
        label: 'stage <1>',
        cells: [
          { label: 'crest · 1', image: 'data:image/png;base64,png' },
          { label: 'tile · 1', image: null },
        ],
      },
    ]
    const dom = new JSDOM(gridHtml(rows))
    try {
      expect(dom.window.document.querySelector('h2').textContent).toBe(
        'stage <1>',
      )
      expect(
        [...dom.window.document.querySelectorAll('.label')].map(
          (label) => label.textContent,
        ),
      ).toEqual(['crest · 1', 'tile · 1'])
      expect(dom.window.document.querySelectorAll('img')).toHaveLength(1)
      expect(dom.window.document.querySelector('.missing').textContent).toBe(
        'Not yet open',
      )
      const page = {
        setContent: vi.fn().mockResolvedValue(),
        evaluate: vi.fn().mockResolvedValue(),
        setViewport: vi.fn().mockResolvedValue(),
        screenshot: vi.fn().mockResolvedValue(),
      }
      await writeGrid(page, rows, '/test/grid.png')
      expect(page.setContent).toHaveBeenCalledWith(gridHtml(rows))
      expect(page.screenshot).toHaveBeenCalledWith({
        path: '/test/grid.png',
        fullPage: true,
      })
    } finally {
      dom.window.close()
    }
  })
})
