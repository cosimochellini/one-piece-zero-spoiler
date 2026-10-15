import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { NameAndRole } from '~/components/CharacterCard'
import { ChartArt } from '~/components/ChartArt'
import { SpoilerVeil } from '~/components/SpoilerVeil'
import { useLocale } from '~/i18n/LocaleContext'
import { useThreshold } from '~/lib/progress/BookmarkContext'
import { useDrawing } from '~/lib/view/drawings'
import type { CharacterView, Slot } from '~/lib/view/records'
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

/** One line of a shelf: the slot it fills, and what a search matched. */
export interface CharacterTileProps {
  peek: (handle: string) => Promise<CharacterView>
  slot: Slot<CharacterView>
  /** A span of the name to mark, from a search match. */
  highlight?: [number, number] | null
  /**
   * Whether the drawing and the name may travel to the character's page, once
   * clicked and on the way back. Off for a featured character, whose crest
   * card higher up already carries the names: a name may be on one element
   * of a page only.
   */
  morph?: boolean
}

/**
 * One line of the signal book's shelves: a small plate with the character's
 * drawing, the name, the role, and the threshold they first appear at. The
 * crest is for the featured few; a shelf holds hundreds, so a tile is the
 * drawing alone in a plain frame.
 *
 * Under fog the tile has no link, no name and no drawing in the DOM, for the
 * same reason a card does not: the slug would spell the name and the drawing
 * would say as much. The episode stays, because it is the promise.
 */
export function CharacterTile({
  slot,
  peek,
  highlight = null,
  morph = true,
}: CharacterTileProps): ReactElement {
  const { t } = useLocale()
  const threshold = useThreshold()

  return (
    <li {...stylex.props(styles.tile)}>
      <SpoilerVeil
        density="compact"
        peek={peek}
        placeholder={
          <span {...stylex.props(styles.row)}>
            <span {...stylex.props(styles.frame)} />
            <span {...stylex.props(styles.words)}>
              <span {...stylex.props(styles.name)}>
                {t('veil.placeholder')}
              </span>
            </span>
          </span>
        }
        slot={slot}
      >
        {(record) => {
          return (
            <TileLink
              highlight={highlight}
              morph={morph}
              record={record}
            />
          )
        }}
      </SpoilerVeil>
      <p {...stylex.props(styles.episode)}>
        {threshold('chart.opensAt', slot.open ? slot.record : slot.covered)}
      </p>
    </li>
  )
}

/** An open tile: the drawing and the name, as a link to the page. */
function TileLink({
  record,
  highlight,
  morph,
}: {
  highlight: [number, number] | null
  morph: boolean
  record: CharacterView
}): ReactElement {
  const { locale } = useLocale()
  const travels = useTravels('character', record.id) && morph
  const { ref, strokes } = useDrawing(record.id, record.visual)

  return (
    <Link
      onClick={() => {
        if (morph) {
          travelWith('character', record.id)
        }
      }}
      params={{ locale, id: record.id }}
      to="/$locale/characters/$id"
      {...stylex.props(styles.row, styles.link)}
    >
      <span
        ref={ref}
        {...stylex.props(
          styles.frame,
          travels && morphPart('character', record.id, 'art'),
        )}
      >
        <ChartArt
          strokes={strokes}
          tint={record.visual.tint}
        />
      </span>
      <span {...stylex.props(styles.words)}>
        <NameAndRole
          highlight={highlight}
          nameSx={styles.name}
          record={record}
          roleSx={styles.role}
          travels={travels}
        />
      </span>
    </Link>
  )
}

const styles = stylex.create({
  // Hundreds of tiles below the fold are most of the signal book's layout
  // and paint, so the browser skips each one until it nears the screen
  // (#621). The size it stands in for is the tile's own, which is the same at
  // every width and in both locales: a 3.5rem plate at 4:5 sets the row, and
  // the episode is one line under it. An exact size keeps the page's height,
  // so Back restores the scroll position to the same tile. The clip margin
  // lets the link's focus ring past the edge, which paint containment would
  // otherwise cut off.
  tile: {
    containIntrinsicSize: 'auto 5.825rem',
    gap: space.xs2,
    contentVisibility: 'auto',
    display: 'grid',
    overflowClipMargin: space.xs,
    minWidth: 0,
  },
  row: {
    alignItems: 'center',
    columnGap: space.sm,
    display: 'grid',
    gridTemplateColumns: '3.5rem minmax(0, 1fr)',
  },
  link: {
    borderRadius: radius.card,
    color: color.ink,
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs2,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textDecorationLine: 'none',
  },
  frame: {
    padding: space.xs2,
    borderColor: {
      'default': color.rule,
      ':is(a:focus-visible) > &': color.rule2,
      ':is(a:hover) > &': color.rule2,
    },
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    overflow: 'hidden',
    aspectRatio: '4 / 5',
    backgroundColor: color.paper2,
    display: 'block',
    transitionDuration: dur.micro,
    transitionProperty: 'border-color',
    transitionTimingFunction: ease.out,
  },
  words: { gap: space.xs3, display: 'grid', minWidth: 0 },
  name: {
    color: {
      'default': color.ink,
      ':is(a:active) > * > &': color.ink2,
      ':is(a:focus-visible) > * > &': color.accent,
      ':is(a:hover) > * > &': color.accent,
    },
    display: 'block',
    fontFamily: font.display,
    fontSize: text.base,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
    transitionDuration: dur.micro,
    transitionProperty: 'color',
    transitionTimingFunction: ease.out,
    minWidth: 0,
  },
  role: {
    color: color.muted,
    display: 'block',
    fontSize: text.xs,
    lineHeight: leading.body,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
  episode: {
    color: color.ink2,
    fontFamily: font.mono,
    fontSize: text.xs,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 600,
    letterSpacing: '0.08em',
    lineHeight: leading.body,
    // Under the plate, so the fact sits beside the frame rather than under
    // the words.
    paddingInlineStart: `calc(3.5rem + ${space.sm})`,
    textTransform: 'uppercase',
  },
})
