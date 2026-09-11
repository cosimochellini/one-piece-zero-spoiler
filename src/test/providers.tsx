import { render } from '@testing-library/react'
import type { ReactElement } from 'react'

import { LocaleProvider } from '~/i18n/LocaleContext'
import type { Locale } from '~/i18n/locales'
import { EpisodeProvider } from '~/lib/progress/EpisodeContext'
import type { Progress } from '~/lib/progress/episode'

export type RenderOptions = {
  readonly locale?: Locale
  readonly progress?: Progress
}

/**
 * Renders a component inside the two contexts every part of the UI assumes.
 *
 * `progress` stands in for what the server read out of the cookie, which is
 * the only way a test can reproduce the first paint faithfully.
 */
export function renderWithProviders(
  ui: ReactElement,
  { locale = 'en', progress = null }: RenderOptions = {},
) {
  return render(
    <LocaleProvider locale={locale}>
      <EpisodeProvider initialProgress={progress}>{ui}</EpisodeProvider>
    </LocaleProvider>,
  )
}
