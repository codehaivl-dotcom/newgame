# AGENTS — NEWGAME PUZZLE SUITE
**Authority date 2026-10-12. Old MOBA AGENTS instructions are VOID.**

## Order
1. Read docs/00_PRODUCT_AND_RULES.md and 01_SHARED_ONLINE_RANKINGS.md.
2. Read mode docs 02..05; 06_LEVEL_FACTORY_AND_QA.md for generator/solver; 07_AGENT_BUILD_ORDER.md for phases.
3. Build one end-to-end PLAYABLE game at a time; start Link Garden + shared save. NO game engine/3D assets required to begin.
4. No actual release, leaderboard service, render or QA completion claim without verified evidence.
5. No 100-asset cap, no requirement to use 3D credit. If 2D image credit availability is unconfirmed, do not burn unrelated 3D credits.
6. Preserve offline Free Play, exact resume after each atomic move, and no real-time timers or background penalties. Never change rules to introduce speed-based competitiveness.
7. Full multi-game ranking must be server-verified through deterministic replay; client score is untrusted. Same seed, same ruleset, same ranking pack. Ties share rank, no time tiebreak. No paid competitive assists.
8. Automatic generation must be checked by game-specific solver or constrained evaluator. 1,000 generated boards are not automatically 1,000 approved levels.
9. Touch accessibility: >=48dp targets, alternate tap-first controls (especially Bubble), color AND shape IDs, large text, reduced motion, VI/FR/EN keys, offline.
10. Keep old MOBA material **only in archived branch**, not in active docs or agent tasks. Do not re-import hero data, old manifest, rig requirements, PVP netcode.
11. Always show meaningful test evidence: real preview path, stable rule fixture seed, save/replay checks, exact commit ID; no fake PASS.
12. If game mechanic is unresolved, record it as TUNABLE, not LOCKED. Do not silently invent additional score boosters, IAP items, levels or failure timers.

## Commit gate for each engine
PASS: one full playable match/board to clear or lose through legal moves, undo as permitted, restart and pause after every action, invariant tests, finite deterministic ranking pack with exact score replay. Before bulk assets/levels, actual adult tester tries without explanation.

## Product navigation
Home Continue + four game icons + Top/Records + Settings. Never flood board screen with all tasks/monetization buttons.

## Repo
main = active puzzle production. archive/arena-moba-2026-10-12 = previous cancelled design, read-only historical reference.
