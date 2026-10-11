# AGENTS.md — NEWGAME AUTHORITATIVE INSTRUCTIONS

## Mandatory read order
1. `docs/PRODUCTION_DESIGN_V1.md`
2. `docs/GAMEPLAY_SPEC_V1.md`, `docs/HERO_BALANCE_V1.md`
3. `docs/MAP_SPEC_V1.md`
4. `docs/VISUAL_BIBLE_V1.md`, `docs/IMAGE_RENDER_SPEC_V1.md`
5. `assets/asset_manifest.json`, `assets/asset_build_specs_v1.json`
6. `docs/ASSET_PRODUCTION_PLAN_V1.md`, `docs/RENDER_PROMPTS_CORE_V1.md`
7. `docs/QA_GATES_V1.md`, `docs/PRODUCTION_LEDGER.md`

## Production authority and safety rails
1. Core product: **original** skill-first isometric arena combat. Six roles (melee/tank/ranged/support/trap/flank), 1v1 + 3v3 control, small modular maps, quick rounds and retries. Learn principles, do not clone copyrighted characters, art, layout or visual identity.
2. **Do not expand V1** with a classical 3-lane MOBA, loot/extraction, levelling, crafting, 24 heroes, complex ragdoll physics, unrequested game systems or web-scale multiplayer services.
3. Gameplay numeric values are design **baselines**, not proven balance. Engine/runtime unknown until validated. Never claim online PvP works merely because 3v3 bots work.
4. Manifest is authority for immutable ID, status, scope and source paths. Per-ID build spec is authority for prompt/geometry. Master list is a readable catalog, not render authorization.
5. Inventory has **100 IDs, not 100 mandated model generations**: 18 CORE_AI, 16 SECONDARY_AI, 19 HOLD_AI, 16 CORE_CODE, 23 SECONDARY_CODE, 8 VFX_RUNTIME. No render jobs for HOLD without explicit user authorization and scope change.
6. Never render without user-selected IDs. For an image, **one character or complex asset per source**; 2x2 only when simple separated props; minimum generous crop margins. Image-to-3D source: no weapon glued to CHR, no baked VFX, labels, UI, scenery or multiple different objects.
7. CHR sources use clear A-pose for shared rig; detached weapon sockets, clear arm/leg joints and role silhouettes. Refuse designs with fused anatomy, extra props, unreadable shape or similarities to existing famous heroes.
8. MAP CODE items use exact 2m grid, pivots, line-of-sight and collision rules. Do not turn an artistic concept image into geometry authority. VFX are sprites/particles; CODE items built procedurally.
9. Progress states: PLANNED→PROMPT_READY→RENDERED→REVIEW→APPROVED or REJECTED; downstream model/rig gate is independent. **No status APPROVED without user approval AND verified image path.** No credit number without provider measurement.
10. Preserve original approved revisions; record new `v02` etc. Update manifest and ledger per accepted/rejected ID, keeping real commit SHA/path evidence. Never fill imaginary URLs or paths. If binary upload is unsupported, report limitation and keep status NOT_COMMITTED.
11. Credit expiry makes short image calibration essential but **does not require multi-day gameplay prototype before rendering**. Follow production plan and cutoff safety.
12. No self-grading "playable" or "shippable" without QA evidence, actual match tests and (if online) network tests.

## Immediate order
Production design docs now exist. Do not invent more asset IDs. Start only after selected image IDs and follow the core prompt deck, review, crop/3D checks and repository ledger, as authorized by user.
