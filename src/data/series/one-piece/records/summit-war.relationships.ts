import type { Relationship, Timeline } from '~/data/types'

import { majorRelationships } from './summit-war.major.relationships'
import { supportingRelationships } from './summit-war.supporting.relationships'

/** All 71 debut characters have supported links; no whole-character omissions. */
export const summitWarRelationshipOmissions: Record<string, string> = {}

export const summitWarRelationships = {
  ...majorRelationships,
  ...supportingRelationships,
  kong: [
    {
      episode: 511,
      chapter: 594,
      value: [
        {
          character: 'sengoku',
          type: {
            en: 'Officer whose resignation he accepts',
            it: 'Ufficiale di cui accetta le dimissioni',
          },
          summary: {
            en: 'Kong accepts Sengoku’s resignation but keeps his record and rank intact.',
            it: 'Kong accetta le dimissioni di Sengoku ma ne conserva il grado e lo stato di servizio.',
          },
        },
        {
          character: 'monkey-d-garp',
          type: {
            en: 'Officer who steps down',
            it: 'Ufficiale che lascia l’incarico',
          },
          summary: {
            en: 'Kong keeps Garp’s rank on record after he steps down.',
            it: 'Kong conserva agli atti il grado di Garp dopo che ha lasciato l’incarico.',
          },
        },
      ],
    },
  ],
} satisfies Record<string, Timeline<Relationship[]>>
