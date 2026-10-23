import { describe, expect, it } from 'vitest'

import { getCharacter } from '~/data/characters'
import { stories } from '~/data/dated'
import { LOCALES } from '~/i18n/locales'
import { CHAPTER_CEILING, EPISODE_CEILING } from '~/lib/progress/episode'
import type { SourceCredit } from '~/lib/view/credits'
import { ep } from '~/test/providers'

import { creditsPage } from './credits.server'

const OFFICIAL = 'https://one-piece.com/anime/o6217/index.html'
const TAMA_REVISION = 'oldid=2132292'

describe('source credits', () => {
  it.each(LOCALES)(
    'sends no entry inventory without a bookmark in %s',
    (locale) => {
      expect(creditsPage(null, locale)).toStrictEqual([])
    },
  )

  it.each(LOCALES)(
    'withholds even identifying source URLs until the owner opens in %s',
    (locale) => {
      const tama = fixture(getCharacter('tama'))

      const covered = creditsPage(ep(tama.revealedAtEpisode - 1), locale)

      expect(JSON.stringify(covered)).not.toContain(TAMA_REVISION)

      const open = creditsPage(ep(tama.revealedAtEpisode), locale)

      expect(JSON.stringify(open)).toContain(TAMA_REVISION)
      expect(JSON.stringify(open)).not.toContain('Kurozumi')
      expect(
        open.find(({ name }) => name === tama.name[locale])?.sources,
      ).toHaveLength(2)
    },
  )

  it('gates each chronicle reference at the story in the reader’s own unit', () => {
    const story = fixture(
      stories.find(
        ({ character, episode }) =>
          character.id === 'monkey-d-luffy' && episode === 126,
      ),
    )
    const at = (chapter: number): SourceCredit[] =>
      creditsPage({ mode: 'chapter', chapter }, 'en').filter(
        ({ scope, episode }) => scope === 'chronicle' && episode === 126,
      )

    expect(at(story.gate.revealedAtChapter - 1)).toStrictEqual([])
    expect(at(story.gate.revealedAtChapter)).toHaveLength(1)
    expect(
      creditsPage(ep(125), 'en').filter(({ episode }) => episode === 126),
    ).toStrictEqual([])
    expect(
      creditsPage(ep(126), 'en').filter(({ episode }) => episode === 126),
    ).toHaveLength(1)
    expect(
      creditsPage({ mode: 'season', season: 1, episode: 1 }, 'en'),
    ).toStrictEqual(creditsPage(ep(1), 'en'))
  })

  it.each(LOCALES)(
    'separates the replaced summary from wiki title evidence in %s',
    (locale) => {
      const before = creditsPage(ep(1029), locale)

      expect(JSON.stringify(before)).not.toContain(OFFICIAL)

      const rows = creditsPage(ep(1030), locale).filter(
        ({ episode }) => episode === 1030,
      )

      expect(rows.map(({ scope }) => scope)).toStrictEqual(['title', 'summary'])
      expect(rows[0]?.sources.map(({ kind }) => kind)).toStrictEqual([
        'wiki-en',
        'wiki-it',
      ])
      expect(rows[1]?.sources).toStrictEqual([
        { kind: 'official', url: OFFICIAL },
      ])
    },
  )

  it.each(LOCALES)(
    'lists the complete bounded sample using numeric revision addresses in %s',
    (locale) => {
      const rows = creditsPage(ep(EPISODE_CEILING), locale)

      expect(rows).toHaveLength(17)

      const links = rows.flatMap(({ sources }) => sources)

      expect(links).toHaveLength(33)

      const wiki = links.filter(({ kind }) => kind !== 'official')
      for (const source of wiki) {
        expect(source.url).toMatch(
          /^https:\/\/onepiece\.fandom\.com\/(?:it\/)?index\.php\?oldid=\d+$/u,
        )
      }

      expect(JSON.stringify(rows)).not.toContain('contentSha256')
      expect(JSON.stringify(rows)).not.toContain('sourceWords')
      expect(
        creditsPage({ mode: 'chapter', chapter: CHAPTER_CEILING }, locale)
          .length,
      ).toBeGreaterThan(0)
    },
  )
})

function fixture<T>(value: T | undefined): T {
  if (value === undefined) {
    throw new Error('Missing fixture')
  }
  return value
}
