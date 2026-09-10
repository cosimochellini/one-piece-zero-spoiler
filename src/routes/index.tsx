import { createFileRoute } from '@tanstack/react-router'

import { SpoilerBadge } from '../components/SpoilerBadge'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <main>
      <h1>One Piece Zero Spoiler</h1>
      <SpoilerBadge label="Latest chapter" />
    </main>
  )
}
