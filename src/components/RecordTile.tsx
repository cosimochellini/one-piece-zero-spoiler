import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { ChartArt } from '~/components/ChartArt'
import { SpoilerVeil } from '~/components/SpoilerVeil'
import { useLocale } from '~/i18n/LocaleContext'
import type { TranslationKey } from '~/i18n/types'
import { useThreshold } from '~/lib/progress/BookmarkContext'
import { useDrawing } from '~/lib/view/drawings'
import type { EntityKind, RecordView, Slot } from '~/lib/view/records'
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

const KIND_KEY: Record<EntityKind, TranslationKey> = {
  character: 'kind.character',
  arc: 'kind.arc',
  place: 'kind.place',
  ship: 'kind.ship',
  fruit: 'kind.fruit',
}

/** The slot to file, and how to ask for what fills it. */
export interface RecordTileProps {
  peek: (handle: string) => Promise<RecordView>
  slot: Slot<RecordView>
}

/**
 * One record of any kind, small: its kind and episode on a line, then a
 * plate and a name. A character's name links to their page, and a place's
 * or a ship's to its entry in the log; an arc is a name. Under fog the plate
 * and the name go together behind a placeholder, so neither the drawing nor
 * the slug is in the served HTML, and the episode stays.
 *
 * Used wherever a page points at the records filed beside the one it is
 * about: the two neighbours on a character page, the crew a port files.
 */
export function RecordTile({ slot, peek }: RecordTileProps): ReactElement {
  const { t } = useLocale()
  const threshold = useThreshold()
  const filed = slot.open ? slot.record : slot.covered

  return (
    <span {...stylex.props(styles.tile)}>
      <span {...stylex.props(styles.meta)}>
        <span {...stylex.props(styles.kind)}>{t(KIND_KEY[filed.kind])}</span>
        <span {...stylex.props(styles.episode)}>
          {threshold('chart.opensAt', filed)}
        </span>
      </span>
      <SpoilerVeil
        density="inline"
        peek={peek}
        placeholder={
          <span {...stylex.props(styles.card)}>
            <span {...stylex.props(styles.frame)} />
            <span {...stylex.props(styles.name)}>{t('veil.placeholder')}</span>
          </span>
        }
        slot={slot}
      >
        {(record) => {
          return (
            <span {...stylex.props(styles.card)}>
              <Plate record={record} />
              <Name entry={record} />
            </span>
          )
        }}
      </SpoilerVeil>
    </span>
  )
}

/** The record's drawing in its frame, asked for once near the screen. */
function Plate({ record }: { record: RecordView }): ReactElement {
  const { ref, strokes } = useDrawing(record.id, record.visual)

  return (
    <span
      ref={ref}
      {...stylex.props(styles.frame)}
    >
      <ChartArt
        strokes={strokes}
        tint={record.visual.tint}
      />
    </span>
  )
}

/**
 * The name, and where it leads. A character, a place, a ship and a devil
 * fruit each have a page to point at; an arc does not, so its name is plain
 * text rather than a link that would go nowhere. A ship's entry is in the
 * band above the log, on the same page as the places.
 *
 * No tile is handed a fruit today: the two callers are a port's `filedHere`
 * and the two records beside one on the landing chart, and the chart draws no
 * fruit. The branch is here because `filedHere` is a list of record ids and
 * takes a fruit id the day somebody writes one — it is the data that decides,
 * not another edit here, and a tile that met one would otherwise print a name
 * it had a page for and no way to reach it.
 */
function Name({ entry }: { entry: RecordView }): ReactElement {
  const { locale } = useLocale()
  const label = entry.name

  if (entry.kind === 'character') {
    return (
      <Link
        params={{ locale, id: entry.id }}
        to="/$locale/characters/$id"
        {...stylex.props(styles.name, styles.link)}
      >
        {label}
      </Link>
    )
  }

  if (entry.kind === 'place' || entry.kind === 'ship') {
    return (
      <Link
        hash={entry.id}
        params={{ locale }}
        to="/$locale/places"
        {...stylex.props(styles.name, styles.link)}
      >
        {label}
      </Link>
    )
  }

  if (entry.kind === 'fruit') {
    return (
      <Link
        params={{ locale, id: entry.id }}
        to="/$locale/fruits/$id"
        {...stylex.props(styles.name, styles.link)}
      >
        {label}
      </Link>
    )
  }

  return <span {...stylex.props(styles.name)}>{label}</span>
}

const styles = stylex.create({
  // Skipped until near the screen, like a character tile (#621): the crew a
  // port files is most of the ship's log. 6.1375rem is the tile's height at
  // every width; the clip margin keeps the focus ring whole.
  tile: {
    containIntrinsicSize: 'auto 6.1375rem',
    gap: space.xs,
    contentVisibility: 'auto',
    display: 'grid',
    overflowClipMargin: space.xs,
    minWidth: 0,
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
  kind: { fontFamily: font.body, fontWeight: 600 },
  episode: {
    color: color.ink2,
    fontFamily: font.mono,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 600,
  },
  card: {
    alignItems: 'center',
    columnGap: space.sm,
    display: 'grid',
    gridTemplateColumns: '3.5rem minmax(0, 1fr)',
  },
  frame: {
    borderColor: color.rule,
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    overflow: 'hidden',
    aspectRatio: '4 / 5',
    backgroundColor: color.paper2,
    display: 'block',
  },
  name: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.lg,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
  link: {
    color: {
      'default': color.ink,
      ':hover': color.accent,
      ':active': color.ink2,
    },
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textDecorationColor: { 'default': 'transparent', ':hover': color.accent },
    textDecorationLine: 'underline',
    textDecorationThickness: rule.fine,
    textUnderlineOffset: '4px',
    transitionDuration: dur.micro,
    transitionProperty: 'color, text-decoration-color',
    transitionTimingFunction: ease.out,
  },
})
