import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { styles } from '~/components/LegalNotice.styles'
import { useT } from '~/i18n/LocaleContext'
import type { SourceCredit } from '~/lib/view/credits'

const LICENSE = 'https://creativecommons.org/licenses/by-sa/3.0/'
const GENERAL_SOURCES = [
  ['credits.wikiEn', 'https://onepiece.fandom.com/'],
  ['credits.wikiIt', 'https://onepiece.fandom.com/it/'],
  ['credits.fandomTerms', 'https://www.fandom.com/licensing'],
  ['credits.fandomTermsIt', 'https://www.fandom.com/it/licensing-it'],
  ['credits.fillerList', 'https://www.animefillerlist.com/shows/one-piece'],
] as const

/** Only the server-filtered references reach this component. */
export function SourceCredits({
  credits,
}: {
  credits: SourceCredit[]
}): ReactElement {
  const t = useT()
  return (
    <section id="sources">
      <h2 {...stylex.props(styles.heading)}>{t('credits.title')}</h2>
      <p {...stylex.props(styles.paragraph)}>{t('credits.intro')}</p>
      <LicenseNotices />
      <h3 {...stylex.props(styles.subheading)}>
        {t('credits.referencesTitle')}
      </h3>
      <p {...stylex.props(styles.paragraph)}>{t('credits.coverage')}</p>
      <p {...stylex.props(styles.paragraph)}>{t('credits.factCheck')}</p>
      <p {...stylex.props(styles.paragraph)}>{t('credits.bookmark')}</p>
      {credits.length === 0 ?
        <p>{t('credits.empty')}</p>
      : <ul {...stylex.props(styles.list)}>
          {credits.map((credit) => (
            <CreditEntry
              key={`${credit.name}-${String(credit.episode)}-${credit.scope}`}
              credit={credit}
            />
          ))}
        </ul>
      }
    </section>
  )
}

function CreditEntry({ credit }: { credit: SourceCredit }): ReactElement {
  const t = useT()
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
                href={LICENSE}
                {...stylex.props(styles.link)}
              >
                CC BY-SA 3.0 Unported
              </a>
            }
          </li>
        ))}
      </ul>
    </li>
  )
}

function LicenseNotices(): ReactElement {
  const t = useT()
  return (
    <>
      <h3 {...stylex.props(styles.subheading)}>{t('credits.licensesTitle')}</h3>
      <p {...stylex.props(styles.paragraph)}>{t('credits.software')}</p>
      <ul {...stylex.props(styles.list)}>
        <li>
          <a
            href="https://github.com/cosimochellini/one-piece-zero-spoiler/blob/main/LICENSE"
            {...stylex.props(styles.link)}
          >
            MIT
          </a>
        </li>
        <li>
          <a
            href="https://github.com/cosimochellini/one-piece-zero-spoiler/blob/main/LICENSE-SCOPE.md"
            {...stylex.props(styles.link)}
          >
            {t('credits.scopeNotice')}
          </a>
        </li>
      </ul>
      <p {...stylex.props(styles.paragraph)}>{t('credits.content')}</p>
      <SourceTerms />
    </>
  )
}

function SourceTerms(): ReactElement {
  const t = useT()
  return (
    <>
      <h3 {...stylex.props(styles.subheading)}>{t('credits.sourcesTitle')}</h3>
      <p {...stylex.props(styles.paragraph)}>{t('credits.external')}</p>
      <p {...stylex.props(styles.paragraph)}>{t('credits.wikiTerms')}</p>
      <p {...stylex.props(styles.paragraph)}>
        <a
          href={LICENSE}
          {...stylex.props(styles.link)}
        >
          CC BY-SA 3.0 Unported
        </a>
      </p>
      <p {...stylex.props(styles.paragraph)}>{t('credits.otherTerms')}</p>
      <ul {...stylex.props(styles.list)}>
        {GENERAL_SOURCES.map(([key, href]) => (
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
