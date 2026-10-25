import type { SeriesCopy } from '~/i18n/types'

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
 * One open series on the legal page: its own copy, which words its rights
 * line and its sources, and the references open at its bookmark.
 */
export interface SeriesCredits {
  copy: SeriesCopy
  credits: SourceCredit[]
}
