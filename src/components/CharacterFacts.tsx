import * as stylex from '@stylexjs/stylex'

import type { CharacterDossier, LocalizedText, Timeline } from '~/data/types'
import { useLocale } from '~/i18n/LocaleContext'
import type { Locale } from '~/i18n/locales'
import type { Translate } from '~/i18n/types'
import { modeOf, type Bookmark } from '~/lib/progress/episode'
import { latestAt } from '~/lib/progress/spoiler'
import { color, font, leading, rule, space, text } from '~/styles/tokens.stylex'

export type CharacterFactsProps = {
  readonly dossier: CharacterDossier
  readonly bookmark: Bookmark
}

/**
 * The dossier's facts as a definition list, each as it stands at the
 * reader's episode.
 *
 * Every fact is a timeline and the row shows the latest entry the reader has
 * reached, so Robin's affiliation changes when she changes it and a bounty is
 * the one on the poster the reader has seen. A fact with no entry yet is not
 * a row: an empty "Bounty" line would say that a bounty is coming, which is
 * itself a spoiler. Computed at render from the live bookmark, so an entry
 * above the reader's episode is never in the DOM.
 */
export function CharacterFacts({ dossier, bookmark }: CharacterFactsProps) {
  const { locale, t } = useLocale()
  const known = <T,>(timeline: Timeline<T> | undefined) =>
    timeline === undefined ? undefined : latestAt(timeline, bookmark)
  const words = (value: LocalizedText | undefined) => value?.[locale]

  const rows: readonly (readonly [string, string | undefined])[] = [
    [t('character.epithet'), words(known(dossier.epithet))],
    [t('character.affiliation'), words(known(dossier.affiliation))],
    [t('character.origin'), words(known(dossier.origin))],
    [t('character.devilFruit'), words(known(dossier.devilFruit))],
    [t('character.bounty'), formatBounty(known(dossier.bounty), locale, t)],
  ]
  const shown = rows.filter(
    (row): row is readonly [string, string] => row[1] !== undefined,
  )

  // The timelines count in anime episodes. A reader who counts in chapters
  // reaches none of their entries, and is told why instead of shown nothing.
  if (modeOf(bookmark) === 'chapter') {
    return (
      <p {...stylex.props(styles.note)}>{t('character.factsInEpisodes')}</p>
    )
  }

  if (shown.length === 0) return null

  return (
    <dl
      aria-label={t('character.factsLabel')}
      {...stylex.props(styles.facts)}
    >
      {shown.map(([label, value]) => (
        <div
          key={label}
          {...stylex.props(styles.fact)}
        >
          <dt {...stylex.props(styles.label)}>{label}</dt>
          <dd {...stylex.props(styles.value)}>{value}</dd>
        </div>
      ))}
    </dl>
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
  if (amount === undefined) return undefined

  const grouped = new Intl.NumberFormat(
    locale === 'it' ? 'it-IT' : 'en-GB',
  ).format(amount)
  return t('character.bountyValue', { amount: grouped })
}

const styles = stylex.create({
  // The same ledger as a port's facts: a label in small caps, the value in
  // body type, a hairline between rows.
  facts: {
    borderBlockStartColor: color.rule,
    borderBlockStartStyle: 'solid',
    borderBlockStartWidth: rule.hair,
    display: 'grid',
    marginBlock: 0,
    marginBlockStart: space.xs,
    minWidth: 0,
  },
  fact: {
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
    minWidth: 0,
    paddingBlock: space.xs,
    rowGap: space.xs3,
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
    minWidth: 0,
    overflowWrap: 'anywhere',
  },
  note: {
    color: color.muted,
    fontSize: text.base,
    lineHeight: leading.body,
    maxWidth: '52ch',
  },
})
