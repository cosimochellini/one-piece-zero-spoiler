import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { ChartArt } from '~/components/ChartArt'
import { styles } from '~/components/RouteChart.styles'
import { SpoilerVeil } from '~/components/SpoilerVeil'
import {
  type Bow,
  COMPASS_RING,
  COMPASS_STAR,
  COMPASS_VIEWBOX,
  HORIZON_ABOVE,
  HORIZON_BELOW,
  SEGMENT,
  SEGMENT_VIEWBOX,
} from '~/data/art/route-chart'
import type { Entity, EntityKind, Visual } from '~/data/types'
import { useLocale } from '~/i18n/LocaleContext'
import type { TranslationKey } from '~/i18n/types'
import { useThreshold } from '~/lib/progress/BookmarkContext'
import { type Bookmark, serialiseBookmark } from '~/lib/progress/episode'
import { isRevealed } from '~/lib/progress/spoiler'
import { describeBookmark } from '~/lib/progress/threshold'

// The bow flips from one waypoint to the next, so the route wanders like a
// course rather than running like a ruler.
const BOW_PERIOD = 2

const KIND_KEY: Readonly<Record<EntityKind, TranslationKey>> = {
  character: 'kind.character',
  arc: 'kind.arc',
  place: 'kind.place',
  ship: 'kind.ship',
}

/** The two facts the chart is drawn from, and nothing else. */
export type RouteChartProps = {
  /** The archive, sorted by the threshold the bookmark counts in. */
  readonly bookmark: Bookmark
  readonly entries: readonly Entity[]
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
 * Because `entries` arrive sorted and `isRevealed` is monotone in the
 * threshold, the open waypoints are a prefix of the list, which is what lets
 * the horizon be a single element between two runs rather than a marker that
 * has to be interpolated along the route.
 */
export function RouteChart({
  entries,
  bookmark,
}: RouteChartProps): ReactElement {
  const open = entries.filter((entry) => isRevealed(entry, bookmark))
  const covered = entries.filter((entry) => !isRevealed(entry, bookmark))

  return (
    <ol {...stylex.props(styles.route)}>
      {open.map((entry, index) => {
        return (
          <Waypoint
            key={entry.id}
            entry={entry}
            index={index}
            open
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
            key={entry.id}
            entry={entry}
            index={open.length + 1 + index}
            open={false}
          />
        )
      })}
    </ol>
  )
}

type WaypointProps = {
  readonly entry: Entity
  /** Position along the whole route, horizon included, so the wave alternates. */
  readonly index: number
  readonly open: boolean
}

function Waypoint({ entry, index, open }: WaypointProps): ReactElement {
  const { locale, t } = useLocale()
  const threshold = useThreshold()
  const bow: Bow = index % BOW_PERIOD === 0 ? 'left' : 'right'

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
          gated={entry}
          revealed={open}
        >
          <div {...stylex.props(styles.card)}>
            <Picture visual={entry.visual} />
            <div {...stylex.props(styles.words)}>
              <h3 {...stylex.props(styles.name)}>
                <WaypointName
                  entry={entry}
                  open={open}
                />
              </h3>
              <p {...stylex.props(styles.summary)}>{entry.summary[locale]}</p>
            </div>
          </div>
        </SpoilerVeil>
      </div>
    </li>
  )
}

/**
 * The name, and the way to the record's own page when there is one. Only an
 * open character or place is a link: a covered card's href would spell out,
 * in the page source, the name a blur hides.
 */
function WaypointName({
  entry,
  open,
}: {
  readonly entry: Entity
  readonly open: boolean
}): ReactElement {
  const { locale } = useLocale()
  const name = entry.name[locale]

  if (open && entry.kind === 'character') {
    return (
      <Link
        params={{ locale, id: entry.id }}
        to="/$locale/characters/$id"
        {...stylex.props(styles.nameLink)}
      >
        {name}
      </Link>
    )
  }
  if (open && entry.kind === 'place') {
    return (
      <Link
        hash={entry.id}
        params={{ locale }}
        to="/$locale/places"
        {...stylex.props(styles.nameLink)}
      >
        {name}
      </Link>
    )
  }

  return <>{name}</>
}

/**
 * The waypoint's drawing in a 4:5 frame, on the card surface, behind a
 * hairline. Every frame has the same proportions, so the route reads as one
 * set of plates rather than a scrapbook.
 */
function Picture({ visual }: { readonly visual: Visual }): ReactElement {
  return (
    <div {...stylex.props(styles.frame)}>
      <ChartArt
        art={visual.art}
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
 * `preserveAspectRatio="none"` stretches the cell of `~/data/art/route-chart`
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
