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
