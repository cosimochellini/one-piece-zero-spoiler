/* Hallmark · pre-emit critique: P5 H5 E4 S5 R4 V4 */
/* Hallmark · genre: atmospheric · macrostructure: Specimen · theme: Sea Chart
 *   (locked) · enrichment: Tier B hand-built SVG (the fruit's own drawing in a
 *   hairline frame) · nav: N9 (shared) · footer: Ft4 (shared)
 * · structure: the plate, then who ate it, then the rest of its own kind
 * · idea: "one specimen, taken off the sheet and set down on its own" */
import * as stylex from '@stylexjs/stylex'
import { createFileRoute, Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { ArchivePage } from '~/components/ArchivePage'
import { useLocale } from '~/i18n/LocaleContext'
import { isLocale } from '~/i18n/locales'
import { orNotFound } from '~/routes/$locale/-found'
import { describeRecordPage } from '~/routes/$locale/-head'
import { usePeek } from '~/routes/$locale/-peek'
import { recordStyles } from '~/routes/$locale/-record.styles'
import {
  liftCharacter,
  liftFruit,
  loadFruit,
  loadFruitEaters,
  loadFruitSiblings,
} from '~/server/api'
import { settleStyles } from '~/styles/settle'

import { EatersBand, KinBand, PlateBand } from './-$id.bands'

// The three bands in DOM order. Named rather than counted at the call, so a
// band inserted in the middle is one edit here and not three down the page.
const BAND = { plate: 0, eaters: 1, kin: 2 } as const

export const Route = createFileRoute('/$locale/fruits/$id')({
  // The one decision the page turns on is made on the server, from the
  // bookmark in the request: the document title must not carry a name the
  // reader has not reached, and a title is set before any component runs.
  loader: async ({ params, context }) => {
    const page = await loadFruit({
      data: { id: params.id, locale: context.locale },
    })
    const found = orNotFound(page)

    return {
      detail: found.detail,
      head: found.head,
      // Below the plate, so they stream: neither is what the reader came for,
      // and each is a drawing per entry.
      eaters: loadFruitEaters({
        data: { id: params.id, locale: context.locale },
      }),
      siblings: loadFruitSiblings({
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
          parentPath: '/fruits',
          parentTitleKey: 'fruits.pageTitle',
          pathname: match.pathname,
        })
  },
  component: FruitPage,
  notFoundComponent: FruitNotFound,
})

/**
 * A devil fruit's page (Hallmark macrostructure 10, Specimen).
 *
 * One specimen off the sheet: the drawing in its frame beside the kind, the
 * threshold, the name at display size and the sentence. Under it, who the
 * dossiers say ate it — each character with its own fog, because knowing the
 * fruit is not knowing who carries it — and a rail of the other fruits of the
 * same kind.
 *
 * No route strip: a fruit is not a waypoint on the landing chart, so there is
 * no position on it to print.
 */
function FruitPage(): ReactElement {
  const { detail, eaters, siblings } = Route.useLoaderData()
  const peekFruit = usePeek(liftFruit)
  const peekCharacter = usePeek(liftCharacter)

  return (
    <main
      id="content"
      {...stylex.props(recordStyles.page)}
    >
      <p
        {...stylex.props(
          recordStyles.back,
          settleStyles.band,
          settleStyles.at(BAND.plate),
        )}
      >
        <BackLink />
      </p>

      <div {...stylex.props(settleStyles.band, settleStyles.at(BAND.plate))}>
        <PlateBand
          detail={detail}
          peek={peekFruit}
        />
      </div>

      <div {...stylex.props(settleStyles.band, settleStyles.at(BAND.eaters))}>
        <EatersBand
          eaters={eaters}
          peek={peekCharacter}
        />
      </div>

      <div {...stylex.props(settleStyles.band, settleStyles.at(BAND.kin))}>
        <KinBand
          peek={peekFruit}
          siblings={siblings}
        />
      </div>
    </main>
  )
}

/** Hallmark C3: a word, an arrow, a rule. It is the page's one way back. */
function BackLink(): ReactElement {
  const { locale, t } = useLocale()

  return (
    <Link
      params={{ locale }}
      to="/$locale/fruits"
      {...stylex.props(recordStyles.backLink)}
    >
      ← {t('fruit.back')}
    </Link>
  )
}

/** `/fruits/<not-a-fruit>`: says so, and points at the sheet. */
function FruitNotFound(): ReactElement {
  const { t } = useLocale()

  return (
    <ArchivePage
      count={t('fruit.notFoundBody')}
      title={t('fruit.notFoundTitle')}
    >
      <p>
        <BackLink />
      </p>
    </ArchivePage>
  )
}
