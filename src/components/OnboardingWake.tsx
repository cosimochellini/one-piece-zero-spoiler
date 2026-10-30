import * as stylex from '@stylexjs/stylex'
import {
  type ReactElement,
  type RefCallback,
  useCallback,
  useState,
} from 'react'

import { FogCard, OpenCard } from '~/components/DemoCards'
import { type DialPoint, dialSees } from '~/components/dial'
import { styles } from '~/components/Onboarding.styles'
import { useSeriesT } from '~/i18n/LocaleContext'
import { useBookmarkSeries } from '~/lib/progress/BookmarkContext'
import type {
  CoveredRecord,
  DemoDrawings,
  DemoEntry,
  OnboardingView,
} from '~/lib/view/records'

const requests = new Map<string, Promise<DemoDrawings>>()

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
  loadDrawings,
}: {
  loadDrawings?: (() => Promise<DemoDrawings>) | undefined
  point: DialPoint
  view: OnboardingView
}): ReactElement {
  const t = useSeriesT()
  const { slug } = useBookmarkSeries()
  const [drawings, setDrawings] = useState<DemoDrawings>({})
  const ref = useCallback<RefCallback<HTMLUListElement>>(
    (section) => {
      if (section === null || loadDrawings === undefined) {
        return
      }
      return observeDemo(section, {
        series: slug,
        load: loadDrawings,
        show: setDrawings,
      })
    },
    [loadDrawings, slug],
  )
  const here = view.arcs.findLast((arc) => dialSees(point, arc))?.id

  return (
    <div {...stylex.props(styles.shelves)}>
      <Shelf
        drawings={drawings}
        entries={view.arcs}
        here={here}
        observe={ref}
        point={point}
        title={t('onboarding.arcs')}
        wide
      />
      <Shelf
        drawings={drawings}
        entries={view.cast}
        point={point}
        title={t('onboarding.cast')}
      />
      <Shelf
        drawings={drawings}
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
  drawings,
  observe,
  here,
  point,
  title,
  wide = false,
}: {
  drawings: DemoDrawings
  entries: DemoEntry[]
  here?: string | undefined
  observe?: RefCallback<HTMLUListElement>
  point: DialPoint
  title: string
  wide?: boolean
}): ReactElement {
  return (
    <section {...stylex.props(styles.shelf)}>
      <h2 {...stylex.props(styles.shelfTitle)}>{title}</h2>
      <ul
        ref={observe}
        {...stylex.props(styles.grid, wide && styles.wideGrid)}
      >
        {entries.map((entry) => {
          return (
            <li key={entry.id}>
              {dialSees(point, entry) ?
                <OpenCard
                  drawings={drawings[entry.id] ?? []}
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
  const t = useSeriesT()

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

/** One observer on the demo's first grid; headings and padding do not fetch art. */
function observeDemo(
  section: HTMLUListElement,
  {
    series,
    load,
    show,
  }: {
    load: () => Promise<DemoDrawings>
    series: string
    show: (drawings: DemoDrawings) => void
  },
): () => void {
  let active = true
  let started = false
  async function fetchDrawings(): Promise<void> {
    const pending = requests.get(series) ?? load()
    requests.set(series, pending)
    let got: DemoDrawings
    try {
      got = await pending
    } catch {
      if (requests.get(series) === pending) {
        requests.delete(series)
      }
      return
    }
    if (active) {
      show(got)
    }
  }
  const observer = new IntersectionObserver((entries) => {
    if (started || entries.every((entry) => !entry.isIntersecting)) {
      return
    }
    started = true
    observer.disconnect()
    void fetchDrawings()
  })
  observer.observe(section)
  return () => {
    active = false
    observer.disconnect()
  }
}
