/**
 * The half of the verification log the archive itself cannot hold: which wiki
 * page settles each story's episode, and what the verification passes found
 * there. The title and the episode are read from the chronicle data, so only
 * the research lives here, keyed by character id and then by episode.
 */
export const CHRONICLE_SOURCES = {
  'monkey-d-luffy': {
    1: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1',
      note: 'Threshold entry. Barrel, Koby, Alvida and the Pirate King line are all in episode 1.',
    },
    8: {
      source: 'https://onepiece.fandom.com/wiki/Episode_8',
      note: 'Buggy fires a Buggy Ball, Luffy deflects it with his rubber body; Buggy splits into pieces (Bara Bara Festival) trying to reclaim his treasure from Nami, she ropes his limbs, Luffy finishes him with Gomu Gomu no Bazooka and sends him flying out of Orange Town. All resolved within episode 8, the last of the Orange Town Arc.',
    },
    43: {
      source: 'https://onepiece.fandom.com/wiki/Episode_43',
      note: 'Candidate was episode 43-44 (Qref ep=43,44). The map-room smashing and Arlong Park’s collapse (Kiribachi broken, maps and furniture destroyed, Gomu Gomu no Ono through the floors, building collapses, Luffy declares Nami crew) all happen within episode 43 itself; episode 44 is only the village’s celebration and departure the next day, so the story is filed at 43, not 44.',
    },
    45: {
      source: 'https://onepiece.fandom.com/wiki/Episode_45',
      note: 'News Coo, 30,000,000 as the highest bounty in the East Blue, Loguetown named as Roger’s birthplace and execution ground.',
    },
    52: {
      source: 'https://onepiece.fandom.com/wiki/Episode_52',
      note: 'Cabaji slams a set of stocks down on Luffy, trapping him; Buggy declares the execution. Luffy’s last words are that he’ll become Pirate King, and lightning strikes Buggy and the platform an instant before the blade lands — all within episode 52, confirming the Qref ep=52 candidate. Corrected after review: an earlier pass had Buggy himself lock Luffy in the stocks, contradicting this same PR’s own buggy episode-52 story, which correctly credits Cabaji.',
    },
    111: {
      source: 'https://onepiece.fandom.com/wiki/Episode_111',
      note: 'Candidate was the 110–111 range; 110 ends on the hook impaling Luffy, but Crocodile burying him in the quicksand and leaving happens in 111, so the story is filed there.',
    },
    126: {
      source: 'https://onepiece.fandom.com/wiki/Episode_126',
      note: 'Crocodile through the ceiling, Vivi sees him fall, first rain in three years. Second pass: the second defeat was at the palace (eps 121–122), not beneath it, and the water barrel was pierced in that fight — both corrected.',
    },
    129: {
      source: 'https://onepiece.fandom.com/wiki/Episode_129',
      note: "Candidate was episode 130, credited to 'the X salute, no Qref'; the wiki's Long Summary places the whole harbour scene, cannon shot and salute, inside 129 itself. Corrected to 129.",
    },
    151: {
      source: 'https://onepiece.fandom.com/wiki/Episode_151',
      note: 'Luffy beats Bellamy at Mock Town and recovers Cricket’s stolen gold, confirmed in the episode’s Long Summary.',
    },
    193: {
      source: 'https://onepiece.fandom.com/wiki/Episode_193',
      note: 'Episode 192 only sets up the finishing blow against Enel; the Golden Bell actually rings and falls in 193, so the story is filed there.',
    },
    228: {
      source: 'https://onepiece.fandom.com/wiki/Episode_228',
      note: 'Candidate 227–228. Aokiji freezes Robin at the end of 227; in 228 Luffy slides her to Usopp and Chopper, fights alone, is frozen by Ice Time and left on the ground (Aokiji cites his debt for Crocodile), and later Chopper reports both hearts beating again. Freeze and recovery are both in 228.',
    },
    273: {
      source: 'https://onepiece.fandom.com/wiki/Episode_273',
      note: 'Candidate 272–273 (Qref ep=272,273). Luffy only announces Gear 2 at the end of 272; the Jet Pistol, Blueno recognising Soru, the Tekkai Go and the Jet Bazooka that drops him are all in 273.',
    },
    278: {
      source: 'https://onepiece.fandom.com/wiki/Episode_278',
      note: 'Spandam points at the flag, the flag burns, Robin says she wants to live, the crew moves on the tower.',
    },
    314: {
      source: 'https://onepiece.fandom.com/wiki/Episode_314',
      note: 'Candidate 313–314 (Qref ep=313,314). The wall punch, the rubber not helping and the word grandpa close 313; Garp’s complaints about Luffy not becoming a Marine, the childhood training (ravine, wild, balloon; Luffy History Qref chap=432 ep=314), Shanks as one of the Four Emperors and the rebuilt wall are 314. Dragon left to dragon@314, Koby to koby@315.',
    },
    349: {
      source: 'https://onepiece.fandom.com/wiki/Gecko_Moria',
      note: 'Moria’s own history section confirms the shadow cut (chap 455, ep 349, Qref name=Warlord) resolves within this episode; the following episode carries him to the freezer instead.',
    },
    373: {
      source: 'https://onepiece.fandom.com/wiki/Gecko_Moria',
      note: 'Nightmare Luffy stops Oars’s Gomu Gomu no Rifle and slams him down at ep 372 (chap 478); Moria’s history explicitly dates Luffy defeating Oars by shattering his spine to ep 373 (chap 481) — the fall is not confirmed until this episode.',
    },
    396: {
      source: 'https://onepiece.fandom.com/wiki/Episode_396',
      note: 'Second pass: it is Hatchan, not guards, who physically restrains Luffy before the stage and in doing so accidentally reveals himself as a Fish-Man; corrected.',
    },
    405: {
      source: 'https://onepiece.fandom.com/wiki/Episode_405',
      note: "Zoro's disappearance is 404, but this story is Luffy watching the rest of the crew vanish one by one and despairing over failing to save them; that account, ending with his own capture, closes the Sabaody Archipelago Arc at 405. Second pass: the paw-swipe order is Brook, then Usopp, then Sanji, not Usopp before Brook — corrected.",
    },
    479: {
      source: 'https://onepiece.fandom.com/wiki/Episode_479',
      note: 'Luffy releases Haki unintentionally just before reaching the execution platform, opening his path; Garp then blocks him — resolves within 479.',
    },
    483: {
      source: 'https://onepiece.fandom.com/wiki/Episode_483',
      note: 'Ace’s last words and death; Jinbe blocks Akainu. Second pass: the breakdown is episode 484, so the closing clause was dropped and the story ends at the scream.',
    },
    516: {
      source: 'https://onepiece.fandom.com/wiki/Episode_516',
      note: 'Ox Bell and flowers (ep 511), Rusukaina and the hat on the rock (ep 516). “Two weeks later” per the Post-War Arc page.',
    },
    554: {
      source: 'https://onepiece.fandom.com/wiki/Episode_554',
      note: "The Haki burst that drops roughly 50,000 of Hody's men resolves within this episode; 555–556 only cover the free-for-all brawl that follows.",
    },
    567: {
      source: 'https://onepiece.fandom.com/wiki/Episode_567',
      note: "566 has Hody's final defeat by Elephant Gun and Gatling; 567 has Luffy attacking Noah and Shirahoshi stopping him, revealing the Sea Kings already halted it — the combined account isn't complete until 567's end.",
    },
    571: {
      source: 'https://onepiece.fandom.com/wiki/Episode_571',
      note: "The full Den Den Mushi call — Luffy answers for Pekoms and Tamago, offers the treasure, is refused and threatened, and declares he'll beat her — resolves within this one episode. 'Big Mom' is written unmarked, matching the existing Pekoms entry in fish-man-island.ts, since her own dossier isn't filed until episode 786.",
    },
    594: {
      source: 'https://onepiece.fandom.com/wiki/Episode_594',
      note: "593 only carries the offer; 594 has the agreement, Robin's betrayal warning and the first joint objective. The Emperor is deliberately unnamed — he is first named at episode 623. Second pass: the line about the two years is addressed to the crew, over Usopp's objection.",
    },
    726: {
      source: 'https://onepiece.fandom.com/wiki/Episode_726',
      note: 'Episode title and techDebut both name Gear 4 and Boundman; Kong Gun, Rhino Schneider and Python are all inside 726.',
    },
    734: {
      source: 'https://onepiece.fandom.com/wiki/Episode_734',
      note: "Filed at the top of the 733–734 range: the King Kong Gun lands in 733 but the Birdcage is still up at its end; 734 has it dissolving, Gatz's announcement and Kyros' tears. Second pass: Robin, Fujitora and the Marines keep their feet when it goes, and the Gear Fourth wear-off is on screen before Gatz speaks — both corrected.",
    },
    808: {
      source: 'https://onepiece.fandom.com/wiki/Episode_808',
      note: 'This is the episode where Luffy actually speaks the vow ("I cannot become Pirate King without you... I will wait here and not eat until you return") after Sanji knocks him out and leaves; episode 807 is only the setup/confrontation. Corrected from the candidate range 807–808 to 808 alone.',
    },
    869: {
      source: 'https://onepiece.fandom.com/wiki/Episode_869',
      note: 'Per the wiki’s own Observation Haki article, Luffy “unlocks Future Vision” at chapter 894 / episode 869 specifically against Katakuri — a precise episode, not the vague 870 candidate.',
    },
    916: {
      source: 'https://onepiece.fandom.com/wiki/Episode_916',
      note: 'Candidate 914–915 (Qref ep=914,915), moved to 916 because the story includes the prison: ep 914 has the Elephant Gun that grounds Kaido and Speed’s account of Tama; ep 915 the Gear Fourth barrage and Raimei Hakke; only ep 916 has the unconscious Conqueror’s Haki knocking out the guards, Hawkins arresting him, Udon and the cell next to Kid (History Qref chap=924 ep=915, ep2=916). Luffy has no other story at 916. Tama’s survival (Inuarashi, ep 916) is left out: Luffy does not know it. Oden’s name kept out (filed 960): “the ruined castle on the hill”.',
    },
    956: {
      source: 'https://onepiece.fandom.com/wiki/Episode_956',
      note: 'Candidate 937–956 (Qref ep=937,955,956), filed at the end. Ep 936–937 Hyogoro’s lesson; ep 944–945 Big Mom and the torn-off collars; ep 946 the Rayleigh memory; ep 949 the prison taken; ep 952 and 955 training on rocks and metal; only ep 956 ends with Luffy mastering it by blasting a tree, one day before the raid (History Qref chap=955 ep=956). Ep 955 is still “keeps training”. Luffy has no other story at 956.',
    },
    1071: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1071',
      note: 'The Five Elders name the fruit, Kaido dragged onto the roof, the ground bounces the fireball — all within 1071.',
    },
    1127: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1127',
      note: 'Candidate was 1126–1127 (Qref ep=1126,1127). Episode 1126 only has Luffy reach the Punk Records in Gear 5 and attack; the throw out of the Labophase, Kizaru’s return as beams of light, the grab on Usopp and Luffy swallowing the laser aimed at the Vegatank are all in 1127.',
    },
    1152: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1152',
      note: 'Candidate was 1152 (Qref ep=1152). Episode 1151 only has Emet rise from the sea and punch Warcury; Emet addressing Luffy as Joy Boy, its failed weapons, Ju Peter biting off its arm and Luffy and Bonney’s joint attack on Saturn are in 1152 (Luffy history and Emet page cite chap 1120–1121, ep=1152).',
    },
  },
  'roronoa-zoro': {
    2: {
      source: 'https://onepiece.fandom.com/wiki/Episode_2',
      note: 'Threshold entry. Rika’s rice balls, the one-month deal, Helmeppo’s betrayal, Luffy heads for the swords.',
    },
    7: {
      source: 'https://onepiece.fandom.com/wiki/Episode_7',
      note: 'Cabaji targets Zoro’s existing stab wound; Zoro lets the wound be reopened rather than guard it, then beats Cabaji with one Oni Giri.',
    },
    19: {
      source: 'https://onepiece.fandom.com/wiki/Episode_19',
      note: 'Zoro dreams of Kuina; the promise is told in this episode.',
    },
    24: {
      source: 'https://onepiece.fandom.com/wiki/Episode_24',
      note: 'Kogatana, the chest wound, the vow never to lose again, Mihawk’s challenge.',
    },
    49: {
      source: 'https://onepiece.fandom.com/wiki/Episode_49',
      note: 'Candidate was episode 48-49 (Qref ep=48 for the Tashigi meeting only). Tashigi and the glasses/Kuina resemblance happen in 48, but the sword shop, the Sandai Kitetsu curse test and receiving the Yubashiri for free all happen in 49, so the story is filed there — also required since Tashigi’s own revealedAtEpisode is 49.',
    },
    65: {
      source: 'https://onepiece.fandom.com/wiki/Episode_65',
      note: 'The full Whisky Peak rooftop fight — Miss Monday, Mr. 9, the wine barrel — resolves within this one episode.',
    },
    119: {
      source: 'https://onepiece.fandom.com/wiki/Episode_119',
      note: 'Mr. 1 begins turning to steel at the end of episode 118; the "breath of all things" realisation and his defeat both happen within 119.',
    },
    178: {
      source: 'https://onepiece.fandom.com/wiki/Episode_178',
      note: 'Zoro lands the finishing blow, Santoryu Hyakuhachi Pound Ho, breaking Ohm’s Iron Cloud in the Upper Yard ruins; episodes 174–175 (the issue’s candidate) are too early, as Ohm is still fighting Chopper there and Zoro hasn’t engaged him yet.',
    },
    300: {
      source: 'https://onepiece.fandom.com/wiki/Episode_300',
      note: 'Candidate 299–300. Episode 299 only has the fight heating up; the Asura illusion, Kaku reading it as Zoro’s spirit, Ichibugin through Amane Dachi, and the fired/zoo exchange with the key (Kaku page Qref chap=417,418 ep=300) are all 300.',
    },
    320: {
      source: 'https://onepiece.fandom.com/wiki/Episode_320',
      note: 'Poster scene with Zoro’s 60M to 120M and his positive reaction, plus his wondering about a new sword on the Florian Triangle treasure ships, are in 320’s long summary. Yubashiri’s rusted hilt is shown in 313.',
    },
    362: {
      source: 'https://onepiece.fandom.com/wiki/Ryuma_(Zombie)',
      note: 'Zoro challenges Ryuma at ep 357 (chap 462, Qref), but the duel itself, Ryuma’s defeat and him bestowing Shusui before burning to ash are dated to ep 362 (chap 467) on Ryuma’s own history page.',
    },
    377: {
      source: 'https://onepiece.fandom.com/wiki/Episode_377',
      note: 'The long summary of 377 ends with Sanji finding Zoro: “nothing happened”.',
    },
    404: {
      source: 'https://onepiece.fandom.com/wiki/Episode_404',
      note: "Kuma arrives and makes Zoro disappear first; 405 opens on the crew reacting to his vanishing, confirming he was the first taken. Second pass: the story wrongly placed the Pacifista mistaken-for-Kuma beat here (it is 402–403, already resolved) and had Franky present recognising the real Kuma's power (that is episode 405, and Franky was elsewhere with Nami); rewritten to Zoro fleeing with Usopp and Brook from Sentomaru and the Pacifista when the real Kuma appears and swats him away.",
    },
    515: {
      source: 'https://onepiece.fandom.com/wiki/Episode_515',
      note: 'Zoro begs Mihawk, beats the humandrills, Mihawk agrees; Luffy’s message explained to Perona.',
    },
    521: {
      source: 'https://onepiece.fandom.com/wiki/Episode_521',
      note: "517 has Zoro learning he's the first crewmate back at Sabaody; the Fake Zoro impostor and the Marine fallout it causes (Manjaro, debut ep 518) only conclude at 521, when Zoro and Sanji beat a Pacifista together and the fraud is exposed.",
    },
    566: {
      source: 'https://onepiece.fandom.com/wiki/Episode_566',
      note: 'Zoro calls Hyouzou a frog at the bottom of a well and walks away; when Hyouzou attacks from behind, Zoro turns and cuts him down with a single stroke, Rengoku Onigiri.',
    },
    613: {
      source: 'https://onepiece.fandom.com/wiki/Episode_613',
      note: "612 only sets the fight up; 613 holds Tashigi's accusation, the Haki-cut cheek, the wild-animal line and the vertical cut that leaves the snow body whole.",
    },
    719: {
      source: 'https://onepiece.fandom.com/wiki/Episode_719',
      note: "718 is the approach only; 719 has Orlumbus' throw, the giant halved, the hunt through the falling stone and Pica's helmet opened. Second pass: the first cut is horizontal, and nothing puts it at the waist.",
    },
    956: {
      source: 'https://onepiece.fandom.com/wiki/Episode_956',
      note: 'Candidate 954–956 (Qref ep=954,955,956), filed at the end. Ep 952 the rematch with Gyukimaru; ep 954 Hiyori asks for Shusui and offers Enma; ep 955 the national-treasure explanation and Zoro’s condition of Ryuma’s grave; only ep 956 has Hitetsu handing Enma over, the cliff cut, and Zoro vowing to make it a Black Blade. Hiyori shown via the komurasaki record (921); Oden (960) is only “her father”. Zoro has no other story at 956.',
    },
    1027: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1027',
      note: 'Candidate 1027, confirmed. Ep 1026 has Law and Zoro pushing Big Mom off the island; ep 1027 has Kaido about to finish the unconscious Luffy, the Nine Sword Style attack with Supreme King Haki reopening his scar, Raimei Hakke on Zoro and Law, and Luffy getting up. Kaido’s surprise and Zoro not knowing he has the Haki are from the History paragraph (Qref chap=1010 ep=1027, ep2=1028); the 1028 half is only Luffy sending them downstairs, left out. Big Mom’s rescue (1027) left out.',
    },
    1062: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1062',
      note: 'King’s ability worked out, King of Hell Three Sword Style, King defeated.',
    },
    1145: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1145',
      note: 'Candidate was 1144–1145 (Qref ep=1144,1145). Zoro’s decisive slash after Sanji’s "deadweight" lands in 1144, but the three chest wounds and Jinbe ending the fight with Gosenmaigawara Shuto are only shown in 1145; the betrayal and Stussy’s block are 1125, the bushes and the sense of smell 1127.',
    },
  },
  'nami': {
    5: {
      source: 'https://onepiece.fandom.com/wiki/Episode_5',
      note: 'Threshold entry. Second pass: the first sentence was rewritten to the sourced version — the map stolen from a pirate, the empty chest, three men talked out of their boat (Nami/History, ep 4).',
    },
    36: {
      source: 'https://onepiece.fandom.com/wiki/Episode_36',
      note: 'Candidate was episode 35-36 (Qref ep=35,36). Episode 35 sets up Nojiko telling the crew about Nami’s childhood (mikan trees, Bell-mère adopting the two girls); the flashback does not close until 36, where Arlong invades, Bell-mère pays tribute only for her daughters and is shot dead, so the story is filed at 36.',
    },
    37: {
      source: 'https://onepiece.fandom.com/wiki/Episode_37',
      note: 'Nezumi seizes Nami’s buried savings and shoots Nojiko, Nami confronts Arlong, the village decides to fight without her consent, and — furious — she stabs the Arlong Pirates tattoo on her shoulder repeatedly. Kept to the private tattoo-stabbing moment; the public "help me" scene later the same episode is already covered by the existing entry filed at episode 44.',
    },
    44: {
      source: 'https://onepiece.fandom.com/wiki/Episode_44',
      note: 'Filed late on purpose: Nezumi and the request for help are episode 37; nothing in the story needs 38–44.',
    },
    45: {
      source: 'https://onepiece.fandom.com/wiki/Episode_45',
      note: 'Celebration and Nami’s permanent boarding (ep 44), the first poster (ep 45).',
    },
    118: {
      source: 'https://onepiece.fandom.com/wiki/Episode_118',
      note: 'Candidate was episode 117, no Qref; 117 only has Nami testing party-trick moves against Miss Doublefinger, and Tornado Tempo — the move that actually ends the fight — is not thrown until 118. Corrected to 118.',
    },
    192: {
      source: 'https://onepiece.fandom.com/wiki/Episode_192',
      note: 'Nami drives the Waver up the falling Giant Jack with Luffy aboard; her active driving portion concludes here when the waver cuts out and Luffy leaps for the Ark Maxim.',
    },
    296: {
      source: 'https://onepiece.fandom.com/wiki/Episode_296',
      note: 'Candidate 297 moved to 296. Water weakness, Rain Tempo and the mirages are 295; the bubble wave, the horizontal bolt (Thunder Lance Tempo) and ripping Kalifa’s clothes for key #2 (Kalifa page Qref chap=412 ep=296) close in 296. Episode 297 is Jabra vs Usopp and Sanji.',
    },
    320: {
      source: 'https://onepiece.fandom.com/wiki/Episode_320',
      note: 'Log Pose set after a week, needle pointing down toward Fish-Man Island, Nami’s Arlong memories, Robin’s treasure-ship remark, then the Cat Burglar 16,000,000 poster with the photographer posing as a reporter/magazine (Nami History Qref chap=435 ep=320). The dossier epithet and bounty were moved from 130 to 320 in this batch to match.',
    },
    366: {
      source: 'https://onepiece.fandom.com/wiki/Absalom',
      note: 'Absalom’s history dates Lola interrupting the ceremony and Nami knocking him out with Swing Arm to ep 366 (chap 471); the ceremony itself starts at ep 352 and Sanji’s own fight with Absalom ends at 359.',
    },
    517: {
      source: 'https://onepiece.fandom.com/wiki/Episode_517',
      note: 'Reads the message (ep 512), asks Haredas to teach her (ep 514); 517 shows the weapon in use, so it is safe.',
    },
    547: {
      source: 'https://onepiece.fandom.com/wiki/Episode_547',
      note: "Jinbe asks Nami's forgiveness for once letting Arlong go free; she answers that she resents only Arlong, not fish-men in general.",
    },
    587: {
      source: 'https://onepiece.fandom.com/wiki/Episode_587',
      note: "The swap is performed in 586; 587 is the first episode that states who is in whose body, and its cast list is the first annotated one. The issue's candidate of 591–592 would be four episodes late. Second pass: Law takes four hearts out rather than cutting anyone in four — the one he does cut apart here is Tashigi — and that only he can undo it is not said on screen until 591, so the story says it as its own reading.",
    },
    653: {
      source: 'https://onepiece.fandom.com/wiki/Episode_653',
      note: "Filed at the top of the 648–653 range: Jora is winning at 648, and 653 is where Brook's trick undoes every transformation and Nami brings her down.",
    },
    865: {
      source: 'https://onepiece.fandom.com/wiki/Episode_865',
      note: 'Corrected from the candidate 846–847: those episodes only show Nami borrowing Zeus’s lightning mid-chase. The actual capture — Zeus given the choice to serve Nami or die, and accepting — happens at episode 865, confirmed by Zeus’s own wiki page (chapter 890).',
    },
    1038: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1038',
      note: 'Corrected from the candidate’s 1032–1033: ep 1032 is Ulti striking Tama and Nami’s first lightning, and in ep 1033 Ulti falls to Big Mom’s Maser Ho, not to Nami, while Zeus is only rejected. Zeus pleads, is refused and sacrificed in ep 1034; the Black Balls put him in the Clima-Tact, revealed in ep 1037 (History Qref chap=1013 ep=1033, ep2=1034; chap=1015 ep=1037); Nami and Zeus knock Ulti out only in ep 1038 (Qref chap=1016 ep=1037, ep2=1038). Kept the event, filed at 1038. Second pass: 1034 and the Zeus page (Qref chap=1013) have Zeus attacking Big Mom to make amends and Nami’s Black Balls meant to power him up, not to buy time or as a parting gift; both phrases corrected. The rest checked against 1032–1038.',
    },
  },
  'usopp': {
    9: {
      source: 'https://onepiece.fandom.com/wiki/Episode_9',
      note: 'Threshold entry. Morning lie, Yasopp, Kaya, Klahadore bars him.',
    },
    18: {
      source: 'https://onepiece.fandom.com/wiki/Episode_18',
      note: 'Jango beaten and the Going Merry given (ep 17); Usopp paints the flag on the sail in 18.',
    },
    40: {
      source: 'https://onepiece.fandom.com/wiki/Episode_40',
      note: 'No Qref citation for this beat; verified directly. Usopp fakes death with a ketchup bomb (Ketchup Boshi) to fool Chew, then burns and hammers him down; all resolved within episode 40.',
    },
    115: {
      source: 'https://onepiece.fandom.com/wiki/Episode_115',
      note: 'Candidate was the 113–114 range, no Qref. Episode 114\'s own Short Summary says the tide is only "beginning to turn" for Usopp and Chopper, not that they win; a line in its Long Summary claiming an earlier defeat conflicts with that and with 115\'s own Short Summary, which says they "finally manage to defeat" the pair — read as a wiki inconsistency, since an episode\'s Short Summary is the more reliable single statement of what it resolves. Corrected to 115.',
    },
    186: {
      source: 'https://onepiece.fandom.com/wiki/Episode_186',
      note: 'Usopp carries the blackened, unconscious Sanji off Ark Maxim and they land safely; episode 184 (the issue’s candidate) only covers the boarding, before the rescue.',
    },
    236: {
      source: 'https://onepiece.fandom.com/wiki/Episode_236',
      note: 'The duel, the loss, Luffy leaves him the ship.',
    },
    278: {
      source: 'https://onepiece.fandom.com/wiki/Episode_278',
      note: 'Sogeking burns the World Government flag on Luffy’s order in episode 278, after Spandam’s warning. The giants’ defection (270–272) and Kashii throwing him onto the courthouse roof (274) are past context. Candidate 278 kept.',
    },
    301: {
      source: 'https://onepiece.fandom.com/wiki/Episode_301',
      note: 'In episode 301 Sogeking snipes Spandam and the Marines from the Tower of Justice, Franky frees Robin from the Seastone cuffs and she slaps Spandam down; all within one episode. Candidate 301–302 → 301.',
    },
    323: {
      source: 'https://onepiece.fandom.com/wiki/Episode_323',
      note: 'Zoro’s condition in flashback, Garp’s meteor, the apology, Luffy pulls him aboard.',
    },
    361: {
      source: 'https://onepiece.fandom.com/wiki/Perona',
      note: 'Perona’s history dates Usopp’s immunity reveal to ep 356 (chap 461, Qref name=cheerup) and his outmaneuvering and defeat of her to ep 361 (chap 466); filed at the later episode where the fight actually closes.',
    },
    397: {
      source: 'https://onepiece.fandom.com/wiki/Episode_397',
      note: 'Usopp is knocked off the roof by the flying fish and crashes into a World Noble, knocking him out and breaking his glasses, within 397. The Noble isn’t a filed character, so he’s described generically.',
    },
    420: {
      source: 'https://onepiece.fandom.com/wiki/Episode_420',
      note: 'Corrected from 419–420 to 420: Usopp lands, is attacked by a beetle, saved by a giant of the island, attacked by man-eating plants, and told the island is the “Swindling Forest” — all resolves in 420. The giant isn’t a filed character, so he’s described generically.',
    },
    515: {
      source: 'https://onepiece.fandom.com/wiki/Episode_515',
      note: 'Reads the news at Boin (ep 512), runs with Heracles and the Pop Greens (ep 515).',
    },
    566: {
      source: 'https://onepiece.fandom.com/wiki/Episode_566',
      note: "Usopp's Humandrake, Trampolia and Impact Wolf Pop Green sequence finishes off Daruma.",
    },
    643: {
      source: 'https://onepiece.fandom.com/wiki/Episode_643',
      note: '641 only has "legendary warrior"; 643 coins "Usoland", gives the Noland legend and the statue, and ends with the dwarves chanting for him to lead them. Second pass: the anniversary is Leo\'s line, not the chief\'s, and nothing says the feeding ever stops.',
    },
    677: {
      source: 'https://onepiece.fandom.com/wiki/Episode_677',
      note: 'Sugar faints (ep 676); the island-wide reversal of the toys completes in 677.',
    },
    746: {
      source: 'https://onepiece.fandom.com/wiki/Episode_746',
      note: 'Bartolomeo’s ship and the new posters, Sanji “only alive”.',
    },
    1019: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1019',
      note: 'Candidate 1008–1009 (Qref ep=1008,1009), but the candidate’s own ‘Tama’s dango’ half is not in those episodes: 1008 has Ulti’s headbutt on Nami, Page One helping her beat Usopp’s Pop Greens, Nami’s Pirate King declaration and Tama arriving on Komachiyo, who bites Ulti’s head; 1009 has the escape on Komachiyo. The kibi dango only appear in 1019 (Qref chap=1004 ep=1019): the flashback of Tama making them, Usopp shooting one into Hamlet’s mouth and firing them at Sasaki’s Armoured Division while Franky fights. Filed at 1019 so the story can keep both halves. Second pass: Italian brought in line with the English (the escape on Komachiyo, ep 1009). Timing confirmed: 1008–1009 for the bathhouse, 1019 for the dango and the Armoured Division. Second pass: the dango tame the Gifters (1019: ‘to tame the Gifters in Onigashima’), not every Beasts Pirate, so ‘Kaido’s pirates’ became ‘Kaido’s Gifters’. Timing re-checked: 1008–1009 bathhouse, 1019 dango.',
    },
    1076: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1076',
      note: 'Candidate 1073–1076 (Qref ep=1073,1074,1076). Background from 1063: Usopp finds Kin’emon and Kiku, tells them to hold on to life instead of their honour, and Izou holds off the Beasts Pirates while they escape on Hamlet’s back. 1073 debuts Midori Boshi: Sprinkler and has Usopp’s group trapped by the fire (Hamlet’s ‘wasting energy’ line and the promise to Izou are the Qref chap=1046 ep=1073); the flood that puts the fire out starts in 1073, and 1074 shows Usopp being hit by it. 1076 has the allies surviving Raizo’s flood (Qref chap=1049 ep=1076: Usopp keeping them from drowning) and, per its anime notes, Nami, Chopper and Tama spotting Usopp, Kin’emon and Kiku. Filed at 1076. Hamlet is not a filed record, so he is named in plain text. Second pass: 1073 puts Usopp’s group in the corridors, not the basement (that is Brook and Robin’s), so ‘basements’ became ‘corridors’. The manga-cited lines check out on the Hamlet page (Qref chap=1046 ep=1073: the burning sprinkler, Hamlet calling it useless, the promise to Izou) and 1076’s anime notes (Nami, Chopper and Tama spotting them).',
    },
  },
  'sanji': {
    20: {
      source: 'https://onepiece.fandom.com/wiki/Episode_20',
      note: 'Threshold entry. Fullbody beaten, Luffy the chore boy. Second pass: the closing line presumed the recruitment (ep 21) and was softened.',
    },
    26: {
      source: 'https://onepiece.fandom.com/wiki/Episode_26',
      note: 'Candidate was episode 25-26 (Qref ep=25,26). The Zeff/rock flashback plays out during the Pearl fight and closes at the end of 26, per the episode’s own Long Summary: a wave sweeps Sanji overboard from Zeff’s raided ship, another sinks both, Zeff dives in but his leg is caught in the wreckage and he cuts it off with a chain to free himself, then marooned together he gives Sanji all the food and Sanji only discovers the missing leg and the empty food bag once his own rations run out. Corrected twice after review: a first pass wrongly had Zeff lose the leg secretly cutting it off on the island to eat, which is the manga account (Episode 26’s own Anime Notes flag this exact divergence) — the anime version above is what this site follows.',
    },
    30: {
      source: 'https://onepiece.fandom.com/wiki/Episode_30',
      note: 'The soup, the prostration before Zeff, All Blue.',
    },
    40: {
      source: 'https://onepiece.fandom.com/wiki/Episode_40',
      note: 'No Qref citation; verified directly. Sanji loses the underwater phase against Kuroobi (held down, pressure-crushed) then beats him on land with a rapid combo and Mouton Shot, all within episode 40 — chronologically after the existing episode 30 entry.',
    },
    77: {
      source: 'https://onepiece.fandom.com/wiki/Episode_77',
      note: 'Candidate was episode 76, no Qref; 76 only shows the call starting. Sanji actually posing as Mr. 3 and fooling Mr. 0 resolves in 77, along with the Unluckies attacking and the Eternal Pose. Corrected to 77.',
    },
    108: {
      source: 'https://onepiece.fandom.com/wiki/Episode_108',
      note: 'The key slipping to the Bananawani and the flooding VIP room are also this episode, from Crocodile’s side; Sanji’s call as "Mr. Prince" reaches him here.',
    },
    116: {
      source: 'https://onepiece.fandom.com/wiki/Episode_116',
      note: 'Bon Kurei’s Nami-transformation trick and Sanji finally seeing through it, ending the fight evenly, both resolve within 116.',
    },
    186: {
      source: 'https://onepiece.fandom.com/wiki/Episode_186',
      note: 'Confirms Sanji dislodged the gear choking off Enel’s storm machinery and is found blackened and unconscious; episode 184 (the issue’s candidate) only covers the boarding, before the sabotage.',
    },
    261: {
      source: 'https://onepiece.fandom.com/wiki/Episode_261',
      note: 'Wanze appears at the end of 258, the fight runs through 259–260 and ends in 261 with the three sins and Santen Découpage throwing Wanze into the CP9 car. Candidate 257–258 → 261.',
    },
    298: {
      source: 'https://onepiece.fandom.com/wiki/Episode_298',
      note: 'Jabra’s “sister” story seen through, Diable Jambe, the key taken.',
    },
    320: {
      source: 'https://onepiece.fandom.com/wiki/Episode_320',
      note: 'The Franky Family brings the new posters at the end of episode 320: Black Leg Sanji, 77,000,000, with a drawing instead of a photo. The Fish-Man Island talk is earlier in the same episode.',
    },
    359: {
      source: 'https://onepiece.fandom.com/wiki/Absalom',
      note: 'Absalom’s history dates Sanji identifying his Devil Fruit and defeating him with Extra Hachis to ep 359 (chap 464, Qref); Lola’s interruption and Nami’s own defeat of Absalom come later, at ep 366.',
    },
    403: {
      source: 'https://onepiece.fandom.com/wiki/Episode_403',
      note: 'Corrected from 401: 401–402 only set up the Pacifista fight; Sanji’s Diable Jambe finishing blow alongside Zoro and Luffy against PX-1 lands within 403.',
    },
    514: {
      source: 'https://onepiece.fandom.com/wiki/Episode_514',
      note: 'Reads the news at Kamabakka (ep 512), the 99 recipes deal (ep 514).',
    },
    529: {
      source: 'https://onepiece.fandom.com/wiki/Episode_529',
      note: 'Episode 528 has the near-fatal blood loss; 529 confirms his S RH- blood type and reveals the two donors, behind a curtain, as the okama pirate twins Splash and Splatter.',
    },
    566: {
      source: 'https://onepiece.fandom.com/wiki/Episode_566',
      note: "Jinbe's water fist launches Wadatsumi skyward; Sanji follows him up through the air and finishes him with a flaming kick, Hell Memories.",
    },
    655: {
      source: 'https://onepiece.fandom.com/wiki/Episode_655',
      note: "Both halves are inside 655: Sanji pinned by the strings with Overheat winding up, and Law's log-Shambles swap from the shore. Second pass: none of Sanji's kicks connect — the admission is about a blocked one — and the log takes Law's own place, not Sanji's; both corrected.",
    },
    794: {
      source: 'https://onepiece.fandom.com/wiki/Episode_794',
      note: 'Judge defeats Sanji in their duel and Reiju treats his wounds within this same episode; 793 only covers the challenge/buildup. Ichiji/Niji/Yonji are not named since their own threshold (795) is one episode later — the brother Sanji injured is referenced only as “a brother.”',
    },
    795: {
      source: 'https://onepiece.fandom.com/wiki/Episode_795',
      note: 'Filed late: the challenge and the childhood flashback are episode 793.',
    },
    825: {
      source: 'https://onepiece.fandom.com/wiki/Episode_825',
      note: 'The bento, the punch, “I want to go back”, Luffy decides to crash the wedding.',
    },
    832: {
      source: 'https://onepiece.fandom.com/wiki/Episode_832',
      note: 'Corrected from the candidate 834–835: the third-eye reveal and Sanji’s “beautiful” compliment happen at the altar in episode 832 (confirmed via Charlotte Pudding’s own wiki page, chapter 862). Episodes 834–835 cover a later, different scene (the Vinsmokes’ near-assassination) with no third-eye content.',
    },
    866: {
      source: 'https://onepiece.fandom.com/wiki/Episode_866',
      note: 'By 866 Sanji finishes the cake and it is sent out as bait; Big Mom catches its scent and breaks off chasing the Sunny to pursue it instead. Episode 863 is included as the moment Sanji refuses to poison it.',
    },
    925: {
      source: 'https://onepiece.fandom.com/wiki/Episode_925',
      note: 'Candidate 924–925 (Qref ep=924,925). 924 ends with Page One rampaging through the Flower Capital destroying soba shops, Sanji running away, then turning back at the citizens’ cries and taking out the raid suit. The suit itself is only activated in 925: the can, Stealth Black renamed Soba Mask, the kick that knocks Page One down, the cape shield, invisibility, Page One throwing him into houses unharmed, the last attack and the escape into the sky while Usopp, Law and Franky flee. Filed at 925. The episode has the kick to the throat; the character history says stomach, so the body just says ‘a kick’.',
    },
    1020: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1020',
      note: 'Candidate 1020. The build-up runs from 1010 (Sanji hears a woman being harassed on the stairs with Luffy and Jinbe) through 1011 (the web trap, the corpses in the closet), 1013 (her ancient spider form) and 1016 (he burns the webs with Diable Jambe but cannot attack Black Maria, who questions him about Robin). 1020 has the women’s game that knocks him out, the web crucifixion, the brass knuckles, his cry for Robin broadcast by the Marys, and Robin’s giant arm striking Black Maria before the last blow. Brook freeing him is 1021 and is left out, so 1020 holds everything the story says.',
    },
    1061: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1061',
      note: 'Copied Vinsmoke weapons, Ifrit Jambe, Queen sent off Onigashima, Sanji collapses.',
    },
    1141: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1141',
      note: 'Candidate was 1141 (Qref ep=1141). Episode 1140 has Luffy return in Gear 5 and punch Kizaru away from Bonney and Kuma; Luffy launching Saturn, Vegapunk staying behind and Sanji deflecting Kizaru’s beam with his leg are in 1141. The beam’s target is left unnamed: the Long Summary says Vegapunk, Sanji/History says Bonney.',
    },
  },
  'tony-tony-chopper': {
    83: {
      source: 'https://onepiece.fandom.com/wiki/Episode_83',
      note: 'Threshold entry. Second pass: Nami’s thanks are episode 84, so the sentence was replaced by the reindeer dragging the travellers inside (ep 83).',
    },
    86: {
      source: 'https://onepiece.fandom.com/wiki/Episode_86',
      note: 'Kureha tells the Amiudake story; Hiluluk answers Wapol’s trap.',
    },
    88: {
      source: 'https://onepiece.fandom.com/wiki/Episode_88',
      note: 'Chopper’s solo fight against Chessmarimo, cycling through Guard, Brain and Arm Point, resolves within this one episode, before he formally joins the crew (ep 95).',
    },
    95: {
      source: 'https://onepiece.fandom.com/wiki/Episode_95',
      note: 'Filed late: the flag (87), “shut up and come” (89), the knives (90), the sakura (91). The dossier files the crew at 91.',
    },
    172: {
      source: 'https://onepiece.fandom.com/wiki/Episode_172',
      note: 'Chopper defeats Gedatsu at the Ordeal of Swamp, closing the two-priest vignette that began with him alone guarding the Going Merry against Shura (ep 162, resolved 164). The issue’s candidate of ep 178 is wrong — that episode is Zoro vs. Ohm, with no Chopper content — moved to 172.',
    },
    293: {
      source: 'https://onepiece.fandom.com/wiki/Episode_293',
      note: 'Third Rumble Ball (eaten ep 290), Kumadori thrown to the courthouse.',
    },
    320: {
      source: 'https://onepiece.fandom.com/wiki/Episode_320',
      note: 'Episode 320 reveals the crew’s bounties; Chopper, Cotton Candy Lover, gets 50 because he is mistaken for the crew’s pet. Candidate 320 kept.',
    },
    363: {
      source: 'https://onepiece.fandom.com/wiki/Hogback',
      note: 'Hogback’s history dates his full confrontation with Chopper over his research and values as a doctor to ep 363 (chap 468); the interruption by Oars and his escape attempt follow at 364.',
    },
    404: {
      source: 'https://onepiece.fandom.com/wiki/Episode_404',
      note: 'Chopper History page states he used three Rumble Balls at once against Sentomaru, having already burned one on Marines at the auction house and one on a Pacifista; the episode shows him overdosing into an uncontrolled Monster form.',
    },
    512: {
      source: 'https://onepiece.fandom.com/wiki/Episode_512',
      note: 'Chopper on a Torino bird understands the message; “three weeks since the war”.',
    },
    524: {
      source: 'https://onepiece.fandom.com/wiki/Episode_524',
      note: 'Chopper uses Guard Point, no Rumble Ball needed, to help block a Kraken attack alongside Franky and Robin.',
    },
    566: {
      source: 'https://onepiece.fandom.com/wiki/Episode_566',
      note: 'Chopper holds his mind for three minutes in Monster Point; the fight against Dosun ends here with the hammer shattered.',
    },
    622: {
      source: 'https://onepiece.fandom.com/wiki/Episode_622',
      note: "Moved well past the issue's 611–614: Mocha collapses in 614 and is not confirmed recovered until the celebration in 622. Second pass: Chopper is left choosing between sedating the rest and saving her, and the mass sedation is Sanji's and the marines' — the story no longer credits him with it, nor with the cure, which is Law's surgery.",
    },
    815: {
      source: 'https://onepiece.fandom.com/wiki/Episode_815',
      note: 'Corrected twice from the candidate 805–806: the first pass moved it to 816, but a second, independent pass found the Brûlée defeat/capture fully resolves by the end of 815 itself — 816 only continues the Mirro-World search and adds nothing to this thread. The “eleven hours” detail in the original candidate belongs to Luffy’s separate fight against Cracker, not to Chopper’s time here, so it was dropped.',
    },
    928: {
      source: 'https://onepiece.fandom.com/wiki/Episode_928',
      note: 'Candidate 926–928 (Qref ep=926,928). Episode 926 ends on Big Mom waking without memory on the beach (found by Chopper, Tama, Momonosuke and Kiku); the name Olin is 927; the trip to Okobore Town, Tsuru’s red bean soup and Tama’s idea of luring her to Udon, where Luffy is imprisoned, are 928, so the story is filed there. The wiki spells the fake name Olin, not O-Lin. Tsuru is left unnamed because the tsuru record is the Marine vice admiral. The ride to Udon itself starts in 929 and is not told.',
    },
    1023: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1023',
      note: 'Chopperphage cannon, the Pleasures cured, Monster Point on Queen, “not a raccoon”.',
    },
    1036: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1036',
      note: "Candidate 1034–1036 (Qref ep=1034,1035; ep=1036,1037). Chopper slamming Queen and Queen standing up unharmed are 1034; the Caesar flashback (longer Rumble Ball, accepted side effect) and Bao Huang’s announcement of Luffy’s defeat are 1035; Chopper losing heart, Queen about to bite him, Sanji’s kick, the praise and Zoro handed over are 1036, so the story is filed there. The thirty-minute figure is from Chopper’s History (Qref chap=1014 ep=1034,1035). The side effect itself (Babyjiji, ep 1039) and Chopper’s tears of joy at Momonosuke’s message are left out. Second pass: episode placement confirmed (slam 1034, Caesar and the announcement 1035, Sanji 1036); the thirty minutes stay, since the New World History cites them with Qref ep=1034,1035, but no episode summary states the figure. Italian aligned to 'loses heart' and the arrows on the samurai.",
    },
  },
  'nico-robin': {
    130: {
      source: 'https://onepiece.fandom.com/wiki/Episode_130',
      note: 'Threshold entry, told from the Whiskey Peak meeting (ep 67). Second pass: she only says she has heard of Luffy, and the Eternal Pose leads to a deserted island that Luffy crushes — both corrected.',
    },
    131: {
      source: 'https://onepiece.fandom.com/wiki/Episode_131',
      note: 'Second pass: the reason for boarding was inverted — Luffy saved her when she wanted to die, so he must take responsibility (ep 130); “archaeologist” replaces “reads the ancient stones”.',
    },
    194: {
      source: 'https://onepiece.fandom.com/wiki/Episode_194',
      note: 'Robin reads the Poneglyph under the recovered Golden Bell, then finds Gol D. Roger’s own inscription on the bell itself; Gan Fall confirms Roger visited Skypiea over twenty years earlier.',
    },
    245: {
      source: 'https://onepiece.fandom.com/wiki/Episode_245',
      note: 'Episode 244 has Lucci name CP9 to Iceburg and ends as the Straw Hats break in; in 245 Robin states her wish, pins Iceburg and leaves through the window. Candidate 245–246 → 245.',
    },
    277: {
      source: 'https://onepiece.fandom.com/wiki/Episode_277',
      note: 'The Ohara flashback starts in 275 (Saul, Tree of Knowledge), Olvia and the raid follow in 276, and 277 ends with Clover shot, the Buster Call and Olvia sending Robin off with Saul. Saul’s last stand and Kuzan’s help are in 278 and left out.',
    },
    278: {
      source: 'https://onepiece.fandom.com/wiki/Episode_278',
      note: 'The whole exchange on the courthouse roof.',
    },
    400: {
      source: 'https://onepiece.fandom.com/wiki/Episode_400',
      note: 'At Shakky’s Bar, after Rayleigh finishes his own backstory, Robin asks about the Void Century and he tells her to keep searching herself rather than just telling her — resolves within 400.',
    },
    455: {
      source: 'https://onepiece.fandom.com/wiki/Episode_455',
      note: 'Bumped up from the candidate’s ~420, which is only Robin’s arrival at Tequila Wolf. 455 has her captured, interrogated in the Prison Tower, recognised by a fellow slave, and freed when the Revolutionary Army storms the camp.',
    },
    548: {
      source: 'https://onepiece.fandom.com/wiki/Episode_548',
      note: 'Robin reads the Sea Forest Poneglyph as an apology; the Poneglyph wiki article confirms it was written by Joy Boy, addressed to Fish-Man Island over a broken promise tied to Noah.',
    },
    569: {
      source: 'https://onepiece.fandom.com/wiki/Episode_569',
      note: "Robin pulls Neptune aside and he explains Joy Boy was a surface-dweller from the Void Century who apologized to that era's mermaid princess.",
    },
    713: {
      source: 'https://onepiece.fandom.com/wiki/Episode_713',
      note: 'The rescue is Mil Fleur: Kochoran, a moth of linked hands, not a giant hand — Gigantesco Mano is never used on Diamante, and the giant-hand Hanagasa is episode 716. 713 is where the blade is turned aside. Second pass: she is climbing the levels of the new plateau, not the underground port, which is elsewhere.',
    },
    746: {
      source: 'https://onepiece.fandom.com/wiki/Episode_746',
      note: 'The Dressrosa posters; the dossier files 130,000,000 at 746.',
    },
    769: {
      source: 'https://onepiece.fandom.com/wiki/Episode_769',
      note: 'Confirms Robin reads the red Road Poneglyph in the Whale Tree, translates its coordinates for Nami, and Inuarashi explains the four-Poneglyph system pointing to Laugh Tale — matches the issue’s candidate exactly.',
    },
    1044: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1044',
      note: 'Candidate 1042–1043 (Qref ep=1042,1043; ep=1043,1044). The mist with Olvia, Saul and Clover and Robin knocking the three impostors away are 1042; Brook’s immunity, the Gigante Fleur, the cuts transferring to Robin, the webs and Black Maria pinning her are 1043’s first half, and the ep 1043 Long Summary itself carries the Revolutionary Army lesson, the collapsed ceiling putting out the fire, the demon-shaped giant body (Demonio Fleur) and the Clutch that knocks Black Maria out. Filed at 1043. Her collapse from exhaustion afterwards is left out. Second pass: moved from 1043 to 1044. The 1043 Long Summary stops at the thread tendrils blocking Robin’s giant limbs; the burning webs, the Poneglyph taunt, the Revolutionary Army lesson, the collapsed ceiling, the demon form and the Clutch are all in the 1044 Long Summary.',
    },
    1083: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1083',
      note: "Candidate 1083. Robin’s question to Hitetsu/Sukiyaki about Pluton is ep 1080 (Robin History, Qref chap=1053 ep=1080); the sunken old Wano, the Road Poneglyph and Pluton under the walls are ep 1082; Robin reporting to the crew and Luffy choosing not to uncover the weapon are the ep 1083 Long Summary, so the story is filed there. Sukiyaki has no record and is named in plain text. Second pass: placement confirmed (Sukiyaki reveal and Pluton confirmation 1080, sunken Wano and Road Poneglyph 1082, report to the crew and Luffy's refusal 1083); Italian changed from 'quando' to 'dopo che' so the flood follows the walls, as in ep 1082.",
    },
    1148: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1148',
      note: 'Candidate was 1147–1148 (Qref ep=1147,1148). Saturn recognises Robin from Ohara and her crewmates shield her in 1147, but Robin catching them in her Spider Net and Saturn leaving for the power plant are in 1148, so it is filed at the later episode.',
    },
  },
  'franky': {
    235: {
      source: 'https://onepiece.fandom.com/wiki/Episode_235',
      note: 'Threshold entry. Franky leaves Usopp to the family and “goes shopping” (ep 234); Usopp leaves and challenges Luffy (ep 235).',
    },
    250: {
      source: 'https://onepiece.fandom.com/wiki/Episode_250',
      note: 'Tom’s punch, the confession, the rifle in Spandam’s face, the train. “Eight years” = four rebuilding, four as the Franky Family.',
    },
    284: {
      source: 'https://onepiece.fandom.com/wiki/Episode_284',
      note: 'Pluton blueprints burned before Spandam; Kokoro’s Rocketman arrives.',
    },
    289: {
      source: 'https://onepiece.fandom.com/wiki/Episode_289',
      note: 'Candidate 294 → 289. The cola shortage, Chopper’s vegetable juice, tea and cola, and the Strong Hammer are ep.288; the fight continues over the water and Franky wins with Coup de Vent at 289. At 293 he is already taking the key from the unconscious Fukurou.',
    },
    312: {
      source: 'https://onepiece.fandom.com/wiki/Episode_312',
      note: 'Franky’s Klabautermann memory, Iceburg’s arrival, the keel snapping, the Viking funeral and Merry’s last words are all ep.312. Franky crying on all fours is from Franky/History (no Qref); the summary says nobody could hold back tears, so the story says only that he cries.',
    },
    322: {
      source: 'https://onepiece.fandom.com/wiki/Episode_322',
      note: 'The chase (ep 321), Robin and Iceburg persuade him (ep 322). Dossier: Straw Hats at 322.',
    },
    381: {
      source: 'https://onepiece.fandom.com/wiki/Episode_381',
      note: '“Two days later, Usopp and Franky made a grave for the dead Rumbar Pirates” — same episode as Brook’s own joining; Franky also repairs the rudder and sails of Brook’s old ship for the Thriller Bark Victims to use.',
    },
    418: {
      source: 'https://onepiece.fandom.com/wiki/Episode_418',
      note: "Corrected from the issue's guess of exploring Vegapunk's lab (that starts at ep 508, already told by the existing 514 entry): 418 has Franky flung onto the snow island by Kuma, mistaken for game by a hunter and his grandson, and given an unwanted comic personality shift by tea at the local hospital — resolves within this episode.",
    },
    514: {
      source: 'https://onepiece.fandom.com/wiki/Episode_514',
      note: 'Baldimore; the skull button is on Franky/History (ep 508).',
    },
    519: {
      source: 'https://onepiece.fandom.com/wiki/Episode_519',
      note: 'Robin reaches Grove 17 and finds Franky showing off his rebuilt, post-timeskip body.',
    },
    535: {
      source: 'https://onepiece.fandom.com/wiki/Episode_535',
      note: "Franky finds the Thousand Sunny with the help of Tom's brother, Den (Den/History confirms his debut at chapter 616, episode 535).",
    },
    566: {
      source: 'https://onepiece.fandom.com/wiki/Episode_566',
      note: "General Franky first appears in this saga at episode 557, against Daruma's sinkhole trap, then is turned on Ikaros Much starting episode 561 (Ikaros Much/History: 'Ikaros and Franky begin their fight'); the fight concludes with the Franky Radical Beam at 566 (Ikaros Much/Major Battles: 'Ikaros and Franky continue and conclude their fight,' ep 564/566). The story is titled without 'debut', since the mecha's actual first use was against Daruma, not Ikaros.",
    },
    621: {
      source: 'https://onepiece.fandom.com/wiki/Episode_621',
      note: "Filed at the top of the 618–621 range: 619 ends with the robot's fate unknown, and 621 is where General Cannon settles it. Second pass: Baby 5 is a woman carried in by Buffalo, her missile only knocks the robot flat — the armour is pierced by the sickle, which is what Franky gives them credit for — the chain is Buffalo's, and the cannon is the ship's own brought ashore.",
    },
    716: {
      source: 'https://onepiece.fandom.com/wiki/Episode_716',
      note: "The thirty-blows count is 715, but 715 ends mid-flashback; 716 carries the last punch, Senor Pink's concession and Franky wiping his tears. Second pass: the fight starts at the factory and finishes off a tower outside it, so the gate was too precise.",
    },
    1042: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1042',
      note: 'General Cannon, then Radical Beam to the belly. Second pass: the horn-grab throw was into the wall, and the torn thruster was unattested — both corrected.',
    },
    1068: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1068',
      note: 'Candidate 1065, which is wrong for the catch itself: 1065 only has Franky searching for Zoro at the Right-Brain Tower (Qref chap=1038 ep=1065), Chopper worrying about the medicine’s double price, and Zoro bleeding out and seeing the reaper. 1067 has the explosion that crumbles the island and Zoro falling off its edge; 1068 has Franky saving him with his extendable arm and pulling him back onto the island (Qref chap=1041 ep=1068). Filed at 1068.',
    },
    1149: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1149',
      note: 'Candidate was 1149 (Qref ep=1149). In 1147 Franky moves to block Nusjuro and Sanji takes his place; the tackle that saves Bonney from the slash, and Nusjuro leaving for the Labophase, are in 1149.',
    },
  },
  'brook': {
    339: {
      source: 'https://onepiece.fandom.com/wiki/Episode_339',
      note: 'Threshold entry, told from the first sighting (eps 337–338). Second pass: no piano on the ghost ship — he sings softly over tea; title and body corrected.',
    },
    362: {
      source: 'https://onepiece.fandom.com/wiki/Ryuma_(Zombie)',
      note: 'Ryuma’s own history: Brook challenges him at ep 352 (chap 458) and loses; Zoro steps in at ep 357 (chap 462); the duel’s end, Ryuma bestowing Shusui and Brook’s shadow returning to him are all dated to ep 362 (chap 467).',
    },
    380: {
      source: 'https://onepiece.fandom.com/wiki/Episode_380',
      note: '“Binks’ Sake - The Song that Connects the Past and Present”: Yorki’s illness, the crew splitting up, and his farewell request that Brook send them off with their song, distinct from the poisoning and Tone Dial recording already told at ep 381.',
    },
    381: {
      source: 'https://onepiece.fandom.com/wiki/Episode_381',
      note: 'The Rumbar Pirates, Laboon, Binks’ Sake, he boards (eps 380–381).',
    },
    421: {
      source: 'https://onepiece.fandom.com/wiki/Episode_421',
      note: 'Last episode of the Amazon Lily Arc: Brook, blown away by Kuma’s attack, lands on Namakura Island and is mistaken for a demon by cultists seeking revenge on the Longarm Tribe — resolves fully within this episode.',
    },
    515: {
      source: 'https://onepiece.fandom.com/wiki/Episode_515',
      note: 'Second pass: moved from 517, where it was misfiled. Brook/History — the Namakura cult took him for their demon and he helped them; the Longarm Tribe caged him as a sideshow in Tehna Gehna, where he reads the paper (ep 512); this account concludes when he plays “Bone to Be Wild” from the cage and resolves to keep going for Luffy, per the episode’s own summary.',
    },
    517: {
      source: 'https://onepiece.fandom.com/wiki/Episode_517',
      note: 'Second pass: moved from a fabricated 518 (which has no Brook content beyond a background poster). Episode 517’s own summary is the actual Soul King reveal — posters all over Sabaody Park, the Longarm Tribe as his managers, his final world-tour concert. It only looked “taken” because the cage-song entry above was itself misfiled here instead of at 515.',
    },
    566: {
      source: 'https://onepiece.fandom.com/wiki/Episode_566',
      note: "Moved off the 561–565 candidate: Zeo's chain snaps Brook's skull off across 561–565, and the Yomi Yomi no Mi wiki page confirms that during this fight Brook explains his soul, not bone or muscle, holds him together and can be poured into an object; he freezes his blade with it and cuts Zeo down at 566, where the wiki's own Major Battles list marks the win.",
    },
    653: {
      source: 'https://onepiece.fandom.com/wiki/Episode_653',
      note: 'Filed at the bottom of the 653–654 range: the trick, the cut and the whole ship reverting are all inside 653; 654 only opens after the fight. Second pass: she restores his instrument as well as his blade, and his pretext is to play alongside her.',
    },
    820: {
      source: 'https://onepiece.fandom.com/wiki/Episode_820',
      note: 'Corrected from the candidate range 818–820: episode 818 only shows Brook’s stand beginning, and 819 has no Brook content; 820 is where he lands one grounded strike that wounds Big Mom’s fire homie despite its flames. Stops before the strip-search/pet-decision/text-reveal beats that ep 827 alone owns, so the two stories do not overlap.',
    },
    827: {
      source: 'https://onepiece.fandom.com/wiki/Episode_827',
      note: 'Second pass: moved from 869. Big Mom overpowers him and keeps him as a pet (eps 818–820); he pulls the rubbings out of his skull in 827.',
    },
    834: {
      source: 'https://onepiece.fandom.com/wiki/Episode_834',
      note: 'Brook in disguise smashes the portrait to trigger a private panic in Big Mom, then unmasks to turn that panic into a public rampage — an entirely separate beat from ep 827, no overlap. The portrait’s subject is left unnamed since `carmel` is not filed until episode 836.',
    },
    929: {
      source: 'https://onepiece.fandom.com/wiki/Episode_929',
      note: 'Candidate 926–929 (Qref ep=926,928,929). The anime moves the discovery earlier than the manga: in 923 Brook, as a soul, passes through a strangely reinforced door in Orochi’s mansion and finds the Poneglyph. 925 has Robin searching for it; 926 Brook going out as a soul to protect her; 927–928 him scaring the Oniwabanshu as a ghost until they realise he is not attacking, and Nami’s Zeus striking Orochi. Only 929, at the snowy cottage meeting, says the Poneglyph Brook found was not red. Filed at 929.',
    },
    998: {
      source: 'https://onepiece.fandom.com/wiki/Episode_998',
      note: 'Candidate 998–999. Everything is in 998: Big Mom recalling the ruined wedding cake and Brook destroying her only portrait, noticing Zeus carried off by Nami and grabbing him, Franky and Brook arriving on the Kurosai FR-U IV (the anime adds their song and Brook standing to jump off), running over her face, and Brook slicing Zeus in half (Qref chap=988 ep=998). 999 only adds Nami’s joy at seeing them and the Numbers fight, so the story is filed at 998. Zeus is not a filed record.',
    },
  },
  'jinbe': {
    430: {
      source: 'https://onepiece.fandom.com/wiki/Episode_430',
      note: 'Threshold entry. Second pass: Luffy only reaches Level 6 in 442–443, so the story now tells only what 430 shows — the cell, the refusal to fight Whitebeard, the offer to give up the title.',
    },
    443: {
      source: 'https://onepiece.fandom.com/wiki/Episode_443',
      note: 'Second pass: moved from 442. Episode 442 ends with Luffy only just meeting Crocodile as a cliffhanger — Jinbe’s plea and release (with Crocodile, via Inazuma’s Devil Fruit unlocking the cuffs, not Luffy) is Episode 443’s own scene, "The Strongest Team is Formed."',
    },
    466: {
      source: 'https://onepiece.fandom.com/wiki/Episode_466',
      note: "Corrected from the issue's candidate of 459, which is only Sengoku revealing Ace's parentage: Jinbe's Warlord resignation to Sengoku's face is Qref'd to chapter 557, which other character pages map to episode 466.",
    },
    505: {
      source: 'https://onepiece.fandom.com/wiki/Episode_505',
      note: 'Second pass: moved from 489. The Akainu blow while carrying Luffy (ep 487) comes first; the “you still have your crew” reminder is Amazon Lily (ep 505).',
    },
    516: {
      source: 'https://onepiece.fandom.com/wiki/Episode_516',
      note: 'Rayleigh takes over, the promise to meet at Fish-Man Island.',
    },
    547: {
      source: 'https://onepiece.fandom.com/wiki/Episode_547',
      note: "The flashback Jinbe tells Nami covers Fisher Tiger's rise and founding of the Sun Pirates, Otohime's coexistence campaign, Fisher Tiger's death refusing a blood transfusion (ep 543) and Otohime's assassination (ep 546); it closes at episode 547.",
    },
    569: {
      source: 'https://onepiece.fandom.com/wiki/Episode_569',
      note: 'Episode 568 ends with Luffy inviting Jinbe to join the crew as a cliffhanger; 569 confirms Jinbe declines for now, citing unfinished business.',
    },
    819: {
      source: 'https://onepiece.fandom.com/wiki/Episode_819',
      note: 'Corrected from the candidate range 818–819: episode 818 only shows Jinbe entering the Prisoner Library and knocking out the guard; the book is actually burned and Luffy/Nami freed in 819.',
    },
    876: {
      source: 'https://onepiece.fandom.com/wiki/Episode_876',
      note: 'Corrected from the candidate range 875–877: episode 875 only shows the Sun Pirates opening a path via a decoy-ship trick; Jinbe explicitly choosing to stay behind and defend the escape is confirmed in 876. “Wano” as the reunion point was dropped since that arc is not revealed until episode 890.',
    },
    981: {
      source: 'https://onepiece.fandom.com/wiki/Episode_981',
      note: 'Second pass: moved from 977. Jinbe surfaces and smashes the ship (ep 980), takes the helm (ep 981). The dossier affiliation moved 977 → 980 with it.',
    },
    1040: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1040',
      note: 'Candidate 1038–1040 (Qref ep=1038,1039; ep=1040). Jinbe stays behind while Luffy goes on in 1012; the Six Powers, the escaped CP9 agent and the guarded fruit eaten by Luffy are 1039; the Nika story, the executed guard, the question about fish-men and slavery, the broken fingers, the tail, the single punch and the warning about history are 1040, so the story is filed there. The thief of the fruit (named only in the History, not in the episode summaries) is left out.',
    },
    1094: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1094',
      note: 'Candidate was 1094–1096 (Qref ep=1094,1095,1096). The disguise and the whole conversation about Kuma are in 1094; the rusty robot in the scrapyard (1095) and Vegapunk stuck in it (1096) are not part of the story, so it is filed at 1094.',
    },
  },
  'trafalgar-law': {
    392: {
      source: 'https://onepiece.fandom.com/wiki/Episode_392',
      note: 'Character-debut episode for Law and Bepo; matches the archive’s own revealedAtEpisode threshold.',
    },
    399: {
      source: 'https://onepiece.fandom.com/wiki/Episode_399',
      note: 'Law, Luffy and Kid promise to meet in the New World; a Pacifista posing as Kuma attacks Law and Kid to close the Sabaody arc for them.',
    },
    489: {
      source: 'https://onepiece.fandom.com/wiki/Episode_489',
      note: "Second pass: moved from 488. Law's arrival and the initial dive attempt are ep488; the operating-table scene, Kizaru firing Yasakani no Magatama at the diving hull, and the war officially ending are all ep489 content.",
    },
    594: {
      source: 'https://onepiece.fandom.com/wiki/Episode_594',
      note: 'Alliance formed on Punk Hazard, Caesar Clown named as first target — exact match, no change from the issue’s candidate.',
    },
    706: {
      source: 'https://onepiece.fandom.com/wiki/Episode_706',
      note: 'Corazon’s death and the treasure-chest scene are both explicit in this episode’s long summary — exact match.',
    },
    1066: {
      source: 'https://onepiece.fandom.com/wiki/Ope_Ope_no_Mi',
      note: 'Corrected from the candidate’s 1067: Puncture Wille’s first use on Big Mom is Qref’d to chapter 1039 / episode 1066; 1067 is only her fall into the magma chamber.',
    },
  },
  'silvers-rayleigh': {
    398: {
      source: 'https://onepiece.fandom.com/wiki/Episode_398',
      note: 'Second pass: rewritten. The chain-breaking and protecting Camie from Shalria are ep397 events; ep398 itself covers Rayleigh defusing Camie\'s exploding collar and Kid revealing his identity as the "Dark King."',
    },
    400: {
      source: 'https://onepiece.fandom.com/wiki/Episode_400',
      note: 'Long summary confirms Roger’s-first-mate reveal and Robin’s unanswered Void Century question in the same episode; ends on Kizaru’s cannonball arrival.',
    },
    404: {
      source: 'https://onepiece.fandom.com/wiki/Episode_404',
      note: 'Corrected from the candidate’s 405: “Rayleigh arrived out of nowhere, and managed to block Kizaru’s attack” is this episode’s own short summary.',
    },
    507: {
      source: 'https://onepiece.fandom.com/wiki/Episode_507',
      note: 'Rayleigh returns Luffy’s straw hat and explains Kuma’s plan to Luffy and Jinbe.',
    },
    516: {
      source: 'https://onepiece.fandom.com/wiki/Episode_516',
      note: 'Replaces an unverifiable “tells Shakky about a hat” beat near episode 523: Luffy sets his hat down at Rusukaina as training begins.',
    },
    1130: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1130',
      note: 'Second pass: rewritten. The "rescuing a captive from the World Nobles" (Shakky) beat has blank ep= citations on Rayleigh\'s own wiki page — not yet adapted into the anime. Ep1130 itself only shows the Roger/Rocks Pirates clash over two Devil Fruits and the incident\'s later erasure from history.',
    },
  },
  'borsalino': {
    401: {
      source: 'https://onepiece.fandom.com/wiki/Episode_401',
      note: 'Matches the archive’s revealedAtEpisode threshold; cannonball landing and demonstration of light powers against Hawkins, Urouge and Drake.',
    },
    404: {
      source: 'https://onepiece.fandom.com/wiki/Episode_404',
      note: 'Corrected from the candidate’s 405, same source as Rayleigh’s entry at this episode — same scene, Kizaru’s side of it.',
    },
    476: {
      source: 'https://onepiece.fandom.com/wiki/Sakazuki',
      note: 'Corrected from the candidate’s 478: the Borsalino page Qrefs the “more than willpower” line to chapter 567 / episode 476; Episode_476’s short summary confirms the kick and catch.',
    },
    544: {
      source: 'https://onepiece.fandom.com/wiki/Episode_544',
      note: 'Flashback episode: “easily beaten by Vice-Admiral Borsalino” after Fisher Tiger’s death — confirms his rank at the time and the Arlong arrest. Second pass: fixed a claim that Jinbe watches the arrest from a distance — per the wiki, Jinbe only learns of it the next day by reading the newspaper.',
    },
    1127: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1127',
      note: 'Long summary: “he throws Kizaru far into the sky” — matches “thrown out” of the Labophase fight. Egghead pass (#36): the invented closing line (“the first time anyone has treated him like this”, the island “without its fastest admiral”) is replaced by what 1127 shows, Kizaru stopping short of the sea and coming back as beams of light; the 1126 “only following orders” line replaces “ready to do it with his own hands”.',
    },
    1141: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1141',
      note: 'Long summary: “Sanji protects him, deflecting Kizaru’s light beam with his leg” — exact match. Egghead pass (#36): “shielding the scientist with his own body”, “certain no one can reach him” and “for the first time all day” were invented and are gone; the reaction (stunned, love stronger than light, take their heads) is from Sanji/History, chap=1107 ep=1141. Retitled: the beam was kicked apart, not the kick deflected. The wiki disagrees on the target (the 1141 Long Summary says Vegapunk, Sanji/History says Bonney, Franky/History both), so neither this story nor Sanji’s names one.',
    },
  },
  'sakazuki': {
    463: {
      source: 'https://onepiece.fandom.com/wiki/Episode_463',
      note: 'Matches the archive’s revealedAtEpisode threshold exactly: Akainu stops Jozu’s ice block, revealing his magma power.',
    },
    472: {
      source: 'https://onepiece.fandom.com/wiki/Episode_472',
      note: 'Corrected from the candidate’s 471, which is only the stabbing itself: the episode titled “Akainu’s Plot” is where Squard explains the lie Sakazuki told him.',
    },
    483: {
      source: 'https://onepiece.fandom.com/wiki/Episode_483',
      note: 'Exact match, no change from the candidate: Ace’s death by magma fist.',
    },
    489: {
      source: 'https://onepiece.fandom.com/wiki/Episode_489',
      note: '“Enter Shanks! The Ultimate War Ends at Last” — exact match, no change from the candidate.',
    },
    582: {
      source: 'https://onepiece.fandom.com/wiki/Episode_582',
      note: 'Smoker explains on screen that the island was Aokiji and Akainu’s ten-day duel ground for the Fleet Admiral title two years earlier.',
    },
    1154: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1154',
      note: 'Corrected framing from the candidate’s “Akainu unreachable”: the long summary shows Sakazuki does take the call and berates Kizaru, who snaps back; Sakazuki apologises and calls him “brother” — confirmed via the Sakazuki wiki page’s Kizaru relationship section.',
    },
  },
  'sabo': {
    497: {
      source: 'https://onepiece.fandom.com/wiki/Episode_497',
      note: 'Matches the archive’s revealedAtEpisode threshold: building the Gray Terminal hideout after fleeing Garp.',
    },
    503: {
      source: 'https://onepiece.fandom.com/wiki/Sabo',
      note: 'Corrected from the candidate’s 502, which is only the decision to leave: the boat is actually destroyed by the World Noble in this episode, matching the dossier’s own status entry at episode 503. Second pass: the letter was addressed to Ace only, asking him to look after Luffy — fixed wording that wrongly named Luffy as a co-recipient.',
    },
    663: {
      source: 'https://onepiece.fandom.com/wiki/Episode_663',
      note: 'Replaces the candidate’s 504 (“pulled from wreckage”): the dossier keeps Sabo’s status as presumed-dead until episode 663, so his survival can only be shown to the reader here, where he reveals himself to Luffy at the Corrida Colosseum.',
    },
    678: {
      source: 'https://onepiece.fandom.com/wiki/Episode_678',
      note: 'Corrected from the candidate’s 679: this is the exact episode, matching the dossier’s own devilFruit entry at episode 678, where Sabo eats the Flame-Flame Fruit and destroys the Colosseum floor. Second pass: the sequence was reversed — Sabo first cracks the floor with a bare Haki punch, then eats the fruit and catches Rebecca, and only then uses his first fire punch to break through into the underground port; corrected.',
    },
    738: {
      source: 'https://onepiece.fandom.com/wiki/Episode_738',
      note: 'Corrected from the candidate’s 746: the Sabo wiki page Qrefs the Vivre Card scene to chapter 794 / episode 737–738; Episode_738’s own short summary confirms Sabo gives a Vivre Card of Luffy to the Straw Hats.',
    },
    1120: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1120',
      note: 'Corrected from the candidate’s 1116, which is only the start of the Momoiro Island meeting: the Imu/First-Twenty theory is Qref’d to chapter 1086 / episode 1120, confirmed by that episode’s own short summary — "Ivankov deduced that Imu is Nerona Imu, one of the First Twenty." Corrected again after review (round 4 of PR #66): an earlier pass had the theory go unvoiced by all three, contradicting the episode’s own summary and the sibling monkey-d-dragon entry at the same episode; Ivankov now voices the suspicion in both stories, as the wiki does.',
    },
  },
  'shanks': {
    4: {
      source: 'https://onepiece.fandom.com/wiki/Episode_4',
      note: 'Threshold entry. The whole Foosha flashback, Higuma, the Sea King, the arm, the hat.',
    },
    45: {
      source: 'https://onepiece.fandom.com/wiki/Episode_45',
      note: 'No Qref citation (manga ch. 96); verified directly. Long Summary: "Dracule Mihawk delivers the news to the Red Hair Pirates, who celebrate Luffy’s accomplishment" (his first bounty, 30,000,000 berries) — Mihawk sails to Shanks’s crew with word of the straw-hatted boy, at episode 45.',
    },
    151: {
      source: 'https://onepiece.fandom.com/wiki/Episode_151',
      note: 'The Five Elders learn Shanks is trying to reach Whitebeard via messenger and panic; written without naming Whitebeard by choice, even though his revealedAtEpisode (corrected to 151 in the same PR) now matches this story’s own episode and would technically allow the marker.',
    },
    316: {
      source: 'https://onepiece.fandom.com/wiki/Episode_316',
      note: 'Whitebeard recalls Loguetown and Buggy, Teach’s scar, the request about Ace refused, the sky splits.',
    },
    434: {
      source: 'https://onepiece.fandom.com/wiki/Shanks/History',
      note: 'Confirmed via Qref (chap 533, ep 434): Momonga’s men report that Shanks intercepted a rival Emperor en route to Marineford, ending in a stalemate. Written without naming the Emperor, since his own revealedAtEpisode (739) is far later than 434.',
    },
    489: {
      source: 'https://onepiece.fandom.com/wiki/Episode_489',
      note: 'Koby’s cry and Akainu’s fist stopped (ep 488); hat to Buggy, Teach declines, the burial, the war ends (ep 489).',
    },
    505: {
      source: 'https://onepiece.fandom.com/wiki/Shanks/History',
      note: 'Confirmed via Qref (chap 590, ep 505): the Red Hair Pirates attend Whitebeard and Ace’s funeral with the Whitebeard Pirates; Marco thanks Shanks. Second pass: the closing line invented "victories and defeats make a real man"; replaced with the episode\'s actual content — Shanks silently tells Luffy it is okay to cry, but what matters is moving on.',
    },
    1082: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1082',
      note: 'The stolen fruit recalled (ep 1081); Momonosuke’s flame, Ryokugyu retreats, the ship departs (ep 1082).',
    },
    1112: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1112',
      note: "Candidate was 1112 (Qref ep=1109,1112). The tavern and Kid's approach are in 1109; the one-blow Kamusari on Kid and Killer and the sinking of the Victoria Punk are in 1112.",
    },
  },
  'portgas-d-ace': {
    95: {
      source: 'https://onepiece.fandom.com/wiki/Episode_95',
      note: 'Threshold entry. Second pass: Nanohana (a port, not the desert), the ships (plural), and “Blackbeard” — the name Teach is first heard in 151.',
    },
    145: {
      source: 'https://onepiece.fandom.com/wiki/Portgas_D._Ace/History',
      note: 'Ace hitches a ride on Buggy’s ship for a free meal, falls asleep, and Buggy’s crew are talked out of attacking him; he promises to point them toward Luffy (Qref chap=233, page=11-14, ep=145). Whitebeard/edward-newgate is not named, since his own revealedAtEpisode (151, corrected from 152 in the same PR) is still after this episode.',
    },
    325: {
      source: 'https://onepiece.fandom.com/wiki/Episode_325',
      note: 'Episode 325 is the whole Banaro Island duel: Teach confesses killing Thatch, threatens Luffy, and the final clash is left without an outcome. Candidate 325 kept; the result is told at 378.',
    },
    378: {
      source: 'https://onepiece.fandom.com/wiki/Episode_378',
      note: 'Issue candidate for “the world learns his public execution is scheduled”, but the episode 378 summary and character list (Ace, Iceberg, Peepley Lulu “newspaper”) only show Hogback handing Absalom a newspaper revealing Blackbeard’s capture of Ace and his new Warlord seat; the execution itself is not announced on screen until 395, already the subject of the existing 416 entry. Filed here as the capture becoming public, distinct from that later reveal.',
    },
    416: {
      source: 'https://onepiece.fandom.com/wiki/Episode_416',
      note: 'Second pass: moved from 325, whose outcome is left unrevealed on screen. The defeat is shown in 378, the execution announced in 395, and Luffy learns and chooses the prison in 416. A vivre card burns and shrinks; it does not point. The prison and the execution ground are not named: the archive files those arcs at 422 and 457.',
    },
    461: {
      source: 'https://onepiece.fandom.com/wiki/Episode_461',
      note: 'Self-contained flashback: Ace refuses to join, is carried aboard unconscious, tries to kill Whitebeard a hundred times, then accepts him as captain and adopted father — confirmed as 461, not the candidate’s 464, which is the unrelated Oars Jr. scene.',
    },
    482: {
      source: 'https://onepiece.fandom.com/wiki/Episode_482',
      note: 'Galdino’s wax key and Ace freed (ep 480). Second pass: “picks up his necklace” was unattested and removed.',
    },
    483: {
      source: 'https://onepiece.fandom.com/wiki/Episode_483',
      note: 'The insult (ep 482), the last words and the card burning out (ep 483). Dossier: deceased at 483.',
    },
    497: {
      source: 'https://onepiece.fandom.com/wiki/Episode_497',
      note: 'Bumped up from the candidate’s ~494: the oath-cup sake ceremony airs at episode 496, but Sabo is filed in this archive with revealedAtEpisode 497, so the story can’t be placed earlier without naming him ahead of his own threshold.',
    },
    505: {
      source: 'https://onepiece.fandom.com/wiki/Episode_505',
      note: 'Ace’s hat, knife and necklace made into his grave marker beside Whitebeard’s in the New World; the wiki cites this exactly at chapter 590 / episode 505.',
    },
    678: {
      source: 'https://onepiece.fandom.com/wiki/Episode_678',
      note: "678 is where Sabo takes the chest and eats the fruit; that the fruit was Ace's was settled back at 631, that a dead user's power resurfaces at 632, and that Hiken is Ace's move at 94. Ace himself is on screen only in 679, so the story names nothing that needs him there. Second pass: Luffy hands over his place because he leaves the ring to go after a friend, not because he cannot eat a second fruit.",
    },
    897: {
      source: 'https://onepiece.fandom.com/wiki/Episode_897',
      note: 'Candidate 894–897 (Qref ep=894,897). Hitetsu’s account of Ace’s arrival (tied up, food eaten, freed by his fruit, food fetched from the forest, weeks in the village, Tama’s fondness) and Luffy’s blunt news of his death are 894; Tama’s request to join his crew and his promise to return when she is an enchanting kunoichi are told only in 897, when she wakes and hits Luffy, so the story is filed there. The episodes disagree on the date (four years in 894, three in 897), so the body says some years ago. Ace weaving a kasa is not in either summary and is left out.',
    },
    1015: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1015',
      note: 'Candidate 1013–1015 (Qref ep=1013,1015). The broken dragon statue is first shown in 1012; the raid to rescue the children, Kaido away, the fight with Yamato, Roger, the exploding cuffs and the smashed statue are 1013; the campfire talk about Luffy’s dream, the Vivre Card made from Ace’s fingernail and its disintegration at Marineford are 1015, so the story is filed there. Oden’s journal appears in 1015 only as Yamato’s possession handed to Momonosuke, with no link to Ace in the summaries, so the logbook is left out. Marco’s memory of Whitebeard refusing Ace a war with Kaido (1014) is left out too.',
    },
  },
  'kaido': {
    739: {
      source: 'https://onepiece.fandom.com/wiki/Episode_739',
      note: "Threshold entry. He lands on the Kid Pirates' hideout, not a base of his own — his crew is never named in 739, so the story does not name it either.",
    },
    915: {
      source: 'https://onepiece.fandom.com/wiki/Episode_915',
      note: 'The drunken dragon is 912–913 and the castle is 913, but Thunder Bagua is exclusive to 915. The castle is left unnamed because Oden is not filed until 960. Second pass: "azure" echoes the fruit\'s own name, which is not given until 1014, and he flies to the castle on Hawkins\' lie about where his quarry is — both corrected.',
    },
    955: {
      source: 'https://onepiece.fandom.com/wiki/Episode_955',
      note: '953 only continues the clash; 955 declares the alliance. Corrected from the issue\'s "days of fighting": the wiki says they fought through the night. Second pass: only one officer looks for a way out of the island, the declared aim at 955 is the world rather than the World Government — that framing waits until 993 — and his reason for striking her chains off is never given.',
    },
    995: {
      source: 'https://onepiece.fandom.com/wiki/Episode_995',
      note: "Moved twice. The issue filed it at 993, but 992 only names the project and 993 adds the Big Mom announcement; the plan's contents and Orochi's beheading are in 994. The second pass moved it again: the retainers' choice between serving him and dying is only shown in 995. The beats were reordered too — on screen the beheading comes before the New Onigashima plan, not after.",
    },
    1017: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1017',
      note: 'The five reach the roof in 1015; filed at 1017 on purpose because the story describes the combined barrage and his counterattack, which are 1016–1017. The story does not say which of the five drew blood.',
    },
    1077: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1077',
      note: '1076 only drops him into an abyss; 1077 names the magma chamber, the eruption and Onigashima set down beside the capital. Whether he lived is left open, as the episode leaves it.',
    },
  },
  'charlotte-linlin': {
    786: {
      source: 'https://onepiece.fandom.com/wiki/Episode_786',
      note: "Threshold entry, matching the issue's candidate exactly. The long summary ends with Big Mom asking her singers how long until the Tea Party (three days), confirming Sanji's arrival, checking on the cake ingredients, and hearing that Luffy is in her territory.",
    },
    789: {
      source: 'https://onepiece.fandom.com/wiki/Episode_789',
      note: "Corrected from the candidate episode 790 by an independent second pass: the rampage, the son's death, and Jinbe calming her with living croquembouche are all Episode 789's content — Episode 790 covers Jinbe's own backstory and the Sanji Retrieval Team reaching the island instead, and adds nothing to this story. The son is left unnamed (no `charlotte-moscato` record exists in the archive).",
    },
    835: {
      source: 'https://onepiece.fandom.com/wiki/Episode_835',
      note: "Matches the issue's candidate exactly. Luffy shows Big Mom the reassembled portrait pieces and she unleashes the scream that incapacitates the hall — confirmed within 835. `carmel` is not filed until episode 836, so the portrait's subject is never named.",
    },
    838: {
      source: 'https://onepiece.fandom.com/wiki/Episode_838',
      note: "Matches the issue's candidate exactly. The flashback (started 836) resolves by 838's end: Carmel, the other children and the table vanish without explanation the night before the planned sale, and Streusen seizes the opportunity to shape Linlin's ambitions. Second pass: the story originally stated the sale to Cipher Pol as the confirmed cause, but the source (episode 837) leaves the disappearance itself unexplained — the sale was only the plan for the following day, and the Charlotte Linlin wiki page itself calls it a mysterious disappearance; corrected to match.",
    },
    946: {
      source: 'https://onepiece.fandom.com/wiki/Episode_946',
      note: "Matches the issue's candidate exactly. Queen's dive-bomb strike to Big Mom's head at the quarry, after the failed oshiruko search and the chase through the Prisoner Mines, restores her memory within 946. Second pass: the story originally opened with 'her fall from Onigashima' as the cause of her amnesia, but per the Wano Country Arc summary she lost her memory falling into the sea when King's attack sent the Queen Mama Chanter down before it ever reached Wano — corrected to match.",
    },
    1067: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1067',
      note: "Matches the issue's candidate exactly. Kid and Law's combined strike defeats Big Mom and drops her into Onigashima's exposed magma chamber within 1067.",
    },
  },
  'gecko-moria': {
    343: {
      source: 'https://onepiece.fandom.com/wiki/Episode_343',
      note: 'Threshold entry. An old, already-shadowless zombie warns the crew about Moria and that Thriller Bark is a ship, not an island; Moria himself is shown waking from his four-day sleep at the end of the episode.',
    },
    350: {
      source: 'https://onepiece.fandom.com/wiki/Gecko_Moria',
      note: 'Moria’s history: the shadow cut is ep 349 (chap 455), and he carries it to Oars’s freezer, declaring it brings him closer to becoming Pirate King, at ep 350 (chap 456). The comparison to a specific past defeat is left unnamed since that rival is not filed until much later.',
    },
    371: {
      source: 'https://onepiece.fandom.com/wiki/Gecko_Moria',
      note: 'Moria explains Kage Kakumei to the Straw Hats and is restrained by Robin, who he then cuts the shadow off of, all within ep 371 (chap 476-477).',
    },
    374: {
      source: 'https://onepiece.fandom.com/wiki/Gecko_Moria',
      note: 'Shadow’s Asgard is activated at ep 373 (chap 481); Moria is overwhelmed by Luffy’s Gear Second and Third and releases the rest of the shadows at ep 374 (chap 482), where the story is filed.',
    },
    468: {
      source: 'https://onepiece.fandom.com/wiki/Gecko_Moria',
      note: 'Jinbe defeats Moria with a single Samegawara Seiken at ep 468 (chap 559, Qref name="Jinbe Defeats Moria"), corrected from the issue’s candidate of 472, which is actually Squard stabbing Whitebeard, an unrelated beat. Little Oars Jr. is not a filed character, so he is described generically.',
    },
    1156: {
      source: 'https://onepiece.fandom.com/wiki/Gecko_Moria',
      note: 'Egghead Arc section: Perona infiltrates Hachinosu and frees Koby in exchange for his help freeing Moria; Pizarro confirms Moria’s escape to Blackbeard at ep 1156 (chap 1126), the episode by whose end the escape is confirmed to the reader.',
    },
  },
  'marshall-d-teach': {
    151: {
      source: 'https://onepiece.fandom.com/wiki/Episode_151',
      note: 'Threshold entry. Teach is spotted in Mock Town after Luffy’s bounty poster spreads, and Laffitte recommends him for the empty Warlord seat at the same Mary Geoise summit.',
    },
    325: {
      source: 'https://onepiece.fandom.com/wiki/Episode_325',
      note: 'Teach kills Thatch and fights Ace on Banaro Island; the Yami Yami no Mi is revealed. Corrected in the Water Seven batch: the episode leaves only “Ace’s hat” on the ground, not a straw hat.',
    },
    446: {
      source: 'https://onepiece.fandom.com/wiki/Episode_446',
      note: 'Teach walks into Impel Down through the front entrance and breaks up the Luffy/Hannyabal confrontation on Level 4.',
    },
    486: {
      source: 'https://onepiece.fandom.com/wiki/Episode_486',
      note: 'A black cloth is lowered over Whitebeard’s body and the ground shakes; episodes 485–486 cover Whitebeard’s death and its aftermath.',
    },
    513: {
      source: 'https://onepiece.fandom.com/wiki/Episode_513',
      note: 'Teach and his crew make their first move in the New World, capturing and taunting Jewelry Bonney before an admiral arrives.',
    },
    1115: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1115',
      note: 'Corrected from the issue’s candidate range 1093/1115: the Blackbeard Pirates’ ambush on Law’s crew at sea is confirmed within episode 1115 itself.',
    },
  },
  'bartholomew-kuma': {
    151: {
      source: 'https://onepiece.fandom.com/wiki/Episode_151',
      note: 'Threshold entry. Kuma arrives at the Mary Geoise Warlord summit in his bible-and-paw coat.',
    },
    368: {
      source: 'https://onepiece.fandom.com/wiki/Episode_368',
      note: 'Kuma asks Perona where she would like to go on a trip, before sending her away from Thriller Bark.',
    },
    377: {
      source: 'https://onepiece.fandom.com/wiki/Episode_377',
      note: 'Kuma draws all the pain out of Luffy’s body into a bubble; Zoro takes it in his place, resolving within this episode’s Long Summary (“nothing happened”).',
    },
    405: {
      source: 'https://onepiece.fandom.com/wiki/Episode_405',
      note: 'Kuma makes the rest of the Straw Hats vanish one by one with a swipe of his paw, ending with Luffy himself.',
    },
    523: {
      source: 'https://onepiece.fandom.com/wiki/Episode_523',
      note: 'Franky reveals that Kuma has stood guard over the abandoned Thousand Sunny for the full two years since Sabaody.',
    },
    1137: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1137',
      note: 'Kuma arrives running on Egghead and punches an Elder (Saturn) in the face. Egghead pass (#36): “for the first time since Thriller Bark acts on his own” was wrong (he runs to Mary Geoise on his own from 1098), and Saturn’s motive and fear were invented; rewritten from the 1137 Long Summary: the shots that do not stop him, Saturn piercing his back, the chip and kill switch failing, the Haki punch.',
    },
  },
  'sengoku': {
    151: {
      source: 'https://onepiece.fandom.com/wiki/Episode_151',
      note: 'Threshold entry, no Qref on the wiki (chapter 234): Sengoku chairs the Warlord summit at Mary Geoise, which Dracule Mihawk gatecrashes.',
    },
    323: {
      source: 'https://onepiece.fandom.com/wiki/Episode_323',
      note: 'Sengoku learns that the revolutionary Monkey D. Dragon is Luffy’s father.',
    },
    398: {
      source: 'https://onepiece.fandom.com/wiki/Episode_398',
      note: 'After a World Noble is punched at the Sabaody auction house, Sengoku dispatches an admiral.',
    },
    462: {
      source: 'https://onepiece.fandom.com/wiki/Episode_462',
      note: 'Sengoku tells the world that Portgas D. Ace is Gol D. Roger’s son.',
    },
    487: {
      source: 'https://onepiece.fandom.com/wiki/Episode_487',
      note: 'Sengoku’s Buddha form strikes Blackbeard’s crew at Marineford.',
    },
    746: {
      source: 'https://onepiece.fandom.com/wiki/Episode_746',
      note: 'A retired Sengoku shares food with Tsuru and, through Fujitora, hears thanks meant for Luffy.',
    },
  },
  'edward-newgate': {
    151: {
      source: 'https://onepiece.fandom.com/wiki/Episode_151',
      note: 'Second pass: the issue’s repo threshold of 152 was itself a bug. Episode 151’s own charDebut list and Long Summary already carry Shanks’s letter torn up unread by Whitebeard in full; episode 152 is entirely about the Going Merry’s refit and the Knock-Up Stream, with no Whitebeard content. revealedAtEpisode corrected to 151 for this character in skypiea.ts (confirmed every other chronicle entry that names or marks edward-newgate sits at episode 316 or later, above the new threshold, so the move is safe); the story’s episode moved to match.',
    },
    316: {
      source: 'https://onepiece.fandom.com/wiki/Episode_316',
      note: 'Shanks boards Whitebeard’s ship in person; the two Emperors meet and the sky splits above them.',
    },
    434: {
      source: 'https://onepiece.fandom.com/wiki/Episode_434',
      note: 'Whitebeard sinks the twenty-three ships that had been watching his fleet and sets sail for Marineford.',
    },
    461: {
      source: 'https://onepiece.fandom.com/wiki/Episode_461',
      note: 'Flashback: young Ace tries a hundred times to take Whitebeard’s head; Whitebeard calls him son.',
    },
    475: {
      source: 'https://onepiece.fandom.com/wiki/Episode_475',
      note: 'Whitebeard’s submerged ship tilts the whole of Marineford.',
    },
    486: {
      source: 'https://onepiece.fandom.com/wiki/Episode_486',
      note: 'Whitebeard dies standing, declaring that the One Piece exists.',
    },
  },
  'donquixote-doflamingo': {
    151: {
      source: 'https://onepiece.fandom.com/wiki/Episode_151',
      note: 'Second pass: the issue’s repo threshold of 152 was itself a bug, same as Edward Newgate. Episode 151’s own charDebut list and Long Summary already carry Doflamingo puppeteering two Marines into fighting each other for his own amusement; episode 152 has no Doflamingo content. revealedAtEpisode corrected to 151 for this character in skypiea.ts (confirmed no other chronicle entry anywhere names or marks donquixote-doflamingo below episode 655, so the move is safe); the story’s episode moved to match.',
    },
    207: {
      source: 'https://onepiece.fandom.com/wiki/Episode_207',
      note: 'Flashback: Doflamingo makes Bellamy and Sarquiss fight each other in Mock Town after Bellamy’s defeat by Luffy.',
    },
    398: {
      source: 'https://onepiece.fandom.com/wiki/Episode_398',
      note: 'Doflamingo is confirmed as the owner of the Sabaody Auction House and is unbothered by the chaos of the World Noble incident.',
    },
    470: {
      source: 'https://onepiece.fandom.com/wiki/Episode_470',
      note: 'Doflamingo rides Jozu like a horse at Marineford and calls Kuma dead.',
    },
    681: {
      source: 'https://onepiece.fandom.com/wiki/Episode_681',
      note: 'The Birdcage closes over Dressrosa; episode 680 sets it up and 681 confirms it sealed.',
    },
    735: {
      source: 'https://onepiece.fandom.com/wiki/Episode_735',
      note: 'Doflamingo is beaten, the Birdcage falls, and he is taken to a warship cell; episode 734 has the final blow and 735 the aftermath. Second pass: softened “the whole Donquixote crew” arrested to “nearly all of the crew” — the wiki has Bellamy, Baby 5 and Viola exempted.',
    },
  },
  'enel': {
    158: {
      source: 'https://onepiece.fandom.com/wiki/Episode_158',
      note: 'Threshold entry. The god of Skypiea shows himself and judgement falls as lightning; episode 155 sets up the trap Conis reveals.',
    },
    171: {
      source: 'https://onepiece.fandom.com/wiki/Episode_171',
      note: 'Enel announces the survival game: only five will remain on the Upper Yard.',
    },
    181: {
      source: 'https://onepiece.fandom.com/wiki/Episode_181',
      note: 'Enel’s offer to Zoro, Robin, Gan Fall and Wyper to serve him is refused; episode 180 sets up the confrontation.',
    },
    183: {
      source: 'https://onepiece.fandom.com/wiki/Episode_183',
      note: 'Luffy’s rubber body does not conduct Enel’s lightning; Enel sees his own face reflected back in defeat.',
    },
    190: {
      source: 'https://onepiece.fandom.com/wiki/Episode_190',
      note: 'Enel’s Raigo falls over Angel Island, threatening the whole of Skypiea with Deathpiea; episodes 186 and 189 build up to it.',
    },
    193: {
      source: 'https://onepiece.fandom.com/wiki/Episode_193',
      note: 'Two hundred million volts meet Luffy’s fist and the Golden Bell rings; episode 192 sets up the final exchange.',
    },
  },
  'nefertari-vivi': {
    67: {
      source: 'https://onepiece.fandom.com/wiki/Episode_67',
      note: 'Threshold entry. Her real name slips out to the Unluckies, and the crew of five agrees to escort her home, both within this episode.',
    },
    104: {
      source: 'https://onepiece.fandom.com/wiki/Episode_104',
      note: 'Baroque Works learns Mr. 0 is Crocodile, and the Long Summary confirms the Luffy/Vivi argument and his line about risking their lives together.',
    },
    121: {
      source: 'https://onepiece.fandom.com/wiki/Episode_121',
      note: 'Crocodile drops Vivi from the cliff below the palace and Luffy, riding Pell, catches her out of the air, both within this episode.',
    },
    129: {
      source: 'https://onepiece.fandom.com/wiki/Episode_129',
      note: 'Bon Kurei’s decoy, the harbour farewell and the crew’s silent answer with the X-marked arms are all in this episode’s Long Summary.',
    },
    886: {
      source: 'https://onepiece.fandom.com/wiki/Episode_886',
      note: "Vivi protests to Lucci over Charlos's treatment of Shirahoshi and moves to intervene herself; Mjosgard is the one who actually strikes Charlos down.",
    },
    1120: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1120',
      note: "Candidate cited both 1119 and 1120; 1119 only has Wapol breaking into the room. The cargo-crate stowaway and the ship's departure, the part the story is actually about, resolves in 1120.",
    },
  },
  'crocodile': {
    92: {
      source: 'https://onepiece.fandom.com/wiki/Episode_92',
      note: "Threshold entry. Crocodile dries out Puppu's crew at Nanohana in a single scene; Puppu himself is not a filed character, so he is described generically.",
    },
    108: {
      source: 'https://onepiece.fandom.com/wiki/Episode_108',
      note: 'Candidate was episode 107, no Qref matched; 107 covers Operation Utopia and Nanohana burning, with no cage or flooding content. The key slipping to the Bananawani and the VIP room flooding are both in 108. Corrected to 108.',
    },
    111: {
      source: 'https://onepiece.fandom.com/wiki/Episode_111',
      note: 'Candidate cited 110 and 111; 110 ends on the hook impaling Luffy. Crocodile burying him in the quicksand, raising the second sandstorm toward Yuba and leaving all happen in 111.',
    },
    126: {
      source: 'https://onepiece.fandom.com/wiki/Episode_126',
      note: 'Same episode as Luffy’s own “Rain over Alubarna” story, told from Crocodile’s side: driven through the ceiling and into the sky above Alubarna.',
    },
    475: {
      source: 'https://onepiece.fandom.com/wiki/Episode_475',
      note: 'Crocodile’s sand knocks the executioners off Ace’s platform and he rebuffs Doflamingo’s taunt, both within this episode.',
    },
    1086: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1086',
      note: 'Cross Guild’s formation, Buggy as its figurehead Emperor and Crocodile/Mihawk as Chief Officers are all confirmed in this episode; affiliation/bounty timelines elsewhere in the dossier use episode 1088 for the same development, a pre-existing discrepancy this PR does not touch.',
    },
  },
  'koby': {
    1: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1',
      note: 'Threshold entry. Barrel rolls into the ship’s kitchen, Koby (Alvida’s chore boy) and other pirates find Luffy inside, Alvida attacks with her club and Luffy sends her flying off the ship — same scene as monkey-d-luffy’s own episode-1 story.',
    },
    3: {
      source: 'https://onepiece.fandom.com/wiki/Episode_3',
      note: 'Helmeppo holds Koby hostage as Luffy fights Morgan, Luffy punches Helmeppo and Zoro cuts Morgan down, the garrison arrests its own captain; Koby then punches Luffy to distance himself, is accepted into the Marines despite his past, and salutes Luffy and Zoro as they sail off, joined by the rest of the base.',
    },
    68: {
      source: 'https://onepiece.fandom.com/wiki/Episode_68',
      note: 'Koby and Helmeppo are chore boys at Shells Town after Morgan’s fall; Morgan is being escorted to a visiting vice admiral’s custody for trial, breaks free and takes Helmeppo hostage, Koby stops the cannon and swims out to talk Morgan down, and the vice admiral — Monkey D. Garp, filed at episode 313 and so left unnamed here — takes both boys to Marine Headquarters instead of dismissing them.',
    },
    315: {
      source: 'https://onepiece.fandom.com/wiki/Episode_315',
      note: 'Episode 315’s own Long Summary: Koby hopes that one day, even as opponents, they can meet in the New World and see whose dream is realized first — Luffy as Pirate King or Koby as Admiral — and Luffy acknowledges this and, without a hint of ridicule, challenges him to meet him there as a worthy rival. Corrected after review: an earlier pass wrongly had Koby blurt the dream out and collapse in embarrassment, which the source does not support; he states it as a genuine hope and Luffy actively challenges him rather than merely not laughing.',
    },
    488: {
      source: 'https://onepiece.fandom.com/wiki/Episode_488',
      note: 'Corrected after review from 489 to 488: episode 488’s own Long Summary has Koby yelling that it’s enough, Akainu moving to execute him, and Shanks stopping the blow with his sword ("Shanks picks up his Straw Hat and announces he will bring an end to the war") all resolving within it — episode 489 covers a disjoint later scene. Consistent with the shanks chronicle’s own episode-489 story, which covers what happens next.',
    },
    1122: {
      source: 'https://onepiece.fandom.com/wiki/Koby',
      note: 'Koby character page (Egghead Arc, chap 1088, ep 1122): Perona brings Koby the keys, he leads the breakout across Hachinosu, Garp and SWORD storm in, and Koby destroys Avalo Pizarro’s giant hand with a single Haki-imbued punch before boarding the escaping ship, named "Honesty Impact" on the Techniques section.',
    },
  },
  'buggy': {
    5: {
      source: 'https://onepiece.fandom.com/wiki/Episode_5',
      note: 'Buggy/History, Orange Town Arc: Nami stole Buggy’s Grand Line map, and in this scene returns both it and a bound Luffy, claiming she wants back into his crew; he believes her, locks Luffy in a cage, and loads a Buggy Ball aimed at him. Nami refuses to fire and burns her hands putting out the fuse, and Buggy sets his men on her. Corrected after review (twice): a first pass had the map stolen from Buggy overnight with no source; a second pass invented an unsupported “stolen from a Marine base” origin. Neither is in any source — the map is Buggy’s own treasure, and Nami is the one who stole it from him.',
    },
    8: {
      source: 'https://onepiece.fandom.com/wiki/Episode_8',
      note: 'Buggy’s flashback (Buggy/History, "Past" section, Qref chap=19, ep=8): an apprentice on Roger’s crew alongside Shanks, Buggy found a treasure map during a raid and kept it secret; swallowed the real Bara Bara no Mi by accident hiding it from Shanks, then lost the map to the sea along with his ability to swim after it. Corrected after review: Buggy was one of Roger’s own apprentices, not an outsider stealing from the crew, and the incident is dated to "at least 27 years ago" — before Roger’s execution (22 years ago per this same character’s episode-52 story), not "ten years ago".',
    },
    52: {
      source: 'https://onepiece.fandom.com/wiki/Episode_52',
      note: 'On the Loguetown execution platform where Gold Roger died, Cabaji pins Luffy in stocks and Buggy raises his sword to behead him; lightning strikes the platform in that instant.',
    },
    423: {
      source: 'https://onepiece.fandom.com/wiki/Episode_423',
      note: 'Corrected after review from 425 to 423: episode 423 itself is titled "Reunion in Hell!? The User of the Bara Bara No Mi!" and its own Long Summary has Luffy (undercover to save Ace) running into Buggy on Level 1, Buggy’s surprise blowing Luffy’s cover, and the two deciding to fight through together — by 425 they are already into Level 2, so the reunion itself is known by the end of 423.',
    },
    489: {
      source: 'https://onepiece.fandom.com/wiki/Episode_489',
      note: 'At Marineford’s end, Shanks throws Buggy his straw hat to get to Luffy and dangles a treasure map to make him comply; Buggy races it into Law’s submarine as it dives, then learns the map was a lie.',
    },
    1086: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1086',
      note: 'Buggy’s Cross Guild flyers put his face at the center, larger than Crocodile’s and Mihawk’s; the Marines take him for their leader and declare him an Emperor, and after nearly killing him for the humiliation, Mihawk relents — he has no plans of becoming an Emperor himself — and Crocodile agrees, founding Cross Guild with Buggy as figurehead and themselves as Chief Officers. Corrected after review: an earlier pass wrongly gave an unpaid debt as the reason they spare him; per the episode, the debt (an unrelated, earlier funding loan) was already worked off in services before this scene, and this story’s sibling entry (dracule-mihawk, same episode) independently establishes that debt as already collected.',
    },
  },
  'dracule-mihawk': {
    24: {
      source: 'https://onepiece.fandom.com/wiki/Episode_24',
      note: 'Mihawk sinks Krieg’s flagship, is challenged by Zoro, uses a kogatana ("knife the size of a letter opener") to stop all three swords, wounds him, then draws Yoru, shatters two swords, and finishes with a chest slash, sparing him and telling him to surpass him. Matches roronoa-zoro’s own episode-24 story.',
    },
    45: {
      source: 'https://onepiece.fandom.com/wiki/Episode_45',
      note: 'Long Summary: "Mihawk delivers the news to the Red Hair Pirates, who celebrate Luffy’s accomplishment." He seeks out Shanks on a remote base island, startling the lower crew, confirms Luffy is the village boy Shanks lost his arm for, and Shanks pulls him into a celebratory drink — cited to manga ch. 96 / anime episode 45.',
    },
    151: {
      source: 'https://onepiece.fandom.com/wiki/Episode_151',
      note: 'Long Summary: at Mary Geoise, Doflamingo (bored, toying with two marines via his strings) and Kuma are already present when Mihawk joins them, making it three Warlords; he says he came only as an onlooker interested in the pirates who beat Crocodile; Laffitte then bursts in to nominate Marshall D. Teach for the empty seat.',
    },
    463: {
      source: 'https://onepiece.fandom.com/wiki/Episode_463',
      note: 'Long Summary opens with "Mihawk launches his shockwave towards Whitebeard which is blocked by Jozu with his diamond powers." Confirmed on Dracule Mihawk’s own page as one of the first Warlords to attack, wishing to measure his strength against Whitebeard, stopped by Jozu. The issue’s candidate episode 466 is incorrect for this fact — 466 is Luffy’s arrival, where Mihawk only remarks he "never fails to make things interesting." Used 463 instead.',
    },
    515: {
      source: 'https://onepiece.fandom.com/wiki/Episode_515',
      note: 'Short summary: "At Kuraigana Island, Zoro goes onto his knees and asks Mihawk to train him, in which Mihawk agrees." Zoro/History’s Post-War Arc section fills in that Mihawk first dismissed the request, thinking Zoro couldn’t even beat the humandrills, until Zoro said he had, then agreed once Perona patched him up. The issue’s candidate episode 509 only covers the earlier boat/humandrill setup, confirmed by reading 509 and 511-514 directly, none of which show the kneeling/training-request scene; this exact scene is first and clearly shown in episode 515.',
    },
    1086: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1086',
      note: 'After the Levely dissolves the Warlord system (stripping Mihawk of his immunity and reverting him to fugitive status), Mihawk and Crocodile team up to fund their new venture, arrive at Karai Bari Island, sink the Marine ships besieging Buggy’s hideout, and collect in the same stroke a debt Buggy cannot pay in money (so he works it off in services) — Buggy’s men mistake them for his subordinates. Months later, when Buggy’s own flyers get him declared Emperor in their place, Mihawk — who has no plans of becoming an Emperor himself — decides it costs him nothing to let it stand; Crocodile agrees. Corrected after review: an earlier pass conflated the two beats, implying the flyers/Emperor decision was the same event as the debt-collecting ship-sinking, when the episode presents them as sequential.',
    },
  },
  'smoker': {
    49: {
      source: 'https://onepiece.fandom.com/wiki/Episode_49',
      note: 'Smoker confronts Luffy at the historic execution platform, unaware Luffy is his target until this point, and easily dominates the fight without even using his Devil Fruit powers.',
    },
    53: {
      source: 'https://onepiece.fandom.com/wiki/Episode_53',
      note: 'Smoker is about to finish Luffy when a mysterious figure (unidentified on-screen) releases a strong gust of wind, saving Luffy and letting the crew escape Loguetown by sea. The figure is Dragon, but his identity is not revealed at this point, so the story leaves him unnamed.',
    },
    109: {
      source: 'https://onepiece.fandom.com/wiki/Episode_109',
      note: 'Crocodile’s underwater base floods; the Straw Hats and Smoker escape the cell together. Episode 108’s summary confirms the room fills with water on a timer, and Luffy tells Zoro to save Smoker as they flee.',
    },
    127: {
      source: 'https://onepiece.fandom.com/wiki/Episode_127',
      note: 'Marine HQ calls Smoker, crediting him and Tashigi with Crocodile’s capture (covering up the Straw Hats’ role) and promoting them to match; Smoker angrily tells the World Government what they can do with their promotion.',
    },
    469: {
      source: 'https://onepiece.fandom.com/wiki/Episode_469',
      note: 'Smoker attacks Luffy again at Marineford, restrained only when Hancock breaks his jitte. Smoker’s own character page states he would eventually learn about the connection between Dragon and Luffy during the Summit War — Sengoku’s public reveal of Luffy’s parentage happens at episode 467, just before this fight.',
    },
    587: {
      source: 'https://onepiece.fandom.com/wiki/Episode_587',
      note: 'Smoker intervenes to stop Law from killing Tashigi and fights him instead; Law extracts his heart and Smoker collapses. Confirmed again in episode 588’s summary (Tashigi crying over Smoker’s body).',
    },
  },
  'monkey-d-dragon': {
    314: {
      source: 'https://onepiece.fandom.com/wiki/Episode_314',
      note: 'Garp reveals to the crew, mid-sentence, that Luffy’s father is Monkey D. Dragon, the Revolutionary Army leader the World Government wants most — and that he was the hooded man who saved Luffy from Smoker at Loguetown with a gust of wind (Monkey D. Dragon/History, Loguetown Arc: "a massive gust occurred that blew away the Marines and freed Luffy"; Episode_53’s own summary: no blade or sword involved). Corrected after review: an earlier pass wrongly had Dragon stop “Smoker’s blade,” contradicting this same PR’s own smoker episode-53 story, which correctly has the stranger do “nothing a fist or sword could answer.”',
    },
    441: {
      source: 'https://onepiece.fandom.com/wiki/Episode_441',
      note: 'Luffy tells Ivankov (mid-jailbreak in Impel Down) that Dragon is his father; Ivankov, stunned, recalls Dragon always facing East Blue and declares himself Dragon’s friend, vowing to back Luffy.',
    },
    510: {
      source: 'https://onepiece.fandom.com/wiki/Episode_510',
      note: 'Dragon calls Ivankov about the newspaper story on his son and Whitebeard’s death; the "seeing him as human" line is sourced from Monkey D. Dragon’s own wiki page, Revolutionary Army section (Qref chap=593, ep=510).',
    },
    737: {
      source: 'https://onepiece.fandom.com/wiki/Episode_737',
      note: 'The issue’s candidate episode 504 does not hold up: that episode only shows Sabo’s boat destroyed and him presumed dead. The actual rescue — a World Noble’s ship firing on ten-year-old Sabo’s stolen boat, Dragon pulling him out of the water barely alive, his name read off his belongings — is the "Sabo’s Past" flashback at episode 737. Corroborated by the sibling sabo chronicle entry at episode 738 (src/data/records/summit-war.chronicle.ts), which recaps this same rescue from Sabo’s side one episode later.',
    },
    1120: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1120',
      note: 'The issue’s candidate episode 1116 is when Sabo returns to Momoiro Island, but he only reaches the part of his report naming Im, beyond the Empty Throne, three episodes later. Matches the parallel sabo chronicle entry filed at the same episode 1120 in src/data/records/summit-war.chronicle.ts.',
    },
    1131: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1131',
      note: 'Twenty-two years before the present (Freedom Fighters/History: the Sorbet Kingdom raid and the group’s transformation into the Revolutionary Army both happened "22 years ago," the same year as the Ohara Incident): Dragon, a Marine who has defected, leads the Freedom Fighters alongside Ivankov to storm King Bekori’s palace on Sorbet Kingdom and free its enslaved southern half — among the freed prisoners is a giant, Kuma, imprisoned for standing against that same law, who joins the group afterward. Corrected after review (twice): originally dated "twenty-five years," which was drawn from a separate, earlier data point on the same wiki page (the group already being well-known 25 years ago) rather than this specific raid; a later pass also had Kuma fighting alongside Dragon and Ivankov as a co-attacker, when per Bartholomew_Kuma’s own wiki page he was one of the prisoners the raid freed, not a participant in storming the palace.',
    },
  },
  'kuzan': {
    227: {
      source: 'https://onepiece.fandom.com/wiki/Episode_227',
      note: 'Threshold entry. Episode 226 only ends with Chopper waking a sleeping man whom Robin names as Aokiji; 227 has the lazy-justice talk, the castaways who saw him cycle on the sea, the Ice Age road with the Sea King, the grandfather remark, Robin shattering him, and the frozen fist, arm, leg and Robin. The anime replaces the manga’s old man Tonjit with stranded castaways, so no old man’s house appears.',
    },
    228: {
      source: 'https://onepiece.fandom.com/wiki/Episode_228',
      note: 'Added at the freeze episode, told from his side: the stomp on Robin, the one-on-one, Ice Time on Luffy, sparing him for Crocodile, Smoker’s message and the note about Water 7 are all in 228, none in 227.',
    },
    278: {
      source: 'https://onepiece.fandom.com/wiki/Episode_278',
      note: 'Candidate was episode 254 (the Spandam call). Episode 254 only has Spandam praising Aokiji’s generosity with agents and battleships; the tip about Robin and the Buster Call permission are explained in 268. The story is refiled on the Ohara flashback of 278 (Kuzan fights Saul, the evacuation ship is sunk, he freezes Saul and helps Robin escape; history page Qref ep=278), with the Spandam call closing it.',
    },
    315: {
      source: 'https://onepiece.fandom.com/wiki/Episode_315',
      note: 'The talk through the wall during the party: why she did not run, Saul as a friend, twenty years of watching her, the tree to call home and the icy X are all in 315.',
    },
    462: {
      source: 'https://onepiece.fandom.com/wiki/Episode_462',
      note: 'Candidate was episode 466 (a Qref for his comment on Luffy’s arrival). The waves are frozen with Ice Age in 462, where he also attacks Whitebeard, is shattered and freezes the bay; the fruit is not named, since the Tremor-Tremor Fruit record is filed at 466.',
    },
    625: {
      source: 'https://onepiece.fandom.com/wiki/Episode_625',
      note: 'He appears and calls Smoker his friend at the end of 624; the freeze, Doflamingo’s exit with Buffalo and Baby 5, the talk with Smoker and the request to the G-5 men are in 625.',
    },
    1122: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1122',
      note: 'The Blackbeard recruitment is in 1114–1115, the training flashbacks and the stalemate in 1121; Garp punching the ground to stop him intercepting and Kuzan freezing him solid close 1122.',
    },
  },
  'monkey-d-garp': {
    313: {
      source: 'https://onepiece.fandom.com/wiki/Episode_313',
      note: 'Threshold entry. The bulldog ship, the Roger reputation, the punch through the wall that hurts rubber Luffy and Grandpa are all in 313; Dragon, Koby and Helmeppo wait for 314 and are left out.',
    },
    324: {
      source: 'https://onepiece.fandom.com/wiki/Episode_324',
      note: 'The attack and the hand-thrown cannonballs start in 323 (usopp@323 and sengoku@323 already mention them, consistent with the wiki); the enormous cannonball, the Coup de Burst, Aokiji’s surprise and Garp’s laugh close the scene in 324.',
    },
    422: {
      source: 'https://onepiece.fandom.com/wiki/Episode_422',
      note: 'Garp’s visit to Ace’s cell starts at the end of 421 (Ace asks to die; his death will not stop Whitebeard); the pride in Luffy, the criminal’s blood, the Marines complaint (History Qref ep=422) and Whitebeard as Ace’s only father are in 422.',
    },
    480: {
      source: 'https://onepiece.fandom.com/wiki/Episode_480',
      note: 'Candidate was episode 479. Garp only blocks the bridge at the end of 479; the training flashbacks, the enemy declaration, the missed punch and Luffy knocking him down are in 480 (Qref ep=479, ep2=480).',
    },
    1114: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1114',
      note: 'The ship launched by a punch, Koby as the future of the Marines, Galaxy Impact and Kuzan freezing Hibari are all in 1114. Second pass: Kuzan is not identified as Garp’s pupil until 1115/1121, so the story says only that he was once an admiral, which 1114’s account of the Fleet Admiral duel supports.',
    },
    1122: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1122',
      note: 'Shiryu’s stab is in 1121; the split skull, Koby breaking the hand, Garp staying behind with his last message and Kuzan freezing him are in 1122. Dossier: the “captured by the Blackbeard Pirates” affiliation was filed at 1109, an episode Garp is not in; moved to 1122, where “Kuzan captures him, freezing him solid”.',
    },
  },
  'rob-lucci': {
    230: {
      source: 'https://onepiece.fandom.com/wiki/Episode_230',
      note: 'Debut: the Galley-La shipwrights beat Mikazuki’s crew with a cannon and the Straw Hats find a crowd praising Lucci, one of the shipwrights; Hattori debuts with him here (Hattori page, ch.323/ep.230). The ventriloquism is not in the ep.230 summaries (History cites it at ep.232), so the story only says a pigeon is perched on him. Second pass: “the women think him handsome” was unattested and removed.',
    },
    246: {
      source: 'https://onepiece.fandom.com/wiki/Episode_246',
      note: 'Unmasking at ep.243, the CP9 explanation and the Franky deduction at 244, Paulie cut down with Shigan and the transformation begun at the end of 245; the leopard fruit is named, the building cut in half and Luffy and Zoro thrown out at 246. Records: the CP9 affiliation of Lucci, Kaku, Kalifa and Blueno moved from 264 to 244 (Lucci’s “strongest agent” to 266, where Fukurou measures 4000 doriki), and the CP9 fruits from 273 to the episodes that name them: Door 243, Leopard 246, Giraffe and Wolf 286, Bubble 293.',
    },
    294: {
      source: 'https://onepiece.fandom.com/wiki/Episode_294',
      note: 'Lucci is never on the Bridge of Hesitation here: at 288 he admits letting Chimney follow, at 293 he sends Spandam ahead and waits behind a wooden door in the undersea passage, and the rematch itself starts in a storage room at 294.',
    },
    309: {
      source: 'https://onepiece.fandom.com/wiki/Episode_309',
      note: 'Rokuogan floors Luffy at 308 and Usopp unmasks at its end; the tail-trap, the full-power Rokuogan, the Jet Gatling and the announcement of Lucci’s defeat are all ep.309, fought on Tower 1 of the Bridge of Hesitation.',
    },
    1101: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1101',
      note: 'Refused entry at 1098; S-Bear’s transport and Atlas dropped by Rokuogan at 1099 (not cut down); Sakazuki’s order, both awakened forms and Sentomaru struck at 1100; Luffy’s Dawn Rocket defeats Lucci, who gets up and finishes Sentomaru, at 1101.',
    },
    1145: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1145',
      note: 'The Elders land and Zoro’s strike after Sanji’s deadweight call are ep.1144; Jinbe’s Gosenmaigawara Shuto, the three chest wounds, Mars asking for York and the plea for Kaku are ep.1145.',
    },
  },
  'rika': {
    2: {
      source: 'https://onepiece.fandom.com/wiki/Episode_2',
      note: 'Long Summary: "A small girl, Rika, sneaks into the base to offer Zoro onigiri, but she is stopped by Helmeppo ... Zoro later eats the dirt-stained rice"; she tells the wolf story. Rika page Qref chap=4 page=3 ep=2: her mother hurries her away. Named on screen in episode 2: in the wolf flashback her mother shouts “Rika! Don’t!” (checked against an ep 2 transcript). Anime-only: the wolf attacked her in the bar (Anime and Manga Differences).',
    },
    3: {
      source: 'https://onepiece.fandom.com/wiki/Episode_3',
      note: 'Long Summary: Morgan cut down and arrested by his own Marines; Luffy, Zoro, Koby celebrate at a restaurant; Ripper asks the pirates to leave, promising not to report them to headquarters, and accepts Koby. it wiki Rica: at the Food Foo her mother cooks, Rica tells Luffy he was right to be strong; anime-only (ep 3) she and her mother wave the pirates off.',
    },
  },
  'chouchou': {
    6: {
      source: 'https://onepiece.fandom.com/wiki/Episode_6',
      note: 'Long Summary: "Luffy interacts with Chouchou, a dog defending the shop. The mayor explains that Chouchou\'s owner passed away from illness ... Chouchou eats the key"; "Richie raids the store for food and burns it to the ground as Chouchou fights in vain ... Luffy came to Chouchou\'s aid, defeating both Richie and Mohji before giving the dog a single box of pet food". Chapter_12: Boodle shows up "demanding that they stop hurting the dog, Chouchou" (the naming, ch 12). Chouchou page Qref chap=14 page=4 ep=6: he joins the evacuees.',
    },
    8: {
      source: 'https://onepiece.fandom.com/wiki/Episode_8',
      note: 'Long Summary: citizens return, blame the group; "Chouchou, aware of the crew\'s true intentions, stops the mob, allowing them to head to the pier to escape." Chapter_21: "they ask who did it, and Luffy admits it was him." Boodle linked: filed at 7 in this batch.',
    },
  },
  'richie': {
    6: {
      source: 'https://onepiece.fandom.com/wiki/Episode_6',
      note: 'Long Summary: "Riding his lion Richie, he finds Luffy still trapped in the cage. Mohji orders Richie to attack Luffy, inadvertently destroying his cage ... Richie raids the store for food and burns it to the ground ... Luffy ... defeating both Richie and Mohji". Existing Mohji log (east-blue.ts) already names "a lion named Richie" at ep 6. Chapter: Chapter_12/13 summaries use the name; Mohji names him when sending him at Luffy in ch 13 ("Mohji sends Richie to attack"); ch 12 likely but rounded up to 13.',
    },
    7: {
      source: 'https://onepiece.fandom.com/wiki/Episode_7',
      note: 'Long Summary: "Buggy\'s men are decimated by the attack, save for Buggy himself, who had used his subordinates as human shields, and ... Cabaji, who had used Richie as a shield." Chapter_16: "Mohji regains consciousness and becomes upset at Cabaji, because Cabaji is holding an unconscious Richie. Cabaji tells Mohji that he used Ritchie as a shield so that his clothes would not get dirty."',
    },
    53: {
      source: 'https://onepiece.fandom.com/wiki/Episode_53',
      note: 'Episode_52: "the Going Merry is more in imminent danger from Mohji and Richie, who guess which ship is Luffy\'s based on the jolly roger with the straw hat on it, intent on burning it". Episode_53: "Nami and Usopp reach the Going Merry as Mohji was about to burn it down. Before Mohji can properly fight Nami, the Marines catch up and shoot at Mohji. Nami and Usopp take this opportunity to board the Going Merry and set sail." Filed at 53, where the whole account is known.',
    },
    1086: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1086',
      note: 'Richie page affiliation: Cross Guild, Qref chap=1058 page=8 ep=1086; Episode_1086 notes list Richie in the crowd at Karai Bari as Buggy announces the Cross Guild.',
    },
  },
  'boodle': {
    7: {
      source: 'https://onepiece.fandom.com/wiki/Episode_7',
      note: 'Threshold: Boodle gives Buggy his name and title when he challenges him at the Drinker Pub (it wiki Barboncino: "gli rivela il suo nome e il suo ruolo"; Chapter_15: "Boodle challenges Buggy over the matter of the town"). Boodle page cites that scene as chap=15 ep=6 ep2=7; Episode_7 Long Summary opens "Luffy knocks Boodle unconscious", so the scene straddles 6/7; rounded up to 7. At his first meeting (ch 12, ep 6) he only says he is the mayor (it wiki). Story detail: Boodle page History (ch 14-15, ep 6-7).',
    },
    8: {
      source: 'https://onepiece.fandom.com/wiki/Episode_8',
      note: 'Long Summary: "Boodle wakes up and finds that the Buggy Pirates have been successfully repelled ... He goes to the pier to thank the group as they depart. To Nami\'s horror, Luffy leaves her treasures behind so the citizens could fund repairs." Boodle page: "after declaring that he alone had the right to hate them"; it wiki: removes armour on the way, apologises and says he will not forget them.',
    },
  },
  'ninjin-piiman-and-tamanegi': {
    9: {
      source: 'https://onepiece.fandom.com/wiki/Episode_9',
      note: 'charDebut lists Ninjin, Piiman, Tamanegi. Fansub transcript of ep 9 (subslikescript) has the crew reporting to Usopp with the translator note on "piiman"/"ninjin" and "Where is Onion?" (Tamanegi) in the opening scene; Chapter_23 (the chapter ep 9 opens on) introduces all three.',
    },
    11: {
      source: 'https://onepiece.fandom.com/wiki/Episode_11',
      note: 'Ep 10 Long Summary: Tamanegi spots the moonwalking man, Jango hypnotises the children and himself. Ep 11: Usopp shot in the arm by Merry; the children express their disappointment in Usopp for lying and leave.',
    },
    16: {
      source: 'https://onepiece.fandom.com/wiki/Episode_16',
      note: 'Ep 15: the Usopp Pirates beat Kuro while he is down (frying pan: Ninjin page, chap=35 ep=15); Kuro sends Jango after Kaya; Usopp orders the children to protect her. Ep 16: forest, Kaya ill, fake surrender + weapons + falling log fail, Kaya agrees to sign the will, Zoro and Usopp arrive.',
    },
    17: {
      source: 'https://onepiece.fandom.com/wiki/Episode_17',
      note: 'Kayaku Boshi defeats Jango; Usopp asks the children not to tell; disbands the crew telling each to pursue their ambitions (tearful: Ninjin page chap=40 ep=17); the children take over the "pirates are coming" lie.',
    },
  },
  'buchi': {
    13: {
      source: 'https://onepiece.fandom.com/wiki/Episode_13',
      note: 'Long Summary names "the Nyaban Brothers, Sham and Buchi"; fansub transcript of ep 13 has "Right, Buchi?". Buchi page (chap=31/32, ep=13): complains he wants no part, stomp dodged and splits the ground, blames Sham; Usopp’s stray shot, chest cut, Kuro arrives.',
    },
    14: {
      source: 'https://onepiece.fandom.com/wiki/Episode_14',
      note: 'Long Summary: rebellion against Kuro, Nukiashi, five minutes, Tora Gari; "Buchi is still conscious and begs Jango to hypnotize him"; muscles increase in size. Buchi page chap=33 ep=14: raided villages/sank ships, "no longer their captain".',
    },
    15: {
      source: 'https://onepiece.fandom.com/wiki/Episode_15',
      note: 'Long Summary: strengthened Buchi stops Zoro from aiding Luffy, disrupts the battlefield, Zoro cuts him down, then leaves to protect Kaya. Buchi page (ch 35-36): Zoro pins him, is thrown into the cliff, "get out of the way", final cut. Kuro’s order at Usopp (ch 35) is not in the Episode 15 summary, so the story leaves it out, as it does Zoro carrying Usopp (Chapter_36 only).',
    },
  },
  'sham': {
    13: {
      source: 'https://onepiece.fandom.com/wiki/Episode_13',
      note: 'Long Summary: "Jango summons the Nyaban Brothers, Sham and Buchi"; Sham takes two of Zoro’s katanas; Usopp’s missed shot hits Zoro; brothers slash his chest; Kuro arrives. Fansub transcript of ep 13: "Sham, just go do it!", "Gotcha, Sham!", "Right, Buchi?". Sham page: shirt-only cut (it wiki), chap=32 ep=13.',
    },
    14: {
      source: 'https://onepiece.fandom.com/wiki/Episode_14',
      note: 'Long Summary: brothers accuse Kuro of going soft after three years, charge, Nukiashi puts claws at their backs, five minutes to kill Zoro, Nami kicks back the swords, Tora Gari defeats both; Buchi alone gets up. "Five seconds": Sham page chap=33 ep=14.',
    },
  },
  'fullbody': {
    20: {
      source: 'https://onepiece.fandom.com/wiki/Episode_20',
      note: 'Long Summary: Marine lieutenant Fullbody enters for a date, orders the crew’s ship destroyed, Luffy deflects the cannonball into the roof onto Zeff, fly in the soup, table smashed, Sanji beats him with his legs. Fansub transcript of ep 20: "I’m the Marine Lieutenant, Iron Fist Fullbody!". Char box first = Chapter 43; Episode 20.',
    },
    21: {
      source: 'https://onepiece.fandom.com/wiki/Episode_21',
      note: 'Long Summary: Fullbody tries to flee, his crew reports the escaped starved prisoner; Gin enters, Patty beats him and throws him out. Fullbody page (chap=44 ep=21): Gin broke out of Fullbody’s ship; Fullbody flees. Krieg deliberately not named (filed at 22).',
    },
    45: {
      source: 'https://onepiece.fandom.com/wiki/Episode_45',
      note: 'Long Summary (anime-only scene in a canon episode adapting ch 96): Fullbody demoted after the fight at the Baratie, sees Luffy’s bounty as a way back, attacks the Going Merry, repelled, retreats on seeing Sanji.',
    },
    128: {
      source: 'https://onepiece.fandom.com/wiki/Episode_128',
      note: 'Affiliation: Jango and Fullbody on a captured pirate ship, report to Hina, sent to patrol for the Straw Hats (Chapter_214).',
    },
    129: {
      source: 'https://onepiece.fandom.com/wiki/Episode_129',
      note: 'Long Summary: Marines attack the Going Merry; Fullbody tells Sanji his crew will meet their doom since he is powered up; Usopp’s cannon destroys Jango’s ship and Fullbody’s; Bon Kurei’s decoy lets the Straw Hats escape.',
    },
  },
  'carne': {
    21: {
      source: 'https://onepiece.fandom.com/wiki/Episode_21',
      note: 'Debut (charDebut; Char Box first = Ch 45 / Ep 21). Named on screen in ep 21: the cooks cheer "Carne, take him out! Patty, beat him!" during the kitchen quarrel (subslikescript ep 21 transcript). Fleet of 50 ships / 5000 men, elephants and ants, "just quit", waiters: same transcript + Chapter 45 summary + Carne/History (chap 45, ep 21).',
    },
    25: {
      source: 'https://onepiece.fandom.com/wiki/Episode_25',
      note: 'Long Summary: patissier Patty and charcutier Carne operate Sabagashira I, Krieg throws it back into the fin, they remember how they were accepted into the Baratie, defeat many enemies, downed by Pearl. Ten years / 300 restaurants / Zeff’s call for cooks: Patty/History Qref c54 (chap 54, ep 25) and chap 68 moved to ep 25 flashback.',
    },
    28: {
      source: 'https://onepiece.fandom.com/wiki/Episode_28',
      note: 'Long Summary: Gin gives his mask to Luffy, inhales MH5, internal bleeding, staff rush to care for him. Sanji’s order and the pudding remark: Patty/Relationships + Trivia Qref "poison" (chap 63, ep 28).',
    },
  },
  'patty': {
    21: {
      source: 'https://onepiece.fandom.com/wiki/Episode_21',
      note: 'Debut (charDebut, Char Box first = Ch 44 / Ep 21). Named on screen in ep 21: Zeff "Patty, Sanji! If you wanna fight, do it in the kitchen!" and the cooks "Is it really okay, though, Patty?" (subslikescript ep 21 transcript). Gin thrown out, kitchen warning, Luffy as chore boy: Long Summary + Patty/History (chap 44-45, ep 21).',
    },
    22: {
      source: 'https://onepiece.fandom.com/wiki/Episode_22',
      note: 'Long Summary: Krieg fed against Patty’s wishes, Patty shoots him with Shokuatari Meatball, armour unharmed, guns emerge, Zeff submits. Marines idea and knocking Sanji down: Patty/History Qref chap 46-47 ep 22.',
    },
    30: {
      source: 'https://onepiece.fandom.com/wiki/Episode_30',
      note: 'Long Summary: Patty, Carne and Zeff pretend to dislike the soup; Sanji prostrates before Zeff. Throwing out the soup, confession overheard, payback attack, tearful farewell: Patty/History Qref chap 67-68 ep 30.',
    },
  },
  'momoo': {
    38: {
      source: 'https://onepiece.fandom.com/wiki/Episode_38',
      note: 'THRESHOLD MOVED 32 -> 38. First episode where he is on screen AND named: Hatchan "Come out, Momoo!", "the Grand Line monster that destroyed the town of Gosa", "the sea cow, Momoo!", Arlong "Momoo. What are you doing? ... if you wanna run away, I won’t stop you" (subslikescript ep 38). Ep 31 says the name ("A monster called Mohmoo did this", "Mohmoo! Lunchtime") but he is not seen; ep 32 shows him with no name. Towing/eating the cook: ep 32 transcript + Long Summary; crash: ep 33 Long Summary + Momoo/History (chap 74-75, ep 33); windmill throw: ep 38 Long Summary (Gomu Gomu no Kazaguruma). Gosa houses upside down / road: Episode 31 Long Summary + transcript.',
    },
    524: {
      source: 'https://onepiece.fandom.com/wiki/Episode_524',
      note: 'Long Summary: Caribou’s crew pulled away by Momoo, who flees on recognising Nami, Sanji and Luffy; Caribou left alone on the Sunny; Kraken destroys the Caribou ship. Collar, captured near Sabaody, return with a new lump, freed and swims away: Momoo/History Qref chap 604-605, ep 524.',
    },
  },
  'lord-of-the-coast': {
    504: {
      source: 'https://onepiece.fandom.com/wiki/Episode_504',
      note: 'Lord of the Coast page: name Qref "chap=1, page=49, ep=504: The Lord of the Coast is named by Luffy." Episode_504 Long Summary: "Three years later, Luffy sets out from the Goa Kingdom. He then beats up the Lord of the Coast for eating Shanks\' arm"; Anime Notes: the defeat "is properly shown for the first time in the anime version in this episode". Episode_4 calls it only "a Sea King, a carnivorous sea monster" and skips the rematch, so ep 4 is not a naming; rounded up to 504. Chapter 1 names it at the rematch (page 49). Ep 4 facts (Higuma eaten, Shanks\'s arm, the glare) are already known at 504.',
    },
  },
  'roshio': {
    146: {
      source: 'https://onepiece.fandom.com/wiki/Episode_146',
      note: 'Debut and naming (Roshio Char Box first = Ch 222 / Ep 146). Episode_146 Long Summary: "In a bar, Roshio and Bellamy are gambling and Roshio wins. However, Bellamy refuses to accept defeat and insists that Roshio cheated by having Sarquiss bear false witness"; later "one of Roshio\'s men, judging by the mark on his head band" and "two men are discussing how Roshio was defeated, with the false excuse that he cheated". Anime version followed (Roshio page, Anime and Manga Differences, Qref ep=146): Bellamy grabs and crushes his arm instead of the knife, shoots him several times, kicks him out of the window; his crew tries to carry him away before Bellamy jumps down and finishes him. The manga-only match/fire is left out. Madman who killed a card winner: Roshio page Personality, Qref chap=222 ep=146 page=13. Fate left open (alive only at ep 1149), so no status.',
    },
  },
  'sarquiss': {
    146: {
      source: 'https://onepiece.fandom.com/wiki/Episode_146',
      note: 'Debut and naming (Char Box first = Ch 222 / Ep 146; introduced Ch 223, Qref ep=146). Episode_146 Long Summary: Bellamy "insists that Roshio cheated by having Sarquiss bear false witness"; "Sarquiss returns at the hotel and upon seeing Luffy, Zoro, and Nami ... Luffy asks if he should kick Sarquiss\'s butt but Nami and Spector yell no. Sarquiss throws some money at them saying they should use that to buy themselves some clothes ... Nami drags him away"; Spector refuses them because "the Bellamy Party has rented the entire place". Poster shown by a crewmate, worth telling Bellamy: Sarquiss/History Qref chap=223 ep=146 and Chapter_223 Long Summary. First mate: Chapter_223 ("the first mate of Bellamy\'s crew, Sarquiss").',
    },
    150: {
      source: 'https://onepiece.fandom.com/wiki/Episode_150',
      note: "Long Summary: Bellamy and his crew arrive at Cricket's place for the gold; Sarquiss and the rest go in first (anime: beaten by the Saruyama Alliance; manga: Big Chop on Masira, so the story only says they went in first) and Bellamy defeats Cricket, Shoujou and Masira with the Bane Bane no Mi; gold stolen; Zoro notices Bellamy's mark on the Going Merry's hull; \"Sarquiss was telling of the event\"; the drunk brings the posters \"higher than Bellamy's bounty\"; Bellamy says some pirates inflate their bounties; Luffy arrives yelling Bellamy's name.",
    },
    151: {
      source: 'https://onepiece.fandom.com/wiki/Episode_151',
      note: 'Long Summary: Sarquiss believes the 100,000,000 poster is fake and questions the old 30,000,000 one; Luffy punches Bellamy through the boardwalks; Sarquiss urges Bellamy to get up, "thinking Bellamy was fooling around"; Sarquiss tries to challenge Luffy "but is held back by the others" (anime: Eddy); Luffy raises his bloody fist, Sarquiss falls to the ground in fear; Luffy points up: "The sky!"; "Sarquiss runs into him and tells him to get out, so Teach buries his head into the ground". Teach filed at 151.',
    },
    207: {
      source: 'https://onepiece.fandom.com/wiki/Episode_207',
      note: 'Long Summary: "In Mock Town, Donquixote Doflamingo perches from a column and uses his powers on Bellamy and Sarquiss as punishment for being defeated by Luffy prior to his journey to Skypiea. Bellamy begs Doflamingo to give him another chance, but Doflamingo concludes that Bellamy and his crew are obsolete to him and uses his puppetry to force Sarquiss to slash Bellamy, although he survives." Sarquiss/History Qref chap=303 ep=207.',
    },
  },
  'rockstar': {
    151: {
      source: 'https://onepiece.fandom.com/wiki/Episode_151',
      note: 'Debut and naming (Char Box first = Ch 234 / Ep 151, "Rockstar is seen and formally introduced"). He names himself: Chapter_234 Long Summary "Rockstar greets himself as a rookie, but asks a member of the Whitebeard Pirates if he had ever heard of the pirate Rockstar, to which he receives the reply of no". Episode_151 Long Summary: "His men insult the messenger, Rockstar, a relative newcomer to the Red Hair Pirates ... Whitebeard rips up Shanks\' letter ... if Shanks wants to send a message, he should deliver it personally, and bring good booze along with it. Rockstar alerts Shanks by Den Den Mushi. Shanks apologizes ... tells his men to get ready to set sail". Honour/being called back and "the old man never changes": Rockstar/History Qref chap=234 ep=151 and Chapter_234. Marco (filed 152) answers him but is not named in the story. "Den Den Mushi" avoided: "Den" is a record filed at 531.',
    },
    1109: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1109',
      note: 'Rockstar/History (Egghead Arc) Qref chap=1076 ep=1109: "Rockstar is seen alerting Shanks of Eustass Kid attacking the Red Hair Pirates\' fleet. He asks him if they should declare war and Shanks says that they will." Episode_1109 Long Summary: Red Hair Pirates drinking at a bar (Elbaph, not named), "another invasion at the hands of the Kid Pirates", they set sail "with Dorry and Brogy on his side", "Shanks offers to let Kid escape unharmed if he hands over his Road Poneglyph copies. Kid, seeing the incoming threat, accepts the battle."',
    },
  },
  'pierre': {
    153: {
      source: 'https://onepiece.fandom.com/wiki/Episode_153',
      note: 'Debut and naming (Char Box first = Ch 237 / Ep 153; Horse-Horse Fruit shown Ch 238). Episode_153 Long Summary: a man with a shield and bazooka "quickly knocks down Zoro, Sanji and Luffy, then jumps up and takes aim. However, he is stopped by a second man who jousts at him from a bird ... reveals himself as the Sky Knight, an old man wearing armor along with his riding bird, Pierre"; "this rescue was on the house"; free whistle for one more call; "he shows that Pierre had eaten the Uma Uma no Mi devil fruit, allowing him to turn into a Pegasus. The crew is disappointed that the mythical Pegasus looks so ordinary." Wyper (filed 154) left unnamed.',
    },
    164: {
      source: 'https://onepiece.fandom.com/wiki/Episode_164',
      note: 'Episode_162 Long Summary: "Pierre heard the whistle go off and Gan Fall left right away to Chopper\'s aid ... Just as he was about to kill Chopper, Gan Fall arrived and began battle with Shura." Episode_163: "the battle between Gan Fall and Shura continued and Gan Fall lost." Episode_164: "Chopper failed to save Gan Fall forgetting that he cannot swim. With Chopper and Pierre both being Devil Fruit users and Gan Fall unconscious, it seemed to be the end, but a mysterious bird came and saved them ... Chopper wakes up ... a flock of birds"; "Chopper was amazed to see huge South Birds". Fuza (filed 169) not named. Filed at 164 because the rescue ends there.',
    },
    168: {
      source: 'https://onepiece.fandom.com/wiki/Episode_168',
      note: 'Pierre page Qref chap=255 page=6 ep=168 ("Pierre transforms into a Pegasus to attack Usopp"). Chapter_255 Long Summary: Gan Fall says "until 6 years ago, he was known as the God of Skypiea. This causes Usopp to ask him if he fell on his head, earning him a nasty bite on the head from Pierre"; Upper Yard appeared about 400 years ago, the Shandia already lived there and were forced out; "Sanji and Usopp immediately voice their blame on Gan Fall, earning them both a bite on the head from Pierre. However Gan Fall owns up to it". Episode_168 Long Summary: the crew sails the Milky Road with Gan Fall, who tells the history of the war.',
    },
    185: {
      source: 'https://onepiece.fandom.com/wiki/Episode_185',
      note: 'Episode_182: "Luffy and Aisa riding on Pierre are seen running towards the location of the Arc Maxim", Aisa and Pierre hiding and watching. Episode_184: "Aisa and Pierre see this and starts flying near Luffy to help him. Enel notices them and realizes they are the two extra voices he could feel. He then proceeds to launch a God\'s Judgment thunderbolt at the three." Episode_185: "In a hole on the ground, Aisa is crying over Pierre\'s apparently lifeless body and thanks him for protecting her." Pierre page History: "Pierre is knocked out when protecting Aisa from Enel\'s attack". He wakes at 186, so the story stops at "lies without moving".',
    },
  },
  'su': {
    154: {
      source: 'https://onepiece.fandom.com/wiki/Episode_154',
      note: 'Debut and naming (Char Box first = Ch 239 / Ep 154, "Conis greets the Straw Hats on Angel Beach with Su in her arm"). Episode_154 Short Summary: "they are greeted by Conis and her pet Su"; Long Summary: "Conis finally introduces herself and the cloud fox Su"; Luffy cannot control the waver, Nami rides it skillfully; they arrive at Conis\' house; the talk ends on the place they must never go (Upper Yard). Su/History Qref chap=239-240 ep=154: Su approached the crew, watched Luffy and Nami try the Waver, followed them home. Conis and Pagaya (filed 155) are left unnamed at 154.',
    },
    172: {
      source: 'https://onepiece.fandom.com/wiki/Episode_172',
      note: 'Long Summary: Aisa\'s boat stopped working and a Sky Shark ate half of it; "She was then rescued by Conis and Pagaya ... Conis introduced Su and Pagaya to Aisa. Aisa requested to be taken to Upper Yard and Conis mentioned they were on their way there to lead the Straw Hats out of Skypiea ... Conis implored Aisa to lead them to the Straw Hats."',
    },
    179: {
      source: 'https://onepiece.fandom.com/wiki/Episode_179',
      note: 'Pagaya puts Su on watch: Su/History Qref c269 (chap 269, ep 176) and it wiki Suu ("le ordina di fare la guardia"). Episode_178: "Su made a distress call that brought Conis and Pagaya out, only for them to see a wounded man. The man was a Divine Squad member, one of Gan Fall\'s men ... Enel intends to ... destroy the land ... the lightning landed on Pagaya and the Divine Squad member." Pagaya thinks she is hungry: Su page Relationships Qref c272 (chap 272, ep 178). Episode_179: Conis "resolved to leave for Angel Island to warn the inhabitants. She left Su behind telling her to watch over the unconscious Usopp and Sanji." Pagaya\'s fate deliberately not stated.',
    },
    185: {
      source: 'https://onepiece.fandom.com/wiki/Episode_185',
      note: 'Episode_185: Sanji wakes, sees Nami aboard the Ark above the forest, climbs a rope to the Maxim with a reluctant Usopp; Episode_184 (anime order): "Conis is now on the Going Merry and asks Su what is going on and why Sanji and Usopp are gone. Su tells her of their plan ... Conis thinks that this is too dangerous because of the injuries they sustained"; Episode_185: Conis "prays for their safety". Su tries to stop them: Su/History Qref c283 (chap 283, ep 185); gestures: Qref chap 283 p4 ep 184. Filed at 185, when both halves are known.',
    },
  },
  'mckinley': {
    156: {
      source: 'https://onepiece.fandom.com/wiki/Episode_156',
      note: 'Naming: Episode_156 Long Summary "tells the captain of the White Berets, McKinley, to be patient" (Usopp addressing him); every McKinley scene in the story is in this summary: crime for owning a waver, hitting a rare fish about to eat Conis, Zoro wanting to fight him, sleeping as environmental pollution, Nami "hit McKinley with her Waver", "class 5 crime punishable by cloud drifting", White Berets beaten by Luffy, "They are now class 2 criminals and the Priests of the Upper Yard will be the ones to judge them". McKinley page Char Box gives first = Ch 241 / Ep 155, and Episode_155 ends on "McKinley, Captain of the White Berets then tells the Straw Hats..."; 156 kept as the safe side (round up). Enel (158) not named.',
    },
    182: {
      source: 'https://onepiece.fandom.com/wiki/Episode_182',
      note: 'Long Summary: "At Lovely Street, McKinley announces to the public that Conis, Pagaya and Gan Fall ... are on the run"; Conis "manages to run over McKinley"; the crowd resists, then goes to pack; relatives in the Divine Squad, "McKinley interrupts them saying the White Berets will figure it out and tells the crowd to go ahead"; "he can\'t let this island turn into Birka, a southeastern sky island ... that disappeared six years ago"; "McKinley used to serve under Gan Fall\'s Divine Squad. McKinley formed the White Berets knowing that ... he would be able to protect the island by enforcing Enel\'s rule." Birka is not a filed record.',
    },
    186: {
      source: 'https://onepiece.fandom.com/wiki/Episode_186',
      note: 'Long Summary: "Some of the White Berets inform McKinley they need to use the ships at the wharf, otherwise they won\'t have enough space ... McKinley says there is no time to go there and urges them to create a river with some emergency Dials. Half of the islanders are still on the island, and after angrily remembering Conis\' speech ... McKinley tells the White Berets not to let people take any belongings ... The wharf gets attacked by the lightning and the White Berets try to direct the remaining islanders to the beach where there still are some boats left." Canon: it wiki McKinley Nota cap=285 ep=186.',
    },
  },
  'yama': {
    172: {
      source: 'https://onepiece.fandom.com/wiki/Episode_172',
      note: 'THRESHOLD RAISED 167 -> 172. Ep 167 shows him (Characters in Order of Appearance) but no naming is recorded (Episode_167 Long Summary; it Episodio_167 only narrates "con Yama"). Episode_172 Long Summary: "Robin asked if Yama was one of God\'s Army and Yama was upset hearing that, stating he is the Divine Soldiers\' leader. He introduced himself to Robin"; "Yama used the Punch Mountain on Robin which destroyed another ruin". Genbo fight from Episode_171 (known by 172): "Genbo and the Divine Soldiers battle and he easily overwhelms them. Yama then appears before Genbo. Genbo shoots an iron cannonball at Yama, which he dodges and kicks the iron cannonball back ... Ten-Fold Axe: Axe Mountain attack on Genbo and defeats him"; Chapter_261 (ep 171): Genbo names Yama. Ruins, notes: Episode_172. Enel\'s throne and scolding the priests: Chapter_254 / Yama page Qref chap=254 ep=167 (known by 172). Chapter 261, where Genbo names him; ch 254 only shows him.',
    },
    174: {
      source: 'https://onepiece.fandom.com/wiki/Episode_174',
      note: 'Long Summary: "Robin, trying very hard to ensure the monument in the ruins are kept intact, protects it using Veinte Fleur: Calendula. However, Yama knowingly wants them destroyed ... Robin decided to lead him out of the ruins ... Yama launched his Drop Mountain which Robin countered with Treinta Fleur: Pound ... tried to attack with axe Mountain but Robin turned the dials inward and trapped him, making him take on his own attack. Robin then chastises him and uses the Cien Fleur Delphinium: Clutch to attack and defeat Yama. Robin continued on her exploration of the ruins." The manga-only apology and cliff throw are left out.',
    },
  },
  'fuza': {
    169: {
      source: 'https://onepiece.fandom.com/wiki/Episode_169',
      note: 'NAMING KEPT AT 169, NOT 162. Chapter_256 (adapted in ep 169, chapter field "256 p.9-19"): "Wyper has somehow managed to evade the String Clouds, and Shura readies his bird Fuza for an aerial battle with the Shandia", the first chapter summary where the story itself names him. Episode_162 names Fuza only in the wiki narration ("Shura and Fuza have already begun their attack on the Going Merry"), and Chapter_248 lists him only under Characters; no on-screen naming could be quoted for 162 (subslikescript blocked by a captcha), so the threshold stays at 169. Char Box first = Ch 241 / Ep 155 is the unnamed debut. Episode_169 Long Summary: the Shandia are trapped in Shura’s Ordeal of String, Wyper throws his weapon away to take Shura’s hit and defeats him with the Reject Dial. Fuza flies off: Shura page Qref chap=257 page=11 ep=169. Altar, Chopper alone, Merry: Episode_162 Long Summary + Shura page Qref chap=247-248 ep=161-162. Sky duel with Gan Fall and Pierre: Chapter_248 "The two men engage into an aerial battle, riding their birds", Shura page Qref chap=249 ep=162-163. Purple bird: Fuza page Appearance. Fire breathing (summary): Chapter_257 (ep 169 p.2-19) "a flame dial can be placed in a bird’s mouth to create a fire-breathing bird (Fuza is shown as an example)", with the ep 169 Long Summary "Gan Fall further explained how some other dials are used for warfare".',
    },
  },
  'holy': {
    175: {
      source: 'https://onepiece.fandom.com/wiki/Episode_175',
      note: 'Naming: Holy page Relationships Qref chap=266 page=7 ep=175 (Ohm to Chopper: Holy does not move or attack unless commanded). Episode_175 Long Summary: Chopper "felt a presence and found it was Holy. Ohm told Chopper not to worry as Holy would not bite him unless he has reason to do so because the dog is well trained by him"; Chopper steps over a person, Ohm says he defeated him; Ohm on death as salvation; Ohm defeats Chopper at 0% survival, Ordeal of Iron; Zoro, Wyper and Gan Fall reach the ruins. Lying beside Ohm as they arrive: Holy page Qref c267 (chap=267 ep=175). Char Box first = Ch 241 / Ep 155 is the unnamed debut (Episode_155: "the dog belonging to the priest"). Log trespasser chase: Episode_155 Long Summary ("about to be eaten by the dog belonging to the priest").',
    },
    177: {
      source: 'https://onepiece.fandom.com/wiki/Episode_177',
      note: 'Episode_176 Long Summary: "From behind was Holy who threw a punch that Zoro dodged. Zoro wondered how a dog could make such a move and Ohm introduced Holy, further commenting that he trains animals"; the snake swallows Nami, Aisa and Gan Fall. Episode_177 Long Summary: "The Shandia at the Upper Ruins ... were defeated by Holy and killed by the piercing of the Iron Cloud. At Ohm’s command, Holy ran around and created a dome-like cage in the form of barbed wires ... hence, called a death match." The snake is not named in the story (Nola is filed at 189).',
    },
    179: {
      source: 'https://onepiece.fandom.com/wiki/Episode_179',
      note: 'Episode_178 Long Summary: Zoro defeats Ohm with Santoryu: Hyakuhachi Pound Ho through the iron cloud. Episode_179 Long Summary: Zoro "commented on needing more training with the attack that he used. Just then, Holy came intending on punching Zoro and missed. Zoro yelled "down" while dodging the attack and the dog obeyed leading Zoro to say that the dog obey’s anyone. Zoro then told the dog to hit itself on the head and take a nap and the dog did." The order itself is left unquoted because the manga has "stay" (Holy page, Qref c272) and the anime summary "down".',
    },
  },
  'shandia-chief': {
    181: {
      source: 'https://onepiece.fandom.com/wiki/Episode_181',
      note: 'Naming by title: he is never named, only "Chief" (Shandia Chief page: "Characters Known by Titles"; jname シャンディア酋長). First canon appearance Chapter_275 (ep 181 covers 275 p.14-19): "As children, Wyper, Genbo, Kamakiri, and Braham were told the story of how their Shandia ancestors defended an ancient stone tablet ... they lost a great many men ... 400 years ago the island was blasted into Skypiea. Their ancestors were unable to defend the land from the native Skypieans ... The chieftain confirms that they lost ... "The Light of Shandora"". Episode_181 Long Summary: "In a flashback, the Shandia Chief is shown talking to a young Wyper and other young warriors telling them about the words inscribed on the Poneglyph and how the Shandia fought hard to protect the Poneglyph"; Wyper stops Enel’s heart with Seastone and Reject. The Char Box "first = Episode 168" and the "village head" in Episode_163 are anime additions to episodes adapting ch 249-256, long before his manga debut, so they are not counted. "Fire of Shandora" is the anime’s wording (Episode_188). Headdress and staff: Shandia Chief page Appearance.',
    },
    189: {
      source: 'https://onepiece.fandom.com/wiki/Episode_189',
      note: 'Episode_189 Long Summary: "Back to Wyper’s flashback, the Village Chief tells young Wyper that Kalgara kept thinking of Noland all through that battle and hoped that if he could just ring the Golden Bell once more, he could let his friend know he is alive ... he never got to do it. Some time later, a ship from the Blue Sea went up to Skypiea and told the Shandia what had happened to Noland ... Young Wyper wonders if ringing the bell now would still reach Noland ... Maybe, says the Chief". Chapter_293 (ep 189 p.2-19) has the chief in tears; the anime summary has only "Maybe", so the story says only that he does not say no. Episode_187 opens the frame: "He remembers the Shandia Chief telling him as a child about Kalgara’s other reason". The chief in the 400-years-ago scenes of eps 187-188 is a different man (Coburn) and is not used.',
    },
    193: {
      source: 'https://onepiece.fandom.com/wiki/Episode_193',
      note: 'Episode_193 Long Summary: "Wyper gains consciousness. He sees Gan Fall, Conis and the Shandorian Chief, prompting him to ask if they were captured by Skypieans. The Shandorian Chief tells him that there is no distinction between those who have been injured in battle. Wyper grows restless, remembering that they still need to find and protect the Golden Bell. He then hears the sound of drums and sees a huge fire outside his tent and assumes that they were announcing a battle. The Shandorian Chief calms him down and tells him to wait and see ... a celebration between Skypieans and Shandorians is taking place." Ruins: Chapter_300 "he is in the ruins of Shandora".',
    },
    195: {
      source: 'https://onepiece.fandom.com/wiki/Episode_195',
      note: 'Episode_194 Long Summary: a Shandorian reports the Golden Bell hanging on Giant Jack, he asks for every able-bodied warrior, Skypieans arrive to help; the Poneglyph at its base; Robin reads it; Roger has already taken the text on, so the duty is fulfilled; "The Shandorian Chief is moved to tears ... they don’t have to fight any longer"; he offers the Belfry’s broken column. Episode_195 Long Summary: he asks Gan Fall to lead, Gan Fall declines, then suggests the Chief; "Vearth should be shared among all the peoples in Sky Island, and that he is the best person who can lead them. All of the Sky People then cry out for him to be their leader, which he then accepts." Chapter_302: "The Shandia Chief asks Gan Fall to be the God of Skypiea once again and he accepts." Roger and Poseidon deliberately not named.',
    },
  },
  'seto': {
    187: {
      source: 'https://onepiece.fandom.com/wiki/Episode_187',
      note: 'Debut and naming (Seto Char Box first = Ch 287 / Ep 187). Episode_187 Long Summary: "A crying young man called Seto was in the forest in the rain trying to get the same type of green skin stain off his arm with a rock. Kalgara walked by and Seto angrily told him he had wanted to be like him one day and instead he was going to die "like this""; "there have been a hundred victims already"; "As they went into the jungle, they ran into Seto. The Doctor diagnosed Seto’s weird stains as Tree Fever and Noland ordered the crew to get some conine"; "Kalgara stormed out and ran into Seto outside who said he was cured and wondered what Noland meant when he mentioned "progress"". Chapter_288: Seto asks Kalgara "to elaborate on his meaning of the word "progress"". Status deceased at 187: he lived four hundred years ago (Char Box status 2), as with Noland and Kalgara.',
    },
    188: {
      source: 'https://onepiece.fandom.com/wiki/Episode_188',
      note: 'Episode_188 Long Summary: the villagers, enraged by the earthquake, gather around the cage to execute the crew; "Seto sits down in front of the cage to block the way ... and tells them they should be ashamed of themselves"; the cure, everybody getting along; the villagers shun the crew over "something the crew has done" (the reason is only given in 189); "Seto tells Noland that Kalgara does not want to see him and reminds them they should leave soon". Seto page Qref chap=289-290 ep=188.',
    },
    189: {
      source: 'https://onepiece.fandom.com/wiki/Episode_189',
      note: 'Episode_189 Long Summary: the Doctor explains the grove "was already dead and infected with Tree Fever" and was cut to stop it infecting the island; "Seto and the villagers are stunned to hear they did it to protect them"; "Seto and the other villagers are all crying and ringing the bell hoping Noland and his crew will hear it before they go"; "a grown-up Seto accompanies Kalgara to their daily ring of the bell. They greet Nola ... who now lives in the ruins. Seto wonders when Noland will be back"; "the sky becomes very dark". Chapter_292 Quick Reference: "The King of the Sky’s name is revealed to be Nola". Marriage to Mousse (Chapter_292 p.19) is left out: the anime summary does not show it.',
    },
  },
  'mousse': {
    187: {
      source: 'https://onepiece.fandom.com/wiki/Episode_187',
      note: 'Debut and naming (Mousse Char Box first = Ch 287 / Ep 187; Qref chap=287 page=5 ep=187 for "the most beautiful of the Shandia women"). Episode_187 Long Summary: the dying priest says "a girl must be offered to the Sacrificial Altar"; "In a castle chamber, Mousse said that if it would save the village, she was willing to offer her body and was looking forward to meeting the Sun God. Her mother sobbed"; tied down, Kashigami hovers, "Noland jumped in the water, climbed the altar, and beheaded Kashigami"; "the villagers ... screamed for both of them to be killed"; "Kalgara threw a knife at Mousse and encouraged her to kill herself to appease the Gods. Noland stopped her"; "Mousse who was in a nearby cage asked about Noland". That she is Kalgara’s daughter is not in the 187 story or dossier (revealed in 188). Status deceased at 187: four hundred years ago, as with Noland and Kalgara (Char Box status 2).',
    },
    188: {
      source: 'https://onepiece.fandom.com/wiki/Episode_188',
      note: 'Episode_188 Long Summary: "the crew as well as Mousse are being led to the Sacrificial Altar ... The villagers are getting ready to burn the crew and Mousse"; "Kalgara reveals that he believes so strongly in them that Mousse is actually his daughter and he was ready to let her die"; the cure, "Kalgara is also tearingly reunited with his daughter"; "Kalgara offering him Mousse’s hand in marriage (that he turned down on account of his own family back home)". Chapter_289: Kalgara "angrily yelling that Mousse was actually his daughter".',
    },
    189: {
      source: 'https://onepiece.fandom.com/wiki/Episode_189',
      note: 'Episode_189 Long Summary: "a cloaked Mousse appears behind him"; "those trees were sacred to them as they believe the souls brought back by the Golden Bell reside in those trees"; the Doctor: "the grove in question was already dead and infected with Tree Fever"; "Mousse runs into town ... begs her father to go talk to the crew before they leave and tells him he will regret it later if he does not go say goodbye to the best friend he ever had"; "Kalgara rushes to the beach"; the villagers ring the bell. Mousse page Qref chap=291 page=6-8, 10-14 ep=189.',
    },
  },
  'nola': {
    189: {
      source: 'https://onepiece.fandom.com/wiki/Episode_189',
      note: 'Naming: Chapter_292 (ep 189 covers 292 p.2-19) Quick Reference "The King of the Sky’s name is revealed to be Nola" and "Seto stops momentarily to feed the snake, Nola"; Episode_189 Long Summary: "a grown-up Seto accompanies Kalgara to their daily ring of the bell. They greet Nola, the now slightly grown python who is Kashigami’s grandson and who now lives in the ruins"; Seto page: Seto named the snake (Qref c292, ep 189). Char Box first = Ch 255 / Ep 168 is the unnamed debut; the Nola page’s own name Qref points to chap=296 ep=191, which is later still. Recap facts, all before 189: Luffy swallowed and thinking it a cave (Nola page Qref c261 ep 171; Episode_175 "Luffy, upset about the "cave""); Nami, Aisa and Gan Fall swallowed (Episode_176 Long Summary); dropped into Shandora, cries, struck by Enel (Episode_179 Long Summary). Epithet "Master of the Sky": Char Box Qref chap=267 page=7 ep=175 (a Divine Soldier), filed at the threshold. Origin: born on Jaya 400 years ago (Episode_188-189 flashback).',
    },
    191: {
      source: 'https://onepiece.fandom.com/wiki/Episode_191',
      note: 'Chapter_296 (ep 191 covers 296 p.2-19): "Nola lies unconscious ... She dreams of accompanying Kalgara and Seto to ring the Golden Bell as a small snake, before the two vanished, ignoring her cries; awakening and upset, she slams her head into the beanstalk, causing a massive vibration of the cloud layer ... Usopp labeling it a "cloudquake" ... the beanstalk only tilts slightly". Seto page Qref chap=296 page=7-8 ep=191 for the dream. Episode_191 Long Summary: Zoro "slices one part of the beanstalk down"; "Nola, the snake tries to help topple it down, but it doesn’t work".',
    },
    194: {
      source: 'https://onepiece.fandom.com/wiki/Episode_194',
      note: 'Bell and joy: Chapter_299 (ep 193) "Nola, upon hearing the ringing of the golden bell, cries out in joy"; dancing at the celebration: Nola page Qref c300 (ep 193). Episode_194 Long Summary: "Luffy, Sanji, Chopper and Nami are inside Nola, retrieving the treasure inside its belly". Chapter_301 (ep 194): Nola sleeping, "Usopp comments that the snake is a heavy sleeper. Zoro notes that it’s been dancing all night ... Usopp replies that Nola seems harmless, and Zoro retorts that he has no idea how vicious that snake truly is"; Sanji wonders what Nola ate to hold so much treasure.',
    },
  },
  'tonjit': {
    207: {
      source: 'https://onepiece.fandom.com/wiki/Episode_207',
      note: "Threshold entry (Char Box first = Ch 305 / Ep 207; the stilt figure of Ch 304 is unnamed). Episode_207 Long Summary: Luffy, Usopp and Chopper \"come across two tall bamboos whose top couldn't be seen. Suddenly the bamboos start moving and one hits Luffy. Luffy gets excited and breaks the bamboo. Then falls an old man named Tonjit ... he made the world's tallest stilts and after going up, he couldn't come down for 10 years due to fear. Tonjit explains that due to expanse grassland, everyone here is relaxed making them long.\" Nosebleed-only fall and greeting strangers as old friends: Tonjit page (Abilities, Personality).",
    },
    208: {
      source: 'https://onepiece.fandom.com/wiki/Episode_208',
      note: 'EN Episode_208 Short Summary: "After Tonjit reunites with his horse, they are soon attacked by Captain Foxy". IT Episodio 208: Tonjit tells Luffy, Usopp and Chopper he belongs to a nomad tribe; the island is a ring the tide turns into ten islands; every three years the tribe migrates; Shelly waited ten years; he rides her until someone throws a net at her legs; it is Foxy, who challenges Luffy to the Davy Back Fight, and Luffy, wanting to avenge man and animal, accepts. Shelly page Anime and Manga Differences: in the anime Foxy catches her in a net instead of shooting her, so the manga gunshot and musket are left out.',
    },
    212: {
      source: 'https://onepiece.fandom.com/wiki/Episode_212',
      note: "Episode_212 Long Summary: after the Groggy Ring win, the prize is a crew member or the flag; Chopper waits; \"Luffy shouts out Shelly's name. Nami and Usopp start complaining and pulling at Luffy's face. Tonjit and Shelly appear ... Luffy tells Tonjit he got Shelly back from the Foxy Pirates for him. Tonjit expresses concern over Zoro and Sanji's beat up appearances, thanks Luffy ... and then asks if Chopper is okay with this\"; Luffy promises to win the next round and get Chopper back. The anime ending with the grandson (ep 219, anime-only) is deliberately not used.",
    },
  },
  'itomimizu': {
    209: {
      source: 'https://onepiece.fandom.com/wiki/Episode_209',
      note: 'Threshold entry: anime debut in the Donut Race start (Char Box / both wikis; the Ch 306 self-introduction as the official is adapted here; IT Episodio 209 lists Lombrico and Chuchun). EN Episode_209 Short Summary: "The first round of Davy Back Fight involves a race around the island with tiny boats. Zoro and Chopper\'s boat is eliminated." IT Episodio 209: boats of three barrels and two oars, the Straw Hats in three groups and the Foxy Pirates on seven boats, exploding barrels, food, drink and female company offered, Zoro destroys two enemy boats and the blast disqualifies his own. Itomimizu page History: commentator riding the Super Sparrow Chuchun for a better view. The snail microphone (a named record) is not named.',
    },
    212: {
      source: 'https://onepiece.fandom.com/wiki/Episode_212',
      note: 'Episode_212 Long Summary: "Itomimizu narrating that Sanji and Zoro have been defeated, but is interrupted when the two Straw Hats suddenly stand up"; on the Monster Burger weapons "Itomimizu says that this is clearly against the rules, but the referee is stretching and not watching the field"; "at first, Itomimizu thinks they are fighting again"; "Itomimizu announces that the game is over and the Straw Hats are the winners"; he explains they can choose a member or the flag; the Foxy Pirates call Nami\'s idea the "peanut strategy"; "Itomimizu then steers the conversation back to where it was: who will Luffy choose?" The Groggy Monsters are left unnamed.',
    },
  },
  'pickles': {
    210: {
      source: 'https://onepiece.fandom.com/wiki/Episode_210',
      note: 'Threshold entry. Episode_210 Long Summary: Foxy uses his Noro Noro no Mi powers to slow down the Barrel Tiger, allowing the Cutie Wagon (Porche) to win; "He then selects Tony Tony Chopper as his new crewmate as the prize"; "the Straw Hats cannot change their order, they will only have two participants for the second event: Zoro and Sanji. Foxy explains the second event, the Groggy Ring, where one player on each team would be the ball that would have to go through the other team\'s ring. Foxy introduces his teammates, the Groggy Monsters: Hamburg, Pickles and Big Pan."',
    },
    211: {
      source: 'https://onepiece.fandom.com/wiki/Episode_211',
      note: 'Episode_211 Long Summary: the Groggy Monsters choose the ball; "Pickles says he was wondering what kind of opponents warranted them coming out and playing"; "Pickles rushes forward to attack Sanji, but he easily jumps over him"; "Pickles knocks him out of the way ... Pickles catches Sanji and throws him to the goal"; Zoro throws Pickles; the Groggy Monsters return with weapons while the referee pretends not to see and beat Zoro and Sanji, who will not work together. Pickles page History Qref c310 and c311 (ep 211): Zoro grabs his leg and throws him into Hamburg.',
    },
    212: {
      source: 'https://onepiece.fandom.com/wiki/Episode_212',
      note: 'Episode_212 Long Summary: Foxy orders a "Monster Burger"; Sanji sends Hamburg "flying right in between the pans that Big Pan was crushing together. Pickles, angered at Hamburg\'s defeat, charges at Sanji, but is stopped by Zoro ... Zoro sends him flying ... Pickles flies spinning at Big Pan and accidentally slices him in the chest ... Sanji quickly kicks him out of the way and straight into the referee"; Zoro dunks Big Pan for the win. Pickles page Qref c312: he begs Big Pan to stop, but Big Pan fails to hear him. The "Tackle Machine" caption epithet is left out.',
    },
  },
  'big-pan': {
    210: {
      source: 'https://onepiece.fandom.com/wiki/Episode_210',
      note: 'Threshold entry. Episode_210 Long Summary: Foxy slows down the Barrel Tiger with his Noro Noro no Mi powers, the Cutie Wagon (Porche) wins and Foxy selects Tony Tony Chopper as the prize; "the Straw Hats cannot change their order, they will only have two participants for the second event: Zoro and Sanji"; the Groggy Ring, "where one player on each team would be the ball that would have to go through the other team\'s ring"; "Foxy introduces his teammates, the Groggy Monsters: Hamburg, Pickles and Big Pan." Size relative to the others: Big Pan page Appearance (Qref intro, ch 309 / ep 210).',
    },
    211: {
      source: 'https://onepiece.fandom.com/wiki/Episode_211',
      note: 'Episode_211 Long Summary: Sanji "tries to attack the opposing team\'s Ballman, Big Pan. He slips on Big Pan\'s arms because he is part loach and their skin is slippery. Big Pan hits Sanji sending him flying to Hamburg in order to score a goal"; "Big Pan is breaking the rules by using weapons on his feet"; all three return with weapons and beat Zoro and Sanji "to an inch of their life". Wotan heritage explained at 211 (Big Pan page Qref chap=310 ep=211); ballman as their tried and true strategy: Big Pan page History.',
    },
    212: {
      source: 'https://onepiece.fandom.com/wiki/Episode_212',
      note: 'Episode_212 Long Summary: Foxy orders a "Monster Burger"; Sanji sends Hamburg "flying right in between the pans that Big Pan was crushing together"; "Pickles flies spinning at Big Pan and accidentally slices him in the chest. As Big Pan starts to fall over, Sanji runs behind him and makes him stand back up with Anti-Manner Kick Course"; Sanji launches Zoro, who "grabs Big Pan by his mouth and proceeds to land his head into the goal". Big Pan page Qref c312: he fails to hear Pickles and crushes the team leader; the Groggy Monsters lose for the first time.',
    },
  },
  'yokozuna': {
    229: {
      source: 'https://onepiece.fandom.com/wiki/Episode_229',
      note: 'Threshold entry: first named here (228 only shows the frog swimming; 227 an unnamed flashback). Episode_229 Long Summary: "Zoro sees a giant frog swimming crawl stroke"; Luffy orders the Going Merry to follow it; traffic light, the train "moves inches past them"; "the frog ... gets hit by the train, and faints"; "Luffy says a frog was hit, and Chimney asks if Luffy is talking about Yokozuna. She said that Yokozuna will not die, and it is the biggest problem for the station ... the frog takes a test of strength against the train"; "Luffy says he will not eat a frog that had been hard-working." Chimney and Kokoro (filed 230) and the train name (Tom, filed 246) are left unnamed.',
    },
    250: {
      source: 'https://onepiece.fandom.com/wiki/Episode_250',
      note: 'Episode_248 Long Summary (flashback): Yokozuna with Tom at Tom\'s Workers; "Franky suddenly gets up and teaches Yokozuna how to do the front crawl"; Franky, Tom, Iceburg and Yokozuna build the Sea Train, "Puffing Tom, officially makes its departure filling Water 7 with hope." Episode_250: Spandam blames the judicial ship attack on Tom, Iceburg and Franky; "Kokoro and Yokozuna are worried for Tom"; Tom confesses to spare his apprentices; "Iceburg, Kokoro, and Yokozuna are shocked" when Franky hits Spandam; "Franky tells Yokozuna to stay away while he fires at Puffing Tom ... Franky is soon run over by Puffing Tom." Filed at 250, where the flashback ends.',
    },
    263: {
      source: 'https://onepiece.fandom.com/wiki/Episode_263',
      note: 'Episode_262 Long Summary: Luffy tells the frog on the tracks to turn back, "Kokoro recognizes Yokozuna", who "prepares to knock away Rocketman". Episode_263: Yokozuna knocks the train off the rails; "Luffy angrily yells at Yokozuna for derailing the train and demands an apology ... Yokozuna slams Luffy backwards"; Kokoro knows "he was just trying to protect her but ... the pirates didn\'t kidnap her"; "it\'s been eight years since Tom has been taken away ... Yokozuna has challenged the Sea Train every day since then ... wants to get stronger so he wouldn\'t have to lose the ones he loves again"; Franky has been taken; Yokozuna yells yes; "Luffy, now on Yokozuna". The destination island (filed 264) is left unnamed.',
    },
    274: {
      source: 'https://onepiece.fandom.com/wiki/Episode_274',
      note: 'Episode_272 Long Summary: "another Juror\'s ball is hurled at them. But Yokozuna blocks it with his immense strength"; Zoro cuts open the Courthouse door. Episode_273: "Yokozuna and the Franky Family stay behind at the door to defend their backs"; "The Marines cannot believe that Yokozuna is preventing them from entering the Courthouse". Episode_274: "even Yokozuna goes down from a continual assault from the Jurors\' giant iron balls. Meanwhile, the Marines regroup behind bulletproof shields and are about to charge into the courthouse. But they are then stopped by Oimo and Kashii"; "as Yokozuna fell, the giants came to cover."',
    },
  },
  'hattori': {
    232: {
      source: 'https://onepiece.fandom.com/wiki/Episode_232',
      note: 'Naming. Episode 232 adapts Chapter 326 p.14-17 and all of Chapter 327 p.2-19 (Episode_232 infobox), and its Characters in Order of Appearance lists Hattori beside Lucci; the introduction is on Chapter 327 p.3 (Hattori page occupation Qref intro: chap 327, ep 232, "Hattori is introduced along with his master Lucci"). Chapter_327 Long Summary: Lucci brings Paulie back to Dock 1 "while being scolded by Hattori"; Hattori apologizes and explains Paulie is in debt; "Luffy tells Paulie that the true enemy is the pigeon, Hattori"; "Hattori introduces himself and Lucci. Nami finally realizes that Lucci is a ventriloquist"; Paulie says he always speaks through the pigeon. Episode_232 Long Summary: Paulie tries to run away with the money stolen by the Franky Family, Lucci stops him. Seen unnamed on Lucci in ep 230. Franky (filed 235) left unnamed: "the gang of dismantlers".',
    },
    244: {
      source: 'https://onepiece.fandom.com/wiki/Episode_244',
      note: 'Episode_243 Long Summary: "all the agents surround him and Hattori suddenly lands on the bull masked agent\'s shoulder. The bull masked agent takes off his mask revealing himself to be none other than Lucci", with Kaku, Kalifa and Blueno unmasked. Episode_244 Long Summary: Lucci, unmasked, explains to Iceburg the Cipher Pol 1 to 8 agencies and "a unit that is supposedly non-existent and is called CP9", authorised to kill. Hattori page: "Hattori reverts to being an ordinary pigeon after Lucci was revealed to be an assassin" (Qref c345, ep 243). Filed at 244, where CP9 is explained, in line with the CP9 affiliations of Lucci and Kaku.',
    },
    309: {
      source: 'https://onepiece.fandom.com/wiki/Episode_309',
      note: 'Episode_309 Anime Notes: "Luffy defeats Lucci"; "In the anime, the Marines announce it as Hattori flies to Lucci\'s unconscious body." Hattori page, Enies Lobby Arc: he "stood most of the time on Lucci\'s shoulder, until he left during Lucci\'s fight with Monkey D. Luffy. When Lucci was finally defeated, he returned and landed on his injured back." Rokuogan at full power, Gear Second Jet Gatling and the wall as in the rob-lucci story at 309.',
    },
  },
  'peepley-lulu': {
    233: {
      source: 'https://onepiece.fandom.com/wiki/Episode_233',
      note: 'Naming (Lulu page occupation Qref intro: chap 328 p. 11-15, ep 233). IT Episodio 233: "Rufy e Nami si accorgono che due delle tre valige sono vuote e scoprono da Peepley Lulu che Usop è stato rapito dalla Franky Family." Lulu page history: when the officials led by Corgi visited Dock 1, "Lulu asked for permission to chase them away"; Lulu "revealed that he had passed Usopp, who he thought was Kaku, getting kidnapped by the Franky Family." Episode_233 Long Summary: the keel cannot be repaired, government officials show up, 200 million gone, Luffy runs off, Nami heads for the hideout. Franky (filed 235) left unnamed: "the gang of dismantlers"; Corgi (filed 234) left unnamed. Seen unnamed at 230.',
    },
    243: {
      source: 'https://onepiece.fandom.com/wiki/Episode_243',
      note: 'Episode_241 and Episode_242: Paulie, Kaku, Lulu, Tilestone, Lucci and Hattori guard the door to Iceburg\'s room; Tilestone overhears shipwrights finding a masked man and he and Lulu run off. Episode_243 Long Summary: "the soldier agent is seen fighting Peepley Lulu who easily takes him out. She then jumps into the sky and leaves"; later in Iceburg\'s room the masks come off and "The solider reveals herself to being Kalifa". Lulu page: Qref chap 345 p. 9-10, ep 243.',
    },
    256: {
      source: 'https://onepiece.fandom.com/wiki/Episode_256',
      note: 'Episode_256 Long Summary: Zoro notes the extra people aboard the Rocketman, Paulie, Lulu and Tilestone; "Tilestone and Lulu agree to follow behind Paulie wanting to avenge Iceburg"; they ask Paulie to name the culprits "saying they won\'t be shocked"; "Paulie says that the culprits are Lucci, Kaku, Kalifa, and Blueno but, to his anger, Tilestone and Lulu are greatly surprised"; Luffy offers an alliance against the common enemy, Paulie and Zambai agree, Rocketman approaches a large wave. Enies Lobby (arc filed 264) left unnamed.',
    },
  },
  'corgi': {
    234: {
      source: 'https://onepiece.fandom.com/wiki/Episode_234',
      note: 'Naming. Episode_234 Long Summary: the government officials who visited Iceburg leave his office; "The main government official of the group then goes on to talk about how Iceburg might have it"; Kalifa knocks and "they speak about the it that the government official, Corgi, was referring to, telling us that he has whatever it is"; a wanted poster of a young Nico Robin on the office wall. IT Episodio 234: "Coogy e i suoi due colleghi lasciano la residenza di Iceburg". Chapter_331: Kalifa asks why Corgi always looks so angry when he leaves. Unnamed "government officials" at 233. Pluton (named later) left out.',
    },
    252: {
      source: 'https://onepiece.fandom.com/wiki/Episode_252',
      note: 'Episode_252 Long Summary: "Corgi tells Robin that CP9 will be coming shortly and tells Robin to get onto the Sea Train. He orders two guards to take her onto the Sea Train"; CP9 arrive "with Rob Lucci leading the group and Blueno is carrying Franky and Usopp", Kaku punches Usopp to quiet him; "Corgi compliments CP9\'s work but Lucci says it\'s not over until they reach Enies Lobby"; the train leaves early because of Aqua Laguna and Sanji boards. Enies Lobby (arc filed 264) left unnamed: "the island".',
    },
    262: {
      source: 'https://onepiece.fandom.com/wiki/Episode_262',
      note: 'Episode_260: Corgi enters train car 1, Sogeking hides in Robin\'s coat making goofy gestures, Corgi thinks he is imagining things. Episode_261: Corgi grows suspicious and "says it\'s not his imagination and can smell out pirates". Episode_262: "Corgi continues sniffing at Robin. Robin comments on how Corgi has bad manners"; "Corgi notices a pair of legs"; Sogeking pulls his weapon at Corgi\'s face; "Corgi attempts to run away calling for Lucci\'s help but gets shot down by Sogeking." Corgi page, Anime and Manga Differences: in the manga he is defeated off-screen; the anime shows the explosive pellet (ep 261-262).',
    },
  },
  'tilestone': {
    238: {
      source: 'https://onepiece.fandom.com/wiki/Episode_238',
      note: 'Naming (Tilestone page: the last of the foremen to be formally introduced, Qref intro chap 336 p. 12, ep 238). Episode_238 Long Summary: Iceburg remembers one attacker was with the Straw Hats (Nico Robin); "Tilestone charges into the room loudly excited to hear that Iceburg is awake"; "Paulie knocks Tilestone out of the room"; Tilestone tells Paulie that Luffy and Franky are fighting and destroying the shipyard; the foremen attack Luffy; "Franky attempts to blast him but Tilestone knocks him away with a giant log. Kaku then grabs Franky and slams him onto the ground." Seen unnamed at 230.',
    },
    243: {
      source: 'https://onepiece.fandom.com/wiki/Episode_243',
      note: 'Episode_243 Long Summary: Tilestone finds that the bear-masked agent has killed off more shipwrights and seemingly Lucci and Kaku; he "charges at the masked CP9 agent with his mallet but the agent hardens his body to completely block the attack (Tekkai). The agent then grabs Tilestone\'s arm and viciously punches him to the ground knocking him out." Later in Iceburg\'s room the masks come off: "It turns out that they weren\'t killed earlier and it was other people disguised as them", and "the bear masked agent is Blueno". Tilestone page: the hammer "was crushed on impact" (Qref chap 344 p. 2-4, ep 243).',
    },
    266: {
      source: 'https://onepiece.fandom.com/wiki/Episode_266',
      note: 'Episode_265 Long Summary: at the main gate "Peepley Lulu takes out a Marine while Tilestone bear-hugs some others"; past it Kashii and Oimo ambush the Franky Family and take out the Kairiki Destroyers. Episode_266 Long Summary: "With Mozu and Kiwi\'s Ship\'s Bottom Dismantling Cut, Paulie\'s Rope Action, and Zambai\'s bazooka, Kashii is finally defeated. He is then nailed down by Peepley Lulu and Tilestone. Oimo then takes on the remaining fighters." Lulu page: "Lulu and Tilestone got on Kashii\'s shoulders and beat his face with hammers" (Qref chap 376-378, ep 264-266).',
    },
  },
  'jerry': {
    253: {
      source: 'https://onepiece.fandom.com/wiki/Episode_253',
      note: 'Debut and naming (Jerry page: first = Ch 362 / Ep 253; affiliation CP6, Qref intro chap 362 p. 4, ep 253). Episode_253 Long Summary: Sanji kicks an agent into the train and makes it inside; "One of the government agents wants to let Rob Lucci be informed of Sanji\'s presence but suddenly, a very large man that is standing over Sanji says that CP9 shouldn\'t be bother with such a small matter. This man is revealed to be Jerry who says he is famous, undefeated champion known for his boxing skills in the South Blue"; his barrage of punches hits the other agents; he goes into a position, "attempts to hit Sanji with a drill kick but misses"; Sanji "effortlessly takes out Jerry". Karate Island origin is Vivre Card only: left out.',
    },
  },
  'wanze': {
    258: {
      source: 'https://onepiece.fandom.com/wiki/Episode_258',
      note: 'Threshold entry. Ep 257 only glimpses him (“unclearly seen”); Episode_258 Long Summary: in train car 4 Sanji, Franky and Sogeking “are greeted by an erratic cook named Wanze”, who eats flour and spreads noodles from his nostrils, says Robin is an important prisoner and they must defeat his Ramen Kenpo, dodges Franky’s shots and Sanji’s kick smiling, and Sanji sends the other two ahead. Mad Wanze epithet and CP7 affiliation: wiki intro Qref chap 368 ep 258; Corgi names him CP7’s ace in ep 253. Nero (filed 259) is left out.',
    },
    261: {
      source: 'https://onepiece.fandom.com/wiki/Episode_261',
      note: 'Episode_259: Ramen Beam, the ramen Men’s Formal Suit, Sanji caught in the noodles and slammed around, then picks up kitchen knives. Episode_260: Sanji cuts the suit apart. Episode_261: knives are not for cutting people; Wanze throws knives (Hocho Nage), calls Robin a terrible woman better off dead; Parage Shot rearranges his face; Santen Découpage returns it to normal and sends him flying through two cars into the one CP9 is in. Filed at 261, where the fight ends.',
    },
  },
  'nero': {
    259: {
      source: 'https://onepiece.fandom.com/wiki/Episode_259',
      note: 'Threshold entry (ep 257 only an unclear glimpse). Episode_259 Long Summary: the agent reports “Nero in the third car”; on the roof “Franky is seen being confronted by Nero”, who knew Franky would skip past the car; Franky tells him to look the other way and punches him from behind (“the king of Water 7’s Underworld”); Nero uses Soru, Kami-e, Rankyaku (little effect on Franky) and Geppo to get back from over the sea; each wants to know what the other is. CP9 affiliation and Sea Weasel epithet: wiki intro Qref chap 369 ep 259.',
    },
    261: {
      source: 'https://onepiece.fandom.com/wiki/Episode_261',
      note: 'Episode_260: Nero has not mastered Shigan, takes out two pistols, targets Franky’s back; Franky Invincible; Centaur Mode, which Nero yells is backwards. Episode_261: Nero nearly knocks Franky off, Franky pins him with his four legs and takes him down with Ultimate Hammer, crashing him down into the train. Filed at 261, where the fight ends.',
    },
    262: {
      source: 'https://onepiece.fandom.com/wiki/Episode_262',
      note: 'Episode_262 Long Summary: Kaku says that according to Corgi he is the newest member of CP9 and knows only four of the six powers; Nero decides to kill Franky; Lucci says Franky must be kept alive, gives him three seconds, catches his Soru, stabs him in the back with Shigan and sends him out the window into the water; Lucci tells Kalifa that in the report Nero was too weak to be a member. His fate afterwards is never settled, so no status is filed.',
    },
  },
  't-bone': {
    261: {
      source: 'https://onepiece.fandom.com/wiki/Episode_261',
      note: 'Threshold entry: first episode that names him on screen (Zambai: “Ship-Slasher” T Bone, the Funimation wording of the epithet the record gives as Ship Cutter, from the Navy, can slash through any ship). Folds in eps 257 (bandages a bitten arm with a piece of his cape, peace and kindness, Marines freaked out by his face), 258 (Chokkaku Senko cuts the door, the three are on car 5, the cars are detached) and 260 (the Sea King cut in half on the tracks). Episode_261: running on the tracks, ashamed of falling for a trap; proud captain of the Navy; Zoro blocks his attack and takes him down, he goes flying into the water; Zoro compliments his strength and T Bone, floating, compliments Zoro.',
    },
    1116: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1116',
      note: 'Episode_1116: Tsuru and Sengoku learn of Vice Admiral T Bone’s murder in the Pepe Kingdom, killed by one of the civilians he was protecting, a poor citizen who did it for his Cross Guild bounty to support his family; the anime shows a dagger; Buggy congratulates the killer and offers him a role in the Cross Guild. Wiki Qref chap 1082 ep 1116 for rank and death. Rear Admiral (SBS only) and the bounty amount (special material) are left out.',
    },
  },
  'sodom-and-gomorrah': {
    264: {
      source: 'https://onepiece.fandom.com/wiki/Episode_264',
      note: 'Threshold entry: first episode where the names are clearly said aloud (“Zambai orders Sodom and Gomorrah to jump over the fence and break down the gate”, after Luffy launches himself into Enies Lobby ahead of the plan). Folds in ep 255 (Luffy lets the Franky Family come; they would ride king bulls and hold on to the train) and ep 256 (they follow the Rocketman out of Water 7; Zambai fires the connection cannons that link their ship with Rocketman). The words King Bull and Sea King are avoided because King is a filed record name.',
    },
    267: {
      source: 'https://onepiece.fandom.com/wiki/Episode_267',
      note: 'Episode_265: the Franky Family charge through the main gate riding Sodom and Gomorrah and blast away Marines; the giants effortlessly take out the Kairiki Destroyers. Episode_266: Kashii defeated by the combined family. Episode_267: Oimo tries to stop them getting past the gate but is restrained by Paulie’s Rope Action; the King Bulls pull the rope, causing Oimo to spin; the family defeats Oimo. Treads and who rides whom: Sodom page (Galley-La foremen on Sodom, Zambai, Mozu and Kiwi on Gomorrah).',
    },
    270: {
      source: 'https://onepiece.fandom.com/wiki/Episode_270',
      note: 'Episode_268: Paulie helps the Straw Hats get on. Episode_269: Sodom tells Chopper how Franky helped them and they are now loyal to the Franky Family; Sodom page Qref chap 383 ep 269: saved from the stomach of a Sea King, Franky was full and did not eat them. Episode_270: Sodom hit by the cannon in the heart, the Straw Hats board Gomorrah before he collapses; tearful plea to go on without him per Qref chap 383 ep 269 ep2 270.',
    },
    272: {
      source: 'https://onepiece.fandom.com/wiki/Episode_272',
      note: 'Episode_271: Gomorrah knocked down by one of the Guilty Jury; he tells Chopper he can still move and gets up. Episode_272: hit by the giant iron balls, his head hit and blinded, crashing into buildings; Chopper says he promised Sodom to take them to the courtyard and wants to help rescue Franky, who saved them both; Zoro and Sanji break through the building at a dead end; Gomorrah collapses, having reached the Courthouse Plaza.',
    },
  },
  'baskerville': {
    267: {
      source: 'https://onepiece.fandom.com/wiki/Episode_267',
      note: 'Threshold entry. Episode_267 Long Summary: the remaining Marines approach Baskerville and tell him Kashi has been defeated and Oimo is being overwhelmed; he sends one hundred men from the Watchdog Unit. Chief Justice, epithet and Spandam being unreachable: wiki Qref chap 379 ep 267. Watchdog Unit ordinarily posted to guard the courthouse: Baskerville page history. The fact that they are three men is withheld until 284.',
    },
    274: {
      source: 'https://onepiece.fandom.com/wiki/Episode_274',
      note: 'Episode_273: the Three-Headed Judge reports to Spandam that the pirates are in the courthouse, begins a trial, is ignored, jumps up angry at Zoro, and the Franky Family pull him back down by his legs. Episode_274: Spandam orders Baskerville to guard the drawbridge to the Tower of Justice at all costs; he reveals the Jurors are pirates condemned to death who only ever say Guilty. Filed at 274; the term Tower of Justice is avoided before 284.',
    },
    284: {
      source: 'https://onepiece.fandom.com/wiki/Episode_284',
      note: 'Episode_284: Mozu and Kiwi throw the drawbridge levers; Baskerville declares he will stop the drawbridge; Zambai and Paulie attack, and it is revealed he is three judges in a single costume; Center Baskerville has a trench mortar fired on the drawbridge, jamming it partway; Kokoro brings the Rocketman to the drawbridge. Run down by the Rocketman: wiki Qref chap 399 ep 284. No status filed: the story never shows what happens to them afterwards.',
    },
  },
  'clover': {
    275: {
      source: 'https://onepiece.fandom.com/wiki/Episode_275',
      note: 'Threshold entry. Episode_275 charDebut lists Clover; Short Summary: Professor Clover forbids Robin from researching the Void Century; Long Summary: Robin earns the rank of scholar in archaeology at eight and her request to help is denied because of her youth. The celebration is Chapter 391 (adapted in 275). The Clou D. name (ep 1152), Vegapunk and his explorer past are all far later and left out.',
    },
    277: {
      source: 'https://onepiece.fandom.com/wiki/Episode_277',
      note: 'Episode_277 Short Summary: Clover reveals the Poneglyphs were most likely carved by an ancient country so the World Government could not erase its history, and is shot by Spandine, who then activates the golden snail for the Buster Call. Long Summary: the Five Elders order Spandine to kill him. Same episode as the Robin story at 277.',
    },
    278: {
      source: 'https://onepiece.fandom.com/wiki/Episode_278',
      note: 'The flashback ends in 278 (Chapters 397-398). Clover page History: the scholars throw the books into the lake and keep working until the tree falls with them inside; the Marines search the island and confirm there are no survivors (Chapter 398 p2, ep 278). Status deceased from 278.',
    },
  },
  'spandine': {
    276: {
      source: 'https://onepiece.fandom.com/wiki/Episode_276',
      note: 'Threshold entry. On screen in 275 but naming aloud unconfirmed, so rounded up. Episode_276 Long Summary: Spandine is shot in the sleeve by Olvia, explains he means to warn the academic community off the Void Century, Olvia is struck down, the agents storm the Tree of Knowledge and round up the scholars, and Spandine arrives with an underling carrying the unconscious Olvia (Chapter 394: thrown before the scholars as proof of guilt).',
    },
    278: {
      source: 'https://onepiece.fandom.com/wiki/Episode_278',
      note: 'Folds 277 into 278. Episode_277: the Five Elders order Spandine to kill Clover, who is shot, then the golden snail summons the Buster Call. Spandine page: he flees to his ship after nearly being hit, abandoning Olvia. Episode_278 Long Summary: Robin is denied the evacuation ship per Spandine orders, and the ship is sunk by a Marine vice admiral (not named here: Sakazuki is filed at 463). Spandine horror at the sinking from Chapter 398 and the Spandine page.',
    },
    301: {
      source: 'https://onepiece.fandom.com/wiki/Episode_301',
      note: 'Episode_301 Short Summary: Robin finds out Spandam is the son of Spandine, the man who invoked the Buster Call on Ohara; Long Summary: Spandam drags her by rope, says Spandine commanded the Ohara mission, and Robin answers that Ohara legacy will not die while she lives. Chapter 419 (ep 301): the Marine ship waits at the end of the Bridge of Hesitation, and Spandine put the bounty on Robin. Framing Robin to the press (ep 1163) left out.',
    },
  },
  'nico-olvia': {
    276: {
      source: 'https://onepiece.fandom.com/wiki/Episode_276',
      note: 'Threshold entry: the episode is titled The Mother Name is Olvia and the woman is revealed to be Olvia. Long Summary: she arrived on the Marine ship, is the sole survivor of the Poneglyph expedition, warns the scholars who refuse to leave, cuts ties with Robin so she will not be known as a criminal daughter, takes a gun, grazes Spandine sleeve and is struck down. The 79,000,000 bounty is Vivre Card only and left out.',
    },
    278: {
      source: 'https://onepiece.fandom.com/wiki/Episode_278',
      note: 'Folds 277 into 278. Episode_277 Short Summary: Olvia denies being Robin mother until Robin admits she can read the Poneglyphs, then after a tearful reunion entrusts Saul with Robin; Long Summary: she joins the effort to save the library. Saul freeing her is his 277 backstory. The tree falls with the scholars inside and the Marines report no survivors in Chapter 398 (ep 278); status deceased from 278.',
    },
  },
  'funkfreed': {
    285: {
      source: 'https://onepiece.fandom.com/wiki/Episode_285',
      note: 'Threshold entry. Episode_285 Long Summary: Spandam summons Funkfreed, the elephant morphs into a sword, and Spandam tells Robin it was imbued with the power of the Zou Zou no Mi; Short Summary: Chimney follows Spandam, Lucci and Robin down a secret corridor. Chapter 400 p6 (ep 285) for the name. The unnamed dinner scene at 254 is only recapped. Fruit named in English only in the timeline; the Italian fruit name is avoided in the text because it spells a later record.',
    },
    306: {
      source: 'https://onepiece.fandom.com/wiki/Episode_306',
      note: 'Folds the ramming (Funkfreed page Qref chap 413 ep 297, repeated in 298) into 306. Episode_306 Short Summary: Spandam is defeated when Franky slams an entire elephant on top of him. Funkfreed page (Chapter 423 p7-11, ep 306): Spandam feigns an attack on Franky while aiming Funkfreed at Robin, Franky stops the blade, threatens him with a point-blank Weapons Left, the elephant surrenders and Franky tosses him by the trunk onto Spandam, knocking both unconscious.',
    },
  },
  'thatch': {
    325: {
      source: 'https://onepiece.fandom.com/wiki/Episode_325',
      note: 'Threshold entry and death. Episode_325 Long Summary: Blackbeard admits murdering their former crewmate, fourth division commander Thatch, to obtain the fruit he had chased for decades; the rule on Whitebeard ship is that whoever finds a Devil Fruit may eat it; he memorised the shapes and colours of many fruits and lay low in the crew to find it, then recognised it in Thatch hand. The fruit is not named here (its record opens at 462), matching the Ace story at 325.',
    },
    461: {
      source: 'https://onepiece.fandom.com/wiki/Episode_461',
      note: 'Episode_461: Ace flashback, joining the Whitebeard Pirates, promotion, and leaving after Blackbeard kills Thatch against Whitebeard wishes. Thatch page: one of the first to befriend Ace, who asks why he is not shackled on the Moby Dick (Chapter 552 p10, ep 461); anime-only scenes in 461 show them fighting back to back, Thatch giving Ace a drink at his commander banquet, and Thatch stabbed in the back. Novel and Vivre Card facts (head chef, North Blue) left out.',
    },
  },
  'hildon': {
    339: {
      source: 'https://onepiece.fandom.com/wiki/Episode_339',
      note: 'Threshold entry (Char Box first = Ch 444 / Ep 339; Episode_339 charDebut lists Hildon). Episode_339 Long Summary: "A voice behind them confirms they are in danger. It is a vampire-looking man who is hanging upside down on a tree branch. He introduces himself as Hildon. He says he saw them being chased by Cerberus and followed them secretly to protect them in case of trouble ... maybe they should ride his carriage with him back to Doctor Hogback\'s mansion. Chopper reacts with shock to hearing Doctor Hogback\'s name." Manga Ch 444 p.18-19: "I AM... HILDON." Hogback is not filed until 340, so the story says only "a famous doctor".',
    },
    340: {
      source: 'https://onepiece.fandom.com/wiki/Episode_340',
      note: 'Episode_340 Long Summary: in the carriage Chopper asks if they can really meet Dr. Hogback and Hildon tells him Hogback is in the mansion; Nami sees "a lion with a man\'s face" and "many strange creatures, but after blinking the creatures were gone"; "Hildon explains that what they saw were possibly just illusions made by the fog"; "Hildon told them to stay put inside while he talks to the carriage driver. However, after a few minutes of waiting, Usopp decides to check on Hildon ... only to see that there was no one there and that they are in the middle of a graveyard ... then zombies start to rise from the earth." The manga wine and the flight off laughing (Ch 445) are left out of the anime-dated story.',
    },
    341: {
      source: 'https://onepiece.fandom.com/wiki/Episode_341',
      note: 'Episode_341 Long Summary: "They arrive in the dining room but it is pitch black ... Suddenly, the light went on, and they saw Hildon hanging upside down. He says that Dr. Hogback and Cindry have already gone to bed, however upon seeing him, Usopp got mad for leaving them in the middle of the graveyard. Hildon apologize and try to guide them back to their rooms but the Nami and Usopp refused ... Then, they heard a voice belonging to a woman inside a portrait". Chandelier and the portrait mocking him: swim squad ep 341 recap and Ch 447 ("YOU\'VE BEEN DUMPED, HILDON"). Cindry is not filed until 342, so she is only "his maid".',
    },
    348: {
      source: 'https://onepiece.fandom.com/wiki/Episode_348',
      note: 'Episode_348 Long Summary: "Perona is angry that the Thousand Sunny doesn\'t have much treasure on board but steals some food and money. Hildon then calls for a meeting ... Hildon also reports that Brook is on the loose"; the trio "find a hiding spot with a zipper. They don\'t see they are hiding in Kumacy." IT Episodio 348: Absalom "viene raggiunto da Perona e Hildon, il quale lo avverte della presenza di Brook sull\'isola. Entrambi si preoccupano". The Oars "zombie No. 900" part of the summons is left out (Oars filed at 358).',
    },
  },
  'cerberus-thriller-bark': {
    339: {
      source: 'https://onepiece.fandom.com/wiki/Episode_339',
      note: 'Threshold entry (Char Box first = Ch 444 / Ep 339). Episode_339 Long Summary: the trio "have fallen down a very deep ditch that is located between the actual island and the sea" after bumping into the embankment in the fog; "The bottom of the ditch is full of skulls and bones"; "Suddenly a three-headed dog appear in the dark ... Chopper realize this must be Cerberus, the guard dog of hell! ... Chopper notices that one of the three heads is the head of a fox, not of a dog, which seems to anger Cerberus even more ... they find a large staircase"; "Usopp uses a Kemuri Boshi to create smoke ... they are actually hiding up in a tree. Usopp remarks that the beast does not seem to have the developed sense of smell of a normal dog." Manga Ch 444: "C-C-CER... CER-BERUS... EXISTS!!!".',
    },
    341: {
      source: 'https://onepiece.fandom.com/wiki/Episode_341',
      note: 'Episode_341 Long Summary: "On their way to the forest, they came across Cerberus, which they scared when they reacted differently than others would have. Luffy tries to tame it but all three heads bites him, making him punch them, thus, taming it." Luffy licking his lips, Sanji asking if it is tasty, petting it, carrying Luffy, Robin feeling sorry for it and Sanji wondering who would make such a monster: swim squad ep 341 recap and Ch 446 (adapted in ep 341, pp.12-19). Calm "let go" then the punch into the wall: Cerberus page (Qref c446 ep341).',
    },
  },
  'buhichuck': {
    341: {
      source: 'https://onepiece.fandom.com/wiki/Episode_341',
      note: 'Threshold entry. Candidate was 340 (Char Box first = Ch 446 / Ep 340), but there he is only seen hanging on the wall, unnamed. Named at Ch 447 p.12 ("THE LEADER OF THE ZOMBIES IN THIS ROOM IS ME, BUHICHUCK-SAMA!!"), adapted in ep 341 (447 pp.2-16); swim squad ep 341 recap: "another voice comes from a mounted pig, who throws a sword at Usopp. His name is Oinkchuck ... and said sword hits a bear rug". Episode_341 Long Summary: the portrait woman grabs Chopper, "one taxidermy zombie stating that he is the captain of the zombies there", the bear-skin rug attacks Usopp "thinking that Usopp was the one who stabbed him", Usopp throws candles and the door is locked.',
    },
    344: {
      source: 'https://onepiece.fandom.com/wiki/Episode_344',
      note: 'Episode_344 Long Summary: in the empty room of portraits "Buhichuck, the living Bear Rug and the portrait zombies begin their surprise attack"; "Luffy leads the Bear Rug zombie on a wild goose chase ending with the Straw Hat using the Gum-Gum Bazooka to knock the bear down. Buhichuck is in shock seeing his allies beaten"; "Buhichuck then tries to make an excuse that three of Luffy\'s crew are sleeping upstairs, but Franky notices Sanji had disappeared ... Robin insists on taking the mounted pig as a guide". Laughing at their nerve for knowing his master\'s name: swim squad ep 344 recap and Ch 450. "Surprise Zombies" is first said here (ep 344 transcript: "They managed to Surprise the \'Surprise Zombies\'!"; absent from the 341-343 transcripts), so the Surprise Zombies affiliation entry is dated 344. Room described as "an arena" in the ep 346 transcript (the Long Summary\'s "room full of tents" is not used).',
    },
    346: {
      source: 'https://onepiece.fandom.com/wiki/Episode_346',
      note: 'Episode_346 Long Summary: "Buhichuck then brings Luffy\'s party to a room full of tents. Then a knight dives down to hit Franky who dodges. It is a General Zombie ... Buhichuck then points out how the General Zombies can take more hits ... The wall then closes behind Buhichuck. Then, more Zombie Generals with armor appear". Zoro missing since ep 345 (IT Episodio 345: "Rufy, Robin e Franky, intanto, si accorgono che anche Zoro è sparito"). "General Zombies" is said from ep 344 (Absalom wakes them).',
    },
  },
  'kumashi': {
    345: {
      source: 'https://onepiece.fandom.com/wiki/Kumashi',
      note: 'Threshold entry. Candidate was 343 (Char Box first = Ch 449 / Ep 343): the manga names him there (Ch 449 p.10, Perona: "DON\'T TALK, KUMASHI!!"), but no source confirms the anime says the name in ep 343 (the swim squad ep 343 recap calls him only "a giant stuffed teddy bear zombie"), so the episode is rounded up to 345, where the swim squad ep 345 recap names him ("Perona and the big teddy bear zombie, Kumacy, are talking ... She gives him orders on what to do with the coffin") and the adapted Ch 451 has Perona call him by name. Kumashi page: ep 343 greeting and scolding for the deep voice; Qref c451 p.6 ep345, Perona orders the coffins to the dance hall, says she will command the treasure recovery at the Thousand Sunny, he waves and is berated. Ryuma knocking the trio out: Episode_344. The Risky Brothers are not filed and stay unnamed. Verifier: ep 343 transcript has only "Stop talking, you stuffed bear!" (no name); ep 345 transcript: "Oye, bearsy! ... The Risky Bros are bringing the coffin here" (Bearsy = Kumashi), so 345 holds. He is first called a zombie at ep 348 ("Besides I didn\'t think he was a zombie"), so status is unknown at 345 and deceased from 348.',
    },
    349: {
      source: 'https://onepiece.fandom.com/wiki/Episode_349',
      note: 'Hiding at ep 348 (Episode_348 Short Summary: the trio "hide from Absalom inside of Kumashi"; Long Summary: "they find a hiding spot with a zipper ... Absalom is scolded by Perona for coming into her chambers"; Kumashi page Qref c454 ep348: he cannot reach the zipper, Absalom interrupts him, Perona scolds him). Filed at 349 for the second attempt: Episode_349 Long Summary "Kumashi approaches to try and tell them about them being hidden inside his body but Perona shushes him again ... Nami, Usopp and Chopper, still hidden inside Kumashi, watch in horror ... Moria pulls out a gigantic pair of scissors and cuts the shadow from Luffy\'s body." The trio falling out when Oars roars (ep 351) is left out: Oars is filed at 358.',
    },
    360: {
      source: 'https://onepiece.fandom.com/wiki/Episode_360',
      note: 'Episode_359 Long Summary: "Usopp continues chasing Perona with Kumashi behind him. The bear zombie tries to smash himself into the sniper ... he uses a Flame Ball to light Kumashi on fire, then spills some oil to make a fiery trail." Episode_360 Long Summary: "The Mini Hollows close in and seem to blow Usopp to pieces. Kumashi searches for Usopp in a blind rage ... Kumashi gives more hits. Defeat seems certain until Usopp becomes Sogeking and shoots salt into Kumashi\'s mouth, finally purifying him." Stone torn up by his blows: Kumashi page (Qref c464 ep359).',
    },
  },
  'john': {
    345: {
      source: 'https://onepiece.fandom.com/wiki/Episode_345',
      note: 'Threshold entry. Episode_345 infobox: adapts Chapter 451 p.2-19. Chapter_451 Long Summary: "Absalom orders his General Zombies to hunt down the Straw Hat Pirates as they exit the sanctuary that was their resting place. One of the General Zombies known as Captain John slowly passes through the doors as he hiccups on his bottle of liquor. Absalom reminds him that his infamous, life-time reputation is currently weeping, and laments on how hopeless he is as John finally makes it out of the door." Episode_344 (Chapter 450) ends with Absalom waking the General Zombies "out of their coffins and out of the ground", John not yet named, so the threshold is 345, not the 344 debut. Two swords in his belly: John page, Appearance (zombie). Episode_350 Long Summary also calls him "Captain John".',
    },
    424: {
      source: 'https://onepiece.fandom.com/wiki/Episode_424',
      note: 'Episode_424 (adapts Chapter 527 p.2-19) Long Summary: "As Buggy formulates a plan, he spots the armband that Nami gave Luffy and tries to pry"; "In a flashback, Buggy had walked through a cave supposedly containing Captain John\'s treasure ... As Buggy\'s crew searched for the treasure, he was spotted by a group of marines at a navy base. They threw him in Impel Down"; "Buggy takes the band thanking Luffy"; "Buggy flees with the armband thinking he\'ll finally get the treasure he\'s aimed for. Then, a Blugoris aims an axe, sending Buggy\'s main body down the hole". Chapter_527: "Buggy blurts out that Luffy\'s armband is Captain John\'s and it will lead to his treasure"; the deal is help reaching Ace in return for the armband. Armband taken from the Thriller Bark treasure with Nami\'s leave: Episode_378 / Chapter_486 p.5.',
    },
  },
  'spoil': {
    375: {
      source: 'https://onepiece.fandom.com/wiki/Episode_375',
      note: 'Threshold entry (naming). Episode_375 Long Summary: "The old man with the lantern arrives and reveals he is just an elderly injured man and thanks the crew for finally defeating Moria. Lola recognizes him as Spoil, the chairman of the Thriller Bark Victim\'s Association and also congratulates the Straw Hat Pirates on their victory and also wants a husband so badly but is turned down." At his debut (Episode_343) he is only "the old zombie"; the manga never names him (Chapter_448, 449 and 483 all say "the old man"; the Spoil page cites no chapter for the name and was created in December 2007 as "Old Man Spoil", months after Chapter 448). Chapter threshold 483 = the chapter Episode 375 adapts (Chapter_483: the old man, Lola and the Rolling Pirates thank the crew). Ep 375 transcript: "Aren\'t you the old man we met at the graveyard?" / "Hey! Grandpa Spoil!" / "Honorary President of the Victim Association!" / "No one in Thriller Bark\'s Victim Association ... will ever forget the debt we owe you!" (hence graveyard and honorary president).',
    },
  },
  'gyoro-nin-and-bao': {
    350: {
      source: 'https://onepiece.fandom.com/wiki/Episode_350',
      note: 'Threshold entry (naming), moved from 378 by the verifier. Ep 350 transcript (forever dreaming t=77002): after Luffy\'s shadow is cut, Moria calls "Gyoro! Nin! Bao!" / "Yes, Master!" / "Open the door to the special freezer!" (again in ep 352: "Gyoro, Nin, Bao! Run over to Hogback\'s mansion and get the food!"). Nin alone is named at ep 343 ("Nin, hit it!"); Gyoro and Bao are not named in the 343-349 transcripts. The ep 378 anime line drops their names ("Tyrant Kuma came to tell us ..."), so 378 cannot be the naming episode. Episode_350 Long Summary: "In the freezer, Oars lays while Gyoro, Nin, and Bao head to get him." Ep 343 transcript: they wake Moria for the night attack after four days asleep, four days of food prepared, the prey are the Straw Hats who took out Enies Lobby; wiki (Qref chap=449 ep=343): Nin pops Moria\'s snot bubble with an arrow. Hogback: "I put all of my prowess into creating No. 900 for a day such as this" (ep 350). Oars is not named (filed at 358). Chapter threshold stays 486 (named in dialogue, Absalom/Hogback on the ship); Ch 456 p.18 shows "GYORO! NIN! BAO!!" but a transcript lists it as SFX, so 486 is the safe page.',
    },
    369: {
      source: 'https://onepiece.fandom.com/wiki/Episode_369',
      note: 'Episode_369 Long Summary: "Three zombies run into Moria\'s castle to tell him of the shaking, and they arrive just as ... Moria is meeting with Bartholomew Kuma"; Gyoro, Nin, and Bao page Qref chap=474 ep=369. Ep 369 transcript: "Moria-sama, something horrible has happened! After all this time, Thriller Bark has left the foggy waters! All because of Oars!"; Moria: "zip your lips, because I am entertaining the most unusual of guests ... Tyrant Kuma, the only Warlord who does the Government\'s bidding"; Kuma: "It has been decided who will fill the empty Warlord seat created by Crocodile\'s dismissal ... Marshall D. Teach. The man also goes by Blackbeard"; original bounty "Zero".',
    },
  },
  'jigoro': {
    346: {
      source: 'https://onepiece.fandom.com/wiki/Episode_346',
      note: 'Threshold entry (Char Box first = Ch 452 / Ep 346). Episode_346 Long Summary: Buhichuck lures Luffy, Franky and Robin into a room of armoured General Zombies; "a warrior uses the 36 Caliber Phoenix to cut through several zombies. First, Luffy thinks it is Zoro, but it is actually a warrior using sabers with scars all over his body, Jigoro. This warrior declares Luffy his enemy and desires to kill the captain"; "Luffy is also trapped in a casket and ferried to another part of the castle." Ep 346 transcript: "It is a shame for a warrior to have a scar on his back, but I am full of scars!" / "So you are Zoro, right?" / "My name is Jigoroh!". Chapter_452: the warrior introduces himself as Jigoro; the slight distraction lets the General Zombies capture Luffy. General Zombies said by Buhichuck in the same episode.',
    },
    363: {
      source: 'https://onepiece.fandom.com/wiki/Episode_363',
      note: 'Episode_356 Long Summary: "Inuppe and Jigoro then come in under the doctor\'s orders" (ep 356 transcript: Chopper and Robin work out that the penguin carries Sanji\'s shadow and the other one Zoro\'s). Episode_363 Long Summary: Hogback laughs that the zombies have lost the personalities of their shadows; Cindry "is almost fed some salt. Inuppe stops them with a kick and Jigoro launches a 108 Caliber Phoenix"; "Inuppe and Jigoro begin to argue using part of Sanji and Zoro\'s personalities"; Robin gets Hogback to order the two to jump out of the tower and they fall. Transcript: "Dogguin! Jigoro! Help Cindry out! Take out the pests!", "Even without their memories, those two are still like water and oil", "Jump! I want you to jump out the window together!". The penguin zombie (Inuppe, not filed) is left unnamed.',
    },
    373: {
      source: 'https://onepiece.fandom.com/wiki/Episode_373',
      note: 'Episode_373 Long Summary: Oars lies broken; "Moria gets up and Lola demands the shadows be returned to their rightful owners. However, he refuses"; "Using Shadows Asgard, he overloads himself with about a thousand shadows ... In the process, Cindry, warthog Lola, Hildon, Jigoro, Inuppe drop lifeless and the others shadows are consumed." Jigoro page: Chapter 481 p.12 / Ep 373, Moria removes Zoro\'s shadow from Jigoro. The technique name is left out.',
    },
  },
  'tararan': {
    349: {
      source: 'https://onepiece.fandom.com/wiki/Episode_349',
      note: 'Threshold entry, moved from the candidate 346. Ep 346-348 transcripts never say his name: he introduces himself only as "the rumored Spider Monkey" (346, 347), and Episode_346 Long Summary has just "A spider-monkey-like zombie then appears blocking the way". First on-screen naming is Ep 349, where the Spider Mice cry "Captain Tararan!" as his shadow leaves; Ep 350 repeats it ("Captain Tararan, the spider monkey, was just defeated!"). Episode_347: Tararan reveals he used a web to restrain the Thousand Sunny, Perona\'s ghost network; the bridge is crippled. Episode_348: Sticky Spider Net, Robin slaps his eye, Franky\'s heavy nunchaku, the Spider Mice (about 500) trap Robin and Franky, Brook cuts through him. Episode_349: "a black substance flies out of his mouth towards the sky ... Tararan collapses"; Brook calls it purification; the web melts in fire.',
    },
  },
  'risky-brothers': {
    370: {
      source: 'https://onepiece.fandom.com/wiki/Episode_370',
      note: 'Threshold entry, moved from the candidate 369. In Ep 369 they are only "strange people ... searching for Luffy"; the line "We are the Risky Brothers!" there is in the next-episode preview, which does not count. Ep 370 transcript: "We are the Risky Brothers, members of the Rolling Pirates led by Captain Marriage Proposal Lola." Episode_370 Long Summary: "The pirates that made contact with Luffy are the Risky Brothers, members of the Rolling Pirates"; Lola proposes and is rejected; three years without shadows; "Lola then orders the Risky Brothers to bring in some shadows"; ten-minute power-up, 20 minutes before daylight. Transcript also: the Victim Association that wanders these forests, Moria inside the belly of the Special Zombie, shadows caught by feeding salt to zombies. Chapter_475: the Risky Brothers identify themselves under Captain Lola.',
    },
    378: {
      source: 'https://onepiece.fandom.com/wiki/Episode_378',
      note: 'Episode_378 Long Summary: "two men say they saw what happened to Zoro after everyone else, including Sanji, was knocked out. Sanji drags them out and asks what happened. After being told about Zoro risking his life and taking in all of Luffy\'s pain ... he makes them swear not to tell anyone, especially Luffy". Ep 378 transcript: Kuma "pressed his paw against Straw Hat. It repelled all of the damage"; "Even the swordsman started screaming ... when he touched a small portion of it"; "Let\'s tell everyone about the Straw Hats\' heroic story" / "He didn\'t risk his life out of a desire to earn our gratitude" / "What would happen if they learned that Luffy\'s pain hurt a friend?! Especially Luffy!". Risky Brothers page: they told Sanji after the crisis (Ch 485-486 / Ep 378).',
    },
  },
}
