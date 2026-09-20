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
    45: {
      source: 'https://onepiece.fandom.com/wiki/Episode_45',
      note: 'News Coo, 30,000,000 as the highest bounty in the East Blue, Loguetown named as Roger’s birthplace and execution ground.',
    },
    126: {
      source: 'https://onepiece.fandom.com/wiki/Episode_126',
      note: 'Crocodile through the ceiling, Vivi sees him fall, first rain in three years. Second pass: the second defeat was at the palace (eps 121–122), not beneath it, and the water barrel was pierced in that fight — both corrected.',
    },
    278: {
      source: 'https://onepiece.fandom.com/wiki/Episode_278',
      note: 'Spandam points at the flag, the flag burns, Robin says she wants to live, the crew moves on the tower.',
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
    1071: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1071',
      note: 'The Five Elders name the fruit, Kaido dragged onto the roof, the ground bounces the fireball — all within 1071.',
    },
  },
  'roronoa-zoro': {
    2: {
      source: 'https://onepiece.fandom.com/wiki/Episode_2',
      note: 'Threshold entry. Rika’s rice balls, the one-month deal, Helmeppo’s betrayal, Luffy heads for the swords.',
    },
    19: {
      source: 'https://onepiece.fandom.com/wiki/Episode_19',
      note: 'Zoro dreams of Kuina; the promise is told in this episode.',
    },
    24: {
      source: 'https://onepiece.fandom.com/wiki/Episode_24',
      note: 'Kogatana, the chest wound, the vow never to lose again, Mihawk’s challenge.',
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
    1062: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1062',
      note: 'King’s ability worked out, King of Hell Three Sword Style, King defeated.',
    },
  },
  'nami': {
    5: {
      source: 'https://onepiece.fandom.com/wiki/Episode_5',
      note: 'Threshold entry. Second pass: the first sentence was rewritten to the sourced version — the map stolen from a pirate, the empty chest, three men talked out of their boat (Nami/History, ep 4).',
    },
    44: {
      source: 'https://onepiece.fandom.com/wiki/Episode_44',
      note: 'Filed late on purpose: Nezumi and the request for help are episode 37; nothing in the story needs 38–44.',
    },
    45: {
      source: 'https://onepiece.fandom.com/wiki/Episode_45',
      note: 'Celebration and Nami’s permanent boarding (ep 44), the first poster (ep 45).',
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
    236: {
      source: 'https://onepiece.fandom.com/wiki/Episode_236',
      note: 'The duel, the loss, Luffy leaves him the ship.',
    },
    323: {
      source: 'https://onepiece.fandom.com/wiki/Episode_323',
      note: 'Zoro’s condition in flashback, Garp’s meteor, the apology, Luffy pulls him aboard.',
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
  },
  'sanji': {
    20: {
      source: 'https://onepiece.fandom.com/wiki/Episode_20',
      note: 'Threshold entry. Fullbody beaten, Luffy the chore boy. Second pass: the closing line presumed the recruitment (ep 21) and was softened.',
    },
    30: {
      source: 'https://onepiece.fandom.com/wiki/Episode_30',
      note: 'The soup, the prostration before Zeff, All Blue.',
    },
    298: {
      source: 'https://onepiece.fandom.com/wiki/Episode_298',
      note: 'Jabra’s “sister” story seen through, Diable Jambe, the key taken.',
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
    795: {
      source: 'https://onepiece.fandom.com/wiki/Episode_795',
      note: 'Filed late: the challenge and the childhood flashback are episode 793.',
    },
    825: {
      source: 'https://onepiece.fandom.com/wiki/Episode_825',
      note: 'The bento, the punch, “I want to go back”, Luffy decides to crash the wedding.',
    },
    1061: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1061',
      note: 'Copied Vinsmoke weapons, Ifrit Jambe, Queen sent off Onigashima, Sanji collapses.',
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
    95: {
      source: 'https://onepiece.fandom.com/wiki/Episode_95',
      note: 'Filed late: the flag (87), “shut up and come” (89), the knives (90), the sakura (91). The dossier files the crew at 91.',
    },
    293: {
      source: 'https://onepiece.fandom.com/wiki/Episode_293',
      note: 'Third Rumble Ball (eaten ep 290), Kumadori thrown to the courthouse.',
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
    1023: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1023',
      note: 'Chopperphage cannon, the Pleasures cured, Monster Point on Queen, “not a raccoon”.',
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
    322: {
      source: 'https://onepiece.fandom.com/wiki/Episode_322',
      note: 'The chase (ep 321), Robin and Iceburg persuade him (ep 322). Dossier: Straw Hats at 322.',
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
  },
  'brook': {
    339: {
      source: 'https://onepiece.fandom.com/wiki/Episode_339',
      note: 'Threshold entry, told from the first sighting (eps 337–338). Second pass: no piano on the ghost ship — he sings softly over tea; title and body corrected.',
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
    827: {
      source: 'https://onepiece.fandom.com/wiki/Episode_827',
      note: 'Second pass: moved from 869. Big Mom overpowers him and keeps him as a pet (eps 818–820); he pulls the rubbings out of his skull in 827.',
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
    981: {
      source: 'https://onepiece.fandom.com/wiki/Episode_981',
      note: 'Second pass: moved from 977. Jinbe surfaces and smashes the ship (ep 980), takes the helm (ep 981). The dossier affiliation moved 977 → 980 with it.',
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
      note: 'Long summary: “he throws Kizaru far into the sky” — matches “thrown out” of the Labophase fight.',
    },
    1141: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1141',
      note: 'Long summary: “Sanji protects him, deflecting Kizaru’s light beam with his leg” — exact match.',
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
      note: 'Corrected from the candidate’s 1116, which is only the start of the Momoiro Island meeting: the Imu/First-Twenty theory is Qref’d to chapter 1086 / episode 1120, confirmed by that episode’s own short summary.',
    },
  },
  'shanks': {
    4: {
      source: 'https://onepiece.fandom.com/wiki/Episode_4',
      note: 'Threshold entry. The whole Foosha flashback, Higuma, the Sea King, the arm, the hat.',
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
  },
  'portgas-d-ace': {
    95: {
      source: 'https://onepiece.fandom.com/wiki/Episode_95',
      note: 'Threshold entry. Second pass: Nanohana (a port, not the desert), the ships (plural), and “Blackbeard” — the name Teach is first heard in 151.',
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
}
