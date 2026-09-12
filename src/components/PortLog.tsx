/* Hallmark · pre-emit critique: P5 H4 E4 S5 R4 V5 */
/* Hallmark · genre: atmospheric · macrostructure: Narrative Workflow · theme:
 *   Sea Chart (locked) · enrichment: Tier B hand-built SVG (PortPlate chart
 *   frames, five new place drawings) · nav: N9 (shared) · footer: Ft4 (shared)
 * · idea: "a ship's log — every port in the order the ship put in, the
 *   reader's episode a horizon line down the spine"
 * · differs from the previous build (Catalogue + Split Studio) on
 *   macrostructure; theme is the project's locked system and does not rotate */
import * as stylex from '@stylexjs/stylex'

import { PortPlate } from '~/components/PortPlate'
import { RecordTile } from '~/components/RecordTile'
import { SpoilerVeil } from '~/components/SpoilerVeil'
import { getEntity } from '~/data/entities'
import { dossierOf, type PlaceDossier } from '~/data/places'
import type { Entity } from '~/data/types'
import { useLocale } from '~/i18n/LocaleContext'
import type { Progress } from '~/lib/progress/episode'
import { isRevealed } from '~/lib/progress/spoiler'
import {
  color,
  font,
  leading,
  radius,
  rule,
  space,
  text,
} from '~/styles/tokens.stylex'

export type PortLogProps = {
  /** The places, in the order the ship reaches them. */
  readonly entries: readonly Entity[]
  readonly progress: Progress
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
export function PortLog({ entries, progress }: PortLogProps) {
  const open = entries.filter((entry) => isRevealed(entry, progress))
  const covered = entries.filter((entry) => !isRevealed(entry, progress))

  return (
    <ol {...stylex.props(styles.log)}>
      {open.map((entry, index) => (
        <Port
          key={entry.id}
          entry={entry}
          index={index}
          total={entries.length}
          progress={progress}
          open
        />
      ))}

      <Horizon key={progress ?? 'unset'} progress={progress} />

      {covered.map((entry, index) => (
        <Port
          key={entry.id}
          entry={entry}
          index={open.length + index}
          total={entries.length}
          progress={progress}
          open={false}
        />
      ))}
    </ol>
  )
}

type PortProps = {
  readonly entry: Entity
  /** Zero-based position among the places; the page prints it plus one. */
  readonly index: number
  readonly total: number
  readonly progress: Progress
  readonly open: boolean
}

function Port({ entry, index, total, progress, open }: PortProps) {
  const { t } = useLocale()
  const number = String(index + 1).padStart(2, '0')

  return (
    <li
      // The anchor a record tile points at. Set only once the port is open:
      // an id spells the name a covered entry is meant to hide.
      id={open ? entry.id : undefined}
      {...stylex.props(styles.row)}
    >
      <div aria-hidden="true" {...stylex.props(styles.rail)}>
        <span
          {...stylex.props(
            styles.spine,
            open ? styles.spineOpen : styles.spineCovered,
          )}
        />
        <span
          {...stylex.props(
            styles.marker,
            open ? styles.markerOpen : styles.markerCovered,
          )}
        >
          {number}
        </span>
        <span
          {...stylex.props(
            styles.spine,
            open ? styles.spineOpen : styles.spineCovered,
          )}
        />
      </div>

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
            {t('places.firstSeen', { episode: entry.revealedAtEpisode })}
          </span>
        </p>

        <SpoilerVeil
          revealedAtEpisode={entry.revealedAtEpisode}
          revealed={open}
          strength="media"
          // Under fog the served HTML carries no name, no drawing and no
          // colour: a bare plate and a generic line stand in for the entry.
          placeholder={
            <div {...stylex.props(styles.spread)}>
              <div {...stylex.props(styles.plate)}>
                <PortPlate />
              </div>
              <div {...stylex.props(styles.dossier)}>
                <h2 {...stylex.props(styles.name)}>{t('places.foggedName')}</h2>
                <p {...stylex.props(styles.summary)}>
                  {t('places.foggedDescription', {
                    episode: entry.revealedAtEpisode,
                  })}
                </p>
              </div>
            </div>
          }
        >
          <Spread entry={entry} progress={progress} />
        </SpoilerVeil>
      </div>
    </li>
  )
}

/** An open port: the plate beside the dossier. */
function Spread({
  entry,
  progress,
}: {
  readonly entry: Entity
  readonly progress: Progress
}) {
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
            <FiledHere ids={dossier.filedHere} progress={progress} />
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
function Facts({ dossier }: { readonly dossier: PlaceDossier }) {
  const { locale, t } = useLocale()
  const arc = getEntity(dossier.arc)

  return (
    <dl {...stylex.props(styles.facts)}>
      <Fact label={t('places.sea')} value={t(`sea.${dossier.sea}`)} />
      <Fact label={t('places.form')} value={t(`form.${dossier.form}`)} />
      {arc === undefined ? null : (
        <Fact label={t('places.arc')} value={arc.name[locale]} />
      )}
      <Fact label={t('places.landmark')} value={dossier.landmark[locale]} />
    </dl>
  )
}

function Fact({
  label,
  value,
}: {
  readonly label: string
  readonly value: string
}) {
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
  progress,
}: {
  readonly ids: readonly string[]
  readonly progress: Progress
}) {
  const { t } = useLocale()
  const records = ids
    .map((id) => getEntity(id))
    .filter((record): record is Entity => record !== undefined)

  return (
    <div {...stylex.props(styles.filed)}>
      <h3 {...stylex.props(styles.filedTitle)}>{t('places.filedHere')}</h3>
      {records.length === 0 ? (
        <p {...stylex.props(styles.filedNone)}>{t('places.filedNone')}</p>
      ) : (
        <ul {...stylex.props(styles.crew)}>
          {records.map((record) => (
            <li key={record.id} {...stylex.props(styles.crewItem)}>
              <RecordTile entry={record} progress={progress} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

/**
 * The reader's position on the spine: a gold tick and a line across the
 * body, labelled. With no bookmark it sits above the first port and says so.
 */
function Horizon({ progress }: { readonly progress: Progress }) {
  const { t } = useLocale()
  const set = progress !== null

  return (
    <li aria-current="step" {...stylex.props(styles.row, styles.horizonRow)}>
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
        {set ? t('chart.hereSet', { episode: progress }) : t('chart.hereUnset')}
      </p>
    </li>
  )
}

const styles = stylex.create({
  log: {
    display: 'grid',
    listStyleType: 'none',
    paddingInlineStart: 0,
  },

  // The rail is a narrow first column; the body takes the rest. Rows have no
  // gap of their own, so the spine runs unbroken from one port to the next.
  row: {
    columnGap: { default: space.md, '@media (min-width: 40rem)': space.lg },
    display: 'grid',
    gridTemplateColumns: {
      default: '2.75rem minmax(0, 1fr)',
      '@media (min-width: 40rem)': '3.5rem minmax(0, 1fr)',
    },
    scrollMarginBlockStart: space.xl,
  },
  // Three rows: a stretch of spine the height of the body's top padding, so
  // the marker sits level with the stage label, the marker, and the rest.
  rail: {
    display: 'grid',
    gridTemplateRows: `${space.lg} auto minmax(0, 1fr)`,
    justifyItems: 'center',
  },
  spine: {
    borderInlineStartStyle: 'solid',
    borderInlineStartWidth: rule.fine,
    display: 'block',
    height: '100%',
    width: 0,
  },
  spineOpen: {
    borderInlineStartColor: color.accent,
  },
  spineCovered: {
    borderInlineStartColor: color.rule2,
    borderInlineStartStyle: 'dashed',
  },
  // The port number in a ring: the numbered stage label the macrostructure
  // asks for, drawn as a mark on the spine rather than set in the margin.
  marker: {
    alignItems: 'center',
    backgroundColor: color.paper,
    borderRadius: radius.pill,
    borderStyle: 'solid',
    borderWidth: rule.fine,
    display: 'grid',
    fontFamily: font.mono,
    fontSize: text.base,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 700,
    height: '2.75rem',
    justifyContent: 'center',
    lineHeight: 1,
    width: '2.75rem',
  },
  markerOpen: {
    borderColor: color.accent,
    color: color.ink,
  },
  markerCovered: {
    borderColor: color.rule2,
    color: color.muted,
  },

  body: {
    display: 'grid',
    gap: space.md,
    minWidth: 0,
    paddingBlockEnd: space.xl2,
    paddingBlockStart: space.lg,
  },
  // Sits level with the marker: one line, the stage and the episode, and
  // the only thing besides the number that a covered port says about itself.
  stage: {
    alignItems: 'baseline',
    columnGap: space.md,
    display: 'flex',
    flexWrap: 'wrap',
    lineHeight: leading.body,
    minHeight: '2.75rem',
    rowGap: space.xs3,
  },
  stageLabel: {
    fontFamily: font.mono,
    fontSize: text.xs,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  },
  stageOpen: {
    color: color.accent,
  },
  stageCovered: {
    color: color.muted,
  },
  stageEpisode: {
    color: color.ink2,
    fontSize: text.base,
  },

  // The spread: plate beside dossier from 60rem, stacked below it.
  spread: {
    alignItems: 'start',
    columnGap: space.xl,
    display: 'grid',
    gridTemplateColumns: {
      default: 'minmax(0, 1fr)',
      '@media (min-width: 60rem)': 'minmax(0, 4fr) minmax(0, 8fr)',
    },
    rowGap: space.lg,
  },
  plate: {
    aspectRatio: '1',
    backgroundColor: color.paper2,
    borderColor: color.rule,
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    maxWidth: '22rem',
    overflow: 'hidden',
    padding: space.sm,
    width: '100%',
  },
  dossier: {
    display: 'grid',
    gap: space.md,
    minWidth: 0,
  },
  name: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.xl,
    fontWeight: 800,
    letterSpacing: '-0.025em',
    lineHeight: leading.heading,
    minWidth: 0,
    overflowWrap: 'anywhere',
  },
  summary: {
    color: color.ink2,
    fontSize: text.lg,
    lineHeight: leading.body,
    maxWidth: '52ch',
  },

  facts: {
    borderBlockColor: color.rule,
    borderBlockStyle: 'solid',
    borderBlockWidth: rule.hair,
    columnGap: space.lg,
    display: 'grid',
    gridTemplateColumns: {
      default: 'minmax(0, 1fr)',
      '@media (min-width: 40rem)': 'repeat(2, minmax(0, 1fr))',
    },
    paddingBlock: space.md,
    rowGap: space.sm,
  },
  fact: {
    display: 'grid',
    gap: space.xs3,
    minWidth: 0,
  },
  factLabel: {
    color: color.muted,
    fontSize: text.xs,
    fontWeight: 600,
    letterSpacing: '0.08em',
    lineHeight: leading.body,
    textTransform: 'uppercase',
  },
  factValue: {
    color: color.ink,
    fontSize: text.base,
    fontWeight: 600,
    lineHeight: leading.body,
    marginInlineStart: 0,
    minWidth: 0,
    overflowWrap: 'anywhere',
  },
  entry: {
    color: color.ink2,
    fontSize: text.base,
    lineHeight: leading.body,
    maxWidth: '60ch',
  },

  filed: {
    display: 'grid',
    gap: space.sm,
  },
  filedTitle: {
    color: color.ink2,
    fontFamily: font.body,
    fontSize: text.base,
    fontWeight: 600,
    lineHeight: leading.body,
  },
  filedNone: {
    color: color.muted,
    fontSize: text.base,
    lineHeight: leading.body,
  },
  crew: {
    display: 'grid',
    gap: space.md,
    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 14rem), 1fr))',
    listStyleType: 'none',
    paddingInlineStart: 0,
  },
  crewItem: {
    minWidth: 0,
  },

  // The horizon: a short row, the tick on the spine, the line across the
  // body and its label.
  horizonRow: {
    alignItems: 'center',
  },
  horizonRail: {
    gridTemplateRows: 'minmax(0, 1fr) auto minmax(0, 1fr)',
    height: '100%',
  },
  tick: {
    borderBlockStartStyle: 'solid',
    borderBlockStartWidth: rule.fine,
    display: 'block',
    height: 0,
    width: '1.25rem',
  },
  tickSet: {
    borderBlockStartColor: color.accent,
  },
  tickUnset: {
    borderBlockStartColor: color.rule2,
  },
  horizonLabel: {
    borderBlockStartStyle: 'solid',
    borderBlockStartWidth: rule.fine,
    fontFamily: font.mono,
    fontSize: text.xs,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 700,
    letterSpacing: '0.1em',
    lineHeight: leading.body,
    marginBlock: space.md,
    paddingBlockStart: space.xs,
    textTransform: 'uppercase',
  },
  horizonSet: {
    borderBlockStartColor: color.accent,
    color: color.accent,
  },
  horizonUnset: {
    borderBlockStartColor: color.rule2,
    borderBlockStartStyle: 'dashed',
    color: color.muted,
  },
})
