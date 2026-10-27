import type { Relationship, Timeline } from '~/data/types'

/** Identical reached states stay identical when retained by a later selection. */
const retained = {
  monkeyDLuffyShanksInspiration: {
    character: 'shanks',
    type: { en: 'Inspiration', it: 'Modello' },
    summary: {
      en: 'Shanks saves Luffy at sea and entrusts him with his straw hat.',
      it: 'Shanks salva Rufy in mare e gli affida il cappello di paglia.',
    },
  },
  monkeyDLuffyKobyFriend: {
    character: 'koby',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'Luffy helps Koby leave Alvida and pursue his wish to become a Marine.',
      it: 'Rufy aiuta Kobi a lasciare Alvida e a realizzare il desiderio di entrare nella Marina.',
    },
  },
  monkeyDLuffyRoronoaZoroCrewmate: {
    character: 'roronoa-zoro',
    type: { en: 'Crewmate', it: 'Compagno di ciurma' },
    summary: {
      en: 'Zoro joins Luffy after they defeat Morgan.',
      it: 'Zoro si unisce a Rufy dopo la sconfitta di Morgan.',
    },
  },
  monkeyDLuffyNamiTravellingCompanion: {
    character: 'nami',
    type: { en: 'Travelling companion', it: 'Compagna di viaggio' },
    summary: {
      en: 'Nami agrees to sail with Luffy while pursuing her own goal.',
      it: 'Nami accetta di viaggiare con Rufy mentre persegue il proprio obiettivo.',
    },
  },
  monkeyDLuffyUsoppCrewmate: {
    character: 'usopp',
    type: { en: 'Crewmate', it: 'Compagno di ciurma' },
    summary: {
      en: 'Usopp apologises and Luffy welcomes him back into the crew.',
      it: 'Usop si scusa e Rufy lo riaccoglie nella ciurma.',
    },
  },
  monkeyDLuffySanjiCook: {
    character: 'sanji',
    type: { en: 'Cook', it: 'Cuoco' },
    summary: {
      en: 'Sanji leaves the Baratie to become Luffy’s cook.',
      it: 'Sanji lascia il Baratie per diventare il cuoco di Rufy.',
    },
  },
  monkeyDLuffyNamiNavigator: {
    character: 'nami',
    type: { en: 'Navigator', it: 'Navigatrice' },
    summary: {
      en: 'Luffy defeats Arlong and Nami accepts her place in his crew.',
      it: 'Rufy sconfigge Arlong e Nami accetta il proprio posto nella sua ciurma.',
    },
  },
  monkeyDLuffyPortgasDAceOlderBrother: {
    character: 'portgas-d-ace',
    type: { en: 'Older brother', it: 'Fratello maggiore' },
    summary: {
      en: 'Ace is Luffy’s older brother and meets him again in Alabasta.',
      it: 'Ace è il fratello maggiore di Rufy e lo ritrova ad Alabasta.',
    },
  },
  monkeyDLuffyUsoppFormerCrewmate: {
    character: 'usopp',
    type: { en: 'Former crewmate', it: 'Ex compagno di ciurma' },
    summary: {
      en: 'Usopp leaves after a dispute over their ship and loses his duel against Luffy.',
      it: 'Usop lascia la ciurma dopo una lite sulla nave e perde il duello contro Rufy.',
    },
  },
  monkeyDLuffyMonkeyDGarpGrandfather: {
    character: 'monkey-d-garp',
    type: { en: 'Grandfather', it: 'Nonno' },
    summary: {
      en: 'Garp is Luffy’s grandfather and wanted him to become a Marine.',
      it: 'Garp è il nonno di Rufy e voleva che entrasse nella Marina.',
    },
  },
  monkeyDLuffyMonkeyDDragonFather: {
    character: 'monkey-d-dragon',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Garp tells Luffy that Dragon is his father.',
      it: 'Garp dice a Rufy che Dragon è suo padre.',
    },
  },
  monkeyDLuffyPortgasDAceLateOlderBrother: {
    character: 'portgas-d-ace',
    type: { en: 'Late older brother', it: 'Fratello maggiore defunto' },
    summary: {
      en: 'Ace dies protecting Luffy from Sakazuki at Marineford.',
      it: 'Ace muore proteggendo Rufy da Sakazuki a Marineford.',
    },
  },
  monkeyDLuffySaboSwornBrother: {
    character: 'sabo',
    type: { en: 'Sworn brother', it: 'Fratello per giuramento' },
    summary: {
      en: 'Luffy, Ace and Sabo share cups to become brothers as children.',
      it: 'Da bambini Rufy, Ace e Sabo si scambiano le coppe per diventare fratelli.',
    },
  },
  monkeyDLuffySilversRayleighMentor: {
    character: 'silvers-rayleigh',
    type: { en: 'Mentor', it: 'Mentore' },
    summary: {
      en: 'Rayleigh agrees to train Luffy in Haki during the two-year separation.',
      it: 'Rayleigh accetta di addestrare Rufy nell’Haki durante i due anni di separazione.',
    },
  },
  monkeyDLuffyTrafalgarLawAlliancePartner: {
    character: 'trafalgar-law',
    type: { en: 'Alliance partner', it: 'Alleato' },
    summary: {
      en: 'Luffy agrees to Law’s proposal for an alliance against an Emperor.',
      it: 'Rufy accetta la proposta di Law di allearsi contro un Imperatore.',
    },
  },
  monkeyDLuffySaboReunitedBrother: {
    character: 'sabo',
    type: { en: 'Reunited brother', it: 'Fratello ritrovato' },
    summary: {
      en: 'Luffy discovers that Sabo survived and meets him again in Dressrosa.',
      it: 'Rufy scopre che Sabo è sopravvissuto e lo ritrova a Dressrosa.',
    },
  },
  monkeyDLuffySanjiReconciledCrewmate: {
    character: 'sanji',
    type: { en: 'Reconciled crewmate', it: 'Compagno ritrovato' },
    summary: {
      en: 'Sanji admits he wants to return and Luffy agrees to help him save his family.',
      it: 'Sanji ammette di voler tornare e Rufy accetta di aiutarlo a salvare la famiglia.',
    },
  },
  roronoaZoroMonkeyDLuffyCaptain: {
    character: 'monkey-d-luffy',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Zoro joins Luffy’s crew after Luffy returns his swords.',
      it: 'Zoro entra nella ciurma di Rufy dopo che Rufy gli restituisce le spade.',
    },
  },
  roronoaZoroKuinaChildhoodRival: {
    character: 'kuina',
    type: { en: 'Childhood rival', it: 'Rivale d’infanzia' },
    summary: {
      en: 'Zoro promises Kuina that one of them will become the greatest swordsman and keeps that goal after her death.',
      it: 'Zoro promette a Kuina che uno di loro diventerà il più grande spadaccino e mantiene l’obiettivo dopo la sua morte.',
    },
  },
  roronoaZoroDraculeMihawkRivalToSurpass: {
    character: 'dracule-mihawk',
    type: { en: 'Rival to surpass', it: 'Rivale da superare' },
    summary: {
      en: 'Mihawk defeats Zoro and challenges him to grow stronger.',
      it: 'Mihawk sconfigge Zoro e lo invita a diventare più forte.',
    },
  },
  roronoaZoroTashigiOpposingSwordswoman: {
    character: 'tashigi',
    type: { en: 'Opposing swordswoman', it: 'Spadaccina avversaria' },
    summary: {
      en: 'Tashigi confronts Zoro after learning that he is a pirate.',
      it: 'Tashigi affronta Zoro dopo aver scoperto che è un pirata.',
    },
  },
  roronoaZoroMonkeyDLuffyCaptainHeProtects: {
    character: 'monkey-d-luffy',
    type: { en: 'Captain he protects', it: 'Capitano che protegge' },
    summary: {
      en: 'Zoro takes Luffy’s pain from Kuma to spare his captain’s life.',
      it: 'Zoro si fa trasferire da Kuma il dolore di Rufy per salvare la vita del capitano.',
    },
  },
  helmeppoMorganFather: {
    character: 'morgan',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Helmeppo uses his father Morgan’s authority to threaten the townspeople.',
      it: 'Hermeppo usa l’autorità del padre Morgan per minacciare gli abitanti.',
    },
  },
  helmeppoKobyFellowRecruit: {
    character: 'koby',
    type: { en: 'Fellow recruit', it: 'Compagno di reclutamento' },
    summary: {
      en: 'Helmeppo trains alongside Koby in the Marines.',
      it: 'Hermeppo si addestra con Kobi nella Marina.',
    },
  },
  shanksMonkeyDLuffyYoungPirateHeInspires: {
    character: 'monkey-d-luffy',
    type: { en: 'Young pirate he inspires', it: 'Giovane pirata che ispira' },
    summary: {
      en: 'Shanks saves Luffy and gives him his straw hat, asking him to return it when he becomes a great pirate.',
      it: 'Shanks salva Rufy e gli dà il cappello di paglia, chiedendogli di restituirlo quando sarà diventato un grande pirata.',
    },
  },
  shanksBennBeckmanFirstMate: {
    character: 'benn-beckman',
    type: { en: 'First mate', it: 'Vicecapitano' },
    summary: {
      en: 'Beckman serves as Shanks’s first mate and confronts Higuma’s bandits.',
      it: 'Beckman è il vicecapitano di Shanks e affronta i banditi di Higuma.',
    },
  },
  shanksDraculeMihawkFormerRival: {
    character: 'dracule-mihawk',
    type: { en: 'Former rival', it: 'Ex rivale' },
    summary: {
      en: 'Mihawk brings Shanks Luffy’s wanted poster; they no longer duel after Shanks loses an arm.',
      it: 'Mihawk porta a Shanks il manifesto di taglia di Rufy; i due non duellano più da quando Shanks ha perso un braccio.',
    },
  },
  shanksBuggyFormerFellowApprentice: {
    character: 'buggy',
    type: {
      en: 'Former fellow apprentice',
      it: 'Ex compagno di apprendistato',
    },
    summary: {
      en: 'Shanks and Buggy once served as pirate apprentices on the same ship.',
      it: 'Shanks e Bagy erano apprendisti pirati sulla stessa nave.',
    },
  },
  shanksMarshallDTeachDangerousRival: {
    character: 'marshall-d-teach',
    type: { en: 'Dangerous rival', it: 'Rivale pericoloso' },
    summary: {
      en: 'Shanks confronts Teach at Marineford after warning Whitebeard about him.',
      it: 'Shanks affronta Teach a Marineford dopo aver messo in guardia Barbabianca su di lui.',
    },
  },
  shanksMonkeyDLuffyPirateHeWatches: {
    character: 'monkey-d-luffy',
    type: { en: 'Pirate he watches', it: 'Pirata che segue' },
    summary: {
      en: 'Shanks sees Luffy’s new wanted poster but decides not to meet him in Wano.',
      it: 'Shanks vede il nuovo manifesto di taglia di Rufy ma decide di non incontrarlo a Wano.',
    },
  },
  yasoppUsoppSon: {
    character: 'usopp',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'Yasopp is Usopp’s father; Luffy recognises their connection from his time with Shanks’s crew.',
      it: 'Yasop è il padre di Usop; Rufy riconosce il legame grazie al tempo trascorso con la ciurma di Shanks.',
    },
  },
  buggyMonkeyDLuffyEnemy: {
    character: 'monkey-d-luffy',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'Luffy defeats Buggy after Nami ties up his separated body parts.',
      it: 'Rufy sconfigge Bagy dopo che Nami ha legato le parti separate del suo corpo.',
    },
  },
  buggyShanksFormerFellowApprentice: {
    character: 'shanks',
    type: {
      en: 'Former fellow apprentice',
      it: 'Ex compagno di apprendistato',
    },
    summary: {
      en: 'Shanks gets Buggy to return Luffy’s straw hat by promising a treasure map he does not have.',
      it: 'Shanks convince Bagy a restituire il cappello di Rufy promettendogli una mappa del tesoro che non possiede.',
    },
  },
  buggyAlvidaAlly: {
    character: 'alvida',
    type: { en: 'Ally', it: 'Alleata' },
    summary: {
      en: 'Buggy joins forces with Alvida to take revenge on Luffy.',
      it: 'Bagy si allea con Alvida per vendicarsi di Rufy.',
    },
  },
  namiMonkeyDLuffyTemporaryAlly: {
    character: 'monkey-d-luffy',
    type: { en: 'Temporary ally', it: 'Alleato temporaneo' },
    summary: {
      en: 'Nami agrees to travel with Luffy but does not yet commit to his crew.',
      it: 'Nami accetta di viaggiare con Rufy senza ancora entrare stabilmente nella sua ciurma.',
    },
  },
  namiBellMereAdoptiveMother: {
    character: 'bell-mere',
    type: { en: 'Adoptive mother', it: 'Madre adottiva' },
    summary: {
      en: 'Bell-mère adopts Nami and Nojiko and raises them as her daughters.',
      it: 'Bellmer adotta Nami e Nojiko e le cresce come figlie.',
    },
  },
  namiNojikoAdoptiveSister: {
    character: 'nojiko',
    type: { en: 'Adoptive sister', it: 'Sorella adottiva' },
    summary: {
      en: 'Nami and Nojiko grow up together under Bell-mère’s care.',
      it: 'Nami e Nojiko crescono insieme con Bellmer.',
    },
  },
  namiMonkeyDLuffyCaptain: {
    character: 'monkey-d-luffy',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Luffy answers Nami’s request for help, defeats Arlong and welcomes her into his crew.',
      it: 'Rufy risponde alla richiesta di aiuto di Nami, sconfigge Arlong e la accoglie nella ciurma.',
    },
  },
  namiArlongFormerCaptor: {
    character: 'arlong',
    type: { en: 'Former captor', it: 'Ex aguzzino' },
    summary: {
      en: 'Arlong exploits Nami as a cartographer until Luffy defeats him and frees her.',
      it: 'Arlong sfrutta Nami come cartografa finché Rufy non lo sconfigge e la libera.',
    },
  },
  namiUsoppCrewmateAndWeaponMaker: {
    character: 'usopp',
    type: {
      en: 'Crewmate and weapon maker',
      it: 'Compagno e costruttore dell’arma',
    },
    summary: {
      en: 'Usopp makes Nami’s Clima-Tact, which she uses against Miss Doublefinger.',
      it: 'Usop costruisce il Clima-Tact di Nami, che lei usa contro Miss Doublefinger.',
    },
  },
  usoppKayaFriend: {
    character: 'kaya',
    type: { en: 'Friend', it: 'Amica' },
    summary: {
      en: 'Usopp visits Kaya and tells her stories to cheer her up.',
      it: 'Usop visita Kaya e le racconta storie per farla sorridere.',
    },
  },
  usoppYasoppFather: {
    character: 'yasopp',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Usopp is proud that his father Yasopp sails with Shanks.',
      it: 'Usop è orgoglioso che suo padre Yasop navighi con Shanks.',
    },
  },
  usoppNinjinPiimanAndTamanegiYoungFollowers: {
    character: 'ninjin-piiman-and-tamanegi',
    type: { en: 'Young followers', it: 'Giovani seguaci' },
    summary: {
      en: 'The three children follow Usopp as their pretend pirate captain.',
      it: 'I tre bambini seguono Usop come capitano della loro ciurma per gioco.',
    },
  },
  usoppMonkeyDLuffyCaptain: {
    character: 'monkey-d-luffy',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Usopp apologises for leaving and Luffy brings him back aboard.',
      it: 'Usop si scusa per essere andato via e Rufy lo riporta a bordo.',
    },
  },
  usoppBrogyInspiration: {
    character: 'brogy',
    type: { en: 'Inspiration', it: 'Modello' },
    summary: {
      en: 'Usopp admires Brogy’s warrior pride and wants to become a brave warrior like the giants.',
      it: 'Usop ammira l’orgoglio guerriero di Brogi e vuole diventare un guerriero coraggioso come i giganti.',
    },
  },
  usoppDorryInspiration: {
    character: 'dorry',
    type: { en: 'Inspiration', it: 'Modello' },
    summary: {
      en: 'Dorry and Brogy’s commitment to their duel inspires Usopp’s dream of visiting Elbaph.',
      it: 'La dedizione di Dori e Brogi al loro duello ispira in Usop il desiderio di visitare Elbaf.',
    },
  },
  jangoHinaSuperior: {
    character: 'hina',
    type: { en: 'Superior', it: 'Superiore' },
    summary: {
      en: 'He serves under Hina during the operation against Luffy’s crew in Alabasta.',
      it: 'Serve sotto Hina durante l’operazione contro la ciurma di Rufy ad Alabasta.',
    },
  },
  buchiKuroCaptain: {
    character: 'kuro',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Kuro threatens to kill the brothers if they fail to defeat Zoro.',
      it: 'Kuro minaccia di uccidere i fratelli se non sconfiggono Zoro.',
    },
  },
  buchiRoronoaZoroOpponent: {
    character: 'roronoa-zoro',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Zoro fights the brothers while defending Syrup Village.',
      it: 'Zoro affronta i fratelli mentre difende il Villaggio di Syrup.',
    },
  },
  johnnyRoronoaZoroFormerPartner: {
    character: 'roronoa-zoro',
    type: { en: 'Former partner', it: 'Ex compagno' },
    summary: {
      en: 'He knows Zoro from their time as bounty hunters.',
      it: 'Conosce Zoro dal periodo in cui erano cacciatori di taglie.',
    },
  },
  johnnyNamiRescuer: {
    character: 'nami',
    type: { en: 'Rescuer', it: 'Soccorritrice' },
    summary: {
      en: 'Nami recognises Yosaku’s scurvy and provides citrus fruit to treat him.',
      it: 'Nami riconosce lo scorbuto di Yosaku e fornisce degli agrumi per curarlo.',
    },
  },
  sanjiZeffMentorAndRescuer: {
    character: 'zeff',
    type: { en: 'Mentor and rescuer', it: 'Mentore e soccorritore' },
    summary: {
      en: 'Zeff saves Sanji after a shipwreck and gives him the food while they wait for rescue.',
      it: 'Zef salva Sanji dopo un naufragio e gli lascia il cibo mentre aspettano i soccorsi.',
    },
  },
  sanjiMonkeyDLuffyCaptain: {
    character: 'monkey-d-luffy',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Sanji leaves the Baratie to join Luffy and search for the All Blue.',
      it: 'Sanji lascia il Baratie per unirsi a Rufy e cercare l’All Blue.',
    },
  },
  sanjiVinsmokeReijuOlderSister: {
    character: 'vinsmoke-reiju',
    type: { en: 'Older sister', it: 'Sorella maggiore' },
    summary: {
      en: 'Reiju helps Sanji escape his family’s imprisonment as a child.',
      it: 'Reiju aiuta Sanji a fuggire dalla prigionia imposta dalla famiglia quando è bambino.',
    },
  },
  sanjiVinsmokeJudgeEstrangedFather: {
    character: 'vinsmoke-judge',
    type: { en: 'Estranged father', it: 'Padre con cui ha rotto' },
    summary: {
      en: 'Judge rejects Sanji as a failure and uses his marriage to secure an alliance.',
      it: 'Judge considera Sanji un fallimento e usa il suo matrimonio per ottenere un’alleanza.',
    },
  },
  sanjiCharlottePuddingArrangedFiancE: {
    character: 'charlotte-pudding',
    type: { en: 'Arranged fiancée', it: 'Promessa sposa' },
    summary: {
      en: 'Sanji’s family arranges his marriage to Pudding.',
      it: 'La famiglia di Sanji organizza il suo matrimonio con Pudding.',
    },
  },
  sanjiMonkeyDLuffyCaptainHeTurnsAway: {
    character: 'monkey-d-luffy',
    type: { en: 'Captain he turns away', it: 'Capitano che respinge' },
    summary: {
      en: 'Sanji attacks Luffy and tells him to leave to keep his friends out of the marriage plot.',
      it: 'Sanji attacca Rufy e gli dice di andarsene per tenere gli amici fuori dal complotto matrimoniale.',
    },
  },
  sanjiCharlottePuddingWouldBeKiller: {
    character: 'charlotte-pudding',
    type: { en: 'Would-be killer', it: 'Aspirante assassina' },
    summary: {
      en: 'Sanji overhears Pudding explain that she plans to kill him during the wedding.',
      it: 'Sanji sente Pudding spiegare che intende ucciderlo durante il matrimonio.',
    },
  },
  sanjiMonkeyDLuffyCaptainHeReturnsTo: {
    character: 'monkey-d-luffy',
    type: { en: 'Captain he returns to', it: 'Capitano da cui torna' },
    summary: {
      en: 'Sanji tells Luffy he wants to return to the crew and asks for help saving his family.',
      it: 'Sanji dice a Rufy che vuole tornare nella ciurma e chiede aiuto per salvare la famiglia.',
    },
  },
  sanjiCharlottePuddingAllyHePartsFrom: {
    character: 'charlotte-pudding',
    type: { en: 'Ally he parts from', it: 'Alleata da cui si separa' },
    summary: {
      en: 'Pudding helps Sanji make the replacement wedding cake and removes his memory of their farewell kiss.',
      it: 'Pudding aiuta Sanji a preparare la torta nuziale sostitutiva e gli toglie il ricordo del bacio d’addio.',
    },
  },
  carneZeffHeadChef: {
    character: 'zeff',
    type: { en: 'Head chef', it: 'Capocuoco' },
    summary: {
      en: 'Zeff runs the Baratie where he works as a cook.',
      it: 'Zef dirige il Baratie dove lavora come cuoco.',
    },
  },
  carneSanjiFellowCook: {
    character: 'sanji',
    type: { en: 'Fellow cook', it: 'Collega cuoco' },
    summary: {
      en: 'He helps the staff push Sanji to leave and follow his dream.',
      it: 'Aiuta gli altri cuochi a spingere Sanji a partire per seguire il suo sogno.',
    },
  },
  draculeMihawkRoronoaZoroChallenger: {
    character: 'roronoa-zoro',
    type: { en: 'Challenger', it: 'Sfidante' },
    summary: {
      en: 'Mihawk defeats Zoro but spares him and urges him to surpass his strength.',
      it: 'Mihawk sconfigge Zoro ma lo risparmia e lo invita a superare la sua forza.',
    },
  },
  draculeMihawkShanksFormerRival: {
    character: 'shanks',
    type: { en: 'Former rival', it: 'Ex rivale' },
    summary: {
      en: 'Mihawk visits Shanks with Luffy’s first wanted poster; they no longer duel after Shanks loses an arm.',
      it: 'Mihawk porta a Shanks il primo manifesto di taglia di Rufy; i due non duellano più da quando Shanks ha perso un braccio.',
    },
  },
  draculeMihawkRoronoaZoroStudentAndChallenger: {
    character: 'roronoa-zoro',
    type: { en: 'Student and challenger', it: 'Allievo e sfidante' },
    summary: {
      en: 'Mihawk agrees to train Zoro after Zoro puts his captain’s needs before their rivalry.',
      it: 'Mihawk accetta di addestrare Zoro dopo che Zoro ha anteposto il capitano alla loro rivalità.',
    },
  },
  arlongNamiFormerCartographer: {
    character: 'nami',
    type: { en: 'Former cartographer', it: 'Ex cartografa' },
    summary: {
      en: 'Arlong forces Nami to draw maps until Luffy defeats him and destroys his base.',
      it: 'Arlong costringe Nami a disegnare mappe finché Rufy non lo sconfigge e distrugge la sua base.',
    },
  },
  arlongMonkeyDLuffyDefeatingOpponent: {
    character: 'monkey-d-luffy',
    type: { en: 'Defeating opponent', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Luffy defeats Arlong and destroys his base to free Nami.',
      it: 'Rufy sconfigge Arlong e distrugge la sua base per liberare Nami.',
    },
  },
  arlongFisherTigerFormerCaptain: {
    character: 'fisher-tiger',
    type: { en: 'Former captain', it: 'Ex capitano' },
    summary: {
      en: 'Arlong serves under Fisher Tiger but argues against his refusal to kill humans.',
      it: 'Arlong serve sotto Fisher Tiger ma contesta il suo rifiuto di uccidere gli umani.',
    },
  },
  hatchanArlongCaptain: {
    character: 'arlong',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Hatchan serves as one of Arlong’s officers.',
      it: 'Octy serve come ufficiale di Arlong.',
    },
  },
  hatchanCamieFriendAndEmployee: {
    character: 'camie',
    type: { en: 'Friend and employee', it: 'Amica e dipendente' },
    summary: {
      en: 'Camie sells Hatchan’s takoyaki and asks Luffy’s crew to rescue him.',
      it: 'Kayme vende i takoyaki di Octy e chiede alla ciurma di Rufy di salvarlo.',
    },
  },
  hatchanPappagFriend: {
    character: 'pappag',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'Pappag accompanies Camie when she asks for Hatchan’s rescue.',
      it: 'Pappagu accompagna Kayme quando chiede di salvare Octy.',
    },
  },
  hatchanMonkeyDLuffyRescuer: {
    character: 'monkey-d-luffy',
    type: { en: 'Rescuer', it: 'Soccorritore' },
    summary: {
      en: 'Luffy’s crew helps free Hatchan from the kidnappers.',
      it: 'La ciurma di Rufy aiuta a liberare Octy dai rapitori.',
    },
  },
  kuroobiArlongCaptain: {
    character: 'arlong',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Kuroobi serves as one of Arlong’s officers.',
      it: 'Kuroobi serve come ufficiale di Arlong.',
    },
  },
  kuroobiSanjiOpponent: {
    character: 'sanji',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Kuroobi overpowers Sanji underwater but loses to him on land.',
      it: 'Kuroobi sopraffà Sanji sott’acqua ma viene sconfitto sulla terraferma.',
    },
  },
  kuroobiFisherTigerFormerCaptain: {
    character: 'fisher-tiger',
    type: { en: 'Former captain', it: 'Ex capitano' },
    summary: {
      en: 'He once sailed under Fisher Tiger alongside Arlong.',
      it: 'Un tempo navigava sotto Fisher Tiger insieme ad Arlong.',
    },
  },
  chewArlongCaptain: {
    character: 'arlong',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Chew serves as one of Arlong’s officers.',
      it: 'Pciù serve come ufficiale di Arlong.',
    },
  },
  chewUsoppOpponent: {
    character: 'usopp',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Usopp defeats Chew using fire and his hammer.',
      it: 'Usop sconfigge Pciù usando il fuoco e il martello.',
    },
  },
  smokerTashigiSubordinate: {
    character: 'tashigi',
    type: { en: 'Subordinate', it: 'Subordinata' },
    summary: {
      en: 'Tashigi serves under Smoker and follows him in pursuit of Luffy’s crew.',
      it: 'Tashigi serve sotto Smoker e lo segue nell’inseguimento della ciurma di Rufy.',
    },
  },
  smokerMonkeyDLuffyEnemyHeOwes: {
    character: 'monkey-d-luffy',
    type: { en: 'Enemy he owes', it: 'Nemico a cui deve la vita' },
    summary: {
      en: 'Luffy orders Zoro to rescue Smoker from drowning; Smoker lets the pirates leave that time.',
      it: 'Rufy ordina a Zoro di salvare Smoker dall’annegamento; Smoker lascia andare i pirati in quell’occasione.',
    },
  },
  tashigiSmokerSuperior: {
    character: 'smoker',
    type: { en: 'Superior', it: 'Superiore' },
    summary: {
      en: 'Tashigi follows Smoker from Loguetown to pursue Luffy’s crew.',
      it: 'Tashigi segue Smoker da Loguetown per inseguire la ciurma di Rufy.',
    },
  },
  tashigiRoronoaZoroOpposingSwordsman: {
    character: 'roronoa-zoro',
    type: { en: 'Opposing swordsman', it: 'Spadaccino avversario' },
    summary: {
      en: 'Tashigi challenges Zoro after discovering that he is a pirate.',
      it: 'Tashigi sfida Zoro dopo aver scoperto che è un pirata.',
    },
  },
  monkeyDDragonMonkeyDLuffySon: {
    character: 'monkey-d-luffy',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'Garp reveals that Dragon is Luffy’s father and the man who helped him escape Loguetown.',
      it: 'Garp rivela che Dragon è il padre di Rufy e l’uomo che lo ha aiutato a fuggire da Loguetown.',
    },
  },
  monkeyDDragonEmporioIvankovRevolutionaryComrade: {
    character: 'emporio-ivankov',
    type: { en: 'Revolutionary comrade', it: 'Compagno rivoluzionario' },
    summary: {
      en: 'Ivankov knows Dragon as a fellow revolutionary and resolves to help his son.',
      it: 'Ivankov conosce Dragon come compagno rivoluzionario e decide di aiutare suo figlio.',
    },
  },
  monkeyDDragonSaboRescuedRecruit: {
    character: 'sabo',
    type: { en: 'Rescued recruit', it: 'Recluta salvata' },
    summary: {
      en: 'Dragon rescues Sabo after the attack on his boat; Sabo joins the revolutionaries.',
      it: 'Dragon salva Sabo dopo l’attacco alla sua barca; Sabo si unisce ai rivoluzionari.',
    },
  },
  kobyMonkeyDLuffyRescuer: {
    character: 'monkey-d-luffy',
    type: { en: 'Rescuer', it: 'Soccorritore' },
    summary: {
      en: 'Luffy defeats Alvida and leaves with Koby, freeing him from her crew.',
      it: 'Rufy sconfigge Alvida e parte con Kobi, liberandolo dalla sua ciurma.',
    },
  },
  kobyHelmeppoFellowRecruit: {
    character: 'helmeppo',
    type: { en: 'Fellow recruit', it: 'Compagno di reclutamento' },
    summary: {
      en: 'Koby and Helmeppo train together in the Marines.',
      it: 'Kobi e Hermeppo si addestrano insieme nella Marina.',
    },
  },
  kobyMonkeyDGarpMentor: {
    character: 'monkey-d-garp',
    type: { en: 'Mentor', it: 'Mentore' },
    summary: {
      en: 'Garp trains Koby and Helmeppo as Marines.',
      it: 'Garp addestra Kobi e Hermeppo come marine.',
    },
  },
  kobyMonkeyDLuffyFriendOnTheOpposingSide: {
    character: 'monkey-d-luffy',
    type: {
      en: 'Friend on the opposing side',
      it: 'Amico su un fronte opposto',
    },
    summary: {
      en: 'Koby meets Luffy again as a Marine. They part expecting to be stronger at their next meeting.',
      it: 'Kobi ritrova Rufy da marine. Si salutano con l’intenzione di essere più forti al prossimo incontro.',
    },
  },
  kobyShanksRescuer: {
    character: 'shanks',
    type: { en: 'Rescuer', it: 'Soccorritore' },
    summary: {
      en: 'Shanks stops Sakazuki’s blow after Koby calls for the fighting to end.',
      it: 'Shanks ferma il colpo di Sakazuki dopo che Kobi chiede di porre fine ai combattimenti.',
    },
  },
  kobySakazukiHostility: {
    character: 'sakazuki',
    type: { en: 'Hostility', it: 'Ostilità' },
    summary: {
      en: 'Sakazuki tries to kill Koby for interrupting the fighting.',
      it: 'Sakazuki tenta di uccidere Kobi per aver interrotto i combattimenti.',
    },
  },
  goldRogerSilversRayleighFirstMate: {
    character: 'silvers-rayleigh',
    type: { en: 'First mate', it: 'Vicecapitano' },
    summary: {
      en: 'Rayleigh serves as Roger’s first mate until Roger disbands the crew before turning himself in.',
      it: 'Rayleigh è il vicecapitano di Roger fino a quando Roger scioglie la ciurma prima di consegnarsi.',
    },
  },
  goldRogerShanksFormerApprentice: {
    character: 'shanks',
    type: { en: 'Former apprentice', it: 'Ex apprendista' },
    summary: {
      en: 'Shanks sailed on Roger’s ship as an apprentice.',
      it: 'Shanks navigava sulla nave di Roger come apprendista.',
    },
  },
  goldRogerBuggyFormerApprentice: {
    character: 'buggy',
    type: { en: 'Former apprentice', it: 'Ex apprendista' },
    summary: {
      en: 'Buggy sailed on Roger’s ship as an apprentice alongside Shanks.',
      it: 'Bagy navigava sulla nave di Roger come apprendista insieme a Shanks.',
    },
  },
  goldRogerCrocusShipSDoctor: {
    character: 'crocus',
    type: { en: 'Ship’s doctor', it: 'Medico di bordo' },
    summary: {
      en: 'Crocus accompanies Roger on his final voyage as the crew’s doctor.',
      it: 'Crocus accompagna Roger nell’ultimo viaggio come medico della ciurma.',
    },
  },
  goldRogerPortgasDAceSon: {
    character: 'portgas-d-ace',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'Sengoku reveals that Ace is Roger’s son.',
      it: 'Sengoku rivela che Ace è il figlio di Roger.',
    },
  },
  goldRogerMonkeyDGarpRivalHeTrusts: {
    character: 'monkey-d-garp',
    type: { en: 'Rival he trusts', it: 'Rivale di cui si fida' },
    summary: {
      en: 'Roger asks Garp to protect his unborn child despite their history as enemies.',
      it: 'Roger chiede a Garp di proteggere il figlio non ancora nato nonostante siano stati nemici.',
    },
  },
} satisfies Record<string, Relationship>

/** Directed, dated selections; evidence in relationships.json and sources.json. */
export const eastBlueRelationships = {
  'monkey-d-luffy': [
    // Source-specific openings: chapter 1 introduces Shanks before Koby, while the
    // anime places that flashback at episode 4. Not anchors for the shared chapter
    // mapping.
    {
      episode: 4,
      chapter: 1,
      value: [retained.monkeyDLuffyShanksInspiration],
      source: 'manga',
    },
    {
      episode: 1,
      chapter: 2,
      value: [
        retained.monkeyDLuffyShanksInspiration,
        retained.monkeyDLuffyKobyFriend,
      ],
      source: 'manga',
    },
    {
      episode: 3,
      chapter: 7,
      value: [
        retained.monkeyDLuffyShanksInspiration,
        retained.monkeyDLuffyRoronoaZoroCrewmate,
        retained.monkeyDLuffyKobyFriend,
      ],
      source: 'manga',
    },
    {
      episode: 1,
      chapter: 2,
      value: [retained.monkeyDLuffyKobyFriend],
      source: 'anime',
    },
    {
      episode: 3,
      chapter: 7,
      value: [
        retained.monkeyDLuffyRoronoaZoroCrewmate,
        retained.monkeyDLuffyKobyFriend,
      ],
      source: 'anime',
    },
    {
      episode: 4,
      chapter: 1,
      value: [
        retained.monkeyDLuffyShanksInspiration,
        retained.monkeyDLuffyRoronoaZoroCrewmate,
        retained.monkeyDLuffyKobyFriend,
      ],
      source: 'anime',
    },
    {
      episode: 8,
      chapter: 21,
      value: [
        retained.monkeyDLuffyShanksInspiration,
        retained.monkeyDLuffyRoronoaZoroCrewmate,
        retained.monkeyDLuffyNamiTravellingCompanion,
        retained.monkeyDLuffyKobyFriend,
      ],
    },
    {
      episode: 17,
      chapter: 41,
      value: [
        retained.monkeyDLuffyShanksInspiration,
        retained.monkeyDLuffyRoronoaZoroCrewmate,
        retained.monkeyDLuffyNamiTravellingCompanion,
        retained.monkeyDLuffyUsoppCrewmate,
      ],
    },
    {
      episode: 30,
      chapter: 68,
      value: [
        retained.monkeyDLuffyShanksInspiration,
        retained.monkeyDLuffyRoronoaZoroCrewmate,
        retained.monkeyDLuffyNamiTravellingCompanion,
        retained.monkeyDLuffyUsoppCrewmate,
        retained.monkeyDLuffySanjiCook,
      ],
    },
    {
      episode: 43,
      chapter: 94,
      value: [
        retained.monkeyDLuffyShanksInspiration,
        retained.monkeyDLuffyRoronoaZoroCrewmate,
        retained.monkeyDLuffyNamiNavigator,
        retained.monkeyDLuffyUsoppCrewmate,
        retained.monkeyDLuffySanjiCook,
      ],
    },
    {
      episode: 95,
      chapter: 159,
      value: [
        retained.monkeyDLuffyShanksInspiration,
        retained.monkeyDLuffyPortgasDAceOlderBrother,
        retained.monkeyDLuffyRoronoaZoroCrewmate,
        retained.monkeyDLuffyNamiNavigator,
        retained.monkeyDLuffySanjiCook,
      ],
    },
    {
      episode: 236,
      chapter: 333,
      value: [
        retained.monkeyDLuffyShanksInspiration,
        retained.monkeyDLuffyPortgasDAceOlderBrother,
        retained.monkeyDLuffyRoronoaZoroCrewmate,
        retained.monkeyDLuffyNamiNavigator,
        retained.monkeyDLuffyUsoppFormerCrewmate,
      ],
    },
    // Garp's endpoint is 313/431; the training selection is filed at the 314/432
    // reunion.
    {
      episode: 314,
      chapter: 432,
      value: [
        retained.monkeyDLuffyShanksInspiration,
        retained.monkeyDLuffyPortgasDAceOlderBrother,
        retained.monkeyDLuffyMonkeyDGarpGrandfather,
        retained.monkeyDLuffyMonkeyDDragonFather,
        retained.monkeyDLuffyUsoppFormerCrewmate,
      ],
    },
    {
      episode: 323,
      chapter: 438,
      value: [
        retained.monkeyDLuffyShanksInspiration,
        retained.monkeyDLuffyPortgasDAceOlderBrother,
        retained.monkeyDLuffyMonkeyDGarpGrandfather,
        retained.monkeyDLuffyMonkeyDDragonFather,
        retained.monkeyDLuffyUsoppCrewmate,
      ],
    },
    {
      episode: 483,
      chapter: 574,
      value: [
        retained.monkeyDLuffyPortgasDAceLateOlderBrother,
        retained.monkeyDLuffyShanksInspiration,
        retained.monkeyDLuffyMonkeyDGarpGrandfather,
        retained.monkeyDLuffyMonkeyDDragonFather,
        retained.monkeyDLuffyUsoppCrewmate,
      ],
    },
    {
      episode: 497,
      chapter: 585,
      value: [
        retained.monkeyDLuffyPortgasDAceLateOlderBrother,
        retained.monkeyDLuffySaboSwornBrother,
        retained.monkeyDLuffyShanksInspiration,
        retained.monkeyDLuffyMonkeyDGarpGrandfather,
        retained.monkeyDLuffyMonkeyDDragonFather,
      ],
    },
    // Same chapter as Zoro/Mihawk 515/597, but a different page.
    {
      episode: 516,
      chapter: 597,
      value: [
        retained.monkeyDLuffySilversRayleighMentor,
        retained.monkeyDLuffyShanksInspiration,
        retained.monkeyDLuffyPortgasDAceLateOlderBrother,
        retained.monkeyDLuffySaboSwornBrother,
        retained.monkeyDLuffyRoronoaZoroCrewmate,
      ],
    },
    {
      episode: 594,
      chapter: 668,
      value: [
        retained.monkeyDLuffyTrafalgarLawAlliancePartner,
        retained.monkeyDLuffySilversRayleighMentor,
        retained.monkeyDLuffyShanksInspiration,
        retained.monkeyDLuffyPortgasDAceLateOlderBrother,
        retained.monkeyDLuffySaboSwornBrother,
      ],
    },
    {
      episode: 663,
      chapter: 731,
      value: [
        retained.monkeyDLuffySaboReunitedBrother,
        retained.monkeyDLuffyTrafalgarLawAlliancePartner,
        retained.monkeyDLuffySilversRayleighMentor,
        retained.monkeyDLuffyShanksInspiration,
        retained.monkeyDLuffyPortgasDAceLateOlderBrother,
      ],
    },
    {
      episode: 808,
      chapter: 844,
      value: [
        {
          character: 'sanji',
          type: { en: 'Departing cook', it: 'Cuoco in partenza' },
          summary: {
            en: 'Sanji attacks Luffy and tells him to leave; Luffy refuses to sail without him.',
            it: 'Sanji attacca Rufy e gli dice di andarsene; Rufy rifiuta di ripartire senza di lui.',
          },
        },
        retained.monkeyDLuffySaboReunitedBrother,
        retained.monkeyDLuffyTrafalgarLawAlliancePartner,
        retained.monkeyDLuffyShanksInspiration,
        retained.monkeyDLuffyPortgasDAceLateOlderBrother,
      ],
    },
    {
      episode: 825,
      chapter: 856,
      value: [
        retained.monkeyDLuffySanjiReconciledCrewmate,
        retained.monkeyDLuffySaboReunitedBrother,
        retained.monkeyDLuffyTrafalgarLawAlliancePartner,
        retained.monkeyDLuffyShanksInspiration,
        retained.monkeyDLuffyPortgasDAceLateOlderBrother,
      ],
    },
    {
      episode: 980,
      chapter: 976,
      value: [
        retained.monkeyDLuffyRoronoaZoroCrewmate,
        retained.monkeyDLuffyNamiNavigator,
        retained.monkeyDLuffySanjiReconciledCrewmate,
        {
          character: 'jinbe',
          type: { en: 'Helmsman', it: 'Timoniere' },
          summary: {
            en: 'Jinbe reaches Luffy in Wano and joins the crew as helmsman.',
            it: 'Jinbe raggiunge Rufy a Wano e si unisce alla ciurma come timoniere.',
          },
        },
        retained.monkeyDLuffyShanksInspiration,
      ],
    },
  ],
  'alvida': [
    {
      episode: 1,
      chapter: 2,
      value: [
        {
          character: 'koby',
          type: { en: 'Coerced subordinate', it: 'Subordinato costretto' },
          summary: {
            en: 'Alvida forces Koby to work aboard her ship.',
            it: 'Alvida costringe Kobi a lavorare sulla sua nave.',
          },
        },
      ],
    },
    {
      episode: 52,
      chapter: 99,
      value: [
        {
          character: 'buggy',
          type: { en: 'Ally', it: 'Alleato' },
          summary: {
            en: 'Alvida teams up with Buggy to pursue Luffy.',
            it: 'Alvida si allea con Bagy per inseguire Rufy.',
          },
        },
        {
          character: 'monkey-d-luffy',
          type: { en: 'Enemy', it: 'Nemico' },
          summary: {
            en: 'Alvida seeks revenge after Luffy defeats her.',
            it: 'Alvida cerca vendetta dopo che Rufy l’ha sconfitta.',
          },
        },
      ],
    },
  ],
  'roronoa-zoro': [
    {
      episode: 3,
      chapter: 7,
      value: [retained.roronoaZoroMonkeyDLuffyCaptain],
    },
    // Kuina's chapter-53 endpoint gates her; the manga opens without her until
    // 24/53. Source-specific, not an anchor for the shared chapter mapping.
    {
      episode: 19,
      chapter: 53,
      value: [
        retained.roronoaZoroMonkeyDLuffyCaptain,
        retained.roronoaZoroKuinaChildhoodRival,
      ],
      source: 'anime',
    },
    {
      episode: 24,
      chapter: 52,
      value: [
        retained.roronoaZoroMonkeyDLuffyCaptain,
        retained.roronoaZoroDraculeMihawkRivalToSurpass,
        retained.roronoaZoroKuinaChildhoodRival,
      ],
      source: 'anime',
    },
    {
      episode: 24,
      chapter: 52,
      value: [
        retained.roronoaZoroMonkeyDLuffyCaptain,
        retained.roronoaZoroDraculeMihawkRivalToSurpass,
      ],
      source: 'manga',
    },
    {
      episode: 24,
      chapter: 53,
      value: [
        retained.roronoaZoroMonkeyDLuffyCaptain,
        retained.roronoaZoroDraculeMihawkRivalToSurpass,
        retained.roronoaZoroKuinaChildhoodRival,
      ],
      source: 'manga',
    },
    {
      episode: 53,
      chapter: 100,
      value: [
        retained.roronoaZoroMonkeyDLuffyCaptain,
        retained.roronoaZoroDraculeMihawkRivalToSurpass,
        retained.roronoaZoroKuinaChildhoodRival,
        retained.roronoaZoroTashigiOpposingSwordswoman,
      ],
    },
    {
      episode: 377,
      chapter: 485,
      value: [
        retained.roronoaZoroMonkeyDLuffyCaptainHeProtects,
        retained.roronoaZoroDraculeMihawkRivalToSurpass,
        retained.roronoaZoroKuinaChildhoodRival,
        retained.roronoaZoroTashigiOpposingSwordswoman,
      ],
    },
    // Same chapter as Luffy/Rayleigh 516/597, but a different page.
    {
      episode: 515,
      chapter: 597,
      value: [
        retained.roronoaZoroMonkeyDLuffyCaptainHeProtects,
        {
          character: 'dracule-mihawk',
          type: { en: 'Mentor and rival', it: 'Mentore e rivale' },
          summary: {
            en: 'Zoro asks Mihawk to train him so he can help Luffy; Mihawk accepts.',
            it: 'Zoro chiede a Mihawk di addestrarlo per poter aiutare Rufy; Mihawk accetta.',
          },
        },
        retained.roronoaZoroKuinaChildhoodRival,
        retained.roronoaZoroTashigiOpposingSwordswoman,
        {
          character: 'perona',
          type: { en: 'Host and helper', it: 'Ospite e aiutante' },
          summary: {
            en: 'Perona tends Zoro’s wounds on Kuraigana while he seeks Mihawk’s training.',
            it: 'Perona cura le ferite di Zoro a Kuraigana mentre lui cerca l’addestramento di Mihawk.',
          },
        },
      ],
    },
  ],
  'helmeppo': [
    { episode: 2, chapter: 4, value: [retained.helmeppoMorganFather] },
    {
      episode: 69,
      chapter: 119,
      value: [
        retained.helmeppoKobyFellowRecruit,
        retained.helmeppoMorganFather,
      ],
    },
    {
      episode: 314,
      chapter: 432,
      value: [
        retained.helmeppoKobyFellowRecruit,
        {
          character: 'monkey-d-garp',
          type: { en: 'Mentor', it: 'Mentore' },
          summary: {
            en: 'Garp takes Helmeppo and Koby under his supervision and trains them.',
            it: 'Garp prende Hermeppo e Kobi sotto la propria supervisione e li addestra.',
          },
        },
      ],
    },
    {
      episode: 1122,
      chapter: 1088,
      value: [
        {
          character: 'koby',
          type: { en: 'Comrade he rescues', it: 'Compagno che soccorre' },
          summary: {
            en: 'Helmeppo catches Koby after Honesty Impact and helps him escape Hachinosu.',
            it: 'Hermeppo recupera Kobi dopo Honesty Impact e lo aiuta a fuggire da Hachinosu.',
          },
        },
        {
          character: 'monkey-d-garp',
          type: { en: 'Mentor', it: 'Mentore' },
          summary: {
            en: 'Garp stays on Hachinosu while Helmeppo and the other young Marines escape.',
            it: 'Garp resta a Hachinosu mentre Hermeppo e gli altri giovani marine fuggono.',
          },
        },
      ],
    },
  ],
  'morgan': [
    {
      episode: 3,
      chapter: 7,
      value: [
        {
          character: 'helmeppo',
          type: { en: 'Son', it: 'Figlio' },
          summary: {
            en: 'Morgan is Helmeppo’s father and lets him abuse the townspeople.',
            it: 'Morgan è il padre di Hermeppo e gli permette di maltrattare gli abitanti.',
          },
        },
      ],
    },
  ],
  'rika': [
    {
      episode: 3,
      chapter: 7,
      value: [
        {
          character: 'roronoa-zoro',
          type: { en: 'Protector', it: 'Protettore' },
          summary: {
            en: 'Zoro protects Rika from Helmeppo’s wolf; she brings him rice balls while he is imprisoned.',
            it: 'Zoro protegge Rica dal lupo di Hermeppo; lei gli porta delle polpette di riso mentre è prigioniero.',
          },
        },
        {
          character: 'monkey-d-luffy',
          type: { en: 'Rescuer', it: 'Soccorritore' },
          summary: {
            en: 'Rika thanks Luffy after Morgan’s defeat.',
            it: 'Rica ringrazia Rufy dopo la sconfitta di Morgan.',
          },
        },
      ],
    },
  ],
  'shanks': [
    {
      episode: 4,
      chapter: 1,
      value: [
        retained.shanksMonkeyDLuffyYoungPirateHeInspires,
        retained.shanksBennBeckmanFirstMate,
      ],
    },
    {
      episode: 45,
      chapter: 96,
      value: [
        retained.shanksMonkeyDLuffyYoungPirateHeInspires,
        retained.shanksBennBeckmanFirstMate,
        retained.shanksDraculeMihawkFormerRival,
        retained.shanksBuggyFormerFellowApprentice,
      ],
    },
    {
      episode: 316,
      chapter: 434,
      value: [
        retained.shanksMonkeyDLuffyYoungPirateHeInspires,
        retained.shanksBennBeckmanFirstMate,
        retained.shanksDraculeMihawkFormerRival,
        retained.shanksBuggyFormerFellowApprentice,
        {
          character: 'edward-newgate',
          type: { en: 'Rival captain', it: 'Capitano rivale' },
          summary: {
            en: 'Shanks asks Whitebeard to stop Ace pursuing Teach; their disagreement ends in a clash.',
            it: 'Shanks chiede a Barbabianca di fermare Ace nella caccia a Teach; il dissenso sfocia in uno scontro.',
          },
        },
      ],
    },
    {
      episode: 400,
      chapter: 506,
      value: [
        retained.shanksMonkeyDLuffyYoungPirateHeInspires,
        retained.shanksBennBeckmanFirstMate,
        retained.shanksDraculeMihawkFormerRival,
        retained.shanksBuggyFormerFellowApprentice,
        {
          character: 'gold-roger',
          type: { en: 'Former captain', it: 'Ex capitano' },
          summary: {
            en: 'Shanks served as an apprentice aboard Roger’s ship.',
            it: 'Shanks era apprendista sulla nave di Roger.',
          },
        },
      ],
    },
    {
      episode: 489,
      chapter: 580,
      value: [
        retained.shanksMonkeyDLuffyYoungPirateHeInspires,
        retained.shanksBennBeckmanFirstMate,
        retained.shanksDraculeMihawkFormerRival,
        retained.shanksBuggyFormerFellowApprentice,
        retained.shanksMarshallDTeachDangerousRival,
      ],
    },
    {
      episode: 1082,
      chapter: 1054,
      value: [
        retained.shanksMonkeyDLuffyPirateHeWatches,
        retained.shanksBennBeckmanFirstMate,
        retained.shanksDraculeMihawkFormerRival,
        retained.shanksBuggyFormerFellowApprentice,
        retained.shanksMarshallDTeachDangerousRival,
      ],
    },
    {
      episode: 1112,
      chapter: 1079,
      value: [
        retained.shanksMonkeyDLuffyPirateHeWatches,
        retained.shanksBennBeckmanFirstMate,
        retained.shanksDraculeMihawkFormerRival,
        retained.shanksBuggyFormerFellowApprentice,
        {
          character: 'eustass-kid',
          type: { en: 'Enemy', it: 'Nemico' },
          summary: {
            en: 'Shanks defeats Kid to stop his attack on the allied fleet.',
            it: 'Shanks sconfigge Kidd per fermare il suo attacco alla flotta alleata.',
          },
        },
      ],
    },
    // The confrontation does not claim Bartolomeo died.
    {
      episode: 1156,
      chapter: 1126,
      value: [
        retained.shanksMonkeyDLuffyPirateHeWatches,
        retained.shanksBennBeckmanFirstMate,
        retained.shanksDraculeMihawkFormerRival,
        {
          character: 'yasopp',
          type: { en: 'Sniper', it: 'Cecchino' },
          summary: {
            en: 'Yasopp sinks Bartolomeo’s ship after Shanks tests Bartolomeo’s loyalty to Luffy and lets him leave.',
            it: 'Yasop affonda la nave di Bartolomeo dopo che Shanks ne ha messo alla prova la lealtà a Rufy e lo ha lasciato andare.',
          },
        },
        {
          character: 'bartolomeo',
          type: { en: 'Enemy he tests', it: 'Nemico che mette alla prova' },
          summary: {
            en: 'Shanks confronts Bartolomeo for burning his flag and tests his loyalty with fake poison.',
            it: 'Shanks affronta Bartolomeo per aver bruciato la sua bandiera e ne mette alla prova la lealtà con del falso veleno.',
          },
        },
      ],
    },
    // Chapter 1137 establishes Shamrock's father, 1138 the twins; shared at
    // 1168/1138.
    {
      episode: 1168,
      chapter: 1138,
      value: [
        retained.shanksMonkeyDLuffyPirateHeWatches,
        retained.shanksBennBeckmanFirstMate,
        retained.shanksDraculeMihawkFormerRival,
        {
          character: 'figarland-shamrock',
          type: { en: 'Older twin brother', it: 'Fratello gemello maggiore' },
          summary: {
            en: 'Shamrock identifies Shanks as his estranged younger twin brother.',
            it: 'Shamrock indica Shanks come il fratello gemello minore da cui si è separato.',
          },
        },
        {
          character: 'figarland-garling',
          type: { en: 'Father', it: 'Padre' },
          summary: {
            en: 'Shanks is Garling’s son and Shamrock’s twin brother.',
            it: 'Shanks è figlio di Garling e fratello gemello di Shamrock.',
          },
        },
      ],
    },
  ],
  'makino': [
    {
      episode: 4,
      chapter: 1,
      value: [
        {
          character: 'monkey-d-luffy',
          type: { en: 'Childhood friend', it: 'Amico d’infanzia' },
          summary: {
            en: 'Makino cares for Luffy in his home village and worries when Higuma takes him away.',
            it: 'Makino si prende cura di Rufy nel suo villaggio e si preoccupa quando Higuma lo porta via.',
          },
        },
      ],
    },
  ],
  'benn-beckman': [
    {
      episode: 4,
      chapter: 1,
      value: [
        {
          character: 'shanks',
          type: { en: 'Captain', it: 'Capitano' },
          summary: {
            en: 'Beckman serves under Shanks and helps confront Higuma’s bandits.',
            it: 'Beckman serve sotto Shanks e contribuisce ad affrontare i banditi di Higuma.',
          },
        },
      ],
    },
  ],
  'lucky-roux': [
    {
      episode: 4,
      chapter: 1,
      value: [
        {
          character: 'shanks',
          type: { en: 'Captain', it: 'Capitano' },
          summary: {
            en: 'Roux fights alongside Shanks when Higuma’s bandits threaten Luffy.',
            it: 'Roux combatte al fianco di Shanks quando i banditi di Higuma minacciano Rufy.',
          },
        },
      ],
    },
  ],
  'yasopp': [
    { episode: 9, chapter: 25, value: [retained.yasoppUsoppSon] },
    {
      episode: 1156,
      chapter: 1126,
      value: [
        retained.yasoppUsoppSon,
        {
          character: 'shanks',
          type: { en: 'Captain', it: 'Capitano' },
          summary: {
            en: 'Yasopp serves as Shanks’s sniper and sinks Bartolomeo’s ship after Shanks lets it depart.',
            it: 'Yasop è il cecchino di Shanks e affonda la nave di Bartolomeo dopo che Shanks l’ha lasciata partire.',
          },
        },
        {
          character: 'bartolomeo',
          type: { en: 'Enemy', it: 'Nemico' },
          summary: {
            en: 'Yasopp fires on Bartolomeo’s departing ship and destroys it.',
            it: 'Yasop spara alla nave di Bartolomeo in partenza e la distrugge.',
          },
        },
      ],
    },
  ],
  'higuma': [
    {
      episode: 4,
      chapter: 1,
      value: [
        {
          character: 'shanks',
          type: { en: 'Enemy', it: 'Nemico' },
          summary: {
            en: 'Higuma threatens Shanks and later uses Luffy as a hostage to escape his crew.',
            it: 'Higuma minaccia Shanks e poi prende Rufy in ostaggio per sfuggire alla sua ciurma.',
          },
        },
        {
          character: 'monkey-d-luffy',
          type: { en: 'Hostage', it: 'Ostaggio' },
          summary: {
            en: 'Higuma kidnaps Luffy and throws him into the sea.',
            it: 'Higuma rapisce Rufy e lo getta in mare.',
          },
        },
      ],
    },
  ],
  'buggy': [
    {
      episode: 8,
      chapter: 21,
      value: [
        retained.buggyMonkeyDLuffyEnemy,
        retained.buggyShanksFormerFellowApprentice,
      ],
    },
    {
      episode: 52,
      chapter: 99,
      value: [
        retained.buggyMonkeyDLuffyEnemy,
        retained.buggyShanksFormerFellowApprentice,
        retained.buggyAlvidaAlly,
      ],
    },
    {
      episode: 489,
      chapter: 580,
      value: [
        {
          character: 'monkey-d-luffy',
          type: { en: 'Temporary ally', it: 'Alleato temporaneo' },
          summary: {
            en: 'Buggy cooperates with Luffy during their escape from Impel Down and the war.',
            it: 'Bagy collabora con Rufy durante la fuga da Impel Down e la guerra.',
          },
        },
        retained.buggyAlvidaAlly,
        retained.buggyShanksFormerFellowApprentice,
      ],
    },
    {
      episode: 1086,
      chapter: 1058,
      value: [
        {
          character: 'crocodile',
          type: {
            en: 'Creditor and controller',
            it: 'Creditore che lo controlla',
          },
          summary: {
            en: 'Crocodile demands repayment from Buggy and uses him as the organisation’s figurehead.',
            it: 'Crocodile esige il rimborso da Bagy e lo usa come prestanome dell’organizzazione.',
          },
        },
        {
          character: 'dracule-mihawk',
          type: {
            en: 'Partner who controls him',
            it: 'Socio che lo controlla',
          },
          summary: {
            en: 'Mihawk lets Buggy take the public leadership while keeping him under control.',
            it: 'Mihawk lascia a Bagy il ruolo di capo pubblico tenendolo sotto controllo.',
          },
        },
        retained.buggyAlvidaAlly,
        retained.buggyShanksFormerFellowApprentice,
      ],
    },
    {
      episode: 1116,
      chapter: 1082,
      value: [
        {
          character: 'crocodile',
          type: { en: 'Opposing partner', it: 'Socio in disaccordo' },
          summary: {
            en: 'Crocodile rejects Buggy’s call to compete for the One Piece.',
            it: 'Crocodile respinge l’invito di Bagy a competere per lo One Piece.',
          },
        },
        {
          character: 'dracule-mihawk',
          type: { en: 'Opposing partner', it: 'Socio in disaccordo' },
          summary: {
            en: 'Mihawk opposes Buggy’s plan to challenge the other Emperors for the One Piece.',
            it: 'Mihawk si oppone al piano di Bagy di sfidare gli altri Imperatori per lo One Piece.',
          },
        },
        {
          character: 'shanks',
          type: {
            en: 'Former apprentice and rival',
            it: 'Ex compagno e rivale',
          },
          summary: {
            en: 'Buggy recalls refusing to follow Shanks after Roger’s death and declares his own ambition to find the One Piece.',
            it: 'Bagy ricorda di aver rifiutato di seguire Shanks dopo la morte di Roger e dichiara di voler trovare lo One Piece.',
          },
        },
        {
          character: 'gold-roger',
          type: { en: 'Former captain', it: 'Ex capitano' },
          summary: {
            en: 'Buggy served as an apprentice on Roger’s ship.',
            it: 'Bagy era apprendista sulla nave di Roger.',
          },
        },
      ],
    },
  ],
  'nami': [
    {
      episode: 8,
      chapter: 21,
      value: [retained.namiMonkeyDLuffyTemporaryAlly],
    },
    {
      episode: 36,
      chapter: 81,
      value: [
        retained.namiBellMereAdoptiveMother,
        retained.namiNojikoAdoptiveSister,
        {
          character: 'arlong',
          type: { en: 'Captor', it: 'Aguzzino' },
          summary: {
            en: 'Arlong kills Bell-mère and forces Nami to draw maps while she tries to buy her village’s freedom.',
            it: 'Arlong uccide Bellmer e costringe Nami a disegnare mappe mentre lei cerca di comprare la libertà del villaggio.',
          },
        },
        retained.namiMonkeyDLuffyTemporaryAlly,
      ],
    },
    {
      episode: 43,
      chapter: 94,
      value: [
        retained.namiMonkeyDLuffyCaptain,
        retained.namiBellMereAdoptiveMother,
        retained.namiNojikoAdoptiveSister,
        retained.namiArlongFormerCaptor,
      ],
    },
    {
      episode: 118,
      chapter: 191,
      value: [
        retained.namiMonkeyDLuffyCaptain,
        retained.namiBellMereAdoptiveMother,
        retained.namiNojikoAdoptiveSister,
        retained.namiArlongFormerCaptor,
        retained.namiUsoppCrewmateAndWeaponMaker,
      ],
    },
    // Her own forgiveness of Jinbe; none of Hatchan is inferred.
    {
      episode: 547,
      chapter: 627,
      value: [
        retained.namiMonkeyDLuffyCaptain,
        retained.namiBellMereAdoptiveMother,
        retained.namiNojikoAdoptiveSister,
        retained.namiUsoppCrewmateAndWeaponMaker,
        {
          character: 'jinbe',
          type: { en: 'Ally she forgives', it: 'Alleato che perdona' },
          summary: {
            en: 'Nami tells Jinbe that she does not blame him for Arlong’s crimes.',
            it: 'Nami dice a Jinbe che non lo incolpa dei crimini di Arlong.',
          },
        },
      ],
    },
    // Zeus is first selected at the permanent partnership; no earlier servant
    // state is authored.
    {
      episode: 1038,
      chapter: 1016,
      value: [
        retained.namiMonkeyDLuffyCaptain,
        retained.namiBellMereAdoptiveMother,
        retained.namiNojikoAdoptiveSister,
        retained.namiUsoppCrewmateAndWeaponMaker,
        {
          character: 'zeus',
          type: { en: 'Partner', it: 'Compagno' },
          summary: {
            en: 'Zeus lives in Nami’s Clima-Tact and helps her defeat Ulti.',
            it: 'Zeus vive nel Clima-Tact di Nami e la aiuta a sconfiggere Ulti.',
          },
        },
      ],
    },
  ],
  'mohji': [
    // Endpoint gate: chapter 21 (as for Richie and Cabaji).
    {
      episode: 6,
      chapter: 21,
      value: [
        {
          character: 'buggy',
          type: { en: 'Captain', it: 'Capitano' },
          summary: {
            en: 'Buggy sends Mohji to hunt down Zoro.',
            it: 'Bagy manda Moji a dare la caccia a Zoro.',
          },
        },
        {
          character: 'richie',
          type: { en: 'Animal partner', it: 'Compagno animale' },
          summary: {
            en: 'Mohji rides Richie and directs his attacks.',
            it: 'Moji cavalca Richi e dirige i suoi attacchi.',
          },
        },
      ],
    },
  ],
  'chouchou': [
    {
      episode: 8,
      chapter: 21,
      value: [
        {
          character: 'monkey-d-luffy',
          type: { en: 'Protector', it: 'Protettore' },
          summary: {
            en: 'Luffy defeats Mohji and Richie and brings Chouchou the food saved from his shop.',
            it: 'Rufy sconfigge Moji e Richi e porta a Shushu il cibo salvato dal negozio.',
          },
        },
        {
          character: 'boodle',
          type: { en: 'Caretaker', it: 'Persona che se ne prende cura' },
          summary: {
            en: 'Boodle looks after Chouchou after the death of his owner.',
            it: 'Barboncino si prende cura di Shushu dopo la morte del suo padrone.',
          },
        },
      ],
    },
  ],
  'richie': [
    // Endpoint gate: chapter 21 (as for Mohji and Cabaji).
    {
      episode: 7,
      chapter: 21,
      value: [
        {
          character: 'mohji',
          type: { en: 'Trainer', it: 'Domatore' },
          summary: {
            en: 'Richie carries Mohji and follows his orders in Orange Town.',
            it: 'Richi trasporta Moji e segue i suoi ordini a Orange Town.',
          },
        },
        {
          character: 'monkey-d-luffy',
          type: { en: 'Opponent', it: 'Avversario' },
          summary: {
            en: 'Luffy defeats Richie after the lion destroys Chouchou’s shop.',
            it: 'Rufy sconfigge Richi dopo che il leone ha distrutto il negozio di Shushu.',
          },
        },
      ],
    },
  ],
  'cabaji': [
    // Endpoint gate: chapter 21 (as for Mohji and Richie).
    {
      episode: 7,
      chapter: 21,
      value: [
        {
          character: 'buggy',
          type: { en: 'Captain', it: 'Capitano' },
          summary: {
            en: 'Cabaji fights on Buggy’s behalf in Orange Town.',
            it: 'Kabaji combatte per Bagy a Orange Town.',
          },
        },
        {
          character: 'roronoa-zoro',
          type: { en: 'Opponent', it: 'Avversario' },
          summary: {
            en: 'Cabaji targets Zoro’s wound but loses their duel.',
            it: 'Kabaji prende di mira la ferita di Zoro ma perde il duello.',
          },
        },
      ],
    },
  ],
  'boodle': [
    {
      episode: 8,
      chapter: 21,
      value: [
        {
          character: 'chouchou',
          type: { en: 'Dog he cares for', it: 'Cane di cui si prende cura' },
          summary: {
            en: 'Boodle watches over Chouchou and explains why he guards the shop.',
            it: 'Barboncino si occupa di Shushu e spiega perché sorveglia il negozio.',
          },
        },
        {
          character: 'monkey-d-luffy',
          type: { en: 'Liberator', it: 'Liberatore' },
          summary: {
            en: 'Boodle thanks Luffy after Buggy is driven out of town.',
            it: 'Barboncino ringrazia Rufy dopo che Bagy è stato cacciato dalla città.',
          },
        },
      ],
    },
  ],
  'usopp': [
    {
      episode: 9,
      chapter: 25,
      value: [
        retained.usoppKayaFriend,
        retained.usoppYasoppFather,
        retained.usoppNinjinPiimanAndTamanegiYoungFollowers,
      ],
    },
    {
      episode: 17,
      chapter: 41,
      value: [
        retained.usoppMonkeyDLuffyCaptain,
        retained.usoppKayaFriend,
        retained.usoppYasoppFather,
        retained.usoppNinjinPiimanAndTamanegiYoungFollowers,
      ],
    },
    {
      episode: 72,
      chapter: 117,
      value: [
        retained.usoppMonkeyDLuffyCaptain,
        retained.usoppKayaFriend,
        retained.usoppYasoppFather,
        retained.usoppBrogyInspiration,
        retained.usoppDorryInspiration,
      ],
    },
    {
      episode: 236,
      chapter: 333,
      value: [
        {
          character: 'monkey-d-luffy',
          type: { en: 'Former captain', it: 'Ex capitano' },
          summary: {
            en: 'Usopp leaves the crew over the decision to replace their ship and loses a duel with Luffy.',
            it: 'Usop lascia la ciurma per la decisione di sostituire la nave e perde un duello contro Rufy.',
          },
        },
        retained.usoppKayaFriend,
        retained.usoppYasoppFather,
        retained.usoppBrogyInspiration,
        retained.usoppDorryInspiration,
      ],
    },
    // Duel resolved at 236/333, apology at 323/438.
    {
      episode: 323,
      chapter: 438,
      value: [
        retained.usoppMonkeyDLuffyCaptain,
        retained.usoppKayaFriend,
        retained.usoppYasoppFather,
        retained.usoppBrogyInspiration,
        retained.usoppDorryInspiration,
      ],
    },
    {
      episode: 1156,
      chapter: 1126,
      value: [
        retained.usoppMonkeyDLuffyCaptain,
        retained.usoppKayaFriend,
        retained.usoppYasoppFather,
        {
          character: 'brogy',
          type: { en: 'Giant ally', it: 'Alleato gigante' },
          summary: {
            en: 'Usopp sails toward Elbaph with Brogy after the giants help the crew escape Egghead.',
            it: 'Usop naviga verso Elbaf con Brogi dopo che i giganti hanno aiutato la ciurma a fuggire da Egghead.',
          },
        },
        {
          character: 'dorry',
          type: { en: 'Giant ally', it: 'Alleato gigante' },
          summary: {
            en: 'Usopp travels with Dorry and Brogy aboard the giants’ ship after Egghead.',
            it: 'Usop viaggia con Dori e Brogi sulla nave dei giganti dopo Egghead.',
          },
        },
      ],
    },
  ],
  'kaya': [
    {
      episode: 13,
      chapter: 31,
      value: [
        {
          character: 'usopp',
          type: { en: 'Friend', it: 'Amico' },
          summary: {
            en: 'Usopp’s stories comfort Kaya; Merry confirms his warning about Kuro.',
            it: 'Le storie di Usop confortano Kaya; Merry conferma il suo avvertimento su Kuro.',
          },
        },
        {
          character: 'kuro',
          type: { en: 'Treacherous butler', it: 'Maggiordomo traditore' },
          summary: {
            en: 'Kaya learns that her butler Kuro plans to kill her for her fortune.',
            it: 'Kaya scopre che il maggiordomo Kuro vuole ucciderla per impadronirsi del patrimonio.',
          },
        },
        {
          character: 'merry',
          type: { en: 'Loyal servant', it: 'Servitore fedele' },
          summary: {
            en: 'Merry survives Kuro’s attack and warns Kaya about his plan.',
            it: 'Merry sopravvive all’aggressione di Kuro e avverte Kaya del suo piano.',
          },
        },
      ],
    },
  ],
  'kuro': [
    {
      episode: 13,
      chapter: 31,
      value: [
        {
          character: 'kaya',
          type: { en: 'Intended victim', it: 'Vittima designata' },
          summary: {
            en: 'Kuro works as Kaya’s butler while planning to steal her inheritance.',
            it: 'Kuro lavora come maggiordomo di Kaya mentre progetta di rubarle l’eredità.',
          },
        },
        {
          character: 'jango',
          type: { en: 'Accomplice', it: 'Complice' },
          summary: {
            en: 'Kuro orders Jango to use hypnosis to make Kaya sign a will.',
            it: 'Kuro ordina a Jango di usare l’ipnosi per far firmare un testamento a Kaya.',
          },
        },
      ],
    },
  ],
  'jango': [
    {
      episode: 13,
      chapter: 31,
      value: [
        {
          character: 'kuro',
          type: { en: 'Former captain', it: 'Ex capitano' },
          summary: {
            en: 'Jango carries out Kuro’s plan to seize Kaya’s fortune.',
            it: 'Jango esegue il piano di Kuro per impadronirsi del patrimonio di Kaya.',
          },
        },
        {
          character: 'kaya',
          type: { en: 'Intended victim', it: 'Vittima designata' },
          summary: {
            en: 'Jango is ordered to hypnotise Kaya into signing her fortune over to Kuro.',
            it: 'Jango riceve l’ordine di ipnotizzare Kaya perché lasci il patrimonio a Kuro.',
          },
        },
      ],
    },
    {
      episode: 130,
      chapter: 217,
      value: [
        {
          character: 'fullbody',
          type: { en: 'Marine partner', it: 'Compagno nella Marina' },
          summary: {
            en: 'Jango and Fullbody serve together under Hina after becoming friends.',
            it: 'Jango e Fullbody servono insieme sotto Hina dopo essere diventati amici.',
          },
        },
        retained.jangoHinaSuperior,
      ],
    },
  ],
  'merry': [
    {
      episode: 13,
      chapter: 31,
      value: [
        {
          character: 'kaya',
          type: { en: 'Employer', it: 'Datore di lavoro' },
          summary: {
            en: 'Merry serves Kaya and warns her that Kuro is plotting against her.',
            it: 'Merry serve Kaya e la avverte che Kuro sta complottando contro di lei.',
          },
        },
        {
          character: 'kuro',
          type: { en: 'Attacker', it: 'Aggressore' },
          summary: {
            en: 'Kuro attacks Merry when he no longer needs to hide his plan.',
            it: 'Kuro aggredisce Merry quando non ha più bisogno di nascondere il piano.',
          },
        },
      ],
    },
  ],
  'ninjin-piiman-and-tamanegi': [
    {
      episode: 17,
      chapter: 41,
      value: [
        {
          character: 'usopp',
          type: { en: 'Captain and friend', it: 'Capitano e amico' },
          summary: {
            en: 'The children help Usopp protect Kaya and say goodbye when he leaves to become a pirate.',
            it: 'I bambini aiutano Usop a proteggere Kaya e lo salutano quando parte per diventare un pirata.',
          },
        },
        {
          character: 'kaya',
          type: { en: 'Person they protect', it: 'Persona che proteggono' },
          summary: {
            en: 'The children lead Kaya through the forest to keep her away from Jango.',
            it: 'I bambini accompagnano Kaya nella foresta per sottrarla a Jango.',
          },
        },
      ],
    },
  ],
  'buchi': [
    {
      episode: 14,
      chapter: 33,
      value: [
        {
          character: 'sham',
          type: { en: 'Fighting partner', it: 'Compagno di combattimento' },
          summary: {
            en: 'Sham fights alongside him against Zoro as one of the Nyaban Brothers.',
            it: 'Sham combatte al suo fianco contro Zoro come membro dei Fratelli Nyaban.',
          },
        },
        retained.buchiKuroCaptain,
        retained.buchiRoronoaZoroOpponent,
      ],
    },
  ],
  'sham': [
    {
      episode: 14,
      chapter: 33,
      value: [
        {
          character: 'buchi',
          type: { en: 'Fighting partner', it: 'Compagno di combattimento' },
          summary: {
            en: 'Buchi fights alongside him against Zoro as one of the Nyaban Brothers.',
            it: 'Buchi combatte al suo fianco contro Zoro come membro dei Fratelli Nyaban.',
          },
        },
        retained.buchiKuroCaptain,
        retained.buchiRoronoaZoroOpponent,
      ],
    },
  ],
  'gaimon': [
    {
      episode: 18,
      chapter: 22,
      value: [
        {
          character: 'monkey-d-luffy',
          type: { en: 'Friend', it: 'Amico' },
          summary: {
            en: 'Luffy checks the clifftop treasure chests for Gaimon and offers him a place in his crew.',
            it: 'Rufy controlla per Gaimon i forzieri sulla scogliera e gli offre un posto nella ciurma.',
          },
        },
      ],
    },
  ],
  'kuina': [
    // Endpoint gate: chapter 53.
    {
      episode: 19,
      chapter: 53,
      value: [
        {
          character: 'roronoa-zoro',
          type: { en: 'Childhood rival', it: 'Rivale d’infanzia' },
          summary: {
            en: 'Kuina and Zoro promise that one of them will become the greatest swordsman.',
            it: 'Kuina e Zoro promettono che uno di loro diventerà il più grande spadaccino.',
          },
        },
      ],
    },
  ],
  'johnny': [
    {
      episode: 20,
      chapter: 44,
      value: [
        {
          character: 'yosaku',
          type: {
            en: 'Bounty-hunting partner',
            it: 'Compagno cacciatore di taglie',
          },
          summary: {
            en: 'Yosaku works with him as a bounty hunter.',
            it: 'Yosaku lavora con lui come cacciatore di taglie.',
          },
        },
        retained.johnnyRoronoaZoroFormerPartner,
        retained.johnnyNamiRescuer,
      ],
    },
  ],
  'yosaku': [
    {
      episode: 20,
      chapter: 44,
      value: [
        {
          character: 'johnny',
          type: {
            en: 'Bounty-hunting partner',
            it: 'Compagno cacciatore di taglie',
          },
          summary: {
            en: 'Johnny works with him as a bounty hunter.',
            it: 'Johnny lavora con lui come cacciatore di taglie.',
          },
        },
        retained.johnnyRoronoaZoroFormerPartner,
        retained.johnnyNamiRescuer,
      ],
    },
  ],
  'sanji': [
    { episode: 26, chapter: 58, value: [retained.sanjiZeffMentorAndRescuer] },
    {
      episode: 30,
      chapter: 68,
      value: [
        retained.sanjiZeffMentorAndRescuer,
        retained.sanjiMonkeyDLuffyCaptain,
      ],
    },
    {
      episode: 804,
      chapter: 841,
      value: [
        retained.sanjiZeffMentorAndRescuer,
        retained.sanjiMonkeyDLuffyCaptain,
        retained.sanjiVinsmokeReijuOlderSister,
        retained.sanjiVinsmokeJudgeEstrangedFather,
        retained.sanjiCharlottePuddingArrangedFiancE,
      ],
    },
    // Rejection, overheard murder plot, reconciliation, wedding turn and farewell
    // are separate reached states.
    {
      episode: 808,
      chapter: 844,
      value: [
        retained.sanjiMonkeyDLuffyCaptainHeTurnsAway,
        retained.sanjiZeffMentorAndRescuer,
        retained.sanjiVinsmokeReijuOlderSister,
        retained.sanjiVinsmokeJudgeEstrangedFather,
        retained.sanjiCharlottePuddingArrangedFiancE,
      ],
    },
    {
      episode: 817,
      chapter: 851,
      value: [
        retained.sanjiMonkeyDLuffyCaptainHeTurnsAway,
        retained.sanjiZeffMentorAndRescuer,
        retained.sanjiVinsmokeReijuOlderSister,
        retained.sanjiVinsmokeJudgeEstrangedFather,
        retained.sanjiCharlottePuddingWouldBeKiller,
      ],
    },
    {
      episode: 825,
      chapter: 856,
      value: [
        retained.sanjiMonkeyDLuffyCaptainHeReturnsTo,
        retained.sanjiZeffMentorAndRescuer,
        retained.sanjiVinsmokeReijuOlderSister,
        retained.sanjiVinsmokeJudgeEstrangedFather,
        retained.sanjiCharlottePuddingWouldBeKiller,
      ],
    },
    {
      episode: 832,
      chapter: 862,
      value: [
        retained.sanjiMonkeyDLuffyCaptainHeReturnsTo,
        retained.sanjiZeffMentorAndRescuer,
        retained.sanjiVinsmokeReijuOlderSister,
        retained.sanjiVinsmokeJudgeEstrangedFather,
        {
          character: 'charlotte-pudding',
          type: { en: 'Wedding partner', it: 'Compagna al matrimonio' },
          summary: {
            en: 'Sanji’s sincere compliment about Pudding’s third eye leaves her unable to shoot him.',
            it: 'Il complimento sincero di Sanji sul terzo occhio di Pudding le impedisce di sparargli.',
          },
        },
      ],
    },
    {
      episode: 877,
      chapter: 902,
      value: [
        retained.sanjiMonkeyDLuffyCaptainHeReturnsTo,
        retained.sanjiZeffMentorAndRescuer,
        retained.sanjiVinsmokeReijuOlderSister,
        retained.sanjiVinsmokeJudgeEstrangedFather,
        retained.sanjiCharlottePuddingAllyHePartsFrom,
      ],
    },
    // Pudding's farewell reports her removing his memory; it does not imply he
    // remembers it.
    {
      episode: 1057,
      chapter: 1031,
      value: [
        retained.sanjiMonkeyDLuffyCaptainHeReturnsTo,
        retained.sanjiZeffMentorAndRescuer,
        retained.sanjiVinsmokeReijuOlderSister,
        retained.sanjiCharlottePuddingAllyHePartsFrom,
        {
          character: 'roronoa-zoro',
          type: { en: 'Comrade he trusts', it: 'Compagno di cui si fida' },
          summary: {
            en: 'Sanji asks Zoro to kill him after the battle if he loses his humanity; Zoro agrees.',
            it: 'Sanji chiede a Zoro di ucciderlo dopo la battaglia se perderà la propria umanità; Zoro accetta.',
          },
        },
      ],
    },
  ],
  'zeff': [
    {
      episode: 30,
      chapter: 68,
      value: [
        {
          character: 'sanji',
          type: { en: 'Apprentice', it: 'Allievo' },
          summary: {
            en: 'Zeff saves Sanji, raises him at the Baratie and encourages him to pursue the All Blue.',
            it: 'Zef salva Sanji, lo cresce al Baratie e lo incoraggia a cercare l’All Blue.',
          },
        },
      ],
    },
  ],
  'gin': [
    {
      episode: 22,
      chapter: 50,
      value: [
        {
          character: 'sanji',
          type: { en: 'Benefactor', it: 'Benefattore' },
          summary: {
            en: 'Sanji feeds Gin when he is starving and has no money.',
            it: 'Sanji dà da mangiare a Gin quando è affamato e non ha denaro.',
          },
        },
        {
          character: 'don-krieg',
          type: { en: 'Captain', it: 'Capitano' },
          summary: {
            en: 'Gin returns to Krieg after Sanji feeds him and brings his captain to the Baratie.',
            it: 'Gin torna da Creek dopo che Sanji gli ha dato da mangiare e porta il capitano al Baratie.',
          },
        },
      ],
    },
    {
      episode: 29,
      chapter: 66,
      value: [
        {
          character: 'sanji',
          type: {
            en: 'Man he refuses to kill',
            it: 'Uomo che rifiuta di uccidere',
          },
          summary: {
            en: 'Gin refuses to kill Sanji because Sanji fed him when he was starving.',
            it: 'Gin rifiuta di uccidere Sanji perché gli ha dato da mangiare quando era affamato.',
          },
        },
        {
          character: 'don-krieg',
          type: { en: 'Captain he defies', it: 'Capitano a cui disobbedisce' },
          summary: {
            en: 'Gin refuses Krieg’s order to kill Sanji; Krieg responds with poison gas.',
            it: 'Gin rifiuta l’ordine di Creek di uccidere Sanji; Creek risponde con il gas velenoso.',
          },
        },
      ],
    },
  ],
  'fullbody': [
    {
      episode: 21,
      chapter: 47,
      value: [
        {
          character: 'sanji',
          type: { en: 'Opponent', it: 'Avversario' },
          summary: {
            en: 'Sanji beats Fullbody after he disrupts the Baratie and wastes food.',
            it: 'Sanji picchia Fullbody dopo che ha disturbato il Baratie e sprecato del cibo.',
          },
        },
      ],
    },
    {
      episode: 130,
      chapter: 217,
      value: [
        {
          character: 'jango',
          type: { en: 'Marine partner', it: 'Compagno nella Marina' },
          summary: {
            en: 'Jango and Fullbody serve together under Hina after becoming friends.',
            it: 'Jango e Fullbody servono insieme sotto Hina dopo essere diventati amici.',
          },
        },
        retained.jangoHinaSuperior,
      ],
    },
  ],
  'carne': [
    {
      episode: 30,
      chapter: 68,
      value: [
        {
          character: 'patty',
          type: { en: 'Fellow cook', it: 'Collega cuoco' },
          summary: {
            en: 'They work together at the Baratie and defend it from Krieg.',
            it: 'Lavorano insieme al Baratie e lo difendono da Creek.',
          },
        },
        retained.carneZeffHeadChef,
        retained.carneSanjiFellowCook,
      ],
    },
  ],
  'patty': [
    {
      episode: 30,
      chapter: 68,
      value: [
        {
          character: 'carne',
          type: { en: 'Fellow cook', it: 'Collega cuoco' },
          summary: {
            en: 'They work together at the Baratie and defend it from Krieg.',
            it: 'Lavorano insieme al Baratie e lo difendono da Creek.',
          },
        },
        retained.carneZeffHeadChef,
        retained.carneSanjiFellowCook,
      ],
    },
  ],
  'don-krieg': [
    {
      episode: 29,
      chapter: 66,
      value: [
        {
          character: 'gin',
          type: {
            en: 'Disobedient subordinate',
            it: 'Subordinato disobbediente',
          },
          summary: {
            en: 'Krieg attacks with poison gas after Gin refuses to kill Sanji.',
            it: 'Creek attacca con il gas velenoso dopo che Gin rifiuta di uccidere Sanji.',
          },
        },
        {
          character: 'sanji',
          type: { en: 'Opponent', it: 'Avversario' },
          summary: {
            en: 'Krieg tries to seize the restaurant that Sanji defends.',
            it: 'Creek tenta di impadronirsi del ristorante difeso da Sanji.',
          },
        },
        {
          character: 'monkey-d-luffy',
          type: { en: 'Opponent', it: 'Avversario' },
          summary: {
            en: 'Luffy fights Krieg to stop his attack on the Baratie.',
            it: 'Rufy affronta Creek per fermare l’attacco al Baratie.',
          },
        },
      ],
    },
  ],
  'pearl': [
    {
      episode: 27,
      chapter: 61,
      value: [
        {
          character: 'don-krieg',
          type: { en: 'Captain', it: 'Capitano' },
          summary: {
            en: 'Pearl fights under Krieg during the attack on the Baratie.',
            it: 'Pearl combatte sotto Creek durante l’attacco al Baratie.',
          },
        },
        {
          character: 'gin',
          type: { en: 'Attacker', it: 'Aggressore' },
          summary: {
            en: 'Gin breaks Pearl’s armour to stop him attacking Sanji.',
            it: 'Gin rompe l’armatura di Pearl per impedirgli di attaccare Sanji.',
          },
        },
        {
          character: 'sanji',
          type: { en: 'Opponent', it: 'Avversario' },
          summary: {
            en: 'Pearl fights Sanji on the Baratie’s floating platform.',
            it: 'Pearl affronta Sanji sulla piattaforma galleggiante del Baratie.',
          },
        },
      ],
    },
  ],
  'dracule-mihawk': [
    {
      episode: 24,
      chapter: 52,
      value: [retained.draculeMihawkRoronoaZoroChallenger],
    },
    {
      episode: 45,
      chapter: 96,
      value: [
        retained.draculeMihawkRoronoaZoroChallenger,
        retained.draculeMihawkShanksFormerRival,
      ],
    },
    // Same chapter as Luffy/Rayleigh 516/597, but a different page.
    {
      episode: 515,
      chapter: 597,
      value: [
        retained.draculeMihawkRoronoaZoroStudentAndChallenger,
        retained.draculeMihawkShanksFormerRival,
      ],
    },
    {
      episode: 1086,
      chapter: 1058,
      value: [
        retained.draculeMihawkRoronoaZoroStudentAndChallenger,
        retained.draculeMihawkShanksFormerRival,
        {
          character: 'crocodile',
          type: { en: 'Business partner', it: 'Socio' },
          summary: {
            en: 'Mihawk joins Crocodile’s plan to build an organisation that hunts Marines.',
            it: 'Mihawk aderisce al progetto di Crocodile di creare un’organizzazione che dia la caccia ai marine.',
          },
        },
        {
          character: 'buggy',
          type: { en: 'Figurehead', it: 'Prestanome' },
          summary: {
            en: 'Mihawk and Crocodile keep Buggy as the public leader while controlling the organisation.',
            it: 'Mihawk e Crocodile tengono Bagy come capo pubblico mentre controllano l’organizzazione.',
          },
        },
      ],
    },
  ],
  'arlong': [
    {
      episode: 37,
      chapter: 84,
      value: [
        {
          character: 'nami',
          type: { en: 'Coerced cartographer', it: 'Cartografa costretta' },
          summary: {
            en: 'Arlong forces Nami to draw maps and promises to sell her village back to her.',
            it: 'Arlong costringe Nami a disegnare mappe e promette di rivenderle il villaggio.',
          },
        },
        {
          character: 'nezumi',
          type: { en: 'Corrupt accomplice', it: 'Complice corrotto' },
          summary: {
            en: 'Arlong has Nezumi confiscate Nami’s savings to prevent her buying the village.',
            it: 'Arlong fa confiscare a Nezumi i risparmi di Nami per impedirle di comprare il villaggio.',
          },
        },
      ],
    },
    {
      episode: 43,
      chapter: 94,
      value: [
        retained.arlongNamiFormerCartographer,
        retained.arlongMonkeyDLuffyDefeatingOpponent,
      ],
    },
    // Concerns Tiger's no-killing rule, not the later deathbed appeal.
    {
      episode: 541,
      chapter: 622,
      value: [
        retained.arlongNamiFormerCartographer,
        retained.arlongMonkeyDLuffyDefeatingOpponent,
        retained.arlongFisherTigerFormerCaptain,
        {
          character: 'jinbe',
          type: { en: 'Fellow officer', it: 'Compagno ufficiale' },
          summary: {
            en: 'Arlong and Jinbe serve together under Fisher Tiger.',
            it: 'Arlong e Jinbe servono insieme sotto Fisher Tiger.',
          },
        },
      ],
    },
    {
      episode: 544,
      chapter: 624,
      value: [
        retained.arlongNamiFormerCartographer,
        retained.arlongMonkeyDLuffyDefeatingOpponent,
        retained.arlongFisherTigerFormerCaptain,
        {
          character: 'jinbe',
          type: { en: 'Former comrade', it: 'Ex compagno' },
          summary: {
            en: 'Arlong breaks with Jinbe after Jinbe joins the Seven Warlords.',
            it: 'Arlong rompe con Jinbe quando Jinbe entra nella Flotta dei Sette.',
          },
        },
      ],
    },
  ],
  'hatchan': [
    {
      episode: 39,
      chapter: 85,
      value: [
        retained.hatchanArlongCaptain,
        {
          character: 'roronoa-zoro',
          type: { en: 'Opponent', it: 'Avversario' },
          summary: {
            en: 'Hatchan loses his six-sword duel against Zoro.',
            it: 'Octy perde contro Zoro il duello con le sei spade.',
          },
        },
      ],
    },
    // Hatchan's liberation needs episode 387, not 386; Camie and Pappag are
    // gated to chapter 493.
    {
      episode: 387,
      chapter: 493,
      value: [
        retained.hatchanCamieFriendAndEmployee,
        retained.hatchanPappagFriend,
        retained.hatchanArlongCaptain,
        retained.hatchanMonkeyDLuffyRescuer,
      ],
    },
    {
      episode: 541,
      chapter: 622,
      value: [
        retained.hatchanCamieFriendAndEmployee,
        retained.hatchanPappagFriend,
        {
          character: 'fisher-tiger',
          type: { en: 'Former captain', it: 'Ex capitano' },
          summary: {
            en: 'Hatchan sailed under Fisher Tiger with Arlong and Jinbe.',
            it: 'Octy navigava sotto Fisher Tiger insieme ad Arlong e Jinbe.',
          },
        },
        {
          character: 'jinbe',
          type: { en: 'Former crewmate', it: 'Ex compagno di ciurma' },
          summary: {
            en: 'Hatchan and Jinbe served together under Fisher Tiger.',
            it: 'Octy e Jinbe servivano insieme sotto Fisher Tiger.',
          },
        },
        retained.hatchanMonkeyDLuffyRescuer,
      ],
    },
  ],
  'kuroobi': [
    {
      episode: 40,
      chapter: 86,
      value: [retained.kuroobiArlongCaptain, retained.kuroobiSanjiOpponent],
    },
    {
      episode: 541,
      chapter: 622,
      value: [
        retained.kuroobiArlongCaptain,
        retained.kuroobiSanjiOpponent,
        retained.kuroobiFisherTigerFormerCaptain,
      ],
    },
  ],
  'chew': [
    // Chew's hammer defeat needs chapter 88, not 87.
    {
      episode: 40,
      chapter: 88,
      value: [retained.chewArlongCaptain, retained.chewUsoppOpponent],
    },
    {
      episode: 541,
      chapter: 622,
      value: [
        retained.chewArlongCaptain,
        retained.chewUsoppOpponent,
        retained.kuroobiFisherTigerFormerCaptain,
      ],
    },
  ],
  'nojiko': [
    {
      episode: 36,
      chapter: 81,
      value: [
        {
          character: 'nami',
          type: { en: 'Adoptive sister', it: 'Sorella adottiva' },
          summary: {
            en: 'Nojiko grows up with Nami and knows why she works for Arlong.',
            it: 'Nojiko cresce con Nami e sa perché lavora per Arlong.',
          },
        },
        {
          character: 'bell-mere',
          type: { en: 'Adoptive mother', it: 'Madre adottiva' },
          summary: {
            en: 'Bell-mère adopts Nojiko and Nami and dies protecting them.',
            it: 'Bellmer adotta Nojiko e Nami e muore per proteggerle.',
          },
        },
      ],
    },
  ],
  'genzo': [
    {
      episode: 36,
      chapter: 81,
      value: [
        {
          character: 'nami',
          type: { en: 'Girl he protects', it: 'Ragazza che protegge' },
          summary: {
            en: 'Genzo watches over Nami and tries to protect her family from Arlong.',
            it: 'Genzo veglia su Nami e cerca di proteggere la sua famiglia da Arlong.',
          },
        },
        {
          character: 'bell-mere',
          type: { en: 'Fellow villager', it: 'Compagna di villaggio' },
          summary: {
            en: 'Genzo knows Bell-mère and tries to hide her daughters from Arlong.',
            it: 'Genzo conosce Bellmer e cerca di nascondere le sue figlie ad Arlong.',
          },
        },
      ],
    },
  ],
  'bell-mere': [
    {
      episode: 36,
      chapter: 79,
      value: [
        {
          character: 'nami',
          type: { en: 'Adoptive daughter', it: 'Figlia adottiva' },
          summary: {
            en: 'Bell-mère pays Nami’s tribute rather than deny that she is her daughter.',
            it: 'Bellmer paga il tributo di Nami piuttosto che negare che sia sua figlia.',
          },
        },
        {
          character: 'nojiko',
          type: { en: 'Adoptive daughter', it: 'Figlia adottiva' },
          summary: {
            en: 'Bell-mère raises Nojiko and Nami and gives her life to protect them.',
            it: 'Bellmer cresce Nojiko e Nami e dà la vita per proteggerle.',
          },
        },
        {
          character: 'arlong',
          type: { en: 'Murderer', it: 'Assassino' },
          summary: {
            en: 'Arlong kills Bell-mère after she pays for her daughters instead of herself.',
            it: 'Arlong uccide Bellmer dopo che ha pagato per le figlie anziché per sé.',
          },
        },
      ],
    },
  ],
  'nezumi': [
    {
      episode: 37,
      chapter: 84,
      value: [
        {
          character: 'arlong',
          type: { en: 'Corrupt partner', it: 'Complice corrotto' },
          summary: {
            en: 'Nezumi helps Arlong by seizing Nami’s savings.',
            it: 'Nezumi aiuta Arlong confiscando i risparmi di Nami.',
          },
        },
        {
          character: 'nami',
          type: { en: 'Victim of extortion', it: 'Vittima di estorsione' },
          summary: {
            en: 'Nezumi confiscates Nami’s treasure under the pretext that it was stolen.',
            it: 'Nezumi confisca il tesoro di Nami con il pretesto che sia stato rubato.',
          },
        },
      ],
    },
  ],
  'momoo': [
    {
      episode: 38,
      chapter: 82,
      value: [
        {
          character: 'hatchan',
          type: { en: 'Handler', it: 'Persona che lo comanda' },
          summary: {
            en: 'Hatchan summons Momoo to fight the intruders at Arlong Park.',
            it: 'Octy chiama Momu per affrontare gli intrusi ad Arlong Park.',
          },
        },
        {
          character: 'monkey-d-luffy',
          type: { en: 'Opponent', it: 'Avversario' },
          summary: {
            en: 'Luffy swings Momoo into Arlong’s men and knocks him out.',
            it: 'Rufy scaglia Momu contro gli uomini di Arlong e lo mette fuori combattimento.',
          },
        },
      ],
    },
    {
      episode: 524,
      chapter: 604,
      value: [
        {
          character: 'caribou',
          type: { en: 'Captor', it: 'Carceriere' },
          summary: {
            en: 'Caribou’s crew uses Momoo to tow their ship; he flees when he recognises Luffy and his companions.',
            it: 'La ciurma di Caribou usa Momu per trainare la nave; lui fugge quando riconosce Rufy e i suoi compagni.',
          },
        },
        {
          character: 'monkey-d-luffy',
          type: { en: 'Feared opponent', it: 'Avversario temuto' },
          summary: {
            en: 'Momoo remembers his defeat at Luffy’s hands and flees from the crew.',
            it: 'Momu ricorda la sconfitta subita da Rufy e fugge dalla ciurma.',
          },
        },
      ],
    },
  ],
  'smoker': [
    {
      episode: 53,
      chapter: 100,
      value: [
        {
          character: 'monkey-d-luffy',
          type: { en: 'Pirate he pursues', it: 'Pirata che insegue' },
          summary: {
            en: 'Smoker tries to arrest Luffy in Loguetown.',
            it: 'Smoker tenta di arrestare Rufy a Loguetown.',
          },
        },
        retained.smokerTashigiSubordinate,
      ],
    },
    {
      episode: 109,
      chapter: 179,
      value: [
        retained.smokerMonkeyDLuffyEnemyHeOwes,
        retained.smokerTashigiSubordinate,
      ],
    },
    {
      episode: 625,
      chapter: 699,
      value: [
        retained.smokerMonkeyDLuffyEnemyHeOwes,
        retained.smokerTashigiSubordinate,
        {
          character: 'trafalgar-law',
          type: { en: 'Temporary ally', it: 'Alleato temporaneo' },
          summary: {
            en: 'Smoker helps Law recover his heart during their escape from Punk Hazard.',
            it: 'Smoker aiuta Law a recuperare il suo cuore durante la fuga da Punk Hazard.',
          },
        },
        {
          character: 'kuzan',
          type: { en: 'Rescuer', it: 'Soccorritore' },
          summary: {
            en: 'Kuzan stops Doflamingo from killing Smoker on Punk Hazard.',
            it: 'Kuzan impedisce a Doflamingo di uccidere Smoker a Punk Hazard.',
          },
        },
      ],
    },
  ],
  'tashigi': [
    {
      episode: 53,
      chapter: 100,
      value: [
        retained.tashigiSmokerSuperior,
        retained.tashigiRoronoaZoroOpposingSwordsman,
      ],
    },
    {
      episode: 622,
      chapter: 696,
      value: [
        retained.tashigiSmokerSuperior,
        retained.tashigiRoronoaZoroOpposingSwordsman,
        {
          character: 'nami',
          type: { en: 'Ally in the rescue', it: 'Alleata nel salvataggio' },
          summary: {
            en: 'Tashigi promises Nami that the children rescued on Punk Hazard will receive treatment.',
            it: 'Tashigi promette a Nami che i bambini salvati a Punk Hazard riceveranno delle cure.',
          },
        },
      ],
    },
  ],
  'monkey-d-dragon': [
    {
      episode: 314,
      chapter: 432,
      value: [retained.monkeyDDragonMonkeyDLuffySon],
    },
    {
      episode: 441,
      chapter: 540,
      value: [
        retained.monkeyDDragonMonkeyDLuffySon,
        retained.monkeyDDragonEmporioIvankovRevolutionaryComrade,
      ],
    },
    {
      episode: 737,
      chapter: 794,
      value: [
        retained.monkeyDDragonMonkeyDLuffySon,
        retained.monkeyDDragonEmporioIvankovRevolutionaryComrade,
        retained.monkeyDDragonSaboRescuedRecruit,
      ],
    },
    {
      episode: 1131,
      chapter: 1097,
      value: [
        retained.monkeyDDragonMonkeyDLuffySon,
        {
          character: 'emporio-ivankov',
          type: { en: 'Fellow founder', it: 'Compagno fondatore' },
          summary: {
            en: 'Dragon and Ivankov help Kuma free the people of Sorbet and found the Revolutionary Army with him.',
            it: 'Dragon e Ivankov aiutano Kuma a liberare gli abitanti di Sorbet e fondano con lui l’Armata Rivoluzionaria.',
          },
        },
        retained.monkeyDDragonSaboRescuedRecruit,
        {
          character: 'bartholomew-kuma',
          type: { en: 'Fellow founder', it: 'Compagno fondatore' },
          summary: {
            en: 'Kuma joins Dragon and Ivankov when they found the Revolutionary Army.',
            it: 'Kuma si unisce a Dragon e Ivankov quando fondano l’Armata Rivoluzionaria.',
          },
        },
      ],
    },
  ],
  'lord-of-the-coast': [
    // Endpoint gate: episode 504, chapter 589.
    {
      episode: 504,
      chapter: 589,
      value: [
        {
          character: 'shanks',
          type: { en: 'Opponent', it: 'Avversario' },
          summary: {
            en: 'The sea creature takes Shanks’s arm before he drives it away to save Luffy.',
            it: 'La creatura marina strappa un braccio a Shanks prima che lui la scacci per salvare Rufy.',
          },
        },
        {
          character: 'monkey-d-luffy',
          type: { en: 'Former prey', it: 'Ex preda' },
          summary: {
            en: 'Shanks saves Luffy from the creature; Luffy defeats it when he sets sail years later.',
            it: 'Shanks salva Rufy dalla creatura; anni dopo Rufy la sconfigge quando prende il mare.',
          },
        },
      ],
    },
  ],
  'koby': [
    {
      episode: 1,
      chapter: 2,
      value: [
        retained.kobyMonkeyDLuffyRescuer,
        {
          character: 'alvida',
          type: { en: 'Forced service', it: 'Servizio forzato' },
          summary: {
            en: 'Alvida forces Koby to work on her ship until Luffy defeats her.',
            it: 'Alvida costringe Kobi a lavorare sulla sua nave finché Rufy non la sconfigge.',
          },
        },
      ],
    },
    // Alvida leaves the selection; this does not end her connection to Koby.
    {
      episode: 69,
      chapter: 119,
      value: [
        retained.kobyHelmeppoFellowRecruit,
        retained.kobyMonkeyDLuffyRescuer,
      ],
    },
    {
      episode: 314,
      chapter: 432,
      value: [
        retained.kobyMonkeyDGarpMentor,
        retained.kobyHelmeppoFellowRecruit,
        retained.kobyMonkeyDLuffyRescuer,
      ],
    },
    // Omits the anime's admiral conversation; only facts both sources tell.
    {
      episode: 315,
      chapter: 433,
      value: [
        retained.kobyMonkeyDLuffyFriendOnTheOpposingSide,
        retained.kobyMonkeyDGarpMentor,
        retained.kobyHelmeppoFellowRecruit,
      ],
    },
    {
      episode: 488,
      chapter: 579,
      value: [
        retained.kobyShanksRescuer,
        retained.kobySakazukiHostility,
        retained.kobyMonkeyDLuffyFriendOnTheOpposingSide,
        retained.kobyMonkeyDGarpMentor,
        retained.kobyHelmeppoFellowRecruit,
      ],
    },
    // Rescue at 1122/1088; Koby's and Helmeppo's lists carry no other change.
    {
      episode: 1122,
      chapter: 1088,
      value: [
        {
          character: 'monkey-d-garp',
          type: { en: 'Mentor and rescuer', it: 'Mentore e soccorritore' },
          summary: {
            en: 'Garp leads the rescue of Koby on Hachinosu and stays behind while his pupils escape.',
            it: 'Garp guida il salvataggio di Kobi a Hachinosu e resta indietro mentre i suoi allievi fuggono.',
          },
        },
        {
          character: 'helmeppo',
          type: { en: 'Comrade and rescuer', it: 'Compagno e soccorritore' },
          summary: {
            en: 'Helmeppo catches Koby after his attack and escapes Hachinosu with him.',
            it: 'Hermeppo recupera Kobi dopo il suo attacco e fugge da Hachinosu insieme a lui.',
          },
        },
        retained.kobyMonkeyDLuffyFriendOnTheOpposingSide,
        retained.kobyShanksRescuer,
        retained.kobySakazukiHostility,
      ],
    },
  ],
  'gold-roger': [
    {
      episode: 400,
      chapter: 506,
      value: [
        retained.goldRogerSilversRayleighFirstMate,
        retained.goldRogerShanksFormerApprentice,
        retained.goldRogerBuggyFormerApprentice,
        retained.goldRogerCrocusShipSDoctor,
      ],
    },
    {
      episode: 459,
      chapter: 550,
      value: [
        retained.goldRogerPortgasDAceSon,
        retained.goldRogerSilversRayleighFirstMate,
        retained.goldRogerShanksFormerApprentice,
        retained.goldRogerBuggyFormerApprentice,
        retained.goldRogerCrocusShipSDoctor,
      ],
    },
    {
      episode: 460,
      chapter: 551,
      value: [
        retained.goldRogerPortgasDAceSon,
        retained.goldRogerMonkeyDGarpRivalHeTrusts,
        retained.goldRogerSilversRayleighFirstMate,
        retained.goldRogerShanksFormerApprentice,
        retained.goldRogerBuggyFormerApprentice,
      ],
    },
    {
      episode: 966,
      chapter: 966,
      value: [
        retained.goldRogerPortgasDAceSon,
        retained.goldRogerMonkeyDGarpRivalHeTrusts,
        retained.goldRogerSilversRayleighFirstMate,
        {
          character: 'kozuki-oden',
          type: { en: 'Crewmate and reader', it: 'Compagno e interprete' },
          summary: {
            en: 'Roger asks Oden to join his final voyage because he can read the Poneglyphs.',
            it: 'Roger chiede a Oden di unirsi all’ultimo viaggio perché sa leggere i Poneglyph.',
          },
        },
        {
          character: 'edward-newgate',
          type: { en: 'Rival and friend', it: 'Rivale e amico' },
          summary: {
            en: 'Roger clashes with Whitebeard and then exchanges gifts; Whitebeard lets Oden accompany him.',
            it: 'Roger si scontra con Barbabianca e poi scambia doni con lui; Barbabianca lascia che Oden lo accompagni.',
          },
        },
      ],
    },
  ],
} satisfies Record<string, Timeline<Relationship[]>>
