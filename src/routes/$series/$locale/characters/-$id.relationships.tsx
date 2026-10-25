import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { useT } from '~/i18n/LocaleContext'
import { useSeriesParams, useThreshold } from '~/lib/progress/BookmarkContext'
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
        {relationships.map((relation) => (
          <RelationshipCard
            key={relation.person.id}
            relation={relation}
          />
        ))}
      </ul>
    </section>
  )
}

/** Current words stay outside the independent native disclosure. */
function RelationshipCard({
  relation,
}: {
  relation: RelationshipView
}): ReactElement {
  const t = useT()
  const { locale, series } = useSeriesParams()
  const threshold = useThreshold()
  const { history, person, summary, type } = relation
  return (
    <li {...stylex.props(relations.card)}>
      <Link
        params={{ series, locale, id: person.id }}
        to="/$series/$locale/characters/$id"
        {...stylex.props(relations.name)}
      >
        {person.name}
      </Link>
      <p {...stylex.props(relations.type)}>{type}</p>
      <p {...stylex.props(styles.lede)}>{summary}</p>
      <details {...stylex.props(relations.history)}>
        <summary
          aria-label={t('character.relationshipHistoryFor', {
            name: person.name,
          })}
          {...stylex.props(relations.toggle)}
        >
          {t('character.relationshipHistory')}
        </summary>
        <ol {...stylex.props(relations.steps)}>
          {history.map((stage) => (
            <li
              key={stage.key}
              {...stylex.props(relations.step)}
            >
              <p {...stylex.props(relations.date)}>
                {threshold('character.relationshipAt', stage)}
              </p>
              <h3 {...stylex.props(relations.stageTitle)}>{stage.type}</h3>
              <p {...stylex.props(styles.lede)}>{stage.summary}</p>
            </li>
          ))}
        </ol>
      </details>
    </li>
  )
}

const relations = stylex.create({
  list: {
    margin: 0,
    padding: 0,
    alignItems: 'start',
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
  history: { minWidth: 0 },
  toggle: {
    'paddingBlock': space.sm,
    'color': { 'default': color.ink2, ':hover': color.accent },
    'cursor': 'pointer',
    'outlineColor': { 'default': 'transparent', ':focus-visible': color.focus },
    'outlineOffset': space.xs3,
    'outlineStyle': 'solid',
    'outlineWidth': rule.fine,
    '::marker': { color: color.accent },
  },
  steps: {
    margin: 0,
    gap: space.md,
    borderInlineStartColor: color.rule,
    borderInlineStartStyle: 'solid',
    borderInlineStartWidth: rule.hair,
    display: 'grid',
    listStyleType: 'none',
    paddingInlineStart: space.lg,
  },
  step: { gap: space.xs2, display: 'grid', minWidth: 0 },
  date: {
    color: color.muted,
    fontFamily: font.mono,
    fontSize: text.xs,
    lineHeight: leading.body,
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
  stageTitle: {
    margin: 0,
    color: color.accent,
    fontSize: text.base,
    fontWeight: 600,
    lineHeight: leading.heading,
  },
  type: {
    color: color.accent,
    fontSize: text.xs,
    fontWeight: 600,
    lineHeight: leading.body,
  },
})
