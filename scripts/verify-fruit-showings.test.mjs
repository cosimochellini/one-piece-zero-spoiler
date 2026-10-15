import { describe, expect, it } from 'vitest'

import {
  qrefOf,
  rowsOf,
  showingsOf,
  verdictOf,
} from './verify-fruit-showings.mjs'

const box = (fruit, rest = '') =>
  `{{Devil Fruit Box\n|fruit        = ${fruit}\n|first        = [[Chapter 1]]\n}}\n${rest}`
const appearance = (text) => `==Appearance==\n${text}\n\n==Abilities==\nx`

describe('a Qref', () => {
  it('reads the chapter, the episode, the name and the text', () => {
    expect(
      qrefOf('name=c19|chap=19|page=16|ep=8|Buggy holding the [[a|b]] fruit.'),
    ).toEqual({
      name: 'c19',
      chapter: 19,
      episode: 8,
      text: 'Buggy holding the [[a|b]] fruit.',
      bare: false,
    })
  })

  it('leaves out an empty episode and marks a bare named one', () => {
    expect(qrefOf('chap=1070|page=6|ep=|x')).toEqual({
      chapter: 1070,
      text: 'x',
      bare: false,
    })
    expect(qrefOf('name=c685').bare).toBe(true)
  })
})

describe('the showings of a page', () => {
  it('reads both numbers from the infobox field', () => {
    expect(
      showingsOf(
        box(
          '[[Chapter 1070]]; [[Episode 1101]];{{Qref|chap=1070|page=6|ep=1101|Vegapunk talks.}} [[One Piece Magazine Vol.12]]',
        ),
      ),
    ).toEqual([{ chapter: 1070, episode: 1101, text: 'Vegapunk talks.' }])
  })

  it('reads an episode alone, with no Qref, and skips a magazine', () => {
    expect(
      showingsOf(box('[[One Piece Magazine Vol.16]]; [[Episode 1101]]')),
    ).toEqual([{ episode: 1101, text: '' }])
    expect(showingsOf(box('[[One Piece Magazine Vol.9]]'))).toEqual([])
  })

  it('cuts the field after each Qref', () => {
    expect(
      showingsOf(
        box(
          '[[Chapter 1070]];{{Qref|name=c1070|chap=1070|page=6|ep=|Zoans.}} [[Episode 1041]];{{Qref|name=ep1041|ep=1041|Shown.}} [[One Piece Magazine Vol.13]]',
        ),
      ),
    ).toEqual([
      { chapter: 1070, text: 'Zoans.' },
      { episode: 1041, text: 'Shown.' },
    ])
  })

  it('resolves a named Qref in the Appearance section, once', () => {
    const wikitext = box(
      '[[Chapter 19]]; [[Episode 8]]{{Qref|name=c19|chap=19|page=16|ep=8|Held.}}',
      appearance(
        'Oval.{{Qref|name=c19}} Seen.{{Qref|name=late|chap=30|ep=12|Later.}} Drawn.{{Qref|magazine=9|page=95|Shown.}}',
      ),
    )
    expect(showingsOf(wikitext)).toEqual([
      { chapter: 19, episode: 8, text: 'Held.' },
      { chapter: 30, episode: 12, text: 'Later.' },
    ])
  })

  it('reads no Qref outside the Appearance section', () => {
    expect(showingsOf('==Trivia==\n{{Qref|chap=5|ep=2|x}}')).toEqual([])
  })
})

describe('the verdict on a fruit', () => {
  const threshold = { episode: 100, chapter: 200 }

  it('wants the real fruit first when the story shows it by the threshold', () => {
    expect(
      verdictOf('f', threshold, [{ episode: 101, chapter: 150, text: '' }], [])
        .verdict,
    ).toBe('by threshold')
    expect(
      verdictOf('f', threshold, [{ episode: 99, text: '' }], []).verdict,
    ).toBe('by threshold')
    expect(
      verdictOf(
        'dark-dark-fruit',
        threshold,
        [{ episode: 99, chapter: 150, text: '' }],
        [],
      ).verdict,
    ).toBe('real first')
  })

  it('wants a redrawing at the pair the wiki gives', () => {
    const later = [{ episode: 120, chapter: 230, text: '' }]
    expect(verdictOf('f', threshold, later, []).verdict).toBe(
      'shown, not drawn',
    )
    expect(
      verdictOf('f', threshold, later, [{ episode: 120, chapter: 230 }])
        .verdict,
    ).toBe('redrawn')
    expect(
      verdictOf('f', threshold, later, [{ episode: 120, chapter: 231 }])
        .verdict,
    ).toBe('pair differs')
  })

  it('compares only the episode of an anime-only showing', () => {
    expect(
      verdictOf(
        'f',
        threshold,
        [{ episode: 120, text: '' }],
        [{ episode: 120, chapter: 999 }],
      ).verdict,
    ).toBe('redrawn')
  })

  it('does not count a showing outside the story', () => {
    const { verdict, skipped } = verdictOf(
      'magnet-magnet-fruit',
      { episode: 1058, chapter: 1031 },
      [{ episode: 1103, text: 'Anime Bonus Corner' }],
      [],
    )
    expect(verdict).toBe('never shown')
    expect(skipped).toHaveLength(1)
  })
})

describe('the report rows of a fruit', () => {
  const magnet = {
    id: 'magnet-magnet-fruit',
    kind: 'fruit',
    name: { en: 'Magnet-Magnet Fruit', it: 'Frutto Jiki Jiki' },
    revealedAtEpisode: 1058,
    revealedAtChapter: 1031,
  }

  it('fails a fruit whose page does not resolve', () => {
    expect(rowsOf(magnet, undefined, [])).toEqual([
      {
        id: 'magnet-magnet-fruit',
        threshold: 'ep 1058 / ch 1031',
        first: '—',
        page: '—',
        verdict: 'unresolved',
        showings: '',
      },
    ])
  })

  it('lists apart a showing that does not count, with its reason', () => {
    const page = {
      title: 'Jiki Jiki no Mi',
      wikitext: box('[[Episode 1103]];{{Qref|ep=1103|Bonus [[a|b]].}}'),
    }
    expect(
      rowsOf(magnet, page, []).map(({ verdict, showings }) => [
        verdict,
        showings,
      ]),
    ).toEqual([
      ['never shown', ''],
      [
        'not counted',
        'ep 1103 / ch —: outside the story: the Anime Bonus Corner after the episode',
      ],
    ])
  })

  it('writes the first showing and its Qref text, pipes escaped', () => {
    const page = {
      title: 'Jiki Jiki no Mi',
      wikitext: box('[[Episode 1110]];{{Qref|ep=1110|Seen [[a|b]].}}'),
    }
    expect(rowsOf(magnet, page, [])).toEqual([
      {
        id: 'magnet-magnet-fruit',
        threshold: 'ep 1058 / ch 1031',
        first: 'ep 1110 / ch —',
        page: 'Jiki Jiki no Mi',
        verdict: 'shown, not drawn',
        showings: String.raw`ep 1110 / ch —: Seen [[a\|b]].`,
      },
    ])
  })
})
