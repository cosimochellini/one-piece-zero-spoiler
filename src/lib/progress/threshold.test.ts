import { enDictionary } from '~/i18n/dictionaries/en'
import { itDictionary } from '~/i18n/dictionaries/it'
import { translate } from '~/i18n/translate'
import type { Translate } from '~/i18n/types'

import { describeBookmark, describeThreshold } from './threshold'

const en: Translate = (key, params) => translate(enDictionary, key, params)
const inItalian: Translate = (key, params) =>
  translate(itDictionary, key, params)
const robin = { revealedAtEpisode: 130, revealedAtChapter: 218 }

describe('describeThreshold', () => {
  it('names the threshold in the reader’s unit', () => {
    expect(describeThreshold(en, 'veil.locked', robin, 'episode')).toBe(
      'Under fog until episode 130',
    )
    expect(describeThreshold(en, 'veil.locked', robin, 'season')).toBe(
      'Under fog until S04E38',
    )
    expect(describeThreshold(en, 'veil.locked', robin, 'chapter')).toBe(
      'Under fog until chapter 218',
    )
  })

  it('bends the grammar per unit in Italian', () => {
    expect(
      describeThreshold(inItalian, 'character.opensAt', robin, 'episode'),
    ).toBe('Compare per la prima volta nell’episodio 130')
    expect(
      describeThreshold(inItalian, 'character.opensAt', robin, 'chapter'),
    ).toBe('Compare per la prima volta nel capitolo 218')
    expect(describeThreshold(inItalian, 'chart.opensAt', robin, 'season')).toBe(
      'S04E38',
    )
  })
})

describe('describeBookmark', () => {
  it('spells the reader’s own bookmark', () => {
    expect(
      describeBookmark(en, 'mark', { mode: 'episode', episode: 650 }),
    ).toBe('EP 650')
    expect(
      describeBookmark(en, 'mark', { mode: 'season', season: 2, episode: 3 }),
    ).toBe('S02E03')
    expect(
      describeBookmark(en, 'mark', { mode: 'chapter', chapter: 1044 }),
    ).toBe('CH 1044')
    expect(
      describeBookmark(en, 'chart.hereSet', { mode: 'chapter', chapter: 1044 }),
    ).toBe('You are here · chapter 1044')
  })
})
