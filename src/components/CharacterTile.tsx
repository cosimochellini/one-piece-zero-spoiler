import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { Marked } from '~/components/CharacterCard'
import { ChartArt } from '~/components/ChartArt'
import { SpoilerVeil } from '~/components/SpoilerVeil'
import { roleOf } from '~/data/characters'
import type { Entity } from '~/data/types'
import { useLocale } from '~/i18n/LocaleContext'
import { useThreshold } from '~/lib/progress/BookmarkContext'
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

/** One line of a shelf: the record, whether it is open, and what matched. */
export type CharacterTileProps = {
  readonly entity: Entity
  readonly revealed: boolean
  /** A span of the name to mark, from a search match. */
  readonly highlight?: null | readonly [number, number]
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
  entity,
  revealed,
  highlight = null,
}: CharacterTileProps): ReactElement {
  const { locale, t } = useLocale()
  const threshold = useThreshold()
  const role = roleOf(entity)

  return (
    <li {...stylex.props(styles.tile)}>
      <SpoilerVeil
        density="compact"
        gated={entity}
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
        revealed={revealed}
      >
        <Link
          params={{ locale, id: entity.id }}
          to="/$locale/characters/$id"
          {...stylex.props(styles.row, styles.link)}
        >
          <span {...stylex.props(styles.frame)}>
            <ChartArt
              art={entity.visual.art}
              tint={entity.visual.tint}
            />
          </span>
          <span {...stylex.props(styles.words)}>
            <span {...stylex.props(styles.name)}>
              <Marked
                span={highlight}
                text={entity.name[locale]}
              />
            </span>
            {role === undefined ? null : (
              <span {...stylex.props(styles.role)}>{role[locale]}</span>
            )}
          </span>
        </Link>
      </SpoilerVeil>
      <p {...stylex.props(styles.episode)}>
        {threshold('chart.opensAt', entity)}
      </p>
    </li>
  )
}

const styles = stylex.create({
  tile: { gap: space.xs2, display: 'grid', minWidth: 0 },
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
