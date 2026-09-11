/* Hallmark · pre-emit critique: P5 H4 E4 S5 R5 V4 */
/* Hallmark · genre: atmospheric · macrostructure: Catalogue · theme: Sea Chart
 *   (locked) · enrichment: Tier B hand-built SVG (CharacterCrest seals)
 * · nav: N9 edge-aligned (shared) · footer: Ft4 colophon (shared)
 * · idea: "a signal book — every flag on one chart, and the fog does not
 *   answer a search"
 * · differs from the previous build (Map / Diagram) on macrostructure; theme
 *   is the project's locked system and does not rotate */
import * as stylex from '@stylexjs/stylex'
import { createFileRoute } from '@tanstack/react-router'

import { CharacterGrid } from '~/components/CharacterGrid'
import { featuredCharacters } from '~/data/characters'
import { useT } from '~/i18n/LocaleContext'
import { isLocale } from '~/i18n/locales'
import { getDictionary, translate } from '~/i18n/translate'
import { useEpisode } from '~/lib/progress/EpisodeContext'
import {
  color,
  dur,
  ease,
  font,
  leading,
  space,
  text,
} from '~/styles/tokens.stylex'

export const Route = createFileRoute('/$locale/characters/')({
  head: ({ params }) => {
    if (!isLocale(params.locale)) return {}
    const dictionary = getDictionary(params.locale)

    return {
      meta: [
        { title: translate(dictionary, 'characters.pageTitle') },
        {
          name: 'description',
          content: translate(dictionary, 'characters.pageDescription'),
        },
      ],
    }
  },
  component: CharactersPage,
})

const settle = stylex.keyframes({
  from: { opacity: 0, transform: 'translateY(10px)' },
  to: { opacity: 1, transform: 'none' },
})

/**
 * The characters page (Hallmark macrostructure 11, Catalogue).
 *
 * A signal book: the brand line and a count, then twenty crests on one
 * uniform grid, in the order the anime meets them. No hero, no display
 * headline; the crests are the page. The search above the grid filters the
 * open characters, and the fogged ones sit in a band of their own that a
 * search never touches, which is the spoiler rule applied to a text field.
 */
function CharactersPage() {
  const t = useT()
  const { progress } = useEpisode()

  return (
    <main id="content" {...stylex.props(styles.page)}>
      <header {...stylex.props(styles.head, styles.enter, styles.at(0))}>
        <h1 {...stylex.props(styles.title)}>{t('characters.title')}</h1>
        <p {...stylex.props(styles.count)}>
          {t('characters.count', { count: featuredCharacters.length })}
        </p>
      </header>

      <div {...stylex.props(styles.enter, styles.at(1))}>
        <CharacterGrid entries={featuredCharacters} progress={progress} />
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
  // Wordmark-sized, not display-sized: a catalogue's heading is an inventory
  // header, and the count under it is a fact about the page.
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
