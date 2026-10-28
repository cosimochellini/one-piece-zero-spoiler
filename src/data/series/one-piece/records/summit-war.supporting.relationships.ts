import type { Relationship, Timeline } from '~/data/types'

/** Verified character and gate revisions are pinned in the provenance inventory. */
const links = {
  camiePappag: {
    character: 'pappag',
    type: { en: 'Companion and teacher', it: 'Compagno e maestro' },
    summary: {
      en: 'Pappag travels with Camie and teaches her about fashion design.',
      it: 'Pappagu viaggia con Kayme e le insegna a disegnare abiti.',
    },
  },
  camieHatchan: {
    character: 'hatchan',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'Camie works with Hatchan at his takoyaki shop.',
      it: 'Kayme lavora con Octy al suo banco di takoyaki.',
    },
  },
  camieMonkeyDLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Rescuer', it: 'Soccorritore' },
    summary: {
      en: 'Luffy saves Camie from a sea beast and helps her rescue Hatchan.',
      it: 'Rufy salva Kayme da un mostro marino e la aiuta a liberare Octy.',
    },
  },
  camieSilversRayleigh: {
    character: 'silvers-rayleigh',
    type: { en: 'Rescuer', it: 'Soccorritore' },
    summary: {
      en: 'Rayleigh removes Camie’s explosive collar so she can escape the auction house.',
      it: 'Rayleigh toglie il collare esplosivo a Kayme e le permette di fuggire dalla casa d’aste.',
    },
  },
  pappagCamie: {
    character: 'camie',
    type: { en: 'Companion and pupil', it: 'Compagna e allieva' },
    summary: {
      en: 'Pappag travels with Camie, who wants to learn fashion design from him.',
      it: 'Pappagu viaggia con Kayme, che vuole imparare da lui a disegnare abiti.',
    },
  },
  pappagHatchan: {
    character: 'hatchan',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'Pappag accompanies Camie as she asks for help rescuing their friend Hatchan.',
      it: 'Pappagu accompagna Kayme mentre chiede aiuto per liberare il loro amico Octy.',
    },
  },
  duvalSanji: {
    character: 'sanji',
    type: { en: 'Benefactor', it: 'Benefattore' },
    summary: {
      en: 'Sanji changes Duval’s face with his kicks, and Duval becomes grateful to him.',
      it: 'Sanji cambia il volto di Duval a calci e Duval gli diventa riconoscente.',
    },
  },
  duvalSanji2: {
    character: 'sanji',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'Duval guards the Thousand Sunny during the crew’s absence; Sanji thanks him on his return.',
      it: 'Duval protegge la Thousand Sunny durante l’assenza della ciurma; al ritorno Sanji lo ringrazia.',
    },
  },
  shakkyHatchan: {
    character: 'hatchan',
    type: { en: 'Old friend', it: 'Vecchio amico' },
    summary: {
      en: 'Shakky welcomes Hatchan and his companions at her bar.',
      it: 'Shakky accoglie Octy e i suoi compagni nel suo bar.',
    },
  },
  shakkyMonkeyDLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Pirate she helps', it: 'Pirata che aiuta' },
    summary: {
      en: 'Shakky tells Luffy about the other powerful rookies on Sabaody.',
      it: 'Shakky informa Rufy degli altri pirati emergenti arrivati a Sabaody.',
    },
  },
  shakkySilversRayleigh: {
    character: 'silvers-rayleigh',
    type: { en: 'Companion', it: 'Compagno' },
    summary: {
      en: 'Shakky and Rayleigh receive the Straw Hats at her bar after the auction incident.',
      it: 'Shakky e Rayleigh ricevono i Cappello di Paglia nel suo bar dopo l’incidente all’asta.',
    },
  },
  shakkyBoaHancock: {
    character: 'boa-hancock',
    type: { en: 'Woman she sheltered', it: 'Donna che ha accolto' },
    summary: {
      en: 'Shakky helped shelter Hancock and her sisters after their escape from slavery.',
      it: 'Shakky ha aiutato ad accogliere Hancock e le sue sorelle dopo la fuga dalla schiavitù.',
    },
  },
  shakkyBoaHancock2: {
    character: 'boa-hancock',
    type: { en: 'Fellow former empress', it: 'Ex imperatrice come lei' },
    summary: {
      en: 'Shakky, a former empress of Amazon Lily, advises Hancock after the invasion of the island.',
      it: 'Shakky, ex imperatrice di Amazon Lily, consiglia Hancock dopo l’invasione dell’isola.',
    },
  },
  shakkySilversRayleigh2: {
    character: 'silvers-rayleigh',
    type: { en: 'Man she loves', it: 'Uomo che ama' },
    summary: {
      en: 'Shakky writes to Rayleigh asking him to come for her and is distressed when he stays on his ship.',
      it: 'Shakky scrive a Rayleigh chiedendogli di venire a prenderla e soffre quando lui resta sulla sua nave.',
    },
  },
  shakkySilversRayleigh3: {
    character: 'silvers-rayleigh',
    type: { en: 'Rescuer', it: 'Soccorritore' },
    summary: {
      en: 'Rayleigh rescues Shakky from Sommers during the God Valley incident.',
      it: 'Rayleigh salva Shakky da Sommers durante l’incidente di God Valley.',
    },
  },
  killerEustassKid: {
    character: 'eustass-kid',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Killer serves under Kid as a fighter in his crew.',
      it: 'Killer combatte nella ciurma guidata da Kidd.',
    },
  },
  killerUrouge: {
    character: 'urouge',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Killer clashes with Urouge on Sabaody before Drake stops the fight.',
      it: 'Killer si scontra con Urouge a Sabaody prima che Drake interrompa il combattimento.',
    },
  },
  killerRoronoaZoro: {
    character: 'roronoa-zoro',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Under the name Kamazo, Killer fights Zoro while pursuing Toko.',
      it: 'Con il nome di Kamazo, Killer affronta Zoro mentre dà la caccia a Toko.',
    },
  },
  killerRoronoaZoro2: {
    character: 'roronoa-zoro',
    type: { en: 'Battle ally', it: 'Alleato in battaglia' },
    summary: {
      en: 'Killer fights alongside Zoro against Kaido and Big Mom on the rooftop.',
      it: 'Killer combatte al fianco di Zoro contro Kaido e Big Mom sul tetto.',
    },
  },
  killerBasilHawkins: {
    character: 'basil-hawkins',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Hawkins confronts Killer during the raid on Onigashima.',
      it: 'Hawkins affronta Killer durante l’assalto a Onigashima.',
    },
  },
  killerBasilHawkins2: {
    character: 'basil-hawkins',
    type: { en: 'Defeated opponent', it: 'Avversario sconfitto' },
    summary: {
      en: 'Killer defeats Hawkins after learning that damage to Hawkins can be passed to Kid.',
      it: 'Killer sconfigge Hawkins dopo aver scoperto che i danni inflitti a Hawkins possono essere trasferiti a Kidd.',
    },
  },
  killerRoronoaZoro3: {
    character: 'roronoa-zoro',
    type: { en: 'Battle ally', it: 'Alleato in battaglia' },
    summary: {
      en: 'Killer has fought alongside Zoro against Kaido and Big Mom.',
      it: 'Killer ha combattuto al fianco di Zoro contro Kaido e Big Mom.',
    },
  },
  killerEustassKid2: {
    character: 'eustass-kid',
    type: { en: 'Captain he protects', it: 'Capitano che protegge' },
    summary: {
      en: 'Killer tries to protect Kid from Shanks’s attack, but both are defeated.',
      it: 'Killer cerca di proteggere Kidd dall’attacco di Shanks, ma entrambi vengono sconfitti.',
    },
  },
  killerBasilHawkins3: {
    character: 'basil-hawkins',
    type: { en: 'Defeated opponent', it: 'Avversario sconfitto' },
    summary: {
      en: 'Killer defeated Hawkins without sacrificing Kid.',
      it: 'Killer ha sconfitto Hawkins senza sacrificare Kidd.',
    },
  },
  killerShanks: {
    character: 'shanks',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Shanks defeats Killer and Kid with the same attack.',
      it: 'Shanks sconfigge Killer e Kidd con lo stesso attacco.',
    },
  },
  bepoTrafalgarLaw: {
    character: 'trafalgar-law',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Bepo serves in Law’s crew.',
      it: 'Bepo fa parte della ciurma di Law.',
    },
  },
  bepoTrafalgarLaw2: {
    character: 'trafalgar-law',
    type: { en: 'Captain who frees him', it: 'Capitano che lo fa liberare' },
    summary: {
      en: 'Law gives himself up to Hawkins in exchange for Bepo and his captured crewmates.',
      it: 'Law si consegna a Hawkins in cambio della libertà di Bepo e dei compagni catturati.',
    },
  },
  bepoBasilHawkins: {
    character: 'basil-hawkins',
    type: { en: 'Captor', it: 'Carceriere' },
    summary: {
      en: 'Hawkins uses Bepo and his crewmates to force Law to surrender.',
      it: 'Hawkins usa Bepo e i suoi compagni per costringere Law ad arrendersi.',
    },
  },
  bepoTrafalgarLaw3: {
    character: 'trafalgar-law',
    type: { en: 'Captain he rescues', it: 'Capitano che salva' },
    summary: {
      en: 'Bepo carries the defeated Law into the sea and escapes from Blackbeard with him.',
      it: 'Bepo porta in mare Law sconfitto e fugge con lui da Barbanera.',
    },
  },
  bepoTonyTonyChopper: {
    character: 'tony-tony-chopper',
    type: { en: 'Doctor who helps him', it: 'Medico che lo aiuta' },
    summary: {
      en: 'Chopper gives Bepo medicine that lets him transform without a full moon.',
      it: 'Chopper dà a Bepo una medicina che gli permette di trasformarsi senza la luna piena.',
    },
  },
  bepoMarshallDTeach: {
    character: 'marshall-d-teach',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'Bepo attacks Blackbeard to rescue Law after the defeat of the Heart Pirates.',
      it: 'Bepo attacca Barbanera per salvare Law dopo la sconfitta dei Pirati Heart.',
    },
  },
  saintCharlossRosward: {
    character: 'rosward',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Charlos attends the auction with his father Rosward.',
      it: 'Charlos partecipa all’asta con suo padre Roswald.',
    },
  },
  saintCharlossShalria: {
    character: 'shalria',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'Shalria attends the auction with her brother Charlos.',
      it: 'Shalulia partecipa all’asta con suo fratello Charlos.',
    },
  },
  saintCharlossCamie: {
    character: 'camie',
    type: { en: 'Woman he tries to buy', it: 'Donna che cerca di comprare' },
    summary: {
      en: 'Charlos bids five hundred million berries to buy Camie at the slave auction.',
      it: 'Charlos offre cinquecento milioni di berry per comprare Kayme all’asta degli schiavi.',
    },
  },
  saintCharlossHatchan: {
    character: 'hatchan',
    type: { en: 'Man he shoots', it: 'Uomo a cui spara' },
    summary: {
      en: 'Charlos shoots Hatchan at the auction house.',
      it: 'Charlos spara a Octy nella casa d’aste.',
    },
  },
  saintCharlossMonkeyDLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Attacker', it: 'Aggressore' },
    summary: {
      en: 'Luffy punches Charlos after he shoots Hatchan.',
      it: 'Rufy colpisce Charlos con un pugno dopo che ha sparato a Octy.',
    },
  },
  saintCharlossShirahoshi: {
    character: 'shirahoshi',
    type: {
      en: 'Woman he tries to enslave',
      it: 'Donna che cerca di ridurre in schiavitù',
    },
    summary: {
      en: 'Charlos orders Shirahoshi to be captured at Mary Geoise.',
      it: 'Charlos ordina di catturare Shirahoshi a Mary Geoise.',
    },
  },
  saintCharlossDonquixoteMjosgard: {
    character: 'donquixote-mjosgard',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Mjosgard strikes Charlos to stop the attack on Shirahoshi.',
      it: 'Miosgard colpisce Charlos per fermare l’aggressione a Shirahoshi.',
    },
  },
  saintCharlossShirahoshi2: {
    character: 'shirahoshi',
    type: {
      en: 'Woman he tries to enslave',
      it: 'Donna che cerca di ridurre in schiavitù',
    },
    summary: {
      en: 'Charlos tries again to capture Shirahoshi, this time using Kuma.',
      it: 'Charlos cerca di nuovo di catturare Shirahoshi, questa volta usando Kuma.',
    },
  },
  saintCharlossDonquixoteMjosgard2: {
    character: 'donquixote-mjosgard',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Mjosgard allows Shirahoshi’s allies to fight back against Charlos.',
      it: 'Miosgard permette agli alleati di Shirahoshi di reagire contro Charlos.',
    },
  },
  saintCharlossSai: {
    character: 'sai',
    type: { en: 'Attacker', it: 'Aggressore' },
    summary: {
      en: 'Sai strikes Charlos alongside Leo to stop him enslaving Shirahoshi.',
      it: 'Sai colpisce Charlos insieme a Leo per impedirgli di ridurre Shirahoshi in schiavitù.',
    },
  },
  saintCharlossLeo: {
    character: 'leo',
    type: { en: 'Attacker', it: 'Aggressore' },
    summary: {
      en: 'Leo joins Sai in striking Charlos to protect Shirahoshi.',
      it: 'Leo colpisce Charlos insieme a Sai per proteggere Shirahoshi.',
    },
  },
  boaSandersoniaBoaHancock: {
    character: 'boa-hancock',
    type: { en: 'Sister and captain', it: 'Sorella e capitana' },
    summary: {
      en: 'Hancock leads the Kuja Pirates with her two sisters at her side.',
      it: 'Hancock guida le Pirate Kuja con le sue due sorelle al fianco.',
    },
  },
  boaSandersoniaBoaMarigold: {
    character: 'boa-marigold',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'The two sisters fight Luffy together in the Kuja arena.',
      it: 'Le due sorelle affrontano Rufy insieme nell’arena delle Kuja.',
    },
  },
  boaSandersoniaMonkeyDLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Luffy fights the two sisters in the arena.',
      it: 'Rufy affronta le due sorelle nell’arena.',
    },
  },
  boaSandersoniaMonkeyDLuffy2: {
    character: 'monkey-d-luffy',
    type: { en: 'Man she trusts', it: 'Uomo di cui si fida' },
    summary: {
      en: 'Luffy protects the sisters’ secret instead of exposing the mark on Sandersonia’s back.',
      it: 'Rufy protegge il segreto delle sorelle invece di mostrare il marchio sulla schiena di Sandersonia.',
    },
  },
  boaSandersoniaNyon: {
    character: 'nyon',
    type: { en: 'Caretaker', it: 'Donna che si è presa cura di lei' },
    summary: {
      en: 'Nyon cared for the sisters after their escape from slavery.',
      it: 'Nyon si è presa cura delle sorelle dopo la loro fuga dalla schiavitù.',
    },
  },
  boaSandersoniaSilversRayleigh: {
    character: 'silvers-rayleigh',
    type: { en: 'Protector', it: 'Protettore' },
    summary: {
      en: 'Rayleigh helped shelter the sisters after their escape from Mary Geoise.',
      it: 'Rayleigh ha aiutato a proteggere le sorelle dopo la fuga da Mary Geoise.',
    },
  },
  boaMarigoldBoaHancock: {
    character: 'boa-hancock',
    type: { en: 'Sister and captain', it: 'Sorella e capitana' },
    summary: {
      en: 'Hancock leads the Kuja Pirates with her two sisters at her side.',
      it: 'Hancock guida le Pirate Kuja con le sue due sorelle al fianco.',
    },
  },
  boaMarigoldBoaSandersonia: {
    character: 'boa-sandersonia',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'The two sisters fight Luffy together in the Kuja arena.',
      it: 'Le due sorelle affrontano Rufy insieme nell’arena delle Kuja.',
    },
  },
  boaMarigoldMonkeyDLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Luffy fights the two sisters in the arena.',
      it: 'Rufy affronta le due sorelle nell’arena.',
    },
  },
  boaMarigoldMonkeyDLuffy2: {
    character: 'monkey-d-luffy',
    type: { en: 'Man she trusts', it: 'Uomo di cui si fida' },
    summary: {
      en: 'Luffy protects the sisters’ secret instead of exposing the mark on Sandersonia’s back.',
      it: 'Rufy protegge il segreto delle sorelle invece di mostrare il marchio sulla schiena di Sandersonia.',
    },
  },
  boaMarigoldNyon: {
    character: 'nyon',
    type: { en: 'Caretaker', it: 'Donna che si è presa cura di lei' },
    summary: {
      en: 'Nyon cared for the sisters after their escape from slavery.',
      it: 'Nyon si è presa cura delle sorelle dopo la loro fuga dalla schiavitù.',
    },
  },
  boaMarigoldSilversRayleigh: {
    character: 'silvers-rayleigh',
    type: { en: 'Protector', it: 'Protettore' },
    summary: {
      en: 'Rayleigh helped shelter the sisters after their escape from Mary Geoise.',
      it: 'Rayleigh ha aiutato a proteggere le sorelle dopo la fuga da Mary Geoise.',
    },
  },
  margueriteMonkeyDLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Stranger she helps', it: 'Straniero che aiuta' },
    summary: {
      en: 'Marguerite helps Luffy after finding him unconscious in the forest.',
      it: 'Marguerite aiuta Rufy dopo averlo trovato privo di sensi nella foresta.',
    },
  },
  margueriteAphelandra: {
    character: 'aphelandra',
    type: { en: 'Companion', it: 'Compagna' },
    summary: {
      en: 'Marguerite and Aphelandra help the stranger they find in the forest.',
      it: 'Marguerite e Aphelandra aiutano lo straniero che trovano nella foresta.',
    },
  },
  margueriteSweetPea: {
    character: 'sweet-pea',
    type: { en: 'Companion', it: 'Compagna' },
    summary: {
      en: 'Marguerite and Sweet Pea remove the mushrooms covering the stranger’s body.',
      it: 'Marguerite e Pisello Dolce tolgono i funghi che ricoprono il corpo dello straniero.',
    },
  },
  margueriteMonkeyDLuffy2: {
    character: 'monkey-d-luffy',
    type: { en: 'Stranger she defends', it: 'Straniero che difende' },
    summary: {
      en: 'Marguerite admits bringing Luffy into the village and insists he did not mean to break its law.',
      it: 'Marguerite ammette di aver portato Rufy al villaggio e sostiene che non volesse infrangerne la legge.',
    },
  },
  margueriteBoaHancock: {
    character: 'boa-hancock',
    type: { en: 'Ruler who punishes her', it: 'Sovrana che la punisce' },
    summary: {
      en: 'Hancock turns Marguerite to stone for helping a man enter the village.',
      it: 'Hancock pietrifica Marguerite per aver aiutato un uomo a entrare nel villaggio.',
    },
  },
  margueriteMonkeyDLuffy3: {
    character: 'monkey-d-luffy',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'Marguerite thanks Luffy for protecting her while she was petrified.',
      it: 'Marguerite ringrazia Rufy per averla protetta mentre era pietrificata.',
    },
  },
  margueriteBoaHancock2: {
    character: 'boa-hancock',
    type: { en: 'Ruler', it: 'Sovrana' },
    summary: {
      en: 'Hancock restores Marguerite and her companions at Luffy’s request.',
      it: 'Hancock libera Marguerite e le sue compagne dalla pietrificazione su richiesta di Rufy.',
    },
  },
  nyonBoaHancock: {
    character: 'boa-hancock',
    type: { en: 'Successor she advises', it: 'Successora che consiglia' },
    summary: {
      en: 'Nyon advises Hancock on the responsibilities of ruling Amazon Lily.',
      it: 'Nyon consiglia Hancock sulle responsabilità di governare Amazon Lily.',
    },
  },
  nyonBoaHancock2: {
    character: 'boa-hancock',
    type: { en: 'Successor she advises', it: 'Successora che consiglia' },
    summary: {
      en: 'Nyon advises Hancock and helped her return home after her escape from slavery.',
      it: 'Nyon consiglia Hancock e l’ha aiutata a tornare a casa dopo la fuga dalla schiavitù.',
    },
  },
  nyonBoaSandersonia: {
    character: 'boa-sandersonia',
    type: { en: 'Woman she cared for', it: 'Donna di cui si è presa cura' },
    summary: {
      en: 'Nyon cared for Sandersonia after her escape from the World Nobles.',
      it: 'Nyon si è presa cura di Sandersonia dopo la fuga dai Nobili Mondiali.',
    },
  },
  nyonBoaMarigold: {
    character: 'boa-marigold',
    type: { en: 'Woman she cared for', it: 'Donna di cui si è presa cura' },
    summary: {
      en: 'Nyon cared for Marigold after her escape from the World Nobles.',
      it: 'Nyon si è presa cura di Marigold dopo la fuga dai Nobili Mondiali.',
    },
  },
  nyonShakky: {
    character: 'shakky',
    type: { en: 'Companion', it: 'Compagna' },
    summary: {
      en: 'Nyon lived with Shakky and Rayleigh while helping the three sisters.',
      it: 'Nyon viveva con Shakky e Rayleigh mentre aiutava le tre sorelle.',
    },
  },
  nyonSilversRayleigh: {
    character: 'silvers-rayleigh',
    type: { en: 'Companion', it: 'Compagno' },
    summary: {
      en: 'Rayleigh helped Nyon shelter the sisters after their escape.',
      it: 'Rayleigh ha aiutato Nyon ad accogliere le sorelle dopo la fuga.',
    },
  },
  nyonGoldRoger: {
    character: 'gold-roger',
    type: { en: 'Man she loves', it: 'Uomo che ama' },
    summary: {
      en: 'Nyon falls in love with Roger, who is interested in Shakky instead.',
      it: 'Nyon si innamora di Roger, che invece è interessato a Shakky.',
    },
  },
  nyonShakky2: {
    character: 'shakky',
    type: { en: 'Former subordinate', it: 'Ex sottoposta' },
    summary: {
      en: 'Shakky serves under Nyon in the Kuja Pirates before succeeding her as empress.',
      it: 'Shakky è agli ordini di Nyon nelle Pirate Kuja prima di succederle come imperatrice.',
    },
  },
  magellanHannyabal: {
    character: 'hannyabal',
    type: { en: 'Deputy', it: 'Vice' },
    summary: {
      en: 'Hannyabal serves under Magellan but openly wants his job.',
      it: 'Hannyabal è il vice di Magellan ma dichiara apertamente di volerne il posto.',
    },
  },
  magellanMonkeyDLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Intruder he defeats', it: 'Intruso che sconfigge' },
    summary: {
      en: 'Magellan poisons Luffy and orders him imprisoned on Level Five.',
      it: 'Magellan avvelena Rufy e ordina di rinchiuderlo al quinto livello.',
    },
  },
  magellanShiryu: {
    character: 'shiryu',
    type: { en: 'Former colleague he releases', it: 'Ex collega che libera' },
    summary: {
      en: 'Magellan releases the imprisoned Shiryu to help stop the invasion of Impel Down.',
      it: 'Magellan libera Shiryu dalla prigione perché aiuti a fermare l’invasione di Impel Down.',
    },
  },
  magellanShiryu2: {
    character: 'shiryu',
    type: { en: 'Traitor', it: 'Traditore' },
    summary: {
      en: 'Shiryu gives Blackbeard’s crew the antidote to Magellan’s poison and joins them.',
      it: 'Shiryu dà alla ciurma di Barbanera l’antidoto al veleno di Magellan e si unisce a loro.',
    },
  },
  magellanMarshallDTeach: {
    character: 'marshall-d-teach',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'Magellan poisons Blackbeard and his crew, but Shiryu saves them.',
      it: 'Magellan avvelena Barbanera e la sua ciurma, ma Shiryu li salva.',
    },
  },
  magellanHannyabal2: {
    character: 'hannyabal',
    type: { en: 'Successor', it: 'Successore' },
    summary: {
      en: 'Hannyabal replaces Magellan as chief warden; Magellan becomes his deputy.',
      it: 'Hannyabal prende il posto di Magellan come direttore; Magellan diventa il suo vice.',
    },
  },
  hannyabalMagellan: {
    character: 'magellan',
    type: { en: 'Superior', it: 'Superiore' },
    summary: {
      en: 'Hannyabal works under Magellan and repeatedly says he wants to replace him.',
      it: 'Hannyabal lavora agli ordini di Magellan e ripete di volerne prendere il posto.',
    },
  },
  hannyabalBonClay: {
    character: 'bon-clay',
    type: { en: 'Impersonator', it: 'Impostore' },
    summary: {
      en: 'Bentham overpowers Hannyabal and impersonates him to move through the prison.',
      it: 'Bentham sopraffà Hannyabal e ne assume l’aspetto per muoversi nella prigione.',
    },
  },
  hannyabalMonkeyDLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Escapee he confronts', it: 'Evaso che affronta' },
    summary: {
      en: 'Hannyabal refuses to let Luffy and the prisoners escape, despite being repeatedly knocked down.',
      it: 'Hannyabal rifiuta di lasciar fuggire Rufy e i prigionieri, anche dopo essere stato abbattuto più volte.',
    },
  },
  hannyabalMarshallDTeach: {
    character: 'marshall-d-teach',
    type: { en: 'Attacker', it: 'Aggressore' },
    summary: {
      en: 'Blackbeard knocks Hannyabal aside as the prisoners confront the prison guards.',
      it: 'Barbanera abbatte Hannyabal mentre i prigionieri affrontano le guardie.',
    },
  },
  hannyabalMagellan2: {
    character: 'magellan',
    type: { en: 'Predecessor', it: 'Predecessore' },
    summary: {
      en: 'Hannyabal has taken Magellan’s place as chief warden of Impel Down.',
      it: 'Hannyabal ha preso il posto di Magellan come direttore di Impel Down.',
    },
  },
  inazumaEmporioIvankov: {
    character: 'emporio-ivankov',
    type: { en: 'Leader', it: 'Capo' },
    summary: {
      en: 'Inazuma works alongside Ivankov in Newkama Land.',
      it: 'Inazuma collabora con Ivankov a Newkama Land.',
    },
  },
  inazumaMonkeyDLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Prisoner he helps', it: 'Prigioniero che aiuta' },
    summary: {
      en: 'Inazuma brings the poisoned Luffy to Ivankov for treatment.',
      it: 'Inazuma porta Rufy avvelenato da Ivankov perché lo curi.',
    },
  },
  inazumaBonClay: {
    character: 'bon-clay',
    type: { en: 'Prisoner he helps', it: 'Prigioniero che aiuta' },
    summary: {
      en: 'Inazuma takes Bentham to safety with Luffy.',
      it: 'Inazuma porta Bentham al sicuro insieme a Rufy.',
    },
  },
  inazumaMonkeyDLuffy2: {
    character: 'monkey-d-luffy',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'Inazuma cuts a path to the execution platform so Luffy can reach Ace.',
      it: 'Inazuma apre un passaggio verso il patibolo perché Rufy possa raggiungere Ace.',
    },
  },
  jesusBurgessMarshallDTeach: {
    character: 'marshall-d-teach',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'He serves under Blackbeard as a member of his crew.',
      it: 'Fa parte della ciurma agli ordini di Barbanera.',
    },
  },
  jesusBurgessPortgasDAce: {
    character: 'portgas-d-ace',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Burgess throws a building at Ace before Blackbeard orders him to stand aside.',
      it: 'Burgess scaglia un edificio contro Ace prima che Barbanera gli ordini di farsi da parte.',
    },
  },
  jesusBurgessShiryu: {
    character: 'shiryu',
    type: { en: 'Rescuer and crewmate', it: 'Soccorritore e compagno' },
    summary: {
      en: 'Shiryu saves Burgess and the crew from Magellan’s poison.',
      it: 'Shiryu salva Burgess e la ciurma dal veleno di Magellan.',
    },
  },
  jesusBurgessSabo: {
    character: 'sabo',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Sabo prevents Burgess from attacking Luffy, and the two fight in Dressrosa.',
      it: 'Sabo impedisce a Burgess di attaccare Rufy e i due si affrontano a Dressrosa.',
    },
  },
  jesusBurgessMonkeyDLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Target', it: 'Bersaglio' },
    summary: {
      en: 'Burgess tries to kill Luffy and steal his Devil Fruit power.',
      it: 'Burgess cerca di uccidere Rufy e rubargli il potere del frutto del diavolo.',
    },
  },
  jesusBurgessTrafalgarLaw: {
    character: 'trafalgar-law',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Burgess throws a mountain at Law’s crew, but Law cuts it apart.',
      it: 'Burgess scaglia una montagna contro la ciurma di Law, ma Law la fa a pezzi.',
    },
  },
  jesusBurgessVanAugur: {
    character: 'van-augur',
    type: { en: 'Crewmate', it: 'Compagno di ciurma' },
    summary: {
      en: 'Augur teleports Burgess into position during the attack on Law’s crew.',
      it: 'Augur trasporta Burgess sul posto durante l’attacco alla ciurma di Law.',
    },
  },
  vanAugurMarshallDTeach: {
    character: 'marshall-d-teach',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'He serves under Blackbeard as a member of his crew.',
      it: 'Fa parte della ciurma agli ordini di Barbanera.',
    },
  },
  vanAugurPortgasDAce: {
    character: 'portgas-d-ace',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Augur shoots at Ace, but his bullets cannot hurt Ace’s fire body.',
      it: 'Augur spara ad Ace, ma i suoi proiettili non possono ferirne il corpo di fuoco.',
    },
  },
  vanAugurShiryu: {
    character: 'shiryu',
    type: { en: 'Rescuer and crewmate', it: 'Soccorritore e compagno' },
    summary: {
      en: 'Shiryu gives Augur and the others the antidote to Magellan’s poison.',
      it: 'Shiryu dà ad Augur e agli altri l’antidoto al veleno di Magellan.',
    },
  },
  vanAugurTrafalgarLaw: {
    character: 'trafalgar-law',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Augur tries to shoot Law, but Jean Bart blocks his shot.',
      it: 'Augur cerca di colpire Law, ma Jean Bart blocca il proiettile.',
    },
  },
  vanAugurJesusBurgess: {
    character: 'jesus-burgess',
    type: { en: 'Crewmate', it: 'Compagno di ciurma' },
    summary: {
      en: 'Augur teleports Burgess into battle against the Heart Pirates.',
      it: 'Augur trasporta Burgess sul campo di battaglia contro i Pirati Heart.',
    },
  },
  vanAugurCatarinaDevon: {
    character: 'catarina-devon',
    type: { en: 'Mission partner', it: 'Compagna di missione' },
    summary: {
      en: 'Augur travels to Egghead with Devon and teleports her away from Saturn.',
      it: 'Augur raggiunge Egghead con Devon e la porta via da Saturn con il suo potere.',
    },
  },
  docQMarshallDTeach: {
    character: 'marshall-d-teach',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'He serves under Blackbeard as a member of his crew.',
      it: 'Fa parte della ciurma agli ordini di Barbanera.',
    },
  },
  docQShiryu: {
    character: 'shiryu',
    type: { en: 'Rescuer and crewmate', it: 'Soccorritore e compagno' },
    summary: {
      en: 'Shiryu saves Doc Q and the others from Magellan’s poison with an antidote.',
      it: 'Shiryu salva Doc Q e gli altri dal veleno di Magellan con un antidoto.',
    },
  },
  docQTrafalgarLaw: {
    character: 'trafalgar-law',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Doc Q infects Law with a disease, but Law overcomes it with Haki.',
      it: 'Doc Q infetta Law con una malattia, ma Law la supera con l’Ambizione.',
    },
  },
  laffitteMarshallDTeach: {
    character: 'marshall-d-teach',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'He serves under Blackbeard as a member of his crew.',
      it: 'Fa parte della ciurma agli ordini di Barbanera.',
    },
  },
  laffitteShiryu: {
    character: 'shiryu',
    type: { en: 'Crewmate', it: 'Compagno di ciurma' },
    summary: {
      en: 'Laffitte welcomes Shiryu after he saves the crew from Magellan’s poison.',
      it: 'Lafitte accoglie Shiryu dopo che ha salvato la ciurma dal veleno di Magellan.',
    },
  },
  laffitteJesusBurgess: {
    character: 'jesus-burgess',
    type: { en: 'Crewmate', it: 'Compagno di ciurma' },
    summary: {
      en: 'Burgess contacts Laffitte from the Revolutionary Army’s base and asks to be rescued.',
      it: 'Burgess contatta Lafitte dalla base dell’Armata Rivoluzionaria e chiede di essere soccorso.',
    },
  },
  catarinaDevonMarshallDTeach: {
    character: 'marshall-d-teach',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Devon appears at Marineford as a member of Blackbeard’s crew.',
      it: 'Devon compare a Marineford come membro della ciurma di Barbanera.',
    },
  },
  catarinaDevonBoaHancock: {
    character: 'boa-hancock',
    type: { en: 'Enemy', it: 'Nemica' },
    summary: {
      en: 'Hancock petrifies Devon during the invasion of Amazon Lily; Rayleigh’s intervention secures her release.',
      it: 'Hancock pietrifica Devon durante l’invasione di Amazon Lily; l’intervento di Rayleigh ne permette la liberazione.',
    },
  },
  catarinaDevonVanAugur: {
    character: 'van-augur',
    type: { en: 'Mission partner', it: 'Compagno di missione' },
    summary: {
      en: 'Devon goes to Egghead with Augur, who teleports her away from Saturn.',
      it: 'Devon raggiunge Egghead con Augur, che la porta via da Saturn con il suo potere.',
    },
  },
  catarinaDevonJaygarciaSaturn: {
    character: 'jaygarcia-saturn',
    type: { en: 'Man she touches', it: 'Uomo che tocca' },
    summary: {
      en: 'Devon touches Saturn’s leg and says her mission is complete.',
      it: 'Devon tocca una gamba di Saturn e dichiara conclusa la missione.',
    },
  },
  vascoShotMarshallDTeach: {
    character: 'marshall-d-teach',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Vasco Shot appears at Marineford as a member of Blackbeard’s crew.',
      it: 'Vasco Shot compare a Marineford come membro della ciurma di Barbanera.',
    },
  },
  vascoShotBoaHancock: {
    character: 'boa-hancock',
    type: { en: 'Enemy', it: 'Nemica' },
    summary: {
      en: 'Hancock petrifies Shot during the invasion of Amazon Lily before the negotiated retreat.',
      it: 'Hancock pietrifica Shot durante l’invasione di Amazon Lily, prima della ritirata negoziata.',
    },
  },
  vascoShotMonkeyDGarp: {
    character: 'monkey-d-garp',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Shot attacks Garp with fire during the fighting on Hachinosu.',
      it: 'Shot attacca Garp con il fuoco durante gli scontri a Hachinosu.',
    },
  },
  sanJuanWolfMarshallDTeach: {
    character: 'marshall-d-teach',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Wolf appears at Marineford as a member of Blackbeard’s crew.',
      it: 'Wolf compare a Marineford come membro della ciurma di Barbanera.',
    },
  },
  sanJuanWolfMonkeyDGarp: {
    character: 'monkey-d-garp',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Garp throws Wolf into the sea during the rescue on Hachinosu.',
      it: 'Garp scaraventa Wolf in mare durante il salvataggio a Hachinosu.',
    },
  },
  avaloPizarroMarshallDTeach: {
    character: 'marshall-d-teach',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Pizarro appears at Marineford as a member of Blackbeard’s crew.',
      it: 'Pizarro compare a Marineford come membro della ciurma di Barbanera.',
    },
  },
  avaloPizarroKoby: {
    character: 'koby',
    type: { en: 'Escaped prisoner', it: 'Prigioniero evaso' },
    summary: {
      en: 'Pizarro tries to crush the ship carrying Koby and the rescued prisoners, but Koby destroys his stone hand.',
      it: 'Pizarro cerca di schiacciare la nave con Koby e i prigionieri liberati, ma Koby distrugge la sua mano di pietra.',
    },
  },
  avaloPizarroMonkeyDGarp: {
    character: 'monkey-d-garp',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Garp damages Pizarro’s island-sized body while protecting the evacuation.',
      it: 'Garp danneggia il corpo di Pizarro, fuso con l’isola, per proteggere l’evacuazione.',
    },
  },
  jozuEdwardNewgate: {
    character: 'edward-newgate',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Jozu fights under Whitebeard at Marineford.',
      it: 'Jozu combatte agli ordini di Barbabianca a Marineford.',
    },
  },
  jozuDraculeMihawk: {
    character: 'dracule-mihawk',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Jozu blocks Mihawk’s slash aimed at Whitebeard.',
      it: 'Jozu blocca il fendente di Mihawk diretto a Barbabianca.',
    },
  },
  jozuKuzan: {
    character: 'kuzan',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Kuzan freezes Jozu after Jozu is distracted by Marco’s injury.',
      it: 'Kuzan congela Jozu dopo che si è distratto vedendo Marco ferito.',
    },
  },
  jozuBlenheim: {
    character: 'blenheim',
    type: {
      en: 'Crewmate who carries him',
      it: 'Compagno che lo porta in salvo',
    },
    summary: {
      en: 'Blenheim carries the frozen Jozu away during the retreat.',
      it: 'Blenheim porta via Jozu congelato durante la ritirata.',
    },
  },
  jozuEdwardNewgate2: {
    character: 'edward-newgate',
    type: { en: 'Former captain', it: 'Ex capitano' },
    summary: {
      en: 'Whitebeard dies fighting at Marineford after ordering his people to escape.',
      it: 'Barbabianca muore combattendo a Marineford dopo aver ordinato ai suoi uomini di fuggire.',
    },
  },
  vistaEdwardNewgate: {
    character: 'edward-newgate',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Vista serves as a division commander under Whitebeard.',
      it: 'Vista è un comandante di divisione agli ordini di Barbabianca.',
    },
  },
  vistaDraculeMihawk: {
    character: 'dracule-mihawk',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Vista crosses swords with Mihawk to keep him away from Luffy.',
      it: 'Vista incrocia le spade con Mihawk per tenerlo lontano da Rufy.',
    },
  },
  vistaMonkeyDLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Ally he protects', it: 'Alleato che protegge' },
    summary: {
      en: 'Vista intervenes when Mihawk pursues Luffy on the battlefield.',
      it: 'Vista interviene quando Mihawk insegue Rufy sul campo di battaglia.',
    },
  },
  vistaEdwardNewgate2: {
    character: 'edward-newgate',
    type: { en: 'Former captain', it: 'Ex capitano' },
    summary: {
      en: 'Whitebeard dies fighting at Marineford after ordering his people to escape.',
      it: 'Barbabianca muore combattendo a Marineford dopo aver ordinato ai suoi uomini di fuggire.',
    },
  },
  squardEdwardNewgate: {
    character: 'edward-newgate',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'Squard leads his crew into battle to support Whitebeard.',
      it: 'Squardo guida la sua ciurma in battaglia per sostenere Barbabianca.',
    },
  },
  squardEdwardNewgate2: {
    character: 'edward-newgate',
    type: { en: 'Ally who forgives him', it: 'Alleato che lo perdona' },
    summary: {
      en: 'Squard stabs Whitebeard after being deceived, but Whitebeard forgives him.',
      it: 'Squardo pugnala Barbabianca dopo essere stato ingannato, ma Barbabianca lo perdona.',
    },
  },
  squardSakazuki: {
    character: 'sakazuki',
    type: { en: 'Deceiver', it: 'Ingannatore' },
    summary: {
      en: 'Sakazuki makes Squard believe Whitebeard has betrayed his allied crews.',
      it: 'Sakazuki fa credere a Squardo che Barbabianca abbia tradito le ciurme alleate.',
    },
  },
  squardGoldRoger: {
    character: 'gold-roger',
    type: { en: 'Enemy from his past', it: 'Nemico del passato' },
    summary: {
      en: 'Roger killed Squard’s former crew, leaving him with a lasting hatred.',
      it: 'Roger ha ucciso la vecchia ciurma di Squardo, lasciandogli un odio duraturo.',
    },
  },
  squardPortgasDAce: {
    character: 'portgas-d-ace',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'Squard learns that his friend Ace is Roger’s son.',
      it: 'Squardo scopre che il suo amico Ace è figlio di Roger.',
    },
  },
  squardEdwardNewgate3: {
    character: 'edward-newgate',
    type: {
      en: 'Ally he tries to repay',
      it: 'Alleato verso cui cerca di sdebitarsi',
    },
    summary: {
      en: 'Squard offers to cover the retreat, but Whitebeard stops him from sacrificing himself.',
      it: 'Squardo si offre di coprire la ritirata, ma Barbabianca gli impedisce di sacrificarsi.',
    },
  },
  squardEdwardNewgate4: {
    character: 'edward-newgate',
    type: { en: 'Fallen ally', it: 'Alleato caduto' },
    summary: {
      en: 'Whitebeard dies fighting at Marineford after ordering his people to escape.',
      it: 'Barbabianca muore combattendo a Marineford dopo aver ordinato ai suoi uomini di fuggire.',
    },
  },
  littleOarsJrPortgasDAce: {
    character: 'portgas-d-ace',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'Oars charges toward Ace’s execution platform, remembering the hat Ace made for him.',
      it: 'Oars avanza verso il patibolo di Ace, ricordando il cappello che Ace gli ha intrecciato.',
    },
  },
  littleOarsJrEdwardNewgate: {
    character: 'edward-newgate',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'Oars joins Whitebeard’s forces to rescue Ace.',
      it: 'Oars si unisce alle forze di Barbabianca per salvare Ace.',
    },
  },
  littleOarsJrDonquixoteDoflamingo: {
    character: 'donquixote-doflamingo',
    type: { en: 'Attacker', it: 'Aggressore' },
    summary: {
      en: 'Doflamingo severs Oars’s leg as he advances through Marineford.',
      it: 'Doflamingo recide una gamba a Oars mentre avanza a Marineford.',
    },
  },
  littleOarsJrGeckoMoria: {
    character: 'gecko-moria',
    type: { en: 'Attacker', it: 'Aggressore' },
    summary: {
      en: 'Moria pierces Oars with a shadow attack.',
      it: 'Moria trafigge Oars con un attacco d’ombra.',
    },
  },
  littleOarsJrPortgasDAce2: {
    character: 'portgas-d-ace',
    type: { en: 'Fallen friend', it: 'Amico caduto' },
    summary: {
      en: 'Ace dies at Marineford after Oars risked his life trying to rescue him.',
      it: 'Ace muore a Marineford dopo che Oars ha rischiato la vita per salvarlo.',
    },
  },
  tsuruMonkeyDGarp: {
    character: 'monkey-d-garp',
    type: { en: 'Colleague', it: 'Collega' },
    summary: {
      en: 'Tsuru speaks with Garp about the coming execution of Ace.',
      it: 'Tsuru parla con Garp dell’imminente esecuzione di Ace.',
    },
  },
  tsuruSengoku: {
    character: 'sengoku',
    type: { en: 'Colleague', it: 'Collega' },
    summary: {
      en: 'Tsuru serves alongside Sengoku at Marine headquarters.',
      it: 'Tsuru presta servizio con Sengoku al quartier generale della Marina.',
    },
  },
  tsuruDonquixoteDoflamingo: {
    character: 'donquixote-doflamingo',
    type: { en: 'Pirate she pursues', it: 'Pirata a cui dà la caccia' },
    summary: {
      en: 'Tsuru repeatedly pursues Doflamingo and his crew in the North Blue.',
      it: 'Tsuru dà ripetutamente la caccia a Doflamingo e alla sua ciurma nel North Blue.',
    },
  },
  tsuruDonquixoteDoflamingo2: {
    character: 'donquixote-doflamingo',
    type: { en: 'Prisoner she escorts', it: 'Prigioniero che scorta' },
    summary: {
      en: 'Tsuru escorts the defeated Doflamingo away from Dressrosa.',
      it: 'Tsuru scorta Doflamingo sconfitto fuori da Dressrosa.',
    },
  },
  tsuruKujaku: {
    character: 'kujaku',
    type: { en: 'Granddaughter', it: 'Nipote' },
    summary: {
      en: 'Kujaku is Tsuru’s granddaughter and serves in the Marines.',
      it: 'Kujaku è la nipote di Tsuru e presta servizio nella Marina.',
    },
  },
  momongaBoaHancock: {
    character: 'boa-hancock',
    type: {
      en: 'Warlord he summons',
      it: 'Membro della Flotta dei Sette che convoca',
    },
    summary: {
      en: 'Momonga delivers the summons to Hancock and resists her petrification power.',
      it: 'Momonga consegna la convocazione a Hancock e resiste al suo potere pietrificante.',
    },
  },
  momongaBoaHancock2: {
    character: 'boa-hancock',
    type: {
      en: 'Warlord he escorts',
      it: 'Membro della Flotta dei Sette che accompagna',
    },
    summary: {
      en: 'Momonga agrees to escort Hancock after she accepts the summons.',
      it: 'Momonga accetta di accompagnare Hancock dopo che ha accettato la convocazione.',
    },
  },
  curlyDadanMonkeyDLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Child in her care', it: 'Bambino affidato a lei' },
    summary: {
      en: 'Garp leaves Luffy with Dadan and her mountain bandits.',
      it: 'Garp affida Rufy a Dadan e ai suoi briganti di montagna.',
    },
  },
  curlyDadanPortgasDAce: {
    character: 'portgas-d-ace',
    type: { en: 'Child in her care', it: 'Bambino affidato a lei' },
    summary: {
      en: 'Dadan has been raising Ace when Garp brings Luffy to her home.',
      it: 'Dadan sta già crescendo Ace quando Garp porta Rufy a casa sua.',
    },
  },
  curlyDadanMonkeyDGarp: {
    character: 'monkey-d-garp',
    type: {
      en: 'Marine who entrusts her with children',
      it: 'Marine che le affida i bambini',
    },
    summary: {
      en: 'Garp pressures Dadan into taking care of Luffy and Ace.',
      it: 'Garp costringe Dadan a occuparsi di Rufy e Ace.',
    },
  },
  curlyDadanBluejam: {
    character: 'bluejam',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Dadan stays with Ace to fight Bluejam while the other bandits take Luffy to safety.',
      it: 'Dadan resta con Ace per affrontare Bluejam mentre gli altri briganti portano Rufy al sicuro.',
    },
  },
  curlyDadanMonkeyDGarp2: {
    character: 'monkey-d-garp',
    type: { en: 'Man she blames', it: 'Uomo che incolpa' },
    summary: {
      en: 'Dadan strikes Garp and blames him for not saving Ace.',
      it: 'Dadan colpisce Garp e lo incolpa di non aver salvato Ace.',
    },
  },
  portgasDRougePortgasDAce: {
    character: 'portgas-d-ace',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'Rouge delays Ace’s birth to hide him from the Marines and dies after giving birth.',
      it: 'Rouge ritarda la nascita di Ace per nasconderlo alla Marina e muore dopo il parto.',
    },
  },
  portgasDRougeGoldRoger: {
    character: 'gold-roger',
    type: { en: 'Partner', it: 'Compagno' },
    summary: {
      en: 'Rouge is the mother of Roger’s son Ace.',
      it: 'Rouge è la madre di Ace, figlio di Roger.',
    },
  },
  roswardShalria: {
    character: 'shalria',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'Rosward attends the auction with his daughter Shalria.',
      it: 'Roswald partecipa all’asta con sua figlia Shalulia.',
    },
  },
  roswardSaintCharloss: {
    character: 'saint-charloss',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'Rosward watches his son Charlos bid an enormous sum for Camie.',
      it: 'Roswald vede suo figlio Charlos offrire una somma enorme per Kayme.',
    },
  },
  roswardJeanBart: {
    character: 'jean-bart',
    type: { en: 'Former slave', it: 'Ex schiavo' },
    summary: {
      en: 'Jean Bart escapes Rosward’s control and joins Law’s crew.',
      it: 'Jean Bart sfugge al controllo di Roswald e si unisce alla ciurma di Law.',
    },
  },
  roswardBartholomewKuma: {
    character: 'bartholomew-kuma',
    type: { en: 'Man he enslaves', it: 'Uomo che tiene in schiavitù' },
    summary: {
      en: 'Rosward uses Kuma as a slave at Mary Geoise.',
      it: 'Roswald usa Kuma come schiavo a Mary Geoise.',
    },
  },
  shalriaRosward: {
    character: 'rosward',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Shalria accompanies her father Rosward to the auction house.',
      it: 'Shalulia accompagna suo padre Roswald alla casa d’aste.',
    },
  },
  shalriaSaintCharloss: {
    character: 'saint-charloss',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Shalria attends the auction where her brother Charlos bids for Camie.',
      it: 'Shalulia partecipa all’asta in cui suo fratello Charlos fa un’offerta per Kayme.',
    },
  },
  shalriaCamie: {
    character: 'camie',
    type: { en: 'Woman she threatens', it: 'Donna che minaccia' },
    summary: {
      en: 'Shalria tries to kill Camie before the pirates can free her.',
      it: 'Shalulia cerca di uccidere Kayme prima che i pirati possano liberarla.',
    },
  },
  shalriaSilversRayleigh: {
    character: 'silvers-rayleigh',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Rayleigh knocks Shalria unconscious before she can shoot Camie.',
      it: 'Rayleigh fa perdere i sensi a Shalulia prima che possa sparare a Kayme.',
    },
  },
  discoCamie: {
    character: 'camie',
    type: { en: 'Captive he auctions', it: 'Prigioniera che mette all’asta' },
    summary: {
      en: 'Disco strikes Camie before offering her for sale at the auction.',
      it: 'Disco colpisce Kayme prima di metterla in vendita all’asta.',
    },
  },
  discoDonquixoteDoflamingo: {
    character: 'donquixote-doflamingo',
    type: {
      en: 'Employer who abandons him',
      it: 'Datore di lavoro che lo abbandona',
    },
    summary: {
      en: 'Doflamingo refuses Disco’s plea for help and abandons the auction business.',
      it: 'Doflamingo rifiuta la richiesta d’aiuto di Disco e abbandona il commercio degli schiavi.',
    },
  },
  jeanBartTrafalgarLaw: {
    character: 'trafalgar-law',
    type: { en: 'Liberator and captain', it: 'Liberatore e capitano' },
    summary: {
      en: 'Law frees Jean Bart from his collar and invites him into his crew.',
      it: 'Law libera Jean Bart dal collare e lo invita a unirsi alla sua ciurma.',
    },
  },
  jeanBartRosward: {
    character: 'rosward',
    type: { en: 'Former enslaver', it: 'Ex padrone' },
    summary: {
      en: 'Jean Bart was forced to serve Rosward before Law freed him.',
      it: 'Jean Bart era costretto a servire Roswald prima che Law lo liberasse.',
    },
  },
  jeanBartTrafalgarLaw2: {
    character: 'trafalgar-law',
    type: { en: 'Captain he shields', it: 'Capitano che protegge' },
    summary: {
      en: 'Jean Bart shields Law from Van Augur’s shot during the battle with Blackbeard.',
      it: 'Jean Bart protegge Law da un proiettile di Van Augur durante lo scontro con Barbanera.',
    },
  },
  jeanBartVanAugur: {
    character: 'van-augur',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Jean Bart blocks Augur’s shot aimed at Law.',
      it: 'Jean Bart blocca il proiettile di Augur diretto a Law.',
    },
  },
  sweetPeaMarguerite: {
    character: 'marguerite',
    type: { en: 'Companion', it: 'Compagna' },
    summary: {
      en: 'She helps Marguerite bring the stranger found in the forest to the village.',
      it: 'Aiuta Marguerite a portare al villaggio lo straniero trovato nella foresta.',
    },
  },
  sweetPeaAphelandra: {
    character: 'aphelandra',
    type: { en: 'Companion', it: 'Compagna' },
    summary: {
      en: 'The two help Marguerite remove the mushrooms covering Luffy.',
      it: 'Aiuta Aphelandra e Marguerite a togliere i funghi che ricoprono Rufy.',
    },
  },
  sweetPeaMonkeyDLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Stranger she helps', it: 'Straniero che aiuta' },
    summary: {
      en: 'She helps Luffy after he is found unconscious in the forest.',
      it: 'Aiuta Rufy dopo che viene trovato privo di sensi nella foresta.',
    },
  },
  sweetPeaBoaHancock: {
    character: 'boa-hancock',
    type: { en: 'Ruler who punishes her', it: 'Sovrana che la punisce' },
    summary: {
      en: 'Hancock petrifies her for helping bring a man into the village.',
      it: 'Hancock la pietrifica per aver aiutato a portare un uomo al villaggio.',
    },
  },
  sweetPeaMonkeyDLuffy2: {
    character: 'monkey-d-luffy',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'Luffy asks Hancock to free the petrified women instead of giving him a ship.',
      it: 'Rufy chiede a Hancock di liberare le donne pietrificate invece di dargli una nave.',
    },
  },
  sweetPeaBoaHancock2: {
    character: 'boa-hancock',
    type: { en: 'Ruler', it: 'Sovrana' },
    summary: {
      en: 'Hancock restores her and her companions at Luffy’s request.',
      it: 'Hancock libera lei e le sue compagne dalla pietrificazione su richiesta di Rufy.',
    },
  },
  aphelandraMarguerite: {
    character: 'marguerite',
    type: { en: 'Companion', it: 'Compagna' },
    summary: {
      en: 'She helps Marguerite bring the stranger found in the forest to the village.',
      it: 'Aiuta Marguerite a portare al villaggio lo straniero trovato nella foresta.',
    },
  },
  aphelandraSweetPea: {
    character: 'sweet-pea',
    type: { en: 'Companion', it: 'Compagna' },
    summary: {
      en: 'The two help Marguerite remove the mushrooms covering Luffy.',
      it: 'Aiuta Pisello Dolce e Marguerite a togliere i funghi che ricoprono Rufy.',
    },
  },
  aphelandraMonkeyDLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Stranger she helps', it: 'Straniero che aiuta' },
    summary: {
      en: 'She helps Luffy after he is found unconscious in the forest.',
      it: 'Aiuta Rufy dopo che viene trovato privo di sensi nella foresta.',
    },
  },
  aphelandraBoaHancock: {
    character: 'boa-hancock',
    type: { en: 'Ruler who punishes her', it: 'Sovrana che la punisce' },
    summary: {
      en: 'Hancock petrifies her for helping bring a man into the village.',
      it: 'Hancock la pietrifica per aver aiutato a portare un uomo al villaggio.',
    },
  },
  aphelandraMonkeyDLuffy2: {
    character: 'monkey-d-luffy',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'Luffy asks Hancock to free the petrified women instead of giving him a ship.',
      it: 'Rufy chiede a Hancock di liberare le donne pietrificate invece di dargli una nave.',
    },
  },
  aphelandraBoaHancock2: {
    character: 'boa-hancock',
    type: { en: 'Ruler', it: 'Sovrana' },
    summary: {
      en: 'Hancock restores her and her companions at Luffy’s request.',
      it: 'Hancock libera lei e le sue compagne dalla pietrificazione su richiesta di Rufy.',
    },
  },
  kikyoMonkeyDLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Intruder', it: 'Intruso' },
    summary: {
      en: 'Kikyo leads the pursuit of Luffy after he escapes from the village.',
      it: 'Kikyo guida l’inseguimento di Rufy dopo la sua fuga dal villaggio.',
    },
  },
  bacuraMonkeyDLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Luffy defeats Bacura with one punch in the arena.',
      it: 'Rufy sconfigge Bacura con un solo pugno nell’arena.',
    },
  },
  heraclesUsopp: {
    character: 'usopp',
    type: { en: 'Castaway he helps', it: 'Naufrago che aiuta' },
    summary: {
      en: 'Heracles saves Usopp from the dangerous creatures of the Boin Archipelago.',
      it: 'Heracles salva Usop dalle creature pericolose dell’arcipelago di Boin.',
    },
  },
  heraclesUsopp2: {
    character: 'usopp',
    type: { en: 'Pupil', it: 'Allievo' },
    summary: {
      en: 'Heracles agrees to train Usopp and teaches him how to use Pop Greens.',
      it: 'Heracles accetta di addestrare Usop e gli insegna a usare i Pop Green.',
    },
  },
  heraclesUsopp3: {
    character: 'usopp',
    type: { en: 'Pupil he helps depart', it: 'Allievo che aiuta a partire' },
    summary: {
      en: 'Heracles holds off the Marines with giant beetles so Usopp can leave with his crew.',
      it: 'Heracles tiene a distanza la Marina con i coleotteri giganti perché Usop possa partire con la sua ciurma.',
    },
  },
  heraclesBartholomewKuma: {
    character: 'bartholomew-kuma',
    type: { en: 'Visitor', it: 'Visitatore' },
    summary: {
      en: 'Kuma meets Heracles while travelling in search of a cure for Bonney.',
      it: 'Kuma incontra Heracles durante il viaggio alla ricerca di una cura per Bonney.',
    },
  },
  dominoBoaHancock: {
    character: 'boa-hancock',
    type: { en: 'Visitor she searches', it: 'Visitatrice che perquisisce' },
    summary: {
      en: 'Domino searches Hancock before admitting her to Impel Down.',
      it: 'Domino perquisisce Hancock prima di farla entrare a Impel Down.',
    },
  },
  dominoMagellan: {
    character: 'magellan',
    type: { en: 'Superior', it: 'Superiore' },
    summary: {
      en: 'Domino escorts Hancock and Momonga to Magellan’s office.',
      it: 'Domino accompagna Hancock e Momonga nell’ufficio di Magellan.',
    },
  },
  dominoHannyabal: {
    character: 'hannyabal',
    type: { en: 'Superior', it: 'Superiore' },
    summary: {
      en: 'Domino serves as head jailer under the new chief warden Hannyabal.',
      it: 'Domino è a capo dei secondini agli ordini del nuovo direttore Hannyabal.',
    },
  },
  saldeathMonkeyDLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Intruder he captures', it: 'Intruso che cattura' },
    summary: {
      en: 'Saldeath catches Luffy in a net, but the Sphinx tears it open.',
      it: 'Saldeath cattura Rufy con una rete, ma la Sfinge la squarcia.',
    },
  },
  saldeathBuggy: {
    character: 'buggy',
    type: { en: 'Escaped prisoner', it: 'Prigioniero evaso' },
    summary: {
      en: 'Saldeath traps Buggy together with Luffy and Galdino.',
      it: 'Saldeath intrappola Bagy insieme a Rufy e Galdino.',
    },
  },
  saldeathMr3: {
    character: 'mr-3',
    type: { en: 'Escaped prisoner', it: 'Prigioniero evaso' },
    summary: {
      en: 'Galdino is caught in Saldeath’s net with the other intruders.',
      it: 'Galdino viene catturato nella rete di Saldeath insieme agli altri intrusi.',
    },
  },
  sadiMinotaurus: {
    character: 'minotaurus',
    type: {
      en: 'Jailer Beast she commands',
      it: 'Guardiano demoniaco ai suoi ordini',
    },
    summary: {
      en: 'Sadi commands the Jailer Beasts, including Minotaurus.',
      it: 'Sadi comanda i guardiani demoniaci, fra cui Minotaurus.',
    },
  },
  sadiEmporioIvankov: {
    character: 'emporio-ivankov',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Ivankov intervenes against Sadi while the prisoners escape.',
      it: 'Ivankov interviene contro Sadi mentre i prigionieri fuggono.',
    },
  },
  minotaurusSadi: {
    character: 'sadi',
    type: { en: 'Commander', it: 'Comandante' },
    summary: {
      en: 'Minotaurus is one of the Jailer Beasts under Sadi’s command.',
      it: 'Minotaurus è uno dei guardiani demoniaci agli ordini di Sadi.',
    },
  },
  minotaurusMonkeyDLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Luffy fights Minotaurus with the other prisoners trying to reach Level Six.',
      it: 'Rufy affronta Minotaurus con gli altri prigionieri che cercano di raggiungere il sesto livello.',
    },
  },
  minotaurusBonClay: {
    character: 'bon-clay',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Minotaurus strikes Bentham before the prisoners fight back together.',
      it: 'Minotaurus colpisce Bentham prima che i prigionieri contrattacchino insieme.',
    },
  },
  domaEdwardNewgate: {
    character: 'edward-newgate',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'Doma brings his crew to Marineford to support Whitebeard.',
      it: 'Doma porta la sua ciurma a Marineford per sostenere Barbabianca.',
    },
  },
  domaPortgasDAce: {
    character: 'portgas-d-ace',
    type: { en: 'Pirate who defeated him', it: 'Pirata che lo ha sconfitto' },
    summary: {
      en: 'Doma surrendered to Ace before joining Whitebeard’s allied forces.',
      it: 'Doma si è arreso ad Ace prima di unirsi alle forze alleate di Barbabianca.',
    },
  },
  domaEdwardNewgate2: {
    character: 'edward-newgate',
    type: { en: 'Fallen ally', it: 'Alleato caduto' },
    summary: {
      en: 'Whitebeard dies fighting at Marineford after ordering his people to escape.',
      it: 'Barbabianca muore combattendo a Marineford dopo aver ordinato ai suoi uomini di fuggire.',
    },
  },
  lacroixLittleOarsJr: {
    character: 'little-oars-jr',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Lacroix attacks Oars, but his sword breaks and Oars defeats him.',
      it: 'Lacroix attacca Oars, ma la sua spada si spezza e Oars lo sconfigge.',
    },
  },
  whiteyBayEdwardNewgate: {
    character: 'edward-newgate',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'Whitey Bay brings her icebreaker to support Whitebeard at Marineford.',
      it: 'Whitey Bay porta la sua rompighiaccio a sostegno di Barbabianca a Marineford.',
    },
  },
  whiteyBayEdwardNewgate2: {
    character: 'edward-newgate',
    type: { en: 'Fallen ally', it: 'Alleato caduto' },
    summary: {
      en: 'Whitebeard dies fighting at Marineford after ordering his people to escape.',
      it: 'Barbabianca muore combattendo a Marineford dopo aver ordinato ai suoi uomini di fuggire.',
    },
  },
  whiteyBayEdwardNewgate3: {
    character: 'edward-newgate',
    type: { en: 'Former captain', it: 'Ex capitano' },
    summary: {
      en: 'Before leading an allied crew, Whitey Bay sailed in Whitebeard’s own crew.',
      it: 'Prima di guidare una ciurma alleata, Whitey Bay navigava nella ciurma di Barbabianca.',
    },
  },
  whiteyBayMarco: {
    character: 'marco',
    type: { en: 'Former crewmate', it: 'Ex compagno di ciurma' },
    summary: {
      en: 'Whitey Bay knew Marco when he was still an apprentice on Whitebeard’s ship.',
      it: 'Whitey Bay conosceva Marco quando era ancora un apprendista sulla nave di Barbabianca.',
    },
  },
  blenheimEdwardNewgate: {
    character: 'edward-newgate',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Blenheim fights at Marineford as one of Whitebeard’s division commanders.',
      it: 'Blenheim combatte a Marineford come comandante di divisione di Barbabianca.',
    },
  },
  blenheimJozu: {
    character: 'jozu',
    type: { en: 'Crewmate he carries', it: 'Compagno che porta in salvo' },
    summary: {
      en: 'Blenheim helps carry the frozen Jozu off the battlefield.',
      it: 'Blenheim aiuta a portare Jozu congelato fuori dal campo di battaglia.',
    },
  },
  blenheimEdwardNewgate2: {
    character: 'edward-newgate',
    type: { en: 'Former captain', it: 'Ex capitano' },
    summary: {
      en: 'Whitebeard dies fighting at Marineford after ordering his people to escape.',
      it: 'Barbabianca muore combattendo a Marineford dopo aver ordinato ai suoi uomini di fuggire.',
    },
  },
  salomeBoaHancock: {
    character: 'boa-hancock',
    type: { en: 'Companion', it: 'Compagna' },
    summary: {
      en: 'Salome accompanies Hancock, who confides her worries about Luffy to her.',
      it: 'Salomè accompagna Hancock, che le confida le proprie preoccupazioni per Rufy.',
    },
  },
  bluejamPorchemy: {
    character: 'porchemy',
    type: { en: 'Subordinate he kills', it: 'Sottoposto che uccide' },
    summary: {
      en: 'Bluejam kills Porchemy after his defeat by two boys.',
      it: 'Bluejam uccide Porchemy dopo che è stato sconfitto da due bambini.',
    },
  },
  bluejamPortgasDAce: {
    character: 'portgas-d-ace',
    type: { en: 'Boy he hunts', it: 'Ragazzo a cui dà la caccia' },
    summary: {
      en: 'Bluejam hunts Ace for stealing his crew’s money.',
      it: 'Bluejam dà la caccia ad Ace perché ha rubato il denaro della sua ciurma.',
    },
  },
  bluejamPortgasDAce2: {
    character: 'portgas-d-ace',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Ace stays behind with Dadan to fight Bluejam in the fire.',
      it: 'Ace resta con Dadan per affrontare Bluejam nell’incendio.',
    },
  },
  bluejamCurlyDadan: {
    character: 'curly-dadan',
    type: { en: 'Opponent', it: 'Avversaria' },
    summary: {
      en: 'Dadan fights Bluejam with Ace while the other bandits take Luffy away.',
      it: 'Dadan affronta Bluejam con Ace mentre gli altri briganti portano via Rufy.',
    },
  },
  porchemyBluejam: {
    character: 'bluejam',
    type: { en: 'Captain who kills him', it: 'Capitano che lo uccide' },
    summary: {
      en: 'Bluejam shoots Porchemy after his defeat by two children.',
      it: 'Bluejam spara a Porchemy dopo che è stato sconfitto da due bambini.',
    },
  },
  porchemyMonkeyDLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Captive', it: 'Prigioniero' },
    summary: {
      en: 'Porchemy tortures Luffy to learn where Ace hid the stolen money.',
      it: 'Porchemy tortura Rufy per scoprire dove Ace ha nascosto il denaro rubato.',
    },
  },
  porchemyPortgasDAce: {
    character: 'portgas-d-ace',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Ace attacks Porchemy to rescue Luffy.',
      it: 'Ace attacca Porchemy per salvare Rufy.',
    },
  },
  porchemySabo: {
    character: 'sabo',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Sabo helped Ace defeat Porchemy and rescue Luffy.',
      it: 'Sabo ha aiutato Ace a sconfiggere Porchemy e salvare Rufy.',
    },
  },
  dograCurlyDadan: {
    character: 'curly-dadan',
    type: { en: 'Leader', it: 'Capo' },
    summary: {
      en: 'Dogra belongs to Dadan’s band of mountain bandits.',
      it: 'Dogra fa parte della banda di briganti di montagna guidata da Dadan.',
    },
  },
  dograMonkeyDLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Boy he helps raise', it: 'Ragazzo che aiuta a crescere' },
    summary: {
      en: 'Dogra helps Dadan look after Luffy on Mount Colubo.',
      it: 'Dogra aiuta Dadan a occuparsi di Rufy sul monte Colubo.',
    },
  },
  dograPortgasDAce: {
    character: 'portgas-d-ace',
    type: { en: 'Boy he helps raise', it: 'Ragazzo che aiuta a crescere' },
    summary: {
      en: 'Dogra helps look after Ace and brings him the news of Sabo’s ship being destroyed.',
      it: 'Dogra aiuta a occuparsi di Ace e gli porta la notizia della distruzione della nave di Sabo.',
    },
  },
  dograSabo: {
    character: 'sabo',
    type: {
      en: 'Boy whose departure he witnesses',
      it: 'Ragazzo di cui vede la partenza',
    },
    summary: {
      en: 'Dogra sees a World Noble’s ship fire on Sabo’s boat.',
      it: 'Dogra vede la nave di un Nobile Mondiale sparare alla barca di Sabo.',
    },
  },
  haredasNami: {
    character: 'nami',
    type: { en: 'Guest', it: 'Ospite' },
    summary: {
      en: 'Haredas shelters Nami on Weatheria and shows her how wind knots work.',
      it: 'Haredas ospita Nami a Weatheria e le mostra come funzionano i nodi del vento.',
    },
  },
  haredasNami2: {
    character: 'nami',
    type: { en: 'Pupil', it: 'Allieva' },
    summary: {
      en: 'Haredas agrees to teach Nami about the weather of the New World.',
      it: 'Haredas accetta di insegnare a Nami a conoscere il clima del Nuovo Mondo.',
    },
  },
  haredasBartholomewKuma: {
    character: 'bartholomew-kuma',
    type: { en: 'Visitor', it: 'Visitatore' },
    summary: {
      en: 'Kuma visits Haredas during his search for a cure for Bonney.',
      it: 'Kuma incontra Haredas mentre cerca una cura per Bonney.',
    },
  },
} satisfies Record<string, Relationship>

export const supportingRelationships = {
  'camie': [
    {
      episode: 386,
      chapter: 493,
      value: [links.camiePappag, links.camieHatchan, links.camieMonkeyDLuffy],
    },
    {
      episode: 398,
      chapter: 504,
      value: [
        links.camiePappag,
        links.camieHatchan,
        links.camieMonkeyDLuffy,
        links.camieSilversRayleigh,
      ],
    },
  ],
  'pappag': [
    {
      episode: 386,
      chapter: 493,
      value: [links.pappagCamie, links.pappagHatchan],
    },
  ],
  'duval': [
    { episode: 391, chapter: 497, value: [links.duvalSanji] },
    { episode: 517, chapter: 598, value: [links.duvalSanji2] },
  ],
  'shakky': [
    {
      episode: 392,
      chapter: 498,
      value: [links.shakkyHatchan, links.shakkyMonkeyDLuffy],
    },
    {
      episode: 400,
      chapter: 506,
      value: [
        links.shakkySilversRayleigh,
        links.shakkyHatchan,
        links.shakkyMonkeyDLuffy,
      ],
    },
    {
      episode: 507,
      chapter: 591,
      value: [
        links.shakkySilversRayleigh,
        links.shakkyBoaHancock,
        links.shakkyHatchan,
        links.shakkyMonkeyDLuffy,
      ],
    },
    {
      episode: 1088,
      chapter: 1059,
      value: [
        links.shakkySilversRayleigh,
        links.shakkyBoaHancock2,
        links.shakkyHatchan,
        links.shakkyMonkeyDLuffy,
      ],
    },
    {
      episode: 1180,
      chapter: 1157,
      source: 'chapter',
      value: [
        links.shakkySilversRayleigh,
        links.shakkyBoaHancock2,
        links.shakkyHatchan,
        links.shakkyMonkeyDLuffy,
      ],
    },
    {
      episode: 1180,
      chapter: 1158,
      source: 'chapter',
      value: [
        links.shakkySilversRayleigh2,
        links.shakkyBoaHancock2,
        links.shakkyHatchan,
        links.shakkyMonkeyDLuffy,
      ],
    },
    {
      episode: 1180,
      chapter: 1161,
      source: 'chapter',
      value: [
        links.shakkySilversRayleigh3,
        links.shakkyBoaHancock2,
        links.shakkyHatchan,
        links.shakkyMonkeyDLuffy,
      ],
    },
  ],
  'killer': [
    {
      episode: 392,
      chapter: 498,
      value: [links.killerEustassKid, links.killerUrouge],
    },
    {
      episode: 942,
      chapter: 944,
      value: [links.killerEustassKid, links.killerRoronoaZoro],
    },
    {
      episode: 1028,
      chapter: 1011,
      value: [
        links.killerEustassKid,
        links.killerRoronoaZoro2,
        links.killerBasilHawkins,
      ],
    },
    {
      episode: 1054,
      chapter: 1029,
      value: [
        links.killerEustassKid,
        links.killerBasilHawkins2,
        links.killerRoronoaZoro3,
      ],
    },
    {
      episode: 1112,
      chapter: 1079,
      value: [
        links.killerEustassKid2,
        links.killerBasilHawkins3,
        links.killerShanks,
      ],
    },
  ],
  'bepo': [
    { episode: 392, chapter: 498, value: [links.bepoTrafalgarLaw] },
    {
      episode: 951,
      chapter: 951,
      value: [links.bepoTrafalgarLaw2, links.bepoBasilHawkins],
    },
    {
      episode: 1115,
      chapter: 1081,
      value: [
        links.bepoTrafalgarLaw3,
        links.bepoTonyTonyChopper,
        links.bepoMarshallDTeach,
      ],
    },
  ],
  'saint-charloss': [
    {
      episode: 396,
      chapter: 502,
      value: [
        links.saintCharlossRosward,
        links.saintCharlossShalria,
        links.saintCharlossCamie,
        links.saintCharlossHatchan,
        links.saintCharlossMonkeyDLuffy,
      ],
    },
    {
      episode: 886,
      chapter: 907,
      value: [
        links.saintCharlossRosward,
        links.saintCharlossShalria,
        links.saintCharlossShirahoshi,
        links.saintCharlossDonquixoteMjosgard,
      ],
    },
    {
      episode: 1118,
      chapter: 1084,
      value: [
        links.saintCharlossRosward,
        links.saintCharlossShirahoshi2,
        links.saintCharlossDonquixoteMjosgard2,
        links.saintCharlossSai,
        links.saintCharlossLeo,
      ],
    },
  ],
  'boa-sandersonia': [
    {
      episode: 413,
      chapter: 521,
      value: [
        links.boaSandersoniaBoaHancock,
        links.boaSandersoniaBoaMarigold,
        links.boaSandersoniaMonkeyDLuffy,
      ],
      source: 'episode',
    },
    {
      episode: 415,
      chapter: 521,
      value: [
        links.boaSandersoniaBoaHancock,
        links.boaSandersoniaBoaMarigold,
        links.boaSandersoniaMonkeyDLuffy2,
      ],
    },
    {
      episode: 507,
      chapter: 591,
      value: [
        links.boaSandersoniaBoaHancock,
        links.boaSandersoniaBoaMarigold,
        links.boaSandersoniaMonkeyDLuffy2,
        links.boaSandersoniaNyon,
        links.boaSandersoniaSilversRayleigh,
      ],
    },
  ],
  'boa-marigold': [
    {
      episode: 413,
      chapter: 521,
      value: [
        links.boaMarigoldBoaHancock,
        links.boaMarigoldBoaSandersonia,
        links.boaMarigoldMonkeyDLuffy,
      ],
      source: 'episode',
    },
    {
      episode: 415,
      chapter: 521,
      value: [
        links.boaMarigoldBoaHancock,
        links.boaMarigoldBoaSandersonia,
        links.boaMarigoldMonkeyDLuffy2,
      ],
    },
    {
      episode: 507,
      chapter: 591,
      value: [
        links.boaMarigoldBoaHancock,
        links.boaMarigoldBoaSandersonia,
        links.boaMarigoldMonkeyDLuffy2,
        links.boaMarigoldNyon,
        links.boaMarigoldSilversRayleigh,
      ],
    },
  ],
  'marguerite': [
    {
      episode: 409,
      chapter: 518,
      value: [
        links.margueriteMonkeyDLuffy,
        links.margueriteAphelandra,
        links.margueriteSweetPea,
      ],
      source: 'episode',
    },
    {
      episode: 412,
      chapter: 518,
      value: [
        links.margueriteMonkeyDLuffy2,
        links.margueriteBoaHancock,
        links.margueriteAphelandra,
        links.margueriteSweetPea,
      ],
    },
    {
      episode: 416,
      chapter: 522,
      value: [
        links.margueriteMonkeyDLuffy3,
        links.margueriteBoaHancock2,
        links.margueriteAphelandra,
        links.margueriteSweetPea,
      ],
    },
  ],
  'nyon': [
    {
      episode: 412,
      chapter: 522,
      source: 'episode',
      value: [links.nyonBoaHancock],
    },
    {
      episode: 415,
      chapter: 522,
      value: [
        links.nyonBoaHancock2,
        links.nyonBoaSandersonia,
        links.nyonBoaMarigold,
      ],
    },
    {
      episode: 507,
      chapter: 591,
      value: [
        links.nyonBoaHancock2,
        links.nyonBoaSandersonia,
        links.nyonBoaMarigold,
        links.nyonShakky,
        links.nyonSilversRayleigh,
      ],
    },
    {
      episode: 1180,
      chapter: 1156,
      source: 'chapter',
      value: [
        links.nyonBoaHancock2,
        links.nyonGoldRoger,
        links.nyonShakky2,
        links.nyonBoaSandersonia,
        links.nyonBoaMarigold,
      ],
    },
  ],
  'magellan': [
    { episode: 425, chapter: 530, value: [links.magellanHannyabal] },
    {
      episode: 436,
      chapter: 535,
      value: [links.magellanHannyabal, links.magellanMonkeyDLuffy],
    },
    {
      episode: 445,
      chapter: 543,
      value: [
        links.magellanHannyabal,
        links.magellanMonkeyDLuffy,
        links.magellanShiryu,
      ],
    },
    {
      episode: 452,
      chapter: 549,
      value: [
        links.magellanHannyabal,
        links.magellanMonkeyDLuffy,
        links.magellanShiryu2,
        links.magellanMarshallDTeach,
      ],
    },
    {
      episode: 490,
      chapter: 665,
      source: 'chapter',
      value: [
        links.magellanHannyabal2,
        links.magellanMonkeyDLuffy,
        links.magellanShiryu2,
        links.magellanMarshallDTeach,
      ],
    },
  ],
  'hannyabal': [
    { episode: 425, chapter: 530, value: [links.hannyabalMagellan] },
    {
      episode: 438,
      chapter: 537,
      value: [links.hannyabalMagellan, links.hannyabalBonClay],
    },
    {
      episode: 446,
      chapter: 543,
      value: [
        links.hannyabalMagellan,
        links.hannyabalBonClay,
        links.hannyabalMonkeyDLuffy,
        links.hannyabalMarshallDTeach,
      ],
    },
    {
      episode: 446,
      chapter: 661,
      source: 'chapter',
      value: [
        links.hannyabalMagellan2,
        links.hannyabalBonClay,
        links.hannyabalMonkeyDLuffy,
        links.hannyabalMarshallDTeach,
      ],
    },
  ],
  'inazuma': [
    {
      episode: 438,
      chapter: 541,
      value: [
        links.inazumaEmporioIvankov,
        links.inazumaMonkeyDLuffy,
        links.inazumaBonClay,
      ],
    },
    {
      episode: 479,
      chapter: 571,
      value: [
        links.inazumaEmporioIvankov,
        links.inazumaMonkeyDLuffy2,
        links.inazumaBonClay,
      ],
    },
  ],
  'jesus-burgess': [
    { episode: 151, chapter: 234, value: [links.jesusBurgessMarshallDTeach] },
    {
      episode: 325,
      chapter: 440,
      value: [links.jesusBurgessMarshallDTeach, links.jesusBurgessPortgasDAce],
    },
    {
      episode: 452,
      chapter: 549,
      value: [
        links.jesusBurgessMarshallDTeach,
        links.jesusBurgessPortgasDAce,
        links.jesusBurgessShiryu,
      ],
    },
    {
      episode: 729,
      chapter: 787,
      value: [
        links.jesusBurgessMarshallDTeach,
        links.jesusBurgessSabo,
        links.jesusBurgessMonkeyDLuffy,
        links.jesusBurgessShiryu,
      ],
    },
    {
      episode: 1093,
      chapter: 1063,
      value: [
        links.jesusBurgessMarshallDTeach,
        links.jesusBurgessTrafalgarLaw,
        links.jesusBurgessVanAugur,
        links.jesusBurgessSabo,
        links.jesusBurgessMonkeyDLuffy,
      ],
    },
  ],
  'van-augur': [
    { episode: 151, chapter: 234, value: [links.vanAugurMarshallDTeach] },
    {
      episode: 325,
      chapter: 440,
      value: [links.vanAugurMarshallDTeach, links.vanAugurPortgasDAce],
    },
    {
      episode: 452,
      chapter: 549,
      value: [
        links.vanAugurMarshallDTeach,
        links.vanAugurPortgasDAce,
        links.vanAugurShiryu,
      ],
    },
    {
      episode: 1093,
      chapter: 1064,
      value: [
        links.vanAugurMarshallDTeach,
        links.vanAugurTrafalgarLaw,
        links.vanAugurJesusBurgess,
        links.vanAugurShiryu,
      ],
    },
    {
      episode: 1141,
      chapter: 1107,
      value: [
        links.vanAugurMarshallDTeach,
        links.vanAugurCatarinaDevon,
        links.vanAugurTrafalgarLaw,
        links.vanAugurJesusBurgess,
        links.vanAugurShiryu,
      ],
    },
  ],
  'doc-q': [
    { episode: 151, chapter: 234, value: [links.docQMarshallDTeach] },
    {
      episode: 452,
      chapter: 549,
      value: [links.docQMarshallDTeach, links.docQShiryu],
    },
    {
      episode: 1093,
      chapter: 1063,
      value: [
        links.docQMarshallDTeach,
        links.docQTrafalgarLaw,
        links.docQShiryu,
      ],
    },
  ],
  'laffitte': [
    { episode: 151, chapter: 234, value: [links.laffitteMarshallDTeach] },
    {
      episode: 452,
      chapter: 549,
      value: [links.laffitteMarshallDTeach, links.laffitteShiryu],
    },
    {
      episode: 752,
      chapter: 803,
      value: [
        links.laffitteMarshallDTeach,
        links.laffitteJesusBurgess,
        links.laffitteShiryu,
      ],
    },
  ],
  'catarina-devon': [
    { episode: 484, chapter: 577, value: [links.catarinaDevonMarshallDTeach] },
    {
      episode: 1088,
      chapter: 1059,
      value: [links.catarinaDevonMarshallDTeach, links.catarinaDevonBoaHancock],
    },
    {
      episode: 1141,
      chapter: 1107,
      value: [
        links.catarinaDevonMarshallDTeach,
        links.catarinaDevonBoaHancock,
        links.catarinaDevonVanAugur,
        links.catarinaDevonJaygarciaSaturn,
      ],
    },
  ],
  'vasco-shot': [
    { episode: 484, chapter: 577, value: [links.vascoShotMarshallDTeach] },
    {
      episode: 1088,
      chapter: 1059,
      value: [links.vascoShotMarshallDTeach, links.vascoShotBoaHancock],
    },
    {
      episode: 1122,
      chapter: 1088,
      value: [
        links.vascoShotMarshallDTeach,
        links.vascoShotBoaHancock,
        links.vascoShotMonkeyDGarp,
      ],
    },
  ],
  'san-juan-wolf': [
    { episode: 484, chapter: 577, value: [links.sanJuanWolfMarshallDTeach] },
    {
      episode: 1121,
      chapter: 1087,
      value: [links.sanJuanWolfMarshallDTeach, links.sanJuanWolfMonkeyDGarp],
    },
  ],
  'avalo-pizarro': [
    { episode: 484, chapter: 577, value: [links.avaloPizarroMarshallDTeach] },
    {
      episode: 1122,
      chapter: 1088,
      value: [
        links.avaloPizarroMarshallDTeach,
        links.avaloPizarroKoby,
        links.avaloPizarroMonkeyDGarp,
      ],
    },
  ],
  'jozu': [
    {
      episode: 463,
      chapter: 556,
      value: [links.jozuEdwardNewgate, links.jozuDraculeMihawk],
    },
    {
      episode: 477,
      chapter: 568,
      value: [
        links.jozuEdwardNewgate,
        links.jozuKuzan,
        links.jozuDraculeMihawk,
      ],
    },
    {
      episode: 483,
      chapter: 574,
      value: [
        links.jozuEdwardNewgate,
        links.jozuKuzan,
        links.jozuDraculeMihawk,
        links.jozuBlenheim,
      ],
    },
    {
      episode: 485,
      chapter: 576,
      value: [
        links.jozuEdwardNewgate2,
        links.jozuKuzan,
        links.jozuDraculeMihawk,
        links.jozuBlenheim,
      ],
    },
  ],
  'vista': [
    { episode: 461, chapter: 556, value: [links.vistaEdwardNewgate] },
    {
      episode: 470,
      chapter: 561,
      value: [
        links.vistaEdwardNewgate,
        links.vistaDraculeMihawk,
        links.vistaMonkeyDLuffy,
      ],
    },
    {
      episode: 485,
      chapter: 576,
      value: [
        links.vistaEdwardNewgate2,
        links.vistaDraculeMihawk,
        links.vistaMonkeyDLuffy,
      ],
    },
  ],
  'squard': [
    { episode: 462, chapter: 558, value: [links.squardEdwardNewgate] },
    {
      episode: 472,
      chapter: 563,
      value: [
        links.squardEdwardNewgate2,
        links.squardSakazuki,
        links.squardGoldRoger,
        links.squardPortgasDAce,
      ],
    },
    {
      episode: 481,
      chapter: 572,
      value: [
        links.squardEdwardNewgate3,
        links.squardSakazuki,
        links.squardGoldRoger,
        links.squardPortgasDAce,
      ],
    },
    {
      episode: 485,
      chapter: 576,
      value: [
        links.squardEdwardNewgate4,
        links.squardSakazuki,
        links.squardGoldRoger,
        links.squardPortgasDAce,
      ],
    },
  ],
  'little-oars-jr': [
    {
      episode: 466,
      chapter: 560,
      value: [
        links.littleOarsJrPortgasDAce,
        links.littleOarsJrEdwardNewgate,
        links.littleOarsJrDonquixoteDoflamingo,
        links.littleOarsJrGeckoMoria,
      ],
    },
    {
      episode: 483,
      chapter: 574,
      value: [
        links.littleOarsJrPortgasDAce2,
        links.littleOarsJrEdwardNewgate,
        links.littleOarsJrDonquixoteDoflamingo,
        links.littleOarsJrGeckoMoria,
      ],
    },
  ],
  'tsuru': [
    {
      episode: 461,
      chapter: 556,
      value: [links.tsuruMonkeyDGarp, links.tsuruSengoku],
    },
    {
      episode: 703,
      chapter: 766,
      value: [
        links.tsuruMonkeyDGarp,
        links.tsuruSengoku,
        links.tsuruDonquixoteDoflamingo,
      ],
    },
    {
      episode: 746,
      chapter: 801,
      value: [
        links.tsuruMonkeyDGarp,
        links.tsuruSengoku,
        links.tsuruDonquixoteDoflamingo2,
      ],
    },
    {
      episode: 1113,
      chapter: 1080,
      value: [
        links.tsuruKujaku,
        links.tsuruMonkeyDGarp,
        links.tsuruSengoku,
        links.tsuruDonquixoteDoflamingo2,
      ],
    },
  ],
  'momonga': [
    {
      episode: 410,
      chapter: 523,
      value: [links.momongaBoaHancock],
      source: 'episode',
    },
    { episode: 417, chapter: 523, value: [links.momongaBoaHancock2] },
  ],
  'curly-dadan': [
    {
      episode: 493,
      chapter: 582,
      value: [
        links.curlyDadanMonkeyDLuffy,
        links.curlyDadanPortgasDAce,
        links.curlyDadanMonkeyDGarp,
      ],
    },
    {
      episode: 503,
      chapter: 588,
      value: [
        links.curlyDadanMonkeyDLuffy,
        links.curlyDadanPortgasDAce,
        links.curlyDadanMonkeyDGarp,
        links.curlyDadanBluejam,
      ],
    },
    {
      episode: 505,
      chapter: 590,
      value: [
        links.curlyDadanMonkeyDLuffy,
        links.curlyDadanPortgasDAce,
        links.curlyDadanMonkeyDGarp2,
        links.curlyDadanBluejam,
      ],
    },
  ],
  'portgas-d-rouge': [
    {
      episode: 493,
      chapter: 582,
      value: [links.portgasDRougePortgasDAce, links.portgasDRougeGoldRoger],
    },
  ],
  'rosward': [
    { episode: 394, chapter: 501, value: [links.roswardShalria] },
    {
      episode: 396,
      chapter: 502,
      value: [links.roswardShalria, links.roswardSaintCharloss],
    },
    {
      episode: 399,
      chapter: 505,
      value: [
        links.roswardShalria,
        links.roswardSaintCharloss,
        links.roswardJeanBart,
      ],
    },
    {
      episode: 888,
      chapter: 908,
      value: [
        links.roswardShalria,
        links.roswardSaintCharloss,
        links.roswardBartholomewKuma,
      ],
    },
  ],
  'shalria': [
    { episode: 394, chapter: 501, value: [links.shalriaRosward] },
    {
      episode: 396,
      chapter: 502,
      value: [links.shalriaRosward, links.shalriaSaintCharloss],
    },
    {
      episode: 398,
      chapter: 504,
      value: [
        links.shalriaRosward,
        links.shalriaSaintCharloss,
        links.shalriaCamie,
        links.shalriaSilversRayleigh,
      ],
    },
  ],
  'disco': [
    { episode: 395, chapter: 501, value: [links.discoCamie] },
    {
      episode: 398,
      chapter: 504,
      value: [links.discoCamie, links.discoDonquixoteDoflamingo],
    },
  ],
  'jean-bart': [
    {
      episode: 399,
      chapter: 505,
      value: [links.jeanBartTrafalgarLaw, links.jeanBartRosward],
    },
    {
      episode: 1093,
      chapter: 1064,
      value: [
        links.jeanBartTrafalgarLaw2,
        links.jeanBartRosward,
        links.jeanBartVanAugur,
      ],
    },
  ],
  'sweet-pea': [
    {
      episode: 409,
      chapter: 518,
      value: [
        links.sweetPeaMarguerite,
        links.sweetPeaAphelandra,
        links.sweetPeaMonkeyDLuffy,
      ],
      source: 'episode',
    },
    {
      episode: 412,
      chapter: 518,
      value: [
        links.sweetPeaMarguerite,
        links.sweetPeaAphelandra,
        links.sweetPeaMonkeyDLuffy,
        links.sweetPeaBoaHancock,
      ],
    },
    {
      episode: 415,
      chapter: 521,
      value: [
        links.sweetPeaMarguerite,
        links.sweetPeaAphelandra,
        links.sweetPeaMonkeyDLuffy2,
        links.sweetPeaBoaHancock2,
      ],
    },
  ],
  'aphelandra': [
    {
      episode: 409,
      chapter: 518,
      value: [
        links.aphelandraMarguerite,
        links.aphelandraSweetPea,
        links.aphelandraMonkeyDLuffy,
      ],
      source: 'episode',
    },
    {
      episode: 412,
      chapter: 518,
      value: [
        links.aphelandraMarguerite,
        links.aphelandraSweetPea,
        links.aphelandraMonkeyDLuffy,
        links.aphelandraBoaHancock,
      ],
    },
    {
      episode: 415,
      chapter: 521,
      value: [
        links.aphelandraMarguerite,
        links.aphelandraSweetPea,
        links.aphelandraMonkeyDLuffy2,
        links.aphelandraBoaHancock2,
      ],
    },
  ],
  'kikyo': [{ episode: 410, chapter: 516, value: [links.kikyoMonkeyDLuffy] }],
  'bacura': [{ episode: 412, chapter: 518, value: [links.bacuraMonkeyDLuffy] }],
  'heracles': [
    { episode: 420, chapter: 524, value: [links.heraclesUsopp] },
    { episode: 515, chapter: 596, value: [links.heraclesUsopp2] },
    { episode: 522, chapter: 602, value: [links.heraclesUsopp3] },
    {
      episode: 1133,
      chapter: 1099,
      value: [links.heraclesUsopp3, links.heraclesBartholomewKuma],
    },
  ],
  'domino': [
    { episode: 422, chapter: 526, value: [links.dominoBoaHancock] },
    {
      episode: 425,
      chapter: 530,
      value: [links.dominoBoaHancock, links.dominoMagellan],
    },
    {
      episode: 425,
      chapter: 661,
      source: 'chapter',
      value: [links.dominoHannyabal, links.dominoBoaHancock],
    },
  ],
  'saldeath': [
    {
      episode: 431,
      chapter: 530,
      value: [
        links.saldeathMonkeyDLuffy,
        links.saldeathBuggy,
        links.saldeathMr3,
      ],
    },
  ],
  'sadi': [
    { episode: 433, chapter: 532, value: [links.sadiMinotaurus] },
    {
      episode: 445,
      chapter: 542,
      value: [links.sadiMinotaurus, links.sadiEmporioIvankov],
    },
  ],
  'minotaurus': [
    {
      episode: 433,
      chapter: 532,
      value: [
        links.minotaurusSadi,
        links.minotaurusMonkeyDLuffy,
        links.minotaurusBonClay,
      ],
    },
  ],
  'doma': [
    { episode: 460, chapter: 551, value: [links.domaEdwardNewgate] },
    {
      episode: 461,
      chapter: 552,
      value: [links.domaEdwardNewgate, links.domaPortgasDAce],
    },
    {
      episode: 485,
      chapter: 576,
      value: [links.domaEdwardNewgate2, links.domaPortgasDAce],
    },
  ],
  'lacroix': [
    { episode: 466, chapter: 560, value: [links.lacroixLittleOarsJr] },
  ],
  'whitey-bay': [
    { episode: 465, chapter: 556, value: [links.whiteyBayEdwardNewgate] },
    { episode: 485, chapter: 576, value: [links.whiteyBayEdwardNewgate2] },
    {
      episode: 962,
      chapter: 963,
      value: [links.whiteyBayEdwardNewgate3, links.whiteyBayMarco],
    },
  ],
  'blenheim': [
    {
      episode: 482,
      chapter: 573,
      value: [links.blenheimEdwardNewgate, links.blenheimJozu],
    },
    {
      episode: 485,
      chapter: 576,
      value: [links.blenheimEdwardNewgate2, links.blenheimJozu],
    },
  ],
  'salome': [{ episode: 484, chapter: 575, value: [links.salomeBoaHancock] }],
  'bluejam': [
    {
      episode: 495,
      chapter: 584,
      value: [links.bluejamPorchemy, links.bluejamPortgasDAce],
    },
    {
      episode: 503,
      chapter: 588,
      value: [
        links.bluejamPorchemy,
        links.bluejamPortgasDAce2,
        links.bluejamCurlyDadan,
      ],
    },
  ],
  'porchemy': [
    {
      episode: 495,
      chapter: 584,
      value: [
        links.porchemyBluejam,
        links.porchemyMonkeyDLuffy,
        links.porchemyPortgasDAce,
      ],
    },
    {
      episode: 497,
      chapter: 585,
      value: [
        links.porchemyBluejam,
        links.porchemyMonkeyDLuffy,
        links.porchemyPortgasDAce,
        links.porchemySabo,
      ],
    },
  ],
  'dogra': [
    {
      episode: 503,
      chapter: 588,
      value: [
        links.dograCurlyDadan,
        links.dograMonkeyDLuffy,
        links.dograPortgasDAce,
        links.dograSabo,
      ],
    },
  ],
  'haredas': [
    { episode: 508, chapter: 592, value: [links.haredasNami] },
    { episode: 514, chapter: 596, value: [links.haredasNami2] },
    {
      episode: 1133,
      chapter: 1099,
      value: [links.haredasNami2, links.haredasBartholomewKuma],
    },
  ],
} satisfies Record<string, Timeline<Relationship[]>>
