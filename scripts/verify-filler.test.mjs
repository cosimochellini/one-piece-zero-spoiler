import { describe, expect, it } from 'vitest'

import {
  allowedKinds,
  chaptersOf,
  classesOf,
  kindProblem,
  matchSpecials,
  normalise,
  specialProblems,
  specialsOf,
  titleProblems,
} from './verify-filler.mjs'

describe('a title as comparable text', () => {
  it('drops markup, release notes, curly quotes and case', () => {
    expect(
      normalise(
        "[[Usopp|Usop]] vs. ''Daddy''’s --Showdown (sub);<br /> x (dub)",
      ),
    ).toBe('usop vs daddy s showdown')
  })
})

describe('the chapters of an Italian page', () => {
  it('reads a list that spans lines and ignores Filler', () => {
    expect(
      chaptersOf('| capitoli = [[Capitolo 1]]\n[[Capitolo 2]]\n| formato = x'),
    ).toEqual([1, 2])
    expect(chaptersOf('| capitoli = Filler\n| formato = x')).toEqual([])
  })
})

describe('the kinds an episode may have', () => {
  it('follows the AnimeFillerList class, then the tipo', () => {
    expect(allowedKinds('filler', '')).toEqual(['filler', 'recap'])
    expect(allowedKinds('mixed_canon/filler', '')).toEqual(['mixed'])
    expect(allowedKinds('anime_canon', 'Mezzo')).toEqual(['mixed'])
    expect(allowedKinds('anime_canon', 'Filler')).toEqual(['filler'])
    expect(allowedKinds('manga_canon', 'Filler')).toEqual([])
  })

  it('reads the class of each row', () => {
    expect(
      classesOf('<tr class="mixed_canon/filler odd" id="eps-9">').get(9),
    ).toBe('mixed_canon/filler')
  })
})

describe('the episode a special airs after', () => {
  const guide = [
    '{{Special|1|Defeat Him! The Pirate Ganzack|x}}',
    '{{Episode|1|Luffy|x}}',
    '{{Special|1=-|2=Emergency Planning|3=x}}',
    '{{Episode|2|Zoro|x}}',
  ].join('\n')

  it('is the last episode row before it', () => {
    const { specials, last } = specialsOf(guide)
    expect(specials.map((row) => row.after)).toEqual([0, 1])
    expect(last).toBe(2)
    expect(matchSpecials(specials, 'Emergency Planning')[0]?.after).toBe(1)
  })
})

describe('a kind against its sources', () => {
  it('passes an allowed kind and canon left out', () => {
    expect(
      kindProblem('episode 54', ['filler', 'recap'], 'filler'),
    ).toBeUndefined()
    expect(kindProblem('episode 1', [])).toBeUndefined()
  })

  it('names a missing episode, a wrong kind and a canon one listed', () => {
    expect(kindProblem('episode 61', ['mixed'])).toBe(
      'episode 61 is missing, sources say mixed',
    )
    expect(kindProblem('episode 61', ['mixed'], 'filler')).toBe(
      'episode 61 is filler, sources say mixed',
    )
    expect(kindProblem('episode 1', [], 'filler')).toBe(
      'episode 1 is filler, sources say canon',
    )
  })
})

describe('the titles against both wikis', () => {
  const english = new Map([
    ['Episode 54', '| Translation = Foreboding\n| English = Precursor (sub);'],
  ])
  const italian = new Map([
    ['Episodio 54', '| titolo = \n| titolotrad = Presentimento\n| tipo = x'],
  ])

  it('accepts any English field and the Italian translation', () => {
    const entries = [
      { episode: 54, title: { en: 'Precursor', it: 'Presentimento' } },
    ]

    expect(titleProblems(entries, english, italian)).toStrictEqual([])
  })

  it('names a title neither wiki gives', () => {
    const entries = [{ episode: 54, title: { en: 'Other', it: 'Altro' } }]

    expect(titleProblems(entries, english, italian)).toHaveLength(2)
  })
})

describe('the films and specials against the Episode Guide', () => {
  const specials = [{ title: 'film red', after: 1027 }]

  it('passes a film at its place, and keeps one known to be missing', () => {
    const entries = [
      { after: 1027, title: { en: 'Film Red' } },
      { after: 721, title: { en: 'Long Ring Long Land Arc Abridged' } },
    ]

    expect(specialProblems(entries, specials)).toStrictEqual({
      problems: [],
      kept: ['"Long Ring Long Land Arc Abridged" (after 721)'],
    })
  })

  it('names a film in the wrong place and one the guide lacks', () => {
    const entries = [
      { after: 1030, title: { en: 'Film Red' } },
      { after: 5, title: { en: 'Nowhere' } },
    ]

    expect(specialProblems(entries, specials).problems).toStrictEqual([
      '"Film Red" (after 1030) airs after 1027 in the Episode Guide',
      '"Nowhere" (after 5) is not in the Episode Guide',
    ])
  })
})
