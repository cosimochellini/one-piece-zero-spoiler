/**
 * The bands under a fruit's stage.
 *
 * Siblings of the route module rather than shared components, because they
 * are only ever this page; the leading `-` keeps the file out of the
 * generated route tree.
 */
import * as stylex from '@stylexjs/stylex'
import { type ReactElement, type ReactNode, Suspense, use } from 'react'

import { CharacterCard } from '~/components/CharacterCard'
import { CharacterCardList } from '~/components/CharacterGrid'
import { FruitRail } from '~/components/FruitRail'
import { useLocale } from '~/i18n/LocaleContext'
import type { TranslationKey } from '~/i18n/types'
import type {
  CharacterView,
  FruitEatersView,
  FruitView,
  Slot,
} from '~/lib/view/records'

import { styles } from './-$id.styles'

/** The three lines a streamed band says: its title, its lede, and its wait. */
interface BandWords {
  lede: TranslationKey
  loading: TranslationKey
  title: TranslationKey
}

const EATERS_WORDS: BandWords = {
  lede: 'fruit.eatersLede',
  loading: 'fruit.eatersLoading',
  title: 'fruit.eatersTitle',
}

const KIN_WORDS: BandWords = {
  lede: 'fruit.siblingsLede',
  loading: 'fruit.siblingsLoading',
  title: 'fruit.siblingsTitle',
}

/**
 * The eaters, or the promise of them.
 *
 * The loader streams this band, so what arrives is a promise; a test hands
 * the value itself, the way the signal book's shelves already do, because a
 * promise handed to `use()` suspends even when it has already resolved.
 */
export type EatersSource = FruitEatersView | Promise<FruitEatersView>

/** The rail of the same kind, or the promise of it. Same reason. */
export type KinSource = Promise<Slot<FruitView>[]> | Slot<FruitView>[]

/** Who the dossiers say ate it, each character under its own fog. */
export function EatersBand({
  eaters,
  peek,
}: {
  eaters: EatersSource
  peek: (handle: string) => Promise<CharacterView>
}): ReactElement {
  return (
    <StreamedBand
      id="eaters"
      words={EATERS_WORDS}
    >
      <Eaters
        eaters={eaters}
        peek={peek}
      />
    </StreamedBand>
  )
}

/** The eaters once they arrive. `use` has to sit inside the boundary. */
function Eaters({
  eaters,
  peek,
}: {
  eaters: EatersSource
  peek: (handle: string) => Promise<CharacterView>
}): ReactElement {
  const { t } = useLocale()
  const answer = eaters instanceof Promise ? use(eaters) : eaters

  if (answer.eaters.length === 0) {
    return <p {...stylex.props(styles.lede)}>{t('fruit.eatersNone')}</p>
  }

  return (
    <CharacterCardList>
      {answer.eaters.map((slot) => {
        return (
          <CharacterCard
            key={
              slot.open ?
                `open-${slot.record.id}`
              : `fog-${slot.covered.handle}`
            }
            peek={peek}
            slot={slot}
          />
        )
      })}
    </CharacterCardList>
  )
}

/** The other fruits of the same kind, filed nearest this one. */
export function KinBand({
  peek,
  siblings,
}: {
  peek: (handle: string) => Promise<FruitView>
  siblings: KinSource
}): ReactElement {
  return (
    <StreamedBand
      id="siblings"
      words={KIN_WORDS}
    >
      <Kin
        peek={peek}
        siblings={siblings}
      />
    </StreamedBand>
  )
}

/** The rail once it arrives, or the sentence that stands where it would. */
function Kin({
  peek,
  siblings,
}: {
  peek: (handle: string) => Promise<FruitView>
  siblings: KinSource
}): ReactElement {
  const { t } = useLocale()
  const rail = siblings instanceof Promise ? use(siblings) : siblings

  // Every plate holds dozens today, so this is a sentence nobody reads. It is
  // here because the band above it already says what an empty answer looks
  // like, and a heading with an empty list under it says nothing at all.
  if (rail.length === 0) {
    return <p {...stylex.props(styles.lede)}>{t('fruit.siblingsNone')}</p>
  }

  return (
    <FruitRail
      fruits={rail}
      peek={peek}
    />
  )
}

/**
 * The open fruits of the same saga nearest this one, or nothing at all when
 * the server sends none (a covered fruit, or a saga with fewer than two
 * others open): a heading over a lonely tile says less than no band.
 */
export function SagaBand({
  peek,
  rail,
}: {
  peek: (handle: string) => Promise<FruitView>
  rail: Slot<FruitView>[]
}): null | ReactElement {
  const { t } = useLocale()
  if (rail.length === 0) {
    return null
  }

  return (
    <Band
      id="saga"
      lede={t('fruit.sagaLede')}
      title={t('fruit.sagaTitle')}
    >
      <FruitRail
        fruits={rail}
        peek={peek}
      />
    </Band>
  )
}

/**
 * A band whose content the loader streams: the heading and the lede at once,
 * and what fills it inside its own boundary, so the plate above never waits.
 */
function StreamedBand({
  children,
  id,
  words,
}: {
  children: ReactNode
  id: string
  words: BandWords
}): ReactElement {
  const { t } = useLocale()

  return (
    <Band
      id={id}
      lede={t(words.lede)}
      title={t(words.title)}
    >
      <Suspense fallback={<Pending words={words.loading} />}>
        {children}
      </Suspense>
    </Band>
  )
}

/** A band under the stage: its heading, its lede and a hairline over both. */
export function Band({
  children,
  id,
  lede,
  title,
}: {
  children: ReactNode
  id: string
  lede: string
  title: string
}): ReactElement {
  return (
    <section
      aria-labelledby={id}
      {...stylex.props(styles.band)}
    >
      <div {...stylex.props(styles.bandHead)}>
        <h2
          id={id}
          {...stylex.props(styles.sectionTitle)}
        >
          {title}
        </h2>
        <p {...stylex.props(styles.lede)}>{lede}</p>
      </div>
      {children}
    </section>
  )
}

/** What a band says while what fills it is still on its way. */
function Pending({ words }: { words: TranslationKey }): ReactElement {
  const { t } = useLocale()

  return (
    <p
      aria-busy="true"
      {...stylex.props(styles.lede)}
    >
      {t(words)}
    </p>
  )
}
