# AGENT EXECUTION HANDOFF — Production Design V1
**Critical:** This is a task map, **NOT permission to automatically start code or spend credits**. The immediate user collaboration is producing and reviewing isolated source asset images.

## Phase A — selected image session (do this first upon user authorizing IDs)
1. Read `AGENTS.md`, `VISUAL_BIBLE_V1.md`, `IMAGE_RENDER_SPEC_V1.md`, `docs/ASSET_AUDIT_V2_TPOSE.md`, `assets/asset_build_specs_v1.json`, core prompt deck.
2. Review ID → prompt → generate isolated original source PNG (one complex asset per image), record generator job ID and measured credits.
3. Inspect source full-resolution, confirm 20% crop margins and no hidden prop; user reviews PASS/FAIL. If rejected, record reason and version; only two retries before escalating.
4. Verify source file and optional crop accessible in GitHub or explicit managed artifact storage, then update manifest path, status and ledger with SHA. No verified binary = no `APPROVED` state.
5. For characters: **STRICT frontal T-pose** (both arms horizontal 90° ±5°, hands absolutely empty, no body-attached removable props or VFX); no A-pose, shared rig candidate. For map kit: 2m CODE geometry, not Image-to-3D. Do not build unrelated gameplay during credit-expiry production wave.

## Phase B — after source image batches pass
1. Test import ONE approved character and detached weapon, rig once, socket once, 4 basic animations. Measure asset file/texture/tris and screenshot 96px readability.
2. Model CODE geometry at 2m scale; tile 3x3 seam/collision test; apply approved visual materials.
3. Assemble DUEL-01 / CONTROL-01 collision layout and test symmetry + pathing in neutral art.
4. Implement input, combat, six basic kits, bot FSM, objectives, win/lose/retry as `GAMEPLAY_SPEC_V1.md`; do not invent economy or ultimates.
5. Run automated tests described in `QA_GATES_V1.md`, then gather real user feedback.
6. Online 1v1/3v3 requires a **separate** network milestone; do not claim shipping on bot-only implementation.

## Task acceptance log template
```
DATE:
TASK-ID / ASSET-ID:
BEFORE STATE:
WHAT CHANGED:
REAL PATHS / COMMIT SHA:
TESTS RUN & OUTPUT:
CREDITS ACTUAL (if render):
REVIEWER APPROVAL (if applicable):
NEXT BLOCKER:
```

## Automatic check (design repo)
```bash
node scripts/validate_design.mjs
```
Expected green result: 100 IDs, 100 build specs, 18 core image cards, no fabricated assets. The script intentionally checks the **pre-render initial state**, so revise it when approved items begin flowing; don't disable QA silently.
