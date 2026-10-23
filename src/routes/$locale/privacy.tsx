import { createFileRoute, redirect } from '@tanstack/react-router'

/** The privacy notice moved into the legal page; shared links still land on it. */
export const Route = createFileRoute('/$locale/privacy')({
  beforeLoad: ({ params }) => {
    throw redirect({
      to: '/$locale/legal',
      params,
      hash: 'privacy',
      statusCode: 301,
    })
  },
})
