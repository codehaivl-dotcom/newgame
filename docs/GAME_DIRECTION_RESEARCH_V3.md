# GAME DIRECTION RESEARCH V3 — NO ASSET COUNT CAP
Date: 2026-10-12 · Status: **OPEN DESIGN SEARCH**, not a gameplay lock, authorization to spend credits, or claim of tested fun.

## Reset
User priority: (1) game actually worth replaying; (2) AI coding/art agents realistically able to build it; (3) simple modular 3D maps; (4) simple/shared T-pose rigs. Asset count can be 80, 300 or 400+. The earlier 100 IDs are a **historical asset candidate list**, not content whitelist or world-size ceiling. Reject the backwards workflow of choosing mechanics to consume assets. Six current heroes, 1v1/3v3 mode, control points and siege carts are hypotheses, not sacred.

## The real bottlenecks
| Many assets are usually scalable | A few systems can dominate cost |
|---|---|
| Modular stone, wood, buildings, props, vegetation | Character-specific rigs and complex animation interactions |
| Several maps assembled from one kit | Dynamic physics/destruction without deterministic collision |
| Reskinned robot/minion with deterministic lane path | Sophisticated cooperative bot planning/navigation |
| Swappable detached weapons | 1v1/3v3 authoritative online netcode with latency and disconnects |
| Multiple maps with pre-authored connectors | Hundreds of bespoke ability interactions + QA permutations |

Working guideline, NOT validated engine budget: prefer 1 shared humanoid rig, 1–2 distinct nonhumanoid mechanical rigs, 4–6 baseline actions, map made from prefabs on 2m grid, authored nav sockets, finite-state bots, no physics-dependent victory rule, and no new input buttons for every new mechanic.

## Four genuinely different game directions to investigate
**A. Two-route micro-MOBA:** 3v3, two lanes with very simple auto-running mechanical creeps, two base structures, a few player-decided pressure routes; attacking opposing core wins. Strategic pressure, split defense and tradeoffs; risks stale lanes, snowball, lack of originality, bot and net complexity. Use one mechanical creeps design with wheels/tracks, not a humanoid minion rig. Do NOT mechanically clone known MOBA maps.

**B. Arena Assault / Break-in:** 3v3, no minions, each side has a protected core behind 2 tactical approach points; either team can attack/defend, break a passage permanently for both sides, force cross-map rotations. Combat advantage converts to concrete structural progress; simple enemies/AI; risks deathballing one objective, stalemate and repetitive rush-to-core. Unique test focus: attacking one route creates a vulnerable flank for BOTH teams, not just one side.

**C. Combat-goal sport:** 3v3 characters strike a neutral device/puck toward opposing target, while skills push enemies and block shot trajectories. Attack and objective literally use same controls (see Omega Strikers). Camera and rig simple, no complex minion AI; net and deterministic collision prediction may be tricky; risk feeling like a clone of existing sports-brawlers.

**D. Solo/co-op arena roguelite:** 1–3 heroes fight waves, choose between 2–3 upgrade options, boss-room challenge and rematch. No mandatory PvP population/network; modular maps and reusable enemy mechanical rigs; potential satisfying replay; risk generic bullet-heaven combat, content/balance bloat and abandoning user's competitive MOBA taste.

## Hypothesis comparison — NOT proof or release forecasts
| Direction | Moment-to-moment & strategic potential /10 | Agent feasibility /10 | Map simplicity /10 | Rig simplicity /10 | Main unsolved |
|---|---:|---:|---:|---:|---|
| A. Micro-MOBA | 8 | 7 | 8 | 9 | waves + side advantage |
| B. Arena Assault | 7.5 | 8.5 | 9 | 9 | deathball / core rush |
| C. Combat-goal sport | 8 | 8 | 9 | 9 | deterministic object & identity |
| D. PvE roguelite | 8 | 8 | 9 | 8 | fresh progression without content bloat |
Scores express preliminary judgments only; competitive PvP online development lowers operational feasibility for A/B/C.

**Recommendation for next design exercise:** Do not choose a full game on paper. Test A/B/C using same input/combat/map/characters with **one distinct objective rule each**. Keep D as a deliberate business pivot if user prioritizes a shippable solo game over online hero competition. Initial 100-ID stock does not constrain any.

## Do not repeat earlier failures
- No inventing random powerups, economy, many skill buttons or 3 unique boss phases just to add "depth".
- No three-point captures as substitute for real macro consequences.
- No automatic "capture then wait" win conditions that make passing or escaping best strategy.
- No claim that simple art alone makes network PvP easy.
- No assuming high match-count bot simulation means humans found the combat fun.

## Agent buildability gates
**G1 Fun skeleton** — one playable map, 2 simple characters (one ranged, one melee), basic attack and one skill each, dodge, predictable hit feedback, 2 opposing bots. Every match ends visibly with a retry button. Human testers must be able to identify what happened and want another attempt.
**G2 Objective A/B/C controllers** — use exact same scene/art/inputs and swap only win condition + a handful of map objects. No fresh custom rig required.
**G3 Counterplay** — evaluate turtling, aim-and-kite, focus fire, defending from spawn, 3-stack deathball and victory by ignoring combat. An objective that lets the best degenerate strategy dominate is rejected.
**G4 Map kit** — build 2m exact prefabs, fixed camera, 3 layouts per promising rule; bot nav and line-of-sight work. Geometry is not fixed until playable tests pass.
**G5 Production assets** — approved T-pose standalone source, empty hands, common rig, detached weapons; many environment props may be generated by AI after rules and map sockets stabilize.
**G6 Online** — if game marketed as competitive against people: separate server authority, latency, disconnect, reconnect, matchmaking, anti-exploit gate; cannot call bot-only V1 a full PvP product.

## User/replay acceptance — proposed observations, never fake tests
- In a first-time player session, can they explain win condition by watching a match?
- At least 3 distinguishable interesting decisions over 60 seconds that are NOT just hitting or dodging.
- Does a successful player action alter the opponent's tactical choices?
- Does each of the three tested win conditions invite a degenerate no-fight strategy?
- After losing, can a player describe an alternative decision and choose to retry voluntarily?
- Does the same map play meaningfully differently with different hero pairings?
- Can one developer/agent show a complete end-to-end match before adding hundreds of props?

## Guiding conclusion
**Content volume is no longer a constraint. System novelty per unit of implementation complexity is the constraint.** Prefer one convincing repeatable loop over 400 polished objects. The next approval is for a *testable game direction*, not an asset list.
