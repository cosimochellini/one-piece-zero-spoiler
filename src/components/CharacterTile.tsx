import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'

import { Marked } from '~/components/CharacterCard'
import { ChartArt } from '~/components/ChartArt'
import { SpoilerVeil } from '~/components/SpoilerVeil'
import { roleOf } from '~/data/characters'
import type { Entity } from '~/data/types'
import { useLocale } from '~/i18n/LocaleContext'
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

export type CharacterTileProps = {
  readonly entity: Entity
  readonly revealed: boolean
  /** A span of the name to mark, from a search match. */
  readonly highlight?: readonly [number, number] | null
}

/**
 * One line of the signal book's shelves: a small plate with the character's
 * drawing, the name, the role, and the episode they first appear in. The
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
}: CharacterTileProps) {
  const { locale, t } = useLocale()
  const role = roleOf(entity)

  return (
    <li {...stylex.props(styles.tile)}>
      <SpoilerVeil
        revealedAtEpisode={entity.revealedAtEpisode}
        revealed={revealed}
        density="compact"
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
      >
        <Link
          to="/$locale/characters/$id"
          params={{ locale, id: entity.id }}
          {...stylex.props(styles.row, styles.link)}
        >
          <span {...stylex.props(styles.frame)}>
            <ChartArt art={entity.visual.art} tint={entity.visual.tint} />
          </span>
          <span {...stylex.props(styles.words)}>
            <span {...stylex.props(styles.name)}>
              <Marked text={entity.name[locale]} span={highlight} />
            </span>
            {role === undefined ? null : (
              <span {...stylex.props(styles.role)}>{role[locale]}</span>
            )}
          </span>
        </Link>
      </SpoilerVeil>
      <p {...stylex.props(styles.episode)}>
        {t('chart.opensAt', { episode: entity.revealedAtEpisode })}
      </p>
    </li>
  )
}

const styles = stylex.create({
  tile: {
    display: 'grid',
    gap: space.xs2,
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
    outlineColor: { default: 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs2,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textDecorationLine: 'none',
  },
  frame: {
    aspectRatio: '4 / 5',
    backgroundColor: color.paper2,
    borderColor: {
      default: color.rule,
      ':is(a:hover) > &': color.rule2,
      ':is(a:focus-visible) > &': color.rule2,
    },
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    display: 'block',
    overflow: 'hidden',
    padding: space.xs2,
    transitionDuration: dur.micro,
    transitionProperty: 'border-color',
    transitionTimingFunction: ease.out,
  },
  words: {
    display: 'grid',
    gap: space.xs3,
    minWidth: 0,
  },
  name: {
    color: {
      default: color.ink,
      ':is(a:hover) > * > &': color.accent,
      ':is(a:focus-visible) > * > &': color.accent,
      ':is(a:active) > * > &': color.ink2,
    },
    display: 'block',
    fontFamily: font.display,
    fontSize: text.base,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    minWidth: 0,
    overflowWrap: 'anywhere',
    transitionDuration: dur.micro,
    transitionProperty: 'color',
    transitionTimingFunction: ease.out,
  },
  role: {
    color: color.muted,
    display: 'block',
    fontSize: text.xs,
    lineHeight: leading.body,
    minWidth: 0,
    overflowWrap: 'anywhere',
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
