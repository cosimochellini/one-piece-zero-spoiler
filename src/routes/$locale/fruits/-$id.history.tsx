/**
 * A fruit's history: when the story names it, who eats it, and who of them
 * dies, as far as the reader has reached.
 *
 * A sibling of the route module; the leading `-` keeps it out of the
 * generated route tree.
 */
import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { useLocale } from '~/i18n/LocaleContext'
import { spliced } from '~/i18n/spliced'
import type { TranslationKey } from '~/i18n/types'
import { useThreshold } from '~/lib/progress/BookmarkContext'
import type { FruitDetail, FruitHistoryEntry } from '~/lib/view/records'

import { Band } from './-$id.bands'
import { styles } from './-$id.styles'

/** The words each kind of entry says. */
const EVENT_KEY: Record<
  Exclude<FruitHistoryEntry['event'], 'named'>,
  TranslationKey
> = {
  'deceased': 'fruit.history.deceased',
  'eaten': 'fruit.history.eaten',
  'presumed-dead': 'fruit.history.presumed-dead',
}

/**
 * The fruit's history, oldest first, as far as the reader has reached: when
 * the story names it, who eats it, and who of them dies. The server sends
 * nothing past the bookmark and no count of it, so with nothing to say (a
 * covered fruit) there is no band at all.
 */
export function HistoryBand({
  detail,
}: {
  detail: FruitDetail
}): null | ReactElement {
  const { t } = useLocale()
  if (detail.history.length === 0) {
    return null
  }

  return (
    <Band
      id="history"
      lede={t('fruit.historyLede')}
      title={t('fruit.historyTitle')}
    >
      <ol {...stylex.props(styles.timeline)}>
        {detail.history.map((entry) => {
          return (
            <HistoryRow
              key={`${entry.event}-${entry.who?.id ?? ''}`}
              entry={entry}
              saga={detail.saga ?? ''}
            />
          )
        })}
      </ol>
    </Band>
  )
}

/** One entry: the mark in the reader's unit, and what happens. */
function HistoryRow({
  entry,
  saga,
}: {
  entry: FruitHistoryEntry
  saga: string
}): ReactElement {
  const { locale, t } = useLocale()
  const threshold = useThreshold()
  const { event, who } = entry

  return (
    <li {...stylex.props(styles.entry)}>
      <span
        aria-hidden="true"
        {...stylex.props(styles.dot, event !== 'named' && styles.dotEater)}
      />
      <p {...stylex.props(styles.mark)}>{threshold('chart.opensAt', entry)}</p>
      <p {...stylex.props(styles.said)}>
        {event === 'named' || who === undefined ?
          t('fruit.history.named', { saga })
        : spliced(
            t(EVENT_KEY[event]),
            'name',
            <Link
              params={{ locale, id: who.id }}
              to="/$locale/characters/$id"
              {...stylex.props(styles.who)}
            >
              {who.name}
            </Link>,
          )
        }
      </p>
    </li>
  )
}
