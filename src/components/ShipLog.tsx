import * as stylex from '@stylexjs/stylex'
import { type ReactElement, useId } from 'react'

import { ShipFacts } from '~/components/PortFacts'
import { FiledHere } from '~/components/PortLog'
import { styles } from '~/components/PortLog.styles'
import { PortPlate } from '~/components/PortPlate'
import { useLocale } from '~/i18n/LocaleContext'
import { useThreshold } from '~/lib/progress/BookmarkContext'
import type { RecordView, ShipView, Slot } from '~/lib/view/records'

/** The ships the reader has reached, and how to lift the fog on a place. */
export type ShipLogProps = {
  readonly peekRecord: (handle: string) => Promise<RecordView>
  readonly ships: readonly ShipView[]
}

/**
 * The ships the crew sails, in a band above the log.
 *
 * Each is drawn as a port is, a plate beside a dossier. Only the ships the
 * reader has reached are here, with no covered card and no count: a second
 * ship under fog would tell a reader at the start that the first one does
 * not last. With none reached there is no band at all. The ships are not
 * numbered, because they are not stops on the route.
 */
export function ShipLog({
  ships,
  peekRecord,
}: ShipLogProps): null | ReactElement {
  const { t } = useLocale()
  const titleId = useId()

  if (ships.length === 0) {
    return null
  }

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
        {ships.map((ship) => {
          return (
            <Ship
              key={ship.id}
              peekRecord={peekRecord}
              ship={ship}
            />
          )
        })}
      </ul>
    </section>
  )
}

/** One ship: when she first appears, then the plate beside the dossier. */
function Ship({
  ship,
  peekRecord,
}: {
  readonly peekRecord: (handle: string) => Promise<RecordView>
  readonly ship: ShipView
}): ReactElement {
  const { t } = useLocale()
  const threshold = useThreshold()

  return (
    // The anchor a ship's tile points at. Only reached ships are drawn, so
    // the id never spells a name the reader has not met.
    <li
      id={ship.id}
      {...stylex.props(styles.ship)}
    >
      <p {...stylex.props(styles.stageEpisode)}>
        {threshold('places.firstSeen', ship)}
      </p>

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
    </li>
  )
}

/** A place the reader has reached, as the tile list takes it. */
function reached(record: RecordView): Slot<RecordView> {
  return { open: true, record }
}
