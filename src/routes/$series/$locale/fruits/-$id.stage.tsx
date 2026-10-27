/**
 * The top of a fruit's page: its drawing, name and story.
 *
 * Siblings of the route module, like the bands under them; the leading `-`
 * keeps the file out of the generated route tree.
 */
import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { FruitFrame } from '~/components/FruitFrame'
import { SpoilerVeil } from '~/components/SpoilerVeil'
import { onlyUnder, useSeriesOnlyT } from '~/i18n/LocaleContext'
import type { TranslationKey } from '~/i18n/types'
import { useThreshold } from '~/lib/progress/BookmarkContext'
import type {
  FruitDetail,
  FruitForm,
  FruitView,
  Slot,
} from '~/lib/view/records'
import { morphPart } from '~/styles/morph'

import { StageArt } from './-$id.art'
import { styles } from './-$id.styles'

const FORM_KEY: Record<FruitForm, TranslationKey<'one-piece'>> = {
  logia: 'fruitForm.logia',
  paramecia: 'fruitForm.paramecia',
  zoan: 'fruitForm.zoan',
}

/**
 * The stage: the drawing large in a glow of its own tint, drawing itself in
 * on arrival, then the name at display size, its kind and its saga, and the
 * sentence.
 *
 * The meta line sits outside the veil on purpose: "a devil fruit, episode
 * 462" is the promise the page makes to a reader who has not got there yet.
 * Under fog the rest is veiled, the frame is empty, and no saga is named.
 */
export function StageBand({
  detail,
  peek,
}: {
  detail: FruitDetail
  peek: (handle: string) => Promise<FruitView>
}): ReactElement {
  return (
    <section {...stylex.props(styles.stage)}>
      <div {...stylex.props(styles.drawing)}>
        <SpoilerVeil
          density="block"
          lead
          peek={peek}
          placeholder={<FruitFrame />}
          slot={detail.slot}
          strength="media"
        >
          {(record) => {
            return (
              <StageArt
                key={record.id}
                drawings={detail.drawings}
                record={record}
              />
            )
          }}
        </SpoilerVeil>
      </div>

      <StageText
        peek={peek}
        saga={detail.saga}
        slot={detail.slot}
      />
    </section>
  )
}

/**
 * The words of the stage: the meta line, outside the veil, then the name,
 * the chips and the sentence, inside it.
 */
function StageText({
  peek,
  saga,
  slot,
}: {
  peek: (handle: string) => Promise<FruitView>
  saga: null | string
  slot: Slot<FruitView>
}): ReactElement {
  const t = useSeriesOnlyT('one-piece')
  const threshold = onlyUnder(useThreshold('one-piece'), 'one-piece')
  const gate = slot.open ? slot.record : slot.covered

  return (
    <div {...stylex.props(styles.words)}>
      <p {...stylex.props(styles.meta)}>
        <span {...stylex.props(styles.kind)}>{t('kind.fruit')}</span>
        <span {...stylex.props(styles.episode)}>
          {threshold('fruit.opensAt', gate)}
        </span>
      </p>

      <SpoilerVeil
        lead
        peek={peek}
        placeholder={
          <>
            <h1 {...stylex.props(styles.name)}>{t('fruit.foggedName')}</h1>
            <p {...stylex.props(styles.summary)}>
              {threshold('fruit.foggedDescription', gate)}
            </p>
          </>
        }
        slot={slot}
      >
        {(record) => {
          return (
            <StageWords
              record={record}
              saga={saga}
            />
          )
        }}
      </SpoilerVeil>
    </div>
  )
}

/** The name, the kind and the saga as chips, and the sentence. */
function StageWords({
  record,
  saga,
}: {
  record: FruitView
  saga: null | string
}): ReactElement {
  const t = useSeriesOnlyT('one-piece')

  return (
    <>
      <h1 {...stylex.props(styles.name, morphPart('fruit', record.id, 'name'))}>
        {record.name}
      </h1>
      <ul {...stylex.props(styles.chips)}>
        <li {...stylex.props(styles.chip)}>
          {t('fruit.form')}
          {' · '}
          {t(FORM_KEY[record.form])}
        </li>
        {saga === null ? null : (
          <li {...stylex.props(styles.chip, styles.sagaChip)}>{saga}</li>
        )}
      </ul>
      <p {...stylex.props(styles.summary)}>{record.summary}</p>
    </>
  )
}
