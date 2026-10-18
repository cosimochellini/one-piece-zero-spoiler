/**
 * The entry diptych of a place's page: the plate, and everything the fog
 * decides beside it. Laid out as a character's dossier is, in the same
 * sheet, because the two pages are one macrostructure.
 *
 * A sibling of the route module rather than a shared component because it is
 * only ever this page's first band; the leading `-` keeps the file out of the
 * generated route tree.
 */
import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { FiledHere } from '~/components/FiledHere'
import { PortFacts } from '~/components/PortFacts'
import { OpenPortPlate, PortPlate } from '~/components/PortPlate'
import { SpoilerVeil } from '~/components/SpoilerVeil'
import { useLocale } from '~/i18n/LocaleContext'
import { useThreshold } from '~/lib/progress/BookmarkContext'
import type { PlaceDetail } from '~/lib/view/places'
import type { PortView, RecordView } from '~/lib/view/records'
import { styles } from '~/routes/$locale/characters/-$id.styles'

/** What the band is given: the page, and how to lift the fog on a record. */
export interface EntryProps {
  detail: PlaceDetail
  peek: (handle: string) => Promise<PortView>
  peekRecord: (handle: string) => Promise<RecordView>
}

/**
 * The plate beside the entry. The two halves are veiled separately but on
 * the same slot, because a covered page must carry neither the drawing nor
 * the words in its HTML: blurring either one would leave the answer in the
 * page source.
 */
export function EntryDiptych({
  detail,
  peek,
  peekRecord,
}: EntryProps): ReactElement {
  return (
    <section {...stylex.props(styles.diptych)}>
      <SpoilerVeil
        peek={peek}
        // A bare plate under fog: the drawing and its colour stay out of the
        // served HTML along with the name.
        placeholder={
          <div {...stylex.props(styles.plate)}>
            <PortPlate />
          </div>
        }
        slot={detail.slot}
        strength="media"
      >
        {(port) => {
          return (
            <div {...stylex.props(styles.plate)}>
              <OpenPortPlate port={port} />
            </div>
          )
        }}
      </SpoilerVeil>
      <EntryColumn
        detail={detail}
        peek={peek}
        peekRecord={peekRecord}
      />
    </section>
  )
}

/**
 * The words half: the kind and the episode in mono, then everything the fog
 * decides. The meta line sits outside the veil on purpose: "place, episode
 * 336" is the promise the page makes to a reader who has not got there yet.
 */
function EntryColumn({ detail, peek, peekRecord }: EntryProps): ReactElement {
  const threshold = useThreshold()
  const { t } = useLocale()
  const { slot } = detail
  const gate = slot.open ? slot.record : slot.covered

  return (
    <div {...stylex.props(styles.dossier)}>
      <p {...stylex.props(styles.meta)}>
        <span {...stylex.props(styles.kind)}>{t('kind.place')}</span>
        <span {...stylex.props(styles.episode)}>
          {threshold('places.firstSeen', gate)}
        </span>
      </p>

      <SpoilerVeil
        peek={peek}
        placeholder={
          <div {...stylex.props(styles.words)}>
            <h1 {...stylex.props(styles.name)}>{t('places.foggedName')}</h1>
            <p {...stylex.props(styles.summary)}>
              {threshold('places.foggedDescription', gate)}
            </p>
          </div>
        }
        slot={detail.slot}
      >
        {(port) => {
          return (
            <div {...stylex.props(styles.words)}>
              <h1 {...stylex.props(styles.name)}>{port.name}</h1>
              <p {...stylex.props(styles.summary)}>{port.summary}</p>
              {port.dossier === null ? null : (
                <>
                  <PortFacts dossier={port.dossier} />
                  <p {...stylex.props(styles.entry)}>{port.dossier.log}</p>
                  <FiledHere
                    filed={port.dossier.filedHere}
                    peekRecord={peekRecord}
                    title={t('places.filedHere')}
                  />
                </>
              )}
            </div>
          )
        }}
      </SpoilerVeil>
    </div>
  )
}
