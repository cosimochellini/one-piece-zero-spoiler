import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import { type KeyboardEvent, type ReactElement, useRef, useState } from 'react'

import {
  FOG_END,
  nextOf,
  type Orientation,
  placeOf,
  type Point,
} from '~/components/chartGeometry'
import { tintOf } from '~/components/drawing'
import { styles } from '~/components/SeaChart.styles'
import { type ChartModel, pointOf } from '~/components/seaChartModel'
import { useLocale } from '~/i18n/LocaleContext'
import { useThreshold } from '~/lib/progress/BookmarkContext'
import type { TintId } from '~/lib/view/records'

/** What every stop's link or button carries: its name, focus and keys. */
interface TargetProps {
  'aria-label': string
  'className'?: string
  'onFocus': () => void
  'onKeyDown': (event: KeyboardEvent<HTMLElement>) => void
  'ref': (element: HTMLElement | null) => void
  'style'?: Record<string, number | string>
  'tabIndex': number
}

/**
 * One tab stop for a row of targets, on `start`; the arrow keys, Home and
 * End move it and the focus with it.
 */
function useRoving(
  count: number,
  start: number,
): (index: number, label: string) => TargetProps {
  const [active, setActive] = useState(start)
  const targetsRef = useRef<(HTMLElement | null)[]>([])

  const handleKey = (event: KeyboardEvent<HTMLElement>): void => {
    const next = nextOf(event.key, active, count)
    if (next === null) {
      return
    }
    event.preventDefault()
    setActive(next)
    targetsRef.current[next]?.focus()
  }

  return (index, label) => ({
    'aria-label': label,
    'onFocus': () => {
      setActive(index)
    },
    'onKeyDown': handleKey,
    'ref': (element) => {
      targetsRef.current[index] = element
    },
    'tabIndex': index === active ? 0 : -1,
    ...stylex.props(styles.target),
  })
}

/**
 * The stops, in route order: a link to its page for an open one, a button
 * that says its number and episode for one under fog. One tab stop for the
 * lot, on the reader's own stop; the arrow keys move between them.
 *
 * A stop under fog does nothing yet (`aria-disabled`): the peek that lifts
 * it is #679's. It is a button already so the keyboard reaches it and a
 * screen reader hears its number and episode.
 */
export function SeaChartStops({
  model,
  orientation,
}: {
  model: ChartModel
  orientation: Orientation
}): ReactElement {
  const { locale, t } = useLocale()
  const threshold = useThreshold()
  const { covered, here, open, tail, total } = model
  const target = useRoving(total, Math.max(open.length - 1, 0))
  const stage = (index: number): string =>
    t('places.stage', { index: index + 1, total })

  return (
    <ol
      aria-label={t('chart.title')}
      {...stylex.props(styles.layer, styles.stops)}
    >
      {open.map((port, index) => {
        return (
          <li
            key={port.id}
            {...stylex.props(stopAt(pointOf(port), orientation, port === here))}
          >
            <Link
              aria-current={port === here ? 'location' : undefined}
              params={{ locale, id: port.id }}
              to="/$locale/places/$id"
              {...target(index, `${stage(index)}. ${port.name}`)}
            >
              <OpenDot
                here={port === here}
                tint={port.visual.tint}
              />
            </Link>
          </li>
        )
      })}
      {covered.map((entry, offset) => {
        const index = open.length + offset
        const said = `${t('places.foggedName')}. ${threshold('chart.opensAt', entry)}`
        return (
          <li
            key={entry.handle}
            {...stylex.props(stopAt(tail[offset] ?? FOG_END, orientation))}
          >
            <button
              aria-disabled="true"
              type="button"
              {...target(index, `${stage(index)}. ${said}`)}
            >
              <span {...stylex.props(styles.dot, styles.dotFog)} />
            </button>
          </li>
        )
      })}
    </ol>
  )
}

/**
 * A stop's place on the chart, centred on its point, and its place in the
 * pile where targets overlap: the reader's own stop on top, then the other
 * open stops, then the fogged ones (`here` left out).
 */
function stopAt(
  point: Point,
  orientation: Orientation,
  here?: boolean,
): stylex.StyleXStyles {
  const { left, top } = placeOf(point, orientation)
  const lift = here === undefined ? null : PILE[String(here)]
  return [styles.stop, styles.at(left, top), lift]
}

/** Which open stops sit higher in the pile. */
const PILE: Record<string, stylex.StyleXStyles> = {
  true: styles.stopHere,
  false: styles.stopOpen,
}

/** An open stop's dot, in its drawing's tint; ringed in gold where you are. */
function OpenDot({
  here,
  tint,
}: {
  here: boolean
  tint: TintId
}): ReactElement {
  return (
    <span
      {...stylex.props(
        styles.dot,
        styles.dotOpen(tintOf(tint)),
        here && styles.dotHere,
      )}
    />
  )
}
