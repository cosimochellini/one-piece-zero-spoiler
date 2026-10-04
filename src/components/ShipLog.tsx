import * as stylex from '@stylexjs/stylex'
import { type ReactElement, useId } from 'react'

import { ShipFacts } from '~/components/PortFacts'
import { FiledHere, FoggedSpread } from '~/components/PortLog'
import { styles } from '~/components/PortLog.styles'
import { PortPlate } from '~/components/PortPlate'
import { SpoilerVeil } from '~/components/SpoilerVeil'
import { useLocale } from '~/i18n/LocaleContext'
import { useThreshold } from '~/lib/progress/BookmarkContext'
import type { RecordView, ShipView, Slot } from '~/lib/view/records'

/** The ships, and how to lift the fog on one or on a place she reaches. */
export type ShipLogProps = {
  readonly peek: (handle: string) => Promise<ShipView>
  readonly peekRecord: (handle: string) => Promise<RecordView>
  readonly ships: readonly Slot<ShipView>[]
}

/**
 * The ships the crew sails, in a band above the log.
 *
 * Each is drawn as a port is, a plate beside a dossier, under the same fog:
 * a ship the reader has not reached keeps its kind and its episode and
 * nothing else, which is what a covered ship already says on the chart and
 * beside a character. The ships are not numbered, because they are not
 * stops on the route.
 */
export function ShipLog({
  ships,
  peek,
  peekRecord,
}: ShipLogProps): ReactElement {
  const { t } = useLocale()
  const titleId = useId()

  return (
    <section
      aria-labelledby={titleId}
      {...stylex.props(styles.ships)}
    >
      <p
        id={titleId}
        {...stylex.props(styles.stageLabel, styles.stageOpen)}
      >
        {t('ships.title')}
      </p>
      <ul {...stylex.props(styles.shipList)}>
        {ships.map((slot) => {
          return (
            <Ship
              key={
                slot.open ?
                  `open-${slot.record.id}`
                : `fog-${slot.covered.handle}`
              }
              peek={peek}
              peekRecord={peekRecord}
              slot={slot}
            />
          )
        })}
      </ul>
    </section>
  )
}

/** One ship: when she first appears, then her entry under whatever fog it is owed. */
function Ship({
  slot,
  peek,
  peekRecord,
}: {
  readonly peek: (handle: string) => Promise<ShipView>
  readonly peekRecord: (handle: string) => Promise<RecordView>
  readonly slot: Slot<ShipView>
}): ReactElement {
  const { t } = useLocale()
  const threshold = useThreshold()
  const entry = slot.open ? slot.record : slot.covered

  return (
    <li
      // The anchor a ship's tile points at, set only once the ship is open:
      // an id spells the name a covered entry is meant to hide.
      id={slot.open ? slot.record.id : undefined}
      {...stylex.props(styles.ship)}
    >
      <p {...stylex.props(styles.stageEpisode)}>
        {threshold('places.firstSeen', entry)}
      </p>

      <SpoilerVeil
        peek={peek}
        placeholder={
          <FoggedSpread
            description={threshold('ships.foggedDescription', entry)}
            name={t('ships.foggedName')}
          />
        }
        slot={slot}
        strength="media"
      >
        {(ship) => {
          return (
            <ShipSpread
              peekRecord={peekRecord}
              ship={ship}
            />
          )
        }}
      </SpoilerVeil>
    </li>
  )
}

/** An open ship: the plate beside the dossier. */
function ShipSpread({
  ship,
  peekRecord,
}: {
  readonly peekRecord: (handle: string) => Promise<RecordView>
  readonly ship: ShipView
}): ReactElement {
  const { t } = useLocale()

  return (
    <div {...stylex.props(styles.spread)}>
      <div {...stylex.props(styles.plate)}>
        <PortPlate visual={ship.visual} />
      </div>

      <div {...stylex.props(styles.dossier)}>
        <h2 {...stylex.props(styles.name)}>{ship.name}</h2>
        <p {...stylex.props(styles.summary)}>{ship.summary}</p>

        {ship.dossier === null ? null : (
          <>
            <ShipFacts entry={ship.dossier} />
            <p {...stylex.props(styles.entry)}>{ship.dossier.log}</p>
            {ship.dossier.ports.length === 0 ? null : (
              <FiledHere
                filed={ship.dossier.ports.map((place) => reached(place))}
                peekRecord={peekRecord}
                title={t('ships.ports')}
              />
            )}
          </>
        )}
      </div>
    </div>
  )
}

/** A place the reader has reached, as the tile list takes it. */
function reached(record: RecordView): Slot<RecordView> {
  return { open: true, record }
}
