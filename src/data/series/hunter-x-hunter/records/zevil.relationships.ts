import type { Relationship, Timeline } from '~/data/types'

/** Facts and threshold revisions: docs/content-provenance/hunter-x-hunter-relationships.json. */
const links = {
  gozHisoka: {
    character: 'hisoka',
    type: { en: 'Applicant he challenges', it: 'Aspirante che sfida' },
    summary: {
      en: 'Badly wounded, Goz challenges Hisoka to a last duel, but Hisoka only dodges and will not fight a dying man.',
      it: 'Gravemente ferito, Gozu sfida Hisoka a un ultimo duello, ma Hisoka si limita a schivare e non vuole combattere con chi sta già morendo.',
    },
  },
  gozGittarackur: {
    character: 'gittarackur',
    type: { en: 'Applicant who kills him', it: 'Aspirante che lo uccide' },
    summary: {
      en: 'Gittarackur lets the wounded Goz get away, then kills him with needles when he charges Hisoka, and takes his badge.',
      it: 'Ghitarakur lascia fuggire Gozu ferito, poi lo uccide con i suoi aghi mentre carica Hisoka e gli prende la targhetta.',
    },
  },
  gozIllumi: {
    character: 'illumi',
    type: { en: 'Applicant who kills him', it: 'Aspirante che lo uccide' },
    summary: {
      en: 'Illumi, taking the exam as Gittarackur, lets the wounded Goz get away, then kills him with needles when he charges Hisoka.',
      it: 'Illumi, iscritto all’esame come Ghitarakur, lascia fuggire Gozu ferito, poi lo uccide con i suoi aghi mentre carica Hisoka.',
    },
  },
  agonHisoka: {
    character: 'hisoka',
    type: { en: 'Applicant who kills him', it: 'Aspirante che lo uccide' },
    summary: {
      en: 'Hisoka picks Agon as his prey and kills him with a playing card as they pass each other.',
      it: 'Hisoka sceglie Agon come preda e lo uccide con una carta da gioco mentre si incrociano.',
    },
  },
  siperGittarackur: {
    character: 'gittarackur',
    type: { en: 'Target who kills her', it: 'Bersaglio che la uccide' },
    summary: {
      en: 'Siper draws Gittarackur’s number and hunts him with her rifle, and he kills her for it.',
      it: 'Super estrae il numero di Ghitarakur e gli dà la caccia con il suo fucile, e lui la uccide per questo.',
    },
  },
  siperIllumi: {
    character: 'illumi',
    type: { en: 'Target who kills her', it: 'Bersaglio che la uccide' },
    summary: {
      en: 'Siper hunts Illumi, who is taking the exam as Gittarackur, with her rifle, and he kills her for it.',
      it: 'Super dà la caccia con il fucile a Illumi, iscritto all’esame come Ghitarakur, e lui la uccide per questo.',
    },
  },
  ryuBodoro: {
    character: 'bodoro',
    type: { en: 'Applicant who defeats him', it: 'Aspirante che lo sconfigge' },
    summary: {
      en: 'On Zevil Island Ryu fights Bodoro and loses, so he fails the Fourth Phase.',
      it: 'Sull’Isola di Zevil Ryu affronta Bodoro e perde, e così non supera la quarta prova.',
    },
  },
  kyuPokkle: {
    character: 'pokkle',
    type: {
      en: 'Applicant who hunts him',
      it: 'Aspirante che gli dà la caccia',
    },
    summary: {
      en: 'Pokkle, who has drawn Kyu’s number, grazes him with a drugged arrow and takes his badge.',
      it: 'Pockul, che ha estratto il numero di Kyu, lo colpisce di striscio con una freccia drogata e gli prende la targhetta.',
    },
  },
  kyuGon: {
    character: 'gon-freecss',
    type: { en: 'Applicant who helps him', it: 'Aspirante che lo aiuta' },
    summary: {
      en: 'Gon finds Kyu still weak from the drug and helps him sit up against a tree.',
      it: 'Gon trova Kyu ancora debole per la droga e lo aiuta a mettersi seduto contro un albero.',
    },
  },
  shishitoAmori: {
    character: 'amori',
    type: {
      en: 'Applicant who takes his badge',
      it: 'Aspirante che gli prende la targhetta',
    },
    summary: {
      en: 'Amori and his brother Umori hunt Shishito down and take his badge.',
      it: 'Amori e suo fratello Umori danno la caccia a Shishito e gli prendono la targhetta.',
    },
  },
  shishitoUmori: {
    character: 'umori',
    type: {
      en: 'Applicant who takes his badge',
      it: 'Aspirante che gli prende la targhetta',
    },
    summary: {
      en: 'Umori and his brother Amori hunt Shishito down and take his badge.',
      it: 'Umori e suo fratello Amori danno la caccia a Shishito e gli prendono la targhetta.',
    },
  },
  shishitoHanzo: {
    character: 'hanzo',
    type: {
      en: 'Applicant who ends up with his badge',
      it: 'Aspirante che si ritrova la sua targhetta',
    },
    summary: {
      en: 'Hanzo takes the badges the brothers have left, so Shishito’s badge ends up with him.',
      it: 'Hanzo prende le targhette rimaste ai fratelli, e così quella di Shishito finisce a lui.',
    },
  },
  kenmiAmori: {
    character: 'amori',
    type: {
      en: 'Applicant who takes his badge',
      it: 'Aspirante che gli prende la targhetta',
    },
    summary: {
      en: 'Amori and his brother Umori hunt Kenmi down and take his badge.',
      it: 'Amori e suo fratello Umori danno la caccia a Kenmi e gli prendono la targhetta.',
    },
  },
  kenmiUmori: {
    character: 'umori',
    type: {
      en: 'Applicant who takes his badge',
      it: 'Aspirante che gli prende la targhetta',
    },
    summary: {
      en: 'Umori and his brother Amori hunt Kenmi down and take his badge.',
      it: 'Umori e suo fratello Amori danno la caccia a Kenmi e gli prendono la targhetta.',
    },
  },
  kenmiHanzo: {
    character: 'hanzo',
    type: {
      en: 'Applicant who ends up with his badge',
      it: 'Aspirante che si ritrova la sua targhetta',
    },
    summary: {
      en: 'Hanzo takes the badges the brothers have left, so Kenmi’s badge ends up with him.',
      it: 'Hanzo prende le targhette rimaste ai fratelli, e così quella di Kenmi finisce a lui.',
    },
  },
  sommyLeorio: {
    character: 'leorio-paradinight',
    type: { en: 'Applicant he robs', it: 'Aspirante che deruba' },
    summary: {
      en: 'Sommy jumps Leorio from behind with a branch, and his monkey grabs Leorio’s badge.',
      it: 'Somy aggredisce Leorio alle spalle con un ramo e la sua scimmia afferra la targhetta di Leorio.',
    },
  },
  sommyTonpa: {
    character: 'tonpa',
    type: { en: 'Partner', it: 'Complice' },
    summary: {
      en: 'Sommy and Tonpa swap their cards to trick Leorio, who is Tonpa’s target.',
      it: 'Somy e Tonpa si scambiano le carte per ingannare Leorio, che è il bersaglio di Tonpa.',
    },
  },
  sommyLeorioCaught: {
    character: 'leorio-paradinight',
    type: {
      en: 'Applicant he robs, who catches him',
      it: 'Aspirante che deruba e che poi lo cattura',
    },
    summary: {
      en: 'After the ambush, Leorio and Kurapika find Sommy, tie him up and take back Leorio’s badge along with Sommy’s.',
      it: 'Dopo l’agguato, Leorio e Kurapika ritrovano Somy, lo legano e si riprendono la targhetta di Leorio insieme a quella di Somy.',
    },
  },
  sommyKurapika: {
    character: 'kurapika',
    type: { en: 'Applicant who catches him', it: 'Aspirante che lo cattura' },
    summary: {
      en: 'Kurapika helps Leorio catch Sommy and tie him up, and they take his badge.',
      it: 'Kurapika aiuta Leorio a catturare Somy e a legarlo, e insieme gli prendono la targhetta.',
    },
  },
  gittarackurHisoka: {
    character: 'hisoka',
    type: { en: 'Applicant he already knows', it: 'Aspirante che conosce già' },
    summary: {
      en: 'During the Fourth Phase he meets Hisoka, whom he already knows, and gives him another applicant’s badge.',
      it: 'Durante la quarta prova incontra Hisoka, che conosce già, e gli dà la targhetta di un altro aspirante.',
    },
  },
  gittarackurGoz: {
    character: 'goz',
    type: { en: 'Target he kills', it: 'Bersaglio che uccide' },
    summary: {
      en: 'He lets the wounded Goz get away, then kills him with needles and takes his badge.',
      it: 'Lascia fuggire Gozu ferito, poi lo uccide con i suoi aghi e gli prende la targhetta.',
    },
  },
  gittarackurSiper: {
    character: 'siper',
    type: { en: 'Applicant he kills', it: 'Aspirante che uccide' },
    summary: {
      en: 'Siper hunts him with a rifle, so he kills her and gives her badge to Hisoka.',
      it: 'Super gli dà la caccia con un fucile, così lui la uccide e consegna la sua targhetta a Hisoka.',
    },
  },
  amoriUmori: {
    character: 'umori',
    type: { en: 'Younger brother', it: 'Fratello minore' },
    summary: {
      en: 'Amori and his younger brothers taunt the exhausted Nicholas together during the First Phase run.',
      it: 'Amori e i suoi fratelli minori deridono insieme Nicole, ormai esausto, durante la corsa della prima prova.',
    },
  },
  amoriImori: {
    character: 'imori',
    type: { en: 'Younger brother', it: 'Fratello minore' },
    summary: {
      en: 'Amori and his younger brothers taunt the exhausted Nicholas together during the First Phase run.',
      it: 'Amori e i suoi fratelli minori deridono insieme Nicole, ormai esausto, durante la corsa della prima prova.',
    },
  },
  amoriTonpa: {
    character: 'tonpa',
    type: { en: 'Veteran who pays them', it: 'Veterano che li paga' },
    summary: {
      en: 'Tonpa pays Amori and his brothers for wearing down Nicholas during the First Phase.',
      it: 'Tonpa paga Amori e i suoi fratelli per aver sfinito Nicole durante la prima prova.',
    },
  },
  amoriNicholas: {
    character: 'nicholas',
    type: { en: 'Rookie they taunt', it: 'Esordiente che deridono' },
    summary: {
      en: 'During the First Phase run, Amori and his brothers taunt the exhausted Nicholas.',
      it: 'Durante la corsa della prima prova, Amori e i suoi fratelli deridono Nicole, ormai esausto.',
    },
  },
  amoriUmoriZevil: {
    character: 'umori',
    type: { en: 'Younger brother', it: 'Fratello minore' },
    summary: {
      en: 'Umori hunts alongside Amori on Zevil Island and gives up his badge to Killua when Amori is taken hostage.',
      it: 'Umori caccia insieme ad Amori sull’Isola di Zevil e cede la sua targhetta a Killua quando Amori viene preso in ostaggio.',
    },
  },
  amoriImoriZevil: {
    character: 'imori',
    type: { en: 'Younger brother', it: 'Fratello minore' },
    summary: {
      en: 'Amori scolds Imori for not having taken Killua’s badge yet and forces him to attack.',
      it: 'Amori rimprovera Imori perché non ha ancora preso la targhetta di Killua e lo costringe ad attaccare.',
    },
  },
  amoriKillua: {
    character: 'killua',
    type: {
      en: 'Boy who takes him hostage',
      it: 'Ragazzo che lo prende in ostaggio',
    },
    summary: {
      en: 'Killua takes Amori hostage, gets the badge he needs from Umori and throws Amori’s badge far away.',
      it: 'Killua prende Amori in ostaggio, si fa dare da Umori la targhetta che gli serve e lancia lontano quella di Amori.',
    },
  },
  umoriAmori: {
    character: 'amori',
    type: { en: 'Older brother', it: 'Fratello maggiore' },
    summary: {
      en: 'Umori and his two brothers taunt the exhausted Nicholas together during the First Phase run.',
      it: 'Umori e i suoi due fratelli deridono insieme Nicole, ormai esausto, durante la corsa della prima prova.',
    },
  },
  umoriImori: {
    character: 'imori',
    type: { en: 'Younger brother', it: 'Fratello minore' },
    summary: {
      en: 'Umori and his two brothers taunt the exhausted Nicholas together during the First Phase run.',
      it: 'Umori e i suoi due fratelli deridono insieme Nicole, ormai esausto, durante la corsa della prima prova.',
    },
  },
  umoriTonpa: {
    character: 'tonpa',
    type: { en: 'Veteran who pays them', it: 'Veterano che li paga' },
    summary: {
      en: 'Tonpa pays Umori and his brothers for wearing down Nicholas during the First Phase.',
      it: 'Tonpa paga Umori e i suoi fratelli per aver sfinito Nicole durante la prima prova.',
    },
  },
  umoriNicholas: {
    character: 'nicholas',
    type: { en: 'Rookie they taunt', it: 'Esordiente che deridono' },
    summary: {
      en: 'During the First Phase run, Umori and his brothers taunt the exhausted Nicholas.',
      it: 'Durante la corsa della prima prova, Umori e i suoi fratelli deridono Nicole, ormai esausto.',
    },
  },
  umoriAmoriZevil: {
    character: 'amori',
    type: { en: 'Older brother', it: 'Fratello maggiore' },
    summary: {
      en: 'When Killua holds Amori hostage, Umori hands over his badge, the one Killua was after.',
      it: 'Quando Killua tiene Amori in ostaggio, Umori gli consegna la sua targhetta, proprio quella che Killua cercava.',
    },
  },
  umoriImoriZevil: {
    character: 'imori',
    type: { en: 'Younger brother', it: 'Fratello minore' },
    summary: {
      en: 'Umori and Amori find Imori still hiding from Killua and push him to attack.',
      it: 'Umori e Amori trovano Imori ancora nascosto davanti a Killua e lo spingono ad attaccare.',
    },
  },
  umoriKillua: {
    character: 'killua',
    type: {
      en: 'Boy who takes his badge',
      it: 'Ragazzo che gli prende la targhetta',
    },
    summary: {
      en: 'Killua’s target is Umori’s badge, and Umori gives it up after Killua takes Amori hostage.',
      it: 'Il bersaglio di Killua è la targhetta di Umori, che la consegna dopo che Killua ha preso Amori in ostaggio.',
    },
  },
  imoriAmori: {
    character: 'amori',
    type: { en: 'Older brother', it: 'Fratello maggiore' },
    summary: {
      en: 'Imori and his two older brothers taunt the exhausted Nicholas together during the First Phase run.',
      it: 'Imori e i suoi due fratelli maggiori deridono insieme Nicole, ormai esausto, durante la corsa della prima prova.',
    },
  },
  imoriUmori: {
    character: 'umori',
    type: { en: 'Older brother', it: 'Fratello maggiore' },
    summary: {
      en: 'Imori and his two older brothers taunt the exhausted Nicholas together during the First Phase run.',
      it: 'Imori e i suoi due fratelli maggiori deridono insieme Nicole, ormai esausto, durante la corsa della prima prova.',
    },
  },
  imoriTonpa: {
    character: 'tonpa',
    type: { en: 'Veteran who pays them', it: 'Veterano che li paga' },
    summary: {
      en: 'Tonpa pays Imori and his brothers for wearing down Nicholas during the First Phase.',
      it: 'Tonpa paga Imori e i suoi fratelli per aver sfinito Nicole durante la prima prova.',
    },
  },
  imoriNicholas: {
    character: 'nicholas',
    type: { en: 'Rookie they taunt', it: 'Esordiente che deridono' },
    summary: {
      en: 'During the First Phase run, Imori and his brothers taunt the exhausted Nicholas.',
      it: 'Durante la corsa della prima prova, Imori e i suoi fratelli deridono Nicole, ormai esausto.',
    },
  },
  imoriAmoriZevil: {
    character: 'amori',
    type: { en: 'Older brother', it: 'Fratello maggiore' },
    summary: {
      en: 'Amori finds Imori still hiding from Killua, scolds him and forces him to attack.',
      it: 'Amori trova Imori ancora nascosto davanti a Killua, lo rimprovera e lo costringe ad attaccare.',
    },
  },
  imoriUmoriZevil: {
    character: 'umori',
    type: { en: 'Older brother', it: 'Fratello maggiore' },
    summary: {
      en: 'Umori joins Amori in scolding Imori and forcing him to attack Killua.',
      it: 'Umori si unisce ad Amori nel rimproverare Imori e nel costringerlo ad attaccare Killua.',
    },
  },
  imoriKillua: {
    character: 'killua',
    type: { en: 'Boy he stalks', it: 'Ragazzo che pedina' },
    summary: {
      en: 'Imori stalks Killua without daring to attack, kicks him when his brothers force him, and loses his own badge to him.',
      it: 'Imori pedina Killua senza osare attaccarlo, lo colpisce con un calcio quando i fratelli lo costringono e si fa prendere da lui la propria targhetta.',
    },
  },
  ponzuBourbon: {
    character: 'bourbon',
    type: {
      en: 'Applicant whose trap holds her',
      it: 'Aspirante la cui trappola la blocca',
    },
    summary: {
      en: 'Bourbon’s snakes attack anyone who tries to leave his cave, so Ponzu is trapped there even though he is already dead.',
      it: 'I serpenti di Burbon attaccano chiunque cerchi di uscire dalla sua grotta, così Ponzu resta intrappolata anche se lui è già morto.',
    },
  },
  ponzuLeorio: {
    character: 'leorio-paradinight',
    type: { en: 'Applicant hunting her', it: 'Aspirante che le dà la caccia' },
    summary: {
      en: 'Leorio, whose target she is, enters the cave where she is trapped and is bitten by the snakes.',
      it: 'Leorio, che ha lei come bersaglio, entra nella grotta dove è intrappolata e viene morso dai serpenti.',
    },
  },
  ponzuKurapika: {
    character: 'kurapika',
    type: { en: 'Applicant she warns', it: 'Aspirante che avverte' },
    summary: {
      en: 'When Kurapika runs into the cave, Ponzu tells him that the snakes attack anyone who tries to leave.',
      it: 'Quando Kurapika entra di corsa nella grotta, Ponzu gli spiega che i serpenti attaccano chiunque cerchi di uscire.',
    },
  },
  ponzuGon: {
    character: 'gon-freecss',
    type: {
      en: 'Applicant who tracks her',
      it: 'Aspirante che segue le sue tracce',
    },
    summary: {
      en: 'Gon follows the smell of her chemicals to the cave where she is trapped.',
      it: 'Gon segue l’odore delle sue sostanze chimiche fino alla grotta dove è intrappolata.',
    },
  },
  ponzuGonRescue: {
    character: 'gon-freecss',
    type: { en: 'Applicant who rescues her', it: 'Aspirante che la salva' },
    summary: {
      en: 'Gon trades her Bourbon’s badge for her sleeping gas, carries her out of the cave and keeps her own badge as a fee.',
      it: 'Gon le scambia la targhetta di Burbon con il suo gas soporifero, la porta fuori dalla grotta e si tiene la sua targhetta come compenso.',
    },
  },
  ponzuBourbonTarget: {
    character: 'bourbon',
    type: {
      en: 'Target she kills by accident',
      it: 'Bersaglio che uccide per sbaglio',
    },
    summary: {
      en: 'Bourbon is Ponzu’s target, and she kills him by accident with her bees.',
      it: 'Burbon è il bersaglio di Ponzu, che lo uccide per sbaglio con le sue api.',
    },
  },
  bourbonPonzu: {
    character: 'ponzu',
    type: { en: 'Applicant who kills him', it: 'Aspirante che lo uccide' },
    summary: {
      en: 'Ponzu has Bourbon as her target and kills him by accident with her bees in his cave.',
      it: 'Ponzu ha Burbon come bersaglio e lo uccide per sbaglio con le sue api nella grotta.',
    },
  },
  pokkleKyu: {
    character: 'kyu',
    type: { en: 'Target he drugs', it: 'Bersaglio che droga' },
    summary: {
      en: 'Pokkle stalks Kyu, grazes him with a drugged arrow and takes his badge.',
      it: 'Pockul pedina Kyu, lo colpisce di striscio con una freccia drogata e gli prende la targhetta.',
    },
  },
  pokkleKurapika: {
    character: 'kurapika',
    type: {
      en: 'Applicant who interests him most',
      it: 'Aspirante che lo interessa di più',
    },
    summary: {
      en: 'In his interview with Netero, Pokkle names Kurapika as the applicant who interests him most.',
      it: 'Nel colloquio con Netero, Pockul indica Kurapika come l’aspirante che lo interessa di più.',
    },
  },
  pokkleHisoka: {
    character: 'hisoka',
    type: {
      en: 'Applicant he would rather not face',
      it: 'Aspirante che preferirebbe non affrontare',
    },
    summary: {
      en: 'In his interview, Pokkle says he would rather not fight Hisoka because he would stand no chance.',
      it: 'Nel colloquio, Pockul dice che preferirebbe non affrontare Hisoka perché non avrebbe speranze.',
    },
  },
  pokkleHanzo: {
    character: 'hanzo',
    type: {
      en: 'Opponent he surrenders to',
      it: 'Avversario a cui si arrende',
    },
    summary: {
      en: 'In the Final Phase Hanzo threatens Pokkle with the same treatment he gave Gon, and Pokkle surrenders.',
      it: 'Nella prova finale Hanzo minaccia Pockul di riservargli lo stesso trattamento subito da Gon, e Pockul si arrende.',
    },
  },
  pokkleKillua: {
    character: 'killua',
    type: {
      en: 'Opponent who forfeits to him',
      it: 'Avversario che gli lascia la vittoria',
    },
    summary: {
      en: 'Killua forfeits their match without fighting, which gives Pokkle the win he needs to pass.',
      it: 'Killua rinuncia al loro incontro senza combattere, e così Pockul ottiene la vittoria che gli serve per passare.',
    },
  },
  pokkleKurapikaQuestioned: {
    character: 'kurapika',
    type: {
      en: 'Applicant whose win he questions',
      it: 'Aspirante di cui contesta la vittoria',
    },
    summary: {
      en: 'Pokkle questions Kurapika’s win over Hisoka in front of the new Hunters, then apologizes to him before leaving.',
      it: 'Pockul contesta davanti ai nuovi Hunter la vittoria di Kurapika su Hisoka, poi gli chiede scusa prima di andarsene.',
    },
  },
  bodoroHisoka: {
    character: 'hisoka',
    type: {
      en: 'Applicant who interests him most',
      it: 'Aspirante che lo interessa di più',
    },
    summary: {
      en: 'In his interview with Netero, Bodoro names Hisoka as the applicant who interests him most.',
      it: 'Nel colloquio con Netero, Bodoro indica Hisoka come l’aspirante che lo interessa di più.',
    },
  },
  bodoroKillua: {
    character: 'killua',
    type: {
      en: 'Child he will not fight',
      it: 'Ragazzino che non vuole affrontare',
    },
    summary: {
      en: 'Bodoro tells Netero he would rather not fight Killua, because he does not fight children.',
      it: 'Bodoro dice a Netero che preferirebbe non affrontare Killua, perché non combatte contro i bambini.',
    },
  },
  bodoroGon: {
    character: 'gon-freecss',
    type: {
      en: 'Child he will not fight',
      it: 'Ragazzino che non vuole affrontare',
    },
    summary: {
      en: 'Bodoro tells Netero he would rather not fight Gon, because he does not fight children.',
      it: 'Bodoro dice a Netero che preferirebbe non affrontare Gon, perché non combatte contro i bambini.',
    },
  },
  bodoroRyu: {
    character: 'ryu',
    type: { en: 'Applicant he defeats', it: 'Aspirante che sconfigge' },
    summary: {
      en: 'On Zevil Island Bodoro fights Ryu and beats him.',
      it: 'Sull’Isola di Zevil Bodoro affronta Ryu e lo sconfigge.',
    },
  },
  bodoroKilluaKills: {
    character: 'killua',
    type: { en: 'Boy who kills him', it: 'Ragazzo che lo uccide' },
    summary: {
      en: 'As Bodoro’s match against Leorio begins, Killua kills him from behind.',
      it: 'All’inizio dell’incontro di Bodoro con Leorio, Killua lo uccide alle spalle.',
    },
  },
  bodoroHisokaBeats: {
    character: 'hisoka',
    type: { en: 'Opponent who beats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Hisoka beats Bodoro in the Final Phase, and Bodoro yields only after Hisoka whispers something to him.',
      it: 'Hisoka sconfigge Bodoro nella prova finale, e Bodoro si arrende solo dopo che Hisoka gli ha sussurrato qualcosa.',
    },
  },
  bodoroLeorio: {
    character: 'leorio-paradinight',
    type: {
      en: 'Opponent in his last match',
      it: 'Avversario del suo ultimo incontro',
    },
    summary: {
      en: 'Bodoro’s match against Leorio is postponed because of his injuries, and he is killed as soon as it starts.',
      it: 'L’incontro di Bodoro con Leorio viene rinviato per le sue ferite, e lui viene ucciso appena comincia.',
    },
  },
} satisfies Record<string, Relationship>

export const zevilRelationships = {
  goz: [
    { episode: 15, chapter: 26, source: 'chapter', value: [links.gozHisoka] },
    // Delayed to chapter 33: the manga first names Gittarackur on the bracket.
    {
      episode: 19,
      chapter: 33,
      source: 'chapter',
      value: [links.gozGittarackur, links.gozHisoka],
    },
    // Gittarackur→Illumi swap once the disguise comes off (chapter 35).
    {
      episode: 20,
      chapter: 35,
      source: 'chapter',
      value: [links.gozIllumi, links.gozHisoka],
    },
  ],
  agon: [
    { episode: 16, chapter: 28, source: 'chapter', value: [links.agonHisoka] },
  ],
  siper: [
    // Delayed to chapter 33: the manga first names Gittarackur on the bracket.
    {
      episode: 19,
      chapter: 33,
      source: 'chapter',
      value: [links.siperGittarackur],
    },
    // Gittarackur→Illumi swap once the disguise comes off (chapter 35).
    { episode: 20, chapter: 35, source: 'chapter', value: [links.siperIllumi] },
  ],
  ryu: [
    // Delayed to chapter 33: the loss is chapter 32, Bodoro is named at 33.
    { episode: 19, chapter: 33, source: 'chapter', value: [links.ryuBodoro] },
  ],
  kyu: [
    { episode: 14, chapter: 24, source: 'chapter', value: [links.kyuPokkle] },
    {
      episode: 15,
      chapter: 25,
      source: 'chapter',
      value: [links.kyuPokkle, links.kyuGon],
    },
  ],
  shishito: [
    {
      episode: 17,
      chapter: 29,
      source: 'chapter',
      value: [links.shishitoAmori, links.shishitoUmori],
    },
    {
      episode: 18,
      chapter: 32,
      source: 'chapter',
      value: [links.shishitoAmori, links.shishitoUmori, links.shishitoHanzo],
    },
  ],
  kenmi: [
    {
      episode: 17,
      chapter: 29,
      source: 'chapter',
      value: [links.kenmiAmori, links.kenmiUmori],
    },
    {
      episode: 18,
      chapter: 32,
      source: 'chapter',
      value: [links.kenmiAmori, links.kenmiUmori, links.kenmiHanzo],
    },
  ],
  sommy: [
    {
      episode: 15,
      chapter: 25,
      source: 'chapter',
      value: [links.sommyLeorio, links.sommyTonpa],
    },
    {
      episode: 15,
      chapter: 26,
      source: 'chapter',
      value: [links.sommyLeorioCaught, links.sommyTonpa, links.sommyKurapika],
    },
  ],
  gittarackur: [
    // Anime only: Goz and Siper are never named in the 2011 anime. The
    // chapter only orders it.
    {
      episode: 19,
      chapter: 33,
      source: 'episode',
      value: [links.gittarackurHisoka],
    },
    // Manga only: the Fourth Phase kills, at Gittarackur's chapter-33 gate.
    {
      episode: 19,
      chapter: 33,
      source: 'chapter',
      value: [
        links.gittarackurHisoka,
        links.gittarackurGoz,
        links.gittarackurSiper,
      ],
    },
  ],
  amori: [
    // Anime only: the 2011 anime names the brothers at episode 3, the manga at
    // chapter 29; the chapter only orders it.
    {
      episode: 4,
      chapter: 29,
      source: 'episode',
      value: [
        links.amoriUmori,
        links.amoriImori,
        links.amoriTonpa,
        links.amoriNicholas,
      ],
    },
    {
      episode: 17,
      chapter: 29,
      value: [
        links.amoriUmoriZevil,
        links.amoriImoriZevil,
        links.amoriKillua,
        links.amoriTonpa,
        links.amoriNicholas,
      ],
    },
  ],
  umori: [
    // Anime only: the 2011 anime names the brothers at episode 3, the manga at
    // chapter 29; the chapter only orders it.
    {
      episode: 4,
      chapter: 29,
      source: 'episode',
      value: [
        links.umoriAmori,
        links.umoriImori,
        links.umoriTonpa,
        links.umoriNicholas,
      ],
    },
    {
      episode: 17,
      chapter: 29,
      value: [
        links.umoriAmoriZevil,
        links.umoriImoriZevil,
        links.umoriKillua,
        links.umoriTonpa,
        links.umoriNicholas,
      ],
    },
  ],
  imori: [
    // Anime only: the 2011 anime names the brothers at episode 3, the manga at
    // chapter 29; the chapter only orders it.
    {
      episode: 4,
      chapter: 29,
      source: 'episode',
      value: [
        links.imoriAmori,
        links.imoriUmori,
        links.imoriTonpa,
        links.imoriNicholas,
      ],
    },
    {
      episode: 17,
      chapter: 29,
      value: [
        links.imoriAmoriZevil,
        links.imoriUmoriZevil,
        links.imoriKillua,
        links.imoriTonpa,
        links.imoriNicholas,
      ],
    },
  ],
  ponzu: [
    {
      episode: 17,
      chapter: 30,
      value: [
        links.ponzuBourbon,
        links.ponzuLeorio,
        links.ponzuKurapika,
        links.ponzuGon,
      ],
    },
    {
      episode: 18,
      chapter: 31,
      value: [
        links.ponzuGonRescue,
        links.ponzuBourbonTarget,
        links.ponzuLeorio,
        links.ponzuKurapika,
      ],
    },
  ],
  bourbon: [
    // Delayed to 18 / 31: chapter 30 only says he is dead; who killed him and
    // why is chapter 31 (episode 17 says it a step earlier).
    { episode: 18, chapter: 31, value: [links.bourbonPonzu] },
  ],
  pokkle: [
    // Manga only: Kyu is never named in the 2011 anime. The episode only
    // orders it and sits at Pokkle's anime gate.
    { episode: 18, chapter: 24, source: 'chapter', value: [links.pokkleKyu] },
    // Anime only: the interview; Kyu is named only in the manga, so the
    // manga keeps its own selections. The chapter only orders it.
    {
      episode: 18,
      chapter: 32,
      source: 'episode',
      value: [links.pokkleKurapika, links.pokkleHisoka],
    },
    // Manga only: the interview, keeping Kyu.
    {
      episode: 18,
      chapter: 32,
      source: 'chapter',
      value: [links.pokkleKurapika, links.pokkleHisoka, links.pokkleKyu],
    },
    // Anime only: the Final Phase matches (episode 20 adapts chapter 35).
    {
      episode: 20,
      chapter: 35,
      source: 'episode',
      value: [
        links.pokkleHanzo,
        links.pokkleKillua,
        links.pokkleKurapika,
        links.pokkleHisoka,
      ],
    },
    // Manga only: the same matches, keeping Kyu.
    {
      episode: 20,
      chapter: 35,
      source: 'chapter',
      value: [
        links.pokkleHanzo,
        links.pokkleKillua,
        links.pokkleKurapika,
        links.pokkleHisoka,
        links.pokkleKyu,
      ],
    },
    // Anime only: the challenge to Kurapika and the apology (episode 21).
    {
      episode: 21,
      chapter: 38,
      source: 'episode',
      value: [
        links.pokkleKurapikaQuestioned,
        links.pokkleKillua,
        links.pokkleHanzo,
        links.pokkleHisoka,
      ],
    },
    // Manga only: the apology is chapter 38, keeping Kyu.
    {
      episode: 21,
      chapter: 38,
      source: 'chapter',
      value: [
        links.pokkleKurapikaQuestioned,
        links.pokkleKillua,
        links.pokkleHanzo,
        links.pokkleHisoka,
        links.pokkleKyu,
      ],
    },
  ],
  bodoro: [
    // Anime only: the interview is episode 18, but the manga names Bodoro at
    // chapter 33; the chapter only orders it.
    {
      episode: 18,
      chapter: 33,
      source: 'episode',
      value: [links.bodoroHisoka, links.bodoroKillua, links.bodoroGon],
    },
    // Manga only: the interview at Bodoro's chapter-33 gate, with Ryu, whom
    // the anime never names.
    {
      episode: 19,
      chapter: 33,
      source: 'chapter',
      value: [
        links.bodoroHisoka,
        links.bodoroKillua,
        links.bodoroGon,
        links.bodoroRyu,
      ],
    },
    // Anime only: the Final Phase and his death (episode 20).
    {
      episode: 20,
      chapter: 36,
      source: 'episode',
      value: [
        links.bodoroKilluaKills,
        links.bodoroHisokaBeats,
        links.bodoroLeorio,
        links.bodoroGon,
      ],
    },
    // Manga only: the same, keeping Ryu.
    {
      episode: 20,
      chapter: 36,
      source: 'chapter',
      value: [
        links.bodoroKilluaKills,
        links.bodoroHisokaBeats,
        links.bodoroLeorio,
        links.bodoroGon,
        links.bodoroRyu,
      ],
    },
  ],
} satisfies Record<string, Timeline<Relationship[]>>
