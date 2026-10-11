# IMAGE RENDER STANDARD V1 — review first, archive each approved asset

## Art direction
- Mini Arena MOBA: readable chibi/stylized 3D look, clean silhouettes, medium detail, warm sandstone/stone-metal modular terrain; bright team-readable combat color accents.
- Isometric/top-down camera in gameplay. Source asset concept uses consistent neutral 3/4 orthographic product-view, not dramatic perspective.
- **Original designs only.** Inspiration from arcade/MOBA systems is allowed; no recognizably copied characters, costumes, weapons, logos, map layouts or franchise motifs.
- No UI, captions, IDs, logos, watermarks, gameplay montage, scenic illustration, multiple objects merged together or glowing spell VFX on geometry destined for Image-to-3D.

## Crop-safe source layout
- Default: **1 asset per source image** for CHR, WPN and INT; complex OBJ and ENV also default to 1 image per asset.
- Optional 2x2 sheet for four **small simple props of similar scale only**. Never more than 4 pieces. No 3x3, no strip of crowded objects.
- Every silhouette, attached permanent geometric part, and its shadow must fit inside a dedicated isolated rectangle.
- Minimum free margin **20% of each asset cell's width and height from the nearest edge** when practical; the gap between any two silhouettes must be **at least 15% of cell width**. If this cannot be met at usable resolution, reduce to 1 asset per source image.
- **Nothing touching, overlapping or crossing cells**, including light bloom, cast shadow, floating debris and signs. Do not include borders/grid lines in final raster image; crop regions are tracked in manifest or sidecar metadata.
- Flat neutral background (prefer #202832 or medium neutral gray), simple diffuse studio light, soft unobtrusive shadow, full object visible. Do not use dramatic ground plane.
- Original rendered source should be high enough resolution to leave a clean crop for the specific Image-to-3D pipeline. Do not enlarge low-resolution crops and pass them off as source resolution.

## Character-specific production
- One character per image, centered full body with generous empty surrounding space.
- **MANDATORY STRICT T-POSE, NOT A-POSE:** arms straight out horizontally at shoulder height, left-right symmetric (90° ±5° from relaxed downward arm); elbows and wrists straight, palms downward, both hands EMPTY; legs separated hip-width, feet parallel. Neutral expression, front orthographic first (an extra 3/4 reference is optional, not a replacement).
- **No item attached to character whatsoever:** no handheld weapons, shields, staves, tools, mines or detachable packs, no attached VFX. No trailing long scarves, cables, weapon slings or cloth intersecting body/arms. Weapon and backpack slots/attachment points are documented separately as runtime sockets.
- Target one shared stylized human/chibi rig. Simplify hard-surface armor so shoulder, elbow, hip and knee articulate. An empty-handed T-pose source with visible axilla/armpit clearance is a hard D1 requirement; rig import/retarget remains a separate D3 gate.
- The six prototypes are visual placeholders; each requires individual silhouette/rig review before final asset approval.

**Reject instantly:** any character source with arms sloping down into A-pose, asymmetric pose, a weapon/item held or welded to body, dangling cables connecting limbs, integrated removable backpack, clipped fingers/boots, blocked shoulder or elbow topology.

## Modular environment
- Tiles, walls and rails must be manufactured on an explicit grid: stable units, shared edge dimensions, pivot/origin, walkability, cover height and projectile collision.
- Procedural/CODE entries should be modeled to exact dimensions. A nice AI illustration **does not** prove seamless geometry.
- Tileable textures and modular maps must be tested in repeating 3x3 assemblies before production use.
- Water, bushes, low cover, destructible cover and tall walls have distinct gameplay/collision semantics.

## VFX-specific
- VFX-01..08 are **not Image-to-3D models**. Generate 2D sprite sheets or shaders/particles separately after the gameplay effect timing and hitbox are defined.
- Gameplay VFX may be used only after action anticipation and team readability QA.

## Source-crop dimension rule
- For characters **always 1 asset / 1 full image**; never assemble a crowded character sheet for 3D generation.
- For environment 2x2 small props only if the 15–20% separation margin survives crop. Extract crops only after visually checking full-res source.

## Review and acceptance per asset
1. Select ID(s) from `assets/asset_manifest.json`; do not render IDs not requested.
2. Write a short production prompt and image composition; set `PROMPT_READY`.
3. Render source; record ID, source sheet, generation parameters/seed where available, estimated/actual credits used and date; status `RENDERED`.
4. Present full image for user review, status `REVIEW`. **Never auto-approve.**
5. Check: original silhouette, stylistic consistency, clean separation, crop margins, no unwanted extra objects, correct camera/shape, intended function and manageable geometry.
6. On reject: mark `REJECTED` and record reason; retain revision history. On accept: `APPROVED`; save source, cropped PNG, and when available final GLB; record **real committed Git paths**.
7. The approved source is immutable. A change creates `v02`, etc., with a new approval.

## Naming and location
```text
assets/sheets/CHR/SHEET-CHR-001_v01.png       # optional multi-image source
assets/source/CHR/CHR-01_v01.png               # source single asset
assets/crops/CHR/CHR-01_v01.png                # isolated crop for Image-to-3D
assets/models/CHR/CHR-01_v01.glb               # 3D, only after downstream QA
assets/asset_manifest.json                    # register authoritative paths and status
docs/PRODUCTION_LEDGER.md                     # log every generation/review/accept/reject
```

**No fake completion:** Never fill source/crop/model paths until the exact files have actually been committed and verified in GitHub.

## Suggested first production review batch (do not auto-render)
- Character silhouette reference: `CHR-01` (solo A-pose, no weapon).
- Character contrast reference: `CHR-02` (solo A-pose, heavy armor).
- Environmental material reference: `OBJ-04` or `OBJ-12`.
- Interactive hero prop reference: `INT-01`.
- After these pass, move through IDs one batch at a time, saving each accepted result.

## Credit policy
The project has ~8,535 expiring image/3D generation credits (user-provided). They are **not a requirement to generate 100 models**. Track actual burn per batch; do not invent a per-asset price; export source data before expiry. Avoid expensive 3D generation for `CODE` and `VFX` assets unless explicitly authorized.
