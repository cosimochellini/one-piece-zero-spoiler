import type { Relationship, Timeline } from '~/data/types'

/** Revisions: docs/content-provenance/relationships.json and sources.json. */
const retained = {
  laboonCrocus: {
    character: 'crocus',
    type: { en: 'Caretaker', it: 'Custode' },
    summary: {
      en: 'Crocus treats Laboon’s injuries and tries to stop him from striking the cliff.',
      it: 'Crocus cura le ferite di Lovon e cerca di impedirgli di colpire la scogliera.',
    },
  },
  laboonLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Promised rival', it: 'Rivale da ritrovare' },
    summary: {
      en: 'Luffy promises to return and finish their fight, giving Laboon a reason to wait.',
      it: 'Rufy promette di tornare per concludere il loro scontro e dà a Lovon un motivo per aspettare.',
    },
  },
  crocusLaboon: {
    character: 'laboon',
    type: { en: 'Patient', it: 'Paziente' },
    summary: {
      en: 'Crocus cares for Laboon at Twin Cape and treats the injuries caused by the whale’s attempts to break through the cliff.',
      it: 'Crocus si prende cura di Lovon a Capo Gemello e cura le ferite che la balena si procura contro la scogliera.',
    },
  },
  mr9Vivi: {
    character: 'nefertari-vivi',
    type: { en: 'Former partner he protects', it: 'Ex collega che protegge' },
    summary: {
      en: 'Mr. 9 turns against the agents sent to kill Vivi and buys his former partner time to escape.',
      it: 'Mr. Nine affronta gli agenti inviati a uccidere Bibi e permette alla sua ex collega di fuggire.',
    },
  },
  mr9Monday: {
    character: 'miss-monday',
    type: { en: 'Colleague', it: 'Collega' },
    summary: {
      en: 'Mr. 9 and Miss Monday work among the bounty hunters of Whisky Peak.',
      it: 'Mr. Nine e Miss Monday lavorano fra i cacciatori di taglie di Whisky Peak.',
    },
  },
  mr9Wife: {
    character: 'miss-monday',
    type: { en: 'Wife', it: 'Moglie' },
    summary: {
      en: 'Mr. 9 and Miss Monday live at Whisky Peak with their child.',
      it: 'Mr. Nine e sua moglie Miss Monday vivono a Whisky Peak con il loro bambino.',
    },
  },
  igaramMonday: {
    character: 'miss-monday',
    type: { en: 'Agent partner', it: 'Collega in missione' },
    summary: {
      en: 'As Mr. 8, Igaram works with Miss Monday at Whisky Peak.',
      it: 'Con il nome di Mr. Eight, Igaram lavora con Miss Monday a Whisky Peak.',
    },
  },
  igaramVivi: {
    character: 'nefertari-vivi',
    type: { en: 'Princess he protects', it: 'Principessa che protegge' },
    summary: {
      en: 'Igaram infiltrates Baroque Works with Vivi and acts as a decoy so she can escape.',
      it: 'Igaram si infiltra nella Baroque Works con Bibi e fa da esca per permetterle di fuggire.',
    },
  },
  igaramNami: {
    character: 'nami',
    type: { en: 'Escort he hires', it: 'Accompagnatrice ingaggiata' },
    summary: {
      en: 'Igaram asks Nami to take Vivi safely back to Alabasta.',
      it: 'Igaram chiede a Nami di riportare Bibi ad Alabasta sana e salva.',
    },
  },
  igaramWife: {
    character: 'terracotta',
    type: { en: 'Wife', it: 'Moglie' },
    summary: {
      en: 'Terracotta is Igaram’s wife and works in the royal household.',
      it: 'Terracotta è la moglie di Igaram e lavora al palazzo reale.',
    },
  },
  mondayIgaram: {
    character: 'igaram',
    type: { en: 'Agent partner', it: 'Collega in missione' },
    summary: {
      en: 'Miss Monday works with Mr. 8 among the bounty hunters of Whisky Peak.',
      it: 'Miss Monday lavora con Mr. Eight fra i cacciatori di taglie di Whisky Peak.',
    },
  },
  mondayMr9: {
    character: 'mr-9',
    type: { en: 'Colleague', it: 'Collega' },
    summary: {
      en: 'Miss Monday and Mr. 9 work together at Whisky Peak.',
      it: 'Miss Monday e Mr. Nine lavorano insieme a Whisky Peak.',
    },
  },
  mondayVivi: {
    character: 'nefertari-vivi',
    type: { en: 'Friend she protects', it: 'Amica che protegge' },
    summary: {
      en: 'Miss Monday stands against Mr. 5 so Vivi can escape.',
      it: 'Miss Monday affronta Mr. Five per permettere a Bibi di fuggire.',
    },
  },
  mondayHusband: {
    character: 'mr-9',
    type: { en: 'Husband', it: 'Marito' },
    summary: {
      en: 'Miss Monday and her husband Mr. 9 raise their child at Whisky Peak.',
      it: 'Miss Monday e suo marito Mr. Nine crescono il loro bambino a Whisky Peak.',
    },
  },
  karooVivi: {
    character: 'nefertari-vivi',
    type: { en: 'Companion', it: 'Compagna' },
    summary: {
      en: 'Karoo travels with Vivi and carries her during her mission.',
      it: 'Karl viaggia con Bibi e la trasporta durante la missione.',
    },
  },
  karooProtectsVivi: {
    character: 'nefertari-vivi',
    type: { en: 'Companion he protects', it: 'Compagna che protegge' },
    summary: {
      en: 'Karoo shields Vivi from the charging horses outside Alubarna.',
      it: 'Karl protegge Bibi dai cavalli lanciati al galoppo davanti ad Alubarna.',
    },
  },
  fiveValentine: {
    character: 'miss-valentine',
    type: { en: 'Agent partner', it: 'Collega in missione' },
    summary: {
      en: 'Mr. 5 works with Miss Valentine to eliminate the infiltrators at Whisky Peak.',
      it: 'Mr. Five lavora con Miss Valentine per eliminare gli infiltrati a Whisky Peak.',
    },
  },
  valentineFive: {
    character: 'mr-5',
    type: { en: 'Agent partner', it: 'Collega in missione' },
    summary: {
      en: 'Miss Valentine carries out missions with Mr. 5.',
      it: 'Miss Valentine svolge le missioni con Mr. Five.',
    },
  },
  fiveUsopp: {
    character: 'usopp',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Usopp tricks Mr. 5 into swallowing a shot filled with hot sauce before Zoro defeats him.',
      it: 'Usop inganna Mr. Five facendogli ingoiare un proiettile pieno di salsa piccante prima che Zoro lo sconfigga.',
    },
  },
  valentineNami: {
    character: 'nami',
    type: { en: 'Opponent', it: 'Avversaria' },
    summary: {
      en: 'Nami and Vivi attack Miss Valentine together and defeat her on Little Garden.',
      it: 'Nami e Bibi attaccano insieme Miss Valentine e la sconfiggono a Little Garden.',
    },
  },
  goldenweekThree: {
    character: 'mr-3',
    type: { en: 'Agent partner', it: 'Collega in missione' },
    summary: {
      en: 'Miss Goldenweek assists Mr. 3 in his operation on Little Garden.',
      it: 'Miss Golden Week affianca Mr. Three nella missione a Little Garden.',
    },
  },
  goldenweekLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Miss Goldenweek uses her paint to control Luffy during the battle on Little Garden.',
      it: 'Miss Golden Week usa i suoi colori per controllare Rufy durante lo scontro a Little Garden.',
    },
  },
  goldenweekFive: {
    character: 'mr-5',
    type: { en: 'Rescue companion', it: 'Compagno di soccorso' },
    summary: {
      en: 'Mr. 5 accompanies Miss Goldenweek on her mission to free their imprisoned colleagues.',
      it: 'Mr. Five accompagna Miss Golden Week nella missione per liberare i colleghi imprigionati.',
    },
  },
  goldenweekValentine: {
    character: 'miss-valentine',
    type: { en: 'Rescue companion', it: 'Compagna di soccorso' },
    summary: {
      en: 'Miss Valentine joins Miss Goldenweek’s journey to rescue their former colleagues.',
      it: 'Miss Valentine parte con Miss Golden Week per soccorrere gli ex colleghi.',
    },
  },
  fiveGoldenweek: {
    character: 'miss-goldenweek',
    type: { en: 'Rescue companion', it: 'Compagna di soccorso' },
    summary: {
      en: 'Mr. 5 joins Miss Goldenweek’s expedition to free their captured colleagues.',
      it: 'Mr. Five parte con Miss Golden Week per liberare i colleghi catturati.',
    },
  },
  valentineGoldenweek: {
    character: 'miss-goldenweek',
    type: { en: 'Rescue companion', it: 'Compagna di soccorso' },
    summary: {
      en: 'Miss Valentine accompanies Miss Goldenweek to rescue their captured colleagues.',
      it: 'Miss Valentine accompagna Miss Golden Week per soccorrere i colleghi catturati.',
    },
  },
  daltonWapol: {
    character: 'wapol',
    type: { en: 'Former ruler', it: 'Ex sovrano' },
    summary: {
      en: 'Dalton stays to protect Drum’s people after Wapol abandons the kingdom.',
      it: 'Dorton resta a proteggere gli abitanti di Drum dopo che Wapol abbandona il regno.',
    },
  },
  daltonHiluluk: {
    character: 'hiluluk',
    type: { en: 'Inspiration', it: 'Modello' },
    summary: {
      en: 'Hiluluk’s final words move Dalton to oppose Wapol’s rule.',
      it: 'Le ultime parole di Hirurukù spingono Dorton a opporsi al governo di Wapol.',
    },
  },
  daltonChopper: {
    character: 'tony-tony-chopper',
    type: { en: 'Person he protects', it: 'Persona che protegge' },
    summary: {
      en: 'Dalton stops Chopper from throwing his life away against Wapol after Hiluluk’s death.',
      it: 'Dorton impedisce a Chopper di sacrificarsi contro Wapol dopo la morte di Hirurukù.',
    },
  },
  elevenSmoker: {
    character: 'smoker',
    type: { en: 'Captor', it: 'Colui che lo cattura' },
    summary: {
      en: 'Smoker holds Mr. 11 prisoner and tricks him into revealing information about Baroque Works.',
      it: 'Smoker tiene prigioniero Mr. Eleven e lo inganna per ottenere informazioni sulla Baroque Works.',
    },
  },
  kurehaChopper: {
    character: 'tony-tony-chopper',
    type: { en: 'Apprentice', it: 'Allievo' },
    summary: {
      en: 'Chopper works alongside Kureha at Drum Castle.',
      it: 'Chopper lavora al fianco di Kureha nel castello di Drum.',
    },
  },
  kurehaHiluluk: {
    character: 'hiluluk',
    type: { en: 'Doctor she knows', it: 'Medico che conosce' },
    summary: {
      en: 'Kureha knows Hiluluk and diagnoses his terminal illness.',
      it: 'Kureha conosce Hirurukù e gli diagnostica una malattia incurabile.',
    },
  },
  kurehaChopperMentor: {
    character: 'tony-tony-chopper',
    type: { en: 'Medical apprentice', it: 'Allievo medico' },
    summary: {
      en: 'Kureha accepts Chopper as her medical apprentice after Hiluluk’s death.',
      it: 'Kureha accoglie Chopper come allievo medico dopo la morte di Hirurukù.',
    },
  },
  kurehaHilulukLegacy: {
    character: 'hiluluk',
    type: { en: 'Late colleague', it: 'Collega defunto' },
    summary: {
      en: 'Hiluluk entrusts Kureha with his research and Chopper’s future.',
      it: 'Hirurukù affida a Kureha le sue ricerche e il futuro di Chopper.',
    },
  },
  kurehaChopperDeparture: {
    character: 'tony-tony-chopper',
    type: { en: 'Former apprentice', it: 'Ex allievo' },
    summary: {
      en: 'Kureha lets Chopper leave with Luffy and completes Hiluluk’s work for his farewell.',
      it: 'Kureha lascia partire Chopper con Rufy e completa il lavoro di Hirurukù per salutarlo.',
    },
  },
  hilulukChopper: {
    character: 'tony-tony-chopper',
    type: { en: 'Adopted son', it: 'Figlio adottivo' },
    summary: {
      en: 'Hiluluk takes in Chopper, gives him his name and inspires him to study medicine.',
      it: 'Hirurukù accoglie Chopper, gli dà un nome e lo avvicina alla medicina.',
    },
  },
  hilulukKureha: {
    character: 'kureha',
    type: { en: 'Medical colleague', it: 'Collega medico' },
    summary: {
      en: 'Kureha diagnoses Hiluluk’s illness and warns him that his time is running out.',
      it: 'Kureha diagnostica la malattia di Hirurukù e lo avverte che gli resta poco tempo.',
    },
  },
  hilulukLegacy: {
    character: 'kureha',
    type: { en: 'Successor', it: 'Erede delle ricerche' },
    summary: {
      en: 'Hiluluk asks Kureha to complete his research and teach Chopper medicine.',
      it: 'Hirurukù chiede a Kureha di completare le sue ricerche e insegnare la medicina a Chopper.',
    },
  },
  hilulukWapol: {
    character: 'wapol',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'Wapol’s false summons lures Hiluluk to the castle before his final sacrifice.',
      it: 'Il falso appello di Wapol attira Hirurukù al castello prima del suo sacrificio.',
    },
  },
  chessWapol: {
    character: 'wapol',
    type: { en: 'Ruler he serves', it: 'Sovrano che serve' },
    summary: {
      en: 'Chess follows Wapol and fights to restore his rule over Drum.',
      it: 'Chess segue Wapol e combatte per riportarlo sul trono di Drum.',
    },
  },
  chessPartner: {
    character: 'kuromarimo',
    type: { en: 'Combat partner', it: 'Compagno di combattimento' },
    summary: {
      en: 'Wapol combines Chess and Kuromarimo into a single fighter.',
      it: 'Wapol unisce Chess e Kuromarimo in un unico combattente.',
    },
  },
  chessChopper: {
    character: 'tony-tony-chopper',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Chopper defeats the combined form of Chess and Kuromarimo.',
      it: 'Chopper sconfigge la forma combinata di Chess e Kuromarimo.',
    },
  },
  kuromarimoWapol: {
    character: 'wapol',
    type: { en: 'Ruler he serves', it: 'Sovrano che serve' },
    summary: {
      en: 'Kuromarimo follows Wapol and fights to restore his rule over Drum.',
      it: 'Kuromarimo segue Wapol e combatte per riportarlo sul trono di Drum.',
    },
  },
  kuromarimoPartner: {
    character: 'chess',
    type: { en: 'Combat partner', it: 'Compagno di combattimento' },
    summary: {
      en: 'Wapol combines Kuromarimo and Chess into a single fighter.',
      it: 'Wapol unisce Kuromarimo e Chess in un unico combattente.',
    },
  },
  kuromarimoChopper: {
    character: 'tony-tony-chopper',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Chopper defeats the combined form of Kuromarimo and Chess.',
      it: 'Chopper sconfigge la forma combinata di Kuromarimo e Chess.',
    },
  },
  thirteenFriday: {
    character: 'miss-friday',
    type: { en: 'Messenger partner', it: 'Collega messaggera' },
    summary: {
      en: 'Mr. 13 travels with Miss Friday to deliver orders and punish agents who fail.',
      it: 'Mr. Thirteen viaggia con Miss Friday per consegnare ordini e punire gli agenti che falliscono.',
    },
  },
  fridayThirteen: {
    character: 'mr-13',
    type: { en: 'Messenger partner', it: 'Collega messaggero' },
    summary: {
      en: 'Miss Friday carries Mr. 13 while they carry out their orders.',
      it: 'Miss Friday trasporta Mr. Thirteen mentre eseguono gli ordini.',
    },
  },
  matsugeVivi: {
    character: 'nefertari-vivi',
    type: { en: 'Rider', it: 'Cavaliera' },
    summary: {
      en: 'Matsuge carries Vivi across the desert during her journey home.',
      it: 'Ciglione trasporta Bibi nel deserto durante il viaggio verso casa.',
    },
  },
  matsugeHasami: {
    character: 'hasami',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'Matsuge asks his friend Hasami to carry Vivi and the Straw Hats away from Rainbase.',
      it: 'Ciglione chiede all’amico Hasami di portare Bibi e i Cappello di Paglia lontano da Rainbase.',
    },
  },
  kohzaVivi: {
    character: 'nefertari-vivi',
    type: { en: 'Childhood friend', it: 'Amica d’infanzia' },
    summary: {
      en: 'Kohza grows up playing with Vivi and protects her from kidnappers.',
      it: 'Kosa cresce giocando con Bibi e la protegge dai rapitori.',
    },
  },
  kohzaCobra: {
    character: 'nefertari-cobra',
    type: { en: 'King he opposes', it: 'Re a cui si oppone' },
    summary: {
      en: 'Kohza leads the rebellion because he holds Cobra responsible for the drought.',
      it: 'Kosa guida la ribellione perché ritiene Cobra responsabile della siccità.',
    },
  },
  kohzaToto: {
    character: 'toto',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Kohza leaves Yuba while Toto stays behind, still trusting the king.',
      it: 'Kosa lascia Yuba mentre suo padre Toto resta e continua a fidarsi del re.',
    },
  },
  kohzaCobraCleared: {
    character: 'nefertari-cobra',
    type: { en: 'King he misjudged', it: 'Re che ha giudicato male' },
    summary: {
      en: 'Kohza learns that Crocodile engineered the conflict and tries to stop the fighting.',
      it: 'Kosa scopre che Crocodile ha provocato il conflitto e cerca di fermare i combattimenti.',
    },
  },
  pellCobra: {
    character: 'nefertari-cobra',
    type: { en: 'King he guards', it: 'Re che protegge' },
    summary: {
      en: 'Pell serves Cobra in Alabasta’s royal guard.',
      it: 'Pell serve Cobra nella guardia reale di Alabasta.',
    },
  },
  pellOther: {
    character: 'chaka',
    type: { en: 'Fellow guardian', it: 'Compagno nella guardia' },
    summary: {
      en: 'Pell and Chaka protect Alabasta’s royal family.',
      it: 'Pell e Chaka proteggono la famiglia reale di Alabasta.',
    },
  },
  chakaCobra: {
    character: 'nefertari-cobra',
    type: { en: 'King he guards', it: 'Re che protegge' },
    summary: {
      en: 'Chaka serves Cobra in Alabasta’s royal guard.',
      it: 'Chaka serve Cobra nella guardia reale di Alabasta.',
    },
  },
  chakaOther: {
    character: 'pell',
    type: { en: 'Fellow guardian', it: 'Compagno nella guardia' },
    summary: {
      en: 'Chaka and Pell protect Alabasta’s royal family.',
      it: 'Chaka e Pell proteggono la famiglia reale di Alabasta.',
    },
  },
  pellVivi: {
    character: 'nefertari-vivi',
    type: { en: 'Princess he protects', it: 'Principessa che protegge' },
    summary: {
      en: 'Pell rescues Vivi when she is surrounded by enemies in Rainbase.',
      it: 'Pell soccorre Bibi quando viene circondata dai nemici a Rainbase.',
    },
  },
  pellViviBomb: {
    character: 'nefertari-vivi',
    type: { en: 'Princess he saves', it: 'Principessa che salva' },
    summary: {
      en: 'Pell takes the bomb away from Vivi and the city before it explodes.',
      it: 'Pell porta la bomba lontano da Bibi e dalla città prima che esploda.',
    },
  },
  doublefingerOne: {
    character: 'mr-1',
    type: { en: 'Agent partner', it: 'Collega in missione' },
    summary: {
      en: 'Miss Doublefinger carries out Baroque Works missions with Mr. 1.',
      it: 'Miss Doublefinger svolge le missioni della Baroque Works con Mr. One.',
    },
  },
  doublefingerNami: {
    character: 'nami',
    type: { en: 'Opponent', it: 'Avversaria' },
    summary: {
      en: 'Nami defeats Miss Doublefinger with her Clima-Tact.',
      it: 'Nami sconfigge Miss Doublefinger con il Clima-Tact.',
    },
  },
  fourChristmas: {
    character: 'miss-merry-christmas',
    type: { en: 'Agent partner', it: 'Collega in missione' },
    summary: {
      en: 'Mr. 4 follows Miss Merry Christmas’s directions and fights alongside her.',
      it: 'Mr. Four segue le indicazioni di Miss Merry Christmas e combatte al suo fianco.',
    },
  },
  christmasFour: {
    character: 'mr-4',
    type: { en: 'Agent partner', it: 'Collega in missione' },
    summary: {
      en: 'Miss Merry Christmas directs Mr. 4 and combines her attacks with his.',
      it: 'Miss Merry Christmas dirige Mr. Four e combina i propri attacchi con i suoi.',
    },
  },
  fourLassoo: {
    character: 'lassoo',
    type: { en: 'Weapon companion', it: 'Compagno d’armi' },
    summary: {
      en: 'Lassoo fires the exploding balls that Mr. 4 strikes with his bat.',
      it: 'Lassoo spara le palle esplosive che Mr. Four colpisce con la mazza.',
    },
  },
  christmasUsopp: {
    character: 'usopp',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Usopp endures Miss Merry Christmas’s attacks and helps defeat her and Mr. 4.',
      it: 'Usop resiste agli attacchi di Miss Merry Christmas e contribuisce alla sconfitta sua e di Mr. Four.',
    },
  },
  totoKohza: {
    character: 'kohza',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'Toto stays in Yuba after his son Kohza leaves to lead the rebellion.',
      it: 'Toto resta a Yuba dopo che suo figlio Kosa parte per guidare la ribellione.',
    },
  },
  totoVivi: {
    character: 'nefertari-vivi',
    type: { en: 'Princess he trusts', it: 'Principessa di cui si fida' },
    summary: {
      en: 'Toto recognizes Vivi and asks her to stop the rebellion.',
      it: 'Toto riconosce Bibi e le chiede di fermare la ribellione.',
    },
  },
  totoLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Visitor who helps him', it: 'Ospite che lo aiuta' },
    summary: {
      en: 'Luffy helps Toto dig for water in Yuba.',
      it: 'Rufy aiuta Toto a scavare per trovare acqua a Yuba.',
    },
  },
  hasamiMatsuge: {
    character: 'matsuge',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'Hasami answers Matsuge’s request to carry the travelers across the desert.',
      it: 'Hasami risponde alla richiesta di Ciglione di trasportare i viaggiatori nel deserto.',
    },
  },
  hasamiChopper: {
    character: 'tony-tony-chopper',
    type: { en: 'Travel companion', it: 'Compagno di viaggio' },
    summary: {
      en: 'Chopper brings Hasami to help his companions escape Rainbase.',
      it: 'Chopper porta Hasami per aiutare i compagni a fuggire da Rainbase.',
    },
  },
  lassooFour: {
    character: 'mr-4',
    type: { en: 'Combat partner', it: 'Compagno di combattimento' },
    summary: {
      en: 'Lassoo supplies Mr. 4 with the exploding balls used in their attacks.',
      it: 'Lassoo fornisce a Mr. Four le palle esplosive usate nei loro attacchi.',
    },
  },
  guardsCobra: {
    character: 'nefertari-cobra',
    type: { en: 'King they defend', it: 'Re che difendono' },
    summary: {
      en: 'The Tsumegeri Guards confront Crocodile to demand Cobra’s release.',
      it: 'Le guardie Tsumegeri affrontano Crocodile per esigere la liberazione di Cobra.',
    },
  },
  guardsCrocodile: {
    character: 'crocodile',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'Crocodile avoids the Tsumegeri Guards’ attacks and waits for the fatal effects of Hero Water.',
      it: 'Crocodile evita gli attacchi delle guardie Tsumegeri e attende gli effetti mortali dell’Acqua dell’Eroe.',
    },
  },
  sevenFather: {
    character: 'miss-fathers-day',
    type: { en: 'Sniper partner', it: 'Collega tiratrice' },
    summary: {
      en: 'Mr. 7 guards the cannon with Miss Father’s Day.',
      it: 'Mr. Seven sorveglia il cannone con Miss Father’s Day.',
    },
  },
  fatherSeven: {
    character: 'mr-7',
    type: { en: 'Sniper partner', it: 'Collega tiratore' },
    summary: {
      en: 'Miss Father’s Day guards the cannon with Mr. 7.',
      it: 'Miss Father’s Day sorveglia il cannone con Mr. Seven.',
    },
  },
  hinaSmoker: {
    character: 'smoker',
    type: { en: 'Marine colleague', it: 'Collega della Marina' },
    summary: {
      en: 'Hina knows Smoker and works with his forces after Crocodile’s defeat.',
      it: 'Hina conosce Smoker e collabora con le sue forze dopo la sconfitta di Crocodile.',
    },
  },
  hinaJango: {
    character: 'jango',
    type: { en: 'Subordinate', it: 'Subordinato' },
    summary: {
      en: 'Jango serves under Hina and follows her orders.',
      it: 'Jango serve sotto il comando di Hina e segue i suoi ordini.',
    },
  },
  hinaFullbody: {
    character: 'fullbody',
    type: { en: 'Subordinate', it: 'Subordinato' },
    summary: {
      en: 'Fullbody serves under Hina alongside Jango.',
      it: 'Fullbody serve sotto il comando di Hina insieme a Jango.',
    },
  },
  terracottaIgaram: {
    character: 'igaram',
    type: { en: 'Husband', it: 'Marito' },
    summary: {
      en: 'Igaram is Terracotta’s husband.',
      it: 'Igaram è il marito di Terracotta.',
    },
  },
  terracottaVivi: {
    character: 'nefertari-vivi',
    type: { en: 'Princess she advises', it: 'Principessa che consiglia' },
    summary: {
      en: 'Terracotta helps Vivi dress and encourages her before her speech.',
      it: 'Terracotta aiuta Bibi a vestirsi e la incoraggia prima del discorso.',
    },
  },
  laboonBrook: {
    character: 'brook',
    type: { en: 'Friend he awaits', it: 'Amico che aspetta' },
    summary: {
      en: 'Brook is one of the musicians who left Laboon at Twin Cape and promised to return.',
      it: 'Brook è uno dei musicisti che hanno lasciato Lovon a Capo Gemello promettendo di tornare.',
    },
  },
  crocusRoger: {
    character: 'gold-roger',
    type: { en: 'Former captain and patient', it: 'Ex capitano e paziente' },
    summary: {
      en: 'Crocus sailed as Roger’s doctor during his final voyage.',
      it: 'Crocus ha navigato come medico di Roger durante il suo ultimo viaggio.',
    },
  },
  crocusRayleigh: {
    character: 'silvers-rayleigh',
    type: { en: 'Former crewmate', it: 'Ex compagno di ciurma' },
    summary: {
      en: 'Rayleigh sailed with Crocus aboard Roger’s ship.',
      it: 'Rayleigh ha navigato con Crocus sulla nave di Roger.',
    },
  },
  viviIgaram: {
    character: 'igaram',
    type: { en: 'Guardian', it: 'Protettore' },
    summary: {
      en: 'Igaram infiltrates Baroque Works with Vivi and risks his life to let her escape.',
      it: 'Igaram si infiltra nella Baroque Works con Bibi e rischia la vita per permetterle di fuggire.',
    },
  },
  viviKaroo: {
    character: 'karoo',
    type: { en: 'Companion', it: 'Compagno' },
    summary: {
      en: 'Karoo accompanies Vivi on her mission and stays at her side.',
      it: 'Karl accompagna Bibi nella missione e resta al suo fianco.',
    },
  },
  viviLuffyEscort: {
    character: 'monkey-d-luffy',
    type: { en: 'Escort', it: 'Accompagnatore' },
    summary: {
      en: 'Luffy agrees to take Vivi back to Alabasta.',
      it: 'Rufy accetta di riportare Bibi ad Alabasta.',
    },
  },
  viviCobra: {
    character: 'nefertari-cobra',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Cobra is Vivi’s father and the king of Alabasta.',
      it: 'Cobra è il padre di Bibi e il re di Alabasta.',
    },
  },
  viviKohza: {
    character: 'kohza',
    type: { en: 'Childhood friend', it: 'Amico d’infanzia' },
    summary: {
      en: 'Kohza was Vivi’s childhood friend and now leads the rebellion against her father.',
      it: 'Kosa era amico di Bibi da bambino e ora guida la ribellione contro suo padre.',
    },
  },
  viviLuffyAlly: {
    character: 'monkey-d-luffy',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'Luffy challenges Vivi’s plan to risk only herself and promises to fight alongside her.',
      it: 'Rufy contesta il piano di Bibi di rischiare solo la propria vita e promette di combattere al suo fianco.',
    },
  },
  viviLuffyFriend: {
    character: 'monkey-d-luffy',
    type: { en: 'Friend at sea', it: 'Amico in mare' },
    summary: {
      en: 'Vivi stays in Alabasta, and Luffy and his crew answer her farewell by raising their marked arms.',
      it: 'Bibi resta ad Alabasta e Rufy e la ciurma rispondono al suo saluto alzando le braccia segnate.',
    },
  },
  viviCobraDead: {
    character: 'nefertari-cobra',
    type: { en: 'Late father', it: 'Padre defunto' },
    summary: {
      en: 'Cobra’s death is reported after the Levely.',
      it: 'Dopo il Reverie viene annunciata la morte di Cobra.',
    },
  },
  viviWapol: {
    character: 'wapol',
    type: { en: 'Fellow fugitive', it: 'Compagno di fuga' },
    summary: {
      en: 'Vivi and Wapol are hiding aboard Morgans’s airship.',
      it: 'Bibi e Wapol si nascondono a bordo del dirigibile di Morgans.',
    },
  },
  viviMorgans: {
    character: 'morgans',
    type: { en: 'Shelter provider', it: 'Colui che la ospita' },
    summary: {
      en: 'Morgans shelters Vivi aboard his airship.',
      it: 'Morgans ospita Bibi a bordo del suo dirigibile.',
    },
  },
  viviWapolEscape: {
    character: 'wapol',
    type: { en: 'Escape companion', it: 'Compagno di fuga' },
    summary: {
      en: 'Vivi escapes CP0 by hiding in Wapol’s mouth as he runs out of the castle.',
      it: 'Bibi fugge dal CP0 nascondendosi nella bocca di Wapol mentre lui scappa dal castello.',
    },
  },
  threeGoldenweek: {
    character: 'miss-goldenweek',
    type: { en: 'Agent partner', it: 'Collega in missione' },
    summary: {
      en: 'Mr. 3 works with Miss Goldenweek to capture the giants on Little Garden.',
      it: 'Mr. Three lavora con Miss Golden Week per catturare i giganti a Little Garden.',
    },
  },
  threeCrocodile: {
    character: 'crocodile',
    type: { en: 'Boss who discards him', it: 'Capo che lo elimina' },
    summary: {
      en: 'Crocodile drains Mr. 3 and feeds him to a Bananawani after his failure.',
      it: 'Crocodile prosciuga Mr. Three e lo dà in pasto a un Bananacoccodrillo dopo il suo fallimento.',
    },
  },
  threeBuggy: {
    character: 'buggy',
    type: { en: 'Escape partner', it: 'Compagno di fuga' },
    summary: {
      en: 'Mr. 3 joins Buggy in trying to escape Impel Down.',
      it: 'Mr. Three si unisce a Bagy nel tentativo di fuggire da Impel Down.',
    },
  },
  threeLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Escape ally', it: 'Alleato nella fuga' },
    summary: {
      en: 'Mr. 3’s wax lets Luffy block Magellan’s poison during their escape.',
      it: 'La cera di Mr. Three permette a Rufy di bloccare il veleno di Magellan durante la fuga.',
    },
  },
  threeBonClay: {
    character: 'bon-clay',
    type: { en: 'Inspiration', it: 'Modello' },
    summary: {
      en: 'Mr. 3 helps free Ace after learning of Bon Clay’s sacrifice for their escape.',
      it: 'Mr. Three aiuta a liberare Ace dopo aver saputo del sacrificio di Mr. Two per la loro fuga.',
    },
  },
  threeBuggyCrew: {
    character: 'buggy',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Mr. 3 joins Buggy’s pirate crew after the war.',
      it: 'Mr. Three entra nella ciurma di Bagy dopo la guerra.',
    },
  },
  threeCrocodileGuild: {
    character: 'crocodile',
    type: { en: 'Leader he supports', it: 'Capo che sostiene' },
    summary: {
      en: 'Mr. 3 sides with Crocodile when Cross Guild’s leaders confront Buggy.',
      it: 'Mr. Three si schiera con Crocodile quando i capi della Cross Guild affrontano Bagy.',
    },
  },
  threeBuggyDiscarded: {
    character: 'buggy',
    type: { en: 'Captain he abandons', it: 'Capitano che abbandona' },
    summary: {
      en: 'Mr. 3 offers Buggy no support when Crocodile and Mihawk threaten him.',
      it: 'Mr. Three non offre sostegno a Bagy quando Crocodile e Mihawk lo minacciano.',
    },
  },
  dorryRival: {
    character: 'brogy',
    type: { en: 'Friend and duelling rival', it: 'Amico e rivale in duello' },
    summary: {
      en: 'Dorry and Brogy have continued their duel on Little Garden for a hundred years.',
      it: 'Dori e Brogi continuano da cent’anni il loro duello a Little Garden.',
    },
  },
  dorryLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'Dorry and Brogy clear the way for Luffy’s ship to leave Little Garden.',
      it: 'Dori e Brogi aprono la strada alla nave di Rufy per lasciare Little Garden.',
    },
  },
  dorryShanks: {
    character: 'shanks',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'Dorry and Brogy welcome Shanks on Elbaf and support him against Kid.',
      it: 'Dori e Brogi accolgono Shanks a Elbaf e lo sostengono contro Kidd.',
    },
  },
  dorryLuffyRescue: {
    character: 'monkey-d-luffy',
    type: { en: 'Ally he rescues', it: 'Alleato che soccorre' },
    summary: {
      en: 'Dorry and Brogy rescue Luffy from Ju Peter’s attack on Egghead.',
      it: 'Dori e Brogi salvano Rufy dall’attacco di Ju Peter a Egghead.',
    },
  },
  dorryDuelPaused: {
    character: 'brogy',
    type: { en: 'Friend and rival', it: 'Amico e rivale' },
    summary: {
      en: 'Dorry and Brogy put their duel on hold and return to Elbaf for new weapons.',
      it: 'Dori e Brogi sospendono il duello e tornano a Elbaf per procurarsi nuove armi.',
    },
  },
  brogyRival: {
    character: 'dorry',
    type: { en: 'Friend and duelling rival', it: 'Amico e rivale in duello' },
    summary: {
      en: 'Brogy and Dorry have continued their duel on Little Garden for a hundred years.',
      it: 'Brogi e Dori continuano da cent’anni il loro duello a Little Garden.',
    },
  },
  brogyLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'Brogy and Dorry clear the way for Luffy’s ship to leave Little Garden.',
      it: 'Brogi e Dori aprono la strada alla nave di Rufy per lasciare Little Garden.',
    },
  },
  brogyShanks: {
    character: 'shanks',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'Brogy and Dorry welcome Shanks on Elbaf and support him against Kid.',
      it: 'Brogi e Dori accolgono Shanks a Elbaf e lo sostengono contro Kidd.',
    },
  },
  brogyLuffyRescue: {
    character: 'monkey-d-luffy',
    type: { en: 'Ally he rescues', it: 'Alleato che soccorre' },
    summary: {
      en: 'Brogy and Dorry rescue Luffy from Ju Peter’s attack on Egghead.',
      it: 'Brogi e Dori salvano Rufy dall’attacco di Ju Peter a Egghead.',
    },
  },
  brogyDuelPaused: {
    character: 'dorry',
    type: { en: 'Friend and rival', it: 'Amico e rivale' },
    summary: {
      en: 'Brogy and Dorry put their duel on hold and return to Elbaf for new weapons.',
      it: 'Brogi e Dori sospendono il duello e tornano a Elbaf per procurarsi nuove armi.',
    },
  },
  brogyUsopp: {
    character: 'usopp',
    type: { en: 'Admirer', it: 'Ammiratore' },
    summary: {
      en: 'Usopp admires Brogy’s pride as a warrior and wants to visit Elbaf.',
      it: 'Usop ammira l’orgoglio guerriero di Brogi e desidera visitare Elbaf.',
    },
  },
  wapolDalton: {
    character: 'dalton',
    type: { en: 'Former subordinate', it: 'Ex subordinato' },
    summary: {
      en: 'Dalton opposes Wapol’s return and protects the people Wapol abandoned.',
      it: 'Dorton si oppone al ritorno di Wapol e protegge gli abitanti che il re ha abbandonato.',
    },
  },
  wapolLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Luffy defeats Wapol and drives him out of Drum.',
      it: 'Rufy sconfigge Wapol e lo caccia da Drum.',
    },
  },
  wapolVivi: {
    character: 'nefertari-vivi',
    type: { en: 'Fellow fugitive', it: 'Compagna di fuga' },
    summary: {
      en: 'Wapol hides aboard Morgans’s airship with Vivi.',
      it: 'Wapol si nasconde sul dirigibile di Morgans insieme a Bibi.',
    },
  },
  wapolMorgans: {
    character: 'morgans',
    type: { en: 'Shelter provider', it: 'Colui che lo ospita' },
    summary: {
      en: 'Morgans shelters Wapol aboard his airship.',
      it: 'Morgans ospita Wapol sul suo dirigibile.',
    },
  },
  wapolViviEscape: {
    character: 'nefertari-vivi',
    type: { en: 'Escape companion', it: 'Compagna di fuga' },
    summary: {
      en: 'Vivi hides in Wapol’s mouth while he flees the castle after witnessing Cobra’s murder.',
      it: 'Bibi si nasconde nella bocca di Wapol mentre lui fugge dal castello dopo aver assistito all’omicidio di Cobra.',
    },
  },
  bonLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'New friend', it: 'Nuovo amico' },
    summary: {
      en: 'Bon Clay befriends Luffy aboard the Going Merry before either learns they are on opposing sides.',
      it: 'Mr. Two fa amicizia con Rufy sulla Going Merry prima che scoprano di trovarsi su fronti opposti.',
    },
  },
  bonSanji: {
    character: 'sanji',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Sanji defeats Bon Clay during the fighting in Alubarna.',
      it: 'Sanji sconfigge Mr. Two durante gli scontri ad Alubarna.',
    },
  },
  bonLuffySacrifice: {
    character: 'monkey-d-luffy',
    type: { en: 'Friend he protects', it: 'Amico che protegge' },
    summary: {
      en: 'Bon Clay acts as a decoy so Luffy and his crew can escape the Marine ships.',
      it: 'Mr. Two fa da esca per permettere a Rufy e alla ciurma di sfuggire alle navi della Marina.',
    },
  },
  bonLuffyPrison: {
    character: 'monkey-d-luffy',
    type: { en: 'Friend he saves', it: 'Amico che salva' },
    summary: {
      en: 'Bon Clay carries the poisoned Luffy through Impel Down to seek help.',
      it: 'Mr. Two trasporta Rufy avvelenato attraverso Impel Down per cercare aiuto.',
    },
  },
  bonIvankov: {
    character: 'emporio-ivankov',
    type: { en: 'Healer he seeks', it: 'Guaritore che cerca' },
    summary: {
      en: 'Bon Clay seeks Ivankov’s help and supports Luffy through the treatment.',
      it: 'Mr. Two cerca l’aiuto di Ivankov e sostiene Rufy durante la cura.',
    },
  },
  bonLuffyGates: {
    character: 'monkey-d-luffy',
    type: { en: 'Friend he frees', it: 'Amico che libera' },
    summary: {
      en: 'Bon Clay stays in Impel Down and opens the Gates of Justice so Luffy and the others can escape.',
      it: 'Mr. Two resta a Impel Down e apre i Cancelli della Giustizia per permettere a Rufy e agli altri di fuggire.',
    },
  },
  bonMagellan: {
    character: 'magellan',
    type: { en: 'Enemy he impersonates', it: 'Nemico di cui prende il posto' },
    summary: {
      en: 'Bon Clay impersonates Magellan to order the gates opened, then faces him inside the prison.',
      it: 'Mr. Two assume l’aspetto di Magellan per ordinare l’apertura dei cancelli, poi lo affronta nella prigione.',
    },
  },
  chopperKureha: {
    character: 'kureha',
    type: { en: 'Doctor he assists', it: 'Medico che assiste' },
    summary: {
      en: 'Chopper works with Kureha at Drum Castle.',
      it: 'Chopper lavora con Kureha nel castello di Drum.',
    },
  },
  chopperHiluluk: {
    character: 'hiluluk',
    type: { en: 'Adoptive father', it: 'Padre adottivo' },
    summary: {
      en: 'Hiluluk takes Chopper in, gives him a name and inspires his wish to become a doctor.',
      it: 'Hirurukù accoglie Chopper, gli dà un nome e ispira il suo desiderio di diventare medico.',
    },
  },
  chopperHilulukLate: {
    character: 'hiluluk',
    type: { en: 'Late adoptive father', it: 'Padre adottivo defunto' },
    summary: {
      en: 'Hiluluk dies after accepting Chopper’s poisonous mushroom and leaves him the dream of curing others.',
      it: 'Hirurukù muore dopo aver accettato il fungo velenoso di Chopper e gli lascia il sogno di curare gli altri.',
    },
  },
  chopperKurehaMentor: {
    character: 'kureha',
    type: { en: 'Medical mentor', it: 'Maestra di medicina' },
    summary: {
      en: 'Kureha takes Chopper as her apprentice after Hiluluk’s death.',
      it: 'Kureha accoglie Chopper come allievo dopo la morte di Hirurukù.',
    },
  },
  chopperLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Luffy welcomes Chopper into his crew as its doctor.',
      it: 'Rufy accoglie Chopper nella ciurma come medico.',
    },
  },
  chopperLuffyTraining: {
    character: 'monkey-d-luffy',
    type: { en: 'Captain he waits for', it: 'Capitano che aspetta' },
    summary: {
      en: 'Chopper understands Luffy’s message to his scattered crew.',
      it: 'Chopper comprende il messaggio di Rufy alla ciurma dispersa.',
    },
  },
  crocodileVivi: {
    character: 'nefertari-vivi',
    type: { en: 'Enemy', it: 'Nemica' },
    summary: {
      en: 'Vivi exposes Crocodile as the leader behind Baroque Works and opposes his takeover of Alabasta.',
      it: 'Bibi scopre che Crocodile guida la Baroque Works e si oppone al suo piano di conquistare Alabasta.',
    },
  },
  crocodileOne: {
    character: 'mr-1',
    type: { en: 'Officer', it: 'Agente ufficiale' },
    summary: {
      en: 'Mr. 1 carries out Crocodile’s orders in Alabasta.',
      it: 'Mr. One esegue gli ordini di Crocodile ad Alabasta.',
    },
  },
  crocodileLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'Luffy confronts Crocodile to stop his plan against Alabasta.',
      it: 'Rufy affronta Crocodile per fermare il suo piano contro Alabasta.',
    },
  },
  crocodileLuffyDefeat: {
    character: 'monkey-d-luffy',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Luffy defeats Crocodile beneath Alubarna and ends his attempt to seize the kingdom.',
      it: 'Rufy sconfigge Crocodile sotto Alubarna e mette fine al suo tentativo di impadronirsi del regno.',
    },
  },
  crocodileRobin: {
    character: 'nico-robin',
    type: { en: 'Former partner', it: 'Ex socia' },
    summary: {
      en: 'Crocodile turns against Robin when she refuses to give him the information he wants.',
      it: 'Crocodile si rivolta contro Robin quando lei non gli dà le informazioni che cerca.',
    },
  },
  crocodileLuffyEscape: {
    character: 'monkey-d-luffy',
    type: { en: 'Reluctant escape ally', it: 'Alleato riluttante nella fuga' },
    summary: {
      en: 'Crocodile joins Luffy’s escape from Impel Down without putting their feud behind him.',
      it: 'Crocodile partecipa alla fuga di Rufy da Impel Down senza dimenticare i loro contrasti.',
    },
  },
  crocodileLuffyRescue: {
    character: 'monkey-d-luffy',
    type: { en: 'Pirate he helps escape', it: 'Pirata che aiuta a fuggire' },
    summary: {
      en: 'Crocodile sends Luffy and Jinbe away from Sakazuki during the retreat from Marineford.',
      it: 'Crocodile allontana Rufy e Jinbe da Sakazuki durante la ritirata da Marineford.',
    },
  },
  crocodileOneLoyal: {
    character: 'mr-1',
    type: { en: 'Loyal subordinate', it: 'Subordinato fedele' },
    summary: {
      en: 'Mr. 1 stays with Crocodile and follows him toward the New World.',
      it: 'Mr. One resta con Crocodile e lo segue verso il Nuovo Mondo.',
    },
  },
  crocodileMihawk: {
    character: 'dracule-mihawk',
    type: { en: 'Business partner', it: 'Socio' },
    summary: {
      en: 'Crocodile and Mihawk establish Cross Guild together.',
      it: 'Crocodile e Mihawk fondano insieme la Cross Guild.',
    },
  },
  crocodileBuggy: {
    character: 'buggy',
    type: { en: 'Public figurehead', it: 'Figura pubblica' },
    summary: {
      en: 'Crocodile lets Buggy appear as Cross Guild’s leader while he and Mihawk control the organization.',
      it: 'Crocodile lascia che Bagy appaia come capo della Cross Guild mentre lui e Mihawk controllano l’organizzazione.',
    },
  },
  cobraVivi: {
    character: 'nefertari-vivi',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'Vivi is Cobra’s daughter and has infiltrated Baroque Works to protect Alabasta.',
      it: 'Bibi è la figlia di Cobra e si è infiltrata nella Baroque Works per proteggere Alabasta.',
    },
  },
  cobraIgaram: {
    character: 'igaram',
    type: { en: 'Guard captain', it: 'Capitano della guardia' },
    summary: {
      en: 'Igaram leads Cobra’s royal guard and protects Vivi on her mission.',
      it: 'Igaram guida la guardia reale di Cobra e protegge Bibi durante la missione.',
    },
  },
  cobraPell: {
    character: 'pell',
    type: { en: 'Royal guard', it: 'Guardia reale' },
    summary: {
      en: 'Pell serves Cobra and protects the royal family.',
      it: 'Pell serve Cobra e protegge la famiglia reale.',
    },
  },
  cobraChaka: {
    character: 'chaka',
    type: { en: 'Royal guard', it: 'Guardia reale' },
    summary: {
      en: 'Chaka serves Cobra and helps defend the palace.',
      it: 'Chaka serve Cobra e contribuisce alla difesa del palazzo.',
    },
  },
  cobraLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Ally he thanks', it: 'Alleato che ringrazia' },
    summary: {
      en: 'Cobra thanks Luffy and his companions for saving Alabasta.',
      it: 'Cobra ringrazia Rufy e i suoi compagni per aver salvato Alabasta.',
    },
  },
  cobraSabo: {
    character: 'sabo',
    type: { en: 'Messenger he protects', it: 'Messaggero che protegge' },
    summary: {
      en: 'Cobra asks Sabo to carry his message to Vivi and Luffy, then shields his escape.',
      it: 'Cobra chiede a Sabo di portare il suo messaggio a Bibi e Rufy, poi ne protegge la fuga.',
    },
  },
  cobraIm: {
    character: 'im',
    type: { en: 'Assailant', it: 'Aggressore' },
    summary: {
      en: 'Im attacks Cobra during the audience at Mary Geoise.',
      it: 'Im attacca Cobra durante l’udienza a Marijoa.',
    },
  },
  aceLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Younger brother', it: 'Fratello minore' },
    summary: {
      en: 'Ace meets his younger brother Luffy again in Alabasta.',
      it: 'Ace ritrova il fratello minore Rufy ad Alabasta.',
    },
  },
  aceWhitebeard: {
    character: 'edward-newgate',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Ace commands Whitebeard’s second division.',
      it: 'Ace comanda la seconda divisione di Barbabianca.',
    },
  },
  aceTeach: {
    character: 'marshall-d-teach',
    type: {
      en: 'Former subordinate he pursues',
      it: 'Ex subordinato che insegue',
    },
    summary: {
      en: 'Ace pursues Teach for killing Thatch and refuses to let him hunt Luffy.',
      it: 'Ace insegue Teach per aver ucciso Satch e rifiuta di lasciargli dare la caccia a Rufy.',
    },
  },
  aceRoger: {
    character: 'gold-roger',
    type: { en: 'Biological father', it: 'Padre biologico' },
    summary: {
      en: 'Roger is revealed to be Ace’s biological father.',
      it: 'Roger viene rivelato come padre biologico di Ace.',
    },
  },
  aceWhitebeardFather: {
    character: 'edward-newgate',
    type: { en: 'Father figure', it: 'Figura paterna' },
    summary: {
      en: 'Whitebeard takes Ace into his crew and gives him the family he had sought.',
      it: 'Barbabianca accoglie Ace nella ciurma e gli offre la famiglia che cercava.',
    },
  },
  aceLuffySacrifice: {
    character: 'monkey-d-luffy',
    type: {
      en: 'Brother he dies protecting',
      it: 'Fratello che protegge fino alla morte',
    },
    summary: {
      en: 'Ace shields Luffy from Sakazuki’s attack and dies in his arms.',
      it: 'Ace protegge Rufy dall’attacco di Sakazuki e muore fra le sue braccia.',
    },
  },
  aceRouge: {
    character: 'portgas-d-rouge',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'Rouge carries Ace for twenty months to protect him from the search for Roger’s child.',
      it: 'Rouge porta Ace in grembo per venti mesi per proteggerlo dalla ricerca del figlio di Roger.',
    },
  },
  // Childhood oath only; Ace never learns Sabo survived.
  aceSabo: {
    character: 'sabo',
    type: { en: 'Sworn brother', it: 'Fratello per giuramento' },
    summary: {
      en: 'Ace, Sabo and Luffy share cups as children and pledge to become brothers.',
      it: 'Ace, Sabo e Rufy si scambiano le coppe da bambini e giurano di diventare fratelli.',
    },
  },
  aceTama: {
    character: 'tama',
    type: {
      en: 'Friend he makes a promise to',
      it: 'Amica a cui fa una promessa',
    },
    summary: {
      en: 'Ace promises Tama that she can join his crew once she becomes a capable kunoichi.',
      it: 'Ace promette a Tama che potrà entrare nella sua ciurma quando sarà diventata un’abile kunoichi.',
    },
  },
  aceYamato: {
    character: 'yamato',
    type: { en: 'Friend in Wano', it: 'Amico a Wano' },
    summary: {
      en: 'Ace befriends Yamato, who makes his vivre card and hears about Luffy’s dream.',
      it: 'Ace fa amicizia con Yamato, che prepara la sua vivre card e ascolta il racconto del sogno di Rufy.',
    },
  },
  oneCrocodile: {
    character: 'crocodile',
    type: { en: 'Boss', it: 'Capo' },
    summary: {
      en: 'Mr. 1 carries out Crocodile’s orders as a Baroque Works officer.',
      it: 'Mr. One esegue gli ordini di Crocodile come agente ufficiale della Baroque Works.',
    },
  },
  oneDoublefinger: {
    character: 'miss-doublefinger',
    type: { en: 'Agent partner', it: 'Collega in missione' },
    summary: {
      en: 'Mr. 1 works with Miss Doublefinger on Baroque Works missions.',
      it: 'Mr. One lavora con Miss Doublefinger nelle missioni della Baroque Works.',
    },
  },
  oneZoro: {
    character: 'roronoa-zoro',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Zoro learns to cut steel and defeats Mr. 1 in Alubarna.',
      it: 'Zoro impara a tagliare l’acciaio e sconfigge Mr. One ad Alubarna.',
    },
  },
  oneCrocodileEscape: {
    character: 'crocodile',
    type: { en: 'Boss who frees him', it: 'Capo che lo libera' },
    summary: {
      en: 'Crocodile releases Mr. 1 from his cell and takes him along in the escape from Impel Down.',
      it: 'Crocodile libera Mr. One dalla cella e lo porta con sé nella fuga da Impel Down.',
    },
  },
  oneCrocodileNewWorld: {
    character: 'crocodile',
    type: { en: 'Boss he follows', it: 'Capo che segue' },
    summary: {
      en: 'Mr. 1 remains with Crocodile and agrees to accompany him to the New World.',
      it: 'Mr. One resta con Crocodile e accetta di accompagnarlo nel Nuovo Mondo.',
    },
  },
  oneCrocodileGuild: {
    character: 'crocodile',
    type: { en: 'Cross Guild superior', it: 'Superiore nella Cross Guild' },
    summary: {
      en: 'Mr. 1 continues to serve Crocodile in Cross Guild.',
      it: 'Mr. One continua a servire Crocodile nella Cross Guild.',
    },
  },
  robinLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Captain who saves her', it: 'Capitano che la salva' },
    summary: {
      en: 'Luffy saves Robin from the collapsing tomb and accepts her aboard his ship.',
      it: 'Rufy salva Robin dal crollo della tomba e la accoglie sulla nave.',
    },
  },
  robinCrocodile: {
    character: 'crocodile',
    type: { en: 'Former partner', it: 'Ex socio' },
    summary: {
      en: 'Robin worked with Crocodile, who turned against her when she withheld the information he wanted.',
      it: 'Robin lavorava con Crocodile, che si è rivoltato contro di lei quando non ha ottenuto le informazioni che cercava.',
    },
  },
  robinClover: {
    character: 'clover',
    type: { en: 'Archaeology mentor', it: 'Maestro di archeologia' },
    summary: {
      en: 'Clover recognizes Robin’s work and welcomes her among Ohara’s scholars.',
      it: 'Clover riconosce il lavoro di Robin e la accoglie fra gli studiosi di Ohara.',
    },
  },
  robinSaul: {
    character: 'jaguar-d-saul',
    type: { en: 'Childhood friend', it: 'Amico d’infanzia' },
    summary: {
      en: 'Saul befriends Robin on Ohara and teaches her to laugh through hardship.',
      it: 'Saul fa amicizia con Robin a Ohara e le insegna a ridere nelle difficoltà.',
    },
  },
  robinOlvia: {
    character: 'nico-olvia',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'Olvia is Robin’s mother and returns to Ohara after years away.',
      it: 'Olvia è la madre di Robin e torna a Ohara dopo anni di assenza.',
    },
  },
  robinSaulSacrifice: {
    character: 'jaguar-d-saul',
    type: { en: 'Friend who protects her', it: 'Amico che la protegge' },
    summary: {
      en: 'Saul protects Robin during the destruction of Ohara before Kuzan freezes him.',
      it: 'Saul protegge Robin durante la distruzione di Ohara prima che Kuzan lo congeli.',
    },
  },
  robinOlviaLate: {
    character: 'nico-olvia',
    type: { en: 'Late mother', it: 'Madre defunta' },
    summary: {
      en: 'Olvia stays with Ohara’s scholars while Robin escapes the island’s destruction.',
      it: 'Olvia resta con gli studiosi di Ohara mentre Robin fugge dalla distruzione dell’isola.',
    },
  },
  robinLuffyRescue: {
    character: 'monkey-d-luffy',
    type: {
      en: 'Captain she asks for help',
      it: 'Capitano a cui chiede aiuto',
    },
    summary: {
      en: 'Robin tells Luffy she wants to live and asks him to take her away from Enies Lobby.',
      it: 'Robin dice a Rufy di voler vivere e gli chiede di portarla via da Enies Lobby.',
    },
  },
  robinKoala: {
    character: 'koala',
    type: { en: 'Friend', it: 'Amica' },
    summary: {
      en: 'Koala embraces Robin when they meet again in Dressrosa.',
      it: 'Koala abbraccia Robin quando si ritrovano a Dressrosa.',
    },
  },
  robinKoalaTraining: {
    character: 'koala',
    type: { en: 'Friend and instructor', it: 'Amica e insegnante' },
    summary: {
      en: 'Koala teaches Robin the basics of fish-man karate during her training.',
      it: 'Koala insegna a Robin le basi del karate degli uomini-pesce durante l’addestramento.',
    },
  },
  robinSaulSurvived: {
    character: 'jaguar-d-saul',
    type: {
      en: 'Surviving childhood friend',
      it: 'Amico d’infanzia sopravvissuto',
    },
    summary: {
      en: 'Robin learns that Saul survived Ohara and helped preserve its books.',
      it: 'Robin scopre che Saul è sopravvissuto a Ohara e ha contribuito a salvarne i libri.',
    },
  },
  robinSaulReunion: {
    character: 'jaguar-d-saul',
    type: { en: 'Reunited friend', it: 'Amico ritrovato' },
    summary: {
      en: 'Robin reunites with Saul on Elbaf after twenty-two years.',
      it: 'Robin ritrova Saul a Elbaf dopo ventidue anni.',
    },
  },
  dorryControlledPair: {
    character: 'brogy',
    type: {
      en: 'Friend under the same control',
      it: 'Amico sotto lo stesso controllo',
    },
    summary: {
      en: 'Im transforms Dorry and Brogy and forces them to obey orders against Elbaf.',
      it: 'Im trasforma Dori e Brogi e li costringe a eseguire ordini contro Elbaf.',
    },
  },
  dorryIm: {
    character: 'im',
    type: { en: 'Forced controller', it: 'Controllo imposto' },
    summary: {
      en: 'Im transforms Dorry and orders the giants to kill Jarul.',
      it: 'Im trasforma Dori e ordina ai giganti di uccidere Jarul.',
    },
  },
  brogyControlledPair: {
    character: 'dorry',
    type: {
      en: 'Friend under the same control',
      it: 'Amico sotto lo stesso controllo',
    },
    summary: {
      en: 'Im transforms Brogy and Dorry and forces them to obey orders against Elbaf.',
      it: 'Im trasforma Brogi e Dori e li costringe a eseguire ordini contro Elbaf.',
    },
  },
  brogyIm: {
    character: 'im',
    type: { en: 'Forced controller', it: 'Controllo imposto' },
    summary: {
      en: 'Im transforms Brogy and orders the giants to kill Jarul.',
      it: 'Im trasforma Brogi e ordina ai giganti di uccidere Jarul.',
    },
  },
  viviKohzaReconciled: {
    character: 'kohza',
    type: { en: 'Childhood friend', it: 'Amico d’infanzia' },
    summary: {
      en: 'Vivi and Kohza survive the rebellion after Crocodile’s plot is exposed.',
      it: 'Bibi e Kosa sopravvivono alla ribellione dopo che il piano di Crocodile viene scoperto.',
    },
  },
} satisfies Record<string, Relationship>

export const alabastaRelationships = {
  // Anime-only snapshot keeps the caretaker before the promise; the
  // shared selection waits for chapter 105.
  'laboon': [
    {
      episode: 62,
      chapter: 105,
      source: 'anime',
      value: [retained.laboonCrocus],
    },
    {
      episode: 63,
      chapter: 105,
      value: [retained.laboonCrocus, retained.laboonLuffy],
    },
    {
      episode: 353,
      chapter: 459,
      value: [
        retained.laboonCrocus,
        retained.laboonBrook,
        retained.laboonLuffy,
      ],
    },
  ],
  // Waits for chapter 105 with Laboon.
  'crocus': [
    { episode: 62, chapter: 105, value: [retained.crocusLaboon] },
    {
      episode: 400,
      chapter: 506,
      value: [
        retained.crocusLaboon,
        retained.crocusRoger,
        retained.crocusRayleigh,
      ],
    },
  ],
  // Anime-only snapshot lists Monday before Vivi opens at chapter 114.
  // Chapter 632 family update is a cover, so manga only.
  'mr-9': [
    { episode: 64, chapter: 114, source: 'anime', value: [retained.mr9Monday] },
    {
      episode: 67,
      chapter: 114,
      value: [retained.mr9Vivi, retained.mr9Monday],
    },
    {
      episode: 552,
      chapter: 632,
      source: 'manga',
      value: [retained.mr9Vivi, retained.mr9Wife],
    },
  ],
  // Anime-only snapshot precedes Vivi, which opens at chapter 114.
  'igaram': [
    {
      episode: 64,
      chapter: 114,
      source: 'anime',
      value: [retained.igaramMonday],
    },
    {
      episode: 67,
      chapter: 114,
      value: [retained.igaramVivi, retained.igaramNami, retained.igaramMonday],
    },
    {
      episode: 128,
      chapter: 213,
      value: [
        retained.igaramVivi,
        retained.igaramWife,
        retained.igaramNami,
        retained.igaramMonday,
      ],
    },
  ],
  // Anime-only snapshot precedes Vivi, which opens at chapter 114.
  'miss-monday': [
    {
      episode: 64,
      chapter: 114,
      source: 'anime',
      value: [retained.mondayIgaram, retained.mondayMr9],
    },
    {
      episode: 67,
      chapter: 114,
      value: [retained.mondayVivi, retained.mondayIgaram, retained.mondayMr9],
    },
    {
      episode: 552,
      chapter: 632,
      source: 'manga',
      value: [
        retained.mondayHusband,
        retained.mondayVivi,
        retained.mondayIgaram,
      ],
    },
  ],
  'karoo': [
    { episode: 67, chapter: 114, value: [retained.karooVivi] },
    { episode: 113, chapter: 183, value: [retained.karooProtectsVivi] },
  ],
  // Rescue expedition starts at the chapter 365 cover, where Goldenweek,
  // Mr. 5 and Valentine leave together; manga only, the episode is an
  // ordering reference.
  'mr-5': [
    { episode: 66, chapter: 114, value: [retained.fiveValentine] },
    {
      episode: 76,
      chapter: 126,
      value: [retained.fiveValentine, retained.fiveUsopp],
    },
    {
      episode: 253,
      chapter: 365,
      source: 'manga',
      value: [
        retained.fiveValentine,
        retained.fiveGoldenweek,
        retained.fiveUsopp,
      ],
    },
  ],
  'miss-valentine': [
    { episode: 66, chapter: 114, value: [retained.valentineFive] },
    {
      episode: 76,
      chapter: 126,
      value: [retained.valentineFive, retained.valentineNami],
    },
    {
      episode: 253,
      chapter: 365,
      source: 'manga',
      value: [
        retained.valentineFive,
        retained.valentineGoldenweek,
        retained.valentineNami,
      ],
    },
  ],
  'miss-goldenweek': [
    { episode: 70, chapter: 120, value: [retained.goldenweekThree] },
    {
      episode: 76,
      chapter: 124,
      value: [retained.goldenweekThree, retained.goldenweekLuffy],
    },
    {
      episode: 253,
      chapter: 365,
      source: 'manga',
      value: [
        retained.goldenweekThree,
        retained.goldenweekFive,
        retained.goldenweekValentine,
      ],
    },
  ],
  'dalton': [
    { episode: 80, chapter: 135, value: [retained.daltonWapol] },
    {
      episode: 86,
      chapter: 145,
      value: [
        retained.daltonWapol,
        retained.daltonHiluluk,
        retained.daltonChopper,
      ],
    },
  ],
  // Delayed to chapter 130.
  'mr-11': [{ episode: 79, chapter: 130, value: [retained.elevenSmoker] }],
  'kureha': [
    { episode: 83, chapter: 136, value: [retained.kurehaChopper] },
    {
      episode: 85,
      chapter: 143,
      value: [retained.kurehaChopper, retained.kurehaHiluluk],
    },
    {
      episode: 86,
      chapter: 145,
      value: [retained.kurehaChopperMentor, retained.kurehaHilulukLegacy],
    },
    {
      episode: 90,
      chapter: 153,
      value: [retained.kurehaChopperDeparture, retained.kurehaHilulukLegacy],
    },
  ],
  'hiluluk': [
    {
      episode: 85,
      chapter: 143,
      value: [retained.hilulukChopper, retained.hilulukKureha],
    },
    {
      episode: 86,
      chapter: 145,
      value: [
        retained.hilulukChopper,
        retained.hilulukLegacy,
        retained.hilulukWapol,
      ],
    },
  ],
  'chess': [
    {
      episode: 87,
      chapter: 147,
      value: [retained.chessWapol, retained.chessPartner],
    },
    {
      episode: 88,
      chapter: 149,
      value: [
        retained.chessWapol,
        retained.chessPartner,
        retained.chessChopper,
      ],
    },
  ],
  'kuromarimo': [
    {
      episode: 87,
      chapter: 147,
      value: [retained.kuromarimoWapol, retained.kuromarimoPartner],
    },
    {
      episode: 88,
      chapter: 149,
      value: [
        retained.kuromarimoWapol,
        retained.kuromarimoPartner,
        retained.kuromarimoChopper,
      ],
    },
  ],
  'mr-13': [{ episode: 91, chapter: 155, value: [retained.thirteenFriday] }],
  'miss-friday': [
    { episode: 91, chapter: 155, value: [retained.fridayThirteen] },
  ],
  'matsuge': [
    { episode: 97, chapter: 162, value: [retained.matsugeVivi] },
    {
      episode: 111,
      chapter: 179,
      value: [retained.matsugeVivi, retained.matsugeHasami],
    },
  ],
  // The 120/197 snapshot moves chapter 196 to episode 119, so earlier
  // readers never reach the revelation.
  'kohza': [
    {
      episode: 100,
      chapter: 164,
      value: [retained.kohzaVivi, retained.kohzaCobra],
    },
    {
      episode: 103,
      chapter: 165,
      value: [retained.kohzaVivi, retained.kohzaToto, retained.kohzaCobra],
    },
    {
      episode: 120,
      chapter: 197,
      value: [
        retained.kohzaVivi,
        retained.kohzaToto,
        retained.kohzaCobraCleared,
      ],
    },
  ],
  'pell': [
    {
      episode: 105,
      chapter: 167,
      value: [retained.pellCobra, retained.pellOther],
    },
    {
      episode: 106,
      chapter: 169,
      value: [retained.pellVivi, retained.pellCobra, retained.pellOther],
    },
    // After the explosion, not the sacrifice start.
    {
      episode: 126,
      chapter: 209,
      value: [retained.pellViviBomb, retained.pellCobra, retained.pellOther],
    },
  ],
  'chaka': [
    {
      episode: 105,
      chapter: 167,
      value: [retained.chakaCobra, retained.chakaOther],
    },
  ],
  'miss-doublefinger': [
    { episode: 103, chapter: 170, value: [retained.doublefingerOne] },
    {
      episode: 118,
      chapter: 193,
      value: [retained.doublefingerOne, retained.doublefingerNami],
    },
  ],
  'mr-4': [
    { episode: 103, chapter: 170, value: [retained.fourChristmas] },
    {
      episode: 115,
      chapter: 186,
      value: [retained.fourChristmas, retained.fourLassoo],
    },
  ],
  'miss-merry-christmas': [
    { episode: 103, chapter: 170, value: [retained.christmasFour] },
    {
      episode: 115,
      chapter: 186,
      value: [retained.christmasFour, retained.christmasUsopp],
    },
  ],
  'toto': [
    {
      episode: 103,
      chapter: 164,
      value: [retained.totoKohza, retained.totoVivi],
    },
    {
      episode: 104,
      chapter: 165,
      value: [retained.totoKohza, retained.totoVivi, retained.totoLuffy],
    },
  ],
  // Delayed to 111/179.
  'hasami': [
    {
      episode: 111,
      chapter: 179,
      value: [retained.hasamiMatsuge, retained.hasamiChopper],
    },
  ],
  'lassoo': [{ episode: 115, chapter: 184, value: [retained.lassooFour] }],
  'tsumegeri-guards': [
    {
      episode: 120,
      chapter: 196,
      value: [retained.guardsCobra, retained.guardsCrocodile],
    },
  ],
  'mr-7': [{ episode: 125, chapter: 206, value: [retained.sevenFather] }],
  'miss-fathers-day': [
    { episode: 125, chapter: 206, value: [retained.fatherSeven] },
  ],
  // Delayed to chapter 217.
  'hina': [
    {
      episode: 128,
      chapter: 217,
      value: [retained.hinaSmoker, retained.hinaJango, retained.hinaFullbody],
    },
  ],
  'terracotta': [
    { episode: 128, chapter: 213, value: [retained.terracottaIgaram] },
    {
      episode: 129,
      chapter: 215,
      value: [retained.terracottaIgaram, retained.terracottaVivi],
    },
  ],
  'nefertari-vivi': [
    {
      episode: 67,
      chapter: 114,
      value: [
        retained.viviIgaram,
        retained.viviKaroo,
        retained.viviLuffyEscort,
      ],
    },
    {
      episode: 93,
      chapter: 160,
      value: [
        retained.viviCobra,
        retained.viviKaroo,
        retained.viviIgaram,
        retained.viviLuffyEscort,
      ],
    },
    {
      episode: 100,
      chapter: 164,
      value: [
        retained.viviCobra,
        retained.viviKaroo,
        retained.viviIgaram,
        retained.viviLuffyEscort,
        retained.viviKohza,
      ],
    },
    {
      episode: 104,
      chapter: 166,
      value: [
        retained.viviCobra,
        retained.viviKaroo,
        retained.viviLuffyAlly,
        retained.viviIgaram,
        retained.viviKohza,
      ],
    },
    {
      episode: 129,
      chapter: 216,
      value: [
        retained.viviCobra,
        retained.viviKaroo,
        retained.viviLuffyFriend,
        retained.viviIgaram,
        retained.viviKohzaReconciled,
      ],
    },
    {
      episode: 1081,
      chapter: 1054,
      value: [
        retained.viviCobraDead,
        retained.viviKaroo,
        retained.viviLuffyFriend,
        retained.viviIgaram,
        retained.viviKohzaReconciled,
      ],
    },
    {
      episode: 1106,
      chapter: 1074,
      value: [
        retained.viviCobraDead,
        retained.viviKaroo,
        retained.viviLuffyFriend,
        retained.viviWapol,
        retained.viviMorgans,
      ],
    },
    // Opens Vivi's escape; episode summary overrides a wiki cross-reference.
    {
      episode: 1119,
      chapter: 1085,
      value: [
        retained.viviCobraDead,
        retained.viviKaroo,
        retained.viviLuffyFriend,
        retained.viviWapolEscape,
        retained.viviMorgans,
      ],
    },
  ],
  'mr-3': [
    { episode: 70, chapter: 120, value: [retained.threeGoldenweek] },
    {
      episode: 104,
      chapter: 166,
      value: [retained.threeGoldenweek, retained.threeCrocodile],
    },
    // Prison partnership waits for the end of the adapted scene.
    {
      episode: 430,
      chapter: 529,
      value: [
        retained.threeBuggy,
        retained.threeGoldenweek,
        retained.threeCrocodile,
      ],
    },
    // Wax defense opens here; episode summary overrides a wiki cross-reference.
    {
      episode: 449,
      chapter: 545,
      value: [
        retained.threeLuffy,
        retained.threeBuggy,
        retained.threeGoldenweek,
        retained.threeCrocodile,
      ],
    },
    {
      episode: 480,
      chapter: 571,
      value: [
        retained.threeLuffy,
        retained.threeBonClay,
        retained.threeBuggy,
        retained.threeGoldenweek,
        retained.threeCrocodile,
      ],
    },
    {
      episode: 512,
      chapter: 593,
      value: [
        retained.threeBuggyCrew,
        retained.threeLuffy,
        retained.threeBonClay,
        retained.threeGoldenweek,
        retained.threeCrocodile,
      ],
    },
    {
      episode: 1086,
      chapter: 1058,
      value: [
        retained.threeCrocodileGuild,
        retained.threeBuggyDiscarded,
        retained.threeGoldenweek,
        retained.threeLuffy,
        retained.threeBonClay,
      ],
    },
  ],
  'dorry': [
    { episode: 71, chapter: 116, value: [retained.dorryRival] },
    {
      episode: 77,
      chapter: 129,
      value: [retained.dorryRival, retained.dorryLuffy],
    },
    {
      episode: 1112,
      chapter: 1079,
      value: [retained.dorryRival, retained.dorryLuffy, retained.dorryShanks],
    },
    {
      episode: 1144,
      chapter: 1110,
      value: [
        retained.dorryRival,
        retained.dorryLuffyRescue,
        retained.dorryShanks,
      ],
    },
    {
      episode: 1156,
      chapter: 1126,
      value: [
        retained.dorryDuelPaused,
        retained.dorryLuffyRescue,
        retained.dorryShanks,
      ],
    },
    // Forced control, as in the giants' redrawings.
    {
      episode: 1180,
      chapter: 1150,
      value: [
        retained.dorryControlledPair,
        retained.dorryIm,
        retained.dorryLuffyRescue,
      ],
    },
  ],
  'brogy': [
    { episode: 71, chapter: 116, value: [retained.brogyRival] },
    {
      episode: 77,
      chapter: 129,
      value: [retained.brogyRival, retained.brogyUsopp, retained.brogyLuffy],
    },
    {
      episode: 1112,
      chapter: 1079,
      value: [
        retained.brogyRival,
        retained.brogyUsopp,
        retained.brogyLuffy,
        retained.brogyShanks,
      ],
    },
    {
      episode: 1144,
      chapter: 1110,
      value: [
        retained.brogyRival,
        retained.brogyUsopp,
        retained.brogyLuffyRescue,
        retained.brogyShanks,
      ],
    },
    {
      episode: 1156,
      chapter: 1126,
      value: [
        retained.brogyDuelPaused,
        retained.brogyUsopp,
        retained.brogyLuffyRescue,
        retained.brogyShanks,
      ],
    },
    // Forced control, as in the giants' redrawings.
    {
      episode: 1180,
      chapter: 1150,
      value: [
        retained.brogyControlledPair,
        retained.brogyIm,
        retained.brogyLuffyRescue,
        retained.brogyUsopp,
      ],
    },
  ],
  'wapol': [
    { episode: 80, chapter: 135, value: [retained.wapolDalton] },
    {
      episode: 90,
      chapter: 153,
      value: [retained.wapolLuffy, retained.wapolDalton],
    },
    {
      episode: 1106,
      chapter: 1074,
      value: [
        retained.wapolVivi,
        retained.wapolMorgans,
        retained.wapolLuffy,
        retained.wapolDalton,
      ],
    },
    {
      episode: 1119,
      chapter: 1085,
      value: [
        retained.wapolViviEscape,
        retained.wapolMorgans,
        retained.wapolLuffy,
        retained.wapolDalton,
      ],
    },
  ],
  'bon-clay': [
    { episode: 92, chapter: 156, value: [retained.bonLuffy] },
    {
      episode: 116,
      chapter: 189,
      value: [retained.bonLuffy, retained.bonSanji],
    },
    // Says Marine ships: naming Hina would precede her chapter 217.
    {
      episode: 129,
      chapter: 215,
      value: [retained.bonLuffySacrifice, retained.bonSanji],
    },
    {
      episode: 438,
      chapter: 536,
      value: [retained.bonLuffyPrison, retained.bonSanji],
    },
    // Healing card waits for Ivankov's endpoint (chapter 540).
    {
      episode: 443,
      chapter: 540,
      value: [retained.bonLuffyPrison, retained.bonIvankov, retained.bonSanji],
    },
    {
      episode: 451,
      chapter: 548,
      value: [
        retained.bonLuffyGates,
        retained.bonIvankov,
        retained.bonMagellan,
        retained.bonSanji,
      ],
    },
  ],
  'tony-tony-chopper': [
    { episode: 83, chapter: 136, value: [retained.chopperKureha] },
    {
      episode: 85,
      chapter: 143,
      value: [retained.chopperHiluluk, retained.chopperKureha],
    },
    {
      episode: 86,
      chapter: 145,
      value: [retained.chopperHilulukLate, retained.chopperKurehaMentor],
    },
    {
      episode: 90,
      chapter: 153,
      value: [
        retained.chopperHilulukLate,
        retained.chopperKurehaMentor,
        retained.chopperLuffy,
      ],
    },
    {
      episode: 512,
      chapter: 594,
      value: [
        retained.chopperHilulukLate,
        retained.chopperKurehaMentor,
        retained.chopperLuffyTraining,
      ],
    },
    {
      episode: 522,
      chapter: 602,
      value: [
        retained.chopperHilulukLate,
        retained.chopperKurehaMentor,
        retained.chopperLuffy,
      ],
    },
  ],
  'crocodile': [
    { episode: 92, chapter: 155, value: [retained.crocodileVivi] },
    {
      episode: 104,
      chapter: 170,
      value: [retained.crocodileVivi, retained.crocodileOne],
    },
    {
      episode: 111,
      chapter: 179,
      value: [
        retained.crocodileVivi,
        retained.crocodileOne,
        retained.crocodileLuffy,
      ],
    },
    {
      episode: 126,
      chapter: 209,
      value: [
        retained.crocodileLuffyDefeat,
        retained.crocodileVivi,
        retained.crocodileOne,
      ],
    },
    {
      episode: 130,
      chapter: 218,
      value: [
        retained.crocodileLuffyDefeat,
        retained.crocodileRobin,
        retained.crocodileOne,
        retained.crocodileVivi,
      ],
    },
    {
      episode: 443,
      chapter: 540,
      value: [
        retained.crocodileLuffyEscape,
        retained.crocodileOne,
        retained.crocodileRobin,
        retained.crocodileVivi,
      ],
    },
    {
      episode: 487,
      chapter: 578,
      value: [
        retained.crocodileLuffyRescue,
        retained.crocodileOne,
        retained.crocodileRobin,
        retained.crocodileVivi,
      ],
    },
    {
      episode: 512,
      chapter: 593,
      value: [
        retained.crocodileOneLoyal,
        retained.crocodileLuffyRescue,
        retained.crocodileRobin,
        retained.crocodileVivi,
      ],
    },
    {
      episode: 1086,
      chapter: 1058,
      value: [
        retained.crocodileMihawk,
        retained.crocodileBuggy,
        retained.crocodileOneLoyal,
        retained.crocodileLuffyRescue,
        retained.crocodileRobin,
      ],
    },
  ],
  'nefertari-cobra': [
    { episode: 93, chapter: 160, value: [retained.cobraVivi] },
    {
      episode: 105,
      chapter: 167,
      value: [
        retained.cobraVivi,
        retained.cobraIgaram,
        retained.cobraPell,
        retained.cobraChaka,
      ],
    },
    {
      episode: 128,
      chapter: 213,
      value: [
        retained.cobraVivi,
        retained.cobraIgaram,
        retained.cobraPell,
        retained.cobraChaka,
        retained.cobraLuffy,
      ],
    },
    {
      episode: 1119,
      chapter: 1085,
      value: [
        retained.cobraVivi,
        retained.cobraSabo,
        retained.cobraIm,
        retained.cobraIgaram,
        retained.cobraLuffy,
      ],
    },
  ],
  'portgas-d-ace': [
    { episode: 95, chapter: 159, value: [retained.aceLuffy] },
    // Captain card waits for Whitebeard's endpoint.
    {
      episode: 151,
      chapter: 234,
      value: [retained.aceLuffy, retained.aceWhitebeard],
    },
    {
      episode: 325,
      chapter: 440,
      value: [retained.aceLuffy, retained.aceWhitebeard, retained.aceTeach],
    },
    {
      episode: 459,
      chapter: 550,
      value: [
        retained.aceLuffy,
        retained.aceWhitebeard,
        retained.aceTeach,
        retained.aceRoger,
      ],
    },
    {
      episode: 461,
      chapter: 552,
      value: [
        retained.aceLuffy,
        retained.aceWhitebeardFather,
        retained.aceTeach,
        retained.aceRoger,
      ],
    },
    {
      episode: 483,
      chapter: 574,
      value: [
        retained.aceLuffySacrifice,
        retained.aceWhitebeardFather,
        retained.aceTeach,
        retained.aceRoger,
      ],
    },
    // Rouge waits for her own endpoint.
    {
      episode: 493,
      chapter: 582,
      value: [
        retained.aceLuffySacrifice,
        retained.aceWhitebeardFather,
        retained.aceRoger,
        retained.aceRouge,
        retained.aceTeach,
      ],
    },
    {
      episode: 497,
      chapter: 585,
      value: [
        retained.aceLuffySacrifice,
        retained.aceWhitebeardFather,
        retained.aceSabo,
        retained.aceRouge,
        retained.aceRoger,
      ],
    },
    {
      episode: 897,
      chapter: 912,
      value: [
        retained.aceLuffySacrifice,
        retained.aceWhitebeardFather,
        retained.aceSabo,
        retained.aceRouge,
        retained.aceTama,
      ],
    },
    {
      episode: 1015,
      chapter: 1000,
      value: [
        retained.aceLuffySacrifice,
        retained.aceWhitebeardFather,
        retained.aceSabo,
        retained.aceTama,
        retained.aceYamato,
      ],
    },
  ],
  'mr-1': [
    {
      episode: 104,
      chapter: 170,
      value: [retained.oneCrocodile, retained.oneDoublefinger],
    },
    // Defeat follows Mr. 1's concession, not the fight.
    {
      episode: 120,
      chapter: 196,
      value: [
        retained.oneCrocodile,
        retained.oneDoublefinger,
        retained.oneZoro,
      ],
    },
    {
      episode: 444,
      chapter: 541,
      value: [
        retained.oneCrocodileEscape,
        retained.oneDoublefinger,
        retained.oneZoro,
      ],
    },
    {
      episode: 512,
      chapter: 593,
      value: [
        retained.oneCrocodileNewWorld,
        retained.oneDoublefinger,
        retained.oneZoro,
      ],
    },
    {
      episode: 1086,
      chapter: 1058,
      value: [
        retained.oneCrocodileGuild,
        retained.oneDoublefinger,
        retained.oneZoro,
      ],
    },
  ],
  'nico-robin': [
    // Her Crocodile card is already a former partnership at her endpoint.
    {
      episode: 130,
      chapter: 218,
      value: [retained.robinLuffy, retained.robinCrocodile],
    },
    // Manga only: Clover precedes Saul, who opens at chapter 392.
    {
      episode: 275,
      chapter: 391,
      source: 'manga',
      value: [
        retained.robinLuffy,
        retained.robinCrocodile,
        retained.robinClover,
      ],
    },
    {
      episode: 275,
      chapter: 392,
      value: [
        retained.robinLuffy,
        retained.robinSaul,
        retained.robinClover,
        retained.robinCrocodile,
      ],
    },
    {
      episode: 276,
      chapter: 393,
      value: [
        retained.robinLuffy,
        retained.robinSaul,
        retained.robinOlvia,
        retained.robinClover,
        retained.robinCrocodile,
      ],
    },
    {
      episode: 278,
      chapter: 398,
      value: [
        retained.robinLuffyRescue,
        retained.robinSaulSacrifice,
        retained.robinOlviaLate,
        retained.robinClover,
        retained.robinCrocodile,
      ],
    },
    {
      episode: 680,
      chapter: 745,
      value: [
        retained.robinLuffyRescue,
        retained.robinSaulSacrifice,
        retained.robinOlviaLate,
        retained.robinClover,
        retained.robinKoala,
      ],
    },
    {
      episode: 1044,
      chapter: 1021,
      value: [
        retained.robinLuffyRescue,
        retained.robinSaulSacrifice,
        retained.robinOlviaLate,
        retained.robinClover,
        retained.robinKoalaTraining,
      ],
    },
    {
      episode: 1097,
      chapter: 1066,
      value: [
        retained.robinLuffyRescue,
        retained.robinSaulSurvived,
        retained.robinOlviaLate,
        retained.robinClover,
        retained.robinKoalaTraining,
      ],
    },
    // Reunion follows the separate survival revelation (1097/1066).
    {
      episode: 1163,
      chapter: 1133,
      value: [
        retained.robinLuffyRescue,
        retained.robinSaulReunion,
        retained.robinOlviaLate,
        retained.robinClover,
        retained.robinKoalaTraining,
      ],
    },
  ],
} satisfies Record<string, Timeline<Relationship[]>>
