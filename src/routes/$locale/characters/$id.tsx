/* Hallmark · pre-emit critique: P5 H5 E4 S5 R4 V4 */
/* Hallmark · genre: atmospheric · macrostructure: Split Studio · theme: Sea
 *   Chart (locked) · enrichment: Tier B hand-built SVG (crest seal + route
 *   strip) · nav: N9 (shared) · footer: Ft4 (shared)
 * · structure: three diptychs that alternate — crest | dossier · route
 *   position | strip · nearby crests as one row
 * · idea: "a page from the signal book, opened flat" */
import * as stylex from '@stylexjs/stylex'
import { createFileRoute, Link, notFound } from '@tanstack/react-router'

import { CharacterCard } from '~/components/CharacterCard'
import { CharacterCardList } from '~/components/CharacterGrid'
import { CharacterCrest } from '~/components/CharacterCrest'
import { ChartArt } from '~/components/ChartArt'
import { RouteStrip } from '~/components/RouteStrip'
import { SpoilerVeil } from '~/components/SpoilerVeil'
import {
  getCharacter,
  nearbyCharacters,
  roleOf,
  route as archiveRoute,
  routePositionOf,
} from '~/data/characters'
import type { Entity, EntityKind } from '~/data/types'
import { useLocale } from '~/i18n/LocaleContext'
import { isLocale, type Locale } from '~/i18n/locales'
import { getDictionary, translate } from '~/i18n/translate'
import type { TranslationKey } from '~/i18n/types'
import { useEpisode } from '~/lib/progress/EpisodeContext'
import { isRevealed } from '~/lib/progress/spoiler'
import {
  color,
  dur,
  ease,
  font,
  leading,
  radius,
  rule,
  space,
  text,
} from '~/styles/tokens.stylex'

const KIND_KEY: Readonly<Record<EntityKind, TranslationKey>> = {
  character: 'kind.character',
  arc: 'kind.arc',
  place: 'kind.place',
  ship: 'kind.ship',
}

export const Route = createFileRoute('/$locale/characters/$id')({
  // The one decision the page turns on is made here, on the server, from the
  // bookmark the root route read: the document title must not carry a name
  // the reader has not reached, and a title is set before any component runs.
  loader: ({ params, context }) => {
    const entity = getCharacter(params.id)
    if (entity === undefined) throw notFound()

    return {
      id: entity.id,
      revealed: isRevealed(entity, context.initialProgress),
    }
  },
  head: ({ params, loaderData }) => {
    if (!isLocale(params.locale) || loaderData === undefined) return {}
    const entity = getCharacter(loaderData.id)
    if (entity === undefined) return {}

    return { meta: describe(params.locale, entity, loaderData.revealed) }
  },
  component: CharacterPage,
  notFoundComponent: CharacterNotFound,
})

/**
 * The document title and description. Under fog both are generic: a title is
 * set before any component runs, so this is the one place a covered name
 * could leak, and it must not.
 */
function describe(locale: Locale, entity: Entity, revealed: boolean) {
  const dictionary = getDictionary(locale)

  if (!revealed) {
    return [
      { title: translate(dictionary, 'character.foggedTitle') },
      {
        name: 'description',
        content: translate(dictionary, 'character.foggedDescription', {
          episode: entity.revealedAtEpisode,
        }),
      },
    ]
  }

  return [
    {
      title: translate(dictionary, 'character.pageTitle', {
        name: entity.name[locale],
      }),
    },
    { name: 'description', content: entity.summary[locale] },
  ]
}

const settle = stylex.keyframes({
  from: { opacity: 0, transform: 'translateY(10px)' },
  to: { opacity: 1, transform: 'none' },
})

/**
 * A character's page (Hallmark macrostructure 15, Split Studio).
 *
 * Three diptychs down the page, alternating sides. The first is the crest
 * beside the dossier: kind and episode in mono, the name as the only display
 * line, the role, the summary. The second is the record's place on the route
 * beside a strip of the whole route with this waypoint ringed, and the two
 * records filed either side of it. The third is one row of the listed
 * characters filed nearest by episode.
 *
 * Under fog the crest and the dossier are covered together and the title is
 * generic; the strip still shows where on the route the page sits, because
 * "waypoint 23 of 35" is the promise and not the spoiler.
 */
function CharacterPage() {
  const { id } = Route.useLoaderData()
  const { locale, t } = useLocale()
  const { progress } = useEpisode()

  // Cannot be undefined: the loader threw `notFound` for any id that is.
  const entity = getCharacter(id)
  if (entity === undefined) return null

  const revealed = isRevealed(entity, progress)
  const role = roleOf(entity)
  const position = routePositionOf(entity)
  const positionLabel = t('character.position', {
    index: position.index + 1,
    total: position.total,
  })

  return (
    <main id="content" {...stylex.props(styles.page)}>
      <p {...stylex.props(styles.back, styles.enter, styles.at(0))}>
        <Link
          to="/$locale/characters"
          params={{ locale }}
          {...stylex.props(styles.backLink)}
        >
          ← {t('character.back')}
        </Link>
      </p>

      <section {...stylex.props(styles.diptych, styles.enter, styles.at(0))}>
        <SpoilerVeil
          revealedAtEpisode={entity.revealedAtEpisode}
          revealed={revealed}
          strength="media"
          // A bare seal under fog: the drawing and its colour stay out of
          // the served HTML along with the name.
          placeholder={
            <div {...stylex.props(styles.plate)}>
              <CharacterCrest />
            </div>
          }
        >
          <div {...stylex.props(styles.plate)}>
            <CharacterCrest visual={entity.visual} />
          </div>
        </SpoilerVeil>

        <div {...stylex.props(styles.dossier)}>
          <p {...stylex.props(styles.meta)}>
            <span {...stylex.props(styles.kind)}>
              {t(KIND_KEY[entity.kind])}
            </span>
            <span {...stylex.props(styles.episode)}>
              {t('character.opensAt', { episode: entity.revealedAtEpisode })}
            </span>
          </p>

          <SpoilerVeil
            revealedAtEpisode={entity.revealedAtEpisode}
            revealed={revealed}
            // Under fog the served HTML carries no name, role or summary:
            // this is a page about one record, so a blur alone would leave
            // the answer in the page source.
            placeholder={
              <div {...stylex.props(styles.words)}>
                <h1 {...stylex.props(styles.name)}>
                  {t('character.foggedName')}
                </h1>
                <p {...stylex.props(styles.summary)}>
                  {t('character.foggedDescription', {
                    episode: entity.revealedAtEpisode,
                  })}
                </p>
              </div>
            }
          >
            <div {...stylex.props(styles.words)}>
              <h1 {...stylex.props(styles.name)}>{entity.name[locale]}</h1>
              {role === undefined ? null : (
                <p {...stylex.props(styles.role)}>{role[locale]}</p>
              )}
              <p {...stylex.props(styles.summary)}>{entity.summary[locale]}</p>
            </div>
          </SpoilerVeil>
        </div>
      </section>

      <section
        aria-labelledby="route-position"
        {...stylex.props(
          styles.diptych,
          styles.reversed,
          styles.enter,
          styles.at(1),
        )}
      >
        <div {...stylex.props(styles.dossier)}>
          <h2 id="route-position" {...stylex.props(styles.sectionTitle)}>
            {t('character.routeTitle')}
          </h2>
          <p {...stylex.props(styles.position)}>{positionLabel}</p>
          <p {...stylex.props(styles.lede)}>{t('character.positionLede')}</p>

          <dl {...stylex.props(styles.neighbours)}>
            <Neighbour
              label={t('character.before')}
              entry={position.previous}
              empty={t('character.routeStart')}
              progress={progress}
            />
            <Neighbour
              label={t('character.after')}
              entry={position.next}
              empty={t('character.routeEnd')}
              progress={progress}
            />
          </dl>
        </div>
        <div {...stylex.props(styles.stripBand)}>
          <RouteStrip
            entries={archiveRoute}
            current={entity}
            progress={progress}
            label={positionLabel}
          />
        </div>
      </section>

      <section
        aria-labelledby="nearby"
        {...stylex.props(styles.nearby, styles.enter, styles.at(2))}
      >
        <div {...stylex.props(styles.nearbyHead)}>
          <h2 id="nearby" {...stylex.props(styles.sectionTitle)}>
            {t('character.nearbyTitle')}
          </h2>
          <p {...stylex.props(styles.lede)}>{t('character.nearbyLede')}</p>
        </div>
        <CharacterCardList>
          {nearbyCharacters(entity, 5).map((near) => (
            <CharacterCard
              key={near.id}
              entity={near}
              revealed={isRevealed(near, progress)}
            />
          ))}
        </CharacterCardList>
      </section>
    </main>
  )
}

/**
 * One of the two records filed beside this one. Whatever its kind, it is
 * shown as a small plate and a name, and a character's name is a link. Under
 * fog the plate and the name go together and the episode stays.
 */
function Neighbour({
  label,
  entry,
  empty,
  progress,
}: {
  readonly label: string
  readonly entry: Entity | undefined
  readonly empty: string
  readonly progress: number | null
}) {
  const { locale, t } = useLocale()

  return (
    <div {...stylex.props(styles.neighbour)}>
      <dt {...stylex.props(styles.neighbourLabel)}>{label}</dt>
      <dd {...stylex.props(styles.neighbourBody)}>
        {entry === undefined ? (
          <span {...stylex.props(styles.lede)}>{empty}</span>
        ) : (
          <>
            <span {...stylex.props(styles.meta)}>
              <span {...stylex.props(styles.kind)}>
                {t(KIND_KEY[entry.kind])}
              </span>
              <span {...stylex.props(styles.episode)}>
                {t('chart.opensAt', { episode: entry.revealedAtEpisode })}
              </span>
            </span>
            <SpoilerVeil
              revealedAtEpisode={entry.revealedAtEpisode}
              revealed={isRevealed(entry, progress)}
              density="inline"
              placeholder={
                <span {...stylex.props(styles.neighbourCard)}>
                  <span {...stylex.props(styles.neighbourFrame)} />
                  <span {...stylex.props(styles.neighbourName)}>
                    {t('veil.placeholder')}
                  </span>
                </span>
              }
            >
              <span {...stylex.props(styles.neighbourCard)}>
                <span {...stylex.props(styles.neighbourFrame)}>
                  <ChartArt art={entry.visual.art} tint={entry.visual.tint} />
                </span>
                {entry.kind === 'character' ? (
                  <Link
                    to="/$locale/characters/$id"
                    params={{ locale, id: entry.id }}
                    {...stylex.props(
                      styles.neighbourName,
                      styles.neighbourLink,
                    )}
                  >
                    {entry.name[locale]}
                  </Link>
                ) : (
                  <span {...stylex.props(styles.neighbourName)}>
                    {entry.name[locale]}
                  </span>
                )}
              </span>
            </SpoilerVeil>
          </>
        )}
      </dd>
    </div>
  )
}

/** `/characters/<not-a-character>`: says so, and points at the book. */
function CharacterNotFound() {
  const { locale, t } = useLocale()

  return (
    <main id="content" {...stylex.props(styles.page)}>
      <div {...stylex.props(styles.words)}>
        <h1 {...stylex.props(styles.name)}>{t('character.notFoundTitle')}</h1>
        <p {...stylex.props(styles.summary)}>{t('character.notFoundBody')}</p>
        <p>
          <Link
            to="/$locale/characters"
            params={{ locale }}
            {...stylex.props(styles.backLink)}
          >
            ← {t('character.back')}
          </Link>
        </p>
      </div>
    </main>
  )
}

const styles = stylex.create({
  page: {
    display: 'grid',
    gap: space.xl2,
    paddingBlockEnd: space.xl3,
    paddingBlockStart: space.lg,
    paddingInline: space.md,
  },

  back: {
    marginBlockEnd: `calc(-1 * ${space.xl})`,
  },
  // Hallmark C3: a word, an arrow, a rule. It is the page's one way back.
  backLink: {
    color: {
      default: color.ink2,
      ':hover': color.accent,
      ':active': color.ink,
    },
    fontSize: text.base,
    fontWeight: 600,
    outlineColor: { default: 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textDecorationColor: { default: color.rule2, ':hover': color.accent },
    textDecorationLine: 'underline',
    textDecorationThickness: rule.hair,
    textUnderlineOffset: '4px',
    transitionDuration: dur.micro,
    transitionProperty: 'color, text-decoration-color',
    transitionTimingFunction: ease.out,
    whiteSpace: 'nowrap',
  },

  // The diptych: two halves with a wide gutter and no rule between them.
  // The crest half is the narrower one; the words need the width more.
  diptych: {
    alignItems: 'start',
    columnGap: space.xl2,
    display: 'grid',
    gridTemplateColumns: {
      default: 'minmax(0, 1fr)',
      '@media (min-width: 60rem)': 'minmax(0, 5fr) minmax(0, 7fr)',
    },
    rowGap: space.lg,
  },
  // The second diptych swaps sides on a wide page, so the two rows read as
  // a pair rather than a template: words left, strip right. On a phone the
  // words come first and the strip follows.
  reversed: {
    gridTemplateColumns: {
      default: 'minmax(0, 1fr)',
      '@media (min-width: 60rem)': 'minmax(0, 7fr) minmax(0, 5fr)',
    },
  },
  plate: {
    aspectRatio: '1',
    backgroundColor: color.paper2,
    borderColor: color.rule,
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    marginInline: { default: 'auto', '@media (min-width: 60rem)': 0 },
    maxWidth: '26rem',
    overflow: 'hidden',
    padding: space.lg,
    width: '100%',
  },
  dossier: {
    display: 'grid',
    gap: space.md,
    minWidth: 0,
  },
  words: {
    display: 'grid',
    gap: space.sm,
    minWidth: 0,
  },
  meta: {
    alignItems: 'baseline',
    color: color.muted,
    columnGap: space.sm,
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: text.xs,
    letterSpacing: '0.08em',
    lineHeight: leading.body,
    textTransform: 'uppercase',
  },
  kind: {
    fontFamily: font.body,
    fontWeight: 600,
  },
  episode: {
    color: color.ink2,
    fontFamily: font.mono,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 600,
  },
  // The one display line on the page. Names run 4 to 22 characters, so the
  // full display size holds two lines at most in the 7fr column.
  name: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.display,
    fontWeight: 800,
    letterSpacing: '-0.035em',
    lineHeight: leading.display,
    minWidth: 0,
    overflowWrap: 'anywhere',
  },
  role: {
    color: color.ink2,
    fontSize: text.xl,
    fontWeight: 600,
    letterSpacing: '-0.01em',
    lineHeight: leading.heading,
  },
  summary: {
    color: color.ink2,
    fontSize: text.lg,
    lineHeight: leading.body,
    maxWidth: '52ch',
  },

  sectionTitle: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.xl,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    minWidth: 0,
    overflowWrap: 'anywhere',
  },
  position: {
    color: color.accent,
    fontFamily: font.mono,
    fontSize: text.base,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 700,
    letterSpacing: '0.1em',
    lineHeight: leading.body,
    textTransform: 'uppercase',
  },
  lede: {
    color: color.muted,
    fontSize: text.base,
    lineHeight: leading.body,
    maxWidth: '52ch',
  },
  stripBand: {
    alignSelf: 'center',
    backgroundColor: color.paper2,
    borderColor: color.rule,
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    paddingBlock: space.lg,
    paddingInline: space.md,
  },

  neighbours: {
    columnGap: space.lg,
    display: 'grid',
    gridTemplateColumns: {
      default: 'minmax(0, 1fr)',
      '@media (min-width: 40rem)': 'repeat(2, minmax(0, 1fr))',
    },
    marginBlockStart: space.xs,
    rowGap: space.md,
  },
  neighbour: {
    display: 'grid',
    gap: space.xs,
    minWidth: 0,
  },
  neighbourLabel: {
    color: color.ink2,
    fontSize: text.base,
    fontWeight: 600,
    lineHeight: leading.body,
  },
  neighbourBody: {
    display: 'grid',
    gap: space.xs,
    marginInlineStart: 0,
    minWidth: 0,
  },
  neighbourCard: {
    alignItems: 'center',
    columnGap: space.sm,
    display: 'grid',
    gridTemplateColumns: '3.5rem minmax(0, 1fr)',
  },
  neighbourFrame: {
    aspectRatio: '4 / 5',
    backgroundColor: color.paper2,
    borderColor: color.rule,
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    display: 'block',
    overflow: 'hidden',
  },
  neighbourName: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.lg,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    minWidth: 0,
    overflowWrap: 'anywhere',
  },
  neighbourLink: {
    color: {
      default: color.ink,
      ':hover': color.accent,
      ':active': color.ink2,
    },
    outlineColor: { default: 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textDecorationColor: { default: 'transparent', ':hover': color.accent },
    textDecorationLine: 'underline',
    textDecorationThickness: rule.fine,
    textUnderlineOffset: '4px',
    transitionDuration: dur.micro,
    transitionProperty: 'color, text-decoration-color',
    transitionTimingFunction: ease.out,
  },

  nearby: {
    borderBlockStartColor: color.rule,
    borderBlockStartStyle: 'solid',
    borderBlockStartWidth: rule.hair,
    display: 'grid',
    gap: space.lg,
    paddingBlockStart: space.xl,
  },
  nearbyHead: {
    display: 'grid',
    gap: space.xs,
  },

  enter: {
    animationDuration: dur.long,
    animationFillMode: 'forwards',
    animationName: {
      default: 'none',
      '@media (prefers-reduced-motion: no-preference)': settle,
    },
    animationTimingFunction: ease.out,
    opacity: {
      default: 1,
      '@media (prefers-reduced-motion: no-preference)': 0,
    },
  },
  at: (index: number) => ({ animationDelay: `${String(index * 70)}ms` }),
})
