import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { CharacterCrest } from '~/components/CharacterCrest'
import { ChartArt } from '~/components/ChartArt'
import { dialBookmark, type DialPoint, latestStep } from '~/components/dial'
import { styles } from '~/components/Onboarding.styles'
import { PortPlate } from '~/components/PortPlate'
import { formatBounty } from '~/i18n/bounty'
import { useLocale } from '~/i18n/LocaleContext'
import { useBookmark } from '~/lib/progress/BookmarkContext'
import { describeThreshold } from '~/lib/progress/threshold'
import type { CoveredRecord, DemoEntry } from '~/lib/view/records'
import { settleStyles } from '~/styles/settle'

/**
 * The onboarding's cards: a record the dial has reached, open, or one it has
 * not, under fog.
 */

/**
 * A record the dial has reached, with its drawing and the facts it has
 * reached. A character, a place or a ship is a link to its page at this
 * point, on a trial; an arc has no page of its own.
 *
 * The open card and the fogged one are different components, so a record
 * the dial has just reached mounts and settles in rather than snapping: the
 * same entrance every page uses.
 */
export function OpenCard({
  entry,
  here,
  point,
}: {
  entry: DemoEntry
  here: boolean
  point: DialPoint
}): ReactElement {
  const look = [
    styles.card,
    here && styles.here,
    settleStyles.band,
    settleStyles.at(0),
  ]
  const body = (
    <CardBody
      entry={entry}
      point={point}
    />
  )

  if (entry.kind === 'arc') {
    return (
      <div
        aria-current={here ? 'step' : undefined}
        {...stylex.props(look)}
      >
        {body}
      </div>
    )
  }

  return (
    <TrialLink
      entry={entry}
      point={point}
      sx={[look, styles.cardLink]}
    >
      {body}
    </TrialLink>
  )
}

/**
 * A link to a record's own page that stands the reader at the dial's point
 * first, on a trial: the cookie is written on the click, before the router
 * loads the page that reads it. Never preloaded: a hover would load the page
 * with no trial cookie yet, and the click would reuse that covered page.
 */
function TrialLink({
  children,
  entry,
  point,
  sx,
}: {
  children: ReactElement
  entry: DemoEntry
  point: DialPoint
  sx: stylex.StyleXStyles
}): ReactElement {
  const { locale } = useLocale()
  const { enterTrial } = useBookmark()
  const onClick = (): void => {
    enterTrial(dialBookmark(point))
  }

  return entry.kind === 'character' ?
      <Link
        onClick={onClick}
        params={{ locale, id: entry.id }}
        preload={false}
        to="/$locale/characters/$id"
        {...stylex.props(sx)}
      >
        {children}
      </Link>
    : <Link
        hash={entry.id}
        onClick={onClick}
        params={{ locale }}
        preload={false}
        to="/$locale/places"
        {...stylex.props(sx)}
      >
        {children}
      </Link>
}

/** The drawing, the name, and each fact the dial has reached, in a stack. */
function CardBody({
  entry,
  point,
}: {
  entry: DemoEntry
  point: DialPoint
}): ReactElement {
  const { locale, t } = useLocale()
  const facts = [
    { slot: 'epithet', text: latestStep(entry.epithet, point), loud: true },
    { slot: 'role', text: entry.role, loud: false },
    {
      slot: 'affiliation',
      text: latestStep(entry.affiliation, point),
      loud: false,
    },
    {
      slot: 'bounty',
      text: formatBounty(latestStep(entry.bounty, point), locale, t),
      loud: true,
    },
  ].filter((fact) => fact.text !== undefined)

  return (
    <>
      <div
        {...stylex.props(entry.kind === 'arc' ? styles.arcFrame : styles.frame)}
      >
        <Drawn
          drawing={latestStep(entry.drawings, point)}
          kind={entry.kind}
        />
      </div>
      <p {...stylex.props(styles.name)}>{entry.name}</p>
      {facts.map(({ loud, slot, text }) => {
        return (
          <p
            key={slot}
            {...stylex.props(loud ? styles.epithet : styles.fact)}
          >
            {text}
          </p>
        )
      })}
    </>
  )
}

/** A record's drawing in the frame its kind is drawn in. */
function Drawn({
  drawing,
  kind,
}: {
  drawing: DemoEntry['drawings'][number]['value'] | undefined
  kind: DemoEntry['kind']
}): null | ReactElement {
  if (drawing === undefined) {
    return null
  }
  if (kind === 'character') {
    return <CharacterCrest visual={drawing} />
  }
  if (kind === 'arc') {
    return <ChartArt {...drawing} />
  }

  return <PortPlate visual={drawing} />
}

/**
 * A record under fog: the bare seal or the bare plate, the word "Spoiler",
 * and where it opens. The name and the drawing are not drawn, though for an
 * East Blue record they are in the page's data for the dial.
 */
export function FogCard({
  entry,
  point,
}: {
  entry: CoveredRecord | DemoEntry
  point: DialPoint
}): ReactElement {
  const { t } = useLocale()

  return (
    <div {...stylex.props(styles.card, styles.fogged)}>
      <div {...stylex.props(styles.frame)}>
        {entry.kind === 'character' ?
          <CharacterCrest />
        : <PortPlate />}
      </div>
      <p {...stylex.props(styles.name, styles.fogName)}>
        {t('veil.placeholder')}
      </p>
      <p {...stylex.props(styles.threshold)}>
        {describeThreshold({
          gated: entry,
          mode: point.mode,
          sentence: 'veil.locked',
          t,
        })}
      </p>
    </div>
  )
}
