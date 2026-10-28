import type { Relationship, Timeline } from '~/data/types'

/** Sources and verified gates: docs/content-provenance/relationships.json. */
const retained = {
  bellamySarquiss: {
    character: 'sarquiss',
    type: { en: 'First mate', it: 'Vicecapitano' },
    summary: {
      en: 'Sarquiss backs Bellamy’s attacks and shares his contempt for pirates who pursue dreams.',
      it: 'Cirkeys sostiene gli attacchi di Bellamy e il suo disprezzo per i pirati che inseguono i sogni.',
    },
  },
  bellamyLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Pirate he mocks', it: 'Pirata che deride' },
    summary: {
      en: 'Bellamy attacks Luffy in Mock Town and mocks his search for a sky island.',
      it: 'Bellamy aggredisce Rufy a Mock Town e deride la sua ricerca di un’isola nel cielo.',
    },
  },
  bellamyCricket: {
    character: 'montblanc-cricket',
    type: { en: 'Victim of his raid', it: 'Vittima della sua razzia' },
    summary: {
      en: 'Bellamy attacks Cricket and steals the gold recovered by his salvage alliance.',
      it: 'Bellamy aggredisce Cricket e ruba l’oro recuperato dalla sua alleanza di sub.',
    },
  },
  bellamyDoffy: {
    character: 'donquixote-doflamingo',
    type: { en: 'Patron who punishes him', it: 'Protettore che lo punisce' },
    summary: {
      en: 'Doflamingo rejects Bellamy after his defeat and forces Sarquiss to attack him.',
      it: 'Do Flamingo ripudia Bellamy dopo la sua sconfitta e costringe Cirkeys ad attaccarlo.',
    },
  },
  bellamyLuffyRespect: {
    character: 'monkey-d-luffy',
    type: { en: 'Rival he respects', it: 'Rivale che rispetta' },
    summary: {
      en: 'After reaching the sky island himself, Bellamy tells Luffy that he no longer laughs at his dreams.',
      it: 'Dopo aver raggiunto anche lui l’isola nel cielo, Bellamy dice a Rufy che non ride più dei suoi sogni.',
    },
  },
  bellamyDoffyIdol: {
    character: 'donquixote-doflamingo',
    type: { en: 'Captain he admires', it: 'Capitano che ammira' },
    summary: {
      en: 'Bellamy brings Doflamingo gold from Skypiea and enters the tournament hoping to earn a place among his officers.',
      it: 'Bellamy porta a Do Flamingo dell’oro di Skypiea e partecipa al torneo sperando di diventare un suo ufficiale.',
    },
  },
  bellamyDoffyBetrayal: {
    character: 'donquixote-doflamingo',
    type: { en: 'Captain who discards him', it: 'Capitano che lo ripudia' },
    summary: {
      en: 'Bellamy learns that Doflamingo ordered his death, but still refuses to turn against him.',
      it: 'Bellamy scopre che Do Flamingo ha ordinato di ucciderlo, ma rifiuta ancora di rivoltarsi contro di lui.',
    },
  },
  bellamyBart: {
    character: 'bartolomeo',
    type: { en: 'Rescuer', it: 'Soccorritore' },
    summary: {
      en: 'Bartolomeo stops Dellinger from killing Bellamy and refuses to abandon him.',
      it: 'Bartolomeo impedisce a Dellinger di uccidere Bellamy e rifiuta di abbandonarlo.',
    },
  },
  bellamyDellinger: {
    character: 'dellinger',
    type: { en: 'Assailant', it: 'Aggressore' },
    summary: {
      en: 'Dellinger attacks Bellamy on Doflamingo’s orders.',
      it: 'Dellinger attacca Bellamy per ordine di Do Flamingo.',
    },
  },
  bellamyLuffyFriend: {
    character: 'monkey-d-luffy',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'Luffy calls Bellamy his friend and refuses to strike him while Doflamingo controls his movements.',
      it: 'Rufy chiama Bellamy suo amico e rifiuta di colpirlo mentre Do Flamingo ne controlla i movimenti.',
    },
  },
  bellamyDoffyControl: {
    character: 'donquixote-doflamingo',
    type: { en: 'Captain who manipulates him', it: 'Capitano che lo manipola' },
    summary: {
      en: 'Doflamingo uses Bellamy as a shield and forces him to attack Luffy.',
      it: 'Do Flamingo usa Bellamy come scudo e lo costringe ad attaccare Rufy.',
    },
  },
  bellamyDoffyFormer: {
    character: 'donquixote-doflamingo',
    type: {
      en: 'Former captain who used him',
      it: 'Ex capitano che lo ha usato',
    },
    summary: {
      en: 'Doflamingo turns Bellamy into a shield and an unwilling attacker despite Bellamy’s loyalty.',
      it: 'Do Flamingo usa Bellamy come scudo e lo costringe ad attaccare nonostante la sua lealtà.',
    },
  },
  bellamyLuffyVivre: {
    character: 'monkey-d-luffy',
    type: { en: 'Friend he can find again', it: 'Amico che può ritrovare' },
    summary: {
      en: 'Bellamy declines to become Luffy’s subordinate but keeps a piece of his Vivre Card.',
      it: 'Bellamy rifiuta di diventare un sottoposto di Rufy, ma conserva un pezzo della sua Vivre Card.',
    },
  },
  sarquissBellamy: {
    character: 'bellamy',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Sarquiss supports Bellamy’s accusations against Roshio and shares his contempt for dreamers.',
      it: 'Cirkeys sostiene le accuse di Bellamy contro Roshio e il suo disprezzo per chi sogna.',
    },
  },
  sarquissRoshio: {
    character: 'roshio',
    type: { en: 'Victim', it: 'Vittima' },
    summary: {
      en: 'Sarquiss backs Bellamy’s accusation of cheating and throws a lit match at Roshio.',
      it: 'Cirkeys sostiene l’accusa di Bellamy contro Roshio e gli lancia un fiammifero acceso.',
    },
  },
  sarquissMasira: {
    character: 'masira',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Sarquiss cuts Masira during the raid on Cricket’s salvage alliance.',
      it: 'Cirkeys ferisce Masira durante l’attacco all’alleanza di Cricket.',
    },
  },
  sarquissTeach: {
    character: 'marshall-d-teach',
    type: { en: 'Pirate who defeats him', it: 'Pirata che lo sconfigge' },
    summary: {
      en: 'Teach knocks Sarquiss down after Sarquiss bumps into him and insults him.',
      it: 'Teach abbatte Cirkeys dopo che questi lo urta e lo insulta.',
    },
  },
  sarquissDoffy: {
    character: 'donquixote-doflamingo',
    type: { en: 'Manipulator', it: 'Manipolatore' },
    summary: {
      en: 'Doflamingo takes control of Sarquiss’s body and makes him strike Bellamy.',
      it: 'Do Flamingo prende il controllo del corpo di Cirkeys e lo costringe a colpire Bellamy.',
    },
  },
  sarquissBellamyForced: {
    character: 'bellamy',
    type: {
      en: 'Captain he is forced to attack',
      it: 'Capitano che è costretto ad attaccare',
    },
    summary: {
      en: 'Sarquiss cannot stop his own body from attacking Bellamy under Doflamingo’s control.',
      it: 'Cirkeys non riesce a impedire al proprio corpo di attaccare Bellamy sotto il controllo di Do Flamingo.',
    },
  },
  rockstarShanks: {
    character: 'shanks',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Shanks sends Rockstar to deliver a letter to Whitebeard and orders him to return when it is rejected.',
      it: 'Shanks manda Rockstar a consegnare una lettera a Barbabianca e gli ordina di tornare quando viene respinta.',
    },
  },
  rockstarWhitebeard: {
    character: 'edward-newgate',
    type: {
      en: 'Recipient of his message',
      it: 'Destinatario del suo messaggio',
    },
    summary: {
      en: 'Whitebeard tears up the letter Rockstar delivers and demands that Shanks come in person.',
      it: 'Barbabianca strappa la lettera consegnata da Rockstar e pretende che Shanks venga di persona.',
    },
  },
  teachLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Pirate he pursues', it: 'Pirata che insegue' },
    summary: {
      en: 'Teach decides to capture Luffy after learning the value of his new bounty.',
      it: 'Teach decide di catturare Rufy dopo aver scoperto il valore della sua nuova taglia.',
    },
  },
  teachLaffitte: {
    character: 'laffitte',
    type: { en: 'Emissary', it: 'Emissario' },
    summary: {
      en: 'Laffitte enters the Warlords’ meeting to propose Teach for the vacant seat.',
      it: 'Lafitte si introduce nella riunione della Flotta dei Sette per proporre Teach per il posto vacante.',
    },
  },
  teachBurgess: {
    character: 'jesus-burgess',
    type: { en: 'Crewmate', it: 'Compagno di ciurma' },
    summary: {
      en: 'Burgess joins Teach’s pursuit of Luffy from Jaya.',
      it: 'Burgess accompagna Teach nell’inseguimento di Rufy da Jaya.',
    },
  },
  teachAugur: {
    character: 'van-augur',
    type: { en: 'Marksman', it: 'Tiratore' },
    summary: {
      en: 'Van Augur sails with Teach as the crew’s marksman.',
      it: 'Van Ooger naviga con Teach come tiratore della ciurma.',
    },
  },
  teachDoc: {
    character: 'doc-q',
    type: { en: 'Doctor', it: 'Medico' },
    summary: {
      en: 'Doc Q travels with Teach as the doctor of his crew.',
      it: 'Doc Q viaggia con Teach come medico della ciurma.',
    },
  },
  teachAce: {
    character: 'portgas-d-ace',
    type: {
      en: 'Former commander pursuing him',
      it: 'Ex comandante che lo insegue',
    },
    summary: {
      en: 'Ace tracks Teach down after his betrayal of Whitebeard’s crew and fights him on Banaro Island.',
      it: 'Ace rintraccia Teach dopo il tradimento della ciurma di Barbabianca e lo affronta sull’isola di Banaro.',
    },
  },
  teachWhitebeard: {
    character: 'edward-newgate',
    type: {
      en: 'Former captain he betrayed',
      it: 'Ex capitano che ha tradito',
    },
    summary: {
      en: 'Teach deserts Whitebeard’s crew after killing a crewmate to take his Devil Fruit.',
      it: 'Teach abbandona la ciurma di Barbabianca dopo aver ucciso un compagno per impadronirsi del suo frutto.',
    },
  },
  teachThatch: {
    character: 'thatch',
    type: { en: 'Crewmate he killed', it: 'Compagno che ha ucciso' },
    summary: {
      en: 'Teach kills Thatch to steal the Devil Fruit he found.',
      it: 'Teach uccide Satch per rubargli il frutto del diavolo che ha trovato.',
    },
  },
  teachAceCaptured: {
    character: 'portgas-d-ace',
    type: { en: 'Captive he handed over', it: 'Prigioniero che ha consegnato' },
    summary: {
      en: 'Teach defeats Ace and hands him to the Government to obtain a Warlord’s seat.',
      it: 'Teach sconfigge Ace e lo consegna al Governo per ottenere un posto nella Flotta dei Sette.',
    },
  },
  teachLuffyEnemy: {
    character: 'monkey-d-luffy',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'Luffy attacks Teach in Impel Down after learning that he was responsible for Ace’s capture.',
      it: 'Rufy attacca Teach a Impel Down dopo aver scoperto che è responsabile della cattura di Ace.',
    },
  },
  teachWhitebeardKilled: {
    character: 'edward-newgate',
    type: { en: 'Former captain he kills', it: 'Ex capitano che uccide' },
    summary: {
      en: 'Teach and his crew shoot Whitebeard after their former captain attacks him at Marineford.',
      it: 'Teach e la sua ciurma sparano a Barbabianca dopo che il loro ex capitano lo ha attaccato a Marineford.',
    },
  },
  teachWhitebeardPower: {
    character: 'edward-newgate',
    type: {
      en: 'Former captain whose power he steals',
      it: 'Ex capitano a cui ruba il potere',
    },
    summary: {
      en: 'After killing Whitebeard with his crew, Teach takes the power of his Tremor-Tremor Fruit.',
      it: 'Dopo aver ucciso Barbabianca con la sua ciurma, Teach si impadronisce del potere del frutto Gura Gura.',
    },
  },
  teachHancock: {
    character: 'boa-hancock',
    type: {
      en: 'Pirate he tries to capture',
      it: 'Piratessa che cerca di catturare',
    },
    summary: {
      en: 'Teach attacks Amazon Lily to seize Hancock’s Devil Fruit, but withdraws after Rayleigh intervenes.',
      it: 'Teach attacca Amazon Lily per impadronirsi del frutto di Hancock, ma si ritira dopo l’intervento di Rayleigh.',
    },
  },
  teachLaw: {
    character: 'trafalgar-law',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Teach ambushes Law at Winner Island to steal his Road Poneglyph copies.',
      it: 'Teach tende un agguato a Law sull’isola Winner per rubargli le copie dei Road Poneglyph.',
    },
  },
  teachLawDefeated: {
    character: 'trafalgar-law',
    type: { en: 'Opponent he defeats', it: 'Avversario che sconfigge' },
    summary: {
      en: 'Teach defeats Law at Winner Island, but Bepo carries his captain away before Teach can take his power.',
      it: 'Teach sconfigge Law sull’isola Winner, ma Bepo porta via il suo capitano prima che Teach possa prenderne il potere.',
    },
  },
  teachKuzan: {
    character: 'kuzan',
    type: { en: 'Captain he recruited', it: 'Capitano che ha reclutato' },
    summary: {
      en: 'Teach recruits Kuzan after his departure from the Marines and gives him command of the tenth ship.',
      it: 'Teach recluta Kuzan dopo la sua uscita dalla Marina e gli affida il comando della decima nave.',
    },
  },
  kumaSengoku: {
    character: 'sengoku',
    type: { en: 'Marine who summons him', it: 'Marine che lo convoca' },
    summary: {
      en: 'Kuma attends the meeting Sengoku calls to discuss Crocodile’s replacement.',
      it: 'Kuma partecipa alla riunione convocata da Sengoku per discutere del sostituto di Crocodile.',
    },
  },
  kumaPerona: {
    character: 'perona',
    type: { en: 'Pirate he sends away', it: 'Piratessa che allontana' },
    summary: {
      en: 'Kuma makes Perona disappear from Thriller Bark with his paw.',
      it: 'Kuma fa sparire Perona da Thriller Bark con la sua zampa.',
    },
  },
  kumaZoro: {
    character: 'roronoa-zoro',
    type: { en: 'Swordsman he tests', it: 'Spadaccino che mette alla prova' },
    summary: {
      en: 'Kuma lets Zoro take Luffy’s pain after the swordsman offers his life for his captain.',
      it: 'Kuma permette a Zoro di assorbire il dolore di Rufy dopo che lo spadaccino offre la propria vita per il capitano.',
    },
  },
  kumaLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Pirate he spares', it: 'Pirata che risparmia' },
    summary: {
      en: 'Kuma leaves Thriller Bark without taking Luffy’s head after testing Zoro’s resolve.',
      it: 'Kuma lascia Thriller Bark senza prendere la testa di Rufy dopo aver messo alla prova la determinazione di Zoro.',
    },
  },
  kumaLuffyDispersed: {
    character: 'monkey-d-luffy',
    type: { en: 'Pirate he sends away', it: 'Pirata che allontana' },
    summary: {
      en: 'Kuma sends Luffy and his companions away from Sabaody despite Luffy’s attempts to stop him.',
      it: 'Kuma allontana Rufy e i suoi compagni da Sabaody nonostante i tentativi di Rufy di fermarlo.',
    },
  },
  kumaDragon: {
    character: 'monkey-d-dragon',
    type: { en: 'Revolutionary leader', it: 'Capo rivoluzionario' },
    summary: {
      en: 'Kuma tells Rayleigh that he works for Dragon’s Revolutionary Army and wants to help the Straw Hats escape.',
      it: 'Kuma dice a Rayleigh di lavorare per l’Armata Rivoluzionaria di Dragon e di voler aiutare i Cappelli di Paglia a fuggire.',
    },
  },
  kumaRayleigh: {
    character: 'silvers-rayleigh',
    type: { en: 'Confidant', it: 'Confidente' },
    summary: {
      en: 'Kuma entrusts Rayleigh with the truth that he intends to help Luffy’s crew escape.',
      it: 'Kuma affida a Rayleigh la verità sulla sua intenzione di aiutare la ciurma di Rufy a fuggire.',
    },
  },
  kumaLuffySaved: {
    character: 'monkey-d-luffy',
    type: { en: 'Pirate he saves', it: 'Pirata che salva' },
    summary: {
      en: 'Kuma sends Luffy and his crew away to save them from the attack at Sabaody.',
      it: 'Kuma allontana Rufy e la sua ciurma per salvarli dall’attacco a Sabaody.',
    },
  },
  kumaFranky: {
    character: 'franky',
    type: { en: 'Shipwright who returns', it: 'Carpentiere che ritorna' },
    summary: {
      en: 'Franky finds Kuma after he has spent two years protecting the Thousand Sunny.',
      it: 'Franky ritrova Kuma dopo che ha passato due anni a proteggere la Thousand Sunny.',
    },
  },
  kumaBonney: {
    character: 'jewelry-bonney',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'Bonney identifies Kuma as her father and wants to know why he was turned into a weapon.',
      it: 'Bonney rivela che Kuma è suo padre e vuole sapere perché è stato trasformato in un’arma.',
    },
  },
  kumaGinny: {
    character: 'ginny',
    type: { en: 'Childhood companion', it: 'Compagna d’infanzia' },
    summary: {
      en: 'Kuma escapes God Valley with Ginny and returns with her to Sorbet.',
      it: 'Kuma fugge da God Valley con Ginny e torna con lei a Sorbet.',
    },
  },
  kumaGinnyRevolutionary: {
    character: 'ginny',
    type: { en: 'Fellow revolutionary', it: 'Compagna rivoluzionaria' },
    summary: {
      en: 'Kuma and Ginny join Dragon’s struggle after the liberation of Sorbet.',
      it: 'Kuma e Ginny si uniscono alla lotta di Dragon dopo la liberazione di Sorbet.',
    },
  },
  kumaGinnyLate: {
    character: 'ginny',
    type: { en: 'Late childhood companion', it: 'Compagna d’infanzia defunta' },
    summary: {
      en: 'Kuma reaches Ginny after her death and takes responsibility for the infant she leaves behind.',
      it: 'Kuma raggiunge Ginny dopo la sua morte e si prende cura della neonata che ha lasciato.',
    },
  },
  kumaBonneyAdopted: {
    character: 'jewelry-bonney',
    type: { en: 'Adopted daughter', it: 'Figlia adottiva' },
    summary: {
      en: 'Kuma raises Ginny’s daughter Bonney and searches for a cure for her Sapphire Scales disease.',
      it: 'Kuma cresce Bonney, la figlia di Ginny, e cerca una cura per la sua malattia della Scaglia di Zaffiro.',
    },
  },
  kumaVegapunk: {
    character: 'vegapunk',
    type: { en: 'Doctor he seeks out', it: 'Medico a cui si rivolge' },
    summary: {
      en: 'Kuma brings Bonney to Vegapunk, who offers to treat her disease in exchange for studying his body.',
      it: 'Kuma porta Bonney da Vegapunk, che si offre di curarla in cambio della possibilità di studiare il suo corpo.',
    },
  },
  kumaSaturn: {
    character: 'jaygarcia-saturn',
    type: { en: 'Elder who coerces him', it: 'Anziano che lo ricatta' },
    summary: {
      en: 'Saturn makes Bonney’s treatment conditional on Kuma becoming a Warlord and losing his free will.',
      it: 'Saturn impone che, in cambio della cura di Bonney, Kuma diventi un membro della Flotta dei Sette e perda la propria volontà.',
    },
  },
  kumaVegapunkFinal: {
    character: 'vegapunk',
    type: {
      en: 'Friend who carries out his last wishes',
      it: 'Amico che esegue le sue ultime volontà',
    },
    summary: {
      en: 'Vegapunk records Kuma’s memories and carries out his final requests before erasing his personality.',
      it: 'Vegapunk registra i ricordi di Kuma ed esegue le sue ultime richieste prima di cancellarne la personalità.',
    },
  },
  kumaLuffyHope: {
    character: 'monkey-d-luffy',
    type: {
      en: 'Pirate he places his hopes in',
      it: 'Pirata in cui ripone le sue speranze',
    },
    summary: {
      en: 'Before losing his personality, Kuma tells Vegapunk that he believes Luffy can change the world.',
      it: 'Prima di perdere la propria personalità, Kuma dice a Vegapunk di credere che Rufy possa cambiare il mondo.',
    },
  },
  kumaBonneyProtected: {
    character: 'jewelry-bonney',
    type: { en: 'Daughter he protects', it: 'Figlia che protegge' },
    summary: {
      en: 'Kuma reaches Egghead and shields Bonney from Saturn’s attack with his own body.',
      it: 'Kuma raggiunge Egghead e protegge Bonney dall’attacco di Saturn con il proprio corpo.',
    },
  },
  kumaSaturnStruck: {
    character: 'jaygarcia-saturn',
    type: { en: 'Enemy he strikes', it: 'Nemico che colpisce' },
    summary: {
      en: 'Kuma punches Saturn after blocking the attack aimed at Bonney.',
      it: 'Kuma colpisce Saturn con un pugno dopo aver bloccato l’attacco rivolto a Bonney.',
    },
  },
  sengokuDoffy: {
    character: 'donquixote-doflamingo',
    type: {
      en: 'Warlord he reprimands',
      it: 'Membro della Flotta dei Sette che rimprovera',
    },
    summary: {
      en: 'Sengoku orders Doflamingo to stop making the Marines at the meeting fight each other.',
      it: 'Sengoku ordina a Do Flamingo di smettere di far combattere fra loro i marine presenti alla riunione.',
    },
  },
  sengokuKuma: {
    character: 'bartholomew-kuma',
    type: {
      en: 'Warlord he summons',
      it: 'Membro della Flotta dei Sette che convoca',
    },
    summary: {
      en: 'Sengoku summons Kuma to discuss the vacancy left by Crocodile.',
      it: 'Sengoku convoca Kuma per discutere del posto lasciato vacante da Crocodile.',
    },
  },
  sengokuGarp: {
    character: 'monkey-d-garp',
    type: { en: 'Colleague', it: 'Collega' },
    summary: {
      en: 'Sengoku orders Garp to pursue Luffy after the reunion between grandfather and grandson.',
      it: 'Sengoku ordina a Garp di inseguire Rufy dopo il ricongiungimento fra nonno e nipote.',
    },
  },
  sengokuAce: {
    character: 'portgas-d-ace',
    type: { en: 'Prisoner facing execution', it: 'Prigioniero da giustiziare' },
    summary: {
      en: 'Sengoku announces Ace’s parentage before the execution at Marineford.',
      it: 'Sengoku rivela l’identità del padre di Ace prima dell’esecuzione a Marineford.',
    },
  },
  sengokuWhitebeard: {
    character: 'edward-newgate',
    type: { en: 'Enemy commander', it: 'Comandante nemico' },
    summary: {
      en: 'Sengoku directs the Marines against Whitebeard’s attempt to rescue Ace.',
      it: 'Sengoku dirige la Marina contro il tentativo di Barbabianca di salvare Ace.',
    },
  },
  sengokuTeach: {
    character: 'marshall-d-teach',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'Sengoku attacks Teach and his crew after Teach threatens to destroy Marineford.',
      it: 'Sengoku attacca Teach e la sua ciurma dopo che Teach minaccia di distruggere Marineford.',
    },
  },
  sengokuShanks: {
    character: 'shanks',
    type: {
      en: 'Pirate whose terms he accepts',
      it: 'Pirata di cui accetta le condizioni',
    },
    summary: {
      en: 'Sengoku agrees to end the war and lets Shanks take Whitebeard and Ace for burial.',
      it: 'Sengoku accetta di porre fine alla guerra e permette a Shanks di portare via Barbabianca e Ace per seppellirli.',
    },
  },
  sengokuRosinante: {
    character: 'donquixote-rosinante',
    type: { en: 'Undercover officer', it: 'Ufficiale infiltrato' },
    summary: {
      en: 'Rosinante reports to Sengoku while infiltrating Doflamingo’s crew.',
      it: 'Rosinante riferisce a Sengoku mentre si infiltra nella ciurma di Do Flamingo.',
    },
  },
  sengokuRosinanteSon: {
    character: 'donquixote-rosinante',
    type: { en: 'Son he raised', it: 'Figlio che ha cresciuto' },
    summary: {
      en: 'Sengoku tells Law that he raised Rosinante and loved him as a son.',
      it: 'Sengoku dice a Law di aver cresciuto Rosinante e di avergli voluto bene come a un figlio.',
    },
  },
  sengokuLaw: {
    character: 'trafalgar-law',
    type: {
      en: 'Survivor who gives him answers',
      it: 'Sopravvissuto che gli dà delle risposte',
    },
    summary: {
      en: 'Law explains why Rosinante died, and Sengoku urges him to live for the man who saved him.',
      it: 'Law spiega perché Rosinante è morto e Sengoku lo invita a vivere per l’uomo che lo ha salvato.',
    },
  },
  whitebeardShanks: {
    character: 'shanks',
    type: {
      en: 'Pirate who seeks a meeting',
      it: 'Pirata che chiede un incontro',
    },
    summary: {
      en: 'Whitebeard rejects Shanks’s letter and demands that he come in person.',
      it: 'Barbabianca respinge la lettera di Shanks e pretende che venga di persona.',
    },
  },
  whitebeardAce: {
    character: 'portgas-d-ace',
    type: { en: 'Division commander', it: 'Comandante di divisione' },
    summary: {
      en: 'Ace serves under Whitebeard and has left to hunt a traitor from the crew.',
      it: 'Ace serve sotto Barbabianca ed è partito per dare la caccia a un traditore della ciurma.',
    },
  },
  whitebeardRoger: {
    character: 'gold-roger',
    type: { en: 'Former rival', it: 'Rivale del passato' },
    summary: {
      en: 'Whitebeard is known for having fought Roger on equal terms.',
      it: 'Barbabianca è noto per aver combattuto alla pari con Roger.',
    },
  },
  whitebeardShanksClash: {
    character: 'shanks',
    type: { en: 'Rival', it: 'Rivale' },
    summary: {
      en: 'Whitebeard refuses Shanks’s request to stop Ace’s pursuit of Teach, and their weapons clash.',
      it: 'Barbabianca rifiuta la richiesta di Shanks di fermare la caccia di Ace a Teach e le loro armi si scontrano.',
    },
  },
  whitebeardMarco: {
    character: 'marco',
    type: { en: 'Division commander', it: 'Comandante di divisione' },
    summary: {
      en: 'Marco commands Whitebeard’s first division and consults him when Shanks boards the ship.',
      it: 'Marco comanda la prima divisione di Barbabianca e si rivolge a lui quando Shanks sale sulla nave.',
    },
  },
  whitebeardTeach: {
    character: 'marshall-d-teach',
    type: { en: 'Traitor', it: 'Traditore' },
    summary: {
      en: 'Teach kills a crewmate and leaves, prompting Ace to pursue him despite Whitebeard’s misgivings.',
      it: 'Teach uccide un compagno e fugge; Ace lo insegue nonostante i timori di Barbabianca.',
    },
  },
  whitebeardAceSon: {
    character: 'portgas-d-ace',
    type: { en: 'Son he tries to rescue', it: 'Figlio che cerca di salvare' },
    summary: {
      en: 'Whitebeard takes Ace into his family and comes to Marineford to save him.',
      it: 'Barbabianca accoglie Ace nella propria famiglia e arriva a Marineford per salvarlo.',
    },
  },
  whitebeardLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Rescue ally', it: 'Alleato nel salvataggio' },
    summary: {
      en: 'Whitebeard and Luffy both fight at Marineford to save Ace.',
      it: 'Barbabianca e Rufy combattono entrambi a Marineford per salvare Ace.',
    },
  },
  whitebeardLuffyBacked: {
    character: 'monkey-d-luffy',
    type: { en: 'Pirate he supports', it: 'Pirata che sostiene' },
    summary: {
      en: 'Whitebeard orders his men to support Luffy’s advance toward Ace.',
      it: 'Barbabianca ordina ai suoi uomini di sostenere l’avanzata di Rufy verso Ace.',
    },
  },
  whitebeardAceDead: {
    character: 'portgas-d-ace',
    type: { en: 'Son he loses', it: 'Figlio che perde' },
    summary: {
      en: 'Whitebeard sees Ace die after the attempt to rescue him at Marineford.',
      it: 'Barbabianca vede morire Ace dopo il tentativo di salvarlo a Marineford.',
    },
  },
  whitebeardTeachKiller: {
    character: 'marshall-d-teach',
    type: { en: 'Traitor who kills him', it: 'Traditore che lo uccide' },
    summary: {
      en: 'Whitebeard disowns Teach and attacks him before Teach and his crew kill him.',
      it: 'Barbabianca ripudia Teach e lo attacca prima che Teach e la sua ciurma lo uccidano.',
    },
  },
  whitebeardOden: {
    character: 'kozuki-oden',
    type: { en: 'Sworn brother', it: 'Fratello acquisito' },
    summary: {
      en: 'Whitebeard accepts Oden aboard his ship and treats him as a brother.',
      it: 'Barbabianca accoglie Oden sulla propria nave e lo tratta come un fratello.',
    },
  },
  doffySengoku: {
    character: 'sengoku',
    type: { en: 'Marine who reprimands him', it: 'Marine che lo rimprovera' },
    summary: {
      en: 'Sengoku tells Doflamingo to stop controlling the Marines at the Warlords’ meeting.',
      it: 'Sengoku ordina a Do Flamingo di smettere di controllare i marine durante la riunione della Flotta dei Sette.',
    },
  },
  doffyBellamy: {
    character: 'bellamy',
    type: { en: 'Subordinate he discards', it: 'Sottoposto che ripudia' },
    summary: {
      en: 'Doflamingo punishes Bellamy for his defeat and declares that he no longer needs him.',
      it: 'Do Flamingo punisce Bellamy per la sua sconfitta e dichiara di non averne più bisogno.',
    },
  },
  doffySarquiss: {
    character: 'sarquiss',
    type: { en: 'Subordinate he controls', it: 'Sottoposto che controlla' },
    summary: {
      en: 'Doflamingo forces Sarquiss to attack his own captain Bellamy.',
      it: 'Do Flamingo costringe Cirkeys ad attaccare il suo capitano Bellamy.',
    },
  },
  doffyCrocodile: {
    character: 'crocodile',
    type: {
      en: 'Pirate who rejects his offer',
      it: 'Pirata che respinge la sua proposta',
    },
    summary: {
      en: 'Doflamingo proposes an alliance at Marineford, but Crocodile refuses.',
      it: 'Do Flamingo propone un’alleanza a Marineford, ma Crocodile rifiuta.',
    },
  },
  doffyVergo: {
    character: 'vergo',
    type: { en: 'Infiltrator', it: 'Infiltrato' },
    summary: {
      en: 'Vergo serves Doflamingo while hiding his allegiance inside the Marines.',
      it: 'Vergo serve Do Flamingo nascondendo la propria lealtà all’interno della Marina.',
    },
  },
  doffyCaesar: {
    character: 'caesar-clown',
    type: { en: 'Supplier', it: 'Fornitore' },
    summary: {
      en: 'Caesar works for Doflamingo and produces SAD for his business.',
      it: 'Caesar lavora per Do Flamingo e produce il SAD per i suoi affari.',
    },
  },
  doffyLaw: {
    character: 'trafalgar-law',
    type: { en: 'Former subordinate', it: 'Ex sottoposto' },
    summary: {
      en: 'Law has left Doflamingo’s crew, but Doflamingo has kept a place for him.',
      it: 'Law ha lasciato la ciurma di Do Flamingo, che gli ha però riservato un posto.',
    },
  },
  doffyLawEnemy: {
    character: 'trafalgar-law',
    type: {
      en: 'Former subordinate turned enemy',
      it: 'Ex sottoposto diventato nemico',
    },
    summary: {
      en: 'Doflamingo defeats Law and takes him prisoner after Law tries to dismantle his business.',
      it: 'Do Flamingo sconfigge Law e lo prende prigioniero dopo che Law ha cercato di distruggere i suoi affari.',
    },
  },
  doffyRosinante: {
    character: 'donquixote-rosinante',
    type: {
      en: 'Younger brother he killed',
      it: 'Fratello minore che ha ucciso',
    },
    summary: {
      en: 'Doflamingo kills Rosinante after learning that his brother is a Marine infiltrator.',
      it: 'Do Flamingo uccide Rosinante dopo aver scoperto che suo fratello è un infiltrato della Marina.',
    },
  },
  doffyHoming: {
    character: 'donquixote-homing',
    type: { en: 'Father he killed', it: 'Padre che ha ucciso' },
    summary: {
      en: 'Doflamingo kills Homing, blaming him for taking the family away from Mary Geoise.',
      it: 'Do Flamingo uccide Homing, accusandolo di aver portato la famiglia lontano da Mary Geoise.',
    },
  },
  doffyTrebol: {
    character: 'trebol',
    type: { en: 'Longstanding officer', it: 'Ufficiale di lunga data' },
    summary: {
      en: 'Trebol gives the young Doflamingo a pistol and a Devil Fruit and helps him build his power.',
      it: 'Trebol dà al giovane Do Flamingo una pistola e un frutto del diavolo e lo aiuta a costruire il suo potere.',
    },
  },
  doffyLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Pirate who defeats him', it: 'Pirata che lo sconfigge' },
    summary: {
      en: 'Luffy defeats Doflamingo and breaks his control over Dressrosa.',
      it: 'Rufy sconfigge Do Flamingo e pone fine al suo controllo su Dressrosa.',
    },
  },
  doffyIssho: {
    character: 'issho',
    type: { en: 'Captor', it: 'Colui che lo cattura' },
    summary: {
      en: 'Fujitora’s Marines arrest Doflamingo after his defeat.',
      it: 'I marine di Fujitora arrestano Do Flamingo dopo la sua sconfitta.',
    },
  },
  doffyKaido: {
    character: 'kaido',
    type: { en: 'Business partner', it: 'Socio in affari' },
    summary: {
      en: 'Doflamingo supplies Kaido with SMILE fruits; his capture cuts off that supply.',
      it: 'Do Flamingo fornisce a Kaido i frutti SMILE; la sua cattura interrompe le forniture.',
    },
  },
  marcoWhitebeard: {
    character: 'edward-newgate',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Marco commands Whitebeard’s first division and stays beside him when Shanks visits.',
      it: 'Marco comanda la prima divisione di Barbabianca e resta al suo fianco durante la visita di Shanks.',
    },
  },
  marcoShanks: {
    character: 'shanks',
    type: { en: 'Rival captain', it: 'Capitano rivale' },
    summary: {
      en: 'Marco rejects Shanks’s invitation to join his crew when Shanks visits Whitebeard.',
      it: 'Marco respinge l’invito di Shanks a unirsi alla sua ciurma durante la visita a Barbabianca.',
    },
  },
  marcoAce: {
    character: 'portgas-d-ace',
    type: { en: 'Fellow commander', it: 'Compagno comandante' },
    summary: {
      en: 'Marco explains to Ace why Whitebeard’s men regard their captain as a father.',
      it: 'Marco spiega ad Ace perché gli uomini di Barbabianca considerano il capitano un padre.',
    },
  },
  marcoLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Pirate he protects', it: 'Pirata che protegge' },
    summary: {
      en: 'Whitebeard orders Marco to keep Luffy alive during the rescue attempt at Marineford.',
      it: 'Barbabianca ordina a Marco di tenere in vita Rufy durante il tentativo di salvataggio a Marineford.',
    },
  },
  marcoAceDead: {
    character: 'portgas-d-ace',
    type: { en: 'Late fellow commander', it: 'Compagno comandante defunto' },
    summary: {
      en: 'After Ace’s death, Marco urges the crew to protect the brother Ace died saving.',
      it: 'Dopo la morte di Ace, Marco esorta la ciurma a proteggere il fratello che Ace è morto per salvare.',
    },
  },
  marcoWhitebeardLate: {
    character: 'edward-newgate',
    type: { en: 'Late captain', it: 'Capitano defunto' },
    summary: {
      en: 'Marco attends Whitebeard’s burial and continues to honor the captain he regarded as a father.',
      it: 'Marco partecipa alla sepoltura di Barbabianca e continua a onorare il capitano che considerava un padre.',
    },
  },
  marcoShanksThanks: {
    character: 'shanks',
    type: { en: 'Ally he thanks', it: 'Alleato che ringrazia' },
    summary: {
      en: 'Marco thanks Shanks for arranging Whitebeard and Ace’s burial.',
      it: 'Marco ringrazia Shanks per aver organizzato la sepoltura di Barbabianca e Ace.',
    },
  },
  marcoTeach: {
    character: 'marshall-d-teach',
    type: {
      en: 'Enemy who defeats his forces',
      it: 'Nemico che sconfigge le sue forze',
    },
    summary: {
      en: 'Marco leads Whitebeard’s surviving crew against Teach in the Payback War and loses.',
      it: 'Marco guida i superstiti della ciurma di Barbabianca contro Teach nella Guerra di Rappresaglia e viene sconfitto.',
    },
  },
  marcoNeko: {
    character: 'nekomamushi',
    type: {
      en: 'Ally seeking his help',
      it: 'Alleato che chiede il suo aiuto',
    },
    summary: {
      en: 'Nekomamushi visits Marco on Sphinx to ask for his help in Wano.',
      it: 'Nekomamushi raggiunge Marco a Sphinx per chiedergli aiuto a Wano.',
    },
  },
  marcoLuffyWano: {
    character: 'monkey-d-luffy',
    type: { en: 'Ally he supports', it: 'Alleato che sostiene' },
    summary: {
      en: 'Marco comes to Wano and stops the Big Mom Pirates from interfering with Luffy’s battle.',
      it: 'Marco arriva a Wano e impedisce ai Pirati di Big Mom di interferire con la battaglia di Rufy.',
    },
  },
  marcoKing: {
    character: 'king',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Marco holds King back during the fighting inside Onigashima.',
      it: 'Marco tiene a bada King durante i combattimenti all’interno di Onigashima.',
    },
  },
  marcoQueen: {
    character: 'queen',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Marco fights Queen while helping the alliance on Onigashima.',
      it: 'Marco combatte Queen mentre aiuta l’alleanza a Onigashima.',
    },
  },
  marcoLuffyThanks: {
    character: 'monkey-d-luffy',
    type: { en: 'Ally who thanks him', it: 'Alleato che lo ringrazia' },
    summary: {
      en: 'After the victory in Wano, Luffy thanks Marco for protecting him at Marineford.',
      it: 'Dopo la vittoria a Wano, Rufy ringrazia Marco per averlo protetto a Marineford.',
    },
  },
  marcoShanksRide: {
    character: 'shanks',
    type: {
      en: 'Captain who gives him passage',
      it: 'Capitano che lo accompagna',
    },
    summary: {
      en: 'Marco travels back toward Sphinx aboard Shanks’s ship and again declines to join his crew.',
      it: 'Marco torna verso Sphinx a bordo della nave di Shanks e rifiuta ancora di unirsi alla sua ciurma.',
    },
  },
  marcoWeevil: {
    character: 'edward-weevil',
    type: { en: 'Defender of Sphinx', it: 'Difensore di Sphinx' },
    summary: {
      en: 'Marco learns that Weevil defended Sphinx from the Marines before being captured.',
      it: 'Marco scopre che Weevil ha difeso Sphinx dalla Marina prima di essere catturato.',
    },
  },
  marcoBakkin: {
    character: 'bakkin',
    type: { en: 'Mother asking for help', it: 'Madre che chiede aiuto' },
    summary: {
      en: 'Bakkin asks Marco to rescue Weevil after his capture.',
      it: 'Bakkin chiede a Marco di salvare Weevil dopo la sua cattura.',
    },
  },
} satisfies Record<string, Relationship>

export const recurringRelationships = {
  'bellamy': [
    {
      episode: 146,
      chapter: 224,
      value: [retained.bellamySarquiss, retained.bellamyLuffy],
    },
    {
      episode: 150,
      chapter: 231,
      value: [
        retained.bellamySarquiss,
        retained.bellamyLuffy,
        retained.bellamyCricket,
      ],
    },
    {
      episode: 207,
      chapter: 303,
      value: [
        retained.bellamyDoffy,
        retained.bellamySarquiss,
        retained.bellamyLuffy,
        retained.bellamyCricket,
      ],
    },
    {
      episode: 635,
      chapter: 706,
      value: [retained.bellamyDoffyIdol, retained.bellamyLuffyRespect],
    },
    {
      episode: 663,
      chapter: 731,
      value: [
        retained.bellamyDoffyBetrayal,
        retained.bellamyLuffyRespect,
        retained.bellamyBart,
        retained.bellamyDellinger,
      ],
    },
    {
      episode: 698,
      chapter: 759,
      value: [
        retained.bellamyDoffyControl,
        retained.bellamyLuffyFriend,
        retained.bellamyBart,
        retained.bellamyDellinger,
      ],
    },
    {
      episode: 746,
      chapter: 801,
      value: [
        retained.bellamyLuffyVivre,
        retained.bellamyBart,
        retained.bellamyDoffyFormer,
      ],
    },
  ],
  'sarquiss': [
    {
      episode: 146,
      chapter: 224,
      value: [retained.sarquissBellamy, retained.sarquissRoshio],
    },
    {
      episode: 150,
      chapter: 231,
      value: [
        retained.sarquissBellamy,
        retained.sarquissRoshio,
        retained.sarquissMasira,
      ],
    },
    {
      episode: 151,
      chapter: 234,
      value: [
        retained.sarquissBellamy,
        retained.sarquissRoshio,
        retained.sarquissMasira,
        retained.sarquissTeach,
      ],
    },
    {
      episode: 207,
      chapter: 303,
      value: [
        retained.sarquissBellamyForced,
        retained.sarquissDoffy,
        retained.sarquissTeach,
        retained.sarquissMasira,
        retained.sarquissRoshio,
      ],
    },
  ],
  'rockstar': [
    {
      episode: 151,
      chapter: 234,
      value: [retained.rockstarShanks, retained.rockstarWhitebeard],
    },
  ],
  'marshall-d-teach': [
    {
      episode: 151,
      chapter: 234,
      value: [
        retained.teachLuffy,
        retained.teachLaffitte,
        retained.teachBurgess,
        retained.teachAugur,
        retained.teachDoc,
      ],
    },
    {
      episode: 325,
      chapter: 440,
      value: [
        retained.teachAce,
        retained.teachWhitebeard,
        retained.teachThatch,
        retained.teachLuffy,
        retained.teachLaffitte,
      ],
    },
    {
      episode: 446,
      chapter: 544,
      value: [
        retained.teachAceCaptured,
        retained.teachWhitebeard,
        retained.teachThatch,
        retained.teachLuffyEnemy,
        retained.teachLaffitte,
      ],
    },
    {
      episode: 485,
      chapter: 576,
      value: [
        retained.teachWhitebeardKilled,
        retained.teachAceCaptured,
        retained.teachLuffyEnemy,
        retained.teachThatch,
        retained.teachLaffitte,
      ],
    },
    {
      episode: 486,
      chapter: 577,
      value: [
        retained.teachWhitebeardPower,
        retained.teachAceCaptured,
        retained.teachLuffyEnemy,
        retained.teachThatch,
        retained.teachLaffitte,
      ],
    },
    {
      episode: 1088,
      chapter: 1059,
      value: [
        retained.teachWhitebeardPower,
        retained.teachAceCaptured,
        retained.teachLuffyEnemy,
        retained.teachHancock,
        retained.teachLaffitte,
      ],
    },
    {
      episode: 1093,
      chapter: 1063,
      value: [
        retained.teachLaw,
        retained.teachWhitebeardPower,
        retained.teachAceCaptured,
        retained.teachLuffyEnemy,
        retained.teachHancock,
      ],
    },
    {
      episode: 1115,
      chapter: 1081,
      value: [
        retained.teachLawDefeated,
        retained.teachKuzan,
        retained.teachWhitebeardPower,
        retained.teachAceCaptured,
        retained.teachLuffyEnemy,
      ],
    },
  ],
  'bartholomew-kuma': [
    { episode: 151, chapter: 234, value: [retained.kumaSengoku] },
    {
      episode: 368,
      chapter: 473,
      value: [retained.kumaSengoku, retained.kumaPerona],
    },
    {
      episode: 377,
      chapter: 485,
      value: [
        retained.kumaLuffy,
        retained.kumaZoro,
        retained.kumaSengoku,
        retained.kumaPerona,
      ],
    },
    {
      episode: 405,
      chapter: 513,
      value: [
        retained.kumaLuffyDispersed,
        retained.kumaZoro,
        retained.kumaSengoku,
        retained.kumaPerona,
      ],
    },
    {
      episode: 507,
      chapter: 591,
      value: [
        retained.kumaDragon,
        retained.kumaLuffySaved,
        retained.kumaRayleigh,
        retained.kumaZoro,
      ],
    },
    {
      episode: 523,
      chapter: 603,
      value: [
        retained.kumaDragon,
        retained.kumaLuffySaved,
        retained.kumaRayleigh,
        retained.kumaZoro,
        retained.kumaFranky,
      ],
    },
    {
      episode: 1092,
      chapter: 1063,
      value: [
        retained.kumaBonney,
        retained.kumaDragon,
        retained.kumaLuffySaved,
        retained.kumaZoro,
        retained.kumaFranky,
      ],
    },
    {
      episode: 1130,
      chapter: 1096,
      value: [
        retained.kumaBonney,
        retained.kumaGinny,
        retained.kumaDragon,
        retained.kumaLuffySaved,
        retained.kumaZoro,
      ],
    },
    {
      episode: 1131,
      chapter: 1097,
      value: [
        retained.kumaBonney,
        retained.kumaGinnyRevolutionary,
        retained.kumaDragon,
        retained.kumaLuffySaved,
        retained.kumaZoro,
      ],
    },
    {
      episode: 1132,
      chapter: 1098,
      value: [
        retained.kumaBonneyAdopted,
        retained.kumaGinnyLate,
        retained.kumaDragon,
        retained.kumaLuffySaved,
        retained.kumaZoro,
      ],
    },
    {
      episode: 1133,
      chapter: 1099,
      value: [
        retained.kumaBonneyAdopted,
        retained.kumaVegapunk,
        retained.kumaGinnyLate,
        retained.kumaDragon,
        retained.kumaLuffySaved,
      ],
    },
    {
      episode: 1134,
      chapter: 1100,
      value: [
        retained.kumaBonneyAdopted,
        retained.kumaSaturn,
        retained.kumaVegapunk,
        retained.kumaGinnyLate,
        retained.kumaLuffySaved,
      ],
    },
    {
      episode: 1136,
      chapter: 1102,
      value: [
        retained.kumaBonneyAdopted,
        retained.kumaSaturn,
        retained.kumaVegapunkFinal,
        retained.kumaGinnyLate,
        retained.kumaLuffyHope,
      ],
    },
    {
      episode: 1137,
      chapter: 1104,
      value: [
        retained.kumaBonneyProtected,
        retained.kumaSaturnStruck,
        retained.kumaVegapunkFinal,
        retained.kumaGinnyLate,
        retained.kumaLuffyHope,
      ],
    },
  ],
  // Rosinante’s manga gate waits for the archive endpoint at chapter 768.
  'sengoku': [
    {
      episode: 151,
      chapter: 234,
      value: [retained.sengokuDoffy, retained.sengokuKuma],
    },
    {
      episode: 323,
      chapter: 438,
      value: [
        retained.sengokuGarp,
        retained.sengokuDoffy,
        retained.sengokuKuma,
      ],
    },
    {
      episode: 459,
      chapter: 550,
      value: [
        retained.sengokuAce,
        retained.sengokuGarp,
        retained.sengokuDoffy,
        retained.sengokuKuma,
      ],
    },
    {
      episode: 465,
      chapter: 556,
      value: [
        retained.sengokuWhitebeard,
        retained.sengokuAce,
        retained.sengokuGarp,
        retained.sengokuDoffy,
        retained.sengokuKuma,
      ],
    },
    {
      episode: 487,
      chapter: 578,
      value: [
        retained.sengokuTeach,
        retained.sengokuWhitebeard,
        retained.sengokuAce,
        retained.sengokuGarp,
      ],
    },
    {
      episode: 489,
      chapter: 580,
      value: [
        retained.sengokuShanks,
        retained.sengokuGarp,
        retained.sengokuWhitebeard,
        retained.sengokuTeach,
        retained.sengokuAce,
      ],
    },
    {
      episode: 704,
      chapter: 768,
      value: [
        retained.sengokuRosinante,
        retained.sengokuGarp,
        retained.sengokuShanks,
        retained.sengokuWhitebeard,
        retained.sengokuTeach,
      ],
    },
    {
      episode: 742,
      chapter: 798,
      value: [
        retained.sengokuRosinanteSon,
        retained.sengokuLaw,
        retained.sengokuGarp,
        retained.sengokuShanks,
        retained.sengokuWhitebeard,
      ],
    },
  ],
  'edward-newgate': [
    {
      episode: 151,
      chapter: 234,
      value: [
        retained.whitebeardAce,
        retained.whitebeardShanks,
        retained.whitebeardRoger,
      ],
    },
    {
      episode: 316,
      chapter: 434,
      value: [
        retained.whitebeardAce,
        retained.whitebeardShanksClash,
        retained.whitebeardRoger,
        retained.whitebeardMarco,
        retained.whitebeardTeach,
      ],
    },
    {
      episode: 461,
      chapter: 552,
      value: [
        retained.whitebeardAceSon,
        retained.whitebeardShanksClash,
        retained.whitebeardRoger,
        retained.whitebeardMarco,
        retained.whitebeardTeach,
      ],
    },
    {
      episode: 466,
      chapter: 557,
      value: [
        retained.whitebeardAceSon,
        retained.whitebeardLuffy,
        retained.whitebeardRoger,
        retained.whitebeardMarco,
        retained.whitebeardTeach,
      ],
    },
    {
      episode: 479,
      chapter: 570,
      value: [
        retained.whitebeardAceSon,
        retained.whitebeardLuffyBacked,
        retained.whitebeardRoger,
        retained.whitebeardMarco,
        retained.whitebeardTeach,
      ],
    },
    {
      episode: 483,
      chapter: 574,
      value: [
        retained.whitebeardAceDead,
        retained.whitebeardLuffyBacked,
        retained.whitebeardRoger,
        retained.whitebeardMarco,
        retained.whitebeardTeach,
      ],
    },
    {
      episode: 485,
      chapter: 576,
      value: [
        retained.whitebeardAceDead,
        retained.whitebeardTeachKiller,
        retained.whitebeardRoger,
        retained.whitebeardMarco,
        retained.whitebeardLuffyBacked,
      ],
    },
    {
      episode: 964,
      chapter: 964,
      value: [
        retained.whitebeardAceDead,
        retained.whitebeardTeachKiller,
        retained.whitebeardRoger,
        retained.whitebeardOden,
        retained.whitebeardLuffyBacked,
      ],
    },
  ],
  // Rosinante’s manga gate waits for the archive endpoint at chapter 768.
  'donquixote-doflamingo': [
    { episode: 151, chapter: 234, value: [retained.doffySengoku] },
    {
      episode: 207,
      chapter: 303,
      value: [
        retained.doffyBellamy,
        retained.doffySarquiss,
        retained.doffySengoku,
      ],
    },
    {
      episode: 470,
      chapter: 561,
      value: [
        retained.doffyBellamy,
        retained.doffyCrocodile,
        retained.doffySarquiss,
        retained.doffySengoku,
      ],
    },
    {
      episode: 621,
      chapter: 695,
      value: [
        retained.doffyLaw,
        retained.doffyVergo,
        retained.doffyCaesar,
        retained.doffyBellamy,
        retained.doffyCrocodile,
      ],
    },
    {
      episode: 661,
      chapter: 729,
      value: [
        retained.doffyLawEnemy,
        retained.doffyVergo,
        retained.doffyCaesar,
        retained.doffyBellamy,
        retained.doffyCrocodile,
      ],
    },
    {
      episode: 706,
      chapter: 768,
      value: [
        retained.doffyRosinante,
        retained.doffyHoming,
        retained.doffyLawEnemy,
        retained.doffyCaesar,
        retained.doffyVergo,
      ],
    },
    {
      episode: 724,
      chapter: 782,
      value: [
        retained.doffyRosinante,
        retained.doffyHoming,
        retained.doffyLawEnemy,
        retained.doffyTrebol,
        retained.doffyCaesar,
      ],
    },
    {
      episode: 733,
      chapter: 790,
      value: [
        retained.doffyLuffy,
        retained.doffyLawEnemy,
        retained.doffyRosinante,
        retained.doffyHoming,
        retained.doffyTrebol,
      ],
    },
    {
      episode: 735,
      chapter: 792,
      value: [
        retained.doffyLuffy,
        retained.doffyLawEnemy,
        retained.doffyRosinante,
        retained.doffyIssho,
        retained.doffyTrebol,
      ],
    },
    {
      episode: 760,
      chapter: 810,
      value: [
        retained.doffyLuffy,
        retained.doffyLawEnemy,
        retained.doffyRosinante,
        retained.doffyKaido,
        retained.doffyIssho,
      ],
    },
  ],
  'marco': [
    {
      episode: 316,
      chapter: 434,
      value: [retained.marcoWhitebeard, retained.marcoShanks],
    },
    {
      episode: 461,
      chapter: 552,
      value: [
        retained.marcoWhitebeard,
        retained.marcoAce,
        retained.marcoShanks,
      ],
    },
    {
      episode: 467,
      chapter: 558,
      value: [
        retained.marcoWhitebeard,
        retained.marcoAce,
        retained.marcoLuffy,
        retained.marcoShanks,
      ],
    },
    {
      episode: 484,
      chapter: 575,
      value: [
        retained.marcoWhitebeard,
        retained.marcoAceDead,
        retained.marcoLuffy,
        retained.marcoShanks,
      ],
    },
    {
      episode: 505,
      chapter: 590,
      value: [
        retained.marcoWhitebeardLate,
        retained.marcoAceDead,
        retained.marcoLuffy,
        retained.marcoShanksThanks,
      ],
    },
    {
      episode: 773,
      chapter: 820,
      value: [
        retained.marcoWhitebeardLate,
        retained.marcoTeach,
        retained.marcoAceDead,
        retained.marcoLuffy,
        retained.marcoShanksThanks,
      ],
    },
    {
      episode: 890,
      chapter: 909,
      value: [
        retained.marcoWhitebeardLate,
        retained.marcoNeko,
        retained.marcoTeach,
        retained.marcoAceDead,
        retained.marcoLuffy,
      ],
    },
    {
      episode: 988,
      chapter: 981,
      value: [
        retained.marcoWhitebeardLate,
        retained.marcoNeko,
        retained.marcoLuffyWano,
        retained.marcoTeach,
        retained.marcoAceDead,
      ],
    },
    {
      episode: 1022,
      chapter: 1006,
      value: [
        retained.marcoLuffyWano,
        retained.marcoKing,
        retained.marcoQueen,
        retained.marcoWhitebeardLate,
        retained.marcoNeko,
      ],
    },
    {
      episode: 1087,
      chapter: 1059,
      value: [
        retained.marcoLuffyThanks,
        retained.marcoShanksRide,
        retained.marcoWhitebeardLate,
        retained.marcoAceDead,
        retained.marcoNeko,
      ],
    },
    {
      episode: 1105,
      chapter: 1073,
      value: [
        retained.marcoWhitebeardLate,
        retained.marcoWeevil,
        retained.marcoBakkin,
        retained.marcoLuffyThanks,
        retained.marcoShanksRide,
      ],
    },
  ],
} satisfies Record<string, Timeline<Relationship[]>>
