/* Hallmark · pre-emit critique: P5 H5 E4 S5 R4 V4 */
/* Hallmark · genre: atmospheric · macrostructure: Stage · theme: Sea Chart
 *   (locked) · enrichment: Tier B hand-built SVG (the fruit's own drawing,
 *   large, in a glow of its tint, drawn in on arrival) · nav: N9 (shared)
 *   · footer: Ft4 (shared)
 * · structure: the stage, the fruit before and after, its history, who ate
 *   it, then the rest of its own kind and of its own saga
 * · idea: "one fruit under the lights, and its story told in order" */
import * as stylex from '@stylexjs/stylex'
import { createFileRoute, Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { ArchivePage } from '~/components/ArchivePage'
import { useLocale } from '~/i18n/LocaleContext'
import { orNotFound, recordArgs } from '~/routes/$locale/-found'
import { recordHead } from '~/routes/$locale/-head'
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

import { EatersBand, KinBand, SagaBand } from './-$id.bands'
import { HistoryBand } from './-$id.history'
import { StageBand, TurnBand } from './-$id.stage'

// The bands in DOM order. Named rather than counted at the call, so a band
// inserted in the middle is one edit here and not three down the page.
const BAND = {
  stage: 0,
  turn: 1,
  history: 2,
  eaters: 3,
  kin: 4,
  saga: 5,
} as const

export const Route = createFileRoute('/$locale/fruits/$id')({
  // The one decision the page turns on is made on the server, from the
  // bookmark in the request: the document title must not carry a name the
  // reader has not reached, and a title is set before any component runs.
  loader: async (match) => {
    const args = recordArgs(match)
    // Below the stage, so they stream: neither is what the reader came for,
    // and each is a drawing per entry.
    return {
      ...orNotFound(await loadFruit(args)),
      eaters: loadFruitEaters(args),
      siblings: loadFruitSiblings(args),
    }
  },
  head: (match) => recordHead(match, 'fruits') ?? {},
  component: FruitPage,
  notFoundComponent: FruitNotFound,
})

/**
 * A devil fruit's page (Hallmark macrostructure: Stage).
 *
 * One fruit under the lights: the drawing large in a glow of its tint, the
 * name at display size with its kind and saga, and the sentence. Then the
 * fruit before and after it in the reader's order, its history as far as
 * the reader has reached, who the dossiers say ate it (each character with
 * its own fog, because knowing the fruit is not knowing who carries it), and
 * two rails: the same kind, and the same saga.
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
          settleStyles.at(BAND.stage),
        )}
      >
        <BackLink />
      </p>

      <div {...stylex.props(settleStyles.band, settleStyles.at(BAND.stage))}>
        <StageBand
          detail={detail}
          peek={peekFruit}
        />
      </div>

      <div {...stylex.props(settleStyles.band, settleStyles.at(BAND.turn))}>
        <TurnBand
          detail={detail}
          peek={peekFruit}
        />
      </div>

      <div {...stylex.props(settleStyles.band, settleStyles.at(BAND.history))}>
        <HistoryBand detail={detail} />
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

      <div {...stylex.props(settleStyles.band, settleStyles.at(BAND.saga))}>
        <SagaBand
          peek={peekFruit}
          rail={detail.sagaRail}
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
