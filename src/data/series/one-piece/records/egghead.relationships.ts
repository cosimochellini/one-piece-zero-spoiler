import type { Relationship, Timeline } from '~/data/types'

/** Facts and threshold revisions: docs/content-provenance/relationships.json. */
const links = {
  'vpDragon': {
    character: 'monkey-d-dragon',
    type: { en: 'Old acquaintance', it: 'Vecchia conoscenza' },
    summary: {
      en: 'Vegapunk meets Dragon at Ohara after its destruction and explains why he works for the Government.',
      it: 'Vegapunk incontra Dragon a Ohara dopo la sua distruzione e gli spiega perché lavora per il Governo.',
    },
  },
  'vpBonney': {
    character: 'jewelry-bonney',
    type: { en: 'Visitor who blames him', it: 'Visitatrice che lo accusa' },
    summary: {
      en: 'Bonney blames Vegapunk for turning her father into a cyborg.',
      it: 'Bonney accusa Vegapunk di aver trasformato suo padre in un cyborg.',
    },
  },
  'vpLuffy': {
    character: 'monkey-d-luffy',
    type: { en: 'Ally he asks for help', it: 'Alleato a cui chiede aiuto' },
    summary: {
      en: 'Vegapunk asks Luffy to take him away from Egghead.',
      it: 'Vegapunk chiede a Rufy di portarlo via da Egghead.',
    },
  },
  'vpYork': {
    character: 'york',
    type: { en: 'Satellite who betrays him', it: 'Satellite che lo tradisce' },
    summary: {
      en: 'York imprisons Vegapunk and wants to replace the other Vegapunks as a Celestial Dragon.',
      it: 'York imprigiona Vegapunk e vuole sostituire gli altri Vegapunk diventando un Drago Celeste.',
    },
  },
  'vpKuma': {
    character: 'bartholomew-kuma',
    type: {
      en: 'Patient and research partner',
      it: 'Paziente e collaboratore',
    },
    summary: {
      en: 'Vegapunk treats Bonney in exchange for cloning Kuma, but Saturn forces him to erase Kuma’s personality.',
      it: 'Vegapunk cura Bonney in cambio della clonazione di Kuma, ma Saturn gli impone di cancellare la personalità di Kuma.',
    },
  },
  'vpBonneyCured': {
    character: 'jewelry-bonney',
    type: { en: 'Patient', it: 'Paziente' },
    summary: {
      en: 'Vegapunk successfully treats Bonney and welcomes her to his laboratory with Kuma.',
      it: 'Vegapunk tratta con successo la malattia di Bonney e la accoglie nel suo laboratorio insieme a Kuma.',
    },
  },
  'vpKizaru': {
    character: 'borsalino',
    type: { en: 'Friend who kills him', it: 'Amico che lo uccide' },
    summary: {
      en: 'Kizaru strikes Vegapunk with a beam while Sanji is carrying him away, and his heart monitor stops.',
      it: 'Kizaru trafigge Vegapunk con un raggio mentre Sanji lo porta via e il suo monitor cardiaco si ferma.',
    },
  },
  'vpSentomaru': {
    character: 'sentomaru',
    type: { en: 'Bodyguard', it: 'Guardia del corpo' },
    summary: {
      en: 'Vegapunk asks Sentomaru to protect him, and Sentomaru agrees out of gratitude for taking him in.',
      it: 'Vegapunk chiede protezione a Sentomaru, che accetta per gratitudine verso chi lo ha accolto.',
    },
  },
  'vpKizaruFriend': {
    character: 'borsalino',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'Kizaru spends time with Vegapunk, Kuma and Bonney during her treatment on Egghead.',
      it: 'Kizaru passa del tempo con Vegapunk, Kuma e Bonney durante le cure della bambina su Egghead.',
    },
  },
  'hibariKoby': {
    character: 'koby',
    type: {
      en: 'Colleague she wants to rescue',
      it: 'Collega che vuole salvare',
    },
    summary: {
      en: 'Hibari asks Grus to help rescue Koby, who has always been kind to her.',
      it: 'Hibari chiede a Grus di aiutarla a salvare Kobi, che è sempre stato gentile con lei.',
    },
  },
  'hibariHelmeppo': {
    character: 'helmeppo',
    type: { en: 'Fellow rescuer', it: 'Compagno nel salvataggio' },
    summary: {
      en: 'Hibari and Helmeppo appeal together for help in rescuing Koby.',
      it: 'Hibari e Hermeppo chiedono insieme aiuto per salvare Kobi.',
    },
  },
  'hibariKuzan': {
    character: 'kuzan',
    type: { en: 'Enemy who freezes her', it: 'Nemico che la congela' },
    summary: {
      en: 'Kuzan freezes Hibari while she is helping Koby escape from Hachinosu.',
      it: 'Kuzan congela Hibari mentre aiuta Kobi a fuggire da Hachinosu.',
    },
  },
  'hibariKobySafe': {
    character: 'koby',
    type: { en: 'Colleague she welcomes back', it: 'Collega che riaccoglie' },
    summary: {
      en: 'Hibari welcomes Koby back aboard after he helps save their ship.',
      it: 'Hibari riaccoglie Kobi a bordo dopo che ha contribuito a salvare la loro nave.',
    },
  },
  'grusHibari': {
    character: 'hibari',
    type: { en: 'Junior officer', it: 'Ufficiale subordinata' },
    summary: {
      en: 'Grus refuses Hibari’s request to attack Blackbeard’s territory to rescue Koby.',
      it: 'Grus rifiuta la richiesta di Hibari di attaccare il territorio di Barbanera per salvare Kobi.',
    },
  },
  'grusHelmeppo': {
    character: 'helmeppo',
    type: { en: 'Junior officer', it: 'Ufficiale subordinato' },
    summary: {
      en: 'Grus rejects Helmeppo’s proposal to take the Seraphim to rescue Koby.',
      it: 'Grus respinge la proposta di Hermeppo di prendere i serafini per salvare Kobi.',
    },
  },
  'grusKoby': {
    character: 'koby',
    type: { en: 'Colleague he rivals', it: 'Collega con cui rivaleggia' },
    summary: {
      en: 'Grus resents Garp calling Koby the future of the Navy.',
      it: 'Grus si risente quando Garp definisce Kobi il futuro della Marina.',
    },
  },
  'grusGarp': {
    character: 'monkey-d-garp',
    type: { en: 'Commander', it: 'Comandante' },
    summary: {
      en: 'Grus fights under Garp’s command during the rescue on Hachinosu.',
      it: 'Grus combatte agli ordini di Garp durante il salvataggio a Hachinosu.',
    },
  },
  'grusKobyTeam': {
    character: 'koby',
    type: {
      en: 'Colleague he fights beside',
      it: 'Collega al cui fianco combatte',
    },
    summary: {
      en: 'Grus catches the falling debris after Koby shatters the stone hand threatening their ship.',
      it: 'Grus ferma i detriti dopo che Kobi ha distrutto la mano di pietra che minaccia la loro nave.',
    },
  },
  'dollTashigi': {
    character: 'tashigi',
    type: { en: 'Colleague', it: 'Collega' },
    summary: {
      en: 'Doll asks Tashigi to calm Helmeppo down at G-14.',
      it: 'Doll chiede a Tashigi di calmare Hermeppo alla base G-14.',
    },
  },
  'dollGarp': {
    character: 'monkey-d-garp',
    type: { en: 'Officer she challenges', it: 'Ufficiale che contesta' },
    summary: {
      en: 'Doll objects to Garp taking Marines to rescue Koby without clearance.',
      it: 'Doll contesta la decisione di Garp di portare dei marine a salvare Kobi senza autorizzazione.',
    },
  },
  'dollSaul': {
    character: 'jaguar-d-saul',
    type: { en: 'Former superior', it: 'Ex superiore' },
    summary: {
      en: 'Doll tells Bluegrass that she served under Saul more than twenty years ago.',
      it: 'Doll racconta a Bluegrass di aver prestato servizio agli ordini di Sauro più di vent’anni prima.',
    },
  },
  'dollBluegrass': {
    character: 'bluegrass',
    type: { en: 'Partner in battle', it: 'Compagna di battaglia' },
    summary: {
      en: 'Doll travels with Bluegrass on a Sea Beast Weapon to confront the escaping giants.',
      it: 'Doll viaggia con Bluegrass su una bestia marina meccanica per affrontare i giganti in fuga.',
    },
  },
  'dollBonney': {
    character: 'jewelry-bonney',
    type: { en: 'Opponent', it: 'Avversaria' },
    summary: {
      en: 'Bonney turns Doll into a child while escaping aboard the giants’ ship.',
      it: 'Bonney trasforma Doll in una bambina mentre fugge sulla nave dei giganti.',
    },
  },
  'shakaStella': {
    character: 'vegapunk',
    type: { en: 'Original Vegapunk', it: 'Vegapunk originale' },
    summary: {
      en: 'Shaka is one of the six satellites created by Vegapunk to share his work.',
      it: 'Shaka è uno dei sei satelliti creati da Vegapunk per condividere il suo lavoro.',
    },
  },
  'lilithStella': {
    character: 'vegapunk',
    type: { en: 'Original Vegapunk', it: 'Vegapunk originale' },
    summary: {
      en: 'Lilith is one of the six satellites created by Vegapunk to share his work.',
      it: 'Lilith è uno dei sei satelliti creati da Vegapunk per condividere il suo lavoro.',
    },
  },
  'edisonStella': {
    character: 'vegapunk',
    type: { en: 'Original Vegapunk', it: 'Vegapunk originale' },
    summary: {
      en: 'Edison is one of the six satellites created by Vegapunk to share his work.',
      it: 'Edison è uno dei sei satelliti creati da Vegapunk per condividere il suo lavoro.',
    },
  },
  'pythagorasStella': {
    character: 'vegapunk',
    type: { en: 'Original Vegapunk', it: 'Vegapunk originale' },
    summary: {
      en: 'Pythagoras is one of the six satellites created by Vegapunk to share his work.',
      it: 'Pythagoras è uno dei sei satelliti creati da Vegapunk per condividere il suo lavoro.',
    },
  },
  'atlasStella': {
    character: 'vegapunk',
    type: { en: 'Original Vegapunk', it: 'Vegapunk originale' },
    summary: {
      en: 'Atlas is one of the six satellites created by Vegapunk to share his work.',
      it: 'Atlas è uno dei sei satelliti creati da Vegapunk per condividere il suo lavoro.',
    },
  },
  'yorkStella': {
    character: 'vegapunk',
    type: { en: 'Original Vegapunk', it: 'Vegapunk originale' },
    summary: {
      en: 'York is one of the six satellites created by Vegapunk to share his work.',
      it: 'York è uno dei sei satelliti creati da Vegapunk per condividere il suo lavoro.',
    },
  },
  'shakaLilith': {
    character: 'lilith',
    type: { en: 'Fellow satellite', it: 'Altra satellite' },
    summary: {
      en: 'Shaka warns Lilith against underestimating the Straw Hats and tells her to bring them to the laboratory.',
      it: 'Shaka avverte Lilith di non sottovalutare i pirati di Cappello di Paglia e le dice di portarli al laboratorio.',
    },
  },
  'shakaDragon': {
    character: 'monkey-d-dragon',
    type: { en: 'Contact', it: 'Contatto' },
    summary: {
      en: 'Shaka calls Dragon to tell him that he expects to die soon.',
      it: 'Shaka chiama Dragon per dirgli che pensa di morire presto.',
    },
  },
  'shakaYork': {
    character: 'york',
    type: { en: 'Satellite who shoots him', it: 'Satellite che gli spara' },
    summary: {
      en: 'York shoots Shaka when he finds the imprisoned Vegapunk.',
      it: 'York spara a Shaka quando trova Vegapunk prigioniero.',
    },
  },
  'shakaEdison': {
    character: 'edison',
    type: {
      en: 'Satellite who rebuilds his body',
      it: 'Satellite che ricostruisce il suo corpo',
    },
    summary: {
      en: 'Shaka speaks through the shared body Edison builds from spare satellite parts.',
      it: 'Shaka parla attraverso il corpo comune che Edison costruisce con i ricambi dei satelliti.',
    },
  },
  'lilithShaka': {
    character: 'shaka',
    type: { en: 'Fellow satellite', it: 'Altro satellite' },
    summary: {
      en: 'Lilith follows Shaka’s warning to bring the Straw Hats to the laboratory instead of attacking them.',
      it: 'Lilith segue l’avvertimento di Shaka e porta i pirati di Cappello di Paglia al laboratorio invece di attaccarli.',
    },
  },
  'lilithEdison': {
    character: 'edison',
    type: { en: 'Satellite she protects', it: 'Satellite che protegge' },
    summary: {
      en: 'Lilith rushes to Edison after he survives an attack while stopping the Seraphim.',
      it: 'Lilith corre da Edison dopo che è sopravvissuto a un attacco mentre fermava i serafini.',
    },
  },
  'lilithLuffy': {
    character: 'monkey-d-luffy',
    type: { en: 'Ally who takes her away', it: 'Alleato che la porta via' },
    summary: {
      en: 'Lilith escapes Egghead with Luffy and tells him the other Vegapunks are still alive in a different sense.',
      it: 'Lilith fugge da Egghead con Rufy e gli spiega che gli altri Vegapunk sono ancora vivi in un senso diverso.',
    },
  },
  'lilithStellaClone': {
    character: 'vegapunk',
    type: {
      en: 'Original she plans to revive',
      it: 'Originale che vuole far rivivere',
    },
    summary: {
      en: 'Lilith brings a clone of Vegapunk to Elbaph and plans a new laboratory to revive him.',
      it: 'Lilith porta un clone di Vegapunk a Elbaf e progetta un nuovo laboratorio per farlo rivivere.',
    },
  },
  'edisonYork': {
    character: 'york',
    type: { en: 'Fellow satellite', it: 'Altra satellite' },
    summary: {
      en: 'York handles bodily needs so Edison can keep working.',
      it: 'York si occupa delle necessità fisiche affinché Edison possa continuare a lavorare.',
    },
  },
  'pythagorasYork': {
    character: 'york',
    type: { en: 'Fellow satellite', it: 'Altra satellite' },
    summary: {
      en: 'York handles bodily needs so Pythagoras can keep working.',
      it: 'York si occupa delle necessità fisiche affinché Pythagoras possa continuare a lavorare.',
    },
  },
  'edisonStussy': {
    character: 'stussy',
    type: { en: 'Ally he urges to escape', it: 'Alleata che esorta a fuggire' },
    summary: {
      en: 'Edison tells Stussy to leave the laboratory rather than stay behind for him.',
      it: 'Edison dice a Stussy di lasciare il laboratorio invece di restare per lui.',
    },
  },
  'edisonLilith': {
    character: 'lilith',
    type: { en: 'Satellite he saves', it: 'Satellite che salva' },
    summary: {
      en: 'Edison extends the cloud so Lilith and the Sunny can escape from the laboratory.',
      it: 'Edison estende la nuvola affinché Lilith e la Sunny possano fuggire dal laboratorio.',
    },
  },
  'satelliteYorkBetrayal': {
    character: 'york',
    type: {
      en: 'Satellite who betrays the others',
      it: 'Satellite che tradisce gli altri',
    },
    summary: {
      en: 'York reveals that she wants to eliminate the other Vegapunks and become a Celestial Dragon.',
      it: 'York rivela di voler eliminare gli altri Vegapunk e diventare un Drago Celeste.',
    },
  },
  'edisonYorkTraitor': {
    character: 'york',
    type: { en: 'Satellite he evades', it: 'Satellite che elude' },
    summary: {
      en: 'Edison disconnects from Punk Records and takes it away without York realising he survived.',
      it: 'Edison si scollega da Punk Records e lo porta via senza che York si accorga che è sopravvissuto.',
    },
  },
  'edisonShaka': {
    character: 'shaka',
    type: {
      en: 'Satellite sharing his body',
      it: 'Satellite con cui condivide il corpo',
    },
    summary: {
      en: 'Edison rebuilds a body through which Shaka, Pythagoras and Atlas also speak.',
      it: 'Edison ricostruisce un corpo attraverso cui parlano anche Shaka, Pythagoras e Atlas.',
    },
  },
  'pythagorasSnake': {
    character: 's-snake',
    type: { en: 'Attacker', it: 'Assalitrice' },
    summary: {
      en: 'S-Snake crushes Pythagoras’s detached head during the attack on the laboratory.',
      it: 'S-Snake schiaccia la testa staccata di Pythagoras durante l’attacco al laboratorio.',
    },
  },
  'pythagorasEdison': {
    character: 'edison',
    type: {
      en: 'Satellite who rebuilds his body',
      it: 'Satellite che ricostruisce il suo corpo',
    },
    summary: {
      en: 'Pythagoras speaks through the shared body Edison assembles on Punk Records.',
      it: 'Pythagoras parla attraverso il corpo comune che Edison assembla su Punk Records.',
    },
  },
  'atlasLuffy': {
    character: 'monkey-d-luffy',
    type: { en: 'Visitor she helps', it: 'Visitatore che aiuta' },
    summary: {
      en: 'Atlas shows Luffy’s group the island’s machines, including its automatic food maker.',
      it: 'Atlas mostra al gruppo di Rufy le macchine dell’isola, compresa quella che prepara il cibo.',
    },
  },
  'atlasLucci': {
    character: 'rob-lucci',
    type: { en: 'Attacker', it: 'Assalitore' },
    summary: {
      en: 'Lucci badly damages Atlas when she confronts him on Egghead.',
      it: 'Lucci danneggia gravemente Atlas quando lei lo affronta su Egghead.',
    },
  },
  'atlasLilith': {
    character: 'lilith',
    type: { en: 'Satellite she protects', it: 'Satellite che protegge' },
    summary: {
      en: 'Atlas knocks Lilith unconscious to conceal her survival from York before sending her away on the Sunny.',
      it: 'Atlas fa perdere i sensi a Lilith per nascondere a York che è viva, prima di farla partire sulla Sunny.',
    },
  },
  'atlasNusjuro': {
    character: 'ethanbaron-v-nusjuro',
    type: { en: 'Enemy she holds back', it: 'Nemico che trattiene' },
    summary: {
      en: 'Atlas confronts Nusjuro and explodes so the Sunny can leave.',
      it: 'Atlas affronta Nusjuro ed esplode per permettere alla Sunny di partire.',
    },
  },
  'atlasEdison': {
    character: 'edison',
    type: {
      en: 'Satellite who rebuilds her body',
      it: 'Satellite che ricostruisce il suo corpo',
    },
    summary: {
      en: 'Atlas speaks through the shared body Edison constructs after the escape.',
      it: 'Atlas parla attraverso il corpo comune che Edison costruisce dopo la fuga.',
    },
  },
  'yorkEdison': {
    character: 'edison',
    type: { en: 'Fellow satellite', it: 'Altro satellite' },
    summary: {
      en: 'York eats for Edison while he works on new ideas.',
      it: 'York mangia per Edison mentre lui lavora a nuove idee.',
    },
  },
  'yorkStellaTraitor': {
    character: 'vegapunk',
    type: { en: 'Original she betrays', it: 'Originale che tradisce' },
    summary: {
      en: 'York imprisons Vegapunk and plans to become the only Vegapunk left.',
      it: 'York imprigiona Vegapunk e progetta di diventare l’unico Vegapunk rimasto.',
    },
  },
  'yorkShaka': {
    character: 'shaka',
    type: { en: 'Satellite she shoots', it: 'Satellite a cui spara' },
    summary: {
      en: 'York shoots Shaka as he reaches the imprisoned Vegapunk.',
      it: 'York spara a Shaka quando raggiunge Vegapunk prigioniero.',
    },
  },
  'yorkSnake': {
    character: 's-snake',
    type: { en: 'Seraphim she commands', it: 'Serafino a cui dà ordini' },
    summary: {
      en: 'York has S-Snake temporarily petrify her to hide her part in the attacks.',
      it: 'York ordina a S-Snake di pietrificarla temporaneamente per nascondere il suo ruolo negli attacchi.',
    },
  },
  'yorkMars': {
    character: 'marcus-mars',
    type: { en: 'Elder she assists', it: 'Astro che assiste' },
    summary: {
      en: 'York guides Mars in his search for the snail broadcasting Vegapunk’s message.',
      it: 'York guida Mars nella ricerca del lumacofono che trasmette il messaggio di Vegapunk.',
    },
  },
  'yorkGarling': {
    character: 'figarland-garling',
    type: { en: 'New superior', it: 'Nuovo superiore' },
    summary: {
      en: 'Garling announces that York now answers directly to him.',
      it: 'Garling annuncia che York ora risponde direttamente a lui.',
    },
  },
  's-snakeModel': {
    character: 'boa-hancock',
    type: { en: 'Genetic model', it: 'Modello genetico' },
    summary: {
      en: 'S-Snake is a Seraphim clone based on Hancock, rather than the original person.',
      it: 'S-Snake è un clone serafino basato su Hancock, distinto dalla persona originale.',
    },
  },
  's-snakeCreator': {
    character: 'vegapunk',
    type: { en: 'Creator', it: 'Creatore' },
    summary: {
      en: 'Vegapunk creates the Seraphim as living weapons using cloning and artificial blood.',
      it: 'Vegapunk crea i serafini come armi viventi mediante clonazione e sangue artificiale.',
    },
  },
  's-hawkModel': {
    character: 'dracule-mihawk',
    type: { en: 'Genetic model', it: 'Modello genetico' },
    summary: {
      en: 'S-Hawk is a Seraphim clone based on Mihawk, rather than the original person.',
      it: 'S-Hawk è un clone serafino basato su Mihawk, distinto dalla persona originale.',
    },
  },
  's-hawkCreator': {
    character: 'vegapunk',
    type: { en: 'Creator', it: 'Creatore' },
    summary: {
      en: 'Vegapunk creates the Seraphim as living weapons using cloning and artificial blood.',
      it: 'Vegapunk crea i serafini come armi viventi mediante clonazione e sangue artificiale.',
    },
  },
  's-bearModel': {
    character: 'bartholomew-kuma',
    type: { en: 'Genetic model', it: 'Modello genetico' },
    summary: {
      en: 'S-Bear is a Seraphim clone based on Kuma, rather than the original person.',
      it: 'S-Bear è un clone serafino basato su Kuma, distinto dalla persona originale.',
    },
  },
  's-bearCreator': {
    character: 'vegapunk',
    type: { en: 'Creator', it: 'Creatore' },
    summary: {
      en: 'Vegapunk creates the Seraphim as living weapons using cloning and artificial blood.',
      it: 'Vegapunk crea i serafini come armi viventi mediante clonazione e sangue artificiale.',
    },
  },
  's-sharkModel': {
    character: 'jinbe',
    type: { en: 'Genetic model', it: 'Modello genetico' },
    summary: {
      en: 'S-Shark is a Seraphim clone based on Jinbe, rather than the original person.',
      it: 'S-Shark è un clone serafino basato su Jinbe, distinto dalla persona originale.',
    },
  },
  's-sharkCreator': {
    character: 'vegapunk',
    type: { en: 'Creator', it: 'Creatore' },
    summary: {
      en: 'Vegapunk creates the Seraphim as living weapons using cloning and artificial blood.',
      it: 'Vegapunk crea i serafini come armi viventi mediante clonazione e sangue artificiale.',
    },
  },
  'snakeYork': {
    character: 'york',
    type: { en: 'Commander', it: 'Comandante' },
    summary: {
      en: 'S-Snake follows York’s secret orders to attack the laboratory and disguise York’s involvement.',
      it: 'S-Snake segue gli ordini segreti di York di attaccare il laboratorio e nascondere il suo coinvolgimento.',
    },
  },
  'snakeLuffy': {
    character: 'monkey-d-luffy',
    type: { en: 'Person she favours', it: 'Persona per cui ha un debole' },
    summary: {
      en: 'S-Snake agrees to undo the petrification of Luffy’s friends when he asks her.',
      it: 'S-Snake accetta di annullare la pietrificazione degli amici di Rufy quando lui glielo chiede.',
    },
  },
  'hawkZoro': {
    character: 'roronoa-zoro',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Zoro intercepts S-Hawk’s attack on Lilith and clashes swords with him.',
      it: 'Zoro intercetta l’attacco di S-Hawk a Lilith e incrocia le spade con lui.',
    },
  },
  'bearLuffy': {
    character: 'monkey-d-luffy',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'S-Bear fights Luffy and Lucci after attacking the laboratory.',
      it: 'S-Bear combatte contro Rufy e Lucci dopo aver attaccato il laboratorio.',
    },
  },
  'sharkSanji': {
    character: 'sanji',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Sanji intervenes when S-Shark attacks Nami and withstands his punch.',
      it: 'Sanji interviene quando S-Shark attacca Nami e resiste al suo pugno.',
    },
  },
  'ginnyIva': {
    character: 'emporio-ivankov',
    type: { en: 'Companion in captivity', it: 'Compagno di prigionia' },
    summary: {
      en: 'Ginny calls Ivankov her big brother while they plan to escape slavery on God Valley.',
      it: 'Ginny chiama Ivankov fratellone mentre progettano di sfuggire alla schiavitù su God Valley.',
    },
  },
  'ginnyKuma': {
    character: 'bartholomew-kuma',
    type: { en: 'Friend she escapes with', it: 'Amico con cui fugge' },
    summary: {
      en: 'Ginny escapes God Valley with Kuma and settles with him in Sorbet.',
      it: 'Ginny fugge da God Valley con Kuma e si stabilisce con lui a Sorbet.',
    },
  },
  'ginnyKumaProposal': {
    character: 'bartholomew-kuma',
    type: { en: 'Man she wants to marry', it: 'Uomo che vuole sposare' },
    summary: {
      en: 'Ginny asks Kuma to marry her, but he refuses because he fears passing on his family’s suffering.',
      it: 'Ginny chiede a Kuma di sposarla, ma lui rifiuta per paura di trasmettere la sofferenza della sua famiglia.',
    },
  },
  'ginnyBonney': {
    character: 'jewelry-bonney',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'Ginny brings her daughter Bonney back to Sorbet before dying of Sapphire Scales.',
      it: 'Ginny riporta sua figlia Bonney a Sorbet prima di morire di scaglie di zaffiro.',
    },
  },
  'ginnySaturn': {
    character: 'jaygarcia-saturn',
    type: {
      en: 'Man who experiments on her',
      it: 'Uomo che conduce esperimenti su di lei',
    },
    summary: {
      en: 'Saturn reveals that his experiments caused Ginny’s illness, which also passed to Bonney.',
      it: 'Saturn rivela che i suoi esperimenti hanno causato la malattia di Ginny, trasmessa anche a Bonney.',
    },
  },
  'clappKuma': {
    character: 'bartholomew-kuma',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'Clapp urges his enslaved son Kuma to survive and tells him about the Sun God Nika.',
      it: 'Klap esorta suo figlio Kuma, ridotto in schiavitù, a sopravvivere e gli racconta del Dio del Sole Nika.',
    },
  },
  'bekoriKuma': {
    character: 'bartholomew-kuma',
    type: { en: 'Rebel he imprisons', it: 'Ribelle che imprigiona' },
    summary: {
      en: 'Bekori imprisons Kuma after he opposes the enslavement of southern Sorbet.',
      it: 'Bekori imprigiona Kuma dopo che si è opposto alla riduzione in schiavitù del sud di Sorbet.',
    },
  },
  'bekoriKumaDefeat': {
    character: 'bartholomew-kuma',
    type: { en: 'Opponent who deposes him', it: 'Avversario che lo depone' },
    summary: {
      en: 'Kuma overthrows Bekori and later sinks the fleet he brings to reclaim Sorbet.',
      it: 'Kuma rovescia Bekori e poi affonda la flotta con cui tenta di riconquistare Sorbet.',
    },
  },
  'bekoriDragon': {
    character: 'monkey-d-dragon',
    type: {
      en: 'Rebel who attacks his regime',
      it: 'Ribelle che attacca il suo regime',
    },
    summary: {
      en: 'Dragon and Ivankov attack Sorbet, free Bekori’s prisoners and force an end to his slave policy.',
      it: 'Dragon e Ivankov attaccano Sorbet, liberano i prigionieri di Bekori e impongono l’abolizione della sua politica schiavista.',
    },
  },
  'conneyBulldog': {
    character: 'bulldog',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'Conney accompanies her son Bulldog when he warns Kuma about Bekori’s return.',
      it: 'Conney accompagna suo figlio Bulldog quando mette in guardia Kuma sul ritorno di Bekori.',
    },
  },
  'bulldogConney': {
    character: 'conney',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'Bulldog visits Kuma with his mother Conney to discuss the danger from Bekori.',
      it: 'Bulldog visita Kuma con sua madre Conney per discutere del pericolo rappresentato da Bekori.',
    },
  },
  'bulldogKuma': {
    character: 'bartholomew-kuma',
    type: { en: 'King he assists', it: 'Re che assiste' },
    summary: {
      en: 'Bulldog governs Sorbet while Kuma holds the title of king and looks after the elderly.',
      it: 'Bulldog governa Sorbet mentre Kuma porta il titolo di re e si prende cura degli anziani.',
    },
  },
  'conneyKuma': {
    character: 'bartholomew-kuma',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'Conney visits Kuma with Bulldog before Kuma leaves Sorbet.',
      it: 'Conney visita Kuma con Bulldog prima che Kuma lasci Sorbet.',
    },
  },
  'conneyBonney': {
    character: 'jewelry-bonney',
    type: {
      en: 'Child entrusted to her care',
      it: 'Bambina affidata alle sue cure',
    },
    summary: {
      en: 'Kuma entrusts Bonney to Conney and Bulldog when he leaves Sorbet.',
      it: 'Kuma affida Bonney a Conney e Bulldog quando lascia Sorbet.',
    },
  },
  'bulldogBonney': {
    character: 'jewelry-bonney',
    type: {
      en: 'Child entrusted to his care',
      it: 'Bambina affidata alle sue cure',
    },
    summary: {
      en: 'Kuma entrusts Bonney and Sorbet to Bulldog before leaving.',
      it: 'Kuma affida Bonney e Sorbet a Bulldog prima di partire.',
    },
  },
  'conneyBonneyEscape': {
    character: 'jewelry-bonney',
    type: { en: 'Child she helps escape', it: 'Bambina che aiuta a fuggire' },
    summary: {
      en: 'Conney lends Bonney her clothes and helps arrange her escape from Alpha.',
      it: 'Conney presta i propri vestiti a Bonney e contribuisce a organizzare la sua fuga da Alpha.',
    },
  },
  'conneyAlpha': {
    character: 'alpha',
    type: { en: 'Agent she deceives', it: 'Agente che inganna' },
    summary: {
      en: 'Conney realises Alpha is a government agent and helps Bonney slip past her.',
      it: 'Conney capisce che Alpha è un’agente del Governo e aiuta Bonney a eludere la sua sorveglianza.',
    },
  },
  'alphaBonney': {
    character: 'jewelry-bonney',
    type: { en: 'Child she guards', it: 'Bambina che sorveglia' },
    summary: {
      en: 'Alpha poses as Bonney’s nurse while keeping her under government surveillance.',
      it: 'Alpha si finge infermiera di Bonney mentre la tiene sotto sorveglianza per il Governo.',
    },
  },
  'alphaBonneyEscape': {
    character: 'jewelry-bonney',
    type: {
      en: 'Prisoner who defeats her',
      it: 'Prigioniera che la sconfigge',
    },
    summary: {
      en: 'Alpha pursues Bonney when she escapes, but Bonney knocks her down.',
      it: 'Alpha insegue Bonney durante la fuga, ma Bonney la abbatte.',
    },
  },
  'alphaKuma': {
    character: 'bartholomew-kuma',
    type: {
      en: 'Father whose letters she destroys',
      it: 'Padre di cui distrugge le lettere',
    },
    summary: {
      en: 'Alpha destroys Kuma’s letters so they never reach Bonney.',
      it: 'Alpha distrugge le lettere di Kuma affinché non arrivino a Bonney.',
    },
  },
  'kujakuTsuru': {
    character: 'tsuru',
    type: { en: 'Grandmother', it: 'Nonna' },
    summary: {
      en: 'Kujaku is Vice Admiral Tsuru’s granddaughter.',
      it: 'Kujaku è la nipote della viceammiraglia Tsuru.',
    },
  },
  'kujakuGarp': {
    character: 'monkey-d-garp',
    type: { en: 'Commander', it: 'Comandante' },
    summary: {
      en: 'Kujaku reshapes the streets to trap pirates before Garp’s attack on Hachinosu.',
      it: 'Kujaku modifica le strade per intrappolare i pirati prima dell’attacco di Garp a Hachinosu.',
    },
  },
  'kujakuHibari': {
    character: 'hibari',
    type: { en: 'Colleague she reassures', it: 'Collega che rassicura' },
    summary: {
      en: 'Kujaku reassures Hibari after she thaws and worries about Koby.',
      it: 'Kujaku rassicura Hibari quando si risveglia dopo il congelamento e si preoccupa per Kobi.',
    },
  },
  'liliCobra': {
    character: 'nefertari-cobra',
    type: {
      en: 'Later king of her family',
      it: 'Re successivo della sua famiglia',
    },
    summary: {
      en: 'Cobra asks about Lili, an earlier queen of his family who never returned to Alabasta.',
      it: 'Cobra chiede notizie di Lili, una precedente regina della sua famiglia che non è mai tornata ad Alabasta.',
    },
  },
  'liliIm': {
    character: 'im',
    type: { en: 'Ruler who blames her', it: 'Sovrano che la accusa' },
    summary: {
      en: 'Im blames Lili for the spread of the Poneglyphs and questions whether it was a mistake.',
      it: 'Im attribuisce a Lili la diffusione dei Poneglyph e si chiede se sia stata un errore.',
    },
  },
  'garlingMjosgard': {
    character: 'donquixote-mjosgard',
    type: { en: 'Noble he executes', it: 'Nobile che giustizia' },
    summary: {
      en: 'Garling executes Mjosgard for protecting the fish-men.',
      it: 'Garling giustizia Myosgard per aver protetto gli uomini-pesce.',
    },
  },
  'garlingYork': {
    character: 'york',
    type: { en: 'Subordinate', it: 'Subordinata' },
    summary: {
      en: 'Garling takes direct command of York when he becomes the Warrior God of Science and Defence.',
      it: 'Garling assume il comando diretto di York quando diventa il Dio Guerriero della Scienza e della Difesa.',
    },
  },
  'garlingSaturn': {
    character: 'jaygarcia-saturn',
    type: { en: 'Elder he replaces', it: 'Astro che sostituisce' },
    summary: {
      en: 'Garling takes Saturn’s seat among the Five Elders.',
      it: 'Garling prende il posto di Saturn tra i Cinque Astri di Saggezza.',
    },
  },
  'garlingShamrock': {
    character: 'figarland-shamrock',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'Shamrock, the commander of the Knights of God, is revealed to be Garling’s son.',
      it: 'Shamrock, comandante dei Cavalieri di Dio, si rivela figlio di Garling.',
    },
  },
  'garlingShanks': {
    character: 'shanks',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'Shamrock identifies Shanks as his younger twin brother, making him another son of Garling.',
      it: 'Shamrock indica Shanks come suo fratello gemello minore, rivelandolo come un altro figlio di Garling.',
    },
  },
  'saturnKizaru': {
    character: 'borsalino',
    type: { en: 'Subordinate', it: 'Subordinato' },
    summary: {
      en: 'Saturn travels to Egghead aboard Kizaru’s ship and discusses Vegapunk with him.',
      it: 'Saturn viaggia verso Egghead sulla nave di Kizaru e discute con lui di Vegapunk.',
    },
  },
  'saturnIm': {
    character: 'im',
    type: { en: 'Sovereign', it: 'Sovrano' },
    summary: {
      en: 'Saturn and the other Elders bow before Im and await orders.',
      it: 'Saturn e gli altri Astri si inchinano davanti a Im e attendono ordini.',
    },
  },
  'saturnKuma': {
    character: 'bartholomew-kuma',
    type: {
      en: 'Man he forces into servitude',
      it: 'Uomo che costringe a servirlo',
    },
    summary: {
      en: 'Saturn makes Kuma surrender his free will as a condition for Bonney’s treatment.',
      it: 'Saturn impone a Kuma di rinunciare alla propria volontà come condizione per curare Bonney.',
    },
  },
  'saturnGinny': {
    character: 'ginny',
    type: {
      en: 'Victim of his experiments',
      it: 'Vittima dei suoi esperimenti',
    },
    summary: {
      en: 'Saturn admits that his experiments caused Ginny’s illness and affected Bonney as well.',
      it: 'Saturn ammette che i suoi esperimenti hanno causato la malattia di Ginny e colpito anche Bonney.',
    },
  },
  'saturnBonney': {
    character: 'jewelry-bonney',
    type: { en: 'Child he tries to kill', it: 'Bambina che tenta di uccidere' },
    summary: {
      en: 'Saturn orders the Marines to shoot Bonney while holding her captive.',
      it: 'Saturn ordina ai marine di sparare a Bonney mentre la tiene prigioniera.',
    },
  },
  'saturnImDeath': {
    character: 'im',
    type: { en: 'Sovereign who kills him', it: 'Sovrano che lo uccide' },
    summary: {
      en: 'Im blames Saturn for letting Joy Boy escape, and Saturn withers away while begging for mercy.',
      it: 'Im accusa Saturn di aver lasciato fuggire Joy Boy e Saturn avvizzisce mentre implora pietà.',
    },
  },
  'marcus-marsIm': {
    character: 'im',
    type: { en: 'Sovereign', it: 'Sovrano' },
    summary: {
      en: 'He serves Im alongside the other Five Elders and carries out the ruler’s orders.',
      it: 'Serve Im insieme agli altri Cinque Astri di Saggezza ed esegue i suoi ordini.',
    },
  },
  'marcus-marsSabo': {
    character: 'sabo',
    type: { en: 'Witness he attacks', it: 'Testimone che attacca' },
    summary: {
      en: 'He joins the other Elders in attacking Sabo after Sabo sees Im in the throne room.',
      it: 'Si unisce agli altri Astri nell’attacco a Sabo dopo che Sabo ha visto Im nella sala del trono.',
    },
  },
  'topman-warcuryIm': {
    character: 'im',
    type: { en: 'Sovereign', it: 'Sovrano' },
    summary: {
      en: 'He serves Im alongside the other Five Elders and carries out the ruler’s orders.',
      it: 'Serve Im insieme agli altri Cinque Astri di Saggezza ed esegue i suoi ordini.',
    },
  },
  'topman-warcurySabo': {
    character: 'sabo',
    type: { en: 'Witness he attacks', it: 'Testimone che attacca' },
    summary: {
      en: 'He joins the other Elders in attacking Sabo after Sabo sees Im in the throne room.',
      it: 'Si unisce agli altri Astri nell’attacco a Sabo dopo che Sabo ha visto Im nella sala del trono.',
    },
  },
  'ethanbaron-v-nusjuroIm': {
    character: 'im',
    type: { en: 'Sovereign', it: 'Sovrano' },
    summary: {
      en: 'He serves Im alongside the other Five Elders and carries out the ruler’s orders.',
      it: 'Serve Im insieme agli altri Cinque Astri di Saggezza ed esegue i suoi ordini.',
    },
  },
  'ethanbaron-v-nusjuroSabo': {
    character: 'sabo',
    type: { en: 'Witness he attacks', it: 'Testimone che attacca' },
    summary: {
      en: 'He joins the other Elders in attacking Sabo after Sabo sees Im in the throne room.',
      it: 'Si unisce agli altri Astri nell’attacco a Sabo dopo che Sabo ha visto Im nella sala del trono.',
    },
  },
  'shepherd-ju-peterIm': {
    character: 'im',
    type: { en: 'Sovereign', it: 'Sovrano' },
    summary: {
      en: 'He serves Im alongside the other Five Elders and carries out the ruler’s orders.',
      it: 'Serve Im insieme agli altri Cinque Astri di Saggezza ed esegue i suoi ordini.',
    },
  },
  'shepherd-ju-peterSabo': {
    character: 'sabo',
    type: { en: 'Witness he attacks', it: 'Testimone che attacca' },
    summary: {
      en: 'He joins the other Elders in attacking Sabo after Sabo sees Im in the throne room.',
      it: 'Si unisce agli altri Astri nell’attacco a Sabo dopo che Sabo ha visto Im nella sala del trono.',
    },
  },
  'marsYork': {
    character: 'york',
    type: { en: 'Guide', it: 'Guida' },
    summary: {
      en: 'Mars orders York to locate the snail broadcasting Vegapunk’s message.',
      it: 'Mars ordina a York di localizzare il lumacofono che trasmette il messaggio di Vegapunk.',
    },
  },
  'marsLuffy': {
    character: 'monkey-d-luffy',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Luffy sends Mars flying with help from Bonney, Sanji and Franky.',
      it: 'Rufy scaraventa lontano Mars con l’aiuto di Bonney, Sanji e Franky.',
    },
  },
  'warcuryLuffy': {
    character: 'monkey-d-luffy',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Warcury confronts Luffy and the giants on Egghead with a powerful roar.',
      it: 'Warcury affronta Rufy e i giganti su Egghead con un potente ruggito.',
    },
  },
  'warcuryEmet': {
    character: 'emet',
    type: { en: 'Robot who stops him', it: 'Robot che lo ferma' },
    summary: {
      en: 'Emet punches Warcury away from the giants’ ship as he charges it.',
      it: 'Emet allontana Warcury dalla nave dei giganti con un pugno mentre la carica.',
    },
  },
  'nusjuroSanji': {
    character: 'sanji',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Sanji kicks Nusjuro as the Elder attacks Bonney’s group.',
      it: 'Sanji colpisce Nusjuro con un calcio mentre l’Astro attacca il gruppo di Bonney.',
    },
  },
  'nusjuroZoro': {
    character: 'roronoa-zoro',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Zoro intercepts Nusjuro’s attack on the Sunny and clashes swords with him.',
      it: 'Zoro intercetta l’attacco di Nusjuro alla Sunny e incrocia le spade con lui.',
    },
  },
  'nusjuroAtlas': {
    character: 'atlas',
    type: {
      en: 'Satellite who holds him back',
      it: 'Satellite che lo trattiene',
    },
    summary: {
      en: 'Atlas tackles Nusjuro and explodes while the Sunny escapes.',
      it: 'Atlas si lancia contro Nusjuro ed esplode mentre la Sunny fugge.',
    },
  },
  'peterLuffy': {
    character: 'monkey-d-luffy',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Peter swallows Luffy during the Elders’ attack on Egghead before the giants cut him free.',
      it: 'Peter inghiotte Rufy durante l’attacco degli Astri a Egghead prima che i giganti lo liberino.',
    },
  },
  'peterEmet': {
    character: 'emet',
    type: { en: 'Robot he attacks', it: 'Robot che attacca' },
    summary: {
      en: 'Peter bites off Emet’s arm while the robot protects Luffy and the escaping ships.',
      it: 'Peter strappa un braccio a Emet con un morso mentre il robot protegge Rufy e le navi in fuga.',
    },
  },
  'bluegrassBonney': {
    character: 'jewelry-bonney',
    type: { en: 'Target', it: 'Bersaglio' },
    summary: {
      en: 'Bluegrass corners Bonney while riding a Pacifista, but Sanji takes Bonney away.',
      it: 'Bluegrass mette alle strette Bonney in groppa a un Pacifista, ma Sanji porta via la ragazza.',
    },
  },
  'bluegrassDoll': {
    character: 'doll',
    type: { en: 'Partner in battle', it: 'Compagna di battaglia' },
    summary: {
      en: 'Bluegrass carries Doll on a Sea Beast Weapon towards the giants’ ship.',
      it: 'Bluegrass trasporta Doll su una bestia marina meccanica verso la nave dei giganti.',
    },
  },
  'bluegrassBonneyChild': {
    character: 'jewelry-bonney',
    type: {
      en: 'Opponent who de-ages her',
      it: 'Avversaria che la ringiovanisce',
    },
    summary: {
      en: 'Bonney turns Bluegrass into a child as she and Doll attack the giants’ ship.',
      it: 'Bonney trasforma Bluegrass in una bambina mentre lei e Doll attaccano la nave dei giganti.',
    },
  },
  'pomskyBonney': {
    character: 'jewelry-bonney',
    type: { en: 'Target', it: 'Bersaglio' },
    summary: {
      en: 'Pomsky attacks Bonney and Sanji with his hammer while they flee towards Vegapunk’s tank.',
      it: 'Pomsky attacca Bonney e Sanji con il martello mentre fuggono verso il carro armato di Vegapunk.',
    },
  },
  'pomskyBonneyChild': {
    character: 'jewelry-bonney',
    type: { en: 'Opponent who defeats him', it: 'Avversaria che lo sconfigge' },
    summary: {
      en: 'Bonney turns Pomsky into a child and kicks him away after he calls her father a weapon.',
      it: 'Bonney trasforma Pomsky in un bambino e lo allontana con un calcio dopo che ha chiamato suo padre un’arma.',
    },
  },
  'redKingBonney': {
    character: 'jewelry-bonney',
    type: { en: 'Target', it: 'Bersaglio' },
    summary: {
      en: 'Red King blocks the route to the giants’ ship to stop Bonney from escaping.',
      it: 'Red King blocca la strada verso la nave dei giganti per impedire la fuga di Bonney.',
    },
  },
  'redKingFranky': {
    character: 'franky',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Franky knocks Red King down as the group heads for the giants’ ship.',
      it: 'Franky abbatte Red King mentre il gruppo raggiunge la nave dei giganti.',
    },
  },
  'guillotineVp': {
    character: 'vegapunk',
    type: { en: 'Scientist he condemns', it: 'Scienziato che condanna' },
    summary: {
      en: 'Guillotine calls Vegapunk a traitor for giving a pirate command over the Pacifista.',
      it: 'Guillotine definisce Vegapunk un traditore per aver dato a una pirata il comando dei Pacifista.',
    },
  },
  'guillotineBonney': {
    character: 'jewelry-bonney',
    type: { en: 'Target', it: 'Bersaglio' },
    summary: {
      en: 'Guillotine blocks the approach to the giants’ ship to prevent Bonney boarding.',
      it: 'Guillotine blocca l’accesso alla nave dei giganti per impedire a Bonney di salire a bordo.',
    },
  },
  'guillotineAtlas': {
    character: 'atlas',
    type: { en: 'Opponent', it: 'Avversaria' },
    summary: {
      en: 'Guillotine fights Atlas during the escape towards the giants’ ship.',
      it: 'Guillotine combatte contro Atlas durante la fuga verso la nave dei giganti.',
    },
  },
  'tosaBonney': {
    character: 'jewelry-bonney',
    type: { en: 'Target', it: 'Bersaglio' },
    summary: {
      en: 'Tosa pursues Bonney and prepares to attack her group with his hardened fingers.',
      it: 'Tosa insegue Bonney e si prepara ad attaccare il suo gruppo con le dita indurite.',
    },
  },
  'tosaBrogy': {
    character: 'brogy',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Brogy strikes Tosa down before he can reach Bonney’s group.',
      it: 'Brogi abbatte Tosa prima che raggiunga il gruppo di Bonney.',
    },
  },
  'urbanTosa': {
    character: 'tosa',
    type: {
      en: 'Colleague he loses contact with',
      it: 'Collega con cui perde i contatti',
    },
    summary: {
      en: 'Urban reports that Tosa’s line has gone silent during the pursuit of Bonney.',
      it: 'Urban riferisce che la linea di Tosa è muta durante l’inseguimento di Bonney.',
    },
  },
  'joyEmet': {
    character: 'emet',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'Joy Boy’s voice addresses Emet in the robot’s memories.',
      it: 'La voce di Joy Boy si rivolge a Emet nei ricordi del robot.',
    },
  },
  'joyEmetKnot': {
    character: 'emet',
    type: {
      en: 'Friend he protects across time',
      it: 'Amico che protegge attraverso il tempo',
    },
    summary: {
      en: 'Joy Boy leaves his strongest Haki tied in a knot inside Emet for a future moment of danger.',
      it: 'Joy Boy lascia il suo Haki più potente legato in un nodo dentro Emet per un futuro momento di pericolo.',
    },
  },
  'emetJoy': {
    character: 'joy-boy',
    type: { en: 'Friend he remembers', it: 'Amico che ricorda' },
    summary: {
      en: 'Emet recalls Joy Boy’s voice telling him to wait for the right moment.',
      it: 'Emet ricorda la voce di Joy Boy che gli dice di aspettare il momento giusto.',
    },
  },
  'emetLuffy': {
    character: 'monkey-d-luffy',
    type: { en: 'Ally he protects', it: 'Alleato che protegge' },
    summary: {
      en: 'Emet holds off the Elders so Luffy and his companions can escape.',
      it: 'Emet trattiene gli Astri affinché Rufy e i suoi compagni possano fuggire.',
    },
  },
  'emetJoyKnot': {
    character: 'joy-boy',
    type: {
      en: 'Friend whose Haki he releases',
      it: 'Amico di cui libera l’Haki',
    },
    summary: {
      en: 'Emet unties the knot of Haki Joy Boy left inside him to protect Luffy and the escaping ships.',
      it: 'Emet scioglie il nodo di Haki lasciato dentro di lui da Joy Boy per proteggere Rufy e le navi in fuga.',
    },
  },
  'emetWarcury': {
    character: 'topman-warcury',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Emet punches Warcury away from the giants’ ship.',
      it: 'Emet allontana Warcury dalla nave dei giganti con un pugno.',
    },
  },
  'joyZunesha': {
    character: 'zunesha',
    type: { en: 'Former companion', it: 'Antico compagno' },
    summary: {
      en: 'Zunesha was Joy Boy’s companion and recognises his return in the drums of liberation.',
      it: 'Zunesha era un compagno di Joy Boy e riconosce il suo ritorno nei tamburi della liberazione.',
    },
  },
  'lilithKuma': {
    character: 'bartholomew-kuma',
    type: {
      en: 'Man she plans to restore',
      it: 'Uomo che vuole riportare com’era',
    },
    summary: {
      en: 'Lilith promises Bonney that a new laboratory on Elbaph will let her restore Kuma.',
      it: 'Lilith promette a Bonney che un nuovo laboratorio su Elbaf le permetterà di riportare Kuma com’era.',
    },
  },
  'lilithBonney': {
    character: 'jewelry-bonney',
    type: {
      en: 'Girl she makes a promise to',
      it: 'Bambina a cui fa una promessa',
    },
    summary: {
      en: 'Lilith promises Bonney that she can restore Kuma once she has a laboratory.',
      it: 'Lilith promette a Bonney di poter riportare Kuma com’era quando avrà un laboratorio.',
    },
  },
  'jaygarcia-saturnHaraldDemand': {
    character: 'harald',
    type: { en: 'King he pressures', it: 'Re su cui fa pressione' },
    summary: {
      en: 'The Elders demand that Harald kill Rocks in exchange for Elbaph joining the World Government.',
      it: 'Gli Astri esigono che Harald uccida Rocks in cambio dell’ingresso di Elbaf nel Governo Mondiale.',
    },
  },
  'jaygarcia-saturnHaraldBlade': {
    character: 'harald',
    type: { en: 'King he recruits', it: 'Re che recluta' },
    summary: {
      en: 'The Elders make Harald a Devoted Blade and promise Elbaph admission if he becomes a Knight of God.',
      it: 'Gli Astri nominano Harald Lama Devota e promettono l’ingresso di Elbaf se diventerà un Cavaliere di Dio.',
    },
  },
  'marcus-marsHaraldDemand': {
    character: 'harald',
    type: { en: 'King he pressures', it: 'Re su cui fa pressione' },
    summary: {
      en: 'The Elders demand that Harald kill Rocks in exchange for Elbaph joining the World Government.',
      it: 'Gli Astri esigono che Harald uccida Rocks in cambio dell’ingresso di Elbaf nel Governo Mondiale.',
    },
  },
  'marcus-marsHaraldBlade': {
    character: 'harald',
    type: { en: 'King he recruits', it: 'Re che recluta' },
    summary: {
      en: 'The Elders make Harald a Devoted Blade and promise Elbaph admission if he becomes a Knight of God.',
      it: 'Gli Astri nominano Harald Lama Devota e promettono l’ingresso di Elbaf se diventerà un Cavaliere di Dio.',
    },
  },
  'topman-warcuryHaraldDemand': {
    character: 'harald',
    type: { en: 'King he pressures', it: 'Re su cui fa pressione' },
    summary: {
      en: 'The Elders demand that Harald kill Rocks in exchange for Elbaph joining the World Government.',
      it: 'Gli Astri esigono che Harald uccida Rocks in cambio dell’ingresso di Elbaf nel Governo Mondiale.',
    },
  },
  'topman-warcuryHaraldBlade': {
    character: 'harald',
    type: { en: 'King he recruits', it: 'Re che recluta' },
    summary: {
      en: 'The Elders make Harald a Devoted Blade and promise Elbaph admission if he becomes a Knight of God.',
      it: 'Gli Astri nominano Harald Lama Devota e promettono l’ingresso di Elbaf se diventerà un Cavaliere di Dio.',
    },
  },
  'ethanbaron-v-nusjuroHaraldDemand': {
    character: 'harald',
    type: { en: 'King he pressures', it: 'Re su cui fa pressione' },
    summary: {
      en: 'The Elders demand that Harald kill Rocks in exchange for Elbaph joining the World Government.',
      it: 'Gli Astri esigono che Harald uccida Rocks in cambio dell’ingresso di Elbaf nel Governo Mondiale.',
    },
  },
  'ethanbaron-v-nusjuroHaraldBlade': {
    character: 'harald',
    type: { en: 'King he recruits', it: 'Re che recluta' },
    summary: {
      en: 'The Elders make Harald a Devoted Blade and promise Elbaph admission if he becomes a Knight of God.',
      it: 'Gli Astri nominano Harald Lama Devota e promettono l’ingresso di Elbaf se diventerà un Cavaliere di Dio.',
    },
  },
  'shepherd-ju-peterHaraldDemand': {
    character: 'harald',
    type: { en: 'King he pressures', it: 'Re su cui fa pressione' },
    summary: {
      en: 'The Elders demand that Harald kill Rocks in exchange for Elbaph joining the World Government.',
      it: 'Gli Astri esigono che Harald uccida Rocks in cambio dell’ingresso di Elbaf nel Governo Mondiale.',
    },
  },
  'shepherd-ju-peterHaraldBlade': {
    character: 'harald',
    type: { en: 'King he recruits', it: 'Re che recluta' },
    summary: {
      en: 'The Elders make Harald a Devoted Blade and promise Elbaph admission if he becomes a Knight of God.',
      it: 'Gli Astri nominano Harald Lama Devota e promettono l’ingresso di Elbaf se diventerà un Cavaliere di Dio.',
    },
  },
  'saturnImVessel': {
    character: 'im',
    type: {
      en: 'Sovereign who uses his body',
      it: 'Sovrano che usa il suo corpo',
    },
    summary: {
      en: 'At God Valley, Im takes over Saturn’s body to confront Rocks. Im later kills Saturn after the failure on Egghead.',
      it: 'A God Valley Im prende il controllo del corpo di Saturn per affrontare Rocks. In seguito uccide Saturn dopo il fallimento su Egghead.',
    },
  },
  'garlingShakky': {
    character: 'shakky',
    type: {
      en: 'Woman he intends to force into marriage',
      it: 'Donna che vuole costringere a sposarlo',
    },
    summary: {
      en: 'Garling claims Shakky as his intended bride while she is held as a prize on God Valley.',
      it: 'Garling rivendica Shakky come futura sposa mentre lei è tenuta come premio a God Valley.',
    },
  },
  'garlingRocks': {
    character: 'rocks-d-xebec',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Garling attacks Rocks on God Valley but is defeated by him.',
      it: 'Garling attacca Rocks a God Valley ma viene sconfitto da lui.',
    },
  },
  'garlingRocksKilled': {
    character: 'rocks-d-xebec',
    type: { en: 'Man he kills', it: 'Uomo che uccide' },
    summary: {
      en: 'Garling delivers the killing blow to Rocks after Rocks has already been defeated.',
      it: 'Garling infligge il colpo mortale a Rocks dopo che Rocks è già stato sconfitto.',
    },
  },
  'garlingHarald': {
    character: 'harald',
    type: { en: 'Subordinate', it: 'Subordinato' },
    summary: {
      en: 'Garling gives Harald a long-range transponder snail after Harald becomes a Devoted Blade.',
      it: 'Garling dà a Harald un lumacofono a lunga distanza dopo che Harald è diventato Lama Devota.',
    },
  },
} satisfies Record<string, Relationship>

/** No personal bond is inferred from sharing a fleet or rank. */
export const eggheadRelationshipOmissions = {
  hound:
    'The reached story establishes fleet service and reactions to Vegapunk’s broadcast, but no sufficiently supported personal relationship.',
}

export const eggheadRelationships = {
  'vegapunk': [
    {
      episode: 1097,
      chapter: 1067,
      source: 'episode',
      value: [links.vpBonney, links.vpDragon],
    },
    {
      episode: 1098,
      chapter: 1067,
      value: [links.vpBonney, links.vpDragon, links.vpLuffy],
    },
    {
      episode: 1100,
      chapter: 1069,
      value: [links.vpBonney, links.vpDragon, links.vpLuffy, links.vpSentomaru],
    },
    {
      episode: 1111,
      chapter: 1078,
      value: [
        links.vpBonney,
        links.vpDragon,
        links.vpLuffy,
        links.vpYork,
        links.vpSentomaru,
      ],
    },
    {
      episode: 1134,
      chapter: 1100,
      value: [
        links.vpBonneyCured,
        links.vpKuma,
        links.vpLuffy,
        links.vpYork,
        links.vpKizaruFriend,
      ],
    },
    {
      episode: 1142,
      chapter: 1108,
      value: [
        links.vpBonneyCured,
        links.vpKuma,
        links.vpLuffy,
        links.vpYork,
        links.vpKizaru,
      ],
    },
  ],
  'hibari': [
    {
      episode: 1090,
      chapter: 1061,
      value: [links.hibariKoby, links.hibariHelmeppo],
    },
    {
      episode: 1114,
      chapter: 1081,
      value: [links.hibariKoby, links.hibariHelmeppo, links.hibariKuzan],
    },
    {
      episode: 1122,
      chapter: 1088,
      value: [links.hibariKobySafe, links.hibariHelmeppo, links.hibariKuzan],
    },
  ],
  'prince-grus': [
    {
      episode: 1090,
      chapter: 1061,
      value: [links.grusHibari, links.grusHelmeppo],
    },
    {
      episode: 1114,
      chapter: 1081,
      value: [
        links.grusKoby,
        links.grusGarp,
        links.grusHibari,
        links.grusHelmeppo,
      ],
    },
    {
      episode: 1122,
      chapter: 1088,
      value: [
        links.grusKobyTeam,
        links.grusGarp,
        links.grusHibari,
        links.grusHelmeppo,
      ],
    },
  ],
  'doll': [
    { episode: 1090, chapter: 1061, value: [links.dollTashigi] },
    {
      episode: 1103,
      chapter: 1071,
      value: [links.dollTashigi, links.dollGarp],
    },
    {
      episode: 1142,
      chapter: 1108,
      value: [
        links.dollSaul,
        links.dollBluegrass,
        links.dollTashigi,
        links.dollGarp,
      ],
    },
    {
      episode: 1151,
      chapter: 1118,
      value: [
        links.dollSaul,
        links.dollBluegrass,
        links.dollBonney,
        links.dollTashigi,
        links.dollGarp,
      ],
    },
  ],
  'shaka': [
    { episode: 1091, chapter: 1062, value: [links.shakaLilith] },
    {
      episode: 1094,
      chapter: 1064,
      value: [links.shakaLilith, links.shakaDragon],
    },
    {
      episode: 1096,
      chapter: 1066,
      value: [links.shakaStella, links.shakaLilith, links.shakaDragon],
    },
    {
      episode: 1111,
      chapter: 1078,
      value: [
        links.shakaStella,
        links.shakaYork,
        links.shakaLilith,
        links.shakaDragon,
      ],
    },
    {
      episode: 1155,
      chapter: 1125,
      value: [
        links.shakaStella,
        links.shakaYork,
        links.shakaEdison,
        links.shakaLilith,
        links.shakaDragon,
      ],
    },
  ],
  'lilith': [
    { episode: 1091, chapter: 1062, value: [links.lilithShaka] },
    {
      episode: 1096,
      chapter: 1066,
      value: [links.lilithStella, links.lilithShaka],
    },
    {
      episode: 1105,
      chapter: 1073,
      value: [links.lilithStella, links.lilithShaka, links.lilithEdison],
    },
    {
      episode: 1154,
      chapter: 1124,
      value: [
        links.lilithStella,
        links.lilithLuffy,
        links.lilithShaka,
        links.lilithEdison,
      ],
    },
    {
      episode: 1164,
      chapter: 1134,
      value: [
        links.lilithStellaClone,
        links.lilithKuma,
        links.lilithBonney,
        links.lilithLuffy,
        links.lilithShaka,
      ],
    },
  ],
  'edison': [
    { episode: 1095, chapter: 1065, value: [links.edisonYork] },
    {
      episode: 1096,
      chapter: 1066,
      value: [links.edisonStella, links.edisonYork],
    },
    {
      episode: 1111,
      chapter: 1078,
      value: [links.edisonStella, links.satelliteYorkBetrayal],
    },
    {
      episode: 1148,
      chapter: 1114,
      value: [
        links.edisonStella,
        links.satelliteYorkBetrayal,
        links.edisonLilith,
      ],
    },
    {
      episode: 1149,
      chapter: 1115,
      value: [
        links.edisonStella,
        links.satelliteYorkBetrayal,
        links.edisonLilith,
        links.edisonStussy,
      ],
    },
    {
      episode: 1155,
      chapter: 1125,
      value: [
        links.edisonStella,
        links.edisonYorkTraitor,
        links.edisonLilith,
        links.edisonStussy,
        links.edisonShaka,
      ],
    },
  ],
  'pythagoras': [
    { episode: 1095, chapter: 1065, value: [links.pythagorasYork] },
    {
      episode: 1096,
      chapter: 1066,
      value: [links.pythagorasStella, links.pythagorasYork],
    },
    {
      episode: 1111,
      chapter: 1078,
      value: [
        links.pythagorasStella,
        links.pythagorasSnake,
        links.satelliteYorkBetrayal,
      ],
    },
    {
      episode: 1155,
      chapter: 1125,
      value: [
        links.pythagorasStella,
        links.pythagorasEdison,
        links.pythagorasSnake,
        links.satelliteYorkBetrayal,
      ],
    },
  ],
  'atlas': [
    { episode: 1091, chapter: 1062, value: [links.atlasLuffy] },
    {
      episode: 1096,
      chapter: 1066,
      value: [links.atlasStella, links.atlasLuffy],
    },
    {
      episode: 1099,
      chapter: 1068,
      value: [links.atlasStella, links.atlasLuffy, links.atlasLucci],
    },
    {
      episode: 1152,
      chapter: 1120,
      value: [
        links.atlasStella,
        links.atlasLilith,
        links.atlasNusjuro,
        links.atlasLuffy,
        links.atlasLucci,
      ],
    },
    {
      episode: 1155,
      chapter: 1125,
      value: [
        links.atlasStella,
        links.atlasEdison,
        links.atlasLilith,
        links.atlasNusjuro,
        links.atlasLuffy,
      ],
    },
  ],
  'york': [
    { episode: 1095, chapter: 1065, value: [links.yorkEdison] },
    {
      episode: 1096,
      chapter: 1066,
      value: [links.yorkStella, links.yorkEdison],
    },
    {
      episode: 1111,
      chapter: 1078,
      value: [links.yorkStellaTraitor, links.yorkShaka, links.yorkEdison],
    },
    {
      episode: 1112,
      chapter: 1079,
      value: [
        links.yorkStellaTraitor,
        links.yorkShaka,
        links.yorkSnake,
        links.yorkEdison,
      ],
    },
    {
      episode: 1146,
      chapter: 1112,
      value: [
        links.yorkStellaTraitor,
        links.yorkShaka,
        links.yorkSnake,
        links.yorkMars,
        links.yorkEdison,
      ],
    },
    {
      episode: 1155,
      chapter: 1125,
      value: [
        links.yorkStellaTraitor,
        links.yorkGarling,
        links.yorkMars,
        links.yorkShaka,
        links.yorkSnake,
      ],
    },
  ],
  's-snake': [
    {
      episode: 1101,
      chapter: 1070,
      value: [links['s-snakeModel'], links['s-snakeCreator']],
    },
    {
      episode: 1112,
      chapter: 1079,
      value: [links['s-snakeModel'], links['s-snakeCreator'], links.snakeYork],
    },
    {
      episode: 1124,
      chapter: 1090,
      value: [
        links['s-snakeModel'],
        links.snakeLuffy,
        links['s-snakeCreator'],
        links.snakeYork,
      ],
    },
  ],
  's-hawk': [
    {
      episode: 1101,
      chapter: 1070,
      value: [links['s-hawkModel'], links['s-hawkCreator']],
    },
    {
      episode: 1105,
      chapter: 1073,
      value: [links['s-hawkModel'], links.hawkZoro, links['s-hawkCreator']],
    },
  ],
  's-bear': [
    {
      episode: 1101,
      chapter: 1070,
      value: [links['s-bearModel'], links['s-bearCreator']],
    },
    {
      episode: 1109,
      chapter: 1076,
      value: [links['s-bearModel'], links.bearLuffy, links['s-bearCreator']],
    },
  ],
  's-shark': [
    {
      episode: 1101,
      chapter: 1070,
      value: [links['s-sharkModel'], links['s-sharkCreator']],
    },
    {
      episode: 1111,
      chapter: 1078,
      value: [links['s-sharkModel'], links.sharkSanji, links['s-sharkCreator']],
    },
  ],
  'ginny': [
    { episode: 1129, chapter: 1095, value: [links.ginnyIva] },
    { episode: 1130, chapter: 1096, value: [links.ginnyKuma, links.ginnyIva] },
    {
      episode: 1131,
      chapter: 1097,
      value: [links.ginnyKumaProposal, links.ginnyIva],
    },
    {
      episode: 1132,
      chapter: 1098,
      value: [links.ginnyBonney, links.ginnyKumaProposal, links.ginnyIva],
    },
    {
      episode: 1137,
      chapter: 1103,
      value: [
        links.ginnyBonney,
        links.ginnyKumaProposal,
        links.ginnyIva,
        links.ginnySaturn,
      ],
    },
  ],
  'clapp': [{ episode: 1129, chapter: 1095, value: [links.clappKuma] }],
  'bekori': [
    {
      episode: 1131,
      chapter: 1097,
      value: [links.bekoriKuma, links.bekoriDragon],
    },
    {
      episode: 1133,
      chapter: 1099,
      value: [links.bekoriKumaDefeat, links.bekoriDragon],
    },
  ],
  'conney': [
    {
      episode: 1133,
      chapter: 1099,
      value: [links.conneyBulldog, links.conneyBonney, links.conneyKuma],
    },
    {
      episode: 1135,
      chapter: 1101,
      value: [
        links.conneyBulldog,
        links.conneyBonneyEscape,
        links.conneyAlpha,
        links.conneyKuma,
      ],
    },
  ],
  'bulldog': [
    {
      episode: 1133,
      chapter: 1099,
      value: [links.bulldogConney, links.bulldogKuma, links.bulldogBonney],
    },
  ],
  'alpha': [
    { episode: 1134, chapter: 1100, value: [links.alphaBonney] },
    {
      episode: 1135,
      chapter: 1101,
      value: [links.alphaBonneyEscape, links.alphaKuma],
    },
  ],
  'kujaku': [
    { episode: 1113, chapter: 1080, value: [links.kujakuTsuru] },
    {
      episode: 1114,
      chapter: 1081,
      value: [links.kujakuTsuru, links.kujakuGarp],
    },
    {
      episode: 1121,
      chapter: 1087,
      value: [links.kujakuTsuru, links.kujakuGarp, links.kujakuHibari],
    },
  ],
  'nefertari-lili': [
    { episode: 1118, chapter: 1084, value: [links.liliCobra] },
    { episode: 1119, chapter: 1085, value: [links.liliCobra, links.liliIm] },
  ],
  'figarland-garling': [
    { episode: 1120, chapter: 1086, value: [links.garlingMjosgard] },
    {
      episode: 1155,
      chapter: 1125,
      value: [links.garlingYork, links.garlingSaturn, links.garlingMjosgard],
    },
    {
      episode: 1167,
      chapter: 1137,
      value: [
        links.garlingShamrock,
        links.garlingYork,
        links.garlingSaturn,
        links.garlingMjosgard,
      ],
    },
    {
      episode: 1168,
      chapter: 1138,
      value: [
        links.garlingShamrock,
        links.garlingShanks,
        links.garlingYork,
        links.garlingSaturn,
        links.garlingMjosgard,
      ],
    },
    // Manga-only revelation; the episode number only orders this source-specific snapshot.
    {
      episode: 1159,
      chapter: 1159,
      source: 'chapter',
      value: [
        links.garlingShamrock,
        links.garlingShanks,
        links.garlingShakky,
        links.garlingYork,
        links.garlingSaturn,
      ],
    },
    // Manga-only revelation; the episode number only orders this source-specific snapshot.
    {
      episode: 1162,
      chapter: 1162,
      source: 'chapter',
      value: [
        links.garlingShamrock,
        links.garlingShanks,
        links.garlingRocks,
        links.garlingShakky,
        links.garlingYork,
      ],
    },
    // Manga-only revelation; the episode number only orders this source-specific snapshot.
    {
      episode: 1166,
      chapter: 1166,
      source: 'chapter',
      value: [
        links.garlingShamrock,
        links.garlingShanks,
        links.garlingRocksKilled,
        links.garlingShakky,
        links.garlingYork,
      ],
    },
    // Manga-only revelation; the episode number only orders this source-specific snapshot.
    {
      episode: 1167,
      chapter: 1167,
      source: 'chapter',
      value: [
        links.garlingShamrock,
        links.garlingShanks,
        links.garlingRocksKilled,
        links.garlingHarald,
        links.garlingYork,
      ],
    },
  ],
  'jaygarcia-saturn': [
    {
      episode: 1106,
      chapter: 1073,
      value: [links.saturnKizaru, links.saturnIm],
    },
    {
      episode: 1129,
      chapter: 1095,
      value: [links.saturnKizaru, links.saturnIm, links.saturnBonney],
    },
    {
      episode: 1134,
      chapter: 1100,
      value: [
        links.saturnKuma,
        links.saturnBonney,
        links.saturnKizaru,
        links.saturnIm,
      ],
    },
    {
      episode: 1137,
      chapter: 1103,
      value: [
        links.saturnKuma,
        links.saturnBonney,
        links.saturnGinny,
        links.saturnKizaru,
        links.saturnIm,
      ],
    },
    {
      episode: 1155,
      chapter: 1125,
      value: [
        links.saturnImDeath,
        links.saturnKuma,
        links.saturnBonney,
        links.saturnGinny,
        links.saturnKizaru,
      ],
    },
    // Manga-only revelation; the episode number only orders this source-specific snapshot.
    {
      episode: 1157,
      chapter: 1157,
      source: 'chapter',
      value: [
        links['jaygarcia-saturnHaraldDemand'],
        links.saturnImDeath,
        links.saturnKuma,
        links.saturnBonney,
        links.saturnGinny,
      ],
    },
    // Manga-only revelation; the episode number only orders this source-specific snapshot.
    {
      episode: 1162,
      chapter: 1162,
      source: 'chapter',
      value: [
        links['jaygarcia-saturnHaraldDemand'],
        links.saturnImVessel,
        links.saturnKuma,
        links.saturnBonney,
        links.saturnGinny,
      ],
    },
    // Manga-only revelation; the episode number only orders this source-specific snapshot.
    {
      episode: 1167,
      chapter: 1167,
      source: 'chapter',
      value: [
        links['jaygarcia-saturnHaraldBlade'],
        links.saturnImVessel,
        links.saturnKuma,
        links.saturnBonney,
        links.saturnGinny,
      ],
    },
  ],
  'marcus-mars': [
    {
      episode: 1120,
      chapter: 1086,
      value: [links['marcus-marsIm'], links['marcus-marsSabo']],
    },
    {
      episode: 1146,
      chapter: 1112,
      value: [links['marcus-marsIm'], links.marsYork, links['marcus-marsSabo']],
    },
    {
      episode: 1151,
      chapter: 1119,
      value: [
        links['marcus-marsIm'],
        links.marsLuffy,
        links.marsYork,
        links['marcus-marsSabo'],
      ],
    },
    // Manga-only revelation; the episode number only orders this source-specific snapshot.
    {
      episode: 1157,
      chapter: 1157,
      source: 'chapter',
      value: [
        links['marcus-marsHaraldDemand'],
        links['marcus-marsIm'],
        links.marsLuffy,
        links.marsYork,
        links['marcus-marsSabo'],
      ],
    },
    // Manga-only revelation; the episode number only orders this source-specific snapshot.
    {
      episode: 1167,
      chapter: 1167,
      source: 'chapter',
      value: [
        links['marcus-marsHaraldBlade'],
        links['marcus-marsIm'],
        links.marsLuffy,
        links.marsYork,
        links['marcus-marsSabo'],
      ],
    },
  ],
  'topman-warcury': [
    {
      episode: 1120,
      chapter: 1086,
      value: [links['topman-warcuryIm'], links['topman-warcurySabo']],
    },
    {
      episode: 1145,
      chapter: 1111,
      value: [
        links['topman-warcuryIm'],
        links.warcuryLuffy,
        links['topman-warcurySabo'],
      ],
    },
    {
      episode: 1151,
      chapter: 1119,
      value: [
        links['topman-warcuryIm'],
        links.warcuryLuffy,
        links.warcuryEmet,
        links['topman-warcurySabo'],
      ],
    },
    // Manga-only revelation; the episode number only orders this source-specific snapshot.
    {
      episode: 1157,
      chapter: 1157,
      source: 'chapter',
      value: [
        links['topman-warcuryHaraldDemand'],
        links['topman-warcuryIm'],
        links.warcuryLuffy,
        links.warcuryEmet,
        links['topman-warcurySabo'],
      ],
    },
    // Manga-only revelation; the episode number only orders this source-specific snapshot.
    {
      episode: 1167,
      chapter: 1167,
      source: 'chapter',
      value: [
        links['topman-warcuryHaraldBlade'],
        links['topman-warcuryIm'],
        links.warcuryLuffy,
        links.warcuryEmet,
        links['topman-warcurySabo'],
      ],
    },
  ],
  'ethanbaron-v-nusjuro': [
    {
      episode: 1120,
      chapter: 1086,
      value: [
        links['ethanbaron-v-nusjuroIm'],
        links['ethanbaron-v-nusjuroSabo'],
      ],
    },
    {
      episode: 1147,
      chapter: 1113,
      value: [
        links['ethanbaron-v-nusjuroIm'],
        links.nusjuroSanji,
        links['ethanbaron-v-nusjuroSabo'],
      ],
    },
    {
      episode: 1150,
      chapter: 1117,
      value: [
        links['ethanbaron-v-nusjuroIm'],
        links.nusjuroZoro,
        links.nusjuroSanji,
        links['ethanbaron-v-nusjuroSabo'],
      ],
    },
    {
      episode: 1152,
      chapter: 1120,
      value: [
        links['ethanbaron-v-nusjuroIm'],
        links.nusjuroAtlas,
        links.nusjuroZoro,
        links.nusjuroSanji,
        links['ethanbaron-v-nusjuroSabo'],
      ],
    },
    // Manga-only revelation; the episode number only orders this source-specific snapshot.
    {
      episode: 1157,
      chapter: 1157,
      source: 'chapter',
      value: [
        links['ethanbaron-v-nusjuroHaraldDemand'],
        links['ethanbaron-v-nusjuroIm'],
        links.nusjuroAtlas,
        links.nusjuroZoro,
        links.nusjuroSanji,
      ],
    },
    // Manga-only revelation; the episode number only orders this source-specific snapshot.
    {
      episode: 1167,
      chapter: 1167,
      source: 'chapter',
      value: [
        links['ethanbaron-v-nusjuroHaraldBlade'],
        links['ethanbaron-v-nusjuroIm'],
        links.nusjuroAtlas,
        links.nusjuroZoro,
        links.nusjuroSanji,
      ],
    },
  ],
  'shepherd-ju-peter': [
    {
      episode: 1120,
      chapter: 1086,
      value: [links['shepherd-ju-peterIm'], links['shepherd-ju-peterSabo']],
    },
    {
      episode: 1144,
      chapter: 1110,
      value: [
        links['shepherd-ju-peterIm'],
        links.peterLuffy,
        links['shepherd-ju-peterSabo'],
      ],
    },
    {
      episode: 1152,
      chapter: 1120,
      value: [
        links['shepherd-ju-peterIm'],
        links.peterEmet,
        links.peterLuffy,
        links['shepherd-ju-peterSabo'],
      ],
    },
    // Manga-only revelation; the episode number only orders this source-specific snapshot.
    {
      episode: 1157,
      chapter: 1157,
      source: 'chapter',
      value: [
        links['shepherd-ju-peterHaraldDemand'],
        links['shepherd-ju-peterIm'],
        links.peterEmet,
        links.peterLuffy,
        links['shepherd-ju-peterSabo'],
      ],
    },
    // Manga-only revelation; the episode number only orders this source-specific snapshot.
    {
      episode: 1167,
      chapter: 1167,
      source: 'chapter',
      value: [
        links['shepherd-ju-peterHaraldBlade'],
        links['shepherd-ju-peterIm'],
        links.peterEmet,
        links.peterLuffy,
        links['shepherd-ju-peterSabo'],
      ],
    },
  ],
  'bluegrass': [
    { episode: 1128, chapter: 1094, value: [links.bluegrassBonney] },
    {
      episode: 1142,
      chapter: 1108,
      value: [links.bluegrassBonney, links.bluegrassDoll],
    },
    {
      episode: 1151,
      chapter: 1118,
      value: [links.bluegrassBonneyChild, links.bluegrassDoll],
    },
  ],
  'pomsky': [
    // The anime names Pomsky before the manga; chapter 1108 only orders this anime entry.
    {
      episode: 1128,
      chapter: 1108,
      source: 'episode',
      value: [links.pomskyBonney],
    },
    { episode: 1142, chapter: 1108, value: [links.pomskyBonney] },
    { episode: 1146, chapter: 1112, value: [links.pomskyBonneyChild] },
  ],
  'red-king': [
    { episode: 1145, chapter: 1111, value: [links.redKingBonney] },
    {
      episode: 1146,
      chapter: 1112,
      value: [links.redKingFranky, links.redKingBonney],
    },
  ],
  'guillotine': [
    { episode: 1142, chapter: 1108, value: [links.guillotineVp] },
    {
      episode: 1145,
      chapter: 1111,
      value: [links.guillotineBonney, links.guillotineVp],
    },
    // His fight with Atlas is an anime addition, not a manga relationship.
    {
      episode: 1146,
      chapter: 1112,
      source: 'episode',
      value: [
        links.guillotineBonney,
        links.guillotineVp,
        links.guillotineAtlas,
      ],
    },
  ],
  'tosa': [
    {
      episode: 1142,
      chapter: 1108,
      value: [links.tosaBonney, links.tosaBrogy],
    },
  ],
  'urban': [{ episode: 1142, chapter: 1108, value: [links.urbanTosa] }],
  'joy-boy': [
    { episode: 1148, chapter: 1115, value: [links.joyZunesha] },
    // Both endpoints must be open: Emet is not available before 1151 / 1119.
    { episode: 1151, chapter: 1119, value: [links.joyEmet, links.joyZunesha] },
    {
      episode: 1153,
      chapter: 1122,
      value: [links.joyEmetKnot, links.joyZunesha],
    },
  ],
  'emet': [
    // Both endpoints must be open: Emet is not available before 1151 / 1119.
    { episode: 1151, chapter: 1119, value: [links.emetJoy, links.emetWarcury] },
    {
      episode: 1152,
      chapter: 1120,
      value: [links.emetJoy, links.emetLuffy, links.emetWarcury],
    },
    {
      episode: 1153,
      chapter: 1122,
      value: [links.emetJoyKnot, links.emetLuffy, links.emetWarcury],
    },
  ],
} satisfies Record<string, Timeline<Relationship[]>>
