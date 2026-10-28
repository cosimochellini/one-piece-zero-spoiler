import type { Relationship, Timeline } from '~/data/types'

/** Original IT/EN wording; verified revisions are pinned in the provenance manifest. */
const links = {
  brookLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Captain who invites him', it: 'Capitano che lo invita' },
    summary: {
      en: 'Luffy invites Brook to join his crew when they meet in the Florian Triangle.',
      it: 'Rufy invita Brook a unirsi alla sua ciurma quando lo incontra nel Triangolo Florian.',
    },
  },
  brookLaboon: {
    character: 'laboon',
    type: {
      en: 'Friend he promised to return to',
      it: 'Amico da cui promette di tornare',
    },
    summary: {
      en: 'Brook keeps his promise to return to Laboon, the whale his old crew left at Twin Cape.',
      it: 'Brook mantiene la promessa di tornare da Lovoon, la balena che la sua vecchia ciurma ha lasciato al Promontorio Futago.',
    },
  },
  brookLaboonAlive: {
    character: 'laboon',
    type: { en: 'Friend waiting for him', it: 'Amico che lo aspetta' },
    summary: {
      en: 'Luffy tells Brook that Laboon is alive and still waiting at Twin Cape. Brook wants to return to him.',
      it: 'Rufy racconta a Brook che Lovoon è vivo e lo aspetta ancora al Promontorio Futago. Brook vuole tornare da lui.',
    },
  },
  brookYorki: {
    character: 'yorki',
    type: { en: 'Former captain', it: 'Ex capitano' },
    summary: {
      en: 'Yorki leaves the healthy members of his crew behind when he falls ill. Brook plays their favorite song as they part.',
      it: 'Yooki lascia i compagni sani quando si ammala. Brook suona la loro canzone preferita mentre si separano.',
    },
  },
  brookRyuma: {
    character: 'ryuma',
    type: {
      en: 'Zombie carrying his shadow',
      it: 'Zombie che porta la sua ombra',
    },
    summary: {
      en: 'Ryuma carries Brook’s stolen shadow. Brook seeks to defeat him and recover it.',
      it: 'Ryuma porta l’ombra rubata a Brook. Brook cerca di sconfiggerlo per recuperarla.',
    },
  },
  brookRyumaDefeated: {
    character: 'ryuma',
    type: {
      en: 'Defeated bearer of his shadow',
      it: 'Portatore sconfitto della sua ombra',
    },
    summary: {
      en: 'Ryuma’s defeat releases Brook’s shadow, allowing Brook to stand in sunlight again.',
      it: 'La sconfitta di Ryuma libera l’ombra di Brook, che può tornare alla luce del sole.',
    },
  },
  brookZoro: {
    character: 'roronoa-zoro',
    type: {
      en: 'Swordsman who recovers his shadow',
      it: 'Spadaccino che recupera la sua ombra',
    },
    summary: {
      en: 'Zoro defeats Ryuma and frees the shadow stolen from Brook.',
      it: 'Zoro sconfigge Ryuma e libera l’ombra rubata a Brook.',
    },
  },
  brookCaptain: {
    character: 'monkey-d-luffy',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Brook joins Luffy’s crew as its musician and continues his journey toward Laboon with them.',
      it: 'Brook si unisce alla ciurma di Rufy come musicista e riprende con loro il viaggio verso Lovoon.',
    },
  },
  peronaKumashi: {
    character: 'kumashi',
    type: { en: 'Servant', it: 'Servitore' },
    summary: {
      en: 'Perona gives Kumashi orders but scolds him whenever he speaks.',
      it: 'Perona dà ordini a Kumacy ma lo sgrida ogni volta che parla.',
    },
  },
  peronaMoria: {
    character: 'gecko-moria',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Perona commands the wild zombies in Moria’s crew.',
      it: 'Perona comanda gli zombie selvatici nella ciurma di Moria.',
    },
  },
  peronaUsopp: {
    character: 'usopp',
    type: { en: 'Opponent who defeats her', it: 'Avversario che la sconfigge' },
    summary: {
      en: 'Usopp withstands Perona’s negative ghosts and defeats her by frightening her.',
      it: 'Usop resiste ai fantasmi negativi di Perona e la sconfigge spaventandola.',
    },
  },
  lolaAbsalom: {
    character: 'absalom',
    type: {
      en: 'Unrequited love of the zombie bride',
      it: 'Amore non ricambiato della sposa zombie',
    },
    summary: {
      en: 'The zombie bride Lola pursues Absalom and wants to marry him. He rejects her advances.',
      it: 'La sposa zombie Laura insegue Absalom e vuole sposarlo. Lui respinge le sue proposte.',
    },
  },
  lolaNami: {
    character: 'nami',
    type: { en: 'Friend of the zombie bride', it: 'Amica della sposa zombie' },
    summary: {
      en: 'The zombie bride befriends Nami after Nami supports her wish to marry Absalom.',
      it: 'La sposa zombie fa amicizia con Nami quando Nami sostiene il suo desiderio di sposare Absalom.',
    },
  },
  lolaNamiProtected: {
    character: 'nami',
    type: {
      en: 'Friend the zombie bride protects',
      it: 'Amica protetta dalla sposa zombie',
    },
    summary: {
      en: 'The zombie bride pretends to attack Nami to help her escape Absalom’s forced wedding.',
      it: 'La sposa zombie finge di attaccare Nami per aiutarla a sfuggire alle nozze imposte da Absalom.',
    },
  },
  lolaHumanNami: {
    character: 'nami',
    type: {
      en: 'Friend of the human captain',
      it: 'Amica della capitana umana',
    },
    summary: {
      en: 'After recovering her shadow from the zombie bride, the human captain Lola recognizes Nami and feels that they have met before.',
      it: 'Recuperata l’ombra dalla sposa zombie, la capitana umana Laura riconosce Nami e ha l’impressione di averla già incontrata.',
    },
  },
  lolaHumanNamiCard: {
    character: 'nami',
    type: {
      en: 'Friend of the human captain',
      it: 'Amica della capitana umana',
    },
    summary: {
      en: 'The human captain Lola gives Nami a Vivre Card leading to her mother, believing that it will help Nami in the New World.',
      it: 'La capitana umana Laura dà a Nami una Vivre Card che conduce da sua madre, convinta che le sarà utile nel Nuovo Mondo.',
    },
  },
  moriaHogback: {
    character: 'hogback',
    type: { en: 'Surgeon in his service', it: 'Chirurgo al suo servizio' },
    summary: {
      en: 'Hogback prepares the corpses that Moria animates with stolen shadows.',
      it: 'Hogback prepara i cadaveri che Moria anima con le ombre rubate.',
    },
  },
  moriaPerona: {
    character: 'perona',
    type: { en: 'Officer', it: 'Ufficiale' },
    summary: {
      en: 'Perona serves Moria and commands his wild zombies.',
      it: 'Perona serve Moria e comanda i suoi zombie selvatici.',
    },
  },
  moriaAbsalom: {
    character: 'absalom',
    type: { en: 'Officer', it: 'Ufficiale' },
    summary: {
      en: 'Absalom serves Moria and commands the soldier and general zombies.',
      it: 'Absalom serve Moria e comanda gli zombie soldati e generali.',
    },
  },
  moriaLuffy: {
    character: 'monkey-d-luffy',
    type: {
      en: 'Pirate whose shadow he steals',
      it: 'Pirata a cui ruba l’ombra',
    },
    summary: {
      en: 'Moria steals Luffy’s shadow to animate his strongest zombie.',
      it: 'Moria ruba l’ombra di Rufy per animare il suo zombie più forte.',
    },
  },
  moriaOars: {
    character: 'oars',
    type: { en: 'Zombie weapon', it: 'Arma zombie' },
    summary: {
      en: 'Moria uses Luffy’s shadow to animate Oars and turn the giant corpse into a weapon.',
      it: 'Moria usa l’ombra di Rufy per animare Ozu e trasformare il cadavere gigante in un’arma.',
    },
  },
  moriaLuffyDefeat: {
    character: 'monkey-d-luffy',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Luffy defeats Moria, forcing him to release the shadows stolen from Thriller Bark’s victims.',
      it: 'Rufy sconfigge Moria e lo costringe a liberare le ombre rubate alle vittime di Thriller Bark.',
    },
  },
  moriaAbsalomRescue: {
    character: 'absalom',
    type: {
      en: 'Officer who helps him escape',
      it: 'Ufficiale che lo porta in salvo',
    },
    summary: {
      en: 'Absalom and Hogback escape Thriller Bark with the unconscious Moria.',
      it: 'Absalom e Hogback fuggono da Thriller Bark portando con loro Moria privo di sensi.',
    },
  },
  absalomMoria: {
    character: 'gecko-moria',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Absalom commands zombies for Moria and reports to him on Thriller Bark.',
      it: 'Absalom comanda gli zombie di Moria e gli riferisce quanto accade a Thriller Bark.',
    },
  },
  absalomNami: {
    character: 'nami',
    type: {
      en: 'Woman he tries to force into marriage',
      it: 'Donna che vuole costringere a sposarlo',
    },
    summary: {
      en: 'Absalom abducts Nami and tries to marry her against her will.',
      it: 'Absalom rapisce Nami e cerca di sposarla contro la sua volontà.',
    },
  },
  absalomSanji: {
    character: 'sanji',
    type: {
      en: 'Opponent protecting Nami',
      it: 'Avversario che protegge Nami',
    },
    summary: {
      en: 'Sanji fights Absalom to stop him from forcing Nami into marriage.',
      it: 'Sanji combatte Absalom per impedirgli di costringere Nami a sposarlo.',
    },
  },
  absalomHogback: {
    character: 'hogback',
    type: {
      en: 'Surgeon who altered his body',
      it: 'Chirurgo che ha modificato il suo corpo',
    },
    summary: {
      en: 'Hogback gives Absalom animal body parts that increase his strength.',
      it: 'Hogback innesta nel corpo di Absalom parti animali che ne aumentano la forza.',
    },
  },
  absalomNamiDefeat: {
    character: 'nami',
    type: { en: 'Woman who defeats him', it: 'Donna che lo sconfigge' },
    summary: {
      en: 'Nami defeats Absalom when he tries to force her into marriage again.',
      it: 'Nami sconfigge Absalom quando lui cerca di nuovo di costringerla a sposarlo.',
    },
  },
  absalomMoriaRescue: {
    character: 'gecko-moria',
    type: {
      en: 'Captain he helps rescue',
      it: 'Capitano che contribuisce a salvare',
    },
    summary: {
      en: 'Absalom escapes Thriller Bark with Hogback and the unconscious Moria.',
      it: 'Absalom fugge da Thriller Bark con Hogback e Moria privo di sensi.',
    },
  },
  hogbackCindry: {
    character: 'victoria-cindry',
    type: { en: 'Zombie servant', it: 'Servitrice zombie' },
    summary: {
      en: 'The zombie Cindry serves Hogback in his mansion.',
      it: 'La zombie Cindry serve Hogback nella sua villa.',
    },
  },
  hogbackCindryPast: {
    character: 'victoria-cindry',
    type: {
      en: 'Actress whose corpse he exploits',
      it: 'Attrice di cui sfrutta il cadavere',
    },
    summary: {
      en: 'After Cindry rejects him and later dies, Hogback steals her corpse and has Moria animate it as his servant.',
      it: 'Dopo il rifiuto di Cindry e la sua successiva morte, Hogback ne ruba il cadavere e lo fa animare da Moria per usarlo come servitrice.',
    },
  },
  hogbackCindryRefusal: {
    character: 'victoria-cindry',
    type: {
      en: 'Servant who refuses his order',
      it: 'Servitrice che rifiuta un suo ordine',
    },
    summary: {
      en: 'The zombie Cindry stops obeying Hogback and refuses to rescue him.',
      it: 'La zombie Cindry smette di obbedire a Hogback e rifiuta di soccorrerlo.',
    },
  },
  hogbackMoria: {
    character: 'gecko-moria',
    type: { en: 'Captain and collaborator', it: 'Capitano e collaboratore' },
    summary: {
      en: 'Hogback prepares corpses for Moria to animate with stolen shadows.',
      it: 'Hogback prepara i cadaveri che Moria anima con le ombre rubate.',
    },
  },
  hogbackChopper: {
    character: 'tony-tony-chopper',
    type: {
      en: 'Doctor who opposes his experiments',
      it: 'Medico che si oppone ai suoi esperimenti',
    },
    summary: {
      en: 'Chopper rejects Hogback’s treatment of the dead and confronts him in his laboratory.',
      it: 'Chopper rifiuta il modo in cui Hogback tratta i morti e lo affronta nel suo laboratorio.',
    },
  },
  cindryHogback: {
    character: 'hogback',
    type: {
      en: 'Master of her zombie body',
      it: 'Padrone del suo corpo zombie',
    },
    summary: {
      en: 'Cindry’s zombie body works as Hogback’s servant.',
      it: 'Il corpo zombie di Cindry lavora come servitrice di Hogback.',
    },
  },
  cindryHogbackPast: {
    character: 'hogback',
    type: {
      en: 'Man who stole her corpse',
      it: 'Uomo che ha rubato il suo cadavere',
    },
    summary: {
      en: 'Cindry rejected Hogback while alive. After her death he stole her corpse and made it his servant.',
      it: 'Da viva Cindry ha respinto Hogback. Dopo la sua morte lui ne ha rubato il cadavere e lo ha reso suo servitore.',
    },
  },
  cindryChopper: {
    character: 'tony-tony-chopper',
    type: {
      en: 'Doctor who defends her humanity',
      it: 'Medico che difende la sua umanità',
    },
    summary: {
      en: 'Chopper challenges Hogback’s treatment of Cindry and appeals to the humanity of the woman she was.',
      it: 'Chopper contesta il trattamento riservato a Cindry da Hogback e si rivolge all’umanità della donna che era.',
    },
  },
  cindryRefusal: {
    character: 'hogback',
    type: {
      en: 'Master she stops obeying',
      it: 'Padrone a cui smette di obbedire',
    },
    summary: {
      en: 'Cindry’s zombie body refuses Hogback’s order to help him and smiles.',
      it: 'Il corpo zombie di Cindry rifiuta l’ordine di Hogback di aiutarlo e sorride.',
    },
  },
  ryumaBrook: {
    character: 'brook',
    type: {
      en: 'Owner of the shadow animating him',
      it: 'Proprietario dell’ombra che lo anima',
    },
    summary: {
      en: 'The zombie Ryuma is animated by Brook’s stolen shadow and uses his sword techniques.',
      it: 'Lo zombie Ryuma è animato dall’ombra rubata a Brook e usa le sue tecniche di spada.',
    },
  },
  ryumaZoro: {
    character: 'roronoa-zoro',
    type: {
      en: 'Swordsman who defeats him',
      it: 'Spadaccino che lo sconfigge',
    },
    summary: {
      en: 'Zoro defeats the zombie Ryuma, who gives him Shusui before his body burns and Brook’s shadow returns.',
      it: 'Zoro sconfigge lo zombie Ryuma, che gli consegna Shusui prima che il suo corpo bruci e l’ombra torni a Brook.',
    },
  },
  oarsLuffy: {
    character: 'monkey-d-luffy',
    type: {
      en: 'Owner of the shadow animating him',
      it: 'Proprietario dell’ombra che lo anima',
    },
    summary: {
      en: 'Moria animates Oars’s corpse with Luffy’s stolen shadow, giving the zombie Luffy’s mannerisms and fighting moves.',
      it: 'Moria anima il cadavere di Ozu con l’ombra rubata a Rufy, dando allo zombie i suoi modi di fare e le sue mosse.',
    },
  },
  oarsMoria: {
    character: 'gecko-moria',
    type: {
      en: 'Master controlling his body',
      it: 'Padrone che controlla il suo corpo',
    },
    summary: {
      en: 'Moria commands the zombie Oars and uses his body to fight the Straw Hats.',
      it: 'Moria comanda lo zombie Ozu e ne usa il corpo per combattere i Cappello di Paglia.',
    },
  },
  yorkiBrook: {
    character: 'brook',
    type: { en: 'Musician he leaves behind', it: 'Musicista da cui si separa' },
    summary: {
      en: 'When Yorki falls ill, he leaves the healthy crew members behind and asks Brook to play their favorite song as they part.',
      it: 'Quando si ammala, Yooki si separa dai compagni sani e chiede a Brook di suonare la loro canzone preferita.',
    },
  },
  yorkiLaboon: {
    character: 'laboon',
    type: {
      en: 'Whale he promises to return to',
      it: 'Balena da cui promette di tornare',
    },
    summary: {
      en: 'Yorki’s crew leaves Laboon with Crocus at Twin Cape and promises to return.',
      it: 'La ciurma di Yooki lascia Lovoon con Crocus al Promontorio Futago e promette di tornare.',
    },
  },
  hildonChopper: {
    character: 'tony-tony-chopper',
    type: { en: 'Visitor he deceives', it: 'Visitatore che inganna' },
    summary: {
      en: 'Hildon offers Chopper and his companions a carriage ride to a doctor’s mansion, then abandons them in the graveyard.',
      it: 'Hildon offre a Chopper e ai suoi compagni un passaggio in carrozza fino alla villa di un medico, poi li abbandona nel cimitero.',
    },
  },
  hildonMoria: {
    character: 'gecko-moria',
    type: { en: 'Master', it: 'Padrone' },
    summary: {
      en: 'Hildon carries Moria’s summons to his officers and reports on the intruders.',
      it: 'Hildon porta agli ufficiali la convocazione di Moria e riferisce sugli intrusi.',
    },
  },
  cerberusLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Pirate who tames it', it: 'Pirata che lo doma' },
    summary: {
      en: 'Luffy overpowers Cerberus and makes it carry him through Thriller Bark.',
      it: 'Rufy sopraffà Cerbero e si fa trasportare attraverso Thriller Bark.',
    },
  },
  kumashiPerona: {
    character: 'perona',
    type: { en: 'Mistress', it: 'Padrona' },
    summary: {
      en: 'Kumashi follows Perona’s orders even though she scolds him for speaking.',
      it: 'Kumacy esegue gli ordini di Perona anche se lei lo sgrida quando parla.',
    },
  },
  kumashiUsopp: {
    character: 'usopp',
    type: { en: 'Opponent who purifies him', it: 'Avversario che lo purifica' },
    summary: {
      en: 'Kumashi attacks Usopp while defending Perona. Usopp defeats him by shooting salt into his mouth.',
      it: 'Kumacy attacca Usop per difendere Perona. Usop lo sconfigge sparandogli del sale in bocca.',
    },
  },
  johnAbsalom: {
    character: 'absalom',
    type: {
      en: 'Commander of his zombie body',
      it: 'Comandante del suo corpo zombie',
    },
    summary: {
      en: 'Absalom summons the zombie John with the other general zombies for the night attack.',
      it: 'Absalom convoca lo zombie John insieme agli altri generali zombie per la caccia notturna.',
    },
  },
  jigoroZoro: {
    character: 'roronoa-zoro',
    type: {
      en: 'Owner of the shadow animating him',
      it: 'Proprietario dell’ombra che lo anima',
    },
    summary: {
      en: 'The zombie Jigoro carries Zoro’s stolen shadow and reproduces his sword techniques.',
      it: 'Lo zombie Jigoro porta l’ombra rubata a Zoro e ne riproduce le tecniche di spada.',
    },
  },
  jigoroHogback: {
    character: 'hogback',
    type: { en: 'Master he guards', it: 'Padrone che protegge' },
    summary: {
      en: 'Jigoro obeys Hogback’s orders and guards him against Chopper and Robin.',
      it: 'Jigoro obbedisce agli ordini di Hogback e lo protegge da Chopper e Robin.',
    },
  },
  tararanBrook: {
    character: 'brook',
    type: {
      en: 'Swordsman who purifies him',
      it: 'Spadaccino che lo purifica',
    },
    summary: {
      en: 'Brook cuts down Tararan and releases the shadow animating his zombie body.',
      it: 'Brook abbatte Tararan e libera l’ombra che anima il suo corpo zombie.',
    },
  },
  tararanFranky: {
    character: 'franky',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Tararan fights Franky on the mansion’s bridge and traps him with his spider mice.',
      it: 'Tararan combatte Franky sul ponte della villa e lo immobilizza con i suoi topi-ragno.',
    },
  },
  trioMoria: {
    character: 'gecko-moria',
    type: { en: 'Master', it: 'Padrone' },
    summary: {
      en: 'Gyoro, Nin and Bao wake Moria, deliver reports and open the way to his special freezer on his orders.',
      it: 'Gyoro, Nin e Bao svegliano Moria, gli portano notizie e aprono il suo congelatore speciale su suo ordine.',
    },
  },
  riskyLola: {
    character: 'lola',
    type: { en: 'Human captain', it: 'Capitana umana' },
    summary: {
      en: 'The Risky Brothers serve the human captain Lola and help her fight for the return of their stolen shadows.',
      it: 'I fratelli Risky seguono la capitana umana Laura e la aiutano a lottare per recuperare le ombre rubate.',
    },
  },
  riskyLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Pirate they empower', it: 'Pirata a cui danno forza' },
    summary: {
      en: 'The Risky Brothers help put captured shadows into Luffy so he can fight Moria and Oars.',
      it: 'I fratelli Risky aiutano a inserire le ombre catturate in Rufy perché possa combattere Moria e Ozu.',
    },
  },
  spoilMoria: {
    character: 'gecko-moria',
    type: {
      en: 'Pirate who stole his shadow',
      it: 'Pirata che gli ha rubato l’ombra',
    },
    summary: {
      en: 'Spoil is one of the victims whose shadows Moria stole on Thriller Bark.',
      it: 'Spoil è una delle vittime a cui Moria ha rubato l’ombra a Thriller Bark.',
    },
  },
  spoilLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Pirate he thanks', it: 'Pirata che ringrazia' },
    summary: {
      en: 'Spoil thanks Luffy and his crew after Moria’s defeat restores the victims’ shadows.',
      it: 'Spoil ringrazia Rufy e la sua ciurma dopo che la sconfitta di Moria restituisce le ombre alle vittime.',
    },
  },
  brookMom: {
    character: 'charlotte-linlin',
    type: { en: 'Opponent', it: 'Avversaria' },
    summary: {
      en: 'Brook fights Big Mom while trying to copy her Poneglyphs for his captain.',
      it: 'Brook affronta Big Mom mentre cerca di copiare i suoi Poneglyph per il suo capitano.',
    },
  },
  brookMomCopies: {
    character: 'charlotte-linlin',
    type: { en: 'Opponent he outwits', it: 'Avversaria che inganna' },
    summary: {
      en: 'Big Mom captures Brook, but he leaves with Poneglyph copies hidden inside his skull.',
      it: 'Big Mom cattura Brook, ma lui riesce a portare via le copie dei Poneglyph nascoste nel cranio.',
    },
  },
  brookRobin: {
    character: 'nico-robin',
    type: { en: 'Battle partner', it: 'Compagna di battaglia' },
    summary: {
      en: 'Brook handles Black Maria’s subordinates and trusts Robin to fight their leader.',
      it: 'Brook affronta i sottoposti di Black Maria e lascia a Robin lo scontro con la loro comandante.',
    },
  },
  brookRobinHelp: {
    character: 'nico-robin',
    type: {
      en: 'Battle partner he supports',
      it: 'Compagna di battaglia che sostiene',
    },
    summary: {
      en: 'Brook defeats Black Maria’s remaining subordinates and supports Robin after her exhausting battle.',
      it: 'Brook sconfigge i sottoposti rimasti di Black Maria e sostiene Robin dopo la battaglia che l’ha sfinita.',
    },
  },
  brookRobinFlight: {
    character: 'nico-robin',
    type: {
      en: 'Crewmate he helps escape',
      it: 'Compagna che aiuta a fuggire',
    },
    summary: {
      en: 'Brook carries Robin away while CP0 agents pursue them on Onigashima.',
      it: 'Brook porta via Robin mentre gli agenti del CP0 li inseguono a Onigashima.',
    },
  },
  brookRobinProtect: {
    character: 'nico-robin',
    type: { en: 'Crewmate he protects', it: 'Compagna che protegge' },
    summary: {
      en: 'Brook helps the others protect Robin when Saturn attacks her on Egghead.',
      it: 'Brook aiuta gli altri a proteggere Robin quando Saturn la attacca a Egghead.',
    },
  },
  peronaZoro: {
    character: 'roronoa-zoro',
    type: { en: 'Injured pirate she treats', it: 'Pirata ferito che cura' },
    summary: {
      en: 'Perona bandages Zoro’s injuries after Kuma sends him to Kuraigana Island.',
      it: 'Perona medica le ferite di Zoro dopo che Orso lo ha mandato sull’isola di Kuraigana.',
    },
  },
  peronaMihawk: {
    character: 'dracule-mihawk',
    type: { en: 'Her host', it: 'Chi la ospita' },
    summary: {
      en: 'Perona stays in Mihawk’s castle on Kuraigana Island.',
      it: 'Perona vive nel castello di Mihawk sull’isola di Kuraigana.',
    },
  },
  peronaZoroAid: {
    character: 'roronoa-zoro',
    type: {
      en: 'Pirate she helps rejoin his crew',
      it: 'Pirata che aiuta a ritrovare la ciurma',
    },
    summary: {
      en: 'Perona brings Zoro to Sabaody and holds back the Marines while his crew leaves.',
      it: 'Perona accompagna Zoro a Sabaody e trattiene i Marine mentre la sua ciurma riparte.',
    },
  },
  peronaMoriaSearch: {
    character: 'gecko-moria',
    type: {
      en: 'Captain she sets out to find',
      it: 'Capitano che parte a cercare',
    },
    summary: {
      en: 'When Perona learns that Moria is alive, she leaves Kuraigana to look for him.',
      it: 'Quando scopre che Moria è vivo, Perona lascia Kuraigana per cercarlo.',
    },
  },
  peronaMihawkFarewell: {
    character: 'dracule-mihawk',
    type: { en: 'Former host', it: 'Chi l’ha ospitata' },
    summary: {
      en: 'Perona leaves Mihawk’s castle after learning that Moria is alive.',
      it: 'Perona lascia il castello di Mihawk dopo aver scoperto che Moria è vivo.',
    },
  },
  peronaKoby: {
    character: 'koby',
    type: { en: 'Rescue ally', it: 'Alleato per il salvataggio' },
    summary: {
      en: 'Perona releases Koby from prison on condition that he helps free Moria.',
      it: 'Perona libera Koby dalla prigione a condizione che la aiuti a liberare Moria.',
    },
  },
  peronaMoriaPrison: {
    character: 'gecko-moria',
    type: {
      en: 'Captain she tries to free',
      it: 'Capitano che cerca di liberare',
    },
    summary: {
      en: 'Perona infiltrates Hachinosu and seeks Koby’s help to free the imprisoned Moria.',
      it: 'Perona si infiltra a Hachinosu e cerca l’aiuto di Koby per liberare Moria dalla prigione.',
    },
  },
  peronaMoriaFree: {
    character: 'gecko-moria',
    type: {
      en: 'Captain whose escape is confirmed',
      it: 'Capitano di cui viene confermata la fuga',
    },
    summary: {
      en: 'Moria’s escape from Hachinosu is confirmed after Perona sought his release with Koby’s help.',
      it: 'La fuga di Moria da Hachinosu viene confermata dopo che Perona ha cercato di liberarlo con l’aiuto di Koby.',
    },
  },
  moriaDoflamingo: {
    character: 'donquixote-doflamingo',
    type: { en: 'Would-be killer', it: 'Uomo che cerca di ucciderlo' },
    summary: {
      en: 'After the war, Doflamingo attacks Moria with Pacifistas under orders to eliminate him.',
      it: 'Dopo la guerra, Doflamingo attacca Moria insieme ai Pacifista con l’ordine di eliminarlo.',
    },
  },
  moriaKaido: {
    character: 'kaido',
    type: { en: 'Former opponent', it: 'Avversario del passato' },
    summary: {
      en: 'Moria fought Kaido in the New World. After losing his living crew, he builds an army of zombies.',
      it: 'Moria ha combattuto Kaido nel Nuovo Mondo. Dopo aver perso la sua ciurma vivente, costruisce un esercito di zombie.',
    },
  },
  moriaAbsalomDeath: {
    character: 'absalom',
    type: { en: 'Officer he searches for', it: 'Ufficiale che cerca' },
    summary: {
      en: 'Moria invades Hachinosu to find Absalom and learns that he has been killed.',
      it: 'Moria invade Hachinosu per cercare Absalom e scopre che è stato ucciso.',
    },
  },
  moriaTeach: {
    character: 'marshall-d-teach',
    type: {
      en: 'Enemy who demands his service',
      it: 'Nemico che vuole al suo servizio',
    },
    summary: {
      en: 'After Moria learns of Absalom’s death on Hachinosu, Teach offers him a place in his crew.',
      it: 'Dopo che Moria scopre la morte di Absalom a Hachinosu, Teach gli offre un posto nella sua ciurma.',
    },
  },
  moriaTeachPrison: {
    character: 'marshall-d-teach',
    type: { en: 'Captor', it: 'Carceriere' },
    summary: {
      en: 'Teach holds Moria prisoner on Hachinosu after Moria refuses to join his crew.',
      it: 'Teach tiene Moria prigioniero a Hachinosu dopo che Moria ha rifiutato di unirsi alla sua ciurma.',
    },
  },
  moriaPeronaRescue: {
    character: 'perona',
    type: {
      en: 'Officer seeking his release',
      it: 'Ufficiale che cerca di liberarlo',
    },
    summary: {
      en: 'Perona releases Koby in exchange for help freeing Moria from Hachinosu’s prison.',
      it: 'Perona libera Koby in cambio del suo aiuto per far evadere Moria dalla prigione di Hachinosu.',
    },
  },
  moriaTeachEscape: {
    character: 'marshall-d-teach',
    type: { en: 'Captor he escapes from', it: 'Carceriere da cui fugge' },
    summary: {
      en: 'Teach learns that Moria has escaped from his prison on Hachinosu.',
      it: 'Teach scopre che Moria è evaso dalla sua prigione a Hachinosu.',
    },
  },
  moriaPeronaEscape: {
    character: 'perona',
    type: {
      en: 'Officer who sought his release',
      it: 'Ufficiale che ha cercato di liberarlo',
    },
    summary: {
      en: 'Moria’s escape is confirmed after Perona enlisted Koby’s help to free him.',
      it: 'La fuga di Moria viene confermata dopo che Perona ha chiesto l’aiuto di Koby per liberarlo.',
    },
  },
  absalomMoriaDeath: {
    character: 'gecko-moria',
    type: { en: 'Captain who searches for him', it: 'Capitano che lo cerca' },
    summary: {
      en: 'Moria comes to Hachinosu looking for Absalom and learns that his missing officer has been killed.',
      it: 'Moria arriva a Hachinosu per cercare Absalom e scopre che il suo ufficiale scomparso è stato ucciso.',
    },
  },
  absalomShiryu: {
    character: 'shiryu',
    type: {
      en: 'Recipient of his stolen power',
      it: 'Chi riceve il suo potere rubato',
    },
    summary: {
      en: 'After Absalom’s death, Shiryu possesses his power of invisibility.',
      it: 'Dopo la morte di Absalom, Shiryu possiede il suo potere dell’invisibilità.',
    },
  },
  lolaMother: {
    character: 'charlotte-linlin',
    type: {
      en: 'Mother of the human captain',
      it: 'Madre della capitana umana',
    },
    summary: {
      en: 'The human captain Lola is Big Mom’s daughter. The Vivre Card she gave Nami leads to her mother.',
      it: 'La capitana umana Laura è figlia di Big Mom. La Vivre Card che ha dato a Nami conduce da sua madre.',
    },
  },
  lolaChiffon: {
    character: 'charlotte-chiffon',
    type: {
      en: 'Sister of the human captain',
      it: 'Sorella della capitana umana',
    },
    summary: {
      en: 'The human captain Lola and Chiffon are daughters of Big Mom.',
      it: 'La capitana umana Laura e Chiffon sono figlie di Big Mom.',
    },
  },
  lolaMotherReject: {
    character: 'charlotte-linlin',
    type: {
      en: 'Mother who rejects the human captain',
      it: 'Madre che rifiuta la capitana umana',
    },
    summary: {
      en: 'The human captain Lola believes her mother will help her friends, but Big Mom wants her dead for fleeing an arranged marriage.',
      it: 'La capitana umana Laura crede che sua madre aiuterà i suoi amici, ma Big Mom la vuole morta perché è fuggita da un matrimonio combinato.',
    },
  },
  lolaTwin: {
    character: 'charlotte-chiffon',
    type: {
      en: 'Twin sister of the human captain',
      it: 'Sorella gemella della capitana umana',
    },
    summary: {
      en: 'Chiffon is the human captain Lola’s twin sister. Big Mom mistreats Chiffon because she resembles Lola.',
      it: 'Chiffon è la sorella gemella della capitana umana Laura. Big Mom maltratta Chiffon perché somiglia a Laura.',
    },
  },
  lolaGotti: {
    character: 'gotti',
    type: {
      en: 'Rescuer of the human captain',
      it: 'Soccorritore della capitana umana',
    },
    summary: {
      en: 'Gotti rescues the human captain Lola from the Marines after mistaking her for Chiffon.',
      it: 'Gotti salva la capitana umana Laura dai Marine dopo averla scambiata per Chiffon.',
    },
  },
  lolaTwinReunion: {
    character: 'charlotte-chiffon',
    type: {
      en: 'Twin sister reunited with the human captain',
      it: 'Sorella gemella ritrovata dalla capitana umana',
    },
    summary: {
      en: 'The human captain Lola reunites with her twin sister Chiffon in Dressrosa.',
      it: 'La capitana umana Laura ritrova la sorella gemella Chiffon a Dressrosa.',
    },
  },
  lolaPound: {
    character: 'pound',
    type: {
      en: 'Father of the human captain',
      it: 'Padre della capitana umana',
    },
    summary: {
      en: 'The human captain Lola and Chiffon embrace Pound after recognizing him as their father.',
      it: 'La capitana umana Laura e Chiffon abbracciano Pound dopo averlo riconosciuto come loro padre.',
    },
  },
  lolaHusband: {
    character: 'gotti',
    type: {
      en: 'Husband of the human captain',
      it: 'Marito della capitana umana',
    },
    summary: {
      en: 'The human captain Lola marries Gotti, with her family and their crews celebrating.',
      it: 'La capitana umana Laura sposa Gotti, festeggiata dalla famiglia e dalle loro ciurme.',
    },
  },
  ryumaUshimaru: {
    character: 'shimotsuki-ushimaru',
    type: { en: 'Descendant', it: 'Discendente' },
    summary: {
      en: 'The historical samurai Ryuma is an ancestor of Ushimaru. This family tie concerns his life, not the shadow animating his zombie body.',
      it: 'Il samurai storico Ryuma è un antenato di Ushimaru. Questo legame familiare riguarda la sua vita, non l’ombra che anima il suo corpo zombie.',
    },
  },
  johnRocks: {
    character: 'rocks-d-xebec',
    type: {
      en: 'Former captain in life',
      it: 'Capitano di quando era in vita',
    },
    summary: {
      en: 'Before becoming a zombie, John sailed under Rocks in the Rocks Pirates.',
      it: 'Prima di diventare uno zombie, John navigava sotto il comando di Rocks nei Pirati di Rocks.',
    },
  },
} satisfies Record<string, Relationship>

/** The dining-room attack supplies no sustained personal link to select. */
export const thrillerBarkRelationshipOmissions = {
  buhichuck:
    'His dining-room ambush offers no developed personal relationship; no link is invented from a single attack.',
}

export const thrillerBarkRelationships = {
  'brook': [
    { episode: 339, chapter: 443, value: [links.brookLuffy] },
    // Ryuma’s chapter-462 endpoint delays the earlier shadow revelation in manga mode.
    {
      episode: 353,
      chapter: 462,
      value: [links.brookLaboon, links.brookLuffy, links.brookRyuma],
    },
    {
      episode: 362,
      chapter: 467,
      value: [
        links.brookLaboon,
        links.brookLuffy,
        links.brookZoro,
        links.brookRyumaDefeated,
      ],
    },
    {
      episode: 378,
      chapter: 486,
      value: [
        links.brookLaboonAlive,
        links.brookLuffy,
        links.brookZoro,
        links.brookRyumaDefeated,
      ],
    },
    // Anime farewell stage; the manga opens Yorki and Brook’s captaincy together at chapter 489.
    {
      episode: 380,
      chapter: 489,
      source: 'episode',
      value: [
        links.brookLaboonAlive,
        links.brookYorki,
        links.brookLuffy,
        links.brookZoro,
        links.brookRyumaDefeated,
      ],
    },
    {
      episode: 381,
      chapter: 489,
      value: [
        links.brookLaboonAlive,
        links.brookYorki,
        links.brookCaptain,
        links.brookZoro,
        links.brookRyumaDefeated,
      ],
    },
    {
      episode: 818,
      chapter: 851,
      value: [
        links.brookLaboonAlive,
        links.brookYorki,
        links.brookCaptain,
        links.brookMom,
        links.brookZoro,
      ],
    },
    {
      episode: 824,
      chapter: 855,
      value: [
        links.brookLaboonAlive,
        links.brookYorki,
        links.brookCaptain,
        links.brookMomCopies,
        links.brookZoro,
      ],
    },
    {
      episode: 1043,
      chapter: 1020,
      value: [
        links.brookLaboonAlive,
        links.brookYorki,
        links.brookCaptain,
        links.brookMomCopies,
        links.brookRobin,
      ],
    },
    {
      episode: 1044,
      chapter: 1021,
      value: [
        links.brookLaboonAlive,
        links.brookYorki,
        links.brookCaptain,
        links.brookMomCopies,
        links.brookRobinHelp,
      ],
    },
    {
      episode: 1057,
      chapter: 1031,
      value: [
        links.brookLaboonAlive,
        links.brookYorki,
        links.brookCaptain,
        links.brookMomCopies,
        links.brookRobinFlight,
      ],
    },
    {
      episode: 1147,
      chapter: 1113,
      value: [
        links.brookLaboonAlive,
        links.brookYorki,
        links.brookCaptain,
        links.brookMomCopies,
        links.brookRobinProtect,
      ],
    },
  ],
  'perona': [
    // Kumashi’s episode-345 endpoint delays their earlier introduction together.
    { episode: 345, chapter: 449, value: [links.peronaKumashi] },
    {
      episode: 349,
      chapter: 455,
      value: [links.peronaMoria, links.peronaKumashi],
    },
    {
      episode: 361,
      chapter: 466,
      value: [links.peronaMoria, links.peronaKumashi, links.peronaUsopp],
    },
    {
      episode: 421,
      chapter: 524,
      value: [
        links.peronaMoria,
        links.peronaKumashi,
        links.peronaZoro,
        links.peronaUsopp,
      ],
    },
    {
      episode: 509,
      chapter: 592,
      value: [
        links.peronaMoria,
        links.peronaKumashi,
        links.peronaZoro,
        links.peronaMihawk,
        links.peronaUsopp,
      ],
    },
    {
      episode: 522,
      chapter: 602,
      value: [
        links.peronaMoria,
        links.peronaKumashi,
        links.peronaZoroAid,
        links.peronaMihawk,
        links.peronaUsopp,
      ],
    },
    {
      episode: 917,
      chapter: 925,
      value: [
        links.peronaMoriaSearch,
        links.peronaKumashi,
        links.peronaZoroAid,
        links.peronaMihawkFarewell,
        links.peronaUsopp,
      ],
    },
    {
      episode: 1113,
      chapter: 1080,
      value: [
        links.peronaMoriaPrison,
        links.peronaKoby,
        links.peronaKumashi,
        links.peronaZoroAid,
        links.peronaMihawkFarewell,
      ],
    },
    {
      episode: 1156,
      chapter: 1126,
      value: [
        links.peronaMoriaFree,
        links.peronaKoby,
        links.peronaKumashi,
        links.peronaZoroAid,
        links.peronaMihawkFarewell,
      ],
    },
  ],
  'lola': [
    // The manga owner opens after the zombie bride’s friendship with Nami is already known.
    {
      episode: 345,
      chapter: 455,
      source: 'episode',
      value: [links.lolaAbsalom],
    },
    // The chapter-455 owner endpoint delays the chapter-454 friendship.
    { episode: 348, chapter: 455, value: [links.lolaNami, links.lolaAbsalom] },
    {
      episode: 366,
      chapter: 471,
      value: [links.lolaNamiProtected, links.lolaAbsalom],
    },
    // The Absalom card explicitly remains a fact about the zombie bride, not the human captain.
    {
      episode: 378,
      chapter: 486,
      value: [links.lolaHumanNami, links.lolaAbsalom],
    },
    {
      episode: 381,
      chapter: 489,
      value: [links.lolaHumanNamiCard, links.lolaAbsalom],
    },
    // These are the human captain’s family ties; the zombie bride’s pursuit of Absalom is not transferred to her.
    {
      episode: 797,
      chapter: 835,
      value: [links.lolaHumanNamiCard, links.lolaMother, links.lolaChiffon],
    },
    {
      episode: 813,
      chapter: 847,
      value: [
        links.lolaHumanNamiCard,
        links.lolaMotherReject,
        links.lolaChiffon,
      ],
    },
    {
      episode: 827,
      chapter: 858,
      value: [links.lolaHumanNamiCard, links.lolaMotherReject, links.lolaTwin],
    },
    // Manga cover story only; the episode number only orders these source-only entries.
    {
      episode: 1000,
      chapter: 974,
      source: 'chapter',
      value: [
        links.lolaHumanNamiCard,
        links.lolaMotherReject,
        links.lolaTwin,
        links.lolaGotti,
      ],
    },
    {
      episode: 1000,
      chapter: 977,
      source: 'chapter',
      value: [
        links.lolaHumanNamiCard,
        links.lolaMotherReject,
        links.lolaTwinReunion,
        links.lolaGotti,
      ],
    },
    {
      episode: 1000,
      chapter: 991,
      source: 'chapter',
      value: [
        links.lolaHumanNamiCard,
        links.lolaMotherReject,
        links.lolaTwinReunion,
        links.lolaPound,
        links.lolaGotti,
      ],
    },
    {
      episode: 1000,
      chapter: 993,
      source: 'chapter',
      value: [
        links.lolaHumanNamiCard,
        links.lolaMotherReject,
        links.lolaTwinReunion,
        links.lolaPound,
        links.lolaHusband,
      ],
    },
  ],
  'gecko-moria': [
    {
      episode: 349,
      chapter: 455,
      value: [
        links.moriaHogback,
        links.moriaPerona,
        links.moriaAbsalom,
        links.moriaLuffy,
      ],
    },
    {
      episode: 358,
      chapter: 472,
      value: [
        links.moriaHogback,
        links.moriaPerona,
        links.moriaAbsalom,
        links.moriaLuffy,
        links.moriaOars,
      ],
    },
    {
      episode: 375,
      chapter: 483,
      value: [
        links.moriaLuffyDefeat,
        links.moriaHogback,
        links.moriaPerona,
        links.moriaAbsalom,
        links.moriaOars,
      ],
    },
    {
      episode: 378,
      chapter: 486,
      value: [
        links.moriaAbsalomRescue,
        links.moriaHogback,
        links.moriaPerona,
        links.moriaLuffyDefeat,
        links.moriaOars,
      ],
    },
    {
      episode: 490,
      chapter: 581,
      value: [
        links.moriaDoflamingo,
        links.moriaAbsalomRescue,
        links.moriaHogback,
        links.moriaPerona,
        links.moriaLuffyDefeat,
      ],
    },
    // Kaido’s endpoint delays the earlier account of their fight and Moria’s lost crew.
    {
      episode: 739,
      chapter: 795,
      value: [
        links.moriaKaido,
        links.moriaDoflamingo,
        links.moriaAbsalomRescue,
        links.moriaHogback,
        links.moriaPerona,
      ],
    },
    {
      episode: 917,
      chapter: 925,
      value: [
        links.moriaAbsalomDeath,
        links.moriaTeach,
        links.moriaPerona,
        links.moriaKaido,
        links.moriaDoflamingo,
      ],
    },
    {
      episode: 1113,
      chapter: 1080,
      value: [
        links.moriaTeachPrison,
        links.moriaPeronaRescue,
        links.moriaAbsalomDeath,
        links.moriaKaido,
        links.moriaDoflamingo,
      ],
    },
    {
      episode: 1156,
      chapter: 1126,
      value: [
        links.moriaTeachEscape,
        links.moriaPeronaEscape,
        links.moriaAbsalomDeath,
        links.moriaKaido,
        links.moriaDoflamingo,
      ],
    },
  ],
  'absalom': [
    { episode: 349, chapter: 455, value: [links.absalomMoria] },
    {
      episode: 358,
      chapter: 463,
      value: [links.absalomNami, links.absalomSanji, links.absalomMoria],
    },
    {
      episode: 359,
      chapter: 464,
      value: [
        links.absalomNami,
        links.absalomSanji,
        links.absalomMoria,
        links.absalomHogback,
      ],
    },
    {
      episode: 366,
      chapter: 471,
      value: [
        links.absalomNamiDefeat,
        links.absalomSanji,
        links.absalomMoria,
        links.absalomHogback,
      ],
    },
    {
      episode: 378,
      chapter: 486,
      value: [
        links.absalomMoriaRescue,
        links.absalomHogback,
        links.absalomNamiDefeat,
        links.absalomSanji,
      ],
    },
    {
      episode: 917,
      chapter: 925,
      value: [
        links.absalomMoriaDeath,
        links.absalomShiryu,
        links.absalomHogback,
        links.absalomNamiDefeat,
        links.absalomSanji,
      ],
    },
  ],
  'hogback': [
    // Cindry’s archived chapter-452 endpoint delays her earlier service in the mansion.
    { episode: 342, chapter: 452, value: [links.hogbackCindry] },
    {
      episode: 349,
      chapter: 455,
      value: [links.hogbackCindry, links.hogbackMoria],
    },
    {
      episode: 356,
      chapter: 461,
      value: [links.hogbackCindry, links.hogbackMoria, links.hogbackChopper],
    },
    {
      episode: 363,
      chapter: 468,
      value: [
        links.hogbackCindryPast,
        links.hogbackMoria,
        links.hogbackChopper,
      ],
    },
    {
      episode: 364,
      chapter: 469,
      value: [
        links.hogbackCindryRefusal,
        links.hogbackMoria,
        links.hogbackChopper,
      ],
    },
  ],
  'victoria-cindry': [
    { episode: 342, chapter: 452, value: [links.cindryHogback] },
    {
      episode: 363,
      chapter: 468,
      value: [links.cindryHogbackPast, links.cindryChopper],
    },
    {
      episode: 364,
      chapter: 469,
      value: [links.cindryRefusal, links.cindryChopper],
    },
  ],
  'ryuma': [
    { episode: 353, chapter: 462, value: [links.ryumaBrook] },
    { episode: 362, chapter: 467, value: [links.ryumaZoro, links.ryumaBrook] },
    {
      episode: 1046,
      chapter: 1023,
      value: [links.ryumaZoro, links.ryumaBrook, links.ryumaUshimaru],
    },
  ],
  'oars': [
    { episode: 358, chapter: 472, value: [links.oarsLuffy] },
    { episode: 370, chapter: 476, value: [links.oarsMoria, links.oarsLuffy] },
  ],
  'yorki': [
    // The chapter-489 owner endpoint delays the chapter-487 flashback.
    {
      episode: 380,
      chapter: 489,
      value: [links.yorkiBrook, links.yorkiLaboon],
    },
  ],
  'hildon': [
    { episode: 340, chapter: 445, value: [links.hildonChopper] },
    // Moria’s endpoint delays the chapter-454 summons.
    {
      episode: 350,
      chapter: 456,
      value: [links.hildonMoria, links.hildonChopper],
    },
  ],
  'cerberus-thriller-bark': [
    { episode: 341, chapter: 447, value: [links.cerberusLuffy] },
  ],
  'kumashi': [
    { episode: 345, chapter: 449, value: [links.kumashiPerona] },
    {
      episode: 360,
      chapter: 465,
      value: [links.kumashiPerona, links.kumashiUsopp],
    },
  ],
  'john': [
    { episode: 345, chapter: 455, value: [links.johnAbsalom] },
    // Chapter 957 page 6 identifies John; episode 958 adapts pages 3–19 (Template:WC).
    { episode: 958, chapter: 957, value: [links.johnRocks, links.johnAbsalom] },
  ],
  'jigoro': [
    { episode: 356, chapter: 461, value: [links.jigoroHogback] },
    {
      episode: 363,
      chapter: 468,
      value: [links.jigoroZoro, links.jigoroHogback],
    },
  ],
  'tararan': [
    // Tararan’s archived chapter-456 endpoint delays the chapter-454 fight and chapter-455 purification.
    {
      episode: 349,
      chapter: 456,
      value: [links.tararanBrook, links.tararanFranky],
    },
  ],
  'gyoro-nin-and-bao': [
    // The grouped record’s chapter-486 naming gate delays the earlier service; the trio remains one archive record.
    { episode: 350, chapter: 486, value: [links.trioMoria] },
  ],
  'risky-brothers': [
    { episode: 370, chapter: 476, value: [links.riskyLola, links.riskyLuffy] },
  ],
  'spoil': [
    { episode: 375, chapter: 483, value: [links.spoilMoria, links.spoilLuffy] },
  ],
} satisfies Record<string, Timeline<Relationship[]>>
