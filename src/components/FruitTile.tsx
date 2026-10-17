import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { Marked } from '~/components/CharacterCard'
import { OpenArt } from '~/components/FruitArt'
import { FruitEater } from '~/components/FruitEater'
import { FruitFrame } from '~/components/FruitFrame'
import type { EaterMatch } from '~/components/recordMatches'
import { SpoilerVeil } from '~/components/SpoilerVeil'
import { useLocale } from '~/i18n/LocaleContext'
import type { TranslationKey } from '~/i18n/types'
import { useThreshold } from '~/lib/progress/BookmarkContext'
import type { EaterView, FruitForm, FruitView, Slot } from '~/lib/view/records'
import { morphPart, travelWith, useTravels } from '~/styles/morph'
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

/** How wide a covered tile's number is printed. `01`, never `1`. */
const NUMBER_WIDTH = 2

const FORM_KEY: Record<FruitForm, TranslationKey> = {
  logia: 'fruitForm.logia',
  paramecia: 'fruitForm.paramecia',
  zoan: 'fruitForm.zoan',
}

/** The eater a tile shows when no search picked one: the first. */
const FIRST_EATER: EaterMatch = { at: 0, highlight: null }

/** A tile told of no eaters: a covered one lifted by hand. */
const NO_EATERS: EaterView[] = []

/** One place in the album: what fills it, and where it sits on its plate. */
export interface FruitTileProps {
  /** Which eater an open tile shows, and what of their name a search matched. */
  eater?: EaterMatch
  /** The eaters the reader has reached, earliest first. Covered ones are not sent. */
  eaters?: EaterView[]
  /** The plate this tile sits on, so a covered tile still says which it is. */
  form: FruitForm
  highlight?: [number, number] | null
  /** Zero-based within its plate. Only a covered tile prints it, plus one. */
  index: number
  peek: (handle: string) => Promise<FruitView>
  slot: Slot<FruitView>
}

/**
 * One tile of the album: the drawing large, the name under it, who ate it,
 * and the kind. Open, the drawing and the name are one link to the fruit's
 * page and the eater another to theirs: two targets, side by side, since a
 * link may not hold a link.
 *
 * Under fog the tile has no link, no name and no drawing in the DOM: the slug
 * would spell the name and the drawing would say as much (#136). What stays
 * outside the fog is the promise — a number, the kind and the episode the
 * story names it in — and the curtain over the empty frame lifts it by hand.
 */
export function FruitTile({
  eater = FIRST_EATER,
  eaters = NO_EATERS,
  form,
  highlight = null,
  index,
  peek,
  slot,
}: FruitTileProps): ReactElement {
  const { t } = useLocale()
  const threshold = useThreshold()

  if (slot.open) {
    return (
      <OpenTile
        eater={eater}
        eaters={eaters}
        form={form}
        highlight={highlight}
        record={slot.record}
      />
    )
  }

  return (
    <li {...stylex.props(styles.tile)}>
      <SpoilerVeil
        density="compact"
        peek={peek}
        placeholder={
          <span {...stylex.props(styles.face)}>
            <FruitFrame />
            <span {...stylex.props(styles.name, styles.fogged)}>
              {t('fruit.foggedName')}
            </span>
          </span>
        }
        slot={slot}
        strength="media"
      >
        {(record) => {
          return (
            <TileLink
              highlight={null}
              record={record}
            />
          )
        }}
      </SpoilerVeil>
      <p {...stylex.props(styles.kind)}>
        {t('fruits.specimen', {
          index: String(index + 1).padStart(NUMBER_WIDTH, '0'),
        })}
        {' · '}
        {t(FORM_KEY[form])}
      </p>
      <p {...stylex.props(styles.episode)}>
        {threshold('fruit.opensAt', slot.covered)}
      </p>
    </li>
  )
}

/**
 * An open tile: the link to the fruit, the eater the search or the archive
 * picked, and the kind.
 */
function OpenTile({
  eater,
  eaters,
  form,
  highlight,
  record,
}: {
  eater: EaterMatch
  eaters: EaterView[]
  form: FruitForm
  highlight: [number, number] | null
  record: FruitView
}): ReactElement {
  const { t } = useLocale()
  const shown = eaters[eater.at]

  return (
    <li {...stylex.props(styles.tile, styles.openTile)}>
      <TileLink
        highlight={highlight}
        record={record}
      />
      {shown === undefined ? null : (
        <FruitEater
          eater={shown}
          highlight={eater.highlight}
          more={eaters.length - 1}
        />
      )}
      <p {...stylex.props(styles.kind, styles.foot)}>{t(FORM_KEY[form])}</p>
    </li>
  )
}

/**
 * An open tile's link: the drawing and the name, which travel to the fruit's
 * page. The kind is printed under the tile rather than in the link, so a
 * covered tile lifted by hand reads the same.
 */
function TileLink({
  highlight,
  record,
}: {
  highlight: [number, number] | null
  record: FruitView
}): ReactElement {
  const { locale } = useLocale()
  const travels = useTravels('fruit', record.id)

  return (
    <Link
      onClick={() => {
        travelWith('fruit', record.id)
      }}
      params={{ locale, id: record.id }}
      to="/$locale/fruits/$id"
      {...stylex.props(styles.face, styles.link)}
    >
      <div {...stylex.props(styles.art)}>
        <OpenArt
          always={false}
          record={record}
        />
      </div>
      <span
        {...stylex.props(
          styles.name,
          travels && morphPart('fruit', record.id, 'name'),
        )}
      >
        <Marked
          span={highlight}
          text={record.name}
        />
      </span>
    </Link>
  )
}

// The small-caps tracking the mono lines under a tile are set in.
const META_TRACKING = '0.08em'

const styles = stylex.create({
  tile: { gap: space.xs2, alignContent: 'start', display: 'grid', minWidth: 0 },
  // The kind sits at the foot of the row, so it lines up across a row whose
  // names and eaters wrap to different heights.
  openTile: { gridTemplateRows: 'auto auto 1fr' },
  foot: { alignSelf: 'end', gridRowStart: 3 },
  face: { gap: space.xs, display: 'grid', minWidth: 0 },
  link: {
    borderRadius: radius.card,
    color: color.ink,
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs2,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textDecorationLine: 'none',
  },
  // The drawing is most of a tile's layout and paint, so the browser skips it
  // until it nears the screen (#621). Its size is exact without its strokes:
  // the column sets the width and the frame is 4:5 at every width, so the
  // album keeps its height and Back lands on the same tile.
  art: { aspectRatio: '4 / 5', contentVisibility: 'auto' },
  name: {
    color: {
      'default': color.ink,
      ':is(a:active) > &': color.ink2,
      ':is(a:focus-visible) > &': color.accent,
      ':is(a:hover) > &': color.accent,
    },
    display: 'block',
    fontFamily: font.display,
    fontSize: { 'default': text.base, '@media (min-width: 40rem)': text.lg },
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
    transitionDuration: dur.micro,
    transitionProperty: 'color',
    transitionTimingFunction: ease.out,
    minWidth: 0,
  },
  fogged: { color: color.muted },
  kind: {
    color: color.muted,
    display: 'block',
    fontFamily: font.mono,
    fontSize: text.xs,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 600,
    letterSpacing: META_TRACKING,
    lineHeight: leading.body,
    overflowWrap: 'anywhere',
    textTransform: 'uppercase',
    minWidth: 0,
  },
  episode: {
    color: color.ink2,
    fontFamily: font.mono,
    fontSize: text.xs,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 600,
    letterSpacing: META_TRACKING,
    lineHeight: leading.body,
    overflowWrap: 'anywhere',
    textTransform: 'uppercase',
    minWidth: 0,
  },
})
