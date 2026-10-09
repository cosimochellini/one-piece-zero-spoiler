// @vitest-environment node
//
// The suite-wide environment is jsdom for the React components. This module is
// plain Node, so a DOM here would only cost startup time.
import { existsSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { describe, expect, it } from 'vitest'

import { ROOT } from './archive-loader.mjs'
import {
  cellsFor,
  cellSvg,
  drawingSvg,
  oklchToHex,
  parseTokens,
  readArgs,
  scaleOf,
  sheetSvg,
  stagesOf,
  writeSheets,
} from './art-sheet.mjs'

const palette = {
  cyan: '#00ccff',
  ink: '#eeeeee',
  ink2: '#cccccc',
  muted: '#aaaaaa',
  paper: '#000000',
  paper2: '#111111',
  rule2: '#666666',
}
const cell = {
  label: 'franky',
  note: 'ep 235',
  strokes: [
    { d: 'M0 0 L10 10' },
    { d: 'M1 1 L9 9', role: 'accent' },
    { d: 'M2 2 L8 8', role: 'ambient', dashed: true },
    { d: 'M3 3 L7 7', role: 'soft', transform: 'rotate(90 80 100)' },
  ],
  tint: 'cyan',
}

describe('the colours', () => {
  it('turns oklch into sRGB hex', () => {
    expect(oklchToHex('oklch(0% 0 0)')).toBe('#000000')
    expect(oklchToHex('oklch(100% 0 0)')).toBe('#ffffff')
    expect(oklchToHex('oklch(62.8% 0.2577 29.23)')).toBe('#ff0000')
  })

  it('reads every tint and the inks from the tokens file', () => {
    const tokens = parseTokens(
      readFileSync(path.join(ROOT, 'src/styles/tokens.stylex.ts'), 'utf8'),
    )

    const tints = [
      ...'red vermilion orange ocher yellow acid green teal cyan azure'.split(
        ' ',
      ),
      ...'blue ice lavender violet magenta pink flamingo sand wine'.split(' '),
    ]

    for (const name of [
      'paper',
      'paper2',
      'ink',
      'ink2',
      'muted',
      'rule2',
      ...tints,
    ]) {
      expect(tokens[name], name).toMatch(/^#[\da-f]{6}$/u)
    }
  })
})

describe('a drawing placed on the sheet', () => {
  const svg = drawingSvg(cell, palette, { x: 0, y: 0, width: 80, height: 100 })

  it('draws one path per stroke, in the colour of its role', () => {
    expect(svg.match(/<path /gu)).toHaveLength(4)
    expect(svg).toContain('d="M1 1 L9 9" stroke="#00ccff"')
    expect(svg).toContain('d="M2 2 L8 8" stroke="#666666"')
    expect(svg).toContain('d="M0 0 L10 10" stroke="#cccccc"')
    expect(svg).toContain('d="M3 3 L7 7" stroke="#cccccc"')
    expect(svg).toContain('transform="rotate(90 80 100)"')
  })

  it('keeps the pen and the dash at 2px whatever the size', () => {
    expect(svg).toContain('stroke-width="4"')
    expect(svg).toContain('stroke-dasharray="6 12"')
  })

  it('keeps a scaled stroke at 2px too, as non-scaling-stroke does', () => {
    const scaled = drawingSvg(
      {
        ...cell,
        strokes: [
          {
            d: 'M0 0 L9 9',
            transform: 'translate(16 44) scale(0.8)',
            dashed: true,
          },
        ],
      },
      palette,
      { x: 0, y: 0, width: 80, height: 100 },
    )

    expect(scaled).toContain('stroke-width="5"')
    expect(scaled).toContain('stroke-dasharray="7.5 15"')
    expect(scaleOf('translate(160 0) scale(-1 1)')).toBe(1)
    expect(scaleOf('rotate(20 80 100) scale(2) scale(1.5)')).toBe(3)
    expect(scaleOf()).toBe(1)
  })

  it('clips the drawing to its box, as the crest and the tile do', () => {
    expect(svg).not.toContain('overflow')
  })

  it('falls back to the second ink for a tint the palette lacks', () => {
    expect(
      drawingSvg({ ...cell, tint: 'ivory' }, palette, {
        x: 0,
        y: 0,
        width: 160,
        height: 200,
      }),
    ).toContain('d="M1 1 L9 9" stroke="#cccccc"')
  })
})

describe('the sheet', () => {
  it('labels a cell and counts its strokes', () => {
    const svg = cellSvg({ ...cell, label: 'a<b' }, palette, { x: 0, y: 0 })

    expect(svg).toContain('a&lt;b')
    expect(svg).toContain('4 strokes')
    expect(svg).toContain('ep 235')
  })

  it('lays the cells out in rows of six at most', () => {
    const one = sheetSvg([cell], palette)
    const seven = sheetSvg(
      Array.from({ length: 7 }, () => cell),
      palette,
    )

    expect(one).toMatch(
      /^<svg xmlns="http:\/\/www.w3.org\/2000\/svg" width="231" height="371"/u,
    )
    expect(seven).toMatch(/width="1326" height="730"/u)
  })
})

describe('the stages of a record', () => {
  it('lists the first drawing, then every redrawing with its episode', () => {
    const entity = { id: 'x', revealedAtEpisode: 3, visual: { tint: 'cyan' } }
    const first = [{ d: 'M0 0' }]
    const later = [{ d: 'M1 1' }]
    const stages = stagesOf(entity, {
      DRAWINGS: { x: first },
      REDRAWINGS: {
        x: [
          { episode: 9, chapter: 12, value: later },
          { episode: 10, value: later },
        ],
      },
    })

    expect(stages.map((stage) => stage.note)).toStrictEqual([
      'ep 3',
      'ep 9 · ch 12',
      'ep 10',
    ])
    expect(stages[0].strokes).toBe(first)
  })
})

describe('the command line', () => {
  it('reads ids, a draft, a saga, a kind and where to write', () => {
    expect(
      readArgs(['franky', 'tom', '--draft', 'd.ts', '--out', 'o']),
    ).toStrictEqual({ draft: 'd.ts', ids: ['franky', 'tom'], out: 'o' })
    expect(readArgs(['--saga', 'water-seven']).saga).toBe('water-seven')
    expect(readArgs(['--kind', 'place']).out).toBe(
      path.join(ROOT, '.gate', 'art'),
    )
  })
})

// The first `cellsFor` imports the whole archive. Plain Node does that in
// about 130ms, but under Vitest every module goes through the one Vite server
// that all test files share. That took 1s with no load and up to 24s with
// several checks running at once (#279), so the 5s default is too short.
describe('what the command line asks for', { timeout: 60_000 }, () => {
  const out = 'unused'

  it('gives every stage of a record, then the drafts in its tint', async () => {
    const folder = mkdtempSync(path.join(tmpdir(), 'art-draft-'))
    const draft = path.join(folder, 'draft.mjs')
    writeFileSync(draft, "export default { arm: [{ d: 'M0 0 L1 1' }] }")
    const { name, cells } = await cellsFor({ draft, ids: ['franky'], out })

    expect(name).toBe('franky')
    expect(cells.map((stage) => stage.note)).toStrictEqual([
      'ep 235',
      'ep 517 · ch 598',
      'ep 978 · ch 975',
      'ep 1086 · ch 1058',
      'ep 1165 · ch 1135',
      'draft',
    ])
    expect(cells.at(-1)).toMatchObject({ label: 'draft: arm', tint: 'cyan' })
  })

  it('gives the first drawing of every record in a saga or of a kind', async () => {
    const saga = await cellsFor({ ids: [], out, saga: 'water-seven' })
    const ships = await cellsFor({ ids: [], kind: 'ship', out })

    expect(saga.cells.map((cell) => cell.label)).toContain('franky')
    expect(saga.cells.find((cell) => cell.label === 'franky')?.note).toBe(
      'ep 235',
    )
    expect(ships.cells.map((cell) => cell.label)).toStrictEqual([
      'going-merry',
      'thousand-sunny',
    ])
  })

  it('names a sheet of drafts alone, so it lands inside the folder', async () => {
    const folder = mkdtempSync(path.join(tmpdir(), 'art-draft-'))
    const draft = path.join(folder, 'alone.mjs')
    writeFileSync(draft, "export default { arm: [{ d: 'M0 0 L1 1' }] }")

    const sheet = await cellsFor({ draft, ids: [], out })

    expect(sheet.name).toBe('drafts')
  })

  it('refuses an id no record has, and a saga with no drawings', async () => {
    await expect(cellsFor({ ids: ['nobody'], out })).rejects.toThrow(
      'no record has the id nobody',
    )
    await expect(cellsFor({ ids: [], out, saga: 'stroke' })).rejects.toThrow(
      'exports no',
    )
  })
})

// Each page is turned into a PNG by running rsvg-convert, which took up to
// 6.5s under load (#279).
describe('the pages written', { timeout: 20_000 }, () => {
  it('writes one page per 24 cells, and refuses an empty sheet', () => {
    const out = mkdtempSync(path.join(tmpdir(), 'art-sheet-'))
    const cells = Array.from({ length: 25 }, () => cell)
    const written = writeSheets({ cells, name: 'x' }, palette, out)

    expect(written).toHaveLength(2)
    expect(existsSync(path.join(out, 'x-1.svg'))).toBe(true)
    expect(existsSync(path.join(out, 'x-2.svg'))).toBe(true)
    expect(() => writeSheets({ cells: [], name: 'x' }, palette, out)).toThrow(
      'Nothing to draw',
    )
  })
})
