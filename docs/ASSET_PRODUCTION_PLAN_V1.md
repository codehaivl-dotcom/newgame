# EXPIRING-CREDIT ASSET PRODUCTION PLAN — V1
**Premise:** ~8,535 available credits **may expire soon** (deadline/provider/rate not independently confirmed). This plan is designed to use credits before deadline without building a multi-day prototype. No credit spend is authorized simply by writing this document.

## Audit of inventory
- 100 immutable IDs: 6 CHR, 12 WPN, 24 MAP, 18 OBJ, 12 INT, 12 ENV, 8 PKU, 8 VFX.
- 53 GEN candidates, 39 CODE exact/procedural geometry, 8 VFX (not 3D).
- 38 previously tagged P0 across methods does **not** mean 38 AI generations. Distinguish inventory priority vs actual render order.

## First wave: 18 high-leverage AI sources (approval still required)
- CHR-01..06 (6 hero A-pose sources; ~same simplified shared rig; silhouette-first, no weapons, no VFX).
- WPN-01,03,05,07,09,11 (6 primary detachable weapons).
- OBJ-04,12,13,14 (4 distinct combat affordances: explosive barrel, large rock cover, low/tall bushes).
- INT-01,02 (capture point and spawn pedestal).
**Total: 18 ID sources.** Not necessarily 18 generated GLBs; some may fail 3D tests and be reconstructed manually.

## Separate in-game geometry track — no AI-3D credit
- MAP-01..13,17 and OBJ-01..03,06,09: exact modular geometry, pivots, collisions and 2m grid.
- Implement floor tiles via geometry and material variants; not via 2D cropped object model sheets.
- VFX-01..08 runtime shader/particles/sprites; create only when timing/hitboxes are known.
- PKU-01..08 are **optional future gameplay objects**; do not create new gameplay pickup rules solely to use the catalog.

## All inventory scope groups (counts validated against manifest)
- **CORE_AI 18**: six CHR, six primary WPN, OBJ-04/12/13/14, INT-01/02. First wave as above.
- **SECONDARY_AI 16**: MAP-14..16; WPN-10; OBJ-08/11/15/16/17/18; ENV-01/02/06/07/10/11. These are optional visual enhancements, not core gameplay requirements; WPN-10 temporary mine can be procedurally drawn until visual asset approval.
- **HOLD_AI 19**: WPN-02/04/06/08/12 (alternate/non-core weapons), INT-03..12 (extra fixtures/turrets/gates/hazards), ENV-03/04/05/12 (nonessential decoration). No rendering without user re-scoping.
- **CORE_CODE 16, SECONDARY_CODE 23**: dimensional mesh/material work, not Gen3D.
- **VFX_RUNTIME 8**: 2D/particle/shader production. 
- Game design only enables built-in control points and spawn; **do not introduce pickups, heal pedestals or buildable turrets to justify unused assets**.

## Decision ladder, hours not days
**Hour 0: lock:** Copy/inspect source manifest, review model-generation provider balance, expiry timestamp, per-asset generation cost and export rights (unknown until provided).
**Small art validation:** CHR-01 source, CHR-02 source, WPN-01 detached, OBJ-04 standalone. Review full-body, crop/isolation, color and manufacturability immediately. 2 attempts max per problematic ID before reclassify to manual cleanup; do not burn a whole day.
**Then batch:** Group by asset category and prompt style. Image output always tracked to ID and variant `v01/v02`. Use provider batch **only** if supported and if every output has stable unique job ID.
**Image approval and 3D:** User review can run alongside asset generation. Only approved image revisions may enter image-to-3D. Store complete exports first; 3D model rig/collision tests are a separate later gate.
**Last hour:** Halt expensive retries; export/unpack every finished file; checksum/list status; log pending/failed jobs and unused credits truthfully. Do not claim a 3D model exists when only its image does.

## Real cost accounting
For each job store: `provider`, `model`, `job_id`, `source_id`, `cost_credits_actual` (nullable if unknown), `started_at`, `completed_at`, `downloaded_at`, `status`, paths and reviewer decision. Sum **measured** costs only. Do not infer all-model price from one quote; user can authorize spending after the first 4 measurements.
- Never overwrite source image. Save source+export as per-ID revisions; all crop paths refer to verified committed files.
- Keep PNG (lossless), alpha if available, any necessary texture outputs, GLB or preferred 3D format with usage rights. Prefer manifest-indexed files over collage PSD.
- If upload path is not verified, record `NOT_COMMITTED`, save local export and report blocker; never mark repo-committed.
- GitHub file limits/versioning may make full GLB storage unsuitable; use Git LFS or artifact storage where supported, with manifest verified external storage URIs (not invented). Do not commit massive binaries through connector without confirmation.

## Cutoff safety
- Stop spending before credit expiry with sufficient time for downloading and checking outputs.
- If the first 4 style checks are rejected, **pause that category**, fix prompt or model settings; never auto-generate 50 bad clones.
- No hardcoded budget percentages before provider rate is known. Progress report: assets accepted, files verified, credits *actually* consumed, credits remaining when visible, reasons blocked.
