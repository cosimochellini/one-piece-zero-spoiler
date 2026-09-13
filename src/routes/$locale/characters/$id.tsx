/* Hallmark · pre-emit critique: P5 H5 E4 S5 R4 V4 */
/* Hallmark · genre: atmospheric · macrostructure: Split Studio · theme: Sea
 *   Chart (locked) · enrichment: Tier B hand-built SVG (crest seal + route
 *   strip) · nav: N9 (shared) · footer: Ft4 (shared)
 * · structure: three diptychs that alternate — crest | dossier · route
 *   position | strip · nearby crests as one row
 * · idea: "a page from the signal book, opened flat" */
import * as stylex from '@stylexjs/stylex'
import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { CharacterCard } from '~/components/CharacterCard'
import { CharacterCrest } from '~/components/CharacterCrest'
import { CharacterFacts } from '~/components/CharacterFacts'
import { CharacterCardList } from '~/components/CharacterGrid'
import { RouteStrip } from '~/components/RouteStrip'
import { SpoilerVeil } from '~/components/SpoilerVeil'
import {
  chartWith,
  dossierOf,
  getCharacter,
  nearbyCharacters,
  routePositionOf,
} from '~/data/characters'
import type { Entity, EntityKind } from '~/data/types'
import { useLocale } from '~/i18n/LocaleContext'
import { isLocale } from '~/i18n/locales'
import type { TranslationKey } from '~/i18n/types'
import { useBookmark, useThreshold } from '~/lib/progress/BookmarkContext'
import { modeOf } from '~/lib/progress/episode'
import { isRevealed } from '~/lib/progress/spoiler'

import { describeDocument } from './-$id.head'
import { Neighbour } from './-$id.neighbour'
import { styles } from './-$id.styles'

const KIND_KEY: Readonly<Record<EntityKind, TranslationKey>> = {
  character: 'kind.character',
  arc: 'kind.arc',
  place: 'kind.place',
  ship: 'kind.ship',
}

// The three bands in DOM order. Named rather than counted at the call, so a
// band inserted in the middle is one edit here and not three down the page.
const BAND = { dossier: 0, route: 1, nearby: 2 } as const

// One row of crests, which is what the card list holds on a wide screen
// before it wraps.
const NEARBY_COUNT = 5

export const Route = createFileRoute('/$locale/characters/$id')({
  // The one decision the page turns on is made here, on the server, from the
  // bookmark the root route read: the document title must not carry a name
  // the reader has not reached, and a title is set before any component runs.
  loader: ({ params, context }) => {
    const entity = getCharacter(params.id)
    if (entity === undefined) {
      throw notFound()
    }

    return {
      id: entity.id,
      revealed: isRevealed(entity, context.initialBookmark),
      // The unit the fogged description counts in; the head has no hook to
      // ask, so the loader carries it.
      mode: modeOf(context.initialBookmark),
    }
  },
  head: ({ params, loaderData }) => {
    if (loaderData === undefined || !isLocale(params.locale)) {
      return {}
    }
    const entity = getCharacter(loaderData.id)
    if (entity === undefined) {
      return {}
    }

    return {
      meta: describeDocument({
        entity,
        locale: params.locale,
        mode: loaderData.mode,
        revealed: loaderData.revealed,
      }),
    }
  },
  component: CharacterPage,
  notFoundComponent: CharacterNotFound,
})

/**
 * A character's page (Hallmark macrostructure 15, Split Studio).
 *
 * Three diptychs down the page, alternating sides. The first is the crest
 * beside the dossier: kind and episode in mono, the name as the only display
 * line, the role, the summary, then the facts as the reader's bookmark knows
 * them and the log entry. The second is the record's place on the route
 * beside a strip of the whole route with this waypoint ringed, and the two
 * records filed either side of it. The third is one row of the listed
 * characters filed nearest on the route.
 *
 * Under fog the crest and the dossier are covered together and the title is
 * generic; the strip still shows where on the route the page sits, because
 * "waypoint 23 of 35" is the promise and not the spoiler.
 */
function CharacterPage(): null | ReactElement {
  const { id } = Route.useLoaderData()

  // Cannot be undefined: the loader threw `notFound` for any id that is.
  const entity = getCharacter(id)
  if (entity === undefined) {
    return null
  }

  return (
    <main
      id="content"
      {...stylex.props(styles.page)}
    >
      <p {...stylex.props(styles.back, styles.enter, styles.at(BAND.dossier))}>
        <BackLink />
      </p>

      <DossierDiptych entity={entity} />
      <RouteDiptych entity={entity} />
      <NearbyRow entity={entity} />
    </main>
  )
}

/** What every section of the page is about. */
type SectionProps = { readonly entity: Entity }

/**
 * The crest beside the dossier: the page's first diptych.
 *
 * The two halves are veiled separately but on the same condition, because a
 * covered page must carry neither the drawing nor the words in its HTML –
 * blurring either one would leave the answer in the page source.
 */
function DossierDiptych({ entity }: SectionProps): ReactElement {
  return (
    <section
      {...stylex.props(styles.diptych, styles.enter, styles.at(BAND.dossier))}
    >
      <CrestPlate entity={entity} />
      <DossierColumn entity={entity} />
    </section>
  )
}

/** The seal, framed. Under fog it is drawn empty rather than blurred. */
function CrestPlate({ entity }: SectionProps): ReactElement {
  const { bookmark } = useBookmark()

  return (
    <SpoilerVeil
      gated={entity}
      // A bare seal under fog: the drawing and its colour stay out of the
      // served HTML along with the name.
      placeholder={
        <div {...stylex.props(styles.plate)}>
          <CharacterCrest />
        </div>
      }
      revealed={isRevealed(entity, bookmark)}
      strength="media"
    >
      <div {...stylex.props(styles.plate)}>
        <CharacterCrest visual={entity.visual} />
      </div>
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
function DossierColumn({ entity }: SectionProps): ReactElement {
  const { t } = useLocale()
  const threshold = useThreshold()
  const { bookmark } = useBookmark()

  return (
    <div {...stylex.props(styles.dossier)}>
      <p {...stylex.props(styles.meta)}>
        <span {...stylex.props(styles.kind)}>{t(KIND_KEY[entity.kind])}</span>
        <span {...stylex.props(styles.episode)}>
          {threshold('character.opensAt', entity)}
        </span>
      </p>

      <SpoilerVeil
        gated={entity}
        placeholder={
          <div {...stylex.props(styles.words)}>
            <h1 {...stylex.props(styles.name)}>{t('character.foggedName')}</h1>
            <p {...stylex.props(styles.summary)}>
              {threshold('character.foggedDescription', entity)}
            </p>
          </div>
        }
        revealed={isRevealed(entity, bookmark)}
      >
        <DossierWords entity={entity} />
      </SpoilerVeil>
    </div>
  )
}

/** The name, the role, the sentence, the facts and the log entry. */
function DossierWords({ entity }: SectionProps): ReactElement {
  const { locale } = useLocale()
  const { bookmark } = useBookmark()

  const dossier = dossierOf(entity)
  const role = dossier?.role

  return (
    <div {...stylex.props(styles.words)}>
      <h1 {...stylex.props(styles.name)}>{entity.name[locale]}</h1>
      {role === undefined ? null : (
        <p {...stylex.props(styles.role)}>{role[locale]}</p>
      )}
      <p {...stylex.props(styles.summary)}>{entity.summary[locale]}</p>
      {dossier === undefined ? null : (
        <>
          <CharacterFacts
            bookmark={bookmark}
            dossier={dossier}
          />
          <p {...stylex.props(styles.entry)}>{dossier.log[locale]}</p>
        </>
      )}
    </div>
  )
}

/**
 * Where the record sits on the route, beside the strip that draws it.
 *
 * The chart is ordered in the reader's unit here rather than once for the
 * page, so "waypoint 23 of 66" and the marks on the strip are counted from
 * the same list and cannot disagree.
 */
function RouteDiptych({ entity }: SectionProps): ReactElement {
  const { t } = useLocale()
  const { bookmark } = useBookmark()

  const ordered = chartWith(entity, modeOf(bookmark))
  const position = routePositionOf(entity, ordered)
  const positionLabel = t('character.position', {
    index: position.index + 1,
    total: position.total,
  })

  return (
    <section
      aria-labelledby="route-position"
      {...stylex.props(
        styles.diptych,
        styles.reversed,
        styles.enter,
        styles.at(BAND.route),
      )}
    >
      <div {...stylex.props(styles.dossier)}>
        <h2
          id="route-position"
          {...stylex.props(styles.sectionTitle)}
        >
          {t('character.routeTitle')}
        </h2>
        <p {...stylex.props(styles.position)}>{positionLabel}</p>
        <p {...stylex.props(styles.lede)}>{t('character.positionLede')}</p>

        <dl {...stylex.props(styles.neighbours)}>
          <Neighbour
            bookmark={bookmark}
            empty={t('character.routeStart')}
            entry={position.previous}
            label={t('character.before')}
          />
          <Neighbour
            bookmark={bookmark}
            empty={t('character.routeEnd')}
            entry={position.next}
            label={t('character.after')}
          />
        </dl>
      </div>
      <div {...stylex.props(styles.stripBand)}>
        <RouteStrip
          bookmark={bookmark}
          current={entity}
          entries={ordered}
          label={positionLabel}
        />
      </div>
    </section>
  )
}

/**
 * The characters filed nearest this one on the route, as one row of crests.
 *
 * Nearness is measured in thresholds, so the row is the reader's own
 * neighbourhood of the story rather than an editorial "see also".
 */
function NearbyRow({ entity }: SectionProps): ReactElement {
  const { t } = useLocale()
  const { bookmark } = useBookmark()

  return (
    <section
      aria-labelledby="nearby"
      {...stylex.props(styles.nearby, styles.enter, styles.at(BAND.nearby))}
    >
      <div {...stylex.props(styles.nearbyHead)}>
        <h2
          id="nearby"
          {...stylex.props(styles.sectionTitle)}
        >
          {t('character.nearbyTitle')}
        </h2>
        <p {...stylex.props(styles.lede)}>{t('character.nearbyLede')}</p>
      </div>
      <CharacterCardList>
        {nearbyCharacters(entity, NEARBY_COUNT).map((near) => {
          return (
            <CharacterCard
              key={near.id}
              entity={near}
              revealed={isRevealed(near, bookmark)}
            />
          )
        })}
      </CharacterCardList>
    </section>
  )
}

/** Hallmark C3: a word, an arrow, a rule. It is the page's one way back. */
function BackLink(): ReactElement {
  const { locale, t } = useLocale()

  return (
    <Link
      params={{ locale }}
      to="/$locale/characters"
      {...stylex.props(styles.backLink)}
    >
      ← {t('character.back')}
    </Link>
  )
}

/** `/characters/<not-a-character>`: says so, and points at the book. */
function CharacterNotFound(): ReactElement {
  const { t } = useLocale()

  return (
    <main
      id="content"
      {...stylex.props(styles.page)}
    >
      <div {...stylex.props(styles.words)}>
        <h1 {...stylex.props(styles.name)}>{t('character.notFoundTitle')}</h1>
        <p {...stylex.props(styles.summary)}>{t('character.notFoundBody')}</p>
        <p>
          <BackLink />
        </p>
      </div>
    </main>
  )
}
