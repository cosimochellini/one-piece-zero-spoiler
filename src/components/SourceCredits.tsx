import * as stylex from '@stylexjs/stylex'
import type { ReactElement, ReactNode } from 'react'

import { styles } from '~/components/LegalNotice.styles'
import { useLocale, useSeriesT, useT } from '~/i18n/LocaleContext'
import { LocaleProvider } from '~/i18n/LocaleProvider'
import type { SeriesCopy } from '~/i18n/types'
import type {
  SeriesCredits,
  SeriesSources,
  SourceCredit,
} from '~/lib/view/credits'

/** A part of the page in one series' own words. */
export function InSeries({
  copy,
  children,
}: {
  children: ReactNode
  copy: SeriesCopy
}): ReactElement {
  const { locale } = useLocale()

  return (
    <LocaleProvider
      copy={copy}
      locale={locale}
    >
      {children}
    </LocaleProvider>
  )
}

/** Only the server-filtered references reach this component. */
export function SourceCredits({
  series,
}: {
  series: SeriesCredits[]
}): ReactElement {
  const t = useT()
  return (
    <section id="sources">
      <h2 {...stylex.props(styles.heading)}>{t('credits.title')}</h2>
      <p {...stylex.props(styles.paragraph)}>{t('credits.intro')}</p>
      <LicenseNotices series={series} />
      <h3 {...stylex.props(styles.subheading)}>
        {t('credits.referencesTitle')}
      </h3>
      {series.map(({ copy }) => (
        <InSeries
          key={copy.slug}
          copy={copy}
        >
          <Coverage />
        </InSeries>
      ))}
      <p {...stylex.props(styles.paragraph)}>{t('credits.factCheck')}</p>
      <p {...stylex.props(styles.paragraph)}>{t('credits.bookmark')}</p>
      {series.every(({ credits }) => credits.length === 0) ?
        <p>{t('credits.empty')}</p>
      : <ul {...stylex.props(styles.list)}>
          {series.map(({ copy, credits, sources }) => (
            <InSeries
              key={copy.slug}
              copy={copy}
            >
              {credits.map((credit) => (
                <CreditEntry
                  key={`${credit.name}-${String(credit.episode)}-${credit.scope}`}
                  credit={credit}
                  licenses={sources.licenses}
                />
              ))}
            </InSeries>
          ))}
        </ul>
      }
    </section>
  )
}

/** Which of a series' entries the references below cover. */
function Coverage(): ReactElement {
  const t = useSeriesT()
  return <p {...stylex.props(styles.paragraph)}>{t('credits.coverage')}</p>
}

function CreditEntry({
  credit,
  licenses,
}: {
  credit: SourceCredit
  licenses: SeriesSources['licenses']
}): ReactElement {
  // The page's own copy, which is the series' here: a filler entry and the
  // official synopsis are One Piece's, and only its sample files them.
  const { t } = useLocale()
  return (
    <li>
      <h4>
        {credit.name}
        {credit.episode === undefined ? null : (
          ` · ${t('credits.episode', { episode: credit.episode })}`
        )}
      </h4>
      <p>{t(`credits.scope.${credit.scope}`)}</p>
      {credit.scope === 'summary' ?
        <p>{t('credits.replacement')}</p>
      : null}
      <ul {...stylex.props(styles.list)}>
        {credit.sources.map(({ kind, url }) => (
          <li key={url}>
            <a
              href={url}
              {...stylex.props(styles.link)}
            >
              {t(`credits.source.${kind}`)}
            </a>{' '}
            {kind === 'official' ?
              t('credits.noOpenLicense')
            : <a
                href={licenses[kind][1]}
                {...stylex.props(styles.link)}
              >
                {licenses[kind][0]}
              </a>
            }
          </li>
        ))}
      </ul>
    </li>
  )
}

function LicenseNotices({ series }: { series: SeriesCredits[] }): ReactElement {
  const t = useT()
  return (
    <>
      <h3 {...stylex.props(styles.subheading)}>{t('credits.licensesTitle')}</h3>
      <p {...stylex.props(styles.paragraph)}>{t('credits.software')}</p>
      <ul {...stylex.props(styles.list)}>
        <li>
          <a
            href="https://github.com/cosimochellini/zero-spoiler/blob/main/LICENSE"
            {...stylex.props(styles.link)}
          >
            MIT
          </a>
        </li>
        <li>
          <a
            href="https://github.com/cosimochellini/zero-spoiler/blob/main/LICENSE-SCOPE.md"
            {...stylex.props(styles.link)}
          >
            {t('credits.scopeNotice')}
          </a>
        </li>
      </ul>
      <p {...stylex.props(styles.paragraph)}>{t('credits.content')}</p>
      <h3 {...stylex.props(styles.subheading)}>{t('credits.sourcesTitle')}</h3>
      <p {...stylex.props(styles.paragraph)}>{t('credits.external')}</p>
      {series.map(({ copy, sources }) => (
        <InSeries
          key={copy.slug}
          copy={copy}
        >
          <SourceTerms sources={sources} />
        </InSeries>
      ))}
    </>
  )
}

/** A series' sources: their terms, their licenses and where they are. */
function SourceTerms({ sources }: { sources: SeriesSources }): ReactElement {
  // The page's own copy, which is the series' here: its links are its keys.
  const { t } = useLocale()
  const { licenses, links } = sources
  // One paragraph per license, though both wikis may share one.
  const shown = Object.values(licenses).filter(
    ([, href], index, all) =>
      all.findIndex((other) => other[1] === href) === index,
  )
  return (
    <>
      <p {...stylex.props(styles.paragraph)}>{t('credits.wikiTerms')}</p>
      {shown.map(([name, href]) => (
        <p
          key={href}
          {...stylex.props(styles.paragraph)}
        >
          <a
            href={href}
            {...stylex.props(styles.link)}
          >
            {name}
          </a>
        </p>
      ))}
      <p {...stylex.props(styles.paragraph)}>{t('credits.otherTerms')}</p>
      <ul {...stylex.props(styles.list)}>
        {links.map(([key, href]) => (
          <li key={key}>
            <a
              href={href}
              {...stylex.props(styles.link)}
            >
              {t(key)}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}
