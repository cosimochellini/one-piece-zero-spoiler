import * as stylex from '@stylexjs/stylex'
import { createFileRoute } from '@tanstack/react-router'
import { useMemo } from 'react'

import { ArchiveLedger } from '~/components/ArchiveLedger'
import { ArchiveTally } from '~/components/ArchiveTally'
import { EpisodeDial } from '~/components/EpisodeDial'
import { EpisodeFigure } from '~/components/EpisodeFigure'
import { entities } from '~/data/entities'
import { useT } from '~/i18n/LocaleContext'
import { useEpisode } from '~/lib/progress/EpisodeContext'
import { isRevealed } from '~/lib/progress/spoiler'
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

// The page's one load orchestration: the four bands settle in DOM order, the
// last of them 210ms in, well under the half-second cap. Only `opacity` and
// `transform` move, so it composites.
const settle = stylex.keyframes({
  from: { opacity: 0, transform: 'translateY(10px)' },
  to: { opacity: 1, transform: 'none' },
})

const enter = stylex.create({
  band: {
    animationDuration: dur.long,
    animationFillMode: 'forwards',
    // Guarded rather than overridden: with reduced motion requested the
    // sections are simply present, and nothing depends on an animation having
    // run.
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

export const Route = createFileRoute('/$locale/')({
  component: Landing,
})

/**
 * The landing page (Hallmark macrostructure 04, Stat-Led).
 *
 * The giant figure is the reader's own episode, so the page's headline number
 * is the one number on it that cannot be invented. Everything below qualifies
 * it: the ledger shows where the line currently falls, the tally counts the two
 * sides of that line, and the colophon explains the rules in running prose.
 *
 * Four sections, four different archetypes — H4 figure, F3 ledger, T4 tally,
 * S4 inline heads in the colophon — because a page whose every section is the
 * same shape reads as a template no matter what the shapes contain.
 */
function Landing() {
  const t = useT()
  const { progress } = useEpisode()

  // Sorted by threshold so the boundary between open and covered is a single
  // line across the table rather than a scatter.
  const ordered = useMemo(
    () =>
      [...entities].sort((a, b) => a.revealedAtEpisode - b.revealedAtEpisode),
    [],
  )
  const open = ordered.filter((entry) => isRevealed(entry, progress)).length

  return (
    <main id="content" {...stylex.props(styles.page)}>
      <section {...stylex.props(styles.hero, enter.band, enter.at(0))}>
        <EpisodeFigure />
        <h1 {...stylex.props(styles.headline)}>{t('hero.headline')}</h1>
        <p {...stylex.props(styles.lede)}>{t('hero.lede')}</p>
        <EpisodeDial />
      </section>

      <section {...stylex.props(styles.tallyBand, enter.band, enter.at(1))}>
        <ArchiveTally
          open={open}
          covered={ordered.length - open}
          filed={ordered.length}
        />
      </section>

      {/*
        Bottom-anchored section head (Hallmark S5): the ledger is the act and
        the label is a footnote to it. It also keeps the page free of the
        uppercase eyebrow that would otherwise open every section.
      */}
      <section {...stylex.props(styles.ledgerBand, enter.band, enter.at(2))}>
        <h2 {...stylex.props(styles.ledgerTitle)}>{t('ledger.title')}</h2>
        <ArchiveLedger entries={ordered} progress={progress} />
        <p {...stylex.props(styles.caption)}>
          {t('ledger.caption', { count: ordered.length })}
        </p>
      </section>

      {/*
        The rules, as running prose with inline lead-ins (Hallmark S4) rather
        than as a row of cards. Three short paragraphs say the same thing four
        tiles were saying, and they read like a colophon instead of a feature
        grid.
      */}
      <section {...stylex.props(styles.colophon, enter.band, enter.at(3))}>
        <p {...stylex.props(styles.note)}>
          <b {...stylex.props(styles.lead)}>{t('colophon.animeLead')}</b>{' '}
          {t('colophon.animeBody')}
        </p>
        <p {...stylex.props(styles.note)}>
          <b {...stylex.props(styles.lead)}>{t('colophon.bookmarkLead')}</b>{' '}
          {t('colophon.bookmarkBody')}
        </p>
        <p {...stylex.props(styles.note)}>
          <b {...stylex.props(styles.lead)}>{t('colophon.revealLead')}</b>{' '}
          {t('colophon.revealBody')}
        </p>
      </section>
    </main>
  )
}

const styles = stylex.create({
  page: {
    display: 'grid',
    paddingInline: space.md,
  },

  // Left-biased, no `min-height: 100vh`, and the bottom padding is 1.6x the
  // top so the hero sits into the page instead of floating between two equal
  // gaps.
  hero: {
    display: 'grid',
    gap: space.md,
    justifyItems: 'start',
    paddingBlockEnd: space.xl2,
    paddingBlockStart: space.lg,
  },
  headline: {
    color: color.ink,
    fontFamily: font.body,
    fontSize: text.xl,
    fontWeight: 700,
    letterSpacing: '-0.015em',
    lineHeight: leading.heading,
    maxWidth: '18ch',
    minWidth: 0,
    overflowWrap: 'anywhere',
  },
  lede: {
    color: color.ink2,
    fontSize: text.base,
    lineHeight: leading.body,
    maxWidth: '52ch',
  },

  // Tighter than the hero above it and the ledger below it. Uniform section
  // padding is what makes a page read as a template.
  tallyBand: {
    borderBlockStartColor: color.rule,
    borderBlockStartStyle: 'solid',
    borderBlockStartWidth: rule.hair,
    paddingBlock: space.lg,
  },

  ledgerBand: {
    display: 'grid',
    gap: space.md,
    paddingBlockEnd: space.xl,
    paddingBlockStart: space.xl,
  },
  ledgerTitle: {
    color: color.ink,
    fontFamily: font.body,
    fontSize: text.lg,
    fontWeight: 700,
    letterSpacing: '-0.01em',
    lineHeight: leading.heading,
    maxWidth: '22ch',
    minWidth: 0,
    overflowWrap: 'anywhere',
  },
  caption: {
    color: color.muted,
    fontFamily: font.body,
    fontSize: text.xs,
    fontStyle: 'italic',
    lineHeight: leading.body,
    maxWidth: '56ch',
  },

  // A wide left margin on the widest screens: the colophon is an aside, and
  // indenting it says so without a label.
  colophon: {
    display: 'grid',
    gap: space.md,
    marginInlineStart: { default: 0, '@media (min-width: 60rem)': space.xl4 },
    paddingBlockEnd: space.xl2,
    paddingBlockStart: space.lg,
  },
  note: {
    color: color.ink2,
    fontSize: text.base,
    lineHeight: leading.body,
    maxWidth: '58ch',
  },
  // The lead-in emerges inside the paragraph rather than sitting above it as a
  // heading, which is what keeps this section from becoming three more cards.
  lead: {
    color: color.ink,
    fontWeight: 700,
  },
})
