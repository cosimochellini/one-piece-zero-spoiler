import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import type { ReactElement, ReactNode } from 'react'

import {
  boxOf,
  type Orientation,
  placeOf,
  type Point,
  project,
  pullOf,
} from '~/components/chartGeometry'
import { OpenPortPlate, PortPlate } from '~/components/PortPlate'
import { styles } from '~/components/SeaChartPeek.styles'
import { SpoilerVeil } from '~/components/SpoilerVeil'
import { Button } from '~/components/ui/Button'
import type { PeekProps } from '~/components/useChartPeek'
import { useLocale } from '~/i18n/LocaleContext'
import { useThreshold } from '~/lib/progress/BookmarkContext'
import type { StopView } from '~/lib/view/places'
import type {
  CoveredRecord,
  PlaceForm,
  PortView,
  RecordView,
  Sea,
  ShipView,
} from '~/lib/view/records'

/**
 * The peek a stop or a ship opens on the sea chart: its drawing, its name,
 * its sea and type and the episode it opens, and a link to its entry. Beside
 * the stop on a wide screen, a sheet on the bottom edge of a narrow one.
 */

/** Halfway down the chart: a peek below it goes above its point. */
const HALF = 2

/** Where the peek stands, and the hook's props for it. */
export interface PeekFrameProps {
  at: Point
  orientation: Orientation
  peek: PeekProps
}

/**
 * The popover itself: below its point in the top half of the chart, above
 * it in the bottom half, and its ✕ in the corner. A dialog that does not
 * hold the focus: the stop keeps the arrow keys, and Tab walks on into it.
 */
function Frame({
  at,
  children,
  label,
  orientation,
  peek,
}: PeekFrameProps & { children: ReactNode; label: string }): ReactElement {
  const { t } = useLocale()
  const { left, top } = placeOf(at, orientation)
  const below = project(at, orientation).y < boxOf(orientation).y / HALF
  const { attach, id, onClose, onPointerEnter, onPointerLeave } = peek

  return (
    <dialog
      aria-label={label}
      id={id}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      // Open as it is drawn and never modal: the stop keeps the focus and
      // the page stays live under it, so Esc is the hook's, not the
      // browser's.
      open
      ref={attach}
      {...stylex.props(
        styles.peek,
        styles.placed(
          left,
          top,
          pullOf(at, orientation, below ? 'below' : 'above'),
        ),
      )}
    >
      {children}
      <Button
        aria-label={t('chart.peekClose')}
        onClick={onClose}
        sx={styles.close}
        variant="quiet"
      >
        <span aria-hidden="true">✕</span>
      </Button>
    </dialog>
  )
}

/** The plate beside the words, and the link under both. */
function Card({
  episode,
  link,
  meta,
  name,
  plate,
}: {
  episode?: string | undefined
  link?: ReactNode
  meta?: string | undefined
  name: string
  plate: ReactNode
}): ReactElement {
  return (
    <div {...stylex.props(styles.card)}>
      <span {...stylex.props(styles.plate)}>{plate}</span>
      <span {...stylex.props(styles.words)}>
        <span {...stylex.props(styles.name)}>{name}</span>
        {meta === undefined ? null : (
          <span {...stylex.props(styles.meta)}>{meta}</span>
        )}
        {episode === undefined ? null : (
          <span {...stylex.props(styles.episode)}>{episode}</span>
        )}
      </span>
      {link}
    </div>
  )
}

/** "Open the entry", to a place's own page. */
function PlaceLink({
  id,
  onDismiss,
}: {
  id: string
  onDismiss: () => void
}): ReactElement {
  const { locale, t } = useLocale()

  return (
    <Link
      onClick={onDismiss}
      params={{ locale, id }}
      to="/$locale/places/$id"
      {...stylex.props(styles.link)}
    >
      {t('chart.peekOpen')}
    </Link>
  )
}

/** A place the reader has reached, as its peek shows it. */
function PlaceCard({
  onDismiss,
  port,
}: {
  onDismiss: () => void
  port: RecordView & { form?: PlaceForm | undefined; sea?: Sea | undefined }
}): ReactElement {
  const { t } = useLocale()
  const threshold = useThreshold()
  const meta =
    port.sea === undefined || port.form === undefined ?
      undefined
    : [t(`sea.${port.sea}`), t(`form.${port.form}`)].join(' · ')

  return (
    <Card
      episode={threshold('chart.opensAt', port)}
      link={
        <PlaceLink
          id={port.id}
          onDismiss={onDismiss}
        />
      }
      meta={meta}
      name={port.name}
      plate={<OpenPortPlate port={port} />}
    />
  )
}

/** The peek of a stop the reader has reached. */
export function StopPeek({
  port,
  stage,
  ...frame
}: PeekFrameProps & { port: StopView; stage: string }): ReactElement {
  const { onDismiss } = frame.peek

  return (
    <Frame
      label={`${stage}. ${port.name}`}
      {...frame}
    >
      <p {...stylex.props(styles.stage)}>{stage}</p>
      <PlaceCard
        onDismiss={onDismiss}
        port={port}
      />
    </Frame>
  )
}

/**
 * The peek of a stop under fog: its number and, on the veil, its episode.
 * Nothing else of it is in the page until the reader asks; the place then
 * comes from the server (`liftPort`), as on its own page.
 */
export function FogPeek({
  entry,
  peekPort,
  stage,
  ...frame
}: PeekFrameProps & {
  entry: CoveredRecord
  peekPort: (handle: string) => Promise<PortView>
  stage: string
}): ReactElement {
  const { t } = useLocale()
  const { onDismiss } = frame.peek

  return (
    <Frame
      label={`${stage}. ${t('places.foggedName')}`}
      {...frame}
    >
      <p {...stylex.props(styles.stage)}>{stage}</p>
      <SpoilerVeil
        peek={peekPort}
        // A bare plate and no name: the drawing, its colour and the name
        // stay out of the page along with everything else.
        placeholder={
          <Card
            name={t('places.foggedName')}
            plate={<PortPlate />}
          />
        }
        slot={{ covered: entry, open: false }}
      >
        {(port) => {
          return (
            <PlaceCard
              onDismiss={onDismiss}
              port={{
                ...port,
                form: port.dossier?.form,
                sea: port.dossier?.sea,
              }}
            />
          )
        }}
      </SpoilerVeil>
    </Frame>
  )
}

/**
 * The peek of a ship: what her entry in the band at the foot of the page
 * shows at this bookmark, so her drawing and her fate follow her own
 * timeline. Her entry is that band until ships have pages of their own
 * (#676).
 */
export function ShipPeek({
  ship,
  ...frame
}: PeekFrameProps & { ship: ShipView }): ReactElement {
  const { locale, t } = useLocale()
  const threshold = useThreshold()
  const { fate } = ship.dossier
  const { onDismiss } = frame.peek

  return (
    <Frame
      label={ship.name}
      {...frame}
    >
      <p {...stylex.props(styles.stage)}>{t('form.ship')}</p>
      <Card
        episode={threshold('chart.opensAt', ship)}
        link={
          <Link
            hash={ship.id}
            onClick={onDismiss}
            params={{ locale }}
            search
            to="/$locale/places"
            {...stylex.props(styles.link)}
          >
            {t('chart.peekOpen')}
          </Link>
        }
        meta={fate === undefined ? undefined : `${t('ships.fate')}: ${fate}`}
        name={ship.name}
        plate={<PortPlate visual={ship.visual} />}
      />
    </Frame>
  )
}
