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
import {
  type ChartModel,
  pointOf,
  sagaTintOf,
} from '~/components/seaChartModel'
import type {
  PeekTarget,
  TriggerProps as PeekTrigger,
} from '~/components/useChartPeek'
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

/** A stop's target: the roving focus and the peek's handlers together. */
type Target = Omit<TargetProps, 'onFocus'> & PeekTrigger

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
 * Each stop's target: one tab stop for the lot (`useRoving`) and the peek's
 * handlers, both listening for the focus.
 */
function useTargets({
  count,
  onReach,
  start,
  trigger,
}: {
  count: number
  onReach: (index: number) => void
  start: number
  trigger: (target: PeekTarget, link: boolean) => PeekTrigger
}): (index: number, label: string, link?: boolean) => Target {
  const roving = useRoving(count, start)

  return (index, label, link = false) => {
    const own = roving(index, label)
    const peek = trigger({ index, kind: 'stop' }, link)
    return {
      ...own,
      ...peek,
      onFocus: (event) => {
        own.onFocus()
        onReach(index)
        peek.onFocus(event)
      },
    }
  }
}

/**
 * The stops, in route order: a link to its page for an open one, a button
 * that says its number and episode for one under fog. One tab stop for the
 * lot, on the reader's own stop; the arrow keys move between them.
 *
 * Every stop opens its peek (`useChartPeek`): a click on an open one still
 * follows its link, a tap on a phone peeks first.
 */
export function SeaChartStops({
  model,
  onReach,
  orientation,
  trigger,
}: {
  model: ChartModel
  /** Brings a stop the focus reaches into the window, when it zooms. */
  onReach?: ((point: Point) => void) | undefined
  orientation: Orientation
  trigger: (target: PeekTarget, link: boolean) => PeekTrigger
}): ReactElement {
  const { t } = useLocale()
  const { open, total } = model
  const target = useTargets({
    count: total,
    onReach: (index) => {
      onReach?.(stopPoint(model, index))
    },
    start: Math.max(open.length - 1, 0),
    trigger,
  })
  const stage = (index: number): string =>
    t('places.stage', { index: index + 1, total })

  return (
    <ol
      aria-label={t('chart.title')}
      {...stylex.props(styles.layer, styles.stops)}
    >
      <OpenStops
        model={model}
        orientation={orientation}
        stage={stage}
        target={target}
      />
      <FogStops
        dim={model.lit !== null}
        from={open.length}
        model={model}
        orientation={orientation}
        stage={stage}
        target={target}
      />
    </ol>
  )
}

/** Where the stop at `index` in the route is drawn: open, or on the tail. */
function stopPoint(model: ChartModel, index: number): Point {
  const port = model.open[index]

  return port === undefined ?
      (model.tail[index - model.open.length] ?? FOG_END)
    : pointOf(port)
}

/**
 * The open stops, each a link to its page with its dot in its saga's hue;
 * the reader's own marked as where they are.
 */
function OpenStops({
  model,
  orientation,
  stage,
  target,
}: {
  model: ChartModel
  orientation: Orientation
  stage: (index: number) => string
  target: (index: number, label: string, link?: boolean) => Target
}): ReactElement {
  const { locale } = useLocale()
  const { here, lit, open } = model

  return (
    <>
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
              {...target(index, `${stage(index)}. ${port.name}`, true)}
            >
              <OpenDot
                dim={lit !== null && !lit.has(port.id)}
                here={port === here}
                seen={port.chart?.seen === true}
                tint={sagaTintOf(port.saga)}
              />
            </Link>
          </li>
        )
      })}
    </>
  )
}

/**
 * The stops under fog, numbered on from the open ones: each a button that
 * says its number and episode and opens the veiled peek, its dot on the
 * tail, faint while the index's picks are set (a stop under fog has nothing
 * to pick it by).
 */
function FogStops({
  dim,
  from,
  model,
  orientation,
  stage,
  target,
}: {
  dim: boolean
  from: number
  model: ChartModel
  orientation: Orientation
  stage: (index: number) => string
  target: (index: number, label: string) => Target
}): ReactElement {
  const { t } = useLocale()
  const threshold = useThreshold()

  return (
    <>
      {model.covered.map((entry, offset) => {
        const index = from + offset
        const said = `${t('places.foggedName')}. ${threshold('chart.opensAt', entry)}`
        return (
          <li
            key={entry.handle}
            {...stylex.props(
              stopAt(model.tail[offset] ?? FOG_END, orientation),
            )}
          >
            <button
              type="button"
              {...target(index, `${stage(index)}. ${said}`)}
            >
              <span
                {...stylex.props(
                  styles.dot,
                  styles.dotFog,
                  dim && styles.dotDim,
                )}
              />
            </button>
          </li>
        )
      })}
    </>
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

/**
 * An open stop's dot, in its saga's hue; an eye for a place the story only
 * shows; ringed in gold where you are, and faint when the index's picks
 * leave it out.
 */
function OpenDot({
  dim,
  here,
  seen,
  tint,
}: {
  dim: boolean
  here: boolean
  seen: boolean
  tint: TintId
}): ReactElement {
  return (
    <span
      {...stylex.props(
        styles.dot,
        styles.dotOpen(tintOf(tint)),
        seen && styles.dotSeen,
        here && styles.dotHere,
        dim && styles.dotDim,
      )}
    />
  )
}
