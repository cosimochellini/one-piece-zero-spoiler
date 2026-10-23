import { getCharacter } from '~/data/characters'
import { stories } from '~/data/dated'
import type { Locale } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { CreditSource, SourceCredit } from '~/lib/view/credits'

// eslint-disable-next-line no-restricted-imports -- Reuse the immutable audit manifest outside src; this module is server-only.
import manifest from '../../../docs/content-provenance/sources.json' with { type: 'json' }
import { INDEXED, rowOf } from './fillerRows.server'
import { type Reader, readerFor } from './reader.server'

/** The bounded #719 sample, not inferred provenance for the whole archive. */
const DOSSIERS = [
  ['monkey-d-luffy', 'en-Monkey_D._Luffy.json', 'it-Monkey_D._Rufy.json'],
  ['tama', 'en-Tama.json', 'it-Tama.json'],
  ['jack', 'en-Jack.json', 'it-Jack.json'],
] as const
// eslint-disable-next-line @typescript-eslint/no-magic-numbers -- Episode identifiers of the documented audit sample.
const CHRONICLES = new Set([1, 126, 869, 916])
// eslint-disable-next-line @typescript-eslint/no-magic-numbers -- Episode identifiers of the documented audit sample.
const EPISODES = new Set([54, 55, 56, 196, 197, 198, 1029, 1030])
const FILM_AFTER = 1027
const REPLACED_SUMMARY = 1030

type SourceKey = keyof typeof manifest.sources

/** Numeric revision links avoid later identities in canonical wiki URLs. */
function wikiSources(en: SourceKey, it: SourceKey): CreditSource[] {
  return [
    { kind: 'wiki-en', url: manifest.sources[en].revisionUrl },
    { kind: 'wiki-it', url: manifest.sources[it].revisionUrl },
  ]
}

/** Only revisions present in the audit can be sent, with no guessed URLs. */
function episodeSources(episode: number): CreditSource[] {
  const keys = new Set([
    `en-Episode_${String(episode)}.json`,
    `it-Episodio_${String(episode)}.json`,
  ])
  return Object.entries(manifest.sources).flatMap(
    ([key, source]): CreditSource[] =>
      keys.has(key) ?
        [
          {
            kind: source.locale === 'en' ? 'wiki-en' : 'wiki-it',
            url: source.revisionUrl,
          },
        ]
      : [],
  )
}

function dossiersFor(r: Reader): SourceCredit[] {
  return DOSSIERS.flatMap(([id, en, it]): SourceCredit[] => {
    const entity = getCharacter(id)
    return entity !== undefined && r.sees(entity) ?
        [
          {
            name: entity.name[r.locale],
            scope: 'dossier',
            sources: wikiSources(en, it),
          },
        ]
      : []
  })
}

function chroniclesFor(r: Reader): SourceCredit[] {
  return stories.flatMap(({ character, episode, gate }): SourceCredit[] =>
    (
      character.id === 'monkey-d-luffy'
      && CHRONICLES.has(episode)
      && r.sees(gate)
    ) ?
      [
        {
          name: character.name[r.locale],
          episode,
          scope: 'chronicle',
          sources: episodeSources(episode),
        },
      ]
    : [],
  )
}

/** Reuse the filler guide's episode/chapter gates, including films. */
function fillerFor(r: Reader): SourceCredit[] {
  return INDEXED.flatMap((item): SourceCredit[] => {
    const row = rowOf(item, r.locale)
    if (!r.sees(row)) {
      return []
    }
    if ('episode' in row && EPISODES.has(row.episode)) {
      return episodeCredits(row.title, row.episode)
    }
    return row.kind === 'film' && 'after' in row && row.after === FILM_AFTER ?
        [
          {
            name: row.title,
            scope: 'filler',
            sources: wikiSources('en-Film_Red.json', 'it-Film_Red.json'),
          },
        ]
      : []
  })
}

/** No covered names, source URLs, titles or inventory are sent to the client. */
export function creditsPage(
  bookmark: Bookmark,
  locale: Locale,
): SourceCredit[] {
  const r = readerFor(bookmark, locale)
  return [...dossiersFor(r), ...chroniclesFor(r), ...fillerFor(r)]
}

function episodeCredits(name: string, episode: number): SourceCredit[] {
  const replaced = episode === REPLACED_SUMMARY
  const credit: SourceCredit = {
    name,
    episode,
    scope: replaced ? 'title' : 'filler',
    sources: episodeSources(episode),
  }
  return replaced ?
      [
        credit,
        {
          name,
          episode,
          scope: 'summary',
          sources: [
            {
              kind: 'official',
              url: 'https://one-piece.com/anime/o6217/index.html',
            },
          ],
        },
      ]
    : [credit]
}
