import { describe, expect, it } from 'vitest'

import { HUNTER_X_HUNTER_ARCHIVE as archive } from '~/data/series/hunter-x-hunter/archive'
import { LOCALES } from '~/i18n/locales'

import { homePage } from './home.server'
import { drawingsFor } from './pages.server'
import { readerFor } from './reader.server'

const CASES = [
  { id: 'chimera-ant-arc', chapter: 186, episode: 76 },
  { id: 'heavens-arena-arc', chapter: 44, episode: 27 },
  { id: 'election-arc', chapter: 319, episode: 137 },
] as const

const SUMMARIES = {
  it: 'Gon e Killua lasciano Greed Island per raggiungere un giocatore che sperano sia Ging. Dove arrivano si muovono le formichimere.',
  en: 'Gon and Killua leave Greed Island to meet a player they hope is Ging. Where they land, chimera ants are on the move.',
}

describe.each(LOCALES)('owner-verified arc gates in %s (#796)', (locale) => {
  it.each(CASES)('$id opens at its chapter and episode gates', (row) => {
    for (const mode of ['chapter', 'episode'] as const) {
      const count = row[mode]
      const before = readerFor(
        archive,
        mode === 'chapter' ?
          { mode, chapter: count - 1 }
        : { mode, episode: count - 1 },
        locale,
      )
      const at = readerFor(
        archive,
        mode === 'chapter' ?
          { mode, chapter: count }
        : { mode, episode: count },
        locale,
      )

      expect(homePage(before).saga.id).not.toBe(row.id)
      expect(drawingsFor([row.id], before)).toStrictEqual({})
      expect(homePage(at).saga.id).toBe(row.id)
      expect(drawingsFor([row.id], at)[row.id]).toBeDefined()
    }
  })

  it.each([
    { mode: 'chapter', chapter: 186 },
    { mode: 'episode', episode: 76 },
  ] as const)(
    'omits the premature aggression claim in $mode mode',
    (bookmark) => {
      const at = readerFor(archive, bookmark, locale)

      expect(homePage(at).saga.summary).toBe(SUMMARIES[locale])
    },
  )
})
