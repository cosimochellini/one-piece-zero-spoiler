// @vitest-environment node
import { describe, expect, it } from 'vitest'

import {
  accepts,
  namesIn,
  namesOf,
  suggestionOf,
  verdictOf,
} from './verify-names.mjs'

const page = (title, box = '') => {
  return {
    title,
    wikitext: `{{Profilo personaggio\n${box}\n}}\n'''${title}''' è…`,
    text: '',
  }
}
const names = (title, dub = [], aliases = []) => ({ title, dub, aliases })
const record = (id, it) => ({ id, kind: 'character', name: { en: it, it } })

describe('the names a field lists', () => {
  it('reads a list in order, without its notes in brackets', () => {
    expect(
      namesIn('\n* Renny Renny Chopper;\n* TonyTony Chopper (ep. 751)\n'),
    ).toEqual(['Renny Renny Chopper', 'TonyTony Chopper'])
    expect(namesIn(' Miss Valentina (come Officer Agent)')).toEqual([
      'Miss Valentina',
    ])
  })

  it('takes a Nihongo name, or its romaji when the name is Japanese', () => {
    expect(
      namesIn(
        ' {{Nihongo|Mr. Three|ミスター・スリー|Misutā Surī}}{{Nota|id=vc}}',
      ),
    ).toEqual(['Mr. Three'])
    expect(namesIn(' {{Nihongo|小紫|Komurasaki}}')).toEqual(['Komurasaki'])
  })

  it('takes a link by its label and drops references', () => {
    expect(namesIn(' [[Rufy|Rubber]]<ref>nota</ref>; [[Bagy]]')).toEqual([
      'Rubber',
      'Bagy',
    ])
  })

  it('lists nothing for an empty field', () => {
    expect(namesIn('')).toEqual([])
  })
})

describe('the names a page accepts', () => {
  it('reads the title without its disambiguator, the dub and the aliases', () => {
    expect(
      namesOf(
        page(
          'Laura (zombie)',
          '| nomeita = Lola\n| alias = {{Nihongo|Laura|ローラ}}\n| nickname = Sposa',
        ),
      ),
    ).toEqual({ title: 'Laura', dub: ['Lola'], aliases: ['Laura', 'Sposa'] })
  })

  it('stops a field at the next one', () => {
    expect(
      namesOf(page('Odr', '| nomeita     = Ozu\n| nickname    =\n| sesso = M'))
        .dub,
    ).toEqual(['Ozu'])
  })
})

describe('whether a name passes', () => {
  it('passes the title, a dub name or an alias, apostrophes aside', () => {
    expect(accepts('Monkey D. Rufy', [names('Monkey D. Rufy')])).toBe(true)
    expect(accepts('Octy', [names('Hacchan', ['Octy'])])).toBe(true)
    expect(
      accepts('Gold Roger', [names('Gol D. Roger', [], ['Gold Roger'])]),
    ).toBe(true)
    expect(accepts('Kin’emon', [names("Kin'emon")])).toBe(true)
  })

  it('passes a bare name, behind an honorific or not', () => {
    expect(accepts('Sanji', [names('Vinsmoke Sanji')])).toBe(true)
    expect(accepts('O-Tama', [names('Kurozumi Tama')])).toBe(true)
    expect(accepts('Don Chinjao', [names('Chinjao')])).toBe(true)
    expect(accepts('Sady', [names('Sady-chan')])).toBe(true)
  })

  it('fails another spelling, even one a hyphen away', () => {
    expect(accepts('Oz', [names('Odr', ['Ozu'])])).toBe(false)
    expect(accepts('Inuarashi', [names('Inu-Arashi')])).toBe(false)
    expect(accepts('Charlotte Mont-d’Or', [names("Charlotte Mont d'Or")])).toBe(
      false,
    )
    expect(accepts('Miss Goldenweek', [names('Miss Golden Week')])).toBe(false)
  })

  it('checks a paired name part by part', () => {
    const pages = [names('Carota'), names('Peperone'), names('Cipolla')]

    expect(accepts('Carota, Peperone e Cipolla', pages)).toBe(true)
    expect(accepts('Oimo e Kashi', [names('Oimo'), names('Karsee')])).toBe(
      false,
    )
  })

  it('suggests the latest dub name, else the title, page by page', () => {
    expect(
      suggestionOf([names('TonyTony Chopper', ['Renny', 'TonyTony Chopper'])]),
    ).toBe('TonyTony Chopper')
    expect(suggestionOf([names('Oimo'), names('Karsee')])).toBe('Oimo + Karsee')
  })
})

describe('the verdict on a record', () => {
  it('is ok, wrong or unresolved by its pages', () => {
    expect(
      verdictOf(record('oars', 'Ozu'), [page('Odr', '| nomeita = Ozu')]),
    ).toBe('ok')
    expect(
      verdictOf(record('oars', 'Oz'), [page('Odr', '| nomeita = Ozu')]),
    ).toBe('wrong')
    expect(verdictOf(record('x', 'X'), [undefined])).toBe('unresolved')
    expect(verdictOf(record('x', 'X'), [])).toBe('unresolved')
  })

  it('keeps a name checked by hand while it stays the one checked', () => {
    expect(verdictOf(record('shaka', 'Shaka'), [undefined])).toBe('kept')
    expect(verdictOf(record('shaka', 'Shakka'), [undefined])).toBe('unresolved')
  })
})
