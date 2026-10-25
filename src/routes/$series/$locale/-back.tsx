import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { onlyUnder, useSeriesT, useT } from '~/i18n/LocaleContext'
import { useSeriesParams } from '~/lib/progress/BookmarkContext'

import { recordStyles } from './-record.styles'

const BACK = {
  characters: { to: '/$series/$locale/characters', label: 'character.back' },
  fruits: { to: '/$series/$locale/fruits', label: null },
  places: { to: '/$series/$locale/places', label: 'place.back' },
} as const

/** The three record pages return to their own index in the selected series. */
export function RecordBackLink({
  section,
}: {
  section: keyof typeof BACK
}): ReactElement {
  const params = useSeriesParams()
  const t = useT()
  const onePiece = useSeriesT('one-piece')
  const { to, label: key } = BACK[section]
  // The fruits are One Piece's: only a fruit's page links back to them.
  const label =
    key === null ? onlyUnder(onePiece, 'one-piece')('fruit.back') : t(key)

  return (
    <Link
      params={params}
      to={to}
      {...stylex.props(recordStyles.backLink)}
    >
      ← {label}
    </Link>
  )
}
