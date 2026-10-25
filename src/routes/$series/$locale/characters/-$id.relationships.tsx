import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { useT } from '~/i18n/LocaleContext'
import { useSeriesParams } from '~/lib/progress/BookmarkContext'
import type { RelationshipView } from '~/lib/view/relationships'
import {
  color,
  font,
  leading,
  radius,
  rule,
  space,
  text,
} from '~/styles/tokens.stylex'

import { styles } from './-$id.styles'

/** The people the server can name, with the connection rather than their role. */
export function RelationshipBand({
  relationships,
}: {
  relationships: RelationshipView[]
}): null | ReactElement {
  const t = useT()
  const { locale, series } = useSeriesParams()
  if (relationships.length === 0) {
    return null
  }

  return (
    <section
      aria-labelledby="relationships"
      {...stylex.props(styles.chronicle)}
    >
      <div {...stylex.props(styles.bandHead)}>
        <h2
          id="relationships"
          {...stylex.props(styles.sectionTitle)}
        >
          {t('character.relationshipsTitle')}
        </h2>
        <p {...stylex.props(styles.lede)}>{t('character.relationshipsLede')}</p>
      </div>
      <ul {...stylex.props(relations.list)}>
        {relationships.map(({ person, summary, type }) => (
          <li
            key={person.id}
            {...stylex.props(relations.card)}
          >
            <Link
              params={{ series, locale, id: person.id }}
              to="/$series/$locale/characters/$id"
              {...stylex.props(relations.name)}
            >
              {person.name}
            </Link>
            <p {...stylex.props(relations.type)}>{type}</p>
            <p {...stylex.props(styles.lede)}>{summary}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

const relations = stylex.create({
  list: {
    margin: 0,
    padding: 0,
    columnGap: space.lg,
    display: 'grid',
    gridTemplateColumns: {
      'default': 'minmax(0, 1fr)',
      '@media (min-width: 40rem)': 'repeat(2, minmax(0, 1fr))',
    },
    listStyleType: 'none',
    rowGap: space.md,
  },
  card: {
    padding: space.md,
    borderColor: color.rule,
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    gap: space.xs,
    display: 'grid',
    minWidth: 0,
  },
  name: {
    color: { 'default': color.ink, ':hover': color.accent },
    fontFamily: font.display,
    fontSize: text.lg,
    fontWeight: 800,
    lineHeight: leading.heading,
    outlineColor: color.focus,
    outlineOffset: space.xs2,
    overflowWrap: 'anywhere',
    textDecorationLine: 'underline',
    textUnderlineOffset: '3px',
  },
  type: {
    color: color.accent,
    fontSize: text.xs,
    fontWeight: 600,
    lineHeight: leading.body,
  },
})
