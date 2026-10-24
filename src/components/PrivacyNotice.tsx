import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { styles } from '~/components/LegalNotice.styles'
import { useT } from '~/i18n/LocaleContext'

const SOURCES = [
  [
    'privacy.garante',
    'https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/9677876',
  ],
  ['privacy.netlifyLogs', 'https://docs.netlify.com/build/functions/logs/'],
  ['privacy.netlifyTerms', 'https://www.netlify.com/trust-center/'],
  [
    'privacy.audit',
    'https://github.com/cosimochellini/one-piece-zero-spoiler/blob/main/docs/privacy-audit.md',
  ],
] as const

/** A public notice that never depends on the reader’s bookmark. */
export function PrivacyNotice(): ReactElement {
  const t = useT()

  return (
    <section id="privacy">
      <h2 {...stylex.props(styles.heading)}>{t('privacy.title')}</h2>
      <p {...stylex.props(styles.paragraph)}>{t('privacy.updated')}</p>
      <h3 {...stylex.props(styles.subheading)}>
        {t('privacy.controllerTitle')}
      </h3>
      <p {...stylex.props(styles.paragraph)}>{t('privacy.controller')}</p>
      <h3 {...stylex.props(styles.subheading)}>{t('privacy.serviceTitle')}</h3>
      <p {...stylex.props(styles.paragraph)}>{t('privacy.service')}</p>
      <h3 {...stylex.props(styles.subheading)}>{t('privacy.cookiesTitle')}</h3>
      <p {...stylex.props(styles.paragraph)}>{t('privacy.cookiesIntro')}</p>
      <ul {...stylex.props(styles.list)}>
        <li>{t('privacy.bookmark')}</li>
        <li>{t('privacy.language')}</li>
        <li>{t('privacy.trial')}</li>
      </ul>
      <p {...stylex.props(styles.paragraph)}>{t('privacy.attributes')}</p>
      <p {...stylex.props(styles.paragraph)}>{t('privacy.storage')}</p>
      <h3 {...stylex.props(styles.subheading)}>{t('privacy.controlTitle')}</h3>
      <p {...stylex.props(styles.paragraph)}>{t('privacy.control')}</p>
      <h3 {...stylex.props(styles.subheading)}>{t('privacy.hostingTitle')}</h3>
      <p {...stylex.props(styles.paragraph)}>{t('privacy.hosting')}</p>
      <p {...stylex.props(styles.paragraph)}>{t('privacy.logs')}</p>
      <p {...stylex.props(styles.paragraph)}>{t('privacy.terms')}</p>
      <h3 {...stylex.props(styles.subheading)}>{t('privacy.basesTitle')}</h3>
      <p {...stylex.props(styles.paragraph)}>{t('privacy.bases')}</p>
      <h3 {...stylex.props(styles.subheading)}>{t('privacy.rightsTitle')}</h3>
      <p {...stylex.props(styles.paragraph)}>{t('privacy.rights')}</p>
      <p {...stylex.props(styles.paragraph)}>
        <a
          href="https://github.com/cosimochellini/one-piece-zero-spoiler/issues/new?template=blank.md"
          {...stylex.props(styles.link)}
        >
          {t('privacy.contact')}
        </a>{' '}
        {t('privacy.contactHelp')}
      </p>
      <h3 {...stylex.props(styles.subheading)}>{t('privacy.sourcesTitle')}</h3>
      <ul {...stylex.props(styles.list)}>
        {SOURCES.map(([key, href]) => (
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
    </section>
  )
}
