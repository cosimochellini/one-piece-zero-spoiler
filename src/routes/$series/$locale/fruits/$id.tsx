import * as stylex from '@stylexjs/stylex'
import { createFileRoute, DefaultGlobalNotFound } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { ArchivePage } from '~/components/ArchivePage'
import { useDeclares } from '~/components/useDeclares'
import { onlyUnder, useSeriesT } from '~/i18n/LocaleContext'
/* Hallmark · pre-emit critique: P5 H5 E4 S5 R4 V4 */
/* Hallmark · genre: atmospheric · macrostructure: Stage · theme: Sea Chart
 *   (locked) · enrichment: Tier B hand-built SVG (the fruit's own drawing,
 *   large, in a glow of its tint, drawn in on arrival, and a switch under it
 *   between the drawings the reader has reached) · nav: N9 (shared)
 *   · footer: Ft4 (shared)
 * · structure: the stage, its history, who ate it, then the rest of its own
 *   kind and of its own saga
 * · idea: "one fruit under the lights, and its story told in order" */
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
  liftFruit,
  loadFruit,
  loadFruitEaters,
  loadFruitSiblings,
} from '~/server/api'
import { settleStyles } from '~/styles/settle'

import { EatersBand, KinBand, SagaBand } from './-$id.bands'
import { HistoryBand } from './-$id.history'
import { StageBand } from './-$id.stage'

// The bands in DOM order. Named rather than counted at the call, so a band
// inserted in the middle is one edit here and not three down the page.
const BAND = { stage: 0, history: 1, eaters: 2, kin: 3, saga: 4 } as const

export const Route = createFileRoute('/$series/$locale/fruits/$id')({
  beforeLoad: ({ context }) => {
    requirePage(context.series, 'fruits')
  },
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
 * One fruit under the lights: the drawing large in a glow of its tint, with
 * a switch under it once the reader has seen the fruit drawn more than once,
 * the name at display size with its kind and saga, and the sentence. Then the
 * history as far as the reader has reached, who the dossiers say ate it
 * (each character with its own fog, because knowing the fruit is not knowing
 * who carries it), and
 * two rails: the same kind, and the same saga.
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
        <RecordBackLink section="fruits" />
      </p>

      <div {...stylex.props(settleStyles.band, settleStyles.at(BAND.stage))}>
        <StageBand
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

/** `/fruits/<not-a-fruit>`: says so, and points at the sheet. */
function FruitNotFound(): ReactElement {
  const onePiece = useSeriesT('one-piece')
  const declares = useDeclares()
  // A series with no fruits page gets the plain 404, with no link back to it.
  if (!declares('fruits')) {
    return <DefaultGlobalNotFound />
  }
  const t = onlyUnder(onePiece, 'one-piece')

  return (
    <ArchivePage
      count={t('fruit.notFoundBody')}
      title={t('fruit.notFoundTitle')}
    >
      <p>
        <RecordBackLink section="fruits" />
      </p>
    </ArchivePage>
  )
}
