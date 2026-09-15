import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { FruitFrame } from '~/components/FruitFrame'
import { styles } from '~/components/SpecimenBands.styles'
import { SpoilerVeil } from '~/components/SpoilerVeil'
import { useLocale } from '~/i18n/LocaleContext'
import { useThreshold } from '~/lib/progress/BookmarkContext'
import type { FruitView, Slot } from '~/lib/view/records'

/** A short row of fruits, each with its own fog already decided. */
export type FruitRailProps = {
  readonly fruits: readonly Slot<FruitView>[]
  readonly peek: (handle: string) => Promise<FruitView>
}

/**
 * The fruits filed nearest this one on the same plate, as one row of
 * drawings.
 *
 * Nearness is measured in thresholds, so the row is the reader's own
 * neighbourhood of the sheet rather than an editorial "see also".
 */
export function FruitRail({ fruits, peek }: FruitRailProps): ReactElement {
  return (
    <ul {...stylex.props(styles.rail)}>
      {fruits.map((slot) => {
        return (
          <li
            key={
              slot.open ?
                `open-${slot.record.id}`
              : `fog-${slot.covered.handle}`
            }
            {...stylex.props(styles.railItem)}
          >
            <RailSpecimen
              peek={peek}
              slot={slot}
            />
          </li>
        )
      })}
    </ul>
  )
}

/** One drawing and one name, with the threshold under both either way. */
function RailSpecimen({
  peek,
  slot,
}: {
  readonly peek: (handle: string) => Promise<FruitView>
  readonly slot: Slot<FruitView>
}): ReactElement {
  const { locale, t } = useLocale()
  const threshold = useThreshold()
  const filed = slot.open ? slot.record : slot.covered

  return (
    <>
      <SpoilerVeil
        density="compact"
        peek={peek}
        placeholder={<FruitFrame />}
        slot={slot}
        strength="media"
      >
        {(record) => <FruitFrame visual={record.visual} />}
      </SpoilerVeil>

      <SpoilerVeil
        density="inline"
        peek={peek}
        placeholder={
          <span {...stylex.props(styles.railName)}>
            {t('fruit.foggedName')}
          </span>
        }
        slot={slot}
      >
        {(record) => {
          return (
            <Link
              params={{ locale, id: record.id }}
              to="/$locale/fruits/$id"
              {...stylex.props(styles.railName, styles.link)}
            >
              {record.name}
            </Link>
          )
        }}
      </SpoilerVeil>

      <p {...stylex.props(styles.meta)}>
        <span {...stylex.props(styles.episode)}>
          {threshold('fruit.opensAt', filed)}
        </span>
      </p>
    </>
  )
}
