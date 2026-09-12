import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'

import { ChartArt } from '~/components/ChartArt'
import { SpoilerVeil } from '~/components/SpoilerVeil'
import type { Entity, EntityKind } from '~/data/types'
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

export type RecordTileProps = {
  readonly entry: Entity
  readonly progress: Progress
}

/**
 * One record of any kind, small: its kind and episode on a line, then a
 * plate and a name. A character's name links to their page and a place's
 * to its entry in the log; an arc or a ship is a name. Under fog the plate
 * and the name go together behind a placeholder, so neither the drawing nor
 * the slug is in the served HTML, and the episode stays.
 *
 * Used wherever a page points at the records filed beside the one it is
 * about: the two neighbours on a character page, the crew a port files.
 */
export function RecordTile({ entry, progress }: RecordTileProps) {
  const { t } = useLocale()

  return (
    <span {...stylex.props(styles.tile)}>
      <span {...stylex.props(styles.meta)}>
        <span {...stylex.props(styles.kind)}>{t(KIND_KEY[entry.kind])}</span>
        <span {...stylex.props(styles.episode)}>
          {t('chart.opensAt', { episode: entry.revealedAtEpisode })}
        </span>
      </span>
      <SpoilerVeil
        revealedAtEpisode={entry.revealedAtEpisode}
        revealed={isRevealed(entry, progress)}
        density="inline"
        placeholder={
          <span {...stylex.props(styles.card)}>
            <span {...stylex.props(styles.frame)} />
            <span {...stylex.props(styles.name)}>{t('veil.placeholder')}</span>
          </span>
        }
      >
        <span {...stylex.props(styles.card)}>
          <span {...stylex.props(styles.frame)}>
            <ChartArt art={entry.visual.art} tint={entry.visual.tint} />
          </span>
          <Name entry={entry} />
        </span>
      </SpoilerVeil>
    </span>
  )
}

function Name({ entry }: { readonly entry: Entity }) {
  const { locale } = useLocale()
  const label = entry.name[locale]

  if (entry.kind === 'character') {
    return (
      <Link
        to="/$locale/characters/$id"
        params={{ locale, id: entry.id }}
        {...stylex.props(styles.name, styles.link)}
      >
        {label}
      </Link>
    )
  }

  if (entry.kind === 'place') {
    return (
      <Link
        to="/$locale/places"
        params={{ locale }}
        hash={entry.id}
        {...stylex.props(styles.name, styles.link)}
      >
        {label}
      </Link>
    )
  }

  return <span {...stylex.props(styles.name)}>{label}</span>
}

const styles = stylex.create({
  tile: {
    display: 'grid',
    gap: space.xs,
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
  kind: {
    fontFamily: font.body,
    fontWeight: 600,
  },
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
    aspectRatio: '4 / 5',
    backgroundColor: color.paper2,
    borderColor: color.rule,
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    display: 'block',
    overflow: 'hidden',
  },
  name: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.lg,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    minWidth: 0,
    overflowWrap: 'anywhere',
  },
  link: {
    color: {
      default: color.ink,
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
})
