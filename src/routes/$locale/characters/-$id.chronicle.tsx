/**
 * The chronicle band of the character page: the stories the reader has
 * reached, one under the other.
 *
 * A sibling of the route module rather than a shared component because it is
 * only ever this page's second band; the leading `-` keeps the file out of
 * the generated route tree.
 */
import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { CharacterChronicle } from '~/components/CharacterChronicle'
import { useLocale } from '~/i18n/LocaleContext'
import type { CharacterDetail } from '~/lib/view/records'
import { settleStyles } from '~/styles/settle'

import { styles } from './-$id.styles'

/**
 * The heading, the lede and the ledger — or nothing.
 *
 * Nothing on a covered page, because the heading alone would say the
 * character has a story worth telling; nothing when the reader has reached no
 * story yet, for the same reason. The chapter note is the one exception: it
 * says why the band is empty, which is not a spoiler.
 */
export function ChronicleBand({
  band,
  detail,
}: {
  /** Which band down the page this is, for the settle delay. */
  readonly band: number
  readonly detail: CharacterDetail
}): null | ReactElement {
  const { t } = useLocale()
  const { chronicle } = detail

  const empty = chronicle.mode === 'chronicle' && chronicle.entries.length === 0
  if (empty || !detail.slot.open) {
    return null
  }

  return (
    <section
      aria-labelledby="chronicle"
      {...stylex.props(
        styles.chronicle,
        settleStyles.band,
        settleStyles.at(band),
      )}
    >
      <div {...stylex.props(styles.bandHead)}>
        <h2
          id="chronicle"
          {...stylex.props(styles.sectionTitle)}
        >
          {t('character.chronicleTitle')}
        </h2>
        <p {...stylex.props(styles.lede)}>{t('character.chronicleLede')}</p>
      </div>
      <CharacterChronicle chronicle={chronicle} />
    </section>
  )
}
