/**
 * The short list under the chart on the places page: each place the reader
 * has reached, a link to its own page. It stands where the stacked entries
 * were until the index (#675) replaces it. A sibling of the route module;
 * the leading `-` keeps the file out of the generated route tree.
 */
import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import { type ReactElement, useId } from 'react'

import { useLocale } from '~/i18n/LocaleContext'
import type { CoveredRecord, PortView } from '~/lib/view/records'
import {
  color,
  dur,
  ease,
  font,
  leading,
  rule,
  space,
  text,
} from '~/styles/tokens.stylex'

/**
 * The places the reader has reached, in their order, each a link to its own
 * page, and how many are left under fog. Nothing with no place reached: the
 * chart above already says everything is under fog.
 */
export function PlaceLinks({
  covered,
  open,
}: {
  covered: CoveredRecord[]
  open: PortView[]
}): null | ReactElement {
  const { locale, t } = useLocale()
  const titleId = useId()

  if (open.length === 0) {
    return null
  }

  return (
    <section
      aria-labelledby={titleId}
      {...stylex.props(styles.places)}
    >
      <h2
        id={titleId}
        {...stylex.props(styles.title)}
      >
        {t('places.listTitle')}
      </h2>
      <ol {...stylex.props(styles.list)}>
        {open.map((port) => {
          return (
            <li
              key={port.id}
              {...stylex.props(styles.item)}
            >
              <Link
                params={{ locale, id: port.id }}
                to="/$locale/places/$id"
                {...stylex.props(styles.link)}
              >
                {port.name}
              </Link>
            </li>
          )
        })}
      </ol>
      {covered.length === 0 ? null : (
        <p {...stylex.props(styles.fog)}>
          {covered.length === 1 ?
            t('chart.fogOne')
          : t('chart.fog', { count: covered.length })}
        </p>
      )}
    </section>
  )
}

const styles = stylex.create({
  places: { gap: space.sm, display: 'grid' },
  title: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.xl,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
  },
  // Numbered by the list itself, in two digits so the names line up.
  list: {
    columnGap: space.lg,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 14rem), 1fr))',
    listStyleType: 'decimal-leading-zero',
    paddingInlineStart: space.xl,
  },
  item: {
    color: color.muted,
    fontFamily: font.mono,
    fontSize: text.xs,
    fontVariantNumeric: 'tabular-nums',
  },
  // A thumb's height, whatever the line.
  link: {
    alignItems: 'center',
    color: {
      'default': color.ink,
      ':hover': color.accent,
      ':active': color.ink2,
    },
    display: 'inline-flex',
    fontFamily: font.body,
    fontSize: text.base,
    fontWeight: 600,
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textDecorationColor: { 'default': color.rule2, ':hover': color.accent },
    textDecorationLine: 'underline',
    textDecorationThickness: rule.hair,
    textUnderlineOffset: '4px',
    transitionDuration: dur.micro,
    transitionProperty: 'color, text-decoration-color',
    transitionTimingFunction: ease.out,
    minHeight: '2.75rem',
  },
  fog: {
    color: color.muted,
    fontFamily: font.mono,
    fontSize: text.xs,
    fontVariantNumeric: 'tabular-nums',
  },
})
