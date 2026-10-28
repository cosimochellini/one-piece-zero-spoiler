import * as stylex from '@stylexjs/stylex'
import { createFileRoute } from '@tanstack/react-router'
import { lazy, type ReactElement, Suspense, use } from 'react'

import { ArchivePage } from '~/components/ArchivePage'
import { CharacterCard } from '~/components/CharacterCard'
import { CharacterCardList } from '~/components/CharacterGrid'
import { useT } from '~/i18n/LocaleContext'
/* Hallmark · pre-emit critique: P5 H5 E4 S5 R4 V4 */
/* Hallmark · genre: atmospheric · macrostructure: Split Studio · theme: Sea
 *   Chart (locked) · enrichment: Tier B hand-built SVG (crest seal + route
 *   strip) · nav: N9 (shared) · footer: Ft4 (shared)
 * · structure: the crest | dossier diptych · the chronicle as one ledger ·
 *   route position | strip · nearby crests as one row
 * · idea: "a page from the signal book, opened flat" */
import type { CharacterView, Slot } from '~/lib/view/records'
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
  liftCharacter,
  liftDossier,
  liftRecord,
  loadCharacter,
  loadNearby,
  loadRelationships,
  loadRoutePosition,
} from '~/server/api'
import { settleStyles } from '~/styles/settle'

import { ChronicleBand } from './-$id.chronicle'
import { DossierDiptych } from './-$id.dossier'
import { RouteDiptych, RoutePending } from './-$id.route'
import { styles } from './-$id.styles'

// The bands in DOM order. Named rather than counted at the call, so a
// band inserted in the middle is one edit here and not three down the page.
const BAND = {
  dossier: 0,
  chronicle: 1,
  route: 2,
  relationships: 3,
  nearby: 4,
} as const

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
    // Below the dossier, so they stream: the strip is sixty-six marks, the
    // relations a dossier's worth of history and the nearby row five
    // drawings, and none is what the reader came for.
    return {
      ...orNotFound(await loadCharacter(args)),
      nearby: loadNearby(args),
      relationships: loadRelationships(args),
      position: loadRoutePosition(args),
    }
  },
  head: (match) => recordHead(match, 'characters') ?? {},
  component: CharacterPage,
  notFoundComponent: CharacterNotFound,
})

/**
 * A character's page (Hallmark macrostructure 15, Split Studio).
 *
 * Four bands down the page. The first is the crest beside the dossier: kind
 * and episode in mono, the name as the only display line, the role, the
 * summary, then the facts as the reader's bookmark knows them and the log
 * entry. The second is the chronicle: the stories the reader has reached,
 * one under the other, and nothing at all when they have reached none. The
 * third is the record's place on the route beside a strip of the whole route
 * with this waypoint ringed, and the two records filed either side of it. The
 * fourth is one row of the listed characters filed nearest on the route.
 *
 * Under fog the crest and the dossier are covered together and the title is
 * generic; the strip still shows where on the route the page sits, because
 * "waypoint 23 of 35" is the promise and not the spoiler.
 */
function CharacterPage(): ReactElement {
  const { detail, nearby, position, relationships } = Route.useLoaderData()
  const peekDossier = usePeek(liftDossier)
  const peekCharacter = usePeek(liftCharacter)
  const peekRecord = usePeek(liftRecord)

  return (
    <main
      id="content"
      {...stylex.props(recordStyles.page)}
    >
      <p
        {...stylex.props(
          recordStyles.back,
          settleStyles.band,
          settleStyles.at(BAND.dossier),
        )}
      >
        <RecordBackLink section="characters" />
      </p>

      <DossierDiptych
        detail={detail}
        peek={peekDossier}
      />

      <ChronicleBand
        band={BAND.chronicle}
        detail={detail}
      />

      <section
        aria-labelledby="route-position"
        {...stylex.props(
          styles.diptych,
          styles.reversed,
          settleStyles.band,
          settleStyles.at(BAND.route),
        )}
      >
        <Suspense fallback={<RoutePending />}>
          <RouteDiptych
            peek={peekRecord}
            position={position}
          />
        </Suspense>
      </section>

      <Suspense fallback={<RelationshipsPending />}>
        <RelationshipsBand relationships={relationships} />
      </Suspense>

      <NearbyRow
        nearby={nearby}
        peek={peekCharacter}
      />
    </main>
  )
}

/** What the page says while the relations are still on their way. */
function RelationshipsPending(): ReactElement {
  const t = useT()

  return (
    <p
      aria-busy="true"
      {...stylex.props(styles.lede)}
    >
      {t('character.relationshipsLoading')}
    </p>
  )
}

/** The relations once they arrive; nothing at all when there are none. */
function RelationshipsBand({
  relationships,
}: {
  relationships: Promise<RelationshipView[]>
}): ReactElement {
  return (
    <div
      {...stylex.props(settleStyles.band, settleStyles.at(BAND.relationships))}
    >
      <RelationshipBand relationships={use(relationships)} />
    </div>
  )
}

/**
 * The characters filed nearest this one on the route, as one row of crests.
 *
 * Nearness is measured in thresholds, so the row is the reader's own
 * neighbourhood of the story rather than an editorial "see also".
 */
function NearbyRow({
  nearby,
  peek,
}: {
  nearby: Promise<Slot<CharacterView>[]>
  peek: (handle: string) => Promise<CharacterView>
}): ReactElement {
  const t = useT()

  return (
    <section
      aria-labelledby="nearby"
      {...stylex.props(
        styles.nearby,
        settleStyles.band,
        settleStyles.at(BAND.nearby),
      )}
    >
      <div {...stylex.props(styles.bandHead)}>
        <h2
          id="nearby"
          {...stylex.props(styles.sectionTitle)}
        >
          {t('character.nearbyTitle')}
        </h2>
        <p {...stylex.props(styles.lede)}>{t('character.nearbyLede')}</p>
      </div>
      <Suspense fallback={<NearbyPending />}>
        <NearbyCrests
          nearby={nearby}
          peek={peek}
        />
      </Suspense>
    </section>
  )
}

/** What the nearby row says while its crests are still on their way. */
function NearbyPending(): ReactElement {
  const t = useT()

  return (
    <p
      aria-busy="true"
      {...stylex.props(styles.lede)}
    >
      {t('character.nearbyLoading')}
    </p>
  )
}

/** The crests once they arrive. `use` has to sit inside the boundary. */
function NearbyCrests({
  nearby,
  peek,
}: {
  nearby: Promise<Slot<CharacterView>[]>
  peek: (handle: string) => Promise<CharacterView>
}): ReactElement {
  return (
    <CharacterCardList>
      {use(nearby).map((slot) => {
        return (
          <CharacterCard
            key={
              slot.open ?
                `open-${slot.record.id}`
              : `fog-${slot.covered.handle}`
            }
            peek={peek}
            slot={slot}
          />
        )
      })}
    </CharacterCardList>
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
