# CORE GAMEPLAY RESEARCH V2 — QUESTIONS, COUNTERARGUMENTS & EXPERIMENTS
Date: 2026-10-11
State: **RESEARCH PROPOSAL ONLY — NOT LOCKED**, no changes to GAMEPLAY_SPEC/HERO_BALANCE/MAP/manifest, no asset render authorizations.

## Research basis
- Stunlock / Peter Ilves interviewed by GameDeveloper (2016), "Game Design Deep Dive: Turning Bloodline Champions into Battlerite": fluid WASD attacks, iterating core, server/netcode and market-entry problems; https://www.gamedeveloper.com/business/game-design-deep-dive-turning-i-bloodline-champions-i-into-i-battlerite-i-
- Supercell official Brawl Stars Game Modes: Gem Grab (carried gem loss) / Hot Zone / Heist all reward meaningful goals outside KO; https://support.supercell.com/brawl-stars/en/articles/game-modes-13.html
- Odyssey Interactive / Unreal Engine developer interview: Omega Strikers deliberately links combat knockback to the primary moving puck mechanic; https://www.unrealengine.com/developer-interviews/odyssey-interactive-a-new-studio-composed-of-former-riot-games-devs-talks-about-creating-multiplatform-game-omega-strikers
- Riot Arena dev / support: destructible terrain, healing/CD plants, issues with repetitive builds and non-interactive strategies; https://www.leagueoflegends.com/en-us/news/dev/dev-arena-round-three/ and https://support.riotgames.com/en-us/league-of-legends/gameplay/league-of-legends-arena-game-mode
- Riot counterplay design principles: meaningful strategic and tactical responses; https://www.leagueoflegends.com/en-gb/news/dev/quick-gameplay-thoughts-may-14/
- Reddit retrospective player discussions (anecdotal, not statistical proof): high intensity/skill floor, queue/fight/repeat, weak long-term strategic variation, uneven newcomer retention; https://www.reddit.com/r/BattleRite/comments/1u9mbsj/what_do_games_like_battlerite_need_to_survive/

## Radical diagnosis
Old loop = approach → Q/E → trade damage → disengage until cooldown → repeat → KO. It is competent action design, not yet strong match-level design.
MOBA depth does **NOT** necessarily come from many items/lanes/hero buttons. It comes from exchanging short-lived combat success for durable map control, timely objective advantage or forced opponent decisions. Players need something meaningful to do (or sacrifice) *when they are not dealing damage*.

## Critical self-questioning audit
| Question | Honest answer | Design consequence |
|---|---|---|
| Q1 Why fight? | Current fight primarily burns HP; two static areas too weak as meaningful prize. | Every won skirmish should allow a visible, temporary or persistent **objective consequence**. |
| Q2 What changes after a KO? | 7s 3v3 numbers advantage, but static point scores only 1/s and may stalemate. | Measure how much meaningful advancement one KO secures, without ensuring certain victory. |
| Q3 Why not just run with HP lead? | Duel timeout by percent HP explicitly incentivizes stall; self-heal complicates. | Anti-stall or time pressure in 1v1, measured rather than assumed. |
| Q4 Can two players ignore each other and win? | Yes, in existing two independent point-scoring zones mirrored 3v3. | Confrontation or rotation incentive must be unavoidable, not a hard scripted attack. |
| Q5 Does position matter beyond projectile LOS? | Yes through wall and bush, but not yet enough beyond a single brawl. | Design at least two routes with readable cover + flanking counterplay. |
| Q6 Is ranged permanently better than melee? | Guardian slow vs Ranger backstep suggests possible kite stalemate. | Terrain route and skill window must produce an approach opportunity. |
| Q7 Is team synergy only a damage multiplier? | Currently heal/speed/wall support, but little use outside skirmishes. | Support/guard/trap need to change control and save time for goal advancement, not only HP. |
| Q8 What does a skilled player learn in 10 losses? | Aiming and dodging, maybe not strategy. | Learn when to contest, flank, trade HP for area, retreat, peel and deny path. |
| Q9 What does a bad player enjoy? | Can attack, but repeated rapid deaths may exhaust. | Allow small meaningful achievements: stalled front, saved ally, broke blocking cover, defended area, even in a loss. |
| Q10 What is one-sentence identity? | "Small Brawl/Battlerite style 3v3" currently weak. | Choose ONE highly legible map/objective interaction as a signature; no systems pile-up. |
| Q11 Does it still work with only 6 characters? | Yes if all kits have credible counterplay and map role, not if they are six DPS skins. | Distinguish combat verbs + team purpose; measure matchup viability rather than add roster. |
| Q12 Can AI build it without new 3D credits? | Geometry, zones, moving marker and VFX are code-friendly; bespoke rig tech isn't. | Reuse 2m map kit, INT-01 pad, colored rings, T-pose shared rig, CODE moving beacon. |
| Q13 Is bot-only 3v3 enough? | Good for testing, not proof of marketable competitive PvP. | Keep offline bots for immediate validation; real online PvP is separate non-negotiable release gate if marketed PvP. |
| Q14 If remove the new gimmick, is combat still fun? | Unproven. | Prototype aiming and hitfeel independently; can't use objective to mask bad core controls. |
| Q15 Could the new core create passive unbeatable meta? | Very possible if barriers block only routes, healing loops or payload favors tank. | Run adversarial strategies deliberately; measure against kiting/turtling/3-stack. |

## Four candidate macro loops (heuristic scores, NOT validated)
| Candidate | Concept | Why it can work | Fatal risk | Tentative strength /10 |
|---|---|---|---|---:|
| A. Current two static control points | Stay in area to score | Very easy to learn/implement | Split-stand stalemate; KO feels disconnected | 5.6 |
| B. Carry/drop object | Win by transporting a vulnerable held object | Clear hero protection, theft and comeback | Resembles existing carrier modes; needs item-carry movement, bot logic, possibly rig | 7.1 |
| C. One moving frontline | A single neutral marker moves toward opponent while one team alone controls its circle; the other contests/reverses | Moving fight, map progression, team push/protect/flank, zero extra hero buttons | All 6 may cluster around one moving target; tank/heal bunker meta | 8.0 |
| D. Two competing moving fronts | Two lanes with contestable relays moving across each lane | Split teams, rotations, feints; nearest simple version of mini-MOBA macro | Can become two independent races with no contact, difficult scoreboard/tiebreaker | 7.7 |

**Research lead:** Trial C first, not lock C. D is plan B only if C fails clumping tests. Movement marker should be a code-built device or existing INT-01 visual; no new GLB requirement.

## Candidate C — Moving Front / ĐẨY MẶT TRẬN (one-page graybox hypothesis)
- 3v3 map 48x36m, 2m tile kit, symmetric spawn; ONE neutral relay marker begins at middle of a **single readable curved or straight ground track** with side flank routes.
- Team A alone inside marker radius (2.5m) pushes marker toward enemy side; Team B alone reverses; both nearby → contested/stopped; neither → stopped. **Proximity is automatic, no extra interact key.**
- Uniform speed example **1.0 m/s**, start center, endpoints ±12m, adjustable. These are TEST VALUES ONLY. Progress remains at achieved position while idle; do not make progress automatically decay (avoid losing by merely being away).
- Reaching opponent endpoint scores ONE point and resets marker to center after short visible reset. First to TWO points wins, default max duration ~3–4 minutes and deterministic tiebreaker to be designed/tested. If simultaneous end cannot occur with one marker, avoid that ambiguity. One KO = roughly 7s of uncontested progress potential, but no guaranteed goal.
- Cover, destructible crates and flank paths arranged **along the route**. As marker moves, current terrain around the fight changes. Team A fighting while near its own base has different geometry than at opponent's side. Defender is naturally closer to their spawn at deep push, reducing runaway snowball.
- Kill does NOT grant damage buffs/XP/points directly; it creates time/space. Players can choose to hold position, flank to dislodge defenders or back off to preserve HP.
- Six roles gain meaning: guardian keeps escort zone safe; ranger clears LOS but may abandon proximity; relay enables reposition/heal; trapper slows entrances but 25HP barrier destructible; flanker picks off rear support; duelist can bait counterattacks to open space.
- **NO** neutral orb, random pickup, turrets, second resource, gold shop, minions or rank powers in first test.
- Decisive anti-cluster question: does gameplay devolve into permanent 3-on-3 dogpile inside 2.5m? If yes, reject or add ONE simple alternate positioning incentive (e.g. cover interaction or offset cross-fire path), not a whole new game mode.

## Local micro/meso mechanics that don't need extra hero skills
### 1. Commit / punish
For each Q/E the defender must have a visible response: dodge, parry, flank, block LOS or punish recovery. Dash should not be a universal answer to everything. Train player skill through cause-of-loss feedback.
### 2. Cover creates tactical verbs
Keep tall wall / low wall / visible bush / destructible box. Allow some shots to destroy cover so teammates can create a firing line. No complex physics, no individually generated 3D chunks. Temporary Trapper barrier must be destructible and placement-limited to avoid unavoidable lockout.
### 3. Ability timing creates a team window
Example: guard blocks line shot while relay speeds flanker; ranger opts to hold angle rather than chase; flanker uses that 2s pressure to enter from side. Synergy = winning **space and time**, not only combined damage.
### 4. Retreat has a price
Disengaging can save health but yields marker position. Pushing at low HP can keep score pressure but risks losing a teammate; this is the natural tension.

## Duel mode separate test
- Same combat, but **not** use 3v3 escort score as a rigid requirement.
- Existing KO/best-of-three can remain baseline, but percent-HP timeout plus self-heal is highly suspect. Test a neutral contested timed pressure point or simple shrinking end-of-round boundaries; only one anti-stall device, no pickups or random buffs.
- Need a Duelist vs Ranger/Guardian 1v1 playtest demonstrating an accessible approach and counterattack. No approval based on designer intuition alone.

## An example of how the match *should feel*, without scripting results
0:00 A guardian/Ranger/Relay team takes early control and escort front to x≈4.
0:15 Enemy flanker leaves direct fight to cross cover and attacks rear support, forcing Relay to move away. Escort progress halts.
0:25 Ranged player's risky choice: stay to escort vs step out to get a better shot. Behind a low wall, gunshots open a destructible crate, exposing defender's flank.
0:40 Enemy survives at low HP but contests marker long enough for teammate respawn: valuable play despite no kill.
0:50 Team B turns fight around and pushes marker toward center.
This is an illustration of **player decisions**, NOT observed match logs.

## Rejected shortcuts
- Random augments, loot, economy or extra stats (variety without clear skill fairness).
- Extra 3 or 4 buttons per hero (animation/programming cost, not meta).
- Pure killstreak and comeback buffs (snowball or artificial rubber-band).
- Mandatory 3-lane minions/towers/jungle (scope disaster for small AI-agent project).
- Tower-building and physics stacking cover (input/system burden).
- Three simultaneous objectives in V1 (UI and bots confused, combat diluted).

## Failure tests and numeric hypotheses
These are **instrumentation proposals only**, not recorded results.
| Test | Pass hypothesis | Why it matters |
|---|---|---|
| First 10 seconds | First-time player can move/fire and correctly identify destination | Accessibility |
| Last hit understanding | 80% of 10 testers can explain why lost their latest fight | Fair defeat |
| Retry behavior | >=60% voluntarily rematch at least once in a short test | Actual urge to retry |
| 3v3 fight location | No >60% of combat time exclusively inside 2.5m escort bubble | Avoid permanent dogpile |
| Meaningful flanks | >=1 route switch/flank attempt per typical 60s from bot/human observations | Macro decisions |
| Passive no-combat race | Almost no match won purely by ignoring enemy contact | Goal should cause fights |
| Stalemate | No match indefinitely stalls due to equal contest, 4-minute bound respected | Pacing |
| Team variety | At least 4 of 6 heroes show credible contribution in 3v3 before expansion; all 6 eventually must | Nontrivial roster |
| Duel passive wins | <=10% rounds decided by timeout + passive heal/run | Rage is own mistake, not rules |
| Art/rig | T-pose sources and weapon sockets work with no extra custom rigs | Production scope |

Thresholds are hypotheses for a tiny early sample; tune them after observing match recordings, not treat them as statistical guarantees.

## Loop design outcome
The core should be **Aim & Read → Commit & Punish → Gain Position/Time → Convert to Visible Objective Progress → Defend or Counterattack → Rematch**. The core is *not* "deal damage / wait cooldown / repeat."
**Decision:** do not lock rule C until it passes a 3v3 graybox comparison against current two-point mode using identical six kits and consistent bot quality. Since credits expire soon, art production may proceed concurrently with short graybox tests; no new asset IDs required.

## Next self-audit gate
If C fails (permanent dogpile, no rotations, boring waiting) do NOT keep C because it appears in a document. Compare with D (two fronts) or a single migrating capture zone. Discard rather than layer new subsystems. All designs tested first with geometric placeholders and honest metrics.
