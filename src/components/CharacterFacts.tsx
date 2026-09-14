import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import { Fragment, type ReactElement, type ReactNode } from 'react'

import { useLocale } from '~/i18n/LocaleContext'
import type { Locale } from '~/i18n/locales'
import type { Translate } from '~/i18n/types'
import type { CharacterFacts as Facts, FruitLink } from '~/lib/view/records'
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

/** The facts as they stand at the reader's bookmark. */
export type CharacterFactsProps = { readonly facts: Facts }

/**
 * The dossier's facts as a definition list, each as it stands at the
 * reader's episode.
 *
 * Every fact is a timeline in the archive, and the row shows the latest entry
 * the reader has reached, so Robin's affiliation changes when she changes it
 * and a bounty is the one on the poster the reader has seen. A fact with no
 * entry yet is not a row: an empty "Bounty" line would say that a bounty is
 * coming, which is itself a spoiler. The timelines are resolved on the
 * server, so an entry above the reader's episode is not in the payload — not
 * merely absent from the DOM.
 *
 * What stays here is what belongs to the reader's language rather than the
 * archive: the labels, and the digit grouping of a bounty.
 */
export function CharacterFacts({
  facts,
}: CharacterFactsProps): null | ReactElement {
  const { locale, t } = useLocale()

  // The timelines count in anime episodes. A reader who counts in chapters
  // reaches none of their entries, and is told why instead of shown nothing.
  if (facts.mode === 'chapterNote') {
    return (
      <p {...stylex.props(styles.note)}>{t('character.factsInEpisodes')}</p>
    )
  }

  const rows: readonly (readonly [string, ReactNode])[] = [
    [t('character.epithet'), facts.epithet],
    [t('character.affiliation'), facts.affiliation],
    [t('character.origin'), facts.origin],
    [t('character.devilFruit'), fruitRow(facts.devilFruit)],
    [t('character.bounty'), formatBounty(facts.bounty, locale, t)],
  ]
  const shown = rows.filter((row) => row[1] !== undefined)

  if (shown.length === 0) {
    return null
  }

  return (
    <dl
      aria-label={t('character.factsLabel')}
      {...stylex.props(styles.facts)}
    >
      {shown.map(([label, value]) => {
        return (
          <div
            key={label}
            {...stylex.props(styles.fact)}
          >
            <dt {...stylex.props(styles.label)}>{label}</dt>
            <dd {...stylex.props(styles.value)}>{value}</dd>
          </div>
        )
      })}
    </dl>
  )
}

/**
 * The devil fruit row, or nothing when the reader has not been told of one.
 *
 * The fruits are links because a fruit is a record with a page of its own
 * now, and the link is always safe to print: the row is only built from a
 * timeline entry the reader has reached, and a fruit opens no later than the
 * entry that names it, which a data test holds.
 */
function fruitRow(links: readonly FruitLink[] | undefined): ReactNode {
  return links === undefined ? undefined : <FruitLinks links={links} />
}

/** One link per fruit, comma-separated: an entry may name more than one. */
function FruitLinks({
  links,
}: {
  readonly links: readonly FruitLink[]
}): ReactElement {
  const { locale } = useLocale()

  return (
    <>
      {links.map((link, at) => {
        return (
          <Fragment key={link.id}>
            {at === 0 ? null : ', '}
            <Link
              params={{ locale, id: link.id }}
              to="/$locale/fruits/$id"
              {...stylex.props(styles.link)}
            >
              {link.name}
            </Link>
          </Fragment>
        )
      })}
    </>
  )
}

/**
 * A bounty in the reader's own digit grouping: 30.000.000 in Italian,
 * 30,000,000 in English, and the unit after it.
 */
function formatBounty(
  amount: number | undefined,
  locale: Locale,
  t: Translate,
): string | undefined {
  if (amount === undefined) {
    return undefined
  }

  const digits = new Intl.NumberFormat(locale === 'it' ? 'it-IT' : 'en-GB')
  return t('character.bountyValue', { amount: digits.format(amount) })
}

const styles = stylex.create({
  // The same ledger as a port's facts: a label in small caps, the value in
  // body type, a hairline between rows.
  facts: {
    marginBlock: 0,
    borderBlockStartColor: color.rule,
    borderBlockStartStyle: 'solid',
    borderBlockStartWidth: rule.hair,
    display: 'grid',
    marginBlockStart: space.xs,
    minWidth: 0,
  },
  fact: {
    paddingBlock: space.xs,
    alignItems: 'baseline',
    borderBlockEndColor: color.rule,
    borderBlockEndStyle: 'solid',
    borderBlockEndWidth: rule.hair,
    columnGap: space.md,
    display: 'grid',
    gridTemplateColumns: {
      'default': 'minmax(0, 1fr)',
      '@media (min-width: 30rem)': 'minmax(7rem, 9rem) minmax(0, 1fr)',
    },
    rowGap: space.xs3,
    minWidth: 0,
  },
  label: {
    color: color.muted,
    fontFamily: font.body,
    fontSize: text.xs,
    fontWeight: 600,
    letterSpacing: '0.08em',
    lineHeight: leading.body,
    textTransform: 'uppercase',
  },
  value: {
    color: color.ink2,
    fontSize: text.base,
    lineHeight: leading.body,
    marginInlineStart: 0,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
  note: {
    color: color.muted,
    fontSize: text.base,
    lineHeight: leading.body,
    maxWidth: '52ch',
  },
  // The same link voice as a record tile: colour on hover, the rule under it
  // reserved at rest so nothing shifts when the pointer arrives.
  link: {
    color: {
      'default': color.ink2,
      ':hover': color.accent,
      ':active': color.ink2,
    },
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textDecorationColor: { 'default': color.rule, ':hover': color.accent },
    textDecorationLine: 'underline',
    textDecorationThickness: rule.hair,
    textUnderlineOffset: '3px',
    transitionDuration: dur.micro,
    transitionProperty: 'color, text-decoration-color',
    transitionTimingFunction: ease.out,
  },
})
