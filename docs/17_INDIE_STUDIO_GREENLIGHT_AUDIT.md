# INDIE STUDIO GREENLIGHT AUDIT — NEWGAME / 3 PUZZLE GAMES
Date: 2026-10-12. Version: audit 1.0. **Advisory report, not permission to rewrite locked game rules or spend render credits.**

## Executive producer verdict
**GREENLIGHT ONE SMALL PLAYABLE VERTICAL SLICE; DO NOT GREENLIGHT AUTONOMOUS FULL PRODUCTION, BULK RENDER, SERVER LAUNCH OR STORE RELEASE YET.**

Verified on main: 3 approved modes (LINK Nối thú, BUBBLE Bắn bóng, JEWEL Xếp kim cương); 64 unique render IDs (44 CORE, 20 OPTIONAL), 64 matching prompt cards, all marked PLANNED with null source/runtime paths, 0 actual asset approvals. Concept PNG references have SHA guidance but are not verified GitHub binaries. Gameplay/online/seed QA status in project itself is NOT IMPLEMENTED / NOT TESTED; there are no supporting executable test logs in reviewed production materials. Structural validator exists but was not run through a checked-out Node runtime in this audit.

The production **documents** are carefully organized. But these are not yet a finished executable game specification, let alone a viable product: many crucial rules are left as "prototype"/"tunable", no real player data, backend, studio release plan or quality evidence.

### Scores (subjective review, not player metrics)
| Axis | Score | Interpretation |
|---|---:|---|
| Product scope, audience and no-timer premise | 9/10 | Clear three-game focus |
| Asset inventory, IDs, standalone render prompts, revision policy | 8/10 | Strong production inventory, not yet visual proof |
| Actual game-rule determinism and edge cases | 6/10 | Major unresolved exact outcomes |
| Level factory and difficulty-quality strategy | 5/10 | Concepts, no executable certified generators |
| Online Top / skill-rank incentive | 4/10 | Backend unbuilt; ties, practice and ranking economics threaten engagement |
| Older-adult usability proof / complete interaction design | 5/10 | Principles, no tested real screens or onboarding |
| Stack, CI, release engineering | 2/10 | Agent is still asked to choose technology and build system |
| Retention, distribution, privacy, store operation | 2/10 | No executable business / live-ops plan |
| **INDIE PRODUCTION GREENLIGHT CONFIDENCE** | **~5.1/10** | Suitable to make prototypes, NOT autonomous mass production |
These ratings measure **readiness of the plan for a small studio**. Gameplay fun and commercial appeal remain **UNRATED: no real playtests**. Do not confuse with a 5.1/10 game review.

## P0 — RED FLAGS to resolve BEFORE an agent locks gameplay engines

### AUD-P0-01 — No real vertical slice or locked implementation contract
**Evidence:** docs/07_AGENT_BUILD_ORDER.md tells the agent to pick a mobile-web stack; docs/16_PRODUCTION_STATUS_V1.md explicitly says gameplay NOT IMPLEMENTED. There is no verified build URL, dependency lockfile, CI outcome or phone gameplay recording in reviewed evidence.
**Why dangerous:** different agents can implement different PRNGs, rendering, storage or game-state ordering and then fail server replay.
**Expected:** choose ONE source stack (e.g. TS pure engine + React/Canvas UI + lightweight server); pin dependencies, directory ownership, exact action/state schema, seeded PRNG algorithm, CI lint/unit/build and one smoke preview. Show a real 360px playable Link sample.
**Pass proof:** one exact Git SHA, CI green, browser preview, one saved/resumed Onet board and reproducible test command. No approval based on just screenshots.

### AUD-P0-02 — LINK scoring can produce many ties and reward repetitive optimization
**Evidence:** docs/02_LINK_GARDEN.md awards a fixed 100/pair with only +20/10/0 from shortest path bends; same 5 boards, unlimited practice, 3 official attempts; all users clear the same 24 pairs per board. A high score becomes a route search problem, not necessarily an interesting social rivalry.
**Expected:** simulate 100+ humanlike and greedy/solver strategies against >=100 certified candidate ranked packs. Chart max attainable score, distinct score count, top 10% score separation, perfect ties, reroll/undo/hint exploits. Human test whether "no timer" remains motivating.
**Decision:** keep score or revise to give meaningful non-speed variance *only after evidence*. Never secretly use completion time to sort equal scores.

### AUD-P0-03 — LINK shuffle must not create unsolvable boards; ranked penalty semantics vague
**Evidence:** reverse-construction guarantees ONE witness from initial layout, not all subsequent legal choices; manual casual shuffle and ranked deterministic reshuffle described, but **no precise reshuffle algorithm or post-shuffle witness guarantee**. Score floor, undo restoration and charged repeated assists not fully formalized.
**Expected:** exact deterministic shuffle algorithm that verifies solvability, bounded retry/fallback, action schema for undo/assist, score cannot be farmed by undo/shuffle cycles. Pinned 0/1/2-bend path tie rule with fixtures.
**Pass proof:** seeded adversarial deadlocks and client/server identical action replay.

### AUD-P0-04 — BUBBLE deterministic physics and generation underdefined
**Evidence:** docs/03_BUBBLE_ORCHARD.md specifies 7 columns, 11–13 rows, hex neighbors, bounce, snap, ceiling, 12-shot rows, 5 colors but says radius/spacing constants will be "defined in data". Beam-search validation is only proposed. The queue may select only colors still present on board, making future queue state action dependent.
**Expected:** immutable logical coordinate convention (odd/even row), aiming quantization, wall/ceiling raycast, snap tie ordering, exact row-add game-state order, color queue rule and action sequence. Verify deterministic results independent of browser frame rate and screen sizes. Define fallback when a ranked seed cannot be solved under shot cap.
**Pass proof:** recorded seed fixtures including wall-bounce, collision tie, disconnected bubble and danger-line after a completed shot; same hash on simulated client/server.

### AUD-P0-05 — JEWEL special effects, refill and scoring still ambiguous
**Evidence:** docs/04_JEWEL_GARDEN.md describes 4/5 run generating charms, legal special swaps, 7x7, cascades, concurrent matches, unspecified "special spawn pivot" and prototype +100/+200 special scores. No complete precedence for crossing 4/5 matches, simultaneous special creation, special+special exchanges, deletion and refill order, score handling or infinite cascade safeguards.
**Expected:** one table of EVERY deterministic resolution step; exact special creation/trigger for crossing shapes, pair of specials, gravity and column refill order; integer score arithmetic, capped chain safety; golden fixtures with expected board after each step. If advanced combos not in V1, explicitly DECLARE FORBIDDEN rather than leaving accidental implementations.
**Pass proof:** 20+ edge-case fixed fixtures, 1,000 seeded stress simulations and exact server playback before ranked is built.

### AUD-P0-06 — The ranking premise needs a product test, not just a backend
**Evidence:** docs/01_SHARED_ONLINE_RANKINGS.md assumes three official attempts + unlimited practice on shared deterministic packs; current anti-cheat detects illegal moves, NOT external solvers. Ties are allowed (correct), but a large percentage at maximum can make a Top table socially meaningless. Daily 5 Link boards = 120 pairs / at least 240 symbol taps per attempt, heavy for a "relax at night" daily challenge.
**Expected:** test 1-board daily vs 3–5-board weekly (NO countdown), scores under different strategies, finish rates, top score distribution; decide ranked reset/day cutoff, attempt abuse, seed publication, family leaderboard minimum population, tie prevalence and transparent season close. Keep same playable state when season closes.
**Pass proof:** a fake-data replay simulator demonstrates nontrivial score spread and no trivially dominant exploit; then small actual-human trial. No promises of uncheatable human-only competition.

### AUD-P0-07 — Exact save/resume is a promise without a failure policy
**Evidence:** save schema described but storage budget, local database quota/eviction, corruption fallback, browser multi-tab conflict, migrations, sync conflicts, interrupted multi-cascade and very long undo/action logs are not specified.
**Expected:** atomic snapshot+journal, record format with schema/version/CRC, bounded undo/log compaction, multi-tab lock, offline cache, storage error UX, export/import or optional signed cloud restore, data migration v1->v2 fixture. Ranked event logs must not silently be compacted beyond replay ability.
**Pass proof:** 10,000 action stress, forced close between each action, 24h offline/switch modes, two-tab race test, corruption recovery, migration without lost records. iOS Safari storage eviction should be treated as a risk, not guaranteed impossible.

### AUD-P0-08 — Beautiful concept posters are not responsive production gameplay screens
**Evidence:** three style posters approved but are advertising images with phones, typography, tutorials; reference binaries not in repo; asset catalog all PLANNED. No approved real 360x800/390x844/tablet gameplay screen with board occupancy, tap size and contrast measured.
**Expected:** static functional wireframe for HOME, 3 boards, PAUSE/RESUME and TOP with exact safe-zone bounds; then live screens with plain shape placeholder sprites. Import 3 approved refs with hash/rights checks and run W0 four isolated sprites ONLY after spend approval.
**Pass proof:** screenshots and on-device tests at 360/390/tablet; actual target dimensions; no tile crop or background reducing contrast; accessible grayscale/low-motion variant.

## P1 — REQUIRED BEFORE CLOSED BETA

### AUD-P1-09 — Missing 3 game feel/audio/haptics specifications
Match pop, bubble fall, jewel cascade and board clear are the ACTUAL pleasure loop. Need one restrained per-game feedback vocabulary: input confirmation, invalid move, match, chain, big clear, completion, save/Top result. Master volume, mute, silent phone, vibration optional, reduced motion, no flashing; sound quality licensing documented. A board with only silent low-quality placeholders cannot be judged fun.

### AUD-P1-10 — Missing first-use tutorials and "what happens after a mistake?"
Onet path 2 turns, Bubble aim/rebound, Jewel invalid swaps and special gems need interactive **one gesture at a time** and real move feedback, plus an obvious replay/difficulty option. A poster "How to Play" beside a fake phone isn't actual tutorial UX. Script no-coaching usability observation with adults 50–80; big touch targets and minimal accidental exits.

### AUD-P1-11 — Infinite casual "rungs" need proven satisfying long-term loop
Casual Jewel has no loss and only 40-move windows; Link board resets every 24 pairs; Bubble adds rows after 12 shots. There is no measured reason someone should play for weeks other than points/album. Measure "one more board" voluntarily, returns next evening, preferred mode, assist frustration, milestone delight. Keep cosmetic album simple and free of time-limited attendance pressure.

### AUD-P1-12 — Automated level volume is not certified difficulty
A generator and a solver proving *at least one valid solution* is necessary but not sufficient. Need mode-specific difficulty measures (branching, backtracking traps, required angle geometry, cascade variance), uniqueness/de-dup and content versioning. Human review 10–20 seeds/mode, difficulty waves for casual, rank packs checked for obvious optimal/unsolvable exploits. Track rejection rate, render previews and producer-approved pack hash.

### AUD-P1-13 — Asset list lacks a tested in-engine style/system sample
64 standalone prompts exist, but no art test at 48px or proper sprites exported. Potential issue: same 3D painterly style produces inconsistent light, bevel, silhouette and alpha halos when assembled. Define master icon canvas, baseline/shadow, 2x downscale, material and normalized visual bounds; compact texture atlas, fallback procedural UI if missing, budget for pack download/storage. No fixed source art rights or verified cloud balance. Do not spend "3D credits" on these 2D games blindly.

### AUD-P1-14 — Analytics/product decision metrics missing
Before beta, define privacy-respecting event taxonomy: install/session, which mode entered, first action, board solved, hint, undo, miss tap, crash, save restored, resumed after absence, return next day/week, ranked start/finish, abandon cause. Measure D1/D7 at reasonable cohort size, not from one family test. Control PII and opt-in requirements appropriately. Define go/no-go target as hypothesis, not fabricated market benchmark.

### AUD-P1-15 — Online service lifecycle and privacy lacks an operational plan
Specify backend owner, auth/account recovery, guest ID migration, offline submission grace, HTTPS, rate limiting, database indices/backups, estimated spend, moderation of pseudonyms and invite codes, GDPR policy/erasure/export and retention schedule. Replay-valid logs do NOT stop solver assistance; never have money prizes. Need contingency: when Top goes down, offline games remain fully accessible.

### AUD-P1-16 — Cross-platform packaging/performance not defined
Decide PWA-only first vs Android/iOS release plan. Need service-worker update+cache versioning, asset downloads, portrait/tablet orientation handling, font fallback/large text, battery/heat, cold boot time, package install size, Android back, iOS resume/storage behavior. Define target devices and a realistic FPS/latency envelope for animation, not unnecessary 60-fps simulation.

## P2 — BEFORE STORE LAUNCH / LIVE OPS

### AUD-P2-17 — Commercial & publishing plan not decided
Distribution (Google Play/Apple/Web), legal owner/publisher, privacy policy, app icon, screenshots, original store description, FR/VI localization review, music/image usage rights, support contact, crash reporting, in-app support, age content classification. Monetization is entirely undefined; if ads are considered, avoid interrupting a board, pay-to-win and forced streaks, and verify app-store rules. Don't assume ranking itself markets the product.

### AUD-P2-18 — Live challenge operating pipeline missing
Generator service schedules daily/weekly challenges; requires pre-publication solver/replay certification, failure alert, cached fallback official pack, data freeze/rollback and pack versioning. What happens if solver fails overnight, backend is down, or old client replays after engine update? Need season archive and ability to disable bad pack without erasing personal record.

### AUD-P2-19 — Need a concrete brand/discoverability hypothesis
Why choose ours over existing Onet/Bubble/Match-3? Currently advantage is calm, accessible, truly pausable and family Top, which is promising but needs testing. Evaluate home screen, icon, short trailer and store screenshot CTR; adult players may prefer three standalone apps rather than one suite. Determine "3-in-1" vs individual store listings only AFTER real beta feedback.

### AUD-P2-20 — Support, localization and QA maintenance
Vietnamese/French localization review with text expansion, missing-glyph fonts, accessible gestures/audio, broken save triage and device matrix, app reviews/support, bug severity definitions, issue templates, owner and cadence for regressions. CI must run regression fixtures when adding even one new sprite pack or engine rule.

## Important contradictions and design pressure points for the producer to resolve
- Onet document says 5 boards in daily/weekly; for 50+ daily this may be too much. **Propose** 1 board daily, 3–5 weekly, not automatically changed.
- Ranked "unlimited practice + 3 tries" makes it easy to publish precomputed/solver-assisted perfect trajectories; top competitiveness must be validated. True elapsed speed-free competition still possible, but ranks may tie.
- Jewel special legality exception is present, but no unambiguous trigger and priority table. Agent may produce incompatible versions.
- Bubble "same shot queue" is ambiguous when generator drops colors no longer present; decide whether queue is fixed per run or state-adaptive under same seeded PRNG.
- All games require "continue after 24h" but local web storage can be lost by browser policy/device and is vulnerable to cross-tab races. Product promise needs backups/recovery and transparent UX.
- The render prompt deck creates **distinct** images but not necessarily consistent sprite scale; 64 prompts alone do not prove final style fidelity.
- "No time limit" must apply to a player's thinking and game state. A leaderboard has calendar submission windows; disclose season closure without turning it into an active-play countdown.

## Studio deliverables — smallest sensible next sprint
**Sprint A (one Link vertical slice):**
1. Choose a tech stack + pinned RNG/action schema and set up CI.
2. One real 360px Link board, 6x8, one solver-verified seed with playable, pause/resume after every action.
3. 20 deterministic edge-case fixtures; 100 generator seeds and rejected-seed log.
4. User observations on 5 adults first, iterate touch hitbox/instructions; expand to >=12 across modes in beta.
5. One real artwork calibration review of Link ICON-001 at 48px in the ACTUAL board, after approved spend.
6. Produce a 2-minute screen capture: launch → connect pair → deadlock/shuffle → clear → level advance → quit/resume exact board.
**Sprint B:** Bubble simulator with exact integer grid/aim + client/server fixture parity.
**Sprint C:** Jewel cascades/special engine + 40-swap experiment, measure score spread for Top.
**Sprint D:** Online Top backend replay and first family-only beta, then widen audience if meaningful.
**Sprint E:** Store, content ops, safe updates, privacy/ASO.

## Hard "go / no-go" definitions
- **OK TO START CODE:** yes, after task A chooses one pinned tech stack, with open design questions tracked.
- **OK TO BULK RENDER 64:** NO. First isolated W0 samples plus actual board-size approval and verified credits.
- **OK TO AUTO-GENERATE 1,000 PRODUCTION LEVELS:** NO. Need generators, solver checks, actual test metrics and human samples.
- **OK TO PROMISE ONLINE TOP:** NO. API + server replay + score distribution test not delivered.
- **OK TO RELEASE:** NO. App, QA, distribution, compliance, operations and actual player evidence missing.

## Authorities inspected on GitHub
README.md, AGENTS.md, data/product_manifest.json;
docs/00_PRODUCT_AND_RULES.md, 01_SHARED_ONLINE_RANKINGS.md, 02_LINK_GARDEN.md, 03_BUBBLE_ORCHARD.md, 04_JEWEL_GARDEN.md, 06_LEVEL_FACTORY_AND_QA.md, 07_AGENT_BUILD_ORDER.md, 08_ASSET_AND_BRAND_DIRECTION.md, 09_SCREENS_TOP_AND_PROGRESS.md, 10_DIFFERENTIATION_AND_PLAYTESTS.md, 11_CONCEPT_SELECTION_2026-10-12.md, 12_PRODUCTION_LOCK_V1.md, 13_ASSET_PIPELINE_AND_QA.md, 14_PLAYABLE_SPEC_AND_TEST_GATES.md, 15_PRODUCTION_RUNBOOK.md, 16_PRODUCTION_STATUS_V1.md; assets/render_manifest_v1.json, assets/RENDER_PROMPT_DECK_V1.md, assets/references/README.md; scripts/validate_production.mjs.
**No current mechanics, assets or score formulas were silently rewritten in this audit.**
