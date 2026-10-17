import * as stylex from '@stylexjs/stylex'
import { Fragment, type ReactElement, useId, useRef } from 'react'

import { EpisodeMark } from '~/components/EpisodeMark'
import { styles as fog, PHASES } from '~/components/FogTile.styles'
import { SagaMarquee } from '~/components/SagaMarquee'
import {
  Plate,
  SpecimenBands,
  type SpecimenBandsProps,
} from '~/components/SpecimenBands'
import { useT } from '~/i18n/LocaleContext'
import { useBookmark } from '~/lib/progress/BookmarkContext'
import { sagaAnchor } from '~/lib/search/fruitParams'
import type {
  FruitBandView,
  FruitMarqueeView,
  FruitView,
} from '~/lib/view/records'
import {
  color,
  font,
  leading,
  radius,
  rule,
  space,
  text,
} from '~/styles/tokens.stylex'

/**
 * What the fruits page is built from: the plates, the sagas, the count, the
 * marquee, the peek, and the picks the album reads from the address.
 */
export interface FruitsAlbumProps {
  bands: FruitBandView[]
  filed: number
  later: SpecimenBandsProps['later']
  marquee: FruitMarqueeView | null
  onParams: SpecimenBandsProps['onParams']
  params: SpecimenBandsProps['params']
  peek: (handle: string) => Promise<FruitView>
  sagas: SpecimenBandsProps['sagas']
}

/** The wall never reads the picks, and has no marquee and no saga view. */
type FruitWallProps = Pick<FruitsAlbumProps, 'bands' | 'filed' | 'peek'>

/**
 * The fruits page under its heading: the saga marquee over the album for a
 * reader with a bookmark (a trial point counts), the wall of fog for one
 * without.
 *
 * Saving a bookmark from the wall re-reads the page and the wall goes, with
 * the button the native dialog had handed focus back to. Focus then moves to
 * the album rather than dropping to the top of the document, and only then:
 * never on a first paint, and never away from a control the reader is on.
 */
export function FruitsAlbum({
  bands,
  filed,
  later,
  marquee,
  onParams,
  params,
  peek,
  sagas,
}: FruitsAlbumProps): ReactElement {
  const { bookmark } = useBookmark()
  const fromWallRef = useRef(false)

  if (bookmark === null) {
    return (
      <div
        ref={() => {
          fromWallRef.current = true
        }}
      >
        <FruitWall
          bands={bands}
          filed={filed}
          peek={peek}
        />
      </div>
    )
  }

  return (
    <div
      ref={(node) => {
        if (node === null || !fromWallRef.current) {
          return
        }
        fromWallRef.current = false
        if (document.activeElement === document.body) {
          node.focus({ preventScroll: true })
        }
      }}
      tabIndex={-1}
      {...stylex.props(styles.album)}
    >
      <SagaMarquee
        bands={bands}
        link={{
          // The marquee's saga is the bookmark's, the saga view's last.
          hash: sagaAnchor(sagas.length - 1),
          search: { ...params, view: 'saga' },
        }}
        marquee={marquee}
      />
      <SpecimenBands
        bands={bands}
        later={later}
        onParams={onParams}
        params={params}
        peek={peek}
        sagas={sagas}
      />
    </div>
  )
}

/**
 * The page with no bookmark: one bank of fog the width of the album, the
 * number of fruits and the question in its centre, the control that sets a
 * bookmark, and the three counts by kind, all of them public.
 *
 * The fog is `FogTile`'s, two drifting banks, and the same for every fruit
 * because it stands for none of them. Under the wall the covered tiles stay
 * on the page, closed behind a disclosure, so "Show anyway" still works for
 * a reader who does not want a bookmark. There is no control bar: with no
 * bookmark nothing is open, search only finds open fruits and every chip
 * would read 0. The address's view, kind and query wait for the album.
 */
function FruitWall({ bands, filed, peek }: FruitWallProps): ReactElement {
  const t = useT()
  const id = useId()

  return (
    <div {...stylex.props(styles.stack)}>
      <Wall
        bands={bands}
        filed={filed}
        headingId={`${id}-wall`}
      />

      <details {...stylex.props(styles.browse)}>
        <summary {...stylex.props(styles.summary)}>
          {t('fruits.wall.browse')}
        </summary>
        <div {...stylex.props(styles.plates)}>
          {bands.map((band, at) => {
            return (
              <Plate
                key={band.form}
                band={band}
                fieldId={id}
                index={at}
                needle=""
                peek={peek}
              />
            )
          })}
        </div>
      </details>
    </div>
  )
}

/** The wall itself: the fog, and the words and the control in its centre. */
function Wall({
  bands,
  filed,
  headingId,
}: {
  bands: FruitBandView[]
  filed: number
  headingId: string
}): ReactElement {
  const t = useT()

  return (
    <section
      aria-labelledby={headingId}
      {...stylex.props(styles.wall)}
    >
      <span
        aria-hidden="true"
        {...stylex.props(styles.fog)}
      >
        <span {...stylex.props(fog.layer, fog.near, PHASES[0])} />
        <span {...stylex.props(fog.layer, fog.far, PHASES[1])} />
      </span>
      <div {...stylex.props(styles.copy)}>
        <h2
          id={headingId}
          {...stylex.props(styles.title)}
        >
          {t('fruits.wall.title', { count: filed })}
        </h2>
        <p {...stylex.props(styles.ask)}>{t('fruits.wall.ask')}</p>
        <EpisodeMark placement="fold" />
        {/* Every fruit, open or not, by kind: "84 Paramecia · 31 Zoan". A
            count never wraps away from its kind. */}
        <p {...stylex.props(styles.kinds)}>
          {bands.map((band, at) => {
            return (
              <Fragment key={band.form}>
                {at === 0 ? null : ' · '}
                <span {...stylex.props(styles.kind)}>
                  {band.total} {t(`fruitForm.${band.form}`)}
                </span>
              </Fragment>
            )
          })}
        </p>
      </div>
    </section>
  )
}

// The wall fills most of a phone's first screen, so the disclosure starts
// under the fold, and stops growing on a tall desktop window.
const WALL_HEIGHT = 'min(36rem, 70svh)'

// The tap target every control here meets.
const TARGET = '44px'

const styles = stylex.create({
  // Only ever focused from code, after a save from the wall: no ring round
  // the whole album.
  album: {
    gap: { 'default': space.xl, '@media (min-width: 40rem)': space.xl2 },
    display: 'grid',
    outlineStyle: 'none',
  },
  stack: {
    gap: { 'default': space.xl, '@media (min-width: 40rem)': space.xl2 },
    display: 'grid',
  },
  wall: {
    borderColor: color.rule,
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    overflow: 'hidden',
    placeItems: 'center',
    backgroundColor: color.paper2,
    display: 'grid',
    position: 'relative',
    minHeight: WALL_HEIGHT,
  },
  // Skipped off the screen, and its drift with it, as a tile's fog is.
  fog: {
    inset: 0,
    contentVisibility: 'auto',
    pointerEvents: 'none',
    position: 'absolute',
  },
  copy: {
    gap: space.md,
    paddingBlock: space.xl,
    paddingInline: space.md,
    display: 'grid',
    justifyItems: 'center',
    position: 'relative',
    textAlign: 'center',
    minWidth: 0,
  },
  title: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.display,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.display,
    overflowWrap: 'anywhere',
    maxWidth: '16ch',
  },
  ask: {
    color: color.ink2,
    fontFamily: font.display,
    fontSize: text.lg,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
  },
  kinds: {
    color: color.muted,
    fontFamily: font.mono,
    fontSize: text.xs,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 600,
    letterSpacing: '0.12em',
    lineHeight: leading.body,
    textTransform: 'uppercase',
  },
  kind: { whiteSpace: 'nowrap' },
  browse: { display: 'grid' },
  // A list item, as a summary is by default, so it keeps its triangle.
  summary: {
    paddingBlock: space.xs,
    color: color.ink2,
    cursor: 'pointer',
    fontFamily: font.display,
    fontSize: text.lg,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs2,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    minHeight: TARGET,
  },
  plates: {
    gap: { 'default': space.xl, '@media (min-width: 40rem)': space.xl2 },
    display: 'grid',
    paddingBlockStart: space.md,
  },
})
