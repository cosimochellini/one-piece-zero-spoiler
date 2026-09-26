import type { Story, Timeline } from '~/data/types'

/**
 * The dated stories for characters introduced in this saga. Each entry is
 * filed at the first episode by whose end its full account is known.
 */
export const alabastaChronicles = {
  'tony-tony-chopper': [
    {
      episode: 83,
      value: {
        title: {
          it: 'Una renna alla porta del castello',
          en: 'A reindeer at the castle door',
        },
        body: {
          it: '[[monkey-d-luffy|Rufy]] arriva in cima alla montagna di Drum con [[nami|Nami]] febbricitante sulla schiena e [[sanji|Sanji]] quasi privo di sensi, dopo aver scalato la parete a mani nude nel gelo. Davanti al castello le forze lo abbandonano, e a raccoglierlo è una renna dal naso blu che cammina su due zampe e porta un cappello rosa. Appena si accorge di essere stata vista, la creatura si nasconde dietro un muro, dal lato sbagliato, con metà del corpo in vista. Si chiama Chopper, parla, e assiste la dottoressa [[kureha|Kureha]]: prepara le medicine, controlla i malati e scappa appena qualcuno gli rivolge la parola. È lui a trascinare dentro i tre viaggiatori mezzi congelati.',
          en: '[[monkey-d-luffy|Luffy]] reaches the top of the Drum mountain with a feverish [[nami|Nami]] on his back and [[sanji|Sanji]] barely conscious, after climbing the cliff bare-handed in the cold. At the castle gate his strength gives out, and the one who catches him is a blue-nosed reindeer that walks on two legs and wears a pink hat. The moment he realises he has been seen, the creature hides behind a wall, on the wrong side, half his body showing. His name is Chopper; he talks, and he assists doctor [[kureha|Kureha]], preparing medicines and checking on the patients, and he runs the moment anyone speaks to him. He is the one who drags the three half-frozen travellers inside.',
        },
      },
    },
    {
      episode: 86,
      value: {
        title: { it: 'La bandiera di Hiluluk', en: 'Hiluluk’s flag' },
        body: {
          it: '[[kureha|Kureha]] racconta da dove viene la renna. Cacciato dal branco per il naso blu e preso a fucilate dagli uomini perché parlava, Chopper è stato raccolto da [[hiluluk|Hiluluk]], un ciarlatano con la bandiera dei pirati cucita sulla giacca, che gli ha dato un nome e un tetto. Quando Hiluluk si ammala, Chopper attraversa la montagna per portargli un fungo che nel libro di medicina ha il teschio dei pirati: lo prende per il segno di una cura, ed è veleno. Hiluluk lo mangia sorridendo. Poi risponde alla chiamata di [[wapol|Wapol]], scopre che è una trappola e sceglie di finire con le sue mani, gridando che un uomo muore solo quando viene dimenticato.',
          en: '[[kureha|Kureha]] tells where the reindeer comes from. Driven out by his herd over the blue nose and shot at by men because he talked, Chopper was taken in by [[hiluluk|Hiluluk]], a quack with a pirate flag stitched to his coat, who gave him a name and a roof. When Hiluluk falls ill, Chopper crosses the mountain to bring him a mushroom that carries a skull and crossbones in the medical book: he takes it for the sign of a cure, and it is poison. Hiluluk eats it smiling. Then he answers [[wapol|Wapol]]’s summons, finds out it is a trap and chooses to end things with his own hands, shouting that a man dies only when he is forgotten.',
        },
      },
    },
    {
      episode: 88,
      value: {
        title: { it: 'Sette forme, da solo', en: 'Seven forms, alone' },
        body: {
          it: "Con la bandiera di [[hiluluk|Hiluluk]] piantata sulla torre e [[wapol|Wapol]] in fuga, [[monkey-d-luffy|Rufy]] lascia Chessmarimo a Chopper da solo e gli chiede se può cavarsela; Chopper risponde che sarà uno scherzo. Ingoia una Rumble Ball e passa in rassegna le sue sette forme una dopo l'altra: Guard Point per spezzare due martelli, Brain Point per leggere lo scontro e trovare l'unico varco nella guardia dell'avversario, Arm Point per sferrare il colpo che chiude tutto. È la prima volta che qualcuno lo vede combattere così, e persino Rufy resta a fissarlo, stupito da cosa sappia fare davvero quella renna.",
          en: 'With [[hiluluk|Hiluluk]]’s flag planted on the tower and [[wapol|Wapol]] fleeing, [[monkey-d-luffy|Luffy]] leaves Chessmarimo to Chopper alone and asks if he can handle it; Chopper says it will be easy. He swallows a Rumble Ball and cycles through his seven forms one by one: Guard Point to shatter a pair of hammers, Brain Point to read the fight and find the one gap in his opponent’s guard, Arm Point to land the blow that ends it. It is the first time anyone has watched him fight like this, and even Luffy stares, amazed at what the reindeer can actually do.',
        },
      },
    },
    {
      episode: 95,
      value: {
        title: { it: 'Ciliegi nella neve', en: 'Cherry blossoms in the snow' },
        body: {
          it: '[[wapol|Wapol]] spara alla bandiera di [[hiluluk|Hiluluk]] e [[monkey-d-luffy|Rufy]] la difende senza sapere di chi sia, poi scaccia il re dal suo stesso regno. Quando Rufy gli chiede di venire con lui, Chopper risponde che è una renna, un mostro, e che non può; Rufy gli urla di stare zitto e di salire a bordo. Chopper annuncia la sua decisione a [[kureha|Kureha]], che lo insegue per il castello lanciando coltelli e poi lo lascia andare. Mentre la slitta scende verso il villaggio, Kureha spara nel cielo la polvere rosa del dottore: sopra la neve fioriscono ciliegi enormi, e Chopper piange. Poi è a bordo della Going Merry, il nuovo medico della ciurma.',
          en: '[[wapol|Wapol]] fires at [[hiluluk|Hiluluk]]’s flag and [[monkey-d-luffy|Luffy]] defends it without knowing whose it is, then knocks the king out of his own country. When Luffy asks him to come along, Chopper answers that he is a reindeer, a monster, and cannot; Luffy yells at him to shut up and get on board. Chopper announces his decision to [[kureha|Kureha]], who chases him through the castle throwing knives and then lets him go. As the sled runs down towards the village, Kureha fires the doctor’s pink powder into the sky: over the snow, enormous cherry trees bloom, and Chopper cries. Then he is aboard the Going Merry, the crew’s new doctor.',
        },
      },
    },
    {
      episode: 172,
      value: {
        title: {
          it: 'Solo contro due sacerdoti',
          en: 'Alone against two priests',
        },
        body: {
          it: "Lasciato solo a guardia della Going Merry, Chopper viene assalito da [[shura|Shura]], uno dei sacerdoti di [[enel|Enel]], che dà fuoco alla nave con la sua lancia prima che arrivi [[gan-fall|Gan Fall]] a incassare i colpi al posto suo. Giorni dopo, separato dagli altri da un pitone gigante, Chopper finisce da solo nell'Ordalia della Palude e trova ad aspettarlo [[gedatsu|Gedatsu]]. Convinto di essere finalmente senza aiuto, si getta nello scontro con tutto quello che ha e manda il sacerdote a precipitare giù dal cielo, verso il mare sottostante.",
          en: 'Left alone to guard the Going Merry, Chopper is ambushed by [[shura|Shura]], one of [[enel|Enel]]’s priests, who sets the ship on fire with a spear before [[gan-fall|Gan Fall]] arrives and takes the beating meant for him. Days later, cut off from the others by a giant python, Chopper stumbles onto the Ordeal of Swamp and finds [[gedatsu|Gedatsu]] waiting there instead. Certain he is finally on his own, he fights back with everything he has and sends the priest plunging out of the sky, down toward the sea below.',
        },
      },
    },
    {
      episode: 293,
      value: {
        title: { it: 'La terza Rumble Ball', en: 'The third Rumble Ball' },
        body: {
          it: 'A Enies Lobby, per riprendersi [[nico-robin|Robin]], Chopper affronta [[kumadori|Kumadori]] del CP9, un uomo con i capelli che si muovono da soli e un bastone che gli passa attraverso il corpo. La sua Rumble Ball dura tre minuti e non basta: ne mangia una seconda e perde il controllo delle trasformazioni, che cambiano da sole. Ferito e inchiodato a terra, ne ingoia una terza, quella che aveva promesso a [[kureha|Kureha]] di non prendere mai più. Il suo corpo cresce fino al soffitto, diventa una bestia enorme dagli occhi vuoti che sfonda le pareti della torre, batte Kumadori e lo scaglia giù nella piazza. Ma il mostro non riconosce nessuno e non sa fermarsi.',
          en: 'At Enies Lobby, to take [[nico-robin|Robin]] back, Chopper faces [[kumadori|Kumadori]] of CP9, a man whose hair moves on its own and whose staff goes straight through his body. His Rumble Ball lasts three minutes and it is not enough: he eats a second one and loses control of his transformations, which shift by themselves. Wounded and pinned to the floor, he swallows a third, the one he had promised [[kureha|Kureha]] never to take again. His body grows to the ceiling and becomes a huge blank-eyed beast that smashes through the tower walls, beats Kumadori and hurls him down into the square. But the monster recognises nobody and cannot stop.',
        },
      },
    },
    {
      episode: 320,
      value: {
        title: { it: 'Cinquanta berry', en: 'Fifty berries' },
        body: {
          it: 'A Enies Lobby ha ingoiato tre Rumble Ball per battere un agente del CP9, e ora il Governo Mondiale risponde. [[zambai|Zambai]] e la Franky Family portano i nuovi avvisi di taglia: [[monkey-d-luffy|Rufy]] sale a trecento milioni e ogni membro della ciurma ha un prezzo, perfino Sogeking, il cecchino mascherato, trenta milioni. Chopper cerca il suo. Il soprannome è Amante dello zucchero filato, la cifra è cinquanta berry: i Marine lo hanno preso per l’animale domestico della ciurma. Mentre Rufy festeggia la taglia triplicata, Chopper è sconvolto.',
          en: 'At Enies Lobby he swallowed three Rumble Balls to beat a CP9 agent, and now the World Government gives its answer. [[zambai|Zambai]] and the Franky Family bring the new wanted posters: [[monkey-d-luffy|Luffy]] rises to three hundred million and every member of the crew has a price, even Sogeking, the masked sniper, at thirty million. Chopper looks for his own. The epithet is Cotton Candy Lover, the figure is fifty berries: the Marines have taken him for the crew’s pet. While Luffy celebrates his tripled bounty, Chopper is devastated.',
        },
      },
    },
    {
      episode: 363,
      value: {
        title: { it: 'Quella non è medicina', en: 'That is not medicine' },
        body: {
          it: 'Nel laboratorio del dottor [[hogback|Hogback]], Chopper lo ascolta raccontare perché resuscita i morti: dice che è per lenire il cuore di chi ha perso qualcuno. Chopper, che lo ammira come medico, si offre persino di aiutarlo. Ma quando vede come tratta [[victoria-cindry|Cindry]], la cameriera zombie che ha resuscitato solo per tenerla con sé dopo che lei in vita lo aveva rifiutato, capisce la verità: quei corpi si muovono, ma non sono vivi, e Hogback lo sa. Gli dice che non può più lasciarlo continuare a rovinare vite per costruire cadaveri felici, e la sua rabbia da medico esplode tutta insieme.',
          en: 'In Dr. [[hogback|Hogback]]’s laboratory, Chopper listens to him explain why he resurrects the dead: he says it is to ease the hearts of those who have lost someone. Chopper, who admires him as a doctor, even offers to help him with his research. But when he sees how he treats [[victoria-cindry|Cindry]], the zombie maid he brought back only to keep her close after she rejected him in life, he understands the truth: those bodies move, but they are not alive, and Hogback knows it. He tells him he cannot let him keep ruining lives to build happy corpses, and all his anger as a doctor comes out at once.',
        },
      },
    },
    {
      episode: 404,
      value: {
        title: {
          it: 'Tre Rumble Ball in una volta sola',
          en: 'Three Rumble Balls at once',
        },
        body: {
          it: "A Sabaody la ciurma si sfalda sotto la luce di [[borsalino|Kizaru]] e i pugni di [[sentomaru|Sentomaru]]: [[roronoa-zoro|Zoro]] è a terra e [[monkey-d-luffy|Rufy]] è inchiodato al suolo. Chopper ha già bruciato una Rumble Ball contro i marine della casa d'aste e una seconda contro un Pacifista: non gli resta che quella che aveva giurato di non prendere mai due volte, e la ingoia sopra le altre due. La bestia che si alza non riconosce nessuno e non ubbidisce a ordini: si scaglia su Sentomaru senza mira né freni, pericolosa per la sua ciurma quanto per il nemico, finché non compare [[bartholomew-kuma|Orso Bartholomew]] e lo scontro smette di contare qualcosa.",
          en: "At Sabaody the crew comes apart under [[borsalino|Kizaru]]'s light and [[sentomaru|Sentomaru]]'s fists: [[roronoa-zoro|Zoro]] lies broken and [[monkey-d-luffy|Luffy]] is pinned to the ground. Chopper has already burned through one Rumble Ball against the Marines at the auction house and another against a Pacifista, and there is nothing left to try but the one he swore never to use twice: he swallows a third on top of the other two. The beast that rises knows no one and takes no orders; it hurls itself at Sentomaru with no aim and no brakes, as dangerous to its own crew as to the enemy, until [[bartholomew-kuma|Kuma]] appears and the fight stops mattering.",
        },
      },
    },
    {
      episode: 512,
      value: {
        title: {
          it: 'Il messaggio sull’isola degli uccelli',
          en: 'The message on the island of birds',
        },
        body: {
          it: 'A Sabaody [[bartholomew-kuma|Orso Bartholomew]] ha fatto sparire la ciurma un membro alla volta, e Chopper si è risvegliato nel regno di Torino, nel South Blue: uccelli giganti lo usano come giocattolo e gli abitanti dell’isola vogliono cucinarlo. Passano settimane senza notizie. Poi arriva il giornale: [[monkey-d-luffy|Rufy]] ha perso il fratello [[portgas-d-ace|Ace]] nella grande guerra di Marineford, ed è tornato là da solo, a suonare una campana sedici volte e a pregare davanti ai giornalisti. Chopper guarda la fotografia e legge il messaggio nascosto sul braccio del capitano. In groppa a uno degli uccelli giganti, grida verso il mare che ha capito.',
          en: 'At Sabaody [[bartholomew-kuma|Bartholomew Kuma]] made the crew vanish one member at a time, and Chopper woke up in the Torino Kingdom, in the South Blue: giant birds use him as a toy and the islanders want to cook him. Weeks pass without news. Then the newspaper arrives: [[monkey-d-luffy|Luffy]] has lost his brother [[portgas-d-ace|Ace]] in the great war at Marineford, and has gone back there alone to ring a bell sixteen times and pray in front of the reporters. Chopper studies the photograph and reads the message hidden on his captain’s arm. Riding one of the giant birds, he shouts out to the sea that he has understood.',
        },
      },
    },
    {
      episode: 524,
      value: {
        title: {
          it: 'Il Guard Point ferma un kraken',
          en: 'Guard Point stops a kraken',
        },
        body: {
          it: "Diretta verso l'Isola degli Uomini-Pesce, la Thousand Sunny finisce nella morsa di un kraken gigantesco che le si avventa contro con i tentacoli. [[franky|Franky]] spara con i suoi nuovi lanciarazzi e [[nico-robin|Robin]] fa spuntare una mano enorme che ferma un macigno diretto sullo scafo. Chopper non ha bisogno della Rumble Ball: si trasforma nel suo nuovo Guard Point, una corazza di muscoli e pelliccia, e incassa un colpo che avrebbe spaccato in due la nave. [[monkey-d-luffy|Rufy]], [[roronoa-zoro|Zoro]] e [[sanji|Sanji]] si preparano a finire il mostro mentre il resto della ciurma tiene.",
          en: 'Heading for Fish-Man Island, the Thousand Sunny gets caught in the grip of a giant kraken lashing out with its tentacles. [[franky|Franky]] fires his new rocket launchers and [[nico-robin|Robin]] grows an enormous hand that stops a boulder aimed at the hull. Chopper needs no Rumble Ball this time: he shifts into his new Guard Point, a wall of muscle and fur, and takes a blow that would have split the ship in two. [[monkey-d-luffy|Luffy]], [[roronoa-zoro|Zoro]] and [[sanji|Sanji]] get ready to finish the monster while the rest of the crew holds on.',
        },
      },
    },
    {
      episode: 566,
      value: {
        title: {
          it: 'Tre minuti di Monster Point contro Dosun',
          en: 'Three minutes of Monster Point against Dosun',
        },
        body: {
          it: 'Contro [[dosun|Dosun]], il colosso che sfascia un palazzo con un colpo di martello, Chopper ingoia una sola Rumble Ball e si lascia diventare Monster Point, la forma che un tempo lo trasformava in una bestia cieca. Questa volta resta se stesso: risponde a [[usopp|Usop]], che lo guarda a bocca aperta, si imbarazza per i complimenti e conta i minuti che gli restano, tre soli, prima di tornare piccolo. Dosun lo sfida ancora convinto di poterlo scaraventare in mare, ma il colpo che segue gli spacca il martello in mano e lo stende a terra in un solo istante.',
          en: 'Against [[dosun|Dosun]], a colossus who can flatten a building with one swing of his hammer, Chopper swallows a single Rumble Ball and lets himself become Monster Point, the form that once turned him into a blind beast. This time he stays himself: he answers [[usopp|Usopp]], who watches him open-mouthed, gets embarrassed at the compliments and counts down the minutes he has left, three only, before shrinking back. Dosun charges again, sure he can still knock him into the sea, but the blow that follows shatters the hammer in his hands and drops him in a single instant.',
        },
      },
    },
    {
      episode: 622,
      value: {
        title: {
          it: 'La caramella e la bambina',
          en: 'The candy and the girl',
        },
        body: {
          it: 'I bambini dell’isola non mangiavano caramelle ma una droga, e quando gliela tolgono inseguono urlando quel che ne resta. Mocha scappa con tutta la scorta e, messa alle strette, se la ingoia tutta lei perché nessun altro possa. Chopper resta a dover scegliere fra sedare gli altri e salvare lei, finché [[sanji|Sanji]] e i marine non arrivano e mettono giù i bambini al posto suo. Raggiunge Mocha mentre crolla sputando sangue e la tiene in vita. Poi [[trafalgar-law|Law]] toglie la droga dal corpo di ognuno di loro, e Mocha è l’ultima a svegliarsi.',
          en: 'The children on the island were not eating sweets but a drug, and when it is taken away they chase the last of it screaming. Mocha runs with the whole batch and, cornered, swallows all of it herself so that none of them can. Chopper is left choosing between sedating the rest and saving her, until [[sanji|Sanji]] and the marines arrive and put the children down for him. He reaches Mocha as she goes down coughing blood and keeps her breathing. Afterwards [[trafalgar-law|Law]] takes the drug out of every one of them, and Mocha is the last to wake.',
        },
      },
    },
    {
      episode: 815,
      value: {
        title: {
          it: 'Prigionieri nel Mirro-World',
          en: 'Prisoners in the Mirro-World',
        },
        body: {
          it: 'Sopraffatto dagli scagnozzi di Brûlée, Chopper viene risucchiato attraverso uno specchio nel Mirro-World, dove [[carrot|Carrot]] è già prigioniera. Per ore corrono di specchio in specchio in cerca di uno che mostri [[sanji|Sanji]], mentre [[charlotte-brulee|Brûlée]] e le sue guardie li inseguono a loro volta, decise a bollirli entrambi per cena. Lasciandosi catturare apposta, Chopper si libera delle catene, si trasforma in Monster Point e aiuta Carrot a rovesciare la pentola bollente proprio su Brûlée. Insieme abbattono quel che resta della sua ciurma e catturano Brûlée, priva di sensi, per farsi aprire lo specchio che vogliono.',
          en: "Overwhelmed by Brûlée's henchmen, Chopper is swallowed through a mirror into the Mirro-World, where [[carrot|Carrot]] is already trapped. For hours they run from mirror to mirror hunting for one that shows [[sanji|Sanji]], while [[charlotte-brulee|Brûlée]] and her guards hunt them back, planning to boil them both for supper. Letting himself be caught on purpose, Chopper slips his chains, turns Monster Point and helps Carrot tip the boiling pot onto Brûlée herself. Together they beat down what is left of her crew and capture Brûlée, unconscious, to force open whichever mirror they choose.",
        },
      },
    },
    {
      episode: 928,
      value: {
        title: {
          it: 'Un’Imperatrice di nome Olin',
          en: 'An Emperor called Olin',
        },
        body: {
          it: 'Sulla spiaggia di Kuri, dove si allena con [[tama|O-Tama]] e [[momonosuke|Momonosuke]], Chopper avvista qualcosa di enorme sulla sabbia: è [[charlotte-linlin|Big Mom]], trascinata a riva priva di sensi dopo l’attacco di [[king|King]]. Quando si sveglia non ricorda nulla, nemmeno il proprio nome. Chopper, terrorizzato all’idea di ricordarle che è un’Imperatrice, le dice che si chiama Olin, e lei gli crede. Il giorno dopo il gruppo, con [[kikunojo|Kiku]], la porta a Okobore, dove le danno da mangiare zuppa di fagioli rossi, e O-Tama ha un’idea: dirle che ce n’è ancora a Udon, la prigione dove è rinchiuso [[monkey-d-luffy|Rufy]]. Big Mom si prepara a partire subito.',
          en: 'On Kuri beach, where he is training with [[tama|Tama]] and [[momonosuke|Momonosuke]], Chopper spots something huge on the sand: [[charlotte-linlin|Big Mom]], washed ashore unconscious after [[king|King]]’s attack. When she wakes she remembers nothing, not even her own name. Chopper, terrified of reminding her that she is an Emperor, tells her she is called Olin, and she believes him. The next day the group, with [[kikunojo|Kiku]], takes her to Okobore Town, where she is fed red bean soup, and Tama has an idea: tell her there is more of it in Udon, the prison where [[monkey-d-luffy|Luffy]] is held. Big Mom gets ready to leave at once.',
        },
      },
    },
    {
      episode: 1023,
      value: {
        title: {
          it: 'La cura per i demoni di ghiaccio',
          en: 'A cure for the ice demons',
        },
        body: {
          it: 'A Onigashima [[queen|Queen]] spara sulla folla proiettili che diffondono un virus: chi viene infettato si copre di ghiaccio, perde la ragione e morde chiunque gli sia vicino, passando il contagio. Chopper analizza l’antidoto che [[roronoa-zoro|Zoro]] ha strappato ad [[scratchmen-apoo|Apoo]] mentre l’epidemia si allarga di piano in piano, poi scopre dal braccio che gli sta gelando di essere infetto anche lui. Con la fiamma di [[marco|Marco]] che gli restituisce il braccio, in poche ore completa un antidoto che si riproduce da solo, il Chopperphage, lo fa sparare con un cannone su tutta la sala e cura anche i soldati di Queen, insieme a [[hyogoro|Hyogoro]] a un passo dalla morte. Poi urla a tutti che non è un tanuki e colpisce Queen in faccia.',
          en: 'On Onigashima [[queen|Queen]] fires bullets into the crowd that spread a virus: whoever is infected grows a coat of ice, loses his mind and bites anyone nearby, passing the disease on. Chopper analyses the antidote [[roronoa-zoro|Zoro]] has snatched from [[scratchmen-apoo|Apoo]] while the outbreak spreads floor by floor, then learns from his own freezing arm that he is infected too. With [[marco|Marco]]’s flame giving him his arm back, in a few hours he completes an antidote that reproduces on its own, the Chopperphage, has it fired from a cannon across the whole hall and cures Queen’s own soldiers along with [[hyogoro|Hyogoro]], a breath from death. Then he yells at everyone that he is not a tanuki and hits Queen in the face.',
        },
      },
    },
    {
      episode: 1036,
      value: {
        title: {
          it: 'Trenta minuti contro Queen',
          en: 'Thirty minutes against Queen',
        },
        body: {
          it: 'Sul Live Floor Chopper tiene testa in Monster Point a [[queen|Queen]], mentre [[charlotte-perospero|Perospero]] fa piovere frecce sui samurai. Un tempo [[caesar-clown|Caesar]] gli ha offerto di allungare la durata della Rumble Ball fino a trenta minuti, al prezzo di un effetto collaterale che Chopper ha accettato. Sbatte Queen sul pavimento e lo scaraventa contro un muro, ma Queen si rialza illeso. Poi [[bao-huang|Bao Huang]] annuncia che [[kaido|Kaido]] ha sconfitto [[monkey-d-luffy|Rufy]]: Chopper si perde d’animo e Queen spalanca le fauci per finirlo. Un calcio di [[sanji|Sanji]] gli fa girare la testa come una trottola; Sanji loda Chopper per aver resistito, gli dice di continuare a credere in Rufy e gli affida [[roronoa-zoro|Zoro]] ferito.',
          en: 'On the Live Floor Chopper holds his ground in Monster Point against [[queen|Queen]], while [[charlotte-perospero|Perospero]] rains arrows on the samurai. Once, [[caesar-clown|Caesar]] offered to stretch his Rumble Ball to thirty minutes, at the price of a side effect Chopper agreed to. He slams Queen into the floor and hurls him into a wall, and Queen gets up unharmed. Then [[bao-huang|Bao Huang]] announces that [[kaido|Kaido]] has beaten [[monkey-d-luffy|Luffy]]: Chopper loses heart, and Queen opens his jaws to finish him. [[sanji|Sanji]]’s kick sends Queen’s head spinning; Sanji praises Chopper for holding out, tells him to keep trusting Luffy and hands him the wounded [[roronoa-zoro|Zoro]].',
        },
      },
    },
  ],
  'portgas-d-ace': [
    {
      episode: 95,
      value: {
        title: { it: 'Il fratello maggiore', en: 'The older brother' },
        body: {
          it: 'Nel porto di Nanohana, ad Alabasta, [[monkey-d-luffy|Rufy]] incontra un uomo col cappello arancione che dorme nel piatto e poi incendia le navi di Baroque Works con il pugno. È Ace, suo fratello maggiore, capitano della seconda divisione di Barbabianca. I due mangiano, ridono e raccontano alla ciurma di essere cresciuti insieme. Ace è sulle tracce di un uomo chiamato Barbanera, ma prima di partire lascia a Rufy un pezzo della propria vivre card.',
          en: 'In the port town of Nanohana, in Alabasta, [[monkey-d-luffy|Luffy]] meets a man in an orange hat who falls asleep in his food and then burns the Baroque Works ships with his fist. He is Ace, Luffy’s older brother and captain of Whitebeard’s second division. The two eat, laugh and tell the crew that they grew up together. Ace is hunting a man called Blackbeard, but before leaving he gives Luffy a piece of his vivre card.',
        },
      },
    },
    {
      episode: 145,
      value: {
        title: {
          it: 'Un pasto gratis, e una promessa',
          en: 'A free meal, and a promise',
        },
        body: {
          it: "Da qualche parte tra un'isola e l'altra, Ace sale a bordo della nave di [[buggy|Bagy]] in cerca soltanto di un pasto gratis, e si addormenta subito. L'equipaggio di Bagy vorrebbe finirlo mentre non può difendersi, ma Bagy si rifiuta categoricamente, per paura di quello che i compagni di Ace farebbero in cambio. Al risveglio, Ace si getta nella festa già in corso sulla nave di Bagy, e prima di ripartire fa un favore al suo improbabile ospite: promette di indicargli la strada per [[monkey-d-luffy|Rufy]].",
          en: 'Somewhere between islands, Ace climbs aboard [[buggy|Buggy]]’s ship looking for nothing more than a free meal, and promptly falls asleep. Buggy’s own crew want to finish him off while he can’t fight back, but Buggy refuses outright, unwilling to risk what Ace’s crewmates would do to them in return. When Ace wakes, he throws himself into the party already going on Buggy’s ship, and before he moves on he does one favor for his unlikely host: he promises to point him toward [[monkey-d-luffy|Luffy]].',
        },
      },
    },
    {
      episode: 325,
      value: {
        title: {
          it: 'Barbabianca re, o la morte',
          en: 'Whitebeard as King, or death',
        },
        body: {
          it: 'Sull’isola di Banaro, Ace raggiunge finalmente l’uomo che insegue: [[marshall-d-teach|Teach]], che ha ucciso Thatch, comandante della quarta divisione, per il frutto del diavolo che Thatch aveva trovato. Teach lo chiama comandante; Ace risponde che non ne ha più il diritto. Teach gli offre un posto nella sua ciurma e annuncia che andrà a Water Seven a uccidere [[monkey-d-luffy|Rufy]], per farne un regalo al Governo Mondiale. Ace non lascerà che tocchi il suo fratellino. Le sue fiamme vanno a segno, ma l’oscurità lo trascina a sé e i pugni di Teach lo raggiungono. In ginocchio, Ace rifiuta ancora: farà di [[edward-newgate|Barbabianca]] il Re, o morirà provandoci.',
          en: 'On Banaro Island, Ace finally catches up with the man he has been chasing: [[marshall-d-teach|Teach]], who killed Thatch, commander of the fourth division, for the Devil Fruit Thatch had found. Teach calls him Commander; Ace answers that he has lost the right to. Teach offers him a place in his crew and announces he is heading to Water Seven to kill [[monkey-d-luffy|Luffy]] as a gift for the World Government. Ace will not let him touch his little brother. His flames strike home, but the darkness drags him in and Teach’s fists find him. On his knees, Ace refuses again: he will make [[edward-newgate|Whitebeard]] the King, or die trying.',
        },
      },
    },
    {
      episode: 378,
      value: {
        title: {
          it: 'Un nome nuovo tra i Sette',
          en: 'A new name among the Seven',
        },
        body: {
          it: 'Lontano da Marineford, sulla nave-isola di Thriller Bark, [[hogback|Hogback]] mostra ad [[absalom|Absalom]] un giornale prima di fuggire con [[gecko-moria|Moria]] svenuto: [[marshall-d-teach|Barbanera]] ha sconfitto Ace, l’ha consegnato al Governo Mondiale, e in cambio ha ottenuto il posto lasciato libero nella Flotta dei Sette. È così che la notizia comincia a viaggiare per i mari, ben prima che Rufy la legga di persona: il figlio del Re dei Pirati è stato catturato, e un uomo che nessuno considerava temibile è appena salito di rango sul suo corpo prigioniero.',
          en: 'Far from Marineford, on the island-ship Thriller Bark, [[hogback|Hogback]] shows [[absalom|Absalom]] a newspaper before fleeing with an unconscious [[gecko-moria|Moria]]: [[marshall-d-teach|Blackbeard]] has beaten Ace, handed him to the World Government, and earned the empty seat among the Seven Warlords in exchange. This is how the news begins to travel across the seas, long before Luffy reads it himself: the son of the Pirate King has been captured, and a man nobody thought dangerous has just risen in rank on top of his prisoner.',
        },
      },
    },
    {
      episode: 416,
      value: {
        title: { it: 'La carta brucia', en: 'The card burns' },
        body: {
          it: 'La vivre card che Ace ha lasciato a [[monkey-d-luffy|Rufy]] si è ridotta a un frammento che brucia. Ad Amazon Lily il giornale spiega il resto: Ace ha perso il duello con [[marshall-d-teach|Barbanera]], è stato consegnato al Governo e sarà giustiziato in pubblico, in un giorno già fissato. Rufy legge la data e non esita: non andrà al patibolo, dove il fratello arriverà solo per morire, ma alla grande prigione dove lo tengono adesso, e chiede di farsi portare là dentro. La carta è la sola prova che Ace è ancora vivo, e continua a rimpicciolire.',
          en: 'The vivre card Ace left with [[monkey-d-luffy|Luffy]] has shrunk to a burning scrap. On Amazon Lily the newspaper explains the rest: Ace lost his duel with [[marshall-d-teach|Blackbeard]], was handed to the Government and will be executed in public, on a day already set. Luffy reads the date and does not hesitate: he will not go to the scaffold, where his brother will only arrive to die, but to the great prison where they hold him now, and asks to be smuggled inside it. The card is the one proof that Ace is still alive, and it keeps shrinking.',
        },
      },
    },
    {
      episode: 461,
      value: {
        title: {
          it: 'Cento tentativi, una parola',
          en: 'A hundred tries, one word',
        },
        body: {
          it: 'Nel pieno della battaglia di Marineford, Ace ripensa a come è arrivato fin lì. Aveva rifiutato un posto nella ciurma di [[edward-newgate|Barbabianca]] ed era stato portato a bordo comunque, svenuto, passando i giorni successivi a provare a uccidere il vecchio nel sonno senza riuscirci mai. Dopo il centesimo tentativo, [[marco|Marco]] gli spiega finalmente perché tutta la ciurma chiama il capitano Papà, poi gli offre una scelta: andarsene e tornare più forte, oppure restare e smettere di volerlo uccidere. Ace resta, si fa marchiare la schiena e, anni dopo, trascinato in una guerra che nessuno dei due ha scelto, lo chiama qualcosa di molto vicino a un padre.',
          en: "Amid the fighting at Marineford, Ace remembers how he got here. He turned down a place on [[edward-newgate|Whitebeard]]'s crew and was carried aboard anyway, unconscious, and spent every day after trying to kill the old man in his sleep and failing every single time. After his hundredth attempt, [[marco|Marco]] finally tells him why the whole crew calls their captain Pops, then gives him a choice: leave and come back stronger, or stay and stop trying to kill him. Ace stays, takes the mark on his back, and years later, dragged into a war neither of them chose, calls him something closer to father.",
        },
      },
    },
    {
      episode: 482,
      value: {
        title: { it: 'Fuori dalle catene', en: 'Out of the shackles' },
        body: {
          it: 'La guerra esplode intorno al patibolo, ma [[monkey-d-luffy|Rufy]] arriva fino alle catene di Ace con la chiave presa da [[mr-3|Mr. 3]]. Le manette si aprono e i due fratelli sono finalmente liberi. Ace si mette accanto a Rufy e usa il fuoco per aprire loro una strada tra Marines e pirati. Per pochi minuti la missione impossibile è compiuta: devono soltanto lasciare Marineford insieme.',
          en: 'War erupts around the scaffold, but [[monkey-d-luffy|Luffy]] reaches Ace’s shackles with the key taken from [[mr-3|Mr. 3]]. The cuffs open and the two brothers are finally free. Ace stands beside Luffy and uses fire to open a path through Marines and pirates. For a few minutes the impossible mission is complete: they only need to leave Marineford together.',
        },
      },
    },
    {
      episode: 483,
      value: {
        title: { it: 'Grazie per avermi amato', en: 'Thank you for loving me' },
        body: {
          it: 'Durante la fuga l’ammiraglio Akainu provoca Ace insultando Barbabianca. Ace si volta; [[monkey-d-luffy|Rufy]], sfinito, cade davanti a lui. Il pugno di magma punta al fratello minore, e Ace gli si mette davanti. Ferito mortalmente, resta nelle braccia di Rufy abbastanza a lungo da dire quello che non aveva mai saputo chiedere: grazie a tutti per averlo amato. Poi il fuoco si spegne. La vivre card di Rufy diventa cenere.',
          en: 'During the escape Admiral Akainu provokes Ace by insulting Whitebeard. Ace turns back; [[monkey-d-luffy|Luffy]], exhausted, falls in front of him. The magma fist is aimed at his younger brother, and Ace steps in front. Mortally wounded, he remains in Luffy’s arms long enough to say what he never knew how to ask for: thank you all for loving me. Then the fire goes out. Luffy’s vivre card turns to ash.',
        },
      },
    },
    {
      episode: 497,
      value: {
        title: { it: 'Tre tazze di sakè', en: 'Three cups of sake' },
        body: {
          it: 'Anni prima di Marineford, a Dawn Island, Ace divide ramen rubato e un travestimento improvvisato con [[monkey-d-luffy|Rufy]] e un figlio di nobili scappato di casa di nome [[sabo|Sabo]], che ha nascosto a entrambi la sua vera famiglia. Quando la verità viene fuori e nessuno se ne va sbattendo la porta, i tre ragazzini riempiono tazze di sakè che sono troppo piccoli per bere e giurano di diventare fratelli, qualunque cosa capiti a ciascuno di loro dopo. Ace brinda per ultimo, il meno disposto ad ammettere di avere bisogno di qualcuno. Nessuno dei tre sa ancora come sarà mantenuta quella promessa, né a che prezzo.',
          en: "Years before Marineford, on Dawn Island, Ace shares stolen ramen and a made-up disguise with [[monkey-d-luffy|Luffy]] and a runaway noble's son named [[sabo|Sabo]], who has been hiding his real family from both of them. Once the truth comes out and nobody storms off, the three boys fill cups with sake they are much too young to drink and swear to become brothers, whatever happens to each of them afterward. Ace toasts last, the one least willing to admit he needed anyone. None of them yet knows how the promise will be kept, or at what cost.",
        },
      },
    },
    {
      episode: 505,
      value: {
        title: { it: 'Quel che resta di lui', en: "What's left of him" },
        body: {
          it: "Su un'isola del New World vicino alla vecchia casa di [[edward-newgate|Barbabianca]], i Pirati di Barbabianca e la ciurma di [[shanks|Shanks]] seppelliscono i due capitani fianco a fianco. Il cappello di Ace, il suo coltello e la collana che portava sempre diventano il suo segno di tomba, piantati nella terra accanto alla lapide del vecchio e coperti di fiori e delle spade che i compagni lasciano lì. Marco ringrazia Shanks per la tregua che ha reso possibile il funerale. Prima che le navi si separino, Shanks pensa a [[monkey-d-luffy|Rufy]], lontano e in lutto, e spera che si conceda di piangere adesso, per poi trovare il modo di andare avanti.",
          en: "On an island in the New World near [[edward-newgate|Whitebeard]]'s old home, the Whitebeard Pirates and [[shanks|Shanks]]'s crew lay both captains to rest side by side. Ace's hat, his knife and the necklace he always wore become his marker, planted in the ground next to the old man's grave and buried under flowers and the swords his crewmates leave behind. Marco thanks Shanks for arranging the ceasefire that made the burial possible at all. Before the ships part, Shanks thinks of [[monkey-d-luffy|Luffy]], grieving somewhere far off, and hopes he lets himself cry now, then finds a way to keep going.",
        },
      },
    },
    {
      episode: 678,
      value: {
        title: { it: 'La fiamma cambia mano', en: 'The flame changes hands' },
        body: {
          it: 'Il suo frutto non è morto con lui. È riaffiorato come premio di un torneo a Dressrosa, e il fratello minore si è iscritto per riprenderselo. Quando [[monkey-d-luffy|Rufy]] ha dovuto lasciare il torneo per correre da un amico, ha ceduto il posto e il travestimento a [[sabo|Sabo]], che ha sbriciolato l’arena, ha attraversato l’acqua saltando di pesce in pesce fino al forziere, l’ha aperto e ha mangiato quel che c’era dentro sul posto. Poi si è tolto il travestimento, si è trovato il fuoco attorno al pugno e l’ha lanciato: la mossa di Ace, con il nome che Ace le aveva dato.',
          en: 'His fruit did not die with him. It surfaced again as the prize of a tournament on Dressrosa, and his younger brother entered to win it back. When [[monkey-d-luffy|Luffy]] had to leave the ring to go after a friend, he handed his place and his disguise to [[sabo|Sabo]], who shattered the arena, crossed the water fish by fish to reach the chest, broke it open and ate what was inside on the spot. Then he pulled off the disguise, found fire around his fist and threw it: Ace’s own move, under the name Ace gave it.',
        },
      },
    },
    {
      episode: 897,
      value: {
        title: {
          it: 'La promessa che O-Tama aspetta',
          en: 'The promise Tama is waiting on',
        },
        body: {
          it: 'Qualche anno fa, racconta [[tenguyama-hitetsu|Hitetsu]] a [[monkey-d-luffy|Rufy]], Ace e una manciata di pirati naufragarono vicino a questo villaggio di Wano. Gli abitanti, affamati, li legarono e mangiarono le loro provviste; Ace li lasciò finire, si liberò con il suo potere e invece di vendicarsi andò nella foresta a cercare altro cibo per loro. Rimase per settimane, e una bambina, [[tama|O-Tama]], si affezionò a lui più di tutti. Quando lei chiese di salpare con lui, le disse di aspettare: sarebbe tornato quando fosse diventata una kunoichi affascinante. Lei aspetta ancora, in un villaggio in rovina, quando Rufy le dice che Ace è morto, e lo prende a pugni dandogli del bugiardo.',
          en: 'Years ago, [[tenguyama-hitetsu|Hitetsu]] tells [[monkey-d-luffy|Luffy]], Ace and a few pirates washed ashore near this Wano village. The starving villagers tied them up and ate their supplies; Ace let them finish, freed himself with his power and, instead of taking revenge, went into the forest to find them more food. He stayed for weeks, and a little girl, [[tama|Tama]], grew fonder of him than anyone. When she asked to sail with him, he told her to wait: he would come back once she had grown into an enchanting kunoichi. She is still waiting when Luffy tells her Ace is dead, and she hits him and calls him a liar.',
        },
      },
    },
    {
      episode: 1015,
      value: {
        title: { it: 'Un amico a Onigashima', en: 'A friend on Onigashima' },
        body: {
          it: '[[yamato|Yamato]] racconta a [[momonosuke|Momonosuke]] di quando Ace venne a Onigashima con la sua ciurma per liberare i bambini rapiti, mentre [[kaido|Kaido]] era via. Mentre i suoi uomini li riportavano a casa, Ace affrontò Yamato, di guardia all’isola, e gli raccontò cosa significava essere figlio dell’odiato [[gold-roger|Roger]]. Ace spinse Yamato, che manette esplosive tengono sull’isola, a sfidare Kaido, e Yamato distrusse la statua del drago di Kaido. Diventarono amici. Accanto al fuoco Ace parlò del fratellino [[monkey-d-luffy|Rufy]] e del suo sogno; Yamato ricavò una Vivre Card da una sua unghia e la tenne finché non si sbriciolò, quando Ace morì a Marineford.',
          en: '[[yamato|Yamato]] tells [[momonosuke|Momonosuke]] how Ace once came to Onigashima with his crew to free kidnapped children, while [[kaido|Kaido]] was away. As his men sent them home, Ace fought Yamato, the island’s guard, and spoke of what it meant to be the son of a man as hated as [[gold-roger|Roger]]. Ace urged Yamato, held on the island by exploding cuffs, to defy Kaido, and Yamato smashed Kaido’s dragon statue. They became friends. By a campfire Ace talked about his little brother [[monkey-d-luffy|Luffy]] and his dream; Yamato made a Vivre Card from his fingernail and kept it until it crumbled away, the day Ace died at Marineford.',
        },
      },
    },
  ],
  'nico-robin': [
    {
      episode: 130,
      value: {
        title: { it: 'Miss All Sunday', en: 'Miss All Sunday' },
        body: {
          it: 'Dopo Whiskey Peak, una donna con un cappello bianco sale da sola sulla Going Merry e dice di lavorare per [[crocodile|Crocodile]]. Si fa chiamare Miss All Sunday e ha già sentito parlare di [[monkey-d-luffy|Rufy]]. Offre un Eternal Pose per un’isola deserta vicino ad Alabasta, e Rufy lo frantuma senza pensarci; lei se ne va senza che nessuno riesca a fermarla. La sua calma è più inquietante di una minaccia: ha molte mani, molti segreti e un legame con la guerra che aspetta la ciurma nel deserto.',
          en: 'After Whiskey Peak, a woman in a white hat boards the Going Merry alone and says she works for [[crocodile|Crocodile]]. She calls herself Miss All Sunday and has already heard of [[monkey-d-luffy|Luffy]]. She offers an Eternal Pose to a deserted island near Alabasta, and Luffy crushes it without a thought; she leaves before anyone can stop her. Her calm is more unsettling than a threat: she has many hands, many secrets and a connection to the war waiting for the crew in the desert.',
        },
      },
    },
    {
      episode: 131,
      value: {
        title: { it: 'Una compagna senza invito', en: 'An uninvited crewmate' },
        body: {
          it: 'Dopo la caduta di [[crocodile|Crocodile]], Robin riappare nella cabina della Going Merry. [[monkey-d-luffy|Rufy]] l’ha salvata nella tomba reale quando lei aveva smesso di voler vivere, dice, e ora deve prendersi la responsabilità: la porterà con sé. La ciurma diffida di lei; Rufy accetta subito. Robin racconta di essere un’archeologa e di non avere un posto dove andare. Quando la nave lascia Alabasta, una ex agente di Baroque Works ride per la prima volta accanto ai pirati che l’hanno sconfitta.',
          en: 'After [[crocodile|Crocodile]] falls, Robin reappears in the Going Merry’s cabin. [[monkey-d-luffy|Luffy]] saved her in the royal tomb when she had given up on living, she says, so now he must take responsibility: he will take her with him. The crew mistrusts her; Luffy accepts at once. Robin says she is an archaeologist and has nowhere to go. When the ship leaves Alabasta, a former Baroque Works agent laughs for the first time beside the pirates who defeated her.',
        },
      },
    },
    {
      episode: 194,
      value: {
        title: { it: 'La mano di Gol D. Roger', en: 'Gol D. Roger’s own hand' },
        body: {
          it: "Dopo che la Campana d'Oro viene issata su dal mare del cielo, Robin legge ad alta voce il Poneglifo alla sua base davanti agli Shandia riuniti, poi nota un'iscrizione più antica incisa sulla campana stessa, sfuggita a tutti. Il nome è quello di [[gold-roger|Gold Roger]]: una riga che dichiara di essere arrivato fin lì e di voler portare questo passaggio fino ai confini della terra. [[gan-fall|Gan Fall]] le racconta che il Re dei Pirati visitò davvero Skypiea, più di vent'anni prima, anche se nessuno quassù sa spiegare come riuscisse a leggere lettere così antiche.",
          en: 'After the Golden Bell is hauled up from the sky sea, Robin reads the Poneglyph fixed to its base aloud for the gathered Shandia, then notices older writing carved into the bell itself, missed by everyone else. It names [[gold-roger|Gold Roger]]: a line declaring that he made it here and means to carry this passage to the ends of the earth. [[gan-fall|Gan Fall]] tells her the Pirate King really did visit Skypiea, over twenty years before, though nobody up here could explain how he ever read letters this old.',
        },
      },
    },
    {
      episode: 245,
      value: {
        title: { it: 'Addio dalla finestra', en: 'Goodbye through the window' },
        body: {
          it: 'Nella stanza di Iceburg le maschere sono cadute: [[rob-lucci|Lucci]], [[kaku|Kaku]], [[kalifa|Califa]] e [[blueno|Blueno]] sono il CP9, l’unità segreta del Governo autorizzata a uccidere, e Robin sta con loro. Quando [[monkey-d-luffy|Rufy]] le chiede perché, risponde che lo fa per realizzare il suo desiderio, e che sacrificherà qualunque cosa. [[roronoa-zoro|Zoro]] le ricorda che questo include far accusare di omicidio la sua vecchia ciurma; [[iceburg|Iceburg]] protesta, e lei lo blocca a terra con il suo potere. Mancano pochi minuti all’incendio che cancellerà le prove. Lucci si complimenta per il lavoro svolto. I compagni la pregano di tornare; Robin salta dalla finestra e sparisce.',
          en: 'In Iceburg’s room the masks are off: [[rob-lucci|Lucci]], [[kaku|Kaku]], [[kalifa|Kalifa]] and [[blueno|Blueno]] are CP9, the Government’s secret unit licensed to kill, and Robin stands with them. When [[monkey-d-luffy|Luffy]] asks her why, she answers that she is doing it to make her wish come true, and that she will sacrifice anything. [[roronoa-zoro|Zoro]] reminds her that this includes framing her old crew for murder; [[iceburg|Iceburg]] protests, and she pins him to the floor with her power. Minutes remain before the fire that will erase the evidence. Lucci compliments her on a job well done. Her crewmates beg her to come back; Robin jumps out of the window and is gone.',
        },
      },
    },
    {
      episode: 277,
      value: {
        title: { it: 'Ohara brucia', en: 'Ohara burns' },
        body: {
          it: 'Vent’anni prima, sull’isola di Ohara, è una studiosa di archeologia di otto anni, respinta dagli studiosi dell’Albero della Conoscenza quando chiede di studiare il Secolo Buio. Saul, un gigante naufragato sulla spiaggia, le insegna a ridere. Poi il Governo Mondiale viene a prendere gli studiosi. Sua madre Olvia, tornata dopo anni, nega di essere sua madre per proteggerla; il professor Clover viene ucciso per aver detto troppo su una civiltà scomparsa. Con la biblioteca in fiamme e i cannoni del Buster Call che piovono sull’isola, Robin confessa di saper leggere i Poneglyph, abbraccia finalmente la madre e viene affidata a Saul perché fugga.',
          en: 'Twenty years earlier, on the island of Ohara, she is an eight-year-old scholar of archaeology, turned away by the scholars of the Tree of Knowledge when she asks to study the Void Century. Saul, a giant washed up on the beach, teaches her to laugh. Then the World Government comes for the scholars. Her mother Olvia, back after years away, denies being her mother to protect her; Professor Clover is shot for saying too much about a vanished civilisation. With the library in flames and the Buster Call’s cannons raining down, Robin confesses she can read the Poneglyphs, embraces her mother at last and is sent to flee with Saul.',
        },
      },
    },
    {
      episode: 278,
      value: {
        title: { it: 'Voglio vivere', en: 'I want to live' },
        body: {
          it: 'A Enies Lobby Robin spiega che il Governo la insegue da quando era bambina e che ha sempre lasciato gli altri prima che potessero tradirla. [[monkey-d-luffy|Rufy]] non accetta questa resa: fa bruciare la bandiera del Governo e le chiede soltanto cosa desideri. Robin guarda la ciurma che è venuta a prenderla e grida che vuole vivere, che vuole andare in mare con loro. Da quel momento non fugge più da sola.',
          en: 'At Enies Lobby Robin explains that the Government has hunted her since childhood and that she always left others before they could betray her. [[monkey-d-luffy|Luffy]] will not accept that surrender: he has the Government flag burned and asks only what she wants. Robin looks at the crew that came to take her back and cries that she wants to live, that she wants to go to sea with them. From that moment she no longer runs alone.',
        },
      },
    },
    {
      episode: 400,
      value: {
        title: {
          it: 'Quello che Rayleigh non le regala',
          en: "What Rayleigh won't just hand her",
        },
        body: {
          it: 'Al bar di [[shakky|Shakky]], dopo che [[silvers-rayleigh|Rayleigh]] ha finito di raccontare alla ciurma chi è stato davvero, Robin resta indietro per chiedergli del Secolo Vuoto, e di una nota che [[gold-roger|Gold Roger]] lasciò tempo fa su un Poneglifo a Skypiea. Rayleigh ammette che la ciurma del suo vecchio capitano ha scoperto tutta la storia, ma le dice di continuare a cercarla da sola: potrebbe leggere le pietre in modo diverso da come le hanno lette loro. Le offre perfino di raccontarle tutto su due piedi. Robin rifiuta e gli dà ragione. È la prima volta che qualcuno che conosce la verità le dice di continuare a cercarla.',
          en: "At [[shakky|Shakky]]'s bar, once [[silvers-rayleigh|Rayleigh]] has finished telling the crew who he really was, Robin stays behind to ask about the Void Century, and about the note [[gold-roger|Gold Roger]] once left on a Poneglyph in Skypiea. Rayleigh admits his old captain's crew learned the whole history, but tells her to keep looking for it herself: she might read the stones differently than they did. He even offers to simply tell her everything. Robin turns him down and agrees with his own advice. It is the first time anyone with the truth in hand has told her to go on searching.",
        },
      },
    },
    {
      episode: 455,
      value: {
        title: {
          it: 'Il debito di Tequila Wolf',
          en: 'The debt of Tequila Wolf',
        },
        body: {
          it: "La zampa di [[bartholomew-kuma|Orso Bartholomew]] manda Robin da sola a Tequila Wolf, un ponte dell'East Blue che i prigionieri costruiscono da settecento anni senza mai lasciarlo. Messa al lavoro come tutti gli altri, viene incatenata con manette di kairoseki e portata nella torre del campo non appena le guardie capiscono quanto sia pericolosa. Fra le schiave che dividono con lei il poco cibo nonostante il rischio, un'anziana alla fine la riconosce. Prima che le guardie possano consegnarla al Governo, i soldati dell'Armata Rivoluzionaria sfondano il campo e aprono ogni cella del ponte. Robin esce libera, in debito con persone che conosceva da pochi giorni.",
          en: "[[bartholomew-kuma|Kuma]]'s paw sends Robin alone to Tequila Wolf, an East Blue bridge that prisoners have been building for seven hundred years without ever leaving it. Put to labour like everyone else, she is caught, seastone-cuffed and dragged to the camp's prison tower once the guards work out how dangerous she is. Among the slaves who share their rations with her despite the risk, an old woman finally names her. Before the guards can hand her to the Government, soldiers of the Revolutionary Army tear through the camp and open every cell on the bridge. Robin walks free owing her life to people she had known for days.",
        },
      },
    },
    {
      episode: 548,
      value: {
        title: {
          it: 'Il Poneglifo che chiede scusa',
          en: 'The Poneglyph that says sorry',
        },
        body: {
          it: "Nella Foresta Marina Robin trova un Poneglifo diverso da tutti quelli letti finora: non racconta la storia del Secolo Vuoto, ma si legge come una lettera di scuse. A scriverla è stato un uomo della superficie chiamato Joy Boy, che chiede perdono agli abitanti dell'isola per non aver mantenuto una promessa fatta loro, qualcosa che riguardava il tornare a completare lo scopo di Noah. Robin non ha mai visto una pietra antica piangere invece di raccontare, e resta a fissarla chiedendosi chi fosse davvero quell'uomo e cosa avesse promesso a un popolo che ancora oggi ne porta il peso.",
          en: "In the Sea Forest Robin finds a Poneglyph unlike any she has read before: it does not tell the history of the Void Century, it reads like a letter of apology. It was written by a man from the surface called Joy Boy, who begs forgiveness from the islanders for breaking a promise he made them, something to do with coming back to fulfil Noah's purpose. Robin has never seen an ancient stone weep instead of report, and she stays there staring at it, wondering who that man really was and what he had promised a people who still carry the weight of it.",
        },
      },
    },
    {
      episode: 569,
      value: {
        title: { it: 'Chi era Joy Boy', en: 'Who Joy Boy was' },
        body: {
          it: 'Alla festa per la vittoria su [[hody-jones|Hody Jones]], Robin porta [[neptune|Nettuno]] in disparte e, appena lui smette di pensare che lei lo stia corteggiando, gli chiede chi fosse Joy Boy. Il re, di colpo sobrio, le racconta la leggenda tramandata nella sua famiglia: un uomo della superficie vissuto durante il Secolo Vuoto, che aveva scritto quel messaggio per la principessa sirena di allora, chiedendo scusa per una promessa non mantenuta. In cambio gli uomini pesce avevano giurato di proteggere Noah fino al giorno stabilito, quello in cui il suo vero scopo si sarebbe finalmente rivelato. Robin ascolta e capisce di aver trovato solo il primo pezzo.',
          en: "At the victory banquet after [[hody-jones|Hody Jones]]'s defeat, Robin pulls [[neptune|Neptune]] aside and, once he stops assuming she is coming on to him, asks him plainly who Joy Boy was. The king, suddenly sober, tells her the legend passed down in his family: a man from the surface who lived during the Void Century, who wrote that message to the mermaid princess of that age, apologising for a broken promise. In exchange, the merfolk had sworn to protect Noah until the appointed day, the one on which its true purpose would finally be revealed. Robin listens and realises she has only found the first piece.",
        },
      },
    },
    {
      episode: 713,
      value: {
        title: {
          it: 'Cento mani sul colle',
          en: 'A hundred hands on the hill',
        },
        body: {
          it: 'Sale i livelli dell’altopiano su gradini fatti spuntare dalle pareti, con [[bartolomeo|Bartolomeo]] che per tutta la salita incassa al posto suo i colpi di [[gladius|Gladius]] e [[cavendish|Cavendish]] che la porta all’ultimo tratto a una velocità che non controlla. Li fa atterrare entrambi su una rete di braccia sue. Sul colle [[diamante|Diamante]] ha messo all’angolo [[rebecca|Rebecca]] e [[kyros|Kyros]], con il terreno che ondeggia sotto di loro. Robin arriva insieme alla lama, la devia con una falena di mani intrecciate e dice che alla ragazza ci pensa lei.',
          en: 'She climbs the levels of the plateau on steps sprouted from the walls, with [[bartolomeo|Bartolomeo]] taking [[gladius|Gladius]]’s blasts for her the whole way and [[cavendish|Cavendish]] carrying her the last stretch at a speed he does not control. She lands the pair of them on a net of her own arms. On the hill above, [[diamante|Diamante]] has [[rebecca|Rebecca]] and [[kyros|Kyros]] cornered and the ground rippling under them. Robin arrives with the blade, turns it aside with a moth made of linked hands, and says she will look after the girl.',
        },
      },
    },
    {
      episode: 746,
      value: {
        title: {
          it: 'Una taglia da rivoluzionaria',
          en: 'A revolutionary bounty',
        },
        body: {
          it: 'Dopo Dressrosa il mondo legge che la ciurma di [[monkey-d-luffy|Rufy]] ha abbattuto Doflamingo, e la taglia di Robin sale a 130 milioni di berry. Per anni il Governo l’ha chiamata Figlia del Diavolo e l’ha trattata come una minaccia da eliminare. Ora la cifra riconosce anche il suo posto nella ciurma che ha sfidato un Drago Celeste, salvato un regno e continua a cercare la storia proibita sulle pietre antiche.',
          en: 'After Dressrosa the world learns that [[monkey-d-luffy|Luffy]]’s crew brought down Doflamingo, and Robin’s bounty rises to 130 million berries. For years the Government called her the Devil Child and treated her as a threat to erase. Now the figure also recognises her place in the crew that challenged a Celestial Dragon, saved a kingdom and still searches for forbidden history on ancient stones.',
        },
      },
    },
    {
      episode: 769,
      value: {
        title: { it: 'Il Poneglifo rosso', en: 'The red Poneglyph' },
        body: {
          it: "Nel cuore dell'Albero Balena di Zou, a Robin viene concesso il raro permesso di leggere un Poneglifo inciso in rosso anziché in blu, il primo che vede di quel colore. Ricordando gli anni di studio delle pietre a Ohara, lo traduce in una sequenza di coordinate nautiche che [[nami|Nami]] può segnare su una mappa. [[inuarashi|Inuarashi]] le spiega cosa ha appena trovato: un Poneglifo della Rotta, uno dei quattro sparsi per il mondo, ciascuno indica un'isola. Solo quando tutti e quattro saranno letti e collegati si potrà trovare Laugh Tale e, con esso, lo One Piece.",
          en: 'Inside the Whale Tree on Zou, Robin is given rare permission to read a Poneglyph carved in red instead of blue, the first she has ever seen in this colour. Recalling her years studying the stones on Ohara, she translates it into a string of nautical coordinates that [[nami|Nami]] can plot on a chart. [[inuarashi|Inuarashi]] explains what she has just found: a Road Poneglyph, one of four scattered across the world, each pointing to an island. Only once all four are read and connected can anyone find Laugh Tale and, with it, the One Piece.',
        },
      },
    },
    {
      episode: 1044,
      value: {
        title: { it: 'Volti nella nebbia', en: 'Faces in the mist' },
        body: {
          it: 'A Onigashima, in una nebbia, Robin rivede sua madre Olvia, Saul e Clover, vivi. È l’illusione di [[black-maria|Black Maria]]: Robin scaccia gli impostori e [[brook|Brook]], immune alla nebbia, resta con lei finché non le lascia l’avversaria. Robin fa sbocciare un proprio corpo gigante, ma ogni taglio che Black Maria gli infligge si apre su di lei, e ragnatele e fuoco la inchiodano mentre Black Maria la deride, utile solo a leggere i Poneglifi. Robin ricorda una lezione imparata con l’Armata Rivoluzionaria, fa crollare il soffitto sulle fiamme, poi si erge come un demone gigantesco e la stringe fra le braccia finché non perde i sensi.',
          en: 'In a mist on Onigashima Robin sees her mother Olvia, Saul and Clover alive again. It is [[black-maria|Black Maria]]’s illusion: Robin knocks the impostors away, and [[brook|Brook]], immune to the mist, stays at her side, then leaves the fight to her. Robin grows a giant body of her own, but every cut Black Maria gives it opens on Robin, and webs and fire pin her down while Black Maria mocks her as useful only for reading Poneglyphs. Robin remembers a lesson learned with the Revolutionary Army, brings the ceiling down on the flames, then rises as a giant demon and crushes her in its arms until she passes out.',
        },
      },
    },
    {
      episode: 1083,
      value: {
        title: { it: 'Ciò che giace sotto Wano', en: 'What lies beneath Wano' },
        body: {
          it: 'La pietra di Alabasta aveva detto a Robin che Pluton, una delle armi ancestrali, si trova a Wano; finita la guerra lo chiede al vecchio spadaio [[tenguyama-hitetsu|Hitetsu]], che in realtà è l’ex shogun Sukiyaki, e lui glielo conferma. Porta lei e [[trafalgar-law|Law]] giù per un passaggio fino a una finestra su una città in fondo al mare, la vecchia Wano, sommersa otto secoli fa dopo che furono alzate le sue mura, e fino al Poneglifo della Rotta. Pluton giace ancora più in basso, e l’unico modo per raggiungerlo è abbattere le mura che chiudono il paese. Tornata dalla ciurma, Robin racconta tutto; [[monkey-d-luffy|Rufy]] decide di lasciare l’arma dov’è.',
          en: 'A stone in Alabasta told Robin that the ancient weapon Pluton lies in Wano; after the war she asks the old swordsmith [[tenguyama-hitetsu|Hitetsu]], who is really the former shogun Sukiyaki, and he confirms it. He leads her and [[trafalgar-law|Law]] down a passage to a window on a city at the bottom of the sea, the old Wano, flooded eight centuries ago after its walls went up, and on to the Road Poneglyph. Pluton lies deeper still, and the only way to reach it is to tear down the walls that close the country. Back with the crew, Robin tells them everything; [[monkey-d-luffy|Luffy]] decides to leave the weapon where it is.',
        },
      },
    },
    {
      episode: 1148,
      value: {
        title: { it: 'La bambina di Ohara', en: 'The child of Ohara' },
        body: {
          it: 'Sul Labophase, mentre il gruppo di [[nami|Nami]] cerca un modo per lasciare Egghead, [[jaygarcia-saturn|Saturn]] si arrampica fino a loro e riconosce Robin: è la bambina sopravvissuta a Ohara. Davanti a lui Robin rivive l’incidente di Ohara, sconvolta, e quando l’Anziano prova a ucciderla sono i suoi compagni a mettersi in mezzo per proteggerla. Saturn li spazza via; Robin li afferra al volo con una rete di braccia. Poi la trasmissione di [[vegapunk|Vegapunk]] continua a risuonare per il mondo, e Saturn abbandona la lotta per correre alla centrale e zittirla.',
          en: 'On the Labophase, while [[nami|Nami]]’s group looks for a way off Egghead, [[jaygarcia-saturn|Saturn]] climbs up to them and recognises Robin as the child who survived Ohara. Facing him, Robin relives the Ohara Incident, shaken, and when the Elder moves to kill her it is her crewmates who throw themselves in the way to protect her. Saturn sweeps them aside; Robin catches them in a net of arms. Then [[vegapunk|Vegapunk]]’s broadcast keeps ringing out across the world, and Saturn abandons the fight to rush to the power plant and silence it.',
        },
      },
    },
  ],
  'nefertari-vivi': [
    {
      episode: 67,
      value: {
        title: {
          it: 'Miss Wednesday è una principessa',
          en: 'Miss Wednesday is a princess',
        },
        body: {
          it: "Bibi ha viaggiato con la ciurma come Miss Wednesday, un'agente di Baroque Works pagata per guidare estranei nel pericolo, e nessuno a bordo sa ancora che è davvero Nefertari Bibi, principessa di un regno che si sta sfasciando dall'interno. Quando la verità le sfugge per sbaglio, due sicari appostati su un tetto vicino la sentono anche loro. [[monkey-d-luffy|Rufy]] si limita ad alzare le spalle davanti al pericolo; [[nami|Nami]] fissa un prezzo di un miliardo di berry per riportarla a casa, pagata o no. Tra loro, [[roronoa-zoro|Zoro]], [[usopp|Usop]] e [[sanji|Sanji]] non si chiedono mai se in cinque contro un'intera organizzazione sia un incontro alla pari.",
          en: 'She has been travelling with the crew as Miss Wednesday, a Baroque Works agent paid to guide strangers into danger, and no one aboard yet knows she is really Nefertari Vivi, princess of a kingdom coming apart from within. When the truth slips out of her by accident, two assassins perched on a nearby rooftop overhear it too. [[monkey-d-luffy|Luffy]] only shrugs at the danger; [[nami|Nami]] fixes a price of one billion berries to take her home regardless of payment. Between them, [[roronoa-zoro|Zoro]], [[usopp|Usopp]] and [[sanji|Sanji]] never once ask whether five against an entire organisation is a fair fight.',
        },
      },
    },
    {
      episode: 104,
      value: {
        title: {
          it: 'Mettere in gioco la vita insieme',
          en: 'Put our lives on the line together',
        },
        body: {
          it: "A Baroque Works arriva la notizia che il loro capo, Mr. 0, è in realtà [[crocodile|Crocodile]], intenzionato a lasciare che Alabasta si sfasci da sola in guerra civile prima di impadronirsene del tutto. [[monkey-d-luffy|Rufy]] raggiunge Bibi ed espone il suo piano per battere Crocodile direttamente; lei lo definisce sconsiderato e insiste che sia solo la sua vita a dover essere rischiata, per risparmiare il suo popolo e i suoi amici. Rufy non accetta l'offerta. Le dice che gli amici devono mettere in gioco la vita insieme, altrimenti la parola non significa niente. Bibi non trova altra risposta che le lacrime.",
          en: 'Word reaches Baroque Works that their leader, Mr. 0, is really [[crocodile|Crocodile]], and that he means to let Alabasta tear itself apart in civil war before seizing it outright. [[monkey-d-luffy|Luffy]] catches up with Vivi and lays out his own plan to beat Crocodile directly; she calls it reckless and insists that only her own life should be risked, to spare her people and her friends alike. Luffy will not accept the offer. He tells her that friends are supposed to put their lives on the line together, or the word means nothing at all. Vivi has no answer for him but tears.',
        },
      },
    },
    {
      episode: 121,
      value: {
        title: {
          it: 'Gettata dalla scogliera, presa al volo',
          en: 'Thrown from the cliff, caught in the air',
        },
        body: {
          it: "Una tempesta di sabbia orchestrata da Crocodile acceca ribelli e guardie reali, spingendoli a spararsi a vicenda nella piazza del palazzo, e [[nefertari-cobra|Cobra]] ordina a Bibi di scappare. Lei rifiuta, ancora intenta ad avvertire tutti di una bomba che esploderà entro pochi minuti. Crocodile la afferra invece per il collo, deride i due anni passati a spiarlo dall'interno della sua stessa organizzazione, e la lascia cadere dalla scogliera sotto il palazzo verso quella che dovrebbe essere la sua morte. [[monkey-d-luffy|Rufy]] la afferra al volo prima che tocchi terra, poi torna subito indietro per finire quello che Crocodile ha iniziato.",
          en: 'A sandstorm engineered by Crocodile blinds the rebels and the royal guard into shooting at each other across the palace square, and [[nefertari-cobra|Cobra]] orders Vivi to run. She refuses, still trying to warn everyone about a bomb timed to explode within minutes. Crocodile grabs her by the throat instead, mocks the two years she spent spying inside his own organisation, and drops her from the cliff below the palace to what should be her death. [[monkey-d-luffy|Luffy]] catches her clean out of the air before she lands, then turns straight back to finish what Crocodile started.',
        },
      },
    },
    {
      episode: 129,
      value: {
        title: { it: "L'addio al porto", en: 'The harbour farewell' },
        body: {
          it: "[[bon-clay|Von Clay]] attira su di sé la flotta della Marina che insegue la Going Merry, comprando la fuga della ciurma al prezzo della propria cattura. Bibi ha scelto di restare a ricostruire il suo regno invece di salpare con i pirati che l'hanno salvato, e arriva al porto solo per chiedere loro un'ultima cosa: se dovessero rivedersi, la considererebbero ancora un'amica? [[monkey-d-luffy|Rufy]] apre la bocca per rispondere ad alta voce, ma [[nami|Nami]] lo ferma: i marine in ascolto lo prenderebbero come una confessione. Così tutta la ciurma alza insieme il braccio sinistro, una X disegnata su ogni palmo, senza dire una parola.",
          en: '[[bon-clay|Bon Clay]] draws off the Marine fleet chasing the Going Merry, buying the crew’s escape at the cost of his own capture. Vivi has chosen to stay behind and rebuild her kingdom rather than sail on with the pirates who saved it, and she comes to the harbour only to ask them one last thing: if they ever meet again, will they still call her a friend? [[monkey-d-luffy|Luffy]] opens his mouth to answer aloud, but [[nami|Nami]] stops him: the watching Marines would hear it as a confession. So the whole crew raises its left arm together, an X inked across each palm, and says nothing at all.',
        },
      },
    },
    {
      episode: 886,
      value: {
        title: {
          it: 'Una voce alzata alla Reverie',
          en: 'A voice raised at the Reverie',
        },
        body: {
          it: 'Alla Reverie, il Nobile Mondiale Charlos fa trascinare via [[shirahoshi|Shirahoshi]] da uno schiavo per tenerla come animale domestico, mentre la famiglia reale degli Uomini di Mare e ogni delegato presente restano immobili, troppo spaventati dalla legge dei Draghi Celesti per muovere un dito. Bibi non riesce a tacere: dice in faccia a [[rob-lucci|Lucci]] che lasciare che un uomo ne possieda un altro solo perché nato come un dio non ha alcun senso, poi gli si scaglia contro lei stessa piuttosto che restare a guardare. Ci vuole un altro Nobile Mondiale, vergognoso della propria stessa gente, per abbattere Charlos prima che le guardie la raggiungano.',
          en: 'At the Reverie, a World Noble named Charlos has [[shirahoshi|Shirahoshi]] dragged off the street by a slave to keep as a pet, while Fish-Man royalty and every delegate present stand frozen, too afraid of Celestial Dragon law to move a finger. Vivi cannot stay quiet: she tells [[rob-lucci|Lucci]] to his face that letting one man own another just because he was born a god makes no sense at all, then lunges at him herself rather than watch it happen. It takes another World Noble, one ashamed of his own kind, to strike Charlos down before the guards can reach her.',
        },
      },
    },
    {
      episode: 1120,
      value: {
        title: {
          it: 'Fuori dai denti di Wapol',
          en: "Out through Wapol's teeth",
        },
        body: {
          it: "La notizia della sorte di suo padre non l'ha ancora raggiunta quando CP0 le spiega, con calma assoluta, che intendono venderla come proprietà a un Nobile Mondiale anche lei. Poi il muro accanto a lei semplicemente si apre: [[wapol|Wapol]], in fuga dal proprio stesso panico, l'ha masticato da parte a parte. Bibi si libera attraverso il buco nelle sue fauci prima che gli agenti possano reagire, e i due attraversano insieme la Terra Santa nascosti dentro una cassa da carico, una principessa in fuga che deve la propria salvezza proprio all'uomo che un tempo vide [[monkey-d-luffy|Rufy]] scacciare dal suo stesso regno.",
          en: 'Word of her father’s fate has not yet reached her when CP0 explains, quite calmly, that they mean to sell her off as property to some World Noble too. Then the wall beside her simply comes apart: [[wapol|Wapol]], fleeing in a panic of his own, has chewed straight through the stone. Vivi slips free through the hole in his jaws before the agents can react, and the two of them cross the Holy Land hidden together inside a cargo crate, a fugitive princess owing her escape to the very man she once watched [[monkey-d-luffy|Luffy]] drive out of his own kingdom.',
        },
      },
    },
  ],
  'crocodile': [
    {
      episode: 92,
      value: {
        title: {
          it: 'Una commissione di un pomeriggio',
          en: 'An afternoon errand',
        },
        body: {
          it: "Un capitano pirata ha attraccato a Nanohana e lascia che la sua ciurma saccheggi la città in pace, sicuro che nessuno nei paraggi possa toccarlo. Crocodile lo smentisce senza alzare la voce: arriva a piedi, dice a chi tiene alla vita di stendersi a terra, e lascia che i pirati lo pugnalino inutilmente prima di rispondere con un ciclone di sabbia. Quando si dirada, l'intera ciurma giace morta, prosciugata fino alle ossa e mezza sepolta dove si trovava. Se ne sta già andando quando la guardia reale arriva sulla scena, la commissione di un pomeriggio per un membro della Flotta contro pirati che non hanno mai avuto scampo.",
          en: 'A pirate captain has made port at Nanohana and let his crew loot the town in peace, confident that nobody nearby can touch him. Crocodile proves him wrong without raising his voice: he walks in on foot, tells anyone who values his life to lie down, and lets the pirates stab him uselessly before answering with a spinning cyclone of sand. When it clears, the whole crew lies dead, drained bone-dry and half-buried where they stood. He is already leaving by the time the royal guard reaches the scene, one Warlord’s afternoon errand against pirates who never stood a chance.',
        },
      },
    },
    {
      episode: 108,
      value: {
        title: { it: 'La chiave e l’allagamento', en: 'The key and the flood' },
        body: {
          it: "Rinchiusa la ciurma insieme al resto degli ostaggi, mentre [[nefertari-vivi|Bibi]] resta legata da sola nel suo casinò, Crocodile le fa dondolare davanti la chiave della gabbia abbastanza a lungo perché lei quasi riesca ad afferrarla, poi se la lascia scivolare dalle dita apposta. Cade attraverso una botola in una fossa di Bananawani, che la ingoiano intera. Concede a chiunque sia rimasto nella sua sala VIP un'ora di vita mentre la stanza si allaga lentamente, e si volta per andarsene senza un'ombra di preoccupazione, finché una voce sconosciuta sulla sua lumaca telefonica non lo costringe a restare ancora un po'.",
          en: 'Locked away with the rest of the crew while [[nefertari-vivi|Vivi]] alone stays tied up in his casino, Crocodile dangles the cage key in front of her just long enough for her to almost reach it, then lets it slip through his own fingers on purpose. It falls through a trapdoor into a pit of Bananawani, who swallow it whole. He gives everyone left in his VIP room one hour to live as the chamber slowly floods, and turns to leave without a flicker of concern, until an unfamiliar voice on his responder snail forces him to stay a little longer.',
        },
      },
    },
    {
      episode: 111,
      value: {
        title: {
          it: 'Sepolto nelle sabbie mobili',
          en: 'Buried in the quicksand',
        },
        body: {
          it: "Tre minuti sono tutto il divertimento che [[monkey-d-luffy|Rufy]] merita ai suoi occhi; quando la clessidra finisce, Crocodile smette di giocare, prosciuga l'acqua dal suo braccio, lo trafigge e lo seppellisce vivo nelle sabbie mobili fuori Alubarna. Prima di andarsene, solleva un'altra tempesta di sabbia, puntata a sud verso la città di Yuba, solo per completare quello che la siccità su Alabasta aveva già iniziato. Se ne va convinto che il ragazzo sia finito. Non sa che l'acqua sta già tornando a scorrere a Yuba, né che un braccio testardo sta per trascinarsi fuori dalla sabbia proprio alle sue spalle.",
          en: 'Three minutes is all the amusement [[monkey-d-luffy|Luffy]] is worth to him; when the timer runs out, Crocodile stops playing, drains the water clean out of his arm, impales him, and buries him alive in the quicksand outside Alubarna. Before leaving, he raises one more sandstorm, aimed south at the town of Yuba, purely to finish what the drought over Alabasta had already started. He walks away certain the boy is finished. He has no idea that water is already flowing back into Yuba, or that a stubborn arm is about to drag itself out of the sand behind him.',
        },
      },
    },
    {
      episode: 126,
      value: {
        title: {
          it: 'Attraverso il soffitto, nella pioggia',
          en: 'Through the ceiling, into the rain',
        },
        body: {
          it: 'Sottoterra, nella tomba reale che crolla, Crocodile crede di aver già vinto: [[nefertari-cobra|Cobra]], Miss All Sunday e persino [[monkey-d-luffy|Rufy]] giacciono immobili intorno a lui. Poi Rufy si rialza. Il suo uncino, la sua sabbia, ogni trucco che possiede non spiegano come un ragazzo che ha avvelenato e sepolto due volte sia ancora in piedi, tanto meno che riesca a colpirlo tanto forte da scaraventarlo tra le rovine. Rufy alla fine lo scaglia attraverso il soffitto e per centinaia di metri nel cielo sopra Alubarna. Ricade a pezzi in strada, e per la prima volta in tre anni comincia a piovere sulla città che ha cercato di conquistare.',
          en: 'Underground, in the crumbling royal tomb, Crocodile believes he has already won: [[nefertari-cobra|Cobra]], Miss All Sunday and even [[monkey-d-luffy|Luffy]] all lie still around him. Then Luffy gets up. Crocodile’s hook, his sand, every trick he owns fail to explain how a boy he poisoned and buried twice is still standing, let alone landing punches that send him through the ruins. Luffy finally drives him clean through the ceiling and hundreds of feet into the sky above Alubarna. He comes down broken in the street below, and for the first time in three years, rain begins to fall on the city he tried to take.',
        },
      },
    },
    {
      episode: 475,
      value: {
        title: {
          it: 'Un signore della guerra che non si allea con nessuno',
          en: 'A warlord who teams up with nobody',
        },
        body: {
          it: "A Marineford, Sengoku ordina che l'esecuzione proceda non appena le forze di Barbabianca raggiungono la piazza, e i boia alzano le lame su [[portgas-d-ace|Ace]]. Prima che possano calare, un'ondata di sabbia dall'altro capo della piazza li spazza via dalla piattaforma. Crocodile non offre alleanza né scuse: si rifiuta soltanto di lasciare che i marine vincano così a buon mercato, e quando [[donquixote-doflamingo|Do Flamingo]] lo deride per l'interferenza, risponde che non si allea con nessuno, tanto meno con Barbabianca. Quali che siano le sue ragioni, un'esecuzione che doveva concludersi in pochi secondi si è appena guadagnata un po' più di tempo.",
          en: 'At Marineford, Sengoku orders the execution to proceed the moment Whitebeard’s forces reach the plaza, and the executioners raise their blades over [[portgas-d-ace|Ace]]. Before the swords can fall, a wave of sand from across the square knocks them clean off the platform. Crocodile offers no ally and no apology: he simply refuses to let the Marines win this cheaply, and when [[donquixote-doflamingo|Doflamingo]] mocks him for the interference, he answers that he is teaming up with nobody, least of all Whitebeard. Whatever his reasons, an execution due to finish in seconds has just bought itself a little more time.',
        },
      },
    },
    {
      episode: 1086,
      value: {
        title: {
          it: 'Capo Ufficiale della gilda di un pagliaccio',
          en: "Chief Officer of a clown's guild",
        },
        body: {
          it: "A Karai Bari arriva la notizia che dei volantini per qualcosa chiamato Cross Guild circolano con [[buggy|Bagy]] al centro, più grande in ogni immagine dei due uomini che in realtà la dirigono. Crocodile e [[dracule-mihawk|Mihawk]] arrivano pronti a ucciderlo per l'umiliazione, finché non notano cosa hanno ottenuto davvero quei manifesti: dipingere un pagliaccio innocuo come il nuovo Imperatore del Mare, lasciando loro la libertà di agire nell'ombra come suoi Capi Ufficiali. Decidono insieme che una gilda di cacciatori di taglie costruita sulla faccia di qualcun altro gli va benissimo, e lasciano a Bagy la vita e il suo nuovo titolo.",
          en: 'Word reaches Karai Bari Island that flyers for something called Cross Guild have been circulating with [[buggy|Buggy]] front and centre, larger in every picture than either of the two men who actually run it. Crocodile and [[dracule-mihawk|Mihawk]] arrive ready to kill him for the humiliation, until they notice what the posters have actually done: painted an unthreatening clown as the newest Emperor of the Sea, and left themselves free to work from the shadows as its Chief Officers. Together they decide a bounty-hunting guild built on someone else’s face suits them just fine, and let Buggy keep his life and his new title.',
        },
      },
    },
  ],
} satisfies Readonly<Record<string, Timeline<Story>>>
