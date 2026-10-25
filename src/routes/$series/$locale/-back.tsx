import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { useSeriesT } from '~/i18n/LocaleContext'
import { useSeriesParams } from '~/lib/progress/BookmarkContext'

import { recordStyles } from './-record.styles'

const BACK = {
  characters: { to: '/$series/$locale/characters', label: 'character.back' },
  fruits: { to: '/$series/$locale/fruits', label: 'fruit.back' },
  places: { to: '/$series/$locale/places', label: 'place.back' },
} as const

/** The three record pages return to their own index in the selected series. */
export function RecordBackLink({
  section,
}: {
  section: keyof typeof BACK
}): ReactElement {
  const params = useSeriesParams()
  // Every section's label: a fruit's is One Piece's, and only its pages
  // link back to the fruits.
  const t = useSeriesT('one-piece')
  const { to, label } = BACK[section]

  return (
    <Link
      params={params}
      to={to}
      {...stylex.props(recordStyles.backLink)}
    >
      ← {t(label)}
    </Link>
  )
}
