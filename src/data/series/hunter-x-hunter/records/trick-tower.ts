import type { PlaceDossier } from '~/data/types'

import type { HunterSaga, HunterVocabulary } from './saga'

const PRISONER = {
  it: 'Prigioniero della Torre di Lotta',
  en: 'Trick Tower prisoner',
}

/** Named scenes, rather than the cloaked appearances, in episodes 7–12. */
export const trickTower: HunterSaga = {
  name: { it: 'Esame Hunter', en: 'Hunter Exam' },
  entries: [
    {
      id: 'trick-tower',
      kind: 'place',
      revealedAtEpisode: 8,
      revealedAtChapter: 14,
      name: { it: 'Torre di Lotta', en: 'Trick Tower' },
      summary: {
        it: 'La prigione dove gli aspiranti affrontano la terza prova: scendere dalla cima fino alla base entro settantadue ore.',
        en: 'The prison where the applicants face the Third Phase: descend from the roof to the bottom within seventy-two hours.',
      },
      visual: { art: 'trick-tower', tint: 'sand' },
    },
    {
      id: 'lippo',
      kind: 'character',
      revealedAtEpisode: 8,
      revealedAtChapter: 17,
      name: { it: 'Rippo', en: 'Lippo' },
      summary: {
        it: 'Il direttore della Torre di Lotta, un Blacklist Hunter che controlla la terza prova attraverso le telecamere della prigione.',
        en: 'The warden of Trick Tower, a Blacklist Hunter monitoring the Third Phase through the prison’s cameras.',
      },
      visual: { art: 'lippo', tint: 'vermilion' },
    },
    {
      id: 'bendot',
      kind: 'character',
      revealedAtEpisode: 8,
      revealedAtChapter: 17,
      name: { it: 'Bendot', en: 'Bendot' },
      summary: {
        it: 'Un prigioniero della Torre di Lotta condannato a centonovantanove anni per rapina e omicidio.',
        en: 'A Trick Tower prisoner sentenced to one hundred and ninety-nine years for robbery and murder.',
      },
      visual: { art: 'bendot', tint: 'ocher' },
    },
    {
      id: 'sedokan',
      kind: 'character',
      revealedAtEpisode: 8,
      revealedAtChapter: 17,
      name: { it: 'Sedokan', en: 'Sedokan' },
      summary: {
        it: 'Un prigioniero della Torre di Lotta che deve scontare centoquarantanove anni per una serie di attentati.',
        en: 'A Trick Tower prisoner serving one hundred and forty-nine years for serial bombings.',
      },
      visual: { art: 'sedokan', tint: 'orange' },
    },
    {
      id: 'majtani',
      kind: 'character',
      revealedAtEpisode: 9,
      revealedAtChapter: 18,
      name: { it: 'Majtani', en: 'Majtani' },
      summary: {
        it: 'Un prigioniero che affronta Kurapika e cerca di intimidirlo fingendosi un membro della Brigata Fantasma.',
        en: 'A prisoner facing Kurapika who tries to intimidate him by pretending to be a member of the Phantom Troupe.',
      },
      visual: { art: 'majtani', tint: 'azure' },
    },
    {
      id: 'leroute',
      kind: 'character',
      revealedAtEpisode: 10,
      revealedAtChapter: 20,
      name: { it: 'Leroute', en: 'Leroute' },
      summary: {
        it: 'Una prigioniera che sfida Leorio a scommettere sul tempo che resta al suo gruppo per uscire dalla torre.',
        en: 'A prisoner who challenges Leorio to wager the time his group has left to escape the tower.',
      },
      visual: { art: 'leroute', tint: 'pink' },
    },
    {
      id: 'johness',
      kind: 'character',
      revealedAtEpisode: 11,
      revealedAtChapter: 21,
      name: { it: 'Johnes', en: 'Johness' },
      summary: {
        it: 'Un assassino rinchiuso nella Torre di Lotta, che Leorio riconosce prima dell’ultimo incontro dei cinque aspiranti contro i prigionieri.',
        en: 'A murderer held in Trick Tower, whom Leorio recognizes before the five applicants’ last match against the prisoners.',
      },
      visual: { art: 'johness', tint: 'wine' },
    },
    {
      id: 'togari',
      kind: 'character',
      source: 'episode',
      revealedAtEpisode: 10,
      revealedAtChapter: 19,
      name: { it: 'Togari', en: 'Togari' },
      summary: {
        it: 'Un ex esaminatore che aspetta Hisoka nella Torre di Lotta per vendicarsi delle ferite subite durante l’esame precedente.',
        en: 'A former examiner waiting for Hisoka in Trick Tower to avenge the wounds he received during the previous exam.',
      },
      visual: { art: 'togari', tint: 'ice' },
    },
  ],
  dossiers: {
    lippo: {
      role: { it: 'Direttore della Torre di Lotta', en: 'Trick Tower warden' },
      log: {
        it: 'Segue gli aspiranti sui monitor e dà ordini ai prigionieri. Ha promesso di ridurre la loro pena di un anno per ogni ora con cui riescono a rallentare gli aspiranti.',
        en: 'He watches the applicants on monitors and gives orders to the prisoners. He has promised to shorten their sentences by one year for every hour they delay the applicants.',
      },
      status: [{ episode: 8, chapter: 17, value: 'alive' }],
      affiliation: [
        {
          episode: 8,
          chapter: 17,
          value: { it: 'Associazione Hunter', en: 'Hunter Association' },
        },
      ],
    },
    bendot: {
      role: PRISONER,
      log: {
        it: 'È il primo prigioniero a sfidare il gruppo di Gon. Propone un combattimento che finisce con la resa o la morte di uno dei due, ma Tonpa si arrende appena comincia.',
        en: 'He is the first prisoner to challenge Gon’s group. He proposes a fight ending in surrender or death, but Tonpa gives up as soon as it begins.',
      },
      status: [{ episode: 8, chapter: 17, value: 'alive' }],
      affiliation: [{ episode: 8, chapter: 17, value: PRISONER }],
    },
    sedokan: {
      role: PRISONER,
      log: {
        it: 'Si offre per il secondo incontro contro il gruppo di Gon. Non punta sulla forza fisica: vuole rallentare gli aspiranti e ottenere una riduzione della pena.',
        en: 'He volunteers for the second match against Gon’s group. He does not rely on physical strength: he wants to delay the applicants and reduce his sentence.',
      },
      status: [{ episode: 8, chapter: 17, value: 'alive' }],
      affiliation: [{ episode: 8, chapter: 17, value: PRISONER }],
    },
    majtani: {
      role: PRISONER,
      log: {
        it: 'Mostra a Kurapika un tatuaggio a forma di ragno e sostiene di appartenere alla Brigata Fantasma. Kurapika riconosce la menzogna e lo mette fuori combattimento con un pugno.',
        en: 'He shows Kurapika a spider tattoo and claims to belong to the Phantom Troupe. Kurapika recognizes the lie and knocks him unconscious with one punch.',
      },
      status: [{ episode: 9, chapter: 18, value: 'alive' }],
      affiliation: [{ episode: 9, chapter: 18, value: PRISONER }],
    },
    leroute: {
      role: PRISONER,
      log: {
        it: 'Deve scontare centododici anni per traffico di animali rari e gioco d’azzardo. Propone a Leorio una serie di scommesse in cui chi perde cede parte del proprio tempo all’altro.',
        en: 'She is serving one hundred and twelve years for trafficking rare animals and gambling. She proposes a series of wagers to Leorio in which the loser gives part of their remaining time to the winner.',
      },
      status: [{ episode: 10, chapter: 20, value: 'alive' }],
      affiliation: [{ episode: 10, chapter: 20, value: PRISONER }],
    },
    johness: {
      role: PRISONER,
      log: {
        it: 'Leorio lo riconosce e mette in guardia Killua: è un assassino capace di fare a pezzi le vittime a mani nude. Johnes vuole soltanto uccidere il suo avversario. Killua gli strappa il cuore e vince l’incontro.',
        en: 'Leorio recognizes him and warns Killua: he is a murderer who tears his victims apart with his bare hands. Johness only wants to kill his opponent. Killua removes his heart and wins the match.',
      },
      epithet: [
        {
          episode: 11,
          chapter: 21,
          value: { it: 'Lo Smembratore', en: 'The Dissector' },
        },
      ],
      status: [{ episode: 11, chapter: 21, value: 'deceased' }],
      affiliation: [{ episode: 11, chapter: 21, value: PRISONER }],
    },
    togari: {
      role: { it: 'Ex esaminatore', en: 'Former examiner' },
      log: {
        it: 'Attribuisce a Hisoka le cicatrici che porta dall’esame precedente. Lo attacca con quattro coltelli ricurvi, ma Hisoka ne afferra due e lo uccide con le sue stesse armi.',
        en: 'He blames Hisoka for the scars he received at the previous exam. He attacks with four curved knives, but Hisoka catches two and kills him with his own weapons.',
      },
      status: [
        { episode: 10, chapter: 19, source: 'episode', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 10,
          chapter: 19,
          source: 'episode',
          value: { it: 'Associazione Hunter', en: 'Hunter Association' },
        },
      ],
    },
  },
}

export const TRICK_TOWER_PLACES: Record<
  string,
  PlaceDossier<HunterVocabulary>
> = {
  'trick-tower': {
    form: 'prison',
    region: 'mainland',
    arc: 'hunter-exam-arc',
    landmark: {
      it: 'La torre cilindrica con le botole sul tetto',
      en: 'The cylindrical tower with trapdoors in its roof',
    },
    log: {
      it: 'Il dirigibile lascia gli aspiranti sul tetto della prigione. Per superare la terza prova devono trovare un percorso fino alla base e arrivarci vivi entro settantadue ore. Scendere lungo le pareti esterne è pericoloso.',
      en: 'The airship leaves the applicants on the prison roof. To pass the Third Phase they must find a route to the bottom and arrive alive within seventy-two hours. Climbing down the outside walls is dangerous.',
    },
    filedHere: [
      'lippo',
      'bendot',
      'sedokan',
      'majtani',
      'leroute',
      'johness',
      'togari',
    ],
  },
}
