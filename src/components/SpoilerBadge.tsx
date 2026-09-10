export type SpoilerBadgeProps = {
  readonly label: string
  readonly revealed?: boolean
  readonly onReveal?: () => void
}

export function SpoilerBadge({
  label,
  revealed = false,
  onReveal,
}: SpoilerBadgeProps) {
  return (
    <span>
      <span data-testid="spoiler-label">{revealed ? label : 'Hidden'}</span>
      {!revealed && onReveal ? (
        <button type="button" onClick={onReveal}>
          Reveal
        </button>
      ) : null}
    </span>
  )
}
