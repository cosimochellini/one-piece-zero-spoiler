import type { Saga } from './saga'

/**
 * East Blue, episodes 1 to 61: the weakest sea, one crew member per island,
 * and the port the whole route is measured from.
 */

const STRAW_HATS = {
  it: 'Pirati di Cappello di Paglia',
  en: 'Straw Hat Pirates',
}

export const eastBlue: Saga = {
  entries: [
    {
      id: 'east-blue',
      kind: 'arc',
      revealedAtEpisode: 1,
      name: { it: 'Saga del East Blue', en: 'East Blue Saga' },
      summary: {
        it: 'Il mare più debole dei quattro. Qui la ciurma si forma, una persona per isola.',
        en: 'The weakest of the four seas. The crew is assembled here, one person per island.',
      },
      visual: { art: 'east-blue', tint: 'ivory' },
    },
    {
      id: 'monkey-d-luffy',
      kind: 'character',
      revealedAtEpisode: 1,
      name: { it: 'Monkey D. Rufy', en: 'Monkey D. Luffy' },
      summary: {
        it: 'Un ragazzo di gomma che salpa da solo dentro una botte, con un cappello di paglia che non è suo, e annuncia al primo che incontra che diventerà il Re dei Pirati.',
        en: 'A rubber boy who sets out alone inside a barrel, wearing a straw hat that is not his, and tells the first person he meets that he will be King of the Pirates.',
      },
      visual: { art: 'monkey-d-luffy', tint: 'red' },
    },
    {
      id: 'roronoa-zoro',
      kind: 'character',
      revealedAtEpisode: 2,
      name: { it: 'Roronoa Zoro', en: 'Roronoa Zoro' },
      summary: {
        it: 'Un cacciatore di pirati legato a un palo nel cortile di una base della Marina, che resiste da nove giorni senza mangiare per una promessa fatta a una bambina.',
        en: 'A pirate hunter tied to a post in the yard of a Marine base, nine days without food, over a promise made to a little girl.',
      },
      visual: { art: 'roronoa-zoro', tint: 'green' },
    },
    {
      id: 'shells-town',
      kind: 'place',
      revealedAtEpisode: 2,
      name: { it: 'Shells Town', en: 'Shells Town' },
      summary: {
        it: 'Una cittadina dell’East Blue cresciuta attorno a una base della Marina, con un cacciatore di pirati legato a un palo nel cortile.',
        en: 'An East Blue town grown up around a Marine base, with a pirate hunter tied to a post in the yard.',
      },
      visual: { art: 'shells-town', tint: 'azure' },
    },
    {
      id: 'shanks',
      kind: 'character',
      revealedAtEpisode: 4,
      name: { it: 'Shanks', en: 'Shanks' },
      summary: {
        it: 'Il capitano dai capelli rossi che per un anno ha fatto della taverna di un villaggio la sua casa, e che ripartendo ha lasciato il suo cappello di paglia a un bambino.',
        en: 'The red-haired captain who made a village tavern his home for a year, and left his straw hat with a small boy when he sailed.',
      },
      visual: { art: 'shanks', tint: 'red' },
    },
    {
      id: 'foosha-village',
      kind: 'place',
      revealedAtEpisode: 4,
      name: { it: 'Villaggio Fuschia', en: 'Foosha Village' },
      summary: {
        it: 'Un villaggio di mulini a vento sull’isola da cui Rufy è salpato, con una taverna dove una ciurma pirata è stata di casa per un anno.',
        en: 'A windmill village on the island Luffy sailed from, with a tavern where a pirate crew made itself at home for a year.',
      },
      visual: { art: 'foosha-village', tint: 'green' },
    },
    {
      id: 'buggy',
      kind: 'character',
      revealedAtEpisode: 5,
      name: { it: 'Bagy', en: 'Buggy' },
      summary: {
        it: 'Un capitano pirata con il naso rosso da clown, pronto a far saltare in aria chiunque lo nomini, che tiene una città svuotata sotto il tiro dei suoi cannoni.',
        en: 'A pirate captain with a red clown’s nose, ready to blow up anyone who mentions it, who keeps an emptied town under his cannons.',
      },
      visual: { art: 'buggy', tint: 'red' },
    },
    {
      id: 'nami',
      kind: 'character',
      revealedAtEpisode: 5,
      name: { it: 'Nami', en: 'Nami' },
      summary: {
        it: 'Una ladra che ruba solo ai pirati, appena scappata con la carta nautica di un capitano, e che sa leggere una mappa meglio di chiunque abbia mai incontrato.',
        en: 'A thief who steals only from pirates, fresh from running off with a captain’s sea chart, and who reads a map better than anyone she has met.',
      },
      visual: { art: 'nami', tint: 'orange' },
    },
    {
      id: 'orange-town',
      kind: 'place',
      revealedAtEpisode: 5,
      name: { it: 'Orange Town', en: 'Orange Town' },
      summary: {
        it: 'Una cittadina dell’East Blue svuotata dai suoi abitanti, occupata da una ciurma di pirati con un tendone da circo e i cannoni puntati sui tetti.',
        en: 'An East Blue town its people have fled, occupied by a pirate crew with a circus tent and cannons trained on the roofs.',
      },
      visual: { art: 'orange-town', tint: 'orange' },
    },
    {
      id: 'usopp',
      kind: 'character',
      revealedAtEpisode: 9,
      name: { it: 'Usop', en: 'Usopp' },
      summary: {
        it: 'Il bugiardo del villaggio, con un naso lungo e una fionda, che ogni mattina corre in spiaggia a gridare che i pirati stanno arrivando.',
        en: 'The village liar, long of nose and quick with a slingshot, who runs to the shore every morning shouting that pirates are coming.',
      },
      visual: { art: 'usopp', tint: 'ocher' },
    },
    {
      id: 'syrup-village',
      kind: 'place',
      revealedAtEpisode: 9,
      name: { it: 'Villaggio di Syrup', en: 'Syrup Village' },
      summary: {
        it: 'Un villaggio tranquillo delle isole Gecko, con una villa sulla collina e un ragazzo che ogni mattina grida che i pirati stanno arrivando.',
        en: 'A quiet village in the Gecko Islands, with a mansion on the hill and a boy who shouts every morning that pirates are coming.',
      },
      visual: { art: 'syrup-village', tint: 'yellow' },
    },
    {
      id: 'going-merry',
      kind: 'ship',
      revealedAtEpisode: 18,
      name: { it: 'Going Merry', en: 'Going Merry' },
      summary: {
        it: 'Una caravella con una testa di pecora a prua, regalata a una ciurma di quattro persone che non aveva ancora una nave.',
        en: 'A caravel with a sheep’s head on the prow, given to a crew of four who did not yet have a ship.',
      },
      visual: { art: 'going-merry', tint: 'ivory' },
    },
    {
      id: 'sanji',
      kind: 'character',
      revealedAtEpisode: 20,
      name: { it: 'Sanji', en: 'Sanji' },
      summary: {
        it: 'Il vice-cuoco di un ristorante galleggiante, con una sigaretta accesa e un sopracciglio a spirale, che dà da mangiare a chiunque abbia fame e combatte solo con le gambe.',
        en: 'The sous-chef of a floating restaurant, a cigarette lit and one eyebrow curled, who feeds anyone who is hungry and fights only with his legs.',
      },
      visual: { art: 'sanji', tint: 'blue' },
    },
    {
      id: 'baratie',
      kind: 'place',
      revealedAtEpisode: 20,
      name: { it: 'Baratie', en: 'Baratie' },
      summary: {
        it: 'Un ristorante galleggiante a forma di pesce, in mare aperto, dove i cuochi prendono a calci i clienti che non pagano.',
        en: 'A floating restaurant shaped like a fish, in open sea, where the cooks kick the customers who do not pay.',
      },
      visual: { art: 'baratie', tint: 'cyan' },
    },
    {
      id: 'dracule-mihawk',
      kind: 'character',
      revealedAtEpisode: 24,
      name: { it: 'Drakul Mihawk', en: 'Dracule Mihawk' },
      summary: {
        it: 'Lo spadaccino più forte del mondo, arrivato su una barca a forma di bara con una spada nera larga quanto lui, che taglia un galeone in due per passare il tempo.',
        en: 'The strongest swordsman in the world, arrived in a coffin-shaped boat with a black sword as broad as himself, who cuts a galleon in half to pass the time.',
      },
      visual: { art: 'dracule-mihawk', tint: 'ocher' },
    },
    {
      id: 'smoker',
      kind: 'character',
      revealedAtEpisode: 49,
      name: { it: 'Smoker', en: 'Smoker' },
      summary: {
        it: 'Un capitano della Marina con due sigari accesi e una giacca piena di ricambi, che non ha mai lasciato scappare un pirata dalla sua città e si scioglie in fumo quando lo colpiscono.',
        en: 'A Marine captain with two lit cigars and a jacket full of spares, who has never let a pirate leave his town and turns to smoke when he is hit.',
      },
      visual: { art: 'smoker', tint: 'azure' },
    },
  ],

  dossiers: {
    'monkey-d-luffy': {
      role: { it: 'Capitano', en: 'Captain' },
      log: {
        it: 'Diciassette anni, un sorriso che non si spegne e nessuna nave: parte dentro una botte e recluta il primo membro della ciurma nel giro di un pomeriggio. Da bambino ha mangiato un frutto del diavolo e da allora è di gomma, il che vuol dire che il mare lo respinge e che non sa nuotare. Salpa lo stesso.',
        en: 'Seventeen, a grin that does not switch off, and no ship: he sets out inside a barrel and recruits the first member of his crew within an afternoon. He ate a devil fruit as a child and has been rubber ever since, which means the sea rejects him and he cannot swim. He sails anyway.',
      },
      affiliation: [
        {
          episode: 1,
          value: {
            it: 'Capitano di una ciurma che non esiste ancora',
            en: 'Captain of a crew that does not exist yet',
          },
        },
        { episode: 3, value: STRAW_HATS },
      ],
      origin: [
        {
          episode: 4,
          value: {
            it: 'Villaggio Fuschia, East Blue',
            en: 'Foosha Village, East Blue',
          },
        },
      ],
      epithet: [
        { episode: 45, value: { it: 'Cappello di Paglia', en: 'Straw Hat' } },
      ],
      devilFruit: [
        { episode: 1, value: { it: 'Frutto Gom Gom', en: 'Gum-Gum Fruit' } },
      ],
      bounty: [
        { episode: 45, value: 30_000_000 },
        { episode: 130, value: 100_000_000 },
        { episode: 320, value: 300_000_000 },
        { episode: 512, value: 400_000_000 },
        { episode: 746, value: 500_000_000 },
        { episode: 879, value: 1_500_000_000 },
        { episode: 1086, value: 3_000_000_000 },
      ],
    },
    'roronoa-zoro': {
      role: {
        it: 'Spadaccino, cacciatore di pirati',
        en: 'Swordsman, pirate hunter',
      },
      log: {
        it: 'Combatte con tre spade, una delle quali tiene in bocca, e ha un nome che i pirati dell’East Blue pronunciano a bassa voce. Si è fatto legare a un palo per un mese piuttosto che chiedere scusa a un ufficiale che non lo meritava. Accetta di imbarcarsi con un patto: se il capitano gli farà mai rinunciare al suo sogno, sarà lui a farlo pagare.',
        en: 'He fights with three swords, one of them held in his teeth, and his name is one East Blue pirates say quietly. He let himself be tied to a post for a month rather than apologise to an officer who did not deserve it. He signs on with a condition: if the captain ever makes him give up his dream, he will make him pay for it.',
      },
      affiliation: [
        {
          episode: 2,
          value: {
            it: 'Cacciatore di pirati per conto suo',
            en: 'Pirate hunter on his own account',
          },
        },
        { episode: 3, value: STRAW_HATS },
      ],
      origin: [{ episode: 2, value: { it: 'East Blue', en: 'East Blue' } }],
      epithet: [
        {
          episode: 2,
          value: { it: 'Cacciatore di pirati', en: 'Pirate Hunter' },
        },
      ],
      bounty: [
        { episode: 130, value: 60_000_000 },
        { episode: 320, value: 120_000_000 },
        { episode: 746, value: 320_000_000 },
        { episode: 1086, value: 1_111_000_000 },
      ],
    },
    shanks: {
      role: { it: 'Capitano pirata', en: 'Pirate captain' },
      log: {
        it: 'Beve, ride e lascia che un bandito gli versi il vino in testa senza reagire, perché una rissa non vale la pena. Poi lo stesso bandito tocca il bambino della taverna, e il mare intero viene a sapere di che cosa è capace. Riparte con un braccio in meno e senza il cappello, entrambi lasciati a Rufy insieme a una promessa.',
        en: 'He drinks, he laughs, and he lets a bandit pour wine over his head without lifting a finger, because a brawl is not worth it. Then the same bandit lays hands on the boy from the tavern, and the whole sea learns what he can do. He sails on one arm lighter and without his hat, both left with Luffy along with a promise.',
      },
      affiliation: [
        {
          episode: 4,
          value: {
            it: 'Pirati del Rosso, capitano',
            en: 'Red Hair Pirates, captain',
          },
        },
      ],
      epithet: [{ episode: 4, value: { it: 'Il Rosso', en: 'Red-Haired' } }],
      bounty: [{ episode: 958, value: 4_048_900_000 }],
    },
    buggy: {
      role: {
        it: 'Capitano dei Pirati di Bagy',
        en: 'Captain of the Buggy Pirates',
      },
      log: {
        it: 'Ha svuotato Orange Town a cannonate e ci ha piantato un tendone da circo, con un domatore, un acrobata e un leone al seguito. Il suo corpo si separa in pezzi che volano da soli, cosa che rende inutile tagliarlo. Odia ogni parola che assomigli a «naso», e la sua ciurma ha imparato a non pronunciarla.',
        en: 'He emptied Orange Town with cannon fire and pitched a circus tent in it, a lion tamer, an acrobat and a lion in tow. His body comes apart into pieces that fly on their own, which makes cutting him pointless. He hates any word that sounds like “nose”, and his crew has learned not to say it.',
      },
      affiliation: [
        {
          episode: 5,
          value: {
            it: 'Pirati di Bagy, capitano',
            en: 'Buggy Pirates, captain',
          },
        },
        {
          episode: 517,
          value: { it: 'Flotta dei Sette', en: 'Seven Warlords of the Sea' },
        },
        { episode: 1088, value: { it: 'Cross Guild', en: 'Cross Guild' } },
      ],
      epithet: [{ episode: 5, value: { it: 'Il Clown', en: 'the Clown' } }],
      devilFruit: [
        {
          episode: 5,
          value: { it: 'Frutto Puzzle Puzzle', en: 'Chop-Chop Fruit' },
        },
      ],
      bounty: [
        { episode: 5, value: 15_000_000 },
        { episode: 1088, value: 3_189_000_000 },
      ],
    },
    nami: {
      role: { it: 'Navigatrice e ladra', en: 'Navigator and thief' },
      log: {
        it: 'Disegna carte nautiche a mano e sente il tempo cambiare prima che cambi. Ha rubato una mappa della Rotta Maggiore a Bagy e si è aggregata a Rufy e Zoro solo per convenienza, come tiene a precisare. Odia i pirati, e non spiega perché.',
        en: 'She draws sea charts by hand and feels the weather turn before it does. She stole a map of the Grand Line from Buggy and has thrown in with Luffy and Zoro purely for convenience, as she is careful to point out. She hates pirates, and does not say why.',
      },
      affiliation: [
        {
          episode: 5,
          value: { it: 'Ladra per conto suo', en: 'Thief on her own account' },
        },
        { episode: 44, value: STRAW_HATS },
      ],
      origin: [
        {
          episode: 31,
          value: {
            it: 'Villaggio di Cocoyashi, East Blue',
            en: 'Cocoyasi Village, East Blue',
          },
        },
      ],
      epithet: [
        { episode: 130, value: { it: 'Gatta Ladra', en: 'Cat Burglar' } },
      ],
      bounty: [
        { episode: 130, value: 16_000_000 },
        { episode: 746, value: 66_000_000 },
        { episode: 1086, value: 366_000_000 },
      ],
    },
    usopp: {
      role: { it: 'Tiratore', en: 'Marksman' },
      log: {
        it: 'Comanda una ciurma pirata di tre bambini con una bandiera, e racconta ogni giorno a una ragazza malata le sue avventure inventate. Suo padre è salpato con dei pirati veri quando lui era piccolo, e lui ha deciso di diventare un uomo di mare coraggioso. Con la fionda non sbaglia un colpo; il coraggio è ancora in lavorazione.',
        en: 'He captains a pirate crew of three children with a flag, and tells a sick girl a new invented adventure every day. His father sailed with real pirates when he was small, and he has decided to become a brave man of the sea. With a slingshot he never misses; the bravery is still a work in progress.',
      },
      affiliation: [
        {
          episode: 9,
          value: {
            it: 'Pirati di Usop, capitano',
            en: 'Usopp Pirates, captain',
          },
        },
        { episode: 18, value: STRAW_HATS },
      ],
      origin: [
        {
          episode: 9,
          value: {
            it: 'Villaggio di Syrup, East Blue',
            en: 'Syrup Village, East Blue',
          },
        },
      ],
      epithet: [
        { episode: 320, value: { it: 'Sogeking', en: 'Sogeking' } },
        { episode: 746, value: { it: 'Dio Usop', en: 'God Usopp' } },
      ],
      bounty: [
        { episode: 320, value: 30_000_000 },
        { episode: 746, value: 200_000_000 },
        { episode: 1086, value: 500_000_000 },
      ],
    },
    sanji: {
      role: { it: 'Cuoco', en: 'Cook' },
      log: {
        it: 'Cucina al Baratie sotto un vecchio con una gamba di legno che lo chiama moccioso, e prende a calci chiunque sprechi il cibo. Non usa mai le mani in combattimento: le mani di un cuoco sono per la cucina. Sogna un mare leggendario dove si trovano tutti i pesci del mondo, e non lo dice a nessuno che possa riderne.',
        en: 'He cooks at the Baratie under an old man with a peg leg who calls him a brat, and kicks anyone who wastes food. He never uses his hands in a fight: a cook’s hands are for the kitchen. He dreams of a legendary sea where every fish in the world can be found, and tells nobody who might laugh.',
      },
      affiliation: [
        {
          episode: 20,
          value: { it: 'Baratie, vice-cuoco', en: 'Baratie, sous-chef' },
        },
        { episode: 30, value: STRAW_HATS },
      ],
      origin: [
        {
          episode: 20,
          value: { it: 'Il Baratie, East Blue', en: 'The Baratie, East Blue' },
        },
        {
          episode: 793,
          value: {
            it: 'Regno di Germa, North Blue',
            en: 'Germa Kingdom, North Blue',
          },
        },
      ],
      epithet: [{ episode: 320, value: { it: 'Gamba Nera', en: 'Black Leg' } }],
      bounty: [
        { episode: 320, value: 77_000_000 },
        { episode: 746, value: 177_000_000 },
        { episode: 879, value: 330_000_000 },
        { episode: 1086, value: 1_032_000_000 },
      ],
    },
    'dracule-mihawk': {
      role: {
        it: 'Lo spadaccino più forte del mondo',
        en: 'The strongest swordsman in the world',
      },
      log: {
        it: 'Ha inseguito una flotta pirata dall’altra parte del mondo fin nell’East Blue per noia, e l’ha ridotta a relitti. Accetta il duello di uno sconosciuto con tre spade e lo affronta con un coltellino, perché una spada vera sarebbe uno spreco. Quando quello sconosciuto rifiuta di arretrare, gli lascia una ferita e un invito a superarlo.',
        en: 'He chased a pirate fleet from the other side of the world into East Blue out of boredom, and left it in splinters. He accepts a duel from a stranger with three swords and fights him with a paring knife, because a real blade would be a waste. When that stranger refuses to step back, he leaves him a scar and an invitation to surpass him.',
      },
      affiliation: [
        {
          episode: 24,
          value: { it: 'Flotta dei Sette', en: 'Seven Warlords of the Sea' },
        },
        { episode: 1088, value: { it: 'Cross Guild', en: 'Cross Guild' } },
      ],
      epithet: [
        { episode: 24, value: { it: 'Occhi di Falco', en: 'Hawk-Eye' } },
      ],
      bounty: [{ episode: 1088, value: 3_590_000_000 }],
    },
    smoker: {
      role: { it: 'Capitano della Marina', en: 'Marine captain' },
      log: {
        it: 'Comanda la base di Loguetown, la città dove il Re dei Pirati fu eseguito e da cui ogni pirata dell’East Blue parte per la Rotta Maggiore. Il suo corpo diventa fumo, e nessuno di quelli che ha inseguito è arrivato al mare aperto. Non fa eccezioni per i ragazzi di gomma.',
        en: 'He commands the base at Loguetown, the town where the Pirate King was executed and from which every East Blue pirate sets out for the Grand Line. His body turns to smoke, and none of the pirates he has chased has reached open water. He makes no exceptions for rubber boys.',
      },
      affiliation: [
        {
          episode: 49,
          value: { it: 'Marina, capitano', en: 'Marines, captain' },
        },
        {
          episode: 130,
          value: { it: 'Marina, commodoro', en: 'Marines, commodore' },
        },
        {
          episode: 517,
          value: { it: 'Marina, viceammiraglio', en: 'Marines, vice admiral' },
        },
      ],
      epithet: [
        { episode: 49, value: { it: 'Cacciatore Bianco', en: 'White Hunter' } },
      ],
      devilFruit: [
        {
          episode: 49,
          value: { it: 'Frutto Fumo Fumo', en: 'Smoke-Smoke Fruit' },
        },
      ],
    },
  },
}
