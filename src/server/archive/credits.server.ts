import type { CreditSample } from '~/data/types'
import type { CreditSource, SourceCredit } from '~/lib/view/credits'

// eslint-disable-next-line no-restricted-imports -- Reuse the immutable audit manifest outside src; this module is server-only.
import manifest from '../../../docs/content-provenance/sources.json' with { type: 'json' }
import { indexedFor, rowOf } from './fillerRows.server'
import type { Reader } from './reader.server'

/**
 * The references of a series' documented review (`credits` on its archive),
 * open at the reader's bookmark. The sample is the series'; this module only
 * reads it.
 */

const SOURCES: Partial<
  Record<string, { locale: string; revisionUrl: string }>
> = manifest.sources

/** A revision the audit read, by its file. Numeric revision links avoid later identities in canonical wiki URLs. */
function revisionOf(file: string): CreditSource | undefined {
  const source = SOURCES[file]
  return source === undefined ? undefined : (
      {
        kind: source.locale === 'en' ? 'wiki-en' : 'wiki-it',
        url: source.revisionUrl,
      }
    )
}

/** Only revisions present in the audit can be sent, with no guessed URLs. */
function revisionsOf(files: string[]): CreditSource[] {
  return files.flatMap((file) => revisionOf(file) ?? [])
}

/** An episode's revisions, in the audit's own order. */
function episodeRevisions(
  sample: CreditSample,
  episode: number,
): CreditSource[] {
  const files = new Set(sample.episodeFiles(episode))
  return revisionsOf(Object.keys(SOURCES).filter((file) => files.has(file)))
}

function dossiersFor(sample: CreditSample, r: Reader): SourceCredit[] {
  return sample.dossiers.flatMap(({ id, en, it }): SourceCredit[] => {
    const entity = r.archive.getCharacter(id)
    return entity !== undefined && r.sees(entity) ?
        [
          {
            name: entity.name[r.locale],
            scope: 'dossier',
            sources: revisionsOf([en, it]),
          },
        ]
      : []
  })
}

function chroniclesFor(sample: CreditSample, r: Reader): SourceCredit[] {
  const { character: id, episodes } = sample.chronicles
  return r.archive.stories.flatMap(
    ({ character, episode, gate }): SourceCredit[] =>
      character.id === id && episodes.includes(episode) && r.sees(gate) ?
        [
          {
            name: character.name[r.locale],
            episode,
            scope: 'chronicle',
            sources: episodeRevisions(sample, episode),
          },
        ]
      : [],
  )
}

/** Reuse the filler guide's episode/chapter gates, including films. */
function fillerFor(sample: CreditSample, r: Reader): SourceCredit[] {
  const { film } = sample
  return indexedFor(r).flatMap((item): SourceCredit[] => {
    const row = rowOf(item, r)
    if (!r.sees(row)) {
      return []
    }
    if ('episode' in row && sample.filler.includes(row.episode)) {
      return episodeCredits(sample, row.title, row.episode)
    }
    return (
        film !== undefined
          && row.kind === 'film'
          && 'after' in row
          && row.after === film.after
      ) ?
        [
          {
            name: row.title,
            scope: 'filler',
            sources: revisionsOf([film.en, film.it]),
          },
        ]
      : []
  })
}

/** No covered names, source URLs, titles or inventory are sent to the client. */
export function creditsPage(r: Reader): SourceCredit[] {
  const sample = r.archive.credits
  return sample === undefined ?
      []
    : [
        ...dossiersFor(sample, r),
        ...chroniclesFor(sample, r),
        ...fillerFor(sample, r),
      ]
}

function episodeCredits(
  sample: CreditSample,
  name: string,
  episode: number,
): SourceCredit[] {
  const credit: SourceCredit = {
    name,
    episode,
    scope: sample.replaced?.episode === episode ? 'title' : 'filler',
    sources: episodeRevisions(sample, episode),
  }
  return sample.replaced?.episode === episode ?
      [
        credit,
        {
          name,
          episode,
          scope: 'summary',
          sources: [{ kind: 'official', url: sample.replaced.url }],
        },
      ]
    : [credit]
}
