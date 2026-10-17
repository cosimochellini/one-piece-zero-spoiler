// Creates or updates every label in `.github/labels.json` on GitHub; a label
// missing from the file is left alone. Run it after editing the file:
// `npm run labels:sync`.
import { execFileSync } from 'node:child_process'

import labels from '../.github/labels.json' with { type: 'json' }

for (const { name, color, description } of labels) {
  execFileSync(
    'gh',
    [
      'label',
      'create',
      name,
      '--color',
      color,
      '--description',
      description,
      '--force',
    ],
    { stdio: 'inherit' },
  )
}
