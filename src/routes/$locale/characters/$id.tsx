/* Hallmark · pre-emit critique: P5 H5 E4 S5 R4 V4 */
/* Hallmark · genre: atmospheric · macrostructure: Split Studio · theme: Sea
 *   Chart (locked) · enrichment: Tier B hand-built SVG (crest seal + route
 *   strip) · nav: N9 (shared) · footer: Ft4 (shared)
 * · structure: three diptychs that alternate — crest | dossier · route
 *   position | strip · nearby crests as one row
 * · idea: "a page from the signal book, opened flat" */
import * as stylex from '@stylexjs/stylex'
import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { useServerFn } from '@tanstack/react-start'
import { type ReactElement, Suspense, use, useCallback } from 'react'

import { CharacterCard } from '~/components/CharacterCard'
import { CharacterCardList } from '~/components/CharacterGrid'
import { useLocale } from '~/i18n/LocaleContext'
import type { Locale } from '~/i18n/locales'
import type { CharacterView, Slot } from '~/lib/view/records'
import {
  liftCharacter,
  liftDossier,
  liftRecord,
  loadCharacter,
  loadNearby,
  loadRoutePosition,
} from '~/server/api'
import { settleStyles } from '~/styles/settle'

import { DossierDiptych } from './-$id.dossier'
import { describeDocument } from './-$id.head'
import { RouteDiptych, RoutePending } from './-$id.route'
import { styles } from './-$id.styles'

// The three bands in DOM order. Named rather than counted at the call, so a
// band inserted in the middle is one edit here and not three down the page.
const BAND = { dossier: 0, route: 1, nearby: 2 } as const

export const Route = createFileRoute('/$locale/characters/$id')({
  // The one decision the page turns on is made on the server, from the
  // bookmark in the request: the document title must not carry a name the
  // reader has not reached, and a title is set before any component runs.
  loader: async ({ params, context }) => {
    const page = await loadCharacter({
      data: { id: params.id, locale: context.locale },
    })
    // `notFound` is a router signal, so it is thrown here and not inside the
    // server function: a signal thrown across an RPC boundary is an error.
    if (page === null) {
      throw notFound()
    }

    return {
      detail: page.detail,
      head: page.head,
      // Below the dossier, so they stream: the strip is sixty-six marks and
      // the nearby row is five drawings, and neither is what the reader came
      // for.
      nearby: loadNearby({ data: { id: params.id, locale: context.locale } }),
      position: loadRoutePosition({
        data: { id: params.id, locale: context.locale },
      }),
    }
  },
  head: ({ loaderData }) => {
    return loaderData === undefined ?
        {}
      : { meta: describeDocument(loaderData.head) }
  },
  component: CharacterPage,
  notFoundComponent: CharacterNotFound,
})

/**
 * A character's page (Hallmark macrostructure 15, Split Studio).
 *
 * Three diptychs down the page, alternating sides. The first is the crest
 * beside the dossier: kind and episode in mono, the name as the only display
 * line, the role, the summary, then the facts as the reader's bookmark knows
 * them and the log entry. The second is the record's place on the route
 * beside a strip of the whole route with this waypoint ringed, and the two
 * records filed either side of it. The third is one row of the listed
 * characters filed nearest on the route.
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
      {...stylex.props(styles.page)}
    >
      <p
        {...stylex.props(
          styles.back,
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
 * A closure that trades a covered record's handle for the record.
 *
 * Built here rather than in the components, because a component may not call
 * a server function: under Vitest the Start plugin is deliberately absent and
 * calling one throws out of `getStartContext()`. Everything below takes the
 * closure as a prop.
 */
function usePeek<T>(
  lift: (input: {
    readonly data: { readonly handle: string; readonly locale: Locale }
  }) => Promise<null | T>,
): (handle: string) => Promise<T> {
  const { locale } = useLocale()
  const call = useServerFn(lift)

  return useCallback(
    async (handle: string) => {
      const record = await call({ data: { handle, locale } })
      if (record === null) {
        throw new Error('No record is filed under that mark')
      }

      return record
    },
    [call, locale],
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
      <Suspense fallback={null}>
        <NearbyCrests
          nearby={nearby}
          peek={peek}
        />
      </Suspense>
    </section>
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
      {...stylex.props(styles.backLink)}
    >
      ← {t('character.back')}
    </Link>
  )
}

/** `/characters/<not-a-character>`: says so, and points at the book. */
function CharacterNotFound(): ReactElement {
  const { t } = useLocale()

  return (
    <main
      id="content"
      {...stylex.props(styles.page)}
    >
      <div {...stylex.props(styles.words)}>
        <h1 {...stylex.props(styles.name)}>{t('character.notFoundTitle')}</h1>
        <p {...stylex.props(styles.summary)}>{t('character.notFoundBody')}</p>
        <p>
          <BackLink />
        </p>
      </div>
    </main>
  )
}
