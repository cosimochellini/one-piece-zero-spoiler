import type { Relationship, Timeline } from '~/data/types'

/** Pinned research: docs/content-provenance/relationships.json and sources.json. */
const retained = {
  ganPierre: {
    character: 'pierre',
    type: { en: 'Mount and companion', it: 'Cavalcatura e compagno' },
    summary: {
      en: 'Gan Fall rides Pierre when he comes to the aid of travelers in the sky.',
      it: 'Gan Foll monta Pierre quando soccorre i viaggiatori nel cielo.',
    },
  },
  ganConis: {
    character: 'conis',
    type: { en: 'Person he protects', it: 'Persona che protegge' },
    summary: {
      en: 'Gan Fall saves Conis from a lightning strike and takes her to his home.',
      it: 'Gan Foll salva Konis da un fulmine e la porta a casa sua.',
    },
  },
  ganChopper: {
    character: 'tony-tony-chopper',
    type: { en: 'Person he rescues', it: 'Persona che soccorre' },
    summary: {
      en: 'Gan Fall answers Chopper’s whistle and intervenes to defend him at the altar.',
      it: 'Gan Foll risponde al fischietto di Chopper e interviene per difenderlo all’altare.',
    },
  },
  ganEnel: {
    character: 'enel',
    type: { en: 'Usurper', it: 'Usurpatore' },
    summary: {
      en: 'Enel overthrew Gan Fall and took control of Skypiea. Gan Fall opposes his rule.',
      it: 'Ener ha spodestato Gan Foll e si è impadronito di Skypiea. Gan Foll si oppone al suo dominio.',
    },
  },
  ganChief: {
    character: 'shandia-chief',
    type: { en: 'Partner in peace', it: 'Alleato nella pace' },
    summary: {
      en: 'The Shandia chief asks Gan Fall to govern the reunited island after the war.',
      it: 'Il capo shandia chiede a Gan Foll di governare l’isola riunita dopo la guerra.',
    },
  },
  ganRoger: {
    character: 'gold-roger',
    type: { en: 'Old friend', it: 'Vecchio amico' },
    summary: {
      en: 'Gan Fall remembers Roger’s visit to Skypiea and sees a resemblance between him and Luffy.',
      it: 'Gan Foll ricorda la visita di Roger a Skypiea e vede una somiglianza fra lui e Rufy.',
    },
  },
  pierreGan: {
    character: 'gan-fall',
    type: { en: 'Rider and companion', it: 'Cavaliere e compagno' },
    summary: {
      en: 'Pierre carries Gan Fall into the sky and helps him rescue travelers.',
      it: 'Pierre porta in volo Gan Foll e lo aiuta a soccorrere i viaggiatori.',
    },
  },
  pierreAisa: {
    character: 'aisa',
    type: { en: 'Girl he protects', it: 'Bambina che protegge' },
    summary: {
      en: 'Pierre shields Aisa from Enel’s lightning while helping her and Luffy.',
      it: 'Pierre protegge Aisa dai fulmini di Ener mentre aiuta lei e Rufy.',
    },
  },
  wyperGan: {
    character: 'gan-fall',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Wyper refuses to ally with Gan Fall despite their common enemy.',
      it: 'Wiper rifiuta di allearsi con Gan Foll nonostante il nemico comune.',
    },
  },
  wyperAisa: {
    character: 'aisa',
    type: { en: 'Young informant', it: 'Giovane informatrice' },
    summary: {
      en: 'Aisa’s account of the voices disappearing from Upper Yard helps Wyper decide when to attack.',
      it: 'Il racconto di Aisa sulle voci che scompaiono da Upper Yard aiuta Wiper a decidere quando attaccare.',
    },
  },
  wyperEnel: {
    character: 'enel',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'Wyper fights to take Upper Yard back from Enel.',
      it: 'Wiper combatte per strappare Upper Yard al dominio di Ener.',
    },
  },
  wyperLuffyEnemy: {
    character: 'monkey-d-luffy',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Wyper fights Luffy after warning him to leave Upper Yard.',
      it: 'Wiper affronta Rufy dopo avergli ordinato di lasciare Upper Yard.',
    },
  },
  wyperKalgara: {
    character: 'kalgara',
    type: { en: 'Ancestor', it: 'Antenato' },
    summary: {
      en: 'Wyper carries on Kalgara’s struggle to recover his people’s homeland and ring the golden bell.',
      it: 'Wiper prosegue la lotta di Calgara per recuperare la terra del suo popolo e suonare la campana d’oro.',
    },
  },
  wyperLuffyAlly: {
    character: 'monkey-d-luffy',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'Learning that Luffy wants the bell to reach Noland’s descendant, Wyper helps clear his route to Enel.',
      it: 'Quando scopre che Rufy vuole far sentire la campana al discendente di Noland, Wiper lo aiuta a raggiungere Ener.',
    },
  },
  wyperGanPeace: {
    character: 'gan-fall',
    type: { en: 'Former opponent', it: 'Ex avversario' },
    summary: {
      en: 'After Enel’s defeat, Wyper sees Gan Fall and the Shandia caring for the wounded together.',
      it: 'Dopo la sconfitta di Ener, Wiper vede Gan Foll e gli Shandia assistere insieme i feriti.',
    },
  },
  wyperGanGuard: {
    character: 'gan-fall',
    type: { en: 'Ruler he serves', it: 'Governante che serve' },
    summary: {
      en: 'Wyper leads the guards who protect Skypiea under Gan Fall’s rule.',
      it: 'Wiper guida le guardie che proteggono Skypiea sotto il governo di Gan Foll.',
    },
  },
  kamakiriWyper: {
    character: 'wyper',
    type: { en: 'Battle leader', it: 'Capo in battaglia' },
    summary: {
      en: 'Kamakiri fights alongside Wyper to recover the Shandia homeland.',
      it: 'Kamakiri combatte al fianco di Wiper per riconquistare la terra degli Shandia.',
    },
  },
  kamakiriWyperGuard: {
    character: 'wyper',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Kamakiri serves under Wyper in the guards protecting Skypiea.',
      it: 'Kamakiri presta servizio sotto Wiper nelle guardie che proteggono Skypiea.',
    },
  },
  brahamWyper: {
    character: 'wyper',
    type: { en: 'Battle leader', it: 'Capo in battaglia' },
    summary: {
      en: 'Braham fights alongside Wyper to recover the Shandia homeland.',
      it: 'Braham combatte al fianco di Wiper per riconquistare la terra degli Shandia.',
    },
  },
  brahamWyperGuard: {
    character: 'wyper',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Braham serves under Wyper in the guards protecting Skypiea.',
      it: 'Braham presta servizio sotto Wiper nelle guardie che proteggono Skypiea.',
    },
  },
  genboWyper: {
    character: 'wyper',
    type: { en: 'Battle leader', it: 'Capo in battaglia' },
    summary: {
      en: 'Genbo fights alongside Wyper to recover the Shandia homeland.',
      it: 'Genbo combatte al fianco di Wiper per riconquistare la terra degli Shandia.',
    },
  },
  genboWyperGuard: {
    character: 'wyper',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Genbo serves under Wyper in the guards protecting Skypiea.',
      it: 'Genbo presta servizio sotto Wiper nelle guardie che proteggono Skypiea.',
    },
  },
  kamakiriLaki: {
    character: 'laki',
    type: { en: 'Comrade he protects', it: 'Compagna che protegge' },
    summary: {
      en: 'Kamakiri is wounded while protecting Laki during the raid on Upper Yard.',
      it: 'Kamakiri viene ferito mentre protegge Laki durante l’assalto a Upper Yard.',
    },
  },
  kamakiriEnel: {
    character: 'enel',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Kamakiri cannot injure Enel and is struck down by his lightning.',
      it: 'Kamakiri non riesce a ferire Ener e viene abbattuto dai suoi fulmini.',
    },
  },
  brahamZoro: {
    character: 'roronoa-zoro',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Braham fights Zoro with his Flash Guns, but Zoro defeats him with a ranged sword attack.',
      it: 'Braham affronta Zoro con le Flash Gun, ma Zoro lo sconfigge con un colpo di spada a distanza.',
    },
  },
  genboYama: {
    character: 'yama',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Yama turns Genbo’s cannonball back against him and defeats him with his axe dials.',
      it: 'Yama respinge la palla di cannone di Genbo e lo sconfigge con gli axe dial.',
    },
  },
  lakiAisa: {
    character: 'aisa',
    type: { en: 'Young friend', it: 'Giovane amica' },
    summary: {
      en: 'Laki promises to bring Aisa soil from Upper Yard and keeps her little bag safe.',
      it: 'Laki promette di portare ad Aisa della terra di Upper Yard e custodisce il suo sacchetto.',
    },
  },
  lakiKamakiri: {
    character: 'kamakiri',
    type: { en: 'Comrade who protects her', it: 'Compagno che la protegge' },
    summary: {
      en: 'Kamakiri is injured while shielding Laki during the attack on Upper Yard.',
      it: 'Kamakiri viene ferito mentre difende Laki durante l’attacco a Upper Yard.',
    },
  },
  lakiWyper: {
    character: 'wyper',
    type: { en: 'Battle leader', it: 'Capo in battaglia' },
    summary: {
      en: 'Laki follows Wyper into battle and tries to warn him about Enel’s power.',
      it: 'Laki segue Wiper in battaglia e cerca di avvertirlo dei poteri di Ener.',
    },
  },
  lakiEnel: {
    character: 'enel',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Laki tries to shoot Enel while warning Wyper, but Enel strikes her down.',
      it: 'Laki cerca di sparare a Ener mentre avverte Wiper, ma Ener la abbatte.',
    },
  },
  lakiConisFriend: {
    character: 'conis',
    type: { en: 'Friend', it: 'Amica' },
    summary: {
      en: 'After the war, Laki spends time with Conis, Aisa and Nola on Upper Yard.',
      it: 'Dopo la guerra, Laki trascorre del tempo con Konis, Aisa e Nola a Upper Yard.',
    },
  },
  lakiConisCafe: {
    character: 'conis',
    type: { en: 'Cafe partner', it: 'Socia del caffè' },
    summary: {
      en: 'Laki cooks at the Pumpkin Cafe while Conis serves their customers.',
      it: 'Laki cucina al Pumpkin Cafe mentre Konis serve i clienti.',
    },
  },
  aisaWyper: {
    character: 'wyper',
    type: { en: 'Warrior she fears', it: 'Guerriero che teme' },
    summary: {
      en: 'Aisa is afraid of Wyper but tells him what she hears with her Mantra.',
      it: 'Aisa ha paura di Wiper, ma gli racconta ciò che sente con il Mantra.',
    },
  },
  aisaLaki: {
    character: 'laki',
    type: { en: 'Older friend', it: 'Amica più grande' },
    summary: {
      en: 'Laki protects Aisa’s treasured bag of soil and promises to fill it from Upper Yard.',
      it: 'Laki protegge il prezioso sacchetto di terra di Aisa e promette di riempirlo a Upper Yard.',
    },
  },
  aisaConis: {
    character: 'conis',
    type: { en: 'Rescuer', it: 'Soccorritrice' },
    summary: {
      en: 'Conis and Pagaya rescue Aisa after a sky shark attacks her broken boat.',
      it: 'Konis e Pagaya salvano Aisa dopo che uno squalo del cielo attacca la sua barca in avaria.',
    },
  },
  aisaNami: {
    character: 'nami',
    type: { en: 'Protector', it: 'Protettrice' },
    summary: {
      en: 'Nami stops Aisa from going into danger alone and takes her on the Waver.',
      it: 'Nami impedisce ad Aisa di avventurarsi da sola nel pericolo e la porta sul waver.',
    },
  },
  aisaPierre: {
    character: 'pierre',
    type: { en: 'Protector', it: 'Protettore' },
    summary: {
      en: 'Pierre shields Aisa from Enel’s lightning and takes the blow for her.',
      it: 'Pierre fa scudo ad Aisa e subisce al suo posto il fulmine di Ener.',
    },
  },
  aisaLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Hero', it: 'Eroe' },
    summary: {
      en: 'Aisa thanks Luffy for saving Skypiea and wants to become a warrior like him.',
      it: 'Aisa ringrazia Rufy per aver salvato Skypiea e vuole diventare una guerriera come lui.',
    },
  },
  suConis: {
    character: 'conis',
    type: { en: 'Owner', it: 'Padrona' },
    summary: {
      en: 'Su accompanies Conis on the beach and stays close to her.',
      it: 'Suu accompagna Konis sulla spiaggia e le resta accanto.',
    },
  },
  suPagaya: {
    character: 'pagaya',
    type: { en: 'Person who trusts her', it: 'Persona che si fida di lei' },
    summary: {
      en: 'Pagaya leaves Su to keep watch on the Going Merry.',
      it: 'Pagaya affida a Suu la sorveglianza della Going Merry.',
    },
  },
  conisPagaya: {
    character: 'pagaya',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Pagaya is Conis’s father. They welcome the visitors from the Blue Sea into their home.',
      it: 'Pagaya è il padre di Konis. Insieme accolgono in casa i visitatori del Mare Blu.',
    },
  },
  conisSu: {
    character: 'su',
    type: { en: 'Pet companion', it: 'Animale da compagnia' },
    summary: {
      en: 'Conis keeps Su by her side and introduces the cloud fox to her visitors.',
      it: 'Konis tiene Suu al suo fianco e presenta la volpe delle nuvole ai visitatori.',
    },
  },
  conisLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Visitor she helps', it: 'Visitatore che aiuta' },
    summary: {
      en: 'Conis explains life in Skypiea to Luffy and welcomes him into her home.',
      it: 'Konis spiega a Rufy come si vive a Skypiea e lo accoglie in casa.',
    },
  },
  conisGan: {
    character: 'gan-fall',
    type: { en: 'Rescuer', it: 'Soccorritore' },
    summary: {
      en: 'Gan Fall rescues Conis after she admits leading the pirates into Enel’s trap.',
      it: 'Gan Foll salva Konis dopo che lei ammette di aver condotto i pirati nella trappola di Ener.',
    },
  },
  conisPagayaLost: {
    character: 'pagaya',
    type: { en: 'Father who protects her', it: 'Padre che la protegge' },
    summary: {
      en: 'Pagaya pushes Conis out of the path of Enel’s lightning and disappears in the strike.',
      it: 'Pagaya spinge Konis fuori dalla traiettoria del fulmine di Ener e scompare nella scarica.',
    },
  },
  conisPagayaAlive: {
    character: 'pagaya',
    type: { en: 'Father she finds alive', it: 'Padre ritrovato vivo' },
    summary: {
      en: 'Conis is reunited with Pagaya, who survived Enel’s attack by falling into the White Sea.',
      it: 'Konis ritrova Pagaya, sopravvissuto all’attacco di Ener cadendo nel Mare Bianco.',
    },
  },
  conisMcKinley: {
    character: 'mckinley',
    type: { en: 'Evacuation ally', it: 'Alleato nell’evacuazione' },
    summary: {
      en: 'McKinley believes Conis’s warning and helps evacuate Angel Island.',
      it: 'McKinley crede all’avvertimento di Konis e aiuta a evacuare Angel Island.',
    },
  },
  conisLaki: {
    character: 'laki',
    type: { en: 'Cafe partner', it: 'Socia del caffè' },
    summary: {
      en: 'Conis serves customers at the Pumpkin Cafe while Laki cooks.',
      it: 'Konis serve i clienti al Pumpkin Cafe mentre Laki cucina.',
    },
  },
  pagayaConis: {
    character: 'conis',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'Pagaya lives with his daughter Conis and helps her welcome visitors from the Blue Sea.',
      it: 'Pagaya vive con sua figlia Konis e la aiuta ad accogliere i visitatori del Mare Blu.',
    },
  },
  pagayaNami: {
    character: 'nami',
    type: { en: 'Navigator he helps', it: 'Navigatrice che aiuta' },
    summary: {
      en: 'Pagaya repairs Nami’s old Waver and brings it to her at Upper Yard.',
      it: 'Pagaya ripara il vecchio waver di Nami e glielo porta a Upper Yard.',
    },
  },
  pagayaConisSaved: {
    character: 'conis',
    type: { en: 'Daughter he protects', it: 'Figlia che protegge' },
    summary: {
      en: 'Pagaya pushes Conis away from Enel’s lightning, putting himself in its path.',
      it: 'Pagaya spinge Konis lontano dal fulmine di Ener, esponendosi al suo posto.',
    },
  },
  mckinleyNami: {
    character: 'nami',
    type: { en: 'Offender he pursues', it: 'Trasgressora che insegue' },
    summary: {
      en: 'Nami runs McKinley over with a Waver after he announces the fine imposed on her crew.',
      it: 'Nami investe McKinley con un waver dopo che lui annuncia la multa inflitta alla ciurma.',
    },
  },
  mckinleyConis: {
    character: 'conis',
    type: { en: 'Evacuation ally', it: 'Alleata nell’evacuazione' },
    summary: {
      en: 'McKinley accepts Conis’s warning about Enel and orders the islanders to evacuate.',
      it: 'McKinley accoglie l’avvertimento di Konis su Ener e ordina agli abitanti di evacuare.',
    },
  },
  mckinleyGan: {
    character: 'gan-fall',
    type: { en: 'Former commander', it: 'Ex comandante' },
    summary: {
      en: 'McKinley tells Conis that he once served Gan Fall.',
      it: 'McKinley racconta a Konis di aver prestato servizio sotto Gan Foll.',
    },
  },
  enelSatori: {
    character: 'satori',
    type: { en: 'Defeated subordinate', it: 'Subordinato sconfitto' },
    summary: {
      en: 'Enel uses Satori’s defeat as a warning to the other priests.',
      it: 'Ener usa la sconfitta di Satori come ammonimento per gli altri sacerdoti.',
    },
  },
  enelGan: {
    character: 'gan-fall',
    type: { en: 'Deposed ruler', it: 'Governante spodestato' },
    summary: {
      en: 'Enel took Gan Fall’s position and rules Skypiea in his place.',
      it: 'Ener ha preso il posto di Gan Foll e governa Skypiea al suo posto.',
    },
  },
  enelWyper: {
    character: 'wyper',
    type: { en: 'Rebel opponent', it: 'Avversario ribelle' },
    summary: {
      en: 'Wyper uses Seastone and a Reject Dial to stop Enel’s heart, but Enel revives himself.',
      it: 'Wiper usa l’agalmatolite e un Reject Dial per fermare il cuore di Ener, che riesce a rianimarsi.',
    },
  },
  enelNami: {
    character: 'nami',
    type: { en: 'Chosen companion', it: 'Compagna scelta' },
    summary: {
      en: 'Enel offers Nami a place aboard his ark after defeating the other survivors.',
      it: 'Ener offre a Nami un posto sulla sua arca dopo aver sconfitto gli altri sopravvissuti.',
    },
  },
  enelLuffy: {
    character: 'monkey-d-luffy',
    type: {
      en: 'Opponent immune to lightning',
      it: 'Avversario immune ai fulmini',
    },
    summary: {
      en: 'Enel discovers that his lightning cannot harm Luffy’s rubber body.',
      it: 'Ener scopre che i suoi fulmini non possono ferire il corpo di gomma di Rufy.',
    },
  },
  enelNamiEscapes: {
    character: 'nami',
    type: { en: 'Companion who rejects him', it: 'Compagna che lo respinge' },
    summary: {
      en: 'Nami rejects Enel’s offer and escapes from the ark with her crewmates.',
      it: 'Nami rifiuta l’offerta di Ener e fugge dall’arca con i compagni.',
    },
  },
  enelLuffyDefeat: {
    character: 'monkey-d-luffy',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Luffy defeats Enel by punching him into the golden bell, ending his rule over Skypiea.',
      it: 'Rufy sconfigge Ener scagliandolo contro la campana d’oro e pone fine al suo dominio su Skypiea.',
    },
  },
  satoriEnel: {
    character: 'enel',
    type: { en: 'Ruler he serves', it: 'Governante che serve' },
    summary: {
      en: 'Satori serves Enel and fights the intruders on Upper Yard.',
      it: 'Satori serve Ener e combatte gli intrusi a Upper Yard.',
    },
  },
  shuraEnel: {
    character: 'enel',
    type: { en: 'Ruler he serves', it: 'Governante che serve' },
    summary: {
      en: 'Shura serves Enel and fights the intruders on Upper Yard.',
      it: 'Shura serve Ener e combatte gli intrusi a Upper Yard.',
    },
  },
  gedatsuEnel: {
    character: 'enel',
    type: { en: 'Ruler he serves', it: 'Governante che serve' },
    summary: {
      en: 'Gedatsu serves Enel and fights the intruders on Upper Yard.',
      it: 'Gedatsu serve Ener e combatte gli intrusi a Upper Yard.',
    },
  },
  ohmEnel: {
    character: 'enel',
    type: { en: 'Ruler he serves', it: 'Governante che serve' },
    summary: {
      en: 'Ohm serves Enel and fights the intruders on Upper Yard.',
      it: 'Ohm serve Ener e combatte gli intrusi a Upper Yard.',
    },
  },
  yamaEnel: {
    character: 'enel',
    type: { en: 'Ruler he serves', it: 'Governante che serve' },
    summary: {
      en: 'Yama serves Enel and fights the intruders on Upper Yard.',
      it: 'Yama serve Ener e combatte gli intrusi a Upper Yard.',
    },
  },
  satoriLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Luffy restrains Satori so Sanji can land the blow that defeats him.',
      it: 'Rufy immobilizza Satori e permette a Sanji di colpirlo e sconfiggerlo.',
    },
  },
  satoriSanji: {
    character: 'sanji',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Sanji defeats Satori after Luffy prevents the priest from dodging.',
      it: 'Sanji sconfigge Satori dopo che Rufy impedisce al sacerdote di schivare.',
    },
  },
  shuraFuza: {
    character: 'fuza',
    type: { en: 'Mount', it: 'Cavalcatura' },
    summary: {
      en: 'Shura rides Fuza into battle and uses the bird’s flight to fight above his string clouds.',
      it: 'Shura monta Fuza in battaglia e sfrutta il suo volo per combattere sopra le nuvole di filo.',
    },
  },
  shuraGan: {
    character: 'gan-fall',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Shura traps Gan Fall in string clouds and defeats him with his heated lance.',
      it: 'Shura intrappola Gan Foll nelle nuvole di filo e lo sconfigge con la lancia rovente.',
    },
  },
  shuraWyper: {
    character: 'wyper',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Wyper takes Shura’s lance strike to get close enough to defeat him with a Reject Dial.',
      it: 'Wiper si lascia colpire dalla lancia di Shura per avvicinarsi e sconfiggerlo con un Reject Dial.',
    },
  },
  gedatsuChopper: {
    character: 'tony-tony-chopper',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Chopper removes one of Gedatsu’s flying shoes and defeats him in the swamp ordeal.',
      it: 'Chopper sfila una delle scarpe volanti di Gedatsu e lo sconfigge nella prova della palude.',
    },
  },
  ohmHoly: {
    character: 'holy',
    type: { en: 'Trained companion', it: 'Compagno addestrato' },
    summary: {
      en: 'Ohm rides Holy and commands the dog during combat.',
      it: 'Ohm monta Holy e impartisce ordini al cane durante il combattimento.',
    },
  },
  ohmZoro: {
    character: 'roronoa-zoro',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Ohm traps Zoro in his ordeal of iron and attacks him with an Iron Cloud sword.',
      it: 'Ohm intrappola Zoro nella prova del ferro e lo attacca con una spada di nuvola di ferro.',
    },
  },
  ohmZoroDefeat: {
    character: 'roronoa-zoro',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Zoro cuts through Ohm’s Iron Cloud defense and defeats him with a ranged sword attack.',
      it: 'Zoro supera la difesa di nuvola di ferro di Ohm e lo sconfigge con un colpo di spada a distanza.',
    },
  },
  fuzaShura: {
    character: 'shura',
    type: { en: 'Rider', it: 'Cavaliere' },
    summary: {
      en: 'Fuza carries Shura through his ordeal and flies away after Wyper defeats him.',
      it: 'Fuza trasporta Shura durante la sua prova e vola via dopo che Wiper lo sconfigge.',
    },
  },
  yamaRobin: {
    character: 'nico-robin',
    type: { en: 'Opponent', it: 'Avversaria' },
    summary: {
      en: 'Yama attacks Robin among Shandora’s ruins, destroying the monuments she is studying.',
      it: 'Yama attacca Robin fra le rovine di Shandora e distrugge i monumenti che lei sta studiando.',
    },
  },
  yamaRobinDefeat: {
    character: 'nico-robin',
    type: { en: 'Opponent who defeats him', it: 'Avversaria che lo sconfigge' },
    summary: {
      en: 'Robin leads Yama away from the ruins and defeats him after he damages the ancient city.',
      it: 'Robin allontana Yama dalle rovine e lo sconfigge dopo che lui ha danneggiato la città antica.',
    },
  },
  holyOhm: {
    character: 'ohm',
    type: { en: 'Master', it: 'Padrone' },
    summary: {
      en: 'Holy stays at Ohm’s side and obeys his orders in battle.',
      it: 'Holy resta al fianco di Ohm e obbedisce ai suoi ordini in battaglia.',
    },
  },
  holyZoro: {
    character: 'roronoa-zoro',
    type: {
      en: 'Opponent who commands him',
      it: 'Avversario che gli dà ordini',
    },
    summary: {
      en: 'After Ohm falls, Holy obeys Zoro’s command to knock himself out.',
      it: 'Dopo la sconfitta di Ohm, Holy obbedisce all’ordine di Zoro di colpirsi da solo fino a perdere i sensi.',
    },
  },
} satisfies Record<string, Relationship>

/** Dates may wait for the archive's named-person gate, especially chapter 280. */
export const skyRelationships = {
  'gan-fall': [
    { episode: 153, chapter: 241, value: [retained.ganPierre] },
    {
      episode: 158,
      chapter: 244,
      value: [retained.ganPierre, retained.ganConis],
    },
    {
      episode: 162,
      chapter: 248,
      value: [retained.ganPierre, retained.ganConis, retained.ganChopper],
    },
    {
      episode: 168,
      chapter: 256,
      value: [
        retained.ganPierre,
        retained.ganEnel,
        retained.ganConis,
        retained.ganChopper,
      ],
    },
    {
      episode: 194,
      chapter: 301,
      value: [
        retained.ganPierre,
        retained.ganEnel,
        retained.ganRoger,
        retained.ganConis,
        retained.ganChopper,
      ],
    },
    {
      episode: 195,
      chapter: 302,
      value: [
        retained.ganPierre,
        retained.ganChief,
        retained.ganRoger,
        retained.ganEnel,
        retained.ganConis,
      ],
    },
  ],
  'pierre': [
    { episode: 153, chapter: 241, value: [retained.pierreGan] },
    {
      episode: 185,
      chapter: 283,
      value: [retained.pierreGan, retained.pierreAisa],
    },
  ],
  'wyper': [
    { episode: 163, chapter: 249, value: [retained.wyperGan] },
    {
      episode: 164,
      chapter: 251,
      value: [retained.wyperGan, retained.wyperAisa],
    },
    {
      episode: 168,
      chapter: 256,
      value: [retained.wyperEnel, retained.wyperGan, retained.wyperAisa],
    },
    {
      episode: 170,
      chapter: 258,
      value: [
        retained.wyperEnel,
        retained.wyperGan,
        retained.wyperAisa,
        retained.wyperLuffyEnemy,
      ],
    },
    {
      episode: 189,
      chapter: 293,
      value: [
        retained.wyperKalgara,
        retained.wyperEnel,
        retained.wyperGan,
        retained.wyperAisa,
        retained.wyperLuffyEnemy,
      ],
    },
    {
      episode: 191,
      chapter: 296,
      value: [
        retained.wyperKalgara,
        retained.wyperLuffyAlly,
        retained.wyperEnel,
        retained.wyperGan,
        retained.wyperAisa,
      ],
    },
    {
      episode: 193,
      chapter: 300,
      value: [
        retained.wyperKalgara,
        retained.wyperLuffyAlly,
        retained.wyperGanPeace,
        retained.wyperAisa,
        retained.wyperEnel,
      ],
    },
    // The later anime appearance does not establish these cover-only guard roles.
    {
      episode: 564,
      chapter: 648,
      source: 'chapter',
      value: [
        retained.wyperKalgara,
        retained.wyperLuffyAlly,
        retained.wyperGanGuard,
        retained.wyperAisa,
        retained.wyperEnel,
      ],
    },
  ],
  'kamakiri': [
    {
      episode: 163,
      chapter: 280,
      source: 'episode',
      value: [retained.kamakiriWyper],
    },
    {
      episode: 166,
      chapter: 281,
      source: 'episode',
      value: [retained.kamakiriWyper, retained.kamakiriLaki],
    },
    {
      episode: 173,
      chapter: 281,
      source: 'episode',
      value: [
        retained.kamakiriWyper,
        retained.kamakiriLaki,
        retained.kamakiriEnel,
      ],
    },
    {
      episode: 174,
      chapter: 280,
      source: 'chapter',
      value: [
        retained.kamakiriWyper,
        retained.kamakiriLaki,
        retained.kamakiriEnel,
      ],
    },
    // The later anime appearance does not establish these cover-only guard roles.
    {
      episode: 564,
      chapter: 648,
      source: 'chapter',
      value: [
        retained.kamakiriWyperGuard,
        retained.kamakiriLaki,
        retained.kamakiriEnel,
      ],
    },
  ],
  'braham': [
    {
      episode: 164,
      chapter: 280,
      source: 'episode',
      value: [retained.brahamWyper],
    },
    {
      episode: 170,
      chapter: 281,
      source: 'episode',
      value: [retained.brahamWyper, retained.brahamZoro],
    },
    {
      episode: 170,
      chapter: 280,
      source: 'chapter',
      value: [retained.brahamWyper, retained.brahamZoro],
    },
    // The later anime appearance does not establish these cover-only guard roles.
    {
      episode: 564,
      chapter: 648,
      source: 'chapter',
      value: [retained.brahamWyperGuard, retained.brahamZoro],
    },
  ],
  'genbo': [
    {
      episode: 164,
      chapter: 280,
      source: 'episode',
      value: [retained.genboWyper],
    },
    {
      episode: 172,
      chapter: 281,
      source: 'episode',
      value: [retained.genboWyper, retained.genboYama],
    },
    {
      episode: 172,
      chapter: 280,
      source: 'chapter',
      value: [retained.genboWyper, retained.genboYama],
    },
    // The later anime appearance does not establish these cover-only guard roles.
    {
      episode: 564,
      chapter: 648,
      source: 'chapter',
      value: [retained.genboWyperGuard, retained.genboYama],
    },
  ],
  'laki': [
    {
      episode: 165,
      chapter: 280,
      source: 'episode',
      value: [retained.lakiAisa, retained.lakiWyper],
    },
    {
      episode: 166,
      chapter: 281,
      source: 'episode',
      value: [retained.lakiAisa, retained.lakiKamakiri, retained.lakiWyper],
    },
    {
      episode: 177,
      chapter: 281,
      source: 'episode',
      value: [
        retained.lakiAisa,
        retained.lakiKamakiri,
        retained.lakiWyper,
        retained.lakiEnel,
      ],
    },
    {
      episode: 178,
      chapter: 280,
      source: 'chapter',
      value: [
        retained.lakiAisa,
        retained.lakiKamakiri,
        retained.lakiWyper,
        retained.lakiEnel,
      ],
    },
    // This friendship appears in a manga cover story.
    {
      episode: 306,
      chapter: 424,
      source: 'chapter',
      value: [
        retained.lakiAisa,
        retained.lakiConisFriend,
        retained.lakiKamakiri,
        retained.lakiWyper,
        retained.lakiEnel,
      ],
    },
    // The cafe partnership is cover-only; the anime visit reveals no cafe.
    {
      episode: 563,
      chapter: 647,
      source: 'chapter',
      value: [
        retained.lakiAisa,
        retained.lakiConisCafe,
        retained.lakiKamakiri,
        retained.lakiWyper,
        retained.lakiEnel,
      ],
    },
  ],
  'aisa': [
    { episode: 164, chapter: 251, value: [retained.aisaWyper] },
    {
      episode: 165,
      chapter: 280,
      source: 'episode',
      value: [retained.aisaLaki, retained.aisaWyper],
    },
    {
      episode: 173,
      chapter: 265,
      source: 'episode',
      value: [retained.aisaLaki, retained.aisaConis, retained.aisaWyper],
    },
    {
      episode: 173,
      chapter: 265,
      source: 'chapter',
      value: [retained.aisaConis, retained.aisaWyper],
    },
    {
      episode: 175,
      chapter: 267,
      source: 'episode',
      value: [
        retained.aisaLaki,
        retained.aisaNami,
        retained.aisaConis,
        retained.aisaWyper,
      ],
    },
    {
      episode: 175,
      chapter: 267,
      source: 'chapter',
      value: [retained.aisaNami, retained.aisaConis, retained.aisaWyper],
    },
    {
      episode: 176,
      chapter: 280,
      source: 'chapter',
      value: [
        retained.aisaNami,
        retained.aisaConis,
        retained.aisaWyper,
        retained.aisaLaki,
      ],
    },
    {
      episode: 185,
      chapter: 283,
      value: [
        retained.aisaPierre,
        retained.aisaNami,
        retained.aisaLaki,
        retained.aisaConis,
        retained.aisaWyper,
      ],
    },
    {
      episode: 195,
      chapter: 302,
      value: [
        retained.aisaLuffy,
        retained.aisaLaki,
        retained.aisaPierre,
        retained.aisaNami,
        retained.aisaConis,
      ],
    },
  ],
  'su': [
    { episode: 155, chapter: 242, value: [retained.suConis] },
    {
      episode: 176,
      chapter: 269,
      value: [retained.suConis, retained.suPagaya],
    },
  ],
  'conis': [
    {
      episode: 155,
      chapter: 242,
      value: [retained.conisPagaya, retained.conisSu, retained.conisLuffy],
    },
    {
      episode: 158,
      chapter: 244,
      value: [
        retained.conisPagaya,
        retained.conisSu,
        retained.conisGan,
        retained.conisLuffy,
      ],
    },
    {
      episode: 178,
      chapter: 272,
      value: [
        retained.conisPagayaLost,
        retained.conisSu,
        retained.conisGan,
        retained.conisLuffy,
      ],
    },
    {
      episode: 182,
      chapter: 279,
      value: [
        retained.conisPagayaLost,
        retained.conisSu,
        retained.conisGan,
        retained.conisLuffy,
        retained.conisMcKinley,
      ],
    },
    {
      episode: 193,
      chapter: 300,
      value: [
        retained.conisPagayaAlive,
        retained.conisSu,
        retained.conisGan,
        retained.conisLuffy,
        retained.conisMcKinley,
      ],
    },
    // The cafe partnership is cover-only; the anime visit reveals no cafe.
    {
      episode: 563,
      chapter: 647,
      source: 'chapter',
      value: [
        retained.conisPagayaAlive,
        retained.conisSu,
        retained.conisLaki,
        retained.conisLuffy,
        retained.conisMcKinley,
      ],
    },
  ],
  'pagaya': [
    { episode: 155, chapter: 242, value: [retained.pagayaConis] },
    {
      episode: 174,
      chapter: 265,
      value: [retained.pagayaConis, retained.pagayaNami],
    },
    {
      episode: 178,
      chapter: 272,
      value: [retained.pagayaConisSaved, retained.pagayaNami],
    },
  ],
  'mckinley': [
    { episode: 156, chapter: 242, value: [retained.mckinleyNami] },
    {
      episode: 182,
      chapter: 279,
      value: [
        retained.mckinleyConis,
        retained.mckinleyGan,
        retained.mckinleyNami,
      ],
    },
  ],
  // Spacey is not archived; Enel's moon followers do not become faction cards.
  'enel': [
    { episode: 167, chapter: 256, value: [retained.enelSatori] },
    {
      episode: 168,
      chapter: 257,
      value: [retained.enelGan, retained.enelSatori],
    },
    {
      episode: 181,
      chapter: 277,
      value: [
        retained.enelGan,
        retained.enelWyper,
        retained.enelNami,
        retained.enelSatori,
      ],
    },
    {
      episode: 182,
      chapter: 279,
      value: [
        retained.enelLuffy,
        retained.enelNami,
        retained.enelWyper,
        retained.enelGan,
        retained.enelSatori,
      ],
    },
    {
      episode: 185,
      chapter: 284,
      value: [
        retained.enelLuffy,
        retained.enelNamiEscapes,
        retained.enelWyper,
        retained.enelGan,
        retained.enelSatori,
      ],
    },
    {
      episode: 193,
      chapter: 299,
      value: [
        retained.enelLuffyDefeat,
        retained.enelNamiEscapes,
        retained.enelWyper,
        retained.enelGan,
        retained.enelSatori,
      ],
    },
  ],
  'satori': [
    {
      episode: 167,
      chapter: 256,
      value: [retained.satoriEnel, retained.satoriSanji, retained.satoriLuffy],
    },
  ],
  'shura': [
    {
      episode: 167,
      chapter: 260,
      value: [retained.shuraEnel, retained.shuraGan],
    },
    {
      episode: 169,
      chapter: 261,
      value: [
        retained.shuraFuza,
        retained.shuraWyper,
        retained.shuraEnel,
        retained.shuraGan,
      ],
    },
  ],
  // Goro is not an archived person, so the later cover-story bond is omitted.
  'gedatsu': [
    { episode: 167, chapter: 256, value: [retained.gedatsuEnel] },
    {
      episode: 172,
      chapter: 263,
      value: [retained.gedatsuChopper, retained.gedatsuEnel],
    },
  ],
  'ohm': [
    { episode: 166, chapter: 253, value: [retained.ohmHoly] },
    { episode: 167, chapter: 256, value: [retained.ohmHoly, retained.ohmEnel] },
    {
      episode: 176,
      chapter: 268,
      value: [retained.ohmHoly, retained.ohmZoro, retained.ohmEnel],
    },
    {
      episode: 178,
      chapter: 272,
      value: [retained.ohmHoly, retained.ohmZoroDefeat, retained.ohmEnel],
    },
  ],
  'fuza': [{ episode: 169, chapter: 260, value: [retained.fuzaShura] }],
  'yama': [
    {
      episode: 172,
      chapter: 261,
      value: [retained.yamaEnel, retained.yamaRobin],
    },
    {
      episode: 174,
      chapter: 265,
      value: [retained.yamaRobinDefeat, retained.yamaEnel],
    },
  ],
  'holy': [
    { episode: 166, chapter: 253, value: [retained.holyOhm] },
    {
      episode: 179,
      chapter: 272,
      value: [retained.holyOhm, retained.holyZoro],
    },
  ],
} satisfies Record<string, Timeline<Relationship[]>>
