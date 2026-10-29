import type { Relationship, Timeline } from '~/data/types'

/** Facts and threshold revisions: docs/content-provenance/relationships.json. */
const links = {
  iscatLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Rider who subdues it', it: 'Cavaliere che lo sottomette' },
    summary: {
      en: 'Luffy helps defeat Iscat, then forces it to carry him and his companions.',
      it: 'Rufy contribuisce a sconfiggere Iskat, poi lo costringe a trasportare lui e i suoi compagni.',
    },
  },
  iscatUsopp: {
    character: 'usopp',
    type: { en: 'Prey', it: 'Preda' },
    summary: {
      en: 'Iscat catches Usopp in its mouth at Bigstein Castle.',
      it: 'Iskat afferra Usop con la bocca al Castello di Bigstein.',
    },
  },
  iscatNami: {
    character: 'nami',
    type: { en: 'Opponent', it: 'Avversaria' },
    summary: {
      en: 'Nami attacks Iscat with lightning while trying to rescue Usopp.',
      it: 'Nami colpisce Iskat con un fulmine mentre cerca di salvare Usop.',
    },
  },
  iscatRoad: {
    character: 'road',
    type: { en: 'Owner', it: 'Padrone' },
    summary: {
      en: 'Road keeps Iscat among the giant animals in his diorama.',
      it: 'Lord tiene Iskat tra gli animali giganti del suo plastico.',
    },
  },
  roadHajrudin: {
    character: 'hajrudin',
    type: { en: 'Captain he defies', it: 'Capitano a cui disobbedisce' },
    summary: {
      en: 'Road captures the Straw Hats despite Hajrudin having pledged his crew to Luffy.',
      it: 'Lord cattura i Cappello di Paglia nonostante Hajrudin abbia messo la sua ciurma al servizio di Rufy.',
    },
  },
  roadHajrudinFriend: {
    character: 'hajrudin',
    type: {
      en: 'Captain and childhood friend',
      it: 'Capitano e amico d’infanzia',
    },
    summary: {
      en: 'Hajrudin values Road’s maps, and Road wants to help him achieve his dream.',
      it: 'Hajrudin apprezza le mappe di Lord e Lord vuole aiutarlo a realizzare il suo sogno.',
    },
  },
  roadNami: {
    character: 'nami',
    type: { en: 'Captive', it: 'Prigioniera' },
    summary: {
      en: 'Road holds Nami in his diorama and pursues her when she escapes.',
      it: 'Lord tiene Nami prigioniera nel suo plastico e la insegue quando fugge.',
    },
  },
  roadNamiServant: {
    character: 'nami',
    type: {
      en: 'Woman he offers to serve',
      it: 'Donna che si offre di servire',
    },
    summary: {
      en: 'Road offers himself as Nami’s servant, and she accepts him as her third.',
      it: 'Lord si offre come servitore di Nami e lei lo accetta come terzo servitore.',
    },
  },
  roadGerd: {
    character: 'gerd',
    type: { en: 'Crewmate who punishes him', it: 'Compagna che lo punisce' },
    summary: {
      en: 'Gerd attacks Road for mistreating the Straw Hats.',
      it: 'Gerd colpisce Lord per il trattamento riservato ai Cappello di Paglia.',
    },
  },
  roadGoldberg: {
    character: 'goldberg',
    type: { en: 'Crewmate who punishes him', it: 'Compagno che lo punisce' },
    summary: {
      en: 'Goldberg joins Gerd in attacking Road after the Straw Hats escape his diorama.',
      it: 'Goldberg si unisce a Gerd nel colpire Lord dopo la fuga dei Cappello di Paglia dal plastico.',
    },
  },
  goldbergGerd: {
    character: 'gerd',
    type: { en: 'Trusted crewmate', it: 'Compagna fidata' },
    summary: {
      en: 'Gerd shares her distrust of Road with Goldberg as they search for intruders.',
      it: 'Gerd confida a Goldberg la sua diffidenza verso Lord mentre cercano gli intrusi.',
    },
  },
  goldbergRoad: {
    character: 'road',
    type: { en: 'Navigator he values', it: 'Navigatore che apprezza' },
    summary: {
      en: 'Goldberg defends Road’s place in the crew because of his navigation skills.',
      it: 'Goldberg difende il posto di Lord nella ciurma per le sue capacità di navigatore.',
    },
  },
  goldbergRoadPunished: {
    character: 'road',
    type: { en: 'Crewmate he punishes', it: 'Compagno che punisce' },
    summary: {
      en: 'Goldberg attacks Road alongside Gerd for imprisoning the Straw Hats.',
      it: 'Goldberg attacca Lord insieme a Gerd per aver imprigionato i Cappello di Paglia.',
    },
  },
  angeSaul: {
    character: 'jaguar-d-saul',
    type: { en: 'Teacher she assists', it: 'Insegnante che assiste' },
    summary: {
      en: 'Ange assists Saul at the Walrus School and helps arrange his reunion with Robin.',
      it: 'Ange assiste Sauro alla Scuola Walrus e aiuta a organizzare il suo incontro con Robin.',
    },
  },
  angeKiba: {
    character: 'kiba',
    type: { en: 'Principal', it: 'Preside' },
    summary: {
      en: 'Ange reports the spread of the nightmare creatures to Kiba.',
      it: 'Ange riferisce a Kiba che le creature degli incubi stanno attaccando tutta l’isola.',
    },
  },
  angeKillingham: {
    character: 'rimoshifu-killingham',
    type: { en: 'Captor', it: 'Carceriere' },
    summary: {
      en: 'Killingham immobilizes Ange at the school with sleep paralysis.',
      it: 'Killingham immobilizza Ange a scuola con la paralisi del sonno.',
    },
  },
  angeKillinghamBurn: {
    character: 'rimoshifu-killingham',
    type: {
      en: 'Captor who burns the library',
      it: 'Carceriere che brucia la biblioteca',
    },
    summary: {
      en: 'After Ange is forced to burn the school, Killingham sets fire to the library himself.',
      it: 'Dopo che Ange è costretta a incendiare la scuola, Killingham dà fuoco alla biblioteca di persona.',
    },
  },
  stansenLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Rescuer', it: 'Salvatore' },
    summary: {
      en: 'Stansen recognizes Luffy from the auction house and promises never to forget being freed.',
      it: 'Stansen riconosce Rufy dalla Casa d’Aste e promette di non dimenticare la libertà ricevuta.',
    },
  },
  stansenRayleigh: {
    character: 'silvers-rayleigh',
    type: { en: 'Rescuer', it: 'Salvatore' },
    summary: {
      en: 'Rayleigh helps Stansen escape the auction house by removing his explosive collar.',
      it: 'Rayleigh aiuta Stansen a fuggire dalla Casa d’Aste togliendogli il collare esplosivo.',
    },
  },
  stansenHajrudin: {
    character: 'hajrudin',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Stansen hunts a moose with Hajrudin to prepare a feast for the Straw Hats.',
      it: 'Stansen caccia un alce con Hajrudin per preparare un banchetto ai Cappello di Paglia.',
    },
  },
  cerberusShamrock: {
    character: 'figarland-shamrock',
    type: { en: 'Wielder', it: 'Portatore' },
    summary: {
      en: 'Cerberus transforms from Shamrock’s sword and attacks at his command.',
      it: 'Cerbero si trasforma dalla spada di Shamrock e attacca al suo comando.',
    },
  },
  cerberusLoki: {
    character: 'loki',
    type: { en: 'Target', it: 'Bersaglio' },
    summary: {
      en: 'Cerberus launches its three heads and stabs the chained Loki.',
      it: 'Cerbero lancia le sue tre teste e trafigge Loki incatenato.',
    },
  },
  ragnirLoki: {
    character: 'loki',
    type: { en: 'Wielder', it: 'Portatore' },
    summary: {
      en: 'Loki grips Ragnir, the huge warhammer he carries while chained.',
      it: 'Loki impugna Ragnir, l’enorme martello da guerra che tiene con sé mentre è incatenato.',
    },
  },
  kibaSaul: {
    character: 'jaguar-d-saul',
    type: { en: 'Fellow defender', it: 'Compagno nella difesa' },
    summary: {
      en: 'Kiba strikes the serpent threatening the students, allowing Saul to finish it off.',
      it: 'Kiba colpisce il serpente che minaccia gli alunni e permette a Sauro di finirlo.',
    },
  },
  kibaAnge: {
    character: 'ange',
    type: { en: 'Teacher who informs him', it: 'Insegnante che lo informa' },
    summary: {
      en: 'Ange reports the attacks across Elbaph, and Kiba calls for the culprit to be found.',
      it: 'Ange riferisce degli attacchi su Elbaf e Kiba chiede di trovare il responsabile.',
    },
  },
  kibaKillingham: {
    character: 'rimoshifu-killingham',
    type: { en: 'Attacker', it: 'Aggressore' },
    summary: {
      en: 'Killingham slams Kiba into the ground and leaves him unconscious.',
      it: 'Killingham scaraventa Kiba a terra e lo lascia privo di sensi.',
    },
  },
  wolfSaul: {
    character: 'jaguar-d-saul',
    type: { en: 'Teacher he warns', it: 'Insegnante che avverte' },
    summary: {
      en: 'Badly injured, Wolf warns Saul not to touch the sleepwalking children.',
      it: 'Gravemente ferito, Wolf avverte Sauro di non toccare i bambini che camminano nel sonno.',
    },
  },
  lokiLola: {
    character: 'lola',
    type: {
      en: 'Woman who rejects his proposal',
      it: 'Donna che rifiuta la sua proposta',
    },
    summary: {
      en: 'Loki’s marriage proposal to Lola was rejected when she left to choose her own husband.',
      it: 'La proposta di matrimonio di Loki a Laura viene rifiutata quando lei parte per scegliere da sola un marito.',
    },
  },
  lokiLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Man he bargains with', it: 'Uomo con cui tratta' },
    summary: {
      en: 'Loki offers Luffy information about Shanks in exchange for his freedom.',
      it: 'Loki offre a Rufy informazioni su Shanks in cambio della libertà.',
    },
  },
  lokiLuffyInvite: {
    character: 'monkey-d-luffy',
    type: {
      en: 'Captain whose offer he rejects',
      it: 'Capitano di cui rifiuta l’offerta',
    },
    summary: {
      en: 'Loki rejects Luffy’s invitation to join his crew.',
      it: 'Loki rifiuta l’invito di Rufy a unirsi alla sua ciurma.',
    },
  },
  lokiShanks: {
    character: 'shanks',
    type: { en: 'Pirate he insults', it: 'Pirata che insulta' },
    summary: {
      en: 'Loki calls Shanks a coward in front of Luffy.',
      it: 'Loki chiama Shanks un codardo davanti a Rufy.',
    },
  },
  lokiShanksCaptor: {
    character: 'shanks',
    type: { en: 'Captor he resents', it: 'Carceriere che detesta' },
    summary: {
      en: 'Loki blames Shanks for his capture and insults him in front of Luffy.',
      it: 'Loki attribuisce a Shanks la sua cattura e lo insulta davanti a Rufy.',
    },
  },
  lokiHarald: {
    character: 'harald',
    type: {
      en: 'Father he is accused of killing',
      it: 'Padre che è accusato di aver ucciso',
    },
    summary: {
      en: 'Elbaph accuses Loki of killing his father Harald to obtain the royal family’s devil fruit.',
      it: 'Elbaf accusa Loki di aver ucciso suo padre Harald per ottenere il frutto del diavolo della famiglia reale.',
    },
  },
  lokiHaraldDenial: {
    character: 'harald',
    type: {
      en: 'Father whose death he disputes',
      it: 'Padre della cui morte contesta l’accusa',
    },
    summary: {
      en: 'Loki rejects Hajrudin’s account of Harald’s death and denies wanting to kill him.',
      it: 'Loki contesta il racconto di Hajrudin sulla morte di Harald e nega di aver voluto ucciderlo.',
    },
  },
  lokiHaraldChild: {
    character: 'harald',
    type: { en: 'Father he distrusts', it: 'Padre di cui diffida' },
    summary: {
      en: 'Harald is proud of his son, but his long absences leave the young Loki distrustful of his affection.',
      it: 'Harald è orgoglioso del figlio, ma le sue lunghe assenze portano il giovane Loki a diffidare del suo affetto.',
    },
  },
  lokiHaraldRescue: {
    character: 'harald',
    type: {
      en: 'Father who comes to his aid',
      it: 'Padre che corre in suo aiuto',
    },
    summary: {
      en: 'Loki doubts Harald would return for him and is surprised when his father comes after hearing he is injured.',
      it: 'Loki dubita che Harald torni per lui e si sorprende quando suo padre arriva dopo aver saputo che è ferito.',
    },
  },
  lokiHajrudin: {
    character: 'hajrudin',
    type: { en: 'Hostile half-brother', it: 'Fratellastro ostile' },
    summary: {
      en: 'Hajrudin resents Loki for the death of their father Harald.',
      it: 'Hajrudin nutre rancore verso Loki per la morte del loro padre Harald.',
    },
  },
  lokiHajrudinChild: {
    character: 'hajrudin',
    type: { en: 'Half-brother he bullies', it: 'Fratellastro che maltratta' },
    summary: {
      en: 'As a child, Loki bullies Hajrudin and mocks his defence of their father’s reforms.',
      it: 'Da bambino Loki maltratta Hajrudin e deride la sua difesa delle riforme del padre.',
    },
  },
  lokiRocks: {
    character: 'rocks-d-xebec',
    type: {
      en: 'Captain he wanted to follow',
      it: 'Capitano che voleva seguire',
    },
    summary: {
      en: 'Loki recalls repeatedly asking Rocks to let him join his crew.',
      it: 'Loki ricorda di aver chiesto più volte a Rocks di poter entrare nella sua ciurma.',
    },
  },
  lokiRocksChild: {
    character: 'rocks-d-xebec',
    type: { en: 'Pirate he admires', it: 'Pirata che ammira' },
    summary: {
      en: 'After losing to Rocks, the young Loki is fascinated by his ambition to rule the world.',
      it: 'Dopo aver perso contro Rocks, il giovane Loki resta affascinato dalla sua ambizione di dominare il mondo.',
    },
  },
  lokiRocksDead: {
    character: 'rocks-d-xebec',
    type: {
      en: 'Pirate whose death he mourns',
      it: 'Pirata di cui piange la morte',
    },
    summary: {
      en: 'News of Rocks’ death devastates Loki after years of hoping to join his crew.',
      it: 'La notizia della morte di Rocks sconvolge Loki dopo anni passati a sperare di entrare nella sua ciurma.',
    },
  },
  haraldLoki: {
    character: 'loki',
    type: {
      en: 'Son accused of killing him',
      it: 'Figlio accusato di averlo ucciso',
    },
    summary: {
      en: 'The people of Elbaph blame Loki for the death of his father Harald.',
      it: 'Gli abitanti di Elbaf attribuiscono a Loki la morte di suo padre Harald.',
    },
  },
  haraldHajrudin: {
    character: 'hajrudin',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'Hajrudin and Loki are Harald’s sons by different mothers.',
      it: 'Hajrudin e Loki sono figli di Harald e di madri diverse.',
    },
  },
  haraldLokiChild: {
    character: 'loki',
    type: { en: 'Younger son', it: 'Figlio minore' },
    summary: {
      en: 'Harald proudly welcomes the young Loki, although his voyages often keep him away.',
      it: 'Harald accoglie con orgoglio il giovane Loki, anche se i suoi viaggi lo tengono spesso lontano.',
    },
  },
  haraldHajrudinChild: {
    character: 'hajrudin',
    type: { en: 'Son he protects', it: 'Figlio che protegge' },
    summary: {
      en: 'Harald defends Hajrudin from villagers who blame his family for Elbaph’s misfortunes.',
      it: 'Harald difende Hajrudin dagli abitanti che accusano la sua famiglia delle sventure di Elbaf.',
    },
  },
  haraldJarul: {
    character: 'jarul',
    type: { en: 'Elder he consults', it: 'Anziano che consulta' },
    summary: {
      en: 'Jarul discusses the giants’ lost history and the obstacles to Harald’s diplomacy.',
      it: 'Jarul discute con Harald della storia perduta dei giganti e degli ostacoli alla sua diplomazia.',
    },
  },
  haraldRocks: {
    character: 'rocks-d-xebec',
    type: {
      en: 'Pirate he refuses to join',
      it: 'Pirata a cui rifiuta di unirsi',
    },
    summary: {
      en: 'Rocks helps Harald escape Mary Geoise, but Harald refuses to join his crew.',
      it: 'Rocks aiuta Harald a fuggire da Marijoa, ma Harald rifiuta di unirsi alla sua ciurma.',
    },
  },
  haraldRocksClash: {
    character: 'rocks-d-xebec',
    type: { en: 'Friend he fights', it: 'Amico che affronta' },
    summary: {
      en: 'Harald and Rocks fight over Harald’s decision to work for the World Government, ending their friendship.',
      it: 'Harald e Rocks si scontrano per la decisione di Harald di lavorare per il Governo Mondiale e mettono fine alla loro amicizia.',
    },
  },
  haraldRocksRegret: {
    character: 'rocks-d-xebec',
    type: {
      en: 'Friend he regrets abandoning',
      it: 'Amico che rimpiange di aver abbandonato',
    },
    summary: {
      en: 'Harald bitterly regrets abandoning Rocks to pursue an alliance with the Government.',
      it: 'Harald rimpiange di aver abbandonato Rocks per cercare un’alleanza con il Governo.',
    },
  },
  haraldLokiRequest: {
    character: 'loki',
    type: {
      en: 'Son he asks to cooperate',
      it: 'Figlio a cui chiede di collaborare',
    },
    summary: {
      en: 'Before leaving Elbaph, Harald asks Loki to work with Hajrudin for their homeland.',
      it: 'Prima di lasciare Elbaf, Harald chiede a Loki di collaborare con Hajrudin per la loro patria.',
    },
  },
  haraldHajrudinRequest: {
    character: 'hajrudin',
    type: {
      en: 'Son he asks to cooperate',
      it: 'Figlio a cui chiede di collaborare',
    },
    summary: {
      en: 'Before leaving Elbaph, Harald asks Hajrudin to work with Loki for their homeland.',
      it: 'Prima di lasciare Elbaf, Harald chiede a Hajrudin di collaborare con Loki per la loro patria.',
    },
  },
  haraldSaul: {
    character: 'jaguar-d-saul',
    type: { en: 'Teacher he recruits', it: 'Insegnante che recluta' },
    summary: {
      en: 'Harald asks Saul to establish a school on Elbaph.',
      it: 'Harald chiede a Sauro di fondare una scuola su Elbaf.',
    },
  },
  ripleyLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Visitor she guides', it: 'Visitatore che accompagna' },
    summary: {
      en: 'Ripley explains the school and the late king’s reforms to Luffy.',
      it: 'Ripley spiega a Rufy la scuola e le riforme del defunto re.',
    },
  },
  ripleyColon: {
    character: 'colon',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'Ripley is Colon’s mother and supports his wish to become a warrior.',
      it: 'Ripley è la madre di Collon e sostiene il suo desiderio di diventare un guerriero.',
    },
  },
  ripleyFranky: {
    character: 'franky',
    type: { en: 'Visitor she guides', it: 'Visitatore che accompagna' },
    summary: {
      en: 'Ripley shows Franky around the giant Adam tree.',
      it: 'Ripley accompagna Franky alla scoperta del gigantesco albero Adam.',
    },
  },
  ripleyGaban: {
    character: 'scopper-gaban',
    type: { en: 'Partner', it: 'Compagno' },
    summary: {
      en: 'Ripley and Gaban are a couple and Colon’s parents.',
      it: 'Ripley e Gabin sono una coppia e i genitori di Collon.',
    },
  },
  colonRipley: {
    character: 'ripley',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'Colon is Ripley’s son and shares her interest in the giants’ warrior traditions.',
      it: 'Collon è il figlio di Ripley e condivide il suo interesse per le tradizioni guerriere dei giganti.',
    },
  },
  colonLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Pirate he admires', it: 'Pirata che ammira' },
    summary: {
      en: 'Colon attacks Luffy to test him, then is impressed by his strength.',
      it: 'Collon attacca Rufy per metterlo alla prova, poi resta colpito dalla sua forza.',
    },
  },
  colonGaban: {
    character: 'scopper-gaban',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Colon is Gaban’s son and admires his father’s strength.',
      it: 'Collon è il figlio di Gabin e ammira la forza di suo padre.',
    },
  },
  colonGabanSacrifice: {
    character: 'scopper-gaban',
    type: {
      en: 'Father who surrenders for him',
      it: 'Padre che si arrende per lui',
    },
    summary: {
      en: 'Gaban stops fighting to protect Colon when Gunko takes him hostage.',
      it: 'Gabin smette di combattere per proteggere Collon quando Gunko lo prende in ostaggio.',
    },
  },
  colonGunko: {
    character: 'manmayer-gunko',
    type: { en: 'Captor', it: 'Carceriera' },
    summary: {
      en: 'Gunko holds Colon hostage to force Gaban to surrender.',
      it: 'Gunko tiene Collon in ostaggio per costringere Gabin ad arrendersi.',
    },
  },
  gabanRipley: {
    character: 'ripley',
    type: { en: 'Partner', it: 'Compagna' },
    summary: {
      en: 'Gaban lives on Elbaph with Ripley, his partner and Colon’s mother.',
      it: 'Gabin vive su Elbaf con Ripley, la sua compagna e madre di Collon.',
    },
  },
  gabanColon: {
    character: 'colon',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'Colon is Gaban’s son with Ripley.',
      it: 'Collon è il figlio di Gabin e Ripley.',
    },
  },
  gabanColonSacrifice: {
    character: 'colon',
    type: { en: 'Son he protects', it: 'Figlio che protegge' },
    summary: {
      en: 'Gaban lays down his weapons to protect Colon, allowing Gunko to strike him.',
      it: 'Gabin depone le armi per proteggere Collon e permette a Gunko di colpirlo.',
    },
  },
  gabanRoger: {
    character: 'gold-roger',
    type: { en: 'Former captain', it: 'Ex capitano' },
    summary: {
      en: 'Gaban sailed with Roger and was known as the Pirate King’s Left Hand.',
      it: 'Gabin navigava con Roger ed era conosciuto come la Mano Sinistra del Re dei Pirati.',
    },
  },
  gabanRayleigh: {
    character: 'silvers-rayleigh',
    type: { en: 'Former crewmate', it: 'Ex compagno di ciurma' },
    summary: {
      en: 'Gaban and Rayleigh were two of Roger’s strongest companions.',
      it: 'Gabin e Rayleigh erano due dei compagni più forti di Roger.',
    },
  },
  gabanLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Challenger', it: 'Sfidante' },
    summary: {
      en: 'Gaban challenges Luffy to take the key to Loki’s chains from him.',
      it: 'Gabin sfida Rufy a sottrargli la chiave delle catene di Loki.',
    },
  },
  gabanLuffyKey: {
    character: 'monkey-d-luffy',
    type: {
      en: 'Pirate he gives the key to',
      it: 'Pirata a cui consegna la chiave',
    },
    summary: {
      en: 'After testing Luffy, Gaban lets him take the key to Loki’s chains.',
      it: 'Dopo aver messo alla prova Rufy, Gabin gli lascia prendere la chiave delle catene di Loki.',
    },
  },
  gabanSommers: {
    character: 'shepherd-sommers',
    type: { en: 'Enemy he defeats', it: 'Nemico che sconfigge' },
    summary: {
      en: 'Gaban cuts down Sommers while trying to free the children.',
      it: 'Gabin abbatte Sommers mentre cerca di liberare i bambini.',
    },
  },
  gabanLoki: {
    character: 'loki',
    type: { en: 'Prisoner he defends', it: 'Prigioniero che difende' },
    summary: {
      en: 'Gaban urges Hajrudin to release Loki and hear his account of Harald’s death.',
      it: 'Gabin esorta Hajrudin a liberare Loki e ad ascoltare il suo racconto della morte di Harald.',
    },
  },
  gunkoShamrock: {
    character: 'figarland-shamrock',
    type: { en: 'Commander', it: 'Comandante' },
    summary: {
      en: 'Gunko follows Shamrock’s orders during the attempt to recruit Loki.',
      it: 'Gunko segue gli ordini di Shamrock durante il tentativo di reclutare Loki.',
    },
  },
  gunkoLoki: {
    character: 'loki',
    type: { en: 'Recruit she tortures', it: 'Recluta che tortura' },
    summary: {
      en: 'Gunko attacks Loki to force him to join the Knights of God.',
      it: 'Gunko attacca Loki per costringerlo a unirsi ai Cavalieri di Dio.',
    },
  },
  gunkoKillingham: {
    character: 'rimoshifu-killingham',
    type: { en: 'Accomplice', it: 'Complice' },
    summary: {
      en: 'Gunko coordinates the children’s abduction with Killingham’s sleep powers.',
      it: 'Gunko coordina il rapimento dei bambini con i poteri del sonno di Killingham.',
    },
  },
  gunkoBrook: {
    character: 'brook',
    type: { en: 'Musician she admires', it: 'Musicista che ammira' },
    summary: {
      en: 'Gunko listens to Brook’s music and calls herself his fan.',
      it: 'Gunko ascolta la musica di Brook e si dichiara sua ammiratrice.',
    },
  },
  gunkoBrookAttack: {
    character: 'brook',
    type: {
      en: 'Musician she tries to enslave',
      it: 'Musicista che vuole rendere schiavo',
    },
    summary: {
      en: 'Gunko demands that Brook become her slave and attacks him when he refuses.',
      it: 'Gunko pretende che Brook diventi suo schiavo e lo attacca quando rifiuta.',
    },
  },
  gunkoBrookMemory: {
    character: 'brook',
    type: {
      en: 'Musician who stirs her memories',
      it: 'Musicista che risveglia i suoi ricordi',
    },
    summary: {
      en: 'Seeing Brook brings back fragments of Gunko’s memories before Im takes control of her.',
      it: 'Vedere Brook fa riaffiorare frammenti dei ricordi di Gunko prima che Im prenda il controllo di lei.',
    },
  },
  gunkoIm: {
    character: 'im',
    type: { en: 'Possessor', it: 'Entità che la possiede' },
    summary: {
      en: 'Im takes control of Gunko’s body during the attack on Elbaph.',
      it: 'Im prende il controllo del corpo di Gunko durante l’attacco a Elbaf.',
    },
  },
  shamrockGarling: {
    character: 'figarland-garling',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Shamrock is the son of Saint Figarland Garling.',
      it: 'Shamrock è il figlio di San Figarland Garling.',
    },
  },
  shamrockGunko: {
    character: 'manmayer-gunko',
    type: { en: 'Subordinate', it: 'Subordinata' },
    summary: {
      en: 'Shamrock directs Gunko during their attempt to recruit Loki.',
      it: 'Shamrock dirige Gunko durante il loro tentativo di reclutare Loki.',
    },
  },
  shamrockLoki: {
    character: 'loki',
    type: { en: 'Recruit', it: 'Recluta' },
    summary: {
      en: 'Shamrock tries to force Loki to become a Knight of God.',
      it: 'Shamrock cerca di costringere Loki a diventare un Cavaliere di Dio.',
    },
  },
  shamrockLokiAttack: {
    character: 'loki',
    type: {
      en: 'Rejected recruit he attacks',
      it: 'Recluta che attacca dopo il rifiuto',
    },
    summary: {
      en: 'After Loki refuses to join, Shamrock orders Cerberus to stab him.',
      it: 'Dopo il rifiuto di Loki, Shamrock ordina a Cerbero di trafiggerlo.',
    },
  },
  shamrockShanks: {
    character: 'shanks',
    type: { en: 'Younger twin brother', it: 'Fratello gemello minore' },
    summary: {
      en: 'Shamrock calls Shanks his younger twin and disparages his choice to live in the lower world.',
      it: 'Shamrock chiama Shanks suo fratello gemello minore e disprezza la sua scelta di vivere nel mondo inferiore.',
    },
  },
  shamrockShanksPast: {
    character: 'shanks',
    type: {
      en: 'Brother he welcomed back',
      it: 'Fratello che accoglie al ritorno',
    },
    summary: {
      en: 'In the past, Shamrock welcomes Shanks back to Mary Geoise and urges him to rest.',
      it: 'In passato Shamrock accoglie Shanks al suo ritorno a Marijoa e lo invita a riposare.',
    },
  },
  shamrockCerberus: {
    character: 'cerberus',
    type: { en: 'Living sword', it: 'Spada vivente' },
    summary: {
      en: 'Shamrock commands Cerberus to transform and attack Loki.',
      it: 'Shamrock ordina a Cerbero di trasformarsi e attaccare Loki.',
    },
  },
  sommersShamrock: {
    character: 'figarland-shamrock',
    type: { en: 'Commander', it: 'Comandante' },
    summary: {
      en: 'Shamrock assigns Sommers to the operation against Elbaph’s children.',
      it: 'Shamrock assegna a Sommers l’operazione contro i bambini di Elbaf.',
    },
  },
  sommersKillingham: {
    character: 'rimoshifu-killingham',
    type: { en: 'Accomplice', it: 'Complice' },
    summary: {
      en: 'Sommers traps the children in thorns while Killingham uses their nightmares.',
      it: 'Sommers intrappola i bambini tra le spine mentre Killingham sfrutta i loro incubi.',
    },
  },
  sommersGunko: {
    character: 'manmayer-gunko',
    type: { en: 'Accomplice', it: 'Complice' },
    summary: {
      en: 'Sommers works with Gunko to take Elbaph’s children hostage.',
      it: 'Sommers collabora con Gunko per prendere in ostaggio i bambini di Elbaf.',
    },
  },
  sommersGaban: {
    character: 'scopper-gaban',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Gaban cuts Sommers down while trying to rescue the children.',
      it: 'Gabin abbatte Sommers mentre cerca di salvare i bambini.',
    },
  },
  sommersIm: {
    character: 'im',
    type: { en: 'Ruler he obeys', it: 'Sovrano a cui obbedisce' },
    summary: {
      en: 'Sommers obeys Im’s order to guard the kidnapped children.',
      it: 'Sommers obbedisce all’ordine di Im di sorvegliare i bambini rapiti.',
    },
  },
  sommersShakky: {
    character: 'shakky',
    type: {
      en: 'Woman he wants to enslave',
      it: 'Donna che vuole rendere schiava',
    },
    summary: {
      en: 'Sommers wants Shakky as his slave during the events at God Valley.',
      it: 'Sommers vuole rendere Shakky sua schiava durante gli eventi di God Valley.',
    },
  },
  sommersShakkyAttack: {
    character: 'shakky',
    type: { en: 'Woman he attacks', it: 'Donna che aggredisce' },
    summary: {
      en: 'Sommers tries to kill Shakky at God Valley, but Rayleigh intervenes.',
      it: 'Sommers cerca di uccidere Shakky a God Valley, ma Rayleigh interviene.',
    },
  },
  killinghamShamrock: {
    character: 'figarland-shamrock',
    type: { en: 'Commander', it: 'Comandante' },
    summary: {
      en: 'Killingham accepts Shamrock’s mission to take Elbaph’s children hostage.',
      it: 'Killingham accetta la missione di Shamrock di prendere in ostaggio i bambini di Elbaf.',
    },
  },
  killinghamGunko: {
    character: 'manmayer-gunko',
    type: { en: 'Accomplice', it: 'Complice' },
    summary: {
      en: 'Killingham coordinates the children’s abduction with Gunko.',
      it: 'Killingham coordina il rapimento dei bambini con Gunko.',
    },
  },
  killinghamSommers: {
    character: 'shepherd-sommers',
    type: { en: 'Accomplice', it: 'Complice' },
    summary: {
      en: 'Killingham’s sleep powers and Sommers’ thorns keep the children captive.',
      it: 'I poteri del sonno di Killingham e le spine di Sommers tengono prigionieri i bambini.',
    },
  },
  killinghamKiba: {
    character: 'kiba',
    type: { en: 'Principal he defeats', it: 'Preside che sconfigge' },
    summary: {
      en: 'Killingham knocks Kiba unconscious at the Walrus School.',
      it: 'Killingham fa perdere i sensi a Kiba alla Scuola Walrus.',
    },
  },
  killinghamAnge: {
    character: 'ange',
    type: { en: 'Teacher he restrains', it: 'Insegnante che immobilizza' },
    summary: {
      en: 'Killingham immobilizes Ange with sleep paralysis.',
      it: 'Killingham immobilizza Ange con la paralisi del sonno.',
    },
  },
  killinghamAngeBurn: {
    character: 'ange',
    type: {
      en: 'Teacher he forces to burn the school',
      it: 'Insegnante che costringe a bruciare la scuola',
    },
    summary: {
      en: 'Killingham watches Ange burn the school under the Knights’ threats, then burns the library himself.',
      it: 'Killingham guarda Ange bruciare la scuola sotto le minacce dei Cavalieri, poi incendia la biblioteca di persona.',
    },
  },
  killinghamIm: {
    character: 'im',
    type: { en: 'Ruler he answers to', it: 'Sovrano a cui risponde' },
    summary: {
      en: 'Killingham answers Im’s questions about the nightmare creatures and explains that he can revive them.',
      it: 'Killingham risponde alle domande di Im sulle creature degli incubi e spiega di poterle riportare in vita.',
    },
  },
} satisfies Record<string, Relationship>

// Chapter-only snapshots after 1150 use 1180 solely as an ordering coordinate.
// Facts before a filed endpoint are delayed until both characters are open.
export const elbafRelationships = {
  'iscat': [
    {
      episode: 1158,
      chapter: 1128,
      value: [links.iscatLuffy, links.iscatUsopp, links.iscatNami],
    },
    {
      episode: 1159,
      chapter: 1129,
      value: [
        links.iscatRoad,
        links.iscatLuffy,
        links.iscatUsopp,
        links.iscatNami,
      ],
    },
  ],
  'road': [
    {
      episode: 1159,
      chapter: 1129,
      value: [links.roadHajrudin, links.roadNami],
    },
    {
      episode: 1162,
      chapter: 1132,
      value: [
        links.roadHajrudin,
        links.roadGerd,
        links.roadGoldberg,
        links.roadNami,
      ],
    },
    {
      episode: 1166,
      chapter: 1136,
      value: [
        links.roadHajrudin,
        links.roadGerd,
        links.roadGoldberg,
        links.roadNamiServant,
      ],
    },
    {
      episode: 1167,
      chapter: 1137,
      value: [
        links.roadHajrudinFriend,
        links.roadGerd,
        links.roadGoldberg,
        links.roadNamiServant,
      ],
    },
  ],
  'goldberg': [
    {
      episode: 1161,
      chapter: 1131,
      value: [links.goldbergGerd, links.goldbergRoad],
    },
    {
      episode: 1162,
      chapter: 1132,
      value: [links.goldbergGerd, links.goldbergRoadPunished],
    },
  ],
  'ange': [
    { episode: 1164, chapter: 1134, value: [links.angeSaul] },
    { episode: 1174, chapter: 1144, value: [links.angeSaul, links.angeKiba] },
    {
      episode: 1176,
      chapter: 1146,
      value: [links.angeSaul, links.angeKiba, links.angeKillingham],
    },
    {
      episode: 1179,
      chapter: 1149,
      value: [links.angeSaul, links.angeKiba, links.angeKillinghamBurn],
    },
  ],
  'stansen': [
    {
      episode: 1165,
      chapter: 1135,
      value: [links.stansenLuffy, links.stansenHajrudin, links.stansenRayleigh],
    },
  ],
  'cerberus': [
    {
      episode: 1168,
      chapter: 1138,
      value: [links.cerberusShamrock, links.cerberusLoki],
    },
  ],
  'ragnir': [{ episode: 1171, chapter: 1141, value: [links.ragnirLoki] }],
  'kiba': [
    { episode: 1172, chapter: 1142, value: [links.kibaSaul] },
    { episode: 1174, chapter: 1144, value: [links.kibaSaul, links.kibaAnge] },
    {
      episode: 1176,
      chapter: 1146,
      value: [links.kibaSaul, links.kibaAnge, links.kibaKillingham],
    },
  ],
  'wolf-elbaph': [{ episode: 1172, chapter: 1142, value: [links.wolfSaul] }],
  'loki': [
    { episode: 1160, chapter: 1130, value: [links.lokiLola] },
    {
      episode: 1161,
      chapter: 1131,
      value: [links.lokiLuffy, links.lokiShanks, links.lokiLola],
    },
    {
      episode: 1166,
      chapter: 1136,
      value: [links.lokiLuffy, links.lokiShanksCaptor, links.lokiLola],
    },
    {
      episode: 1167,
      chapter: 1137,
      value: [
        links.lokiLuffy,
        links.lokiShanksCaptor,
        links.lokiHarald,
        links.lokiHajrudin,
        links.lokiLola,
      ],
    },
    {
      episode: 1173,
      chapter: 1143,
      value: [
        links.lokiLuffy,
        links.lokiShanksCaptor,
        links.lokiHaraldDenial,
        links.lokiHajrudin,
        links.lokiLola,
      ],
    },
    {
      episode: 1175,
      chapter: 1145,
      value: [
        links.lokiLuffy,
        links.lokiShanksCaptor,
        links.lokiHaraldDenial,
        links.lokiHajrudin,
        links.lokiRocks,
      ],
    },
    {
      episode: 1180,
      chapter: 1152,
      source: 'chapter',
      value: [
        links.lokiLuffyInvite,
        links.lokiShanksCaptor,
        links.lokiHaraldDenial,
        links.lokiHajrudin,
        links.lokiRocks,
      ],
    },
    {
      episode: 1180,
      chapter: 1154,
      source: 'chapter',
      value: [
        links.lokiLuffyInvite,
        links.lokiShanksCaptor,
        links.lokiHaraldChild,
        links.lokiHajrudinChild,
        links.lokiRocks,
      ],
    },
    {
      episode: 1180,
      chapter: 1155,
      source: 'chapter',
      value: [
        links.lokiLuffyInvite,
        links.lokiShanksCaptor,
        links.lokiHaraldRescue,
        links.lokiHajrudinChild,
        links.lokiRocksChild,
      ],
    },
    {
      episode: 1180,
      chapter: 1166,
      source: 'chapter',
      value: [
        links.lokiLuffyInvite,
        links.lokiShanksCaptor,
        links.lokiHaraldRescue,
        links.lokiHajrudinChild,
        links.lokiRocksDead,
      ],
    },
  ],
  'harald': [
    {
      episode: 1167,
      chapter: 1137,
      value: [links.haraldLoki, links.haraldHajrudin],
    },
    {
      episode: 1180,
      chapter: 1154,
      source: 'chapter',
      value: [
        links.haraldLokiChild,
        links.haraldHajrudinChild,
        links.haraldJarul,
      ],
    },
    {
      episode: 1180,
      chapter: 1155,
      source: 'chapter',
      value: [
        links.haraldLokiChild,
        links.haraldHajrudinChild,
        links.haraldRocks,
        links.haraldJarul,
      ],
    },
    {
      episode: 1180,
      chapter: 1158,
      source: 'chapter',
      value: [
        links.haraldLokiChild,
        links.haraldHajrudinChild,
        links.haraldRocksClash,
        links.haraldJarul,
      ],
    },
    {
      episode: 1180,
      chapter: 1166,
      source: 'chapter',
      value: [
        links.haraldLokiRequest,
        links.haraldHajrudinRequest,
        links.haraldRocksRegret,
        links.haraldJarul,
      ],
    },
    {
      episode: 1180,
      chapter: 1167,
      source: 'chapter',
      value: [
        links.haraldLokiRequest,
        links.haraldHajrudinRequest,
        links.haraldRocksRegret,
        links.haraldJarul,
        links.haraldSaul,
      ],
    },
  ],
  'ripley': [
    { episode: 1164, chapter: 1134, value: [links.ripleyLuffy] },
    {
      episode: 1165,
      chapter: 1135,
      value: [links.ripleyColon, links.ripleyLuffy],
    },
    {
      episode: 1168,
      chapter: 1138,
      value: [links.ripleyColon, links.ripleyLuffy, links.ripleyFranky],
    },
    {
      episode: 1169,
      chapter: 1139,
      value: [
        links.ripleyGaban,
        links.ripleyColon,
        links.ripleyLuffy,
        links.ripleyFranky,
      ],
    },
  ],
  'colon': [
    {
      episode: 1165,
      chapter: 1135,
      value: [links.colonRipley, links.colonLuffy],
    },
    {
      episode: 1169,
      chapter: 1139,
      value: [links.colonGaban, links.colonRipley, links.colonLuffy],
    },
    {
      episode: 1179,
      chapter: 1149,
      value: [
        links.colonGabanSacrifice,
        links.colonRipley,
        links.colonLuffy,
        links.colonGunko,
      ],
    },
  ],
  'scopper-gaban': [
    {
      episode: 1169,
      chapter: 1139,
      value: [
        links.gabanRipley,
        links.gabanColon,
        links.gabanRoger,
        links.gabanRayleigh,
        links.gabanLuffy,
      ],
    },
    {
      episode: 1170,
      chapter: 1140,
      value: [
        links.gabanRipley,
        links.gabanColon,
        links.gabanRoger,
        links.gabanRayleigh,
        links.gabanLuffyKey,
      ],
    },
    {
      episode: 1179,
      chapter: 1149,
      value: [
        links.gabanRipley,
        links.gabanColonSacrifice,
        links.gabanRayleigh,
        links.gabanLuffyKey,
        links.gabanSommers,
      ],
    },
    {
      episode: 1180,
      chapter: 1152,
      source: 'chapter',
      value: [
        links.gabanRipley,
        links.gabanColonSacrifice,
        links.gabanRayleigh,
        links.gabanLuffyKey,
        links.gabanLoki,
      ],
    },
  ],
  'manmayer-gunko': [
    {
      episode: 1167,
      chapter: 1137,
      value: [links.gunkoShamrock, links.gunkoLoki],
    },
    {
      episode: 1173,
      chapter: 1143,
      value: [links.gunkoShamrock, links.gunkoLoki, links.gunkoKillingham],
    },
    {
      episode: 1174,
      chapter: 1144,
      value: [
        links.gunkoShamrock,
        links.gunkoLoki,
        links.gunkoKillingham,
        links.gunkoBrook,
      ],
    },
    {
      episode: 1177,
      chapter: 1147,
      value: [
        links.gunkoShamrock,
        links.gunkoLoki,
        links.gunkoKillingham,
        links.gunkoBrookAttack,
      ],
    },
    {
      episode: 1179,
      chapter: 1149,
      value: [
        links.gunkoIm,
        links.gunkoBrookMemory,
        links.gunkoShamrock,
        links.gunkoLoki,
        links.gunkoKillingham,
      ],
    },
  ],
  'figarland-shamrock': [
    {
      episode: 1167,
      chapter: 1137,
      value: [links.shamrockGarling, links.shamrockGunko, links.shamrockLoki],
    },
    {
      episode: 1168,
      chapter: 1138,
      value: [
        links.shamrockShanks,
        links.shamrockGarling,
        links.shamrockGunko,
        links.shamrockLokiAttack,
        links.shamrockCerberus,
      ],
    },
    {
      episode: 1180,
      chapter: 1167,
      source: 'chapter',
      value: [
        links.shamrockShanksPast,
        links.shamrockGarling,
        links.shamrockGunko,
        links.shamrockLokiAttack,
        links.shamrockCerberus,
      ],
    },
  ],
  'shepherd-sommers': [
    {
      episode: 1170,
      chapter: 1143,
      source: 'episode',
      value: [links.sommersShamrock, links.sommersGunko],
    },
    {
      episode: 1173,
      chapter: 1143,
      value: [
        links.sommersShamrock,
        links.sommersGunko,
        links.sommersKillingham,
      ],
    },
    {
      episode: 1179,
      chapter: 1149,
      value: [
        links.sommersShamrock,
        links.sommersGunko,
        links.sommersKillingham,
        links.sommersGaban,
      ],
    },
    {
      episode: 1180,
      chapter: 1150,
      value: [
        links.sommersIm,
        links.sommersGunko,
        links.sommersKillingham,
        links.sommersGaban,
      ],
    },
    {
      episode: 1180,
      chapter: 1159,
      source: 'chapter',
      value: [
        links.sommersIm,
        links.sommersGunko,
        links.sommersKillingham,
        links.sommersGaban,
        links.sommersShakky,
      ],
    },
    {
      episode: 1180,
      chapter: 1161,
      source: 'chapter',
      value: [
        links.sommersIm,
        links.sommersGunko,
        links.sommersKillingham,
        links.sommersGaban,
        links.sommersShakkyAttack,
      ],
    },
  ],
  'rimoshifu-killingham': [
    {
      episode: 1170,
      chapter: 1143,
      source: 'episode',
      value: [links.killinghamShamrock, links.killinghamGunko],
    },
    {
      episode: 1173,
      chapter: 1143,
      value: [
        links.killinghamShamrock,
        links.killinghamGunko,
        links.killinghamSommers,
      ],
    },
    {
      episode: 1176,
      chapter: 1146,
      value: [
        links.killinghamShamrock,
        links.killinghamGunko,
        links.killinghamSommers,
        links.killinghamKiba,
        links.killinghamAnge,
      ],
    },
    {
      episode: 1179,
      chapter: 1149,
      value: [
        links.killinghamShamrock,
        links.killinghamGunko,
        links.killinghamSommers,
        links.killinghamKiba,
        links.killinghamAngeBurn,
      ],
    },
    {
      episode: 1180,
      chapter: 1150,
      value: [
        links.killinghamIm,
        links.killinghamGunko,
        links.killinghamSommers,
        links.killinghamKiba,
        links.killinghamAngeBurn,
      ],
    },
  ],
} satisfies Record<string, Timeline<Relationship[]>>
