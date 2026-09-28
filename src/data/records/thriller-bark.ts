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
    {
      id: 'hildon',
      kind: 'character',
      revealedAtEpisode: 339,
      revealedAtChapter: 444,
      name: { it: 'Hildon', en: 'Hildon' },
      summary: {
        it: 'Una creatura bendata con le ali da pipistrello e i canini da vampiro, che se ne sta appesa a testa in giù a un ramo e offre ai viaggiatori smarriti un passaggio in carrozza fino alla villa di un dottore.',
        en: 'A bandaged creature with a bat’s wings and a vampire’s fangs, who hangs upside down from a branch and offers lost travellers a carriage ride to a doctor’s mansion.',
      },
      visual: { art: 'hildon', tint: 'wine' },
    },
    {
      id: 'cerberus-thriller-bark',
      kind: 'character',
      revealedAtEpisode: 339,
      revealedAtChapter: 444,
      name: { it: 'Cerbero', en: 'Cerberus' },
      summary: {
        it: 'Un cane a tre teste, pieno di cuciture e bende, che si aggira nel fossato ai margini dell’isola; una delle teste è di volpe, e non sopporta che glielo si faccia notare.',
        en: 'A three-headed dog, stitched and bandaged all over, that prowls the ditch at the edge of the island; one of its heads is a fox’s, and it hates to have that pointed out.',
      },
      visual: { art: 'cerberus-thriller-bark', tint: 'red' },
    },
    {
      id: 'buhichuck',
      kind: 'character',
      revealedAtEpisode: 341,
      revealedAtChapter: 447,
      name: { it: 'Grunfchuck', en: 'Buhichuck' },
      summary: {
        it: 'Una testa di maiale appesa come un trofeo alla parete della sala da pranzo, con due spade sotto il mento, che a un tratto si mette a ridere e annuncia di essere il capo degli zombie della stanza.',
        en: 'A pig’s head mounted like a trophy on the dining-room wall, two swords hanging beneath its chin, which suddenly starts laughing and announces that it leads the zombies of the room.',
      },
      visual: { art: 'buhichuck', tint: 'flamingo' },
    },
    {
      id: 'kumashi',
      kind: 'character',
      revealedAtEpisode: 345,
      revealedAtChapter: 449,
      name: { it: 'Kumacy', en: 'Kumashi' },
      summary: {
        it: 'Un enorme orsacchiotto di pezza rattoppato, con una mascherina da chirurgo sulla bocca, che esegue gli ordini di Perona e viene sgridato ogni volta che apre bocca, perché la sua voce è troppo profonda per essere carina.',
        en: 'A huge patchwork teddy bear with a surgical mask over his mouth, who carries out Perona’s orders and is scolded every time he opens it, because his voice is far too deep to be cute.',
      },
      visual: { art: 'kumashi', tint: 'azure' },
    },
    {
      id: 'john',
      kind: 'character',
      revealedAtEpisode: 345,
      revealedAtChapter: 451,
      name: { it: 'John', en: 'John' },
      summary: {
        it: 'Un capitano pirata famigerato in vita, rialzato dalla tomba come zombie con due spade ancora conficcate nella pancia, che si trascina dietro agli altri tra un singhiozzo e un sorso dalla bottiglia.',
        en: 'A pirate captain notorious in life, raised from the grave as a zombie with two swords still stuck in his belly, who shuffles after the others hiccuping over his bottle.',
      },
      visual: { art: 'john', tint: 'vermilion' },
    },
    {
      id: 'jigoro',
      kind: 'character',
      revealedAtEpisode: 346,
      revealedAtChapter: 452,
      name: { it: 'Jigoro', en: 'Jigoro' },
      summary: {
        it: 'Un general zombie coperto di cicatrici che maneggia le sciabole con le tecniche e con le parole di Zoro, ma quando gli chiedono chi sia risponde con un nome tutto suo.',
        en: 'A General Zombie covered in scars who swings his sabres with Zoro’s techniques and Zoro’s words, yet answers with a name of his own when asked who he is.',
      },
      visual: { art: 'jigoro', tint: 'sand' },
    },
    {
      id: 'tararan',
      kind: 'character',
      revealedAtEpisode: 349,
      revealedAtChapter: 456,
      name: { it: 'Tararan', en: 'Tararan' },
      summary: {
        it: 'Uno zombie gigantesco, metà scimmia e metà ragno, che spara ragnatele dai palmi delle mani e comanda uno sciame di topi-ragno che non si lascia sfuggire nessuna preda.',
        en: 'A gigantic zombie, half monkey and half spider, who shoots webs from the palms of his hands and commands a swarm of spider mice that never lets its prey get away.',
      },
      visual: { art: 'tararan', tint: 'yellow' },
    },
    {
      id: 'gyoro-nin-and-bao',
      kind: 'character',
      revealedAtEpisode: 350,
      revealedAtChapter: 486,
      name: { it: 'Gyoro, Nin e Bao', en: 'Gyoro, Nin and Bao' },
      summary: {
        it: 'Tre piccoli zombie al servizio di Moria, uno spadaccino con un occhio solo, un arciere e uno con un secchio per testa, che lo svegliano con una freccia e corrono da lui con ogni notizia.',
        en: 'Three little zombies who wait on Moria, a one-eyed swordsman, an archer and one with a bucket for a head, who wake him with an arrow and run to him with every piece of news.',
      },
      visual: { art: 'gyoro-nin-and-bao', tint: 'orange' },
    },
    {
      id: 'risky-brothers',
      kind: 'character',
      revealedAtEpisode: 370,
      revealedAtChapter: 475,
      name: { it: 'Fratelli Risky', en: 'Risky Brothers' },
      summary: {
        it: 'Due pirati, uno basso e mascherato e uno alto e allampanato, che vivono da tre anni senza ombra nella foresta di Thriller Bark e intanto collezionano quelle degli altri.',
        en: 'Two pirates, one short and masked and one tall and lanky, who have lived three years without their shadows in the forest of Thriller Bark, collecting other people’s in the meantime.',
      },
      visual: { art: 'risky-brothers', tint: 'azure' },
    },
    {
      id: 'spoil',
      kind: 'character',
      revealedAtEpisode: 375,
      revealedAtChapter: 483,
      name: { it: 'Spoil', en: 'Spoil' },
      summary: {
        it: 'Un vecchio così magro e segnato dalle cicatrici che tutti lo prendono per uno zombie, che ha girato la foresta di Thriller Bark con una lanterna finché gli è mancata l’ombra.',
        en: 'An old man so thin and scarred that everyone takes him for a zombie, who walked the Thriller Bark forest with a lantern for as long as his shadow was missing.',
      },
      visual: { art: 'spoil', tint: 'yellow' },
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
    'hildon': {
      chronicle: thrillerBarkChronicles.hildon,
      role: { it: 'Guida per la villa', en: 'Guide to the mansion' },
      log: {
        it: 'Ha visto un cane a tre teste inseguire tre pirati appena sbarcati e li ha seguiti di nascosto, per proteggerli in caso di bisogno, o almeno così dice. Avverte che di notte la foresta diventa pericolosa, e che il posto migliore per aspettare i compagni è la villa di un celebre dottore, dove la sua carrozza può portarli. Sopra l’occhio destro ha un numero impresso, e nessuno gli chiede che cosa significhi.',
        en: 'He watched a three-headed dog chase three newly landed pirates and followed them in secret, to protect them should they need it, or so he says. The forest turns dangerous at night, he warns, and the best place to wait for their friends is the mansion of a celebrated doctor, where his carriage can take them. A number is stamped above his right eye, and nobody asks him what it means.',
      },
      status: [
        { episode: 339, value: 'unknown' },
        { episode: 343, value: 'deceased' },
      ],
      affiliation: [
        { episode: 339, value: { it: 'Thriller Bark', en: 'Thriller Bark' } },
        {
          episode: 348,
          value: {
            it: 'Thriller Bark, messaggero di Gekko Moria',
            en: 'Thriller Bark, Gecko Moria’s messenger',
          },
        },
      ],
    },
    'cerberus-thriller-bark': {
      chronicle: thrillerBarkChronicles['cerberus-thriller-bark'],
      role: { it: 'Cane da guardia', en: 'Guard dog' },
      log: {
        it: 'Aspetta nel fossato tra il mare e l’isola, tra i teschi, e insegue chiunque ci cada dentro. Chopper lo scambia per il cane che sorveglia le porte dell’inferno, finché non si accorge che la terza testa è di una volpe, e questo lo fa solo arrabbiare di più. Con tutte quelle teste ha un pessimo fiuto: per seminarlo bastano una nuvola di fumo e un albero.',
        en: 'It waits in the ditch between the sea and the island, among the skulls, and chases whatever falls in. Chopper takes it for the hound that guards the gates of hell, until he notices that the third head belongs to a fox, which only makes it angrier. For all its heads its nose is poor: a cloud of smoke and a tree are enough to lose it.',
      },
      status: [
        { episode: 339, value: 'unknown' },
        { episode: 343, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 339,
          value: {
            it: 'Thriller Bark, guardiano del fossato',
            en: 'Thriller Bark, guard of the moat',
          },
        },
      ],
    },
    'buhichuck': {
      chronicle: thrillerBarkChronicles.buhichuck,
      role: {
        it: 'Capo degli zombie della sala da pranzo',
        en: 'Leader of the dining-room zombies',
      },
      log: {
        it: 'Per tutta una cena resta appeso alla parete come un trofeo di caccia qualunque, e guarda gli ospiti mangiare. Quando i ritratti e il tappeto prendono vita intorno a loro, ride, si proclama capo degli zombie della stanza e lancia una delle sue spade contro Usop; lo manca e la pianta nella schiena del tappeto di pelle d’orso, che se la prende con l’uomo sbagliato. Ride di tutto, e sorride anche quando le cose gli vanno male.',
        en: 'For a whole dinner he hangs on the wall like any hunting trophy and watches the guests eat. When the portraits and the rug come to life around them, he laughs, declares himself the leader of the zombies in the room and throws one of his swords at Usopp; it misses and lands in the back of the bear-skin rug, which blames the wrong man. He laughs at everything, and keeps grinning even when things go badly for him.',
      },
      status: [{ episode: 341, value: 'deceased' }],
      affiliation: [
        {
          episode: 341,
          value: {
            it: 'Villa di Hogback, capo degli zombie della sala da pranzo',
            en: 'Hogback’s mansion, leader of the dining-room zombies',
          },
        },
        {
          episode: 344,
          value: {
            it: 'Zombie a sorpresa, capo della sala da pranzo',
            en: 'Surprise Zombies, leader in the dining room',
          },
        },
      ],
    },
    'kumashi': {
      chronicle: thrillerBarkChronicles.kumashi,
      role: { it: 'Servitore di Perona', en: 'Perona’s servant' },
      log: {
        it: 'Dà il bentornato a Perona quando i suoi fantasmi rientrano alla villa, e lei gli risponde di stare zitto: un orso con quell’aspetto non ha il diritto di avere una voce così profonda, e chi non è carino non è degno di lavorare per lei. Esegue i suoi ordini annuendo quando può e borbottando quando non può, e viene sgridato per il borbottio. Quando lei parte per la nave dei pirati, la saluta con la zampa.',
        en: 'He welcomes Perona home when her ghosts drift back to the mansion, and she answers by telling him to be quiet: a bear who looks like him has no business with such a deep voice, and whoever is not cute is not fit to work for her. He takes her orders with a nod where he can and a mumble where he cannot, and is scolded for the mumble. When she leaves for the pirates’ ship, he waves her goodbye.',
      },
      status: [
        { episode: 345, value: 'unknown' },
        { episode: 348, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 345,
          value: {
            it: 'Thriller Bark, servitore di Perona',
            en: 'Thriller Bark, Perona’s servant',
          },
        },
      ],
    },
    'john': {
      chronicle: thrillerBarkChronicles.john,
      role: { it: 'Generale zombie', en: 'Zombie general' },
      log: {
        it: 'Absalom lo richiama da sotto terra insieme agli altri generali per la caccia notturna, e lui è l’ultimo a passare dalla porta, con il singhiozzo e una bottiglia che non molla mai. Absalom gli ricorda che da vivo era un pirata famigerato, e si dispera nel vedere che cosa ne è rimasto. Sotto la giacca da capitano, due spade gli sono ancora conficcate nella pancia.',
        en: 'Absalom calls him up out of the ground with the other generals for the night hunt, and he is the last one through the door, hiccuping over a bottle he never puts down. Absalom reminds him that he was a notorious pirate while he lived, and despairs at what is left of him. Under his captain’s coat, two swords are still stuck in his belly.',
      },
      status: [{ episode: 345, value: 'deceased' }],
      affiliation: [
        {
          episode: 345,
          value: {
            it: 'Thriller Bark, generale zombie; un tempo pirata famigerato',
            en: 'Thriller Bark, zombie general; once a notorious pirate',
          },
        },
      ],
      epithet: [
        { episode: 345, value: { it: 'Capitano John', en: 'Captain John' } },
      ],
    },
    'spoil': {
      chronicle: thrillerBarkChronicles.spoil,
      role: {
        it: 'Presidente onorario dell’associazione delle vittime',
        en: 'Honorary President of the Victims’ Association',
      },
      log: {
        it: 'Quando vede una manciata di pirati stendere gli zombie del cimitero, esce dal buio e li supplica di battere l’uomo che gli ha rubato l’ombra, Moria della Flotta dei Sette. Li avverte che chi resta senza ombra brucia alla luce del sole e che l’isola è in realtà una nave gigantesca. Tutti lo hanno preso per uno zombie, ma è soltanto un vecchio malconcio e pieno di ferite.',
        en: 'When he sees a handful of pirates flatten the graveyard zombies, he steps out of the dark and begs them to beat the man who stole his shadow, Moria of the Seven Warlords. He warns them that anyone left without a shadow burns in the sunlight, and that the island is really a gigantic ship. Everyone took him for a zombie, but he is only a battered, badly injured old man.',
      },
      status: [{ episode: 375, value: 'alive' }],
      affiliation: [
        {
          episode: 375,
          value: {
            it: 'Associazione vittime del furto d’ombra, presidente onorario',
            en: 'Thriller Bark Victims’ Association, honorary president',
          },
        },
      ],
    },
    'gyoro-nin-and-bao': {
      chronicle: thrillerBarkChronicles['gyoro-nin-and-bao'],
      role: { it: 'Servitori zombie di Moria', en: 'Moria’s zombie servants' },
      log: {
        it: 'Tengono gli orari del padrone: quando è ora della caccia notturna corrono per i corridoi a svegliarlo, con quattro giorni di cibo già pronti, e l’arciere gli fa scoppiare con una freccia la bolla che gli pende dal naso. Gli portano ogni notizia, dai pirati che hanno messo in ginocchio Enies Lobby agli ospiti in arrivo nella sua sala, e quando lui li chiama per nome corrono ad aprire la porta della cella frigorifera dove riposa il suo cadavere più grande.',
        en: 'They keep their master’s hours: when the night hunt is due they run through the corridors to wake him, four days’ worth of food ready, and the archer pops the bubble at his nose with an arrow. They bring him every piece of news, from the pirates who took down Enies Lobby to the guests arriving in his hall, and when he calls their names they run to open the door of the freezer where his largest corpse lies.',
      },
      status: [{ episode: 350, value: 'deceased' }],
      affiliation: [
        {
          episode: 350,
          value: {
            it: 'Thriller Bark, servitori di Moria',
            en: 'Thriller Bark, Moria’s servants',
          },
        },
      ],
    },
    'jigoro': {
      chronicle: thrillerBarkChronicles.jigoro,
      role: { it: 'Generale zombie', en: 'Zombie general' },
      log: {
        it: 'È uno dei general zombie della villa, un cadavere pieno di cicatrici con le sue sciabole e un uccellino in testa, rimesso in piedi insieme a guerrieri che in vita si erano fatti un nome. Lancia i fendenti volanti di Zoro e ne ripete le frasi parola per parola, al punto che Rufy lo scambia per il suo compagno. Alla domanda risponde che si chiama Jigoro, e che Rufy è il suo nemico.',
        en: 'He is one of the mansion’s General Zombies, a scarred corpse with his sabres and a little bird on his head, set back on his feet alongside warriors who made names for themselves in life. He throws Zoro’s flying slashes and repeats Zoro’s words to the letter, so closely that Luffy takes him for his crewmate. Asked, he says his name is Jigoro, and that Luffy is his enemy.',
      },
      status: [{ episode: 346, value: 'deceased' }],
      affiliation: [
        {
          episode: 346,
          value: {
            it: 'Thriller Bark, generale zombie',
            en: 'Thriller Bark, zombie general',
          },
        },
        {
          episode: 356,
          value: {
            it: 'Thriller Bark, generale zombie; guardia del corpo di Hogback',
            en: 'Thriller Bark, zombie general; Hogback’s bodyguard',
          },
        },
      ],
    },
    'tararan': {
      chronicle: thrillerBarkChronicles.tararan,
      role: { it: 'Capitano dei topi-ragno', en: 'Captain of the spider mice' },
      log: {
        it: 'Era lui a tessere la ragnatela che ha intrappolato la Sunny, e i suoi cinquecento topi-ragno hanno portato via i Cappello di Paglia uno alla volta, sbucando dal buio o da un angolo cieco. Fermava gli intrusi sui ponti della villa sparando dai palmi una tela che la forza bruta non spezza, anche se il fuoco la scioglie. Uno spadaccino scheletro lo ha fatto a pezzi con un fendente solo, e la sua ombra è volata via.',
        en: 'He spun the web that trapped the Sunny, and his five hundred spider mice carried the Straw Hats off one at a time, out of the dark or from a blind spot. He stopped intruders on the mansion’s bridges by shooting from his palms a web that brute force cannot break, though fire melts it. A skeleton swordsman cut through him with a single stroke, and his shadow flew away.',
      },
      status: [{ episode: 349, value: 'deceased' }],
      affiliation: [
        {
          episode: 349,
          value: {
            it: 'Thriller Bark, capitano dei topi-ragno',
            en: 'Thriller Bark, captain of the spider mice',
          },
        },
      ],
    },
    'risky-brothers': {
      chronicle: thrillerBarkChronicles['risky-brothers'],
      role: {
        it: 'Membri dei Pirati di Rolling',
        en: 'Rolling Pirates crewmen',
      },
      log: {
        it: 'Sono salpati con i Pirati di Rolling agli ordini di Lola, e da tre anni si nascondono nella foresta di Thriller Bark senza ombra, insieme alle altre vittime dell’isola. Hanno imparato che l’ombra di uno zombie purificato si può catturare e infilare in un corpo vivo, e ne hanno messe da parte parecchie. Da soli non possono battere Moria, così aspettano qualcuno abbastanza forte a cui prestarle.',
        en: 'They sailed with the Rolling Pirates under Lola, and for three years they have hidden without shadows in the forest of Thriller Bark, with the island’s other victims. They have learned that the shadow of a purified zombie can be caught and pushed into a living body, and they have put a good many aside. They cannot beat Moria on their own, so they wait for someone strong enough to lend them to.',
      },
      status: [{ episode: 370, value: 'alive' }],
      affiliation: [
        {
          episode: 370,
          value: {
            it: 'Pirati di Rolling; Associazione delle Vittime',
            en: 'Rolling Pirates; Victim Association',
          },
        },
      ],
    },
  },
}
