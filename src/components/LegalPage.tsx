import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { styles } from '~/components/LegalNotice.styles'
import { PrivacyNotice } from '~/components/PrivacyNotice'
import { SERIES_SOURCES } from '~/components/seriesSources'
import { InSeries, SourceCredits } from '~/components/SourceCredits'
import { useSeriesT, useT } from '~/i18n/LocaleContext'
import type { SeriesCredits } from '~/lib/view/credits'

/** Every notice on one page, so the footer carries a single link. */
export function LegalPage({
  series,
}: {
  series: SeriesCredits[]
}): ReactElement {
  const t = useT()

  return (
    <main
      id="content"
      {...stylex.props(styles.page)}
    >
      <h1 {...stylex.props(styles.title)}>{t('legal.title')}</h1>
      <section id="project">
        <h2 {...stylex.props(styles.heading)}>{t('legal.projectTitle')}</h2>
        <p {...stylex.props(styles.paragraph)}>{t('legal.unofficial')}</p>
        {series.map(({ copy }) => (
          <InSeries
            key={copy.slug}
            copy={copy}
          >
            <Rights url={SERIES_SOURCES[copy.slug].rights} />
          </InSeries>
        ))}
        <p {...stylex.props(styles.paragraph)}>
          <a
            href="https://github.com/cosimochellini/zero-spoiler/issues/new?template=blank.md"
            {...stylex.props(styles.link)}
          >
            {t('legal.contact')}
          </a>{' '}
          {t('legal.contactHelp')}
        </p>
      </section>
      <PrivacyNotice />
      <SourceCredits series={series} />
    </main>
  )
}

/** A series' rights holders, in its own words, and where they say so. */
function Rights({ url }: { url: string }): ReactElement {
  const t = useSeriesT()

  return (
    <p {...stylex.props(styles.paragraph)}>
      {t('legal.credits')}{' '}
      <a
        href={url}
        {...stylex.props(styles.link)}
      >
        {t('legal.creditSource')}
      </a>
    </p>
  )
}
