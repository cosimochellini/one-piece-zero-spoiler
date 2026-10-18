/**
 * The entry diptych of a place's or a ship's page: the plate, and
 * everything the fog decides beside it. Laid out as a character's dossier
 * is, in the same sheet, because the pages are one macrostructure.
 *
 * A sibling of the route module rather than a shared component because it is
 * only ever this page's first band; the leading `-` keeps the file out of the
 * generated route tree.
 */
import * as stylex from '@stylexjs/stylex'
import type { ComponentType, ReactElement, ReactNode } from 'react'

import { FiledHere } from '~/components/FiledHere'
import { PortFacts, ShipFacts } from '~/components/PortFacts'
import { OpenPortPlate, PortPlate } from '~/components/PortPlate'
import { SpoilerVeil } from '~/components/SpoilerVeil'
import { useLocale } from '~/i18n/LocaleContext'
import { useThreshold } from '~/lib/progress/BookmarkContext'
import type { PlaceDetail } from '~/lib/view/places'
import type { PortView, RecordView, ShipView, Slot } from '~/lib/view/records'
import { styles } from '~/routes/$locale/characters/-$id.styles'

/** The words a place's entry and a ship's differ by. */
const WORDS = {
  place: {
    kind: 'kind.place',
    gate: 'places.firstSeen',
    foggedName: 'places.foggedName',
    foggedDescription: 'places.foggedDescription',
  },
  // "Episode 324" rather than "first seen": the Sunny is unveiled three
  // episodes before her name, and her entry opens at the name.
  ship: {
    kind: 'kind.ship',
    gate: 'chart.opensAt',
    foggedName: 'ship.foggedName',
    foggedDescription: 'ship.foggedDescription',
  },
} as const

/** A place's or a ship's record, as the entry draws it. */
export type Entry = RecordView & { summary: string }

/** How to lift the fog on a record the entry names. */
export type PeekRecord = (handle: string) => Promise<RecordView>

/** What the entry's body is given once the record is open. */
export interface BodyProps<T> {
  peekRecord: PeekRecord
  record: T
}

/** What the band is given: the record, how to lift its fog, and its body. */
export interface EntryProps<T extends Entry> {
  /**
   * What the page adds under the body once the record is open: a place's
   * natives. Never drawn under fog, so it adds nothing to a covered page.
   */
  after?: ReactNode
  /** Its facts, its log entry and the records it names, once open. */
  Body: ComponentType<BodyProps<T>>
  kind: keyof typeof WORDS
  peek: (handle: string) => Promise<T>
  peekRecord: PeekRecord
  slot: Slot<T>
}

/**
 * The plate beside the entry. The two halves are veiled separately but on
 * the same slot, because a covered page must carry neither the drawing nor
 * the words in its HTML: blurring either one would leave the answer in the
 * page source.
 */
export function EntryDiptych<T extends Entry>(
  props: EntryProps<T>,
): ReactElement {
  return (
    <section {...stylex.props(styles.diptych)}>
      <SpoilerVeil
        peek={props.peek}
        // A bare plate under fog: the drawing and its colour stay out of the
        // served HTML along with the name.
        placeholder={
          <div {...stylex.props(styles.plate)}>
            <PortPlate />
          </div>
        }
        slot={props.slot}
        strength="media"
      >
        {(record) => {
          return (
            <div {...stylex.props(styles.plate)}>
              <OpenPortPlate port={record} />
            </div>
          )
        }}
      </SpoilerVeil>
      <EntryColumn {...props} />
    </section>
  )
}

/**
 * The words half: the kind and the episode in mono, then everything the fog
 * decides. The meta line sits outside the veil on purpose: "place, episode
 * 336" is the promise the page makes to a reader who has not got there yet.
 */
function EntryColumn<T extends Entry>({
  after,
  Body,
  kind,
  peek,
  peekRecord,
  slot,
}: EntryProps<T>): ReactElement {
  const threshold = useThreshold()
  const { t } = useLocale()
  const words = WORDS[kind]
  const gate = slot.open ? slot.record : slot.covered

  return (
    <div {...stylex.props(styles.dossier)}>
      <p {...stylex.props(styles.meta)}>
        <span {...stylex.props(styles.kind)}>{t(words.kind)}</span>
        <span {...stylex.props(styles.episode)}>
          {threshold(words.gate, gate)}
        </span>
      </p>

      <SpoilerVeil
        peek={peek}
        placeholder={
          <div {...stylex.props(styles.words)}>
            <h1 {...stylex.props(styles.name)}>{t(words.foggedName)}</h1>
            <p {...stylex.props(styles.summary)}>
              {threshold(words.foggedDescription, gate)}
            </p>
          </div>
        }
        slot={slot}
      >
        {(record) => {
          return (
            <div {...stylex.props(styles.words)}>
              <h1 {...stylex.props(styles.name)}>{record.name}</h1>
              <p {...stylex.props(styles.summary)}>{record.summary}</p>
              <Body
                peekRecord={peekRecord}
                record={record}
              />
              {after}
            </div>
          )
        }}
      </SpoilerVeil>
    </div>
  )
}

/** A port's facts, its log entry and the records found there. */
function PortBody({
  peekRecord,
  record: port,
}: BodyProps<PortView>): null | ReactElement {
  const { t } = useLocale()

  return port.dossier === null ?
      null
    : <>
        <PortFacts dossier={port.dossier} />
        <p {...stylex.props(styles.entry)}>{port.dossier.log}</p>
        <FiledHere
          filed={port.dossier.filedHere}
          peekRecord={peekRecord}
          title={t('places.filedHere')}
        />
      </>
}

/**
 * A place's entry: the diptych with its facts, its log entry and the records
 * found there, then the characters who come from it.
 */
export function PlaceEntry({
  detail,
  peek,
  peekRecord,
}: {
  detail: PlaceDetail
  peek: (handle: string) => Promise<PortView>
  peekRecord: PeekRecord
}): ReactElement {
  return (
    <EntryDiptych
      after={
        <Natives
          natives={detail.natives}
          peekRecord={peekRecord}
        />
      }
      Body={PortBody}
      kind="place"
      peek={peek}
      peekRecord={peekRecord}
      slot={detail.slot}
    />
  )
}

/**
 * The characters who come from a place, under the records found there. Only
 * those the reader has reached are sent, so each is open and none is
 * counted; nothing is drawn while there are none.
 */
function Natives({
  natives,
  peekRecord,
}: {
  natives: RecordView[]
  peekRecord: PeekRecord
}): null | ReactElement {
  const { t } = useLocale()

  return (
    <FiledHere
      filed={natives.map((record) => ({ open: true, record }))}
      peekRecord={peekRecord}
      title={t('place.nativesTitle')}
    />
  )
}

/**
 * A ship's facts, her log entry and the places she reaches. Only the places
 * the reader has reached are sent, so each is open and none is counted.
 */
export function ShipBody({
  peekRecord,
  record: ship,
}: BodyProps<ShipView>): ReactElement {
  const { t } = useLocale()

  return (
    <>
      <ShipFacts entry={ship.dossier} />
      <p {...stylex.props(styles.entry)}>{ship.dossier.log}</p>
      <FiledHere
        filed={ship.dossier.ports.map((record) => ({ open: true, record }))}
        peekRecord={peekRecord}
        title={t('ships.ports')}
      />
    </>
  )
}
