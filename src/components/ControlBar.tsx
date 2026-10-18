import * as stylex from '@stylexjs/stylex'
import {
  type ReactElement,
  type ReactNode,
  type RefObject,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'

import { listen, watch } from '~/components/controlBarFold'
import { Button } from '~/components/ui/Button'
import { color, font, pin, rule, space, text, z } from '~/styles/tokens.stylex'

/** How far up the bar slides to leave only its folded row on screen. */
const TUCK_PROPERTY = '--bar-tuck'

/** What a page puts in the bar, and the words of its folded row. */
export interface ControlBarProps {
  /** The controls: a search field, and the groups beside it. */
  children: ReactNode
  /** The folded row's search button, which goes to the bar's search field. */
  searchLabel: string
  /** The folded row's words: the view, the pick and the query. */
  summary: string
  /** What the controls are called, ahead of the summary in the toggle's name. */
  toggleLabel: string
}

/**
 * A listing's controls, pinned to the top of the window while the listing
 * scrolls under them.
 *
 * It pins under the site bar, which is pinned too. On a wide screen the
 * whole bar pins. On a phone, upright or on its side, it would take half the
 * screen, so it pins with a negative top that leaves
 * only its last row on screen, the folded row: a search button and the
 * current picks. Nothing in the layout changes when it folds, so nothing
 * under it jumps. Tapping the row, or moving focus into any control, slides
 * the whole bar down over the listing; a pick, focus leaving the bar, or
 * scrolling back up folds it.
 *
 * The bar has to be its container's first child, so a pick can scroll back
 * to it. It measures itself and writes, on the document, how much of it
 * stays pinned (`STACK_PROPERTY`), so the sticky heads below pin under it
 * and focus never scrolls a control behind it.
 */
export function ControlBar({
  children,
  searchLabel,
  summary,
  toggleLabel,
}: ControlBarProps): ReactElement {
  const controlsId = useId()
  const barRef = useRef<HTMLDivElement>(null)
  const { open, pinned, setOpen } = useFold(barRef)

  return (
    <div
      ref={barRef}
      {...stylex.props(
        styles.bar,
        pinned && styles.pinnedEdge,
        open ? styles.open : styles.tucked,
      )}
    >
      <div
        id={controlsId}
        {...stylex.props(styles.controls)}
      >
        {children}
      </div>

      <FoldedRow
        controlsId={controlsId}
        onSearch={() => {
          barRef.current
            ?.querySelector<HTMLInputElement>('input[type="search"]')
            ?.focus({ preventScroll: true })
        }}
        onToggle={() => {
          setOpen(!open)
        }}
        open={open}
        pinned={pinned}
        searchLabel={searchLabel}
        summary={summary}
        toggleLabel={toggleLabel}
      />
    </div>
  )
}

/** The row a phone keeps on screen: the search button and the toggle. */
function FoldedRow({
  controlsId,
  onSearch,
  onToggle,
  open,
  pinned,
  searchLabel,
  summary,
  toggleLabel,
}: Omit<ControlBarProps, 'children'> & {
  controlsId: string
  onSearch: () => void
  onToggle: () => void
  open: boolean
  pinned: boolean
}): ReactElement {
  return (
    <div {...stylex.props(styles.row, !pinned && styles.rowHidden)}>
      <Button
        aria-label={searchLabel}
        onClick={onSearch}
        variant="quiet"
      >
        <svg
          aria-hidden="true"
          fill="none"
          height="20"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="20"
        >
          <circle
            cx="10.5"
            cy="10.5"
            r="6.5"
          />
          <path d="m15.5 15.5 5 5" />
        </svg>
      </Button>
      <Button
        aria-controls={controlsId}
        aria-expanded={open}
        aria-label={`${toggleLabel}. ${summary}`}
        onClick={onToggle}
        sx={styles.toggle}
      >
        <span {...stylex.props(styles.summary)}>{summary}</span>
        <span aria-hidden="true">{open ? '▴' : '▾'}</span>
      </Button>
    </div>
  )
}

/** The bar's folding: whether it has pinned, and whether it is opened. */
function useFold(barRef: RefObject<HTMLDivElement | null>): {
  open: boolean
  pinned: boolean
  setOpen: (open: boolean) => void
} {
  const [pinned, setPinned] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const bar = barRef.current
    if (bar === null) {
      return
    }
    const watching = watch(bar, TUCK_PROPERTY, (next) => {
      setPinned(next)
      if (!next) {
        setOpen(false)
      }
    })
    const stopListening = listen(bar, watching.read, setOpen)

    return () => {
      watching.stop()
      stopListening()
    }
  }, [barRef])

  return { open, pinned, setOpen }
}

// The page's paper carried a gutter out on each side, so a tile scrolling
// under the bar does not show beside it. Shadows, so the page never grows.
const GUTTERS = `calc(-1 * ${space.md}) 0 0 ${color.paper}, ${space.md} 0 0 ${color.paper}`

const styles = stylex.create({
  bar: {
    paddingBlock: space.xs,
    backgroundColor: color.paper,
    boxShadow: GUTTERS,
    display: 'grid',
    position: 'sticky',
    // Where it pins, under the site bar, as a length the script can read
    // back in pixels (`controlBarFold`); scrolled to, it also lands there.
    scrollMarginBlockStart: pin.bar,
    // Over the sticky heads: an opened bar lies over the listing.
    zIndex: z.stickyNav,
  },
  // The hairline under a pinned bar, drawn as a shadow so that it costs no
  // height: a border appearing on pin would move everything under the bar.
  pinnedEdge: { boxShadow: `${GUTTERS}, 0 ${rule.hair} 0 ${color.rule}` },
  tucked: { insetBlockStart: `calc(${pin.bar} + var(${TUCK_PROPERTY}, 0px))` },
  open: { insetBlockStart: pin.bar },
  controls: {
    alignItems: 'end',
    columnGap: space.lg,
    display: 'grid',
    gridTemplateColumns: {
      'default': 'minmax(0, 1fr)',
      '@media (min-width: 64rem)': 'minmax(0, 1fr) auto',
    },
    rowGap: space.sm,
  },
  // A phone's folded row, a landscape phone's too; never shown where the
  // whole bar pins, a screen wide and tall enough to spare it.
  row: {
    gap: space.xs,
    alignItems: 'center',
    display: {
      'default': 'flex',
      '@media (min-width: 40rem) and (min-height: 32rem)': 'none',
    },
    paddingBlockStart: space.xs,
  },
  rowHidden: { visibility: 'hidden' },
  toggle: {
    flexGrow: 1,
    fontFamily: font.body,
    fontSize: text.base,
    justifyContent: 'space-between',
    minWidth: 0,
  },
  summary: { overflow: 'hidden', textOverflow: 'ellipsis', minWidth: 0 },
})
