# PRODUCTION V1 AUTHORITY — 2026-10-12
Read docs/12_PRODUCTION_LOCK_V1.md, assets/render_manifest_v1.json, assets/RENDER_PROMPT_DECK_V1.md, docs/13_ASSET_PIPELINE_AND_QA.md, docs/14_PLAYABLE_SPEC_AND_TEST_GATES.md, docs/15_PRODUCTION_RUNBOOK.md BEFORE initiating image batches or coding additional game systems.
There are 64 first-wave render candidates (44 CORE, 20 OPTIONAL). This is NOT blanket render permission. First FOUR calibration items only when provider credits are verified and user authorizes generation: LNK-ICON-001, LNK-ICON-005, BUB-BALL-001, JWL-GEM-001. No fake art status, no text baked in sprites, no crowded asset collage. User-approved concept posters are NOT equivalent to approved isolated runtime sprites. All three games must function with code placeholders before images are approved.
Validate catalog in checked-out repo using: node scripts/validate_production.mjs. Read docs/16_PRODUCTION_STATUS_V1.md for exact verified state and unfinished runtime/render gates. This validates structure, NOT rendered quality or playable games.

---

# AGENTS — NEWGAME PUZZLE SUITE
**Authority date 2026-10-12. Old MOBA AGENTS instructions are VOID.**

## Order
1. Read docs/12_PRODUCTION_LOCK_V1.md (highest current production authority), docs/00_PRODUCT_AND_RULES.md and 01_SHARED_ONLINE_RANKINGS.md.
2. Read approved modes 02_LINK_GARDEN.md, 03_BUBBLE_ORCHARD.md, and 04_JEWEL_GARDEN.md; 06_LEVEL_FACTORY_AND_QA.md for generator/solver; 07_AGENT_BUILD_ORDER.md for phases. Then 09_SCREENS_TOP_AND_PROGRESS.md for touch UX and 10_DIFFERENTIATION_AND_PLAYTESTS.md for optional variant experiments.
3. Build one end-to-end PLAYABLE game at a time; start Link Garden + shared save, implement by docs/15_PRODUCTION_RUNBOOK.md. NO game engine/3D assets required to begin.
4. No actual release, leaderboard service, render or QA completion claim without verified evidence.
5. No 100-asset cap, no requirement to use 3D credit. If 2D image credit availability is unconfirmed, do not burn unrelated 3D credits.
6. Preserve offline Free Play, exact resume after each atomic move, and no real-time timers or background penalties. Never change rules to introduce speed-based competitiveness.
7. Full multi-game ranking must be server-verified through deterministic replay; client score is untrusted. Same seed, same ruleset, same ranking pack. Ties share rank, no time tiebreak. No paid competitive assists.
8. Automatic generation must be checked by game-specific solver or constrained evaluator. 1,000 generated boards are not automatically 1,000 approved levels.
9. Touch accessibility: >=48dp targets, alternate tap-first controls (especially Bubble), color AND shape IDs, large text, reduced motion, VI/FR/EN keys, offline.
10. Keep old MOBA material **only in archived branch**, not in active docs or agent tasks. Do not re-import hero data, old manifest, rig requirements, PVP netcode.
11. Always show meaningful test evidence: real preview path, stable rule fixture seed, save/replay checks, exact commit ID; no fake PASS.
12. If game mechanic is unresolved, record it as TUNABLE, not LOCKED. Do not silently invent additional score boosters, IAP items, levels or failure timers.

## REJECTED GAME — HARD SCOPE RULE
Color Atelier / Water Sort / Phân loại màu is REJECTED by user on 2026-10-12. No bottles/pouring logic, sorting generator, menu tile, scoreboard, promotional art or background jobs. Historical commits remain accessible but must not be brought into main without explicit new decision. Three concept designs were approved, not production-ready PNG sprite packs or implemented gameplay.

## Commit gate for each engine
PASS: one full playable match/board to clear or lose through legal moves, undo as permitted, restart and pause after every action, invariant tests, finite deterministic ranking pack with exact score replay. Before bulk assets/levels, actual adult tester tries without explanation.

## Product navigation
Home Continue + THREE game icons (Link, Bubble, Jewel) + Top/Records + Settings. Never flood board screen with all tasks/monetization buttons.

## Repo
main = active puzzle production. archive/arena-moba-2026-10-12 = previous cancelled design, read-only historical reference.
