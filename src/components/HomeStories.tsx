import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { Prose } from '~/components/CharacterChronicle'
import { useLocale } from '~/i18n/LocaleContext'
import { useThreshold } from '~/lib/progress/BookmarkContext'
import type { HomeStory } from '~/lib/view/records'
import {
  color,
  dur,
  ease,
  font,
  leading,
  rule,
  space,
  text,
} from '~/styles/tokens.stylex'

/** How many stories are shown whole; the rest are closed under their titles. */
const OPEN_COUNT = 3

/** The stories the reader has reached in the arc, or in the one before. */
export interface HomeStoriesProps {
  /** The stories are the previous arc's, because this one has none yet. */
  before: boolean
  stories: HomeStory[]
}

/** The stories past the first three, closed under their titles. */
export interface HomeMoreStoriesProps {
  stories: HomeStory[]
}

/** A story's key in the ledger: its subject and the episode it concludes at. */
function keyOf(story: HomeStory): string {
  return `${story.subject.id}:${String(story.revealedAtEpisode)}`
}

/**
 * What just happened: the first three stories concluded in the arc, most
 * recent first, set whole down one ledger. The rest are `HomeMoreStories`,
 * further down the page.
 *
 * With no story reached the section says so in one line: the page is
 * already standing at the reader's point, so an empty list is a fact about
 * the start of the story and not a count of what is to come.
 */
export function HomeStories({
  before,
  stories,
}: HomeStoriesProps): ReactElement {
  const { t } = useLocale()

  return (
    <section
      aria-labelledby="home-stories"
      {...stylex.props(styles.section)}
    >
      <h2
        id="home-stories"
        {...stylex.props(styles.heading)}
      >
        {t(before ? 'home.before' : 'home.recent')}
      </h2>

      {stories.length === 0 ?
        <p {...stylex.props(styles.empty)}>{t('home.noStories')}</p>
      : <ol {...stylex.props(styles.ledger)}>
          {stories.slice(0, OPEN_COUNT).map((story) => {
            return (
              <li
                key={keyOf(story)}
                {...stylex.props(styles.row)}
              >
                <OpenStory story={story} />
              </li>
            )
          })}
        </ol>
      }
    </section>
  )
}

/**
 * The stories after the first three, closed under their titles and opened
 * with a tap, as a native `<details>`, so the page works the same with
 * scripting off. Nothing at all when there are none: a heading over an
 * empty list would say more is coming.
 */
export function HomeMoreStories({
  stories,
}: HomeMoreStoriesProps): null | ReactElement {
  const { t } = useLocale()
  const more = stories.slice(OPEN_COUNT)

  if (more.length === 0) {
    return null
  }

  return (
    <section
      aria-labelledby="home-more"
      {...stylex.props(styles.section)}
    >
      <h2
        id="home-more"
        {...stylex.props(styles.heading)}
      >
        {t('home.more')}
      </h2>
      <ol {...stylex.props(styles.ledger)}>
        {more.map((story) => {
          return (
            <li
              key={keyOf(story)}
              {...stylex.props(styles.row)}
            >
              <ClosedStory story={story} />
            </li>
          )
        })}
      </ol>
    </section>
  )
}

/** The mark in the reader's unit, and whose story it is, as one line. */
function Byline({ story }: { story: HomeStory }): ReactElement {
  const { locale } = useLocale()
  const threshold = useThreshold()

  return (
    <p {...stylex.props(styles.byline)}>
      <span {...stylex.props(styles.mark)}>
        {threshold('home.storyAt', story)}
      </span>
      <Link
        params={{ locale, id: story.subject.id }}
        to="/$locale/characters/$id"
        {...stylex.props(styles.subject)}
      >
        {story.subject.name}
      </Link>
    </p>
  )
}

/** A story set whole: the byline, the title, the paragraph. */
function OpenStory({ story }: { story: HomeStory }): ReactElement {
  return (
    <article {...stylex.props(styles.story)}>
      <Byline story={story} />
      <h3 {...stylex.props(styles.title)}>{story.title}</h3>
      <p {...stylex.props(styles.body)}>
        <Prose segments={story.body} />
      </p>
    </article>
  )
}

/** A story closed under its title, which is the whole of the summary. */
function ClosedStory({ story }: { story: HomeStory }): ReactElement {
  return (
    <details {...stylex.props(styles.closed)}>
      <summary {...stylex.props(styles.summary)}>
        <h3 {...stylex.props(styles.summaryTitle)}>{story.title}</h3>
      </summary>
      <div {...stylex.props(styles.story)}>
        <Byline story={story} />
        <p {...stylex.props(styles.body)}>
          <Prose segments={story.body} />
        </p>
      </div>
    </details>
  )
}

const styles = stylex.create({
  section: { gap: space.lg, display: 'grid', minWidth: 0 },
  heading: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.xl,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
  },
  empty: { color: color.ink2, fontSize: text.base, lineHeight: leading.body },
  // One rule down the page, the stories hung off it: a ledger read in order.
  ledger: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    borderBlockStartColor: color.rule,
    borderBlockStartStyle: 'solid',
    borderBlockStartWidth: rule.hair,
    display: 'grid',
    minWidth: 0,
  },
  row: {
    borderBlockEndColor: color.rule,
    borderBlockEndStyle: 'solid',
    borderBlockEndWidth: rule.hair,
    minWidth: 0,
  },
  story: {
    gap: space.xs,
    paddingBlock: space.lg,
    display: 'grid',
    minWidth: 0,
  },
  byline: {
    margin: 0,
    gap: space.md,
    alignItems: 'baseline',
    display: 'flex',
    flexWrap: 'wrap',
  },
  // The episode in the same voice as the point in the fold: mono, accent,
  // tabular, so a column of them lines up down the ledger.
  mark: {
    color: color.accent,
    fontFamily: font.mono,
    fontSize: text.xs,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 700,
    letterSpacing: '0.1em',
    lineHeight: leading.body,
    textTransform: 'uppercase',
  },
  subject: {
    color: { 'default': color.ink2, ':hover': color.accent },
    fontSize: text.base,
    fontWeight: 600,
    lineHeight: leading.body,
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textDecorationColor: { 'default': color.rule2, ':hover': color.accent },
    textDecorationLine: 'underline',
    textDecorationThickness: rule.hair,
    textUnderlineOffset: '3px',
    transitionDuration: dur.micro,
    transitionProperty: 'color, text-decoration-color',
    transitionTimingFunction: ease.out,
  },
  title: {
    margin: 0,
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.xl,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
  body: {
    margin: 0,
    color: color.ink2,
    fontSize: text.base,
    lineHeight: leading.body,
    maxWidth: '60ch',
  },
  closed: { minWidth: 0 },
  // The title is the whole control: a plain line with the native marker in
  // the accent, and the focus ring every control on the site carries.
  summary: {
    'paddingBlock': space.md,
    'color': { 'default': color.ink, ':hover': color.accent },
    'cursor': 'pointer',
    'outlineColor': { 'default': 'transparent', ':focus-visible': color.focus },
    'outlineOffset': space.xs3,
    'outlineStyle': 'solid',
    'outlineWidth': rule.fine,
    'transitionDuration': dur.micro,
    'transitionProperty': 'color',
    'transitionTimingFunction': ease.out,
    '::marker': { color: color.accent },
  },
  summaryTitle: {
    margin: 0,
    display: 'inline',
    fontFamily: font.display,
    fontSize: text.lg,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
  },
})
