# AGENT PRODUCTION RUNBOOK — HANDOFF

Read order: AGENTS.md -> docs/12_PRODUCTION_LOCK_V1.md -> docs/00_PRODUCT_AND_RULES.md -> docs/01_SHARED_ONLINE_RANKINGS.md -> 02/03/04 game rules -> docs/14_PLAYABLE_SPEC_AND_TEST_GATES.md -> docs/13_ASSET_PIPELINE_AND_QA.md -> assets/render_manifest_v1.json and assets/RENDER_PROMPT_DECK_V1.md.

## Track A: playable first, ART can run in parallel after authorization
A0: mobile web shell, HOME Continue, three game tiles, offline persistent save, VI/FR locales, 360/390px, 48+ px hit targets. SVG placeholders acceptable.
A1: LINK tap pair, <=2-turn path solver, 6x8, win board, endless rung, hint, deterministic seeds, 100 seed tests, pause/reload. Real preview and log.
A2: BUBBLE 7-col hex simulator, TAP AIM/SHOOT, bounce, group pop, detached groups, row only after shots, score/queue/save. Compare deterministic replay on phone and tablet.
A3: JEWEL 7x7 adjacent swaps, 5 gem types, minimal specials, cascades, stable PRNG, 40-action PB windows, reshuffle, save. 100 seed tests.
A4: switching between all 3 unfinished runs preserves each exact state; offline no lost move after closing/browser restart; effects can be skipped.
A5: online verified ranking only after engine consistency: server pack/version/seed, 3 official attempts, action-replay server recomputation, ties, family invite, abuse/rate limits, transparent close/grace policy.

## Track B: image/credit pipeline only when approved
B0: verify image provider, credits (3D credits may not be usable for 2D), per-job charge and expiry; check concept references. If no accessible poster, rely on locked style text, never invent path.
B1: four calibration render IDs LNK-ICON-001, LNK-ICON-005, BUB-BALL-001, JWL-GEM-001. Human PASS exact revisions and 48px view.
B2: 20 remaining LINK CORE icons, one ID per image, clean alpha/review.
B3: BUBBLE and JEWEL CORE objects; launcher and specials. Test REAL board readability, not pretty mockup.
B4: 4 backgrounds and 3 game-card art; quiet board center. Test complete game screen.
B5: 20 OPTIONAL illustrations only after gameplay good and user wants theme/album variety; no automatic spending because list exists.

## Track C: levels/score
C1: implement generator, witness/solver or bounded search and deterministic replay per game. Set named difficulty bands.
C2: first 10–20 manually reviewed puzzles/mode, then 100 accepted samples and log rejections, scale seeds only after acceptable human samples.
C3: define official daily and weekly fixed packs; scores comparable by same initial states/turn caps, never runtime. All ties share rank, practice separate.
C4: implement reportable tests for impossible seed, unsolvable/invalid board, unintended duplicate score, score injection, fake rank display and bad touch targets.

## Files agent must commit
Pure rules engine per mode, deterministic seeded generator and solver/validator, action schema, fixed tests/fixtures, game renderer, local save and migrations, ranking server/replay checks, source/rendered sprite manifest updates, reproducible test report, 360px+tablet visual preview, production ledger with actual cost and commit SHAs.

## QA and release
A code scaffold is not gameplay PASS. A poster is not a gameplay asset. A generated level isn't approved because it exists. An unverified score isn't an online Top score. No fake ALL PASS. For credit safety, no large AI render batch until W0 calibration passes. DO NOT code Color Atelier or old MOBA systems.
