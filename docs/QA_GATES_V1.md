# QA / ACCEPTANCE & AUDIT GATES — V1
## Gate hierarchy (all independent)
| Gate | Pass condition | Who/what validates |
|---|---|---|
| D0 DESIGN | Gameplay spec, 6 basic kits, 2 geometry contracts, visible anti-scope rules exist | Reviewer checks docs |
| D1 IMAGE | Per-ID silhouette, no extra objects, high-resolution crop-safe, original, consistent | User approves image revision in chat |
| D2 MODEL | Approved image → model with legible silhouette, usable topology, correct pivot/scale and physical separation | 3D automated checks + human rotating preview |
| D3 RIG | If CHR, one shared skeleton import, limbs don't fuse, attack sockets and 4 core actions work | Rig/animation preview |
| D4 MAP | Interlocking 2m grid and validated symmetric collision/LOS/nav | Automated map check + actual visual pass |
| D5 GAMEPLAY | Hero kits + bots + win/lose loop pass; no invisible hit and no stuck matches | Automated sim + human testers |
| D6 NETWORK | Human PvP validated under latency, disconnect, rematch and server authority | Required **only before claiming online PvP works** |

**Any failed gate prevents status promotion past that gate.** Passing D0 does not imply D1/D2/D5. A generated image is not a 3D model, a GLB is not a rig-ready model, a code test isn't proof of fun.

## Design audit vs QA
A written `PASS_SPEC` audit is **NOT** an approved image. D1 requires explicit user visual approval + verified source file; D2 and D3 require real model and rig tests. Source images that do not meet T-pose/empty-hand rule cannot pass D1 even if artistically attractive.

## Artwork acceptance
- One isolated object per CHR or complex item, no offscreen cuts; empty margin at least 15–20% of target cell along critical silhouette axes.
- 2x2 crops only for small props when objects+shadow do not overlap (minimum 15% cell-width free separation), not characters.
- PNG sufficiently large for image-to-3D: reviewer judges actual detail at 1:1 crop, not enlarged display. No text, logo, design copy or figure references in image.
- **CHR REQUIRED STRICT T-POSE** in full frontal view: straight arms horizontal (90° ±5°), wrists/elbows aligned, empty hands and gap under both arms, legs separated, no handheld/worn equipment or VFX. A-pose/casual stance/combat pose is a D1 FAIL.
- Extra side/3/4 views may be captured only for the **same** character ID to improve depth inference; never combine multiple heroes in a 3D source image.
- Manual rejection reasons: intertwined weapons, cape/hair fusing hands, body hidden, wrong perspective, missing back geometry assumptions, messy silhouette, model resembling a known game hero.

## 3D functional acceptance
- Native file opens; unit scaling validated against 1.65m CHR and modular 2m map grid. Mesh meshes remain watertight where relevant, no disconnected floating unintended shell; texture paths available.
- For characters: strict T-pose source, hands free from items, no integral rigid attachments spanning joints; hand/foot separation and straight horizontal arms; after import arms can lower/raise and legs move through 4 standard actions. Retarget shared rig on ONE model before calling any six-character set rig-ready.
- No fixed universal triangle budget set without target device/engine; report actual tris, materials and draw calls, flag scene performance regressions and define budget once platform is settled.
- Colliders and nav are simplified authored primitives, not raw million-polygon source geometry.

## Gameplay QA sample
- Deterministic same seed/input → same hit/KO/objective result; compare at fixed time step.
- 6x attacks + 12x skills + universal dash tests, cover/visibility/slow/heal/guard/mine/barrier tests, min 2 bot difficulty states.
- 1v1 best-of-3 end/restart state test; 3v3 two-point scoring/contest/tie/overtime/respawn and bot slot fill.
- All 6 classes complete solo duel vs basic AI, and 3v3 with five bots can start and end.
- Test all 6 vs 6 matchup pairs in 1v1 and at least 10 diverse 3v3 compositions for obvious unstoppable synergies; no claim of fair balance without user playtest samples.
- Actual player test: 10 short sessions; measure first-action latency, understanding of death cause and desire to rematch. Targets: 80% identify cause of last death and at least 60% voluntarily click retry during first test cohort (**targets only; not measured**). Avoid publishing as accomplished.

## Production ledger invariants
- `asset_manifest.json`: 100 unique IDs, no status `APPROVED` without explicit approval and verified image path, no path filled absent actual file in storage.
- Per approved revision capture source, crop (when applicable), reviewer PASS date, model downstream gate independently.
- Record failed renders as failures with reason; do not hide behind a single DONE state.
- `PRODUCTION_LEDGER.md` counts derive from real files and reviews; do not inflate.
- Any gameplay balancing change does not automatically invalidate an approved 3D asset unless silhouette, shape, attachment or functional intent changes.

## Red flag stop signs
Stop a batch if: >25% sampled assets have geometry bleed/crop failure; 2 consecutive character generations produce fused limbs; model export unusable; provider credit burn exceeds projection; asset is materially derivative of a published game hero. Fix style template/batch, not the 100-item master list.
