/* Hallmark · pre-emit critique: P5 H4 E4 S5 R5 V5 */
/* Hallmark · genre: atmospheric · macrostructure: Narrative Workflow · theme:
 *   Sea Chart (locked) · enrichment: Tier B hand-built SVG (PortPlate frames,
 *   five new place drawings) · nav: N9 edge-aligned (shared) · footer: Ft4
 *   colophon (shared)
 * · idea: "a ship's log — the ports in the order the ship put in, the
 *   reader's episode a horizon down the spine"
 * · differs from the previous build (Catalogue) on macrostructure; theme is
 *   the project's locked system and does not rotate */
import * as stylex from '@stylexjs/stylex'
import { createFileRoute } from '@tanstack/react-router'

import { PortLog } from '~/components/PortLog'
import { orderByMode } from '~/data/order'
import { places } from '~/data/places'
import { useT } from '~/i18n/LocaleContext'
import { isLocale } from '~/i18n/locales'
import { getDictionary, translate } from '~/i18n/translate'
import { useBookmark } from '~/lib/progress/BookmarkContext'
import { modeOf } from '~/lib/progress/episode'
import {
  color,
  dur,
  ease,
  font,
  leading,
  space,
  text,
} from '~/styles/tokens.stylex'

export const Route = createFileRoute('/$locale/places/')({
  head: ({ params }) => {
    if (!isLocale(params.locale)) return {}
    const dictionary = getDictionary(params.locale)

    return {
      meta: [
        { title: translate(dictionary, 'places.pageTitle') },
        {
          name: 'description',
          content: translate(dictionary, 'places.pageDescription'),
        },
      ],
    }
  },
  component: PlacesPage,
})

const settle = stylex.keyframes({
  from: { opacity: 0, transform: 'translateY(10px)' },
  to: { opacity: 1, transform: 'none' },
})

/**
 * The places page (Hallmark macrostructure 14, Narrative Workflow).
 *
 * A ship's log: the brand line and a count, then every place as a
 * numbered port of call down one spine, in the order the ship puts in at
 * them. No hero and no display headline; the log is the page. The reader's
 * episode is drawn as a horizon on the spine, and every port below it keeps
 * its number and its episode while its name, drawing and colour stay out of
 * the served HTML.
 */
function PlacesPage() {
  const t = useT()
  const { bookmark } = useBookmark()

  return (
    <main id="content" {...stylex.props(styles.page)}>
      <header {...stylex.props(styles.head, styles.enter, styles.at(0))}>
        <h1 {...stylex.props(styles.title)}>{t('places.title')}</h1>
        <p {...stylex.props(styles.count)}>
          {t('places.count', { count: places.length })}
        </p>
      </header>

      <div {...stylex.props(styles.enter, styles.at(1))}>
        <PortLog
          entries={orderByMode(places, modeOf(bookmark))}
          bookmark={bookmark}
        />
      </div>
    </main>
  )
}

const styles = stylex.create({
  page: {
    display: 'grid',
    gap: space.xl,
    paddingBlockEnd: space.xl3,
    paddingBlockStart: space.lg,
    paddingInline: space.md,
  },
  // Wordmark-sized, as on the signal book: a log's heading is the name of
  // the book, and the count under it is a fact about the page.
  head: {
    display: 'grid',
    gap: space.xs,
  },
  title: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.xl,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    minWidth: 0,
    overflowWrap: 'anywhere',
  },
  count: {
    color: color.muted,
    fontSize: text.base,
    lineHeight: leading.body,
    maxWidth: '58ch',
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
