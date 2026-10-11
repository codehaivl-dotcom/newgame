> **DESIGN RESET 2026-10-12:** The original 100-ID inventory is **not a limit or mandate**. The final game may require 300–400 assets. Gameplay fun, agent feasibility, modular-map assembly, rig simplicity and tested counterplay determine scope. **Current 1v1/3v3 control and two-lane siege mechanics are candidate directions, not approved final game design.** Read [GAME DIRECTION RESEARCH V3](docs/GAME_DIRECTION_RESEARCH_V3.md) when it is available. The 100-item manifest remains a historical candidate snapshot; no art is approved.

# NEWGAME — MINI ARENA MOBA (working title)
**Status: PRODUCTION DESIGN V1.0 documented; visual production not yet approved.** Original small-scope 1v1 / 3v3 arena, simple inputs, melee/ranged/buff/trap roles, map cover and outplay. **No remakes of existing games.**

## START HERE: read in this order
1. [PRODUCTION DESIGN — V1 authority](docs/PRODUCTION_DESIGN_V1.md): scope, what game we are building and anti-feature-creep.
2. [GAMEPLAY SPEC](docs/GAMEPLAY_SPEC_V1.md) + [SIX HERO KITS](docs/HERO_BALANCE_V1.md): playable rules, timing, win/lose, buffs, bot behaviors; numbers are tunable baselines.
3. [MAP/GRID CONTRACT](docs/MAP_SPEC_V1.md): exact 2m grid, wall/bush/collision, layouts for Duel and Control.
4. [VISUAL BIBLE](docs/VISUAL_BIBLE_V1.md) + [IMAGE RENDER SPEC](docs/IMAGE_RENDER_SPEC_V1.md): art style, single-isolated character, crop margins, shared rig.
5. [100-ASSET PRODUCTION AUDIT / STRICT T-POSE](docs/ASSET_AUDIT_V2_TPOSE.md): per-ID decisions and rig-safe source requirements.
6. [100-ID MASTER LIST](docs/ASSET_MASTER_LIST_V1.md) + [per-ID BUILD SPECS](assets/asset_build_specs_v1.json): what is actually produced and how.
7. [PRODUCTION PLAN](docs/ASSET_PRODUCTION_PLAN_V1.md) + [18 CORE IMAGE PROMPTS](docs/RENDER_PROMPTS_CORE_V1.md): credit-deadline-safe order, not automatic render permission.
8. [QA GATES](docs/QA_GATES_V1.md) + [PRODUCTION LEDGER](docs/PRODUCTION_LEDGER.md) + [machine manifest](assets/asset_manifest.json).
9. [AUDIT & SELF-SCORE](docs/PRODUCTION_AUDIT_SCORE_V1.md): **80/100 design/document readiness** with explicit blockers.

## Current verified baseline
- 100 unique ID catalog: **53 GEN candidates, 39 CODE geometry, 8 VFX**.
- Production scopes: **18 CORE_AI, 16 SECONDARY_AI, 19 HOLD_AI, 16 CORE_CODE, 23 SECONDARY_CODE, 8 VFX_RUNTIME**.
- All 100 items currently `PLANNED`; **0 approved source images, 0 cropped assets, 0 models committed**. Per-ID **design audit** (PASS_SPEC / REVISE / HOLD) is separate from actual image/model approval. Prior chat mockups are reference only.
- Approx. 8,535 generation credits may expire soon; exact provider/balance/expiry and export workflow **not confirmed**. No bulk rendering before a quick first-source calibration; **do not require a multi-day gameplay prototype to begin image review**.
- Online multiplayer is an ambition, **not** a proved/working repo feature. V1 gameplay baseline is solo player with bot-filled 1v1 and 3v3.

## Mandatory hero image rule
**Every CHR-01..06 source must be strict full-body frontal T-POSE (arms horizontal 90° ±5°), empty-handed, without any item, weapon or VFX.** No A-pose. Keep removable backpacks/gear separate. See [audit V2](docs/ASSET_AUDIT_V2_TPOSE.md).

## Before each batch
Read `AGENTS.md`; select ID(s); review prompt; render isolated assets; user approves/rejects in chat; save and verify committed source paths; update manifest + ledger. Never invent file paths, model results, test results or costs.
