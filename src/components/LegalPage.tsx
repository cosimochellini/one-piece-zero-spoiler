import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { styles } from '~/components/LegalNotice.styles'
import { PrivacyNotice } from '~/components/PrivacyNotice'
import { SourceCredits } from '~/components/SourceCredits'
import { useT } from '~/i18n/LocaleContext'
import type { SourceCredit } from '~/lib/view/credits'

/** Every notice on one page, so the footer carries a single link. */
export function LegalPage({
  credits,
}: {
  credits: SourceCredit[]
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
        <p {...stylex.props(styles.paragraph)}>
          {t('legal.credits')}{' '}
          <a
            href="https://www.toei-animation.com/copyrights/"
            {...stylex.props(styles.link)}
          >
            {t('legal.creditSource')}
          </a>
        </p>
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
      <SourceCredits credits={credits} />
    </main>
  )
}
