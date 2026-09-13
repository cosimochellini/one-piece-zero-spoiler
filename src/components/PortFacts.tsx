import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { styles } from '~/components/PortLog.styles'
import { useLocale } from '~/i18n/LocaleContext'
import type { PortDossier } from '~/lib/view/records'

/**
 * The four facts, as a definition list. The arc is named directly rather
 * than veiled: an arc opens no later than any place filed under it (the
 * data test holds that), so an open place always has an open arc.
 */
export function PortFacts({
  dossier,
}: {
  readonly dossier: PortDossier
}): ReactElement {
  const { t } = useLocale()

  return (
    <dl {...stylex.props(styles.facts)}>
      <Fact
        label={t('places.sea')}
        value={t(`sea.${dossier.sea}`)}
      />
      <Fact
        label={t('places.form')}
        value={t(`form.${dossier.form}`)}
      />
      {dossier.arc === null ? null : (
        <Fact
          label={t('places.arc')}
          value={dossier.arc}
        />
      )}
      <Fact
        label={t('places.landmark')}
        value={dossier.landmark}
      />
    </dl>
  )
}

/** One row of the ledger: the term in small caps, the value beside it. */
function Fact({
  label,
  value,
}: {
  readonly label: string
  readonly value: string
}): ReactElement {
  return (
    <div {...stylex.props(styles.fact)}>
      <dt {...stylex.props(styles.factLabel)}>{label}</dt>
      <dd {...stylex.props(styles.factValue)}>{value}</dd>
    </div>
  )
}
