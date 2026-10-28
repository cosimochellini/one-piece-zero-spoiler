import type { Relationship, Timeline } from '~/data/types'

import { recurringRelationships } from './skypiea.recurring.relationships'
import { skyRelationships } from './skypiea.sky.relationships'

/** Verified revisions live in docs/content-provenance/sources.json. */
const links = {
  masiraLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'Masira helps reinforce Luffy’s ship for the journey to the sky.',
      it: 'Masira aiuta a rinforzare la nave di Rufy per il viaggio verso il cielo.',
    },
  },
  shoujouLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'Shoujou helps prepare Luffy’s ship to ride the Knock Up Stream.',
      it: 'Orangutan aiuta a preparare la nave di Rufy per risalire la Knock Up Stream.',
    },
  },
  masiraCricket: {
    character: 'montblanc-cricket',
    type: { en: 'Leader', it: 'Capo' },
    summary: {
      en: 'Masira helps Cricket search the waters around Jaya for the lost city of gold.',
      it: 'Masira aiuta Cricket a cercare la città d’oro nelle acque di Jaya.',
    },
  },
  masiraShoujou: {
    character: 'shoujou',
    type: { en: 'Salvage companion', it: 'Compagno di recuperi' },
    summary: {
      en: 'Masira and Shoujou work together in Cricket’s search for the city of gold.',
      it: 'Masira e Orangutan collaborano alla ricerca della città d’oro di Cricket.',
    },
  },
  shoujouCricket: {
    character: 'montblanc-cricket',
    type: { en: 'Leader', it: 'Capo' },
    summary: {
      en: 'Shoujou follows Cricket and helps him search for the lost city of gold.',
      it: 'Orangutan segue Cricket e lo aiuta a cercare la città d’oro.',
    },
  },
  shoujouMasira: {
    character: 'masira',
    type: { en: 'Salvage companion', it: 'Compagno di recuperi' },
    summary: {
      en: 'Shoujou and Masira help Cricket search for the city of gold.',
      it: 'Orangutan e Masira aiutano Cricket a cercare la città d’oro.',
    },
  },
  cricketMasira: {
    character: 'masira',
    type: { en: 'Salvage companion', it: 'Compagno di recuperi' },
    summary: {
      en: 'Masira joins Cricket’s search and helps him recover gold from the sea.',
      it: 'Masira si unisce alla ricerca di Cricket e lo aiuta a recuperare l’oro dal mare.',
    },
  },
  cricketShoujou: {
    character: 'shoujou',
    type: { en: 'Salvage companion', it: 'Compagno di recuperi' },
    summary: {
      en: 'Shoujou searches for the city of gold with Cricket and Masira.',
      it: 'Orangutan cerca la città d’oro insieme a Cricket e Masira.',
    },
  },
  cricketLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Pirate he helps', it: 'Pirata che aiuta' },
    summary: {
      en: 'Cricket agrees to help Luffy reach the island in the sky.',
      it: 'Cricket accetta di aiutare Rufy a raggiungere l’isola nel cielo.',
    },
  },
  cricketLuffyGold: {
    character: 'monkey-d-luffy',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'Luffy recovers the gold Bellamy stole from Cricket, who helps prepare his departure for the sky.',
      it: 'Rufy recupera l’oro rubato da Bellamy a Cricket, che lo aiuta a preparare la partenza verso il cielo.',
    },
  },
  cricketLuffyBell: {
    character: 'monkey-d-luffy',
    type: {
      en: 'Friend who fulfills his hope',
      it: 'Amico che conferma la sua speranza',
    },
    summary: {
      en: 'Luffy rings the golden bell above Jaya, letting Cricket hear that the city of gold exists.',
      it: 'Rufy suona la campana d’oro sopra Jaya e permette a Cricket di sentire che la città d’oro esiste.',
    },
  },
  cricketNoland: {
    character: 'montblanc-noland',
    type: { en: 'Ancestor', it: 'Antenato' },
    summary: {
      en: 'Cricket searches for the city of gold described by his ancestor Noland, whose reputation has burdened his family.',
      it: 'Cricket cerca la città d’oro descritta dal suo antenato Noland, la cui fama ha segnato la sua famiglia.',
    },
  },
  cricketBellamy: {
    character: 'bellamy',
    type: { en: 'Attacker', it: 'Aggressore' },
    summary: {
      en: 'Bellamy beats Cricket and his companions and steals their recovered gold.',
      it: 'Bellamy picchia Cricket e i suoi compagni e ruba l’oro che hanno recuperato.',
    },
  },
  roshioBellamy: {
    character: 'bellamy',
    type: { en: 'Attacker', it: 'Aggressore' },
    summary: {
      en: 'Bellamy accuses Roshio of cheating at cards and attacks him after losing.',
      it: 'Bellamy accusa Roshio di barare a carte e lo aggredisce dopo aver perso.',
    },
  },
  roshioSarquiss: {
    character: 'sarquiss',
    type: { en: 'Accomplice in the attack', it: 'Complice dell’aggressione' },
    summary: {
      en: 'Sarquiss supports Bellamy’s accusation that Roshio cheated at cards.',
      it: 'Cirkeys sostiene l’accusa di Bellamy secondo cui Roshio ha barato a carte.',
    },
  },
  chiefWyper: {
    character: 'wyper',
    type: { en: 'Warrior he teaches', it: 'Guerriero a cui insegna' },
    summary: {
      en: 'The chief teaches Wyper why his ancestors kept ringing the golden bell for Noland.',
      it: 'Il capo spiega a Wiper perché i suoi antenati continuavano a suonare la campana d’oro per Noland.',
    },
  },
  chiefGanSupport: {
    character: 'gan-fall',
    type: { en: 'Ruler he supports', it: 'Governante che sostiene' },
    summary: {
      en: 'The chief asks Gan Fall to govern Skypiea again after the war.',
      it: 'Il capo chiede a Gan Foll di tornare a governare Skypiea dopo la guerra.',
    },
  },
  chiefGan: {
    character: 'gan-fall',
    type: { en: 'Peaceful neighbour', it: 'Vicino in pace' },
    summary: {
      en: 'The chief shares pumpkin juice with Gan Fall after the fighting ends.',
      it: 'Il capo beve succo di zucca con Gan Foll dopo la fine degli scontri.',
    },
  },
  nolandKalgaraEnemy: {
    character: 'kalgara',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Kalgara attacks Noland after he stops Mousse’s sacrifice.',
      it: 'Calgara attacca Noland dopo che ha impedito il sacrificio di Musse.',
    },
  },
  nolandMousse: {
    character: 'mousse',
    type: { en: 'Woman he saves', it: 'Donna che salva' },
    summary: {
      en: 'Noland stops the sacrifice of Mousse and refuses to let her take her own life.',
      it: 'Noland impedisce il sacrificio di Musse e non le permette di togliersi la vita.',
    },
  },
  nolandSeto: {
    character: 'seto',
    type: { en: 'Boy his crew treats', it: 'Ragazzo curato dalla sua ciurma' },
    summary: {
      en: 'Noland’s expedition finds Seto suffering from tree fever and treats him.',
      it: 'La spedizione di Noland trova Set colpito dalla febbre arborea e lo cura.',
    },
  },
  nolandKalgaraEstranged: {
    character: 'kalgara',
    type: { en: 'Estranged friend', it: 'Amico allontanato' },
    summary: {
      en: 'Kalgara refuses to see Noland after his crew cuts down the trees sacred to the Shandia.',
      it: 'Calgara non vuole più vedere Noland dopo che la sua ciurma ha abbattuto gli alberi sacri agli Shandia.',
    },
  },
  nolandKalgaraPromise: {
    character: 'kalgara',
    type: {
      en: 'Friend he promises to revisit',
      it: 'Amico da cui promette di tornare',
    },
    summary: {
      en: 'After learning why the trees were cut down, Kalgara calls Noland back; Noland promises to return.',
      it: 'Scoperto perché gli alberi sono stati abbattuti, Calgara richiama Noland; Noland promette di tornare.',
    },
  },
  kalgaraNolandEnemy: {
    character: 'montblanc-noland',
    type: { en: 'Intruder he fights', it: 'Intruso che affronta' },
    summary: {
      en: 'Kalgara fights Noland for stopping the sacrifice to the snake worshipped by his people.',
      it: 'Calgara affronta Noland perché ha fermato il sacrificio al serpente venerato dal suo popolo.',
    },
  },
  kalgaraNolandEstranged: {
    character: 'montblanc-noland',
    type: { en: 'Friend he rejects', it: 'Amico che respinge' },
    summary: {
      en: 'Kalgara rejects Noland after his crew cuts down the sacred trees without explaining why.',
      it: 'Calgara respinge Noland dopo che la sua ciurma ha abbattuto gli alberi sacri senza spiegare il motivo.',
    },
  },
  kalgaraNolandPromise: {
    character: 'montblanc-noland',
    type: { en: 'Friend he awaits', it: 'Amico che aspetta' },
    summary: {
      en: 'Kalgara learns that the trees were infected and promises to ring the bell to guide Noland back.',
      it: 'Calgara scopre che gli alberi erano malati e promette di suonare la campana per guidare il ritorno di Noland.',
    },
  },
  kalgaraMousse: {
    character: 'mousse',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'Kalgara embraces his daughter Mousse after the cure makes her sacrifice unnecessary.',
      it: 'Calgara abbraccia sua figlia Musse dopo che la cura ha reso inutile il suo sacrificio.',
    },
  },
  kalgaraSeto: {
    character: 'seto',
    type: { en: 'Young admirer', it: 'Giovane ammiratore' },
    summary: {
      en: 'Seto tells Kalgara that he wants to become a warrior like him.',
      it: 'Set dice a Calgara che vuole diventare un guerriero come lui.',
    },
  },
  kalgaraSetoFamily: {
    character: 'seto',
    type: { en: 'Son-in-law', it: 'Genero' },
    summary: {
      en: 'Seto marries Mousse and accompanies Kalgara to ring the golden bell for Noland.',
      it: 'Set sposa Musse e accompagna Calgara a suonare la campana d’oro per Noland.',
    },
  },
  kalgaraNola: {
    character: 'nola',
    type: { en: 'Snake companion', it: 'Serpente amico' },
    summary: {
      en: 'Kalgara greets Nola when he and Seto go to ring the golden bell.',
      it: 'Calgara saluta Nola quando va con Set a suonare la campana d’oro.',
    },
  },
  setoKalgara: {
    character: 'kalgara',
    type: { en: 'Role model', it: 'Modello' },
    summary: {
      en: 'Seto wants to become a great warrior like Kalgara.',
      it: 'Set vuole diventare un grande guerriero come Calgara.',
    },
  },
  setoNoland: {
    character: 'montblanc-noland',
    type: { en: 'Explorer who helps him', it: 'Esploratore che lo aiuta' },
    summary: {
      en: 'Noland arrives with the expedition that treats Seto’s tree fever.',
      it: 'Noland arriva con la spedizione che cura la febbre arborea di Set.',
    },
  },
  setoNolandEstranged: {
    character: 'montblanc-noland',
    type: { en: 'Explorer he rejects', it: 'Esploratore che respinge' },
    summary: {
      en: 'Seto tells Noland to leave after his crew cuts down the sacred trees.',
      it: 'Set dice a Noland di andarsene dopo che la sua ciurma ha abbattuto gli alberi sacri.',
    },
  },
  setoNolandFriend: {
    character: 'montblanc-noland',
    type: { en: 'Friend he awaits', it: 'Amico che aspetta' },
    summary: {
      en: 'After learning why the trees were cut down, Seto rings the bell for Noland and hopes he will return.',
      it: 'Scoperto perché gli alberi sono stati abbattuti, Set suona la campana per Noland e spera che torni.',
    },
  },
  setoKalgaraFamily: {
    character: 'kalgara',
    type: { en: 'Father-in-law', it: 'Suocero' },
    summary: {
      en: 'After marrying Mousse, Seto accompanies her father Kalgara to ring the golden bell.',
      it: 'Dopo aver sposato Musse, Set accompagna suo padre Calgara a suonare la campana d’oro.',
    },
  },
  setoMousse: {
    character: 'mousse',
    type: { en: 'Wife', it: 'Moglie' },
    summary: {
      en: 'Seto and Mousse marry in the years after Noland’s visit.',
      it: 'Set e Musse si sposano negli anni successivi alla visita di Noland.',
    },
  },
  setoNola: {
    character: 'nola',
    type: { en: 'Snake companion', it: 'Serpente amico' },
    summary: {
      en: 'Seto feeds Nola when he visits the golden bell with Kalgara.',
      it: 'Set dà da mangiare a Nola quando va alla campana d’oro con Calgara.',
    },
  },
  mousseNoland: {
    character: 'montblanc-noland',
    type: { en: 'Rescuer', it: 'Salvatore' },
    summary: {
      en: 'Noland stops Mousse’s sacrifice and prevents her from killing herself.',
      it: 'Noland ferma il sacrificio di Musse e le impedisce di uccidersi.',
    },
  },
  mousseKalgara: {
    character: 'kalgara',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Kalgara embraces Mousse after Noland brings the cure and she is spared.',
      it: 'Calgara abbraccia Musse dopo che Noland ha portato la cura e lei è stata risparmiata.',
    },
  },
  mousseNolandFriend: {
    character: 'montblanc-noland',
    type: { en: 'Friend she helps', it: 'Amico che aiuta' },
    summary: {
      en: 'Mousse explains why the sacred trees were cut down and urges her father to reconcile with Noland.',
      it: 'Musse spiega perché gli alberi sacri sono stati abbattuti e invita suo padre a riconciliarsi con Noland.',
    },
  },
  mousseSeto: {
    character: 'seto',
    type: { en: 'Husband', it: 'Marito' },
    summary: {
      en: 'Mousse marries Seto after Noland’s visit to Jaya.',
      it: 'Musse sposa Set dopo la visita di Noland a Jaya.',
    },
  },
  nolaKalgara: {
    character: 'kalgara',
    type: { en: 'Old companion', it: 'Vecchio amico' },
    summary: {
      en: 'Kalgara visits Nola with Seto when they ring the golden bell.',
      it: 'Calgara fa visita a Nola insieme a Set quando suonano la campana d’oro.',
    },
  },
  nolaSeto: {
    character: 'seto',
    type: { en: 'Old companion', it: 'Vecchio amico' },
    summary: {
      en: 'Seto feeds Nola near the golden bell.',
      it: 'Set dà da mangiare a Nola vicino alla campana d’oro.',
    },
  },
  nolaKalgaraLost: {
    character: 'kalgara',
    type: { en: 'Companion it misses', it: 'Amico di cui sente la mancanza' },
    summary: {
      en: 'Nola dreams of following Kalgara and cries when its old companion keeps walking away.',
      it: 'Nola sogna di seguire Calgara e piange quando il suo vecchio amico continua ad allontanarsi.',
    },
  },
  nolaSetoLost: {
    character: 'seto',
    type: { en: 'Companion it misses', it: 'Amico di cui sente la mancanza' },
    summary: {
      en: 'Nola dreams that Seto leaves with Kalgara and does not turn back despite its cries.',
      it: 'Nola sogna che Set parta con Calgara senza voltarsi nonostante i suoi richiami.',
    },
  },
} satisfies Record<string, Relationship>

/** All 39 debut characters have supported links; no omissions in this cohort. */
export const skypieaRelationshipOmissions: Record<string, string> = {}

export const skypieaRelationships = {
  ...recurringRelationships,
  ...skyRelationships,
  // Cricket's archived manga endpoint opens at 229; anime can show him at 148.
  'masira': [
    {
      episode: 148,
      chapter: 228,
      source: 'episode',
      value: [links.masiraCricket, links.masiraShoujou],
    },
    {
      episode: 149,
      chapter: 229,
      value: [links.masiraCricket, links.masiraShoujou, links.masiraLuffy],
    },
  ],
  'shoujou': [
    {
      episode: 148,
      chapter: 228,
      source: 'episode',
      value: [links.shoujouCricket, links.shoujouMasira],
    },
    {
      episode: 149,
      chapter: 229,
      value: [links.shoujouCricket, links.shoujouMasira, links.shoujouLuffy],
    },
  ],
  'montblanc-cricket': [
    {
      episode: 148,
      chapter: 229,
      source: 'episode',
      value: [links.cricketMasira, links.cricketShoujou],
    },
    {
      episode: 149,
      chapter: 229,
      value: [links.cricketMasira, links.cricketShoujou, links.cricketLuffy],
    },
    {
      episode: 150,
      chapter: 231,
      value: [
        links.cricketMasira,
        links.cricketShoujou,
        links.cricketLuffy,
        links.cricketBellamy,
      ],
    },
    {
      episode: 151,
      chapter: 233,
      value: [
        links.cricketMasira,
        links.cricketShoujou,
        links.cricketLuffyGold,
        links.cricketBellamy,
      ],
    },
    {
      // Waits for the archived Noland endpoint, rather than the earlier Jaya account.
      episode: 187,
      chapter: 292,
      value: [
        links.cricketMasira,
        links.cricketShoujou,
        links.cricketLuffyGold,
        links.cricketNoland,
        links.cricketBellamy,
      ],
    },
    {
      episode: 193,
      chapter: 299,
      value: [
        links.cricketNoland,
        links.cricketLuffyBell,
        links.cricketMasira,
        links.cricketShoujou,
      ],
    },
  ],
  'roshio': [
    {
      episode: 146,
      chapter: 224,
      value: [links.roshioBellamy, links.roshioSarquiss],
    },
  ],
  'shandia-chief': [
    { episode: 189, chapter: 293, value: [links.chiefWyper] },
    {
      episode: 195,
      chapter: 302,
      value: [links.chiefGanSupport, links.chiefWyper],
    },
    {
      // Manga cover story; the episode number only orders this source-only entry.
      episode: 303,
      chapter: 427,
      source: 'chapter',
      value: [links.chiefWyper, links.chiefGan],
    },
  ],
  // Noland, Kalgara and Seto open at chapter 292 in this archive.
  // Earlier flashback stages therefore apply only to anime bookmarks.
  'montblanc-noland': [
    {
      episode: 187,
      chapter: 292,
      source: 'episode',
      value: [links.nolandKalgaraEnemy, links.nolandMousse, links.nolandSeto],
    },
    {
      episode: 188,
      chapter: 292,
      source: 'episode',
      value: [
        links.nolandKalgaraEstranged,
        links.nolandMousse,
        links.nolandSeto,
      ],
    },
    {
      episode: 189,
      chapter: 292,
      value: [links.nolandKalgaraPromise, links.nolandMousse, links.nolandSeto],
    },
  ],
  'kalgara': [
    {
      episode: 187,
      chapter: 292,
      source: 'episode',
      value: [links.kalgaraNolandEnemy, links.kalgaraSeto],
    },
    {
      episode: 188,
      chapter: 292,
      source: 'episode',
      value: [
        links.kalgaraNolandEstranged,
        links.kalgaraMousse,
        links.kalgaraSeto,
      ],
    },
    {
      episode: 189,
      chapter: 292,
      value: [
        links.kalgaraNolandPromise,
        links.kalgaraMousse,
        links.kalgaraSetoFamily,
        links.kalgaraNola,
      ],
    },
  ],
  'seto': [
    {
      episode: 187,
      chapter: 292,
      source: 'episode',
      value: [links.setoKalgara, links.setoNoland],
    },
    {
      episode: 188,
      chapter: 292,
      source: 'episode',
      value: [links.setoKalgara, links.setoNolandEstranged],
    },
    {
      episode: 189,
      chapter: 292,
      value: [
        links.setoMousse,
        links.setoKalgaraFamily,
        links.setoNolandFriend,
        links.setoNola,
      ],
    },
  ],
  'mousse': [
    {
      episode: 187,
      chapter: 292,
      source: 'episode',
      value: [links.mousseNoland],
    },
    {
      episode: 188,
      chapter: 292,
      source: 'episode',
      value: [links.mousseKalgara, links.mousseNoland],
    },
    {
      episode: 189,
      chapter: 292,
      value: [links.mousseKalgara, links.mousseSeto, links.mousseNolandFriend],
    },
  ],
  'nola': [
    { episode: 189, chapter: 292, value: [links.nolaKalgara, links.nolaSeto] },
    {
      episode: 191,
      chapter: 296,
      value: [links.nolaKalgaraLost, links.nolaSetoLost],
    },
  ],
} satisfies Record<string, Timeline<Relationship[]>>
