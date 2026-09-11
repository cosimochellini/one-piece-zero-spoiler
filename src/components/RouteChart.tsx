import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'

import { ChartArt } from '~/components/ChartArt'
import { SpoilerVeil } from '~/components/SpoilerVeil'
import type { Entity, EntityKind, Visual } from '~/data/types'
import { useLocale } from '~/i18n/LocaleContext'
import type { TranslationKey } from '~/i18n/types'
import type { Progress } from '~/lib/progress/episode'
import { isRevealed } from '~/lib/progress/spoiler'
import {
  color,
  dur,
  ease,
  font,
  leading,
  radius,
  rule,
  space,
  text,
} from '~/styles/tokens.stylex'

const KIND_KEY: Readonly<Record<EntityKind, TranslationKey>> = {
  character: 'kind.character',
  arc: 'kind.arc',
  place: 'kind.place',
  ship: 'kind.ship',
}

export type RouteChartProps = {
  /** The archive, sorted by `revealedAtEpisode` ascending. */
  readonly entries: readonly Entity[]
  readonly progress: Progress
}

/**
 * The archive as a sea route (the page's Map / Diagram).
 *
 * Every entry is a waypoint on one vertical route, in the order the anime
 * reaches them. The reader's own episode is drawn across the route as a
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
export function RouteChart({ entries, progress }: RouteChartProps) {
  const open = entries.filter((entry) => isRevealed(entry, progress))
  const covered = entries.filter((entry) => !isRevealed(entry, progress))

  return (
    <ol {...stylex.props(styles.route)}>
      {open.map((entry, index) => (
        <Waypoint key={entry.id} entry={entry} index={index} open />
      ))}

      <Horizon
        // Re-mounted when the bookmark changes, so the line surfaces at its
        // new position instead of being a static element that happened to
        // move.
        key={progress ?? 'unset'}
        progress={progress}
      />

      {covered.map((entry, index) => (
        <Waypoint
          key={entry.id}
          entry={entry}
          index={open.length + 1 + index}
          open={false}
        />
      ))}
    </ol>
  )
}

type WaypointProps = {
  readonly entry: Entity
  /** Position along the whole route, horizon included, so the wave alternates. */
  readonly index: number
  readonly open: boolean
}

function Waypoint({ entry, index, open }: WaypointProps) {
  const { locale, t } = useLocale()
  const bow = index % 2 === 0 ? 'left' : 'right'

  return (
    <li {...stylex.props(styles.row)}>
      <div {...stylex.props(styles.rail)}>
        <Segment bow={bow} open={open} />
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
            {t('chart.opensAt', { episode: entry.revealedAtEpisode })}
          </span>
          <span {...stylex.props(styles.kind)}>{t(KIND_KEY[entry.kind])}</span>
        </p>

        {/* The drawing is inside the veil with the words: under fog, both go. */}
        <SpoilerVeil
          revealedAtEpisode={entry.revealedAtEpisode}
          revealed={open}
        >
          <div {...stylex.props(styles.card)}>
            <Picture visual={entry.visual} />
            <div {...stylex.props(styles.words)}>
              <h3 {...stylex.props(styles.name)}>
                {entry.kind === 'character' ? (
                  <Link
                    to="/$locale/characters/$id"
                    params={{ locale, id: entry.id }}
                    {...stylex.props(styles.nameLink)}
                  >
                    {entry.name[locale]}
                  </Link>
                ) : (
                  entry.name[locale]
                )}
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
 * The waypoint's drawing in a 4:5 frame, on the card surface, behind a
 * hairline. Every frame has the same proportions, so the route reads as one
 * set of plates rather than a scrapbook.
 */
function Picture({ visual }: { readonly visual: Visual }) {
  return (
    <div {...stylex.props(styles.frame)}>
      <ChartArt art={visual.art} tint={visual.tint} />
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
 * `preserveAspectRatio="none"` stretches the 64x100 box to the cell, and
 * `non-scaling-stroke` keeps the line 2px and the dashes even under that
 * stretch. The waypoint mark is a separate element for the same reason: a
 * circle inside this box would be squashed into an ellipse.
 */
function Segment({
  bow,
  open,
}: {
  readonly bow: 'left' | 'right'
  readonly open: boolean
}) {
  const x = bow === 'left' ? 14 : 50

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 100"
      preserveAspectRatio="none"
      {...stylex.props(styles.segment)}
    >
      <path
        d={`M32 0 C32 25 ${String(x)} 25 ${String(x)} 50 C${String(x)} 75 32 75 32 100`}
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
function Horizon({ progress }: { readonly progress: Progress }) {
  const { t } = useLocale()
  const set = progress !== null

  return (
    <li aria-current="step" {...stylex.props(styles.row, styles.horizon)}>
      <div {...stylex.props(styles.rail)}>
        <svg
          aria-hidden="true"
          viewBox="0 0 64 100"
          preserveAspectRatio="none"
          {...stylex.props(styles.segment)}
        >
          <path
            d="M32 0 V50"
            vectorEffect="non-scaling-stroke"
            {...stylex.props(
              styles.stroke,
              set ? styles.strokeOpen : styles.strokeCovered,
            )}
          />
          <path
            d="M32 50 V100"
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
          {set
            ? t('chart.hereSet', { episode: progress })
            : t('chart.hereUnset')}
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
function Compass({ set }: { readonly set: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      {...stylex.props(
        styles.compass,
        set ? styles.compassSet : styles.compassUnset,
      )}
    >
      <circle cx="16" cy="16" r="13" {...stylex.props(styles.compassRing)} />
      <path
        d="M16 4 L18.4 13.6 L28 16 L18.4 18.4 L16 28 L13.6 18.4 L4 16 L13.6 13.6 Z"
        {...stylex.props(styles.compassStar)}
      />
    </svg>
  )
}

// The horizon surfaces where it has just moved to: a short fade, `opacity`
// only, so it composites. Guarded rather than overridden under reduced motion.
const surface = stylex.keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
})

const styles = stylex.create({
  route: {
    display: 'grid',
    listStyleType: 'none',
    paddingInlineStart: 0,
  },

  // The rail is a fixed 4rem so consecutive segments line up; the body takes
  // the rest and may shrink to zero, which is what lets a long unbroken name
  // wrap instead of pushing the page sideways.
  row: {
    columnGap: space.md,
    display: 'grid',
    gridTemplateColumns: '4rem minmax(0, 1fr)',
  },
  rail: {
    position: 'relative',
  },
  segment: {
    display: 'block',
    height: '100%',
    inset: 0,
    overflow: 'visible',
    position: 'absolute',
    width: '100%',
  },
  stroke: {
    fill: 'none',
    strokeLinecap: 'round',
    strokeWidth: rule.fine,
    transitionDuration: dur.short,
    transitionProperty: 'stroke',
    transitionTimingFunction: ease.out,
  },
  strokeOpen: {
    stroke: color.accent,
  },
  strokeCovered: {
    stroke: color.rule2,
    strokeDasharray: '3 8',
  },

  node: {
    borderRadius: radius.pill,
    borderStyle: 'solid',
    borderWidth: rule.fine,
    height: '0.875rem',
    insetBlockStart: '50%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    transitionDuration: dur.short,
    transitionProperty: 'background-color, border-color',
    transitionTimingFunction: ease.out,
    width: '0.875rem',
  },
  // 14/64 and 50/64: where the two bows of the segment path sit.
  nodeLeft: { insetInlineStart: '21.875%' },
  nodeRight: { insetInlineStart: '78.125%' },
  nodeOpen: {
    backgroundColor: color.accent,
    borderColor: color.accent,
  },
  nodeCovered: {
    backgroundColor: color.paper,
    borderColor: color.rule2,
  },

  body: {
    display: 'grid',
    gap: space.xs,
    minWidth: 0,
    paddingBlock: space.lg,
  },
  meta: {
    alignItems: 'baseline',
    color: color.muted,
    columnGap: space.sm,
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: text.xs,
    letterSpacing: '0.08em',
    lineHeight: leading.body,
    textTransform: 'uppercase',
  },
  // The one outlier slot on the waypoint: the number is set in mono so every
  // threshold on the route lines up.
  episode: {
    color: color.ink2,
    fontFamily: font.mono,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 600,
    whiteSpace: 'nowrap',
  },
  kind: {
    fontFamily: font.body,
    fontWeight: 600,
  },
  // Picture beside words at every width. 7rem of frame on a phone still
  // leaves the words 55% of a 320px row; from 60rem the picture is the
  // larger half of the card, because the pictures are the point.
  card: {
    columnGap: { default: space.md, '@media (min-width: 40rem)': space.lg },
    display: 'grid',
    gridTemplateColumns: {
      default: '7rem minmax(0, 1fr)',
      '@media (min-width: 40rem)': '11rem minmax(0, 1fr)',
      '@media (min-width: 60rem)': '14rem minmax(0, 1fr)',
    },
  },
  words: {
    display: 'grid',
    gap: space.xs2,
    minWidth: 0,
  },
  frame: {
    aspectRatio: '4 / 5',
    backgroundColor: color.paper2,
    borderColor: color.rule,
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    // Clips the blur of a fogged drawing to its own frame, so the fog stays
    // on the card and does not smear into the words beside it.
    overflow: 'hidden',
  },
  name: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.xl,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    minWidth: 0,
    overflowWrap: 'anywhere',
  },
  // A character's name is the way to its page. Same ink as the name at
  // rest, the accent rule on hover, so the route does not turn into a column
  // of blue links.
  nameLink: {
    color: {
      default: 'inherit',
      ':hover': color.accent,
      ':active': color.ink2,
    },
    outlineColor: { default: 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textDecorationColor: { default: 'transparent', ':hover': color.accent },
    textDecorationLine: 'underline',
    textDecorationThickness: rule.fine,
    textUnderlineOffset: '4px',
    transitionDuration: dur.micro,
    transitionProperty: 'color, text-decoration-color',
    transitionTimingFunction: ease.out,
  },
  summary: {
    color: color.ink2,
    fontSize: text.base,
    lineHeight: leading.body,
    maxWidth: '52ch',
  },

  // No `align-items: center` here: the rail cell has to stretch to the row's
  // full height or the segment behind the compass has nothing to draw on.
  horizon: {
    animationDuration: dur.short,
    animationName: {
      default: 'none',
      '@media (prefers-reduced-motion: no-preference)': surface,
    },
    animationTimingFunction: ease.out,
  },
  compass: {
    height: '2rem',
    insetBlockStart: '50%',
    insetInlineStart: '50%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    width: '2rem',
  },
  compassSet: { color: color.accent },
  compassUnset: { color: color.rule2 },
  compassRing: {
    fill: color.paper,
    stroke: 'currentColor',
    strokeWidth: rule.fine,
  },
  compassStar: {
    fill: 'currentColor',
  },
  horizonBody: {
    alignItems: 'center',
    display: 'flex',
    gap: space.sm,
    minWidth: 0,
    paddingBlock: space.md,
  },
  horizonLabel: {
    fontFamily: font.mono,
    fontSize: text.xs,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 700,
    letterSpacing: '0.1em',
    lineHeight: leading.body,
    minWidth: 0,
    textTransform: 'uppercase',
  },
  horizonSet: { color: color.accent },
  horizonUnset: { color: color.muted },
  // The line runs from the label to the edge of the chart. It is the one
  // element that reads as a rule and is drawn in the accent, because it is
  // the reader's own position and not a divider.
  horizonLine: {
    flexGrow: 1,
    height: rule.fine,
    minWidth: '1.5rem',
  },
  horizonLineSet: { backgroundColor: color.accent },
  horizonLineUnset: { backgroundColor: color.rule2 },
})
