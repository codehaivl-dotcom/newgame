# NEWGAME — MINI ARENA MOBA (working title)
**Status: PRODUCTION DESIGN V1.0 documented; visual production not yet approved.** Original small-scope 1v1 / 3v3 arena, simple inputs, melee/ranged/buff/trap roles, map cover and outplay. **No remakes of existing games.**

## START HERE: read in this order
1. [PRODUCTION DESIGN — V1 authority](docs/PRODUCTION_DESIGN_V1.md): scope, what game we are building and anti-feature-creep.
2. [GAMEPLAY SPEC](docs/GAMEPLAY_SPEC_V1.md) + [SIX HERO KITS](docs/HERO_BALANCE_V1.md): playable rules, timing, win/lose, buffs, bot behaviors; numbers are tunable baselines.
3. [MAP/GRID CONTRACT](docs/MAP_SPEC_V1.md): exact 2m grid, wall/bush/collision, layouts for Duel and Control.
4. [VISUAL BIBLE](docs/VISUAL_BIBLE_V1.md) + [IMAGE RENDER SPEC](docs/IMAGE_RENDER_SPEC_V1.md): art style, single-isolated character, crop margins, shared rig.
5. [100-ID MASTER LIST](docs/ASSET_MASTER_LIST_V1.md) + [per-ID BUILD SPECS](assets/asset_build_specs_v1.json): what is actually produced and how.
6. [PRODUCTION PLAN](docs/ASSET_PRODUCTION_PLAN_V1.md) + [18 CORE IMAGE PROMPTS](docs/RENDER_PROMPTS_CORE_V1.md): credit-deadline-safe order, not automatic render permission.
7. [QA GATES](docs/QA_GATES_V1.md) + [PRODUCTION LEDGER](docs/PRODUCTION_LEDGER.md) + [machine manifest](assets/asset_manifest.json).
8. [AUDIT & SELF-SCORE](docs/PRODUCTION_AUDIT_SCORE_V1.md): **80/100 design/document readiness** with explicit blockers.

## Current verified baseline
- 100 unique ID catalog: **53 GEN candidates, 39 CODE geometry, 8 VFX**.
- Production scopes: **18 CORE_AI, 16 SECONDARY_AI, 19 HOLD_AI, 16 CORE_CODE, 23 SECONDARY_CODE, 8 VFX_RUNTIME**.
- All 100 items currently `PLANNED`; **0 approved source images, 0 cropped assets, 0 models committed**. Prior chat mockups are reference only.
- Approx. 8,535 generation credits may expire soon; exact provider/balance/expiry and export workflow **not confirmed**. No bulk rendering before a quick first-source calibration; **do not require a multi-day gameplay prototype to begin image review**.
- Online multiplayer is an ambition, **not** a proved/working repo feature. V1 gameplay baseline is solo player with bot-filled 1v1 and 3v3.

## Before each batch
Read `AGENTS.md`; select ID(s); review prompt; render isolated assets; user approves/rejects in chat; save and verify committed source paths; update manifest + ledger. Never invent file paths, model results, test results or costs.
