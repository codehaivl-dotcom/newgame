# FULL GAME AUDIT — NEWGAME MINI ARENA MOBA (2026-10-11)
**Audit type:** independent-minded design assessment, grounded in current repository specs; subjective expert estimates, **not observed player metrics**. This file is an advisory audit, **NOT** an authorization to revise locked gameplay, render images or add scope. No game/runtime files, bots, character meshes or playtest sessions exist in the verified production manifest.

## Verdict
- **Game-design strength today: 6.2/10 (62/100), conditional.** There is a practical, understandable arena game foundation but no proven addictive core loop, no sufficiently distinctive hook, and a severe ambiguity about offline-bot V1 vs multiplayer PvP audience promise.
- **Documentation readiness: 8.0/10** (prior production docs assessment), **not** the same thing as game quality.
- **Asset specification usefulness: 7.9/10** (subjective V2 audit), **not** image/3D/rig QA. All six CHR require strict empty-handed T-pose.
- **Live game playability, performance and fun: UNRATED / NOT TESTED.** Do NOT read UNRATED as zero quality, or mark tests passed.

## Weighted audit score
| Dimension | Weight | Score /10 | Weighted points out of 100 |
|---|---:|---:|---:|
| Skill-first real-time combat | 18% | 7.3 | 13.14 |
| Six hero kits and team synergy | 14% | 6.2 | 8.68 |
| 1v1 and 3v3 rule design | 12% | 5.8 | 6.96 |
| Terrain and map strategy | 10% | 7.5 | 7.50 |
| Fairness, readability, beginner learning | 10% | 6.4 | 6.40 |
| Long-term replay and meaningful meta | 10% | 4.5 | 4.50 |
| Original identity / competitive positioning | 9% | 4.7 | 4.23 |
| Small-team AI production feasibility | 9% | 7.5 | 6.75 |
| Bots, matchmaking, real online PvP readiness | 5% | 3.5 | 1.75 |
| Art concept and visibility strategy | 3% | 7.5 | 2.25 |
| **Weighted total** | **100%** | **6.216 ≈ 6.2** | **62.16** |

These are judgement scores, not statistically validated ratings.

## What is strong
1. Accessible small control set: WASD+mouse, basic attack, Q/E, Space; immediate skill-testing and no item economy/levels to overwhelm a novice.
2. Six clearly planned combat classes and deterministic projectiles/hitboxes; good potential for readable failures and improving player skill.
3. Geometry-first modular map kit with tall/low cover, destructible crates, bush LOS, 2m tile contract; most of the world can be authored cheaply and reused.
4. Shared rig + empty-handed strict-T source, detached weapon sockets and per-ID production tracking are practical for AI-assisted production.
5. 1v1 rematch target and bot fill avoid empty lobbies in early tests.

## High-severity design risks (not theoretical implementation bugs)
### H1 — Product promise conflict: social competitive arena vs offline bot V1
The desired competitive 1v1/3v3 MOBA is largely a human-vs-human experience, but `PRODUCTION_DESIGN_V1.md` puts network human PvP outside V1. A bot-only game can be a useful prototype, not automatically a viable competitive market release. Decide explicitly: **V1 release = solo arena challenge** or **V1 release = online PvP**; write separate technical milestones. Do not market PvP until live network gates pass.

### H2 — 1v1 timeout can reward passive kiting/healing
`GAMEPLAY_SPEC_V1.md` awards round to higher *percentage* HP at 75s; CHR-04 heals 22HP every 10s, CHR-02 has high durability, and ranged characters can kite while ahead. This can incentivize disengagement rather than the desired angry near-loss/retry loop. Test bot behaviours and add a simple late-round pressure condition **only if passive win frequency is high**; inspect healing rule for duel separately.

### H3 — Two simultaneous 3v3 objectives risk static split/stalemate
An uncontested point yields 1 score/sec, regardless of previous ownership, while contested yields zero. Equal-strength teams holding one point each may reach simultaneous scores without a strong comeback/rotation incentive, and the mode has no distinct neutral objective since extra INT fixtures are HOLD. Test score trajectories, rotation frequency and contested encounters before choosing a single simple swing mechanism. Avoid adding many systems.

### H4 — Role matchup fairness may be structurally broken on open ground
Bulwark speed 3.7m/s vs Ranger 4.0m/s; both get universal dash, Bulwark rush 2.1m /11s vs Ranger retreat 2.2m /10s, plus ranged basic reach 9m. On open ground the guardian can be permanently kited absent LOS constraints or external objective. Map access must be tested per class, not only geometry symmetry. Duelist and Skirmisher both rely on forward Q rush, creating role overlap.

### H5 — Trap barrier can seal legal corridors
Min traversable gap 2m per `MAP_SPEC_V1.md`; CHR-05 E creates a 2.3m wall blocking **movement and projectiles**, lasting 3.5s (25HP). It can close an entire chokepoint. Ensure barrier placement cannot obstruct the only objective access, all spawn exits, or bot nav; allow destructive/counterplay.

### H6 — Few heroes does not yet mean a compelling meta
Roles exist but no distinctive draft/selection interaction, ban limits, composition rules, map-specific counters or demonstrated alternative play styles. With six kits and two simple objectives, team solutions may be discovered quickly. “Meta” must arise from meaningful draft choices, map cover, timings, and multiple viable counterplays—not just from six names.

### H7 — Current selling proposition is too familiar
Small arena + six colorful heroes + 1v1/3v3 + points + Q/E/dash strongly resembles existing subgenre formulas. A fresh **single signature**, ideally built from existing mechanics (modifiable cover, temporary walls, ricochet/corner control or recoverable map advantages), needs a small usability test. Do not bolt on a complex power grid, loot/economy or extra genre.

## Medium-severity risks
- **Combat feel unaddressed**: no authoritative audio/hitstop/camera shake/muzzle/impact/feedback tuning, crucial for “thua cay cú muốn chơi lại”.
- **Universal dash has no invulnerability**, so do not imply i-frame dodge. Need movement/hitbox timing tests to verify it meaningfully avoids skill shots.
- **Bot spec is descriptive, not operational**: aiming errors, guard support behavior, LOS, nav updates after crates, and 5-bot composition must be measured; perfect-bots or idle-bots destroy the intended skill-based lesson.
- **VFX audit marks 8 items HOLD**, but small telegraphs, hits, dash and heal indicators are **functional gameplay requirements**, even if no separate AI 3D art is generated. Do not defer basic visibility feedback because the visual source catalog says HOLD.
- **UI/onboarding accessibility absent**: no short first-10-second interaction lesson, aim direction and melee hit range tutorial, meaningful damage attribution, bot label, rematch UI preview or accessible non-color cues verified.
- **One art kit/two maps may become visually repetitive**: modularization is a positive for production but not evidence of replay variety.
- **Commercial release plan missing**: platform audience, how to attract human players, latency region, pricing/monetization, social match loops/retention are not defined. Keep monetization strictly cosmetic if added later.
- **T-pose not a rig guarantee**: topology, body separation, textures, skin weights, import, socket placement and retarget require actual model verification.

## Small fixes with highest ROI — proposals, not locked changes
P0 — **Choose the release promise**: bot-first arena action vs real-person competitive MOBA. Maintain bots for both paths, but if online PvP is the key identity, networking cannot be a feature postponed indefinitely.
P0 — **One graybox match in each mode** using procedural shapes and only two contrasting heroes. Measure actual aim, movement, wall interactions, deaths, action feel, retry speed. Render urgent expiring-credit art in parallel after isolated-source QA; do not hold credits hostage to days of prototyping.
P0 — **Fix 1v1 stall test first**: run self-heal/long-range matches at 75s; observe passive timeout winners. Consider late-round convergence or revised percentage-health tiebreak ONLY after simulation.
P0 — **Test objective rotation in 3v3** with all points active. Compare time contested, no-contact points, composition win rates; add at most ONE pressure/comeback mechanism if static split dominates.
P1 — **Differentiate Duelist vs Skirmisher** in combat verbs, NOT more skills. Make one about bait/parry timing and one about lateral flanking / short crossfire; preserve 2 skills each.
P1 — **Break open-ground Guardian vs Ranger non-interaction** through map route design or kit adjustments; verify every class has counterplay in 1v1.
P1 — **Make combat feedback mandatory**: sound, impact, telegraph, HP response, death reason and one-click retry before decorative ENV or optional pickups.
P1 — **Specify one recognizable signature interaction** using terrain tools already present: destructible cover + temporary barrier + ranged/corner tricks. Playtest whether this is distinctly enjoyable before claiming differentiation.
P2 — **Commercial/social strategy**: lightweight match analytics, ghost/demo clips, bot truthfulness, friend-match model, after viable playable core.

## Clear QA milestones
- G0 Design hypotheses written: current docs EXIST but gameplay hypotheses remain UNVERIFIED.
- G1 Four clean images with crop safety, plus one successful character T-pose → imported/rigged and detached item socket.
- G2 In graybox Duel: full input/attack/Q/E/dash, hits and timeout, six characters with basic bot and rematch; 10 playtest sessions, record passive wins and retry behavior.
- G3 In graybox Control: 1 human+5 bots finish 30 seeded matches with two objectives and LOS/nav; record fight/contest/rotation frequency and team scores.
- G4 Six classes have viable counters, visible telegraphs, hit feedback and no unavoidable lock/stuck states; production images/3D are accepted by independent gates.
- G5 Online-only before release advertised as competitive PvP: latency, server authority, disconnect/reconnect, matchmaking and friend testing.

## Final judgement
**Viable game seed: yes. Production-doc quality: good. Ready to be called fun, fair, deep MOBA meta, or commercially differentiated: no.** Biggest next improvement is NOT more models or more documentation; it is one strong repeatable combat hook, counterplay at equal skill, meaningful point rotation and an honest product promise.

**No changes to gameplay, hero numbers, maps or production authorization are made by this audit.**
