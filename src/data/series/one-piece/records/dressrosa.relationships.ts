import type { Relationship, Timeline } from '~/data/types'

/** Wiki revisions: docs/content-provenance/relationships.json, sources.json. */
const retained = {
  koalaTiger: {
    character: 'fisher-tiger',
    type: { en: 'Liberator', it: 'Liberatore' },
    summary: {
      en: 'Fisher Tiger frees Koala from slavery and promises to take her home.',
      it: 'Fisher Tiger libera Koala dalla schiavitù e promette di riportarla a casa.',
    },
  },
  koalaArlong: {
    character: 'arlong',
    type: { en: 'Hostility', it: 'Ostilità' },
    summary: {
      en: 'Arlong attacks Koala because she is human.',
      it: 'Arlong aggredisce Koala perché è umana.',
    },
  },
  koalaHachi: {
    character: 'hatchan',
    type: { en: 'Protector', it: 'Protettore' },
    summary: {
      en: 'Hatchan stops Arlong from hurting Koala aboard the ship.',
      it: 'Hatchan impedisce ad Arlong di fare del male a Koala a bordo della nave.',
    },
  },
  koalaSabo: {
    character: 'sabo',
    type: { en: 'Revolutionary colleague', it: 'Compagno rivoluzionario' },
    summary: {
      en: 'Koala works with Sabo in Dressrosa and coordinates their investigation.',
      it: 'Koala lavora con Sabo a Dressrosa e coordina le indagini.',
    },
  },
  koalaHack: {
    character: 'hack',
    type: { en: 'Revolutionary colleague', it: 'Compagno rivoluzionario' },
    summary: {
      en: 'Koala and Hack exchange information during the operation in Dressrosa.',
      it: 'Koala e Hack si scambiano informazioni durante l’operazione a Dressrosa.',
    },
  },
  koalaRobin: {
    character: 'nico-robin',
    type: { en: 'Friend', it: 'Amica' },
    summary: {
      en: 'Koala embraces Robin when they meet again in Dressrosa.',
      it: 'Koala abbraccia Robin quando si ritrovano a Dressrosa.',
    },
  },
  koalaDragon: {
    character: 'monkey-d-dragon',
    type: { en: 'Commander', it: 'Comandante' },
    summary: {
      en: 'Koala reports her findings to Dragon and receives her next assignment from him.',
      it: 'Koala riferisce a Dragon ciò che ha scoperto e riceve da lui il prossimo incarico.',
    },
  },
  koalaRobinTeacher: {
    character: 'nico-robin',
    type: { en: 'Friend and instructor', it: 'Amica e insegnante' },
    summary: {
      en: 'Koala teaches Robin the basics of fish-man karate during her training.',
      it: 'Koala insegna a Robin le basi del karate degli uomini-pesce durante l’addestramento.',
    },
  },
  kinSanji: {
    character: 'sanji',
    type: { en: 'Rescuer', it: 'Soccorritore' },
    summary: {
      en: 'Sanji recovers Kin’emon’s torso and helps him reunite his body.',
      it: 'Sanji recupera il busto di Kin’emon e lo aiuta a ricomporre il corpo.',
    },
  },
  kinLaw: {
    character: 'trafalgar-law',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Law cuts Kin’emon into pieces during his search on Punk Hazard.',
      it: 'Law taglia Kin’emon a pezzi durante le sue ricerche a Punk Hazard.',
    },
  },
  kinMomoClaim: {
    character: 'momonosuke',
    type: { en: 'Claimed son', it: 'Figlio dichiarato' },
    summary: {
      en: 'Kin’emon presents Momonosuke as his son and refuses to leave without him.',
      it: 'Kin’emon presenta Momonosuke come suo figlio e si rifiuta di partire senza di lui.',
    },
  },
  kinKanjuro: {
    character: 'kanjuro',
    type: { en: 'Samurai comrade', it: 'Compagno samurai' },
    summary: {
      en: 'Kin’emon finds Kanjuro, who stayed behind to cover his escape.',
      it: 'Kin’emon ritrova Kanjuro, rimasto indietro per coprire la sua fuga.',
    },
  },
  kinMomo: {
    character: 'momonosuke',
    type: { en: 'Young lord', it: 'Giovane signore' },
    summary: {
      en: 'Kin’emon serves Momonosuke and pretends to be his father to protect him.',
      it: 'Kin’emon serve Momonosuke e si finge suo padre per proteggerlo.',
    },
  },
  kinLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'Kin’emon asks Luffy to help defeat Kaido and free Wano.',
      it: 'Kin’emon chiede a Rufy di aiutarlo a sconfiggere Kaido e liberare Wano.',
    },
  },
  kinTsuru: {
    character: 'tsurujo',
    type: { en: 'Wife', it: 'Moglie' },
    summary: {
      en: 'Kin’emon learns that his wife Tsuru is still alive after their long separation.',
      it: 'Kin’emon scopre che sua moglie Tsuru è ancora viva dopo la lunga separazione.',
    },
  },
  kinOden: {
    character: 'kozuki-oden',
    type: { en: 'Lord', it: 'Signore' },
    summary: {
      en: 'Kin’emon follows Oden after he saves him and takes the blame for the destruction in the capital.',
      it: 'Kin’emon segue Oden dopo che lo salva e si assume la colpa della devastazione nella capitale.',
    },
  },
  kinKanjuroTraitor: {
    character: 'kanjuro',
    type: { en: 'Traitor', it: 'Traditore' },
    summary: {
      en: 'Kanjuro admits that he has been reporting the samurai’s plans to their enemy.',
      it: 'Kanjuro ammette di aver riferito al nemico i piani dei samurai.',
    },
  },
  kinKanjuroDefeated: {
    character: 'kanjuro',
    type: {
      en: 'Former comrade turned enemy',
      it: 'Ex compagno diventato nemico',
    },
    summary: {
      en: 'Kin’emon strikes Kanjuro down after another attack on their companions.',
      it: 'Kin’emon abbatte Kanjuro dopo un altro attacco ai loro compagni.',
    },
  },
  brownCaesarBelief: {
    character: 'caesar-clown',
    type: { en: 'Benefactor he trusts', it: 'Benefattore di cui si fida' },
    summary: {
      en: 'Brownbeard believes Caesar has saved him and the other survivors on Punk Hazard.',
      it: 'Barbabruna crede che Caesar abbia salvato lui e gli altri superstiti di Punk Hazard.',
    },
  },
  brownLaw: {
    character: 'trafalgar-law',
    type: { en: 'Surgeon', it: 'Chirurgo' },
    summary: {
      en: 'Law gives Brownbeard an animal lower body so he can move again.',
      it: 'Law dà a Barbabruna la parte inferiore di un animale perché possa muoversi di nuovo.',
    },
  },
  brownCaesar: {
    character: 'caesar-clown',
    type: { en: 'Betrayer', it: 'Traditore' },
    summary: {
      en: 'Caesar orders Brownbeard’s death instead of sending help.',
      it: 'Caesar ordina di uccidere Barbabruna invece di mandargli aiuto.',
    },
  },
  brownBrothers: {
    character: 'rock-and-scotch',
    type: { en: 'Attackers', it: 'Aggressori' },
    summary: {
      en: 'Rock and Scotch shoot Brownbeard on Caesar’s orders.',
      it: 'Rock e Scotch sparano a Barbabruna su ordine di Caesar.',
    },
  },
  brownLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'Luffy attacks Caesar after seeing him hurt Brownbeard and deceive his own men.',
      it: 'Rufy attacca Caesar dopo averlo visto ferire Barbabruna e ingannare i suoi uomini.',
    },
  },
  caesarMonet: {
    character: 'monet',
    type: { en: 'Assistant', it: 'Assistente' },
    summary: {
      en: 'Monet reports to Caesar at his laboratory on Punk Hazard.',
      it: 'Monet fa rapporto a Caesar nel laboratorio di Punk Hazard.',
    },
  },
  caesarDoffy: {
    character: 'donquixote-doflamingo',
    type: { en: 'Employer', it: 'Datore di lavoro' },
    summary: {
      en: 'Caesar runs his research under Doflamingo’s protection.',
      it: 'Caesar svolge le sue ricerche sotto la protezione di Do Flamingo.',
    },
  },
  caesarLaw: {
    character: 'trafalgar-law',
    type: { en: 'Hostile guest', it: 'Ospite ostile' },
    summary: {
      en: 'Law turns against Caesar and plans to capture him.',
      it: 'Law si rivolta contro Caesar e progetta di catturarlo.',
    },
  },
  caesarVergo: {
    character: 'vergo',
    type: { en: 'Accomplice', it: 'Complice' },
    summary: {
      en: 'Caesar entrusts Law’s heart to Vergo to keep him under control.',
      it: 'Caesar affida a Vergo il cuore di Law per tenerlo sotto controllo.',
    },
  },
  caesarLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Captor', it: 'Carceriere' },
    summary: {
      en: 'Luffy defeats Caesar and his allies take the scientist prisoner.',
      it: 'Rufy sconfigge Caesar e i suoi alleati prendono lo scienziato prigioniero.',
    },
  },
  caesarBigMom: {
    character: 'charlotte-linlin',
    type: {
      en: 'Captor and deceived client',
      it: 'Carceriera e cliente ingannata',
    },
    summary: {
      en: 'Big Mom holds Caesar captive and demands the results of research he has failed to complete.',
      it: 'Big Mom tiene Caesar prigioniero e pretende i risultati di ricerche che non è riuscito a completare.',
    },
  },
  caesarBege: {
    character: 'capone-bege',
    type: {
      en: 'Captor and temporary ally',
      it: 'Carceriere e alleato temporaneo',
    },
    summary: {
      en: 'Bege controls Caesar’s heart and makes him help with the assassination plan.',
      it: 'Bege controlla il cuore di Caesar e lo costringe a collaborare al piano di assassinio.',
    },
  },
  caesarBegeFree: {
    character: 'capone-bege',
    type: { en: 'Former captor', it: 'Ex carceriere' },
    summary: {
      en: 'Bege returns Caesar’s heart after their escape and lets him leave.',
      it: 'Bege restituisce a Caesar il cuore dopo la fuga e lo lascia andare.',
    },
  },
  caesarLuffyFormer: {
    character: 'monkey-d-luffy',
    type: { en: 'Former captor', it: 'Ex carceriere' },
    summary: {
      en: 'Caesar parts ways with Luffy’s group after escaping the wedding.',
      it: 'Caesar si separa dal gruppo di Rufy dopo essere fuggito dalle nozze.',
    },
  },
  caesarJudge: {
    character: 'vinsmoke-judge',
    type: { en: 'Research partner', it: 'Socio nella ricerca' },
    summary: {
      en: 'Caesar and Judge put aside their dispute and establish NEO MADS together.',
      it: 'Caesar e Judge mettono da parte il litigio e fondano insieme NEO MADS.',
    },
  },
  monetCaesar: {
    character: 'caesar-clown',
    type: { en: 'Laboratory superior', it: 'Superiore del laboratorio' },
    summary: {
      en: 'Monet works as Caesar’s assistant on Punk Hazard.',
      it: 'Monet lavora come assistente di Caesar a Punk Hazard.',
    },
  },
  monetDoffy: {
    character: 'donquixote-doflamingo',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Monet works for Doflamingo and watches Caesar on his behalf.',
      it: 'Monet lavora per Do Flamingo e sorveglia Caesar per suo conto.',
    },
  },
  monetVergo: {
    character: 'vergo',
    type: { en: 'Fellow agent', it: 'Compagno agente' },
    summary: {
      en: 'Monet knows Vergo’s true allegiance while he operates inside the Marines.',
      it: 'Monet conosce la vera fedeltà di Vergo mentre opera nella Marina.',
    },
  },
  monetZoro: {
    character: 'roronoa-zoro',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Zoro overwhelms Monet in the laboratory while she blocks the escape.',
      it: 'Zoro sopraffà Monet nel laboratorio mentre ostacola la fuga.',
    },
  },
  monetDoffySacrifice: {
    character: 'donquixote-doflamingo',
    type: { en: 'Captain she dies serving', it: 'Capitano per cui muore' },
    summary: {
      en: 'Monet prepares to destroy the laboratory on Doflamingo’s orders.',
      it: 'Monet si prepara a distruggere il laboratorio su ordine di Do Flamingo.',
    },
  },
  monetCaesarKiller: {
    character: 'caesar-clown',
    type: { en: 'Unwitting killer', it: 'Assassino inconsapevole' },
    summary: {
      en: 'Caesar stabs Monet’s heart, mistaking it for someone else’s.',
      it: 'Caesar pugnala il cuore di Monet, scambiandolo per quello di un’altra persona.',
    },
  },
  monetSugar: {
    character: 'sugar',
    type: { en: 'Younger sister', it: 'Sorella minore' },
    summary: {
      en: 'Sugar is Monet’s younger sister.',
      it: 'Sugar è la sorella minore di Monet.',
    },
  },
  vergoLaw: {
    character: 'trafalgar-law',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Vergo subdues Law when he arrives at the laboratory.',
      it: 'Vergo mette fuori combattimento Law quando arriva al laboratorio.',
    },
  },
  vergoDoffy: {
    character: 'donquixote-doflamingo',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Vergo infiltrates the Marines while secretly serving Doflamingo.',
      it: 'Vergo si infiltra nella Marina mentre serve in segreto Do Flamingo.',
    },
  },
  vergoCaesar: {
    character: 'caesar-clown',
    type: { en: 'Accomplice', it: 'Complice' },
    summary: {
      en: 'Vergo helps Caesar conceal the kidnapping of children.',
      it: 'Vergo aiuta Caesar a nascondere i rapimenti dei bambini.',
    },
  },
  vergoSmoker: {
    character: 'smoker',
    type: { en: 'Marine opponent', it: 'Avversario nella Marina' },
    summary: {
      en: 'Smoker confronts Vergo over his betrayal of the Marines.',
      it: 'Smoker affronta Vergo per il suo tradimento della Marina.',
    },
  },
  vergoLawDefeat: {
    character: 'trafalgar-law',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Law cuts Vergo apart and leaves him unable to escape the SAD room.',
      it: 'Law fa a pezzi Vergo e lo lascia senza possibilità di fuggire dalla sala del SAD.',
    },
  },
  vergoRosi: {
    character: 'donquixote-rosinante',
    type: { en: 'Exposed infiltrator', it: 'Infiltrato smascherato' },
    summary: {
      en: 'Vergo discovers Rosinante’s Marine mission and brutally attacks him.',
      it: 'Vergo scopre la missione di Rosinante per la Marina e lo aggredisce brutalmente.',
    },
  },
  babyDoffy: {
    character: 'donquixote-doflamingo',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Baby 5 attacks Doflamingo but still accepts his orders.',
      it: 'Baby 5 attacca Do Flamingo ma continua ad accettare i suoi ordini.',
    },
  },
  babyBuffalo: {
    character: 'buffalo',
    type: { en: 'Mission partner', it: 'Compagno di missione' },
    summary: {
      en: 'Baby 5 travels and fights alongside Buffalo on Punk Hazard.',
      it: 'Baby 5 viaggia e combatte con Buffalo a Punk Hazard.',
    },
  },
  buffaloBaby: {
    character: 'baby-5',
    type: { en: 'Mission partner', it: 'Compagna di missione' },
    summary: {
      en: 'Buffalo carries Baby 5 to Punk Hazard and fights alongside her.',
      it: 'Buffalo porta Baby 5 a Punk Hazard e combatte al suo fianco.',
    },
  },
  buffaloDoffy: {
    character: 'donquixote-doflamingo',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Buffalo goes to Punk Hazard on Doflamingo’s orders.',
      it: 'Buffalo va a Punk Hazard su ordine di Do Flamingo.',
    },
  },
  babySai: {
    character: 'sai',
    type: { en: 'Fiancé', it: 'Fidanzato' },
    summary: {
      en: 'Sai stops Baby 5 from harming herself and promises to marry her.',
      it: 'Sai impedisce a Baby 5 di farsi del male e promette di sposarla.',
    },
  },
  babyLao: {
    character: 'lao-g',
    type: { en: 'Exploitative crewmate', it: 'Compagno che la sfrutta' },
    summary: {
      en: 'Lao G treats Baby 5’s willingness to obey as something useful to the crew.',
      it: 'Lao G considera la disponibilità di Baby 5 a obbedire una comodità per la ciurma.',
    },
  },
  babySaiHusband: {
    character: 'sai',
    type: { en: 'Husband', it: 'Marito' },
    summary: {
      en: 'Baby 5 marries Sai after leaving her former crew.',
      it: 'Baby 5 sposa Sai dopo aver lasciato la vecchia ciurma.',
    },
  },
  rebeccaLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Fellow gladiator', it: 'Compagno gladiatore' },
    summary: {
      en: 'Rebecca thanks Luffy for stopping a gladiator who bullied her.',
      it: 'Rebecca ringrazia Rufy per aver fermato un gladiatore che la tormentava.',
    },
  },
  rebeccaScarlett: {
    character: 'scarlett',
    type: { en: 'Late mother', it: 'Madre defunta' },
    summary: {
      en: 'Scarlett dies while trying to bring food to Rebecca.',
      it: 'Scarlet muore mentre cerca di portare del cibo a Rebecca.',
    },
  },
  rebeccaDoffy: {
    character: 'donquixote-doflamingo',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'Rebecca wants to defeat Doflamingo and end the life imposed on her in the colosseum.',
      it: 'Rebecca vuole sconfiggere Do Flamingo e porre fine alla vita che le è stata imposta nel colosseo.',
    },
  },
  rebeccaRiku: {
    character: 'riku-doldo-iii',
    type: { en: 'Grandfather', it: 'Nonno' },
    summary: {
      en: 'Rebecca is King Riku’s granddaughter and is hated for her family name.',
      it: 'Rebecca è la nipote di re Riku ed è odiata per il nome della sua famiglia.',
    },
  },
  rebeccaKyros: {
    character: 'kyros',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Kyros is Rebecca’s father and has raised her while trapped in a toy’s body.',
      it: 'Kyros è il padre di Rebecca e l’ha cresciuta mentre era intrappolato nel corpo di un giocattolo.',
    },
  },
  rebeccaViola: {
    character: 'viola',
    type: { en: 'Aunt', it: 'Zia' },
    summary: {
      en: 'Viola is Rebecca’s aunt and has watched over her during Doflamingo’s rule.',
      it: 'Viola è la zia di Rebecca e ha vegliato su di lei durante il regno di Do Flamingo.',
    },
  },
  rebeccaKyrosHome: {
    character: 'kyros',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Rebecca gives up her royal position so she can live with her father Kyros.',
      it: 'Rebecca rinuncia al proprio ruolo nella famiglia reale per vivere con suo padre Kyros.',
    },
  },
  rebeccaLuffyFriend: {
    character: 'monkey-d-luffy',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'Luffy helps Rebecca reach Kyros so she can tell him she wants to live with him.',
      it: 'Rufy aiuta Rebecca a raggiungere Kyros per dirgli che vuole vivere con lui.',
    },
  },
  isshoLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Pirate who helps him', it: 'Pirata che lo aiuta' },
    summary: {
      en: 'Luffy warns Issho that the gamblers are cheating him.',
      it: 'Rufy avverte Issho che i giocatori lo stanno imbrogliando.',
    },
  },
  isshoSakazuki: {
    character: 'sakazuki',
    type: { en: 'Fleet admiral', it: 'Grandammiraglio' },
    summary: {
      en: 'Issho reports to Sakazuki about the false news from Dressrosa.',
      it: 'Issho riferisce a Sakazuki delle false notizie da Dressrosa.',
    },
  },
  isshoDoffy: {
    character: 'donquixote-doflamingo',
    type: {
      en: 'Warlord he distrusts',
      it: 'Membro della Flotta dei Sette di cui diffida',
    },
    summary: {
      en: 'Issho cooperates with Doflamingo while prioritising the safety of Dressrosa’s people.',
      it: 'Issho collabora con Do Flamingo dando la precedenza alla sicurezza degli abitanti di Dressrosa.',
    },
  },
  isshoRiku: {
    character: 'riku-doldo-iii',
    type: { en: 'King he apologises to', it: 'Re a cui chiede scusa' },
    summary: {
      en: 'Issho kneels before Riku and apologises for the government’s part in Dressrosa’s suffering.',
      it: 'Issho si inginocchia davanti a Riku e si scusa per la responsabilità del Governo nelle sofferenze di Dressrosa.',
    },
  },
  isshoSakazukiDispute: {
    character: 'sakazuki',
    type: { en: 'Superior in dispute', it: 'Superiore con cui è in contrasto' },
    summary: {
      en: 'Sakazuki bars Issho from Marine bases until he captures Luffy and Law.',
      it: 'Sakazuki vieta a Issho di entrare nelle basi della Marina finché non cattura Rufy e Law.',
    },
  },
  isshoLuffyRespect: {
    character: 'monkey-d-luffy',
    type: { en: 'Respected opponent', it: 'Avversario rispettato' },
    summary: {
      en: 'Issho lets Luffy escape and protects his departure from the pirates pursuing him.',
      it: 'Issho lascia fuggire Rufy e protegge la sua partenza dai pirati che lo inseguono.',
    },
  },
  isshoAramaki: {
    character: 'ryokugyu',
    type: {
      en: 'Fellow admiral turned opponent',
      it: 'Collega ammiraglio diventato avversario',
    },
    summary: {
      en: 'Aramaki turns against Issho after he helps slaves escape at Mary Geoise.',
      it: 'Aramaki si rivolta contro Issho dopo che aiuta gli schiavi a fuggire da Mary Geoise.',
    },
  },
  bartoGambia: {
    character: 'gambia',
    type: { en: 'Crewmate', it: 'Compagno di ciurma' },
    summary: {
      en: 'Bartolomeo retaliates when Gambia is beaten at the colosseum.',
      it: 'Bartolomeo reagisce quando Gambia viene picchiato al colosseo.',
    },
  },
  bartoMaynard: {
    character: 'maynard',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Bartolomeo defeats Maynard for attacking his crewmate.',
      it: 'Bartolomeo sconfigge Maynard per aver aggredito il suo compagno di ciurma.',
    },
  },
  bartoLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Idol', it: 'Idolo' },
    summary: {
      en: 'Bartolomeo admires Luffy and wants to give him the tournament’s prize.',
      it: 'Bartolomeo ammira Rufy e vuole regalargli il premio del torneo.',
    },
  },
  bartoBellamy: {
    character: 'bellamy',
    type: {
      en: 'Fellow fighter he protects',
      it: 'Compagno di lotta che protegge',
    },
    summary: {
      en: 'Bartolomeo shields Bellamy from the officer sent to kill him.',
      it: 'Bartolomeo protegge Bellamy dall’ufficiale mandato a ucciderlo.',
    },
  },
  bartoCavendish: {
    character: 'cavendish',
    type: { en: 'Argumentative ally', it: 'Alleato con cui litiga' },
    summary: {
      en: 'Bartolomeo and Cavendish work together against Gladius despite their arguments.',
      it: 'Bartolomeo e Cavendish collaborano contro Gladius nonostante i litigi.',
    },
  },
  bartoRobin: {
    character: 'nico-robin',
    type: { en: 'Person he protects', it: 'Persona che protegge' },
    summary: {
      en: 'Bartolomeo risks his life trying to protect Robin during the battle.',
      it: 'Bartolomeo rischia la vita per proteggere Robin durante la battaglia.',
    },
  },
  bartoLuffyFleet: {
    character: 'monkey-d-luffy',
    type: { en: 'Captain he follows', it: 'Capitano che segue' },
    summary: {
      en: 'Bartolomeo pledges his crew to Luffy as part of the Straw Hat Grand Fleet.',
      it: 'Bartolomeo mette la propria ciurma al seguito di Rufy nella Grande Flotta di Cappello di Paglia.',
    },
  },
  bartoShanks: {
    character: 'shanks',
    type: { en: 'Enemy captain', it: 'Capitano nemico' },
    summary: {
      en: 'Shanks confronts Bartolomeo over the flag he burned; Bartolomeo refuses to betray Luffy.',
      it: 'Shanks affronta Bartolomeo per la bandiera bruciata; Bartolomeo si rifiuta di tradire Rufy.',
    },
  },
  rikuDoffy: {
    character: 'donquixote-doflamingo',
    type: { en: 'Usurper', it: 'Usurpatore' },
    summary: {
      en: 'Doflamingo forces Riku to attack his own people and takes his throne.',
      it: 'Do Flamingo costringe Riku ad attaccare i propri sudditi e gli sottrae il trono.',
    },
  },
  rikuViola: {
    character: 'viola',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'Viola agrees to serve Doflamingo to save Riku’s life.',
      it: 'Viola accetta di servire Do Flamingo per salvare la vita di Riku.',
    },
  },
  rikuRebecca: {
    character: 'rebecca',
    type: { en: 'Granddaughter', it: 'Nipote' },
    summary: {
      en: 'Riku regrets being unable to protect his granddaughter Rebecca.',
      it: 'Riku si rammarica di non aver potuto proteggere sua nipote Rebecca.',
    },
  },
  rikuTank: {
    character: 'tank-lepanto',
    type: { en: 'Loyal soldier', it: 'Soldato fedele' },
    summary: {
      en: 'Tank Lepanto recognises Riku and remains loyal to him after his overthrow.',
      it: 'Tank Lepanto riconosce Riku e gli resta fedele dopo la deposizione.',
    },
  },
  rikuElizabello: {
    character: 'elizabello-ii',
    type: { en: 'Fellow king and friend', it: 'Re amico' },
    summary: {
      en: 'Elizabello greets Riku warmly and remembers the help he gave his kingdom.',
      it: 'Elizabello accoglie Riku con affetto e ricorda l’aiuto dato al suo regno.',
    },
  },
  rikuScarlett: {
    character: 'scarlett',
    type: { en: 'Late daughter', it: 'Figlia defunta' },
    summary: {
      en: 'Riku helps Scarlett leave royal life to live with the man she loves.',
      it: 'Riku aiuta Scarlet a lasciare la vita di corte per vivere con l’uomo che ama.',
    },
  },
  rikuKyros: {
    character: 'kyros',
    type: {
      en: 'Son-in-law and trusted soldier',
      it: 'Genero e soldato fidato',
    },
    summary: {
      en: 'Riku gives Kyros a new life and welcomes him into his family.',
      it: 'Riku offre a Kyros una nuova vita e lo accoglie nella propria famiglia.',
    },
  },
  rikuIssho: {
    character: 'issho',
    type: {
      en: 'Admiral who accepts responsibility',
      it: 'Ammiraglio che si assume la responsabilità',
    },
    summary: {
      en: 'Issho apologises to Riku for allowing the pirate’s rule to continue.',
      it: 'Issho si scusa con Riku per aver permesso che il governo del pirata continuasse.',
    },
  },
  trebolDoffy: {
    character: 'donquixote-doflamingo',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Trebol stays at Doflamingo’s side and follows his orders.',
      it: 'Trebol resta al fianco di Do Flamingo e segue i suoi ordini.',
    },
  },
  trebolSugar: {
    character: 'sugar',
    type: { en: 'Person he guards', it: 'Persona che protegge' },
    summary: {
      en: 'Trebol guards Sugar because her power sustains the family’s control over Dressrosa.',
      it: 'Trebol protegge Sugar perché il suo potere sostiene il controllo della famiglia su Dressrosa.',
    },
  },
  trebolUsopp: {
    character: 'usopp',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Trebol defeats Usopp, but Usopp’s reaction frightens Sugar unconscious.',
      it: 'Trebol sconfigge Usop, ma la reazione di Usop fa svenire Sugar per la paura.',
    },
  },
  trebolDoffyMentor: {
    character: 'donquixote-doflamingo',
    type: {
      en: 'Captain he helped empower',
      it: 'Capitano a cui ha dato potere',
    },
    summary: {
      en: 'Trebol gives the young Doflamingo a Devil Fruit and a pistol to pursue his ambitions.',
      it: 'Trebol dà al giovane Do Flamingo un Frutto del Diavolo e una pistola per realizzare le sue ambizioni.',
    },
  },
  trebolLaw: {
    character: 'trafalgar-law',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Law provokes Trebol into exposing himself and seriously wounds him.',
      it: 'Law provoca Trebol fino a farlo esporre e lo ferisce gravemente.',
    },
  },
  cavLuffyEnemy: {
    character: 'monkey-d-luffy',
    type: { en: 'Rival', it: 'Rivale' },
    summary: {
      en: 'Cavendish wants revenge on Luffy for taking the attention he once enjoyed.',
      it: 'Cavendish vuole vendicarsi di Rufy per avergli sottratto l’attenzione che riceveva un tempo.',
    },
  },
  cavRebecca: {
    character: 'rebecca',
    type: {
      en: 'Fellow gladiator he defends',
      it: 'Compagna gladiatrice che difende',
    },
    summary: {
      en: 'Cavendish tells the spectators to stop insulting Rebecca.',
      it: 'Cavendish dice agli spettatori di smettere di insultare Rebecca.',
    },
  },
  cavLuffyAlly: {
    character: 'monkey-d-luffy',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'Cavendish gives up his grudge against Luffy and joins the fight against Doflamingo.',
      it: 'Cavendish rinuncia al rancore verso Rufy e si unisce alla lotta contro Do Flamingo.',
    },
  },
  cavUsopp: {
    character: 'usopp',
    type: { en: 'Liberator', it: 'Liberatore' },
    summary: {
      en: 'Usopp’s victory restores Cavendish’s human body after he is turned into a toy.',
      it: 'La vittoria di Usop restituisce a Cavendish il corpo umano dopo la trasformazione in giocattolo.',
    },
  },
  cavBarto: {
    character: 'bartolomeo',
    type: { en: 'Argumentative ally', it: 'Alleato con cui litiga' },
    summary: {
      en: 'Cavendish and Bartolomeo cooperate against Gladius while arguing with each other.',
      it: 'Cavendish e Bartolomeo collaborano contro Gladius mentre continuano a litigare.',
    },
  },
  cavLaw: {
    character: 'trafalgar-law',
    type: { en: 'Ally he protects', it: 'Alleato che protegge' },
    summary: {
      en: 'Cavendish protects Law and stays with him to watch the final fight.',
      it: 'Cavendish protegge Law e resta con lui a guardare lo scontro finale.',
    },
  },
  cavSuleiman: {
    character: 'suleiman',
    type: { en: 'New crewmate', it: 'Nuovo compagno di ciurma' },
    summary: {
      en: 'Cavendish accepts Suleiman into his crew.',
      it: 'Cavendish accetta Suleiman nella propria ciurma.',
    },
  },
  cavLuffyFleet: {
    character: 'monkey-d-luffy',
    type: { en: 'Captain he follows', it: 'Capitano che segue' },
    summary: {
      en: 'Cavendish pledges his crew to Luffy in the Straw Hat Grand Fleet.',
      it: 'Cavendish mette la propria ciurma al seguito di Rufy nella Grande Flotta di Cappello di Paglia.',
    },
  },
  saiBoo: {
    character: 'boo',
    type: { en: 'Younger brother', it: 'Fratello minore' },
    summary: {
      en: 'Boo accompanies Sai to the tournament and restrains him when he loses his temper.',
      it: 'Boo accompagna Sai al torneo e lo trattiene quando perde la calma.',
    },
  },
  saiChinjao: {
    character: 'don-chinjao',
    type: { en: 'Grandfather', it: 'Nonno' },
    summary: {
      en: 'Sai accompanies his grandfather Chinjao and tries to keep him out of trouble before the match.',
      it: 'Sai accompagna suo nonno Chinjao e cerca di tenerlo lontano dai guai prima dell’incontro.',
    },
  },
  saiBaby: {
    character: 'baby-5',
    type: { en: 'Fiancée', it: 'Fidanzata' },
    summary: {
      en: 'Sai stops Baby 5 from harming herself and promises to marry her.',
      it: 'Sai impedisce a Baby 5 di farsi del male e promette di sposarla.',
    },
  },
  saiChinjaoSuccessor: {
    character: 'don-chinjao',
    type: { en: 'Grandfather and predecessor', it: 'Nonno e predecessore' },
    summary: {
      en: 'Chinjao recognises Sai’s strength and entrusts the Happo Navy to him.',
      it: 'Chinjao riconosce la forza di Sai e gli affida la Flotta Happo.',
    },
  },
  saiLao: {
    character: 'lao-g',
    type: { en: 'Defeated opponent', it: 'Avversario sconfitto' },
    summary: {
      en: 'Sai defeats Lao G after he attacks Chinjao and treats Baby 5 as a tool.',
      it: 'Sai sconfigge Lao G dopo che attacca Chinjao e tratta Baby 5 come uno strumento.',
    },
  },
  saiLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Captain he follows', it: 'Capitano che segue' },
    summary: {
      en: 'Sai pledges the Happo Navy to Luffy as part of the Straw Hat Grand Fleet.',
      it: 'Sai mette la Flotta Happo al seguito di Rufy nella Grande Flotta di Cappello di Paglia.',
    },
  },
  saiBabyWife: {
    character: 'baby-5',
    type: { en: 'Wife', it: 'Moglie' },
    summary: {
      en: 'Sai marries Baby 5 after breaking off his earlier engagement.',
      it: 'Sai sposa Baby 5 dopo aver sciolto il precedente fidanzamento.',
    },
  },
  saiLeo: {
    character: 'leo',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'Sai and Leo strike Charlos together to free Shirahoshi.',
      it: 'Sai e Leo colpiscono insieme Charlos per liberare Shirahoshi.',
    },
  },
  chinjaoSai: {
    character: 'sai',
    type: { en: 'Grandson', it: 'Nipote' },
    summary: {
      en: 'Sai accompanies Chinjao to the colosseum and tries to restrain his anger.',
      it: 'Sai accompagna Chinjao al colosseo e cerca di frenare la sua rabbia.',
    },
  },
  chinjaoBoo: {
    character: 'boo',
    type: { en: 'Grandson', it: 'Nipote' },
    summary: {
      en: 'Boo travels with Chinjao and helps keep him from fighting before the tournament.',
      it: 'Boo viaggia con Chinjao e lo aiuta a non iniziare uno scontro prima del torneo.',
    },
  },
  chinjaoGarp: {
    character: 'monkey-d-garp',
    type: { en: 'Old enemy', it: 'Vecchio nemico' },
    summary: {
      en: 'Chinjao bears a grudge against Garp and wants his family to suffer.',
      it: 'Chinjao serba rancore a Garp e vuole far soffrire la sua famiglia.',
    },
  },
  chinjaoLuffyEnemy: {
    character: 'monkey-d-luffy',
    type: { en: 'Target of revenge', it: 'Bersaglio della vendetta' },
    summary: {
      en: 'Chinjao attacks Luffy to make his grandfather suffer.',
      it: 'Chinjao attacca Rufy per far soffrire suo nonno.',
    },
  },
  chinjaoLuffyAlly: {
    character: 'monkey-d-luffy',
    type: { en: 'Benefactor', it: 'Benefattore' },
    summary: {
      en: 'Luffy restores Chinjao’s pointed head, and Chinjao gives up his grudge.',
      it: 'Rufy restituisce a Chinjao la punta della testa e Chinjao rinuncia al rancore.',
    },
  },
  chinjaoGarpPast: {
    character: 'monkey-d-garp',
    type: { en: 'Former enemy', it: 'Ex nemico' },
    summary: {
      en: 'Chinjao lets go of his grudge against Garp after regaining the point of his head.',
      it: 'Chinjao abbandona il rancore verso Garp dopo aver ritrovato la punta della testa.',
    },
  },
  chinjaoSaiHeir: {
    character: 'sai',
    type: { en: 'Grandson and successor', it: 'Nipote e successore' },
    summary: {
      en: 'Chinjao celebrates Sai surpassing him and hands over leadership of the Happo Navy.',
      it: 'Chinjao festeggia Sai che lo supera e gli affida il comando della Flotta Happo.',
    },
  },
  chinjaoLao: {
    character: 'lao-g',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Lao G defeats Chinjao while he is distracted by his grandson’s battle.',
      it: 'Lao G sconfigge Chinjao mentre è distratto dallo scontro del nipote.',
    },
  },
  ideoLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Captain he follows', it: 'Capitano che segue' },
    summary: {
      en: 'Ideo pledges his crew to Luffy as part of the Straw Hat Grand Fleet.',
      it: 'Ideo mette la propria ciurma al seguito di Rufy nella Grande Flotta di Cappello di Paglia.',
    },
  },
  ideoGilly: {
    character: 'blue-gilly',
    type: { en: 'Crewmate', it: 'Compagno di ciurma' },
    summary: {
      en: 'Blue Gilly joins Ideo’s fighting crew after the battle in Dressrosa.',
      it: 'Blue Gilly si unisce alla ciurma di lottatori di Ideo dopo la battaglia a Dressrosa.',
    },
  },
  ideoAbdullah: {
    character: 'abdullah',
    type: { en: 'Crewmate', it: 'Compagno di ciurma' },
    summary: {
      en: 'Abdullah joins Ideo’s crew after fighting alongside him in Dressrosa.',
      it: 'Abdullah entra nella ciurma di Ideo dopo aver combattuto al suo fianco a Dressrosa.',
    },
  },
  ideoJeet: {
    character: 'jeet',
    type: { en: 'Crewmate', it: 'Compagno di ciurma' },
    summary: {
      en: 'Jeet joins Ideo’s crew after the battle in Dressrosa.',
      it: 'Jeet entra nella ciurma di Ideo dopo la battaglia a Dressrosa.',
    },
  },
  ideoDellinger: {
    character: 'dellinger',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Dellinger overpowers Ideo during the battle on the plateau.',
      it: 'Dellinger sopraffà Ideo durante la battaglia sull’altopiano.',
    },
  },
  gillyDagama: {
    character: 'dagama',
    type: { en: 'Untrustworthy partner', it: 'Complice inaffidabile' },
    summary: {
      en: 'Blue Gilly defeats Dagama after discovering his plan to betray him.',
      it: 'Blue Gilly sconfigge Dagama dopo aver scoperto che vuole tradirlo.',
    },
  },
  gillyIdeo: {
    character: 'ideo',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Blue Gilly joins Ideo’s crew after fighting in Dressrosa.',
      it: 'Blue Gilly entra nella ciurma di Ideo dopo aver combattuto a Dressrosa.',
    },
  },
  gillyAbdullah: {
    character: 'abdullah',
    type: { en: 'Crewmate', it: 'Compagno di ciurma' },
    summary: {
      en: 'Blue Gilly and Abdullah join the same fighting crew.',
      it: 'Blue Gilly e Abdullah entrano nella stessa ciurma di lottatori.',
    },
  },
  gillyJeet: {
    character: 'jeet',
    type: { en: 'Crewmate', it: 'Compagno di ciurma' },
    summary: {
      en: 'Blue Gilly and Jeet join Ideo’s crew together.',
      it: 'Blue Gilly e Jeet entrano insieme nella ciurma di Ideo.',
    },
  },
  elizDagama: {
    character: 'dagama',
    type: { en: 'Tactician', it: 'Stratega' },
    summary: {
      en: 'Elizabello relies on Dagama to protect him while he prepares his King Punch.',
      it: 'Elizabello si affida a Dagama perché lo protegga mentre prepara il King Punch.',
    },
  },
  elizRiku: {
    character: 'riku-doldo-iii',
    type: { en: 'Fellow king and friend', it: 'Re amico' },
    summary: {
      en: 'Elizabello recognises Riku and thanks him for the help he gave his kingdom.',
      it: 'Elizabello riconosce Riku e lo ringrazia per l’aiuto dato al suo regno.',
    },
  },
  elizZoro: {
    character: 'roronoa-zoro',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'Elizabello destroys the falling stone that Zoro cuts away from Pica.',
      it: 'Elizabello distrugge la pietra in caduta che Zoro separa da Pica.',
    },
  },
  hajLuffyOpponent: {
    character: 'monkey-d-luffy',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Luffy knocks Hajrudin out after he attacks the bull Luffy befriends.',
      it: 'Rufy mette al tappeto Hajrudin dopo che attacca il toro con cui ha fatto amicizia.',
    },
  },
  hajUsopp: {
    character: 'usopp',
    type: { en: 'Liberator', it: 'Liberatore' },
    summary: {
      en: 'Hajrudin thanks Usopp for freeing him from his toy body.',
      it: 'Hajrudin ringrazia Usop per averlo liberato dal corpo di giocattolo.',
    },
  },
  hajMachvise: {
    character: 'machvise',
    type: { en: 'Defeated opponent', it: 'Avversario sconfitto' },
    summary: {
      en: 'Hajrudin defeats Machvise despite the injuries from his crushing attacks.',
      it: 'Hajrudin sconfigge Machvise nonostante le ferite causate dai suoi attacchi schiaccianti.',
    },
  },
  hajLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Captain he follows', it: 'Capitano che segue' },
    summary: {
      en: 'Hajrudin pledges his giant crew to Luffy in the Straw Hat Grand Fleet.',
      it: 'Hajrudin mette la propria ciurma di giganti al seguito di Rufy nella Grande Flotta di Cappello di Paglia.',
    },
  },
  hajLoki: {
    character: 'loki',
    type: { en: 'Younger half-brother', it: 'Fratellastro minore' },
    summary: {
      en: 'Loki is Hajrudin’s younger half-brother.',
      it: 'Loki è il fratellastro minore di Hajrudin.',
    },
  },
  hajHarald: {
    character: 'harald',
    type: { en: 'Late father', it: 'Padre defunto' },
    summary: {
      en: 'Harald is Hajrudin’s father, but Hajrudin is excluded from the throne because of his mother’s origins.',
      it: 'Harald è il padre di Hajrudin, ma Hajrudin è escluso dal trono per le origini di sua madre.',
    },
  },
  hajRoad: {
    character: 'road',
    type: {
      en: 'Navigator and childhood friend',
      it: 'Navigatore e amico d’infanzia',
    },
    summary: {
      en: 'Hajrudin befriends Road as a child and later makes him his crew’s navigator.',
      it: 'Hajrudin stringe amicizia con Lord da bambino e in seguito ne fa il navigatore della propria ciurma.',
    },
  },
  hajLokiHostile: {
    character: 'loki',
    type: {
      en: 'Half-brother he resents',
      it: 'Fratellastro verso cui prova rancore',
    },
    summary: {
      en: 'Hajrudin confronts Loki over his cruelty and the death of their father.',
      it: 'Hajrudin affronta Loki per la sua crudeltà e per la morte del loro padre.',
    },
  },
  bastMaynard: {
    character: 'maynard',
    type: { en: 'Disobedient colleague', it: 'Collega che disobbedisce' },
    summary: {
      en: 'Bastille criticises Maynard for entering the tournament without orders.',
      it: 'Bastille rimprovera Maynard per essersi iscritto al torneo senza ordini.',
    },
  },
  bastSabo: {
    character: 'sabo',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Sabo defeats Bastille when the Marines try to reach Luffy.',
      it: 'Sabo sconfigge Bastille quando la Marina cerca di raggiungere Rufy.',
    },
  },
  mayGambia: {
    character: 'gambia',
    type: { en: 'Pirate opponent', it: 'Avversario pirata' },
    summary: {
      en: 'Maynard defeats Gambia after the pirate discovers his Marine affiliation.',
      it: 'Maynard sconfigge Gambia dopo che il pirata scopre la sua appartenenza alla Marina.',
    },
  },
  mayBarto: {
    character: 'bartolomeo',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Bartolomeo defeats Maynard in retaliation for his attack on Gambia.',
      it: 'Bartolomeo sconfigge Maynard per vendicare l’aggressione a Gambia.',
    },
  },
  mayBast: {
    character: 'bastille',
    type: { en: 'Fellow vice admiral', it: 'Collega viceammiraglio' },
    summary: {
      en: 'Bastille reprimands Maynard for infiltrating the colosseum on his own.',
      it: 'Bastille rimprovera Maynard per essersi infiltrato da solo nel colosseo.',
    },
  },
  mayIssho: {
    character: 'issho',
    type: {
      en: 'Superior he questions',
      it: 'Superiore che mette in discussione',
    },
    summary: {
      en: 'Maynard questions Issho’s decision to leave Doflamingo’s defeat to the pirates.',
      it: 'Maynard mette in discussione la scelta di Issho di lasciare ai pirati la sconfitta di Do Flamingo.',
    },
  },
  hackJinbe: {
    character: 'jinbe',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'Hack knows Jinbe and shares his wish for friendship between humans and fish-men.',
      it: 'Hack conosce Jinbe e condivide il suo desiderio di amicizia tra umani e uomini-pesce.',
    },
  },
  hackKoala: {
    character: 'koala',
    type: { en: 'Revolutionary colleague', it: 'Compagna rivoluzionaria' },
    summary: {
      en: 'Hack tries to report to Koala after his defeat in the tournament.',
      it: 'Hack cerca di fare rapporto a Koala dopo la sconfitta nel torneo.',
    },
  },
  hackSabo: {
    character: 'sabo',
    type: { en: 'Revolutionary colleague', it: 'Compagno rivoluzionario' },
    summary: {
      en: 'Hack works with Sabo during the investigation of Dressrosa’s weapons trade.',
      it: 'Hack lavora con Sabo durante le indagini sul commercio di armi di Dressrosa.',
    },
  },
  hackRobin: {
    character: 'nico-robin',
    type: { en: 'Friend', it: 'Amica' },
    summary: {
      en: 'Hack and Robin greet each other when they meet again in Dressrosa.',
      it: 'Hack e Robin si salutano quando si ritrovano a Dressrosa.',
    },
  },
  violaSanji: {
    character: 'sanji',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'Viola reads Sanji’s intentions and decides to help him instead of handing him over.',
      it: 'Viola legge le intenzioni di Sanji e decide di aiutarlo invece di consegnarlo.',
    },
  },
  violaRiku: {
    character: 'riku-doldo-iii',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Viola joins Doflamingo’s crew to spare her father’s life.',
      it: 'Viola entra nella ciurma di Do Flamingo per risparmiare la vita a suo padre.',
    },
  },
  violaDoffy: {
    character: 'donquixote-doflamingo',
    type: { en: 'Coercive captain', it: 'Capitano che la tiene sotto ricatto' },
    summary: {
      en: 'Viola serves Doflamingo to protect her father, then turns against him.',
      it: 'Viola serve Do Flamingo per proteggere suo padre, poi si rivolta contro di lui.',
    },
  },
  violaRebecca: {
    character: 'rebecca',
    type: { en: 'Niece', it: 'Nipote' },
    summary: {
      en: 'Viola watches over Rebecca and is grateful to the soldier who has raised her.',
      it: 'Viola veglia su Rebecca ed è grata al soldatino che l’ha cresciuta.',
    },
  },
  violaScarlett: {
    character: 'scarlett',
    type: { en: 'Late older sister', it: 'Sorella maggiore defunta' },
    summary: {
      en: 'Viola helps Scarlett leave royal life to live with the man she loves.',
      it: 'Viola aiuta Scarlet a lasciare la vita di corte per vivere con l’uomo che ama.',
    },
  },
  violaKyros: {
    character: 'kyros',
    type: { en: 'Brother-in-law', it: 'Cognato' },
    summary: {
      en: 'Kyros marries Viola’s older sister and becomes part of her family.',
      it: 'Kyros sposa la sorella maggiore di Viola ed entra nella sua famiglia.',
    },
  },
  sugarDoffy: {
    character: 'donquixote-doflamingo',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Sugar uses her power to sustain Doflamingo’s rule over Dressrosa.',
      it: 'Sugar usa il proprio potere per sostenere il governo di Do Flamingo su Dressrosa.',
    },
  },
  sugarTrebol: {
    character: 'trebol',
    type: { en: 'Bodyguard', it: 'Guardia del corpo' },
    summary: {
      en: 'Trebol protects Sugar because the crew depends on her power.',
      it: 'Trebol protegge Sugar perché la ciurma dipende dal suo potere.',
    },
  },
  sugarUsopp: {
    character: 'usopp',
    type: { en: 'Opponent she fears', it: 'Avversario che teme' },
    summary: {
      en: 'Usopp frightens Sugar so badly that she loses consciousness.',
      it: 'Usop spaventa Sugar al punto da farla svenire.',
    },
  },
  sugarMonet: {
    character: 'monet',
    type: { en: 'Older sister', it: 'Sorella maggiore' },
    summary: {
      en: 'Monet is Sugar’s older sister.',
      it: 'Monet è la sorella maggiore di Sugar.',
    },
  },
  diamDoffy: {
    character: 'donquixote-doflamingo',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Doflamingo trusts Diamante to guard the tournament’s prize.',
      it: 'Do Flamingo affida a Diamante la custodia del premio del torneo.',
    },
  },
  diamRebecca: {
    character: 'rebecca',
    type: { en: 'Opponent he torments', it: 'Avversaria che tormenta' },
    summary: {
      en: 'Diamante mocks Rebecca by admitting that he killed her mother.',
      it: 'Diamante deride Rebecca confessando di aver ucciso sua madre.',
    },
  },
  diamScarlett: {
    character: 'scarlett',
    type: { en: 'Victim', it: 'Vittima' },
    summary: {
      en: 'Diamante shoots Scarlett while she is trying to obtain food for her daughter.',
      it: 'Diamante spara a Scarlet mentre cerca del cibo per sua figlia.',
    },
  },
  diamKyros: {
    character: 'kyros',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Kyros defeats Diamante after he threatens his daughter and mocks his wife’s death.',
      it: 'Kyros sconfigge Diamante dopo che minaccia sua figlia e deride la morte di sua moglie.',
    },
  },
  picaDoffy: {
    character: 'donquixote-doflamingo',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Pica serves Doflamingo as one of his elite officers.',
      it: 'Pica serve Do Flamingo come uno dei suoi ufficiali supremi.',
    },
  },
  picaZoro: {
    character: 'roronoa-zoro',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Zoro stays behind to fight Pica while his companions advance.',
      it: 'Zoro resta indietro a combattere Pica mentre i suoi compagni avanzano.',
    },
  },
  picaZoroDefeat: {
    character: 'roronoa-zoro',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Zoro finds Pica’s real body inside the stone and defeats him.',
      it: 'Zoro trova il vero corpo di Pica nella pietra e lo sconfigge.',
    },
  },
  picaRiku: {
    character: 'riku-doldo-iii',
    type: { en: 'Target', it: 'Bersaglio' },
    summary: {
      en: 'Pica tries to crush Riku and the people gathered with him.',
      it: 'Pica cerca di schiacciare Riku e le persone riunite con lui.',
    },
  },
  pinkDoffy: {
    character: 'donquixote-doflamingo',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Señor Pink serves Doflamingo as an officer of his crew.',
      it: 'Senor Pink serve Do Flamingo come ufficiale della sua ciurma.',
    },
  },
  pinkFranky: {
    character: 'franky',
    type: { en: 'Respected opponent', it: 'Avversario rispettato' },
    summary: {
      en: 'Señor Pink accepts defeat after Franky withstands his final attack.',
      it: 'Senor Pink accetta la sconfitta dopo che Franky resiste al suo ultimo attacco.',
    },
  },
  dellDoffy: {
    character: 'donquixote-doflamingo',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Dellinger fights for Doflamingo’s crew.',
      it: 'Dellinger combatte per la ciurma di Do Flamingo.',
    },
  },
  dellBellamy: {
    character: 'bellamy',
    type: { en: 'Target', it: 'Bersaglio' },
    summary: {
      en: 'Dellinger attacks Bellamy after receiving orders to kill him.',
      it: 'Dellinger attacca Bellamy dopo aver ricevuto l’ordine di ucciderlo.',
    },
  },
  dellBarto: {
    character: 'bartolomeo',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Bartolomeo blocks Dellinger’s attack on Bellamy.',
      it: 'Bartolomeo blocca l’attacco di Dellinger contro Bellamy.',
    },
  },
  dellJora: {
    character: 'jora',
    type: { en: 'Raised him', it: 'Lo ha cresciuto' },
    summary: {
      en: 'Jora raises Dellinger after he is found as an abandoned baby.',
      it: 'Jora cresce Dellinger dopo che viene trovato abbandonato da neonato.',
    },
  },
  dellCav: {
    character: 'cavendish',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Cavendish’s other personality cuts Dellinger down during the battle.',
      it: 'L’altra personalità di Cavendish abbatte Dellinger durante la battaglia.',
    },
  },
  laoDoffy: {
    character: 'donquixote-doflamingo',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Lao G treats Doflamingo’s decisions as orders the family must follow.',
      it: 'Lao G considera le decisioni di Do Flamingo ordini che la famiglia deve seguire.',
    },
  },
  laoBaby: {
    character: 'baby-5',
    type: { en: 'Crewmate he exploits', it: 'Compagna che sfrutta' },
    summary: {
      en: 'Lao G values Baby 5 because she obeys whatever the crew asks of her.',
      it: 'Lao G apprezza Baby 5 perché obbedisce a qualunque richiesta della ciurma.',
    },
  },
  laoChinjao: {
    character: 'don-chinjao',
    type: { en: 'Defeated opponent', it: 'Avversario sconfitto' },
    summary: {
      en: 'Lao G defeats Chinjao while the old fighter is distracted.',
      it: 'Lao G sconfigge Chinjao mentre il vecchio combattente è distratto.',
    },
  },
  laoSai: {
    character: 'sai',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Sai defeats Lao G while defending Baby 5 and avenging his grandfather.',
      it: 'Sai sconfigge Lao G per difendere Baby 5 e vendicare suo nonno.',
    },
  },
  machDoffy: {
    character: 'donquixote-doflamingo',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Machvise fights for Doflamingo’s crew.',
      it: 'Machvise combatte per la ciurma di Do Flamingo.',
    },
  },
  machHaj: {
    character: 'hajrudin',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Hajrudin overcomes Machvise’s crushing attacks and sends him flying into the Birdcage.',
      it: 'Hajrudin supera gli attacchi schiaccianti di Machvise e lo scaglia contro la Gabbia per uccelli.',
    },
  },
  joraDoffy: {
    character: 'donquixote-doflamingo',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Jora serves Doflamingo and asks him not to give in when she is taken hostage.',
      it: 'Jora serve Do Flamingo e gli chiede di non cedere quando viene presa in ostaggio.',
    },
  },
  joraBrook: {
    character: 'brook',
    type: { en: 'Opponent who deceives her', it: 'Avversario che la inganna' },
    summary: {
      en: 'Brook pretends to admire Jora’s art before undoing her attack on the ship.',
      it: 'Brook finge di ammirare l’arte di Jora prima di annullare il suo attacco alla nave.',
    },
  },
  joraDell: {
    character: 'dellinger',
    type: { en: 'Child she raised', it: 'Bambino che ha cresciuto' },
    summary: {
      en: 'Jora raises Dellinger after he is found as an abandoned baby.',
      it: 'Jora cresce Dellinger dopo che viene trovato abbandonato da neonato.',
    },
  },
  joraMansherry: {
    character: 'mansherry',
    type: {
      en: 'Captive she coerces',
      it: 'Prigioniera che costringe a obbedire',
    },
    summary: {
      en: 'Jora hurts Mansherry to force her to heal the defeated officers.',
      it: 'Jora colpisce Mansherry per costringerla a curare gli ufficiali sconfitti.',
    },
  },
  joraLeo: {
    character: 'leo',
    type: { en: 'Opponent who defeats her', it: 'Avversario che la sconfigge' },
    summary: {
      en: 'Leo defeats Jora and frees her captive.',
      it: 'Leo sconfigge Jora e libera la sua prigioniera.',
    },
  },
  orLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Captain he follows', it: 'Capitano che segue' },
    summary: {
      en: 'Orlumbus pledges his fleet to Luffy in the Straw Hat Grand Fleet.',
      it: 'Orlumbus mette la propria flotta al seguito di Rufy nella Grande Flotta di Cappello di Paglia.',
    },
  },
  orZoro: {
    character: 'roronoa-zoro',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'Orlumbus throws Zoro toward Pica so he can stop the stone giant.',
      it: 'Orlumbus lancia Zoro verso Pica perché possa fermare il gigante di pietra.',
    },
  },
  glaDoffy: {
    character: 'donquixote-doflamingo',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Gladius serves Doflamingo and is furious when someone betrays him.',
      it: 'Gladius serve Do Flamingo e si infuria quando qualcuno lo tradisce.',
    },
  },
  glaViola: {
    character: 'viola',
    type: { en: 'Defector he pursues', it: 'Disertrice che vuole punire' },
    summary: {
      en: 'Gladius wants to punish Viola for turning against the crew.',
      it: 'Gladius vuole punire Viola per essersi rivoltata contro la ciurma.',
    },
  },
  glaBarto: {
    character: 'bartolomeo',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Bartolomeo defeats Gladius after he threatens the people behind his barrier.',
      it: 'Bartolomeo sconfigge Gladius dopo che minaccia le persone dietro la sua barriera.',
    },
  },
  leoUsoppBelief: {
    character: 'usopp',
    type: { en: 'Hero he trusts', it: 'Eroe di cui si fida' },
    summary: {
      en: 'Leo believes Usopp’s claim that he is a descendant of Noland and follows him.',
      it: 'Leo crede a Usop quando dice di discendere da Noland e lo segue.',
    },
  },
  leoUsopp: {
    character: 'usopp',
    type: { en: 'Liberator', it: 'Liberatore' },
    summary: {
      en: 'Usopp returns to help Leo and defeats the power keeping people trapped as toys.',
      it: 'Usop torna ad aiutare Leo e interrompe il potere che tiene le persone intrappolate come giocattoli.',
    },
  },
  leoKyros: {
    character: 'kyros',
    type: { en: 'Commander', it: 'Comandante' },
    summary: {
      en: 'Leo follows Kyros in the rebellion against Doflamingo.',
      it: 'Leo segue Kyros nella ribellione contro Do Flamingo.',
    },
  },
  leoMansherry: {
    character: 'mansherry',
    type: {
      en: 'Princess he wants to rescue',
      it: 'Principessa che vuole salvare',
    },
    summary: {
      en: 'Leo wants to free Mansherry from captivity.',
      it: 'Leo vuole liberare Mansherry dalla prigionia.',
    },
  },
  leoMansherryFree: {
    character: 'mansherry',
    type: { en: 'Princess he rescues', it: 'Principessa che salva' },
    summary: {
      en: 'Leo defeats her captor and carries Mansherry to safety.',
      it: 'Leo sconfigge la sua carceriera e porta Mansherry in salvo.',
    },
  },
  leoJora: {
    character: 'jora',
    type: { en: 'Defeated opponent', it: 'Avversaria sconfitta' },
    summary: {
      en: 'Leo defeats Jora when she tries to force the princess to use her healing power.',
      it: 'Leo sconfigge Jora quando cerca di costringere la principessa a usare il suo potere curativo.',
    },
  },
  leoLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Captain he follows', it: 'Capitano che segue' },
    summary: {
      en: 'Leo pledges the Tontatta crew to Luffy in the Straw Hat Grand Fleet.',
      it: 'Leo mette la ciurma dei Tontatta al seguito di Rufy nella Grande Flotta di Cappello di Paglia.',
    },
  },
  leoSai: {
    character: 'sai',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'Leo and Sai strike Charlos together to free Shirahoshi.',
      it: 'Leo e Sai colpiscono insieme Charlos per liberare Shirahoshi.',
    },
  },
  kyrosRebecca: {
    character: 'rebecca',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'Kyros raises Rebecca while trapped in a toy’s body and fights to protect her.',
      it: 'Kyros cresce Rebecca mentre è intrappolato nel corpo di un giocattolo e combatte per proteggerla.',
    },
  },
  kyrosScarlett: {
    character: 'scarlett',
    type: { en: 'Late wife', it: 'Moglie defunta' },
    summary: {
      en: 'Kyros marries Scarlett and raises their daughter with her.',
      it: 'Kyros sposa Scarlet e cresce insieme a lei la loro figlia.',
    },
  },
  kyrosRiku: {
    character: 'riku-doldo-iii',
    type: { en: 'Benefactor and father-in-law', it: 'Benefattore e suocero' },
    summary: {
      en: 'Riku gives Kyros a new life and accepts his marriage to his daughter.',
      it: 'Riku offre a Kyros una nuova vita e accetta il matrimonio con sua figlia.',
    },
  },
  kyrosViola: {
    character: 'viola',
    type: { en: 'Sister-in-law', it: 'Cognata' },
    summary: {
      en: 'Viola is the younger sister of Kyros’s wife and recognises his kindness.',
      it: 'Viola è la sorella minore della moglie di Kyros e ne riconosce la bontà.',
    },
  },
  kyrosDiam: {
    character: 'diamante',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'Kyros pursues Diamante for killing his wife and threatening his daughter.',
      it: 'Kyros insegue Diamante per aver ucciso sua moglie e minacciato sua figlia.',
    },
  },
  kyrosDiamDefeat: {
    character: 'diamante',
    type: { en: 'Defeated enemy', it: 'Nemico sconfitto' },
    summary: {
      en: 'Kyros defeats Diamante and protects his daughter from him.',
      it: 'Kyros sconfigge Diamante e protegge sua figlia da lui.',
    },
  },
  kyrosRebeccaHome: {
    character: 'rebecca',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'Rebecca refuses to let Kyros leave alone and chooses to live with him.',
      it: 'Rebecca si rifiuta di lasciare che Kyros parta da solo e sceglie di vivere con lui.',
    },
  },
  kyrosLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'Luffy brings Rebecca back to Kyros so they can live together.',
      it: 'Rufy riporta Rebecca da Kyros perché possano vivere insieme.',
    },
  },
  momoLuffyRescue: {
    character: 'monkey-d-luffy',
    type: { en: 'Escape companion', it: 'Compagno di fuga' },
    summary: {
      en: 'Momonosuke meets Luffy in the laboratory’s waste room and carries him out as a dragon.',
      it: 'Momonosuke incontra Rufy nella discarica del laboratorio e lo porta fuori in forma di drago.',
    },
  },
  momoKinClaim: {
    character: 'kinemon',
    type: { en: 'Claimed father', it: 'Padre dichiarato' },
    summary: {
      en: 'Momonosuke calls Kin’emon his father when they are reunited on Punk Hazard.',
      it: 'Momonosuke chiama Kin’emon suo padre quando si ritrovano a Punk Hazard.',
    },
  },
  momoKin: {
    character: 'kinemon',
    type: { en: 'Retainer and protector', it: 'Servitore e protettore' },
    summary: {
      en: 'Kin’emon protects Momonosuke and pretends to be his father during their journey.',
      it: 'Kin’emon protegge Momonosuke e si finge suo padre durante il viaggio.',
    },
  },
  momoLuffyAlly: {
    character: 'monkey-d-luffy',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'Momonosuke asks Luffy to help him defeat Kaido and avenge his family.',
      it: 'Momonosuke chiede a Rufy di aiutarlo a sconfiggere Kaido e vendicare la sua famiglia.',
    },
  },
  momoKaido: {
    character: 'kaido',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'Momonosuke wants to defeat Kaido for the deaths of his parents.',
      it: 'Momonosuke vuole sconfiggere Kaido per la morte dei suoi genitori.',
    },
  },
  momoHiyori: {
    character: 'kozuki-hiyori',
    type: { en: 'Younger sister', it: 'Sorella minore' },
    summary: {
      en: 'Momonosuke learns that his younger sister Hiyori has survived.',
      it: 'Momonosuke scopre che sua sorella minore Hiyori è sopravvissuta.',
    },
  },
  momoOden: {
    character: 'kozuki-oden',
    type: { en: 'Late father', it: 'Padre defunto' },
    summary: {
      en: 'Oden is Momonosuke’s father and the lord whose legacy he hopes to uphold.',
      it: 'Oden è il padre di Momonosuke e il signore di cui spera di raccogliere l’eredità.',
    },
  },
  momoYamato: {
    character: 'yamato',
    type: { en: 'Protector', it: 'Protettore' },
    summary: {
      en: 'Yamato shields Momonosuke from the enemy and promises to keep him alive.',
      it: 'Yamato protegge Momonosuke dal nemico e promette di tenerlo in vita.',
    },
  },
  momoHiyoriReunion: {
    character: 'kozuki-hiyori',
    type: { en: 'Younger sister', it: 'Sorella minore' },
    summary: {
      en: 'Hiyori embraces Momonosuke after his return as Wano’s new shogun.',
      it: 'Hiyori abbraccia Momonosuke quando torna come nuovo shogun di Wano.',
    },
  },
  momoLuffyFriend: {
    character: 'monkey-d-luffy',
    type: { en: 'Friend and ally', it: 'Amico e alleato' },
    summary: {
      en: 'Luffy gives Momonosuke his flag before leaving Wano and invites him to sail together someday.',
      it: 'Rufy dà a Momonosuke la propria bandiera prima di lasciare Wano e lo invita a salpare insieme un giorno.',
    },
  },
  kanKin: {
    character: 'kinemon',
    type: { en: 'Samurai comrade', it: 'Compagno samurai' },
    summary: {
      en: 'Kanjuro stays behind in Dressrosa to let Kin’emon escape, then helps him leave the scrap heap.',
      it: 'Kanjuro resta a Dressrosa per permettere a Kin’emon di fuggire, poi lo aiuta a lasciare la discarica.',
    },
  },
  kanMomo: {
    character: 'momonosuke',
    type: { en: 'Young lord', it: 'Giovane signore' },
    summary: {
      en: 'Kanjuro travels with Momonosuke as a retainer of his family.',
      it: 'Kanjuro viaggia con Momonosuke come servitore della sua famiglia.',
    },
  },
  kanOden: {
    character: 'kozuki-oden',
    type: { en: 'Lord', it: 'Signore' },
    summary: {
      en: 'Kanjuro joins Oden’s followers and lives as one of his retainers.',
      it: 'Kanjuro si unisce ai seguaci di Oden e vive come uno dei suoi servitori.',
    },
  },
  kanOrochi: {
    character: 'kurozumi-orochi',
    type: { en: 'True master', it: 'Vero padrone' },
    summary: {
      en: 'Kanjuro reveals that he has served Orochi as a spy among the samurai.',
      it: 'Kanjuro rivela di aver servito Orochi come spia tra i samurai.',
    },
  },
  kanKinBetrayed: {
    character: 'kinemon',
    type: { en: 'Comrade he betrays', it: 'Compagno che tradisce' },
    summary: {
      en: 'Kanjuro admits his deception to Kin’emon, who attacks him.',
      it: 'Kanjuro confessa l’inganno a Kin’emon, che lo attacca.',
    },
  },
  kanMomoCaptive: {
    character: 'momonosuke',
    type: { en: 'Captive', it: 'Prigioniero' },
    summary: {
      en: 'Kanjuro abducts Momonosuke to deliver him to the enemy.',
      it: 'Kanjuro rapisce Momonosuke per consegnarlo al nemico.',
    },
  },
  kanOdenCover: {
    character: 'kozuki-oden',
    type: { en: 'Lord he deceived', it: 'Signore che ha ingannato' },
    summary: {
      en: 'Kanjuro’s service to Oden was a role he played on Orochi’s orders.',
      it: 'Il servizio di Kanjuro presso Oden era un ruolo recitato su ordine di Orochi.',
    },
  },
  kanKiku: {
    character: 'kiku',
    type: {
      en: 'Former comrade turned opponent',
      it: 'Ex compagna diventata avversaria',
    },
    summary: {
      en: 'Kiku fights Kanjuro after his betrayal and the abuse of their young lord.',
      it: 'Kiku affronta Kanjuro dopo il tradimento e le violenze contro il loro giovane signore.',
    },
  },
  kanKinDefeat: {
    character: 'kinemon',
    type: {
      en: 'Opponent who strikes him down',
      it: 'Avversario che lo abbatte',
    },
    summary: {
      en: 'Kin’emon strikes Kanjuro down after he attacks their companions again.',
      it: 'Kin’emon abbatte Kanjuro dopo che attacca di nuovo i loro compagni.',
    },
  },
  kanOrochiFinal: {
    character: 'kurozumi-orochi',
    type: {
      en: 'Master he obeys to the end',
      it: 'Padrone a cui obbedisce fino alla fine',
    },
    summary: {
      en: 'Kanjuro answers Orochi’s final order by creating a fire that threatens the whole island.',
      it: 'Kanjuro risponde all’ultimo ordine di Orochi creando un fuoco che minaccia l’intera isola.',
    },
  },
  rosiLaw: {
    character: 'trafalgar-law',
    type: { en: 'Child he saves', it: 'Bambino che salva' },
    summary: {
      en: 'Rosinante gives Law the fruit that can cure him and protects his escape with his life.',
      it: 'Rosinante dà a Law il frutto che può guarirlo e protegge la sua fuga a costo della vita.',
    },
  },
  rosiDoffy: {
    character: 'donquixote-doflamingo',
    type: {
      en: 'Older brother and killer',
      it: 'Fratello maggiore e assassino',
    },
    summary: {
      en: 'Rosinante tries to stop his older brother, who kills him after discovering his Marine mission.',
      it: 'Rosinante cerca di fermare suo fratello maggiore, che lo uccide dopo aver scoperto la sua missione per la Marina.',
    },
  },
  rosiSengoku: {
    character: 'sengoku',
    type: { en: 'Marine superior', it: 'Superiore nella Marina' },
    summary: {
      en: 'Rosinante reports secretly to Sengoku while infiltrating his brother’s crew.',
      it: 'Rosinante fa rapporto in segreto a Sengoku mentre si infiltra nella ciurma di suo fratello.',
    },
  },
  rosiHoming: {
    character: 'donquixote-homing',
    type: { en: 'Late father', it: 'Padre defunto' },
    summary: {
      en: 'Rosinante tries to stop his brother from killing their father Homing.',
      it: 'Rosinante cerca di impedire a suo fratello di uccidere il loro padre Homing.',
    },
  },
  rosiVergo: {
    character: 'vergo',
    type: { en: 'Enemy infiltrator', it: 'Infiltrato nemico' },
    summary: {
      en: 'Vergo discovers Rosinante’s mission and attacks him before he can warn the Marines.',
      it: 'Vergo scopre la missione di Rosinante e lo aggredisce prima che possa avvertire la Marina.',
    },
  },
  rosiSengokuSon: {
    character: 'sengoku',
    type: { en: 'Father figure', it: 'Figura paterna' },
    summary: {
      en: 'Sengoku takes Rosinante in as a child and comes to regard him as a son.',
      it: 'Sengoku accoglie Rosinante da bambino e arriva a considerarlo un figlio.',
    },
  },
  kaidoDoffy: {
    character: 'donquixote-doflamingo',
    type: { en: 'Supplier', it: 'Fornitore' },
    summary: {
      en: 'Kaido relies on Doflamingo for the artificial fruits used to strengthen his army.',
      it: 'Kaido si affida a Do Flamingo per i frutti artificiali con cui rafforza il proprio esercito.',
    },
  },
  kaidoLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Kaido defeats Luffy in Kuri and orders him imprisoned.',
      it: 'Kaido sconfigge Rufy a Kuri e ordina di imprigionarlo.',
    },
  },
  kaidoBigMom: {
    character: 'charlotte-linlin',
    type: { en: 'Temporary ally', it: 'Alleata temporanea' },
    summary: {
      en: 'Kaido and Big Mom end their clash by forming an alliance to conquer the world.',
      it: 'Kaido e Big Mom interrompono lo scontro formando un’alleanza per conquistare il mondo.',
    },
  },
  kaidoOden: {
    character: 'kozuki-oden',
    type: { en: 'Respected enemy', it: 'Nemico rispettato' },
    summary: {
      en: 'Oden wounds Kaido before Kaido wins their battle through a distraction.',
      it: 'Oden ferisce Kaido prima che Kaido vinca lo scontro approfittando di una distrazione.',
    },
  },
  kaidoYamato: {
    character: 'yamato',
    type: { en: 'Rebellious son', it: 'Figlio ribelle' },
    summary: {
      en: 'Yamato is Kaido’s son and opposes his rule over Wano.',
      it: 'Yamato è il figlio di Kaido e si oppone al suo dominio su Wano.',
    },
  },
  kaidoOrochi: {
    character: 'kurozumi-orochi',
    type: { en: 'Ally he betrays', it: 'Alleato che tradisce' },
    summary: {
      en: 'Kaido cuts Orochi down when he objects to the plan for Wano’s capital.',
      it: 'Kaido abbatte Orochi quando si oppone al piano per la capitale di Wano.',
    },
  },
  kaidoKing: {
    character: 'king',
    type: { en: 'Trusted lieutenant', it: 'Luogotenente fidato' },
    summary: {
      en: 'Kaido frees King from captivity and invites him to help change the world.',
      it: 'Kaido libera King dalla prigionia e lo invita ad aiutarlo a cambiare il mondo.',
    },
  },
  kaidoLuffyDefeat: {
    character: 'monkey-d-luffy',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Luffy defeats Kaido and drives him down beneath Wano.',
      it: 'Rufy sconfigge Kaido e lo scaglia nelle profondità sotto Wano.',
    },
  },
  mochaNami: {
    character: 'nami',
    type: { en: 'Rescuer', it: 'Soccorritrice' },
    summary: {
      en: 'Nami promises Mocha that she will take her home.',
      it: 'Nami promette a Mocia che la riporterà a casa.',
    },
  },
  mochaChopper: {
    character: 'tony-tony-chopper',
    type: { en: 'Doctor', it: 'Medico' },
    summary: {
      en: 'Chopper discovers that the children have been drugged instead of treated for an illness.',
      it: 'Chopper scopre che i bambini sono stati drogati invece di essere curati da una malattia.',
    },
  },
  mochaCaesar: {
    character: 'caesar-clown',
    type: { en: 'Abuser', it: 'Aguzzino' },
    summary: {
      en: 'Mocha learns that Caesar is experimenting on the children and that his candy is poisonous.',
      it: 'Mocia scopre che Caesar usa i bambini per esperimenti e che le sue caramelle sono velenose.',
    },
  },
  mochaChopperPromise: {
    character: 'tony-tony-chopper',
    type: { en: 'Doctor', it: 'Medico' },
    summary: {
      en: 'Chopper treats Mocha after she swallows the candy to keep it away from the other children.',
      it: 'Chopper cura Mocia dopo che ingoia le caramelle per impedirne l’uso agli altri bambini.',
    },
  },
  broCaesar: {
    character: 'caesar-clown',
    type: { en: 'Employer', it: 'Datore di lavoro' },
    summary: {
      en: 'Caesar hires Rock and Scotch to kill the intruders and Brownbeard.',
      it: 'Caesar incarica Rock e Scotch di uccidere gli intrusi e Barbabruna.',
    },
  },
  broBrown: {
    character: 'brownbeard',
    type: { en: 'Target', it: 'Bersaglio' },
    summary: {
      en: 'Rock and Scotch attack Brownbeard despite his belief that they have come to rescue him.',
      it: 'Rock e Scotch attaccano Barbabruna nonostante creda che siano venuti a salvarlo.',
    },
  },
  broLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Luffy fights Rock and Scotch after they carry off one of his companions.',
      it: 'Rufy affronta Rock e Scotch dopo che portano via una sua compagna.',
    },
  },
  smileyCaesar: {
    character: 'caesar-clown',
    type: { en: 'Creator', it: 'Creatore' },
    summary: {
      en: 'Caesar makes Smiley from the poison gas left by the island’s disaster.',
      it: 'Caesar crea Smiley dal gas velenoso rimasto dopo il disastro sull’isola.',
    },
  },
  smileyCaesarWeapon: {
    character: 'caesar-clown',
    type: { en: 'Creator who sacrifices it', it: 'Creatore che lo sacrifica' },
    summary: {
      en: 'Caesar feeds Smiley a substance that destroys its body and releases his new poison gas.',
      it: 'Caesar dà a Smiley una sostanza che ne distrugge il corpo e libera il suo nuovo gas velenoso.',
    },
  },
  spartanLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Luffy knocks Spartan down after he attacks him in the waiting room.',
      it: 'Rufy abbatte Spartan dopo che lo attacca nella sala d’attesa.',
    },
  },
  kellyBobby: {
    character: 'bobby-funk',
    type: { en: 'Younger brother', it: 'Fratello minore' },
    summary: {
      en: 'Kelly and Bobby enter the tournament together.',
      it: 'Kelly e Bobby si iscrivono insieme al torneo.',
    },
  },
  bobbyKelly: {
    character: 'kelly-funk',
    type: { en: 'Older brother', it: 'Fratello maggiore' },
    summary: {
      en: 'Bobby accompanies his older brother Kelly to the tournament.',
      it: 'Bobby accompagna suo fratello maggiore Kelly al torneo.',
    },
  },
  kellyBobbyPower: {
    character: 'bobby-funk',
    type: {
      en: 'Younger brother and fighting partner',
      it: 'Fratello minore e compagno di lotta',
    },
    summary: {
      en: 'Kelly uses his fruit power to control Bobby’s strong body in battle.',
      it: 'Kelly usa il potere del proprio frutto per controllare in battaglia il corpo robusto di Bobby.',
    },
  },
  bobbyKellyPower: {
    character: 'kelly-funk',
    type: {
      en: 'Older brother and fighting partner',
      it: 'Fratello maggiore e compagno di lotta',
    },
    summary: {
      en: 'Bobby wears Kelly as a jacket and lets him fight using his body.',
      it: 'Bobby indossa Kelly come una giacca e gli lascia usare il proprio corpo per combattere.',
    },
  },
  kellySai: {
    character: 'sai',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Sai defeats Kelly while he is fighting with his brother’s body.',
      it: 'Sai sconfigge Kelly mentre combatte con il corpo di suo fratello.',
    },
  },
  bobbySai: {
    character: 'sai',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Sai defeats the brothers while Bobby is wearing Kelly.',
      it: 'Sai sconfigge i fratelli mentre Bobby indossa Kelly.',
    },
  },
  kellyLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Person he deceives', it: 'Persona che inganna' },
    summary: {
      en: 'Kelly sends Luffy into a flooded dead end while pretending to show him a shortcut.',
      it: 'Kelly manda Rufy in un vicolo cieco allagato fingendo di indicargli una scorciatoia.',
    },
  },
  dagEliz: {
    character: 'elizabello-ii',
    type: { en: 'King he serves', it: 'Re che serve' },
    summary: {
      en: 'Dagama arranges protection for Elizabello while he prepares his strongest punch.',
      it: 'Dagama organizza la protezione di Elizabello mentre prepara il suo pugno più potente.',
    },
  },
  dagGilly: {
    character: 'blue-gilly',
    type: { en: 'Partner he betrays', it: 'Complice che tradisce' },
    summary: {
      en: 'Dagama tries to betray Blue Gilly, but Blue Gilly sees through the plan and defeats him.',
      it: 'Dagama cerca di tradire Blue Gilly, ma Blue Gilly capisce il piano e lo sconfigge.',
    },
  },
  dagLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'Dagama coordinates the fighters to clear a path for Luffy to reach the palace.',
      it: 'Dagama coordina i combattenti per aprire a Rufy una strada verso il palazzo.',
    },
  },
  sulCav: {
    character: 'cavendish',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Suleiman joins Cavendish’s crew after the battle in Dressrosa.',
      it: 'Suleiman entra nella ciurma di Cavendish dopo la battaglia a Dressrosa.',
    },
  },
  abdJeet: {
    character: 'jeet',
    type: { en: 'Fighting partner', it: 'Compagno di lotta' },
    summary: {
      en: 'Abdullah and Jeet enter the tournament as a pair.',
      it: 'Abdullah e Jeet si iscrivono al torneo insieme.',
    },
  },
  jeetAbd: {
    character: 'abdullah',
    type: { en: 'Fighting partner', it: 'Compagno di lotta' },
    summary: {
      en: 'Jeet fights alongside Abdullah in the colosseum.',
      it: 'Jeet combatte al fianco di Abdullah nel colosseo.',
    },
  },
  abdLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Ally he rescues', it: 'Alleato che salva' },
    summary: {
      en: 'Abdullah and his partner pull Luffy from the flooded trap beneath the plateau.',
      it: 'Abdullah e il suo compagno tirano Rufy fuori dalla trappola allagata sotto l’altopiano.',
    },
  },
  jeetLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Ally he rescues', it: 'Alleato che salva' },
    summary: {
      en: 'Jeet and his partner rescue Luffy from the flooded dead end.',
      it: 'Jeet e il suo compagno salvano Rufy dal vicolo cieco allagato.',
    },
  },
  abdIdeo: {
    character: 'ideo',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Abdullah joins Ideo’s fighting crew after the battle.',
      it: 'Abdullah entra nella ciurma di lottatori di Ideo dopo la battaglia.',
    },
  },
  jeetIdeo: {
    character: 'ideo',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Jeet joins Ideo’s fighting crew after the battle.',
      it: 'Jeet entra nella ciurma di lottatori di Ideo dopo la battaglia.',
    },
  },
  abdGilly: {
    character: 'blue-gilly',
    type: { en: 'Crewmate', it: 'Compagno di ciurma' },
    summary: {
      en: 'Abdullah and Blue Gilly join the same fighting crew.',
      it: 'Abdullah e Blue Gilly entrano nella stessa ciurma di lottatori.',
    },
  },
  jeetGilly: {
    character: 'blue-gilly',
    type: { en: 'Crewmate', it: 'Compagno di ciurma' },
    summary: {
      en: 'Jeet and Blue Gilly join the same fighting crew.',
      it: 'Jeet e Blue Gilly entrano nella stessa ciurma di lottatori.',
    },
  },
  booSai: {
    character: 'sai',
    type: { en: 'Older brother', it: 'Fratello maggiore' },
    summary: {
      en: 'Boo accompanies Sai to the tournament and calms him when he gets angry.',
      it: 'Boo accompagna Sai al torneo e lo calma quando si arrabbia.',
    },
  },
  booChinjao: {
    character: 'don-chinjao',
    type: { en: 'Grandfather', it: 'Nonno' },
    summary: {
      en: 'Boo travels with his grandfather Chinjao and his brother.',
      it: 'Boo viaggia con suo nonno Chinjao e suo fratello.',
    },
  },
  booKelly: {
    character: 'kelly-funk',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Boo knocks Kelly down before the brothers turn the fight against him.',
      it: 'Boo abbatte Kelly prima che i fratelli ribaltino lo scontro.',
    },
  },
  booBobby: {
    character: 'bobby-funk',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Boo’s axe shatters against Bobby’s back, and the brothers defeat him together.',
      it: 'L’ascia di Boo si spezza contro la schiena di Bobby e i fratelli lo sconfiggono insieme.',
    },
  },
  gambiaBarto: {
    character: 'bartolomeo',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Gambia belongs to Bartolomeo’s crew.',
      it: 'Gambia appartiene alla ciurma di Bartolomeo.',
    },
  },
  gambiaMaynard: {
    character: 'maynard',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Maynard defeats Gambia after he discovers the undercover Marine.',
      it: 'Maynard sconfigge Gambia dopo che scopre il marine sotto copertura.',
    },
  },
  tankRiku: {
    character: 'riku-doldo-iii',
    type: { en: 'King he remains loyal to', it: 'Re a cui rimane fedele' },
    summary: {
      en: 'Tank recognises Riku in the dungeon and defends his name.',
      it: 'Tank riconosce Riku nella prigione e ne difende il nome.',
    },
  },
  tankViola: {
    character: 'viola',
    type: { en: 'Princess he protects', it: 'Principessa che protegge' },
    summary: {
      en: 'Tank has watched over Viola during the years after her father’s overthrow.',
      it: 'Tank ha vegliato su Viola negli anni dopo la deposizione di suo padre.',
    },
  },
  gatzLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Fighter he supports', it: 'Combattente che sostiene' },
    summary: {
      en: 'Gatz carries the exhausted Luffy and helps him recover for the final fight.',
      it: 'Gats porta in salvo Rufy esausto e lo aiuta a riprendersi per lo scontro finale.',
    },
  },
  wiccaZoro: {
    character: 'roronoa-zoro',
    type: { en: 'Person she guides', it: 'Persona che guida' },
    summary: {
      en: 'Wicca asks Zoro for help and guides him toward her companions.',
      it: 'Wicca chiede aiuto a Zoro e lo guida verso i suoi compagni.',
    },
  },
  wiccaViola: {
    character: 'viola',
    type: { en: 'Ally she trusts', it: 'Alleata di cui si fida' },
    summary: {
      en: 'Wicca defends Viola’s loyalty, and Viola thanks her for believing in her father.',
      it: 'Wicca difende la fedeltà di Viola e Viola la ringrazia per aver creduto in suo padre.',
    },
  },
  ucyLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Rider and friend', it: 'Cavaliere e amico' },
    summary: {
      en: 'Luffy befriends Ucy, rides him in the tournament and defends him when he is hurt.',
      it: 'Rufy fa amicizia con Ucy, lo cavalca nel torneo e lo difende quando viene ferito.',
    },
  },
  jeanLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Target', it: 'Bersaglio' },
    summary: {
      en: 'Jean Ango attacks Luffy with stolen weapons after working out his disguise.',
      it: 'Jean Ango attacca Rufy con armi rubate dopo aver scoperto il suo travestimento.',
    },
  },
  jeanChinjao: {
    character: 'don-chinjao',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Chinjao knocks Jean Ango out after the weapons aimed at Luffy strike him instead.',
      it: 'Chinjao mette al tappeto Jean Ango dopo che le armi dirette a Rufy colpiscono lui.',
    },
  },
  scarRebecca: {
    character: 'rebecca',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'Scarlett dies after leaving to buy food for her daughter Rebecca.',
      it: 'Scarlet muore dopo essere uscita a comprare del cibo per sua figlia Rebecca.',
    },
  },
  scarKyros: {
    character: 'kyros',
    type: { en: 'Husband', it: 'Marito' },
    summary: {
      en: 'Scarlett leaves royal life to marry Kyros and raise their daughter with him.',
      it: 'Scarlet lascia la vita di corte per sposare Kyros e crescere con lui la loro figlia.',
    },
  },
  scarRiku: {
    character: 'riku-doldo-iii',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Riku helps Scarlett leave the royal family to live with the man she loves.',
      it: 'Riku aiuta Scarlet a lasciare la famiglia reale per vivere con l’uomo che ama.',
    },
  },
  scarViola: {
    character: 'viola',
    type: { en: 'Younger sister', it: 'Sorella minore' },
    summary: {
      en: 'Viola helps Scarlett keep her new family life hidden from the public.',
      it: 'Viola aiuta Scarlet a tenere nascosta al pubblico la sua nuova vita familiare.',
    },
  },
  scarDiam: {
    character: 'diamante',
    type: { en: 'Killer', it: 'Assassino' },
    summary: {
      en: 'Diamante shoots Scarlett while she is trying to bring food to her daughter.',
      it: 'Diamante spara a Scarlet mentre cerca di portare del cibo a sua figlia.',
    },
  },
  kyuinFranky: {
    character: 'franky',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Franky stops Kyuin from attacking the workers escaping the factory.',
      it: 'Franky impedisce a Swuuush di attaccare gli operai in fuga dalla fabbrica.',
    },
  },
  lamiLaw: {
    character: 'trafalgar-law',
    type: { en: 'Older brother', it: 'Fratello maggiore' },
    summary: {
      en: 'Law stays beside Lami in the hospital as the illness destroys their home town.',
      it: 'Law resta accanto a Lami in ospedale mentre la malattia distrugge la loro città.',
    },
  },
  homDoffy: {
    character: 'donquixote-doflamingo',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'Homing gives up his rank and takes Doflamingo away from Mary Geoise to live among ordinary people.',
      it: 'Homing rinuncia al proprio rango e porta Do Flamingo lontano da Mary Geoise per vivere tra la gente comune.',
    },
  },
  homRosi: {
    character: 'donquixote-rosinante',
    type: { en: 'Younger son', it: 'Figlio minore' },
    summary: {
      en: 'Rosinante begs his brother to spare their father’s life.',
      it: 'Rosinante supplica suo fratello di risparmiare la vita del padre.',
    },
  },
  homDoffyKiller: {
    character: 'donquixote-doflamingo',
    type: { en: 'Son and killer', it: 'Figlio e assassino' },
    summary: {
      en: 'Doflamingo shoots Homing, blaming him for the family’s loss of power.',
      it: 'Do Flamingo spara a Homing, incolpandolo della perdita di potere della famiglia.',
    },
  },
  barrelsRosi: {
    character: 'donquixote-rosinante',
    type: { en: 'Thief', it: 'Ladro' },
    summary: {
      en: 'Rosinante steals the fruit that Barrels plans to sell to the Marines.',
      it: 'Rosinante ruba il frutto che Barrels vuole vendere alla Marina.',
    },
  },
  barrelsDoffy: {
    character: 'donquixote-doflamingo',
    type: { en: 'Killer', it: 'Assassino' },
    summary: {
      en: 'Doflamingo kills Barrels after learning that the fruit has been stolen.',
      it: 'Do Flamingo uccide Barrels dopo aver saputo che il frutto è stato rubato.',
    },
  },
  barrelsDrake: {
    character: 'x-drake',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'Drake is Barrels’s son and escaped the island where his father was killed.',
      it: 'Drake è il figlio di Barrels ed è fuggito dall’isola in cui suo padre è stato ucciso.',
    },
  },
  caesarMonetVictim: {
    character: 'monet',
    type: { en: 'Unwitting victim', it: 'Vittima inconsapevole' },
    summary: {
      en: 'Caesar kills Monet by stabbing her heart, which he mistakes for another person’s.',
      it: 'Caesar uccide Monet pugnalandone il cuore, che scambia per quello di un’altra persona.',
    },
  },
} satisfies Record<string, Relationship>

/** Complete directed selections, carried forward until the next reached change. */
export const dressrosaRelationships = {
  // Childhood evidence is chapter 622 / episode 541, held behind her 626
  // endpoint. No romance with Sabo; her mother is not a record.
  'koala': [
    {
      episode: 541,
      chapter: 626,
      value: [retained.koalaTiger, retained.koalaHachi, retained.koalaArlong],
    },
    {
      episode: 663,
      chapter: 731,
      value: [
        retained.koalaSabo,
        retained.koalaTiger,
        retained.koalaHachi,
        retained.koalaArlong,
      ],
    },
    {
      episode: 678,
      chapter: 743,
      value: [
        retained.koalaSabo,
        retained.koalaHack,
        retained.koalaTiger,
        retained.koalaHachi,
        retained.koalaArlong,
      ],
    },
    {
      episode: 680,
      chapter: 745,
      value: [
        retained.koalaSabo,
        retained.koalaRobin,
        retained.koalaHack,
        retained.koalaTiger,
      ],
    },
    {
      episode: 752,
      chapter: 803,
      value: [
        retained.koalaSabo,
        retained.koalaRobin,
        retained.koalaHack,
        retained.koalaDragon,
        retained.koalaTiger,
      ],
    },
    {
      episode: 1044,
      chapter: 1021,
      value: [
        retained.koalaSabo,
        retained.koalaRobinTeacher,
        retained.koalaHack,
        retained.koalaDragon,
        retained.koalaTiger,
      ],
    },
  ],
  // Cover story is claimed parentage, replaced at 768/817 when the
  // retainer bond is revealed. Oden's own endpoint delays his cards to 960.
  'kinemon': [
    { episode: 598, chapter: 672, value: [retained.kinSanji, retained.kinLaw] },
    {
      episode: 622,
      chapter: 696,
      value: [retained.kinMomoClaim, retained.kinSanji, retained.kinLaw],
    },
    {
      episode: 691,
      chapter: 755,
      value: [
        retained.kinMomoClaim,
        retained.kinKanjuro,
        retained.kinSanji,
        retained.kinLaw,
      ],
    },
    {
      episode: 768,
      chapter: 817,
      value: [
        retained.kinMomo,
        retained.kinKanjuro,
        retained.kinSanji,
        retained.kinLaw,
      ],
    },
    {
      episode: 772,
      chapter: 819,
      value: [
        retained.kinMomo,
        retained.kinLuffy,
        retained.kinKanjuro,
        retained.kinSanji,
        retained.kinLaw,
      ],
    },
    {
      episode: 911,
      chapter: 921,
      value: [
        retained.kinMomo,
        retained.kinTsuru,
        retained.kinLuffy,
        retained.kinKanjuro,
        retained.kinSanji,
      ],
    },
    {
      episode: 961,
      chapter: 961,
      value: [
        retained.kinMomo,
        retained.kinOden,
        retained.kinTsuru,
        retained.kinLuffy,
        retained.kinKanjuro,
      ],
    },
    {
      episode: 977,
      chapter: 974,
      value: [
        retained.kinMomo,
        retained.kinOden,
        retained.kinTsuru,
        retained.kinLuffy,
        retained.kinKanjuroTraitor,
      ],
    },
    {
      episode: 1035,
      chapter: 1014,
      value: [
        retained.kinMomo,
        retained.kinOden,
        retained.kinTsuru,
        retained.kinLuffy,
        retained.kinKanjuroDefeated,
      ],
    },
  ],
  'brownbeard': [
    {
      episode: 591,
      chapter: 665,
      value: [retained.brownCaesarBelief, retained.brownLaw],
    },
    {
      episode: 592,
      chapter: 666,
      value: [retained.brownCaesar, retained.brownBrothers, retained.brownLaw],
    },
    {
      episode: 615,
      chapter: 689,
      value: [
        retained.brownCaesar,
        retained.brownLuffy,
        retained.brownBrothers,
        retained.brownLaw,
      ],
    },
  ],
  // NEO MADS with Judge is the chapter-1078 cover: manga-only, episode
  // 1110 is just an ordering reference.
  'caesar-clown': [
    { episode: 589, chapter: 664, value: [retained.caesarMonet] },
    {
      episode: 599,
      chapter: 673,
      value: [
        retained.caesarDoffy,
        retained.caesarMonet,
        retained.caesarLaw,
        retained.caesarVergo,
      ],
    },
    {
      episode: 620,
      chapter: 694,
      value: [
        retained.caesarDoffy,
        retained.caesarMonetVictim,
        retained.caesarLaw,
        retained.caesarVergo,
      ],
    },
    {
      episode: 621,
      chapter: 695,
      value: [
        retained.caesarLuffy,
        retained.caesarLaw,
        retained.caesarDoffy,
        retained.caesarMonetVictim,
        retained.caesarVergo,
      ],
    },
    {
      episode: 795,
      chapter: 834,
      value: [
        retained.caesarBigMom,
        retained.caesarLuffy,
        retained.caesarLaw,
        retained.caesarDoffy,
      ],
    },
    {
      episode: 828,
      chapter: 859,
      value: [
        retained.caesarBege,
        retained.caesarBigMom,
        retained.caesarLuffy,
        retained.caesarLaw,
      ],
    },
    {
      episode: 843,
      chapter: 872,
      value: [
        retained.caesarBegeFree,
        retained.caesarBigMom,
        retained.caesarLuffyFormer,
        retained.caesarLaw,
      ],
    },
    {
      episode: 1110,
      chapter: 1078,
      source: 'manga',
      value: [
        retained.caesarJudge,
        retained.caesarBegeFree,
        retained.caesarBigMom,
        retained.caesarLuffyFormer,
        retained.caesarLaw,
      ],
    },
  ],
  // Sisters with Sugar comes from SBS volume 77, which ends at 775: that
  // is the manga-only gate, episode 715 only orders. Crew alone implies no kin.
  'monet': [
    { episode: 589, chapter: 664, value: [retained.monetCaesar] },
    {
      episode: 599,
      chapter: 673,
      value: [retained.monetDoffy, retained.monetCaesar, retained.monetVergo],
    },
    {
      episode: 613,
      chapter: 687,
      value: [
        retained.monetDoffy,
        retained.monetCaesar,
        retained.monetVergo,
        retained.monetZoro,
      ],
    },
    {
      episode: 620,
      chapter: 694,
      value: [
        retained.monetDoffySacrifice,
        retained.monetCaesarKiller,
        retained.monetVergo,
        retained.monetZoro,
      ],
    },
    {
      episode: 715,
      chapter: 775,
      source: 'manga',
      value: [
        retained.monetSugar,
        retained.monetDoffySacrifice,
        retained.monetCaesarKiller,
        retained.monetVergo,
        retained.monetZoro,
      ],
    },
  ],
  'vergo': [
    { episode: 598, chapter: 672, value: [retained.vergoLaw] },
    {
      episode: 599,
      chapter: 673,
      value: [retained.vergoDoffy, retained.vergoLaw, retained.vergoCaesar],
    },
    {
      episode: 604,
      chapter: 678,
      value: [
        retained.vergoDoffy,
        retained.vergoSmoker,
        retained.vergoLaw,
        retained.vergoCaesar,
      ],
    },
    {
      episode: 617,
      chapter: 691,
      value: [
        retained.vergoDoffy,
        retained.vergoLawDefeat,
        retained.vergoSmoker,
        retained.vergoCaesar,
      ],
    },
    {
      episode: 705,
      chapter: 768,
      value: [
        retained.vergoDoffy,
        retained.vergoLawDefeat,
        retained.vergoRosi,
        retained.vergoSmoker,
        retained.vergoCaesar,
      ],
    },
  ],
  // Cover story is claimed parentage, replaced at 768/817 when the
  // retainer bond is revealed.
  'momonosuke': [
    { episode: 611, chapter: 685, value: [retained.momoLuffyRescue] },
    {
      episode: 622,
      chapter: 696,
      value: [retained.momoKinClaim, retained.momoLuffyRescue],
    },
    {
      episode: 768,
      chapter: 817,
      value: [retained.momoKin, retained.momoLuffyRescue],
    },
    {
      episode: 772,
      chapter: 819,
      value: [retained.momoKin, retained.momoLuffyAlly, retained.momoKaido],
    },
    {
      episode: 956,
      chapter: 955,
      value: [
        retained.momoKin,
        retained.momoLuffyAlly,
        retained.momoHiyori,
        retained.momoKaido,
      ],
    },
    {
      episode: 960,
      chapter: 960,
      value: [
        retained.momoKin,
        retained.momoLuffyAlly,
        retained.momoOden,
        retained.momoHiyori,
        retained.momoKaido,
      ],
    },
    {
      episode: 1006,
      chapter: 994,
      value: [
        retained.momoKin,
        retained.momoLuffyAlly,
        retained.momoOden,
        retained.momoHiyori,
        retained.momoYamato,
      ],
    },
    {
      episode: 1078,
      chapter: 1051,
      value: [
        retained.momoKin,
        retained.momoLuffyAlly,
        retained.momoOden,
        retained.momoHiyoriReunion,
        retained.momoYamato,
      ],
    },
    {
      episode: 1085,
      chapter: 1057,
      value: [
        retained.momoKin,
        retained.momoLuffyFriend,
        retained.momoOden,
        retained.momoHiyoriReunion,
        retained.momoYamato,
      ],
    },
  ],
  // Wedding with Sai is the chapter-881 cover, not episode 853: manga-only,
  // the anime keeps the engagement. The engagement is sourced.
  'baby-5': [
    { episode: 608, chapter: 682, value: [retained.babyDoffy] },
    {
      episode: 618,
      chapter: 692,
      value: [retained.babyDoffy, retained.babyBuffalo],
    },
    {
      episode: 710,
      chapter: 771,
      value: [
        retained.babySai,
        retained.babyBuffalo,
        retained.babyLao,
        retained.babyDoffy,
      ],
    },
    {
      episode: 853,
      chapter: 881,
      source: 'manga',
      value: [
        retained.babySaiHusband,
        retained.babyBuffalo,
        retained.babyLao,
        retained.babyDoffy,
      ],
    },
  ],
  'buffalo': [
    {
      episode: 618,
      chapter: 692,
      value: [retained.buffaloBaby, retained.buffaloDoffy],
    },
  ],
  // Her mother is told at 651/721 but Scarlett's manga endpoint is 742:
  // anime-only lists keep Scarlett, the manga 659/727 list omits her. Both
  // converge at the family revelation 675/742.
  'rebecca': [
    { episode: 634, chapter: 706, value: [retained.rebeccaLuffy] },
    {
      episode: 651,
      chapter: 721,
      source: 'anime',
      value: [
        retained.rebeccaScarlett,
        retained.rebeccaLuffy,
        retained.rebeccaDoffy,
      ],
    },
    {
      episode: 659,
      chapter: 727,
      source: 'anime',
      value: [
        retained.rebeccaScarlett,
        retained.rebeccaRiku,
        retained.rebeccaLuffy,
        retained.rebeccaDoffy,
      ],
    },
    {
      episode: 659,
      chapter: 727,
      source: 'manga',
      value: [
        retained.rebeccaRiku,
        retained.rebeccaLuffy,
        retained.rebeccaDoffy,
      ],
    },
    {
      episode: 675,
      chapter: 742,
      value: [
        retained.rebeccaKyros,
        retained.rebeccaScarlett,
        retained.rebeccaRiku,
        retained.rebeccaViola,
        retained.rebeccaLuffy,
      ],
    },
    {
      episode: 742,
      chapter: 797,
      value: [
        retained.rebeccaKyrosHome,
        retained.rebeccaScarlett,
        retained.rebeccaRiku,
        retained.rebeccaViola,
        retained.rebeccaLuffyFriend,
      ],
    },
  ],
  'issho': [
    { episode: 634, chapter: 706, value: [retained.isshoLuffy] },
    {
      episode: 644,
      chapter: 713,
      value: [retained.isshoLuffy, retained.isshoSakazuki, retained.isshoDoffy],
    },
    {
      episode: 736,
      chapter: 793,
      value: [
        retained.isshoRiku,
        retained.isshoLuffy,
        retained.isshoSakazukiDispute,
        retained.isshoDoffy,
      ],
    },
    {
      episode: 746,
      chapter: 801,
      value: [
        retained.isshoLuffyRespect,
        retained.isshoRiku,
        retained.isshoSakazukiDispute,
        retained.isshoDoffy,
      ],
    },
    {
      episode: 1119,
      chapter: 1085,
      value: [
        retained.isshoLuffyRespect,
        retained.isshoRiku,
        retained.isshoSakazukiDispute,
        retained.isshoAramaki,
        retained.isshoDoffy,
      ],
    },
  ],
  // The 1156/1126 stage reports his refusal to betray Luffy, not a death.
  'bartolomeo': [
    {
      episode: 635,
      chapter: 708,
      value: [retained.bartoGambia, retained.bartoMaynard],
    },
    {
      episode: 650,
      chapter: 720,
      value: [retained.bartoLuffy, retained.bartoGambia, retained.bartoMaynard],
    },
    {
      episode: 663,
      chapter: 731,
      value: [
        retained.bartoLuffy,
        retained.bartoGambia,
        retained.bartoBellamy,
        retained.bartoMaynard,
      ],
    },
    {
      episode: 713,
      chapter: 773,
      value: [
        retained.bartoLuffy,
        retained.bartoGambia,
        retained.bartoBellamy,
        retained.bartoCavendish,
        retained.bartoRobin,
      ],
    },
    {
      episode: 745,
      chapter: 800,
      value: [
        retained.bartoLuffyFleet,
        retained.bartoGambia,
        retained.bartoBellamy,
        retained.bartoCavendish,
        retained.bartoRobin,
      ],
    },
    {
      episode: 1156,
      chapter: 1126,
      value: [
        retained.bartoLuffyFleet,
        retained.bartoShanks,
        retained.bartoGambia,
        retained.bartoBellamy,
        retained.bartoCavendish,
      ],
    },
  ],
  'riku-doldo-iii': [
    {
      episode: 660,
      chapter: 728,
      value: [
        retained.rikuRebecca,
        retained.rikuViola,
        retained.rikuDoffy,
        retained.rikuTank,
        retained.rikuElizabello,
      ],
    },
    {
      episode: 675,
      chapter: 742,
      value: [
        retained.rikuRebecca,
        retained.rikuViola,
        retained.rikuScarlett,
        retained.rikuKyros,
        retained.rikuDoffy,
      ],
    },
    {
      episode: 736,
      chapter: 793,
      value: [
        retained.rikuRebecca,
        retained.rikuViola,
        retained.rikuScarlett,
        retained.rikuKyros,
        retained.rikuIssho,
      ],
    },
  ],
  'trebol': [
    { episode: 632, chapter: 708, value: [retained.trebolDoffy] },
    {
      episode: 663,
      chapter: 731,
      value: [retained.trebolDoffy, retained.trebolSugar],
    },
    {
      episode: 676,
      chapter: 742,
      value: [retained.trebolDoffy, retained.trebolSugar, retained.trebolUsopp],
    },
    {
      episode: 706,
      chapter: 767,
      value: [
        retained.trebolDoffyMentor,
        retained.trebolSugar,
        retained.trebolUsopp,
      ],
    },
    {
      episode: 724,
      chapter: 782,
      value: [
        retained.trebolDoffyMentor,
        retained.trebolSugar,
        retained.trebolLaw,
        retained.trebolUsopp,
      ],
    },
  ],
  // Hakuba is his alter ego, not a card; his horse Farul is not a record.
  'cavendish': [
    { episode: 637, chapter: 708, value: [retained.cavLuffyEnemy] },
    {
      episode: 654,
      chapter: 722,
      value: [retained.cavLuffyEnemy, retained.cavRebecca],
    },
    {
      episode: 684,
      chapter: 748,
      value: [retained.cavLuffyAlly, retained.cavUsopp, retained.cavRebecca],
    },
    {
      episode: 713,
      chapter: 773,
      value: [
        retained.cavLuffyAlly,
        retained.cavBarto,
        retained.cavUsopp,
        retained.cavRebecca,
      ],
    },
    {
      episode: 725,
      chapter: 783,
      value: [
        retained.cavLuffyAlly,
        retained.cavBarto,
        retained.cavLaw,
        retained.cavUsopp,
        retained.cavRebecca,
      ],
    },
    {
      episode: 745,
      chapter: 800,
      value: [
        retained.cavLuffyFleet,
        retained.cavSuleiman,
        retained.cavBarto,
        retained.cavLaw,
        retained.cavUsopp,
      ],
    },
  ],
  // Wedding with Baby 5 is manga-only (chapter-881 cover), the anime keeps the
  // engagement, so 1118/1084 is authored per source. The ex-fiancee Uholisia
  // is not a record.
  'sai': [
    {
      episode: 637,
      chapter: 708,
      value: [retained.saiChinjao, retained.saiBoo],
    },
    {
      episode: 710,
      chapter: 771,
      value: [
        retained.saiBaby,
        retained.saiChinjaoSuccessor,
        retained.saiBoo,
        retained.saiLao,
      ],
    },
    {
      episode: 745,
      chapter: 800,
      value: [
        retained.saiBaby,
        retained.saiChinjaoSuccessor,
        retained.saiBoo,
        retained.saiLuffy,
        retained.saiLao,
      ],
    },
    {
      episode: 853,
      chapter: 881,
      source: 'manga',
      value: [
        retained.saiBabyWife,
        retained.saiChinjaoSuccessor,
        retained.saiBoo,
        retained.saiLuffy,
        retained.saiLao,
      ],
    },
    {
      episode: 1118,
      chapter: 1084,
      source: 'anime',
      value: [
        retained.saiBaby,
        retained.saiChinjaoSuccessor,
        retained.saiBoo,
        retained.saiLuffy,
        retained.saiLeo,
      ],
    },
    {
      episode: 1118,
      chapter: 1084,
      source: 'manga',
      value: [
        retained.saiBabyWife,
        retained.saiChinjaoSuccessor,
        retained.saiBoo,
        retained.saiLuffy,
        retained.saiLeo,
      ],
    },
  ],
  'don-chinjao': [
    {
      episode: 646,
      chapter: 716,
      value: [
        retained.chinjaoSai,
        retained.chinjaoBoo,
        retained.chinjaoGarp,
        retained.chinjaoLuffyEnemy,
      ],
    },
    {
      episode: 650,
      chapter: 720,
      value: [
        retained.chinjaoSai,
        retained.chinjaoBoo,
        retained.chinjaoLuffyAlly,
        retained.chinjaoGarpPast,
      ],
    },
    {
      episode: 710,
      chapter: 771,
      value: [
        retained.chinjaoSaiHeir,
        retained.chinjaoBoo,
        retained.chinjaoLuffyAlly,
        retained.chinjaoGarpPast,
        retained.chinjaoLao,
      ],
    },
  ],
  'ideo': [
    { episode: 712, chapter: 772, value: [retained.ideoDellinger] },
    {
      episode: 745,
      chapter: 800,
      value: [
        retained.ideoLuffy,
        retained.ideoGilly,
        retained.ideoAbdullah,
        retained.ideoJeet,
        retained.ideoDellinger,
      ],
    },
  ],
  'blue-gilly': [
    { episode: 638, chapter: 709, value: [retained.gillyDagama] },
    {
      episode: 745,
      chapter: 800,
      value: [
        retained.gillyIdeo,
        retained.gillyAbdullah,
        retained.gillyJeet,
        retained.gillyDagama,
      ],
    },
  ],
  'elizabello-ii': [
    { episode: 636, chapter: 708, value: [retained.elizDagama] },
    {
      episode: 659,
      chapter: 727,
      value: [retained.elizRiku, retained.elizDagama],
    },
    {
      episode: 720,
      chapter: 779,
      value: [retained.elizRiku, retained.elizDagama, retained.elizZoro],
    },
  ],
  // Family and Road's friendship are checked against 1160/1130 and
  // 1167/1137, resentment updated at 1173/1143. Later reconciliation is out of
  // the archive.
  'hajrudin': [
    { episode: 644, chapter: 714, value: [retained.hajLuffyOpponent] },
    {
      episode: 678,
      chapter: 744,
      value: [retained.hajUsopp, retained.hajLuffyOpponent],
    },
    {
      episode: 709,
      chapter: 770,
      value: [
        retained.hajUsopp,
        retained.hajLuffyOpponent,
        retained.hajMachvise,
      ],
    },
    {
      episode: 745,
      chapter: 800,
      value: [retained.hajLuffy, retained.hajUsopp, retained.hajMachvise],
    },
    {
      episode: 1160,
      chapter: 1130,
      value: [retained.hajLuffy, retained.hajUsopp, retained.hajLoki],
    },
    {
      episode: 1167,
      chapter: 1137,
      value: [
        retained.hajLuffy,
        retained.hajHarald,
        retained.hajLoki,
        retained.hajRoad,
        retained.hajUsopp,
      ],
    },
    {
      episode: 1173,
      chapter: 1143,
      value: [
        retained.hajLuffy,
        retained.hajHarald,
        retained.hajLokiHostile,
        retained.hajRoad,
        retained.hajUsopp,
      ],
    },
  ],
  'bastille': [
    { episode: 647, chapter: 717, value: [retained.bastMaynard] },
    {
      episode: 687,
      chapter: 751,
      value: [retained.bastMaynard, retained.bastSabo],
    },
  ],
  'maynard': [
    { episode: 634, chapter: 708, value: [retained.mayGambia] },
    {
      episode: 635,
      chapter: 709,
      value: [retained.mayGambia, retained.mayBarto],
    },
    {
      episode: 647,
      chapter: 717,
      value: [retained.mayGambia, retained.mayBarto, retained.mayBast],
    },
    {
      episode: 682,
      chapter: 747,
      value: [
        retained.mayIssho,
        retained.mayBast,
        retained.mayBarto,
        retained.mayGambia,
      ],
    },
  ],
  'hack': [
    { episode: 636, chapter: 708, value: [retained.hackJinbe] },
    {
      episode: 669,
      chapter: 737,
      value: [retained.hackKoala, retained.hackJinbe],
    },
    {
      episode: 680,
      chapter: 745,
      value: [
        retained.hackKoala,
        retained.hackSabo,
        retained.hackRobin,
        retained.hackJinbe,
      ],
    },
  ],
  // No romance with Sanji is inferred.
  'viola': [
    { episode: 642, chapter: 712, value: [retained.violaSanji] },
    {
      episode: 660,
      chapter: 728,
      value: [retained.violaRiku, retained.violaDoffy, retained.violaSanji],
    },
    {
      episode: 674,
      chapter: 740,
      value: [
        retained.violaRiku,
        retained.violaRebecca,
        retained.violaDoffy,
        retained.violaSanji,
      ],
    },
    {
      episode: 675,
      chapter: 742,
      value: [
        retained.violaRiku,
        retained.violaRebecca,
        retained.violaScarlett,
        retained.violaKyros,
        retained.violaSanji,
      ],
    },
  ],
  // Sisters with Monet comes from SBS volume 77 (gate 775, episode 715
  // only orders). Her faint at 676/742 must not reveal the toys' restoration.
  'sugar': [
    {
      episode: 663,
      chapter: 731,
      value: [retained.sugarDoffy, retained.sugarTrebol],
    },
    {
      episode: 676,
      chapter: 742,
      value: [retained.sugarDoffy, retained.sugarTrebol, retained.sugarUsopp],
    },
    {
      episode: 715,
      chapter: 775,
      source: 'manga',
      value: [
        retained.sugarDoffy,
        retained.sugarTrebol,
        retained.sugarUsopp,
        retained.sugarMonet,
      ],
    },
  ],
  'diamante': [
    { episode: 633, chapter: 709, value: [retained.diamDoffy] },
    {
      episode: 672,
      chapter: 739,
      value: [retained.diamDoffy, retained.diamRebecca],
    },
    {
      episode: 676,
      chapter: 742,
      value: [retained.diamDoffy, retained.diamRebecca, retained.diamScarlett],
    },
    {
      episode: 717,
      chapter: 776,
      value: [
        retained.diamDoffy,
        retained.diamKyros,
        retained.diamRebecca,
        retained.diamScarlett,
      ],
    },
  ],
  'pica': [
    { episode: 652, chapter: 722, value: [retained.picaDoffy] },
    {
      episode: 685,
      chapter: 749,
      value: [retained.picaDoffy, retained.picaZoro],
    },
    {
      episode: 719,
      chapter: 778,
      value: [retained.picaDoffy, retained.picaZoroDefeat, retained.picaRiku],
    },
  ],
  // His wife Russian and son Gimlet are not records.
  'senor-pink': [
    { episode: 635, chapter: 711, value: [retained.pinkDoffy] },
    {
      episode: 716,
      chapter: 775,
      value: [retained.pinkFranky, retained.pinkDoffy],
    },
  ],
  // Jora raising him comes from SBS volume 76 (gate 763, episode 702
  // only orders); lists stay split by source.
  'dellinger': [
    { episode: 635, chapter: 711, value: [retained.dellDoffy] },
    {
      episode: 663,
      chapter: 731,
      value: [retained.dellDoffy, retained.dellBellamy, retained.dellBarto],
    },
    {
      episode: 702,
      chapter: 763,
      source: 'manga',
      value: [
        retained.dellDoffy,
        retained.dellJora,
        retained.dellBellamy,
        retained.dellBarto,
      ],
    },
    {
      episode: 712,
      chapter: 772,
      source: 'anime',
      value: [
        retained.dellDoffy,
        retained.dellBellamy,
        retained.dellBarto,
        retained.dellCav,
      ],
    },
    {
      episode: 712,
      chapter: 772,
      source: 'manga',
      value: [
        retained.dellDoffy,
        retained.dellJora,
        retained.dellBellamy,
        retained.dellBarto,
        retained.dellCav,
      ],
    },
  ],
  'lao-g': [
    { episode: 635, chapter: 711, value: [retained.laoDoffy] },
    {
      episode: 710,
      chapter: 771,
      value: [
        retained.laoDoffy,
        retained.laoSai,
        retained.laoBaby,
        retained.laoChinjao,
      ],
    },
  ],
  'machvise': [
    { episode: 635, chapter: 711, value: [retained.machDoffy] },
    {
      episode: 709,
      chapter: 770,
      value: [retained.machDoffy, retained.machHaj],
    },
  ],
  // Raising Dellinger comes from SBS volume 76, which ends at 763: manga-only
  // gate, episode 702 only orders. Later Jora/Dellinger lists stay split by
  // source to keep this link.
  'jora': [
    { episode: 654, chapter: 723, value: [retained.joraBrook] },
    {
      episode: 655,
      chapter: 724,
      value: [retained.joraDoffy, retained.joraBrook],
    },
    {
      episode: 702,
      chapter: 763,
      source: 'manga',
      value: [retained.joraDoffy, retained.joraDell, retained.joraBrook],
    },
    {
      episode: 714,
      chapter: 774,
      source: 'anime',
      value: [
        retained.joraDoffy,
        retained.joraMansherry,
        retained.joraLeo,
        retained.joraBrook,
      ],
    },
    {
      episode: 714,
      chapter: 774,
      source: 'manga',
      value: [
        retained.joraDoffy,
        retained.joraDell,
        retained.joraMansherry,
        retained.joraLeo,
        retained.joraBrook,
      ],
    },
  ],
  'orlumbus': [
    { episode: 719, chapter: 778, value: [retained.orZoro] },
    { episode: 745, chapter: 800, value: [retained.orLuffy, retained.orZoro] },
  ],
  'gladius': [
    {
      episode: 653,
      chapter: 723,
      value: [retained.glaDoffy, retained.glaViola],
    },
    {
      episode: 713,
      chapter: 773,
      value: [retained.glaDoffy, retained.glaViola, retained.glaBarto],
    },
  ],
  // No romance with Mansherry is inferred.
  'leo': [
    { episode: 647, chapter: 717, value: [retained.leoUsoppBelief] },
    {
      episode: 678,
      chapter: 743,
      value: [retained.leoUsopp, retained.leoKyros],
    },
    {
      episode: 693,
      chapter: 755,
      value: [retained.leoMansherry, retained.leoUsopp, retained.leoKyros],
    },
    {
      episode: 714,
      chapter: 774,
      value: [
        retained.leoMansherryFree,
        retained.leoUsopp,
        retained.leoKyros,
        retained.leoJora,
      ],
    },
    {
      episode: 745,
      chapter: 800,
      value: [
        retained.leoMansherryFree,
        retained.leoUsopp,
        retained.leoKyros,
        retained.leoLuffy,
        retained.leoJora,
      ],
    },
    {
      episode: 1118,
      chapter: 1084,
      value: [
        retained.leoMansherryFree,
        retained.leoUsopp,
        retained.leoKyros,
        retained.leoLuffy,
        retained.leoSai,
      ],
    },
  ],
  // Family opens at 675/742: references to him as a known person wait for
  // that endpoint, even though the toy soldier appears earlier unidentified.
  'kyros': [
    {
      episode: 675,
      chapter: 742,
      value: [
        retained.kyrosRebecca,
        retained.kyrosScarlett,
        retained.kyrosRiku,
        retained.kyrosViola,
      ],
    },
    {
      episode: 691,
      chapter: 753,
      value: [
        retained.kyrosRebecca,
        retained.kyrosScarlett,
        retained.kyrosRiku,
        retained.kyrosViola,
        retained.kyrosDiam,
      ],
    },
    {
      episode: 717,
      chapter: 776,
      value: [
        retained.kyrosRebecca,
        retained.kyrosScarlett,
        retained.kyrosRiku,
        retained.kyrosViola,
        retained.kyrosDiamDefeat,
      ],
    },
    {
      episode: 742,
      chapter: 797,
      value: [
        retained.kyrosRebeccaHome,
        retained.kyrosScarlett,
        retained.kyrosRiku,
        retained.kyrosViola,
        retained.kyrosLuffy,
      ],
    },
  ],
  // His final fire waits for 1055/1030, independent of the earlier apparent
  // defeat.
  'kanjuro': [
    { episode: 691, chapter: 755, value: [retained.kanKin] },
    { episode: 768, chapter: 817, value: [retained.kanKin, retained.kanMomo] },
    {
      episode: 962,
      chapter: 962,
      value: [retained.kanKin, retained.kanMomo, retained.kanOden],
    },
    {
      episode: 977,
      chapter: 974,
      value: [
        retained.kanOrochi,
        retained.kanKinBetrayed,
        retained.kanMomoCaptive,
        retained.kanOdenCover,
      ],
    },
    {
      episode: 993,
      chapter: 985,
      value: [
        retained.kanOrochi,
        retained.kanKinBetrayed,
        retained.kanMomoCaptive,
        retained.kanOdenCover,
        retained.kanKiku,
      ],
    },
    {
      episode: 1035,
      chapter: 1014,
      value: [
        retained.kanOrochi,
        retained.kanKinDefeat,
        retained.kanMomoCaptive,
        retained.kanOdenCover,
        retained.kanKiku,
      ],
    },
    {
      episode: 1055,
      chapter: 1030,
      value: [
        retained.kanOrochiFinal,
        retained.kanKinDefeat,
        retained.kanMomoCaptive,
        retained.kanOdenCover,
        retained.kanKiku,
      ],
    },
  ],
  // His 768 endpoint delays his earlier acts: Vergo's attack (705/766), the
  // Barrels theft (704/765) and his murder (706/767) all wait until 768.
  'donquixote-rosinante': [
    {
      episode: 706,
      chapter: 768,
      value: [
        retained.rosiLaw,
        retained.rosiDoffy,
        retained.rosiSengoku,
        retained.rosiHoming,
        retained.rosiVergo,
      ],
    },
    {
      episode: 743,
      chapter: 798,
      value: [
        retained.rosiLaw,
        retained.rosiDoffy,
        retained.rosiSengokuSon,
        retained.rosiHoming,
        retained.rosiVergo,
      ],
    },
  ],
  'kaido': [
    { episode: 739, chapter: 795, value: [retained.kaidoDoffy] },
    {
      episode: 916,
      chapter: 924,
      value: [retained.kaidoLuffy, retained.kaidoDoffy],
    },
    {
      episode: 955,
      chapter: 954,
      value: [retained.kaidoBigMom, retained.kaidoLuffy, retained.kaidoDoffy],
    },
    {
      episode: 972,
      chapter: 970,
      value: [
        retained.kaidoBigMom,
        retained.kaidoOden,
        retained.kaidoLuffy,
        retained.kaidoDoffy,
      ],
    },
    {
      episode: 992,
      chapter: 984,
      value: [
        retained.kaidoYamato,
        retained.kaidoBigMom,
        retained.kaidoOden,
        retained.kaidoLuffy,
        retained.kaidoDoffy,
      ],
    },
    {
      episode: 995,
      chapter: 985,
      value: [
        retained.kaidoYamato,
        retained.kaidoBigMom,
        retained.kaidoOrochi,
        retained.kaidoOden,
        retained.kaidoLuffy,
      ],
    },
    {
      episode: 1062,
      chapter: 1035,
      value: [
        retained.kaidoLuffy,
        retained.kaidoYamato,
        retained.kaidoBigMom,
        retained.kaidoOden,
        retained.kaidoKing,
      ],
    },
    {
      episode: 1076,
      chapter: 1049,
      value: [
        retained.kaidoLuffyDefeat,
        retained.kaidoYamato,
        retained.kaidoBigMom,
        retained.kaidoOden,
        retained.kaidoKing,
      ],
    },
  ],
  'mocha': [
    {
      episode: 591,
      chapter: 665,
      value: [retained.mochaNami, retained.mochaChopper],
    },
    {
      episode: 614,
      chapter: 688,
      value: [
        retained.mochaChopperPromise,
        retained.mochaNami,
        retained.mochaCaesar,
      ],
    },
  ],
  // Grouped record, kept as a single character endpoint.
  'rock-and-scotch': [
    {
      episode: 592,
      chapter: 666,
      value: [retained.broCaesar, retained.broBrown],
    },
    {
      episode: 593,
      chapter: 667,
      value: [retained.broCaesar, retained.broBrown, retained.broLuffy],
    },
  ],
  'smiley': [
    { episode: 595, chapter: 673, value: [retained.smileyCaesar] },
    { episode: 602, chapter: 676, value: [retained.smileyCaesarWeapon] },
  ],
  'spartan': [{ episode: 633, chapter: 704, value: [retained.spartanLuffy] }],
  'kelly-funk': [
    { episode: 633, chapter: 704, value: [retained.kellyBobby] },
    {
      episode: 646,
      chapter: 716,
      value: [retained.kellyBobbyPower, retained.kellySai],
    },
    {
      episode: 689,
      chapter: 752,
      value: [retained.kellyBobbyPower, retained.kellySai, retained.kellyLuffy],
    },
  ],
  'bobby-funk': [
    { episode: 633, chapter: 704, value: [retained.bobbyKelly] },
    {
      episode: 646,
      chapter: 716,
      value: [retained.bobbyKellyPower, retained.bobbySai],
    },
  ],
  'dagama': [
    { episode: 636, chapter: 708, value: [retained.dagEliz] },
    {
      episode: 638,
      chapter: 709,
      value: [retained.dagEliz, retained.dagGilly],
    },
    {
      episode: 691,
      chapter: 753,
      value: [retained.dagEliz, retained.dagLuffy, retained.dagGilly],
    },
  ],
  'suleiman': [{ episode: 744, chapter: 799, value: [retained.sulCav] }],
  'abdullah': [
    { episode: 633, chapter: 704, value: [retained.abdJeet] },
    {
      episode: 689,
      chapter: 752,
      value: [retained.abdJeet, retained.abdLuffy],
    },
    {
      episode: 745,
      chapter: 800,
      value: [
        retained.abdJeet,
        retained.abdIdeo,
        retained.abdGilly,
        retained.abdLuffy,
      ],
    },
  ],
  'jeet': [
    { episode: 633, chapter: 704, value: [retained.jeetAbd] },
    {
      episode: 689,
      chapter: 752,
      value: [retained.jeetAbd, retained.jeetLuffy],
    },
    {
      episode: 745,
      chapter: 800,
      value: [
        retained.jeetAbd,
        retained.jeetIdeo,
        retained.jeetGilly,
        retained.jeetLuffy,
      ],
    },
  ],
  'boo': [
    {
      episode: 637,
      chapter: 708,
      value: [retained.booSai, retained.booChinjao],
    },
    {
      episode: 645,
      chapter: 715,
      value: [
        retained.booSai,
        retained.booChinjao,
        retained.booKelly,
        retained.booBobby,
      ],
    },
  ],
  'gambia': [
    {
      episode: 635,
      chapter: 708,
      value: [retained.gambiaBarto, retained.gambiaMaynard],
    },
  ],
  'tank-lepanto': [
    { episode: 659, chapter: 727, value: [retained.tankRiku] },
    {
      episode: 660,
      chapter: 728,
      value: [retained.tankRiku, retained.tankViola],
    },
  ],
  'gatz': [{ episode: 729, chapter: 787, value: [retained.gatzLuffy] }],
  'wicca': [
    { episode: 640, chapter: 711, value: [retained.wiccaZoro] },
    {
      episode: 667,
      chapter: 735,
      value: [retained.wiccaZoro, retained.wiccaViola],
    },
  ],
  'ucy': [{ episode: 644, chapter: 714, value: [retained.ucyLuffy] }],
  'jean-ango': [
    {
      episode: 646,
      chapter: 716,
      value: [retained.jeanLuffy, retained.jeanChinjao],
    },
  ],
  // Her lists wait behind her endpoint and the anime's later flashback;
  // anime chapter numbers are ordering references, not extra manga events.
  'scarlett': [
    {
      episode: 651,
      chapter: 742,
      source: 'anime',
      value: [retained.scarRebecca],
    },
    {
      episode: 675,
      chapter: 742,
      source: 'anime',
      value: [
        retained.scarRebecca,
        retained.scarKyros,
        retained.scarRiku,
        retained.scarViola,
      ],
    },
    {
      episode: 676,
      chapter: 743,
      source: 'anime',
      value: [
        retained.scarRebecca,
        retained.scarKyros,
        retained.scarRiku,
        retained.scarViola,
        retained.scarDiam,
      ],
    },
    {
      episode: 675,
      chapter: 742,
      source: 'manga',
      value: [
        retained.scarRebecca,
        retained.scarKyros,
        retained.scarRiku,
        retained.scarViola,
        retained.scarDiam,
      ],
    },
  ],
  'kyuin': [{ episode: 693, chapter: 755, value: [retained.kyuinFranky] }],
  'trafalgar-lami': [{ episode: 701, chapter: 762, value: [retained.lamiLaw] }],
  'donquixote-homing': [
    { episode: 702, chapter: 763, value: [retained.homDoffy] },
    {
      episode: 706,
      chapter: 768,
      value: [retained.homDoffyKiller, retained.homRosi],
    },
  ],
  'diez-barrels': [
    {
      episode: 706,
      chapter: 768,
      value: [retained.barrelsDoffy, retained.barrelsRosi],
    },
    {
      episode: 736,
      chapter: 793,
      value: [
        retained.barrelsDrake,
        retained.barrelsDoffy,
        retained.barrelsRosi,
      ],
    },
  ],
} satisfies Record<string, Timeline<Relationship[]>>
