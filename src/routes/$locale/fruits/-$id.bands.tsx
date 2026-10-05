/**
 * The three bands of a fruit's page.
 *
 * Siblings of the route module rather than shared components, because they
 * are only ever this page; the leading `-` keeps the file out of the
 * generated route tree.
 */
import * as stylex from '@stylexjs/stylex'
import { type ReactElement, type ReactNode, Suspense, use } from 'react'

import { CharacterCard } from '~/components/CharacterCard'
import { CharacterCardList } from '~/components/CharacterGrid'
import { FruitArt } from '~/components/FruitArt'
import { FruitRail } from '~/components/FruitRail'
import { SpoilerVeil } from '~/components/SpoilerVeil'
import { useLocale } from '~/i18n/LocaleContext'
import type { TranslationKey } from '~/i18n/types'
import { useThreshold } from '~/lib/progress/BookmarkContext'
import type {
  CharacterView,
  FruitDetail,
  FruitEatersView,
  FruitForm,
  FruitView,
  Slot,
} from '~/lib/view/records'
import { morphPart } from '~/styles/morph'

import { styles } from './-$id.styles'

const FORM_KEY: Record<FruitForm, TranslationKey> = {
  logia: 'fruitForm.logia',
  paramecia: 'fruitForm.paramecia',
  zoan: 'fruitForm.zoan',
}

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
 * The plate: the drawing beside the name, the kind, the threshold and the
 * sentence.
 *
 * The meta line sits outside the veil on purpose — "a devil fruit, episode
 * 462" is the promise the page makes to a reader who has not got there yet,
 * and covering it would leave them with nothing at all. The kind is inside
 * it, because a covered fruit's kind is the plate it was found on and the
 * sheet already says so out loud.
 */
export function PlateBand({
  detail,
  peek,
}: {
  detail: FruitDetail
  peek: (handle: string) => Promise<FruitView>
}): ReactElement {
  const { t } = useLocale()
  const threshold = useThreshold()
  const filed = detail.slot.open ? detail.slot.record : detail.slot.covered

  return (
    <section {...stylex.props(styles.plate)}>
      <div {...stylex.props(styles.drawing)}>
        <FruitArt
          density="block"
          peek={peek}
          slot={detail.slot}
        />
      </div>

      <div {...stylex.props(styles.words)}>
        <p {...stylex.props(styles.meta)}>
          <span {...stylex.props(styles.kind)}>{t('kind.fruit')}</span>
          <span {...stylex.props(styles.episode)}>
            {threshold('fruit.opensAt', filed)}
          </span>
        </p>

        <SpoilerVeil
          peek={peek}
          placeholder={
            <>
              <h1 {...stylex.props(styles.name)}>{t('fruit.foggedName')}</h1>
              <p {...stylex.props(styles.summary)}>
                {threshold('fruit.foggedDescription', filed)}
              </p>
            </>
          }
          slot={detail.slot}
        >
          {(record) => <PlateWords record={record} />}
        </SpoilerVeil>
      </div>
    </section>
  )
}

/** The name, the kind spelled out, and the sentence the archive files. */
function PlateWords({ record }: { record: FruitView }): ReactElement {
  const { t } = useLocale()

  return (
    <>
      <h1 {...stylex.props(styles.name, morphPart('fruit', record.id, 'name'))}>
        {record.name}
      </h1>
      <p {...stylex.props(styles.meta)}>
        <span {...stylex.props(styles.kind)}>
          {t('fruit.form')}
          {' · '}
          {t(FORM_KEY[record.form])}
        </span>
      </p>
      <p {...stylex.props(styles.summary)}>{record.summary}</p>
    </>
  )
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
            morph="onClick"
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
    <section
      aria-labelledby={id}
      {...stylex.props(styles.band)}
    >
      <div {...stylex.props(styles.bandHead)}>
        <h2
          id={id}
          {...stylex.props(styles.sectionTitle)}
        >
          {t(words.title)}
        </h2>
        <p {...stylex.props(styles.lede)}>{t(words.lede)}</p>
      </div>
      <Suspense fallback={<Pending words={words.loading} />}>
        {children}
      </Suspense>
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
