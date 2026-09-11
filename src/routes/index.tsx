import { createFileRoute, redirect } from '@tanstack/react-router'

import { readPreferredLocale } from '~/i18n/readLocale'

/**
 * `/` holds no content. Every page lives under a locale prefix, so the bare
 * root works out the reader's language once and sends them to the real
 * address, which is the one they can bookmark and share.
 */
export const Route = createFileRoute('/')({
  beforeLoad: () => {
    throw redirect({
      to: '/$locale',
      params: { locale: readPreferredLocale() },
      // A negotiated guess, not a permanent fact about this URL: a reader who
      // switches language must not be sent back here by a cached 301.
      statusCode: 302,
    })
  },
})
