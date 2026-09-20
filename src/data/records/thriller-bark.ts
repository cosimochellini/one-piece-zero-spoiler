import type { Saga } from './saga'
import { thrillerBarkChronicles } from './thriller-bark.chronicle'

/**
 * The Thriller Bark saga, episodes 326 to 384: a ghost ship, an island that
 * is a ship, and a skeleton who plays the violin.
 */

const STRAW_HATS = {
  it: 'Pirati di Cappello di Paglia',
  en: 'Straw Hat Pirates',
}

export const thrillerBark: Saga = {
  entries: [
    {
      id: 'thriller-bark',
      kind: 'arc',
      revealedAtEpisode: 337,
      revealedAtChapter: 442,
      name: { it: 'Thriller Bark', en: 'Thriller Bark' },
      summary: {
        it: 'Una nave grande quanto un’isola, con una villa e alberi secchi sul ponte, ferma in una nebbia dove la luna non tramonta mai.',
        en: 'A ship the size of an island, a mansion and dead trees standing on its deck, moored in a fog where the moon never sets.',
      },
      visual: { art: 'thriller-bark', tint: 'lavender' },
    },
    {
      id: 'brook',
      kind: 'character',
      revealedAtEpisode: 339,
      revealedAtChapter: 443,
      name: { it: 'Brook', en: 'Brook' },
      summary: {
        it: 'Uno scheletro con la permanente afro che suona il violino, chiede alle signore di mostrargli le mutandine e beve il tè con le buone maniere, cinquant’anni dopo essere morto.',
        en: 'A skeleton with an afro who plays the violin, asks ladies to show him their panties and takes his tea with good manners, fifty years after he died.',
      },
      visual: { art: 'brook', tint: 'lavender' },
    },
    {
      id: 'perona',
      kind: 'character',
      revealedAtEpisode: 340,
      revealedAtChapter: 449,
      name: { it: 'Perona', en: 'Perona' },
      summary: {
        it: 'La principessa fantasma di una nave-isola, con un ombrello e un orso di peluche al seguito, i cui spettri fanno sentire chiunque tocchino indegno di vivere.',
        en: 'The ghost princess of an island-ship, an umbrella and a stuffed bear in tow, whose spectres leave anyone they touch feeling unworthy of living.',
      },
      visual: { art: 'perona', tint: 'pink' },
    },
    {
      id: 'lola',
      kind: 'character',
      revealedAtEpisode: 340,
      revealedAtChapter: 455,
      name: { it: 'Lola', en: 'Lola' },
      summary: {
        it: 'Una sposa zombie con il velo impigliato nelle zanne di un cinghiale, che insegue chiunque passi per chiedergli di sposarla.',
        en: 'A zombie bride whose veil hangs from a warthog’s tusks, chasing down anyone who walks past to ask for their hand in marriage.',
      },
      visual: { art: 'lola', tint: 'pink' },
    },
    {
      id: 'gecko-moria',
      kind: 'character',
      revealedAtEpisode: 343,
      revealedAtChapter: 455,
      name: { it: 'Gekko Moria', en: 'Gecko Moria' },
      summary: {
        it: 'Il padrone di Thriller Bark, un gigante pallido con un sorriso cucito, che taglia l’ombra a chi perde contro di lui e se la tiene.',
        en: 'The master of Thriller Bark, a pale giant with a stitched grin, who cuts the shadow off whoever loses to him and keeps it.',
      },
      visual: { art: 'gecko-moria', tint: 'violet' },
    },
    {
      id: 'absalom',
      kind: 'character',
      revealedAtEpisode: 341,
      revealedAtChapter: 455,
      name: { it: 'Absalom', en: 'Absalom' },
      summary: {
        it: 'Un uomo che sparisce a comando, tradito soltanto dal cappotto e dal bazooka che porta al braccio, e che entra dove gli pare.',
        en: 'A man who vanishes on command, given away only by his coat and by the bazooka strapped to his arm, and who walks in wherever he likes.',
      },
      visual: { art: 'absalom', tint: 'wine' },
    },
    {
      id: 'hogback',
      kind: 'character',
      revealedAtEpisode: 340,
      revealedAtChapter: 452,
      name: { it: 'Hogback', en: 'Hogback' },
      summary: {
        it: 'Un chirurgo celebre che ha lasciato il mondo dei vivi per cucire insieme i cadaveri, e ride ammirando il lavoro delle proprie mani.',
        en: 'A celebrated surgeon who left the world of the living to stitch corpses together, and laughs as he admires the work of his own hands.',
      },
      visual: { art: 'hogback', tint: 'acid' },
    },
    {
      id: 'victoria-cindry',
      kind: 'character',
      revealedAtEpisode: 342,
      revealedAtChapter: 452,
      name: { it: 'Victoria Cindry', en: 'Victoria Cindry' },
      summary: {
        it: 'Una cameriera zombie dal viso cucito, che serve senza dire una parola di troppo e lascia cadere un piatto dopo l’altro.',
        en: 'A zombie maid with a stitched face who serves without a word more than needed, and lets one plate after another slip out of her hands.',
      },
      visual: { art: 'victoria-cindry', tint: 'ivory' },
    },
    {
      id: 'ryuma',
      kind: 'character',
      revealedAtEpisode: 345,
      revealedAtChapter: 462,
      name: { it: 'Ryuma', en: 'Ryuma' },
      summary: {
        it: 'Uno zombie in armatura da samurai con una lama nera al fianco, che si inchina prima di sguainarla e taglia tutto ciò che gli sta davanti.',
        en: 'A zombie in samurai armour with a black blade at his hip, who bows before drawing it and cuts through whatever stands in front of him.',
      },
      visual: { art: 'ryuma', tint: 'ice' },
    },
    {
      id: 'oars',
      kind: 'character',
      revealedAtEpisode: 358,
      revealedAtChapter: 472,
      name: { it: 'Oz', en: 'Oars' },
      summary: {
        it: 'Il cadavere di un gigante antico, alto quanto la villa e con due corna sull’elmo, che si rialza appena gli cuciono dentro un’ombra nuova.',
        en: 'The corpse of an ancient giant, as tall as the mansion and horned at the helm, which stands back up once a new shadow is sewn inside it.',
      },
      visual: { art: 'oars', tint: 'red' },
    },
    {
      id: 'yorki',
      kind: 'character',
      revealedAtEpisode: 380,
      revealedAtChapter: 489,
      name: { it: 'Yorki', en: 'Yorki' },
      summary: {
        it: 'Il capitano che cinquant’anni fa portò nella Rotta Maggiore una ciurma di musicisti, e teneva il tempo cantando mentre gli altri sparavano.',
        en: 'The captain who took a crew of musicians into the Grand Line fifty years ago, keeping time by singing while everyone around him was shooting.',
      },
      visual: { art: 'yorki', tint: 'teal' },
    },
  ],

  dossiers: {
    'brook': {
      chronicle: thrillerBarkChronicles.brook,
      role: { it: 'Musicista', en: 'Musician' },
      log: {
        it: 'Ha vagato per cinquant’anni su una nave fantasma in un mare senza sole, senza compagni e senza ombra. È morto una volta e il suo frutto lo ha riportato indietro, ma il corpo che ha ritrovato era già solo ossa. Accetta l’invito a bordo di Rufy in trenta secondi, poi chiede alla navigatrice di mostrargli le mutandine.',
        en: 'He drifted for fifty years on a ghost ship in a sunless sea, with no crew and no shadow. He died once and his fruit brought him back, but the body he found again was already bare bones. He accepts Luffy’s invitation aboard within thirty seconds, then asks the navigator to show him her panties.',
      },
      status: [{ episode: 339, value: 'alive' }],
      affiliation: [
        {
          episode: 339,
          value: {
            it: 'Pirati di Rumbar, un tempo',
            en: 'Rumbar Pirates, once',
          },
        },
        { episode: 381, value: STRAW_HATS },
      ],
      origin: [{ episode: 339, value: { it: 'West Blue', en: 'West Blue' } }],
      epithet: [{ episode: 517, value: { it: 'Soul King', en: 'Soul King' } }],
      devilFruit: [{ episode: 339, value: ['revive-revive-fruit'] }],
      bounty: [
        { episode: 339, value: 33_000_000 },
        { episode: 746, value: 83_000_000 },
        { episode: 1086, value: 383_000_000 },
      ],
    },
    'perona': {
      role: { it: 'Principessa fantasma', en: 'Ghost princess' },
      log: {
        it: 'Comanda gli zombie animali di Thriller Bark da un giardino pieno di peluche, e trova carino tutto ciò che è morto e tondo. I suoi fantasmi passano attraverso i muri e attraverso le persone, e chi ne viene toccato si accascia a maledire la propria esistenza. Contro un tiratore che non ha nulla da perdere, la tattica funziona meno.',
        en: 'She commands the animal zombies of Thriller Bark from a garden full of stuffed toys, and finds anything dead and round adorable. Her ghosts pass through walls and through people, and whoever they touch slumps to the floor cursing their own existence. Against a marksman with nothing to lose, the tactic works less well.',
      },
      affiliation: [
        {
          episode: 340,
          value: { it: 'Pirati di Thriller Bark', en: 'Thriller Bark Pirates' },
        },
      ],
      epithet: [
        {
          episode: 340,
          value: { it: 'Principessa Fantasma', en: 'Ghost Princess' },
        },
      ],
      devilFruit: [{ episode: 340, value: ['hollow-hollow-fruit'] }],
    },
    'lola': {
      role: { it: 'Sposa zombie', en: 'Zombie bride' },
      log: {
        it: 'Si aggira per i corridoi della villa con l’abito da sposa addosso e il velo fermato tra le zanne, e chiede la mano a chiunque incontri, uomo o scheletro che sia. Il rifiuto la rattrista per qualche secondo soltanto, poi ricomincia con il primo che passa. Sotto il velo ha la forza di un cinghiale, e una proposta respinta sa diventare una carica.',
        en: 'She wanders the mansion corridors in a wedding dress, her veil caught between two tusks, and asks for the hand of everyone she meets, man or skeleton alike. A refusal saddens her for a few seconds only, and then she starts over with whoever comes past next. Under the veil is a warthog’s strength, and a rejected proposal turns into a charge.',
      },
      affiliation: [
        {
          episode: 340,
          value: {
            it: 'Pirati di Rolling, capitano',
            en: 'Rolling Pirates, captain',
          },
        },
        {
          episode: 837,
          value: {
            it: 'Pirati di Rolling, figlia di Big Mom',
            en: 'Rolling Pirates, daughter of Big Mom',
          },
        },
      ],
      origin: [{ episode: 837, value: { it: 'Totto Land', en: 'Totto Land' } }],
      epithet: [
        { episode: 340, value: { it: 'La Proponente', en: 'the Proposer' } },
      ],
      bounty: [{ episode: 340, value: 24_000_000 }],
    },
    'gecko-moria': {
      chronicle: thrillerBarkChronicles['gecko-moria'],
      role: { it: 'Padrone di Thriller Bark', en: 'Master of Thriller Bark' },
      log: {
        it: 'Governa la nave-isola dall’alto di un trono, circondato da un esercito di cadaveri cuciti a cui ha prestato le ombre rubate ai vivi. Con le forbici che porta al fianco stacca l’ombra di chi sconfigge, e chi la perde non può più restare al sole senza sbriciolarsi. Fa parte della Flotta dei Sette, e preferisce che a combattere per lui siano i morti.',
        en: 'He rules the island-ship from a high throne, surrounded by an army of stitched corpses wearing the shadows he has taken from the living. The scissors at his side cut the shadow off anyone he beats, and a person without one crumbles the moment sunlight touches them. He sits among the Seven Warlords, and would rather the dead did his fighting.',
      },
      status: [{ episode: 343, value: 'alive' }],
      affiliation: [
        {
          episode: 343,
          value: {
            it: 'Pirati di Thriller Bark, capitano; Flotta dei Sette',
            en: 'Thriller Bark Pirates, captain; Seven Warlords of the Sea',
          },
        },
        {
          episode: 958,
          value: {
            it: 'Ex membro della Flotta dei Sette',
            en: 'Former Warlord',
          },
        },
      ],
      origin: [{ episode: 343, value: { it: 'West Blue', en: 'West Blue' } }],
      devilFruit: [{ episode: 343, value: ['shadow-shadow-fruit'] }],
      bounty: [{ episode: 343, value: 320_000_000 }],
    },
    'absalom': {
      role: { it: 'Generale degli zombie', en: 'General of the zombies' },
      log: {
        it: 'Comanda i soldati zombie del cimitero e li manda avanti a ondate, mentre lui cammina invisibile in mezzo ai vivi. Il potere non gli toglie il peso dei passi né l’odore del sigaro, così chi lo cerca impara a fidarsi delle orecchie più che degli occhi. Il bazooka che porta al braccio è l’unica parte di lui che si vede sempre.',
        en: 'He commands the zombie soldiers of the graveyard and sends them forward in waves while he walks unseen among the living. The power does not quiet his footsteps or hide his cigar smoke, so anyone hunting him learns to trust their ears rather than their eyes. The bazooka on his arm is the one part of him that is always visible.',
      },
      affiliation: [
        {
          episode: 341,
          value: {
            it: 'Pirati di Thriller Bark, generale dei soldati zombie',
            en: 'Thriller Bark Pirates, general of the zombie soldiers',
          },
        },
      ],
      epithet: [
        { episode: 341, value: { it: 'Il Cimitero', en: 'the Graveyard' } },
      ],
      devilFruit: [{ episode: 341, value: ['clear-clear-fruit'] }],
    },
    'hogback': {
      role: { it: 'Chirurgo', en: 'Surgeon' },
      log: {
        it: 'Era un medico famoso in tutto il mondo, capace di rimettere in piedi chi nessun altro sapeva salvare, poi è sparito senza spiegazioni. Lo si ritrova nella villa di Thriller Bark, con il camice addosso, a cucire pezzi di cadaveri diversi in un corpo solo e a firmarlo come un’opera d’arte. Serve il padrone dell’isola e sembra divertirsi molto.',
        en: 'He was a doctor known across the world, able to put back on their feet the patients nobody else could save, and then he vanished without explanation. He turns up in the Thriller Bark mansion in a white coat, sewing pieces of different corpses into a single body and signing the result like a work of art. He serves the master of the island and enjoys himself enormously.',
      },
      affiliation: [
        {
          episode: 340,
          value: {
            it: 'Pirati di Thriller Bark, chirurgo',
            en: 'Thriller Bark Pirates, surgeon',
          },
        },
      ],
      epithet: [
        {
          episode: 340,
          value: { it: 'Il Chirurgo Geniale', en: 'the Genius Surgeon' },
        },
      ],
    },
    'victoria-cindry': {
      role: { it: 'Cameriera zombie', en: 'Zombie maid' },
      log: {
        it: 'Porta il vassoio per i corridoi della villa e risponde agli ordini del chirurgo con una voce piatta, mentre i piatti le scivolano dalle dita e si rompono sul pavimento. Le cuciture le attraversano il viso e le braccia, e non sembra importarle. Dicono che prima di finire su questa nave calcasse i palcoscenici, e che fosse fra le più amate.',
        en: 'She carries the tray along the mansion corridors and answers the surgeon’s orders in a flat voice while the plates slide out of her fingers and break on the floor. Stitches cross her face and her arms, and she does not seem to mind. They say that before she ended up on this ship she was an actress, and a beloved one.',
      },
      status: [{ episode: 342, value: 'deceased' }],
      affiliation: [
        {
          episode: 342,
          value: {
            it: 'Thriller Bark, cameriera zombie; un tempo attrice di teatro',
            en: 'Thriller Bark, zombie maid; once a stage actress',
          },
        },
      ],
    },
    'ryuma': {
      role: { it: 'Generale zombie', en: 'Zombie general' },
      log: {
        it: 'È il più forte dei cadaveri cuciti nella villa, un samurai rimesso in piedi con dentro l’ombra rubata a qualcun altro. Al fianco porta una lama nera e con quella taglia perfino il fuoco, come se le fiamme fossero corda. In vita veniva dal Paese di Wano, e di lui si racconta che abbia fatto a pezzi un drago sopra una città.',
        en: 'He is the strongest of the stitched corpses in the mansion, a samurai set back on his feet with a shadow stolen from someone else inside him. He carries a black blade and cuts through fire itself with it, as though the flames were rope. In life he came from Wano Country, and the story goes that he cut a dragon to pieces above a town.',
      },
      status: [{ episode: 345, value: 'deceased' }],
      affiliation: [
        {
          episode: 345,
          value: {
            it: 'Thriller Bark, generale zombie; un tempo samurai di Wano',
            en: 'Thriller Bark, zombie general; once a samurai of Wano',
          },
        },
      ],
      origin: [
        { episode: 345, value: { it: 'Paese di Wano', en: 'Wano Country' } },
      ],
      epithet: [
        {
          episode: 345,
          value: { it: 'Il Dio della Spada', en: 'the Sword God' },
        },
      ],
    },
    'oars': {
      role: { it: 'Zombie speciale', en: 'Special zombie' },
      log: {
        it: 'È il pezzo più grosso della collezione del padrone dell’isola: un gigante morto da secoli, tenuto in una cella di ghiaccio finché non arriva l’ombra giusta da mettergli dentro. Quando si rialza ha la forza di sfondare un edificio con una spallata e la testa di un bambino che scopre il mondo. Le leggende dicono che in vita trascinasse i continenti.',
        en: 'He is the largest piece in the island master’s collection: a giant dead for centuries, kept in an ice cellar until the right shadow comes along to put inside him. Once he stands he has the strength to take a building down with one shoulder and the mind of a child discovering the world. The legends say that in life he dragged continents about.',
      },
      status: [{ episode: 358, value: 'deceased' }],
      affiliation: [
        {
          episode: 358,
          value: {
            it: 'Pirati di Thriller Bark, zombie speciale',
            en: 'Thriller Bark Pirates, special zombie',
          },
        },
      ],
      epithet: [
        {
          episode: 358,
          value: {
            it: 'Il Trascinatore di Continenti',
            en: 'the Continent Puller',
          },
        },
      ],
    },
    'yorki': {
      role: {
        it: 'Capitano dei Pirati di Rumbar',
        en: 'Rumbar Pirates captain',
      },
      log: {
        it: 'Guidava i Pirati di Rumbar con l’allegria di chi è salpato per far ballare la gente, e la sua ciurma suonava anche mentre combatteva. Alla vigilia della traversata più dura si ammalò, e scelse di staccarsi dagli altri con una nave sola per non trascinarli con sé. Li salutò ridendo, come se fosse una partenza qualunque.',
        en: 'He led the Rumbar Pirates with the cheer of a man who set out to make people dance, and his crew played while it fought. On the eve of the hardest crossing he fell ill, and chose to break away with a single ship rather than drag the others down with him. He waved them off laughing, as though it were an ordinary parting.',
      },
      status: [{ episode: 380, value: 'unknown' }],
      affiliation: [
        {
          episode: 380,
          value: {
            it: 'Pirati di Rumbar, capitano',
            en: 'Rumbar Pirates, captain',
          },
        },
      ],
      origin: [{ episode: 380, value: { it: 'West Blue', en: 'West Blue' } }],
      epithet: [{ episode: 380, value: { it: 'Calico', en: 'Calico' } }],
    },
  },
}
