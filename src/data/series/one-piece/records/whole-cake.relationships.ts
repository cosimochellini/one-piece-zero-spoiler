import type { Relationship, Timeline } from '~/data/types'

/** Facts and threshold revisions: docs/content-provenance/relationships.json. */
const links = {
  'jackKaido': {
    character: 'kaido',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Jack invades Zou in Kaido’s name and demands the surrender of a ninja.',
      it: 'Jack invade Zou in nome di Kaido e pretende la consegna di un ninja.',
    },
  },
  'jackInu': {
    character: 'inuarashi',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Jack rejects Inuarashi’s offer to search peacefully and fights him.',
      it: 'Jack rifiuta l’offerta di Cane-tempesta di cercare senza violenza e lo affronta.',
    },
  },
  'jackNeko': {
    character: 'nekomamushi',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Nekomamushi takes over the defence of Zou against Jack at night.',
      it: 'Gatto-vipera prende il posto di Cane-tempesta nella difesa notturna di Zou contro Jack.',
    },
  },
  'jackZunesha': {
    character: 'zunesha',
    type: {
      en: 'Opponent who sinks his fleet',
      it: 'Avversario che affonda la sua flotta',
    },
    summary: {
      en: 'Zunesha smashes Jack’s ships after he attacks its legs.',
      it: 'Zunesha distrugge le navi di Jack dopo il suo attacco alle zampe.',
    },
  },
  'jackInuEnd': {
    character: 'inuarashi',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Inuarashi defeats Jack on Onigashima after regaining his Sulong form.',
      it: 'Cane-tempesta sconfigge Jack a Onigashima dopo aver recuperato la forma Sulong.',
    },
  },
  'wandaLuffy': {
    character: 'monkey-d-luffy',
    type: { en: 'Guest she guides', it: 'Ospite che accompagna' },
    summary: {
      en: 'Wanda stops the Guardians from attacking Luffy and guides him through Zou.',
      it: 'Wanda ferma i Guardiani che attaccano Rufy e lo accompagna per Zou.',
    },
  },
  'wandaInu': {
    character: 'inuarashi',
    type: { en: 'Duke she serves', it: 'Duca che serve' },
    summary: {
      en: 'Wanda defends Inuarashi’s strength after the attack on Zou.',
      it: 'Wanda difende il valore di Cane-tempesta dopo l’attacco a Zou.',
    },
  },
  'wandaNami': {
    character: 'nami',
    type: { en: 'Friend', it: 'Amica' },
    summary: {
      en: 'Wanda embraces Nami and thanks her for helping save the minks.',
      it: 'Wanda abbraccia Nami e la ringrazia per aver contribuito a salvare i mink.',
    },
  },
  'wandaCarrot': {
    character: 'carrot',
    type: { en: 'Friend', it: 'Amica' },
    summary: {
      en: 'Wanda is relieved to learn that Carrot is travelling with Luffy rather than missing.',
      it: 'Wanda è sollevata nello scoprire che Carrot è in viaggio con Rufy e non è scomparsa.',
    },
  },
  'wandaCarrotRuler': {
    character: 'carrot',
    type: { en: 'Ruler she supports', it: 'Sovrana che sostiene' },
    summary: {
      en: 'Wanda promises to support Carrot when she is chosen to lead Mokomo.',
      it: 'Wanda promette il suo sostegno a Carrot quando viene scelta per guidare Mokomo.',
    },
  },
  'wandaPero': {
    character: 'charlotte-perospero',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Wanda joins Carrot in attacking Perospero to avenge Pedro.',
      it: 'Wanda affianca Carrot contro Perospero per vendicare Pedro.',
    },
  },
  'carrotWanda': {
    character: 'wanda',
    type: { en: 'Friend', it: 'Amica' },
    summary: {
      en: 'Carrot travels around Zou with Wanda and helps her guide Luffy.',
      it: 'Carrot percorre Zou con Wanda e la aiuta ad accompagnare Rufy.',
    },
  },
  'carrotPedro': {
    character: 'pedro',
    type: { en: 'Companion', it: 'Compagno di viaggio' },
    summary: {
      en: 'Pedro vouches for Carrot’s strength when she joins the voyage to rescue Sanji.',
      it: 'Pedro garantisce per la forza di Carrot quando si unisce al viaggio per salvare Sanji.',
    },
  },
  'carrotChopper': {
    character: 'tony-tony-chopper',
    type: { en: 'Partner in escape', it: 'Compagno di fuga' },
    summary: {
      en: 'Carrot and Chopper defeat Brûlée’s captors and take control of the mirrors.',
      it: 'Carrot e Chopper sconfiggono chi li tiene prigionieri e prendono il controllo degli specchi.',
    },
  },
  'carrotPedroDead': {
    character: 'pedro',
    type: { en: 'Mentor she mourns', it: 'Maestro che piange' },
    summary: {
      en: 'Carrot remembers Pedro’s training after he gives his life to let the others escape.',
      it: 'Carrot ricorda gli insegnamenti di Pedro dopo che lui dà la vita per permettere agli altri di fuggire.',
    },
  },
  'carrotPero': {
    character: 'charlotte-perospero',
    type: {
      en: 'Enemy she blames for Pedro’s death',
      it: 'Nemico che ritiene responsabile della morte di Pedro',
    },
    summary: {
      en: 'Carrot attacks Perospero with Wanda to avenge Pedro.',
      it: 'Carrot attacca Perospero insieme a Wanda per vendicare Pedro.',
    },
  },
  'carrotInu': {
    character: 'inuarashi',
    type: { en: 'Predecessor', it: 'Predecessore' },
    summary: {
      en: 'Inuarashi chooses Carrot to succeed him as ruler of Mokomo.',
      it: 'Cane-tempesta sceglie Carrot come sua erede alla guida di Mokomo.',
    },
  },
  'carrotNeko': {
    character: 'nekomamushi',
    type: { en: 'Predecessor', it: 'Predecessore' },
    summary: {
      en: 'Nekomamushi entrusts Mokomo to Carrot so he can remain in Wano.',
      it: 'Gatto-vipera affida Mokomo a Carrot per poter restare a Wano.',
    },
  },
  'inuNeko': {
    character: 'nekomamushi',
    type: { en: 'Rival ruler', it: 'Sovrano rivale' },
    summary: {
      en: 'Inuarashi and Nekomamushi rule Zou at different hours and avoid each other.',
      it: 'Cane-tempesta e Gatto-vipera governano Zou a orari diversi e si evitano.',
    },
  },
  'inuNekoTruce': {
    character: 'nekomamushi',
    type: {
      en: 'Reconciled companion',
      it: 'Compagno con cui si riappacifica',
    },
    summary: {
      en: 'Inuarashi agrees to a truce with Nekomamushi at Momonosuke’s request.',
      it: 'Cane-tempesta accetta una tregua con Gatto-vipera su richiesta di Momonosuke.',
    },
  },
  'inuJack': {
    character: 'jack',
    type: { en: 'Invader', it: 'Invasore' },
    summary: {
      en: 'Inuarashi fights Jack when the pirate refuses a peaceful search of Zou.',
      it: 'Cane-tempesta affronta Jack quando il pirata rifiuta di perquisire Zou senza violenza.',
    },
  },
  'inuJackEnd': {
    character: 'jack',
    type: { en: 'Defeated enemy', it: 'Nemico sconfitto' },
    summary: {
      en: 'Inuarashi defeats Jack in Sulong form during the raid on Onigashima.',
      it: 'Cane-tempesta sconfigge Jack in forma Sulong durante l’assalto a Onigashima.',
    },
  },
  'inuRaizo': {
    character: 'raizo',
    type: { en: 'Comrade he protects', it: 'Compagno che protegge' },
    summary: {
      en: 'Inuarashi refuses to surrender Raizo despite the torture inflicted on Zou.',
      it: 'Cane-tempesta rifiuta di consegnare Raizo nonostante le torture inflitte a Zou.',
    },
  },
  'inuMomo': {
    character: 'momonosuke',
    type: { en: 'Lord', it: 'Signore' },
    summary: {
      en: 'Inuarashi serves Momonosuke and accepts his request to stop fighting Nekomamushi.',
      it: 'Cane-tempesta serve Momonosuke e accetta la sua richiesta di non combattere Gatto-vipera.',
    },
  },
  'inuCarrot': {
    character: 'carrot',
    type: { en: 'Successor', it: 'Erede' },
    summary: {
      en: 'Inuarashi entrusts Mokomo to Carrot and stays in Wano.',
      it: 'Cane-tempesta affida Mokomo a Carrot e resta a Wano.',
    },
  },
  'nekoInu': {
    character: 'inuarashi',
    type: { en: 'Rival ruler', it: 'Sovrano rivale' },
    summary: {
      en: 'Nekomamushi shares rule of Zou with Inuarashi but refuses to meet him.',
      it: 'Gatto-vipera divide il governo di Zou con Cane-tempesta ma rifiuta di incontrarlo.',
    },
  },
  'nekoInuTruce': {
    character: 'inuarashi',
    type: {
      en: 'Reconciled companion',
      it: 'Compagno con cui si riappacifica',
    },
    summary: {
      en: 'Nekomamushi makes peace with Inuarashi when Momonosuke asks them to stop fighting.',
      it: 'Gatto-vipera si riappacifica con Cane-tempesta quando Momonosuke chiede loro di smettere di combattere.',
    },
  },
  'nekoRaizo': {
    character: 'raizo',
    type: { en: 'Comrade he protects', it: 'Compagno che protegge' },
    summary: {
      en: 'Nekomamushi keeps Raizo hidden despite Jack’s torture of the minks.',
      it: 'Gatto-vipera tiene nascosto Raizo nonostante le torture di Jack ai mink.',
    },
  },
  'nekoMomo': {
    character: 'momonosuke',
    type: { en: 'Lord', it: 'Signore' },
    summary: {
      en: 'Nekomamushi serves Momonosuke and heeds his request for a truce.',
      it: 'Gatto-vipera serve Momonosuke e ascolta la sua richiesta di una tregua.',
    },
  },
  'nekoPero': {
    character: 'charlotte-perospero',
    type: {
      en: 'Enemy he defeats for Pedro',
      it: 'Nemico che sconfigge per Pedro',
    },
    summary: {
      en: 'Nekomamushi defeats Perospero after learning of Pedro’s sacrifice.',
      it: 'Gatto-vipera sconfigge Perospero dopo aver saputo del sacrificio di Pedro.',
    },
  },
  'nekoCarrot': {
    character: 'carrot',
    type: { en: 'Successor', it: 'Erede' },
    summary: {
      en: 'Nekomamushi chooses Carrot to lead Mokomo while he remains in Wano.',
      it: 'Gatto-vipera sceglie Carrot per guidare Mokomo mentre lui resta a Wano.',
    },
  },
  'raizoInu': {
    character: 'inuarashi',
    type: { en: 'Protector', it: 'Protettore' },
    summary: {
      en: 'Inuarashi endures Jack’s attack rather than reveal where Raizo is hiding.',
      it: 'Cane-tempesta subisce l’attacco di Jack pur di non rivelare dove si nasconde Raizo.',
    },
  },
  'raizoNeko': {
    character: 'nekomamushi',
    type: { en: 'Protector', it: 'Protettore' },
    summary: {
      en: 'Nekomamushi keeps Raizo safe inside the Whale Tree despite the destruction outside.',
      it: 'Gatto-vipera tiene Raizo al sicuro nell’Albero Balena nonostante la distruzione all’esterno.',
    },
  },
  'raizoKin': {
    character: 'kinemon',
    type: { en: 'Comrade', it: 'Compagno' },
    summary: {
      en: 'Raizo reunites with Kin’emon inside the Whale Tree.',
      it: 'Raizo ritrova Kin’emon nell’Albero Balena.',
    },
  },
  'raizoFuku': {
    character: 'fukurokuju',
    type: { en: 'Ninja rival', it: 'Ninja rivale' },
    summary: {
      en: 'Raizo faces Fukurokuju in a contest of endurance as the castle burns.',
      it: 'Raizo affronta Fukurokuju in una prova di resistenza mentre il castello brucia.',
    },
  },
  'raizoJinbe': {
    character: 'jinbe',
    type: { en: 'Ally in fighting the fire', it: 'Alleato contro l’incendio' },
    summary: {
      en: 'Raizo releases the water he stored and Jinbe spreads it through the burning castle.',
      it: 'Raizo libera l’acqua che aveva conservato e Jinbe la distribuisce nel castello in fiamme.',
    },
  },
  'reijuSanji': {
    character: 'sanji',
    type: { en: 'Younger brother', it: 'Fratello minore' },
    summary: {
      en: 'Reiju thanks Sanji’s friends for looking after her younger brother.',
      it: 'Reiju ringrazia gli amici di Sanji per essersi presi cura del fratello minore.',
    },
  },
  'reijuSanjiFree': {
    character: 'sanji',
    type: {
      en: 'Brother she helped escape',
      it: 'Fratello che ha aiutato a fuggire',
    },
    summary: {
      en: 'Reiju secretly tended Sanji’s injuries and helped him escape from Germa as a child.',
      it: 'Reiju curava di nascosto le ferite di Sanji e da bambini lo ha aiutato a fuggire dal Germa.',
    },
  },
  'reijuYonji': {
    character: 'vinsmoke-yonji',
    type: { en: 'Younger brother', it: 'Fratello minore' },
    summary: {
      en: 'Reiju kicks Yonji off the ship after he refuses to help the poisoned Luffy.',
      it: 'Reiju butta Yonji giù dalla nave dopo il suo rifiuto di aiutare Rufy avvelenato.',
    },
  },
  'reijuSora': {
    character: 'vinsmoke-sora',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'Reiju tells Sanji how Sora risked her life to preserve her sons’ emotions.',
      it: 'Reiju racconta a Sanji come Sora abbia rischiato la vita per preservare i sentimenti dei figli.',
    },
  },
  'reijuPudding': {
    character: 'charlotte-pudding',
    type: { en: 'Attacker', it: 'Aggressora' },
    summary: {
      en: 'Pudding shoots Reiju and edits her memories to conceal the wedding plot.',
      it: 'Pudding spara a Reiju e le modifica i ricordi per nascondere il piano per le nozze.',
    },
  },
  'judgeSanji': {
    character: 'sanji',
    type: { en: 'Son he rejects', it: 'Figlio che rifiuta' },
    summary: {
      en: 'Judge calls Sanji a failure and forces him into a political marriage.',
      it: 'Judge considera Sanji un fallimento e lo costringe a un matrimonio politico.',
    },
  },
  'judgeSora': {
    character: 'vinsmoke-sora',
    type: {
      en: 'Wife who opposed his experiments',
      it: 'Moglie contraria ai suoi esperimenti',
    },
    summary: {
      en: 'Sora opposed Judge’s plan to remove their sons’ emotions through genetic modification.',
      it: 'Sora si opponeva al piano di Judge di eliminare i sentimenti dei figli attraverso modifiche genetiche.',
    },
  },
  'judgeLinlin': {
    character: 'charlotte-linlin',
    type: { en: 'Political partner', it: 'Alleata politica' },
    summary: {
      en: 'Judge arranges Sanji’s marriage to secure an alliance with Big Mom.',
      it: 'Judge organizza le nozze di Sanji per ottenere un’alleanza con Big Mom.',
    },
  },
  'judgeLinlinEnemy': {
    character: 'charlotte-linlin',
    type: { en: 'Betrayer', it: 'Traditrice' },
    summary: {
      en: 'Big Mom’s family holds Judge at gunpoint after revealing the plot against Germa.',
      it: 'La famiglia di Big Mom tiene Judge sotto tiro dopo aver rivelato il piano contro il Germa.',
    },
  },
  'judgeSanjiRescue': {
    character: 'sanji',
    type: { en: 'Son who saves him', it: 'Figlio che lo salva' },
    summary: {
      en: 'Sanji frees Judge and his siblings despite their treatment of him.',
      it: 'Sanji libera Judge e i fratelli nonostante il modo in cui lo hanno trattato.',
    },
  },
  'judgeCaesar': {
    character: 'caesar-clown',
    type: { en: 'Research partner', it: 'Socio nella ricerca' },
    summary: {
      en: 'Judge and Caesar form NEO MADS after leaving Totto Land.',
      it: 'Judge e Caesar fondano NEO MADS dopo aver lasciato Totto Land.',
    },
  },
  'IchijiSanji': {
    character: 'sanji',
    type: { en: 'Brother he bullies', it: 'Fratello che maltratta' },
    summary: {
      en: 'Ichiji joins in the abuse of Sanji within the Vinsmoke family.',
      it: 'Ichiji partecipa ai maltrattamenti di Sanji nella famiglia Vinsmoke.',
    },
  },
  'IchijiSanjiHelp': {
    character: 'sanji',
    type: { en: 'Brother he helps escape', it: 'Fratello che aiuta a fuggire' },
    summary: {
      en: 'Ichiji fights on Cacao Island to help Sanji and Luffy escape.',
      it: 'Ichiji combatte a Cacao Island per aiutare Sanji e Rufy a fuggire.',
    },
  },
  'IchijiJudge': {
    character: 'vinsmoke-judge',
    type: { en: 'Father and commander', it: 'Padre e comandante' },
    summary: {
      en: 'Ichiji serves under his father Judge in Germa’s military.',
      it: 'Ichiji serve sotto il comando del padre Judge nell’esercito del Germa.',
    },
  },
  'NijiSanji': {
    character: 'sanji',
    type: { en: 'Brother he bullies', it: 'Fratello che maltratta' },
    summary: {
      en: 'Niji joins in the abuse of Sanji within the Vinsmoke family.',
      it: 'Niji partecipa ai maltrattamenti di Sanji nella famiglia Vinsmoke.',
    },
  },
  'NijiSanjiHelp': {
    character: 'sanji',
    type: { en: 'Brother he helps escape', it: 'Fratello che aiuta a fuggire' },
    summary: {
      en: 'Niji fights on Cacao Island to help Sanji and Luffy escape.',
      it: 'Niji combatte a Cacao Island per aiutare Sanji e Rufy a fuggire.',
    },
  },
  'NijiJudge': {
    character: 'vinsmoke-judge',
    type: { en: 'Father and commander', it: 'Padre e comandante' },
    summary: {
      en: 'Niji serves under his father Judge in Germa’s military.',
      it: 'Niji serve sotto il comando del padre Judge nell’esercito del Germa.',
    },
  },
  'YonjiSanji': {
    character: 'sanji',
    type: { en: 'Brother he bullies', it: 'Fratello che maltratta' },
    summary: {
      en: 'Yonji joins in the abuse of Sanji within the Vinsmoke family.',
      it: 'Yonji partecipa ai maltrattamenti di Sanji nella famiglia Vinsmoke.',
    },
  },
  'YonjiSanjiHelp': {
    character: 'sanji',
    type: { en: 'Brother he helps escape', it: 'Fratello che aiuta a fuggire' },
    summary: {
      en: 'Yonji fights on Cacao Island to help Sanji and Luffy escape.',
      it: 'Yonji combatte a Cacao Island per aiutare Sanji e Rufy a fuggire.',
    },
  },
  'YonjiJudge': {
    character: 'vinsmoke-judge',
    type: { en: 'Father and commander', it: 'Padre e comandante' },
    summary: {
      en: 'Yonji serves under his father Judge in Germa’s military.',
      it: 'Yonji serve sotto il comando del padre Judge nell’esercito del Germa.',
    },
  },
  'yonjiReiju': {
    character: 'vinsmoke-reiju',
    type: { en: 'Older sister', it: 'Sorella maggiore' },
    summary: {
      en: 'Reiju kicks Yonji off his ship when he refuses to help Luffy.',
      it: 'Reiju butta Yonji giù dalla nave quando lui rifiuta di aiutare Rufy.',
    },
  },
  'soraSanji': {
    character: 'sanji',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'Sora treasures the food Sanji makes for her and protects his capacity for compassion.',
      it: 'Sora apprezza il cibo che Sanji prepara per lei e protegge la sua capacità di provare compassione.',
    },
  },
  'soraJudge': {
    character: 'vinsmoke-judge',
    type: { en: 'Husband she opposes', it: 'Marito a cui si oppone' },
    summary: {
      en: 'Sora takes a dangerous drug to resist Judge’s plan to remove their sons’ emotions.',
      it: 'Sora prende un farmaco pericoloso per opporsi al piano di Judge di eliminare i sentimenti dei figli.',
    },
  },
  'soraReiju': {
    character: 'vinsmoke-reiju',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'Reiju visits her bedridden mother Sora and later tells Sanji about her sacrifice.',
      it: 'Reiju visita la madre Sora costretta a letto e in seguito racconta a Sanji il suo sacrificio.',
    },
  },
  'vitoBege': {
    character: 'capone-bege',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Vito follows Bege’s orders and calls him Father.',
      it: 'Vito esegue gli ordini di Bege e lo chiama Padre.',
    },
  },
  'vitoSanji': {
    character: 'sanji',
    type: { en: 'Vinsmoke he admires', it: 'Vinsmoke che ammira' },
    summary: {
      en: 'Vito admires Germa and enthusiastically questions Sanji about his family.',
      it: 'Vito ammira il Germa e fa domande entusiaste a Sanji sulla sua famiglia.',
    },
  },
  'vitoGotti': {
    character: 'gotti',
    type: { en: 'Crewmate', it: 'Compagno di ciurma' },
    summary: {
      en: 'Gotti intervenes when Sanji insults Vito.',
      it: 'Gotti interviene quando Sanji insulta Vito.',
    },
  },
  'pralineAladin': {
    character: 'aladine',
    type: { en: 'Husband', it: 'Marito' },
    summary: {
      en: 'Praline tells Aladine that she would choose him over her mother.',
      it: 'Praline dice ad Aladin che sceglierebbe lui invece di sua madre.',
    },
  },
  'pralineLinlin': {
    character: 'charlotte-linlin',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'Praline is Big Mom’s daughter but puts her marriage before loyalty to her mother.',
      it: 'Praline è figlia di Big Mom ma mette il matrimonio davanti alla lealtà alla madre.',
    },
  },
  'pralineJinbe': {
    character: 'jinbe',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'Praline helps conceal Jinbe’s involvement in the plot against Big Mom.',
      it: 'Praline aiuta a nascondere il coinvolgimento di Jinbe nel piano contro Big Mom.',
    },
  },
  'puddingSanji': {
    character: 'sanji',
    type: { en: 'Arranged fiancé', it: 'Promesso sposo' },
    summary: {
      en: 'Pudding is promised to Sanji in a marriage arranged by their families.',
      it: 'Pudding è promessa a Sanji in un matrimonio organizzato dalle loro famiglie.',
    },
  },
  'puddingSanjiPlot': {
    character: 'sanji',
    type: { en: 'Intended victim', it: 'Vittima designata' },
    summary: {
      en: 'Pudding reveals that she plans to shoot Sanji during their wedding.',
      it: 'Pudding rivela di voler sparare a Sanji durante le nozze.',
    },
  },
  'puddingSanjiLove': {
    character: 'sanji',
    type: { en: 'Man she falls for', it: 'Uomo di cui si innamora' },
    summary: {
      en: 'Sanji calls Pudding’s third eye beautiful, leaving her unable to carry out the assassination.',
      it: 'Sanji trova bello il terzo occhio di Pudding, che non riesce più a portare a termine l’assassinio.',
    },
  },
  'puddingSanjiFarewell': {
    character: 'sanji',
    type: {
      en: 'Man whose farewell memory she removes',
      it: 'Uomo a cui cancella il ricordo dell’addio',
    },
    summary: {
      en: 'Pudding kisses Sanji, removes his memory of the kiss and keeps it as he leaves.',
      it: 'Pudding bacia Sanji, gli cancella il ricordo del bacio e lo conserva mentre lui parte.',
    },
  },
  'puddingLinlin': {
    character: 'charlotte-linlin',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'Big Mom arranges Pudding’s marriage to Sanji for an alliance with Germa.',
      it: 'Big Mom organizza il matrimonio di Pudding con Sanji per allearsi con il Germa.',
    },
  },
  'puddingReiju': {
    character: 'vinsmoke-reiju',
    type: { en: 'Victim', it: 'Vittima' },
    summary: {
      en: 'Pudding shoots Reiju and changes her memories to hide the attack.',
      it: 'Pudding spara a Reiju e ne modifica i ricordi per nascondere l’attacco.',
    },
  },
  'puddingChiffon': {
    character: 'charlotte-chiffon',
    type: { en: 'Sister and fellow baker', it: 'Sorella e compagna in cucina' },
    summary: {
      en: 'Pudding recruits Chiffon to bake a replacement wedding cake and save Sanji’s group.',
      it: 'Pudding chiede a Chiffon di preparare una nuova torta nuziale per salvare il gruppo di Sanji.',
    },
  },
  'puddingTeach': {
    character: 'marshall-d-teach',
    type: { en: 'Captor', it: 'Carceriere' },
    summary: {
      en: 'Pudding is held aboard Blackbeard’s ship after being taken from Totto Land.',
      it: 'Pudding è prigioniera sulla nave di Barbanera dopo essere stata portata via da Totto Land.',
    },
  },
  'linlinJinbe': {
    character: 'jinbe',
    type: {
      en: 'Subordinate seeking to leave',
      it: 'Subordinato che vuole andarsene',
    },
    summary: {
      en: 'Jinbe asks to leave Big Mom’s service and she demands a price for his departure.',
      it: 'Jinbe chiede di lasciare il servizio di Big Mom e lei pretende un prezzo per la sua partenza.',
    },
  },
  'linlinPudding': {
    character: 'charlotte-pudding',
    type: { en: 'Daughter and intended bride', it: 'Figlia e promessa sposa' },
    summary: {
      en: 'Big Mom uses Pudding’s marriage to secure Germa’s military power.',
      it: 'Big Mom usa il matrimonio di Pudding per ottenere la forza militare del Germa.',
    },
  },
  'linlinCarmel': {
    character: 'carmel',
    type: { en: 'Childhood guardian', it: 'Tutrice d’infanzia' },
    summary: {
      en: 'Carmel takes in the young Linlin after her parents leave her on Elbaph.',
      it: 'Carmel accoglie Linlin bambina dopo che i genitori la lasciano a Elbaf.',
    },
  },
  'linlinStreusen': {
    character: 'streusen',
    type: {
      en: 'Partner in building her country',
      it: 'Compagno nella fondazione del suo paese',
    },
    summary: {
      en: 'Streusen approaches Linlin after Carmel disappears and offers to build her dream country.',
      it: 'Streusen avvicina Linlin dopo la scomparsa di Carmel e propone di costruire il paese dei suoi sogni.',
    },
  },
  'linlinKaido': {
    character: 'kaido',
    type: { en: 'Pirate ally', it: 'Alleato pirata' },
    summary: {
      en: 'Big Mom and Kaido agree to form a pirate alliance after fighting in Wano.',
      it: 'Big Mom e Kaido decidono di allearsi dopo essersi affrontati a Wano.',
    },
  },
  'linlinLaw': {
    character: 'trafalgar-law',
    type: { en: 'Opponent who defeats her', it: 'Avversario che la sconfigge' },
    summary: {
      en: 'Law combines his attacks with Kid’s to bring Big Mom down from Onigashima.',
      it: 'Law combina i suoi attacchi con quelli di Kidd per far precipitare Big Mom da Onigashima.',
    },
  },
  'linlinKid': {
    character: 'eustass-kid',
    type: { en: 'Opponent who defeats her', it: 'Avversario che la sconfigge' },
    summary: {
      en: 'Kid fights alongside Law and drives Big Mom from the battlefield.',
      it: 'Kidd combatte insieme a Law e fa precipitare Big Mom dal campo di battaglia.',
    },
  },
  'peroLinlin': {
    character: 'charlotte-linlin',
    type: { en: 'Mother and captain', it: 'Madre e capitana' },
    summary: {
      en: 'Perospero serves his mother Big Mom as her eldest son and minister of candy.',
      it: 'Perospero serve la madre Big Mom come primogenito e ministro delle caramelle.',
    },
  },
  'peroPedro': {
    character: 'pedro',
    type: { en: 'Opponent who wounds him', it: 'Avversario che lo ferisce' },
    summary: {
      en: 'Pedro blows himself up beside Perospero, costing Perospero an arm.',
      it: 'Pedro si fa esplodere accanto a Perospero, che perde un braccio.',
    },
  },
  'peroCarrot': {
    character: 'carrot',
    type: {
      en: 'Opponent seeking revenge',
      it: 'Avversaria in cerca di vendetta',
    },
    summary: {
      en: 'Carrot attacks Perospero with Wanda over Pedro’s death.',
      it: 'Carrot attacca Perospero con Wanda per la morte di Pedro.',
    },
  },
  'peroNeko': {
    character: 'nekomamushi',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Nekomamushi defeats Perospero in Sulong form to avenge Pedro.',
      it: 'Gatto-vipera sconfigge Perospero in forma Sulong per vendicare Pedro.',
    },
  },
  'crackerLinlin': {
    character: 'charlotte-linlin',
    type: { en: 'Mother and captain', it: 'Madre e capitana' },
    summary: {
      en: 'Cracker fights for his mother Big Mom as one of her Sweet Commanders.',
      it: 'Cracker combatte per la madre Big Mom come uno dei suoi Sweet Commander.',
    },
  },
  'crackerLuffy': {
    character: 'monkey-d-luffy',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Cracker attacks Luffy in the Seducing Woods with his biscuit soldiers.',
      it: 'Cracker attacca Rufy nella Foresta della Seduzione con i suoi soldati di biscotto.',
    },
  },
  'crackerNami': {
    character: 'nami',
    type: {
      en: 'Opponent who weakens his biscuits',
      it: 'Avversaria che indebolisce i biscotti',
    },
    summary: {
      en: 'Nami softens Cracker’s biscuit soldiers with rain so Luffy can eat them.',
      it: 'Nami ammorbidisce con la pioggia i soldati di biscotto di Cracker perché Rufy possa mangiarli.',
    },
  },
  'crackerKuzan': {
    character: 'kuzan',
    type: { en: 'Invader who freezes him', it: 'Invasore che lo congela' },
    summary: {
      en: 'Kuzan freezes Cracker during the raid on Chocolate Town.',
      it: 'Kuzan congela Cracker durante l’incursione a Chocolate Town.',
    },
  },
  'bruleeCarrot': {
    character: 'carrot',
    type: { en: 'Captive', it: 'Prigioniera' },
    summary: {
      en: 'Brûlée imprisons Carrot inside the Mirro-World.',
      it: 'Brûlée imprigiona Carrot nel mondo degli specchi.',
    },
  },
  'bruleeCarrotFree': {
    character: 'carrot',
    type: { en: 'Opponent who defeats her', it: 'Avversaria che la sconfigge' },
    summary: {
      en: 'Carrot and Chopper defeat Brûlée and use her power to move through the mirrors.',
      it: 'Carrot e Chopper sconfiggono Brûlée e usano il suo potere per attraversare gli specchi.',
    },
  },
  'bruleeChopper': {
    character: 'tony-tony-chopper',
    type: { en: 'Opponent who captures her', it: 'Avversario che la cattura' },
    summary: {
      en: 'Chopper helps Carrot overpower Brûlée inside her own house.',
      it: 'Chopper aiuta Carrot a sopraffare Brûlée nella sua stessa casa.',
    },
  },
  'bruleeKata': {
    character: 'charlotte-katakuri',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Katakuri rescues Brûlée during the chaos after the wedding.',
      it: 'Katakuri libera Brûlée nel caos dopo le nozze.',
    },
  },
  'bruleeKataPast': {
    character: 'charlotte-katakuri',
    type: { en: 'Brother who protected her', it: 'Fratello che la proteggeva' },
    summary: {
      en: 'Brûlée knows Katakuri’s hidden habits and remembers how he avenged the attack that scarred her.',
      it: 'Brûlée conosce le abitudini nascoste di Katakuri e ricorda come vendicò l’aggressione che le lasciò la cicatrice.',
    },
  },
  'kataLinlin': {
    character: 'charlotte-linlin',
    type: { en: 'Mother and captain', it: 'Madre e capitana' },
    summary: {
      en: 'Katakuri protects Big Mom’s tea party as one of her Sweet Commanders.',
      it: 'Katakuri protegge il Tea Party di Big Mom come uno dei suoi Sweet Commander.',
    },
  },
  'kataLuffy': {
    character: 'monkey-d-luffy',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Katakuri fights Luffy inside the Mirro-World to stop his escape.',
      it: 'Katakuri affronta Rufy nel mondo degli specchi per impedirgli di fuggire.',
    },
  },
  'kataLuffyRespect': {
    character: 'monkey-d-luffy',
    type: { en: 'Respected opponent', it: 'Avversario rispettato' },
    summary: {
      en: 'Katakuri wounds himself to cancel Flampe’s interference and faces Luffy as an equal.',
      it: 'Katakuri si ferisce per compensare l’intervento di Flampe e affronta Rufy alla pari.',
    },
  },
  'kataLuffyEnd': {
    character: 'monkey-d-luffy',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Katakuri asks whether Luffy will return to defeat Big Mom, then falls after their duel.',
      it: 'Katakuri chiede a Rufy se tornerà per sconfiggere Big Mom, poi cade dopo il duello.',
    },
  },
  'kataBrulee': {
    character: 'charlotte-brulee',
    type: { en: 'Sister he protects', it: 'Sorella che protegge' },
    summary: {
      en: 'Katakuri rescues Brûlée from the intruders after the wedding.',
      it: 'Katakuri libera Brûlée dagli intrusi dopo le nozze.',
    },
  },
  'kataBruleePast': {
    character: 'charlotte-brulee',
    type: {
      en: 'Sister who knows his secret',
      it: 'Sorella che conosce il suo segreto',
    },
    summary: {
      en: 'Brûlée tends Katakuri after the duel and reveals that she always knew he lay on his back in private.',
      it: 'Brûlée cura Katakuri dopo il duello e rivela di aver sempre saputo che in privato si sdraiava sulla schiena.',
    },
  },
  'chiffonBege': {
    character: 'capone-bege',
    type: { en: 'Husband', it: 'Marito' },
    summary: {
      en: 'Chiffon lives with Bege and their child aboard his ship.',
      it: 'Chiffon vive con Bege e il loro bambino sulla sua nave.',
    },
  },
  'chiffonLola': {
    character: 'lola',
    type: { en: 'Twin sister', it: 'Sorella gemella' },
    summary: {
      en: 'Chiffon tells Nami that Lola is her twin and that she helped her leave Totto Land.',
      it: 'Chiffon racconta a Nami che Lola è sua gemella e che l’ha aiutata a lasciare Totto Land.',
    },
  },
  'chiffonLinlin': {
    character: 'charlotte-linlin',
    type: { en: 'Abusive mother', it: 'Madre violenta' },
    summary: {
      en: 'Big Mom mistreats Chiffon because she resembles Lola, who refused an arranged marriage.',
      it: 'Big Mom maltratta Chiffon perché somiglia a Lola, che ha rifiutato un matrimonio combinato.',
    },
  },
  'chiffonPudding': {
    character: 'charlotte-pudding',
    type: { en: 'Sister and fellow baker', it: 'Sorella e compagna in cucina' },
    summary: {
      en: 'Chiffon helps Pudding make a replacement cake to save Nami and the others.',
      it: 'Chiffon aiuta Pudding a preparare una nuova torta per salvare Nami e gli altri.',
    },
  },
  'chiffonPound': {
    character: 'pound',
    type: { en: 'Father she reunites with', it: 'Padre che ritrova' },
    summary: {
      en: 'Chiffon and Lola recognise Pound as their father and reunite with him.',
      it: 'Chiffon e Lola riconoscono Pound come loro padre e si ricongiungono a lui.',
    },
  },
  'smoothieLinlin': {
    character: 'charlotte-linlin',
    type: { en: 'Mother and captain', it: 'Madre e capitana' },
    summary: {
      en: 'Smoothie serves Big Mom as one of her Sweet Commanders.',
      it: 'Smoothie serve Big Mom come uno dei suoi Sweet Commander.',
    },
  },
  'smoothieOpera': {
    character: 'charlotte-opera',
    type: { en: 'Brother she confronts', it: 'Fratello che affronta' },
    summary: {
      en: 'Smoothie blames Opera for lying about the prisoners’ deaths while their mother rages.',
      it: 'Smoothie rimprovera Opera per aver mentito sulla morte dei prigionieri mentre la madre è in preda alla furia.',
    },
  },
  'ovenLinlin': {
    character: 'charlotte-linlin',
    type: { en: 'Mother and captain', it: 'Madre e capitana' },
    summary: {
      en: 'Oven helps carry out Big Mom’s plot against the Vinsmoke family.',
      it: 'Oven contribuisce al piano di Big Mom contro la famiglia Vinsmoke.',
    },
  },
  'ovenChiffon': {
    character: 'charlotte-chiffon',
    type: { en: 'Sister he attacks', it: 'Sorella che aggredisce' },
    summary: {
      en: 'Oven attacks Chiffon for helping the enemies of their mother.',
      it: 'Oven aggredisce Chiffon per aver aiutato i nemici della madre.',
    },
  },
  'ovenPound': {
    character: 'pound',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Pound interrupts Oven’s attack on Bege’s ship so Chiffon can escape.',
      it: 'Pound interrompe l’attacco di Oven alla nave di Bege perché Chiffon possa fuggire.',
    },
  },
  'ovenKata': {
    character: 'charlotte-katakuri',
    type: {
      en: 'Brother he seeks to avenge',
      it: 'Fratello che vuole vendicare',
    },
    summary: {
      en: 'Oven refuses to forgive Luffy for defeating Katakuri.',
      it: 'Oven rifiuta di perdonare Rufy per aver sconfitto Katakuri.',
    },
  },
  'daifukuLinlin': {
    character: 'charlotte-linlin',
    type: { en: 'Mother and captain', it: 'Madre e capitana' },
    summary: {
      en: 'Daifuku helps Big Mom’s family attack the Vinsmokes at the wedding.',
      it: 'Daifuku aiuta la famiglia di Big Mom ad attaccare i Vinsmoke alle nozze.',
    },
  },
  'daifukuPudding': {
    character: 'charlotte-pudding',
    type: { en: 'Sister he strikes', it: 'Sorella che colpisce' },
    summary: {
      en: 'Daifuku strikes Pudding for failing to shoot Sanji and takes her place in the fight.',
      it: 'Daifuku colpisce Pudding perché non ha sparato a Sanji e prende il suo posto nello scontro.',
    },
  },
  'daifukuCarrot': {
    character: 'carrot',
    type: { en: 'Opponent', it: 'Avversaria' },
    summary: {
      en: 'Carrot uses Sulong to disable the fleet Daifuku commands.',
      it: 'Carrot usa la forma Sulong per mettere fuori uso la flotta comandata da Daifuku.',
    },
  },
  'montLinlin': {
    character: 'charlotte-linlin',
    type: { en: 'Mother and captain', it: 'Madre e capitana' },
    summary: {
      en: 'Mont-d’Or imprisons Luffy and Nami in his book for Big Mom.',
      it: 'Mont d’Or imprigiona Rufy e Nami nel suo libro per Big Mom.',
    },
  },
  'montLuffy': {
    character: 'monkey-d-luffy',
    type: {
      en: 'Opponent he imprisoned',
      it: 'Avversario che ha imprigionato',
    },
    summary: {
      en: 'Mont-d’Or traps Luffy inside a book after the army overwhelms him.',
      it: 'Mont d’Or rinchiude Rufy in un libro dopo che l’esercito lo ha sopraffatto.',
    },
  },
  'montNami': {
    character: 'nami',
    type: {
      en: 'Opponent he imprisoned',
      it: 'Avversaria che ha imprigionato',
    },
    summary: {
      en: 'Mont-d’Or keeps Nami in the same book prison as Luffy.',
      it: 'Mont d’Or tiene Nami nella stessa prigione di libri di Rufy.',
    },
  },
  'streusenLinlin': {
    character: 'charlotte-linlin',
    type: {
      en: 'Captain and childhood partner',
      it: 'Capitana e compagna fin dall’infanzia',
    },
    summary: {
      en: 'Streusen offers to help the young Linlin build a country after Carmel disappears.',
      it: 'Streusen propone alla piccola Linlin di aiutarla a costruire un paese dopo la scomparsa di Carmel.',
    },
  },
  'carmelLinlin': {
    character: 'charlotte-linlin',
    type: { en: 'Child in her care', it: 'Bambina affidata alle sue cure' },
    summary: {
      en: 'Carmel shelters Linlin after her parents abandon her on Elbaph.',
      it: 'Carmel accoglie Linlin dopo che i genitori la abbandonano a Elbaf.',
    },
  },
  'carmelLinlinSale': {
    character: 'charlotte-linlin',
    type: { en: 'Child she plans to sell', it: 'Bambina che vuole vendere' },
    summary: {
      en: 'Carmel plans to sell Linlin to the World Government while pretending to care for her.',
      it: 'Carmel vuole vendere Linlin al Governo Mondiale mentre finge di prendersene cura.',
    },
  },
  'carmelJarul': {
    character: 'jarul',
    type: { en: 'Giant she persuades', it: 'Gigante che convince' },
    summary: {
      en: 'Carmel persuades Jarul to spare Linlin and promises to take her away from Elbaph.',
      it: 'Carmel convince Jarul a risparmiare Linlin e promette di portarla via da Elbaf.',
    },
  },
  'gerdHajrudin': {
    character: 'hajrudin',
    type: { en: 'Childhood friend', it: 'Amico d’infanzia' },
    summary: {
      en: 'Gerd watches Hajrudin train to become a warrior while they are children on Elbaph.',
      it: 'Gerd guarda Hajrudin allenarsi per diventare un guerriero quando sono bambini a Elbaf.',
    },
  },
  'gerdLinlin': {
    character: 'charlotte-linlin',
    type: { en: 'Childhood playmate', it: 'Compagna di giochi d’infanzia' },
    summary: {
      en: 'Gerd plays with the young Linlin and tells her about Elbaph’s customs.',
      it: 'Gerd gioca con la piccola Linlin e le racconta le usanze di Elbaf.',
    },
  },
  'gerdHajrudinCaptain': {
    character: 'hajrudin',
    type: {
      en: 'Captain and childhood friend',
      it: 'Capitano e amico d’infanzia',
    },
    summary: {
      en: 'Gerd sails under Hajrudin as the doctor of the New Giant Warrior Pirates.',
      it: 'Gerd naviga sotto il comando di Hajrudin come medico dei Nuovi Pirati Guerrieri Giganti.',
    },
  },
  'gerdGoldberg': {
    character: 'goldberg',
    type: { en: 'Crewmate', it: 'Compagno di ciurma' },
    summary: {
      en: 'Gerd searches Elbaph with Goldberg and discusses Road’s behaviour with him.',
      it: 'Gerd perlustra Elbaf con Goldberg e discute con lui del comportamento di Road.',
    },
  },
  'gerdRoad': {
    character: 'road',
    type: {
      en: 'Crewmate she distrusts',
      it: 'Compagno di ciurma di cui diffida',
    },
    summary: {
      en: 'Gerd calls Road a disgrace and objects to the way he treats other people.',
      it: 'Gerd considera Road una vergogna e contesta il modo in cui tratta gli altri.',
    },
  },
  'jarulJorul': {
    character: 'jorul',
    type: { en: 'Lifelong comrade', it: 'Compagno di una vita' },
    summary: {
      en: 'Jarul and Jorul are former co-captains revered by the giants of Elbaph.',
      it: 'Jarul e Jorul sono ex capitani venerati dai giganti di Elbaf.',
    },
  },
  'jarulJorulDead': {
    character: 'jorul',
    type: { en: 'Comrade he mourns', it: 'Compagno che piange' },
    summary: {
      en: 'Jarul mourns Jorul after Linlin fatally injures his companion of three hundred years.',
      it: 'Jarul piange Jorul dopo che Linlin ferisce mortalmente il suo compagno di trecento anni.',
    },
  },
  'jarulLinlin': {
    character: 'charlotte-linlin',
    type: { en: 'Child he spares', it: 'Bambina che risparmia' },
    summary: {
      en: 'Jarul wants revenge for Jorul but spares Linlin at Carmel’s request.',
      it: 'Jarul vuole vendicare Jorul ma risparmia Linlin su richiesta di Carmel.',
    },
  },
  'jarulLoki': {
    character: 'loki',
    type: {
      en: 'Prince accused of attacking him',
      it: 'Principe accusato di averlo aggredito',
    },
    summary: {
      en: 'Jarul says that Loki’s attack drove a sword through his head fourteen years earlier.',
      it: 'Jarul racconta che l’attacco di Loki gli ha conficcato una spada in testa quattordici anni prima.',
    },
  },
  'jorulJarul': {
    character: 'jarul',
    type: { en: 'Lifelong comrade', it: 'Compagno di una vita' },
    summary: {
      en: 'Jorul shares the honour of former Giant Warrior captain with Jarul.',
      it: 'Jorul condivide con Jarul l’onore di essere un ex capitano dei Pirati Guerrieri Giganti.',
    },
  },
  'jorulLinlin': {
    character: 'charlotte-linlin',
    type: { en: 'Attacker', it: 'Aggressora' },
    summary: {
      en: 'Linlin throws Jorul to the ground during her rampage, fatally injuring him.',
      it: 'Linlin scaraventa Jorul a terra durante la sua furia, ferendolo mortalmente.',
    },
  },
  'mjosOtohime': {
    character: 'otohime',
    type: {
      en: 'Queen who changed his outlook',
      it: 'Regina che gli ha fatto cambiare idea',
    },
    summary: {
      en: 'Mjosgard credits Otohime with teaching him humanity.',
      it: 'Mjosgard riconosce a Otohime il merito di avergli insegnato l’umanità.',
    },
  },
  'mjosShira': {
    character: 'shirahoshi',
    type: { en: 'Princess he protects', it: 'Principessa che protegge' },
    summary: {
      en: 'Mjosgard stops Charlos from enslaving Shirahoshi at the Reverie.',
      it: 'Mjosgard impedisce a Charlos di ridurre Shirahoshi in schiavitù alla Reverie.',
    },
  },
  'mjosCharlos': {
    character: 'saint-charloss',
    type: { en: 'Noble he opposes', it: 'Nobile a cui si oppone' },
    summary: {
      en: 'Mjosgard strikes Charlos to stop his attack on Shirahoshi.',
      it: 'Mjosgard colpisce Charlos per fermare il suo attacco a Shirahoshi.',
    },
  },
  'mjosGarling': {
    character: 'figarland-garling',
    type: { en: 'Executioner', it: 'Carnefice' },
    summary: {
      en: 'Garling has Mjosgard executed for protecting the fish-men.',
      it: 'Garling fa giustiziare Mjosgard per aver protetto gli uomini-pesce.',
    },
  },
  'belo-bettymorley': {
    character: 'morley',
    type: {
      en: 'Revolutionary comrade',
      it: 'Compagno dell’Armata Rivoluzionaria',
    },
    summary: {
      en: 'Belo Betty works with Morley to help the people of Lulusia fight off the pirates.',
      it: 'Belo Betty collabora con Morley per aiutare gli abitanti di Lulusia a respingere i pirati.',
    },
  },
  'belo-bettykarasu': {
    character: 'karasu',
    type: {
      en: 'Revolutionary comrade',
      it: 'Compagno dell’Armata Rivoluzionaria',
    },
    summary: {
      en: 'Belo Betty works with Karasu to help the people of Lulusia fight off the pirates.',
      it: 'Belo Betty collabora con Karasu per aiutare gli abitanti di Lulusia a respingere i pirati.',
    },
  },
  'belo-bettylindbergh': {
    character: 'lindbergh',
    type: {
      en: 'Revolutionary comrade',
      it: 'Compagno dell’Armata Rivoluzionaria',
    },
    summary: {
      en: 'Belo Betty works with Lindbergh to help the people of Lulusia fight off the pirates.',
      it: 'Belo Betty collabora con Lindbergh per aiutare gli abitanti di Lulusia a respingere i pirati.',
    },
  },
  'morleybelo-betty': {
    character: 'belo-betty',
    type: {
      en: 'Revolutionary comrade',
      it: 'Compagno dell’Armata Rivoluzionaria',
    },
    summary: {
      en: 'Morley works with Belo Betty to help the people of Lulusia fight off the pirates.',
      it: 'Morley collabora con Belo Betty per aiutare gli abitanti di Lulusia a respingere i pirati.',
    },
  },
  'morleykarasu': {
    character: 'karasu',
    type: {
      en: 'Revolutionary comrade',
      it: 'Compagno dell’Armata Rivoluzionaria',
    },
    summary: {
      en: 'Morley works with Karasu to help the people of Lulusia fight off the pirates.',
      it: 'Morley collabora con Karasu per aiutare gli abitanti di Lulusia a respingere i pirati.',
    },
  },
  'morleylindbergh': {
    character: 'lindbergh',
    type: {
      en: 'Revolutionary comrade',
      it: 'Compagno dell’Armata Rivoluzionaria',
    },
    summary: {
      en: 'Morley works with Lindbergh to help the people of Lulusia fight off the pirates.',
      it: 'Morley collabora con Lindbergh per aiutare gli abitanti di Lulusia a respingere i pirati.',
    },
  },
  'karasubelo-betty': {
    character: 'belo-betty',
    type: {
      en: 'Revolutionary comrade',
      it: 'Compagno dell’Armata Rivoluzionaria',
    },
    summary: {
      en: 'Karasu works with Belo Betty to help the people of Lulusia fight off the pirates.',
      it: 'Karasu collabora con Belo Betty per aiutare gli abitanti di Lulusia a respingere i pirati.',
    },
  },
  'karasumorley': {
    character: 'morley',
    type: {
      en: 'Revolutionary comrade',
      it: 'Compagno dell’Armata Rivoluzionaria',
    },
    summary: {
      en: 'Karasu works with Morley to help the people of Lulusia fight off the pirates.',
      it: 'Karasu collabora con Morley per aiutare gli abitanti di Lulusia a respingere i pirati.',
    },
  },
  'karasulindbergh': {
    character: 'lindbergh',
    type: {
      en: 'Revolutionary comrade',
      it: 'Compagno dell’Armata Rivoluzionaria',
    },
    summary: {
      en: 'Karasu works with Lindbergh to help the people of Lulusia fight off the pirates.',
      it: 'Karasu collabora con Lindbergh per aiutare gli abitanti di Lulusia a respingere i pirati.',
    },
  },
  'lindberghbelo-betty': {
    character: 'belo-betty',
    type: {
      en: 'Revolutionary comrade',
      it: 'Compagno dell’Armata Rivoluzionaria',
    },
    summary: {
      en: 'Lindbergh works with Belo Betty to help the people of Lulusia fight off the pirates.',
      it: 'Lindbergh collabora con Belo Betty per aiutare gli abitanti di Lulusia a respingere i pirati.',
    },
  },
  'lindberghmorley': {
    character: 'morley',
    type: {
      en: 'Revolutionary comrade',
      it: 'Compagno dell’Armata Rivoluzionaria',
    },
    summary: {
      en: 'Lindbergh works with Morley to help the people of Lulusia fight off the pirates.',
      it: 'Lindbergh collabora con Morley per aiutare gli abitanti di Lulusia a respingere i pirati.',
    },
  },
  'lindberghkarasu': {
    character: 'karasu',
    type: {
      en: 'Revolutionary comrade',
      it: 'Compagno dell’Armata Rivoluzionaria',
    },
    summary: {
      en: 'Lindbergh works with Karasu to help the people of Lulusia fight off the pirates.',
      it: 'Lindbergh collabora con Karasu per aiutare gli abitanti di Lulusia a respingere i pirati.',
    },
  },
  'morleyKuma': {
    character: 'bartholomew-kuma',
    type: { en: 'Comrade being rescued', it: 'Compagno da liberare' },
    summary: {
      en: 'Morley helps rescue Kuma from slavery during the Reverie.',
      it: 'Morley contribuisce a liberare Kuma dalla schiavitù durante la Reverie.',
    },
  },
  'morleyRyo': {
    character: 'ryokugyu',
    type: {
      en: 'Admiral faced in battle',
      it: 'Ammiraglio affrontato in battaglia',
    },
    summary: {
      en: 'Morley fights Ryokugyu in Mary Geoise during the operation to rescue Kuma.',
      it: 'Morley affronta Ryokugyu a Mary Geoise durante l’operazione per liberare Kuma.',
    },
  },
  'karasuKuma': {
    character: 'bartholomew-kuma',
    type: { en: 'Comrade being rescued', it: 'Compagno da liberare' },
    summary: {
      en: 'Karasu helps rescue Kuma and gets him away from Mary Geoise.',
      it: 'Karasu contribuisce a liberare Kuma e a portarlo via da Mary Geoise.',
    },
  },
  'karasuIssho': {
    character: 'issho',
    type: {
      en: 'Admiral faced in battle',
      it: 'Ammiraglio affrontato in battaglia',
    },
    summary: {
      en: 'Karasu fights Fujitora while the revolutionaries rescue Kuma.',
      it: 'Karasu affronta Fujitora mentre i rivoluzionari liberano Kuma.',
    },
  },
  'lindKuma': {
    character: 'bartholomew-kuma',
    type: { en: 'Comrade being rescued', it: 'Compagno da liberare' },
    summary: {
      en: 'Lindbergh helps the revolutionary operation to free Kuma at Mary Geoise.',
      it: 'Lindbergh contribuisce all’operazione rivoluzionaria per liberare Kuma a Mary Geoise.',
    },
  },
  'ryoIssho': {
    character: 'issho',
    type: { en: 'Fellow admiral', it: 'Collega ammiraglio' },
    summary: {
      en: 'Ryokugyu chats with Fujitora instead of obeying the order to drive him out of Mary Geoise.',
      it: 'Ryokugyu conversa con Fujitora invece di eseguire l’ordine di cacciarlo da Mary Geoise.',
    },
  },
  'ryoSaka': {
    character: 'sakazuki',
    type: { en: 'Superior', it: 'Superiore' },
    summary: {
      en: 'Sakazuki orders Ryokugyu to remove Fujitora from Mary Geoise.',
      it: 'Sakazuki ordina a Ryokugyu di allontanare Fujitora da Mary Geoise.',
    },
  },
  'ryoMomo': {
    character: 'momonosuke',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Momonosuke fights Ryokugyu to defend Wano from the admiral’s attack.',
      it: 'Momonosuke affronta Ryokugyu per difendere Wano dall’attacco dell’ammiraglio.',
    },
  },
  'ryoShanks': {
    character: 'shanks',
    type: {
      en: 'Pirate who forces his retreat',
      it: 'Pirata che lo costringe alla ritirata',
    },
    summary: {
      en: 'Shanks’ Haki makes Ryokugyu abandon his attack on Wano.',
      it: 'L’Ambizione di Shanks costringe Ryokugyu a rinunciare all’attacco a Wano.',
    },
  },
  'ryoWeevil': {
    character: 'edward-weevil',
    type: { en: 'Pirate he captures', it: 'Pirata che cattura' },
    summary: {
      en: 'Ryokugyu captures Weevil after Weevil defends Sphinx from the Marines.',
      it: 'Ryokugyu cattura Weevil dopo che lui difende Sphinx dalla Marina.',
    },
  },
  'ryoIsshoConflict': {
    character: 'issho',
    type: { en: 'Colleague he clashes with', it: 'Collega con cui si scontra' },
    summary: {
      en: 'Ryokugyu turns on Fujitora after Fujitora helps slaves escape from Mary Geoise.',
      it: 'Ryokugyu si scontra con Fujitora dopo che lui aiuta gli schiavi a fuggire da Mary Geoise.',
    },
  },
  'sterrySabo': {
    character: 'sabo',
    type: { en: 'Adoptive brother', it: 'Fratello adottivo' },
    summary: {
      en: 'Sterry was adopted into Sabo’s family before becoming king of Goa.',
      it: 'Sterry è stato adottato dalla famiglia di Sabo prima di diventare re di Goa.',
    },
  },
  'sterryGarp': {
    character: 'monkey-d-garp',
    type: {
      en: 'Marine he addresses as a subject',
      it: 'Marine che tratta da suddito',
    },
    summary: {
      en: 'Sterry insists that Garp is his subject when they meet on the way to the Reverie.',
      it: 'Sterry insiste sul fatto che Garp sia suo suddito quando si incontrano sulla via della Reverie.',
    },
  },
  'imCobra': {
    character: 'nefertari-cobra',
    type: {
      en: 'King whose death Im orders',
      it: 'Re di cui Im ordina la morte',
    },
    summary: {
      en: 'Im confronts Cobra about the Nefertari family and orders his death after revealing the Empty Throne’s secret.',
      it: 'Im affronta Cobra sulla famiglia Nefertari e ne ordina la morte dopo aver rivelato il segreto del Trono Vuoto.',
    },
  },
  'imSabo': {
    character: 'sabo',
    type: { en: 'Witness Im attacks', it: 'Testimone che Im attacca' },
    summary: {
      en: 'Im attacks Sabo when he discovers the secret audience with Cobra.',
      it: 'Im attacca Sabo quando scopre l’udienza segreta con Cobra.',
    },
  },
  'imSaturn': {
    character: 'jaygarcia-saturn',
    type: { en: 'Subordinate', it: 'Subordinato' },
    summary: {
      en: 'Saturn serves Im as one of the Five Elders.',
      it: 'Saturn serve Im come uno dei Cinque Astri di Saggezza.',
    },
  },
  'imSaturnDead': {
    character: 'jaygarcia-saturn',
    type: { en: 'Subordinate Im kills', it: 'Subordinato che Im uccide' },
    summary: {
      en: 'Im punishes Saturn for the failure on Egghead, leaving him dead.',
      it: 'Im punisce Saturn per il fallimento a Egghead, provocandone la morte.',
    },
  },
  'imGarling': {
    character: 'figarland-garling',
    type: { en: 'New Elder', it: 'Nuovo Astro di Saggezza' },
    summary: {
      en: 'Garling receives Saturn’s place among the Five Elders.',
      it: 'Garling riceve il posto di Saturn tra i Cinque Astri di Saggezza.',
    },
  },
  'sheepSanji': {
    character: 'sanji',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Sanji knocks Sheepshead down while defending his friends.',
      it: 'Sanji abbatte Sheepshead mentre difende i suoi amici.',
    },
  },
  'sheepJack': {
    character: 'jack',
    type: { en: 'Commander', it: 'Comandante' },
    summary: {
      en: 'Sheepshead announces Jack’s authority during the attack on Zou.',
      it: 'Sheepshead annuncia l’autorità di Jack durante l’attacco a Zou.',
    },
  },
  'sheepJackPunish': {
    character: 'jack',
    type: { en: 'Commander who punishes him', it: 'Comandante che lo punisce' },
    summary: {
      en: 'Jack has Sheepshead beaten after his unsuccessful search for the ninja.',
      it: 'Jack fa picchiare Sheepshead dopo la ricerca fallita del ninja.',
    },
  },
  'weevilBakkin': {
    character: 'bakkin',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'Weevil follows his mother’s orders to hunt Whitebeard’s former allies for an inheritance.',
      it: 'Weevil segue gli ordini della madre e dà la caccia agli ex alleati di Barbabianca per l’eredità.',
    },
  },
  'weevilNewgate': {
    character: 'edward-newgate',
    type: { en: 'Claimed father', it: 'Padre dichiarato' },
    summary: {
      en: 'Weevil claims to be Whitebeard’s son; his parentage is disputed.',
      it: 'Weevil sostiene di essere figlio di Barbabianca, ma la sua discendenza è contestata.',
    },
  },
  'weevilRyo': {
    character: 'ryokugyu',
    type: { en: 'Captor', it: 'Carceriere' },
    summary: {
      en: 'Ryokugyu captures Weevil after he defends Whitebeard’s home village.',
      it: 'Ryokugyu cattura Weevil dopo che lui difende il villaggio natale di Barbabianca.',
    },
  },
  'bakkinWeevil': {
    character: 'edward-weevil',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'Bakkin directs Weevil to pursue Whitebeard’s alleged fortune.',
      it: 'Bakkin indirizza Weevil alla ricerca della presunta fortuna di Barbabianca.',
    },
  },
  'bakkinNewgate': {
    character: 'edward-newgate',
    type: { en: 'Claimed former lover', it: 'Ex amante dichiarato' },
    summary: {
      en: 'Bakkin claims Whitebeard loved her and that Weevil is his son.',
      it: 'Bakkin sostiene che Barbabianca l’amasse e che Weevil sia suo figlio.',
    },
  },
  'bakkinStussy': {
    character: 'stussy',
    type: { en: 'Clone', it: 'Clone' },
    summary: {
      en: 'Stussy is identified as a clone of the former Rocks pirate Buckingham Stussy.',
      it: 'Stussy viene identificata come un clone dell’ex pirata di Rocks Buckingham Stussy.',
    },
  },
  'bakkinMarco': {
    character: 'marco',
    type: { en: 'Pirate she asks for help', it: 'Pirata a cui chiede aiuto' },
    summary: {
      en: 'Bakkin asks Marco to rescue Weevil after Ryokugyu takes him away.',
      it: 'Bakkin chiede a Marco di salvare Weevil dopo che Ryokugyu lo ha portato via.',
    },
  },
  'zuneshaMomo': {
    character: 'momonosuke',
    type: { en: 'Voice it obeys', it: 'Voce a cui obbedisce' },
    summary: {
      en: 'Zunesha asks Momonosuke for permission to fight and follows his order to repel Jack.',
      it: 'Zunesha chiede a Momonosuke il permesso di combattere ed esegue il suo ordine di respingere Jack.',
    },
  },
  'zuneshaJack': {
    character: 'jack',
    type: { en: 'Attacker', it: 'Aggressore' },
    summary: {
      en: 'Jack’s fleet fires on Zunesha’s legs until it destroys the ships with its trunk.',
      it: 'La flotta di Jack spara alle zampe di Zunesha finché l’elefante distrugge le navi con la proboscide.',
    },
  },
  'zuneshaChopper': {
    character: 'tony-tony-chopper',
    type: { en: 'Doctor', it: 'Medico' },
    summary: {
      en: 'Chopper helps treat Zunesha’s injured leg after Jack’s attack.',
      it: 'Chopper contribuisce a curare la zampa ferita di Zunesha dopo l’attacco di Jack.',
    },
  },
  'zuneshaLuffy': {
    character: 'monkey-d-luffy',
    type: {
      en: 'Pirate whose heartbeat it recognises',
      it: 'Pirata di cui riconosce il battito',
    },
    summary: {
      en: 'Zunesha hears the Drums of Liberation from Luffy and announces Joy Boy’s return.',
      it: 'Zunesha sente i Tamburi della Liberazione provenire da Rufy e annuncia il ritorno di Joy Boy.',
    },
  },
  'shishiInu': {
    character: 'inuarashi',
    type: { en: 'Duke', it: 'Duca' },
    summary: {
      en: 'Shishilian serves Inuarashi as captain of his musketeers.',
      it: 'Shishilian serve Cane-tempesta come capitano dei suoi moschettieri.',
    },
  },
  'shishiLuffy': {
    character: 'monkey-d-luffy',
    type: { en: 'Benefactor', it: 'Benefattore' },
    summary: {
      en: 'Shishilian thanks Luffy’s crew for saving Mokomo and welcomes him to the duke’s room.',
      it: 'Shishilian ringrazia la ciurma di Rufy per aver salvato Mokomo e lo accompagna dal duca.',
    },
  },
  'gottiBege': {
    character: 'capone-bege',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Gotti defends Bege when Luffy threatens to punch him.',
      it: 'Gotti difende Bege quando Rufy minaccia di prenderlo a pugni.',
    },
  },
  'gottiVito': {
    character: 'vito',
    type: { en: 'Crewmate', it: 'Compagno di ciurma' },
    summary: {
      en: 'Gotti demands an apology after Sanji insults Vito.',
      it: 'Gotti pretende delle scuse dopo che Sanji insulta Vito.',
    },
  },
  'gottiLola': {
    character: 'lola',
    type: { en: 'Wife', it: 'Moglie' },
    summary: {
      en: 'Gotti marries Lola after rescuing her in Dressrosa.',
      it: 'Gotti sposa Lola dopo averla salvata a Dressrosa.',
    },
  },
  'randCarrot': {
    character: 'carrot',
    type: { en: 'Opponent', it: 'Avversaria' },
    summary: {
      en: 'Randolph attacks Carrot in the Seducing Woods and she brings down his crane with Electro.',
      it: 'Randolph attacca Carrot nella Foresta della Seduzione e lei abbatte la sua gru con l’Elettro.',
    },
  },
  'randCracker': {
    character: 'charlotte-cracker',
    type: { en: 'Superior he fears', it: 'Superiore che teme' },
    summary: {
      en: 'Randolph apologises to Cracker and blames his crane for getting in the way.',
      it: 'Randolph si scusa con Cracker e incolpa la sua gru per essersi messo in mezzo.',
    },
  },
  'poundLola': {
    character: 'lola',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'Pound tells Nami that Lola is his daughter and asks about her.',
      it: 'Pound racconta a Nami che Lola è sua figlia e le chiede notizie di lei.',
    },
  },
  'poundLinlin': {
    character: 'charlotte-linlin',
    type: { en: 'Former wife', it: 'Ex moglie' },
    summary: {
      en: 'Big Mom cast Pound out after the birth of his daughters.',
      it: 'Big Mom ha cacciato Pound dopo la nascita delle figlie.',
    },
  },
  'poundChiffon': {
    character: 'charlotte-chiffon',
    type: { en: 'Daughter he protects', it: 'Figlia che protegge' },
    summary: {
      en: 'Pound interrupts Oven to let Chiffon and her family escape by sea.',
      it: 'Pound interrompe Oven per permettere a Chiffon e alla sua famiglia di fuggire via mare.',
    },
  },
  'poundLolaReunion': {
    character: 'lola',
    type: { en: 'Daughter he reunites with', it: 'Figlia che ritrova' },
    summary: {
      en: 'Lola recognises Pound as her father and rejoins him with Chiffon.',
      it: 'Lola riconosce Pound come suo padre e si ricongiunge a lui insieme a Chiffon.',
    },
  },
  'poundChiffonReunion': {
    character: 'charlotte-chiffon',
    type: { en: 'Daughter he reunites with', it: 'Figlia che ritrova' },
    summary: {
      en: 'Chiffon reunites with Pound after recognising proof that he is her father.',
      it: 'Chiffon si ricongiunge a Pound dopo aver riconosciuto la prova che è suo padre.',
    },
  },
  'pedroNeko': {
    character: 'nekomamushi',
    type: { en: 'Ruler', it: 'Sovrano' },
    summary: {
      en: 'Pedro leads the Guardians who serve Nekomamushi in the Whale Forest.',
      it: 'Pedro guida i Guardiani che servono Gatto-vipera nella Foresta Balena.',
    },
  },
  'pedroPekoms': {
    character: 'pekoms',
    type: { en: 'Old companion', it: 'Vecchio compagno' },
    summary: {
      en: 'Pedro knows Pekoms from their earlier voyages and is chosen to keep him in check.',
      it: 'Pedro conosce Pekoms dai loro viaggi precedenti e viene scelto per tenerlo a bada.',
    },
  },
  'pedroCarrot': {
    character: 'carrot',
    type: { en: 'Young companion', it: 'Giovane compagna' },
    summary: {
      en: 'Pedro vouches for Carrot when she joins the journey to rescue Sanji.',
      it: 'Pedro garantisce per Carrot quando si unisce al viaggio per salvare Sanji.',
    },
  },
  'pedroPero': {
    character: 'charlotte-perospero',
    type: {
      en: 'Opponent he attacks with explosives',
      it: 'Avversario che attacca con gli esplosivi',
    },
    summary: {
      en: 'Pedro detonates his explosives beside Perospero to free the Sunny from the candy.',
      it: 'Pedro fa esplodere gli ordigni accanto a Perospero per liberare la Sunny dalle caramelle.',
    },
  },
  'stussyLinlin': {
    character: 'charlotte-linlin',
    type: { en: 'Tea party host', it: 'Ospite del Tea Party' },
    summary: {
      en: 'Stussy attends Big Mom’s tea party among the underworld guests.',
      it: 'Stussy partecipa al Tea Party di Big Mom tra gli invitati della malavita.',
    },
  },
  'stussyFeld': {
    character: 'lu-feld',
    type: { en: 'Victim', it: 'Vittima' },
    summary: {
      en: 'Stussy shoots Lu Feld while trying to seize the Tamatebako for the World Government.',
      it: 'Stussy spara a Lu Feld mentre cerca di prendere il Tamatebako per il Governo Mondiale.',
    },
  },
  'stussyLucci': {
    character: 'rob-lucci',
    type: { en: 'CP0 colleague', it: 'Collega della CP0' },
    summary: {
      en: 'Stussy accompanies Lucci on CP0’s mission to Egghead.',
      it: 'Stussy accompagna Lucci nella missione della CP0 a Egghead.',
    },
  },
  'stussyKaku': {
    character: 'kaku',
    type: { en: 'CP0 colleague', it: 'Collega della CP0' },
    summary: {
      en: 'Stussy travels to Egghead with Kaku as part of CP0’s mission.',
      it: 'Stussy raggiunge Egghead con Kaku per la missione della CP0.',
    },
  },
  'stussyKakuBetray': {
    character: 'kaku',
    type: { en: 'Colleague she incapacitates', it: 'Collega che neutralizza' },
    summary: {
      en: 'Stussy bites Kaku and puts him to sleep, turning against her CP0 partners.',
      it: 'Stussy morde Kaku e lo addormenta, rivoltandosi contro i compagni della CP0.',
    },
  },
  'stussyLucciBetray': {
    character: 'rob-lucci',
    type: { en: 'Colleague she incapacitates', it: 'Collega che neutralizza' },
    summary: {
      en: 'Stussy uses seastone to weaken Lucci and puts him to sleep with a bite.',
      it: 'Stussy usa l’agalmatolite per indebolire Lucci e lo addormenta con un morso.',
    },
  },
  'stussyBakkin': {
    character: 'bakkin',
    type: {
      en: 'Original person she was cloned from',
      it: 'Persona di cui è un clone',
    },
    summary: {
      en: 'Stussy is revealed as MADS’ successful clone of Buckingham Stussy.',
      it: 'Stussy si rivela il clone riuscito di Buckingham Stussy creato dal MADS.',
    },
  },
  'stussyVegapunk': {
    character: 'vegapunk',
    type: { en: 'Scientist she protects', it: 'Scienziato che protegge' },
    summary: {
      en: 'Stussy reveals that she has been helping Vegapunk from inside CP0.',
      it: 'Stussy rivela di aver aiutato Vegapunk dall’interno della CP0.',
    },
  },
  'stussyLucciAttack': {
    character: 'rob-lucci',
    type: { en: 'Attacker', it: 'Aggressore' },
    summary: {
      en: 'Stussy shields Vegapunk from Lucci’s attack and is wounded in his place.',
      it: 'Stussy protegge Vegapunk dall’attacco di Lucci e viene ferita al suo posto.',
    },
  },
  'morgansLinlin': {
    character: 'charlotte-linlin',
    type: { en: 'Tea party host', it: 'Ospite del Tea Party' },
    summary: {
      en: 'Morgans attends Big Mom’s wedding celebration in search of a major story.',
      it: 'Morgans partecipa alle nozze organizzate da Big Mom in cerca di una grande notizia.',
    },
  },
  'morgansLuffy': {
    character: 'monkey-d-luffy',
    type: {
      en: 'Subject of his reporting',
      it: 'Protagonista dei suoi articoli',
    },
    summary: {
      en: 'Morgans presents Luffy as the mastermind of the Whole Cake Island incident.',
      it: 'Morgans presenta Rufy come l’ideatore dell’incidente a Whole Cake Island.',
    },
  },
  'morgansVivi': {
    character: 'nefertari-vivi',
    type: { en: 'Princess he shelters', it: 'Principessa a cui dà rifugio' },
    summary: {
      en: 'Morgans shelters Vivi aboard his airship after her escape from Mary Geoise.',
      it: 'Morgans dà rifugio a Bibi sul suo dirigibile dopo la fuga da Mary Geoise.',
    },
  },
  'morgansWapol': {
    character: 'wapol',
    type: { en: 'Fugitive he shelters', it: 'Fuggitivo a cui dà rifugio' },
    summary: {
      en: 'Wapol hides aboard Morgans’ airship after witnessing the events at Mary Geoise.',
      it: 'Wapol si nasconde sul dirigibile di Morgans dopo aver assistito agli eventi di Mary Geoise.',
    },
  },
  'operaLinlin': {
    character: 'charlotte-linlin',
    type: { en: 'Mother and captain', it: 'Madre e capitana' },
    summary: {
      en: 'Opera guards prisoners for Big Mom and acts on her orders.',
      it: 'Opera sorveglia i prigionieri per Big Mom ed esegue i suoi ordini.',
    },
  },
  'operaNami': {
    character: 'nami',
    type: { en: 'Prisoner he threatens', it: 'Prigioniera che minaccia' },
    summary: {
      en: 'Opera threatens to torture Nami to learn where Lola is hiding.',
      it: 'Opera minaccia di torturare Nami per scoprire dove si nasconde Lola.',
    },
  },
  'operaJinbe': {
    character: 'jinbe',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Jinbe knocks Opera down to free Luffy and Nami.',
      it: 'Jinbe abbatte Opera per liberare Rufy e Nami.',
    },
  },
  'zeusLinlin': {
    character: 'charlotte-linlin',
    type: { en: 'Creator and mistress', it: 'Creatrice e padrona' },
    summary: {
      en: 'Zeus is Big Mom’s thundercloud homie and fights at her command.',
      it: 'Zeus è l’homie nuvola di Big Mom e combatte ai suoi ordini.',
    },
  },
  'zeusNami': {
    character: 'nami',
    type: {
      en: 'Weather sorceress who tempts him',
      it: 'Esperta del clima che lo tenta',
    },
    summary: {
      en: 'Nami lures Zeus away from Big Mom by feeding him thunderclouds.',
      it: 'Nami attira Zeus lontano da Big Mom dandogli da mangiare nuvole temporalesche.',
    },
  },
  'zeusNamiServant': {
    character: 'nami',
    type: { en: 'Mistress', it: 'Padrona' },
    summary: {
      en: 'Zeus lives inside Nami’s Clima-Tact and accepts being her servant.',
      it: 'Zeus vive nel Clima-Tact di Nami e accetta di essere il suo servitore.',
    },
  },
  'zeusLinlinReject': {
    character: 'charlotte-linlin',
    type: { en: 'Creator who discards him', it: 'Creatrice che lo ripudia' },
    summary: {
      en: 'Big Mom replaces Zeus and orders Hera to eat him.',
      it: 'Big Mom sostituisce Zeus e ordina a Hera di mangiarlo.',
    },
  },
  'zeusNamiPartner': {
    character: 'nami',
    type: { en: 'Partner', it: 'Compagna' },
    summary: {
      en: 'Zeus asks to be Nami’s partner and helps her defeat Ulti from inside the Clima-Tact.',
      it: 'Zeus chiede di essere il compagno di Nami e la aiuta a sconfiggere Ulti dall’interno del Clima-Tact.',
    },
  },
  'promLinlin': {
    character: 'charlotte-linlin',
    type: { en: 'Creator and mistress', it: 'Creatrice e padrona' },
    summary: {
      en: 'Prometheus is Big Mom’s sun homie and attacks her enemies with fire.',
      it: 'Prometheus è l’homie sole di Big Mom e attacca i suoi nemici con il fuoco.',
    },
  },
  'promJinbe': {
    character: 'jinbe',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Jinbe uses river water to put out Prometheus’ flames during the pursuit.',
      it: 'Jinbe usa l’acqua del fiume per spegnere le fiamme di Prometheus durante l’inseguimento.',
    },
  },
  'amandeLinlin': {
    character: 'charlotte-linlin',
    type: { en: 'Mother and captain', it: 'Madre e capitana' },
    summary: {
      en: 'Amande marches with the army Big Mom sends against Luffy.',
      it: 'Amande marcia con l’esercito che Big Mom manda contro Rufy.',
    },
  },
  'amandeNami': {
    character: 'nami',
    type: { en: 'Prisoner', it: 'Prigioniera' },
    summary: {
      en: 'Amande takes Lola’s vivre card from Nami after the army captures her.',
      it: 'Amande prende a Nami la vivre card di Lola dopo che l’esercito l’ha catturata.',
    },
  },
  'amandeMont': {
    character: 'charlotte-mont-dor',
    type: {
      en: 'Brother coordinating the pursuit',
      it: 'Fratello che coordina l’inseguimento',
    },
    summary: {
      en: 'Amande reports to Mont-d’Or after the Sunny escapes her ships by flying through the air.',
      it: 'Amande fa rapporto a Mont d’Or dopo che la Sunny sfugge alle sue navi volando.',
    },
  },
  'napLinlin': {
    character: 'charlotte-linlin',
    type: { en: 'Creator and mistress', it: 'Creatrice e padrona' },
    summary: {
      en: 'Napoleon answers Big Mom’s call and becomes her weapon.',
      it: 'Napoleon risponde al richiamo di Big Mom e diventa la sua arma.',
    },
  },
  'napBrook': {
    character: 'brook',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Napoleon strikes Brook when the skeleton charges at Big Mom.',
      it: 'Napoleon colpisce Brook quando lo scheletro si lancia contro Big Mom.',
    },
  },
  'feldStussy': {
    character: 'stussy',
    type: { en: 'Attacker', it: 'Aggressora' },
    summary: {
      en: 'Stussy shoots Lu Feld as he reaches for the Tamatebako.',
      it: 'Stussy spara a Lu Feld mentre lui cerca di aprire il Tamatebako.',
    },
  },
  'feldLinlin': {
    character: 'charlotte-linlin',
    type: { en: 'Tea party host', it: 'Ospite del Tea Party' },
    summary: {
      en: 'Lu Feld attends Big Mom’s tea party as one of the invited underworld bosses.',
      it: 'Lu Feld partecipa al Tea Party di Big Mom come uno dei capi della malavita invitati.',
    },
  },
  'compoteLinlin': {
    character: 'charlotte-linlin',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'Compote is introduced at the tea party as Big Mom’s eldest daughter.',
      it: 'Compote viene presentata al Tea Party come la primogenita di Big Mom.',
    },
  },
  'compotePero': {
    character: 'charlotte-perospero',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Compote questions Perospero about the replacement cake during their mother’s rampage.',
      it: 'Compote interroga Perospero sulla torta sostitutiva durante la furia della madre.',
    },
  },
  'nussNiji': {
    character: 'vinsmoke-niji',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Niji holds the defeated Nusstorte and impersonates his voice over the transponder snail.',
      it: 'Niji tiene Nusstorte sconfitto e ne imita la voce al lumacofono.',
    },
  },
  'flampeKata': {
    character: 'charlotte-katakuri',
    type: { en: 'Brother she idolises', it: 'Fratello che idolatra' },
    summary: {
      en: 'Flampe tries to win Katakuri’s favour by interfering in his fight with Luffy.',
      it: 'Flampe cerca di conquistare il favore di Katakuri interferendo nel suo duello con Rufy.',
    },
  },
  'flampeKataReject': {
    character: 'charlotte-katakuri',
    type: { en: 'Brother she mocks', it: 'Fratello che deride' },
    summary: {
      en: 'Flampe turns on Katakuri and mocks his mouth after he rejects her interference.',
      it: 'Flampe si rivolta contro Katakuri e ne deride la bocca dopo che lui rifiuta il suo aiuto.',
    },
  },
  'flampeLuffy': {
    character: 'monkey-d-luffy',
    type: { en: 'Target', it: 'Bersaglio' },
    summary: {
      en: 'Flampe shoots a needle at Luffy to help Katakuri win.',
      it: 'Flampe spara un ago a Rufy per aiutare Katakuri a vincere.',
    },
  },
  'gionGarp': {
    character: 'monkey-d-garp',
    type: { en: 'Marine colleague', it: 'Collega della Marina' },
    summary: {
      en: 'Gion challenges Garp’s laughter when two Emperors threaten his grandson.',
      it: 'Gion contesta le risate di Garp mentre due Imperatori minacciano suo nipote.',
    },
  },
  'gionTokikake': {
    character: 'tokikake',
    type: { en: 'Fellow vice admiral', it: 'Collega viceammiraglio' },
    summary: {
      en: 'Gion and Tokikake discuss the Marines’ response to the Emperors with Garp.',
      it: 'Gion e Tokikake discutono con Garp della risposta della Marina agli Imperatori.',
    },
  },
  'tokiGarp': {
    character: 'monkey-d-garp',
    type: { en: 'Marine colleague', it: 'Collega della Marina' },
    summary: {
      en: 'Tokikake reminds Garp that his grandson caused the greatest upheaval at Marineford.',
      it: 'Tokikake ricorda a Garp che suo nipote ha creato più scompiglio di tutti a Marineford.',
    },
  },
  'tokiGion': {
    character: 'gion',
    type: { en: 'Fellow vice admiral', it: 'Collega viceammiraglio' },
    summary: {
      en: 'Tokikake joins Gion in discussing the threat of the Emperors with Garp.',
      it: 'Tokikake si unisce a Gion per discutere con Garp della minaccia degli Imperatori.',
    },
  },
  'pedroTamago': {
    character: 'baron-tamago',
    type: { en: 'Old enemy', it: 'Vecchio nemico' },
    summary: {
      en: 'Pedro fights Tamago again after their earlier clash cost Tamago an eye.',
      it: 'Pedro affronta di nuovo Tamago dopo che il loro scontro precedente è costato un occhio a Tamago.',
    },
  },
  'pedroLinlin': {
    character: 'charlotte-linlin',
    type: {
      en: 'Emperor who took his lifespan',
      it: 'Imperatrice che gli ha sottratto anni di vita',
    },
    summary: {
      en: 'Big Mom took fifty years of Pedro’s lifespan during his earlier expedition to Totto Land.',
      it: 'Big Mom ha sottratto cinquant’anni di vita a Pedro durante la sua precedente spedizione a Totto Land.',
    },
  },
  'stussyKakuReleased': {
    character: 'kaku',
    type: { en: 'Colleague she releases', it: 'Collega che libera' },
    summary: {
      en: 'Stussy frees Kaku from his bubble and tearfully says goodbye despite his rejection of her friendship.',
      it: 'Stussy libera Kaku dalla bolla e lo saluta in lacrime nonostante lui rifiuti la sua amicizia.',
    },
  },
  'imGunko': {
    character: 'manmayer-gunko',
    type: {
      en: 'Knight whose body Im possesses',
      it: 'Cavaliera di cui Im possiede il corpo',
    },
    summary: {
      en: 'Im takes control of Gunko’s body to intervene in the attack on Elbaph.',
      it: 'Im prende il controllo del corpo di Gunko per intervenire nell’attacco a Elbaf.',
    },
  },
  'imDorry': {
    character: 'dorry',
    type: {
      en: 'Giant Im turns into a pawn',
      it: 'Gigante che Im trasforma in pedina',
    },
    summary: {
      en: 'Im transforms Dorry and orders him to kill Jarul.',
      it: 'Im trasforma Dorry e gli ordina di uccidere Jarul.',
    },
  },
  'imBrogy': {
    character: 'brogy',
    type: {
      en: 'Giant Im turns into a pawn',
      it: 'Gigante che Im trasforma in pedina',
    },
    summary: {
      en: 'Im wounds Brogy, transforms him and sends him against Jarul.',
      it: 'Im ferisce Brogy, lo trasforma e lo manda contro Jarul.',
    },
  },
} satisfies Record<string, Relationship>

/**
 * Complete directed selections for the current Whole Cake Island debut cohort.
 * Source-specific debut snapshots wait behind existing named endpoints without
 * claiming that the delayed episode/chapter pair is an adaptation anchor.
 * Cover stories and anime extensions remain restricted to their own source.
 */
export const wholeCakeRelationships = {
  'jack': [
    { episode: 759, chapter: 809, value: [links.jackKaido, links.jackInu] },
    {
      episode: 761,
      chapter: 813,
      source: 'chapter',
      value: [links.jackKaido, links.jackInu, links.jackNeko],
    },
    {
      episode: 761,
      chapter: 813,
      source: 'episode',
      value: [links.jackKaido, links.jackInu, links.jackNeko],
    },
    {
      episode: 774,
      chapter: 821,
      value: [
        links.jackKaido,
        links.jackInu,
        links.jackNeko,
        links.jackZunesha,
      ],
    },
    {
      episode: 1051,
      chapter: 1026,
      value: [
        links.jackInuEnd,
        links.jackKaido,
        links.jackNeko,
        links.jackZunesha,
      ],
    },
  ],
  'wanda': [
    { episode: 755, chapter: 806, value: [links.wandaLuffy] },
    { episode: 758, chapter: 808, value: [links.wandaLuffy, links.wandaInu] },
    {
      episode: 761,
      chapter: 811,
      value: [links.wandaNami, links.wandaLuffy, links.wandaInu],
    },
    {
      episode: 779,
      chapter: 824,
      value: [
        links.wandaNami,
        links.wandaCarrot,
        links.wandaLuffy,
        links.wandaInu,
      ],
    },
    {
      episode: 1009,
      chapter: 995,
      value: [
        links.wandaNami,
        links.wandaCarrot,
        links.wandaInu,
        links.wandaPero,
      ],
    },
    {
      episode: 1083,
      chapter: 1056,
      value: [
        links.wandaCarrotRuler,
        links.wandaNami,
        links.wandaInu,
        links.wandaPero,
      ],
    },
  ],
  'carrot': [
    {
      episode: 755,
      chapter: 807,
      source: 'chapter',
      value: [links.carrotWanda],
    },
    {
      episode: 755,
      chapter: 807,
      source: 'episode',
      value: [links.carrotWanda],
    },
    {
      episode: 778,
      chapter: 823,
      value: [links.carrotWanda, links.carrotPedro],
    },
    {
      episode: 815,
      chapter: 849,
      value: [links.carrotWanda, links.carrotPedro, links.carrotChopper],
    },
    {
      episode: 850,
      chapter: 878,
      value: [links.carrotPedroDead, links.carrotWanda, links.carrotChopper],
    },
    {
      episode: 1009,
      chapter: 995,
      value: [
        links.carrotPedroDead,
        links.carrotWanda,
        links.carrotChopper,
        links.carrotPero,
      ],
    },
    {
      episode: 1083,
      chapter: 1056,
      value: [
        links.carrotPedroDead,
        links.carrotWanda,
        links.carrotInu,
        links.carrotNeko,
        links.carrotChopper,
      ],
    },
  ],
  'inuarashi': [
    { episode: 759, chapter: 809, value: [links.inuJack] },
    {
      episode: 761,
      chapter: 813,
      source: 'chapter',
      value: [links.inuJack, links.inuNeko],
    },
    {
      episode: 761,
      chapter: 813,
      source: 'episode',
      value: [links.inuJack, links.inuNeko],
    },
    {
      episode: 768,
      chapter: 824,
      source: 'chapter',
      value: [links.inuRaizo, links.inuMomo, links.inuNekoTruce, links.inuJack],
    },
    {
      episode: 768,
      chapter: 824,
      source: 'episode',
      value: [links.inuRaizo, links.inuMomo, links.inuNekoTruce, links.inuJack],
    },
    {
      episode: 1051,
      chapter: 1026,
      value: [
        links.inuRaizo,
        links.inuMomo,
        links.inuNekoTruce,
        links.inuJackEnd,
      ],
    },
    {
      episode: 1083,
      chapter: 1056,
      value: [
        links.inuMomo,
        links.inuCarrot,
        links.inuNekoTruce,
        links.inuRaizo,
        links.inuJackEnd,
      ],
    },
  ],
  'pedro': [
    { episode: 761, chapter: 813, source: 'chapter', value: [links.pedroNeko] },
    { episode: 761, chapter: 813, source: 'episode', value: [links.pedroNeko] },
    { episode: 776, chapter: 822, value: [links.pedroNeko, links.pedroPekoms] },
    {
      episode: 778,
      chapter: 823,
      value: [links.pedroNeko, links.pedroPekoms, links.pedroCarrot],
    },
    {
      episode: 815,
      chapter: 849,
      value: [
        links.pedroCarrot,
        links.pedroPekoms,
        links.pedroNeko,
        links.pedroTamago,
      ],
    },
    {
      episode: 816,
      chapter: 850,
      value: [links.pedroCarrot, links.pedroPekoms, links.pedroLinlin],
    },
    {
      episode: 849,
      chapter: 877,
      value: [
        links.pedroPero,
        links.pedroCarrot,
        links.pedroPekoms,
        links.pedroTamago,
        links.pedroLinlin,
      ],
    },
  ],
  'nekomamushi': [
    { episode: 761, chapter: 813, source: 'chapter', value: [links.nekoInu] },
    { episode: 761, chapter: 813, source: 'episode', value: [links.nekoInu] },
    {
      episode: 768,
      chapter: 824,
      source: 'chapter',
      value: [links.nekoRaizo, links.nekoMomo, links.nekoInuTruce],
    },
    {
      episode: 768,
      chapter: 824,
      source: 'episode',
      value: [links.nekoRaizo, links.nekoMomo, links.nekoInuTruce],
    },
    {
      episode: 1051,
      chapter: 1026,
      value: [
        links.nekoRaizo,
        links.nekoMomo,
        links.nekoInuTruce,
        links.nekoPero,
      ],
    },
    {
      episode: 1083,
      chapter: 1056,
      value: [
        links.nekoMomo,
        links.nekoCarrot,
        links.nekoInuTruce,
        links.nekoRaizo,
        links.nekoPero,
      ],
    },
  ],
  'raizo': [
    {
      episode: 768,
      chapter: 824,
      source: 'chapter',
      value: [links.raizoInu, links.raizoNeko, links.raizoKin],
    },
    {
      episode: 768,
      chapter: 824,
      source: 'episode',
      value: [links.raizoInu, links.raizoNeko, links.raizoKin],
    },
    {
      episode: 1045,
      chapter: 1022,
      value: [links.raizoInu, links.raizoNeko, links.raizoKin, links.raizoFuku],
    },
    {
      episode: 1073,
      chapter: 1046,
      value: [
        links.raizoInu,
        links.raizoNeko,
        links.raizoKin,
        links.raizoFuku,
        links.raizoJinbe,
      ],
    },
  ],
  'vinsmoke-reiju': [
    { episode: 785, chapter: 826, value: [links.reijuSanji, links.reijuYonji] },
    {
      episode: 804,
      chapter: 841,
      value: [links.reijuSanjiFree, links.reijuYonji],
    },
    {
      episode: 818,
      chapter: 851,
      value: [links.reijuSanjiFree, links.reijuYonji, links.reijuPudding],
    },
    {
      episode: 819,
      chapter: 852,
      value: [
        links.reijuSanjiFree,
        links.reijuSora,
        links.reijuYonji,
        links.reijuPudding,
      ],
    },
  ],
  'vito': [
    {
      episode: 785,
      chapter: 830,
      source: 'chapter',
      value: [links.vitoBege, links.vitoSanji, links.vitoGotti],
    },
    {
      episode: 785,
      chapter: 830,
      source: 'episode',
      value: [links.vitoBege, links.vitoSanji, links.vitoGotti],
    },
  ],
  'praline': [
    {
      episode: 790,
      chapter: 830,
      source: 'chapter',
      value: [links.pralineAladin],
    },
    {
      episode: 790,
      chapter: 831,
      source: 'chapter',
      value: [links.pralineAladin, links.pralineLinlin],
    },
    {
      episode: 790,
      chapter: 831,
      source: 'episode',
      value: [links.pralineAladin, links.pralineLinlin],
    },
    {
      episode: 827,
      chapter: 858,
      value: [links.pralineAladin, links.pralineLinlin, links.pralineJinbe],
    },
  ],
  'charlotte-pudding': [
    {
      episode: 786,
      chapter: 831,
      source: 'chapter',
      value: [links.puddingSanji, links.puddingLinlin],
    },
    {
      episode: 786,
      chapter: 831,
      source: 'episode',
      value: [links.puddingSanji, links.puddingLinlin],
    },
    {
      episode: 817,
      chapter: 850,
      value: [links.puddingSanjiPlot, links.puddingLinlin, links.puddingReiju],
    },
    {
      episode: 832,
      chapter: 862,
      value: [links.puddingSanjiLove, links.puddingLinlin, links.puddingReiju],
    },
    {
      episode: 845,
      chapter: 874,
      value: [
        links.puddingSanjiLove,
        links.puddingChiffon,
        links.puddingLinlin,
        links.puddingReiju,
      ],
    },
    {
      episode: 877,
      chapter: 902,
      value: [
        links.puddingSanjiFarewell,
        links.puddingChiffon,
        links.puddingLinlin,
        links.puddingReiju,
      ],
    },
    {
      episode: 1093,
      chapter: 1064,
      value: [
        links.puddingTeach,
        links.puddingSanjiFarewell,
        links.puddingChiffon,
        links.puddingLinlin,
        links.puddingReiju,
      ],
    },
  ],
  'charlotte-linlin': [
    {
      episode: 790,
      chapter: 831,
      source: 'chapter',
      value: [links.linlinJinbe],
    },
    {
      episode: 790,
      chapter: 831,
      source: 'episode',
      value: [links.linlinJinbe],
    },
    {
      episode: 793,
      chapter: 832,
      source: 'chapter',
      value: [links.linlinPudding, links.linlinJinbe],
    },
    {
      episode: 793,
      chapter: 832,
      source: 'episode',
      value: [links.linlinPudding, links.linlinJinbe],
    },
    {
      episode: 836,
      chapter: 866,
      value: [links.linlinCarmel, links.linlinPudding, links.linlinJinbe],
    },
    {
      episode: 838,
      chapter: 868,
      value: [
        links.linlinCarmel,
        links.linlinStreusen,
        links.linlinPudding,
        links.linlinJinbe,
      ],
    },
    {
      episode: 955,
      chapter: 954,
      value: [
        links.linlinKaido,
        links.linlinCarmel,
        links.linlinStreusen,
        links.linlinPudding,
        links.linlinJinbe,
      ],
    },
    {
      episode: 1067,
      chapter: 1040,
      value: [
        links.linlinLaw,
        links.linlinKid,
        links.linlinKaido,
        links.linlinCarmel,
        links.linlinStreusen,
      ],
    },
  ],
  'charlotte-perospero': [
    { episode: 795, chapter: 834, value: [links.peroLinlin] },
    { episode: 851, chapter: 879, value: [links.peroLinlin, links.peroPedro] },
    {
      episode: 1009,
      chapter: 995,
      value: [links.peroLinlin, links.peroPedro, links.peroCarrot],
    },
    {
      episode: 1051,
      chapter: 1026,
      value: [
        links.peroNeko,
        links.peroLinlin,
        links.peroPedro,
        links.peroCarrot,
      ],
    },
  ],
  'charlotte-cracker': [
    {
      episode: 798,
      chapter: 837,
      value: [links.crackerLinlin, links.crackerLuffy],
    },
    {
      episode: 805,
      chapter: 842,
      value: [links.crackerLinlin, links.crackerLuffy, links.crackerNami],
    },
    {
      episode: 1093,
      chapter: 1063,
      value: [
        links.crackerKuzan,
        links.crackerLinlin,
        links.crackerLuffy,
        links.crackerNami,
      ],
    },
  ],
  'charlotte-brulee': [
    { episode: 796, chapter: 835, value: [links.bruleeCarrot] },
    {
      episode: 815,
      chapter: 849,
      value: [links.bruleeCarrotFree, links.bruleeChopper],
    },
    {
      episode: 840,
      chapter: 869,
      value: [links.bruleeKata, links.bruleeCarrotFree, links.bruleeChopper],
    },
    {
      episode: 877,
      chapter: 902,
      value: [
        links.bruleeKataPast,
        links.bruleeCarrotFree,
        links.bruleeChopper,
      ],
    },
  ],
  'stussy': [
    { episode: 830, chapter: 860, value: [links.stussyLinlin] },
    {
      episode: 842,
      chapter: 871,
      value: [links.stussyLinlin, links.stussyFeld],
    },
    {
      episode: 1092,
      chapter: 1062,
      value: [
        links.stussyLucci,
        links.stussyKaku,
        links.stussyLinlin,
        links.stussyFeld,
      ],
    },
    {
      // The clone's original is connected to the elderly Bakkin at 1105/1073.
      episode: 1104,
      chapter: 1072,
      value: [
        links.stussyKakuBetray,
        links.stussyLucci,
        links.stussyLinlin,
        links.stussyFeld,
      ],
    },
    {
      episode: 1105,
      chapter: 1073,
      value: [
        links.stussyVegapunk,
        links.stussyKakuBetray,
        links.stussyLucciBetray,
        links.stussyBakkin,
        links.stussyFeld,
      ],
    },
    {
      episode: 1125,
      chapter: 1091,
      value: [
        links.stussyVegapunk,
        links.stussyLucciAttack,
        links.stussyKakuBetray,
        links.stussyBakkin,
        links.stussyFeld,
      ],
    },
    {
      episode: 1151,
      chapter: 1119,
      value: [
        links.stussyVegapunk,
        links.stussyLucciAttack,
        links.stussyKakuReleased,
        links.stussyBakkin,
        links.stussyFeld,
      ],
    },
  ],
  'morgans': [
    { episode: 830, chapter: 860, value: [links.morgansLinlin] },
    {
      episode: 879,
      chapter: 903,
      value: [links.morgansLuffy, links.morgansLinlin],
    },
    {
      episode: 1106,
      chapter: 1074,
      value: [
        links.morgansVivi,
        links.morgansWapol,
        links.morgansLuffy,
        links.morgansLinlin,
      ],
    },
  ],
  'vinsmoke-judge': [
    {
      episode: 794,
      chapter: 837,
      source: 'chapter',
      value: [links.judgeSanji, links.judgeLinlin],
    },
    {
      episode: 794,
      chapter: 837,
      source: 'episode',
      value: [links.judgeSanji, links.judgeLinlin],
    },
    {
      episode: 819,
      chapter: 852,
      value: [links.judgeSanji, links.judgeLinlin, links.judgeSora],
    },
    {
      episode: 834,
      chapter: 864,
      value: [links.judgeSanji, links.judgeLinlinEnemy, links.judgeSora],
    },
    {
      episode: 835,
      chapter: 865,
      value: [links.judgeSanjiRescue, links.judgeLinlinEnemy, links.judgeSora],
    },
    // Manga cover story; episode only orders this source-restricted snapshot.
    {
      episode: 1180,
      chapter: 1078,
      source: 'chapter',
      value: [
        links.judgeSanjiRescue,
        links.judgeCaesar,
        links.judgeLinlinEnemy,
        links.judgeSora,
      ],
    },
  ],
  'vinsmoke-ichiji': [
    {
      episode: 804,
      chapter: 841,
      value: [links.IchijiSanji, links.IchijiJudge],
    },
    {
      episode: 873,
      chapter: 898,
      value: [links.IchijiSanjiHelp, links.IchijiJudge],
    },
  ],
  'vinsmoke-niji': [
    { episode: 804, chapter: 841, value: [links.NijiSanji, links.NijiJudge] },
    {
      episode: 873,
      chapter: 898,
      value: [links.NijiSanjiHelp, links.NijiJudge],
    },
  ],
  'vinsmoke-yonji': [
    { episode: 784, chapter: 826, value: [links.yonjiReiju] },
    { episode: 804, chapter: 841, value: [links.YonjiSanji, links.YonjiJudge] },
    {
      episode: 873,
      chapter: 898,
      value: [links.YonjiSanjiHelp, links.YonjiJudge],
    },
  ],
  'charlotte-katakuri': [
    { episode: 831, chapter: 861, value: [links.kataLinlin] },
    { episode: 840, chapter: 869, value: [links.kataLinlin, links.kataBrulee] },
    {
      episode: 852,
      chapter: 879,
      value: [links.kataLuffy, links.kataLinlin, links.kataBrulee],
    },
    {
      episode: 868,
      chapter: 893,
      value: [links.kataLuffyRespect, links.kataLinlin, links.kataBrulee],
    },
    {
      episode: 871,
      chapter: 896,
      value: [links.kataLuffyEnd, links.kataLinlin, links.kataBrulee],
    },
    {
      episode: 877,
      chapter: 902,
      value: [links.kataLuffyEnd, links.kataBruleePast, links.kataLinlin],
    },
  ],
  'vinsmoke-sora': [
    {
      episode: 819,
      chapter: 852,
      value: [links.soraSanji, links.soraJudge, links.soraReiju],
    },
  ],
  'charlotte-chiffon': [
    { episode: 795, chapter: 834, value: [links.chiffonBege] },
    {
      episode: 827,
      chapter: 858,
      value: [links.chiffonBege, links.chiffonLola, links.chiffonLinlin],
    },
    {
      episode: 845,
      chapter: 874,
      value: [
        links.chiffonBege,
        links.chiffonLola,
        links.chiffonLinlin,
        links.chiffonPudding,
      ],
    },
    // Manga cover story; episode only orders this source-restricted snapshot.
    {
      episode: 1180,
      chapter: 991,
      source: 'chapter',
      value: [
        links.chiffonBege,
        links.chiffonLola,
        links.chiffonPound,
        links.chiffonPudding,
        links.chiffonLinlin,
      ],
    },
  ],
  'charlotte-smoothie': [
    {
      episode: 812,
      chapter: 854,
      source: 'chapter',
      value: [links.smoothieLinlin],
    },
    {
      episode: 812,
      chapter: 854,
      source: 'episode',
      value: [links.smoothieLinlin],
    },
    {
      episode: 844,
      chapter: 873,
      source: 'episode',
      value: [links.smoothieLinlin, links.smoothieOpera],
    },
  ],
  'charlotte-oven': [
    { episode: 834, chapter: 864, value: [links.ovenLinlin] },
    {
      episode: 860,
      chapter: 886,
      value: [links.ovenLinlin, links.ovenChiffon],
    },
    {
      episode: 861,
      chapter: 887,
      value: [links.ovenLinlin, links.ovenChiffon, links.ovenPound],
    },
    {
      episode: 873,
      chapter: 898,
      value: [
        links.ovenLinlin,
        links.ovenKata,
        links.ovenChiffon,
        links.ovenPound,
      ],
    },
  ],
  'charlotte-daifuku': [
    {
      episode: 834,
      chapter: 864,
      value: [links.daifukuLinlin, links.daifukuPudding],
    },
    {
      episode: 862,
      chapter: 888,
      value: [links.daifukuLinlin, links.daifukuPudding, links.daifukuCarrot],
    },
  ],
  'charlotte-mont-dor': [
    {
      episode: 811,
      chapter: 855,
      source: 'chapter',
      value: [links.montLinlin, links.montLuffy, links.montNami],
    },
    {
      episode: 811,
      chapter: 855,
      source: 'episode',
      value: [links.montLinlin, links.montLuffy, links.montNami],
    },
  ],
  'streusen': [{ episode: 838, chapter: 868, value: [links.streusenLinlin] }],
  'carmel': [
    { episode: 836, chapter: 866, value: [links.carmelLinlin] },
    {
      episode: 837,
      chapter: 867,
      value: [links.carmelLinlinSale, links.carmelJarul],
    },
  ],
  'gerd': [
    {
      episode: 836,
      chapter: 866,
      value: [links.gerdHajrudin, links.gerdLinlin],
    },
    {
      episode: 885,
      chapter: 901,
      source: 'chapter',
      value: [links.gerdHajrudinCaptain, links.gerdLinlin],
    },
    {
      episode: 885,
      chapter: 901,
      source: 'episode',
      value: [links.gerdHajrudinCaptain, links.gerdLinlin],
    },
    {
      episode: 1161,
      chapter: 1131,
      value: [
        links.gerdHajrudinCaptain,
        links.gerdGoldberg,
        links.gerdRoad,
        links.gerdLinlin,
      ],
    },
  ],
  'jarul': [
    { episode: 836, chapter: 866, value: [links.jarulJorul] },
    {
      episode: 837,
      chapter: 867,
      value: [links.jarulJorulDead, links.jarulLinlin],
    },
    {
      episode: 1167,
      chapter: 1137,
      value: [links.jarulLoki, links.jarulJorulDead, links.jarulLinlin],
    },
  ],
  'donquixote-mjosgard': [
    {
      episode: 886,
      chapter: 907,
      value: [links.mjosOtohime, links.mjosShira, links.mjosCharlos],
    },
    {
      episode: 1120,
      chapter: 1086,
      value: [
        links.mjosOtohime,
        links.mjosShira,
        links.mjosGarling,
        links.mjosCharlos,
      ],
    },
  ],
  'belo-betty': [
    {
      episode: 880,
      chapter: 905,
      source: 'chapter',
      value: [
        links['belo-bettymorley'],
        links['belo-bettykarasu'],
        links['belo-bettylindbergh'],
      ],
    },
    {
      episode: 880,
      chapter: 905,
      source: 'episode',
      value: [
        links['belo-bettymorley'],
        links['belo-bettykarasu'],
        links['belo-bettylindbergh'],
      ],
    },
  ],
  'morley': [
    {
      episode: 880,
      chapter: 905,
      source: 'chapter',
      value: [
        links['morleybelo-betty'],
        links.morleykarasu,
        links.morleylindbergh,
      ],
    },
    {
      episode: 880,
      chapter: 905,
      source: 'episode',
      value: [
        links['morleybelo-betty'],
        links.morleykarasu,
        links.morleylindbergh,
      ],
    },
    {
      episode: 1117,
      chapter: 1083,
      value: [
        links.morleyKuma,
        links.morleyRyo,
        links.morleykarasu,
        links.morleylindbergh,
        links['morleybelo-betty'],
      ],
    },
  ],
  'karasu': [
    {
      episode: 880,
      chapter: 905,
      source: 'chapter',
      value: [
        links['karasubelo-betty'],
        links.karasumorley,
        links.karasulindbergh,
      ],
    },
    {
      episode: 880,
      chapter: 905,
      source: 'episode',
      value: [
        links['karasubelo-betty'],
        links.karasumorley,
        links.karasulindbergh,
      ],
    },
    {
      episode: 1117,
      chapter: 1083,
      value: [
        links.karasuKuma,
        links.karasuIssho,
        links.karasumorley,
        links.karasulindbergh,
        links['karasubelo-betty'],
      ],
    },
  ],
  'lindbergh': [
    {
      episode: 880,
      chapter: 905,
      source: 'chapter',
      value: [
        links['lindberghbelo-betty'],
        links.lindberghmorley,
        links.lindberghkarasu,
      ],
    },
    {
      episode: 880,
      chapter: 905,
      source: 'episode',
      value: [
        links['lindberghbelo-betty'],
        links.lindberghmorley,
        links.lindberghkarasu,
      ],
    },
    {
      episode: 1117,
      chapter: 1083,
      value: [
        links.lindKuma,
        links.lindberghmorley,
        links.lindberghkarasu,
        links['lindberghbelo-betty'],
      ],
    },
  ],
  'ryokugyu': [
    { episode: 882, chapter: 905, value: [links.ryoIssho, links.ryoSaka] },
    {
      episode: 1081,
      chapter: 1054,
      value: [links.ryoIssho, links.ryoSaka, links.ryoMomo],
    },
    {
      episode: 1082,
      chapter: 1055,
      value: [links.ryoShanks, links.ryoMomo, links.ryoSaka, links.ryoIssho],
    },
    {
      episode: 1105,
      chapter: 1073,
      value: [
        links.ryoShanks,
        links.ryoMomo,
        links.ryoSaka,
        links.ryoIssho,
        links.ryoWeevil,
      ],
    },
    {
      episode: 1119,
      chapter: 1085,
      value: [
        links.ryoIsshoConflict,
        links.ryoShanks,
        links.ryoMomo,
        links.ryoSaka,
        links.ryoWeevil,
      ],
    },
  ],
  'sterry': [
    {
      episode: 883,
      chapter: 906,
      source: 'chapter',
      value: [links.sterrySabo, links.sterryGarp],
    },
    {
      episode: 883,
      chapter: 906,
      source: 'episode',
      value: [links.sterrySabo, links.sterryGarp],
    },
  ],
  'im': [
    { episode: 1119, chapter: 1085, value: [links.imCobra, links.imSabo] },
    {
      episode: 1120,
      chapter: 1086,
      value: [links.imCobra, links.imSabo, links.imSaturn],
    },
    {
      episode: 1155,
      chapter: 1125,
      value: [links.imSaturnDead, links.imGarling, links.imCobra, links.imSabo],
    },
    {
      episode: 1179,
      chapter: 1149,
      value: [
        links.imGunko,
        links.imGarling,
        links.imSaturnDead,
        links.imCobra,
        links.imSabo,
      ],
    },
    {
      episode: 1180,
      chapter: 1150,
      value: [
        links.imGunko,
        links.imDorry,
        links.imBrogy,
        links.imGarling,
        links.imSabo,
      ],
    },
  ],
  'sheepshead': [
    { episode: 739, chapter: 795, value: [links.sheepSanji] },
    {
      episode: 757,
      chapter: 809,
      source: 'chapter',
      value: [links.sheepSanji, links.sheepJack],
    },
    {
      episode: 757,
      chapter: 809,
      source: 'episode',
      value: [links.sheepSanji, links.sheepJack],
    },
    {
      episode: 772,
      chapter: 819,
      value: [links.sheepSanji, links.sheepJackPunish],
    },
  ],
  'edward-weevil': [
    {
      episode: 751,
      chapter: 802,
      source: 'episode',
      value: [links.weevilNewgate],
    },
    {
      episode: 752,
      chapter: 802,
      source: 'chapter',
      value: [links.weevilBakkin, links.weevilNewgate],
    },
    {
      episode: 752,
      chapter: 802,
      source: 'episode',
      value: [links.weevilBakkin, links.weevilNewgate],
    },
    {
      episode: 1105,
      chapter: 1073,
      value: [links.weevilBakkin, links.weevilNewgate, links.weevilRyo],
    },
  ],
  'bakkin': [
    {
      episode: 752,
      chapter: 802,
      value: [links.bakkinWeevil, links.bakkinNewgate],
    },
    {
      episode: 1105,
      chapter: 1073,
      value: [
        links.bakkinWeevil,
        links.bakkinMarco,
        links.bakkinStussy,
        links.bakkinNewgate,
      ],
    },
  ],
  'zunesha': [
    {
      episode: 774,
      chapter: 821,
      value: [links.zuneshaMomo, links.zuneshaJack],
    },
    {
      episode: 776,
      chapter: 822,
      value: [links.zuneshaMomo, links.zuneshaJack, links.zuneshaChopper],
    },
    {
      episode: 1070,
      chapter: 1043,
      value: [
        links.zuneshaMomo,
        links.zuneshaLuffy,
        links.zuneshaJack,
        links.zuneshaChopper,
      ],
    },
  ],
  'shishilian': [
    { episode: 758, chapter: 809, value: [links.shishiInu, links.shishiLuffy] },
  ],
  'gotti': [
    { episode: 785, chapter: 830, source: 'chapter', value: [links.gottiVito] },
    { episode: 785, chapter: 830, source: 'episode', value: [links.gottiVito] },
    { episode: 828, chapter: 858, value: [links.gottiBege, links.gottiVito] },
    // Manga cover story; episode only orders this source-restricted snapshot.
    {
      episode: 1180,
      chapter: 993,
      source: 'chapter',
      value: [links.gottiLola, links.gottiBege, links.gottiVito],
    },
  ],
  'randolph': [
    { episode: 792, chapter: 832, value: [links.randCarrot] },
    {
      episode: 797,
      chapter: 836,
      value: [links.randCarrot, links.randCracker],
    },
  ],
  'pound': [
    { episode: 797, chapter: 836, value: [links.poundLola, links.poundLinlin] },
    {
      episode: 861,
      chapter: 887,
      value: [links.poundChiffon, links.poundLola, links.poundLinlin],
    },
    // Manga cover story; episode only orders this source-restricted snapshot.
    {
      episode: 1180,
      chapter: 991,
      source: 'chapter',
      value: [
        links.poundChiffonReunion,
        links.poundLolaReunion,
        links.poundLinlin,
      ],
    },
  ],
  'charlotte-opera': [
    {
      episode: 818,
      chapter: 851,
      value: [links.operaLinlin, links.operaNami, links.operaJinbe],
    },
  ],
  'zeus': [
    { episode: 806, chapter: 843, value: [links.zeusLinlin] },
    { episode: 846, chapter: 875, value: [links.zeusLinlin, links.zeusNami] },
    {
      episode: 878,
      chapter: 903,
      value: [links.zeusNamiServant, links.zeusLinlin],
    },
    {
      episode: 1034,
      chapter: 1013,
      value: [links.zeusLinlinReject, links.zeusNamiServant],
    },
    {
      episode: 1038,
      chapter: 1016,
      value: [links.zeusNamiPartner, links.zeusLinlinReject],
    },
  ],
  'prometheus': [
    { episode: 806, chapter: 843, value: [links.promLinlin] },
    { episode: 846, chapter: 875, value: [links.promLinlin, links.promJinbe] },
  ],
  'amande': [
    { episode: 809, chapter: 845, value: [links.amandeLinlin] },
    {
      episode: 811,
      chapter: 846,
      value: [links.amandeLinlin, links.amandeNami],
    },
    {
      episode: 850,
      chapter: 878,
      value: [links.amandeLinlin, links.amandeMont, links.amandeNami],
    },
  ],
  'napoleon': [
    // The manga’s earlier fight waits for Napoleon’s named endpoint.
    {
      episode: 816,
      chapter: 853,
      source: 'chapter',
      value: [links.napLinlin, links.napBrook],
    },
    { episode: 816, chapter: 853, source: 'episode', value: [links.napLinlin] },
    {
      episode: 818,
      chapter: 853,
      source: 'episode',
      value: [links.napLinlin, links.napBrook],
    },
  ],
  'lu-feld': [
    { episode: 830, chapter: 860, value: [links.feldLinlin] },
    { episode: 842, chapter: 871, value: [links.feldStussy, links.feldLinlin] },
  ],
  'charlotte-compote': [
    { episode: 831, chapter: 861, value: [links.compoteLinlin] },
    {
      episode: 844,
      chapter: 873,
      value: [links.compoteLinlin, links.compotePero],
    },
  ],
  'jorul': [
    { episode: 836, chapter: 866, value: [links.jorulJarul] },
    {
      episode: 837,
      chapter: 867,
      value: [links.jorulJarul, links.jorulLinlin],
    },
  ],
  'charlotte-nusstorte': [
    { episode: 855, chapter: 882, source: 'episode', value: [links.nussNiji] },
  ],
  'charlotte-flampe': [
    {
      episode: 867,
      chapter: 892,
      value: [links.flampeKata, links.flampeLuffy],
    },
    {
      episode: 868,
      chapter: 893,
      value: [links.flampeKataReject, links.flampeLuffy],
    },
  ],
  'gion': [
    { episode: 887, chapter: 907, value: [links.gionGarp, links.gionTokikake] },
  ],
  'tokikake': [
    { episode: 887, chapter: 907, value: [links.tokiGarp, links.tokiGion] },
  ],
} satisfies Record<string, Timeline<Relationship[]>>
