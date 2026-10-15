// Real-site evidence for redrawing boundaries; run after `npm run build`.
import { existsSync, mkdirSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { pathToFileURL } from 'node:url'
import { parseArgs } from 'node:util'
import { launch } from 'puppeteer-core'
import { preview } from 'vite'

import { importArchive, ROOT } from './archive-loader.mjs'

/** @typedef {{ value: string, open: boolean }} Bookmark */
/** @typedef {{ id: string, label: string, bookmarks: Bookmark[] }} Row */
/** @typedef {{ label: string, image: string | null }} Cell */
/** @typedef {import('puppeteer-core').Browser} Browser */
/** @typedef {import('puppeteer-core').Page} Page */

const ART = 'svg[viewBox="0 0 160 200"]'
const VIEWPORT = { width: 1440, height: 1000, deviceScaleFactor: 1 }
const TIMEOUT = 30_000

/**
 * Resolve every id before starting Chrome or preview, using the site's gates.
 * @param {string[]} args CLI arguments.
 * @returns {Promise<Row[]>} One row for each redrawing, in archive order.
 */
export async function shotRows(args) {
  const { positionals } = parseArgs({ args, allowPositionals: true })
  if (positionals.length === 0) {
    throw new Error('Usage: npm run art:shots -- <id> [<id>…]')
  }
  const { getEntity } = await importArchive('data/entities.ts')
  const { datedOf } = await importArchive('data/dated.ts')
  const { parseBookmark } = await importArchive('lib/progress/episode.ts')
  const { reveal } = await importArchive('data/reveal.ts')
  return positionals.flatMap((id) => {
    const entity = getEntity(id)
    if (entity?.kind !== 'character') {
      throw new Error(`Expected a character id, got ${id}`)
    }
    const stages = datedOf(entity, 'redrawing')
    if (stages.length === 0) {
      throw new Error(`${id} has no redrawings to capture`)
    }
    return stages.map(({ episode, chapter, gate }) => ({
      id,
      label: `${id} · ep ${episode} / c${gate.revealedAtChapter}${chapter === undefined ? ' (derived)' : ''}`,
      bookmarks: [
        String(episode - 1),
        String(episode),
        `c${gate.revealedAtChapter - 1}`,
        `c${gate.revealedAtChapter}`,
      ].map((value) => ({
        value,
        open: reveal(parseBookmark(value)).sees(entity),
      })),
    }))
  })
}

/**
 * Locate an existing Chrome, without downloading a browser.
 * @returns {string} Executable path.
 */
function chromePath() {
  const candidates =
    process.env.CHROME_PATH === undefined ?
      [
        '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        '/usr/bin/google-chrome',
        '/usr/bin/google-chrome-stable',
        '/usr/bin/chromium',
        '/usr/bin/chromium-browser',
        `${process.env.PROGRAMFILES}/Google/Chrome/Application/chrome.exe`,
        `${process.env.LOCALAPPDATA}/Google/Chrome/Application/chrome.exe`,
      ]
    : [process.env.CHROME_PATH]
  const executable = candidates.find((candidate) => existsSync(candidate))
  if (executable === undefined) {
    throw new Error(
      'Chrome not found. Install Chrome or set CHROME_PATH to its executable.',
    )
  }
  return executable
}

/**
 * Load a page and distinguish a failed request from an intentionally closed record.
 * @param {Page} page The capture tab.
 * @param {string} url The built site's URL.
 * @returns {Promise<void>} Once the document has arrived.
 */
async function navigate(page, url) {
  const response = await page.goto(url, { waitUntil: 'networkidle0' })
  if (response === null || !response.ok()) {
    throw new Error(
      `Could not load ${url}: HTTP ${response?.status() ?? 'no response'}`,
    )
  }
  await page.evaluate(async () => {
    await globalThis.document.fonts.ready
  })
}

/**
 * Capture the rendered drawing, including a deferred tile after it scrolls into view.
 * @param {Page} page The capture tab.
 * @param {string} selector Exactly the intended drawing.
 * @returns {Promise<string>} A PNG data URL.
 */
async function drawingShot(page, selector) {
  const drawing = await page.waitForSelector(selector, { visible: true })
  if (drawing === null) {
    throw new Error(`Missing drawing: ${selector}`)
  }
  await drawing.scrollIntoView()
  await page.waitForFunction(
    (target) =>
      Boolean(globalThis.document.querySelector(target)?.querySelector('path')),
    {},
    selector,
  )
  return `data:image/png;base64,${await drawing.screenshot({ encoding: 'base64' })}`
}

/**
 * One bookmark in a fresh context, with no cached drawings or trial cookies.
 * @param {Browser} browser Chrome.
 * @param {string} origin Preview's origin.
 * @param {Row} row The character and stage.
 * @param {Bookmark} bookmark One side of one boundary.
 * @returns {Promise<[Cell, Cell]>} Crest then tile.
 */
export async function captureBookmark(browser, origin, row, bookmark) {
  await using context = await browser.createBrowserContext()
  await context.setCookie({
    name: 'opzs_ep',
    value: bookmark.value,
    url: origin,
    path: '/',
  })
  const page = await context.newPage()
  page.setDefaultTimeout(TIMEOUT)
  await page.emulateMediaFeatures([
    { name: 'prefers-reduced-motion', value: 'reduce' },
  ])
  await navigate(page, `${origin}/en/characters/${row.id}`)
  const crest = bookmark.open ? await drawingShot(page, `main ${ART}`) : null
  await navigate(page, `${origin}/en/characters`)
  // Featured characters also have crest links; only a tile's SVG is a direct child of its frame.
  const tile =
    bookmark.open ?
      await drawingShot(
        page,
        `a[href$="/characters/${row.id}"] > span > ${ART}`,
      )
    : null
  return [
    { label: `crest · ${bookmark.value}`, image: crest },
    { label: `tile · ${bookmark.value}`, image: tile },
  ]
}

/**
 * Build a labelled grid with screenshots at their captured sizes.
 * @param {Page} page An empty composition tab.
 * @param {{ label: string, cells: Cell[] }[]} rows Captured rows.
 * @param {string} file Output PNG.
 * @returns {Promise<void>} Once Chrome has written the PNG.
 */
export async function writeGrid(page, rows, file) {
  await page.setContent(gridHtml(rows))
  await page.evaluate(async () => {
    await Promise.all(
      [...globalThis.document.images].map((image) => image.decode()),
    )
  })
  await page.setViewport({ width: 1750, height: 1000, deviceScaleFactor: 1 })
  await page.screenshot({ path: file, fullPage: true })
}

/**
 * Escape archive labels before placing them in the composition document.
 * @param {string} text The label.
 * @returns {string} Safe HTML text.
 */
function escapeHtml(text) {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

/**
 * The grid document; images are PNG data URLs made by Chrome above.
 * @param {{ label: string, cells: Cell[] }[]} rows Captured rows.
 * @returns {string} Standalone HTML.
 */
export function gridHtml(rows) {
  const body = rows
    .map(
      (row) =>
        `<section><h2>${escapeHtml(row.label)}</h2><div class="cells">${row.cells
          .map((cell) => {
            const content =
              cell.image === null ?
                '<div class="missing">Not yet open</div>'
              : `<img src="${cell.image}" alt="">`
            return `<div class="cell"><div class="label">${escapeHtml(cell.label)}</div>${content}</div>`
          })
          .join('')}</div></section>`,
    )
    .join('')
  return `<!doctype html><html><head><style>
    body { margin:0; padding:16px; background:#151b22; color:#eee; font:13px sans-serif }
    section { margin-bottom:16px } h2 { font-size:15px }
    .cells { display:grid; grid-template-columns:repeat(8,207px); gap:8px }
    .cell { min-height:270px; padding:8px; background:#202831; text-align:center; box-sizing:border-box }
    .label { margin-bottom:12px } img { max-width:100%; height:auto }
    .missing { padding-top:70px; color:#bbb }
  </style></head><body>${body}</body></html>`
}

/**
 * Capture stages in order, then arrange crests before tiles in each row.
 * @param {Browser} browser Chrome.
 * @param {string} origin Preview's origin.
 * @param {Row[]} rows Requested stages.
 * @param {string} file Output PNG.
 * @returns {Promise<void>} Once the grid is written.
 */
async function captureRows(browser, origin, rows, file) {
  const captured = []
  for (const row of rows) {
    const pairs = []
    for (const bookmark of row.bookmarks) {
      pairs.push(await captureBookmark(browser, origin, row, bookmark))
    }
    captured.push({
      label: row.label,
      cells: [
        ...pairs.map(([crest]) => crest),
        ...pairs.map(([, tile]) => tile),
      ],
    })
  }
  const page = await browser.newPage()
  await writeGrid(page, captured, file)
}

/**
 * Run the command, releasing owned resources even when launch or capture fails.
 * @param {string[]} args CLI arguments.
 * @returns {Promise<string>} Output file.
 */
export async function artShots(args) {
  const rows = await shotRows(args)
  // fallow-ignore-next-line security-sink -- ROOT is this script's repository; every remaining path component is a literal
  if (!existsSync(path.join(ROOT, 'dist', 'server', 'server.js'))) {
    throw new Error('Built site missing. Run npm run build before art:shots.')
  }
  const executablePath = chromePath()
  const server = await preview({
    root: ROOT,
    logLevel: 'error',
    preview: { host: '127.0.0.1', port: 0, open: false },
  })
  return runCapture(server, executablePath, rows, args)
}

/**
 * Capture with a live preview, closing it even if Chrome fails to launch.
 * @param {import('vite').PreviewServer} server Owned preview server.
 * @param {string} executablePath Installed Chrome.
 * @param {Row[]} rows Stages.
 * @param {string[]} ids Validated ids for the filename.
 * @returns {Promise<string>} Output file.
 */
async function runCapture(server, executablePath, rows, ids) {
  const controller = new AbortController()
  const stop = () => {
    controller.abort()
    process.exitCode = 130
  }
  process.on('SIGINT', stop)
  process.on('SIGTERM', stop)
  try {
    await using browser = await launch({
      executablePath,
      headless: true,
      defaultViewport: VIEWPORT,
      signal: controller.signal,
      // Our abort handler lets the preview's finally block run, too.
      handleSIGINT: false,
      handleSIGTERM: false,
    })
    return await saveShots(browser, server, rows, ids)
  } finally {
    process.removeListener('SIGINT', stop)
    process.removeListener('SIGTERM', stop)
    await server.close()
  }
}

/**
 * Write evidence from a preview that has bound an actual ephemeral port.
 * @param {Browser} browser Chrome.
 * @param {import('vite').PreviewServer} server Preview.
 * @param {Row[]} rows Stages.
 * @param {string[]} ids Validated ids.
 * @returns {Promise<string>} Output file.
 */
async function saveShots(browser, server, rows, ids) {
  const address = server.httpServer.address()
  if (address === null || typeof address === 'string') {
    throw new Error('Preview did not bind a TCP port')
  }
  // fallow-ignore-next-line security-sink -- a constant directory under this script's repository
  const directory = path.join(ROOT, '.gate', 'shots')
  mkdirSync(directory, { recursive: true })
  // fallow-ignore-next-line security-sink -- shotRows rejects every id not in the archive before capture starts
  const file = path.join(directory, `${ids.join('+')}.png`)
  await captureRows(browser, `http://127.0.0.1:${address.port}`, rows, file)
  return file
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  try {
    // fallow-ignore-next-line security-sink -- prints only the local evidence path, formed from validated archive ids
    console.log(await artShots(process.argv.slice(2)))
  } catch (error) {
    console.error(Error.isError(error) ? error.message : String(error))
    process.exitCode ||= 1
  }
}
