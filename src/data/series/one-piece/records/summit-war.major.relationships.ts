import type { Relationship, Timeline } from '~/data/types'

/** Source revisions and event notes are recorded in the provenance inventory. */
const links = {
  lawBepo: {
    character: 'bepo',
    type: { en: 'Crewmate', it: 'Compagno di ciurma' },
    summary: {
      en: 'Bepo sails with Law as a member of the Heart Pirates.',
      it: 'Bepo naviga con Law nei Pirati Heart.',
    },
  },
  lawKid: {
    character: 'eustass-kid',
    type: { en: 'Rival captain', it: 'Capitano rivale' },
    summary: {
      en: 'Law fights beside Kid outside the auction house, while refusing to take orders from him.',
      it: 'Law combatte accanto a Kidd fuori dalla casa d’aste, ma rifiuta di prendere ordini da lui.',
    },
  },
  lawLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Rival captain', it: 'Capitano rivale' },
    summary: {
      en: 'Law and Luffy fight the Marines outside the auction house before going their separate ways.',
      it: 'Law e Rufy affrontano i marine fuori dalla casa d’aste, poi prendono strade diverse.',
    },
  },
  lawPatient: {
    character: 'monkey-d-luffy',
    type: { en: 'Patient he saves', it: 'Paziente che salva' },
    summary: {
      en: 'Law takes the wounded Luffy aboard his submarine and operates on him after the war.',
      it: 'Law accoglie Rufy ferito sul sommergibile e lo opera dopo la guerra.',
    },
  },
  lawJinbe: {
    character: 'jinbe',
    type: { en: 'Patient he treats', it: 'Paziente che cura' },
    summary: {
      en: 'Law treats Jinbe’s injuries aboard his submarine after the escape from Marineford.',
      it: 'Law cura le ferite di Jinbe sul sommergibile dopo la fuga da Marineford.',
    },
  },
  lawAlly: {
    character: 'monkey-d-luffy',
    type: { en: 'Alliance partner', it: 'Alleato' },
    summary: {
      en: 'Law forms an alliance with Luffy on Punk Hazard to bring down an Emperor.',
      it: 'Law stringe un’alleanza con Rufy a Punk Hazard per abbattere un imperatore.',
    },
  },
  lawRosinante: {
    character: 'donquixote-rosinante',
    type: { en: 'Benefactor', it: 'Benefattore' },
    summary: {
      en: 'Rosinante obtains the fruit that saves Law and dies protecting his escape from Doflamingo.',
      it: 'Rosinante procura il frutto che salva Law e muore proteggendo la sua fuga da Doflamingo.',
    },
  },
  lawDoflamingo: {
    character: 'donquixote-doflamingo',
    type: {
      en: 'Enemy he seeks to overthrow',
      it: 'Nemico che vuole abbattere',
    },
    summary: {
      en: 'Law seeks to bring down Doflamingo, who killed Rosinante after helping raise him as a pirate.',
      it: 'Law vuole abbattere Doflamingo, che ha ucciso Rosinante dopo averlo accolto nella propria ciurma.',
    },
  },
  lawDoflamingoDefeat: {
    character: 'donquixote-doflamingo',
    type: { en: 'Defeated enemy', it: 'Nemico sconfitto' },
    summary: {
      en: 'Luffy defeats Doflamingo, ending the rule that Law sought to bring down for Rosinante.',
      it: 'Rufy sconfigge Doflamingo e mette fine al dominio che Law voleva abbattere per Rosinante.',
    },
  },
  lawLuffyFormer: {
    character: 'monkey-d-luffy',
    type: { en: 'Former alliance partner', it: 'Ex alleato' },
    summary: {
      en: 'After the victory in Wano, Law and Luffy end their alliance and take separate routes.',
      it: 'Dopo la vittoria a Wano, Law e Rufy sciolgono l’alleanza e prendono rotte diverse.',
    },
  },
  lawKidWin: {
    character: 'eustass-kid',
    type: { en: 'Ally against Big Mom', it: 'Alleato contro Big Mom' },
    summary: {
      en: 'Law and Kid combine their attacks to defeat Big Mom on Onigashima.',
      it: 'Law e Kidd uniscono i loro attacchi per sconfiggere Big Mom a Onigashima.',
    },
  },
  lawTeach: {
    character: 'marshall-d-teach',
    type: { en: 'Enemy who defeats him', it: 'Nemico che lo sconfigge' },
    summary: {
      en: 'Blackbeard defeats Law at Winner Island and destroys his submarine.',
      it: 'Barbanera sconfigge Law a Winner Island e distrugge il suo sommergibile.',
    },
  },
  lawBepoSave: {
    character: 'bepo',
    type: { en: 'Crewmate who rescues him', it: 'Compagno che lo salva' },
    summary: {
      en: 'Bepo transforms and carries the defeated Law away from Blackbeard by sea.',
      it: 'Bepo si trasforma e porta in salvo Law sconfitto, allontanandolo da Barbanera via mare.',
    },
  },
  kidKiller: {
    character: 'killer',
    type: { en: 'Crewmate', it: 'Compagno di ciurma' },
    summary: {
      en: 'Killer accompanies Kid as a combatant of the Kid Pirates.',
      it: 'Killer accompagna Kidd come combattente della sua ciurma.',
    },
  },
  kidApoo: {
    character: 'scratchmen-apoo',
    type: { en: 'Rival captain', it: 'Capitano rivale' },
    summary: {
      en: 'Kid quarrels with Apoo on Sabaody and postpones their fight until the New World.',
      it: 'Kidd litiga con Apoo a Sabaody e rimanda lo scontro al Nuovo Mondo.',
    },
  },
  kidLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Rival captain', it: 'Capitano rivale' },
    summary: {
      en: 'Kid fights beside Luffy on Sabaody but says they will be enemies in the New World.',
      it: 'Kidd combatte accanto a Rufy a Sabaody, ma dice che nel Nuovo Mondo saranno nemici.',
    },
  },
  kidLaw: {
    character: 'trafalgar-law',
    type: { en: 'Rival captain', it: 'Capitano rivale' },
    summary: {
      en: 'Kid and Law compete while fighting the Marines outside the auction house.',
      it: 'Kidd e Law si sfidano mentre affrontano i marine fuori dalla casa d’aste.',
    },
  },
  kidApooAlly: {
    character: 'scratchmen-apoo',
    type: { en: 'Alliance partner', it: 'Alleato' },
    summary: {
      en: 'Kid meets Apoo to form an alliance despite their earlier clashes.',
      it: 'Kidd incontra Apoo per formare un’alleanza, nonostante i loro precedenti scontri.',
    },
  },
  kidHawkins: {
    character: 'basil-hawkins',
    type: { en: 'Alliance partner', it: 'Alleato' },
    summary: {
      en: 'Kid includes Hawkins in the alliance discussed at his hideout.',
      it: 'Kidd include Hawkins nell’alleanza discussa nel suo covo.',
    },
  },
  kidKillerSMILE: {
    character: 'killer',
    type: {
      en: 'Partner he tries to save',
      it: 'Compagno che cerca di salvare',
    },
    summary: {
      en: 'Kid tries to rescue Killer after discovering the forced laughter caused by a failed SMILE.',
      it: 'Kidd cerca di salvare Killer dopo aver scoperto la risata involontaria causata da uno SMILE difettoso.',
    },
  },
  kidApooBetray: {
    character: 'scratchmen-apoo',
    type: { en: 'Ally who betrayed him', it: 'Alleato che lo ha tradito' },
    summary: {
      en: 'Apoo was already working for Kaido when he drew Kid into their alliance.',
      it: 'Apoo lavorava già per Kaido quando ha coinvolto Kidd nella loro alleanza.',
    },
  },
  kidKaido: {
    character: 'kaido',
    type: {
      en: 'Enemy who imprisoned him',
      it: 'Nemico che lo ha imprigionato',
    },
    summary: {
      en: 'Kid refused to submit to Kaido and was defeated and imprisoned.',
      it: 'Kidd si è rifiutato di sottomettersi a Kaido ed è stato sconfitto e imprigionato.',
    },
  },
  kidLawWin: {
    character: 'trafalgar-law',
    type: { en: 'Ally against Big Mom', it: 'Alleato contro Big Mom' },
    summary: {
      en: 'Kid and Law defeat Big Mom together despite continuing to argue over their attacks.',
      it: 'Kidd e Law sconfiggono insieme Big Mom, pur continuando a discutere sui loro attacchi.',
    },
  },
  kidBigMom: {
    character: 'charlotte-linlin',
    type: { en: 'Emperor he defeats', it: 'Imperatrice che sconfigge' },
    summary: {
      en: 'Kid helps Law force Big Mom out of Onigashima and wins their battle.',
      it: 'Kidd aiuta Law a scagliare Big Mom fuori da Onigashima e vince lo scontro.',
    },
  },
  kidKillerDefeat: {
    character: 'killer',
    type: {
      en: 'Partner defeated beside him',
      it: 'Compagno sconfitto con lui',
    },
    summary: {
      en: 'Killer tries to protect Kid from Shanks and is struck down with his captain.',
      it: 'Killer cerca di proteggere Kidd da Shanks e viene abbattuto insieme al suo capitano.',
    },
  },
  kidShanks: {
    character: 'shanks',
    type: { en: 'Enemy who defeats him', it: 'Nemico che lo sconfigge' },
    summary: {
      en: 'Shanks strikes down Kid before he can fire on the fleet off Elbaf.',
      it: 'Shanks abbatte Kidd prima che possa sparare contro la flotta al largo di Elbaf.',
    },
  },
  hancockSonia: {
    character: 'boa-sandersonia',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'Sandersonia stands beside Hancock as one of the three Gorgon sisters.',
      it: 'Sandersonia affianca Hancock come una delle tre sorelle Gorgoni.',
    },
  },
  hancockMari: {
    character: 'boa-marigold',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'Marigold supports Hancock’s rule over Amazon Lily alongside Sandersonia.',
      it: 'Marigold sostiene Hancock nel governo di Amazon Lily insieme a Sandersonia.',
    },
  },
  hancockLuffyEnemy: {
    character: 'monkey-d-luffy',
    type: { en: 'Intruder she challenges', it: 'Intruso che mette alla prova' },
    summary: {
      en: 'Hancock orders Luffy to fight in the arena after he enters her palace.',
      it: 'Hancock ordina a Rufy di combattere nell’arena dopo che è entrato nel suo palazzo.',
    },
  },
  hancockLuffyTrust: {
    character: 'monkey-d-luffy',
    type: { en: 'Man she trusts', it: 'Uomo di cui si fida' },
    summary: {
      en: 'Hancock tells Luffy about her enslavement after he protects her sister’s secret.',
      it: 'Hancock racconta a Rufy la propria schiavitù dopo che ha protetto il segreto di sua sorella.',
    },
  },
  hancockLuffyLove: {
    character: 'monkey-d-luffy',
    type: { en: 'Man she loves', it: 'Uomo di cui è innamorata' },
    summary: {
      en: 'Hancock falls in love with Luffy and agrees to help him rescue his brother.',
      it: 'Hancock si innamora di Rufy e accetta di aiutarlo a salvare suo fratello.',
    },
  },
  hancockNyon: {
    character: 'nyon',
    type: { en: 'Adviser', it: 'Consigliera' },
    summary: {
      en: 'Nyon recognises Hancock’s lovesickness and advises her to help Luffy.',
      it: 'Nyon riconosce il mal d’amore di Hancock e le consiglia di aiutare Rufy.',
    },
  },
  hancockRayleigh: {
    character: 'silvers-rayleigh',
    type: { en: 'Friend who protects her', it: 'Amico che la protegge' },
    summary: {
      en: 'Rayleigh intervenes on Amazon Lily and negotiates Hancock’s release from Blackbeard.',
      it: 'Rayleigh interviene ad Amazon Lily e ottiene che Barbanera lasci libera Hancock.',
    },
  },
  jinbeAce: {
    character: 'portgas-d-ace',
    type: { en: 'Fellow prisoner', it: 'Compagno di prigionia' },
    summary: {
      en: 'Jinbe shares Ace’s cell and refuses to fight against Whitebeard.',
      it: 'Jinbe condivide la cella con Ace e rifiuta di combattere contro Barbabianca.',
    },
  },
  jinbeWhitebeard: {
    character: 'edward-newgate',
    type: { en: 'Protector he defends', it: 'Protettore che difende' },
    summary: {
      en: 'Jinbe refuses the order to fight Whitebeard, whose protection keeps Fish-Man Island safe.',
      it: 'Jinbe rifiuta l’ordine di combattere contro Barbabianca, che protegge l’Isola degli Uomini-Pesce.',
    },
  },
  jinbeAceRescue: {
    character: 'portgas-d-ace',
    type: { en: 'Friend he tries to rescue', it: 'Amico che cerca di salvare' },
    summary: {
      en: 'Jinbe leaves his cell and joins the escape to prevent Ace’s execution.',
      it: 'Jinbe lascia la cella e si unisce alla fuga per impedire l’esecuzione di Ace.',
    },
  },
  jinbeAceLost: {
    character: 'portgas-d-ace',
    type: {
      en: 'Friend he could not save',
      it: 'Amico che non ha potuto salvare',
    },
    summary: {
      en: 'Jinbe cannot prevent Ace’s death and instead protects his surviving brother Luffy.',
      it: 'Jinbe non riesce a impedire la morte di Ace e protegge invece suo fratello Rufy.',
    },
  },
  jinbeWhitebeardLost: {
    character: 'edward-newgate',
    type: { en: 'Late protector', it: 'Protettore defunto' },
    summary: {
      en: 'Jinbe loses Whitebeard in the war after fighting to defend the man who protected Fish-Man Island.',
      it: 'Jinbe perde Barbabianca nella guerra dopo aver combattuto in difesa dell’uomo che proteggeva l’Isola degli Uomini-Pesce.',
    },
  },
  jinbeLuffyAlly: {
    character: 'monkey-d-luffy',
    type: { en: 'Ally in Ace’s rescue', it: 'Alleato nel salvataggio di Ace' },
    summary: {
      en: 'Luffy frees Jinbe from his cell, and Jinbe joins him in the attempt to rescue Ace.',
      it: 'Rufy libera Jinbe dalla cella e Jinbe lo segue nel tentativo di salvare Ace.',
    },
  },
  jinbeLuffyProtect: {
    character: 'monkey-d-luffy',
    type: { en: 'Friend he protects', it: 'Amico che protegge' },
    summary: {
      en: 'Jinbe carries Luffy out of the war and helps him remember that his crew is still alive.',
      it: 'Jinbe porta Rufy fuori dalla guerra e lo aiuta a ricordare che la sua ciurma è ancora viva.',
    },
  },
  jinbeTiger: {
    character: 'fisher-tiger',
    type: { en: 'Former captain', it: 'Ex capitano' },
    summary: {
      en: 'Jinbe sailed with Fisher Tiger in the Sun Pirates and witnessed his refusal of a human blood transfusion.',
      it: 'Jinbe ha navigato con Fisher Tiger nei Pirati del Sole e ha assistito al suo rifiuto di una trasfusione di sangue umano.',
    },
  },
  jinbeArlong: {
    character: 'arlong',
    type: { en: 'Former crewmate', it: 'Ex compagno di ciurma' },
    summary: {
      en: 'Jinbe and Arlong followed Fisher Tiger but disagreed over how to treat humans.',
      it: 'Jinbe e Arlong hanno seguito Fisher Tiger, ma erano in disaccordo su come trattare gli esseri umani.',
    },
  },
  jinbeLuffyBlood: {
    character: 'monkey-d-luffy',
    type: { en: 'Friend he gives blood to', it: 'Amico a cui dona il sangue' },
    summary: {
      en: 'Jinbe gives Luffy his blood after the battle for Fish-Man Island.',
      it: 'Jinbe dona il proprio sangue a Rufy dopo la battaglia per l’Isola degli Uomini-Pesce.',
    },
  },
  jinbeLuffyCaptain: {
    character: 'monkey-d-luffy',
    type: { en: 'Captain he chooses', it: 'Capitano che sceglie' },
    summary: {
      en: 'Jinbe leaves Big Mom’s service and declares that he will join Luffy’s crew.',
      it: 'Jinbe lascia il servizio di Big Mom e dichiara che entrerà nella ciurma di Rufy.',
    },
  },
  jinbeBigMom: {
    character: 'charlotte-linlin',
    type: {
      en: 'Former leader he defies',
      it: 'Ex comandante a cui si oppone',
    },
    summary: {
      en: 'Jinbe returns his sake cup to Big Mom and refuses to fear her threat against his life.',
      it: 'Jinbe restituisce la coppa di sakè a Big Mom e non cede alla minaccia contro la propria vita.',
    },
  },
  jinbeLuffyHelm: {
    character: 'monkey-d-luffy',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Jinbe returns alive at Wano and joins Luffy’s crew as its helmsman.',
      it: 'Jinbe torna vivo a Wano e si unisce alla ciurma di Rufy come timoniere.',
    },
  },
  rayleighRoger: {
    character: 'gold-roger',
    type: { en: 'Former captain', it: 'Ex capitano' },
    summary: {
      en: 'Rayleigh was Roger’s first mate and sailed with him to the end of the Grand Line.',
      it: 'Rayleigh è stato il vicecapitano di Roger e ha navigato con lui fino alla fine della Rotta Maggiore.',
    },
  },
  rayleighShakkySaved: {
    character: 'shakky',
    type: { en: 'Companion he rescued', it: 'Compagna che ha salvato' },
    summary: {
      en: 'Rayleigh rescued Shakky from Sommers on God Valley and promised to keep her safe.',
      it: 'Rayleigh ha salvato Shakky da Sommers a God Valley e ha promesso di proteggerla.',
    },
  },
  rayleighCamie: {
    character: 'camie',
    type: { en: 'Woman he frees', it: 'Donna che libera' },
    summary: {
      en: 'Rayleigh removes Camie’s explosive collar before it detonates.',
      it: 'Rayleigh toglie il collare esplosivo di Kayme prima che esploda.',
    },
  },
  rayleighShakky: {
    character: 'shakky',
    type: { en: 'Companion on Sabaody', it: 'Compagna a Sabaody' },
    summary: {
      en: 'Rayleigh stays with Shakky and meets Luffy’s crew at her bar.',
      it: 'Rayleigh vive con Shakky e incontra la ciurma di Rufy nel suo bar.',
    },
  },
  rayleighHatchan: {
    character: 'hatchan',
    type: { en: 'Old friend', it: 'Vecchio amico' },
    summary: {
      en: 'Hatchan saved Rayleigh from a shipwreck when he was a child, and they remained friends.',
      it: 'Octy ha salvato Rayleigh da un naufragio quando era bambino e i due sono rimasti amici.',
    },
  },
  rayleighLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Pirate he helps', it: 'Pirata che aiuta' },
    summary: {
      en: 'Rayleigh offers to coat Luffy’s ship so that his crew can continue its voyage.',
      it: 'Rayleigh si offre di rivestire la nave di Rufy perché la ciurma possa proseguire il viaggio.',
    },
  },
  rayleighLuffyPupil: {
    character: 'monkey-d-luffy',
    type: { en: 'Pupil', it: 'Allievo' },
    summary: {
      en: 'Rayleigh trains Luffy to use Haki on Rusukaina during the two-year separation.',
      it: 'Rayleigh allena Rufy a usare l’Haki a Rusukaina durante i due anni di separazione.',
    },
  },
  rayleighHancock: {
    character: 'boa-hancock',
    type: { en: 'Friend he helps', it: 'Amica che aiuta' },
    summary: {
      en: 'Rayleigh intervenes when Blackbeard captures Hancock and negotiates an end to the fighting.',
      it: 'Rayleigh interviene quando Barbanera cattura Hancock e tratta la fine degli scontri.',
    },
  },
  apooKid: {
    character: 'eustass-kid',
    type: { en: 'Rival captain', it: 'Capitano rivale' },
    summary: {
      en: 'Apoo quarrels with Kid on Sabaody before they agree to postpone their fight.',
      it: 'Apoo litiga con Kidd a Sabaody prima di rimandare lo scontro.',
    },
  },
  apooBorsalino: {
    character: 'borsalino',
    type: { en: 'Admiral he attacks', it: 'Ammiraglio che attacca' },
    summary: {
      en: 'Apoo attacks Kizaru on Sabaody, but the admiral retaliates and knocks him down.',
      it: 'Apoo attacca Kizaru a Sabaody, ma l’ammiraglio reagisce e lo abbatte.',
    },
  },
  apooKidAlly: {
    character: 'eustass-kid',
    type: { en: 'Alliance partner', it: 'Alleato' },
    summary: {
      en: 'Apoo meets Kid at his hideout to discuss an alliance.',
      it: 'Apoo incontra Kidd nel suo covo per discutere un’alleanza.',
    },
  },
  apooHawkins: {
    character: 'basil-hawkins',
    type: { en: 'Alliance partner', it: 'Alleato' },
    summary: {
      en: 'Hawkins joins Apoo and Kid in the alliance discussed at Kid’s hideout.',
      it: 'Hawkins si unisce ad Apoo e Kidd nell’alleanza discussa nel covo di Kidd.',
    },
  },
  apooKidBetrayed: {
    character: 'eustass-kid',
    type: { en: 'Captain he betrayed', it: 'Capitano che ha tradito' },
    summary: {
      en: 'Apoo drew Kid into an alliance while already acting as Kaido’s informant.',
      it: 'Apoo ha coinvolto Kidd in un’alleanza mentre era già un informatore di Kaido.',
    },
  },
  apooHawkinsBetrayed: {
    character: 'basil-hawkins',
    type: { en: 'Captain he deceived', it: 'Capitano che ha ingannato' },
    summary: {
      en: 'Apoo drew Hawkins into the alliance while already working for Kaido.',
      it: 'Apoo ha coinvolto Hawkins nell’alleanza mentre lavorava già per Kaido.',
    },
  },
  apooKaido: {
    character: 'kaido',
    type: { en: 'Captain he joined', it: 'Capitano a cui si è unito' },
    summary: {
      en: 'Apoo joined Kaido and helped him find the allied captains at Kid’s hideout.',
      it: 'Apoo si è unito a Kaido e lo ha aiutato a trovare i capitani alleati nel covo di Kidd.',
    },
  },
  apooQueen: {
    character: 'queen',
    type: {
      en: 'Commander who threatens him',
      it: 'Comandante che lo minaccia',
    },
    summary: {
      en: 'Queen gives Apoo the Ice Oni antidote and threatens to kill him if he loses it.',
      it: 'Queen affida ad Apoo l’antidoto degli Oni di Ghiaccio e minaccia di ucciderlo se lo perde.',
    },
  },
  apooDrake: {
    character: 'x-drake',
    type: { en: 'Temporary ally', it: 'Alleato temporaneo' },
    summary: {
      en: 'Apoo and Drake set aside their quarrel to fight the CP0 agents pursuing them.',
      it: 'Apoo e Drake mettono da parte il loro scontro per affrontare gli agenti del CP0 che li inseguono.',
    },
  },
  hawkinsBorsalino: {
    character: 'borsalino',
    type: { en: 'Admiral he faces', it: 'Ammiraglio che affronta' },
    summary: {
      en: 'Hawkins fights Kizaru on Sabaody and survives his attacks through straw dolls.',
      it: 'Hawkins affronta Kizaru a Sabaody e sopravvive ai suoi attacchi grazie alle bambole di paglia.',
    },
  },
  hawkinsKid: {
    character: 'eustass-kid',
    type: { en: 'Alliance partner', it: 'Alleato' },
    summary: {
      en: 'Hawkins meets Kid to form an alliance with him and Apoo.',
      it: 'Hawkins incontra Kidd per stringere un’alleanza con lui e Apoo.',
    },
  },
  hawkinsApoo: {
    character: 'scratchmen-apoo',
    type: { en: 'Alliance partner', it: 'Alleato' },
    summary: {
      en: 'Hawkins joins Apoo and Kid in an alliance despite their quarrelling.',
      it: 'Hawkins si allea con Apoo e Kidd nonostante i loro litigi.',
    },
  },
  hawkinsKidFormer: {
    character: 'eustass-kid',
    type: { en: 'Former ally', it: 'Ex alleato' },
    summary: {
      en: 'Kid resisted Kaido while Hawkins chose to submit to the Emperor.',
      it: 'Kidd si è opposto a Kaido mentre Hawkins ha scelto di sottomettersi all’imperatore.',
    },
  },
  hawkinsKaido: {
    character: 'kaido',
    type: {
      en: 'Captain he submitted to',
      it: 'Capitano a cui si è sottomesso',
    },
    summary: {
      en: 'Hawkins submits to Kaido after judging that resistance would not let him survive.',
      it: 'Hawkins si sottomette a Kaido perché ritiene che opporsi non gli permetterebbe di sopravvivere.',
    },
  },
  hawkinsApooBetray: {
    character: 'scratchmen-apoo',
    type: { en: 'Ally who betrayed him', it: 'Alleato che lo ha tradito' },
    summary: {
      en: 'Apoo was already Kaido’s informant when he formed the alliance with Hawkins and Kid.',
      it: 'Apoo era già un informatore di Kaido quando ha stretto l’alleanza con Hawkins e Kidd.',
    },
  },
  hawkinsKiller: {
    character: 'killer',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Killer defeats Hawkins by severing the arm that cannot transfer damage to Kid’s missing arm.',
      it: 'Killer sconfigge Hawkins recidendo il braccio che non può trasferire il danno al braccio mancante di Kidd.',
    },
  },
  hawkinsKidHostage: {
    character: 'eustass-kid',
    type: { en: 'Life he uses as a hostage', it: 'Vita che usa come ostaggio' },
    summary: {
      en: 'Hawkins links a straw doll to Kid’s life to stop Killer from attacking him.',
      it: 'Hawkins lega una bambola di paglia alla vita di Kidd per impedire a Killer di attaccarlo.',
    },
  },
  hawkinsDrake: {
    character: 'x-drake',
    type: { en: 'Man he confides in', it: 'Uomo a cui si confida' },
    summary: {
      en: 'Hawkins tells Drake that he foresaw his own low chance of surviving but chose not to change sides.',
      it: 'Hawkins racconta a Drake di aver previsto le proprie scarse possibilità di sopravvivere, ma di aver scelto di non cambiare schieramento.',
    },
  },
  drakeKiller: {
    character: 'killer',
    type: { en: 'Pirate he restrains', it: 'Pirata che ferma' },
    summary: {
      en: 'Drake blocks Killer’s blades to stop his fight with Urouge on Sabaody.',
      it: 'Drake para le lame di Killer per fermare il suo scontro con Urouge a Sabaody.',
    },
  },
  drakeUrouge: {
    character: 'urouge',
    type: { en: 'Pirate he restrains', it: 'Pirata che ferma' },
    summary: {
      en: 'Drake stops Urouge’s fight with Killer and tells them to save it for the New World.',
      it: 'Drake ferma lo scontro di Urouge con Killer e invita entrambi a rimandarlo al Nuovo Mondo.',
    },
  },
  drakeKoby: {
    character: 'koby',
    type: { en: 'SWORD colleague', it: 'Collega dello SWORD' },
    summary: {
      en: 'Drake secretly reports to Koby about Kaido and the Government’s dealings in Wano.',
      it: 'Drake riferisce in segreto a Koby su Kaido e sugli accordi del Governo a Wano.',
    },
  },
  drakeLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Ally he asks to join', it: 'Alleato a cui si propone' },
    summary: {
      en: 'After the Beasts Pirates turn on him, Drake asks Luffy to let him fight on his side.',
      it: 'Quando i Pirati delle Cento Bestie si rivoltano contro di lui, Drake chiede a Rufy di poter combattere al suo fianco.',
    },
  },
  drakeApoo: {
    character: 'scratchmen-apoo',
    type: { en: 'Temporary ally', it: 'Alleato temporaneo' },
    summary: {
      en: 'Drake fights alongside Apoo against CP0 despite distrusting his proposal for an alliance.',
      it: 'Drake combatte accanto ad Apoo contro il CP0, pur diffidando della sua proposta di alleanza.',
    },
  },
  urougeKiller: {
    character: 'killer',
    type: { en: 'Opponent on Sabaody', it: 'Avversario a Sabaody' },
    summary: {
      en: 'Urouge fights Killer until Drake interrupts them.',
      it: 'Urouge combatte con Killer finché Drake non li interrompe.',
    },
  },
  urougeDrake: {
    character: 'x-drake',
    type: { en: 'Captain who intervenes', it: 'Capitano che interviene' },
    summary: {
      en: 'Drake blocks Urouge and Killer’s attacks and stops their fight.',
      it: 'Drake para i colpi di Urouge e Killer e ferma il loro scontro.',
    },
  },
  urougeBorsalino: {
    character: 'borsalino',
    type: { en: 'Admiral who defeats him', it: 'Ammiraglio che lo sconfigge' },
    summary: {
      en: 'Kizaru knocks Urouge through several buildings on Sabaody.',
      it: 'Kizaru scaglia Urouge attraverso diversi edifici a Sabaody.',
    },
  },
  urougeCracker: {
    character: 'charlotte-cracker',
    type: { en: 'Enemy who defeats him', it: 'Nemico che lo sconfigge' },
    summary: {
      en: 'Cracker defeats Urouge after he invades Big Mom’s territory and forces him to retreat.',
      it: 'Cracker sconfigge Urouge dopo la sua invasione del territorio di Big Mom e lo costringe alla fuga.',
    },
  },
  begeBonney: {
    character: 'jewelry-bonney',
    type: { en: 'Captain who irritates him', it: 'Capitana che lo irrita' },
    summary: {
      en: 'Bege is annoyed by Bonney’s table manners in a Sabaody restaurant.',
      it: 'Bege è irritato dalle maniere di Bonney a tavola in un ristorante di Sabaody.',
    },
  },
  begeSanji: {
    character: 'sanji',
    type: { en: 'Man he takes away', it: 'Uomo che porta via' },
    summary: {
      en: 'Bege forces Sanji to accompany him to Big Mom’s tea party by threatening his friends.',
      it: 'Bege costringe Sanji a seguirlo alla festa di Big Mom minacciando i suoi amici.',
    },
  },
  begePekoms: {
    character: 'pekoms',
    type: { en: 'Partner he shoots', it: 'Compagno a cui spara' },
    summary: {
      en: 'Bege shoots Pekoms for refusing to carry out Big Mom’s orders on Zou.',
      it: 'Bege spara a Pekoms perché rifiuta di eseguire gli ordini di Big Mom a Zou.',
    },
  },
  begeChiffon: {
    character: 'charlotte-chiffon',
    type: { en: 'Wife', it: 'Moglie' },
    summary: {
      en: 'Chiffon is Bege’s wife and supports his plan to escape Big Mom’s control.',
      it: 'Chiffon è la moglie di Bege e sostiene il suo piano per liberarsi dal controllo di Big Mom.',
    },
  },
  begeChiffonEarly: {
    character: 'charlotte-chiffon',
    type: { en: 'Wife', it: 'Moglie' },
    summary: {
      en: 'Chiffon is married to Bege and cares for him and their son.',
      it: 'Chiffon è sposata con Bege e si prende cura di lui e del loro figlio.',
    },
  },
  begeBigMomLeader: {
    character: 'charlotte-linlin',
    type: { en: 'Leader', it: 'Comandante' },
    summary: {
      en: 'Bege serves Big Mom and carries out her orders.',
      it: 'Bege è al servizio di Big Mom e ne esegue gli ordini.',
    },
  },
  begeBigMom: {
    character: 'charlotte-linlin',
    type: {
      en: 'Leader he plots to kill',
      it: 'Comandante che vuole uccidere',
    },
    summary: {
      en: 'Bege plans to assassinate Big Mom from within her organisation.',
      it: 'Bege progetta di assassinare Big Mom dall’interno della sua organizzazione.',
    },
  },
  begeLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Alliance partner', it: 'Alleato' },
    summary: {
      en: 'Bege and Luffy agree to cooperate against Big Mom at the wedding.',
      it: 'Bege e Rufy si accordano per collaborare contro Big Mom durante le nozze.',
    },
  },
  begeBigMomEnemy: {
    character: 'charlotte-linlin',
    type: { en: 'Former leader and enemy', it: 'Ex comandante e nemica' },
    summary: {
      en: 'Bege escapes Big Mom after his attempt to assassinate her fails.',
      it: 'Bege sfugge a Big Mom dopo il fallimento del suo tentativo di assassinarla.',
    },
  },
  begeLuffyFormer: {
    character: 'monkey-d-luffy',
    type: { en: 'Temporary ally', it: 'Alleato temporaneo' },
    summary: {
      en: 'Bege works with Luffy at the wedding and helps his group escape from the chateau.',
      it: 'Bege collabora con Rufy alle nozze e aiuta il suo gruppo a fuggire dal castello.',
    },
  },
  begeChiffonRescue: {
    character: 'charlotte-chiffon',
    type: { en: 'Wife he rescues', it: 'Moglie che salva' },
    summary: {
      en: 'Bege shoots Oven and brings his ship ashore to rescue Chiffon from him.',
      it: 'Bege spara a Oven e porta la nave a terra per sottrarre Chiffon alla sua presa.',
    },
  },
  begeSanjiAlly: {
    character: 'sanji',
    type: { en: 'Ally he helps', it: 'Alleato che aiuta' },
    summary: {
      en: 'Bege helps Sanji take the wedding cake out to sea.',
      it: 'Bege aiuta Sanji a portare la torta nuziale in mare.',
    },
  },
  bonneyZoro: {
    character: 'roronoa-zoro',
    type: { en: 'Pirate she stops', it: 'Pirata che ferma' },
    summary: {
      en: 'Bonney stops Zoro from attacking a World Noble and stages his death to avoid an incident.',
      it: 'Bonney impedisce a Zoro di attaccare un Nobile Mondiale e ne inscena la morte per evitare un incidente.',
    },
  },
  bonneyTeach: {
    character: 'marshall-d-teach',
    type: { en: 'Captor', it: 'Carceriere' },
    summary: {
      en: 'Blackbeard holds Bonney prisoner and tries to trade her to the Marines for a ship.',
      it: 'Barbanera tiene Bonney prigioniera e cerca di scambiarla con la Marina in cambio di una nave.',
    },
  },
  bonneyLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Pirate who rescues her', it: 'Pirata che la salva' },
    summary: {
      en: 'Luffy’s crew rescues Bonney from the sea near Egghead.',
      it: 'La ciurma di Rufy salva Bonney dal mare vicino a Egghead.',
    },
  },
  bonneyKuma: {
    character: 'bartholomew-kuma',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Bonney says Kuma is her father and rejects the claim that he willingly became a cyborg.',
      it: 'Bonney dice che Kuma è suo padre e rifiuta l’idea che abbia scelto liberamente di diventare un cyborg.',
    },
  },
  bonneyVegapunkEnemy: {
    character: 'vegapunk',
    type: {
      en: 'Scientist she confronts',
      it: 'Scienziato a cui chiede conto',
    },
    summary: {
      en: 'Bonney demands that Vegapunk restore her father’s mind after turning him into a cyborg.',
      it: 'Bonney pretende che Vegapunk restituisca la coscienza a suo padre dopo averlo trasformato in un cyborg.',
    },
  },
  bonneyGinny: {
    character: 'ginny',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'Ginny brought the infant Bonney back to Sorbet before dying from Sapphire Scales.',
      it: 'Ginny ha riportato Bonney neonata a Sorbet prima di morire di scaglie di zaffiro.',
    },
  },
  bonneyKumaAdopt: {
    character: 'bartholomew-kuma',
    type: { en: 'Adoptive father', it: 'Padre adottivo' },
    summary: {
      en: 'Kuma takes in Ginny’s daughter Bonney and raises her after her mother’s death.',
      it: 'Kuma accoglie Bonney, la figlia di Ginny, e la cresce dopo la morte della madre.',
    },
  },
  bonneyVegapunkDoctor: {
    character: 'vegapunk',
    type: { en: 'Doctor who cured her', it: 'Medico che l’ha guarita' },
    summary: {
      en: 'Vegapunk cures Bonney’s Sapphire Scales after Kuma accepts the Government’s conditions.',
      it: 'Vegapunk cura le scaglie di zaffiro di Bonney dopo che Kuma ha accettato le condizioni del Governo.',
    },
  },
  bonneySaturn: {
    character: 'jaygarcia-saturn',
    type: {
      en: 'Enemy who harmed her family',
      it: 'Nemico che ha colpito la sua famiglia',
    },
    summary: {
      en: 'Saturn reveals that his experiments caused Ginny and Bonney’s illness.',
      it: 'Saturn rivela che i suoi esperimenti hanno causato la malattia di Ginny e Bonney.',
    },
  },
  bonneyKumaRescue: {
    character: 'bartholomew-kuma',
    type: { en: 'Father who protects her', it: 'Padre che la protegge' },
    summary: {
      en: 'Kuma shields Bonney from Saturn and embraces her after she learns what he sacrificed for her.',
      it: 'Kuma protegge Bonney da Saturn e la abbraccia dopo che lei ha scoperto quanto ha sacrificato per lei.',
    },
  },
  bonneyLuffyNika: {
    character: 'monkey-d-luffy',
    type: { en: 'Hero she recognises', it: 'Eroe che riconosce' },
    summary: {
      en: 'Bonney recognises Nika in Luffy, the liberator her father told her about.',
      it: 'Bonney riconosce in Rufy Nika, il liberatore di cui le parlava suo padre.',
    },
  },
  bonneyLuffyFight: {
    character: 'monkey-d-luffy',
    type: { en: 'Ally against Saturn', it: 'Alleato contro Saturn' },
    summary: {
      en: 'Bonney and Luffy strike Saturn together after Luffy encourages her to use her free future.',
      it: 'Bonney e Rufy colpiscono insieme Saturn dopo che Rufy l’ha incoraggiata a usare il proprio futuro libero.',
    },
  },
  borsalinoHawkins: {
    character: 'basil-hawkins',
    type: { en: 'Pirate he attacks', it: 'Pirata che attacca' },
    summary: {
      en: 'Kizaru attacks Hawkins while hunting the pirates on Sabaody.',
      it: 'Kizaru attacca Hawkins durante la caccia ai pirati a Sabaody.',
    },
  },
  borsalinoSentomaru: {
    character: 'sentomaru',
    type: { en: 'Colleague on Sabaody', it: 'Collega a Sabaody' },
    summary: {
      en: 'Kizaru coordinates the pursuit of the Straw Hats with Sentomaru.',
      it: 'Kizaru coordina con Sentomaru l’inseguimento dei Cappello di Paglia.',
    },
  },
  borsalinoRayleigh: {
    character: 'silvers-rayleigh',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Rayleigh stops Kizaru from capturing the Straw Hats, forcing him into a sword fight.',
      it: 'Rayleigh impedisce a Kizaru di catturare i Cappello di Paglia e lo costringe a uno scontro di spade.',
    },
  },
  borsalinoSentomaruEnemy: {
    character: 'sentomaru',
    type: { en: 'Former colleague he defeats', it: 'Ex collega che sconfigge' },
    summary: {
      en: 'Kizaru defeats Sentomaru when his old acquaintance stands in the way of the mission to kill Vegapunk.',
      it: 'Kizaru sconfigge Sentomaru quando il suo vecchio conoscente ostacola la missione per uccidere Vegapunk.',
    },
  },
  borsalinoVegapunk: {
    character: 'vegapunk',
    type: { en: 'Friend he is ordered to kill', it: 'Amico che deve uccidere' },
    summary: {
      en: 'Kizaru admits that he does not want to kill Vegapunk, whom he has known for years.',
      it: 'Kizaru ammette di non voler uccidere Vegapunk, che conosce da anni.',
    },
  },
  borsalinoBonney: {
    character: 'jewelry-bonney',
    type: {
      en: 'Old acquaintance he attacks',
      it: 'Vecchia conoscente che attacca',
    },
    summary: {
      en: 'Kizaru recognises Bonney but strikes her away when she confronts him on Egghead.',
      it: 'Kizaru riconosce Bonney, ma la colpisce quando lei lo affronta a Egghead.',
    },
  },
  borsalinoLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Opponent on Egghead', it: 'Avversario a Egghead' },
    summary: {
      en: 'Luffy fights Kizaru to prevent him from reaching Vegapunk.',
      it: 'Rufy affronta Kizaru per impedirgli di raggiungere Vegapunk.',
    },
  },
  borsalinoVegapunkDead: {
    character: 'vegapunk',
    type: { en: 'Friend he kills', it: 'Amico che uccide' },
    summary: {
      en: 'Kizaru strikes Vegapunk through the chest while carrying out the assassination order.',
      it: 'Kizaru trafigge Vegapunk al petto mentre esegue l’ordine di assassinarlo.',
    },
  },
  borsalinoSakazuki: {
    character: 'sakazuki',
    type: { en: 'Superior he confronts', it: 'Superiore a cui si oppone' },
    summary: {
      en: 'Kizaru angrily tells Sakazuki that he has killed his best friend after being accused of failing his mission.',
      it: 'Kizaru dice con rabbia a Sakazuki di aver ucciso il suo migliore amico, dopo essere stato accusato di aver fallito la missione.',
    },
  },
  sentomaruBorsalino: {
    character: 'borsalino',
    type: { en: 'Admiral he works with', it: 'Ammiraglio con cui collabora' },
    summary: {
      en: 'Sentomaru directs Kizaru during their pursuit of the Straw Hats on Sabaody.',
      it: 'Sentomaru guida Kizaru durante l’inseguimento dei Cappello di Paglia a Sabaody.',
    },
  },
  sentomaruLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Pirate he fights', it: 'Pirata che affronta' },
    summary: {
      en: 'Sentomaru attacks Luffy on Sabaody while commanding a Pacifista.',
      it: 'Sentomaru attacca Rufy a Sabaody mentre comanda un Pacifista.',
    },
  },
  sentomaruVegapunk: {
    character: 'vegapunk',
    type: { en: 'Benefactor he protects', it: 'Benefattore che protegge' },
    summary: {
      en: 'Sentomaru agrees to protect Vegapunk, who gave him a job when he had nowhere to go.',
      it: 'Sentomaru accetta di proteggere Vegapunk, che gli ha dato un lavoro quando non aveva dove andare.',
    },
  },
  sentomaruLuffyAlly: {
    character: 'monkey-d-luffy',
    type: {
      en: 'Pirate he entrusts with Vegapunk',
      it: 'Pirata a cui affida Vegapunk',
    },
    summary: {
      en: 'Sentomaru asks Luffy to get Vegapunk safely off Egghead.',
      it: 'Sentomaru chiede a Rufy di portare Vegapunk al sicuro lontano da Egghead.',
    },
  },
  sentomaruLucci: {
    character: 'rob-lucci',
    type: { en: 'Attacker', it: 'Aggressore' },
    summary: {
      en: 'Lucci wounds Sentomaru to seize control of the Seraphim on Egghead.',
      it: 'Lucci ferisce Sentomaru per prendere il controllo dei Seraphim a Egghead.',
    },
  },
  sentomaruBonney: {
    character: 'jewelry-bonney',
    type: { en: 'Girl he protects', it: 'Ragazza che protegge' },
    summary: {
      en: 'Sentomaru catches Bonney after she falls from the Labophase and warns her about the approaching Marines.',
      it: 'Sentomaru soccorre Bonney dopo la caduta dalla Labophase e la avverte dell’arrivo della Marina.',
    },
  },
  sentomaruBorsalinoEnemy: {
    character: 'borsalino',
    type: { en: 'Former mentor he opposes', it: 'Ex maestro a cui si oppone' },
    summary: {
      en: 'Sentomaru fights Kizaru to protect Vegapunk, but the admiral defeats him.',
      it: 'Sentomaru affronta Kizaru per proteggere Vegapunk, ma l’ammiraglio lo sconfigge.',
    },
  },
  sentomaruVegapunkLost: {
    character: 'vegapunk',
    type: { en: 'Benefactor he mourns', it: 'Benefattore che piange' },
    summary: {
      en: 'Sentomaru leaves Egghead in tears after Vegapunk’s death.',
      it: 'Sentomaru lascia Egghead in lacrime dopo la morte di Vegapunk.',
    },
  },
  shikiWhitebeard: {
    character: 'edward-newgate',
    type: { en: 'Former crewmate', it: 'Ex compagno di ciurma' },
    summary: {
      en: 'Shiki and Whitebeard sailed together in the Rocks Pirates before leading their own crews.',
      it: 'Shiki e Barbabianca hanno navigato insieme nei Pirati di Rocks prima di comandare le proprie ciurme.',
    },
  },
  shikiRocks: {
    character: 'rocks-d-xebec',
    type: { en: 'Former captain', it: 'Ex capitano' },
    summary: {
      en: 'Shiki was one of the pirates who sailed under Rocks before the crew broke apart.',
      it: 'Shiki è stato uno dei pirati al comando di Rocks prima che la ciurma si sciogliesse.',
    },
  },
  shikiShakky: {
    character: 'shakky',
    type: { en: 'Woman he hopes to rescue', it: 'Donna che spera di salvare' },
    summary: {
      en: 'Shiki goes to God Valley hoping that rescuing Shakky will win her affection.',
      it: 'Shiki va a God Valley sperando che salvare Shakky gli faccia conquistare il suo affetto.',
    },
  },
  ivaInazuma: {
    character: 'inazuma',
    type: { en: 'Companion in the escape', it: 'Compagno nella fuga' },
    summary: {
      en: 'Inazuma works with Ivankov in the hidden refuge inside Impel Down.',
      it: 'Inazuma collabora con Ivankov nel rifugio nascosto dentro Impel Down.',
    },
  },
  ivaLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Patient he treats', it: 'Paziente che cura' },
    summary: {
      en: 'Ivankov treats Luffy’s poisoning after being moved by his concern for Bon Clay.',
      it: 'Ivankov cura l’avvelenamento di Rufy dopo essere stato colpito dalla sua preoccupazione per Bon Kure.',
    },
  },
  ivaBon: {
    character: 'bon-clay',
    type: {
      en: 'Prisoner who seeks his help',
      it: 'Prigioniero che chiede il suo aiuto',
    },
    summary: {
      en: 'Bon Clay brings the poisoned Luffy to Ivankov and asks him to save his friend.',
      it: 'Bon Kure porta Rufy avvelenato da Ivankov e gli chiede di salvare il suo amico.',
    },
  },
  ivaDragon: {
    character: 'monkey-d-dragon',
    type: { en: 'Revolutionary leader', it: 'Capo rivoluzionario' },
    summary: {
      en: 'Ivankov follows Dragon and decides to help Luffy escape after learning that he is Dragon’s son.',
      it: 'Ivankov segue Dragon e decide di aiutare Rufy a fuggire dopo aver scoperto che è suo figlio.',
    },
  },
  ivaKuma: {
    character: 'bartholomew-kuma',
    type: {
      en: 'Comrade who no longer recognises him',
      it: 'Compagno che non lo riconosce più',
    },
    summary: {
      en: 'Ivankov confronts Kuma at Marineford and is shocked that his former comrade does not recognise him.',
      it: 'Ivankov affronta Kuma a Marineford ed è sconvolto perché il suo vecchio compagno non lo riconosce.',
    },
  },
  ivaGinny: {
    character: 'ginny',
    type: { en: 'Companion in slavery', it: 'Compagna di schiavitù' },
    summary: {
      en: 'Ivankov and Ginny plan an escape from the World Nobles’ hunt on God Valley.',
      it: 'Ivankov e Ginny preparano una fuga dalla caccia dei Nobili Mondiali a God Valley.',
    },
  },
  ivaKumaChild: {
    character: 'bartholomew-kuma',
    type: { en: 'Friend from God Valley', it: 'Amico dai tempi di God Valley' },
    summary: {
      en: 'Ivankov helps Kuma escape the World Nobles’ hunt on God Valley, years before they become revolutionaries.',
      it: 'Ivankov aiuta Kuma a fuggire dalla caccia dei Nobili Mondiali a God Valley, anni prima che diventino rivoluzionari.',
    },
  },
  shiryuMagellan: {
    character: 'magellan',
    type: {
      en: 'Warden who imprisoned him',
      it: 'Direttore che lo ha imprigionato',
    },
    summary: {
      en: 'Magellan imprisoned Shiryu for killing prisoners, then releases him to confront Blackbeard.',
      it: 'Magellan ha imprigionato Shiryu perché uccideva i detenuti, poi lo libera perché affronti Barbanera.',
    },
  },
  shiryuTeach: {
    character: 'marshall-d-teach',
    type: { en: 'Captain he joins', it: 'Capitano a cui si unisce' },
    summary: {
      en: 'Shiryu saves Blackbeard’s crew from Magellan’s poison and joins them.',
      it: 'Shiryu salva la ciurma di Barbanera dal veleno di Magellan e si unisce a loro.',
    },
  },
  shiryuGarp: {
    character: 'monkey-d-garp',
    type: { en: 'Enemy he wounds', it: 'Nemico che ferisce' },
    summary: {
      en: 'Shiryu stabs Garp when the vice admiral moves to protect Koby on Hachinosu.',
      it: 'Shiryu trafigge Garp quando il viceammiraglio interviene per proteggere Koby a Hachinosu.',
    },
  },
  sakazukiBorsalino: {
    character: 'borsalino',
    type: { en: 'Fellow admiral', it: 'Collega ammiraglio' },
    summary: {
      en: 'Akainu and Kizaru defend Marineford as two of the Navy’s three admirals.',
      it: 'Akainu e Kizaru difendono Marineford come due dei tre ammiragli della Marina.',
    },
  },
  sakazukiAce: {
    character: 'portgas-d-ace',
    type: { en: 'Pirate he kills', it: 'Pirata che uccide' },
    summary: {
      en: 'Akainu kills Ace when he shields Luffy from the admiral’s magma fist.',
      it: 'Akainu uccide Ace quando protegge Rufy dal pugno di magma dell’ammiraglio.',
    },
  },
  sakazukiLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Pirate he pursues', it: 'Pirata a cui dà la caccia' },
    summary: {
      en: 'Akainu pursues Luffy after killing Ace, determined to prevent his escape from Marineford.',
      it: 'Akainu insegue Rufy dopo aver ucciso Ace, deciso a impedirgli di fuggire da Marineford.',
    },
  },
  sakazukiWhitebeard: {
    character: 'edward-newgate',
    type: { en: 'Enemy who attacks him', it: 'Nemico che lo attacca' },
    summary: {
      en: 'Whitebeard attacks Akainu after Ace’s death and drives him into a fissure in the plaza.',
      it: 'Barbabianca attacca Akainu dopo la morte di Ace e lo scaglia in una spaccatura della piazza.',
    },
  },
  sakazukiKuzan: {
    character: 'kuzan',
    type: { en: 'Rival he defeats', it: 'Rivale che sconfigge' },
    summary: {
      en: 'Akainu defeats Kuzan in their duel for the position of fleet admiral.',
      it: 'Akainu sconfigge Kuzan nel duello per il grado di grand’ammiraglio.',
    },
  },
  sakazukiBorsalinoSubordinate: {
    character: 'borsalino',
    type: { en: 'Admiral under his command', it: 'Ammiraglio al suo comando' },
    summary: {
      en: 'Sakazuki commands Kizaru after becoming fleet admiral.',
      it: 'Sakazuki comanda Kizaru dopo essere diventato grand’ammiraglio.',
    },
  },
  sakazukiIssho: {
    character: 'issho',
    type: { en: 'Admiral he reprimands', it: 'Ammiraglio che rimprovera' },
    summary: {
      en: 'Sakazuki rebukes Fujitora for his public apology and orders him to capture Luffy and Law.',
      it: 'Sakazuki rimprovera Fujitora per le sue scuse pubbliche e gli ordina di catturare Rufy e Law.',
    },
  },
  sakazukiBorsalinoGrief: {
    character: 'borsalino',
    type: { en: 'Admiral he apologises to', it: 'Ammiraglio con cui si scusa' },
    summary: {
      en: 'Sakazuki apologises after Kizaru angrily tells him what killing Vegapunk has cost him.',
      it: 'Sakazuki si scusa dopo che Kizaru gli ha raccontato con rabbia quanto gli sia costato uccidere Vegapunk.',
    },
  },
  saboLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Sworn brother', it: 'Fratello giurato' },
    summary: {
      en: 'Sabo, Luffy and Ace share cups of sake and become sworn brothers.',
      it: 'Sabo, Rufy e Ace bevono insieme il sakè e diventano fratelli giurati.',
    },
  },
  saboAce: {
    character: 'portgas-d-ace',
    type: { en: 'Sworn brother', it: 'Fratello giurato' },
    summary: {
      en: 'Sabo shares his dream of going to sea with Ace and becomes his sworn brother.',
      it: 'Sabo condivide con Ace il sogno di prendere il mare e diventa suo fratello giurato.',
    },
  },
  saboLuffyReunion: {
    character: 'monkey-d-luffy',
    type: { en: 'Brother he reunites with', it: 'Fratello che ritrova' },
    summary: {
      en: 'Sabo reveals himself to Luffy in Dressrosa after years in which Luffy believed him dead.',
      it: 'Sabo si rivela a Rufy a Dressrosa, dopo anni in cui Rufy lo credeva morto.',
    },
  },
  saboKoala: {
    character: 'koala',
    type: { en: 'Revolutionary colleague', it: 'Compagna rivoluzionaria' },
    summary: {
      en: 'Koala works with Sabo in Dressrosa on their Revolutionary Army mission.',
      it: 'Koala collabora con Sabo a Dressrosa nella missione dell’Armata Rivoluzionaria.',
    },
  },
  saboAceFruit: {
    character: 'portgas-d-ace',
    type: {
      en: 'Brother whose power he inherits',
      it: 'Fratello di cui eredita il potere',
    },
    summary: {
      en: 'Sabo eats the Flame-Flame Fruit and inherits the power of his dead brother Ace.',
      it: 'Sabo mangia il Foco Foco ed eredita il potere del fratello Ace, ormai morto.',
    },
  },
  saboDragon: {
    character: 'monkey-d-dragon',
    type: { en: 'Rescuer and leader', it: 'Soccorritore e comandante' },
    summary: {
      en: 'Dragon saved Sabo after his boat was attacked, and Sabo later became a Revolutionary Army officer.',
      it: 'Dragon ha salvato Sabo dopo l’attacco alla sua barca e Sabo è poi diventato un ufficiale dell’Armata Rivoluzionaria.',
    },
  },
  saboKuma: {
    character: 'bartholomew-kuma',
    type: { en: 'Comrade he helps free', it: 'Compagno che aiuta a liberare' },
    summary: {
      en: 'Sabo and the revolutionary commanders rescue Kuma from slavery during the Reverie.',
      it: 'Sabo e i comandanti rivoluzionari liberano Kuma dalla schiavitù durante il Reverie.',
    },
  },
} satisfies Record<string, Relationship>

export const majorRelationships = {
  'trafalgar-law': [
    { episode: 392, chapter: 498, value: [links.lawBepo] },
    {
      episode: 399,
      chapter: 505,
      value: [links.lawBepo, links.lawLuffy, links.lawKid],
    },
    {
      episode: 489,
      chapter: 580,
      value: [links.lawBepo, links.lawPatient, links.lawKid, links.lawJinbe],
    },
    {
      episode: 594,
      chapter: 668,
      value: [links.lawAlly, links.lawBepo, links.lawKid, links.lawJinbe],
    },
    // Rosinante’s archive endpoint is chapter 768, after the death shown at 767.
    {
      episode: 706,
      chapter: 768,
      value: [
        links.lawRosinante,
        links.lawAlly,
        links.lawDoflamingo,
        links.lawBepo,
        links.lawKid,
      ],
    },
    {
      episode: 733,
      chapter: 790,
      value: [
        links.lawRosinante,
        links.lawAlly,
        links.lawDoflamingoDefeat,
        links.lawBepo,
        links.lawKid,
      ],
    },
    {
      episode: 1067,
      chapter: 1040,
      value: [
        links.lawRosinante,
        links.lawAlly,
        links.lawBepo,
        links.lawKidWin,
        links.lawDoflamingoDefeat,
      ],
    },
    {
      episode: 1085,
      chapter: 1057,
      value: [
        links.lawRosinante,
        links.lawLuffyFormer,
        links.lawBepo,
        links.lawKidWin,
        links.lawDoflamingoDefeat,
      ],
    },
    {
      episode: 1115,
      chapter: 1081,
      value: [
        links.lawBepoSave,
        links.lawTeach,
        links.lawRosinante,
        links.lawLuffyFormer,
        links.lawKidWin,
      ],
    },
  ],
  'eustass-kid': [
    { episode: 392, chapter: 498, value: [links.kidKiller, links.kidApoo] },
    {
      episode: 399,
      chapter: 505,
      value: [links.kidKiller, links.kidLuffy, links.kidLaw, links.kidApoo],
    },
    {
      episode: 603,
      chapter: 677,
      value: [
        links.kidKiller,
        links.kidLuffy,
        links.kidLaw,
        links.kidApooAlly,
        links.kidHawkins,
      ],
    },
    {
      episode: 942,
      chapter: 944,
      value: [
        links.kidKillerSMILE,
        links.kidLuffy,
        links.kidLaw,
        links.kidApooAlly,
        links.kidHawkins,
      ],
    },
    {
      episode: 955,
      chapter: 954,
      value: [
        links.kidKillerSMILE,
        links.kidKaido,
        links.kidApooBetray,
        links.kidLuffy,
        links.kidLaw,
      ],
    },
    {
      episode: 1067,
      chapter: 1040,
      value: [
        links.kidKillerSMILE,
        links.kidLawWin,
        links.kidBigMom,
        links.kidLuffy,
        links.kidKaido,
      ],
    },
    {
      episode: 1112,
      chapter: 1079,
      value: [
        links.kidShanks,
        links.kidKillerDefeat,
        links.kidLawWin,
        links.kidBigMom,
        links.kidLuffy,
      ],
    },
  ],
  'boa-hancock': [
    // The sisters’ archived manga endpoints wait until chapter 521.
    {
      episode: 412,
      chapter: 521,
      source: 'episode',
      value: [links.hancockSonia, links.hancockMari, links.hancockLuffyEnemy],
    },
    {
      episode: 415,
      chapter: 521,
      value: [links.hancockSonia, links.hancockMari, links.hancockLuffyTrust],
    },
    {
      episode: 417,
      chapter: 522,
      value: [
        links.hancockLuffyLove,
        links.hancockSonia,
        links.hancockMari,
        links.hancockNyon,
      ],
    },
    {
      episode: 1088,
      chapter: 1059,
      value: [
        links.hancockLuffyLove,
        links.hancockRayleigh,
        links.hancockSonia,
        links.hancockMari,
        links.hancockNyon,
      ],
    },
  ],
  'jinbe': [
    {
      episode: 430,
      chapter: 529,
      value: [links.jinbeAce, links.jinbeWhitebeard],
    },
    {
      episode: 443,
      chapter: 540,
      value: [
        links.jinbeLuffyAlly,
        links.jinbeAceRescue,
        links.jinbeWhitebeard,
      ],
    },
    {
      episode: 505,
      chapter: 590,
      value: [
        links.jinbeLuffyProtect,
        links.jinbeAceLost,
        links.jinbeWhitebeardLost,
      ],
    },
    {
      episode: 543,
      chapter: 623,
      value: [
        links.jinbeLuffyProtect,
        links.jinbeTiger,
        links.jinbeArlong,
        links.jinbeAceLost,
        links.jinbeWhitebeardLost,
      ],
    },
    {
      episode: 568,
      chapter: 648,
      value: [
        links.jinbeLuffyBlood,
        links.jinbeTiger,
        links.jinbeArlong,
        links.jinbeAceLost,
        links.jinbeWhitebeardLost,
      ],
    },
    {
      episode: 833,
      chapter: 863,
      value: [
        links.jinbeLuffyCaptain,
        links.jinbeBigMom,
        links.jinbeTiger,
        links.jinbeArlong,
        links.jinbeAceLost,
      ],
    },
    {
      episode: 980,
      chapter: 976,
      value: [
        links.jinbeLuffyHelm,
        links.jinbeBigMom,
        links.jinbeTiger,
        links.jinbeArlong,
        links.jinbeAceLost,
      ],
    },
  ],
  'silvers-rayleigh': [
    { episode: 398, chapter: 504, value: [links.rayleighCamie] },
    {
      episode: 400,
      chapter: 506,
      value: [
        links.rayleighRoger,
        links.rayleighLuffy,
        links.rayleighShakky,
        links.rayleighHatchan,
        links.rayleighCamie,
      ],
    },
    {
      episode: 516,
      chapter: 597,
      value: [
        links.rayleighRoger,
        links.rayleighLuffyPupil,
        links.rayleighShakky,
        links.rayleighHatchan,
        links.rayleighCamie,
      ],
    },
    {
      episode: 1088,
      chapter: 1059,
      value: [
        links.rayleighRoger,
        links.rayleighLuffyPupil,
        links.rayleighShakky,
        links.rayleighHancock,
        links.rayleighHatchan,
      ],
    },
    // God Valley’s rescue is manga-only at the archived anime boundary.
    {
      episode: 1180,
      chapter: 1161,
      source: 'chapter',
      value: [
        links.rayleighShakkySaved,
        links.rayleighRoger,
        links.rayleighLuffyPupil,
        links.rayleighHancock,
        links.rayleighHatchan,
      ],
    },
  ],
  'scratchmen-apoo': [
    { episode: 392, chapter: 498, value: [links.apooKid] },
    { episode: 402, chapter: 510, value: [links.apooKid, links.apooBorsalino] },
    {
      episode: 603,
      chapter: 677,
      value: [links.apooKidAlly, links.apooHawkins, links.apooBorsalino],
    },
    {
      episode: 955,
      chapter: 954,
      value: [
        links.apooKaido,
        links.apooKidBetrayed,
        links.apooHawkinsBetrayed,
        links.apooBorsalino,
      ],
    },
    {
      episode: 1007,
      chapter: 994,
      value: [
        links.apooQueen,
        links.apooKaido,
        links.apooKidBetrayed,
        links.apooHawkinsBetrayed,
      ],
    },
    {
      episode: 1059,
      chapter: 1032,
      value: [
        links.apooDrake,
        links.apooQueen,
        links.apooKaido,
        links.apooKidBetrayed,
      ],
    },
  ],
  'basil-hawkins': [
    { episode: 402, chapter: 510, value: [links.hawkinsBorsalino] },
    {
      episode: 603,
      chapter: 677,
      value: [links.hawkinsKid, links.hawkinsApoo, links.hawkinsBorsalino],
    },
    {
      episode: 955,
      chapter: 954,
      value: [
        links.hawkinsKaido,
        links.hawkinsApooBetray,
        links.hawkinsKidFormer,
        links.hawkinsBorsalino,
      ],
    },
    {
      episode: 1054,
      chapter: 1029,
      value: [
        links.hawkinsKiller,
        links.hawkinsKidHostage,
        links.hawkinsKaido,
        links.hawkinsApooBetray,
      ],
    },
    {
      episode: 1079,
      chapter: 1052,
      value: [
        links.hawkinsDrake,
        links.hawkinsKiller,
        links.hawkinsKidHostage,
        links.hawkinsKaido,
        links.hawkinsApooBetray,
      ],
    },
  ],
  'x-drake': [
    {
      episode: 392,
      chapter: 498,
      value: [links.drakeKiller, links.drakeUrouge],
    },
    {
      episode: 957,
      chapter: 956,
      value: [links.drakeKoby, links.drakeKiller, links.drakeUrouge],
    },
    {
      episode: 1001,
      chapter: 990,
      value: [
        links.drakeLuffy,
        links.drakeKoby,
        links.drakeKiller,
        links.drakeUrouge,
      ],
    },
    {
      episode: 1059,
      chapter: 1032,
      value: [
        links.drakeLuffy,
        links.drakeKoby,
        links.drakeApoo,
        links.drakeKiller,
        links.drakeUrouge,
      ],
    },
  ],
  'urouge': [
    {
      episode: 392,
      chapter: 498,
      value: [links.urougeKiller, links.urougeDrake],
    },
    {
      episode: 402,
      chapter: 510,
      value: [links.urougeKiller, links.urougeDrake, links.urougeBorsalino],
    },
    // Snack is not an archived character; do not invent a target for his defeat.
    {
      episode: 798,
      chapter: 837,
      value: [
        links.urougeCracker,
        links.urougeKiller,
        links.urougeDrake,
        links.urougeBorsalino,
      ],
    },
  ],
  'capone-bege': [
    { episode: 392, chapter: 498, value: [links.begeBonney] },
    {
      episode: 764,
      chapter: 813,
      value: [links.begeSanji, links.begePekoms, links.begeBonney],
    },
    {
      episode: 795,
      chapter: 834,
      value: [
        links.begeChiffonEarly,
        links.begeBigMomLeader,
        links.begeSanji,
        links.begePekoms,
      ],
    },
    {
      episode: 827,
      chapter: 858,
      value: [
        links.begeChiffon,
        links.begeBigMom,
        links.begeSanji,
        links.begePekoms,
      ],
    },
    {
      episode: 828,
      chapter: 859,
      value: [
        links.begeChiffon,
        links.begeLuffy,
        links.begeBigMom,
        links.begeSanji,
        links.begePekoms,
      ],
    },
    {
      episode: 843,
      chapter: 872,
      value: [
        links.begeChiffon,
        links.begeLuffyFormer,
        links.begeBigMomEnemy,
        links.begeSanji,
        links.begePekoms,
      ],
    },
    {
      episode: 861,
      chapter: 887,
      value: [
        links.begeChiffonRescue,
        links.begeLuffyFormer,
        links.begeBigMomEnemy,
        links.begeSanjiAlly,
        links.begePekoms,
      ],
    },
  ],
  'jewelry-bonney': [
    { episode: 393, chapter: 499, value: [links.bonneyZoro] },
    {
      episode: 513,
      chapter: 595,
      value: [links.bonneyTeach, links.bonneyZoro],
    },
    {
      episode: 1090,
      chapter: 1061,
      value: [links.bonneyLuffy, links.bonneyTeach, links.bonneyZoro],
    },
    {
      episode: 1094,
      chapter: 1064,
      value: [
        links.bonneyKuma,
        links.bonneyLuffy,
        links.bonneyTeach,
        links.bonneyZoro,
      ],
    },
    {
      episode: 1097,
      chapter: 1067,
      value: [
        links.bonneyKuma,
        links.bonneyVegapunkEnemy,
        links.bonneyLuffy,
        links.bonneyTeach,
        links.bonneyZoro,
      ],
    },
    {
      episode: 1132,
      chapter: 1098,
      value: [
        links.bonneyKumaAdopt,
        links.bonneyGinny,
        links.bonneyVegapunkEnemy,
        links.bonneyLuffy,
        links.bonneyTeach,
      ],
    },
    {
      episode: 1134,
      chapter: 1100,
      value: [
        links.bonneyKumaAdopt,
        links.bonneyGinny,
        links.bonneyVegapunkDoctor,
        links.bonneyLuffy,
        links.bonneyTeach,
      ],
    },
    {
      episode: 1137,
      chapter: 1103,
      value: [
        links.bonneyKumaAdopt,
        links.bonneyGinny,
        links.bonneyVegapunkDoctor,
        links.bonneySaturn,
        links.bonneyLuffy,
      ],
    },
    {
      episode: 1138,
      chapter: 1104,
      value: [
        links.bonneyKumaRescue,
        links.bonneyGinny,
        links.bonneyVegapunkDoctor,
        links.bonneySaturn,
        links.bonneyLuffy,
      ],
    },
    {
      episode: 1140,
      chapter: 1106,
      value: [
        links.bonneyKumaRescue,
        links.bonneyLuffyNika,
        links.bonneyGinny,
        links.bonneyVegapunkDoctor,
        links.bonneySaturn,
      ],
    },
    {
      episode: 1152,
      chapter: 1121,
      value: [
        links.bonneyKumaRescue,
        links.bonneyLuffyFight,
        links.bonneyGinny,
        links.bonneyVegapunkDoctor,
        links.bonneySaturn,
      ],
    },
  ],
  'borsalino': [
    { episode: 402, chapter: 510, value: [links.borsalinoHawkins] },
    {
      episode: 404,
      chapter: 511,
      value: [
        links.borsalinoSentomaru,
        links.borsalinoRayleigh,
        links.borsalinoHawkins,
      ],
    },
    {
      episode: 1125,
      chapter: 1091,
      value: [
        links.borsalinoSentomaruEnemy,
        links.borsalinoRayleigh,
        links.borsalinoHawkins,
      ],
    },
    {
      episode: 1126,
      chapter: 1092,
      value: [
        links.borsalinoVegapunk,
        links.borsalinoSentomaruEnemy,
        links.borsalinoBonney,
        links.borsalinoLuffy,
        links.borsalinoRayleigh,
      ],
    },
    {
      episode: 1142,
      chapter: 1108,
      value: [
        links.borsalinoVegapunkDead,
        links.borsalinoSentomaruEnemy,
        links.borsalinoBonney,
        links.borsalinoLuffy,
        links.borsalinoRayleigh,
      ],
    },
    {
      episode: 1154,
      chapter: 1124,
      value: [
        links.borsalinoVegapunkDead,
        links.borsalinoSentomaruEnemy,
        links.borsalinoBonney,
        links.borsalinoSakazuki,
        links.borsalinoLuffy,
      ],
    },
  ],
  'sentomaru': [
    {
      episode: 403,
      chapter: 511,
      value: [links.sentomaruBorsalino, links.sentomaruLuffy],
    },
    {
      episode: 1100,
      chapter: 1069,
      value: [
        links.sentomaruVegapunk,
        links.sentomaruLuffy,
        links.sentomaruBorsalino,
        links.sentomaruLucci,
      ],
    },
    {
      episode: 1101,
      chapter: 1070,
      value: [
        links.sentomaruVegapunk,
        links.sentomaruLuffyAlly,
        links.sentomaruBorsalino,
        links.sentomaruLucci,
      ],
    },
    {
      episode: 1125,
      chapter: 1091,
      value: [
        links.sentomaruVegapunk,
        links.sentomaruBorsalinoEnemy,
        links.sentomaruBonney,
        links.sentomaruLuffyAlly,
        links.sentomaruLucci,
      ],
    },
    {
      episode: 1154,
      chapter: 1124,
      value: [
        links.sentomaruVegapunkLost,
        links.sentomaruBorsalinoEnemy,
        links.sentomaruBonney,
        links.sentomaruLuffyAlly,
        links.sentomaruLucci,
      ],
    },
  ],
  'shiki': [
    // The shared selection waits for Shiki’s deliberately late archived manga endpoint. Film-only relationships are excluded.
    {
      episode: 962,
      chapter: 962,
      value: [links.shikiWhitebeard, links.shikiRocks],
    },
    // Shiki’s stated hope is directed; Shakky’s feelings are not inferred.
    {
      episode: 1180,
      chapter: 1160,
      source: 'chapter',
      value: [links.shikiShakky, links.shikiWhitebeard, links.shikiRocks],
    },
  ],
  'emporio-ivankov': [
    // The manga selection waits for Ivankov’s archived chapter-540 endpoint.
    { episode: 439, chapter: 540, value: [links.ivaLuffy, links.ivaBon] },
    // Anime reaches Dragon’s connection before Ivankov’s archived manga endpoint.
    {
      episode: 441,
      chapter: 540,
      source: 'episode',
      value: [links.ivaLuffy, links.ivaDragon, links.ivaBon],
    },
    {
      episode: 442,
      chapter: 541,
      value: [links.ivaLuffy, links.ivaDragon, links.ivaInazuma, links.ivaBon],
    },
    {
      episode: 469,
      chapter: 560,
      value: [
        links.ivaLuffy,
        links.ivaDragon,
        links.ivaInazuma,
        links.ivaKuma,
        links.ivaBon,
      ],
    },
    {
      episode: 1130,
      chapter: 1096,
      value: [
        links.ivaKumaChild,
        links.ivaGinny,
        links.ivaDragon,
        links.ivaLuffy,
        links.ivaInazuma,
      ],
    },
  ],
  'shiryu': [
    { episode: 445, chapter: 543, value: [links.shiryuMagellan] },
    {
      episode: 452,
      chapter: 549,
      value: [links.shiryuTeach, links.shiryuMagellan],
    },
    {
      episode: 1121,
      chapter: 1087,
      value: [links.shiryuTeach, links.shiryuGarp, links.shiryuMagellan],
    },
  ],
  'sakazuki': [
    // The manga selection waits for Sakazuki’s archived chapter-556 endpoint.
    { episode: 463, chapter: 556, value: [links.sakazukiBorsalino] },
    {
      episode: 483,
      chapter: 574,
      value: [links.sakazukiAce, links.sakazukiBorsalino],
    },
    {
      episode: 484,
      chapter: 575,
      value: [
        links.sakazukiAce,
        links.sakazukiWhitebeard,
        links.sakazukiBorsalino,
      ],
    },
    {
      episode: 486,
      chapter: 578,
      value: [
        links.sakazukiAce,
        links.sakazukiLuffy,
        links.sakazukiWhitebeard,
        links.sakazukiBorsalino,
      ],
    },
    {
      episode: 570,
      chapter: 650,
      value: [
        links.sakazukiKuzan,
        links.sakazukiAce,
        links.sakazukiLuffy,
        links.sakazukiBorsalinoSubordinate,
        links.sakazukiWhitebeard,
      ],
    },
    {
      episode: 736,
      chapter: 793,
      value: [
        links.sakazukiKuzan,
        links.sakazukiIssho,
        links.sakazukiAce,
        links.sakazukiLuffy,
        links.sakazukiBorsalinoSubordinate,
      ],
    },
    {
      episode: 1154,
      chapter: 1124,
      value: [
        links.sakazukiBorsalinoGrief,
        links.sakazukiKuzan,
        links.sakazukiIssho,
        links.sakazukiAce,
        links.sakazukiLuffy,
      ],
    },
  ],
  'sabo': [
    { episode: 497, chapter: 585, value: [links.saboLuffy, links.saboAce] },
    {
      episode: 663,
      chapter: 731,
      value: [links.saboLuffyReunion, links.saboAce, links.saboKoala],
    },
    {
      episode: 678,
      chapter: 744,
      value: [links.saboLuffyReunion, links.saboAceFruit, links.saboKoala],
    },
    {
      episode: 738,
      chapter: 794,
      value: [
        links.saboLuffyReunion,
        links.saboAceFruit,
        links.saboDragon,
        links.saboKoala,
      ],
    },
    {
      episode: 1118,
      chapter: 1084,
      value: [
        links.saboLuffyReunion,
        links.saboAceFruit,
        links.saboDragon,
        links.saboKoala,
        links.saboKuma,
      ],
    },
  ],
} satisfies Record<string, Timeline<Relationship[]>>
