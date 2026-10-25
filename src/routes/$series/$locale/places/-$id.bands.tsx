/**
 * The bands under a place's entry: where it is on the map, how its drawing
 * changes, and the stops either side of it. A ship's page has the drawings.
 *
 * Siblings of the route module; the leading `-` keeps the file out of the
 * generated route tree. Set in the character page's sheet, because the two
 * pages are one macrostructure, with the few declarations of their own below.
 */
import * as stylex from '@stylexjs/stylex'
import { useMatch } from '@tanstack/react-router'
import { type ReactElement, useId } from 'react'

import { PlaceMap } from '~/components/PlaceMap'
import { styles as ledger } from '~/components/PortEntry.styles'
import { Fact } from '~/components/PortFacts'
import { PortPlate } from '~/components/PortPlate'
import { useLocale } from '~/i18n/LocaleContext'
import { useThreshold } from '~/lib/progress/BookmarkContext'
import type { PlaceDetail, PlaceDrawing, VisitView } from '~/lib/view/places'
import type { RecordView, Slot } from '~/lib/view/records'
import { Neighbour } from '~/routes/$series/$locale/characters/-$id.neighbour'
import { styles as page } from '~/routes/$series/$locale/characters/-$id.styles'
import { color, font, radius, rule, space, text } from '~/styles/tokens.stylex'

/**
 * Whether the series in the address draws the world map. With no description
 * (a bare test router, never a series page) it does, as One Piece.
 */
function useWorldMap(): boolean {
  return (
    useMatch({ from: '/$series', shouldThrow: false })?.context.series.features
      .worldMap ?? true
  )
}

/**
 * Where the place is: its stop number and a line on what the map shows,
 * beside the stretch of the sea chart around it, then the times the story
 * comes back to it. Under fog there is no map, nor the line about it: where
 * a place lies is what the fog is for, so only the number stays. A series
 * with no world map (`features.worldMap`) has no map to be on, so the stop
 * number is the band's title.
 */
export function MapBand({ detail }: { detail: PlaceDetail }): ReactElement {
  const { t } = useLocale()
  const titleId = useId()
  const worldMap = useWorldMap()
  const stage = t('places.stage', {
    index: detail.index + 1,
    total: detail.total,
  })
  const map =
    detail.chart === null || !detail.slot.open ?
      null
    : { chart: detail.chart, name: detail.slot.record.name }

  return (
    <section
      aria-labelledby={titleId}
      {...stylex.props(page.diptych, page.reversed)}
    >
      <div {...stylex.props(page.dossier)}>
        <h2
          id={titleId}
          {...stylex.props(page.sectionTitle)}
        >
          {worldMap ? t('place.mapTitle') : stage}
        </h2>
        {worldMap ?
          <p {...stylex.props(page.position)}>{stage}</p>
        : null}
        {map === null ? null : (
          <p {...stylex.props(page.lede)}>{t('place.mapLede')}</p>
        )}
        <Visits visits={detail.visits} />
      </div>
      {map === null ? null : (
        <PlaceMap
          label={[t('chart.title'), stage, map.name].join('. ')}
          map={map.chart}
        />
      )}
    </section>
  )
}

/**
 * The later visits the reader has reached, each in their unit with its
 * note, in the facts' ledger. Nothing while there are none: the server sends
 * only the visits reached, so an empty list is all a reader is owed.
 */
function Visits({ visits }: { visits: VisitView[] }): null | ReactElement {
  const { t } = useLocale()
  const threshold = useThreshold()

  return visits.length === 0 ?
      null
    : <div {...stylex.props(ledger.filed)}>
        <h3 {...stylex.props(ledger.filedTitle)}>{t('place.visitsTitle')}</h3>
        <dl {...stylex.props(ledger.facts, styles.visits)}>
          {visits.map((visit) => {
            const at = threshold('chart.opensAt', visit)
            return (
              <Fact
                key={at}
                label={at}
                value={visit.note}
              />
            )
          })}
        </dl>
      </div>
}

/**
 * Every drawing the place or the ship has had up to the bookmark, oldest
 * first, each with the episode it is drawn from. Nothing while there is only
 * one: the plate above already shows it.
 */
export function DrawingsBand({
  detail,
}: {
  detail: { drawings: PlaceDrawing[]; slot: Slot<RecordView> }
}): null | ReactElement {
  const { t } = useLocale()
  const threshold = useThreshold()
  const titleId = useId()
  const { drawings, slot } = detail

  if (drawings.length === 0 || !slot.open) {
    return null
  }

  return (
    <section
      aria-labelledby={titleId}
      {...stylex.props(page.chronicle)}
    >
      <div {...stylex.props(page.bandHead)}>
        <h2
          id={titleId}
          {...stylex.props(page.sectionTitle)}
        >
          {t('place.drawingsTitle')}
        </h2>
        <p {...stylex.props(page.lede)}>
          {t(
            slot.record.kind === 'ship' ?
              'ship.drawingsLede'
            : 'place.drawingsLede',
          )}
        </p>
      </div>
      <ol {...stylex.props(styles.strip)}>
        {drawings.map((drawing) => {
          const from = threshold('chart.opensAt', drawing)
          return (
            <li
              key={from}
              {...stylex.props(styles.stage)}
            >
              <div {...stylex.props(styles.plate)}>
                <PortPlate
                  visual={{
                    strokes: drawing.strokes,
                    tint: slot.record.visual.tint,
                  }}
                />
              </div>
              <p {...stylex.props(styles.from)}>{from}</p>
            </li>
          )
        })}
      </ol>
    </section>
  )
}

/**
 * The stops before and after this one in the reader's order, as the
 * character page's neighbours: a small plate and a name that leads to its
 * page, or fog with the episode.
 */
export function TurnBand({
  detail,
  peek,
}: {
  detail: PlaceDetail
  peek: (handle: string) => Promise<RecordView>
}): ReactElement {
  const { t } = useLocale()
  const titleId = useId()

  return (
    <section
      aria-labelledby={titleId}
      {...stylex.props(page.nearby)}
    >
      <h2
        id={titleId}
        {...stylex.props(page.sectionTitle)}
      >
        {t('place.turn')}
      </h2>
      <dl {...stylex.props(page.neighbours)}>
        <Neighbour
          empty={t('place.routeStart')}
          label={t('place.previous')}
          peek={peek}
          slot={detail.previous}
        />
        <Neighbour
          empty={t('place.routeEnd')}
          label={t('place.next')}
          peek={peek}
          slot={detail.next}
        />
      </dl>
    </section>
  )
}

const styles = stylex.create({
  // One visit to a row: the map band's column is too narrow for the
  // ledger's two.
  visits: { gridTemplateColumns: 'minmax(0, 1fr)' },
  // The drawings side by side, wrapping on a phone: two to a row at 320 px.
  strip: {
    gap: space.md,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 8.5rem), 1fr))',
    listStyleType: 'none',
    paddingInlineStart: 0,
  },
  stage: { gap: space.xs, display: 'grid', minWidth: 0 },
  plate: {
    padding: space.xs,
    borderColor: color.rule,
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    aspectRatio: '1',
    backgroundColor: color.paper2,
  },
  from: {
    color: color.ink2,
    fontFamily: font.mono,
    fontSize: text.xs,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
  },
})
