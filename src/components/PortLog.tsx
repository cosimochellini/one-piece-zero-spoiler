/* Hallmark · pre-emit critique: P5 H4 E4 S5 R4 V5 */
/* Hallmark · genre: atmospheric · macrostructure: Narrative Workflow · theme:
 *   Sea Chart (locked) · enrichment: Tier B hand-built SVG (PortPlate chart
 *   frames, five new place drawings) · nav: N9 (shared) · footer: Ft4 (shared)
 * · idea: "a ship's log — every port in the order the ship put in, the
 *   reader's episode a horizon line down the spine"
 * · differs from the previous build (Catalogue + Split Studio) on
 *   macrostructure; theme is the project's locked system and does not rotate */
import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { styles } from '~/components/PortLog.styles'
import { PortPlate } from '~/components/PortPlate'
import { RecordTile } from '~/components/RecordTile'
import { SpoilerVeil } from '~/components/SpoilerVeil'
import { getEntity } from '~/data/entities'
import { dossierOf, type PlaceDossier } from '~/data/places'
import type { Entity } from '~/data/types'
import { useLocale } from '~/i18n/LocaleContext'
import { useThreshold } from '~/lib/progress/BookmarkContext'
import { type Bookmark, serialiseBookmark } from '~/lib/progress/episode'
import { isRevealed } from '~/lib/progress/spoiler'
import { describeBookmark } from '~/lib/progress/threshold'

// Ports are numbered 01, 02, …: two digits so the markers on the spine are the
// same width all the way down, and the rail never shifts under them.
const NUMBER_WIDTH = 2

/** What the log needs to draw one port and to place the horizon among them. */
export type PortLogProps = {
  /** The places, in the order the ship reaches them. */
  readonly bookmark: Bookmark
  readonly entries: readonly Entity[]
}

/**
 * The ship's log (Hallmark macrostructure 14, Narrative Workflow).
 *
 * Every place is a numbered port of call down one spine, in the order the
 * ship puts in at them. Each entry is a plate beside a dossier: the name,
 * the sentence, four facts (sea, what it is, arc, landmark), the log entry
 * proper, and the records the archive files at that port. The reader's
 * episode is the horizon: the spine is gold above it and dashed below it,
 * and every port below it is under fog with its number and episode showing,
 * because "the sixth port opens at episode 144" is the promise and not the
 * spoiler.
 *
 * Because the entries arrive in threshold order and `isRevealed` is monotone,
 * the open ports are a prefix, and the horizon is one element between two
 * runs, the same construction as the route on the landing page.
 */
export function PortLog({ entries, bookmark }: PortLogProps): ReactElement {
  const open = entries.filter((entry) => isRevealed(entry, bookmark))
  const covered = entries.filter((entry) => !isRevealed(entry, bookmark))

  return (
    <ol {...stylex.props(styles.log)}>
      {open.map((entry, index) => {
        return (
          <Port
            key={entry.id}
            bookmark={bookmark}
            entry={entry}
            index={index}
            open
            total={entries.length}
          />
        )
      })}

      <Horizon
        key={bookmark === null ? 'unset' : serialiseBookmark(bookmark)}
        bookmark={bookmark}
      />

      {covered.map((entry, index) => {
        return (
          <Port
            key={entry.id}
            bookmark={bookmark}
            entry={entry}
            index={open.length + index}
            open={false}
            total={entries.length}
          />
        )
      })}
    </ol>
  )
}

type PortProps = {
  readonly entry: Entity
  /** Zero-based position among the places; the page prints it plus one. */
  readonly bookmark: Bookmark
  readonly index: number
  readonly open: boolean
  readonly total: number
}

/**
 * One port of call: the rail on the left, then the line that says which stage
 * this is and when it opens, then the spread under whatever fog it is owed.
 */
function Port({
  entry,
  index,
  total,
  bookmark,
  open,
}: PortProps): ReactElement {
  const { t } = useLocale()
  const threshold = useThreshold()

  return (
    <li
      // The anchor a record tile points at. Set only once the port is open:
      // an id spells the name a covered entry is meant to hide.
      id={open ? entry.id : undefined}
      {...stylex.props(styles.row)}
    >
      <Rail
        number={String(index + 1).padStart(NUMBER_WIDTH, '0')}
        open={open}
      />

      <div {...stylex.props(styles.body)}>
        <p {...stylex.props(styles.stage)}>
          <span
            {...stylex.props(
              styles.stageLabel,
              open ? styles.stageOpen : styles.stageCovered,
            )}
          >
            {t('places.stage', { index: index + 1, total })}
          </span>
          <span {...stylex.props(styles.stageEpisode)}>
            {threshold('places.firstSeen', entry)}
          </span>
        </p>

        <SpoilerVeil
          gated={entry}
          placeholder={<FoggedSpread entry={entry} />}
          revealed={open}
          strength="media"
        >
          <Spread
            bookmark={bookmark}
            entry={entry}
          />
        </SpoilerVeil>
      </div>
    </li>
  )
}

/**
 * The spine through this port with its number on it: gold and solid above the
 * horizon, hairline and dashed below. Drawn for the eye alone, so the whole
 * column is hidden from the accessibility tree — the stage line beside it says
 * the same thing in words.
 */
function Rail({
  number,
  open,
}: {
  readonly number: string
  readonly open: boolean
}): ReactElement {
  // One object for both stretches: the spine above the marker and the spine
  // below it are the same line, and nothing may ever draw them differently.
  const spine = stylex.props(
    styles.spine,
    open ? styles.spineOpen : styles.spineCovered,
  )

  return (
    <div
      aria-hidden="true"
      {...stylex.props(styles.rail)}
    >
      <span {...spine} />
      <span
        {...stylex.props(
          styles.marker,
          open ? styles.markerOpen : styles.markerCovered,
        )}
      >
        {number}
      </span>
      <span {...spine} />
    </div>
  )
}

/**
 * What stands in for a port the reader has not reached. It is the same shape
 * as the open spread and carries none of its content: the served HTML has no
 * name, no drawing and no colour, only the bare plate and a generic line.
 */
function FoggedSpread({ entry }: { readonly entry: Entity }): ReactElement {
  const { t } = useLocale()
  const threshold = useThreshold()

  return (
    <div {...stylex.props(styles.spread)}>
      <div {...stylex.props(styles.plate)}>
        <PortPlate />
      </div>
      <div {...stylex.props(styles.dossier)}>
        <h2 {...stylex.props(styles.name)}>{t('places.foggedName')}</h2>
        <p {...stylex.props(styles.summary)}>
          {threshold('places.foggedDescription', entry)}
        </p>
      </div>
    </div>
  )
}

/** An open port: the plate beside the dossier. */
function Spread({
  entry,
  bookmark,
}: {
  readonly bookmark: Bookmark
  readonly entry: Entity
}): ReactElement {
  const { locale } = useLocale()
  const dossier = dossierOf(entry)

  return (
    <div {...stylex.props(styles.spread)}>
      <div {...stylex.props(styles.plate)}>
        <PortPlate visual={entry.visual} />
      </div>

      <div {...stylex.props(styles.dossier)}>
        <h2 {...stylex.props(styles.name)}>{entry.name[locale]}</h2>
        <p {...stylex.props(styles.summary)}>{entry.summary[locale]}</p>

        {dossier === undefined ? null : (
          <>
            <Facts dossier={dossier} />
            <p {...stylex.props(styles.entry)}>{dossier.log[locale]}</p>
            <FiledHere
              bookmark={bookmark}
              ids={dossier.filedHere}
            />
          </>
        )}
      </div>
    </div>
  )
}

/**
 * The four facts, as a definition list. The arc is named directly rather
 * than veiled: an arc opens no later than any place filed under it (the
 * data test holds that), so an open place always has an open arc.
 */
function Facts({ dossier }: { readonly dossier: PlaceDossier }): ReactElement {
  const { locale, t } = useLocale()
  const arc = getEntity(dossier.arc)

  return (
    <dl {...stylex.props(styles.facts)}>
      <Fact
        label={t('places.sea')}
        value={t(`sea.${dossier.sea}`)}
      />
      <Fact
        label={t('places.form')}
        value={t(`form.${dossier.form}`)}
      />
      {arc === undefined ? null : (
        <Fact
          label={t('places.arc')}
          value={arc.name[locale]}
        />
      )}
      <Fact
        label={t('places.landmark')}
        value={dossier.landmark[locale]}
      />
    </dl>
  )
}

/** One row of the ledger: the term in small caps, the value beside it. */
function Fact({
  label,
  value,
}: {
  readonly label: string
  readonly value: string
}): ReactElement {
  return (
    <div {...stylex.props(styles.fact)}>
      <dt {...stylex.props(styles.factLabel)}>{label}</dt>
      <dd {...stylex.props(styles.factValue)}>{value}</dd>
    </div>
  )
}

/**
 * The records the archive files at this port. Each tile keeps its own fog:
 * a swordsman who reaches the restaurant four episodes after the crew does
 * is a covered tile beside an open one.
 */
function FiledHere({
  ids,
  bookmark,
}: {
  readonly bookmark: Bookmark
  readonly ids: readonly string[]
}): ReactElement {
  const { t } = useLocale()
  const records = ids
    .map((id) => getEntity(id))
    .filter((record): record is Entity => record !== undefined)

  return (
    <div {...stylex.props(styles.filed)}>
      <h3 {...stylex.props(styles.filedTitle)}>{t('places.filedHere')}</h3>
      {records.length === 0 ?
        <p {...stylex.props(styles.filedNone)}>{t('places.filedNone')}</p>
      : <ul {...stylex.props(styles.crew)}>
          {records.map((record) => {
            return (
              <li
                key={record.id}
                {...stylex.props(styles.crewItem)}
              >
                <RecordTile
                  bookmark={bookmark}
                  entry={record}
                />
              </li>
            )
          })}
        </ul>
      }
    </div>
  )
}

/**
 * The reader's position on the spine: a gold tick and a line across the
 * body, labelled. With no bookmark it sits above the first port and says so.
 */
function Horizon({ bookmark }: { readonly bookmark: Bookmark }): ReactElement {
  const { t } = useLocale()
  const set = bookmark !== null

  return (
    <li
      aria-current="step"
      {...stylex.props(styles.row, styles.horizonRow)}
    >
      <div
        aria-hidden="true"
        {...stylex.props(styles.rail, styles.horizonRail)}
      >
        <span {...stylex.props(styles.spine, styles.spineOpen)} />
        <span
          {...stylex.props(
            styles.tick,
            set ? styles.tickSet : styles.tickUnset,
          )}
        />
        <span {...stylex.props(styles.spine, styles.spineCovered)} />
      </div>
      <p
        {...stylex.props(
          styles.horizonLabel,
          set ? styles.horizonSet : styles.horizonUnset,
        )}
      >
        {bookmark === null ?
          t('chart.hereUnset')
        : describeBookmark(t, 'chart.hereSet', bookmark)}
      </p>
    </li>
  )
}
