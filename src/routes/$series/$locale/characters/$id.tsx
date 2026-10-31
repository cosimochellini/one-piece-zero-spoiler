import * as stylex from '@stylexjs/stylex'
import { createFileRoute } from '@tanstack/react-router'
import { useServerFn } from '@tanstack/react-start'
import { lazy, type ReactElement, Suspense, use, useCallback } from 'react'

import { ArchivePage } from '~/components/ArchivePage'
import { useT } from '~/i18n/LocaleContext'
import { readPlain } from '~/lib/plain'
import { useSeriesParams } from '~/lib/progress/BookmarkContext'
/* Hallmark · pre-emit critique: P5 H5 E4 S5 R4 V4 */
/* Hallmark · genre: atmospheric · macrostructure: Split Studio · theme: Sea
 *   Chart (locked) · enrichment: Tier B hand-built SVG (crest seal) · nav: N9 (shared) · footer: Ft4 (shared)
 * · structure: the crest | dossier diptych · the chronicle as one ledger ·
 *   reached relationships
 * · idea: "a page from the signal book, opened flat" */
import type { RelationshipView } from '~/lib/view/relationships'
import { recordHead } from '~/routes/$locale/-head'
import { RecordBackLink } from '~/routes/$series/$locale/-back'
import {
  orNotFound,
  recordArgs,
  requirePage,
} from '~/routes/$series/$locale/-found'
import { usePeek } from '~/routes/$series/$locale/-peek'
import { recordStyles } from '~/routes/$series/$locale/-record.styles'
import {
  liftDossier,
  loadCharacter,
  loadChronicleRest,
  loadRelationships,
} from '~/server/api'

import { ChronicleBand } from './-$id.chronicle'
import { DossierDiptych } from './-$id.dossier'

// The bands under the first in DOM order. The back link and the first band
// are the page's header, there from the first frame. Named rather than
// counted at the call, so a band inserted in the middle is one edit here and
// not three down the page.
const BAND = { chronicle: 0, relationships: 1 } as const

// Its own chunk: the band streams in after the page, so its code need not
// ride in the first load.
const RelationshipBand = lazy(async () => {
  const { RelationshipBand: band } = await import('./-$id.relationships')
  return { default: band }
})

export const Route = createFileRoute('/$series/$locale/characters/$id')({
  beforeLoad: ({ context }) => {
    requirePage(context.series, 'characters')
  },
  // The one decision the page turns on is made on the server, from the
  // bookmark in the request: the document title must not carry a name the
  // reader has not reached, and a title is set before any component runs.
  loader: async (match) => {
    const args = recordArgs(match)
    return {
      ...orNotFound(await loadCharacter(args)),
      relationships: loadRelationships(args),
    }
  },
  head: (match) => recordHead(match, 'characters') ?? {},
  component: CharacterPage,
  notFoundComponent: CharacterNotFound,
})

/**
 * The dossier and chronicle precede the streamed relationship selection.
 * Series without reached authored relationships omit the section entirely.
 */
function CharacterPage(): ReactElement {
  const { detail, relationships } = Route.useLoaderData()
  const peekDossier = usePeek(liftDossier)
  const { id } = Route.useParams()
  const { locale, series } = useSeriesParams()
  const askRest = useServerFn(loadChronicleRest)
  const loadRest = useCallback(
    async () => readPlain(await askRest({ data: { id, locale, series } })),
    [askRest, id, locale, series],
  )

  return (
    <main
      id="content"
      {...stylex.props(recordStyles.page)}
    >
      <p {...stylex.props(recordStyles.back)}>
        <RecordBackLink section="characters" />
      </p>

      <DossierDiptych
        detail={detail}
        peek={peekDossier}
      />

      <ChronicleBand
        band={BAND.chronicle}
        detail={detail}
        loadRest={loadRest}
      />

      <Suspense fallback={null}>
        <RelationshipsBand relationships={relationships} />
      </Suspense>
    </main>
  )
}

/** The latest server-filtered selection, with no teaser while it streams. */
function RelationshipsBand({
  relationships,
}: {
  relationships: Promise<RelationshipView[]>
}): ReactElement {
  return (
    <RelationshipBand
      band={BAND.relationships}
      relationships={use(relationships)}
    />
  )
}

/**
 * `/characters/<not-a-character>`: says so, and points at the book.
 *
 * The archive shell rather than a page of its own: a not-found page is a
 * heading, a sentence and a way out, which is exactly what the listings open
 * with, and two hand-built copies of that had already drifted into being.
 */
function CharacterNotFound(): ReactElement {
  const t = useT()

  return (
    <ArchivePage
      count={t('character.notFoundBody')}
      title={t('character.notFoundTitle')}
    >
      <p>
        <RecordBackLink section="characters" />
      </p>
    </ArchivePage>
  )
}
