import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { Marked } from '~/components/CharacterCard'
import { FruitFrame } from '~/components/FruitFrame'
import { styles } from '~/components/SpecimenBands.styles'
import { SpoilerVeil } from '~/components/SpoilerVeil'
import { useLocale } from '~/i18n/LocaleContext'
import type { TranslationKey } from '~/i18n/types'
import { useThreshold } from '~/lib/progress/BookmarkContext'
import type { FruitForm, FruitView, Slot } from '~/lib/view/records'

/** How wide a specimen number is printed. `01`, never `1`. */
const NUMBER_WIDTH = 2

const FORM_KEY: Readonly<Record<FruitForm, TranslationKey>> = {
  logia: 'fruitForm.logia',
  paramecia: 'fruitForm.paramecia',
  zoan: 'fruitForm.zoan',
}

/** One row of the sheet: what it is, where it sits, and what fills it. */
export type FruitSpecimenProps = {
  /** The plate this row sits on, so a covered row still says which it is. */
  readonly form: FruitForm
  readonly highlight?: null | readonly [number, number]
  /** Zero-based within its plate; the row prints it plus one. */
  readonly index: number
  readonly peek: (handle: string) => Promise<FruitView>
  readonly slot: Slot<FruitView>
}

/**
 * One specimen: a number and a drawing in the margin, and beside them the
 * kind, the threshold, the name and the sentence.
 *
 * The number, the kind and the threshold sit outside the fog on purpose —
 * "specimen 04, a Logia, opens at episode 462" is the promise the sheet makes
 * to a reader who has not got there, and covering it would leave them with a
 * blank row. The drawing and the words are veiled separately on the same
 * slot, because a covered row must carry neither in its HTML.
 */
export function FruitSpecimen({
  form,
  highlight = null,
  index,
  peek,
  slot,
}: FruitSpecimenProps): ReactElement {
  const { t } = useLocale()
  const threshold = useThreshold()
  const filed = slot.open ? slot.record : slot.covered

  return (
    <li {...stylex.props(styles.row)}>
      <SpecimenMargin
        index={index}
        peek={peek}
        slot={slot}
      />

      <div {...stylex.props(styles.words)}>
        <p {...stylex.props(styles.meta)}>
          <span {...stylex.props(styles.kind)}>{t(FORM_KEY[form])}</span>
          <span {...stylex.props(styles.episode)}>
            {threshold('fruit.opensAt', filed)}
          </span>
        </p>
        <SpoilerVeil
          peek={peek}
          placeholder={
            <>
              <p {...stylex.props(styles.name)}>{t('fruit.foggedName')}</p>
              <p {...stylex.props(styles.summary)}>
                {threshold('fruit.foggedDescription', filed)}
              </p>
            </>
          }
          slot={slot}
        >
          {(record) => {
            return (
              <SpecimenWords
                highlight={highlight}
                record={record}
              />
            )
          }}
        </SpoilerVeil>
      </div>
    </li>
  )
}

/**
 * The left margin of a row: the specimen number, and the drawing under it.
 *
 * The number stays whatever the fog decides — a sheet that skipped a number
 * where a covered fruit sits would be a sheet with a hole in it.
 */
function SpecimenMargin({
  index,
  peek,
  slot,
}: {
  readonly index: number
  readonly peek: (handle: string) => Promise<FruitView>
  readonly slot: Slot<FruitView>
}): ReactElement {
  const { t } = useLocale()

  return (
    <div {...stylex.props(styles.margin)}>
      <p {...stylex.props(styles.specimenNumber)}>
        {t('fruits.specimen', {
          index: String(index + 1).padStart(NUMBER_WIDTH, '0'),
        })}
      </p>
      <div {...stylex.props(styles.drawing)}>
        <SpoilerVeil
          density="compact"
          peek={peek}
          placeholder={<FruitFrame />}
          slot={slot}
          strength="media"
        >
          {(record) => <FruitFrame visual={record.visual} />}
        </SpoilerVeil>
      </div>
    </div>
  )
}

/** The name, which is a link to the fruit's own page, and its sentence. */
function SpecimenWords({
  highlight,
  record,
}: {
  readonly highlight: null | readonly [number, number]
  readonly record: FruitView
}): ReactElement {
  const { locale } = useLocale()

  return (
    <>
      <p {...stylex.props(styles.name)}>
        <Link
          params={{ locale, id: record.id }}
          to="/$locale/fruits/$id"
          {...stylex.props(styles.link)}
        >
          <Marked
            span={highlight}
            text={record.name}
          />
        </Link>
      </p>
      <p {...stylex.props(styles.summary)}>{record.summary}</p>
    </>
  )
}
