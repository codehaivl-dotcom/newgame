# PRODUCTION LEDGER — Mini Arena MOBA

**Baseline date:** 2026-10-11  
**Inventory:** 100 planned IDs (6 CHR + 12 WPN + 24 MAP + 18 OBJ + 12 INT + 12 ENV + 8 PKU + 8 VFX).  
**Images generated for this repo:** **0**  
**Images approved:** **0**  
**Source sheets committed:** **0**  
**Crops committed:** **0**  
**3D models committed:** **0**  
**Recorded credit usage:** **0** (catalog setup only, not a credit meter read)

> Previous chat images are **references and draft tests**, not accepted repository source art. Nothing is marked completed until user review and real file commit.

## Ledger rules
One row per asset revision event. When multiple assets come from one sheet, **each asset receives its own row**, all pointing to the same source sheet but different crop/image paths.

| Date | Asset ID | Version | Event/status | Source path | Crop path | 3D path | Credits | Review/notes |
|---|---|---|---|---|---|---|---:|---|
| 2026-10-11 | ALL | — | PLANNED | — | — | — | 0 | Initialized 100-item master list |

## T-pose production audit correction (2026-10-11)
- `ASSET_AUDIT_V2_TPOSE.md` committed with 100 per-ID spec decisions. Six characters require exact empty-handed T-pose.
- All 100 assets remain PLANNED and unreviewed as imagery; **no source images, GLBs or user PASS created by this correction**.
- Old A-pose asset production prompts are superseded; current core prompt cards must be used only after selecting IDs.

## Production Design V1.0 audit
- Production design docs committed; **no asset image approval was performed**.
- Manifest scope snapshot: 18 CORE_AI / 16 SECONDARY_AI / 19 HOLD_AI / 16 CORE_CODE / 23 SECONDARY_CODE / 8 VFX_RUNTIME. Prior P0 labels are not current render permission.
- Actual provider credit balance/expiry **not yet independently verified**; zero recorded external generation jobs in this audit is not a statement about global account balance.
- [Audit scorecard](PRODUCTION_AUDIT_SCORE_V1.md): 80/100 document readiness only.

## Wave plan (not authorization to generate)
- Wave 0: style/rig validation (CHR-01, CHR-02, OBJ-04, INT-01).
- Wave 1: six hero models and corresponding signature weapons.
- Wave 2: match-critical props and map modules.
- Wave 3: remaining approved props and extensions.
- VFX handled as 2D/shader production, not 3D credits.

## Handoff checklist for every render session
- Identify IDs before rendering; confirm image can be cropped cleanly.
- Present to user; record explicit PASS/FAIL and reasons.
- Save accepted source and per-asset crops when possible.
- Verify exact GitHub file paths, then update manifest and ledger **in the same delivery**.
- Include commit SHA and count of newly approved assets in final report.
