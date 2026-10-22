import { describe, expect, it } from 'vitest'

import { DRAWINGS } from '~/data/art'
import { fruitRedrawn } from '~/data/art/fruits'
import { gateOf } from '~/data/chapter-table'
import { getFruit } from '~/data/fruits'
import type { Entity } from '~/data/types'
import type { Bookmark } from '~/lib/progress/episode'
import { locateEpisode } from '~/lib/progress/seasons'
import type { FruitDetail } from '~/lib/view/records'
import { leaksIn, saysNothing } from '~/test/fog'

import { fruitPage } from './fruitPage.server'

/**
 * The drawings a fruit's page lets the reader switch between: only those
 * reached, each on the later of its own gate and the fruit's, in either unit,
 * and none at all while there is only one.
 */

const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })
const ch = (chapter: number): Bookmark => ({ mode: 'chapter', chapter })

/** An absolute episode as a season viewer's bookmark. */
function season(absolute: number): Bookmark {
  const at = locateEpisode(absolute)
  if (at === null) {
    throw new Error(`no season holds episode ${String(absolute)}`)
  }

  return { mode: 'season', ...at }
}

function detailOf(id: string, bookmark: Bookmark): FruitDetail {
  const page = fruitPage(id, bookmark, 'en')
  if (page === undefined) {
    throw new Error(`no fruit ${id}`)
  }

  return page.detail
}

function fruitOf(id: string): Entity {
  const entity = getFruit(id)
  if (entity === undefined) {
    throw new Error(`no fruit ${id}`)
  }

  return entity
}

/** Every redrawn fruit with its one redrawing and the gate that opens it. */
const REDRAWN = Object.entries(fruitRedrawn).map(([id, [entry]]) => {
  if (entry === undefined) {
    throw new Error(`${id} files no redrawing`)
  }

  return { id, entry, gate: gateOf(entry, fruitOf(id)) }
})

describe('a fruit’s drawings', () => {
  it.each(REDRAWN)(
    'switches $id only from its redrawing, in every unit',
    ({ entry, gate, id }) => {
      const first = DRAWINGS[fruitOf(id).visual.art]
      const before = [
        ep(gate.revealedAtEpisode - 1),
        season(gate.revealedAtEpisode - 1),
        ch(gate.revealedAtChapter - 1),
      ]
      const at = [
        ep(gate.revealedAtEpisode),
        season(gate.revealedAtEpisode),
        ch(gate.revealedAtChapter),
      ]

      for (const bookmark of before) {
        const detail = detailOf(id, bookmark)

        expect(detail.drawings, JSON.stringify(bookmark)).toStrictEqual([])

        saysNothing(detail, bookmark)
      }
      for (const bookmark of at) {
        const detail = detailOf(id, bookmark)

        expect(detail.drawings, JSON.stringify(bookmark)).toStrictEqual([
          { look: 'power', strokes: first },
          { look: entry.look, strokes: entry.value },
        ])
        // The last is the drawing the stage holds, the same strokes.
        expect(
          detail.slot.open ? detail.slot.record.visual.strokes : undefined,
        ).toBe(entry.value)
      }
    },
  )

  it('sends nothing to switch between under fog', () => {
    // The Op-Op Fruit is first named at 590; the bookmark is long before.
    expect(detailOf('op-op-fruit', ep(100)).drawings).toStrictEqual([])
  })

  it('sends one drawing for a fruit never drawn again', () => {
    expect(detailOf('gum-gum-fruit', ep(1100)).drawings).toStrictEqual([])
  })

  it('is read by the spoiler sweep: a drawing slipped in early fails it', () => {
    // The Flame-Flame Fruit is open at 628 and given its symbolic replacement at 629.
    const real = fruitRedrawn['flame-flame-fruit']?.[0]?.value ?? []
    const detail = detailOf('flame-flame-fruit', ep(628))
    const slipped = {
      ...detail,
      drawings: [{ look: 'symbolic', strokes: real }],
    }

    saysNothing(detail, ep(628))

    expect(leaksIn(slipped, ep(628))).toStrictEqual(['flame-flame-fruit'])
    expect(leaksIn(slipped, ep(629))).toStrictEqual([])
  })
})
