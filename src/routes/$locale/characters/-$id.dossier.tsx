/**
 * The dossier diptych of the character page: the crest, and everything the
 * fog decides beside it.
 *
 * A sibling of the route module rather than a shared component because it is
 * only ever this page's first band; the leading `-` keeps the file out of the
 * generated route tree.
 */
import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { CharacterCrest } from '~/components/CharacterCrest'
import { CharacterFacts } from '~/components/CharacterFacts'
import { SpoilerVeil } from '~/components/SpoilerVeil'
import { useLocale } from '~/i18n/LocaleContext'
import type { TranslationKey } from '~/i18n/types'
import { useThreshold } from '~/lib/progress/BookmarkContext'
import type { CharacterDetail, EntityKind, Slot } from '~/lib/view/records'
import { settleStyles } from '~/styles/settle'

import { styles } from './-$id.styles'

const KIND_KEY: Readonly<Record<EntityKind, TranslationKey>> = {
  arc: 'kind.arc',
  character: 'kind.character',
  place: 'kind.place',
  ship: 'kind.ship',
  fruit: 'kind.fruit',
}

// The three bands in DOM order, as the page counts them.
const DOSSIER_BAND = 0

/** The open half of the dossier: the record, with its summary. */
export type DossierRecord =
  CharacterDetail['slot'] extends Slot<infer T> ? T : never

/**
 * The crest beside the dossier: the page's first diptych.
 *
 * The two halves are veiled separately but on the same slot, because a
 * covered page must carry neither the drawing nor the words in its HTML –
 * blurring either one would leave the answer in the page source.
 */
export function DossierDiptych({
  detail,
  peek,
}: {
  readonly detail: CharacterDetail
  readonly peek: (handle: string) => Promise<DossierRecord>
}): ReactElement {
  return (
    <section
      {...stylex.props(
        styles.diptych,
        settleStyles.band,
        settleStyles.at(DOSSIER_BAND),
      )}
    >
      <CrestPlate
        peek={peek}
        slot={detail.slot}
      />
      <DossierColumn
        detail={detail}
        peek={peek}
      />
    </section>
  )
}

/** The seal, framed. Under fog it is drawn empty rather than blurred. */
function CrestPlate({
  slot,
  peek,
}: {
  readonly peek: (handle: string) => Promise<DossierRecord>
  readonly slot: CharacterDetail['slot']
}): ReactElement {
  return (
    <SpoilerVeil
      peek={peek}
      // A bare seal under fog: the drawing and its colour stay out of the
      // served HTML along with the name.
      placeholder={
        <div {...stylex.props(styles.plate)}>
          <CharacterCrest />
        </div>
      }
      slot={slot}
      strength="media"
    >
      {(record) => {
        return (
          <div {...stylex.props(styles.plate)}>
            <CharacterCrest visual={record.visual} />
          </div>
        )
      }}
    </SpoilerVeil>
  )
}

/**
 * The words half: the kind and the threshold in mono, then everything the
 * fog decides.
 *
 * The meta line sits outside the veil on purpose – "character, episode 130"
 * is the promise the page makes to a reader who has not got there yet, and
 * covering it would leave them with nothing at all.
 */
function DossierColumn({
  detail,
  peek,
}: {
  readonly detail: CharacterDetail
  readonly peek: (handle: string) => Promise<DossierRecord>
}): ReactElement {
  const { t } = useLocale()
  const threshold = useThreshold()
  const filed = detail.slot.open ? detail.slot.record : detail.slot.covered

  return (
    <div {...stylex.props(styles.dossier)}>
      <p {...stylex.props(styles.meta)}>
        <span {...stylex.props(styles.kind)}>{t(KIND_KEY[filed.kind])}</span>
        <span {...stylex.props(styles.episode)}>
          {threshold('character.opensAt', filed)}
        </span>
      </p>

      <SpoilerVeil
        peek={peek}
        placeholder={
          <div {...stylex.props(styles.words)}>
            <h1 {...stylex.props(styles.name)}>{t('character.foggedName')}</h1>
            <p {...stylex.props(styles.summary)}>
              {threshold('character.foggedDescription', filed)}
            </p>
          </div>
        }
        slot={detail.slot}
      >
        {(record) => {
          return (
            <DossierWords
              detail={detail}
              record={record}
            />
          )
        }}
      </SpoilerVeil>
    </div>
  )
}

/** The name, the role, the sentence, the facts and the log entry. */
function DossierWords({
  detail,
  record,
}: {
  readonly detail: CharacterDetail
  readonly record: DossierRecord
}): ReactElement {
  return (
    <div {...stylex.props(styles.words)}>
      <h1 {...stylex.props(styles.name)}>{record.name}</h1>
      {record.role === undefined ? null : (
        <p {...stylex.props(styles.role)}>{record.role}</p>
      )}
      <p {...stylex.props(styles.summary)}>{record.summary}</p>
      <CharacterFacts facts={detail.facts} />
      {detail.log === null ? null : (
        <p {...stylex.props(styles.entry)}>{detail.log}</p>
      )}
    </div>
  )
}
