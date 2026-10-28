import type { Relationship, Timeline } from '~/data/types'

/** Revisions: docs/content-provenance/relationships.json and sources.json. */
const retained = {
  foxyLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Rival captain', it: 'Capitano rivale' },
    summary: {
      en: 'Foxy challenges Luffy to a Davy Back Fight with crewmates as the stakes.',
      it: 'Foxy sfida Rufy al Davy Back Fight, con i membri delle ciurme come posta.',
    },
  },
  foxyPorche: {
    character: 'porche',
    type: { en: 'Supporter', it: 'Sostenitrice' },
    summary: {
      en: 'Porche backs Foxy during the Davy Back Fight and encourages him when he loses confidence.',
      it: 'Polluce sostiene Foxy durante il Davy Back Fight e lo incoraggia quando si abbatte.',
    },
  },
  foxyHamburg: {
    character: 'hamburg',
    type: { en: 'Accomplice', it: 'Complice' },
    summary: {
      en: 'Hamburg carries Foxy and helps him interfere with the Donut Race.',
      it: 'Hamburg trasporta Foxy e lo aiuta a ostacolare gli avversari nella Donut Race.',
    },
  },
  foxyLuffyDefeat: {
    character: 'monkey-d-luffy',
    type: { en: 'Rival who defeats him', it: 'Rivale che lo sconfigge' },
    summary: {
      en: 'Luffy defeats Foxy in the final duel and takes his crew’s flag.',
      it: 'Rufy sconfigge Foxy nel duello finale e prende la bandiera della sua ciurma.',
    },
  },
  porcheFoxy: {
    character: 'foxy',
    type: { en: 'Davy Back Fight captain', it: 'Capitano al Davy Back Fight' },
    summary: {
      en: 'Porche supports Foxy and races for his crew against the Straw Hats.',
      it: 'Polluce sostiene Foxy e gareggia per la sua ciurma contro i Cappello di Paglia.',
    },
  },
  porcheChopper: {
    character: 'tony-tony-chopper',
    type: { en: 'Crewmate won in a game', it: 'Compagno vinto in gara' },
    summary: {
      en: 'Porche welcomes Chopper after Foxy takes him as the prize for winning the Donut Race.',
      it: 'Polluce accoglie Chopper quando Foxy lo prende come premio per la vittoria nella Donut Race.',
    },
  },
  porcheChopperReturned: {
    character: 'tony-tony-chopper',
    type: { en: 'Former prize crewmate', it: 'Ex compagno vinto in gara' },
    summary: {
      en: 'Porche is upset when Chopper returns to the Straw Hats.',
      it: 'Polluce si dispiace quando Chopper torna dai Cappello di Paglia.',
    },
  },
  hamburgFoxy: {
    character: 'foxy',
    type: { en: 'Davy Back Fight captain', it: 'Capitano al Davy Back Fight' },
    summary: {
      en: 'Hamburg helps Foxy obstruct the Straw Hats during the Donut Race.',
      it: 'Hamburg aiuta Foxy a ostacolare i Cappello di Paglia durante la Donut Race.',
    },
  },
  hamburgPickles: {
    character: 'pickles',
    type: { en: 'Groggy Ring teammate', it: 'Compagno nel Groggy Ring' },
    summary: {
      en: 'Hamburg and Pickles coordinate their attacks against Zoro and Sanji.',
      it: 'Hamburg e Pickles coordinano gli attacchi contro Zoro e Sanji.',
    },
  },
  hamburgPan: {
    character: 'big-pan',
    type: { en: 'Groggy Ring teammate', it: 'Compagno nel Groggy Ring' },
    summary: {
      en: 'Hamburg fights alongside Big Pan in the Groggy Ring.',
      it: 'Hamburg combatte al fianco di Big Pan nel Groggy Ring.',
    },
  },
  tonjitLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Visitor who helps him', it: 'Visitatore che lo aiuta' },
    summary: {
      en: 'Luffy breaks Tonjit’s stilts and befriends him after his long isolation.',
      it: 'Rufy rompe i trampoli di Tonjit e fa amicizia con lui dopo il suo lungo isolamento.',
    },
  },
  tonjitChopper: {
    character: 'tony-tony-chopper',
    type: { en: 'Doctor who helps him', it: 'Medico che lo aiuta' },
    summary: {
      en: 'Chopper treats Tonjit’s horse after she is attacked.',
      it: 'Chopper cura la cavalla di Tonjit dopo l’aggressione.',
    },
  },
  tonjitKuzan: {
    character: 'kuzan',
    type: { en: 'Benefactor', it: 'Benefattore' },
    summary: {
      en: 'Kuzan freezes a route across the sea so Tonjit can catch up with his tribe.',
      it: 'Kuzan congela un percorso sul mare per permettere a Tonjit di raggiungere la sua tribù.',
    },
  },
  itomimizuFoxy: {
    character: 'foxy',
    type: {
      en: 'Captain whose games he announces',
      it: 'Capitano di cui presenta le gare',
    },
    summary: {
      en: 'Itomimizu announces the Davy Back Fight held by Foxy’s crew.',
      it: 'Itomimizu presenta le gare del Davy Back Fight della ciurma di Foxy.',
    },
  },
  picklesFoxy: {
    character: 'foxy',
    type: { en: 'Davy Back Fight captain', it: 'Capitano al Davy Back Fight' },
    summary: {
      en: 'Foxy chooses Pickles to fight in the Groggy Ring.',
      it: 'Foxy sceglie Pickles per combattere nel Groggy Ring.',
    },
  },
  picklesHamburg: {
    character: 'hamburg',
    type: { en: 'Groggy Ring teammate', it: 'Compagno nel Groggy Ring' },
    summary: {
      en: 'Pickles and Hamburg combine their attacks in the Groggy Ring.',
      it: 'Pickles e Hamburg combinano gli attacchi nel Groggy Ring.',
    },
  },
  picklesPan: {
    character: 'big-pan',
    type: { en: 'Groggy Ring teammate', it: 'Compagno nel Groggy Ring' },
    summary: {
      en: 'Pickles coordinates his attacks with Big Pan during the Groggy Ring.',
      it: 'Pickles coordina gli attacchi con Big Pan durante il Groggy Ring.',
    },
  },
  picklesSanji: {
    character: 'sanji',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Sanji knocks Pickles out of the Groggy Ring while fighting alongside Zoro.',
      it: 'Sanji mette Pickles fuori combattimento nel Groggy Ring mentre lotta al fianco di Zoro.',
    },
  },
  panHamburg: {
    character: 'hamburg',
    type: { en: 'Groggy Ring teammate', it: 'Compagno nel Groggy Ring' },
    summary: {
      en: 'Big Pan fights alongside Hamburg in the Groggy Ring.',
      it: 'Big Pan combatte al fianco di Hamburg nel Groggy Ring.',
    },
  },
  panPickles: {
    character: 'pickles',
    type: { en: 'Groggy Ring teammate', it: 'Compagno nel Groggy Ring' },
    summary: {
      en: 'Big Pan combines his attacks with Pickles during the Groggy Ring.',
      it: 'Big Pan combina gli attacchi con Pickles durante il Groggy Ring.',
    },
  },
  panFoxy: {
    character: 'foxy',
    type: { en: 'Davy Back Fight captain', it: 'Capitano al Davy Back Fight' },
    summary: {
      en: 'Foxy selects Big Pan to face the Straw Hats in the Groggy Ring.',
      it: 'Foxy sceglie Big Pan per affrontare i Cappello di Paglia nel Groggy Ring.',
    },
  },
  yokozunaFranky: {
    character: 'franky',
    type: { en: 'Childhood companion', it: 'Compagno d’infanzia' },
    summary: {
      en: 'Franky teaches Yokozuna to swim while working at Tom’s yard.',
      it: 'Franky insegna a Yokozuna a nuotare mentre lavora nel cantiere di Tom.',
    },
  },
  yokozunaTom: {
    character: 'tom',
    type: { en: 'Caretaker', it: 'Custode' },
    summary: {
      en: 'Yokozuna lives with Tom and his workers at the shipyard.',
      it: 'Yokozuna vive con Tom e i suoi collaboratori nel cantiere.',
    },
  },
  yokozunaKokoro: {
    character: 'kokoro',
    type: { en: 'Old acquaintance', it: 'Vecchia conoscenza' },
    summary: {
      en: 'Kokoro knows Yokozuna from the days of Tom’s workshop.',
      it: 'Kokoro conosce Yokozuna dai tempi del cantiere di Tom.',
    },
  },
  yokozunaFrankyRescue: {
    character: 'franky',
    type: {
      en: 'Companion he goes to rescue',
      it: 'Compagno che va a salvare',
    },
    summary: {
      en: 'Yokozuna joins the rescue party when he learns that Franky is in danger.',
      it: 'Yokozuna si unisce al gruppo di soccorso quando scopre che Franky è in pericolo.',
    },
  },
  iceburgKalifa: {
    character: 'kalifa',
    type: { en: 'Secretary', it: 'Segretaria' },
    summary: {
      en: 'Kalifa works as Iceburg’s secretary and accompanies him in Water Seven.',
      it: 'Kalifa lavora come segretaria di Iceburg e lo accompagna a Water Seven.',
    },
  },
  iceburgPaulie: {
    character: 'paulie',
    type: { en: 'Trusted shipwright', it: 'Carpentiere di fiducia' },
    summary: {
      en: 'Paulie works for Iceburg at Dock One.',
      it: 'Paulie lavora per Iceburg al Dock 1.',
    },
  },
  iceburgLucci: {
    character: 'rob-lucci',
    type: { en: 'Shipwright', it: 'Carpentiere' },
    summary: {
      en: 'Lucci works as a foreman at Iceburg’s shipyard.',
      it: 'Lucci lavora come caposquadra nel cantiere di Iceburg.',
    },
  },
  iceburgKalifaBetrayal: {
    character: 'kalifa',
    type: { en: 'Undercover enemy', it: 'Nemica sotto copertura' },
    summary: {
      en: 'Kalifa reveals that her job with Iceburg was a cover for a CP9 mission.',
      it: 'Kalifa rivela che il suo lavoro per Iceburg era una copertura per una missione del CP9.',
    },
  },
  iceburgLucciBetrayal: {
    character: 'rob-lucci',
    type: { en: 'Undercover enemy', it: 'Nemico sotto copertura' },
    summary: {
      en: 'Lucci turns against Iceburg and seeks the blueprints he protects.',
      it: 'Lucci si rivolta contro Iceburg e cerca i progetti che custodisce.',
    },
  },
  iceburgTom: {
    character: 'tom',
    type: { en: 'Teacher', it: 'Maestro' },
    summary: {
      en: 'Tom trains Iceburg as a shipwright alongside Franky.',
      it: 'Tom insegna a Iceburg il mestiere di carpentiere insieme a Franky.',
    },
  },
  iceburgFranky: {
    character: 'franky',
    type: { en: 'Fellow apprentice', it: 'Compagno di apprendistato' },
    summary: {
      en: 'Iceburg and Franky grow up working under Tom, despite their frequent arguments.',
      it: 'Iceburg e Franky crescono lavorando per Tom, nonostante i frequenti litigi.',
    },
  },
  iceburgFrankyShip: {
    character: 'franky',
    type: { en: 'Shipbuilding partner', it: 'Compagno di costruzione' },
    summary: {
      en: 'Iceburg helps Franky build a new ship for the Straw Hats.',
      it: 'Iceburg aiuta Franky a costruire una nuova nave per i Cappello di Paglia.',
    },
  },
  iceburgFrankyDeparture: {
    character: 'franky',
    type: { en: 'Friend he encourages', it: 'Amico che incoraggia' },
    summary: {
      en: 'Iceburg urges Franky to forgive himself over Tom and follow his dream at sea.',
      it: 'Iceburg esorta Franky a perdonarsi per Tom e a seguire il suo sogno in mare.',
    },
  },
  paulieIceburg: {
    character: 'iceburg',
    type: { en: 'Employer he protects', it: 'Datore di lavoro che protegge' },
    summary: {
      en: 'Paulie works for Iceburg and helps guard him after the attack on his life.',
      it: 'Paulie lavora per Iceburg e contribuisce a proteggerlo dopo l’attentato.',
    },
  },
  paulieLucci: {
    character: 'rob-lucci',
    type: { en: 'Colleague', it: 'Collega' },
    summary: {
      en: 'Paulie works with Lucci at Dock One and argues with him over his conduct.',
      it: 'Paulie lavora con Lucci al Dock 1 e litiga con lui per il suo comportamento.',
    },
  },
  paulieLucciBetrayal: {
    character: 'rob-lucci',
    type: { en: 'Colleague who betrays him', it: 'Collega che lo tradisce' },
    summary: {
      en: 'Lucci reveals his CP9 allegiance and attacks Paulie when he tries to protect Iceburg.',
      it: 'Lucci rivela di appartenere al CP9 e attacca Paulie quando cerca di proteggere Iceburg.',
    },
  },
  paulieLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'Luffy helps Paulie escape the trap laid by the assassins in Iceburg’s office.',
      it: 'Rufy aiuta Paulie a liberarsi dalla trappola degli assassini nell’ufficio di Iceburg.',
    },
  },
  paulieChopper: {
    character: 'tony-tony-chopper',
    type: { en: 'Rescuer', it: 'Soccorritore' },
    summary: {
      en: 'Chopper carries Paulie and Iceburg out of the burning headquarters.',
      it: 'Chopper porta Paulie e Iceburg fuori dalla sede in fiamme.',
    },
  },
  kokoroChimney: {
    character: 'chimney',
    type: { en: 'Granddaughter', it: 'Nipote' },
    summary: {
      en: 'Chimney stays with her grandmother Kokoro at Shift Station.',
      it: 'Chimney vive con la nonna Kokoro alla stazione del mare.',
    },
  },
  kokoroTom: {
    character: 'tom',
    type: { en: 'Former employer', it: 'Ex datore di lavoro' },
    summary: {
      en: 'Kokoro works as Tom’s secretary during the construction of the sea train.',
      it: 'Kokoro lavora come segretaria di Tom durante la costruzione del treno del mare.',
    },
  },
  kokoroFranky: {
    character: 'franky',
    type: {
      en: 'Apprentice she looks after',
      it: 'Apprendista di cui si prende cura',
    },
    summary: {
      en: 'Kokoro looks after Franky while he trains at Tom’s workshop.',
      it: 'Kokoro si prende cura di Franky mentre impara il mestiere nel cantiere di Tom.',
    },
  },
  kokoroIceburg: {
    character: 'iceburg',
    type: {
      en: 'Apprentice she looks after',
      it: 'Apprendista di cui si prende cura',
    },
    summary: {
      en: 'Kokoro knows Iceburg from his apprenticeship with Tom.',
      it: 'Kokoro conosce Iceburg dai tempi del suo apprendistato con Tom.',
    },
  },
  chimneyKokoro: {
    character: 'kokoro',
    type: { en: 'Grandmother', it: 'Nonna' },
    summary: {
      en: 'Chimney lives with Kokoro and accompanies her around Water Seven.',
      it: 'Chimney vive con Kokoro e la accompagna a Water Seven.',
    },
  },
  kiwiFranky: {
    character: 'franky',
    type: { en: 'Boss they support', it: 'Capo che sostengono' },
    summary: {
      en: 'Kiwi and Mozu accompany the rescue party sent to free Franky from Enies Lobby.',
      it: 'Kiwi e Mozu accompagnano il gruppo partito per liberare Franky da Enies Lobby.',
    },
  },
  zambaiFranky: {
    character: 'franky',
    type: { en: 'Boss he goes to rescue', it: 'Capo che va a salvare' },
    summary: {
      en: 'Zambai leads the Franky Family into Enies Lobby to rescue Franky.',
      it: 'Zanbai guida la Franky Family a Enies Lobby per salvare Franky.',
    },
  },
  zambaiFrankyDeparture: {
    character: 'franky',
    type: { en: 'Boss he sends to sea', it: 'Capo che spinge a partire' },
    summary: {
      en: 'Zambai helps persuade Franky to join the Straw Hats and pursue his dream.',
      it: 'Zanbai contribuisce a convincere Franky a unirsi ai Cappello di Paglia e a seguire il suo sogno.',
    },
  },
  luluIceburg: {
    character: 'iceburg',
    type: { en: 'Employer', it: 'Datore di lavoro' },
    summary: {
      en: 'Lulu works at Iceburg’s shipyard and helps deal with visitors at Dock One.',
      it: 'Lulu lavora nel cantiere di Iceburg e si occupa dei visitatori al Dock 1.',
    },
  },
  luluPaulie: {
    character: 'paulie',
    type: { en: 'Fellow shipwright', it: 'Collega carpentiere' },
    summary: {
      en: 'Lulu and Paulie work together at Dock One.',
      it: 'Lulu e Pauly lavorano insieme al Dock 1.',
    },
  },
  luluFranky: {
    character: 'franky',
    type: { en: 'Shipbuilding partner', it: 'Compagno di costruzione' },
    summary: {
      en: 'Lulu helps Franky and Iceburg build the Straw Hats’ new ship.',
      it: 'Lulu aiuta Franky e Iceburg a costruire la nuova nave dei Cappello di Paglia.',
    },
  },
  tilestoneIceburg: {
    character: 'iceburg',
    type: { en: 'Employer he protects', it: 'Datore di lavoro che protegge' },
    summary: {
      en: 'Tilestone helps guard Iceburg against another assassination attempt.',
      it: 'Tilestone contribuisce a proteggere Iceburg da un nuovo attentato.',
    },
  },
  tilestoneFranky: {
    character: 'franky',
    type: { en: 'Shipbuilding partner', it: 'Compagno di costruzione' },
    summary: {
      en: 'Tilestone helps Franky and the other shipwrights build the Straw Hats’ new ship.',
      it: 'Tilestone aiuta Franky e gli altri carpentieri a costruire la nuova nave dei Cappello di Paglia.',
    },
  },
  tomFranky: {
    character: 'franky',
    type: { en: 'Apprentice he protects', it: 'Allievo che protegge' },
    summary: {
      en: 'Tom takes responsibility for the attack carried out with Franky’s ships to spare his apprentices.',
      it: 'Tom si assume la responsabilità dell’attacco compiuto con le navi di Franky per salvare i suoi allievi.',
    },
  },
  tomIceburg: {
    character: 'iceburg',
    type: { en: 'Apprentice', it: 'Allievo' },
    summary: {
      en: 'Iceburg learns shipbuilding from Tom and helps him construct the sea train.',
      it: 'Iceburg impara da Tom a costruire navi e lo aiuta a realizzare il treno del mare.',
    },
  },
  tomRoger: {
    character: 'gold-roger',
    type: { en: 'Client', it: 'Committente' },
    summary: {
      en: 'Tom builds the Oro Jackson for Roger and remains proud of his work despite his sentence.',
      it: 'Tom costruisce la Oro Jackson per Roger e resta orgoglioso del proprio lavoro nonostante la condanna.',
    },
  },
  tomKokoro: {
    character: 'kokoro',
    type: { en: 'Secretary', it: 'Segretaria' },
    summary: {
      en: 'Kokoro works alongside Tom as his secretary at the shipyard.',
      it: 'Kokoro lavora al fianco di Tom come segretaria del cantiere.',
    },
  },
  tomSpandam: {
    character: 'spandam',
    type: { en: 'Persecutor', it: 'Persecutore' },
    summary: {
      en: 'Spandam frames Tom to obtain the blueprints he refuses to surrender.',
      it: 'Spandam incastra Tom per ottenere i progetti che si rifiuta di consegnare.',
    },
  },
  bullsFranky: {
    character: 'franky',
    type: { en: 'Rescuer', it: 'Soccorritore' },
    summary: {
      en: 'Franky spares Sodom and Gomorrah after finding them inside a Sea King, and they remain loyal to him.',
      it: 'Franky risparmia Sodoma e Gomorra dopo averli trovati dentro un Re del Mare, e i due gli restano fedeli.',
    },
  },
  bullsChopper: {
    character: 'tony-tony-chopper',
    type: { en: 'Interpreter', it: 'Interprete' },
    summary: {
      en: 'Chopper translates Sodom and Gomorrah’s words for their companions during the assault on Enies Lobby.',
      it: 'Chopper traduce le parole di Sodoma e Gomorra per i loro compagni durante l’assalto a Enies Lobby.',
    },
  },
  frankyLuffyEnemy: {
    character: 'monkey-d-luffy',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'Franky’s gang steals the money meant for Luffy’s new ship, and Luffy destroys its headquarters.',
      it: 'La banda di Franky ruba il denaro destinato alla nuova nave di Rufy, che ne distrugge la sede.',
    },
  },
  frankyUsoppVictim: {
    character: 'usopp',
    type: { en: 'Victim of his gang', it: 'Vittima della sua banda' },
    summary: {
      en: 'Franky takes the money his men steal from Usopp after beating him.',
      it: 'Franky prende il denaro che i suoi uomini rubano a Usop dopo averlo picchiato.',
    },
  },
  frankyUsoppUnderstanding: {
    character: 'usopp',
    type: {
      en: 'Pirate he comes to understand',
      it: 'Pirata che impara a capire',
    },
    summary: {
      en: 'Franky listens to Usopp’s account of the Merry and explains the ship’s spirit to him.',
      it: 'Franky ascolta il racconto di Usop sulla Merry e gli spiega lo spirito della nave.',
    },
  },
  frankyTom: {
    character: 'tom',
    type: { en: 'Teacher', it: 'Maestro' },
    summary: {
      en: 'Tom teaches Franky shipbuilding alongside Iceburg.',
      it: 'Tom insegna a Franky il mestiere di carpentiere insieme a Iceburg.',
    },
  },
  frankyIceburg: {
    character: 'iceburg',
    type: { en: 'Fellow apprentice', it: 'Compagno di apprendistato' },
    summary: {
      en: 'Franky and Iceburg grow up as Tom’s apprentices and help build the sea train.',
      it: 'Franky e Iceburg crescono come allievi di Tom e aiutano a costruire il treno del mare.',
    },
  },
  frankyTomSacrifice: {
    character: 'tom',
    type: { en: 'Teacher who protects him', it: 'Maestro che lo protegge' },
    summary: {
      en: 'Tom accepts punishment to protect his apprentices after Franky’s ships are used to frame them.',
      it: 'Tom accetta la condanna per proteggere i suoi allievi dopo che le navi di Franky vengono usate per incastrarli.',
    },
  },
  frankyLuffyAlly: {
    character: 'monkey-d-luffy',
    type: { en: 'Rescue ally', it: 'Alleato nel salvataggio' },
    summary: {
      en: 'Franky trusts Luffy to rescue Robin and destroys the blueprints rather than hand them to CP9.',
      it: 'Franky si affida a Rufy per salvare Robin e distrugge i progetti invece di consegnarli al CP9.',
    },
  },
  frankyRobinTrust: {
    character: 'nico-robin',
    type: { en: 'Person he trusts', it: 'Persona di cui si fida' },
    summary: {
      en: 'Franky abandons his suspicions about Robin and burns the blueprints that were kept as a safeguard against her.',
      it: 'Franky abbandona i sospetti su Robin e brucia i progetti custoditi come precauzione contro di lei.',
    },
  },
  frankyLuffyCaptain: {
    character: 'monkey-d-luffy',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Franky joins Luffy’s crew as its shipwright after building its new ship.',
      it: 'Franky entra nella ciurma di Rufy come carpentiere dopo averne costruito la nuova nave.',
    },
  },
  frankyRobinCrew: {
    character: 'nico-robin',
    type: { en: 'Crewmate', it: 'Compagna di ciurma' },
    summary: {
      en: 'Franky joins Robin and the other Straw Hats after helping rescue her from Enies Lobby.',
      it: 'Franky si unisce a Robin e agli altri Cappello di Paglia dopo aver contribuito a salvarla da Enies Lobby.',
    },
  },
  frankyIceburgDeparture: {
    character: 'iceburg',
    type: { en: 'Friend who encourages him', it: 'Amico che lo incoraggia' },
    summary: {
      en: 'Iceburg helps Franky build the new ship and urges him to leave Water Seven without blaming himself for Tom.',
      it: 'Iceburg aiuta Franky a costruire la nuova nave e lo esorta a lasciare Water Seven senza incolparsi per Tom.',
    },
  },
  frankyUsoppCrew: {
    character: 'usopp',
    type: { en: 'Crewmate', it: 'Compagno di ciurma' },
    summary: {
      en: 'Usopp rejoins the crew that Franky has joined as shipwright.',
      it: 'Usop rientra nella ciurma a cui Franky si è unito come carpentiere.',
    },
  },
  frankyPink: {
    character: 'senor-pink',
    type: { en: 'Opponent he respects', it: 'Avversario che rispetta' },
    summary: {
      en: 'Franky defeats Senor Pink and offers to hear the story of the woman named Russian over a drink.',
      it: 'Franky sconfigge Señor Pink e gli propone di raccontargli davanti a un bicchiere la storia della donna chiamata Russian.',
    },
  },
  kakuIceburg: {
    character: 'iceburg',
    type: { en: 'Employer', it: 'Datore di lavoro' },
    summary: {
      en: 'Kaku works as a shipwright for Iceburg and inspects ships brought to Galley-La.',
      it: 'Kaku lavora come carpentiere per Iceburg e ispeziona le navi portate alla Galley-La.',
    },
  },
  kakuLucci: {
    character: 'rob-lucci',
    type: { en: 'Colleague', it: 'Collega' },
    summary: {
      en: 'Kaku and Lucci work as foremen at Dock One.',
      it: 'Kaku e Lucci lavorano come capisquadra al Dock 1.',
    },
  },
  kakuIceburgBetrayal: {
    character: 'iceburg',
    type: { en: 'Target of his mission', it: 'Bersaglio della sua missione' },
    summary: {
      en: 'Kaku’s job with Iceburg is a cover for a CP9 mission to obtain the blueprints.',
      it: 'Il lavoro di Kaku per Iceburg è una copertura per una missione del CP9 volta a ottenere i progetti.',
    },
  },
  kakuLucciAgent: {
    character: 'rob-lucci',
    type: { en: 'Cipher Pol partner', it: 'Compagno nel Cipher Pol' },
    summary: {
      en: 'Kaku works with Lucci as an undercover CP9 agent in Water Seven.',
      it: 'Kaku lavora con Lucci come agente del CP9 sotto copertura a Water Seven.',
    },
  },
  kakuZoro: {
    character: 'roronoa-zoro',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Zoro defeats Kaku at Enies Lobby, and Kaku hands over the key he carries.',
      it: 'Zoro sconfigge Kaku a Enies Lobby e Kaku gli consegna la chiave che porta con sé.',
    },
  },
  kakuStussy: {
    character: 'stussy',
    type: { en: 'Cipher Pol colleague', it: 'Collega nel Cipher Pol' },
    summary: {
      en: 'Kaku accompanies Stussy and Lucci on the mission to Egghead.',
      it: 'Kaku accompagna Stussy e Lucci nella missione a Egghead.',
    },
  },
  kakuStussyBetrayal: {
    character: 'stussy',
    type: { en: 'Colleague who betrays him', it: 'Collega che lo tradisce' },
    summary: {
      en: 'Stussy turns against Kaku on Egghead and puts him to sleep with a bite.',
      it: 'Stussy si rivolta contro Kaku a Egghead e lo addormenta con un morso.',
    },
  },
  kakuZoroAlly: {
    character: 'roronoa-zoro',
    type: { en: 'Temporary ally', it: 'Alleato temporaneo' },
    summary: {
      en: 'Kaku fights alongside Zoro against the Seraphim after the Straw Hats release him.',
      it: 'Kaku combatte al fianco di Zoro contro i Seraphim dopo che i Cappello di Paglia lo liberano.',
    },
  },
  kakuZoroFormerAlly: {
    character: 'roronoa-zoro',
    type: { en: 'Former temporary ally', it: 'Ex alleato temporaneo' },
    summary: {
      en: 'Kaku’s temporary cooperation with Zoro ends when Lucci resumes his attack and Sanji confines Kaku in a bubble.',
      it: 'La collaborazione temporanea di Kaku con Zoro termina quando Lucci riprende l’attacco e Sanji rinchiude Kaku in una bolla.',
    },
  },
  kakuStussyRelease: {
    character: 'stussy',
    type: {
      en: 'Former colleague who frees him',
      it: 'Ex collega che lo libera',
    },
    summary: {
      en: 'Stussy frees Kaku from the bubble, but he rejects her offer of friendship and warns her about Lucci.',
      it: 'Stussy libera Kaku dalla bolla, ma lui rifiuta la sua offerta di amicizia e la mette in guardia da Lucci.',
    },
  },
  lucciIceburg: {
    character: 'iceburg',
    type: { en: 'Employer', it: 'Datore di lavoro' },
    summary: {
      en: 'Lucci works at Iceburg’s shipyard as a Dock One foreman.',
      it: 'Lucci lavora nel cantiere di Iceburg come caposquadra del Dock 1.',
    },
  },
  lucciHattori: {
    character: 'hattori',
    type: { en: 'Companion', it: 'Compagno' },
    summary: {
      en: 'Hattori accompanies Lucci, who speaks through the pigeon by ventriloquism.',
      it: 'Hattori accompagna Lucci, che parla attraverso il piccione usando il ventriloquismo.',
    },
  },
  lucciKaku: {
    character: 'kaku',
    type: { en: 'Colleague', it: 'Collega' },
    summary: {
      en: 'Lucci and Kaku work together as Galley-La foremen.',
      it: 'Lucci e Kaku lavorano insieme come capisquadra della Galley-La.',
    },
  },
  lucciIceburgBetrayal: {
    character: 'iceburg',
    type: { en: 'Target of his mission', it: 'Bersaglio della sua missione' },
    summary: {
      en: 'Lucci reveals his CP9 identity and attacks Iceburg to obtain the blueprints.',
      it: 'Lucci rivela la sua identità di agente del CP9 e attacca Iceburg per ottenere i progetti.',
    },
  },
  lucciKakuAgent: {
    character: 'kaku',
    type: { en: 'Cipher Pol partner', it: 'Compagno nel Cipher Pol' },
    summary: {
      en: 'Lucci and Kaku carry out the CP9 infiltration of Water Seven together.',
      it: 'Lucci e Kaku svolgono insieme la missione di infiltrazione del CP9 a Water Seven.',
    },
  },
  lucciSpandam: {
    character: 'spandam',
    type: { en: 'CP9 chief', it: 'Capo del CP9' },
    summary: {
      en: 'Lucci follows Spandam’s orders during the operation at Enies Lobby.',
      it: 'Lucci segue gli ordini di Spandam durante l’operazione a Enies Lobby.',
    },
  },
  lucciLuffyDefeat: {
    character: 'monkey-d-luffy',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Luffy defeats Lucci at Enies Lobby while trying to rescue Robin.',
      it: 'Rufy sconfigge Lucci a Enies Lobby mentre cerca di salvare Robin.',
    },
  },
  lucciSpandamSubordinate: {
    character: 'spandam',
    type: { en: 'Subordinate', it: 'Subordinato' },
    summary: {
      en: 'Spandam now works under Lucci in CP0.',
      it: 'Spandam ora lavora agli ordini di Lucci nel CP0.',
    },
  },
  lucciStussy: {
    character: 'stussy',
    type: { en: 'Cipher Pol colleague', it: 'Collega nel Cipher Pol' },
    summary: {
      en: 'Lucci travels with Stussy and Kaku on the mission to eliminate Vegapunk.',
      it: 'Lucci viaggia con Stussy e Kaku nella missione per eliminare Vegapunk.',
    },
  },
  lucciStussyBetrayal: {
    character: 'stussy',
    type: { en: 'Colleague who betrays him', it: 'Collega che lo tradisce' },
    summary: {
      en: 'Stussy reveals her allegiance to Vegapunk and puts Lucci to sleep after attacking Kaku.',
      it: 'Stussy rivela di essere alleata di Vegapunk e addormenta Lucci dopo aver attaccato Kaku.',
    },
  },
  lucciLuffyAlly: {
    character: 'monkey-d-luffy',
    type: { en: 'Temporary ally', it: 'Alleato temporaneo' },
    summary: {
      en: 'Luffy frees Lucci so they can fight together against the Seraphim.',
      it: 'Rufy libera Lucci perché possano combattere insieme contro i Seraphim.',
    },
  },
  lucciLuffyEnemyAgain: {
    character: 'monkey-d-luffy',
    type: { en: 'Enemy after a truce', it: 'Nemico dopo una tregua' },
    summary: {
      en: 'Lucci ends the temporary alliance with Luffy’s crew by attacking Vegapunk.',
      it: 'Lucci pone fine all’alleanza temporanea con la ciurma di Rufy attaccando Vegapunk.',
    },
  },
  lucciZoro: {
    character: 'roronoa-zoro',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Zoro stops Lucci’s attack on Vegapunk and confronts him.',
      it: 'Zoro ferma l’attacco di Lucci contro Vegapunk e lo affronta.',
    },
  },
  lucciStussyWounded: {
    character: 'stussy',
    type: { en: 'Former colleague he wounds', it: 'Ex collega che ferisce' },
    summary: {
      en: 'Stussy intercepts Lucci’s attack on Vegapunk and is wounded by him.',
      it: 'Stussy intercetta l’attacco di Lucci contro Vegapunk e viene ferita da lui.',
    },
  },
  lucciKakuProtect: {
    character: 'kaku',
    type: { en: 'Partner he wants to save', it: 'Compagno che vuole salvare' },
    summary: {
      en: 'Lucci asks Mars to spare Kaku, who is still trapped on Egghead.',
      it: 'Lucci chiede a Mars di risparmiare Kaku, ancora intrappolato a Egghead.',
    },
  },
  lucciStussyClaim: {
    character: 'stussy',
    type: {
      en: 'Former colleague he claims to have killed',
      it: 'Ex collega che dichiara di aver ucciso',
    },
    summary: {
      en: 'After leaving Egghead, Lucci tells another agent that he killed Stussy.',
      it: 'Dopo aver lasciato Egghead, Lucci racconta a un altro agente di aver ucciso Stussy.',
    },
  },
  kalifaIceburg: {
    character: 'iceburg',
    type: { en: 'Employer', it: 'Datore di lavoro' },
    summary: {
      en: 'Kalifa serves as Iceburg’s secretary in Water Seven.',
      it: 'Kalifa lavora come segretaria di Iceburg a Water Seven.',
    },
  },
  kalifaIceburgBetrayal: {
    character: 'iceburg',
    type: { en: 'Target of her mission', it: 'Bersaglio della sua missione' },
    summary: {
      en: 'Kalifa’s secretarial job is a cover for a CP9 mission against Iceburg.',
      it: 'Il lavoro di Kalifa come segretaria è una copertura per una missione del CP9 contro Iceburg.',
    },
  },
  kalifaLucci: {
    character: 'rob-lucci',
    type: { en: 'Cipher Pol colleague', it: 'Collega nel Cipher Pol' },
    summary: {
      en: 'Kalifa infiltrates Water Seven alongside Lucci and the other CP9 agents.',
      it: 'Kalifa si infiltra a Water Seven insieme a Lucci e agli altri agenti del CP9.',
    },
  },
  kalifaNami: {
    character: 'nami',
    type: { en: 'Opponent who defeats her', it: 'Avversaria che la sconfigge' },
    summary: {
      en: 'Nami defeats Kalifa in the Tower of Justice and takes the key she carries.',
      it: 'Nami sconfigge Kalifa nella Torre della Giustizia e prende la chiave che porta con sé.',
    },
  },
  bluenoLucci: {
    character: 'rob-lucci',
    type: { en: 'Cipher Pol colleague', it: 'Collega nel Cipher Pol' },
    summary: {
      en: 'Blueno works with Lucci in the undercover CP9 operation in Water Seven.',
      it: 'Blueno lavora con Lucci nell’operazione sotto copertura del CP9 a Water Seven.',
    },
  },
  bluenoIceburg: {
    character: 'iceburg',
    type: { en: 'Assassination target', it: 'Bersaglio dell’attentato' },
    summary: {
      en: 'Blueno uses his door powers to enter Iceburg’s guarded headquarters during the attack.',
      it: 'Blueno usa il potere delle porte per entrare nella sede sorvegliata di Iceburg durante l’attacco.',
    },
  },
  bluenoLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Luffy defeats Blueno on the courthouse roof using Gear Second.',
      it: 'Rufy sconfigge Blueno sul tetto del tribunale usando il Gear Second.',
    },
  },
  bluenoLucciRescue: {
    character: 'rob-lucci',
    type: { en: 'Colleague he rescues', it: 'Collega che salva' },
    summary: {
      en: 'Blueno brings the injured Lucci to safety after the destruction of Enies Lobby.',
      it: 'Blueno porta in salvo Lucci ferito dopo la distruzione di Enies Lobby.',
    },
  },
  hattoriLucci: {
    character: 'rob-lucci',
    type: { en: 'Companion', it: 'Compagno' },
    summary: {
      en: 'Hattori stays with Lucci and acts as his voice while Lucci poses as a silent shipwright.',
      it: 'Hattori resta con Lucci e gli presta la voce mentre finge di essere un carpentiere muto.',
    },
  },
  corgiIceburg: {
    character: 'iceburg',
    type: { en: 'Person he pressures', it: 'Persona su cui fa pressioni' },
    summary: {
      en: 'Corgi repeatedly tries to persuade Iceburg to surrender the blueprints, without success.',
      it: 'Coogy cerca più volte di convincere Iceburg a consegnare i progetti, senza riuscirci.',
    },
  },
  corgiRobin: {
    character: 'nico-robin',
    type: { en: 'Prisoner he escorts', it: 'Prigioniera che scorta' },
    summary: {
      en: 'Corgi escorts Robin, as a prisoner, aboard the sea train.',
      it: 'Coogy scorta Robin, prigioniera, sul treno del mare.',
    },
  },
  spandamTom: {
    character: 'tom',
    type: { en: 'Man he frames', it: 'Uomo che incastra' },
    summary: {
      en: 'Spandam uses Franky’s ships to frame Tom and force him to surrender the blueprints.',
      it: 'Spandam usa le navi di Franky per incastrare Tom e costringerlo a consegnare i progetti.',
    },
  },
  spandamFranky: {
    character: 'franky',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Franky strikes Spandam in the face after the plot against Tom.',
      it: 'Franky colpisce Spandam al volto dopo il complotto contro Tom.',
    },
  },
  spandamRobin: {
    character: 'nico-robin',
    type: { en: 'Prisoner', it: 'Prigioniera' },
    summary: {
      en: 'Spandam holds Robin at Enies Lobby and intends to hand her over to the Government.',
      it: 'Spandam tiene Robin prigioniera a Enies Lobby e vuole consegnarla al Governo.',
    },
  },
  spandamLucci: {
    character: 'rob-lucci',
    type: { en: 'Subordinate', it: 'Subordinato' },
    summary: {
      en: 'Spandam relies on Lucci’s strength to defeat the intruders at Enies Lobby.',
      it: 'Spandam conta sulla forza di Lucci per sconfiggere gli intrusi a Enies Lobby.',
    },
  },
  spandamFunkfreed: {
    character: 'funkfreed',
    type: { en: 'Elephant and sword', it: 'Elefante e spada' },
    summary: {
      en: 'Funkfreed follows Spandam and turns into his sword when ordered.',
      it: 'Funkfleed segue Spandam e si trasforma nella sua spada quando glielo ordina.',
    },
  },
  spandamFather: {
    character: 'spandine',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Spandine is Spandam’s father and the former chief of CP9.',
      it: 'Spandine è il padre di Spandam ed è stato capo del CP9.',
    },
  },
  spandamRobinDefeat: {
    character: 'nico-robin',
    type: { en: 'Prisoner who fights back', it: 'Prigioniera che si ribella' },
    summary: {
      en: 'After being freed, Robin strikes back at Spandam as the Straw Hats escape.',
      it: 'Dopo essere stata liberata, Robin si ribella a Spandam mentre i Cappello di Paglia fuggono.',
    },
  },
  spandamLucciChief: {
    character: 'rob-lucci',
    type: { en: 'Superior', it: 'Superiore' },
    summary: {
      en: 'Spandam works under Lucci after they become CP0 agents.',
      it: 'Spandam lavora agli ordini di Lucci dopo il loro ingresso nel CP0.',
    },
  },
  jerrySanji: {
    character: 'sanji',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Sanji defeats Jerry while advancing through the sea train to rescue Robin.',
      it: 'Sanji sconfigge Jerry mentre attraversa il treno del mare per salvare Robin.',
    },
  },
  wanzeSanji: {
    character: 'sanji',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Sanji stays behind to fight Wanze while his companions advance through the sea train.',
      it: 'Sanji resta a combattere Wanze mentre i suoi compagni avanzano sul treno del mare.',
    },
  },
  wanzeSanjiDefeat: {
    character: 'sanji',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Sanji defeats Wanze after cutting apart his ramen armor.',
      it: 'Sanji sconfigge Wanze dopo aver tagliato la sua armatura di ramen.',
    },
  },
  neroFranky: {
    character: 'franky',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Nero fights Franky on the roof of the sea train and targets his unprotected back.',
      it: 'Nero combatte Franky sul tetto del treno del mare e prende di mira la sua schiena non protetta.',
    },
  },
  neroFrankyDefeat: {
    character: 'franky',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Franky defeats Nero and sends him into the carriage occupied by CP9.',
      it: 'Franky sconfigge Nero e lo scaraventa nella carrozza occupata dal CP9.',
    },
  },
  neroLucci: {
    character: 'rob-lucci',
    type: { en: 'Colleague who expels him', it: 'Collega che lo espelle' },
    summary: {
      en: 'Lucci attacks Nero for his failure and expels him from CP9.',
      it: 'Lucci attacca Nero per il suo fallimento e lo espelle dal CP9.',
    },
  },
  tboneZoro: {
    character: 'roronoa-zoro',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Zoro defeats T-Bone on the sea train tracks while the rescue party chases Robin.',
      it: 'Zoro sconfigge T-Bone sui binari del treno del mare mentre il gruppo di soccorso insegue Robin.',
    },
  },
  jabraSpandam: {
    character: 'spandam',
    type: { en: 'Chief at Enies Lobby', it: 'Capo a Enies Lobby' },
    summary: {
      en: 'Jabra reports the result of his mission to Spandam alongside Kumadori and Fukurou.',
      it: 'Jabura riferisce a Spandam l’esito della missione insieme a Kumadori e Fukuro.',
    },
  },
  jabraKaku: {
    character: 'kaku',
    type: { en: 'Rival colleague', it: 'Collega rivale' },
    summary: {
      en: 'Jabra resents learning that Kaku’s measured strength exceeds his own.',
      it: 'Jabura si irrita quando scopre che la forza misurata di Kaku supera la sua.',
    },
  },
  jabraSanji: {
    character: 'sanji',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Sanji sees through Jabra’s lies and defeats him with Diable Jambe.',
      it: 'Sanji non crede alle bugie di Jabura e lo sconfigge con il Diable Jambe.',
    },
  },
  kumadoriSpandam: {
    character: 'spandam',
    type: { en: 'Chief at Enies Lobby', it: 'Capo a Enies Lobby' },
    summary: {
      en: 'Kumadori reports to Spandam after a mission with Jabra and Fukurou.',
      it: 'Kumadori si presenta da Spandam dopo una missione con Jabura e Fukuro.',
    },
  },
  kumadoriJabra: {
    character: 'jabra',
    type: { en: 'Mission partner', it: 'Compagno di missione' },
    summary: {
      en: 'Kumadori works with Jabra despite their arguments about the mission’s failure.',
      it: 'Kumadori lavora con Jabura nonostante i litigi sul fallimento della missione.',
    },
  },
  kumadoriChopper: {
    character: 'tony-tony-chopper',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Chopper transforms into a monster and defeats Kumadori after being driven into a corner.',
      it: 'Chopper si trasforma in un mostro e sconfigge Kumadori dopo essere stato messo alle strette.',
    },
  },
  fukurouSpandam: {
    character: 'spandam',
    type: { en: 'Chief at Enies Lobby', it: 'Capo a Enies Lobby' },
    summary: {
      en: 'Fukurou reports to Spandam after revealing his team’s mission to the people they were targeting.',
      it: 'Fukuro si presenta da Spandam dopo aver rivelato la missione alle persone prese di mira dalla sua squadra.',
    },
  },
  fukurouJabra: {
    character: 'jabra',
    type: { en: 'Mission partner', it: 'Compagno di missione' },
    summary: {
      en: 'Jabra argues with Fukurou because his loose tongue compromised their mission.',
      it: 'Jabura litiga con Fukuro perché la sua lingua lunga ha compromesso la missione.',
    },
  },
  fukurouFranky: {
    character: 'franky',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Franky defeats Fukurou after replenishing his cola during their fight.',
      it: 'Franky sconfigge Fukuro dopo aver fatto rifornimento di cola durante il loro scontro.',
    },
  },
  giantsDorry: {
    character: 'dorry',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Oimo and Kashi serve at Enies Lobby after being falsely told that their captain Dorry is imprisoned.',
      it: 'Oimo e Karsee prestano servizio a Enies Lobby dopo essere stati ingannati sulla prigionia del loro capitano Dori.',
    },
  },
  giantsBrogy: {
    character: 'brogy',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Oimo and Kashi are tricked into working for the Government by a false claim that their captain Brogy is imprisoned.',
      it: 'Oimo e Karsee vengono ingannati e lavorano per il Governo a causa della falsa notizia che il loro capitano Brogi sia prigioniero.',
    },
  },
  giantsUsopp: {
    character: 'usopp',
    type: {
      en: 'Friend who tells them the truth',
      it: 'Amico che rivela la verità',
    },
    summary: {
      en: 'Usopp tells Oimo and Kashi that their captains are free on Little Garden, turning them against the Government.',
      it: 'Usop rivela a Oimo e Karsee che i loro capitani sono liberi a Little Garden, spingendoli contro il Governo.',
    },
  },
  giantsDorryReunited: {
    character: 'dorry',
    type: { en: 'Reunited captain', it: 'Capitano ritrovato' },
    summary: {
      en: 'Oimo and Kashi visit Little Garden and persuade Dorry to return to Elbaf for new weapons.',
      it: 'Oimo e Karsee raggiungono Little Garden e convincono Dori a tornare a Erbaf per procurarsi nuove armi.',
    },
  },
  giantsBrogyReunited: {
    character: 'brogy',
    type: { en: 'Reunited captain', it: 'Capitano ritrovato' },
    summary: {
      en: 'Oimo and Kashi help interrupt Brogy’s duel so he can return to Elbaf with Dorry.',
      it: 'Oimo e Karsee contribuiscono a interrompere il duello di Brogi perché possa tornare a Erbaf con Dori.',
    },
  },
  baskervillePaulie: {
    character: 'paulie',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Paulie attacks Baskerville while trying to secure the drawbridge to the Tower of Justice.',
      it: 'Pauly attacca Baskerville mentre cerca di assicurare il passaggio sul ponte levatoio verso la Torre della Giustizia.',
    },
  },
  baskervilleZambai: {
    character: 'zambai',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Zambai joins Paulie’s attack against Baskerville at the courthouse.',
      it: 'Zanbai partecipa all’attacco di Pauly contro Baskerville nel tribunale.',
    },
  },
  funkfreedSpandam: {
    character: 'spandam',
    type: { en: 'Owner', it: 'Padrone' },
    summary: {
      en: 'Funkfreed accompanies Spandam and transforms into the sword he carries.',
      it: 'Funkfleed accompagna Spandam e si trasforma nella spada che porta con sé.',
    },
  },
  funkfreedFranky: {
    character: 'franky',
    type: {
      en: 'Opponent who subdues him',
      it: 'Avversario che lo sottomette',
    },
    summary: {
      en: 'Franky stops Funkfreed’s attack, threatens him into surrender and throws him onto Spandam.',
      it: 'Franky ferma l’attacco di Funkfleed, lo costringe ad arrendersi e lo scaglia contro Spandam.',
    },
  },
  kuzanRobin: {
    character: 'nico-robin',
    type: { en: 'Pirate he confronts', it: 'Piratessa che affronta' },
    summary: {
      en: 'Kuzan confronts Robin and warns the Straw Hats about her past.',
      it: 'Kuzan affronta Robin e mette in guardia i Cappello di Paglia sul suo passato.',
    },
  },
  kuzanLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Opponent he spares', it: 'Avversario che risparmia' },
    summary: {
      en: 'Kuzan defeats Luffy in their duel but leaves him alive.',
      it: 'Kuzan sconfigge Rufy nel loro duello ma lo lascia in vita.',
    },
  },
  kuzanRobinEscape: {
    character: 'nico-robin',
    type: {
      en: 'Survivor he lets escape',
      it: 'Sopravvissuta che lascia fuggire',
    },
    summary: {
      en: 'Kuzan lets Robin escape from Ohara after freezing Saul.',
      it: 'Kuzan lascia fuggire Robin da Ohara dopo aver congelato Sauro.',
    },
  },
  kuzanSaulFrozen: {
    character: 'jaguar-d-saul',
    type: { en: 'Marine he freezes', it: 'Marine che congela' },
    summary: {
      en: 'Kuzan freezes Saul when he tries to save Robin during the destruction of Ohara.',
      it: 'Kuzan congela Sauro quando cerca di salvare Robin durante la distruzione di Ohara.',
    },
  },
  kuzanSaulFriend: {
    character: 'jaguar-d-saul',
    type: {
      en: 'Friend whose wish he honors',
      it: 'Amico di cui rispetta il desiderio',
    },
    summary: {
      en: 'Kuzan tells Robin that Saul was his friend and that he let her escape to honor Saul’s wishes.',
      it: 'Kuzan racconta a Robin che Sauro era suo amico e che l’ha lasciata fuggire per rispettarne il desiderio.',
    },
  },
  kuzanRobinCrew: {
    character: 'nico-robin',
    type: {
      en: 'Survivor he watches over',
      it: 'Sopravvissuta che tiene d’occhio',
    },
    summary: {
      en: 'Kuzan checks that Robin has found companions she can trust and leaves her with the Straw Hats.',
      it: 'Kuzan si accerta che Robin abbia trovato compagni di cui fidarsi e la lascia con i Cappello di Paglia.',
    },
  },
  kuzanGarpDebt: {
    character: 'monkey-d-garp',
    type: { en: 'Benefactor', it: 'Benefattore' },
    summary: {
      en: 'Kuzan says that Luffy’s grandfather helped him in the past.',
      it: 'Kuzan racconta che il nonno di Rufy lo ha aiutato in passato.',
    },
  },
  kuzanAkainu: {
    character: 'sakazuki',
    type: { en: 'Rival who defeats him', it: 'Rivale che lo sconfigge' },
    summary: {
      en: 'Kuzan loses a ten-day duel against Sakazuki for the position of fleet admiral and leaves the Marines.',
      it: 'Kuzan perde un duello di dieci giorni contro Sakazuki per il posto di grandammiraglio e lascia la Marina.',
    },
  },
  kuzanSmoker: {
    character: 'smoker',
    type: { en: 'Marine he rescues', it: 'Marine che salva' },
    summary: {
      en: 'Kuzan stops Doflamingo from killing Smoker on Punk Hazard.',
      it: 'Kuzan impedisce a Doflamingo di uccidere Smoker a Punk Hazard.',
    },
  },
  kuzanTeach: {
    character: 'marshall-d-teach',
    type: { en: 'Pirate captain', it: 'Capitano pirata' },
    summary: {
      en: 'Kuzan joins Teach’s crew after leaving the Marines.',
      it: 'Kuzan entra nella ciurma di Teach dopo aver lasciato la Marina.',
    },
  },
  kuzanGarp: {
    character: 'monkey-d-garp',
    type: { en: 'Former mentor he fights', it: 'Ex maestro che affronta' },
    summary: {
      en: 'Kuzan fights his former mentor Garp on Hachinosu rather than return to the Marines.',
      it: 'Kuzan affronta il suo ex maestro Garp su Hachinosu invece di tornare nella Marina.',
    },
  },
  kuzanTeachRecruit: {
    character: 'marshall-d-teach',
    type: { en: 'Captain who recruits him', it: 'Capitano che lo recluta' },
    summary: {
      en: 'Teach persuades Kuzan to join his crew by telling him that pirates can pursue their own goals.',
      it: 'Teach convince Kuzan a entrare nella sua ciurma spiegandogli che i pirati possono perseguire i propri obiettivi.',
    },
  },
  kuzanGarpDefeated: {
    character: 'monkey-d-garp',
    type: {
      en: 'Former mentor left behind',
      it: 'Ex maestro rimasto sull’isola',
    },
    summary: {
      en: 'Garp remains wounded on Hachinosu after fighting Kuzan while the younger Marines escape.',
      it: 'Garp resta ferito su Hachinosu dopo aver combattuto contro Kuzan mentre i giovani marine fuggono.',
    },
  },
  kuzanGarpCaptive: {
    character: 'monkey-d-garp',
    type: { en: 'Former mentor held captive', it: 'Ex maestro prigioniero' },
    summary: {
      en: 'Kuzan reports to Teach that Garp is alive and held captive after the battle on Hachinosu.',
      it: 'Kuzan riferisce a Teach che Garp è vivo e prigioniero dopo la battaglia su Hachinosu.',
    },
  },
  saulRobin: {
    character: 'nico-robin',
    type: { en: 'Young friend', it: 'Giovane amica' },
    summary: {
      en: 'Saul befriends Robin on Ohara and encourages her to laugh despite her loneliness.',
      it: 'Sauro fa amicizia con Robin a Ohara e la incoraggia a ridere nonostante la solitudine.',
    },
  },
  saulOlvia: {
    character: 'nico-olvia',
    type: { en: 'Archaeologist he knows', it: 'Archeologa che conosce' },
    summary: {
      en: 'Saul recognizes Olvia’s name when Robin tells him about her mother.',
      it: 'Sauro riconosce il nome di Olvia quando Robin gli parla di sua madre.',
    },
  },
  saulOlviaTrust: {
    character: 'nico-olvia',
    type: {
      en: 'Mother who trusts him with Robin',
      it: 'Madre che gli affida Robin',
    },
    summary: {
      en: 'Saul frees Olvia from Marine custody, and she later asks him to take Robin to safety.',
      it: 'Sauro libera Olvia dalla custodia della Marina e lei gli chiede poi di portare Robin in salvo.',
    },
  },
  saulRobinProtected: {
    character: 'nico-robin',
    type: { en: 'Friend he protects', it: 'Amica che protegge' },
    summary: {
      en: 'Saul tries to get Robin away from the Buster Call and tells her that she will find friends at sea.',
      it: 'Sauro cerca di portare Robin lontano dal Buster Call e le dice che troverà amici in mare.',
    },
  },
  saulKuzan: {
    character: 'kuzan',
    type: { en: 'Marine who freezes him', it: 'Marine che lo congela' },
    summary: {
      en: 'Kuzan freezes Saul while he is trying to help Robin escape from Ohara.',
      it: 'Kuzan congela Sauro mentre cerca di aiutare Robin a fuggire da Ohara.',
    },
  },
  saulKuzanFriend: {
    character: 'kuzan',
    type: { en: 'Friend who freezes him', it: 'Amico che lo congela' },
    summary: {
      en: 'Kuzan reveals that he and Saul were friends, and that he let Robin escape in deference to Saul.',
      it: 'Kuzan rivela di essere stato amico di Sauro e di aver lasciato fuggire Robin per rispetto verso di lui.',
    },
  },
  saulRobinSurvived: {
    character: 'nico-robin',
    type: { en: 'Childhood friend', it: 'Amica d’infanzia' },
    summary: {
      en: 'Robin learns that Saul survived Ohara and helped preserve the scholars’ books on Elbaf.',
      it: 'Robin scopre che Sauro è sopravvissuto a Ohara e ha contribuito a conservare i libri degli studiosi a Erbaf.',
    },
  },
  saulVegapunk: {
    character: 'vegapunk',
    type: { en: 'Researcher he helps', it: 'Studioso che aiuta' },
    summary: {
      en: 'Saul gives Vegapunk access to the books recovered from Ohara and taken to Elbaf.',
      it: 'Sauro permette a Vegapunk di consultare i libri recuperati da Ohara e portati a Erbaf.',
    },
  },
  saulRobinReunited: {
    character: 'nico-robin',
    type: { en: 'Reunited friend', it: 'Amica ritrovata' },
    summary: {
      en: 'Saul and Robin reunite on Elbaf, and he thanks her for surviving the years since Ohara.',
      it: 'Sauro e Robin si ritrovano a Erbaf e lui la ringrazia per essere sopravvissuta agli anni trascorsi da Ohara.',
    },
  },
  saulSommers: {
    character: 'shepherd-sommers',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Sommers defeats Saul as he tries to protect the children of Elbaf.',
      it: 'Sommers sconfigge Sauro mentre cerca di proteggere i bambini di Erbaf.',
    },
  },
  cloverRobin: {
    character: 'nico-robin',
    type: { en: 'Young scholar', it: 'Giovane studiosa' },
    summary: {
      en: 'Clover recognizes Robin as an archaeologist but forbids her to study the Void Century.',
      it: 'Clover riconosce Robin come archeologa ma le vieta di studiare il Secolo Vuoto.',
    },
  },
  cloverOlvia: {
    character: 'nico-olvia',
    type: { en: 'Fellow scholar', it: 'Collega studiosa' },
    summary: {
      en: 'Clover and Olvia belong to the scholars researching the forbidden history of Ohara.',
      it: 'Clover e Olvia fanno parte degli studiosi che indagano sulla storia proibita a Ohara.',
    },
  },
  cloverSpandine: {
    character: 'spandine',
    type: { en: 'Agent who shoots him', it: 'Agente che gli spara' },
    summary: {
      en: 'Spandine shoots Clover before he can reveal the name of the ancient kingdom.',
      it: 'Spandine spara a Clover prima che possa rivelare il nome dell’antico regno.',
    },
  },
  cloverVegapunk: {
    character: 'vegapunk',
    type: { en: 'Old acquaintance', it: 'Vecchia conoscenza' },
    summary: {
      en: 'Vegapunk knows Clover from his years as an explorer and visits Ohara after its destruction.',
      it: 'Vegapunk conosce Clover dai suoi anni da esploratore e visita Ohara dopo la sua distruzione.',
    },
  },
  cloverVegapunkRequest: {
    character: 'vegapunk',
    type: { en: 'Friend he asks for help', it: 'Amico a cui chiede aiuto' },
    summary: {
      en: 'Clover asks Vegapunk to help research the Void Century, but the scientist refuses.',
      it: 'Clover chiede a Vegapunk di aiutarlo a studiare il Secolo Vuoto, ma lo scienziato rifiuta.',
    },
  },
  spandineOlvia: {
    character: 'nico-olvia',
    type: { en: 'Prisoner', it: 'Prigioniera' },
    summary: {
      en: 'Spandine captures Olvia when she confronts him on Ohara.',
      it: 'Spandine cattura Olvia quando lei lo affronta a Ohara.',
    },
  },
  spandineClover: {
    character: 'clover',
    type: { en: 'Scholar he interrogates', it: 'Studioso che interroga' },
    summary: {
      en: 'Spandine confronts Clover and the other scholars over their forbidden research.',
      it: 'Spandine affronta Clover e gli altri studiosi per le loro ricerche proibite.',
    },
  },
  spandineCloverShot: {
    character: 'clover',
    type: { en: 'Scholar he shoots', it: 'Studioso a cui spara' },
    summary: {
      en: 'Spandine shoots Clover as he speaks to the Five Elders about the ancient kingdom.',
      it: 'Spandine spara a Clover mentre parla ai Cinque Astri di Saggezza dell’antico regno.',
    },
  },
  spandineRobin: {
    character: 'nico-robin',
    type: { en: 'Survivor he hunts', it: 'Sopravvissuta a cui dà la caccia' },
    summary: {
      en: 'Spandine tries to stop Robin from escaping after the destruction of Ohara.',
      it: 'Spandine cerca di impedire a Robin di fuggire dopo la distruzione di Ohara.',
    },
  },
  spandineSon: {
    character: 'spandam',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'Spandam is Spandine’s son and follows him as chief of CP9.',
      it: 'Spandam è il figlio di Spandine e gli succede come capo del CP9.',
    },
  },
  olviaRobin: {
    character: 'nico-robin',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'Olvia leaves her daughter Robin on Ohara while she travels to research the Poneglyphs.',
      it: 'Olvia lascia la figlia Robin a Ohara mentre viaggia per studiare i Poneglyph.',
    },
  },
  olviaRobinReunion: {
    character: 'nico-robin',
    type: {
      en: 'Daughter she entrusts to Saul',
      it: 'Figlia che affida a Sauro',
    },
    summary: {
      en: 'Olvia embraces Robin, then entrusts her to Saul while she stays to save Ohara’s books.',
      it: 'Olvia abbraccia Robin, poi la affida a Sauro mentre resta a salvare i libri di Ohara.',
    },
  },
  olviaSaulTrust: {
    character: 'jaguar-d-saul',
    type: {
      en: 'Rescuer she trusts with Robin',
      it: 'Soccorritore a cui affida Robin',
    },
    summary: {
      en: 'Saul frees Olvia from Marine custody, and she later entrusts Robin to him.',
      it: 'Sauro libera Olvia dalla custodia della Marina e lei gli affida poi Robin.',
    },
  },
  olviaClover: {
    character: 'clover',
    type: { en: 'Fellow scholar', it: 'Collega studioso' },
    summary: {
      en: 'Olvia remains with Clover and the other archaeologists to preserve their research as Ohara burns.',
      it: 'Olvia resta con Clover e gli altri archeologi per conservare le loro ricerche mentre Ohara brucia.',
    },
  },
  garpLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Grandson', it: 'Nipote' },
    summary: {
      en: 'Garp is Luffy’s grandfather and wants him to become a Marine instead of a pirate.',
      it: 'Garp è il nonno di Rufy e vuole che diventi un marine invece di un pirata.',
    },
  },
  garpRoger: {
    character: 'gold-roger',
    type: { en: 'Old rival', it: 'Vecchio rivale' },
    summary: {
      en: 'Garp repeatedly corners Roger during his years as a pirate.',
      it: 'Garp mette più volte alle strette Roger durante i suoi anni da pirata.',
    },
  },
  garpDragon: {
    character: 'monkey-d-dragon',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'Dragon is Garp’s son and Luffy’s father.',
      it: 'Dragon è il figlio di Garp e il padre di Rufy.',
    },
  },
  garpKoby: {
    character: 'koby',
    type: { en: 'Student', it: 'Allievo' },
    summary: {
      en: 'Garp trains Koby after taking him into the Marines.',
      it: 'Garp addestra Kobi dopo averlo accolto nella Marina.',
    },
  },
  garpHelmeppo: {
    character: 'helmeppo',
    type: { en: 'Student', it: 'Allievo' },
    summary: {
      en: 'Garp trains Helmeppo alongside Koby.',
      it: 'Garp addestra Hermeppo insieme a Kobi.',
    },
  },
  garpAce: {
    character: 'portgas-d-ace',
    type: { en: 'Grandson he raises', it: 'Nipote che cresce' },
    summary: {
      en: 'Garp raises Ace after Roger entrusts his unborn child to him.',
      it: 'Garp cresce Ace dopo che Roger gli affida il figlio non ancora nato.',
    },
  },
  garpRogerTrust: {
    character: 'gold-roger',
    type: {
      en: 'Rival who entrusts him with Ace',
      it: 'Rivale che gli affida Ace',
    },
    summary: {
      en: 'Roger trusts Garp to protect his child despite their years as opponents.',
      it: 'Roger si fida di Garp per proteggere suo figlio nonostante gli anni trascorsi da avversari.',
    },
  },
  garpAceDeath: {
    character: 'portgas-d-ace',
    type: { en: 'Grandson he mourns', it: 'Nipote che piange' },
    summary: {
      en: 'After Ace’s death at Marineford, Garp is overcome with anger and Sengoku restrains him.',
      it: 'Dopo la morte di Ace a Marineford, Garp è sopraffatto dalla rabbia e Sengoku lo trattiene.',
    },
  },
  garpKobyRescue: {
    character: 'koby',
    type: { en: 'Student he goes to rescue', it: 'Allievo che va a salvare' },
    summary: {
      en: 'Garp attacks Hachinosu to rescue Koby from the Blackbeard Pirates.',
      it: 'Garp attacca Hachinosu per salvare Kobi dai Pirati di Barbanera.',
    },
  },
  garpKuzan: {
    character: 'kuzan',
    type: { en: 'Former student he fights', it: 'Ex allievo che affronta' },
    summary: {
      en: 'Garp fights his former student Kuzan on Hachinosu and urges him to return to the Marines.',
      it: 'Garp affronta il suo ex allievo Kuzan su Hachinosu e lo esorta a tornare nella Marina.',
    },
  },
  garpKobyEscape: {
    character: 'koby',
    type: { en: 'Student he protects', it: 'Allievo che protegge' },
    summary: {
      en: 'Garp stays behind on Hachinosu so Koby and the younger Marines can escape.',
      it: 'Garp resta su Hachinosu per permettere a Kobi e ai giovani marine di fuggire.',
    },
  },
  garpKuzanDefeat: {
    character: 'kuzan',
    type: {
      en: 'Former student turned opponent',
      it: 'Ex allievo divenuto avversario',
    },
    summary: {
      en: 'Garp lies wounded on Hachinosu after fighting Kuzan and the other Blackbeard Pirates.',
      it: 'Garp resta ferito su Hachinosu dopo aver combattuto contro Kuzan e gli altri Pirati di Barbanera.',
    },
  },
  garpKuzanCaptive: {
    character: 'kuzan',
    type: {
      en: 'Former student among his captors',
      it: 'Ex allievo tra i suoi carcerieri',
    },
    summary: {
      en: 'Kuzan reports that Garp is alive and held captive by the Blackbeard Pirates.',
      it: 'Kuzan riferisce che Garp è vivo e prigioniero dei Pirati di Barbanera.',
    },
  },
  thatchTeach: {
    character: 'marshall-d-teach',
    type: { en: 'Murderer', it: 'Assassino' },
    summary: {
      en: 'Teach kills Thatch to steal the Devil Fruit he has found.',
      it: 'Teach uccide Satch per rubare il frutto del diavolo che ha trovato.',
    },
  },
  thatchWhitebeard: {
    character: 'edward-newgate',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Thatch serves as the fourth division commander in Whitebeard’s crew.',
      it: 'Satch comanda la quarta divisione della ciurma di Barbabianca.',
    },
  },
  thatchAce: {
    character: 'portgas-d-ace',
    type: {
      en: 'Comrade who seeks revenge',
      it: 'Compagno che cerca vendetta',
    },
    summary: {
      en: 'Ace pursues Teach after Thatch’s murder to avenge his crewmate.',
      it: 'Ace insegue Teach dopo l’assassinio di Satch per vendicare il compagno di ciurma.',
    },
  },
  thatchAceFriend: {
    character: 'portgas-d-ace',
    type: { en: 'Friend and crewmate', it: 'Amico e compagno di ciurma' },
    summary: {
      en: 'Thatch welcomes Ace aboard Whitebeard’s ship before Ace joins the crew.',
      it: 'Satch accoglie Ace sulla nave di Barbabianca prima che entri nella ciurma.',
    },
  },
} satisfies Record<string, Relationship>

export const waterSevenRelationships = {
  'foxy': [
    { episode: 209, chapter: 307, value: [retained.foxyLuffy] },
    // Porche and Hamburg wait for their archived chapter-315 endpoints; the completed contest supplies this selection.
    {
      episode: 219,
      chapter: 318,
      value: [
        retained.foxyLuffyDefeat,
        retained.foxyPorche,
        retained.foxyHamburg,
      ],
    },
  ],
  'porche': [
    // The manga endpoint is chapter 315, after Chopper has already returned; this earlier temporary crewmate stage is anime-only.
    {
      episode: 210,
      chapter: 315,
      source: 'episode',
      value: [retained.porcheFoxy, retained.porcheChopper],
    },
    // The manga selection starts at the owner’s delayed chapter-315 endpoint.
    {
      episode: 219,
      chapter: 315,
      value: [retained.porcheFoxy, retained.porcheChopperReturned],
    },
  ],
  'hamburg': [
    // The teammates wait for Hamburg and Big Pan’s chapter-315 endpoints.
    {
      episode: 211,
      chapter: 315,
      value: [
        retained.hamburgFoxy,
        retained.hamburgPickles,
        retained.hamburgPan,
      ],
    },
  ],
  'tonjit': [
    { episode: 207, chapter: 305, value: [retained.tonjitLuffy] },
    {
      episode: 208,
      chapter: 306,
      source: 'chapter',
      value: [retained.tonjitLuffy, retained.tonjitChopper],
    },
    // Chapter 319’s route waits for Kuzan’s chapter-321 endpoint. The anime gives Tonjit a different rescuer.
    {
      episode: 228,
      chapter: 321,
      source: 'chapter',
      value: [
        retained.tonjitLuffy,
        retained.tonjitChopper,
        retained.tonjitKuzan,
      ],
    },
  ],
  'itomimizu': [
    { episode: 209, chapter: 307, value: [retained.itomimizuFoxy] },
  ],
  'pickles': [
    { episode: 210, chapter: 309, value: [retained.picklesFoxy] },
    // The full team selection waits for Hamburg and Big Pan’s chapter-315 endpoints.
    {
      episode: 212,
      chapter: 315,
      value: [
        retained.picklesHamburg,
        retained.picklesPan,
        retained.picklesFoxy,
        retained.picklesSanji,
      ],
    },
  ],
  'big-pan': [
    // The owner and Hamburg open at chapter 315, after the manga match.
    {
      episode: 211,
      chapter: 315,
      value: [retained.panHamburg, retained.panPickles, retained.panFoxy],
    },
  ],
  'yokozuna': [
    // Tom’s endpoint delays the workshop selection to chapter 357.
    {
      episode: 248,
      chapter: 357,
      value: [
        retained.yokozunaFranky,
        retained.yokozunaTom,
        retained.yokozunaKokoro,
      ],
    },
    {
      episode: 263,
      chapter: 375,
      value: [
        retained.yokozunaFrankyRescue,
        retained.yokozunaTom,
        retained.yokozunaKokoro,
      ],
    },
  ],
  'iceburg': [
    {
      episode: 231,
      chapter: 327,
      value: [retained.iceburgKalifa, retained.iceburgLucci],
    },
    {
      episode: 232,
      chapter: 328,
      value: [
        retained.iceburgPaulie,
        retained.iceburgKalifa,
        retained.iceburgLucci,
      ],
    },
    {
      episode: 244,
      chapter: 347,
      value: [
        retained.iceburgPaulie,
        retained.iceburgKalifaBetrayal,
        retained.iceburgLucciBetrayal,
      ],
    },
    {
      episode: 248,
      chapter: 357,
      value: [
        retained.iceburgTom,
        retained.iceburgFranky,
        retained.iceburgPaulie,
        retained.iceburgKalifaBetrayal,
        retained.iceburgLucciBetrayal,
      ],
    },
    {
      episode: 316,
      chapter: 435,
      value: [
        retained.iceburgTom,
        retained.iceburgFrankyShip,
        retained.iceburgPaulie,
        retained.iceburgKalifaBetrayal,
        retained.iceburgLucciBetrayal,
      ],
    },
    {
      episode: 322,
      chapter: 437,
      value: [
        retained.iceburgTom,
        retained.iceburgFrankyDeparture,
        retained.iceburgPaulie,
        retained.iceburgKalifaBetrayal,
        retained.iceburgLucciBetrayal,
      ],
    },
  ],
  'paulie': [
    { episode: 232, chapter: 327, value: [retained.paulieLucci] },
    {
      episode: 241,
      chapter: 341,
      value: [retained.paulieIceburg, retained.paulieLucci],
    },
    {
      episode: 245,
      chapter: 348,
      value: [
        retained.paulieIceburg,
        retained.paulieLucciBetrayal,
        retained.paulieLuffy,
      ],
    },
    {
      episode: 251,
      chapter: 358,
      value: [
        retained.paulieIceburg,
        retained.paulieLucciBetrayal,
        retained.paulieLuffy,
        retained.paulieChopper,
      ],
    },
  ],
  'kokoro': [
    { episode: 230, chapter: 325, value: [retained.kokoroChimney] },
    // Tom’s endpoint delays the workshop selection to chapter 357.
    {
      episode: 248,
      chapter: 357,
      value: [
        retained.kokoroChimney,
        retained.kokoroTom,
        retained.kokoroFranky,
        retained.kokoroIceburg,
      ],
    },
  ],
  'chimney': [{ episode: 230, chapter: 325, value: [retained.chimneyKokoro] }],
  'kiwi-and-mozu': [
    { episode: 265, chapter: 377, value: [retained.kiwiFranky] },
  ],
  'zambai': [
    { episode: 266, chapter: 378, value: [retained.zambaiFranky] },
    { episode: 322, chapter: 437, value: [retained.zambaiFrankyDeparture] },
  ],
  'peepley-lulu': [
    {
      episode: 233,
      chapter: 328,
      value: [retained.luluIceburg, retained.luluPaulie],
    },
    {
      episode: 316,
      chapter: 435,
      value: [retained.luluIceburg, retained.luluPaulie, retained.luluFranky],
    },
  ],
  'tilestone': [
    { episode: 241, chapter: 341, value: [retained.tilestoneIceburg] },
    {
      episode: 316,
      chapter: 435,
      value: [retained.tilestoneIceburg, retained.tilestoneFranky],
    },
  ],
  'tom': [
    // Spandam’s archived chapter-360 endpoint delays the complete trial selection.
    {
      episode: 250,
      chapter: 360,
      value: [
        retained.tomFranky,
        retained.tomIceburg,
        retained.tomRoger,
        retained.tomKokoro,
        retained.tomSpandam,
      ],
    },
  ],
  'sodom-and-gomorrah': [
    {
      episode: 269,
      chapter: 383,
      value: [retained.bullsFranky, retained.bullsChopper],
    },
  ],
  'franky': [
    {
      episode: 235,
      chapter: 330,
      value: [retained.frankyLuffyEnemy, retained.frankyUsoppVictim],
    },
    {
      episode: 247,
      chapter: 351,
      value: [retained.frankyLuffyEnemy, retained.frankyUsoppUnderstanding],
    },
    // The workshop selection waits for Tom’s chapter-357 endpoint.
    {
      episode: 248,
      chapter: 357,
      value: [
        retained.frankyTom,
        retained.frankyIceburg,
        retained.frankyLuffyEnemy,
        retained.frankyUsoppUnderstanding,
      ],
    },
    // The trial’s facts precede the chapter-357 endpoint; chapter 358 resumes the present and confirms Franky’s identity.
    {
      episode: 250,
      chapter: 358,
      value: [
        retained.frankyTomSacrifice,
        retained.frankyIceburg,
        retained.frankyLuffyEnemy,
        retained.frankyUsoppUnderstanding,
      ],
    },
    {
      episode: 284,
      chapter: 399,
      value: [
        retained.frankyTomSacrifice,
        retained.frankyIceburg,
        retained.frankyLuffyAlly,
        retained.frankyRobinTrust,
        retained.frankyUsoppUnderstanding,
      ],
    },
    {
      episode: 322,
      chapter: 437,
      value: [
        retained.frankyTomSacrifice,
        retained.frankyIceburgDeparture,
        retained.frankyLuffyCaptain,
        retained.frankyRobinCrew,
        retained.frankyUsoppUnderstanding,
      ],
    },
    {
      episode: 323,
      chapter: 438,
      value: [
        retained.frankyTomSacrifice,
        retained.frankyIceburgDeparture,
        retained.frankyLuffyCaptain,
        retained.frankyRobinCrew,
        retained.frankyUsoppCrew,
      ],
    },
    {
      episode: 716,
      chapter: 775,
      value: [
        retained.frankyLuffyCaptain,
        retained.frankyTomSacrifice,
        retained.frankyIceburgDeparture,
        retained.frankyRobinCrew,
        retained.frankyPink,
      ],
    },
  ],
  'kaku': [
    {
      episode: 231,
      chapter: 327,
      value: [retained.kakuIceburg, retained.kakuLucci],
    },
    {
      episode: 244,
      chapter: 347,
      value: [retained.kakuLucciAgent, retained.kakuIceburgBetrayal],
    },
    {
      episode: 300,
      chapter: 418,
      value: [
        retained.kakuLucciAgent,
        retained.kakuZoro,
        retained.kakuIceburgBetrayal,
      ],
    },
    {
      episode: 1092,
      chapter: 1062,
      value: [
        retained.kakuLucciAgent,
        retained.kakuZoro,
        retained.kakuStussy,
        retained.kakuIceburgBetrayal,
      ],
    },
    {
      episode: 1104,
      chapter: 1072,
      value: [
        retained.kakuLucciAgent,
        retained.kakuZoro,
        retained.kakuStussyBetrayal,
        retained.kakuIceburgBetrayal,
      ],
    },
    {
      episode: 1109,
      chapter: 1076,
      value: [
        retained.kakuLucciAgent,
        retained.kakuZoroAlly,
        retained.kakuStussyBetrayal,
        retained.kakuIceburgBetrayal,
      ],
    },
    {
      episode: 1125,
      chapter: 1091,
      value: [
        retained.kakuLucciAgent,
        retained.kakuZoroFormerAlly,
        retained.kakuStussyBetrayal,
        retained.kakuIceburgBetrayal,
      ],
    },
    {
      episode: 1151,
      chapter: 1119,
      value: [
        retained.kakuLucciAgent,
        retained.kakuZoroFormerAlly,
        retained.kakuStussyRelease,
        retained.kakuIceburgBetrayal,
      ],
    },
  ],
  'rob-lucci': [
    // The initial selection waits for Hattori’s episode-232 endpoint and the chapter-327 introductions.
    {
      episode: 232,
      chapter: 327,
      value: [retained.lucciIceburg, retained.lucciKaku, retained.lucciHattori],
    },
    {
      episode: 244,
      chapter: 347,
      value: [
        retained.lucciKakuAgent,
        retained.lucciIceburgBetrayal,
        retained.lucciHattori,
      ],
    },
    {
      episode: 266,
      chapter: 379,
      value: [
        retained.lucciKakuAgent,
        retained.lucciSpandam,
        retained.lucciIceburgBetrayal,
        retained.lucciHattori,
      ],
    },
    {
      episode: 309,
      chapter: 427,
      value: [
        retained.lucciLuffyDefeat,
        retained.lucciKakuAgent,
        retained.lucciSpandam,
        retained.lucciHattori,
        retained.lucciIceburgBetrayal,
      ],
    },
    {
      episode: 746,
      chapter: 801,
      value: [
        retained.lucciLuffyDefeat,
        retained.lucciKakuAgent,
        retained.lucciSpandamSubordinate,
        retained.lucciHattori,
        retained.lucciIceburgBetrayal,
      ],
    },
    {
      episode: 1092,
      chapter: 1062,
      value: [
        retained.lucciLuffyDefeat,
        retained.lucciKakuAgent,
        retained.lucciStussy,
        retained.lucciSpandamSubordinate,
        retained.lucciHattori,
      ],
    },
    {
      episode: 1104,
      chapter: 1073,
      value: [
        retained.lucciLuffyDefeat,
        retained.lucciKakuAgent,
        retained.lucciStussyBetrayal,
        retained.lucciSpandamSubordinate,
        retained.lucciHattori,
      ],
    },
    {
      episode: 1109,
      chapter: 1076,
      value: [
        retained.lucciLuffyAlly,
        retained.lucciKakuAgent,
        retained.lucciStussyBetrayal,
        retained.lucciSpandamSubordinate,
        retained.lucciHattori,
      ],
    },
    {
      episode: 1125,
      chapter: 1091,
      value: [
        retained.lucciLuffyEnemyAgain,
        retained.lucciKakuAgent,
        retained.lucciStussyWounded,
        retained.lucciZoro,
        retained.lucciHattori,
      ],
    },
    {
      episode: 1145,
      chapter: 1111,
      value: [
        retained.lucciKakuProtect,
        retained.lucciLuffyEnemyAgain,
        retained.lucciStussyWounded,
        retained.lucciZoro,
        retained.lucciHattori,
      ],
    },
    // This records Lucci’s statement, not a confirmed death.
    {
      episode: 1155,
      chapter: 1125,
      value: [
        retained.lucciKakuProtect,
        retained.lucciLuffyEnemyAgain,
        retained.lucciStussyClaim,
        retained.lucciZoro,
        retained.lucciHattori,
      ],
    },
  ],
  'kalifa': [
    { episode: 231, chapter: 327, value: [retained.kalifaIceburg] },
    {
      episode: 244,
      chapter: 347,
      value: [retained.kalifaIceburgBetrayal, retained.kalifaLucci],
    },
    {
      episode: 296,
      chapter: 412,
      value: [
        retained.kalifaNami,
        retained.kalifaIceburgBetrayal,
        retained.kalifaLucci,
      ],
    },
  ],
  'blueno': [
    {
      episode: 245,
      chapter: 348,
      value: [retained.bluenoLucci, retained.bluenoIceburg],
    },
    {
      episode: 273,
      chapter: 388,
      value: [
        retained.bluenoLuffy,
        retained.bluenoLucci,
        retained.bluenoIceburg,
      ],
    },
    // CP9’s rescue is told in the unadapted chapter-493 cover story; the episode number only orders this manga-only selection.
    {
      episode: 382,
      chapter: 493,
      source: 'chapter',
      value: [
        retained.bluenoLuffy,
        retained.bluenoLucciRescue,
        retained.bluenoIceburg,
      ],
    },
  ],
  'hattori': [{ episode: 232, chapter: 327, value: [retained.hattoriLucci] }],
  'corgi': [
    { episode: 234, chapter: 331, value: [retained.corgiIceburg] },
    {
      episode: 252,
      chapter: 360,
      value: [retained.corgiIceburg, retained.corgiRobin],
    },
  ],
  'spandam': [
    // The owner’s chapter-360 endpoint follows the trial flashback.
    {
      episode: 250,
      chapter: 360,
      value: [retained.spandamTom, retained.spandamFranky],
    },
    {
      episode: 267,
      chapter: 379,
      value: [
        retained.spandamRobin,
        retained.spandamLucci,
        retained.spandamTom,
        retained.spandamFranky,
      ],
    },
    {
      episode: 285,
      chapter: 400,
      value: [
        retained.spandamRobin,
        retained.spandamLucci,
        retained.spandamFunkfreed,
        retained.spandamTom,
        retained.spandamFranky,
      ],
    },
    {
      episode: 301,
      chapter: 419,
      value: [
        retained.spandamRobin,
        retained.spandamFather,
        retained.spandamLucci,
        retained.spandamFunkfreed,
        retained.spandamFranky,
      ],
    },
    {
      episode: 311,
      chapter: 429,
      value: [
        retained.spandamRobinDefeat,
        retained.spandamFather,
        retained.spandamLucci,
        retained.spandamFunkfreed,
        retained.spandamFranky,
      ],
    },
    {
      episode: 746,
      chapter: 801,
      value: [
        retained.spandamLucciChief,
        retained.spandamRobinDefeat,
        retained.spandamFather,
        retained.spandamFunkfreed,
        retained.spandamFranky,
      ],
    },
  ],
  'jerry': [{ episode: 253, chapter: 362, value: [retained.jerrySanji] }],
  'wanze': [
    { episode: 259, chapter: 369, value: [retained.wanzeSanji] },
    { episode: 261, chapter: 372, value: [retained.wanzeSanjiDefeat] },
  ],
  'nero': [
    { episode: 259, chapter: 370, value: [retained.neroFranky] },
    {
      episode: 262,
      chapter: 373,
      value: [retained.neroLucci, retained.neroFrankyDefeat],
    },
  ],
  't-bone': [{ episode: 261, chapter: 371, value: [retained.tboneZoro] }],
  'jabra': [
    // The owner’s chapter-385 endpoint follows the agents’ reunion.
    {
      episode: 271,
      chapter: 385,
      value: [retained.jabraSpandam, retained.jabraKaku],
    },
    {
      episode: 298,
      chapter: 415,
      value: [retained.jabraSanji, retained.jabraKaku, retained.jabraSpandam],
    },
  ],
  'kumadori': [
    // The owner’s chapter-385 endpoint delays this already known team.
    {
      episode: 271,
      chapter: 385,
      value: [retained.kumadoriSpandam, retained.kumadoriJabra],
    },
    {
      episode: 293,
      chapter: 408,
      value: [
        retained.kumadoriChopper,
        retained.kumadoriSpandam,
        retained.kumadoriJabra,
      ],
    },
  ],
  'fukurou': [
    // The owner’s chapter-385 endpoint delays this already known team.
    {
      episode: 271,
      chapter: 385,
      value: [retained.fukurouSpandam, retained.fukurouJabra],
    },
    {
      episode: 289,
      chapter: 406,
      value: [
        retained.fukurouFranky,
        retained.fukurouSpandam,
        retained.fukurouJabra,
      ],
    },
  ],
  'oimo-and-kashi': [
    // Both giant records open after the chapter-384 revelation; no earlier false imprisonment claim is projected.
    {
      episode: 271,
      chapter: 385,
      value: [retained.giantsUsopp, retained.giantsDorry, retained.giantsBrogy],
    },
    {
      episode: 1156,
      chapter: 1126,
      value: [
        retained.giantsUsopp,
        retained.giantsDorryReunited,
        retained.giantsBrogyReunited,
      ],
    },
  ],
  'baskerville': [
    {
      episode: 284,
      chapter: 399,
      value: [retained.baskervillePaulie, retained.baskervilleZambai],
    },
  ],
  'funkfreed': [
    { episode: 285, chapter: 400, value: [retained.funkfreedSpandam] },
    {
      episode: 306,
      chapter: 423,
      value: [retained.funkfreedSpandam, retained.funkfreedFranky],
    },
  ],
  'kuzan': [
    {
      episode: 228,
      chapter: 321,
      value: [retained.kuzanRobin, retained.kuzanLuffy],
    },
    {
      episode: 278,
      chapter: 398,
      value: [
        retained.kuzanRobinEscape,
        retained.kuzanSaulFrozen,
        retained.kuzanLuffy,
      ],
    },
    // The earlier mention of Luffy’s grandfather waits for Garp’s endpoint.
    {
      episode: 313,
      chapter: 431,
      value: [
        retained.kuzanRobinEscape,
        retained.kuzanSaulFrozen,
        retained.kuzanLuffy,
        retained.kuzanGarpDebt,
      ],
    },
    {
      episode: 315,
      chapter: 433,
      value: [
        retained.kuzanRobinCrew,
        retained.kuzanSaulFriend,
        retained.kuzanLuffy,
        retained.kuzanGarpDebt,
      ],
    },
    {
      episode: 570,
      chapter: 650,
      value: [
        retained.kuzanAkainu,
        retained.kuzanRobinCrew,
        retained.kuzanSaulFriend,
        retained.kuzanLuffy,
        retained.kuzanGarpDebt,
      ],
    },
    {
      episode: 625,
      chapter: 699,
      value: [
        retained.kuzanAkainu,
        retained.kuzanSmoker,
        retained.kuzanRobinCrew,
        retained.kuzanSaulFriend,
        retained.kuzanGarpDebt,
      ],
    },
    {
      episode: 736,
      chapter: 793,
      value: [
        retained.kuzanTeach,
        retained.kuzanAkainu,
        retained.kuzanSmoker,
        retained.kuzanGarpDebt,
        retained.kuzanSaulFriend,
      ],
    },
    {
      episode: 1115,
      chapter: 1081,
      value: [
        retained.kuzanGarp,
        retained.kuzanTeachRecruit,
        retained.kuzanAkainu,
        retained.kuzanSmoker,
        retained.kuzanSaulFriend,
      ],
    },
    {
      episode: 1122,
      chapter: 1088,
      value: [
        retained.kuzanGarpDefeated,
        retained.kuzanTeachRecruit,
        retained.kuzanAkainu,
        retained.kuzanSmoker,
        retained.kuzanSaulFriend,
      ],
    },
    {
      episode: 1156,
      chapter: 1126,
      value: [
        retained.kuzanGarpCaptive,
        retained.kuzanTeachRecruit,
        retained.kuzanAkainu,
        retained.kuzanSmoker,
        retained.kuzanSaulFriend,
      ],
    },
  ],
  'jaguar-d-saul': [
    { episode: 275, chapter: 392, value: [retained.saulRobin] },
    {
      episode: 276,
      chapter: 394,
      value: [retained.saulRobin, retained.saulOlvia],
    },
    {
      episode: 277,
      chapter: 396,
      value: [retained.saulRobin, retained.saulOlviaTrust],
    },
    {
      episode: 278,
      chapter: 398,
      value: [
        retained.saulRobinProtected,
        retained.saulOlviaTrust,
        retained.saulKuzan,
      ],
    },
    {
      episode: 315,
      chapter: 433,
      value: [
        retained.saulRobinProtected,
        retained.saulOlviaTrust,
        retained.saulKuzanFriend,
      ],
    },
    {
      episode: 1097,
      chapter: 1066,
      value: [
        retained.saulRobinSurvived,
        retained.saulOlviaTrust,
        retained.saulKuzanFriend,
        retained.saulVegapunk,
      ],
    },
    {
      episode: 1163,
      chapter: 1133,
      value: [
        retained.saulRobinReunited,
        retained.saulOlviaTrust,
        retained.saulKuzanFriend,
        retained.saulVegapunk,
      ],
    },
    {
      episode: 1176,
      chapter: 1146,
      value: [
        retained.saulRobinReunited,
        retained.saulSommers,
        retained.saulOlviaTrust,
        retained.saulKuzanFriend,
        retained.saulVegapunk,
      ],
    },
  ],
  'clover': [
    { episode: 275, chapter: 392, value: [retained.cloverRobin] },
    {
      episode: 276,
      chapter: 394,
      value: [retained.cloverRobin, retained.cloverOlvia],
    },
    {
      episode: 277,
      chapter: 395,
      value: [
        retained.cloverRobin,
        retained.cloverOlvia,
        retained.cloverSpandine,
      ],
    },
    {
      episode: 1097,
      chapter: 1066,
      value: [
        retained.cloverRobin,
        retained.cloverOlvia,
        retained.cloverSpandine,
        retained.cloverVegapunk,
      ],
    },
    {
      episode: 1152,
      chapter: 1120,
      value: [
        retained.cloverRobin,
        retained.cloverOlvia,
        retained.cloverSpandine,
        retained.cloverVegapunkRequest,
      ],
    },
  ],
  'spandine': [
    {
      episode: 276,
      chapter: 394,
      value: [retained.spandineOlvia, retained.spandineClover],
    },
    {
      episode: 277,
      chapter: 395,
      value: [retained.spandineOlvia, retained.spandineCloverShot],
    },
    {
      episode: 278,
      chapter: 398,
      value: [
        retained.spandineOlvia,
        retained.spandineCloverShot,
        retained.spandineRobin,
      ],
    },
    {
      episode: 301,
      chapter: 419,
      value: [
        retained.spandineSon,
        retained.spandineOlvia,
        retained.spandineCloverShot,
        retained.spandineRobin,
      ],
    },
  ],
  'nico-olvia': [
    { episode: 276, chapter: 393, value: [retained.olviaRobin] },
    {
      episode: 277,
      chapter: 396,
      value: [
        retained.olviaRobinReunion,
        retained.olviaSaulTrust,
        retained.olviaClover,
      ],
    },
  ],
  'monkey-d-garp': [
    {
      episode: 313,
      chapter: 431,
      value: [retained.garpLuffy, retained.garpRoger],
    },
    {
      episode: 314,
      chapter: 432,
      value: [retained.garpLuffy, retained.garpDragon, retained.garpRoger],
    },
    {
      episode: 315,
      chapter: 433,
      value: [
        retained.garpLuffy,
        retained.garpDragon,
        retained.garpKoby,
        retained.garpHelmeppo,
        retained.garpRoger,
      ],
    },
    {
      episode: 460,
      chapter: 551,
      value: [
        retained.garpLuffy,
        retained.garpAce,
        retained.garpDragon,
        retained.garpKoby,
        retained.garpRogerTrust,
      ],
    },
    {
      episode: 484,
      chapter: 575,
      value: [
        retained.garpLuffy,
        retained.garpAceDeath,
        retained.garpDragon,
        retained.garpKoby,
        retained.garpRogerTrust,
      ],
    },
    {
      episode: 1114,
      chapter: 1080,
      value: [
        retained.garpKobyRescue,
        retained.garpLuffy,
        retained.garpAceDeath,
        retained.garpDragon,
        retained.garpRogerTrust,
      ],
    },
    {
      episode: 1115,
      chapter: 1081,
      value: [
        retained.garpKobyRescue,
        retained.garpKuzan,
        retained.garpLuffy,
        retained.garpAceDeath,
        retained.garpDragon,
      ],
    },
    {
      episode: 1122,
      chapter: 1088,
      value: [
        retained.garpKobyEscape,
        retained.garpKuzanDefeat,
        retained.garpLuffy,
        retained.garpAceDeath,
        retained.garpDragon,
      ],
    },
    {
      episode: 1156,
      chapter: 1126,
      value: [
        retained.garpKobyEscape,
        retained.garpKuzanCaptive,
        retained.garpLuffy,
        retained.garpAceDeath,
        retained.garpDragon,
      ],
    },
  ],
  'thatch': [
    {
      episode: 325,
      chapter: 440,
      value: [
        retained.thatchTeach,
        retained.thatchWhitebeard,
        retained.thatchAce,
      ],
    },
    {
      episode: 461,
      chapter: 552,
      value: [
        retained.thatchTeach,
        retained.thatchWhitebeard,
        retained.thatchAceFriend,
      ],
    },
  ],
} satisfies Record<string, Timeline<Relationship[]>>
