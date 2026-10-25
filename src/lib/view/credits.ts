import type { SeriesCopy, SeriesSlug, TranslationKey } from '~/i18n/types'

/** Only references whose local material is open cross the server boundary. */
export interface CreditSource {
  kind: 'official' | 'wiki-en' | 'wiki-it'
  url: string
}

export interface SourceCredit {
  episode?: number
  name: string
  scope: 'chronicle' | 'dossier' | 'filler' | 'summary' | 'title'
  sources: CreditSource[]
}

/**
 * Where a series' rights line is published, the license of the text of each
 * of its two wikis (a name and an address), and its general sources, each
 * labelled by a key of its own copy.
 */
export interface SeriesSources {
  licenses: Record<Exclude<CreditSource['kind'], 'official'>, [string, string]>
  links: [TranslationKey<SeriesSlug>, string][]
  rights: string
}

/**
 * What the legal page is sent of one open series: the lines of its own copy
 * the page prints (its rights line and its source credits, `legal.*` and
 * `credits.*`), and its sources.
 */
export interface SeriesLegal {
  copy: SeriesCopy
  sources: SeriesSources
}

/** One open series on the legal page, with its references open at the bookmark. */
export interface SeriesCredits extends SeriesLegal {
  credits: SourceCredit[]
}
