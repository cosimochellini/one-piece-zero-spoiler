import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { FogCard, OpenCard } from '~/components/DemoCards'
import { type DialPoint, dialSees } from '~/components/dial'
import { styles } from '~/components/Onboarding.styles'
import { useLocale } from '~/i18n/LocaleContext'
import type {
  CoveredRecord,
  DemoEntry,
  OnboardingView,
} from '~/lib/view/records'

/**
 * The preview under the dial: East Blue's arcs, its leads, its places and
 * its ship, each open or under fog at the dial's point, and the covered
 * records past it.
 *
 * Every card decides for itself from the dial, in the browser: the server
 * sent East Blue and nothing past it, so there is nothing here the dial
 * could open by mistake.
 */
export function OnboardingWake({
  point,
  view,
}: {
  point: DialPoint
  view: OnboardingView
}): ReactElement {
  const { t } = useLocale()
  const here = view.arcs.findLast((arc) => dialSees(point, arc))?.id

  return (
    <div {...stylex.props(styles.shelves)}>
      <Shelf
        entries={view.arcs}
        here={here}
        point={point}
        title={t('onboarding.arcs')}
        wide
      />
      <Shelf
        entries={view.cast}
        point={point}
        title={t('onboarding.cast')}
      />
      <Shelf
        entries={view.places}
        point={point}
        title={t('onboarding.places')}
      />
      <Tail
        fogged={view.fogged}
        point={point}
        tail={view.tail}
      />
    </div>
  )
}

/** One shelf of the preview: a title and a grid of cards. */
function Shelf({
  entries,
  here,
  point,
  title,
  wide = false,
}: {
  entries: DemoEntry[]
  here?: string | undefined
  point: DialPoint
  title: string
  wide?: boolean
}): ReactElement {
  return (
    <section {...stylex.props(styles.shelf)}>
      <h2 {...stylex.props(styles.shelfTitle)}>{title}</h2>
      <ul {...stylex.props(styles.grid, wide && styles.wideGrid)}>
        {entries.map((entry) => {
          return (
            <li key={entry.id}>
              {dialSees(point, entry) ?
                <OpenCard
                  entry={entry}
                  here={entry.id === here}
                  point={point}
                />
              : <FogCard
                  entry={entry}
                  point={point}
                />
              }
            </li>
          )
        })}
      </ul>
    </section>
  )
}

/** The covered records past East Blue, and how many there are. */
function Tail({
  fogged,
  point,
  tail,
}: {
  fogged: number
  point: DialPoint
  tail: CoveredRecord[]
}): ReactElement {
  const { t } = useLocale()

  return (
    <section
      aria-labelledby="onboarding-tail"
      {...stylex.props(styles.tail)}
    >
      <h2
        id="onboarding-tail"
        {...stylex.props(styles.shelfTitle)}
      >
        {t('onboarding.tailTitle')}
      </h2>
      <p {...stylex.props(styles.hint)}>
        {t('onboarding.tail', { count: fogged })}
      </p>
      <ul {...stylex.props(styles.grid)}>
        {tail.map((covered) => {
          return (
            <li key={covered.handle}>
              <FogCard
                entry={covered}
                point={point}
              />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
