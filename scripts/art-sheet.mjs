// Renders line drawings to a sheet you can look at without running the site:
// each drawing at the size of the crest on a character page and at the size
// of a tile in a list, on the card surface, in the site's own colours.
//
//   npm run art:sheet -- franky                 every stage of a record
//   npm run art:sheet -- franky --draft d.ts    plus the drafts in d.ts
//   npm run art:sheet -- --saga water-seven     every first drawing of a saga
//   npm run art:sheet -- --kind place           every first drawing of a kind
//
// A draft module default-exports `Record<string, Stroke[]>` and may import
// `~/lib/svg/primitives`, wherever it lives. The sheets go to `.gate/art/`
// (or `--out`) as SVG, and as PNG when `rsvg-convert` (librsvg) is on PATH.
// librsvg paints every `oklch()` black, so the colours are read from the
// tokens and converted to hex here; and it is not trusted with
// `non-scaling-stroke`, so each placement scales its own stroke back to 2px.
import { execFileSync } from 'node:child_process'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { pathToFileURL } from 'node:url'
import { parseArgs } from 'node:util'

import { importArchive, ROOT } from './archive-loader.mjs'

/** @typedef {{ d: string, dashed?: boolean, role?: 'accent' | 'ambient' | 'soft', transform?: string }} Stroke */
/** @typedef {{ label: string, note: string, strokes: Stroke[], tint: string }} Cell */
/** @typedef {Record<string, string>} Palette */

/** The box every drawing is composed in (`ART_VIEWBOX`). */
const ART = { width: 160, height: 200 }
/** The drawing inside a 366px crest (`CREST_ART_BOX`), and inside a tile. */
const CREST = { width: 183, height: 229 }
const TILE = { width: 56, height: 70 }
const PEN = 2
const DASH = [3, 6]
const GAP = 12
const LABEL = 24
const CELL = {
  width: CREST.width + 2 * GAP,
  height: LABEL + CREST.height + GAP + TILE.height + GAP,
}
const PAGE = 24
const COLUMNS = 6
/** Few enough cells to look at closely are rendered at twice the size. */
const CLOSE_UP = 8

const SRGB_LINEAR_KNEE = 0.0031308
const SRGB_GAMMA = 2.4

/**
 * One linear-light channel as an sRGB byte.
 * @param {number} linear The channel, 0 to 1 when in gamut.
 * @returns {string} Two hex digits.
 */
function byte(linear) {
  const clamped = Math.min(1, Math.max(0, linear))
  const encoded =
    clamped <= SRGB_LINEAR_KNEE ?
      12.92 * clamped
    : 1.055 * clamped ** (1 / SRGB_GAMMA) - 0.055
  return Math.round(encoded * 255)
    .toString(16)
    .padStart(2, '0')
}

/**
 * A CSS `oklch(L% C H)` colour as sRGB hex (Björn Ottosson's OKLab matrices).
 * Out-of-gamut channels are clipped; an alpha, if any, is ignored.
 * @param {string} css The colour, e.g. `oklch(83% 0.13 212)`.
 * @returns {string} The colour, e.g. `#5fd3f3`.
 */
export function oklchToHex(css) {
  const [l, c, h] = css
    .slice(css.indexOf('(') + 1, css.indexOf(')'))
    .replaceAll('%', '')
    .split(' ')
    .map(Number)
  const lightness = l / 100
  const a = c * Math.cos((h * Math.PI) / 180)
  const b = c * Math.sin((h * Math.PI) / 180)
  const lms = [
    lightness + 0.3963377774 * a + 0.2158037573 * b,
    lightness - 0.1055613458 * a - 0.0638541728 * b,
    lightness - 0.0894841775 * a - 1.291485548 * b,
  ].map((value) => value ** 3)
  const [L, M, S] = lms
  const rgb = [
    4.0767416621 * L - 3.3077115913 * M + 0.2309699292 * S,
    -1.2684380046 * L + 2.6097574011 * M - 0.3413193965 * S,
    -0.0041960863 * L - 0.7034186147 * M + 1.707614701 * S,
  ]
  return `#${rgb.map((channel) => byte(channel)).join('')}`
}

/**
 * Every `name: 'oklch(…)',` line in the tokens file, as hex by name. The tints and
 * the colours share one namespace here, which holds because no tint is named
 * like a colour.
 * @param {string} source The text of `src/styles/tokens.stylex.ts`.
 * @returns {Palette} The colours by token name.
 */
export function parseTokens(source) {
  const declarations = source
    .split('\n')
    .map((line) => line.trim().split(': '))
    .filter(([, value]) => value?.startsWith("'oklch(") === true)
  return Object.fromEntries(
    declarations.map(([name, value]) => [name, oklchToHex(value)]),
  )
}

/**
 * The colour a stroke is drawn in, the way `ChartArt` styles it.
 * @param {Stroke} stroke The stroke.
 * @param {Palette} palette The colours.
 * @param {string} tint The drawing's tint id; `ivory` is the second ink.
 * @returns {string} A hex colour.
 */
function inkOf(stroke, palette, tint) {
  if (stroke.role === 'accent') {
    return palette[tint] ?? palette.ink2
  }
  return stroke.role === 'ambient' ? palette.rule2 : palette.ink2
}

/**
 * One drawing placed in a box, with its pen scaled back to 2px.
 * @param {Cell} cell The drawing.
 * @param {Palette} palette The colours.
 * @param {{ x: number, y: number, width: number, height: number }} box Where.
 * @returns {string} An `<svg>` element.
 */
export function drawingSvg(cell, palette, box) {
  const unit = ART.width / box.width
  const paths = cell.strokes.map((stroke) => {
    const transform =
      stroke.transform === undefined ? '' : ` transform="${stroke.transform}"`
    const dash =
      stroke.dashed === true ?
        ` stroke-dasharray="${DASH.map((step) => step * unit).join(' ')}"`
      : ''
    return `<path d="${stroke.d}" stroke="${inkOf(stroke, palette, cell.tint)}"${transform}${dash}/>`
  })
  return [
    `<svg x="${box.x}" y="${box.y}" width="${box.width}" height="${box.height}" viewBox="0 0 ${ART.width} ${ART.height}" overflow="visible">`,
    `<g fill="none" stroke-width="${PEN * unit}" stroke-linecap="round" stroke-linejoin="round">`,
    ...paths,
    '</g></svg>',
  ].join('')
}

/**
 * Text safe to put inside an SVG element.
 * @param {string} text The text.
 * @returns {string} The text with markup characters escaped.
 */
const escape = (text) =>
  text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

/**
 * One cell: the label, the drawing at crest size, and at tile size beside its
 * stroke count.
 * @param {Cell} cell The drawing.
 * @param {Palette} palette The colours.
 * @param {{ x: number, y: number }} at The cell's top left corner.
 * @returns {string} The cell's elements.
 */
export function cellSvg(cell, palette, at) {
  const left = at.x + GAP
  const tileTop = at.y + LABEL + CREST.height + GAP
  return [
    `<rect x="${at.x}" y="${at.y}" width="${CELL.width}" height="${CELL.height}" fill="${palette.paper2}"/>`,
    `<text x="${left}" y="${at.y + 16}" fill="${palette.ink}" font-size="12" font-family="sans-serif">${escape(cell.label)}</text>`,
    drawingSvg(cell, palette, { x: left, y: at.y + LABEL, ...CREST }),
    drawingSvg(cell, palette, { x: left, y: tileTop, ...TILE }),
    `<text x="${left + TILE.width + GAP}" y="${tileTop + 16}" fill="${palette.muted}" font-size="11" font-family="sans-serif">${escape(cell.note)}</text>`,
    `<text x="${left + TILE.width + GAP}" y="${tileTop + 32}" fill="${palette.muted}" font-size="11" font-family="sans-serif">${cell.strokes.length} strokes</text>`,
  ].join('')
}

/**
 * A whole sheet: the cells in rows on the page colour.
 * @param {Cell[]} cells The drawings, in reading order.
 * @param {Palette} palette The colours.
 * @returns {string} A standalone SVG document.
 */
export function sheetSvg(cells, palette) {
  const columns = Math.min(COLUMNS, cells.length)
  const rows = Math.ceil(cells.length / columns)
  const width = columns * (CELL.width + GAP) + GAP
  const height = rows * (CELL.height + GAP) + GAP
  const body = cells.map((cell, index) => {
    return cellSvg(cell, palette, {
      x: GAP + (index % columns) * (CELL.width + GAP),
      y: GAP + Math.floor(index / columns) * (CELL.height + GAP),
    })
  })
  return [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`,
    `<rect width="${width}" height="${height}" fill="${palette.paper}"/>`,
    ...body,
    '</svg>',
  ].join('\n')
}

/**
 * The command line, read.
 * @param {string[]} args The arguments after the script.
 * @returns {{ ids: string[], draft?: string, saga?: string, kind?: string, out: string }} What to draw, and where.
 */
export function readArgs(args) {
  const { positionals, values } = parseArgs({
    args,
    allowPositionals: true,
    options: {
      draft: { type: 'string' },
      kind: { type: 'string' },
      // fallow-ignore-next-line security-sink -- a constant default under the repository
      out: { type: 'string', default: path.join(ROOT, '.gate', 'art') },
      saga: { type: 'string' },
    },
  })
  return { ...values, ids: positionals }
}

/**
 * Every stage of one record: the first drawing, then each redrawing.
 * @param {{ id: string, revealedAtEpisode: number, visual: { tint: string } }} entity The record.
 * @param {{ DRAWINGS: Record<string, Stroke[]>, REDRAWINGS: Record<string, { episode: number, chapter?: number, value: Stroke[] }[]> }} art The drawings.
 * @returns {Cell[]} One cell per stage.
 */
export function stagesOf(entity, art) {
  const { tint } = entity.visual
  const later = (art.REDRAWINGS[entity.id] ?? []).map((entry) => {
    const chapter = entry.chapter === undefined ? '' : ` · ch ${entry.chapter}`
    return {
      label: entity.id,
      note: `ep ${entry.episode}${chapter}`,
      strokes: entry.value,
      tint,
    }
  })
  return [
    {
      label: entity.id,
      note: `ep ${entity.revealedAtEpisode}`,
      strokes: art.DRAWINGS[entity.id] ?? [],
      tint,
    },
    ...later,
  ]
}

/**
 * The ids a saga module draws first, in the order the module files them.
 * @param {string} saga The module's file name, e.g. `water-seven`.
 * @returns {Promise<string[]>} The ids.
 */
async function idsOfSaga(saga) {
  const module = await importArchive(`data/art/${saga}.ts`)
  const drawings = Object.entries(module).find(([name]) => name.endsWith('Art'))
  if (drawings === undefined) {
    throw new Error(`src/data/art/${saga}.ts exports no …Art drawings`)
  }
  return Object.keys(drawings[1])
}

/**
 * The cells the command line asks for.
 * @param {ReturnType<typeof readArgs>} options The command line.
 * @returns {Promise<{ name: string, cells: Cell[] }>} The sheet's name and cells.
 */
export async function cellsFor(options) {
  const art = await importArchive('data/art/index.ts')
  const { entities, getEntity } = await importArchive('data/entities.ts')
  if (options.saga !== undefined || options.kind !== undefined) {
    const ids =
      options.saga === undefined ?
        entities
          .filter((entity) => entity.kind === options.kind)
          .map((entity) => entity.id)
      : await idsOfSaga(options.saga)
    return {
      name: options.saga ?? options.kind,
      cells: ids.map((id) => stagesOf(getEntity(id), art)[0]),
    }
  }
  const stages = options.ids.flatMap((id) => {
    const entity = getEntity(id)
    if (entity === undefined) {
      throw new Error(`no record has the id ${id}`)
    }
    return stagesOf(entity, art)
  })
  return {
    name: options.ids.join('+'),
    cells: [...stages, ...(await draftsOf(options.draft, stages[0]?.tint))],
  }
}

/**
 * The drawings of a draft module, as cells in the tint of the record drawn.
 * @param {string | undefined} file The module, or nothing.
 * @param {string | undefined} tint The tint to draw them in.
 * @returns {Promise<Cell[]>} One cell per draft.
 */
async function draftsOf(file, tint = 'ivory') {
  if (file === undefined) {
    return []
  }
  // fallow-ignore-next-line security-sink -- a local CLI: the draft module is one the person running it chose to import
  const module = await import(pathToFileURL(path.resolve(file)).href)
  return Object.entries(module.default).map(([key, strokes]) => {
    const label = `draft: ${key}`
    return { label, note: 'draft', strokes, tint }
  })
}

/**
 * Writes one page as SVG, and as PNG when librsvg is there to render it.
 * @param {string} file The path without its extension.
 * @param {string} svg The page.
 * @param {number} zoom How many pixels per SVG unit the PNG gets.
 * @returns {string} The path of what can be looked at.
 */
function writePage(file, svg, zoom) {
  writeFileSync(`${file}.svg`, svg)
  try {
    execFileSync('rsvg-convert', [
      '-z',
      String(zoom),
      '-o',
      `${file}.png`,
      `${file}.svg`,
    ])
    return `${file}.png`
  } catch {
    return `${file}.svg (no rsvg-convert on PATH, so no PNG)`
  }
}

/**
 * Writes the cells as pages of a sheet, and says where each one went.
 * @param {{ name: string, cells: Cell[] }} sheet The sheet's name and cells.
 * @param {Palette} palette The colours.
 * @param {string} out The folder to write into.
 * @returns {string[]} One line per page written.
 */
export function writeSheets({ name, cells }, palette, out) {
  if (cells.length === 0) {
    throw new Error(
      'Nothing to draw: name record ids, or pass --saga or --kind.',
    )
  }
  const pages = Math.ceil(cells.length / PAGE)
  const zoom = cells.length <= CLOSE_UP ? 2 : 1
  mkdirSync(out, { recursive: true })
  return Array.from({ length: pages }, (_, page) => {
    const suffix = pages === 1 ? '' : `-${page + 1}`
    return writePage(
      // fallow-ignore-next-line security-sink -- a local CLI: the output folder is the one the person running it named
      path.join(out, `${name}${suffix}`),
      sheetSvg(cells.slice(page * PAGE, (page + 1) * PAGE), palette),
      zoom,
    )
  })
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  const options = readArgs(process.argv.slice(2))
  const palette = parseTokens(
    // fallow-ignore-next-line security-sink -- a constant path under the repository
    readFileSync(path.join(ROOT, 'src', 'styles', 'tokens.stylex.ts'), 'utf8'),
  )
  const sheet = await cellsFor(options)
  for (const line of writeSheets(sheet, palette, options.out)) {
    console.log(line)
  }
}
