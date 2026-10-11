# NEWGAME — QUIET PUZZLE CLUB
**CURRENT ACTIVE PROJECT: three approved relaxing puzzle games, one optional online leaderboard system.**

## Three approved games
1. **Link Garden / Nối thú** — tap two identical tiles, connect using <=2 right-angle bends.
2. **Bubble Orchard / Bắn bóng** — aim slowly, connect >=3 matching colors, careful rebounds.
3. **Jewel Garden / Xếp kim cương** — swap neighboring jewels, match >=3, cascade and build personal best.

**No real-time clock.** Pause or close anytime, resume same board/action, large touch targets, offline Free Play. Optional weekly/daily **same-seed, no-speed** Top online, plus Family rankings. Endless casual progress, finite standardized actions/boards in official ranked comparisons. No forced ads or rig/3D required.

## PRODUCTION V1 — REQUIRED
- [12 — LOCKED production scope + art and screen contract](docs/12_PRODUCTION_LOCK_V1.md)
- [64 asset catalog / full standalone prompts / render waves](assets/render_manifest_v1.json)
- [Readable 64 render prompt cards](assets/RENDER_PROMPT_DECK_V1.md)
- [13 — Render pipeline, source crop, alpha, user review and import QA](docs/13_ASSET_PIPELINE_AND_QA.md)
- [14 — Playable acceptance and deterministic rules test gates](docs/14_PLAYABLE_SPEC_AND_TEST_GATES.md)
- [15 — Agent production runbook](docs/15_PRODUCTION_RUNBOOK.md)
- [Production structural validator](scripts/validate_production.mjs)
- [Production V1 audit and actual status](docs/16_PRODUCTION_STATUS_V1.md)
- [Indie Studio Greenlight Audit — 20 concrete gaps, prototype GO / bulk production NO-GO](docs/17_INDIE_STUDIO_GREENLIGHT_AUDIT.md)
- [Checksum/ingestion instructions for 3 approved visual references](assets/references/README.md)

Run locally after checkout: node scripts/validate_production.mjs. Passing this structural validator does not mean playable games or rendered assets pass QA.

## Earlier design docs — supporting reference
- [00 — Product authority & two play modes](docs/00_PRODUCT_AND_RULES.md)
- [01 — Online verified Top, anti-cheat, saved progress](docs/01_SHARED_ONLINE_RANKINGS.md)
- [02 — Link Garden rules](docs/02_LINK_GARDEN.md)
- [03 — Bubble Orchard rules](docs/03_BUBBLE_ORCHARD.md)
- [04 — Jewel Garden rules](docs/04_JEWEL_GARDEN.md)
- [06 — Level factories and QA](docs/06_LEVEL_FACTORY_AND_QA.md)
- [07 — Agent build order](docs/07_AGENT_BUILD_ORDER.md)
- [08 — Visual asset direction](docs/08_ASSET_AND_BRAND_DIRECTION.md)
- [09 — UX screens and online Top presentation](docs/09_SCREENS_TOP_AND_PROGRESS.md)
- [10 — Differentiation ideas and human playtests](docs/10_DIFFERENTIATION_AND_PLAYTESTS.md)
- [Concept approval decision](docs/11_CONCEPT_SELECTION_2026-10-12.md)
- [Agent rules](AGENTS.md)

## Scope decision
**APPROVED CONCEPT DIRECTION:** Link Garden, Bubble Orchard, Jewel Garden. **REJECTED:** Color Atelier (pouring/sorting colors). Do not build or render Color Atelier. Concept approval does NOT imply final game assets or implementation.

## Studio greenlight (audit 2026-10-12)
**GO for one playable Link vertical slice. NO-GO for autonomous full-game production, 64-image bulk render, mass level publishing, online Top launch or app-store release.** The independent [studio audit](docs/17_INDIE_STUDIO_GREENLIGHT_AUDIT.md) identifies 8 P0 engine/production blockers, 8 pre-beta gaps and 4 launch/operations gaps; it is a review, not a silent gameplay rule change.

## What is NOT complete
No released application, ranked backend, saved playable browser preview, approved art pack or 1,000 verified levels exists at this stage. Docs and image prompts are **production contracts / tunable starting values**, not playtesting proof. Render catalog: 44 CORE + 20 OPTIONAL, no actual completed image job/approved sprite. Three approved poster visuals currently in this conversation, not yet GitHub-committed as binary reference files.

## Game pivot / legacy
Old arena-MOBA design is **cancelled** and kept only in Git history / branch [archive/arena-moba-2026-10-12](https://github.com/codehaivl-dotcom/newgame/tree/archive/arena-moba-2026-10-12). The former 100 asset list is retired. Do not implement MOBA characters, combat, maps, networking or old GLBs from the archive.
