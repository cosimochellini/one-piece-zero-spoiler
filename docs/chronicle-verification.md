# Chronicle verification

Every story in a character's chronicle (`chronicle` in the dossiers, filed in
`src/data/records/<saga>.chronicle.ts`) was checked against the One Piece Wiki
(onepiece.fandom.com) twice: once as it was written, on 2026-09-15, and once
more by an independent pass on 2026-09-19 that re-read every episode against the
character's `/History` page (which cites each event as `{{Qref|…|ep=N}}`) and
the episode page named in the table, whose summary settles whether the event is
complete by the end of that episode. Where the second pass disagreed with the
first, the story was moved or rewritten; the note says what changed.

The rule is the one the `status` field already follows: **the episode filed is
the first one at whose end the viewer knows everything the story says**, with or
without a line saying it. Where a scene and its confirmation fall in different
episodes, the later one is filed. A too-early episode shows a story to a reader
who has not reached it, which is the one thing the site exists to prevent; a
too-late one only keeps it covered a little longer, and a few are filed late on
purpose, as the notes say.

Two further rules hold for every story, and the data tests
(`src/data/characters.test.ts`, "the chronicles") enforce what can be enforced:

- the first story sits at the character's own `revealedAtEpisode`, so the band
  never appears because something has happened;
- a story names only characters filed no later than its own episode, linked with
  a `[[id]]` marker or in plain words.

Later batches append their tables below.

## Monkey D. Luffy (`monkey-d-luffy`, threshold ep 1)

| Entry (en title)            | Episode | Fandom page that settles it                   | Note                                                                                                                                                                                                                           |
| --------------------------- | ------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| A boy in a barrel           |       1 | https://onepiece.fandom.com/wiki/Episode_1    | Threshold entry. Barrel, Koby, Alvida and the Pirate King line are all in episode 1.                                                                                                                                           |
| Thirty million berries      |      45 | https://onepiece.fandom.com/wiki/Episode_45   | News Coo, 30,000,000 as the highest bounty in the East Blue, Loguetown named as Roger’s birthplace and execution ground.                                                                                                       |
| Rain over Alubarna          |     126 | https://onepiece.fandom.com/wiki/Episode_126  | Crocodile through the ceiling, Vivi sees him fall, first rain in three years. Second pass: the second defeat was at the palace (eps 121–122), not beneath it, and the water barrel was pierced in that fight — both corrected. |
| War on the World Government |     278 | https://onepiece.fandom.com/wiki/Episode_278  | Spandam points at the flag, the flag burns, Robin says she wants to live, the crew moves on the tower.                                                                                                                         |
| Ace dies in his arms        |     483 | https://onepiece.fandom.com/wiki/Episode_483  | Ace’s last words and death; Jinbe blocks Akainu. Second pass: the breakdown is episode 484, so the closing clause was dropped and the story ends at the scream.                                                                |
| Two years, not three days   |     516 | https://onepiece.fandom.com/wiki/Episode_516  | Ox Bell and flowers (ep 511), Rusukaina and the hat on the rock (ep 516). “Two weeks later” per the Post-War Arc page.                                                                                                         |
| A heartbeat on the roof     |    1071 | https://onepiece.fandom.com/wiki/Episode_1071 | The Five Elders name the fruit, Kaido dragged onto the roof, the ground bounces the fireball — all within 1071.                                                                                                                |

## Roronoa Zoro (`roronoa-zoro`, threshold ep 2)

| Entry (en title)           | Episode | Fandom page that settles it                   | Note                                                                                                     |
| -------------------------- | ------: | --------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Tied to a post             |       2 | https://onepiece.fandom.com/wiki/Episode_2    | Threshold entry. Rika’s rice balls, the one-month deal, Helmeppo’s betrayal, Luffy heads for the swords. |
| A promise to Kuina         |      19 | https://onepiece.fandom.com/wiki/Episode_19   | Zoro dreams of Kuina; the promise is told in this episode.                                               |
| Defeat at the Baratie      |      24 | https://onepiece.fandom.com/wiki/Episode_24   | Kogatana, the chest wound, the vow never to lose again, Mihawk’s challenge.                              |
| Nothing happened           |     377 | https://onepiece.fandom.com/wiki/Episode_377  | The long summary of 377 ends with Sanji finding Zoro: “nothing happened”.                                |
| On his knees before Mihawk |     515 | https://onepiece.fandom.com/wiki/Episode_515  | Zoro begs Mihawk, beats the humandrills, Mihawk agrees; Luffy’s message explained to Perona.             |
| King of Hell               |    1062 | https://onepiece.fandom.com/wiki/Episode_1062 | King’s ability worked out, King of Hell Three Sword Style, King defeated.                                |

## Nami (`nami`, threshold ep 5)

| Entry (en title)            | Episode | Fandom page that settles it                  | Note                                                                                                                                                                                            |
| --------------------------- | ------: | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The thief looking for a map |       5 | https://onepiece.fandom.com/wiki/Episode_5   | Threshold entry. Second pass: the first sentence was rewritten to the sourced version — the map stolen from a pirate, the empty chest, three men talked out of their boat (Nami/History, ep 4). |
| Help me                     |      44 | https://onepiece.fandom.com/wiki/Episode_44  | Filed late on purpose: Nezumi and the request for help are episode 37; nothing in the story needs 38–44.                                                                                        |
| Navigator of the Straw Hats |      45 | https://onepiece.fandom.com/wiki/Episode_45  | Celebration and Nami’s permanent boarding (ep 44), the first poster (ep 45).                                                                                                                    |
| Weather as a weapon         |     517 | https://onepiece.fandom.com/wiki/Episode_517 | Reads the message (ep 512), asks Haredas to teach her (ep 514); 517 shows the weapon in use, so it is safe.                                                                                     |

## Usopp (`usopp`, threshold ep 9)

| Entry (en title)               | Episode | Fandom page that settles it                  | Note                                                                                     |
| ------------------------------ | ------: | -------------------------------------------- | ---------------------------------------------------------------------------------------- |
| The village liar               |       9 | https://onepiece.fandom.com/wiki/Episode_9   | Threshold entry. Morning lie, Yasopp, Kaya, Klahadore bars him.                          |
| A flag on the sail             |      18 | https://onepiece.fandom.com/wiki/Episode_18  | Jango beaten and the Going Merry given (ep 17); Usopp paints the flag on the sail in 18. |
| A duel for the Merry           |     236 | https://onepiece.fandom.com/wiki/Episode_236 | The duel, the loss, Luffy leaves him the ship.                                           |
| Sorry, take me back            |     323 | https://onepiece.fandom.com/wiki/Episode_323 | Zoro’s condition in flashback, Garp’s meteor, the apology, Luffy pulls him aboard.       |
| Stronger, for Luffy            |     515 | https://onepiece.fandom.com/wiki/Episode_515 | Reads the news at Boin (ep 512), runs with Heracles and the Pop Greens (ep 515).         |
| The toys turn human again      |     677 | https://onepiece.fandom.com/wiki/Episode_677 | Sugar faints (ep 676); the island-wide reversal of the toys completes in 677.            |
| God Usopp, two hundred million |     746 | https://onepiece.fandom.com/wiki/Episode_746 | Bartolomeo’s ship and the new posters, Sanji “only alive”.                               |

## Sanji (`sanji`, threshold ep 20)

| Entry (en title)               | Episode | Fandom page that settles it                   | Note                                                                                                                                    |
| ------------------------------ | ------: | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| The Baratie’s sous-chef        |      20 | https://onepiece.fandom.com/wiki/Episode_20   | Threshold entry. Fullbody beaten, Luffy the chore boy. Second pass: the closing line presumed the recruitment (ep 21) and was softened. |
| Thanks for everything, old man |      30 | https://onepiece.fandom.com/wiki/Episode_30   | The soup, the prostration before Zeff, All Blue.                                                                                        |
| A leg on fire                  |     298 | https://onepiece.fandom.com/wiki/Episode_298  | Jabra’s “sister” story seen through, Diable Jambe, the key taken.                                                                       |
| Ninety-nine recipes            |     514 | https://onepiece.fandom.com/wiki/Episode_514  | Reads the news at Kamabakka (ep 512), the 99 recipes deal (ep 514).                                                                     |
| The name he never spoke        |     795 | https://onepiece.fandom.com/wiki/Episode_795  | Filed late: the challenge and the childhood flashback are episode 793.                                                                  |
| I want to go back              |     825 | https://onepiece.fandom.com/wiki/Episode_825  | The bento, the punch, “I want to go back”, Luffy decides to crash the wedding.                                                          |
| Blue flames                    |    1061 | https://onepiece.fandom.com/wiki/Episode_1061 | Copied Vinsmoke weapons, Ifrit Jambe, Queen sent off Onigashima, Sanji collapses.                                                       |

## Tony Tony Chopper (`tony-tony-chopper`, threshold ep 83)

| Entry (en title)                   | Episode | Fandom page that settles it                   | Note                                                                                                                                             |
| ---------------------------------- | ------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| A reindeer at the castle door      |      83 | https://onepiece.fandom.com/wiki/Episode_83   | Threshold entry. Second pass: Nami’s thanks are episode 84, so the sentence was replaced by the reindeer dragging the travellers inside (ep 83). |
| Hiluluk’s flag                     |      86 | https://onepiece.fandom.com/wiki/Episode_86   | Kureha tells the Amiudake story; Hiluluk answers Wapol’s trap.                                                                                   |
| Cherry blossoms in the snow        |      95 | https://onepiece.fandom.com/wiki/Episode_95   | Filed late: the flag (87), “shut up and come” (89), the knives (90), the sakura (91). The dossier files the crew at 91.                          |
| The third Rumble Ball              |     293 | https://onepiece.fandom.com/wiki/Episode_293  | Third Rumble Ball (eaten ep 290), Kumadori thrown to the courthouse.                                                                             |
| The message on the island of birds |     512 | https://onepiece.fandom.com/wiki/Episode_512  | Chopper on a Torino bird understands the message; “three weeks since the war”.                                                                   |
| A cure for the ice demons          |    1023 | https://onepiece.fandom.com/wiki/Episode_1023 | Chopperphage cannon, the Pleasures cured, Monster Point on Queen, “not a raccoon”.                                                               |

## Nico Robin (`nico-robin`, threshold ep 130)

| Entry (en title)       | Episode | Fandom page that settles it                  | Note                                                                                                                                                                                                 |
| ---------------------- | ------: | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Miss All Sunday        |     130 | https://onepiece.fandom.com/wiki/Episode_130 | Threshold entry, told from the Whiskey Peak meeting (ep 67). Second pass: she only says she has heard of Luffy, and the Eternal Pose leads to a deserted island that Luffy crushes — both corrected. |
| An uninvited crewmate  |     131 | https://onepiece.fandom.com/wiki/Episode_131 | Second pass: the reason for boarding was inverted — Luffy saved her when she wanted to die, so he must take responsibility (ep 130); “archaeologist” replaces “reads the ancient stones”.            |
| I want to live         |     278 | https://onepiece.fandom.com/wiki/Episode_278 | The whole exchange on the courthouse roof.                                                                                                                                                           |
| A revolutionary bounty |     746 | https://onepiece.fandom.com/wiki/Episode_746 | The Dressrosa posters; the dossier files 130,000,000 at 746.                                                                                                                                         |

## Franky (`franky`, threshold ep 235)

| Entry (en title)                 | Episode | Fandom page that settles it                   | Note                                                                                                                                                       |
| -------------------------------- | ------: | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The boss under the bridge        |     235 | https://onepiece.fandom.com/wiki/Episode_235  | Threshold entry. Franky leaves Usopp to the family and “goes shopping” (ep 234); Usopp leaves and challenges Luffy (ep 235).                               |
| The train that takes Tom         |     250 | https://onepiece.fandom.com/wiki/Episode_250  | Tom’s punch, the confession, the rifle in Spandam’s face, the train. “Eight years” = four rebuilding, four as the Franky Family.                           |
| The blueprints burn              |     284 | https://onepiece.fandom.com/wiki/Episode_284  | Pluton blueprints burned before Spandam; Kokoro’s Rocketman arrives.                                                                                       |
| A shipwright in swim briefs      |     322 | https://onepiece.fandom.com/wiki/Episode_322  | The chase (ep 321), Robin and Iceburg persuade him (ep 322). Dossier: Straw Hats at 322.                                                                   |
| The burning beast of Baldimore   |     514 | https://onepiece.fandom.com/wiki/Episode_514  | Baldimore; the skull button is on Franky/History (ep 508).                                                                                                 |
| The general against the dinosaur |    1042 | https://onepiece.fandom.com/wiki/Episode_1042 | General Cannon, then Radical Beam to the belly. Second pass: the horn-grab throw was into the wall, and the torn thruster was unattested — both corrected. |

## Brook (`brook`, threshold ep 339)

| Entry (en title)             | Episode | Fandom page that settles it                  | Note                                                                                                                                                                                                                                                                                                            |
| ---------------------------- | ------: | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The skeleton with the teacup |     339 | https://onepiece.fandom.com/wiki/Episode_339 | Threshold entry, told from the first sighting (eps 337–338). Second pass: no piano on the ghost ship — he sings softly over tea; title and body corrected.                                                                                                                                                      |
| The song for Laboon          |     381 | https://onepiece.fandom.com/wiki/Episode_381 | The Rumbar Pirates, Laboon, Binks’ Sake, he boards (eps 380–381).                                                                                                                                                                                                                                               |
| A song from the cage         |     517 | https://onepiece.fandom.com/wiki/Episode_517 | Second pass: rewritten to Brook/History — the Namakura cult took him for their demon and he helped them; the Longarm Tribe caged him as a sideshow in Tehna Gehna, where he reads the paper (ep 512) and sings from the cage (ep 515). The Soul King name is not on screen yet, so the title no longer uses it. |
| A copy in his skull          |     827 | https://onepiece.fandom.com/wiki/Episode_827 | Second pass: moved from 869. Big Mom overpowers him and keeps him as a pet (eps 818–820); he pulls the rubbings out of his skull in 827.                                                                                                                                                                        |

## Jinbe (`jinbe`, threshold ep 430)

| Entry (en title)             | Episode | Fandom page that settles it                  | Note                                                                                                                                                                                         |
| ---------------------------- | ------: | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The Knight of the Sea’s cell |     430 | https://onepiece.fandom.com/wiki/Episode_430 | Threshold entry. Second pass: Luffy only reaches Level 6 in 442–443, so the story now tells only what 430 shows — the cell, the refusal to fight Whitebeard, the offer to give up the title. |
| Staying beside Luffy         |     505 | https://onepiece.fandom.com/wiki/Episode_505 | Second pass: moved from 489. The Akainu blow while carrying Luffy (ep 487) comes first; the “you still have your crew” reminder is Amazon Lily (ep 505).                                     |
| An appointment at the island |     516 | https://onepiece.fandom.com/wiki/Episode_516 | Rayleigh takes over, the promise to meet at Fish-Man Island.                                                                                                                                 |
| The helmsman reaches Wano    |     981 | https://onepiece.fandom.com/wiki/Episode_981 | Second pass: moved from 977. Jinbe surfaces and smashes the ship (ep 980), takes the helm (ep 981). The dossier affiliation moved 977 → 980 with it.                                         |

## Shanks (`shanks`, threshold ep 4)

| Entry (en title)       | Episode | Fandom page that settles it                   | Note                                                                                                            |
| ---------------------- | ------: | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| A hat and a promise    |       4 | https://onepiece.fandom.com/wiki/Episode_4    | Threshold entry. The whole Foosha flashback, Higuma, the Sea King, the arm, the hat.                            |
| Two Emperors, one sky  |     316 | https://onepiece.fandom.com/wiki/Episode_316  | Whitebeard recalls Loguetown and Buggy, Teach’s scar, the request about Ace refused, the sky splits.            |
| I came to end this war |     489 | https://onepiece.fandom.com/wiki/Episode_489  | Koby’s cry and Akainu’s fist stopped (ep 488); hat to Buggy, Teach declines, the burial, the war ends (ep 489). |
| A wave from offshore   |    1082 | https://onepiece.fandom.com/wiki/Episode_1082 | The stolen fruit recalled (ep 1081); Momonosuke’s flame, Ryokugyu retreats, the ship departs (ep 1082).         |

## Portgas D. Ace (`portgas-d-ace`, threshold ep 95)

| Entry (en title)        | Episode | Fandom page that settles it                  | Note                                                                                                                                                                                                                                                                                                                                    |
| ----------------------- | ------: | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The older brother       |      95 | https://onepiece.fandom.com/wiki/Episode_95  | Threshold entry. Second pass: Nanohana (a port, not the desert), the ships (plural), and “Blackbeard” — the name Teach is first heard in 151.                                                                                                                                                                                           |
| The card burns          |     416 | https://onepiece.fandom.com/wiki/Episode_416 | Second pass: moved from 325, whose outcome is left unrevealed on screen. The defeat is shown in 378, the execution announced in 395, and Luffy learns and chooses the prison in 416. A vivre card burns and shrinks; it does not point. The prison and the execution ground are not named: the archive files those arcs at 422 and 457. |
| Out of the shackles     |     482 | https://onepiece.fandom.com/wiki/Episode_482 | Galdino’s wax key and Ace freed (ep 480). Second pass: “picks up his necklace” was unattested and removed.                                                                                                                                                                                                                              |
| Thank you for loving me |     483 | https://onepiece.fandom.com/wiki/Episode_483 | The insult (ep 482), the last words and the card burning out (ep 483). Dossier: deceased at 483.                                                                                                                                                                                                                                        |
