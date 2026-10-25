import { describe, expect, it } from 'vitest'

import { reveal } from '~/data/reveal'
import { fruits } from '~/data/series/one-piece/fruits'
import type { Bookmark } from '~/lib/progress/episode'
import { ONE_PIECE_BOOKMARK } from '~/lib/progress/series'
import type { FruitDetail } from '~/lib/view/records'
import { opFruitPage as fruitPage, opSagaOf as sagaOf } from '~/test/archive'

/**
 * A fruit's history and the rail of its saga: what the
 * stage of a fruit's page may say at one bookmark, and nothing past it.
 */

const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })
const ch = (chapter: number): Bookmark => ({ mode: 'chapter', chapter })

function detailOf(id: string, bookmark: Bookmark): FruitDetail {
  const page = fruitPage(id, bookmark, 'en')
  if (page === undefined) {
    throw new Error(`no fruit ${id}`)
  }

  return page.detail
}

/** The history as lines: the event, who, and the mark in the reader's unit. */
function historyOf(id: string, bookmark: Bookmark): string[] {
  const at = reveal(bookmark, ONE_PIECE_BOOKMARK)

  return detailOf(id, bookmark).history.map((entry) =>
    [entry.event, entry.who?.id, at.threshold(entry)]
      .filter((part) => part !== undefined)
      .join(' '),
  )
}

describe('a fruit’s history', () => {
  it('names the Gum-Gum Fruit and Luffy eating it at episode 1', () => {
    expect(historyOf('gum-gum-fruit', ep(1))).toStrictEqual([
      'named 1',
      'eaten monkey-d-luffy 1',
    ])
    expect(historyOf('gum-gum-fruit', ch(1))).toStrictEqual([
      'named 1',
      'eaten monkey-d-luffy 1',
    ])
  })

  it('reads a presumed death at the bookmark only, and drops it once reversed', () => {
    expect(historyOf('gum-gum-fruit', ep(1070))).toContain(
      'presumed-dead monkey-d-luffy 1070',
    )
    expect(historyOf('gum-gum-fruit', ep(1071))).toStrictEqual([
      'named 1',
      'eaten monkey-d-luffy 1',
    ])
    expect(historyOf('gum-gum-fruit', ch(1043))).toContain(
      'presumed-dead monkey-d-luffy 1043',
    )
    expect(historyOf('gum-gum-fruit', ch(1044))).toHaveLength(2)
  })

  it('tells of Ace eating the Flame-Flame Fruit, then of his death once reached', () => {
    expect(historyOf('flame-flame-fruit', ep(480))).toStrictEqual([
      'named 95',
      'eaten portgas-d-ace 95',
    ])
    // One episode before the status entry, and at it.
    expect(historyOf('flame-flame-fruit', ep(482))).toHaveLength(2)
    expect(historyOf('flame-flame-fruit', ep(483))).toStrictEqual([
      'named 95',
      'eaten portgas-d-ace 95',
      'deceased portgas-d-ace 483',
    ])
    expect(historyOf('flame-flame-fruit', ep(650))).toStrictEqual([
      'named 95',
      'eaten portgas-d-ace 95',
      'deceased portgas-d-ace 483',
    ])
    expect(historyOf('flame-flame-fruit', ch(573))).toHaveLength(2)
    expect(historyOf('flame-flame-fruit', ch(574))).toContain(
      'deceased portgas-d-ace 574',
    )
  })

  it('adds Sabo at the episode that says he ate it, and not his old presumed death', () => {
    expect(historyOf('flame-flame-fruit', ep(677))).toHaveLength(3)
    expect(historyOf('flame-flame-fruit', ep(678))).toStrictEqual([
      'named 95',
      'eaten portgas-d-ace 95',
      'deceased portgas-d-ace 483',
      'eaten sabo 678',
    ])
  })

  it('never has an eater die before they eat it', () => {
    // Carmel's death and her fruit are both told at chapter 868: the death is
    // dated at the eating, and neither is there a chapter earlier.
    expect(historyOf('soul-soul-fruit', ch(867)).join(',')).not.toContain(
      'carmel',
    )
    expect(historyOf('soul-soul-fruit', ch(868))).toStrictEqual(
      expect.arrayContaining(['eaten carmel 868', 'deceased carmel 868']),
    )

    const lines = historyOf('soul-soul-fruit', ch(868))

    expect(lines.indexOf('eaten carmel 868')).toBeLessThan(
      lines.indexOf('deceased carmel 868'),
    )
  })

  it('opens every entry at its own gate, oldest first', () => {
    for (const bookmark of [ep(300), ep(800), ch(900), ep(1200)]) {
      const at = reveal(bookmark, ONE_PIECE_BOOKMARK)
      for (const fruit of fruits) {
        const { history } = detailOf(fruit.id, bookmark)
        const marks = history.map((entry) => at.threshold(entry))

        expect(history.every((entry) => at.sees(entry))).toBe(true)
        expect(marks).toStrictEqual(marks.toSorted((a, b) => a - b))
      }
    }
  })

  it('is empty under fog, with no saga named', () => {
    const detail = detailOf('dark-dark-fruit', ep(100))

    expect(detail.history).toStrictEqual([])
    expect(detail.saga).toBeNull()
  })

  it('names the saga the story first names the fruit in', () => {
    expect(detailOf('flame-flame-fruit', ep(650)).saga).toBe('Alabasta Saga')
  })
})

describe('the fruit page payload', () => {
  it('omits previous and next fruits, open and under fog in both units', () => {
    for (const bookmark of [ep(1), ep(1150), ch(1), ch(1100)]) {
      const detail = detailOf('heal-heal-fruit', bookmark)

      expect(detail).not.toHaveProperty('previous')
      expect(detail).not.toHaveProperty('next')
    }
  })
})

describe('the rail of the same saga', () => {
  it('holds the nearest open fruits of the saga, never this one', () => {
    const rail = detailOf('op-op-fruit', ep(1200)).sagaRail
    const shown = rail.flatMap((slot) => (slot.open ? [slot.record] : []))
    const saga = sagaOf('episode', 590)

    expect(shown.length).toBeGreaterThanOrEqual(2)
    expect(shown.length).toBeLessThanOrEqual(4)
    expect(shown).toHaveLength(rail.length)
    expect(shown.map(({ id }) => id)).not.toContain('op-op-fruit')

    for (const fruit of shown) {
      expect(sagaOf('episode', fruit.revealedAtEpisode)).toBe(saga)
    }
  })

  it('holds only open fruits, and is empty under fog', () => {
    for (const bookmark of [ep(100), ep(700), ch(900)]) {
      const at = reveal(bookmark, ONE_PIECE_BOOKMARK)
      const rails = fruits.map((fruit) => detailOf(fruit.id, bookmark).sagaRail)
      const covered = fruits.flatMap((fruit, index) =>
        at.sees(fruit) ? [] : [rails[index]],
      )

      expect(
        rails.flat().every((slot) => slot.open && at.sees(slot.record)),
      ).toBe(true)
      expect(covered.every((rail) => rail?.length === 0)).toBe(true)
    }
  })

  it('is not drawn for a single fruit', () => {
    // At episode 1 only the Gum-Gum Fruit is open in East Blue.
    expect(detailOf('gum-gum-fruit', ep(1)).sagaRail).toStrictEqual([])
  })
})
