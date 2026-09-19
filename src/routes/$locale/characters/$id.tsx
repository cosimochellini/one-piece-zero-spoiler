/* Hallmark · pre-emit critique: P5 H5 E4 S5 R4 V4 */
/* Hallmark · genre: atmospheric · macrostructure: Split Studio · theme: Sea
 *   Chart (locked) · enrichment: Tier B hand-built SVG (crest seal + route
 *   strip) · nav: N9 (shared) · footer: Ft4 (shared)
 * · structure: the crest | dossier diptych · the chronicle as one ledger ·
 *   route position | strip · nearby crests as one row
 * · idea: "a page from the signal book, opened flat" */
import * as stylex from '@stylexjs/stylex'
import { createFileRoute, Link } from '@tanstack/react-router'
import { type ReactElement, Suspense, use } from 'react'

import { ArchivePage } from '~/components/ArchivePage'
import { CharacterCard } from '~/components/CharacterCard'
import { CharacterCardList } from '~/components/CharacterGrid'
import { useLocale } from '~/i18n/LocaleContext'
import { isLocale } from '~/i18n/locales'
import type { CharacterView, Slot } from '~/lib/view/records'
import { orNotFound } from '~/routes/$locale/-found'
import { describeRecordPage } from '~/routes/$locale/-head'
import { usePeek } from '~/routes/$locale/-peek'
import { recordStyles } from '~/routes/$locale/-record.styles'
import {
  liftCharacter,
  liftDossier,
  liftRecord,
  loadCharacter,
  loadNearby,
  loadRoutePosition,
} from '~/server/api'
import { settleStyles } from '~/styles/settle'

import { ChronicleBand } from './-$id.chronicle'
import { DossierDiptych } from './-$id.dossier'
import { RouteDiptych, RoutePending } from './-$id.route'
import { styles } from './-$id.styles'

// The four bands in DOM order. Named rather than counted at the call, so a
// band inserted in the middle is one edit here and not three down the page.
const BAND = { dossier: 0, chronicle: 1, route: 2, nearby: 3 } as const

export const Route = createFileRoute('/$locale/characters/$id')({
  // The one decision the page turns on is made on the server, from the
  // bookmark in the request: the document title must not carry a name the
  // reader has not reached, and a title is set before any component runs.
  loader: async ({ params, context }) => {
    const page = await loadCharacter({
      data: { id: params.id, locale: context.locale },
    })
    const found = orNotFound(page)

    return {
      detail: found.detail,
      head: found.head,
      // Below the dossier, so they stream: the strip is sixty-six marks and
      // the nearby row is five drawings, and neither is what the reader came
      // for.
      nearby: loadNearby({ data: { id: params.id, locale: context.locale } }),
      position: loadRoutePosition({
        data: { id: params.id, locale: context.locale },
      }),
    }
  },
  head: ({ loaderData, match, params }) => {
    return loaderData === undefined || !isLocale(params.locale) ?
        {}
      : describeRecordPage({
          head: loaderData.head,
          locale: params.locale,
          parentPath: '/characters',
          parentTitleKey: 'characters.pageTitle',
          pathname: match.pathname,
        })
  },
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
  const { detail, nearby, position } = Route.useLoaderData()
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
        <BackLink />
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

      <NearbyRow
        nearby={nearby}
        peek={peekCharacter}
      />
    </main>
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
  readonly nearby: Promise<readonly Slot<CharacterView>[]>
  readonly peek: (handle: string) => Promise<CharacterView>
}): ReactElement {
  const { t } = useLocale()

  return (
    <section
      aria-labelledby="nearby"
      {...stylex.props(
        styles.nearby,
        settleStyles.band,
        settleStyles.at(BAND.nearby),
      )}
    >
      <div {...stylex.props(styles.nearbyHead)}>
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
  const { t } = useLocale()

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
  readonly nearby: Promise<readonly Slot<CharacterView>[]>
  readonly peek: (handle: string) => Promise<CharacterView>
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

/** Hallmark C3: a word, an arrow, a rule. It is the page's one way back. */
function BackLink(): ReactElement {
  const { locale, t } = useLocale()

  return (
    <Link
      params={{ locale }}
      to="/$locale/characters"
      {...stylex.props(recordStyles.backLink)}
    >
      ← {t('character.back')}
    </Link>
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
  const { t } = useLocale()

  return (
    <ArchivePage
      count={t('character.notFoundBody')}
      title={t('character.notFoundTitle')}
    >
      <p>
        <BackLink />
      </p>
    </ArchivePage>
  )
}
