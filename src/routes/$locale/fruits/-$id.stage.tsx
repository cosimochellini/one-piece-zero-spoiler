/**
 * The top of a fruit's page: the stage, and the way to the fruit before and
 * after it.
 *
 * Siblings of the route module, like the bands under them; the leading `-`
 * keeps the file out of the generated route tree.
 */
import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import { type ReactElement, useState } from 'react'

import { DrawInContext, tintOf } from '~/components/drawing'
import { FogTile } from '~/components/FogTile'
import { OpenArt } from '~/components/FruitArt'
import { FruitFrame } from '~/components/FruitFrame'
import { SpoilerVeil } from '~/components/SpoilerVeil'
import { useLocale } from '~/i18n/LocaleContext'
import type { TranslationKey } from '~/i18n/types'
import { useThreshold } from '~/lib/progress/BookmarkContext'
import type {
  FruitDetail,
  FruitForm,
  FruitView,
  Slot,
} from '~/lib/view/records'
import { morphPart, travelWith } from '~/styles/morph'

import { styles } from './-$id.styles'
import { type Side, useTurning } from './-$id.turn'

const SIDE_KEY: Record<Side, TranslationKey> = {
  next: 'fruit.next',
  previous: 'fruit.previous',
}

const FORM_KEY: Record<FruitForm, TranslationKey> = {
  logia: 'fruitForm.logia',
  paramecia: 'fruitForm.paramecia',
  zoan: 'fruitForm.zoan',
}

/**
 * The stage: the drawing large in a glow of its own tint, drawing itself in
 * on arrival, then the name at display size, its kind and its saga, and the
 * sentence. A swipe across it, or an arrow key, turns to the fruit before or
 * after.
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
  const swipe = useTurning(detail)

  return (
    <section
      {...swipe}
      {...stylex.props(styles.stage)}
    >
      <div {...stylex.props(styles.drawing)}>
        <SpoilerVeil
          density="block"
          peek={peek}
          placeholder={<FruitFrame />}
          slot={detail.slot}
          strength="media"
        >
          {(record) => {
            return (
              <StageArt
                key={record.id}
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
  const { t } = useLocale()
  const threshold = useThreshold()
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

/**
 * The drawing, in a glow of its tint, drawn in once as it arrives. The pen
 * scales its line with the box while it draws (`ChartArt`), and the stage is
 * three times a tile, so once the strokes are down the drawing goes back to
 * the 2px line every drawing keeps. Every stroke shares one delay and one
 * duration (`ChartArt`), so the first to finish is the last. With reduced
 * motion nothing draws and nothing changes.
 */
function StageArt({ record }: { record: FruitView }): ReactElement {
  const [drawing, setDrawing] = useState(true)

  return (
    <div
      onAnimationEnd={(event) => {
        if (event.target instanceof SVGPathElement) {
          setDrawing(false)
        }
      }}
      {...stylex.props(styles.glow(tintOf(record.visual.tint)))}
    >
      <DrawInContext value={drawing}>
        <OpenArt
          always
          glow
          record={record}
        />
      </DrawInContext>
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
  const { t } = useLocale()

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

/**
 * The fruit before this one and the fruit after it, in the reader's order.
 * An open neighbour is a small drawing and its name; a covered one is a
 * small fog tile that names nothing, and lifted by hand it shows the same
 * link. Nothing past either end is drawn.
 */
export function TurnBand({
  detail,
  peek,
}: {
  detail: FruitDetail
  peek: (handle: string) => Promise<FruitView>
}): null | ReactElement {
  const { t } = useLocale()
  if (detail.previous === null && detail.next === null) {
    return null
  }

  return (
    <nav
      aria-label={t('fruit.turn')}
      {...stylex.props(styles.turn)}
    >
      <TurnSide
        peek={peek}
        side="previous"
        slot={detail.previous}
      />
      <TurnSide
        peek={peek}
        side="next"
        slot={detail.next}
      />
    </nav>
  )
}

/** One side of the turn: the neighbour, its fog, or an empty cell. */
function TurnSide({
  peek,
  side,
  slot,
}: {
  peek: (handle: string) => Promise<FruitView>
  side: Side
  slot: null | Slot<FruitView>
}): ReactElement {
  const { t } = useLocale()
  const threshold = useThreshold()

  if (slot === null) {
    return <span />
  }

  return (
    <div {...stylex.props(styles.side, side === 'next' && styles.nextSide)}>
      {slot.open ?
        <TurnLink
          record={slot.record}
          side={side}
        />
      : <FogTile
          covered={slot.covered}
          lines={[t(SIDE_KEY[side]), threshold('fruit.opensAt', slot.covered)]}
          peek={peek}
          phase={side === 'next' ? 1 : 0}
        >
          {(record) => {
            return (
              <TurnLink
                record={record}
                side={side}
              />
            )
          }}
        </FogTile>
      }
    </div>
  )
}

/** An open neighbour: its drawing, which way it lies, and its name. */
function TurnLink({
  record,
  side,
}: {
  record: FruitView
  side: Side
}): ReactElement {
  const { locale, t } = useLocale()

  return (
    <Link
      onClick={() => {
        travelWith('fruit', record.id)
      }}
      params={{ locale, id: record.id }}
      rel={side === 'next' ? 'next' : 'prev'}
      to="/$locale/fruits/$id"
      {...stylex.props(styles.turnLink)}
    >
      <OpenArt
        always={false}
        record={record}
      />
      <span {...stylex.props(styles.turnLabel)}>
        {side === 'previous' ?
          <span aria-hidden="true">← </span>
        : null}
        {t(SIDE_KEY[side])}
        {side === 'next' ?
          <span aria-hidden="true"> →</span>
        : null}
      </span>
      <span {...stylex.props(styles.turnName)}>{record.name}</span>
    </Link>
  )
}
