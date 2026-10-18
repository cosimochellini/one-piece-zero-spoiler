/* Hallmark · pre-emit critique: P5 H4 E4 S5 R4 V4 */
/* Hallmark · genre: atmospheric · macrostructure: Split Studio (as the
 *   character page) · theme: Sea Chart (locked) · enrichment: Tier B
 *   hand-built SVG (the plate, the stretch of the sea chart around the
 *   place, the place's drawings in a row) · nav: N9 (shared) · footer: Ft4
 *   (shared)
 * · structure: the plate | entry diptych · map words | the stretch of the
 *   chart · the drawings in order · the stops before and after
 * · a ship (#676): the same diptych (facts, log, places she reaches) and the
 *   drawings in order; no map and no neighbours, because a ship is not a
 *   stop
 * · idea: "one stop of the chart, opened flat" */
import * as stylex from '@stylexjs/stylex'
import { createFileRoute, Link } from '@tanstack/react-router'
import type { ReactElement, ReactNode } from 'react'

import { ArchivePage } from '~/components/ArchivePage'
import { useLocale } from '~/i18n/LocaleContext'
import { orNotFound, recordArgs } from '~/routes/$locale/-found'
import { recordHead } from '~/routes/$locale/-head'
import { usePeek } from '~/routes/$locale/-peek'
import { recordStyles } from '~/routes/$locale/-record.styles'
import { liftPort, liftRecord, liftShip, loadPlace } from '~/server/api'
import { settleStyles } from '~/styles/settle'

import { DrawingsBand, MapBand, TurnBand } from './-$id.bands'
import { EntryDiptych, PortBody, ShipBody } from './-$id.entry'

// The bands in DOM order. Named rather than counted at the call, so a band
// inserted in the middle is one edit here and not three down the page.
const BAND = { entry: 0, map: 1, drawings: 2, turn: 3 } as const

export const Route = createFileRoute('/$locale/places/$id')({
  // The one decision the page turns on is made on the server, from the
  // bookmark in the request: the document title must not carry a name the
  // reader has not reached, and a title is set before any component runs.
  // Awaited whole: the map and the drawings are the page, not an extra.
  loader: async (match) => orNotFound(await loadPlace(recordArgs(match))),
  head: (match) => recordHead(match, 'places') ?? {},
  component: PlacePage,
  notFoundComponent: PlaceNotFound,
})

/**
 * A place's page (Hallmark macrostructure 15, Split Studio, as a
 * character's), and a ship's, which is served from the same address.
 *
 * Four bands down a place's page. The first is the plate beside the entry:
 * kind and episode in mono, the name as the only display line, the
 * sentence, the facts, the log entry and the records found there. The
 * second is the place on the map: its stop number beside the stretch of the
 * sea chart around it. The third is every drawing the place has had up to
 * the bookmark, when there is more than one. The fourth is the stops before
 * and after it.
 *
 * A ship's page has the first and the third: her plate beside her entry
 * (who designed her, where the crew receives her, her fate and the places
 * she reaches, each as far as the bookmark), then her drawings. No map and
 * no neighbours: a ship is not a stop, and the ship after her, under fog,
 * would tell a reader at the start that she does not last.
 *
 * Under fog the plate and the entry are covered together, the title is
 * generic, and nothing places or draws it: the stop number and the episode
 * stay, because "stop 23 of 39, episode 336" is the promise and not the
 * spoiler.
 */
function PlacePage(): ReactElement {
  const page = Route.useLoaderData()
  const peekPort = usePeek(liftPort)
  const peekShip = usePeek(liftShip)
  const peekRecord = usePeek(liftRecord)
  const place = 'detail' in page ? page.detail : null

  return (
    <main
      id="content"
      {...stylex.props(recordStyles.page)}
    >
      <p
        {...stylex.props(
          recordStyles.back,
          settleStyles.band,
          settleStyles.at(BAND.entry),
        )}
      >
        <BackLink />
      </p>

      <Band at={BAND.entry}>
        {'ship' in page ?
          <EntryDiptych
            Body={ShipBody}
            kind="ship"
            peek={peekShip}
            peekRecord={peekRecord}
            slot={page.ship.slot}
          />
        : <EntryDiptych
            Body={PortBody}
            kind="place"
            peek={peekPort}
            peekRecord={peekRecord}
            slot={page.detail.slot}
          />
        }
      </Band>

      {place === null ? null : (
        <Band at={BAND.map}>
          <MapBand detail={place} />
        </Band>
      )}

      <Band at={BAND.drawings}>
        <DrawingsBand detail={'ship' in page ? page.ship : page.detail} />
      </Band>

      {place === null ? null : (
        <Band at={BAND.turn}>
          <TurnBand
            detail={place}
            peek={peekRecord}
          />
        </Band>
      )}
    </main>
  )
}

/** One band, settling into place in its turn. */
function Band({
  at,
  children,
}: {
  at: number
  children: ReactNode
}): ReactElement {
  return (
    <div {...stylex.props(settleStyles.band, settleStyles.at(at))}>
      {children}
    </div>
  )
}

/** Hallmark C3: a word, an arrow, a rule. It is the page's one way back. */
function BackLink(): ReactElement {
  const { locale, t } = useLocale()

  return (
    <Link
      params={{ locale }}
      to="/$locale/places"
      {...stylex.props(recordStyles.backLink)}
    >
      ← {t('place.back')}
    </Link>
  )
}

/** `/places/<not-a-place>`: says so, and points at the places page. */
function PlaceNotFound(): ReactElement {
  const { t } = useLocale()

  return (
    <ArchivePage
      count={t('place.notFoundBody')}
      title={t('place.notFoundTitle')}
    >
      <p>
        <BackLink />
      </p>
    </ArchivePage>
  )
}
