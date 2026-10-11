# NEWGAME — PRODUCTION DESIGN V1.0 (2026-10-11)
**Status:** DESIGN BASELINE; not an asset/render approval, and not a claim the game has been implemented. Read with `AGENTS.md`, `GAMEPLAY_SPEC_V1.md`, `HERO_BALANCE_V1.md`, `MAP_SPEC_V1.md`, `ASSET_PRODUCTION_PLAN_V1.md`, `QA_GATES_V1.md`.
**Playable goal:** a very small **original** hero arena: 1v1 quick duel and 3v3 two-point control. It is *not* a traditional three-lane MOBA. Skill > gear and grind. Accessible in 10 seconds, losses readable, instant rematch. Do not copy existing characters/maps/skills/brand identity.

## Player promise and originality
- A new player can walk, aim, fire, press two recognizable skills and dash. Newcomers can play badly, learn and retry.
- Every unit has melee or ranged basic attack, one signature interaction and one outplay tool. Roles: melee skirmish, tank, shooter, self-sufficient support, trap zoning, mobility assassin.
- A second player's decisions (aiming, cover, zoning, timing, coordination) should determine outcomes rather than randomized bonuses or non-interactive abilities.
- No loot, leveling, skill trees, cash stat boosts, extraction, crafting, MMO questing or multiple weapon tiers in V1.
- Visual direction: stylized 3D super-deformed silhouettes with restrained detail and readable team identifiers. Tropical overgrowth / warm stone / playful light industrial motifs are allowed; no token cultural stereotypes. World is fictional/global-first, Vietnamese language available.

## Product scope: DON'T EXPAND
| Surface | V1 base | Later / excluded |
|---|---|---|
| Control | WASD + mouse aim + left click + Q/E + Space | Controller/mobile touch mapping only after proven |
| Heroes | Exactly 6 distinct baseline kits | No 24-hero roster |
| Matches | 1v1 duel vs bot; 3v3 two-point vs bots | Human network PvP only after networking gate |
| Map | 1 duel layout, 1 control layout; both in **one** modular art kit | Additional skins/biomes afterwards |
| Terrain | Solid walls, cover, visible bush, destructible crates | 3D platforming, water/bridges/height advantage in V1 |
| Items | No random pickups in ranked rules; map healing fixture is optional test only | Energy/ammo/speed loot, turret building |
| Economy | None | No progression affecting combat |
| MVP | Offline deterministic game loop with input, bot, combat, objectives and restart | Online matchmaking, parties, ranked etc |

**Do not claim online 1v1/3v3 is shippable** without independent netcode/load/latency tests. We can art-produce before these tests because expiring credits, but do not overspec expensive network systems.

## Three layers of certainty
- **LOCKED FOR ASSET PRODUCTION:** art look, 6 readable silhouette roles, attachment separation, shared rig target, geometry conventions, material kit, asset identity, no copying, no freeform physical simulation.
- **BASELINE FOR IMPLEMENTATION, TUNABLE:** numerical hero stats, cooldowns, mode timers, hitboxes, map dimensions and spawn points. Changes require balance log, not replacement of approved model geometry.
- **NOT APPROVED / NOT DONE:** character images, 3D meshes, multiplayer working, six kits balanced, bot skill quality, complete game, exact credit pricing, commercial-ready status.

## Definition of V1 complete
1. Solo 1v1 vs bot and solo 3v3 with bots have a complete input→match→win/lose→rematch loop.
2. Six characters each execute attack, Q, E, universal dash and corresponding visible hitboxes.
3. A player can distinguish front/back, team, silhouette, dangerous telegraph and collision at the actual game camera size.
4. Two layouts pass path/line-of-sight, spawn fairness, no stuck units, and function without any decorative assets.
5. At least 30 automated full-match simulations + 10 human test sessions have documented observations; meaningful skill tests required before asserting fair balance.
6. Art and 3D assets saved from approved images only, logged by immutable ID/version; 3D production is independent of game programming completion.

## Asset production authority
100 IDs describe an **inventory**, not 100 mandated 3D credits. Current source inventory counts: 53 GEN candidates, 39 CODE geometry, 8 VFX. Approved source count = 0. Use `asset_manifest.json` status as truth, not this document. The credit deadline means design rapidly, batch render with immediate QA; **do not wait days for gameplay prototype** before creating assets. However, never fabricate approval, model output or credits.
