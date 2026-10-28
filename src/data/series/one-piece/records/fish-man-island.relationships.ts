import type { Relationship, Timeline } from '~/data/types'

const links = {
  caribouCoribouYoungerBrother: {
    character: 'coribou',
    type: { en: 'Younger brother', it: 'Fratello minore' },
    summary: {
      en: 'Coribou commands their pirate crew alongside Caribou.',
      it: 'Coribou comanda la ciurma insieme a Caribou.',
    },
  },
  caribouShirahoshiPrincessHeTriesToAbduct: {
    character: 'shirahoshi',
    type: {
      en: 'Princess he tries to abduct',
      it: 'Principessa che cerca di rapire',
    },
    summary: {
      en: 'Caribou tries to capture Shirahoshi after overhearing the secret about her power.',
      it: 'Caribou cerca di catturare Shirahoshi dopo aver ascoltato di nascosto il segreto sul suo potere.',
    },
  },
  caribouMonkeyDLuffyOpponentWhoStopsHim: {
    character: 'monkey-d-luffy',
    type: { en: 'Opponent who stops him', it: 'Avversario che lo ferma' },
    summary: {
      en: 'Luffy drives Caribou away from Shirahoshi.',
      it: 'Rufy allontana Caribou da Shirahoshi.',
    },
  },
  caribouMonkeyDLuffyAllyHeFeeds: {
    character: 'monkey-d-luffy',
    type: { en: 'Ally he feeds', it: 'Alleato che sfama' },
    summary: {
      en: 'Caribou gives Luffy the food stored in his body so he can recover and return to battle.',
      it: 'Caribou dà a Rufy il cibo conservato nel suo corpo perché si riprenda e torni a combattere.',
    },
  },
  caribouVanAugurPirateHeAsksForPassage: {
    character: 'van-augur',
    type: {
      en: 'Pirate he asks for passage',
      it: 'Pirata a cui chiede un passaggio',
    },
    summary: {
      en: 'Caribou asks Van Augur to take him to Blackbeard.',
      it: 'Caribou chiede a Van Augur di portarlo da Barbanera.',
    },
  },
  caribouCatarinaDevonPirateHeAsksForPassage: {
    character: 'catarina-devon',
    type: {
      en: 'Pirate he asks for passage',
      it: 'Pirata a cui chiede un passaggio',
    },
    summary: {
      en: 'Caribou asks Catarina Devon to take him to Blackbeard.',
      it: 'Caribou chiede a Catarina Devon di portarlo da Barbanera.',
    },
  },
  caribouMarshallDTeachPirateHeOffersInformationTo: {
    character: 'marshall-d-teach',
    type: {
      en: 'Pirate he offers information to',
      it: 'Pirata a cui offre informazioni',
    },
    summary: {
      en: 'Caribou offers Blackbeard information about the Ancient Weapons in return for an introduction.',
      it: 'Caribou offre a Barbanera informazioni sulle Armi Ancestrali in cambio di una presentazione.',
    },
  },
  caribouVanAugurEscortToBlackbeard: {
    character: 'van-augur',
    type: { en: 'Escort to Blackbeard', it: 'Accompagnatore da Barbanera' },
    summary: {
      en: 'Van Augur agrees to take Caribou to Blackbeard after hearing his offer of information.',
      it: 'Van Augur accetta di portare Caribou da Barbanera dopo aver sentito la sua offerta di informazioni.',
    },
  },
  caribouCatarinaDevonEscortToBlackbeard: {
    character: 'catarina-devon',
    type: { en: 'Escort to Blackbeard', it: 'Accompagnatrice da Barbanera' },
    summary: {
      en: 'Catarina Devon agrees to take Caribou to Blackbeard to hear what he knows.',
      it: 'Catarina Devon accetta di portare Caribou da Barbanera per sentire ciò che sa.',
    },
  },
  demaloBlackMonkeyDLuffyPirateHeImpersonates: {
    character: 'monkey-d-luffy',
    type: { en: 'Pirate he impersonates', it: 'Pirata di cui prende il nome' },
    summary: {
      en: 'Demalo Black uses Luffy’s identity to recruit pirates at Sabaody.',
      it: 'Demalo Black usa l’identità di Rufy per reclutare pirati a Sabaody.',
    },
  },
  demaloBlackSentomaruMarineWhoExposesHim: {
    character: 'sentomaru',
    type: { en: 'Marine who exposes him', it: 'Marine che lo smaschera' },
    summary: {
      en: 'Sentomaru defeats Demalo Black and exposes his false identity.',
      it: 'Sentomaru sconfigge Demalo Black e smaschera la sua falsa identità.',
    },
  },
  hammondHodyJonesCaptain: {
    character: 'hody-jones',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Hammond reports the Straw Hats’ arrival to Hody and receives orders to bring them to him.',
      it: 'Hammond riferisce a Hody l’arrivo dei Cappello di Paglia e riceve l’ordine di condurli da lui.',
    },
  },
  hammondMonkeyDLuffyOpponentWhoRepelsHim: {
    character: 'monkey-d-luffy',
    type: { en: 'Opponent who repels him', it: 'Avversario che lo respinge' },
    summary: {
      en: 'Luffy repels Hammond’s attempt to capture him at Mermaid Cove.',
      it: 'Rufy respinge il tentativo di Hammond di catturarlo alla Baia delle Sirene.',
    },
  },
  shyarlyCamieEmployee: {
    character: 'camie',
    type: { en: 'Employee', it: 'Dipendente' },
    summary: {
      en: 'Camie works at Shyarly’s cafe. Shyarly lets her spend time with her visiting friends.',
      it: 'Kayme lavora al caffè di Shirley, che le permette di trascorrere del tempo con gli amici in visita.',
    },
  },
  shyarlyMonkeyDLuffySubjectOfHerPrediction: {
    character: 'monkey-d-luffy',
    type: {
      en: 'Subject of her prediction',
      it: 'Oggetto della sua predizione',
    },
    summary: {
      en: 'Shyarly sees a man in a straw hat destroying Fish-Man Island and calls for Luffy to leave.',
      it: 'Shirley vede un uomo con un cappello di paglia distruggere l’isola e chiede che Rufy se ne vada.',
    },
  },
  shyarlyArlongBrother: {
    character: 'arlong',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Hody identifies Arlong as Shyarly’s brother when she challenges his plans.',
      it: 'Hody indica Arlong come fratello di Shirley quando lei contesta i suoi piani.',
    },
  },
  shyarlyHodyJonesAttacker: {
    character: 'hody-jones',
    type: { en: 'Attacker', it: 'Aggressore' },
    summary: {
      en: 'Hody shoots Shyarly after she says that Luffy, rather than Hody, will destroy the island.',
      it: 'Hody colpisce Shirley dopo che lei afferma che sarà Rufy, e non Hody, a distruggere l’isola.',
    },
  },
  shyarlyMonkeyDLuffyPirateSheHopesSheMisjudged: {
    character: 'monkey-d-luffy',
    type: {
      en: 'Pirate she hopes she misjudged',
      it: 'Pirata che spera di aver giudicato male',
    },
    summary: {
      en: 'Shyarly breaks her crystal ball and tells Camie she hopes her prediction about Luffy will not come true.',
      it: 'Shirley rompe la sfera di cristallo e dice a Kayme che spera che la predizione su Rufy non si avveri.',
    },
  },
  vanderDeckenIxShirahoshiTargetOfHisThreats: {
    character: 'shirahoshi',
    type: { en: 'Target of his threats', it: 'Bersaglio delle sue minacce' },
    summary: {
      en: 'Decken demands that Shirahoshi marry him and threatens to kill her if she refuses.',
      it: 'Decken pretende che Shirahoshi lo sposi e minaccia di ucciderla se rifiuta.',
    },
  },
  vanderDeckenIxHodyJonesAlly: {
    character: 'hody-jones',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'Decken joins forces with Hody to invade Ryugu Palace.',
      it: 'Decken si allea con Hody per invadere il Palazzo Ryugu.',
    },
  },
  vanderDeckenIxWadatsumiSubordinate: {
    character: 'wadatsumi',
    type: { en: 'Subordinate', it: 'Subordinato' },
    summary: {
      en: 'Wadatsumi follows Decken’s orders during the attack on the Straw Hats’ ship.',
      it: 'Wadatsumi segue gli ordini di Decken durante l’attacco alla nave dei Cappello di Paglia.',
    },
  },
  vanderDeckenIxMonkeyDLuffyOpponentProtectingShirahoshi: {
    character: 'monkey-d-luffy',
    type: {
      en: 'Opponent protecting Shirahoshi',
      it: 'Avversario che protegge Shirahoshi',
    },
    summary: {
      en: 'Luffy stops Decken from attacking Shirahoshi after she rejects his proposal.',
      it: 'Rufy impedisce a Decken di attaccare Shirahoshi dopo il suo rifiuto della proposta.',
    },
  },
  surumeMonkeyDLuffyFriendWhoTamesHim: {
    character: 'monkey-d-luffy',
    type: { en: 'Friend who tames him', it: 'Amico che lo addomestica' },
    summary: {
      en: 'Luffy tames Surume and gives him his name. Surume helps carry the Straw Hats’ ship.',
      it: 'Rufy addomestica Surume e gli dà il suo nome. Surume aiuta a trasportare la nave dei Cappello di Paglia.',
    },
  },
  wadatsumiVanderDeckenIxCaptain: {
    character: 'vander-decken-ix',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Wadatsumi obeys Decken and attacks ships at his command.',
      it: 'Wadatsumi obbedisce a Decken e attacca le navi al suo comando.',
    },
  },
  wadatsumiSanjiOpponentWhoDefeatsHim: {
    character: 'sanji',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Sanji fights alongside Jinbe and brings down Wadatsumi.',
      it: 'Sanji combatte al fianco di Jinbe e abbatte Wadatsumi.',
    },
  },
  wadatsumiVanderDeckenIxFormerCaptain: {
    character: 'vander-decken-ix',
    type: { en: 'Former captain', it: 'Ex capitano' },
    summary: {
      en: 'Wadatsumi now sails with the Sun Pirates rather than Decken.',
      it: 'Wadatsumi ora naviga con i Pirati del Sole anziché con Decken.',
    },
  },
  wadatsumiJinbeCompanion: {
    character: 'jinbe',
    type: { en: 'Companion', it: 'Compagno' },
    summary: {
      en: 'Wadatsumi accompanies Jinbe and the Sun Pirates in Totto Land.',
      it: 'Wadatsumi accompagna Jinbe e i Pirati del Sole a Tottoland.',
    },
  },
  hodyJonesArlongIdeologicalModel: {
    character: 'arlong',
    type: { en: 'Model for his cause', it: 'Modello per la sua causa' },
    summary: {
      en: 'Hody wants to continue Arlong’s campaign against humans.',
      it: 'Hody vuole proseguire la campagna di Arlong contro gli umani.',
    },
  },
  hodyJonesVanderDeckenIxAlly: {
    character: 'vander-decken-ix',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'Hody allies with Decken to overthrow Neptune.',
      it: 'Hody si allea con Decken per rovesciare Nettuno.',
    },
  },
  hodyJonesNeptuneKingHeSeeksToOverthrow: {
    character: 'neptune',
    type: { en: 'King he seeks to overthrow', it: 'Re che vuole rovesciare' },
    summary: {
      en: 'Hody plans to seize Neptune’s throne.',
      it: 'Hody progetta di impadronirsi del trono di Nettuno.',
    },
  },
  hodyJonesOtohimeQueenHeMurdered: {
    character: 'otohime',
    type: { en: 'Queen he murdered', it: 'Regina che ha assassinato' },
    summary: {
      en: 'Hody admits killing Otohime and blaming a human for her death.',
      it: 'Hody ammette di aver ucciso Otohime e di aver attribuito la sua morte a un umano.',
    },
  },
  hodyJonesMonkeyDLuffyEnemy: {
    character: 'monkey-d-luffy',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'Hody seeks to kill Luffy, who defeated Arlong and opposes his takeover.',
      it: 'Hody vuole uccidere Rufy, che ha sconfitto Arlong e si oppone al suo colpo di stato.',
    },
  },
  hodyJonesVanderDeckenIxAllyHeAttacks: {
    character: 'vander-decken-ix',
    type: { en: 'Ally he attacks', it: 'Alleato che attacca' },
    summary: {
      en: 'Hody stabs Decken so that Noah will fall onto Fish-Man Island.',
      it: 'Hody trafigge Decken perché Noah cada sull’Isola degli Uomini-Pesce.',
    },
  },
  neptuneShirahoshiDaughter: {
    character: 'shirahoshi',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'Neptune keeps Shirahoshi under guard to protect her from Decken’s attacks.',
      it: 'Nettuno fa sorvegliare Shirahoshi per proteggerla dagli attacchi di Decken.',
    },
  },
  neptuneFukaboshiEldestSon: {
    character: 'fukaboshi',
    type: { en: 'Eldest son', it: 'Figlio maggiore' },
    summary: {
      en: 'Fukaboshi serves as a prince of Neptune’s kingdom.',
      it: 'Fukaboshi è un principe del regno di Nettuno.',
    },
  },
  neptuneRyuboshiSon: {
    character: 'ryuboshi',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'Ryuboshi is one of Neptune’s three sons.',
      it: 'Ryuboshi è uno dei tre figli di Nettuno.',
    },
  },
  neptuneManboshiSon: {
    character: 'manboshi',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'Manboshi is one of Neptune’s three sons.',
      it: 'Manboshi è uno dei tre figli di Nettuno.',
    },
  },
  neptuneOtohimeLateWife: {
    character: 'otohime',
    type: { en: 'Late wife', it: 'Moglie defunta' },
    summary: {
      en: 'Neptune supports Otohime’s efforts to bring fish-men and humans closer together.',
      it: 'Nettuno sostiene gli sforzi di Otohime per avvicinare uomini-pesce e umani.',
    },
  },
  neptuneMonkeyDLuffySaviourOfHisFamily: {
    character: 'monkey-d-luffy',
    type: { en: 'Saviour of his family', it: 'Salvatore della sua famiglia' },
    summary: {
      en: 'Neptune thanks Luffy and his companions for saving his family and kingdom.',
      it: 'Nettuno ringrazia Rufy e i suoi compagni per aver salvato la sua famiglia e il regno.',
    },
  },
  neptuneJinbeTrustedFriend: {
    character: 'jinbe',
    type: { en: 'Trusted friend', it: 'Amico fidato' },
    summary: {
      en: 'Neptune discusses the island’s future and Luffy’s invitation with Jinbe.',
      it: 'Nettuno discute con Jinbe del futuro dell’isola e dell’invito di Rufy.',
    },
  },
  fukaboshiNeptuneFather: {
    character: 'neptune',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Neptune is the princes’ father and the king they serve.',
      it: 'Nettuno è il padre dei principi e il re che servono.',
    },
  },
  fukaboshiRyuboshiBrother: {
    character: 'ryuboshi',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'The brothers act together as princes of Ryugu Kingdom.',
      it: 'I fratelli agiscono insieme come principi del Regno di Ryugu.',
    },
  },
  fukaboshiManboshiBrother: {
    character: 'manboshi',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'The brothers act together as princes of Ryugu Kingdom.',
      it: 'I fratelli agiscono insieme come principi del Regno di Ryugu.',
    },
  },
  fukaboshiShirahoshiYoungerSister: {
    character: 'shirahoshi',
    type: { en: 'Younger sister', it: 'Sorella minore' },
    summary: {
      en: 'The princes seek to protect Shirahoshi from Decken.',
      it: 'I principi cercano di proteggere Shirahoshi da Decken.',
    },
  },
  fukaboshiOtohimeMother: {
    character: 'otohime',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'The prince keeps Otohime’s wish that her children should not inherit hatred.',
      it: 'Il principe custodisce il desiderio di Otohime che i suoi figli non ereditino l’odio.',
    },
  },
  ryuboshiFukaboshiBrother: {
    character: 'fukaboshi',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'The brothers act together as princes of Ryugu Kingdom.',
      it: 'I fratelli agiscono insieme come principi del Regno di Ryugu.',
    },
  },
  shirahoshiNeptuneFather: {
    character: 'neptune',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Neptune is Shirahoshi’s father and fears for her safety outside the tower.',
      it: 'Nettuno è il padre di Shirahoshi e teme per la sua sicurezza fuori dalla torre.',
    },
  },
  shirahoshiMegaloTrustedCompanion: {
    character: 'megalo',
    type: { en: 'Trusted companion', it: 'Compagno fidato' },
    summary: {
      en: 'Megalo is Shirahoshi’s companion during her confinement in the tower.',
      it: 'Megalo tiene compagnia a Shirahoshi durante la sua reclusione nella torre.',
    },
  },
  shirahoshiVanderDeckenIxPersecutor: {
    character: 'vander-decken-ix',
    type: { en: 'Persecutor', it: 'Persecutore' },
    summary: {
      en: 'Decken’s attacks force Shirahoshi to remain inside the tower.',
      it: 'Gli attacchi di Decken costringono Shirahoshi a restare nella torre.',
    },
  },
  shirahoshiMonkeyDLuffyFriendAndProtector: {
    character: 'monkey-d-luffy',
    type: { en: 'Friend and protector', it: 'Amico e protettore' },
    summary: {
      en: 'Luffy takes Shirahoshi outside and protects her when Decken attacks.',
      it: 'Rufy porta Shirahoshi all’aperto e la protegge quando Decken attacca.',
    },
  },
  shirahoshiOtohimeMother: {
    character: 'otohime',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'Shirahoshi remembers her mother’s wish that her children should not hate her killer.',
      it: 'Shirahoshi ricorda il desiderio della madre che i suoi figli non odino chi l’ha uccisa.',
    },
  },
  hyouzouHodyJonesEmployer: {
    character: 'hody-jones',
    type: { en: 'Employer', it: 'Datore di lavoro' },
    summary: {
      en: 'Hyouzou fights for Hody as a hired swordsman.',
      it: 'Hyouzou combatte per Hody come spadaccino mercenario.',
    },
  },
  zeoHodyJonesCaptain: {
    character: 'hody-jones',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'He serves Hody during the rebellion against Ryugu Kingdom.',
      it: 'Serve Hody durante la ribellione contro il Regno di Ryugu.',
    },
  },
  megaloShirahoshiPrincessHeKeepsCompany: {
    character: 'shirahoshi',
    type: {
      en: 'Princess he keeps company',
      it: 'Principessa a cui tiene compagnia',
    },
    summary: {
      en: 'Megalo is Shirahoshi’s trusted companion in the tower.',
      it: 'Megalo è il compagno fidato di Shirahoshi nella torre.',
    },
  },
  megaloMonkeyDLuffyRescuer: {
    character: 'monkey-d-luffy',
    type: { en: 'Rescuer', it: 'Soccorritore' },
    summary: {
      en: 'Luffy frees Megalo from the kraken during the descent to Fish-Man Island.',
      it: 'Rufy libera Megalo dal kraken durante la discesa verso l’isola.',
    },
  },
  ministerOfTheRightNeptuneKingHeServes: {
    character: 'neptune',
    type: { en: 'King he serves', it: 'Re che serve' },
    summary: {
      en: 'The minister reprimands Neptune for leaving the palace without an escort.',
      it: 'Il ministro rimprovera Nettuno per essere uscito dal palazzo senza scorta.',
    },
  },
  ministerOfTheRightShirahoshiPrincessHeGuards: {
    character: 'shirahoshi',
    type: { en: 'Princess he guards', it: 'Principessa che sorveglia' },
    summary: {
      en: 'The minister checks on Shirahoshi in the tower and reminds her of the danger outside.',
      it: 'Il ministro controlla Shirahoshi nella torre e le ricorda il pericolo all’esterno.',
    },
  },
  ministerOfTheLeftNeptuneKingHeAdvises: {
    character: 'neptune',
    type: { en: 'King he advises', it: 'Re che consiglia' },
    summary: {
      en: 'The minister advises Neptune and questions the risks Otohime takes by speaking directly to the public.',
      it: 'Il ministro consiglia Nettuno e mette in dubbio i rischi corsi da Otohime parlando direttamente alla popolazione.',
    },
  },
  ministerOfTheLeftOtohimeQueenHeServes: {
    character: 'otohime',
    type: { en: 'Queen he serves', it: 'Regina che serve' },
    summary: {
      en: 'The minister wants Otohime to give her speeches from the safety of the palace.',
      it: 'Il ministro vorrebbe che Otohime pronunciasse i suoi discorsi dalla sicurezza del palazzo.',
    },
  },
  otohimeNeptuneHusband: {
    character: 'neptune',
    type: { en: 'Husband', it: 'Marito' },
    summary: {
      en: 'Neptune supports Otohime’s efforts to improve relations with humans.',
      it: 'Nettuno sostiene gli sforzi di Otohime per migliorare i rapporti con gli umani.',
    },
  },
  otohimeShirahoshiDaughter: {
    character: 'shirahoshi',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'Otohime asks Shirahoshi and her brothers not to hate whoever killed her.',
      it: 'Otohime chiede a Shirahoshi e ai suoi fratelli di non odiare chi l’ha uccisa.',
    },
  },
  otohimeFukaboshiEldestSon: {
    character: 'fukaboshi',
    type: { en: 'Eldest son', it: 'Figlio maggiore' },
    summary: {
      en: 'Otohime entrusts Fukaboshi with protecting his sister and carrying on her hopes for the future.',
      it: 'Otohime affida a Fukaboshi la protezione della sorella e le sue speranze per il futuro.',
    },
  },
  fisherTigerJinbeTrustedCrewmate: {
    character: 'jinbe',
    type: { en: 'Trusted crewmate', it: 'Compagno fidato' },
    summary: {
      en: 'Jinbe sails with Tiger and supports his command of the Sun Pirates.',
      it: 'Jinbe naviga con Tiger e ne sostiene il comando dei Pirati del Sole.',
    },
  },
  fisherTigerArlongCrewmateHeRestrains: {
    character: 'arlong',
    type: { en: 'Crewmate he restrains', it: 'Compagno che tiene a freno' },
    summary: {
      en: 'Tiger refuses to let Arlong kill humans in the name of revenge.',
      it: 'Tiger non permette ad Arlong di uccidere gli umani per vendetta.',
    },
  },
  fisherTigerKoalaChildHeHelpsReturnHome: {
    character: 'koala',
    type: {
      en: 'Child he helps return home',
      it: 'Bambina che aiuta a tornare a casa',
    },
    summary: {
      en: 'Tiger takes Koala aboard and helps her learn that she no longer has to live in fear.',
      it: 'Tiger accoglie Koala a bordo e la aiuta a capire che non deve più vivere nella paura.',
    },
  },
  aladineFisherTigerCaptainHeTriesToSave: {
    character: 'fisher-tiger',
    type: {
      en: 'Captain he tries to save',
      it: 'Capitano che cerca di salvare',
    },
    summary: {
      en: 'Aladine tries to save the wounded Tiger, who refuses a transfusion of human blood.',
      it: 'Aladin cerca di salvare Tiger ferito, che rifiuta una trasfusione di sangue umano.',
    },
  },
  aladineJinbeCaptainHeSupports: {
    character: 'jinbe',
    type: { en: 'Captain he supports', it: 'Capitano che sostiene' },
    summary: {
      en: 'Aladine supports Jinbe’s decision to leave Big Mom and join Luffy’s crew.',
      it: 'Aladin sostiene la decisione di Jinbe di lasciare Big Mom e unirsi alla ciurma di Rufy.',
    },
  },
  aladineWadatsumiCrewmate: {
    character: 'wadatsumi',
    type: { en: 'Crewmate', it: 'Compagno di ciurma' },
    summary: {
      en: 'Wadatsumi travels with Aladine and the Sun Pirates in Totto Land.',
      it: 'Wadatsumi viaggia con Aladin e i Pirati del Sole a Tottoland.',
    },
  },
  pekomsBaronTamagoPartnerCollectingTribute: {
    character: 'baron-tamago',
    type: {
      en: 'Partner collecting tribute',
      it: 'Compagno nella riscossione del tributo',
    },
    summary: {
      en: 'Pekoms and Tamago come to Fish-Man Island to collect Big Mom’s sweets.',
      it: 'Pekoms e Tamago arrivano sull’isola per riscuotere i dolci dovuti a Big Mom.',
    },
  },
  pekomsMonkeyDLuffySaviourOfHisHomeland: {
    character: 'monkey-d-luffy',
    type: { en: 'Saviour of his homeland', it: 'Salvatore della sua terra' },
    summary: {
      en: 'Pekoms thanks Luffy’s crew for saving the people of Zou and wants to spare Sanji.',
      it: 'Pekoms ringrazia la ciurma di Rufy per aver salvato gli abitanti di Zou e vuole risparmiare Sanji.',
    },
  },
  pekomsCaponeBegeCrewmateWhoShootsHim: {
    character: 'capone-bege',
    type: { en: 'Crewmate who shoots him', it: 'Compagno che gli spara' },
    summary: {
      en: 'Bege shoots Pekoms when he refuses to carry out the mission against the Straw Hats as planned.',
      it: 'Bege spara a Pekoms quando lui rifiuta di eseguire la missione contro i Cappello di Paglia come previsto.',
    },
  },
  pekomsPedroFormerCaptain: {
    character: 'pedro',
    type: { en: 'Former captain', it: 'Ex capitano' },
    summary: {
      en: 'Pekoms once sailed with Pedro in the Nox Pirates.',
      it: 'Pekoms un tempo navigava con Pedro nei Pirati Nox.',
    },
  },
  pekomsCharlotteLinlinCaptain: {
    character: 'charlotte-linlin',
    type: { en: 'Captain', it: 'Capitana' },
    summary: {
      en: 'Pekoms serves Big Mom and fears the consequences of disobeying her.',
      it: 'Pekoms serve Big Mom e teme le conseguenze della disobbedienza.',
    },
  },
  pekomsCaponeBegeAttackerHeRefusesToJoin: {
    character: 'capone-bege',
    type: {
      en: 'Attacker he refuses to join',
      it: 'Aggressore a cui rifiuta di unirsi',
    },
    summary: {
      en: 'Pekoms refuses Bege’s plot against Big Mom. Bege shoots him off a cliff.',
      it: 'Pekoms rifiuta il complotto di Bege contro Big Mom. Bege gli spara e lo fa cadere da una scogliera.',
    },
  },
  pekomsJinbeRescuer: {
    character: 'jinbe',
    type: { en: 'Rescuer', it: 'Soccorritore' },
    summary: {
      en: 'Jinbe says his crew rescued Pekoms after Bege shot him into the sea.',
      it: 'Jinbe dice che la sua ciurma ha salvato Pekoms dopo che Bege gli ha sparato facendolo cadere in mare.',
    },
  },
  pekomsMonkeyDLuffyFugitiveHeHelpsEscape: {
    character: 'monkey-d-luffy',
    type: {
      en: 'Fugitive he helps escape',
      it: 'Fuggitivo che aiuta a scappare',
    },
    summary: {
      en: 'Pekoms helps Luffy leave the Mirror World to honour Pedro’s sacrifice.',
      it: 'Pekoms aiuta Rufy a lasciare il Mondo degli Specchi per onorare il sacrificio di Pedro.',
    },
  },
  pekomsPedroFormerCaptainWhoseSacrificeHeHonours: {
    character: 'pedro',
    type: {
      en: 'Former captain whose sacrifice he honours',
      it: 'Ex capitano di cui onora il sacrificio',
    },
    summary: {
      en: 'After Pedro’s death, Pekoms risks his life to help the people Pedro wanted to save.',
      it: 'Dopo la morte di Pedro, Pekoms rischia la vita per aiutare le persone che Pedro voleva salvare.',
    },
  },
  baronTamagoPekomsPartnerCollectingTribute: {
    character: 'pekoms',
    type: {
      en: 'Partner collecting tribute',
      it: 'Compagno nella riscossione del tributo',
    },
    summary: {
      en: 'Tamago collects Fish-Man Island’s tribute with Pekoms and rebukes him for threatening the inhabitants.',
      it: 'Tamago riscuote il tributo dell’isola con Pekoms e lo rimprovera per aver minacciato gli abitanti.',
    },
  },
  baronTamagoCharlotteLinlinCaptain: {
    character: 'charlotte-linlin',
    type: { en: 'Captain', it: 'Capitana' },
    summary: {
      en: 'Tamago serves Big Mom and carries out her crew’s assignments.',
      it: 'Tamago serve Big Mom ed esegue gli incarichi della sua ciurma.',
    },
  },
  bobbinCharlotteLinlinCaptain: {
    character: 'charlotte-linlin',
    type: { en: 'Captain', it: 'Capitana' },
    summary: {
      en: 'Bobbin reports to Big Mom after destroying a country that failed to deliver its promised sweets.',
      it: 'Bobbin fa rapporto a Big Mom dopo aver distrutto un paese che non ha consegnato i dolci promessi.',
    },
  },
  bobbinSanjiTargetWhoStrikesHim: {
    character: 'sanji',
    type: { en: 'Target who strikes him', it: 'Bersaglio che lo colpisce' },
    summary: {
      en: 'Sanji kicks Bobbin when he tries to take the food Sanji prepared for Luffy.',
      it: 'Sanji colpisce Bobbin con un calcio quando lui cerca di prendere il cibo preparato per Rufy.',
    },
  },
} satisfies Record<string, Relationship>

/** All 30 debut characters have supported links; no whole-character omissions. */
export const fishManIslandRelationshipOmissions: Record<string, string> = {}

/**
 * Original IT/EN wording. Revisions and gate pages are pinned in provenance.
 * Gates are delayed behind both archived endpoints, including Big Mom,
 * Mjosgard, Koala and the named officers. This also covers reordered scenes.
 * Praline has no archived character record, so Aladine's marriage is omitted.
 * Wadatsumi's cover-story reconciliation is chapter-only; the anime waits
 * for his appearance with Jinbe in Totto Land.
 */
export const fishManIslandRelationships = {
  'caribou': [
    { episode: 519, chapter: 602, value: [links.caribouCoribouYoungerBrother] },
    {
      episode: 570,
      chapter: 650,
      value: [
        links.caribouCoribouYoungerBrother,
        links.caribouShirahoshiPrincessHeTriesToAbduct,
        links.caribouMonkeyDLuffyOpponentWhoStopsHim,
      ],
    },
    {
      episode: 572,
      chapter: 653,
      value: [
        links.caribouCoribouYoungerBrother,
        links.caribouShirahoshiPrincessHeTriesToAbduct,
        links.caribouMonkeyDLuffyOpponentWhoStopsHim,
        {
          character: 'pekoms',
          type: {
            en: 'Opponent who defeats him',
            it: 'Avversario che lo sconfigge',
          },
          summary: {
            en: 'Pekoms knocks Caribou down when he tries to recover the stolen treasure.',
            it: 'Pekoms abbatte Caribou quando cerca di recuperare il tesoro rubato.',
          },
        },
      ],
    },
    {
      episode: 572,
      chapter: 686,
      value: [
        {
          character: 'coribou',
          type: { en: 'Brother who frees him', it: 'Fratello che lo libera' },
          summary: {
            en: 'Coribou and his crew free Caribou from G-5.',
            it: 'Coribou e la sua ciurma liberano Caribou dal G-5.',
          },
        },
      ],
      source: 'chapter',
    },
    {
      episode: 572,
      chapter: 687,
      value: [
        {
          character: 'coribou',
          type: { en: 'Brother he abandons', it: 'Fratello che abbandona' },
          summary: {
            en: 'Caribou sails away alone, leaving Coribou and the crew behind.',
            it: 'Caribou salpa da solo, lasciando indietro Coribou e la ciurma.',
          },
        },
      ],
      source: 'chapter',
    },
    {
      episode: 572,
      chapter: 715,
      value: [
        {
          character: 'coribou',
          type: {
            en: 'Brother who returns for him',
            it: 'Fratello che torna a prenderlo',
          },
          summary: {
            en: 'Coribou comes back for Caribou despite having been abandoned by him.',
            it: 'Coribou torna a prendere Caribou nonostante sia stato abbandonato da lui.',
          },
        },
      ],
      source: 'chapter',
    },
    {
      episode: 937,
      chapter: 940,
      value: [
        links.caribouCoribouYoungerBrother,
        {
          character: 'monkey-d-luffy',
          type: {
            en: 'Captain he asks to serve',
            it: 'Capitano che chiede di servire',
          },
          summary: {
            en: 'Caribou offers to work for Luffy in return for passage out of Wano. Luffy accepts.',
            it: 'Caribou offre di lavorare per Rufy in cambio di un passaggio fuori da Wano. Rufy accetta.',
          },
        },
      ],
    },
    {
      episode: 1044,
      chapter: 1021,
      value: [
        links.caribouCoribouYoungerBrother,
        links.caribouMonkeyDLuffyAllyHeFeeds,
      ],
    },
    {
      episode: 1141,
      chapter: 1107,
      value: [
        {
          character: 'marshall-d-teach',
          type: { en: 'Pirate he idolizes', it: 'Pirata che ammira' },
          summary: {
            en: 'Caribou says Blackbeard inspired him to become a pirate and asks to join his crew.',
            it: 'Caribou dice che Barbanera gli ha ispirato la scelta di diventare pirata e chiede di unirsi alla sua ciurma.',
          },
        },
        links.caribouCoribouYoungerBrother,
        links.caribouVanAugurPirateHeAsksForPassage,
        links.caribouCatarinaDevonPirateHeAsksForPassage,
        links.caribouMonkeyDLuffyAllyHeFeeds,
      ],
    },
    {
      episode: 1142,
      chapter: 1108,
      value: [
        links.caribouMarshallDTeachPirateHeOffersInformationTo,
        links.caribouCoribouYoungerBrother,
        links.caribouVanAugurPirateHeAsksForPassage,
        links.caribouCatarinaDevonPirateHeAsksForPassage,
        links.caribouMonkeyDLuffyAllyHeFeeds,
      ],
      source: 'chapter',
    },
    {
      episode: 1142,
      chapter: 1108,
      value: [
        links.caribouMarshallDTeachPirateHeOffersInformationTo,
        links.caribouCoribouYoungerBrother,
        links.caribouVanAugurEscortToBlackbeard,
        links.caribouCatarinaDevonEscortToBlackbeard,
        links.caribouMonkeyDLuffyAllyHeFeeds,
      ],
      source: 'episode',
    },
    {
      episode: 1153,
      chapter: 1122,
      value: [
        {
          character: 'marshall-d-teach',
          type: {
            en: 'Pirate who agrees to hear him',
            it: 'Pirata che accetta di ascoltarlo',
          },
          summary: {
            en: 'Blackbeard agrees to hear Caribou’s information but threatens to kill him if it is disappointing.',
            it: 'Barbanera accetta di ascoltare le informazioni di Caribou ma minaccia di ucciderlo se saranno deludenti.',
          },
        },
        links.caribouCoribouYoungerBrother,
        links.caribouVanAugurEscortToBlackbeard,
        links.caribouCatarinaDevonEscortToBlackbeard,
        links.caribouMonkeyDLuffyAllyHeFeeds,
      ],
    },
  ],
  'coribou': [
    {
      episode: 519,
      chapter: 602,
      value: [
        {
          character: 'caribou',
          type: { en: 'Older brother', it: 'Fratello maggiore' },
          summary: {
            en: 'Coribou sails with Caribou and follows his orders.',
            it: 'Coribou naviga con Caribou e ne segue gli ordini.',
          },
        },
      ],
    },
    {
      episode: 572,
      chapter: 686,
      value: [
        {
          character: 'caribou',
          type: { en: 'Brother he frees', it: 'Fratello che libera' },
          summary: {
            en: 'Coribou helps free Caribou from G-5.',
            it: 'Coribou aiuta a liberare Caribou dal G-5.',
          },
        },
      ],
      source: 'chapter',
    },
    {
      episode: 572,
      chapter: 687,
      value: [
        {
          character: 'caribou',
          type: {
            en: 'Brother who abandons him',
            it: 'Fratello che lo abbandona',
          },
          summary: {
            en: 'Caribou escapes alone, leaving Coribou and the crew behind.',
            it: 'Caribou fugge da solo, lasciando indietro Coribou e la ciurma.',
          },
        },
      ],
      source: 'chapter',
    },
    {
      episode: 572,
      chapter: 715,
      value: [
        {
          character: 'caribou',
          type: {
            en: 'Brother he returns to help',
            it: 'Fratello che torna ad aiutare',
          },
          summary: {
            en: 'Coribou returns to Caribou despite his earlier abandonment.',
            it: 'Coribou torna da Caribou nonostante il precedente abbandono.',
          },
        },
      ],
      source: 'chapter',
    },
  ],
  'demalo-black': [
    {
      episode: 521,
      chapter: 601,
      value: [
        links.demaloBlackMonkeyDLuffyPirateHeImpersonates,
        links.demaloBlackSentomaruMarineWhoExposesHim,
      ],
    },
    {
      episode: 1148,
      chapter: 1115,
      value: [
        {
          character: 'eustass-kid',
          type: {
            en: 'Pirate he impersonates in prison',
            it: 'Pirata che imita in prigione',
          },
          summary: {
            en: 'In prison, Demalo Black adopts Kid’s appearance and asks his companions who is stronger, Kid or Luffy.',
            it: 'In prigione Demalo Black imita l’aspetto di Kidd e chiede ai compagni chi sia più forte tra lui e Rufy.',
          },
        },
        links.demaloBlackMonkeyDLuffyPirateHeImpersonates,
        links.demaloBlackSentomaruMarineWhoExposesHim,
      ],
    },
  ],
  'hammond': [
    {
      episode: 530,
      chapter: 611,
      value: [
        links.hammondHodyJonesCaptain,
        links.hammondMonkeyDLuffyOpponentWhoRepelsHim,
      ],
    },
    {
      episode: 563,
      chapter: 643,
      value: [
        links.hammondHodyJonesCaptain,
        links.hammondMonkeyDLuffyOpponentWhoRepelsHim,
        {
          character: 'nico-robin',
          type: {
            en: 'Opponent who defeats him',
            it: 'Avversaria che lo sconfigge',
          },
          summary: {
            en: 'Robin frees Hammond’s human captives and defeats him.',
            it: 'Robin libera i prigionieri umani di Hammond e lo sconfigge.',
          },
        },
      ],
    },
  ],
  'shyarly': [
    {
      episode: 529,
      chapter: 612,
      value: [
        links.shyarlyCamieEmployee,
        links.shyarlyMonkeyDLuffySubjectOfHerPrediction,
      ],
    },
    {
      episode: 552,
      chapter: 632,
      value: [
        links.shyarlyCamieEmployee,
        links.shyarlyMonkeyDLuffySubjectOfHerPrediction,
        links.shyarlyArlongBrother,
        links.shyarlyHodyJonesAttacker,
      ],
    },
    {
      episode: 573,
      chapter: 653,
      value: [
        links.shyarlyCamieEmployee,
        links.shyarlyMonkeyDLuffyPirateSheHopesSheMisjudged,
        links.shyarlyArlongBrother,
        links.shyarlyHodyJonesAttacker,
      ],
    },
    {
      episode: 967,
      chapter: 967,
      value: [
        links.shyarlyCamieEmployee,
        links.shyarlyMonkeyDLuffyPirateSheHopesSheMisjudged,
        links.shyarlyArlongBrother,
        links.shyarlyHodyJonesAttacker,
        {
          character: 'gold-roger',
          type: {
            en: 'Visitor who hears her prediction',
            it: 'Visitatore che ascolta la sua predizione',
          },
          summary: {
            en: 'As a child, Shyarly tells Roger when the mermaid princess will be born.',
            it: 'Da bambina Shirley dice a Roger quando nascerà la principessa sirena.',
          },
        },
      ],
    },
  ],
  'ankoro': [
    {
      episode: 529,
      chapter: 615,
      value: [
        {
          character: 'wadatsumi',
          type: { en: 'Keeper', it: 'Custode' },
          summary: {
            en: 'Wadatsumi stops Ankoro from swallowing the Straw Hats’ ship.',
            it: 'Wadatsumi impedisce ad Ankoro di inghiottire la nave dei Cappello di Paglia.',
          },
        },
        {
          character: 'vander-decken-ix',
          type: { en: 'Captain', it: 'Capitano' },
          summary: {
            en: 'Ankoro accompanies Vander Decken’s crew in the deep sea.',
            it: 'Ankoro accompagna la ciurma di Van Der Decken nelle profondità marine.',
          },
        },
      ],
    },
  ],
  'vander-decken-ix': [
    {
      episode: 532,
      chapter: 615,
      value: [
        links.vanderDeckenIxShirahoshiTargetOfHisThreats,
        links.vanderDeckenIxHodyJonesAlly,
        links.vanderDeckenIxWadatsumiSubordinate,
      ],
      source: 'episode',
    },
    {
      episode: 537,
      chapter: 618,
      value: [
        links.vanderDeckenIxShirahoshiTargetOfHisThreats,
        links.vanderDeckenIxHodyJonesAlly,
        links.vanderDeckenIxWadatsumiSubordinate,
        links.vanderDeckenIxMonkeyDLuffyOpponentProtectingShirahoshi,
      ],
    },
    {
      episode: 562,
      chapter: 641,
      value: [
        links.vanderDeckenIxShirahoshiTargetOfHisThreats,
        {
          character: 'hody-jones',
          type: { en: 'Ally who betrays him', it: 'Alleato che lo tradisce' },
          summary: {
            en: 'Hody stabs Decken aboard Noah, ending their alliance.',
            it: 'Hody trafigge Decken a bordo di Noah, ponendo fine alla loro alleanza.',
          },
        },
        links.vanderDeckenIxWadatsumiSubordinate,
        links.vanderDeckenIxMonkeyDLuffyOpponentProtectingShirahoshi,
      ],
    },
  ],
  'surume': [
    {
      episode: 526,
      chapter: 615,
      value: [links.surumeMonkeyDLuffyFriendWhoTamesHim],
    },
    {
      episode: 557,
      chapter: 636,
      value: [
        links.surumeMonkeyDLuffyFriendWhoTamesHim,
        {
          character: 'hody-jones',
          type: {
            en: 'Captor threatening his family',
            it: 'Carceriere che minaccia la sua famiglia',
          },
          summary: {
            en: 'Hody forces Surume to obey by threatening his brothers. Luffy promises to protect them.',
            it: 'Hody costringe Surume a obbedire minacciando i suoi fratelli. Rufy promette di proteggerli.',
          },
        },
        {
          character: 'shirahoshi',
          type: { en: 'Princess he protects', it: 'Principessa che protegge' },
          summary: {
            en: 'Luffy entrusts Shirahoshi’s safety to Surume during the battle.',
            it: 'Rufy affida a Surume la protezione di Shirahoshi durante la battaglia.',
          },
        },
      ],
    },
  ],
  'wadatsumi': [
    {
      episode: 529,
      chapter: 615,
      value: [
        links.wadatsumiVanderDeckenIxCaptain,
        {
          character: 'ankoro',
          type: {
            en: 'Creature he keeps in check',
            it: 'Creatura che tiene a bada',
          },
          summary: {
            en: 'Wadatsumi stops Ankoro from eating the Straw Hats’ ship.',
            it: 'Wadatsumi impedisce ad Ankoro di mangiare la nave dei Cappello di Paglia.',
          },
        },
      ],
    },
    {
      episode: 566,
      chapter: 646,
      value: [
        links.wadatsumiVanderDeckenIxCaptain,
        {
          character: 'jinbe',
          type: {
            en: 'Opponent who defeats him',
            it: 'Avversario che lo sconfigge',
          },
          summary: {
            en: 'Jinbe and Sanji combine their attacks to defeat Wadatsumi.',
            it: 'Jinbe e Sanji uniscono i loro attacchi per sconfiggere Wadatsumi.',
          },
        },
        links.wadatsumiSanjiOpponentWhoDefeatsHim,
        {
          character: 'zeo',
          type: {
            en: 'Pirate who manipulates him',
            it: 'Pirata che lo manipola',
          },
          summary: {
            en: 'Zeo persuades Wadatsumi that Decken has not abandoned him and gives him an Energy Steroid.',
            it: 'Zeo convince Wadatsumi che Decken non lo ha abbandonato e gli dà uno Steroide Energetico.',
          },
        },
      ],
    },
    {
      episode: 790,
      chapter: 785,
      value: [
        {
          character: 'vander-decken-ix',
          type: { en: 'Former captain', it: 'Ex capitano' },
          summary: {
            en: 'Wadatsumi no longer sails with Decken after the defeat at Fish-Man Island.',
            it: 'Wadatsumi non naviga più con Decken dopo la sconfitta all’Isola degli Uomini-Pesce.',
          },
        },
        {
          character: 'jinbe',
          type: { en: 'Companion he follows', it: 'Compagno che segue' },
          summary: {
            en: 'After making amends for the damage he caused, Wadatsumi asks to travel with Jinbe.',
            it: 'Dopo aver rimediato ai danni causati, Wadatsumi chiede di viaggiare con Jinbe.',
          },
        },
        links.wadatsumiSanjiOpponentWhoDefeatsHim,
      ],
      source: 'chapter',
    },
    {
      episode: 790,
      chapter: 830,
      value: [
        links.wadatsumiVanderDeckenIxFormerCaptain,
        links.wadatsumiJinbeCompanion,
        links.wadatsumiSanjiOpponentWhoDefeatsHim,
      ],
    },
    {
      episode: 876,
      chapter: 901,
      value: [
        links.wadatsumiVanderDeckenIxFormerCaptain,
        links.wadatsumiJinbeCompanion,
        links.wadatsumiSanjiOpponentWhoDefeatsHim,
        {
          character: 'monkey-d-luffy',
          type: {
            en: 'Captain whose escape he helps',
            it: 'Capitano di cui aiuta la fuga',
          },
          summary: {
            en: 'Wadatsumi hides the Sunny in his mouth to save Luffy and his companions from the enemy fleet.',
            it: 'Wadatsumi nasconde la Sunny nella bocca per salvare Rufy e i suoi compagni dalla flotta nemica.',
          },
        },
      ],
    },
  ],
  'hody-jones': [
    {
      episode: 534,
      chapter: 615,
      value: [
        links.hodyJonesArlongIdeologicalModel,
        links.hodyJonesVanderDeckenIxAlly,
        links.hodyJonesNeptuneKingHeSeeksToOverthrow,
      ],
    },
    {
      episode: 552,
      chapter: 632,
      value: [
        links.hodyJonesOtohimeQueenHeMurdered,
        links.hodyJonesNeptuneKingHeSeeksToOverthrow,
        links.hodyJonesVanderDeckenIxAlly,
        links.hodyJonesMonkeyDLuffyEnemy,
        links.hodyJonesArlongIdeologicalModel,
      ],
    },
    {
      episode: 562,
      chapter: 641,
      value: [
        links.hodyJonesOtohimeQueenHeMurdered,
        links.hodyJonesNeptuneKingHeSeeksToOverthrow,
        links.hodyJonesVanderDeckenIxAllyHeAttacks,
        links.hodyJonesMonkeyDLuffyEnemy,
        links.hodyJonesArlongIdeologicalModel,
      ],
    },
    {
      episode: 567,
      chapter: 647,
      value: [
        links.hodyJonesOtohimeQueenHeMurdered,
        links.hodyJonesNeptuneKingHeSeeksToOverthrow,
        links.hodyJonesVanderDeckenIxAllyHeAttacks,
        {
          character: 'monkey-d-luffy',
          type: {
            en: 'Opponent who defeats him',
            it: 'Avversario che lo sconfigge',
          },
          summary: {
            en: 'Luffy defeats Hody despite his repeated use of Energy Steroids.',
            it: 'Rufy sconfigge Hody nonostante il suo ripetuto uso di Steroidi Energetici.',
          },
        },
        links.hodyJonesArlongIdeologicalModel,
      ],
    },
  ],
  'neptune': [
    {
      episode: 531,
      chapter: 618,
      value: [
        links.neptuneShirahoshiDaughter,
        links.neptuneFukaboshiEldestSon,
        links.neptuneRyuboshiSon,
        links.neptuneManboshiSon,
      ],
    },
    {
      episode: 546,
      chapter: 626,
      value: [
        links.neptuneOtohimeLateWife,
        links.neptuneShirahoshiDaughter,
        links.neptuneFukaboshiEldestSon,
        links.neptuneRyuboshiSon,
        links.neptuneManboshiSon,
      ],
    },
    {
      episode: 574,
      chapter: 653,
      value: [
        links.neptuneOtohimeLateWife,
        links.neptuneShirahoshiDaughter,
        links.neptuneFukaboshiEldestSon,
        links.neptuneMonkeyDLuffySaviourOfHisFamily,
        links.neptuneJinbeTrustedFriend,
      ],
    },
    {
      episode: 1167,
      chapter: 1167,
      value: [
        links.neptuneOtohimeLateWife,
        links.neptuneShirahoshiDaughter,
        {
          character: 'harald',
          type: { en: 'Fellow king and friend', it: 'Re e amico' },
          summary: {
            en: 'Neptune shares a drink with Harald and tells him about the prediction of his daughter’s birth.',
            it: 'Nettuno beve con Harald e gli racconta la predizione sulla nascita di sua figlia.',
          },
        },
        links.neptuneMonkeyDLuffySaviourOfHisFamily,
        links.neptuneJinbeTrustedFriend,
      ],
      source: 'chapter',
    },
  ],
  'fukaboshi': [
    {
      episode: 530,
      chapter: 616,
      value: [
        links.fukaboshiNeptuneFather,
        links.fukaboshiRyuboshiBrother,
        links.fukaboshiManboshiBrother,
      ],
    },
    {
      episode: 531,
      chapter: 618,
      value: [
        links.fukaboshiNeptuneFather,
        links.fukaboshiRyuboshiBrother,
        links.fukaboshiManboshiBrother,
        links.fukaboshiShirahoshiYoungerSister,
      ],
    },
    {
      episode: 546,
      chapter: 626,
      value: [
        links.fukaboshiNeptuneFather,
        links.fukaboshiOtohimeMother,
        links.fukaboshiShirahoshiYoungerSister,
        links.fukaboshiRyuboshiBrother,
        links.fukaboshiManboshiBrother,
      ],
    },
    {
      episode: 563,
      chapter: 643,
      value: [
        links.fukaboshiNeptuneFather,
        links.fukaboshiOtohimeMother,
        links.fukaboshiShirahoshiYoungerSister,
        {
          character: 'monkey-d-luffy',
          type: {
            en: 'Pirate he entrusts with the island',
            it: 'Pirata a cui affida l’isola',
          },
          summary: {
            en: 'Fukaboshi asks Luffy to save Fish-Man Island from the hatred that produced Hody.',
            it: 'Fukaboshi chiede a Rufy di salvare l’isola dall’odio che ha generato Hody.',
          },
        },
        links.fukaboshiRyuboshiBrother,
      ],
    },
  ],
  'ryuboshi': [
    {
      episode: 530,
      chapter: 616,
      value: [
        links.fukaboshiNeptuneFather,
        links.ryuboshiFukaboshiBrother,
        links.fukaboshiManboshiBrother,
      ],
    },
    {
      episode: 531,
      chapter: 618,
      value: [
        links.fukaboshiNeptuneFather,
        links.ryuboshiFukaboshiBrother,
        links.fukaboshiManboshiBrother,
        links.fukaboshiShirahoshiYoungerSister,
      ],
    },
    {
      episode: 546,
      chapter: 626,
      value: [
        links.fukaboshiNeptuneFather,
        links.fukaboshiOtohimeMother,
        links.fukaboshiShirahoshiYoungerSister,
        links.ryuboshiFukaboshiBrother,
        links.fukaboshiManboshiBrother,
      ],
    },
  ],
  'manboshi': [
    {
      episode: 530,
      chapter: 616,
      value: [
        links.fukaboshiNeptuneFather,
        links.ryuboshiFukaboshiBrother,
        links.fukaboshiRyuboshiBrother,
      ],
    },
    {
      episode: 531,
      chapter: 618,
      value: [
        links.fukaboshiNeptuneFather,
        links.ryuboshiFukaboshiBrother,
        links.fukaboshiRyuboshiBrother,
        links.fukaboshiShirahoshiYoungerSister,
      ],
    },
    {
      episode: 546,
      chapter: 626,
      value: [
        links.fukaboshiNeptuneFather,
        links.fukaboshiOtohimeMother,
        links.fukaboshiShirahoshiYoungerSister,
        links.ryuboshiFukaboshiBrother,
        links.fukaboshiRyuboshiBrother,
      ],
    },
  ],
  'shirahoshi': [
    {
      episode: 531,
      chapter: 618,
      value: [
        links.shirahoshiNeptuneFather,
        links.shirahoshiMegaloTrustedCompanion,
        links.shirahoshiVanderDeckenIxPersecutor,
      ],
      source: 'episode',
    },
    {
      episode: 537,
      chapter: 618,
      value: [
        links.shirahoshiNeptuneFather,
        links.shirahoshiMegaloTrustedCompanion,
        links.shirahoshiMonkeyDLuffyFriendAndProtector,
        links.shirahoshiVanderDeckenIxPersecutor,
      ],
    },
    {
      episode: 546,
      chapter: 626,
      value: [
        links.shirahoshiNeptuneFather,
        links.shirahoshiMegaloTrustedCompanion,
        links.shirahoshiMonkeyDLuffyFriendAndProtector,
        links.shirahoshiOtohimeMother,
        links.shirahoshiVanderDeckenIxPersecutor,
      ],
    },
    {
      episode: 553,
      chapter: 633,
      value: [
        links.shirahoshiNeptuneFather,
        links.shirahoshiMegaloTrustedCompanion,
        links.shirahoshiMonkeyDLuffyFriendAndProtector,
        links.shirahoshiOtohimeMother,
        {
          character: 'hody-jones',
          type: { en: 'Her mother’s killer', it: 'Assassino di sua madre' },
          summary: {
            en: 'Megalo told Shirahoshi that Hody killed Otohime. She kept silent to honour her mother’s wish.',
            it: 'Megalo ha detto a Shirahoshi che Hody ha ucciso Otohime. Lei ha taciuto per rispettare il desiderio della madre.',
          },
        },
      ],
    },
    {
      episode: 886,
      chapter: 907,
      value: [
        links.shirahoshiNeptuneFather,
        links.shirahoshiMegaloTrustedCompanion,
        links.shirahoshiMonkeyDLuffyFriendAndProtector,
        links.shirahoshiOtohimeMother,
        {
          character: 'donquixote-mjosgard',
          type: { en: 'Rescuer', it: 'Soccorritore' },
          summary: {
            en: 'Mjosgard stops Charlos from enslaving Shirahoshi and says he owes his changed outlook to Otohime.',
            it: 'Mjosgard impedisce a Charloss di ridurre Shirahoshi in schiavitù e attribuisce a Otohime il proprio cambiamento.',
          },
        },
      ],
    },
    {
      episode: 1118,
      chapter: 1084,
      value: [
        links.shirahoshiMonkeyDLuffyFriendAndProtector,
        links.shirahoshiNeptuneFather,
        links.shirahoshiOtohimeMother,
        {
          character: 'sai',
          type: { en: 'Rescuer at the Levely', it: 'Soccorritore al Reverie' },
          summary: {
            en: 'Sai attacks Charlos to stop his second attempt to enslave Shirahoshi.',
            it: 'Sai attacca Charloss per fermare il suo secondo tentativo di ridurre Shirahoshi in schiavitù.',
          },
        },
        {
          character: 'leo',
          type: { en: 'Rescuer at the Levely', it: 'Soccorritore al Reverie' },
          summary: {
            en: 'Leo helps Sai stop Charlos from taking Shirahoshi captive.',
            it: 'Leo aiuta Sai a impedire che Charloss catturi Shirahoshi.',
          },
        },
      ],
    },
  ],
  'hyouzou': [
    { episode: 534, chapter: 620, value: [links.hyouzouHodyJonesEmployer] },
    {
      episode: 566,
      chapter: 646,
      value: [
        links.hyouzouHodyJonesEmployer,
        {
          character: 'roronoa-zoro',
          type: {
            en: 'Opponent who defeats him',
            it: 'Avversario che lo sconfigge',
          },
          summary: {
            en: 'Zoro defeats him during the battle in Gyoncorde Plaza.',
            it: 'Zoro lo sconfigge durante la battaglia nella Piazza Gyoncorde.',
          },
        },
      ],
    },
  ],
  'zeo': [
    { episode: 539, chapter: 620, value: [links.zeoHodyJonesCaptain] },
    {
      episode: 566,
      chapter: 646,
      value: [
        links.zeoHodyJonesCaptain,
        {
          character: 'brook',
          type: {
            en: 'Opponent who defeats him',
            it: 'Avversario che lo sconfigge',
          },
          summary: {
            en: 'Brook defeats him during the battle in Gyoncorde Plaza.',
            it: 'Brook lo sconfigge durante la battaglia nella Piazza Gyoncorde.',
          },
        },
      ],
    },
  ],
  'daruma': [
    { episode: 539, chapter: 620, value: [links.zeoHodyJonesCaptain] },
    {
      episode: 566,
      chapter: 646,
      value: [
        links.zeoHodyJonesCaptain,
        {
          character: 'usopp',
          type: {
            en: 'Opponent who defeats him',
            it: 'Avversario che lo sconfigge',
          },
          summary: {
            en: 'Usopp defeats him during the battle in Gyoncorde Plaza.',
            it: 'Usop lo sconfigge durante la battaglia nella Piazza Gyoncorde.',
          },
        },
      ],
    },
  ],
  'ikaros-much': [
    { episode: 539, chapter: 620, value: [links.zeoHodyJonesCaptain] },
    {
      episode: 566,
      chapter: 646,
      value: [
        links.zeoHodyJonesCaptain,
        {
          character: 'franky',
          type: {
            en: 'Opponent who defeats him',
            it: 'Avversario che lo sconfigge',
          },
          summary: {
            en: 'Franky defeats him during the battle in Gyoncorde Plaza.',
            it: 'Franky lo sconfigge durante la battaglia nella Piazza Gyoncorde.',
          },
        },
      ],
    },
  ],
  'dosun': [
    { episode: 538, chapter: 620, value: [links.zeoHodyJonesCaptain] },
    {
      episode: 566,
      chapter: 646,
      value: [
        links.zeoHodyJonesCaptain,
        {
          character: 'tony-tony-chopper',
          type: {
            en: 'Opponent who defeats him',
            it: 'Avversario che lo sconfigge',
          },
          summary: {
            en: 'Chopper defeats him during the battle in Gyoncorde Plaza.',
            it: 'Chopper lo sconfigge durante la battaglia nella Piazza Gyoncorde.',
          },
        },
      ],
    },
  ],
  'megalo': [
    {
      episode: 531,
      chapter: 618,
      value: [
        links.megaloShirahoshiPrincessHeKeepsCompany,
        links.megaloMonkeyDLuffyRescuer,
      ],
    },
    {
      episode: 553,
      chapter: 633,
      value: [
        links.megaloShirahoshiPrincessHeKeepsCompany,
        links.megaloMonkeyDLuffyRescuer,
        {
          character: 'hody-jones',
          type: {
            en: 'Killer he witnessed',
            it: 'Assassino di cui è testimone',
          },
          summary: {
            en: 'Megalo saw Hody murder Otohime and told Shirahoshi in secret.',
            it: 'Megalo ha visto Hody uccidere Otohime e lo ha raccontato a Shirahoshi in segreto.',
          },
        },
      ],
    },
  ],
  'den': [
    {
      episode: 535,
      chapter: 616,
      value: [
        {
          character: 'tom',
          type: { en: 'Older brother', it: 'Fratello maggiore' },
          summary: {
            en: 'Den is Tom’s younger brother, though the two belong to different fish species.',
            it: 'Den è il fratello minore di Tom, anche se appartengono a specie diverse.',
          },
        },
        {
          character: 'franky',
          type: { en: 'Shipwright he helps', it: 'Carpentiere che aiuta' },
          summary: {
            en: 'Den agrees to coat Franky’s ship in the Sea Forest.',
            it: 'Den accetta di rivestire la nave di Franky nella Foresta Marina.',
          },
        },
        {
          character: 'kokoro',
          type: { en: 'Correspondent', it: 'Corrispondente' },
          summary: {
            en: 'Kokoro’s letters have told Den about Franky and Iceburg.',
            it: 'Le lettere di Kokoro hanno fatto conoscere a Den Franky e Iceburg.',
          },
        },
      ],
    },
  ],
  'minister-of-the-right': [
    {
      episode: 532,
      chapter: 613,
      value: [links.ministerOfTheRightNeptuneKingHeServes],
    },
    {
      episode: 533,
      chapter: 618,
      value: [
        links.ministerOfTheRightNeptuneKingHeServes,
        links.ministerOfTheRightShirahoshiPrincessHeGuards,
      ],
    },
    {
      episode: 535,
      chapter: 619,
      value: [
        links.ministerOfTheRightNeptuneKingHeServes,
        links.ministerOfTheRightShirahoshiPrincessHeGuards,
        {
          character: 'brook',
          type: { en: 'Pirate who carries him', it: 'Pirata che lo trasporta' },
          summary: {
            en: 'Brook carries the minister to the tower to check on Shirahoshi.',
            it: 'Brook porta il ministro alla torre per controllare Shirahoshi.',
          },
        },
      ],
    },
  ],
  'minister-of-the-left': [
    {
      episode: 544,
      chapter: 626,
      value: [
        links.ministerOfTheLeftNeptuneKingHeAdvises,
        links.ministerOfTheLeftOtohimeQueenHeServes,
      ],
    },
    {
      episode: 574,
      chapter: 653,
      value: [
        links.ministerOfTheLeftNeptuneKingHeAdvises,
        links.ministerOfTheLeftOtohimeQueenHeServes,
        {
          character: 'nami',
          type: { en: 'Navigator he equips', it: 'Navigatrice che equipaggia' },
          summary: {
            en: 'The minister gives Nami a three-needle Log Pose and explains how it works in the New World.',
            it: 'Il ministro dà a Nami un Log Pose a tre aghi e le spiega come funziona nel Nuovo Mondo.',
          },
        },
      ],
    },
  ],
  'otohime': [
    {
      episode: 546,
      chapter: 626,
      value: [
        links.otohimeNeptuneHusband,
        links.otohimeShirahoshiDaughter,
        links.otohimeFukaboshiEldestSon,
        {
          character: 'ryuboshi',
          type: { en: 'Son', it: 'Figlio' },
          summary: {
            en: 'Ryuboshi comforts his sister while Otohime speaks to her children for the last time.',
            it: 'Ryuboshi consola la sorella mentre Otohime parla ai figli per l’ultima volta.',
          },
        },
        {
          character: 'manboshi',
          type: { en: 'Son', it: 'Figlio' },
          summary: {
            en: 'Manboshi helps keep Shirahoshi calm as Otohime lies dying.',
            it: 'Manboshi aiuta a tranquillizzare Shirahoshi mentre Otohime sta morendo.',
          },
        },
      ],
    },
    {
      episode: 886,
      chapter: 907,
      value: [
        links.otohimeNeptuneHusband,
        links.otohimeShirahoshiDaughter,
        links.otohimeFukaboshiEldestSon,
        {
          character: 'donquixote-mjosgard',
          type: {
            en: 'Noble whose outlook she changed',
            it: 'Nobile di cui ha cambiato le idee',
          },
          summary: {
            en: 'Otohime saved Mjosgard’s life. He later credits her with changing him and protects her daughter.',
            it: 'Otohime ha salvato la vita a Mjosgard. In seguito lui le attribuisce il proprio cambiamento e protegge sua figlia.',
          },
        },
        {
          character: 'fisher-tiger',
          type: {
            en: 'Liberator she understands',
            it: 'Liberatore che comprende',
          },
          summary: {
            en: 'Otohime understands Tiger’s suffering even though his actions complicate her campaign for coexistence.',
            it: 'Otohime comprende la sofferenza di Tiger anche se le sue azioni complicano la campagna per la convivenza.',
          },
        },
      ],
    },
  ],
  'fisher-tiger': [
    {
      episode: 541,
      chapter: 626,
      value: [
        links.fisherTigerJinbeTrustedCrewmate,
        links.fisherTigerArlongCrewmateHeRestrains,
        {
          character: 'boa-hancock',
          type: { en: 'Slave he freed', it: 'Schiava che ha liberato' },
          summary: {
            en: 'Tiger’s raid on Mary Geoise frees Hancock and her sisters from slavery.',
            it: 'L’assalto di Tiger a Mary Geoise libera Hancock e le sue sorelle dalla schiavitù.',
          },
        },
        links.fisherTigerKoalaChildHeHelpsReturnHome,
      ],
    },
    {
      episode: 543,
      chapter: 628,
      value: [
        links.fisherTigerJinbeTrustedCrewmate,
        links.fisherTigerArlongCrewmateHeRestrains,
        links.fisherTigerKoalaChildHeHelpsReturnHome,
        {
          character: 'aladine',
          type: {
            en: 'Doctor who tries to save him',
            it: 'Medico che cerca di salvarlo',
          },
          summary: {
            en: 'Aladine urges Tiger to accept a transfusion, but Tiger refuses human blood.',
            it: 'Aladin esorta Tiger ad accettare una trasfusione, ma Tiger rifiuta il sangue umano.',
          },
        },
        {
          character: 'otohime',
          type: {
            en: 'Queen whose hopes he shares',
            it: 'Regina di cui condivide le speranze',
          },
          summary: {
            en: 'Before dying, Tiger says Otohime is right and asks that hatred not be passed on to children.',
            it: 'Prima di morire Tiger dice che Otohime ha ragione e chiede che l’odio non venga trasmesso ai bambini.',
          },
        },
      ],
    },
  ],
  'aladine': [
    {
      episode: 543,
      chapter: 628,
      value: [
        links.aladineFisherTigerCaptainHeTriesToSave,
        {
          character: 'jinbe',
          type: { en: 'Fellow Sun Pirate', it: 'Compagno dei Pirati del Sole' },
          summary: {
            en: 'Aladine sails alongside Jinbe in Tiger’s crew.',
            it: 'Aladin naviga al fianco di Jinbe nella ciurma di Tiger.',
          },
        },
      ],
    },
    {
      episode: 790,
      chapter: 830,
      value: [
        links.aladineFisherTigerCaptainHeTriesToSave,
        links.aladineJinbeCaptainHeSupports,
        links.aladineWadatsumiCrewmate,
      ],
    },
    {
      episode: 875,
      chapter: 900,
      value: [
        links.aladineFisherTigerCaptainHeTriesToSave,
        links.aladineJinbeCaptainHeSupports,
        links.aladineWadatsumiCrewmate,
        {
          character: 'monkey-d-luffy',
          type: {
            en: 'Captain he entrusts Jinbe to',
            it: 'Capitano a cui affida Jinbe',
          },
          summary: {
            en: 'Aladine asks Luffy to take care of Jinbe while the Sun Pirates help the Sunny escape.',
            it: 'Aladin chiede a Rufy di prendersi cura di Jinbe mentre i Pirati del Sole aiutano la Sunny a fuggire.',
          },
        },
      ],
    },
  ],
  'pekoms': [
    {
      episode: 571,
      chapter: 653,
      value: [links.pekomsBaronTamagoPartnerCollectingTribute],
      source: 'episode',
    },
    {
      episode: 572,
      chapter: 653,
      value: [
        links.pekomsBaronTamagoPartnerCollectingTribute,
        {
          character: 'caribou',
          type: { en: 'Pirate he defeats', it: 'Pirata che sconfigge' },
          summary: {
            en: 'Pekoms defeats Caribou with one blow when he attacks over the treasure.',
            it: 'Pekoms sconfigge Caribou con un colpo quando attacca per il tesoro.',
          },
        },
      ],
    },
    {
      episode: 762,
      chapter: 812,
      value: [
        links.pekomsBaronTamagoPartnerCollectingTribute,
        links.pekomsMonkeyDLuffySaviourOfHisHomeland,
        links.pekomsCaponeBegeCrewmateWhoShootsHim,
      ],
    },
    {
      episode: 790,
      chapter: 831,
      value: [
        links.pekomsBaronTamagoPartnerCollectingTribute,
        links.pekomsMonkeyDLuffySaviourOfHisHomeland,
        links.pekomsCaponeBegeCrewmateWhoShootsHim,
        links.pekomsPedroFormerCaptain,
        links.pekomsCharlotteLinlinCaptain,
      ],
    },
    {
      episode: 795,
      chapter: 834,
      value: [
        links.pekomsBaronTamagoPartnerCollectingTribute,
        links.pekomsMonkeyDLuffySaviourOfHisHomeland,
        links.pekomsCaponeBegeAttackerHeRefusesToJoin,
        links.pekomsPedroFormerCaptain,
        links.pekomsCharlotteLinlinCaptain,
      ],
    },
    {
      episode: 824,
      chapter: 856,
      value: [
        links.pekomsBaronTamagoPartnerCollectingTribute,
        links.pekomsJinbeRescuer,
        links.pekomsCaponeBegeAttackerHeRefusesToJoin,
        links.pekomsPedroFormerCaptain,
        links.pekomsCharlotteLinlinCaptain,
      ],
    },
    {
      episode: 871,
      chapter: 896,
      value: [
        links.pekomsMonkeyDLuffyFugitiveHeHelpsEscape,
        links.pekomsPedroFormerCaptainWhoseSacrificeHeHonours,
        links.pekomsJinbeRescuer,
        links.pekomsCaponeBegeAttackerHeRefusesToJoin,
        links.pekomsCharlotteLinlinCaptain,
      ],
    },
    {
      episode: 872,
      chapter: 897,
      value: [
        links.pekomsMonkeyDLuffyFugitiveHeHelpsEscape,
        links.pekomsPedroFormerCaptainWhoseSacrificeHeHonours,
        links.pekomsJinbeRescuer,
        links.pekomsCaponeBegeAttackerHeRefusesToJoin,
        {
          character: 'charlotte-oven',
          type: {
            en: 'Officer who stops his escape',
            it: 'Ufficiale che ferma la sua fuga',
          },
          summary: {
            en: 'Oven’s forces overpower Pekoms after he helps Luffy escape.',
            it: 'Le forze di Oven sopraffanno Pekoms dopo che ha aiutato Rufy a fuggire.',
          },
        },
      ],
    },
  ],
  'baron-tamago': [
    {
      episode: 571,
      chapter: 653,
      value: [links.baronTamagoPekomsPartnerCollectingTribute],
    },
    {
      episode: 786,
      chapter: 831,
      value: [
        links.baronTamagoPekomsPartnerCollectingTribute,
        links.baronTamagoCharlotteLinlinCaptain,
      ],
    },
    {
      episode: 816,
      chapter: 850,
      value: [
        links.baronTamagoPekomsPartnerCollectingTribute,
        links.baronTamagoCharlotteLinlinCaptain,
        {
          character: 'pedro',
          type: {
            en: 'Opponent from an earlier raid',
            it: 'Avversario di una precedente incursione',
          },
          summary: {
            en: 'Tamago confronts Pedro again. Each lost an eye during Pedro’s earlier intrusion into Totto Land.',
            it: 'Tamago affronta di nuovo Pedro. Entrambi hanno perso un occhio durante la precedente incursione di Pedro a Tottoland.',
          },
        },
      ],
    },
    {
      episode: 855,
      chapter: 882,
      value: [
        links.baronTamagoPekomsPartnerCollectingTribute,
        links.baronTamagoCharlotteLinlinCaptain,
        {
          character: 'pedro',
          type: {
            en: 'Opponent whose death he regrets',
            it: 'Avversario di cui rimpiange la morte',
          },
          summary: {
            en: 'Tamago expresses regret when he hears of Pedro’s death, despite their enmity.',
            it: 'Tamago esprime rammarico quando viene a sapere della morte di Pedro, nonostante la loro inimicizia.',
          },
        },
      ],
    },
  ],
  'bobbin': [
    { episode: 786, chapter: 831, value: [links.bobbinCharlotteLinlinCaptain] },
    {
      episode: 822,
      chapter: 854,
      value: [
        links.bobbinCharlotteLinlinCaptain,
        links.bobbinSanjiTargetWhoStrikesHim,
      ],
    },
    {
      episode: 827,
      chapter: 857,
      value: [
        links.bobbinCharlotteLinlinCaptain,
        links.bobbinSanjiTargetWhoStrikesHim,
        {
          character: 'vito',
          type: { en: 'Attacker', it: 'Aggressore' },
          summary: {
            en: 'Vito confirms to Bege that he dealt with Bobbin after the shooting in Sweet City.',
            it: 'Vito conferma a Bege di essersi occupato di Bobbin dopo la sparatoria a Sweet City.',
          },
        },
      ],
    },
  ],
} satisfies Record<string, Timeline<Relationship[]>>
