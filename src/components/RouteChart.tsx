import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import type { ReactElement, ReactNode } from 'react'

import { ChartArt } from '~/components/ChartArt'
import {
  type Bow,
  COMPASS_RING,
  COMPASS_STAR,
  COMPASS_VIEWBOX,
  HORIZON_ABOVE,
  HORIZON_BELOW,
  SEGMENT,
  SEGMENT_VIEWBOX,
} from '~/components/chrome/route-chart'
import { FoggedWaypoint } from '~/components/FoggedWaypoint'
import { styles } from '~/components/RouteChart.styles'
import { SpoilerVeil } from '~/components/SpoilerVeil'
import { useLocale } from '~/i18n/LocaleContext'
import type { TranslationKey } from '~/i18n/types'
import { useThreshold } from '~/lib/progress/BookmarkContext'
import { type Bookmark, serialiseBookmark } from '~/lib/progress/episode'
import { describeBookmark } from '~/lib/progress/threshold'
import type {
  CoveredRecord,
  Drawing,
  EntityKind,
  Slot,
  WaypointView,
} from '~/lib/view/records'

// The bow flips from one waypoint to the next, so the route wanders like a
// course rather than running like a ruler.
const BOW_PERIOD = 2

const KIND_KEY: Readonly<Record<EntityKind, TranslationKey>> = {
  character: 'kind.character',
  arc: 'kind.arc',
  place: 'kind.place',
  ship: 'kind.ship',
}

/** The two runs the chart is drawn from, and the reader's own line. */
export type RouteChartProps = {
  /** Still needed here: the horizon keys on it and is labelled with it. */
  readonly bookmark: Bookmark
  /**
   * The waypoints the reader has reached, in the order their unit reaches
   * them, then the ones they have not. Already a prefix and a suffix of one
   * route: the split is the server's, over records this page never sees.
   */
  readonly covered: readonly CoveredRecord[]
  readonly open: readonly WaypointView[]
  readonly peek: (handle: string) => Promise<WaypointView>
}

/**
 * The archive as a sea route (the page's Map / Diagram).
 *
 * Every entry is a waypoint on one vertical route, in the order the reader's
 * unit reaches them. The reader's own episode is drawn across the route as a
 * horizon line, and it is the only thing on the chart that moves: waypoints
 * above it are open and drawn in gold, waypoints below it are under fog, their
 * names covered and their stretch of route dashed. That line is the product; a
 * page of paragraphs describing it would describe a demonstration instead of
 * running one.
 *
 * The episode a waypoint opens at stays legible under fog on purpose.
 * "Something opens at episode 1089" is the promise, not the spoiler; the name
 * and the summary are the spoiler, and those are what the veil takes.
 *
 * The open waypoints are a prefix of the route, which is what lets the
 * horizon be a single element between two runs rather than a marker that has
 * to be interpolated along it.
 */
export function RouteChart({
  open,
  covered,
  bookmark,
  peek,
}: RouteChartProps): ReactElement {
  return (
    <ol {...stylex.props(styles.route)}>
      {open.map((record, index) => {
        return (
          // Two runs in one list, so the keys are namespaced: an id and a
          // handle are different things and must not be able to collide.
          <Waypoint
            key={`open-${record.id}`}
            index={index}
            peek={peek}
            slot={{ open: true, record }}
          />
        )
      })}

      <Horizon
        // Re-mounted when the bookmark changes, so the line surfaces at its
        // new position instead of being a static element that happened to
        // move.
        key={bookmark === null ? 'unset' : serialiseBookmark(bookmark)}
        bookmark={bookmark}
      />

      {covered.map((entry, index) => {
        return (
          <Waypoint
            key={`fog-${entry.handle}`}
            index={open.length + 1 + index}
            peek={peek}
            slot={{ open: false, covered: entry }}
          />
        )
      })}
    </ol>
  )
}

type WaypointProps = {
  /** Position along the whole route, horizon included, so the wave alternates. */
  readonly index: number
  readonly peek: (handle: string) => Promise<WaypointView>
  readonly slot: Slot<WaypointView>
}

function Waypoint({ slot, index, peek }: WaypointProps): ReactElement {
  const { t } = useLocale()
  const threshold = useThreshold()
  const bow: Bow = index % BOW_PERIOD === 0 ? 'left' : 'right'
  const open = slot.open
  const entry = slot.open ? slot.record : slot.covered

  return (
    <li {...stylex.props(styles.row)}>
      <div {...stylex.props(styles.rail)}>
        <Segment
          bow={bow}
          open={open}
        />
        <span
          aria-hidden="true"
          {...stylex.props(
            styles.node,
            bow === 'left' ? styles.nodeLeft : styles.nodeRight,
            open ? styles.nodeOpen : styles.nodeCovered,
          )}
        />
      </div>

      <div {...stylex.props(styles.body)}>
        <p {...stylex.props(styles.meta)}>
          <span {...stylex.props(styles.episode)}>
            {threshold('chart.opensAt', entry)}
          </span>
          <span {...stylex.props(styles.kind)}>{t(KIND_KEY[entry.kind])}</span>
        </p>

        {/* The drawing is inside the veil with the words: under fog, both go. */}
        <SpoilerVeil
          peek={peek}
          placeholder={<FoggedWaypoint entry={entry} />}
          slot={slot}
          strength="media"
        >
          {(record) => {
            return (
              <div {...stylex.props(styles.card)}>
                <Picture visual={record.visual} />
                <div {...stylex.props(styles.words)}>
                  <h3 {...stylex.props(styles.name)}>
                    <WaypointName record={record} />
                  </h3>
                  <p {...stylex.props(styles.summary)}>{record.summary}</p>
                </div>
              </div>
            )
          }}
        </SpoilerVeil>
      </div>
    </li>
  )
}

/**
 * The name, and the way to the record's own page when there is one. A covered
 * waypoint never reaches this: it has no name to draw and no slug to point at.
 */
function WaypointName({
  record,
}: {
  readonly record: WaypointView
}): ReactNode {
  const { locale } = useLocale()

  if (record.kind === 'character') {
    return (
      <Link
        params={{ locale, id: record.id }}
        to="/$locale/characters/$id"
        {...stylex.props(styles.nameLink)}
      >
        {record.name}
      </Link>
    )
  }
  if (record.kind === 'place') {
    return (
      <Link
        hash={record.id}
        params={{ locale }}
        to="/$locale/places"
        {...stylex.props(styles.nameLink)}
      >
        {record.name}
      </Link>
    )
  }

  return record.name
}

/**
 * The waypoint's drawing in a 4:5 frame, on the card surface, behind a
 * hairline. Every frame has the same proportions, so the route reads as one
 * set of plates rather than a scrapbook.
 */
function Picture({ visual }: { readonly visual: Drawing }): ReactElement {
  return (
    <div {...stylex.props(styles.frame)}>
      <ChartArt
        strokes={visual.strokes}
        tint={visual.tint}
      />
    </div>
  )
}

/**
 * One stretch of route, drawn per row so the line follows whatever height the
 * row's content needs. The path enters and leaves at the centre with a
 * vertical tangent, so consecutive segments join without a kink, and bows to
 * one side in between; alternating the bow row by row is what makes the route
 * wander like a course rather than run like a ruler.
 *
 * `preserveAspectRatio="none"` stretches the cell of `~/components/chrome/route-chart`
 * to the row, and `non-scaling-stroke` keeps the line 2px and the dashes even
 * under that stretch. The waypoint mark is a separate element for the same
 * reason: a circle inside this box would be squashed into an ellipse.
 */
function Segment({
  bow,
  open,
}: {
  readonly bow: Bow
  readonly open: boolean
}): ReactElement {
  return (
    <svg
      aria-hidden="true"
      preserveAspectRatio="none"
      viewBox={SEGMENT_VIEWBOX}
      {...stylex.props(styles.segment)}
    >
      <path
        d={SEGMENT[bow]}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(
          styles.stroke,
          open ? styles.strokeOpen : styles.strokeCovered,
        )}
      />
    </svg>
  )
}

/**
 * The reader's position: a compass on the route and a line across the chart.
 * With no bookmark the horizon sits at the very top, everything is under fog,
 * and the label says so rather than pretending the reader is at episode 0.
 */
function Horizon({ bookmark }: { readonly bookmark: Bookmark }): ReactElement {
  const { t } = useLocale()
  const set = bookmark !== null

  return (
    <li
      aria-current="step"
      {...stylex.props(styles.row, styles.horizon)}
    >
      <div {...stylex.props(styles.rail)}>
        <svg
          aria-hidden="true"
          preserveAspectRatio="none"
          viewBox={SEGMENT_VIEWBOX}
          {...stylex.props(styles.segment)}
        >
          <path
            d={HORIZON_ABOVE}
            vectorEffect="non-scaling-stroke"
            {...stylex.props(
              styles.stroke,
              set ? styles.strokeOpen : styles.strokeCovered,
            )}
          />
          <path
            d={HORIZON_BELOW}
            vectorEffect="non-scaling-stroke"
            {...stylex.props(styles.stroke, styles.strokeCovered)}
          />
        </svg>
        <Compass set={set} />
      </div>

      <p {...stylex.props(styles.horizonBody)}>
        <span
          {...stylex.props(
            styles.horizonLabel,
            set ? styles.horizonSet : styles.horizonUnset,
          )}
        >
          {bookmark === null ?
            t('chart.hereUnset')
          : describeBookmark(t, 'chart.hereSet', bookmark)}
        </span>
        <span
          aria-hidden="true"
          {...stylex.props(
            styles.horizonLine,
            set ? styles.horizonLineSet : styles.horizonLineUnset,
          )}
        />
      </p>
    </li>
  )
}

/** A compass rose, hand-drawn: a ring and a four-point star in one colour. */
function Compass({ set }: { readonly set: boolean }): ReactElement {
  return (
    <svg
      aria-hidden="true"
      viewBox={COMPASS_VIEWBOX}
      {...stylex.props(
        styles.compass,
        set ? styles.compassSet : styles.compassUnset,
      )}
    >
      <circle
        cx={COMPASS_RING.cx}
        cy={COMPASS_RING.cy}
        r={COMPASS_RING.r}
        {...stylex.props(styles.compassRing)}
      />
      <path
        d={COMPASS_STAR}
        {...stylex.props(styles.compassStar)}
      />
    </svg>
  )
}

// The horizon surfaces where it has just moved to: a short fade, `opacity`
// only, so it composites. Guarded rather than overridden under reduced motion.
