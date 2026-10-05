import { describe, expect, it } from 'vitest'

import {
  chapterOf,
  episodeOf,
  japaneseNameOf,
  namingChapterOf,
  titlesOf,
  verdictOf,
} from './verify-chapters.mjs'

const name = (en, it) => ({ en, it })
const page = (wikitext, text = '') => ({ title: 't', wikitext, text })

describe('the page a record is read from', () => {
  it('reads a character from the English edition name, straight apostrophe', () => {
    expect(
      titlesOf({
        id: 'whos-who',
        kind: 'character',
        name: name('Who’s-Who', 'Who’s-Who'),
      }),
    ).toEqual([["Who's-Who"]])
  })

  it('adds Arc to an arc name that lacks it and leaves a saga alone', () => {
    expect(
      titlesOf({ id: 'a', kind: 'arc', name: name('Arlong Park', 'x') }),
    ).toEqual([['Arlong Park Arc']])
    expect(
      titlesOf({ id: 'b', kind: 'arc', name: name('East Blue Saga', 'x') }),
    ).toEqual([['East Blue Saga']])
  })

  it('tries the English fruit name, then the Japanese one', () => {
    expect(
      titlesOf({
        id: 'f',
        kind: 'fruit',
        name: name(
          'Ox-Ox Fruit, Model: Bison',
          'Frutto Ushi Ushi, modello Bisonte',
        ),
      }),
    ).toEqual([
      ['Ox-Ox Fruit, Model: Bison'],
      ['Ushi Ushi no Mi, Model: Bison'],
    ])
    expect(japaneseNameOf(name('Chop-Chop Fruit', 'Frutto Bara Bara'))).toBe(
      'Bara Bara no Mi',
    )
  })

  it('reads a paired record from both pages and a nameless one from none', () => {
    expect(
      titlesOf({
        id: 'kiwi-and-mozu',
        kind: 'character',
        name: name('x', 'x'),
      }),
    ).toEqual([['Kiwi', 'Mozu']])
    expect(
      titlesOf({
        id: 'water-water-fruit',
        kind: 'fruit',
        name: name('x', 'x'),
      }),
    ).toEqual([])
  })
})

describe('the chapter a page gives', () => {
  it('reads the infobox first line', () => {
    expect(
      chapterOf(
        page('{{Char Box\n| first = [[Chapter 3]]; [[Episode 1]]\n}}'),
        'character',
      ),
    ).toBe(3)
  })

  it('falls back to the rendered debut when the infobox is transcluded', () => {
    expect(
      chapterOf(
        page('{{Zoro Tabs Top}}', '<b>Debut:</b> <a>Chapter 3</a> ; Episode 1'),
        'character',
      ),
    ).toBe(3)
  })

  it('reads an arc from its rendered chapter range', () => {
    expect(
      chapterOf(
        page(
          '{{Arc Box|chapter = auto}}',
          'Manga Chapters: 69-95, 27 chapters',
        ),
        'arc',
      ),
    ).toBe(69)
  })

  it('reads the episode beside the chapter', () => {
    expect(
      episodeOf(page('| first = [[Chapter 3]]; [[Episode 1]]'), 'character'),
    ).toBe(1)
    expect(
      episodeOf(
        page('{{Tabs}}', '<b>Debut:</b> Chapter 3; <a>Episode 1</a>'),
        'character',
      ),
    ).toBe(1)
    expect(
      episodeOf(
        page('{{Arc Box}}', 'Manga Chapters: 69-95 Anime Episodes: 31-44'),
        'arc',
      ),
    ).toBe(31)
  })

  it('takes the earliest chapter a line names, chapter 0 only alone', () => {
    expect(
      chapterOf(
        page(
          '| first = [[Chapter 530]] (mentioned); [[Chapter 0]]; [[Episode 425]]',
        ),
        'character',
      ),
    ).toBe(530)
    expect(chapterOf(page('| first = [[Chapter 0]]'), 'character')).toBe(0)
    expect(
      chapterOf(
        page(
          "| first = [[Chapter 491]]; [[Chapter 195]] ([[Hatchan's Sea-Floor Stroll|cover]])",
        ),
        'character',
      ),
    ).toBe(195)
  })

  it('gives nothing for a page without a chapter', () => {
    expect(chapterOf(page('text', 'text'), 'character')).toBeUndefined()
  })
})

describe('the chapter that names a fruit', () => {
  const chapters = new Map([
    [
      264,
      'Enel uses a Logia type Devil Fruit. [[Raki]] thinks of [[Goro Goro no Mi|his powers]].',
    ],
    [
      266,
      "*[[Enel]]'s [[Devil Fruit]] is revealed to be the [[Goro Goro no Mi]].\n*Other notes.",
    ],
  ])

  it('is the first summary that names it with a naming verb', () => {
    expect(namingChapterOf(chapters, 'Goro Goro no Mi')).toBe(266)
    expect(
      namingChapterOf(
        new Map([
          [933, "*Orochi's Devil Fruit is called the [[Hebi Hebi no Mi]]."],
          [521, '*Hancock was fed the [[Mero Mero no Mi]].'],
        ]),
        'Hebi Hebi no Mi',
      ),
    ).toBe(933)
    expect(
      namingChapterOf(
        new Map([[521, '*Hancock was fed the [[Mero Mero no Mi]].']]),
        'Mero Mero no Mi',
      ),
    ).toBe(521)
    expect(namingChapterOf(chapters, 'Gomu Gomu no Mi')).toBeUndefined()
    // A piped link or a model's link does not name the fruit.
    expect(
      namingChapterOf(
        new Map([
          [16, 'She asks how he [[Gomu Gomu no Mi|inflated himself]], named.'],
        ]),
        'Gomu Gomu no Mi',
      ),
    ).toBeUndefined()
    expect(
      namingChapterOf(
        new Map([[1023, 'Jack ate the [[Zou Zou no Mi, Model: Mammoth]].']]),
        'Zou Zou no Mi',
      ),
    ).toBeUndefined()
  })
})

describe('the verdict', () => {
  it('fails a chapter below the wiki and keeps one above', () => {
    expect(verdictOf(1, { wiki: 2 })).toBe('too low')
    expect(verdictOf(2, { wiki: 2 })).toBe('equal')
    expect(verdictOf(3, { wiki: 2 })).toBe('kept')
    expect(verdictOf(3, {})).toBe('unresolved')
    expect(verdictOf(3, { unverifiable: true })).toBe('unverifiable')
  })
})
