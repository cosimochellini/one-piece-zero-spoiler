/* Hallmark · pre-emit critique: P5 H5 E4 S5 R4 V5 */
/* Hallmark · genre: atmospheric · macrostructure: Map / Diagram, v2 led by
 *   a countdown · theme: Sea Chart (locked) · enrichment: Tier B hand-built
 *   SVG (the whole series as a strip of cells) · nav: N9 (shared) · footer:
 *   Ft4 (shared) · mobile first
 * · idea: "how far the next filler is", said in one sentence over six
 *   calendar cells; then the runs to skip and the catalogue, both by saga
 *   with the saga pinned while it scrolls, the catalogue folded to the
 *   reader's own saga
 * · theme is the project's locked system and does not rotate */
import * as stylex from '@stylexjs/stylex'
import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { ArchivePage } from '~/components/ArchivePage'
import { CatalogueSection } from '~/components/CatalogueSection'
import { EpisodeMark } from '~/components/EpisodeMark'
import { FillerCatalogue } from '~/components/FillerCatalogue'
import { FillerCountdown } from '~/components/FillerCountdown'
import { FillerRanges } from '~/components/FillerRanges'
import { FillerLegend, FillerStrip } from '~/components/FillerStrip'
import { useT } from '~/i18n/LocaleContext'
import { isLocale } from '~/i18n/locales'
import { useBookmark } from '~/lib/progress/BookmarkContext'
import { absoluteEpisodeOf, modeOf } from '~/lib/progress/episode'
import { describeNamedPage } from '~/routes/$locale/-head'
import { usePeek } from '~/routes/$locale/-peek'
import { liftFiller, loadFiller } from '~/server/api'
import { color, leading, space, text } from '~/styles/tokens.stylex'

export const Route = createFileRoute('/$locale/filler')({
  // Awaited, so a skip range's `#ep-54` lands on a row that is in the first
  // paint.
  loader: async ({ context }) =>
    loadFiller({ data: { locale: context.locale } }),
  head: ({ match, params }) => {
    return isLocale(params.locale) ?
        describeNamedPage({
          descriptionKey: 'filler.pageDescription',
          kind: 'index',
          locale: params.locale,
          pathname: match.pathname,
          titleKey: 'filler.pageTitle',
        })
      : {}
  },
  component: FillerPage,
})

/**
 * The filler guide (Hallmark macrostructure 19, Map / Diagram), reached by
 * its address only: it is not in the bar.
 *
 * It leads with the countdown, the answer the page is for: how far the next
 * filler is from the reader's episode. The runs to skip come next, by saga,
 * then the strip of the whole series, then the catalogue, one row per entry,
 * under fog past the bookmark like every other page.
 */
function FillerPage(): ReactElement {
  const t = useT()
  const { bookmark } = useBookmark()
  const { aired, countdown, groups, marks, skipGroups, unnumbered } =
    Route.useLoaderData()
  const peek = usePeek(liftFiller)
  const mode = modeOf(bookmark)

  return (
    <ArchivePage
      count={t('filler.count', { episodes: marks.length, unnumbered })}
      title={t('filler.title')}
    >
      <div {...stylex.props(styles.stack)}>
        {bookmark === null && <Notice />}
        {countdown !== null && (
          <FillerCountdown
            aired={aired}
            countdown={countdown}
            mode={mode}
            peek={peek}
          />
        )}
        <CatalogueSection
          headingId="filler-skip"
          lede={t('filler.skipLede')}
          title={t('filler.skipTitle')}
        >
          <FillerRanges
            groups={skipGroups}
            mode={mode}
          />
        </CatalogueSection>
        <CatalogueSection
          headingId="filler-strip"
          lede={t('filler.stripLede', { aired })}
          title={t('filler.stripTitle')}
        >
          <FillerStrip
            aired={aired}
            here={bookmark === null ? null : absoluteEpisodeOf(bookmark)}
            marks={marks}
          />
          <FillerLegend hasBookmark={bookmark !== null && mode !== 'chapter'} />
        </CatalogueSection>
        <CatalogueSection
          headingId="filler-catalogue"
          lede={t('filler.catalogueLede')}
          title={t('filler.catalogueTitle')}
        >
          <FillerCatalogue
            groups={groups}
            mode={mode}
            peek={peek}
          />
        </CatalogueSection>
      </div>
    </ArchivePage>
  )
}

/** What a reader with no bookmark is told, with the control to set one. */
function Notice(): ReactElement {
  const t = useT()

  return (
    <div {...stylex.props(styles.notice)}>
      <p {...stylex.props(styles.noticeText)}>{t('filler.noBookmark')}</p>
      <EpisodeMark placement="fold" />
    </div>
  )
}

const styles = stylex.create({
  stack: {
    gap: { 'default': space.xl, '@media (min-width: 40rem)': space.xl2 },
    display: 'grid',
  },
  notice: { gap: space.md, display: 'grid', justifyItems: 'start' },
  noticeText: {
    margin: 0,
    color: color.ink2,
    fontSize: text.base,
    lineHeight: leading.body,
    maxWidth: '58ch',
  },
})
